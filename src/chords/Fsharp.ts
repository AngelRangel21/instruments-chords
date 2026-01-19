import { ChordDefinition } from '../types'

export const Fsharp: ChordDefinition = {
  major: {
    default: '1',
    variants: {
      1: {
        6: 2,
        5: 4,
        4: 4,
        3: 3,
        2: 2,
        1: 2
      },
      2: {
        6: 'x',
        5: 'x',
        4: 4,
        3: 3,
        2: 2,
        1: 2
      }
    }
  },
  minor: {
    default: '1',
    variants: {
      1: {
        6: 2,
        5: 4,
        4: 4,
        3: 2,
        2: 2,
        1: 2
      },
      2: {
        6: 'x',
        5: 'x',
        4: 4,
        3: 2,
        2: 2,
        1: 2
      }
    }
  },
  5: {
    default: '1',
    variants: {
      1: {
        6: 2,
        5: 4,
        4: 4,
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
        6: 2,
        5: 4,
        4: 2,
        3: 3,
        2: 2,
        1: 2
      }
    }
  },
  maj7: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 4,
        3: 3,
        2: 2,
        1: 1
      }
    }
  },
  m7: {
    default: '1',
    variants: {
      1: {
        6: 2,
        5: 3,
        4: 2,
        3: 2,
        2: 2,
        1: 2
      }
    }
  },
  sus4: {
    default: '1',
    variants: {
      1: {
        6: 2,
        5: 4,
        4: 4,
        3: 4,
        2: 2,
        1: 2
      }
    }
  },
  add9: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 4,
        3: 3,
        2: 2,
        1: 4
      }
    }
  },
  sus2: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 4,
        3: 6,
        2: 7,
        1: 4
      }
    }
  },
  '7sus4': {
    default: '1',
    variants: {
      1: {
        6: 2,
        5: 4,
        4: 2,
        3: 4,
        2: 2,
        1: 2
      }
    }
  },
  '7#9': {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 4,
        3: 3,
        2: 5,
        1: 5
      }
    }
  },
  9: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 4,
        3: 3,
        2: 5,
        1: 4
      }
    }
  }
}
