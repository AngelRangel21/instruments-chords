import { chords } from './chords/index.js'
import { ChordQuality, VariantId } from './types.js'

export function getVariants(root: string, quality: ChordQuality): VariantId[] {
  const chord = chords[root]

  if (chord === undefined) return []

  const qualityObj = chord[quality]

  if (qualityObj === undefined) return []

  return Object.keys(qualityObj.variants) as VariantId[]
}
