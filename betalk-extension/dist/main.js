/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/sortablejs/modular/sortable.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiDrag: () => (/* binding */ MultiDragPlugin),
/* harmony export */   Sortable: () => (/* binding */ Sortable),
/* harmony export */   Swap: () => (/* binding */ SwapPlugin),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**!
 * Sortable 1.15.3
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function (target) {
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
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var version = "1.15.3";
function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
  capture: false,
  passive: false
};
function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches( /**HTMLElement*/el, /**String*/selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));
  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }
  return false;
}
function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest( /**HTMLElement*/el, /**String*/selector, /**HTMLElement*/ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;
    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }
      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }
  return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}
function css(el, prop, val) {
  var style = el && el.style;
  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }
      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }
      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}
function matrix(el, selfOnly) {
  var appliedTransforms = '';
  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');
      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */
    } while (!selfOnly && (el = el.parentNode));
  }
  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */
  return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
      i = 0,
      n = list.length;
    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }
    return list;
  }
  return [];
}
function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;
  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}

/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */
function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;
  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }
  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode;

    // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11
    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect();

          // Set relative to edges of padding box of container
          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */
      } while (container = container.parentNode);
    }
  }
  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
      scaleX = elMatrix && elMatrix.a,
      scaleY = elMatrix && elMatrix.d;
    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }
  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}

/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */
function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
    elSideVal = getRect(el)[elSide];

  /* jshint boss:true */
  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
      visible = void 0;
    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }
    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }
  return false;
}

/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */
function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0,
    i = 0,
    children = el.children;
  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }
      currentChild++;
    }
    i++;
  }
  return null;
}

/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */
function lastChild(el, selector) {
  var last = el.lastElementChild;
  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }
  return last || null;
}

/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */
function index(el, selector) {
  var index = 0;
  if (!el || !el.parentNode) {
    return -1;
  }

  /* jshint boss:true */
  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }
  return index;
}

/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */
function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
    offsetTop = 0,
    winScroller = getWindowScrollingElement();
  if (el) {
    do {
      var elMatrix = matrix(el),
        scaleX = elMatrix.a,
        scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }
  return [offsetLeft, offsetTop];
}

/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */
function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }
  return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;
  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);
      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */
  } while (elem = elem.parentNode);
  return getWindowScrollingElement();
}
function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }
  return dst;
}
function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
        _this = this;
      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }
      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}
function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}
function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;
  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}
function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}
function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}
function getChildContainingRectFromElement(container, options, ghostEl) {
  var rect = {};
  Array.from(container.children).forEach(function (child) {
    var _rect$left, _rect$top, _rect$right, _rect$bottom;
    if (!closest(child, options.draggable, container, false) || child.animated || child === ghostEl) return;
    var childRect = getRect(child);
    rect.left = Math.min((_rect$left = rect.left) !== null && _rect$left !== void 0 ? _rect$left : Infinity, childRect.left);
    rect.top = Math.min((_rect$top = rect.top) !== null && _rect$top !== void 0 ? _rect$top : Infinity, childRect.top);
    rect.right = Math.max((_rect$right = rect.right) !== null && _rect$right !== void 0 ? _rect$right : -Infinity, childRect.right);
    rect.bottom = Math.max((_rect$bottom = rect.bottom) !== null && _rect$bottom !== void 0 ? _rect$bottom : -Infinity, childRect.bottom);
  });
  rect.width = rect.right - rect.left;
  rect.height = rect.bottom - rect.top;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
var expando = 'Sortable' + new Date().getTime();
function AnimationStateManager() {
  var animationStates = [],
    animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });
        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);

        // If animating: compensate for current animation
        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);
          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }
        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;
      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }
      var animating = false,
        animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
          target = state.target,
          fromRect = target.fromRect,
          toRect = getRect(target),
          prevFromRect = target.prevFromRect,
          prevToRect = target.prevToRect,
          animatingRect = state.rect,
          targetMatrix = matrix(target, true);
        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }
        target.toRect = toRect;
        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) &&
          // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        }

        // if fromRect != toRect: animate
        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;
          if (!time) {
            time = _this.options.animation;
          }
          _this.animate(target, animatingRect, toRect, time);
        }
        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);
      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }
      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
          scaleX = elMatrix && elMatrix.a,
          scaleY = elMatrix && elMatrix.d,
          translateX = (currentRect.left - toRect.left) / (scaleX || 1),
          translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}
function repaint(target) {
  return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }
    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;
    this.eventCanceled = false;
    evt.cancel = function () {
      _this.eventCanceled = true;
    };
    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return;
      // Fire global events if it exists in this sortable
      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable: sortable
        }, evt));
      }

      // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined
      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized;

      // Add default options from plugin
      _extends(defaults, initialized.defaults);
    });
    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);
      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;
      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return;

      // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin
      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};
function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
    rootEl = _ref.rootEl,
    name = _ref.name,
    targetEl = _ref.targetEl,
    cloneEl = _ref.cloneEl,
    toEl = _ref.toEl,
    fromEl = _ref.fromEl,
    oldIndex = _ref.oldIndex,
    newIndex = _ref.newIndex,
    oldDraggableIndex = _ref.oldDraggableIndex,
    newDraggableIndex = _ref.newDraggableIndex,
    originalEvent = _ref.originalEvent,
    putSortable = _ref.putSortable,
    extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
    options = sortable.options,
    onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1);
  // Support for new CustomEvent feature
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }
  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;
  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }
  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }
  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}
var _excluded = ["evt"];
var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    originalEvent = _ref.evt,
    data = _objectWithoutProperties(_ref, _excluded);
  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};
function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}
var dragEl,
  parentEl,
  ghostEl,
  rootEl,
  nextEl,
  lastDownEl,
  cloneEl,
  cloneHidden,
  oldIndex,
  newIndex,
  oldDraggableIndex,
  newDraggableIndex,
  activeGroup,
  putSortable,
  awaitingDragStarted = false,
  ignoreNextClick = false,
  sortables = [],
  tapEvt,
  touchEvt,
  lastDx,
  lastDy,
  tapDistanceLeft,
  tapDistanceTop,
  moved,
  lastTarget,
  lastDirection,
  pastFirstInvertThresh = false,
  isCircumstantialInvert = false,
  targetMoveDistance,
  // For positioning ghost absolutely
  ghostRelativeParent,
  ghostRelativeParentInitialScroll = [],
  // (left, top)

  _silent = false,
  savedInputChecked = [];

/** @const */
var documentExists = typeof document !== 'undefined',
  PositionGhostAbsolutely = IOS,
  CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
  // This will not pass for IE9, because IE9 DnD only works on anchors
  supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
  supportCssPointerEvents = function () {
    if (!documentExists) return;
    // false when <= IE11
    if (IE11OrLess) {
      return false;
    }
    var el = document.createElement('x');
    el.style.cssText = 'pointer-events:auto';
    return el.style.pointerEvents === 'auto';
  }(),
  _detectDirection = function _detectDirection(el, options) {
    var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
    if (elCSS.display === 'flex') {
      return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
    }
    if (elCSS.display === 'grid') {
      return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
    }
    if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
      var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
      return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
    }
    return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
  },
  _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
    var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
    return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
  },
  /**
   * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
   * @param  {Number} x      X position
   * @param  {Number} y      Y position
   * @return {HTMLElement}   Element of the first found nearest Sortable
   */
  _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
    var ret;
    sortables.some(function (sortable) {
      var threshold = sortable[expando].options.emptyInsertThreshold;
      if (!threshold || lastChild(sortable)) return;
      var rect = getRect(sortable),
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
      if (insideHorizontally && insideVertically) {
        return ret = sortable;
      }
    });
    return ret;
  },
  _prepareGroup = function _prepareGroup(options) {
    function toFn(value, pull) {
      return function (to, from, dragEl, evt) {
        var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
        if (value == null && (pull || sameGroup)) {
          // Default pull value
          // Default pull and put value if same group
          return true;
        } else if (value == null || value === false) {
          return false;
        } else if (pull && value === 'clone') {
          return value;
        } else if (typeof value === 'function') {
          return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
        } else {
          var otherGroup = (pull ? to : from).options.group.name;
          return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
        }
      };
    }
    var group = {};
    var originalGroup = options.group;
    if (!originalGroup || _typeof(originalGroup) != 'object') {
      originalGroup = {
        name: originalGroup
      };
    }
    group.name = originalGroup.name;
    group.checkPull = toFn(originalGroup.pull, true);
    group.checkPut = toFn(originalGroup.put);
    group.revertClone = originalGroup.revertClone;
    options.group = group;
  },
  _hideGhostForTarget = function _hideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, 'display', 'none');
    }
  },
  _unhideGhostForTarget = function _unhideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, 'display', '');
    }
  };

// #1184 fix - Prevent click event on fallback if dragged but item not changed position
if (documentExists && !ChromeForAndroid) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;
    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
    if (nearest) {
      // Create imitation event
      var event = {};
      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }
      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;
      nearest[expando]._onDragOver(event);
    }
  }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};

/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */
function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }
  this.el = el; // root element
  this.options = options = _extends({}, options);

  // Export instance
  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults);

  // Set default options
  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }
  _prepareGroup(options);

  // Bind all private methods
  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  }

  // Setup drag mode
  this.nativeDraggable = options.forceFallback ? false : supportDraggable;
  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  }

  // Bind events
  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }
  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }
  sortables.push(this.el);

  // Restore sorting
  options.store && options.store.get && this.sort(options.store.get(this) || []);

  // Add animation state manager
  _extends(this, AnimationStateManager());
}
Sortable.prototype = /** @lends Sortable.prototype */{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart( /** Event|TouchEvent */evt) {
    if (!evt.cancelable) return;
    var _this = this,
      el = this.el,
      options = this.options,
      preventOnFilter = options.preventOnFilter,
      type = evt.type,
      touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
      target = (touch || evt).target,
      originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
      filter = options.filter;
    _saveInputCheckedState(el);

    // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
    if (dragEl) {
      return;
    }
    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    }

    // cancel dnd if original target is content editable
    if (originalTarget.isContentEditable) {
      return;
    }

    // Safari ignores further event handling after mousedown
    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }
    target = closest(target, options.draggable, el, false);
    if (target && target.animated) {
      return;
    }
    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    }

    // Get the index of the dragged element within its parent
    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable);

    // Check filter
    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });
        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);
        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });
          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });
      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }
    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    }

    // Prepare `dragstart`
    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart( /** Event */evt, /** Touch */touch, /** HTMLElement */target) {
    var _this = this,
      el = _this.el,
      options = _this.options,
      ownerDocument = el.ownerDocument,
      dragStartFn;
    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';
      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });
        if (Sortable.eventCanceled) {
          _this._onDrop();
          return;
        }
        // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove
        _this._disableDelayedDragEvents();
        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        }

        // Bind the events: dragstart/dragend
        _this._triggerDragStart(evt, touch);

        // Drag start event
        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        });

        // Chosen item
        toggleClass(dragEl, options.chosenClass, true);
      };

      // Disable "draggable"
      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop);

      // Make dragEl draggable (must be before delay for FireFox)
      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }
      pluginEvent('delayStart', this, {
        evt: evt
      });

      // Delay is impossible for native DnD in Edge or IE
      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();
          return;
        }
        // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag
        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler( /** TouchEvent|PointerEvent **/e) {
    var touch = e.touches ? e.touches[0] : e;
    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);
    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart( /** Event */evt, /** Touch */touch) {
    touch = touch || evt.pointerType == 'touch' && evt;
    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }
    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {
    awaitingDragStarted = false;
    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });
      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }
      var options = this.options;

      // Apply effect
      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost();

      // Drag start event
      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;
      _hideGhostForTarget();
      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;
      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }
      dragEl.parentNode[expando]._isOutsideThisEl(target);
      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });
            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }
          target = parent; // store last element
        }
        /* jshint boss:true */ while (parent = getParentOrHost(parent));
      }
      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove( /**TouchEvent*/evt) {
    if (tapEvt) {
      var options = this.options,
        fallbackTolerance = options.fallbackTolerance,
        fallbackOffset = options.fallbackOffset,
        touch = evt.touches ? evt.touches[0] : evt,
        ghostMatrix = ghostEl && matrix(ghostEl, true),
        scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
        scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
        relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
        dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
        dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);

      // only set the status to dragging, when we are actually dragging
      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }
        this._onDragStart(evt, true);
      }
      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }
        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }
      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
        rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
        options = this.options;

      // Position absolutely
      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;
        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }
        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }
        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }
      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl);

      // Set transform-origin
      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart( /**Event*/evt, /**boolean*/fallback) {
    var _this = this;
    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });
    if (Sortable.eventCanceled) {
      this._onDrop();
      return;
    }
    pluginEvent('setupClone', this);
    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';
      this._hideClone();
      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    }

    // #1143: IFrame support workaround
    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;
      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }
      _this._hideClone();
      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true);

    // Set proper drop events
    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);
      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }
      on(document, 'drop', _this);

      // #1276 fix:
      css(dragEl, 'transform', 'translateZ(0)');
    }
    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;
    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver( /**Event*/evt) {
    var el = this.el,
      target = evt.target,
      dragRect,
      targetRect,
      revert,
      options = this.options,
      group = options.group,
      activeSortable = Sortable.active,
      isOwner = activeGroup === group,
      canSort = options.sort,
      fromSortable = putSortable || activeSortable,
      vertical,
      _this = this,
      completedFired = false;
    if (_silent) return;
    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread2({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    }

    // Capture animation state
    function capture() {
      dragOverEvent('dragOverAnimationCapture');
      _this.captureAnimationState();
      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    }

    // Return invocation when dragEl is inserted (or completed)
    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });
      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }
        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }
        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        }

        // Animation
        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }
        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });
        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      }

      // Null lastTarget if it is not inside a previously swapped element
      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      }

      // no bubbling and not fallback
      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target);

        // Do not detect for empty insert if already inserted
        !insertion && nearestEmptyInsertDetectEvent(evt);
      }
      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    }

    // Call when dragEl has been inserted
    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);
      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }
    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }
    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;
    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }
    ignoreNextClick = false;
    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;
      if (revert) {
        parentEl = rootEl; // actualization
        capture();
        this._hideClone();
        dragOverEvent('revert');
        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }
        return completed(true);
      }
      var elLastChild = lastChild(el, options.draggable);
      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // Insert to end of list

        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        }

        // if there is a last element, it is the target
        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }
        if (target) {
          targetRect = getRect(target);
        }
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          if (elLastChild && elLastChild.nextSibling) {
            // the last draggable element is not the last node
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        // Insert to start of list
        var firstChild = getChild(el, 0, options, true);
        if (firstChild === dragEl) {
          return completed(false);
        }
        target = firstChild;
        targetRect = getRect(target);
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
          targetBeforeFirstSwap,
          differentLevel = dragEl.parentNode !== el,
          differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
          side1 = vertical ? 'top' : 'left',
          scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
          scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }
        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;
        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);
          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        }
        // If dragEl is already beside target: Do not insert
        if (direction === 0 || sibling === target) {
          return completed(false);
        }
        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
          after = false;
        after = direction === 1;
        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }
          _silent = true;
          setTimeout(_unsilent, 30);
          capture();
          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          }

          // Undo chrome's scroll adjustment (has no effect on other browsers)
          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }
          parentEl = dragEl.parentNode; // actualization

          // must be done before animation
          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }
          changed();
          return completed(true);
        }
      }
      if (el.contains(dragEl)) {
        return completed(false);
      }
    }
    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop( /**Event*/evt) {
    var el = this.el,
      options = this.options;

    // Get the index of the dragged element within its parent
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode;

    // Get again after plugin event
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    if (Sortable.eventCanceled) {
      this._nulling();
      return;
    }
    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);
    _cancelNextTick(this.cloneId);
    _cancelNextTick(this._dragStartId);

    // Unbind events
    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }
    this._offMoveEvents();
    this._offUpEvents();
    if (Safari) {
      css(document.body, 'user-select', '');
    }
    css(dragEl, 'transform', '');
    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }
      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }
      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }
        _disableDraggable(dragEl);
        dragEl.style['will-change'] = '';

        // Remove classes
        // ghostClass is added in dragStarted
        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }
        toggleClass(dragEl, this.options.chosenClass, false);

        // Drag stop event
        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });
        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            // Remove event
            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            });

            // drag from one list and drop into another
            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }
          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }
        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }
          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          });

          // Save sorting
          this.save();
        }
      }
    }
    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent( /**Event*/evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);
        break;
      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);
          _globalDragOver(evt);
        }
        break;
      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
      el,
      children = this.el.children,
      i = 0,
      n = children.length,
      options = this.options;
    for (; i < n; i++) {
      el = children[i];
      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }
    return order;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
      rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];
      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;
    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);
      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }
      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },
  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);
    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    }
    // Remove draggable attributes
    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });
    this._onDrop();
    this._disableDelayedDragEvents();
    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');
      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }
      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();
      return;
    }
    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return;

      // show clone at dragEl or original position
      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }
      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }
      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};
function _globalDragOver( /**Event*/evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }
  evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
    sortable = fromEl[expando],
    onMoveFn = sortable.options.onMove,
    retVal;
  // Support for new CustomEvent feature
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }
  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);
  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }
  return retVal;
}
function _disableDraggable(el) {
  el.draggable = false;
}
function _unsilent() {
  _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
  var firstElRect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX < childContainingRect.left - spacer || evt.clientY < firstElRect.top && evt.clientX < firstElRect.right : evt.clientY < childContainingRect.top - spacer || evt.clientY < firstElRect.bottom && evt.clientX < firstElRect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
  var lastElRect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX > childContainingRect.right + spacer || evt.clientY > lastElRect.bottom && evt.clientX > lastElRect.left : evt.clientY > childContainingRect.bottom + spacer || evt.clientX > lastElRect.right && evt.clientY > lastElRect.top;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
    targetLength = vertical ? targetRect.height : targetRect.width,
    targetS1 = vertical ? targetRect.top : targetRect.left,
    targetS2 = vertical ? targetRect.bottom : targetRect.right,
    invert = false;
  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }
      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }
  invert = invert || invertSwap;
  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }
  return 0;
}

/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */
function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}

/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */
function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
    i = str.length,
    sum = 0;
  while (i--) {
    sum += str.charCodeAt(i);
  }
  return sum.toString(36);
}
function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;
  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}
function _nextTick(fn) {
  return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
  return clearTimeout(id);
}

// Fixed #973:
if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
}

// Export utils
Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild,
  expando: expando
};

/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */
Sortable.get = function (element) {
  return element[expando];
};

/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */
Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }
  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }
    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};

/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */
Sortable.create = function (el, options) {
  return new Sortable(el, options);
};

// Export
Sortable.version = version;
var autoScrolls = [],
  scrollEl,
  scrollRootEl,
  scrolling = false,
  lastAutoScrollX,
  lastAutoScrollY,
  touchEvt$1,
  pointerElemChangedInterval;
function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    };

    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }
  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;
      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;
      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }
      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;
      var x = (evt.touches ? evt.touches[0] : evt).clientX,
        y = (evt.touches ? evt.touches[0] : evt).clientY,
        elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt;

      // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good
      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback);

        // Listener for pointer element change
        var ogElemScroller = getParentAutoScrollElement(elem, true);
        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval();
          // Detect for pointer elem change, emulating native DnD behaviour
          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }
            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }
        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}
function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}
function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
    y = (evt.touches ? evt.touches[0] : evt).clientY,
    sens = options.scrollSensitivity,
    speed = options.scrollSpeed,
    winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
    scrollCustomFn;

  // New scroll root, set scrollEl
  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;
    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }
  var layersOut = 0;
  var currentParent = scrollEl;
  do {
    var el = currentParent,
      rect = getRect(el),
      top = rect.top,
      bottom = rect.bottom,
      left = rect.left,
      right = rect.right,
      width = rect.width,
      height = rect.height,
      canScrollX = void 0,
      canScrollY = void 0,
      scrollWidth = el.scrollWidth,
      scrollHeight = el.scrollHeight,
      elCSS = css(el),
      scrollPosX = el.scrollLeft,
      scrollPosY = el.scrollTop;
    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }
    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }
    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);
      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */
        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely
          }
          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }
          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }
    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);
var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
    putSortable = _ref.putSortable,
    dragEl = _ref.dragEl,
    activeSortable = _ref.activeSortable,
    dispatchSortableEvent = _ref.dispatchSortableEvent,
    hideGhostForTarget = _ref.hideGhostForTarget,
    unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();
  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};
function Revert() {}
Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
      putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();
    if (putSortable) {
      putSortable.captureAnimationState();
    }
    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }
    this.sortable.animateAll();
    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};
_extends(Revert, {
  pluginName: 'revertOnSpill'
});
function Remove() {}
Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
      putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};
_extends(Remove, {
  pluginName: 'removeOnSpill'
});
var lastSwapEl;
function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }
  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
        target = _ref2.target,
        onMove = _ref2.onMove,
        activeSortable = _ref2.activeSortable,
        changed = _ref2.changed,
        cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
        options = this.options;
      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;
        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }
        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }
      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
        putSortable = _ref3.putSortable,
        dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);
      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}
function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
    p2 = n2.parentNode,
    i1,
    i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);
  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }
  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}
var multiDragElements = [],
  multiDragClones = [],
  lastMultiDragSelect,
  // for selection with modifier key down (SHIFT)
  multiDragSortable,
  initialFolding = false,
  // Initial multi-drag fold when drag started
  folding = false,
  // Folding any other time
  dragStarted = false,
  dragEl$1,
  clonesFromRect,
  clonesHidden;
function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
    if (!sortable.options.avoidImplicitDeselect) {
      if (sortable.options.supportPointer) {
        on(document, 'pointerup', this._deselectMultiDrag);
      } else {
        on(document, 'mouseup', this._deselectMultiDrag);
        on(document, 'touchend', this._deselectMultiDrag);
      }
    }
    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      avoidImplicitDeselect: false,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';
        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }
        dataTransfer.setData('Text', data);
      }
    };
  }
  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
        cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;
      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }
      sortable._hideClone();
      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
        rootEl = _ref3.rootEl,
        dispatchSortableEvent = _ref3.dispatchSortableEvent,
        cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;
      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
        rootEl = _ref4.rootEl,
        cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;
      var sortable = _ref5.sortable,
        cloneNowHidden = _ref5.cloneNowHidden,
        cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');
        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;
      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      });

      // Sort multi-drag elements
      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;
      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;
      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM

        sortable.captureAnimationState();
        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }
      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;
        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        }

        // Remove all auxiliary multidrag items from el, if sorting enabled
        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
        completed = _ref8.completed,
        cancel = _ref8.cancel;
      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
        rootEl = _ref9.rootEl,
        sortable = _ref9.sortable,
        dragRect = _ref9.dragRect;
      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
        isOwner = _ref10.isOwner,
        insertion = _ref10.insertion,
        activeSortable = _ref10.activeSortable,
        parentEl = _ref10.parentEl,
        putSortable = _ref10.putSortable;
      var options = this.options;
      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }
        initialFolding = false;
        // If leaving sort:false root, or already folding - Fold to new location
        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute);

            // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable
            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        }

        // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out
        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }
          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;
            activeSortable._showClone(sortable);

            // Unfold animation for clones if showing from hidden
            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
        isOwner = _ref11.isOwner,
        activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });
      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
        rootEl = _ref12.rootEl,
        parentEl = _ref12.parentEl,
        sortable = _ref12.sortable,
        dispatchSortableEvent = _ref12.dispatchSortableEvent,
        oldIndex = _ref12.oldIndex,
        putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
        children = parentEl.children;

      // Multi-drag selection
      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }
        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));
        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvent: evt
          });

          // Modifier activated, select from last to dragEl
          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
              currentIndex = index(dragEl$1);
            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;
              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }
              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvent: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }
          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvent: evt
          });
        }
      }

      // Multi-drag drop
      if (dragStarted && this.isMultiDrag) {
        folding = false;
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
            multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();
          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;
                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect;

                  // Prepare unfold animation
                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            }

            // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed
            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }
              multiDragIndex++;
            });

            // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.
            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });
              if (update) {
                dispatchSortableEvent('update');
                dispatchSortableEvent('sort');
              }
            }
          }

          // Must be done after capturing individual rects (scroll bar)
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }
        multiDragSortable = toSortable;
      }

      // Remove clones if necessary
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();
      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return;

      // Only deselect if selection is in this sortable
      if (multiDragSortable !== this.sortable) return;

      // Only deselect if target is not item in this sortable
      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return;

      // Only deselect if left click
      if (evt && evt.button !== 0) return;
      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvent: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;
        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();
          multiDragSortable = sortable;
        }
        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },
      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
          index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;
      var oldIndicies = [],
        newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        });

        // multiDragElements will already be sorted if folding
        var newIndex;
        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }
        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();
        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }
        return key;
      }
    }
  });
}
function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}

/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */
function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];
    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}
function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.start-messaging {
  font-family: system, -apple-system, system-ui, BlinkMacSystemFont, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", "Kohinoor Devanagari", sans-serif;
  font-weight: normal;
  color: var(--primary-title);
  font-size: 0.9rem;
}

kbd {
  display: inline-block;
  padding: 4px 7px !important;
  color: #e9edef;
  background-color: #2a2f32;
  border: 1px solid #3b3e42 !important;
  border-radius: 4px;
  box-shadow: 0 2px 0 #1e2124;
}

.reminderChatItem .reminderBtn {
  display: inline-block !important;
}

.reminderBtn,
.doneBtn {
  display: none;
}

.reminderBtn:hover,
.doneBtn:hover {
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--button-primary-background);
  color: var(--button-primary);
}
.reminderBtn:hover .material-symbols-outlined,
.doneBtn:hover .material-symbols-outlined {
  font-variation-settings: normal !important;
}

.x10l6tqk.xh8yej3.x1g42fcv:hover .doneBtn,
.x10l6tqk.xh8yej3.x1g42fcv:hover .reminderBtn, .x10l6tqk.xh8yej3.x1g42fcv:has(._ak72._ak73._ak7p) .doneBtn,
.x10l6tqk.xh8yej3.x1g42fcv:has(._ak72._ak73._ak7p) .reminderBtn {
  display: inline-flex !important;
}
.x10l6tqk.xh8yej3.x1g42fcv:hover .doneBtn .material-symbols-outlined,
.x10l6tqk.xh8yej3.x1g42fcv:hover .reminderBtn .material-symbols-outlined, .x10l6tqk.xh8yej3.x1g42fcv:has(._ak72._ak73._ak7p) .doneBtn .material-symbols-outlined,
.x10l6tqk.xh8yej3.x1g42fcv:has(._ak72._ak73._ak7p) .reminderBtn .material-symbols-outlined {
  font-size: 22px;
}
.x10l6tqk.xh8yej3.x1g42fcv:hover div[role=gridcell]._ak8i > span:nth-child(-n+2), .x10l6tqk.xh8yej3.x1g42fcv:has(._ak72._ak73._ak7p) div[role=gridcell]._ak8i > span:nth-child(-n+2) {
  display: none;
}
.x10l6tqk.xh8yej3.x1g42fcv:hover div[role=gridcell]._ak8i > span:last-child button, .x10l6tqk.xh8yej3.x1g42fcv:has(._ak72._ak73._ak7p) div[role=gridcell]._ak8i > span:last-child button {
  margin-right: 6px;
}
.x10l6tqk.xh8yej3.x1g42fcv:hover div[role=gridcell]._ak8i > span:last-child button:last-child, .x10l6tqk.xh8yej3.x1g42fcv:has(._ak72._ak73._ak7p) div[role=gridcell]._ak8i > span:last-child button:last-child {
  margin-right: 0;
}
.x10l6tqk.xh8yej3.x1g42fcv:hover div[role=gridcell]._ak8i > span:last-child button:first-child, .x10l6tqk.xh8yej3.x1g42fcv:has(._ak72._ak73._ak7p) div[role=gridcell]._ak8i > span:last-child button:first-child {
  margin-left: 40px;
}
.x10l6tqk.xh8yej3.x1g42fcv:has(.x1n2onr6):hover::after, .x10l6tqk.xh8yej3.x1g42fcv:has(._ak72._ak73._ak7p)::after {
  content: "";
  width: 4px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: var(--unread-marker-background);
}

@media (min-width: 1024px) {
  .modal .modal-md .xxbb1rq.xxbb1rq {
    width: 440px;
  }
}
@media (max-width: 1023px) {
  .modal .modal-md .xc530u0.xc530u0 {
    width: 440px;
  }
}
.modal .modal-title {
  color: var(--text-secondary) !important;
  font-size: 17px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.modal .modal-title .material-symbols-outlined {
  margin-right: 8px;
}
.modal .modal-header {
  margin-left: 36px;
  margin-right: 36px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--background-default-hover);
}
.modal .modal-body {
  padding-top: 12px;
}

.snooze-options {
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
.snooze-options > .option:not(:last-child) {
  margin-bottom: 8px;
}

.option {
  padding: 15px 36px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 14px;
  color: var(--text-primary);
}
.option input[type=radio] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.option:has(input[type=radio]:checked)::after {
  content: "";
  width: 4px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: var(--unread-marker-background);
}
.option:not(:has(input[type=date])):hover {
  border-color: var(--background-default-hover);
  background: rgba(var(--primary-rgb), 0.12);
}
.option input[type=radio] {
  margin-right: 12px;
  accent-color: #009688;
}
.option input[type=date]::-webkit-calendar-picker-indicator,
.option input[type=time]::-webkit-calendar-picker-indicator {
  display: none;
}
.option input[type=date]::-webkit-inner-spin-button,
.option input[type=date]::-webkit-clear-button,
.option input[type=time]::-webkit-inner-spin-button,
.option input[type=time]::-webkit-clear-button {
  display: none;
}
.option input[type=date],
.option input[type=time] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  background: none;
  padding: 0;
  color: inherit;
  font: inherit;
}
.option input[type=date]:focus,
.option input[type=time]:focus {
  outline: none;
}

.snoozeConditionSelect {
  width: auto;
  -webkit-appearance: menulist;
  -moz-appearance: menulist;
  appearance: menulist;
}

.material-symbols-outlined.fill {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
}

.customNavBarItem {
  background-color: inherit;
}
.customNavBarItem.active {
  background-color: var(--menu-bar-item-background-active);
}
.customNavBarItem.active .material-symbols-outlined {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
}

[data-js-navbar=true]:has(._ajv7._ajv8._ajvb) .customNavBarItem.active {
  background-color: inherit !important;
}
[data-js-navbar=true]:has(._ajv7._ajv8._ajvb) .customNavBarItem.active .material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}

.form-group {
  padding: 15px 36px;
}
.form-group .form-input label {
  margin-bottom: 14px;
  display: block;
}
.form-group .form-input input {
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-start;
  border: none;
  border-bottom: 2px solid var(--input-border);
  background-color: transparent;
  color: var(--text-primary);
  padding-top: 8px;
  padding-bottom: 5px;
  min-height: 1.47em;
  user-select: text;
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 1.0625rem;
  line-height: 1.47em;
}
.form-group .form-input input:focus {
  outline: none;
  border: none;
  border-bottom: 2px solid var(--input-border-active);
}

.folders-list {
  padding: 0 36px;
}
.folders-list .folder-item {
  padding: 15px 0;
  display: flex;
  align-items: center;
}
.folders-list .folder-item .folder-name {
  display: flex;
  flex: 1;
  align-items: center;
  color: var(--text-primary);
  cursor: grab;
}
.folders-list .folder-item .folder-name .material-symbols-outlined {
  color: var(--icon-fixed);
  margin-right: 8px;
}
.folders-list .folder-item .folder-actions {
  display: flex;
  align-items: center;
  column-gap: 8px;
}`, "",{"version":3,"sources":["webpack://./src/main.scss"],"names":[],"mappings":"AAAA;EACE,6JAAA;EAGA,mBAAA;EACA,2BAAA;EACA,iBAAA;AADF;;AAIA;EACE,qBAAA;EACA,2BAAA;EACA,cAAA;EACA,yBAAA;EACA,oCAAA;EACA,kBAAA;EACA,2BAAA;AADF;;AAME;EACE,gCAAA;AAHJ;;AAOA;;EAEE,aAAA;AAJF;;AAOA;;EAEE,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,kDAAA;EACA,4BAAA;AAJF;AAME;;EACE,0CAAA;AAHJ;;AAUI;;;EAEE,+BAAA;AANN;AAQM;;;EACE,eAAA;AAJR;AASI;EACE,aAAA;AAPN;AAYM;EACE,iBAAA;AAVR;AAWQ;EACE,eAAA;AATV;AAWQ;EACE,iBAAA;AATV;AAeE;EAEE,WAAA;EACA,UAAA;EACA,YAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,iDAAA;AAdJ;;AAkBA;EAGM;IACE,YAAA;EAjBN;AACF;AAsBA;EAGM;IACE,YAAA;EAtBN;AACF;AA4BE;EACE,uCAAA;EACA,eAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;AA1BJ;AA4BI;EACE,iBAAA;AA1BN;AA8BE;EACE,iBAAA;EACA,kBAAA;EACA,oBAAA;EACA,wDAAA;AA5BJ;AA+BE;EACE,iBAAA;AA7BJ;;AAkCA;EACE,WAAA;EACA,uGAAA;AA/BF;AAmCE;EACE,kBAAA;AAjCJ;;AAsCA;EACE,kBAAA;EACA,eAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,OAAA;EACA,eAAA;EACA,0BAAA;AAnCF;AAsCE;EACE,kBAAA;EACA,UAAA;EACA,oBAAA;AApCJ;AAwCE;EACE,WAAA;EACA,UAAA;EACA,YAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,iDAAA;AAtCJ;AA0CE;EACE,6CAAA;EACA,0CAAA;AAxCJ;AA4CE;EACE,kBAAA;EACA,qBAAA;AA1CJ;AA8CE;;EAEE,aAAA;AA5CJ;AA+CE;;;;EAIE,aAAA;AA7CJ;AAiDE;;EAEE,gBAAA;EACA,wBAAA;EACA,qBAAA;EACA,YAAA;EACA,gBAAA;EACA,UAAA;EACA,cAAA;EACA,aAAA;AA/CJ;AAmDE;;EAEE,aAAA;AAjDJ;;AAqDA;EACE,WAAA;EACA,4BAAA;EACA,yBAAA;EACA,oBAAA;AAlDF;;AAsDE;EACE,kEAAA;AAnDJ;;AAwDA;EACE,yBAAA;AArDF;AAuDE;EACE,wDAAA;AArDJ;AAuDI;EACE,kEAAA;AArDN;;AA8DM;EACE,oCAAA;AA3DR;AA6DQ;EACE,kEAAA;AA3DV;;AAkEA;EACE,kBAAA;AA/DF;AAiEE;EACE,mBAAA;EACA,cAAA;AA/DJ;AAkEE;EACE,WAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,YAAA;EACA,4CAAA;EACA,6BAAA;EACA,0BAAA;EACA,gBAAA;EACA,mBAAA;EAEA,kBAAA;EACA,iBAAA;EACA,qBAAA;EACA,sBAAA;EAEA,oBAAA;EACA,mBAAA;AAlEJ;AAoEI;EACE,aAAA;EACA,YAAA;EACA,mDAAA;AAlEN;;AAuEA;EACE,eAAA;AApEF;AAsEE;EACE,eAAA;EACA,aAAA;EACA,mBAAA;AApEJ;AAsEI;EACE,aAAA;EACA,OAAA;EACA,mBAAA;EACA,0BAAA;EACA,YAAA;AApEN;AAsEM;EACE,wBAAA;EACA,iBAAA;AApER;AAwEI;EACE,aAAA;EACA,mBAAA;EACA,eAAA;AAtEN","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/chatActionButton.js":
/*!********************************************!*\
  !*** ./src/components/chatActionButton.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chatActionButton: () => (/* binding */ chatActionButton)
/* harmony export */ });
function chatActionButton(icon, onClick = {}, classList = "") {
  // Create button element
  const button = document.createElement("button");
  button.className = `xn6xy2s x1qx5ct2 xsgj6o6 xq22nx5 x16dsc37 ${classList}`;
  button.style.width = "20px";
  button.style.opacity = "1";

  // Create span element for icon
  const iconSpan = document.createElement("span");
  iconSpan.className = "material-symbols-outlined";
  iconSpan.textContent = icon;

  // Append the spans to the button
  button.appendChild(iconSpan);

  // Add event listeners
  if (typeof onClick === "function") {
    button.addEventListener(
      "click",
      () => {
        onClick();
      },
      true
    );
  }

  // Add mousedown and mouseup listeners
  button.addEventListener(
    "mousedown",
    (event) => event.stopPropagation(),
    true
  );
  button.addEventListener("mouseup", (event) => event.stopPropagation(), true);

  // Return the button element
  return button;
}


/***/ }),

/***/ "./src/components/chatMenuItem.js":
/*!****************************************!*\
  !*** ./src/components/chatMenuItem.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chatMenuItem: () => (/* binding */ chatMenuItem)
/* harmony export */ });
/* harmony import */ var _utils_eventHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/eventHelpers */ "./src/utils/eventHelpers.js");


/**
 * Creates an <li> element with a given text and click callback.
 *
 * @param {string} text - The text content to be added to the <li> element.
 * @param {Function} onClickCallback - The callback function to be executed when the <li> element is clicked.
 * @returns {HTMLElement} The created <li> element.
 */
function chatMenuItem(
  text,
  shortcut = "",
  callback = {},
  active = false
) {
  // Create the <li> element
  const liElement = document.createElement("li");
  liElement.tabIndex = 0;
  liElement.className = "_aj-r _aj-q _aj-_";
  liElement.setAttribute("data-animate-dropdown-item", "true");
  liElement.style.opacity = "1";

  // Handle hover state
  liElement.addEventListener("mouseover", () => {
    liElement.className = "_aj-s _aj-r _aj-q _aj-_";
  });
  liElement.addEventListener("mouseout", () => {
    liElement.className = "_aj-r _aj-q _aj-_";
  });

  // Create the <div> element inside <li>
  const divElement = document.createElement("div");
  divElement.className = "_aj-z _aj-t _alxo";
  divElement.setAttribute("role", "button");
  divElement.style.display = "flex";
  divElement.style.alignItems = "center";
  divElement.style.paddingRight = "24px";

  // Create a span for the chat name
  const chatNameSpan = document.createElement("span");
  chatNameSpan.textContent = text;
  chatNameSpan.style.flex = "1";

  // Add the chat name span to the <div>
  divElement.appendChild(chatNameSpan);

  // Create and add the check icon if active
  if (active) {
    const checkIconSpan = document.createElement("span");
    checkIconSpan.className = "material-symbols-outlined";
    checkIconSpan.textContent = "check"; // Material Icons check mark
    checkIconSpan.style.color = "var(--unread-marker-background)";
    divElement.appendChild(checkIconSpan);
  }

  if (shortcut) {
    const shortcutIconSpan = document.createElement("kbd");
    shortcutIconSpan.textContent = shortcut;
    divElement.appendChild(shortcutIconSpan);
  }

  // Append the <div> to the <li>
  liElement.appendChild(divElement);

  // Attach the click event listener
  liElement.addEventListener("click", () => {
    callback();
    (0,_utils_eventHelpers__WEBPACK_IMPORTED_MODULE_0__.simulateKeyPress)(document.body, 27);
  });

  return liElement;
}


/***/ }),

/***/ "./src/components/drawer.js":
/*!**********************************!*\
  !*** ./src/components/drawer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawer: () => (/* binding */ drawer)
/* harmony export */ });
function drawer(title, content) {
  return `
    <span class="x5yr21d x17qophe x6ikm8r x10wlt62 x10l6tqk x13vifvy xh8yej3">
      <div tabindex="-1" aria-label="Snooze tab drawer" id="snoozedChatsDrawer">
        <div class="x78zum5 xdt5ytf x5yr21d x17qophe x6ikm8r x10wlt62 x67bb7w x10l6tqk x13vifvy xh8yej3 x150wa6m xnpuxes copyable-area">
          <header class="x9f619 x78zum5 x1okw0bk x6s0dn4 x7j6532 xc73u3c x9mfa4r xzwifym x150wa6m">
            <div class="x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw xexx8yu x4uap5 x18d9i69 xkhd6sd">
              <div title="Snoozed" class="x104kibb x1iyjqo2 x4osyxg x6ikm8r x10wlt62 x1mzt3pk xo442l1 x1ua5tub x1y332i5 x117nqv4 x1aueamr x1wm35g xj8l9r2">
                <h1 class="x1qlqyl8 x1pd3egz xcgk4ki" aria-label="">
                  ${title}
                </h1>
              </div>
              <span class="x1okw0bk">
                <div class="_ajv2 _ajv1"><span class=""></span></div>
              </span>
            </div>
          </header>
          <div class="x5yr21d x78zum5 xdt5ytf x6ikm8r x10wlt62">
            <div class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 xdt5ytf x6s0dn4" style="flex-shrink: 0;">
              <div class="xh8yej3">
                ${content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}


/***/ }),

/***/ "./src/components/folderButton.js":
/*!****************************************!*\
  !*** ./src/components/folderButton.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   folderButton: () => (/* binding */ folderButton)
/* harmony export */ });
function folderButton(
  id = 0,
  isActive = false,
  text = "",
  onClick = {},
  onDoubleClick = {},
  unreadCount = 0
) {
  // Create button element
  const button = document.createElement("button");
  button.className = isActive
    ? "xjb2p0i x1ypdohk x972fbf xcfux6l x1qhh985 xm0m39n xzqyx8i xqa96yk xvwobac x1h2y310 x6prxxf xo1l8bm x1btupbp xdxn8r xmuu9lm x1690sq9 x1yrsyyn x10b6aqq x1ye3gou xn6708d"
    : "xjb2p0i x1ypdohk x972fbf xcfux6l x1qhh985 xm0m39n xzqyx8i xqa96yk xvwobac x1h2y310 x1mvgj39 x1yky6xw x6prxxf xo1l8bm x1btupbp xf573un x1yrsyyn x10b6aqq x1ye3gou xn6708d";

  button.tabIndex = 0;
  button.setAttribute("type", "button");
  button.setAttribute("id", `folder-${id}`); // Set ID for reference

  // Create inner div
  const innerDiv1 = document.createElement("div");
  innerDiv1.className =
    "x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x6s0dn4 align-items-center"; // Add align-items-center class

  // Create inner div text
  const innerDiv2 = document.createElement("div");
  innerDiv2.textContent = text;

  if (unreadCount) {
    innerDiv2.innerHTML += `<span
      class="x1rg5ohu x1xaadd7 x1pg5gke xo5v014 x1u28eo4 x2b8uid x16dsc37 x18ba5f9 x1sbl2l xy9co9w x5r174s x7h3shv x1tsellj x682dto x1e01kqd xpqt37d x9bpaai xk50ysn"
      style="margin-left: 8px;"
    >
      ${unreadCount}
    </span>`;
  }

  // Append inner divs to button
  innerDiv1.appendChild(innerDiv2);
  button.appendChild(innerDiv1);

  if (typeof onClick === "function") {
    button.addEventListener("click", () => {
      onClick();
    });
  }

  if (typeof onDoubleClick === "function") {
    button.addEventListener("dblclick", () => {
      onDoubleClick();
    });
  }

  // Return the button element
  return button;
}


/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modal)
/* harmony export */ });
class Modal {
  constructor(options) {
    this.modalContent = options.modalContent || "";
    this.formHandler = options.formHandler || null;
    this.shortcutHandler = options.shortcutHandler || null; // Custom shortcut handler

    this.modalElement = this.createModalElement();

    this.handleEscKey = this.handleEscKey.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.initialize();
  }

  createModalElement() {
    const modalDiv = document.createElement("div");
    modalDiv.classList.add(
      "x10l6tqk",
      "x13vifvy",
      "xds687c",
      "x1ey2m1c",
      "x17qophe"
    );
    modalDiv.setAttribute("tabindex", "-1");
    modalDiv.innerHTML = `
      <div tabindex="-1" class="modal">
        <div data-animate-modal-backdrop="true"
          class="xixxii4 x13vifvy x17qophe x9f619 xh8yej3 x5yr21d x1bpt9pm xw2csxc x1odjw0f xa03szm xnpuxes copyable-area">
          <div class="x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 xpb48g7 x1jn0hjm x1us19tq"
            role="dialog">
            <div class="x9f619 x78zum5 x1c4vz4f x2lah0s xdl72j9 xdt5ytf xkwfhqy x17e6fzg x15dh256 x1t7u3xy x1shw4ur x6ikm8r x10wlt62 x14atkfc xexx8yu x4uap5 x18d9i69 xkhd6sd x1iek97a"
              data-animate-modal-popup="true">
              <div class="x1n2onr6 x1iyjqo2 xs83m0k x1l7klhg x1mzt3pk xeaf4i8" data-animate-modal-body="true">
                ${this.modalContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return modalDiv;
  }

  initialize() {
    const formElement = this.modalElement.querySelector("form");
    if (formElement && this.formHandler) {
      formElement.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Find the submit button that was clicked
        const submitter =
          e.submitter || formElement.querySelector('button[type="submit"]');

        // Create FormData from the form
        const formData = new FormData(formElement);

        // Manually add the action from the clicked button, if available
        if (submitter && submitter.getAttribute("data-action")) {
          formData.append("formAction", submitter.getAttribute("data-action"));
          formData.append("objectId", submitter.getAttribute("data-object-id"));
        }

        const success = await this.formHandler(formData);
        if (success) {
          this.closeModal();
        }
      });
    }

    document.addEventListener("keydown", this.handleEscKey);
    const backdrop = this.modalElement.querySelector(
      "[data-animate-modal-backdrop]"
    );

    if (backdrop) {
      backdrop.addEventListener("click", this.handleOutsideClick);
    }
  }

  handleEscKey(e) {
    if (e.key === "Escape") {
      this.closeModal();
    }
  }

  handleOutsideClick(e) {
    const popup = this.modalElement.querySelector("[data-animate-modal-popup]");
    if (!popup.contains(e.target)) {
      this.closeModal();
    }
  }

  openModal() {
    document.body.appendChild(this.modalElement);
    document.addEventListener("keydown", this.handleKeyDown, true); // Capture keydown events
  }

  closeModal() {
    document.body.removeChild(this.modalElement);
    document.removeEventListener("keydown", this.handleKeyDown, true); // Remove keydown event listener
    document.removeEventListener("keydown", this.handleEscKey);
    const backdrop = this.modalElement.querySelector(
      "[data-animate-modal-backdrop]"
    );
    if (backdrop) {
      backdrop.removeEventListener("click", this.handleOutsideClick);
    }
  }

  handleKeyDown(e) {
    if (e.key === "Escape") {
      this.closeModal();
    } else if (this.shortcutHandler) {
      this.shortcutHandler(e); // Call custom shortcut handler
    } else {
      // Prevent default action for all other keys
      e.stopPropagation();
    }
  }
}


/***/ }),

/***/ "./src/components/navBarItem.js":
/*!**************************************!*\
  !*** ./src/components/navBarItem.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navBarItem: () => (/* binding */ navBarItem)
/* harmony export */ });
function navBarItem(drawerId, title, icon, onClick = {}) {
  // Create the main div for the nav item
  const navDiv = document.createElement("div");
  navDiv.className = "_ajv7 _ajvb customNavBarItem";
  navDiv.dataset.drawerId = drawerId;

  // Create the button div
  const buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("aria-disabled", "false");
  buttonDiv.setAttribute("role", "button");
  buttonDiv.setAttribute("tabindex", "0");
  buttonDiv.className = "_ajv6 x1y1aw1k x1sxyh0 xwib8y2 xurb0ha";
  buttonDiv.setAttribute("aria-label", title);
  buttonDiv.setAttribute("title", title);
  buttonDiv.setAttribute("aria-expanded", "false");

  // Create the icon span
  const iconSpan = document.createElement("span");
  iconSpan.setAttribute("data-icon", icon);

  // Use Material Icons font for the icon
  const iconElement = document.createElement("span");
  iconElement.className = "material-symbols-outlined";
  iconElement.textContent = icon;

  iconSpan.appendChild(iconElement);

  // Append the icon span to the button div
  buttonDiv.appendChild(iconSpan);

  // Create inner div and append to button div
  const innerDiv = document.createElement("div");
  innerDiv.className = "x1n2onr6";
  buttonDiv.appendChild(innerDiv);

  // Append button div to main nav item div
  navDiv.appendChild(buttonDiv);

  if (typeof onClick === "function") {
    buttonDiv.addEventListener("click", () => {
      let previouslyActive = document.querySelector(".customNavBarItem.active");
      if (previouslyActive) {
        previouslyActive.classList.remove("active");
      }

      navDiv.classList.add("active");

      onClick();
    });
  }

  return navDiv;
}


/***/ }),

/***/ "./src/components/reminderChatItem.js":
/*!********************************************!*\
  !*** ./src/components/reminderChatItem.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reminderChatItem: () => (/* binding */ reminderChatItem)
/* harmony export */ });
function reminderChatItem(chatId, userName, timestamp) {
  return `
    <div
      class="x10l6tqk xh8yej3 x1g42fcv unloadedChat reminderChatItem"
      role="listitem"
      style="
        transform: none !important;
        position: relative !important;
        display: block;
      "
      data-chat-id=${chatId}
      data-chat-username=${userName}
    >
      <div class="x1n2onr6">
        <div tabindex="-1" class="">
          <div class="_ak72 _ak73">
            <div class="_ak8n">
              <div class="_ak8h">
                <div>
                  <div
                    class="x1n2onr6 x14yjl9h xudhj91 x18nykt9 xww2gxu profilePic"
                    style="height: 49px; width: 49px"
                  >
                    <div class="x10l6tqk x13vifvy x17qophe x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d x705qin xsp8fsz">
                      <span aria-hidden="true" data-icon="default-user">
                        <svg viewBox="0 0 212 212" height="212" width="212" preserveAspectRatio="xMidYMid meet" class="xh8yej3 x5yr21d" version="1.1" x="0px" y="0px" enable-background="new 0 0 212 212">
                          <title>default-user</title>
                          <path fill="#DFE5E7" class="background" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z"></path>
                          <g>
                            <path fill="#FFFFFF" class="primary" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z"></path><path fill="#FFFFFF" class="primary" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z"></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="_ak8l">
              <div role="gridcell" aria-colindex="2" class="_ak8o">
                <div class="_ak8q">
                  <div class="_aou8 _aj_h">
                    <span
                      dir="auto"
                      class="x1iyjqo2 x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft x1rg5ohu _ao3e userName"
                      style="min-height: 0px"
                    >
                      ${userName}
                    </span>
                  </div>
                </div>
                <div class="_ak8i">
                  ${timestamp}
                </div>
              </div>
              <div class="_ak8j">
                <div class="_ak8k">
                  <span class="x78zum5 x1cy8zhl">
                    <span
                      dir="ltr"
                      aria-label=""
                      class="x1iyjqo2 x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft x1rg5ohu _ao3e lastMsg"
                      style="min-height: 0px"
                    >
                    </span>
                  </span>
                </div>
                <div role="gridcell" aria-colindex="1" class="_ak8i">
                  <span class=""></span>
                  <span class=""></span>
                  <span class="">
                    <button
                      class="xn6xy2s x1qx5ct2 xsgj6o6 xq22nx5 x16dsc37 reminderBtn"
                      style="width: 20px; opacity: 1"
                    >
                      <span class="material-symbols-outlined fill">schedule</span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}


/***/ }),

/***/ "./src/features/done/index.js":
/*!************************************!*\
  !*** ./src/features/done/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeDone: () => (/* binding */ initializeDone)
/* harmony export */ });
/* harmony import */ var _components_chatActionButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/chatActionButton */ "./src/components/chatActionButton.js");
/* harmony import */ var _whatsappStore_markChatDone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../whatsappStore/markChatDone */ "./src/whatsappStore/markChatDone.js");

// import { navBarItem } from "../../components/navBarItem";
// import { getElementByXpath } from "../../utils/domHelpers";


function initializeDone() {
  // Wait until WhatsApp builds up the interface
  document.addEventListener("whatsappInitialized", () => {
    document.addEventListener("chatOnHover", (event) => {
      const { chat, chatElement } = event.detail;

      // Setup a MutationObserver that adds Chat action buttons while hovering.
      const chatButtons = chatElement.querySelector(
        "[role='gridcell']._ak8i > span:nth-child(3)"
      );
      if (chatButtons) {
        const existingDoneBtn = chatButtons.querySelector(".doneBtn");
        const newDoneBtn = (0,_components_chatActionButton__WEBPACK_IMPORTED_MODULE_0__.chatActionButton)(
          "check",
          () => (0,_whatsappStore_markChatDone__WEBPACK_IMPORTED_MODULE_1__.markChatDone)(chat.chatId),
          "doneBtn"
        );

        if (existingDoneBtn) {
          chatButtons.replaceChild(newDoneBtn, existingDoneBtn);
        } else {
          chatButtons.insertChildAtIndex(newDoneBtn, 0);
        }
      }
    });

    // // Add the Snoozed icon at WhatsApp sidenav navigation.
    // const sidenav = getElementByXpath(
    //   `//*[@id="app"]/div/div[2]/header/div/div/div/div/span/div/div[1]`
    // );

    // sidenav.insertChildAtIndex(
    //   navBarItem("archivedChats", "Archived", "inventory_2", () =>
    //     openDrawerLeft()
    //   ),
    //   2
    // );
  });
}


/***/ }),

/***/ "./src/features/folders/actions.js":
/*!*****************************************!*\
  !*** ./src/features/folders/actions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeFolder: () => (/* binding */ removeFolder),
/* harmony export */   switchFolder: () => (/* binding */ switchFolder),
/* harmony export */   updateArchiveStatus: () => (/* binding */ updateArchiveStatus),
/* harmony export */   updateContactsInFolder: () => (/* binding */ updateContactsInFolder),
/* harmony export */   updateUnreadCount: () => (/* binding */ updateUnreadCount)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/features/folders/utils.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/features/folders/storage.js");
/* harmony import */ var _whatsappStore_filterChats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../whatsappStore/filterChats */ "./src/whatsappStore/filterChats.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ "./src/features/folders/ui.js");





function updateContactsInFolder(folderId, contactId, archived) {
  const targetFolder = _storage__WEBPACK_IMPORTED_MODULE_1__.folders.find((f) => f.id === folderId);
  if (!targetFolder) {
    console.log(`Folder with ID ${folderId} not found.`);
    return;
  }

  // Remove contact from all other folders
  _storage__WEBPACK_IMPORTED_MODULE_1__.folders.forEach((folder) => {
    if (folder.id !== folderId) {
      const contactIndex = folder.contacts.findIndex((c) => c.id === contactId);
      if (contactIndex !== -1) {
        folder.contacts.splice(contactIndex, 1);
      }
    }
  });

  // Add contact to target folder
  const existingContact = targetFolder.contacts.find((c) => c.id === contactId);
  if (!existingContact) {
    targetFolder.contacts.push({
      id: contactId,
      unreadCount: 0,
      archived: archived,
    });
  }

  (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveFoldersToStorage)(_storage__WEBPACK_IMPORTED_MODULE_1__.folders);

  // Update UI
  _storage__WEBPACK_IMPORTED_MODULE_1__.folders.forEach((folder) => {
    if (folder.id === _storage__WEBPACK_IMPORTED_MODULE_1__.currentActiveFolder) {
      const updatedChats = folder.contacts.map((c) => c.id);
      (0,_whatsappStore_filterChats__WEBPACK_IMPORTED_MODULE_2__.filterChats)(updatedChats);
    }

    const totalChatsCount = folder.contacts.reduce(
      (sum, contact) => sum + (!contact.archived ? 1 : 0),
      0
    );
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.updateUIWithUpdatedFolderName)(folder.id, folder.name, totalChatsCount);
  });
}

function switchFolder(folderId) {
  const folder = _storage__WEBPACK_IMPORTED_MODULE_1__.folders.find((f) => f.id === folderId);
  const chats = folder.contacts.map((c) => c.id);

  // Deactivate previous folder
  if (_storage__WEBPACK_IMPORTED_MODULE_1__.currentActiveFolder) {
    const previousButton = document.getElementById(
      `folder-${_storage__WEBPACK_IMPORTED_MODULE_1__.currentActiveFolder}`
    );
    if (previousButton) {
      previousButton.className =
        "xjb2p0i x1ypdohk x972fbf xcfux6l x1qhh985 xm0m39n xzqyx8i xqa96yk xvwobac x1h2y310 x1mvgj39 x1yky6xw x6prxxf xo1l8bm x1btupbp xf573un x1yrsyyn x10b6aqq x1ye3gou xn6708d";
      previousButton.setAttribute("aria-pressed", "false");
    }
  }

  // Activate selected folder
  const activeButton = document.getElementById(`folder-${folderId}`);
  if (activeButton) {
    activeButton.className =
      "xjb2p0i x1ypdohk x972fbf xcfux6l x1qhh985 xm0m39n xzqyx8i xqa96yk xvwobac x1h2y310 x6prxxf xo1l8bm x1btupbp xdxn8r xmuu9lm x1690sq9 x1yrsyyn x10b6aqq x1ye3gou xn6708d";
    activeButton.setAttribute("aria-pressed", "true");
  }

  (0,_storage__WEBPACK_IMPORTED_MODULE_1__.setCurrentActiveFolder)(folderId);
  (0,_whatsappStore_filterChats__WEBPACK_IMPORTED_MODULE_2__.filterChats)(chats);
}

// Add this new function to update unread count
function updateUnreadCount(chatId, unreadCount) {
  _storage__WEBPACK_IMPORTED_MODULE_1__.folders.forEach((folder) => {
    const contact = folder.contacts.find((c) => c.id === chatId);
    if (contact) {
      contact.unreadCount = unreadCount;
    }
  });
  (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveFoldersToStorage)(_storage__WEBPACK_IMPORTED_MODULE_1__.folders);
}

function removeFolder(folderId) {
  if (_storage__WEBPACK_IMPORTED_MODULE_1__.folders.find((f) => f.id === folderId).inbox) return;
  const index = _storage__WEBPACK_IMPORTED_MODULE_1__.folders.findIndex((f) => f.id === folderId);
  if (index !== -1) {
    const inboxFolder = _storage__WEBPACK_IMPORTED_MODULE_1__.folders.find((f) => f.inbox === true);

    if (inboxFolder) {
      // Add contacts of the folder to be removed to the inbox folder
      inboxFolder.contacts.push(..._storage__WEBPACK_IMPORTED_MODULE_1__.folders[index].contacts);
    }

    _storage__WEBPACK_IMPORTED_MODULE_1__.folders.splice(index, 1);

    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveFoldersToStorage)(_storage__WEBPACK_IMPORTED_MODULE_1__.folders);
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.removeFolderFromUI)(folderId);

    const totalChatsCount = inboxFolder.contacts.reduce(
      (sum, contact) => sum + (!contact.archived ? 1 : 0),
      0
    );
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.updateUIWithUpdatedFolderName)(
      inboxFolder.id,
      inboxFolder.name,
      totalChatsCount
    );

    switchFolder(1);
  }
}

// Set up listener for UNREAD_COUNT_CHANGE
window.addEventListener("message", function (event) {
  if (
    event.source === window &&
    event.data &&
    event.data.type === "UNREAD_COUNT_CHANGE"
  ) {
    const { chatId, unreadCount } = event.data;
    updateUnreadCount(chatId, unreadCount);
  }
});

// Add this new function to update archive status
function updateArchiveStatus(chatId, archived) {
  let updatedFolder = null;
  _storage__WEBPACK_IMPORTED_MODULE_1__.folders.forEach((folder) => {
    const contact = folder.contacts.find((c) => c.id === chatId);
    if (contact) {
      contact.archived = archived;
      updatedFolder = folder;
    }
  });
  (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveFoldersToStorage)(_storage__WEBPACK_IMPORTED_MODULE_1__.folders);

  if (updatedFolder !== null) {
    const totalChatsCount = updatedFolder.contacts.reduce(
      (sum, contact) => sum + (!contact.archived ? 1 : 0),
      0
    );
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.updateUIWithUpdatedFolderName)(
      updatedFolder.id,
      updatedFolder.name,
      totalChatsCount
    );
  }
}

// Set up listener for ARCHIVE_CHAT_EVENT
window.addEventListener("message", function (event) {
  if (
    event.source === window &&
    event.data &&
    event.data.type === "ARCHIVE_CHAT_EVENT"
  ) {
    const { chatId, archived } = event.data;
    updateArchiveStatus(chatId, archived);
  }
});

// Set up listener for CHATS_SYNC
window.addEventListener("message", function (event) {
  if (
    event.source === window &&
    event.data &&
    event.data.type === "CHATS_SYNC"
  ) {
    const chats = event.data.chats;

    _storage__WEBPACK_IMPORTED_MODULE_1__.folders.forEach((folder) => {
      folder.contacts = folder.contacts.map((contact) => {
        const updatedContact = chats.find((chat) => chat.id === contact.id);
        return updatedContact ? updatedContact : contact;
      });
    });

    // Handle inbox folder separately
    const inboxFolder = _storage__WEBPACK_IMPORTED_MODULE_1__.folders.find((folder) => folder.inbox);
    if (inboxFolder) {
      const allContacts = _storage__WEBPACK_IMPORTED_MODULE_1__.folders.flatMap((folder) =>
        folder.contacts.map((c) => c.id)
      );
      const newContacts = chats.filter(
        (chat) => !allContacts.includes(chat.id)
      );
      inboxFolder.contacts.push(...newContacts);
    }

    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveFoldersToStorage)(_storage__WEBPACK_IMPORTED_MODULE_1__.folders);
    (0,_ui__WEBPACK_IMPORTED_MODULE_3__.initializeUI)();
    switchFolder(1);
  }
});

// Set up listener for CHAT_ADDED
window.addEventListener("message", function (event) {
  if (
    event.source === window &&
    event.data &&
    event.data.type === "CHAT_ADDED"
  ) {
    const chatId = event.data.chatId;
    const inboxFolder = _storage__WEBPACK_IMPORTED_MODULE_1__.folders.find((folder) => folder.inbox);
    if (inboxFolder) {
      inboxFolder.contacts.push({
        id: chatId,
        archived: false,
      });
      (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveFoldersToStorage)(_storage__WEBPACK_IMPORTED_MODULE_1__.folders);

      const totalChatsCount = inboxFolder.contacts.reduce(
        (sum, contact) => sum + (!contact.archived ? 1 : 0),
        0
      );
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.updateUIWithUpdatedFolderName)(
        inboxFolder.id,
        inboxFolder.name,
        totalChatsCount
      );
    }
  }
});

// Set up listener for CHAT_REMOVED
window.addEventListener("message", function (event) {
  if (
    event.source === window &&
    event.data &&
    event.data.type === "CHAT_REMOVED"
  ) {
    const chatId = event.data.chatId;
    let targetFolder = null;

    // Find the folder containing the contact
    _storage__WEBPACK_IMPORTED_MODULE_1__.folders.forEach((folder) => {
      const index = folder.contacts.findIndex((c) => c.id === chatId);
      if (index !== -1) {
        targetFolder = folder;
        folder.contacts.splice(index, 1);
      }
    });

    if (targetFolder) {
      (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveFoldersToStorage)(_storage__WEBPACK_IMPORTED_MODULE_1__.folders);

      const totalChatsCount = targetFolder.contacts.reduce(
        (sum, contact) => sum + (!contact.archived ? 1 : 0),
        0
      );
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.updateUIWithUpdatedFolderName)(
        targetFolder.id,
        targetFolder.name,
        totalChatsCount
      );
    }
  }
});

// Set up listener for FILTER_CHATS_BY_ACTIVE_FOLDER
window.addEventListener("message", function (event) {
  if (
    event.source === window &&
    event.data &&
    event.data.type === "FILTER_CHATS_BY_ACTIVE_FOLDER"
  ) {
    const activeFolder = _storage__WEBPACK_IMPORTED_MODULE_1__.folders.find(
      (folder) => folder.id === _storage__WEBPACK_IMPORTED_MODULE_1__.currentActiveFolder
    );
    (0,_whatsappStore_filterChats__WEBPACK_IMPORTED_MODULE_2__.filterChats)(activeFolder.contacts.map((c) => c.id));
  }
});


/***/ }),

/***/ "./src/features/folders/folderForm.js":
/*!********************************************!*\
  !*** ./src/features/folders/folderForm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   folderForm: () => (/* binding */ folderForm)
/* harmony export */ });
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/modal */ "./src/components/modal.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/features/folders/storage.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/features/folders/utils.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/features/folders/actions.js");





function folderForm(folderId = null) {
  const isEditMode = folderId !== null;
  const folder = isEditMode ? _storage__WEBPACK_IMPORTED_MODULE_1__.folders.find((f) => f.id === folderId) : null;

  const folderFormContent = `
    <form id="folderForm">
      <div class="x12lqup9 x1o1kx08">
        <div class="modal-md x9f619 x1p5oq8j">
          <div class="modal-header">
            <p class="modal-title x1w7sdjq x1fcty0u">
              <span class="material-symbols-outlined">${
                isEditMode ? "folder" : "create_new_folder"
              }</span>
              ${isEditMode ? "Edit folder" : "New folder"}
            </p>
          </div>
          <div class="modal-body xdt5ytf xubnuyq xw2csxc x1odjw0f xo6wm36 x1iegka5 xc530u0 x8zx4qv x1gcmwly x17sy6yu xwsakjw x1vz1ssi xxbb1rq xwxc41k">
            <div class="form-group">
              <div class="form-input">
                <label class="x1f6kntn x1u7k74 x1n68mz9 x1fcty0u">Folder name</label>
                <input type="text" name="folderName" value="${
                  isEditMode ? folder.name : ""
                }" required placeholder="🤑 Leads" class="selectable-text copyable-text">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="x78zum5 x8hhl5t xp4054r xuxw1ft x123j3cw x1gtfrk1 x156go17 x1sqk8ge"
      >
        <div style="flex: 1;"></div>
        <div
          class="x13a6bvl x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np xuk3077 x40hh3e"
        >
          ${
            isEditMode && !folder.inbox
              ? `
          <button
            data-action="remove"
            type="submit"
            class="x1sr8853 x889kno x1a8lsjc x1n2onr6 xk50ysn x1f6kntn xyesn5m x1z11no5 xjy5m1g x1mnwbp6 x4pb5v6 x178xt8z xm81vs4 xso031l xy80clv x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x1v8p93f xogb00i x16stqrj x1ftr3km x1hl8ikr xfagghw x9dyr19 x9lcvmn xcjl5na x1k3x3db xuxw1ft"
          >
            <div
              class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4"
            >
              <div
                class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x3pnbk8 xfex06f xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4"
                style="flex-grow: 1"
              >
                Remove
              </div>
            </div>
          </button> `
              : ""
          }
          <button
            data-action="submit"
            type="submit"
            class="x889kno x1a8lsjc xbbxn1n xxbr6pl x1n2onr6 x1rg5ohu xk50ysn x1f6kntn xyesn5m x1z11no5 xjy5m1g x1mnwbp6 x4pb5v6 x178xt8z xm81vs4 xso031l xy80clv x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x1v8p93f xogb00i x16stqrj x1ftr3km x1hl8ikr xfagghw x9dyr19 x9lcvmn xbtce8p x14v0smp xo8ufso xcjl5na x1k3x3db xuxw1ft xv52azi"
          >
            <div
              class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4"
            >
              <div
                class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x3pnbk8 xfex06f xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4"
                style="flex-grow: 1"
              >
                OK
              </div>
            </div>
          </button>
        </div>
      </div>
    </form>
  `;

  const modal = new _components_modal__WEBPACK_IMPORTED_MODULE_0__["default"]({
    modalContent: folderFormContent,
    formHandler: async (formData) => {
      const folderName = formData.get("folderName");
      const action = formData.get("formAction");

      if (action === "submit") {
        if (isEditMode) {
          folder.name = folderName;
          (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveFoldersToStorage)(_storage__WEBPACK_IMPORTED_MODULE_1__.folders);
          (0,_utils__WEBPACK_IMPORTED_MODULE_2__.updateUIWithUpdatedFolderName)(folderId, folderName);
        } else {
          const highestId = _storage__WEBPACK_IMPORTED_MODULE_1__.folders.reduce(
            (max, folder) => Math.max(max, folder.id),
            0
          );
          const newId = highestId + 1;
          const newFolder = { id: newId, name: folderName, contacts: [] };
          _storage__WEBPACK_IMPORTED_MODULE_1__.folders.push(newFolder);
          (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveFoldersToStorage)(_storage__WEBPACK_IMPORTED_MODULE_1__.folders);
          (0,_utils__WEBPACK_IMPORTED_MODULE_2__.updateUIWithNewFolder)(newId, folderName);
          (0,_actions__WEBPACK_IMPORTED_MODULE_3__.switchFolder)(newId);
        }
        return true;
      } else if (action === "remove" && isEditMode) {
        (0,_actions__WEBPACK_IMPORTED_MODULE_3__.removeFolder)(folderId);
        return true;
      }
      return false;
    },
  });

  modal.openModal();

  // Add event listener for the Enter key
  document.getElementById("folderForm").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const submitButton = document.querySelector(
        'button[data-action="submit"]'
      );
      submitButton.click();
    }
  });
}


/***/ }),

/***/ "./src/features/folders/foldersForm.js":
/*!*********************************************!*\
  !*** ./src/features/folders/foldersForm.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   foldersForm: () => (/* binding */ foldersForm)
/* harmony export */ });
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/modal */ "./src/components/modal.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/features/folders/actions.js");
/* harmony import */ var _folderForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folderForm */ "./src/features/folders/folderForm.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/features/folders/storage.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui */ "./src/features/folders/ui.js");







function foldersForm() {
  const foldersList = _storage__WEBPACK_IMPORTED_MODULE_3__.folders
    .map(
      (folder) => `
    <div class="folder-item" data-folder-id="${folder.id}">
      <div class="folder-name">
        <span class="material-symbols-outlined">drag_indicator</span>
        ${folder.name}
      </div>
      <div class="folder-actions">
        <button type="submit" class="xjb2p0i xk390pu x1heor9g x1ypdohk xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xexx8yu x4uap5 x18d9i69 xkhd6sd _ald6" data-action="edit" data-object-id="${
          folder.id
        }">
          <span class="material-symbols-outlined _ald7">edit</span>
        </button>
        ${
          folder.inbox
            ? ""
            : `<button type="submit" class="xjb2p0i xk390pu x1heor9g x1ypdohk xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xexx8yu x4uap5 x18d9i69 xkhd6sd _ald6" data-action="remove" data-object-id="${folder.id}">
          <span class="material-symbols-outlined _ald7">delete</span>
        </button>`
        }
      </div>
    </div>
  `
    )
    .join("");

  const foldersFormContent = `
    <form id="foldersForm">
      <div class="x12lqup9 x1o1kx08">
        <div class="modal-md x9f619 x1p5oq8j">
          <div class="modal-header">
            <p class="modal-title x1w7sdjq x1fcty0u">
              <span class="material-symbols-outlined">folder_managed</span>
              Your folders
            </p>
          </div>
          <div class="modal-body xdt5ytf xubnuyq xw2csxc x1odjw0f xo6wm36 x1iegka5 xc530u0 x8zx4qv x1gcmwly x17sy6yu xwsakjw x1vz1ssi xxbb1rq xwxc41k">
            <div id="folders-list" class="folders-list">
              ${foldersList}
            </div>
          </div>
        </div>
      </div>
      <div
        class="x78zum5 x8hhl5t xp4054r xuxw1ft x123j3cw x1gtfrk1 x156go17 x1sqk8ge"
      >
        <div class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np xuk3077 x40hh3e" style="flex: 1;">
          <button
            data-action="create"
            type="submit"
            class="x1n68mz9 x889kno x1a8lsjc x1n2onr6 xk50ysn x1f6kntn xyesn5m x1z11no5 xjy5m1g x1mnwbp6 x4pb5v6 x178xt8z xm81vs4 xso031l xy80clv x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x1v8p93f xogb00i x16stqrj x1ftr3km x1hl8ikr xfagghw x9dyr19 x9lcvmn xcjl5na x1k3x3db xuxw1ft"
          >
            <div
              class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4"
            >
              <div
                class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x3pnbk8 xfex06f xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4"
                style="flex-grow: 1"
              >
                Create folder
              </div>
            </div>
          </button>
        </div>
        <div
          class="x13a6bvl x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np xuk3077 x40hh3e"
        >
          <button
            data-action="submit"
            type="submit"
            class="x889kno x1a8lsjc xbbxn1n xxbr6pl x1n2onr6 x1rg5ohu xk50ysn x1f6kntn xyesn5m x1z11no5 xjy5m1g x1mnwbp6 x4pb5v6 x178xt8z xm81vs4 xso031l xy80clv x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x1v8p93f xogb00i x16stqrj x1ftr3km x1hl8ikr xfagghw x9dyr19 x9lcvmn xbtce8p x14v0smp xo8ufso xcjl5na x1k3x3db xuxw1ft xv52azi"
          >
            <div
              class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4"
            >
              <div
                class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x3pnbk8 xfex06f xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4"
                style="flex-grow: 1"
              >
                OK
              </div>
            </div>
          </button>
        </div>
      </div>
    </form>
  `;

  const modal = new _components_modal__WEBPACK_IMPORTED_MODULE_0__["default"]({
    modalContent: foldersFormContent,
    formHandler: async (formData) => {
      const action = formData.get("formAction");
      const objectId = parseInt(formData.get("objectId"));

      switch (action) {
        case "edit":
          (0,_folderForm__WEBPACK_IMPORTED_MODULE_2__.folderForm)(objectId);
          return true;
        case "remove":
          (0,_actions__WEBPACK_IMPORTED_MODULE_1__.removeFolder)(objectId);
          return true;
        case "create":
          (0,_folderForm__WEBPACK_IMPORTED_MODULE_2__.folderForm)();
          return true;
        case "submit":
          updateFolderPositions();
          return true;
      }
    },
  });

  modal.openModal();

  initializeDragAndDrop();
}

function initializeDragAndDrop() {
  const foldersList = document.getElementById("folders-list");

  new sortablejs__WEBPACK_IMPORTED_MODULE_4__["default"](foldersList, {
    animation: 150,
    handle: ".folder-item",
    onEnd: (evt) => {
      // This event is triggered when a drag operation ends
      // You can use it for immediate updates if needed
    },
  });
}

function updateFolderPositions() {
  const folderItems = document.querySelectorAll(".folder-item");
  const updatedFolders = Array.from(folderItems).map((item, index) => {
    const folderId = parseInt(item.dataset.folderId);
    const folder = _storage__WEBPACK_IMPORTED_MODULE_3__.folders.find((f) => f.id === folderId);
    return { ...folder, position: index };
  });
  // Update the folders array with new positions
  _storage__WEBPACK_IMPORTED_MODULE_3__.folders.length = 0;
  _storage__WEBPACK_IMPORTED_MODULE_3__.folders.push(...updatedFolders);
  // Save the updated folders to storage
  (0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveFoldersToStorage)(_storage__WEBPACK_IMPORTED_MODULE_3__.folders);

  // Update the UI to reflect the new order
  (0,_ui__WEBPACK_IMPORTED_MODULE_5__.updateFoldersUI)();
}


/***/ }),

/***/ "./src/features/folders/index.js":
/*!***************************************!*\
  !*** ./src/features/folders/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeFolders: () => (/* binding */ initializeFolders)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/features/folders/storage.js");
/* harmony import */ var _shortcuts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shortcuts */ "./src/features/folders/shortcuts.js");
/* harmony import */ var _whatsappStore_filterChats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../whatsappStore/filterChats */ "./src/whatsappStore/filterChats.js");
/* harmony import */ var _whatsappStore_messagesListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../whatsappStore/messagesListener */ "./src/whatsappStore/messagesListener.js");
/* harmony import */ var _whatsappStore_archiveChatEventListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../whatsappStore/archiveChatEventListener */ "./src/whatsappStore/archiveChatEventListener.js");
/* harmony import */ var _whatsappStore_requestMoveToForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../whatsappStore/requestMoveToForm */ "./src/whatsappStore/requestMoveToForm.js");
/* harmony import */ var _whatsappStore_chatsSync__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../whatsappStore/chatsSync */ "./src/whatsappStore/chatsSync.js");
/* harmony import */ var _moveToForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./moveToForm */ "./src/features/folders/moveToForm.js");
/* harmony import */ var _whatsappStore_forwardFilterHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../whatsappStore/forwardFilterHandler */ "./src/whatsappStore/forwardFilterHandler.js");










function initializeFolders() {
  (0,_storage__WEBPACK_IMPORTED_MODULE_0__.loadFoldersFromStorage)((loadedFolders) => {});

  // Listen for custom event and initialize features
  document.addEventListener("whatsappInitialized", () => {
    (0,_whatsappStore_chatsSync__WEBPACK_IMPORTED_MODULE_6__.chatsSync)();

    (0,_shortcuts__WEBPACK_IMPORTED_MODULE_1__.setupKeyboardListeners)();
    (0,_whatsappStore_requestMoveToForm__WEBPACK_IMPORTED_MODULE_5__.requestMoveToFormListener)();

    (0,_whatsappStore_filterChats__WEBPACK_IMPORTED_MODULE_2__.filterChatsListener)();
    (0,_whatsappStore_messagesListener__WEBPACK_IMPORTED_MODULE_3__.messagesListener)();
    (0,_whatsappStore_archiveChatEventListener__WEBPACK_IMPORTED_MODULE_4__.archiveChatEventListener)();
    (0,_whatsappStore_forwardFilterHandler__WEBPACK_IMPORTED_MODULE_8__.forwardFilterHandlerListener)();

    // Listen for the response from the injected script
    window.addEventListener("message", (event) => {
      if (
        event.data &&
        event.data.type === "OPEN_MOVE_TO_FORM" &&
        event.data.chatId
      ) {
        const chatId = event.data.chatId;
        (0,_moveToForm__WEBPACK_IMPORTED_MODULE_7__.moveToForm)(chatId);
      }
    });
  });
}


/***/ }),

/***/ "./src/features/folders/moveToForm.js":
/*!********************************************!*\
  !*** ./src/features/folders/moveToForm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moveToForm: () => (/* binding */ moveToForm)
/* harmony export */ });
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/modal */ "./src/components/modal.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/features/folders/storage.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/features/folders/actions.js");




function moveToForm(chatId, archived) {
  const foldersOptions = _storage__WEBPACK_IMPORTED_MODULE_1__.folders
    .map((folder, index) => {
      const isSelected = folder.id === _storage__WEBPACK_IMPORTED_MODULE_1__.currentActiveFolder;
      return `
        <label class="option">
          <span style="flex: 1;">
            <input type="radio" name="folder" value="${folder.id}" ${
        isSelected ? "checked" : ""
      }>
            ${folder.name}
          </span>
          <span>
            ${index < 9 ? `<kbd>${index + 1}</kbd>` : ""}
          </span>
        </label>
      `;
    })
    .join("");

  const moveToFormContent = `
    <form id="moveToForm">
      <div class="x12lqup9 x1o1kx08">
        <div class="modal-md x9f619 x1p5oq8j">
          <div class="modal-header">
            <p class="modal-title x1w7sdjq x1fcty0u">
              <span class="material-symbols-outlined">folder</span>
              Move to
            </p>
          </div>
          <div class="modal-body xdt5ytf xubnuyq xw2csxc x1odjw0f xo6wm36 x1iegka5 xc530u0 x8zx4qv x1gcmwly x17sy6yu xwsakjw x1vz1ssi xxbb1rq xwxc41k">
            <div class="snooze-options">
              ${foldersOptions}
            </div>
          </div>
        </div>
      </div>
    </form>
  `;

  const modal = new _components_modal__WEBPACK_IMPORTED_MODULE_0__["default"]({
    modalContent: moveToFormContent,
    formHandler: async (formData) => {
      const selectedFolderId = parseInt(formData.get("folder"));
      if (selectedFolderId) {
        (0,_actions__WEBPACK_IMPORTED_MODULE_2__.updateContactsInFolder)(selectedFolderId, chatId, archived);
        return true; // Indicates successful handling
      }
      return false; // Indicates unsuccessful handling
    },
    shortcutHandler: (e) => {
      const form = document.getElementById("moveToForm");
      const key = e.key;
      if (/^[1-9]$/.test(key)) {
        e.preventDefault();
        const index = parseInt(key) - 1;
        const radioInputs = form.querySelectorAll('input[type="radio"]');
        if (index < radioInputs.length) {
          radioInputs[index].checked = true;
          radioInputs[index].focus();
          form.dispatchEvent(new Event("submit"));
        }
      } else if (key === "Enter") {
        e.preventDefault();
        form.dispatchEvent(new Event("submit"));
      }
    },
  });

  modal.openModal();

  // Add event listeners
  const form = document.getElementById("moveToForm");

  form.addEventListener("click", (e) => {
    if (e.target.closest("label.option")) {
      e.preventDefault();
      const radio = e.target
        .closest("label.option")
        .querySelector('input[type="radio"]');
      radio.checked = true;
      form.dispatchEvent(new Event("submit"));
    }
  });

  form.querySelector('input[type="radio"]').focus();
}


/***/ }),

/***/ "./src/features/folders/shortcuts.js":
/*!*******************************************!*\
  !*** ./src/features/folders/shortcuts.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupKeyboardListeners: () => (/* binding */ setupKeyboardListeners)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/features/folders/actions.js");
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/domHelpers */ "./src/utils/domHelpers.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/features/folders/storage.js");




function setupKeyboardListeners() {
  document.addEventListener("keydown", (event) => {
    if ((0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_1__.isUserTyping)()) return;

    const currentIndex = _storage__WEBPACK_IMPORTED_MODULE_2__.folders.findIndex(
      (folder) => folder.id === _storage__WEBPACK_IMPORTED_MODULE_2__.currentActiveFolder
    );
    const totalFolders = _storage__WEBPACK_IMPORTED_MODULE_2__.folders.length;

    if (
      event.key === "ArrowLeft" &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.altKey &&
      !event.shiftKey
    ) {
      event.preventDefault();
      const prevIndex = (currentIndex - 1 + totalFolders) % totalFolders;
      (0,_actions__WEBPACK_IMPORTED_MODULE_0__.switchFolder)(_storage__WEBPACK_IMPORTED_MODULE_2__.folders[prevIndex].id);
      document
        .getElementById(`folder-${_storage__WEBPACK_IMPORTED_MODULE_2__.folders[prevIndex].id}`)
        .scrollIntoView({ behavior: "smooth", inline: "center" });
    }

    if (
      event.key === "ArrowRight" &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.altKey &&
      !event.shiftKey
    ) {
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % totalFolders;
      (0,_actions__WEBPACK_IMPORTED_MODULE_0__.switchFolder)(_storage__WEBPACK_IMPORTED_MODULE_2__.folders[nextIndex].id);
      document
        .getElementById(`folder-${_storage__WEBPACK_IMPORTED_MODULE_2__.folders[nextIndex].id}`)
        .scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  });
}


/***/ }),

/***/ "./src/features/folders/storage.js":
/*!*****************************************!*\
  !*** ./src/features/folders/storage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentActiveFolder: () => (/* binding */ currentActiveFolder),
/* harmony export */   folders: () => (/* binding */ folders),
/* harmony export */   loadFoldersFromStorage: () => (/* binding */ loadFoldersFromStorage),
/* harmony export */   loadSettingsFromStorage: () => (/* binding */ loadSettingsFromStorage),
/* harmony export */   resetFolders: () => (/* binding */ resetFolders),
/* harmony export */   saveFoldersToStorage: () => (/* binding */ saveFoldersToStorage),
/* harmony export */   setCurrentActiveFolder: () => (/* binding */ setCurrentActiveFolder),
/* harmony export */   setFolders: () => (/* binding */ setFolders)
/* harmony export */ });
const initialFolders = [
  {
    id: 1,
    name: "Important",
    contacts: [],
    inbox: true,
  },
  {
    id: 2,
    name: "Others",
    contacts: [],
  },
];

let folders = [];
function setFolders(val) {
  folders = val;
}

let currentActiveFolder = 1;
function setCurrentActiveFolder(val) {
  currentActiveFolder = val;
}

// Load folders from storage and execute callback
function loadFoldersFromStorage(callback) {
  loadSettingsFromStorage((loadedFolders, _) => {
    setFolders(loadedFolders);
    callback(loadedFolders);
  });
}

// Save folders to storage
function saveFoldersToStorage(folders) {
  chrome.storage.local.set({ folders: folders });
}

// Load folders from storage
function loadSettingsFromStorage(callback) {
  chrome.storage.local.get(["folders"], (result) => {
    const loadedFolders = result.folders || initialFolders; // Use initial folders if no folders are found
    callback(loadedFolders);
  });
}

function resetFolders() {
  folders = initialFolders;
  saveFoldersToStorage(folders);
}


/***/ }),

/***/ "./src/features/folders/ui.js":
/*!************************************!*\
  !*** ./src/features/folders/ui.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeUI: () => (/* binding */ initializeUI),
/* harmony export */   updateFoldersUI: () => (/* binding */ updateFoldersUI)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/domHelpers */ "./src/utils/domHelpers.js");
/* harmony import */ var _components_folderButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/folderButton */ "./src/components/folderButton.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/features/folders/actions.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/features/folders/storage.js");
/* harmony import */ var _components_chatMenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/chatMenuItem */ "./src/components/chatMenuItem.js");
/* harmony import */ var _moveToForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moveToForm */ "./src/features/folders/moveToForm.js");
/* harmony import */ var _folderForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./folderForm */ "./src/features/folders/folderForm.js");
/* harmony import */ var _foldersForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./foldersForm */ "./src/features/folders/foldersForm.js");









function initializeUI() {
  let foldersSection = (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.getElementByXpath)(`//*[@id="side"]/div[2]`);

  if (foldersSection.id !== "pane-side") {
    foldersSection.style.overflowX = "auto";
    foldersSection.style.flexWrap = "nowrap";
    foldersSection.style.whiteSpace = "nowrap";
    foldersSection.style.display = "flex";
    (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.hideAllChildren)(foldersSection); // this hides Unread and Groups tabs
  } else {
    foldersSection = document.createElement("div");
    foldersSection.className =
      "x1ky8ojb x78zum5 x1q0g3np x1a02dak x2lah0s x3pnbk8 xfex06f xeuugli x2lwn1j x1nn3v0j x1ykpatu x1swvt13 x1pi30zi ";
    foldersSection.style =
      "overflow-x: auto; flex-wrap: nowrap; white-space: nowrap; display: flex;";
    document.querySelector("#side").insertChildAtIndex(foldersSection, 2);
  }

  // Create a container for folders
  const foldersContainer = document.createElement("div");
  foldersContainer.id = "folders-container";
  foldersContainer.style.display = "flex";
  foldersContainer.style.flex = "1";
  foldersContainer.style.overflowX = "auto";
  foldersContainer.className = "xfex06f x3pnbk8";

  // Sort folders based on their position attribute
  const sortedFolders = [..._storage__WEBPACK_IMPORTED_MODULE_3__.folders].sort((a, b) => a.position - b.position);

  for (const folder of sortedFolders) {
    const totalChatsCount = folder.contacts.reduce(
      (sum, contact) => sum + (!contact.archived ? 1 : 0),
      0
    );

    foldersContainer.append(
      (0,_components_folderButton__WEBPACK_IMPORTED_MODULE_1__.folderButton)(
        folder.id,
        folder.id === _storage__WEBPACK_IMPORTED_MODULE_3__.currentActiveFolder,
        folder.name,
        () => (0,_actions__WEBPACK_IMPORTED_MODULE_2__.switchFolder)(folder.id),
        () => (0,_folderForm__WEBPACK_IMPORTED_MODULE_6__.folderForm)(folder.id),
        totalChatsCount
      )
    );
  }

  // Add the folders container to the main section
  foldersSection.appendChild(foldersContainer);

  // Add settings button after folders
  const settingsButton = document.createElement("button");
  settingsButton.className =
    "xjb2p0i x1ypdohk x972fbf xcfux6l x1qhh985 xm0m39n x1mvgj39 x6prxxf xo1l8bm x1btupbp x1yrsyyn x10b6aqq";
  settingsButton.style.background = "inherit";
  settingsButton.style.paddingLeft = "8px";
  settingsButton.innerHTML = `
    <div class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x6s0dn4 align-items-center">
      <span class="material-symbols-outlined">
        folder_managed
      </span>
    </div>
  `;
  settingsButton.addEventListener("click", () => (0,_foldersForm__WEBPACK_IMPORTED_MODULE_7__.foldersForm)());
  foldersSection.appendChild(settingsButton);

  window.addEventListener("message", function (event) {
    if (
      event.source === window &&
      event.data &&
      event.data.type === "OPEN_CONTEXT_MENU"
    ) {
      const { chatId, archived } = event.data;

      const chatMenu = document.querySelector(
        `#app > div > span:nth-child(6) > div > ul > div`
      );

      chatMenu.children[0].remove(); // Remove archive button since we have custom actions and we need space here

      chatMenu.insertChildAtIndex(
        (0,_components_chatMenuItem__WEBPACK_IMPORTED_MODULE_4__.chatMenuItem)("Move to", "v", () => (0,_moveToForm__WEBPACK_IMPORTED_MODULE_5__.moveToForm)(chatId, archived)),
        0
      );
    }
  });
}

function updateFoldersUI() {
  const foldersContainer = document.getElementById("folders-container");
  if (!foldersContainer) return;

  // Sort folders based on their position attribute
  const sortedFolders = [..._storage__WEBPACK_IMPORTED_MODULE_3__.folders].sort((a, b) => a.position - b.position);

  // Remove all existing folder buttons
  foldersContainer.innerHTML = "";

  // Re-add folder buttons in the new order
  for (const folder of sortedFolders) {
    const totalChatsCount = folder.contacts.reduce(
      (sum, contact) => sum + (!contact.archived ? 1 : 0),
      0
    );

    foldersContainer.appendChild(
      (0,_components_folderButton__WEBPACK_IMPORTED_MODULE_1__.folderButton)(
        folder.id,
        folder.id === _storage__WEBPACK_IMPORTED_MODULE_3__.currentActiveFolder,
        folder.name,
        () => (0,_actions__WEBPACK_IMPORTED_MODULE_2__.switchFolder)(folder.id),
        () => (0,_folderForm__WEBPACK_IMPORTED_MODULE_6__.folderForm)(folder.id),
        totalChatsCount
      )
    );
  }
}


/***/ }),

/***/ "./src/features/folders/utils.js":
/*!***************************************!*\
  !*** ./src/features/folders/utils.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getChatItemUnderMenu: () => (/* binding */ getChatItemUnderMenu),
/* harmony export */   removeFolderFromUI: () => (/* binding */ removeFolderFromUI),
/* harmony export */   updateUIWithNewFolder: () => (/* binding */ updateUIWithNewFolder),
/* harmony export */   updateUIWithUpdatedFolderName: () => (/* binding */ updateUIWithUpdatedFolderName)
/* harmony export */ });
/* harmony import */ var _components_folderButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/folderButton */ "./src/components/folderButton.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/features/folders/storage.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/features/folders/actions.js");
/* harmony import */ var _folderForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./folderForm */ "./src/features/folders/folderForm.js");





// Function to update the UI with the new folder
function updateUIWithNewFolder(folderId, folderName) {
  const foldersSection = document.getElementById("folders-container");

  foldersSection.insertChildAtIndex(
    (0,_components_folderButton__WEBPACK_IMPORTED_MODULE_0__.folderButton)(
      folderId,
      folderId === _storage__WEBPACK_IMPORTED_MODULE_1__.currentActiveFolder,
      folderName,
      () => (0,_actions__WEBPACK_IMPORTED_MODULE_2__.switchFolder)(folderId),
      () => (0,_folderForm__WEBPACK_IMPORTED_MODULE_3__.folderForm)(folderId)
    ),
    foldersSection.childNodes.length
  );
}

// Function to update the UI when a folder name is changed
function updateUIWithUpdatedFolderName(
  folderId,
  newFolderName,
  unreadCount = 0
) {
  const foldersSection = document.getElementById("folders-container");
  const oldButton = document.querySelector(`button[id='folder-${folderId}']`);

  if (oldButton) {
    const index = Array.prototype.indexOf.call(
      foldersSection.children,
      oldButton
    );

    // Remove the old button
    foldersSection.removeChild(oldButton);

    // Create a new button
    const newButton = (0,_components_folderButton__WEBPACK_IMPORTED_MODULE_0__.folderButton)(
      folderId,
      folderId === _storage__WEBPACK_IMPORTED_MODULE_1__.currentActiveFolder,
      newFolderName,
      () => (0,_actions__WEBPACK_IMPORTED_MODULE_2__.switchFolder)(folderId),
      () => (0,_folderForm__WEBPACK_IMPORTED_MODULE_3__.folderForm)(folderId),
      unreadCount
    );

    // Insert the new button at the same index
    foldersSection.insertBefore(newButton, foldersSection.children[index]);
  }
}

// Function to remove the folder from the UI
function removeFolderFromUI(folderId) {
  const foldersSection = document.getElementById("folders-container");
  const oldButton = document.querySelector(`button[id='folder-${folderId}']`);

  if (oldButton) {
    foldersSection.removeChild(oldButton);
  }
}

function getChatItemUnderMenu(menuElement) {
  // Get the position of the menu element
  const rect = menuElement.getBoundingClientRect();

  // Find the element at the center of the menu
  const chatItem = document.elementFromPoint(
    rect.left + rect.width / 2,
    rect.top + rect.height / 2
  );

  // Define the required classes for the chat item
  const requiredClasses = ["x10l6tqk", "xh8yej3", "x1g42fcv"];

  // Function to find the parent with all the required classes
  function findParentWithClasses(element, classes) {
    let currentElement = element;
    while (currentElement) {
      if (classes.every((cls) => currentElement.classList.contains(cls))) {
        return currentElement;
      }
      currentElement = currentElement.parentElement; // Move up the DOM tree
    }
    return null; // No parent with all the specified classes was found
  }

  // Find the parent with the required classes
  const chatItemParent = findParentWithClasses(chatItem, requiredClasses);

  return [chatItemParent, chatItem];
}


/***/ }),

/***/ "./src/features/scheduled/index.js":
/*!*****************************************!*\
  !*** ./src/features/scheduled/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeScheduled: () => (/* binding */ initializeScheduled)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/domHelpers */ "./src/utils/domHelpers.js");
/* harmony import */ var _components_navBarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/navBarItem */ "./src/components/navBarItem.js");



function initializeScheduled() {
  // Listen for custom event and initialize features
  document.addEventListener("whatsappInitialized", () => {
    // Smart stuff here
  });
}


/***/ }),

/***/ "./src/features/shortcuts/index.js":
/*!*****************************************!*\
  !*** ./src/features/shortcuts/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeShortcuts: () => (/* binding */ initializeShortcuts)
/* harmony export */ });
/* harmony import */ var _keyboardListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboardListeners */ "./src/features/shortcuts/keyboardListeners.js");


function initializeShortcuts() {
  // Wait util WhatsApp build up the interface
  document.addEventListener("whatsappInitialized", () => {
    (0,_keyboardListeners__WEBPACK_IMPORTED_MODULE_0__.setupKeyboardListeners)();
  });
}


/***/ }),

/***/ "./src/features/shortcuts/keyboardListeners.js":
/*!*****************************************************!*\
  !*** ./src/features/shortcuts/keyboardListeners.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setupKeyboardListeners: () => (/* binding */ setupKeyboardListeners)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/domHelpers */ "./src/utils/domHelpers.js");
/* harmony import */ var _utils_eventHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/eventHelpers */ "./src/utils/eventHelpers.js");
/* harmony import */ var _whatsappStore_requestSnoozeForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../whatsappStore/requestSnoozeForm */ "./src/whatsappStore/requestSnoozeForm.js");
/* harmony import */ var _whatsappStore_requestMoveToForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../whatsappStore/requestMoveToForm */ "./src/whatsappStore/requestMoveToForm.js");
/* harmony import */ var _whatsappStore_focusNextChat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../whatsappStore/focusNextChat */ "./src/whatsappStore/focusNextChat.js");
/* harmony import */ var _whatsappStore_focusPreviousChat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../whatsappStore/focusPreviousChat */ "./src/whatsappStore/focusPreviousChat.js");
/* harmony import */ var _whatsappStore_composeFocus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../whatsappStore/composeFocus */ "./src/whatsappStore/composeFocus.js");
/* harmony import */ var _whatsappStore_focusLastMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../whatsappStore/focusLastMessage */ "./src/whatsappStore/focusLastMessage.js");









const isMac = navigator.platform.toLowerCase().includes("mac");

function setupKeyboardListeners() {
  (0,_whatsappStore_focusNextChat__WEBPACK_IMPORTED_MODULE_4__.focusNextChatListener)();
  (0,_whatsappStore_focusPreviousChat__WEBPACK_IMPORTED_MODULE_5__.focusPreviousChatListener)();
  (0,_whatsappStore_composeFocus__WEBPACK_IMPORTED_MODULE_6__.composeFocusListener)();
  (0,_whatsappStore_focusLastMessage__WEBPACK_IMPORTED_MODULE_7__.focusLastMessageListener)();

  document.addEventListener(
    "keydown",
    (event) => {
      if ((0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.isUserTyping)()) return;

      if (
        event.key === "ArrowDown" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();
        (0,_whatsappStore_focusNextChat__WEBPACK_IMPORTED_MODULE_4__.focusNextChat)();
      }

      if (
        event.key === "ArrowUp" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();
        (0,_whatsappStore_focusPreviousChat__WEBPACK_IMPORTED_MODULE_5__.focusPreviousChat)();
      }
    },
    true
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key === "Escape" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        const activeElement = document.activeElement;
        if (
          activeElement &&
          activeElement.tagName === "DIV" &&
          activeElement.getAttribute("contenteditable") === "true"
        ) {
          event.preventDefault();
          event.stopPropagation();
          (0,_whatsappStore_focusLastMessage__WEBPACK_IMPORTED_MODULE_7__.focusLastMessage)();
        }
      }
    },
    true
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if ((0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.isUserTyping)()) return;
      if (
        event.key === "Enter" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        const messageInput = document.querySelector(
          'div[contenteditable="true"].x1hx0egp.x6ikm8r.x1odjw0f.x1k6rcq7.x6prxxf:not(.x1whj5v)'
        );
        if (messageInput) {
          messageInput.focus();
          event.preventDefault();
          event.stopPropagation();
        }
      }
    },
    true
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if ((0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.isUserTyping)()) return;

      if (
        event.key === "c" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();
        (0,_utils_eventHelpers__WEBPACK_IMPORTED_MODULE_1__.triggerNativeShortcut)({
          key: "n",
          code: "KeyN",
          ctrlKey: true,
          altKey: !isMac,
          shiftKey: false,
          metaKey: isMac,
        });
      }
    },
    true
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if ((0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.isUserTyping)()) return;

      if (
        event.key === "/" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();
        (0,_utils_eventHelpers__WEBPACK_IMPORTED_MODULE_1__.triggerNativeShortcut)({
          key: "k",
          code: "KeyK",
          ctrlKey: false,
          altKey: !isMac,
          shiftKey: false,
          metaKey: isMac,
        });
      }
    },
    true
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if ((0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.isUserTyping)()) return;

      if (
        event.key === "e" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();
        (0,_utils_eventHelpers__WEBPACK_IMPORTED_MODULE_1__.triggerNativeShortcut)({
          key: "e",
          code: "KeyE",
          ctrlKey: true,
          altKey: !isMac,
          shiftKey: true,
          metaKey: isMac,
        });
      }
    },
    true
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key === "Enter" &&
        event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();

        // Get the message input element
        const messageInput = (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.getElementByXpath)(
          `//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div`
        );
        if (messageInput) {
          // Simulate Enter key press to send the message
          (0,_utils_eventHelpers__WEBPACK_IMPORTED_MODULE_1__.simulateKeyPress)(messageInput, "Enter");

          setTimeout(() => {
            // Archive the chat
            (0,_utils_eventHelpers__WEBPACK_IMPORTED_MODULE_1__.triggerNativeShortcut)({
              key: "e",
              code: "KeyE",
              ctrlKey: true,
              altKey: !isMac,
              shiftKey: true,
              metaKey: isMac,
            });

            (0,_utils_eventHelpers__WEBPACK_IMPORTED_MODULE_1__.triggerNativeShortcut)({
              key: "Escape",
              code: "KeyEscape",
              ctrlKey: false,
              altKey: false,
              shiftKey: false,
              metaKey: false,
            });
          }, 100);
        }
      }
    },
    true
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if ((0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.isUserTyping)()) return;

      if (
        event.key === "u" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();

        // Mark read/unread
        (0,_utils_eventHelpers__WEBPACK_IMPORTED_MODULE_1__.triggerNativeShortcut)({
          key: "u",
          code: "KeyU",
          ctrlKey: true,
          altKey: !isMac,
          shiftKey: true,
          metaKey: isMac,
        });
      }
    },
    true
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if ((0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.isUserTyping)()) return;

      if (
        event.key === "h" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();
        (0,_whatsappStore_requestSnoozeForm__WEBPACK_IMPORTED_MODULE_2__.requestSnoozeForm)();
      }
    },
    true
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if ((0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.isUserTyping)()) return;

      if (
        event.key === "v" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();
        (0,_whatsappStore_requestMoveToForm__WEBPACK_IMPORTED_MODULE_3__.requestMoveToForm)();
      }
    },
    true
  );
}


/***/ }),

/***/ "./src/features/snoozed/clues.js":
/*!***************************************!*\
  !*** ./src/features/snoozed/clues.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateSnoozedChatsCSS: () => (/* binding */ generateSnoozedChatsCSS)
/* harmony export */ });
function generateSnoozedChatsCSS(snoozedChats) {
  let css = "";

  if (snoozedChats) {
    snoozedChats.forEach((snoozedChat) => {
      css += `
      .x10l6tqk.xh8yej3.x1g42fcv:has(span[title*="${snoozedChat.chatUsername}"]) div._ak8l div._ak8j div._ak8i span:nth-child(3)::after {
        content: 'schedule';
        display: inline-block;
        cursor: pointer;
        font-size: 24px;
        opacity: 1;
        font-family: 'Material Symbols Outlined';
        font-variation-settings:
          "FILL" 1,
          "wght" 400,
          "GRAD" 0,
          "opsz" 24;
        color: var(--icon-lighter);
        margin-left: 6px;
      }

      .x10l6tqk.xh8yej3.x1g42fcv:has(span[title*="${snoozedChat.chatUsername}"]):hover div._ak8l div._ak8j div._ak8i span:nth-child(3)::after,
      .x10l6tqk.xh8yej3.x1g42fcv:has(span[title*="${snoozedChat.chatUsername}"]):has(._ak72._ak73._ak7p) div._ak8l div._ak8j div._ak8i span:nth-child(3)::after {
        display: none; /* Hides the pseudo-element when the parent is hovered or has specified classes */
      }

      .x10l6tqk.xh8yej3.x1g42fcv:has(span[title*="${snoozedChat.chatUsername}"]) div._ak8l div._ak8j div._ak8i span:nth-child(3) > .reminderBtn > .material-symbols-outlined {
        font-variation-settings:
          "FILL" 1,
          "wght" 400,
          "GRAD" 0,
          "opsz" 24;
      }
    `;
    });
  }

  let style = document.getElementById("snoozedChatsClues");
  if (!style) {
    style = document.createElement("style");
    style.id = "snoozedChatsClues";
    document.head.appendChild(style);
  }

  style.innerHTML = css;
}


/***/ }),

/***/ "./src/features/snoozed/index.js":
/*!***************************************!*\
  !*** ./src/features/snoozed/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeSnoozed: () => (/* binding */ initializeSnoozed)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/domHelpers */ "./src/utils/domHelpers.js");
/* harmony import */ var _components_navBarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/navBarItem */ "./src/components/navBarItem.js");
/* harmony import */ var _components_chatActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/chatActionButton */ "./src/components/chatActionButton.js");
/* harmony import */ var _unsnoozeChat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unsnoozeChat */ "./src/features/snoozed/unsnoozeChat.js");
/* harmony import */ var _snoozeForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./snoozeForm */ "./src/features/snoozed/snoozeForm.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage */ "./src/features/snoozed/storage.js");
/* harmony import */ var _snoozedChatsDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./snoozedChatsDrawer */ "./src/features/snoozed/snoozedChatsDrawer.js");
/* harmony import */ var _clues__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clues */ "./src/features/snoozed/clues.js");
/* harmony import */ var _whatsappStore_requestSnoozeForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../whatsappStore/requestSnoozeForm */ "./src/whatsappStore/requestSnoozeForm.js");










function initializeSnoozed() {
  chrome.runtime.sendMessage({
    action: "checkDueAlarms",
  });
  (0,_storage__WEBPACK_IMPORTED_MODULE_5__.loadSnoozedChatsFromStorage)((loadedSnoozedChats) => {
    (0,_clues__WEBPACK_IMPORTED_MODULE_7__.generateSnoozedChatsCSS)(loadedSnoozedChats);
  });

  // Wait until WhatsApp builds up the interface
  document.addEventListener("whatsappInitialized", () => {
    (0,_unsnoozeChat__WEBPACK_IMPORTED_MODULE_3__.initializeUnsnoozed)();

    // Add the Snoozed icon at WhatsApp sidenav navigation.
    const sidenav = (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.getElementByXpath)(
      `//*[@id="app"]/div/div[2]/header/div/div/div/div/span/div/div[1]`
    );

    sidenav.insertChildAtIndex(
      (0,_components_navBarItem__WEBPACK_IMPORTED_MODULE_1__.navBarItem)("snoozedChats", "Snoozed", "schedule", () =>
        (0,_snoozedChatsDrawer__WEBPACK_IMPORTED_MODULE_6__.snoozedChatsDrawer)()
      ),
      1
    );

    document.addEventListener("chatOnHover", (event) => {
      const { chat, chatElement } = event.detail;

      // Setup a MutationObserver that adds Chat action buttons while hovering.
      const chatButtons = chatElement.querySelector(
        "[role='gridcell']._ak8i > span:nth-child(3)"
      );
      if (chatButtons) {
        const existingReminderBtn = chatButtons.querySelector(".reminderBtn");
        const newReminderBtn = (0,_components_chatActionButton__WEBPACK_IMPORTED_MODULE_2__.chatActionButton)(
          "schedule",
          () => (0,_snoozeForm__WEBPACK_IMPORTED_MODULE_4__.snoozeForm)(chat),
          "reminderBtn"
        );

        if (existingReminderBtn) {
          chatButtons.replaceChild(newReminderBtn, existingReminderBtn);
        } else {
          chatButtons.insertChildAtIndex(newReminderBtn, 0);
        }
      }
    });

    (0,_whatsappStore_requestSnoozeForm__WEBPACK_IMPORTED_MODULE_8__.requestSnoozeFormListener)();

    // Listen for the response from the injected script
    window.addEventListener("message", (event) => {
      if (
        event.data &&
        event.data.type === "OPEN_SNOOZE_FORM" &&
        event.data.chatId
      ) {
        const chatId = event.data.chatId;
        const userName = event.data.userName;
        (0,_snoozeForm__WEBPACK_IMPORTED_MODULE_4__.snoozeForm)({ chatId: chatId, chatUsername: userName });
      }
    });
  });
}


/***/ }),

/***/ "./src/features/snoozed/snoozeChat.js":
/*!********************************************!*\
  !*** ./src/features/snoozed/snoozeChat.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestSnooze: () => (/* binding */ requestSnooze)
/* harmony export */ });
/* harmony import */ var _components_reminderChatItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/reminderChatItem */ "./src/components/reminderChatItem.js");
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/domHelpers */ "./src/utils/domHelpers.js");
/* harmony import */ var _whatsappStore_archiveChat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../whatsappStore/archiveChat */ "./src/whatsappStore/archiveChat.js");
/* harmony import */ var _whatsappStore_getChatDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../whatsappStore/getChatDetails */ "./src/whatsappStore/getChatDetails.js");
/* harmony import */ var _clues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clues */ "./src/features/snoozed/clues.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage */ "./src/features/snoozed/storage.js");







// Function to send the snooze request to the background script
// The background script in in charge of setting up the chrome alarm that fires events
// so content-script gets noticed and do stuff then
function requestSnooze(chat, snoozeTime, snoozeCondition) {
  chrome.runtime.sendMessage(
    {
      action: "snoozeChat",
      chatId: chat.chatId,
      chatUsername: chat.chatUsername,
      snoozeTime: snoozeTime,
      snoozeCondition: snoozeCondition,
    },
    (response) => {
      if (response && response.status === "success") {
        (0,_whatsappStore_archiveChat__WEBPACK_IMPORTED_MODULE_2__.archiveChat)(chat.chatId);

        // Update visual clue of active reminder
        (0,_storage__WEBPACK_IMPORTED_MODULE_5__.loadSnoozedChatsFromStorage)((loadedSnoozedChats) => {
          (0,_clues__WEBPACK_IMPORTED_MODULE_4__.generateSnoozedChatsCSS)(loadedSnoozedChats);
        });

        const snoozedChatsDrawerFocused = document.querySelector(
          `.customNavBarItem.active[data-drawer-id="snoozedChats"]`
        );

        if (snoozedChatsDrawerFocused) {
          const existingReminderElement = document.querySelector(
            `.reminderChatItem[data-chat-id="${chat.chatId}"]`
          );

          if (existingReminderElement) {
            // Assuming reminderChatItem is a function that returns an HTML string
            const newElementHTML = (0,_components_reminderChatItem__WEBPACK_IMPORTED_MODULE_0__.reminderChatItem)(
              chat.chatId,
              chat.chatUsername,
              `Remind me: ${(0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_1__.formatTimestamp)(snoozeTime)}`
            );

            // Create a temporary container to parse the HTML string
            const tempContainer = document.createElement("div");
            tempContainer.innerHTML = newElementHTML;

            // Replace the existing element with the new one
            existingReminderElement.replaceWith(
              tempContainer.firstElementChild
            );

            (0,_whatsappStore_getChatDetails__WEBPACK_IMPORTED_MODULE_3__.getChatDetails)(chat.chatId);
          }
        }
      } else {
        console.error("Failed to snooze chat.");
      }
    }
  );
}


/***/ }),

/***/ "./src/features/snoozed/snoozeForm.js":
/*!********************************************!*\
  !*** ./src/features/snoozed/snoozeForm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   snoozeForm: () => (/* binding */ snoozeForm)
/* harmony export */ });
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/modal */ "./src/components/modal.js");
/* harmony import */ var _snoozeChat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snoozeChat */ "./src/features/snoozed/snoozeChat.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/features/snoozed/storage.js");
/* harmony import */ var _unsnoozeChat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unsnoozeChat */ "./src/features/snoozed/unsnoozeChat.js");





function snoozeForm(chat) {
  // Find existing reminder for the chat
  const existingReminder =
    _storage__WEBPACK_IMPORTED_MODULE_2__.snoozedChats &&
    _storage__WEBPACK_IMPORTED_MODULE_2__.snoozedChats.find((reminder) => reminder.chatId === chat.chatId);

  const now = new Date();

  let initialCustomDate = "";
  let initialCustomTime = "";
  let snoozeCondition = "regardless"; // Default condition

  if (existingReminder && existingReminder.until) {
    const timestamp = Number(existingReminder.until);
    const reminderDate = new Date(timestamp);

    // Extract local date and time components
    const localYear = reminderDate.getFullYear();
    const localMonth = reminderDate.getMonth();
    const localDay = reminderDate.getDate();
    const localHours = reminderDate.getHours();
    const localMinutes = reminderDate.getMinutes();

    // Format as YYYY-MM-DD and HH:MM
    initialCustomDate = `${localYear}-${String(localMonth + 1).padStart(
      2,
      "0"
    )}-${String(localDay).padStart(2, "0")}`;
    initialCustomTime = `${String(localHours).padStart(2, "0")}:${String(
      localMinutes
    ).padStart(2, "0")}`;

    snoozeCondition = existingReminder.snoozeCondition;
  }

  let laterTodayTime;
  let hasLaterTodayOption = true;

  // Determine "Later today" time, rounding to the next hour
  if (now.getHours() < 18) {
    laterTodayTime = new Date();
    laterTodayTime.setHours(now.getHours() + 2, 0, 0, 0); // Round to the next hour
  } else {
    hasLaterTodayOption = false;
  }

  // Function to format time as "6:00 PM"
  function formatTime(date) {
    return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  }

  // Function to format tomorrow's date as "THU, 8:00 AM"
  function getFormattedTomorrow() {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      8,
      0,
      0
    );
    return `${days[tomorrow.getDay()]}, 8:00 AM`;
  }

  const laterTodayOptionHTML = laterTodayTime
    ? `
    <label class="option">
      <span style="flex: 1;">
        <input type="radio" name="snoozeOption" value="laterToday">
        Later today
      </span>
      <span>
        ${formatTime(laterTodayTime)}
      </span>
    </label>
  `
    : "";

  const snoozeFormContent = `
    <form>
      <div class="x12lqup9 x1o1kx08">
        <div class="modal-md x9f619 x1p5oq8j">
          <div class="modal-header">
            <p class="modal-title x1w7sdjq x1fcty0u">
              <span class="material-symbols-outlined">
                schedule
              </span>
              Remind me
            </p>
          </div>
          <div class="modal-body xdt5ytf xubnuyq xw2csxc x1odjw0f xo6wm36 x1iegka5 xc530u0 x8zx4qv x1gcmwly x17sy6yu xwsakjw x1vz1ssi xxbb1rq xwxc41k">
            <div class="snooze-options">
              ${laterTodayOptionHTML}
              <label class="option">
                <span style="flex: 1;">
                  <input type="radio" name="snoozeOption" value="tomorrowMorning">
                  Tomorrow
                </span>
                <span>
                  ${getFormattedTomorrow()}
                </span>
              </label>
              <label class="option">
                <span style="flex: 1;">
                  <input type="radio" name="snoozeOption" value="custom" id="customRadio" ${
                    initialCustomDate ? "checked" : ""
                  }>
                  Custom
                </span>
                <span class="custom">
                  <input type="date" name="customDate" id="customDate" value="${initialCustomDate}">
                  <input type="time" name="customTime" id="customTime" value="${initialCustomTime}">
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div
        class="x78zum5 x8hhl5t xp4054r xuxw1ft x123j3cw x1gtfrk1 x156go17 x1sqk8ge"
      >
        <div class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np xuk3077 x40hh3e" style="flex: 1;">
        <select class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 snoozeConditionSelect" name="snoozeCondition">
          <option value="regardless" ${
            snoozeCondition === "regardless" ? "selected" : ""
          }>Regardless</option>
          <option value="ifNoReply" ${
            snoozeCondition === "ifNoReply" ? "selected" : ""
          }>If no reply</option>
        </select>
        </div>
        <div
          class="x13a6bvl x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np xuk3077 x40hh3e"
        >
          ${
            existingReminder
              ? `
          <button
            data-action="remove"
            type="submit"
            class="x1sr8853 x889kno x1a8lsjc x1n2onr6 xk50ysn x1f6kntn xyesn5m x1z11no5 xjy5m1g x1mnwbp6 x4pb5v6 x178xt8z xm81vs4 xso031l xy80clv x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x1v8p93f xogb00i x16stqrj x1ftr3km x1hl8ikr xfagghw x9dyr19 x9lcvmn xcjl5na x1k3x3db xuxw1ft"
          >
            <div
              class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4"
            >
              <div
                class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x3pnbk8 xfex06f xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4"
                style="flex-grow: 1"
              >
                Remove
              </div>
            </div>
          </button> `
              : ""
          }
          <button
            data-action="submit"
            type="submit"
            class="x889kno x1a8lsjc xbbxn1n xxbr6pl x1n2onr6 x1rg5ohu xk50ysn x1f6kntn xyesn5m x1z11no5 xjy5m1g x1mnwbp6 x4pb5v6 x178xt8z xm81vs4 xso031l xy80clv x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x1v8p93f xogb00i x16stqrj x1ftr3km x1hl8ikr xfagghw x9dyr19 x9lcvmn xbtce8p x14v0smp xo8ufso xcjl5na x1k3x3db xuxw1ft xv52azi"
          >
            <div
              class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4"
            >
              <div
                class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x3pnbk8 xfex06f xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4"
                style="flex-grow: 1"
              >
                OK
              </div>
            </div>
          </button>
        </div>
      </div>
    </form>
  `;

  const modal = new _components_modal__WEBPACK_IMPORTED_MODULE_0__["default"]({
    modalContent: snoozeFormContent,
    formHandler: async (formData) => {
      const action = formData.get("formAction");

      if (action == "submit") {
        const snoozeOption = formData.get("snoozeOption");
        snoozeCondition = formData.get("snoozeCondition");
        let snoozeTime;

        if (snoozeOption === "laterToday" && hasLaterTodayOption) {
          snoozeTime = laterTodayTime.getTime();
        } else if (snoozeOption === "tomorrowMorning") {
          const tomorrowMorning = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 1,
            8,
            0,
            0,
            0
          );
          snoozeTime = tomorrowMorning.getTime();
        } else if (snoozeOption === "custom") {
          const customDate = formData.get("customDate");
          const customTime = formData.get("customTime");
          if (customDate && customTime) {
            snoozeTime = new Date(`${customDate}T${customTime}`).getTime();
          } else {
            alert("Please provide both date and time for custom snooze.");
            return false;
          }
        } else {
          alert("Invalid selection. Snooze canceled.");
          return false;
        }

        // Add validation to check if snoozeTime is in the past
        if (snoozeTime <= Date.now()) {
          alert(
            "Cannot set a reminder in the past. Please choose a future time."
          );
          return false;
        }

        // Proceed to request snooze with the chosen timestamp
        (0,_snoozeChat__WEBPACK_IMPORTED_MODULE_1__.requestSnooze)(chat, snoozeTime, snoozeCondition);
      } else if (action == "remove") {
        (0,_unsnoozeChat__WEBPACK_IMPORTED_MODULE_3__.requestUnsnooze)(chat.chatId);
      }

      return true; // Indicates successful handling
    },
  });

  modal.openModal();

  document.getElementById("customDate").addEventListener("change", function () {
    document.getElementById("customRadio").checked = true;
  });

  document.getElementById("customTime").addEventListener("change", function () {
    document.getElementById("customRadio").checked = true;
  });
}


/***/ }),

/***/ "./src/features/snoozed/snoozedChatsDrawer.js":
/*!****************************************************!*\
  !*** ./src/features/snoozed/snoozedChatsDrawer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   snoozedChatsDrawer: () => (/* binding */ snoozedChatsDrawer)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/domHelpers */ "./src/utils/domHelpers.js");
/* harmony import */ var _whatsappStore_openDrawerLeft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../whatsappStore/openDrawerLeft */ "./src/whatsappStore/openDrawerLeft.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/features/snoozed/storage.js");
/* harmony import */ var _whatsappStore_getChatDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../whatsappStore/getChatDetails */ "./src/whatsappStore/getChatDetails.js");
/* harmony import */ var _components_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/drawer */ "./src/components/drawer.js");
/* harmony import */ var _components_reminderChatItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/reminderChatItem */ "./src/components/reminderChatItem.js");
/* harmony import */ var _clues__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clues */ "./src/features/snoozed/clues.js");








function snoozedChatsDrawer() {
  chrome.runtime.sendMessage({
    action: "checkDueAlarms",
  });
  (0,_storage__WEBPACK_IMPORTED_MODULE_2__.loadSnoozedChatsFromStorage)((loadedSnoozedChats) => {
    (0,_clues__WEBPACK_IMPORTED_MODULE_6__.generateSnoozedChatsCSS)(loadedSnoozedChats);
  });

  const chatElements = _storage__WEBPACK_IMPORTED_MODULE_2__.snoozedChats
    ? _storage__WEBPACK_IMPORTED_MODULE_2__.snoozedChats
        .sort((a, b) => a.until - b.until)
        .map((chat) =>
          (0,_components_reminderChatItem__WEBPACK_IMPORTED_MODULE_5__.reminderChatItem)(
            chat.chatId,
            chat.chatUsername,
            `Remind me: ${(0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.formatTimestamp)(chat.until)}`
          )
        )
        .join("")
    : "";

  (0,_whatsappStore_openDrawerLeft__WEBPACK_IMPORTED_MODULE_1__.openDrawerLeft)((0,_components_drawer__WEBPACK_IMPORTED_MODULE_4__.drawer)("Reminders", chatElements), "snoozedChats");

  // This make a request to WhatsApp through injected scripts
  // asks for chat details and prints to the unloaded chat element.
  if (_storage__WEBPACK_IMPORTED_MODULE_2__.snoozedChats) {
    _storage__WEBPACK_IMPORTED_MODULE_2__.snoozedChats.forEach((chat) => (0,_whatsappStore_getChatDetails__WEBPACK_IMPORTED_MODULE_3__.getChatDetails)(chat.chatId));
  }
}


/***/ }),

/***/ "./src/features/snoozed/storage.js":
/*!*****************************************!*\
  !*** ./src/features/snoozed/storage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadSnoozedChatsFromStorage: () => (/* binding */ loadSnoozedChatsFromStorage),
/* harmony export */   resetSnoozedChatsFromStorage: () => (/* binding */ resetSnoozedChatsFromStorage),
/* harmony export */   saveSnoozedChatsToStorage: () => (/* binding */ saveSnoozedChatsToStorage),
/* harmony export */   setSnoozedChats: () => (/* binding */ setSnoozedChats),
/* harmony export */   snoozedChats: () => (/* binding */ snoozedChats)
/* harmony export */ });
let snoozedChats = [];
function setSnoozedChats(val) {
  snoozedChats = val;
}

// Save snoozedChats to storage
function saveSnoozedChatsToStorage(snoozedChats) {
  chrome.storage.local.set({ snoozedChats: snoozedChats });
}

// Load snoozedChats from storage
function loadSnoozedChatsFromStorage(callback) {
  chrome.storage.local.get(["snoozedChats"], (result) => {
    const loadedSnoozedChats = result.snoozedChats;
    setSnoozedChats(loadedSnoozedChats);
    callback(loadedSnoozedChats);
  });
}

function resetSnoozedChatsFromStorage() {
  chrome.storage.local.set({ snoozedChats: [] });
}


/***/ }),

/***/ "./src/features/snoozed/unsnoozeChat.js":
/*!**********************************************!*\
  !*** ./src/features/snoozed/unsnoozeChat.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeUnsnoozed: () => (/* binding */ initializeUnsnoozed),
/* harmony export */   requestUnsnooze: () => (/* binding */ requestUnsnooze)
/* harmony export */ });
/* harmony import */ var _whatsappStore_unarchiveChat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../whatsappStore/unarchiveChat */ "./src/whatsappStore/unarchiveChat.js");
/* harmony import */ var _clues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clues */ "./src/features/snoozed/clues.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/features/snoozed/storage.js");




// Function to check and handle due snoozed chats
function checkDueSnoozedChats() {
  chrome.storage.local.get("snoozedChats", function (result) {
    const now = Number(Date.now()); // Get the current time in milliseconds
    const snoozedChats = result.snoozedChats || [];

    snoozedChats.forEach(function (chat) {
      // Check if the chat's snooze time has passed
      if (chat.until <= now) {
        requestUnsnooze(chat.chatId);
      }
    });
  });
}

function initializeUnsnoozed() {
  // Check and handle snoozed chats from local storage
  checkDueSnoozedChats();

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "chatUnsnoozed") {
      const chatId = message.chatId;
      (0,_whatsappStore_unarchiveChat__WEBPACK_IMPORTED_MODULE_0__.unarchiveChat)(chatId);

      // Remove visual clue of active reminder
      (0,_storage__WEBPACK_IMPORTED_MODULE_2__.loadSnoozedChatsFromStorage)((loadedSnoozedChats) => {
        (0,_clues__WEBPACK_IMPORTED_MODULE_1__.generateSnoozedChatsCSS)(loadedSnoozedChats);
      });

      const snoozedChatsDrawerFocused = document.querySelector(
        `.customNavBarItem.active[data-drawer-id="snoozedChats"]`
      );

      if (snoozedChatsDrawerFocused) {
        const existingReminderElement = document.querySelector(
          `.reminderChatItem[data-chat-id="${chatId}"]`
        );

        if (existingReminderElement) {
          existingReminderElement.remove();
        }
      }
    }
  });

  // Set up listener for UNREAD_COUNT_CHANGE
  window.addEventListener("message", function (event) {
    if (
      event.source === window &&
      event.data &&
      event.data.type === "UNREAD_COUNT_CHANGE"
    ) {
      const { chatId, unreadCount } = event.data;

      if (unreadCount) {
        chrome.storage.local.get("snoozedChats", function (result) {
          const snoozedChats = result.snoozedChats || [];
          if (snoozedChats) {
            const chat = snoozedChats.find(
              (reminder) =>
                reminder.chatId === chatId &&
                reminder.snoozeCondition === "ifNoReply"
            );
            if (chat) {
              requestUnsnooze(chatId);
            }
          }
        });
      }
    }
  });
}

function requestUnsnooze(chatId) {
  chrome.runtime.sendMessage({ action: "unsnoozeChat", chatId: chatId });
}


/***/ }),

/***/ "./src/observers/chatOnHoverObserver.js":
/*!**********************************************!*\
  !*** ./src/observers/chatOnHoverObserver.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chatOnHoverObserver: () => (/* binding */ chatOnHoverObserver)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domHelpers */ "./src/utils/domHelpers.js");
/* harmony import */ var _whatsappStore_getChatFiberFromDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../whatsappStore/getChatFiberFromDOM */ "./src/whatsappStore/getChatFiberFromDOM.js");



function chatOnHoverEvent(chat, chatElement) {
  // Dispatch a custom event to signal that a chat is being hovered
  const event = new CustomEvent("chatOnHover", {
    detail: { chat: chat, chatElement: chatElement },
  });
  document.dispatchEvent(event);
}

function handleChatHover(event) {
  const chatElement = event.target.closest(
    ".x10l6tqk.xh8yej3.x1g42fcv:not(.reminderChatItem)"
  );

  if (chatElement) {
    const selector = (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.getUniqueSelector)(chatElement);
    (0,_whatsappStore_getChatFiberFromDOM__WEBPACK_IMPORTED_MODULE_1__.getChatFiberFromDOM)(selector);
  }
}

window.addEventListener("message", (event) => {
  if (event.data.type === "CHAT_FIBER_RESULT") {
    const chatElement = document.querySelector(event.data.selector);
    const chat = event.data.chat;

    // Check if the data attributes are already set and match the current chat
    if (
      chatElement &&
      (chatElement.dataset.chatId !== chat.chatId ||
        chatElement.dataset.chatUsername !== chat.chatUsername ||
        chatElement.dataset.chatPhone !== chat.chatPhone)
    ) {
      chatElement.dataset.chatId = chat.chatId;
      chatElement.dataset.chatUsername = chat.chatUsername;
      chatElement.dataset.chatPhone = chat.chatPhone;

      chatOnHoverEvent(chat, chatElement);
    }
  }
});

function handleActiveChatChange(chatElement) {
  if (chatElement) {
    const selector = (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.getUniqueSelector)(chatElement);
    (0,_whatsappStore_getChatFiberFromDOM__WEBPACK_IMPORTED_MODULE_1__.getChatFiberFromDOM)(selector);
  }
}

function chatOnHoverObserver() {
  const chatsContainer = (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.getElementByXpath)('//*[@id="app"]');

  // Add mouseenter event listener to the chats container
  chatsContainer.addEventListener("mouseenter", handleChatHover, true);

  // Observe changes to identify active chats
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const activeChat = chatsContainer.querySelector(
          ".x10l6tqk.xh8yej3.x1g42fcv:has(._ak72._ak73._ak7p):not(.reminderChatItem)"
        );
        if (activeChat) {
          handleActiveChatChange(activeChat);
        }
      }
    });
  });

  observer.observe(chatsContainer, {
    attributes: true,
    subtree: true,
    attributeFilter: ["class"],
  });
}


/***/ }),

/***/ "./src/utils/domHelpers.js":
/*!*********************************!*\
  !*** ./src/utils/domHelpers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatTimestamp: () => (/* binding */ formatTimestamp),
/* harmony export */   getElementByXpath: () => (/* binding */ getElementByXpath),
/* harmony export */   getElementCoordinates: () => (/* binding */ getElementCoordinates),
/* harmony export */   getUniqueSelector: () => (/* binding */ getUniqueSelector),
/* harmony export */   hideAllChildren: () => (/* binding */ hideAllChildren),
/* harmony export */   injectScript: () => (/* binding */ injectScript),
/* harmony export */   isUserTyping: () => (/* binding */ isUserTyping),
/* harmony export */   observeAndAct: () => (/* binding */ observeAndAct),
/* harmony export */   removeIfExists: () => (/* binding */ removeIfExists)
/* harmony export */ });
function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

function getElementCoordinates(element) {
  const rect = element.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  return { x, y };
}

function isUserTyping() {
  const activeElement = document.activeElement;
  return (
    activeElement.tagName === "INPUT" ||
    activeElement.tagName === "TEXTAREA" ||
    activeElement.isContentEditable
  );
}

// Function to hide all children of a given element
function hideAllChildren(element) {
  // Loop through each child of the element
  Array.from(element.children).forEach((child) => {
    child.style.display = "none";
  });
}

// Utility function to remove an element if it exists
function removeIfExists(xpath) {
  const element = getElementByXpath(xpath);
  if (element) {
    element.remove();
  }
}

// Function to observe the DOM and perform an action based on XPath when it appears
function observeAndAct(xpath, callback) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      const element = getElementByXpath(xpath);
      if (element) {
        callback(element);
      }
    });
  });

  // Start observing the entire document for changes
  observer.observe(document.body, {
    childList: true, // Observe direct children
    subtree: true, // Observe all descendants
  });

  // Optionally, disconnect observer once the element is removed (for performance)
  // observer.disconnect();
}

function injectScript(file, callback) {
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL(file);
  script.onload = function () {
    this.remove();
    if (typeof callback === "function") {
      callback();
    }
  };
  (document.head || document.documentElement).appendChild(script);
}

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const currentYear = new Date().getFullYear();
  const formatOptions = {
    month: "short", // "Aug"
    day: "numeric", // "30"
    hour: "numeric", // "10"
    minute: "2-digit", // "00"
    hour12: true, // for AM/PM format
  };

  // Add year only if it's different from the current year
  if (date.getFullYear() !== currentYear) {
    formatOptions.year = "numeric"; // "2024"
  }

  return date.toLocaleString("en-US", formatOptions);
}

function getUniqueSelector(element) {
  if (!(element instanceof Element)) return;
  const path = [];
  while (element.nodeType === Node.ELEMENT_NODE) {
    let selector = element.nodeName.toLowerCase();
    if (element.id) {
      selector += "#" + element.id;
      path.unshift(selector);
      break;
    } else {
      let sibling = element;
      let nth = 1;
      while ((sibling = sibling.previousElementSibling)) {
        if (sibling.nodeName.toLowerCase() === selector) nth++;
      }
      if (nth !== 1) selector += ":nth-of-type(" + nth + ")";
    }
    path.unshift(selector);
    element = element.parentNode;
  }
  return path.join(" > ");
}


/***/ }),

/***/ "./src/utils/enhanceUi.js":
/*!********************************!*\
  !*** ./src/utils/enhanceUi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addStartupMessage: () => (/* binding */ addStartupMessage),
/* harmony export */   removeWhatsAppSpam: () => (/* binding */ removeWhatsAppSpam)
/* harmony export */ });
/* harmony import */ var _domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelpers */ "./src/utils/domHelpers.js");


// Remove WhatsApp spam
function removeWhatsAppSpam() {
  (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.observeAndAct)(`//*[@id="side"]/div[4]`, (element) => {
    element.remove();
  });
  (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.observeAndAct)(
    `//*[@id="app"]/div/div[2]/div[3]/header/header/div/span/div/span/div[3]/span/div/ul/li[7]`,
    (element) => {
      element.remove();
    }
  );
  (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.observeAndAct)(
    `//*[@id="app"]/div/div[2]/div[3]/header/header/div/span/div/span/div[3]/span/div/ul/hr`,
    (element) => {
      element.remove();
    }
  );
}

function addStartupMessage() {
  (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.observeAndAct)('//*[@id="app"]/div/div[2]/div[4]/div/div', (element) => {
    // Check if the message already exists
    if (!element.querySelector(".start-messaging")) {
      (0,_domHelpers__WEBPACK_IMPORTED_MODULE_0__.getElementByXpath)(`//*[@id="app"]/div/div[2]/div[4]/div/div`).innerHTML =
        "";
      // Create a message element
      const message = document.createElement("div");
      message.innerHTML = `<p>👋 Use <kbd>↑</kbd> and <kbd>↓</kbd> to move between chats.</p>`;
      message.className = "start-messaging";

      // Append the message to the target element
      element.appendChild(message);
    }
  });
}


/***/ }),

/***/ "./src/utils/eventHelpers.js":
/*!***********************************!*\
  !*** ./src/utils/eventHelpers.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   simulateKeyPress: () => (/* binding */ simulateKeyPress),
/* harmony export */   triggerNativeShortcut: () => (/* binding */ triggerNativeShortcut)
/* harmony export */ });
function simulateKeyPress(element, key) {
  const keyboardEvent = new KeyboardEvent("keydown", {
    key: key,
    code: key,
    keyCode: key,
    which: key,
    bubbles: true,
    cancelable: true,
  });
  element.dispatchEvent(keyboardEvent);
}

function triggerNativeShortcut(keys) {
  const event = new KeyboardEvent("keydown", {
    bubbles: true,
    cancelable: true,
    key: keys.key,
    code: keys.code,
    location: KeyboardEvent.DOM_KEY_LOCATION_STANDARD,
    ctrlKey: keys.ctrlKey,
    altKey: keys.altKey,
    shiftKey: keys.shiftKey,
    metaKey: keys.metaKey,
  });
  document.dispatchEvent(event);
}


/***/ }),

/***/ "./src/whatsappStore/archiveChat.js":
/*!******************************************!*\
  !*** ./src/whatsappStore/archiveChat.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   archiveChat: () => (/* binding */ archiveChat),
/* harmony export */   archiveChatListener: () => (/* binding */ archiveChatListener)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domHelpers */ "./src/utils/domHelpers.js");


function archiveChatListener() {
  (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.injectScript)("src/whatsappStore/scripts/archiveChat.js");
}

function archiveChat(chatId) {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "ARCHIVE_CHAT", chatId: chatId }, "*");
}


/***/ }),

/***/ "./src/whatsappStore/archiveChatEventListener.js":
/*!*******************************************************!*\
  !*** ./src/whatsappStore/archiveChatEventListener.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   archiveChatEventListener: () => (/* binding */ archiveChatEventListener)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domHelpers */ "./src/utils/domHelpers.js");


function archiveChatEventListener() {
  (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.injectScript)("src/whatsappStore/scripts/archiveChatEventListener.js");
}


/***/ }),

/***/ "./src/whatsappStore/chatsSync.js":
/*!****************************************!*\
  !*** ./src/whatsappStore/chatsSync.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chatsSync: () => (/* binding */ chatsSync)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domHelpers */ "./src/utils/domHelpers.js");


function chatsSync() {
  (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.injectScript)("src/whatsappStore/scripts/chatsSync.js");
}


/***/ }),

/***/ "./src/whatsappStore/composeFocus.js":
/*!*******************************************!*\
  !*** ./src/whatsappStore/composeFocus.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   composeFocusListener: () => (/* binding */ composeFocusListener)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domHelpers */ "./src/utils/domHelpers.js");


function composeFocusListener() {
  (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.injectScript)("src/whatsappStore/scripts/composeFocus.js");
}


/***/ }),

/***/ "./src/whatsappStore/filterChats.js":
/*!******************************************!*\
  !*** ./src/whatsappStore/filterChats.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterChats: () => (/* binding */ filterChats),
/* harmony export */   filterChatsListener: () => (/* binding */ filterChatsListener)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domHelpers */ "./src/utils/domHelpers.js");


function filterChatsListener() {
  (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.injectScript)("src/whatsappStore/scripts/filterChats.js");
}

function filterChats(chats) {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "FILTER_CHATS", chats: chats }, "*");
}


/***/ }),

/***/ "./src/whatsappStore/focusLastMessage.js":
/*!***********************************************!*\
  !*** ./src/whatsappStore/focusLastMessage.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   focusLastMessage: () => (/* binding */ focusLastMessage),
/* harmony export */   focusLastMessageListener: () => (/* binding */ focusLastMessageListener)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domHelpers */ "./src/utils/domHelpers.js");


function focusLastMessageListener() {
  (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.injectScript)("src/whatsappStore/scripts/focusLastMessage.js");
}

function focusLastMessage() {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "FOCUS_LAST_MESSAGE" }, "*");
}


/***/ }),

/***/ "./src/whatsappStore/focusNextChat.js":
/*!********************************************!*\
  !*** ./src/whatsappStore/focusNextChat.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   focusNextChat: () => (/* binding */ focusNextChat),
/* harmony export */   focusNextChatListener: () => (/* binding */ focusNextChatListener)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domHelpers */ "./src/utils/domHelpers.js");


function focusNextChatListener() {
  (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.injectScript)("src/whatsappStore/scripts/focusNextChat.js");
}

function focusNextChat() {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "FOCUS_NEXT_CHAT" }, "*");
}


/***/ }),

/***/ "./src/whatsappStore/focusPreviousChat.js":
/*!************************************************!*\
  !*** ./src/whatsappStore/focusPreviousChat.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   focusPreviousChat: () => (/* binding */ focusPreviousChat),
/* harmony export */   focusPreviousChatListener: () => (/* binding */ focusPreviousChatListener)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domHelpers */ "./src/utils/domHelpers.js");


function focusPreviousChatListener() {
  (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.injectScript)("src/whatsappStore/scripts/focusPreviousChat.js");
}

function focusPreviousChat() {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "FOCUS_PREVIOUS_CHAT" }, "*");
}


/***/ }),

/***/ "./src/whatsappStore/forwardFilterHandler.js":
/*!***************************************************!*\
  !*** ./src/whatsappStore/forwardFilterHandler.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forwardFilterHandlerListener: () => (/* binding */ forwardFilterHandlerListener)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domHelpers */ "./src/utils/domHelpers.js");


function forwardFilterHandlerListener() {
  (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.injectScript)("src/whatsappStore/scripts/forwardFilterHandler.js");
}


/***/ }),

/***/ "./src/whatsappStore/getChatDetails.js":
/*!*********************************************!*\
  !*** ./src/whatsappStore/getChatDetails.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getChatDetails: () => (/* binding */ getChatDetails),
/* harmony export */   getChatDetailsListener: () => (/* binding */ getChatDetailsListener)
/* harmony export */ });
/* harmony import */ var _features_snoozed_snoozeForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../features/snoozed/snoozeForm */ "./src/features/snoozed/snoozeForm.js");
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/domHelpers */ "./src/utils/domHelpers.js");



function getChatDetailsListener() {
  (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_1__.injectScript)("src/whatsappStore/scripts/getChatDetails.js");

  // Listen for the response from the injected script
  window.addEventListener("message", (event) => {
    if (
      event.data &&
      event.data.type === "CHAT_DETAILS_RESPONSE" &&
      event.data.chat
    ) {
      const { chatId, userName, lastMsg, profilePic } = event.data.chat;
      const chatContainer = document.querySelector(
        `.unloadedChat[data-chat-id="${chatId}"]`
      );

      if (profilePic) {
        chatContainer.querySelector(".profilePic").innerHTML = `
          <img
            alt=""
            draggable="false"
            class="x1n2onr6 x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 x14yjl9h xudhj91 x18nykt9 xww2gxu xl1xv1r x115dhu7 x17vty23 x1hc1fzr _ao3e"
            tabindex="-1"
            src=${profilePic}
            style="visibility: visible"
          />
        `;
      }

      if (userName) {
        chatContainer.querySelector(".userName").innerHTML = userName;
      }

      if (lastMsg) {
        chatContainer.querySelector(".lastMsg").innerHTML = lastMsg;
      }

      // Attach event listeners to the reminder buttons
      chatContainer
        .querySelector(".reminderBtn")
        .addEventListener("click", () => {
          (0,_features_snoozed_snoozeForm__WEBPACK_IMPORTED_MODULE_0__.snoozeForm)({ chatId: chatId, chatUsername: userName });
        });
    }
  });
}

function getChatDetails(chatId) {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "GET_CHAT_DETAILS", chatId: chatId }, "*");
}


/***/ }),

/***/ "./src/whatsappStore/getChatFiberFromDOM.js":
/*!**************************************************!*\
  !*** ./src/whatsappStore/getChatFiberFromDOM.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getChatFiberFromDOM: () => (/* binding */ getChatFiberFromDOM),
/* harmony export */   getChatFiberFromDOMListener: () => (/* binding */ getChatFiberFromDOMListener)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domHelpers */ "./src/utils/domHelpers.js");


function getChatFiberFromDOMListener() {
  (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.injectScript)("src/whatsappStore/scripts/getChatFiberFromDOM.js");
}

function getChatFiberFromDOM(selector) {
  window.postMessage({ type: "GET_CHAT_FIBER", selector }, "*");
}


/***/ }),

/***/ "./src/whatsappStore/markChatDone.js":
/*!*******************************************!*\
  !*** ./src/whatsappStore/markChatDone.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   markChatDone: () => (/* binding */ markChatDone),
/* harmony export */   markChatDoneListener: () => (/* binding */ markChatDoneListener)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domHelpers */ "./src/utils/domHelpers.js");


function markChatDoneListener() {
  (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.injectScript)("src/whatsappStore/scripts/markChatDone.js");
}

function markChatDone(chatId) {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "MARK_CHAT_DONE", chatId: chatId }, "*");
}


/***/ }),

/***/ "./src/whatsappStore/messagesListener.js":
/*!***********************************************!*\
  !*** ./src/whatsappStore/messagesListener.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   messagesListener: () => (/* binding */ messagesListener)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domHelpers */ "./src/utils/domHelpers.js");


function messagesListener() {
  (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.injectScript)("src/whatsappStore/scripts/messagesListener.js");
}

/***/ }),

/***/ "./src/whatsappStore/openContextMenu.js":
/*!**********************************************!*\
  !*** ./src/whatsappStore/openContextMenu.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openContextMenuListener: () => (/* binding */ openContextMenuListener)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domHelpers */ "./src/utils/domHelpers.js");


function openContextMenuListener() {
  (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.injectScript)("src/whatsappStore/scripts/openContextMenu.js");
}


/***/ }),

/***/ "./src/whatsappStore/openDrawerLeft.js":
/*!*********************************************!*\
  !*** ./src/whatsappStore/openDrawerLeft.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   openDrawerLeft: () => (/* binding */ openDrawerLeft),
/* harmony export */   openDrawerLeftListener: () => (/* binding */ openDrawerLeftListener)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domHelpers */ "./src/utils/domHelpers.js");


function openDrawerLeftListener() {
  (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.injectScript)("src/whatsappStore/scripts/openDrawerLeft.js");
}

function openDrawerLeft(drawer, drawerId) {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage(
    { type: "OPEN_DRAWER_LEFT", drawer: drawer, drawerId: drawerId },
    "*",
  );
}


/***/ }),

/***/ "./src/whatsappStore/requestMoveToForm.js":
/*!************************************************!*\
  !*** ./src/whatsappStore/requestMoveToForm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestMoveToForm: () => (/* binding */ requestMoveToForm),
/* harmony export */   requestMoveToFormListener: () => (/* binding */ requestMoveToFormListener)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domHelpers */ "./src/utils/domHelpers.js");


function requestMoveToFormListener() {
  (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.injectScript)("src/whatsappStore/scripts/requestMoveToForm.js");
}

function requestMoveToForm() {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "REQUEST_MOVE_TO_FORM" }, "*");
}


/***/ }),

/***/ "./src/whatsappStore/requestSnoozeForm.js":
/*!************************************************!*\
  !*** ./src/whatsappStore/requestSnoozeForm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestSnoozeForm: () => (/* binding */ requestSnoozeForm),
/* harmony export */   requestSnoozeFormListener: () => (/* binding */ requestSnoozeFormListener)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domHelpers */ "./src/utils/domHelpers.js");


function requestSnoozeFormListener() {
  (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.injectScript)("src/whatsappStore/scripts/requestSnoozeForm.js");
}

function requestSnoozeForm() {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "REQUEST_SNOOZE_FORM" }, "*");
}


/***/ }),

/***/ "./src/whatsappStore/unarchiveChat.js":
/*!********************************************!*\
  !*** ./src/whatsappStore/unarchiveChat.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unarchiveChat: () => (/* binding */ unarchiveChat),
/* harmony export */   unarchiveChatListener: () => (/* binding */ unarchiveChatListener)
/* harmony export */ });
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domHelpers */ "./src/utils/domHelpers.js");


function unarchiveChatListener() {
  (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_0__.injectScript)("src/whatsappStore/scripts/unarchiveChat.js");
}

function unarchiveChat(chatId) {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "UNARCHIVE_CHAT", chatId: chatId }, "*");
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _utils_domHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/domHelpers */ "./src/utils/domHelpers.js");
/* harmony import */ var _utils_enhanceUi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/enhanceUi */ "./src/utils/enhanceUi.js");
/* harmony import */ var _features_shortcuts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/shortcuts */ "./src/features/shortcuts/index.js");
/* harmony import */ var _features_folders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/folders */ "./src/features/folders/index.js");
/* harmony import */ var _features_snoozed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/snoozed */ "./src/features/snoozed/index.js");
/* harmony import */ var _features_scheduled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/scheduled */ "./src/features/scheduled/index.js");
/* harmony import */ var _observers_chatOnHoverObserver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./observers/chatOnHoverObserver */ "./src/observers/chatOnHoverObserver.js");
/* harmony import */ var _whatsappStore_archiveChat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./whatsappStore/archiveChat */ "./src/whatsappStore/archiveChat.js");
/* harmony import */ var _whatsappStore_unarchiveChat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./whatsappStore/unarchiveChat */ "./src/whatsappStore/unarchiveChat.js");
/* harmony import */ var _whatsappStore_markChatDone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./whatsappStore/markChatDone */ "./src/whatsappStore/markChatDone.js");
/* harmony import */ var _whatsappStore_openDrawerLeft__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./whatsappStore/openDrawerLeft */ "./src/whatsappStore/openDrawerLeft.js");
/* harmony import */ var _whatsappStore_getChatDetails__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./whatsappStore/getChatDetails */ "./src/whatsappStore/getChatDetails.js");
/* harmony import */ var _whatsappStore_openContextMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./whatsappStore/openContextMenu */ "./src/whatsappStore/openContextMenu.js");
/* harmony import */ var _whatsappStore_getChatFiberFromDOM__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./whatsappStore/getChatFiberFromDOM */ "./src/whatsappStore/getChatFiberFromDOM.js");
/* harmony import */ var _features_done__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./features/done */ "./src/features/done/index.js");

















// Inject font styles into the page
const link1 = document.createElement("link");
link1.rel = "stylesheet";
link1.href =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";

document.head.appendChild(link1);

Element.prototype.insertChildAtIndex = function (child, index) {
  if (!index) index = 0;
  if (index >= this.children.length) {
    this.appendChild(child);
  } else {
    this.insertBefore(child, this.children[index]);
  }
};

function initializeWhatsApp() {
  // Dispatch a custom event to signal that WhatsApp is initialized
  const event = new CustomEvent("whatsappInitialized", {
    detail: { message: "WhatsApp is now initialized" },
  });
  document.dispatchEvent(event);
}

(0,_features_shortcuts__WEBPACK_IMPORTED_MODULE_3__.initializeShortcuts)();
(0,_features_folders__WEBPACK_IMPORTED_MODULE_4__.initializeFolders)();
(0,_features_scheduled__WEBPACK_IMPORTED_MODULE_6__.initializeScheduled)();
(0,_features_snoozed__WEBPACK_IMPORTED_MODULE_5__.initializeSnoozed)();
(0,_features_done__WEBPACK_IMPORTED_MODULE_15__.initializeDone)();

// Target node to observe
const targetNode = document.body;

// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      if (
        (0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_1__.getElementByXpath)(
          `//*[@id="app"]/div/div[2]/div[3]/header/header/div/div/h1`
        )
      ) {
        observer.disconnect();
        initializeWhatsApp(); // Dispatch event when WhatsApp is loaded

        (0,_observers_chatOnHoverObserver__WEBPACK_IMPORTED_MODULE_7__.chatOnHoverObserver)();
        (0,_whatsappStore_archiveChat__WEBPACK_IMPORTED_MODULE_8__.archiveChatListener)();
        (0,_whatsappStore_unarchiveChat__WEBPACK_IMPORTED_MODULE_9__.unarchiveChatListener)();
        (0,_whatsappStore_openDrawerLeft__WEBPACK_IMPORTED_MODULE_11__.openDrawerLeftListener)();
        (0,_whatsappStore_getChatDetails__WEBPACK_IMPORTED_MODULE_12__.getChatDetailsListener)();
        (0,_whatsappStore_markChatDone__WEBPACK_IMPORTED_MODULE_10__.markChatDoneListener)();
        (0,_whatsappStore_openContextMenu__WEBPACK_IMPORTED_MODULE_13__.openContextMenuListener)();
        (0,_whatsappStore_getChatFiberFromDOM__WEBPACK_IMPORTED_MODULE_14__.getChatFiberFromDOMListener)();

        (0,_utils_enhanceUi__WEBPACK_IMPORTED_MODULE_2__.removeWhatsAppSpam)();
        (0,_utils_enhanceUi__WEBPACK_IMPORTED_MODULE_2__.addStartupMessage)();

        break;
      }
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLE1BQU0sT0FBTyxXQUFXLEtBQUssT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFB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d0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDa0M7QUFDbUI7QUFDZjtBQUNKO0FBQ0E7QUFDSTtBQUNXO0FBQ0o7QUFDSTtBQUNGO0FBQ0k7QUFDQTtBQUNFO0FBQ1E7QUFDakM7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsd0NBQXdDO0FBQ3RELEdBQUc7QUFDSDtBQUNBOztBQUVBLHdFQUFtQjtBQUNuQixvRUFBaUI7QUFDakIsd0VBQW1CO0FBQ25CLG9FQUFpQjtBQUNqQiwrREFBYzs7QUFFZDtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvRUFBaUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCLFFBQVEsbUZBQW1CO0FBQzNCLFFBQVEsK0VBQW1CO0FBQzNCLFFBQVEsbUZBQXFCO0FBQzdCLFFBQVEsc0ZBQXNCO0FBQzlCLFFBQVEsc0ZBQXNCO0FBQzlCLFFBQVEsa0ZBQW9CO0FBQzVCLFFBQVEsd0ZBQXVCO0FBQy9CLFFBQVEsZ0dBQTJCOztBQUVuQyxRQUFRLG9FQUFrQjtBQUMxQixRQUFRLG1FQUFpQjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc29ydGFibGVqcy9tb2R1bGFyL3NvcnRhYmxlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2Nzcz80ZTUzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hhdEFjdGlvbkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGF0TWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ZvbGRlckJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZCYXJJdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3JlbWluZGVyQ2hhdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL2RvbmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL2ZvbGRlcnMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvZm9sZGVycy9mb2xkZXJGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9mb2xkZXJzL2ZvbGRlcnNGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9mb2xkZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9mb2xkZXJzL21vdmVUb0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL2ZvbGRlcnMvc2hvcnRjdXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9mb2xkZXJzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL2ZvbGRlcnMvdWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL2ZvbGRlcnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3NjaGVkdWxlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvc2hvcnRjdXRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9zaG9ydGN1dHMva2V5Ym9hcmRMaXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3Nub296ZWQvY2x1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3Nub296ZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3Nub296ZWQvc25vb3plQ2hhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvc25vb3plZC9zbm9vemVGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9zbm9vemVkL3Nub296ZWRDaGF0c0RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvc25vb3plZC9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9zbm9vemVkL3Vuc25vb3plQ2hhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JzZXJ2ZXJzL2NoYXRPbkhvdmVyT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2RvbUhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2VuaGFuY2VVaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZXZlbnRIZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy93aGF0c2FwcFN0b3JlL2FyY2hpdmVDaGF0LmpzIiwid2VicGFjazovLy8uL3NyYy93aGF0c2FwcFN0b3JlL2FyY2hpdmVDaGF0RXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2hhdHNhcHBTdG9yZS9jaGF0c1N5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3doYXRzYXBwU3RvcmUvY29tcG9zZUZvY3VzLmpzIiwid2VicGFjazovLy8uL3NyYy93aGF0c2FwcFN0b3JlL2ZpbHRlckNoYXRzLmpzIiwid2VicGFjazovLy8uL3NyYy93aGF0c2FwcFN0b3JlL2ZvY3VzTGFzdE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3doYXRzYXBwU3RvcmUvZm9jdXNOZXh0Q2hhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2hhdHNhcHBTdG9yZS9mb2N1c1ByZXZpb3VzQ2hhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2hhdHNhcHBTdG9yZS9mb3J3YXJkRmlsdGVySGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2hhdHNhcHBTdG9yZS9nZXRDaGF0RGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2hhdHNhcHBTdG9yZS9nZXRDaGF0RmliZXJGcm9tRE9NLmpzIiwid2VicGFjazovLy8uL3NyYy93aGF0c2FwcFN0b3JlL21hcmtDaGF0RG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2hhdHNhcHBTdG9yZS9tZXNzYWdlc0xpc3RlbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy93aGF0c2FwcFN0b3JlL29wZW5Db250ZXh0TWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2hhdHNhcHBTdG9yZS9vcGVuRHJhd2VyTGVmdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2hhdHNhcHBTdG9yZS9yZXF1ZXN0TW92ZVRvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2hhdHNhcHBTdG9yZS9yZXF1ZXN0U25vb3plRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2hhdHNhcHBTdG9yZS91bmFyY2hpdmVDaGF0LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiFcbiAqIFNvcnRhYmxlIDEuMTUuM1xuICogQGF1dGhvclx0UnViYVhhICAgPHRyYXNoQHJ1YmF4YS5vcmc+XG4gKiBAYXV0aG9yXHRvd2VubSAgICA8b3dlbjIzMzU1QGdtYWlsLmNvbT5cbiAqIEBsaWNlbnNlIE1JVFxuICovXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgIGlmIChlbnVtZXJhYmxlT25seSkge1xuICAgICAgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KTtcbiAgICB9XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG4gIHJldHVybiBrZXlzO1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG4gIHJldHVybiBhcnIyO1xufVxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxudmFyIHZlcnNpb24gPSBcIjEuMTUuM1wiO1xuXG5mdW5jdGlvbiB1c2VyQWdlbnQocGF0dGVybikge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm5hdmlnYXRvcikge1xuICAgIHJldHVybiAhISAvKkBfX1BVUkVfXyovbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChwYXR0ZXJuKTtcbiAgfVxufVxudmFyIElFMTFPckxlc3MgPSB1c2VyQWdlbnQoLyg/OlRyaWRlbnQuKnJ2WyA6XT8xMVxcLnxtc2llfGllbW9iaWxlfFdpbmRvd3MgUGhvbmUpL2kpO1xudmFyIEVkZ2UgPSB1c2VyQWdlbnQoL0VkZ2UvaSk7XG52YXIgRmlyZUZveCA9IHVzZXJBZ2VudCgvZmlyZWZveC9pKTtcbnZhciBTYWZhcmkgPSB1c2VyQWdlbnQoL3NhZmFyaS9pKSAmJiAhdXNlckFnZW50KC9jaHJvbWUvaSkgJiYgIXVzZXJBZ2VudCgvYW5kcm9pZC9pKTtcbnZhciBJT1MgPSB1c2VyQWdlbnQoL2lQKGFkfG9kfGhvbmUpL2kpO1xudmFyIENocm9tZUZvckFuZHJvaWQgPSB1c2VyQWdlbnQoL2Nocm9tZS9pKSAmJiB1c2VyQWdlbnQoL2FuZHJvaWQvaSk7XG5cbnZhciBjYXB0dXJlTW9kZSA9IHtcbiAgY2FwdHVyZTogZmFsc2UsXG4gIHBhc3NpdmU6IGZhbHNlXG59O1xuZnVuY3Rpb24gb24oZWwsIGV2ZW50LCBmbikge1xuICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgIUlFMTFPckxlc3MgJiYgY2FwdHVyZU1vZGUpO1xufVxuZnVuY3Rpb24gb2ZmKGVsLCBldmVudCwgZm4pIHtcbiAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZm4sICFJRTExT3JMZXNzICYmIGNhcHR1cmVNb2RlKTtcbn1cbmZ1bmN0aW9uIG1hdGNoZXMoIC8qKkhUTUxFbGVtZW50Ki9lbCwgLyoqU3RyaW5nKi9zZWxlY3Rvcikge1xuICBpZiAoIXNlbGVjdG9yKSByZXR1cm47XG4gIHNlbGVjdG9yWzBdID09PSAnPicgJiYgKHNlbGVjdG9yID0gc2VsZWN0b3Iuc3Vic3RyaW5nKDEpKTtcbiAgaWYgKGVsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChlbC5tYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiBlbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICAgIH0gZWxzZSBpZiAoZWwubXNNYXRjaGVzU2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGVsLm1zTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH0gZWxzZSBpZiAoZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gZ2V0UGFyZW50T3JIb3N0KGVsKSB7XG4gIHJldHVybiBlbC5ob3N0ICYmIGVsICE9PSBkb2N1bWVudCAmJiBlbC5ob3N0Lm5vZGVUeXBlID8gZWwuaG9zdCA6IGVsLnBhcmVudE5vZGU7XG59XG5mdW5jdGlvbiBjbG9zZXN0KCAvKipIVE1MRWxlbWVudCovZWwsIC8qKlN0cmluZyovc2VsZWN0b3IsIC8qKkhUTUxFbGVtZW50Ki9jdHgsIGluY2x1ZGVDVFgpIHtcbiAgaWYgKGVsKSB7XG4gICAgY3R4ID0gY3R4IHx8IGRvY3VtZW50O1xuICAgIGRvIHtcbiAgICAgIGlmIChzZWxlY3RvciAhPSBudWxsICYmIChzZWxlY3RvclswXSA9PT0gJz4nID8gZWwucGFyZW50Tm9kZSA9PT0gY3R4ICYmIG1hdGNoZXMoZWwsIHNlbGVjdG9yKSA6IG1hdGNoZXMoZWwsIHNlbGVjdG9yKSkgfHwgaW5jbHVkZUNUWCAmJiBlbCA9PT0gY3R4KSB7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICAgIGlmIChlbCA9PT0gY3R4KSBicmVhaztcbiAgICAgIC8qIGpzaGludCBib3NzOnRydWUgKi9cbiAgICB9IHdoaWxlIChlbCA9IGdldFBhcmVudE9ySG9zdChlbCkpO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxudmFyIFJfU1BBQ0UgPSAvXFxzKy9nO1xuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoZWwsIG5hbWUsIHN0YXRlKSB7XG4gIGlmIChlbCAmJiBuYW1lKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgZWwuY2xhc3NMaXN0W3N0YXRlID8gJ2FkZCcgOiAncmVtb3ZlJ10obmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjbGFzc05hbWUgPSAoJyAnICsgZWwuY2xhc3NOYW1lICsgJyAnKS5yZXBsYWNlKFJfU1BBQ0UsICcgJykucmVwbGFjZSgnICcgKyBuYW1lICsgJyAnLCAnICcpO1xuICAgICAgZWwuY2xhc3NOYW1lID0gKGNsYXNzTmFtZSArIChzdGF0ZSA/ICcgJyArIG5hbWUgOiAnJykpLnJlcGxhY2UoUl9TUEFDRSwgJyAnKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNzcyhlbCwgcHJvcCwgdmFsKSB7XG4gIHZhciBzdHlsZSA9IGVsICYmIGVsLnN0eWxlO1xuICBpZiAoc3R5bGUpIHtcbiAgICBpZiAodmFsID09PSB2b2lkIDApIHtcbiAgICAgIGlmIChkb2N1bWVudC5kZWZhdWx0VmlldyAmJiBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKSB7XG4gICAgICAgIHZhbCA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoZWwsICcnKTtcbiAgICAgIH0gZWxzZSBpZiAoZWwuY3VycmVudFN0eWxlKSB7XG4gICAgICAgIHZhbCA9IGVsLmN1cnJlbnRTdHlsZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9wID09PSB2b2lkIDAgPyB2YWwgOiB2YWxbcHJvcF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghKHByb3AgaW4gc3R5bGUpICYmIHByb3AuaW5kZXhPZignd2Via2l0JykgPT09IC0xKSB7XG4gICAgICAgIHByb3AgPSAnLXdlYmtpdC0nICsgcHJvcDtcbiAgICAgIH1cbiAgICAgIHN0eWxlW3Byb3BdID0gdmFsICsgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gJycgOiAncHgnKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIG1hdHJpeChlbCwgc2VsZk9ubHkpIHtcbiAgdmFyIGFwcGxpZWRUcmFuc2Zvcm1zID0gJyc7XG4gIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgYXBwbGllZFRyYW5zZm9ybXMgPSBlbDtcbiAgfSBlbHNlIHtcbiAgICBkbyB7XG4gICAgICB2YXIgdHJhbnNmb3JtID0gY3NzKGVsLCAndHJhbnNmb3JtJyk7XG4gICAgICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGFwcGxpZWRUcmFuc2Zvcm1zID0gdHJhbnNmb3JtICsgJyAnICsgYXBwbGllZFRyYW5zZm9ybXM7XG4gICAgICB9XG4gICAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gICAgfSB3aGlsZSAoIXNlbGZPbmx5ICYmIChlbCA9IGVsLnBhcmVudE5vZGUpKTtcbiAgfVxuICB2YXIgbWF0cml4Rm4gPSB3aW5kb3cuRE9NTWF0cml4IHx8IHdpbmRvdy5XZWJLaXRDU1NNYXRyaXggfHwgd2luZG93LkNTU01hdHJpeCB8fCB3aW5kb3cuTVNDU1NNYXRyaXg7XG4gIC8qanNoaW50IC1XMDU2ICovXG4gIHJldHVybiBtYXRyaXhGbiAmJiBuZXcgbWF0cml4Rm4oYXBwbGllZFRyYW5zZm9ybXMpO1xufVxuZnVuY3Rpb24gZmluZChjdHgsIHRhZ05hbWUsIGl0ZXJhdG9yKSB7XG4gIGlmIChjdHgpIHtcbiAgICB2YXIgbGlzdCA9IGN0eC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKSxcbiAgICAgIGkgPSAwLFxuICAgICAgbiA9IGxpc3QubGVuZ3RoO1xuICAgIGlmIChpdGVyYXRvcikge1xuICAgICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgaXRlcmF0b3IobGlzdFtpXSwgaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsaXN0O1xuICB9XG4gIHJldHVybiBbXTtcbn1cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKSB7XG4gIHZhciBzY3JvbGxpbmdFbGVtZW50ID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudDtcbiAgaWYgKHNjcm9sbGluZ0VsZW1lbnQpIHtcbiAgICByZXR1cm4gc2Nyb2xsaW5nRWxlbWVudDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG59XG5cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBcImJvdW5kaW5nIGNsaWVudCByZWN0XCIgb2YgZ2l2ZW4gZWxlbWVudFxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWwgICAgICAgICAgICAgICAgICAgICAgIFRoZSBlbGVtZW50IHdob3NlIGJvdW5kaW5nQ2xpZW50UmVjdCBpcyB3YW50ZWRcclxuICogQHBhcmFtICB7W0Jvb2xlYW5dfSByZWxhdGl2ZVRvQ29udGFpbmluZ0Jsb2NrICBXaGV0aGVyIHRoZSByZWN0IHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgY29udGFpbmluZyBibG9jayBvZiAoaW5jbHVkaW5nKSB0aGUgY29udGFpbmVyXHJcbiAqIEBwYXJhbSAge1tCb29sZWFuXX0gcmVsYXRpdmVUb05vblN0YXRpY1BhcmVudCAgV2hldGhlciB0aGUgcmVjdCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIHJlbGF0aXZlIHBhcmVudCBvZiAoaW5jbHVkaW5nKSB0aGUgY29udGFpZW5yXHJcbiAqIEBwYXJhbSAge1tCb29sZWFuXX0gdW5kb1NjYWxlICAgICAgICAgICAgICAgICAgV2hldGhlciB0aGUgY29udGFpbmVyJ3Mgc2NhbGUoKSBzaG91bGQgYmUgdW5kb25lXHJcbiAqIEBwYXJhbSAge1tIVE1MRWxlbWVudF19IGNvbnRhaW5lciAgICAgICAgICAgICAgVGhlIHBhcmVudCB0aGUgZWxlbWVudCB3aWxsIGJlIHBsYWNlZCBpblxyXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBib3VuZGluZ0NsaWVudFJlY3Qgb2YgZWwsIHdpdGggc3BlY2lmaWVkIGFkanVzdG1lbnRzXHJcbiAqL1xuZnVuY3Rpb24gZ2V0UmVjdChlbCwgcmVsYXRpdmVUb0NvbnRhaW5pbmdCbG9jaywgcmVsYXRpdmVUb05vblN0YXRpY1BhcmVudCwgdW5kb1NjYWxlLCBjb250YWluZXIpIHtcbiAgaWYgKCFlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgJiYgZWwgIT09IHdpbmRvdykgcmV0dXJuO1xuICB2YXIgZWxSZWN0LCB0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQsIGhlaWdodCwgd2lkdGg7XG4gIGlmIChlbCAhPT0gd2luZG93ICYmIGVsLnBhcmVudE5vZGUgJiYgZWwgIT09IGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKSkge1xuICAgIGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRvcCA9IGVsUmVjdC50b3A7XG4gICAgbGVmdCA9IGVsUmVjdC5sZWZ0O1xuICAgIGJvdHRvbSA9IGVsUmVjdC5ib3R0b207XG4gICAgcmlnaHQgPSBlbFJlY3QucmlnaHQ7XG4gICAgaGVpZ2h0ID0gZWxSZWN0LmhlaWdodDtcbiAgICB3aWR0aCA9IGVsUmVjdC53aWR0aDtcbiAgfSBlbHNlIHtcbiAgICB0b3AgPSAwO1xuICAgIGxlZnQgPSAwO1xuICAgIGJvdHRvbSA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICByaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB9XG4gIGlmICgocmVsYXRpdmVUb0NvbnRhaW5pbmdCbG9jayB8fCByZWxhdGl2ZVRvTm9uU3RhdGljUGFyZW50KSAmJiBlbCAhPT0gd2luZG93KSB7XG4gICAgLy8gQWRqdXN0IGZvciB0cmFuc2xhdGUoKVxuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lciB8fCBlbC5wYXJlbnROb2RlO1xuXG4gICAgLy8gc29sdmVzICMxMTIzIChzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNzk1MzgwNi82MDg4MzEyKVxuICAgIC8vIE5vdCBuZWVkZWQgb24gPD0gSUUxMVxuICAgIGlmICghSUUxMU9yTGVzcykge1xuICAgICAgZG8ge1xuICAgICAgICBpZiAoY29udGFpbmVyICYmIGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QgJiYgKGNzcyhjb250YWluZXIsICd0cmFuc2Zvcm0nKSAhPT0gJ25vbmUnIHx8IHJlbGF0aXZlVG9Ob25TdGF0aWNQYXJlbnQgJiYgY3NzKGNvbnRhaW5lciwgJ3Bvc2l0aW9uJykgIT09ICdzdGF0aWMnKSkge1xuICAgICAgICAgIHZhciBjb250YWluZXJSZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgLy8gU2V0IHJlbGF0aXZlIHRvIGVkZ2VzIG9mIHBhZGRpbmcgYm94IG9mIGNvbnRhaW5lclxuICAgICAgICAgIHRvcCAtPSBjb250YWluZXJSZWN0LnRvcCArIHBhcnNlSW50KGNzcyhjb250YWluZXIsICdib3JkZXItdG9wLXdpZHRoJykpO1xuICAgICAgICAgIGxlZnQgLT0gY29udGFpbmVyUmVjdC5sZWZ0ICsgcGFyc2VJbnQoY3NzKGNvbnRhaW5lciwgJ2JvcmRlci1sZWZ0LXdpZHRoJykpO1xuICAgICAgICAgIGJvdHRvbSA9IHRvcCArIGVsUmVjdC5oZWlnaHQ7XG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICsgZWxSZWN0LndpZHRoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8qIGpzaGludCBib3NzOnRydWUgKi9cbiAgICAgIH0gd2hpbGUgKGNvbnRhaW5lciA9IGNvbnRhaW5lci5wYXJlbnROb2RlKTtcbiAgICB9XG4gIH1cbiAgaWYgKHVuZG9TY2FsZSAmJiBlbCAhPT0gd2luZG93KSB7XG4gICAgLy8gQWRqdXN0IGZvciBzY2FsZSgpXG4gICAgdmFyIGVsTWF0cml4ID0gbWF0cml4KGNvbnRhaW5lciB8fCBlbCksXG4gICAgICBzY2FsZVggPSBlbE1hdHJpeCAmJiBlbE1hdHJpeC5hLFxuICAgICAgc2NhbGVZID0gZWxNYXRyaXggJiYgZWxNYXRyaXguZDtcbiAgICBpZiAoZWxNYXRyaXgpIHtcbiAgICAgIHRvcCAvPSBzY2FsZVk7XG4gICAgICBsZWZ0IC89IHNjYWxlWDtcbiAgICAgIHdpZHRoIC89IHNjYWxlWDtcbiAgICAgIGhlaWdodCAvPSBzY2FsZVk7XG4gICAgICBib3R0b20gPSB0b3AgKyBoZWlnaHQ7XG4gICAgICByaWdodCA9IGxlZnQgKyB3aWR0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0b3A6IHRvcCxcbiAgICBsZWZ0OiBsZWZ0LFxuICAgIGJvdHRvbTogYm90dG9tLFxuICAgIHJpZ2h0OiByaWdodCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn1cblxuLyoqXHJcbiAqIENoZWNrcyBpZiBhIHNpZGUgb2YgYW4gZWxlbWVudCBpcyBzY3JvbGxlZCBwYXN0IGEgc2lkZSBvZiBpdHMgcGFyZW50c1xyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gIGVsICAgICAgICAgICBUaGUgZWxlbWVudCB3aG8ncyBzaWRlIGJlaW5nIHNjcm9sbGVkIG91dCBvZiB2aWV3IGlzIGluIHF1ZXN0aW9uXHJcbiAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgZWxTaWRlICAgICAgIFNpZGUgb2YgdGhlIGVsZW1lbnQgaW4gcXVlc3Rpb24gKCd0b3AnLCAnbGVmdCcsICdyaWdodCcsICdib3R0b20nKVxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgIHBhcmVudFNpZGUgICBTaWRlIG9mIHRoZSBwYXJlbnQgaW4gcXVlc3Rpb24gKCd0b3AnLCAnbGVmdCcsICdyaWdodCcsICdib3R0b20nKVxyXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICAgICAgICAgICAgICBUaGUgcGFyZW50IHNjcm9sbCBlbGVtZW50IHRoYXQgdGhlIGVsJ3Mgc2lkZSBpcyBzY3JvbGxlZCBwYXN0LCBvciBudWxsIGlmIHRoZXJlIGlzIG5vIHN1Y2ggZWxlbWVudFxyXG4gKi9cbmZ1bmN0aW9uIGlzU2Nyb2xsZWRQYXN0KGVsLCBlbFNpZGUsIHBhcmVudFNpZGUpIHtcbiAgdmFyIHBhcmVudCA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGVsLCB0cnVlKSxcbiAgICBlbFNpZGVWYWwgPSBnZXRSZWN0KGVsKVtlbFNpZGVdO1xuXG4gIC8qIGpzaGludCBib3NzOnRydWUgKi9cbiAgd2hpbGUgKHBhcmVudCkge1xuICAgIHZhciBwYXJlbnRTaWRlVmFsID0gZ2V0UmVjdChwYXJlbnQpW3BhcmVudFNpZGVdLFxuICAgICAgdmlzaWJsZSA9IHZvaWQgMDtcbiAgICBpZiAocGFyZW50U2lkZSA9PT0gJ3RvcCcgfHwgcGFyZW50U2lkZSA9PT0gJ2xlZnQnKSB7XG4gICAgICB2aXNpYmxlID0gZWxTaWRlVmFsID49IHBhcmVudFNpZGVWYWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpc2libGUgPSBlbFNpZGVWYWwgPD0gcGFyZW50U2lkZVZhbDtcbiAgICB9XG4gICAgaWYgKCF2aXNpYmxlKSByZXR1cm4gcGFyZW50O1xuICAgIGlmIChwYXJlbnQgPT09IGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKSkgYnJlYWs7XG4gICAgcGFyZW50ID0gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQocGFyZW50LCBmYWxzZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcclxuICogR2V0cyBudGggY2hpbGQgb2YgZWwsIGlnbm9yaW5nIGhpZGRlbiBjaGlsZHJlbiwgc29ydGFibGUncyBlbGVtZW50cyAoZG9lcyBub3QgaWdub3JlIGNsb25lIGlmIGl0J3MgdmlzaWJsZSlcclxuICogYW5kIG5vbi1kcmFnZ2FibGUgZWxlbWVudHNcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgICAgIFRoZSBwYXJlbnQgZWxlbWVudFxyXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGNoaWxkTnVtICAgICAgVGhlIGluZGV4IG9mIHRoZSBjaGlsZFxyXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnMgICAgICAgUGFyZW50IFNvcnRhYmxlJ3Mgb3B0aW9uc1xyXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICAgICAgICAgVGhlIGNoaWxkIGF0IGluZGV4IGNoaWxkTnVtLCBvciBudWxsIGlmIG5vdCBmb3VuZFxyXG4gKi9cbmZ1bmN0aW9uIGdldENoaWxkKGVsLCBjaGlsZE51bSwgb3B0aW9ucywgaW5jbHVkZURyYWdFbCkge1xuICB2YXIgY3VycmVudENoaWxkID0gMCxcbiAgICBpID0gMCxcbiAgICBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xuICB3aGlsZSAoaSA8IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgIGlmIChjaGlsZHJlbltpXS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgJiYgY2hpbGRyZW5baV0gIT09IFNvcnRhYmxlLmdob3N0ICYmIChpbmNsdWRlRHJhZ0VsIHx8IGNoaWxkcmVuW2ldICE9PSBTb3J0YWJsZS5kcmFnZ2VkKSAmJiBjbG9zZXN0KGNoaWxkcmVuW2ldLCBvcHRpb25zLmRyYWdnYWJsZSwgZWwsIGZhbHNlKSkge1xuICAgICAgaWYgKGN1cnJlbnRDaGlsZCA9PT0gY2hpbGROdW0pIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuW2ldO1xuICAgICAgfVxuICAgICAgY3VycmVudENoaWxkKys7XG4gICAgfVxuICAgIGkrKztcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXHJcbiAqIEdldHMgdGhlIGxhc3QgY2hpbGQgaW4gdGhlIGVsLCBpZ25vcmluZyBnaG9zdEVsIG9yIGludmlzaWJsZSBlbGVtZW50cyAoY2xvbmVzKVxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWwgICAgICAgUGFyZW50IGVsZW1lbnRcclxuICogQHBhcmFtICB7c2VsZWN0b3J9IHNlbGVjdG9yICAgIEFueSBvdGhlciBlbGVtZW50cyB0aGF0IHNob3VsZCBiZSBpZ25vcmVkXHJcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAgICAgICAgICBUaGUgbGFzdCBjaGlsZCwgaWdub3JpbmcgZ2hvc3RFbFxyXG4gKi9cbmZ1bmN0aW9uIGxhc3RDaGlsZChlbCwgc2VsZWN0b3IpIHtcbiAgdmFyIGxhc3QgPSBlbC5sYXN0RWxlbWVudENoaWxkO1xuICB3aGlsZSAobGFzdCAmJiAobGFzdCA9PT0gU29ydGFibGUuZ2hvc3QgfHwgY3NzKGxhc3QsICdkaXNwbGF5JykgPT09ICdub25lJyB8fCBzZWxlY3RvciAmJiAhbWF0Y2hlcyhsYXN0LCBzZWxlY3RvcikpKSB7XG4gICAgbGFzdCA9IGxhc3QucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgfVxuICByZXR1cm4gbGFzdCB8fCBudWxsO1xufVxuXG4vKipcclxuICogUmV0dXJucyB0aGUgaW5kZXggb2YgYW4gZWxlbWVudCB3aXRoaW4gaXRzIHBhcmVudCBmb3IgYSBzZWxlY3RlZCBzZXQgb2ZcclxuICogZWxlbWVudHNcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsXHJcbiAqIEBwYXJhbSAge3NlbGVjdG9yfSBzZWxlY3RvclxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xuZnVuY3Rpb24gaW5kZXgoZWwsIHNlbGVjdG9yKSB7XG4gIHZhciBpbmRleCA9IDA7XG4gIGlmICghZWwgfHwgIWVsLnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gIHdoaWxlIChlbCA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcbiAgICBpZiAoZWwubm9kZU5hbWUudG9VcHBlckNhc2UoKSAhPT0gJ1RFTVBMQVRFJyAmJiBlbCAhPT0gU29ydGFibGUuY2xvbmUgJiYgKCFzZWxlY3RvciB8fCBtYXRjaGVzKGVsLCBzZWxlY3RvcikpKSB7XG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5kZXg7XG59XG5cbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBzY3JvbGwgb2Zmc2V0IG9mIHRoZSBnaXZlbiBlbGVtZW50LCBhZGRlZCB3aXRoIGFsbCB0aGUgc2Nyb2xsIG9mZnNldHMgb2YgcGFyZW50IGVsZW1lbnRzLlxyXG4gKiBUaGUgdmFsdWUgaXMgcmV0dXJuZWQgaW4gcmVhbCBwaXhlbHMuXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbFxyXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgICAgICAgT2Zmc2V0cyBpbiB0aGUgZm9ybWF0IG9mIFtsZWZ0LCB0b3BdXHJcbiAqL1xuZnVuY3Rpb24gZ2V0UmVsYXRpdmVTY3JvbGxPZmZzZXQoZWwpIHtcbiAgdmFyIG9mZnNldExlZnQgPSAwLFxuICAgIG9mZnNldFRvcCA9IDAsXG4gICAgd2luU2Nyb2xsZXIgPSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCk7XG4gIGlmIChlbCkge1xuICAgIGRvIHtcbiAgICAgIHZhciBlbE1hdHJpeCA9IG1hdHJpeChlbCksXG4gICAgICAgIHNjYWxlWCA9IGVsTWF0cml4LmEsXG4gICAgICAgIHNjYWxlWSA9IGVsTWF0cml4LmQ7XG4gICAgICBvZmZzZXRMZWZ0ICs9IGVsLnNjcm9sbExlZnQgKiBzY2FsZVg7XG4gICAgICBvZmZzZXRUb3AgKz0gZWwuc2Nyb2xsVG9wICogc2NhbGVZO1xuICAgIH0gd2hpbGUgKGVsICE9PSB3aW5TY3JvbGxlciAmJiAoZWwgPSBlbC5wYXJlbnROb2RlKSk7XG4gIH1cbiAgcmV0dXJuIFtvZmZzZXRMZWZ0LCBvZmZzZXRUb3BdO1xufVxuXG4vKipcclxuICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG9iamVjdCB3aXRoaW4gdGhlIGdpdmVuIGFycmF5XHJcbiAqIEBwYXJhbSAge0FycmF5fSBhcnIgICBBcnJheSB0aGF0IG1heSBvciBtYXkgbm90IGhvbGQgdGhlIG9iamVjdFxyXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9iaiAgQW4gb2JqZWN0IHRoYXQgaGFzIGEga2V5LXZhbHVlIHBhaXIgdW5pcXVlIHRvIGFuZCBpZGVudGljYWwgdG8gYSBrZXktdmFsdWUgcGFpciBpbiB0aGUgb2JqZWN0IHlvdSB3YW50IHRvIGZpbmRcclxuICogQHJldHVybiB7TnVtYmVyfSAgICAgIFRoZSBpbmRleCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheSwgb3IgLTFcclxuICovXG5mdW5jdGlvbiBpbmRleE9mT2JqZWN0KGFyciwgb2JqKSB7XG4gIGZvciAodmFyIGkgaW4gYXJyKSB7XG4gICAgaWYgKCFhcnIuaGFzT3duUHJvcGVydHkoaSkpIGNvbnRpbnVlO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSAmJiBvYmpba2V5XSA9PT0gYXJyW2ldW2tleV0pIHJldHVybiBOdW1iZXIoaSk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cbmZ1bmN0aW9uIGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGVsLCBpbmNsdWRlU2VsZikge1xuICAvLyBza2lwIHRvIHdpbmRvd1xuICBpZiAoIWVsIHx8ICFlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHJldHVybiBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCk7XG4gIHZhciBlbGVtID0gZWw7XG4gIHZhciBnb3RTZWxmID0gZmFsc2U7XG4gIGRvIHtcbiAgICAvLyB3ZSBkb24ndCBuZWVkIHRvIGdldCBlbGVtIGNzcyBpZiBpdCBpc24ndCBldmVuIG92ZXJmbG93aW5nIGluIHRoZSBmaXJzdCBwbGFjZSAocGVyZm9ybWFuY2UpXG4gICAgaWYgKGVsZW0uY2xpZW50V2lkdGggPCBlbGVtLnNjcm9sbFdpZHRoIHx8IGVsZW0uY2xpZW50SGVpZ2h0IDwgZWxlbS5zY3JvbGxIZWlnaHQpIHtcbiAgICAgIHZhciBlbGVtQ1NTID0gY3NzKGVsZW0pO1xuICAgICAgaWYgKGVsZW0uY2xpZW50V2lkdGggPCBlbGVtLnNjcm9sbFdpZHRoICYmIChlbGVtQ1NTLm92ZXJmbG93WCA9PSAnYXV0bycgfHwgZWxlbUNTUy5vdmVyZmxvd1ggPT0gJ3Njcm9sbCcpIHx8IGVsZW0uY2xpZW50SGVpZ2h0IDwgZWxlbS5zY3JvbGxIZWlnaHQgJiYgKGVsZW1DU1Mub3ZlcmZsb3dZID09ICdhdXRvJyB8fCBlbGVtQ1NTLm92ZXJmbG93WSA9PSAnc2Nyb2xsJykpIHtcbiAgICAgICAgaWYgKCFlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCB8fCBlbGVtID09PSBkb2N1bWVudC5ib2R5KSByZXR1cm4gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICAgICAgICBpZiAoZ290U2VsZiB8fCBpbmNsdWRlU2VsZikgcmV0dXJuIGVsZW07XG4gICAgICAgIGdvdFNlbGYgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gIH0gd2hpbGUgKGVsZW0gPSBlbGVtLnBhcmVudE5vZGUpO1xuICByZXR1cm4gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xufVxuZnVuY3Rpb24gZXh0ZW5kKGRzdCwgc3JjKSB7XG4gIGlmIChkc3QgJiYgc3JjKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGRzdFtrZXldID0gc3JjW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBkc3Q7XG59XG5mdW5jdGlvbiBpc1JlY3RFcXVhbChyZWN0MSwgcmVjdDIpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQocmVjdDEudG9wKSA9PT0gTWF0aC5yb3VuZChyZWN0Mi50b3ApICYmIE1hdGgucm91bmQocmVjdDEubGVmdCkgPT09IE1hdGgucm91bmQocmVjdDIubGVmdCkgJiYgTWF0aC5yb3VuZChyZWN0MS5oZWlnaHQpID09PSBNYXRoLnJvdW5kKHJlY3QyLmhlaWdodCkgJiYgTWF0aC5yb3VuZChyZWN0MS53aWR0aCkgPT09IE1hdGgucm91bmQocmVjdDIud2lkdGgpO1xufVxudmFyIF90aHJvdHRsZVRpbWVvdXQ7XG5mdW5jdGlvbiB0aHJvdHRsZShjYWxsYmFjaywgbXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIV90aHJvdHRsZVRpbWVvdXQpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBfdGhpcyA9IHRoaXM7XG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbChfdGhpcywgYXJnc1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjay5hcHBseShfdGhpcywgYXJncyk7XG4gICAgICB9XG4gICAgICBfdGhyb3R0bGVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aHJvdHRsZVRpbWVvdXQgPSB2b2lkIDA7XG4gICAgICB9LCBtcyk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gY2FuY2VsVGhyb3R0bGUoKSB7XG4gIGNsZWFyVGltZW91dChfdGhyb3R0bGVUaW1lb3V0KTtcbiAgX3Rocm90dGxlVGltZW91dCA9IHZvaWQgMDtcbn1cbmZ1bmN0aW9uIHNjcm9sbEJ5KGVsLCB4LCB5KSB7XG4gIGVsLnNjcm9sbExlZnQgKz0geDtcbiAgZWwuc2Nyb2xsVG9wICs9IHk7XG59XG5mdW5jdGlvbiBjbG9uZShlbCkge1xuICB2YXIgUG9seW1lciA9IHdpbmRvdy5Qb2x5bWVyO1xuICB2YXIgJCA9IHdpbmRvdy5qUXVlcnkgfHwgd2luZG93LlplcHRvO1xuICBpZiAoUG9seW1lciAmJiBQb2x5bWVyLmRvbSkge1xuICAgIHJldHVybiBQb2x5bWVyLmRvbShlbCkuY2xvbmVOb2RlKHRydWUpO1xuICB9IGVsc2UgaWYgKCQpIHtcbiAgICByZXR1cm4gJChlbCkuY2xvbmUodHJ1ZSlbMF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVsLmNsb25lTm9kZSh0cnVlKTtcbiAgfVxufVxuZnVuY3Rpb24gc2V0UmVjdChlbCwgcmVjdCkge1xuICBjc3MoZWwsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICBjc3MoZWwsICd0b3AnLCByZWN0LnRvcCk7XG4gIGNzcyhlbCwgJ2xlZnQnLCByZWN0LmxlZnQpO1xuICBjc3MoZWwsICd3aWR0aCcsIHJlY3Qud2lkdGgpO1xuICBjc3MoZWwsICdoZWlnaHQnLCByZWN0LmhlaWdodCk7XG59XG5mdW5jdGlvbiB1bnNldFJlY3QoZWwpIHtcbiAgY3NzKGVsLCAncG9zaXRpb24nLCAnJyk7XG4gIGNzcyhlbCwgJ3RvcCcsICcnKTtcbiAgY3NzKGVsLCAnbGVmdCcsICcnKTtcbiAgY3NzKGVsLCAnd2lkdGgnLCAnJyk7XG4gIGNzcyhlbCwgJ2hlaWdodCcsICcnKTtcbn1cbmZ1bmN0aW9uIGdldENoaWxkQ29udGFpbmluZ1JlY3RGcm9tRWxlbWVudChjb250YWluZXIsIG9wdGlvbnMsIGdob3N0RWwpIHtcbiAgdmFyIHJlY3QgPSB7fTtcbiAgQXJyYXkuZnJvbShjb250YWluZXIuY2hpbGRyZW4pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgdmFyIF9yZWN0JGxlZnQsIF9yZWN0JHRvcCwgX3JlY3QkcmlnaHQsIF9yZWN0JGJvdHRvbTtcbiAgICBpZiAoIWNsb3Nlc3QoY2hpbGQsIG9wdGlvbnMuZHJhZ2dhYmxlLCBjb250YWluZXIsIGZhbHNlKSB8fCBjaGlsZC5hbmltYXRlZCB8fCBjaGlsZCA9PT0gZ2hvc3RFbCkgcmV0dXJuO1xuICAgIHZhciBjaGlsZFJlY3QgPSBnZXRSZWN0KGNoaWxkKTtcbiAgICByZWN0LmxlZnQgPSBNYXRoLm1pbigoX3JlY3QkbGVmdCA9IHJlY3QubGVmdCkgIT09IG51bGwgJiYgX3JlY3QkbGVmdCAhPT0gdm9pZCAwID8gX3JlY3QkbGVmdCA6IEluZmluaXR5LCBjaGlsZFJlY3QubGVmdCk7XG4gICAgcmVjdC50b3AgPSBNYXRoLm1pbigoX3JlY3QkdG9wID0gcmVjdC50b3ApICE9PSBudWxsICYmIF9yZWN0JHRvcCAhPT0gdm9pZCAwID8gX3JlY3QkdG9wIDogSW5maW5pdHksIGNoaWxkUmVjdC50b3ApO1xuICAgIHJlY3QucmlnaHQgPSBNYXRoLm1heCgoX3JlY3QkcmlnaHQgPSByZWN0LnJpZ2h0KSAhPT0gbnVsbCAmJiBfcmVjdCRyaWdodCAhPT0gdm9pZCAwID8gX3JlY3QkcmlnaHQgOiAtSW5maW5pdHksIGNoaWxkUmVjdC5yaWdodCk7XG4gICAgcmVjdC5ib3R0b20gPSBNYXRoLm1heCgoX3JlY3QkYm90dG9tID0gcmVjdC5ib3R0b20pICE9PSBudWxsICYmIF9yZWN0JGJvdHRvbSAhPT0gdm9pZCAwID8gX3JlY3QkYm90dG9tIDogLUluZmluaXR5LCBjaGlsZFJlY3QuYm90dG9tKTtcbiAgfSk7XG4gIHJlY3Qud2lkdGggPSByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0O1xuICByZWN0LmhlaWdodCA9IHJlY3QuYm90dG9tIC0gcmVjdC50b3A7XG4gIHJlY3QueCA9IHJlY3QubGVmdDtcbiAgcmVjdC55ID0gcmVjdC50b3A7XG4gIHJldHVybiByZWN0O1xufVxudmFyIGV4cGFuZG8gPSAnU29ydGFibGUnICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbmZ1bmN0aW9uIEFuaW1hdGlvblN0YXRlTWFuYWdlcigpIHtcbiAgdmFyIGFuaW1hdGlvblN0YXRlcyA9IFtdLFxuICAgIGFuaW1hdGlvbkNhbGxiYWNrSWQ7XG4gIHJldHVybiB7XG4gICAgY2FwdHVyZUFuaW1hdGlvblN0YXRlOiBmdW5jdGlvbiBjYXB0dXJlQW5pbWF0aW9uU3RhdGUoKSB7XG4gICAgICBhbmltYXRpb25TdGF0ZXMgPSBbXTtcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLmFuaW1hdGlvbikgcmV0dXJuO1xuICAgICAgdmFyIGNoaWxkcmVuID0gW10uc2xpY2UuY2FsbCh0aGlzLmVsLmNoaWxkcmVuKTtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChjc3MoY2hpbGQsICdkaXNwbGF5JykgPT09ICdub25lJyB8fCBjaGlsZCA9PT0gU29ydGFibGUuZ2hvc3QpIHJldHVybjtcbiAgICAgICAgYW5pbWF0aW9uU3RhdGVzLnB1c2goe1xuICAgICAgICAgIHRhcmdldDogY2hpbGQsXG4gICAgICAgICAgcmVjdDogZ2V0UmVjdChjaGlsZClcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBmcm9tUmVjdCA9IF9vYmplY3RTcHJlYWQyKHt9LCBhbmltYXRpb25TdGF0ZXNbYW5pbWF0aW9uU3RhdGVzLmxlbmd0aCAtIDFdLnJlY3QpO1xuXG4gICAgICAgIC8vIElmIGFuaW1hdGluZzogY29tcGVuc2F0ZSBmb3IgY3VycmVudCBhbmltYXRpb25cbiAgICAgICAgaWYgKGNoaWxkLnRoaXNBbmltYXRpb25EdXJhdGlvbikge1xuICAgICAgICAgIHZhciBjaGlsZE1hdHJpeCA9IG1hdHJpeChjaGlsZCwgdHJ1ZSk7XG4gICAgICAgICAgaWYgKGNoaWxkTWF0cml4KSB7XG4gICAgICAgICAgICBmcm9tUmVjdC50b3AgLT0gY2hpbGRNYXRyaXguZjtcbiAgICAgICAgICAgIGZyb21SZWN0LmxlZnQgLT0gY2hpbGRNYXRyaXguZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGQuZnJvbVJlY3QgPSBmcm9tUmVjdDtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYWRkQW5pbWF0aW9uU3RhdGU6IGZ1bmN0aW9uIGFkZEFuaW1hdGlvblN0YXRlKHN0YXRlKSB7XG4gICAgICBhbmltYXRpb25TdGF0ZXMucHVzaChzdGF0ZSk7XG4gICAgfSxcbiAgICByZW1vdmVBbmltYXRpb25TdGF0ZTogZnVuY3Rpb24gcmVtb3ZlQW5pbWF0aW9uU3RhdGUodGFyZ2V0KSB7XG4gICAgICBhbmltYXRpb25TdGF0ZXMuc3BsaWNlKGluZGV4T2ZPYmplY3QoYW5pbWF0aW9uU3RhdGVzLCB7XG4gICAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgICB9KSwgMSk7XG4gICAgfSxcbiAgICBhbmltYXRlQWxsOiBmdW5jdGlvbiBhbmltYXRlQWxsKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuYW5pbWF0aW9uKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChhbmltYXRpb25DYWxsYmFja0lkKTtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGFuaW1hdGluZyA9IGZhbHNlLFxuICAgICAgICBhbmltYXRpb25UaW1lID0gMDtcbiAgICAgIGFuaW1hdGlvblN0YXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgdGltZSA9IDAsXG4gICAgICAgICAgdGFyZ2V0ID0gc3RhdGUudGFyZ2V0LFxuICAgICAgICAgIGZyb21SZWN0ID0gdGFyZ2V0LmZyb21SZWN0LFxuICAgICAgICAgIHRvUmVjdCA9IGdldFJlY3QodGFyZ2V0KSxcbiAgICAgICAgICBwcmV2RnJvbVJlY3QgPSB0YXJnZXQucHJldkZyb21SZWN0LFxuICAgICAgICAgIHByZXZUb1JlY3QgPSB0YXJnZXQucHJldlRvUmVjdCxcbiAgICAgICAgICBhbmltYXRpbmdSZWN0ID0gc3RhdGUucmVjdCxcbiAgICAgICAgICB0YXJnZXRNYXRyaXggPSBtYXRyaXgodGFyZ2V0LCB0cnVlKTtcbiAgICAgICAgaWYgKHRhcmdldE1hdHJpeCkge1xuICAgICAgICAgIC8vIENvbXBlbnNhdGUgZm9yIGN1cnJlbnQgYW5pbWF0aW9uXG4gICAgICAgICAgdG9SZWN0LnRvcCAtPSB0YXJnZXRNYXRyaXguZjtcbiAgICAgICAgICB0b1JlY3QubGVmdCAtPSB0YXJnZXRNYXRyaXguZTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQudG9SZWN0ID0gdG9SZWN0O1xuICAgICAgICBpZiAodGFyZ2V0LnRoaXNBbmltYXRpb25EdXJhdGlvbikge1xuICAgICAgICAgIC8vIENvdWxkIGFsc28gY2hlY2sgaWYgYW5pbWF0aW5nUmVjdCBpcyBiZXR3ZWVuIGZyb21SZWN0IGFuZCB0b1JlY3RcbiAgICAgICAgICBpZiAoaXNSZWN0RXF1YWwocHJldkZyb21SZWN0LCB0b1JlY3QpICYmICFpc1JlY3RFcXVhbChmcm9tUmVjdCwgdG9SZWN0KSAmJlxuICAgICAgICAgIC8vIE1ha2Ugc3VyZSBhbmltYXRpbmdSZWN0IGlzIG9uIGxpbmUgYmV0d2VlbiB0b1JlY3QgJiBmcm9tUmVjdFxuICAgICAgICAgIChhbmltYXRpbmdSZWN0LnRvcCAtIHRvUmVjdC50b3ApIC8gKGFuaW1hdGluZ1JlY3QubGVmdCAtIHRvUmVjdC5sZWZ0KSA9PT0gKGZyb21SZWN0LnRvcCAtIHRvUmVjdC50b3ApIC8gKGZyb21SZWN0LmxlZnQgLSB0b1JlY3QubGVmdCkpIHtcbiAgICAgICAgICAgIC8vIElmIHJldHVybmluZyB0byBzYW1lIHBsYWNlIGFzIHN0YXJ0ZWQgZnJvbSBhbmltYXRpb24gYW5kIG9uIHNhbWUgYXhpc1xuICAgICAgICAgICAgdGltZSA9IGNhbGN1bGF0ZVJlYWxUaW1lKGFuaW1hdGluZ1JlY3QsIHByZXZGcm9tUmVjdCwgcHJldlRvUmVjdCwgX3RoaXMub3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgZnJvbVJlY3QgIT0gdG9SZWN0OiBhbmltYXRlXG4gICAgICAgIGlmICghaXNSZWN0RXF1YWwodG9SZWN0LCBmcm9tUmVjdCkpIHtcbiAgICAgICAgICB0YXJnZXQucHJldkZyb21SZWN0ID0gZnJvbVJlY3Q7XG4gICAgICAgICAgdGFyZ2V0LnByZXZUb1JlY3QgPSB0b1JlY3Q7XG4gICAgICAgICAgaWYgKCF0aW1lKSB7XG4gICAgICAgICAgICB0aW1lID0gX3RoaXMub3B0aW9ucy5hbmltYXRpb247XG4gICAgICAgICAgfVxuICAgICAgICAgIF90aGlzLmFuaW1hdGUodGFyZ2V0LCBhbmltYXRpbmdSZWN0LCB0b1JlY3QsIHRpbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lKSB7XG4gICAgICAgICAgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICBhbmltYXRpb25UaW1lID0gTWF0aC5tYXgoYW5pbWF0aW9uVGltZSwgdGltZSk7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRhcmdldC5hbmltYXRpb25SZXNldFRpbWVyKTtcbiAgICAgICAgICB0YXJnZXQuYW5pbWF0aW9uUmVzZXRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGFyZ2V0LmFuaW1hdGlvblRpbWUgPSAwO1xuICAgICAgICAgICAgdGFyZ2V0LnByZXZGcm9tUmVjdCA9IG51bGw7XG4gICAgICAgICAgICB0YXJnZXQuZnJvbVJlY3QgPSBudWxsO1xuICAgICAgICAgICAgdGFyZ2V0LnByZXZUb1JlY3QgPSBudWxsO1xuICAgICAgICAgICAgdGFyZ2V0LnRoaXNBbmltYXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICAgICAgfSwgdGltZSk7XG4gICAgICAgICAgdGFyZ2V0LnRoaXNBbmltYXRpb25EdXJhdGlvbiA9IHRpbWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY2xlYXJUaW1lb3V0KGFuaW1hdGlvbkNhbGxiYWNrSWQpO1xuICAgICAgaWYgKCFhbmltYXRpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuaW1hdGlvbkNhbGxiYWNrSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpO1xuICAgICAgICB9LCBhbmltYXRpb25UaW1lKTtcbiAgICAgIH1cbiAgICAgIGFuaW1hdGlvblN0YXRlcyA9IFtdO1xuICAgIH0sXG4gICAgYW5pbWF0ZTogZnVuY3Rpb24gYW5pbWF0ZSh0YXJnZXQsIGN1cnJlbnRSZWN0LCB0b1JlY3QsIGR1cmF0aW9uKSB7XG4gICAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zaXRpb24nLCAnJyk7XG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAnJyk7XG4gICAgICAgIHZhciBlbE1hdHJpeCA9IG1hdHJpeCh0aGlzLmVsKSxcbiAgICAgICAgICBzY2FsZVggPSBlbE1hdHJpeCAmJiBlbE1hdHJpeC5hLFxuICAgICAgICAgIHNjYWxlWSA9IGVsTWF0cml4ICYmIGVsTWF0cml4LmQsXG4gICAgICAgICAgdHJhbnNsYXRlWCA9IChjdXJyZW50UmVjdC5sZWZ0IC0gdG9SZWN0LmxlZnQpIC8gKHNjYWxlWCB8fCAxKSxcbiAgICAgICAgICB0cmFuc2xhdGVZID0gKGN1cnJlbnRSZWN0LnRvcCAtIHRvUmVjdC50b3ApIC8gKHNjYWxlWSB8fCAxKTtcbiAgICAgICAgdGFyZ2V0LmFuaW1hdGluZ1ggPSAhIXRyYW5zbGF0ZVg7XG4gICAgICAgIHRhcmdldC5hbmltYXRpbmdZID0gISF0cmFuc2xhdGVZO1xuICAgICAgICBjc3ModGFyZ2V0LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKCcgKyB0cmFuc2xhdGVYICsgJ3B4LCcgKyB0cmFuc2xhdGVZICsgJ3B4LDApJyk7XG4gICAgICAgIHRoaXMuZm9yUmVwYWludER1bW15ID0gcmVwYWludCh0YXJnZXQpOyAvLyByZXBhaW50XG5cbiAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zaXRpb24nLCAndHJhbnNmb3JtICcgKyBkdXJhdGlvbiArICdtcycgKyAodGhpcy5vcHRpb25zLmVhc2luZyA/ICcgJyArIHRoaXMub3B0aW9ucy5lYXNpbmcgOiAnJykpO1xuICAgICAgICBjc3ModGFyZ2V0LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKDAsMCwwKScpO1xuICAgICAgICB0eXBlb2YgdGFyZ2V0LmFuaW1hdGVkID09PSAnbnVtYmVyJyAmJiBjbGVhclRpbWVvdXQodGFyZ2V0LmFuaW1hdGVkKTtcbiAgICAgICAgdGFyZ2V0LmFuaW1hdGVkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zaXRpb24nLCAnJyk7XG4gICAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zZm9ybScsICcnKTtcbiAgICAgICAgICB0YXJnZXQuYW5pbWF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICB0YXJnZXQuYW5pbWF0aW5nWCA9IGZhbHNlO1xuICAgICAgICAgIHRhcmdldC5hbmltYXRpbmdZID0gZmFsc2U7XG4gICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiByZXBhaW50KHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0Lm9mZnNldFdpZHRoO1xufVxuZnVuY3Rpb24gY2FsY3VsYXRlUmVhbFRpbWUoYW5pbWF0aW5nUmVjdCwgZnJvbVJlY3QsIHRvUmVjdCwgb3B0aW9ucykge1xuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGZyb21SZWN0LnRvcCAtIGFuaW1hdGluZ1JlY3QudG9wLCAyKSArIE1hdGgucG93KGZyb21SZWN0LmxlZnQgLSBhbmltYXRpbmdSZWN0LmxlZnQsIDIpKSAvIE1hdGguc3FydChNYXRoLnBvdyhmcm9tUmVjdC50b3AgLSB0b1JlY3QudG9wLCAyKSArIE1hdGgucG93KGZyb21SZWN0LmxlZnQgLSB0b1JlY3QubGVmdCwgMikpICogb3B0aW9ucy5hbmltYXRpb247XG59XG5cbnZhciBwbHVnaW5zID0gW107XG52YXIgZGVmYXVsdHMgPSB7XG4gIGluaXRpYWxpemVCeURlZmF1bHQ6IHRydWVcbn07XG52YXIgUGx1Z2luTWFuYWdlciA9IHtcbiAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KHBsdWdpbikge1xuICAgIC8vIFNldCBkZWZhdWx0IHN0YXRpYyBwcm9wZXJ0aWVzXG4gICAgZm9yICh2YXIgb3B0aW9uIGluIGRlZmF1bHRzKSB7XG4gICAgICBpZiAoZGVmYXVsdHMuaGFzT3duUHJvcGVydHkob3B0aW9uKSAmJiAhKG9wdGlvbiBpbiBwbHVnaW4pKSB7XG4gICAgICAgIHBsdWdpbltvcHRpb25dID0gZGVmYXVsdHNbb3B0aW9uXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgICBpZiAocC5wbHVnaW5OYW1lID09PSBwbHVnaW4ucGx1Z2luTmFtZSkge1xuICAgICAgICB0aHJvdyBcIlNvcnRhYmxlOiBDYW5ub3QgbW91bnQgcGx1Z2luIFwiLmNvbmNhdChwbHVnaW4ucGx1Z2luTmFtZSwgXCIgbW9yZSB0aGFuIG9uY2VcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gIH0sXG4gIHBsdWdpbkV2ZW50OiBmdW5jdGlvbiBwbHVnaW5FdmVudChldmVudE5hbWUsIHNvcnRhYmxlLCBldnQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMuZXZlbnRDYW5jZWxlZCA9IGZhbHNlO1xuICAgIGV2dC5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5ldmVudENhbmNlbGVkID0gdHJ1ZTtcbiAgICB9O1xuICAgIHZhciBldmVudE5hbWVHbG9iYWwgPSBldmVudE5hbWUgKyAnR2xvYmFsJztcbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgaWYgKCFzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV0pIHJldHVybjtcbiAgICAgIC8vIEZpcmUgZ2xvYmFsIGV2ZW50cyBpZiBpdCBleGlzdHMgaW4gdGhpcyBzb3J0YWJsZVxuICAgICAgaWYgKHNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXVtldmVudE5hbWVHbG9iYWxdKSB7XG4gICAgICAgIHNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXVtldmVudE5hbWVHbG9iYWxdKF9vYmplY3RTcHJlYWQyKHtcbiAgICAgICAgICBzb3J0YWJsZTogc29ydGFibGVcbiAgICAgICAgfSwgZXZ0KSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgZmlyZSBwbHVnaW4gZXZlbnQgaWYgcGx1Z2luIGlzIGVuYWJsZWQgaW4gdGhpcyBzb3J0YWJsZSxcbiAgICAgIC8vIGFuZCBwbHVnaW4gaGFzIGV2ZW50IGRlZmluZWRcbiAgICAgIGlmIChzb3J0YWJsZS5vcHRpb25zW3BsdWdpbi5wbHVnaW5OYW1lXSAmJiBzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV1bZXZlbnROYW1lXSkge1xuICAgICAgICBzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV1bZXZlbnROYW1lXShfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlXG4gICAgICAgIH0sIGV2dCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBpbml0aWFsaXplUGx1Z2luczogZnVuY3Rpb24gaW5pdGlhbGl6ZVBsdWdpbnMoc29ydGFibGUsIGVsLCBkZWZhdWx0cywgb3B0aW9ucykge1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICB2YXIgcGx1Z2luTmFtZSA9IHBsdWdpbi5wbHVnaW5OYW1lO1xuICAgICAgaWYgKCFzb3J0YWJsZS5vcHRpb25zW3BsdWdpbk5hbWVdICYmICFwbHVnaW4uaW5pdGlhbGl6ZUJ5RGVmYXVsdCkgcmV0dXJuO1xuICAgICAgdmFyIGluaXRpYWxpemVkID0gbmV3IHBsdWdpbihzb3J0YWJsZSwgZWwsIHNvcnRhYmxlLm9wdGlvbnMpO1xuICAgICAgaW5pdGlhbGl6ZWQuc29ydGFibGUgPSBzb3J0YWJsZTtcbiAgICAgIGluaXRpYWxpemVkLm9wdGlvbnMgPSBzb3J0YWJsZS5vcHRpb25zO1xuICAgICAgc29ydGFibGVbcGx1Z2luTmFtZV0gPSBpbml0aWFsaXplZDtcblxuICAgICAgLy8gQWRkIGRlZmF1bHQgb3B0aW9ucyBmcm9tIHBsdWdpblxuICAgICAgX2V4dGVuZHMoZGVmYXVsdHMsIGluaXRpYWxpemVkLmRlZmF1bHRzKTtcbiAgICB9KTtcbiAgICBmb3IgKHZhciBvcHRpb24gaW4gc29ydGFibGUub3B0aW9ucykge1xuICAgICAgaWYgKCFzb3J0YWJsZS5vcHRpb25zLmhhc093blByb3BlcnR5KG9wdGlvbikpIGNvbnRpbnVlO1xuICAgICAgdmFyIG1vZGlmaWVkID0gdGhpcy5tb2RpZnlPcHRpb24oc29ydGFibGUsIG9wdGlvbiwgc29ydGFibGUub3B0aW9uc1tvcHRpb25dKTtcbiAgICAgIGlmICh0eXBlb2YgbW9kaWZpZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNvcnRhYmxlLm9wdGlvbnNbb3B0aW9uXSA9IG1vZGlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZ2V0RXZlbnRQcm9wZXJ0aWVzOiBmdW5jdGlvbiBnZXRFdmVudFByb3BlcnRpZXMobmFtZSwgc29ydGFibGUpIHtcbiAgICB2YXIgZXZlbnRQcm9wZXJ0aWVzID0ge307XG4gICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIGlmICh0eXBlb2YgcGx1Z2luLmV2ZW50UHJvcGVydGllcyAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuICAgICAgX2V4dGVuZHMoZXZlbnRQcm9wZXJ0aWVzLCBwbHVnaW4uZXZlbnRQcm9wZXJ0aWVzLmNhbGwoc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdLCBuYW1lKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGV2ZW50UHJvcGVydGllcztcbiAgfSxcbiAgbW9kaWZ5T3B0aW9uOiBmdW5jdGlvbiBtb2RpZnlPcHRpb24oc29ydGFibGUsIG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIG1vZGlmaWVkVmFsdWU7XG4gICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIC8vIFBsdWdpbiBtdXN0IGV4aXN0IG9uIHRoZSBTb3J0YWJsZVxuICAgICAgaWYgKCFzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV0pIHJldHVybjtcblxuICAgICAgLy8gSWYgc3RhdGljIG9wdGlvbiBsaXN0ZW5lciBleGlzdHMgZm9yIHRoaXMgb3B0aW9uLCBjYWxsIGluIHRoZSBjb250ZXh0IG9mIHRoZSBTb3J0YWJsZSdzIGluc3RhbmNlIG9mIHRoaXMgcGx1Z2luXG4gICAgICBpZiAocGx1Z2luLm9wdGlvbkxpc3RlbmVycyAmJiB0eXBlb2YgcGx1Z2luLm9wdGlvbkxpc3RlbmVyc1tuYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBtb2RpZmllZFZhbHVlID0gcGx1Z2luLm9wdGlvbkxpc3RlbmVyc1tuYW1lXS5jYWxsKHNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBtb2RpZmllZFZhbHVlO1xuICB9XG59O1xuXG5mdW5jdGlvbiBkaXNwYXRjaEV2ZW50KF9yZWYpIHtcbiAgdmFyIHNvcnRhYmxlID0gX3JlZi5zb3J0YWJsZSxcbiAgICByb290RWwgPSBfcmVmLnJvb3RFbCxcbiAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgIHRhcmdldEVsID0gX3JlZi50YXJnZXRFbCxcbiAgICBjbG9uZUVsID0gX3JlZi5jbG9uZUVsLFxuICAgIHRvRWwgPSBfcmVmLnRvRWwsXG4gICAgZnJvbUVsID0gX3JlZi5mcm9tRWwsXG4gICAgb2xkSW5kZXggPSBfcmVmLm9sZEluZGV4LFxuICAgIG5ld0luZGV4ID0gX3JlZi5uZXdJbmRleCxcbiAgICBvbGREcmFnZ2FibGVJbmRleCA9IF9yZWYub2xkRHJhZ2dhYmxlSW5kZXgsXG4gICAgbmV3RHJhZ2dhYmxlSW5kZXggPSBfcmVmLm5ld0RyYWdnYWJsZUluZGV4LFxuICAgIG9yaWdpbmFsRXZlbnQgPSBfcmVmLm9yaWdpbmFsRXZlbnQsXG4gICAgcHV0U29ydGFibGUgPSBfcmVmLnB1dFNvcnRhYmxlLFxuICAgIGV4dHJhRXZlbnRQcm9wZXJ0aWVzID0gX3JlZi5leHRyYUV2ZW50UHJvcGVydGllcztcbiAgc29ydGFibGUgPSBzb3J0YWJsZSB8fCByb290RWwgJiYgcm9vdEVsW2V4cGFuZG9dO1xuICBpZiAoIXNvcnRhYmxlKSByZXR1cm47XG4gIHZhciBldnQsXG4gICAgb3B0aW9ucyA9IHNvcnRhYmxlLm9wdGlvbnMsXG4gICAgb25OYW1lID0gJ29uJyArIG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnN1YnN0cigxKTtcbiAgLy8gU3VwcG9ydCBmb3IgbmV3IEN1c3RvbUV2ZW50IGZlYXR1cmVcbiAgaWYgKHdpbmRvdy5DdXN0b21FdmVudCAmJiAhSUUxMU9yTGVzcyAmJiAhRWRnZSkge1xuICAgIGV2dCA9IG5ldyBDdXN0b21FdmVudChuYW1lLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGV2dC5pbml0RXZlbnQobmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gIH1cbiAgZXZ0LnRvID0gdG9FbCB8fCByb290RWw7XG4gIGV2dC5mcm9tID0gZnJvbUVsIHx8IHJvb3RFbDtcbiAgZXZ0Lml0ZW0gPSB0YXJnZXRFbCB8fCByb290RWw7XG4gIGV2dC5jbG9uZSA9IGNsb25lRWw7XG4gIGV2dC5vbGRJbmRleCA9IG9sZEluZGV4O1xuICBldnQubmV3SW5kZXggPSBuZXdJbmRleDtcbiAgZXZ0Lm9sZERyYWdnYWJsZUluZGV4ID0gb2xkRHJhZ2dhYmxlSW5kZXg7XG4gIGV2dC5uZXdEcmFnZ2FibGVJbmRleCA9IG5ld0RyYWdnYWJsZUluZGV4O1xuICBldnQub3JpZ2luYWxFdmVudCA9IG9yaWdpbmFsRXZlbnQ7XG4gIGV2dC5wdWxsTW9kZSA9IHB1dFNvcnRhYmxlID8gcHV0U29ydGFibGUubGFzdFB1dE1vZGUgOiB1bmRlZmluZWQ7XG4gIHZhciBhbGxFdmVudFByb3BlcnRpZXMgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgZXh0cmFFdmVudFByb3BlcnRpZXMpLCBQbHVnaW5NYW5hZ2VyLmdldEV2ZW50UHJvcGVydGllcyhuYW1lLCBzb3J0YWJsZSkpO1xuICBmb3IgKHZhciBvcHRpb24gaW4gYWxsRXZlbnRQcm9wZXJ0aWVzKSB7XG4gICAgZXZ0W29wdGlvbl0gPSBhbGxFdmVudFByb3BlcnRpZXNbb3B0aW9uXTtcbiAgfVxuICBpZiAocm9vdEVsKSB7XG4gICAgcm9vdEVsLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfVxuICBpZiAob3B0aW9uc1tvbk5hbWVdKSB7XG4gICAgb3B0aW9uc1tvbk5hbWVdLmNhbGwoc29ydGFibGUsIGV2dCk7XG4gIH1cbn1cblxudmFyIF9leGNsdWRlZCA9IFtcImV2dFwiXTtcbnZhciBwbHVnaW5FdmVudCA9IGZ1bmN0aW9uIHBsdWdpbkV2ZW50KGV2ZW50TmFtZSwgc29ydGFibGUpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9LFxuICAgIG9yaWdpbmFsRXZlbnQgPSBfcmVmLmV2dCxcbiAgICBkYXRhID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIF9leGNsdWRlZCk7XG4gIFBsdWdpbk1hbmFnZXIucGx1Z2luRXZlbnQuYmluZChTb3J0YWJsZSkoZXZlbnROYW1lLCBzb3J0YWJsZSwgX29iamVjdFNwcmVhZDIoe1xuICAgIGRyYWdFbDogZHJhZ0VsLFxuICAgIHBhcmVudEVsOiBwYXJlbnRFbCxcbiAgICBnaG9zdEVsOiBnaG9zdEVsLFxuICAgIHJvb3RFbDogcm9vdEVsLFxuICAgIG5leHRFbDogbmV4dEVsLFxuICAgIGxhc3REb3duRWw6IGxhc3REb3duRWwsXG4gICAgY2xvbmVFbDogY2xvbmVFbCxcbiAgICBjbG9uZUhpZGRlbjogY2xvbmVIaWRkZW4sXG4gICAgZHJhZ1N0YXJ0ZWQ6IG1vdmVkLFxuICAgIHB1dFNvcnRhYmxlOiBwdXRTb3J0YWJsZSxcbiAgICBhY3RpdmVTb3J0YWJsZTogU29ydGFibGUuYWN0aXZlLFxuICAgIG9yaWdpbmFsRXZlbnQ6IG9yaWdpbmFsRXZlbnQsXG4gICAgb2xkSW5kZXg6IG9sZEluZGV4LFxuICAgIG9sZERyYWdnYWJsZUluZGV4OiBvbGREcmFnZ2FibGVJbmRleCxcbiAgICBuZXdJbmRleDogbmV3SW5kZXgsXG4gICAgbmV3RHJhZ2dhYmxlSW5kZXg6IG5ld0RyYWdnYWJsZUluZGV4LFxuICAgIGhpZGVHaG9zdEZvclRhcmdldDogX2hpZGVHaG9zdEZvclRhcmdldCxcbiAgICB1bmhpZGVHaG9zdEZvclRhcmdldDogX3VuaGlkZUdob3N0Rm9yVGFyZ2V0LFxuICAgIGNsb25lTm93SGlkZGVuOiBmdW5jdGlvbiBjbG9uZU5vd0hpZGRlbigpIHtcbiAgICAgIGNsb25lSGlkZGVuID0gdHJ1ZTtcbiAgICB9LFxuICAgIGNsb25lTm93U2hvd246IGZ1bmN0aW9uIGNsb25lTm93U2hvd24oKSB7XG4gICAgICBjbG9uZUhpZGRlbiA9IGZhbHNlO1xuICAgIH0sXG4gICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50OiBmdW5jdGlvbiBkaXNwYXRjaFNvcnRhYmxlRXZlbnQobmFtZSkge1xuICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICBzb3J0YWJsZTogc29ydGFibGUsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IG9yaWdpbmFsRXZlbnRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgZGF0YSkpO1xufTtcbmZ1bmN0aW9uIF9kaXNwYXRjaEV2ZW50KGluZm8pIHtcbiAgZGlzcGF0Y2hFdmVudChfb2JqZWN0U3ByZWFkMih7XG4gICAgcHV0U29ydGFibGU6IHB1dFNvcnRhYmxlLFxuICAgIGNsb25lRWw6IGNsb25lRWwsXG4gICAgdGFyZ2V0RWw6IGRyYWdFbCxcbiAgICByb290RWw6IHJvb3RFbCxcbiAgICBvbGRJbmRleDogb2xkSW5kZXgsXG4gICAgb2xkRHJhZ2dhYmxlSW5kZXg6IG9sZERyYWdnYWJsZUluZGV4LFxuICAgIG5ld0luZGV4OiBuZXdJbmRleCxcbiAgICBuZXdEcmFnZ2FibGVJbmRleDogbmV3RHJhZ2dhYmxlSW5kZXhcbiAgfSwgaW5mbykpO1xufVxudmFyIGRyYWdFbCxcbiAgcGFyZW50RWwsXG4gIGdob3N0RWwsXG4gIHJvb3RFbCxcbiAgbmV4dEVsLFxuICBsYXN0RG93bkVsLFxuICBjbG9uZUVsLFxuICBjbG9uZUhpZGRlbixcbiAgb2xkSW5kZXgsXG4gIG5ld0luZGV4LFxuICBvbGREcmFnZ2FibGVJbmRleCxcbiAgbmV3RHJhZ2dhYmxlSW5kZXgsXG4gIGFjdGl2ZUdyb3VwLFxuICBwdXRTb3J0YWJsZSxcbiAgYXdhaXRpbmdEcmFnU3RhcnRlZCA9IGZhbHNlLFxuICBpZ25vcmVOZXh0Q2xpY2sgPSBmYWxzZSxcbiAgc29ydGFibGVzID0gW10sXG4gIHRhcEV2dCxcbiAgdG91Y2hFdnQsXG4gIGxhc3REeCxcbiAgbGFzdER5LFxuICB0YXBEaXN0YW5jZUxlZnQsXG4gIHRhcERpc3RhbmNlVG9wLFxuICBtb3ZlZCxcbiAgbGFzdFRhcmdldCxcbiAgbGFzdERpcmVjdGlvbixcbiAgcGFzdEZpcnN0SW52ZXJ0VGhyZXNoID0gZmFsc2UsXG4gIGlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQgPSBmYWxzZSxcbiAgdGFyZ2V0TW92ZURpc3RhbmNlLFxuICAvLyBGb3IgcG9zaXRpb25pbmcgZ2hvc3QgYWJzb2x1dGVseVxuICBnaG9zdFJlbGF0aXZlUGFyZW50LFxuICBnaG9zdFJlbGF0aXZlUGFyZW50SW5pdGlhbFNjcm9sbCA9IFtdLFxuICAvLyAobGVmdCwgdG9wKVxuXG4gIF9zaWxlbnQgPSBmYWxzZSxcbiAgc2F2ZWRJbnB1dENoZWNrZWQgPSBbXTtcblxuLyoqIEBjb25zdCAqL1xudmFyIGRvY3VtZW50RXhpc3RzID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyxcbiAgUG9zaXRpb25HaG9zdEFic29sdXRlbHkgPSBJT1MsXG4gIENTU0Zsb2F0UHJvcGVydHkgPSBFZGdlIHx8IElFMTFPckxlc3MgPyAnY3NzRmxvYXQnIDogJ2Zsb2F0JyxcbiAgLy8gVGhpcyB3aWxsIG5vdCBwYXNzIGZvciBJRTksIGJlY2F1c2UgSUU5IERuRCBvbmx5IHdvcmtzIG9uIGFuY2hvcnNcbiAgc3VwcG9ydERyYWdnYWJsZSA9IGRvY3VtZW50RXhpc3RzICYmICFDaHJvbWVGb3JBbmRyb2lkICYmICFJT1MgJiYgJ2RyYWdnYWJsZScgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gIHN1cHBvcnRDc3NQb2ludGVyRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghZG9jdW1lbnRFeGlzdHMpIHJldHVybjtcbiAgICAvLyBmYWxzZSB3aGVuIDw9IElFMTFcbiAgICBpZiAoSUUxMU9yTGVzcykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd4Jyk7XG4gICAgZWwuc3R5bGUuY3NzVGV4dCA9ICdwb2ludGVyLWV2ZW50czphdXRvJztcbiAgICByZXR1cm4gZWwuc3R5bGUucG9pbnRlckV2ZW50cyA9PT0gJ2F1dG8nO1xuICB9KCksXG4gIF9kZXRlY3REaXJlY3Rpb24gPSBmdW5jdGlvbiBfZGV0ZWN0RGlyZWN0aW9uKGVsLCBvcHRpb25zKSB7XG4gICAgdmFyIGVsQ1NTID0gY3NzKGVsKSxcbiAgICAgIGVsV2lkdGggPSBwYXJzZUludChlbENTUy53aWR0aCkgLSBwYXJzZUludChlbENTUy5wYWRkaW5nTGVmdCkgLSBwYXJzZUludChlbENTUy5wYWRkaW5nUmlnaHQpIC0gcGFyc2VJbnQoZWxDU1MuYm9yZGVyTGVmdFdpZHRoKSAtIHBhcnNlSW50KGVsQ1NTLmJvcmRlclJpZ2h0V2lkdGgpLFxuICAgICAgY2hpbGQxID0gZ2V0Q2hpbGQoZWwsIDAsIG9wdGlvbnMpLFxuICAgICAgY2hpbGQyID0gZ2V0Q2hpbGQoZWwsIDEsIG9wdGlvbnMpLFxuICAgICAgZmlyc3RDaGlsZENTUyA9IGNoaWxkMSAmJiBjc3MoY2hpbGQxKSxcbiAgICAgIHNlY29uZENoaWxkQ1NTID0gY2hpbGQyICYmIGNzcyhjaGlsZDIpLFxuICAgICAgZmlyc3RDaGlsZFdpZHRoID0gZmlyc3RDaGlsZENTUyAmJiBwYXJzZUludChmaXJzdENoaWxkQ1NTLm1hcmdpbkxlZnQpICsgcGFyc2VJbnQoZmlyc3RDaGlsZENTUy5tYXJnaW5SaWdodCkgKyBnZXRSZWN0KGNoaWxkMSkud2lkdGgsXG4gICAgICBzZWNvbmRDaGlsZFdpZHRoID0gc2Vjb25kQ2hpbGRDU1MgJiYgcGFyc2VJbnQoc2Vjb25kQ2hpbGRDU1MubWFyZ2luTGVmdCkgKyBwYXJzZUludChzZWNvbmRDaGlsZENTUy5tYXJnaW5SaWdodCkgKyBnZXRSZWN0KGNoaWxkMikud2lkdGg7XG4gICAgaWYgKGVsQ1NTLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgcmV0dXJuIGVsQ1NTLmZsZXhEaXJlY3Rpb24gPT09ICdjb2x1bW4nIHx8IGVsQ1NTLmZsZXhEaXJlY3Rpb24gPT09ICdjb2x1bW4tcmV2ZXJzZScgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICAgIH1cbiAgICBpZiAoZWxDU1MuZGlzcGxheSA9PT0gJ2dyaWQnKSB7XG4gICAgICByZXR1cm4gZWxDU1MuZ3JpZFRlbXBsYXRlQ29sdW1ucy5zcGxpdCgnICcpLmxlbmd0aCA8PSAxID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICB9XG4gICAgaWYgKGNoaWxkMSAmJiBmaXJzdENoaWxkQ1NTW1wiZmxvYXRcIl0gJiYgZmlyc3RDaGlsZENTU1tcImZsb2F0XCJdICE9PSAnbm9uZScpIHtcbiAgICAgIHZhciB0b3VjaGluZ1NpZGVDaGlsZDIgPSBmaXJzdENoaWxkQ1NTW1wiZmxvYXRcIl0gPT09ICdsZWZ0JyA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgICByZXR1cm4gY2hpbGQyICYmIChzZWNvbmRDaGlsZENTUy5jbGVhciA9PT0gJ2JvdGgnIHx8IHNlY29uZENoaWxkQ1NTLmNsZWFyID09PSB0b3VjaGluZ1NpZGVDaGlsZDIpID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkMSAmJiAoZmlyc3RDaGlsZENTUy5kaXNwbGF5ID09PSAnYmxvY2snIHx8IGZpcnN0Q2hpbGRDU1MuZGlzcGxheSA9PT0gJ2ZsZXgnIHx8IGZpcnN0Q2hpbGRDU1MuZGlzcGxheSA9PT0gJ3RhYmxlJyB8fCBmaXJzdENoaWxkQ1NTLmRpc3BsYXkgPT09ICdncmlkJyB8fCBmaXJzdENoaWxkV2lkdGggPj0gZWxXaWR0aCAmJiBlbENTU1tDU1NGbG9hdFByb3BlcnR5XSA9PT0gJ25vbmUnIHx8IGNoaWxkMiAmJiBlbENTU1tDU1NGbG9hdFByb3BlcnR5XSA9PT0gJ25vbmUnICYmIGZpcnN0Q2hpbGRXaWR0aCArIHNlY29uZENoaWxkV2lkdGggPiBlbFdpZHRoKSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gIH0sXG4gIF9kcmFnRWxJblJvd0NvbHVtbiA9IGZ1bmN0aW9uIF9kcmFnRWxJblJvd0NvbHVtbihkcmFnUmVjdCwgdGFyZ2V0UmVjdCwgdmVydGljYWwpIHtcbiAgICB2YXIgZHJhZ0VsUzFPcHAgPSB2ZXJ0aWNhbCA/IGRyYWdSZWN0LmxlZnQgOiBkcmFnUmVjdC50b3AsXG4gICAgICBkcmFnRWxTMk9wcCA9IHZlcnRpY2FsID8gZHJhZ1JlY3QucmlnaHQgOiBkcmFnUmVjdC5ib3R0b20sXG4gICAgICBkcmFnRWxPcHBMZW5ndGggPSB2ZXJ0aWNhbCA/IGRyYWdSZWN0LndpZHRoIDogZHJhZ1JlY3QuaGVpZ2h0LFxuICAgICAgdGFyZ2V0UzFPcHAgPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QubGVmdCA6IHRhcmdldFJlY3QudG9wLFxuICAgICAgdGFyZ2V0UzJPcHAgPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QucmlnaHQgOiB0YXJnZXRSZWN0LmJvdHRvbSxcbiAgICAgIHRhcmdldE9wcExlbmd0aCA9IHZlcnRpY2FsID8gdGFyZ2V0UmVjdC53aWR0aCA6IHRhcmdldFJlY3QuaGVpZ2h0O1xuICAgIHJldHVybiBkcmFnRWxTMU9wcCA9PT0gdGFyZ2V0UzFPcHAgfHwgZHJhZ0VsUzJPcHAgPT09IHRhcmdldFMyT3BwIHx8IGRyYWdFbFMxT3BwICsgZHJhZ0VsT3BwTGVuZ3RoIC8gMiA9PT0gdGFyZ2V0UzFPcHAgKyB0YXJnZXRPcHBMZW5ndGggLyAyO1xuICB9LFxuICAvKipcclxuICAgKiBEZXRlY3RzIGZpcnN0IG5lYXJlc3QgZW1wdHkgc29ydGFibGUgdG8gWCBhbmQgWSBwb3NpdGlvbiB1c2luZyBlbXB0eUluc2VydFRocmVzaG9sZC5cclxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHggICAgICBYIHBvc2l0aW9uXHJcbiAgICogQHBhcmFtICB7TnVtYmVyfSB5ICAgICAgWSBwb3NpdGlvblxyXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAgIEVsZW1lbnQgb2YgdGhlIGZpcnN0IGZvdW5kIG5lYXJlc3QgU29ydGFibGVcclxuICAgKi9cbiAgX2RldGVjdE5lYXJlc3RFbXB0eVNvcnRhYmxlID0gZnVuY3Rpb24gX2RldGVjdE5lYXJlc3RFbXB0eVNvcnRhYmxlKHgsIHkpIHtcbiAgICB2YXIgcmV0O1xuICAgIHNvcnRhYmxlcy5zb21lKGZ1bmN0aW9uIChzb3J0YWJsZSkge1xuICAgICAgdmFyIHRocmVzaG9sZCA9IHNvcnRhYmxlW2V4cGFuZG9dLm9wdGlvbnMuZW1wdHlJbnNlcnRUaHJlc2hvbGQ7XG4gICAgICBpZiAoIXRocmVzaG9sZCB8fCBsYXN0Q2hpbGQoc29ydGFibGUpKSByZXR1cm47XG4gICAgICB2YXIgcmVjdCA9IGdldFJlY3Qoc29ydGFibGUpLFxuICAgICAgICBpbnNpZGVIb3Jpem9udGFsbHkgPSB4ID49IHJlY3QubGVmdCAtIHRocmVzaG9sZCAmJiB4IDw9IHJlY3QucmlnaHQgKyB0aHJlc2hvbGQsXG4gICAgICAgIGluc2lkZVZlcnRpY2FsbHkgPSB5ID49IHJlY3QudG9wIC0gdGhyZXNob2xkICYmIHkgPD0gcmVjdC5ib3R0b20gKyB0aHJlc2hvbGQ7XG4gICAgICBpZiAoaW5zaWRlSG9yaXpvbnRhbGx5ICYmIGluc2lkZVZlcnRpY2FsbHkpIHtcbiAgICAgICAgcmV0dXJuIHJldCA9IHNvcnRhYmxlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH0sXG4gIF9wcmVwYXJlR3JvdXAgPSBmdW5jdGlvbiBfcHJlcGFyZUdyb3VwKG9wdGlvbnMpIHtcbiAgICBmdW5jdGlvbiB0b0ZuKHZhbHVlLCBwdWxsKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHRvLCBmcm9tLCBkcmFnRWwsIGV2dCkge1xuICAgICAgICB2YXIgc2FtZUdyb3VwID0gdG8ub3B0aW9ucy5ncm91cC5uYW1lICYmIGZyb20ub3B0aW9ucy5ncm91cC5uYW1lICYmIHRvLm9wdGlvbnMuZ3JvdXAubmFtZSA9PT0gZnJvbS5vcHRpb25zLmdyb3VwLm5hbWU7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsICYmIChwdWxsIHx8IHNhbWVHcm91cCkpIHtcbiAgICAgICAgICAvLyBEZWZhdWx0IHB1bGwgdmFsdWVcbiAgICAgICAgICAvLyBEZWZhdWx0IHB1bGwgYW5kIHB1dCB2YWx1ZSBpZiBzYW1lIGdyb3VwXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAocHVsbCAmJiB2YWx1ZSA9PT0gJ2Nsb25lJykge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gdG9Gbih2YWx1ZSh0bywgZnJvbSwgZHJhZ0VsLCBldnQpLCBwdWxsKSh0bywgZnJvbSwgZHJhZ0VsLCBldnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBvdGhlckdyb3VwID0gKHB1bGwgPyB0byA6IGZyb20pLm9wdGlvbnMuZ3JvdXAubmFtZTtcbiAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IHRydWUgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSA9PT0gb3RoZXJHcm91cCB8fCB2YWx1ZS5qb2luICYmIHZhbHVlLmluZGV4T2Yob3RoZXJHcm91cCkgPiAtMTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGdyb3VwID0ge307XG4gICAgdmFyIG9yaWdpbmFsR3JvdXAgPSBvcHRpb25zLmdyb3VwO1xuICAgIGlmICghb3JpZ2luYWxHcm91cCB8fCBfdHlwZW9mKG9yaWdpbmFsR3JvdXApICE9ICdvYmplY3QnKSB7XG4gICAgICBvcmlnaW5hbEdyb3VwID0ge1xuICAgICAgICBuYW1lOiBvcmlnaW5hbEdyb3VwXG4gICAgICB9O1xuICAgIH1cbiAgICBncm91cC5uYW1lID0gb3JpZ2luYWxHcm91cC5uYW1lO1xuICAgIGdyb3VwLmNoZWNrUHVsbCA9IHRvRm4ob3JpZ2luYWxHcm91cC5wdWxsLCB0cnVlKTtcbiAgICBncm91cC5jaGVja1B1dCA9IHRvRm4ob3JpZ2luYWxHcm91cC5wdXQpO1xuICAgIGdyb3VwLnJldmVydENsb25lID0gb3JpZ2luYWxHcm91cC5yZXZlcnRDbG9uZTtcbiAgICBvcHRpb25zLmdyb3VwID0gZ3JvdXA7XG4gIH0sXG4gIF9oaWRlR2hvc3RGb3JUYXJnZXQgPSBmdW5jdGlvbiBfaGlkZUdob3N0Rm9yVGFyZ2V0KCkge1xuICAgIGlmICghc3VwcG9ydENzc1BvaW50ZXJFdmVudHMgJiYgZ2hvc3RFbCkge1xuICAgICAgY3NzKGdob3N0RWwsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG4gIH0sXG4gIF91bmhpZGVHaG9zdEZvclRhcmdldCA9IGZ1bmN0aW9uIF91bmhpZGVHaG9zdEZvclRhcmdldCgpIHtcbiAgICBpZiAoIXN1cHBvcnRDc3NQb2ludGVyRXZlbnRzICYmIGdob3N0RWwpIHtcbiAgICAgIGNzcyhnaG9zdEVsLCAnZGlzcGxheScsICcnKTtcbiAgICB9XG4gIH07XG5cbi8vICMxMTg0IGZpeCAtIFByZXZlbnQgY2xpY2sgZXZlbnQgb24gZmFsbGJhY2sgaWYgZHJhZ2dlZCBidXQgaXRlbSBub3QgY2hhbmdlZCBwb3NpdGlvblxuaWYgKGRvY3VtZW50RXhpc3RzICYmICFDaHJvbWVGb3JBbmRyb2lkKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmIChpZ25vcmVOZXh0Q2xpY2spIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbiAmJiBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uICYmIGV2dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIGlnbm9yZU5leHRDbGljayA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwgdHJ1ZSk7XG59XG52YXIgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQgPSBmdW5jdGlvbiBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudChldnQpIHtcbiAgaWYgKGRyYWdFbCkge1xuICAgIGV2dCA9IGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQ7XG4gICAgdmFyIG5lYXJlc3QgPSBfZGV0ZWN0TmVhcmVzdEVtcHR5U29ydGFibGUoZXZ0LmNsaWVudFgsIGV2dC5jbGllbnRZKTtcbiAgICBpZiAobmVhcmVzdCkge1xuICAgICAgLy8gQ3JlYXRlIGltaXRhdGlvbiBldmVudFxuICAgICAgdmFyIGV2ZW50ID0ge307XG4gICAgICBmb3IgKHZhciBpIGluIGV2dCkge1xuICAgICAgICBpZiAoZXZ0Lmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgZXZlbnRbaV0gPSBldnRbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGV2ZW50LnRhcmdldCA9IGV2ZW50LnJvb3RFbCA9IG5lYXJlc3Q7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCA9IHZvaWQgMDtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbiA9IHZvaWQgMDtcbiAgICAgIG5lYXJlc3RbZXhwYW5kb10uX29uRHJhZ092ZXIoZXZlbnQpO1xuICAgIH1cbiAgfVxufTtcbnZhciBfY2hlY2tPdXRzaWRlVGFyZ2V0RWwgPSBmdW5jdGlvbiBfY2hlY2tPdXRzaWRlVGFyZ2V0RWwoZXZ0KSB7XG4gIGlmIChkcmFnRWwpIHtcbiAgICBkcmFnRWwucGFyZW50Tm9kZVtleHBhbmRvXS5faXNPdXRzaWRlVGhpc0VsKGV2dC50YXJnZXQpO1xuICB9XG59O1xuXG4vKipcclxuICogQGNsYXNzICBTb3J0YWJsZVxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gIGVsXHJcbiAqIEBwYXJhbSAge09iamVjdH0gICAgICAgW29wdGlvbnNdXHJcbiAqL1xuZnVuY3Rpb24gU29ydGFibGUoZWwsIG9wdGlvbnMpIHtcbiAgaWYgKCEoZWwgJiYgZWwubm9kZVR5cGUgJiYgZWwubm9kZVR5cGUgPT09IDEpKSB7XG4gICAgdGhyb3cgXCJTb3J0YWJsZTogYGVsYCBtdXN0IGJlIGFuIEhUTUxFbGVtZW50LCBub3QgXCIuY29uY2F0KHt9LnRvU3RyaW5nLmNhbGwoZWwpKTtcbiAgfVxuICB0aGlzLmVsID0gZWw7IC8vIHJvb3QgZWxlbWVudFxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zID0gX2V4dGVuZHMoe30sIG9wdGlvbnMpO1xuXG4gIC8vIEV4cG9ydCBpbnN0YW5jZVxuICBlbFtleHBhbmRvXSA9IHRoaXM7XG4gIHZhciBkZWZhdWx0cyA9IHtcbiAgICBncm91cDogbnVsbCxcbiAgICBzb3J0OiB0cnVlLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBzdG9yZTogbnVsbCxcbiAgICBoYW5kbGU6IG51bGwsXG4gICAgZHJhZ2dhYmxlOiAvXlt1b11sJC9pLnRlc3QoZWwubm9kZU5hbWUpID8gJz5saScgOiAnPionLFxuICAgIHN3YXBUaHJlc2hvbGQ6IDEsXG4gICAgLy8gcGVyY2VudGFnZTsgMCA8PSB4IDw9IDFcbiAgICBpbnZlcnRTd2FwOiBmYWxzZSxcbiAgICAvLyBpbnZlcnQgYWx3YXlzXG4gICAgaW52ZXJ0ZWRTd2FwVGhyZXNob2xkOiBudWxsLFxuICAgIC8vIHdpbGwgYmUgc2V0IHRvIHNhbWUgYXMgc3dhcFRocmVzaG9sZCBpZiBkZWZhdWx0XG4gICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXG4gICAgZGlyZWN0aW9uOiBmdW5jdGlvbiBkaXJlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gX2RldGVjdERpcmVjdGlvbihlbCwgdGhpcy5vcHRpb25zKTtcbiAgICB9LFxuICAgIGdob3N0Q2xhc3M6ICdzb3J0YWJsZS1naG9zdCcsXG4gICAgY2hvc2VuQ2xhc3M6ICdzb3J0YWJsZS1jaG9zZW4nLFxuICAgIGRyYWdDbGFzczogJ3NvcnRhYmxlLWRyYWcnLFxuICAgIGlnbm9yZTogJ2EsIGltZycsXG4gICAgZmlsdGVyOiBudWxsLFxuICAgIHByZXZlbnRPbkZpbHRlcjogdHJ1ZSxcbiAgICBhbmltYXRpb246IDAsXG4gICAgZWFzaW5nOiBudWxsLFxuICAgIHNldERhdGE6IGZ1bmN0aW9uIHNldERhdGEoZGF0YVRyYW5zZmVyLCBkcmFnRWwpIHtcbiAgICAgIGRhdGFUcmFuc2Zlci5zZXREYXRhKCdUZXh0JywgZHJhZ0VsLnRleHRDb250ZW50KTtcbiAgICB9LFxuICAgIGRyb3BCdWJibGU6IGZhbHNlLFxuICAgIGRyYWdvdmVyQnViYmxlOiBmYWxzZSxcbiAgICBkYXRhSWRBdHRyOiAnZGF0YS1pZCcsXG4gICAgZGVsYXk6IDAsXG4gICAgZGVsYXlPblRvdWNoT25seTogZmFsc2UsXG4gICAgdG91Y2hTdGFydFRocmVzaG9sZDogKE51bWJlci5wYXJzZUludCA/IE51bWJlciA6IHdpbmRvdykucGFyc2VJbnQod2luZG93LmRldmljZVBpeGVsUmF0aW8sIDEwKSB8fCAxLFxuICAgIGZvcmNlRmFsbGJhY2s6IGZhbHNlLFxuICAgIGZhbGxiYWNrQ2xhc3M6ICdzb3J0YWJsZS1mYWxsYmFjaycsXG4gICAgZmFsbGJhY2tPbkJvZHk6IGZhbHNlLFxuICAgIGZhbGxiYWNrVG9sZXJhbmNlOiAwLFxuICAgIGZhbGxiYWNrT2Zmc2V0OiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH0sXG4gICAgc3VwcG9ydFBvaW50ZXI6IFNvcnRhYmxlLnN1cHBvcnRQb2ludGVyICE9PSBmYWxzZSAmJiAnUG9pbnRlckV2ZW50JyBpbiB3aW5kb3cgJiYgIVNhZmFyaSxcbiAgICBlbXB0eUluc2VydFRocmVzaG9sZDogNVxuICB9O1xuICBQbHVnaW5NYW5hZ2VyLmluaXRpYWxpemVQbHVnaW5zKHRoaXMsIGVsLCBkZWZhdWx0cyk7XG5cbiAgLy8gU2V0IGRlZmF1bHQgb3B0aW9uc1xuICBmb3IgKHZhciBuYW1lIGluIGRlZmF1bHRzKSB7XG4gICAgIShuYW1lIGluIG9wdGlvbnMpICYmIChvcHRpb25zW25hbWVdID0gZGVmYXVsdHNbbmFtZV0pO1xuICB9XG4gIF9wcmVwYXJlR3JvdXAob3B0aW9ucyk7XG5cbiAgLy8gQmluZCBhbGwgcHJpdmF0ZSBtZXRob2RzXG4gIGZvciAodmFyIGZuIGluIHRoaXMpIHtcbiAgICBpZiAoZm4uY2hhckF0KDApID09PSAnXycgJiYgdHlwZW9mIHRoaXNbZm5dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzW2ZuXSA9IHRoaXNbZm5dLmJpbmQodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0dXAgZHJhZyBtb2RlXG4gIHRoaXMubmF0aXZlRHJhZ2dhYmxlID0gb3B0aW9ucy5mb3JjZUZhbGxiYWNrID8gZmFsc2UgOiBzdXBwb3J0RHJhZ2dhYmxlO1xuICBpZiAodGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAvLyBUb3VjaCBzdGFydCB0aHJlc2hvbGQgY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiB0aGUgbmF0aXZlIGRyYWdzdGFydCB0aHJlc2hvbGRcbiAgICB0aGlzLm9wdGlvbnMudG91Y2hTdGFydFRocmVzaG9sZCA9IDE7XG4gIH1cblxuICAvLyBCaW5kIGV2ZW50c1xuICBpZiAob3B0aW9ucy5zdXBwb3J0UG9pbnRlcikge1xuICAgIG9uKGVsLCAncG9pbnRlcmRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgfSBlbHNlIHtcbiAgICBvbihlbCwgJ21vdXNlZG93bicsIHRoaXMuX29uVGFwU3RhcnQpO1xuICAgIG9uKGVsLCAndG91Y2hzdGFydCcsIHRoaXMuX29uVGFwU3RhcnQpO1xuICB9XG4gIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgIG9uKGVsLCAnZHJhZ292ZXInLCB0aGlzKTtcbiAgICBvbihlbCwgJ2RyYWdlbnRlcicsIHRoaXMpO1xuICB9XG4gIHNvcnRhYmxlcy5wdXNoKHRoaXMuZWwpO1xuXG4gIC8vIFJlc3RvcmUgc29ydGluZ1xuICBvcHRpb25zLnN0b3JlICYmIG9wdGlvbnMuc3RvcmUuZ2V0ICYmIHRoaXMuc29ydChvcHRpb25zLnN0b3JlLmdldCh0aGlzKSB8fCBbXSk7XG5cbiAgLy8gQWRkIGFuaW1hdGlvbiBzdGF0ZSBtYW5hZ2VyXG4gIF9leHRlbmRzKHRoaXMsIEFuaW1hdGlvblN0YXRlTWFuYWdlcigpKTtcbn1cblNvcnRhYmxlLnByb3RvdHlwZSA9IC8qKiBAbGVuZHMgU29ydGFibGUucHJvdG90eXBlICove1xuICBjb25zdHJ1Y3RvcjogU29ydGFibGUsXG4gIF9pc091dHNpZGVUaGlzRWw6IGZ1bmN0aW9uIF9pc091dHNpZGVUaGlzRWwodGFyZ2V0KSB7XG4gICAgaWYgKCF0aGlzLmVsLmNvbnRhaW5zKHRhcmdldCkgJiYgdGFyZ2V0ICE9PSB0aGlzLmVsKSB7XG4gICAgICBsYXN0VGFyZ2V0ID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIF9nZXREaXJlY3Rpb246IGZ1bmN0aW9uIF9nZXREaXJlY3Rpb24oZXZ0LCB0YXJnZXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdmdW5jdGlvbicgPyB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uLmNhbGwodGhpcywgZXZ0LCB0YXJnZXQsIGRyYWdFbCkgOiB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uO1xuICB9LFxuICBfb25UYXBTdGFydDogZnVuY3Rpb24gX29uVGFwU3RhcnQoIC8qKiBFdmVudHxUb3VjaEV2ZW50ICovZXZ0KSB7XG4gICAgaWYgKCFldnQuY2FuY2VsYWJsZSkgcmV0dXJuO1xuICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICBlbCA9IHRoaXMuZWwsXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgcHJldmVudE9uRmlsdGVyID0gb3B0aW9ucy5wcmV2ZW50T25GaWx0ZXIsXG4gICAgICB0eXBlID0gZXZ0LnR5cGUsXG4gICAgICB0b3VjaCA9IGV2dC50b3VjaGVzICYmIGV2dC50b3VjaGVzWzBdIHx8IGV2dC5wb2ludGVyVHlwZSAmJiBldnQucG9pbnRlclR5cGUgPT09ICd0b3VjaCcgJiYgZXZ0LFxuICAgICAgdGFyZ2V0ID0gKHRvdWNoIHx8IGV2dCkudGFyZ2V0LFxuICAgICAgb3JpZ2luYWxUYXJnZXQgPSBldnQudGFyZ2V0LnNoYWRvd1Jvb3QgJiYgKGV2dC5wYXRoICYmIGV2dC5wYXRoWzBdIHx8IGV2dC5jb21wb3NlZFBhdGggJiYgZXZ0LmNvbXBvc2VkUGF0aCgpWzBdKSB8fCB0YXJnZXQsXG4gICAgICBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICBfc2F2ZUlucHV0Q2hlY2tlZFN0YXRlKGVsKTtcblxuICAgIC8vIERvbid0IHRyaWdnZXIgc3RhcnQgZXZlbnQgd2hlbiBhbiBlbGVtZW50IGlzIGJlZW4gZHJhZ2dlZCwgb3RoZXJ3aXNlIHRoZSBldnQub2xkaW5kZXggYWx3YXlzIHdyb25nIHdoZW4gc2V0IG9wdGlvbi5ncm91cC5cbiAgICBpZiAoZHJhZ0VsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICgvbW91c2Vkb3dufHBvaW50ZXJkb3duLy50ZXN0KHR5cGUpICYmIGV2dC5idXR0b24gIT09IDAgfHwgb3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuOyAvLyBvbmx5IGxlZnQgYnV0dG9uIGFuZCBlbmFibGVkXG4gICAgfVxuXG4gICAgLy8gY2FuY2VsIGRuZCBpZiBvcmlnaW5hbCB0YXJnZXQgaXMgY29udGVudCBlZGl0YWJsZVxuICAgIGlmIChvcmlnaW5hbFRhcmdldC5pc0NvbnRlbnRFZGl0YWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNhZmFyaSBpZ25vcmVzIGZ1cnRoZXIgZXZlbnQgaGFuZGxpbmcgYWZ0ZXIgbW91c2Vkb3duXG4gICAgaWYgKCF0aGlzLm5hdGl2ZURyYWdnYWJsZSAmJiBTYWZhcmkgJiYgdGFyZ2V0ICYmIHRhcmdldC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTRUxFQ1QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRhcmdldCA9IGNsb3Nlc3QodGFyZ2V0LCBvcHRpb25zLmRyYWdnYWJsZSwgZWwsIGZhbHNlKTtcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5hbmltYXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobGFzdERvd25FbCA9PT0gdGFyZ2V0KSB7XG4gICAgICAvLyBJZ25vcmluZyBkdXBsaWNhdGUgYGRvd25gXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBpbmRleCBvZiB0aGUgZHJhZ2dlZCBlbGVtZW50IHdpdGhpbiBpdHMgcGFyZW50XG4gICAgb2xkSW5kZXggPSBpbmRleCh0YXJnZXQpO1xuICAgIG9sZERyYWdnYWJsZUluZGV4ID0gaW5kZXgodGFyZ2V0LCBvcHRpb25zLmRyYWdnYWJsZSk7XG5cbiAgICAvLyBDaGVjayBmaWx0ZXJcbiAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGZpbHRlci5jYWxsKHRoaXMsIGV2dCwgdGFyZ2V0LCB0aGlzKSkge1xuICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgc29ydGFibGU6IF90aGlzLFxuICAgICAgICAgIHJvb3RFbDogb3JpZ2luYWxUYXJnZXQsXG4gICAgICAgICAgbmFtZTogJ2ZpbHRlcicsXG4gICAgICAgICAgdGFyZ2V0RWw6IHRhcmdldCxcbiAgICAgICAgICB0b0VsOiBlbCxcbiAgICAgICAgICBmcm9tRWw6IGVsXG4gICAgICAgIH0pO1xuICAgICAgICBwbHVnaW5FdmVudCgnZmlsdGVyJywgX3RoaXMsIHtcbiAgICAgICAgICBldnQ6IGV2dFxuICAgICAgICB9KTtcbiAgICAgICAgcHJldmVudE9uRmlsdGVyICYmIGV2dC5jYW5jZWxhYmxlICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47IC8vIGNhbmNlbCBkbmRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpbHRlcikge1xuICAgICAgZmlsdGVyID0gZmlsdGVyLnNwbGl0KCcsJykuc29tZShmdW5jdGlvbiAoY3JpdGVyaWEpIHtcbiAgICAgICAgY3JpdGVyaWEgPSBjbG9zZXN0KG9yaWdpbmFsVGFyZ2V0LCBjcml0ZXJpYS50cmltKCksIGVsLCBmYWxzZSk7XG4gICAgICAgIGlmIChjcml0ZXJpYSkge1xuICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgIHNvcnRhYmxlOiBfdGhpcyxcbiAgICAgICAgICAgIHJvb3RFbDogY3JpdGVyaWEsXG4gICAgICAgICAgICBuYW1lOiAnZmlsdGVyJyxcbiAgICAgICAgICAgIHRhcmdldEVsOiB0YXJnZXQsXG4gICAgICAgICAgICBmcm9tRWw6IGVsLFxuICAgICAgICAgICAgdG9FbDogZWxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwbHVnaW5FdmVudCgnZmlsdGVyJywgX3RoaXMsIHtcbiAgICAgICAgICAgIGV2dDogZXZ0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICBwcmV2ZW50T25GaWx0ZXIgJiYgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjsgLy8gY2FuY2VsIGRuZFxuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5oYW5kbGUgJiYgIWNsb3Nlc3Qob3JpZ2luYWxUYXJnZXQsIG9wdGlvbnMuaGFuZGxlLCBlbCwgZmFsc2UpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUHJlcGFyZSBgZHJhZ3N0YXJ0YFxuICAgIHRoaXMuX3ByZXBhcmVEcmFnU3RhcnQoZXZ0LCB0b3VjaCwgdGFyZ2V0KTtcbiAgfSxcbiAgX3ByZXBhcmVEcmFnU3RhcnQ6IGZ1bmN0aW9uIF9wcmVwYXJlRHJhZ1N0YXJ0KCAvKiogRXZlbnQgKi9ldnQsIC8qKiBUb3VjaCAqL3RvdWNoLCAvKiogSFRNTEVsZW1lbnQgKi90YXJnZXQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgZWwgPSBfdGhpcy5lbCxcbiAgICAgIG9wdGlvbnMgPSBfdGhpcy5vcHRpb25zLFxuICAgICAgb3duZXJEb2N1bWVudCA9IGVsLm93bmVyRG9jdW1lbnQsXG4gICAgICBkcmFnU3RhcnRGbjtcbiAgICBpZiAodGFyZ2V0ICYmICFkcmFnRWwgJiYgdGFyZ2V0LnBhcmVudE5vZGUgPT09IGVsKSB7XG4gICAgICB2YXIgZHJhZ1JlY3QgPSBnZXRSZWN0KHRhcmdldCk7XG4gICAgICByb290RWwgPSBlbDtcbiAgICAgIGRyYWdFbCA9IHRhcmdldDtcbiAgICAgIHBhcmVudEVsID0gZHJhZ0VsLnBhcmVudE5vZGU7XG4gICAgICBuZXh0RWwgPSBkcmFnRWwubmV4dFNpYmxpbmc7XG4gICAgICBsYXN0RG93bkVsID0gdGFyZ2V0O1xuICAgICAgYWN0aXZlR3JvdXAgPSBvcHRpb25zLmdyb3VwO1xuICAgICAgU29ydGFibGUuZHJhZ2dlZCA9IGRyYWdFbDtcbiAgICAgIHRhcEV2dCA9IHtcbiAgICAgICAgdGFyZ2V0OiBkcmFnRWwsXG4gICAgICAgIGNsaWVudFg6ICh0b3VjaCB8fCBldnQpLmNsaWVudFgsXG4gICAgICAgIGNsaWVudFk6ICh0b3VjaCB8fCBldnQpLmNsaWVudFlcbiAgICAgIH07XG4gICAgICB0YXBEaXN0YW5jZUxlZnQgPSB0YXBFdnQuY2xpZW50WCAtIGRyYWdSZWN0LmxlZnQ7XG4gICAgICB0YXBEaXN0YW5jZVRvcCA9IHRhcEV2dC5jbGllbnRZIC0gZHJhZ1JlY3QudG9wO1xuICAgICAgdGhpcy5fbGFzdFggPSAodG91Y2ggfHwgZXZ0KS5jbGllbnRYO1xuICAgICAgdGhpcy5fbGFzdFkgPSAodG91Y2ggfHwgZXZ0KS5jbGllbnRZO1xuICAgICAgZHJhZ0VsLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJ2FsbCc7XG4gICAgICBkcmFnU3RhcnRGbiA9IGZ1bmN0aW9uIGRyYWdTdGFydEZuKCkge1xuICAgICAgICBwbHVnaW5FdmVudCgnZGVsYXlFbmRlZCcsIF90aGlzLCB7XG4gICAgICAgICAgZXZ0OiBldnRcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICAgICAgX3RoaXMuX29uRHJvcCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBEZWxheWVkIGRyYWcgaGFzIGJlZW4gdHJpZ2dlcmVkXG4gICAgICAgIC8vIHdlIGNhbiByZS1lbmFibGUgdGhlIGV2ZW50czogdG91Y2htb3ZlL21vdXNlbW92ZVxuICAgICAgICBfdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnRXZlbnRzKCk7XG4gICAgICAgIGlmICghRmlyZUZveCAmJiBfdGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgICAgICBkcmFnRWwuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJpbmQgdGhlIGV2ZW50czogZHJhZ3N0YXJ0L2RyYWdlbmRcbiAgICAgICAgX3RoaXMuX3RyaWdnZXJEcmFnU3RhcnQoZXZ0LCB0b3VjaCk7XG5cbiAgICAgICAgLy8gRHJhZyBzdGFydCBldmVudFxuICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgc29ydGFibGU6IF90aGlzLFxuICAgICAgICAgIG5hbWU6ICdjaG9vc2UnLFxuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDaG9zZW4gaXRlbVxuICAgICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuY2hvc2VuQ2xhc3MsIHRydWUpO1xuICAgICAgfTtcblxuICAgICAgLy8gRGlzYWJsZSBcImRyYWdnYWJsZVwiXG4gICAgICBvcHRpb25zLmlnbm9yZS5zcGxpdCgnLCcpLmZvckVhY2goZnVuY3Rpb24gKGNyaXRlcmlhKSB7XG4gICAgICAgIGZpbmQoZHJhZ0VsLCBjcml0ZXJpYS50cmltKCksIF9kaXNhYmxlRHJhZ2dhYmxlKTtcbiAgICAgIH0pO1xuICAgICAgb24ob3duZXJEb2N1bWVudCwgJ2RyYWdvdmVyJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICAgICAgb24ob3duZXJEb2N1bWVudCwgJ21vdXNlbW92ZScsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaG1vdmUnLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gICAgICBvbihvd25lckRvY3VtZW50LCAnbW91c2V1cCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgX3RoaXMuX29uRHJvcCk7XG4gICAgICBvbihvd25lckRvY3VtZW50LCAndG91Y2hjYW5jZWwnLCBfdGhpcy5fb25Ecm9wKTtcblxuICAgICAgLy8gTWFrZSBkcmFnRWwgZHJhZ2dhYmxlIChtdXN0IGJlIGJlZm9yZSBkZWxheSBmb3IgRmlyZUZveClcbiAgICAgIGlmIChGaXJlRm94ICYmIHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFN0YXJ0VGhyZXNob2xkID0gNDtcbiAgICAgICAgZHJhZ0VsLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBwbHVnaW5FdmVudCgnZGVsYXlTdGFydCcsIHRoaXMsIHtcbiAgICAgICAgZXZ0OiBldnRcbiAgICAgIH0pO1xuXG4gICAgICAvLyBEZWxheSBpcyBpbXBvc3NpYmxlIGZvciBuYXRpdmUgRG5EIGluIEVkZ2Ugb3IgSUVcbiAgICAgIGlmIChvcHRpb25zLmRlbGF5ICYmICghb3B0aW9ucy5kZWxheU9uVG91Y2hPbmx5IHx8IHRvdWNoKSAmJiAoIXRoaXMubmF0aXZlRHJhZ2dhYmxlIHx8ICEoRWRnZSB8fCBJRTExT3JMZXNzKSkpIHtcbiAgICAgICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgICAgICB0aGlzLl9vbkRyb3AoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgbW92ZXMgdGhlIHBvaW50ZXIgb3IgbGV0IGdvIHRoZSBjbGljayBvciB0b3VjaFxuICAgICAgICAvLyBiZWZvcmUgdGhlIGRlbGF5IGhhcyBiZWVuIHJlYWNoZWQ6XG4gICAgICAgIC8vIGRpc2FibGUgdGhlIGRlbGF5ZWQgZHJhZ1xuICAgICAgICBvbihvd25lckRvY3VtZW50LCAnbW91c2V1cCcsIF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgICAgICBvbihvd25lckRvY3VtZW50LCAndG91Y2hlbmQnLCBfdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgX3RoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNobW92ZScsIF90aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xuICAgICAgICBvcHRpb25zLnN1cHBvcnRQb2ludGVyICYmIG9uKG93bmVyRG9jdW1lbnQsICdwb2ludGVybW92ZScsIF90aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xuICAgICAgICBfdGhpcy5fZHJhZ1N0YXJ0VGltZXIgPSBzZXRUaW1lb3V0KGRyYWdTdGFydEZuLCBvcHRpb25zLmRlbGF5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWdTdGFydEZuKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBfZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyOiBmdW5jdGlvbiBfZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKCAvKiogVG91Y2hFdmVudHxQb2ludGVyRXZlbnQgKiovZSkge1xuICAgIHZhciB0b3VjaCA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGU7XG4gICAgaWYgKE1hdGgubWF4KE1hdGguYWJzKHRvdWNoLmNsaWVudFggLSB0aGlzLl9sYXN0WCksIE1hdGguYWJzKHRvdWNoLmNsaWVudFkgLSB0aGlzLl9sYXN0WSkpID49IE1hdGguZmxvb3IodGhpcy5vcHRpb25zLnRvdWNoU3RhcnRUaHJlc2hvbGQgLyAodGhpcy5uYXRpdmVEcmFnZ2FibGUgJiYgd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSkpKSB7XG4gICAgICB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcoKTtcbiAgICB9XG4gIH0sXG4gIF9kaXNhYmxlRGVsYXllZERyYWc6IGZ1bmN0aW9uIF9kaXNhYmxlRGVsYXllZERyYWcoKSB7XG4gICAgZHJhZ0VsICYmIF9kaXNhYmxlRHJhZ2dhYmxlKGRyYWdFbCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RyYWdTdGFydFRpbWVyKTtcbiAgICB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKTtcbiAgfSxcbiAgX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50czogZnVuY3Rpb24gX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50cygpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IHRoaXMuZWwub3duZXJEb2N1bWVudDtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAndG91Y2hlbmQnLCB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAndG91Y2hjYW5jZWwnLCB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNobW92ZScsIHRoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdwb2ludGVybW92ZScsIHRoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gIH0sXG4gIF90cmlnZ2VyRHJhZ1N0YXJ0OiBmdW5jdGlvbiBfdHJpZ2dlckRyYWdTdGFydCggLyoqIEV2ZW50ICovZXZ0LCAvKiogVG91Y2ggKi90b3VjaCkge1xuICAgIHRvdWNoID0gdG91Y2ggfHwgZXZ0LnBvaW50ZXJUeXBlID09ICd0b3VjaCcgJiYgZXZ0O1xuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnZ2FibGUgfHwgdG91Y2gpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3VwcG9ydFBvaW50ZXIpIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdwb2ludGVybW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICAgIH0gZWxzZSBpZiAodG91Y2gpIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbihkb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb24oZHJhZ0VsLCAnZHJhZ2VuZCcsIHRoaXMpO1xuICAgICAgb24ocm9vdEVsLCAnZHJhZ3N0YXJ0JywgdGhpcy5fb25EcmFnU3RhcnQpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xuICAgICAgICAvLyBUaW1lb3V0IG5lY2Nlc3NhcnkgZm9yIElFOVxuICAgICAgICBfbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRvY3VtZW50LnNlbGVjdGlvbi5lbXB0eSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHt9XG4gIH0sXG4gIF9kcmFnU3RhcnRlZDogZnVuY3Rpb24gX2RyYWdTdGFydGVkKGZhbGxiYWNrLCBldnQpIHtcbiAgICBhd2FpdGluZ0RyYWdTdGFydGVkID0gZmFsc2U7XG4gICAgaWYgKHJvb3RFbCAmJiBkcmFnRWwpIHtcbiAgICAgIHBsdWdpbkV2ZW50KCdkcmFnU3RhcnRlZCcsIHRoaXMsIHtcbiAgICAgICAgZXZ0OiBldnRcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAnZHJhZ292ZXInLCBfY2hlY2tPdXRzaWRlVGFyZ2V0RWwpO1xuICAgICAgfVxuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgIC8vIEFwcGx5IGVmZmVjdFxuICAgICAgIWZhbGxiYWNrICYmIHRvZ2dsZUNsYXNzKGRyYWdFbCwgb3B0aW9ucy5kcmFnQ2xhc3MsIGZhbHNlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgb3B0aW9ucy5naG9zdENsYXNzLCB0cnVlKTtcbiAgICAgIFNvcnRhYmxlLmFjdGl2ZSA9IHRoaXM7XG4gICAgICBmYWxsYmFjayAmJiB0aGlzLl9hcHBlbmRHaG9zdCgpO1xuXG4gICAgICAvLyBEcmFnIHN0YXJ0IGV2ZW50XG4gICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICBuYW1lOiAnc3RhcnQnLFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9udWxsaW5nKCk7XG4gICAgfVxuICB9LFxuICBfZW11bGF0ZURyYWdPdmVyOiBmdW5jdGlvbiBfZW11bGF0ZURyYWdPdmVyKCkge1xuICAgIGlmICh0b3VjaEV2dCkge1xuICAgICAgdGhpcy5fbGFzdFggPSB0b3VjaEV2dC5jbGllbnRYO1xuICAgICAgdGhpcy5fbGFzdFkgPSB0b3VjaEV2dC5jbGllbnRZO1xuICAgICAgX2hpZGVHaG9zdEZvclRhcmdldCgpO1xuICAgICAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQodG91Y2hFdnQuY2xpZW50WCwgdG91Y2hFdnQuY2xpZW50WSk7XG4gICAgICB2YXIgcGFyZW50ID0gdGFyZ2V0O1xuICAgICAgd2hpbGUgKHRhcmdldCAmJiB0YXJnZXQuc2hhZG93Um9vdCkge1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXQuc2hhZG93Um9vdC5lbGVtZW50RnJvbVBvaW50KHRvdWNoRXZ0LmNsaWVudFgsIHRvdWNoRXZ0LmNsaWVudFkpO1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBwYXJlbnQpIGJyZWFrO1xuICAgICAgICBwYXJlbnQgPSB0YXJnZXQ7XG4gICAgICB9XG4gICAgICBkcmFnRWwucGFyZW50Tm9kZVtleHBhbmRvXS5faXNPdXRzaWRlVGhpc0VsKHRhcmdldCk7XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICBpZiAocGFyZW50W2V4cGFuZG9dKSB7XG4gICAgICAgICAgICB2YXIgaW5zZXJ0ZWQgPSB2b2lkIDA7XG4gICAgICAgICAgICBpbnNlcnRlZCA9IHBhcmVudFtleHBhbmRvXS5fb25EcmFnT3Zlcih7XG4gICAgICAgICAgICAgIGNsaWVudFg6IHRvdWNoRXZ0LmNsaWVudFgsXG4gICAgICAgICAgICAgIGNsaWVudFk6IHRvdWNoRXZ0LmNsaWVudFksXG4gICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgICByb290RWw6IHBhcmVudFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaW5zZXJ0ZWQgJiYgIXRoaXMub3B0aW9ucy5kcmFnb3ZlckJ1YmJsZSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGFyZ2V0ID0gcGFyZW50OyAvLyBzdG9yZSBsYXN0IGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovIHdoaWxlIChwYXJlbnQgPSBnZXRQYXJlbnRPckhvc3QocGFyZW50KSk7XG4gICAgICB9XG4gICAgICBfdW5oaWRlR2hvc3RGb3JUYXJnZXQoKTtcbiAgICB9XG4gIH0sXG4gIF9vblRvdWNoTW92ZTogZnVuY3Rpb24gX29uVG91Y2hNb3ZlKCAvKipUb3VjaEV2ZW50Ki9ldnQpIHtcbiAgICBpZiAodGFwRXZ0KSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgZmFsbGJhY2tUb2xlcmFuY2UgPSBvcHRpb25zLmZhbGxiYWNrVG9sZXJhbmNlLFxuICAgICAgICBmYWxsYmFja09mZnNldCA9IG9wdGlvbnMuZmFsbGJhY2tPZmZzZXQsXG4gICAgICAgIHRvdWNoID0gZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXSA6IGV2dCxcbiAgICAgICAgZ2hvc3RNYXRyaXggPSBnaG9zdEVsICYmIG1hdHJpeChnaG9zdEVsLCB0cnVlKSxcbiAgICAgICAgc2NhbGVYID0gZ2hvc3RFbCAmJiBnaG9zdE1hdHJpeCAmJiBnaG9zdE1hdHJpeC5hLFxuICAgICAgICBzY2FsZVkgPSBnaG9zdEVsICYmIGdob3N0TWF0cml4ICYmIGdob3N0TWF0cml4LmQsXG4gICAgICAgIHJlbGF0aXZlU2Nyb2xsT2Zmc2V0ID0gUG9zaXRpb25HaG9zdEFic29sdXRlbHkgJiYgZ2hvc3RSZWxhdGl2ZVBhcmVudCAmJiBnZXRSZWxhdGl2ZVNjcm9sbE9mZnNldChnaG9zdFJlbGF0aXZlUGFyZW50KSxcbiAgICAgICAgZHggPSAodG91Y2guY2xpZW50WCAtIHRhcEV2dC5jbGllbnRYICsgZmFsbGJhY2tPZmZzZXQueCkgLyAoc2NhbGVYIHx8IDEpICsgKHJlbGF0aXZlU2Nyb2xsT2Zmc2V0ID8gcmVsYXRpdmVTY3JvbGxPZmZzZXRbMF0gLSBnaG9zdFJlbGF0aXZlUGFyZW50SW5pdGlhbFNjcm9sbFswXSA6IDApIC8gKHNjYWxlWCB8fCAxKSxcbiAgICAgICAgZHkgPSAodG91Y2guY2xpZW50WSAtIHRhcEV2dC5jbGllbnRZICsgZmFsbGJhY2tPZmZzZXQueSkgLyAoc2NhbGVZIHx8IDEpICsgKHJlbGF0aXZlU2Nyb2xsT2Zmc2V0ID8gcmVsYXRpdmVTY3JvbGxPZmZzZXRbMV0gLSBnaG9zdFJlbGF0aXZlUGFyZW50SW5pdGlhbFNjcm9sbFsxXSA6IDApIC8gKHNjYWxlWSB8fCAxKTtcblxuICAgICAgLy8gb25seSBzZXQgdGhlIHN0YXR1cyB0byBkcmFnZ2luZywgd2hlbiB3ZSBhcmUgYWN0dWFsbHkgZHJhZ2dpbmdcbiAgICAgIGlmICghU29ydGFibGUuYWN0aXZlICYmICFhd2FpdGluZ0RyYWdTdGFydGVkKSB7XG4gICAgICAgIGlmIChmYWxsYmFja1RvbGVyYW5jZSAmJiBNYXRoLm1heChNYXRoLmFicyh0b3VjaC5jbGllbnRYIC0gdGhpcy5fbGFzdFgpLCBNYXRoLmFicyh0b3VjaC5jbGllbnRZIC0gdGhpcy5fbGFzdFkpKSA8IGZhbGxiYWNrVG9sZXJhbmNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29uRHJhZ1N0YXJ0KGV2dCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoZ2hvc3RFbCkge1xuICAgICAgICBpZiAoZ2hvc3RNYXRyaXgpIHtcbiAgICAgICAgICBnaG9zdE1hdHJpeC5lICs9IGR4IC0gKGxhc3REeCB8fCAwKTtcbiAgICAgICAgICBnaG9zdE1hdHJpeC5mICs9IGR5IC0gKGxhc3REeSB8fCAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnaG9zdE1hdHJpeCA9IHtcbiAgICAgICAgICAgIGE6IDEsXG4gICAgICAgICAgICBiOiAwLFxuICAgICAgICAgICAgYzogMCxcbiAgICAgICAgICAgIGQ6IDEsXG4gICAgICAgICAgICBlOiBkeCxcbiAgICAgICAgICAgIGY6IGR5XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3NzTWF0cml4ID0gXCJtYXRyaXgoXCIuY29uY2F0KGdob3N0TWF0cml4LmEsIFwiLFwiKS5jb25jYXQoZ2hvc3RNYXRyaXguYiwgXCIsXCIpLmNvbmNhdChnaG9zdE1hdHJpeC5jLCBcIixcIikuY29uY2F0KGdob3N0TWF0cml4LmQsIFwiLFwiKS5jb25jYXQoZ2hvc3RNYXRyaXguZSwgXCIsXCIpLmNvbmNhdChnaG9zdE1hdHJpeC5mLCBcIilcIik7XG4gICAgICAgIGNzcyhnaG9zdEVsLCAnd2Via2l0VHJhbnNmb3JtJywgY3NzTWF0cml4KTtcbiAgICAgICAgY3NzKGdob3N0RWwsICdtb3pUcmFuc2Zvcm0nLCBjc3NNYXRyaXgpO1xuICAgICAgICBjc3MoZ2hvc3RFbCwgJ21zVHJhbnNmb3JtJywgY3NzTWF0cml4KTtcbiAgICAgICAgY3NzKGdob3N0RWwsICd0cmFuc2Zvcm0nLCBjc3NNYXRyaXgpO1xuICAgICAgICBsYXN0RHggPSBkeDtcbiAgICAgICAgbGFzdER5ID0gZHk7XG4gICAgICAgIHRvdWNoRXZ0ID0gdG91Y2g7XG4gICAgICB9XG4gICAgICBldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0sXG4gIF9hcHBlbmRHaG9zdDogZnVuY3Rpb24gX2FwcGVuZEdob3N0KCkge1xuICAgIC8vIEJ1ZyBpZiB1c2luZyBzY2FsZSgpOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNjM3MDU4XG4gICAgLy8gTm90IGJlaW5nIGFkanVzdGVkIGZvclxuICAgIGlmICghZ2hvc3RFbCkge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5mYWxsYmFja09uQm9keSA/IGRvY3VtZW50LmJvZHkgOiByb290RWwsXG4gICAgICAgIHJlY3QgPSBnZXRSZWN0KGRyYWdFbCwgdHJ1ZSwgUG9zaXRpb25HaG9zdEFic29sdXRlbHksIHRydWUsIGNvbnRhaW5lciksXG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgIC8vIFBvc2l0aW9uIGFic29sdXRlbHlcbiAgICAgIGlmIChQb3NpdGlvbkdob3N0QWJzb2x1dGVseSkge1xuICAgICAgICAvLyBHZXQgcmVsYXRpdmVseSBwb3NpdGlvbmVkIHBhcmVudFxuICAgICAgICBnaG9zdFJlbGF0aXZlUGFyZW50ID0gY29udGFpbmVyO1xuICAgICAgICB3aGlsZSAoY3NzKGdob3N0UmVsYXRpdmVQYXJlbnQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJyAmJiBjc3MoZ2hvc3RSZWxhdGl2ZVBhcmVudCwgJ3RyYW5zZm9ybScpID09PSAnbm9uZScgJiYgZ2hvc3RSZWxhdGl2ZVBhcmVudCAhPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgICBnaG9zdFJlbGF0aXZlUGFyZW50ID0gZ2hvc3RSZWxhdGl2ZVBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnaG9zdFJlbGF0aXZlUGFyZW50ICE9PSBkb2N1bWVudC5ib2R5ICYmIGdob3N0UmVsYXRpdmVQYXJlbnQgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgIGlmIChnaG9zdFJlbGF0aXZlUGFyZW50ID09PSBkb2N1bWVudCkgZ2hvc3RSZWxhdGl2ZVBhcmVudCA9IGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbiAgICAgICAgICByZWN0LnRvcCArPSBnaG9zdFJlbGF0aXZlUGFyZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICByZWN0LmxlZnQgKz0gZ2hvc3RSZWxhdGl2ZVBhcmVudC5zY3JvbGxMZWZ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdob3N0UmVsYXRpdmVQYXJlbnQgPSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGwgPSBnZXRSZWxhdGl2ZVNjcm9sbE9mZnNldChnaG9zdFJlbGF0aXZlUGFyZW50KTtcbiAgICAgIH1cbiAgICAgIGdob3N0RWwgPSBkcmFnRWwuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgdG9nZ2xlQ2xhc3MoZ2hvc3RFbCwgb3B0aW9ucy5naG9zdENsYXNzLCBmYWxzZSk7XG4gICAgICB0b2dnbGVDbGFzcyhnaG9zdEVsLCBvcHRpb25zLmZhbGxiYWNrQ2xhc3MsIHRydWUpO1xuICAgICAgdG9nZ2xlQ2xhc3MoZ2hvc3RFbCwgb3B0aW9ucy5kcmFnQ2xhc3MsIHRydWUpO1xuICAgICAgY3NzKGdob3N0RWwsICd0cmFuc2l0aW9uJywgJycpO1xuICAgICAgY3NzKGdob3N0RWwsICd0cmFuc2Zvcm0nLCAnJyk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ2JveC1zaXppbmcnLCAnYm9yZGVyLWJveCcpO1xuICAgICAgY3NzKGdob3N0RWwsICdtYXJnaW4nLCAwKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAndG9wJywgcmVjdC50b3ApO1xuICAgICAgY3NzKGdob3N0RWwsICdsZWZ0JywgcmVjdC5sZWZ0KTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnd2lkdGgnLCByZWN0LndpZHRoKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnaGVpZ2h0JywgcmVjdC5oZWlnaHQpO1xuICAgICAgY3NzKGdob3N0RWwsICdvcGFjaXR5JywgJzAuOCcpO1xuICAgICAgY3NzKGdob3N0RWwsICdwb3NpdGlvbicsIFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5ID8gJ2Fic29sdXRlJyA6ICdmaXhlZCcpO1xuICAgICAgY3NzKGdob3N0RWwsICd6SW5kZXgnLCAnMTAwMDAwJyk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3BvaW50ZXJFdmVudHMnLCAnbm9uZScpO1xuICAgICAgU29ydGFibGUuZ2hvc3QgPSBnaG9zdEVsO1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdob3N0RWwpO1xuXG4gICAgICAvLyBTZXQgdHJhbnNmb3JtLW9yaWdpblxuICAgICAgY3NzKGdob3N0RWwsICd0cmFuc2Zvcm0tb3JpZ2luJywgdGFwRGlzdGFuY2VMZWZ0IC8gcGFyc2VJbnQoZ2hvc3RFbC5zdHlsZS53aWR0aCkgKiAxMDAgKyAnJSAnICsgdGFwRGlzdGFuY2VUb3AgLyBwYXJzZUludChnaG9zdEVsLnN0eWxlLmhlaWdodCkgKiAxMDAgKyAnJScpO1xuICAgIH1cbiAgfSxcbiAgX29uRHJhZ1N0YXJ0OiBmdW5jdGlvbiBfb25EcmFnU3RhcnQoIC8qKkV2ZW50Ki9ldnQsIC8qKmJvb2xlYW4qL2ZhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgZGF0YVRyYW5zZmVyID0gZXZ0LmRhdGFUcmFuc2ZlcjtcbiAgICB2YXIgb3B0aW9ucyA9IF90aGlzLm9wdGlvbnM7XG4gICAgcGx1Z2luRXZlbnQoJ2RyYWdTdGFydCcsIHRoaXMsIHtcbiAgICAgIGV2dDogZXZ0XG4gICAgfSk7XG4gICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgIHRoaXMuX29uRHJvcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwbHVnaW5FdmVudCgnc2V0dXBDbG9uZScsIHRoaXMpO1xuICAgIGlmICghU29ydGFibGUuZXZlbnRDYW5jZWxlZCkge1xuICAgICAgY2xvbmVFbCA9IGNsb25lKGRyYWdFbCk7XG4gICAgICBjbG9uZUVsLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xuICAgICAgY2xvbmVFbC5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgIGNsb25lRWwuc3R5bGVbJ3dpbGwtY2hhbmdlJ10gPSAnJztcbiAgICAgIHRoaXMuX2hpZGVDbG9uZSgpO1xuICAgICAgdG9nZ2xlQ2xhc3MoY2xvbmVFbCwgdGhpcy5vcHRpb25zLmNob3NlbkNsYXNzLCBmYWxzZSk7XG4gICAgICBTb3J0YWJsZS5jbG9uZSA9IGNsb25lRWw7XG4gICAgfVxuXG4gICAgLy8gIzExNDM6IElGcmFtZSBzdXBwb3J0IHdvcmthcm91bmRcbiAgICBfdGhpcy5jbG9uZUlkID0gX25leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHBsdWdpbkV2ZW50KCdjbG9uZScsIF90aGlzKTtcbiAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSByZXR1cm47XG4gICAgICBpZiAoIV90aGlzLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGUpIHtcbiAgICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShjbG9uZUVsLCBkcmFnRWwpO1xuICAgICAgfVxuICAgICAgX3RoaXMuX2hpZGVDbG9uZSgpO1xuICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICBzb3J0YWJsZTogX3RoaXMsXG4gICAgICAgIG5hbWU6ICdjbG9uZSdcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgICFmYWxsYmFjayAmJiB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZHJhZ0NsYXNzLCB0cnVlKTtcblxuICAgIC8vIFNldCBwcm9wZXIgZHJvcCBldmVudHNcbiAgICBpZiAoZmFsbGJhY2spIHtcbiAgICAgIGlnbm9yZU5leHRDbGljayA9IHRydWU7XG4gICAgICBfdGhpcy5fbG9vcElkID0gc2V0SW50ZXJ2YWwoX3RoaXMuX2VtdWxhdGVEcmFnT3ZlciwgNTApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVbmRvIHdoYXQgd2FzIHNldCBpbiBfcHJlcGFyZURyYWdTdGFydCBiZWZvcmUgZHJhZyBzdGFydGVkXG4gICAgICBvZmYoZG9jdW1lbnQsICdtb3VzZXVwJywgX3RoaXMuX29uRHJvcCk7XG4gICAgICBvZmYoZG9jdW1lbnQsICd0b3VjaGVuZCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgb2ZmKGRvY3VtZW50LCAndG91Y2hjYW5jZWwnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgIGlmIChkYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gICAgICAgIG9wdGlvbnMuc2V0RGF0YSAmJiBvcHRpb25zLnNldERhdGEuY2FsbChfdGhpcywgZGF0YVRyYW5zZmVyLCBkcmFnRWwpO1xuICAgICAgfVxuICAgICAgb24oZG9jdW1lbnQsICdkcm9wJywgX3RoaXMpO1xuXG4gICAgICAvLyAjMTI3NiBmaXg6XG4gICAgICBjc3MoZHJhZ0VsLCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVooMCknKTtcbiAgICB9XG4gICAgYXdhaXRpbmdEcmFnU3RhcnRlZCA9IHRydWU7XG4gICAgX3RoaXMuX2RyYWdTdGFydElkID0gX25leHRUaWNrKF90aGlzLl9kcmFnU3RhcnRlZC5iaW5kKF90aGlzLCBmYWxsYmFjaywgZXZ0KSk7XG4gICAgb24oZG9jdW1lbnQsICdzZWxlY3RzdGFydCcsIF90aGlzKTtcbiAgICBtb3ZlZCA9IHRydWU7XG4gICAgaWYgKFNhZmFyaSkge1xuICAgICAgY3NzKGRvY3VtZW50LmJvZHksICd1c2VyLXNlbGVjdCcsICdub25lJyk7XG4gICAgfVxuICB9LFxuICAvLyBSZXR1cm5zIHRydWUgLSBpZiBubyBmdXJ0aGVyIGFjdGlvbiBpcyBuZWVkZWQgKGVpdGhlciBpbnNlcnRlZCBvciBhbm90aGVyIGNvbmRpdGlvbilcbiAgX29uRHJhZ092ZXI6IGZ1bmN0aW9uIF9vbkRyYWdPdmVyKCAvKipFdmVudCovZXZ0KSB7XG4gICAgdmFyIGVsID0gdGhpcy5lbCxcbiAgICAgIHRhcmdldCA9IGV2dC50YXJnZXQsXG4gICAgICBkcmFnUmVjdCxcbiAgICAgIHRhcmdldFJlY3QsXG4gICAgICByZXZlcnQsXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgZ3JvdXAgPSBvcHRpb25zLmdyb3VwLFxuICAgICAgYWN0aXZlU29ydGFibGUgPSBTb3J0YWJsZS5hY3RpdmUsXG4gICAgICBpc093bmVyID0gYWN0aXZlR3JvdXAgPT09IGdyb3VwLFxuICAgICAgY2FuU29ydCA9IG9wdGlvbnMuc29ydCxcbiAgICAgIGZyb21Tb3J0YWJsZSA9IHB1dFNvcnRhYmxlIHx8IGFjdGl2ZVNvcnRhYmxlLFxuICAgICAgdmVydGljYWwsXG4gICAgICBfdGhpcyA9IHRoaXMsXG4gICAgICBjb21wbGV0ZWRGaXJlZCA9IGZhbHNlO1xuICAgIGlmIChfc2lsZW50KSByZXR1cm47XG4gICAgZnVuY3Rpb24gZHJhZ092ZXJFdmVudChuYW1lLCBleHRyYSkge1xuICAgICAgcGx1Z2luRXZlbnQobmFtZSwgX3RoaXMsIF9vYmplY3RTcHJlYWQyKHtcbiAgICAgICAgZXZ0OiBldnQsXG4gICAgICAgIGlzT3duZXI6IGlzT3duZXIsXG4gICAgICAgIGF4aXM6IHZlcnRpY2FsID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJyxcbiAgICAgICAgcmV2ZXJ0OiByZXZlcnQsXG4gICAgICAgIGRyYWdSZWN0OiBkcmFnUmVjdCxcbiAgICAgICAgdGFyZ2V0UmVjdDogdGFyZ2V0UmVjdCxcbiAgICAgICAgY2FuU29ydDogY2FuU29ydCxcbiAgICAgICAgZnJvbVNvcnRhYmxlOiBmcm9tU29ydGFibGUsXG4gICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICBjb21wbGV0ZWQ6IGNvbXBsZXRlZCxcbiAgICAgICAgb25Nb3ZlOiBmdW5jdGlvbiBvbk1vdmUodGFyZ2V0LCBhZnRlcikge1xuICAgICAgICAgIHJldHVybiBfb25Nb3ZlKHJvb3RFbCwgZWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldCwgZ2V0UmVjdCh0YXJnZXQpLCBldnQsIGFmdGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2hhbmdlZDogY2hhbmdlZFxuICAgICAgfSwgZXh0cmEpKTtcbiAgICB9XG5cbiAgICAvLyBDYXB0dXJlIGFuaW1hdGlvbiBzdGF0ZVxuICAgIGZ1bmN0aW9uIGNhcHR1cmUoKSB7XG4gICAgICBkcmFnT3ZlckV2ZW50KCdkcmFnT3ZlckFuaW1hdGlvbkNhcHR1cmUnKTtcbiAgICAgIF90aGlzLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgICAgaWYgKF90aGlzICE9PSBmcm9tU29ydGFibGUpIHtcbiAgICAgICAgZnJvbVNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBpbnZvY2F0aW9uIHdoZW4gZHJhZ0VsIGlzIGluc2VydGVkIChvciBjb21wbGV0ZWQpXG4gICAgZnVuY3Rpb24gY29tcGxldGVkKGluc2VydGlvbikge1xuICAgICAgZHJhZ092ZXJFdmVudCgnZHJhZ092ZXJDb21wbGV0ZWQnLCB7XG4gICAgICAgIGluc2VydGlvbjogaW5zZXJ0aW9uXG4gICAgICB9KTtcbiAgICAgIGlmIChpbnNlcnRpb24pIHtcbiAgICAgICAgLy8gQ2xvbmVzIG11c3QgYmUgaGlkZGVuIGJlZm9yZSBmb2xkaW5nIGFuaW1hdGlvbiB0byBjYXB0dXJlIGRyYWdSZWN0QWJzb2x1dGUgcHJvcGVybHlcbiAgICAgICAgaWYgKGlzT3duZXIpIHtcbiAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5faGlkZUNsb25lKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWN0aXZlU29ydGFibGUuX3Nob3dDbG9uZShfdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF90aGlzICE9PSBmcm9tU29ydGFibGUpIHtcbiAgICAgICAgICAvLyBTZXQgZ2hvc3QgY2xhc3MgdG8gbmV3IHNvcnRhYmxlJ3MgZ2hvc3QgY2xhc3NcbiAgICAgICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIHB1dFNvcnRhYmxlID8gcHV0U29ydGFibGUub3B0aW9ucy5naG9zdENsYXNzIDogYWN0aXZlU29ydGFibGUub3B0aW9ucy5naG9zdENsYXNzLCBmYWxzZSk7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBvcHRpb25zLmdob3N0Q2xhc3MsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwdXRTb3J0YWJsZSAhPT0gX3RoaXMgJiYgX3RoaXMgIT09IFNvcnRhYmxlLmFjdGl2ZSkge1xuICAgICAgICAgIHB1dFNvcnRhYmxlID0gX3RoaXM7XG4gICAgICAgIH0gZWxzZSBpZiAoX3RoaXMgPT09IFNvcnRhYmxlLmFjdGl2ZSAmJiBwdXRTb3J0YWJsZSkge1xuICAgICAgICAgIHB1dFNvcnRhYmxlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFuaW1hdGlvblxuICAgICAgICBpZiAoZnJvbVNvcnRhYmxlID09PSBfdGhpcykge1xuICAgICAgICAgIF90aGlzLl9pZ25vcmVXaGlsZUFuaW1hdGluZyA9IHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5hbmltYXRlQWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkcmFnT3ZlckV2ZW50KCdkcmFnT3ZlckFuaW1hdGlvbkNvbXBsZXRlJyk7XG4gICAgICAgICAgX3RoaXMuX2lnbm9yZVdoaWxlQW5pbWF0aW5nID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChfdGhpcyAhPT0gZnJvbVNvcnRhYmxlKSB7XG4gICAgICAgICAgZnJvbVNvcnRhYmxlLmFuaW1hdGVBbGwoKTtcbiAgICAgICAgICBmcm9tU29ydGFibGUuX2lnbm9yZVdoaWxlQW5pbWF0aW5nID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBOdWxsIGxhc3RUYXJnZXQgaWYgaXQgaXMgbm90IGluc2lkZSBhIHByZXZpb3VzbHkgc3dhcHBlZCBlbGVtZW50XG4gICAgICBpZiAodGFyZ2V0ID09PSBkcmFnRWwgJiYgIWRyYWdFbC5hbmltYXRlZCB8fCB0YXJnZXQgPT09IGVsICYmICF0YXJnZXQuYW5pbWF0ZWQpIHtcbiAgICAgICAgbGFzdFRhcmdldCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIG5vIGJ1YmJsaW5nIGFuZCBub3QgZmFsbGJhY2tcbiAgICAgIGlmICghb3B0aW9ucy5kcmFnb3ZlckJ1YmJsZSAmJiAhZXZ0LnJvb3RFbCAmJiB0YXJnZXQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgIGRyYWdFbC5wYXJlbnROb2RlW2V4cGFuZG9dLl9pc091dHNpZGVUaGlzRWwoZXZ0LnRhcmdldCk7XG5cbiAgICAgICAgLy8gRG8gbm90IGRldGVjdCBmb3IgZW1wdHkgaW5zZXJ0IGlmIGFscmVhZHkgaW5zZXJ0ZWRcbiAgICAgICAgIWluc2VydGlvbiAmJiBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudChldnQpO1xuICAgICAgfVxuICAgICAgIW9wdGlvbnMuZHJhZ292ZXJCdWJibGUgJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbiAmJiBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm4gY29tcGxldGVkRmlyZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIENhbGwgd2hlbiBkcmFnRWwgaGFzIGJlZW4gaW5zZXJ0ZWRcbiAgICBmdW5jdGlvbiBjaGFuZ2VkKCkge1xuICAgICAgbmV3SW5kZXggPSBpbmRleChkcmFnRWwpO1xuICAgICAgbmV3RHJhZ2dhYmxlSW5kZXggPSBpbmRleChkcmFnRWwsIG9wdGlvbnMuZHJhZ2dhYmxlKTtcbiAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgc29ydGFibGU6IF90aGlzLFxuICAgICAgICBuYW1lOiAnY2hhbmdlJyxcbiAgICAgICAgdG9FbDogZWwsXG4gICAgICAgIG5ld0luZGV4OiBuZXdJbmRleCxcbiAgICAgICAgbmV3RHJhZ2dhYmxlSW5kZXg6IG5ld0RyYWdnYWJsZUluZGV4LFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZXZ0LnByZXZlbnREZWZhdWx0ICE9PSB2b2lkIDApIHtcbiAgICAgIGV2dC5jYW5jZWxhYmxlICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICB0YXJnZXQgPSBjbG9zZXN0KHRhcmdldCwgb3B0aW9ucy5kcmFnZ2FibGUsIGVsLCB0cnVlKTtcbiAgICBkcmFnT3ZlckV2ZW50KCdkcmFnT3ZlcicpO1xuICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSByZXR1cm4gY29tcGxldGVkRmlyZWQ7XG4gICAgaWYgKGRyYWdFbC5jb250YWlucyhldnQudGFyZ2V0KSB8fCB0YXJnZXQuYW5pbWF0ZWQgJiYgdGFyZ2V0LmFuaW1hdGluZ1ggJiYgdGFyZ2V0LmFuaW1hdGluZ1kgfHwgX3RoaXMuX2lnbm9yZVdoaWxlQW5pbWF0aW5nID09PSB0YXJnZXQpIHtcbiAgICAgIHJldHVybiBjb21wbGV0ZWQoZmFsc2UpO1xuICAgIH1cbiAgICBpZ25vcmVOZXh0Q2xpY2sgPSBmYWxzZTtcbiAgICBpZiAoYWN0aXZlU29ydGFibGUgJiYgIW9wdGlvbnMuZGlzYWJsZWQgJiYgKGlzT3duZXIgPyBjYW5Tb3J0IHx8IChyZXZlcnQgPSBwYXJlbnRFbCAhPT0gcm9vdEVsKSAvLyBSZXZlcnRpbmcgaXRlbSBpbnRvIHRoZSBvcmlnaW5hbCBsaXN0XG4gICAgOiBwdXRTb3J0YWJsZSA9PT0gdGhpcyB8fCAodGhpcy5sYXN0UHV0TW9kZSA9IGFjdGl2ZUdyb3VwLmNoZWNrUHVsbCh0aGlzLCBhY3RpdmVTb3J0YWJsZSwgZHJhZ0VsLCBldnQpKSAmJiBncm91cC5jaGVja1B1dCh0aGlzLCBhY3RpdmVTb3J0YWJsZSwgZHJhZ0VsLCBldnQpKSkge1xuICAgICAgdmVydGljYWwgPSB0aGlzLl9nZXREaXJlY3Rpb24oZXZ0LCB0YXJnZXQpID09PSAndmVydGljYWwnO1xuICAgICAgZHJhZ1JlY3QgPSBnZXRSZWN0KGRyYWdFbCk7XG4gICAgICBkcmFnT3ZlckV2ZW50KCdkcmFnT3ZlclZhbGlkJyk7XG4gICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkgcmV0dXJuIGNvbXBsZXRlZEZpcmVkO1xuICAgICAgaWYgKHJldmVydCkge1xuICAgICAgICBwYXJlbnRFbCA9IHJvb3RFbDsgLy8gYWN0dWFsaXphdGlvblxuICAgICAgICBjYXB0dXJlKCk7XG4gICAgICAgIHRoaXMuX2hpZGVDbG9uZSgpO1xuICAgICAgICBkcmFnT3ZlckV2ZW50KCdyZXZlcnQnKTtcbiAgICAgICAgaWYgKCFTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICAgICAgaWYgKG5leHRFbCkge1xuICAgICAgICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShkcmFnRWwsIG5leHRFbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChkcmFnRWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcGxldGVkKHRydWUpO1xuICAgICAgfVxuICAgICAgdmFyIGVsTGFzdENoaWxkID0gbGFzdENoaWxkKGVsLCBvcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgICBpZiAoIWVsTGFzdENoaWxkIHx8IF9naG9zdElzTGFzdChldnQsIHZlcnRpY2FsLCB0aGlzKSAmJiAhZWxMYXN0Q2hpbGQuYW5pbWF0ZWQpIHtcbiAgICAgICAgLy8gSW5zZXJ0IHRvIGVuZCBvZiBsaXN0XG5cbiAgICAgICAgLy8gSWYgYWxyZWFkeSBhdCBlbmQgb2YgbGlzdDogRG8gbm90IGluc2VydFxuICAgICAgICBpZiAoZWxMYXN0Q2hpbGQgPT09IGRyYWdFbCkge1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBsYXN0IGVsZW1lbnQsIGl0IGlzIHRoZSB0YXJnZXRcbiAgICAgICAgaWYgKGVsTGFzdENoaWxkICYmIGVsID09PSBldnQudGFyZ2V0KSB7XG4gICAgICAgICAgdGFyZ2V0ID0gZWxMYXN0Q2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgIHRhcmdldFJlY3QgPSBnZXRSZWN0KHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9vbk1vdmUocm9vdEVsLCBlbCwgZHJhZ0VsLCBkcmFnUmVjdCwgdGFyZ2V0LCB0YXJnZXRSZWN0LCBldnQsICEhdGFyZ2V0KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBjYXB0dXJlKCk7XG4gICAgICAgICAgaWYgKGVsTGFzdENoaWxkICYmIGVsTGFzdENoaWxkLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAvLyB0aGUgbGFzdCBkcmFnZ2FibGUgZWxlbWVudCBpcyBub3QgdGhlIGxhc3Qgbm9kZVxuICAgICAgICAgICAgZWwuaW5zZXJ0QmVmb3JlKGRyYWdFbCwgZWxMYXN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChkcmFnRWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJlbnRFbCA9IGVsOyAvLyBhY3R1YWxpemF0aW9uXG5cbiAgICAgICAgICBjaGFuZ2VkKCk7XG4gICAgICAgICAgcmV0dXJuIGNvbXBsZXRlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbExhc3RDaGlsZCAmJiBfZ2hvc3RJc0ZpcnN0KGV2dCwgdmVydGljYWwsIHRoaXMpKSB7XG4gICAgICAgIC8vIEluc2VydCB0byBzdGFydCBvZiBsaXN0XG4gICAgICAgIHZhciBmaXJzdENoaWxkID0gZ2V0Q2hpbGQoZWwsIDAsIG9wdGlvbnMsIHRydWUpO1xuICAgICAgICBpZiAoZmlyc3RDaGlsZCA9PT0gZHJhZ0VsKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0ID0gZmlyc3RDaGlsZDtcbiAgICAgICAgdGFyZ2V0UmVjdCA9IGdldFJlY3QodGFyZ2V0KTtcbiAgICAgICAgaWYgKF9vbk1vdmUocm9vdEVsLCBlbCwgZHJhZ0VsLCBkcmFnUmVjdCwgdGFyZ2V0LCB0YXJnZXRSZWN0LCBldnQsIGZhbHNlKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBjYXB0dXJlKCk7XG4gICAgICAgICAgZWwuaW5zZXJ0QmVmb3JlKGRyYWdFbCwgZmlyc3RDaGlsZCk7XG4gICAgICAgICAgcGFyZW50RWwgPSBlbDsgLy8gYWN0dWFsaXphdGlvblxuXG4gICAgICAgICAgY2hhbmdlZCgpO1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LnBhcmVudE5vZGUgPT09IGVsKSB7XG4gICAgICAgIHRhcmdldFJlY3QgPSBnZXRSZWN0KHRhcmdldCk7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSAwLFxuICAgICAgICAgIHRhcmdldEJlZm9yZUZpcnN0U3dhcCxcbiAgICAgICAgICBkaWZmZXJlbnRMZXZlbCA9IGRyYWdFbC5wYXJlbnROb2RlICE9PSBlbCxcbiAgICAgICAgICBkaWZmZXJlbnRSb3dDb2wgPSAhX2RyYWdFbEluUm93Q29sdW1uKGRyYWdFbC5hbmltYXRlZCAmJiBkcmFnRWwudG9SZWN0IHx8IGRyYWdSZWN0LCB0YXJnZXQuYW5pbWF0ZWQgJiYgdGFyZ2V0LnRvUmVjdCB8fCB0YXJnZXRSZWN0LCB2ZXJ0aWNhbCksXG4gICAgICAgICAgc2lkZTEgPSB2ZXJ0aWNhbCA/ICd0b3AnIDogJ2xlZnQnLFxuICAgICAgICAgIHNjcm9sbGVkUGFzdFRvcCA9IGlzU2Nyb2xsZWRQYXN0KHRhcmdldCwgJ3RvcCcsICd0b3AnKSB8fCBpc1Njcm9sbGVkUGFzdChkcmFnRWwsICd0b3AnLCAndG9wJyksXG4gICAgICAgICAgc2Nyb2xsQmVmb3JlID0gc2Nyb2xsZWRQYXN0VG9wID8gc2Nyb2xsZWRQYXN0VG9wLnNjcm9sbFRvcCA6IHZvaWQgMDtcbiAgICAgICAgaWYgKGxhc3RUYXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgICAgIHRhcmdldEJlZm9yZUZpcnN0U3dhcCA9IHRhcmdldFJlY3Rbc2lkZTFdO1xuICAgICAgICAgIHBhc3RGaXJzdEludmVydFRocmVzaCA9IGZhbHNlO1xuICAgICAgICAgIGlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQgPSAhZGlmZmVyZW50Um93Q29sICYmIG9wdGlvbnMuaW52ZXJ0U3dhcCB8fCBkaWZmZXJlbnRMZXZlbDtcbiAgICAgICAgfVxuICAgICAgICBkaXJlY3Rpb24gPSBfZ2V0U3dhcERpcmVjdGlvbihldnQsIHRhcmdldCwgdGFyZ2V0UmVjdCwgdmVydGljYWwsIGRpZmZlcmVudFJvd0NvbCA/IDEgOiBvcHRpb25zLnN3YXBUaHJlc2hvbGQsIG9wdGlvbnMuaW52ZXJ0ZWRTd2FwVGhyZXNob2xkID09IG51bGwgPyBvcHRpb25zLnN3YXBUaHJlc2hvbGQgOiBvcHRpb25zLmludmVydGVkU3dhcFRocmVzaG9sZCwgaXNDaXJjdW1zdGFudGlhbEludmVydCwgbGFzdFRhcmdldCA9PT0gdGFyZ2V0KTtcbiAgICAgICAgdmFyIHNpYmxpbmc7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gIT09IDApIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiB0YXJnZXQgaXMgYmVzaWRlIGRyYWdFbCBpbiByZXNwZWN0aXZlIGRpcmVjdGlvbiAoaWdub3JpbmcgaGlkZGVuIGVsZW1lbnRzKVxuICAgICAgICAgIHZhciBkcmFnSW5kZXggPSBpbmRleChkcmFnRWwpO1xuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIGRyYWdJbmRleCAtPSBkaXJlY3Rpb247XG4gICAgICAgICAgICBzaWJsaW5nID0gcGFyZW50RWwuY2hpbGRyZW5bZHJhZ0luZGV4XTtcbiAgICAgICAgICB9IHdoaWxlIChzaWJsaW5nICYmIChjc3Moc2libGluZywgJ2Rpc3BsYXknKSA9PT0gJ25vbmUnIHx8IHNpYmxpbmcgPT09IGdob3N0RWwpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBkcmFnRWwgaXMgYWxyZWFkeSBiZXNpZGUgdGFyZ2V0OiBEbyBub3QgaW5zZXJ0XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDAgfHwgc2libGluZyA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdFRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgbGFzdERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgdmFyIG5leHRTaWJsaW5nID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZyxcbiAgICAgICAgICBhZnRlciA9IGZhbHNlO1xuICAgICAgICBhZnRlciA9IGRpcmVjdGlvbiA9PT0gMTtcbiAgICAgICAgdmFyIG1vdmVWZWN0b3IgPSBfb25Nb3ZlKHJvb3RFbCwgZWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldCwgdGFyZ2V0UmVjdCwgZXZ0LCBhZnRlcik7XG4gICAgICAgIGlmIChtb3ZlVmVjdG9yICE9PSBmYWxzZSkge1xuICAgICAgICAgIGlmIChtb3ZlVmVjdG9yID09PSAxIHx8IG1vdmVWZWN0b3IgPT09IC0xKSB7XG4gICAgICAgICAgICBhZnRlciA9IG1vdmVWZWN0b3IgPT09IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIF9zaWxlbnQgPSB0cnVlO1xuICAgICAgICAgIHNldFRpbWVvdXQoX3Vuc2lsZW50LCAzMCk7XG4gICAgICAgICAgY2FwdHVyZSgpO1xuICAgICAgICAgIGlmIChhZnRlciAmJiAhbmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGRyYWdFbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkcmFnRWwsIGFmdGVyID8gbmV4dFNpYmxpbmcgOiB0YXJnZXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFVuZG8gY2hyb21lJ3Mgc2Nyb2xsIGFkanVzdG1lbnQgKGhhcyBubyBlZmZlY3Qgb24gb3RoZXIgYnJvd3NlcnMpXG4gICAgICAgICAgaWYgKHNjcm9sbGVkUGFzdFRvcCkge1xuICAgICAgICAgICAgc2Nyb2xsQnkoc2Nyb2xsZWRQYXN0VG9wLCAwLCBzY3JvbGxCZWZvcmUgLSBzY3JvbGxlZFBhc3RUb3Auc2Nyb2xsVG9wKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyZW50RWwgPSBkcmFnRWwucGFyZW50Tm9kZTsgLy8gYWN0dWFsaXphdGlvblxuXG4gICAgICAgICAgLy8gbXVzdCBiZSBkb25lIGJlZm9yZSBhbmltYXRpb25cbiAgICAgICAgICBpZiAodGFyZ2V0QmVmb3JlRmlyc3RTd2FwICE9PSB1bmRlZmluZWQgJiYgIWlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQpIHtcbiAgICAgICAgICAgIHRhcmdldE1vdmVEaXN0YW5jZSA9IE1hdGguYWJzKHRhcmdldEJlZm9yZUZpcnN0U3dhcCAtIGdldFJlY3QodGFyZ2V0KVtzaWRlMV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjaGFuZ2VkKCk7XG4gICAgICAgICAgcmV0dXJuIGNvbXBsZXRlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGVsLmNvbnRhaW5zKGRyYWdFbCkpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgX2lnbm9yZVdoaWxlQW5pbWF0aW5nOiBudWxsLFxuICBfb2ZmTW92ZUV2ZW50czogZnVuY3Rpb24gX29mZk1vdmVFdmVudHMoKSB7XG4gICAgb2ZmKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgIG9mZihkb2N1bWVudCwgJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICBvZmYoZG9jdW1lbnQsICdwb2ludGVybW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICBvZmYoZG9jdW1lbnQsICdkcmFnb3ZlcicsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgICBvZmYoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gICAgb2ZmKGRvY3VtZW50LCAndG91Y2htb3ZlJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICB9LFxuICBfb2ZmVXBFdmVudHM6IGZ1bmN0aW9uIF9vZmZVcEV2ZW50cygpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IHRoaXMuZWwub3duZXJEb2N1bWVudDtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLl9vbkRyb3ApO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAndG91Y2hlbmQnLCB0aGlzLl9vbkRyb3ApO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAncG9pbnRlcnVwJywgdGhpcy5fb25Ecm9wKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgdGhpcy5fb25Ecm9wKTtcbiAgICBvZmYoZG9jdW1lbnQsICdzZWxlY3RzdGFydCcsIHRoaXMpO1xuICB9LFxuICBfb25Ecm9wOiBmdW5jdGlvbiBfb25Ecm9wKCAvKipFdmVudCovZXZ0KSB7XG4gICAgdmFyIGVsID0gdGhpcy5lbCxcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAvLyBHZXQgdGhlIGluZGV4IG9mIHRoZSBkcmFnZ2VkIGVsZW1lbnQgd2l0aGluIGl0cyBwYXJlbnRcbiAgICBuZXdJbmRleCA9IGluZGV4KGRyYWdFbCk7XG4gICAgbmV3RHJhZ2dhYmxlSW5kZXggPSBpbmRleChkcmFnRWwsIG9wdGlvbnMuZHJhZ2dhYmxlKTtcbiAgICBwbHVnaW5FdmVudCgnZHJvcCcsIHRoaXMsIHtcbiAgICAgIGV2dDogZXZ0XG4gICAgfSk7XG4gICAgcGFyZW50RWwgPSBkcmFnRWwgJiYgZHJhZ0VsLnBhcmVudE5vZGU7XG5cbiAgICAvLyBHZXQgYWdhaW4gYWZ0ZXIgcGx1Z2luIGV2ZW50XG4gICAgbmV3SW5kZXggPSBpbmRleChkcmFnRWwpO1xuICAgIG5ld0RyYWdnYWJsZUluZGV4ID0gaW5kZXgoZHJhZ0VsLCBvcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgIHRoaXMuX251bGxpbmcoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXRpbmdEcmFnU3RhcnRlZCA9IGZhbHNlO1xuICAgIGlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQgPSBmYWxzZTtcbiAgICBwYXN0Rmlyc3RJbnZlcnRUaHJlc2ggPSBmYWxzZTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2xvb3BJZCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RyYWdTdGFydFRpbWVyKTtcbiAgICBfY2FuY2VsTmV4dFRpY2sodGhpcy5jbG9uZUlkKTtcbiAgICBfY2FuY2VsTmV4dFRpY2sodGhpcy5fZHJhZ1N0YXJ0SWQpO1xuXG4gICAgLy8gVW5iaW5kIGV2ZW50c1xuICAgIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgb2ZmKGRvY3VtZW50LCAnZHJvcCcsIHRoaXMpO1xuICAgICAgb2ZmKGVsLCAnZHJhZ3N0YXJ0JywgdGhpcy5fb25EcmFnU3RhcnQpO1xuICAgIH1cbiAgICB0aGlzLl9vZmZNb3ZlRXZlbnRzKCk7XG4gICAgdGhpcy5fb2ZmVXBFdmVudHMoKTtcbiAgICBpZiAoU2FmYXJpKSB7XG4gICAgICBjc3MoZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0JywgJycpO1xuICAgIH1cbiAgICBjc3MoZHJhZ0VsLCAndHJhbnNmb3JtJywgJycpO1xuICAgIGlmIChldnQpIHtcbiAgICAgIGlmIChtb3ZlZCkge1xuICAgICAgICBldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgIW9wdGlvbnMuZHJvcEJ1YmJsZSAmJiBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgICBnaG9zdEVsICYmIGdob3N0RWwucGFyZW50Tm9kZSAmJiBnaG9zdEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ2hvc3RFbCk7XG4gICAgICBpZiAocm9vdEVsID09PSBwYXJlbnRFbCB8fCBwdXRTb3J0YWJsZSAmJiBwdXRTb3J0YWJsZS5sYXN0UHV0TW9kZSAhPT0gJ2Nsb25lJykge1xuICAgICAgICAvLyBSZW1vdmUgY2xvbmUocylcbiAgICAgICAgY2xvbmVFbCAmJiBjbG9uZUVsLnBhcmVudE5vZGUgJiYgY2xvbmVFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNsb25lRWwpO1xuICAgICAgfVxuICAgICAgaWYgKGRyYWdFbCkge1xuICAgICAgICBpZiAodGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgICAgICBvZmYoZHJhZ0VsLCAnZHJhZ2VuZCcsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIF9kaXNhYmxlRHJhZ2dhYmxlKGRyYWdFbCk7XG4gICAgICAgIGRyYWdFbC5zdHlsZVsnd2lsbC1jaGFuZ2UnXSA9ICcnO1xuXG4gICAgICAgIC8vIFJlbW92ZSBjbGFzc2VzXG4gICAgICAgIC8vIGdob3N0Q2xhc3MgaXMgYWRkZWQgaW4gZHJhZ1N0YXJ0ZWRcbiAgICAgICAgaWYgKG1vdmVkICYmICFhd2FpdGluZ0RyYWdTdGFydGVkKSB7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBwdXRTb3J0YWJsZSA/IHB1dFNvcnRhYmxlLm9wdGlvbnMuZ2hvc3RDbGFzcyA6IHRoaXMub3B0aW9ucy5naG9zdENsYXNzLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCB0aGlzLm9wdGlvbnMuY2hvc2VuQ2xhc3MsIGZhbHNlKTtcblxuICAgICAgICAvLyBEcmFnIHN0b3AgZXZlbnRcbiAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICAgIG5hbWU6ICd1bmNob29zZScsXG4gICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgbmV3SW5kZXg6IG51bGwsXG4gICAgICAgICAgbmV3RHJhZ2dhYmxlSW5kZXg6IG51bGwsXG4gICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocm9vdEVsICE9PSBwYXJlbnRFbCkge1xuICAgICAgICAgIGlmIChuZXdJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAvLyBBZGQgZXZlbnRcbiAgICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgcm9vdEVsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgbmFtZTogJ2FkZCcsXG4gICAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICBmcm9tRWw6IHJvb3RFbCxcbiAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGV2ZW50XG4gICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICAgICAgICBuYW1lOiAncmVtb3ZlJyxcbiAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGRyYWcgZnJvbSBvbmUgbGlzdCBhbmQgZHJvcCBpbnRvIGFub3RoZXJcbiAgICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgcm9vdEVsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgbmFtZTogJ3NvcnQnLFxuICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgZnJvbUVsOiByb290RWwsXG4gICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICAgICAgICBuYW1lOiAnc29ydCcsXG4gICAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwdXRTb3J0YWJsZSAmJiBwdXRTb3J0YWJsZS5zYXZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG5ld0luZGV4ICE9PSBvbGRJbmRleCkge1xuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgLy8gZHJhZyAmIGRyb3Agd2l0aGluIHRoZSBzYW1lIGxpc3RcbiAgICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICAgICAgICAgIG5hbWU6ICd1cGRhdGUnLFxuICAgICAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdzb3J0JyxcbiAgICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChTb3J0YWJsZS5hY3RpdmUpIHtcbiAgICAgICAgICAvKiBqc2hpbnQgZXFudWxsOnRydWUgKi9cbiAgICAgICAgICBpZiAobmV3SW5kZXggPT0gbnVsbCB8fCBuZXdJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIG5ld0luZGV4ID0gb2xkSW5kZXg7XG4gICAgICAgICAgICBuZXdEcmFnZ2FibGVJbmRleCA9IG9sZERyYWdnYWJsZUluZGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgIG5hbWU6ICdlbmQnLFxuICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIFNhdmUgc29ydGluZ1xuICAgICAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX251bGxpbmcoKTtcbiAgfSxcbiAgX251bGxpbmc6IGZ1bmN0aW9uIF9udWxsaW5nKCkge1xuICAgIHBsdWdpbkV2ZW50KCdudWxsaW5nJywgdGhpcyk7XG4gICAgcm9vdEVsID0gZHJhZ0VsID0gcGFyZW50RWwgPSBnaG9zdEVsID0gbmV4dEVsID0gY2xvbmVFbCA9IGxhc3REb3duRWwgPSBjbG9uZUhpZGRlbiA9IHRhcEV2dCA9IHRvdWNoRXZ0ID0gbW92ZWQgPSBuZXdJbmRleCA9IG5ld0RyYWdnYWJsZUluZGV4ID0gb2xkSW5kZXggPSBvbGREcmFnZ2FibGVJbmRleCA9IGxhc3RUYXJnZXQgPSBsYXN0RGlyZWN0aW9uID0gcHV0U29ydGFibGUgPSBhY3RpdmVHcm91cCA9IFNvcnRhYmxlLmRyYWdnZWQgPSBTb3J0YWJsZS5naG9zdCA9IFNvcnRhYmxlLmNsb25lID0gU29ydGFibGUuYWN0aXZlID0gbnVsbDtcbiAgICBzYXZlZElucHV0Q2hlY2tlZC5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgZWwuY2hlY2tlZCA9IHRydWU7XG4gICAgfSk7XG4gICAgc2F2ZWRJbnB1dENoZWNrZWQubGVuZ3RoID0gbGFzdER4ID0gbGFzdER5ID0gMDtcbiAgfSxcbiAgaGFuZGxlRXZlbnQ6IGZ1bmN0aW9uIGhhbmRsZUV2ZW50KCAvKipFdmVudCovZXZ0KSB7XG4gICAgc3dpdGNoIChldnQudHlwZSkge1xuICAgICAgY2FzZSAnZHJvcCc6XG4gICAgICBjYXNlICdkcmFnZW5kJzpcbiAgICAgICAgdGhpcy5fb25Ecm9wKGV2dCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZHJhZ2VudGVyJzpcbiAgICAgIGNhc2UgJ2RyYWdvdmVyJzpcbiAgICAgICAgaWYgKGRyYWdFbCkge1xuICAgICAgICAgIHRoaXMuX29uRHJhZ092ZXIoZXZ0KTtcbiAgICAgICAgICBfZ2xvYmFsRHJhZ092ZXIoZXZ0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NlbGVjdHN0YXJ0JzpcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSxcbiAgLyoqXHJcbiAgICogU2VyaWFsaXplcyB0aGUgaXRlbSBpbnRvIGFuIGFycmF5IG9mIHN0cmluZy5cclxuICAgKiBAcmV0dXJucyB7U3RyaW5nW119XHJcbiAgICovXG4gIHRvQXJyYXk6IGZ1bmN0aW9uIHRvQXJyYXkoKSB7XG4gICAgdmFyIG9yZGVyID0gW10sXG4gICAgICBlbCxcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5lbC5jaGlsZHJlbixcbiAgICAgIGkgPSAwLFxuICAgICAgbiA9IGNoaWxkcmVuLmxlbmd0aCxcbiAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgIGVsID0gY2hpbGRyZW5baV07XG4gICAgICBpZiAoY2xvc2VzdChlbCwgb3B0aW9ucy5kcmFnZ2FibGUsIHRoaXMuZWwsIGZhbHNlKSkge1xuICAgICAgICBvcmRlci5wdXNoKGVsLmdldEF0dHJpYnV0ZShvcHRpb25zLmRhdGFJZEF0dHIpIHx8IF9nZW5lcmF0ZUlkKGVsKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcmRlcjtcbiAgfSxcbiAgLyoqXHJcbiAgICogU29ydHMgdGhlIGVsZW1lbnRzIGFjY29yZGluZyB0byB0aGUgYXJyYXkuXHJcbiAgICogQHBhcmFtICB7U3RyaW5nW119ICBvcmRlciAgb3JkZXIgb2YgdGhlIGl0ZW1zXHJcbiAgICovXG4gIHNvcnQ6IGZ1bmN0aW9uIHNvcnQob3JkZXIsIHVzZUFuaW1hdGlvbikge1xuICAgIHZhciBpdGVtcyA9IHt9LFxuICAgICAgcm9vdEVsID0gdGhpcy5lbDtcbiAgICB0aGlzLnRvQXJyYXkoKS5mb3JFYWNoKGZ1bmN0aW9uIChpZCwgaSkge1xuICAgICAgdmFyIGVsID0gcm9vdEVsLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNsb3Nlc3QoZWwsIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUsIHJvb3RFbCwgZmFsc2UpKSB7XG4gICAgICAgIGl0ZW1zW2lkXSA9IGVsO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICAgIHVzZUFuaW1hdGlvbiAmJiB0aGlzLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgIG9yZGVyLmZvckVhY2goZnVuY3Rpb24gKGlkKSB7XG4gICAgICBpZiAoaXRlbXNbaWRdKSB7XG4gICAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChpdGVtc1tpZF0pO1xuICAgICAgICByb290RWwuYXBwZW5kQ2hpbGQoaXRlbXNbaWRdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB1c2VBbmltYXRpb24gJiYgdGhpcy5hbmltYXRlQWxsKCk7XG4gIH0sXG4gIC8qKlxyXG4gICAqIFNhdmUgdGhlIGN1cnJlbnQgc29ydGluZ1xyXG4gICAqL1xuICBzYXZlOiBmdW5jdGlvbiBzYXZlKCkge1xuICAgIHZhciBzdG9yZSA9IHRoaXMub3B0aW9ucy5zdG9yZTtcbiAgICBzdG9yZSAmJiBzdG9yZS5zZXQgJiYgc3RvcmUuc2V0KHRoaXMpO1xuICB9LFxuICAvKipcclxuICAgKiBGb3IgZWFjaCBlbGVtZW50IGluIHRoZSBzZXQsIGdldCB0aGUgZmlyc3QgZWxlbWVudCB0aGF0IG1hdGNoZXMgdGhlIHNlbGVjdG9yIGJ5IHRlc3RpbmcgdGhlIGVsZW1lbnQgaXRzZWxmIGFuZCB0cmF2ZXJzaW5nIHVwIHRocm91Z2ggaXRzIGFuY2VzdG9ycyBpbiB0aGUgRE9NIHRyZWUuXHJcbiAgICogQHBhcmFtICAge0hUTUxFbGVtZW50fSAgZWxcclxuICAgKiBAcGFyYW0gICB7U3RyaW5nfSAgICAgICBbc2VsZWN0b3JdICBkZWZhdWx0OiBgb3B0aW9ucy5kcmFnZ2FibGVgXHJcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fG51bGx9XHJcbiAgICovXG4gIGNsb3Nlc3Q6IGZ1bmN0aW9uIGNsb3Nlc3QkMShlbCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gY2xvc2VzdChlbCwgc2VsZWN0b3IgfHwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSwgdGhpcy5lbCwgZmFsc2UpO1xuICB9LFxuICAvKipcclxuICAgKiBTZXQvZ2V0IG9wdGlvblxyXG4gICAqIEBwYXJhbSAgIHtzdHJpbmd9IG5hbWVcclxuICAgKiBAcGFyYW0gICB7Kn0gICAgICBbdmFsdWVdXHJcbiAgICogQHJldHVybnMgeyp9XHJcbiAgICovXG4gIG9wdGlvbjogZnVuY3Rpb24gb3B0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiBvcHRpb25zW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbW9kaWZpZWRWYWx1ZSA9IFBsdWdpbk1hbmFnZXIubW9kaWZ5T3B0aW9uKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgIGlmICh0eXBlb2YgbW9kaWZpZWRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9uc1tuYW1lXSA9IG1vZGlmaWVkVmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAobmFtZSA9PT0gJ2dyb3VwJykge1xuICAgICAgICBfcHJlcGFyZUdyb3VwKG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLyoqXHJcbiAgICogRGVzdHJveVxyXG4gICAqL1xuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHBsdWdpbkV2ZW50KCdkZXN0cm95JywgdGhpcyk7XG4gICAgdmFyIGVsID0gdGhpcy5lbDtcbiAgICBlbFtleHBhbmRvXSA9IG51bGw7XG4gICAgb2ZmKGVsLCAnbW91c2Vkb3duJywgdGhpcy5fb25UYXBTdGFydCk7XG4gICAgb2ZmKGVsLCAndG91Y2hzdGFydCcsIHRoaXMuX29uVGFwU3RhcnQpO1xuICAgIG9mZihlbCwgJ3BvaW50ZXJkb3duJywgdGhpcy5fb25UYXBTdGFydCk7XG4gICAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICBvZmYoZWwsICdkcmFnb3ZlcicsIHRoaXMpO1xuICAgICAgb2ZmKGVsLCAnZHJhZ2VudGVyJywgdGhpcyk7XG4gICAgfVxuICAgIC8vIFJlbW92ZSBkcmFnZ2FibGUgYXR0cmlidXRlc1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWwucXVlcnlTZWxlY3RvckFsbCgnW2RyYWdnYWJsZV0nKSwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpO1xuICAgIH0pO1xuICAgIHRoaXMuX29uRHJvcCgpO1xuICAgIHRoaXMuX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50cygpO1xuICAgIHNvcnRhYmxlcy5zcGxpY2Uoc29ydGFibGVzLmluZGV4T2YodGhpcy5lbCksIDEpO1xuICAgIHRoaXMuZWwgPSBlbCA9IG51bGw7XG4gIH0sXG4gIF9oaWRlQ2xvbmU6IGZ1bmN0aW9uIF9oaWRlQ2xvbmUoKSB7XG4gICAgaWYgKCFjbG9uZUhpZGRlbikge1xuICAgICAgcGx1Z2luRXZlbnQoJ2hpZGVDbG9uZScsIHRoaXMpO1xuICAgICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHJldHVybjtcbiAgICAgIGNzcyhjbG9uZUVsLCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlICYmIGNsb25lRWwucGFyZW50Tm9kZSkge1xuICAgICAgICBjbG9uZUVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2xvbmVFbCk7XG4gICAgICB9XG4gICAgICBjbG9uZUhpZGRlbiA9IHRydWU7XG4gICAgfVxuICB9LFxuICBfc2hvd0Nsb25lOiBmdW5jdGlvbiBfc2hvd0Nsb25lKHB1dFNvcnRhYmxlKSB7XG4gICAgaWYgKHB1dFNvcnRhYmxlLmxhc3RQdXRNb2RlICE9PSAnY2xvbmUnKSB7XG4gICAgICB0aGlzLl9oaWRlQ2xvbmUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNsb25lSGlkZGVuKSB7XG4gICAgICBwbHVnaW5FdmVudCgnc2hvd0Nsb25lJywgdGhpcyk7XG4gICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkgcmV0dXJuO1xuXG4gICAgICAvLyBzaG93IGNsb25lIGF0IGRyYWdFbCBvciBvcmlnaW5hbCBwb3NpdGlvblxuICAgICAgaWYgKGRyYWdFbC5wYXJlbnROb2RlID09IHJvb3RFbCAmJiAhdGhpcy5vcHRpb25zLmdyb3VwLnJldmVydENsb25lKSB7XG4gICAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUoY2xvbmVFbCwgZHJhZ0VsKTtcbiAgICAgIH0gZWxzZSBpZiAobmV4dEVsKSB7XG4gICAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUoY2xvbmVFbCwgbmV4dEVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChjbG9uZUVsKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZ3JvdXAucmV2ZXJ0Q2xvbmUpIHtcbiAgICAgICAgdGhpcy5hbmltYXRlKGRyYWdFbCwgY2xvbmVFbCk7XG4gICAgICB9XG4gICAgICBjc3MoY2xvbmVFbCwgJ2Rpc3BsYXknLCAnJyk7XG4gICAgICBjbG9uZUhpZGRlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxufTtcbmZ1bmN0aW9uIF9nbG9iYWxEcmFnT3ZlciggLyoqRXZlbnQqL2V2dCkge1xuICBpZiAoZXZ0LmRhdGFUcmFuc2Zlcikge1xuICAgIGV2dC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcbiAgfVxuICBldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbn1cbmZ1bmN0aW9uIF9vbk1vdmUoZnJvbUVsLCB0b0VsLCBkcmFnRWwsIGRyYWdSZWN0LCB0YXJnZXRFbCwgdGFyZ2V0UmVjdCwgb3JpZ2luYWxFdmVudCwgd2lsbEluc2VydEFmdGVyKSB7XG4gIHZhciBldnQsXG4gICAgc29ydGFibGUgPSBmcm9tRWxbZXhwYW5kb10sXG4gICAgb25Nb3ZlRm4gPSBzb3J0YWJsZS5vcHRpb25zLm9uTW92ZSxcbiAgICByZXRWYWw7XG4gIC8vIFN1cHBvcnQgZm9yIG5ldyBDdXN0b21FdmVudCBmZWF0dXJlXG4gIGlmICh3aW5kb3cuQ3VzdG9tRXZlbnQgJiYgIUlFMTFPckxlc3MgJiYgIUVkZ2UpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ21vdmUnLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGV2dC5pbml0RXZlbnQoJ21vdmUnLCB0cnVlLCB0cnVlKTtcbiAgfVxuICBldnQudG8gPSB0b0VsO1xuICBldnQuZnJvbSA9IGZyb21FbDtcbiAgZXZ0LmRyYWdnZWQgPSBkcmFnRWw7XG4gIGV2dC5kcmFnZ2VkUmVjdCA9IGRyYWdSZWN0O1xuICBldnQucmVsYXRlZCA9IHRhcmdldEVsIHx8IHRvRWw7XG4gIGV2dC5yZWxhdGVkUmVjdCA9IHRhcmdldFJlY3QgfHwgZ2V0UmVjdCh0b0VsKTtcbiAgZXZ0LndpbGxJbnNlcnRBZnRlciA9IHdpbGxJbnNlcnRBZnRlcjtcbiAgZXZ0Lm9yaWdpbmFsRXZlbnQgPSBvcmlnaW5hbEV2ZW50O1xuICBmcm9tRWwuZGlzcGF0Y2hFdmVudChldnQpO1xuICBpZiAob25Nb3ZlRm4pIHtcbiAgICByZXRWYWwgPSBvbk1vdmVGbi5jYWxsKHNvcnRhYmxlLCBldnQsIG9yaWdpbmFsRXZlbnQpO1xuICB9XG4gIHJldHVybiByZXRWYWw7XG59XG5mdW5jdGlvbiBfZGlzYWJsZURyYWdnYWJsZShlbCkge1xuICBlbC5kcmFnZ2FibGUgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIF91bnNpbGVudCgpIHtcbiAgX3NpbGVudCA9IGZhbHNlO1xufVxuZnVuY3Rpb24gX2dob3N0SXNGaXJzdChldnQsIHZlcnRpY2FsLCBzb3J0YWJsZSkge1xuICB2YXIgZmlyc3RFbFJlY3QgPSBnZXRSZWN0KGdldENoaWxkKHNvcnRhYmxlLmVsLCAwLCBzb3J0YWJsZS5vcHRpb25zLCB0cnVlKSk7XG4gIHZhciBjaGlsZENvbnRhaW5pbmdSZWN0ID0gZ2V0Q2hpbGRDb250YWluaW5nUmVjdEZyb21FbGVtZW50KHNvcnRhYmxlLmVsLCBzb3J0YWJsZS5vcHRpb25zLCBnaG9zdEVsKTtcbiAgdmFyIHNwYWNlciA9IDEwO1xuICByZXR1cm4gdmVydGljYWwgPyBldnQuY2xpZW50WCA8IGNoaWxkQ29udGFpbmluZ1JlY3QubGVmdCAtIHNwYWNlciB8fCBldnQuY2xpZW50WSA8IGZpcnN0RWxSZWN0LnRvcCAmJiBldnQuY2xpZW50WCA8IGZpcnN0RWxSZWN0LnJpZ2h0IDogZXZ0LmNsaWVudFkgPCBjaGlsZENvbnRhaW5pbmdSZWN0LnRvcCAtIHNwYWNlciB8fCBldnQuY2xpZW50WSA8IGZpcnN0RWxSZWN0LmJvdHRvbSAmJiBldnQuY2xpZW50WCA8IGZpcnN0RWxSZWN0LmxlZnQ7XG59XG5mdW5jdGlvbiBfZ2hvc3RJc0xhc3QoZXZ0LCB2ZXJ0aWNhbCwgc29ydGFibGUpIHtcbiAgdmFyIGxhc3RFbFJlY3QgPSBnZXRSZWN0KGxhc3RDaGlsZChzb3J0YWJsZS5lbCwgc29ydGFibGUub3B0aW9ucy5kcmFnZ2FibGUpKTtcbiAgdmFyIGNoaWxkQ29udGFpbmluZ1JlY3QgPSBnZXRDaGlsZENvbnRhaW5pbmdSZWN0RnJvbUVsZW1lbnQoc29ydGFibGUuZWwsIHNvcnRhYmxlLm9wdGlvbnMsIGdob3N0RWwpO1xuICB2YXIgc3BhY2VyID0gMTA7XG4gIHJldHVybiB2ZXJ0aWNhbCA/IGV2dC5jbGllbnRYID4gY2hpbGRDb250YWluaW5nUmVjdC5yaWdodCArIHNwYWNlciB8fCBldnQuY2xpZW50WSA+IGxhc3RFbFJlY3QuYm90dG9tICYmIGV2dC5jbGllbnRYID4gbGFzdEVsUmVjdC5sZWZ0IDogZXZ0LmNsaWVudFkgPiBjaGlsZENvbnRhaW5pbmdSZWN0LmJvdHRvbSArIHNwYWNlciB8fCBldnQuY2xpZW50WCA+IGxhc3RFbFJlY3QucmlnaHQgJiYgZXZ0LmNsaWVudFkgPiBsYXN0RWxSZWN0LnRvcDtcbn1cbmZ1bmN0aW9uIF9nZXRTd2FwRGlyZWN0aW9uKGV2dCwgdGFyZ2V0LCB0YXJnZXRSZWN0LCB2ZXJ0aWNhbCwgc3dhcFRocmVzaG9sZCwgaW52ZXJ0ZWRTd2FwVGhyZXNob2xkLCBpbnZlcnRTd2FwLCBpc0xhc3RUYXJnZXQpIHtcbiAgdmFyIG1vdXNlT25BeGlzID0gdmVydGljYWwgPyBldnQuY2xpZW50WSA6IGV2dC5jbGllbnRYLFxuICAgIHRhcmdldExlbmd0aCA9IHZlcnRpY2FsID8gdGFyZ2V0UmVjdC5oZWlnaHQgOiB0YXJnZXRSZWN0LndpZHRoLFxuICAgIHRhcmdldFMxID0gdmVydGljYWwgPyB0YXJnZXRSZWN0LnRvcCA6IHRhcmdldFJlY3QubGVmdCxcbiAgICB0YXJnZXRTMiA9IHZlcnRpY2FsID8gdGFyZ2V0UmVjdC5ib3R0b20gOiB0YXJnZXRSZWN0LnJpZ2h0LFxuICAgIGludmVydCA9IGZhbHNlO1xuICBpZiAoIWludmVydFN3YXApIHtcbiAgICAvLyBOZXZlciBpbnZlcnQgb3IgY3JlYXRlIGRyYWdFbCBzaGFkb3cgd2hlbiB0YXJnZXQgbW92ZW1lbmV0IGNhdXNlcyBtb3VzZSB0byBtb3ZlIHBhc3QgdGhlIGVuZCBvZiByZWd1bGFyIHN3YXBUaHJlc2hvbGRcbiAgICBpZiAoaXNMYXN0VGFyZ2V0ICYmIHRhcmdldE1vdmVEaXN0YW5jZSA8IHRhcmdldExlbmd0aCAqIHN3YXBUaHJlc2hvbGQpIHtcbiAgICAgIC8vIG11bHRpcGxpZWQgb25seSBieSBzd2FwVGhyZXNob2xkIGJlY2F1c2UgbW91c2Ugd2lsbCBhbHJlYWR5IGJlIGluc2lkZSB0YXJnZXQgYnkgKDEgLSB0aHJlc2hvbGQpICogdGFyZ2V0TGVuZ3RoIC8gMlxuICAgICAgLy8gY2hlY2sgaWYgcGFzdCBmaXJzdCBpbnZlcnQgdGhyZXNob2xkIG9uIHNpZGUgb3Bwb3NpdGUgb2YgbGFzdERpcmVjdGlvblxuICAgICAgaWYgKCFwYXN0Rmlyc3RJbnZlcnRUaHJlc2ggJiYgKGxhc3REaXJlY3Rpb24gPT09IDEgPyBtb3VzZU9uQXhpcyA+IHRhcmdldFMxICsgdGFyZ2V0TGVuZ3RoICogaW52ZXJ0ZWRTd2FwVGhyZXNob2xkIC8gMiA6IG1vdXNlT25BeGlzIDwgdGFyZ2V0UzIgLSB0YXJnZXRMZW5ndGggKiBpbnZlcnRlZFN3YXBUaHJlc2hvbGQgLyAyKSkge1xuICAgICAgICAvLyBwYXN0IGZpcnN0IGludmVydCB0aHJlc2hvbGQsIGRvIG5vdCByZXN0cmljdCBpbnZlcnRlZCB0aHJlc2hvbGQgdG8gZHJhZ0VsIHNoYWRvd1xuICAgICAgICBwYXN0Rmlyc3RJbnZlcnRUaHJlc2ggPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKCFwYXN0Rmlyc3RJbnZlcnRUaHJlc2gpIHtcbiAgICAgICAgLy8gZHJhZ0VsIHNoYWRvdyAodGFyZ2V0IG1vdmUgZGlzdGFuY2Ugc2hhZG93KVxuICAgICAgICBpZiAobGFzdERpcmVjdGlvbiA9PT0gMSA/IG1vdXNlT25BeGlzIDwgdGFyZ2V0UzEgKyB0YXJnZXRNb3ZlRGlzdGFuY2UgLy8gb3ZlciBkcmFnRWwgc2hhZG93XG4gICAgICAgIDogbW91c2VPbkF4aXMgPiB0YXJnZXRTMiAtIHRhcmdldE1vdmVEaXN0YW5jZSkge1xuICAgICAgICAgIHJldHVybiAtbGFzdERpcmVjdGlvbjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW52ZXJ0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVndWxhclxuICAgICAgaWYgKG1vdXNlT25BeGlzID4gdGFyZ2V0UzEgKyB0YXJnZXRMZW5ndGggKiAoMSAtIHN3YXBUaHJlc2hvbGQpIC8gMiAmJiBtb3VzZU9uQXhpcyA8IHRhcmdldFMyIC0gdGFyZ2V0TGVuZ3RoICogKDEgLSBzd2FwVGhyZXNob2xkKSAvIDIpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRJbnNlcnREaXJlY3Rpb24odGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW52ZXJ0ID0gaW52ZXJ0IHx8IGludmVydFN3YXA7XG4gIGlmIChpbnZlcnQpIHtcbiAgICAvLyBJbnZlcnQgb2YgcmVndWxhclxuICAgIGlmIChtb3VzZU9uQXhpcyA8IHRhcmdldFMxICsgdGFyZ2V0TGVuZ3RoICogaW52ZXJ0ZWRTd2FwVGhyZXNob2xkIC8gMiB8fCBtb3VzZU9uQXhpcyA+IHRhcmdldFMyIC0gdGFyZ2V0TGVuZ3RoICogaW52ZXJ0ZWRTd2FwVGhyZXNob2xkIC8gMikge1xuICAgICAgcmV0dXJuIG1vdXNlT25BeGlzID4gdGFyZ2V0UzEgKyB0YXJnZXRMZW5ndGggLyAyID8gMSA6IC0xO1xuICAgIH1cbiAgfVxuICByZXR1cm4gMDtcbn1cblxuLyoqXHJcbiAqIEdldHMgdGhlIGRpcmVjdGlvbiBkcmFnRWwgbXVzdCBiZSBzd2FwcGVkIHJlbGF0aXZlIHRvIHRhcmdldCBpbiBvcmRlciB0byBtYWtlIGl0XHJcbiAqIHNlZW0gdGhhdCBkcmFnRWwgaGFzIGJlZW4gXCJpbnNlcnRlZFwiIGludG8gdGhhdCBlbGVtZW50J3MgcG9zaXRpb25cclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IHRhcmdldCAgICAgICBUaGUgdGFyZ2V0IHdob3NlIHBvc2l0aW9uIGRyYWdFbCBpcyBiZWluZyBpbnNlcnRlZCBhdFxyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgIERpcmVjdGlvbiBkcmFnRWwgbXVzdCBiZSBzd2FwcGVkXHJcbiAqL1xuZnVuY3Rpb24gX2dldEluc2VydERpcmVjdGlvbih0YXJnZXQpIHtcbiAgaWYgKGluZGV4KGRyYWdFbCkgPCBpbmRleCh0YXJnZXQpKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59XG5cbi8qKlxyXG4gKiBHZW5lcmF0ZSBpZFxyXG4gKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9IGVsXHJcbiAqIEByZXR1cm5zIHtTdHJpbmd9XHJcbiAqIEBwcml2YXRlXHJcbiAqL1xuZnVuY3Rpb24gX2dlbmVyYXRlSWQoZWwpIHtcbiAgdmFyIHN0ciA9IGVsLnRhZ05hbWUgKyBlbC5jbGFzc05hbWUgKyBlbC5zcmMgKyBlbC5ocmVmICsgZWwudGV4dENvbnRlbnQsXG4gICAgaSA9IHN0ci5sZW5ndGgsXG4gICAgc3VtID0gMDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHN1bSArPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gc3VtLnRvU3RyaW5nKDM2KTtcbn1cbmZ1bmN0aW9uIF9zYXZlSW5wdXRDaGVja2VkU3RhdGUocm9vdCkge1xuICBzYXZlZElucHV0Q2hlY2tlZC5sZW5ndGggPSAwO1xuICB2YXIgaW5wdXRzID0gcm9vdC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcbiAgdmFyIGlkeCA9IGlucHV0cy5sZW5ndGg7XG4gIHdoaWxlIChpZHgtLSkge1xuICAgIHZhciBlbCA9IGlucHV0c1tpZHhdO1xuICAgIGVsLmNoZWNrZWQgJiYgc2F2ZWRJbnB1dENoZWNrZWQucHVzaChlbCk7XG4gIH1cbn1cbmZ1bmN0aW9uIF9uZXh0VGljayhmbikge1xuICByZXR1cm4gc2V0VGltZW91dChmbiwgMCk7XG59XG5mdW5jdGlvbiBfY2FuY2VsTmV4dFRpY2soaWQpIHtcbiAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59XG5cbi8vIEZpeGVkICM5NzM6XG5pZiAoZG9jdW1lbnRFeGlzdHMpIHtcbiAgb24oZG9jdW1lbnQsICd0b3VjaG1vdmUnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKChTb3J0YWJsZS5hY3RpdmUgfHwgYXdhaXRpbmdEcmFnU3RhcnRlZCkgJiYgZXZ0LmNhbmNlbGFibGUpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIEV4cG9ydCB1dGlsc1xuU29ydGFibGUudXRpbHMgPSB7XG4gIG9uOiBvbixcbiAgb2ZmOiBvZmYsXG4gIGNzczogY3NzLFxuICBmaW5kOiBmaW5kLFxuICBpczogZnVuY3Rpb24gaXMoZWwsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuICEhY2xvc2VzdChlbCwgc2VsZWN0b3IsIGVsLCBmYWxzZSk7XG4gIH0sXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0aHJvdHRsZTogdGhyb3R0bGUsXG4gIGNsb3Nlc3Q6IGNsb3Nlc3QsXG4gIHRvZ2dsZUNsYXNzOiB0b2dnbGVDbGFzcyxcbiAgY2xvbmU6IGNsb25lLFxuICBpbmRleDogaW5kZXgsXG4gIG5leHRUaWNrOiBfbmV4dFRpY2ssXG4gIGNhbmNlbE5leHRUaWNrOiBfY2FuY2VsTmV4dFRpY2ssXG4gIGRldGVjdERpcmVjdGlvbjogX2RldGVjdERpcmVjdGlvbixcbiAgZ2V0Q2hpbGQ6IGdldENoaWxkLFxuICBleHBhbmRvOiBleHBhbmRvXG59O1xuXG4vKipcclxuICogR2V0IHRoZSBTb3J0YWJsZSBpbnN0YW5jZSBvZiBhbiBlbGVtZW50XHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50XHJcbiAqIEByZXR1cm4ge1NvcnRhYmxlfHVuZGVmaW5lZH0gICAgICAgICBUaGUgaW5zdGFuY2Ugb2YgU29ydGFibGVcclxuICovXG5Tb3J0YWJsZS5nZXQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudFtleHBhbmRvXTtcbn07XG5cbi8qKlxyXG4gKiBNb3VudCBhIHBsdWdpbiB0byBTb3J0YWJsZVxyXG4gKiBAcGFyYW0gIHsuLi5Tb3J0YWJsZVBsdWdpbnxTb3J0YWJsZVBsdWdpbltdfSBwbHVnaW5zICAgICAgIFBsdWdpbnMgYmVpbmcgbW91bnRlZFxyXG4gKi9cblNvcnRhYmxlLm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGx1Z2lucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwbHVnaW5zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG4gIGlmIChwbHVnaW5zWzBdLmNvbnN0cnVjdG9yID09PSBBcnJheSkgcGx1Z2lucyA9IHBsdWdpbnNbMF07XG4gIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgaWYgKCFwbHVnaW4ucHJvdG90eXBlIHx8ICFwbHVnaW4ucHJvdG90eXBlLmNvbnN0cnVjdG9yKSB7XG4gICAgICB0aHJvdyBcIlNvcnRhYmxlOiBNb3VudGVkIHBsdWdpbiBtdXN0IGJlIGEgY29uc3RydWN0b3IgZnVuY3Rpb24sIG5vdCBcIi5jb25jYXQoe30udG9TdHJpbmcuY2FsbChwbHVnaW4pKTtcbiAgICB9XG4gICAgaWYgKHBsdWdpbi51dGlscykgU29ydGFibGUudXRpbHMgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgU29ydGFibGUudXRpbHMpLCBwbHVnaW4udXRpbHMpO1xuICAgIFBsdWdpbk1hbmFnZXIubW91bnQocGx1Z2luKTtcbiAgfSk7XG59O1xuXG4vKipcclxuICogQ3JlYXRlIHNvcnRhYmxlIGluc3RhbmNlXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9ICBlbFxyXG4gKiBAcGFyYW0ge09iamVjdH0gICAgICBbb3B0aW9uc11cclxuICovXG5Tb3J0YWJsZS5jcmVhdGUgPSBmdW5jdGlvbiAoZWwsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBTb3J0YWJsZShlbCwgb3B0aW9ucyk7XG59O1xuXG4vLyBFeHBvcnRcblNvcnRhYmxlLnZlcnNpb24gPSB2ZXJzaW9uO1xuXG52YXIgYXV0b1Njcm9sbHMgPSBbXSxcbiAgc2Nyb2xsRWwsXG4gIHNjcm9sbFJvb3RFbCxcbiAgc2Nyb2xsaW5nID0gZmFsc2UsXG4gIGxhc3RBdXRvU2Nyb2xsWCxcbiAgbGFzdEF1dG9TY3JvbGxZLFxuICB0b3VjaEV2dCQxLFxuICBwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbDtcbmZ1bmN0aW9uIEF1dG9TY3JvbGxQbHVnaW4oKSB7XG4gIGZ1bmN0aW9uIEF1dG9TY3JvbGwoKSB7XG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIGZvcmNlQXV0b1Njcm9sbEZhbGxiYWNrOiBmYWxzZSxcbiAgICAgIHNjcm9sbFNlbnNpdGl2aXR5OiAzMCxcbiAgICAgIHNjcm9sbFNwZWVkOiAxMCxcbiAgICAgIGJ1YmJsZVNjcm9sbDogdHJ1ZVxuICAgIH07XG5cbiAgICAvLyBCaW5kIGFsbCBwcml2YXRlIG1ldGhvZHNcbiAgICBmb3IgKHZhciBmbiBpbiB0aGlzKSB7XG4gICAgICBpZiAoZm4uY2hhckF0KDApID09PSAnXycgJiYgdHlwZW9mIHRoaXNbZm5dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXNbZm5dID0gdGhpc1tmbl0uYmluZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQXV0b1Njcm9sbC5wcm90b3R5cGUgPSB7XG4gICAgZHJhZ1N0YXJ0ZWQ6IGZ1bmN0aW9uIGRyYWdTdGFydGVkKF9yZWYpIHtcbiAgICAgIHZhciBvcmlnaW5hbEV2ZW50ID0gX3JlZi5vcmlnaW5hbEV2ZW50O1xuICAgICAgaWYgKHRoaXMuc29ydGFibGUubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAnZHJhZ292ZXInLCB0aGlzLl9oYW5kbGVBdXRvU2Nyb2xsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3VwcG9ydFBvaW50ZXIpIHtcbiAgICAgICAgICBvbihkb2N1bWVudCwgJ3BvaW50ZXJtb3ZlJywgdGhpcy5faGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsKTtcbiAgICAgICAgfSBlbHNlIGlmIChvcmlnaW5hbEV2ZW50LnRvdWNoZXMpIHtcbiAgICAgICAgICBvbihkb2N1bWVudCwgJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb24oZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBkcmFnT3ZlckNvbXBsZXRlZDogZnVuY3Rpb24gZHJhZ092ZXJDb21wbGV0ZWQoX3JlZjIpIHtcbiAgICAgIHZhciBvcmlnaW5hbEV2ZW50ID0gX3JlZjIub3JpZ2luYWxFdmVudDtcbiAgICAgIC8vIEZvciB3aGVuIGJ1YmJsaW5nIGlzIGNhbmNlbGVkIGFuZCB1c2luZyBmYWxsYmFjayAoZmFsbGJhY2sgJ3RvdWNobW92ZScgYWx3YXlzIHJlYWNoZWQpXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5kcmFnT3ZlckJ1YmJsZSAmJiAhb3JpZ2luYWxFdmVudC5yb290RWwpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlQXV0b1Njcm9sbChvcmlnaW5hbEV2ZW50KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRyb3A6IGZ1bmN0aW9uIGRyb3AoKSB7XG4gICAgICBpZiAodGhpcy5zb3J0YWJsZS5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgICAgb2ZmKGRvY3VtZW50LCAnZHJhZ292ZXInLCB0aGlzLl9oYW5kbGVBdXRvU2Nyb2xsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9mZihkb2N1bWVudCwgJ3BvaW50ZXJtb3ZlJywgdGhpcy5faGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsKTtcbiAgICAgICAgb2ZmKGRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5faGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsKTtcbiAgICAgICAgb2ZmKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgdGhpcy5faGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsKTtcbiAgICAgIH1cbiAgICAgIGNsZWFyUG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwoKTtcbiAgICAgIGNsZWFyQXV0b1Njcm9sbHMoKTtcbiAgICAgIGNhbmNlbFRocm90dGxlKCk7XG4gICAgfSxcbiAgICBudWxsaW5nOiBmdW5jdGlvbiBudWxsaW5nKCkge1xuICAgICAgdG91Y2hFdnQkMSA9IHNjcm9sbFJvb3RFbCA9IHNjcm9sbEVsID0gc2Nyb2xsaW5nID0gcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwgPSBsYXN0QXV0b1Njcm9sbFggPSBsYXN0QXV0b1Njcm9sbFkgPSBudWxsO1xuICAgICAgYXV0b1Njcm9sbHMubGVuZ3RoID0gMDtcbiAgICB9LFxuICAgIF9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGw6IGZ1bmN0aW9uIF9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwoZXZ0KSB7XG4gICAgICB0aGlzLl9oYW5kbGVBdXRvU2Nyb2xsKGV2dCwgdHJ1ZSk7XG4gICAgfSxcbiAgICBfaGFuZGxlQXV0b1Njcm9sbDogZnVuY3Rpb24gX2hhbmRsZUF1dG9TY3JvbGwoZXZ0LCBmYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHZhciB4ID0gKGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQpLmNsaWVudFgsXG4gICAgICAgIHkgPSAoZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXSA6IGV2dCkuY2xpZW50WSxcbiAgICAgICAgZWxlbSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XG4gICAgICB0b3VjaEV2dCQxID0gZXZ0O1xuXG4gICAgICAvLyBJRSBkb2VzIG5vdCBzZWVtIHRvIGhhdmUgbmF0aXZlIGF1dG9zY3JvbGwsXG4gICAgICAvLyBFZGdlJ3MgYXV0b3Njcm9sbCBzZWVtcyB0b28gY29uZGl0aW9uYWwsXG4gICAgICAvLyBNQUNPUyBTYWZhcmkgZG9lcyBub3QgaGF2ZSBhdXRvc2Nyb2xsLFxuICAgICAgLy8gRmlyZWZveCBhbmQgQ2hyb21lIGFyZSBnb29kXG4gICAgICBpZiAoZmFsbGJhY2sgfHwgdGhpcy5vcHRpb25zLmZvcmNlQXV0b1Njcm9sbEZhbGxiYWNrIHx8IEVkZ2UgfHwgSUUxMU9yTGVzcyB8fCBTYWZhcmkpIHtcbiAgICAgICAgYXV0b1Njcm9sbChldnQsIHRoaXMub3B0aW9ucywgZWxlbSwgZmFsbGJhY2spO1xuXG4gICAgICAgIC8vIExpc3RlbmVyIGZvciBwb2ludGVyIGVsZW1lbnQgY2hhbmdlXG4gICAgICAgIHZhciBvZ0VsZW1TY3JvbGxlciA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGVsZW0sIHRydWUpO1xuICAgICAgICBpZiAoc2Nyb2xsaW5nICYmICghcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwgfHwgeCAhPT0gbGFzdEF1dG9TY3JvbGxYIHx8IHkgIT09IGxhc3RBdXRvU2Nyb2xsWSkpIHtcbiAgICAgICAgICBwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCAmJiBjbGVhclBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsKCk7XG4gICAgICAgICAgLy8gRGV0ZWN0IGZvciBwb2ludGVyIGVsZW0gY2hhbmdlLCBlbXVsYXRpbmcgbmF0aXZlIERuRCBiZWhhdmlvdXJcbiAgICAgICAgICBwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBuZXdFbGVtID0gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KSwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAobmV3RWxlbSAhPT0gb2dFbGVtU2Nyb2xsZXIpIHtcbiAgICAgICAgICAgICAgb2dFbGVtU2Nyb2xsZXIgPSBuZXdFbGVtO1xuICAgICAgICAgICAgICBjbGVhckF1dG9TY3JvbGxzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdXRvU2Nyb2xsKGV2dCwgX3RoaXMub3B0aW9ucywgbmV3RWxlbSwgZmFsbGJhY2spO1xuICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICBsYXN0QXV0b1Njcm9sbFggPSB4O1xuICAgICAgICAgIGxhc3RBdXRvU2Nyb2xsWSA9IHk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIERuRCBpcyBlbmFibGVkIChhbmQgYnJvd3NlciBoYXMgZ29vZCBhdXRvc2Nyb2xsaW5nKSwgZmlyc3QgYXV0b3Njcm9sbCB3aWxsIGFscmVhZHkgc2Nyb2xsLCBzbyBnZXQgcGFyZW50IGF1dG9zY3JvbGwgb2YgZmlyc3QgYXV0b3Njcm9sbFxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5idWJibGVTY3JvbGwgfHwgZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZWxlbSwgdHJ1ZSkgPT09IGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKSkge1xuICAgICAgICAgIGNsZWFyQXV0b1Njcm9sbHMoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYXV0b1Njcm9sbChldnQsIHRoaXMub3B0aW9ucywgZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZWxlbSwgZmFsc2UpLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZXR1cm4gX2V4dGVuZHMoQXV0b1Njcm9sbCwge1xuICAgIHBsdWdpbk5hbWU6ICdzY3JvbGwnLFxuICAgIGluaXRpYWxpemVCeURlZmF1bHQ6IHRydWVcbiAgfSk7XG59XG5mdW5jdGlvbiBjbGVhckF1dG9TY3JvbGxzKCkge1xuICBhdXRvU2Nyb2xscy5mb3JFYWNoKGZ1bmN0aW9uIChhdXRvU2Nyb2xsKSB7XG4gICAgY2xlYXJJbnRlcnZhbChhdXRvU2Nyb2xsLnBpZCk7XG4gIH0pO1xuICBhdXRvU2Nyb2xscyA9IFtdO1xufVxuZnVuY3Rpb24gY2xlYXJQb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCgpIHtcbiAgY2xlYXJJbnRlcnZhbChwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCk7XG59XG52YXIgYXV0b1Njcm9sbCA9IHRocm90dGxlKGZ1bmN0aW9uIChldnQsIG9wdGlvbnMsIHJvb3RFbCwgaXNGYWxsYmFjaykge1xuICAvLyBCdWc6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTUwNTUyMVxuICBpZiAoIW9wdGlvbnMuc2Nyb2xsKSByZXR1cm47XG4gIHZhciB4ID0gKGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQpLmNsaWVudFgsXG4gICAgeSA9IChldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0KS5jbGllbnRZLFxuICAgIHNlbnMgPSBvcHRpb25zLnNjcm9sbFNlbnNpdGl2aXR5LFxuICAgIHNwZWVkID0gb3B0aW9ucy5zY3JvbGxTcGVlZCxcbiAgICB3aW5TY3JvbGxlciA9IGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbiAgdmFyIHNjcm9sbFRoaXNJbnN0YW5jZSA9IGZhbHNlLFxuICAgIHNjcm9sbEN1c3RvbUZuO1xuXG4gIC8vIE5ldyBzY3JvbGwgcm9vdCwgc2V0IHNjcm9sbEVsXG4gIGlmIChzY3JvbGxSb290RWwgIT09IHJvb3RFbCkge1xuICAgIHNjcm9sbFJvb3RFbCA9IHJvb3RFbDtcbiAgICBjbGVhckF1dG9TY3JvbGxzKCk7XG4gICAgc2Nyb2xsRWwgPSBvcHRpb25zLnNjcm9sbDtcbiAgICBzY3JvbGxDdXN0b21GbiA9IG9wdGlvbnMuc2Nyb2xsRm47XG4gICAgaWYgKHNjcm9sbEVsID09PSB0cnVlKSB7XG4gICAgICBzY3JvbGxFbCA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KHJvb3RFbCwgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIHZhciBsYXllcnNPdXQgPSAwO1xuICB2YXIgY3VycmVudFBhcmVudCA9IHNjcm9sbEVsO1xuICBkbyB7XG4gICAgdmFyIGVsID0gY3VycmVudFBhcmVudCxcbiAgICAgIHJlY3QgPSBnZXRSZWN0KGVsKSxcbiAgICAgIHRvcCA9IHJlY3QudG9wLFxuICAgICAgYm90dG9tID0gcmVjdC5ib3R0b20sXG4gICAgICBsZWZ0ID0gcmVjdC5sZWZ0LFxuICAgICAgcmlnaHQgPSByZWN0LnJpZ2h0LFxuICAgICAgd2lkdGggPSByZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0ID0gcmVjdC5oZWlnaHQsXG4gICAgICBjYW5TY3JvbGxYID0gdm9pZCAwLFxuICAgICAgY2FuU2Nyb2xsWSA9IHZvaWQgMCxcbiAgICAgIHNjcm9sbFdpZHRoID0gZWwuc2Nyb2xsV2lkdGgsXG4gICAgICBzY3JvbGxIZWlnaHQgPSBlbC5zY3JvbGxIZWlnaHQsXG4gICAgICBlbENTUyA9IGNzcyhlbCksXG4gICAgICBzY3JvbGxQb3NYID0gZWwuc2Nyb2xsTGVmdCxcbiAgICAgIHNjcm9sbFBvc1kgPSBlbC5zY3JvbGxUb3A7XG4gICAgaWYgKGVsID09PSB3aW5TY3JvbGxlcikge1xuICAgICAgY2FuU2Nyb2xsWCA9IHdpZHRoIDwgc2Nyb2xsV2lkdGggJiYgKGVsQ1NTLm92ZXJmbG93WCA9PT0gJ2F1dG8nIHx8IGVsQ1NTLm92ZXJmbG93WCA9PT0gJ3Njcm9sbCcgfHwgZWxDU1Mub3ZlcmZsb3dYID09PSAndmlzaWJsZScpO1xuICAgICAgY2FuU2Nyb2xsWSA9IGhlaWdodCA8IHNjcm9sbEhlaWdodCAmJiAoZWxDU1Mub3ZlcmZsb3dZID09PSAnYXV0bycgfHwgZWxDU1Mub3ZlcmZsb3dZID09PSAnc2Nyb2xsJyB8fCBlbENTUy5vdmVyZmxvd1kgPT09ICd2aXNpYmxlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhblNjcm9sbFggPSB3aWR0aCA8IHNjcm9sbFdpZHRoICYmIChlbENTUy5vdmVyZmxvd1ggPT09ICdhdXRvJyB8fCBlbENTUy5vdmVyZmxvd1ggPT09ICdzY3JvbGwnKTtcbiAgICAgIGNhblNjcm9sbFkgPSBoZWlnaHQgPCBzY3JvbGxIZWlnaHQgJiYgKGVsQ1NTLm92ZXJmbG93WSA9PT0gJ2F1dG8nIHx8IGVsQ1NTLm92ZXJmbG93WSA9PT0gJ3Njcm9sbCcpO1xuICAgIH1cbiAgICB2YXIgdnggPSBjYW5TY3JvbGxYICYmIChNYXRoLmFicyhyaWdodCAtIHgpIDw9IHNlbnMgJiYgc2Nyb2xsUG9zWCArIHdpZHRoIDwgc2Nyb2xsV2lkdGgpIC0gKE1hdGguYWJzKGxlZnQgLSB4KSA8PSBzZW5zICYmICEhc2Nyb2xsUG9zWCk7XG4gICAgdmFyIHZ5ID0gY2FuU2Nyb2xsWSAmJiAoTWF0aC5hYnMoYm90dG9tIC0geSkgPD0gc2VucyAmJiBzY3JvbGxQb3NZICsgaGVpZ2h0IDwgc2Nyb2xsSGVpZ2h0KSAtIChNYXRoLmFicyh0b3AgLSB5KSA8PSBzZW5zICYmICEhc2Nyb2xsUG9zWSk7XG4gICAgaWYgKCFhdXRvU2Nyb2xsc1tsYXllcnNPdXRdKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBsYXllcnNPdXQ7IGkrKykge1xuICAgICAgICBpZiAoIWF1dG9TY3JvbGxzW2ldKSB7XG4gICAgICAgICAgYXV0b1Njcm9sbHNbaV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS52eCAhPSB2eCB8fCBhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLnZ5ICE9IHZ5IHx8IGF1dG9TY3JvbGxzW2xheWVyc091dF0uZWwgIT09IGVsKSB7XG4gICAgICBhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLmVsID0gZWw7XG4gICAgICBhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLnZ4ID0gdng7XG4gICAgICBhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLnZ5ID0gdnk7XG4gICAgICBjbGVhckludGVydmFsKGF1dG9TY3JvbGxzW2xheWVyc091dF0ucGlkKTtcbiAgICAgIGlmICh2eCAhPSAwIHx8IHZ5ICE9IDApIHtcbiAgICAgICAgc2Nyb2xsVGhpc0luc3RhbmNlID0gdHJ1ZTtcbiAgICAgICAgLyoganNoaW50IGxvb3BmdW5jOnRydWUgKi9cbiAgICAgICAgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS5waWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gZW11bGF0ZSBkcmFnIG92ZXIgZHVyaW5nIGF1dG9zY3JvbGwgKGZhbGxiYWNrKSwgZW11bGF0aW5nIG5hdGl2ZSBEbkQgYmVoYXZpb3VyXG4gICAgICAgICAgaWYgKGlzRmFsbGJhY2sgJiYgdGhpcy5sYXllciA9PT0gMCkge1xuICAgICAgICAgICAgU29ydGFibGUuYWN0aXZlLl9vblRvdWNoTW92ZSh0b3VjaEV2dCQxKTsgLy8gVG8gbW92ZSBnaG9zdCBpZiBpdCBpcyBwb3NpdGlvbmVkIGFic29sdXRlbHlcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHNjcm9sbE9mZnNldFkgPSBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS52eSA/IGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLnZ5ICogc3BlZWQgOiAwO1xuICAgICAgICAgIHZhciBzY3JvbGxPZmZzZXRYID0gYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0udnggPyBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS52eCAqIHNwZWVkIDogMDtcbiAgICAgICAgICBpZiAodHlwZW9mIHNjcm9sbEN1c3RvbUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsQ3VzdG9tRm4uY2FsbChTb3J0YWJsZS5kcmFnZ2VkLnBhcmVudE5vZGVbZXhwYW5kb10sIHNjcm9sbE9mZnNldFgsIHNjcm9sbE9mZnNldFksIGV2dCwgdG91Y2hFdnQkMSwgYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0uZWwpICE9PSAnY29udGludWUnKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc2Nyb2xsQnkoYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0uZWwsIHNjcm9sbE9mZnNldFgsIHNjcm9sbE9mZnNldFkpO1xuICAgICAgICB9LmJpbmQoe1xuICAgICAgICAgIGxheWVyOiBsYXllcnNPdXRcbiAgICAgICAgfSksIDI0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGF5ZXJzT3V0Kys7XG4gIH0gd2hpbGUgKG9wdGlvbnMuYnViYmxlU2Nyb2xsICYmIGN1cnJlbnRQYXJlbnQgIT09IHdpblNjcm9sbGVyICYmIChjdXJyZW50UGFyZW50ID0gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoY3VycmVudFBhcmVudCwgZmFsc2UpKSk7XG4gIHNjcm9sbGluZyA9IHNjcm9sbFRoaXNJbnN0YW5jZTsgLy8gaW4gY2FzZSBhbm90aGVyIGZ1bmN0aW9uIGNhdGNoZXMgc2Nyb2xsaW5nIGFzIGZhbHNlIGluIGJldHdlZW4gd2hlbiBpdCBpcyBub3Rcbn0sIDMwKTtcblxudmFyIGRyb3AgPSBmdW5jdGlvbiBkcm9wKF9yZWYpIHtcbiAgdmFyIG9yaWdpbmFsRXZlbnQgPSBfcmVmLm9yaWdpbmFsRXZlbnQsXG4gICAgcHV0U29ydGFibGUgPSBfcmVmLnB1dFNvcnRhYmxlLFxuICAgIGRyYWdFbCA9IF9yZWYuZHJhZ0VsLFxuICAgIGFjdGl2ZVNvcnRhYmxlID0gX3JlZi5hY3RpdmVTb3J0YWJsZSxcbiAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQgPSBfcmVmLmRpc3BhdGNoU29ydGFibGVFdmVudCxcbiAgICBoaWRlR2hvc3RGb3JUYXJnZXQgPSBfcmVmLmhpZGVHaG9zdEZvclRhcmdldCxcbiAgICB1bmhpZGVHaG9zdEZvclRhcmdldCA9IF9yZWYudW5oaWRlR2hvc3RGb3JUYXJnZXQ7XG4gIGlmICghb3JpZ2luYWxFdmVudCkgcmV0dXJuO1xuICB2YXIgdG9Tb3J0YWJsZSA9IHB1dFNvcnRhYmxlIHx8IGFjdGl2ZVNvcnRhYmxlO1xuICBoaWRlR2hvc3RGb3JUYXJnZXQoKTtcbiAgdmFyIHRvdWNoID0gb3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBvcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA/IG9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBvcmlnaW5hbEV2ZW50O1xuICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZKTtcbiAgdW5oaWRlR2hvc3RGb3JUYXJnZXQoKTtcbiAgaWYgKHRvU29ydGFibGUgJiYgIXRvU29ydGFibGUuZWwuY29udGFpbnModGFyZ2V0KSkge1xuICAgIGRpc3BhdGNoU29ydGFibGVFdmVudCgnc3BpbGwnKTtcbiAgICB0aGlzLm9uU3BpbGwoe1xuICAgICAgZHJhZ0VsOiBkcmFnRWwsXG4gICAgICBwdXRTb3J0YWJsZTogcHV0U29ydGFibGVcbiAgICB9KTtcbiAgfVxufTtcbmZ1bmN0aW9uIFJldmVydCgpIHt9XG5SZXZlcnQucHJvdG90eXBlID0ge1xuICBzdGFydEluZGV4OiBudWxsLFxuICBkcmFnU3RhcnQ6IGZ1bmN0aW9uIGRyYWdTdGFydChfcmVmMikge1xuICAgIHZhciBvbGREcmFnZ2FibGVJbmRleCA9IF9yZWYyLm9sZERyYWdnYWJsZUluZGV4O1xuICAgIHRoaXMuc3RhcnRJbmRleCA9IG9sZERyYWdnYWJsZUluZGV4O1xuICB9LFxuICBvblNwaWxsOiBmdW5jdGlvbiBvblNwaWxsKF9yZWYzKSB7XG4gICAgdmFyIGRyYWdFbCA9IF9yZWYzLmRyYWdFbCxcbiAgICAgIHB1dFNvcnRhYmxlID0gX3JlZjMucHV0U29ydGFibGU7XG4gICAgdGhpcy5zb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICBpZiAocHV0U29ydGFibGUpIHtcbiAgICAgIHB1dFNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgIH1cbiAgICB2YXIgbmV4dFNpYmxpbmcgPSBnZXRDaGlsZCh0aGlzLnNvcnRhYmxlLmVsLCB0aGlzLnN0YXJ0SW5kZXgsIHRoaXMub3B0aW9ucyk7XG4gICAgaWYgKG5leHRTaWJsaW5nKSB7XG4gICAgICB0aGlzLnNvcnRhYmxlLmVsLmluc2VydEJlZm9yZShkcmFnRWwsIG5leHRTaWJsaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3J0YWJsZS5lbC5hcHBlbmRDaGlsZChkcmFnRWwpO1xuICAgIH1cbiAgICB0aGlzLnNvcnRhYmxlLmFuaW1hdGVBbGwoKTtcbiAgICBpZiAocHV0U29ydGFibGUpIHtcbiAgICAgIHB1dFNvcnRhYmxlLmFuaW1hdGVBbGwoKTtcbiAgICB9XG4gIH0sXG4gIGRyb3A6IGRyb3Bcbn07XG5fZXh0ZW5kcyhSZXZlcnQsIHtcbiAgcGx1Z2luTmFtZTogJ3JldmVydE9uU3BpbGwnXG59KTtcbmZ1bmN0aW9uIFJlbW92ZSgpIHt9XG5SZW1vdmUucHJvdG90eXBlID0ge1xuICBvblNwaWxsOiBmdW5jdGlvbiBvblNwaWxsKF9yZWY0KSB7XG4gICAgdmFyIGRyYWdFbCA9IF9yZWY0LmRyYWdFbCxcbiAgICAgIHB1dFNvcnRhYmxlID0gX3JlZjQucHV0U29ydGFibGU7XG4gICAgdmFyIHBhcmVudFNvcnRhYmxlID0gcHV0U29ydGFibGUgfHwgdGhpcy5zb3J0YWJsZTtcbiAgICBwYXJlbnRTb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICBkcmFnRWwucGFyZW50Tm9kZSAmJiBkcmFnRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkcmFnRWwpO1xuICAgIHBhcmVudFNvcnRhYmxlLmFuaW1hdGVBbGwoKTtcbiAgfSxcbiAgZHJvcDogZHJvcFxufTtcbl9leHRlbmRzKFJlbW92ZSwge1xuICBwbHVnaW5OYW1lOiAncmVtb3ZlT25TcGlsbCdcbn0pO1xuXG52YXIgbGFzdFN3YXBFbDtcbmZ1bmN0aW9uIFN3YXBQbHVnaW4oKSB7XG4gIGZ1bmN0aW9uIFN3YXAoKSB7XG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHN3YXBDbGFzczogJ3NvcnRhYmxlLXN3YXAtaGlnaGxpZ2h0J1xuICAgIH07XG4gIH1cbiAgU3dhcC5wcm90b3R5cGUgPSB7XG4gICAgZHJhZ1N0YXJ0OiBmdW5jdGlvbiBkcmFnU3RhcnQoX3JlZikge1xuICAgICAgdmFyIGRyYWdFbCA9IF9yZWYuZHJhZ0VsO1xuICAgICAgbGFzdFN3YXBFbCA9IGRyYWdFbDtcbiAgICB9LFxuICAgIGRyYWdPdmVyVmFsaWQ6IGZ1bmN0aW9uIGRyYWdPdmVyVmFsaWQoX3JlZjIpIHtcbiAgICAgIHZhciBjb21wbGV0ZWQgPSBfcmVmMi5jb21wbGV0ZWQsXG4gICAgICAgIHRhcmdldCA9IF9yZWYyLnRhcmdldCxcbiAgICAgICAgb25Nb3ZlID0gX3JlZjIub25Nb3ZlLFxuICAgICAgICBhY3RpdmVTb3J0YWJsZSA9IF9yZWYyLmFjdGl2ZVNvcnRhYmxlLFxuICAgICAgICBjaGFuZ2VkID0gX3JlZjIuY2hhbmdlZCxcbiAgICAgICAgY2FuY2VsID0gX3JlZjIuY2FuY2VsO1xuICAgICAgaWYgKCFhY3RpdmVTb3J0YWJsZS5vcHRpb25zLnN3YXApIHJldHVybjtcbiAgICAgIHZhciBlbCA9IHRoaXMuc29ydGFibGUuZWwsXG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPT0gZWwpIHtcbiAgICAgICAgdmFyIHByZXZTd2FwRWwgPSBsYXN0U3dhcEVsO1xuICAgICAgICBpZiAob25Nb3ZlKHRhcmdldCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3ModGFyZ2V0LCBvcHRpb25zLnN3YXBDbGFzcywgdHJ1ZSk7XG4gICAgICAgICAgbGFzdFN3YXBFbCA9IHRhcmdldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXN0U3dhcEVsID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJldlN3YXBFbCAmJiBwcmV2U3dhcEVsICE9PSBsYXN0U3dhcEVsKSB7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3MocHJldlN3YXBFbCwgb3B0aW9ucy5zd2FwQ2xhc3MsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hhbmdlZCgpO1xuICAgICAgY29tcGxldGVkKHRydWUpO1xuICAgICAgY2FuY2VsKCk7XG4gICAgfSxcbiAgICBkcm9wOiBmdW5jdGlvbiBkcm9wKF9yZWYzKSB7XG4gICAgICB2YXIgYWN0aXZlU29ydGFibGUgPSBfcmVmMy5hY3RpdmVTb3J0YWJsZSxcbiAgICAgICAgcHV0U29ydGFibGUgPSBfcmVmMy5wdXRTb3J0YWJsZSxcbiAgICAgICAgZHJhZ0VsID0gX3JlZjMuZHJhZ0VsO1xuICAgICAgdmFyIHRvU29ydGFibGUgPSBwdXRTb3J0YWJsZSB8fCB0aGlzLnNvcnRhYmxlO1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBsYXN0U3dhcEVsICYmIHRvZ2dsZUNsYXNzKGxhc3RTd2FwRWwsIG9wdGlvbnMuc3dhcENsYXNzLCBmYWxzZSk7XG4gICAgICBpZiAobGFzdFN3YXBFbCAmJiAob3B0aW9ucy5zd2FwIHx8IHB1dFNvcnRhYmxlICYmIHB1dFNvcnRhYmxlLm9wdGlvbnMuc3dhcCkpIHtcbiAgICAgICAgaWYgKGRyYWdFbCAhPT0gbGFzdFN3YXBFbCkge1xuICAgICAgICAgIHRvU29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICAgICAgaWYgKHRvU29ydGFibGUgIT09IGFjdGl2ZVNvcnRhYmxlKSBhY3RpdmVTb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICAgICAgICBzd2FwTm9kZXMoZHJhZ0VsLCBsYXN0U3dhcEVsKTtcbiAgICAgICAgICB0b1NvcnRhYmxlLmFuaW1hdGVBbGwoKTtcbiAgICAgICAgICBpZiAodG9Tb3J0YWJsZSAhPT0gYWN0aXZlU29ydGFibGUpIGFjdGl2ZVNvcnRhYmxlLmFuaW1hdGVBbGwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbnVsbGluZzogZnVuY3Rpb24gbnVsbGluZygpIHtcbiAgICAgIGxhc3RTd2FwRWwgPSBudWxsO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzKFN3YXAsIHtcbiAgICBwbHVnaW5OYW1lOiAnc3dhcCcsXG4gICAgZXZlbnRQcm9wZXJ0aWVzOiBmdW5jdGlvbiBldmVudFByb3BlcnRpZXMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzd2FwSXRlbTogbGFzdFN3YXBFbFxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gc3dhcE5vZGVzKG4xLCBuMikge1xuICB2YXIgcDEgPSBuMS5wYXJlbnROb2RlLFxuICAgIHAyID0gbjIucGFyZW50Tm9kZSxcbiAgICBpMSxcbiAgICBpMjtcbiAgaWYgKCFwMSB8fCAhcDIgfHwgcDEuaXNFcXVhbE5vZGUobjIpIHx8IHAyLmlzRXF1YWxOb2RlKG4xKSkgcmV0dXJuO1xuICBpMSA9IGluZGV4KG4xKTtcbiAgaTIgPSBpbmRleChuMik7XG4gIGlmIChwMS5pc0VxdWFsTm9kZShwMikgJiYgaTEgPCBpMikge1xuICAgIGkyKys7XG4gIH1cbiAgcDEuaW5zZXJ0QmVmb3JlKG4yLCBwMS5jaGlsZHJlbltpMV0pO1xuICBwMi5pbnNlcnRCZWZvcmUobjEsIHAyLmNoaWxkcmVuW2kyXSk7XG59XG5cbnZhciBtdWx0aURyYWdFbGVtZW50cyA9IFtdLFxuICBtdWx0aURyYWdDbG9uZXMgPSBbXSxcbiAgbGFzdE11bHRpRHJhZ1NlbGVjdCxcbiAgLy8gZm9yIHNlbGVjdGlvbiB3aXRoIG1vZGlmaWVyIGtleSBkb3duIChTSElGVClcbiAgbXVsdGlEcmFnU29ydGFibGUsXG4gIGluaXRpYWxGb2xkaW5nID0gZmFsc2UsXG4gIC8vIEluaXRpYWwgbXVsdGktZHJhZyBmb2xkIHdoZW4gZHJhZyBzdGFydGVkXG4gIGZvbGRpbmcgPSBmYWxzZSxcbiAgLy8gRm9sZGluZyBhbnkgb3RoZXIgdGltZVxuICBkcmFnU3RhcnRlZCA9IGZhbHNlLFxuICBkcmFnRWwkMSxcbiAgY2xvbmVzRnJvbVJlY3QsXG4gIGNsb25lc0hpZGRlbjtcbmZ1bmN0aW9uIE11bHRpRHJhZ1BsdWdpbigpIHtcbiAgZnVuY3Rpb24gTXVsdGlEcmFnKHNvcnRhYmxlKSB7XG4gICAgLy8gQmluZCBhbGwgcHJpdmF0ZSBtZXRob2RzXG4gICAgZm9yICh2YXIgZm4gaW4gdGhpcykge1xuICAgICAgaWYgKGZuLmNoYXJBdCgwKSA9PT0gJ18nICYmIHR5cGVvZiB0aGlzW2ZuXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzW2ZuXSA9IHRoaXNbZm5dLmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghc29ydGFibGUub3B0aW9ucy5hdm9pZEltcGxpY2l0RGVzZWxlY3QpIHtcbiAgICAgIGlmIChzb3J0YWJsZS5vcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAncG9pbnRlcnVwJywgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpO1xuICAgICAgICBvbihkb2N1bWVudCwgJ3RvdWNoZW5kJywgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpO1xuICAgICAgfVxuICAgIH1cbiAgICBvbihkb2N1bWVudCwgJ2tleWRvd24nLCB0aGlzLl9jaGVja0tleURvd24pO1xuICAgIG9uKGRvY3VtZW50LCAna2V5dXAnLCB0aGlzLl9jaGVja0tleVVwKTtcbiAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgc2VsZWN0ZWRDbGFzczogJ3NvcnRhYmxlLXNlbGVjdGVkJyxcbiAgICAgIG11bHRpRHJhZ0tleTogbnVsbCxcbiAgICAgIGF2b2lkSW1wbGljaXREZXNlbGVjdDogZmFsc2UsXG4gICAgICBzZXREYXRhOiBmdW5jdGlvbiBzZXREYXRhKGRhdGFUcmFuc2ZlciwgZHJhZ0VsKSB7XG4gICAgICAgIHZhciBkYXRhID0gJyc7XG4gICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggJiYgbXVsdGlEcmFnU29ydGFibGUgPT09IHNvcnRhYmxlKSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCwgaSkge1xuICAgICAgICAgICAgZGF0YSArPSAoIWkgPyAnJyA6ICcsICcpICsgbXVsdGlEcmFnRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhID0gZHJhZ0VsLnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGRhdGFUcmFuc2Zlci5zZXREYXRhKCdUZXh0JywgZGF0YSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBNdWx0aURyYWcucHJvdG90eXBlID0ge1xuICAgIG11bHRpRHJhZ0tleURvd246IGZhbHNlLFxuICAgIGlzTXVsdGlEcmFnOiBmYWxzZSxcbiAgICBkZWxheVN0YXJ0R2xvYmFsOiBmdW5jdGlvbiBkZWxheVN0YXJ0R2xvYmFsKF9yZWYpIHtcbiAgICAgIHZhciBkcmFnZ2VkID0gX3JlZi5kcmFnRWw7XG4gICAgICBkcmFnRWwkMSA9IGRyYWdnZWQ7XG4gICAgfSxcbiAgICBkZWxheUVuZGVkOiBmdW5jdGlvbiBkZWxheUVuZGVkKCkge1xuICAgICAgdGhpcy5pc011bHRpRHJhZyA9IH5tdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGRyYWdFbCQxKTtcbiAgICB9LFxuICAgIHNldHVwQ2xvbmU6IGZ1bmN0aW9uIHNldHVwQ2xvbmUoX3JlZjIpIHtcbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWYyLnNvcnRhYmxlLFxuICAgICAgICBjYW5jZWwgPSBfcmVmMi5jYW5jZWw7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcpIHJldHVybjtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbXVsdGlEcmFnQ2xvbmVzLnB1c2goY2xvbmUobXVsdGlEcmFnRWxlbWVudHNbaV0pKTtcbiAgICAgICAgbXVsdGlEcmFnQ2xvbmVzW2ldLnNvcnRhYmxlSW5kZXggPSBtdWx0aURyYWdFbGVtZW50c1tpXS5zb3J0YWJsZUluZGV4O1xuICAgICAgICBtdWx0aURyYWdDbG9uZXNbaV0uZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgIG11bHRpRHJhZ0Nsb25lc1tpXS5zdHlsZVsnd2lsbC1jaGFuZ2UnXSA9ICcnO1xuICAgICAgICB0b2dnbGVDbGFzcyhtdWx0aURyYWdDbG9uZXNbaV0sIHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzLCBmYWxzZSk7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzW2ldID09PSBkcmFnRWwkMSAmJiB0b2dnbGVDbGFzcyhtdWx0aURyYWdDbG9uZXNbaV0sIHRoaXMub3B0aW9ucy5jaG9zZW5DbGFzcywgZmFsc2UpO1xuICAgICAgfVxuICAgICAgc29ydGFibGUuX2hpZGVDbG9uZSgpO1xuICAgICAgY2FuY2VsKCk7XG4gICAgfSxcbiAgICBjbG9uZTogZnVuY3Rpb24gY2xvbmUoX3JlZjMpIHtcbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWYzLnNvcnRhYmxlLFxuICAgICAgICByb290RWwgPSBfcmVmMy5yb290RWwsXG4gICAgICAgIGRpc3BhdGNoU29ydGFibGVFdmVudCA9IF9yZWYzLmRpc3BhdGNoU29ydGFibGVFdmVudCxcbiAgICAgICAgY2FuY2VsID0gX3JlZjMuY2FuY2VsO1xuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlEcmFnKSByZXR1cm47XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5yZW1vdmVDbG9uZU9uSGlkZSkge1xuICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoICYmIG11bHRpRHJhZ1NvcnRhYmxlID09PSBzb3J0YWJsZSkge1xuICAgICAgICAgIGluc2VydE11bHRpRHJhZ0Nsb25lcyh0cnVlLCByb290RWwpO1xuICAgICAgICAgIGRpc3BhdGNoU29ydGFibGVFdmVudCgnY2xvbmUnKTtcbiAgICAgICAgICBjYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd0Nsb25lOiBmdW5jdGlvbiBzaG93Q2xvbmUoX3JlZjQpIHtcbiAgICAgIHZhciBjbG9uZU5vd1Nob3duID0gX3JlZjQuY2xvbmVOb3dTaG93bixcbiAgICAgICAgcm9vdEVsID0gX3JlZjQucm9vdEVsLFxuICAgICAgICBjYW5jZWwgPSBfcmVmNC5jYW5jZWw7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcpIHJldHVybjtcbiAgICAgIGluc2VydE11bHRpRHJhZ0Nsb25lcyhmYWxzZSwgcm9vdEVsKTtcbiAgICAgIG11bHRpRHJhZ0Nsb25lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbG9uZSkge1xuICAgICAgICBjc3MoY2xvbmUsICdkaXNwbGF5JywgJycpO1xuICAgICAgfSk7XG4gICAgICBjbG9uZU5vd1Nob3duKCk7XG4gICAgICBjbG9uZXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgIGNhbmNlbCgpO1xuICAgIH0sXG4gICAgaGlkZUNsb25lOiBmdW5jdGlvbiBoaWRlQ2xvbmUoX3JlZjUpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmNS5zb3J0YWJsZSxcbiAgICAgICAgY2xvbmVOb3dIaWRkZW4gPSBfcmVmNS5jbG9uZU5vd0hpZGRlbixcbiAgICAgICAgY2FuY2VsID0gX3JlZjUuY2FuY2VsO1xuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlEcmFnKSByZXR1cm47XG4gICAgICBtdWx0aURyYWdDbG9uZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xvbmUpIHtcbiAgICAgICAgY3NzKGNsb25lLCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgIGlmIChfdGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlICYmIGNsb25lLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICBjbG9uZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjbG9uZU5vd0hpZGRlbigpO1xuICAgICAgY2xvbmVzSGlkZGVuID0gdHJ1ZTtcbiAgICAgIGNhbmNlbCgpO1xuICAgIH0sXG4gICAgZHJhZ1N0YXJ0R2xvYmFsOiBmdW5jdGlvbiBkcmFnU3RhcnRHbG9iYWwoX3JlZjYpIHtcbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWY2LnNvcnRhYmxlO1xuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlEcmFnICYmIG11bHRpRHJhZ1NvcnRhYmxlKSB7XG4gICAgICAgIG11bHRpRHJhZ1NvcnRhYmxlLm11bHRpRHJhZy5fZGVzZWxlY3RNdWx0aURyYWcoKTtcbiAgICAgIH1cbiAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudC5zb3J0YWJsZUluZGV4ID0gaW5kZXgobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gU29ydCBtdWx0aS1kcmFnIGVsZW1lbnRzXG4gICAgICBtdWx0aURyYWdFbGVtZW50cyA9IG11bHRpRHJhZ0VsZW1lbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEuc29ydGFibGVJbmRleCAtIGIuc29ydGFibGVJbmRleDtcbiAgICAgIH0pO1xuICAgICAgZHJhZ1N0YXJ0ZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgZHJhZ1N0YXJ0ZWQ6IGZ1bmN0aW9uIGRyYWdTdGFydGVkKF9yZWY3KSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWY3LnNvcnRhYmxlO1xuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlEcmFnKSByZXR1cm47XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnNvcnQpIHtcbiAgICAgICAgLy8gQ2FwdHVyZSByZWN0cyxcbiAgICAgICAgLy8gaGlkZSBtdWx0aSBkcmFnIGVsZW1lbnRzIChieSBwb3NpdGlvbmluZyB0aGVtIGFic29sdXRlKSxcbiAgICAgICAgLy8gc2V0IG11bHRpIGRyYWcgZWxlbWVudHMgcmVjdHMgdG8gZHJhZ1JlY3QsXG4gICAgICAgIC8vIHNob3cgbXVsdGkgZHJhZyBlbGVtZW50cyxcbiAgICAgICAgLy8gYW5pbWF0ZSB0byByZWN0cyxcbiAgICAgICAgLy8gdW5zZXQgcmVjdHMgJiByZW1vdmUgZnJvbSBET01cblxuICAgICAgICBzb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRpb24pIHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudCA9PT0gZHJhZ0VsJDEpIHJldHVybjtcbiAgICAgICAgICAgIGNzcyhtdWx0aURyYWdFbGVtZW50LCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgZHJhZ1JlY3QgPSBnZXRSZWN0KGRyYWdFbCQxLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQgPT09IGRyYWdFbCQxKSByZXR1cm47XG4gICAgICAgICAgICBzZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQsIGRyYWdSZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmb2xkaW5nID0gdHJ1ZTtcbiAgICAgICAgICBpbml0aWFsRm9sZGluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNvcnRhYmxlLmFuaW1hdGVBbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBmb2xkaW5nID0gZmFsc2U7XG4gICAgICAgIGluaXRpYWxGb2xkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChfdGhpczIub3B0aW9ucy5hbmltYXRpb24pIHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICB1bnNldFJlY3QobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgYWxsIGF1eGlsaWFyeSBtdWx0aWRyYWcgaXRlbXMgZnJvbSBlbCwgaWYgc29ydGluZyBlbmFibGVkXG4gICAgICAgIGlmIChfdGhpczIub3B0aW9ucy5zb3J0KSB7XG4gICAgICAgICAgcmVtb3ZlTXVsdGlEcmFnRWxlbWVudHMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBkcmFnT3ZlcjogZnVuY3Rpb24gZHJhZ092ZXIoX3JlZjgpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBfcmVmOC50YXJnZXQsXG4gICAgICAgIGNvbXBsZXRlZCA9IF9yZWY4LmNvbXBsZXRlZCxcbiAgICAgICAgY2FuY2VsID0gX3JlZjguY2FuY2VsO1xuICAgICAgaWYgKGZvbGRpbmcgJiYgfm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YodGFyZ2V0KSkge1xuICAgICAgICBjb21wbGV0ZWQoZmFsc2UpO1xuICAgICAgICBjYW5jZWwoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJldmVydDogZnVuY3Rpb24gcmV2ZXJ0KF9yZWY5KSB7XG4gICAgICB2YXIgZnJvbVNvcnRhYmxlID0gX3JlZjkuZnJvbVNvcnRhYmxlLFxuICAgICAgICByb290RWwgPSBfcmVmOS5yb290RWwsXG4gICAgICAgIHNvcnRhYmxlID0gX3JlZjkuc29ydGFibGUsXG4gICAgICAgIGRyYWdSZWN0ID0gX3JlZjkuZHJhZ1JlY3Q7XG4gICAgICBpZiAobXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBTZXR1cCB1bmZvbGQgYW5pbWF0aW9uXG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICBzb3J0YWJsZS5hZGRBbmltYXRpb25TdGF0ZSh7XG4gICAgICAgICAgICB0YXJnZXQ6IG11bHRpRHJhZ0VsZW1lbnQsXG4gICAgICAgICAgICByZWN0OiBmb2xkaW5nID8gZ2V0UmVjdChtdWx0aURyYWdFbGVtZW50KSA6IGRyYWdSZWN0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdW5zZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnQuZnJvbVJlY3QgPSBkcmFnUmVjdDtcbiAgICAgICAgICBmcm9tU29ydGFibGUucmVtb3ZlQW5pbWF0aW9uU3RhdGUobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBmb2xkaW5nID0gZmFsc2U7XG4gICAgICAgIGluc2VydE11bHRpRHJhZ0VsZW1lbnRzKCF0aGlzLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGUsIHJvb3RFbCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkcmFnT3ZlckNvbXBsZXRlZDogZnVuY3Rpb24gZHJhZ092ZXJDb21wbGV0ZWQoX3JlZjEwKSB7XG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmMTAuc29ydGFibGUsXG4gICAgICAgIGlzT3duZXIgPSBfcmVmMTAuaXNPd25lcixcbiAgICAgICAgaW5zZXJ0aW9uID0gX3JlZjEwLmluc2VydGlvbixcbiAgICAgICAgYWN0aXZlU29ydGFibGUgPSBfcmVmMTAuYWN0aXZlU29ydGFibGUsXG4gICAgICAgIHBhcmVudEVsID0gX3JlZjEwLnBhcmVudEVsLFxuICAgICAgICBwdXRTb3J0YWJsZSA9IF9yZWYxMC5wdXRTb3J0YWJsZTtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgaWYgKGluc2VydGlvbikge1xuICAgICAgICAvLyBDbG9uZXMgbXVzdCBiZSBoaWRkZW4gYmVmb3JlIGZvbGRpbmcgYW5pbWF0aW9uIHRvIGNhcHR1cmUgZHJhZ1JlY3RBYnNvbHV0ZSBwcm9wZXJseVxuICAgICAgICBpZiAoaXNPd25lcikge1xuICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlLl9oaWRlQ2xvbmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpbml0aWFsRm9sZGluZyA9IGZhbHNlO1xuICAgICAgICAvLyBJZiBsZWF2aW5nIHNvcnQ6ZmFsc2Ugcm9vdCwgb3IgYWxyZWFkeSBmb2xkaW5nIC0gRm9sZCB0byBuZXcgbG9jYXRpb25cbiAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0aW9uICYmIG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCA+IDEgJiYgKGZvbGRpbmcgfHwgIWlzT3duZXIgJiYgIWFjdGl2ZVNvcnRhYmxlLm9wdGlvbnMuc29ydCAmJiAhcHV0U29ydGFibGUpKSB7XG4gICAgICAgICAgLy8gRm9sZDogU2V0IGFsbCBtdWx0aSBkcmFnIGVsZW1lbnRzJ3MgcmVjdHMgdG8gZHJhZ0VsJ3MgcmVjdCB3aGVuIG11bHRpLWRyYWcgZWxlbWVudHMgYXJlIGludmlzaWJsZVxuICAgICAgICAgIHZhciBkcmFnUmVjdEFic29sdXRlID0gZ2V0UmVjdChkcmFnRWwkMSwgZmFsc2UsIHRydWUsIHRydWUpO1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50ID09PSBkcmFnRWwkMSkgcmV0dXJuO1xuICAgICAgICAgICAgc2V0UmVjdChtdWx0aURyYWdFbGVtZW50LCBkcmFnUmVjdEFic29sdXRlKTtcblxuICAgICAgICAgICAgLy8gTW92ZSBlbGVtZW50KHMpIHRvIGVuZCBvZiBwYXJlbnRFbCBzbyB0aGF0IGl0IGRvZXMgbm90IGludGVyZmVyZSB3aXRoIG11bHRpLWRyYWcgY2xvbmVzIGluc2VydGlvbiBpZiB0aGV5IGFyZSBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gd2hpbGUgZm9sZGluZywgYW5kIHNvIHRoYXQgd2UgY2FuIGNhcHR1cmUgdGhlbSBhZ2FpbiBiZWNhdXNlIG9sZCBzb3J0YWJsZSB3aWxsIG5vIGxvbmdlciBiZSBmcm9tU29ydGFibGVcbiAgICAgICAgICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGZvbGRpbmcgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2xvbmVzIG11c3QgYmUgc2hvd24gKGFuZCBjaGVjayB0byByZW1vdmUgbXVsdGkgZHJhZ3MpIGFmdGVyIGZvbGRpbmcgd2hlbiBpbnRlcmZlcmluZyBtdWx0aURyYWdFbGVtZW50cyBhcmUgbW92ZWQgb3V0XG4gICAgICAgIGlmICghaXNPd25lcikge1xuICAgICAgICAgIC8vIE9ubHkgcmVtb3ZlIGlmIG5vdCBmb2xkaW5nIChmb2xkaW5nIHdpbGwgcmVtb3ZlIHRoZW0gYW55d2F5cylcbiAgICAgICAgICBpZiAoIWZvbGRpbmcpIHtcbiAgICAgICAgICAgIHJlbW92ZU11bHRpRHJhZ0VsZW1lbnRzKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgY2xvbmVzSGlkZGVuQmVmb3JlID0gY2xvbmVzSGlkZGVuO1xuICAgICAgICAgICAgYWN0aXZlU29ydGFibGUuX3Nob3dDbG9uZShzb3J0YWJsZSk7XG5cbiAgICAgICAgICAgIC8vIFVuZm9sZCBhbmltYXRpb24gZm9yIGNsb25lcyBpZiBzaG93aW5nIGZyb20gaGlkZGVuXG4gICAgICAgICAgICBpZiAoYWN0aXZlU29ydGFibGUub3B0aW9ucy5hbmltYXRpb24gJiYgIWNsb25lc0hpZGRlbiAmJiBjbG9uZXNIaWRkZW5CZWZvcmUpIHtcbiAgICAgICAgICAgICAgbXVsdGlEcmFnQ2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlU29ydGFibGUuYWRkQW5pbWF0aW9uU3RhdGUoe1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBjbG9uZSxcbiAgICAgICAgICAgICAgICAgIHJlY3Q6IGNsb25lc0Zyb21SZWN0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2xvbmUuZnJvbVJlY3QgPSBjbG9uZXNGcm9tUmVjdDtcbiAgICAgICAgICAgICAgICBjbG9uZS50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlU29ydGFibGUuX3Nob3dDbG9uZShzb3J0YWJsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBkcmFnT3ZlckFuaW1hdGlvbkNhcHR1cmU6IGZ1bmN0aW9uIGRyYWdPdmVyQW5pbWF0aW9uQ2FwdHVyZShfcmVmMTEpIHtcbiAgICAgIHZhciBkcmFnUmVjdCA9IF9yZWYxMS5kcmFnUmVjdCxcbiAgICAgICAgaXNPd25lciA9IF9yZWYxMS5pc093bmVyLFxuICAgICAgICBhY3RpdmVTb3J0YWJsZSA9IF9yZWYxMS5hY3RpdmVTb3J0YWJsZTtcbiAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudC50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgfSk7XG4gICAgICBpZiAoYWN0aXZlU29ydGFibGUub3B0aW9ucy5hbmltYXRpb24gJiYgIWlzT3duZXIgJiYgYWN0aXZlU29ydGFibGUubXVsdGlEcmFnLmlzTXVsdGlEcmFnKSB7XG4gICAgICAgIGNsb25lc0Zyb21SZWN0ID0gX2V4dGVuZHMoe30sIGRyYWdSZWN0KTtcbiAgICAgICAgdmFyIGRyYWdNYXRyaXggPSBtYXRyaXgoZHJhZ0VsJDEsIHRydWUpO1xuICAgICAgICBjbG9uZXNGcm9tUmVjdC50b3AgLT0gZHJhZ01hdHJpeC5mO1xuICAgICAgICBjbG9uZXNGcm9tUmVjdC5sZWZ0IC09IGRyYWdNYXRyaXguZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRyYWdPdmVyQW5pbWF0aW9uQ29tcGxldGU6IGZ1bmN0aW9uIGRyYWdPdmVyQW5pbWF0aW9uQ29tcGxldGUoKSB7XG4gICAgICBpZiAoZm9sZGluZykge1xuICAgICAgICBmb2xkaW5nID0gZmFsc2U7XG4gICAgICAgIHJlbW92ZU11bHRpRHJhZ0VsZW1lbnRzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkcm9wOiBmdW5jdGlvbiBkcm9wKF9yZWYxMikge1xuICAgICAgdmFyIGV2dCA9IF9yZWYxMi5vcmlnaW5hbEV2ZW50LFxuICAgICAgICByb290RWwgPSBfcmVmMTIucm9vdEVsLFxuICAgICAgICBwYXJlbnRFbCA9IF9yZWYxMi5wYXJlbnRFbCxcbiAgICAgICAgc29ydGFibGUgPSBfcmVmMTIuc29ydGFibGUsXG4gICAgICAgIGRpc3BhdGNoU29ydGFibGVFdmVudCA9IF9yZWYxMi5kaXNwYXRjaFNvcnRhYmxlRXZlbnQsXG4gICAgICAgIG9sZEluZGV4ID0gX3JlZjEyLm9sZEluZGV4LFxuICAgICAgICBwdXRTb3J0YWJsZSA9IF9yZWYxMi5wdXRTb3J0YWJsZTtcbiAgICAgIHZhciB0b1NvcnRhYmxlID0gcHV0U29ydGFibGUgfHwgdGhpcy5zb3J0YWJsZTtcbiAgICAgIGlmICghZXZ0KSByZXR1cm47XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgY2hpbGRyZW4gPSBwYXJlbnRFbC5jaGlsZHJlbjtcblxuICAgICAgLy8gTXVsdGktZHJhZyBzZWxlY3Rpb25cbiAgICAgIGlmICghZHJhZ1N0YXJ0ZWQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMubXVsdGlEcmFnS2V5ICYmICF0aGlzLm11bHRpRHJhZ0tleURvd24pIHtcbiAgICAgICAgICB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZygpO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCQxLCBvcHRpb25zLnNlbGVjdGVkQ2xhc3MsICF+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihkcmFnRWwkMSkpO1xuICAgICAgICBpZiAoIX5tdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGRyYWdFbCQxKSkge1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnB1c2goZHJhZ0VsJDEpO1xuICAgICAgICAgIGRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlLFxuICAgICAgICAgICAgcm9vdEVsOiByb290RWwsXG4gICAgICAgICAgICBuYW1lOiAnc2VsZWN0JyxcbiAgICAgICAgICAgIHRhcmdldEVsOiBkcmFnRWwkMSxcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gTW9kaWZpZXIgYWN0aXZhdGVkLCBzZWxlY3QgZnJvbSBsYXN0IHRvIGRyYWdFbFxuICAgICAgICAgIGlmIChldnQuc2hpZnRLZXkgJiYgbGFzdE11bHRpRHJhZ1NlbGVjdCAmJiBzb3J0YWJsZS5lbC5jb250YWlucyhsYXN0TXVsdGlEcmFnU2VsZWN0KSkge1xuICAgICAgICAgICAgdmFyIGxhc3RJbmRleCA9IGluZGV4KGxhc3RNdWx0aURyYWdTZWxlY3QpLFxuICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleChkcmFnRWwkMSk7XG4gICAgICAgICAgICBpZiAofmxhc3RJbmRleCAmJiB+Y3VycmVudEluZGV4ICYmIGxhc3RJbmRleCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICAgICAgICAgIC8vIE11c3QgaW5jbHVkZSBsYXN0TXVsdGlEcmFnU2VsZWN0IChzZWxlY3QgaXQpLCBpbiBjYXNlIG1vZGlmaWVkIHNlbGVjdGlvbiBmcm9tIG5vIHNlbGVjdGlvblxuICAgICAgICAgICAgICAvLyAoYnV0IHByZXZpb3VzIHNlbGVjdGlvbiBleGlzdGVkKVxuICAgICAgICAgICAgICB2YXIgbiwgaTtcbiAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgIGkgPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgbiA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpID0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgICAgIG4gPSBsYXN0SW5kZXggKyAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKH5tdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGNoaWxkcmVuW2ldKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoY2hpbGRyZW5baV0sIG9wdGlvbnMuc2VsZWN0ZWRDbGFzcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgICAgICBzb3J0YWJsZTogc29ydGFibGUsXG4gICAgICAgICAgICAgICAgICByb290RWw6IHJvb3RFbCxcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgdGFyZ2V0RWw6IGNoaWxkcmVuW2ldLFxuICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGFzdE11bHRpRHJhZ1NlbGVjdCA9IGRyYWdFbCQxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtdWx0aURyYWdTb3J0YWJsZSA9IHRvU29ydGFibGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuc3BsaWNlKG11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZHJhZ0VsJDEpLCAxKTtcbiAgICAgICAgICBsYXN0TXVsdGlEcmFnU2VsZWN0ID0gbnVsbDtcbiAgICAgICAgICBkaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgIHNvcnRhYmxlOiBzb3J0YWJsZSxcbiAgICAgICAgICAgIHJvb3RFbDogcm9vdEVsLFxuICAgICAgICAgICAgbmFtZTogJ2Rlc2VsZWN0JyxcbiAgICAgICAgICAgIHRhcmdldEVsOiBkcmFnRWwkMSxcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE11bHRpLWRyYWcgZHJvcFxuICAgICAgaWYgKGRyYWdTdGFydGVkICYmIHRoaXMuaXNNdWx0aURyYWcpIHtcbiAgICAgICAgZm9sZGluZyA9IGZhbHNlO1xuICAgICAgICAvLyBEbyBub3QgXCJ1bmZvbGRcIiBhZnRlciBhcm91bmQgZHJhZ0VsIGlmIHJldmVydGVkXG4gICAgICAgIGlmICgocGFyZW50RWxbZXhwYW5kb10ub3B0aW9ucy5zb3J0IHx8IHBhcmVudEVsICE9PSByb290RWwpICYmIG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB2YXIgZHJhZ1JlY3QgPSBnZXRSZWN0KGRyYWdFbCQxKSxcbiAgICAgICAgICAgIG11bHRpRHJhZ0luZGV4ID0gaW5kZXgoZHJhZ0VsJDEsICc6bm90KC4nICsgdGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MgKyAnKScpO1xuICAgICAgICAgIGlmICghaW5pdGlhbEZvbGRpbmcgJiYgb3B0aW9ucy5hbmltYXRpb24pIGRyYWdFbCQxLnRoaXNBbmltYXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICAgICAgdG9Tb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICAgICAgICBpZiAoIWluaXRpYWxGb2xkaW5nKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5hbmltYXRpb24pIHtcbiAgICAgICAgICAgICAgZHJhZ0VsJDEuZnJvbVJlY3QgPSBkcmFnUmVjdDtcbiAgICAgICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnQudGhpc0FuaW1hdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudCAhPT0gZHJhZ0VsJDEpIHtcbiAgICAgICAgICAgICAgICAgIHZhciByZWN0ID0gZm9sZGluZyA/IGdldFJlY3QobXVsdGlEcmFnRWxlbWVudCkgOiBkcmFnUmVjdDtcbiAgICAgICAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnQuZnJvbVJlY3QgPSByZWN0O1xuXG4gICAgICAgICAgICAgICAgICAvLyBQcmVwYXJlIHVuZm9sZCBhbmltYXRpb25cbiAgICAgICAgICAgICAgICAgIHRvU29ydGFibGUuYWRkQW5pbWF0aW9uU3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG11bHRpRHJhZ0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIHJlY3Q6IHJlY3RcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE11bHRpIGRyYWcgZWxlbWVudHMgYXJlIG5vdCBuZWNlc3NhcmlseSByZW1vdmVkIGZyb20gdGhlIERPTSBvbiBkcm9wLCBzbyB0byByZWluc2VydFxuICAgICAgICAgICAgLy8gcHJvcGVybHkgdGhleSBtdXN0IGFsbCBiZSByZW1vdmVkXG4gICAgICAgICAgICByZW1vdmVNdWx0aURyYWdFbGVtZW50cygpO1xuICAgICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5bbXVsdGlEcmFnSW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50RWwuaW5zZXJ0QmVmb3JlKG11bHRpRHJhZ0VsZW1lbnQsIGNoaWxkcmVuW211bHRpRHJhZ0luZGV4XSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbXVsdGlEcmFnSW5kZXgrKztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBJZiBpbml0aWFsIGZvbGRpbmcgaXMgZG9uZSwgdGhlIGVsZW1lbnRzIG1heSBoYXZlIGNoYW5nZWQgcG9zaXRpb24gYmVjYXVzZSB0aGV5IGFyZSBub3dcbiAgICAgICAgICAgIC8vIHVuZm9sZGluZyBhcm91bmQgZHJhZ0VsLCBldmVuIHRob3VnaCBkcmFnRWwgbWF5IG5vdCBoYXZlIGhpcyBpbmRleCBjaGFuZ2VkLCBzbyB1cGRhdGUgZXZlbnRcbiAgICAgICAgICAgIC8vIG11c3QgYmUgZmlyZWQgaGVyZSBhcyBTb3J0YWJsZSB3aWxsIG5vdC5cbiAgICAgICAgICAgIGlmIChvbGRJbmRleCA9PT0gaW5kZXgoZHJhZ0VsJDEpKSB7XG4gICAgICAgICAgICAgIHZhciB1cGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50LnNvcnRhYmxlSW5kZXggIT09IGluZGV4KG11bHRpRHJhZ0VsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQoJ3VwZGF0ZScpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoU29ydGFibGVFdmVudCgnc29ydCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTXVzdCBiZSBkb25lIGFmdGVyIGNhcHR1cmluZyBpbmRpdmlkdWFsIHJlY3RzIChzY3JvbGwgYmFyKVxuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHVuc2V0UmVjdChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0b1NvcnRhYmxlLmFuaW1hdGVBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBtdWx0aURyYWdTb3J0YWJsZSA9IHRvU29ydGFibGU7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSBjbG9uZXMgaWYgbmVjZXNzYXJ5XG4gICAgICBpZiAocm9vdEVsID09PSBwYXJlbnRFbCB8fCBwdXRTb3J0YWJsZSAmJiBwdXRTb3J0YWJsZS5sYXN0UHV0TW9kZSAhPT0gJ2Nsb25lJykge1xuICAgICAgICBtdWx0aURyYWdDbG9uZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xvbmUpIHtcbiAgICAgICAgICBjbG9uZS5wYXJlbnROb2RlICYmIGNsb25lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2xvbmUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG51bGxpbmdHbG9iYWw6IGZ1bmN0aW9uIG51bGxpbmdHbG9iYWwoKSB7XG4gICAgICB0aGlzLmlzTXVsdGlEcmFnID0gZHJhZ1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIG11bHRpRHJhZ0Nsb25lcy5sZW5ndGggPSAwO1xuICAgIH0sXG4gICAgZGVzdHJveUdsb2JhbDogZnVuY3Rpb24gZGVzdHJveUdsb2JhbCgpIHtcbiAgICAgIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKCk7XG4gICAgICBvZmYoZG9jdW1lbnQsICdwb2ludGVydXAnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICBvZmYoZG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpO1xuICAgICAgb2ZmKGRvY3VtZW50LCAndG91Y2hlbmQnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICBvZmYoZG9jdW1lbnQsICdrZXlkb3duJywgdGhpcy5fY2hlY2tLZXlEb3duKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ2tleXVwJywgdGhpcy5fY2hlY2tLZXlVcCk7XG4gICAgfSxcbiAgICBfZGVzZWxlY3RNdWx0aURyYWc6IGZ1bmN0aW9uIF9kZXNlbGVjdE11bHRpRHJhZyhldnQpIHtcbiAgICAgIGlmICh0eXBlb2YgZHJhZ1N0YXJ0ZWQgIT09IFwidW5kZWZpbmVkXCIgJiYgZHJhZ1N0YXJ0ZWQpIHJldHVybjtcblxuICAgICAgLy8gT25seSBkZXNlbGVjdCBpZiBzZWxlY3Rpb24gaXMgaW4gdGhpcyBzb3J0YWJsZVxuICAgICAgaWYgKG11bHRpRHJhZ1NvcnRhYmxlICE9PSB0aGlzLnNvcnRhYmxlKSByZXR1cm47XG5cbiAgICAgIC8vIE9ubHkgZGVzZWxlY3QgaWYgdGFyZ2V0IGlzIG5vdCBpdGVtIGluIHRoaXMgc29ydGFibGVcbiAgICAgIGlmIChldnQgJiYgY2xvc2VzdChldnQudGFyZ2V0LCB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlLCB0aGlzLnNvcnRhYmxlLmVsLCBmYWxzZSkpIHJldHVybjtcblxuICAgICAgLy8gT25seSBkZXNlbGVjdCBpZiBsZWZ0IGNsaWNrXG4gICAgICBpZiAoZXZ0ICYmIGV2dC5idXR0b24gIT09IDApIHJldHVybjtcbiAgICAgIHdoaWxlIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGVsID0gbXVsdGlEcmFnRWxlbWVudHNbMF07XG4gICAgICAgIHRvZ2dsZUNsYXNzKGVsLCB0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcywgZmFsc2UpO1xuICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5zaGlmdCgpO1xuICAgICAgICBkaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICBzb3J0YWJsZTogdGhpcy5zb3J0YWJsZSxcbiAgICAgICAgICByb290RWw6IHRoaXMuc29ydGFibGUuZWwsXG4gICAgICAgICAgbmFtZTogJ2Rlc2VsZWN0JyxcbiAgICAgICAgICB0YXJnZXRFbDogZWwsXG4gICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgX2NoZWNrS2V5RG93bjogZnVuY3Rpb24gX2NoZWNrS2V5RG93bihldnQpIHtcbiAgICAgIGlmIChldnQua2V5ID09PSB0aGlzLm9wdGlvbnMubXVsdGlEcmFnS2V5KSB7XG4gICAgICAgIHRoaXMubXVsdGlEcmFnS2V5RG93biA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBfY2hlY2tLZXlVcDogZnVuY3Rpb24gX2NoZWNrS2V5VXAoZXZ0KSB7XG4gICAgICBpZiAoZXZ0LmtleSA9PT0gdGhpcy5vcHRpb25zLm11bHRpRHJhZ0tleSkge1xuICAgICAgICB0aGlzLm11bHRpRHJhZ0tleURvd24gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcyhNdWx0aURyYWcsIHtcbiAgICAvLyBTdGF0aWMgbWV0aG9kcyAmIHByb3BlcnRpZXNcbiAgICBwbHVnaW5OYW1lOiAnbXVsdGlEcmFnJyxcbiAgICB1dGlsczoge1xuICAgICAgLyoqXHJcbiAgICAgICAqIFNlbGVjdHMgdGhlIHByb3ZpZGVkIG11bHRpLWRyYWcgaXRlbVxyXG4gICAgICAgKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWwgICAgVGhlIGVsZW1lbnQgdG8gYmUgc2VsZWN0ZWRcclxuICAgICAgICovXG4gICAgICBzZWxlY3Q6IGZ1bmN0aW9uIHNlbGVjdChlbCkge1xuICAgICAgICB2YXIgc29ydGFibGUgPSBlbC5wYXJlbnROb2RlW2V4cGFuZG9dO1xuICAgICAgICBpZiAoIXNvcnRhYmxlIHx8ICFzb3J0YWJsZS5vcHRpb25zLm11bHRpRHJhZyB8fCB+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihlbCkpIHJldHVybjtcbiAgICAgICAgaWYgKG11bHRpRHJhZ1NvcnRhYmxlICYmIG11bHRpRHJhZ1NvcnRhYmxlICE9PSBzb3J0YWJsZSkge1xuICAgICAgICAgIG11bHRpRHJhZ1NvcnRhYmxlLm11bHRpRHJhZy5fZGVzZWxlY3RNdWx0aURyYWcoKTtcbiAgICAgICAgICBtdWx0aURyYWdTb3J0YWJsZSA9IHNvcnRhYmxlO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZUNsYXNzKGVsLCBzb3J0YWJsZS5vcHRpb25zLnNlbGVjdGVkQ2xhc3MsIHRydWUpO1xuICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5wdXNoKGVsKTtcbiAgICAgIH0sXG4gICAgICAvKipcclxuICAgICAgICogRGVzZWxlY3RzIHRoZSBwcm92aWRlZCBtdWx0aS1kcmFnIGl0ZW1cclxuICAgICAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgIFRoZSBlbGVtZW50IHRvIGJlIGRlc2VsZWN0ZWRcclxuICAgICAgICovXG4gICAgICBkZXNlbGVjdDogZnVuY3Rpb24gZGVzZWxlY3QoZWwpIHtcbiAgICAgICAgdmFyIHNvcnRhYmxlID0gZWwucGFyZW50Tm9kZVtleHBhbmRvXSxcbiAgICAgICAgICBpbmRleCA9IG11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZWwpO1xuICAgICAgICBpZiAoIXNvcnRhYmxlIHx8ICFzb3J0YWJsZS5vcHRpb25zLm11bHRpRHJhZyB8fCAhfmluZGV4KSByZXR1cm47XG4gICAgICAgIHRvZ2dsZUNsYXNzKGVsLCBzb3J0YWJsZS5vcHRpb25zLnNlbGVjdGVkQ2xhc3MsIGZhbHNlKTtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGV2ZW50UHJvcGVydGllczogZnVuY3Rpb24gZXZlbnRQcm9wZXJ0aWVzKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG4gICAgICB2YXIgb2xkSW5kaWNpZXMgPSBbXSxcbiAgICAgICAgbmV3SW5kaWNpZXMgPSBbXTtcbiAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgb2xkSW5kaWNpZXMucHVzaCh7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudDogbXVsdGlEcmFnRWxlbWVudCxcbiAgICAgICAgICBpbmRleDogbXVsdGlEcmFnRWxlbWVudC5zb3J0YWJsZUluZGV4XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIG11bHRpRHJhZ0VsZW1lbnRzIHdpbGwgYWxyZWFkeSBiZSBzb3J0ZWQgaWYgZm9sZGluZ1xuICAgICAgICB2YXIgbmV3SW5kZXg7XG4gICAgICAgIGlmIChmb2xkaW5nICYmIG11bHRpRHJhZ0VsZW1lbnQgIT09IGRyYWdFbCQxKSB7XG4gICAgICAgICAgbmV3SW5kZXggPSAtMTtcbiAgICAgICAgfSBlbHNlIGlmIChmb2xkaW5nKSB7XG4gICAgICAgICAgbmV3SW5kZXggPSBpbmRleChtdWx0aURyYWdFbGVtZW50LCAnOm5vdCguJyArIF90aGlzMy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MgKyAnKScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0luZGV4ID0gaW5kZXgobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3SW5kaWNpZXMucHVzaCh7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudDogbXVsdGlEcmFnRWxlbWVudCxcbiAgICAgICAgICBpbmRleDogbmV3SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGl0ZW1zOiBfdG9Db25zdW1hYmxlQXJyYXkobXVsdGlEcmFnRWxlbWVudHMpLFxuICAgICAgICBjbG9uZXM6IFtdLmNvbmNhdChtdWx0aURyYWdDbG9uZXMpLFxuICAgICAgICBvbGRJbmRpY2llczogb2xkSW5kaWNpZXMsXG4gICAgICAgIG5ld0luZGljaWVzOiBuZXdJbmRpY2llc1xuICAgICAgfTtcbiAgICB9LFxuICAgIG9wdGlvbkxpc3RlbmVyczoge1xuICAgICAgbXVsdGlEcmFnS2V5OiBmdW5jdGlvbiBtdWx0aURyYWdLZXkoa2V5KSB7XG4gICAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoa2V5ID09PSAnY3RybCcpIHtcbiAgICAgICAgICBrZXkgPSAnQ29udHJvbCc7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBrZXkgPSBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGluc2VydE11bHRpRHJhZ0VsZW1lbnRzKGNsb25lc0luc2VydGVkLCByb290RWwpIHtcbiAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCwgaSkge1xuICAgIHZhciB0YXJnZXQgPSByb290RWwuY2hpbGRyZW5bbXVsdGlEcmFnRWxlbWVudC5zb3J0YWJsZUluZGV4ICsgKGNsb25lc0luc2VydGVkID8gTnVtYmVyKGkpIDogMCldO1xuICAgIGlmICh0YXJnZXQpIHtcbiAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUobXVsdGlEcmFnRWxlbWVudCwgdGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxyXG4gKiBJbnNlcnQgbXVsdGktZHJhZyBjbG9uZXNcclxuICogQHBhcmFtICB7W0Jvb2xlYW5dfSBlbGVtZW50c0luc2VydGVkICBXaGV0aGVyIHRoZSBtdWx0aS1kcmFnIGVsZW1lbnRzIGFyZSBpbnNlcnRlZFxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gcm9vdEVsXHJcbiAqL1xuZnVuY3Rpb24gaW5zZXJ0TXVsdGlEcmFnQ2xvbmVzKGVsZW1lbnRzSW5zZXJ0ZWQsIHJvb3RFbCkge1xuICBtdWx0aURyYWdDbG9uZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xvbmUsIGkpIHtcbiAgICB2YXIgdGFyZ2V0ID0gcm9vdEVsLmNoaWxkcmVuW2Nsb25lLnNvcnRhYmxlSW5kZXggKyAoZWxlbWVudHNJbnNlcnRlZCA/IE51bWJlcihpKSA6IDApXTtcbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICByb290RWwuaW5zZXJ0QmVmb3JlKGNsb25lLCB0YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290RWwuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiByZW1vdmVNdWx0aURyYWdFbGVtZW50cygpIHtcbiAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgIGlmIChtdWx0aURyYWdFbGVtZW50ID09PSBkcmFnRWwkMSkgcmV0dXJuO1xuICAgIG11bHRpRHJhZ0VsZW1lbnQucGFyZW50Tm9kZSAmJiBtdWx0aURyYWdFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobXVsdGlEcmFnRWxlbWVudCk7XG4gIH0pO1xufVxuXG5Tb3J0YWJsZS5tb3VudChuZXcgQXV0b1Njcm9sbFBsdWdpbigpKTtcblNvcnRhYmxlLm1vdW50KFJlbW92ZSwgUmV2ZXJ0KTtcblxuZXhwb3J0IGRlZmF1bHQgU29ydGFibGU7XG5leHBvcnQgeyBNdWx0aURyYWdQbHVnaW4gYXMgTXVsdGlEcmFnLCBTb3J0YWJsZSwgU3dhcFBsdWdpbiBhcyBTd2FwIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnN0YXJ0LW1lc3NhZ2luZyB7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0sIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIkhlbHZldGljYSBOZXVlXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIFwiS29oaW5vb3IgRGV2YW5hZ2FyaVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS10aXRsZSk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG5rYmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweCA3cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNlOWVkZWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJmMzI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzYjNlNDIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAwICMxZTIxMjQ7XG59XG5cbi5yZW1pbmRlckNoYXRJdGVtIC5yZW1pbmRlckJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xufVxuXG4ucmVtaW5kZXJCdG4sXG4uZG9uZUJ0biB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yZW1pbmRlckJ0bjpob3Zlcixcbi5kb25lQnRuOmhvdmVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLXByaW1hcnktYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tcHJpbWFyeSk7XG59XG4ucmVtaW5kZXJCdG46aG92ZXIgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQsXG4uZG9uZUJ0bjpob3ZlciAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWwgIWltcG9ydGFudDtcbn1cblxuLngxMGw2dHFrLnhoOHllajMueDFnNDJmY3Y6aG92ZXIgLmRvbmVCdG4sXG4ueDEwbDZ0cWsueGg4eWVqMy54MWc0MmZjdjpob3ZlciAucmVtaW5kZXJCdG4sIC54MTBsNnRxay54aDh5ZWozLngxZzQyZmN2OmhhcyguX2FrNzIuX2FrNzMuX2FrN3ApIC5kb25lQnRuLFxuLngxMGw2dHFrLnhoOHllajMueDFnNDJmY3Y6aGFzKC5fYWs3Mi5fYWs3My5fYWs3cCkgLnJlbWluZGVyQnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcbn1cbi54MTBsNnRxay54aDh5ZWozLngxZzQyZmN2OmhvdmVyIC5kb25lQnRuIC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkLFxuLngxMGw2dHFrLnhoOHllajMueDFnNDJmY3Y6aG92ZXIgLnJlbWluZGVyQnRuIC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkLCAueDEwbDZ0cWsueGg4eWVqMy54MWc0MmZjdjpoYXMoLl9hazcyLl9hazczLl9hazdwKSAuZG9uZUJ0biAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCxcbi54MTBsNnRxay54aDh5ZWozLngxZzQyZmN2OmhhcyguX2FrNzIuX2FrNzMuX2FrN3ApIC5yZW1pbmRlckJ0biAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi54MTBsNnRxay54aDh5ZWozLngxZzQyZmN2OmhvdmVyIGRpdltyb2xlPWdyaWRjZWxsXS5fYWs4aSA+IHNwYW46bnRoLWNoaWxkKC1uKzIpLCAueDEwbDZ0cWsueGg4eWVqMy54MWc0MmZjdjpoYXMoLl9hazcyLl9hazczLl9hazdwKSBkaXZbcm9sZT1ncmlkY2VsbF0uX2FrOGkgPiBzcGFuOm50aC1jaGlsZCgtbisyKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ueDEwbDZ0cWsueGg4eWVqMy54MWc0MmZjdjpob3ZlciBkaXZbcm9sZT1ncmlkY2VsbF0uX2FrOGkgPiBzcGFuOmxhc3QtY2hpbGQgYnV0dG9uLCAueDEwbDZ0cWsueGg4eWVqMy54MWc0MmZjdjpoYXMoLl9hazcyLl9hazczLl9hazdwKSBkaXZbcm9sZT1ncmlkY2VsbF0uX2FrOGkgPiBzcGFuOmxhc3QtY2hpbGQgYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG4ueDEwbDZ0cWsueGg4eWVqMy54MWc0MmZjdjpob3ZlciBkaXZbcm9sZT1ncmlkY2VsbF0uX2FrOGkgPiBzcGFuOmxhc3QtY2hpbGQgYnV0dG9uOmxhc3QtY2hpbGQsIC54MTBsNnRxay54aDh5ZWozLngxZzQyZmN2OmhhcyguX2FrNzIuX2FrNzMuX2FrN3ApIGRpdltyb2xlPWdyaWRjZWxsXS5fYWs4aSA+IHNwYW46bGFzdC1jaGlsZCBidXR0b246bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi54MTBsNnRxay54aDh5ZWozLngxZzQyZmN2OmhvdmVyIGRpdltyb2xlPWdyaWRjZWxsXS5fYWs4aSA+IHNwYW46bGFzdC1jaGlsZCBidXR0b246Zmlyc3QtY2hpbGQsIC54MTBsNnRxay54aDh5ZWozLngxZzQyZmN2OmhhcyguX2FrNzIuX2FrNzMuX2FrN3ApIGRpdltyb2xlPWdyaWRjZWxsXS5fYWs4aSA+IHNwYW46bGFzdC1jaGlsZCBidXR0b246Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbi54MTBsNnRxay54aDh5ZWozLngxZzQyZmN2OmhhcygueDFuMm9ucjYpOmhvdmVyOjphZnRlciwgLngxMGw2dHFrLnhoOHllajMueDFnNDJmY3Y6aGFzKC5fYWs3Mi5fYWs3My5fYWs3cCk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdW5yZWFkLW1hcmtlci1iYWNrZ3JvdW5kKTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAubW9kYWwgLm1vZGFsLW1kIC54eGJiMXJxLnh4YmIxcnEge1xuICAgIHdpZHRoOiA0NDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAubW9kYWwgLm1vZGFsLW1kIC54YzUzMHUwLnhjNTMwdTAge1xuICAgIHdpZHRoOiA0NDBweDtcbiAgfVxufVxuLm1vZGFsIC5tb2RhbC10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1vZGFsIC5tb2RhbC10aXRsZSAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLm1vZGFsIC5tb2RhbC1oZWFkZXIge1xuICBtYXJnaW4tbGVmdDogMzZweDtcbiAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtZGVmYXVsdC1ob3Zlcik7XG59XG4ubW9kYWwgLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cblxuLnNub296ZS1vcHRpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuLnNub296ZS1vcHRpb25zID4gLm9wdGlvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4ub3B0aW9uIHtcbiAgcGFkZGluZzogMTVweCAzNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleDogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbn1cbi5vcHRpb24gaW5wdXRbdHlwZT1yYWRpb10ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLm9wdGlvbjpoYXMoaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdW5yZWFkLW1hcmtlci1iYWNrZ3JvdW5kKTtcbn1cbi5vcHRpb246bm90KDpoYXMoaW5wdXRbdHlwZT1kYXRlXSkpOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWRlZmF1bHQtaG92ZXIpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXByaW1hcnktcmdiKSwgMC4xMik7XG59XG4ub3B0aW9uIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBhY2NlbnQtY29sb3I6ICMwMDk2ODg7XG59XG4ub3B0aW9uIGlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcixcbi5vcHRpb24gaW5wdXRbdHlwZT10aW1lXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5vcHRpb24gaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbi5vcHRpb24gaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1jbGVhci1idXR0b24sXG4ub3B0aW9uIGlucHV0W3R5cGU9dGltZV06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG4ub3B0aW9uIGlucHV0W3R5cGU9dGltZV06Oi13ZWJraXQtY2xlYXItYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5vcHRpb24gaW5wdXRbdHlwZT1kYXRlXSxcbi5vcHRpb24gaW5wdXRbdHlwZT10aW1lXSB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250OiBpbmhlcml0O1xufVxuLm9wdGlvbiBpbnB1dFt0eXBlPWRhdGVdOmZvY3VzLFxuLm9wdGlvbiBpbnB1dFt0eXBlPXRpbWVdOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNub296ZUNvbmRpdGlvblNlbGVjdCB7XG4gIHdpZHRoOiBhdXRvO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG1lbnVsaXN0O1xuICAtbW96LWFwcGVhcmFuY2U6IG1lbnVsaXN0O1xuICBhcHBlYXJhbmNlOiBtZW51bGlzdDtcbn1cblxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQuZmlsbCB7XG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcIkZJTExcIiAxLCBcIndnaHRcIiA0MDAsIFwiR1JBRFwiIDAsIFwib3BzelwiIDI0O1xufVxuXG4uY3VzdG9tTmF2QmFySXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG4uY3VzdG9tTmF2QmFySXRlbS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWJhci1pdGVtLWJhY2tncm91bmQtYWN0aXZlKTtcbn1cbi5jdXN0b21OYXZCYXJJdGVtLmFjdGl2ZSAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcIkZJTExcIiAxLCBcIndnaHRcIiA0MDAsIFwiR1JBRFwiIDAsIFwib3BzelwiIDI0O1xufVxuXG5bZGF0YS1qcy1uYXZiYXI9dHJ1ZV06aGFzKC5fYWp2Ny5fYWp2OC5fYWp2YikgLmN1c3RvbU5hdkJhckl0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuW2RhdGEtanMtbmF2YmFyPXRydWVdOmhhcyguX2FqdjcuX2FqdjguX2FqdmIpIC5jdXN0b21OYXZCYXJJdGVtLmFjdGl2ZSAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcIkZJTExcIiAwLCBcIndnaHRcIiA0MDAsIFwiR1JBRFwiIDAsIFwib3BzelwiIDI0O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIHBhZGRpbmc6IDE1cHggMzZweDtcbn1cbi5mb3JtLWdyb3VwIC5mb3JtLWlucHV0IGxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZm9ybS1ncm91cCAuZm9ybS1pbnB1dCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG1pbi1oZWlnaHQ6IDEuNDdlbTtcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgZm9udC1zaXplOiAxLjA2MjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjQ3ZW07XG59XG4uZm9ybS1ncm91cCAuZm9ybS1pbnB1dCBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlucHV0LWJvcmRlci1hY3RpdmUpO1xufVxuXG4uZm9sZGVycy1saXN0IHtcbiAgcGFkZGluZzogMCAzNnB4O1xufVxuLmZvbGRlcnMtbGlzdCAuZm9sZGVyLWl0ZW0ge1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZm9sZGVycy1saXN0IC5mb2xkZXItaXRlbSAuZm9sZGVyLW5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgY3Vyc29yOiBncmFiO1xufVxuLmZvbGRlcnMtbGlzdCAuZm9sZGVyLWl0ZW0gLmZvbGRlci1uYW1lIC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcbiAgY29sb3I6IHZhcigtLWljb24tZml4ZWQpO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5mb2xkZXJzLWxpc3QgLmZvbGRlci1pdGVtIC5mb2xkZXItYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbHVtbi1nYXA6IDhweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw2SkFBQTtFQUdBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQURGOztBQU1FO0VBQ0UsZ0NBQUE7QUFISjs7QUFPQTs7RUFFRSxhQUFBO0FBSkY7O0FBT0E7O0VBRUUsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSw0QkFBQTtBQUpGO0FBTUU7O0VBQ0UsMENBQUE7QUFISjs7QUFVSTs7O0VBRUUsK0JBQUE7QUFOTjtBQVFNOzs7RUFDRSxlQUFBO0FBSlI7QUFTSTtFQUNFLGFBQUE7QUFQTjtBQVlNO0VBQ0UsaUJBQUE7QUFWUjtBQVdRO0VBQ0UsZUFBQTtBQVRWO0FBV1E7RUFDRSxpQkFBQTtBQVRWO0FBZUU7RUFFRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsaURBQUE7QUFkSjs7QUFrQkE7RUFHTTtJQUNFLFlBQUE7RUFqQk47QUFDRjtBQXNCQTtFQUdNO0lBQ0UsWUFBQTtFQXRCTjtBQUNGO0FBNEJFO0VBQ0UsdUNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUExQko7QUE0Qkk7RUFDRSxpQkFBQTtBQTFCTjtBQThCRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdEQUFBO0FBNUJKO0FBK0JFO0VBQ0UsaUJBQUE7QUE3Qko7O0FBa0NBO0VBQ0UsV0FBQTtFQUNBLHVHQUFBO0FBL0JGO0FBbUNFO0VBQ0Usa0JBQUE7QUFqQ0o7O0FBc0NBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBbkNGO0FBc0NFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUFwQ0o7QUF3Q0U7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsaURBQUE7QUF0Q0o7QUEwQ0U7RUFDRSw2Q0FBQTtFQUNBLDBDQUFBO0FBeENKO0FBNENFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQTFDSjtBQThDRTs7RUFFRSxhQUFBO0FBNUNKO0FBK0NFOzs7O0VBSUUsYUFBQTtBQTdDSjtBQWlERTs7RUFFRSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUEvQ0o7QUFtREU7O0VBRUUsYUFBQTtBQWpESjs7QUFxREE7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBbERGOztBQXNERTtFQUNFLGtFQUFBO0FBbkRKOztBQXdEQTtFQUNFLHlCQUFBO0FBckRGO0FBdURFO0VBQ0Usd0RBQUE7QUFyREo7QUF1REk7RUFDRSxrRUFBQTtBQXJETjs7QUE4RE07RUFDRSxvQ0FBQTtBQTNEUjtBQTZEUTtFQUNFLGtFQUFBO0FBM0RWOztBQWtFQTtFQUNFLGtCQUFBO0FBL0RGO0FBaUVFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBL0RKO0FBa0VFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUVBLG9CQUFBO0VBQ0EsbUJBQUE7QUFsRUo7QUFvRUk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1EQUFBO0FBbEVOOztBQXVFQTtFQUNFLGVBQUE7QUFwRUY7QUFzRUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBcEVKO0FBc0VJO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtBQXBFTjtBQXNFTTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7QUFwRVI7QUF3RUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBdEVOXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIGNoYXRBY3Rpb25CdXR0b24oaWNvbiwgb25DbGljayA9IHt9LCBjbGFzc0xpc3QgPSBcIlwiKSB7XG4gIC8vIENyZWF0ZSBidXR0b24gZWxlbWVudFxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NOYW1lID0gYHhuNnh5MnMgeDFxeDVjdDIgeHNnajZvNiB4cTIybng1IHgxNmRzYzM3ICR7Y2xhc3NMaXN0fWA7XG4gIGJ1dHRvbi5zdHlsZS53aWR0aCA9IFwiMjBweFwiO1xuICBidXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuXG4gIC8vIENyZWF0ZSBzcGFuIGVsZW1lbnQgZm9yIGljb25cbiAgY29uc3QgaWNvblNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaWNvblNwYW4uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI7XG4gIGljb25TcGFuLnRleHRDb250ZW50ID0gaWNvbjtcblxuICAvLyBBcHBlbmQgdGhlIHNwYW5zIHRvIHRoZSBidXR0b25cbiAgYnV0dG9uLmFwcGVuZENoaWxkKGljb25TcGFuKTtcblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzXG4gIGlmICh0eXBlb2Ygb25DbGljayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImNsaWNrXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIG9uQ2xpY2soKTtcbiAgICAgIH0sXG4gICAgICB0cnVlXG4gICAgKTtcbiAgfVxuXG4gIC8vIEFkZCBtb3VzZWRvd24gYW5kIG1vdXNldXAgbGlzdGVuZXJzXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwibW91c2Vkb3duXCIsXG4gICAgKGV2ZW50KSA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKSxcbiAgICB0cnVlXG4gICk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZXZlbnQpID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpLCB0cnVlKTtcblxuICAvLyBSZXR1cm4gdGhlIGJ1dHRvbiBlbGVtZW50XG4gIHJldHVybiBidXR0b247XG59XG4iLCJpbXBvcnQgeyBzaW11bGF0ZUtleVByZXNzIH0gZnJvbSBcIi4uL3V0aWxzL2V2ZW50SGVscGVyc1wiO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gPGxpPiBlbGVtZW50IHdpdGggYSBnaXZlbiB0ZXh0IGFuZCBjbGljayBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRoZSB0ZXh0IGNvbnRlbnQgdG8gYmUgYWRkZWQgdG8gdGhlIDxsaT4gZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ2xpY2tDYWxsYmFjayAtIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCB3aGVuIHRoZSA8bGk+IGVsZW1lbnQgaXMgY2xpY2tlZC5cbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gVGhlIGNyZWF0ZWQgPGxpPiBlbGVtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhdE1lbnVJdGVtKFxuICB0ZXh0LFxuICBzaG9ydGN1dCA9IFwiXCIsXG4gIGNhbGxiYWNrID0ge30sXG4gIGFjdGl2ZSA9IGZhbHNlXG4pIHtcbiAgLy8gQ3JlYXRlIHRoZSA8bGk+IGVsZW1lbnRcbiAgY29uc3QgbGlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaUVsZW1lbnQudGFiSW5kZXggPSAwO1xuICBsaUVsZW1lbnQuY2xhc3NOYW1lID0gXCJfYWotciBfYWotcSBfYWotX1wiO1xuICBsaUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1hbmltYXRlLWRyb3Bkb3duLWl0ZW1cIiwgXCJ0cnVlXCIpO1xuICBsaUVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuXG4gIC8vIEhhbmRsZSBob3ZlciBzdGF0ZVxuICBsaUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgbGlFbGVtZW50LmNsYXNzTmFtZSA9IFwiX2FqLXMgX2FqLXIgX2FqLXEgX2FqLV9cIjtcbiAgfSk7XG4gIGxpRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgIGxpRWxlbWVudC5jbGFzc05hbWUgPSBcIl9hai1yIF9hai1xIF9hai1fXCI7XG4gIH0pO1xuXG4gIC8vIENyZWF0ZSB0aGUgPGRpdj4gZWxlbWVudCBpbnNpZGUgPGxpPlxuICBjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2RWxlbWVudC5jbGFzc05hbWUgPSBcIl9hai16IF9hai10IF9hbHhvXCI7XG4gIGRpdkVsZW1lbnQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImJ1dHRvblwiKTtcbiAgZGl2RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGRpdkVsZW1lbnQuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gIGRpdkVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIyNHB4XCI7XG5cbiAgLy8gQ3JlYXRlIGEgc3BhbiBmb3IgdGhlIGNoYXQgbmFtZVxuICBjb25zdCBjaGF0TmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY2hhdE5hbWVTcGFuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgY2hhdE5hbWVTcGFuLnN0eWxlLmZsZXggPSBcIjFcIjtcblxuICAvLyBBZGQgdGhlIGNoYXQgbmFtZSBzcGFuIHRvIHRoZSA8ZGl2PlxuICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGNoYXROYW1lU3Bhbik7XG5cbiAgLy8gQ3JlYXRlIGFuZCBhZGQgdGhlIGNoZWNrIGljb24gaWYgYWN0aXZlXG4gIGlmIChhY3RpdmUpIHtcbiAgICBjb25zdCBjaGVja0ljb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY2hlY2tJY29uU3Bhbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIjtcbiAgICBjaGVja0ljb25TcGFuLnRleHRDb250ZW50ID0gXCJjaGVja1wiOyAvLyBNYXRlcmlhbCBJY29ucyBjaGVjayBtYXJrXG4gICAgY2hlY2tJY29uU3Bhbi5zdHlsZS5jb2xvciA9IFwidmFyKC0tdW5yZWFkLW1hcmtlci1iYWNrZ3JvdW5kKVwiO1xuICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hlY2tJY29uU3Bhbik7XG4gIH1cblxuICBpZiAoc2hvcnRjdXQpIHtcbiAgICBjb25zdCBzaG9ydGN1dEljb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImtiZFwiKTtcbiAgICBzaG9ydGN1dEljb25TcGFuLnRleHRDb250ZW50ID0gc2hvcnRjdXQ7XG4gICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChzaG9ydGN1dEljb25TcGFuKTtcbiAgfVxuXG4gIC8vIEFwcGVuZCB0aGUgPGRpdj4gdG8gdGhlIDxsaT5cbiAgbGlFbGVtZW50LmFwcGVuZENoaWxkKGRpdkVsZW1lbnQpO1xuXG4gIC8vIEF0dGFjaCB0aGUgY2xpY2sgZXZlbnQgbGlzdGVuZXJcbiAgbGlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2FsbGJhY2soKTtcbiAgICBzaW11bGF0ZUtleVByZXNzKGRvY3VtZW50LmJvZHksIDI3KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGxpRWxlbWVudDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkcmF3ZXIodGl0bGUsIGNvbnRlbnQpIHtcbiAgcmV0dXJuIGBcbiAgICA8c3BhbiBjbGFzcz1cIng1eXIyMWQgeDE3cW9waGUgeDZpa204ciB4MTB3bHQ2MiB4MTBsNnRxayB4MTN2aWZ2eSB4aDh5ZWozXCI+XG4gICAgICA8ZGl2IHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsPVwiU25vb3plIHRhYiBkcmF3ZXJcIiBpZD1cInNub296ZWRDaGF0c0RyYXdlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwieDc4enVtNSB4ZHQ1eXRmIHg1eXIyMWQgeDE3cW9waGUgeDZpa204ciB4MTB3bHQ2MiB4NjdiYjd3IHgxMGw2dHFrIHgxM3ZpZnZ5IHhoOHllajMgeDE1MHdhNm0geG5wdXhlcyBjb3B5YWJsZS1hcmVhXCI+XG4gICAgICAgICAgPGhlYWRlciBjbGFzcz1cIng5ZjYxOSB4Nzh6dW01IHgxb2t3MGJrIHg2czBkbjQgeDdqNjUzMiB4YzczdTNjIHg5bWZhNHIgeHp3aWZ5bSB4MTUwd2E2bVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIng3OHp1bTUgeDFva3cwYmsgeDZzMGRuNCB4aDh5ZWozIHgxNHdpNHh3IHhleHg4eXUgeDR1YXA1IHgxOGQ5aTY5IHhraGQ2c2RcIj5cbiAgICAgICAgICAgICAgPGRpdiB0aXRsZT1cIlNub296ZWRcIiBjbGFzcz1cIngxMDRraWJiIHgxaXlqcW8yIHg0b3N5eGcgeDZpa204ciB4MTB3bHQ2MiB4MW16dDNwayB4bzQ0MmwxIHgxdWE1dHViIHgxeTMzMmk1IHgxMTducXY0IHgxYXVlYW1yIHgxd20zNWcgeGo4bDlyMlwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIngxcWxxeWw4IHgxcGQzZWd6IHhjZ2s0a2lcIiBhcmlhLWxhYmVsPVwiXCI+XG4gICAgICAgICAgICAgICAgICAke3RpdGxlfVxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIngxb2t3MGJrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIl9hanYyIF9hanYxXCI+PHNwYW4gY2xhc3M9XCJcIj48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ4NXlyMjFkIHg3OHp1bTUgeGR0NXl0ZiB4NmlrbThyIHgxMHdsdDYyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwieDFjNHZ6NGYgeHM4M20wayB4ZGw3Mmo5IHgxZzc3c2M3IHg3OHp1bTUgeG96cWl3MyB4MW9hM3FvaCB4MTJmazRwOCB4ZXV1Z2xpIHgybHduMWogeDFuaHZjdzEgeGR0NXl0ZiB4NnMwZG40XCIgc3R5bGU9XCJmbGV4LXNocmluazogMDtcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInhoOHllajNcIj5cbiAgICAgICAgICAgICAgICAke2NvbnRlbnR9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZm9sZGVyQnV0dG9uKFxuICBpZCA9IDAsXG4gIGlzQWN0aXZlID0gZmFsc2UsXG4gIHRleHQgPSBcIlwiLFxuICBvbkNsaWNrID0ge30sXG4gIG9uRG91YmxlQ2xpY2sgPSB7fSxcbiAgdW5yZWFkQ291bnQgPSAwXG4pIHtcbiAgLy8gQ3JlYXRlIGJ1dHRvbiBlbGVtZW50XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc05hbWUgPSBpc0FjdGl2ZVxuICAgID8gXCJ4amIycDBpIHgxeXBkb2hrIHg5NzJmYmYgeGNmdXg2bCB4MXFoaDk4NSB4bTBtMzluIHh6cXl4OGkgeHFhOTZ5ayB4dndvYmFjIHgxaDJ5MzEwIHg2cHJ4eGYgeG8xbDhibSB4MWJ0dXBicCB4ZHhuOHIgeG11dTlsbSB4MTY5MHNxOSB4MXlyc3l5biB4MTBiNmFxcSB4MXllM2dvdSB4bjY3MDhkXCJcbiAgICA6IFwieGpiMnAwaSB4MXlwZG9oayB4OTcyZmJmIHhjZnV4NmwgeDFxaGg5ODUgeG0wbTM5biB4enF5eDhpIHhxYTk2eWsgeHZ3b2JhYyB4MWgyeTMxMCB4MW12Z2ozOSB4MXlreTZ4dyB4NnByeHhmIHhvMWw4Ym0geDFidHVwYnAgeGY1NzN1biB4MXlyc3l5biB4MTBiNmFxcSB4MXllM2dvdSB4bjY3MDhkXCI7XG5cbiAgYnV0dG9uLnRhYkluZGV4ID0gMDtcbiAgYnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZm9sZGVyLSR7aWR9YCk7IC8vIFNldCBJRCBmb3IgcmVmZXJlbmNlXG5cbiAgLy8gQ3JlYXRlIGlubmVyIGRpdlxuICBjb25zdCBpbm5lckRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbm5lckRpdjEuY2xhc3NOYW1lID1cbiAgICBcIngxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeGV1dWdsaSB4Mmx3bjFqIHgxbmh2Y3cxIHgxcTBnM25wIHg2czBkbjQgYWxpZ24taXRlbXMtY2VudGVyXCI7IC8vIEFkZCBhbGlnbi1pdGVtcy1jZW50ZXIgY2xhc3NcblxuICAvLyBDcmVhdGUgaW5uZXIgZGl2IHRleHRcbiAgY29uc3QgaW5uZXJEaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5uZXJEaXYyLnRleHRDb250ZW50ID0gdGV4dDtcblxuICBpZiAodW5yZWFkQ291bnQpIHtcbiAgICBpbm5lckRpdjIuaW5uZXJIVE1MICs9IGA8c3BhblxuICAgICAgY2xhc3M9XCJ4MXJnNW9odSB4MXhhYWRkNyB4MXBnNWdrZSB4bzV2MDE0IHgxdTI4ZW80IHgyYjh1aWQgeDE2ZHNjMzcgeDE4YmE1ZjkgeDFzYmwybCB4eTljbzl3IHg1cjE3NHMgeDdoM3NodiB4MXRzZWxsaiB4NjgyZHRvIHgxZTAxa3FkIHhwcXQzN2QgeDlicGFhaSB4azUweXNuXCJcbiAgICAgIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDhweDtcIlxuICAgID5cbiAgICAgICR7dW5yZWFkQ291bnR9XG4gICAgPC9zcGFuPmA7XG4gIH1cblxuICAvLyBBcHBlbmQgaW5uZXIgZGl2cyB0byBidXR0b25cbiAgaW5uZXJEaXYxLmFwcGVuZENoaWxkKGlubmVyRGl2Mik7XG4gIGJ1dHRvbi5hcHBlbmRDaGlsZChpbm5lckRpdjEpO1xuXG4gIGlmICh0eXBlb2Ygb25DbGljayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBvbkNsaWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAodHlwZW9mIG9uRG91YmxlQ2xpY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgb25Eb3VibGVDbGljaygpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gUmV0dXJuIHRoZSBidXR0b24gZWxlbWVudFxuICByZXR1cm4gYnV0dG9uO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5tb2RhbENvbnRlbnQgPSBvcHRpb25zLm1vZGFsQ29udGVudCB8fCBcIlwiO1xuICAgIHRoaXMuZm9ybUhhbmRsZXIgPSBvcHRpb25zLmZvcm1IYW5kbGVyIHx8IG51bGw7XG4gICAgdGhpcy5zaG9ydGN1dEhhbmRsZXIgPSBvcHRpb25zLnNob3J0Y3V0SGFuZGxlciB8fCBudWxsOyAvLyBDdXN0b20gc2hvcnRjdXQgaGFuZGxlclxuXG4gICAgdGhpcy5tb2RhbEVsZW1lbnQgPSB0aGlzLmNyZWF0ZU1vZGFsRWxlbWVudCgpO1xuXG4gICAgdGhpcy5oYW5kbGVFc2NLZXkgPSB0aGlzLmhhbmRsZUVzY0tleS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrID0gdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUtleURvd24gPSB0aGlzLmhhbmRsZUtleURvd24uYmluZCh0aGlzKTtcblxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgY3JlYXRlTW9kYWxFbGVtZW50KCkge1xuICAgIGNvbnN0IG1vZGFsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RhbERpdi5jbGFzc0xpc3QuYWRkKFxuICAgICAgXCJ4MTBsNnRxa1wiLFxuICAgICAgXCJ4MTN2aWZ2eVwiLFxuICAgICAgXCJ4ZHM2ODdjXCIsXG4gICAgICBcIngxZXkybTFjXCIsXG4gICAgICBcIngxN3FvcGhlXCJcbiAgICApO1xuICAgIG1vZGFsRGl2LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XG4gICAgbW9kYWxEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiB0YWJpbmRleD1cIi0xXCIgY2xhc3M9XCJtb2RhbFwiPlxuICAgICAgICA8ZGl2IGRhdGEtYW5pbWF0ZS1tb2RhbC1iYWNrZHJvcD1cInRydWVcIlxuICAgICAgICAgIGNsYXNzPVwieGl4eGlpNCB4MTN2aWZ2eSB4MTdxb3BoZSB4OWY2MTkgeGg4eWVqMyB4NXlyMjFkIHgxYnB0OXBtIHh3MmNzeGMgeDFvZGp3MGYgeGEwM3N6bSB4bnB1eGVzIGNvcHlhYmxlLWFyZWFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwieDlmNjE5IHg3OHp1bTUgeGR0NXl0ZiB4NnMwZG40IHhsNTZqN2sgeGg4eWVqMyB4cGI0OGc3IHgxam4waGptIHgxdXMxOXRxXCJcbiAgICAgICAgICAgIHJvbGU9XCJkaWFsb2dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ4OWY2MTkgeDc4enVtNSB4MWM0dno0ZiB4MmxhaDBzIHhkbDcyajkgeGR0NXl0ZiB4a3dmaHF5IHgxN2U2ZnpnIHgxNWRoMjU2IHgxdDd1M3h5IHgxc2h3NHVyIHg2aWttOHIgeDEwd2x0NjIgeDE0YXRrZmMgeGV4eDh5dSB4NHVhcDUgeDE4ZDlpNjkgeGtoZDZzZCB4MWllazk3YVwiXG4gICAgICAgICAgICAgIGRhdGEtYW5pbWF0ZS1tb2RhbC1wb3B1cD1cInRydWVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIngxbjJvbnI2IHgxaXlqcW8yIHhzODNtMGsgeDFsN2tsaGcgeDFtenQzcGsgeGVhZjRpOFwiIGRhdGEtYW5pbWF0ZS1tb2RhbC1ib2R5PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5tb2RhbENvbnRlbnR9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICByZXR1cm4gbW9kYWxEaXY7XG4gIH1cblxuICBpbml0aWFsaXplKCkge1xuICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gdGhpcy5tb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgaWYgKGZvcm1FbGVtZW50ICYmIHRoaXMuZm9ybUhhbmRsZXIpIHtcbiAgICAgIGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIEZpbmQgdGhlIHN1Ym1pdCBidXR0b24gdGhhdCB3YXMgY2xpY2tlZFxuICAgICAgICBjb25zdCBzdWJtaXR0ZXIgPVxuICAgICAgICAgIGUuc3VibWl0dGVyIHx8IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIEZvcm1EYXRhIGZyb20gdGhlIGZvcm1cbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybUVsZW1lbnQpO1xuXG4gICAgICAgIC8vIE1hbnVhbGx5IGFkZCB0aGUgYWN0aW9uIGZyb20gdGhlIGNsaWNrZWQgYnV0dG9uLCBpZiBhdmFpbGFibGVcbiAgICAgICAgaWYgKHN1Ym1pdHRlciAmJiBzdWJtaXR0ZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3Rpb25cIikpIHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJmb3JtQWN0aW9uXCIsIHN1Ym1pdHRlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGlvblwiKSk7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwib2JqZWN0SWRcIiwgc3VibWl0dGVyLmdldEF0dHJpYnV0ZShcImRhdGEtb2JqZWN0LWlkXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBhd2FpdCB0aGlzLmZvcm1IYW5kbGVyKGZvcm1EYXRhKTtcbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVFc2NLZXkpO1xuICAgIGNvbnN0IGJhY2tkcm9wID0gdGhpcy5tb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiW2RhdGEtYW5pbWF0ZS1tb2RhbC1iYWNrZHJvcF1cIlxuICAgICk7XG5cbiAgICBpZiAoYmFja2Ryb3ApIHtcbiAgICAgIGJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljayk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRXNjS2V5KGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU91dHNpZGVDbGljayhlKSB7XG4gICAgY29uc3QgcG9wdXAgPSB0aGlzLm1vZGFsRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtYW5pbWF0ZS1tb2RhbC1wb3B1cF1cIik7XG4gICAgaWYgKCFwb3B1cC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5Nb2RhbCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubW9kYWxFbGVtZW50KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUtleURvd24sIHRydWUpOyAvLyBDYXB0dXJlIGtleWRvd24gZXZlbnRzXG4gIH1cblxuICBjbG9zZU1vZGFsKCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5tb2RhbEVsZW1lbnQpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5RG93biwgdHJ1ZSk7IC8vIFJlbW92ZSBrZXlkb3duIGV2ZW50IGxpc3RlbmVyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVFc2NLZXkpO1xuICAgIGNvbnN0IGJhY2tkcm9wID0gdGhpcy5tb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiW2RhdGEtYW5pbWF0ZS1tb2RhbC1iYWNrZHJvcF1cIlxuICAgICk7XG4gICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICBiYWNrZHJvcC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2spO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUtleURvd24oZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNob3J0Y3V0SGFuZGxlcikge1xuICAgICAgdGhpcy5zaG9ydGN1dEhhbmRsZXIoZSk7IC8vIENhbGwgY3VzdG9tIHNob3J0Y3V0IGhhbmRsZXJcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUHJldmVudCBkZWZhdWx0IGFjdGlvbiBmb3IgYWxsIG90aGVyIGtleXNcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbmF2QmFySXRlbShkcmF3ZXJJZCwgdGl0bGUsIGljb24sIG9uQ2xpY2sgPSB7fSkge1xuICAvLyBDcmVhdGUgdGhlIG1haW4gZGl2IGZvciB0aGUgbmF2IGl0ZW1cbiAgY29uc3QgbmF2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2RGl2LmNsYXNzTmFtZSA9IFwiX2FqdjcgX2FqdmIgY3VzdG9tTmF2QmFySXRlbVwiO1xuICBuYXZEaXYuZGF0YXNldC5kcmF3ZXJJZCA9IGRyYXdlcklkO1xuXG4gIC8vIENyZWF0ZSB0aGUgYnV0dG9uIGRpdlxuICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidXR0b25EaXYuc2V0QXR0cmlidXRlKFwiYXJpYS1kaXNhYmxlZFwiLCBcImZhbHNlXCIpO1xuICBidXR0b25EaXYuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImJ1dHRvblwiKTtcbiAgYnV0dG9uRGl2LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgYnV0dG9uRGl2LmNsYXNzTmFtZSA9IFwiX2FqdjYgeDF5MWF3MWsgeDFzeHloMCB4d2liOHkyIHh1cmIwaGFcIjtcbiAgYnV0dG9uRGl2LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgdGl0bGUpO1xuICBidXR0b25EaXYuc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgdGl0bGUpO1xuICBidXR0b25EaXYuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xuXG4gIC8vIENyZWF0ZSB0aGUgaWNvbiBzcGFuXG4gIGNvbnN0IGljb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGljb25TcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtaWNvblwiLCBpY29uKTtcblxuICAvLyBVc2UgTWF0ZXJpYWwgSWNvbnMgZm9udCBmb3IgdGhlIGljb25cbiAgY29uc3QgaWNvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaWNvbkVsZW1lbnQuY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI7XG4gIGljb25FbGVtZW50LnRleHRDb250ZW50ID0gaWNvbjtcblxuICBpY29uU3Bhbi5hcHBlbmRDaGlsZChpY29uRWxlbWVudCk7XG5cbiAgLy8gQXBwZW5kIHRoZSBpY29uIHNwYW4gdG8gdGhlIGJ1dHRvbiBkaXZcbiAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGljb25TcGFuKTtcblxuICAvLyBDcmVhdGUgaW5uZXIgZGl2IGFuZCBhcHBlbmQgdG8gYnV0dG9uIGRpdlxuICBjb25zdCBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlubmVyRGl2LmNsYXNzTmFtZSA9IFwieDFuMm9ucjZcIjtcbiAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGlubmVyRGl2KTtcblxuICAvLyBBcHBlbmQgYnV0dG9uIGRpdiB0byBtYWluIG5hdiBpdGVtIGRpdlxuICBuYXZEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcblxuICBpZiAodHlwZW9mIG9uQ2xpY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGJ1dHRvbkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbGV0IHByZXZpb3VzbHlBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1c3RvbU5hdkJhckl0ZW0uYWN0aXZlXCIpO1xuICAgICAgaWYgKHByZXZpb3VzbHlBY3RpdmUpIHtcbiAgICAgICAgcHJldmlvdXNseUFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuXG4gICAgICBuYXZEaXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgb25DbGljaygpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5hdkRpdjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiByZW1pbmRlckNoYXRJdGVtKGNoYXRJZCwgdXNlck5hbWUsIHRpbWVzdGFtcCkge1xuICByZXR1cm4gYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwieDEwbDZ0cWsgeGg4eWVqMyB4MWc0MmZjdiB1bmxvYWRlZENoYXQgcmVtaW5kZXJDaGF0SXRlbVwiXG4gICAgICByb2xlPVwibGlzdGl0ZW1cIlxuICAgICAgc3R5bGU9XCJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIFwiXG4gICAgICBkYXRhLWNoYXQtaWQ9JHtjaGF0SWR9XG4gICAgICBkYXRhLWNoYXQtdXNlcm5hbWU9JHt1c2VyTmFtZX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwieDFuMm9ucjZcIj5cbiAgICAgICAgPGRpdiB0YWJpbmRleD1cIi0xXCIgY2xhc3M9XCJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiX2FrNzIgX2FrNzNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJfYWs4blwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiX2FrOGhcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIngxbjJvbnI2IHgxNHlqbDloIHh1ZGhqOTEgeDE4bnlrdDkgeHd3Mmd4dSBwcm9maWxlUGljXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDQ5cHg7IHdpZHRoOiA0OXB4XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIngxMGw2dHFrIHgxM3ZpZnZ5IHgxN3FvcGhlIHg3OHp1bTUgeDZzMGRuNCB4bDU2ajdrIHhoOHllajMgeDV5cjIxZCB4NzA1cWluIHhzcDhmc3pcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBkYXRhLWljb249XCJkZWZhdWx0LXVzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyMTIgMjEyXCIgaGVpZ2h0PVwiMjEyXCIgd2lkdGg9XCIyMTJcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiIGNsYXNzPVwieGg4eWVqMyB4NXlyMjFkXCIgdmVyc2lvbj1cIjEuMVwiIHg9XCIwcHhcIiB5PVwiMHB4XCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDIxMiAyMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRpdGxlPmRlZmF1bHQtdXNlcjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjREZFNUU3XCIgY2xhc3M9XCJiYWNrZ3JvdW5kXCIgZD1cIk0xMDYuMjUxLDAuNUMxNjQuNjUzLDAuNSwyMTIsNDcuODQ2LDIxMiwxMDYuMjVTMTY0LjY1MywyMTIsMTA2LjI1LDIxMkM0Ny44NDYsMjEyLDAuNSwxNjQuNjU0LDAuNSwxMDYuMjUgUzQ3Ljg0NiwwLjUsMTA2LjI1MSwwLjV6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiI0ZGRkZGRlwiIGNsYXNzPVwicHJpbWFyeVwiIGQ9XCJNMTczLjU2MSwxNzEuNjE1Yy0wLjYwMS0wLjkxNS0xLjI4Ny0xLjkwNy0yLjA2NS0yLjk1NWMtMC43NzctMS4wNDktMS42NDUtMi4xNTUtMi42MDgtMy4yOTkgYy0wLjk2NC0xLjE0NC0yLjAyNC0yLjMyNi0zLjE4NC0zLjUyN2MtMS43NDEtMS44MDItMy43MS0zLjY0Ni01LjkyNC01LjQ3Yy0yLjk1Mi0yLjQzMS02LjMzOS00LjgyNC0xMC4yMDQtNy4wMjYgYy0xLjg3Ny0xLjA3LTMuODczLTIuMDkyLTUuOTgtMy4wNTVjLTAuMDYyLTAuMDI4LTAuMTE4LTAuMDU5LTAuMTgtMC4wODdjLTkuNzkyLTQuNDQtMjIuMTA2LTcuNTI5LTM3LjQxNi03LjUyOSBzLTI3LjYyNCwzLjA4OS0zNy40MTYsNy41MjljLTAuMzM4LDAuMTUzLTAuNjUzLDAuMzE4LTAuOTg1LDAuNDc0Yy0xLjQzMSwwLjY3NC0yLjgwNiwxLjM3Ni00LjEyOCwyLjEwMSBjLTAuNzE2LDAuMzkzLTEuNDE3LDAuNzkyLTIuMTAxLDEuMTk3Yy0zLjQyMSwyLjAyNy02LjQ3NSw0LjE5MS05LjE1LDYuMzk1Yy0yLjIxMywxLjgyMy00LjE4MiwzLjY2OC01LjkyNCw1LjQ3IGMtMS4xNjEsMS4yMDEtMi4yMiwyLjM4NC0zLjE4NCwzLjUyN2MtMC45NjQsMS4xNDQtMS44MzIsMi4yNS0yLjYwOSwzLjI5OWMtMC43NzgsMS4wNDktMS40NjQsMi4wNC0yLjA2NSwyLjk1NSBjLTAuNTU3LDAuODQ4LTEuMDMzLDEuNjIyLTEuNDQ3LDIuMzI0Yy0wLjAzMywwLjA1Ni0wLjA3MywwLjExOS0wLjEwNCwwLjE3NGMtMC40MzUsMC43NDQtMC43OSwxLjM5Mi0xLjA3LDEuOTI2IGMtMC41NTksMS4wNjgtMC44MTgsMS42NzgtMC44MTgsMS42Nzh2MC4zOThjMTguMjg1LDE3LjkyNyw0My4zMjIsMjguOTg1LDcwLjk0NSwyOC45ODVjMjcuNjc4LDAsNTIuNzYxLTExLjEwMyw3MS4wNTUtMjkuMDk1IHYtMC4yODljMCwwLTAuNjE5LTEuNDUtMS45OTItMy43NzhDMTc0LjU5NCwxNzMuMjM4LDE3NC4xMTcsMTcyLjQ2MywxNzMuNTYxLDE3MS42MTV6XCI+PC9wYXRoPjxwYXRoIGZpbGw9XCIjRkZGRkZGXCIgY2xhc3M9XCJwcmltYXJ5XCIgZD1cIk0xMDYuMDAyLDEyNS41YzIuNjQ1LDAsNS4yMTItMC4yNTMsNy42OC0wLjczN2MxLjIzNC0wLjI0MiwyLjQ0My0wLjU0MiwzLjYyNC0wLjg5NiBjMS43NzItMC41MzIsMy40ODItMS4xODgsNS4xMi0xLjk1OGMyLjE4NC0xLjAyNyw0LjI0Mi0yLjI1OCw2LjE1LTMuNjdjMi44NjMtMi4xMTksNS4zOS00LjY0Niw3LjUwOS03LjUwOSBjMC43MDYtMC45NTQsMS4zNjctMS45NDUsMS45OC0yLjk3MWMwLjkxOS0xLjUzOSwxLjcyOS0zLjE1NSwyLjQyMi00Ljg0YzAuNDYyLTEuMTIzLDAuODcyLTIuMjc3LDEuMjI2LTMuNDU4IGMwLjE3Ny0wLjU5MSwwLjM0MS0xLjE4OCwwLjQ5LTEuNzkyYzAuMjk5LTEuMjA4LDAuNTQyLTIuNDQzLDAuNzI1LTMuNzAxYzAuMjc1LTEuODg3LDAuNDE3LTMuODI3LDAuNDE3LTUuODExIGMwLTEuOTg0LTAuMTQyLTMuOTI1LTAuNDE3LTUuODExYy0wLjE4NC0xLjI1OC0wLjQyNi0yLjQ5My0wLjcyNS0zLjcwMWMtMC4xNS0wLjYwNC0wLjMxMy0xLjIwMi0wLjQ5LTEuNzkzIGMtMC4zNTQtMS4xODEtMC43NjQtMi4zMzUtMS4yMjYtMy40NThjLTAuNjkzLTEuNjg1LTEuNTA0LTMuMzAxLTIuNDIyLTQuODRjLTAuNjEzLTEuMDI2LTEuMjc0LTIuMDE3LTEuOTgtMi45NzEgYy0yLjExOS0yLjg2My00LjY0Ni01LjM5LTcuNTA5LTcuNTA5Yy0xLjkwOS0xLjQxMi0zLjk2Ni0yLjY0My02LjE1LTMuNjdjLTEuNjM4LTAuNzctMy4zNDgtMS40MjYtNS4xMi0xLjk1OCBjLTEuMTgxLTAuMzU1LTIuMzktMC42NTUtMy42MjQtMC44OTZjLTIuNDY4LTAuNDg0LTUuMDM1LTAuNzM3LTcuNjgtMC43MzdjLTIxLjE2MiwwLTM3LjM0NSwxNi4xODMtMzcuMzQ1LDM3LjM0NSBDNjguNjU3LDEwOS4zMTcsODQuODQsMTI1LjUsMTA2LjAwMiwxMjUuNXpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJfYWs4bFwiPlxuICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJncmlkY2VsbFwiIGFyaWEtY29saW5kZXg9XCIyXCIgY2xhc3M9XCJfYWs4b1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJfYWs4cVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIl9hb3U4IF9hal9oXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgZGlyPVwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ4MWl5anFvMiB4NmlrbThyIHgxMHdsdDYyIHgxbjJvbnI2IHhseWlweXYgeHV4dzFmdCB4MXJnNW9odSBfYW8zZSB1c2VyTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtaW4taGVpZ2h0OiAwcHhcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgJHt1c2VyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIl9hazhpXCI+XG4gICAgICAgICAgICAgICAgICAke3RpbWVzdGFtcH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJfYWs4alwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJfYWs4a1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ4Nzh6dW01IHgxY3k4emhsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgZGlyPVwibHRyXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIngxaXlqcW8yIHg2aWttOHIgeDEwd2x0NjIgeDFuMm9ucjYgeGx5aXB5diB4dXh3MWZ0IHgxcmc1b2h1IF9hbzNlIGxhc3RNc2dcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwibWluLWhlaWdodDogMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwiZ3JpZGNlbGxcIiBhcmlhLWNvbGluZGV4PVwiMVwiIGNsYXNzPVwiX2FrOGlcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ4bjZ4eTJzIHgxcXg1Y3QyIHhzZ2o2bzYgeHEyMm54NSB4MTZkc2MzNyByZW1pbmRlckJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMjBweDsgb3BhY2l0eTogMVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgZmlsbFwiPnNjaGVkdWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcbn1cbiIsImltcG9ydCB7IGNoYXRBY3Rpb25CdXR0b24gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jaGF0QWN0aW9uQnV0dG9uXCI7XG4vLyBpbXBvcnQgeyBuYXZCYXJJdGVtIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmF2QmFySXRlbVwiO1xuLy8gaW1wb3J0IHsgZ2V0RWxlbWVudEJ5WHBhdGggfSBmcm9tIFwiLi4vLi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuaW1wb3J0IHsgbWFya0NoYXREb25lIH0gZnJvbSBcIi4uLy4uL3doYXRzYXBwU3RvcmUvbWFya0NoYXREb25lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplRG9uZSgpIHtcbiAgLy8gV2FpdCB1bnRpbCBXaGF0c0FwcCBidWlsZHMgdXAgdGhlIGludGVyZmFjZVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwid2hhdHNhcHBJbml0aWFsaXplZFwiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYXRPbkhvdmVyXCIsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBjaGF0LCBjaGF0RWxlbWVudCB9ID0gZXZlbnQuZGV0YWlsO1xuXG4gICAgICAvLyBTZXR1cCBhIE11dGF0aW9uT2JzZXJ2ZXIgdGhhdCBhZGRzIENoYXQgYWN0aW9uIGJ1dHRvbnMgd2hpbGUgaG92ZXJpbmcuXG4gICAgICBjb25zdCBjaGF0QnV0dG9ucyA9IGNoYXRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiW3JvbGU9J2dyaWRjZWxsJ10uX2FrOGkgPiBzcGFuOm50aC1jaGlsZCgzKVwiXG4gICAgICApO1xuICAgICAgaWYgKGNoYXRCdXR0b25zKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRG9uZUJ0biA9IGNoYXRCdXR0b25zLnF1ZXJ5U2VsZWN0b3IoXCIuZG9uZUJ0blwiKTtcbiAgICAgICAgY29uc3QgbmV3RG9uZUJ0biA9IGNoYXRBY3Rpb25CdXR0b24oXG4gICAgICAgICAgXCJjaGVja1wiLFxuICAgICAgICAgICgpID0+IG1hcmtDaGF0RG9uZShjaGF0LmNoYXRJZCksXG4gICAgICAgICAgXCJkb25lQnRuXCJcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdEb25lQnRuKSB7XG4gICAgICAgICAgY2hhdEJ1dHRvbnMucmVwbGFjZUNoaWxkKG5ld0RvbmVCdG4sIGV4aXN0aW5nRG9uZUJ0bik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hhdEJ1dHRvbnMuaW5zZXJ0Q2hpbGRBdEluZGV4KG5ld0RvbmVCdG4sIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyAvLyBBZGQgdGhlIFNub296ZWQgaWNvbiBhdCBXaGF0c0FwcCBzaWRlbmF2IG5hdmlnYXRpb24uXG4gICAgLy8gY29uc3Qgc2lkZW5hdiA9IGdldEVsZW1lbnRCeVhwYXRoKFxuICAgIC8vICAgYC8vKltAaWQ9XCJhcHBcIl0vZGl2L2RpdlsyXS9oZWFkZXIvZGl2L2Rpdi9kaXYvZGl2L3NwYW4vZGl2L2RpdlsxXWBcbiAgICAvLyApO1xuXG4gICAgLy8gc2lkZW5hdi5pbnNlcnRDaGlsZEF0SW5kZXgoXG4gICAgLy8gICBuYXZCYXJJdGVtKFwiYXJjaGl2ZWRDaGF0c1wiLCBcIkFyY2hpdmVkXCIsIFwiaW52ZW50b3J5XzJcIiwgKCkgPT5cbiAgICAvLyAgICAgb3BlbkRyYXdlckxlZnQoKVxuICAgIC8vICAgKSxcbiAgICAvLyAgIDJcbiAgICAvLyApO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IHJlbW92ZUZvbGRlckZyb21VSSwgdXBkYXRlVUlXaXRoVXBkYXRlZEZvbGRlck5hbWUgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHtcbiAgY3VycmVudEFjdGl2ZUZvbGRlcixcbiAgZm9sZGVycyxcbiAgc2F2ZUZvbGRlcnNUb1N0b3JhZ2UsXG4gIHNldEZvbGRlcnMsXG4gIHNldEN1cnJlbnRBY3RpdmVGb2xkZXIsXG59IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IGZpbHRlckNoYXRzIH0gZnJvbSBcIi4uLy4uL3doYXRzYXBwU3RvcmUvZmlsdGVyQ2hhdHNcIjtcbmltcG9ydCB7IGluaXRpYWxpemVVSSB9IGZyb20gXCIuL3VpXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDb250YWN0c0luRm9sZGVyKGZvbGRlcklkLCBjb250YWN0SWQsIGFyY2hpdmVkKSB7XG4gIGNvbnN0IHRhcmdldEZvbGRlciA9IGZvbGRlcnMuZmluZCgoZikgPT4gZi5pZCA9PT0gZm9sZGVySWQpO1xuICBpZiAoIXRhcmdldEZvbGRlcikge1xuICAgIGNvbnNvbGUubG9nKGBGb2xkZXIgd2l0aCBJRCAke2ZvbGRlcklkfSBub3QgZm91bmQuYCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGNvbnRhY3QgZnJvbSBhbGwgb3RoZXIgZm9sZGVyc1xuICBmb2xkZXJzLmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgIGlmIChmb2xkZXIuaWQgIT09IGZvbGRlcklkKSB7XG4gICAgICBjb25zdCBjb250YWN0SW5kZXggPSBmb2xkZXIuY29udGFjdHMuZmluZEluZGV4KChjKSA9PiBjLmlkID09PSBjb250YWN0SWQpO1xuICAgICAgaWYgKGNvbnRhY3RJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgZm9sZGVyLmNvbnRhY3RzLnNwbGljZShjb250YWN0SW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gQWRkIGNvbnRhY3QgdG8gdGFyZ2V0IGZvbGRlclxuICBjb25zdCBleGlzdGluZ0NvbnRhY3QgPSB0YXJnZXRGb2xkZXIuY29udGFjdHMuZmluZCgoYykgPT4gYy5pZCA9PT0gY29udGFjdElkKTtcbiAgaWYgKCFleGlzdGluZ0NvbnRhY3QpIHtcbiAgICB0YXJnZXRGb2xkZXIuY29udGFjdHMucHVzaCh7XG4gICAgICBpZDogY29udGFjdElkLFxuICAgICAgdW5yZWFkQ291bnQ6IDAsXG4gICAgICBhcmNoaXZlZDogYXJjaGl2ZWQsXG4gICAgfSk7XG4gIH1cblxuICBzYXZlRm9sZGVyc1RvU3RvcmFnZShmb2xkZXJzKTtcblxuICAvLyBVcGRhdGUgVUlcbiAgZm9sZGVycy5mb3JFYWNoKChmb2xkZXIpID0+IHtcbiAgICBpZiAoZm9sZGVyLmlkID09PSBjdXJyZW50QWN0aXZlRm9sZGVyKSB7XG4gICAgICBjb25zdCB1cGRhdGVkQ2hhdHMgPSBmb2xkZXIuY29udGFjdHMubWFwKChjKSA9PiBjLmlkKTtcbiAgICAgIGZpbHRlckNoYXRzKHVwZGF0ZWRDaGF0cyk7XG4gICAgfVxuXG4gICAgY29uc3QgdG90YWxDaGF0c0NvdW50ID0gZm9sZGVyLmNvbnRhY3RzLnJlZHVjZShcbiAgICAgIChzdW0sIGNvbnRhY3QpID0+IHN1bSArICghY29udGFjdC5hcmNoaXZlZCA/IDEgOiAwKSxcbiAgICAgIDBcbiAgICApO1xuICAgIHVwZGF0ZVVJV2l0aFVwZGF0ZWRGb2xkZXJOYW1lKGZvbGRlci5pZCwgZm9sZGVyLm5hbWUsIHRvdGFsQ2hhdHNDb3VudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoRm9sZGVyKGZvbGRlcklkKSB7XG4gIGNvbnN0IGZvbGRlciA9IGZvbGRlcnMuZmluZCgoZikgPT4gZi5pZCA9PT0gZm9sZGVySWQpO1xuICBjb25zdCBjaGF0cyA9IGZvbGRlci5jb250YWN0cy5tYXAoKGMpID0+IGMuaWQpO1xuXG4gIC8vIERlYWN0aXZhdGUgcHJldmlvdXMgZm9sZGVyXG4gIGlmIChjdXJyZW50QWN0aXZlRm9sZGVyKSB7XG4gICAgY29uc3QgcHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIGBmb2xkZXItJHtjdXJyZW50QWN0aXZlRm9sZGVyfWBcbiAgICApO1xuICAgIGlmIChwcmV2aW91c0J1dHRvbikge1xuICAgICAgcHJldmlvdXNCdXR0b24uY2xhc3NOYW1lID1cbiAgICAgICAgXCJ4amIycDBpIHgxeXBkb2hrIHg5NzJmYmYgeGNmdXg2bCB4MXFoaDk4NSB4bTBtMzluIHh6cXl4OGkgeHFhOTZ5ayB4dndvYmFjIHgxaDJ5MzEwIHgxbXZnajM5IHgxeWt5Nnh3IHg2cHJ4eGYgeG8xbDhibSB4MWJ0dXBicCB4ZjU3M3VuIHgxeXJzeXluIHgxMGI2YXFxIHgxeWUzZ291IHhuNjcwOGRcIjtcbiAgICAgIHByZXZpb3VzQnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtcHJlc3NlZFwiLCBcImZhbHNlXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFjdGl2YXRlIHNlbGVjdGVkIGZvbGRlclxuICBjb25zdCBhY3RpdmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZm9sZGVyLSR7Zm9sZGVySWR9YCk7XG4gIGlmIChhY3RpdmVCdXR0b24pIHtcbiAgICBhY3RpdmVCdXR0b24uY2xhc3NOYW1lID1cbiAgICAgIFwieGpiMnAwaSB4MXlwZG9oayB4OTcyZmJmIHhjZnV4NmwgeDFxaGg5ODUgeG0wbTM5biB4enF5eDhpIHhxYTk2eWsgeHZ3b2JhYyB4MWgyeTMxMCB4NnByeHhmIHhvMWw4Ym0geDFidHVwYnAgeGR4bjhyIHhtdXU5bG0geDE2OTBzcTkgeDF5cnN5eW4geDEwYjZhcXEgeDF5ZTNnb3UgeG42NzA4ZFwiO1xuICAgIGFjdGl2ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLXByZXNzZWRcIiwgXCJ0cnVlXCIpO1xuICB9XG5cbiAgc2V0Q3VycmVudEFjdGl2ZUZvbGRlcihmb2xkZXJJZCk7XG4gIGZpbHRlckNoYXRzKGNoYXRzKTtcbn1cblxuLy8gQWRkIHRoaXMgbmV3IGZ1bmN0aW9uIHRvIHVwZGF0ZSB1bnJlYWQgY291bnRcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVVbnJlYWRDb3VudChjaGF0SWQsIHVucmVhZENvdW50KSB7XG4gIGZvbGRlcnMuZm9yRWFjaCgoZm9sZGVyKSA9PiB7XG4gICAgY29uc3QgY29udGFjdCA9IGZvbGRlci5jb250YWN0cy5maW5kKChjKSA9PiBjLmlkID09PSBjaGF0SWQpO1xuICAgIGlmIChjb250YWN0KSB7XG4gICAgICBjb250YWN0LnVucmVhZENvdW50ID0gdW5yZWFkQ291bnQ7XG4gICAgfVxuICB9KTtcbiAgc2F2ZUZvbGRlcnNUb1N0b3JhZ2UoZm9sZGVycyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGb2xkZXIoZm9sZGVySWQpIHtcbiAgaWYgKGZvbGRlcnMuZmluZCgoZikgPT4gZi5pZCA9PT0gZm9sZGVySWQpLmluYm94KSByZXR1cm47XG4gIGNvbnN0IGluZGV4ID0gZm9sZGVycy5maW5kSW5kZXgoKGYpID0+IGYuaWQgPT09IGZvbGRlcklkKTtcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIGNvbnN0IGluYm94Rm9sZGVyID0gZm9sZGVycy5maW5kKChmKSA9PiBmLmluYm94ID09PSB0cnVlKTtcblxuICAgIGlmIChpbmJveEZvbGRlcikge1xuICAgICAgLy8gQWRkIGNvbnRhY3RzIG9mIHRoZSBmb2xkZXIgdG8gYmUgcmVtb3ZlZCB0byB0aGUgaW5ib3ggZm9sZGVyXG4gICAgICBpbmJveEZvbGRlci5jb250YWN0cy5wdXNoKC4uLmZvbGRlcnNbaW5kZXhdLmNvbnRhY3RzKTtcbiAgICB9XG5cbiAgICBmb2xkZXJzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICBzYXZlRm9sZGVyc1RvU3RvcmFnZShmb2xkZXJzKTtcbiAgICByZW1vdmVGb2xkZXJGcm9tVUkoZm9sZGVySWQpO1xuXG4gICAgY29uc3QgdG90YWxDaGF0c0NvdW50ID0gaW5ib3hGb2xkZXIuY29udGFjdHMucmVkdWNlKFxuICAgICAgKHN1bSwgY29udGFjdCkgPT4gc3VtICsgKCFjb250YWN0LmFyY2hpdmVkID8gMSA6IDApLFxuICAgICAgMFxuICAgICk7XG4gICAgdXBkYXRlVUlXaXRoVXBkYXRlZEZvbGRlck5hbWUoXG4gICAgICBpbmJveEZvbGRlci5pZCxcbiAgICAgIGluYm94Rm9sZGVyLm5hbWUsXG4gICAgICB0b3RhbENoYXRzQ291bnRcbiAgICApO1xuXG4gICAgc3dpdGNoRm9sZGVyKDEpO1xuICB9XG59XG5cbi8vIFNldCB1cCBsaXN0ZW5lciBmb3IgVU5SRUFEX0NPVU5UX0NIQU5HRVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoXG4gICAgZXZlbnQuc291cmNlID09PSB3aW5kb3cgJiZcbiAgICBldmVudC5kYXRhICYmXG4gICAgZXZlbnQuZGF0YS50eXBlID09PSBcIlVOUkVBRF9DT1VOVF9DSEFOR0VcIlxuICApIHtcbiAgICBjb25zdCB7IGNoYXRJZCwgdW5yZWFkQ291bnQgfSA9IGV2ZW50LmRhdGE7XG4gICAgdXBkYXRlVW5yZWFkQ291bnQoY2hhdElkLCB1bnJlYWRDb3VudCk7XG4gIH1cbn0pO1xuXG4vLyBBZGQgdGhpcyBuZXcgZnVuY3Rpb24gdG8gdXBkYXRlIGFyY2hpdmUgc3RhdHVzXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQXJjaGl2ZVN0YXR1cyhjaGF0SWQsIGFyY2hpdmVkKSB7XG4gIGxldCB1cGRhdGVkRm9sZGVyID0gbnVsbDtcbiAgZm9sZGVycy5mb3JFYWNoKChmb2xkZXIpID0+IHtcbiAgICBjb25zdCBjb250YWN0ID0gZm9sZGVyLmNvbnRhY3RzLmZpbmQoKGMpID0+IGMuaWQgPT09IGNoYXRJZCk7XG4gICAgaWYgKGNvbnRhY3QpIHtcbiAgICAgIGNvbnRhY3QuYXJjaGl2ZWQgPSBhcmNoaXZlZDtcbiAgICAgIHVwZGF0ZWRGb2xkZXIgPSBmb2xkZXI7XG4gICAgfVxuICB9KTtcbiAgc2F2ZUZvbGRlcnNUb1N0b3JhZ2UoZm9sZGVycyk7XG5cbiAgaWYgKHVwZGF0ZWRGb2xkZXIgIT09IG51bGwpIHtcbiAgICBjb25zdCB0b3RhbENoYXRzQ291bnQgPSB1cGRhdGVkRm9sZGVyLmNvbnRhY3RzLnJlZHVjZShcbiAgICAgIChzdW0sIGNvbnRhY3QpID0+IHN1bSArICghY29udGFjdC5hcmNoaXZlZCA/IDEgOiAwKSxcbiAgICAgIDBcbiAgICApO1xuICAgIHVwZGF0ZVVJV2l0aFVwZGF0ZWRGb2xkZXJOYW1lKFxuICAgICAgdXBkYXRlZEZvbGRlci5pZCxcbiAgICAgIHVwZGF0ZWRGb2xkZXIubmFtZSxcbiAgICAgIHRvdGFsQ2hhdHNDb3VudFxuICAgICk7XG4gIH1cbn1cblxuLy8gU2V0IHVwIGxpc3RlbmVyIGZvciBBUkNISVZFX0NIQVRfRVZFTlRcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKFxuICAgIGV2ZW50LnNvdXJjZSA9PT0gd2luZG93ICYmXG4gICAgZXZlbnQuZGF0YSAmJlxuICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gXCJBUkNISVZFX0NIQVRfRVZFTlRcIlxuICApIHtcbiAgICBjb25zdCB7IGNoYXRJZCwgYXJjaGl2ZWQgfSA9IGV2ZW50LmRhdGE7XG4gICAgdXBkYXRlQXJjaGl2ZVN0YXR1cyhjaGF0SWQsIGFyY2hpdmVkKTtcbiAgfVxufSk7XG5cbi8vIFNldCB1cCBsaXN0ZW5lciBmb3IgQ0hBVFNfU1lOQ1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoXG4gICAgZXZlbnQuc291cmNlID09PSB3aW5kb3cgJiZcbiAgICBldmVudC5kYXRhICYmXG4gICAgZXZlbnQuZGF0YS50eXBlID09PSBcIkNIQVRTX1NZTkNcIlxuICApIHtcbiAgICBjb25zdCBjaGF0cyA9IGV2ZW50LmRhdGEuY2hhdHM7XG5cbiAgICBmb2xkZXJzLmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgICAgZm9sZGVyLmNvbnRhY3RzID0gZm9sZGVyLmNvbnRhY3RzLm1hcCgoY29udGFjdCkgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVkQ29udGFjdCA9IGNoYXRzLmZpbmQoKGNoYXQpID0+IGNoYXQuaWQgPT09IGNvbnRhY3QuaWQpO1xuICAgICAgICByZXR1cm4gdXBkYXRlZENvbnRhY3QgPyB1cGRhdGVkQ29udGFjdCA6IGNvbnRhY3Q7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEhhbmRsZSBpbmJveCBmb2xkZXIgc2VwYXJhdGVseVxuICAgIGNvbnN0IGluYm94Rm9sZGVyID0gZm9sZGVycy5maW5kKChmb2xkZXIpID0+IGZvbGRlci5pbmJveCk7XG4gICAgaWYgKGluYm94Rm9sZGVyKSB7XG4gICAgICBjb25zdCBhbGxDb250YWN0cyA9IGZvbGRlcnMuZmxhdE1hcCgoZm9sZGVyKSA9PlxuICAgICAgICBmb2xkZXIuY29udGFjdHMubWFwKChjKSA9PiBjLmlkKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IG5ld0NvbnRhY3RzID0gY2hhdHMuZmlsdGVyKFxuICAgICAgICAoY2hhdCkgPT4gIWFsbENvbnRhY3RzLmluY2x1ZGVzKGNoYXQuaWQpXG4gICAgICApO1xuICAgICAgaW5ib3hGb2xkZXIuY29udGFjdHMucHVzaCguLi5uZXdDb250YWN0cyk7XG4gICAgfVxuXG4gICAgc2F2ZUZvbGRlcnNUb1N0b3JhZ2UoZm9sZGVycyk7XG4gICAgaW5pdGlhbGl6ZVVJKCk7XG4gICAgc3dpdGNoRm9sZGVyKDEpO1xuICB9XG59KTtcblxuLy8gU2V0IHVwIGxpc3RlbmVyIGZvciBDSEFUX0FEREVEXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChcbiAgICBldmVudC5zb3VyY2UgPT09IHdpbmRvdyAmJlxuICAgIGV2ZW50LmRhdGEgJiZcbiAgICBldmVudC5kYXRhLnR5cGUgPT09IFwiQ0hBVF9BRERFRFwiXG4gICkge1xuICAgIGNvbnN0IGNoYXRJZCA9IGV2ZW50LmRhdGEuY2hhdElkO1xuICAgIGNvbnN0IGluYm94Rm9sZGVyID0gZm9sZGVycy5maW5kKChmb2xkZXIpID0+IGZvbGRlci5pbmJveCk7XG4gICAgaWYgKGluYm94Rm9sZGVyKSB7XG4gICAgICBpbmJveEZvbGRlci5jb250YWN0cy5wdXNoKHtcbiAgICAgICAgaWQ6IGNoYXRJZCxcbiAgICAgICAgYXJjaGl2ZWQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICBzYXZlRm9sZGVyc1RvU3RvcmFnZShmb2xkZXJzKTtcblxuICAgICAgY29uc3QgdG90YWxDaGF0c0NvdW50ID0gaW5ib3hGb2xkZXIuY29udGFjdHMucmVkdWNlKFxuICAgICAgICAoc3VtLCBjb250YWN0KSA9PiBzdW0gKyAoIWNvbnRhY3QuYXJjaGl2ZWQgPyAxIDogMCksXG4gICAgICAgIDBcbiAgICAgICk7XG4gICAgICB1cGRhdGVVSVdpdGhVcGRhdGVkRm9sZGVyTmFtZShcbiAgICAgICAgaW5ib3hGb2xkZXIuaWQsXG4gICAgICAgIGluYm94Rm9sZGVyLm5hbWUsXG4gICAgICAgIHRvdGFsQ2hhdHNDb3VudFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBTZXQgdXAgbGlzdGVuZXIgZm9yIENIQVRfUkVNT1ZFRFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoXG4gICAgZXZlbnQuc291cmNlID09PSB3aW5kb3cgJiZcbiAgICBldmVudC5kYXRhICYmXG4gICAgZXZlbnQuZGF0YS50eXBlID09PSBcIkNIQVRfUkVNT1ZFRFwiXG4gICkge1xuICAgIGNvbnN0IGNoYXRJZCA9IGV2ZW50LmRhdGEuY2hhdElkO1xuICAgIGxldCB0YXJnZXRGb2xkZXIgPSBudWxsO1xuXG4gICAgLy8gRmluZCB0aGUgZm9sZGVyIGNvbnRhaW5pbmcgdGhlIGNvbnRhY3RcbiAgICBmb2xkZXJzLmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBmb2xkZXIuY29udGFjdHMuZmluZEluZGV4KChjKSA9PiBjLmlkID09PSBjaGF0SWQpO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB0YXJnZXRGb2xkZXIgPSBmb2xkZXI7XG4gICAgICAgIGZvbGRlci5jb250YWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRhcmdldEZvbGRlcikge1xuICAgICAgc2F2ZUZvbGRlcnNUb1N0b3JhZ2UoZm9sZGVycyk7XG5cbiAgICAgIGNvbnN0IHRvdGFsQ2hhdHNDb3VudCA9IHRhcmdldEZvbGRlci5jb250YWN0cy5yZWR1Y2UoXG4gICAgICAgIChzdW0sIGNvbnRhY3QpID0+IHN1bSArICghY29udGFjdC5hcmNoaXZlZCA/IDEgOiAwKSxcbiAgICAgICAgMFxuICAgICAgKTtcbiAgICAgIHVwZGF0ZVVJV2l0aFVwZGF0ZWRGb2xkZXJOYW1lKFxuICAgICAgICB0YXJnZXRGb2xkZXIuaWQsXG4gICAgICAgIHRhcmdldEZvbGRlci5uYW1lLFxuICAgICAgICB0b3RhbENoYXRzQ291bnRcbiAgICAgICk7XG4gICAgfVxuICB9XG59KTtcblxuLy8gU2V0IHVwIGxpc3RlbmVyIGZvciBGSUxURVJfQ0hBVFNfQllfQUNUSVZFX0ZPTERFUlxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoXG4gICAgZXZlbnQuc291cmNlID09PSB3aW5kb3cgJiZcbiAgICBldmVudC5kYXRhICYmXG4gICAgZXZlbnQuZGF0YS50eXBlID09PSBcIkZJTFRFUl9DSEFUU19CWV9BQ1RJVkVfRk9MREVSXCJcbiAgKSB7XG4gICAgY29uc3QgYWN0aXZlRm9sZGVyID0gZm9sZGVycy5maW5kKFxuICAgICAgKGZvbGRlcikgPT4gZm9sZGVyLmlkID09PSBjdXJyZW50QWN0aXZlRm9sZGVyXG4gICAgKTtcbiAgICBmaWx0ZXJDaGF0cyhhY3RpdmVGb2xkZXIuY29udGFjdHMubWFwKChjKSA9PiBjLmlkKSk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vZGFsXCI7XG5pbXBvcnQgeyBmb2xkZXJzLCBzYXZlRm9sZGVyc1RvU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IHVwZGF0ZVVJV2l0aE5ld0ZvbGRlciwgdXBkYXRlVUlXaXRoVXBkYXRlZEZvbGRlck5hbWUgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgcmVtb3ZlRm9sZGVyLCBzd2l0Y2hGb2xkZXIgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb2xkZXJGb3JtKGZvbGRlcklkID0gbnVsbCkge1xuICBjb25zdCBpc0VkaXRNb2RlID0gZm9sZGVySWQgIT09IG51bGw7XG4gIGNvbnN0IGZvbGRlciA9IGlzRWRpdE1vZGUgPyBmb2xkZXJzLmZpbmQoKGYpID0+IGYuaWQgPT09IGZvbGRlcklkKSA6IG51bGw7XG5cbiAgY29uc3QgZm9sZGVyRm9ybUNvbnRlbnQgPSBgXG4gICAgPGZvcm0gaWQ9XCJmb2xkZXJGb3JtXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwieDEybHF1cDkgeDFvMWt4MDhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLW1kIHg5ZjYxOSB4MXA1b3E4alwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibW9kYWwtdGl0bGUgeDF3N3NkanEgeDFmY3R5MHVcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+JHtcbiAgICAgICAgICAgICAgICBpc0VkaXRNb2RlID8gXCJmb2xkZXJcIiA6IFwiY3JlYXRlX25ld19mb2xkZXJcIlxuICAgICAgICAgICAgICB9PC9zcGFuPlxuICAgICAgICAgICAgICAke2lzRWRpdE1vZGUgPyBcIkVkaXQgZm9sZGVyXCIgOiBcIk5ldyBmb2xkZXJcIn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSB4ZHQ1eXRmIHh1Ym51eXEgeHcyY3N4YyB4MW9kancwZiB4bzZ3bTM2IHgxaWVna2E1IHhjNTMwdTAgeDh6eDRxdiB4MWdjbXdseSB4MTdzeTZ5dSB4d3Nha2p3IHgxdnoxc3NpIHh4YmIxcnEgeHd4YzQxa1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ4MWY2a250biB4MXU3azc0IHgxbjY4bXo5IHgxZmN0eTB1XCI+Rm9sZGVyIG5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmb2xkZXJOYW1lXCIgdmFsdWU9XCIke1xuICAgICAgICAgICAgICAgICAgaXNFZGl0TW9kZSA/IGZvbGRlci5uYW1lIDogXCJcIlxuICAgICAgICAgICAgICAgIH1cIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIvCfpJEgTGVhZHNcIiBjbGFzcz1cInNlbGVjdGFibGUtdGV4dCBjb3B5YWJsZS10ZXh0XCI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwieDc4enVtNSB4OGhobDV0IHhwNDA1NHIgeHV4dzFmdCB4MTIzajNjdyB4MWd0ZnJrMSB4MTU2Z28xNyB4MXNxazhnZVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJmbGV4OiAxO1wiPjwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJ4MTNhNmJ2bCB4MWM0dno0ZiB4czgzbTBrIHhkbDcyajkgeDFnNzdzYzcgeDc4enVtNSB4b3pxaXczIHgxb2EzcW9oIHgxMmZrNHA4IHhldXVnbGkgeDJsd24xaiB4MW5odmN3MSB4MXEwZzNucCB4dWszMDc3IHg0MGhoM2VcIlxuICAgICAgICA+XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIGlzRWRpdE1vZGUgJiYgIWZvbGRlci5pbmJveFxuICAgICAgICAgICAgICA/IGBcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkYXRhLWFjdGlvbj1cInJlbW92ZVwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzPVwieDFzcjg4NTMgeDg4OWtubyB4MWE4bHNqYyB4MW4yb25yNiB4azUweXNuIHgxZjZrbnRuIHh5ZXNuNW0geDF6MTFubzUgeGp5NW0xZyB4MW1ud2JwNiB4NHBiNXY2IHgxNzh4dDh6IHhtODF2czQgeHNvMDMxbCB4eTgwY2x2IHgxM2Z1djIwIHh1M2o1YjMgeDFxMHE4bTUgeDI2dTdxaSB4MXY4cDkzZiB4b2diMDBpIHgxNnN0cXJqIHgxZnRyM2ttIHgxaGw4aWtyIHhmYWdnaHcgeDlkeXIxOSB4OWxjdm1uIHhjamw1bmEgeDFrM3gzZGIgeHV4dzFmdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cIngxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeGV1dWdsaSB4Mmx3bjFqIHhsNTZqN2sgeDFxMGczbnAgeDZzMGRuNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cIngxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeDNwbmJrOCB4ZmV4MDZmIHhldXVnbGkgeDJsd24xaiB4bDU2ajdrIHgxcTBnM25wIHg2czBkbjRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZmxleC1ncm93OiAxXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFJlbW92ZVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPiBgXG4gICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkYXRhLWFjdGlvbj1cInN1Ym1pdFwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzPVwieDg4OWtubyB4MWE4bHNqYyB4YmJ4bjFuIHh4YnI2cGwgeDFuMm9ucjYgeDFyZzVvaHUgeGs1MHlzbiB4MWY2a250biB4eWVzbjVtIHgxejExbm81IHhqeTVtMWcgeDFtbndicDYgeDRwYjV2NiB4MTc4eHQ4eiB4bTgxdnM0IHhzbzAzMWwgeHk4MGNsdiB4MTNmdXYyMCB4dTNqNWIzIHgxcTBxOG01IHgyNnU3cWkgeDF2OHA5M2YgeG9nYjAwaSB4MTZzdHFyaiB4MWZ0cjNrbSB4MWhsOGlrciB4ZmFnZ2h3IHg5ZHlyMTkgeDlsY3ZtbiB4YnRjZThwIHgxNHYwc21wIHhvOHVmc28geGNqbDVuYSB4MWszeDNkYiB4dXh3MWZ0IHh2NTJhemlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJ4MWM0dno0ZiB4czgzbTBrIHhkbDcyajkgeDFnNzdzYzcgeDc4enVtNSB4b3pxaXczIHgxb2EzcW9oIHgxMmZrNHA4IHhldXVnbGkgeDJsd24xaiB4bDU2ajdrIHgxcTBnM25wIHg2czBkbjRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ4MWM0dno0ZiB4czgzbTBrIHhkbDcyajkgeDFnNzdzYzcgeDc4enVtNSB4b3pxaXczIHgxb2EzcW9oIHgxMmZrNHA4IHgzcG5iazggeGZleDA2ZiB4ZXV1Z2xpIHgybHduMWogeGw1Nmo3ayB4MXEwZzNucCB4NnMwZG40XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImZsZXgtZ3JvdzogMVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBPS1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgYDtcblxuICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCh7XG4gICAgbW9kYWxDb250ZW50OiBmb2xkZXJGb3JtQ29udGVudCxcbiAgICBmb3JtSGFuZGxlcjogYXN5bmMgKGZvcm1EYXRhKSA9PiB7XG4gICAgICBjb25zdCBmb2xkZXJOYW1lID0gZm9ybURhdGEuZ2V0KFwiZm9sZGVyTmFtZVwiKTtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IGZvcm1EYXRhLmdldChcImZvcm1BY3Rpb25cIik7XG5cbiAgICAgIGlmIChhY3Rpb24gPT09IFwic3VibWl0XCIpIHtcbiAgICAgICAgaWYgKGlzRWRpdE1vZGUpIHtcbiAgICAgICAgICBmb2xkZXIubmFtZSA9IGZvbGRlck5hbWU7XG4gICAgICAgICAgc2F2ZUZvbGRlcnNUb1N0b3JhZ2UoZm9sZGVycyk7XG4gICAgICAgICAgdXBkYXRlVUlXaXRoVXBkYXRlZEZvbGRlck5hbWUoZm9sZGVySWQsIGZvbGRlck5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGhpZ2hlc3RJZCA9IGZvbGRlcnMucmVkdWNlKFxuICAgICAgICAgICAgKG1heCwgZm9sZGVyKSA9PiBNYXRoLm1heChtYXgsIGZvbGRlci5pZCksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBuZXdJZCA9IGhpZ2hlc3RJZCArIDE7XG4gICAgICAgICAgY29uc3QgbmV3Rm9sZGVyID0geyBpZDogbmV3SWQsIG5hbWU6IGZvbGRlck5hbWUsIGNvbnRhY3RzOiBbXSB9O1xuICAgICAgICAgIGZvbGRlcnMucHVzaChuZXdGb2xkZXIpO1xuICAgICAgICAgIHNhdmVGb2xkZXJzVG9TdG9yYWdlKGZvbGRlcnMpO1xuICAgICAgICAgIHVwZGF0ZVVJV2l0aE5ld0ZvbGRlcihuZXdJZCwgZm9sZGVyTmFtZSk7XG4gICAgICAgICAgc3dpdGNoRm9sZGVyKG5ld0lkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSBcInJlbW92ZVwiICYmIGlzRWRpdE1vZGUpIHtcbiAgICAgICAgcmVtb3ZlRm9sZGVyKGZvbGRlcklkKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSk7XG5cbiAgbW9kYWwub3Blbk1vZGFsKCk7XG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgRW50ZXIga2V5XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9sZGVyRm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnYnV0dG9uW2RhdGEtYWN0aW9uPVwic3VibWl0XCJdJ1xuICAgICAgKTtcbiAgICAgIHN1Ym1pdEJ1dHRvbi5jbGljaygpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9kYWxcIjtcbmltcG9ydCB7IHJlbW92ZUZvbGRlciB9IGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCB7IGZvbGRlckZvcm0gfSBmcm9tIFwiLi9mb2xkZXJGb3JtXCI7XG5pbXBvcnQgeyBmb2xkZXJzLCBzYXZlRm9sZGVyc1RvU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCBTb3J0YWJsZSBmcm9tIFwic29ydGFibGVqc1wiO1xuaW1wb3J0IHsgdXBkYXRlRm9sZGVyc1VJIH0gZnJvbSBcIi4vdWlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvbGRlcnNGb3JtKCkge1xuICBjb25zdCBmb2xkZXJzTGlzdCA9IGZvbGRlcnNcbiAgICAubWFwKFxuICAgICAgKGZvbGRlcikgPT4gYFxuICAgIDxkaXYgY2xhc3M9XCJmb2xkZXItaXRlbVwiIGRhdGEtZm9sZGVyLWlkPVwiJHtmb2xkZXIuaWR9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9sZGVyLW5hbWVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+ZHJhZ19pbmRpY2F0b3I8L3NwYW4+XG4gICAgICAgICR7Zm9sZGVyLm5hbWV9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb2xkZXItYWN0aW9uc1wiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInhqYjJwMGkgeGszOTBwdSB4MWhlb3I5ZyB4MXlwZG9oayB4amJxYjh3IHg5NzJmYmYgeGNmdXg2bCB4MXFoaDk4NSB4bTBtMzluIHhleHg4eXUgeDR1YXA1IHgxOGQ5aTY5IHhraGQ2c2QgX2FsZDZcIiBkYXRhLWFjdGlvbj1cImVkaXRcIiBkYXRhLW9iamVjdC1pZD1cIiR7XG4gICAgICAgICAgZm9sZGVyLmlkXG4gICAgICAgIH1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgX2FsZDdcIj5lZGl0PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgJHtcbiAgICAgICAgICBmb2xkZXIuaW5ib3hcbiAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgOiBgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJ4amIycDBpIHhrMzkwcHUgeDFoZW9yOWcgeDF5cGRvaGsgeGpicWI4dyB4OTcyZmJmIHhjZnV4NmwgeDFxaGg5ODUgeG0wbTM5biB4ZXh4OHl1IHg0dWFwNSB4MThkOWk2OSB4a2hkNnNkIF9hbGQ2XCIgZGF0YS1hY3Rpb249XCJyZW1vdmVcIiBkYXRhLW9iamVjdC1pZD1cIiR7Zm9sZGVyLmlkfVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBfYWxkN1wiPmRlbGV0ZTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+YFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxuICAgIClcbiAgICAuam9pbihcIlwiKTtcblxuICBjb25zdCBmb2xkZXJzRm9ybUNvbnRlbnQgPSBgXG4gICAgPGZvcm0gaWQ9XCJmb2xkZXJzRm9ybVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIngxMmxxdXA5IHgxbzFreDA4XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1tZCB4OWY2MTkgeDFwNW9xOGpcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cIm1vZGFsLXRpdGxlIHgxdzdzZGpxIHgxZmN0eTB1XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmZvbGRlcl9tYW5hZ2VkPC9zcGFuPlxuICAgICAgICAgICAgICBZb3VyIGZvbGRlcnNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSB4ZHQ1eXRmIHh1Ym51eXEgeHcyY3N4YyB4MW9kancwZiB4bzZ3bTM2IHgxaWVna2E1IHhjNTMwdTAgeDh6eDRxdiB4MWdjbXdseSB4MTdzeTZ5dSB4d3Nha2p3IHgxdnoxc3NpIHh4YmIxcnEgeHd4YzQxa1wiPlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvbGRlcnMtbGlzdFwiIGNsYXNzPVwiZm9sZGVycy1saXN0XCI+XG4gICAgICAgICAgICAgICR7Zm9sZGVyc0xpc3R9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJ4Nzh6dW01IHg4aGhsNXQgeHA0MDU0ciB4dXh3MWZ0IHgxMjNqM2N3IHgxZ3RmcmsxIHgxNTZnbzE3IHgxc3FrOGdlXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cIngxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeGV1dWdsaSB4Mmx3bjFqIHgxbmh2Y3cxIHgxcTBnM25wIHh1azMwNzcgeDQwaGgzZVwiIHN0eWxlPVwiZmxleDogMTtcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkYXRhLWFjdGlvbj1cImNyZWF0ZVwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzPVwieDFuNjhtejkgeDg4OWtubyB4MWE4bHNqYyB4MW4yb25yNiB4azUweXNuIHgxZjZrbnRuIHh5ZXNuNW0geDF6MTFubzUgeGp5NW0xZyB4MW1ud2JwNiB4NHBiNXY2IHgxNzh4dDh6IHhtODF2czQgeHNvMDMxbCB4eTgwY2x2IHgxM2Z1djIwIHh1M2o1YjMgeDFxMHE4bTUgeDI2dTdxaSB4MXY4cDkzZiB4b2diMDBpIHgxNnN0cXJqIHgxZnRyM2ttIHgxaGw4aWtyIHhmYWdnaHcgeDlkeXIxOSB4OWxjdm1uIHhjamw1bmEgeDFrM3gzZGIgeHV4dzFmdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cIngxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeGV1dWdsaSB4Mmx3bjFqIHhsNTZqN2sgeDFxMGczbnAgeDZzMGRuNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cIngxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeDNwbmJrOCB4ZmV4MDZmIHhldXVnbGkgeDJsd24xaiB4bDU2ajdrIHgxcTBnM25wIHg2czBkbjRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZmxleC1ncm93OiAxXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENyZWF0ZSBmb2xkZXJcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cIngxM2E2YnZsIHgxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeGV1dWdsaSB4Mmx3bjFqIHgxbmh2Y3cxIHgxcTBnM25wIHh1azMwNzcgeDQwaGgzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkYXRhLWFjdGlvbj1cInN1Ym1pdFwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzPVwieDg4OWtubyB4MWE4bHNqYyB4YmJ4bjFuIHh4YnI2cGwgeDFuMm9ucjYgeDFyZzVvaHUgeGs1MHlzbiB4MWY2a250biB4eWVzbjVtIHgxejExbm81IHhqeTVtMWcgeDFtbndicDYgeDRwYjV2NiB4MTc4eHQ4eiB4bTgxdnM0IHhzbzAzMWwgeHk4MGNsdiB4MTNmdXYyMCB4dTNqNWIzIHgxcTBxOG01IHgyNnU3cWkgeDF2OHA5M2YgeG9nYjAwaSB4MTZzdHFyaiB4MWZ0cjNrbSB4MWhsOGlrciB4ZmFnZ2h3IHg5ZHlyMTkgeDlsY3ZtbiB4YnRjZThwIHgxNHYwc21wIHhvOHVmc28geGNqbDVuYSB4MWszeDNkYiB4dXh3MWZ0IHh2NTJhemlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJ4MWM0dno0ZiB4czgzbTBrIHhkbDcyajkgeDFnNzdzYzcgeDc4enVtNSB4b3pxaXczIHgxb2EzcW9oIHgxMmZrNHA4IHhldXVnbGkgeDJsd24xaiB4bDU2ajdrIHgxcTBnM25wIHg2czBkbjRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ4MWM0dno0ZiB4czgzbTBrIHhkbDcyajkgeDFnNzdzYzcgeDc4enVtNSB4b3pxaXczIHgxb2EzcW9oIHgxMmZrNHA4IHgzcG5iazggeGZleDA2ZiB4ZXV1Z2xpIHgybHduMWogeGw1Nmo3ayB4MXEwZzNucCB4NnMwZG40XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImZsZXgtZ3JvdzogMVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBPS1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgYDtcblxuICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCh7XG4gICAgbW9kYWxDb250ZW50OiBmb2xkZXJzRm9ybUNvbnRlbnQsXG4gICAgZm9ybUhhbmRsZXI6IGFzeW5jIChmb3JtRGF0YSkgPT4ge1xuICAgICAgY29uc3QgYWN0aW9uID0gZm9ybURhdGEuZ2V0KFwiZm9ybUFjdGlvblwiKTtcbiAgICAgIGNvbnN0IG9iamVjdElkID0gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwib2JqZWN0SWRcIikpO1xuXG4gICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICBjYXNlIFwiZWRpdFwiOlxuICAgICAgICAgIGZvbGRlckZvcm0ob2JqZWN0SWQpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlIFwicmVtb3ZlXCI6XG4gICAgICAgICAgcmVtb3ZlRm9sZGVyKG9iamVjdElkKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY2FzZSBcImNyZWF0ZVwiOlxuICAgICAgICAgIGZvbGRlckZvcm0oKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY2FzZSBcInN1Ym1pdFwiOlxuICAgICAgICAgIHVwZGF0ZUZvbGRlclBvc2l0aW9ucygpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuXG4gIG1vZGFsLm9wZW5Nb2RhbCgpO1xuXG4gIGluaXRpYWxpemVEcmFnQW5kRHJvcCgpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplRHJhZ0FuZERyb3AoKSB7XG4gIGNvbnN0IGZvbGRlcnNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb2xkZXJzLWxpc3RcIik7XG5cbiAgbmV3IFNvcnRhYmxlKGZvbGRlcnNMaXN0LCB7XG4gICAgYW5pbWF0aW9uOiAxNTAsXG4gICAgaGFuZGxlOiBcIi5mb2xkZXItaXRlbVwiLFxuICAgIG9uRW5kOiAoZXZ0KSA9PiB7XG4gICAgICAvLyBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgZHJhZyBvcGVyYXRpb24gZW5kc1xuICAgICAgLy8gWW91IGNhbiB1c2UgaXQgZm9yIGltbWVkaWF0ZSB1cGRhdGVzIGlmIG5lZWRlZFxuICAgIH0sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVGb2xkZXJQb3NpdGlvbnMoKSB7XG4gIGNvbnN0IGZvbGRlckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb2xkZXItaXRlbVwiKTtcbiAgY29uc3QgdXBkYXRlZEZvbGRlcnMgPSBBcnJheS5mcm9tKGZvbGRlckl0ZW1zKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZm9sZGVySWQgPSBwYXJzZUludChpdGVtLmRhdGFzZXQuZm9sZGVySWQpO1xuICAgIGNvbnN0IGZvbGRlciA9IGZvbGRlcnMuZmluZCgoZikgPT4gZi5pZCA9PT0gZm9sZGVySWQpO1xuICAgIHJldHVybiB7IC4uLmZvbGRlciwgcG9zaXRpb246IGluZGV4IH07XG4gIH0pO1xuICAvLyBVcGRhdGUgdGhlIGZvbGRlcnMgYXJyYXkgd2l0aCBuZXcgcG9zaXRpb25zXG4gIGZvbGRlcnMubGVuZ3RoID0gMDtcbiAgZm9sZGVycy5wdXNoKC4uLnVwZGF0ZWRGb2xkZXJzKTtcbiAgLy8gU2F2ZSB0aGUgdXBkYXRlZCBmb2xkZXJzIHRvIHN0b3JhZ2VcbiAgc2F2ZUZvbGRlcnNUb1N0b3JhZ2UoZm9sZGVycyk7XG5cbiAgLy8gVXBkYXRlIHRoZSBVSSB0byByZWZsZWN0IHRoZSBuZXcgb3JkZXJcbiAgdXBkYXRlRm9sZGVyc1VJKCk7XG59XG4iLCJpbXBvcnQgeyBsb2FkRm9sZGVyc0Zyb21TdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgc2V0dXBLZXlib2FyZExpc3RlbmVycyB9IGZyb20gXCIuL3Nob3J0Y3V0c1wiO1xuaW1wb3J0IHsgZmlsdGVyQ2hhdHNMaXN0ZW5lciB9IGZyb20gXCIuLi8uLi93aGF0c2FwcFN0b3JlL2ZpbHRlckNoYXRzXCI7XG5pbXBvcnQgeyBtZXNzYWdlc0xpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL3doYXRzYXBwU3RvcmUvbWVzc2FnZXNMaXN0ZW5lclwiO1xuaW1wb3J0IHsgYXJjaGl2ZUNoYXRFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL3doYXRzYXBwU3RvcmUvYXJjaGl2ZUNoYXRFdmVudExpc3RlbmVyXCI7XG5pbXBvcnQgeyByZXF1ZXN0TW92ZVRvRm9ybUxpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL3doYXRzYXBwU3RvcmUvcmVxdWVzdE1vdmVUb0Zvcm1cIjtcbmltcG9ydCB7IGNoYXRzU3luYyB9IGZyb20gXCIuLi8uLi93aGF0c2FwcFN0b3JlL2NoYXRzU3luY1wiO1xuaW1wb3J0IHsgbW92ZVRvRm9ybSB9IGZyb20gXCIuL21vdmVUb0Zvcm1cIjtcbmltcG9ydCB7IGZvcndhcmRGaWx0ZXJIYW5kbGVyTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vd2hhdHNhcHBTdG9yZS9mb3J3YXJkRmlsdGVySGFuZGxlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUZvbGRlcnMoKSB7XG4gIGxvYWRGb2xkZXJzRnJvbVN0b3JhZ2UoKGxvYWRlZEZvbGRlcnMpID0+IHt9KTtcblxuICAvLyBMaXN0ZW4gZm9yIGN1c3RvbSBldmVudCBhbmQgaW5pdGlhbGl6ZSBmZWF0dXJlc1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwid2hhdHNhcHBJbml0aWFsaXplZFwiLCAoKSA9PiB7XG4gICAgY2hhdHNTeW5jKCk7XG5cbiAgICBzZXR1cEtleWJvYXJkTGlzdGVuZXJzKCk7XG4gICAgcmVxdWVzdE1vdmVUb0Zvcm1MaXN0ZW5lcigpO1xuXG4gICAgZmlsdGVyQ2hhdHNMaXN0ZW5lcigpO1xuICAgIG1lc3NhZ2VzTGlzdGVuZXIoKTtcbiAgICBhcmNoaXZlQ2hhdEV2ZW50TGlzdGVuZXIoKTtcbiAgICBmb3J3YXJkRmlsdGVySGFuZGxlckxpc3RlbmVyKCk7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHRoZSByZXNwb25zZSBmcm9tIHRoZSBpbmplY3RlZCBzY3JpcHRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50LmRhdGEgJiZcbiAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSBcIk9QRU5fTU9WRV9UT19GT1JNXCIgJiZcbiAgICAgICAgZXZlbnQuZGF0YS5jaGF0SWRcbiAgICAgICkge1xuICAgICAgICBjb25zdCBjaGF0SWQgPSBldmVudC5kYXRhLmNoYXRJZDtcbiAgICAgICAgbW92ZVRvRm9ybShjaGF0SWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2RhbFwiO1xuaW1wb3J0IHsgZm9sZGVycywgY3VycmVudEFjdGl2ZUZvbGRlciB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IHVwZGF0ZUNvbnRhY3RzSW5Gb2xkZXIgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlVG9Gb3JtKGNoYXRJZCwgYXJjaGl2ZWQpIHtcbiAgY29uc3QgZm9sZGVyc09wdGlvbnMgPSBmb2xkZXJzXG4gICAgLm1hcCgoZm9sZGVyLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGZvbGRlci5pZCA9PT0gY3VycmVudEFjdGl2ZUZvbGRlcjtcbiAgICAgIHJldHVybiBgXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cIm9wdGlvblwiPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZmxleDogMTtcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZm9sZGVyXCIgdmFsdWU9XCIke2ZvbGRlci5pZH1cIiAke1xuICAgICAgICBpc1NlbGVjdGVkID8gXCJjaGVja2VkXCIgOiBcIlwiXG4gICAgICB9PlxuICAgICAgICAgICAgJHtmb2xkZXIubmFtZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAke2luZGV4IDwgOSA/IGA8a2JkPiR7aW5kZXggKyAxfTwva2JkPmAgOiBcIlwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIGA7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKTtcblxuICBjb25zdCBtb3ZlVG9Gb3JtQ29udGVudCA9IGBcbiAgICA8Zm9ybSBpZD1cIm1vdmVUb0Zvcm1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ4MTJscXVwOSB4MW8xa3gwOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtbWQgeDlmNjE5IHgxcDVvcThqXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJtb2RhbC10aXRsZSB4MXc3c2RqcSB4MWZjdHkwdVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5mb2xkZXI8L3NwYW4+XG4gICAgICAgICAgICAgIE1vdmUgdG9cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSB4ZHQ1eXRmIHh1Ym51eXEgeHcyY3N4YyB4MW9kancwZiB4bzZ3bTM2IHgxaWVna2E1IHhjNTMwdTAgeDh6eDRxdiB4MWdjbXdseSB4MTdzeTZ5dSB4d3Nha2p3IHgxdnoxc3NpIHh4YmIxcnEgeHd4YzQxa1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNub296ZS1vcHRpb25zXCI+XG4gICAgICAgICAgICAgICR7Zm9sZGVyc09wdGlvbnN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIGA7XG5cbiAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoe1xuICAgIG1vZGFsQ29udGVudDogbW92ZVRvRm9ybUNvbnRlbnQsXG4gICAgZm9ybUhhbmRsZXI6IGFzeW5jIChmb3JtRGF0YSkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRGb2xkZXJJZCA9IHBhcnNlSW50KGZvcm1EYXRhLmdldChcImZvbGRlclwiKSk7XG4gICAgICBpZiAoc2VsZWN0ZWRGb2xkZXJJZCkge1xuICAgICAgICB1cGRhdGVDb250YWN0c0luRm9sZGVyKHNlbGVjdGVkRm9sZGVySWQsIGNoYXRJZCwgYXJjaGl2ZWQpO1xuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gSW5kaWNhdGVzIHN1Y2Nlc3NmdWwgaGFuZGxpbmdcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTsgLy8gSW5kaWNhdGVzIHVuc3VjY2Vzc2Z1bCBoYW5kbGluZ1xuICAgIH0sXG4gICAgc2hvcnRjdXRIYW5kbGVyOiAoZSkgPT4ge1xuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW92ZVRvRm9ybVwiKTtcbiAgICAgIGNvbnN0IGtleSA9IGUua2V5O1xuICAgICAgaWYgKC9eWzEtOV0kLy50ZXN0KGtleSkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGtleSkgLSAxO1xuICAgICAgICBjb25zdCByYWRpb0lucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG4gICAgICAgIGlmIChpbmRleCA8IHJhZGlvSW5wdXRzLmxlbmd0aCkge1xuICAgICAgICAgIHJhZGlvSW5wdXRzW2luZGV4XS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICByYWRpb0lucHV0c1tpbmRleF0uZm9jdXMoKTtcbiAgICAgICAgICBmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic3VibWl0XCIpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJzdWJtaXRcIikpO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuXG4gIG1vZGFsLm9wZW5Nb2RhbCgpO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW92ZVRvRm9ybVwiKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwibGFiZWwub3B0aW9uXCIpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCByYWRpbyA9IGUudGFyZ2V0XG4gICAgICAgIC5jbG9zZXN0KFwibGFiZWwub3B0aW9uXCIpXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInN1Ym1pdFwiKSk7XG4gICAgfVxuICB9KTtcblxuICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpLmZvY3VzKCk7XG59XG4iLCJpbXBvcnQgeyBzd2l0Y2hGb2xkZXIgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQgeyBpc1VzZXJUeXBpbmcgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuaW1wb3J0IHsgY3VycmVudEFjdGl2ZUZvbGRlciwgZm9sZGVycyB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwS2V5Ym9hcmRMaXN0ZW5lcnMoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChpc1VzZXJUeXBpbmcoKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gZm9sZGVycy5maW5kSW5kZXgoXG4gICAgICAoZm9sZGVyKSA9PiBmb2xkZXIuaWQgPT09IGN1cnJlbnRBY3RpdmVGb2xkZXJcbiAgICApO1xuICAgIGNvbnN0IHRvdGFsRm9sZGVycyA9IGZvbGRlcnMubGVuZ3RoO1xuXG4gICAgaWYgKFxuICAgICAgZXZlbnQua2V5ID09PSBcIkFycm93TGVmdFwiICYmXG4gICAgICAhZXZlbnQubWV0YUtleSAmJlxuICAgICAgIWV2ZW50LmN0cmxLZXkgJiZcbiAgICAgICFldmVudC5hbHRLZXkgJiZcbiAgICAgICFldmVudC5zaGlmdEtleVxuICAgICkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IChjdXJyZW50SW5kZXggLSAxICsgdG90YWxGb2xkZXJzKSAlIHRvdGFsRm9sZGVycztcbiAgICAgIHN3aXRjaEZvbGRlcihmb2xkZXJzW3ByZXZJbmRleF0uaWQpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKGBmb2xkZXItJHtmb2xkZXJzW3ByZXZJbmRleF0uaWR9YClcbiAgICAgICAgLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGlubGluZTogXCJjZW50ZXJcIiB9KTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBldmVudC5rZXkgPT09IFwiQXJyb3dSaWdodFwiICYmXG4gICAgICAhZXZlbnQubWV0YUtleSAmJlxuICAgICAgIWV2ZW50LmN0cmxLZXkgJiZcbiAgICAgICFldmVudC5hbHRLZXkgJiZcbiAgICAgICFldmVudC5zaGlmdEtleVxuICAgICkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IG5leHRJbmRleCA9IChjdXJyZW50SW5kZXggKyAxKSAlIHRvdGFsRm9sZGVycztcbiAgICAgIHN3aXRjaEZvbGRlcihmb2xkZXJzW25leHRJbmRleF0uaWQpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKGBmb2xkZXItJHtmb2xkZXJzW25leHRJbmRleF0uaWR9YClcbiAgICAgICAgLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGlubGluZTogXCJjZW50ZXJcIiB9KTtcbiAgICB9XG4gIH0pO1xufVxuIiwiY29uc3QgaW5pdGlhbEZvbGRlcnMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiBcIkltcG9ydGFudFwiLFxuICAgIGNvbnRhY3RzOiBbXSxcbiAgICBpbmJveDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6IFwiT3RoZXJzXCIsXG4gICAgY29udGFjdHM6IFtdLFxuICB9LFxuXTtcblxuZXhwb3J0IGxldCBmb2xkZXJzID0gW107XG5leHBvcnQgZnVuY3Rpb24gc2V0Rm9sZGVycyh2YWwpIHtcbiAgZm9sZGVycyA9IHZhbDtcbn1cblxuZXhwb3J0IGxldCBjdXJyZW50QWN0aXZlRm9sZGVyID0gMTtcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50QWN0aXZlRm9sZGVyKHZhbCkge1xuICBjdXJyZW50QWN0aXZlRm9sZGVyID0gdmFsO1xufVxuXG4vLyBMb2FkIGZvbGRlcnMgZnJvbSBzdG9yYWdlIGFuZCBleGVjdXRlIGNhbGxiYWNrXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZvbGRlcnNGcm9tU3RvcmFnZShjYWxsYmFjaykge1xuICBsb2FkU2V0dGluZ3NGcm9tU3RvcmFnZSgobG9hZGVkRm9sZGVycywgXykgPT4ge1xuICAgIHNldEZvbGRlcnMobG9hZGVkRm9sZGVycyk7XG4gICAgY2FsbGJhY2sobG9hZGVkRm9sZGVycyk7XG4gIH0pO1xufVxuXG4vLyBTYXZlIGZvbGRlcnMgdG8gc3RvcmFnZVxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVGb2xkZXJzVG9TdG9yYWdlKGZvbGRlcnMpIHtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgZm9sZGVyczogZm9sZGVycyB9KTtcbn1cblxuLy8gTG9hZCBmb2xkZXJzIGZyb20gc3RvcmFnZVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTZXR0aW5nc0Zyb21TdG9yYWdlKGNhbGxiYWNrKSB7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJmb2xkZXJzXCJdLCAocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgbG9hZGVkRm9sZGVycyA9IHJlc3VsdC5mb2xkZXJzIHx8IGluaXRpYWxGb2xkZXJzOyAvLyBVc2UgaW5pdGlhbCBmb2xkZXJzIGlmIG5vIGZvbGRlcnMgYXJlIGZvdW5kXG4gICAgY2FsbGJhY2sobG9hZGVkRm9sZGVycyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRGb2xkZXJzKCkge1xuICBmb2xkZXJzID0gaW5pdGlhbEZvbGRlcnM7XG4gIHNhdmVGb2xkZXJzVG9TdG9yYWdlKGZvbGRlcnMpO1xufVxuIiwiaW1wb3J0IHsgZ2V0RWxlbWVudEJ5WHBhdGgsIGhpZGVBbGxDaGlsZHJlbiB9IGZyb20gXCIuLi8uLi91dGlscy9kb21IZWxwZXJzXCI7XG5pbXBvcnQgeyBmb2xkZXJCdXR0b24gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb2xkZXJCdXR0b25cIjtcbmltcG9ydCB7IHN3aXRjaEZvbGRlciB9IGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCB7IGN1cnJlbnRBY3RpdmVGb2xkZXIsIGZvbGRlcnMgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBjaGF0TWVudUl0ZW0gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jaGF0TWVudUl0ZW1cIjtcbmltcG9ydCB7IG1vdmVUb0Zvcm0gfSBmcm9tIFwiLi9tb3ZlVG9Gb3JtXCI7XG5pbXBvcnQgeyBmb2xkZXJGb3JtIH0gZnJvbSBcIi4vZm9sZGVyRm9ybVwiO1xuaW1wb3J0IHsgZm9sZGVyc0Zvcm0gfSBmcm9tIFwiLi9mb2xkZXJzRm9ybVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVVJKCkge1xuICBsZXQgZm9sZGVyc1NlY3Rpb24gPSBnZXRFbGVtZW50QnlYcGF0aChgLy8qW0BpZD1cInNpZGVcIl0vZGl2WzJdYCk7XG5cbiAgaWYgKGZvbGRlcnNTZWN0aW9uLmlkICE9PSBcInBhbmUtc2lkZVwiKSB7XG4gICAgZm9sZGVyc1NlY3Rpb24uc3R5bGUub3ZlcmZsb3dYID0gXCJhdXRvXCI7XG4gICAgZm9sZGVyc1NlY3Rpb24uc3R5bGUuZmxleFdyYXAgPSBcIm5vd3JhcFwiO1xuICAgIGZvbGRlcnNTZWN0aW9uLnN0eWxlLndoaXRlU3BhY2UgPSBcIm5vd3JhcFwiO1xuICAgIGZvbGRlcnNTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBoaWRlQWxsQ2hpbGRyZW4oZm9sZGVyc1NlY3Rpb24pOyAvLyB0aGlzIGhpZGVzIFVucmVhZCBhbmQgR3JvdXBzIHRhYnNcbiAgfSBlbHNlIHtcbiAgICBmb2xkZXJzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9sZGVyc1NlY3Rpb24uY2xhc3NOYW1lID1cbiAgICAgIFwieDFreThvamIgeDc4enVtNSB4MXEwZzNucCB4MWEwMmRhayB4MmxhaDBzIHgzcG5iazggeGZleDA2ZiB4ZXV1Z2xpIHgybHduMWogeDFubjN2MGogeDF5a3BhdHUgeDFzd3Z0MTMgeDFwaTMwemkgXCI7XG4gICAgZm9sZGVyc1NlY3Rpb24uc3R5bGUgPVxuICAgICAgXCJvdmVyZmxvdy14OiBhdXRvOyBmbGV4LXdyYXA6IG5vd3JhcDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgZGlzcGxheTogZmxleDtcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGVcIikuaW5zZXJ0Q2hpbGRBdEluZGV4KGZvbGRlcnNTZWN0aW9uLCAyKTtcbiAgfVxuXG4gIC8vIENyZWF0ZSBhIGNvbnRhaW5lciBmb3IgZm9sZGVyc1xuICBjb25zdCBmb2xkZXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9sZGVyc0NvbnRhaW5lci5pZCA9IFwiZm9sZGVycy1jb250YWluZXJcIjtcbiAgZm9sZGVyc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGZvbGRlcnNDb250YWluZXIuc3R5bGUuZmxleCA9IFwiMVwiO1xuICBmb2xkZXJzQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93WCA9IFwiYXV0b1wiO1xuICBmb2xkZXJzQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwieGZleDA2ZiB4M3BuYms4XCI7XG5cbiAgLy8gU29ydCBmb2xkZXJzIGJhc2VkIG9uIHRoZWlyIHBvc2l0aW9uIGF0dHJpYnV0ZVxuICBjb25zdCBzb3J0ZWRGb2xkZXJzID0gWy4uLmZvbGRlcnNdLnNvcnQoKGEsIGIpID0+IGEucG9zaXRpb24gLSBiLnBvc2l0aW9uKTtcblxuICBmb3IgKGNvbnN0IGZvbGRlciBvZiBzb3J0ZWRGb2xkZXJzKSB7XG4gICAgY29uc3QgdG90YWxDaGF0c0NvdW50ID0gZm9sZGVyLmNvbnRhY3RzLnJlZHVjZShcbiAgICAgIChzdW0sIGNvbnRhY3QpID0+IHN1bSArICghY29udGFjdC5hcmNoaXZlZCA/IDEgOiAwKSxcbiAgICAgIDBcbiAgICApO1xuXG4gICAgZm9sZGVyc0NvbnRhaW5lci5hcHBlbmQoXG4gICAgICBmb2xkZXJCdXR0b24oXG4gICAgICAgIGZvbGRlci5pZCxcbiAgICAgICAgZm9sZGVyLmlkID09PSBjdXJyZW50QWN0aXZlRm9sZGVyLFxuICAgICAgICBmb2xkZXIubmFtZSxcbiAgICAgICAgKCkgPT4gc3dpdGNoRm9sZGVyKGZvbGRlci5pZCksXG4gICAgICAgICgpID0+IGZvbGRlckZvcm0oZm9sZGVyLmlkKSxcbiAgICAgICAgdG90YWxDaGF0c0NvdW50XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8vIEFkZCB0aGUgZm9sZGVycyBjb250YWluZXIgdG8gdGhlIG1haW4gc2VjdGlvblxuICBmb2xkZXJzU2VjdGlvbi5hcHBlbmRDaGlsZChmb2xkZXJzQ29udGFpbmVyKTtcblxuICAvLyBBZGQgc2V0dGluZ3MgYnV0dG9uIGFmdGVyIGZvbGRlcnNcbiAgY29uc3Qgc2V0dGluZ3NCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzZXR0aW5nc0J1dHRvbi5jbGFzc05hbWUgPVxuICAgIFwieGpiMnAwaSB4MXlwZG9oayB4OTcyZmJmIHhjZnV4NmwgeDFxaGg5ODUgeG0wbTM5biB4MW12Z2ozOSB4NnByeHhmIHhvMWw4Ym0geDFidHVwYnAgeDF5cnN5eW4geDEwYjZhcXFcIjtcbiAgc2V0dGluZ3NCdXR0b24uc3R5bGUuYmFja2dyb3VuZCA9IFwiaW5oZXJpdFwiO1xuICBzZXR0aW5nc0J1dHRvbi5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiOHB4XCI7XG4gIHNldHRpbmdzQnV0dG9uLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwieDFjNHZ6NGYgeHM4M20wayB4ZGw3Mmo5IHgxZzc3c2M3IHg3OHp1bTUgeG96cWl3MyB4MW9hM3FvaCB4MTJmazRwOCB4ZXV1Z2xpIHgybHduMWogeDFuaHZjdzEgeDFxMGczbnAgeDZzMGRuNCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPlxuICAgICAgICBmb2xkZXJfbWFuYWdlZFxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICBgO1xuICBzZXR0aW5nc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZm9sZGVyc0Zvcm0oKSk7XG4gIGZvbGRlcnNTZWN0aW9uLmFwcGVuZENoaWxkKHNldHRpbmdzQnV0dG9uKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKFxuICAgICAgZXZlbnQuc291cmNlID09PSB3aW5kb3cgJiZcbiAgICAgIGV2ZW50LmRhdGEgJiZcbiAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gXCJPUEVOX0NPTlRFWFRfTUVOVVwiXG4gICAgKSB7XG4gICAgICBjb25zdCB7IGNoYXRJZCwgYXJjaGl2ZWQgfSA9IGV2ZW50LmRhdGE7XG5cbiAgICAgIGNvbnN0IGNoYXRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYCNhcHAgPiBkaXYgPiBzcGFuOm50aC1jaGlsZCg2KSA+IGRpdiA+IHVsID4gZGl2YFxuICAgICAgKTtcblxuICAgICAgY2hhdE1lbnUuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7IC8vIFJlbW92ZSBhcmNoaXZlIGJ1dHRvbiBzaW5jZSB3ZSBoYXZlIGN1c3RvbSBhY3Rpb25zIGFuZCB3ZSBuZWVkIHNwYWNlIGhlcmVcblxuICAgICAgY2hhdE1lbnUuaW5zZXJ0Q2hpbGRBdEluZGV4KFxuICAgICAgICBjaGF0TWVudUl0ZW0oXCJNb3ZlIHRvXCIsIFwidlwiLCAoKSA9PiBtb3ZlVG9Gb3JtKGNoYXRJZCwgYXJjaGl2ZWQpKSxcbiAgICAgICAgMFxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRm9sZGVyc1VJKCkge1xuICBjb25zdCBmb2xkZXJzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb2xkZXJzLWNvbnRhaW5lclwiKTtcbiAgaWYgKCFmb2xkZXJzQ29udGFpbmVyKSByZXR1cm47XG5cbiAgLy8gU29ydCBmb2xkZXJzIGJhc2VkIG9uIHRoZWlyIHBvc2l0aW9uIGF0dHJpYnV0ZVxuICBjb25zdCBzb3J0ZWRGb2xkZXJzID0gWy4uLmZvbGRlcnNdLnNvcnQoKGEsIGIpID0+IGEucG9zaXRpb24gLSBiLnBvc2l0aW9uKTtcblxuICAvLyBSZW1vdmUgYWxsIGV4aXN0aW5nIGZvbGRlciBidXR0b25zXG4gIGZvbGRlcnNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAvLyBSZS1hZGQgZm9sZGVyIGJ1dHRvbnMgaW4gdGhlIG5ldyBvcmRlclxuICBmb3IgKGNvbnN0IGZvbGRlciBvZiBzb3J0ZWRGb2xkZXJzKSB7XG4gICAgY29uc3QgdG90YWxDaGF0c0NvdW50ID0gZm9sZGVyLmNvbnRhY3RzLnJlZHVjZShcbiAgICAgIChzdW0sIGNvbnRhY3QpID0+IHN1bSArICghY29udGFjdC5hcmNoaXZlZCA/IDEgOiAwKSxcbiAgICAgIDBcbiAgICApO1xuXG4gICAgZm9sZGVyc0NvbnRhaW5lci5hcHBlbmRDaGlsZChcbiAgICAgIGZvbGRlckJ1dHRvbihcbiAgICAgICAgZm9sZGVyLmlkLFxuICAgICAgICBmb2xkZXIuaWQgPT09IGN1cnJlbnRBY3RpdmVGb2xkZXIsXG4gICAgICAgIGZvbGRlci5uYW1lLFxuICAgICAgICAoKSA9PiBzd2l0Y2hGb2xkZXIoZm9sZGVyLmlkKSxcbiAgICAgICAgKCkgPT4gZm9sZGVyRm9ybShmb2xkZXIuaWQpLFxuICAgICAgICB0b3RhbENoYXRzQ291bnRcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBmb2xkZXJCdXR0b24gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb2xkZXJCdXR0b25cIjtcbmltcG9ydCB7IGN1cnJlbnRBY3RpdmVGb2xkZXIgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBzd2l0Y2hGb2xkZXIgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQgeyBmb2xkZXJGb3JtIH0gZnJvbSBcIi4vZm9sZGVyRm9ybVwiO1xuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIFVJIHdpdGggdGhlIG5ldyBmb2xkZXJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVVSVdpdGhOZXdGb2xkZXIoZm9sZGVySWQsIGZvbGRlck5hbWUpIHtcbiAgY29uc3QgZm9sZGVyc1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvbGRlcnMtY29udGFpbmVyXCIpO1xuXG4gIGZvbGRlcnNTZWN0aW9uLmluc2VydENoaWxkQXRJbmRleChcbiAgICBmb2xkZXJCdXR0b24oXG4gICAgICBmb2xkZXJJZCxcbiAgICAgIGZvbGRlcklkID09PSBjdXJyZW50QWN0aXZlRm9sZGVyLFxuICAgICAgZm9sZGVyTmFtZSxcbiAgICAgICgpID0+IHN3aXRjaEZvbGRlcihmb2xkZXJJZCksXG4gICAgICAoKSA9PiBmb2xkZXJGb3JtKGZvbGRlcklkKVxuICAgICksXG4gICAgZm9sZGVyc1NlY3Rpb24uY2hpbGROb2Rlcy5sZW5ndGhcbiAgKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBVSSB3aGVuIGEgZm9sZGVyIG5hbWUgaXMgY2hhbmdlZFxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVVJV2l0aFVwZGF0ZWRGb2xkZXJOYW1lKFxuICBmb2xkZXJJZCxcbiAgbmV3Rm9sZGVyTmFtZSxcbiAgdW5yZWFkQ291bnQgPSAwXG4pIHtcbiAgY29uc3QgZm9sZGVyc1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvbGRlcnMtY29udGFpbmVyXCIpO1xuICBjb25zdCBvbGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBidXR0b25baWQ9J2ZvbGRlci0ke2ZvbGRlcklkfSddYCk7XG5cbiAgaWYgKG9sZEJ1dHRvbikge1xuICAgIGNvbnN0IGluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChcbiAgICAgIGZvbGRlcnNTZWN0aW9uLmNoaWxkcmVuLFxuICAgICAgb2xkQnV0dG9uXG4gICAgKTtcblxuICAgIC8vIFJlbW92ZSB0aGUgb2xkIGJ1dHRvblxuICAgIGZvbGRlcnNTZWN0aW9uLnJlbW92ZUNoaWxkKG9sZEJ1dHRvbik7XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgYnV0dG9uXG4gICAgY29uc3QgbmV3QnV0dG9uID0gZm9sZGVyQnV0dG9uKFxuICAgICAgZm9sZGVySWQsXG4gICAgICBmb2xkZXJJZCA9PT0gY3VycmVudEFjdGl2ZUZvbGRlcixcbiAgICAgIG5ld0ZvbGRlck5hbWUsXG4gICAgICAoKSA9PiBzd2l0Y2hGb2xkZXIoZm9sZGVySWQpLFxuICAgICAgKCkgPT4gZm9sZGVyRm9ybShmb2xkZXJJZCksXG4gICAgICB1bnJlYWRDb3VudFxuICAgICk7XG5cbiAgICAvLyBJbnNlcnQgdGhlIG5ldyBidXR0b24gYXQgdGhlIHNhbWUgaW5kZXhcbiAgICBmb2xkZXJzU2VjdGlvbi5pbnNlcnRCZWZvcmUobmV3QnV0dG9uLCBmb2xkZXJzU2VjdGlvbi5jaGlsZHJlbltpbmRleF0pO1xuICB9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgZm9sZGVyIGZyb20gdGhlIFVJXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRm9sZGVyRnJvbVVJKGZvbGRlcklkKSB7XG4gIGNvbnN0IGZvbGRlcnNTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb2xkZXJzLWNvbnRhaW5lclwiKTtcbiAgY29uc3Qgb2xkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYnV0dG9uW2lkPSdmb2xkZXItJHtmb2xkZXJJZH0nXWApO1xuXG4gIGlmIChvbGRCdXR0b24pIHtcbiAgICBmb2xkZXJzU2VjdGlvbi5yZW1vdmVDaGlsZChvbGRCdXR0b24pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGF0SXRlbVVuZGVyTWVudShtZW51RWxlbWVudCkge1xuICAvLyBHZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBtZW51IGVsZW1lbnRcbiAgY29uc3QgcmVjdCA9IG1lbnVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIC8vIEZpbmQgdGhlIGVsZW1lbnQgYXQgdGhlIGNlbnRlciBvZiB0aGUgbWVudVxuICBjb25zdCBjaGF0SXRlbSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoXG4gICAgcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCAvIDIsXG4gICAgcmVjdC50b3AgKyByZWN0LmhlaWdodCAvIDJcbiAgKTtcblxuICAvLyBEZWZpbmUgdGhlIHJlcXVpcmVkIGNsYXNzZXMgZm9yIHRoZSBjaGF0IGl0ZW1cbiAgY29uc3QgcmVxdWlyZWRDbGFzc2VzID0gW1wieDEwbDZ0cWtcIiwgXCJ4aDh5ZWozXCIsIFwieDFnNDJmY3ZcIl07XG5cbiAgLy8gRnVuY3Rpb24gdG8gZmluZCB0aGUgcGFyZW50IHdpdGggYWxsIHRoZSByZXF1aXJlZCBjbGFzc2VzXG4gIGZ1bmN0aW9uIGZpbmRQYXJlbnRXaXRoQ2xhc3NlcyhlbGVtZW50LCBjbGFzc2VzKSB7XG4gICAgbGV0IGN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcbiAgICB3aGlsZSAoY3VycmVudEVsZW1lbnQpIHtcbiAgICAgIGlmIChjbGFzc2VzLmV2ZXJ5KChjbHMpID0+IGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbHMpKSkge1xuICAgICAgICByZXR1cm4gY3VycmVudEVsZW1lbnQ7XG4gICAgICB9XG4gICAgICBjdXJyZW50RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7IC8vIE1vdmUgdXAgdGhlIERPTSB0cmVlXG4gICAgfVxuICAgIHJldHVybiBudWxsOyAvLyBObyBwYXJlbnQgd2l0aCBhbGwgdGhlIHNwZWNpZmllZCBjbGFzc2VzIHdhcyBmb3VuZFxuICB9XG5cbiAgLy8gRmluZCB0aGUgcGFyZW50IHdpdGggdGhlIHJlcXVpcmVkIGNsYXNzZXNcbiAgY29uc3QgY2hhdEl0ZW1QYXJlbnQgPSBmaW5kUGFyZW50V2l0aENsYXNzZXMoY2hhdEl0ZW0sIHJlcXVpcmVkQ2xhc3Nlcyk7XG5cbiAgcmV0dXJuIFtjaGF0SXRlbVBhcmVudCwgY2hhdEl0ZW1dO1xufVxuIiwiaW1wb3J0IHsgZ2V0RWxlbWVudEJ5WHBhdGggfSBmcm9tIFwiLi4vLi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuaW1wb3J0IHsgbmF2QmFySXRlbSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL25hdkJhckl0ZW1cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVTY2hlZHVsZWQoKSB7XG4gIC8vIExpc3RlbiBmb3IgY3VzdG9tIGV2ZW50IGFuZCBpbml0aWFsaXplIGZlYXR1cmVzXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGF0c2FwcEluaXRpYWxpemVkXCIsICgpID0+IHtcbiAgICAvLyBTbWFydCBzdHVmZiBoZXJlXG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgc2V0dXBLZXlib2FyZExpc3RlbmVycyB9IGZyb20gXCIuL2tleWJvYXJkTGlzdGVuZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplU2hvcnRjdXRzKCkge1xuICAvLyBXYWl0IHV0aWwgV2hhdHNBcHAgYnVpbGQgdXAgdGhlIGludGVyZmFjZVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwid2hhdHNhcHBJbml0aWFsaXplZFwiLCAoKSA9PiB7XG4gICAgc2V0dXBLZXlib2FyZExpc3RlbmVycygpO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGlzVXNlclR5cGluZywgZ2V0RWxlbWVudEJ5WHBhdGggfSBmcm9tIFwiLi4vLi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuaW1wb3J0IHtcbiAgdHJpZ2dlck5hdGl2ZVNob3J0Y3V0LFxuICBzaW11bGF0ZUtleVByZXNzLFxufSBmcm9tIFwiLi4vLi4vdXRpbHMvZXZlbnRIZWxwZXJzXCI7XG5pbXBvcnQgeyByZXF1ZXN0U25vb3plRm9ybSB9IGZyb20gXCIuLi8uLi93aGF0c2FwcFN0b3JlL3JlcXVlc3RTbm9vemVGb3JtXCI7XG5pbXBvcnQgeyByZXF1ZXN0TW92ZVRvRm9ybSB9IGZyb20gXCIuLi8uLi93aGF0c2FwcFN0b3JlL3JlcXVlc3RNb3ZlVG9Gb3JtXCI7XG5pbXBvcnQge1xuICBmb2N1c05leHRDaGF0LFxuICBmb2N1c05leHRDaGF0TGlzdGVuZXIsXG59IGZyb20gXCIuLi8uLi93aGF0c2FwcFN0b3JlL2ZvY3VzTmV4dENoYXRcIjtcbmltcG9ydCB7XG4gIGZvY3VzUHJldmlvdXNDaGF0LFxuICBmb2N1c1ByZXZpb3VzQ2hhdExpc3RlbmVyLFxufSBmcm9tIFwiLi4vLi4vd2hhdHNhcHBTdG9yZS9mb2N1c1ByZXZpb3VzQ2hhdFwiO1xuaW1wb3J0IHsgY29tcG9zZUZvY3VzTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vd2hhdHNhcHBTdG9yZS9jb21wb3NlRm9jdXNcIjtcbmltcG9ydCB7XG4gIGZvY3VzTGFzdE1lc3NhZ2VMaXN0ZW5lcixcbiAgZm9jdXNMYXN0TWVzc2FnZSxcbn0gZnJvbSBcIi4uLy4uL3doYXRzYXBwU3RvcmUvZm9jdXNMYXN0TWVzc2FnZVwiO1xuXG5jb25zdCBpc01hYyA9IG5hdmlnYXRvci5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKFwibWFjXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBLZXlib2FyZExpc3RlbmVycygpIHtcbiAgZm9jdXNOZXh0Q2hhdExpc3RlbmVyKCk7XG4gIGZvY3VzUHJldmlvdXNDaGF0TGlzdGVuZXIoKTtcbiAgY29tcG9zZUZvY3VzTGlzdGVuZXIoKTtcbiAgZm9jdXNMYXN0TWVzc2FnZUxpc3RlbmVyKCk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImtleWRvd25cIixcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChpc1VzZXJUeXBpbmcoKSkgcmV0dXJuO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50LmtleSA9PT0gXCJBcnJvd0Rvd25cIiAmJlxuICAgICAgICAhZXZlbnQubWV0YUtleSAmJlxuICAgICAgICAhZXZlbnQuY3RybEtleSAmJlxuICAgICAgICAhZXZlbnQuYWx0S2V5ICYmXG4gICAgICAgICFldmVudC5zaGlmdEtleVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBmb2N1c05leHRDaGF0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgZXZlbnQua2V5ID09PSBcIkFycm93VXBcIiAmJlxuICAgICAgICAhZXZlbnQubWV0YUtleSAmJlxuICAgICAgICAhZXZlbnQuY3RybEtleSAmJlxuICAgICAgICAhZXZlbnQuYWx0S2V5ICYmXG4gICAgICAgICFldmVudC5zaGlmdEtleVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBmb2N1c1ByZXZpb3VzQ2hhdCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdHJ1ZVxuICApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJrZXlkb3duXCIsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIiAmJlxuICAgICAgICAhZXZlbnQubWV0YUtleSAmJlxuICAgICAgICAhZXZlbnQuY3RybEtleSAmJlxuICAgICAgICAhZXZlbnQuYWx0S2V5ICYmXG4gICAgICAgICFldmVudC5zaGlmdEtleVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYWN0aXZlRWxlbWVudCAmJlxuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gXCJESVZcIiAmJlxuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpID09PSBcInRydWVcIlxuICAgICAgICApIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGZvY3VzTGFzdE1lc3NhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdHJ1ZVxuICApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJrZXlkb3duXCIsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoaXNVc2VyVHlwaW5nKCkpIHJldHVybjtcbiAgICAgIGlmIChcbiAgICAgICAgZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiZcbiAgICAgICAgIWV2ZW50Lm1ldGFLZXkgJiZcbiAgICAgICAgIWV2ZW50LmN0cmxLZXkgJiZcbiAgICAgICAgIWV2ZW50LmFsdEtleSAmJlxuICAgICAgICAhZXZlbnQuc2hpZnRLZXlcbiAgICAgICkge1xuICAgICAgICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICdkaXZbY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXS54MWh4MGVncC54NmlrbThyLngxb2RqdzBmLngxazZyY3E3Lng2cHJ4eGY6bm90KC54MXdoajV2KSdcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKG1lc3NhZ2VJbnB1dCkge1xuICAgICAgICAgIG1lc3NhZ2VJbnB1dC5mb2N1cygpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRydWVcbiAgKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwia2V5ZG93blwiLFxuICAgIChldmVudCkgPT4ge1xuICAgICAgaWYgKGlzVXNlclR5cGluZygpKSByZXR1cm47XG5cbiAgICAgIGlmIChcbiAgICAgICAgZXZlbnQua2V5ID09PSBcImNcIiAmJlxuICAgICAgICAhZXZlbnQubWV0YUtleSAmJlxuICAgICAgICAhZXZlbnQuY3RybEtleSAmJlxuICAgICAgICAhZXZlbnQuYWx0S2V5ICYmXG4gICAgICAgICFldmVudC5zaGlmdEtleVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0cmlnZ2VyTmF0aXZlU2hvcnRjdXQoe1xuICAgICAgICAgIGtleTogXCJuXCIsXG4gICAgICAgICAgY29kZTogXCJLZXlOXCIsXG4gICAgICAgICAgY3RybEtleTogdHJ1ZSxcbiAgICAgICAgICBhbHRLZXk6ICFpc01hYyxcbiAgICAgICAgICBzaGlmdEtleTogZmFsc2UsXG4gICAgICAgICAgbWV0YUtleTogaXNNYWMsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgdHJ1ZVxuICApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJrZXlkb3duXCIsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoaXNVc2VyVHlwaW5nKCkpIHJldHVybjtcblxuICAgICAgaWYgKFxuICAgICAgICBldmVudC5rZXkgPT09IFwiL1wiICYmXG4gICAgICAgICFldmVudC5tZXRhS2V5ICYmXG4gICAgICAgICFldmVudC5jdHJsS2V5ICYmXG4gICAgICAgICFldmVudC5hbHRLZXkgJiZcbiAgICAgICAgIWV2ZW50LnNoaWZ0S2V5XG4gICAgICApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRyaWdnZXJOYXRpdmVTaG9ydGN1dCh7XG4gICAgICAgICAga2V5OiBcImtcIixcbiAgICAgICAgICBjb2RlOiBcIktleUtcIixcbiAgICAgICAgICBjdHJsS2V5OiBmYWxzZSxcbiAgICAgICAgICBhbHRLZXk6ICFpc01hYyxcbiAgICAgICAgICBzaGlmdEtleTogZmFsc2UsXG4gICAgICAgICAgbWV0YUtleTogaXNNYWMsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgdHJ1ZVxuICApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJrZXlkb3duXCIsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoaXNVc2VyVHlwaW5nKCkpIHJldHVybjtcblxuICAgICAgaWYgKFxuICAgICAgICBldmVudC5rZXkgPT09IFwiZVwiICYmXG4gICAgICAgICFldmVudC5tZXRhS2V5ICYmXG4gICAgICAgICFldmVudC5jdHJsS2V5ICYmXG4gICAgICAgICFldmVudC5hbHRLZXkgJiZcbiAgICAgICAgIWV2ZW50LnNoaWZ0S2V5XG4gICAgICApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRyaWdnZXJOYXRpdmVTaG9ydGN1dCh7XG4gICAgICAgICAga2V5OiBcImVcIixcbiAgICAgICAgICBjb2RlOiBcIktleUVcIixcbiAgICAgICAgICBjdHJsS2V5OiB0cnVlLFxuICAgICAgICAgIGFsdEtleTogIWlzTWFjLFxuICAgICAgICAgIHNoaWZ0S2V5OiB0cnVlLFxuICAgICAgICAgIG1ldGFLZXk6IGlzTWFjLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRydWVcbiAgKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwia2V5ZG93blwiLFxuICAgIChldmVudCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBldmVudC5rZXkgPT09IFwiRW50ZXJcIiAmJlxuICAgICAgICBldmVudC5tZXRhS2V5ICYmXG4gICAgICAgICFldmVudC5jdHJsS2V5ICYmXG4gICAgICAgICFldmVudC5hbHRLZXkgJiZcbiAgICAgICAgZXZlbnQuc2hpZnRLZXlcbiAgICAgICkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBHZXQgdGhlIG1lc3NhZ2UgaW5wdXQgZWxlbWVudFxuICAgICAgICBjb25zdCBtZXNzYWdlSW5wdXQgPSBnZXRFbGVtZW50QnlYcGF0aChcbiAgICAgICAgICBgLy8qW0BpZD1cIm1haW5cIl0vZm9vdGVyL2RpdlsxXS9kaXYvc3BhblsyXS9kaXYvZGl2WzJdL2RpdlsxXS9kaXYvZGl2YFxuICAgICAgICApO1xuICAgICAgICBpZiAobWVzc2FnZUlucHV0KSB7XG4gICAgICAgICAgLy8gU2ltdWxhdGUgRW50ZXIga2V5IHByZXNzIHRvIHNlbmQgdGhlIG1lc3NhZ2VcbiAgICAgICAgICBzaW11bGF0ZUtleVByZXNzKG1lc3NhZ2VJbnB1dCwgXCJFbnRlclwiKTtcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gQXJjaGl2ZSB0aGUgY2hhdFxuICAgICAgICAgICAgdHJpZ2dlck5hdGl2ZVNob3J0Y3V0KHtcbiAgICAgICAgICAgICAga2V5OiBcImVcIixcbiAgICAgICAgICAgICAgY29kZTogXCJLZXlFXCIsXG4gICAgICAgICAgICAgIGN0cmxLZXk6IHRydWUsXG4gICAgICAgICAgICAgIGFsdEtleTogIWlzTWFjLFxuICAgICAgICAgICAgICBzaGlmdEtleTogdHJ1ZSxcbiAgICAgICAgICAgICAgbWV0YUtleTogaXNNYWMsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdHJpZ2dlck5hdGl2ZVNob3J0Y3V0KHtcbiAgICAgICAgICAgICAga2V5OiBcIkVzY2FwZVwiLFxuICAgICAgICAgICAgICBjb2RlOiBcIktleUVzY2FwZVwiLFxuICAgICAgICAgICAgICBjdHJsS2V5OiBmYWxzZSxcbiAgICAgICAgICAgICAgYWx0S2V5OiBmYWxzZSxcbiAgICAgICAgICAgICAgc2hpZnRLZXk6IGZhbHNlLFxuICAgICAgICAgICAgICBtZXRhS2V5OiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRydWVcbiAgKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwia2V5ZG93blwiLFxuICAgIChldmVudCkgPT4ge1xuICAgICAgaWYgKGlzVXNlclR5cGluZygpKSByZXR1cm47XG5cbiAgICAgIGlmIChcbiAgICAgICAgZXZlbnQua2V5ID09PSBcInVcIiAmJlxuICAgICAgICAhZXZlbnQubWV0YUtleSAmJlxuICAgICAgICAhZXZlbnQuY3RybEtleSAmJlxuICAgICAgICAhZXZlbnQuYWx0S2V5ICYmXG4gICAgICAgICFldmVudC5zaGlmdEtleVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIC8vIE1hcmsgcmVhZC91bnJlYWRcbiAgICAgICAgdHJpZ2dlck5hdGl2ZVNob3J0Y3V0KHtcbiAgICAgICAgICBrZXk6IFwidVwiLFxuICAgICAgICAgIGNvZGU6IFwiS2V5VVwiLFxuICAgICAgICAgIGN0cmxLZXk6IHRydWUsXG4gICAgICAgICAgYWx0S2V5OiAhaXNNYWMsXG4gICAgICAgICAgc2hpZnRLZXk6IHRydWUsXG4gICAgICAgICAgbWV0YUtleTogaXNNYWMsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgdHJ1ZVxuICApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJrZXlkb3duXCIsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoaXNVc2VyVHlwaW5nKCkpIHJldHVybjtcblxuICAgICAgaWYgKFxuICAgICAgICBldmVudC5rZXkgPT09IFwiaFwiICYmXG4gICAgICAgICFldmVudC5tZXRhS2V5ICYmXG4gICAgICAgICFldmVudC5jdHJsS2V5ICYmXG4gICAgICAgICFldmVudC5hbHRLZXkgJiZcbiAgICAgICAgIWV2ZW50LnNoaWZ0S2V5XG4gICAgICApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHJlcXVlc3RTbm9vemVGb3JtKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB0cnVlXG4gICk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImtleWRvd25cIixcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChpc1VzZXJUeXBpbmcoKSkgcmV0dXJuO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50LmtleSA9PT0gXCJ2XCIgJiZcbiAgICAgICAgIWV2ZW50Lm1ldGFLZXkgJiZcbiAgICAgICAgIWV2ZW50LmN0cmxLZXkgJiZcbiAgICAgICAgIWV2ZW50LmFsdEtleSAmJlxuICAgICAgICAhZXZlbnQuc2hpZnRLZXlcbiAgICAgICkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmVxdWVzdE1vdmVUb0Zvcm0oKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRydWVcbiAgKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVNub296ZWRDaGF0c0NTUyhzbm9vemVkQ2hhdHMpIHtcbiAgbGV0IGNzcyA9IFwiXCI7XG5cbiAgaWYgKHNub296ZWRDaGF0cykge1xuICAgIHNub296ZWRDaGF0cy5mb3JFYWNoKChzbm9vemVkQ2hhdCkgPT4ge1xuICAgICAgY3NzICs9IGBcbiAgICAgIC54MTBsNnRxay54aDh5ZWozLngxZzQyZmN2OmhhcyhzcGFuW3RpdGxlKj1cIiR7c25vb3plZENoYXQuY2hhdFVzZXJuYW1lfVwiXSkgZGl2Ll9hazhsIGRpdi5fYWs4aiBkaXYuX2FrOGkgc3BhbjpudGgtY2hpbGQoMyk6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJ3NjaGVkdWxlJztcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBTeW1ib2xzIE91dGxpbmVkJztcbiAgICAgICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XG4gICAgICAgICAgXCJGSUxMXCIgMSxcbiAgICAgICAgICBcIndnaHRcIiA0MDAsXG4gICAgICAgICAgXCJHUkFEXCIgMCxcbiAgICAgICAgICBcIm9wc3pcIiAyNDtcbiAgICAgICAgY29sb3I6IHZhcigtLWljb24tbGlnaHRlcik7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICB9XG5cbiAgICAgIC54MTBsNnRxay54aDh5ZWozLngxZzQyZmN2OmhhcyhzcGFuW3RpdGxlKj1cIiR7c25vb3plZENoYXQuY2hhdFVzZXJuYW1lfVwiXSk6aG92ZXIgZGl2Ll9hazhsIGRpdi5fYWs4aiBkaXYuX2FrOGkgc3BhbjpudGgtY2hpbGQoMyk6OmFmdGVyLFxuICAgICAgLngxMGw2dHFrLnhoOHllajMueDFnNDJmY3Y6aGFzKHNwYW5bdGl0bGUqPVwiJHtzbm9vemVkQ2hhdC5jaGF0VXNlcm5hbWV9XCJdKTpoYXMoLl9hazcyLl9hazczLl9hazdwKSBkaXYuX2FrOGwgZGl2Ll9hazhqIGRpdi5fYWs4aSBzcGFuOm50aC1jaGlsZCgzKTo6YWZ0ZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRlcyB0aGUgcHNldWRvLWVsZW1lbnQgd2hlbiB0aGUgcGFyZW50IGlzIGhvdmVyZWQgb3IgaGFzIHNwZWNpZmllZCBjbGFzc2VzICovXG4gICAgICB9XG5cbiAgICAgIC54MTBsNnRxay54aDh5ZWozLngxZzQyZmN2OmhhcyhzcGFuW3RpdGxlKj1cIiR7c25vb3plZENoYXQuY2hhdFVzZXJuYW1lfVwiXSkgZGl2Ll9hazhsIGRpdi5fYWs4aiBkaXYuX2FrOGkgc3BhbjpudGgtY2hpbGQoMykgPiAucmVtaW5kZXJCdG4gPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XG4gICAgICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxuICAgICAgICAgIFwiRklMTFwiIDEsXG4gICAgICAgICAgXCJ3Z2h0XCIgNDAwLFxuICAgICAgICAgIFwiR1JBRFwiIDAsXG4gICAgICAgICAgXCJvcHN6XCIgMjQ7XG4gICAgICB9XG4gICAgYDtcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBzdHlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic25vb3plZENoYXRzQ2x1ZXNcIik7XG4gIGlmICghc3R5bGUpIHtcbiAgICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICBzdHlsZS5pZCA9IFwic25vb3plZENoYXRzQ2x1ZXNcIjtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHN0eWxlLmlubmVySFRNTCA9IGNzcztcbn1cbiIsImltcG9ydCB7IGdldEVsZW1lbnRCeVhwYXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IG5hdkJhckl0ZW0gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9uYXZCYXJJdGVtXCI7XG5pbXBvcnQgeyBjaGF0QWN0aW9uQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2hhdEFjdGlvbkJ1dHRvblwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVVuc25vb3plZCB9IGZyb20gXCIuL3Vuc25vb3plQ2hhdFwiO1xuaW1wb3J0IHsgc25vb3plRm9ybSB9IGZyb20gXCIuL3Nub296ZUZvcm1cIjtcbmltcG9ydCB7IGxvYWRTbm9vemVkQ2hhdHNGcm9tU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IHNub296ZWRDaGF0c0RyYXdlciB9IGZyb20gXCIuL3Nub296ZWRDaGF0c0RyYXdlclwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVTbm9vemVkQ2hhdHNDU1MgfSBmcm9tIFwiLi9jbHVlc1wiO1xuaW1wb3J0IHsgcmVxdWVzdFNub296ZUZvcm1MaXN0ZW5lciB9IGZyb20gXCIuLi8uLi93aGF0c2FwcFN0b3JlL3JlcXVlc3RTbm9vemVGb3JtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplU25vb3plZCgpIHtcbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgIGFjdGlvbjogXCJjaGVja0R1ZUFsYXJtc1wiLFxuICB9KTtcbiAgbG9hZFNub296ZWRDaGF0c0Zyb21TdG9yYWdlKChsb2FkZWRTbm9vemVkQ2hhdHMpID0+IHtcbiAgICBnZW5lcmF0ZVNub296ZWRDaGF0c0NTUyhsb2FkZWRTbm9vemVkQ2hhdHMpO1xuICB9KTtcblxuICAvLyBXYWl0IHVudGlsIFdoYXRzQXBwIGJ1aWxkcyB1cCB0aGUgaW50ZXJmYWNlXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGF0c2FwcEluaXRpYWxpemVkXCIsICgpID0+IHtcbiAgICBpbml0aWFsaXplVW5zbm9vemVkKCk7XG5cbiAgICAvLyBBZGQgdGhlIFNub296ZWQgaWNvbiBhdCBXaGF0c0FwcCBzaWRlbmF2IG5hdmlnYXRpb24uXG4gICAgY29uc3Qgc2lkZW5hdiA9IGdldEVsZW1lbnRCeVhwYXRoKFxuICAgICAgYC8vKltAaWQ9XCJhcHBcIl0vZGl2L2RpdlsyXS9oZWFkZXIvZGl2L2Rpdi9kaXYvZGl2L3NwYW4vZGl2L2RpdlsxXWBcbiAgICApO1xuXG4gICAgc2lkZW5hdi5pbnNlcnRDaGlsZEF0SW5kZXgoXG4gICAgICBuYXZCYXJJdGVtKFwic25vb3plZENoYXRzXCIsIFwiU25vb3plZFwiLCBcInNjaGVkdWxlXCIsICgpID0+XG4gICAgICAgIHNub296ZWRDaGF0c0RyYXdlcigpXG4gICAgICApLFxuICAgICAgMVxuICAgICk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhdE9uSG92ZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGNoYXQsIGNoYXRFbGVtZW50IH0gPSBldmVudC5kZXRhaWw7XG5cbiAgICAgIC8vIFNldHVwIGEgTXV0YXRpb25PYnNlcnZlciB0aGF0IGFkZHMgQ2hhdCBhY3Rpb24gYnV0dG9ucyB3aGlsZSBob3ZlcmluZy5cbiAgICAgIGNvbnN0IGNoYXRCdXR0b25zID0gY2hhdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCJbcm9sZT0nZ3JpZGNlbGwnXS5fYWs4aSA+IHNwYW46bnRoLWNoaWxkKDMpXCJcbiAgICAgICk7XG4gICAgICBpZiAoY2hhdEJ1dHRvbnMpIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdSZW1pbmRlckJ0biA9IGNoYXRCdXR0b25zLnF1ZXJ5U2VsZWN0b3IoXCIucmVtaW5kZXJCdG5cIik7XG4gICAgICAgIGNvbnN0IG5ld1JlbWluZGVyQnRuID0gY2hhdEFjdGlvbkJ1dHRvbihcbiAgICAgICAgICBcInNjaGVkdWxlXCIsXG4gICAgICAgICAgKCkgPT4gc25vb3plRm9ybShjaGF0KSxcbiAgICAgICAgICBcInJlbWluZGVyQnRuXCJcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdSZW1pbmRlckJ0bikge1xuICAgICAgICAgIGNoYXRCdXR0b25zLnJlcGxhY2VDaGlsZChuZXdSZW1pbmRlckJ0biwgZXhpc3RpbmdSZW1pbmRlckJ0bik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hhdEJ1dHRvbnMuaW5zZXJ0Q2hpbGRBdEluZGV4KG5ld1JlbWluZGVyQnRuLCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVxdWVzdFNub296ZUZvcm1MaXN0ZW5lcigpO1xuXG4gICAgLy8gTGlzdGVuIGZvciB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgaW5qZWN0ZWQgc2NyaXB0XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBldmVudC5kYXRhICYmXG4gICAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gXCJPUEVOX1NOT09aRV9GT1JNXCIgJiZcbiAgICAgICAgZXZlbnQuZGF0YS5jaGF0SWRcbiAgICAgICkge1xuICAgICAgICBjb25zdCBjaGF0SWQgPSBldmVudC5kYXRhLmNoYXRJZDtcbiAgICAgICAgY29uc3QgdXNlck5hbWUgPSBldmVudC5kYXRhLnVzZXJOYW1lO1xuICAgICAgICBzbm9vemVGb3JtKHsgY2hhdElkOiBjaGF0SWQsIGNoYXRVc2VybmFtZTogdXNlck5hbWUgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgcmVtaW5kZXJDaGF0SXRlbSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JlbWluZGVyQ2hhdEl0ZW1cIjtcbmltcG9ydCB7IGZvcm1hdFRpbWVzdGFtcCB9IGZyb20gXCIuLi8uLi91dGlscy9kb21IZWxwZXJzXCI7XG5pbXBvcnQgeyBhcmNoaXZlQ2hhdCB9IGZyb20gXCIuLi8uLi93aGF0c2FwcFN0b3JlL2FyY2hpdmVDaGF0XCI7XG5pbXBvcnQgeyBnZXRDaGF0RGV0YWlscyB9IGZyb20gXCIuLi8uLi93aGF0c2FwcFN0b3JlL2dldENoYXREZXRhaWxzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVNub296ZWRDaGF0c0NTUyB9IGZyb20gXCIuL2NsdWVzXCI7XG5pbXBvcnQgeyBsb2FkU25vb3plZENoYXRzRnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbi8vIEZ1bmN0aW9uIHRvIHNlbmQgdGhlIHNub296ZSByZXF1ZXN0IHRvIHRoZSBiYWNrZ3JvdW5kIHNjcmlwdFxuLy8gVGhlIGJhY2tncm91bmQgc2NyaXB0IGluIGluIGNoYXJnZSBvZiBzZXR0aW5nIHVwIHRoZSBjaHJvbWUgYWxhcm0gdGhhdCBmaXJlcyBldmVudHNcbi8vIHNvIGNvbnRlbnQtc2NyaXB0IGdldHMgbm90aWNlZCBhbmQgZG8gc3R1ZmYgdGhlblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RTbm9vemUoY2hhdCwgc25vb3plVGltZSwgc25vb3plQ29uZGl0aW9uKSB7XG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKFxuICAgIHtcbiAgICAgIGFjdGlvbjogXCJzbm9vemVDaGF0XCIsXG4gICAgICBjaGF0SWQ6IGNoYXQuY2hhdElkLFxuICAgICAgY2hhdFVzZXJuYW1lOiBjaGF0LmNoYXRVc2VybmFtZSxcbiAgICAgIHNub296ZVRpbWU6IHNub296ZVRpbWUsXG4gICAgICBzbm9vemVDb25kaXRpb246IHNub296ZUNvbmRpdGlvbixcbiAgICB9LFxuICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgYXJjaGl2ZUNoYXQoY2hhdC5jaGF0SWQpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB2aXN1YWwgY2x1ZSBvZiBhY3RpdmUgcmVtaW5kZXJcbiAgICAgICAgbG9hZFNub296ZWRDaGF0c0Zyb21TdG9yYWdlKChsb2FkZWRTbm9vemVkQ2hhdHMpID0+IHtcbiAgICAgICAgICBnZW5lcmF0ZVNub296ZWRDaGF0c0NTUyhsb2FkZWRTbm9vemVkQ2hhdHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzbm9vemVkQ2hhdHNEcmF3ZXJGb2N1c2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLmN1c3RvbU5hdkJhckl0ZW0uYWN0aXZlW2RhdGEtZHJhd2VyLWlkPVwic25vb3plZENoYXRzXCJdYFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChzbm9vemVkQ2hhdHNEcmF3ZXJGb2N1c2VkKSB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdSZW1pbmRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5yZW1pbmRlckNoYXRJdGVtW2RhdGEtY2hhdC1pZD1cIiR7Y2hhdC5jaGF0SWR9XCJdYFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAoZXhpc3RpbmdSZW1pbmRlckVsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIEFzc3VtaW5nIHJlbWluZGVyQ2hhdEl0ZW0gaXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gSFRNTCBzdHJpbmdcbiAgICAgICAgICAgIGNvbnN0IG5ld0VsZW1lbnRIVE1MID0gcmVtaW5kZXJDaGF0SXRlbShcbiAgICAgICAgICAgICAgY2hhdC5jaGF0SWQsXG4gICAgICAgICAgICAgIGNoYXQuY2hhdFVzZXJuYW1lLFxuICAgICAgICAgICAgICBgUmVtaW5kIG1lOiAke2Zvcm1hdFRpbWVzdGFtcChzbm9vemVUaW1lKX1gXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSB0ZW1wb3JhcnkgY29udGFpbmVyIHRvIHBhcnNlIHRoZSBIVE1MIHN0cmluZ1xuICAgICAgICAgICAgY29uc3QgdGVtcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0ZW1wQ29udGFpbmVyLmlubmVySFRNTCA9IG5ld0VsZW1lbnRIVE1MO1xuXG4gICAgICAgICAgICAvLyBSZXBsYWNlIHRoZSBleGlzdGluZyBlbGVtZW50IHdpdGggdGhlIG5ldyBvbmVcbiAgICAgICAgICAgIGV4aXN0aW5nUmVtaW5kZXJFbGVtZW50LnJlcGxhY2VXaXRoKFxuICAgICAgICAgICAgICB0ZW1wQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBnZXRDaGF0RGV0YWlscyhjaGF0LmNoYXRJZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNub296ZSBjaGF0LlwiKTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9kYWxcIjtcbmltcG9ydCB7IHJlcXVlc3RTbm9vemUgfSBmcm9tIFwiLi9zbm9vemVDaGF0XCI7XG5pbXBvcnQgeyBzbm9vemVkQ2hhdHMgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyByZXF1ZXN0VW5zbm9vemUgfSBmcm9tIFwiLi91bnNub296ZUNoYXRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNub296ZUZvcm0oY2hhdCkge1xuICAvLyBGaW5kIGV4aXN0aW5nIHJlbWluZGVyIGZvciB0aGUgY2hhdFxuICBjb25zdCBleGlzdGluZ1JlbWluZGVyID1cbiAgICBzbm9vemVkQ2hhdHMgJiZcbiAgICBzbm9vemVkQ2hhdHMuZmluZCgocmVtaW5kZXIpID0+IHJlbWluZGVyLmNoYXRJZCA9PT0gY2hhdC5jaGF0SWQpO1xuXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgbGV0IGluaXRpYWxDdXN0b21EYXRlID0gXCJcIjtcbiAgbGV0IGluaXRpYWxDdXN0b21UaW1lID0gXCJcIjtcbiAgbGV0IHNub296ZUNvbmRpdGlvbiA9IFwicmVnYXJkbGVzc1wiOyAvLyBEZWZhdWx0IGNvbmRpdGlvblxuXG4gIGlmIChleGlzdGluZ1JlbWluZGVyICYmIGV4aXN0aW5nUmVtaW5kZXIudW50aWwpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBOdW1iZXIoZXhpc3RpbmdSZW1pbmRlci51bnRpbCk7XG4gICAgY29uc3QgcmVtaW5kZXJEYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcblxuICAgIC8vIEV4dHJhY3QgbG9jYWwgZGF0ZSBhbmQgdGltZSBjb21wb25lbnRzXG4gICAgY29uc3QgbG9jYWxZZWFyID0gcmVtaW5kZXJEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbG9jYWxNb250aCA9IHJlbWluZGVyRGF0ZS5nZXRNb250aCgpO1xuICAgIGNvbnN0IGxvY2FsRGF5ID0gcmVtaW5kZXJEYXRlLmdldERhdGUoKTtcbiAgICBjb25zdCBsb2NhbEhvdXJzID0gcmVtaW5kZXJEYXRlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgbG9jYWxNaW51dGVzID0gcmVtaW5kZXJEYXRlLmdldE1pbnV0ZXMoKTtcblxuICAgIC8vIEZvcm1hdCBhcyBZWVlZLU1NLUREIGFuZCBISDpNTVxuICAgIGluaXRpYWxDdXN0b21EYXRlID0gYCR7bG9jYWxZZWFyfS0ke1N0cmluZyhsb2NhbE1vbnRoICsgMSkucGFkU3RhcnQoXG4gICAgICAyLFxuICAgICAgXCIwXCJcbiAgICApfS0ke1N0cmluZyhsb2NhbERheSkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gICAgaW5pdGlhbEN1c3RvbVRpbWUgPSBgJHtTdHJpbmcobG9jYWxIb3VycykucGFkU3RhcnQoMiwgXCIwXCIpfToke1N0cmluZyhcbiAgICAgIGxvY2FsTWludXRlc1xuICAgICkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG5cbiAgICBzbm9vemVDb25kaXRpb24gPSBleGlzdGluZ1JlbWluZGVyLnNub296ZUNvbmRpdGlvbjtcbiAgfVxuXG4gIGxldCBsYXRlclRvZGF5VGltZTtcbiAgbGV0IGhhc0xhdGVyVG9kYXlPcHRpb24gPSB0cnVlO1xuXG4gIC8vIERldGVybWluZSBcIkxhdGVyIHRvZGF5XCIgdGltZSwgcm91bmRpbmcgdG8gdGhlIG5leHQgaG91clxuICBpZiAobm93LmdldEhvdXJzKCkgPCAxOCkge1xuICAgIGxhdGVyVG9kYXlUaW1lID0gbmV3IERhdGUoKTtcbiAgICBsYXRlclRvZGF5VGltZS5zZXRIb3Vycyhub3cuZ2V0SG91cnMoKSArIDIsIDAsIDAsIDApOyAvLyBSb3VuZCB0byB0aGUgbmV4dCBob3VyXG4gIH0gZWxzZSB7XG4gICAgaGFzTGF0ZXJUb2RheU9wdGlvbiA9IGZhbHNlO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gZm9ybWF0IHRpbWUgYXMgXCI2OjAwIFBNXCJcbiAgZnVuY3Rpb24gZm9ybWF0VGltZShkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7IGhvdXI6IFwibnVtZXJpY1wiLCBtaW51dGU6IFwiMi1kaWdpdFwiIH0pO1xuICB9XG5cbiAgLy8gRnVuY3Rpb24gdG8gZm9ybWF0IHRvbW9ycm93J3MgZGF0ZSBhcyBcIlRIVSwgODowMCBBTVwiXG4gIGZ1bmN0aW9uIGdldEZvcm1hdHRlZFRvbW9ycm93KCkge1xuICAgIGNvbnN0IGRheXMgPSBbXCJTVU5cIiwgXCJNT05cIiwgXCJUVUVcIiwgXCJXRURcIiwgXCJUSFVcIiwgXCJGUklcIiwgXCJTQVRcIl07XG4gICAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZShcbiAgICAgIG5vdy5nZXRGdWxsWWVhcigpLFxuICAgICAgbm93LmdldE1vbnRoKCksXG4gICAgICBub3cuZ2V0RGF0ZSgpICsgMSxcbiAgICAgIDgsXG4gICAgICAwLFxuICAgICAgMFxuICAgICk7XG4gICAgcmV0dXJuIGAke2RheXNbdG9tb3Jyb3cuZ2V0RGF5KCldfSwgODowMCBBTWA7XG4gIH1cblxuICBjb25zdCBsYXRlclRvZGF5T3B0aW9uSFRNTCA9IGxhdGVyVG9kYXlUaW1lXG4gICAgPyBgXG4gICAgPGxhYmVsIGNsYXNzPVwib3B0aW9uXCI+XG4gICAgICA8c3BhbiBzdHlsZT1cImZsZXg6IDE7XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic25vb3plT3B0aW9uXCIgdmFsdWU9XCJsYXRlclRvZGF5XCI+XG4gICAgICAgIExhdGVyIHRvZGF5XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3Bhbj5cbiAgICAgICAgJHtmb3JtYXRUaW1lKGxhdGVyVG9kYXlUaW1lKX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2xhYmVsPlxuICBgXG4gICAgOiBcIlwiO1xuXG4gIGNvbnN0IHNub296ZUZvcm1Db250ZW50ID0gYFxuICAgIDxmb3JtPlxuICAgICAgPGRpdiBjbGFzcz1cIngxMmxxdXA5IHgxbzFreDA4XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1tZCB4OWY2MTkgeDFwNW9xOGpcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cIm1vZGFsLXRpdGxlIHgxdzdzZGpxIHgxZmN0eTB1XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPlxuICAgICAgICAgICAgICAgIHNjaGVkdWxlXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgUmVtaW5kIG1lXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHkgeGR0NXl0ZiB4dWJudXlxIHh3MmNzeGMgeDFvZGp3MGYgeG82d20zNiB4MWllZ2thNSB4YzUzMHUwIHg4eng0cXYgeDFnY213bHkgeDE3c3k2eXUgeHdzYWtqdyB4MXZ6MXNzaSB4eGJiMXJxIHh3eGM0MWtcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbm9vemUtb3B0aW9uc1wiPlxuICAgICAgICAgICAgICAke2xhdGVyVG9kYXlPcHRpb25IVE1MfVxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJvcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImZsZXg6IDE7XCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNub296ZU9wdGlvblwiIHZhbHVlPVwidG9tb3Jyb3dNb3JuaW5nXCI+XG4gICAgICAgICAgICAgICAgICBUb21vcnJvd1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICR7Z2V0Rm9ybWF0dGVkVG9tb3Jyb3coKX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZmxleDogMTtcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic25vb3plT3B0aW9uXCIgdmFsdWU9XCJjdXN0b21cIiBpZD1cImN1c3RvbVJhZGlvXCIgJHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbEN1c3RvbURhdGUgPyBcImNoZWNrZWRcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICBDdXN0b21cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJjdXN0b21EYXRlXCIgaWQ9XCJjdXN0b21EYXRlXCIgdmFsdWU9XCIke2luaXRpYWxDdXN0b21EYXRlfVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0aW1lXCIgbmFtZT1cImN1c3RvbVRpbWVcIiBpZD1cImN1c3RvbVRpbWVcIiB2YWx1ZT1cIiR7aW5pdGlhbEN1c3RvbVRpbWV9XCI+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwieDc4enVtNSB4OGhobDV0IHhwNDA1NHIgeHV4dzFmdCB4MTIzajNjdyB4MWd0ZnJrMSB4MTU2Z28xNyB4MXNxazhnZVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ4MWM0dno0ZiB4czgzbTBrIHhkbDcyajkgeDFnNzdzYzcgeDc4enVtNSB4b3pxaXczIHgxb2EzcW9oIHgxMmZrNHA4IHhldXVnbGkgeDJsd24xaiB4MW5odmN3MSB4MXEwZzNucCB4dWszMDc3IHg0MGhoM2VcIiBzdHlsZT1cImZsZXg6IDE7XCI+XG4gICAgICAgIDxzZWxlY3QgY2xhc3M9XCJ4MWM0dno0ZiB4czgzbTBrIHhkbDcyajkgeDFnNzdzYzcgc25vb3plQ29uZGl0aW9uU2VsZWN0XCIgbmFtZT1cInNub296ZUNvbmRpdGlvblwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyZWdhcmRsZXNzXCIgJHtcbiAgICAgICAgICAgIHNub296ZUNvbmRpdGlvbiA9PT0gXCJyZWdhcmRsZXNzXCIgPyBcInNlbGVjdGVkXCIgOiBcIlwiXG4gICAgICAgICAgfT5SZWdhcmRsZXNzPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImlmTm9SZXBseVwiICR7XG4gICAgICAgICAgICBzbm9vemVDb25kaXRpb24gPT09IFwiaWZOb1JlcGx5XCIgPyBcInNlbGVjdGVkXCIgOiBcIlwiXG4gICAgICAgICAgfT5JZiBubyByZXBseTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cIngxM2E2YnZsIHgxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeGV1dWdsaSB4Mmx3bjFqIHgxbmh2Y3cxIHgxcTBnM25wIHh1azMwNzcgeDQwaGgzZVwiXG4gICAgICAgID5cbiAgICAgICAgICAke1xuICAgICAgICAgICAgZXhpc3RpbmdSZW1pbmRlclxuICAgICAgICAgICAgICA/IGBcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkYXRhLWFjdGlvbj1cInJlbW92ZVwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzPVwieDFzcjg4NTMgeDg4OWtubyB4MWE4bHNqYyB4MW4yb25yNiB4azUweXNuIHgxZjZrbnRuIHh5ZXNuNW0geDF6MTFubzUgeGp5NW0xZyB4MW1ud2JwNiB4NHBiNXY2IHgxNzh4dDh6IHhtODF2czQgeHNvMDMxbCB4eTgwY2x2IHgxM2Z1djIwIHh1M2o1YjMgeDFxMHE4bTUgeDI2dTdxaSB4MXY4cDkzZiB4b2diMDBpIHgxNnN0cXJqIHgxZnRyM2ttIHgxaGw4aWtyIHhmYWdnaHcgeDlkeXIxOSB4OWxjdm1uIHhjamw1bmEgeDFrM3gzZGIgeHV4dzFmdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cIngxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeGV1dWdsaSB4Mmx3bjFqIHhsNTZqN2sgeDFxMGczbnAgeDZzMGRuNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cIngxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeDNwbmJrOCB4ZmV4MDZmIHhldXVnbGkgeDJsd24xaiB4bDU2ajdrIHgxcTBnM25wIHg2czBkbjRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZmxleC1ncm93OiAxXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFJlbW92ZVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPiBgXG4gICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkYXRhLWFjdGlvbj1cInN1Ym1pdFwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzPVwieDg4OWtubyB4MWE4bHNqYyB4YmJ4bjFuIHh4YnI2cGwgeDFuMm9ucjYgeDFyZzVvaHUgeGs1MHlzbiB4MWY2a250biB4eWVzbjVtIHgxejExbm81IHhqeTVtMWcgeDFtbndicDYgeDRwYjV2NiB4MTc4eHQ4eiB4bTgxdnM0IHhzbzAzMWwgeHk4MGNsdiB4MTNmdXYyMCB4dTNqNWIzIHgxcTBxOG01IHgyNnU3cWkgeDF2OHA5M2YgeG9nYjAwaSB4MTZzdHFyaiB4MWZ0cjNrbSB4MWhsOGlrciB4ZmFnZ2h3IHg5ZHlyMTkgeDlsY3ZtbiB4YnRjZThwIHgxNHYwc21wIHhvOHVmc28geGNqbDVuYSB4MWszeDNkYiB4dXh3MWZ0IHh2NTJhemlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJ4MWM0dno0ZiB4czgzbTBrIHhkbDcyajkgeDFnNzdzYzcgeDc4enVtNSB4b3pxaXczIHgxb2EzcW9oIHgxMmZrNHA4IHhldXVnbGkgeDJsd24xaiB4bDU2ajdrIHgxcTBnM25wIHg2czBkbjRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ4MWM0dno0ZiB4czgzbTBrIHhkbDcyajkgeDFnNzdzYzcgeDc4enVtNSB4b3pxaXczIHgxb2EzcW9oIHgxMmZrNHA4IHgzcG5iazggeGZleDA2ZiB4ZXV1Z2xpIHgybHduMWogeGw1Nmo3ayB4MXEwZzNucCB4NnMwZG40XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImZsZXgtZ3JvdzogMVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBPS1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgYDtcblxuICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCh7XG4gICAgbW9kYWxDb250ZW50OiBzbm9vemVGb3JtQ29udGVudCxcbiAgICBmb3JtSGFuZGxlcjogYXN5bmMgKGZvcm1EYXRhKSA9PiB7XG4gICAgICBjb25zdCBhY3Rpb24gPSBmb3JtRGF0YS5nZXQoXCJmb3JtQWN0aW9uXCIpO1xuXG4gICAgICBpZiAoYWN0aW9uID09IFwic3VibWl0XCIpIHtcbiAgICAgICAgY29uc3Qgc25vb3plT3B0aW9uID0gZm9ybURhdGEuZ2V0KFwic25vb3plT3B0aW9uXCIpO1xuICAgICAgICBzbm9vemVDb25kaXRpb24gPSBmb3JtRGF0YS5nZXQoXCJzbm9vemVDb25kaXRpb25cIik7XG4gICAgICAgIGxldCBzbm9vemVUaW1lO1xuXG4gICAgICAgIGlmIChzbm9vemVPcHRpb24gPT09IFwibGF0ZXJUb2RheVwiICYmIGhhc0xhdGVyVG9kYXlPcHRpb24pIHtcbiAgICAgICAgICBzbm9vemVUaW1lID0gbGF0ZXJUb2RheVRpbWUuZ2V0VGltZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHNub296ZU9wdGlvbiA9PT0gXCJ0b21vcnJvd01vcm5pbmdcIikge1xuICAgICAgICAgIGNvbnN0IHRvbW9ycm93TW9ybmluZyA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgbm93LmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICBub3cuZ2V0TW9udGgoKSxcbiAgICAgICAgICAgIG5vdy5nZXREYXRlKCkgKyAxLFxuICAgICAgICAgICAgOCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICk7XG4gICAgICAgICAgc25vb3plVGltZSA9IHRvbW9ycm93TW9ybmluZy5nZXRUaW1lKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc25vb3plT3B0aW9uID09PSBcImN1c3RvbVwiKSB7XG4gICAgICAgICAgY29uc3QgY3VzdG9tRGF0ZSA9IGZvcm1EYXRhLmdldChcImN1c3RvbURhdGVcIik7XG4gICAgICAgICAgY29uc3QgY3VzdG9tVGltZSA9IGZvcm1EYXRhLmdldChcImN1c3RvbVRpbWVcIik7XG4gICAgICAgICAgaWYgKGN1c3RvbURhdGUgJiYgY3VzdG9tVGltZSkge1xuICAgICAgICAgICAgc25vb3plVGltZSA9IG5ldyBEYXRlKGAke2N1c3RvbURhdGV9VCR7Y3VzdG9tVGltZX1gKS5nZXRUaW1lKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIHByb3ZpZGUgYm90aCBkYXRlIGFuZCB0aW1lIGZvciBjdXN0b20gc25vb3plLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJJbnZhbGlkIHNlbGVjdGlvbi4gU25vb3plIGNhbmNlbGVkLlwiKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdmFsaWRhdGlvbiB0byBjaGVjayBpZiBzbm9vemVUaW1lIGlzIGluIHRoZSBwYXN0XG4gICAgICAgIGlmIChzbm9vemVUaW1lIDw9IERhdGUubm93KCkpIHtcbiAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgIFwiQ2Fubm90IHNldCBhIHJlbWluZGVyIGluIHRoZSBwYXN0LiBQbGVhc2UgY2hvb3NlIGEgZnV0dXJlIHRpbWUuXCJcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByb2NlZWQgdG8gcmVxdWVzdCBzbm9vemUgd2l0aCB0aGUgY2hvc2VuIHRpbWVzdGFtcFxuICAgICAgICByZXF1ZXN0U25vb3plKGNoYXQsIHNub296ZVRpbWUsIHNub296ZUNvbmRpdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PSBcInJlbW92ZVwiKSB7XG4gICAgICAgIHJlcXVlc3RVbnNub296ZShjaGF0LmNoYXRJZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlOyAvLyBJbmRpY2F0ZXMgc3VjY2Vzc2Z1bCBoYW5kbGluZ1xuICAgIH0sXG4gIH0pO1xuXG4gIG1vZGFsLm9wZW5Nb2RhbCgpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VzdG9tRGF0ZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1c3RvbVJhZGlvXCIpLmNoZWNrZWQgPSB0cnVlO1xuICB9KTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1c3RvbVRpbWVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXN0b21SYWRpb1wiKS5jaGVja2VkID0gdHJ1ZTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBmb3JtYXRUaW1lc3RhbXAgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuaW1wb3J0IHsgb3BlbkRyYXdlckxlZnQgfSBmcm9tIFwiLi4vLi4vd2hhdHNhcHBTdG9yZS9vcGVuRHJhd2VyTGVmdFwiO1xuaW1wb3J0IHsgbG9hZFNub296ZWRDaGF0c0Zyb21TdG9yYWdlLCBzbm9vemVkQ2hhdHMgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBnZXRDaGF0RGV0YWlscyB9IGZyb20gXCIuLi8uLi93aGF0c2FwcFN0b3JlL2dldENoYXREZXRhaWxzXCI7XG5pbXBvcnQgeyBkcmF3ZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9kcmF3ZXJcIjtcbmltcG9ydCB7IHJlbWluZGVyQ2hhdEl0ZW0gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZW1pbmRlckNoYXRJdGVtXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVNub296ZWRDaGF0c0NTUyB9IGZyb20gXCIuL2NsdWVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzbm9vemVkQ2hhdHNEcmF3ZXIoKSB7XG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICBhY3Rpb246IFwiY2hlY2tEdWVBbGFybXNcIixcbiAgfSk7XG4gIGxvYWRTbm9vemVkQ2hhdHNGcm9tU3RvcmFnZSgobG9hZGVkU25vb3plZENoYXRzKSA9PiB7XG4gICAgZ2VuZXJhdGVTbm9vemVkQ2hhdHNDU1MobG9hZGVkU25vb3plZENoYXRzKTtcbiAgfSk7XG5cbiAgY29uc3QgY2hhdEVsZW1lbnRzID0gc25vb3plZENoYXRzXG4gICAgPyBzbm9vemVkQ2hhdHNcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEudW50aWwgLSBiLnVudGlsKVxuICAgICAgICAubWFwKChjaGF0KSA9PlxuICAgICAgICAgIHJlbWluZGVyQ2hhdEl0ZW0oXG4gICAgICAgICAgICBjaGF0LmNoYXRJZCxcbiAgICAgICAgICAgIGNoYXQuY2hhdFVzZXJuYW1lLFxuICAgICAgICAgICAgYFJlbWluZCBtZTogJHtmb3JtYXRUaW1lc3RhbXAoY2hhdC51bnRpbCl9YFxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAuam9pbihcIlwiKVxuICAgIDogXCJcIjtcblxuICBvcGVuRHJhd2VyTGVmdChkcmF3ZXIoXCJSZW1pbmRlcnNcIiwgY2hhdEVsZW1lbnRzKSwgXCJzbm9vemVkQ2hhdHNcIik7XG5cbiAgLy8gVGhpcyBtYWtlIGEgcmVxdWVzdCB0byBXaGF0c0FwcCB0aHJvdWdoIGluamVjdGVkIHNjcmlwdHNcbiAgLy8gYXNrcyBmb3IgY2hhdCBkZXRhaWxzIGFuZCBwcmludHMgdG8gdGhlIHVubG9hZGVkIGNoYXQgZWxlbWVudC5cbiAgaWYgKHNub296ZWRDaGF0cykge1xuICAgIHNub296ZWRDaGF0cy5mb3JFYWNoKChjaGF0KSA9PiBnZXRDaGF0RGV0YWlscyhjaGF0LmNoYXRJZCkpO1xuICB9XG59XG4iLCJleHBvcnQgbGV0IHNub296ZWRDaGF0cyA9IFtdO1xuZXhwb3J0IGZ1bmN0aW9uIHNldFNub296ZWRDaGF0cyh2YWwpIHtcbiAgc25vb3plZENoYXRzID0gdmFsO1xufVxuXG4vLyBTYXZlIHNub296ZWRDaGF0cyB0byBzdG9yYWdlXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVNub296ZWRDaGF0c1RvU3RvcmFnZShzbm9vemVkQ2hhdHMpIHtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc25vb3plZENoYXRzOiBzbm9vemVkQ2hhdHMgfSk7XG59XG5cbi8vIExvYWQgc25vb3plZENoYXRzIGZyb20gc3RvcmFnZVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTbm9vemVkQ2hhdHNGcm9tU3RvcmFnZShjYWxsYmFjaykge1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1wic25vb3plZENoYXRzXCJdLCAocmVzdWx0KSA9PiB7XG4gICAgY29uc3QgbG9hZGVkU25vb3plZENoYXRzID0gcmVzdWx0LnNub296ZWRDaGF0cztcbiAgICBzZXRTbm9vemVkQ2hhdHMobG9hZGVkU25vb3plZENoYXRzKTtcbiAgICBjYWxsYmFjayhsb2FkZWRTbm9vemVkQ2hhdHMpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0U25vb3plZENoYXRzRnJvbVN0b3JhZ2UoKSB7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNub296ZWRDaGF0czogW10gfSk7XG59XG4iLCJpbXBvcnQgeyB1bmFyY2hpdmVDaGF0IH0gZnJvbSBcIi4uLy4uL3doYXRzYXBwU3RvcmUvdW5hcmNoaXZlQ2hhdFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVTbm9vemVkQ2hhdHNDU1MgfSBmcm9tIFwiLi9jbHVlc1wiO1xuaW1wb3J0IHsgbG9hZFNub296ZWRDaGF0c0Zyb21TdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG4vLyBGdW5jdGlvbiB0byBjaGVjayBhbmQgaGFuZGxlIGR1ZSBzbm9vemVkIGNoYXRzXG5mdW5jdGlvbiBjaGVja0R1ZVNub296ZWRDaGF0cygpIHtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwic25vb3plZENoYXRzXCIsIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBjb25zdCBub3cgPSBOdW1iZXIoRGF0ZS5ub3coKSk7IC8vIEdldCB0aGUgY3VycmVudCB0aW1lIGluIG1pbGxpc2Vjb25kc1xuICAgIGNvbnN0IHNub296ZWRDaGF0cyA9IHJlc3VsdC5zbm9vemVkQ2hhdHMgfHwgW107XG5cbiAgICBzbm9vemVkQ2hhdHMuZm9yRWFjaChmdW5jdGlvbiAoY2hhdCkge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGNoYXQncyBzbm9vemUgdGltZSBoYXMgcGFzc2VkXG4gICAgICBpZiAoY2hhdC51bnRpbCA8PSBub3cpIHtcbiAgICAgICAgcmVxdWVzdFVuc25vb3plKGNoYXQuY2hhdElkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplVW5zbm9vemVkKCkge1xuICAvLyBDaGVjayBhbmQgaGFuZGxlIHNub296ZWQgY2hhdHMgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIGNoZWNrRHVlU25vb3plZENoYXRzKCk7XG5cbiAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gXCJjaGF0VW5zbm9vemVkXCIpIHtcbiAgICAgIGNvbnN0IGNoYXRJZCA9IG1lc3NhZ2UuY2hhdElkO1xuICAgICAgdW5hcmNoaXZlQ2hhdChjaGF0SWQpO1xuXG4gICAgICAvLyBSZW1vdmUgdmlzdWFsIGNsdWUgb2YgYWN0aXZlIHJlbWluZGVyXG4gICAgICBsb2FkU25vb3plZENoYXRzRnJvbVN0b3JhZ2UoKGxvYWRlZFNub296ZWRDaGF0cykgPT4ge1xuICAgICAgICBnZW5lcmF0ZVNub296ZWRDaGF0c0NTUyhsb2FkZWRTbm9vemVkQ2hhdHMpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHNub296ZWRDaGF0c0RyYXdlckZvY3VzZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLmN1c3RvbU5hdkJhckl0ZW0uYWN0aXZlW2RhdGEtZHJhd2VyLWlkPVwic25vb3plZENoYXRzXCJdYFxuICAgICAgKTtcblxuICAgICAgaWYgKHNub296ZWRDaGF0c0RyYXdlckZvY3VzZWQpIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdSZW1pbmRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAucmVtaW5kZXJDaGF0SXRlbVtkYXRhLWNoYXQtaWQ9XCIke2NoYXRJZH1cIl1gXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nUmVtaW5kZXJFbGVtZW50KSB7XG4gICAgICAgICAgZXhpc3RpbmdSZW1pbmRlckVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNldCB1cCBsaXN0ZW5lciBmb3IgVU5SRUFEX0NPVU5UX0NIQU5HRVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKFxuICAgICAgZXZlbnQuc291cmNlID09PSB3aW5kb3cgJiZcbiAgICAgIGV2ZW50LmRhdGEgJiZcbiAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gXCJVTlJFQURfQ09VTlRfQ0hBTkdFXCJcbiAgICApIHtcbiAgICAgIGNvbnN0IHsgY2hhdElkLCB1bnJlYWRDb3VudCB9ID0gZXZlbnQuZGF0YTtcblxuICAgICAgaWYgKHVucmVhZENvdW50KSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcInNub296ZWRDaGF0c1wiLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgY29uc3Qgc25vb3plZENoYXRzID0gcmVzdWx0LnNub296ZWRDaGF0cyB8fCBbXTtcbiAgICAgICAgICBpZiAoc25vb3plZENoYXRzKSB7XG4gICAgICAgICAgICBjb25zdCBjaGF0ID0gc25vb3plZENoYXRzLmZpbmQoXG4gICAgICAgICAgICAgIChyZW1pbmRlcikgPT5cbiAgICAgICAgICAgICAgICByZW1pbmRlci5jaGF0SWQgPT09IGNoYXRJZCAmJlxuICAgICAgICAgICAgICAgIHJlbWluZGVyLnNub296ZUNvbmRpdGlvbiA9PT0gXCJpZk5vUmVwbHlcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChjaGF0KSB7XG4gICAgICAgICAgICAgIHJlcXVlc3RVbnNub296ZShjaGF0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RVbnNub296ZShjaGF0SWQpIHtcbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBhY3Rpb246IFwidW5zbm9vemVDaGF0XCIsIGNoYXRJZDogY2hhdElkIH0pO1xufVxuIiwiaW1wb3J0IHsgZ2V0RWxlbWVudEJ5WHBhdGgsIGdldFVuaXF1ZVNlbGVjdG9yIH0gZnJvbSBcIi4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IGdldENoYXRGaWJlckZyb21ET00gfSBmcm9tIFwiLi4vd2hhdHNhcHBTdG9yZS9nZXRDaGF0RmliZXJGcm9tRE9NXCI7XG5cbmZ1bmN0aW9uIGNoYXRPbkhvdmVyRXZlbnQoY2hhdCwgY2hhdEVsZW1lbnQpIHtcbiAgLy8gRGlzcGF0Y2ggYSBjdXN0b20gZXZlbnQgdG8gc2lnbmFsIHRoYXQgYSBjaGF0IGlzIGJlaW5nIGhvdmVyZWRcbiAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJjaGF0T25Ib3ZlclwiLCB7XG4gICAgZGV0YWlsOiB7IGNoYXQ6IGNoYXQsIGNoYXRFbGVtZW50OiBjaGF0RWxlbWVudCB9LFxuICB9KTtcbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNoYXRIb3ZlcihldmVudCkge1xuICBjb25zdCBjaGF0RWxlbWVudCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFxuICAgIFwiLngxMGw2dHFrLnhoOHllajMueDFnNDJmY3Y6bm90KC5yZW1pbmRlckNoYXRJdGVtKVwiXG4gICk7XG5cbiAgaWYgKGNoYXRFbGVtZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBnZXRVbmlxdWVTZWxlY3RvcihjaGF0RWxlbWVudCk7XG4gICAgZ2V0Q2hhdEZpYmVyRnJvbURPTShzZWxlY3Rvcik7XG4gIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQuZGF0YS50eXBlID09PSBcIkNIQVRfRklCRVJfUkVTVUxUXCIpIHtcbiAgICBjb25zdCBjaGF0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZXZlbnQuZGF0YS5zZWxlY3Rvcik7XG4gICAgY29uc3QgY2hhdCA9IGV2ZW50LmRhdGEuY2hhdDtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBkYXRhIGF0dHJpYnV0ZXMgYXJlIGFscmVhZHkgc2V0IGFuZCBtYXRjaCB0aGUgY3VycmVudCBjaGF0XG4gICAgaWYgKFxuICAgICAgY2hhdEVsZW1lbnQgJiZcbiAgICAgIChjaGF0RWxlbWVudC5kYXRhc2V0LmNoYXRJZCAhPT0gY2hhdC5jaGF0SWQgfHxcbiAgICAgICAgY2hhdEVsZW1lbnQuZGF0YXNldC5jaGF0VXNlcm5hbWUgIT09IGNoYXQuY2hhdFVzZXJuYW1lIHx8XG4gICAgICAgIGNoYXRFbGVtZW50LmRhdGFzZXQuY2hhdFBob25lICE9PSBjaGF0LmNoYXRQaG9uZSlcbiAgICApIHtcbiAgICAgIGNoYXRFbGVtZW50LmRhdGFzZXQuY2hhdElkID0gY2hhdC5jaGF0SWQ7XG4gICAgICBjaGF0RWxlbWVudC5kYXRhc2V0LmNoYXRVc2VybmFtZSA9IGNoYXQuY2hhdFVzZXJuYW1lO1xuICAgICAgY2hhdEVsZW1lbnQuZGF0YXNldC5jaGF0UGhvbmUgPSBjaGF0LmNoYXRQaG9uZTtcblxuICAgICAgY2hhdE9uSG92ZXJFdmVudChjaGF0LCBjaGF0RWxlbWVudCk7XG4gICAgfVxuICB9XG59KTtcblxuZnVuY3Rpb24gaGFuZGxlQWN0aXZlQ2hhdENoYW5nZShjaGF0RWxlbWVudCkge1xuICBpZiAoY2hhdEVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGdldFVuaXF1ZVNlbGVjdG9yKGNoYXRFbGVtZW50KTtcbiAgICBnZXRDaGF0RmliZXJGcm9tRE9NKHNlbGVjdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhdE9uSG92ZXJPYnNlcnZlcigpIHtcbiAgY29uc3QgY2hhdHNDb250YWluZXIgPSBnZXRFbGVtZW50QnlYcGF0aCgnLy8qW0BpZD1cImFwcFwiXScpO1xuXG4gIC8vIEFkZCBtb3VzZWVudGVyIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBjaGF0cyBjb250YWluZXJcbiAgY2hhdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgaGFuZGxlQ2hhdEhvdmVyLCB0cnVlKTtcblxuICAvLyBPYnNlcnZlIGNoYW5nZXMgdG8gaWRlbnRpZnkgYWN0aXZlIGNoYXRzXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgIG11dGF0aW9ucy5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBtdXRhdGlvbi50eXBlID09PSBcImF0dHJpYnV0ZXNcIiAmJlxuICAgICAgICBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSBcImNsYXNzXCJcbiAgICAgICkge1xuICAgICAgICBjb25zdCBhY3RpdmVDaGF0ID0gY2hhdHNDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBcIi54MTBsNnRxay54aDh5ZWozLngxZzQyZmN2OmhhcyguX2FrNzIuX2FrNzMuX2FrN3ApOm5vdCgucmVtaW5kZXJDaGF0SXRlbSlcIlxuICAgICAgICApO1xuICAgICAgICBpZiAoYWN0aXZlQ2hhdCkge1xuICAgICAgICAgIGhhbmRsZUFjdGl2ZUNoYXRDaGFuZ2UoYWN0aXZlQ2hhdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShjaGF0c0NvbnRhaW5lciwge1xuICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZSxcbiAgICBhdHRyaWJ1dGVGaWx0ZXI6IFtcImNsYXNzXCJdLFxuICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50QnlYcGF0aChwYXRoKSB7XG4gIHJldHVybiBkb2N1bWVudC5ldmFsdWF0ZShcbiAgICBwYXRoLFxuICAgIGRvY3VtZW50LFxuICAgIG51bGwsXG4gICAgWFBhdGhSZXN1bHQuRklSU1RfT1JERVJFRF9OT0RFX1RZUEUsXG4gICAgbnVsbFxuICApLnNpbmdsZU5vZGVWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRDb29yZGluYXRlcyhlbGVtZW50KSB7XG4gIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCB4ID0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCAvIDI7XG4gIGNvbnN0IHkgPSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMjtcbiAgcmV0dXJuIHsgeCwgeSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNVc2VyVHlwaW5nKCkge1xuICBjb25zdCBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBhY3RpdmVFbGVtZW50LnRhZ05hbWUgPT09IFwiSU5QVVRcIiB8fFxuICAgIGFjdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gXCJURVhUQVJFQVwiIHx8XG4gICAgYWN0aXZlRWxlbWVudC5pc0NvbnRlbnRFZGl0YWJsZVxuICApO1xufVxuXG4vLyBGdW5jdGlvbiB0byBoaWRlIGFsbCBjaGlsZHJlbiBvZiBhIGdpdmVuIGVsZW1lbnRcbmV4cG9ydCBmdW5jdGlvbiBoaWRlQWxsQ2hpbGRyZW4oZWxlbWVudCkge1xuICAvLyBMb29wIHRocm91Z2ggZWFjaCBjaGlsZCBvZiB0aGUgZWxlbWVudFxuICBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgY2hpbGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcbn1cblxuLy8gVXRpbGl0eSBmdW5jdGlvbiB0byByZW1vdmUgYW4gZWxlbWVudCBpZiBpdCBleGlzdHNcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJZkV4aXN0cyh4cGF0aCkge1xuICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudEJ5WHBhdGgoeHBhdGgpO1xuICBpZiAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cbn1cblxuLy8gRnVuY3Rpb24gdG8gb2JzZXJ2ZSB0aGUgRE9NIGFuZCBwZXJmb3JtIGFuIGFjdGlvbiBiYXNlZCBvbiBYUGF0aCB3aGVuIGl0IGFwcGVhcnNcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlQW5kQWN0KHhwYXRoLCBjYWxsYmFjaykge1xuICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICBtdXRhdGlvbnMuZm9yRWFjaCgoKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudEJ5WHBhdGgoeHBhdGgpO1xuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIFN0YXJ0IG9ic2VydmluZyB0aGUgZW50aXJlIGRvY3VtZW50IGZvciBjaGFuZ2VzXG4gIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwge1xuICAgIGNoaWxkTGlzdDogdHJ1ZSwgLy8gT2JzZXJ2ZSBkaXJlY3QgY2hpbGRyZW5cbiAgICBzdWJ0cmVlOiB0cnVlLCAvLyBPYnNlcnZlIGFsbCBkZXNjZW5kYW50c1xuICB9KTtcblxuICAvLyBPcHRpb25hbGx5LCBkaXNjb25uZWN0IG9ic2VydmVyIG9uY2UgdGhlIGVsZW1lbnQgaXMgcmVtb3ZlZCAoZm9yIHBlcmZvcm1hbmNlKVxuICAvLyBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RTY3JpcHQoZmlsZSwgY2FsbGJhY2spIHtcbiAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgc2NyaXB0LnNyYyA9IGNocm9tZS5ydW50aW1lLmdldFVSTChmaWxlKTtcbiAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH07XG4gIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRpbWVzdGFtcCh0aW1lc3RhbXApIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XG4gIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBmb3JtYXRPcHRpb25zID0ge1xuICAgIG1vbnRoOiBcInNob3J0XCIsIC8vIFwiQXVnXCJcbiAgICBkYXk6IFwibnVtZXJpY1wiLCAvLyBcIjMwXCJcbiAgICBob3VyOiBcIm51bWVyaWNcIiwgLy8gXCIxMFwiXG4gICAgbWludXRlOiBcIjItZGlnaXRcIiwgLy8gXCIwMFwiXG4gICAgaG91cjEyOiB0cnVlLCAvLyBmb3IgQU0vUE0gZm9ybWF0XG4gIH07XG5cbiAgLy8gQWRkIHllYXIgb25seSBpZiBpdCdzIGRpZmZlcmVudCBmcm9tIHRoZSBjdXJyZW50IHllYXJcbiAgaWYgKGRhdGUuZ2V0RnVsbFllYXIoKSAhPT0gY3VycmVudFllYXIpIHtcbiAgICBmb3JtYXRPcHRpb25zLnllYXIgPSBcIm51bWVyaWNcIjsgLy8gXCIyMDI0XCJcbiAgfVxuXG4gIHJldHVybiBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgZm9ybWF0T3B0aW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbmlxdWVTZWxlY3RvcihlbGVtZW50KSB7XG4gIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSkgcmV0dXJuO1xuICBjb25zdCBwYXRoID0gW107XG4gIHdoaWxlIChlbGVtZW50Lm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgIGxldCBzZWxlY3RvciA9IGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoZWxlbWVudC5pZCkge1xuICAgICAgc2VsZWN0b3IgKz0gXCIjXCIgKyBlbGVtZW50LmlkO1xuICAgICAgcGF0aC51bnNoaWZ0KHNlbGVjdG9yKTtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc2libGluZyA9IGVsZW1lbnQ7XG4gICAgICBsZXQgbnRoID0gMTtcbiAgICAgIHdoaWxlICgoc2libGluZyA9IHNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZykpIHtcbiAgICAgICAgaWYgKHNpYmxpbmcubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gc2VsZWN0b3IpIG50aCsrO1xuICAgICAgfVxuICAgICAgaWYgKG50aCAhPT0gMSkgc2VsZWN0b3IgKz0gXCI6bnRoLW9mLXR5cGUoXCIgKyBudGggKyBcIilcIjtcbiAgICB9XG4gICAgcGF0aC51bnNoaWZ0KHNlbGVjdG9yKTtcbiAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBwYXRoLmpvaW4oXCIgPiBcIik7XG59XG4iLCJpbXBvcnQgeyBnZXRFbGVtZW50QnlYcGF0aCwgb2JzZXJ2ZUFuZEFjdCB9IGZyb20gXCIuL2RvbUhlbHBlcnNcIjtcblxuLy8gUmVtb3ZlIFdoYXRzQXBwIHNwYW1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVXaGF0c0FwcFNwYW0oKSB7XG4gIG9ic2VydmVBbmRBY3QoYC8vKltAaWQ9XCJzaWRlXCJdL2Rpdls0XWAsIChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgfSk7XG4gIG9ic2VydmVBbmRBY3QoXG4gICAgYC8vKltAaWQ9XCJhcHBcIl0vZGl2L2RpdlsyXS9kaXZbM10vaGVhZGVyL2hlYWRlci9kaXYvc3Bhbi9kaXYvc3Bhbi9kaXZbM10vc3Bhbi9kaXYvdWwvbGlbN11gLFxuICAgIChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgKTtcbiAgb2JzZXJ2ZUFuZEFjdChcbiAgICBgLy8qW0BpZD1cImFwcFwiXS9kaXYvZGl2WzJdL2RpdlszXS9oZWFkZXIvaGVhZGVyL2Rpdi9zcGFuL2Rpdi9zcGFuL2RpdlszXS9zcGFuL2Rpdi91bC9ocmAsXG4gICAgKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkU3RhcnR1cE1lc3NhZ2UoKSB7XG4gIG9ic2VydmVBbmRBY3QoJy8vKltAaWQ9XCJhcHBcIl0vZGl2L2RpdlsyXS9kaXZbNF0vZGl2L2RpdicsIChlbGVtZW50KSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIG1lc3NhZ2UgYWxyZWFkeSBleGlzdHNcbiAgICBpZiAoIWVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1tZXNzYWdpbmdcIikpIHtcbiAgICAgIGdldEVsZW1lbnRCeVhwYXRoKGAvLypbQGlkPVwiYXBwXCJdL2Rpdi9kaXZbMl0vZGl2WzRdL2Rpdi9kaXZgKS5pbm5lckhUTUwgPVxuICAgICAgICBcIlwiO1xuICAgICAgLy8gQ3JlYXRlIGEgbWVzc2FnZSBlbGVtZW50XG4gICAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gYDxwPvCfkYsgVXNlIDxrYmQ+4oaRPC9rYmQ+IGFuZCA8a2JkPuKGkzwva2JkPiB0byBtb3ZlIGJldHdlZW4gY2hhdHMuPC9wPmA7XG4gICAgICBtZXNzYWdlLmNsYXNzTmFtZSA9IFwic3RhcnQtbWVzc2FnaW5nXCI7XG5cbiAgICAgIC8vIEFwcGVuZCB0aGUgbWVzc2FnZSB0byB0aGUgdGFyZ2V0IGVsZW1lbnRcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gICAgfVxuICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzaW11bGF0ZUtleVByZXNzKGVsZW1lbnQsIGtleSkge1xuICBjb25zdCBrZXlib2FyZEV2ZW50ID0gbmV3IEtleWJvYXJkRXZlbnQoXCJrZXlkb3duXCIsIHtcbiAgICBrZXk6IGtleSxcbiAgICBjb2RlOiBrZXksXG4gICAga2V5Q29kZToga2V5LFxuICAgIHdoaWNoOiBrZXksXG4gICAgYnViYmxlczogdHJ1ZSxcbiAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICB9KTtcbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGtleWJvYXJkRXZlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlck5hdGl2ZVNob3J0Y3V0KGtleXMpIHtcbiAgY29uc3QgZXZlbnQgPSBuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIiwge1xuICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICBrZXk6IGtleXMua2V5LFxuICAgIGNvZGU6IGtleXMuY29kZSxcbiAgICBsb2NhdGlvbjogS2V5Ym9hcmRFdmVudC5ET01fS0VZX0xPQ0FUSU9OX1NUQU5EQVJELFxuICAgIGN0cmxLZXk6IGtleXMuY3RybEtleSxcbiAgICBhbHRLZXk6IGtleXMuYWx0S2V5LFxuICAgIHNoaWZ0S2V5OiBrZXlzLnNoaWZ0S2V5LFxuICAgIG1ldGFLZXk6IGtleXMubWV0YUtleSxcbiAgfSk7XG4gIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuIiwiaW1wb3J0IHsgaW5qZWN0U2NyaXB0IH0gZnJvbSBcIi4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFyY2hpdmVDaGF0TGlzdGVuZXIoKSB7XG4gIGluamVjdFNjcmlwdChcInNyYy93aGF0c2FwcFN0b3JlL3NjcmlwdHMvYXJjaGl2ZUNoYXQuanNcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcmNoaXZlQ2hhdChjaGF0SWQpIHtcbiAgLy8gQWZ0ZXIgaW5qZWN0aW5nIHRoZSBzY3JpcHQsIHNlbmQgdGhlIGNoYXQgSUQgdXNpbmcgcG9zdE1lc3NhZ2VcbiAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogXCJBUkNISVZFX0NIQVRcIiwgY2hhdElkOiBjaGF0SWQgfSwgXCIqXCIpO1xufVxuIiwiaW1wb3J0IHsgaW5qZWN0U2NyaXB0IH0gZnJvbSBcIi4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFyY2hpdmVDaGF0RXZlbnRMaXN0ZW5lcigpIHtcbiAgaW5qZWN0U2NyaXB0KFwic3JjL3doYXRzYXBwU3RvcmUvc2NyaXB0cy9hcmNoaXZlQ2hhdEV2ZW50TGlzdGVuZXIuanNcIik7XG59XG4iLCJpbXBvcnQgeyBpbmplY3RTY3JpcHQgfSBmcm9tIFwiLi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhdHNTeW5jKCkge1xuICBpbmplY3RTY3JpcHQoXCJzcmMvd2hhdHNhcHBTdG9yZS9zY3JpcHRzL2NoYXRzU3luYy5qc1wiKTtcbn1cbiIsImltcG9ydCB7IGluamVjdFNjcmlwdCB9IGZyb20gXCIuLi91dGlscy9kb21IZWxwZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlRm9jdXNMaXN0ZW5lcigpIHtcbiAgaW5qZWN0U2NyaXB0KFwic3JjL3doYXRzYXBwU3RvcmUvc2NyaXB0cy9jb21wb3NlRm9jdXMuanNcIik7XG59XG4iLCJpbXBvcnQgeyBpbmplY3RTY3JpcHQgfSBmcm9tIFwiLi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ2hhdHNMaXN0ZW5lcigpIHtcbiAgaW5qZWN0U2NyaXB0KFwic3JjL3doYXRzYXBwU3RvcmUvc2NyaXB0cy9maWx0ZXJDaGF0cy5qc1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNoYXRzKGNoYXRzKSB7XG4gIC8vIEFmdGVyIGluamVjdGluZyB0aGUgc2NyaXB0LCBzZW5kIHRoZSBjaGF0IElEIHVzaW5nIHBvc3RNZXNzYWdlXG4gIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6IFwiRklMVEVSX0NIQVRTXCIsIGNoYXRzOiBjaGF0cyB9LCBcIipcIik7XG59XG4iLCJpbXBvcnQgeyBpbmplY3RTY3JpcHQgfSBmcm9tIFwiLi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9jdXNMYXN0TWVzc2FnZUxpc3RlbmVyKCkge1xuICBpbmplY3RTY3JpcHQoXCJzcmMvd2hhdHNhcHBTdG9yZS9zY3JpcHRzL2ZvY3VzTGFzdE1lc3NhZ2UuanNcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb2N1c0xhc3RNZXNzYWdlKCkge1xuICAvLyBBZnRlciBpbmplY3RpbmcgdGhlIHNjcmlwdCwgc2VuZCB0aGUgY2hhdCBJRCB1c2luZyBwb3N0TWVzc2FnZVxuICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiBcIkZPQ1VTX0xBU1RfTUVTU0FHRVwiIH0sIFwiKlwiKTtcbn1cbiIsImltcG9ydCB7IGluamVjdFNjcmlwdCB9IGZyb20gXCIuLi91dGlscy9kb21IZWxwZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb2N1c05leHRDaGF0TGlzdGVuZXIoKSB7XG4gIGluamVjdFNjcmlwdChcInNyYy93aGF0c2FwcFN0b3JlL3NjcmlwdHMvZm9jdXNOZXh0Q2hhdC5qc1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvY3VzTmV4dENoYXQoKSB7XG4gIC8vIEFmdGVyIGluamVjdGluZyB0aGUgc2NyaXB0LCBzZW5kIHRoZSBjaGF0IElEIHVzaW5nIHBvc3RNZXNzYWdlXG4gIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6IFwiRk9DVVNfTkVYVF9DSEFUXCIgfSwgXCIqXCIpO1xufVxuIiwiaW1wb3J0IHsgaW5qZWN0U2NyaXB0IH0gZnJvbSBcIi4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvY3VzUHJldmlvdXNDaGF0TGlzdGVuZXIoKSB7XG4gIGluamVjdFNjcmlwdChcInNyYy93aGF0c2FwcFN0b3JlL3NjcmlwdHMvZm9jdXNQcmV2aW91c0NoYXQuanNcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb2N1c1ByZXZpb3VzQ2hhdCgpIHtcbiAgLy8gQWZ0ZXIgaW5qZWN0aW5nIHRoZSBzY3JpcHQsIHNlbmQgdGhlIGNoYXQgSUQgdXNpbmcgcG9zdE1lc3NhZ2VcbiAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogXCJGT0NVU19QUkVWSU9VU19DSEFUXCIgfSwgXCIqXCIpO1xufVxuIiwiaW1wb3J0IHsgaW5qZWN0U2NyaXB0IH0gZnJvbSBcIi4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRGaWx0ZXJIYW5kbGVyTGlzdGVuZXIoKSB7XG4gIGluamVjdFNjcmlwdChcInNyYy93aGF0c2FwcFN0b3JlL3NjcmlwdHMvZm9yd2FyZEZpbHRlckhhbmRsZXIuanNcIik7XG59XG4iLCJpbXBvcnQgeyBzbm9vemVGb3JtIH0gZnJvbSBcIi4uL2ZlYXR1cmVzL3Nub296ZWQvc25vb3plRm9ybVwiO1xuaW1wb3J0IHsgaW5qZWN0U2NyaXB0IH0gZnJvbSBcIi4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoYXREZXRhaWxzTGlzdGVuZXIoKSB7XG4gIGluamVjdFNjcmlwdChcInNyYy93aGF0c2FwcFN0b3JlL3NjcmlwdHMvZ2V0Q2hhdERldGFpbHMuanNcIik7XG5cbiAgLy8gTGlzdGVuIGZvciB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgaW5qZWN0ZWQgc2NyaXB0XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoXG4gICAgICBldmVudC5kYXRhICYmXG4gICAgICBldmVudC5kYXRhLnR5cGUgPT09IFwiQ0hBVF9ERVRBSUxTX1JFU1BPTlNFXCIgJiZcbiAgICAgIGV2ZW50LmRhdGEuY2hhdFxuICAgICkge1xuICAgICAgY29uc3QgeyBjaGF0SWQsIHVzZXJOYW1lLCBsYXN0TXNnLCBwcm9maWxlUGljIH0gPSBldmVudC5kYXRhLmNoYXQ7XG4gICAgICBjb25zdCBjaGF0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC51bmxvYWRlZENoYXRbZGF0YS1jaGF0LWlkPVwiJHtjaGF0SWR9XCJdYFxuICAgICAgKTtcblxuICAgICAgaWYgKHByb2ZpbGVQaWMpIHtcbiAgICAgICAgY2hhdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVQaWNcIikuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICBkcmFnZ2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICBjbGFzcz1cIngxbjJvbnI2IHgxbGxpaWhxIHhoOHllajMgeDV5cjIxZCB4NmlrbThyIHgxMHdsdDYyIHgxNHlqbDloIHh1ZGhqOTEgeDE4bnlrdDkgeHd3Mmd4dSB4bDF4djFyIHgxMTVkaHU3IHgxN3Z0eTIzIHgxaGMxZnpyIF9hbzNlXCJcbiAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgc3JjPSR7cHJvZmlsZVBpY31cbiAgICAgICAgICAgIHN0eWxlPVwidmlzaWJpbGl0eTogdmlzaWJsZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgYDtcbiAgICAgIH1cblxuICAgICAgaWYgKHVzZXJOYW1lKSB7XG4gICAgICAgIGNoYXRDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi51c2VyTmFtZVwiKS5pbm5lckhUTUwgPSB1c2VyTmFtZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxhc3RNc2cpIHtcbiAgICAgICAgY2hhdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmxhc3RNc2dcIikuaW5uZXJIVE1MID0gbGFzdE1zZztcbiAgICAgIH1cblxuICAgICAgLy8gQXR0YWNoIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgcmVtaW5kZXIgYnV0dG9uc1xuICAgICAgY2hhdENvbnRhaW5lclxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5yZW1pbmRlckJ0blwiKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBzbm9vemVGb3JtKHsgY2hhdElkOiBjaGF0SWQsIGNoYXRVc2VybmFtZTogdXNlck5hbWUgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGF0RGV0YWlscyhjaGF0SWQpIHtcbiAgLy8gQWZ0ZXIgaW5qZWN0aW5nIHRoZSBzY3JpcHQsIHNlbmQgdGhlIGNoYXQgSUQgdXNpbmcgcG9zdE1lc3NhZ2VcbiAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogXCJHRVRfQ0hBVF9ERVRBSUxTXCIsIGNoYXRJZDogY2hhdElkIH0sIFwiKlwiKTtcbn1cbiIsImltcG9ydCB7IGluamVjdFNjcmlwdCB9IGZyb20gXCIuLi91dGlscy9kb21IZWxwZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGF0RmliZXJGcm9tRE9NTGlzdGVuZXIoKSB7XG4gIGluamVjdFNjcmlwdChcInNyYy93aGF0c2FwcFN0b3JlL3NjcmlwdHMvZ2V0Q2hhdEZpYmVyRnJvbURPTS5qc1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoYXRGaWJlckZyb21ET00oc2VsZWN0b3IpIHtcbiAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogXCJHRVRfQ0hBVF9GSUJFUlwiLCBzZWxlY3RvciB9LCBcIipcIik7XG59XG4iLCJpbXBvcnQgeyBpbmplY3RTY3JpcHQgfSBmcm9tIFwiLi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYXREb25lTGlzdGVuZXIoKSB7XG4gIGluamVjdFNjcmlwdChcInNyYy93aGF0c2FwcFN0b3JlL3NjcmlwdHMvbWFya0NoYXREb25lLmpzXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFya0NoYXREb25lKGNoYXRJZCkge1xuICAvLyBBZnRlciBpbmplY3RpbmcgdGhlIHNjcmlwdCwgc2VuZCB0aGUgY2hhdCBJRCB1c2luZyBwb3N0TWVzc2FnZVxuICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiBcIk1BUktfQ0hBVF9ET05FXCIsIGNoYXRJZDogY2hhdElkIH0sIFwiKlwiKTtcbn1cbiIsImltcG9ydCB7IGluamVjdFNjcmlwdCB9IGZyb20gXCIuLi91dGlscy9kb21IZWxwZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXNzYWdlc0xpc3RlbmVyKCkge1xuICBpbmplY3RTY3JpcHQoXCJzcmMvd2hhdHNhcHBTdG9yZS9zY3JpcHRzL21lc3NhZ2VzTGlzdGVuZXIuanNcIik7XG59IiwiaW1wb3J0IHsgaW5qZWN0U2NyaXB0IH0gZnJvbSBcIi4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Db250ZXh0TWVudUxpc3RlbmVyKCkge1xuICBpbmplY3RTY3JpcHQoXCJzcmMvd2hhdHNhcHBTdG9yZS9zY3JpcHRzL29wZW5Db250ZXh0TWVudS5qc1wiKTtcbn1cbiIsImltcG9ydCB7IGluamVjdFNjcmlwdCB9IGZyb20gXCIuLi91dGlscy9kb21IZWxwZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuRHJhd2VyTGVmdExpc3RlbmVyKCkge1xuICBpbmplY3RTY3JpcHQoXCJzcmMvd2hhdHNhcHBTdG9yZS9zY3JpcHRzL29wZW5EcmF3ZXJMZWZ0LmpzXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlbkRyYXdlckxlZnQoZHJhd2VyLCBkcmF3ZXJJZCkge1xuICAvLyBBZnRlciBpbmplY3RpbmcgdGhlIHNjcmlwdCwgc2VuZCB0aGUgY2hhdCBJRCB1c2luZyBwb3N0TWVzc2FnZVxuICB3aW5kb3cucG9zdE1lc3NhZ2UoXG4gICAgeyB0eXBlOiBcIk9QRU5fRFJBV0VSX0xFRlRcIiwgZHJhd2VyOiBkcmF3ZXIsIGRyYXdlcklkOiBkcmF3ZXJJZCB9LFxuICAgIFwiKlwiLFxuICApO1xufVxuIiwiaW1wb3J0IHsgaW5qZWN0U2NyaXB0IH0gZnJvbSBcIi4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RNb3ZlVG9Gb3JtTGlzdGVuZXIoKSB7XG4gIGluamVjdFNjcmlwdChcInNyYy93aGF0c2FwcFN0b3JlL3NjcmlwdHMvcmVxdWVzdE1vdmVUb0Zvcm0uanNcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0TW92ZVRvRm9ybSgpIHtcbiAgLy8gQWZ0ZXIgaW5qZWN0aW5nIHRoZSBzY3JpcHQsIHNlbmQgdGhlIGNoYXQgSUQgdXNpbmcgcG9zdE1lc3NhZ2VcbiAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogXCJSRVFVRVNUX01PVkVfVE9fRk9STVwiIH0sIFwiKlwiKTtcbn1cbiIsImltcG9ydCB7IGluamVjdFNjcmlwdCB9IGZyb20gXCIuLi91dGlscy9kb21IZWxwZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0U25vb3plRm9ybUxpc3RlbmVyKCkge1xuICBpbmplY3RTY3JpcHQoXCJzcmMvd2hhdHNhcHBTdG9yZS9zY3JpcHRzL3JlcXVlc3RTbm9vemVGb3JtLmpzXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdFNub296ZUZvcm0oKSB7XG4gIC8vIEFmdGVyIGluamVjdGluZyB0aGUgc2NyaXB0LCBzZW5kIHRoZSBjaGF0IElEIHVzaW5nIHBvc3RNZXNzYWdlXG4gIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6IFwiUkVRVUVTVF9TTk9PWkVfRk9STVwiIH0sIFwiKlwiKTtcbn1cbiIsImltcG9ydCB7IGluamVjdFNjcmlwdCB9IGZyb20gXCIuLi91dGlscy9kb21IZWxwZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmFyY2hpdmVDaGF0TGlzdGVuZXIoKSB7XG4gIGluamVjdFNjcmlwdChcInNyYy93aGF0c2FwcFN0b3JlL3NjcmlwdHMvdW5hcmNoaXZlQ2hhdC5qc1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuYXJjaGl2ZUNoYXQoY2hhdElkKSB7XG4gIC8vIEFmdGVyIGluamVjdGluZyB0aGUgc2NyaXB0LCBzZW5kIHRoZSBjaGF0IElEIHVzaW5nIHBvc3RNZXNzYWdlXG4gIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6IFwiVU5BUkNISVZFX0NIQVRcIiwgY2hhdElkOiBjaGF0SWQgfSwgXCIqXCIpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9tYWluLnNjc3NcIjtcbmltcG9ydCB7IGdldEVsZW1lbnRCeVhwYXRoIH0gZnJvbSBcIi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuaW1wb3J0IHsgcmVtb3ZlV2hhdHNBcHBTcGFtLCBhZGRTdGFydHVwTWVzc2FnZSB9IGZyb20gXCIuL3V0aWxzL2VuaGFuY2VVaVwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVNob3J0Y3V0cyB9IGZyb20gXCIuL2ZlYXR1cmVzL3Nob3J0Y3V0c1wiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUZvbGRlcnMgfSBmcm9tIFwiLi9mZWF0dXJlcy9mb2xkZXJzXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplU25vb3plZCB9IGZyb20gXCIuL2ZlYXR1cmVzL3Nub296ZWRcIjtcbmltcG9ydCB7IGluaXRpYWxpemVTY2hlZHVsZWQgfSBmcm9tIFwiLi9mZWF0dXJlcy9zY2hlZHVsZWRcIjtcbmltcG9ydCB7IGNoYXRPbkhvdmVyT2JzZXJ2ZXIgfSBmcm9tIFwiLi9vYnNlcnZlcnMvY2hhdE9uSG92ZXJPYnNlcnZlclwiO1xuaW1wb3J0IHsgYXJjaGl2ZUNoYXRMaXN0ZW5lciB9IGZyb20gXCIuL3doYXRzYXBwU3RvcmUvYXJjaGl2ZUNoYXRcIjtcbmltcG9ydCB7IHVuYXJjaGl2ZUNoYXRMaXN0ZW5lciB9IGZyb20gXCIuL3doYXRzYXBwU3RvcmUvdW5hcmNoaXZlQ2hhdFwiO1xuaW1wb3J0IHsgbWFya0NoYXREb25lTGlzdGVuZXIgfSBmcm9tIFwiLi93aGF0c2FwcFN0b3JlL21hcmtDaGF0RG9uZVwiO1xuaW1wb3J0IHsgb3BlbkRyYXdlckxlZnRMaXN0ZW5lciB9IGZyb20gXCIuL3doYXRzYXBwU3RvcmUvb3BlbkRyYXdlckxlZnRcIjtcbmltcG9ydCB7IGdldENoYXREZXRhaWxzTGlzdGVuZXIgfSBmcm9tIFwiLi93aGF0c2FwcFN0b3JlL2dldENoYXREZXRhaWxzXCI7XG5pbXBvcnQgeyBvcGVuQ29udGV4dE1lbnVMaXN0ZW5lciB9IGZyb20gXCIuL3doYXRzYXBwU3RvcmUvb3BlbkNvbnRleHRNZW51XCI7XG5pbXBvcnQgeyBnZXRDaGF0RmliZXJGcm9tRE9NTGlzdGVuZXIgfSBmcm9tIFwiLi93aGF0c2FwcFN0b3JlL2dldENoYXRGaWJlckZyb21ET01cIjtcbmltcG9ydCB7IGluaXRpYWxpemVEb25lIH0gZnJvbSBcIi4vZmVhdHVyZXMvZG9uZVwiO1xuXG4vLyBJbmplY3QgZm9udCBzdHlsZXMgaW50byB0aGUgcGFnZVxuY29uc3QgbGluazEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbmxpbmsxLnJlbCA9IFwic3R5bGVzaGVldFwiO1xubGluazEuaHJlZiA9XG4gIFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXRlcmlhbCtTeW1ib2xzK091dGxpbmVkOm9wc3osd2dodCxGSUxMLEdSQURAMjAuLjQ4LDEwMC4uNzAwLDAuLjEsLTUwLi4yMDBcIjtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rMSk7XG5cbkVsZW1lbnQucHJvdG90eXBlLmluc2VydENoaWxkQXRJbmRleCA9IGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgaWYgKCFpbmRleCkgaW5kZXggPSAwO1xuICBpZiAoaW5kZXggPj0gdGhpcy5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICB0aGlzLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmluc2VydEJlZm9yZShjaGlsZCwgdGhpcy5jaGlsZHJlbltpbmRleF0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBpbml0aWFsaXplV2hhdHNBcHAoKSB7XG4gIC8vIERpc3BhdGNoIGEgY3VzdG9tIGV2ZW50IHRvIHNpZ25hbCB0aGF0IFdoYXRzQXBwIGlzIGluaXRpYWxpemVkXG4gIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwid2hhdHNhcHBJbml0aWFsaXplZFwiLCB7XG4gICAgZGV0YWlsOiB7IG1lc3NhZ2U6IFwiV2hhdHNBcHAgaXMgbm93IGluaXRpYWxpemVkXCIgfSxcbiAgfSk7XG4gIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG5pbml0aWFsaXplU2hvcnRjdXRzKCk7XG5pbml0aWFsaXplRm9sZGVycygpO1xuaW5pdGlhbGl6ZVNjaGVkdWxlZCgpO1xuaW5pdGlhbGl6ZVNub296ZWQoKTtcbmluaXRpYWxpemVEb25lKCk7XG5cbi8vIFRhcmdldCBub2RlIHRvIG9ic2VydmVcbmNvbnN0IHRhcmdldE5vZGUgPSBkb2N1bWVudC5ib2R5O1xuXG4vLyBPcHRpb25zIGZvciB0aGUgb2JzZXJ2ZXIgKHdoaWNoIG11dGF0aW9ucyB0byBvYnNlcnZlKVxuY29uc3QgY29uZmlnID0geyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcblxuLy8gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIG11dGF0aW9ucyBhcmUgb2JzZXJ2ZWRcbmNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSB7XG4gIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25zTGlzdCkge1xuICAgIGlmIChtdXRhdGlvbi50eXBlID09PSBcImNoaWxkTGlzdFwiKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGdldEVsZW1lbnRCeVhwYXRoKFxuICAgICAgICAgIGAvLypbQGlkPVwiYXBwXCJdL2Rpdi9kaXZbMl0vZGl2WzNdL2hlYWRlci9oZWFkZXIvZGl2L2Rpdi9oMWBcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgaW5pdGlhbGl6ZVdoYXRzQXBwKCk7IC8vIERpc3BhdGNoIGV2ZW50IHdoZW4gV2hhdHNBcHAgaXMgbG9hZGVkXG5cbiAgICAgICAgY2hhdE9uSG92ZXJPYnNlcnZlcigpO1xuICAgICAgICBhcmNoaXZlQ2hhdExpc3RlbmVyKCk7XG4gICAgICAgIHVuYXJjaGl2ZUNoYXRMaXN0ZW5lcigpO1xuICAgICAgICBvcGVuRHJhd2VyTGVmdExpc3RlbmVyKCk7XG4gICAgICAgIGdldENoYXREZXRhaWxzTGlzdGVuZXIoKTtcbiAgICAgICAgbWFya0NoYXREb25lTGlzdGVuZXIoKTtcbiAgICAgICAgb3BlbkNvbnRleHRNZW51TGlzdGVuZXIoKTtcbiAgICAgICAgZ2V0Q2hhdEZpYmVyRnJvbURPTUxpc3RlbmVyKCk7XG5cbiAgICAgICAgcmVtb3ZlV2hhdHNBcHBTcGFtKCk7XG4gICAgICAgIGFkZFN0YXJ0dXBNZXNzYWdlKCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vLyBDcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgbGlua2VkIHRvIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG5cbi8vIFN0YXJ0IG9ic2VydmluZyB0aGUgdGFyZ2V0IG5vZGUgZm9yIGNvbmZpZ3VyZWQgbXV0YXRpb25zXG5vYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIGNvbmZpZyk7XG4iXSwibmFtZXMiOlsib3duS2V5cyIsIm9iamVjdCIsImVudW1lcmFibGVPbmx5Iiwia2V5cyIsIk9iamVjdCIsImdldE93blByb3BlcnR5U3ltYm9scyIsInN5bWJvbHMiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwicHVzaCIsImFwcGx5IiwiX29iamVjdFNwcmVhZDIiLCJ0YXJnZXQiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwiZm9yRWFjaCIsImtleSIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZGVmaW5lUHJvcGVydHkiLCJfdHlwZW9mIiwib2JqIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsInZhbHVlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfZXh0ZW5kcyIsImFzc2lnbiIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwiZXhjbHVkZWQiLCJzb3VyY2VLZXlzIiwiaW5kZXhPZiIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsInNvdXJjZVN5bWJvbEtleXMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIl90b0NvbnN1bWFibGVBcnJheSIsImFyciIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJBcnJheSIsImlzQXJyYXkiLCJfYXJyYXlMaWtlVG9BcnJheSIsIml0ZXIiLCJmcm9tIiwibyIsIm1pbkxlbiIsIm4iLCJ0b1N0cmluZyIsInNsaWNlIiwibmFtZSIsInRlc3QiLCJsZW4iLCJhcnIyIiwiVHlwZUVycm9yIiwidmVyc2lvbiIsInVzZXJBZ2VudCIsInBhdHRlcm4iLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJtYXRjaCIsIklFMTFPckxlc3MiLCJFZGdlIiwiRmlyZUZveCIsIlNhZmFyaSIsIklPUyIsIkNocm9tZUZvckFuZHJvaWQiLCJjYXB0dXJlTW9kZSIsImNhcHR1cmUiLCJwYXNzaXZlIiwib24iLCJlbCIsImV2ZW50IiwiZm4iLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hdGNoZXMiLCJzZWxlY3RvciIsInN1YnN0cmluZyIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwiXyIsImdldFBhcmVudE9ySG9zdCIsImhvc3QiLCJkb2N1bWVudCIsIm5vZGVUeXBlIiwicGFyZW50Tm9kZSIsImNsb3Nlc3QiLCJjdHgiLCJpbmNsdWRlQ1RYIiwiUl9TUEFDRSIsInRvZ2dsZUNsYXNzIiwic3RhdGUiLCJjbGFzc0xpc3QiLCJjbGFzc05hbWUiLCJyZXBsYWNlIiwiY3NzIiwicHJvcCIsInZhbCIsInN0eWxlIiwiZGVmYXVsdFZpZXciLCJnZXRDb21wdXRlZFN0eWxlIiwiY3VycmVudFN0eWxlIiwibWF0cml4Iiwic2VsZk9ubHkiLCJhcHBsaWVkVHJhbnNmb3JtcyIsInRyYW5zZm9ybSIsIm1hdHJpeEZuIiwiRE9NTWF0cml4IiwiV2ViS2l0Q1NTTWF0cml4IiwiQ1NTTWF0cml4IiwiTVNDU1NNYXRyaXgiLCJmaW5kIiwidGFnTmFtZSIsImxpc3QiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQiLCJzY3JvbGxpbmdFbGVtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0UmVjdCIsInJlbGF0aXZlVG9Db250YWluaW5nQmxvY2siLCJyZWxhdGl2ZVRvTm9uU3RhdGljUGFyZW50IiwidW5kb1NjYWxlIiwiY29udGFpbmVyIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZWxSZWN0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiaGVpZ2h0Iiwid2lkdGgiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJjb250YWluZXJSZWN0IiwicGFyc2VJbnQiLCJlbE1hdHJpeCIsInNjYWxlWCIsImEiLCJzY2FsZVkiLCJkIiwiaXNTY3JvbGxlZFBhc3QiLCJlbFNpZGUiLCJwYXJlbnRTaWRlIiwicGFyZW50IiwiZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQiLCJlbFNpZGVWYWwiLCJwYXJlbnRTaWRlVmFsIiwidmlzaWJsZSIsImdldENoaWxkIiwiY2hpbGROdW0iLCJvcHRpb25zIiwiaW5jbHVkZURyYWdFbCIsImN1cnJlbnRDaGlsZCIsImNoaWxkcmVuIiwiZGlzcGxheSIsIlNvcnRhYmxlIiwiZ2hvc3QiLCJkcmFnZ2VkIiwiZHJhZ2dhYmxlIiwibGFzdENoaWxkIiwibGFzdCIsImxhc3RFbGVtZW50Q2hpbGQiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiaW5kZXgiLCJub2RlTmFtZSIsInRvVXBwZXJDYXNlIiwiY2xvbmUiLCJnZXRSZWxhdGl2ZVNjcm9sbE9mZnNldCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJ3aW5TY3JvbGxlciIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJpbmRleE9mT2JqZWN0IiwiTnVtYmVyIiwiaW5jbHVkZVNlbGYiLCJlbGVtIiwiZ290U2VsZiIsImNsaWVudFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJlbGVtQ1NTIiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwiYm9keSIsImV4dGVuZCIsImRzdCIsInNyYyIsImlzUmVjdEVxdWFsIiwicmVjdDEiLCJyZWN0MiIsIk1hdGgiLCJyb3VuZCIsIl90aHJvdHRsZVRpbWVvdXQiLCJ0aHJvdHRsZSIsImNhbGxiYWNrIiwibXMiLCJhcmdzIiwiX3RoaXMiLCJzZXRUaW1lb3V0IiwiY2FuY2VsVGhyb3R0bGUiLCJjbGVhclRpbWVvdXQiLCJzY3JvbGxCeSIsIngiLCJ5IiwiUG9seW1lciIsIiQiLCJqUXVlcnkiLCJaZXB0byIsImRvbSIsImNsb25lTm9kZSIsInNldFJlY3QiLCJyZWN0IiwidW5zZXRSZWN0IiwiZ2V0Q2hpbGRDb250YWluaW5nUmVjdEZyb21FbGVtZW50IiwiZ2hvc3RFbCIsImNoaWxkIiwiX3JlY3QkbGVmdCIsIl9yZWN0JHRvcCIsIl9yZWN0JHJpZ2h0IiwiX3JlY3QkYm90dG9tIiwiYW5pbWF0ZWQiLCJjaGlsZFJlY3QiLCJtaW4iLCJJbmZpbml0eSIsIm1heCIsImV4cGFuZG8iLCJEYXRlIiwiZ2V0VGltZSIsIkFuaW1hdGlvblN0YXRlTWFuYWdlciIsImFuaW1hdGlvblN0YXRlcyIsImFuaW1hdGlvbkNhbGxiYWNrSWQiLCJjYXB0dXJlQW5pbWF0aW9uU3RhdGUiLCJhbmltYXRpb24iLCJmcm9tUmVjdCIsInRoaXNBbmltYXRpb25EdXJhdGlvbiIsImNoaWxkTWF0cml4IiwiZiIsImUiLCJhZGRBbmltYXRpb25TdGF0ZSIsInJlbW92ZUFuaW1hdGlvblN0YXRlIiwic3BsaWNlIiwiYW5pbWF0ZUFsbCIsImFuaW1hdGluZyIsImFuaW1hdGlvblRpbWUiLCJ0aW1lIiwidG9SZWN0IiwicHJldkZyb21SZWN0IiwicHJldlRvUmVjdCIsImFuaW1hdGluZ1JlY3QiLCJ0YXJnZXRNYXRyaXgiLCJjYWxjdWxhdGVSZWFsVGltZSIsImFuaW1hdGUiLCJhbmltYXRpb25SZXNldFRpbWVyIiwiY3VycmVudFJlY3QiLCJkdXJhdGlvbiIsInRyYW5zbGF0ZVgiLCJ0cmFuc2xhdGVZIiwiYW5pbWF0aW5nWCIsImFuaW1hdGluZ1kiLCJmb3JSZXBhaW50RHVtbXkiLCJyZXBhaW50IiwiZWFzaW5nIiwib2Zmc2V0V2lkdGgiLCJzcXJ0IiwicG93IiwicGx1Z2lucyIsImRlZmF1bHRzIiwiaW5pdGlhbGl6ZUJ5RGVmYXVsdCIsIlBsdWdpbk1hbmFnZXIiLCJtb3VudCIsInBsdWdpbiIsIm9wdGlvbiIsInAiLCJwbHVnaW5OYW1lIiwiY29uY2F0IiwicGx1Z2luRXZlbnQiLCJldmVudE5hbWUiLCJzb3J0YWJsZSIsImV2dCIsImV2ZW50Q2FuY2VsZWQiLCJjYW5jZWwiLCJldmVudE5hbWVHbG9iYWwiLCJpbml0aWFsaXplUGx1Z2lucyIsImluaXRpYWxpemVkIiwibW9kaWZpZWQiLCJtb2RpZnlPcHRpb24iLCJnZXRFdmVudFByb3BlcnRpZXMiLCJldmVudFByb3BlcnRpZXMiLCJtb2RpZmllZFZhbHVlIiwib3B0aW9uTGlzdGVuZXJzIiwiZGlzcGF0Y2hFdmVudCIsIl9yZWYiLCJyb290RWwiLCJ0YXJnZXRFbCIsImNsb25lRWwiLCJ0b0VsIiwiZnJvbUVsIiwib2xkSW5kZXgiLCJuZXdJbmRleCIsIm9sZERyYWdnYWJsZUluZGV4IiwibmV3RHJhZ2dhYmxlSW5kZXgiLCJvcmlnaW5hbEV2ZW50IiwicHV0U29ydGFibGUiLCJleHRyYUV2ZW50UHJvcGVydGllcyIsIm9uTmFtZSIsImNoYXJBdCIsInN1YnN0ciIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsInRvIiwiaXRlbSIsInB1bGxNb2RlIiwibGFzdFB1dE1vZGUiLCJ1bmRlZmluZWQiLCJhbGxFdmVudFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJkYXRhIiwiYmluZCIsImRyYWdFbCIsInBhcmVudEVsIiwibmV4dEVsIiwibGFzdERvd25FbCIsImNsb25lSGlkZGVuIiwiZHJhZ1N0YXJ0ZWQiLCJtb3ZlZCIsImFjdGl2ZVNvcnRhYmxlIiwiYWN0aXZlIiwiaGlkZUdob3N0Rm9yVGFyZ2V0IiwiX2hpZGVHaG9zdEZvclRhcmdldCIsInVuaGlkZUdob3N0Rm9yVGFyZ2V0IiwiX3VuaGlkZUdob3N0Rm9yVGFyZ2V0IiwiY2xvbmVOb3dIaWRkZW4iLCJjbG9uZU5vd1Nob3duIiwiZGlzcGF0Y2hTb3J0YWJsZUV2ZW50IiwiX2Rpc3BhdGNoRXZlbnQiLCJpbmZvIiwiYWN0aXZlR3JvdXAiLCJhd2FpdGluZ0RyYWdTdGFydGVkIiwiaWdub3JlTmV4dENsaWNrIiwic29ydGFibGVzIiwidGFwRXZ0IiwidG91Y2hFdnQiLCJsYXN0RHgiLCJsYXN0RHkiLCJ0YXBEaXN0YW5jZUxlZnQiLCJ0YXBEaXN0YW5jZVRvcCIsImxhc3RUYXJnZXQiLCJsYXN0RGlyZWN0aW9uIiwicGFzdEZpcnN0SW52ZXJ0VGhyZXNoIiwiaXNDaXJjdW1zdGFudGlhbEludmVydCIsInRhcmdldE1vdmVEaXN0YW5jZSIsImdob3N0UmVsYXRpdmVQYXJlbnQiLCJnaG9zdFJlbGF0aXZlUGFyZW50SW5pdGlhbFNjcm9sbCIsIl9zaWxlbnQiLCJzYXZlZElucHV0Q2hlY2tlZCIsImRvY3VtZW50RXhpc3RzIiwiUG9zaXRpb25HaG9zdEFic29sdXRlbHkiLCJDU1NGbG9hdFByb3BlcnR5Iiwic3VwcG9ydERyYWdnYWJsZSIsImNyZWF0ZUVsZW1lbnQiLCJzdXBwb3J0Q3NzUG9pbnRlckV2ZW50cyIsImNzc1RleHQiLCJwb2ludGVyRXZlbnRzIiwiX2RldGVjdERpcmVjdGlvbiIsImVsQ1NTIiwiZWxXaWR0aCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiYm9yZGVyTGVmdFdpZHRoIiwiYm9yZGVyUmlnaHRXaWR0aCIsImNoaWxkMSIsImNoaWxkMiIsImZpcnN0Q2hpbGRDU1MiLCJzZWNvbmRDaGlsZENTUyIsImZpcnN0Q2hpbGRXaWR0aCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInNlY29uZENoaWxkV2lkdGgiLCJmbGV4RGlyZWN0aW9uIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsInNwbGl0IiwidG91Y2hpbmdTaWRlQ2hpbGQyIiwiY2xlYXIiLCJfZHJhZ0VsSW5Sb3dDb2x1bW4iLCJkcmFnUmVjdCIsInRhcmdldFJlY3QiLCJ2ZXJ0aWNhbCIsImRyYWdFbFMxT3BwIiwiZHJhZ0VsUzJPcHAiLCJkcmFnRWxPcHBMZW5ndGgiLCJ0YXJnZXRTMU9wcCIsInRhcmdldFMyT3BwIiwidGFyZ2V0T3BwTGVuZ3RoIiwiX2RldGVjdE5lYXJlc3RFbXB0eVNvcnRhYmxlIiwicmV0Iiwic29tZSIsInRocmVzaG9sZCIsImVtcHR5SW5zZXJ0VGhyZXNob2xkIiwiaW5zaWRlSG9yaXpvbnRhbGx5IiwiaW5zaWRlVmVydGljYWxseSIsIl9wcmVwYXJlR3JvdXAiLCJ0b0ZuIiwicHVsbCIsInNhbWVHcm91cCIsImdyb3VwIiwib3RoZXJHcm91cCIsImpvaW4iLCJvcmlnaW5hbEdyb3VwIiwiY2hlY2tQdWxsIiwiY2hlY2tQdXQiLCJwdXQiLCJyZXZlcnRDbG9uZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwibmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQiLCJ0b3VjaGVzIiwibmVhcmVzdCIsImNsaWVudFgiLCJjbGllbnRZIiwiX29uRHJhZ092ZXIiLCJfY2hlY2tPdXRzaWRlVGFyZ2V0RWwiLCJfaXNPdXRzaWRlVGhpc0VsIiwic29ydCIsImRpc2FibGVkIiwic3RvcmUiLCJoYW5kbGUiLCJzd2FwVGhyZXNob2xkIiwiaW52ZXJ0U3dhcCIsImludmVydGVkU3dhcFRocmVzaG9sZCIsInJlbW92ZUNsb25lT25IaWRlIiwiZGlyZWN0aW9uIiwiZ2hvc3RDbGFzcyIsImNob3NlbkNsYXNzIiwiZHJhZ0NsYXNzIiwiaWdub3JlIiwicHJldmVudE9uRmlsdGVyIiwic2V0RGF0YSIsImRhdGFUcmFuc2ZlciIsInRleHRDb250ZW50IiwiZHJvcEJ1YmJsZSIsImRyYWdvdmVyQnViYmxlIiwiZGF0YUlkQXR0ciIsImRlbGF5IiwiZGVsYXlPblRvdWNoT25seSIsInRvdWNoU3RhcnRUaHJlc2hvbGQiLCJkZXZpY2VQaXhlbFJhdGlvIiwiZm9yY2VGYWxsYmFjayIsImZhbGxiYWNrQ2xhc3MiLCJmYWxsYmFja09uQm9keSIsImZhbGxiYWNrVG9sZXJhbmNlIiwiZmFsbGJhY2tPZmZzZXQiLCJzdXBwb3J0UG9pbnRlciIsIm5hdGl2ZURyYWdnYWJsZSIsIl9vblRhcFN0YXJ0IiwiZ2V0IiwiY29udGFpbnMiLCJfZ2V0RGlyZWN0aW9uIiwidHlwZSIsInRvdWNoIiwicG9pbnRlclR5cGUiLCJvcmlnaW5hbFRhcmdldCIsInNoYWRvd1Jvb3QiLCJwYXRoIiwiY29tcG9zZWRQYXRoIiwiX3NhdmVJbnB1dENoZWNrZWRTdGF0ZSIsImJ1dHRvbiIsImlzQ29udGVudEVkaXRhYmxlIiwiY3JpdGVyaWEiLCJ0cmltIiwiX3ByZXBhcmVEcmFnU3RhcnQiLCJvd25lckRvY3VtZW50IiwiZHJhZ1N0YXJ0Rm4iLCJuZXh0U2libGluZyIsIl9sYXN0WCIsIl9sYXN0WSIsIl9vbkRyb3AiLCJfZGlzYWJsZURlbGF5ZWREcmFnRXZlbnRzIiwiX3RyaWdnZXJEcmFnU3RhcnQiLCJfZGlzYWJsZURyYWdnYWJsZSIsIl9kaXNhYmxlRGVsYXllZERyYWciLCJfZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyIiwiX2RyYWdTdGFydFRpbWVyIiwiYWJzIiwiZmxvb3IiLCJfb25Ub3VjaE1vdmUiLCJfb25EcmFnU3RhcnQiLCJzZWxlY3Rpb24iLCJfbmV4dFRpY2siLCJlbXB0eSIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsImVyciIsIl9kcmFnU3RhcnRlZCIsImZhbGxiYWNrIiwiX2FwcGVuZEdob3N0IiwiX251bGxpbmciLCJfZW11bGF0ZURyYWdPdmVyIiwiZWxlbWVudEZyb21Qb2ludCIsImluc2VydGVkIiwiZ2hvc3RNYXRyaXgiLCJyZWxhdGl2ZVNjcm9sbE9mZnNldCIsImR4IiwiZHkiLCJiIiwiYyIsImNzc01hdHJpeCIsImFwcGVuZENoaWxkIiwicmVtb3ZlQXR0cmlidXRlIiwiX2hpZGVDbG9uZSIsImNsb25lSWQiLCJpbnNlcnRCZWZvcmUiLCJfbG9vcElkIiwic2V0SW50ZXJ2YWwiLCJlZmZlY3RBbGxvd2VkIiwiX2RyYWdTdGFydElkIiwicmV2ZXJ0IiwiaXNPd25lciIsImNhblNvcnQiLCJmcm9tU29ydGFibGUiLCJjb21wbGV0ZWRGaXJlZCIsImRyYWdPdmVyRXZlbnQiLCJleHRyYSIsImF4aXMiLCJjb21wbGV0ZWQiLCJvbk1vdmUiLCJhZnRlciIsIl9vbk1vdmUiLCJjaGFuZ2VkIiwiaW5zZXJ0aW9uIiwiX3Nob3dDbG9uZSIsIl9pZ25vcmVXaGlsZUFuaW1hdGluZyIsImVsTGFzdENoaWxkIiwiX2dob3N0SXNMYXN0IiwiX2dob3N0SXNGaXJzdCIsImZpcnN0Q2hpbGQiLCJ0YXJnZXRCZWZvcmVGaXJzdFN3YXAiLCJkaWZmZXJlbnRMZXZlbCIsImRpZmZlcmVudFJvd0NvbCIsInNpZGUxIiwic2Nyb2xsZWRQYXN0VG9wIiwic2Nyb2xsQmVmb3JlIiwiX2dldFN3YXBEaXJlY3Rpb24iLCJzaWJsaW5nIiwiZHJhZ0luZGV4IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibW92ZVZlY3RvciIsIl91bnNpbGVudCIsIl9vZmZNb3ZlRXZlbnRzIiwiX29mZlVwRXZlbnRzIiwiY2xlYXJJbnRlcnZhbCIsIl9jYW5jZWxOZXh0VGljayIsInJlbW92ZUNoaWxkIiwic2F2ZSIsImNoZWNrZWQiLCJoYW5kbGVFdmVudCIsIl9nbG9iYWxEcmFnT3ZlciIsInRvQXJyYXkiLCJvcmRlciIsImdldEF0dHJpYnV0ZSIsIl9nZW5lcmF0ZUlkIiwidXNlQW5pbWF0aW9uIiwiaXRlbXMiLCJpZCIsInNldCIsImNsb3Nlc3QkMSIsImRlc3Ryb3kiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZHJvcEVmZmVjdCIsIndpbGxJbnNlcnRBZnRlciIsIm9uTW92ZUZuIiwicmV0VmFsIiwiZHJhZ2dlZFJlY3QiLCJyZWxhdGVkIiwicmVsYXRlZFJlY3QiLCJmaXJzdEVsUmVjdCIsImNoaWxkQ29udGFpbmluZ1JlY3QiLCJzcGFjZXIiLCJsYXN0RWxSZWN0IiwiaXNMYXN0VGFyZ2V0IiwibW91c2VPbkF4aXMiLCJ0YXJnZXRMZW5ndGgiLCJ0YXJnZXRTMSIsInRhcmdldFMyIiwiaW52ZXJ0IiwiX2dldEluc2VydERpcmVjdGlvbiIsInN0ciIsImhyZWYiLCJzdW0iLCJjaGFyQ29kZUF0Iiwicm9vdCIsImlucHV0cyIsImlkeCIsInV0aWxzIiwiaXMiLCJuZXh0VGljayIsImNhbmNlbE5leHRUaWNrIiwiZGV0ZWN0RGlyZWN0aW9uIiwiZWxlbWVudCIsIl9sZW4iLCJfa2V5IiwiY3JlYXRlIiwiYXV0b1Njcm9sbHMiLCJzY3JvbGxFbCIsInNjcm9sbFJvb3RFbCIsInNjcm9sbGluZyIsImxhc3RBdXRvU2Nyb2xsWCIsImxhc3RBdXRvU2Nyb2xsWSIsInRvdWNoRXZ0JDEiLCJwb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCIsIkF1dG9TY3JvbGxQbHVnaW4iLCJBdXRvU2Nyb2xsIiwic2Nyb2xsIiwiZm9yY2VBdXRvU2Nyb2xsRmFsbGJhY2siLCJzY3JvbGxTZW5zaXRpdml0eSIsInNjcm9sbFNwZWVkIiwiYnViYmxlU2Nyb2xsIiwiX2hhbmRsZUF1dG9TY3JvbGwiLCJfaGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsIiwiZHJhZ092ZXJDb21wbGV0ZWQiLCJfcmVmMiIsImRyYWdPdmVyQnViYmxlIiwiZHJvcCIsImNsZWFyUG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwiLCJjbGVhckF1dG9TY3JvbGxzIiwibnVsbGluZyIsImF1dG9TY3JvbGwiLCJvZ0VsZW1TY3JvbGxlciIsIm5ld0VsZW0iLCJwaWQiLCJpc0ZhbGxiYWNrIiwic2VucyIsInNwZWVkIiwic2Nyb2xsVGhpc0luc3RhbmNlIiwic2Nyb2xsQ3VzdG9tRm4iLCJzY3JvbGxGbiIsImxheWVyc091dCIsImN1cnJlbnRQYXJlbnQiLCJjYW5TY3JvbGxYIiwiY2FuU2Nyb2xsWSIsInNjcm9sbFBvc1giLCJzY3JvbGxQb3NZIiwidngiLCJ2eSIsImxheWVyIiwic2Nyb2xsT2Zmc2V0WSIsInNjcm9sbE9mZnNldFgiLCJ0b1NvcnRhYmxlIiwiY2hhbmdlZFRvdWNoZXMiLCJvblNwaWxsIiwiUmV2ZXJ0Iiwic3RhcnRJbmRleCIsImRyYWdTdGFydCIsIl9yZWYzIiwiUmVtb3ZlIiwiX3JlZjQiLCJwYXJlbnRTb3J0YWJsZSIsImxhc3RTd2FwRWwiLCJTd2FwUGx1Z2luIiwiU3dhcCIsInN3YXBDbGFzcyIsImRyYWdPdmVyVmFsaWQiLCJzd2FwIiwicHJldlN3YXBFbCIsInN3YXBOb2RlcyIsInN3YXBJdGVtIiwibjEiLCJuMiIsInAxIiwicDIiLCJpMSIsImkyIiwiaXNFcXVhbE5vZGUiLCJtdWx0aURyYWdFbGVtZW50cyIsIm11bHRpRHJhZ0Nsb25lcyIsImxhc3RNdWx0aURyYWdTZWxlY3QiLCJtdWx0aURyYWdTb3J0YWJsZSIsImluaXRpYWxGb2xkaW5nIiwiZm9sZGluZyIsImRyYWdFbCQxIiwiY2xvbmVzRnJvbVJlY3QiLCJjbG9uZXNIaWRkZW4iLCJNdWx0aURyYWdQbHVnaW4iLCJNdWx0aURyYWciLCJhdm9pZEltcGxpY2l0RGVzZWxlY3QiLCJfZGVzZWxlY3RNdWx0aURyYWciLCJfY2hlY2tLZXlEb3duIiwiX2NoZWNrS2V5VXAiLCJzZWxlY3RlZENsYXNzIiwibXVsdGlEcmFnS2V5IiwibXVsdGlEcmFnRWxlbWVudCIsIm11bHRpRHJhZ0tleURvd24iLCJpc011bHRpRHJhZyIsImRlbGF5U3RhcnRHbG9iYWwiLCJkZWxheUVuZGVkIiwic2V0dXBDbG9uZSIsInNvcnRhYmxlSW5kZXgiLCJpbnNlcnRNdWx0aURyYWdDbG9uZXMiLCJzaG93Q2xvbmUiLCJoaWRlQ2xvbmUiLCJfcmVmNSIsImRyYWdTdGFydEdsb2JhbCIsIl9yZWY2IiwibXVsdGlEcmFnIiwiX3JlZjciLCJfdGhpczIiLCJyZW1vdmVNdWx0aURyYWdFbGVtZW50cyIsImRyYWdPdmVyIiwiX3JlZjgiLCJfcmVmOSIsImluc2VydE11bHRpRHJhZ0VsZW1lbnRzIiwiX3JlZjEwIiwiZHJhZ1JlY3RBYnNvbHV0ZSIsImNsb25lc0hpZGRlbkJlZm9yZSIsImRyYWdPdmVyQW5pbWF0aW9uQ2FwdHVyZSIsIl9yZWYxMSIsImRyYWdNYXRyaXgiLCJkcmFnT3ZlckFuaW1hdGlvbkNvbXBsZXRlIiwiX3JlZjEyIiwic2hpZnRLZXkiLCJsYXN0SW5kZXgiLCJjdXJyZW50SW5kZXgiLCJtdWx0aURyYWdJbmRleCIsInVwZGF0ZSIsIm51bGxpbmdHbG9iYWwiLCJkZXN0cm95R2xvYmFsIiwic2hpZnQiLCJzZWxlY3QiLCJkZXNlbGVjdCIsIl90aGlzMyIsIm9sZEluZGljaWVzIiwibmV3SW5kaWNpZXMiLCJjbG9uZXMiLCJ0b0xvd2VyQ2FzZSIsImNsb25lc0luc2VydGVkIiwiZWxlbWVudHNJbnNlcnRlZCJdLCJzb3VyY2VSb290IjoiIn0=