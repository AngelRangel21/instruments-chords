import { getChord } from './getChord.js'
import { renderBase } from './svg/base.js'
import { renderMarkers } from './svg/markers.js'
import { SVG_WIDTH, SVG_HEIGHT } from './svg/constants.js'
import { getBaseFret } from './svg/utils.js'
import type { ChordQuality, VariantId } from './types.js'

export function getChordSvg(
  root: string,
  quality: ChordQuality,
  variant?: VariantId
): string | null {
  const chord = getChord(root, quality, variant)

  if (chord === null) return null

  const base = renderBase(getBaseFret(chord))
  const markers = renderMarkers(chord)

  return `
<svg
  width="${SVG_WIDTH}"
  height="${SVG_HEIGHT}"
  viewBox="0 0 ${SVG_WIDTH + 20} ${SVG_HEIGHT}"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-label="${root} ${quality}"
>
  <title>${root} ${quality}</title>
  ${base}
  ${markers}
</svg>
`.trim()
}
