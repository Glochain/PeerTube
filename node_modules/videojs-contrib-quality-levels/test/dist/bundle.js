/*! @name videojs-contrib-quality-levels @version 2.1.0 @license Apache-2.0 */
(function (videojs,QUnit,sinon) {
	'use strict';

	videojs = videojs && videojs.hasOwnProperty('default') ? videojs['default'] : videojs;
	QUnit = QUnit && QUnit.hasOwnProperty('default') ? QUnit['default'] : QUnit;
	sinon = sinon && sinon.hasOwnProperty('default') ? sinon['default'] : sinon;

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var empty = {};

	var empty$1 = /*#__PURE__*/Object.freeze({
		default: empty
	});

	var minDoc = ( empty$1 && empty ) || empty$1;

	var topLevel = typeof commonjsGlobal !== 'undefined' ? commonjsGlobal :
	    typeof window !== 'undefined' ? window : {};


	var doccy;

	if (typeof document !== 'undefined') {
	    doccy = document;
	} else {
	    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

	    if (!doccy) {
	        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
	    }
	}

	var document_1 = doccy;

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var cov_19hafjbjq6 = function () {
	  var path = '/Users/gkatsevman/p/videojs-contrib-quality-levels/src/quality-level.js',
	      hash = '1ba161d6a22d909003d6224cd4464ed09cd1c517',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/gkatsevman/p/videojs-contrib-quality-levels/src/quality-level.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 32,
	          column: 16
	        },
	        end: {
	          line: 32,
	          column: 20
	        }
	      },
	      '1': {
	        start: {
	          line: 34,
	          column: 4
	        },
	        end: {
	          line: 41,
	          column: 5
	        }
	      },
	      '2': {
	        start: {
	          line: 35,
	          column: 6
	        },
	        end: {
	          line: 35,
	          column: 47
	        }
	      },
	      '3': {
	        start: {
	          line: 36,
	          column: 6
	        },
	        end: {
	          line: 40,
	          column: 7
	        }
	      },
	      '4': {
	        start: {
	          line: 37,
	          column: 8
	        },
	        end: {
	          line: 39,
	          column: 9
	        }
	      },
	      '5': {
	        start: {
	          line: 38,
	          column: 10
	        },
	        end: {
	          line: 38,
	          column: 53
	        }
	      },
	      '6': {
	        start: {
	          line: 43,
	          column: 4
	        },
	        end: {
	          line: 43,
	          column: 33
	        }
	      },
	      '7': {
	        start: {
	          line: 44,
	          column: 4
	        },
	        end: {
	          line: 44,
	          column: 27
	        }
	      },
	      '8': {
	        start: {
	          line: 45,
	          column: 4
	        },
	        end: {
	          line: 45,
	          column: 39
	        }
	      },
	      '9': {
	        start: {
	          line: 46,
	          column: 4
	        },
	        end: {
	          line: 46,
	          column: 41
	        }
	      },
	      '10': {
	        start: {
	          line: 47,
	          column: 4
	        },
	        end: {
	          line: 47,
	          column: 45
	        }
	      },
	      '11': {
	        start: {
	          line: 48,
	          column: 4
	        },
	        end: {
	          line: 48,
	          column: 44
	        }
	      },
	      '12': {
	        start: {
	          line: 50,
	          column: 4
	        },
	        end: {
	          line: 68,
	          column: 7
	        }
	      },
	      '13': {
	        start: {
	          line: 57,
	          column: 8
	        },
	        end: {
	          line: 57,
	          column: 32
	        }
	      },
	      '14': {
	        start: {
	          line: 66,
	          column: 8
	        },
	        end: {
	          line: 66,
	          column: 31
	        }
	      },
	      '15': {
	        start: {
	          line: 70,
	          column: 4
	        },
	        end: {
	          line: 70,
	          column: 17
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 30,
	            column: 2
	          },
	          end: {
	            line: 30,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 30,
	            column: 30
	          },
	          end: {
	            line: 71,
	            column: 3
	          }
	        },
	        line: 30
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 34,
	            column: 4
	          },
	          end: {
	            line: 41,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 34,
	            column: 4
	          },
	          end: {
	            line: 41,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 34,
	            column: 4
	          },
	          end: {
	            line: 41,
	            column: 5
	          }
	        }],
	        line: 34
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 37,
	            column: 8
	          },
	          end: {
	            line: 39,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 37,
	            column: 8
	          },
	          end: {
	            line: 39,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 37,
	            column: 8
	          },
	          end: {
	            line: 39,
	            column: 9
	          }
	        }],
	        line: 37
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0
	    },
	    f: {
	      '0': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();

	var QualityLevel = function QualityLevel(representation) {
	  cov_19hafjbjq6.f[0]++;
	  var level = (cov_19hafjbjq6.s[0]++, this);
	  cov_19hafjbjq6.s[1]++;

	  if (videojs.browser.IS_IE8) {
	    cov_19hafjbjq6.b[0][0]++;
	    cov_19hafjbjq6.s[2]++;
	    level = document_1.createElement('custom');
	    cov_19hafjbjq6.s[3]++;

	    for (var prop in QualityLevel.prototype) {
	      cov_19hafjbjq6.s[4]++;

	      if (prop !== 'constructor') {
	        cov_19hafjbjq6.b[1][0]++;
	        cov_19hafjbjq6.s[5]++;
	        level[prop] = QualityLevel.prototype[prop];
	      } else {
	        cov_19hafjbjq6.b[1][1]++;
	      }
	    }
	  } else {
	    cov_19hafjbjq6.b[0][1]++;
	  }

	  cov_19hafjbjq6.s[6]++;
	  level.id = representation.id;
	  cov_19hafjbjq6.s[7]++;
	  level.label = level.id;
	  cov_19hafjbjq6.s[8]++;
	  level.width = representation.width;
	  cov_19hafjbjq6.s[9]++;
	  level.height = representation.height;
	  cov_19hafjbjq6.s[10]++;
	  level.bitrate = representation.bandwidth;
	  cov_19hafjbjq6.s[11]++;
	  level.enabled_ = representation.enabled;
	  cov_19hafjbjq6.s[12]++;
	  Object.defineProperty(level, 'enabled', {
	    get: function get() {
	      cov_19hafjbjq6.s[13]++;
	      return level.enabled_();
	    },
	    set: function set(enable) {
	      cov_19hafjbjq6.s[14]++;
	      level.enabled_(enable);
	    }
	  });
	  cov_19hafjbjq6.s[15]++;
	  return level;
	};

	var cov_ewsbgpa6j = function () {
	  var path = '/Users/gkatsevman/p/videojs-contrib-quality-levels/src/quality-level-list.js',
	      hash = '58808d65013331fcfebb698f4845b73274d7c068',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/gkatsevman/p/videojs-contrib-quality-levels/src/quality-level-list.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 27,
	          column: 4
	        },
	        end: {
	          line: 27,
	          column: 12
	        }
	      },
	      '1': {
	        start: {
	          line: 29,
	          column: 15
	        },
	        end: {
	          line: 29,
	          column: 19
	        }
	      },
	      '2': {
	        start: {
	          line: 31,
	          column: 4
	        },
	        end: {
	          line: 38,
	          column: 5
	        }
	      },
	      '3': {
	        start: {
	          line: 32,
	          column: 6
	        },
	        end: {
	          line: 32,
	          column: 46
	        }
	      },
	      '4': {
	        start: {
	          line: 33,
	          column: 6
	        },
	        end: {
	          line: 37,
	          column: 7
	        }
	      },
	      '5': {
	        start: {
	          line: 34,
	          column: 8
	        },
	        end: {
	          line: 36,
	          column: 9
	        }
	      },
	      '6': {
	        start: {
	          line: 35,
	          column: 10
	        },
	        end: {
	          line: 35,
	          column: 56
	        }
	      },
	      '7': {
	        start: {
	          line: 40,
	          column: 4
	        },
	        end: {
	          line: 40,
	          column: 22
	        }
	      },
	      '8': {
	        start: {
	          line: 41,
	          column: 4
	        },
	        end: {
	          line: 41,
	          column: 29
	        }
	      },
	      '9': {
	        start: {
	          line: 49,
	          column: 4
	        },
	        end: {
	          line: 53,
	          column: 7
	        }
	      },
	      '10': {
	        start: {
	          line: 51,
	          column: 8
	        },
	        end: {
	          line: 51,
	          column: 35
	        }
	      },
	      '11': {
	        start: {
	          line: 61,
	          column: 4
	        },
	        end: {
	          line: 65,
	          column: 7
	        }
	      },
	      '12': {
	        start: {
	          line: 63,
	          column: 8
	        },
	        end: {
	          line: 63,
	          column: 35
	        }
	      },
	      '13': {
	        start: {
	          line: 67,
	          column: 4
	        },
	        end: {
	          line: 67,
	          column: 16
	        }
	      },
	      '14': {
	        start: {
	          line: 83,
	          column: 23
	        },
	        end: {
	          line: 83,
	          column: 66
	        }
	      },
	      '15': {
	        start: {
	          line: 86,
	          column: 4
	        },
	        end: {
	          line: 88,
	          column: 5
	        }
	      },
	      '16': {
	        start: {
	          line: 87,
	          column: 6
	        },
	        end: {
	          line: 87,
	          column: 26
	        }
	      },
	      '17': {
	        start: {
	          line: 90,
	          column: 18
	        },
	        end: {
	          line: 90,
	          column: 37
	        }
	      },
	      '18': {
	        start: {
	          line: 92,
	          column: 4
	        },
	        end: {
	          line: 92,
	          column: 52
	        }
	      },
	      '19': {
	        start: {
	          line: 94,
	          column: 4
	        },
	        end: {
	          line: 100,
	          column: 5
	        }
	      },
	      '20': {
	        start: {
	          line: 95,
	          column: 6
	        },
	        end: {
	          line: 99,
	          column: 9
	        }
	      },
	      '21': {
	        start: {
	          line: 97,
	          column: 10
	        },
	        end: {
	          line: 97,
	          column: 37
	        }
	      },
	      '22': {
	        start: {
	          line: 102,
	          column: 4
	        },
	        end: {
	          line: 102,
	          column: 36
	        }
	      },
	      '23': {
	        start: {
	          line: 104,
	          column: 4
	        },
	        end: {
	          line: 107,
	          column: 7
	        }
	      },
	      '24': {
	        start: {
	          line: 109,
	          column: 4
	        },
	        end: {
	          line: 109,
	          column: 24
	        }
	      },
	      '25': {
	        start: {
	          line: 120,
	          column: 18
	        },
	        end: {
	          line: 120,
	          column: 22
	        }
	      },
	      '26': {
	        start: {
	          line: 122,
	          column: 4
	        },
	        end: {
	          line: 133,
	          column: 5
	        }
	      },
	      '27': {
	        start: {
	          line: 123,
	          column: 6
	        },
	        end: {
	          line: 132,
	          column: 7
	        }
	      },
	      '28': {
	        start: {
	          line: 124,
	          column: 8
	        },
	        end: {
	          line: 124,
	          column: 47
	        }
	      },
	      '29': {
	        start: {
	          line: 126,
	          column: 8
	        },
	        end: {
	          line: 130,
	          column: 9
	        }
	      },
	      '30': {
	        start: {
	          line: 127,
	          column: 10
	        },
	        end: {
	          line: 127,
	          column: 35
	        }
	      },
	      '31': {
	        start: {
	          line: 128,
	          column: 15
	        },
	        end: {
	          line: 130,
	          column: 9
	        }
	      },
	      '32': {
	        start: {
	          line: 129,
	          column: 10
	        },
	        end: {
	          line: 129,
	          column: 32
	        }
	      },
	      '33': {
	        start: {
	          line: 131,
	          column: 8
	        },
	        end: {
	          line: 131,
	          column: 14
	        }
	      },
	      '34': {
	        start: {
	          line: 135,
	          column: 4
	        },
	        end: {
	          line: 140,
	          column: 5
	        }
	      },
	      '35': {
	        start: {
	          line: 136,
	          column: 6
	        },
	        end: {
	          line: 139,
	          column: 9
	        }
	      },
	      '36': {
	        start: {
	          line: 142,
	          column: 4
	        },
	        end: {
	          line: 142,
	          column: 19
	        }
	      },
	      '37': {
	        start: {
	          line: 153,
	          column: 4
	        },
	        end: {
	          line: 159,
	          column: 5
	        }
	      },
	      '38': {
	        start: {
	          line: 154,
	          column: 20
	        },
	        end: {
	          line: 154,
	          column: 27
	        }
	      },
	      '39': {
	        start: {
	          line: 156,
	          column: 6
	        },
	        end: {
	          line: 158,
	          column: 7
	        }
	      },
	      '40': {
	        start: {
	          line: 157,
	          column: 8
	        },
	        end: {
	          line: 157,
	          column: 21
	        }
	      },
	      '41': {
	        start: {
	          line: 160,
	          column: 4
	        },
	        end: {
	          line: 160,
	          column: 16
	        }
	      },
	      '42': {
	        start: {
	          line: 169,
	          column: 4
	        },
	        end: {
	          line: 169,
	          column: 29
	        }
	      },
	      '43': {
	        start: {
	          line: 170,
	          column: 4
	        },
	        end: {
	          line: 170,
	          column: 28
	        }
	      },
	      '44': {
	        start: {
	          line: 179,
	          column: 0
	        },
	        end: {
	          line: 183,
	          column: 2
	        }
	      },
	      '45': {
	        start: {
	          line: 186,
	          column: 0
	        },
	        end: {
	          line: 188,
	          column: 1
	        }
	      },
	      '46': {
	        start: {
	          line: 187,
	          column: 2
	        },
	        end: {
	          line: 187,
	          column: 50
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 26,
	            column: 2
	          },
	          end: {
	            line: 26,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 26,
	            column: 16
	          },
	          end: {
	            line: 68,
	            column: 3
	          }
	        },
	        line: 26
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 82,
	            column: 2
	          },
	          end: {
	            line: 82,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 82,
	            column: 34
	          },
	          end: {
	            line: 110,
	            column: 3
	          }
	        },
	        line: 82
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 119,
	            column: 2
	          },
	          end: {
	            line: 119,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 119,
	            column: 35
	          },
	          end: {
	            line: 143,
	            column: 3
	          }
	        },
	        line: 119
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 152,
	            column: 2
	          },
	          end: {
	            line: 152,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 152,
	            column: 26
	          },
	          end: {
	            line: 161,
	            column: 3
	          }
	        },
	        line: 152
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 168,
	            column: 2
	          },
	          end: {
	            line: 168,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 168,
	            column: 12
	          },
	          end: {
	            line: 171,
	            column: 3
	          }
	        },
	        line: 168
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 31,
	            column: 4
	          },
	          end: {
	            line: 38,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 31,
	            column: 4
	          },
	          end: {
	            line: 38,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 31,
	            column: 4
	          },
	          end: {
	            line: 38,
	            column: 5
	          }
	        }],
	        line: 31
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 34,
	            column: 8
	          },
	          end: {
	            line: 36,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 34,
	            column: 8
	          },
	          end: {
	            line: 36,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 34,
	            column: 8
	          },
	          end: {
	            line: 36,
	            column: 9
	          }
	        }],
	        line: 34
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 86,
	            column: 4
	          },
	          end: {
	            line: 88,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 86,
	            column: 4
	          },
	          end: {
	            line: 88,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 86,
	            column: 4
	          },
	          end: {
	            line: 88,
	            column: 5
	          }
	        }],
	        line: 86
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 94,
	            column: 4
	          },
	          end: {
	            line: 100,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 94,
	            column: 4
	          },
	          end: {
	            line: 100,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 94,
	            column: 4
	          },
	          end: {
	            line: 100,
	            column: 5
	          }
	        }],
	        line: 94
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 123,
	            column: 6
	          },
	          end: {
	            line: 132,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 123,
	            column: 6
	          },
	          end: {
	            line: 132,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 123,
	            column: 6
	          },
	          end: {
	            line: 132,
	            column: 7
	          }
	        }],
	        line: 123
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 126,
	            column: 8
	          },
	          end: {
	            line: 130,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 126,
	            column: 8
	          },
	          end: {
	            line: 130,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 126,
	            column: 8
	          },
	          end: {
	            line: 130,
	            column: 9
	          }
	        }],
	        line: 126
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 128,
	            column: 15
	          },
	          end: {
	            line: 130,
	            column: 9
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 128,
	            column: 15
	          },
	          end: {
	            line: 130,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 128,
	            column: 15
	          },
	          end: {
	            line: 130,
	            column: 9
	          }
	        }],
	        line: 128
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 135,
	            column: 4
	          },
	          end: {
	            line: 140,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 135,
	            column: 4
	          },
	          end: {
	            line: 140,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 135,
	            column: 4
	          },
	          end: {
	            line: 140,
	            column: 5
	          }
	        }],
	        line: 135
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 156,
	            column: 6
	          },
	          end: {
	            line: 158,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 156,
	            column: 6
	          },
	          end: {
	            line: 158,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 156,
	            column: 6
	          },
	          end: {
	            line: 158,
	            column: 7
	          }
	        }],
	        line: 156
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0,
	      '27': 0,
	      '28': 0,
	      '29': 0,
	      '30': 0,
	      '31': 0,
	      '32': 0,
	      '33': 0,
	      '34': 0,
	      '35': 0,
	      '36': 0,
	      '37': 0,
	      '38': 0,
	      '39': 0,
	      '40': 0,
	      '41': 0,
	      '42': 0,
	      '43': 0,
	      '44': 0,
	      '45': 0,
	      '46': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0, 0],
	      '8': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();

	var QualityLevelList =
	/*#__PURE__*/
	function (_videojs$EventTarget) {
	  _inheritsLoose(QualityLevelList, _videojs$EventTarget);

	  function QualityLevelList() {
	    var _this;

	    cov_ewsbgpa6j.f[0]++;
	    cov_ewsbgpa6j.s[0]++;
	    _this = _videojs$EventTarget.call(this) || this;
	    var list = (cov_ewsbgpa6j.s[1]++, _assertThisInitialized(_assertThisInitialized(_this)));
	    cov_ewsbgpa6j.s[2]++;

	    if (videojs.browser.IS_IE8) {
	      cov_ewsbgpa6j.b[0][0]++;
	      cov_ewsbgpa6j.s[3]++;
	      list = document_1.createElement('custom');
	      cov_ewsbgpa6j.s[4]++;

	      for (var prop in QualityLevelList.prototype) {
	        cov_ewsbgpa6j.s[5]++;

	        if (prop !== 'constructor') {
	          cov_ewsbgpa6j.b[1][0]++;
	          cov_ewsbgpa6j.s[6]++;
	          list[prop] = QualityLevelList.prototype[prop];
	        } else {
	          cov_ewsbgpa6j.b[1][1]++;
	        }
	      }
	    } else {
	      cov_ewsbgpa6j.b[0][1]++;
	    }

	    cov_ewsbgpa6j.s[7]++;
	    list.levels_ = [];
	    cov_ewsbgpa6j.s[8]++;
	    list.selectedIndex_ = -1;
	    cov_ewsbgpa6j.s[9]++;
	    Object.defineProperty(list, 'selectedIndex', {
	      get: function get() {
	        cov_ewsbgpa6j.s[10]++;
	        return list.selectedIndex_;
	      }
	    });
	    cov_ewsbgpa6j.s[11]++;
	    Object.defineProperty(list, 'length', {
	      get: function get() {
	        cov_ewsbgpa6j.s[12]++;
	        return list.levels_.length;
	      }
	    });
	    cov_ewsbgpa6j.s[13]++;
	    return list || _assertThisInitialized(_this);
	  }

	  var _proto = QualityLevelList.prototype;

	  _proto.addQualityLevel = function addQualityLevel(representation) {
	    cov_ewsbgpa6j.f[1]++;
	    var qualityLevel = (cov_ewsbgpa6j.s[14]++, this.getQualityLevelById(representation.id));
	    cov_ewsbgpa6j.s[15]++;

	    if (qualityLevel) {
	      cov_ewsbgpa6j.b[2][0]++;
	      cov_ewsbgpa6j.s[16]++;
	      return qualityLevel;
	    } else {
	      cov_ewsbgpa6j.b[2][1]++;
	    }

	    var index = (cov_ewsbgpa6j.s[17]++, this.levels_.length);
	    cov_ewsbgpa6j.s[18]++;
	    qualityLevel = new QualityLevel(representation);
	    cov_ewsbgpa6j.s[19]++;

	    if (!('' + index in this)) {
	      cov_ewsbgpa6j.b[3][0]++;
	      cov_ewsbgpa6j.s[20]++;
	      Object.defineProperty(this, index, {
	        get: function get() {
	          cov_ewsbgpa6j.s[21]++;
	          return this.levels_[index];
	        }
	      });
	    } else {
	      cov_ewsbgpa6j.b[3][1]++;
	    }

	    cov_ewsbgpa6j.s[22]++;
	    this.levels_.push(qualityLevel);
	    cov_ewsbgpa6j.s[23]++;
	    this.trigger({
	      qualityLevel: qualityLevel,
	      type: 'addqualitylevel'
	    });
	    cov_ewsbgpa6j.s[24]++;
	    return qualityLevel;
	  };

	  _proto.removeQualityLevel = function removeQualityLevel(qualityLevel) {
	    cov_ewsbgpa6j.f[2]++;
	    var removed = (cov_ewsbgpa6j.s[25]++, null);
	    cov_ewsbgpa6j.s[26]++;

	    for (var i = 0, l = this.length; i < l; i++) {
	      cov_ewsbgpa6j.s[27]++;

	      if (this[i] === qualityLevel) {
	        cov_ewsbgpa6j.b[4][0]++;
	        cov_ewsbgpa6j.s[28]++;
	        removed = this.levels_.splice(i, 1)[0];
	        cov_ewsbgpa6j.s[29]++;

	        if (this.selectedIndex_ === i) {
	          cov_ewsbgpa6j.b[5][0]++;
	          cov_ewsbgpa6j.s[30]++;
	          this.selectedIndex_ = -1;
	        } else {
	          cov_ewsbgpa6j.b[5][1]++;
	          cov_ewsbgpa6j.s[31]++;

	          if (this.selectedIndex_ > i) {
	            cov_ewsbgpa6j.b[6][0]++;
	            cov_ewsbgpa6j.s[32]++;
	            this.selectedIndex_--;
	          } else {
	            cov_ewsbgpa6j.b[6][1]++;
	          }
	        }

	        cov_ewsbgpa6j.s[33]++;
	        break;
	      } else {
	        cov_ewsbgpa6j.b[4][1]++;
	      }
	    }

	    cov_ewsbgpa6j.s[34]++;

	    if (removed) {
	      cov_ewsbgpa6j.b[7][0]++;
	      cov_ewsbgpa6j.s[35]++;
	      this.trigger({
	        qualityLevel: qualityLevel,
	        type: 'removequalitylevel'
	      });
	    } else {
	      cov_ewsbgpa6j.b[7][1]++;
	    }

	    cov_ewsbgpa6j.s[36]++;
	    return removed;
	  };

	  _proto.getQualityLevelById = function getQualityLevelById(id) {
	    cov_ewsbgpa6j.f[3]++;
	    cov_ewsbgpa6j.s[37]++;

	    for (var i = 0, l = this.length; i < l; i++) {
	      var level = (cov_ewsbgpa6j.s[38]++, this[i]);
	      cov_ewsbgpa6j.s[39]++;

	      if (level.id === id) {
	        cov_ewsbgpa6j.b[8][0]++;
	        cov_ewsbgpa6j.s[40]++;
	        return level;
	      } else {
	        cov_ewsbgpa6j.b[8][1]++;
	      }
	    }

	    cov_ewsbgpa6j.s[41]++;
	    return null;
	  };

	  _proto.dispose = function dispose() {
	    cov_ewsbgpa6j.f[4]++;
	    cov_ewsbgpa6j.s[42]++;
	    this.selectedIndex_ = -1;
	    cov_ewsbgpa6j.s[43]++;
	    this.levels_.length = 0;
	  };

	  return QualityLevelList;
	}(videojs.EventTarget);

	cov_ewsbgpa6j.s[44]++;
	QualityLevelList.prototype.allowedEvents_ = {
	  change: 'change',
	  addqualitylevel: 'addqualitylevel',
	  removequalitylevel: 'removequalitylevel'
	};
	cov_ewsbgpa6j.s[45]++;

	for (var event in QualityLevelList.prototype.allowedEvents_) {
	  cov_ewsbgpa6j.s[46]++;
	  QualityLevelList.prototype['on' + event] = null;
	}

	var version = "2.1.0";

	var cov_2erotfic4r = function () {
	  var path = '/Users/gkatsevman/p/videojs-contrib-quality-levels/src/plugin.js',
	      hash = '5badbe624e76f57d81d9f956b4b724fdf574df3f',
	      Function = function () {}.constructor,
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/gkatsevman/p/videojs-contrib-quality-levels/src/plugin.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 6,
	          column: 23
	        },
	        end: {
	          line: 6,
	          column: 63
	        }
	      },
	      '1': {
	        start: {
	          line: 16,
	          column: 19
	        },
	        end: {
	          line: 33,
	          column: 1
	        }
	      },
	      '2': {
	        start: {
	          line: 17,
	          column: 27
	        },
	        end: {
	          line: 17,
	          column: 47
	        }
	      },
	      '3': {
	        start: {
	          line: 19,
	          column: 27
	        },
	        end: {
	          line: 19,
	          column: 49
	        }
	      },
	      '4': {
	        start: {
	          line: 21,
	          column: 25
	        },
	        end: {
	          line: 25,
	          column: 3
	        }
	      },
	      '5': {
	        start: {
	          line: 22,
	          column: 4
	        },
	        end: {
	          line: 22,
	          column: 31
	        }
	      },
	      '6': {
	        start: {
	          line: 23,
	          column: 4
	        },
	        end: {
	          line: 23,
	          column: 44
	        }
	      },
	      '7': {
	        start: {
	          line: 24,
	          column: 4
	        },
	        end: {
	          line: 24,
	          column: 42
	        }
	      },
	      '8': {
	        start: {
	          line: 27,
	          column: 2
	        },
	        end: {
	          line: 27,
	          column: 39
	        }
	      },
	      '9': {
	        start: {
	          line: 29,
	          column: 2
	        },
	        end: {
	          line: 29,
	          column: 48
	        }
	      },
	      '10': {
	        start: {
	          line: 29,
	          column: 31
	        },
	        end: {
	          line: 29,
	          column: 47
	        }
	      },
	      '11': {
	        start: {
	          line: 30,
	          column: 2
	        },
	        end: {
	          line: 30,
	          column: 41
	        }
	      },
	      '12': {
	        start: {
	          line: 32,
	          column: 2
	        },
	        end: {
	          line: 32,
	          column: 26
	        }
	      },
	      '13': {
	        start: {
	          line: 46,
	          column: 22
	        },
	        end: {
	          line: 48,
	          column: 1
	        }
	      },
	      '14': {
	        start: {
	          line: 47,
	          column: 2
	        },
	        end: {
	          line: 47,
	          column: 61
	        }
	      },
	      '15': {
	        start: {
	          line: 51,
	          column: 0
	        },
	        end: {
	          line: 51,
	          column: 47
	        }
	      },
	      '16': {
	        start: {
	          line: 54,
	          column: 0
	        },
	        end: {
	          line: 54,
	          column: 32
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 16,
	            column: 19
	          },
	          end: {
	            line: 16,
	            column: 20
	          }
	        },
	        loc: {
	          start: {
	            line: 16,
	            column: 45
	          },
	          end: {
	            line: 33,
	            column: 1
	          }
	        },
	        line: 16
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 21,
	            column: 25
	          },
	          end: {
	            line: 21,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 21,
	            column: 36
	          },
	          end: {
	            line: 25,
	            column: 3
	          }
	        },
	        line: 21
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 29,
	            column: 25
	          },
	          end: {
	            line: 29,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 29,
	            column: 31
	          },
	          end: {
	            line: 29,
	            column: 47
	          }
	        },
	        line: 29
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 46,
	            column: 22
	          },
	          end: {
	            line: 46,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 46,
	            column: 40
	          },
	          end: {
	            line: 48,
	            column: 1
	          }
	        },
	        line: 46
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 6,
	            column: 23
	          },
	          end: {
	            line: 6,
	            column: 63
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 6,
	            column: 23
	          },
	          end: {
	            line: 6,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 6,
	            column: 49
	          },
	          end: {
	            line: 6,
	            column: 63
	          }
	        }],
	        line: 6
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0
	    },
	    b: {
	      '0': [0, 0]
	    },
	    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();
	var registerPlugin = (cov_2erotfic4r.s[0]++, (cov_2erotfic4r.b[0][0]++, videojs.registerPlugin) || (cov_2erotfic4r.b[0][1]++, videojs.plugin));
	cov_2erotfic4r.s[1]++;

	var initPlugin = function initPlugin(player, options) {
	  cov_2erotfic4r.f[0]++;
	  var originalPluginFn = (cov_2erotfic4r.s[2]++, player.qualityLevels);
	  var qualityLevelList = (cov_2erotfic4r.s[3]++, new QualityLevelList());
	  cov_2erotfic4r.s[4]++;

	  var disposeHandler = function disposeHandler() {
	    cov_2erotfic4r.f[1]++;
	    cov_2erotfic4r.s[5]++;
	    qualityLevelList.dispose();
	    cov_2erotfic4r.s[6]++;
	    player.qualityLevels = originalPluginFn;
	    cov_2erotfic4r.s[7]++;
	    player.off('dispose', disposeHandler);
	  };

	  cov_2erotfic4r.s[8]++;
	  player.on('dispose', disposeHandler);
	  cov_2erotfic4r.s[9]++;

	  player.qualityLevels = function () {
	    cov_2erotfic4r.f[2]++;
	    cov_2erotfic4r.s[10]++;
	    return qualityLevelList;
	  };

	  cov_2erotfic4r.s[11]++;
	  player.qualityLevels.VERSION = version;
	  cov_2erotfic4r.s[12]++;
	  return qualityLevelList;
	};

	cov_2erotfic4r.s[13]++;

	var qualityLevels = function qualityLevels(options) {
	  cov_2erotfic4r.f[3]++;
	  cov_2erotfic4r.s[14]++;
	  return initPlugin(this, videojs.mergeOptions({}, options));
	};

	cov_2erotfic4r.s[15]++;
	registerPlugin('qualityLevels', qualityLevels);
	cov_2erotfic4r.s[16]++;
	qualityLevels.VERSION = version;

	var Player = videojs.getComponent('Player');
	QUnit.test('the environment is sane', function (assert) {
	  assert.strictEqual(typeof Array.isArray, 'function', 'es5 exists');
	  assert.strictEqual(typeof sinon, 'object', 'sinon exists');
	  assert.strictEqual(typeof videojs, 'function', 'videojs exists');
	  assert.strictEqual(typeof qualityLevels, 'function', 'plugin is a function');
	});
	QUnit.module('videojs-contrib-quality-levels', {
	  beforeEach: function beforeEach() {
	    // Mock the environment's timers because certain things - particularly
	    // player readiness - are asynchronous in video.js 5. This MUST come
	    // before any player is created; otherwise, timers could get created
	    // with the actual timer methods!
	    this.clock = sinon.useFakeTimers();
	    this.fixture = document_1.getElementById('qunit-fixture');
	    this.video = document_1.createElement('video');
	    this.fixture.appendChild(this.video);
	    this.player = videojs(this.video);
	  },
	  afterEach: function afterEach() {
	    this.player.dispose();
	    this.clock.restore();
	  }
	});
	QUnit.test('registers itself with video.js', function (assert) {
	  assert.strictEqual(typeof Player.prototype.qualityLevels, 'function', 'videojs-contrib-quality-levels plugin was registered');
	});

	var representations = [{
	  id: '0',
	  width: 100,
	  height: 100,
	  bandwidth: 100,
	  enabled: function enabled() {
	    return true;
	  }
	}, {
	  id: '1',
	  width: 200,
	  height: 200,
	  bandwidth: 200,
	  enabled: function enabled() {
	    return true;
	  }
	}, {
	  id: '2',
	  width: 300,
	  height: 300,
	  bandwidth: 300,
	  enabled: function enabled() {
	    return true;
	  }
	}, {
	  id: '3',
	  width: 400,
	  height: 400,
	  bandwidth: 400,
	  enabled: function enabled() {
	    return true;
	  }
	}];

	QUnit.module('QualityLevelList', {
	  beforeEach: function beforeEach() {
	    this.qualityLevels = new QualityLevelList();
	    this.levels = representations;
	  }
	});
	QUnit.test('Properly adds QualityLevels to the QualityLevelList', function (assert) {
	  var addCount = 0;
	  this.qualityLevels.on('addqualitylevel', function (event) {
	    addCount++;
	  });
	  var expected0 = this.qualityLevels.addQualityLevel(this.levels[0]);
	  assert.equal(this.qualityLevels.length, 1, 'added quality level');
	  assert.equal(addCount, 1, 'emmitted addqualitylevel event');
	  assert.strictEqual(this.qualityLevels[0], expected0, 'can access quality level with index');
	  var expected1 = this.qualityLevels.addQualityLevel(this.levels[1]);
	  assert.equal(this.qualityLevels.length, 2, 'added quality level');
	  assert.equal(addCount, 2, 'emmitted addqualitylevel event');
	  assert.strictEqual(this.qualityLevels[1], expected1, 'can access quality level with index');
	  var expectedDuplicate = this.qualityLevels.addQualityLevel(this.levels[0]);
	  assert.equal(this.qualityLevels.length, 2, 'does not add duplicate quality level');
	  assert.equal(addCount, 2, 'no event emitted on dulicate');
	  assert.strictEqual(this.qualityLevels[3], undefined, 'no index property defined');
	  assert.strictEqual(this.qualityLevels[0], expected0, 'quality level unchanged');
	  assert.strictEqual(this.qualityLevels[0], expectedDuplicate, 'adding duplicate returns same reference');
	  assert.strictEqual(this.qualityLevels[1], expected1, 'quality level unchanged');
	});
	QUnit.test('Properly removes QualityLevels from the QualityLevelList', function (assert) {
	  var _this = this;

	  var removeCount = 0;
	  var expected = [];
	  this.levels.forEach(function (qualityLevel) {
	    expected.push(_this.qualityLevels.addQualityLevel(qualityLevel));
	  });
	  this.qualityLevels.on('removequalitylevel', function (event) {
	    removeCount++;
	  }); // Mock an initial selected quality level

	  this.qualityLevels.selectedIndex_ = 2;
	  assert.equal(this.qualityLevels.length, 4, '4 initial quality levels');
	  var removed = this.qualityLevels.removeQualityLevel(expected[3]);
	  assert.equal(this.qualityLevels.length, 3, 'removed quality level');
	  assert.equal(removeCount, 1, 'emitted removequalitylevel event');
	  assert.strictEqual(removed, expected[3], 'returned removed level');
	  assert.notStrictEqual(this.qualityLevels[3], expected[3], 'nothing at index');
	  removed = this.qualityLevels.removeQualityLevel(expected[1]);
	  assert.equal(this.qualityLevels.length, 2, 'removed quality level');
	  assert.equal(removeCount, 2, 'emitted removequalitylevel event');
	  assert.strictEqual(removed, expected[1], 'returned removed level');
	  assert.notStrictEqual(this.qualityLevels[1], expected[1], 'quality level not at index');
	  assert.strictEqual(this.qualityLevels[this.qualityLevels.selectedIndex], expected[2], 'selected index properly adjusted on quality level removal');
	  removed = this.qualityLevels.removeQualityLevel(expected[3]);
	  assert.equal(this.qualityLevels.length, 2, 'no quality level removed if not found');
	  assert.equal(removed, null, 'returned null when nothing removed');
	  assert.equal(removeCount, 2, 'no event emitted when quality level not found');
	  removed = this.qualityLevels.removeQualityLevel(expected[2]);
	  assert.equal(this.qualityLevels.length, 1, 'quality level removed');
	  assert.equal(removeCount, 3, 'emitted removequalitylevel event');
	  assert.strictEqual(removed, expected[2], 'returned removed level');
	  assert.equal(this.qualityLevels.selectedIndex, -1, 'selectedIndex set to -1 when removing selected quality level');
	});
	QUnit.test('can get quality level by id', function (assert) {
	  var _this2 = this;

	  var expected = [];
	  this.levels.forEach(function (qualityLevel) {
	    expected.push(_this2.qualityLevels.addQualityLevel(qualityLevel));
	  });
	  assert.strictEqual(this.qualityLevels.getQualityLevelById('0'), expected[0], 'found quality level with id "0"');
	  assert.strictEqual(this.qualityLevels.getQualityLevelById('1'), expected[1], 'found quality level with id "1"');
	  assert.strictEqual(this.qualityLevels.getQualityLevelById('2'), expected[2], 'found quality level with id "2"');
	  assert.strictEqual(this.qualityLevels.getQualityLevelById('3'), expected[3], 'found quality level with id "3"');
	  assert.strictEqual(this.qualityLevels.getQualityLevelById('4'), null, 'no quality level with id "4" found');
	});

}(videojs,QUnit,sinon));
