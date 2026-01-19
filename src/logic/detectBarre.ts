import { ChordShape, StringNumber } from '../types'

export interface Barre {
  fret: number
  from: StringNumber
  to: StringNumber
}

const STRING_ORDER: StringNumber[] = ['6', '5', '4', '3', '2', '1']

export function detectBarre(chord: ChordShape): Barre | null {
  const fretsMap: Record<number, StringNumber[]> = {}

  for (const string of STRING_ORDER) {
    const fret = chord[string]

    // ignorar cuerdas muteadas o al aire
    if (typeof fret !== 'number' || fret <= 0) continue

    if (!fretsMap[fret]) {
      fretsMap[fret] = []
    }
    fretsMap[fret].push(string)
  }

  for (const fretStr in fretsMap) {
    const strings = fretsMap[Number(fretStr)]

    if (strings.length < 2) continue

    const indices = strings
      .map((s) => STRING_ORDER.indexOf(s))
      .sort((a, b) => a - b)

    let consecutive = true
    for (let i = 1; i < indices.length; i++) {
      if (indices[i] !== indices[i - 1] + 1) {
        consecutive = false
        break
      }
    }

    if (consecutive) {
      return {
        fret: Number(fretStr),
        from: STRING_ORDER[indices[0]],
        to: STRING_ORDER[indices.length - 1]
      }
    }
  }
  return null
}
