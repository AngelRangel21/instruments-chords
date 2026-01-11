import type { ChordShape, StringNumber } from '../types'
import { getStringX, getFretY } from './utils'

const STRING_ORDER: StringNumber[] = ['6', '5', '4', '3', '2', '1']

export function renderMarkers (chord: ChordShape): string {
  let svg = ''

  for (const string of STRING_ORDER) {
    const fret = chord[string]
    const x = getStringX(Number(string))

    if (fret === 'x') {
      svg += `
        <text
          x="${x}"
          y="20"
          text-anchor="middle"
          fill="currentColor"
        >x</text>
      `
      continue
    }

    if (fret === 0) {
      svg += `
        <circle
          cx="${x}"
          cy="17"
          r="5"
          fill="none"
          stroke="currentColor"
        />
      `
      continue
    }

    const y = getFretY(fret)

    svg += `
      <circle
        cx="${x}"
        cy="${y}"
        r="6"
        fill="currentColor"
      />
    `
  }

  return svg.trim()
}
