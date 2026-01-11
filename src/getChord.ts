import type { ChordQuality, ChordShape, ChordVariantId } from './types'
import { chords } from './chords/index'

export function getChord (
  root: string,
  quality: ChordQuality = 'major',
  variant?: ChordVariantId
): ChordShape | null {
  const chord = chords[root]
  if (chord === null) return null

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
