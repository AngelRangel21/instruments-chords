import { describe, it, expect } from 'vitest'
import { getChord } from '../src/getChord'

describe('getChord', () => {
  it('returns D major by default', () => {
    const chord = getChord('D')
    expect(chord?.['3']).toBe(2)
  })

  it('returns D minor', () => {
    const chord = getChord('D', 'minor')
    expect(chord?.['1']).toBe(1)
  })

  it('returns D7 chord', () => {
    const chord = getChord('D', '7')
    expect(chord?.['1']).toBe(1)
  })

  it('returns null for unknown chord', () => {
    expect(getChord('Z')).toBeNull()
  })
})
