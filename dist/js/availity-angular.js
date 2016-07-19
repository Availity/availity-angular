/*!
 * 
 * availity-angular v2.0.0-beta.0 (07/15/2016)
 * (c) Availity, LLC
 */
/*!
 * 
 * availity-angular v2.0.0-beta.0 (07/15/2016)
 * (c) Availity, LLC
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("jQuery"), require("moment"), require("_"), require("TraceKit"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "jQuery", "moment", "_", "TraceKit"], factory);
	else if(typeof exports === 'object')
		exports["availity-angular"] = factory(require("angular"), require("jQuery"), require("moment"), require("_"), require("TraceKit"));
	else
		root["availity-angular"] = factory(root["angular"], root["jQuery"], root["moment"], root["_"], root["TraceKit"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_68__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_190__, __WEBPACK_EXTERNAL_MODULE_480__) {
return webpackJsonpavaility_angular([1,0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';__webpack_require__(248);__webpack_require__(202);__webpack_require__(229);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(5)
	  , core      = __webpack_require__(30)
	  , hide      = __webpack_require__(18)
	  , redefine  = __webpack_require__(20)
	  , ctx       = __webpack_require__(34)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(9);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_angular2.default.module('availity',['ng']);

/***/ },
/* 5 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var ngModule=_angular2.default.module('availity.ui',['ng']);exports.default=ngModule;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(90)('wks')
	  , uid        = __webpack_require__(54)
	  , Symbol     = __webpack_require__(5).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(7)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(3)
	  , IE8_DOM_DEFINE = __webpack_require__(171)
	  , toPrimitive    = __webpack_require__(32)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _setPrototypeOf = __webpack_require__(252);
	
	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
	
	var _create = __webpack_require__(251);
	
	var _create2 = _interopRequireDefault(_create);
	
	var _typeof2 = __webpack_require__(152);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }
	
	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _typeof2 = __webpack_require__(152);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(42)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(26);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(12)
	  , createDesc = __webpack_require__(41);
	module.exports = __webpack_require__(11) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(5)
	  , hide      = __webpack_require__(18)
	  , has       = __webpack_require__(17)
	  , SRC       = __webpack_require__(54)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(30).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1)
	  , fails   = __webpack_require__(7)
	  , defined = __webpack_require__(26)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(72)
	  , defined = __webpack_require__(26);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(73)
	  , createDesc     = __webpack_require__(41)
	  , toIObject      = __webpack_require__(22)
	  , toPrimitive    = __webpack_require__(32)
	  , has            = __webpack_require__(17)
	  , IE8_DOM_DEFINE = __webpack_require__(171)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(11) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(17)
	  , toObject    = __webpack_require__(16)
	  , IE_PROTO    = __webpack_require__(124)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(7);
	
	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _assign = __webpack_require__(250);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(34)
	  , IObject  = __webpack_require__(72)
	  , toObject = __webpack_require__(16)
	  , toLength = __webpack_require__(15)
	  , asc      = __webpack_require__(294);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(1)
	  , core    = __webpack_require__(30)
	  , fails   = __webpack_require__(7);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(9);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(19);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(186)
	  , $export = __webpack_require__(1)
	  , shared  = __webpack_require__(90)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(189)));
	
	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(11)){
	  var LIBRARY             = __webpack_require__(47)
	    , global              = __webpack_require__(5)
	    , fails               = __webpack_require__(7)
	    , $export             = __webpack_require__(1)
	    , $typed              = __webpack_require__(91)
	    , $buffer             = __webpack_require__(131)
	    , ctx                 = __webpack_require__(34)
	    , anInstance          = __webpack_require__(39)
	    , propertyDesc        = __webpack_require__(41)
	    , hide                = __webpack_require__(18)
	    , redefineAll         = __webpack_require__(51)
	    , isInteger           = __webpack_require__(118)
	    , toInteger           = __webpack_require__(42)
	    , toLength            = __webpack_require__(15)
	    , toIndex             = __webpack_require__(53)
	    , toPrimitive         = __webpack_require__(32)
	    , has                 = __webpack_require__(17)
	    , same                = __webpack_require__(183)
	    , classof             = __webpack_require__(64)
	    , isObject            = __webpack_require__(9)
	    , toObject            = __webpack_require__(16)
	    , isArrayIter         = __webpack_require__(116)
	    , create              = __webpack_require__(48)
	    , getPrototypeOf      = __webpack_require__(24)
	    , gOPN                = __webpack_require__(49).f
	    , isIterable          = __webpack_require__(301)
	    , getIterFn           = __webpack_require__(133)
	    , uid                 = __webpack_require__(54)
	    , wks                 = __webpack_require__(10)
	    , createArrayMethod   = __webpack_require__(29)
	    , createArrayIncludes = __webpack_require__(80)
	    , speciesConstructor  = __webpack_require__(125)
	    , ArrayIterators      = __webpack_require__(134)
	    , Iterators           = __webpack_require__(46)
	    , $iterDetect         = __webpack_require__(86)
	    , setSpecies          = __webpack_require__(52)
	    , arrayFill           = __webpack_require__(109)
	    , arrayCopyWithin     = __webpack_require__(164)
	    , $DP                 = __webpack_require__(12)
	    , $GOPD               = __webpack_require__(23)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });
	
	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });
	
	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});
	
	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});
	
	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";exports.__esModule=true;var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Validator=function Validator(name){(0,_classCallCheck3.default)(this,Validator);this.name=name;};exports.default=Validator;

/***/ },
/* 38 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(54)('meta')
	  , isObject = __webpack_require__(9)
	  , has      = __webpack_require__(17)
	  , setDesc  = __webpack_require__(12).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(7)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(259), __esModule: true };

/***/ },
/* 44 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(157)
	  , defined = __webpack_require__(95);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(3)
	  , dPs         = __webpack_require__(176)
	  , enumBugKeys = __webpack_require__(112)
	  , IE_PROTO    = __webpack_require__(124)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(111)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(114).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(178)
	  , hiddenKeys = __webpack_require__(112).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(178)
	  , enumBugKeys = __webpack_require__(112);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(20);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(5)
	  , dP          = __webpack_require__(12)
	  , DESCRIPTORS = __webpack_require__(11)
	  , SPECIES     = __webpack_require__(10)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(42)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;exports.print=exports.uuid=exports.REGEX_API_URL=exports.regions=exports.getRelativeUrl=exports.isBlank=exports.stringify=undefined;var _strings=__webpack_require__(208);var _urls=__webpack_require__(209);var _uuid=__webpack_require__(210);var _uuid2=_interopRequireDefault(_uuid);var _print=__webpack_require__(207);var _print2=_interopRequireDefault(_print);var _regions=__webpack_require__(142);var _regions2=_interopRequireDefault(_regions);__webpack_require__(206);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.stringify=_strings.stringify;exports.isBlank=_strings.isBlank;exports.getRelativeUrl=_urls.getRelativeUrl;exports.regions=_regions2.default;exports.REGEX_API_URL=_urls.REGEX_API_URL;exports.uuid=_uuid2.default;exports.print=_print2.default;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(58)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(38)
	  , core      = __webpack_require__(33)
	  , ctx       = __webpack_require__(154)
	  , hide      = __webpack_require__(59)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(60)
	  , createDesc = __webpack_require__(78);
	module.exports = __webpack_require__(56) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(70)
	  , IE8_DOM_DEFINE = __webpack_require__(156)
	  , toPrimitive    = __webpack_require__(106)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(56) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(161)
	  , enumBugKeys = __webpack_require__(96);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(103)('wks')
	  , uid        = __webpack_require__(79)
	  , Symbol     = __webpack_require__(38).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(10)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(18)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(25)
	  , TAG = __webpack_require__(10)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(34)
	  , call        = __webpack_require__(172)
	  , isArrayIter = __webpack_require__(116)
	  , anObject    = __webpack_require__(3)
	  , toLength    = __webpack_require__(15)
	  , getIterFn   = __webpack_require__(133)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(12).f
	  , has = __webpack_require__(17)
	  , TAG = __webpack_require__(10)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1)
	  , defined = __webpack_require__(26)
	  , fails   = __webpack_require__(7)
	  , spaces  = __webpack_require__(129)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_68__;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.factory('avValUtils',function(){return{isDefined:function isDefined(value){return _angular2.default.isDefined(value)&&value!==''&&value!==null;},isEmpty:function isEmpty(value){return!this.isDefined(value)||_angular2.default.isString(value)&&value.trim()==='';}};});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(71);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(25);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_74__;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// Inspiration: https://github.com/seeden/angular-es6
	function storeInjections(){var injected=arguments.length<=0||arguments[0]===undefined?[]:arguments[0];var instance=arguments[1];var args=arguments[2];var name=arguments.length<=3||arguments[3]===undefined?'av':arguments[3];var instanceInject=instance[name]=instance[name]||{};injected.forEach(function(injectName,index){instanceInject[injectName]=args[index];});}var Base=function Base(){(0,_classCallCheck3.default)(this,Base);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}storeInjections(this.constructor.$inject,this,args);};Base.$inject=[];exports.default=Base;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.constant('AV_UI',{NG_OPTIONS:/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,FALLBACK_VALIDATION_MESSAGE:'This field is invalid.'});_module2.default.constant('AV_BOOTSTRAP_ADAPTER',{CLASSES:{SUCCESS:'has-success',WARNING:'has-warning',ERROR:'has-error',FEEDBACK:'has-feedback',HELP:'help-block',FORM_GROUP:'.form-group:first',NAVBAR:'navbar-fixed-top'},SELECTORS:{CONTAINER:'container-id',DATA_CONTAINER:'data-container-id'},CONTROLLER:'$avValContainerController'});_module2.default.constant('AV_VAL_ADAPTER',{DEFAULT:'avValBootstrapAdapter'});

/***/ },
/* 77 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(22)
	  , toLength  = __webpack_require__(15)
	  , toIndex   = __webpack_require__(53);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(5)
	  , $export           = __webpack_require__(1)
	  , redefine          = __webpack_require__(20)
	  , redefineAll       = __webpack_require__(51)
	  , meta              = __webpack_require__(40)
	  , forOf             = __webpack_require__(65)
	  , anInstance        = __webpack_require__(39)
	  , isObject          = __webpack_require__(9)
	  , fails             = __webpack_require__(7)
	  , $iterDetect       = __webpack_require__(86)
	  , setToStringTag    = __webpack_require__(66)
	  , inheritIfRequired = __webpack_require__(115);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(18)
	  , redefine = __webpack_require__(20)
	  , fails    = __webpack_require__(7)
	  , defined  = __webpack_require__(26)
	  , wks      = __webpack_require__(10);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(3);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 84 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(9)
	  , cof      = __webpack_require__(25)
	  , MATCH    = __webpack_require__(10)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(10)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(47)|| !__webpack_require__(7)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(5)[K];
	});

/***/ },
/* 88 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(9)
	  , anObject = __webpack_require__(3);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(34)(Function.call, __webpack_require__(23).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(5)
	  , hide   = __webpack_require__(18)
	  , uid    = __webpack_require__(54)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.constant('AV_VAL',{EVENTS:{REVALIDATE:'av:val:revalidate',SUBMITTED:'av:val:submitted',FAILED:'av:val:failed',RESET:'av:val:reset'},DEBOUNCE:800,DATE_FORMAT:{SIMPLE:'MM/DD/YYYY'},PATTERNS:{ALPHA_ONLY:/[^A-Za-z]+/g,NUMERIC_ONLY:/[^0-9]+/g}});exports.default=_module2.default;

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';__webpack_require__(143);__webpack_require__(212);

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(14);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(13);var _inherits3=_interopRequireDefault(_inherits2);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);var _validator=__webpack_require__(37);var _validator2=_interopRequireDefault(_validator);__webpack_require__(69);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.factory('avValPattern',function(avValUtils){var PatternValidator=function(_Validator){(0,_inherits3.default)(PatternValidator,_Validator);function PatternValidator(){(0,_classCallCheck3.default)(this,PatternValidator);var _this=(0,_possibleConstructorReturn3.default)(this,_Validator.call(this,'pattern'));_this.REGEX=/^\/(.*)\/([gim]*)$/;// regular expression to test a regular expression
	return _this;}PatternValidator.prototype.asRegExp=function asRegExp(pattern){// if regex then return it
	if(pattern.test){return pattern;}// if string then test for valid regex then convert to regex and return
	var match=pattern.match(this.REGEX);if(match){return new RegExp(match[1],match[2]);}throw new Error('Expected '+pattern+' to be a RegExp');};PatternValidator.prototype.validate=function validate(context){var value=context.value;var constraint=context.constraint;var self=this;var values=Array.isArray(constraint.value)?constraint.value:[constraint.value];var valid=false;values.forEach(function(expression){var pattern=self.asRegExp(expression);if(avValUtils.isEmpty(value)||pattern.test(value)){valid=true;}});return valid;};return PatternValidator;}(_validator2.default);return new PatternValidator();});

/***/ },
/* 95 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(70)
	  , dPs         = __webpack_require__(274)
	  , enumBugKeys = __webpack_require__(96)
	  , IE_PROTO    = __webpack_require__(102)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(155)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(267).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 100 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(60).f
	  , has = __webpack_require__(44)
	  , TAG = __webpack_require__(62)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(103)('keys')
	  , uid    = __webpack_require__(79);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(38)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 104 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(95);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(71);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(38)
	  , core           = __webpack_require__(33)
	  , LIBRARY        = __webpack_require__(98)
	  , wksExt         = __webpack_require__(108)
	  , defineProperty = __webpack_require__(60).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(62);

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(16)
	  , toIndex  = __webpack_require__(53)
	  , toLength = __webpack_require__(15);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(12)
	  , createDesc      = __webpack_require__(41);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(9)
	  , document = __webpack_require__(5).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 112 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(10)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5).document && document.documentElement;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(9)
	  , setPrototypeOf = __webpack_require__(89).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(46)
	  , ITERATOR   = __webpack_require__(10)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(25);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(9)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(48)
	  , descriptor     = __webpack_require__(41)
	  , setToStringTag = __webpack_require__(66)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(18)(IteratorPrototype, __webpack_require__(10)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(47)
	  , $export        = __webpack_require__(1)
	  , redefine       = __webpack_require__(20)
	  , hide           = __webpack_require__(18)
	  , has            = __webpack_require__(17)
	  , Iterators      = __webpack_require__(46)
	  , $iterCreate    = __webpack_require__(119)
	  , setToStringTag = __webpack_require__(66)
	  , getPrototypeOf = __webpack_require__(24)
	  , ITERATOR       = __webpack_require__(10)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 122 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(5)
	  , macrotask = __webpack_require__(130).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(25)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(90)('keys')
	  , uid    = __webpack_require__(54);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(3)
	  , aFunction = __webpack_require__(19)
	  , SPECIES   = __webpack_require__(10)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(42)
	  , defined   = __webpack_require__(26);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(85)
	  , defined  = __webpack_require__(26);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(42)
	  , defined   = __webpack_require__(26);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(34)
	  , invoke             = __webpack_require__(84)
	  , html               = __webpack_require__(114)
	  , cel                = __webpack_require__(111)
	  , global             = __webpack_require__(5)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(25)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(5)
	  , DESCRIPTORS    = __webpack_require__(11)
	  , LIBRARY        = __webpack_require__(47)
	  , $typed         = __webpack_require__(91)
	  , hide           = __webpack_require__(18)
	  , redefineAll    = __webpack_require__(51)
	  , fails          = __webpack_require__(7)
	  , anInstance     = __webpack_require__(39)
	  , toInteger      = __webpack_require__(42)
	  , toLength       = __webpack_require__(15)
	  , gOPN           = __webpack_require__(49).f
	  , dP             = __webpack_require__(12).f
	  , arrayFill      = __webpack_require__(109)
	  , setToStringTag = __webpack_require__(66)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , parseInt       = global.parseInt
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , min            = Math.min
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};
	
	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};
	
	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(5)
	  , core           = __webpack_require__(30)
	  , LIBRARY        = __webpack_require__(47)
	  , wksExt         = __webpack_require__(185)
	  , defineProperty = __webpack_require__(12).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(64)
	  , ITERATOR  = __webpack_require__(10)('iterator')
	  , Iterators = __webpack_require__(46);
	module.exports = __webpack_require__(30).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(63)
	  , step             = __webpack_require__(173)
	  , Iterators        = __webpack_require__(46)
	  , toIObject        = __webpack_require__(22);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(120)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.constant('AV_ANALYTICS',{VIRTUAL_PAGE_TRACKING:true,SERVICES:{PIWIK:'avPiwikAnalytics',SPLUNK:'avSplunkAnalytics'},EVENTS:{PAGE:'$locationChangeSuccess',DEFAULT:'click'},PRE_FIX:/^avAnalytics(.*)$/,// should ignore these since they are part of the directives API
	IGNORE:['avAnalyticsOn','avAnalyticsIf'],ENV:{// not sure if this should live here
	PROD:{DOMAIN:'apps.availity.com',URL:'https://piwik.availity.com/piwik/'},QA:{URL:'https://qa-piwik.availity.com/piwik/'}}});exports.default=_module2.default;

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.constant('AV_API',{HEADERS:{SERVER:{ID:'X-API-ID',LOCATION:'Location',STATUS:'X-Status-Message',GLOBAL_ID:'X-Global-Transaction-ID'},CLIENT:{SESSION_ID:'X-Session-ID',AUTH:'Authorization',OVERRIDE:'X-HTTP-Method-Override',CALLBACK_URL:'X-Callback-URL',CUSTOMER_ID:'X-Availity-Customer-ID',RESPONSE_ENCODING:'X-Response-Encoding-Context'}},OPTIONS:{// default base segment for Availity API endpoints
	path:'/api',// full url to api resource
	url:null,// name of resource
	name:null,// defaults version for api
	version:'/v1',// cache all request by default
	cache:true,// flag used to enable behaviors around the Availity Rest API
	api:true,// in ms
	pollingInterval:1000,// % the polling interval decays after every retry
	pollingDecay:1.2,// maximum time polling is allowed before rejecting the request
	pollingMaxInterval:30000,// default headers
	headers:{// Turn off content encoding for angular apis
	'X-Response-Encoding-Context':'NONE'}}});exports.default=_module2.default;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';__webpack_require__(136);__webpack_require__(138);__webpack_require__(198);__webpack_require__(199);__webpack_require__(139);__webpack_require__(200);

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _possibleConstructorReturn2=__webpack_require__(14);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(13);var _inherits3=_interopRequireDefault(_inherits2);var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);__webpack_require__(139);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var LogMessagesProvider=function(){function LogMessagesProvider(){(0,_classCallCheck3.default)(this,LogMessagesProvider);}LogMessagesProvider.prototype.$get=function $get(AvApiResource){var AvLogMessagesResource=function(_AvApiResource){(0,_inherits3.default)(AvLogMessagesResource,_AvApiResource);function AvLogMessagesResource(){(0,_classCallCheck3.default)(this,AvLogMessagesResource);return(0,_possibleConstructorReturn3.default)(this,_AvApiResource.call(this,{version:'/v1',name:'/log-messages'}));}AvLogMessagesResource.prototype.buildRequest=function buildRequest(level,entries){var requestPayload={};if(entries.level){delete entries.level;}requestPayload.level=level;requestPayload.entries=entries;return requestPayload;};AvLogMessagesResource.prototype.debug=function debug(entries){return this.create(this.buildRequest('debug',entries));};AvLogMessagesResource.prototype.info=function info(entries){return this.create(this.buildRequest('info',entries));};AvLogMessagesResource.prototype.warn=function warn(entries){return this.create(this.buildRequest('warn',entries));};AvLogMessagesResource.prototype.error=function error(entries){return this.create(this.buildRequest('error',entries));};return AvLogMessagesResource;}(AvApiResource);return new AvLogMessagesResource();};return LogMessagesProvider;}();_module2.default.provider('avLogMessagesResource',LogMessagesProvider);exports.default=_module2.default;

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _extends2=__webpack_require__(28);var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);__webpack_require__(136);__webpack_require__(141);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var ApiResourceProvider=function(){function ApiResourceProvider(AV_API){(0,_classCallCheck3.default)(this,ApiResourceProvider);this.defaultOptions=(0,_extends3.default)({},AV_API.OPTIONS);}ApiResourceProvider.prototype.setOptions=function setOptions(options){(0,_extends3.default)(this.defaultOptions,options);};ApiResourceProvider.prototype.getOptions=function getOptions(){return _angular2.default.copy(this.defaultOptions);};ApiResourceProvider.prototype.$get=function $get($http,$q,avPollingService){var that=this;var AvApiResource=function(){function AvApiResource(_options){(0,_classCallCheck3.default)(this,AvApiResource);this.options=_options;if(!this.options){throw new Error('[options] cannot be null or undefined');}if(this.options.name){this.options.name=this.options.name.charAt(0)==='/'?this.options.name:'/'+this.options.name;}if(!this.options.url&&!this.options.name){throw new Error('AvApiResource options [url] or [name] cannot be null');}// get the default options and merge into this instance
	this.options=_angular2.default.extend({},that.defaultOptions,this.options);}AvApiResource.prototype.config=function config(_config2){return _angular2.default.extend({},this.options,_config2||{});};AvApiResource.prototype.cacheBust=function cacheBust(config){config.cacheBust=null;config.params=config.params||{};config.params.cacheBust=new Date().getTime();return config;};AvApiResource.prototype.getUrl=function getUrl(id){if(this.options.api){return this.getApiUrl(id);}return this.options.url;};AvApiResource.prototype.createResponse=function createResponse(data,status,headers,config){return{data:data,status:status,headers:headers,config:config};};AvApiResource.prototype.request=function request(config,afterCallback){var self=this;var defer=$q.defer();$http(config).success(function(data,status,headers,_config){var _response={data:data,status:status,headers:headers,config:_config};// handle the async response if applicable
	var _promise=$q.when(avPollingService.response(_response));// notify the promise listener of the original response
	defer.notify(_response);// handle the polling service promise
	_promise.then(function(_successResponse){var successResponse=_successResponse;if(afterCallback){successResponse=afterCallback.call(self,successResponse,config.data);}defer.resolve(successResponse);},function(errorResponse){return defer.reject(errorResponse);},function(notifyResponse){return defer.notify(notifyResponse);});}).error(function(data,status,headers,_config){var response=self.createResponse(data,status,headers,_config);defer.reject(response);});var promise=defer.promise;// recreate the success callback ala $http
	promise.success=function(fn){promise.then(function(response){fn(response.data,response.status,response.headers,response.config);});return promise;};// recreate the error callback ala $http
	promise.error=function(fn){promise.then(null,function(response){fn(response.data,response.status,response.headers,config);});return promise;};promise.always=promise.finally;return promise;};AvApiResource.prototype.normalize=function normalize(url){return url.replace(/[\/]+/g,'/').replace(/\/$/,'');};AvApiResource.prototype.join=function join(){var joined=[].slice.call(arguments,0).join('/');return this.normalize(joined);};AvApiResource.prototype.getApiUrl=function getApiUrl(_id){var id=_id?'/'+_id:'';var uri=void 0;var _options2=this.options;var path=_options2.path;var version=_options2.version;var name=_options2.name;var url=_options2.url;if(name){uri=this.join('/',path,version,name,id);}else{uri=this.join(url,id);}return uri;};AvApiResource.prototype.create=function create(_data,_config){var data=_data;var config=_config;if(!data){throw new Error('called method without [data]');}if(this.beforeCreate){data=this.beforeCreate(data);}config=this.config(config);config.method='POST';config.url=this.getUrl();config.data=data;return this.request(config,this.afterCreate);};AvApiResource.prototype.get=function get(id,_config){var config=_config;if(!id){throw new Error('called method without [id]');}config=this.config(config);if(config.cacheBust){config=this.cacheBust(config);}config.method='GET';config.url=this.getUrl(id);return this.request(config,this.afterGet);};AvApiResource.prototype.query=function query(_config){var config=_config;config=this.config(config);if(config.cacheBust){config=this.cacheBust(config);}config.method='GET';config.url=this.getUrl();return this.request(config,this.afterQuery);};AvApiResource.prototype.update=function update(id,_data,_config){var config=_config;var data=_data;var url=void 0;if(_angular2.default.isString(id)||_angular2.default.isNumber(id)){url=this.getUrl(id);}else{url=this.getUrl();// At this point the function signature becomes:
	//
	// update(data, config) {} a.k.a function(id, data)
	//
	config=data;// config is really the 2nd param
	data=id;// data is really the first param
	}if(this.beforeUpdate){data=this.beforeUpdate(data);}config=this.config(config);config.method='PUT';config.url=url;config.data=data;return this.request(config,this.afterUpdate);};AvApiResource.prototype.remove=function remove(id,_config){var config=_config;var url=void 0;var data=void 0;if(_angular2.default.isString(id)||_angular2.default.isNumber(id)){url=this.getUrl(id);}else{// At this point the function signature becomes:
	//
	// remove(data, config)
	//
	url=this.getUrl();data=id;}config=this.config(config);config.method='DELETE';config.url=url;config.data=data;return this.request(config,this.afterRemove);};AvApiResource.create=function create(){return new AvApiResource();};AvApiResource.prototype.beforeCreate=function beforeCreate(data){return data;};AvApiResource.prototype.afterCreate=function afterCreate(response){return response;};AvApiResource.prototype.afterQuery=function afterQuery(response){return response;};AvApiResource.prototype.afterGet=function afterGet(response){return response;};AvApiResource.prototype.beforeUpdate=function beforeUpdate(data){return data;};AvApiResource.prototype.afterUpdate=function afterUpdate(response){return response;};AvApiResource.prototype.afterRemove=function afterRemove(response){return response;};return AvApiResource;}();return AvApiResource;};return ApiResourceProvider;}();_module2.default.provider('AvApiResource',ApiResourceProvider);exports.default=_module2.default;

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// Inspiration: https://github.com/seeden/angular-es6
	function storeInjections(){var injected=arguments.length<=0||arguments[0]===undefined?[]:arguments[0];var instance=arguments[1];var args=arguments[2];var name=arguments.length<=3||arguments[3]===undefined?'av':arguments[3];var instanceInject=instance[name]=instance[name]||{};injected.forEach(function(injectName,index){instanceInject[injectName]=args[index];});}var Base=function Base(){(0,_classCallCheck3.default)(this,Base);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}storeInjections(this.constructor.$inject,this,args);};Base.$inject=[];exports.default=Base;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _extends2=__webpack_require__(28);var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(14);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(13);var _inherits3=_interopRequireDefault(_inherits2);var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _constants=__webpack_require__(205);var _constants2=_interopRequireDefault(_constants);var _utils=__webpack_require__(55);var _base=__webpack_require__(140);var _base2=_interopRequireDefault(_base);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var AvPollingService=function(_Base){(0,_inherits3.default)(AvPollingService,_Base);function AvPollingService(){(0,_classCallCheck3.default)(this,AvPollingService);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var _this=(0,_possibleConstructorReturn3.default)(this,_Base.call.apply(_Base,[this].concat(args)));_this.pendingRequests=[];// stores all request for polling
	return _this;}AvPollingService.prototype.response=function response(_response){if(this.isAsyncResponse(_response)){return this.onAsyncReponse(_response);}return _response||this.av.$q.when(_response);};AvPollingService.prototype.setDefaults=function setDefaults(config){var defaultOptions={pollingInterval:this.av.AV_POLLING.INTERVAL,pollingDecay:this.av.AV_POLLING.DECAY,pollingMaxInterval:this.av.AV_POLLING.MAX_ELAPSED_TIME,pollingRetryCount:0,pollingStartTime:new Date().getTime()};return(0,_extends3.default)(defaultOptions,config);};AvPollingService.prototype.responseError=function responseError(response){// Return the promise rejection
	return this.av.$q.reject(response);};/**
	   * API layer return a link with a polling url for
	   * async responses.
	   *
	   * @param  {Object}  response ajax response
	   * @return {Boolean} true if response has status of 202 (accepted) and location param in header with uri+session link
	   */AvPollingService.prototype.isAsyncResponse=function isAsyncResponse(response){return response&&response.config&&response.config.api&&response.status&&response.status===202&&_angular2.default.isFunction(response.headers)&&!(0,_utils.isBlank)(response.headers(this.av.AV_API.HEADERS.SERVER.LOCATION));};AvPollingService.prototype.onAsyncReponse=function onAsyncReponse(response){response.config=this.setDefaults(response.config);var deferred=this.av.$q.defer();this.queueRequest(deferred,response);// [rm3]: Can't call notify before you return promise object?
	this.av.$timeout(function(){// Notify deferred listeners with the original server response
	deferred.notify(response);},0,false);return deferred.promise;};AvPollingService.prototype.getUrl=function getUrl(url){var result=url.match(this.av.AV_POLLING.REGEX_URL);if(result&&result[1]){return'/api'+result[1];}return url;};AvPollingService.prototype.queueRequest=function queueRequest(deferred,response){var self=this;// server replies with location header so set the url into config
	var _url=(0,_utils.getRelativeUrl)(response.headers(this.av.AV_API.HEADERS.SERVER.LOCATION));var _config=response.config;// headers – {Object} – Map of strings or functions which return strings representing HTTP headers
	//  to send to the server. If the return value of a function is null, the header
	//  will not be sent. Functions accept a config object as an argument.
	var config={method:'GET',api:true,headers:_config.headers,pollingInterval:_config.pollingInterval,pollingMaxRetry:_config.pollingMaxRetry,pollingMaxInterval:_config.pollingMaxInterval,pollingStartTime:_config.pollingStartTime,_pollingDecay:_config._pollingDecay,pollingRetryCount:_config.pollingRetryCount,pollingDecay:_config.pollingDecay,url:_url,/* set the url from the server response */cache:false};var request={id:(0,_utils.uuid)('request-'),config:config,deferred:deferred};var timeout=this.getPollingTimeout(config);// each async request should run on its own timer
	var timer=this.av.$timeout(function(){self.retryRequest(request.id);},timeout,false);request.timer=timer;// add the async request to the queue
	this.pushRequest(request);};AvPollingService.prototype.popRequest=function popRequest(id){var index=null;var request=null;for(var i=0;i<this.pendingRequests.length;i++){if(this.pendingRequests[i].id===id){index=i;break;}}request=this.pendingRequests[index];this.pendingRequests.splice(index,1);return request;};AvPollingService.prototype.pushRequest=function pushRequest(request){this.pendingRequests.push(request);};AvPollingService.prototype.getPollingTimeout=function getPollingTimeout(config){return config.pollingDecay*config.pollingInterval;};AvPollingService.prototype.isPollingMaxTimeout=function isPollingMaxTimeout(config){var now=new Date().getTime();var elaspedTime=now-config.pollingStartTime;var isElapsed=elaspedTime>config.pollingMaxInterval;return isElapsed;};AvPollingService.prototype.isMaxRetried=function isMaxRetried(config){return config.pollingRetryCount>=this.av.AV_POLLING.MAX_RETRY;};AvPollingService.prototype.isPollable=function isPollable(config){var _isTimeout=this.isPollingMaxTimeout(config);var _isMax=this.isMaxRetried(config);return _isTimeout||_isMax?false:true;};AvPollingService.prototype.retryRequest=function retryRequest(id){var self=this;var request=this.popRequest(id);this.av.$timeout.cancel(request.timer);var config=request.config;var deferred=request.deferred;if(!this.isPollable(config)){this.av.$log.info('Rejecting pollable response due to timeout');return deferred.reject(request);}// increment counters and polling timeouts
	this.increment(config);function successCallback(response){if(self.isAsyncResponse(response)){deferred.notify(response);self.queueRequest(request.deferred,response);}else{deferred.resolve(response);}}function errorCallback(response){deferred.reject(response);}// Silly circular dependency trick
	var $http=this.av.$injector.get('$http');$http(config).then(successCallback,errorCallback);};AvPollingService.prototype.increment=function increment(config){this.incrementCounter(config);this.incrementDecay(config);};AvPollingService.prototype.incrementDecay=function incrementDecay(config){if(!config._pollingDecay){// store the original decay param
	config._pollingDecay=config.pollingDecay;}config.pollingDecay*=config._pollingDecay;};AvPollingService.prototype.incrementCounter=function incrementCounter(config){config.pollingRetryCount++;};AvPollingService.prototype.clearRequests=function clearRequests(){var self=this;_angular2.default.forEach(this.pendingRequests,function(request){self.av.$timeout.cancel(request.timer);});this.pendingRequests=[];};return AvPollingService;}(_base2.default);AvPollingService.$inject=['$rootScope','$q','$injector','$timeout','$log','AV_POLLING','AV_API'];_constants2.default.service('avPollingService',AvPollingService);exports.default=_constants2.default;

