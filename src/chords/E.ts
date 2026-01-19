import { ChordDefinition } from '../types'

export const E: ChordDefinition = {
  major: {
    default: '1',
    variants: {
      1: {
        6: 0,
        5: 2,
        4: 2,
        3: 1,
        2: 0,
        1: 0
      },
      2: {
        6: 'x',
        5: 2,
        4: 2,
        3: 1,
        2: 0,
        1: 'x'
      }
    }
  },
  minor: {
    default: '1',
    variants: {
      1: {
        6: 0,
        5: 2,
        4: 2,
        3: 0,
        2: 0,
        1: 0
      }
    }
  },
  5: {
    default: '1',
    variants: {
      1: {
        6: 0,
        5: 2,
        4: 2,
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
        6: 0,
        5: 2,
        4: 0,
        3: 1,
        2: 0,
        1: 0
      }
    }
  },
  maj7: {
    default: '1',
    variants: {
      1: {
        6: 0,
        5: 2,
        4: 1,
        3: 1,
        2: 0,
        1: 'x'
      }
    }
  },
  m7: {
    default: '1',
    variants: {
      1: {
        6: 0,
        5: 0,
        4: 2,
        3: 0,
        2: 0,
        1: 0
      }
    }
  },
  sus4: {
    default: '1',
    variants: {
      1: {
        6: 0,
        5: 2,
        4: 2,
        3: 2,
        2: 0,
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
        4: 2,
        3: 1,
        2: 0,
        1: 2
      }
    }
  },
  sus2: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 2,
        3: 4,
        2: 5,
        1: 2
      }
    }
  },
  '7sus4': {
    default: '1',
    variants: {
      1: {
        6: 0,
        5: 2,
        4: 0,
        3: 2,
        2: 0,
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
        4: 2,
        3: 1,
        2: 3,
        1: 3
      }
    }
  },
  9: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 2,
        3: 1,
        2: 3,
        1: 4
      }
    }
  }
}
