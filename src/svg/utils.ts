import type { ChordShape } from '../types.js'
import {
  FRET_COUNT,
  FRET_SPACING,
  START_X,
  START_Y,
  STRING_SPACING
} from './constants.js'

export function getStringX(stringNumber: number) {
  return START_X + (6 - stringNumber) * STRING_SPACING
}

export function getFretY(fret: number) {
  return START_Y + fret * FRET_SPACING - FRET_SPACING / 2
}

/**
 * Traste desde el que se dibuja el diagrama. Si la forma cabe en los primeros
 * trastes se dibuja desde la cejuela (1); si no, desde el traste más bajo.
 * Ej.: A x02220 → 1 · C x35553 → 1 · C 8-10-10-9-8-8 → 8.
 */
export function getBaseFret(chord: ChordShape): number {
  const frets = Object.values(chord).filter(
    (f): f is number => typeof f === 'number' && f > 0
  )

  if (frets.length === 0) return 1
  if (Math.max(...frets) <= FRET_COUNT) return 1

  return Math.min(...frets)
}

/** Fila del diagrama (1…FRET_COUNT) para un traste absoluto. */
export function toVisualFret(fret: number, baseFret: number): number {
  return fret - baseFret + 1
}
