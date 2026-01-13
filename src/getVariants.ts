import { chords } from './chords'
import { ChordQuality, ChordVariantId } from './types'

export function getVariants(
  root: string,
  quality: ChordQuality
): ChordVariantId[] {
  const chord = chords[root]

  if (chord === undefined) return []

  const qualityObj = chord[quality]

  if (qualityObj === undefined) return []

  return Object.keys(qualityObj.variants) as ChordVariantId[]
}
