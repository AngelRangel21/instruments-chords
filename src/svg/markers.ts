import { detectBarre } from '../logic/detectBarre.js'
import type { ChordShape, StringNumber } from '../types.js'
import { renderBarre } from './barre.js'
import { FRET_SPACING, START_Y } from './constants.js'
import { getStringX, getFretY, getBaseFret, toVisualFret } from './utils.js'

const STRING_ORDER: StringNumber[] = ['6', '5', '4', '3', '2', '1']

export function renderMarkers(chord: ChordShape): string {
  let svg = ''

  const baseFret = getBaseFret(chord)
  const barre = detectBarre(chord)

  if (barre) {
    svg += renderBarre(barre, baseFret)
  }

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

    const visualFret = toVisualFret(fret, baseFret)
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
