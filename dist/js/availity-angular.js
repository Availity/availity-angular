/*!
 * 
 * availity-angular v2.0.0-beta.12 (12/02/2016)
 * (c) Availity, LLC
 */
/*!
 * 
 * availity-angular v2.0.0-beta.11 (12/02/2016)
 * (c) Availity, LLC
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"), require("_"), require("jQuery"), require("moment"), require("TraceKit"), require("bootstrap-datepicker"), require("select2"));
	else if(typeof define === 'function' && define.amd)
		define(["angular", "_", "jQuery", "moment", "TraceKit", "bootstrap-datepicker", "select2"], factory);
	else if(typeof exports === 'object')
		exports["availity-angular"] = factory(require("angular"), require("_"), require("jQuery"), require("moment"), require("TraceKit"), require("bootstrap-datepicker"), require("select2"));
	else
		root["availity-angular"] = factory(root["angular"], root["_"], root["jQuery"], root["moment"], root["TraceKit"], root["bootstrap-datepicker"], root["select2"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_37__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_70__, __WEBPACK_EXTERNAL_MODULE_424__, __WEBPACK_EXTERNAL_MODULE_425__, __WEBPACK_EXTERNAL_MODULE_426__) {
return webpackJsonpavaility_angular([1,0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.availityConfig = exports.availityUi = exports.availity = undefined;
	
	__webpack_require__(231);
	
	__webpack_require__(163);
	
	__webpack_require__(209);
	
	var availity = exports.availity = 'availity';
	var availityUi = exports.availityUi = 'availity.ui';
	var availityConfig = exports.availityConfig = 'availity.config';

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(29)
	  , hide      = __webpack_require__(16)
	  , redefine  = __webpack_require__(17)
	  , ctx       = __webpack_require__(30)
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ngModule = _angular2.default.module('availity.ui', ['ng']);
	
	exports.default = ngModule;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(8);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('availity', ['ng']);

/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

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

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(68)('wks')
	  , uid        = __webpack_require__(47)
	  , Symbol     = __webpack_require__(6).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(7)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(4)
	  , IE8_DOM_DEFINE = __webpack_require__(129)
	  , toPrimitive    = __webpack_require__(27)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(36)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(23);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11)
	  , createDesc = __webpack_require__(35);
	module.exports = __webpack_require__(10) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , hide      = __webpack_require__(16)
	  , has       = __webpack_require__(14)
	  , SRC       = __webpack_require__(47)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(29).inspectSource = function(it){
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1)
	  , fails   = __webpack_require__(7)
	  , defined = __webpack_require__(23)
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(56)
	  , defined = __webpack_require__(23);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(57)
	  , createDesc     = __webpack_require__(35)
	  , toIObject      = __webpack_require__(19)
	  , toPrimitive    = __webpack_require__(27)
	  , has            = __webpack_require__(14)
	  , IE8_DOM_DEFINE = __webpack_require__(129)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(10) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(14)
	  , toObject    = __webpack_require__(13)
	  , IE_PROTO    = __webpack_require__(91)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(7);
	
	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(30)
	  , IObject  = __webpack_require__(56)
	  , toObject = __webpack_require__(13)
	  , toLength = __webpack_require__(12)
	  , asc      = __webpack_require__(234);
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(1)
	  , core    = __webpack_require__(29)
	  , fails   = __webpack_require__(7);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(8);
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
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Inspiration: https://github.com/seeden/angular-es6
	
	function storeInjections() {
	  var injected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var instance = arguments[1];
	  var args = arguments[2];
	  var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'av';
	
	
	  var instanceInject = instance[name] = instance[name] || {};
	
	  injected.forEach(function (injectName, index) {
	    instanceInject[injectName] = args[index];
	  });
	}
	
	var Base = function Base() {
	  _classCallCheck(this, Base);
	
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  storeInjections(this.constructor.$inject, this, args);
	};
	
	Base.$inject = [];
	exports.default = Base;

/***/ },
/* 29 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(145)
	  , $export = __webpack_require__(1)
	  , shared  = __webpack_require__(68)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(148)));
	
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(10)){
	  var LIBRARY             = __webpack_require__(40)
	    , global              = __webpack_require__(6)
	    , fails               = __webpack_require__(7)
	    , $export             = __webpack_require__(1)
	    , $typed              = __webpack_require__(69)
	    , $buffer             = __webpack_require__(98)
	    , ctx                 = __webpack_require__(30)
	    , anInstance          = __webpack_require__(39)
	    , propertyDesc        = __webpack_require__(35)
	    , hide                = __webpack_require__(16)
	    , redefineAll         = __webpack_require__(44)
	    , toInteger           = __webpack_require__(36)
	    , toLength            = __webpack_require__(12)
	    , toIndex             = __webpack_require__(46)
	    , toPrimitive         = __webpack_require__(27)
	    , has                 = __webpack_require__(14)
	    , same                = __webpack_require__(142)
	    , classof             = __webpack_require__(55)
	    , isObject            = __webpack_require__(8)
	    , toObject            = __webpack_require__(13)
	    , isArrayIter         = __webpack_require__(83)
	    , create              = __webpack_require__(41)
	    , getPrototypeOf      = __webpack_require__(21)
	    , gOPN                = __webpack_require__(42).f
	    , getIterFn           = __webpack_require__(100)
	    , uid                 = __webpack_require__(47)
	    , wks                 = __webpack_require__(9)
	    , createArrayMethod   = __webpack_require__(25)
	    , createArrayIncludes = __webpack_require__(59)
	    , speciesConstructor  = __webpack_require__(92)
	    , ArrayIterators      = __webpack_require__(101)
	    , Iterators           = __webpack_require__(51)
	    , $iterDetect         = __webpack_require__(65)
	    , setSpecies          = __webpack_require__(45)
	    , arrayFill           = __webpack_require__(76)
	    , arrayCopyWithin     = __webpack_require__(122)
	    , $DP                 = __webpack_require__(11)
	    , $GOPD               = __webpack_require__(20)
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
/* 33 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Validator = function Validator(name) {
	  _classCallCheck(this, Validator);
	
	  this.name = name;
	};
	
	exports.default = Validator;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(47)('meta')
	  , isObject = __webpack_require__(8)
	  , has      = __webpack_require__(14)
	  , setDesc  = __webpack_require__(11).f
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
/* 35 */
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
/* 36 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

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
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(4)
	  , dPs         = __webpack_require__(135)
	  , enumBugKeys = __webpack_require__(79)
	  , IE_PROTO    = __webpack_require__(91)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(78)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(81).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(137)
	  , hiddenKeys = __webpack_require__(79).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(137)
	  , enumBugKeys = __webpack_require__(79);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(17);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(6)
	  , dP          = __webpack_require__(11)
	  , DESCRIPTORS = __webpack_require__(10)
	  , SPECIES     = __webpack_require__(9)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(36)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.print = exports.uuid = exports.REGEX_API_URL = exports.getRelativeUrl = exports.isBlank = exports.stringify = undefined;
	
	var _strings = __webpack_require__(168);
	
	var _urls = __webpack_require__(169);
	
	var _uuid = __webpack_require__(170);
	
	var _uuid2 = _interopRequireDefault(_uuid);
	
	var _print = __webpack_require__(167);
	
	var _print2 = _interopRequireDefault(_print);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.stringify = _strings.stringify;
	exports.isBlank = _strings.isBlank;
	exports.getRelativeUrl = _urls.getRelativeUrl;
	exports.REGEX_API_URL = _urls.REGEX_API_URL;
	exports.uuid = _uuid2.default;
	exports.print = _print2.default;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(9)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(16)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(30)
	  , call        = __webpack_require__(131)
	  , isArrayIter = __webpack_require__(83)
	  , anObject    = __webpack_require__(4)
	  , toLength    = __webpack_require__(12)
	  , getIterFn   = __webpack_require__(100)
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
/* 51 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f
	  , has = __webpack_require__(14)
	  , TAG = __webpack_require__(9)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1)
	  , defined = __webpack_require__(23)
	  , fails   = __webpack_require__(7)
	  , spaces  = __webpack_require__(96)
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.factory('avValUtils', function () {
	
	  return {
	    isDefined: function isDefined(value) {
	      return _angular2.default.isDefined(value) && value !== '' && value !== null;
	    },
	    isEmpty: function isEmpty(value) {
	      return !this.isDefined(value) || _angular2.default.isString(value) && value.trim() === '';
	    }
	  };
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(22)
	  , TAG = __webpack_require__(9)('toStringTag')
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(22);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.constant('AV_UI', {
	  FALLBACK_VALIDATION_MESSAGE: 'This field is invalid.'
	});
	
	_module2.default.constant('AV_BOOTSTRAP_ADAPTER', {
	  CLASSES: {
	    SUCCESS: 'has-success',
	    WARNING: 'has-warning',
	    ERROR: 'has-error',
	    FEEDBACK: 'has-feedback',
	    HELP: 'help-block',
	    FORM_GROUP: '.form-group:first',
	    NAVBAR: 'navbar-fixed-top'
	  },
	  SELECTORS: {
	    CONTAINER: 'container-id',
	    DATA_CONTAINER: 'data-container-id'
	  },
	  CONTROLLER: '$avValContainerController'
	});
	
	_module2.default.constant('AV_VAL_ADAPTER', {
	  DEFAULT: 'avValBootstrapAdapter'
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(19)
	  , toLength  = __webpack_require__(12)
	  , toIndex   = __webpack_require__(46);
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(6)
	  , $export           = __webpack_require__(1)
	  , redefine          = __webpack_require__(17)
	  , redefineAll       = __webpack_require__(44)
	  , meta              = __webpack_require__(34)
	  , forOf             = __webpack_require__(50)
	  , anInstance        = __webpack_require__(39)
	  , isObject          = __webpack_require__(8)
	  , fails             = __webpack_require__(7)
	  , $iterDetect       = __webpack_require__(65)
	  , setToStringTag    = __webpack_require__(52)
	  , inheritIfRequired = __webpack_require__(82);
	
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(16)
	  , redefine = __webpack_require__(17)
	  , fails    = __webpack_require__(7)
	  , defined  = __webpack_require__(23)
	  , wks      = __webpack_require__(9);
	
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(4);
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
/* 63 */
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(8)
	  , cof      = __webpack_require__(22)
	  , MATCH    = __webpack_require__(9)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(9)('iterator')
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(40)|| !__webpack_require__(7)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(6)[K];
	});

/***/ },
/* 67 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , hide   = __webpack_require__(16)
	  , uid    = __webpack_require__(47)
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
/* 70 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_70__;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	__webpack_require__(107);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LogMessagesProvider = function () {
	  function LogMessagesProvider() {
	    _classCallCheck(this, LogMessagesProvider);
	  }
	
	  LogMessagesProvider.prototype.$get = function $get(AvApiResource) {
	    var AvLogMessagesResource = function (_AvApiResource) {
	      _inherits(AvLogMessagesResource, _AvApiResource);
	
	      function AvLogMessagesResource() {
	        _classCallCheck(this, AvLogMessagesResource);
	
	        return _possibleConstructorReturn(this, _AvApiResource.call(this, {
	          version: '/v1',
	          name: '/log-messages'
	        }));
	      }
	
	      AvLogMessagesResource.prototype.requestPayload = function requestPayload(level, entries) {
	
	        var payload = {};
	
	        if (entries.level) {
	          delete entries.level;
	        }
	
	        payload.level = level;
	        payload.entries = entries;
	
	        return payload;
	      };
	
	      AvLogMessagesResource.prototype.debug = function debug(entries) {
	        return this.create(this.requestPayload('debug', entries));
	      };
	
	      AvLogMessagesResource.prototype.info = function info(entries) {
	        return this.create(this.requestPayload('info', entries));
	      };
	
	      AvLogMessagesResource.prototype.warn = function warn(entries) {
	        return this.create(this.requestPayload('warn', entries));
	      };
	
	      AvLogMessagesResource.prototype.error = function error(entries) {
	        return this.create(this.requestPayload('error', entries));
	      };
	
	      return AvLogMessagesResource;
	    }(AvApiResource);
	
	    return new AvLogMessagesResource();
	  };
	
	  return LogMessagesProvider;
	}();
	
	_module2.default.provider('avLogMessagesResource', LogMessagesProvider);
	
	exports.default = _module2.default;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.constant('AV_VAL', {
	  EVENTS: {
	    REVALIDATE: 'av:val:revalidate',
	    SUBMITTED: 'av:val:submitted',
	    FAILED: 'av:val:failed',
	    RESET: 'av:val:reset'
	  },
	  DEBOUNCE: 400,
	  DEBOUNCE_QUICK: 100,
	  DATE_FORMAT: {
	    SIMPLE: 'MM/DD/YYYY'
	  },
	  PATTERNS: {
	    ALPHA_ONLY: /[^A-Za-z]+/g,
	    NUMERIC_ONLY: /[^0-9]+/g
	  }
	});
	
	exports.default = _module2.default;

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(111);
	
	__webpack_require__(172);

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _validator = __webpack_require__(33);
	
	var _validator2 = _interopRequireDefault(_validator);
	
	__webpack_require__(54);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_module2.default.factory('avValPattern', function (avValUtils) {
	  var PatternValidator = function (_Validator) {
	    _inherits(PatternValidator, _Validator);
	
	    function PatternValidator() {
	      _classCallCheck(this, PatternValidator);
	
	      var _this = _possibleConstructorReturn(this, _Validator.call(this, 'pattern'));
	
	      _this.REGEX = /^\/(.*)\/([gim]*)$/; // regular expression to test a regular expression
	      return _this;
	    }
	
	    PatternValidator.prototype.asRegExp = function asRegExp(pattern) {
	
	      // if regex then return it
	      if (pattern.test) {
	        return pattern;
	      }
	
	      // if string then test for valid regex then convert to regex and return
	      var match = pattern.match(this.REGEX);
	      if (match) {
	        return new RegExp(match[1], match[2]);
	      }
	
	      throw new Error('Expected ' + pattern + ' to be a RegExp');
	    };
	
	    PatternValidator.prototype.validate = function validate(context) {
	      var value = context.value,
	          constraint = context.constraint;
	
	
	      var self = this;
	
	      var values = Array.isArray(constraint.value) ? constraint.value : [constraint.value];
	
	      var valid = false;
	
	      values.forEach(function (expression) {
	        var pattern = self.asRegExp(expression);
	        if (avValUtils.isEmpty(value) || pattern.test(value)) {
	          valid = true;
	        }
	      });
	
	      return valid;
	    };
	
	    return PatternValidator;
	  }(_validator2.default);
	
	  return new PatternValidator();
	});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.buildRegExp = buildRegExp;
	exports.forEachFn = forEachFn;
	exports.forEachFnHook = forEachFnHook;
	exports.isElementInBlockScope = isElementInBlockScope;
	exports.findElement = findElement;
	exports.indexOf = indexOf;
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function buildRegExp(pattern) {
	
	  var match = pattern.match(/^\/(.*)\/([gim]*)$/);
	  var regExp = void 0;
	
	  if (match) {
	    regExp = new RegExp(match[1], match[2]);
	  } else {
	    throw Error('Incorrect regular expression format: ' + pattern);
	  }
	
	  return regExp;
	}
	
	function forEachFn(arr, fnName, args) {
	  var i = arr.length;
	  while (i--) {
	    var t = arr[i];
	    t[fnName].apply(t, args);
	  }
	}
	
	function forEachFnHook(arr, fnName) {
	  arr[fnName] = function () {
	    forEachFn(this, fnName, arguments);
	  };
	}
	
	function isElementInBlockScope($element, blockScope) {
	
	  var c = $element.inheritedData('av-block');
	
	  while (c) {
	    if (c === blockScope) {
	      return true;
	    }
	
	    c = c._parent;
	  }
	
	  return false;
	}
	
	function findElement($element, predicateFn, traverse) {
	  var ret = null;
	
	  if (predicateFn($element)) {
	    ret = $element;
	  } else {
	
	    var $elements = void 0;
	
	    if (traverse) {
	      $elements = $element.parent();
	    } else {
	      $elements = $element.children();
	    }
	
	    var i = $elements.length;
	    while (!ret && i--) {
	      ret = findElement(_angular2.default.element($elements[i]), predicateFn, traverse);
	    }
	  }
	
	  return ret;
	}
	
	function indexOf(arr, obj, start) {
	
	  for (var i = start || 0, j = arr.length; i < j; i++) {
	    if (arr[i] === obj) {
	      return i;
	    }
	  }
	
	  return -1;
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(13)
	  , toIndex  = __webpack_require__(46)
	  , toLength = __webpack_require__(12);
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11)
	  , createDesc      = __webpack_require__(35);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(8)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(9)('match');
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(8)
	  , setPrototypeOf = __webpack_require__(90).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(51)
	  , ITERATOR   = __webpack_require__(9)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(22);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(41)
	  , descriptor     = __webpack_require__(35)
	  , setToStringTag = __webpack_require__(52)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(16)(IteratorPrototype, __webpack_require__(9)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(40)
	  , $export        = __webpack_require__(1)
	  , redefine       = __webpack_require__(17)
	  , hide           = __webpack_require__(16)
	  , has            = __webpack_require__(14)
	  , Iterators      = __webpack_require__(51)
	  , $iterCreate    = __webpack_require__(85)
	  , setToStringTag = __webpack_require__(52)
	  , getPrototypeOf = __webpack_require__(21)
	  , ITERATOR       = __webpack_require__(9)('iterator')
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
/* 87 */
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
/* 88 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , macrotask = __webpack_require__(97).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(22)(process) == 'process';
	
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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(8)
	  , anObject = __webpack_require__(4);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(30)(Function.call, __webpack_require__(20).f(Object.prototype, '__proto__').set, 2);
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
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(68)('keys')
	  , uid    = __webpack_require__(47);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(4)
	  , aFunction = __webpack_require__(15)
	  , SPECIES   = __webpack_require__(9)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(36)
	  , defined   = __webpack_require__(23);
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
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(64)
	  , defined  = __webpack_require__(23);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(36)
	  , defined   = __webpack_require__(23);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(30)
	  , invoke             = __webpack_require__(63)
	  , html               = __webpack_require__(81)
	  , cel                = __webpack_require__(78)
	  , global             = __webpack_require__(6)
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
	  if(__webpack_require__(22)(process) == 'process'){
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
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(6)
	  , DESCRIPTORS    = __webpack_require__(10)
	  , LIBRARY        = __webpack_require__(40)
	  , $typed         = __webpack_require__(69)
	  , hide           = __webpack_require__(16)
	  , redefineAll    = __webpack_require__(44)
	  , fails          = __webpack_require__(7)
	  , anInstance     = __webpack_require__(39)
	  , toInteger      = __webpack_require__(36)
	  , toLength       = __webpack_require__(12)
	  , gOPN           = __webpack_require__(42).f
	  , dP             = __webpack_require__(11).f
	  , arrayFill      = __webpack_require__(76)
	  , setToStringTag = __webpack_require__(52)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
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
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(6)
	  , core           = __webpack_require__(29)
	  , LIBRARY        = __webpack_require__(40)
	  , wksExt         = __webpack_require__(144)
	  , defineProperty = __webpack_require__(11).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(55)
	  , ITERATOR  = __webpack_require__(9)('iterator')
	  , Iterators = __webpack_require__(51);
	module.exports = __webpack_require__(29).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(49)
	  , step             = __webpack_require__(132)
	  , Iterators        = __webpack_require__(51)
	  , toIObject        = __webpack_require__(19);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(86)(Array, 'Array', function(iterated, kind){
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
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _lodash = __webpack_require__(37);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CONFIG = {
	  VIRTUAL_PAGE_TRACKING: true,
	  SERVICES: {
	    SPLUNK: 'avSplunkAnalytics'
	  },
	  EVENTS: {
	    PAGE: '$locationChangeSuccess',
	    DEFAULT: 'click'
	  },
	  PRE_FIX: /^avAnalytics(.*)$/,
	  // should ignore these since they are part of the directives API
	  IGNORE: ['avAnalyticsOn', 'avAnalyticsIf']
	};
	
	var AvAnalyticsConfigProvider = function () {
	  function AvAnalyticsConfigProvider() {
	    _classCallCheck(this, AvAnalyticsConfigProvider);
	
	    this.options = CONFIG;
	  }
	
	  AvAnalyticsConfigProvider.prototype.get = function get() {
	    return _angular2.default.copy(this.options);
	  };
	
	  AvAnalyticsConfigProvider.prototype.set = function set(options) {
	    _lodash2.default.merge(this.options, options);
	  };
	
	  AvAnalyticsConfigProvider.prototype.$get = function $get() {
	    return _angular2.default.copy(this.options);
	  };
	
	  return AvAnalyticsConfigProvider;
	}();
	
	_module2.default.provider('avAnalyticsConfig', AvAnalyticsConfigProvider);
	
	exports.default = _module2.default;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(102);
	
	__webpack_require__(153);
	
	__webpack_require__(151);
	
	__webpack_require__(104);
	
	__webpack_require__(152);
	
	__webpack_require__(154);

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _utils = __webpack_require__(48);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	_module2.default.factory('avAnalyticsUtils', function (avAnalyticsConfig, $log) {
	  var AnalyticsUtils = function () {
	    function AnalyticsUtils() {
	      _classCallCheck(this, AnalyticsUtils);
	    }
	
	    AnalyticsUtils.prototype.getProperties = function getProperties(attributes) {
	
	      var self = this;
	      var props = {};
	
	      Object.keys(attributes).forEach(function (key) {
	        if (self.isValidAttribute(key) && self.isNotIgnored(key)) {
	          var result = self.getAttribute(key, attributes[key]);
	          props[result.key] = result.value;
	        }
	      });
	
	      return props;
	    };
	
	    // Function detects external links in order to allow the analytics framework to run
	    // before the browser follows a link.
	    //
	    //    - target="_self" - This opens an anchor in the same frame
	    //    - target="_parent" - Opens the in the next level up of a frame if they were nested to inside one another
	    //    - target="_top" - Opens the link as top document in the browser window
	    //    - target="_blank" - Opens link in new tab new tab
	    //
	
	
	    AnalyticsUtils.prototype.isExternalLink = function isExternalLink(attrs) {
	      return attrs.href && !attrs.ngClick;
	    };
	
	    AnalyticsUtils.prototype.isNotIgnored = function isNotIgnored(key) {
	      var ignored = avAnalyticsConfig.IGNORE.indexOf(key) > -1;
	      return !ignored;
	    };
	
	    AnalyticsUtils.prototype.isValidAttribute = function isValidAttribute(key) {
	      return avAnalyticsConfig.PRE_FIX.test(key);
	    };
	
	    AnalyticsUtils.prototype.lowercase = function lowercase(str) {
	      return str.substr(0, 1).toLowerCase() + str.substr(1);
	    };
	
	    AnalyticsUtils.prototype.getAttribute = function getAttribute(key, value) {
	
	      var simpleKey = key.match(avAnalyticsConfig.PRE_FIX);
	
	      if (simpleKey && simpleKey[1]) {
	        return {
	          key: this.lowercase(simpleKey[1]),
	          value: value
	        };
	      }
	    };
	
	    AnalyticsUtils.prototype.toNum = function toNum(value) {
	      var parsed = parseInt(value, 10);
	      return isNaN(parsed) ? 0 : parsed;
	    };
	
	    AnalyticsUtils.prototype.isValid = function isValid(trackingValues) {
	
	      var valid = true;
	
	      if (trackingValues.value || trackingValues.value === 0) {
	        delete trackingValues.value;
	      }
	
	      Object.keys(trackingValues).forEach(function (key) {
	        var value = trackingValues[key];
	        if ((0, _utils.isBlank)(value) || _angular2.default.isUndefined(value)) {
	          $log.warn('The analytic tracking value for ' + key.toUpperCase() + ' is not defined.');
	          valid = false;
	        }
	      });
	
	      return valid;
	    };
	
	    return AnalyticsUtils;
	  }();
	
	  return new AnalyticsUtils();
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.constant('AV_API', {
	  HEADERS: {
	    SERVER: {
	      ID: 'X-API-ID',
	      LOCATION: 'Location',
	      STATUS: 'X-Status-Message',
	      GLOBAL_ID: 'X-Global-Transaction-ID'
	    },
	    CLIENT: {
	      SESSION_ID: 'X-Session-ID',
	      AUTH: 'Authorization',
	      OVERRIDE: 'X-HTTP-Method-Override',
	      CALLBACK_URL: 'X-Callback-URL',
	      CUSTOMER_ID: 'X-Availity-Customer-ID',
	      RESPONSE_ENCODING: 'X-Response-Encoding-Context'
	    }
	  },
	  OPTIONS: {
	
	    // default base segment for Availity API endpoints
	    path: '/api',
	
	    // full url to api resource
	    url: null,
	
	    // name of resource
	    name: null,
	
	    // defaults version for api
	    version: '/v1',
	
	    // cache all request by default
	    cache: true,
	
	    // flag used to enable behaviors around the Availity Rest API
	    api: true,
	
	    // in ms
	    pollingInterval: 1000,
	
	    // % the polling interval decays after every retry
	    pollingDecay: 1.2,
	
	    // maximum time polling is allowed before rejecting the request
	    pollingMaxInterval: 30000,
	
	    // default headers
	    headers: {
	      // Turn off content encoding for angular apis
	      'X-Response-Encoding-Context': 'NONE'
	    }
	  }
	});
	
	exports.default = _module2.default;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(105);
	
	__webpack_require__(71);
	
	__webpack_require__(155);
	
	__webpack_require__(156);
	
	__webpack_require__(157);
	
	__webpack_require__(158);
	
	__webpack_require__(159);
	
	__webpack_require__(107);
	
	__webpack_require__(108);
	
	__webpack_require__(160);
	
	__webpack_require__(161);

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _moment = __webpack_require__(70);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	__webpack_require__(105);
	
	__webpack_require__(110);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ApiResourceProvider = function () {
	  function ApiResourceProvider(AV_API) {
	    _classCallCheck(this, ApiResourceProvider);
	
	    this.defaultOptions = _extends({}, AV_API.OPTIONS);
	    this.sessionBust = (0, _moment2.default)().unix();
	  }
	
	  ApiResourceProvider.prototype.setOptions = function setOptions(options) {
	    _extends(this.defaultOptions, options);
	  };
	
	  ApiResourceProvider.prototype.getOptions = function getOptions() {
	    return _angular2.default.copy(this.defaultOptions);
	  };
	
	  ApiResourceProvider.prototype.$get = function $get($http, $q, avPollingService) {
	
	    var that = this;
	
	    var AvApiResource = function () {
	      function AvApiResource(_options) {
	        _classCallCheck(this, AvApiResource);
	
	        this.options = _options;
	
	        if (!this.options) {
	          throw new Error('[options] cannot be null or undefined');
	        }
	
	        if (this.options.name) {
	          this.options.name = this.options.name.charAt(0) === '/' ? this.options.name : '/' + this.options.name;
	        }
	
	        if (!this.options.url && !this.options.name) {
	          throw new Error('AvApiResource options [url] or [name] cannot be null');
	        }
	
	        // get the default options and merge into this instance
	        this.options = _angular2.default.extend({}, that.defaultOptions, this.options);
	      }
	
	      AvApiResource.prototype.config = function config(_config2) {
	        return _angular2.default.extend({}, this.options, _config2 || {});
	      };
	
	      AvApiResource.prototype.cacheBust = function cacheBust(_config) {
	
	        var config = _angular2.default.copy(_config);
	        config.cacheBust = null;
	        config.params = config.params || {};
	        config.params.cacheBust = (0, _moment2.default)().unix();
	
	        return config;
	      };
	
	      AvApiResource.prototype.sessionBust = function sessionBust(_config) {
	
	        var config = _angular2.default.copy(_config);
	        config.sessionBust = null;
	        config.params = config.params || {};
	        config.params.sessionBust = that.sessionBust;
	
	        return config;
	      };
	
	      AvApiResource.prototype.getUrl = function getUrl(id) {
	
	        if (this.options.api) {
	          return this.getApiUrl(id);
	        }
	
	        return this.options.url;
	      };
	
	      AvApiResource.prototype.createResponse = function createResponse(data, status, headers, config) {
	        return {
	          data: data,
	          status: status,
	          headers: headers,
	          config: config
	        };
	      };
	
	      AvApiResource.prototype.request = function request(config, afterCallback) {
	
	        var self = this;
	        var defer = $q.defer();
	
	        $http(config).success(function (data, status, headers, _config) {
	
	          var _response = {
	            data: data,
	            status: status,
	            headers: headers,
	            config: _config
	          };
	
	          // handle the async response if applicable
	          var _promise = $q.when(avPollingService.response(_response));
	
	          // notify the promise listener of the original response
	          defer.notify(_response);
	
	          // handle the polling service promise
	          _promise.then(function (_successResponse) {
	
	            var successResponse = _successResponse;
	
	            if (afterCallback) {
	              successResponse = afterCallback.call(self, successResponse, config.data);
	            }
	            defer.resolve(successResponse);
	          }, function (errorResponse) {
	            return defer.reject(errorResponse);
	          }, function (notifyResponse) {
	            return defer.notify(notifyResponse);
	          });
	        }).error(function (data, status, headers, _config) {
	          var response = self.createResponse(data, status, headers, _config);
	          defer.reject(response);
	        });
	
	        var promise = defer.promise;
	
	        // recreate the success callback ala $http
	        promise.success = function (fn) {
	          promise.then(function (response) {
	            fn(response.data, response.status, response.headers, response.config);
	          });
	          return promise;
	        };
	
	        // recreate the error callback ala $http
	        promise.error = function (fn) {
	
	          promise.then(null, function (response) {
	            fn(response.data, response.status, response.headers, config);
	          });
	
	          return promise;
	        };
	
	        promise.always = promise.finally;
	
	        return promise;
	      };
	
	      AvApiResource.prototype.normalize = function normalize(url) {
	        return url.replace(/[\/]+/g, '/').replace(/\/$/, '');
	      };
	
	      AvApiResource.prototype.join = function join() {
	        var joined = [].slice.call(arguments, 0).join('/');
	        return this.normalize(joined);
	      };
	
	      AvApiResource.prototype.getApiUrl = function getApiUrl(_id) {
	
	        var id = _id ? '/' + _id : '';
	
	        var uri = void 0;
	
	        var _options2 = this.options,
	            path = _options2.path,
	            version = _options2.version,
	            name = _options2.name,
	            url = _options2.url;
	
	
	        if (name) {
	          uri = this.join('/', path, version, name, id);
	        } else {
	          uri = this.join(url, id);
	        }
	
	        return uri;
	      };
	
	      AvApiResource.prototype.create = function create(_data, _config) {
	
	        var data = _data;
	        var config = _config;
	
	        if (!data) {
	          throw new Error('called method without [data]');
	        }
	
	        if (this.beforeCreate) {
	          data = this.beforeCreate(data);
	        }
	
	        config = this.config(config);
	        config.method = 'POST';
	        config.url = this.getUrl();
	        config.data = data;
	
	        return this.request(config, this.afterCreate);
	      };
	
	      AvApiResource.prototype.get = function get(id, _config) {
	
	        var config = _config;
	
	        if (!id) {
	          throw new Error('called method without [id]');
	        }
	
	        config = this.config(config);
	        if (config.cacheBust) {
	          config = this.cacheBust(config);
	        }
	
	        config.method = 'GET';
	        config.url = this.getUrl(id);
	
	        return this.request(config, this.afterGet);
	      };
	
	      AvApiResource.prototype.query = function query(_config) {
	
	        var config = _config;
	
	        // If true cache bust the api on every call
	        config = this.config(config);
	        if (config.cacheBust) {
	          config = this.cacheBust(config);
	        }
	
	        // Cache bust api once per application load
	        if (config.sessionBust) {
	          config = this.sessionBust(config);
	        }
	
	        config.method = 'GET';
	        config.url = this.getUrl();
	
	        return this.request(config, this.afterQuery);
	      };
	
	      AvApiResource.prototype.update = function update(id, _data, _config) {
	
	        var config = _config;
	        var data = _data;
	
	        var url = void 0;
	
	        if (_angular2.default.isString(id) || _angular2.default.isNumber(id)) {
	          url = this.getUrl(id);
	        } else {
	          url = this.getUrl();
	
	          // At this point the function signature becomes:
	          //
	          // update(data, config) {} a.k.a function(id, data)
	          //
	          config = data; // config is really the 2nd param
	          data = id; // data is really the first param
	        }
	
	        if (this.beforeUpdate) {
	          data = this.beforeUpdate(data);
	        }
	
	        config = this.config(config);
	        config.method = 'PUT';
	        config.url = url;
	        config.data = data;
	
	        return this.request(config, this.afterUpdate);
	      };
	
	      AvApiResource.prototype.remove = function remove(id, _config) {
	
	        var config = _config;
	
	        var url = void 0;
	        var data = void 0;
	
	        if (_angular2.default.isString(id) || _angular2.default.isNumber(id)) {
	          url = this.getUrl(id);
	        } else {
	
	          // At this point the function signature becomes:
	          //
	          // remove(data, config)
	          //
	          url = this.getUrl();
	          data = id;
	        }
	
	        config = this.config(config);
	        config.method = 'DELETE';
	        config.url = url;
	        config.data = data;
	
	        return this.request(config, this.afterRemove);
	      };
	
	      AvApiResource.create = function create() {
	        return new AvApiResource();
	      };
	
	      AvApiResource.prototype.beforeCreate = function beforeCreate(data) {
	        return data;
	      };
	
	      AvApiResource.prototype.afterCreate = function afterCreate(response) {
	        return response;
	      };
	
	      AvApiResource.prototype.afterQuery = function afterQuery(response) {
	        return response;
	      };
	
	      AvApiResource.prototype.afterGet = function afterGet(response) {
	        return response;
	      };
	
	      AvApiResource.prototype.beforeUpdate = function beforeUpdate(data) {
	        return data;
	      };
	
	      AvApiResource.prototype.afterUpdate = function afterUpdate(response) {
	        return response;
	      };
	
	      AvApiResource.prototype.afterRemove = function afterRemove(response) {
	        return response;
	      };
	
	      return AvApiResource;
	    }();
	
	    return AvApiResource;
	  };
	
	  return ApiResourceProvider;
	}();
	
	_module2.default.provider('AvApiResource', ApiResourceProvider);
	
	exports.default = _module2.default;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Spaces = function Spaces(AvApiResource) {
	  var SpacesResource = function (_AvApiResource) {
	    _inherits(SpacesResource, _AvApiResource);
	
	    function SpacesResource() {
	      _classCallCheck(this, SpacesResource);
	
	      return _possibleConstructorReturn(this, _AvApiResource.call(this, {
	        path: '/api/sdk/platform',
	        name: '/spaces'
	      }));
	    }
	
	    return SpacesResource;
	  }(AvApiResource);
	
	  return new SpacesResource();
	};
	
	_module2.default.factory('avSpacesResource', Spaces);
	
	exports.default = _module2.default;

/***/ },
/* 109 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Inspiration: https://github.com/seeden/angular-es6
	
	function storeInjections() {
	  var injected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var instance = arguments[1];
	  var args = arguments[2];
	  var name = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'av';
	
	
	  var instanceInject = instance[name] = instance[name] || {};
	
	  injected.forEach(function (injectName, index) {
	    instanceInject[injectName] = args[index];
	  });
	}
	
	var Base = function Base() {
	  _classCallCheck(this, Base);
	
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  storeInjections(this.constructor.$inject, this, args);
	};
	
	Base.$inject = [];
	exports.default = Base;

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _constants = __webpack_require__(166);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _utils = __webpack_require__(48);
	
	var _base = __webpack_require__(109);
	
	var _base2 = _interopRequireDefault(_base);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AvPollingService = function (_Base) {
	  _inherits(AvPollingService, _Base);
	
	  function AvPollingService() {
	    _classCallCheck(this, AvPollingService);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var _this = _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));
	
	    _this.pendingRequests = []; // stores all request for polling
	    return _this;
	  }
	
	  AvPollingService.prototype.response = function response(_response) {
	
	    if (this.isAsyncResponse(_response)) {
	      return this.onAsyncReponse(_response);
	    }
	
	    return _response || this.av.$q.when(_response);
	  };
	
	  AvPollingService.prototype.setDefaults = function setDefaults(config) {
	
	    var defaultOptions = {
	      pollingInterval: this.av.AV_POLLING.INTERVAL,
	      pollingDecay: this.av.AV_POLLING.DECAY,
	      pollingMaxInterval: this.av.AV_POLLING.MAX_ELAPSED_TIME,
	      pollingRetryCount: 0,
	      pollingStartTime: new Date().getTime()
	    };
	
	    return _extends(defaultOptions, config);
	  };
	
	  AvPollingService.prototype.responseError = function responseError(response) {
	    // Return the promise rejection
	    return this.av.$q.reject(response);
	  };
	
	  /**
	   * API layer return a link with a polling url for
	   * async responses.
	   *
	   * @param  {Object}  response ajax response
	   * @return {Boolean} true if response has status of 202 (accepted) and location param in header with uri+session link
	   */
	
	
	  AvPollingService.prototype.isAsyncResponse = function isAsyncResponse(response) {
	
	    return response && response.config && response.config.api && response.status && response.status === 202 && _angular2.default.isFunction(response.headers) && !(0, _utils.isBlank)(response.headers(this.av.AV_API.HEADERS.SERVER.LOCATION));
	  };
	
	  AvPollingService.prototype.onAsyncReponse = function onAsyncReponse(response) {
	
	    response.config = this.setDefaults(response.config);
	
	    var deferred = this.av.$q.defer();
	
	    this.queueRequest(deferred, response);
	
	    // [rm3]: Can't call notify before you return promise object?
	    this.av.$timeout(function () {
	      // Notify deferred listeners with the original server response
	      deferred.notify(response);
	    }, 0, false);
	
	    return deferred.promise;
	  };
	
	  AvPollingService.prototype.getUrl = function getUrl(url) {
	
	    var result = url.match(this.av.AV_POLLING.REGEX_URL);
	    if (result && result[1]) {
	      return '/api' + result[1];
	    }
	
	    return url;
	  };
	
	  AvPollingService.prototype.queueRequest = function queueRequest(deferred, response) {
	
	    var self = this;
	    // server replies with location header so set the url into config
	    var _url = (0, _utils.getRelativeUrl)(response.headers(this.av.AV_API.HEADERS.SERVER.LOCATION));
	    var _config = response.config;
	
	    // headers – {Object} – Map of strings or functions which return strings representing HTTP headers
	    //  to send to the server. If the return value of a function is null, the header
	    //  will not be sent. Functions accept a config object as an argument.
	    var config = {
	      method: 'GET',
	      api: true,
	      headers: _config.headers,
	      pollingInterval: _config.pollingInterval,
	      pollingMaxRetry: _config.pollingMaxRetry,
	      pollingMaxInterval: _config.pollingMaxInterval,
	      pollingStartTime: _config.pollingStartTime,
	      _pollingDecay: _config._pollingDecay,
	      pollingRetryCount: _config.pollingRetryCount,
	      pollingDecay: _config.pollingDecay,
	      url: _url, /* set the url from the server response */
	      cache: false
	    };
	
	    var request = {
	      id: (0, _utils.uuid)('request-'),
	      config: config,
	      deferred: deferred
	    };
	
	    var timeout = this.getPollingTimeout(config);
	
	    // each async request should run on its own timer
	    var timer = this.av.$timeout(function () {
	      self.retryRequest(request.id);
	    }, timeout, false);
	
	    request.timer = timer;
	
	    // add the async request to the queue
	    this.pushRequest(request);
	  };
	
	  AvPollingService.prototype.popRequest = function popRequest(id) {
	
	    var index = null;
	    var request = null;
	
	    for (var i = 0; i < this.pendingRequests.length; i++) {
	      if (this.pendingRequests[i].id === id) {
	        index = i;
	        break;
	      }
	    }
	
	    request = this.pendingRequests[index];
	    this.pendingRequests.splice(index, 1);
	
	    return request;
	  };
	
	  AvPollingService.prototype.pushRequest = function pushRequest(request) {
	    this.pendingRequests.push(request);
	  };
	
	  AvPollingService.prototype.getPollingTimeout = function getPollingTimeout(config) {
	    return config.pollingDecay * config.pollingInterval;
	  };
	
	  AvPollingService.prototype.isPollingMaxTimeout = function isPollingMaxTimeout(config) {
	    var now = new Date().getTime();
	    var elaspedTime = now - config.pollingStartTime;
	    var isElapsed = elaspedTime > config.pollingMaxInterval;
	    return isElapsed;
	  };
	
	  AvPollingService.prototype.isMaxRetried = function isMaxRetried(config) {
	    return config.pollingRetryCount >= this.av.AV_POLLING.MAX_RETRY;
	  };
	
	  AvPollingService.prototype.isPollable = function isPollable(config) {
	    var _isTimeout = this.isPollingMaxTimeout(config);
	    var _isMax = this.isMaxRetried(config);
	
	    return _isTimeout || _isMax ? false : true;
	  };
	
	  AvPollingService.prototype.retryRequest = function retryRequest(id) {
	
	    var self = this;
	    var request = this.popRequest(id);
	    this.av.$timeout.cancel(request.timer);
	
	    var config = request.config;
	
	    var deferred = request.deferred;
	
	    if (!this.isPollable(config)) {
	      this.av.$log.info('Rejecting pollable response due to timeout');
	      return deferred.reject(request);
	    }
	
	    // increment counters and polling timeouts
	    this.increment(config);
	
	    function successCallback(response) {
	      if (self.isAsyncResponse(response)) {
	        deferred.notify(response);
	        self.queueRequest(request.deferred, response);
	      } else {
	        deferred.resolve(response);
	      }
	    }
	
	    function errorCallback(response) {
	      deferred.reject(response);
	    }
	
	    // Silly circular dependency trick
	    var $http = this.av.$injector.get('$http');
	
	    $http(config).then(successCallback, errorCallback);
	  };
	
	  AvPollingService.prototype.increment = function increment(config) {
	    this.incrementCounter(config);
	    this.incrementDecay(config);
	  };
	
	  AvPollingService.prototype.incrementDecay = function incrementDecay(config) {
	    if (!config._pollingDecay) {
	      // store the original decay param
	      config._pollingDecay = config.pollingDecay;
	    }
	    config.pollingDecay *= config._pollingDecay;
	  };
	
	  AvPollingService.prototype.incrementCounter = function incrementCounter(config) {
	    config.pollingRetryCount++;
	  };
	
	  AvPollingService.prototype.clearRequests = function clearRequests() {
	    var self = this;
	    _angular2.default.forEach(this.pendingRequests, function (request) {
	      self.av.$timeout.cancel(request.timer);
	    });
	    this.pendingRequests = [];
	  };
	
	  return AvPollingService;
	}(_base2.default);
	
	AvPollingService.$inject = ['$rootScope', '$q', '$injector', '$timeout', '$log', 'AV_POLLING', 'AV_API'];
	
	
	_constants2.default.service('avPollingService', AvPollingService);
	
	exports.default = _constants2.default;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _rules = __webpack_require__(111);
	
	var _rules2 = _interopRequireDefault(_rules);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.factory('avRules', function () {
	  return _rules2.default;
	});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _utils = __webpack_require__(75);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	_module2.default.factory('AvBlock', function (avBlockConfig, $timeout, $document) {
	
	  var $body = $document.find('body');
	
	  // These properties are not allowed to be specified in the start method.
	  var reservedStateProperties = ['id', 'blockCount', 'blocking'];
	
	  var AvBlock = function () {
	    function AvBlock(id) {
	      _classCallCheck(this, AvBlock);
	
	      this.startPromise;
	      this.doneCallbacks = [];
	      this._id = id;
	
	      this._state = {
	        id: id,
	        blockCount: 0,
	        message: avBlockConfig.message,
	        blocking: false
	      };
	    }
	
	    AvBlock.prototype.block = function block() {
	      this.startPromise = null;
	      this._state.blocking = true;
	    };
	
	    AvBlock.prototype.start = function start(messageOrOptions) {
	      var _this = this;
	
	      messageOrOptions = messageOrOptions || {};
	
	      if (_angular2.default.isString(messageOrOptions)) {
	
	        messageOrOptions = {
	          message: messageOrOptions
	        };
	      } else {
	
	        _angular2.default.forEach(reservedStateProperties, function (x) {
	          if (messageOrOptions[x]) {
	            throw new Error('The property ' + x + ' is reserved for the block state.');
	          }
	        });
	      }
	
	      _angular2.default.extend(this._state, messageOrOptions);
	
	      if (this._state.blockCount > 0) {
	        this._state.message = messageOrOptions.message || this._state.message || avBlockConfig.message;
	      } else {
	        this._state.message = messageOrOptions.message || avBlockConfig.message;
	      }
	
	      this._state.blockCount++;
	
	      // Check if the focused element is part of the block scope
	      var $ae = _angular2.default.element($document[0].activeElement);
	
	      if ($ae.length && (0, _utils.isElementInBlockScope)($ae, self)) {
	
	        // Let the active element lose focus and store a reference
	        // to restore focus when we're done (reset)
	        self._restoreFocus = $ae[0];
	
	        // https://github.com/McNull/angular-block-ui/issues/13
	        // http://stackoverflow.com/questions/22698058/apply-already-in-progress-error-when-using-typeahead-plugin-found-to-be-relate
	        // Queue the blur after any ng-blur expression.
	        $timeout(function () {
	          // Ensure we still need to blur
	          // Don't restore if active element is body, since this causes IE to switch windows (see http://tjvantoll.com/2013/08/30/bugs-with-document-activeelement-in-internet-explorer/)
	          if (self._restoreFocus && self._restoreFocus !== $body[0]) {
	            self._restoreFocus.blur();
	          }
	        });
	      }
	
	      if (!this.startPromise && avBlockConfig.delay !== 0) {
	        this.startPromise = $timeout(function () {
	          return _this.block();
	        }, avBlockConfig.delay);
	      } else if (avBlockConfig.delay === 0) {
	        this.block();
	      }
	    };
	
	    AvBlock.prototype.stop = function stop() {
	
	      this._state.blockCount = Math.max(0, --this._state.blockCount);
	
	      if (this._state.blockCount === 0) {
	        this.reset(true);
	      }
	    };
	
	    AvBlock.prototype._cancelStartTimeout = function _cancelStartTimeout() {
	
	      if (this.startPromise) {
	        $timeout.cancel(this.startPromise);
	        this.startPromise = null;
	      }
	    };
	
	    AvBlock.prototype.isBlocking = function isBlocking() {
	      return this._state.blocking;
	    };
	
	    AvBlock.prototype.message = function message(value) {
	      this._state.message = value;
	    };
	
	    AvBlock.prototype.pattern = function pattern(regexp) {
	      if (regexp !== undefined) {
	        this._pattern = regexp;
	      }
	
	      return this._pattern;
	    };
	
	    AvBlock.prototype.reset = function reset(executeCallbacks) {
	      var _this2 = this;
	
	      this._cancelStartTimeout();
	      this._state.blockCount = 0;
	      this._state.blocking = false;
	
	      // Restore the focus to the element that was active
	      // before the block start, but not if the user has
	      // focused something else while the block was active.
	
	      if (this._restoreFocus && (!$document[0].activeElement || $document[0].activeElement === $body[0])) {
	
	        // IE8 will throw if element for setting focus is invisible
	        try {
	          this._restoreFocus.focus();
	        } catch (e1) {
	          (function () {
	
	            var elementToFocus = _this2._restoreFocus;
	            $timeout(function () {
	              if (elementToFocus) {
	                try {
	                  elementToFocus.focus();
	                } catch (e2) {/* no op */}
	              }
	            }, 100);
	          })();
	        }
	
	        this._restoreFocus = null;
	      }
	
	      try {
	
	        if (executeCallbacks) {
	          _angular2.default.forEach(this.doneCallbacks, function (cb) {
	            cb();
	          });
	        }
	      } finally {
	        this.doneCallbacks.length = 0;
	      }
	    };
	
	    AvBlock.prototype.done = function done(fn) {
	      this.doneCallbacks.push(fn);
	    };
	
	    AvBlock.prototype.state = function state() {
	      return this._state;
	    };
	
	    return AvBlock;
	  }();
	
	  return AvBlock;
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _lodash = __webpack_require__(37);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _base = __webpack_require__(28);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _utils = __webpack_require__(48);
	
	__webpack_require__(114);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AvDropdownController = function (_Base) {
	  _inherits(AvDropdownController, _Base);
	
	  function AvDropdownController() {
	    _classCallCheck(this, AvDropdownController);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var _this = _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));
	
	    _this.options = {};
	    _this.match = null;
	    _this.ngModel = null;
	    _this.locals = {};
	
	    return _this;
	  }
	
	  AvDropdownController.prototype.init = function init(context) {
	    var _this2 = this;
	
	    this.ngModel = context.ngModel;
	
	    this.multiple = _angular2.default.isDefined(this.av.$attrs.multiple);
	
	    this.options = _angular2.default.extend({}, this.av.avDropdownConfig.DEFAULTS, this.av.$scope.$eval(this.av.$attrs.options));
	
	    if (this.isRemoteMultiple()) {
	      this.options.multiple = _angular2.default.isDefined(this.av.$attrs.multiple);
	    }
	
	    if (this.options.query) {
	
	      // Map AvSelectResource into Select2 options
	      this.resource = this.options.query;
	
	      // Function used to query results for the search term.
	      this.options.query = function (options) {
	        _this2.query(options);
	      };
	      // Function used to get the id from the choice object or a string representing the key under which the id is stored.
	      this.options.id = this.resource.getId;
	      this.options.initSelection = this.resource.initSelection;
	    }
	  };
	
	  AvDropdownController.prototype.isRemoteMultiple = function isRemoteMultiple() {
	    return _angular2.default.isDefined(this.av.$attrs.multiple) && this.av.$element.get(0).tagName.toLowerCase() === 'input';
	  };
	
	  AvDropdownController.prototype.initSelection = function initSelection() {};
	
	  AvDropdownController.prototype.setRemoteViewValue = function setRemoteViewValue(e) {
	
	    var values = this.ngModel.$viewValue;
	
	    if (!_angular2.default.isArray(values) || !_angular2.default.isObject(values)) {
	      values = [];
	    }
	
	    if (e.added) {
	      // Adding to collection
	      values.push(e.added);
	    } else {
	      // Removing from collection
	      var index = values.findIndex(function (value) {
	        return _.matches(e.removed)(value);
	      });
	      values.splice(index, 1);
	    }
	
	    this.ngModel.$setViewValue(values);
	  };
	
	  AvDropdownController.prototype.setViewValue = function setViewValue(e) {
	    this.ngModel.$setViewValue(e.added);
	  };
	
	  AvDropdownController.prototype.hashKey = function hashKey(obj, nextUidFn) {
	    var key = obj && obj.$$hashKey;
	
	    if (key) {
	      if (typeof key === 'function') {
	        key = obj.$$hashKey();
	      }
	      return key;
	    }
	
	    var objType = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	    if (objType === 'function' || objType === 'object' && obj !== null) {
	      key = obj.$$hashKey = objType + ':' + (nextUidFn || (0, _utils.uuid)())();
	    } else {
	      key = objType + ':' + obj;
	    }
	
	    return key;
	  };
	
	  AvDropdownController.prototype.getTrackByValueFn = function getTrackByValueFn(value, locals) {
	
	    if (this.trackBy) {
	      return this.trackByFn(this.av.$scope, locals);
	    }
	
	    return this.hashKey(value);
	  };
	
	  AvDropdownController.prototype.getSelected = function getSelected(model) {
	
	    var self = this;
	
	    if (this.options.query) {
	      return 0;
	    }
	
	    if (!this.collection) {
	      // If we're not using ng-options, the model value is just the raw value of the option,
	      // rather than an index, so return it as is.
	      return model;
	    }
	
	    var optionValues = this.valuesFn(self.av.$scope) || [];
	    var optionValuesKeys = this.getOptionValuesKeys(optionValues);
	
	    var index = this.collection.findIndex(function (item) {
	      return _angular2.default.equals(model, item);
	    });
	
	    var key = optionValues === optionValuesKeys ? index : optionValuesKeys[index];
	    var value = optionValues[key];
	    var locals = self.getLocals(value, key);
	    var viewValue = self.viewValueFn(self.av.$scope, locals);
	    var selectValue = self.getTrackByValueFn(viewValue, locals);
	
	    return selectValue;
	  };
	
	  AvDropdownController.prototype.getMultiSelected = function getMultiSelected(viewValues) {
	
	    var self = this;
	
	    var values = [];
	
	    if (!viewValues) {
	      return values;
	    }
	
	    if (this.av.$element.get(0).tagName.toLowerCase() !== 'input') {
	
	      viewValues.forEach(function (viewValue) {
	
	        var selected = self.getSelected(viewValue);
	
	        values.push(selected);
	      });
	    }
	
	    return values;
	  };
	
	  // Wrapper around the query function for Select2.  When the promise resolves
	  // the callback
	
	
	  AvDropdownController.prototype.query = function query(options) {
	
	    this.resource.onQuery(options).then(function (response) {
	
	      // Callback function that should be called with the result object. The result object:
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
	      options.callback({ more: response.more, results: response.results });
	    });
	  };
	
	  AvDropdownController.prototype.setValue = function setValue() {
	
	    var self = this;
	
	    var viewValue = this.ngModel.$viewValue;
	
	    var selected = null;
	    if (this.multiple) {
	      selected = this.getMultiSelected(viewValue);
	    } else {
	      selected = this.getSelected(viewValue);
	    }
	
	    // null === '' for Select2
	    selected = selected === null || selected === 'undefined' ? '' : selected;
	
	    this.av.$timeout(function () {
	      self.av.$element.select2('val', selected);
	    });
	  };
	
	  AvDropdownController.prototype.setValues = function setValues() {
	    var _this3 = this;
	
	    var viewValue = this.ngModel.$viewValue;
	
	    if (!_angular2.default.isArray(viewValue)) {
	      viewValue = [];
	    }
	
	    if (!_.isEmpty(viewValue) && _angular2.default.isObject(viewValue[0])) {
	      viewValue = this.getMultiSelected(viewValue);
	    }
	
	    this.av.$timeout(function () {
	      return _this3.av.$element.select2('val', viewValue);
	    });
	  };
	
	  AvDropdownController.prototype.ngOptions = function ngOptions() {
	
	    this.match = this.av.$attrs.ngOptions.match(this.av.avDropdownConfig.NG_OPTIONS_REGEXP);
	    if (!this.match) {
	      throw new Error('Invalid ngOptions for avDropdown.  @See https://docs.angularjs.org/api/ng/directive/ngOptions');
	    }
	
	    // NG_OPTIONS_REGEXP regex will parse into arrays like below:
	
	    // 1: value expression (valueFn)
	    // 2: label expression (displayFn)
	    // 3: group by expression (groupByFn)
	    // 4: disable when expression (disableWhenFn)
	    // 5: array item variable name
	    // 6: object item key variable name
	    // 7: object item value variable name
	    // 8: collection expression
	    // 9: track by expression
	
	    // The variable name for the value of the item in the collection
	    this.valueName = this.match[5] || this.match[7];
	
	    // An expression that generates the viewValue for an option if there is no label expression
	    this.valueFn = this.av.$parse(this.match[2] ? this.match[1] : this.valueName);
	
	    // The variable name for the key of the item in the collection
	    this.keyName = this.match[6];
	
	    // An expression that generates the viewValue for an option if there is a label expression
	    this.selectAs = / as /.test(this.match[0]) && this.match[1];
	
	    // An expression that generates the viewValue for an option if there is a label expression
	    // An expression that is used to track the id of each object in the options collection
	    this.trackBy = this.match[9];
	    this.selectAsFn = this.selectAs && this.av.$parse(this.selectAs);
	    this.viewValueFn = this.selectAsFn || this.valueFn;
	    this.trackByFn = this.trackBy && this.av.$parse(this.trackBy);
	
	    this.displayFn = this.av.$parse(this.match[2] || this.match[1]);
	    this.groupByFn = this.av.$parse(this.match[3] || '');
	    this.disableWhenFn = this.av.$parse(this.match[4] || '');
	    this.valuesFn = this.av.$parse(this.match[8]);
	    this.collection = this.valuesFn(this.av.$scope);
	
	    this.av.$scope.$watchCollection(this.collection, function (newVal, oldVal) {
	
	      if (_angular2.default.equals(newVal, oldVal)) {
	        return;
	      }
	
	      self.setValue();
	    }, true);
	  };
	
	  AvDropdownController.prototype.getLocals = function getLocals(value, key) {
	
	    var locals = {};
	
	    if (this.keyName) {
	      locals[this.keyName] = key;
	      locals[this.valueName] = value;
	    } else {
	      locals[this.valueName] = value;
	    }
	
	    return locals;
	  };
	
	  AvDropdownController.prototype.getOptionValuesKeys = function getOptionValuesKeys(optionValues) {
	
	    var optionValuesKeys = void 0;
	
	    if (!this.keyName && _.isArray(optionValues)) {
	      optionValuesKeys = optionValues;
	    } else {
	      // if object, extract keys, in enumeration order, unsorted
	      optionValuesKeys = [];
	      for (var itemKey in optionValues) {
	        if (optionValues.hasOwnProperty(itemKey) && itemKey.charAt(0) !== '$') {
	          optionValuesKeys.push(itemKey);
	        }
	      }
	    }
	    return optionValuesKeys;
	  };
	
	  return AvDropdownController;
	}(_base2.default);
	
	AvDropdownController.$inject = ['$element', '$attrs', 'avDropdownConfig', '$scope', '$timeout', '$parse'];
	
	
	_module2.default.controller('AvDropdownController', AvDropdownController);
	
	exports.default = AvDropdownController;

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AvConfig = function () {
	  function AvConfig() {
	    _classCallCheck(this, AvConfig);
	
	    // 1: value expression (valueFn)
	    // 2: label expression (displayFn)
	    // 3: group by expression (groupByFn)
	    // 4: disable when expression (disableWhenFn)
	    // 5: array item variable name
	    // 6: object item key variable name
	    // 7: object item value variable name
	    // 8: collection expression
	    // 9: track by expression
	    this.NG_OPTIONS_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/;
	
	    this.SELECT2_OPTIONS = ['width', 'minimumInputLength', 'maximumInputLength', 'minimumResultsForSearch', 'maximumSelectionSize', 'placeholderOption', 'separator', 'allowClear', 'multiple', 'closeOnSelect', 'openOnEnter', 'id', 'matcher', 'sortResults', 'formatSelection', 'formatResult', 'formatResultCssClass', 'formatNoMatches', 'formatSearching', 'formatAjaxError', 'formatInputTooShort', 'formatInputTooLong', 'formatSelectionTooBig', 'formatLoadMore', 'createSearchChoice', 'createSearchChoicePosition', 'initSelection', 'tokenizer', 'tokenSeparators', 'query', 'ajax', 'data', 'tags', 'containerCss', 'containerCssClass', 'dropdownCss', 'dropdownCssClass', 'dropdownAutoWidth', 'adaptContainerCssClass', 'adaptDropdownCssClass', 'escapeMarkup', 'selectOnBlur', 'loadMorePadding', 'nextSearchTerm', 'correlationId', 'eventListeners'];
	
	    this.DEFAULTS = {
	      closeOnResize: true,
	      dropdownAutoWidth: true,
	      minimumResultsForSearch: 5,
	      width: '100%'
	    };
	  }
	
	  AvConfig.prototype.set = function set(options) {
	    _angular2.default.extend(this.DEFAULTS, options);
	  };
	
	  AvConfig.prototype.$get = function $get() {
	
	    return _angular2.default.copy({
	      SELECT2_OPTIONS: this.SELECT2_OPTIONS,
	      DEFAULTS: this.DEFAULTS,
	      NG_OPTIONS_REGEXP: this.NG_OPTIONS_REGEXP
	    });
	  };
	
	  return AvConfig;
	}();
	
	_module2.default.provider('avDropdownConfig', AvConfig);

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.constant('AV_MODAL', {
	
	  OPTIONS: {
	    scope: null,
	    templateUrl: null,
	    template: null,
	    id: null,
	    container: null,
	    controller: null,
	    controllerAs: null,
	    locals: null,
	
	    // Bootstrap defaults
	    keyboard: true,
	    backdrop: true,
	    show: false,
	    remote: false
	  },
	
	  EVENTS: {
	    SHOW: 'show.av.modal',
	    SHOWN: 'shown.av.modal',
	    HIDE: 'hide.av.modal',
	    HIDDEN: 'hidden.av.modal'
	  },
	
	  NAMESPACE: {
	    MODAL: 'bs.modal'
	  },
	
	  BS_EVENTS: {
	    SHOW: 'show.bs.modal',
	    SHOWN: 'shown.bs.modal',
	    HIDE: 'hide.bs.modal',
	    HIDDEN: 'hidden.bs.modal'
	  }
	
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _modal = __webpack_require__(421);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.directive('avModal', function () {
	  return {
	    restrict: 'A',
	    replace: true,
	    transclude: true,
	    scope: {
	      size: '@'
	    },
	    templateUrl: _modal2.default
	  };
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.factory('avTemplateCache', function ($q, $templateCache, $http) {
	
	  return {
	    get: function get(options) {
	
	      var valid = !options.template || !options.templateUrl;
	
	      if (!valid) {
	        throw new Error('Either options.template or options.templateUrl must be defined for avTemplateCache');
	      }
	
	      return options.template ? $q.when(options.template) : $http.get(options.templateUrl, { cache: $templateCache }).then(function (result) {
	        return result.data;
	      });
	    }
	  };
	});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _jquery = __webpack_require__(38);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	__webpack_require__(58);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.factory('avValBootstrapAdapter', function (AV_BOOTSTRAP_ADAPTER, $timeout, $log) {
	  return {
	    element: function element(context) {
	      var ngModel = context.ngModel,
	          element = context.element;
	
	
	      if (ngModel.$valid) {
	        element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).removeClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
	      } else {
	        element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).addClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
	      }
	    },
	    reset: function reset(element) {
	      element.parents(AV_BOOTSTRAP_ADAPTER.CLASSES.FORM_GROUP).removeClass(AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR);
	    },
	    message: function message(context) {
	      var element = context.element;
	
	
	      var selector = '.' + AV_BOOTSTRAP_ADAPTER.CLASSES.HELP;
	
	      var $el = (0, _jquery2.default)(element);
	
	      var target = $el.attr(AV_BOOTSTRAP_ADAPTER.SELECTORS.CONTAINER);
	      target = target || $el.attr(AV_BOOTSTRAP_ADAPTER.SELECTORS.DATA_CONTAINER);
	      // default to siblings
	      target = target ? (0, _jquery2.default)('#' + target) : $el.siblings(selector);
	
	      if (target.length === 0) {
	        $log.warn('avValBootstrapAdapter could not find validation container for ' + element);
	        return;
	      }
	
	      var el = target[0];
	      $el = _angular2.default.element(el);
	      var avValModel = $el.data(AV_BOOTSTRAP_ADAPTER.CONTROLLER); // get the av val message controller
	      if (avValModel) {
	        avValModel.message(context);
	      }
	    },
	    scroll: function scroll(form) {
	
	      // Bootstrap fixed navbars causes bad scroll-to offsets so find them all
	      var navbarSelector = '.' + AV_BOOTSTRAP_ADAPTER.CLASSES.NAVBAR;
	
	      // Add up all the heights to find the true offset
	      var offset = 0;
	      (0, _jquery2.default)(navbarSelector).each(function () {
	        offset += (0, _jquery2.default)(this).outerHeight();
	      });
	
	      var selector = '.' + AV_BOOTSTRAP_ADAPTER.CLASSES.ERROR + ':first';
	
	      var $target = (0, _jquery2.default)(form).find(selector);
	      if ($target && $target.offset()) {
	        $timeout(function () {
	          // scroll to offset top of first error minus the offset of the navbars
	          (0, _jquery2.default)('body, html').animate({ scrollTop: $target.offset().top - offset }, 'fast');
	        }, 0, false);
	      }
	    }
	  };
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	__webpack_require__(58);
	
	__webpack_require__(118);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	_module2.default.provider('avValAdapter', function () {
	
	  var that = this;
	
	  this.setAdapter = function (adapter) {
	    this.adapter = adapter;
	  };
	
	  this.$get = function (AV_VAL_ADAPTER, $injector) {
	    var Adapter = function () {
	      function Adapter() {
	        _classCallCheck(this, Adapter);
	
	        var adapterName = that.adapter || AV_VAL_ADAPTER.DEFAULT;
	        this.adapter = $injector.get(adapterName);
	      }
	
	      Adapter.prototype.element = function element(context) {
	        this.adapter.element(context);
	      };
	
	      Adapter.prototype.reset = function reset(element) {
	        this.adapter.reset(element);
	      };
	
	      Adapter.prototype.message = function message(context) {
	        this.adapter.message(context);
	      };
	
	      Adapter.prototype.scroll = function scroll(form) {
	        this.adapter.scroll(form);
	      };
	
	      return Adapter;
	    }();
	
	    return new Adapter();
	  };
	});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _utils = __webpack_require__(48);
	
	__webpack_require__(73);
	
	var _base = __webpack_require__(28);
	
	var _base2 = _interopRequireDefault(_base);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AvValFieldController = function (_Base) {
	  _inherits(AvValFieldController, _Base);
	
	  function AvValFieldController() {
	    _classCallCheck(this, AvValFieldController);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var _this = _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));
	
	    _this.ngModel = null;
	    _this.rule = null;
	    _this.avValForm = null;
	    _this.avValInvalid = false;
	    _this.noEvent = {};
	    _this.placeholder = _this.av.$element[0].placeholder;
	
	    return _this;
	  }
	
	  AvValFieldController.prototype.init = function init(options) {
	    _extends(this, options);
	    this.createId();
	    this.setupValidators();
	  };
	
	  AvValFieldController.prototype.createId = function createId() {
	    this.ngModel.avId = (0, _utils.uuid)('avVal');
	  };
	
	  AvValFieldController.prototype.isRadio = function isRadio() {
	    return this.av.$element.is('input') && this.av.$attrs.type === 'radio';
	  };
	
	  AvValFieldController.prototype.isCheckbox = function isCheckbox() {
	    return this.av.$element.is('input') && this.av.$attrs.type === 'checkbox';
	  };
	
	  AvValFieldController.prototype.updateElement = function updateElement() {
	
	    this.av.avValAdapter.element({
	      element: this.av.$element,
	      ngModel: this.ngModel
	    });
	
	    this.av.avValAdapter.message({
	      element: this.av.$element,
	      ngModel: this.ngModel
	    });
	  };
	
	  AvValFieldController.prototype.setupValidators = function setupValidators() {
	
	    var self = this;
	
	    var schemaName = this.avValForm.rulesSchema;
	    var ruleConfig = this.av.avVal.getRule(schemaName);
	
	    if (!ruleConfig) {
	      this.av.$log.error('Failed to get rules schema named [' + schemaName + '].  Forms must be tagged with a rules schema name for validation to work.');
	      return;
	    }
	
	    var constraints = ruleConfig[this.ruleName];
	    if (!constraints) {
	      this.av.$log.info('Rule named [' + this.ruleName + '] could not be found in the current schema.');
	      constraints = {};
	    }
	
	    Object.keys(constraints).forEach(function (constraintName) {
	      var constraint = constraints[constraintName];
	      if (!constraint) {
	
	        // When extending rule sets, previous rules can be overridden with null so
	        // delete the previous $validator
	        delete self.ngModel.$validators[constraintName];
	        return;
	      }
	
	      var validator = self.av.avVal.getService(constraintName);
	
	      if (_angular2.default.isUndefined(validator)) {
	        self.av.$log.warn('No validator defined for ' + constraintName);
	        return;
	      }
	
	      self.ngModel.$validators[constraintName] = function contraintValidator(modelValue, viewValue) {
	
	        var value = modelValue || viewValue;
	
	        var valid = validator.validate({
	          value: value,
	          constraint: constraint,
	          element: self.av.$element
	        });
	
	        return valid;
	      };
	
	      // Attach the constrain to the validator so that the message is available
	      // to the validation container that is going to paint the message on screen.
	      self.ngModel.$validators[constraintName].constraint = constraint;
	    });
	  };
	
	  AvValFieldController.prototype.reset = function reset() {
	    this.ngModel.$setPristine();
	    this.ngModel.$setUntouched();
	    this.ngModel.$error = {};
	    this.av.avValAdapter.reset(this.av.$element);
	  };
	
	  AvValFieldController.prototype.onRunValidators = function onRunValidators() {
	
	    if (this.ngModel.$dirty) {
	      this.updateElement();
	    }
	  };
	
	  return AvValFieldController;
	}(_base2.default);
	
	AvValFieldController.$inject = ['$element', 'avValAdapter', 'avVal', '$log', '$timeout', '$scope', '$attrs'];
	
	
	_module2.default.controller('AvValFieldController', AvValFieldController);
	
	_module2.default.directive('avValField', function ($log, $timeout, avVal, avValAdapter, AV_VAL) {
	  return {
	    restrict: 'A',
	    controller: 'AvValFieldController',
	    require: ['^avValForm', 'ngModel', 'avValField'],
	    scope: {
	      avValDebounce: '<?',
	      avValOn: '<?',
	      avValShowOnLoad: '<?',
	      avValInvalid: '<?'
	    },
	    link: function link(scope, element, attrs, controllers) {
	
	      var ruleName = attrs.avValField;
	
	      var avValForm = controllers[0];
	      var ngModel = controllers[1];
	      var avValField = controllers[2];
	
	      var avValOn = scope.avValOn || avValForm.avValOn || 'default';
	
	      var avValDebounce = void 0;
	      if (avValField.isCheckbox() || avValField.isRadio()) {
	        avValDebounce = scope.avValDebounce || avValForm.avValDebounce || AV_VAL.DEBOUNCE_QUICK;
	      } else {
	        avValDebounce = scope.avValDebounce || avValForm.avValDebounce || AV_VAL.DEBOUNCE;
	      }
	
	      var avValInvalid = scope.avValInvalid || avValForm.avValInvalid || false;
	
	      ngModel.$$setOptions({
	        updateOnDefault: true,
	        updateOn: avValOn,
	        allowInvalid: avValInvalid,
	        debounce: avValDebounce
	      });
	
	      // Wrap $$runValidators with our own function so we can intercept when the validation
	      // pipeline finishes.
	      var $$runValidators = ngModel.$$runValidators;
	      var runValidators = function runValidators(modelValue, viewValue, doneCallback) {
	
	        $$runValidators(modelValue, viewValue, function (allValid) {
	          doneCallback(allValid);
	          avValField.onRunValidators();
	        });
	      };
	
	      ngModel.$$runValidators = runValidators;
	
	      if (!ngModel && !ruleName) {
	        $log.error('avValField requires ngModel and a validation rule name to run.');
	        return;
	      }
	
	      avValField.init({
	        ngModel: ngModel,
	        ruleName: ruleName,
	        avValForm: avValForm
	      });
	
	      scope.$on(AV_VAL.EVENTS.REVALIDATE, function () {
	        ngModel.$validate();
	      });
	
	      scope.$on(AV_VAL.EVENTS.SUBMITTED, function () {
	        ngModel.$dirty = true;
	        ngModel.$validate();
	      });
	
	      // - Removes all errors on page,
	      // - Does not reset view or model values.  This should to be handled by the application.
	      scope.$on(AV_VAL.EVENTS.RESET, function () {
	        avValField.reset();
	      });
	    }
	  };
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(22);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(13)
	  , toIndex  = __webpack_require__(46)
	  , toLength = __webpack_require__(12);
	
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
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(50);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(15)
	  , toObject  = __webpack_require__(13)
	  , IObject   = __webpack_require__(56)
	  , toLength  = __webpack_require__(12);
	
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
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(15)
	  , isObject   = __webpack_require__(8)
	  , invoke     = __webpack_require__(63)
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
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(11).f
	  , create      = __webpack_require__(41)
	  , redefineAll = __webpack_require__(44)
	  , ctx         = __webpack_require__(30)
	  , anInstance  = __webpack_require__(39)
	  , defined     = __webpack_require__(23)
	  , forOf       = __webpack_require__(50)
	  , $iterDefine = __webpack_require__(86)
	  , step        = __webpack_require__(132)
	  , setSpecies  = __webpack_require__(45)
	  , DESCRIPTORS = __webpack_require__(10)
	  , fastKey     = __webpack_require__(34).fastKey
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
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(55)
	  , from    = __webpack_require__(123);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(44)
	  , getWeak           = __webpack_require__(34).getWeak
	  , anObject          = __webpack_require__(4)
	  , isObject          = __webpack_require__(8)
	  , anInstance        = __webpack_require__(39)
	  , forOf             = __webpack_require__(50)
	  , createArrayMethod = __webpack_require__(25)
	  , $has              = __webpack_require__(14)
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
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(10) && !__webpack_require__(7)(function(){
	  return Object.defineProperty(__webpack_require__(78)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(8)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(4);
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
/* 132 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 133 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(43)
	  , gOPS     = __webpack_require__(67)
	  , pIE      = __webpack_require__(57)
	  , toObject = __webpack_require__(13)
	  , IObject  = __webpack_require__(56)
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
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(11)
	  , anObject = __webpack_require__(4)
	  , getKeys  = __webpack_require__(43);
	
	module.exports = __webpack_require__(10) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(19)
	  , gOPN      = __webpack_require__(42).f
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
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(14)
	  , toIObject    = __webpack_require__(19)
	  , arrayIndexOf = __webpack_require__(59)(false)
	  , IE_PROTO     = __webpack_require__(91)('IE_PROTO');
	
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
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(43)
	  , toIObject = __webpack_require__(19)
	  , isEnum    = __webpack_require__(57).f;
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
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(42)
	  , gOPS     = __webpack_require__(67)
	  , anObject = __webpack_require__(4)
	  , Reflect  = __webpack_require__(6).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(6).parseFloat
	  , $trim       = __webpack_require__(53).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(96) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(6).parseInt
	  , $trim     = __webpack_require__(53).trim
	  , ws        = __webpack_require__(96)
	  , hex       = /^[\-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 142 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(12)
	  , repeat   = __webpack_require__(95)
	  , defined  = __webpack_require__(23);
	
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
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(9);

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(126);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(60)('Map', function(get){
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
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(10) && /./g.flags != 'g')__webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(62)
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(126);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(60)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(25)(0)
	  , redefine     = __webpack_require__(17)
	  , meta         = __webpack_require__(34)
	  , assign       = __webpack_require__(134)
	  , weak         = __webpack_require__(128)
	  , isObject     = __webpack_require__(8)
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
	var $WeakMap = module.exports = __webpack_require__(60)('WeakMap', wrapper, methods, weak, true, true);
	
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
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery, jQuery) {/*! VelocityJS.org (1.3.1). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
	
	/*************************
	 Velocity jQuery Shim
	 *************************/
	
	/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
	
	/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
	/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
	/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */
	
	(function(window) {
		"use strict";
		/***************
		 Setup
		 ***************/
	
		/* If jQuery is already loaded, there's no point in loading this shim. */
		if (__webpack_provided_window_dot_jQuery) {
			return;
		}
	
		/* jQuery base. */
		var $ = function(selector, context) {
			return new $.fn.init(selector, context);
		};
	
		/********************
		 Private Methods
		 ********************/
	
		/* jQuery */
		$.isWindow = function(obj) {
			/* jshint eqeqeq: false */
			return obj && obj === obj.window;
		};
	
		/* jQuery */
		$.type = function(obj) {
			if (!obj) {
				return obj + "";
			}
	
			return typeof obj === "object" || typeof obj === "function" ?
					class2type[toString.call(obj)] || "object" :
					typeof obj;
		};
	
		/* jQuery */
		$.isArray = Array.isArray || function(obj) {
			return $.type(obj) === "array";
		};
	
		/* jQuery */
		function isArraylike(obj) {
			var length = obj.length,
					type = $.type(obj);
	
			if (type === "function" || $.isWindow(obj)) {
				return false;
			}
	
			if (obj.nodeType === 1 && length) {
				return true;
			}
	
			return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
		}
	
		/***************
		 $ Methods
		 ***************/
	
		/* jQuery: Support removed for IE<9. */
		$.isPlainObject = function(obj) {
			var key;
	
			if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
				return false;
			}
	
			try {
				if (obj.constructor &&
						!hasOwn.call(obj, "constructor") &&
						!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
					return false;
				}
			} catch (e) {
				return false;
			}
	
			for (key in obj) {
			}
	
			return key === undefined || hasOwn.call(obj, key);
		};
	
		/* jQuery */
		$.each = function(obj, callback, args) {
			var value,
					i = 0,
					length = obj.length,
					isArray = isArraylike(obj);
	
			if (args) {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.apply(obj[i], args);
	
						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (!obj.hasOwnProperty(i)) {
							continue;
						}
						value = callback.apply(obj[i], args);
	
						if (value === false) {
							break;
						}
					}
				}
	
			} else {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.call(obj[i], i, obj[i]);
	
						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (!obj.hasOwnProperty(i)) {
							continue;
						}
						value = callback.call(obj[i], i, obj[i]);
	
						if (value === false) {
							break;
						}
					}
				}
			}
	
			return obj;
		};
	
		/* Custom */
		$.data = function(node, key, value) {
			/* $.getData() */
			if (value === undefined) {
				var getId = node[$.expando],
						store = getId && cache[getId];
	
				if (key === undefined) {
					return store;
				} else if (store) {
					if (key in store) {
						return store[key];
					}
				}
				/* $.setData() */
			} else if (key !== undefined) {
				var setId = node[$.expando] || (node[$.expando] = ++$.uuid);
	
				cache[setId] = cache[setId] || {};
				cache[setId][key] = value;
	
				return value;
			}
		};
	
		/* Custom */
		$.removeData = function(node, keys) {
			var id = node[$.expando],
					store = id && cache[id];
	
			if (store) {
				// Cleanup the entire store if no keys are provided.
				if (!keys) {
					delete cache[id];
				} else {
					$.each(keys, function(_, key) {
						delete store[key];
					});
				}
			}
		};
	
		/* jQuery */
		$.extend = function() {
			var src, copyIsArray, copy, name, options, clone,
					target = arguments[0] || {},
					i = 1,
					length = arguments.length,
					deep = false;
	
			if (typeof target === "boolean") {
				deep = target;
	
				target = arguments[i] || {};
				i++;
			}
	
			if (typeof target !== "object" && $.type(target) !== "function") {
				target = {};
			}
	
			if (i === length) {
				target = this;
				i--;
			}
	
			for (; i < length; i++) {
				if ((options = arguments[i])) {
					for (name in options) {
						if (!options.hasOwnProperty(name)) {
							continue;
						}
						src = target[name];
						copy = options[name];
	
						if (target === copy) {
							continue;
						}
	
						if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && $.isArray(src) ? src : [];
	
							} else {
								clone = src && $.isPlainObject(src) ? src : {};
							}
	
							target[name] = $.extend(deep, clone, copy);
	
						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}
	
			return target;
		};
	
		/* jQuery 1.4.3 */
		$.queue = function(elem, type, data) {
			function $makeArray(arr, results) {
				var ret = results || [];
	
				if (arr) {
					if (isArraylike(Object(arr))) {
						/* $.merge */
						(function(first, second) {
							var len = +second.length,
									j = 0,
									i = first.length;
	
							while (j < len) {
								first[i++] = second[j++];
							}
	
							if (len !== len) {
								while (second[j] !== undefined) {
									first[i++] = second[j++];
								}
							}
	
							first.length = i;
	
							return first;
						})(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						[].push.call(ret, arr);
					}
				}
	
				return ret;
			}
	
			if (!elem) {
				return;
			}
	
			type = (type || "fx") + "queue";
	
			var q = $.data(elem, type);
	
			if (!data) {
				return q || [];
			}
	
			if (!q || $.isArray(data)) {
				q = $.data(elem, type, $makeArray(data));
			} else {
				q.push(data);
			}
	
			return q;
		};
	
		/* jQuery 1.4.3 */
		$.dequeue = function(elems, type) {
			/* Custom: Embed element iteration. */
			$.each(elems.nodeType ? [elems] : elems, function(i, elem) {
				type = type || "fx";
	
				var queue = $.queue(elem, type),
						fn = queue.shift();
	
				if (fn === "inprogress") {
					fn = queue.shift();
				}
	
				if (fn) {
					if (type === "fx") {
						queue.unshift("inprogress");
					}
	
					fn.call(elem, function() {
						$.dequeue(elem, type);
					});
				}
			});
		};
	
		/******************
		 $.fn Methods
		 ******************/
	
		/* jQuery */
		$.fn = $.prototype = {
			init: function(selector) {
				/* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
				if (selector.nodeType) {
					this[0] = selector;
	
					return this;
				} else {
					throw new Error("Not a DOM node.");
				}
			},
			offset: function() {
				/* jQuery altered code: Dropped disconnected DOM node checking. */
				var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};
	
				return {
					top: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
					left: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
				};
			},
			position: function() {
				/* jQuery */
				function offsetParentFn(elem) {
					var offsetParent = elem.offsetParent || document;
	
					while (offsetParent && (offsetParent.nodeType.toLowerCase !== "html" && offsetParent.style.position === "static")) {
						offsetParent = offsetParent.offsetParent;
					}
	
					return offsetParent || document;
				}
	
				/* Zepto */
				var elem = this[0],
						offsetParent = offsetParentFn(elem),
						offset = this.offset(),
						parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? {top: 0, left: 0} : $(offsetParent).offset();
	
				offset.top -= parseFloat(elem.style.marginTop) || 0;
				offset.left -= parseFloat(elem.style.marginLeft) || 0;
	
				if (offsetParent.style) {
					parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;
					parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;
				}
	
				return {
					top: offset.top - parentOffset.top,
					left: offset.left - parentOffset.left
				};
			}
		};
	
		/**********************
		 Private Variables
		 **********************/
	
		/* For $.data() */
		var cache = {};
		$.expando = "velocity" + (new Date().getTime());
		$.uuid = 0;
	
		/* For $.queue() */
		var class2type = {},
				hasOwn = class2type.hasOwnProperty,
				toString = class2type.toString;
	
		var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
		for (var i = 0; i < types.length; i++) {
			class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
		}
	
		/* Makes $(node) possible, without having to call init. */
		$.fn.init.prototype = $.fn;
	
		/* Globalize Velocity onto the window, and assign its Utilities property. */
		window.Velocity = {Utilities: $};
	})(window);
	
	/******************
	 Velocity.js
	 ******************/
	
	(function(factory) {
		"use strict";
		/* CommonJS module. */
		if (typeof module === "object" && typeof module.exports === "object") {
			module.exports = factory();
			/* AMD module. */
		} else if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			/* Browser globals. */
		} else {
			factory();
		}
	}(function() {
		"use strict";
		return function(global, window, document, undefined) {
	
			/***************
			 Summary
			 ***************/
	
			/*
			 - CSS: CSS stack that works independently from the rest of Velocity.
			 - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
			 - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
			 - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
			 Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
			 - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
			 - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
			 - completeCall(): Handles the cleanup process for each Velocity call.
			 */
	
			/*********************
			 Helper Functions
			 *********************/
	
			/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
			var IE = (function() {
				if (document.documentMode) {
					return document.documentMode;
				} else {
					for (var i = 7; i > 4; i--) {
						var div = document.createElement("div");
	
						div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";
	
						if (div.getElementsByTagName("span").length) {
							div = null;
	
							return i;
						}
					}
				}
	
				return undefined;
			})();
	
			/* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */
			var rAFShim = (function() {
				var timeLast = 0;
	
				return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
					var timeCurrent = (new Date()).getTime(),
							timeDelta;
	
					/* Dynamically set delay on a per-tick basis to match 60fps. */
					/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
					timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
					timeLast = timeCurrent + timeDelta;
	
					return setTimeout(function() {
						callback(timeCurrent + timeDelta);
					}, timeDelta);
				};
			})();
	
			/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
			function compactSparseArray(array) {
				var index = -1,
						length = array ? array.length : 0,
						result = [];
	
				while (++index < length) {
					var value = array[index];
	
					if (value) {
						result.push(value);
					}
				}
	
				return result;
			}
	
			function sanitizeElements(elements) {
				/* Unwrap jQuery/Zepto objects. */
				if (Type.isWrapped(elements)) {
					elements = [].slice.call(elements);
					/* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
				} else if (Type.isNode(elements)) {
					elements = [elements];
				}
	
				return elements;
			}
	
			var Type = {
				isString: function(variable) {
					return (typeof variable === "string");
				},
				isArray: Array.isArray || function(variable) {
					return Object.prototype.toString.call(variable) === "[object Array]";
				},
				isFunction: function(variable) {
					return Object.prototype.toString.call(variable) === "[object Function]";
				},
				isNode: function(variable) {
					return variable && variable.nodeType;
				},
				/* Copyright Martin Bohm. MIT License: https://gist.github.com/Tomalak/818a78a226a0738eaade */
				isNodeList: function(variable) {
					return typeof variable === "object" &&
							/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(variable)) &&
							variable.length !== undefined &&
							(variable.length === 0 || (typeof variable[0] === "object" && variable[0].nodeType > 0));
				},
				/* Determine if variable is a wrapped jQuery or Zepto element. */
				isWrapped: function(variable) {
					return variable && (variable.jquery || (window.Zepto && window.Zepto.zepto.isZ(variable)));
				},
				isSVG: function(variable) {
					return window.SVGElement && (variable instanceof window.SVGElement);
				},
				isEmptyObject: function(variable) {
					for (var name in variable) {
						if (variable.hasOwnProperty(name)) {
							return false;
						}
					}
	
					return true;
				}
			};
	
			/*****************
			 Dependencies
			 *****************/
	
			var $,
					isJQuery = false;
	
			if (global.fn && global.fn.jquery) {
				$ = global;
				isJQuery = true;
			} else {
				$ = window.Velocity.Utilities;
			}
	
			if (IE <= 8 && !isJQuery) {
				throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
			} else if (IE <= 7) {
				/* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
				jQuery.fn.velocity = jQuery.fn.animate;
	
				/* Now that $.fn.velocity is aliased, abort this Velocity declaration. */
				return;
			}
	
			/*****************
			 Constants
			 *****************/
	
			var DURATION_DEFAULT = 400,
					EASING_DEFAULT = "swing";
	
			/*************
			 State
			 *************/
	
			var Velocity = {
				/* Container for page-wide Velocity state data. */
				State: {
					/* Detect mobile devices to determine if mobileHA should be turned on. */
					isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
					/* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
					isAndroid: /Android/i.test(navigator.userAgent),
					isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
					isChrome: window.chrome,
					isFirefox: /Firefox/i.test(navigator.userAgent),
					/* Create a cached element for re-use when checking for CSS property prefixes. */
					prefixElement: document.createElement("div"),
					/* Cache every prefix match to avoid repeating lookups. */
					prefixMatches: {},
					/* Cache the anchor used for animating window scrolling. */
					scrollAnchor: null,
					/* Cache the browser-specific property names associated with the scroll anchor. */
					scrollPropertyLeft: null,
					scrollPropertyTop: null,
					/* Keep track of whether our RAF tick is running. */
					isTicking: false,
					/* Container for every in-progress call to Velocity. */
					calls: []
				},
				/* Velocity's custom CSS stack. Made global for unit testing. */
				CSS: { /* Defined below. */},
				/* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
				Utilities: $,
				/* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
				Redirects: { /* Manually registered by the user. */},
				Easings: { /* Defined below. */},
				/* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
				Promise: window.Promise,
				/* Velocity option defaults, which can be overriden by the user. */
				defaults: {
					queue: "",
					duration: DURATION_DEFAULT,
					easing: EASING_DEFAULT,
					begin: undefined,
					complete: undefined,
					progress: undefined,
					display: undefined,
					visibility: undefined,
					loop: false,
					delay: false,
					mobileHA: true,
					/* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
					_cacheValues: true
				},
				/* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
				init: function(element) {
					$.data(element, "velocity", {
						/* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
						isSVG: Type.isSVG(element),
						/* Keep track of whether the element is currently being animated by Velocity.
						 This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
						isAnimating: false,
						/* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
						computedStyle: null,
						/* Tween data is cached for each animation on the element so that data can be passed across calls --
						 in particular, end values are used as subsequent start values in consecutive Velocity calls. */
						tweensContainer: null,
						/* The full root property values of each CSS hook being animated on this element are cached so that:
						 1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
						 2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
						rootPropertyValueCache: {},
						/* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
						transformCache: {}
					});
				},
				/* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
				hook: null, /* Defined below. */
				/* Velocity-wide animation time remapping for testing purposes. */
				mock: false,
				version: {major: 1, minor: 3, patch: 1},
				/* Set to 1 or 2 (most verbose) to output debug info to console. */
				debug: false
			};
	
			/* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
			if (window.pageYOffset !== undefined) {
				Velocity.State.scrollAnchor = window;
				Velocity.State.scrollPropertyLeft = "pageXOffset";
				Velocity.State.scrollPropertyTop = "pageYOffset";
			} else {
				Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
				Velocity.State.scrollPropertyLeft = "scrollLeft";
				Velocity.State.scrollPropertyTop = "scrollTop";
			}
	
			/* Shorthand alias for jQuery's $.data() utility. */
			function Data(element) {
				/* Hardcode a reference to the plugin name. */
				var response = $.data(element, "velocity");
	
				/* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
				return response === null ? undefined : response;
			}
	
			/**************
			 Easing
			 **************/
	
			/* Step easing generator. */
			function generateStep(steps) {
				return function(p) {
					return Math.round(p * steps) * (1 / steps);
				};
			}
	
			/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
			function generateBezier(mX1, mY1, mX2, mY2) {
				var NEWTON_ITERATIONS = 4,
						NEWTON_MIN_SLOPE = 0.001,
						SUBDIVISION_PRECISION = 0.0000001,
						SUBDIVISION_MAX_ITERATIONS = 10,
						kSplineTableSize = 11,
						kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
						float32ArraySupported = "Float32Array" in window;
	
				/* Must contain four arguments. */
				if (arguments.length !== 4) {
					return false;
				}
	
				/* Arguments must be numbers. */
				for (var i = 0; i < 4; ++i) {
					if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
						return false;
					}
				}
	
				/* X values must be in the [0, 1] range. */
				mX1 = Math.min(mX1, 1);
				mX2 = Math.min(mX2, 1);
				mX1 = Math.max(mX1, 0);
				mX2 = Math.max(mX2, 0);
	
				var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
	
				function A(aA1, aA2) {
					return 1.0 - 3.0 * aA2 + 3.0 * aA1;
				}
				function B(aA1, aA2) {
					return 3.0 * aA2 - 6.0 * aA1;
				}
				function C(aA1) {
					return 3.0 * aA1;
				}
	
				function calcBezier(aT, aA1, aA2) {
					return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
				}
	
				function getSlope(aT, aA1, aA2) {
					return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
				}
	
				function newtonRaphsonIterate(aX, aGuessT) {
					for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
						var currentSlope = getSlope(aGuessT, mX1, mX2);
	
						if (currentSlope === 0.0) {
							return aGuessT;
						}
	
						var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
						aGuessT -= currentX / currentSlope;
					}
	
					return aGuessT;
				}
	
				function calcSampleValues() {
					for (var i = 0; i < kSplineTableSize; ++i) {
						mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
					}
				}
	
				function binarySubdivide(aX, aA, aB) {
					var currentX, currentT, i = 0;
	
					do {
						currentT = aA + (aB - aA) / 2.0;
						currentX = calcBezier(currentT, mX1, mX2) - aX;
						if (currentX > 0.0) {
							aB = currentT;
						} else {
							aA = currentT;
						}
					} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
	
					return currentT;
				}
	
				function getTForX(aX) {
					var intervalStart = 0.0,
							currentSample = 1,
							lastSample = kSplineTableSize - 1;
	
					for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
						intervalStart += kSampleStepSize;
					}
	
					--currentSample;
	
					var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
							guessForT = intervalStart + dist * kSampleStepSize,
							initialSlope = getSlope(guessForT, mX1, mX2);
	
					if (initialSlope >= NEWTON_MIN_SLOPE) {
						return newtonRaphsonIterate(aX, guessForT);
					} else if (initialSlope === 0.0) {
						return guessForT;
					} else {
						return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
					}
				}
	
				var _precomputed = false;
	
				function precompute() {
					_precomputed = true;
					if (mX1 !== mY1 || mX2 !== mY2) {
						calcSampleValues();
					}
				}
	
				var f = function(aX) {
					if (!_precomputed) {
						precompute();
					}
					if (mX1 === mY1 && mX2 === mY2) {
						return aX;
					}
					if (aX === 0) {
						return 0;
					}
					if (aX === 1) {
						return 1;
					}
	
					return calcBezier(getTForX(aX), mY1, mY2);
				};
	
				f.getControlPoints = function() {
					return [{x: mX1, y: mY1}, {x: mX2, y: mY2}];
				};
	
				var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
				f.toString = function() {
					return str;
				};
	
				return f;
			}
	
			/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
			/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
			 then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
			var generateSpringRK4 = (function() {
				function springAccelerationForState(state) {
					return (-state.tension * state.x) - (state.friction * state.v);
				}
	
				function springEvaluateStateWithDerivative(initialState, dt, derivative) {
					var state = {
						x: initialState.x + derivative.dx * dt,
						v: initialState.v + derivative.dv * dt,
						tension: initialState.tension,
						friction: initialState.friction
					};
	
					return {dx: state.v, dv: springAccelerationForState(state)};
				}
	
				function springIntegrateState(state, dt) {
					var a = {
						dx: state.v,
						dv: springAccelerationForState(state)
					},
					b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
							c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
							d = springEvaluateStateWithDerivative(state, dt, c),
							dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
							dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);
	
					state.x = state.x + dxdt * dt;
					state.v = state.v + dvdt * dt;
	
					return state;
				}
	
				return function springRK4Factory(tension, friction, duration) {
	
					var initState = {
						x: -1,
						v: 0,
						tension: null,
						friction: null
					},
					path = [0],
							time_lapsed = 0,
							tolerance = 1 / 10000,
							DT = 16 / 1000,
							have_duration, dt, last_state;
	
					tension = parseFloat(tension) || 500;
					friction = parseFloat(friction) || 20;
					duration = duration || null;
	
					initState.tension = tension;
					initState.friction = friction;
	
					have_duration = duration !== null;
	
					/* Calculate the actual time it takes for this animation to complete with the provided conditions. */
					if (have_duration) {
						/* Run the simulation without a duration. */
						time_lapsed = springRK4Factory(tension, friction);
						/* Compute the adjusted time delta. */
						dt = time_lapsed / duration * DT;
					} else {
						dt = DT;
					}
	
					while (true) {
						/* Next/step function .*/
						last_state = springIntegrateState(last_state || initState, dt);
						/* Store the position. */
						path.push(1 + last_state.x);
						time_lapsed += 16;
						/* If the change threshold is reached, break. */
						if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
							break;
						}
					}
	
					/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
					 computed path and returns a snapshot of the position according to a given percentComplete. */
					return !have_duration ? time_lapsed : function(percentComplete) {
						return path[ (percentComplete * (path.length - 1)) | 0 ];
					};
				};
			}());
	
			/* jQuery easings. */
			Velocity.Easings = {
				linear: function(p) {
					return p;
				},
				swing: function(p) {
					return 0.5 - Math.cos(p * Math.PI) / 2;
				},
				/* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
				spring: function(p) {
					return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6));
				}
			};
	
			/* CSS3 and Robert Penner easings. */
			$.each(
					[
						["ease", [0.25, 0.1, 0.25, 1.0]],
						["ease-in", [0.42, 0.0, 1.00, 1.0]],
						["ease-out", [0.00, 0.0, 0.58, 1.0]],
						["ease-in-out", [0.42, 0.0, 0.58, 1.0]],
						["easeInSine", [0.47, 0, 0.745, 0.715]],
						["easeOutSine", [0.39, 0.575, 0.565, 1]],
						["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
						["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
						["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
						["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
						["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
						["easeOutCubic", [0.215, 0.61, 0.355, 1]],
						["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
						["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
						["easeOutQuart", [0.165, 0.84, 0.44, 1]],
						["easeInOutQuart", [0.77, 0, 0.175, 1]],
						["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
						["easeOutQuint", [0.23, 1, 0.32, 1]],
						["easeInOutQuint", [0.86, 0, 0.07, 1]],
						["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
						["easeOutExpo", [0.19, 1, 0.22, 1]],
						["easeInOutExpo", [1, 0, 0, 1]],
						["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
						["easeOutCirc", [0.075, 0.82, 0.165, 1]],
						["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]
					], function(i, easingArray) {
				Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
			});
	
			/* Determine the appropriate easing type given an easing input. */
			function getEasing(value, duration) {
				var easing = value;
	
				/* The easing option can either be a string that references a pre-registered easing,
				 or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
				if (Type.isString(value)) {
					/* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
					if (!Velocity.Easings[value]) {
						easing = false;
					}
				} else if (Type.isArray(value) && value.length === 1) {
					easing = generateStep.apply(null, value);
				} else if (Type.isArray(value) && value.length === 2) {
					/* springRK4 must be passed the animation's duration. */
					/* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
					 function generated with default tension and friction values. */
					easing = generateSpringRK4.apply(null, value.concat([duration]));
				} else if (Type.isArray(value) && value.length === 4) {
					/* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
					easing = generateBezier.apply(null, value);
				} else {
					easing = false;
				}
	
				/* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
				 if the Velocity-wide default has been incorrectly modified. */
				if (easing === false) {
					if (Velocity.Easings[Velocity.defaults.easing]) {
						easing = Velocity.defaults.easing;
					} else {
						easing = EASING_DEFAULT;
					}
				}
	
				return easing;
			}
	
			/*****************
			 CSS Stack
			 *****************/
	
			/* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
			 It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
			/* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
			var CSS = Velocity.CSS = {
				/*************
				 RegEx
				 *************/
	
				RegEx: {
					isHex: /^#([A-f\d]{3}){1,2}$/i,
					/* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
					valueUnwrap: /^[A-z]+\((.*)\)$/i,
					wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
					/* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
					valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
				},
				/************
				 Lists
				 ************/
	
				Lists: {
					colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
					transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
					transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
				},
				/************
				 Hooks
				 ************/
	
				/* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
				 (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
				/* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
				 tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
				Hooks: {
					/********************
					 Registration
					 ********************/
	
					/* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
					/* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
					templates: {
						"textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
						"boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
						"clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
						"backgroundPosition": ["X Y", "0% 0%"],
						"transformOrigin": ["X Y Z", "50% 50% 0px"],
						"perspectiveOrigin": ["X Y", "50% 50%"]
					},
					/* A "registered" hook is one that has been converted from its template form into a live,
					 tweenable property. It contains data to associate it with its root property. */
					registered: {
						/* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
						 which consists of the subproperty's name, the associated root property's name,
						 and the subproperty's position in the root's value. */
					},
					/* Convert the templates into individual hooks then append them to the registered object above. */
					register: function() {
						/* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
						 currently set to "transparent" default to their respective template below when color-animated,
						 and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
						 which is almost always set closer to black than white. */
						for (var i = 0; i < CSS.Lists.colors.length; i++) {
							var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
							CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha", rgbComponents];
						}
	
						var rootProperty,
								hookTemplate,
								hookNames;
	
						/* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
						 Thus, we re-arrange the templates accordingly. */
						if (IE) {
							for (rootProperty in CSS.Hooks.templates) {
								if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
									continue;
								}
								hookTemplate = CSS.Hooks.templates[rootProperty];
								hookNames = hookTemplate[0].split(" ");
	
								var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);
	
								if (hookNames[0] === "Color") {
									/* Reposition both the hook's name and its default value to the end of their respective strings. */
									hookNames.push(hookNames.shift());
									defaultValues.push(defaultValues.shift());
	
									/* Replace the existing template for the hook's root property. */
									CSS.Hooks.templates[rootProperty] = [hookNames.join(" "), defaultValues.join(" ")];
								}
							}
						}
	
						/* Hook registration. */
						for (rootProperty in CSS.Hooks.templates) {
							if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
								continue;
							}
							hookTemplate = CSS.Hooks.templates[rootProperty];
							hookNames = hookTemplate[0].split(" ");
	
							for (var j in hookNames) {
								if (!hookNames.hasOwnProperty(j)) {
									continue;
								}
								var fullHookName = rootProperty + hookNames[j],
										hookPosition = j;
	
								/* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
								 and the hook's position in its template's default value string. */
								CSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];
							}
						}
					},
					/*****************************
					 Injection and Extraction
					 *****************************/
	
					/* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
					/* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
					getRoot: function(property) {
						var hookData = CSS.Hooks.registered[property];
	
						if (hookData) {
							return hookData[0];
						} else {
							/* If there was no hook match, return the property name untouched. */
							return property;
						}
					},
					/* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
					 the targeted hook can be injected or extracted at its standard position. */
					cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
						/* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
						if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
							rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
						}
	
						/* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
						 default to the root's default value as defined in CSS.Hooks.templates. */
						/* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
						 zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
						if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
							rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
						}
	
						return rootPropertyValue;
					},
					/* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
					extractValue: function(fullHookName, rootPropertyValue) {
						var hookData = CSS.Hooks.registered[fullHookName];
	
						if (hookData) {
							var hookRoot = hookData[0],
									hookPosition = hookData[1];
	
							rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
	
							/* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
							return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
						} else {
							/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
							return rootPropertyValue;
						}
					},
					/* Inject the hook's value into its root property's value. This is used to piece back together the root property
					 once Velocity has updated one of its individually hooked values through tweening. */
					injectValue: function(fullHookName, hookValue, rootPropertyValue) {
						var hookData = CSS.Hooks.registered[fullHookName];
	
						if (hookData) {
							var hookRoot = hookData[0],
									hookPosition = hookData[1],
									rootPropertyValueParts,
									rootPropertyValueUpdated;
	
							rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);
	
							/* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
							 then reconstruct the rootPropertyValue string. */
							rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
							rootPropertyValueParts[hookPosition] = hookValue;
							rootPropertyValueUpdated = rootPropertyValueParts.join(" ");
	
							return rootPropertyValueUpdated;
						} else {
							/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
							return rootPropertyValue;
						}
					}
				},
				/*******************
				 Normalizations
				 *******************/
	
				/* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
				 and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
				Normalizations: {
					/* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
					 the targeted element (which may need to be queried), and the targeted property value. */
					registered: {
						clip: function(type, element, propertyValue) {
							switch (type) {
								case "name":
									return "clip";
									/* Clip needs to be unwrapped and stripped of its commas during extraction. */
								case "extract":
									var extracted;
	
									/* If Velocity also extracted this value, skip extraction. */
									if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
										extracted = propertyValue;
									} else {
										/* Remove the "rect()" wrapper. */
										extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);
	
										/* Strip off commas. */
										extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
									}
	
									return extracted;
									/* Clip needs to be re-wrapped during injection. */
								case "inject":
									return "rect(" + propertyValue + ")";
							}
						},
						blur: function(type, element, propertyValue) {
							switch (type) {
								case "name":
									return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
								case "extract":
									var extracted = parseFloat(propertyValue);
	
									/* If extracted is NaN, meaning the value isn't already extracted. */
									if (!(extracted || extracted === 0)) {
										var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
	
										/* If the filter string had a blur component, return just the blur value and unit type. */
										if (blurComponent) {
											extracted = blurComponent[1];
											/* If the component doesn't exist, default blur to 0. */
										} else {
											extracted = 0;
										}
									}
	
									return extracted;
									/* Blur needs to be re-wrapped during injection. */
								case "inject":
									/* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
									if (!parseFloat(propertyValue)) {
										return "none";
									} else {
										return "blur(" + propertyValue + ")";
									}
							}
						},
						/* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
						opacity: function(type, element, propertyValue) {
							if (IE <= 8) {
								switch (type) {
									case "name":
										return "filter";
									case "extract":
										/* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
										 Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
										var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);
	
										if (extracted) {
											/* Convert to decimal value. */
											propertyValue = extracted[1] / 100;
										} else {
											/* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
											propertyValue = 1;
										}
	
										return propertyValue;
									case "inject":
										/* Opacified elements are required to have their zoom property set to a non-zero value. */
										element.style.zoom = 1;
	
										/* Setting the filter property on elements with certain font property combinations can result in a
										 highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
										 value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
										if (parseFloat(propertyValue) >= 1) {
											return "";
										} else {
											/* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
											return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
										}
								}
								/* With all other browsers, normalization is not required; return the same values that were passed in. */
							} else {
								switch (type) {
									case "name":
										return "opacity";
									case "extract":
										return propertyValue;
									case "inject":
										return propertyValue;
								}
							}
						}
					},
					/*****************************
					 Batched Registrations
					 *****************************/
	
					/* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
					register: function() {
	
						/*****************
						 Transforms
						 *****************/
	
						/* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
						 so that they can be referenced in a properties map by their individual names. */
						/* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
						 setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
						 Transform setting is batched in this way to improve performance: the transform style only needs to be updated
						 once when multiple transform subproperties are being animated simultaneously. */
						/* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
						 transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
						 from being normalized for these browsers so that tweening skips these properties altogether
						 (since it will ignore them as being unsupported by the browser.) */
						if ((!IE || IE > 9) && !Velocity.State.isGingerbread) {
							/* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
							 share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
							CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
						}
	
						for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
							/* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
							 paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
							(function() {
								var transformName = CSS.Lists.transformsBase[i];
	
								CSS.Normalizations.registered[transformName] = function(type, element, propertyValue) {
									switch (type) {
										/* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
										case "name":
											return "transform";
											/* Transform values are cached onto a per-element transformCache object. */
										case "extract":
											/* If this transform has yet to be assigned a value, return its null value. */
											if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
												/* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
												return /^scale/i.test(transformName) ? 1 : 0;
												/* When transform values are set, they are wrapped in parentheses as per the CSS spec.
												 Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
											}
											return Data(element).transformCache[transformName].replace(/[()]/g, "");
										case "inject":
											var invalid = false;
	
											/* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
											 Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
											/* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
											switch (transformName.substr(0, transformName.length - 1)) {
												/* Whitelist unit types for each transform. */
												case "translate":
													invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
													break;
													/* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
												case "scal":
												case "scale":
													/* Chrome on Android has a bug in which scaled elements blur if their initial scale
													 value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
													 and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
													if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
														propertyValue = 1;
													}
	
													invalid = !/(\d)$/i.test(propertyValue);
													break;
												case "skew":
													invalid = !/(deg|\d)$/i.test(propertyValue);
													break;
												case "rotate":
													invalid = !/(deg|\d)$/i.test(propertyValue);
													break;
											}
	
											if (!invalid) {
												/* As per the CSS spec, wrap the value in parentheses. */
												Data(element).transformCache[transformName] = "(" + propertyValue + ")";
											}
	
											/* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
											return Data(element).transformCache[transformName];
									}
								};
							})();
						}
	
						/*************
						 Colors
						 *************/
	
						/* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
						 Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
						for (var j = 0; j < CSS.Lists.colors.length; j++) {
							/* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
							 (Otherwise, all functions would take the final for loop's colorName.) */
							(function() {
								var colorName = CSS.Lists.colors[j];
	
								/* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
								CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
									switch (type) {
										case "name":
											return colorName;
											/* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
										case "extract":
											var extracted;
	
											/* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
											if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
												extracted = propertyValue;
											} else {
												var converted,
														colorNames = {
															black: "rgb(0, 0, 0)",
															blue: "rgb(0, 0, 255)",
															gray: "rgb(128, 128, 128)",
															green: "rgb(0, 128, 0)",
															red: "rgb(255, 0, 0)",
															white: "rgb(255, 255, 255)"
														};
	
												/* Convert color names to rgb. */
												if (/^[A-z]+$/i.test(propertyValue)) {
													if (colorNames[propertyValue] !== undefined) {
														converted = colorNames[propertyValue];
													} else {
														/* If an unmatched color name is provided, default to black. */
														converted = colorNames.black;
													}
													/* Convert hex values to rgb. */
												} else if (CSS.RegEx.isHex.test(propertyValue)) {
													converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
													/* If the provided color doesn't match any of the accepted color formats, default to black. */
												} else if (!(/^rgba?\(/i.test(propertyValue))) {
													converted = colorNames.black;
												}
	
												/* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
												 repeated spaces (in case the value included spaces to begin with). */
												extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
											}
	
											/* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
											if ((!IE || IE > 8) && extracted.split(" ").length === 3) {
												extracted += " 1";
											}
	
											return extracted;
										case "inject":
											/* If this is IE<=8 and an alpha component exists, strip it off. */
											if (IE <= 8) {
												if (propertyValue.split(" ").length === 4) {
													propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
												}
												/* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
											} else if (propertyValue.split(" ").length === 3) {
												propertyValue += " 1";
											}
	
											/* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
											 on all values but the fourth (R, G, and B only accept whole numbers). */
											return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
									}
								};
							})();
						}
					}
				},
				/************************
				 CSS Property Names
				 ************************/
	
				Names: {
					/* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
					 Camelcasing is used to normalize property names between and across calls. */
					camelCase: function(property) {
						return property.replace(/-(\w)/g, function(match, subMatch) {
							return subMatch.toUpperCase();
						});
					},
					/* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
					SVGAttribute: function(property) {
						var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
	
						/* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
						if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
							SVGAttributes += "|transform";
						}
	
						return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
					},
					/* Determine whether a property should be set with a vendor prefix. */
					/* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
					 If the property is not at all supported by the browser, return a false flag. */
					prefixCheck: function(property) {
						/* If this property has already been checked, return the cached value. */
						if (Velocity.State.prefixMatches[property]) {
							return [Velocity.State.prefixMatches[property], true];
						} else {
							var vendors = ["", "Webkit", "Moz", "ms", "O"];
	
							for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
								var propertyPrefixed;
	
								if (i === 0) {
									propertyPrefixed = property;
								} else {
									/* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
									propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) {
										return match.toUpperCase();
									});
								}
	
								/* Check if the browser supports this property as prefixed. */
								if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
									/* Cache the match. */
									Velocity.State.prefixMatches[property] = propertyPrefixed;
	
									return [propertyPrefixed, true];
								}
							}
	
							/* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
							return [property, false];
						}
					}
				},
				/************************
				 CSS Property Values
				 ************************/
	
				Values: {
					/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
					hexToRgb: function(hex) {
						var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
								longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
								rgbParts;
	
						hex = hex.replace(shortformRegex, function(m, r, g, b) {
							return r + r + g + g + b + b;
						});
	
						rgbParts = longformRegex.exec(hex);
	
						return rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];
					},
					isCSSNullValue: function(value) {
						/* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
						 Thus, we check for both falsiness and these special strings. */
						/* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
						 templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
						/* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
						return (!value || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));
					},
					/* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
					getUnitType: function(property) {
						if (/^(rotate|skew)/i.test(property)) {
							return "deg";
						} else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
							/* The above properties are unitless. */
							return "";
						} else {
							/* Default to px for all other properties. */
							return "px";
						}
					},
					/* HTML elements default to an associated display type when they're not set to display:none. */
					/* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
					getDisplayType: function(element) {
						var tagName = element && element.tagName.toString().toLowerCase();
	
						if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
							return "inline";
						} else if (/^(li)$/i.test(tagName)) {
							return "list-item";
						} else if (/^(tr)$/i.test(tagName)) {
							return "table-row";
						} else if (/^(table)$/i.test(tagName)) {
							return "table";
						} else if (/^(tbody)$/i.test(tagName)) {
							return "table-row-group";
							/* Default to "block" when no match is found. */
						} else {
							return "block";
						}
					},
					/* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
					addClass: function(element, className) {
						if (element.classList) {
							element.classList.add(className);
						} else {
							element.className += (element.className.length ? " " : "") + className;
						}
					},
					removeClass: function(element, className) {
						if (element.classList) {
							element.classList.remove(className);
						} else {
							element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
						}
					}
				},
				/****************************
				 Style Getting & Setting
				 ****************************/
	
				/* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
				getPropertyValue: function(element, property, rootPropertyValue, forceStyleLookup) {
					/* Get an element's computed property value. */
					/* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
					 style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
					 *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
					function computePropertyValue(element, property) {
						/* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
						 element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
						 offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
						 We subtract border and padding to get the sum of interior + scrollbar. */
						var computedValue = 0;
	
						/* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
						 of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
						 codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
						 Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
						if (IE <= 8) {
							computedValue = $.css(element, property); /* GET */
							/* All other browsers support getComputedStyle. The returned live object reference is cached onto its
							 associated element so that it does not need to be refetched upon every GET. */
						} else {
							/* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
							 toggle display to the element type's default value. */
							var toggleDisplay = false;
	
							if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
								toggleDisplay = true;
								CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
							}
	
							var revertDisplay = function() {
								if (toggleDisplay) {
									CSS.setPropertyValue(element, "display", "none");
								}
							};
	
							if (!forceStyleLookup) {
								if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
									var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
									revertDisplay();
	
									return contentBoxHeight;
								} else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
									var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
									revertDisplay();
	
									return contentBoxWidth;
								}
							}
	
							var computedStyle;
	
							/* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
							 of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
							if (Data(element) === undefined) {
								computedStyle = window.getComputedStyle(element, null); /* GET */
								/* If the computedStyle object has yet to be cached, do so now. */
							} else if (!Data(element).computedStyle) {
								computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
								/* If computedStyle is cached, use it. */
							} else {
								computedStyle = Data(element).computedStyle;
							}
	
							/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
							 Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
							 So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
							if (property === "borderColor") {
								property = "borderTopColor";
							}
	
							/* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
							 instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
							if (IE === 9 && property === "filter") {
								computedValue = computedStyle.getPropertyValue(property); /* GET */
							} else {
								computedValue = computedStyle[property];
							}
	
							/* Fall back to the property's style value (if defined) when computedValue returns nothing,
							 which can happen when the element hasn't been painted. */
							if (computedValue === "" || computedValue === null) {
								computedValue = element.style[property];
							}
	
							revertDisplay();
						}
	
						/* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
						 defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
						 effect as being set to 0, so no conversion is necessary.) */
						/* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
						 property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
						 to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
						if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
							var position = computePropertyValue(element, "position"); /* GET */
	
							/* For absolute positioning, jQuery's $.position() only returns values for top and left;
							 right and bottom will have their "auto" value reverted to 0. */
							/* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
							 Not a big deal since we're currently in a GET batch anyway. */
							if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
								/* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
								computedValue = $(element).position()[property] + "px"; /* GET */
							}
						}
	
						return computedValue;
					}
	
					var propertyValue;
	
					/* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
					 extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
					if (CSS.Hooks.registered[property]) {
						var hook = property,
								hookRoot = CSS.Hooks.getRoot(hook);
	
						/* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
						 query the DOM for the root property's value. */
						if (rootPropertyValue === undefined) {
							/* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
							rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */
						}
	
						/* If this root has a normalization registered, peform the associated normalization extraction. */
						if (CSS.Normalizations.registered[hookRoot]) {
							rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
						}
	
						/* Extract the hook's value. */
						propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);
	
						/* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
						 normalize the property's name and value, and handle the special case of transforms. */
						/* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
						 numerical and therefore do not require normalization extraction. */
					} else if (CSS.Normalizations.registered[property]) {
						var normalizedPropertyName,
								normalizedPropertyValue;
	
						normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);
	
						/* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
						 At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
						 This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
						 thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
						if (normalizedPropertyName !== "transform") {
							normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */
	
							/* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
							if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
								normalizedPropertyValue = CSS.Hooks.templates[property][1];
							}
						}
	
						propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
					}
	
					/* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
					if (!/^[\d-]/.test(propertyValue)) {
						/* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
						 their HTML attribute values instead of their CSS style values. */
						var data = Data(element);
	
						if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
							/* Since the height/width attribute values must be set manually, they don't reflect computed values.
							 Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
							if (/^(height|width)$/i.test(property)) {
								/* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
								try {
									propertyValue = element.getBBox()[property];
								} catch (error) {
									propertyValue = 0;
								}
								/* Otherwise, access the attribute value directly. */
							} else {
								propertyValue = element.getAttribute(property);
							}
						} else {
							propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */
						}
					}
	
					/* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
					 convert CSS null-values to an integer of value 0. */
					if (CSS.Values.isCSSNullValue(propertyValue)) {
						propertyValue = 0;
					}
	
					if (Velocity.debug >= 2) {
						console.log("Get " + property + ": " + propertyValue);
					}
	
					return propertyValue;
				},
				/* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
				setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
					var propertyName = property;
	
					/* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
					if (property === "scroll") {
						/* If a container option is present, scroll the container instead of the browser window. */
						if (scrollData.container) {
							scrollData.container["scroll" + scrollData.direction] = propertyValue;
							/* Otherwise, Velocity defaults to scrolling the browser window. */
						} else {
							if (scrollData.direction === "Left") {
								window.scrollTo(propertyValue, scrollData.alternateValue);
							} else {
								window.scrollTo(scrollData.alternateValue, propertyValue);
							}
						}
					} else {
						/* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
						 Thus, for now, we merely cache transforms being SET. */
						if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
							/* Perform a normalization injection. */
							/* Note: The normalization logic handles the transformCache updating. */
							CSS.Normalizations.registered[property]("inject", element, propertyValue);
	
							propertyName = "transform";
							propertyValue = Data(element).transformCache[property];
						} else {
							/* Inject hooks. */
							if (CSS.Hooks.registered[property]) {
								var hookName = property,
										hookRoot = CSS.Hooks.getRoot(property);
	
								/* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
								rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */
	
								propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
								property = hookRoot;
							}
	
							/* Normalize names and values. */
							if (CSS.Normalizations.registered[property]) {
								propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
								property = CSS.Normalizations.registered[property]("name", element);
							}
	
							/* Assign the appropriate vendor prefix before performing an official style update. */
							propertyName = CSS.Names.prefixCheck(property)[0];
	
							/* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
							 Try/catch is avoided for other browsers since it incurs a performance overhead. */
							if (IE <= 8) {
								try {
									element.style[propertyName] = propertyValue;
								} catch (error) {
									if (Velocity.debug) {
										console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");
									}
								}
								/* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
								/* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */
							} else {
								var data = Data(element);
	
								if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
									/* Note: For SVG attributes, vendor-prefixed property names are never used. */
									/* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
									element.setAttribute(property, propertyValue);
								} else {
									element.style[propertyName] = propertyValue;
								}
							}
	
							if (Velocity.debug >= 2) {
								console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
							}
						}
					}
	
					/* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
					return [propertyName, propertyValue];
				},
				/* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
				/* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
				flushTransformCache: function(element) {
					var transformString = "",
							data = Data(element);
	
					/* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
					 (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
					if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && data && data.isSVG) {
						/* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
						 Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
						var getTransformFloat = function(transformProperty) {
							return parseFloat(CSS.getPropertyValue(element, transformProperty));
						};
	
						/* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
						 we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
						var SVGTransforms = {
							translate: [getTransformFloat("translateX"), getTransformFloat("translateY")],
							skewX: [getTransformFloat("skewX")], skewY: [getTransformFloat("skewY")],
							/* If the scale property is set (non-1), use that value for the scaleX and scaleY values
							 (this behavior mimics the result of animating all these properties at once on HTML elements). */
							scale: getTransformFloat("scale") !== 1 ? [getTransformFloat("scale"), getTransformFloat("scale")] : [getTransformFloat("scaleX"), getTransformFloat("scaleY")],
							/* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
							 defining the rotation's origin point. We ignore the origin values (default them to 0). */
							rotate: [getTransformFloat("rotateZ"), 0, 0]
						};
	
						/* Iterate through the transform properties in the user-defined property map order.
						 (This mimics the behavior of non-SVG transform animation.) */
						$.each(Data(element).transformCache, function(transformName) {
							/* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
							 properties so that they match up with SVG's accepted transform properties. */
							if (/^translate/i.test(transformName)) {
								transformName = "translate";
							} else if (/^scale/i.test(transformName)) {
								transformName = "scale";
							} else if (/^rotate/i.test(transformName)) {
								transformName = "rotate";
							}
	
							/* Check that we haven't yet deleted the property from the SVGTransforms container. */
							if (SVGTransforms[transformName]) {
								/* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
								transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";
	
								/* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
								 re-insert the same master property if we encounter another one of its axis-specific properties. */
								delete SVGTransforms[transformName];
							}
						});
					} else {
						var transformValue,
								perspective;
	
						/* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
						$.each(Data(element).transformCache, function(transformName) {
							transformValue = Data(element).transformCache[transformName];
	
							/* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
							if (transformName === "transformPerspective") {
								perspective = transformValue;
								return true;
							}
	
							/* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
							if (IE === 9 && transformName === "rotateZ") {
								transformName = "rotate";
							}
	
							transformString += transformName + transformValue + " ";
						});
	
						/* If present, set the perspective subproperty first. */
						if (perspective) {
							transformString = "perspective" + perspective + " " + transformString;
						}
					}
	
					CSS.setPropertyValue(element, "transform", transformString);
				}
			};
	
			/* Register hooks and normalizations. */
			CSS.Hooks.register();
			CSS.Normalizations.register();
	
			/* Allow hook setting in the same fashion as jQuery's $.css(). */
			Velocity.hook = function(elements, arg2, arg3) {
				var value;
	
				elements = sanitizeElements(elements);
	
				$.each(elements, function(i, element) {
					/* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
					if (Data(element) === undefined) {
						Velocity.init(element);
					}
	
					/* Get property value. If an element set was passed in, only return the value for the first element. */
					if (arg3 === undefined) {
						if (value === undefined) {
							value = Velocity.CSS.getPropertyValue(element, arg2);
						}
						/* Set property value. */
					} else {
						/* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
						var adjustedSet = Velocity.CSS.setPropertyValue(element, arg2, arg3);
	
						/* Transform properties don't automatically set. They have to be flushed to the DOM. */
						if (adjustedSet[0] === "transform") {
							Velocity.CSS.flushTransformCache(element);
						}
	
						value = adjustedSet;
					}
				});
	
				return value;
			};
	
			/*****************
			 Animation
			 *****************/
	
			var animate = function() {
				var opts;
	
				/******************
				 Call Chain
				 ******************/
	
				/* Logic for determining what to return to the call stack when exiting out of Velocity. */
				function getChain() {
					/* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
					 default to null instead of returning the targeted elements so that utility function's return value is standardized. */
					if (isUtility) {
						return promiseData.promise || null;
						/* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
					} else {
						return elementsWrapped;
					}
				}
	
				/*************************
				 Arguments Assignment
				 *************************/
	
				/* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
				 objects are defined on a container object that's passed in as Velocity's sole argument. */
				/* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
				var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
						/* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
						isUtility,
						/* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
						 passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
						elementsWrapped,
						argumentIndex;
	
				var elements,
						propertiesMap,
						options;
	
				/* Detect jQuery/Zepto elements being animated via the $.fn method. */
				if (Type.isWrapped(this)) {
					isUtility = false;
	
					argumentIndex = 0;
					elements = this;
					elementsWrapped = this;
					/* Otherwise, raw elements are being animated via the utility function. */
				} else {
					isUtility = true;
	
					argumentIndex = 1;
					elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];
				}
	
				elements = sanitizeElements(elements);
	
				if (!elements) {
					return;
				}
	
				if (syntacticSugar) {
					propertiesMap = arguments[0].properties || arguments[0].p;
					options = arguments[0].options || arguments[0].o;
				} else {
					propertiesMap = arguments[argumentIndex];
					options = arguments[argumentIndex + 1];
				}
	
				/* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
				 single raw DOM element is passed in (which doesn't contain a length property). */
				var elementsLength = elements.length,
						elementsIndex = 0;
	
				/***************************
				 Argument Overloading
				 ***************************/
	
				/* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
				 Overloading is detected by checking for the absence of an object being passed into options. */
				/* Note: The stop and finish actions do not accept animation options, and are therefore excluded from this check. */
				if (!/^(stop|finish|finishAll)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
					/* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
					var startingArgumentPosition = argumentIndex + 1;
	
					options = {};
	
					/* Iterate through all options arguments */
					for (var i = startingArgumentPosition; i < arguments.length; i++) {
						/* Treat a number as a duration. Parse it out. */
						/* Note: The following RegEx will return true if passed an array with a number as its first item.
						 Thus, arrays are skipped from this check. */
						if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
							options.duration = arguments[i];
							/* Treat strings and arrays as easings. */
						} else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
							options.easing = arguments[i];
							/* Treat a function as a complete callback. */
						} else if (Type.isFunction(arguments[i])) {
							options.complete = arguments[i];
						}
					}
				}
	
				/***************
				 Promises
				 ***************/
	
				var promiseData = {
					promise: null,
					resolver: null,
					rejecter: null
				};
	
				/* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
				 promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
				 method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
				 call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
				/* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
				 triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
				 grouped together for the purposes of resolving and rejecting a promise. */
				if (isUtility && Velocity.Promise) {
					promiseData.promise = new Velocity.Promise(function(resolve, reject) {
						promiseData.resolver = resolve;
						promiseData.rejecter = reject;
					});
				}
	
				/*********************
				 Action Detection
				 *********************/
	
				/* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
				 or they can be started, stopped, or reversed. If a literal or referenced properties map is passed in as Velocity's
				 first argument, the associated action is "start". Alternatively, "scroll", "reverse", or "stop" can be passed in instead of a properties map. */
				var action;
	
				switch (propertiesMap) {
					case "scroll":
						action = "scroll";
						break;
	
					case "reverse":
						action = "reverse";
						break;
	
					case "finish":
					case "finishAll":
					case "stop":
						/*******************
						 Action: Stop
						 *******************/
	
						/* Clear the currently-active delay on each targeted element. */
						$.each(elements, function(i, element) {
							if (Data(element) && Data(element).delayTimer) {
								/* Stop the timer from triggering its cached next() function. */
								clearTimeout(Data(element).delayTimer.setTimeout);
	
								/* Manually call the next() function so that the subsequent queue items can progress. */
								if (Data(element).delayTimer.next) {
									Data(element).delayTimer.next();
								}
	
								delete Data(element).delayTimer;
							}
	
							/* If we want to finish everything in the queue, we have to iterate through it
							 and call each function. This will make them active calls below, which will
							 cause them to be applied via the duration setting. */
							if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
								/* Iterate through the items in the element's queue. */
								$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
									/* The queue array can contain an "inprogress" string, which we skip. */
									if (Type.isFunction(item)) {
										item();
									}
								});
	
								/* Clearing the $.queue() array is achieved by resetting it to []. */
								$.queue(element, Type.isString(options) ? options : "", []);
							}
						});
	
						var callsToStop = [];
	
						/* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
						 been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
						 is stopped, the next item in its animation queue is immediately triggered. */
						/* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
						 or a custom queue string can be passed in. */
						/* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
						 regardless of the element's current queue state. */
	
						/* Iterate through every active call. */
						$.each(Velocity.State.calls, function(i, activeCall) {
							/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
							if (activeCall) {
								/* Iterate through the active call's targeted elements. */
								$.each(activeCall[1], function(k, activeElement) {
									/* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
									 clear calls associated with the relevant queue. */
									/* Call stopping logic works as follows:
									 - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
									 - options === undefined --> stop current queue:"" call and all queue:false calls.
									 - options === false --> stop only queue:false calls.
									 - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
									var queueName = (options === undefined) ? "" : options;
	
									if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
										return true;
									}
	
									/* Iterate through the calls targeted by the stop command. */
									$.each(elements, function(l, element) {
										/* Check that this call was applied to the target element. */
										if (element === activeElement) {
											/* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
											 due to the queue-clearing above. */
											if (options === true || Type.isString(options)) {
												/* Iterate through the items in the element's queue. */
												$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
													/* The queue array can contain an "inprogress" string, which we skip. */
													if (Type.isFunction(item)) {
														/* Pass the item's callback a flag indicating that we want to abort from the queue call.
														 (Specifically, the queue will resolve the call's associated promise then abort.)  */
														item(null, true);
													}
												});
	
												/* Clearing the $.queue() array is achieved by resetting it to []. */
												$.queue(element, Type.isString(options) ? options : "", []);
											}
	
											if (propertiesMap === "stop") {
												/* Since "reverse" uses cached start values (the previous call's endValues), these values must be
												 changed to reflect the final value that the elements were actually tweened to. */
												/* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
												 object. Also, queue:false animations can't be reversed. */
												var data = Data(element);
												if (data && data.tweensContainer && queueName !== false) {
													$.each(data.tweensContainer, function(m, activeTween) {
														activeTween.endValue = activeTween.currentValue;
													});
												}
	
												callsToStop.push(i);
											} else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
												/* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
												 they finish upon the next rAf tick then proceed with normal call completion logic. */
												activeCall[2].duration = 1;
											}
										}
									});
								});
							}
						});
	
						/* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
						 that the complete callback and display:none setting should be skipped since we're completing prematurely. */
						if (propertiesMap === "stop") {
							$.each(callsToStop, function(i, j) {
								completeCall(j, true);
							});
	
							if (promiseData.promise) {
								/* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
								promiseData.resolver(elements);
							}
						}
	
						/* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
						return getChain();
	
					default:
						/* Treat a non-empty plain object as a literal properties map. */
						if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
							action = "start";
	
							/****************
							 Redirects
							 ****************/
	
							/* Check if a string matches a registered redirect (see Redirects above). */
						} else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
							opts = $.extend({}, options);
	
							var durationOriginal = opts.duration,
									delayOriginal = opts.delay || 0;
	
							/* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
							if (opts.backwards === true) {
								elements = $.extend(true, [], elements).reverse();
							}
	
							/* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
							$.each(elements, function(elementIndex, element) {
								/* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
								if (parseFloat(opts.stagger)) {
									opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);
								} else if (Type.isFunction(opts.stagger)) {
									opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
								}
	
								/* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
								 the duration of each element's animation, using floors to prevent producing very short durations. */
								if (opts.drag) {
									/* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
									opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);
	
									/* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
									 B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
									 The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
									opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
								}
	
								/* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
								 reduce the opts checking logic required inside the redirect. */
								Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
							});
	
							/* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
							 (The performance overhead up to this point is virtually non-existant.) */
							/* Note: The jQuery call chain is kept intact by returning the complete element set. */
							return getChain();
						} else {
							var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";
	
							if (promiseData.promise) {
								promiseData.rejecter(new Error(abortError));
							} else {
								console.log(abortError);
							}
	
							return getChain();
						}
				}
	
				/**************************
				 Call-Wide Variables
				 **************************/
	
				/* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
				 being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
				 avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
				 conversion metrics across Velocity animations that are not immediately consecutively chained. */
				var callUnitConversionData = {
					lastParent: null,
					lastPosition: null,
					lastFontSize: null,
					lastPercentToPxWidth: null,
					lastPercentToPxHeight: null,
					lastEmToPx: null,
					remToPx: null,
					vwToPx: null,
					vhToPx: null
				};
	
				/* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
				 Velocity.State.calls array that is processed during animation ticking. */
				var call = [];
	
				/************************
				 Element Processing
				 ************************/
	
				/* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
				 1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
				 2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
				 3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
				 `elementArrayIndex` allows passing index of the element in the original array to value functions.
				 If `elementsIndex` were used instead the index would be determined by the elements' per-element queue.
				 */
				function processElement(element, elementArrayIndex) {
	
					/*************************
					 Part I: Pre-Queueing
					 *************************/
	
					/***************************
					 Element-Wide Variables
					 ***************************/
	
					var /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
							opts = $.extend({}, Velocity.defaults, options),
							/* A container for the processed data associated with each property in the propertyMap.
							 (Each property in the map produces its own "tween".) */
							tweensContainer = {},
							elementUnitConversionData;
	
					/******************
					 Element Init
					 ******************/
	
					if (Data(element) === undefined) {
						Velocity.init(element);
					}
	
					/******************
					 Option: Delay
					 ******************/
	
					/* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
					/* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
					 (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
					if (parseFloat(opts.delay) && opts.queue !== false) {
						$.queue(element, opts.queue, function(next) {
							/* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
							Velocity.velocityQueueEntryFlag = true;
	
							/* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
							 The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command. */
							Data(element).delayTimer = {
								setTimeout: setTimeout(next, parseFloat(opts.delay)),
								next: next
							};
						});
					}
	
					/*********************
					 Option: Duration
					 *********************/
	
					/* Support for jQuery's named durations. */
					switch (opts.duration.toString().toLowerCase()) {
						case "fast":
							opts.duration = 200;
							break;
	
						case "normal":
							opts.duration = DURATION_DEFAULT;
							break;
	
						case "slow":
							opts.duration = 600;
							break;
	
						default:
							/* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
							opts.duration = parseFloat(opts.duration) || 1;
					}
	
					/************************
					 Global Option: Mock
					 ************************/
	
					if (Velocity.mock !== false) {
						/* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
						 Alternatively, a multiplier can be passed in to time remap all delays and durations. */
						if (Velocity.mock === true) {
							opts.duration = opts.delay = 1;
						} else {
							opts.duration *= parseFloat(Velocity.mock) || 1;
							opts.delay *= parseFloat(Velocity.mock) || 1;
						}
					}
	
					/*******************
					 Option: Easing
					 *******************/
	
					opts.easing = getEasing(opts.easing, opts.duration);
	
					/**********************
					 Option: Callbacks
					 **********************/
	
					/* Callbacks must functions. Otherwise, default to null. */
					if (opts.begin && !Type.isFunction(opts.begin)) {
						opts.begin = null;
					}
	
					if (opts.progress && !Type.isFunction(opts.progress)) {
						opts.progress = null;
					}
	
					if (opts.complete && !Type.isFunction(opts.complete)) {
						opts.complete = null;
					}
	
					/*********************************
					 Option: Display & Visibility
					 *********************************/
	
					/* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
					/* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
					if (opts.display !== undefined && opts.display !== null) {
						opts.display = opts.display.toString().toLowerCase();
	
						/* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
						if (opts.display === "auto") {
							opts.display = Velocity.CSS.Values.getDisplayType(element);
						}
					}
	
					if (opts.visibility !== undefined && opts.visibility !== null) {
						opts.visibility = opts.visibility.toString().toLowerCase();
					}
	
					/**********************
					 Option: mobileHA
					 **********************/
	
					/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
					 on animating elements. HA is removed from the element at the completion of its animation. */
					/* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
					/* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
					opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);
	
					/***********************
					 Part II: Queueing
					 ***********************/
	
					/* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
					 In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
					/* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
					 the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
					function buildQueue(next) {
						var data, lastTweensContainer;
	
						/*******************
						 Option: Begin
						 *******************/
	
						/* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
						if (opts.begin && elementsIndex === 0) {
							/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
							try {
								opts.begin.call(elements, elements);
							} catch (error) {
								setTimeout(function() {
									throw error;
								}, 1);
							}
						}
	
						/*****************************************
						 Tween Data Construction (for Scroll)
						 *****************************************/
	
						/* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
						if (action === "scroll") {
							/* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
							var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),
									scrollOffset = parseFloat(opts.offset) || 0,
									scrollPositionCurrent,
									scrollPositionCurrentAlternate,
									scrollPositionEnd;
	
							/* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
							 as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
							if (opts.container) {
								/* Ensure that either a jQuery object or a raw DOM element was passed in. */
								if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
									/* Extract the raw DOM element from the jQuery wrapper. */
									opts.container = opts.container[0] || opts.container;
									/* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
									 (due to the user's natural interaction with the page). */
									scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */
	
									/* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
									 -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
									 the scroll container's current scroll position. */
									scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */
									/* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
								} else {
									opts.container = null;
								}
							} else {
								/* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
								 the appropriate cached property names (which differ based on browser type). */
								scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
								/* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
								scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */
	
								/* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
								 and therefore end values do not need to be compounded onto current values. */
								scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
							}
	
							/* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
							tweensContainer = {
								scroll: {
									rootPropertyValue: false,
									startValue: scrollPositionCurrent,
									currentValue: scrollPositionCurrent,
									endValue: scrollPositionEnd,
									unitType: "",
									easing: opts.easing,
									scrollData: {
										container: opts.container,
										direction: scrollDirection,
										alternateValue: scrollPositionCurrentAlternate
									}
								},
								element: element
							};
	
							if (Velocity.debug) {
								console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
							}
	
							/******************************************
							 Tween Data Construction (for Reverse)
							 ******************************************/
	
							/* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
							 that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
							 the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
							/* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
							/* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
							 there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
							 as reverting to the element's values as they were prior to the previous *Velocity* call. */
						} else if (action === "reverse") {
							data = Data(element);
	
							/* Abort if there is no prior animation data to reverse to. */
							if (!data) {
								return;
							}
	
							if (!data.tweensContainer) {
								/* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
								$.dequeue(element, opts.queue);
	
								return;
							} else {
								/*********************
								 Options Parsing
								 *********************/
	
								/* If the element was hidden via the display option in the previous call,
								 revert display to "auto" prior to reversal so that the element is visible again. */
								if (data.opts.display === "none") {
									data.opts.display = "auto";
								}
	
								if (data.opts.visibility === "hidden") {
									data.opts.visibility = "visible";
								}
	
								/* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
								 Further, remove the previous call's callback options; typically, users do not want these to be refired. */
								data.opts.loop = false;
								data.opts.begin = null;
								data.opts.complete = null;
	
								/* Since we're extending an opts object that has already been extended with the defaults options object,
								 we remove non-explicitly-defined properties that are auto-assigned values. */
								if (!options.easing) {
									delete opts.easing;
								}
	
								if (!options.duration) {
									delete opts.duration;
								}
	
								/* The opts object used for reversal is an extension of the options object optionally passed into this
								 reverse call plus the options used in the previous Velocity call. */
								opts = $.extend({}, data.opts, opts);
	
								/*************************************
								 Tweens Container Reconstruction
								 *************************************/
	
								/* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
								lastTweensContainer = $.extend(true, {}, data ? data.tweensContainer : null);
	
								/* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
								for (var lastTween in lastTweensContainer) {
									/* In addition to tween data, tweensContainers contain an element property that we ignore here. */
									if (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== "element") {
										var lastStartValue = lastTweensContainer[lastTween].startValue;
	
										lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
										lastTweensContainer[lastTween].endValue = lastStartValue;
	
										/* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
										 Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
										 The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
										if (!Type.isEmptyObject(options)) {
											lastTweensContainer[lastTween].easing = opts.easing;
										}
	
										if (Velocity.debug) {
											console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
										}
									}
								}
	
								tweensContainer = lastTweensContainer;
							}
	
							/*****************************************
							 Tween Data Construction (for Start)
							 *****************************************/
	
						} else if (action === "start") {
	
							/*************************
							 Value Transferring
							 *************************/
	
							/* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
							 while the element was in the process of being animated by Velocity, then this current call is safe to use
							 the end values from the prior call as its start values. Velocity attempts to perform this value transfer
							 process whenever possible in order to avoid requerying the DOM. */
							/* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
							 then the DOM is queried for the element's current values as a last resort. */
							/* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */
	
							data = Data(element);
	
							/* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
							 to transfer over end values to use as start values. If it's set to true and there is a previous
							 Velocity call to pull values from, do so. */
							if (data && data.tweensContainer && data.isAnimating === true) {
								lastTweensContainer = data.tweensContainer;
							}
	
							/***************************
							 Tween Data Calculation
							 ***************************/
	
							/* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
							/* Property map values can either take the form of 1) a single value representing the end value,
							 or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
							 The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
							 the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
							var parsePropertyValue = function(valueData, skipResolvingEasing) {
								var endValue, easing, startValue;
	
								/* Handle the array format, which can be structured as one of three potential overloads:
								 A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
								if (Type.isArray(valueData)) {
									/* endValue is always the first item in the array. Don't bother validating endValue's value now
									 since the ensuing property cycling logic does that. */
									endValue = valueData[0];
	
									/* Two-item array format: If the second item is a number, function, or hex string, treat it as a
									 start value since easings can only be non-hex strings or arrays. */
									if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
										startValue = valueData[1];
										/* Two or three-item array: If the second item is a non-hex string or an array, treat it as an easing. */
									} else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1])) || Type.isArray(valueData[1])) {
										easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);
	
										/* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
										if (valueData[2] !== undefined) {
											startValue = valueData[2];
										}
									}
									/* Handle the single-value format. */
								} else {
									endValue = valueData;
								}
	
								/* Default to the call's easing if a per-property easing type was not defined. */
								if (!skipResolvingEasing) {
									easing = easing || opts.easing;
								}
	
								/* If functions were passed in as values, pass the function the current element as its context,
								 plus the element's index and the element set's size as arguments. Then, assign the returned value. */
								if (Type.isFunction(endValue)) {
									endValue = endValue.call(element, elementArrayIndex, elementsLength);
								}
	
								if (Type.isFunction(startValue)) {
									startValue = startValue.call(element, elementArrayIndex, elementsLength);
								}
	
								/* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
								return [endValue || 0, easing, startValue];
							};
	
							/* Cycle through each property in the map, looking for shorthand color properties (e.g. "color" as opposed to "colorRed"). Inject the corresponding
							 colorRed, colorGreen, and colorBlue RGB component tweens into the propertiesMap (which Velocity understands) and remove the shorthand property. */
							$.each(propertiesMap, function(property, value) {
								/* Find shorthand color properties that have been passed a hex string. */
								if (RegExp("^" + CSS.Lists.colors.join("$|^") + "$").test(CSS.Names.camelCase(property))) {
									/* Parse the value data for each shorthand. */
									var valueData = parsePropertyValue(value, true),
											endValue = valueData[0],
											easing = valueData[1],
											startValue = valueData[2];
	
									if (CSS.RegEx.isHex.test(endValue)) {
										/* Convert the hex strings into their RGB component arrays. */
										var colorComponents = ["Red", "Green", "Blue"],
												endValueRGB = CSS.Values.hexToRgb(endValue),
												startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;
	
										/* Inject the RGB component tweens into propertiesMap. */
										for (var i = 0; i < colorComponents.length; i++) {
											var dataArray = [endValueRGB[i]];
	
											if (easing) {
												dataArray.push(easing);
											}
	
											if (startValueRGB !== undefined) {
												dataArray.push(startValueRGB[i]);
											}
	
											propertiesMap[CSS.Names.camelCase(property) + colorComponents[i]] = dataArray;
										}
	
										/* Remove the intermediary shorthand property entry now that we've processed it. */
										delete propertiesMap[property];
									}
								}
							});
	
							/* Create a tween out of each property, and append its associated data to tweensContainer. */
							for (var property in propertiesMap) {
	
								if (!propertiesMap.hasOwnProperty(property)) {
									continue;
								}
								/**************************
								 Start Value Sourcing
								 **************************/
	
								/* Parse out endValue, easing, and startValue from the property's data. */
								var valueData = parsePropertyValue(propertiesMap[property]),
										endValue = valueData[0],
										easing = valueData[1],
										startValue = valueData[2];
	
								/* Now that the original property name's format has been used for the parsePropertyValue() lookup above,
								 we force the property to its camelCase styling to normalize it for manipulation. */
								property = CSS.Names.camelCase(property);
	
								/* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
								var rootProperty = CSS.Hooks.getRoot(property),
										rootPropertyValue = false;
	
								/* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
								 inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
								 Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
								/* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
								 there is no way to check for their explicit browser support, and so we skip skip this check for them. */
								if ((!data || !data.isSVG) && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
									if (Velocity.debug) {
										console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
									}
									continue;
								}
	
								/* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
								 animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
								 a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
								if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
									startValue = 0;
								}
	
								/* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
								 for all of the current call's properties that were *also* animated in the previous call. */
								/* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
								if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
									if (startValue === undefined) {
										startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
									}
	
									/* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
									 instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
									 attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
									rootPropertyValue = data.rootPropertyValueCache[rootProperty];
									/* If values were not transferred from a previous Velocity call, query the DOM as needed. */
								} else {
									/* Handle hooked properties. */
									if (CSS.Hooks.registered[property]) {
										if (startValue === undefined) {
											rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */
											/* Note: The following getPropertyValue() call does not actually trigger a DOM query;
											 getPropertyValue() will extract the hook from rootPropertyValue. */
											startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
											/* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
											 just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
											 root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
											 to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
										} else {
											/* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
											rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
										}
										/* Handle non-hooked properties that haven't already been defined via forcefeeding. */
									} else if (startValue === undefined) {
										startValue = CSS.getPropertyValue(element, property); /* GET */
									}
								}
	
								/**************************
								 Value Data Extraction
								 **************************/
	
								var separatedValue,
										endValueUnitType,
										startValueUnitType,
										operator = false;
	
								/* Separates a property value into its numeric value and its unit type. */
								var separateValue = function(property, value) {
									var unitType,
											numericValue;
	
									numericValue = (value || "0")
											.toString()
											.toLowerCase()
											/* Match the unit type at the end of the value. */
											.replace(/[%A-z]+$/, function(match) {
												/* Grab the unit type. */
												unitType = match;
	
												/* Strip the unit type off of value. */
												return "";
											});
	
									/* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
									if (!unitType) {
										unitType = CSS.Values.getUnitType(property);
									}
	
									return [numericValue, unitType];
								};
	
								/* Separate startValue. */
								separatedValue = separateValue(property, startValue);
								startValue = separatedValue[0];
								startValueUnitType = separatedValue[1];
	
								/* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
								separatedValue = separateValue(property, endValue);
								endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
									operator = subMatch;
	
									/* Strip the operator off of the value. */
									return "";
								});
								endValueUnitType = separatedValue[1];
	
								/* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
								startValue = parseFloat(startValue) || 0;
								endValue = parseFloat(endValue) || 0;
	
								/***************************************
								 Property-Specific Value Conversion
								 ***************************************/
	
								/* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
								if (endValueUnitType === "%") {
									/* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
									 which is identical to the em unit's behavior, so we piggyback off of that. */
									if (/^(fontSize|lineHeight)$/.test(property)) {
										/* Convert % into an em decimal value. */
										endValue = endValue / 100;
										endValueUnitType = "em";
										/* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
									} else if (/^scale/.test(property)) {
										endValue = endValue / 100;
										endValueUnitType = "";
										/* For RGB components, take the defined percentage of 255 and strip off the unit type. */
									} else if (/(Red|Green|Blue)$/i.test(property)) {
										endValue = (endValue / 100) * 255;
										endValueUnitType = "";
									}
								}
	
								/***************************
								 Unit Ratio Calculation
								 ***************************/
	
								/* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
								 %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
								 for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
								 from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
								 1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
								 2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
								/* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
								 setting values with the target unit type then comparing the returned pixel value. */
								/* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
								 of batching the SETs and GETs together upfront outweights the potential overhead
								 of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
								/* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
								var calculateUnitRatios = function() {
	
									/************************
									 Same Ratio Checks
									 ************************/
	
									/* The properties below are used to determine whether the element differs sufficiently from this call's
									 previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
									 of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
									 this is done to minimize DOM querying. */
									var sameRatioIndicators = {
										myParent: element.parentNode || document.body, /* GET */
										position: CSS.getPropertyValue(element, "position"), /* GET */
										fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */
									},
									/* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
									samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
											/* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
											sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);
	
									/* Store these ratio indicators call-wide for the next element to compare against. */
									callUnitConversionData.lastParent = sameRatioIndicators.myParent;
									callUnitConversionData.lastPosition = sameRatioIndicators.position;
									callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;
	
									/***************************
									 Element-Specific Units
									 ***************************/
	
									/* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
									 of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
									var measurement = 100,
											unitRatios = {};
	
									if (!sameEmRatio || !samePercentRatio) {
										var dummy = data && data.isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");
	
										Velocity.init(dummy);
										sameRatioIndicators.myParent.appendChild(dummy);
	
										/* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
										 Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
										/* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
										$.each(["overflow", "overflowX", "overflowY"], function(i, property) {
											Velocity.CSS.setPropertyValue(dummy, property, "hidden");
										});
										Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
										Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
										Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");
	
										/* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
										$.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(i, property) {
											Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
										});
										/* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
										Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");
	
										/* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
										unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
										unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
										unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */
	
										sameRatioIndicators.myParent.removeChild(dummy);
									} else {
										unitRatios.emToPx = callUnitConversionData.lastEmToPx;
										unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
										unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
									}
	
									/***************************
									 Element-Agnostic Units
									 ***************************/
	
									/* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
									 once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
									 that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
									 so we calculate it now. */
									if (callUnitConversionData.remToPx === null) {
										/* Default to browsers' default fontSize of 16px in the case of 0. */
										callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
									}
	
									/* Similarly, viewport units are %-relative to the window's inner dimensions. */
									if (callUnitConversionData.vwToPx === null) {
										callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */
										callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */
									}
	
									unitRatios.remToPx = callUnitConversionData.remToPx;
									unitRatios.vwToPx = callUnitConversionData.vwToPx;
									unitRatios.vhToPx = callUnitConversionData.vhToPx;
	
									if (Velocity.debug >= 1) {
										console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
									}
									return unitRatios;
								};
	
								/********************
								 Unit Conversion
								 ********************/
	
								/* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
								if (/[\/*]/.test(operator)) {
									endValueUnitType = startValueUnitType;
									/* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
									 is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
									 on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
									 would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
									/* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
								} else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
									/* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
									/* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
									 match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
									 which remains past the point of the animation's completion. */
									if (endValue === 0) {
										endValueUnitType = startValueUnitType;
									} else {
										/* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
										 If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
										elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();
	
										/* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
										/* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
										var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";
	
										/* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
										 1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
										switch (startValueUnitType) {
											case "%":
												/* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
												 Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
												 to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
												startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
												break;
	
											case "px":
												/* px acts as our midpoint in the unit conversion process; do nothing. */
												break;
	
											default:
												startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
										}
	
										/* Invert the px ratios to convert into to the target unit. */
										switch (endValueUnitType) {
											case "%":
												startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
												break;
	
											case "px":
												/* startValue is already in px, do nothing; we're done. */
												break;
	
											default:
												startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
										}
									}
								}
	
								/*********************
								 Relative Values
								 *********************/
	
								/* Operator logic must be performed last since it requires unit-normalized start and end values. */
								/* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
								 to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
								 50 points is added on top of the current % value. */
								switch (operator) {
									case "+":
										endValue = startValue + endValue;
										break;
	
									case "-":
										endValue = startValue - endValue;
										break;
	
									case "*":
										endValue = startValue * endValue;
										break;
	
									case "/":
										endValue = startValue / endValue;
										break;
								}
	
								/**************************
								 tweensContainer Push
								 **************************/
	
								/* Construct the per-property tween object, and push it to the element's tweensContainer. */
								tweensContainer[property] = {
									rootPropertyValue: rootPropertyValue,
									startValue: startValue,
									currentValue: startValue,
									endValue: endValue,
									unitType: endValueUnitType,
									easing: easing
								};
	
								if (Velocity.debug) {
									console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
								}
							}
	
							/* Along with its property data, store a reference to the element itself onto tweensContainer. */
							tweensContainer.element = element;
						}
	
						/*****************
						 Call Push
						 *****************/
	
						/* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
						 being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
						if (tweensContainer.element) {
							/* Apply the "velocity-animating" indicator class. */
							CSS.Values.addClass(element, "velocity-animating");
	
							/* The call array houses the tweensContainers for each element being animated in the current call. */
							call.push(tweensContainer);
	
							data = Data(element);
	
							if (data) {
								/* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
								if (opts.queue === "") {
	
									data.tweensContainer = tweensContainer;
									data.opts = opts;
								}
	
								/* Switch on the element's animating flag. */
								data.isAnimating = true;
							}
	
							/* Once the final element in this call's element set has been processed, push the call array onto
							 Velocity.State.calls for the animation tick to immediately begin processing. */
							if (elementsIndex === elementsLength - 1) {
								/* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
								 Anything on this call container is subjected to tick() processing. */
								Velocity.State.calls.push([call, elements, opts, null, promiseData.resolver]);
	
								/* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
								if (Velocity.State.isTicking === false) {
									Velocity.State.isTicking = true;
	
									/* Start the tick loop. */
									tick();
								}
							} else {
								elementsIndex++;
							}
						}
					}
	
					/* When the queue option is set to false, the call skips the element's queue and fires immediately. */
					if (opts.queue === false) {
						/* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
						 we manually inject the delay property here with an explicit setTimeout. */
						if (opts.delay) {
							setTimeout(buildQueue, opts.delay);
						} else {
							buildQueue();
						}
						/* Otherwise, the call undergoes element queueing as normal. */
						/* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */
					} else {
						$.queue(element, opts.queue, function(next, clearQueue) {
							/* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
							 so it's fine if this is repeatedly triggered for each element in the associated call.) */
							if (clearQueue === true) {
								if (promiseData.promise) {
									promiseData.resolver(elements);
								}
	
								/* Do not continue with animation queueing. */
								return true;
							}
	
							/* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
							 See completeCall() for further details. */
							Velocity.velocityQueueEntryFlag = true;
	
							buildQueue(next);
						});
					}
	
					/*********************
					 Auto-Dequeuing
					 *********************/
	
					/* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
					 must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
					 for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
					 queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
					 first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
					/* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
					 each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
					/* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
					 Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
					if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
						$.dequeue(element);
					}
				}
	
				/**************************
				 Element Set Iteration
				 **************************/
	
				/* If the "nodeType" property exists on the elements variable, we're animating a single element.
				 Place it in an array so that $.each() can iterate over it. */
				$.each(elements, function(i, element) {
					/* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
					if (Type.isNode(element)) {
						processElement(element, i);
					}
				});
	
				/******************
				 Option: Loop
				 ******************/
	
				/* The loop option accepts an integer indicating how many times the element should loop between the values in the
				 current call's properties map and the element's property values prior to this call. */
				/* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
				 to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
				 which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
				opts = $.extend({}, Velocity.defaults, options);
				opts.loop = parseInt(opts.loop, 10);
				var reverseCallsCount = (opts.loop * 2) - 1;
	
				if (opts.loop) {
					/* Double the loop count to convert it into its appropriate number of "reverse" calls.
					 Subtract 1 from the resulting value since the current call is included in the total alternation count. */
					for (var x = 0; x < reverseCallsCount; x++) {
						/* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
						 isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
						 call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
						var reverseOptions = {
							delay: opts.delay,
							progress: opts.progress
						};
	
						/* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
						 so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
						if (x === reverseCallsCount - 1) {
							reverseOptions.display = opts.display;
							reverseOptions.visibility = opts.visibility;
							reverseOptions.complete = opts.complete;
						}
	
						animate(elements, "reverse", reverseOptions);
					}
				}
	
				/***************
				 Chaining
				 ***************/
	
				/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
				return getChain();
			};
	
			/* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
			Velocity = $.extend(animate, Velocity);
			/* For legacy support, also expose the literal animate method. */
			Velocity.animate = animate;
	
			/**************
			 Timing
			 **************/
	
			/* Ticker function. */
			var ticker = window.requestAnimationFrame || rAFShim;
	
			/* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
			 To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
			 devices to avoid wasting battery power on inactive tabs. */
			/* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
			if (!Velocity.State.isMobile && document.hidden !== undefined) {
				document.addEventListener("visibilitychange", function() {
					/* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
					if (document.hidden) {
						ticker = function(callback) {
							/* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
							return setTimeout(function() {
								callback(true);
							}, 16);
						};
	
						/* The rAF loop has been paused by the browser, so we manually restart the tick. */
						tick();
					} else {
						ticker = window.requestAnimationFrame || rAFShim;
					}
				});
			}
	
			/************
			 Tick
			 ************/
	
			/* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
			function tick(timestamp) {
				/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
				 We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
				 the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
				 calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
				 the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
				 by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
				if (timestamp) {
					/* We ignore RAF's high resolution timestamp since it can be significantly offset when the browser is
					 under high stress; we opt for choppiness over allowing the browser to drop huge chunks of frames. */
					var timeCurrent = (new Date()).getTime();
	
					/********************
					 Call Iteration
					 ********************/
	
					var callsLength = Velocity.State.calls.length;
	
					/* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
					 when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
					 has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
					if (callsLength > 10000) {
						Velocity.State.calls = compactSparseArray(Velocity.State.calls);
						callsLength = Velocity.State.calls.length;
					}
	
					/* Iterate through each active call. */
					for (var i = 0; i < callsLength; i++) {
						/* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
						if (!Velocity.State.calls[i]) {
							continue;
						}
	
						/************************
						 Call-Wide Variables
						 ************************/
	
						var callContainer = Velocity.State.calls[i],
								call = callContainer[0],
								opts = callContainer[2],
								timeStart = callContainer[3],
								firstTick = !!timeStart,
								tweenDummyValue = null;
	
						/* If timeStart is undefined, then this is the first time that this call has been processed by tick().
						 We assign timeStart now so that its value is as close to the real animation start time as possible.
						 (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
						 between that time and now would cause the first few frames of the tween to be skipped since
						 percentComplete is calculated relative to timeStart.) */
						/* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
						 first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
						 same style value as the element's current value. */
						if (!timeStart) {
							timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
						}
	
						/* The tween's completion percentage is relative to the tween's start time, not the tween's start value
						 (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
						 Accordingly, we ensure that percentComplete does not exceed 1. */
						var percentComplete = Math.min((timeCurrent - timeStart) / opts.duration, 1);
	
						/**********************
						 Element Iteration
						 **********************/
	
						/* For every call, iterate through each of the elements in its set. */
						for (var j = 0, callLength = call.length; j < callLength; j++) {
							var tweensContainer = call[j],
									element = tweensContainer.element;
	
							/* Check to see if this element has been deleted midway through the animation by checking for the
							 continued existence of its data cache. If it's gone, skip animating this element. */
							if (!Data(element)) {
								continue;
							}
	
							var transformPropertyExists = false;
	
							/**********************************
							 Display & Visibility Toggling
							 **********************************/
	
							/* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
							 (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
							if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
								if (opts.display === "flex") {
									var flexValues = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
	
									$.each(flexValues, function(i, flexValue) {
										CSS.setPropertyValue(element, "display", flexValue);
									});
								}
	
								CSS.setPropertyValue(element, "display", opts.display);
							}
	
							/* Same goes with the visibility option, but its "none" equivalent is "hidden". */
							if (opts.visibility !== undefined && opts.visibility !== "hidden") {
								CSS.setPropertyValue(element, "visibility", opts.visibility);
							}
	
							/************************
							 Property Iteration
							 ************************/
	
							/* For every element, iterate through each property. */
							for (var property in tweensContainer) {
								/* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
								if (tweensContainer.hasOwnProperty(property) && property !== "element") {
									var tween = tweensContainer[property],
											currentValue,
											/* Easing can either be a pre-genereated function or a string that references a pre-registered easing
											 on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
											easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;
	
									/******************************
									 Current Value Calculation
									 ******************************/
	
									/* If this is the last tick pass (if we've reached 100% completion for this tween),
									 ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
									if (percentComplete === 1) {
										currentValue = tween.endValue;
										/* Otherwise, calculate currentValue based on the current delta from startValue. */
									} else {
										var tweenDelta = tween.endValue - tween.startValue;
										currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
	
										/* If no value change is occurring, don't proceed with DOM updating. */
										if (!firstTick && (currentValue === tween.currentValue)) {
											continue;
										}
									}
	
									tween.currentValue = currentValue;
	
									/* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
									 it can be passed into the progress callback. */
									if (property === "tween") {
										tweenDummyValue = currentValue;
									} else {
										/******************
										 Hooks: Part I
										 ******************/
										var hookRoot;
	
										/* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
										 for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
										 rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
										 updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
										 subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
										if (CSS.Hooks.registered[property]) {
											hookRoot = CSS.Hooks.getRoot(property);
	
											var rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];
	
											if (rootPropertyValueCache) {
												tween.rootPropertyValue = rootPropertyValueCache;
											}
										}
	
										/*****************
										 DOM Update
										 *****************/
	
										/* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
										/* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
										var adjustedSetData = CSS.setPropertyValue(element, /* SET */
												property,
												tween.currentValue + (parseFloat(currentValue) === 0 ? "" : tween.unitType),
												tween.rootPropertyValue,
												tween.scrollData);
	
										/*******************
										 Hooks: Part II
										 *******************/
	
										/* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
										if (CSS.Hooks.registered[property]) {
											/* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
											if (CSS.Normalizations.registered[hookRoot]) {
												Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
											} else {
												Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
											}
										}
	
										/***************
										 Transforms
										 ***************/
	
										/* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
										if (adjustedSetData[0] === "transform") {
											transformPropertyExists = true;
										}
	
									}
								}
							}
	
							/****************
							 mobileHA
							 ****************/
	
							/* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
							 It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
							if (opts.mobileHA) {
								/* Don't set the null transform hack if we've already done so. */
								if (Data(element).transformCache.translate3d === undefined) {
									/* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
									Data(element).transformCache.translate3d = "(0px, 0px, 0px)";
	
									transformPropertyExists = true;
								}
							}
	
							if (transformPropertyExists) {
								CSS.flushTransformCache(element);
							}
						}
	
						/* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
						 Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
						if (opts.display !== undefined && opts.display !== "none") {
							Velocity.State.calls[i][2].display = false;
						}
						if (opts.visibility !== undefined && opts.visibility !== "hidden") {
							Velocity.State.calls[i][2].visibility = false;
						}
	
						/* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
						if (opts.progress) {
							opts.progress.call(callContainer[1],
									callContainer[1],
									percentComplete,
									Math.max(0, (timeStart + opts.duration) - timeCurrent),
									timeStart,
									tweenDummyValue);
						}
	
						/* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
						if (percentComplete === 1) {
							completeCall(i);
						}
					}
				}
	
				/* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
				if (Velocity.State.isTicking) {
					ticker(tick);
				}
			}
	
			/**********************
			 Call Completion
			 **********************/
	
			/* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
			function completeCall(callIndex, isStopped) {
				/* Ensure the call exists. */
				if (!Velocity.State.calls[callIndex]) {
					return false;
				}
	
				/* Pull the metadata from the call. */
				var call = Velocity.State.calls[callIndex][0],
						elements = Velocity.State.calls[callIndex][1],
						opts = Velocity.State.calls[callIndex][2],
						resolver = Velocity.State.calls[callIndex][4];
	
				var remainingCallsExist = false;
	
				/*************************
				 Element Finalization
				 *************************/
	
				for (var i = 0, callLength = call.length; i < callLength; i++) {
					var element = call[i].element;
	
					/* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
					/* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
					/* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
					if (!isStopped && !opts.loop) {
						if (opts.display === "none") {
							CSS.setPropertyValue(element, "display", opts.display);
						}
	
						if (opts.visibility === "hidden") {
							CSS.setPropertyValue(element, "visibility", opts.visibility);
						}
					}
	
					/* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
					 a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
					 an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
					 we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
					 is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
					var data = Data(element);
	
					if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
						/* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
						if (data) {
							data.isAnimating = false;
							/* Clear the element's rootPropertyValueCache, which will become stale. */
							data.rootPropertyValueCache = {};
	
							var transformHAPropertyExists = false;
							/* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
							$.each(CSS.Lists.transforms3D, function(i, transformName) {
								var defaultValue = /^scale/.test(transformName) ? 1 : 0,
										currentValue = data.transformCache[transformName];
	
								if (data.transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
									transformHAPropertyExists = true;
	
									delete data.transformCache[transformName];
								}
							});
	
							/* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
							if (opts.mobileHA) {
								transformHAPropertyExists = true;
								delete data.transformCache.translate3d;
							}
	
							/* Flush the subproperty removals to the DOM. */
							if (transformHAPropertyExists) {
								CSS.flushTransformCache(element);
							}
	
							/* Remove the "velocity-animating" indicator class. */
							CSS.Values.removeClass(element, "velocity-animating");
						}
					}
	
					/*********************
					 Option: Complete
					 *********************/
	
					/* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
					/* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
					if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
						/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
						try {
							opts.complete.call(elements, elements);
						} catch (error) {
							setTimeout(function() {
								throw error;
							}, 1);
						}
					}
	
					/**********************
					 Promise Resolving
					 **********************/
	
					/* Note: Infinite loops don't return promises. */
					if (resolver && opts.loop !== true) {
						resolver(elements);
					}
	
					/****************************
					 Option: Loop (Infinite)
					 ****************************/
	
					if (data && opts.loop === true && !isStopped) {
						/* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable
						 continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
						$.each(data.tweensContainer, function(propertyName, tweenContainer) {
							if (/^rotate/.test(propertyName) && ((parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0)) {
								var oldStartValue = tweenContainer.startValue;
	
								tweenContainer.startValue = tweenContainer.endValue;
								tweenContainer.endValue = oldStartValue;
							}
	
							if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
								tweenContainer.endValue = 0;
								tweenContainer.startValue = 100;
							}
						});
	
						Velocity(element, "reverse", {loop: true, delay: opts.delay});
					}
	
					/***************
					 Dequeueing
					 ***************/
	
					/* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
					 which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
					 $.dequeue() must still be called in order to completely clear jQuery's animation queue. */
					if (opts.queue !== false) {
						$.dequeue(element, opts.queue);
					}
				}
	
				/************************
				 Calls Array Cleanup
				 ************************/
	
				/* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
				 (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
				Velocity.State.calls[callIndex] = false;
	
				/* Iterate through the calls array to determine if this was the final in-progress animation.
				 If so, set a flag to end ticking and clear the calls array. */
				for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
					if (Velocity.State.calls[j] !== false) {
						remainingCallsExist = true;
	
						break;
					}
				}
	
				if (remainingCallsExist === false) {
					/* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
					Velocity.State.isTicking = false;
	
					/* Clear the calls array so that its length is reset. */
					delete Velocity.State.calls;
					Velocity.State.calls = [];
				}
			}
	
			/******************
			 Frameworks
			 ******************/
	
			/* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
			 If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
			 also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
			 accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
			 (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
			global.Velocity = Velocity;
	
			if (global !== window) {
				/* Assign the element function to Velocity's core animate() method. */
				global.fn.velocity = animate;
				/* Assign the object function's defaults to Velocity's global defaults object. */
				global.fn.velocity.defaults = Velocity.defaults;
			}
	
			/***********************
			 Packaged Redirects
			 ***********************/
	
			/* slideUp, slideDown */
			$.each(["Down", "Up"], function(i, direction) {
				Velocity.Redirects["slide" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
					var opts = $.extend({}, options),
							begin = opts.begin,
							complete = opts.complete,
							computedValues = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""},
					inlineValues = {};
	
					if (opts.display === undefined) {
						/* Show the element before slideDown begins and hide the element after slideUp completes. */
						/* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
						opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
					}
	
					opts.begin = function() {
						/* If the user passed in a begin callback, fire it now. */
						if (begin) {
							begin.call(elements, elements);
						}
	
						/* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
						for (var property in computedValues) {
							if (!computedValues.hasOwnProperty(property)) {
								continue;
							}
							inlineValues[property] = element.style[property];
	
							/* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
							 use forcefeeding to start from computed values and animate down to 0. */
							var propertyValue = Velocity.CSS.getPropertyValue(element, property);
							computedValues[property] = (direction === "Down") ? [propertyValue, 0] : [0, propertyValue];
						}
	
						/* Force vertical overflow content to clip so that sliding works as expected. */
						inlineValues.overflow = element.style.overflow;
						element.style.overflow = "hidden";
					};
	
					opts.complete = function() {
						/* Reset element to its pre-slide inline values once its slide animation is complete. */
						for (var property in inlineValues) {
							if (inlineValues.hasOwnProperty(property)) {
								element.style[property] = inlineValues[property];
							}
						}
	
						/* If the user passed in a complete callback, fire it now. */
						if (complete) {
							complete.call(elements, elements);
						}
						if (promiseData) {
							promiseData.resolver(elements);
						}
					};
	
					Velocity(element, computedValues, opts);
				};
			});
	
			/* fadeIn, fadeOut */
			$.each(["In", "Out"], function(i, direction) {
				Velocity.Redirects["fade" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
					var opts = $.extend({}, options),
							originalComplete = opts.complete,
							propertiesMap = {opacity: (direction === "In") ? 1 : 0};
	
					/* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
					 callbacks by firing them only when the final element has been reached. */
					if (elementsIndex !== elementsSize - 1) {
						opts.complete = opts.begin = null;
					} else {
						opts.complete = function() {
							if (originalComplete) {
								originalComplete.call(elements, elements);
							}
	
							if (promiseData) {
								promiseData.resolver(elements);
							}
						};
					}
	
					/* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
					/* Note: We allow users to pass in "null" to skip display setting altogether. */
					if (opts.display === undefined) {
						opts.display = (direction === "In" ? "auto" : "none");
					}
	
					Velocity(this, propertiesMap, opts);
				};
			});
	
			return Velocity;
		}((__webpack_provided_window_dot_jQuery || window.Zepto || window), window, document);
	}));
	
	/******************
	 Known Issues
	 ******************/
	
	/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
	 Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
	 will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38), __webpack_require__(38)))

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/**********************
	 Velocity UI Pack
	 **********************/
	
	/* VelocityJS.org UI Pack (5.1.1). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */
	
	(function(factory) {
		"use strict";
		/* CommonJS module. */
		if (true) {
			module.exports = factory();
			/* AMD module. */
		} else if (typeof define === "function" && define.amd) {
			define(["velocity"], factory);
			/* Browser globals. */
		} else {
			factory();
		}
	}(function() {
		"use strict";
		return function(global, window, document, undefined) {
	
			/*************
			 Checks
			 *************/
			var Velocity = global.Velocity;
	
			if (!Velocity || !Velocity.Utilities) {
				if (window.console) {
					console.log("Velocity UI Pack: Velocity must be loaded first. Aborting.");
				}
				return;
			}
			var $ = Velocity.Utilities;
	
			var velocityVersion = Velocity.version,
					requiredVersion = {major: 1, minor: 1, patch: 0};
	
			function greaterSemver(primary, secondary) {
				var versionInts = [];
	
				if (!primary || !secondary) {
					return false;
				}
	
				$.each([primary, secondary], function(i, versionObject) {
					var versionIntsComponents = [];
	
					$.each(versionObject, function(component, value) {
						while (value.toString().length < 5) {
							value = "0" + value;
						}
						versionIntsComponents.push(value);
					});
	
					versionInts.push(versionIntsComponents.join(""));
				});
	
				return (parseFloat(versionInts[0]) > parseFloat(versionInts[1]));
			}
	
			if (greaterSemver(requiredVersion, velocityVersion)) {
				var abortError = "Velocity UI Pack: You need to update Velocity (velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
				alert(abortError);
				throw new Error(abortError);
			}
	
			/************************
			 Effect Registration
			 ************************/
	
			/* Note: RegisterUI is a legacy name. */
			Velocity.RegisterEffect = Velocity.RegisterUI = function(effectName, properties) {
				/* Animate the expansion/contraction of the elements' parent's height for In/Out effects. */
				function animateParentHeight(elements, direction, totalDuration, stagger) {
					var totalHeightDelta = 0,
							parentNode;
	
					/* Sum the total height (including padding and margin) of all targeted elements. */
					$.each(elements.nodeType ? [elements] : elements, function(i, element) {
						if (stagger) {
							/* Increase the totalDuration by the successive delay amounts produced by the stagger option. */
							totalDuration += i * stagger;
						}
	
						parentNode = element.parentNode;
	
						propertiesToSum = ["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"];
	
						/* If box-sizing is border-box, the height already includes padding and margin */
						if (Velocity.CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box") {
							propertiesToSum = ["height"];
						}
	
						$.each(propertiesToSum, function(i, property) {
							totalHeightDelta += parseFloat(Velocity.CSS.getPropertyValue(element, property));
						});
					});
	
					/* Animate the parent element's height adjustment (with a varying duration multiplier for aesthetic benefits). */
					Velocity.animate(
							parentNode,
							{height: (direction === "In" ? "+" : "-") + "=" + totalHeightDelta},
							{queue: false, easing: "ease-in-out", duration: totalDuration * (direction === "In" ? 0.6 : 1)}
					);
				}
	
				/* Register a custom redirect for each effect. */
				Velocity.Redirects[effectName] = function(element, redirectOptions, elementsIndex, elementsSize, elements, promiseData) {
					var finalElement = (elementsIndex === elementsSize - 1);
	
					if (typeof properties.defaultDuration === "function") {
						properties.defaultDuration = properties.defaultDuration.call(elements, elements);
					} else {
						properties.defaultDuration = parseFloat(properties.defaultDuration);
					}
	
					/* Iterate through each effect's call array. */
					for (var callIndex = 0; callIndex < properties.calls.length; callIndex++) {
						var call = properties.calls[callIndex],
								propertyMap = call[0],
								redirectDuration = 1000,
								durationPercentage = call[1],
								callOptions = call[2] || {},
								opts = {};
	
						if (redirectOptions.duration !== undefined) {
							redirectDuration = redirectOptions.duration;
						} else if (properties.defaultDuration !== undefined) {
							redirectDuration = properties.defaultDuration;
						}
	
						/* Assign the whitelisted per-call options. */
						opts.duration = redirectDuration * (durationPercentage || 1);
						opts.queue = redirectOptions.queue || "";
						opts.easing = callOptions.easing || "ease";
						opts.delay = parseFloat(callOptions.delay) || 0;
						opts._cacheValues = callOptions._cacheValues || true;
	
						/* Special processing for the first effect call. */
						if (callIndex === 0) {
							/* If a delay was passed into the redirect, combine it with the first call's delay. */
							opts.delay += (parseFloat(redirectOptions.delay) || 0);
	
							if (elementsIndex === 0) {
								opts.begin = function() {
									/* Only trigger a begin callback on the first effect call with the first element in the set. */
									if (redirectOptions.begin) {
										redirectOptions.begin.call(elements, elements);
									}
	
									var direction = effectName.match(/(In|Out)$/);
	
									/* Make "in" transitioning elements invisible immediately so that there's no FOUC between now
									 and the first RAF tick. */
									if ((direction && direction[0] === "In") && propertyMap.opacity !== undefined) {
										$.each(elements.nodeType ? [elements] : elements, function(i, element) {
											Velocity.CSS.setPropertyValue(element, "opacity", 0);
										});
									}
	
									/* Only trigger animateParentHeight() if we're using an In/Out transition. */
									if (redirectOptions.animateParentHeight && direction) {
										animateParentHeight(elements, direction[0], redirectDuration + opts.delay, redirectOptions.stagger);
									}
								};
							}
	
							/* If the user isn't overriding the display option, default to "auto" for "In"-suffixed transitions. */
							if (redirectOptions.display !== null) {
								if (redirectOptions.display !== undefined && redirectOptions.display !== "none") {
									opts.display = redirectOptions.display;
								} else if (/In$/.test(effectName)) {
									/* Inline elements cannot be subjected to transforms, so we switch them to inline-block. */
									var defaultDisplay = Velocity.CSS.Values.getDisplayType(element);
									opts.display = (defaultDisplay === "inline") ? "inline-block" : defaultDisplay;
								}
							}
	
							if (redirectOptions.visibility && redirectOptions.visibility !== "hidden") {
								opts.visibility = redirectOptions.visibility;
							}
						}
	
						/* Special processing for the last effect call. */
						if (callIndex === properties.calls.length - 1) {
							/* Append promise resolving onto the user's redirect callback. */
							var injectFinalCallbacks = function() {
								if ((redirectOptions.display === undefined || redirectOptions.display === "none") && /Out$/.test(effectName)) {
									$.each(elements.nodeType ? [elements] : elements, function(i, element) {
										Velocity.CSS.setPropertyValue(element, "display", "none");
									});
								}
								if (redirectOptions.complete) {
									redirectOptions.complete.call(elements, elements);
								}
								if (promiseData) {
									promiseData.resolver(elements || element);
								}
							};
	
							opts.complete = function() {
								if (properties.reset) {
									for (var resetProperty in properties.reset) {
										if (!properties.reset.hasOwnProperty(resetProperty)) {
											continue;
										}
										var resetValue = properties.reset[resetProperty];
	
										/* Format each non-array value in the reset property map to [ value, value ] so that changes apply
										 immediately and DOM querying is avoided (via forcefeeding). */
										/* Note: Don't forcefeed hooks, otherwise their hook roots will be defaulted to their null values. */
										if (Velocity.CSS.Hooks.registered[resetProperty] === undefined && (typeof resetValue === "string" || typeof resetValue === "number")) {
											properties.reset[resetProperty] = [properties.reset[resetProperty], properties.reset[resetProperty]];
										}
									}
	
									/* So that the reset values are applied instantly upon the next rAF tick, use a zero duration and parallel queueing. */
									var resetOptions = {duration: 0, queue: false};
	
									/* Since the reset option uses up the complete callback, we trigger the user's complete callback at the end of ours. */
									if (finalElement) {
										resetOptions.complete = injectFinalCallbacks;
									}
	
									Velocity.animate(element, properties.reset, resetOptions);
									/* Only trigger the user's complete callback on the last effect call with the last element in the set. */
								} else if (finalElement) {
									injectFinalCallbacks();
								}
							};
	
							if (redirectOptions.visibility === "hidden") {
								opts.visibility = redirectOptions.visibility;
							}
						}
	
						Velocity.animate(element, propertyMap, opts);
					}
				};
	
				/* Return the Velocity object so that RegisterUI calls can be chained. */
				return Velocity;
			};
	
			/*********************
			 Packaged Effects
			 *********************/
	
			/* Externalize the packagedEffects data so that they can optionally be modified and re-registered. */
			/* Support: <=IE8: Callouts will have no effect, and transitions will simply fade in/out. IE9/Android 2.3: Most effects are fully supported, the rest fade in/out. All other browsers: full support. */
			Velocity.RegisterEffect.packagedEffects =
					{
						/* Animate.css */
						"callout.bounce": {
							defaultDuration: 550,
							calls: [
								[{translateY: -30}, 0.25],
								[{translateY: 0}, 0.125],
								[{translateY: -15}, 0.125],
								[{translateY: 0}, 0.25]
							]
						},
						/* Animate.css */
						"callout.shake": {
							defaultDuration: 800,
							calls: [
								[{translateX: -11}, 0.125],
								[{translateX: 11}, 0.125],
								[{translateX: -11}, 0.125],
								[{translateX: 11}, 0.125],
								[{translateX: -11}, 0.125],
								[{translateX: 11}, 0.125],
								[{translateX: -11}, 0.125],
								[{translateX: 0}, 0.125]
							]
						},
						/* Animate.css */
						"callout.flash": {
							defaultDuration: 1100,
							calls: [
								[{opacity: [0, "easeInOutQuad", 1]}, 0.25],
								[{opacity: [1, "easeInOutQuad"]}, 0.25],
								[{opacity: [0, "easeInOutQuad"]}, 0.25],
								[{opacity: [1, "easeInOutQuad"]}, 0.25]
							]
						},
						/* Animate.css */
						"callout.pulse": {
							defaultDuration: 825,
							calls: [
								[{scaleX: 1.1, scaleY: 1.1}, 0.50, {easing: "easeInExpo"}],
								[{scaleX: 1, scaleY: 1}, 0.50]
							]
						},
						/* Animate.css */
						"callout.swing": {
							defaultDuration: 950,
							calls: [
								[{rotateZ: 15}, 0.20],
								[{rotateZ: -10}, 0.20],
								[{rotateZ: 5}, 0.20],
								[{rotateZ: -5}, 0.20],
								[{rotateZ: 0}, 0.20]
							]
						},
						/* Animate.css */
						"callout.tada": {
							defaultDuration: 1000,
							calls: [
								[{scaleX: 0.9, scaleY: 0.9, rotateZ: -3}, 0.10],
								[{scaleX: 1.1, scaleY: 1.1, rotateZ: 3}, 0.10],
								[{scaleX: 1.1, scaleY: 1.1, rotateZ: -3}, 0.10],
								["reverse", 0.125],
								["reverse", 0.125],
								["reverse", 0.125],
								["reverse", 0.125],
								["reverse", 0.125],
								[{scaleX: 1, scaleY: 1, rotateZ: 0}, 0.20]
							]
						},
						"transition.fadeIn": {
							defaultDuration: 500,
							calls: [
								[{opacity: [1, 0]}]
							]
						},
						"transition.fadeOut": {
							defaultDuration: 500,
							calls: [
								[{opacity: [0, 1]}]
							]
						},
						/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
						"transition.flipXIn": {
							defaultDuration: 700,
							calls: [
								[{opacity: [1, 0], transformPerspective: [800, 800], rotateY: [0, -55]}]
							],
							reset: {transformPerspective: 0}
						},
						/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
						"transition.flipXOut": {
							defaultDuration: 700,
							calls: [
								[{opacity: [0, 1], transformPerspective: [800, 800], rotateY: 55}]
							],
							reset: {transformPerspective: 0, rotateY: 0}
						},
						/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
						"transition.flipYIn": {
							defaultDuration: 800,
							calls: [
								[{opacity: [1, 0], transformPerspective: [800, 800], rotateX: [0, -45]}]
							],
							reset: {transformPerspective: 0}
						},
						/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
						"transition.flipYOut": {
							defaultDuration: 800,
							calls: [
								[{opacity: [0, 1], transformPerspective: [800, 800], rotateX: 25}]
							],
							reset: {transformPerspective: 0, rotateX: 0}
						},
						/* Animate.css */
						/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
						"transition.flipBounceXIn": {
							defaultDuration: 900,
							calls: [
								[{opacity: [0.725, 0], transformPerspective: [400, 400], rotateY: [-10, 90]}, 0.50],
								[{opacity: 0.80, rotateY: 10}, 0.25],
								[{opacity: 1, rotateY: 0}, 0.25]
							],
							reset: {transformPerspective: 0}
						},
						/* Animate.css */
						/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
						"transition.flipBounceXOut": {
							defaultDuration: 800,
							calls: [
								[{opacity: [0.9, 1], transformPerspective: [400, 400], rotateY: -10}, 0.50],
								[{opacity: 0, rotateY: 90}, 0.50]
							],
							reset: {transformPerspective: 0, rotateY: 0}
						},
						/* Animate.css */
						/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
						"transition.flipBounceYIn": {
							defaultDuration: 850,
							calls: [
								[{opacity: [0.725, 0], transformPerspective: [400, 400], rotateX: [-10, 90]}, 0.50],
								[{opacity: 0.80, rotateX: 10}, 0.25],
								[{opacity: 1, rotateX: 0}, 0.25]
							],
							reset: {transformPerspective: 0}
						},
						/* Animate.css */
						/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
						"transition.flipBounceYOut": {
							defaultDuration: 800,
							calls: [
								[{opacity: [0.9, 1], transformPerspective: [400, 400], rotateX: -15}, 0.50],
								[{opacity: 0, rotateX: 90}, 0.50]
							],
							reset: {transformPerspective: 0, rotateX: 0}
						},
						/* Magic.css */
						"transition.swoopIn": {
							defaultDuration: 850,
							calls: [
								[{opacity: [1, 0], transformOriginX: ["100%", "50%"], transformOriginY: ["100%", "100%"], scaleX: [1, 0], scaleY: [1, 0], translateX: [0, -700], translateZ: 0}]
							],
							reset: {transformOriginX: "50%", transformOriginY: "50%"}
						},
						/* Magic.css */
						"transition.swoopOut": {
							defaultDuration: 850,
							calls: [
								[{opacity: [0, 1], transformOriginX: ["50%", "100%"], transformOriginY: ["100%", "100%"], scaleX: 0, scaleY: 0, translateX: -700, translateZ: 0}]
							],
							reset: {transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateX: 0}
						},
						/* Magic.css */
						/* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
						"transition.whirlIn": {
							defaultDuration: 850,
							calls: [
								[{opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 0], scaleY: [1, 0], rotateY: [0, 160]}, 1, {easing: "easeInOutSine"}]
							]
						},
						/* Magic.css */
						/* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
						"transition.whirlOut": {
							defaultDuration: 750,
							calls: [
								[{opacity: [0, "easeInOutQuint", 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 0, scaleY: 0, rotateY: 160}, 1, {easing: "swing"}]
							],
							reset: {scaleX: 1, scaleY: 1, rotateY: 0}
						},
						"transition.shrinkIn": {
							defaultDuration: 750,
							calls: [
								[{opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 1.5], scaleY: [1, 1.5], translateZ: 0}]
							]
						},
						"transition.shrinkOut": {
							defaultDuration: 600,
							calls: [
								[{opacity: [0, 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 1.3, scaleY: 1.3, translateZ: 0}]
							],
							reset: {scaleX: 1, scaleY: 1}
						},
						"transition.expandIn": {
							defaultDuration: 700,
							calls: [
								[{opacity: [1, 0], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: [1, 0.625], scaleY: [1, 0.625], translateZ: 0}]
							]
						},
						"transition.expandOut": {
							defaultDuration: 700,
							calls: [
								[{opacity: [0, 1], transformOriginX: ["50%", "50%"], transformOriginY: ["50%", "50%"], scaleX: 0.5, scaleY: 0.5, translateZ: 0}]
							],
							reset: {scaleX: 1, scaleY: 1}
						},
						/* Animate.css */
						"transition.bounceIn": {
							defaultDuration: 800,
							calls: [
								[{opacity: [1, 0], scaleX: [1.05, 0.3], scaleY: [1.05, 0.3]}, 0.40],
								[{scaleX: 0.9, scaleY: 0.9, translateZ: 0}, 0.20],
								[{scaleX: 1, scaleY: 1}, 0.50]
							]
						},
						/* Animate.css */
						"transition.bounceOut": {
							defaultDuration: 800,
							calls: [
								[{scaleX: 0.95, scaleY: 0.95}, 0.35],
								[{scaleX: 1.1, scaleY: 1.1, translateZ: 0}, 0.35],
								[{opacity: [0, 1], scaleX: 0.3, scaleY: 0.3}, 0.30]
							],
							reset: {scaleX: 1, scaleY: 1}
						},
						/* Animate.css */
						"transition.bounceUpIn": {
							defaultDuration: 800,
							calls: [
								[{opacity: [1, 0], translateY: [-30, 1000]}, 0.60, {easing: "easeOutCirc"}],
								[{translateY: 10}, 0.20],
								[{translateY: 0}, 0.20]
							]
						},
						/* Animate.css */
						"transition.bounceUpOut": {
							defaultDuration: 1000,
							calls: [
								[{translateY: 20}, 0.20],
								[{opacity: [0, "easeInCirc", 1], translateY: -1000}, 0.80]
							],
							reset: {translateY: 0}
						},
						/* Animate.css */
						"transition.bounceDownIn": {
							defaultDuration: 800,
							calls: [
								[{opacity: [1, 0], translateY: [30, -1000]}, 0.60, {easing: "easeOutCirc"}],
								[{translateY: -10}, 0.20],
								[{translateY: 0}, 0.20]
							]
						},
						/* Animate.css */
						"transition.bounceDownOut": {
							defaultDuration: 1000,
							calls: [
								[{translateY: -20}, 0.20],
								[{opacity: [0, "easeInCirc", 1], translateY: 1000}, 0.80]
							],
							reset: {translateY: 0}
						},
						/* Animate.css */
						"transition.bounceLeftIn": {
							defaultDuration: 750,
							calls: [
								[{opacity: [1, 0], translateX: [30, -1250]}, 0.60, {easing: "easeOutCirc"}],
								[{translateX: -10}, 0.20],
								[{translateX: 0}, 0.20]
							]
						},
						/* Animate.css */
						"transition.bounceLeftOut": {
							defaultDuration: 750,
							calls: [
								[{translateX: 30}, 0.20],
								[{opacity: [0, "easeInCirc", 1], translateX: -1250}, 0.80]
							],
							reset: {translateX: 0}
						},
						/* Animate.css */
						"transition.bounceRightIn": {
							defaultDuration: 750,
							calls: [
								[{opacity: [1, 0], translateX: [-30, 1250]}, 0.60, {easing: "easeOutCirc"}],
								[{translateX: 10}, 0.20],
								[{translateX: 0}, 0.20]
							]
						},
						/* Animate.css */
						"transition.bounceRightOut": {
							defaultDuration: 750,
							calls: [
								[{translateX: -30}, 0.20],
								[{opacity: [0, "easeInCirc", 1], translateX: 1250}, 0.80]
							],
							reset: {translateX: 0}
						},
						"transition.slideUpIn": {
							defaultDuration: 900,
							calls: [
								[{opacity: [1, 0], translateY: [0, 20], translateZ: 0}]
							]
						},
						"transition.slideUpOut": {
							defaultDuration: 900,
							calls: [
								[{opacity: [0, 1], translateY: -20, translateZ: 0}]
							],
							reset: {translateY: 0}
						},
						"transition.slideDownIn": {
							defaultDuration: 900,
							calls: [
								[{opacity: [1, 0], translateY: [0, -20], translateZ: 0}]
							]
						},
						"transition.slideDownOut": {
							defaultDuration: 900,
							calls: [
								[{opacity: [0, 1], translateY: 20, translateZ: 0}]
							],
							reset: {translateY: 0}
						},
						"transition.slideLeftIn": {
							defaultDuration: 1000,
							calls: [
								[{opacity: [1, 0], translateX: [0, -20], translateZ: 0}]
							]
						},
						"transition.slideLeftOut": {
							defaultDuration: 1050,
							calls: [
								[{opacity: [0, 1], translateX: -20, translateZ: 0}]
							],
							reset: {translateX: 0}
						},
						"transition.slideRightIn": {
							defaultDuration: 1000,
							calls: [
								[{opacity: [1, 0], translateX: [0, 20], translateZ: 0}]
							]
						},
						"transition.slideRightOut": {
							defaultDuration: 1050,
							calls: [
								[{opacity: [0, 1], translateX: 20, translateZ: 0}]
							],
							reset: {translateX: 0}
						},
						"transition.slideUpBigIn": {
							defaultDuration: 850,
							calls: [
								[{opacity: [1, 0], translateY: [0, 75], translateZ: 0}]
							]
						},
						"transition.slideUpBigOut": {
							defaultDuration: 800,
							calls: [
								[{opacity: [0, 1], translateY: -75, translateZ: 0}]
							],
							reset: {translateY: 0}
						},
						"transition.slideDownBigIn": {
							defaultDuration: 850,
							calls: [
								[{opacity: [1, 0], translateY: [0, -75], translateZ: 0}]
							]
						},
						"transition.slideDownBigOut": {
							defaultDuration: 800,
							calls: [
								[{opacity: [0, 1], translateY: 75, translateZ: 0}]
							],
							reset: {translateY: 0}
						},
						"transition.slideLeftBigIn": {
							defaultDuration: 800,
							calls: [
								[{opacity: [1, 0], translateX: [0, -75], translateZ: 0}]
							]
						},
						"transition.slideLeftBigOut": {
							defaultDuration: 750,
							calls: [
								[{opacity: [0, 1], translateX: -75, translateZ: 0}]
							],
							reset: {translateX: 0}
						},
						"transition.slideRightBigIn": {
							defaultDuration: 800,
							calls: [
								[{opacity: [1, 0], translateX: [0, 75], translateZ: 0}]
							]
						},
						"transition.slideRightBigOut": {
							defaultDuration: 750,
							calls: [
								[{opacity: [0, 1], translateX: 75, translateZ: 0}]
							],
							reset: {translateX: 0}
						},
						/* Magic.css */
						"transition.perspectiveUpIn": {
							defaultDuration: 800,
							calls: [
								[{opacity: [1, 0], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: ["100%", "100%"], rotateX: [0, -180]}]
							],
							reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
						},
						/* Magic.css */
						/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
						"transition.perspectiveUpOut": {
							defaultDuration: 850,
							calls: [
								[{opacity: [0, 1], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: ["100%", "100%"], rotateX: -180}]
							],
							reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0}
						},
						/* Magic.css */
						/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
						"transition.perspectiveDownIn": {
							defaultDuration: 800,
							calls: [
								[{opacity: [1, 0], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateX: [0, 180]}]
							],
							reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
						},
						/* Magic.css */
						/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
						"transition.perspectiveDownOut": {
							defaultDuration: 850,
							calls: [
								[{opacity: [0, 1], transformPerspective: [800, 800], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateX: 180}]
							],
							reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0}
						},
						/* Magic.css */
						/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
						"transition.perspectiveLeftIn": {
							defaultDuration: 950,
							calls: [
								[{opacity: [1, 0], transformPerspective: [2000, 2000], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateY: [0, -180]}]
							],
							reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
						},
						/* Magic.css */
						/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
						"transition.perspectiveLeftOut": {
							defaultDuration: 950,
							calls: [
								[{opacity: [0, 1], transformPerspective: [2000, 2000], transformOriginX: [0, 0], transformOriginY: [0, 0], rotateY: -180}]
							],
							reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0}
						},
						/* Magic.css */
						/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
						"transition.perspectiveRightIn": {
							defaultDuration: 950,
							calls: [
								[{opacity: [1, 0], transformPerspective: [2000, 2000], transformOriginX: ["100%", "100%"], transformOriginY: [0, 0], rotateY: [0, 180]}]
							],
							reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
						},
						/* Magic.css */
						/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
						"transition.perspectiveRightOut": {
							defaultDuration: 950,
							calls: [
								[{opacity: [0, 1], transformPerspective: [2000, 2000], transformOriginX: ["100%", "100%"], transformOriginY: [0, 0], rotateY: 180}]
							],
							reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0}
						}
					};
	
			/* Register the packaged effects. */
			for (var effectName in Velocity.RegisterEffect.packagedEffects) {
				if (Velocity.RegisterEffect.packagedEffects.hasOwnProperty(effectName)) {
					Velocity.RegisterEffect(effectName, Velocity.RegisterEffect.packagedEffects[effectName]);
				}
			}
	
			/*********************
			 Sequence Running
			 **********************/
	
			/* Note: Sequence calls must use Velocity's single-object arguments syntax. */
			Velocity.RunSequence = function(originalSequence) {
				var sequence = $.extend(true, [], originalSequence);
	
				if (sequence.length > 1) {
					$.each(sequence.reverse(), function(i, currentCall) {
						var nextCall = sequence[i + 1];
	
						if (nextCall) {
							/* Parallel sequence calls (indicated via sequenceQueue:false) are triggered
							 in the previous call's begin callback. Otherwise, chained calls are normally triggered
							 in the previous call's complete callback. */
							var currentCallOptions = currentCall.o || currentCall.options,
									nextCallOptions = nextCall.o || nextCall.options;
	
							var timing = (currentCallOptions && currentCallOptions.sequenceQueue === false) ? "begin" : "complete",
									callbackOriginal = nextCallOptions && nextCallOptions[timing],
									options = {};
	
							options[timing] = function() {
								var nextCallElements = nextCall.e || nextCall.elements;
								var elements = nextCallElements.nodeType ? [nextCallElements] : nextCallElements;
	
								if (callbackOriginal) {
									callbackOriginal.call(elements, elements);
								}
								Velocity(currentCall);
							};
	
							if (nextCall.o) {
								nextCall.o = $.extend({}, nextCallOptions, options);
							} else {
								nextCall.options = $.extend({}, nextCallOptions, options);
							}
						}
					});
	
					sequence.reverse();
				}
	
				Velocity(sequence[0]);
			};
		}((__webpack_provided_window_dot_jQuery || window.Zepto || window), window, document);
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)))

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _module = _angular2.default.module('availity.config', ['availity']);
	
	_module.run(function (avAnalytics) {
	  return avAnalytics.init();
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _moment = __webpack_require__(70);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _tracekit = __webpack_require__(424);
	
	var _tracekit2 = _interopRequireDefault(_tracekit);
	
	var _jquery = __webpack_require__(38);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	__webpack_require__(71);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	_module2.default.constant('AV_EXCEPTIONS', {
	  MESSAGES: {
	    NOT_APPLICABLE: 'N/A'
	  },
	  TYPES: {
	    EXCEPTION: 'exception'
	  },
	  REPEAT_LIMIT_TIME: 5000
	});
	
	var AvExceptionAnalyticsProvider = function () {
	  function AvExceptionAnalyticsProvider() {
	    _classCallCheck(this, AvExceptionAnalyticsProvider);
	
	    this._enabled = true;
	    this.appId;
	  }
	
	  AvExceptionAnalyticsProvider.prototype.enabled = function enabled(_enabled) {
	    this._enabled = !!_enabled;
	  };
	
	  AvExceptionAnalyticsProvider.prototype.setAppId = function setAppId(_id) {
	    this.appId = _id;
	  };
	
	  AvExceptionAnalyticsProvider.prototype.$get = function $get($location, AV_EXCEPTIONS, $injector) {
	
	    var that = this;
	
	    var AvExceptionAnalytics = function () {
	      function AvExceptionAnalytics() {
	        _classCallCheck(this, AvExceptionAnalytics);
	      }
	
	      AvExceptionAnalytics.prototype.init = function init() {
	
	        var self = this;
	
	        if (!that._enabled) {
	          return;
	        }
	
	        _tracekit2.default.remoteFetching = false;
	        _tracekit2.default.surroundingLinesToCollect = 11;
	
	        // subscribe() hooks into window.error
	        _tracekit2.default.report.subscribe(function (stacktrace) {
	          self.onError(stacktrace);
	        });
	
	        this.messageTimestampMap = {};
	      };
	
	      AvExceptionAnalytics.prototype.prettyPrint = function prettyPrint(stacktrace) {
	
	        var message = '';
	
	        var length = stacktrace.stack.length;
	
	        for (var i = 0; i < length; i++) {
	          message += ['[' + i.toString().padStart(2, '0') + '] ', stacktrace.stack[i].func, ' ', stacktrace.stack[i].url, ':', stacktrace.stack[i].line, ':', stacktrace.stack[i].column, i + 1 < length ? '\n' : ''].join('');
	        }
	
	        return message;
	      };
	
	      AvExceptionAnalytics.prototype.onError = function onError(stacktrace) {
	
	        var userAgent = window.navigator && window.navigator.userAgent ? window.navigator.userAgent : AV_EXCEPTIONS.MESSAGES.NOT_APPLICABLE;
	
	        var message = {
	          errorDate: (0, _moment2.default)(new Date()).format('YYYY-MM-DDTHH:mm:ssZZ'),
	          errorName: stacktrace.name,
	          errorMessage: stacktrace.message,
	          errorStack: this.prettyPrint(stacktrace),
	          url: $location.$$absUrl,
	          appId: that.appId || AV_EXCEPTIONS.MESSAGES.NOT_APPLICABLE,
	          appVersion: ("Unknown") || AV_EXCEPTIONS.MESSAGES.NOT_APPLICABLE,
	          userAgent: userAgent,
	          userLanguage: navigator.userLanguage,
	          referrer: document.referrer,
	          host: document.domain,
	          screenWidth: (0, _jquery2.default)(window).width(),
	          screenHeight: (0, _jquery2.default)(window).height(),
	          sdkVersion: ("2.0.0-beta.11")
	        };
	
	        return this.log(message);
	      };
	
	      AvExceptionAnalytics.prototype.log = function log(message) {
	        var avLogMessagesResource = $injector.get('avLogMessagesResource');
	        return avLogMessagesResource.error(message);
	      };
	
	      AvExceptionAnalytics.prototype.trackEvent = function trackEvent(exception) {
	
	        if (!that._enabled) {
	          return null;
	        }
	
	        // If we've already logged this error recently, don't log it again (no need to spam the API)
	        if (this._isRepeatError(exception)) {
	          return;
	        }
	
	        var stacktrace = _tracekit2.default.computeStackTrace(exception);
	
	        return this.onError(stacktrace);
	      };
	
	      // Check to see if this error was reported within the last 5 seconds
	
	
	      AvExceptionAnalytics.prototype._isRepeatError = function _isRepeatError(exception) {
	        var timestamp = (0, _moment2.default)();
	        var message = exception.message;
	        var lastTimestamp = this.messageTimestampMap[message];
	        var isRepeat = false;
	
	        if (lastTimestamp && timestamp.diff(lastTimestamp) < AV_EXCEPTIONS.REPEAT_LIMIT_TIME) {
	          isRepeat = true;
	        }
	
	        this.messageTimestampMap[message] = timestamp;
	        return isRepeat;
	      };
	
	      return AvExceptionAnalytics;
	    }();
	
	    return new AvExceptionAnalytics();
	  };
	
	  return AvExceptionAnalyticsProvider;
	}();
	
	_module2.default.provider('avExceptionAnalytics', AvExceptionAnalyticsProvider);
	
	_module2.default.config(function ($provide) {
	
	  $provide.decorator('$exceptionHandler', function ($delegate, $injector) {
	
	    return function (exception, cause) {
	      $delegate(exception, cause);
	      var errorTacking = $injector.get('avExceptionAnalytics');
	      errorTacking.trackEvent(exception);
	    };
	  });
	});
	
	_module2.default.run(function (avExceptionAnalytics) {
	  return avExceptionAnalytics.init();
	});
	
	exports.default = _module2.default;

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _base = __webpack_require__(109);
	
	var _base2 = _interopRequireDefault(_base);
	
	__webpack_require__(102);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AvAnalyticsProvider = function (_Base) {
	  _inherits(AvAnalyticsProvider, _Base);
	
	  function AvAnalyticsProvider() {
	    _classCallCheck(this, AvAnalyticsProvider);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var _this = _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));
	
	    _this.plugins = [];
	    _this.virtualPageTracking = _this.av.avAnalyticsConfigProvider.get().VIRTUAL_PAGE_TRACKING;
	    _this.appId;
	    _this.plugins;
	
	    return _this;
	  }
	
	  AvAnalyticsProvider.prototype.registerPlugins = function registerPlugins(_plugins) {
	
	    if (_angular2.default.isString(_plugins)) {
	      this.plugins = [_plugins];
	    } else if (Array.isArray(_plugins)) {
	      this.plugins = _plugins;
	    } else {
	      throw new Error('AvAnalytics.registerPlugins() expects a string or an array.');
	    }
	
	    return this.plugins;
	  };
	
	  AvAnalyticsProvider.prototype.setVirtualPageTracking = function setVirtualPageTracking(value) {
	    if (arguments.length) {
	      this.virtualPageTracking = !!value;
	    }
	  };
	
	  AvAnalyticsProvider.prototype.isVirtualPageTracking = function isVirtualPageTracking() {
	    return this.virtualPageTracking;
	  };
	
	  AvAnalyticsProvider.prototype.setAppID = function setAppID(id) {
	    this.appId = id;
	    return this.appId;
	  };
	
	  AvAnalyticsProvider.prototype.$get = function $get($injector, $q, $log, $rootScope, $location, avAnalyticsConfig) {
	
	    var self = this;
	
	    var AvAnalytics = function () {
	      function AvAnalytics() {
	        var _this2 = this;
	
	        _classCallCheck(this, AvAnalytics);
	
	        this.services = {};
	
	        if (!self.plugins || self.plugins.length === 0) {
	          self.plugins = [avAnalyticsConfig.SERVICES.SPLUNK];
	        }
	
	        _angular2.default.forEach(self.plugins, function (plugin) {
	
	          try {
	            _this2.services[plugin] = $injector.get(plugin);
	          } catch (err) {
	            $log.error('Could not load ' + plugin + ' plugin');
	          }
	        });
	      }
	
	      AvAnalytics.prototype.init = function init() {
	        var _this3 = this;
	
	        if (this.isVirtualPageTracking()) {
	
	          $rootScope.$on(avAnalyticsConfig.EVENTS.PAGE, function () {
	            _this3.trackPageView($location.absUrl());
	          });
	        }
	
	        _angular2.default.forEach(this.services, function (handler) {
	
	          if (handler.isEnabled() && handler.init) {
	            handler.init();
	          }
	        });
	      };
	
	      AvAnalytics.prototype.trackEvent = function trackEvent(properties) {
	
	        var promises = [];
	
	        _angular2.default.forEach(this.services, function (handler) {
	          var promise = handler.trackEvent(properties);
	          promises.push(promise);
	        });
	
	        return $q.all(promises);
	      };
	
	      AvAnalytics.prototype.getAppId = function getAppId() {
	        return self.appId;
	      };
	
	      AvAnalytics.prototype.isVirtualPageTracking = function isVirtualPageTracking() {
	        return self.virtualPageTracking;
	      };
	
	      AvAnalytics.prototype.trackPageView = function trackPageView(url) {
	
	        var promises = [];
	
	        _angular2.default.forEach(this.services, function (handler) {
	          var promise = handler.trackPageView(url);
	          promises.push(promise);
	        });
	
	        return $q.all(promises);
	      };
	
	      return AvAnalytics;
	    }();
	
	    return new AvAnalytics();
	  };
	
	  return AvAnalyticsProvider;
	}(_base2.default);
	
	AvAnalyticsProvider.$inject = ['avAnalyticsConfigProvider'];
	
	
	_module2.default.provider('avAnalytics', AvAnalyticsProvider);
	
	exports.default = _module2.default;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	__webpack_require__(71);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	_module2.default.factory('avSplunkAnalytics', function ($log, avLogMessagesResource, $location) {
	  var SplunkAnalyticsService = function () {
	    function SplunkAnalyticsService() {
	      _classCallCheck(this, SplunkAnalyticsService);
	    }
	
	    SplunkAnalyticsService.prototype.trackEvent = function trackEvent(properties) {
	
	      properties.url = $location.$$absUrl || 'N/A';
	      properties.level = properties.level || 'info';
	
	      return avLogMessagesResource[properties.level](properties);
	    };
	
	    SplunkAnalyticsService.prototype.trackPageView = function trackPageView(url) {
	
	      var properties = {
	        event: 'page',
	        level: 'info',
	        url: url || $location.$$absUrl()
	      };
	
	      return avLogMessagesResource[properties.level](properties);
	    };
	
	    SplunkAnalyticsService.prototype.isEnabled = function isEnabled() {
	      return true;
	    };
	
	    return SplunkAnalyticsService;
	  }();
	
	  return new SplunkAnalyticsService();
	});
	
	exports.default = _module2.default;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _lodash = __webpack_require__(37);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var OrganizationResourceFactory = function OrganizationResourceFactory(AvApiResource, avUsersResource) {
	  var OrganizationResource = function (_AvApiResource) {
	    _inherits(OrganizationResource, _AvApiResource);
	
	    function OrganizationResource() {
	      _classCallCheck(this, OrganizationResource);
	
	      return _possibleConstructorReturn(this, _AvApiResource.call(this, {
	        path: '/api/sdk/platform',
	        name: 'organizations'
	      }));
	    }
	
	    OrganizationResource.prototype.afterQuery = function afterQuery(response) {
	      return response.data.organizations || [];
	    };
	
	    OrganizationResource.prototype.queryOrganizations = function queryOrganizations(user, config) {
	
	      var params = {
	        params: {
	          userId: user.id
	        }
	      };
	
	      // merge in params with user ID
	      var queryConfig = _lodash2.default.merge({}, params, config);
	
	      return this.query(queryConfig);
	    };
	
	    OrganizationResource.prototype.getOrganizations = function getOrganizations(config) {
	      var _this2 = this;
	
	      return avUsersResource.me().then(function (user) {
	        return _this2.queryOrganizations.call(_this2, user, config);
	      });
	    };
	
	    return OrganizationResource;
	  }(AvApiResource);
	
	  return new OrganizationResource();
	};
	
	_module2.default.factory('avOrganizationsResource', OrganizationResourceFactory);
	
	exports.default = _module2.default;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AvUserPermissionsResourceFactory = function AvUserPermissionsResourceFactory(AvApiResource) {
	  var AvUserPermissionsResource = function (_AvApiResource) {
	    _inherits(AvUserPermissionsResource, _AvApiResource);
	
	    function AvUserPermissionsResource() {
	      _classCallCheck(this, AvUserPermissionsResource);
	
	      return _possibleConstructorReturn(this, _AvApiResource.call(this, {
	        path: '/api/internal',
	        version: '/v1',
	        name: '/axi-user-permissions'
	      }));
	    }
	
	    AvUserPermissionsResource.prototype.afterQuery = function afterQuery(response) {
	      return response.data.permissions ? response.data.permissions : [];
	    };
	
	    AvUserPermissionsResource.prototype.getPermissions = function getPermissions(permissionIds, region) {
	
	      return this.query({
	        params: {
	          permissionId: permissionIds,
	          region: region
	        }
	      });
	    };
	
	    return AvUserPermissionsResource;
	  }(AvApiResource);
	
	  return new AvUserPermissionsResource();
	};
	
	_module2.default.factory('avPermissionsResource', AvUserPermissionsResourceFactory);
	
	exports.default = _module2.default;

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _lodash = __webpack_require__(37);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProvidersResourceFactory = function ProvidersResourceFactory(AvApiResource) {
	  var ProvidersResource = function (_AvApiResource) {
	    _inherits(ProvidersResource, _AvApiResource);
	
	    function ProvidersResource() {
	      _classCallCheck(this, ProvidersResource);
	
	      return _possibleConstructorReturn(this, _AvApiResource.call(this, {
	        path: '/api/internal',
	        name: 'providers'
	      }));
	    }
	
	    ProvidersResource.prototype.afterQuery = function afterQuery(response) {
	      return response.data.providers || [];
	    };
	
	    ProvidersResource.prototype.getProviders = function getProviders(customerId, config) {
	
	      var params = {
	        params: {
	          customerId: customerId
	        }
	      };
	
	      // merge in params with user ID
	      var queryConfig = _lodash2.default.merge({}, params, config);
	
	      return this.query(queryConfig);
	    };
	
	    return ProvidersResource;
	  }(AvApiResource);
	
	  return new ProvidersResource();
	};
	
	_module2.default.factory('avProvidersResource', ProvidersResourceFactory);
	
	exports.default = _module2.default;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProxyResourceFactory = function ProxyResourceFactory(AvApiResource) {
	  var ProxyResource = function (_AvApiResource) {
	    _inherits(ProxyResource, _AvApiResource);
	
	    function ProxyResource(options) {
	      _classCallCheck(this, ProxyResource);
	
	      if (!options && !options.tenant) {
	        throw Error('Must specify tenant name for ProxyResource');
	      }
	
	      // /v1/proxy/{tenant}/{name}
	      return _possibleConstructorReturn(this, _AvApiResource.call(this, {
	        path: '/api/v1/proxy/' + options.tenant,
	        version: '',
	        name: options.name
	      }));
	    }
	
	    return ProxyResource;
	  }(AvApiResource);
	
	  return ProxyResource;
	};
	
	_module2.default.service('AvProxyResource', ProxyResourceFactory);
	
	exports.default = _module2.default;

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _lodash = __webpack_require__(37);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AvRegionsFactory = function AvRegionsFactory(AvApiResource, avUsersResource) {
	  var AvRegionsResource = function (_AvApiResource) {
	    _inherits(AvRegionsResource, _AvApiResource);
	
	    function AvRegionsResource() {
	      _classCallCheck(this, AvRegionsResource);
	
	      return _possibleConstructorReturn(this, _AvApiResource.call(this, {
	        path: '/api/sdk/platform',
	        name: '/regions'
	      }));
	    }
	
	    AvRegionsResource.prototype.afterGet = function afterGet(response) {
	      return response.data.regions || [];
	    };
	
	    AvRegionsResource.prototype.queryRegions = function queryRegions(user, config) {
	
	      var params = {
	        params: {
	          userId: user.id
	        }
	      };
	
	      var conf = _lodash2.default.merge({}, params, config);
	
	      return this.query(conf);
	    };
	
	    AvRegionsResource.prototype.getCurrentRegion = function getCurrentRegion() {
	      return this.getRegions().then(function (regions) {
	        return _lodash2.default.find(regions, function (region) {
	          return region.currentlySelected;
	        });
	      });
	    };
	
	    AvRegionsResource.prototype.getRegions = function getRegions(config) {
	      var _this2 = this;
	
	      return avUsersResource.me().then(function (user) {
	        return _this2.queryRegions.call(_this2, user, config);
	      });
	    };
	
	    return AvRegionsResource;
	  }(AvApiResource);
	
	  return new AvRegionsResource();
	};
	
	_module2.default.factory('avRegionsResource', AvRegionsFactory);
	
	exports.default = _module2.default;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AvUserPermissionsResourceFactory = function AvUserPermissionsResourceFactory(AvApiResource) {
	  var AvUserPermissionsResource = function (_AvApiResource) {
	    _inherits(AvUserPermissionsResource, _AvApiResource);
	
	    function AvUserPermissionsResource() {
	      _classCallCheck(this, AvUserPermissionsResource);
	
	      return _possibleConstructorReturn(this, _AvApiResource.call(this, {
	        path: '/api/internal',
	        version: '/v1',
	        name: '/axi-user-permissions'
	      }));
	    }
	
	    AvUserPermissionsResource.prototype.afterQuery = function afterQuery(response) {
	      return response.data.axiUserPermissions ? response.data.axiUserPermissions : [];
	    };
	
	    AvUserPermissionsResource.prototype.getPermissions = function getPermissions(permissionIds, region) {
	
	      return this.query({
	        sessionBust: true,
	        params: {
	          permissionId: permissionIds,
	          region: region
	        }
	      });
	    };
	
	    return AvUserPermissionsResource;
	  }(AvApiResource);
	
	  return new AvUserPermissionsResource();
	};
	
	_module2.default.factory('avUserPermissionsResource', AvUserPermissionsResourceFactory);
	
	exports.default = _module2.default;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var UserServiceFactory = function UserServiceFactory(AvApiResource) {
	  var AvUsersResource = function (_AvApiResource) {
	    _inherits(AvUsersResource, _AvApiResource);
	
	    function AvUsersResource() {
	      _classCallCheck(this, AvUsersResource);
	
	      return _possibleConstructorReturn(this, _AvApiResource.call(this, {
	        path: '/api/sdk/platform',
	        name: '/users'
	      }));
	    }
	
	    AvUsersResource.prototype.afterGet = function afterGet(response) {
	      var user = response.data.user ? response.data.user : response.data;
	      return user;
	    };
	
	    AvUsersResource.prototype.me = function me(config) {
	      return this.get('me', config);
	    };
	
	    return AvUsersResource;
	  }(AvApiResource);
	
	  return new AvUsersResource();
	};
	
	_module2.default.factory('avUsersResource', UserServiceFactory);
	
	exports.default = _module2.default;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _lodash = __webpack_require__(37);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	__webpack_require__(106);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AvUserAuthorizationsFactory = function AvUserAuthorizationsFactory($q, $log, avUserPermissionsResource) {
	  var AvUserAuthorizations = function () {
	    function AvUserAuthorizations() {
	      _classCallCheck(this, AvUserAuthorizations);
	
	      /**
	       * Region is used to return permission/resources relative to region. If null service will
	       * return all permission relative to current.  If value 'ALL' used it will return value relative
	       * to all regions the user has access to.
	       */
	      this.region = null;
	
	      /**
	       * PermissionIds contains the set of permissionIds to request from service. If user of service calls
	       * setPermissionIds() or call getPermissions() with complete set of permissionIds needed by application,
	       * then service should only make that one hit to retrieve permission information.
	       */
	      this.permissionIds = [];
	    }
	
	    AvUserAuthorizations.prototype.setRegion = function setRegion(region) {
	      this.region = region;
	      return this;
	    };
	
	    AvUserAuthorizations.prototype.setPermissionIds = function setPermissionIds(permissionIds) {
	
	      if (!_angular2.default.isArray(permissionIds)) {
	        throw new Error('permissionsIds must be an array of strings in setPermissionIds()');
	      }
	
	      this.permissionIds = permissionIds;
	
	      return this;
	    };
	
	    AvUserAuthorizations.prototype.isAuthorized = function isAuthorized(permissionId) {
	      return this.getPermission(permissionId).then(function (permission) {
	        return permission.isAuthorized;
	      });
	    };
	
	    AvUserAuthorizations.prototype.isAnyAuthorized = function isAnyAuthorized(permissionIds) {
	      return this.getPermissions(permissionIds).then(function (permissions) {
	        return permissions.some(function (permission) {
	          return permission.isAuthorized;
	        });
	      });
	    };
	
	    AvUserAuthorizations.prototype.getPermission = function getPermission(permissionId) {
	
	      if (!_angular2.default.isString(permissionId)) {
	        throw new Error('permissionsId must be a string ID for getPermission()');
	      }
	
	      return this.getPermissions([permissionId]).then(function (permissions) {
	        return permissions.find(function (permission) {
	          return permission.id === permissionId;
	        });
	      });
	    };
	
	    AvUserAuthorizations.prototype.getPermissions = function getPermissions(permissionIds) {
	      var _this = this;
	
	      if (!_angular2.default.isArray(permissionIds)) {
	        throw new Error('permissionsIds must be an array of string IDs for getPermissions()');
	      }
	
	      // Combine pre-loaded permission ids with the ids from this function invocation
	      this.permissionIds = _lodash2.default.union(this.permissionIds, permissionIds);
	
	      return avUserPermissionsResource.getPermissions(this.permissionIds, this.region).then(function (permissions) {
	        return _this.map(permissionIds, permissions);
	      });
	    };
	
	    AvUserAuthorizations.prototype.getOrganizations = function getOrganizations(permissionId) {
	      return this.getPermission(permissionId).then(function (permission) {
	        return permission.organizations;
	      });
	    };
	
	    AvUserAuthorizations.prototype.getPayers = function getPayers(permissionId, organizationId) {
	
	      return this.getPermission(permissionId).then(function (permission) {
	
	        var organization = permission.organizations.find(function (thisPermission) {
	          return thisPermission.id === organizationId;
	        });
	
	        if (organization && organization.resources) {
	          return organization.resources;
	        }
	
	        return [];
	      });
	    };
	
	    AvUserAuthorizations.prototype.map = function map(permissionIds, permissions) {
	
	      var self = this;
	
	      var result = permissionIds.map(function (permissionId) {
	
	        var key = { id: permissionId };
	        var permission = permissions.find(function (thisPermission) {
	          return thisPermission.id === permissionId;
	        });
	        permission = permission ? self.convert(permission) : self.convert(key);
	        return permission;
	      });
	
	      return result;
	    };
	
	    AvUserAuthorizations.prototype.convert = function convert(permission) {
	
	      permission.isAuthorized = permission.organizations ? permission.organizations.length > 0 : false;
	      permission.geographies = permission.geographies || [];
	      permission.organizations = permission.organizations || [];
	
	      return permission;
	    };
	
	    return AvUserAuthorizations;
	  }();
	
	  return new AvUserAuthorizations();
	};
	
	_module2.default.factory('avUserAuthorizations', AvUserAuthorizationsFactory);
	
	exports.default = _module2.default;

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(103);
	
	__webpack_require__(106);
	
	__webpack_require__(162);
	
	__webpack_require__(165);
	
	__webpack_require__(110);
	
	__webpack_require__(48);
	
	__webpack_require__(73);

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.constant('AV_MESSAGES', {
	
	  EVENTS: {
	
	    MESSAGE: 'message', // post message window event
	    RESIZE: 'resize.av.message',
	    UNLOAD: 'unload.av.message'
	
	  },
	
	  RESIZE_DEBOUNCE: 400,
	
	  DOMAIN: /https?:\/\/([\w\d\-]+\.)?availity\.(com|net)/,
	  LOCAL: /http:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0):(\d+)/
	
	});

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _jquery = __webpack_require__(38);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _lodash = __webpack_require__(37);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	__webpack_require__(164);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// https://github.com/kylewelsby/angular-post-message/blob/master/src/angular-post-message.js
	var AvMessageProvider = function () {
	  function AvMessageProvider() {
	    _classCallCheck(this, AvMessageProvider);
	
	    this.enabled = true;
	  }
	
	  AvMessageProvider.prototype.enable = function enable(value) {
	
	    if (arguments.length) {
	      this.enabled = !!value;
	    }
	
	    return this.enabled;
	  };
	
	  AvMessageProvider.prototype.$get = function $get($rootScope, $log, AV_MESSAGES) {
	
	    var that = this;
	
	    var AvMessages = function () {
	      function AvMessages() {
	        var _this = this;
	
	        _classCallCheck(this, AvMessages);
	
	        this.onResize = _.debounce(function () {
	
	          var height = (0, _jquery2.default)('html').height();
	          _this.send({
	            event: AV_MESSAGES.EVENTS.AV_RESIZE,
	            height: height
	          });
	        }, AV_MESSAGES.RESIZE_DEBOUNCE);
	      }
	
	      AvMessages.prototype.init = function init() {
	
	        var $window = (0, _jquery2.default)(window);
	
	        $window.on(AV_MESSAGES.EVENTS.MESSAGE, this.onMessage.bind(this));
	
	        $window.on(AV_MESSAGES.EVENTS.RESIZE, this.onResize.bind(this));
	
	        $window.on(AV_MESSAGES.EVENTS.UNLOAD, this.onUnload.bind(this));
	
	        $rootScope.$on('$destroy', this.destroy.bind(this));
	      };
	
	      AvMessages.prototype.destroy = function destroy() {
	
	        (0, _jquery2.default)(window).off(AV_MESSAGES.EVENTS.MESSAGE);
	        (0, _jquery2.default)(window).off(AV_MESSAGES.EVENTS.RESIZE);
	        (0, _jquery2.default)(window).off(AV_MESSAGES.EVENTS.UNLOAD);
	      };
	
	      AvMessages.prototype.onUnload = function onUnload() {
	
	        this.send({
	          event: AV_MESSAGES.EVENTS.UNLOAD
	        });
	      };
	
	      AvMessages.prototype.isDomain = function isDomain(url) {
	
	        if (AV_MESSAGES.DOMAIN.test(this.domain())) {
	          return AV_MESSAGES.DOMAIN.test(url);
	        }
	
	        return AV_MESSAGES.LOCAL.test(url);
	      };
	
	      AvMessages.prototype.isEnabled = function isEnabled() {
	        return that.enabled;
	      };
	
	      AvMessages.prototype.onMessage = function onMessage(_event) {
	
	        var event = _event;
	
	        event = event.originalEvent || event; // jQuery wraps in `originalEvent`
	
	        if (!event && !event.data) {
	          // no op
	          return;
	        }
	
	        // don't process messages emitted from same window
	        if (event.source === window) {
	          return;
	        }
	
	        if (!this.isDomain(event.origin)) {
	          $log.warn('avMessages rejected a cross domain message since it does not match an *.availity.com  or localhost');
	          return;
	        }
	
	        var data = event.data;
	
	        try {
	          data = _angular2.default.fromJson(data);
	        } catch (err) {
	          $log.warn('avMessages.onMessage() failed to convert event to json payload');
	        }
	
	        if (_angular2.default.isString(data)) {
	          event = data;
	          data = null;
	        } else {
	          event = data.event ? data.event : AV_MESSAGES.AV_RECEIVED;
	        }
	
	        $rootScope.$root.$broadcast(event, data);
	      };
	
	      AvMessages.prototype.isIframe = function isIframe() {
	        return window.self !== window.parent;
	      };
	
	      AvMessages.prototype.domain = function domain() {
	
	        if (window.location.origin) {
	          return window.location.origin;
	        }
	
	        if (window.location.hostname) {
	          return window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
	        }
	
	        return '*';
	      };
	
	      AvMessages.prototype.send = function send(payload) {
	
	        try {
	
	          var message = _.isString(payload) ? payload : JSON.stringify(payload);
	          this.postMessage(message, this.domain());
	        } catch (err) {
	          $log.error('avMessages.send() ', err);
	        }
	      };
	
	      AvMessages.prototype.postMessage = function postMessage(message, domain) {
	        window.parent.postMessage(message, domain);
	      };
	
	      return AvMessages;
	    }();
	
	    return new AvMessages();
	  };
	
	  return AvMessageProvider;
	}();
	
	_module2.default.provider('avMessages', AvMessageProvider);
	
	_module2.default.run(function (avMessages) {
	
	  if (avMessages.isEnabled()) {
	    avMessages.init();
	  }
	});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.constant('AV_POLLING', {
	  INTERVAL: 1000, // delay in ms before retrying an async request
	  MAX_ELAPSED_TIME: 5000, // max time in ms before polling stops and rejects original request
	  MAX_RETRY: 30, // # of times the request will be tried
	  DECAY: 1.2, // % the polling interval decays after every retry
	  // maximum time polling is allowed before rejecting the request
	  EVENTS: {
	    MAX_RETRY: 'av:polling:max:retry'
	  },
	  REGEX_URL: /^.*?api.availity.com(.*)$/ // capture the relative url from API
	});
	
	exports.default = _module2.default;

/***/ },
/* 167 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = print;
	// https://github.com/jasonday/printThis/commit/66f9cbd0e3760767342eed4ef32cf8294417b227
	
	function print() {
	
	  if (document.queryCommandSupported('print')) {
	    document.execCommand('print', false, null);
	  } else {
	    window.focus();
	    window.print();
	  }
	}

/***/ },
/* 168 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.stringify = stringify;
	exports.isBlank = isBlank;
	// https://github.com/epeli/underscore.string/blob/cebddf40cf2e10f0e9b596d9654edd0a1cfefc15/helper/makeString.js
	function stringify(object) {
	  if (object === null) {
	    return '';
	  }
	  return '' + object;
	}
	
	// https://github.com/epeli/underscore.string/blob/cebddf40cf2e10f0e9b596d9654edd0a1cfefc15/isBlank.js
	function isBlank(str) {
	  return (/^\s*$/.test(stringify(str))
	  );
	}

/***/ },
/* 169 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var REGEX_API_URL = /^.*?api.availity.com(.*)$/;
	
	function getRelativeUrl(url) {
	
	  var result = url.match(REGEX_API_URL);
	  if (result && result[1]) {
	    return "/api" + result[1];
	  }
	
	  return url;
	}
	
	exports.REGEX_API_URL = REGEX_API_URL;
	exports.getRelativeUrl = getRelativeUrl;

/***/ },
/* 170 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = uuid;
	var uid = ['0', '0', '0'];
	
	function uuid(prefix) {
	
	  var index = uid.length;
	  var digit = void 0;
	
	  while (index) {
	    index--;
	    digit = uid[index].charCodeAt(0);
	    if (digit === 57 /* '9' */) {
	        uid[index] = 'A';
	        return prefix ? prefix + uid.join('') : uid.join('');
	      }
	    if (digit === 90 /* 'Z' */) {
	        uid[index] = '0';
	      } else {
	      uid[index] = String.fromCharCode(digit + 1);
	      return prefix ? prefix + uid.join('') : uid.join('');
	    }
	  }
	  uid.unshift('0');
	
	  return prefix ? prefix + uid.join('') : uid.join('');
	}

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.value('avValConfig', {
	  classes: {
	    valid: 'ng-valid',
	    invalid: 'ng-invalid',
	    dirty: 'ng-dirty',
	    pristine: 'ng-pristine',
	    touched: 'ng-touched',
	    untouched: 'ng-untouched',
	    submitted: 'ng-submitted'
	  },
	  validators: ['avValPattern', 'avValSize', 'avValRequired', 'avValDateRange', 'avValDate', 'avValPhone', 'avValEmail', 'avValNpi']
	});
	
	exports.default = _module2.default;

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	__webpack_require__(171);
	
	__webpack_require__(72);
	
	__webpack_require__(176);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AvValProvider = function () {
	  function AvValProvider() {
	    _classCallCheck(this, AvValProvider);
	
	    this.validators = [];
	    this.rules = {};
	    this.services = {};
	  }
	
	  AvValProvider.prototype.addRules = function addRules(_rules) {
	    this.rules = _angular2.default.extend({}, this.rules, _rules);
	    return this.rules;
	  };
	
	  AvValProvider.prototype.addValidators = function addValidators(_validators) {
	    this.validators = this.validators.concat(_validators);
	    return this.validators;
	  };
	
	  AvValProvider.prototype.$get = function $get($injector, $rootScope, avValConfig, AV_VAL) {
	
	    var that = this;
	
	    var AvValidation = function () {
	      function AvValidation() {
	        _classCallCheck(this, AvValidation);
	
	        this.initValidators();
	      }
	
	      AvValidation.prototype.initValidators = function initValidators() {
	
	        var self = this;
	
	        that.validators = avValConfig.validators.concat(that.validators);
	
	        _angular2.default.forEach(that.validators, function (name) {
	          self.addValidator(name);
	        });
	      };
	
	      AvValidation.prototype.addValidator = function addValidator(name) {
	        var validator = $injector.get(name);
	        that.services[validator.name] = validator;
	      };
	
	      AvValidation.prototype.addRules = function addRules(rules) {
	        that.rules = _angular2.default.extend({}, that.rules, rules);
	        $rootScope.$broadcast(AV_VAL.EVENTS.REVALIDATE);
	      };
	
	      AvValidation.prototype.getRule = function getRule(key) {
	        return that.rules[key];
	      };
	
	      AvValidation.prototype.getService = function getService(name) {
	        return that.services[name];
	      };
	
	      return AvValidation;
	    }();
	
	    return new AvValidation();
	  };
	
	  return AvValProvider;
	}();
	
	_module2.default.provider('avVal', AvValProvider);

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _moment = __webpack_require__(70);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _validator = __webpack_require__(33);
	
	var _validator2 = _interopRequireDefault(_validator);
	
	__webpack_require__(72);
	
	__webpack_require__(54);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_module2.default.factory('avValDateRange', function (AV_VAL, avValUtils) {
	  var DateRangeValidator = function (_Validator) {
	    _inherits(DateRangeValidator, _Validator);
	
	    function DateRangeValidator() {
	      _classCallCheck(this, DateRangeValidator);
	
	      return _possibleConstructorReturn(this, _Validator.call(this, 'dateRange'));
	    }
	
	    DateRangeValidator.prototype.getStartDate = function getStartDate(start) {
	      return this.setMin((0, _moment2.default)().add(start.value, start.units));
	    };
	
	    DateRangeValidator.prototype.getEndDate = function getEndDate(end) {
	      return this.setMax((0, _moment2.default)().add(end.value, end.units));
	    };
	
	    DateRangeValidator.prototype.setMin = function setMin(value) {
	
	      value.set('hours', 0);
	      value.set('minutes', 0);
	      value.set('seconds', 0);
	
	      return value;
	    };
	
	    DateRangeValidator.prototype.setMax = function setMax(value) {
	
	      value.set('hours', 23);
	      value.set('minutes', 59);
	      value.set('seconds', 59);
	
	      return value;
	    };
	
	    DateRangeValidator.prototype.validation = function validation(_ref) {
	      var value = _ref.value,
	          constraint = _ref.constraint;
	
	
	      var startDate = void 0;
	      var endDate = void 0;
	
	      var date = _angular2.default.isDate(value) ? (0, _moment2.default)(value) : (0, _moment2.default)(value, constraint.format || AV_VAL.DATE_FORMAT.SIMPLE);
	      date.set('hours', 0);
	      date.set('minutes', 0);
	      date.set('seconds', 0);
	
	      if (!avValUtils.isEmpty(constraint.start.units) && !avValUtils.isEmpty(constraint.end.units)) {
	        startDate = this.getStartDate(constraint.start);
	        endDate = this.getEndDate(constraint.end);
	      } else {
	        startDate = (0, _moment2.default)(constraint.start.value, constraint.start.format || constraint.format);
	        endDate = this.setMax((0, _moment2.default)(constraint.end.value, constraint.end.format || constraint.format));
	      }
	      return (_angular2.default.isDate(value) || date.isValid()) && (date.isBetween(startDate, endDate, 'day') || date.isSame(startDate, 'day') || date.isSame(endDate, 'day'));
	    };
	
	    DateRangeValidator.prototype.validate = function validate(context) {
	      return avValUtils.isEmpty(context.value) || this.validation(context);
	    };
	
	    return DateRangeValidator;
	  }(_validator2.default);
	
	  return new DateRangeValidator();
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _moment = __webpack_require__(70);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _validator = __webpack_require__(33);
	
	var _validator2 = _interopRequireDefault(_validator);
	
	__webpack_require__(72);
	
	__webpack_require__(54);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_module2.default.factory('avValDate', function (AV_VAL, avValUtils) {
	  var DateValidator = function (_Validator) {
	    _inherits(DateValidator, _Validator);
	
	    function DateValidator() {
	      _classCallCheck(this, DateValidator);
	
	      return _possibleConstructorReturn(this, _Validator.call(this, 'dateFormat'));
	    }
	
	    DateValidator.prototype.validate = function validate(_ref) {
	      var value = _ref.value,
	          constraint = _ref.constraint,
	          format = _ref.format;
	
	
	      var _format = constraint && format ? format : AV_VAL.DATE_FORMAT.SIMPLE;
	      return avValUtils.isEmpty(value) || _angular2.default.isDate(value) || (0, _moment2.default)(value, _format, true).isValid();
	    };
	
	    return DateValidator;
	  }(_validator2.default);
	
	  return new DateValidator();
	});

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _validator = __webpack_require__(33);
	
	var _validator2 = _interopRequireDefault(_validator);
	
	__webpack_require__(74);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_module2.default.factory('avValEmail', function (avValPattern) {
	
	  var EMAIL_PATTERN = /[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/;
	
	  var EmailValidator = function (_Validator) {
	    _inherits(EmailValidator, _Validator);
	
	    function EmailValidator() {
	      _classCallCheck(this, EmailValidator);
	
	      return _possibleConstructorReturn(this, _Validator.call(this, 'email'));
	    }
	
	    EmailValidator.prototype.validate = function validate(context) {
	
	      context.constraint = context.constraint || {};
	      context.constraint.value = EMAIL_PATTERN;
	
	      return avValPattern.validate(context);
	    };
	
	    return EmailValidator;
	  }(_validator2.default);
	
	  return new EmailValidator();
	});

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(174);
	
	__webpack_require__(173);
	
	__webpack_require__(175);
	
	__webpack_require__(177);
	
	__webpack_require__(74);
	
	__webpack_require__(178);
	
	__webpack_require__(179);
	
	__webpack_require__(180);
	
	__webpack_require__(54);

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _validator = __webpack_require__(33);
	
	var _validator2 = _interopRequireDefault(_validator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_module2.default.factory('avValNpi', function (avValUtils) {
	  var NpiValidator = function (_Validator) {
	    _inherits(NpiValidator, _Validator);
	
	    function NpiValidator() {
	      _classCallCheck(this, NpiValidator);
	
	      var _this = _possibleConstructorReturn(this, _Validator.call(this, 'npi'));
	
	      _this.INTEGER_REGEX = /^\d*$/;
	      return _this;
	    }
	
	    NpiValidator.prototype.validate = function validate(context) {
	      var value = context.value;
	
	
	      var npi = value || '';
	
	      if (avValUtils.isEmpty(npi)) {
	        return true;
	      }
	
	      if (!this.INTEGER_REGEX.test(npi) || npi.length !== 10) {
	        return false;
	      }
	
	      var firstDigit = npi.charAt(0);
	      if (!['1', '2', '3', '4'].includes(firstDigit)) {
	        return false;
	      }
	
	      var digit = parseInt(npi.charAt(9), 10);
	      npi = npi.substring(0, 9);
	      npi = '80840' + npi;
	
	      var alternate = true;
	      var total = 0;
	
	      for (var i = npi.length; i > 0; i--) {
	        var next = parseInt(npi.charAt(i - 1), 10);
	        if (alternate) {
	          next = next * 2;
	          if (next > 9) {
	            next = next % 10 + 1;
	          }
	        }
	        total += next;
	        alternate = !alternate;
	      }
	
	      var roundUp = Math.ceil(total / 10) * 10;
	      var calculatedCheck = roundUp - total;
	
	      return calculatedCheck === digit;
	    };
	
	    return NpiValidator;
	  }(_validator2.default);
	
	  return new NpiValidator();
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _validator = __webpack_require__(33);
	
	var _validator2 = _interopRequireDefault(_validator);
	
	__webpack_require__(74);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_module2.default.factory('avValPhone', function (avValPattern) {
	
	  var PHONE_PATTERN = /^([0-9][\.\-]?)?[(]{0,1}[0-9]{3}[)\.\- ]{0,1}[0-9]{3}[\.\- ]{0,1}[0-9]{4}$/;
	
	  var PhoneValidator = function (_Validator) {
	    _inherits(PhoneValidator, _Validator);
	
	    function PhoneValidator() {
	      _classCallCheck(this, PhoneValidator);
	
	      return _possibleConstructorReturn(this, _Validator.call(this, 'phone'));
	    }
	
	    PhoneValidator.prototype.validate = function validate(context) {
	      context.constraint = context.contraint || {};
	      context.constraint.value = PHONE_PATTERN;
	      return avValPattern.validate(context);
	    };
	
	    return PhoneValidator;
	  }(_validator2.default);
	
	  return new PhoneValidator();
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _validator = __webpack_require__(33);
	
	var _validator2 = _interopRequireDefault(_validator);
	
	__webpack_require__(54);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_module2.default.factory('avValRequired', function (avValUtils) {
	  var RequiredValidator = function (_Validator) {
	    _inherits(RequiredValidator, _Validator);
	
	    function RequiredValidator() {
	      _classCallCheck(this, RequiredValidator);
	
	      return _possibleConstructorReturn(this, _Validator.call(this, 'required'));
	    }
	
	    RequiredValidator.prototype.validate = function validate(context) {
	      var value = context.value,
	          element = context.element;
	
	      // Using ngModelController.$isEmpty for required checks.  A form component being empty is dependent on the
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
	
	      var ctrl = element && element.data('$ngModelController');
	      if (ctrl) {
	        return !ctrl.$isEmpty(value);
	      }
	
	      return !avValUtils.isEmpty(value);
	    };
	
	    return RequiredValidator;
	  }(_validator2.default);
	
	  return new RequiredValidator();
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _validator = __webpack_require__(33);
	
	var _validator2 = _interopRequireDefault(_validator);
	
	var _module = __webpack_require__(5);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_module2.default.factory('avValSize', function (avValUtils) {
	  var SizeValidator = function (_Validator) {
	    _inherits(SizeValidator, _Validator);
	
	    function SizeValidator() {
	      _classCallCheck(this, SizeValidator);
	
	      return _possibleConstructorReturn(this, _Validator.call(this, 'size'));
	    }
	
	    SizeValidator.prototype.validate = function validate(context) {
	      var value = context.value,
	          constraint = context.constraint;
	
	      var _value = value;
	
	      var min = constraint.min || 0;
	      var max = constraint.max;
	      var type = constraint.type ? constraint.type.toLowerCase() : 'text';
	
	      if (_value === null || _angular2.default.isUndefined(_value)) {
	        _value = '';
	      }
	
	      if (type === 'text') {
	        _value = '' + _value;
	        return avValUtils.isEmpty(_value) || _value.length >= min && (max === undefined || _value.length <= max);
	      }
	
	      // ... must be a Number
	      if (!_angular2.default.isNumber(_value) && /^\d+$/.test(_value)) {
	        _value = parseInt(_value, 10);
	      }
	
	      return avValUtils.isEmpty(_value) || _value >= min && (max === undefined || _value <= max);
	    };
	
	    return SizeValidator;
	  }(_validator2.default);
	
	  return new SizeValidator();
	});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _base = __webpack_require__(28);
	
	var _base2 = _interopRequireDefault(_base);
	
	__webpack_require__(104);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AvAnalyticsController = function (_Base) {
	  _inherits(AvAnalyticsController, _Base);
	
	  function AvAnalyticsController() {
	    _classCallCheck(this, AvAnalyticsController);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));
	  }
	
	  AvAnalyticsController.prototype.onEvent = function onEvent(event, element, options) {
	    var _this2 = this;
	
	    var properties = _angular2.default.extend({
	      level: 'info',
	      label: element.text()
	    }, {
	      event: event.type
	    }, options);
	
	    if (this.av.avAnalyticsUtils.isExternalLink(properties)) {
	      event.preventDefault();
	      event.stopPropagation();
	    }
	
	    var promise = this.av.avAnalytics.trackEvent(properties);
	    promise.finally(function () {
	      if (_this2.av.avAnalyticsUtils.isExternalLink(properties)) {
	        document.location = element.attr('href');
	      }
	    });
	  };
	
	  return AvAnalyticsController;
	}(_base2.default);
	
	AvAnalyticsController.$inject = ['avAnalyticsUtils', 'avAnalytics'];
	
	
	_module2.default.controller('AvAnalyticsController', AvAnalyticsController);

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.directive('avAnalytics', function () {
	  return {
	    restrict: 'A',
	    scope: {
	      options: '=avAnalytics'
	    },
	    controller: function controller($scope) {
	      this.getOptions = function () {
	        return $scope.options;
	      };
	    }
	  };
	});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(181);
	
	__webpack_require__(182);
	
	__webpack_require__(184);

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	__webpack_require__(103);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.directive('avAnalyticsOn', function (avAnalyticsConfig, avAnalyticsUtils) {
	  return {
	    restrict: 'A',
	    controller: 'AvAnalyticsController',
	    require: ['avAnalyticsOn', '?^avAnalytics'],
	    link: function link(scope, element, attrs, controllers) {
	
	      var childCtrl = controllers[0];
	      var parentCtrl = {};
	      var parentOptions = {};
	
	      if (controllers[1]) {
	        parentCtrl = controllers[1];
	        parentOptions = parentCtrl.getOptions();
	      }
	
	      var eventType = attrs.avAnalyticsOn || avAnalyticsConfig.EVENTS.DEFAULT;
	
	      element.on(eventType, function (event) {
	
	        if (parentCtrl.getOptions) {
	          parentOptions = parentCtrl.getOptions();
	        }
	
	        var options = _angular2.default.extend({}, parentOptions, avAnalyticsUtils.getProperties(attrs));
	
	        childCtrl.onEvent(event, element, options);
	      });
	    }
	  };
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	__webpack_require__(149);
	
	__webpack_require__(150);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.directive('avAnimate', function () {
	  return {
	    restrict: 'AE',
	    scope: {
	      watch: '<?avAnimate',
	      animation: '<?avAnimateType',
	      eventType: '@?avAnimateOn',
	      onLoad: '<?avAnimateOnLoad',
	      veclocityOptions: '<?avAnimateOptions'
	    },
	    link: function link(scope, element) {
	
	      var loaded = false;
	
	      var hasWatch = !_angular2.default.isUndefined(scope.watch);
	      var hasEvent = !_angular2.default.isUndefined(scope.eventType);
	
	      var eventType = scope.eventType;
	
	      var onLoad = _angular2.default.isUndefined(scope.onLoad) ? !hasEvent : scope.onLoad;
	
	      var elmToBounce = element.children().length > 0 ? element.children() : element;
	
	      var animate = function animate() {
	        var velocityAnimation = scope.animation || 'transition.bounceIn';
	        var animationOptions = _angular2.default.extend({}, {
	          duration: 1000
	        }, scope.veclocityOptions);
	
	        elmToBounce.velocity(velocityAnimation, animationOptions);
	      };
	
	      if (onLoad && !hasWatch) {
	        animate();
	      }
	
	      if (!_angular2.default.isUndefined(eventType)) {
	        element.on(eventType, function () {
	          animate();
	        });
	      }
	
	      if (!_angular2.default.isUndefined(scope.watch)) {
	        scope.$watch('watch', function () {
	          if (loaded || onLoad) {
	            animate();
	          }
	          loaded = true;
	        });
	      }
	    }
	  };
	});
	
	exports.default = _module2.default;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(188);
	
	__webpack_require__(185);

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	__webpack_require__(149);
	
	__webpack_require__(150);
	
	var _template = __webpack_require__(418);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _base = __webpack_require__(28);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AvLoaderController = function (_Base) {
	  _inherits(AvLoaderController, _Base);
	
	  function AvLoaderController() {
	    _classCallCheck(this, AvLoaderController);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var _this = _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));
	
	    _this.endAnimation = function () {
	      this.av.$element.find('.loading-bullet').velocity('stop', true);
	      this.av.$element.removeData();
	    };
	
	    _this.active = false;
	    return _this;
	  }
	
	  AvLoaderController.prototype.start = function start() {
	    this.active = true;
	    this.animate();
	  };
	
	  AvLoaderController.prototype.animate = function animate() {
	
	    var self = this;
	
	    this.av.$element.find('.loading-bullet').velocity('transition.slideRightIn', { stagger: 250 }).velocity({ opacity: 0 }, {
	      delay: 750,
	      duration: 500,
	      complete: function complete() {
	        if (self.active) {
	          setTimeout(function () {
	            self.animate();
	          }, 500);
	        } else {
	          self.endAnimation();
	        }
	      }
	    });
	  };
	
	  AvLoaderController.prototype.$destroy = function $destroy() {
	    this.active = false;
	  };
	
	  AvLoaderController.prototype.$postLink = function $postLink() {
	    this.start();
	  };
	
	  return AvLoaderController;
	}(_base2.default);
	
	AvLoaderController.$inject = ['$element'];
	
	
	_module2.default.directive('avLoader', function () {
	  return {
	    restrict: 'AE',
	    replace: true,
	    controller: AvLoaderController,
	    templateUrl: _template2.default
	  };
	});
	
	exports.default = _module2.default;

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(187);

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _block = __webpack_require__(419);
	
	var _block2 = _interopRequireDefault(_block);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.constant('avBlockConfig', {
	  templateUrl: _block2.default,
	  delay: 250,
	  message: 'Loading ...',
	  autoBlock: false,
	  resetOnException: true,
	  requestFilter: _angular2.default.noop,
	  autoInjectBodyBlock: false,
	  cssClass: 'av-block av-block-anim-fade',
	  blockBrowserNavigation: false
	});

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _base = __webpack_require__(28);
	
	var _base2 = _interopRequireDefault(_base);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AvBlockContainerDirective = function (_Base) {
	  _inherits(AvBlockContainerDirective, _Base);
	
	  function AvBlockContainerDirective() {
	    _classCallCheck(this, AvBlockContainerDirective);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var _this = _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));
	
	    _this.scope = true;
	    _this.restrict = 'AE';
	
	    _this.templateUrl = _this.av.avBlockConfig.templateUrl;
	
	    return _this;
	  }
	
	  AvBlockContainerDirective.prototype.controller = function controller($scope, $element) {
	
	    var service = $element.inheritedData('av-block');
	
	    if (!service) {
	      throw new Error('No parent av-block service instance located.');
	    }
	
	    // add state to scope of this directive
	    $scope.state = service.state();
	  };
	
	  return AvBlockContainerDirective;
	}(_base2.default);
	
	AvBlockContainerDirective.$inject = ['avBlockConfig'];
	
	
	_module2.default.directive('avBlockContainer', function (avBlockConfig) {
	  return new AvBlockContainerDirective(avBlockConfig);
	});

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _utils = __webpack_require__(75);
	
	var _base = __webpack_require__(28);
	
	var _base2 = _interopRequireDefault(_base);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Inspiration from https://github.com/McNull/angular-block-ui.
	//
	//  - Need npm compatible library
	//  - Re-factor with better life-cycle hooks for starting and stopping animations
	
	var BlockController = function (_Base) {
	  _inherits(BlockController, _Base);
	
	  function BlockController() {
	    _classCallCheck(this, BlockController);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    // Expose the blockMessageClass attribute value on the scope
	    var _this = _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));
	
	    _this.av.$attrs.$observe('blockMessageClass', function (value) {
	      _this.av.$scope.$_blockMessageClass = value;
	    });
	
	    // Create the block instance
	    // Prefix underscore to prevent integers:
	    // https://github.com/McNull/angular-block-ui/pull/8
	
	    _this.instanceId = _this.av.$attrs.avBlock || '_' + _this.av.$scope.$id;
	    _this.serviceInstance = _this.av.avBlockManager.get(_this.instanceId);
	
	    // Locate the parent block instance
	    var parentInstance = _this.av.$element.inheritedData('av-block');
	
	    if (parentInstance) {
	      _this.serviceInstance._parent = parentInstance;
	    }
	
	    // Expose the state on the scope
	    _this.av.$scope.$_blockState = _this.serviceInstance.state();
	
	    _this.av.$scope.$watch('$_blockState.blocking', function (value) {
	      // Set the aria-busy attribute if needed
	      _this.av.$element.attr('aria-busy', !!value);
	      _this.av.$element.toggleClass('av-block-visible', !!value);
	    });
	
	    _this.av.$scope.$watch('$_blockState.blockCount > 0', function (value) {
	      _this.av.$element.toggleClass('av-block-active', !!value);
	    });
	
	    // If a pattern is provided assign it to the state
	    var pattern = _this.av.$attrs.blockPattern;
	
	    if (pattern) {
	      var regExp = (0, _utils.buildRegExp)(pattern);
	      _this.serviceInstance.pattern(regExp);
	    }
	
	    // Store a reference to the service instance on the element
	
	    _this.av.$element.data('av-block', _this.serviceInstance);
	
	    return _this;
	  }
	
	  BlockController.prototype.moduleLoaded = function moduleLoaded(name) {
	
	    try {
	      _angular2.default.module(name);
	    } catch (ex) {
	      return false;
	    }
	
	    return true;
	  };
	
	  BlockController.prototype.registerLocationChange = function registerLocationChange() {
	
	    this.av.$scope.$on('$locationChangeStart', function (event) {
	
	      if (this.serviceInstance.$_blockLocationChange && this.serviceInstance.state().blockCount > 0) {
	        event.preventDefault();
	      }
	    });
	
	    this.av.$scope.$on('$locationChangeSuccess', function () {
	      this.serviceInstance.$_blockLocationChange = this.serviceInstance.blockBrowserNavigation;
	    });
	  };
	
	  BlockController.prototype.blockNavigation = function blockNavigation() {
	    var _this2 = this;
	
	    if (this.av.avBlockConfig.blockBrowserNavigation) {
	
	      if (this.moduleLoaded('ngRoute')) {
	        (function () {
	
	          // After the initial content has been loaded we'll spy on any location
	          // changes and discard them when needed.
	          //
	          var fn = _this2.av.$scope.$on('$viewContentLoaded', function () {
	
	            // Unhook the view loaded and hook a function that will prevent
	            // location changes while the block is active.
	
	            fn();
	            _this2.registerLocationChange();
	          });
	        })();
	      } else {
	        this.registerLocationChange();
	      }
	    }
	  };
	
	  // Ensure the instance is released when the scope is destroyed
	
	
	  BlockController.prototype.$destroy = function $destroy() {
	    this.serviceInstance.release();
	    this.av.$element.data('av-block', null);
	  };
	
	  BlockController.prototype.$postLink = function $postLink() {
	
	    this.container = this.av.$compile('<av-block-container class="av-block-container"></av-block-container >')(this.av.$scope);
	    this.av.$element.append(this.container);
	
	    // If the element does not have the class 'av-block' set, we set the
	    // default css classes from the config.
	
	    if (!this.av.$element.hasClass('av-block')) {
	      this.av.$element.addClass(this.av.avBlockConfig.cssClass);
	    }
	  };
	
	  return BlockController;
	}(_base2.default);
	
	BlockController.$inject = ['$element', 'avBlockManager', 'avBlockConfig', '$attrs', '$scope', '$compile'];
	
	
	_module2.default.directive('avBlock', function () {
	  return {
	    scope: {},
	    restrict: 'AE',
	    controller: BlockController
	  };
	});

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(413);
	
	__webpack_require__(191);
	
	__webpack_require__(193);
	
	__webpack_require__(190);
	
	__webpack_require__(112);
	
	__webpack_require__(189);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.run(function ($document, avBlockConfig, $templateCache) {
	
	  if (avBlockConfig.autoInjectBodyBlock) {
	    $document.find('body').attr('av-block', 'main');
	  }
	
	  if (avBlockConfig.template) {
	
	    // Swap the builtin template with the custom template.
	    // Create a magic cache key and place the template in the cache.
	
	    avBlockConfig.templateUrl = '$$av-block-template$$';
	    $templateCache.put(avBlockConfig.templateUrl, avBlockConfig.template);
	  }
	});
	// import './integration';

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	__webpack_require__(112);
	
	var _utils = __webpack_require__(75);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	_module2.default.factory('avBlockManager', function ($injector) {
	  var AvBlockManager = function () {
	    function AvBlockManager() {
	      _classCallCheck(this, AvBlockManager);
	
	      this.instances = [];
	    }
	
	    AvBlockManager.prototype.get = function get(id) {
	
	      // if (!this.main) {
	      //   mainBlock.addRef();
	      //   this.main = null;
	      // }
	
	      if (!isNaN(id)) {
	        throw new Error('AvBlock id cannot be a number');
	      }
	
	      var instance = this.instances[id];
	
	      if (!instance) {
	        var AvBlock = $injector.get('AvBlock');
	        instance = this.instances[id] = new AvBlock(id);
	        this.instances.push(instance);
	      }
	
	      return instance;
	    };
	
	    AvBlockManager.prototype.destroy = function destroy(idOrInstance) {
	
	      if (_angular2.default.isString(idOrInstance)) {
	        idOrInstance = this.instances[idOrInstance];
	      }
	
	      if (idOrInstance) {
	        idOrInstance.reset();
	
	        var i = (0, _utils.indexOf)(this.instances, idOrInstance);
	        this.instances.splice(i, 1);
	
	        delete this.instances[idOrInstance.state().id];
	      }
	    };
	
	    AvBlockManager.prototype.reset = function reset() {
	      this.instances.forEach(function (instance) {
	        return instance.reset();
	      });
	    };
	
	    AvBlockManager.prototype.locate = function locate(request) {
	
	      var result = [];
	
	      // Add function wrappers that will be executed on every item
	      // in the array.
	
	      (0, _utils.forEachFnHook)(result, 'start');
	      (0, _utils.forEachFnHook)(result, 'stop');
	
	      var i = this.instances.length;
	
	      while (i--) {
	        var instance = this.instances[i];
	        var pattern = instance._pattern;
	
	        if (pattern && pattern.test(request.url)) {
	          result.push(instance);
	        }
	      }
	
	      if (result.length === 0) {
	        result.push(this.mainBlock);
	      }
	
	      return result;
	    };
	
	    return AvBlockManager;
	  }();
	
	  return new AvBlockManager();
	});

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(195);

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _spaces = __webpack_require__(420);
	
	var _spaces2 = _interopRequireDefault(_spaces);
	
	__webpack_require__(108);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.directive('avSpacesBreadcrumbs', function ($location, avSpacesResource, $log) {
	  return {
	    restrict: 'AE',
	    replace: true,
	    scope: {
	      'pageName': '@',
	      'spaceId': '@?'
	    },
	    templateUrl: _spaces2.default,
	    link: function link(scope) {
	
	      var spaceId = scope.spaceId;
	
	      function parseQuery(queryString) {
	        var query = {};
	        var a = queryString.substr(1).split('&');
	        for (var i = 0; i < a.length; i++) {
	          var b = a[i].split('=');
	          query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
	        }
	        return query;
	      }
	
	      // Find paramter in query string after hash (#)
	      if (!spaceId) {
	        spaceId = $location.search().spaceId;
	      }
	
	      // Find parameter in normal query string
	      if (!spaceId) {
	        var params = parseQuery(window.location.search);
	        spaceId = params.spaceId;
	      }
	
	      if (spaceId) {
	        avSpacesResource.get(spaceId).then(function (response) {
	          scope.spaceName = response.data.name;
	          scope.spaceId = spaceId;
	        });
	      } else {
	        $log.warn('avSpacesBreadcrumbs could NOT detect a spaceId through scope or by parsing the URL.');
	      }
	    }
	  };
	});
	
	exports.default = _module2.default;

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Options: http://bootstrap-datepicker.readthedocs.org/en/latest/options.html
	_module2.default.constant('AV_DATEPICKER', {
	  CONTROLLER: '$ngModelController',
	  ADD_ON_SELECTOR: '[data-toggle="datepicker"]',
	  OPTIONS: ['autoclose', 'beforeShowDay', 'beforeShowMonth', 'beforeShowYear', 'beforeShowDecade', 'beforeShowCentury', 'calendarWeeks', 'clearBtn', 'container', 'datesDisabled', 'daysOfWeekDisabled', 'daysOfWeekHighlighted', 'defaultViewDate', 'disableTouchKeyboard', 'enableOnReadonly', 'endDate', 'forceParse', 'assumeNearbyYear', 'format', 'immediateUpdates', 'inputs', 'keyboardNavigation', 'language', 'maxViewMode', 'minViewMode', 'multidate', 'multidateSeparator', 'orientation', 'showOnFocus', 'startDate', 'startView', 'templates', 'title', 'todayBtn', 'todayHighlight', 'toggleActive', 'weekStart', 'zIndexOffset']
	});

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _jquery = __webpack_require__(38);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _base = __webpack_require__(28);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function hasDateInput() {
	  var i = document.createElement('input');
	  i.setAttribute('type', 'date');
	  return i.type !== 'text';
	}
	
	var hasDateInputSupport = hasDateInput();
	
	// Inspiration https://github.com/mgcrea/angular-strap/blob/v0.7.8/src/directives/datepicker.js
	
	var AvDatepickerController = function (_Base) {
	  _inherits(AvDatepickerController, _Base);
	
	  function AvDatepickerController() {
	    _classCallCheck(this, AvDatepickerController);
	
	    for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    var _this = _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));
	
	    _this.hasDateInputSupport = hasDateInputSupport;
	    return _this;
	  }
	
	  AvDatepickerController.prototype.setValue = function setValue() {
	
	    var viewValue = this.ngModel.$viewValue;
	    var plugin = this.plugin();
	
	    if (!viewValue || !plugin) {
	      return;
	    }
	
	    plugin.setDate(viewValue);
	  };
	
	  AvDatepickerController.prototype.setNgModel = function setNgModel(ngModel) {
	    this.ngModel = ngModel;
	  };
	
	  AvDatepickerController.prototype.findModel = function findModel() {
	
	    var ngModel = null;
	
	    var $input = this.av.$element.find('input:first').andSelf();
	    if ($input.length) {
	      ngModel = $input.data(this.av.AV_DATEPICKER.CONTROLLER);
	      this.setNgModel(ngModel);
	    }
	
	    return ngModel;
	  };
	
	  AvDatepickerController.prototype.modelToView = function modelToView(modelValue) {
	    var viewValue = _jquery2.default.fn.datepicker.DPGlobal.formatDate(modelValue, this.options.format, 'en');
	    return viewValue;
	  };
	
	  AvDatepickerController.prototype.viewToModel = function viewToModel(viewValue) {
	
	    var plugin = this.plugin();
	
	    if (!plugin || !viewValue || viewValue === '') {
	      return null;
	    }
	
	    var format = _jquery2.default.fn.datepicker.DPGlobal.parseFormat(this.options.format);
	    var utcDate = _jquery2.default.fn.datepicker.DPGlobal.parseDate(this.ngModel.$viewValue, format, 'en');
	
	    var localDate = plugin._utc_to_local(utcDate);
	
	    return localDate;
	  };
	
	  AvDatepickerController.prototype.init = function init() {
	    var _this2 = this;
	
	    var self = this;
	
	    this.options = _angular2.default.copy(this.av.avDatepickerConfig);
	
	    Object.keys(this.av.$attrs).forEach(function (key) {
	      var value = self.av.$attrs[key];
	      var _key = key.replace('data-', '');
	      if (_this2.av.AV_DATEPICKER.OPTIONS.includes(_key)) {
	        self.options[_key] = self.av.$scope.$eval(value);
	      }
	    });
	
	    this.convertFormat();
	  };
	
	  // bootstrap-datepicker date format supports a combination of d, dd, D, DD, m, mm, M, MM, yy, yyyy.
	  // Below is the conversion table from moment.js format options to bootstrap-datepicker.
	  //
	  // Moment formatting options:
	  //
	  //  - DD => 01 02 ... 30 31
	  //  - D => 1 2 ... 30 31
	  //  - M => 1 2 ... 11 12
	  //  - MM => 01 02 ... 11 12
	  //  - MMM => Jan Feb ... Nov Dec
	  //  - MMMM => January February ... November December
	  //  - YY => 70 71 ... 29 30
	  //  -  YYYY => 1970 1971 ... 2029 2030
	  //
	  //
	  //  Table reads momment.js format => bootstrap-datepicker format
	  //
	  //  - D, DD => d, dd: Numeric date, no leading zero and leading zero, respectively. Eg, 5, 05.
	  //  - ddd, dddd => D, DD: Abbreviated and full weekday names, respectively. Eg, Mon, Monday.
	  //  - M, MM => m, mm: Numeric month, no leading zero and leading zero, respectively. Eg, 7, 07.
	  //  - MMM, MMMM => M, MM: Abbreviated and full month names, respectively. Eg, Jan, January
	  //  - YY, YYYY => yy, yyyy: 2- and 4-digit years, respectively. Eg, 12, 2012.
	  //
	
	
	  AvDatepickerController.prototype.convertFormat = function convertFormat() {
	
	    var format = this.options.format;
	
	    if (format) {
	      (function () {
	
	        // lower case everything
	        format = format.toLowerCase();
	
	        // Since we lowercased everything convert the map is slightly different than above
	        var map = { 'mmm': 'M', 'mmmm': 'MM', 'ddd': 'D', 'dddd': 'DD' };
	        var re = new RegExp(Object.keys(map).join('|'), 'gi');
	        format = format.replace(re, function (matched) {
	          return map[matched];
	        });
	      })();
	    }
	
	    this.options.format = format;
	  };
	
	  AvDatepickerController.prototype.plugin = function plugin() {
	    return this.av.$element.data('datepicker');
	  };
	
	  AvDatepickerController.prototype.destroy = function destroy() {
	    var plugin = this.plugin();
	    if (plugin) {
	      plugin.remove();
	      this.av.$element.data('datepicker', null);
	    }
	  };
	
	  AvDatepickerController.prototype.hide = function hide() {
	    var plugin = this.plugin();
	    if (plugin) {
	      plugin.hide();
	    }
	  };
	
	  return AvDatepickerController;
	}(_base2.default);
	
	AvDatepickerController.$inject = ['$element', '$attrs', 'AV_DATEPICKER', '$scope', 'avDatepickerConfig'];
	
	
	_module2.default.controller('AvDatepickerController', AvDatepickerController);

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function dateConfig($provide) {
	  // duck punch built in input validation to not date validation since it doesn't support different formats.
	  $provide.decorator('inputDirective', function ($delegate) {
	    var directive = $delegate[0];
	    var link = directive.link;
	    directive.compile = function () {
	      return {
	        pre: function pre(scope, element, attr, ctrls) {
	          if (ctrls[0] && _angular2.default.lowercase(attr.type) === 'date' && _angular2.default.isDefined(attr.avDatepicker)) {
	            // do not use the default date validation;
	          } else {
	            link.pre.apply(this, arguments);
	          }
	        }
	      };
	    };
	
	    return $delegate;
	  });
	}
	
	_module2.default.config(dateConfig);

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	__webpack_require__(425);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.directive('avDatepicker', function ($window, $log, AV_DATEPICKER) {
	  return {
	    restrict: 'A',
	    require: ['ngModel', 'avDatepicker'],
	    priority: 1,
	    controller: 'AvDatepickerController',
	    link: function link(scope, element, attrs, controllers) {
	
	      var ngModel = controllers[0];
	      var avDatepicker = controllers[1];
	
	      if (!ngModel) {
	        ngModel = avDatepicker.findModel();
	        if (!ngModel) {
	          $log.error('avDatepicker requires ngModel');
	          return;
	        }
	      }
	
	      avDatepicker.init();
	      avDatepicker.setNgModel(ngModel);
	
	      // Datepicker plugin triggers a change event on load that will read in
	      // the input value and update the Angular model shortly after.  In order
	      // to preserve model values on load, we read the model in from scope and
	      // set the input value with jQuery
	      var value = scope.$eval(attrs.ngModel);
	      if (value) {
	        var viewValue = avDatepicker.modelToView(value);
	        element.val(viewValue);
	      }
	
	      ngModel.$parsers.push(avDatepicker.viewToModel.bind(avDatepicker));
	      ngModel.$formatters.push(avDatepicker.modelToView.bind(avDatepicker));
	
	      var _$render = ngModel.$render;
	      ngModel.$render = function () {
	        _$render();
	        avDatepicker.setValue();
	      };
	
	      var win = _angular2.default.element($window);
	
	      win.bind('scroll', function () {
	        avDatepicker.hide();
	      });
	
	      var target = element.siblings(AV_DATEPICKER.ADD_ON_SELECTOR);
	      target = target.length ? target : element.siblings(AV_DATEPICKER.ADD_ON_SELECTOR.replace('data-', ''));
	      if (target.length) {
	        target.on('click.datepicker', function () {
	          if (!element.prop('disabled')) {
	            // Hack check for IE 8
	            element.focus();
	          }
	        });
	      }
	
	      scope.$on('destroy', function () {
	        avDatepicker.destroy();
	        if (target.length) {
	          target.off('click.datepicker');
	        }
	      });
	
	      scope.$evalAsync(function () {
	        var options = _extends({}, avDatepicker.options);
	        element.datepicker(options);
	      });
	    }
	  };
	});
	
	exports.default = _module2.default;

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(198);
	
	__webpack_require__(196);
	
	__webpack_require__(201);
	
	__webpack_require__(197);
	
	__webpack_require__(199);
	
	__webpack_require__(414);

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var config = {
	  autoclose: true,
	  todayHighlight: true,
	  format: 'MM/DD/YYYY',
	  forceParse: false
	};
	
	var AvDatepickerConfig = function () {
	  function AvDatepickerConfig() {
	    _classCallCheck(this, AvDatepickerConfig);
	  }
	
	  AvDatepickerConfig.prototype.set = function set(options) {
	    _extends(config, options);
	  };
	
	  AvDatepickerConfig.prototype.$get = function $get() {
	    return _angular2.default.copy(config);
	  };
	
	  return AvDatepickerConfig;
	}();
	
	_module2.default.provider('avDatepickerConfig', AvDatepickerConfig);

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _base = __webpack_require__(28);
	
	var _base2 = _interopRequireDefault(_base);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AvDimmerController = function (_Base) {
	  _inherits(AvDimmerController, _Base);
	
	  function AvDimmerController() {
	    _classCallCheck(this, AvDimmerController);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var _this = _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));
	
	    _this.config = _angular2.default.extend({}, _this.av.avDimmerConfig, _this.av.$scope.avDimmerConfig || {});
	    return _this;
	  }
	
	  AvDimmerController.prototype.show = function show() {
	    this.av.$element.find(this.config.overlaySelector).velocity('stop', true).velocity(this.config.showAnimation, this.config.animationConfig);
	  };
	
	  AvDimmerController.prototype.hide = function hide() {
	    this.av.$element.find(this.config.overlaySelector).velocity(this.config.hideAnimation, this.config.animationConfig);
	  };
	
	  AvDimmerController.prototype.createListeners = function createListeners() {
	    this.av.$element.on(this.config.showEvent, this.show.bind(this));
	    this.av.$element.on(this.config.hideEvent, this.hide.bind(this));
	  };
	
	  AvDimmerController.prototype.destroyListeners = function destroyListeners() {
	    this.av.$element.off(this.config.showEvent, this.show.bind(this));
	    this.av.$element.off(this.config.hideEvent, this.hide.bind(this));
	  };
	
	  AvDimmerController.prototype.$onChanges = function $onChanges(changesObj) {
	    if (changesObj && changesObj.avDimmerConfig) {
	      var newConfig = _angular2.default.extend({}, this.av.avDimmerConfig, changesObj.avDimmerConfig.currentValue);
	
	      var resetListeners = !_angular2.default.equals(this.config.showEvent, newConfig.showEvent) || !_angular2.default.equals(this.config.hideEvent, newConfig.hideEvent);
	
	      if (resetListeners) {
	        this.destroyListeners();
	      }
	
	      this.config = newConfig;
	
	      if (resetListeners) {
	        this.createListeners();
	      }
	    }
	  };
	
	  AvDimmerController.prototype.$onInit = function $onInit() {
	    this.createListeners();
	  };
	
	  AvDimmerController.prototype.$destroy = function $destroy() {
	    this.destroyListeners();
	  };
	
	  return AvDimmerController;
	}(_base2.default);
	
	AvDimmerController.$inject = ['$scope', '$element', 'avDimmerConfig'];
	exports.default = AvDimmerController;

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _controller = __webpack_require__(202);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.directive('avDimmer', function () {
	  return {
	    restrict: 'AE',
	    scope: {
	      avDimmerConfig: '<?'
	    },
	    controller: _controller2.default
	  };
	});
	
	exports.default = _module2.default;

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(415);
	
	__webpack_require__(205);
	
	__webpack_require__(203);

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CONFIG = {
	  animationConfig: {
	    duration: 250
	  },
	  showAnimation: 'transition.fadeIn',
	  showEvent: 'mouseenter',
	  hideAnimation: 'transition.fadeOut',
	  hideEvent: 'mouseleave',
	  overlaySelector: '.dimmer-content'
	};
	
	var AvDimmerConfig = function () {
	  function AvDimmerConfig() {
	    _classCallCheck(this, AvDimmerConfig);
	
	    this.options = CONFIG;
	  }
	
	  AvDimmerConfig.prototype.get = function get() {
	    return _angular2.default.copy(this.options);
	  };
	
	  AvDimmerConfig.prototype.set = function set(options) {
	    _angular2.default.extend(this.options, options);
	  };
	
	  AvDimmerConfig.prototype.$get = function $get() {
	    return _angular2.default.copy(this.options);
	  };
	
	  return AvDimmerConfig;
	}();
	
	_module2.default.provider('avDimmerConfig', AvDimmerConfig);
	
	exports.default = _module2.default;

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(38);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(426);
	
	__webpack_require__(113);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import angular from 'angular';
	_module2.default.directive('avDropdown', function ($timeout) {
	
	  return {
	    restrict: 'A',
	    priority: 10, // select directive priority is 1
	    require: ['ngModel', 'avDropdown'],
	    controller: 'AvDropdownController',
	    link: function link(scope, element, attrs, controllers) {
	
	      element.addClass('select2');
	
	      var ngModel = controllers[0];
	      var avDropdown = controllers[1];
	
	      avDropdown.init({
	        ngModel: ngModel
	      });
	
	      if (attrs.ngOptions) {
	        avDropdown.ngOptions();
	      }
	
	      ngModel.$parsers.push(function (value) {
	
	        var parent = element.prev();
	        parent.toggleClass('ng-invalid', !ngModel.$valid).toggleClass('ng-valid', ngModel.$valid).toggleClass('ng-invalid-required', !ngModel.$valid).toggleClass('ng-valid-required', ngModel.$valid).toggleClass('ng-dirty', ngModel.$dirty).toggleClass('ng-pristine', ngModel.$pristine);
	        return value;
	      });
	
	      element.on('change', function (e) {
	
	        // special case since the ajax handling doesn't bind to the model correctly
	        // this has to do with select2 (v3.5.2) using a hidden field instead of a select for ajax
	        if (avDropdown.options.query) {
	
	          $timeout(function () {
	            if (avDropdown.isRemoteMultiple()) {
	              avDropdown.setRemoteViewValue(e);
	            } else {
	              avDropdown.setViewValue(e);
	            }
	          }, false, 0);
	        }
	      });
	
	      var _$render = ngModel.$render;
	      ngModel.$render = function () {
	        _$render();
	        avDropdown.setValue();
	      };
	
	      if (attrs.ngFocus) {
	        element.on('select2-focus', function () {
	          scope.$eval(scope.$eval(attrs.ngFocus));
	        });
	      }
	
	      if (attrs.ngBlur) {
	        element.on('select2-blur', function () {
	          scope.$eval(scope.$eval(attrs.ngBlur));
	        });
	      }
	
	      // https://github.com/t0m/select2-bootstrap-css/issues/37#issuecomment-42714589
	      element.on('select2-open', function () {
	
	        // look for .has-success, .has-warning, .has-error
	        // (really look for .has-* … might interfere with other CSS-classes starting with "has-")
	        if (element.parents('[class*="has-"]').length) {
	
	          // get all CSS-classes from the element where we found "has-*" and collect them in an array
	          var classNames = (0, _jquery2.default)(this).parents('[class*="has-"]')[0].className.split(/\s+/);
	
	          // go through the class names, find "has-"
	          for (var i = 0; i < classNames.length; ++i) {
	            if (classNames[i].match('has-')) {
	              (0, _jquery2.default)('#select2-drop').addClass(classNames[i]);
	            }
	          }
	        }
	      });
	
	      if (avDropdown.options.closeOnResize) {
	
	        (0, _jquery2.default)(window).on('resize.select2', function () {
	          element.select2('close');
	        });
	      }
	
	      attrs.$observe('disabled', function (value) {
	        element.select2('enable', !value);
	      });
	
	      attrs.$observe('readonly', function (value) {
	        element.select2('readonly', !!value);
	      });
	
	      scope.$on('$destroy', function () {
	        (0, _jquery2.default)(window).off('resize.select2');
	        element.select2('destroy');
	      });
	
	      $timeout(function () {
	        element.select2(avDropdown.options);
	      });
	    }
	  };
	});

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(114);
	
	__webpack_require__(206);
	
	__webpack_require__(113);
	
	__webpack_require__(208);

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SelectResourceFactory = function SelectResourceFactory(AvApiResource) {
	  var AvSelectResource = function (_AvApiResource) {
	    _inherits(AvSelectResource, _AvApiResource);
	
	    function AvSelectResource(options) {
	      _classCallCheck(this, AvSelectResource);
	
	      return _possibleConstructorReturn(this, _AvApiResource.call(this, options));
	    }
	
	    AvSelectResource.prototype.onQuery = function onQuery(data) {
	      var _this2 = this;
	
	      var config = this.getConfig(data);
	
	      return this.query(config).then(function (response) {
	
	        var results = _this2.getResults(response.data);
	        results = _this2.mapResults(results);
	
	        return _this2.getResponse(response, results);
	      });
	    };
	
	    AvSelectResource.prototype.getConfig = function getConfig(data) {
	
	      // config for the api resource query
	      var config = {
	        params: {}
	      };
	
	      config.params.offset = this.getOffset(data);
	
	      if (data.term) {
	        config.params[this.getQueryParam()] = data.term;
	      }
	
	      return config;
	    };
	
	    AvSelectResource.prototype.getOffset = function getOffset(data) {
	      var offset = void 0;
	      if (data.page) {
	        offset = this.getPageSize() * (data.page - 1);
	      }
	      if (data.offset) {
	        offset = data.offset;
	      }
	      return offset;
	    };
	
	    AvSelectResource.prototype.getQueryParam = function getQueryParam() {
	      return 'q';
	    };
	
	    AvSelectResource.prototype.getResponse = function getResponse(response, results) {
	
	      // Calculate if we want to continue searching.
	      // True if more results are available for the current search term
	      var more = response.data.offset < response.data.totalCount - response.data.limit;
	
	      return {
	        more: more,
	        results: results
	      };
	    };
	
	    AvSelectResource.prototype.getResult = function getResult() /* item */{
	      // return  item.code;
	      throw new Error('getResult() must be implemented when extending from AvSelectResource');
	    };
	
	    // Format the collection items for Select2:
	    //
	    //    http://select2.github.io/select2/#documentation
	    //
	    //    The default renderers expect objects with `id` and `text` keys.
	    //    The id property is required, even if custom renderers are used.
	    //    The object may also contain a children key if hierarchical data is displayed.
	    //    The object may also contain a disabled boolean property indicating whether this result can be selected.
	    //
	
	
	    AvSelectResource.prototype.mapResults = function mapResults(results) {
	      var _this3 = this;
	
	      if (results && (!results[0].id || !results[0].text)) {
	
	        results = results.map(function (item) {
	          var _mapResult = _this3.mapResult(item),
	              id = _mapResult.id,
	              text = _mapResult.text;
	
	          item.id = id;
	          item.text = text;
	          return item;
	        });
	      }
	
	      return results;
	    };
	
	    // Result:
	    //
	    // {
	    //   "code": "252Y00000X",
	    //   "value": "AGENCIES,EARLY INTERVENTION PROVIDER AGENCY,NOT APPLICABLE|Agency",
	    //   "id": "252Y00000X"
	    // }
	
	
	    AvSelectResource.prototype.getId = function getId(result) {
	      return result.id;
	    };
	
	    AvSelectResource.prototype.initSelection = function initSelection(element, callback) {
	      callback(null);
	    };
	
	    AvSelectResource.prototype.getResults = function getResults() /* response */{
	      // EX:
	      //  return response.data.codes
	      throw new Error('getResults() must be implemented when extending from AvSelectResource');
	    };
	
	    AvSelectResource.prototype.getPageSize = function getPageSize() {
	      return 50;
	    };
	
	    return AvSelectResource;
	  }(AvApiResource);
	
	  return AvSelectResource;
	};
	
	_module2.default.factory('AvSelectResource', SelectResourceFactory);
	
	exports.default = _module2.default;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(183);
	
	__webpack_require__(186);
	
	__webpack_require__(192);
	
	__webpack_require__(200);
	
	__webpack_require__(204);
	
	__webpack_require__(207);
	
	__webpack_require__(210);
	
	__webpack_require__(215);
	
	__webpack_require__(194);
	
	__webpack_require__(211);
	
	__webpack_require__(216);
	
	__webpack_require__(220);
	
	__webpack_require__(226);
	
	__webpack_require__(117);
	
	__webpack_require__(230);
	
	__webpack_require__(417);

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.constant('AV_MASK', {
	  date: '99/99/9999',
	  phone: '(999) 999-9999',
	  ssn: '999-99-9999'
	});

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(213);
	
	__webpack_require__(116);
	
	__webpack_require__(115);

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	_module2.default.factory('avModalManager', function () {
	  var AvModalManager = function () {
	    function AvModalManager() {
	      _classCallCheck(this, AvModalManager);
	
	      this.instances = [];
	    }
	
	    AvModalManager.prototype.add = function add(id) {
	      this.instances.push(id);
	    };
	
	    AvModalManager.prototype.remove = function remove(id) {
	      this.instances = this.instances.filter(function (instance) {
	        return instance !== id;
	      });
	    };
	
	    AvModalManager.prototype.closeAll = function closeAll() {
	
	      this.instances.forEach(function (id) {
	
	        var $el = _angular2.default.element(document.getElementById(id));
	
	        if (!$el) {
	          return;
	        }
	
	        var bsModal = $el.data('bs.modal');
	        if (bsModal) {
	          bsModal.removeBackdrop();
	          bsModal.$body.removeClass('modal-open');
	          bsModal.resetAdjustments();
	          bsModal.resetScrollbar();
	        }
	
	        var avModal = $el.data('AvModal');
	        if (avModal) {
	          avModal.destroy();
	        }
	      });
	    };
	
	    return AvModalManager;
	  }();
	
	  return new AvModalManager();
	});

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _lodash = __webpack_require__(37);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	__webpack_require__(117);
	
	__webpack_require__(115);
	
	__webpack_require__(116);
	
	__webpack_require__(212);
	
	var _utils = __webpack_require__(48);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ModalFactory = function ModalFactory($rootScope, $timeout, $compile, $controller, $log, AV_MODAL, avTemplateCache, $q, avModalManager) {
	  var Modal = function () {
	    function Modal(options) {
	      _classCallCheck(this, Modal);
	
	      var self = this;
	
	      this.templateDefer = $q.defer();
	      this.templatePromise = this.templateDefer.promise;
	
	      this.options = this.buildOptions(options);
	
	      avTemplateCache.get(options).then(function (_template) {
	        self.options.template = _template;
	        self.build();
	      });
	    }
	
	    Modal.create = function create(options) {
	      return new Modal(options);
	    };
	
	    Modal.prototype.buildOptions = function buildOptions(userOptions) {
	
	      var options = _angular2.default.extend({}, AV_MODAL.OPTIONS, userOptions);
	
	      options.scope = options.scope || $rootScope.$new();
	
	      if (options.controller) {
	
	        var locals = _angular2.default.extend({ $scope: options.scope }, options.locals);
	        var controller = $controller(options.controller, locals);
	
	        if (options.controllerAs) {
	          if (options.scope[options.controllerAs]) {
	            $log.warn('Overwriting ' + options.controllerAs + 'on scope with AvModal controllerAs, consider passing in no scope, or specifying a different controllerAs than the existing controller');
	          }
	          options.scope[options.controllerAs] = controller;
	        }
	      }
	      return options;
	    };
	
	    Modal.prototype.build = function build() {
	      var _this = this;
	
	      var scope = this.options.scope;
	      this.$element = _angular2.default.element(this.options.template);
	
	      this.createId();
	
	      this.scope();
	
	      $compile(this.$element)(scope);
	
	      $timeout(function () {
	        _this.init();
	      }, 0, true);
	
	      // Append to container or <body>
	      this.options.container ? this.$element.appendTo(this.options.container) : this.$element.appendTo('body');
	    };
	
	    Modal.prototype.init = function init() {
	
	      this.$element.data('AvModal', this);
	
	      this.templateDefer.resolve(true);
	
	      this.listeners();
	
	      // Initialize Bootstrap jQuery plugin
	      this.$element.modal({
	        'backdrop': this.options.backdrop,
	        'keyboard': this.options.keyboard,
	        'show': false,
	        'remote': this.options.remote
	      });
	
	      if (_lodash2.default.isUndefined(this.options.show) || this.options.show) {
	        this.$element.modal('show');
	      }
	    };
	
	    // Add helpers to scope so clients can call internal methods
	
	
	    Modal.prototype.scope = function scope() {
	
	      var self = this;
	      var scope = this.options.scope;
	
	      scope.modalShow = function () {
	        return self.show();
	      };
	
	      scope.modalToggle = function () {
	        return self.toggle();
	      };
	
	      scope.modalHide = function () {
	        return self.hide();
	      };
	    };
	
	    Modal.prototype.listeners = function listeners() {
	
	      var self = this;
	      var scope = this.options.scope;
	      var $element = this.$element;
	
	      this.animationShowDefer = $q.defer();
	      this.animationHideDefer = $q.defer();
	
	      $element.on(AV_MODAL.BS_EVENTS.SHOW, function (event) {
	        scope.$emit(AV_MODAL.EVENTS.SHOW, event, self);
	      });
	
	      $element.on(AV_MODAL.BS_EVENTS.SHOWN, function (event) {
	
	        if (_angular2.default.isFunction(self.options.onShown)) {
	          self.options.onShown();
	        }
	
	        self.animationShowDefer.resolve(true);
	
	        scope.$emit(AV_MODAL.EVENTS.SHOWN, event, self);
	      });
	
	      $element.on(AV_MODAL.BS_EVENTS.HIDE, function (event) {
	        scope.$emit(AV_MODAL.EVENTS.HIDE, event, self);
	      });
	
	      $element.on(AV_MODAL.BS_EVENTS.HIDDEN, function (event) {
	
	        if (_angular2.default.isFunction(self.options.onHidden)) {
	          self.options.onHidden.call(this);
	        }
	
	        self.animationHideDefer.resolve(true);
	        scope.$emit(AV_MODAL.EVENTS.HIDDEN, event, self);
	
	        scope.$evalAsync(function () {
	          self.destroy();
	        });
	      });
	
	      // Garbage collection
	      scope.$on('$destroy', function () {
	        avModalManager.remove(self.id);
	        self.destroy();
	      });
	    };
	
	    Modal.prototype.show = function show() {
	      var _this2 = this;
	
	      this.animationShowDefer = $q.defer();
	
	      this.templatePromise.then(function () {
	        _this2.isShown() ? _this2.animationShowDefer.resolve(true) : _this2.$element.modal('show');
	      });
	
	      return this.animationShowDefer.promise;
	    };
	
	    Modal.prototype.hide = function hide() {
	      var _this3 = this;
	
	      this.animationHideDefer = $q.defer();
	
	      this.templatePromise.then(function () {
	        !_this3.isShown() ? _this3.animationHideDefer.resolve(true) : _this3.$element.modal('hide');
	      });
	
	      return this.animationHideDefer.promise;
	    };
	
	    Modal.prototype.isShown = function isShown() {
	      return this.$element.data(AV_MODAL.NAMESPACE.MODAL).isShown;
	    };
	
	    Modal.prototype.toggle = function toggle() {
	      var _this4 = this;
	
	      return this.templatePromise.then(function () {
	        return _this4.isShown() ? _this4.hide() : _this4.show();
	      });
	    };
	
	    Modal.prototype.destroy = function destroy() {
	      var _this5 = this;
	
	      return this.templatePromise.then(function () {
	        _this5.$element.data('AvModal', null);
	        _this5.$element.remove();
	      });
	    };
	
	    Modal.prototype.createId = function createId() {
	      // Create a unique id for the modal if not present or passed in via options
	      var id = this.$element.attr('id');
	      if (!id) {
	        // Get id from options or create a unique id
	        id = this.options.id ? this.options.id : (0, _utils.uuid)('av-modal-id');
	        this.$element.attr('id', id);
	      }
	
	      this.id = id;
	
	      avModalManager.add(id);
	    };
	
	    return Modal;
	  }();
	
	  return Modal;
	};
	
	_module2.default.factory('AvModal', ModalFactory);

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	__webpack_require__(416);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AvHidePermissionController = function () {
	  function AvHidePermissionController($element, avUserAuthorizations) {
	    _classCallCheck(this, AvHidePermissionController);
	
	    this.$element = $element;
	    this.avUserAuthorizations = avUserAuthorizations;
	  }
	
	  AvHidePermissionController.prototype.$onInit = function $onInit() {
	    this.$element.hide();
	  };
	
	  AvHidePermissionController.prototype.$onChanges = function $onChanges(changed) {
	    var _this = this;
	
	    var permissions = changed.avHidePermission.currentValue;
	
	    if (!_angular2.default.isArray(permissions)) {
	      permissions = ('' + permissions).split(/\s+/);
	    }
	
	    this.avUserAuthorizations.isAnyAuthorized(permissions).then(function (isAuthorized) {
	      return _this.onSuccess(isAuthorized);
	    }, function () {
	      return _this.onError();
	    });
	  };
	
	  AvHidePermissionController.prototype.onSuccess = function onSuccess(isAuthorized) {
	    if (isAuthorized) {
	      this.$element.removeClass('ng-hide');
	      this.$element.show();
	    } else {
	      this.$element.remove();
	    }
	  };
	
	  AvHidePermissionController.prototype.onError = function onError() {
	    this.$element.remove();
	  };
	
	  return AvHidePermissionController;
	}();
	
	_module2.default.directive('avHidePermission', function () {
	  return {
	    restrict: 'A',
	    controller: AvHidePermissionController,
	    scope: {},
	    bindToController: {
	      avHidePermission: '<' // array or comma delimited supported
	    },
	    controllerAs: 'vm'
	  };
	});

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(214);

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.requires.push('ng.shims.placeholder');
	
	_module2.default.config(function ($provide) {
	
	  $provide.decorator('placeholderDirective', function ($delegate, $log) {
	
	    var directive = $delegate[0];
	    var originalLink = directive.link;
	
	    var newLink = function newLink(scope, element, attrs) {
	
	      if (originalLink && Object.keys(attrs).indexOf('avMask') > -1) {
	        $log.info('placeholder shim not running on an element due to avMask on same element');
	      } else if (originalLink) {
	        originalLink.apply(this, arguments);
	      }
	    };
	
	    directive.compile = function () {
	      return newLink;
	    };
	
	    return $delegate;
	  });
	});

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.constant('AV_POPOVER', {
	  NAME: 'bs.popover'
	});

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AvPopoverController = function () {
	  function AvPopoverController($element, $scope, AV_POPOVER, $timeout, avPopoverConfig) {
	    _classCallCheck(this, AvPopoverController);
	
	    this.di = { $element: $element, $scope: $scope, AV_POPOVER: AV_POPOVER, $timeout: $timeout };
	    this.options = _extends({}, avPopoverConfig);
	  }
	
	  AvPopoverController.prototype.listeners = function listeners() {
	    var _this = this;
	
	    ['show', 'shown', 'hide', 'hidden'].forEach(function (name) {
	      _this.di.$element.on(name + '.bs.popover', function (ev) {
	        return _this.di.$scope.$emit('av:popover:' + name, ev);
	      });
	    });
	
	    this.di.$scope.$on('$destroy', this.destroy.bind(this));
	  };
	
	  AvPopoverController.prototype.plugin = function plugin() {
	    return this.di.$element.data(this.di.AV_POPOVER.NAME);
	  };
	
	  AvPopoverController.prototype.show = function show() {
	    this.di.$element.popover('show');
	  };
	
	  AvPopoverController.prototype.hide = function hide() {
	    this.di.$element.popover('hide');
	  };
	
	  AvPopoverController.prototype.toggle = function toggle() {
	    this.di.$element.popover('toggle');
	  };
	
	  AvPopoverController.prototype.destroy = function destroy() {
	    this.di.$element.popover('destroy');
	  };
	
	  AvPopoverController.prototype.init = function init() {
	    this.listeners();
	
	    if (this.di.$scope.show) {
	
	      // give the UI a chance to settle first.
	      this.di.$timeout(this.show.bind(this), 0, false);
	
	      if (this.di.$scope.delay && this.di.$scope.delay.hide) {
	        this.di.$timeout(this.hide.bind(this), this.di.$scope.delay.hide, false);
	        return;
	      }
	
	      // If no delay is found or cannot be parsed, set a default timeout so that the popover doesn't stick around forever
	      this.di.$timeout(this.hide.bind(this), this.options.showDelay, false);
	    }
	  };
	
	  return AvPopoverController;
	}();
	
	_module2.default.controller('AvPopoverController', AvPopoverController);

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.directive('avPopover', function () {
	  return {
	    restrict: 'A',
	    controller: 'AvPopoverController',
	    scope: {
	      show: '=',
	      delay: '='
	    },
	    link: function link(scope, element, attrs, avPopover) {
	
	      var options = {};
	
	      scope.$evalAsync(function () {
	        element.popover(_angular2.default.extend({}, options, {
	          html: true
	        }));
	        avPopover.init();
	      });
	    }
	  };
	});

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(217);
	
	__webpack_require__(221);
	
	__webpack_require__(218);
	
	__webpack_require__(219);

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var config = {
	  showDelay: 10000
	};
	
	var AvPopoverConfig = function () {
	  function AvPopoverConfig() {
	    _classCallCheck(this, AvPopoverConfig);
	  }
	
	  AvPopoverConfig.prototype.set = function set(options) {
	    _extends(config, options);
	  };
	
	  AvPopoverConfig.prototype.$get = function $get() {
	    return _extends({}, config);
	  };
	
	  return AvPopoverConfig;
	}();
	
	_module2.default.provider('avPopoverConfig', AvPopoverConfig);

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var inlineHelp = {
	  template: function template($element, $attrs) {
	    return '\n      <span class="inline-help"\n        av-tooltip\n        placement="top"\n        trigger="hover"\n        title="' + $attrs.title + '"\n        >\n        What\'s this\n      </span>\n      ';
	  }
	};
	
	_module2.default.component('inlineHelp', inlineHelp);

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.constant('AV_TOOLTIP', {
	  NAME: 'bs.tooltip'
	});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AvTooltipController = function () {
	  function AvTooltipController($element, $scope, AV_TOOLTIP, $timeout, avTooltipConfig) {
	    _classCallCheck(this, AvTooltipController);
	
	    this.di = { $element: $element, $scope: $scope, AV_TOOLTIP: AV_TOOLTIP, $timeout: $timeout };
	    this.options = _extends({}, avTooltipConfig);
	  }
	
	  AvTooltipController.prototype.listeners = function listeners() {
	    var _this = this;
	
	    ['show', 'shown', 'hide', 'hidden'].forEach(function (name) {
	      _this.di.$element.on(name + '.bs.tooltip', function (ev) {
	        return _this.di.$scope.$emit('av:tooltip:' + name, ev);
	      });
	    });
	
	    this.di.$scope.$on('$destroy', this.destroy.bind(this));
	  };
	
	  AvTooltipController.prototype.plugin = function plugin() {
	    return this.di.$element.data(this.di.AV_TOOLTIP.NAME);
	  };
	
	  AvTooltipController.prototype.show = function show() {
	    this.di.$element.tooltip('show');
	  };
	
	  AvTooltipController.prototype.hide = function hide() {
	    this.di.$element.tooltip('hide');
	  };
	
	  AvTooltipController.prototype.toggle = function toggle() {
	    this.di.$element.tooltip('toggle');
	  };
	
	  AvTooltipController.prototype.destroy = function destroy() {
	    this.di.$element.tooltip('destroy');
	  };
	
	  AvTooltipController.prototype.init = function init() {
	    this.listeners();
	
	    if (this.di.$scope.show) {
	
	      // give the UI a chance to settle first.
	      this.di.$timeout(this.show.bind(this), 0, false);
	
	      if (this.di.$scope.delay && this.di.$scope.delay.hide) {
	        this.di.$timeout(this.hide.bind(this), this.di.$scope.delay.hide, false);
	        return;
	      }
	
	      // If no delay is found or cannot be parsed, set a default timeout so that the tooltip doesn't stick around forever
	      this.di.$timeout(this.hide.bind(this), this.options.showDelay, false);
	    }
	  };
	
	  return AvTooltipController;
	}();
	
	_module2.default.controller('AvTooltipController', AvTooltipController);

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(3);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_module2.default.directive('avTooltip', function () {
	  return {
	    restrict: 'A',
	    controller: 'AvTooltipController',
	    scope: {
	      show: '=',
	      delay: '='
	    },
	    link: function link(scope, element, attrs, avTooltip) {
	
	      var options = {};
	
	      scope.$evalAsync(function () {
	        element.tooltip(_angular2.default.extend({}, options, {
	          html: true
	        }));
	        avTooltip.init();
	      });
	    }
	  };
	});

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(223);
	
	__webpack_require__(227);
	
	__webpack_require__(224);
	
	__webpack_require__(225);
	
	__webpack_require__(222);

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var config = {
	  showDelay: 10000
	};
	
	var AvTooltipConfig = function () {
	  function AvTooltipConfig() {
	    _classCallCheck(this, AvTooltipConfig);
	  }
	
	  AvTooltipConfig.prototype.set = function set(options) {
	    _extends(config, options);
	  };
	
	  AvTooltipConfig.prototype.$get = function $get() {
	    return _extends({}, config);
	  };
	
	  return AvTooltipConfig;
	}();
	
	_module2.default.provider('avTooltipConfig', AvTooltipConfig);

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	var _base = __webpack_require__(28);
	
	var _base2 = _interopRequireDefault(_base);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AvValContainerController = function (_Base) {
	  _inherits(AvValContainerController, _Base);
	
	  function AvValContainerController() {
	    _classCallCheck(this, AvValContainerController);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _possibleConstructorReturn(this, _Base.call.apply(_Base, [this].concat(args)));
	  }
	
	  AvValContainerController.prototype.message = function message(context) {
	    var _this2 = this;
	
	    var ngModel = context.ngModel;
	
	
	    var message = null;
	    var violations = Object.keys(ngModel.$error);
	    if (violations.length) {
	      var validator = violations[0];
	      var constraint = ngModel.$validators[validator] && ngModel.$validators[validator].constraint;
	      if (constraint) {
	        message = constraint.message;
	      } else {
	        message = this.av.AV_UI.FALLBACK_VALIDATION_MESSAGE;
	      }
	    } else {
	      message = null;
	    }
	
	    // $timeout is needed to update the UI from $broadcast events
	    this.av.$timeout(function () {
	      _this2.av.$scope.vm.message = _this2.av.$sce.trustAsHtml(message);
	    });
	  };
	
	  return AvValContainerController;
	}(_base2.default);
	
	AvValContainerController.$inject = ['$sce', '$scope', '$timeout', 'AV_UI'];
	
	
	_module2.default.directive('avValContainer', function () {
	  return {
	    restrict: 'A',
	    controller: AvValContainerController,
	    template: '<p class="help-block" data-ng-bind-html="vm.message"></p>',
	    replace: true,
	    scope: {},
	
	    link: function link(scope) {
	      scope.vm = { message: null, id: null };
	    }
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _module = __webpack_require__(2);
	
	var _module2 = _interopRequireDefault(_module);
	
	__webpack_require__(73);
	
	__webpack_require__(58);
	
	__webpack_require__(119);
	
	__webpack_require__(120);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AvValController = function () {
	  function AvValController($scope) {
	    _classCallCheck(this, AvValController);
	
	    this.ngForm = null;
	    this.rulesSchema = null;
	    this.avValOn = null;
	    this.avValDebounce = null;
	    this.avValInvalid = false;
	    this.di = { $scope: $scope };
	  }
	
	  AvValController.prototype.init = function init(options) {
	    _extends(this, options);
	  };
	
	  AvValController.prototype.reset = function reset() {
	    this.ngForm.$setPristine();
	    this.ngForm.$setUntouched();
	    this.ngForm.$submitted = false;
	  };
	
	  return AvValController;
	}();
	
	_module2.default.controller('AvValFormController', AvValController);
	
	// $pristine - True if user has not interacted with the form yet.
	// $dirty - True if user has already interacted with the form.
	// $valid - True if all of the containing forms and controls are valid.
	// $invalid - True if at least one containing control or form is invalid.
	// $pending - True if at least one containing control or form is pending.
	// $submitted - True if user has submitted the form even if its invalid.
	//
	_module2.default.directive('avValForm', function ($log, $timeout, $parse, AV_VAL, avValAdapter, $rootScope) {
	  return {
	
	    restrict: 'A',
	    priority: 10,
	    require: ['form', 'avValForm'],
	    controller: 'AvValFormController',
	    compile: function compile() {
	      return {
	        pre: function pre(scope, iEl, iAttrs, controllers) {
	
	          var ruleFn = $parse(iAttrs.avValForm);
	          var rulesSchema = ruleFn(scope);
	
	          var ngForm = controllers[0];
	          var avForm = controllers[1];
	
	          rulesSchema = rulesSchema || iAttrs.avValForm; // interpolated rule from scope || fixed string
	
	          if (!rulesSchema) {
	            $log.error('avValForm requires a rules schema in order to run a set of validation rules');
	            return;
	          }
	
	          scope.$watch(ruleFn, function (_rulesSchema, _oldRulesSchema) {
	
	            if (_rulesSchema !== _oldRulesSchema) {
	              $timeout(function () {
	                $rootScope.$broadcast(AV_VAL.EVENTS.REVALIDATE);
	              });
	            }
	          });
	
	          // Allow form attributes to define the validation behavior of the form fields
	          // inside it.  If `av-val-on` or `av-val-debounce` are on the form then all form
	          // fields inside the form would inherit this behavior.
	          avForm.avValOn = iAttrs.avValOn || null;
	          avForm.avValDebounce = iAttrs.avValDebounce || null;
	          // Allows fields to update with invalid data for dirty form saving
	          avForm.avValInvalid = iAttrs.avValInvalid || false;
	
	          avForm.init({
	            ngForm: ngForm,
	            rulesSchema: rulesSchema
	          });
	        },
	        post: function post(scope, el, iAttrs, controllers) {
	
	          // Prevent HTML5 validation from kicking in
	          el.attr('novalidate', 'novalidate');
	
	          // Disable ng-submit or ng-click handlers and store the function to call for submitting
	          var fn = void 0;
	          if (iAttrs.ngSubmit) {
	            // Disable ng-submit event
	            el.off('submit');
	            fn = $parse(iAttrs.ngSubmit, null, true);
	          } else if (iAttrs.ngClick) {
	            // Disable ng-click event
	            el.off('click');
	            fn = $parse(iAttrs.ngClick, null, true);
	          }
	
	          var ngForm = controllers[0];
	          var avForm = controllers[1];
	
	          scope.$on(AV_VAL.EVENTS.RESET, function () {
	            avForm.reset();
	          });
	
	          var watcher = function watcher() {
	            return ngForm.$pending;
	          };
	          var unwatch = void 0;
	
	          el.bind('submit', function (event) {
	
	            scope.$broadcast(AV_VAL.EVENTS.SUBMITTED);
	            ngForm.$setSubmitted();
	
	            if (ngForm.$invalid || ngForm.$pending) {
	
	              event.preventDefault();
	              event.stopImmediatePropagation();
	              scope.$broadcast(event);
	
	              if (ngForm.$pending) {
	
	                unwatch = scope.$watch(watcher, function (pending) {
	                  if (!pending) {
	                    avValAdapter.scroll(el);
	                  }
	                });
	              } else {
	                avValAdapter.scroll(el);
	              }
	
	              return;
	            }
	
	            ngForm.$setPristine();
	
	            if (!fn) {
	              return;
	            }
	
	            var callback = function callback() {
	              fn(scope, { $event: event });
	            };
	
	            scope.$apply(callback);
	          });
	
	          scope.$on('$destroy', function () {
	            try {
	              unwatch();
	            } catch (e) {/* no op */}
	          });
	        }
	      };
	    }
	  };
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(118);
	
	__webpack_require__(119);
	
	__webpack_require__(58);
	
	__webpack_require__(228);
	
	__webpack_require__(120);
	
	__webpack_require__(229);

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(412);
	
	__webpack_require__(423);
	
	__webpack_require__(232);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
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
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(241);
	module.exports = __webpack_require__(29).RegExp.escape;

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(8)
	  , isArray  = __webpack_require__(84)
	  , SPECIES  = __webpack_require__(9)('species');
	
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
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(233);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(4)
	  , toPrimitive = __webpack_require__(27)
	  , NUMBER      = 'number';
	
	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(43)
	  , gOPS    = __webpack_require__(67)
	  , pIE     = __webpack_require__(57);
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
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(43)
	  , toIObject = __webpack_require__(19);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(239)
	  , invoke    = __webpack_require__(63)
	  , aFunction = __webpack_require__(15);
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
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 240 */
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
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(1)
	  , $re     = __webpack_require__(240)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(1);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(122)});
	
	__webpack_require__(49)('copyWithin');

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $every  = __webpack_require__(25)(4);
	
	$export($export.P + $export.F * !__webpack_require__(24)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(1);
	
	$export($export.P, 'Array', {fill: __webpack_require__(76)});
	
	__webpack_require__(49)('fill');

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $filter = __webpack_require__(25)(2);
	
	$export($export.P + $export.F * !__webpack_require__(24)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(1)
	  , $find   = __webpack_require__(25)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(49)(KEY);

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(1)
	  , $find   = __webpack_require__(25)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(49)(KEY);

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(1)
	  , $forEach = __webpack_require__(25)(0)
	  , STRICT   = __webpack_require__(24)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(30)
	  , $export        = __webpack_require__(1)
	  , toObject       = __webpack_require__(13)
	  , call           = __webpack_require__(131)
	  , isArrayIter    = __webpack_require__(83)
	  , toLength       = __webpack_require__(12)
	  , createProperty = __webpack_require__(77)
	  , getIterFn      = __webpack_require__(100);
	
	$export($export.S + $export.F * !__webpack_require__(65)(function(iter){ Array.from(iter); }), 'Array', {
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
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(1)
	  , $indexOf      = __webpack_require__(59)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(24)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Array', {isArray: __webpack_require__(84)});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(1)
	  , toIObject = __webpack_require__(19)
	  , arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(56) != Object || !__webpack_require__(24)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(1)
	  , toIObject     = __webpack_require__(19)
	  , toInteger     = __webpack_require__(36)
	  , toLength      = __webpack_require__(12)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(24)($native)), 'Array', {
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
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $map    = __webpack_require__(25)(1);
	
	$export($export.P + $export.F * !__webpack_require__(24)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(1)
	  , createProperty = __webpack_require__(77);
	
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
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $reduce = __webpack_require__(124);
	
	$export($export.P + $export.F * !__webpack_require__(24)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $reduce = __webpack_require__(124);
	
	$export($export.P + $export.F * !__webpack_require__(24)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(1)
	  , html       = __webpack_require__(81)
	  , cof        = __webpack_require__(22)
	  , toIndex    = __webpack_require__(46)
	  , toLength   = __webpack_require__(12)
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
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $some   = __webpack_require__(25)(3);
	
	$export($export.P + $export.F * !__webpack_require__(24)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(1)
	  , aFunction = __webpack_require__(15)
	  , toObject  = __webpack_require__(13)
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
	}) || !__webpack_require__(24)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(45)('Array');

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 263 */
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
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(1)
	  , toObject    = __webpack_require__(13)
	  , toPrimitive = __webpack_require__(27);
	
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
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(9)('toPrimitive')
	  , proto        = Date.prototype;
	
	if(!(TO_PRIMITIVE in proto))__webpack_require__(16)(proto, TO_PRIMITIVE, __webpack_require__(235));

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(17)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(1);
	
	$export($export.P, 'Function', {bind: __webpack_require__(125)});

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(8)
	  , getPrototypeOf = __webpack_require__(21)
	  , HAS_INSTANCE   = __webpack_require__(9)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(11).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11).f
	  , createDesc = __webpack_require__(35)
	  , has        = __webpack_require__(14)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(10) && dP(FProto, NAME, {
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
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(1)
	  , log1p   = __webpack_require__(133)
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
/* 271 */
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
/* 272 */
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
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(1)
	  , sign    = __webpack_require__(88);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 275 */
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
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(1)
	  , $expm1  = __webpack_require__(87);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(1)
	  , sign      = __webpack_require__(88)
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
/* 278 */
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
/* 279 */
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
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(133)});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {sign: __webpack_require__(88)});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(1)
	  , expm1   = __webpack_require__(87)
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
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(1)
	  , expm1   = __webpack_require__(87)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(6)
	  , has               = __webpack_require__(14)
	  , cof               = __webpack_require__(22)
	  , inheritIfRequired = __webpack_require__(82)
	  , toPrimitive       = __webpack_require__(27)
	  , fails             = __webpack_require__(7)
	  , gOPN              = __webpack_require__(42).f
	  , gOPD              = __webpack_require__(20).f
	  , dP                = __webpack_require__(11).f
	  , $trim             = __webpack_require__(53).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(41)(proto)) == NUMBER
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
	  for(var keys = __webpack_require__(10) ? gOPN(Base) : (
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
	  __webpack_require__(17)(global, NUMBER, $Number);
	}

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(1)
	  , _isFinite = __webpack_require__(6).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(130)});

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(1)
	  , isInteger = __webpack_require__(130)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(1)
	  , $parseFloat = __webpack_require__(140);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(1)
	  , $parseInt = __webpack_require__(141);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(1)
	  , toInteger    = __webpack_require__(36)
	  , aNumberValue = __webpack_require__(121)
	  , repeat       = __webpack_require__(95)
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
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(1)
	  , $fails       = __webpack_require__(7)
	  , aNumberValue = __webpack_require__(121)
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
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(1);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(134)});

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(41)});

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(10), 'Object', {defineProperties: __webpack_require__(135)});

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(10), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(8)
	  , meta     = __webpack_require__(34).onFreeze;
	
	__webpack_require__(26)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(19)
	  , $getOwnPropertyDescriptor = __webpack_require__(20).f;
	
	__webpack_require__(26)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(26)('getOwnPropertyNames', function(){
	  return __webpack_require__(136).f;
	});

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(13)
	  , $getPrototypeOf = __webpack_require__(21);
	
	__webpack_require__(26)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(8);
	
	__webpack_require__(26)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(8);
	
	__webpack_require__(26)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(8);
	
	__webpack_require__(26)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(1);
	$export($export.S, 'Object', {is: __webpack_require__(142)});

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(13)
	  , $keys    = __webpack_require__(43);
	
	__webpack_require__(26)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(8)
	  , meta     = __webpack_require__(34).onFreeze;
	
	__webpack_require__(26)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(8)
	  , meta     = __webpack_require__(34).onFreeze;
	
	__webpack_require__(26)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(1);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(90).set});

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(55)
	  , test    = {};
	test[__webpack_require__(9)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(17)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(1)
	  , $parseFloat = __webpack_require__(140);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(1)
	  , $parseInt = __webpack_require__(141);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(40)
	  , global             = __webpack_require__(6)
	  , ctx                = __webpack_require__(30)
	  , classof            = __webpack_require__(55)
	  , $export            = __webpack_require__(1)
	  , isObject           = __webpack_require__(8)
	  , aFunction          = __webpack_require__(15)
	  , anInstance         = __webpack_require__(39)
	  , forOf              = __webpack_require__(50)
	  , speciesConstructor = __webpack_require__(92)
	  , task               = __webpack_require__(97).set
	  , microtask          = __webpack_require__(89)()
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
	      , FakePromise = (promise.constructor = {})[__webpack_require__(9)('species')] = function(exec){ exec(empty, empty); };
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
	  Internal.prototype = __webpack_require__(44)($Promise.prototype, {
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
	__webpack_require__(52)($Promise, PROMISE);
	__webpack_require__(45)(PROMISE);
	Wrapper = __webpack_require__(29)[PROMISE];
	
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
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(65)(function(iter){
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
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(1)
	  , aFunction = __webpack_require__(15)
	  , anObject  = __webpack_require__(4)
	  , rApply    = (__webpack_require__(6).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(7)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(1)
	  , create     = __webpack_require__(41)
	  , aFunction  = __webpack_require__(15)
	  , anObject   = __webpack_require__(4)
	  , isObject   = __webpack_require__(8)
	  , fails      = __webpack_require__(7)
	  , bind       = __webpack_require__(125)
	  , rConstruct = (__webpack_require__(6).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
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
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(11)
	  , $export     = __webpack_require__(1)
	  , anObject    = __webpack_require__(4)
	  , toPrimitive = __webpack_require__(27);
	
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
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(1)
	  , gOPD     = __webpack_require__(20).f
	  , anObject = __webpack_require__(4);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(1)
	  , anObject = __webpack_require__(4);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(85)(Enumerate, 'Object', function(){
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
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(20)
	  , $export  = __webpack_require__(1)
	  , anObject = __webpack_require__(4);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(1)
	  , getProto = __webpack_require__(21)
	  , anObject = __webpack_require__(4);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(20)
	  , getPrototypeOf = __webpack_require__(21)
	  , has            = __webpack_require__(14)
	  , $export        = __webpack_require__(1)
	  , isObject       = __webpack_require__(8)
	  , anObject       = __webpack_require__(4);
	
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
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(1)
	  , anObject      = __webpack_require__(4)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(139)});

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(1)
	  , anObject           = __webpack_require__(4)
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
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(1)
	  , setProto = __webpack_require__(90);
	
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
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(11)
	  , gOPD           = __webpack_require__(20)
	  , getPrototypeOf = __webpack_require__(21)
	  , has            = __webpack_require__(14)
	  , $export        = __webpack_require__(1)
	  , createDesc     = __webpack_require__(35)
	  , anObject       = __webpack_require__(4)
	  , isObject       = __webpack_require__(8);
	
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
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(6)
	  , inheritIfRequired = __webpack_require__(82)
	  , dP                = __webpack_require__(11).f
	  , gOPN              = __webpack_require__(42).f
	  , isRegExp          = __webpack_require__(64)
	  , $flags            = __webpack_require__(62)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(10) && (!CORRECT_NEW || __webpack_require__(7)(function(){
	  re2[__webpack_require__(9)('match')] = false;
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
	  __webpack_require__(17)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(45)('RegExp');

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(61)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(61)('replace', 2, function(defined, REPLACE, $replace){
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
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(61)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(61)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(64)
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
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(146);
	var anObject    = __webpack_require__(4)
	  , $flags      = __webpack_require__(62)
	  , DESCRIPTORS = __webpack_require__(10)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];
	
	var define = function(fn){
	  __webpack_require__(17)(RegExp.prototype, TO_STRING, fn, true);
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
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(18)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(18)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(18)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(18)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $at     = __webpack_require__(93)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(1)
	  , toLength  = __webpack_require__(12)
	  , context   = __webpack_require__(94)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(80)(ENDS_WITH), 'String', {
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
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(18)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(18)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(18)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(1)
	  , toIndex        = __webpack_require__(46)
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
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(1)
	  , context  = __webpack_require__(94)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(80)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(18)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(93)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(86)(String, 'String', function(iterated){
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
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(18)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(1)
	  , toIObject = __webpack_require__(19)
	  , toLength  = __webpack_require__(12);
	
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
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(95)
	});

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(18)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(1)
	  , toLength    = __webpack_require__(12)
	  , context     = __webpack_require__(94)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(80)(STARTS_WITH), 'String', {
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
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(18)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(18)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(18)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(53)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(6)
	  , has            = __webpack_require__(14)
	  , DESCRIPTORS    = __webpack_require__(10)
	  , $export        = __webpack_require__(1)
	  , redefine       = __webpack_require__(17)
	  , META           = __webpack_require__(34).KEY
	  , $fails         = __webpack_require__(7)
	  , shared         = __webpack_require__(68)
	  , setToStringTag = __webpack_require__(52)
	  , uid            = __webpack_require__(47)
	  , wks            = __webpack_require__(9)
	  , wksExt         = __webpack_require__(144)
	  , wksDefine      = __webpack_require__(99)
	  , keyOf          = __webpack_require__(237)
	  , enumKeys       = __webpack_require__(236)
	  , isArray        = __webpack_require__(84)
	  , anObject       = __webpack_require__(4)
	  , toIObject      = __webpack_require__(19)
	  , toPrimitive    = __webpack_require__(27)
	  , createDesc     = __webpack_require__(35)
	  , _create        = __webpack_require__(41)
	  , gOPNExt        = __webpack_require__(136)
	  , $GOPD          = __webpack_require__(20)
	  , $DP            = __webpack_require__(11)
	  , $keys          = __webpack_require__(43)
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
	  __webpack_require__(42).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(57).f  = $propertyIsEnumerable;
	  __webpack_require__(67).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(40)){
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
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(16)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(1)
	  , $typed       = __webpack_require__(69)
	  , buffer       = __webpack_require__(98)
	  , anObject     = __webpack_require__(4)
	  , toIndex      = __webpack_require__(46)
	  , toLength     = __webpack_require__(12)
	  , isObject     = __webpack_require__(8)
	  , ArrayBuffer  = __webpack_require__(6).ArrayBuffer
	  , speciesConstructor = __webpack_require__(92)
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
	
	__webpack_require__(45)(ARRAY_BUFFER);

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1);
	$export($export.G + $export.W + $export.F * !__webpack_require__(69).ABV, {
	  DataView: __webpack_require__(98).DataView
	});

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(128);
	
	// 23.4 WeakSet Objects
	__webpack_require__(60)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(1)
	  , $includes = __webpack_require__(59)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(49)('includes');

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(1)
	  , microtask = __webpack_require__(89)()
	  , process   = __webpack_require__(6).process
	  , isNode    = __webpack_require__(22)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(1)
	  , cof     = __webpack_require__(22);
	
	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(1);
	
	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(127)('Map')});

/***/ },
/* 378 */
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
/* 379 */
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
/* 380 */
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
/* 381 */
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
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(1)
	  , toObject        = __webpack_require__(13)
	  , aFunction       = __webpack_require__(15)
	  , $defineProperty = __webpack_require__(11);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(10) && $export($export.P + __webpack_require__(66), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(1)
	  , toObject        = __webpack_require__(13)
	  , aFunction       = __webpack_require__(15)
	  , $defineProperty = __webpack_require__(11);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(10) && $export($export.P + __webpack_require__(66), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(1)
	  , $entries = __webpack_require__(138)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(1)
	  , ownKeys        = __webpack_require__(139)
	  , toIObject      = __webpack_require__(19)
	  , gOPD           = __webpack_require__(20)
	  , createProperty = __webpack_require__(77);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(1)
	  , toObject                 = __webpack_require__(13)
	  , toPrimitive              = __webpack_require__(27)
	  , getPrototypeOf           = __webpack_require__(21)
	  , getOwnPropertyDescriptor = __webpack_require__(20).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(10) && $export($export.P + __webpack_require__(66), 'Object', {
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
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(1)
	  , toObject                 = __webpack_require__(13)
	  , toPrimitive              = __webpack_require__(27)
	  , getPrototypeOf           = __webpack_require__(21)
	  , getOwnPropertyDescriptor = __webpack_require__(20).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(10) && $export($export.P + __webpack_require__(66), 'Object', {
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
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(1)
	  , $values = __webpack_require__(138)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(1)
	  , global      = __webpack_require__(6)
	  , core        = __webpack_require__(29)
	  , microtask   = __webpack_require__(89)()
	  , OBSERVABLE  = __webpack_require__(9)('observable')
	  , aFunction   = __webpack_require__(15)
	  , anObject    = __webpack_require__(4)
	  , anInstance  = __webpack_require__(39)
	  , redefineAll = __webpack_require__(44)
	  , hide        = __webpack_require__(16)
	  , forOf       = __webpack_require__(50)
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
	
	__webpack_require__(45)('Observable');

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(31)
	  , anObject                  = __webpack_require__(4)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(31)
	  , anObject               = __webpack_require__(4)
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
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(147)
	  , from                    = __webpack_require__(123)
	  , metadata                = __webpack_require__(31)
	  , anObject                = __webpack_require__(4)
	  , getPrototypeOf          = __webpack_require__(21)
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
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(31)
	  , anObject               = __webpack_require__(4)
	  , getPrototypeOf         = __webpack_require__(21)
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
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(31)
	  , anObject                = __webpack_require__(4)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(31)
	  , anObject               = __webpack_require__(4)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(31)
	  , anObject               = __webpack_require__(4)
	  , getPrototypeOf         = __webpack_require__(21)
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
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(31)
	  , anObject               = __webpack_require__(4)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(31)
	  , anObject                  = __webpack_require__(4)
	  , aFunction                 = __webpack_require__(15)
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
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(1);
	
	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(127)('Set')});

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(1)
	  , $at     = __webpack_require__(93)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(1)
	  , defined     = __webpack_require__(23)
	  , toLength    = __webpack_require__(12)
	  , isRegExp    = __webpack_require__(64)
	  , getFlags    = __webpack_require__(62)
	  , RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(85)($RegExpStringIterator, 'RegExp String', function next(){
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
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(1)
	  , $pad    = __webpack_require__(143);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(1)
	  , $pad    = __webpack_require__(143);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(53)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(53)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(99)('asyncIterator');

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(99)('observable');

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(1);
	
	$export($export.S, 'System', {global: __webpack_require__(6)});

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(101)
	  , redefine      = __webpack_require__(17)
	  , global        = __webpack_require__(6)
	  , hide          = __webpack_require__(16)
	  , Iterators     = __webpack_require__(51)
	  , wks           = __webpack_require__(9)
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
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1)
	  , $task   = __webpack_require__(97);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(6)
	  , $export    = __webpack_require__(1)
	  , invoke     = __webpack_require__(63)
	  , partial    = __webpack_require__(238)
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
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(361);
	__webpack_require__(300);
	__webpack_require__(302);
	__webpack_require__(301);
	__webpack_require__(304);
	__webpack_require__(306);
	__webpack_require__(311);
	__webpack_require__(305);
	__webpack_require__(303);
	__webpack_require__(313);
	__webpack_require__(312);
	__webpack_require__(308);
	__webpack_require__(309);
	__webpack_require__(307);
	__webpack_require__(299);
	__webpack_require__(310);
	__webpack_require__(314);
	__webpack_require__(315);
	__webpack_require__(267);
	__webpack_require__(269);
	__webpack_require__(268);
	__webpack_require__(317);
	__webpack_require__(316);
	__webpack_require__(287);
	__webpack_require__(297);
	__webpack_require__(298);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(290);
	__webpack_require__(291);
	__webpack_require__(292);
	__webpack_require__(293);
	__webpack_require__(294);
	__webpack_require__(295);
	__webpack_require__(296);
	__webpack_require__(270);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(277);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(348);
	__webpack_require__(353);
	__webpack_require__(360);
	__webpack_require__(351);
	__webpack_require__(343);
	__webpack_require__(344);
	__webpack_require__(349);
	__webpack_require__(354);
	__webpack_require__(356);
	__webpack_require__(339);
	__webpack_require__(340);
	__webpack_require__(341);
	__webpack_require__(342);
	__webpack_require__(345);
	__webpack_require__(346);
	__webpack_require__(347);
	__webpack_require__(350);
	__webpack_require__(352);
	__webpack_require__(355);
	__webpack_require__(357);
	__webpack_require__(358);
	__webpack_require__(359);
	__webpack_require__(262);
	__webpack_require__(264);
	__webpack_require__(263);
	__webpack_require__(266);
	__webpack_require__(265);
	__webpack_require__(251);
	__webpack_require__(249);
	__webpack_require__(255);
	__webpack_require__(252);
	__webpack_require__(258);
	__webpack_require__(260);
	__webpack_require__(248);
	__webpack_require__(254);
	__webpack_require__(245);
	__webpack_require__(259);
	__webpack_require__(243);
	__webpack_require__(257);
	__webpack_require__(256);
	__webpack_require__(250);
	__webpack_require__(253);
	__webpack_require__(242);
	__webpack_require__(244);
	__webpack_require__(247);
	__webpack_require__(246);
	__webpack_require__(261);
	__webpack_require__(101);
	__webpack_require__(333);
	__webpack_require__(338);
	__webpack_require__(146);
	__webpack_require__(334);
	__webpack_require__(335);
	__webpack_require__(336);
	__webpack_require__(337);
	__webpack_require__(318);
	__webpack_require__(145);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(373);
	__webpack_require__(362);
	__webpack_require__(363);
	__webpack_require__(368);
	__webpack_require__(371);
	__webpack_require__(372);
	__webpack_require__(366);
	__webpack_require__(369);
	__webpack_require__(367);
	__webpack_require__(370);
	__webpack_require__(364);
	__webpack_require__(365);
	__webpack_require__(319);
	__webpack_require__(320);
	__webpack_require__(321);
	__webpack_require__(322);
	__webpack_require__(323);
	__webpack_require__(326);
	__webpack_require__(324);
	__webpack_require__(325);
	__webpack_require__(327);
	__webpack_require__(328);
	__webpack_require__(329);
	__webpack_require__(330);
	__webpack_require__(332);
	__webpack_require__(331);
	__webpack_require__(374);
	__webpack_require__(400);
	__webpack_require__(403);
	__webpack_require__(402);
	__webpack_require__(404);
	__webpack_require__(405);
	__webpack_require__(401);
	__webpack_require__(406);
	__webpack_require__(407);
	__webpack_require__(385);
	__webpack_require__(388);
	__webpack_require__(384);
	__webpack_require__(382);
	__webpack_require__(383);
	__webpack_require__(386);
	__webpack_require__(387);
	__webpack_require__(377);
	__webpack_require__(399);
	__webpack_require__(408);
	__webpack_require__(376);
	__webpack_require__(378);
	__webpack_require__(380);
	__webpack_require__(379);
	__webpack_require__(381);
	__webpack_require__(390);
	__webpack_require__(391);
	__webpack_require__(393);
	__webpack_require__(392);
	__webpack_require__(395);
	__webpack_require__(394);
	__webpack_require__(396);
	__webpack_require__(397);
	__webpack_require__(398);
	__webpack_require__(375);
	__webpack_require__(389);
	__webpack_require__(411);
	__webpack_require__(410);
	__webpack_require__(409);
	module.exports = __webpack_require__(29);

/***/ },
/* 413 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 414 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 415 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 416 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 417 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 418 */
/***/ function(module, exports) {

	var path = 'src/ui/animation/loader/template.html';
	var html = "<div class=\"loading-indicator\">\n  <span class=\"loading-bullet\">&bull;</span>\n  <span class=\"loading-bullet\">&bull;</span>\n  <span class=\"loading-bullet\">&bull;</span>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 419 */
/***/ function(module, exports) {

	var path = 'src/ui/block/block.html';
	var html = "<div class=\"av-block-overlay\"></div>\n<div\n  class=\"av-block-message-container\"\n  aria-live=\"assertive\"\n  aria-atomic=\"true\">\n  <div class=\"av-block-message\">\n    <av-loader ng-if=\"state.blockCount > 0\"></av-loader>\n  </div>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 420 */
/***/ function(module, exports) {

	var path = 'src/ui/breadcrumbs/spaces.html';
	var html = "<ul class=\"breadcrumb breadcrumb-space\">\n  <li>\n    <a href=\"/public/apps/dashboard\" target=\"newBody\"\n      av-analytics-on=\"click\"\n      av-analytics-action=\"click\"\n      av-analytics-label=\"home\"\n      av-analytics-category=\"home breadcrumb\">\n      Home\n    </a>\n  </li>\n  <li ng-if=\"spaceName\">\n    <a href=\"/public/apps/spaces/#/{{spaceId}}\"\n      av-analytics-on=\"click\"\n      av-analytics-action=\"click\"\n      av-analytics-label=\"{{spaceId}}\"\n      av-analytics-category=\"page breadcrumb\">{{spaceName}}</a>\n  </li>\n  <li class=\"active\">\n    {{pageName}}\n  </li>\n</ul>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 421 */
/***/ function(module, exports) {

	var path = 'src/ui/modal/modal.html';
	var html = "<div class=\"modal fade\" role=\"dialog\" tabindex=\"-1\">\n  <div class=\"modal-dialog\" ng-class=\"{'modal-lg': size === 'lg', 'modal-sm': size === 'sm'}\">\n    <div class=\"modal-content\" ng-transclude>\n      <!--\n      <div class=\"modal-header\"></div>\n      <div class=\"modal-body\"></div>\n      <div class=\"modal-footer\"></div>\n      -->\n    </div>\n  </div>\n</div>\n\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 422 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
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
	    var timeout = runTimeout(cleanUpNextTick);
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
	    runClearTimeout(timeout);
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
	        runTimeout(drainQueue);
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
/* 423 */
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
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(422)))

/***/ },
/* 424 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_424__;

/***/ },
/* 425 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_425__;

/***/ },
/* 426 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_426__;

/***/ }
])
});
;
//# sourceMappingURL=availity-angular.js.map