import {
  STRING_COUNT,
  FRET_COUNT,
  STRING_SPACING,
  FRET_SPACING,
  START_X,
  START_Y
} from './constants'

export function renderBase(): string {
  let svg = ''

  // cuerdas
  for (let i = 0; i < STRING_COUNT; i++) {
    const x = START_X + i * STRING_SPACING
    svg += `<line x1="${x}" y1="${START_Y}" x2="${x}" y2="${START_Y + FRET_SPACING * FRET_COUNT}" stroke="currentcolor"/>`
  }

  // trastes
  for (let i = 0; i <= FRET_COUNT; i++) {
    const y = START_Y + i * FRET_SPACING
    svg += `<line x1="${START_X}" y1="${y}" x2="${START_X + STRING_SPACING * (STRING_COUNT - 1)}" y2="${y}" stroke="currentcolor"/>`
  }

  return svg
}
