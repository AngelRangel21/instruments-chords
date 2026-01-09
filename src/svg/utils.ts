import { FRET_SPACING, START_X, START_Y, STRING_SPACING } from './constants'

export function getStringX (stringNumber: number) {
  return START_X + (6 - stringNumber) * STRING_SPACING
}

export function getFretY (fret: number) {
  return START_Y + fret * FRET_SPACING - FRET_SPACING / 2
}
