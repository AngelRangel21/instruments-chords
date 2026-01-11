import type { ChordsDictionary } from '../types'

export const chords: ChordsDictionary = {
  C: {
    major: {
      default: '1',
      variants: {
        1: {
          6: 'x',
          5: 3,
          4: 2,
          3: 0,
          2: 1,
          1: 0
        },
        2: {
          6: 'x',
          5: 3,
          4: 2,
          3: 5,
          2: 'x',
          1: 'x'
        }
      }
    },
    minor: {
      default: '1',
      variants: {
        1: {
          6: 'x',
          5: 3,
          4: 5,
          3: 5,
          2: 4,
          1: 3
        }
      }
    },
    5: {
      default: '1',
      variants: {
        1: {
          6: 'x',
          5: 3,
          4: 5,
          3: 5,
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
          5: 3,
          4: 2,
          3: 3,
          2: 1,
          1: 'x'
        }
      }
    },
    maj7: {
      default: '1',
      variants: {
        1: {
          6: 'x',
          5: 3,
          4: 2,
          3: 0,
          2: 0,
          1: 0
        }
      }
    },
    m7: {
      default: '1',
      variants: {
        1: {
          6: 'x',
          5: 3,
          4: 5,
          3: 3,
          2: 4,
          1: 3
        }
      }
    },
    sus4: {
      default: '1',
      variants: {
        1: {
          6: 'x',
          5: 3,
          4: 5,
          3: 5,
          2: 6,
          1: 3
        }
      }
    },
    add9: {
      default: '1',
      variants: {
        1: {
          6: 'x',
          5: 3,
          4: 2,
          3: 0,
          2: 3,
          1: 0
        }
      }
    },
    sus2: {
      default: '1',
      variants: {
        1: {
          6: 'x',
          5: 3,
          4: 5,
          3: 5,
          2: 3,
          1: 3
        }
      }
    },
    '7sus4': {
      default: '1',
      variants: {
        1: {
          6: 'x',
          5: 3,
          4: 5,
          3: 3,
          2: 6,
          1: 3
        }
      }
    },
    '7#9': {
      default: '1',
      variants: {
        1: {
          6: 'x',
          5: 3,
          4: 2,
          3: 3,
          2: 4,
          1: 'x'
        }
      }
    },
    9: {
      default: '1',
      variants: {
        1: {
          6: 'x',
          5: 3,
          4: 2,
          3: 3,
          2: 3,
          1: 'x'
        }
      }
    }
  },
  D: {
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
}
