import type { ChordsDictionary } from '../types.js'
import { A } from './A.js'
import { Asharp } from './Asharp.js'
import { B } from './B.js'
import { C } from './C.js'
import { Csharp } from './Csharp.js'
import { D } from './D.js'
import { Dsharp } from './Dsharp.js'
import { E } from './E.js'
import { F } from './F.js'
import { Fsharp } from './Fsharp.js'
import { G } from './G.js'
import { Gsharp } from './Gsharp.js'

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
