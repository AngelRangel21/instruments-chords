import { chords } from './chords/index.js'
import { ChordQuality } from './types.js'

export function getQuality(root: string): ChordQuality[] {
  const chord = chords[root]
  if (chord === undefined) return []

  return Object.keys(chord) as ChordQuality[]
}
