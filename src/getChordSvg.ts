import { getChord } from './getChord'
import { renderBase } from './svg/base'
import { SVG_HEIGTH, SVG_WIDTH } from './svg/constants'
import { renderMarkers } from './svg/markers'

export function getChordSvg (root: string, quality?: any): string | null {
  const chord = getChord(root, quality)

  if (chord === null) return null

  const base = renderBase()
  const markers = renderMarkers(chord)

  return `
  <svg
    width="${SVG_WIDTH}
    heigth="${SVG_HEIGTH}
    viewBox="0 0 ${SVG_WIDTH} ${SVG_HEIGTH}"
    xmlns="http"://www.w3.org/2000/svg"
  >
    ${base}
    ${markers}
  </svg>
  `.trim()
}
