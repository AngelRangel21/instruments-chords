import { ChordDefinition } from '../types'

export const Gsharp: ChordDefinition = {
  major: {
    default: '1',
    variants: {
      1: {
        6: 4,
        5: 6,
        4: 6,
        3: 5,
        2: 4,
        1: 4
      },
      2: {
        6: 'x',
        5: 'x',
        4: 6,
        3: 5,
        2: 4,
        1: 4
      }
    }
  },
  minor: {
    default: '1',
    variants: {
      1: {
        6: 4,
        5: 6,
        4: 6,
        3: 4,
        2: 4,
        1: 4
      }
    }
  },
  5: {
    default: '1',
    variants: {
      1: {
        6: 4,
        5: 6,
        4: 6,
        3: 'x',
        2: 'x',
        1: 'x'
      }
    }
  },
  7: {
    default: '1',
    variants: {
      1: {
        6: 4,
        5: 6,
        4: 4,
        3: 5,
        2: 4,
        1: 4
      }
    }
  },
  maj7: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 6,
        3: 5,
        2: 4,
        1: 3
      }
    }
  },
  m7: {
    default: '1',
    variants: {
      1: {
        6: 4,
        5: 6,
        4: 5,
        3: 5,
        2: 5,
        1: 5
      }
    }
  },
  sus4: {
    default: '1',
    variants: {
      1: {
        6: 4,
        5: 6,
        4: 6,
        3: 6,
        2: 4,
        1: 4
      }
    }
  },
  add9: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 6,
        3: 5,
        2: 4,
        1: 6
      }
    }
  },
  sus2: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 6,
        3: 8,
        2: 9,
        1: 6
      }
    }
  },
  '7sus4': {
    default: '1',
    variants: {
      1: {
        6: 4,
        5: 6,
        4: 4,
        3: 6,
        2: 4,
        1: 4
      }
    }
  },
  '7#9': {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 6,
        3: 5,
        2: 7,
        1: 7
      }
    }
  },
  9: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 6,
        3: 5,
        2: 7,
        1: 6
      }
    }
  }
}