/***/ },
/* 142 */
/***/ function(module, exports) {

	'use strict';exports.__esModule=true;var regions=[{'name':'Alabama','code':'AL'},{'name':'Alaska','code':'AK'},{'name':'Arizona','code':'AZ'},{'name':'Arkansas','code':'AR'},{'name':'California','code':'CA'},{'name':'Colorado','code':'CO'},{'name':'Connecticut','code':'CT'},{'name':'Delaware','code':'DE'},{'name':'District Of Columbia','code':'DC'},{'name':'Florida','code':'FL'},{'name':'Georgia','code':'GA'},{'name':'Hawaii','code':'HI'},{'name':'Idaho','code':'ID'},{'name':'Illinois','code':'IL'},{'name':'Indiana','code':'IN'},{'name':'Iowa','code':'IA'},{'name':'Kansas','code':'KS'},{'name':'Kentucky','code':'KY'},{'name':'Louisiana','code':'LA'},{'name':'Maine','code':'ME'},{'name':'Maryland','code':'MD'},{'name':'Massachusetts','code':'MA'},{'name':'Michigan','code':'MI'},{'name':'Minnesota','code':'MN'},{'name':'Mississippi','code':'MS'},{'name':'Missouri','code':'MO'},{'name':'Montana','code':'MT'},{'name':'Nebraska','code':'NE'},{'name':'Nevada','code':'NV'},{'name':'New Hampshire','code':'NH'},{'name':'New Jersey','code':'NJ'},{'name':'New Mexico','code':'NM'},{'name':'New York','code':'NY'},{'name':'North Carolina','code':'NC'},{'name':'North Dakota','code':'ND'},{'name':'Ohio','code':'OH'},{'name':'Oklahoma','code':'OK'},{'name':'Oregon','code':'OR'},{'name':'Pennsylvania','code':'PA'},{'name':'Rhode Island','code':'RI'},{'name':'South Carolina','code':'SC'},{'name':'South Dakota','code':'SD'},{'name':'Tennessee','code':'TN'},{'name':'Texas','code':'TX'},{'name':'Utah','code':'UT'},{'name':'Vermont','code':'VT'},{'name':'Virginia','code':'VA'},{'name':'Washington','code':'WA'},{'name':'West Virginia','code':'WV'},{'name':'Wisconsin','code':'WI'},{'name':'Wyoming','code':'WY'}];exports.default=regions;

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);var _rules=__webpack_require__(143);var _rules2=_interopRequireDefault(_rules);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.factory('avRules',function(){return _rules2.default;});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _keys=__webpack_require__(43);var _keys2=_interopRequireDefault(_keys);var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(14);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(13);var _inherits3=_interopRequireDefault(_inherits2);var _lodash=__webpack_require__(190);var _=_interopRequireWildcard(_lodash);var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _base=__webpack_require__(75);var _base2=_interopRequireDefault(_base);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);__webpack_require__(145);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var AvDropdownController=function(_Base){(0,_inherits3.default)(AvDropdownController,_Base);function AvDropdownController(){(0,_classCallCheck3.default)(this,AvDropdownController);for(var _len=arguments.length,args=Array(_len),_key2=0;_key2<_len;_key2++){args[_key2]=arguments[_key2];}var _this=(0,_possibleConstructorReturn3.default)(this,_Base.call.apply(_Base,[this].concat(args)));_this.options={};_this.match=null;_this.ngModel=null;return _this;}AvDropdownController.prototype.init=function init(){var _this2=this;this.options=_angular2.default.extend({},this.av.avDropdownConfig.DEFAULTS);(0,_keys2.default)(this.av.$attrs).forEach(function(key){var value=_this2.av.$attrs[key];var _key=key.replace('data-','');if(_this2.av.avDropdownConfig.SELECT2_OPTIONS.includes(_key)){_this2.options[_key]=_this2.av.$scope.$eval(value);}});if(this.isRemoteMultiple()){this.options.multiple=_angular2.default.isDefined(this.av.$attrs.multiple);}this.multiple=_angular2.default.isDefined(this.av.$attrs.multiple);if(this.options.query){this.queryFn=this.options.query;// Function used to query results for the search term.
	this.options.query=this.query;// Function used to get the id from the choice object or a string representing the key under which the id is stored.
	this.options.id=this.getId;}};AvDropdownController.prototype.isRemoteMultiple=function isRemoteMultiple(){return _angular2.default.isDefined(this.av.$attrs.multiple)&&this.av.$element.get(0).tagName.toLowerCase()==='input';};AvDropdownController.prototype.setRemoteViewValue=function setRemoteViewValue(e){var values=this.ngModel.$viewValue;if(!_angular2.default.isArray(values)||!_angular2.default.isObject(values)){values=[];}if(e.added){// Adding to collection
	values.push(e.added);}else{// Removing from collection
	var index=values.findIndex(function(value){return _.matches(e.removed)(value);});values.splice(index,1);}this.ngModel.$setViewValue(values);};AvDropdownController.prototype.setViewValue=function setViewValue(e){this.ngModel.$setViewValue(e.added);};AvDropdownController.prototype.setNgModel=function setNgModel(ngModel){this.ngModel=ngModel;};AvDropdownController.prototype.getSelected=function getSelected(model){var _this3=this;if(this.options.query){return 0;}if(!this.collection){// If we're not using ng-options, the model value is just the raw value of the option, rather than an index, so return it as is.
	return model;}var items=this.collection(this.av.$scope);var index=items.findIndex(function(item){if(!self.valueFn){return _angular2.default.equals(item,model);}var locals={};locals[self.valueName]=item;var value=self.valueFn(_this3.av.$scope,locals);return _angular2.default.equals(value,model);});return index;};// Result:
	//
	// {
	//   "code": "252Y00000X",
	//   "value": "AGENCIES,EARLY INTERVENTION PROVIDER AGENCY,NOT APPLICABLE|Agency",
	//   "id": "252Y00000X"
	// }
	AvDropdownController.prototype.getId=function getId(result){return result.id;};// Wrapper around the query function for Select2.  When the promise resolves
	// the callback
	AvDropdownController.prototype.query=function query(options){this.queryFn(options).then(function(response){// Callback function that should be called with the result object. The result object:
	//
	// result.results (object) - Array of result objects. The default renderers
	//    expect objects with id and text keys. The id property is required,
	//    even if custom renderers are used. The object may also contain a children
	//    key if hierarchical data is displayed. The object may also contain a disabled
	//    boolean property indicating whether this result can be selected.
	//
	// result.more (boolean) - true if more results are available for the current
	//    search term.
	//
	// results.context (object) - A user-defined object that should be made available
	//    as the context parameter to the query function on subsequent queries to load
	//    more result pages for the same search term. See the description of
	//    options.context parameter.
	options.callback({more:response.more,results:response.results});});};AvDropdownController.prototype.setValue=function setValue(){var _this4=this;var viewValue=this.ngModel.$viewValue;var selected=null;if(viewValue!==null&&viewValue!==undefined){selected=this.getSelected(viewValue);}// var apply = scope.$evalAsync || $timeout;
	this.av.$timeout(function(){_this4.av.$element.select2('val',selected===null||selected==='undefined'?'':selected);// null === '' for Select2
	});};AvDropdownController.prototype.getMultiSelected=function getMultiSelected(viewValue){var _this5=this;var indices=[];if(this.av.$element.get(0).tagName.toLowerCase()!=='input'){(function(){var options=_this5.collection(_this5.av.$scope);viewValue.forEach(function(savedObject){var index=options.findIndex(function(value){var temp=_angular2.default.copy(savedObject);// remove hashkeys for comparison
	return _.matches(temp)(value);});indices.push(index);});})();}else{var inputViewValues=this.ngModel.$modelValue;inputViewValues.forEach(function(savedObject){if(_angular2.default.isUndefined(savedObject.id)){if(savedObject.id||savedObject[self.options.correlationId]){savedObject.id=savedObject[self.options.correlationId];}else{throw new Error('dropdown list must have a id or a alternative value to use as a id');}}});}if(indices.length>0){viewValue=indices;}return viewValue;};AvDropdownController.prototype.setValues=function setValues(){var _this6=this;var viewValue=self.ngModel.$viewValue;if(!_angular2.default.isArray(viewValue)){viewValue=[];}if(!_.isEmpty(viewValue)&&_angular2.default.isObject(viewValue[0])){viewValue=this.getMultiSelected(viewValue);}this.av.$timeout(function(){return _this6.av.$element.select2('val',viewValue);});};AvDropdownController.prototype.ngOptions=function ngOptions(){this.match=this.av.$attrs.ngOptions.match(this.av.AV_UI.NG_OPTIONS);if(!this.match){throw new Error('Invalid ngOptions for avDropdown');}// AV_UI.NG_OPTIONS regex will parse into arrays like below:
	//
	// 0: "state.name for state in states"
	// 1: "state.name"
	// 2: undefined
	// 3: undefined
	// 4: "state"
	// 5: undefined
	// 6: undefined
	// 7: "states"
	// 8: undefined
	//
	// 0: "state.id as state.name for state in states"
	// 1: "state.id"
	// 2: "state.name"
	// 3: undefined
	// 4: "state"
	// 5: undefined
	// 6: undefined
	// 7: "states"
	// 8: undefined
	//
	// 0: "state.name for state in states track by state.id"
	// 1: "state.name"
	// 2: undefined
	// 3: undefined
	// 4: "state"
	// 5: undefined
	// 6: undefined
	// 7: "states"
	// 8: "state.id"
	//
	// 0: "person.fullName as (person.lastName + ', ' + person.firstName) for person in feeScheduleModel.persons"
	// 1: "person.fullName"
	// 2: "(person.lastName + ', ' + person.firstName)"
	// 3: undefined
	// 4: "person"
	// 5: undefined
	// 6: undefined
	// 7: "feeScheduleModel.persons"
	// 8: undefined
	//
	this.displayFn=this.av.$parse(this.match[2]||this.match[1]);// this is the function to retrieve the text to show as
	this.collection=this.av.$parse(this.match[7]);this.valueName=this.match[4]||this.match[6];this.valueFn=this.av.$parse(this.match[2]?this.match[1]:this.valueName);this.keyName=this.match[5];this.av.$scope.$watchCollection(this.collection,function(newVal,oldVal){if(_angular2.default.equals(newVal,oldVal)){return;}self.setValue();},true);};return AvDropdownController;}(_base2.default);AvDropdownController.$inject=['$element','$attrs','AV_UI','avDropdownConfig','$scope','$timeout','$parse'];_module2.default.controller('AvDropdownController',AvDropdownController);

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var AvConfig=function(){function AvConfig(){(0,_classCallCheck3.default)(this,AvConfig);this.SELECT2_OPTIONS=['width','minimumInputLength','maximumInputLength','minimumResultsForSearch','maximumSelectionSize','placeholderOption','separator','allowClear','multiple','closeOnSelect','openOnEnter','id','matcher','sortResults','formatSelection','formatResult','formatResultCssClass','formatNoMatches','formatSearching','formatAjaxError','formatInputTooShort','formatInputTooLong','formatSelectionTooBig','formatLoadMore','createSearchChoice','createSearchChoicePosition','initSelection','tokenizer','tokenSeparators','query','ajax','data','tags','containerCss','containerCssClass','dropdownCss','dropdownCssClass','dropdownAutoWidth','adaptContainerCssClass','adaptDropdownCssClass','escapeMarkup','selectOnBlur','loadMorePadding','nextSearchTerm','correlationId','eventListeners'];this.DEFAULTS={closeOnResize:true,dropdownAutoWidth:true,minimumResultsForSearch:5};}AvConfig.prototype.set=function set(options){_angular2.default.extend(this.DEFAULTS,options);};AvConfig.prototype.$get=function $get(){return _angular2.default.copy({SELECT2_OPTIONS:this.SELECT2_OPTIONS,DEFAULTS:this.DEFAULTS});};return AvConfig;}();_module2.default.provider('avDropdownConfig',AvConfig);

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.constant('AV_MODAL',{OPTIONS:{scope:null,templateUrl:null,template:null,id:null,container:null,// Bootstrap defaults
	keyboard:true,backdrop:true,show:false,remote:false},EVENTS:{SHOW:'show.av.modal',SHOWN:'shown.av.modal',HIDE:'hide.av.modal',HIDDEN:'hidden.av.modal'},NAMESPACE:{MODAL:'bs.modal'},BS_EVENTS:{SHOW:'show.bs.modal',SHOWN:'shown.bs.modal',HIDE:'hide.bs.modal',HIDDEN:'hidden.bs.modal'}});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);var _modal=__webpack_require__(476);var _modal2=_interopRequireDefault(_modal);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.directive('avModal',function(){return{restrict:'A',replace:true,transclude:true,scope:{size:'@'},templateUrl:_modal2.default};});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.factory('avTemplateCache',function($q,$templateCache,$http){return{get:function get(options){var valid=!options.template||!options.templateUrl;if(!valid){throw new Error('Either options.template or options.templateUrl must be defined for avTemplateCache');}return options.template?$q.when(options.template):$http.get(options.templateUrl,{cache:$templateCache}).then(function(result){return result.data;});}};});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _jquery=__webpack_require__(68);var _jquery2=_interopRequireDefault(_jquery);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);__webpack_require__(76);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.factory('avValBootstrapAdapter',function(AV_BOOTSTRAP_ADAPTER,$timeout,$log){return{element:function element(context){var ngModel=context.ngModel;var element=context.element;if(ngModel.$valid){element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).removeClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);}else{element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).addClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);}},reset:function reset(element){element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).removeClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);},message:function message(context){var element=context.element;var selector='.'+AV_BOOTSTRAP_ADAPTER.CLASSES.HELP;var $el=(0,_jquery2.default)(element);var target=$el.attr(AV_BOOTSTRAP_ADAPTER.SELECTORS.CONTAINER);target=target||$el.attr(AV_BOOTSTRAP_ADAPTER.SELECTORS.DATA_CONTAINER);// default to siblings
	target=target?(0,_jquery2.default)('#'+target):$el.siblings(selector);if(target.length===0){$log.warn('avValBootstrapAdapter could not find validation container for '+element);return;}var el=target[0];$el=_angular2.default.element(el);var avValModel=$el.data(AV_BOOTSTRAP_ADAPTER.CONTROLLER);// get the av val message controller
	if(avValModel){avValModel.message(context);}},scroll:function scroll(form){// Bootstrap fixed navbars causes bad scroll-to offsets so find them all
	var navbarSelector='.'+AV_BOOTSTRAP_ADAPTER.CLASSES.NAVBAR;// Add up all the heights to find the true offset
	var offset=0;(0,_jquery2.default)(navbarSelector).each(function(){offset+=(0,_jquery2.default)(this).outerHeight();});var selector='.'+AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR+':first';var $target=(0,_jquery2.default)(form).find(selector);$timeout(function(){// scroll to offset top of first error minus the offset of the navbars
	(0,_jquery2.default)('body, html').animate({scrollTop:$target.offset().top-offset},'fast');},0,false);}};});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);__webpack_require__(76);__webpack_require__(149);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.provider('avValAdapter',function(){var that=this;this.setAdapter=function(adapter){this.adapter=adapter;};this.$get=function(AV_VAL_ADAPTER,$injector){var Adapter=function(){function Adapter(){(0,_classCallCheck3.default)(this,Adapter);var adapterName=that.adapter||AV_VAL_ADAPTER.DEFAULT;this.adapter=$injector.get(adapterName);}Adapter.prototype.element=function element(context){this.adapter.element(context);};Adapter.prototype.reset=function reset(element){this.adapter.reset(element);};Adapter.prototype.message=function message(context){this.adapter.message(context);};Adapter.prototype.scroll=function scroll(form){this.adapter.scroll(form);};return Adapter;}();return new Adapter();};});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _keys=__webpack_require__(43);var _keys2=_interopRequireDefault(_keys);var _extends2=__webpack_require__(28);var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(14);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(13);var _inherits3=_interopRequireDefault(_inherits2);var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);var _utils=__webpack_require__(55);__webpack_require__(93);var _base=__webpack_require__(75);var _base2=_interopRequireDefault(_base);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var AvValFieldController=function(_Base){(0,_inherits3.default)(AvValFieldController,_Base);function AvValFieldController(){(0,_classCallCheck3.default)(this,AvValFieldController);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var _this=(0,_possibleConstructorReturn3.default)(this,_Base.call.apply(_Base,[this].concat(args)));_this.ngModel=null;_this.rule=null;_this.avValForm=null;_this.avValInvalid=false;_this.noEvent={};_this.placeholder=_this.av.$element[0].placeholder;return _this;}AvValFieldController.prototype.init=function init(options){(0,_extends3.default)(this,options);this.createId();this.setupValidators();};AvValFieldController.prototype.createId=function createId(){this.ngModel.avId=(0,_utils.uuid)('avVal');};AvValFieldController.prototype.updateElement=function updateElement(){this.av.avValAdapter.element({element:this.av.$element,ngModel:this.ngModel});this.av.avValAdapter.message({element:this.av.$element,ngModel:this.ngModel});};AvValFieldController.prototype.setupValidators=function setupValidators(){var self=this;var schemaName=this.avValForm.rulesSchema;var ruleConfig=this.av.avVal.getRule(schemaName);if(!ruleConfig){this.av.$log.error('Failed to get rules schema named ['+schemaName+'].  Forms must be tagged with a rules schema name for validation to work.');return;}var constraints=ruleConfig[this.ruleName];if(!constraints){this.av.$log.info('Rule named ['+this.ruleName+'] could not be found in the current schema.');constraints={};}(0,_keys2.default)(constraints).forEach(function(constraintName){var constraint=constraints[constraintName];if(!constraint){// When extending rule sets, previous rules can be overridden with null so
	// delete the previous $validator
	delete self.ngModel.$validators[constraintName];return;}var validator=self.av.avVal.getService(constraintName);if(_angular2.default.isUndefined(validator)){self.vm.$log.warn('No validator defined for '+constraintName);return;}self.ngModel.$validators[constraintName]=function contraintValidator(modelValue,viewValue){var value=modelValue||viewValue;var valid=validator.validate({value:value,constraint:constraint,element:self.av.$element});return valid;};// Attach the constrain to the validator so that the message is available
	// to the validation container that is going to paint the message on screen.
	self.ngModel.$validators[constraintName].constraint=constraint;});};AvValFieldController.prototype.onRunValidators=function onRunValidators(){if(this.ngModel.$dirty){this.updateElement();}};return AvValFieldController;}(_base2.default);AvValFieldController.$inject=['$element','avValAdapter','avVal','$log','$timeout','$scope'];_module2.default.controller('AvValFieldController',AvValFieldController);_module2.default.directive('avValField',function($log,$timeout,avVal,avValAdapter,AV_VAL){return{restrict:'A',controller:'AvValFieldController',require:['^avValForm','ngModel','avValField'],link:function link(scope,element,attrs,controllers){var ruleName=attrs.avValField;var avValForm=controllers[0];var ngModel=controllers[1];var avValField=controllers[2];// Wrap $$runValidators with our own function so we can intercept when the validation
	// pipeline finishes.
	var $$runValidators=ngModel.$$runValidators;var runValidators=function runValidators(modelValue,viewValue,doneCallback){$$runValidators(modelValue,viewValue,function(allValid){doneCallback(allValid);avValField.onRunValidators();});};ngModel.$$runValidators=runValidators;if(!ngModel&&!ruleName){$log.error('avValField requires ngModel and a validation rule name to run.');return;}avValField.init({ngModel:ngModel,ruleName:ruleName,avValForm:avValForm});scope.$on(AV_VAL.EVENTS.REVALIDATE,function(){ngModel.$validate();});scope.$on(AV_VAL.EVENTS.SUBMITTED,function(){ngModel.$dirty=true;ngModel.$validate();});// - Removes all errors on page,
	// - does not reset view or model values.  This should to be handled by the application.
	scope.$on(AV_VAL.EVENTS.RESET,function(){// avValField.reset();
	});}};});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(254);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(253);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 153 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(263);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(71)
	  , document = __webpack_require__(38).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(56) && !__webpack_require__(58)(function(){
	  return Object.defineProperty(__webpack_require__(155)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(153);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(98)
	  , $export        = __webpack_require__(57)
	  , redefine       = __webpack_require__(162)
	  , hide           = __webpack_require__(59)
	  , has            = __webpack_require__(44)
	  , Iterators      = __webpack_require__(97)
	  , $iterCreate    = __webpack_require__(269)
	  , setToStringTag = __webpack_require__(101)
	  , getPrototypeOf = __webpack_require__(276)
	  , ITERATOR       = __webpack_require__(62)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(77)
	  , createDesc     = __webpack_require__(78)
	  , toIObject      = __webpack_require__(45)
	  , toPrimitive    = __webpack_require__(106)
	  , has            = __webpack_require__(44)
	  , IE8_DOM_DEFINE = __webpack_require__(156)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(56) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(161)
	  , hiddenKeys = __webpack_require__(96).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(44)
	  , toIObject    = __webpack_require__(45)
	  , arrayIndexOf = __webpack_require__(265)(false)
	  , IE_PROTO     = __webpack_require__(102)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(59);

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(25);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(16)
	  , toIndex  = __webpack_require__(53)
	  , toLength = __webpack_require__(15);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(65);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(19)
	  , toObject  = __webpack_require__(16)
	  , IObject   = __webpack_require__(72)
	  , toLength  = __webpack_require__(15);
	
	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(19)
	  , isObject   = __webpack_require__(9)
	  , invoke     = __webpack_require__(84)
	  , arraySlice = [].slice
	  , factories  = {};
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(12).f
	  , create      = __webpack_require__(48)
	  , hide        = __webpack_require__(18)
	  , redefineAll = __webpack_require__(51)
	  , ctx         = __webpack_require__(34)
	  , anInstance  = __webpack_require__(39)
	  , defined     = __webpack_require__(26)
	  , forOf       = __webpack_require__(65)
	  , $iterDefine = __webpack_require__(120)
	  , step        = __webpack_require__(173)
	  , setSpecies  = __webpack_require__(52)
	  , DESCRIPTORS = __webpack_require__(11)
	  , fastKey     = __webpack_require__(40).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(64)
	  , from    = __webpack_require__(165);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(51)
	  , getWeak           = __webpack_require__(40).getWeak
	  , anObject          = __webpack_require__(3)
	  , isObject          = __webpack_require__(9)
	  , anInstance        = __webpack_require__(39)
	  , forOf             = __webpack_require__(65)
	  , createArrayMethod = __webpack_require__(29)
	  , $has              = __webpack_require__(17)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(11) && !__webpack_require__(7)(function(){
	  return Object.defineProperty(__webpack_require__(111)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(3);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 173 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 174 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(50)
	  , gOPS     = __webpack_require__(88)
	  , pIE      = __webpack_require__(73)
	  , toObject = __webpack_require__(16)
	  , IObject  = __webpack_require__(72)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(7)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(12)
	  , anObject = __webpack_require__(3)
	  , getKeys  = __webpack_require__(50);
	
	module.exports = __webpack_require__(11) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(22)
	  , gOPN      = __webpack_require__(49).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(17)
	  , toIObject    = __webpack_require__(22)
	  , arrayIndexOf = __webpack_require__(80)(false)
	  , IE_PROTO     = __webpack_require__(124)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(50)
	  , toIObject = __webpack_require__(22)
	  , isEnum    = __webpack_require__(73).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(49)
	  , gOPS     = __webpack_require__(88)
	  , anObject = __webpack_require__(3)
	  , Reflect  = __webpack_require__(5).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(5).parseFloat
	  , $trim       = __webpack_require__(67).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(129) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(5).parseInt
	  , $trim     = __webpack_require__(67).trim
	  , ws        = __webpack_require__(129)
	  , hex       = /^[\-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 183 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(15)
	  , repeat   = __webpack_require__(128)
	  , defined  = __webpack_require__(26);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(10);

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(168);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(81)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(11) && /./g.flags != 'g')__webpack_require__(12).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(83)
	});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(168);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(81)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(29)(0)
	  , redefine     = __webpack_require__(20)
	  , meta         = __webpack_require__(40)
	  , assign       = __webpack_require__(175)
	  , weak         = __webpack_require__(170)
	  , isObject     = __webpack_require__(9)
	  , has          = __webpack_require__(17)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(81)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 190 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_190__;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _module=_angular2.default.module('availity.config',['ng','availity']);_module.run(function(avAnalytics){return avAnalytics.init();});

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(14);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(13);var _inherits3=_interopRequireDefault(_inherits2);var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);var _base=__webpack_require__(140);var _base2=_interopRequireDefault(_base);__webpack_require__(135);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var AvAnalyticsProvider=function(_Base){(0,_inherits3.default)(AvAnalyticsProvider,_Base);function AvAnalyticsProvider(){(0,_classCallCheck3.default)(this,AvAnalyticsProvider);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var _this=(0,_possibleConstructorReturn3.default)(this,_Base.call.apply(_Base,[this].concat(args)));_this.plugins=[];_this.virtualPageTracking=_this.av.AV_ANALYTICS.VIRTUAL_PAGE_TRACKING;_this.appId;_this.plugins;return _this;}AvAnalyticsProvider.prototype.registerPlugins=function registerPlugins(_plugins){if(_angular2.default.isString(_plugins)){this.plugins=[_plugins];}else if(Array.isArray(_plugins)){this.plugins=_plugins;}else{throw new Error('AvAnalytics.registerPlugins() expects a string or an array.');}return this.plugins;};AvAnalyticsProvider.prototype.setVirtualPageTracking=function setVirtualPageTracking(value){if(arguments.length){this.virtualPageTracking=!!value;}};AvAnalyticsProvider.prototype.isVirtualPageTracking=function isVirtualPageTracking(){return this.virtualPageTracking;};AvAnalyticsProvider.prototype.setAppID=function setAppID(id){this.appId=id;return this.appId;};AvAnalyticsProvider.prototype.$get=function $get($injector,$q,$log,$rootScope,$location){var self=this;var AvAnalytics=function(){function AvAnalytics(){var _this2=this;(0,_classCallCheck3.default)(this,AvAnalytics);this.services={};if(!self.plugins||self.plugins.length===0){self.plugins=[self.av.AV_ANALYTICS.SERVICES.PIWIK,self.av.AV_ANALYTICS.SERVICES.SPLUNK];}_angular2.default.forEach(self.plugins,function(plugin){try{_this2.services[plugin]=$injector.get(plugin);}catch(err){$log.error('Could not load '+plugin+' plugin');}});}AvAnalytics.prototype.init=function init(){var _this3=this;if(this.isVirtualPageTracking()){$rootScope.$on(self.av.AV_ANALYTICS.EVENTS.PAGE,function(){_this3.trackPageView($location.absUrl());});}_angular2.default.forEach(this.services,function(handler){if(handler.isEnabled()&&handler.init){handler.init();}});};AvAnalytics.prototype.trackEvent=function trackEvent(properties){var promises=[];_angular2.default.forEach(this.services,function(handler){var promise=handler.trackEvent(properties);promises.push(promise);});return $q.all(promises);};AvAnalytics.prototype.getAppId=function getAppId(){return self.appId;};AvAnalytics.prototype.isVirtualPageTracking=function isVirtualPageTracking(){return self.virtualPageTracking;};AvAnalytics.prototype.trackPageView=function trackPageView(url){var promises=[];_angular2.default.forEach(this.services,function(handler){var promise=handler.trackPageView(url);promises.push(promise);});return $q.all(promises);};return AvAnalytics;}();return new AvAnalytics();};return AvAnalyticsProvider;}(_base2.default);AvAnalyticsProvider.$inject=['AV_ANALYTICS'];_module2.default.provider('avAnalytics',AvAnalyticsProvider);exports.default=_module2.default;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _moment=__webpack_require__(74);var _moment2=_interopRequireDefault(_moment);var _tracekit=__webpack_require__(480);var _tracekit2=_interopRequireDefault(_tracekit);var _jquery=__webpack_require__(68);var _jquery2=_interopRequireDefault(_jquery);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);__webpack_require__(138);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.constant('AV_EXCEPTIONS',{MESSAGES:{NOT_APPLICABLE:'N/A'},TYPES:{EXCEPTION:'exception'}});var AvExceptionAnalyticsProvider=function(){function AvExceptionAnalyticsProvider(){(0,_classCallCheck3.default)(this,AvExceptionAnalyticsProvider);this._enabled=true;this.appId;}AvExceptionAnalyticsProvider.prototype.enabled=function enabled(_enabled){this._enabled=!!_enabled;};AvExceptionAnalyticsProvider.prototype.setAppId=function setAppId(_id){this.appId=_id;};AvExceptionAnalyticsProvider.prototype.$get=function $get($location,AV_EXCEPTIONS,$injector){var that=this;var AvExceptionAnalytics=function(){function AvExceptionAnalytics(){(0,_classCallCheck3.default)(this,AvExceptionAnalytics);}AvExceptionAnalytics.prototype.init=function init(){var self=this;if(!that._enabled){return;}_tracekit2.default.remoteFetching=false;_tracekit2.default.surroundingLinesToCollect=11;// subscribe() hooks into window.error
	_tracekit2.default.report.subscribe(function(stacktrace){self.onError(stacktrace);});};AvExceptionAnalytics.prototype.prettyPrint=function prettyPrint(stacktrace){var message='';var length=stacktrace.stack.length;for(var i=0;i<length;i++){message+=['['+i.toString().padStart(2,'0')+'] ',stacktrace.stack[i].func,' ',stacktrace.stack[i].url,':',stacktrace.stack[i].line,':',stacktrace.stack[i].column,i+1<length?'\n':''].join('');}return message;};AvExceptionAnalytics.prototype.onError=function onError(stacktrace){var userAgent=window.navigator&&window.navigator.userAgent?window.navigator.userAgent:AV_EXCEPTIONS.MESSAGES.NOT_APPLICABLE;var message={errorDate:(0,_moment2.default)(new Date()).format('YYYY-MM-DDTHH:mm:ssZZ'),errorName:stacktrace.name,errorMessage:stacktrace.message,errorStack:this.prettyPrint(stacktrace),url:$location.$$absUrl,appId:that.appId||AV_EXCEPTIONS.MESSAGES.NOT_APPLICABLE,appVersion:("0.0.0.0")||AV_EXCEPTIONS.MESSAGES.NOT_APPLICABLE,userAgent:userAgent,userLanguage:navigator.userLanguage,referrer:document.referrer,host:document.domain,screenWidth:(0,_jquery2.default)(window).width(),screenHeight:(0,_jquery2.default)(window).height(),sdkVersion:("2.0.0-beta.0")};return this.log(message);};AvExceptionAnalytics.prototype.log=function log(message){var avLogMessagesResource=$injector.get('avLogMessagesResource');return avLogMessagesResource.error(message);};AvExceptionAnalytics.prototype.trackEvent=function trackEvent(exception){if(!that._enabled){return null;}var stacktrace=_tracekit2.default.computeStackTrace(exception);return this.onError(stacktrace);};return AvExceptionAnalytics;}();return new AvExceptionAnalytics();};return AvExceptionAnalyticsProvider;}();_module2.default.provider('avExceptionAnalytics',AvExceptionAnalyticsProvider);_module2.default.config(function($provide){$provide.decorator('$exceptionHandler',function($delegate,$injector){return function(exception,cause){$delegate(exception,cause);var errorTacking=$injector.get('avExceptionAnalytics');errorTacking.trackEvent(exception);};});});_module2.default.run(function(avExceptionAnalytics){return avExceptionAnalytics.init();});exports.default=_module2.default;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';__webpack_require__(135);__webpack_require__(192);__webpack_require__(191);__webpack_require__(197);__webpack_require__(193);__webpack_require__(195);__webpack_require__(196);

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _jquery=__webpack_require__(68);var _jquery2=_interopRequireDefault(_jquery);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);__webpack_require__(55);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var AvPiwikAnalyticsProvider=function(){function AvPiwikAnalyticsProvider(){(0,_classCallCheck3.default)(this,AvPiwikAnalyticsProvider);this.siteId;this.enabled=false;this.customVariables=[];}AvPiwikAnalyticsProvider.prototype.enable=function enable(_enabled){this.enabled=!!_enabled;};// can not push these items to `_paq` because it is defined
	// after page has loaded
	AvPiwikAnalyticsProvider.prototype._setCustomVariable=function _setCustomVariable(index,valueName,value,scope){if(!index||isNaN(index)){throw new Error('index must be a number');}else if(!valueName){throw new Error('valueName must be declared');}else{this.customVariables.push(['setCustomVariable',index,valueName,value,scope]);}};AvPiwikAnalyticsProvider.prototype.setSiteID=function setSiteID(_siteID){this.enable(true);this.siteId=_siteID;};// allow the user to pass a array of visit variables
	AvPiwikAnalyticsProvider.prototype.setVisitVariables=function setVisitVariables(items){var _this=this;items.forEach(function(item){_this._setCustomVariable(item[0],item[1],item[2],'visit');});};AvPiwikAnalyticsProvider.prototype.setPageVariables=function setPageVariables(index,name,value){this._setCustomVariable(index,name,value,'page');};AvPiwikAnalyticsProvider.prototype.$get=function $get(avAnalyticsUtils,avUsersResource,AV_ANALYTICS,$injector,$log,$q,$document,$location){var that=this;var AvPiwikAnalytics=function(){function AvPiwikAnalytics(){(0,_classCallCheck3.default)(this,AvPiwikAnalytics);window._paq=window._paq||[];}AvPiwikAnalytics.prototype.trackEvent=function trackEvent(properties){if(!window._paq){$log.warn('Piwik object `_paq` not found in global scope');return $q.when(false);}// http://piwik.org/docs/event-tracking/
	//
	// PAQ requires that eventValue be an integer.
	// Check to make sure value is a number if not convert it to 0.
	//
	if(properties.value){properties.value=avAnalyticsUtils.toNum(properties.event);}// check to make sure that data being sent to piwik is a string and not null, empty or undefined
	if(!avAnalyticsUtils.isValid(properties)){$log.warn('Invalid properties being passed. Tracking info will not be sent.');return $q.when(false);}return $q.when(window._paq.push(['trackEvent',properties.category,properties.action||properties.event,properties.label,properties.value]));};AvPiwikAnalytics.prototype.trackPageView=function trackPageView(url){if(!window._paq){$log.warn('Piwik object `_paq` not found in global scope');return $q.when(false);}return $q.when([window._paq.push(['setCustomUrl',url]),window._paq.push(['trackPageView',url])]);};AvPiwikAnalytics.prototype.init=function init(){avUsersResource.me().then(function(user){return window._paq.push(['setUserId',user.id]);});if(!isFinite(that.siteId)){$log.warn('Invalid Piwik Site Id.  Piwik analytics has been disabled.');return;}var url=void 0;if($location.$$host===AV_ANALYTICS.ENV.PROD.DOMAIN){url=AV_ANALYTICS.ENV.PROD.URL;}else{url=AV_ANALYTICS.ENV.QA.URL;}window._paq.push(['enableLinkTracking']);window._paq.push(['setTrackerUrl',url+'piwik.php']);window._paq.push(['setSiteId',that.siteId]);that.customVariables.forEach(function(variable){window._paq.push(variable);});_jquery2.default.getScript(url+'piwik.js',angular.noop);};AvPiwikAnalytics.prototype.isEnabled=function isEnabled(){return that.enabled&&that.siteId;};return AvPiwikAnalytics;}();return new AvPiwikAnalytics();};return AvPiwikAnalyticsProvider;}();_module2.default.provider('avPiwikAnalytics',AvPiwikAnalyticsProvider);exports.default=_module2.default;

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.factory('avSplunkAnalytics',function($log,avLogMessagesResource,$location){var SplunkAnalyticsService=function(){function SplunkAnalyticsService(){(0,_classCallCheck3.default)(this,SplunkAnalyticsService);}SplunkAnalyticsService.prototype.trackEvent=function trackEvent(properties){properties.url=$location.$$absUrl||'N/A';properties.level=properties.level||'info';return avLogMessagesResource[properties.level](properties);};SplunkAnalyticsService.prototype.trackPageView=function trackPageView(url){var properties={event:'page',level:'info',url:url||$location.$$absUrl()};return avLogMessagesResource[properties.level](properties);};SplunkAnalyticsService.prototype.isEnabled=function isEnabled(){return true;};return SplunkAnalyticsService;}();return new SplunkAnalyticsService();});exports.default=_module2.default;

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _keys=__webpack_require__(43);var _keys2=_interopRequireDefault(_keys);var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);var _utils=__webpack_require__(55);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.factory('avAnalyticsUtils',function(AV_ANALYTICS,$log){var AnalyticsUtils=function(){function AnalyticsUtils(){(0,_classCallCheck3.default)(this,AnalyticsUtils);}AnalyticsUtils.prototype.getProperties=function getProperties(attributes){var self=this;var props={};(0,_keys2.default)(attributes).forEach(function(key){if(self.isValidAttribute(key)&&self.isNotIgnored(key)){var result=self.getAttribute(key,attributes[key]);props[result.key]=result.value;}});return props;};// Function detects external links in order to allow the analytics framework to run
	// before the browser follows a link.
	//
	//    - target="_self" - This opens an anchor in the same frame
	//    - target="_parent" - Opens the in the next level up of a frame if they were nested to inside one another
	//    - target="_top" - Opens the link as top document in the browser window
	//    - target="_blank" - Opens link in new tab new tab
	//
	AnalyticsUtils.prototype.isExternalLink=function isExternalLink(attrs){return attrs.href&&!attrs.ngClick;};AnalyticsUtils.prototype.isNotIgnored=function isNotIgnored(key){var ignored=AV_ANALYTICS.IGNORE.indexOf(key)>-1;return!ignored;};AnalyticsUtils.prototype.isValidAttribute=function isValidAttribute(key){return AV_ANALYTICS.PRE_FIX.test(key);};AnalyticsUtils.prototype.lowercase=function lowercase(str){return str.substr(0,1).toLowerCase()+str.substr(1);};AnalyticsUtils.prototype.getAttribute=function getAttribute(key,value){var simpleKey=key.match(AV_ANALYTICS.PRE_FIX);if(simpleKey&&simpleKey[1]){return{key:this.lowercase(simpleKey[1]),value:value};}};AnalyticsUtils.prototype.toNum=function toNum(value){var parsed=parseInt(value,10);return isNaN(parsed)?0:parsed;};AnalyticsUtils.prototype.isValid=function isValid(trackingValues){var valid=true;if(trackingValues.value||trackingValues.value===0){delete trackingValues.value;}(0,_keys2.default)(trackingValues).forEach(function(key){var value=trackingValues[key];if((0,_utils.isBlank)(value)||_angular2.default.isUndefined(value)){$log.warn('The analytic tracking value for '+key.toUpperCase()+' is not defined.');valid=false;}});return valid;};return AnalyticsUtils;}();return new AnalyticsUtils();});

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(14);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(13);var _inherits3=_interopRequireDefault(_inherits2);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var OrganizationResourceFactory=function OrganizationResourceFactory(AvApiResource){var OrganizationResource=function(_AvApiResource){(0,_inherits3.default)(OrganizationResource,_AvApiResource);function OrganizationResource(){(0,_classCallCheck3.default)(this,OrganizationResource);return(0,_possibleConstructorReturn3.default)(this,_AvApiResource.call(this,{name:'organizations'}));}OrganizationResource.prototype.getOrganizations=function getOrganizations(config){return this.query(config).then(function(response){return response.data.organizations?response.data.organizations:response.data;});};return OrganizationResource;}(AvApiResource);return new OrganizationResource();};_module2.default.factory('avOrganizationsResource',OrganizationResourceFactory);exports.default=_module2.default;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(14);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(13);var _inherits3=_interopRequireDefault(_inherits2);var _moment=__webpack_require__(74);var _moment2=_interopRequireDefault(_moment);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var AvUserPermissionsResourceFactory=function AvUserPermissionsResourceFactory(AvApiResource){var AvUserPermissionsResource=function(_AvApiResource){(0,_inherits3.default)(AvUserPermissionsResource,_AvApiResource);function AvUserPermissionsResource(){(0,_classCallCheck3.default)(this,AvUserPermissionsResource);var _this=(0,_possibleConstructorReturn3.default)(this,_AvApiResource.call(this,{path:'/api/internal',version:'/v1',name:'/axi-user-permissions'}));_this.cacheBust=(0,_moment2.default)().unix();return _this;}AvUserPermissionsResource.prototype.afterQuery=function afterQuery(response){return response.data.axiUserPermissions?response.data.axiUserPermissions:[];};AvUserPermissionsResource.prototype.getPermissions=function getPermissions(permissionIds,region){return this.query({params:{permissionId:permissionIds,region:region,cacheBust:this.cacheBust}});};return AvUserPermissionsResource;}(AvApiResource);return new AvUserPermissionsResource();};_module2.default.factory('avUserPermissionsResource',AvUserPermissionsResourceFactory);exports.default=_module2.default;

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(14);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(13);var _inherits3=_interopRequireDefault(_inherits2);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var UserServiceFactory=function UserServiceFactory(AvApiResource){var AvUsersResource=function(_AvApiResource){(0,_inherits3.default)(AvUsersResource,_AvApiResource);function AvUsersResource(){(0,_classCallCheck3.default)(this,AvUsersResource);return(0,_possibleConstructorReturn3.default)(this,_AvApiResource.call(this,{name:'users'}));}AvUsersResource.prototype.afterGet=function afterGet(response){var user=response.data.user?response.data.user:response.data;return user;};AvUsersResource.prototype.me=function me(config){return this.get('me',config);};return AvUsersResource;}(AvApiResource);return new AvUsersResource();};_module2.default.factory('avUsersResource',UserServiceFactory);exports.default=_module2.default;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);__webpack_require__(137);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var AvUserAuthorizationsFactory=function AvUserAuthorizationsFactory($q,$log,avUserPermissionsResource){var AvUserAuthorizations=function(){function AvUserAuthorizations(){(0,_classCallCheck3.default)(this,AvUserAuthorizations);/**
	       * Region is used to return permission/resources relative to region. If null service will
	       * return all permission relative to current.  If value 'ALL' used it will return value relative
	       * to all regions the user has access to.
	       */this.region=null;/**
	       * PermissionIds contains the set of permissionIds to request from service. If user of service calls
	       * setPermissionIds() or call getPermissions() with complete set of permissionIds needed by application,
	       * then service should only make that one hit to retrieve permission information.
	       */this.permissionIds=[];}AvUserAuthorizations.prototype.setRegion=function setRegion(region){this.region=region;return this;};AvUserAuthorizations.prototype.setPermissionIds=function setPermissionIds(permissionIds){if(!_angular2.default.isArray(permissionIds)){throw new Error('permissionsIds must be an array of strings in setPermissionIds()');}this.permissionIds=permissionIds;return this;};AvUserAuthorizations.prototype.isAuthorized=function isAuthorized(permissionId){return this.getPermission(permissionId).then(function(permission){return permission.isAuthorized;});};AvUserAuthorizations.prototype.isAnyAuthorized=function isAnyAuthorized(permissionIds){return this.getPermissions(permissionIds).then(function(permissions){return permissions.some(function(permission){return permission.isAuthorized;});});};AvUserAuthorizations.prototype.getPermission=function getPermission(permissionId){if(!_angular2.default.isString(permissionId)){throw new Error('permissionsId must be a string ID for getPermission()');}return this.getPermissions([permissionId]).then(function(permissions){return permissions.find(function(permission){return permission.id===permissionId;});});};AvUserAuthorizations.prototype.getPermissions=function getPermissions(permissionIds){var _this=this;if(!_angular2.default.isArray(permissionIds)){throw new Error('permissionsIds must be an array of string IDs for getPermissions()');}// Combine pre-loaded permission ids with the ids from this function invocation
	this.permissionIds=_.union(this.permissionIds,permissionIds);return avUserPermissionsResource.getPermissions(this.permissionIds,this.region).then(function(permissions){return _this.map(permissionIds,permissions);});};AvUserAuthorizations.prototype.getOrganizations=function getOrganizations(permissionId){return this.getPermission(permissionId).then(function(permission){return permission.organizations;});};AvUserAuthorizations.prototype.getPayers=function getPayers(permissionId,organizationId){return this.getPermission(permissionId).then(function(permission){var organization=permission.organizations.find(function(permission){return permission.id===organizationId;});if(organization&&organization.resources){return organization.resources;}return[];});};AvUserAuthorizations.prototype.map=function map(permissionIds,permissions){var self=this;var result=permissionIds.map(function(permissionId){var key={id:permissionId};var permission=permissions.find(function(permission){return permission.id===permissionId;});permission=permission?self.convert(permission):self.convert(key);return permission;});return result;};AvUserAuthorizations.prototype.convert=function convert(permission){permission.isAuthorized=permission.organizations?permission.organizations.length>0:false;permission.geographies=permission.geographies||[];permission.organizations=permission.organizations||[];return permission;};return AvUserAuthorizations;}();return new AvUserAuthorizations();};_module2.default.factory('avUserAuthorizations',AvUserAuthorizationsFactory);

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';__webpack_require__(194);__webpack_require__(137);__webpack_require__(201);__webpack_require__(204);__webpack_require__(141);__webpack_require__(55);__webpack_require__(93);

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.constant('AV_MESSAGES',{EVENTS:{MESSAGE:'message',// post message window event
	RESIZE:'resize.av.message',UNLOAD:'unload.av.message'},RESIZE_DEBOUNCE:400,DOMAIN:/https?:\/\/([\w\d\-]+\.)?availity\.(com|net)/,LOCAL:/http:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0):(\d+)/});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _stringify=__webpack_require__(249);var _stringify2=_interopRequireDefault(_stringify);var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _jquery=__webpack_require__(68);var _jquery2=_interopRequireDefault(_jquery);var _lodash=__webpack_require__(190);var _=_interopRequireWildcard(_lodash);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);__webpack_require__(203);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// https://github.com/kylewelsby/angular-post-message/blob/master/src/angular-post-message.js
	var AvMessageProvider=function(){function AvMessageProvider(){(0,_classCallCheck3.default)(this,AvMessageProvider);this.enabled=true;}AvMessageProvider.prototype.enable=function enable(value){if(arguments.length){this.enabled=!!value;}return this.enabled;};AvMessageProvider.prototype.$get=function $get($rootScope,$log,AV_MESSAGES){var that=this;var AvMessages=function(){function AvMessages(){var _this=this;(0,_classCallCheck3.default)(this,AvMessages);this.onResize=_.debounce(function(){var height=(0,_jquery2.default)('html').height();_this.send({event:AV_MESSAGES.EVENTS.AV_RESIZE,height:height});},AV_MESSAGES.RESIZE_DEBOUNCE);}AvMessages.prototype.init=function init(){var $window=(0,_jquery2.default)(window);$window.on(AV_MESSAGES.EVENTS.MESSAGE,this.onMessage.bind(this));$window.on(AV_MESSAGES.EVENTS.RESIZE,this.onResize.bind(this));$window.on(AV_MESSAGES.EVENTS.UNLOAD,this.onUnload.bind(this));$rootScope.$on('$destroy',this.destroy.bind(this));};AvMessages.prototype.destroy=function destroy(){(0,_jquery2.default)(window).off(AV_MESSAGES.EVENTS.MESSAGE);(0,_jquery2.default)(window).off(AV_MESSAGES.EVENTS.RESIZE);(0,_jquery2.default)(window).off(AV_MESSAGES.EVENTS.UNLOAD);};AvMessages.prototype.onUnload=function onUnload(){this.send({event:AV_MESSAGES.EVENTS.UNLOAD});};AvMessages.prototype.isDomain=function isDomain(url){if(AV_MESSAGES.DOMAIN.test(this.domain())){return AV_MESSAGES.DOMAIN.test(url);}return AV_MESSAGES.LOCAL.test(url);};AvMessages.prototype.isEnabled=function isEnabled(){return that.enabled;};AvMessages.prototype.onMessage=function onMessage(_event){var event=_event;event=event.originalEvent||event;// jQuery wraps in `originalEvent`
	if(!event&&!event.data){// no op
	return;}// don't process messages emitted from same window
	if(event.source===window){return;}if(!this.isDomain(event.origin)){$log.warn('avMessages rejected a cross domain message since it does not match an *.availity.com  or localhost');return;}var data=event.data;try{data=_angular2.default.fromJson(data);}catch(err){$log.warn('avMessages.onMessage() failed to convert event to json payload');}if(_angular2.default.isString(data)){event=data;data=null;}else{event=data.event?data.event:AV_MESSAGES.AV_RECEIVED;}$rootScope.$root.$broadcast(event,data);};AvMessages.prototype.isIframe=function isIframe(){return window.self!==window.parent;};AvMessages.prototype.domain=function domain(){if(window.location.origin){return window.location.origin;}if(window.location.hostname){return window.location.protocol+'//'+window.location.hostname+(window.location.port?':'+window.location.port:'');}return'*';};AvMessages.prototype.send=function send(payload){try{var message=_.isString(payload)?payload:(0,_stringify2.default)(payload);this.postMessage(message,this.domain());}catch(err){$log.error('avMessages.send() ',err);}};AvMessages.prototype.postMessage=function postMessage(message,domain){window.parent.postMessage(message,domain);};return AvMessages;}();return new AvMessages();};return AvMessageProvider;}();_module2.default.provider('avMessages',AvMessageProvider);_module2.default.run(function(avMessages){if(avMessages.isEnabled()){avMessages.init();}});

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.constant('AV_POLLING',{INTERVAL:1000,// delay in ms before retrying an async request
	MAX_ELAPSED_TIME:5000,// max time in ms before polling stops and rejects original request
	MAX_RETRY:30,// # of times the request will be tried
	DECAY:1.2,// % the polling interval decays after every retry
	// maximum time polling is allowed before rejecting the request
	EVENTS:{MAX_RETRY:'av:polling:max:retry'},REGEX_URL:/^.*?api.availity.com(.*)$/// capture the relative url from API
	});exports.default=_module2.default;

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);var _regions=__webpack_require__(142);var _regions2=_interopRequireDefault(_regions);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.constant('AV_GLOBALS',{REGIONS:_regions2.default});

