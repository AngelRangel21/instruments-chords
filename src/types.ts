export type StringNumber = '1' | '2' | '3' | '4' | '5' | '6'
export type Fret = number | 'x'

export type ChordShape = Record<StringNumber, Fret>

export type ChordQuality =
  | 'major'
  | 'minor'
  | '5'
  | '7'
  | 'maj7'
  | 'm7'
  | 'sus4'
  | 'add9'
  | 'sus2'
  | '7sus4'
  | '7#9'
  | '9'
  | 'aug'
  | 'dim'

export type ChordsDictionary = Record<
string,
Partial<Record<ChordQuality, ChordShape>>
>
