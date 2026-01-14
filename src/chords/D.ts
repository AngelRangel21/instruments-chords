import { ChordDefinition } from '../types'

export const D: ChordDefinition = {
  major: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 0,
        3: 2,
        2: 3,
        1: 2
      }
    }
  },
  minor: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 0,
        3: 2,
        2: 3,
        1: 1
      }
    }
  },
  7: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 0,
        3: 2,
        2: 3,
        1: 1
      }
    }
  }
}
