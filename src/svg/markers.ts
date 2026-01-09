import type { ChordShape } from '../types'
import { getStringX, getFretY } from './utils'

export function renderMarkers(chord: ChordShape): string {
  let svg = ''

  for (const [string, fret] of Object.entries(chord)) {
    const s = Number(string)
    const x = getStringX(s)

    if (fret === 'x') {
      svg += `<text x="${x}" y="20" text-anchor="middle">x</text>`
    } else if (fret === 0) {
      svg += `<circle cx="${x}" cy="20" r="5" fill="none" stroke="currentcolor"/>`
    } else {
      const y = getFretY(fret)
      svg += `<circle cx="${x}" cy="${y}" r="6" fill="currentcolor"/>`
    }
  }

  return svg
}