/***/ },
/* 207 */
/***/ function(module, exports) {

	'use strict';exports.__esModule=true;exports.print=print;// https://github.com/jasonday/printThis/commit/66f9cbd0e3760767342eed4ef32cf8294417b227
	function print(){if(document.queryCommandSupported('print')){document.execCommand('print',false,null);}else{window.focus();window.print();}}

/***/ },
/* 208 */
/***/ function(module, exports) {

	'use strict';exports.__esModule=true;exports.stringify=stringify;exports.isBlank=isBlank;// https://github.com/epeli/underscore.string/blob/cebddf40cf2e10f0e9b596d9654edd0a1cfefc15/helper/makeString.js
	function stringify(object){if(object===null){return'';}return''+object;}// https://github.com/epeli/underscore.string/blob/cebddf40cf2e10f0e9b596d9654edd0a1cfefc15/isBlank.js
	function isBlank(str){return (/^\s*$/.test(stringify(str)));}

/***/ },
/* 209 */
/***/ function(module, exports) {

	"use strict";exports.__esModule=true;var REGEX_API_URL=/^.*?api.availity.com(.*)$/;function getRelativeUrl(url){var result=url.match(REGEX_API_URL);if(result&&result[1]){return"/api"+result[1];}return url;}exports.REGEX_API_URL=REGEX_API_URL;exports.getRelativeUrl=getRelativeUrl;

/***/ },
/* 210 */
/***/ function(module, exports) {

	'use strict';exports.__esModule=true;exports.default=uuid;var uid=['0','0','0'];function uuid(prefix){var index=uid.length;var digit=void 0;while(index){index--;digit=uid[index].charCodeAt(0);if(digit===57/* '9' */){uid[index]='A';return prefix?prefix+uid.join(''):uid.join('');}if(digit===90/* 'Z' */){uid[index]='0';}else{uid[index]=String.fromCharCode(digit+1);return prefix?prefix+uid.join(''):uid.join('');}}uid.unshift('0');return prefix?prefix+uid.join(''):uid.join('');}

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';exports.__esModule=true;var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.value('avValConfig',{classes:{valid:'ng-valid',invalid:'ng-invalid',dirty:'ng-dirty',pristine:'ng-pristine',touched:'ng-touched',untouched:'ng-untouched',submitted:'ng-submitted'},validators:['avValPattern','avValSize','avValRequired','avValDateRange','avValDate','avValPhone','avValEmail','avValNpi']});exports.default=_module2.default;

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);__webpack_require__(211);__webpack_require__(92);__webpack_require__(216);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var AvValProvider=function(){function AvValProvider(){(0,_classCallCheck3.default)(this,AvValProvider);this.validators=[];this.rules={};this.services={};}AvValProvider.prototype.addRules=function addRules(_rules){this.rules=_angular2.default.extend({},this.rules,_rules);return this.rules;};AvValProvider.prototype.addValidators=function addValidators(_validators){this.validators=this.validators.concat(_validators);return this.validators;};AvValProvider.prototype.$get=function $get($injector,$rootScope,avValConfig,AV_VAL){var that=this;var AvValidation=function(){function AvValidation(){(0,_classCallCheck3.default)(this,AvValidation);this.initValidators();}AvValidation.prototype.initValidators=function initValidators(){var self=this;that.validators=avValConfig.validators.concat(that.validators);_angular2.default.forEach(that.validators,function(name){self.addValidator(name);});};AvValidation.prototype.addValidator=function addValidator(name){var validator=$injector.get(name);that.services[validator.name]=validator;};AvValidation.prototype.addRules=function addRules(rules){that.rules=_angular2.default.extend({},that.rules,rules);$rootScope.$broadcast(AV_VAL.EVENTS.REVALIDATE);};AvValidation.prototype.getRule=function getRule(key){return that.rules[key];};AvValidation.prototype.getService=function getService(name){return that.services[name];};return AvValidation;}();return new AvValidation();};return AvValProvider;}();_module2.default.provider('avVal',AvValProvider);

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(14);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(13);var _inherits3=_interopRequireDefault(_inherits2);var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _moment=__webpack_require__(74);var _moment2=_interopRequireDefault(_moment);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);var _validator=__webpack_require__(37);var _validator2=_interopRequireDefault(_validator);__webpack_require__(92);__webpack_require__(69);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.factory('avValDateRange',function(AV_VAL,avValUtils){var DateRangeValidator=function(_Validator){(0,_inherits3.default)(DateRangeValidator,_Validator);function DateRangeValidator(){(0,_classCallCheck3.default)(this,DateRangeValidator);return(0,_possibleConstructorReturn3.default)(this,_Validator.call(this,'dateRange'));}DateRangeValidator.prototype.getStartDate=function getStartDate(start){return this.setMin((0,_moment2.default)().add(start.value,start.units));};DateRangeValidator.prototype.getEndDate=function getEndDate(end){return this.setMax((0,_moment2.default)().add(end.value,end.units));};DateRangeValidator.prototype.setMin=function setMin(value){value.set('hours',0);value.set('minutes',0);value.set('seconds',0);return value;};DateRangeValidator.prototype.setMax=function setMax(value){value.set('hours',23);value.set('minutes',59);value.set('seconds',59);return value;};DateRangeValidator.prototype.validation=function validation(_ref){var value=_ref.value;var constraint=_ref.constraint;var startDate=void 0;var endDate=void 0;var date=_angular2.default.isDate(value)?(0,_moment2.default)(value):(0,_moment2.default)(value,constraint.format||AV_VAL.DATE_FORMAT.SIMPLE);date.set('hours',0);date.set('minutes',0);date.set('seconds',0);if(!avValUtils.isEmpty(constraint.start.units)&&!avValUtils.isEmpty(constraint.end.units)){startDate=this.getStartDate(constraint.start);endDate=this.getEndDate(constraint.end);}else{startDate=(0,_moment2.default)(constraint.start.value,constraint.start.format||constraint.format);endDate=this.setMax((0,_moment2.default)(constraint.end.value,constraint.end.format||constraint.format));}return(_angular2.default.isDate(value)||date.isValid())&&(date.isBetween(startDate,endDate,'day')||date.isSame(startDate,'day')||date.isSame(endDate,'day'));};DateRangeValidator.prototype.validate=function validate(context){return avValUtils.isEmpty(context.value)||this.validation(context);};return DateRangeValidator;}(_validator2.default);return new DateRangeValidator();});

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(14);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(13);var _inherits3=_interopRequireDefault(_inherits2);var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _moment=__webpack_require__(74);var _moment2=_interopRequireDefault(_moment);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);var _validator=__webpack_require__(37);var _validator2=_interopRequireDefault(_validator);__webpack_require__(92);__webpack_require__(69);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.factory('avValDate',function(AV_VAL,avValUtils){var DateValidator=function(_Validator){(0,_inherits3.default)(DateValidator,_Validator);function DateValidator(){(0,_classCallCheck3.default)(this,DateValidator);return(0,_possibleConstructorReturn3.default)(this,_Validator.call(this,'dateFormat'));}DateValidator.prototype.validate=function validate(_ref){var value=_ref.value;var constraint=_ref.constraint;var format=_ref.format;var _format=constraint&&format?format:AV_VAL.DATE_FORMAT.SIMPLE;return avValUtils.isEmpty(value)||_angular2.default.isDate(value)||(0,_moment2.default)(value,_format,true).isValid();};return DateValidator;}(_validator2.default);return new DateValidator();});

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(14);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(13);var _inherits3=_interopRequireDefault(_inherits2);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);var _validator=__webpack_require__(37);var _validator2=_interopRequireDefault(_validator);__webpack_require__(94);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.factory('avValEmail',function(avValPattern){var EMAIL_PATTERN=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;var EmailValidator=function(_Validator){(0,_inherits3.default)(EmailValidator,_Validator);function EmailValidator(){(0,_classCallCheck3.default)(this,EmailValidator);return(0,_possibleConstructorReturn3.default)(this,_Validator.call(this,'email'));}EmailValidator.prototype.validate=function validate(context){context.constraint=context.constraint||{};context.constraint.value=EMAIL_PATTERN;return avValPattern.validate(context);};return EmailValidator;}(_validator2.default);return new EmailValidator();});

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';__webpack_require__(214);__webpack_require__(213);__webpack_require__(215);__webpack_require__(217);__webpack_require__(94);__webpack_require__(218);__webpack_require__(219);__webpack_require__(220);__webpack_require__(69);

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(14);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(13);var _inherits3=_interopRequireDefault(_inherits2);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);var _validator=__webpack_require__(37);var _validator2=_interopRequireDefault(_validator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.factory('avValNpi',function(avValUtils){var NpiValidator=function(_Validator){(0,_inherits3.default)(NpiValidator,_Validator);function NpiValidator(){(0,_classCallCheck3.default)(this,NpiValidator);var _this=(0,_possibleConstructorReturn3.default)(this,_Validator.call(this,'npi'));_this.INTEGER_REGEX=/^\d*$/;return _this;}NpiValidator.prototype.validate=function validate(context){var value=context.value;var npi=value||'';if(avValUtils.isEmpty(npi)){return true;}if(!this.INTEGER_REGEX.test(npi)||npi.length!==10){return false;}var firstDigit=npi.charAt(0);if(!['1','2','3','4'].includes(firstDigit)){return false;}var digit=parseInt(npi.charAt(9),10);npi=npi.substring(0,9);npi='80840'+npi;var alternate=true;var total=0;for(var i=npi.length;i>0;i--){var next=parseInt(npi.charAt(i-1),10);if(alternate){next=next*2;if(next>9){next=next%10+1;}}total+=next;alternate=!alternate;}var roundUp=Math.ceil(total/10)*10;var calculatedCheck=roundUp-total;return calculatedCheck===digit;};return NpiValidator;}(_validator2.default);return new NpiValidator();});

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(14);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(13);var _inherits3=_interopRequireDefault(_inherits2);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);var _validator=__webpack_require__(37);var _validator2=_interopRequireDefault(_validator);__webpack_require__(94);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.factory('avValPhone',function(avValPattern){var PHONE_PATTERN=/^([0-9][\.\-]?)?[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;var PhoneValidator=function(_Validator){(0,_inherits3.default)(PhoneValidator,_Validator);function PhoneValidator(){(0,_classCallCheck3.default)(this,PhoneValidator);return(0,_possibleConstructorReturn3.default)(this,_Validator.call(this,'phone'));}PhoneValidator.prototype.validate=function validate(context){context.constraint=context.contraint||{};context.constraint.value=PHONE_PATTERN;return avValPattern.validate(context);};return PhoneValidator;}(_validator2.default);return new PhoneValidator();});

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(14);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(13);var _inherits3=_interopRequireDefault(_inherits2);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);var _validator=__webpack_require__(37);var _validator2=_interopRequireDefault(_validator);__webpack_require__(69);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.factory('avValRequired',function(avValUtils){var RequiredValidator=function(_Validator){(0,_inherits3.default)(RequiredValidator,_Validator);function RequiredValidator(){(0,_classCallCheck3.default)(this,RequiredValidator);return(0,_possibleConstructorReturn3.default)(this,_Validator.call(this,'required'));}RequiredValidator.prototype.validate=function validate(context){var value=context.value;var element=context.element;// Using ngModelController.$isEmpty for required checks.  A form component being empty is dependent on the
	// type of field:
	//
	//    - radio
	//    - checkbox
	//    - text
	//    - lists
	//
	// You can override $isEmpty for input directives whose concept of being empty is different to the
	// default. Radio and checkboxes directive do this because in its case a value of `false`
	// implies empty.
	//
	var ctrl=element&&element.data('$ngModelController');if(ctrl){return!ctrl.$isEmpty(value);}return!avValUtils.isEmpty(value);};return RequiredValidator;}(_validator2.default);return new RequiredValidator();});

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(14);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(13);var _inherits3=_interopRequireDefault(_inherits2);var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _validator=__webpack_require__(37);var _validator2=_interopRequireDefault(_validator);var _module=__webpack_require__(4);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.factory('avValSize',function(avValUtils){var SizeValidator=function(_Validator){(0,_inherits3.default)(SizeValidator,_Validator);function SizeValidator(){(0,_classCallCheck3.default)(this,SizeValidator);return(0,_possibleConstructorReturn3.default)(this,_Validator.call(this,'size'));}SizeValidator.prototype.validate=function validate(context){var value=context.value;var constraint=context.constraint;var _value=value;var min=constraint.min||0;var max=constraint.max;var type=constraint.type?constraint.type.toLowerCase():'text';if(_value===null||_angular2.default.isUndefined(_value)){_value='';}if(type==='text'){_value=''+_value;return avValUtils.isEmpty(_value)||_value.length>=min&&(max===undefined||_value.length<=max);}// ... must be a Number
	if(!_angular2.default.isNumber(_value)&&/^\d+$/.test(_value)){_value=parseInt(_value,10);}return avValUtils.isEmpty(_value)||_value>=min&&(max===undefined||_value<=max);};return SizeValidator;}(_validator2.default);return new SizeValidator();});

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}// Options: http://bootstrap-datepicker.readthedocs.org/en/latest/options.html
	_module2.default.constant('AV_DATEPICKER',{CONTROLLER:'$ngModelController',ADD_ON_SELECTOR:'[data-toggle="datepicker"]',OPTIONS:['autoclose','beforeShowDay','beforeShowMonth','calendarWeeks','clearBtn','toggleActive','container','daysOfWeekDisabled','datesDisabled','defaultViewDate','endDate','forceParse','format','inputs','keyboardNavigation','language','minViewMode','multidate','multidateSeparator','orientation','startDate','startView','todayBtn','todayHighlight','weekStart','showOnFocus','disableTouchKeyboard','enableOnReadonly','modelFormat'],DEFAULTS:{MODELFORMAT:'YYYY-MM-DD'}});

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _keys=__webpack_require__(43);var _keys2=_interopRequireDefault(_keys);var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(14);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(13);var _inherits3=_interopRequireDefault(_inherits2);var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _moment=__webpack_require__(74);var _moment2=_interopRequireDefault(_moment);var _base=__webpack_require__(75);var _base2=_interopRequireDefault(_base);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var hasDateInputSupport=hasDateInput();// Inspiration https://github.com/mgcrea/angular-strap/blob/v0.7.8/src/directives/datepicker.js
	var AvDatepickerController=function(_Base){(0,_inherits3.default)(AvDatepickerController,_Base);function AvDatepickerController(){(0,_classCallCheck3.default)(this,AvDatepickerController);for(var _len=arguments.length,args=Array(_len),_key2=0;_key2<_len;_key2++){args[_key2]=arguments[_key2];}var _this=(0,_possibleConstructorReturn3.default)(this,_Base.call.apply(_Base,[this].concat(args)));_this.hasDateInputSupport=hasDateInputSupport;return _this;}AvDatepickerController.prototype.setValue=function setValue(){var viewValue=this.ngModel.$viewValue;var plugin=this.plugin();if(!viewValue||!plugin){return;}plugin.setDate(viewValue);};AvDatepickerController.prototype.setNgModel=function setNgModel(ngModel){this.ngModel=ngModel;};AvDatepickerController.prototype.findModel=function findModel(){var ngModel=null;var $input=this.av.$element.find('input:first').andSelf();if($input.length){ngModel=$input.data(this.av.AV_DATEPICKER.CONTROLLER);this.setNgModel(ngModel);}return ngModel;};AvDatepickerController.prototype.modelToView=function modelToView(modelValue){return(0,_moment2.default)(modelValue).format(this.options.format);};AvDatepickerController.prototype.viewToModel=function viewToModel(viewValue){var plugin=this.plugin();if(!plugin||!viewValue){return null;}var parsed=(0,_moment2.default)(viewValue,this.options.format,true);if(parsed.isValid()){// jscs: disable
	return plugin._utc_to_local(parsed.utc().toDate());// jscs: enable
	}};AvDatepickerController.prototype.init=function init(){var _this2=this;this.options=_angular2.default.copy(this.av.avDatepickerConfig);(0,_keys2.default)(this.av.$attrs).forEach(function(key){var value=_this2.av.$attrs[key];var _key=key.replace('data-','');if(_this2.av.AV_DATEPICKER.OPTIONS.includes(_key)){_this2.options[_key]=_this2.av.$scope.$eval(value);}});if(!this.options.modelFormat||this.options.modelFormat&&this.options.modelFormat.toLowerCase()==='default'){this.options.modelFormat=this.av.AV_DATEPICKER.DEFAULTS.MODELFORMAT;}if(this.av.$attrs.type==='date'&&this.hasDateInputSupport){this.options.format=this.av.AV_DATEPICKER.DEFAULTS.MODELFORMAT;}};AvDatepickerController.prototype.plugin=function plugin(){return this.av.$element.data('datepicker');};AvDatepickerController.prototype.destroy=function destroy(){var plugin=this.plugin();if(plugin){plugin.remove();this.av.$element.data('datepicker',null);}};AvDatepickerController.prototype.hide=function hide(){var plugin=this.plugin();if(plugin){plugin.hide();}};return AvDatepickerController;}(_base2.default);AvDatepickerController.$inject=['$element','$attrs','AV_DATEPICKER','$scope','avDatepickerConfig'];function hasDateInput(){var i=document.createElement("input");i.setAttribute("type","date");return i.type!=="text";}_module2.default.controller('AvDatepickerController',AvDatepickerController);

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function dateConfig($provide){// duck punch built in input validation to not date validation since it doesn't support different formats. 
	$provide.decorator('inputDirective',function($delegate){var directive=$delegate[0];var link=directive.link;directive.compile=function(){return{pre:function pre(scope,element,attr,ctrls){if(ctrls[0]&&_angular2.default.lowercase(attr.type)==='date'&&_angular2.default.isDefined(attr.avDatepicker)){// do not use the default date validation;
	}else{link.pre.apply(this,arguments);}}};};return $delegate;});}_module2.default.config(dateConfig);

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _extends2=__webpack_require__(28);var _extends3=_interopRequireDefault(_extends2);var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.directive('avDatepicker',function($window,$log,AV_DATEPICKER){return{restrict:'A',require:['ngModel','avDatepicker'],controller:'AvDatepickerController',link:function link(scope,element,attrs,controllers){var ngModel=controllers[0];var avDatepicker=controllers[1];if(!ngModel){ngModel=avDatepicker.findModel();if(!ngModel){$log.error('avDatepicker requires ngModel');return;}}avDatepicker.init();avDatepicker.setNgModel(ngModel);ngModel.$parsers.push(avDatepicker.viewToModel.bind(avDatepicker));ngModel.$formatters.push(avDatepicker.modelToView.bind(avDatepicker));var _$render=ngModel.$render;ngModel.$render=function(){_$render();avDatepicker.setValue();};var win=_angular2.default.element($window);win.bind('scroll',function(){avDatepicker.hide();});var target=element.siblings(AV_DATEPICKER.ADD_ON_SELECTOR);target=target.length?target:element.siblings(AV_DATEPICKER.ADD_ON_SELECTOR.replace('data-',''));if(target.length){target.on('click.datepicker',function(){if(!element.prop('disabled')){// Hack check for IE 8
	element.focus();}});}scope.$on('destroy',function(){avDatepicker.destroy();if(target.length){target.off('click.datepicker');}});scope.$evalAsync(function(){// why are their so many different ways to format the same date... MM/DD/YYYY -> mm/dd/yyyy makes a difference. between moment and the datepicker plugin.
	var options=(0,_extends3.default)({},avDatepicker.options);options.format=_angular2.default.lowercase(options.format);element.datepicker(options);});}};});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';__webpack_require__(223);__webpack_require__(221);__webpack_require__(226);__webpack_require__(222);__webpack_require__(224);

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _extends2=__webpack_require__(28);var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var config={autoclose:true,todayHighlight:true,format:'MM/DD/YYYY',forceParse:false};var AvDatepickerConfig=function(){function AvDatepickerConfig(){(0,_classCallCheck3.default)(this,AvDatepickerConfig);}AvDatepickerConfig.prototype.set=function set(options){(0,_extends3.default)(config,options);};AvDatepickerConfig.prototype.$get=function $get(){return _angular2.default.copy(config);};return AvDatepickerConfig;}();_module2.default.provider('avDatepickerConfig',AvDatepickerConfig);

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _keys=__webpack_require__(43);var _keys2=_interopRequireDefault(_keys);var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _jquery=__webpack_require__(68);var _jquery2=_interopRequireDefault(_jquery);__webpack_require__(479);__webpack_require__(144);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.directive('avDropdown',function($timeout){return{restrict:'A',require:['ngModel','avDropdown'],controller:'AvDropdownController',link:function link(scope,element,attrs,controllers){element.addClass('select2');var ngModel=controllers[0];var avDropdown=controllers[1];avDropdown.setNgModel(ngModel);avDropdown.init();if(attrs.ngOptions){avDropdown.ngOptions();}ngModel.$parsers.push(function(value){var parent=element.prev();parent.toggleClass('ng-invalid',!ngModel.$valid).toggleClass('ng-valid',ngModel.$valid).toggleClass('ng-invalid-required',!ngModel.$valid).toggleClass('ng-valid-required',ngModel.$valid).toggleClass('ng-dirty',ngModel.$dirty).toggleClass('ng-pristine',ngModel.$pristine);return value;});element.on('change',function(e){// special case since the ajax handling doesn't bind to the model correctly
	// this has to do with select2 (v3.5.2) using a hidden field instead of a select for ajax
	if(avDropdown.options.query){$timeout(function(){// look at moving this to the controller
	if(avDropdown.isRemoteMultiple()){avDropdown.setRemoteViewValue(e);}else{avDropdown.setViewValue(e);}},false,0);}});// fires ng-focus when select2-focus fires.
	element.on('select2-focus',function(){if(attrs.ngFocus){scope.$eval(scope.$eval(attrs.ngFocus));}});// fires ng-blur when select2-blur occurs.
	element.on('select2-blur',function(){if(attrs.ngBlur){scope.$eval(scope.$eval(attrs.ngBlur));}});// https://github.com/t0m/select2-bootstrap-css/issues/37#issuecomment-42714589
	element.on('select2-open',function(){// look for .has-success, .has-warning, .has-error
	// (really look for .has-* … which is good enough for the demo page, but obviously might interfere with other CSS-classes starting with "has-")
	if(element.parents('[class*="has-"]').length){// get all CSS-classes from the element where we found "has-*" and collect them in an array
	var classNames=(0,_jquery2.default)(this).parents('[class*="has-"]')[0].className.split(/\s+/);// go through the class names, find "has-"
	for(var i=0;i<classNames.length;++i){if(classNames[i].match('has-')){(0,_jquery2.default)('#select2-drop').addClass(classNames[i]);}}}});var _$render=ngModel.$render;ngModel.$render=function(){_$render();if(avDropdown.multiple){avDropdown.setValues();}else{avDropdown.setValue();}};if(avDropdown.options.closeOnResize){(0,_jquery2.default)(window).on('resize.select2',function(){element.select2('close');});}attrs.$observe('disabled',function(value){element.select2('enable',!value);});attrs.$observe('readonly',function(value){element.select2('readonly',!!value);});scope.$on('$destroy',function(){(0,_jquery2.default)(window).off('resize.select2');element.select2('destroy');});$timeout(function(){element.select2(avDropdown.options);});// If event listeners are specified in the options, set them up here
	if(avDropdown.options&&avDropdown.options.eventListeners){(0,_keys2.default)(avDropdown.options.eventListeners).forEach(function(eventId){var listener=avDropdown.options.eventListeners[eventId];if(_angular2.default.isFunction(listener)){element.on(eventId,listener);}});}}};});

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';__webpack_require__(145);__webpack_require__(227);__webpack_require__(144);

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';__webpack_require__(6);__webpack_require__(225);__webpack_require__(228);__webpack_require__(230);__webpack_require__(233);__webpack_require__(234);__webpack_require__(238);__webpack_require__(243);__webpack_require__(148);__webpack_require__(247);__webpack_require__(475);

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';__webpack_require__(231);__webpack_require__(147);__webpack_require__(146);

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);__webpack_require__(148);__webpack_require__(146);__webpack_require__(147);var _utils=__webpack_require__(55);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.factory('avModalManager',function($document){var AvModalManager=function(){function AvModalManager(){(0,_classCallCheck3.default)(this,AvModalManager);this.instances=[];}AvModalManager.prototype.add=function add(id){this.instances.push(id);};AvModalManager.prototype.remove=function remove(id){this.instances=this.instances.filter(function(instance){return instance!==id;});};AvModalManager.prototype.closeAll=function closeAll(){this.instances.forEach(function(id){var $el=_angular2.default.element($document.getElementById(id));if(!$el){return;}var bsModal=$el.data('bs.modal');if(bsModal){bsModal.removeBackdrop();bsModal.$body.removeClass('modal-open');bsModal.resetAdjustments();bsModal.resetScrollbar();}var avModal=$el.data('AvModal');if(avModal){avModal.destroy();}});};return AvModalManager;}();return new AvModalManager();});var ModalFactory=function ModalFactory($rootScope,$timeout,$compile,AV_MODAL,avTemplateCache,$q,avModalManager){var Modal=function(){function Modal(options){(0,_classCallCheck3.default)(this,Modal);var self=this;this.templateDefer=$q.defer();this.templatePromise=this.templateDefer.promise;this.options=_angular2.default.extend({},AV_MODAL.OPTIONS,{scope:$rootScope.$new()},options);avTemplateCache.get(options).then(function(_template){self.options.template=_template;self.build();});}Modal.create=function create(options){return new Modal(options);};Modal.prototype.build=function build(){var _this=this;var scope=this.options.scope;this.$element=_angular2.default.element(this.options.template);this.createId();this.scope();$compile(this.$element)(scope);$timeout(function(){_this.init();},0,true);// Append to container or <body>
	this.options.container?this.$element.appendTo(this.options.container):this.$element.appendTo('body');};Modal.prototype.init=function init(){this.$element.data('AvModal',this);this.templateDefer.resolve(true);// Initialize Bootstrap jQuery plugin
	this.$element.modal({'backdrop':this.options.backdrop,'keyboard':this.options.keyboard,'show':false,'remote':this.options.remote});this.listeners();if(_angular2.default.isUndefined(this.options.show)||this.options.show){this.$element.modal('show');}};// Add helpers to scope so clients can call internal methods
	Modal.prototype.scope=function scope(){var self=this;var scope=this.options.scope;scope.modalShow=function(){return self.show();};scope.modalToggle=function(){return self.toggle();};scope.modalHide=function(){return self.hide();};};Modal.prototype.listeners=function listeners(){var self=this;var scope=this.options.scope;var $element=this.$element;this.animationShowDefer=$q.defer();this.animationHideDefer=$q.defer();$element.on(AV_MODAL.BS_EVENTS.SHOW,function(event){scope.$emit(AV_MODAL.EVENTS.SHOW,event,self);});$element.on(AV_MODAL.BS_EVENTS.SHOWN,function(event){if(_angular2.default.isFunction(self.options.onShown)){self.options.onShown();}self.animationShowDefer.resolve(true);scope.$emit(AV_MODAL.EVENTS.SHOWN,event,self);});$element.on(AV_MODAL.BS_EVENTS.HIDE,function(event){scope.$emit(AV_MODAL.EVENTS.HIDE,event,self);});$element.on(AV_MODAL.BS_EVENTS.HIDDEN,function(event){if(_angular2.default.isFunction(self.options.onHidden)){self.options.onHidden.call(this);}self.animationHideDefer.resolve(true);scope.$emit(AV_MODAL.EVENTS.HIDDEN,event,self);scope.$evalAsync(function(){self.destroy();});});// Garbage collection
	scope.$on('$destroy',function(){avModalManager.remove(self.id);self.destroy();});};Modal.prototype.show=function show(){var _this2=this;this.animationShowDefer=$q.defer();this.templatePromise.then(function(){_this2.isShown()?_this2.animationShowDefer.resolve(true):_this2.$element.modal('show');});return this.animationShowDefer.promise;};Modal.prototype.hide=function hide(){var _this3=this;this.animationHideDefer=$q.defer();this.templatePromise.then(function(){!_this3.isShown()?_this3.animationHideDefer.resolve(true):_this3.$element.modal('hide');});return this.animationHideDefer.promise;};Modal.prototype.isShown=function isShown(){return this.$element.data(AV_MODAL.NAMESPACE.MODAL).isShown;};Modal.prototype.toggle=function toggle(){var _this4=this;return this.templatePromise.then(function(){return _this4.isShown()?_this4.hide():_this4.show();});};Modal.prototype.destroy=function destroy(){var _this5=this;return this.templatePromise.then(function(){_this5.$element.data('AvModal',null);_this5.$element.remove();});};Modal.prototype.createId=function createId(){// Create a unique id for the modal if not present or passed in via options
	var id=this.$element.attr('id');if(!id){// Get id from options or create a unique id
	id=this.options.id?this.options.id:(0,_utils.uuid)('av-modal-id');this.$element.attr('id',id);}this.id=id;avModalManager.add(id);};return Modal;}();return Modal;};_module2.default.factory('AvModal',ModalFactory);

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);__webpack_require__(474);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var AvHidePermissionController=function(){function AvHidePermissionController($element,avUserAuthorizations){(0,_classCallCheck3.default)(this,AvHidePermissionController);this.$element=$element;this.avUserAuthorizations=avUserAuthorizations;}AvHidePermissionController.prototype.$onInit=function $onInit(){this.$element.hide();};AvHidePermissionController.prototype.$onChanges=function $onChanges(changed){var _this=this;var permissions=changed.avHidePermission.currentValue;if(!_angular2.default.isArray(permissions)){permissions=(''+permissions).split(/\s+/);}this.avUserAuthorizations.isAnyAuthorized(permissions).then(function(isAuthorized){return _this.onSuccess(isAuthorized);},function(){return _this.onError();});};AvHidePermissionController.prototype.onSuccess=function onSuccess(isAuthorized){if(isAuthorized){this.$element.removeClass('ng-hide');this.$element.show();}else{this.$element.remove();}};AvHidePermissionController.prototype.onError=function onError(){this.$element.remove();};return AvHidePermissionController;}();_module2.default.directive('avHidePermission',function(){return{restrict:'A',controller:AvHidePermissionController,scope:{},bindToController:{avHidePermission:'<'// array or comma delimited supported
	},controllerAs:'vm'};});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';__webpack_require__(232);

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _keys=__webpack_require__(43);var _keys2=_interopRequireDefault(_keys);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.requires.push('ng.shims.placeholder');_module2.default.config(function($provide){$provide.decorator('placeholderDirective',function($delegate,$log){var directive=$delegate[0];var originalLink=directive.link;var newLink=function newLink(scope,element,attrs){if(originalLink&&(0,_keys2.default)(attrs).indexOf('avMask')>-1){$log.info('placeholder shim not running on an element due to avMask on same element');}else if(originalLink){originalLink.apply(this,arguments);}};directive.compile=function(){return newLink;};return $delegate;});});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.constant('AV_POPOVER',{NAME:'bs.popover'});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _extends2=__webpack_require__(28);var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var AvPopoverController=function(){function AvPopoverController($element,$scope,AV_POPOVER,$timeout,avPopoverConfig){(0,_classCallCheck3.default)(this,AvPopoverController);this.di={$element:$element,$scope:$scope,AV_POPOVER:AV_POPOVER,$timeout:$timeout};this.options=(0,_extends3.default)({},avPopoverConfig);}AvPopoverController.prototype.listeners=function listeners(){var _this=this;['show','shown','hide','hidden'].forEach(function(name){_this.di.$element.on(name+'.bs.popover',function(ev){return _this.di.$scope.$emit('av:popover:'+name,ev);});});this.di.$scope.$on('$destroy',this.destroy.bind(this));};AvPopoverController.prototype.plugin=function plugin(){return this.di.$element.data(this.di.AV_POPOVER.NAME);};AvPopoverController.prototype.show=function show(){this.di.$element.popover('show');};AvPopoverController.prototype.hide=function hide(){this.di.$element.popover('hide');};AvPopoverController.prototype.toggle=function toggle(){this.di.$element.popover('toggle');};AvPopoverController.prototype.destroy=function destroy(){this.di.$element.popover('destroy');};AvPopoverController.prototype.init=function init(){this.listeners();if(this.di.$scope.show){// give the UI a chance to settle first.
	this.di.$timeout(this.show.bind(this),0,false);if(this.di.$scope.delay&&this.di.$scope.delay.hide){this.di.$timeout(this.hide.bind(this),this.di.$scope.delay.hide,false);return;}// If no delay is found or cannot be parsed, set a default timeout so that the popover doesn't stick around forever
	this.di.$timeout(this.hide.bind(this),this.options.showDelay,false);}};return AvPopoverController;}();_module2.default.controller('AvPopoverController',AvPopoverController);

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.directive('avPopover',function(){return{restrict:'A',controller:'AvPopoverController',scope:{show:'=',delay:'='},link:function link(scope,element,attrs,avPopover){var options={};scope.$evalAsync(function(){element.popover(_angular2.default.extend({},options,{html:true}));avPopover.init();});}};});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';__webpack_require__(235);__webpack_require__(239);__webpack_require__(236);__webpack_require__(237);

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _extends2=__webpack_require__(28);var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var config={showDelay:10000};var AvPopoverConfig=function(){function AvPopoverConfig(){(0,_classCallCheck3.default)(this,AvPopoverConfig);}AvPopoverConfig.prototype.set=function set(options){(0,_extends3.default)(config,options);};AvPopoverConfig.prototype.$get=function $get(){return(0,_extends3.default)({},config);};return AvPopoverConfig;}();_module2.default.provider('avPopoverConfig',AvPopoverConfig);

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.constant('AV_TOOLTIP',{NAME:'bs.tooltip'});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _extends2=__webpack_require__(28);var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var AvTooltipController=function(){function AvTooltipController($element,$scope,AV_TOOLTIP,$timeout,avTooltipConfig){(0,_classCallCheck3.default)(this,AvTooltipController);this.di={$element:$element,$scope:$scope,AV_TOOLTIP:AV_TOOLTIP,$timeout:$timeout};this.options=(0,_extends3.default)({},avTooltipConfig);}AvTooltipController.prototype.listeners=function listeners(){var _this=this;['show','shown','hide','hidden'].forEach(function(name){_this.di.$element.on(name+'.bs.tooltip',function(ev){return _this.di.$scope.$emit('av:tooltip:'+name,ev);});});this.di.$scope.$on('$destroy',this.destroy.bind(this));};AvTooltipController.prototype.plugin=function plugin(){return this.di.$element.data(this.di.AV_TOOLTIP.NAME);};AvTooltipController.prototype.show=function show(){this.di.$element.tooltip('show');};AvTooltipController.prototype.hide=function hide(){this.di.$element.tooltip('hide');};AvTooltipController.prototype.toggle=function toggle(){this.di.$element.tooltip('toggle');};AvTooltipController.prototype.destroy=function destroy(){this.di.$element.tooltip('destroy');};AvTooltipController.prototype.init=function init(){this.listeners();if(this.di.$scope.show){// give the UI a chance to settle first.
	this.di.$timeout(this.show.bind(this),0,false);if(this.di.$scope.delay&&this.di.$scope.delay.hide){this.di.$timeout(this.hide.bind(this),this.di.$scope.delay.hide,false);return;}// If no delay is found or cannot be parsed, set a default timeout so that the tooltip doesn't stick around forever
	this.di.$timeout(this.hide.bind(this),this.options.showDelay,false);}};return AvTooltipController;}();_module2.default.controller('AvTooltipController',AvTooltipController);

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _angular=__webpack_require__(8);var _angular2=_interopRequireDefault(_angular);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_module2.default.directive('avTooltip',function(){return{restrict:'A',controller:'AvTooltipController',scope:{show:'=',delay:'='},link:function link(scope,element,attrs,avTooltip){var options={};scope.$evalAsync(function(){element.tooltip(_angular2.default.extend({},options,{html:true}));avTooltip.init();});}};});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';__webpack_require__(240);__webpack_require__(244);__webpack_require__(241);__webpack_require__(242);

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _extends2=__webpack_require__(28);var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var config={showDelay:10000};var AvTooltipConfig=function(){function AvTooltipConfig(){(0,_classCallCheck3.default)(this,AvTooltipConfig);}AvTooltipConfig.prototype.set=function set(options){(0,_extends3.default)(config,options);};AvTooltipConfig.prototype.$get=function $get(){return(0,_extends3.default)({},config);};return AvTooltipConfig;}();_module2.default.provider('avTooltipConfig',AvTooltipConfig);

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _keys=__webpack_require__(43);var _keys2=_interopRequireDefault(_keys);var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(14);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(13);var _inherits3=_interopRequireDefault(_inherits2);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);var _base=__webpack_require__(75);var _base2=_interopRequireDefault(_base);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var AvValContainerController=function(_Base){(0,_inherits3.default)(AvValContainerController,_Base);function AvValContainerController(){(0,_classCallCheck3.default)(this,AvValContainerController);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return(0,_possibleConstructorReturn3.default)(this,_Base.call.apply(_Base,[this].concat(args)));}AvValContainerController.prototype.message=function message(context){var _this2=this;var ngModel=context.ngModel;var message=null;var violations=(0,_keys2.default)(ngModel.$error);if(violations.length){var validator=violations[0];var constraint=ngModel.$validators[validator]&&ngModel.$validators[validator].constraint;if(constraint){message=constraint.message;}else{message=this.av.AV_UI.FALLBACK_VALIDATION_MESSAGE;}}else{message=null;}// $timeout is needed to update the UI from $broadcast events
	this.av.$timeout(function(){_this2.av.$scope.vm.message=_this2.av.$sce.trustAsHtml(message);});};return AvValContainerController;}(_base2.default);AvValContainerController.$inject=['$sce','$scope','$timeout','AV_UI'];_module2.default.directive('avValContainer',function(){return{restrict:'A',controller:AvValContainerController,template:'<p class="help-block" data-ng-bind-html="vm.message"></p>',replace:true,scope:{},link:function link(scope){scope.vm={message:null,id:null};}};});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _extends2=__webpack_require__(28);var _extends3=_interopRequireDefault(_extends2);var _classCallCheck2=__webpack_require__(2);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _module=__webpack_require__(6);var _module2=_interopRequireDefault(_module);__webpack_require__(93);__webpack_require__(76);__webpack_require__(150);__webpack_require__(151);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var AvValController=function(){function AvValController(){(0,_classCallCheck3.default)(this,AvValController);this.ngForm=null;this.rulesSchema=null;this.avValOn=null;this.avValDebounce=null;this.avValInvalid=false;}AvValController.prototype.init=function init(options){(0,_extends3.default)(this,options);};AvValController.prototype.reset=function reset(){this.ngForm.$setPristine();this.ngForm.$submitted=false;};return AvValController;}();_module2.default.controller('AvValFormController',AvValController);// $pristine - True if user has not interacted with the form yet.
	// $dirty - True if user has already interacted with the form.
	// $valid - True if all of the containing forms and controls are valid.
	// $invalid - True if at least one containing control or form is invalid.
	// $pending - True if at least one containing control or form is pending.
	// $submitted - True if user has submitted the form even if its invalid.
	//
	_module2.default.directive('avValForm',function($log,$timeout,$parse,AV_VAL,avValAdapter,$rootScope){return{restrict:'A',priority:10,require:['form','avValForm'],controller:'AvValFormController',compile:function compile(){return{pre:function pre(scope,iEl,iAttrs,controllers){var ruleFn=$parse(iAttrs.avValForm);var rulesSchema=ruleFn(scope);var ngForm=controllers[0];var avForm=controllers[1];rulesSchema=rulesSchema||iAttrs.avValForm;// interpolated rule from scope || fixed string
	if(!rulesSchema){$log.error('avValForm requires a rules schema in order to run the proper set of validation rules');return;}scope.$watch(ruleFn,function(_rulesSchema,_oldRulesSchema){if(_rulesSchema!==_oldRulesSchema){$timeout(function(){$log.info('avValForm revalidate');$rootScope.$broadcast(AV_VAL.EVENTS.REVALIDATE);});}});// Allow form attributes to define the validation behavior of the form fields
	// inside it.  If `av-val-on` or `av-val-debounce` are on the form then all form
	// fields inside the form would inherit this behavior.
	avForm.avValOn=iAttrs.avValOn||null;avForm.avValDebounce=iAttrs.avValDebounce||null;// Allows fields to update with invalid data for dirty form saving
	avForm.avValInvalid=iAttrs.avValInvalid||false;avForm.init({ngForm:ngForm,rulesSchema:rulesSchema});},post:function post(scope,el,iAttrs,controllers){// Prevent HTML5 validation from kicking in
	el.attr('novalidate','novalidate');// Disable ng-submit or ng-click handlers and store the function to call for submitting
	var fn=void 0;if(iAttrs.ngSubmit){// Disable ng-submit event
	el.off('submit');fn=$parse(iAttrs.ngSubmit,null,true);}else if(iAttrs.ngClick){// Disable ng-click event
	el.off('click');fn=$parse(iAttrs.ngClick,null,true);}var ngForm=controllers[0];var avForm=controllers[1];scope.$on(AV_VAL.EVENTS.RESET,function(){avForm.reset();});var watcher=function watcher(){return ngForm.$pending;};var unwatch=void 0;scope.$watch(watcher,function(pending){if(!pending){// pendingWatch();
	// performSubmit();
	}});el.bind('submit',function(event){scope.$broadcast(AV_VAL.EVENTS.SUBMITTED);ngForm.$setSubmitted();if(ngForm.$invalid||ngForm.$pending){// scope.$broadcast(AV_VAL.EVENTS.FAILED);
	// $log.info('avValForm is invalid.  Preventing default submit action');
	event.preventDefault();event.stopImmediatePropagation();scope.$broadcast(event);if(ngForm.$pending){unwatch=scope.$watch(watcher,function(pending){if(!pending){avValAdapter.scroll(el);}});}else{avValAdapter.scroll(el);}return;}ngForm.$setPristine();if(!fn){return;}var callback=function callback(){fn(scope,{$event:event});};scope.$apply(callback);});scope.$on('$destroy',function(){try{unwatch();}catch(e){/* no op */}});}};}};});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';__webpack_require__(149);__webpack_require__(150);__webpack_require__(76);__webpack_require__(245);__webpack_require__(151);__webpack_require__(246);

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(473);
	
	__webpack_require__(478);
	
	__webpack_require__(255);
	
	/* eslint max-len: 0 */
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	// Should be removed in the next major release:
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(256), __esModule: true };

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(257), __esModule: true };

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(258), __esModule: true };

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(260), __esModule: true };

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(261), __esModule: true };

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(262), __esModule: true };

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(302);
	module.exports = __webpack_require__(30).RegExp.escape;

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(33)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(283);
	module.exports = __webpack_require__(33).Object.assign;

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(284);
	var $Object = __webpack_require__(33).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(285);
	module.exports = __webpack_require__(33).Object.keys;

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(286);
	module.exports = __webpack_require__(33).Object.setPrototypeOf;

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(289);
	__webpack_require__(287);
	__webpack_require__(290);
	__webpack_require__(291);
	module.exports = __webpack_require__(33).Symbol;

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(288);
	__webpack_require__(292);
	module.exports = __webpack_require__(108).f('iterator');

