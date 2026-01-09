import { getChord } from './getChord';
import { renderBase } from './svg/base';
import { renderMarkers } from './svg/markers';
import { SVG_WIDTH, SVG_HEIGHT } from './svg/constants';

export function getChordSvg(
  root: string,
  quality?: any
): string | null {
  const chord = getChord(root, quality);
  if (!chord) return null;

  const base = renderBase();
  const markers = renderMarkers(chord);

  return `
<svg
  width="${SVG_WIDTH}"
  height="${SVG_HEIGHT}"
  viewBox="0 0 ${SVG_WIDTH} ${SVG_HEIGHT}"
  xmlns="http://www.w3.org/2000/svg"
>
  ${base}
  ${markers}
</svg>
`.trim();
}
