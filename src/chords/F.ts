import { ChordDefinition } from '../types'

export const F: ChordDefinition = {
  major: {
    default: '1',
    variants: {
      1: {
        6: 1,
        5: 3,
        4: 3,
        3: 2,
        2: 1,
        1: 1
      },
      2: {
        6: 'x',
        5: 'x',
        4: 3,
        3: 2,
        2: 1,
        1: 1
      }
    }
  },
  minor: {
    default: '1',
    variants: {
      1: {
        6: 1,
        5: 3,
        4: 3,
        3: 1,
        2: 1,
        1: 1
      }
    }
  },
  5: {
    default: '1',
    variants: {
      1: {
        6: 1,
        5: 3,
        4: 3,
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
        6: 1,
        5: 3,
        4: 1,
        3: 2,
        2: 1,
        1: 1
      }
    }
  },
  maj7: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 3,
        3: 2,
        2: 1,
        1: 0
      }
    }
  },
  m7: {
    default: '1',
    variants: {
      1: {
        6: 1,
        5: 3,
        4: 1,
        3: 1,
        2: 1,
        1: 1
      }
    }
  },
  sus4: {
    default: '1',
    variants: {
      1: {
        6: 1,
        5: 3,
        4: 3,
        3: 3,
        2: 1,
        1: 1
      }
    }
  },
  add9: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 3,
        3: 2,
        2: 1,
        1: 3
      }
    }
  },
  sus2: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 3,
        3: 5,
        2: 6,
        1: 3
      }
    }
  },
  '7sus4': {
    default: '1',
    variants: {
      1: {
        6: 1,
        5: 3,
        4: 1,
        3: 3,
        2: 1,
        1: 1
      }
    }
  },
  '7#9': {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 3,
        3: 2,
        2: 4,
        1: 4
      }
    }
  },
  9: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 'x',
        4: 3,
        3: 2,
        2: 4,
        1: 3
      }
    }
  }
}
