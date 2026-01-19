import { ChordDefinition } from '../types'

export const B: ChordDefinition = {
  major: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 2,
        4: 4,
        3: 4,
        2: 4,
        1: 2
      },
      2: {
        6: 7,
        5: 9,
        4: 9,
        3: 8,
        2: 7,
        1: 7
      },
      3: {
        6: 'x',
        5: 'x',
        4: 9,
        3: 8,
        2: 7,
        1: 7
      }
    }
  },
  minor: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 2,
        4: 4,
        3: 4,
        2: 3,
        1: 2
      }
    }
  },
  5: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 2,
        4: 4,
        3: 4,
        2: 'x',
        1: 'x'
      }
    }
  },
  7: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 2,
        4: 1,
        3: 2,
        2: 0,
        1: 'x'
      }
    }
  },
  maj7: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 2,
        4: 4,
        3: 3,
        2: 4,
        1: 2
      }
    }
  },
  m7: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 2,
        4: 4,
        3: 2,
        2: 3,
        1: 2
      }
    }
  },
  sus4: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 2,
        4: 4,
        3: 4,
        2: 5,
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
        4: 9,
        3: 8,
        2: 7,
        1: 9
      }
    }
  },
  sus2: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 2,
        4: 4,
        3: 4,
        2: 2,
        1: 2
      }
    }
  },
  '7sus4': {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 2,
        4: 4,
        3: 2,
        2: 5,
        1: 2
      }
    }
  },
  '7#9': {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 2,
        4: 1,
        3: 2,
        2: 3,
        1: 'x'
      }
    }
  },
  9: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 2,
        4: 1,
        3: 2,
        2: 2,
        1: 'x'
      }
    }
  }
}