/***/ },
/* 263 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 264 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(45)
	  , toLength  = __webpack_require__(281)
	  , toIndex   = __webpack_require__(280);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(61)
	  , gOPS    = __webpack_require__(100)
	  , pIE     = __webpack_require__(77);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(38).document && document.documentElement;

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(153);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(99)
	  , descriptor     = __webpack_require__(78)
	  , setToStringTag = __webpack_require__(101)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(59)(IteratorPrototype, __webpack_require__(62)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 270 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(61)
	  , toIObject = __webpack_require__(45);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(79)('meta')
	  , isObject = __webpack_require__(71)
	  , has      = __webpack_require__(44)
	  , setDesc  = __webpack_require__(60).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(58)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(61)
	  , gOPS     = __webpack_require__(100)
	  , pIE      = __webpack_require__(77)
	  , toObject = __webpack_require__(105)
	  , IObject  = __webpack_require__(157)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(58)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(60)
	  , anObject = __webpack_require__(70)
	  , getKeys  = __webpack_require__(61);
	
	module.exports = __webpack_require__(56) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(45)
	  , gOPN      = __webpack_require__(160).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(44)
	  , toObject    = __webpack_require__(105)
	  , IE_PROTO    = __webpack_require__(102)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(57)
	  , core    = __webpack_require__(33)
	  , fails   = __webpack_require__(58);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(71)
	  , anObject = __webpack_require__(70);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(154)(Function.call, __webpack_require__(159).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(104)
	  , defined   = __webpack_require__(95);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(104)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(104)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(264)
	  , step             = __webpack_require__(270)
	  , Iterators        = __webpack_require__(97)
	  , toIObject        = __webpack_require__(45);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(158)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(57);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(273)});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(57)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(99)});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(105)
	  , $keys    = __webpack_require__(61);
	
	__webpack_require__(277)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(57);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(278).set});

/***/ },
/* 287 */
/***/ function(module, exports) {



/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(279)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(158)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(38)
	  , has            = __webpack_require__(44)
	  , DESCRIPTORS    = __webpack_require__(56)
	  , $export        = __webpack_require__(57)
	  , redefine       = __webpack_require__(162)
	  , META           = __webpack_require__(272).KEY
	  , $fails         = __webpack_require__(58)
	  , shared         = __webpack_require__(103)
	  , setToStringTag = __webpack_require__(101)
	  , uid            = __webpack_require__(79)
	  , wks            = __webpack_require__(62)
	  , wksExt         = __webpack_require__(108)
	  , wksDefine      = __webpack_require__(107)
	  , keyOf          = __webpack_require__(271)
	  , enumKeys       = __webpack_require__(266)
	  , isArray        = __webpack_require__(268)
	  , anObject       = __webpack_require__(70)
	  , toIObject      = __webpack_require__(45)
	  , toPrimitive    = __webpack_require__(106)
	  , createDesc     = __webpack_require__(78)
	  , _create        = __webpack_require__(99)
	  , gOPNExt        = __webpack_require__(275)
	  , $GOPD          = __webpack_require__(159)
	  , $DP            = __webpack_require__(60)
	  , $keys          = __webpack_require__(61)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(160).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(77).f  = $propertyIsEnumerable;
	  __webpack_require__(100).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(98)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(59)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107)('asyncIterator');

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(107)('observable');

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(282);
	var global        = __webpack_require__(38)
	  , hide          = __webpack_require__(59)
	  , Iterators     = __webpack_require__(97)
	  , TO_STRING_TAG = __webpack_require__(62)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(9)
	  , isArray  = __webpack_require__(117)
	  , SPECIES  = __webpack_require__(10)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(293);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(3)
	  , toPrimitive = __webpack_require__(32)
	  , NUMBER      = 'number';
	
	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(50)
	  , gOPS    = __webpack_require__(88)
	  , pIE     = __webpack_require__(73);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(50)
	  , toIObject = __webpack_require__(22);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(299)
	  , invoke    = __webpack_require__(84)
	  , aFunction = __webpack_require__(19);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);

/***/ },
/* 300 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(64)
	  , ITERATOR  = __webpack_require__(10)('iterator')
	  , Iterators = __webpack_require__(46);
	module.exports = __webpack_require__(30).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(1)
	  , $re     = __webpack_require__(300)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(1);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(164)});
	
	__webpack_require__(63)('copyWithin');

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $every  = __webpack_require__(29)(4);
	
	$export($export.P + $export.F * !__webpack_require__(27)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(1);
	
	$export($export.P, 'Array', {fill: __webpack_require__(109)});
	
	__webpack_require__(63)('fill');

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $filter = __webpack_require__(29)(2);
	
	$export($export.P + $export.F * !__webpack_require__(27)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(1)
	  , $find   = __webpack_require__(29)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(63)(KEY);

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(1)
	  , $find   = __webpack_require__(29)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(63)(KEY);

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(1)
	  , $forEach = __webpack_require__(29)(0)
	  , STRICT   = __webpack_require__(27)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(34)
	  , $export        = __webpack_require__(1)
	  , toObject       = __webpack_require__(16)
	  , call           = __webpack_require__(172)
	  , isArrayIter    = __webpack_require__(116)
	  , toLength       = __webpack_require__(15)
	  , createProperty = __webpack_require__(110)
	  , getIterFn      = __webpack_require__(133);
	
	$export($export.S + $export.F * !__webpack_require__(86)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(1)
	  , $indexOf      = __webpack_require__(80)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(27)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Array', {isArray: __webpack_require__(117)});

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(1)
	  , toIObject = __webpack_require__(22)
	  , arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(72) != Object || !__webpack_require__(27)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(1)
	  , toIObject     = __webpack_require__(22)
	  , toInteger     = __webpack_require__(42)
	  , toLength      = __webpack_require__(15)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(27)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $map    = __webpack_require__(29)(1);
	
	$export($export.P + $export.F * !__webpack_require__(27)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(1)
	  , createProperty = __webpack_require__(110);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $reduce = __webpack_require__(166);
	
	$export($export.P + $export.F * !__webpack_require__(27)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $reduce = __webpack_require__(166);
	
	$export($export.P + $export.F * !__webpack_require__(27)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(1)
	  , html       = __webpack_require__(114)
	  , cof        = __webpack_require__(25)
	  , toIndex    = __webpack_require__(53)
	  , toLength   = __webpack_require__(15)
	  , arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $some   = __webpack_require__(29)(3);
	
	$export($export.P + $export.F * !__webpack_require__(27)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(1)
	  , aFunction = __webpack_require__(19)
	  , toObject  = __webpack_require__(16)
	  , fails     = __webpack_require__(7)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(27)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(52)('Array');

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(1)
	  , fails   = __webpack_require__(7)
	  , getTime = Date.prototype.getTime;
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(1)
	  , toObject    = __webpack_require__(16)
	  , toPrimitive = __webpack_require__(32);
	
	$export($export.P + $export.F * __webpack_require__(7)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(10)('toPrimitive')
	  , proto        = Date.prototype;
	
	if(!(TO_PRIMITIVE in proto))__webpack_require__(18)(proto, TO_PRIMITIVE, __webpack_require__(295));

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(20)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(1);
	
	$export($export.P, 'Function', {bind: __webpack_require__(167)});

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(9)
	  , getPrototypeOf = __webpack_require__(24)
	  , HAS_INSTANCE   = __webpack_require__(10)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(12).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(12).f
	  , createDesc = __webpack_require__(41)
	  , has        = __webpack_require__(17)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(11) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(1)
	  , log1p   = __webpack_require__(174)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(1)
	  , $asinh  = Math.asinh;
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(1)
	  , $atanh  = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(1)
	  , sign    = __webpack_require__(122);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(1)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(1)
	  , $expm1  = __webpack_require__(121);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(1)
	  , sign      = __webpack_require__(122)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(1)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(1)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(174)});

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {sign: __webpack_require__(122)});

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(1)
	  , expm1   = __webpack_require__(121)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(1)
	  , expm1   = __webpack_require__(121)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(5)
	  , has               = __webpack_require__(17)
	  , cof               = __webpack_require__(25)
	  , inheritIfRequired = __webpack_require__(115)
	  , toPrimitive       = __webpack_require__(32)
	  , fails             = __webpack_require__(7)
	  , gOPN              = __webpack_require__(49).f
	  , gOPD              = __webpack_require__(23).f
	  , dP                = __webpack_require__(12).f
	  , $trim             = __webpack_require__(67).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(48)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(11) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(20)(global, NUMBER, $Number);
	}

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(1)
	  , _isFinite = __webpack_require__(5).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(118)});

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(1)
	  , isInteger = __webpack_require__(118)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(1)
	  , $parseFloat = __webpack_require__(181);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(1)
	  , $parseInt = __webpack_require__(182);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(1)
	  , anInstance   = __webpack_require__(39)
	  , toInteger    = __webpack_require__(42)
	  , aNumberValue = __webpack_require__(163)
	  , repeat       = __webpack_require__(128)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';
	
	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(7)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(1)
	  , $fails       = __webpack_require__(7)
	  , aNumberValue = __webpack_require__(163)
	  , $toPrecision = 1..toPrecision;
	
	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(1);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(175)});

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(48)});

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(11), 'Object', {defineProperties: __webpack_require__(176)});

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(11), 'Object', {defineProperty: __webpack_require__(12).f});

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(9)
	  , meta     = __webpack_require__(40).onFreeze;
	
	__webpack_require__(31)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(22)
	  , $getOwnPropertyDescriptor = __webpack_require__(23).f;
	
	__webpack_require__(31)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(31)('getOwnPropertyNames', function(){
	  return __webpack_require__(177).f;
	});

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(16)
	  , $getPrototypeOf = __webpack_require__(24);
	
	__webpack_require__(31)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(9);
	
	__webpack_require__(31)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(9);
	
	__webpack_require__(31)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(9);
	
	__webpack_require__(31)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(1);
	$export($export.S, 'Object', {is: __webpack_require__(183)});

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(16)
	  , $keys    = __webpack_require__(50);
	
	__webpack_require__(31)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(9)
	  , meta     = __webpack_require__(40).onFreeze;
	
	__webpack_require__(31)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(9)
	  , meta     = __webpack_require__(40).onFreeze;
	
	__webpack_require__(31)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(1);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(89).set});

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(64)
	  , test    = {};
	test[__webpack_require__(10)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(20)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(1)
	  , $parseFloat = __webpack_require__(181);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(1)
	  , $parseInt = __webpack_require__(182);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(47)
	  , global             = __webpack_require__(5)
	  , ctx                = __webpack_require__(34)
	  , classof            = __webpack_require__(64)
	  , $export            = __webpack_require__(1)
	  , isObject           = __webpack_require__(9)
	  , anObject           = __webpack_require__(3)
	  , aFunction          = __webpack_require__(19)
	  , anInstance         = __webpack_require__(39)
	  , forOf              = __webpack_require__(65)
	  , setProto           = __webpack_require__(89).set
	  , speciesConstructor = __webpack_require__(125)
	  , task               = __webpack_require__(130).set
	  , microtask          = __webpack_require__(123)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(10)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(51)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(66)($Promise, PROMISE);
	__webpack_require__(52)(PROMISE);
	Wrapper = __webpack_require__(30)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(86)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(1)
	  , aFunction = __webpack_require__(19)
	  , anObject  = __webpack_require__(3)
	  , _apply    = Function.apply;
	
	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(aFunction(target), thisArgument, anObject(argumentsList));
	  }
	});

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export   = __webpack_require__(1)
	  , create    = __webpack_require__(48)
	  , aFunction = __webpack_require__(19)
	  , anObject  = __webpack_require__(3)
	  , isObject  = __webpack_require__(9)
	  , bind      = __webpack_require__(167);
	
	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  function F(){}
	  return !(Reflect.construct(function(){}, [], F) instanceof F);
	}), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(12)
	  , $export     = __webpack_require__(1)
	  , anObject    = __webpack_require__(3)
	  , toPrimitive = __webpack_require__(32);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(7)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(1)
	  , gOPD     = __webpack_require__(23).f
	  , anObject = __webpack_require__(3);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(1)
	  , anObject = __webpack_require__(3);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(119)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(23)
	  , $export  = __webpack_require__(1)
	  , anObject = __webpack_require__(3);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(1)
	  , getProto = __webpack_require__(24)
	  , anObject = __webpack_require__(3);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(23)
	  , getPrototypeOf = __webpack_require__(24)
	  , has            = __webpack_require__(17)
	  , $export        = __webpack_require__(1)
	  , isObject       = __webpack_require__(9)
	  , anObject       = __webpack_require__(3);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(1)
	  , anObject      = __webpack_require__(3)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(180)});

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(1)
	  , anObject           = __webpack_require__(3)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(1)
	  , setProto = __webpack_require__(89);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(12)
	  , gOPD           = __webpack_require__(23)
	  , getPrototypeOf = __webpack_require__(24)
	  , has            = __webpack_require__(17)
	  , $export        = __webpack_require__(1)
	  , createDesc     = __webpack_require__(41)
	  , anObject       = __webpack_require__(3)
	  , isObject       = __webpack_require__(9);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(5)
	  , inheritIfRequired = __webpack_require__(115)
	  , dP                = __webpack_require__(12).f
	  , gOPN              = __webpack_require__(49).f
	  , isRegExp          = __webpack_require__(85)
	  , $flags            = __webpack_require__(83)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(11) && (!CORRECT_NEW || __webpack_require__(7)(function(){
	  re2[__webpack_require__(10)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(20)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(52)('RegExp');

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(82)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(82)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(82)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(82)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(85)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(187);
	var anObject    = __webpack_require__(3)
	  , $flags      = __webpack_require__(83)
	  , DESCRIPTORS = __webpack_require__(11)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];
	
	var define = function(fn){
	  __webpack_require__(20)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(7)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(21)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(21)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(21)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(21)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $at     = __webpack_require__(126)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(1)
	  , toLength  = __webpack_require__(15)
	  , context   = __webpack_require__(127)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(113)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(21)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(21)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(21)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(1)
	  , toIndex        = __webpack_require__(53)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(1)
	  , context  = __webpack_require__(127)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(113)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(21)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(126)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(120)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(21)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(1)
	  , toIObject = __webpack_require__(22)
	  , toLength  = __webpack_require__(15);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(128)
	});

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(21)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(1)
	  , toLength    = __webpack_require__(15)
	  , context     = __webpack_require__(127)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(113)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(21)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(21)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(21)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(67)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(5)
	  , has            = __webpack_require__(17)
	  , DESCRIPTORS    = __webpack_require__(11)
	  , $export        = __webpack_require__(1)
	  , redefine       = __webpack_require__(20)
	  , META           = __webpack_require__(40).KEY
	  , $fails         = __webpack_require__(7)
	  , shared         = __webpack_require__(90)
	  , setToStringTag = __webpack_require__(66)
	  , uid            = __webpack_require__(54)
	  , wks            = __webpack_require__(10)
	  , wksExt         = __webpack_require__(185)
	  , wksDefine      = __webpack_require__(132)
	  , keyOf          = __webpack_require__(297)
	  , enumKeys       = __webpack_require__(296)
	  , isArray        = __webpack_require__(117)
	  , anObject       = __webpack_require__(3)
	  , toIObject      = __webpack_require__(22)
	  , toPrimitive    = __webpack_require__(32)
	  , createDesc     = __webpack_require__(41)
	  , _create        = __webpack_require__(48)
	  , gOPNExt        = __webpack_require__(177)
	  , $GOPD          = __webpack_require__(23)
	  , $DP            = __webpack_require__(12)
	  , $keys          = __webpack_require__(50)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(49).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(73).f  = $propertyIsEnumerable;
	  __webpack_require__(88).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(47)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(1)
	  , $typed       = __webpack_require__(91)
	  , buffer       = __webpack_require__(131)
	  , anObject     = __webpack_require__(3)
	  , toIndex      = __webpack_require__(53)
	  , toLength     = __webpack_require__(15)
	  , isObject     = __webpack_require__(9)
	  , TYPED_ARRAY  = __webpack_require__(10)('typed_array')
	  , ArrayBuffer  = __webpack_require__(5).ArrayBuffer
	  , speciesConstructor = __webpack_require__(125)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(7)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});
	
	__webpack_require__(52)(ARRAY_BUFFER);

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1);
	$export($export.G + $export.W + $export.F * !__webpack_require__(91).ABV, {
	  DataView: __webpack_require__(131).DataView
	});

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(170);
	
	// 23.4 WeakSet Objects
	__webpack_require__(81)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(1)
	  , $includes = __webpack_require__(80)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(63)('includes');

/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(1)
	  , microtask = __webpack_require__(123)()
	  , process   = __webpack_require__(5).process
	  , isNode    = __webpack_require__(25)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(1)
	  , cof     = __webpack_require__(25);
	
	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(1);
	
	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(169)('Map')});

/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(1)
	  , toObject        = __webpack_require__(16)
	  , aFunction       = __webpack_require__(19)
	  , $defineProperty = __webpack_require__(12);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(11) && $export($export.P + __webpack_require__(87), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(1)
	  , toObject        = __webpack_require__(16)
	  , aFunction       = __webpack_require__(19)
	  , $defineProperty = __webpack_require__(12);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(11) && $export($export.P + __webpack_require__(87), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(1)
	  , $entries = __webpack_require__(179)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(1)
	  , ownKeys        = __webpack_require__(180)
	  , toIObject      = __webpack_require__(22)
	  , gOPD           = __webpack_require__(23)
	  , createProperty = __webpack_require__(110);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(1)
	  , toObject                 = __webpack_require__(16)
	  , toPrimitive              = __webpack_require__(32)
	  , getPrototypeOf           = __webpack_require__(24)
	  , getOwnPropertyDescriptor = __webpack_require__(23).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(11) && $export($export.P + __webpack_require__(87), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(1)
	  , toObject                 = __webpack_require__(16)
	  , toPrimitive              = __webpack_require__(32)
	  , getPrototypeOf           = __webpack_require__(24)
	  , getOwnPropertyDescriptor = __webpack_require__(23).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(11) && $export($export.P + __webpack_require__(87), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(1)
	  , $values = __webpack_require__(179)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(1)
	  , global      = __webpack_require__(5)
	  , core        = __webpack_require__(30)
	  , microtask   = __webpack_require__(123)()
	  , OBSERVABLE  = __webpack_require__(10)('observable')
	  , aFunction   = __webpack_require__(19)
	  , anObject    = __webpack_require__(3)
	  , anInstance  = __webpack_require__(39)
	  , redefineAll = __webpack_require__(51)
	  , hide        = __webpack_require__(18)
	  , forOf       = __webpack_require__(65)
	  , RETURN      = forOf.RETURN;
	
	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});
	
	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function(){ return this; });
	
	$export($export.G, {Observable: $Observable});
	
	__webpack_require__(52)('Observable');

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(35)
	  , anObject                  = __webpack_require__(3)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(35)
	  , anObject               = __webpack_require__(3)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;
	
	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(188)
	  , from                    = __webpack_require__(165)
	  , metadata                = __webpack_require__(35)
	  , anObject                = __webpack_require__(3)
	  , getPrototypeOf          = __webpack_require__(24)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(35)
	  , anObject               = __webpack_require__(3)
	  , getPrototypeOf         = __webpack_require__(24)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(35)
	  , anObject                = __webpack_require__(3)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(35)
	  , anObject               = __webpack_require__(3)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(35)
	  , anObject               = __webpack_require__(3)
	  , getPrototypeOf         = __webpack_require__(24)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(35)
	  , anObject               = __webpack_require__(3)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(35)
	  , anObject                  = __webpack_require__(3)
	  , aFunction                 = __webpack_require__(19)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(1);
	
	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(169)('Set')});

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(1)
	  , $at     = __webpack_require__(126)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(1)
	  , defined     = __webpack_require__(26)
	  , toLength    = __webpack_require__(15)
	  , isRegExp    = __webpack_require__(85)
	  , getFlags    = __webpack_require__(83)
	  , RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(119)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(1)
	  , $pad    = __webpack_require__(184);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(1)
	  , $pad    = __webpack_require__(184);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(67)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(67)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(132)('asyncIterator');

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(132)('observable');

/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(1);
	
	$export($export.S, 'System', {global: __webpack_require__(5)});

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(134)
	  , redefine      = __webpack_require__(20)
	  , global        = __webpack_require__(5)
	  , hide          = __webpack_require__(18)
	  , Iterators     = __webpack_require__(46)
	  , wks           = __webpack_require__(10)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1)
	  , $task   = __webpack_require__(130);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(5)
	  , $export    = __webpack_require__(1)
	  , invoke     = __webpack_require__(84)
	  , partial    = __webpack_require__(298)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(422);
	__webpack_require__(361);
	__webpack_require__(363);
	__webpack_require__(362);
	__webpack_require__(365);
	__webpack_require__(367);
	__webpack_require__(372);
	__webpack_require__(366);
	__webpack_require__(364);
	__webpack_require__(374);
	__webpack_require__(373);
	__webpack_require__(369);
	__webpack_require__(370);
	__webpack_require__(368);
	__webpack_require__(360);
	__webpack_require__(371);
	__webpack_require__(375);
	__webpack_require__(376);
	__webpack_require__(328);
	__webpack_require__(330);
	__webpack_require__(329);
	__webpack_require__(378);
	__webpack_require__(377);
	__webpack_require__(348);
	__webpack_require__(358);
	__webpack_require__(359);
	__webpack_require__(349);
	__webpack_require__(350);
	__webpack_require__(351);
	__webpack_require__(352);
	__webpack_require__(353);
	__webpack_require__(354);
	__webpack_require__(355);
	__webpack_require__(356);
	__webpack_require__(357);
	__webpack_require__(331);
	__webpack_require__(332);
	__webpack_require__(333);
	__webpack_require__(334);
	__webpack_require__(335);
	__webpack_require__(336);
	__webpack_require__(337);
	__webpack_require__(338);
	__webpack_require__(339);
	__webpack_require__(340);
	__webpack_require__(341);
	__webpack_require__(342);
	__webpack_require__(343);
	__webpack_require__(344);
	__webpack_require__(345);
	__webpack_require__(346);
	__webpack_require__(347);
	__webpack_require__(409);
	__webpack_require__(414);
	__webpack_require__(421);
	__webpack_require__(412);
	__webpack_require__(404);
	__webpack_require__(405);
	__webpack_require__(410);
	__webpack_require__(415);
	__webpack_require__(417);
	__webpack_require__(400);
	__webpack_require__(401);
	__webpack_require__(402);
	__webpack_require__(403);
	__webpack_require__(406);
	__webpack_require__(407);
	__webpack_require__(408);
	__webpack_require__(411);
	__webpack_require__(413);
	__webpack_require__(416);
	__webpack_require__(418);
	__webpack_require__(419);
	__webpack_require__(420);
	__webpack_require__(323);
	__webpack_require__(325);
	__webpack_require__(324);
	__webpack_require__(327);
	__webpack_require__(326);
	__webpack_require__(312);
	__webpack_require__(310);
	__webpack_require__(316);
	__webpack_require__(313);
	__webpack_require__(319);
	__webpack_require__(321);
	__webpack_require__(309);
	__webpack_require__(315);
	__webpack_require__(306);
	__webpack_require__(320);
	__webpack_require__(304);
	__webpack_require__(318);
	__webpack_require__(317);
	__webpack_require__(311);
	__webpack_require__(314);
	__webpack_require__(303);
	__webpack_require__(305);
	__webpack_require__(308);
	__webpack_require__(307);
	__webpack_require__(322);
	__webpack_require__(134);
	__webpack_require__(394);
	__webpack_require__(399);
	__webpack_require__(187);
	__webpack_require__(395);
	__webpack_require__(396);
	__webpack_require__(397);
	__webpack_require__(398);
	__webpack_require__(379);
	__webpack_require__(186);
	__webpack_require__(188);
	__webpack_require__(189);
	__webpack_require__(434);
	__webpack_require__(423);
	__webpack_require__(424);
	__webpack_require__(429);
	__webpack_require__(432);
	__webpack_require__(433);
	__webpack_require__(427);
	__webpack_require__(430);
	__webpack_require__(428);
	__webpack_require__(431);
	__webpack_require__(425);
	__webpack_require__(426);
	__webpack_require__(380);
	__webpack_require__(381);
	__webpack_require__(382);
	__webpack_require__(383);
	__webpack_require__(384);
	__webpack_require__(387);
	__webpack_require__(385);
	__webpack_require__(386);
	__webpack_require__(388);
	__webpack_require__(389);
	__webpack_require__(390);
	__webpack_require__(391);
	__webpack_require__(393);
	__webpack_require__(392);
	__webpack_require__(435);
	__webpack_require__(461);
	__webpack_require__(464);
	__webpack_require__(463);
	__webpack_require__(465);
	__webpack_require__(466);
	__webpack_require__(462);
	__webpack_require__(467);
	__webpack_require__(468);
	__webpack_require__(446);
	__webpack_require__(449);
	__webpack_require__(445);
	__webpack_require__(443);
	__webpack_require__(444);
	__webpack_require__(447);
	__webpack_require__(448);
	__webpack_require__(438);
	__webpack_require__(460);
	__webpack_require__(469);
	__webpack_require__(437);
	__webpack_require__(439);
	__webpack_require__(441);
	__webpack_require__(440);
	__webpack_require__(442);
	__webpack_require__(451);
	__webpack_require__(452);
	__webpack_require__(454);
	__webpack_require__(453);
	__webpack_require__(456);
	__webpack_require__(455);
	__webpack_require__(457);
	__webpack_require__(458);
	__webpack_require__(459);
	__webpack_require__(436);
	__webpack_require__(450);
	__webpack_require__(472);
	__webpack_require__(471);
	__webpack_require__(470);
	module.exports = __webpack_require__(30);

/***/ },
/* 474 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 475 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 476 */
/***/ function(module, exports) {

	var path = 'src/ui/modal/modal.html';
	var html = "<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\">\n  <div class=\"modal-dialog\" ng-class=\"{'modal-lg': size === 'lg', 'modal-sm': size === 'sm'}\">\n    <div class=\"modal-content\" ng-transclude>\n      <!--\n      <div class=\"modal-header\"></div>\n      <div class=\"modal-body\"></div>\n      <div class=\"modal-footer\"></div>\n      -->\n    </div>\n  </div>\n</div>\n\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 477 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;
	
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(477)))

