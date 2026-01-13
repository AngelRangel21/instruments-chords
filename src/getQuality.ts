import { chords } from './chords'
import { ChordQuality } from './types'

export function getQuality(root: string): ChordQuality[] {
  const chord = chords[root]
  if (chord === undefined) return []

  return Object.keys(chord) as ChordQuality[]
}
