import { Barre } from '../logic/detectBarre'
import { STRING_SPACING } from './constants'
import { getFretY, getStringX } from './utils'

export function renderBarre(barre: Barre): string {
  const xStart = getStringX(Number(barre.from))
  const xEnd = getStringX(Number(barre.to))

  const y = getFretY(barre.fret)

  const width = Math.abs(xEnd - xStart) + STRING_SPACING
  const x = Math.min(xStart, xEnd) - STRING_SPACING / 2

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
