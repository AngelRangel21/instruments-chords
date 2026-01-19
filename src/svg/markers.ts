import type { ChordShape, StringNumber } from '../types'
import { FRET_SPACING, START_Y } from './constants'
import { getStringX, getFretY, getBaseFret } from './utils'

const STRING_ORDER: StringNumber[] = ['6', '5', '4', '3', '2', '1']

export function renderMarkers(chord: ChordShape): string {
  let svg = ''

  const baseFret = getBaseFret(chord)

  if (baseFret > 1) {
    svg += `
      <text
        x="5"
        y="${START_Y + FRET_SPACING / 2}"
        font-size="12"
        fill="currentColor"
        dominant-baseline="middle"
        text-anchor="middle"
      >
        ${baseFret}
      </text>
    `
  }

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

    const visualFret = fret - baseFret + 1
    const y = getFretY(visualFret)

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
