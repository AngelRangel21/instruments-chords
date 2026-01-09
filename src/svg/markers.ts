import type { ChordShape } from '../types'
import { getFretY, getStringX } from './utils'

export function renderMarkers (chord: ChordShape): string {
  let svg = ''

  for (const [string, fret] of Object.entries(chord)) {
    const s = Number(string)
    const x = getStringX(s)

    if (fret === 'x') {
      svg += `<text x1="${x}" y="20" text-anchor="middle">x</text>`
    } else if (fret === 0) {
      svg += `<cicle cx="${x}" cy="20" r="5" fill="none" stroke="black" />`
    } else {
      const y = getFretY(fret)
      svg += `<cicle cx="${x}" cy="${y}" r="6" fill="black" />`
    }
  }

  return svg
}
