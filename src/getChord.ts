import type { ChordQuality, ChordShape, VariantId } from './types.js'
import { chords } from './chords/index.js'

export function getChord(
  root: string,
  quality: ChordQuality = 'major',
  variant?: VariantId
): ChordShape | null {
  const chord = chords[root]
  if (chord === undefined) return null

  const qualityDefinition = chord[quality]

  if (qualityDefinition === undefined) {
    return null
  }

  const selectedVariant = variant ?? qualityDefinition.default

  const shape = qualityDefinition.variants[selectedVariant]

  if (!shape) {
    return null
  }

  return shape
}
