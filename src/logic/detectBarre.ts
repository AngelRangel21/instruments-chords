import type { ChordShape, StringNumber } from '../types.js'

export interface Barre {
  fret: number
  from: StringNumber
  to: StringNumber
}

const STRING_ORDER: StringNumber[] = ['6', '5', '4', '3', '2', '1']

// Solo hace falta cejilla si se pisan más notas que dedos disponibles.
// Ej.: A x02220 y D xx0232 se tocan con 3 dedos; F 133211 pisa 6 notas.
const MAX_FINGERS = 4

/**
 * Detecta la cejilla: el traste más bajo que se pisa, desde la primera hasta
 * la última cuerda pisada en ese traste, siempre que ninguna cuerda intermedia
 * esté muteada, al aire o en un traste más bajo, y que se pisen más de
 * MAX_FINGERS notas.
 * Ej.: F 133211 → cejilla en el traste 1 de la 6ª a la 1ª.
 */
export function detectBarre(chord: ChordShape): Barre | null {
  const frets = STRING_ORDER.map((string) => chord[string])
  const pressed = frets.filter(
    (fret): fret is number => typeof fret === 'number' && fret > 0
  )
  if (pressed.length <= MAX_FINGERS) return null

  const barreFret = Math.min(...pressed)
  const first = frets.indexOf(barreFret)
  const last = frets.lastIndexOf(barreFret)

  if (first === last) return null

  for (let i = first; i <= last; i++) {
    const fret = frets[i]
    if (typeof fret !== 'number' || fret < barreFret) return null
  }

  return {
    fret: barreFret,
    from: STRING_ORDER[first],
    to: STRING_ORDER[last]
  }
}
