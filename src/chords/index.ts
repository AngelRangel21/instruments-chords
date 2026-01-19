import type { ChordsDictionary } from '../types'
import { A } from './A'
import { Asharp } from './Asharp'
import { B } from './B'
import { C } from './C'
import { Csharp } from './Csharp'
import { D } from './D'
import { Dsharp } from './Dsharp'
import { E } from './E'
import { F } from './F'
import { Fsharp } from './Fsharp'
import { G } from './G'
import { Gsharp } from './Gsharp'

export const chords: ChordsDictionary = {
  C,
  'C#': Csharp,
  D,
  'D#': Dsharp,
  E,
  F,
  'F#': Fsharp,
  G,
  'G#': Gsharp,
  A,
  'A#': Asharp,
  B
}