/***/ },
/* 479 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*
	Copyright 2012 Igor Vaynberg
	
	Version: 3.5.4 Timestamp: Sun Aug 30 13:30:32 EDT 2015
	
	This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
	General Public License version 2 (the "GPL License"). You may choose either license to govern your
	use of this software only upon the condition that you accept all of the terms of either the Apache
	License or the GPL License.
	
	You may obtain a copy of the Apache License and the GPL License at:
	
	    http://www.apache.org/licenses/LICENSE-2.0
	    http://www.gnu.org/licenses/gpl-2.0.html
	
	Unless required by applicable law or agreed to in writing, software distributed under the
	Apache License or the GPL License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
	CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
	the specific language governing permissions and limitations under the Apache License and the GPL License.
	*/
	(function ($) {
	    if(typeof $.fn.each2 == "undefined") {
	        $.extend($.fn, {
	            /*
	            * 4-10 times faster .each replacement
	            * use it carefully, as it overrides jQuery context of element on each iteration
	            */
	            each2 : function (c) {
	                var j = $([0]), i = -1, l = this.length;
	                while (
	                    ++i < l
	                    && (j.context = j[0] = this[i])
	                    && c.call(j[0], i, j) !== false //"this"=DOM, i=index, j=jQuery object
	                );
	                return this;
	            }
	        });
	    }
	})(jQuery);
	
	(function ($, undefined) {
	    "use strict";
	    /*global document, window, jQuery, console */
	
	    if (window.Select2 !== undefined) {
	        return;
	    }
	
	    var AbstractSelect2, SingleSelect2, MultiSelect2, nextUid, sizer,
	        lastMousePosition={x:0,y:0}, $document, scrollBarDimensions,
	
	    KEY = {
	        TAB: 9,
	        ENTER: 13,
	        ESC: 27,
	        SPACE: 32,
	        LEFT: 37,
	        UP: 38,
	        RIGHT: 39,
	        DOWN: 40,
	        SHIFT: 16,
	        CTRL: 17,
	        ALT: 18,
	        PAGE_UP: 33,
	        PAGE_DOWN: 34,
	        HOME: 36,
	        END: 35,
	        BACKSPACE: 8,
	        DELETE: 46,
	        isArrow: function (k) {
	            k = k.which ? k.which : k;
	            switch (k) {
	            case KEY.LEFT:
	            case KEY.RIGHT:
	            case KEY.UP:
	            case KEY.DOWN:
	                return true;
	            }
	            return false;
	        },
	        isControl: function (e) {
	            var k = e.which;
	            switch (k) {
	            case KEY.SHIFT:
	            case KEY.CTRL:
	            case KEY.ALT:
	                return true;
	            }
	
	            if (e.metaKey) return true;
	
	            return false;
	        },
	        isFunctionKey: function (k) {
	            k = k.which ? k.which : k;
	            return k >= 112 && k <= 123;
	        }
	    },
	    MEASURE_SCROLLBAR_TEMPLATE = "<div class='select2-measure-scrollbar'></div>",
	
	    DIACRITICS = {"\u24B6":"A","\uFF21":"A","\u00C0":"A","\u00C1":"A","\u00C2":"A","\u1EA6":"A","\u1EA4":"A","\u1EAA":"A","\u1EA8":"A","\u00C3":"A","\u0100":"A","\u0102":"A","\u1EB0":"A","\u1EAE":"A","\u1EB4":"A","\u1EB2":"A","\u0226":"A","\u01E0":"A","\u00C4":"A","\u01DE":"A","\u1EA2":"A","\u00C5":"A","\u01FA":"A","\u01CD":"A","\u0200":"A","\u0202":"A","\u1EA0":"A","\u1EAC":"A","\u1EB6":"A","\u1E00":"A","\u0104":"A","\u023A":"A","\u2C6F":"A","\uA732":"AA","\u00C6":"AE","\u01FC":"AE","\u01E2":"AE","\uA734":"AO","\uA736":"AU","\uA738":"AV","\uA73A":"AV","\uA73C":"AY","\u24B7":"B","\uFF22":"B","\u1E02":"B","\u1E04":"B","\u1E06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24B8":"C","\uFF23":"C","\u0106":"C","\u0108":"C","\u010A":"C","\u010C":"C","\u00C7":"C","\u1E08":"C","\u0187":"C","\u023B":"C","\uA73E":"C","\u24B9":"D","\uFF24":"D","\u1E0A":"D","\u010E":"D","\u1E0C":"D","\u1E10":"D","\u1E12":"D","\u1E0E":"D","\u0110":"D","\u018B":"D","\u018A":"D","\u0189":"D","\uA779":"D","\u01F1":"DZ","\u01C4":"DZ","\u01F2":"Dz","\u01C5":"Dz","\u24BA":"E","\uFF25":"E","\u00C8":"E","\u00C9":"E","\u00CA":"E","\u1EC0":"E","\u1EBE":"E","\u1EC4":"E","\u1EC2":"E","\u1EBC":"E","\u0112":"E","\u1E14":"E","\u1E16":"E","\u0114":"E","\u0116":"E","\u00CB":"E","\u1EBA":"E","\u011A":"E","\u0204":"E","\u0206":"E","\u1EB8":"E","\u1EC6":"E","\u0228":"E","\u1E1C":"E","\u0118":"E","\u1E18":"E","\u1E1A":"E","\u0190":"E","\u018E":"E","\u24BB":"F","\uFF26":"F","\u1E1E":"F","\u0191":"F","\uA77B":"F","\u24BC":"G","\uFF27":"G","\u01F4":"G","\u011C":"G","\u1E20":"G","\u011E":"G","\u0120":"G","\u01E6":"G","\u0122":"G","\u01E4":"G","\u0193":"G","\uA7A0":"G","\uA77D":"G","\uA77E":"G","\u24BD":"H","\uFF28":"H","\u0124":"H","\u1E22":"H","\u1E26":"H","\u021E":"H","\u1E24":"H","\u1E28":"H","\u1E2A":"H","\u0126":"H","\u2C67":"H","\u2C75":"H","\uA78D":"H","\u24BE":"I","\uFF29":"I","\u00CC":"I","\u00CD":"I","\u00CE":"I","\u0128":"I","\u012A":"I","\u012C":"I","\u0130":"I","\u00CF":"I","\u1E2E":"I","\u1EC8":"I","\u01CF":"I","\u0208":"I","\u020A":"I","\u1ECA":"I","\u012E":"I","\u1E2C":"I","\u0197":"I","\u24BF":"J","\uFF2A":"J","\u0134":"J","\u0248":"J","\u24C0":"K","\uFF2B":"K","\u1E30":"K","\u01E8":"K","\u1E32":"K","\u0136":"K","\u1E34":"K","\u0198":"K","\u2C69":"K","\uA740":"K","\uA742":"K","\uA744":"K","\uA7A2":"K","\u24C1":"L","\uFF2C":"L","\u013F":"L","\u0139":"L","\u013D":"L","\u1E36":"L","\u1E38":"L","\u013B":"L","\u1E3C":"L","\u1E3A":"L","\u0141":"L","\u023D":"L","\u2C62":"L","\u2C60":"L","\uA748":"L","\uA746":"L","\uA780":"L","\u01C7":"LJ","\u01C8":"Lj","\u24C2":"M","\uFF2D":"M","\u1E3E":"M","\u1E40":"M","\u1E42":"M","\u2C6E":"M","\u019C":"M","\u24C3":"N","\uFF2E":"N","\u01F8":"N","\u0143":"N","\u00D1":"N","\u1E44":"N","\u0147":"N","\u1E46":"N","\u0145":"N","\u1E4A":"N","\u1E48":"N","\u0220":"N","\u019D":"N","\uA790":"N","\uA7A4":"N","\u01CA":"NJ","\u01CB":"Nj","\u24C4":"O","\uFF2F":"O","\u00D2":"O","\u00D3":"O","\u00D4":"O","\u1ED2":"O","\u1ED0":"O","\u1ED6":"O","\u1ED4":"O","\u00D5":"O","\u1E4C":"O","\u022C":"O","\u1E4E":"O","\u014C":"O","\u1E50":"O","\u1E52":"O","\u014E":"O","\u022E":"O","\u0230":"O","\u00D6":"O","\u022A":"O","\u1ECE":"O","\u0150":"O","\u01D1":"O","\u020C":"O","\u020E":"O","\u01A0":"O","\u1EDC":"O","\u1EDA":"O","\u1EE0":"O","\u1EDE":"O","\u1EE2":"O","\u1ECC":"O","\u1ED8":"O","\u01EA":"O","\u01EC":"O","\u00D8":"O","\u01FE":"O","\u0186":"O","\u019F":"O","\uA74A":"O","\uA74C":"O","\u01A2":"OI","\uA74E":"OO","\u0222":"OU","\u24C5":"P","\uFF30":"P","\u1E54":"P","\u1E56":"P","\u01A4":"P","\u2C63":"P","\uA750":"P","\uA752":"P","\uA754":"P","\u24C6":"Q","\uFF31":"Q","\uA756":"Q","\uA758":"Q","\u024A":"Q","\u24C7":"R","\uFF32":"R","\u0154":"R","\u1E58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1E5A":"R","\u1E5C":"R","\u0156":"R","\u1E5E":"R","\u024C":"R","\u2C64":"R","\uA75A":"R","\uA7A6":"R","\uA782":"R","\u24C8":"S","\uFF33":"S","\u1E9E":"S","\u015A":"S","\u1E64":"S","\u015C":"S","\u1E60":"S","\u0160":"S","\u1E66":"S","\u1E62":"S","\u1E68":"S","\u0218":"S","\u015E":"S","\u2C7E":"S","\uA7A8":"S","\uA784":"S","\u24C9":"T","\uFF34":"T","\u1E6A":"T","\u0164":"T","\u1E6C":"T","\u021A":"T","\u0162":"T","\u1E70":"T","\u1E6E":"T","\u0166":"T","\u01AC":"T","\u01AE":"T","\u023E":"T","\uA786":"T","\uA728":"TZ","\u24CA":"U","\uFF35":"U","\u00D9":"U","\u00DA":"U","\u00DB":"U","\u0168":"U","\u1E78":"U","\u016A":"U","\u1E7A":"U","\u016C":"U","\u00DC":"U","\u01DB":"U","\u01D7":"U","\u01D5":"U","\u01D9":"U","\u1EE6":"U","\u016E":"U","\u0170":"U","\u01D3":"U","\u0214":"U","\u0216":"U","\u01AF":"U","\u1EEA":"U","\u1EE8":"U","\u1EEE":"U","\u1EEC":"U","\u1EF0":"U","\u1EE4":"U","\u1E72":"U","\u0172":"U","\u1E76":"U","\u1E74":"U","\u0244":"U","\u24CB":"V","\uFF36":"V","\u1E7C":"V","\u1E7E":"V","\u01B2":"V","\uA75E":"V","\u0245":"V","\uA760":"VY","\u24CC":"W","\uFF37":"W","\u1E80":"W","\u1E82":"W","\u0174":"W","\u1E86":"W","\u1E84":"W","\u1E88":"W","\u2C72":"W","\u24CD":"X","\uFF38":"X","\u1E8A":"X","\u1E8C":"X","\u24CE":"Y","\uFF39":"Y","\u1EF2":"Y","\u00DD":"Y","\u0176":"Y","\u1EF8":"Y","\u0232":"Y","\u1E8E":"Y","\u0178":"Y","\u1EF6":"Y","\u1EF4":"Y","\u01B3":"Y","\u024E":"Y","\u1EFE":"Y","\u24CF":"Z","\uFF3A":"Z","\u0179":"Z","\u1E90":"Z","\u017B":"Z","\u017D":"Z","\u1E92":"Z","\u1E94":"Z","\u01B5":"Z","\u0224":"Z","\u2C7F":"Z","\u2C6B":"Z","\uA762":"Z","\u24D0":"a","\uFF41":"a","\u1E9A":"a","\u00E0":"a","\u00E1":"a","\u00E2":"a","\u1EA7":"a","\u1EA5":"a","\u1EAB":"a","\u1EA9":"a","\u00E3":"a","\u0101":"a","\u0103":"a","\u1EB1":"a","\u1EAF":"a","\u1EB5":"a","\u1EB3":"a","\u0227":"a","\u01E1":"a","\u00E4":"a","\u01DF":"a","\u1EA3":"a","\u00E5":"a","\u01FB":"a","\u01CE":"a","\u0201":"a","\u0203":"a","\u1EA1":"a","\u1EAD":"a","\u1EB7":"a","\u1E01":"a","\u0105":"a","\u2C65":"a","\u0250":"a","\uA733":"aa","\u00E6":"ae","\u01FD":"ae","\u01E3":"ae","\uA735":"ao","\uA737":"au","\uA739":"av","\uA73B":"av","\uA73D":"ay","\u24D1":"b","\uFF42":"b","\u1E03":"b","\u1E05":"b","\u1E07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24D2":"c","\uFF43":"c","\u0107":"c","\u0109":"c","\u010B":"c","\u010D":"c","\u00E7":"c","\u1E09":"c","\u0188":"c","\u023C":"c","\uA73F":"c","\u2184":"c","\u24D3":"d","\uFF44":"d","\u1E0B":"d","\u010F":"d","\u1E0D":"d","\u1E11":"d","\u1E13":"d","\u1E0F":"d","\u0111":"d","\u018C":"d","\u0256":"d","\u0257":"d","\uA77A":"d","\u01F3":"dz","\u01C6":"dz","\u24D4":"e","\uFF45":"e","\u00E8":"e","\u00E9":"e","\u00EA":"e","\u1EC1":"e","\u1EBF":"e","\u1EC5":"e","\u1EC3":"e","\u1EBD":"e","\u0113":"e","\u1E15":"e","\u1E17":"e","\u0115":"e","\u0117":"e","\u00EB":"e","\u1EBB":"e","\u011B":"e","\u0205":"e","\u0207":"e","\u1EB9":"e","\u1EC7":"e","\u0229":"e","\u1E1D":"e","\u0119":"e","\u1E19":"e","\u1E1B":"e","\u0247":"e","\u025B":"e","\u01DD":"e","\u24D5":"f","\uFF46":"f","\u1E1F":"f","\u0192":"f","\uA77C":"f","\u24D6":"g","\uFF47":"g","\u01F5":"g","\u011D":"g","\u1E21":"g","\u011F":"g","\u0121":"g","\u01E7":"g","\u0123":"g","\u01E5":"g","\u0260":"g","\uA7A1":"g","\u1D79":"g","\uA77F":"g","\u24D7":"h","\uFF48":"h","\u0125":"h","\u1E23":"h","\u1E27":"h","\u021F":"h","\u1E25":"h","\u1E29":"h","\u1E2B":"h","\u1E96":"h","\u0127":"h","\u2C68":"h","\u2C76":"h","\u0265":"h","\u0195":"hv","\u24D8":"i","\uFF49":"i","\u00EC":"i","\u00ED":"i","\u00EE":"i","\u0129":"i","\u012B":"i","\u012D":"i","\u00EF":"i","\u1E2F":"i","\u1EC9":"i","\u01D0":"i","\u0209":"i","\u020B":"i","\u1ECB":"i","\u012F":"i","\u1E2D":"i","\u0268":"i","\u0131":"i","\u24D9":"j","\uFF4A":"j","\u0135":"j","\u01F0":"j","\u0249":"j","\u24DA":"k","\uFF4B":"k","\u1E31":"k","\u01E9":"k","\u1E33":"k","\u0137":"k","\u1E35":"k","\u0199":"k","\u2C6A":"k","\uA741":"k","\uA743":"k","\uA745":"k","\uA7A3":"k","\u24DB":"l","\uFF4C":"l","\u0140":"l","\u013A":"l","\u013E":"l","\u1E37":"l","\u1E39":"l","\u013C":"l","\u1E3D":"l","\u1E3B":"l","\u017F":"l","\u0142":"l","\u019A":"l","\u026B":"l","\u2C61":"l","\uA749":"l","\uA781":"l","\uA747":"l","\u01C9":"lj","\u24DC":"m","\uFF4D":"m","\u1E3F":"m","\u1E41":"m","\u1E43":"m","\u0271":"m","\u026F":"m","\u24DD":"n","\uFF4E":"n","\u01F9":"n","\u0144":"n","\u00F1":"n","\u1E45":"n","\u0148":"n","\u1E47":"n","\u0146":"n","\u1E4B":"n","\u1E49":"n","\u019E":"n","\u0272":"n","\u0149":"n","\uA791":"n","\uA7A5":"n","\u01CC":"nj","\u24DE":"o","\uFF4F":"o","\u00F2":"o","\u00F3":"o","\u00F4":"o","\u1ED3":"o","\u1ED1":"o","\u1ED7":"o","\u1ED5":"o","\u00F5":"o","\u1E4D":"o","\u022D":"o","\u1E4F":"o","\u014D":"o","\u1E51":"o","\u1E53":"o","\u014F":"o","\u022F":"o","\u0231":"o","\u00F6":"o","\u022B":"o","\u1ECF":"o","\u0151":"o","\u01D2":"o","\u020D":"o","\u020F":"o","\u01A1":"o","\u1EDD":"o","\u1EDB":"o","\u1EE1":"o","\u1EDF":"o","\u1EE3":"o","\u1ECD":"o","\u1ED9":"o","\u01EB":"o","\u01ED":"o","\u00F8":"o","\u01FF":"o","\u0254":"o","\uA74B":"o","\uA74D":"o","\u0275":"o","\u01A3":"oi","\u0223":"ou","\uA74F":"oo","\u24DF":"p","\uFF50":"p","\u1E55":"p","\u1E57":"p","\u01A5":"p","\u1D7D":"p","\uA751":"p","\uA753":"p","\uA755":"p","\u24E0":"q","\uFF51":"q","\u024B":"q","\uA757":"q","\uA759":"q","\u24E1":"r","\uFF52":"r","\u0155":"r","\u1E59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1E5B":"r","\u1E5D":"r","\u0157":"r","\u1E5F":"r","\u024D":"r","\u027D":"r","\uA75B":"r","\uA7A7":"r","\uA783":"r","\u24E2":"s","\uFF53":"s","\u00DF":"s","\u015B":"s","\u1E65":"s","\u015D":"s","\u1E61":"s","\u0161":"s","\u1E67":"s","\u1E63":"s","\u1E69":"s","\u0219":"s","\u015F":"s","\u023F":"s","\uA7A9":"s","\uA785":"s","\u1E9B":"s","\u24E3":"t","\uFF54":"t","\u1E6B":"t","\u1E97":"t","\u0165":"t","\u1E6D":"t","\u021B":"t","\u0163":"t","\u1E71":"t","\u1E6F":"t","\u0167":"t","\u01AD":"t","\u0288":"t","\u2C66":"t","\uA787":"t","\uA729":"tz","\u24E4":"u","\uFF55":"u","\u00F9":"u","\u00FA":"u","\u00FB":"u","\u0169":"u","\u1E79":"u","\u016B":"u","\u1E7B":"u","\u016D":"u","\u00FC":"u","\u01DC":"u","\u01D8":"u","\u01D6":"u","\u01DA":"u","\u1EE7":"u","\u016F":"u","\u0171":"u","\u01D4":"u","\u0215":"u","\u0217":"u","\u01B0":"u","\u1EEB":"u","\u1EE9":"u","\u1EEF":"u","\u1EED":"u","\u1EF1":"u","\u1EE5":"u","\u1E73":"u","\u0173":"u","\u1E77":"u","\u1E75":"u","\u0289":"u","\u24E5":"v","\uFF56":"v","\u1E7D":"v","\u1E7F":"v","\u028B":"v","\uA75F":"v","\u028C":"v","\uA761":"vy","\u24E6":"w","\uFF57":"w","\u1E81":"w","\u1E83":"w","\u0175":"w","\u1E87":"w","\u1E85":"w","\u1E98":"w","\u1E89":"w","\u2C73":"w","\u24E7":"x","\uFF58":"x","\u1E8B":"x","\u1E8D":"x","\u24E8":"y","\uFF59":"y","\u1EF3":"y","\u00FD":"y","\u0177":"y","\u1EF9":"y","\u0233":"y","\u1E8F":"y","\u00FF":"y","\u1EF7":"y","\u1E99":"y","\u1EF5":"y","\u01B4":"y","\u024F":"y","\u1EFF":"y","\u24E9":"z","\uFF5A":"z","\u017A":"z","\u1E91":"z","\u017C":"z","\u017E":"z","\u1E93":"z","\u1E95":"z","\u01B6":"z","\u0225":"z","\u0240":"z","\u2C6C":"z","\uA763":"z","\u0386":"\u0391","\u0388":"\u0395","\u0389":"\u0397","\u038A":"\u0399","\u03AA":"\u0399","\u038C":"\u039F","\u038E":"\u03A5","\u03AB":"\u03A5","\u038F":"\u03A9","\u03AC":"\u03B1","\u03AD":"\u03B5","\u03AE":"\u03B7","\u03AF":"\u03B9","\u03CA":"\u03B9","\u0390":"\u03B9","\u03CC":"\u03BF","\u03CD":"\u03C5","\u03CB":"\u03C5","\u03B0":"\u03C5","\u03C9":"\u03C9","\u03C2":"\u03C3"};
	
	    $document = $(document);
	
	    nextUid=(function() { var counter=1; return function() { return counter++; }; }());
	
	
	    function reinsertElement(element) {
	        var placeholder = $(document.createTextNode(''));
	
	        element.before(placeholder);
	        placeholder.before(element);
	        placeholder.remove();
	    }
	
	    function stripDiacritics(str) {
	        // Used 'uni range + named function' from http://jsperf.com/diacritics/18
	        function match(a) {
	            return DIACRITICS[a] || a;
	        }
	
	        return str.replace(/[^\u0000-\u007E]/g, match);
	    }
	
	    function indexOf(value, array) {
	        var i = 0, l = array.length;
	        for (; i < l; i = i + 1) {
	            if (equal(value, array[i])) return i;
	        }
	        return -1;
	    }
	
	    function measureScrollbar () {
	        var $template = $( MEASURE_SCROLLBAR_TEMPLATE );
	        $template.appendTo(document.body);
	
	        var dim = {
	            width: $template.width() - $template[0].clientWidth,
	            height: $template.height() - $template[0].clientHeight
	        };
	        $template.remove();
	
	        return dim;
	    }
	
	    /**
	     * Compares equality of a and b
	     * @param a
	     * @param b
	     */
	    function equal(a, b) {
	        if (a === b) return true;
	        if (a === undefined || b === undefined) return false;
	        if (a === null || b === null) return false;
	        // Check whether 'a' or 'b' is a string (primitive or object).
	        // The concatenation of an empty string (+'') converts its argument to a string's primitive.
	        if (a.constructor === String) return a+'' === b+''; // a+'' - in case 'a' is a String object
	        if (b.constructor === String) return b+'' === a+''; // b+'' - in case 'b' is a String object
	        return false;
	    }
	
	    /**
	     * Splits the string into an array of values, transforming each value. An empty array is returned for nulls or empty
	     * strings
	     * @param string
	     * @param separator
	     */
	    function splitVal(string, separator, transform) {
	        var val, i, l;
	        if (string === null || string.length < 1) return [];
	        val = string.split(separator);
	        for (i = 0, l = val.length; i < l; i = i + 1) val[i] = transform(val[i]);
	        return val;
	    }
	
	    function getSideBorderPadding(element) {
	        return element.outerWidth(false) - element.width();
	    }
	
	    function installKeyUpChangeEvent(element) {
	        var key="keyup-change-value";
	        element.on("keydown", function () {
	            if ($.data(element, key) === undefined) {
	                $.data(element, key, element.val());
	            }
	        });
	        element.on("keyup", function () {
	            var val= $.data(element, key);
	            if (val !== undefined && element.val() !== val) {
	                $.removeData(element, key);
	                element.trigger("keyup-change");
	            }
	        });
	    }
	
	
	    /**
	     * filters mouse events so an event is fired only if the mouse moved.
	     *
	     * filters out mouse events that occur when mouse is stationary but
	     * the elements under the pointer are scrolled.
	     */
	    function installFilteredMouseMove(element) {
	        element.on("mousemove", function (e) {
	            var lastpos = lastMousePosition;
	            if (lastpos === undefined || lastpos.x !== e.pageX || lastpos.y !== e.pageY) {
	                $(e.target).trigger("mousemove-filtered", e);
	            }
	        });
	    }
	
	    /**
	     * Debounces a function. Returns a function that calls the original fn function only if no invocations have been made
	     * within the last quietMillis milliseconds.
	     *
	     * @param quietMillis number of milliseconds to wait before invoking fn
	     * @param fn function to be debounced
	     * @param ctx object to be used as this reference within fn
	     * @return debounced version of fn
	     */
	    function debounce(quietMillis, fn, ctx) {
	        ctx = ctx || undefined;
	        var timeout;
	        return function () {
	            var args = arguments;
	            window.clearTimeout(timeout);
	            timeout = window.setTimeout(function() {
	                fn.apply(ctx, args);
	            }, quietMillis);
	        };
	    }
	
	    function installDebouncedScroll(threshold, element) {
	        var notify = debounce(threshold, function (e) { element.trigger("scroll-debounced", e);});
	        element.on("scroll", function (e) {
	            if (indexOf(e.target, element.get()) >= 0) notify(e);
	        });
	    }
	
	    function focus($el) {
	        if ($el[0] === document.activeElement) return;
	
	        /* set the focus in a 0 timeout - that way the focus is set after the processing
	            of the current event has finished - which seems like the only reliable way
	            to set focus */
	        window.setTimeout(function() {
	            var el=$el[0], pos=$el.val().length, range;
	
	            $el.focus();
	
	            /* make sure el received focus so we do not error out when trying to manipulate the caret.
	                sometimes modals or others listeners may steal it after its set */
	            var isVisible = (el.offsetWidth > 0 || el.offsetHeight > 0);
	            if (isVisible && el === document.activeElement) {
	
	                /* after the focus is set move the caret to the end, necessary when we val()
	                    just before setting focus */
	                if(el.setSelectionRange)
	                {
	                    el.setSelectionRange(pos, pos);
	                }
	                else if (el.createTextRange) {
	                    range = el.createTextRange();
	                    range.collapse(false);
	                    range.select();
	                }
	            }
	        }, 0);
	    }
	
	    function getCursorInfo(el) {
	        el = $(el)[0];
	        var offset = 0;
	        var length = 0;
	        if ('selectionStart' in el) {
	            offset = el.selectionStart;
	            length = el.selectionEnd - offset;
	        } else if ('selection' in document) {
	            el.focus();
	            var sel = document.selection.createRange();
	            length = document.selection.createRange().text.length;
	            sel.moveStart('character', -el.value.length);
	            offset = sel.text.length - length;
	        }
	        return { offset: offset, length: length };
	    }
	
	    function killEvent(event) {
	        event.preventDefault();
	        event.stopPropagation();
	    }
	    function killEventImmediately(event) {
	        event.preventDefault();
	        event.stopImmediatePropagation();
	    }
	
	    function measureTextWidth(e) {
	        if (!sizer){
	            var style = e[0].currentStyle || window.getComputedStyle(e[0], null);
	            sizer = $(document.createElement("div")).css({
	                position: "absolute",
	                left: "-10000px",
	                top: "-10000px",
	                display: "none",
	                fontSize: style.fontSize,
	                fontFamily: style.fontFamily,
	                fontStyle: style.fontStyle,
	                fontWeight: style.fontWeight,
	                letterSpacing: style.letterSpacing,
	                textTransform: style.textTransform,
	                whiteSpace: "nowrap"
	            });
	            sizer.attr("class","select2-sizer");
	            $(document.body).append(sizer);
	        }
	        sizer.text(e.val());
	        return sizer.width();
	    }
	
	    function syncCssClasses(dest, src, adapter) {
	        var classes, replacements = [], adapted;
	
	        classes = $.trim(dest.attr("class"));
	
	        if (classes) {
	            classes = '' + classes; // for IE which returns object
	
	            $(classes.split(/\s+/)).each2(function() {
	                if (this.indexOf("select2-") === 0) {
	                    replacements.push(this);
	                }
	            });
	        }
	
	        classes = $.trim(src.attr("class"));
	
	        if (classes) {
	            classes = '' + classes; // for IE which returns object
	
	            $(classes.split(/\s+/)).each2(function() {
	                if (this.indexOf("select2-") !== 0) {
	                    adapted = adapter(this);
	
	                    if (adapted) {
	                        replacements.push(adapted);
	                    }
	                }
	            });
	        }
	
	        dest.attr("class", replacements.join(" "));
	    }
	
	
	    function markMatch(text, term, markup, escapeMarkup) {
	        var match=stripDiacritics(text.toUpperCase()).indexOf(stripDiacritics(term.toUpperCase())),
	            tl=term.length;
	
	        if (match<0) {
	            markup.push(escapeMarkup(text));
	            return;
	        }
	
	        markup.push(escapeMarkup(text.substring(0, match)));
	        markup.push("<span class='select2-match'>");
	        markup.push(escapeMarkup(text.substring(match, match + tl)));
	        markup.push("</span>");
	        markup.push(escapeMarkup(text.substring(match + tl, text.length)));
	    }
	
	    function defaultEscapeMarkup(markup) {
	        var replace_map = {
	            '\\': '&#92;',
	            '&': '&amp;',
	            '<': '&lt;',
	            '>': '&gt;',
	            '"': '&quot;',
	            "'": '&#39;',
	            "/": '&#47;'
	        };
	
	        return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
	            return replace_map[match];
	        });
	    }
	
	    /**
	     * Produces an ajax-based query function
	     *
	     * @param options object containing configuration parameters
	     * @param options.params parameter map for the transport ajax call, can contain such options as cache, jsonpCallback, etc. see $.ajax
	     * @param options.transport function that will be used to execute the ajax request. must be compatible with parameters supported by $.ajax
	     * @param options.url url for the data
	     * @param options.data a function(searchTerm, pageNumber, context) that should return an object containing query string parameters for the above url.
	     * @param options.dataType request data type: ajax, jsonp, other datatypes supported by jQuery's $.ajax function or the transport function if specified
	     * @param options.quietMillis (optional) milliseconds to wait before making the ajaxRequest, helps debounce the ajax function if invoked too often
	     * @param options.results a function(remoteData, pageNumber, query) that converts data returned form the remote request to the format expected by Select2.
	     *      The expected format is an object containing the following keys:
	     *      results array of objects that will be used as choices
	     *      more (optional) boolean indicating whether there are more results available
	     *      Example: {results:[{id:1, text:'Red'},{id:2, text:'Blue'}], more:true}
	     */
	    function ajax(options) {
	        var timeout, // current scheduled but not yet executed request
	            handler = null,
	            quietMillis = options.quietMillis || 100,
	            ajaxUrl = options.url,
	            self = this;
	
	        return function (query) {
	            window.clearTimeout(timeout);
	            timeout = window.setTimeout(function () {
	                var data = options.data, // ajax data function
	                    url = ajaxUrl, // ajax url string or function
	                    transport = options.transport || $.fn.select2.ajaxDefaults.transport,
	                    // deprecated - to be removed in 4.0  - use params instead
	                    deprecated = {
	                        type: options.type || 'GET', // set type of request (GET or POST)
	                        cache: options.cache || false,
	                        jsonpCallback: options.jsonpCallback||undefined,
	                        dataType: options.dataType||"json"
	                    },
	                    params = $.extend({}, $.fn.select2.ajaxDefaults.params, deprecated);
	
	                data = data ? data.call(self, query.term, query.page, query.context) : null;
	                url = (typeof url === 'function') ? url.call(self, query.term, query.page, query.context) : url;
	
	                if (handler && typeof handler.abort === "function") { handler.abort(); }
	
	                if (options.params) {
	                    if ($.isFunction(options.params)) {
	                        $.extend(params, options.params.call(self));
	                    } else {
	                        $.extend(params, options.params);
	                    }
	                }
	
	                $.extend(params, {
	                    url: url,
	                    dataType: options.dataType,
	                    data: data,
	                    success: function (data) {
	                        // TODO - replace query.page with query so users have access to term, page, etc.
	                        // added query as third paramter to keep backwards compatibility
	                        var results = options.results(data, query.page, query);
	                        query.callback(results);
	                    },
	                    error: function(jqXHR, textStatus, errorThrown){
	                        var results = {
	                            hasError: true,
	                            jqXHR: jqXHR,
	                            textStatus: textStatus,
	                            errorThrown: errorThrown
	                        };
	
	                        query.callback(results);
	                    }
	                });
	                handler = transport.call(self, params);
	            }, quietMillis);
	        };
	    }
	
	    /**
	     * Produces a query function that works with a local array
	     *
	     * @param options object containing configuration parameters. The options parameter can either be an array or an
	     * object.
	     *
	     * If the array form is used it is assumed that it contains objects with 'id' and 'text' keys.
	     *
	     * If the object form is used it is assumed that it contains 'data' and 'text' keys. The 'data' key should contain
	     * an array of objects that will be used as choices. These objects must contain at least an 'id' key. The 'text'
	     * key can either be a String in which case it is expected that each element in the 'data' array has a key with the
	     * value of 'text' which will be used to match choices. Alternatively, text can be a function(item) that can extract
	     * the text.
	     */
	    function local(options) {
	        var data = options, // data elements
	            dataText,
	            tmp,
	            text = function (item) { return ""+item.text; }; // function used to retrieve the text portion of a data item that is matched against the search
	
	         if ($.isArray(data)) {
	            tmp = data;
	            data = { results: tmp };
	        }
	
	         if ($.isFunction(data) === false) {
	            tmp = data;
	            data = function() { return tmp; };
	        }
	
	        var dataItem = data();
	        if (dataItem.text) {
	            text = dataItem.text;
	            // if text is not a function we assume it to be a key name
	            if (!$.isFunction(text)) {
	                dataText = dataItem.text; // we need to store this in a separate variable because in the next step data gets reset and data.text is no longer available
	                text = function (item) { return item[dataText]; };
	            }
	        }
	
	        return function (query) {
	            var t = query.term, filtered = { results: [] }, process;
	            if (t === "") {
	                query.callback(data());
	                return;
	            }
	
	            process = function(datum, collection) {
	                var group, attr;
	                datum = datum[0];
	                if (datum.children) {
	                    group = {};
	                    for (attr in datum) {
	                        if (datum.hasOwnProperty(attr)) group[attr]=datum[attr];
	                    }
	                    group.children=[];
	                    $(datum.children).each2(function(i, childDatum) { process(childDatum, group.children); });
	                    if (group.children.length || query.matcher(t, text(group), datum)) {
	                        collection.push(group);
	                    }
	                } else {
	                    if (query.matcher(t, text(datum), datum)) {
	                        collection.push(datum);
	                    }
	                }
	            };
	
	            $(data().results).each2(function(i, datum) { process(datum, filtered.results); });
	            query.callback(filtered);
	        };
	    }
	
	    // TODO javadoc
	    function tags(data) {
	        var isFunc = $.isFunction(data);
	        return function (query) {
	            var t = query.term, filtered = {results: []};
	            var result = isFunc ? data(query) : data;
	            if ($.isArray(result)) {
	                $(result).each(function () {
	                    var isObject = this.text !== undefined,
	                        text = isObject ? this.text : this;
	                    if (t === "" || query.matcher(t, text)) {
	                        filtered.results.push(isObject ? this : {id: this, text: this});
	                    }
	                });
	                query.callback(filtered);
	            }
	        };
	    }
	
	    /**
	     * Checks if the formatter function should be used.
	     *
	     * Throws an error if it is not a function. Returns true if it should be used,
	     * false if no formatting should be performed.
	     *
	     * @param formatter
	     */
	    function checkFormatter(formatter, formatterName) {
	        if ($.isFunction(formatter)) return true;
	        if (!formatter) return false;
	        if (typeof(formatter) === 'string') return true;
	        throw new Error(formatterName +" must be a string, function, or falsy value");
	    }
	
	  /**
	   * Returns a given value
	   * If given a function, returns its output
	   *
	   * @param val string|function
	   * @param context value of "this" to be passed to function
	   * @returns {*}
	   */
	    function evaluate(val, context) {
	        if ($.isFunction(val)) {
	            var args = Array.prototype.slice.call(arguments, 2);
	            return val.apply(context, args);
	        }
	        return val;
	    }
	
	    function countResults(results) {
	        var count = 0;
	        $.each(results, function(i, item) {
	            if (item.children) {
	                count += countResults(item.children);
	            } else {
	                count++;
	            }
	        });
	        return count;
	    }
	
	    /**
	     * Default tokenizer. This function uses breaks the input on substring match of any string from the
	     * opts.tokenSeparators array and uses opts.createSearchChoice to create the choice object. Both of those
	     * two options have to be defined in order for the tokenizer to work.
	     *
	     * @param input text user has typed so far or pasted into the search field
	     * @param selection currently selected choices
	     * @param selectCallback function(choice) callback tho add the choice to selection
	     * @param opts select2's opts
	     * @return undefined/null to leave the current input unchanged, or a string to change the input to the returned value
	     */
	    function defaultTokenizer(input, selection, selectCallback, opts) {
	        var original = input, // store the original so we can compare and know if we need to tell the search to update its text
	            dupe = false, // check for whether a token we extracted represents a duplicate selected choice
	            token, // token
	            index, // position at which the separator was found
	            i, l, // looping variables
	            separator; // the matched separator
	
	        if (!opts.createSearchChoice || !opts.tokenSeparators || opts.tokenSeparators.length < 1) return undefined;
	
	        while (true) {
	            index = -1;
	
	            for (i = 0, l = opts.tokenSeparators.length; i < l; i++) {
	                separator = opts.tokenSeparators[i];
	                index = input.indexOf(separator);
	                if (index >= 0) break;
	            }
	
	            if (index < 0) break; // did not find any token separator in the input string, bail
	
	            token = input.substring(0, index);
	            input = input.substring(index + separator.length);
	
	            if (token.length > 0) {
	                token = opts.createSearchChoice.call(this, token, selection);
	                if (token !== undefined && token !== null && opts.id(token) !== undefined && opts.id(token) !== null) {
	                    dupe = false;
	                    for (i = 0, l = selection.length; i < l; i++) {
	                        if (equal(opts.id(token), opts.id(selection[i]))) {
	                            dupe = true; break;
	                        }
	                    }
	
	                    if (!dupe) selectCallback(token);
	                }
	            }
	        }
	
	        if (original!==input) return input;
	    }
	
	    function cleanupJQueryElements() {
	        var self = this;
	
	        $.each(arguments, function (i, element) {
	            self[element].remove();
	            self[element] = null;
	        });
	    }
	
	    /**
	     * Creates a new class
	     *
	     * @param superClass
	     * @param methods
	     */
	    function clazz(SuperClass, methods) {
	        var constructor = function () {};
	        constructor.prototype = new SuperClass;
	        constructor.prototype.constructor = constructor;
	        constructor.prototype.parent = SuperClass.prototype;
	        constructor.prototype = $.extend(constructor.prototype, methods);
	        return constructor;
	    }
	
	    AbstractSelect2 = clazz(Object, {
	
	        // abstract
	        bind: function (func) {
	            var self = this;
	            return function () {
	                func.apply(self, arguments);
	            };
	        },
	
	        // abstract
	        init: function (opts) {
	            var results, search, resultsSelector = ".select2-results";
	
	            // prepare options
	            this.opts = opts = this.prepareOpts(opts);
	
	            this.id=opts.id;
	
	            // destroy if called on an existing component
	            if (opts.element.data("select2") !== undefined &&
	                opts.element.data("select2") !== null) {
	                opts.element.data("select2").destroy();
	            }
	
	            this.container = this.createContainer();
	
	            this.liveRegion = $('.select2-hidden-accessible');
	            if (this.liveRegion.length == 0) {
	                this.liveRegion = $("<span>", {
	                        role: "status",
	                        "aria-live": "polite"
	                    })
	                    .addClass("select2-hidden-accessible")
	                    .appendTo(document.body);
	            }
	
	            this.containerId="s2id_"+(opts.element.attr("id") || "autogen"+nextUid());
	            this.containerEventName= this.containerId
	                .replace(/([.])/g, '_')
	                .replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
	            this.container.attr("id", this.containerId);
	
	            this.container.attr("title", opts.element.attr("title"));
	
	            this.body = $(document.body);
	
	            syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);
	
	            this.container.attr("style", opts.element.attr("style"));
	            this.container.css(evaluate(opts.containerCss, this.opts.element));
	            this.container.addClass(evaluate(opts.containerCssClass, this.opts.element));
	
	            this.elementTabIndex = this.opts.element.attr("tabindex");
	
	            // swap container for the element
	            this.opts.element
	                .data("select2", this)
	                .attr("tabindex", "-1")
	                .before(this.container)
	                .on("click.select2", killEvent); // do not leak click events
	
	            this.container.data("select2", this);
	
	            this.dropdown = this.container.find(".select2-drop");
	
	            syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);
	
	            this.dropdown.addClass(evaluate(opts.dropdownCssClass, this.opts.element));
	            this.dropdown.data("select2", this);
	            this.dropdown.on("click", killEvent);
	
	            this.results = results = this.container.find(resultsSelector);
	            this.search = search = this.container.find("input.select2-input");
	
	            this.queryCount = 0;
	            this.resultsPage = 0;
	            this.context = null;
	
	            // initialize the container
	            this.initContainer();
	
	            this.container.on("click", killEvent);
	
	            installFilteredMouseMove(this.results);
	
	            this.dropdown.on("mousemove-filtered", resultsSelector, this.bind(this.highlightUnderEvent));
	            this.dropdown.on("touchstart touchmove touchend", resultsSelector, this.bind(function (event) {
	                this._touchEvent = true;
	                this.highlightUnderEvent(event);
	            }));
	            this.dropdown.on("touchmove", resultsSelector, this.bind(this.touchMoved));
	            this.dropdown.on("touchstart touchend", resultsSelector, this.bind(this.clearTouchMoved));
	
	            // Waiting for a click event on touch devices to select option and hide dropdown
	            // otherwise click will be triggered on an underlying element
	            this.dropdown.on('click', this.bind(function (event) {
	                if (this._touchEvent) {
	                    this._touchEvent = false;
	                    this.selectHighlighted();
	                }
	            }));
	
	            installDebouncedScroll(80, this.results);
	            this.dropdown.on("scroll-debounced", resultsSelector, this.bind(this.loadMoreIfNeeded));
	
	            // do not propagate change event from the search field out of the component
	            $(this.container).on("change", ".select2-input", function(e) {e.stopPropagation();});
	            $(this.dropdown).on("change", ".select2-input", function(e) {e.stopPropagation();});
	
	            // if jquery.mousewheel plugin is installed we can prevent out-of-bounds scrolling of results via mousewheel
	            if ($.fn.mousewheel) {
	                results.mousewheel(function (e, delta, deltaX, deltaY) {
	                    var top = results.scrollTop();
	                    if (deltaY > 0 && top - deltaY <= 0) {
	                        results.scrollTop(0);
	                        killEvent(e);
	                    } else if (deltaY < 0 && results.get(0).scrollHeight - results.scrollTop() + deltaY <= results.height()) {
	                        results.scrollTop(results.get(0).scrollHeight - results.height());
	                        killEvent(e);
	                    }
	                });
	            }
	
	            installKeyUpChangeEvent(search);
	            search.on("keyup-change input paste", this.bind(this.updateResults));
	            search.on("focus", function () { search.addClass("select2-focused"); });
	            search.on("blur", function () { search.removeClass("select2-focused");});
	
	            this.dropdown.on("mouseup", resultsSelector, this.bind(function (e) {
	                if ($(e.target).closest(".select2-result-selectable").length > 0) {
	                    this.highlightUnderEvent(e);
	                    this.selectHighlighted(e);
	                }
	            }));
	
	            // trap all mouse events from leaving the dropdown. sometimes there may be a modal that is listening
	            // for mouse events outside of itself so it can close itself. since the dropdown is now outside the select2's
	            // dom it will trigger the popup close, which is not what we want
	            // focusin can cause focus wars between modals and select2 since the dropdown is outside the modal.
	            this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function (e) { e.stopPropagation(); });
	
	            this.lastSearchTerm = undefined;
	
	            if ($.isFunction(this.opts.initSelection)) {
	                // initialize selection based on the current value of the source element
	                this.initSelection();
	
	                // if the user has provided a function that can set selection based on the value of the source element
	                // we monitor the change event on the element and trigger it, allowing for two way synchronization
	                this.monitorSource();
	            }
	
	            if (opts.maximumInputLength !== null) {
	                this.search.attr("maxlength", opts.maximumInputLength);
	            }
	
	            var disabled = opts.element.prop("disabled");
	            if (disabled === undefined) disabled = false;
	            this.enable(!disabled);
	
	            var readonly = opts.element.prop("readonly");
	            if (readonly === undefined) readonly = false;
	            this.readonly(readonly);
	
	            // Calculate size of scrollbar
	            scrollBarDimensions = scrollBarDimensions || measureScrollbar();
	
	            this.autofocus = opts.element.prop("autofocus");
	            opts.element.prop("autofocus", false);
	            if (this.autofocus) this.focus();
	
	            this.search.attr("placeholder", opts.searchInputPlaceholder);
	        },
	
	        // abstract
	        destroy: function () {
	            var element=this.opts.element, select2 = element.data("select2"), self = this;
	
	            this.close();
	
	            if (element.length && element[0].detachEvent && self._sync) {
	                element.each(function () {
	                    if (self._sync) {
	                        this.detachEvent("onpropertychange", self._sync);
	                    }
	                });
	            }
	            if (this.propertyObserver) {
	                this.propertyObserver.disconnect();
	                this.propertyObserver = null;
	            }
	            this._sync = null;
	
	            if (select2 !== undefined) {
	                select2.container.remove();
	                select2.liveRegion.remove();
	                select2.dropdown.remove();
	                element.removeData("select2")
	                    .off(".select2");
	                if (!element.is("input[type='hidden']")) {
	                    element
	                        .show()
	                        .prop("autofocus", this.autofocus || false);
	                    if (this.elementTabIndex) {
	                        element.attr({tabindex: this.elementTabIndex});
	                    } else {
	                        element.removeAttr("tabindex");
	                    }
	                    element.show();
	                } else {
	                    element.css("display", "");
	                }
	            }
	
	            cleanupJQueryElements.call(this,
	                "container",
	                "liveRegion",
	                "dropdown",
	                "results",
	                "search"
	            );
	        },
	
	        // abstract
	        optionToData: function(element) {
	            if (element.is("option")) {
	                return {
	                    id:element.prop("value"),
	                    text:element.text(),
	                    element: element.get(),
	                    css: element.attr("class"),
	                    disabled: element.prop("disabled"),
	                    locked: equal(element.attr("locked"), "locked") || equal(element.data("locked"), true)
	                };
	            } else if (element.is("optgroup")) {
	                return {
	                    text:element.attr("label"),
	                    children:[],
	                    element: element.get(),
	                    css: element.attr("class")
	                };
	            }
	        },
	
	        // abstract
	        prepareOpts: function (opts) {
	            var element, select, idKey, ajaxUrl, self = this;
	
	            element = opts.element;
	
	            if (element.get(0).tagName.toLowerCase() === "select") {
	                this.select = select = opts.element;
	            }
	
	            if (select) {
	                // these options are not allowed when attached to a select because they are picked up off the element itself
	                $.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function () {
	                    if (this in opts) {
	                        throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.");
	                    }
	                });
	            }
	
	            opts.debug = opts.debug || $.fn.select2.defaults.debug;
	
	            // Warnings for options renamed/removed in Select2 4.0.0
	            // Only when it's enabled through debug mode
	            if (opts.debug && console && console.warn) {
	                // id was removed
	                if (opts.id != null) {
	                    console.warn(
	                        'Select2: The `id` option has been removed in Select2 4.0.0, ' +
	                        'consider renaming your `id` property or mapping the property before your data makes it to Select2. ' +
	                        'You can read more at https://select2.github.io/announcements-4.0.html#changed-id'
	                    );
	                }
	
	                // text was removed
	                if (opts.text != null) {
	                    console.warn(
	                        'Select2: The `text` option has been removed in Select2 4.0.0, ' +
	                        'consider renaming your `text` property or mapping the property before your data makes it to Select2. ' +
	                        'You can read more at https://select2.github.io/announcements-4.0.html#changed-id'
	                    );
	                }
	
	                // sortResults was renamed to results
	                if (opts.sortResults != null) {
	                    console.warn(
	                        'Select2: the `sortResults` option has been renamed to `sorter` in Select2 4.0.0. '
	                    );
	                }
	
	                // selectOnBlur was renamed to selectOnClose
	                if (opts.selectOnBlur != null) {
	                    console.warn(
	                        'Select2: The `selectOnBlur` option has been renamed to `selectOnClose` in Select2 4.0.0.'
	                    );
	                }
	
	                // ajax.results was renamed to ajax.processResults
	                if (opts.ajax != null && opts.ajax.results != null) {
	                    console.warn(
	                        'Select2: The `ajax.results` option has been renamed to `ajax.processResults` in Select2 4.0.0.'
	                    );
	                }
	
	                // format* options were renamed to language.*
	                if (opts.formatNoResults != null) {
	                    console.warn(
	                        'Select2: The `formatNoResults` option has been renamed to `language.noResults` in Select2 4.0.0.'
	                    );
	                }
	                if (opts.formatSearching != null) {
	                    console.warn(
	                        'Select2: The `formatSearching` option has been renamed to `language.searching` in Select2 4.0.0.'
	                    );
	                }
	                if (opts.formatInputTooShort != null) {
	                    console.warn(
	                        'Select2: The `formatInputTooShort` option has been renamed to `language.inputTooShort` in Select2 4.0.0.'
	                    );
	                }
	                if (opts.formatInputTooLong != null) {
	                    console.warn(
	                        'Select2: The `formatInputTooLong` option has been renamed to `language.inputTooLong` in Select2 4.0.0.'
	                    );
	                }
	                if (opts.formatLoading != null) {
	                    console.warn(
	                        'Select2: The `formatLoading` option has been renamed to `language.loadingMore` in Select2 4.0.0.'
	                    );
	                }
	                if (opts.formatSelectionTooBig != null) {
	                    console.warn(
	                        'Select2: The `formatSelectionTooBig` option has been renamed to `language.maximumSelected` in Select2 4.0.0.'
	                    );
	                }
	
	                if (opts.element.data('select2Tags')) {
	                    console.warn(
	                        'Select2: The `data-select2-tags` attribute has been renamed to `data-tags` in Select2 4.0.0.'
	                    );
	                }
	            }
	
	            // Aliasing options renamed in Select2 4.0.0
	
	            // data-select2-tags -> data-tags
	            if (opts.element.data('tags') != null) {
	                var elemTags = opts.element.data('tags');
	
	                // data-tags should actually be a boolean
	                if (!$.isArray(elemTags)) {
	                    elemTags = [];
	                }
	
	                opts.element.data('select2Tags', elemTags);
	            }
	
	            // sortResults -> sorter
	            if (opts.sorter != null) {
	                opts.sortResults = opts.sorter;
	            }
	
	            // selectOnBlur -> selectOnClose
	            if (opts.selectOnClose != null) {
	                opts.selectOnBlur = opts.selectOnClose;
	            }
	
	            // ajax.results -> ajax.processResults
	            if (opts.ajax != null) {
	                if ($.isFunction(opts.ajax.processResults)) {
	                    opts.ajax.results = opts.ajax.processResults;
	                }
	            }
	
	            // Formatters/language options
	            if (opts.language != null) {
	                var lang = opts.language;
	
	                // formatNoMatches -> language.noMatches
	                if ($.isFunction(lang.noMatches)) {
	                    opts.formatNoMatches = lang.noMatches;
	                }
	
	                // formatSearching -> language.searching
	                if ($.isFunction(lang.searching)) {
	                    opts.formatSearching = lang.searching;
	                }
	
	                // formatInputTooShort -> language.inputTooShort
	                if ($.isFunction(lang.inputTooShort)) {
	                    opts.formatInputTooShort = lang.inputTooShort;
	                }
	
	                // formatInputTooLong -> language.inputTooLong
	                if ($.isFunction(lang.inputTooLong)) {
	                    opts.formatInputTooLong = lang.inputTooLong;
	                }
	
	                // formatLoading -> language.loadingMore
	                if ($.isFunction(lang.loadingMore)) {
	                    opts.formatLoading = lang.loadingMore;
	                }
	
	                // formatSelectionTooBig -> language.maximumSelected
	                if ($.isFunction(lang.maximumSelected)) {
	                    opts.formatSelectionTooBig = lang.maximumSelected;
	                }
	            }
	
	            opts = $.extend({}, {
	                populateResults: function(container, results, query) {
	                    var populate, id=this.opts.id, liveRegion=this.liveRegion;
	
	                    populate=function(results, container, depth) {
	
	                        var i, l, result, selectable, disabled, compound, node, label, innerContainer, formatted;
	
	                        results = opts.sortResults(results, container, query);
	
	                        // collect the created nodes for bulk append
	                        var nodes = [];
	                        for (i = 0, l = results.length; i < l; i = i + 1) {
	
	                            result=results[i];
	
	                            disabled = (result.disabled === true);
	                            selectable = (!disabled) && (id(result) !== undefined);
	
	                            compound=result.children && result.children.length > 0;
	
	                            node=$("<li></li>");
	                            node.addClass("select2-results-dept-"+depth);
	                            node.addClass("select2-result");
	                            node.addClass(selectable ? "select2-result-selectable" : "select2-result-unselectable");
	                            if (disabled) { node.addClass("select2-disabled"); }
	                            if (compound) { node.addClass("select2-result-with-children"); }
	                            node.addClass(self.opts.formatResultCssClass(result));
	                            node.attr("role", "presentation");
	
	                            label=$(document.createElement("div"));
	                            label.addClass("select2-result-label");
	                            label.attr("id", "select2-result-label-" + nextUid());
	                            label.attr("role", "option");
	
	                            formatted=opts.formatResult(result, label, query, self.opts.escapeMarkup);
	                            if (formatted!==undefined) {
	                                label.html(formatted);
	                                node.append(label);
	                            }
	
	
	                            if (compound) {
	                                innerContainer=$("<ul></ul>");
	                                innerContainer.addClass("select2-result-sub");
	                                populate(result.children, innerContainer, depth+1);
	                                node.append(innerContainer);
	                            }
	
	                            node.data("select2-data", result);
	                            nodes.push(node[0]);
	                        }
	
	                        // bulk append the created nodes
	                        container.append(nodes);
	                        liveRegion.text(opts.formatMatches(results.length));
	                    };
	
	                    populate(results, container, 0);
	                }
	            }, $.fn.select2.defaults, opts);
	
	            if (typeof(opts.id) !== "function") {
	                idKey = opts.id;
	                opts.id = function (e) { return e[idKey]; };
	            }
	
	            if ($.isArray(opts.element.data("select2Tags"))) {
	                if ("tags" in opts) {
	                    throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + opts.element.attr("id");
	                }
	                opts.tags=opts.element.data("select2Tags");
	            }
	
	            if (select) {
	                opts.query = this.bind(function (query) {
	                    var data = { results: [], more: false },
	                        term = query.term,
	                        children, placeholderOption, process;
	
	                    process=function(element, collection) {
	                        var group;
	                        if (element.is("option")) {
	                            if (query.matcher(term, element.text(), element)) {
	                                collection.push(self.optionToData(element));
	                            }
	                        } else if (element.is("optgroup")) {
	                            group=self.optionToData(element);
	                            element.children().each2(function(i, elm) { process(elm, group.children); });
	                            if (group.children.length>0) {
	                                collection.push(group);
	                            }
	                        }
	                    };
	
	                    children=element.children();
	
	                    // ignore the placeholder option if there is one
	                    if (this.getPlaceholder() !== undefined && children.length > 0) {
	                        placeholderOption = this.getPlaceholderOption();
	                        if (placeholderOption) {
	                            children=children.not(placeholderOption);
	                        }
	                    }
	
	                    children.each2(function(i, elm) { process(elm, data.results); });
	
	                    query.callback(data);
	                });
	                // this is needed because inside val() we construct choices from options and their id is hardcoded
	                opts.id=function(e) { return e.id; };
	            } else {
	                if (!("query" in opts)) {
	                    if ("ajax" in opts) {
	                        ajaxUrl = opts.element.data("ajax-url");
	                        if (ajaxUrl && ajaxUrl.length > 0) {
	                            opts.ajax.url = ajaxUrl;
	                        }
	                        opts.query = ajax.call(opts.element, opts.ajax);
	                    } else if ("data" in opts) {
	                        opts.query = local(opts.data);
	                    } else if ("tags" in opts) {
	                        opts.query = tags(opts.tags);
	                        if (opts.createSearchChoice === undefined) {
	                            opts.createSearchChoice = function (term) { return {id: $.trim(term), text: $.trim(term)}; };
	                        }
	                        if (opts.initSelection === undefined) {
	                            opts.initSelection = function (element, callback) {
	                                var data = [];
	                                $(splitVal(element.val(), opts.separator, opts.transformVal)).each(function () {
	                                    var obj = { id: this, text: this },
	                                        tags = opts.tags;
	                                    if ($.isFunction(tags)) tags=tags();
	                                    $(tags).each(function() { if (equal(this.id, obj.id)) { obj = this; return false; } });
	                                    data.push(obj);
	                                });
	
	                                callback(data);
	                            };
	                        }
	                    }
	                }
	            }
	            if (typeof(opts.query) !== "function") {
	                throw "query function not defined for Select2 " + opts.element.attr("id");
	            }
	
	            if (opts.createSearchChoicePosition === 'top') {
	                opts.createSearchChoicePosition = function(list, item) { list.unshift(item); };
	            }
	            else if (opts.createSearchChoicePosition === 'bottom') {
	                opts.createSearchChoicePosition = function(list, item) { list.push(item); };
	            }
	            else if (typeof(opts.createSearchChoicePosition) !== "function")  {
	                throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
	            }
	
	            return opts;
	        },
	
	        /**
	         * Monitor the original element for changes and update select2 accordingly
	         */
	        // abstract
	        monitorSource: function () {
	            var el = this.opts.element, observer, self = this;
	
	            el.on("change.select2", this.bind(function (e) {
	                if (this.opts.element.data("select2-change-triggered") !== true) {
	                    this.initSelection();
	                }
	            }));
	
	            this._sync = this.bind(function () {
	
	                // sync enabled state
	                var disabled = el.prop("disabled");
	                if (disabled === undefined) disabled = false;
	                this.enable(!disabled);
	
	                var readonly = el.prop("readonly");
	                if (readonly === undefined) readonly = false;
	                this.readonly(readonly);
	
	                if (this.container) {
	                    syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);
	                    this.container.addClass(evaluate(this.opts.containerCssClass, this.opts.element));
	                }
	
	                if (this.dropdown) {
	                    syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);
	                    this.dropdown.addClass(evaluate(this.opts.dropdownCssClass, this.opts.element));
	                }
	
	            });
	
	            // IE8-10 (IE9/10 won't fire propertyChange via attachEventListener)
	            if (el.length && el[0].attachEvent) {
	                el.each(function() {
	                    this.attachEvent("onpropertychange", self._sync);
	                });
	            }
	
	            // safari, chrome, firefox, IE11
	            observer = window.MutationObserver || window.WebKitMutationObserver|| window.MozMutationObserver;
	            if (observer !== undefined) {
	                if (this.propertyObserver) { delete this.propertyObserver; this.propertyObserver = null; }
	                this.propertyObserver = new observer(function (mutations) {
	                    $.each(mutations, self._sync);
	                });
	                this.propertyObserver.observe(el.get(0), { attributes:true, subtree:false });
	            }
	        },
	
	        // abstract
	        triggerSelect: function(data) {
	            var evt = $.Event("select2-selecting", { val: this.id(data), object: data, choice: data });
	            this.opts.element.trigger(evt);
	            return !evt.isDefaultPrevented();
	        },
	
	        /**
	         * Triggers the change event on the source element
	         */
	        // abstract
	        triggerChange: function (details) {
	
	            details = details || {};
	            details= $.extend({}, details, { type: "change", val: this.val() });
	            // prevents recursive triggering
	            this.opts.element.data("select2-change-triggered", true);
	            this.opts.element.trigger(details);
	            this.opts.element.data("select2-change-triggered", false);
	
	            // some validation frameworks ignore the change event and listen instead to keyup, click for selects
	            // so here we trigger the click event manually
	            this.opts.element.click();
	
	            // ValidationEngine ignores the change event and listens instead to blur
	            // so here we trigger the blur event manually if so desired
	            if (this.opts.blurOnChange)
	                this.opts.element.blur();
	        },
	
	        //abstract
	        isInterfaceEnabled: function()
	        {
	            return this.enabledInterface === true;
	        },
	
	        // abstract
	        enableInterface: function() {
	            var enabled = this._enabled && !this._readonly,
	                disabled = !enabled;
	
	            if (enabled === this.enabledInterface) return false;
	
	            this.container.toggleClass("select2-container-disabled", disabled);
	            this.close();
	            this.enabledInterface = enabled;
	
	            return true;
	        },
	
	        // abstract
	        enable: function(enabled) {
	            if (enabled === undefined) enabled = true;
	            if (this._enabled === enabled) return;
	            this._enabled = enabled;
	
	            this.opts.element.prop("disabled", !enabled);
	            this.enableInterface();
	        },
	
	        // abstract
	        disable: function() {
	            this.enable(false);
	        },
	
	        // abstract
	        readonly: function(enabled) {
	            if (enabled === undefined) enabled = false;
	            if (this._readonly === enabled) return;
	            this._readonly = enabled;
	
	            this.opts.element.prop("readonly", enabled);
	            this.enableInterface();
	        },
	
	        // abstract
	        opened: function () {
	            return (this.container) ? this.container.hasClass("select2-dropdown-open") : false;
	        },
	
	        // abstract
	        positionDropdown: function() {
	            var $dropdown = this.dropdown,
	                container = this.container,
	                offset = container.offset(),
	                height = container.outerHeight(false),
	                width = container.outerWidth(false),
	                dropHeight = $dropdown.outerHeight(false),
	                $window = $(window),
	                windowWidth = $window.width(),
	                windowHeight = $window.height(),
	                viewPortRight = $window.scrollLeft() + windowWidth,
	                viewportBottom = $window.scrollTop() + windowHeight,
	                dropTop = offset.top + height,
	                dropLeft = offset.left,
	                enoughRoomBelow = dropTop + dropHeight <= viewportBottom,
	                enoughRoomAbove = (offset.top - dropHeight) >= $window.scrollTop(),
	                dropWidth = $dropdown.outerWidth(false),
	                enoughRoomOnRight = function() {
	                    return dropLeft + dropWidth <= viewPortRight;
	                },
	                enoughRoomOnLeft = function() {
	                    return offset.left + viewPortRight + container.outerWidth(false)  > dropWidth;
	                },
	                aboveNow = $dropdown.hasClass("select2-drop-above"),
	                bodyOffset,
	                above,
	                changeDirection,
	                css,
	                resultsListNode;
	
	            // always prefer the current above/below alignment, unless there is not enough room
	            if (aboveNow) {
	                above = true;
	                if (!enoughRoomAbove && enoughRoomBelow) {
	                    changeDirection = true;
	                    above = false;
	                }
	            } else {
	                above = false;
	                if (!enoughRoomBelow && enoughRoomAbove) {
	                    changeDirection = true;
	                    above = true;
	                }
	            }
	
	            //if we are changing direction we need to get positions when dropdown is hidden;
	            if (changeDirection) {
	                $dropdown.hide();
	                offset = this.container.offset();
	                height = this.container.outerHeight(false);
	                width = this.container.outerWidth(false);
	                dropHeight = $dropdown.outerHeight(false);
	                viewPortRight = $window.scrollLeft() + windowWidth;
	                viewportBottom = $window.scrollTop() + windowHeight;
	                dropTop = offset.top + height;
	                dropLeft = offset.left;
	                dropWidth = $dropdown.outerWidth(false);
	                $dropdown.show();
	
	                // fix so the cursor does not move to the left within the search-textbox in IE
	                this.focusSearch();
	            }
	
	            if (this.opts.dropdownAutoWidth) {
	                resultsListNode = $('.select2-results', $dropdown)[0];
	                $dropdown.addClass('select2-drop-auto-width');
	                $dropdown.css('width', '');
	                // Add scrollbar width to dropdown if vertical scrollbar is present
	                dropWidth = $dropdown.outerWidth(false) + (resultsListNode.scrollHeight === resultsListNode.clientHeight ? 0 : scrollBarDimensions.width);
	                dropWidth > width ? width = dropWidth : dropWidth = width;
	                dropHeight = $dropdown.outerHeight(false);
	            }
	            else {
	                this.container.removeClass('select2-drop-auto-width');
	            }
	
	            //console.log("below/ droptop:", dropTop, "dropHeight", dropHeight, "sum", (dropTop+dropHeight)+" viewport bottom", viewportBottom, "enough?", enoughRoomBelow);
	            //console.log("above/ offset.top", offset.top, "dropHeight", dropHeight, "top", (offset.top-dropHeight), "scrollTop", this.body.scrollTop(), "enough?", enoughRoomAbove);
	
	            // fix positioning when body has an offset and is not position: static
	            if (this.body.css('position') !== 'static') {
	                bodyOffset = this.body.offset();
	                dropTop -= bodyOffset.top;
	                dropLeft -= bodyOffset.left;
	            }
	
	            if (!enoughRoomOnRight() && enoughRoomOnLeft()) {
	                dropLeft = offset.left + this.container.outerWidth(false) - dropWidth;
	            }
	
	            css =  {
	                left: dropLeft,
	                width: width
	            };
	
	            if (above) {
	                this.container.addClass("select2-drop-above");
	                $dropdown.addClass("select2-drop-above");
	                dropHeight = $dropdown.outerHeight(false);
	                css.top = offset.top - dropHeight;
	                css.bottom = 'auto';
	            }
	            else {
	                css.top = dropTop;
	                css.bottom = 'auto';
	                this.container.removeClass("select2-drop-above");
	                $dropdown.removeClass("select2-drop-above");
	            }
	            css = $.extend(css, evaluate(this.opts.dropdownCss, this.opts.element));
	
	            $dropdown.css(css);
	        },
	
	        // abstract
	        shouldOpen: function() {
	            var event;
	
	            if (this.opened()) return false;
	
	            if (this._enabled === false || this._readonly === true) return false;
	
	            event = $.Event("select2-opening");
	            this.opts.element.trigger(event);
	            return !event.isDefaultPrevented();
	        },
	
	        // abstract
	        clearDropdownAlignmentPreference: function() {
	            // clear the classes used to figure out the preference of where the dropdown should be opened
	            this.container.removeClass("select2-drop-above");
	            this.dropdown.removeClass("select2-drop-above");
	        },
	
	        /**
	         * Opens the dropdown
	         *
	         * @return {Boolean} whether or not dropdown was opened. This method will return false if, for example,
	         * the dropdown is already open, or if the 'open' event listener on the element called preventDefault().
	         */
	        // abstract
	        open: function () {
	
	            if (!this.shouldOpen()) return false;
	
	            this.opening();
	
	            // Only bind the document mousemove when the dropdown is visible
	            $document.on("mousemove.select2Event", function (e) {
	                lastMousePosition.x = e.pageX;
	                lastMousePosition.y = e.pageY;
	            });
	
	            return true;
	        },
	
	        /**
	         * Performs the opening of the dropdown
	         */
	        // abstract
	        opening: function() {
	            var cid = this.containerEventName,
	                scroll = "scroll." + cid,
	                resize = "resize."+cid,
	                orient = "orientationchange."+cid,
	                mask;
	
	            this.container.addClass("select2-dropdown-open").addClass("select2-container-active");
	
	            this.clearDropdownAlignmentPreference();
	
	            if(this.dropdown[0] !== this.body.children().last()[0]) {
	                this.dropdown.detach().appendTo(this.body);
	            }
	
	            // create the dropdown mask if doesn't already exist
	            mask = $("#select2-drop-mask");
	            if (mask.length === 0) {
	                mask = $(document.createElement("div"));
	                mask.attr("id","select2-drop-mask").attr("class","select2-drop-mask");
	                mask.hide();
	                mask.appendTo(this.body);
	                mask.on("mousedown touchstart click", function (e) {
	                    // Prevent IE from generating a click event on the body
	                    reinsertElement(mask);
	
	                    var dropdown = $("#select2-drop"), self;
	                    if (dropdown.length > 0) {
	                        self=dropdown.data("select2");
	                        if (self.opts.selectOnBlur) {
	                            self.selectHighlighted({noFocus: true});
	                        }
	                        self.close();
	                        e.preventDefault();
	                        e.stopPropagation();
	                    }
	                });
	            }
	
	            // ensure the mask is always right before the dropdown
	            if (this.dropdown.prev()[0] !== mask[0]) {
	                this.dropdown.before(mask);
	            }
	
	            // move the global id to the correct dropdown
	            $("#select2-drop").removeAttr("id");
	            this.dropdown.attr("id", "select2-drop");
	
	            // show the elements
	            mask.show();
	
	            this.positionDropdown();
	            this.dropdown.show();
	            this.positionDropdown();
	
	            this.dropdown.addClass("select2-drop-active");
	
	            // attach listeners to events that can change the position of the container and thus require
	            // the position of the dropdown to be updated as well so it does not come unglued from the container
	            var that = this;
	            this.container.parents().add(window).each(function () {
	                $(this).on(resize+" "+scroll+" "+orient, function (e) {
	                    if (that.opened()) that.positionDropdown();
	                });
	            });
	
	
	        },
	
	        // abstract
	        close: function () {
	            if (!this.opened()) return;
	
	            var cid = this.containerEventName,
	                scroll = "scroll." + cid,
	                resize = "resize."+cid,
	                orient = "orientationchange."+cid;
	
	            // unbind event listeners
	            this.container.parents().add(window).each(function () { $(this).off(scroll).off(resize).off(orient); });
	
	            this.clearDropdownAlignmentPreference();
	
	            $("#select2-drop-mask").hide();
	            this.dropdown.removeAttr("id"); // only the active dropdown has the select2-drop id
	            this.dropdown.hide();
	            this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");
	            this.results.empty();
	
	            // Now that the dropdown is closed, unbind the global document mousemove event
	            $document.off("mousemove.select2Event");
	
	            this.clearSearch();
	            this.search.removeClass("select2-active");
	
	            // Remove the aria active descendant for highlighted element
	            this.search.removeAttr("aria-activedescendant");
	            this.opts.element.trigger($.Event("select2-close"));
	        },
	
	        /**
	         * Opens control, sets input value, and updates results.
	         */
	        // abstract
	        externalSearch: function (term) {
	            this.open();
	            this.search.val(term);
	            this.updateResults(false);
	        },
	
	        // abstract
	        clearSearch: function () {
	
	        },
	
	        /**
	         * @return {Boolean} Whether or not search value was changed.
	         * @private
	         */
	        prefillNextSearchTerm: function () {
	            // initializes search's value with nextSearchTerm (if defined by user)
	            // ignore nextSearchTerm if the dropdown is opened by the user pressing a letter
	            if(this.search.val() !== "") {
	                return false;
	            }
	
	            var nextSearchTerm = this.opts.nextSearchTerm(this.data(), this.lastSearchTerm);
	            if(nextSearchTerm !== undefined){
	                this.search.val(nextSearchTerm);
	                this.search.select();
	                return true;
	            }
	
	            return false;
	        },
	
	        //abstract
	        getMaximumSelectionSize: function() {
	            return evaluate(this.opts.maximumSelectionSize, this.opts.element);
	        },
	
	        // abstract
	        ensureHighlightVisible: function () {
	            var results = this.results, children, index, child, hb, rb, y, more, topOffset;
	
	            index = this.highlight();
	
	            if (index < 0) return;
	
	            if (index == 0) {
	
	                // if the first element is highlighted scroll all the way to the top,
	                // that way any unselectable headers above it will also be scrolled
	                // into view
	
	                results.scrollTop(0);
	                return;
	            }
	
	            children = this.findHighlightableChoices().find('.select2-result-label');
	
	            child = $(children[index]);
	
	            topOffset = (child.offset() || {}).top || 0;
	
	            hb = topOffset + child.outerHeight(true);
	
	            // if this is the last child lets also make sure select2-more-results is visible
	            if (index === children.length - 1) {
	                more = results.find("li.select2-more-results");
	                if (more.length > 0) {
	                    hb = more.offset().top + more.outerHeight(true);
	                }
	            }
	
	            rb = results.offset().top + results.outerHeight(false);
	            if (hb > rb) {
	                results.scrollTop(results.scrollTop() + (hb - rb));
	            }
	            y = topOffset - results.offset().top;
	
	            // make sure the top of the element is visible
	            if (y < 0 && child.css('display') != 'none' ) {
	                results.scrollTop(results.scrollTop() + y); // y is negative
	            }
	        },
	
	        // abstract
	        findHighlightableChoices: function() {
	            return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)");
	        },
	
	        // abstract
	        moveHighlight: function (delta) {
	            var choices = this.findHighlightableChoices(),
	                index = this.highlight();
	
	            while (index > -1 && index < choices.length) {
	                index += delta;
	                var choice = $(choices[index]);
	                if (choice.hasClass("select2-result-selectable") && !choice.hasClass("select2-disabled") && !choice.hasClass("select2-selected")) {
	                    this.highlight(index);
	                    break;
	                }
	            }
	        },
	
	        // abstract
	        highlight: function (index) {
	            var choices = this.findHighlightableChoices(),
	                choice,
	                data;
	
	            if (arguments.length === 0) {
	                return indexOf(choices.filter(".select2-highlighted")[0], choices.get());
	            }
	
	            if (index >= choices.length) index = choices.length - 1;
	            if (index < 0) index = 0;
	
	            this.removeHighlight();
	
	            choice = $(choices[index]);
	            choice.addClass("select2-highlighted");
	
	            // ensure assistive technology can determine the active choice
	            this.search.attr("aria-activedescendant", choice.find(".select2-result-label").attr("id"));
	
	            this.ensureHighlightVisible();
	
	            this.liveRegion.text(choice.text());
	
	            data = choice.data("select2-data");
	            if (data) {
	                this.opts.element.trigger({ type: "select2-highlight", val: this.id(data), choice: data });
	            }
	        },
	
	        removeHighlight: function() {
	            this.results.find(".select2-highlighted").removeClass("select2-highlighted");
	        },
	
	        touchMoved: function() {
	            this._touchMoved = true;
	        },
	
	        clearTouchMoved: function() {
	          this._touchMoved = false;
	        },
	
	        // abstract
	        countSelectableResults: function() {
	            return this.findHighlightableChoices().length;
	        },
	
	        // abstract
	        highlightUnderEvent: function (event) {
	            var el = $(event.target).closest(".select2-result-selectable");
	            if (el.length > 0 && !el.is(".select2-highlighted")) {
	                var choices = this.findHighlightableChoices();
	                this.highlight(choices.index(el));
	            } else if (el.length == 0) {
	                // if we are over an unselectable item remove all highlights
	                this.removeHighlight();
	            }
	        },
	
	        // abstract
	        loadMoreIfNeeded: function () {
	            var results = this.results,
	                more = results.find("li.select2-more-results"),
	                below, // pixels the element is below the scroll fold, below==0 is when the element is starting to be visible
	                page = this.resultsPage + 1,
	                self=this,
	                term=this.search.val(),
	                context=this.context;
	
	            if (more.length === 0) return;
	            below = more.offset().top - results.offset().top - results.height();
	
	            if (below <= this.opts.loadMorePadding) {
	                more.addClass("select2-active");
	                this.opts.query({
	                        element: this.opts.element,
	                        term: term,
	                        page: page,
	                        context: context,
	                        matcher: this.opts.matcher,
	                        callback: this.bind(function (data) {
	
	                    // ignore a response if the select2 has been closed before it was received
	                    if (!self.opened()) return;
	
	
	                    self.opts.populateResults.call(this, results, data.results, {term: term, page: page, context:context});
	                    self.postprocessResults(data, false, false);
	
	                    if (data.more===true) {
	                        more.detach().appendTo(results).html(self.opts.escapeMarkup(evaluate(self.opts.formatLoadMore, self.opts.element, page+1)));
	                        window.setTimeout(function() { self.loadMoreIfNeeded(); }, 10);
	                    } else {
	                        more.remove();
	                    }
	                    self.positionDropdown();
	                    self.resultsPage = page;
	                    self.context = data.context;
	                    this.opts.element.trigger({ type: "select2-loaded", items: data });
	                })});
	            }
	        },
	
	        /**
	         * Default tokenizer function which does nothing
	         */
	        tokenize: function() {
	
	        },
	
	        /**
	         * @param initial whether or not this is the call to this method right after the dropdown has been opened
	         */
	        // abstract
	        updateResults: function (initial) {
	            var search = this.search,
	                results = this.results,
	                opts = this.opts,
	                data,
	                self = this,
	                input,
	                term = search.val(),
	                lastTerm = $.data(this.container, "select2-last-term"),
	                // sequence number used to drop out-of-order responses
	                queryNumber;
	
	            // prevent duplicate queries against the same term
	            if (initial !== true && lastTerm && equal(term, lastTerm)) return;
	
	            $.data(this.container, "select2-last-term", term);
	
	            // if the search is currently hidden we do not alter the results
	            if (initial !== true && (this.showSearchInput === false || !this.opened())) {
	                return;
	            }
	
	            function postRender() {
	                search.removeClass("select2-active");
	                self.positionDropdown();
	                if (results.find('.select2-no-results,.select2-selection-limit,.select2-searching').length) {
	                    self.liveRegion.text(results.text());
	                }
	                else {
	                    self.liveRegion.text(self.opts.formatMatches(results.find('.select2-result-selectable:not(".select2-selected")').length));
	                }
	            }
	
	            function render(html) {
	                results.html(html);
	                postRender();
	            }
	
	            queryNumber = ++this.queryCount;
	
	            var maxSelSize = this.getMaximumSelectionSize();
	            if (maxSelSize >=1) {
	                data = this.data();
	                if ($.isArray(data) && data.length >= maxSelSize && checkFormatter(opts.formatSelectionTooBig, "formatSelectionTooBig")) {
	                    render("<li class='select2-selection-limit'>" + evaluate(opts.formatSelectionTooBig, opts.element, maxSelSize) + "</li>");
	                    return;
	                }
	            }
	
	            if (search.val().length < opts.minimumInputLength) {
	                if (checkFormatter(opts.formatInputTooShort, "formatInputTooShort")) {
	                    render("<li class='select2-no-results'>" + evaluate(opts.formatInputTooShort, opts.element, search.val(), opts.minimumInputLength) + "</li>");
	                } else {
	                    render("");
	                }
	                if (initial && this.showSearch) this.showSearch(true);
	                return;
	            }
	
	            if (opts.maximumInputLength && search.val().length > opts.maximumInputLength) {
	                if (checkFormatter(opts.formatInputTooLong, "formatInputTooLong")) {
	                    render("<li class='select2-no-results'>" + evaluate(opts.formatInputTooLong, opts.element, search.val(), opts.maximumInputLength) + "</li>");
	                } else {
	                    render("");
	                }
	                return;
	            }
	
	            if (opts.formatSearching && this.findHighlightableChoices().length === 0) {
	                render("<li class='select2-searching'>" + evaluate(opts.formatSearching, opts.element) + "</li>");
	            }
	
	            search.addClass("select2-active");
	
	            this.removeHighlight();
	
	            // give the tokenizer a chance to pre-process the input
	            input = this.tokenize();
	            if (input != undefined && input != null) {
	                search.val(input);
	            }
	
	            this.resultsPage = 1;
	
	            opts.query({
	                element: opts.element,
	                    term: search.val(),
	                    page: this.resultsPage,
	                    context: null,
	                    matcher: opts.matcher,
	                    callback: this.bind(function (data) {
	                var def; // default choice
	
	                // ignore old responses
	                if (queryNumber != this.queryCount) {
	                  return;
	                }
	
	                // ignore a response if the select2 has been closed before it was received
	                if (!this.opened()) {
	                    this.search.removeClass("select2-active");
	                    return;
	                }
	
	                // handle ajax error
	                if(data.hasError !== undefined && checkFormatter(opts.formatAjaxError, "formatAjaxError")) {
	                    render("<li class='select2-ajax-error'>" + evaluate(opts.formatAjaxError, opts.element, data.jqXHR, data.textStatus, data.errorThrown) + "</li>");
	                    return;
	                }
	
	                // save context, if any
	                this.context = (data.context===undefined) ? null : data.context;
	                // create a default choice and prepend it to the list
	                if (this.opts.createSearchChoice && search.val() !== "") {
	                    def = this.opts.createSearchChoice.call(self, search.val(), data.results);
	                    if (def !== undefined && def !== null && self.id(def) !== undefined && self.id(def) !== null) {
	                        if ($(data.results).filter(
	                            function () {
	                                return equal(self.id(this), self.id(def));
	                            }).length === 0) {
	                            this.opts.createSearchChoicePosition(data.results, def);
	                        }
	                    }
	                }
	
	                if (data.results.length === 0 && checkFormatter(opts.formatNoMatches, "formatNoMatches")) {
	                    render("<li class='select2-no-results'>" + evaluate(opts.formatNoMatches, opts.element, search.val()) + "</li>");
	                    if(this.showSearch){
	                        this.showSearch(search.val());
	                    }
	                    return;
	                }
	
	                results.empty();
	                self.opts.populateResults.call(this, results, data.results, {term: search.val(), page: this.resultsPage, context:null});
	
	                if (data.more === true && checkFormatter(opts.formatLoadMore, "formatLoadMore")) {
	                    results.append("<li class='select2-more-results'>" + opts.escapeMarkup(evaluate(opts.formatLoadMore, opts.element, this.resultsPage)) + "</li>");
	                    window.setTimeout(function() { self.loadMoreIfNeeded(); }, 10);
	                }
	
	                this.postprocessResults(data, initial);
	
	                postRender();
	
	                this.opts.element.trigger({ type: "select2-loaded", items: data });
	            })});
	        },
	
	        // abstract
	        cancel: function () {
	            this.close();
	        },
	
	        // abstract
	        blur: function () {
	            // if selectOnBlur == true, select the currently highlighted option
	            if (this.opts.selectOnBlur)
	                this.selectHighlighted({noFocus: true});
	
	            this.close();
	            this.container.removeClass("select2-container-active");
	            // synonymous to .is(':focus'), which is available in jquery >= 1.6
	            if (this.search[0] === document.activeElement) { this.search.blur(); }
	            this.clearSearch();
	            this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
	        },
	
	        // abstract
	        focusSearch: function () {
	            focus(this.search);
	        },
	
	        // abstract
	        selectHighlighted: function (options) {
	            if (this._touchMoved) {
	              this.clearTouchMoved();
	              return;
	            }
	            var index=this.highlight(),
	                highlighted=this.results.find(".select2-highlighted"),
	                data = highlighted.closest('.select2-result').data("select2-data");
	
	            if (data) {
	                this.highlight(index);
	                this.onSelect(data, options);
	            } else if (options && options.noFocus) {
	                this.close();
	            }
	        },
	
	        // abstract
	        getPlaceholder: function () {
	            var placeholderOption;
	            return this.opts.element.attr("placeholder") ||
	                this.opts.element.attr("data-placeholder") || // jquery 1.4 compat
	                this.opts.element.data("placeholder") ||
	                this.opts.placeholder ||
	                ((placeholderOption = this.getPlaceholderOption()) !== undefined ? placeholderOption.text() : undefined);
	        },
	
	        // abstract
	        getPlaceholderOption: function() {
	            if (this.select) {
	                var firstOption = this.select.children('option').first();
	                if (this.opts.placeholderOption !== undefined ) {
	                    //Determine the placeholder option based on the specified placeholderOption setting
	                    return (this.opts.placeholderOption === "first" && firstOption) ||
	                           (typeof this.opts.placeholderOption === "function" && this.opts.placeholderOption(this.select));
	                } else if ($.trim(firstOption.text()) === "" && firstOption.val() === "") {
	                    //No explicit placeholder option specified, use the first if it's blank
	                    return firstOption;
	                }
	            }
	        },
	
	        /**
	         * Get the desired width for the container element.  This is
	         * derived first from option `width` passed to select2, then
	         * the inline 'style' on the original element, and finally
	         * falls back to the jQuery calculated element width.
	         */
	        // abstract
	        initContainerWidth: function () {
	            function resolveContainerWidth() {
	                var style, attrs, matches, i, l, attr;
	
	                if (this.opts.width === "off") {
	                    return null;
	                } else if (this.opts.width === "element"){
	                    return this.opts.element.outerWidth(false) === 0 ? 'auto' : this.opts.element.outerWidth(false) + 'px';
	                } else if (this.opts.width === "copy" || this.opts.width === "resolve") {
	                    // check if there is inline style on the element that contains width
	                    style = this.opts.element.attr('style');
	                    if (typeof(style) === "string") {
	                        attrs = style.split(';');
	                        for (i = 0, l = attrs.length; i < l; i = i + 1) {
	                            attr = attrs[i].replace(/\s/g, '');
	                            matches = attr.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);
	                            if (matches !== null && matches.length >= 1)
	                                return matches[1];
	                        }
	                    }
	
	                    if (this.opts.width === "resolve") {
	                        // next check if css('width') can resolve a width that is percent based, this is sometimes possible
	                        // when attached to input type=hidden or elements hidden via css
	                        style = this.opts.element.css('width');
	                        if (style.indexOf("%") > 0) return style;
	
	                        // finally, fallback on the calculated width of the element
	                        return (this.opts.element.outerWidth(false) === 0 ? 'auto' : this.opts.element.outerWidth(false) + 'px');
	                    }
	
	                    return null;
	                } else if ($.isFunction(this.opts.width)) {
	                    return this.opts.width();
	                } else {
	                    return this.opts.width;
	               }
	            };
	
	            var width = resolveContainerWidth.call(this);
	            if (width !== null) {
	                this.container.css("width", width);
	            }
	        }
	    });
	
	    SingleSelect2 = clazz(AbstractSelect2, {
	
	        // single
	
	        createContainer: function () {
	            var container = $(document.createElement("div")).attr({
	                "class": "select2-container"
	            }).html([
	                "<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>",
	                "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>",
	                "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>",
	                "</a>",
	                "<label for='' class='select2-offscreen'></label>",
	                "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />",
	                "<div class='select2-drop select2-display-none'>",
	                "   <div class='select2-search'>",
	                "       <label for='' class='select2-offscreen'></label>",
	                "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'",
	                "       aria-autocomplete='list' />",
	                "   </div>",
	                "   <ul class='select2-results' role='listbox'>",
	                "   </ul>",
	                "</div>"].join(""));
	            return container;
	        },
	
	        // single
	        enableInterface: function() {
	            if (this.parent.enableInterface.apply(this, arguments)) {
	                this.focusser.prop("disabled", !this.isInterfaceEnabled());
	            }
	        },
	
	        // single
	        opening: function () {
	            var el, range, len;
	
	            if (this.opts.minimumResultsForSearch >= 0) {
	                this.showSearch(true);
	            }
	
	            this.parent.opening.apply(this, arguments);
	
	            if (this.showSearchInput !== false) {
	                // IE appends focusser.val() at the end of field :/ so we manually insert it at the beginning using a range
	                // all other browsers handle this just fine
	
	                this.search.val(this.focusser.val());
	            }
	            if (this.opts.shouldFocusInput(this)) {
	                this.search.focus();
	                // move the cursor to the end after focussing, otherwise it will be at the beginning and
	                // new text will appear *before* focusser.val()
	                el = this.search.get(0);
	                if (el.createTextRange) {
	                    range = el.createTextRange();
	                    range.collapse(false);
	                    range.select();
	                } else if (el.setSelectionRange) {
	                    len = this.search.val().length;
	                    el.setSelectionRange(len, len);
	                }
	            }
	
	            this.prefillNextSearchTerm();
	
	            this.focusser.prop("disabled", true).val("");
	            this.updateResults(true);
	            this.opts.element.trigger($.Event("select2-open"));
	        },
	
	        // single
	        close: function () {
	            if (!this.opened()) return;
	            this.parent.close.apply(this, arguments);
	
	            this.focusser.prop("disabled", false);
	
	            if (this.opts.shouldFocusInput(this)) {
	                this.focusser.focus();
	            }
	        },
	
	        // single
	        focus: function () {
	            if (this.opened()) {
	                this.close();
	            } else {
	                this.focusser.prop("disabled", false);
	                if (this.opts.shouldFocusInput(this)) {
	                    this.focusser.focus();
	                }
	            }
	        },
	
	        // single
	        isFocused: function () {
	            return this.container.hasClass("select2-container-active");
	        },
	
	        // single
	        cancel: function () {
	            this.parent.cancel.apply(this, arguments);
	            this.focusser.prop("disabled", false);
	
	            if (this.opts.shouldFocusInput(this)) {
	                this.focusser.focus();
	            }
	        },
	
	        // single
	        destroy: function() {
	            $("label[for='" + this.focusser.attr('id') + "']")
	                .attr('for', this.opts.element.attr("id"));
	            this.parent.destroy.apply(this, arguments);
	
	            cleanupJQueryElements.call(this,
	                "selection",
	                "focusser"
	            );
	        },
	
	        // single
	        initContainer: function () {
	
	            var selection,
	                container = this.container,
	                dropdown = this.dropdown,
	                idSuffix = nextUid(),
	                elementLabel;
	
	            if (this.opts.minimumResultsForSearch < 0) {
	                this.showSearch(false);
	            } else {
	                this.showSearch(true);
	            }
	
	            this.selection = selection = container.find(".select2-choice");
	
	            this.focusser = container.find(".select2-focusser");
	
	            // add aria associations
	            selection.find(".select2-chosen").attr("id", "select2-chosen-"+idSuffix);
	            this.focusser.attr("aria-labelledby", "select2-chosen-"+idSuffix);
	            this.results.attr("id", "select2-results-"+idSuffix);
	            this.search.attr("aria-owns", "select2-results-"+idSuffix);
	
	            // rewrite labels from original element to focusser
	            this.focusser.attr("id", "s2id_autogen"+idSuffix);
	
	            elementLabel = $("label[for='" + this.opts.element.attr("id") + "']");
	            this.opts.element.on('focus.select2', this.bind(function () { this.focus(); }));
	
	            this.focusser.prev()
	                .text(elementLabel.text())
	                .attr('for', this.focusser.attr('id'));
	
	            // Ensure the original element retains an accessible name
	            var originalTitle = this.opts.element.attr("title");
	            this.opts.element.attr("title", (originalTitle || elementLabel.text()));
	
	            this.focusser.attr("tabindex", this.elementTabIndex);
	
	            // write label for search field using the label from the focusser element
	            this.search.attr("id", this.focusser.attr('id') + '_search');
	
	            this.search.prev()
	                .text($("label[for='" + this.focusser.attr('id') + "']").text())
	                .attr('for', this.search.attr('id'));
	
	            this.search.on("keydown", this.bind(function (e) {
	                if (!this.isInterfaceEnabled()) return;
	
	                // filter 229 keyCodes (input method editor is processing key input)
	                if (229 == e.keyCode) return;
	
	                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
	                    // prevent the page from scrolling
	                    killEvent(e);
	                    return;
	                }
	
	                switch (e.which) {
	                    case KEY.UP:
	                    case KEY.DOWN:
	                        this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
	                        killEvent(e);
	                        return;
	                    case KEY.ENTER:
	                        this.selectHighlighted();
	                        killEvent(e);
	                        return;
	                    case KEY.TAB:
	                        this.selectHighlighted({noFocus: true});
	                        return;
	                    case KEY.ESC:
	                        this.cancel(e);
	                        killEvent(e);
	                        return;
	                }
	            }));
	
	            this.search.on("blur", this.bind(function(e) {
	                // a workaround for chrome to keep the search field focussed when the scroll bar is used to scroll the dropdown.
	                // without this the search field loses focus which is annoying
	                if (document.activeElement === this.body.get(0)) {
	                    window.setTimeout(this.bind(function() {
	                        if (this.opened() && this.results && this.results.length > 1) {
	                            this.search.focus();
	                        }
	                    }), 0);
	                }
	            }));
	
	            this.focusser.on("keydown", this.bind(function (e) {
	                if (!this.isInterfaceEnabled()) return;
	
	                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC) {
	                    return;
	                }
	
	                if (this.opts.openOnEnter === false && e.which === KEY.ENTER) {
	                    killEvent(e);
	                    return;
	                }
	
	                if (e.which == KEY.DOWN || e.which == KEY.UP
	                    || (e.which == KEY.ENTER && this.opts.openOnEnter)) {
	
	                    if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) return;
	
	                    this.open();
	                    killEvent(e);
	                    return;
	                }
	
	                if (e.which == KEY.DELETE || e.which == KEY.BACKSPACE) {
	                    if (this.opts.allowClear) {
	                        this.clear();
	                    }
	                    killEvent(e);
	                    return;
	                }
	            }));
	
	
	            installKeyUpChangeEvent(this.focusser);
	            this.focusser.on("keyup-change input", this.bind(function(e) {
	                if (this.opts.minimumResultsForSearch >= 0) {
	                    e.stopPropagation();
	                    if (this.opened()) return;
	                    this.open();
	                }
	            }));
	
	            selection.on("mousedown touchstart", "abbr", this.bind(function (e) {
	                if (!this.isInterfaceEnabled()) {
	                    return;
	                }
	
	                this.clear();
	                killEventImmediately(e);
	                this.close();
	
	                if (this.selection) {
	                    this.selection.focus();
	                }
	            }));
	
	            selection.on("mousedown touchstart", this.bind(function (e) {
	                // Prevent IE from generating a click event on the body
	                reinsertElement(selection);
	
	                if (!this.container.hasClass("select2-container-active")) {
	                    this.opts.element.trigger($.Event("select2-focus"));
	                }
	
	                if (this.opened()) {
	                    this.close();
	                } else if (this.isInterfaceEnabled()) {
	                    this.open();
	                }
	
	                killEvent(e);
	            }));
	
	            dropdown.on("mousedown touchstart", this.bind(function() {
	                if (this.opts.shouldFocusInput(this)) {
	                    this.search.focus();
	                }
	            }));
	
	            selection.on("focus", this.bind(function(e) {
	                killEvent(e);
	            }));
	
	            this.focusser.on("focus", this.bind(function(){
	                if (!this.container.hasClass("select2-container-active")) {
	                    this.opts.element.trigger($.Event("select2-focus"));
	                }
	                this.container.addClass("select2-container-active");
	            })).on("blur", this.bind(function() {
	                if (!this.opened()) {
	                    this.container.removeClass("select2-container-active");
	                    this.opts.element.trigger($.Event("select2-blur"));
	                }
	            }));
	            this.search.on("focus", this.bind(function(){
	                if (!this.container.hasClass("select2-container-active")) {
	                    this.opts.element.trigger($.Event("select2-focus"));
	                }
	                this.container.addClass("select2-container-active");
	            }));
	
	            this.initContainerWidth();
	            this.opts.element.hide();
	            this.setPlaceholder();
	
	        },
	
	        // single
	        clear: function(triggerChange) {
	            var data=this.selection.data("select2-data");
	            if (data) { // guard against queued quick consecutive clicks
	                var evt = $.Event("select2-clearing");
	                this.opts.element.trigger(evt);
	                if (evt.isDefaultPrevented()) {
	                    return;
	                }
	                var placeholderOption = this.getPlaceholderOption();
	                this.opts.element.val(placeholderOption ? placeholderOption.val() : "");
	                this.selection.find(".select2-chosen").empty();
	                this.selection.removeData("select2-data");
	                this.setPlaceholder();
	
	                if (triggerChange !== false){
	                    this.opts.element.trigger({ type: "select2-removed", val: this.id(data), choice: data });
	                    this.triggerChange({removed:data});
	                }
	            }
	        },
	
	        /**
	         * Sets selection based on source element's value
	         */
	        // single
	        initSelection: function () {
	            var selected;
	            if (this.isPlaceholderOptionSelected()) {
	                this.updateSelection(null);
	                this.close();
	                this.setPlaceholder();
	            } else {
	                var self = this;
	                this.opts.initSelection.call(null, this.opts.element, function(selected){
	                    if (selected !== undefined && selected !== null) {
	                        self.updateSelection(selected);
	                        self.close();
	                        self.setPlaceholder();
	                        self.lastSearchTerm = self.search.val();
	                    }
	                });
	            }
	        },
	
	        isPlaceholderOptionSelected: function() {
	            var placeholderOption;
	            if (this.getPlaceholder() === undefined) return false; // no placeholder specified so no option should be considered
	            return ((placeholderOption = this.getPlaceholderOption()) !== undefined && placeholderOption.prop("selected"))
	                || (this.opts.element.val() === "")
	                || (this.opts.element.val() === undefined)
	                || (this.opts.element.val() === null);
	        },
	
	        // single
	        prepareOpts: function () {
	            var opts = this.parent.prepareOpts.apply(this, arguments),
	                self=this;
	
	            if (opts.element.get(0).tagName.toLowerCase() === "select") {
	                // install the selection initializer
	                opts.initSelection = function (element, callback) {
	                    var selected = element.find("option").filter(function() { return this.selected && !this.disabled });
	                    // a single select box always has a value, no need to null check 'selected'
	                    callback(self.optionToData(selected));
	                };
	            } else if ("data" in opts) {
	                // install default initSelection when applied to hidden input and data is local
	                opts.initSelection = opts.initSelection || function (element, callback) {
	                    var id = element.val();
	                    //search in data by id, storing the actual matching item
	                    var match = null;
	                    opts.query({
	                        matcher: function(term, text, el){
	                            var is_match = equal(id, opts.id(el));
	                            if (is_match) {
	                                match = el;
	                            }
	                            return is_match;
	                        },
	                        callback: !$.isFunction(callback) ? $.noop : function() {
	                            callback(match);
	                        }
	                    });
	                };
	            }
	
	            return opts;
	        },
	
	        // single
	        getPlaceholder: function() {
	            // if a placeholder is specified on a single select without a valid placeholder option ignore it
	            if (this.select) {
	                if (this.getPlaceholderOption() === undefined) {
	                    return undefined;
	                }
	            }
	
	            return this.parent.getPlaceholder.apply(this, arguments);
	        },
	
	        // single
	        setPlaceholder: function () {
	            var placeholder = this.getPlaceholder();
	
	            if (this.isPlaceholderOptionSelected() && placeholder !== undefined) {
	
	                // check for a placeholder option if attached to a select
	                if (this.select && this.getPlaceholderOption() === undefined) return;
	
	                this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(placeholder));
	
	                this.selection.addClass("select2-default");
	
	                this.container.removeClass("select2-allowclear");
	            }
	        },
	
	        // single
	        postprocessResults: function (data, initial, noHighlightUpdate) {
	            var selected = 0, self = this, showSearchInput = true;
	
	            // find the selected element in the result list
	
	            this.findHighlightableChoices().each2(function (i, elm) {
	                if (equal(self.id(elm.data("select2-data")), self.opts.element.val())) {
	                    selected = i;
	                    return false;
	                }
	            });
	
	            // and highlight it
	            if (noHighlightUpdate !== false) {
	                if (initial === true && selected >= 0) {
	                    this.highlight(selected);
	                } else {
	                    this.highlight(0);
	                }
	            }
	
	            // hide the search box if this is the first we got the results and there are enough of them for search
	
	            if (initial === true) {
	                var min = this.opts.minimumResultsForSearch;
	                if (min >= 0) {
	                    this.showSearch(countResults(data.results) >= min);
	                }
	            }
	        },
	
	        // single
	        showSearch: function(showSearchInput) {
	            if (this.showSearchInput === showSearchInput) return;
	
	            this.showSearchInput = showSearchInput;
	
	            this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !showSearchInput);
	            this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !showSearchInput);
	            //add "select2-with-searchbox" to the container if search box is shown
	            $(this.dropdown, this.container).toggleClass("select2-with-searchbox", showSearchInput);
	        },
	
	        // single
	        onSelect: function (data, options) {
	
	            if (!this.triggerSelect(data)) { return; }
	
	            var old = this.opts.element.val(),
	                oldData = this.data();
	
	            this.opts.element.val(this.id(data));
	            this.updateSelection(data);
	
	            this.opts.element.trigger({ type: "select2-selected", val: this.id(data), choice: data });
	
	            this.lastSearchTerm = this.search.val();
	            this.close();
	
	            if ((!options || !options.noFocus) && this.opts.shouldFocusInput(this)) {
	                this.focusser.focus();
	            }
	
	            if (!equal(old, this.id(data))) {
	                this.triggerChange({ added: data, removed: oldData });
	            }
	        },
	
	        // single
	        updateSelection: function (data) {
	
	            var container=this.selection.find(".select2-chosen"), formatted, cssClass;
	
	            this.selection.data("select2-data", data);
	
	            container.empty();
	            if (data !== null) {
	                formatted=this.opts.formatSelection(data, container, this.opts.escapeMarkup);
	            }
	            if (formatted !== undefined) {
	                container.append(formatted);
	            }
	            cssClass=this.opts.formatSelectionCssClass(data, container);
	            if (cssClass !== undefined) {
	                container.addClass(cssClass);
	            }
	
	            this.selection.removeClass("select2-default");
	
	            if (this.opts.allowClear && this.getPlaceholder() !== undefined) {
	                this.container.addClass("select2-allowclear");
	            }
	        },
	
	        // single
	        val: function () {
	            var val,
	                triggerChange = false,
	                data = null,
	                self = this,
	                oldData = this.data();
	
	            if (arguments.length === 0) {
	                return this.opts.element.val();
	            }
	
	            val = arguments[0];
	
	            if (arguments.length > 1) {
	                triggerChange = arguments[1];
	
	                if (this.opts.debug && console && console.warn) {
	                    console.warn(
	                        'Select2: The second option to `select2("val")` is not supported in Select2 4.0.0. ' +
	                        'The `change` event will always be triggered in 4.0.0.'
	                    );
	                }
	            }
	
	            if (this.select) {
	                if (this.opts.debug && console && console.warn) {
	                    console.warn(
	                        'Select2: Setting the value on a <select> using `select2("val")` is no longer supported in 4.0.0. ' +
	                        'You can use the `.val(newValue).trigger("change")` method provided by jQuery instead.'
	                    );
	                }
	
	                this.select
	                    .val(val)
	                    .find("option").filter(function() { return this.selected }).each2(function (i, elm) {
	                        data = self.optionToData(elm);
	                        return false;
	                    });
	                this.updateSelection(data);
	                this.setPlaceholder();
	                if (triggerChange) {
	                    this.triggerChange({added: data, removed:oldData});
	                }
	            } else {
	                // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
	                if (!val && val !== 0) {
	                    this.clear(triggerChange);
	                    return;
	                }
	                if (this.opts.initSelection === undefined) {
	                    throw new Error("cannot call val() if initSelection() is not defined");
	                }
	                this.opts.element.val(val);
	                this.opts.initSelection(this.opts.element, function(data){
	                    self.opts.element.val(!data ? "" : self.id(data));
	                    self.updateSelection(data);
	                    self.setPlaceholder();
	                    if (triggerChange) {
	                        self.triggerChange({added: data, removed:oldData});
	                    }
	                });
	            }
	        },
	
	        // single
	        clearSearch: function () {
	            this.search.val("");
	            this.focusser.val("");
	        },
	
	        // single
	        data: function(value) {
	            var data,
	                triggerChange = false;
	
	            if (arguments.length === 0) {
	                data = this.selection.data("select2-data");
	                if (data == undefined) data = null;
	                return data;
	            } else {
	                if (this.opts.debug && console && console.warn) {
	                    console.warn(
	                        'Select2: The `select2("data")` method can no longer set selected values in 4.0.0, ' +
	                        'consider using the `.val()` method instead.'
	                    );
	                }
	
	                if (arguments.length > 1) {
	                    triggerChange = arguments[1];
	                }
	                if (!value) {
	                    this.clear(triggerChange);
	                } else {
	                    data = this.data();
	                    this.opts.element.val(!value ? "" : this.id(value));
	                    this.updateSelection(value);
	                    if (triggerChange) {
	                        this.triggerChange({added: value, removed:data});
	                    }
	                }
	            }
	        }
	    });
	
	    MultiSelect2 = clazz(AbstractSelect2, {
	
	        // multi
	        createContainer: function () {
	            var container = $(document.createElement("div")).attr({
	                "class": "select2-container select2-container-multi"
	            }).html([
	                "<ul class='select2-choices'>",
	                "  <li class='select2-search-field'>",
	                "    <label for='' class='select2-offscreen'></label>",
	                "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>",
	                "  </li>",
	                "</ul>",
	                "<div class='select2-drop select2-drop-multi select2-display-none'>",
	                "   <ul class='select2-results'>",
	                "   </ul>",
	                "</div>"].join(""));
	            return container;
	        },
	
	        // multi
	        prepareOpts: function () {
	            var opts = this.parent.prepareOpts.apply(this, arguments),
	                self=this;
	
	            // TODO validate placeholder is a string if specified
	            if (opts.element.get(0).tagName.toLowerCase() === "select") {
	                // install the selection initializer
	                opts.initSelection = function (element, callback) {
	
	                    var data = [];
	
	                    element.find("option").filter(function() { return this.selected && !this.disabled }).each2(function (i, elm) {
	                        data.push(self.optionToData(elm));
	                    });
	                    callback(data);
	                };
	            } else if ("data" in opts) {
	                // install default initSelection when applied to hidden input and data is local
	                opts.initSelection = opts.initSelection || function (element, callback) {
	                    var ids = splitVal(element.val(), opts.separator, opts.transformVal);
	                    //search in data by array of ids, storing matching items in a list
	                    var matches = [];
	                    opts.query({
	                        matcher: function(term, text, el){
	                            var is_match = $.grep(ids, function(id) {
	                                return equal(id, opts.id(el));
	                            }).length;
	                            if (is_match) {
	                                matches.push(el);
	                            }
	                            return is_match;
	                        },
	                        callback: !$.isFunction(callback) ? $.noop : function() {
	                            // reorder matches based on the order they appear in the ids array because right now
	                            // they are in the order in which they appear in data array
	                            var ordered = [];
	                            for (var i = 0; i < ids.length; i++) {
	                                var id = ids[i];
	                                for (var j = 0; j < matches.length; j++) {
	                                    var match = matches[j];
	                                    if (equal(id, opts.id(match))) {
	                                        ordered.push(match);
	                                        matches.splice(j, 1);
	                                        break;
	                                    }
	                                }
	                            }
	                            callback(ordered);
	                        }
	                    });
	                };
	            }
	
	            return opts;
	        },
	
	        // multi
	        selectChoice: function (choice) {
	
	            var selected = this.container.find(".select2-search-choice-focus");
	            if (selected.length && choice && choice[0] == selected[0]) {
	
	            } else {
	                if (selected.length) {
	                    this.opts.element.trigger("choice-deselected", selected);
	                }
	                selected.removeClass("select2-search-choice-focus");
	                if (choice && choice.length) {
	                    this.close();
	                    choice.addClass("select2-search-choice-focus");
	                    this.opts.element.trigger("choice-selected", choice);
	                }
	            }
	        },
	
	        // multi
	        destroy: function() {
	            $("label[for='" + this.search.attr('id') + "']")
	                .attr('for', this.opts.element.attr("id"));
	            this.parent.destroy.apply(this, arguments);
	
	            cleanupJQueryElements.call(this,
	                "searchContainer",
	                "selection"
	            );
	        },
	
	        // multi
	        initContainer: function () {
	
	            var selector = ".select2-choices", selection;
	
	            this.searchContainer = this.container.find(".select2-search-field");
	            this.selection = selection = this.container.find(selector);
	
	            var _this = this;
	            this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function (e) {
	                _this.search[0].focus();
	                _this.selectChoice($(this));
	            });
	
	            // rewrite labels from original element to focusser
	            this.search.attr("id", "s2id_autogen"+nextUid());
	
	            this.search.prev()
	                .text($("label[for='" + this.opts.element.attr("id") + "']").text())
	                .attr('for', this.search.attr('id'));
	            this.opts.element.on('focus.select2', this.bind(function () { this.focus(); }));
	
	            this.search.on("input paste", this.bind(function() {
	                if (this.search.attr('placeholder') && this.search.val().length == 0) return;
	                if (!this.isInterfaceEnabled()) return;
	                if (!this.opened()) {
	                    this.open();
	                }
	            }));
	
	            this.search.attr("tabindex", this.elementTabIndex);
	
	            this.keydowns = 0;
	            this.search.on("keydown", this.bind(function (e) {
	                if (!this.isInterfaceEnabled()) return;
	
	                ++this.keydowns;
	                var selected = selection.find(".select2-search-choice-focus");
	                var prev = selected.prev(".select2-search-choice:not(.select2-locked)");
	                var next = selected.next(".select2-search-choice:not(.select2-locked)");
	                var pos = getCursorInfo(this.search);
	
	                if (selected.length &&
	                    (e.which == KEY.LEFT || e.which == KEY.RIGHT || e.which == KEY.BACKSPACE || e.which == KEY.DELETE || e.which == KEY.ENTER)) {
	                    var selectedChoice = selected;
	                    if (e.which == KEY.LEFT && prev.length) {
	                        selectedChoice = prev;
	                    }
	                    else if (e.which == KEY.RIGHT) {
	                        selectedChoice = next.length ? next : null;
	                    }
	                    else if (e.which === KEY.BACKSPACE) {
	                        if (this.unselect(selected.first())) {
	                            this.search.width(10);
	                            selectedChoice = prev.length ? prev : next;
	                        }
	                    } else if (e.which == KEY.DELETE) {
	                        if (this.unselect(selected.first())) {
	                            this.search.width(10);
	                            selectedChoice = next.length ? next : null;
	                        }
	                    } else if (e.which == KEY.ENTER) {
	                        selectedChoice = null;
	                    }
	
	                    this.selectChoice(selectedChoice);
	                    killEvent(e);
	                    if (!selectedChoice || !selectedChoice.length) {
	                        this.open();
	                    }
	                    return;
	                } else if (((e.which === KEY.BACKSPACE && this.keydowns == 1)
	                    || e.which == KEY.LEFT) && (pos.offset == 0 && !pos.length)) {
	
	                    this.selectChoice(selection.find(".select2-search-choice:not(.select2-locked)").last());
	                    killEvent(e);
	                    return;
	                } else {
	                    this.selectChoice(null);
	                }
	
	                if (this.opened()) {
	                    switch (e.which) {
	                    case KEY.UP:
	                    case KEY.DOWN:
	                        this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
	                        killEvent(e);
	                        return;
	                    case KEY.ENTER:
	                        this.selectHighlighted();
	                        killEvent(e);
	                        return;
	                    case KEY.TAB:
	                        this.selectHighlighted({noFocus:true});
	                        this.close();
	                        return;
	                    case KEY.ESC:
	                        this.cancel(e);
	                        killEvent(e);
	                        return;
	                    }
	                }
	
	                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e)
	                 || e.which === KEY.BACKSPACE || e.which === KEY.ESC) {
	                    return;
	                }
	
	                if (e.which === KEY.ENTER) {
	                    if (this.opts.openOnEnter === false) {
	                        return;
	                    } else if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
	                        return;
	                    }
	                }
	
	                this.open();
	
	                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
	                    // prevent the page from scrolling
	                    killEvent(e);
	                }
	
	                if (e.which === KEY.ENTER) {
	                    // prevent form from being submitted
	                    killEvent(e);
	                }
	
	            }));
	
	            this.search.on("keyup", this.bind(function (e) {
	                this.keydowns = 0;
	                this.resizeSearch();
	            })
	            );
	
	            this.search.on("blur", this.bind(function(e) {
	                this.container.removeClass("select2-container-active");
	                this.search.removeClass("select2-focused");
	                this.selectChoice(null);
	                if (!this.opened()) this.clearSearch();
	                e.stopImmediatePropagation();
	                this.opts.element.trigger($.Event("select2-blur"));
	            }));
	
	            this.container.on("click", selector, this.bind(function (e) {
	                if (!this.isInterfaceEnabled()) return;
	                if ($(e.target).closest(".select2-search-choice").length > 0) {
	                    // clicked inside a select2 search choice, do not open
	                    return;
	                }
	                this.selectChoice(null);
	                this.clearPlaceholder();
	                if (!this.container.hasClass("select2-container-active")) {
	                    this.opts.element.trigger($.Event("select2-focus"));
	                }
	                this.open();
	                this.focusSearch();
	                e.preventDefault();
	            }));
	
	            this.container.on("focus", selector, this.bind(function () {
	                if (!this.isInterfaceEnabled()) return;
	                if (!this.container.hasClass("select2-container-active")) {
	                    this.opts.element.trigger($.Event("select2-focus"));
	                }
	                this.container.addClass("select2-container-active");
	                this.dropdown.addClass("select2-drop-active");
	                this.clearPlaceholder();
	            }));
	
	            this.initContainerWidth();
	            this.opts.element.hide();
	
	            // set the placeholder if necessary
	            this.clearSearch();
	        },
	
	        // multi
	        enableInterface: function() {
	            if (this.parent.enableInterface.apply(this, arguments)) {
	                this.search.prop("disabled", !this.isInterfaceEnabled());
	            }
	        },
	
	        // multi
	        initSelection: function () {
	            var data;
	            if (this.opts.element.val() === "" && this.opts.element.text() === "") {
	                this.updateSelection([]);
	                this.close();
	                // set the placeholder if necessary
	                this.clearSearch();
	            }
	            if (this.select || this.opts.element.val() !== "") {
	                var self = this;
	                this.opts.initSelection.call(null, this.opts.element, function(data){
	                    if (data !== undefined && data !== null) {
	                        self.updateSelection(data);
	                        self.close();
	                        // set the placeholder if necessary
	                        self.clearSearch();
	                    }
	                });
	            }
	        },
	
	        // multi
	        clearSearch: function () {
	            var placeholder = this.getPlaceholder(),
	                maxWidth = this.getMaxSearchWidth();
	
	            if (placeholder !== undefined  && this.getVal().length === 0 && this.search.hasClass("select2-focused") === false) {
	                this.search.val(placeholder).addClass("select2-default");
	                // stretch the search box to full width of the container so as much of the placeholder is visible as possible
	                // we could call this.resizeSearch(), but we do not because that requires a sizer and we do not want to create one so early because of a firefox bug, see #944
	                this.search.width(maxWidth > 0 ? maxWidth : this.container.css("width"));
	            } else {
	                this.search.val("").width(10);
	            }
	        },
	
	        // multi
	        clearPlaceholder: function () {
	            if (this.search.hasClass("select2-default")) {
	                this.search.val("").removeClass("select2-default");
	            }
	        },
	
	        // multi
	        opening: function () {
	            this.clearPlaceholder(); // should be done before super so placeholder is not used to search
	            this.resizeSearch();
	
	            this.parent.opening.apply(this, arguments);
	
	            this.focusSearch();
	
	            this.prefillNextSearchTerm();
	            this.updateResults(true);
	
	            if (this.opts.shouldFocusInput(this)) {
	                this.search.focus();
	            }
	            this.opts.element.trigger($.Event("select2-open"));
	        },
	
	        // multi
	        close: function () {
	            if (!this.opened()) return;
	            this.parent.close.apply(this, arguments);
	        },
	
	        // multi
	        focus: function () {
	            this.close();
	            this.search.focus();
	        },
	
	        // multi
	        isFocused: function () {
	            return this.search.hasClass("select2-focused");
	        },
	
	        // multi
	        updateSelection: function (data) {
	            var ids = {}, filtered = [], self = this;
	
	            // filter out duplicates
	            $(data).each(function () {
	                if (!(self.id(this) in ids)) {
	                    ids[self.id(this)] = 0;
	                    filtered.push(this);
	                }
	            });
	
	            this.selection.find(".select2-search-choice").remove();
	            this.addSelectedChoice(filtered);
	            self.postprocessResults();
	        },
	
	        // multi
	        tokenize: function() {
	            var input = this.search.val();
	            input = this.opts.tokenizer.call(this, input, this.data(), this.bind(this.onSelect), this.opts);
	            if (input != null && input != undefined) {
	                this.search.val(input);
	                if (input.length > 0) {
	                    this.open();
	                }
	            }
	
	        },
	
	        // multi
	        onSelect: function (data, options) {
	
	            if (!this.triggerSelect(data) || data.text === "") { return; }
	
	            this.addSelectedChoice(data);
	
	            this.opts.element.trigger({ type: "selected", val: this.id(data), choice: data });
	
	            // keep track of the search's value before it gets cleared
	            this.lastSearchTerm = this.search.val();
	
	            this.clearSearch();
	            this.updateResults();
	
	            if (this.select || !this.opts.closeOnSelect) this.postprocessResults(data, false, this.opts.closeOnSelect===true);
	
	            if (this.opts.closeOnSelect) {
	                this.close();
	                this.search.width(10);
	            } else {
	                if (this.countSelectableResults()>0) {
	                    this.search.width(10);
	                    this.resizeSearch();
	                    if (this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize()) {
	                        // if we reached max selection size repaint the results so choices
	                        // are replaced with the max selection reached message
	                        this.updateResults(true);
	                    } else {
	                        // initializes search's value with nextSearchTerm and update search result
	                        if (this.prefillNextSearchTerm()) {
	                            this.updateResults();
	                        }
	                    }
	                    this.positionDropdown();
	                } else {
	                    // if nothing left to select close
	                    this.close();
	                    this.search.width(10);
	                }
	            }
	
	            // since its not possible to select an element that has already been
	            // added we do not need to check if this is a new element before firing change
	            this.triggerChange({ added: data });
	
	            if (!options || !options.noFocus)
	                this.focusSearch();
	        },
	
	        // multi
	        cancel: function () {
	            this.close();
	            this.focusSearch();
	        },
	
	        addSelectedChoice: function (data) {
	            var val = this.getVal(), self = this;
	            $(data).each(function () {
	                val.push(self.createChoice(this));
	            });
	            this.setVal(val);
	        },
	
	        createChoice: function (data) {
	            var enableChoice = !data.locked,
	                enabledItem = $(
	                    "<li class='select2-search-choice'>" +
	                    "    <div></div>" +
	                    "    <a href='#' class='select2-search-choice-close' tabindex='-1'></a>" +
	                    "</li>"),
	                disabledItem = $(
	                    "<li class='select2-search-choice select2-locked'>" +
	                    "<div></div>" +
	                    "</li>");
	            var choice = enableChoice ? enabledItem : disabledItem,
	                id = this.id(data),
	                formatted,
	                cssClass;
	
	            formatted=this.opts.formatSelection(data, choice.find("div"), this.opts.escapeMarkup);
	            if (formatted != undefined) {
	                choice.find("div").replaceWith($("<div></div>").html(formatted));
	            }
	            cssClass=this.opts.formatSelectionCssClass(data, choice.find("div"));
	            if (cssClass != undefined) {
	                choice.addClass(cssClass);
	            }
	
	            if(enableChoice){
	              choice.find(".select2-search-choice-close")
	                  .on("mousedown", killEvent)
	                  .on("click dblclick", this.bind(function (e) {
	                  if (!this.isInterfaceEnabled()) return;
	
	                  this.unselect($(e.target));
	                  this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
	                  killEvent(e);
	                  this.close();
	                  this.focusSearch();
	              })).on("focus", this.bind(function () {
	                  if (!this.isInterfaceEnabled()) return;
	                  this.container.addClass("select2-container-active");
	                  this.dropdown.addClass("select2-drop-active");
	              }));
	            }
	
	            choice.data("select2-data", data);
	            choice.insertBefore(this.searchContainer);
	
	            return id;
	        },
	
	        // multi
	        unselect: function (selected) {
	            var val = this.getVal(),
	                data,
	                index;
	            selected = selected.closest(".select2-search-choice");
	
	            if (selected.length === 0) {
	                throw "Invalid argument: " + selected + ". Must be .select2-search-choice";
	            }
	
	            data = selected.data("select2-data");
	
	            if (!data) {
	                // prevent a race condition when the 'x' is clicked really fast repeatedly the event can be queued
	                // and invoked on an element already removed
	                return;
	            }
	
	            var evt = $.Event("select2-removing");
	            evt.val = this.id(data);
	            evt.choice = data;
	            this.opts.element.trigger(evt);
	
	            if (evt.isDefaultPrevented()) {
	                return false;
	            }
	
	            while((index = indexOf(this.id(data), val)) >= 0) {
	                val.splice(index, 1);
	                this.setVal(val);
	                if (this.select) this.postprocessResults();
	            }
	
	            selected.remove();
	
	            this.opts.element.trigger({ type: "select2-removed", val: this.id(data), choice: data });
	            this.triggerChange({ removed: data });
	
	            return true;
	        },
	
	        // multi
	        postprocessResults: function (data, initial, noHighlightUpdate) {
	            var val = this.getVal(),
	                choices = this.results.find(".select2-result"),
	                compound = this.results.find(".select2-result-with-children"),
	                self = this;
	
	            choices.each2(function (i, choice) {
	                var id = self.id(choice.data("select2-data"));
	                if (indexOf(id, val) >= 0) {
	                    choice.addClass("select2-selected");
	                    // mark all children of the selected parent as selected
	                    choice.find(".select2-result-selectable").addClass("select2-selected");
	                }
	            });
	
	            compound.each2(function(i, choice) {
	                // hide an optgroup if it doesn't have any selectable children
	                if (!choice.is('.select2-result-selectable')
	                    && choice.find(".select2-result-selectable:not(.select2-selected)").length === 0) {
	                    choice.addClass("select2-selected");
	                }
	            });
	
	            if (this.highlight() == -1 && noHighlightUpdate !== false && this.opts.closeOnSelect === true){
	                self.highlight(0);
	            }
	
	            //If all results are chosen render formatNoMatches
	            if(!this.opts.createSearchChoice && !choices.filter('.select2-result:not(.select2-selected)').length > 0){
	                if(!data || data && !data.more && this.results.find(".select2-no-results").length === 0) {
	                    if (checkFormatter(self.opts.formatNoMatches, "formatNoMatches")) {
	                        this.results.append("<li class='select2-no-results'>" + evaluate(self.opts.formatNoMatches, self.opts.element, self.search.val()) + "</li>");
	                    }
	                }
	            }
	
	        },
	
	        // multi
	        getMaxSearchWidth: function() {
	            return this.selection.width() - getSideBorderPadding(this.search);
	        },
	
	        // multi
	        resizeSearch: function () {
	            var minimumWidth, left, maxWidth, containerLeft, searchWidth,
	                sideBorderPadding = getSideBorderPadding(this.search);
	
	            minimumWidth = measureTextWidth(this.search) + 10;
	
	            left = this.search.offset().left;
	
	            maxWidth = this.selection.width();
	            containerLeft = this.selection.offset().left;
	
	            searchWidth = maxWidth - (left - containerLeft) - sideBorderPadding;
	
	            if (searchWidth < minimumWidth) {
	                searchWidth = maxWidth - sideBorderPadding;
	            }
	
	            if (searchWidth < 40) {
	                searchWidth = maxWidth - sideBorderPadding;
	            }
	
	            if (searchWidth <= 0) {
	              searchWidth = minimumWidth;
	            }
	
	            this.search.width(Math.floor(searchWidth));
	        },
	
	        // multi
	        getVal: function () {
	            var val;
	            if (this.select) {
	                val = this.select.val();
	                return val === null ? [] : val;
	            } else {
	                val = this.opts.element.val();
	                return splitVal(val, this.opts.separator, this.opts.transformVal);
	            }
	        },
	
	        // multi
	        setVal: function (val) {
	            if (this.select) {
	                this.select.val(val);
	            } else {
	                var unique = [], valMap = {};
	                // filter out duplicates
	                $(val).each(function () {
	                    if (!(this in valMap)) {
	                        unique.push(this);
	                        valMap[this] = 0;
	                    }
	                });
	                this.opts.element.val(unique.length === 0 ? "" : unique.join(this.opts.separator));
	            }
	        },
	
	        // multi
	        buildChangeDetails: function (old, current) {
	            var current = current.slice(0),
	                old = old.slice(0);
	
	            // remove intersection from each array
	            for (var i = 0; i < current.length; i++) {
	                for (var j = 0; j < old.length; j++) {
	                    if (equal(this.opts.id(current[i]), this.opts.id(old[j]))) {
	                        current.splice(i, 1);
	                        i--;
	                        old.splice(j, 1);
	                        break;
	                    }
	                }
	            }
	
	            return {added: current, removed: old};
	        },
	
	
	        // multi
	        val: function (val, triggerChange) {
	            var oldData, self=this;
	
	            if (arguments.length === 0) {
	                return this.getVal();
	            }
	
	            oldData=this.data();
	            if (!oldData.length) oldData=[];
	
	            // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
	            if (!val && val !== 0) {
	                this.opts.element.val("");
	                this.updateSelection([]);
	                this.clearSearch();
	                if (triggerChange) {
	                    this.triggerChange({added: this.data(), removed: oldData});
	                }
	                return;
	            }
	
	            // val is a list of ids
	            this.setVal(val);
	
	            if (this.select) {
	                this.opts.initSelection(this.select, this.bind(this.updateSelection));
	                if (triggerChange) {
	                    this.triggerChange(this.buildChangeDetails(oldData, this.data()));
	                }
	            } else {
	                if (this.opts.initSelection === undefined) {
	                    throw new Error("val() cannot be called if initSelection() is not defined");
	                }
	
	                this.opts.initSelection(this.opts.element, function(data){
	                    var ids=$.map(data, self.id);
	                    self.setVal(ids);
	                    self.updateSelection(data);
	                    self.clearSearch();
	                    if (triggerChange) {
	                        self.triggerChange(self.buildChangeDetails(oldData, self.data()));
	                    }
	                });
	            }
	            this.clearSearch();
	        },
	
	        // multi
	        onSortStart: function() {
	            if (this.select) {
	                throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
	            }
	
	            // collapse search field into 0 width so its container can be collapsed as well
	            this.search.width(0);
	            // hide the container
	            this.searchContainer.hide();
	        },
	
	        // multi
	        onSortEnd:function() {
	
	            var val=[], self=this;
	
	            // show search and move it to the end of the list
	            this.searchContainer.show();
	            // make sure the search container is the last item in the list
	            this.searchContainer.appendTo(this.searchContainer.parent());
	            // since we collapsed the width in dragStarted, we resize it here
	            this.resizeSearch();
	
	            // update selection
	            this.selection.find(".select2-search-choice").each(function() {
	                val.push(self.opts.id($(this).data("select2-data")));
	            });
	            this.setVal(val);
	            this.triggerChange();
	        },
	
	        // multi
	        data: function(values, triggerChange) {
	            var self=this, ids, old;
	            if (arguments.length === 0) {
	                 return this.selection
	                     .children(".select2-search-choice")
	                     .map(function() { return $(this).data("select2-data"); })
	                     .get();
	            } else {
	                old = this.data();
	                if (!values) { values = []; }
	                ids = $.map(values, function(e) { return self.opts.id(e); });
	                this.setVal(ids);
	                this.updateSelection(values);
	                this.clearSearch();
	                if (triggerChange) {
	                    this.triggerChange(this.buildChangeDetails(old, this.data()));
	                }
	            }
	        }
	    });
	
	    $.fn.select2 = function () {
	
	        var args = Array.prototype.slice.call(arguments, 0),
	            opts,
	            select2,
	            method, value, multiple,
	            allowedMethods = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
	            valueMethods = ["opened", "isFocused", "container", "dropdown"],
	            propertyMethods = ["val", "data"],
	            methodsMap = { search: "externalSearch" };
	
	        this.each(function () {
	            if (args.length === 0 || typeof(args[0]) === "object") {
	                opts = args.length === 0 ? {} : $.extend({}, args[0]);
	                opts.element = $(this);
	
	                if (opts.element.get(0).tagName.toLowerCase() === "select") {
	                    multiple = opts.element.prop("multiple");
	                } else {
	                    multiple = opts.multiple || false;
	                    if ("tags" in opts) {opts.multiple = multiple = true;}
	                }
	
	                select2 = multiple ? new window.Select2["class"].multi() : new window.Select2["class"].single();
	                select2.init(opts);
	            } else if (typeof(args[0]) === "string") {
	
	                if (indexOf(args[0], allowedMethods) < 0) {
	                    throw "Unknown method: " + args[0];
	                }
	
	                value = undefined;
	                select2 = $(this).data("select2");
	                if (select2 === undefined) return;
	
	                method=args[0];
	
	                if (method === "container") {
	                    value = select2.container;
	                } else if (method === "dropdown") {
	                    value = select2.dropdown;
	                } else {
	                    if (methodsMap[method]) method = methodsMap[method];
	
	                    value = select2[method].apply(select2, args.slice(1));
	                }
	                if (indexOf(args[0], valueMethods) >= 0
	                    || (indexOf(args[0], propertyMethods) >= 0 && args.length == 1)) {
	                    return false; // abort the iteration, ready to return first matched value
	                }
	            } else {
	                throw "Invalid arguments to select2 plugin: " + args;
	            }
	        });
	        return (value === undefined) ? this : value;
	    };
	
	    // plugin defaults, accessible to users
	    $.fn.select2.defaults = {
	        debug: false,
	        width: "copy",
	        loadMorePadding: 0,
	        closeOnSelect: true,
	        openOnEnter: true,
	        containerCss: {},
	        dropdownCss: {},
	        containerCssClass: "",
	        dropdownCssClass: "",
	        formatResult: function(result, container, query, escapeMarkup) {
	            var markup=[];
	            markMatch(this.text(result), query.term, markup, escapeMarkup);
	            return markup.join("");
	        },
	        transformVal: function(val) {
	            return $.trim(val);
	        },
	        formatSelection: function (data, container, escapeMarkup) {
	            return data ? escapeMarkup(this.text(data)) : undefined;
	        },
	        sortResults: function (results, container, query) {
	            return results;
	        },
	        formatResultCssClass: function(data) {return data.css;},
	        formatSelectionCssClass: function(data, container) {return undefined;},
	        minimumResultsForSearch: 0,
	        minimumInputLength: 0,
	        maximumInputLength: null,
	        maximumSelectionSize: 0,
	        id: function (e) { return e == undefined ? null : e.id; },
	        text: function (e) {
	          if (e && this.data && this.data.text) {
	            if ($.isFunction(this.data.text)) {
	              return this.data.text(e);
	            } else {
	              return e[this.data.text];
	            }
	          } else {
	            return e.text;
	          }
	        },
	        matcher: function(term, text) {
	            return stripDiacritics(''+text).toUpperCase().indexOf(stripDiacritics(''+term).toUpperCase()) >= 0;
	        },
	        separator: ",",
	        tokenSeparators: [],
	        tokenizer: defaultTokenizer,
	        escapeMarkup: defaultEscapeMarkup,
	        blurOnChange: false,
	        selectOnBlur: false,
	        adaptContainerCssClass: function(c) { return c; },
	        adaptDropdownCssClass: function(c) { return null; },
	        nextSearchTerm: function(selectedObject, currentSearchTerm) { return undefined; },
	        searchInputPlaceholder: '',
	        createSearchChoicePosition: 'top',
	        shouldFocusInput: function (instance) {
	            // Attempt to detect touch devices
	            var supportsTouchEvents = (('ontouchstart' in window) ||
	                                       (navigator.msMaxTouchPoints > 0));
	
	            // Only devices which support touch events should be special cased
	            if (!supportsTouchEvents) {
	                return true;
	            }
	
	            // Never focus the input if search is disabled
	            if (instance.opts.minimumResultsForSearch < 0) {
	                return false;
	            }
	
	            return true;
	        }
	    };
	
	    $.fn.select2.locales = [];
	
	    $.fn.select2.locales['en'] = {
	         formatMatches: function (matches) { if (matches === 1) { return "One result is available, press enter to select it."; } return matches + " results are available, use up and down arrow keys to navigate."; },
	         formatNoMatches: function () { return "No matches found"; },
	         formatAjaxError: function (jqXHR, textStatus, errorThrown) { return "Loading failed"; },
	         formatInputTooShort: function (input, min) { var n = min - input.length; return "Please enter " + n + " or more character" + (n == 1 ? "" : "s"); },
	         formatInputTooLong: function (input, max) { var n = input.length - max; return "Please delete " + n + " character" + (n == 1 ? "" : "s"); },
	         formatSelectionTooBig: function (limit) { return "You can only select " + limit + " item" + (limit == 1 ? "" : "s"); },
	         formatLoadMore: function (pageNumber) { return "Loading more results…"; },
	         formatSearching: function () { return "Searching…"; }
	    };
	
	    $.extend($.fn.select2.defaults, $.fn.select2.locales['en']);
	
	    $.fn.select2.ajaxDefaults = {
	        transport: $.ajax,
	        params: {
	            type: "GET",
	            cache: false,
	            dataType: "json"
	        }
	    };
	
	    // exports
	    window.Select2 = {
	        query: {
	            ajax: ajax,
	            local: local,
	            tags: tags
	        }, util: {
	            debounce: debounce,
	            markMatch: markMatch,
	            escapeMarkup: defaultEscapeMarkup,
	            stripDiacritics: stripDiacritics
	        }, "class": {
	            "abstract": AbstractSelect2,
	            "single": SingleSelect2,
	            "multi": MultiSelect2
	        }
	    };
	
	}(jQuery));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(68)))

/***/ },
/* 480 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_480__;

/***/ }
])
});
;
//# sourceMappingURL=availity-angular.js.map