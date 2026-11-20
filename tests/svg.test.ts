import { describe, it, expect } from 'vitest'
import { getChord } from '../src/getChord'
import { getChordSvg } from '../src/getChordSvg'
import { detectBarre } from '../src/logic/detectBarre'
import { getBaseFret } from '../src/svg/utils'
import type { ChordShape } from '../src/types'

const shape = (frets: string): ChordShape => {
  const values = frets.split(' ').map((f) => (f === 'x' ? 'x' : Number(f)))
  return {
    6: values[0],
    5: values[1],
    4: values[2],
    3: values[3],
    2: values[4],
    1: values[5]
  } as ChordShape
}

describe('getBaseFret', () => {
  it('dibuja desde la cejuela si la forma cabe en los primeros trastes', () => {
    expect(getBaseFret(shape('x 0 2 2 2 0'))).toBe(1) // A
    expect(getBaseFret(shape('3 2 0 0 0 3'))).toBe(1) // G
    expect(getBaseFret(shape('x 3 5 5 5 3'))).toBe(1) // C (cejilla 3)
  })

  it('usa el traste más bajo en posiciones altas', () => {
    expect(getBaseFret(shape('8 10 10 9 8 8'))).toBe(8)
  })
})

describe('detectBarre', () => {
  it('detecta la cejilla completa de F', () => {
    expect(detectBarre(shape('1 3 3 2 1 1'))).toEqual({
      fret: 1,
      from: '6',
      to: '1'
    })
  })

  it('detecta cejillas parciales', () => {
    expect(detectBarre(shape('x 3 5 5 5 3'))).toEqual({
      fret: 3,
      from: '5',
      to: '1'
    })
  })

  it('no detecta cejilla en acordes abiertos', () => {
    expect(detectBarre(shape('x 3 2 0 1 0'))).toBeNull() // C
    expect(detectBarre(shape('0 2 2 0 0 0'))).toBeNull() // Em
    expect(detectBarre(shape('x x 0 2 3 2'))).toBeNull() // D
    expect(detectBarre(shape('x 0 2 2 2 0'))).toBeNull() // A
  })

  it('no cruza cuerdas al aire o muteadas', () => {
    expect(detectBarre(shape('3 x 3 3 0 3'))).toBeNull()
    expect(detectBarre(shape('5 x 5 5 5 5'))).toBeNull()
  })
})

describe('getChordSvg', () => {
  it('no dibuja el número de traste en acordes abiertos', () => {
    const svg = getChordSvg('A', 'major', '1') ?? ''
    expect(svg).toContain('height="6"') // cejuela
    expect(svg).not.toMatch(/>\s*2\s*<\/text>/)
  })

  it('en posiciones altas muestra el traste y omite la cejuela', () => {
    const svg = getChordSvg('C', 'major', '3') ?? ''
    expect(svg).not.toContain('height="6"')
    expect(svg).toMatch(/>\s*8\s*<\/text>/)
  })

  it('es accesible', () => {
    const svg = getChordSvg('G', 'major') ?? ''
    expect(svg).toContain('role="img"')
    expect(svg).toContain('<title>G major</title>')
  })
})

describe('getChord', () => {
  it('devuelve null con raíces desconocidas', () => {
    expect(getChord('H')).toBeNull()
  })
})
