import { describe, it, expect } from 'vitest'
import { getChord } from '../src/getChord'

describe('getChord', () => {
  it('returns C major by default', () => {
    const chord = getChord('C', 'major')
    expect(chord).not.toBeNull()
  })

  it('returns C major', () => {
    const chord = getChord('C', 'major', '2')
    expect(chord).not.toBeNull()
  })
})
