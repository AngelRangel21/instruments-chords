import { chords } from './chords/index'
import type { ChordQuality, ChordShape } from './types'

export function getChord (
  root: string,
  quality: ChordQuality = 'major'
): ChordShape | null {
  return chords[root]?.[quality] ?? null
}
