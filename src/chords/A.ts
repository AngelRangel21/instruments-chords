import { ChordDefinition } from '../types'

export const A: ChordDefinition = {
  major: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 0,
        4: 2,
        3: 2,
        2: 2,
        1: 0
      },
      2: {
        6: 5,
        5: 7,
        4: 7,
        3: 6,
        2: 5,
        1: 5
      },
      3: {
        6: 'x',
        5: 'x',
        4: 7,
        3: 6,
        2: 5,
        1: 5
      }
    }
  },
  minor: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 0,
        4: 2,
        3: 2,
        2: 1,
        1: 0
      }
    }
  },
  5: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 0,
        4: 2,
        3: 2,
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
        5: 0,
        4: 2,
        3: 0,
        2: 2,
        1: 0
      }
    }
  },
  maj7: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 0,
        4: 2,
        3: 1,
        2: 2,
        1: 0
      }
    }
  },
  m7: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 0,
        4: 2,
        3: 0,
        2: 1,
        1: 0
      }
    }
  },
  sus4: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 0,
        4: 2,
        3: 2,
        2: 3,
        1: 0
      }
    }
  },
  add9: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 7,
        3: 6,
        2: 5,
        1: 7
      }
    }
  },
  sus2: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 0,
        4: 2,
        3: 2,
        2: 0,
        1: 0
      }
    }
  },
  '7sus4': {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 0,
        4: 2,
        3: 0,
        2: 3,
        1: 0
      }
    }
  },
  '7#9': {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 7,
        3: 6,
        2: 8,
        1: 8
      }
    }
  },
  9: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 7,
        3: 6,
        2: 8,
        1: 'x'
      }
    }
  }
}
