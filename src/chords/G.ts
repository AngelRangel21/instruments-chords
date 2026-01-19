import { ChordDefinition } from '../types'

export const G: ChordDefinition = {
  major: {
    default: '1',
    variants: {
      1: {
        6: 3,
        5: 2,
        4: 0,
        3: 0,
        2: 0,
        1: 3
      },
      2: {
        6: 3,
        5: 5,
        4: 5,
        3: 4,
        2: 3,
        1: 3
      },
      3: {
        6: 'x',
        5: 'x',
        4: 5,
        3: 4,
        2: 3,
        1: 3
      }
    }
  },
  minor: {
    default: '1',
    variants: {
      1: {
        6: 3,
        5: 5,
        4: 5,
        3: 3,
        2: 3,
        1: 3
      }
    }
  },
  5: {
    default: '1',
    variants: {
      1: {
        6: 3,
        5: 5,
        4: 5,
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
        6: 3,
        5: 5,
        4: 3,
        3: 4,
        2: 3,
        1: 3
      }
    }
  },
  maj7: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 5,
        3: 4,
        2: 3,
        1: 2
      }
    }
  },
  m7: {
    default: '1',
    variants: {
      1: {
        6: 3,
        5: 5,
        4: 3,
        3: 3,
        2: 3,
        1: 3
      }
    }
  },
  sus4: {
    default: '1',
    variants: {
      1: {
        6: 3,
        5: 5,
        4: 5,
        3: 5,
        2: 3,
        1: 3
      }
    }
  },
  add9: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 5,
        3: 4,
        2: 3,
        1: 5
      }
    }
  },
  sus2: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 5,
        3: 7,
        2: 8,
        1: 5
      }
    }
  },
  '7sus4': {
    default: '1',
    variants: {
      1: {
        6: 3,
        5: 5,
        4: 3,
        3: 5,
        2: 3,
        1: 3
      }
    }
  },
  '7#9': {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 5,
        3: 4,
        2: 6,
        1: 6
      }
    }
  },
  9: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 5,
        3: 4,
        2: 6,
        1: 5
      }
    }
  }
}
