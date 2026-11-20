import type { Barre } from '../logic/detectBarre.js'
import { getFretY, getStringX, toVisualFret } from './utils.js'

// Sobresale lo mismo que el radio de los puntos (6) para no salirse del
// diapasón ni tapar el número de traste.
const BARRE_PADDING = 6

export function renderBarre(barre: Barre, baseFret: number): string {
  const xStart = getStringX(Number(barre.from))
  const xEnd = getStringX(Number(barre.to))

  const y = getFretY(toVisualFret(barre.fret, baseFret))

  const width = Math.abs(xEnd - xStart) + BARRE_PADDING * 2
  const x = Math.min(xStart, xEnd) - BARRE_PADDING

  return `
    <rect
      x="${x}"
      y="${y - 6}"
      width="${width}"
      height="12"
      rx="6"
      fill="currentColor"
    />
  `
}
