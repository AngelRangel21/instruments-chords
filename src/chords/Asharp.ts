import { ChordDefinition } from '../types'

export const Asharp: ChordDefinition = {
  major: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 1,
        4: 3,
        3: 3,
        2: 3,
        1: 1
      },
      2: {
        6: 6,
        5: 8,
        4: 8,
        3: 7,
        2: 6,
        1: 6
      },
      3: {
        6: 'x',
        5: 'x',
        4: 8,
        3: 7,
        2: 6,
        1: 6
      }
    }
  },
  minor: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 1,
        4: 3,
        3: 3,
        2: 2,
        1: 1
      }
    }
  },
  5: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 1,
        4: 3,
        3: 3,
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
        5: 1,
        4: 3,
        3: 1,
        2: 3,
        1: 1
      }
    }
  },
  maj7: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 1,
        4: 3,
        3: 2,
        2: 3,
        1: 1
      }
    }
  },
  m7: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 1,
        4: 3,
        3: 1,
        2: 2,
        1: 1
      }
    }
  },
  sus4: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 1,
        4: 3,
        3: 3,
        2: 4,
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
        4: 8,
        3: 7,
        2: 6,
        1: 8
      }
    }
  },
  sus2: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 1,
        4: 3,
        3: 3,
        2: 1,
        1: 1
      }
    }
  },
  '7sus4': {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 1,
        4: 3,
        3: 1,
        2: 4,
        1: 1
      }
    }
  },
  '7#9': {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 1,
        4: 0,
        3: 1,
        2: 2,
        1: 'x'
      }
    }
  },
  9: {
    default: '1',
    variants: {
      1: {
        6: 'x',
        5: 1,
        4: 0,
        3: 1,
        2: 1,
        1: 'x'
      }
    }
  }
}
