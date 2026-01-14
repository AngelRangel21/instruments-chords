import { ChordShape } from '../types'
import { FRET_SPACING, START_X, START_Y, STRING_SPACING } from './constants'

export function getStringX(stringNumber: number) {
  return START_X + (6 - stringNumber) * STRING_SPACING
}

export function getFretY(fret: number) {
  return START_Y + fret * FRET_SPACING - FRET_SPACING / 2
}

export function getBaseFret(chord: ChordShape): number {
  const frets = Object.values(chord).filter(
    (f) => typeof f === 'number' && f > 0
  ) as number[]

  if (frets.length === 0) return 1

  return Math.min(...frets)
}
