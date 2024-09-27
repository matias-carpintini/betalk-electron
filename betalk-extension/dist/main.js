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
}

.tooltip {
  position: absolute;
  bottom: 50%;
  right: 125%;
  transform: translateY(50%);
  padding: 8px 16px;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  z-index: 10000;
  font-size: 0.8125rem;
  text-shadow: 0 0 1px rgba(var(--shadow-rgb), 0.36);
  color: var(--primary);
  background-color: var(--dropdown-background);
  border-radius: var(--radius-app);
  box-shadow: 0 2px 5px 0 rgba(var(--shadow-rgb), 0.26), 0 2px 10px 0 rgba(var(--shadow-rgb), 0.16);
}

button:hover .tooltip {
  opacity: 1;
}

.tooltip kbd {
  margin-left: 8px;
}`, "",{"version":3,"sources":["webpack://./src/main.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
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
function chatActionButton(
  icon,
  onClick = {},
  classList = "",
  actionName = "",
  shortcutHint = ""
) {
  // Create button element
  const button = document.createElement("button");
  button.className = `xn6xy2s x1qx5ct2 xsgj6o6 xq22nx5 x16dsc37 ${classList}`;
  button.style.width = "20px";
  button.style.opacity = "1";
  button.style.position = "relative"; // Ensure the button is positioned

  // Create span element for icon
  const iconSpan = document.createElement("span");
  iconSpan.className = "material-symbols-outlined";
  iconSpan.textContent = icon;

  // Append the span to the button
  button.appendChild(iconSpan);

  // Set the data-tooltip attribute if actionName or shortcutHint is provided
  if (actionName || shortcutHint) {
    const tooltipContent = `${actionName}${
      shortcutHint ? ` <kbd>${shortcutHint}</kbd>` : ""
    }`;
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.innerHTML = tooltipContent;
    button.appendChild(tooltip);
  }

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

  // Add mousedown and mouseup listeners to stop propagation
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
          <div class="x5yr21d x78zum5 xdt5ytf x6ikm8r x10wlt62" style="overflow-y: auto;">
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
      data-chat-username="${userName}"
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
                      style="width: 20px; opacity: 1; position: relative"
                    >
                      <span class="material-symbols-outlined fill">schedule</span>
                      <div class="tooltip">
                        Remind Me
                        <kbd>H</kbd>
                      </div>
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
          "doneBtn",
          "Mark as Done",
          "E"
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
  document.addEventListener(
    "keydown",
    (event) => {
      if ((0,_utils_domHelpers__WEBPACK_IMPORTED_MODULE_1__.isUserTyping)()) return;

      const currentIndex = _storage__WEBPACK_IMPORTED_MODULE_2__.folders.findIndex(
        (folder) => folder.id === _storage__WEBPACK_IMPORTED_MODULE_2__.currentActiveFolder
      );
      const totalFolders = _storage__WEBPACK_IMPORTED_MODULE_2__.folders.length;

      if (
        event.key === "Tab" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();
        const nextIndex = (currentIndex + 1) % totalFolders;
        (0,_actions__WEBPACK_IMPORTED_MODULE_0__.switchFolder)(_storage__WEBPACK_IMPORTED_MODULE_2__.folders[nextIndex].id);
        document
          .getElementById(`folder-${_storage__WEBPACK_IMPORTED_MODULE_2__.folders[nextIndex].id}`)
          .scrollIntoView({ behavior: "smooth", inline: "center" });
      }

      if (
        event.key === "Tab" &&
        event.shiftKey &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey
      ) {
        event.preventDefault();
        event.stopPropagation();
        const prevIndex = (currentIndex - 1 + totalFolders) % totalFolders;
        (0,_actions__WEBPACK_IMPORTED_MODULE_0__.switchFolder)(_storage__WEBPACK_IMPORTED_MODULE_2__.folders[prevIndex].id);
        document
          .getElementById(`folder-${_storage__WEBPACK_IMPORTED_MODULE_2__.folders[prevIndex].id}`)
          .scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    },
    true
  );
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
        (event.key === "ArrowDown" || event.key === "j") &&
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
        (event.key === "ArrowUp" || event.key === "k") &&
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
          "reminderBtn",
          "Remind Me",
          "H"
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

  (0,_whatsappStore_openDrawerLeft__WEBPACK_IMPORTED_MODULE_1__.openDrawerLeft)(
    (0,_components_drawer__WEBPACK_IMPORTED_MODULE_4__.drawer)("Reminders", chatElements),
    `snoozedChats ${_storage__WEBPACK_IMPORTED_MODULE_2__.snoozedChats.length}`
  );

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLE1BQU0sT0FBTyxXQUFXLEtBQUssT0FBTyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE9BQU8sVUFBVSxNQUFNLFNBQVMsVUFBVSxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLHVCQUF1QjtBQUMvc0U7QUFDQSxp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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxpRkFBZ0I7QUFDMUI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0RBQVk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtEQUFZOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtEQUFZOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtEQUFZOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsb0VBQWlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxxRUFBZ0I7O0FBRTFCO0FBQ0E7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O0FBRWQ7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0VBQWlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCOztBQUU5QixRQUFRLG1GQUFtQjtBQUMzQixRQUFRLCtFQUFtQjtBQUMzQixRQUFRLG1GQUFxQjtBQUM3QixRQUFRLHNGQUFzQjtBQUM5QixRQUFRLHNGQUFzQjtBQUM5QixRQUFRLGtGQUFvQjtBQUM1QixRQUFRLHdGQUF1QjtBQUMvQixRQUFRLGdHQUEyQjs7QUFFbkMsUUFBUSxvRUFBa0I7QUFDMUIsUUFBUSxtRUFBaUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvcnRhYmxlanMvbW9kdWxhci9zb3J0YWJsZS5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnNjc3M/NGU1MyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NoYXRBY3Rpb25CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2hhdE1lbnVJdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb2xkZXJCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2QmFySXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZW1pbmRlckNoYXRJdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9kb25lL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9mb2xkZXJzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL2ZvbGRlcnMvZm9sZGVyRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvZm9sZGVycy9mb2xkZXJzRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvZm9sZGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvZm9sZGVycy9tb3ZlVG9Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9mb2xkZXJzL3Nob3J0Y3V0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvZm9sZGVycy9zdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9mb2xkZXJzL3VpLmpzIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9mb2xkZXJzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9zY2hlZHVsZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3Nob3J0Y3V0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvc2hvcnRjdXRzL2tleWJvYXJkTGlzdGVuZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9zbm9vemVkL2NsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9zbm9vemVkL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9zbm9vemVkL3Nub296ZUNoYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3Nub296ZWQvc25vb3plRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvc25vb3plZC9zbm9vemVkQ2hhdHNEcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL3Nub296ZWQvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvc25vb3plZC91bnNub296ZUNoYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29ic2VydmVycy9jaGF0T25Ib3Zlck9ic2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kb21IZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9lbmhhbmNlVWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2V2ZW50SGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2hhdHNhcHBTdG9yZS9hcmNoaXZlQ2hhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2hhdHNhcHBTdG9yZS9hcmNoaXZlQ2hhdEV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3doYXRzYXBwU3RvcmUvY2hhdHNTeW5jLmpzIiwid2VicGFjazovLy8uL3NyYy93aGF0c2FwcFN0b3JlL2NvbXBvc2VGb2N1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2hhdHNhcHBTdG9yZS9maWx0ZXJDaGF0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2hhdHNhcHBTdG9yZS9mb2N1c0xhc3RNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy93aGF0c2FwcFN0b3JlL2ZvY3VzTmV4dENoYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3doYXRzYXBwU3RvcmUvZm9jdXNQcmV2aW91c0NoYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3doYXRzYXBwU3RvcmUvZm9yd2FyZEZpbHRlckhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3doYXRzYXBwU3RvcmUvZ2V0Q2hhdERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3doYXRzYXBwU3RvcmUvZ2V0Q2hhdEZpYmVyRnJvbURPTS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2hhdHNhcHBTdG9yZS9tYXJrQ2hhdERvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3doYXRzYXBwU3RvcmUvbWVzc2FnZXNMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2hhdHNhcHBTdG9yZS9vcGVuQ29udGV4dE1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3doYXRzYXBwU3RvcmUvb3BlbkRyYXdlckxlZnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3doYXRzYXBwU3RvcmUvcmVxdWVzdE1vdmVUb0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3doYXRzYXBwU3RvcmUvcmVxdWVzdFNub296ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3doYXRzYXBwU3RvcmUvdW5hcmNoaXZlQ2hhdC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiohXG4gKiBTb3J0YWJsZSAxLjE1LjNcbiAqIEBhdXRob3JcdFJ1YmFYYSAgIDx0cmFzaEBydWJheGEub3JnPlxuICogQGF1dGhvclx0b3dlbm0gICAgPG93ZW4yMzM1NUBnbWFpbC5jb20+XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHtcbiAgICAgIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICByZXR1cm4gYXJyMjtcbn1cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbnZhciB2ZXJzaW9uID0gXCIxLjE1LjNcIjtcblxuZnVuY3Rpb24gdXNlckFnZW50KHBhdHRlcm4pIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5uYXZpZ2F0b3IpIHtcbiAgICByZXR1cm4gISEgLypAX19QVVJFX18qL25hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gocGF0dGVybik7XG4gIH1cbn1cbnZhciBJRTExT3JMZXNzID0gdXNlckFnZW50KC8oPzpUcmlkZW50LipydlsgOl0/MTFcXC58bXNpZXxpZW1vYmlsZXxXaW5kb3dzIFBob25lKS9pKTtcbnZhciBFZGdlID0gdXNlckFnZW50KC9FZGdlL2kpO1xudmFyIEZpcmVGb3ggPSB1c2VyQWdlbnQoL2ZpcmVmb3gvaSk7XG52YXIgU2FmYXJpID0gdXNlckFnZW50KC9zYWZhcmkvaSkgJiYgIXVzZXJBZ2VudCgvY2hyb21lL2kpICYmICF1c2VyQWdlbnQoL2FuZHJvaWQvaSk7XG52YXIgSU9TID0gdXNlckFnZW50KC9pUChhZHxvZHxob25lKS9pKTtcbnZhciBDaHJvbWVGb3JBbmRyb2lkID0gdXNlckFnZW50KC9jaHJvbWUvaSkgJiYgdXNlckFnZW50KC9hbmRyb2lkL2kpO1xuXG52YXIgY2FwdHVyZU1vZGUgPSB7XG4gIGNhcHR1cmU6IGZhbHNlLFxuICBwYXNzaXZlOiBmYWxzZVxufTtcbmZ1bmN0aW9uIG9uKGVsLCBldmVudCwgZm4pIHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZm4sICFJRTExT3JMZXNzICYmIGNhcHR1cmVNb2RlKTtcbn1cbmZ1bmN0aW9uIG9mZihlbCwgZXZlbnQsIGZuKSB7XG4gIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuLCAhSUUxMU9yTGVzcyAmJiBjYXB0dXJlTW9kZSk7XG59XG5mdW5jdGlvbiBtYXRjaGVzKCAvKipIVE1MRWxlbWVudCovZWwsIC8qKlN0cmluZyovc2VsZWN0b3IpIHtcbiAgaWYgKCFzZWxlY3RvcikgcmV0dXJuO1xuICBzZWxlY3RvclswXSA9PT0gJz4nICYmIChzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cmluZygxKSk7XG4gIGlmIChlbCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoZWwubWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gZWwubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgICB9IGVsc2UgaWYgKGVsLm1zTWF0Y2hlc1NlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBlbC5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICB9IGVsc2UgaWYgKGVsLndlYmtpdE1hdGNoZXNTZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGdldFBhcmVudE9ySG9zdChlbCkge1xuICByZXR1cm4gZWwuaG9zdCAmJiBlbCAhPT0gZG9jdW1lbnQgJiYgZWwuaG9zdC5ub2RlVHlwZSA/IGVsLmhvc3QgOiBlbC5wYXJlbnROb2RlO1xufVxuZnVuY3Rpb24gY2xvc2VzdCggLyoqSFRNTEVsZW1lbnQqL2VsLCAvKipTdHJpbmcqL3NlbGVjdG9yLCAvKipIVE1MRWxlbWVudCovY3R4LCBpbmNsdWRlQ1RYKSB7XG4gIGlmIChlbCkge1xuICAgIGN0eCA9IGN0eCB8fCBkb2N1bWVudDtcbiAgICBkbyB7XG4gICAgICBpZiAoc2VsZWN0b3IgIT0gbnVsbCAmJiAoc2VsZWN0b3JbMF0gPT09ICc+JyA/IGVsLnBhcmVudE5vZGUgPT09IGN0eCAmJiBtYXRjaGVzKGVsLCBzZWxlY3RvcikgOiBtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHx8IGluY2x1ZGVDVFggJiYgZWwgPT09IGN0eCkge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgICBpZiAoZWwgPT09IGN0eCkgYnJlYWs7XG4gICAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gICAgfSB3aGlsZSAoZWwgPSBnZXRQYXJlbnRPckhvc3QoZWwpKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbnZhciBSX1NQQUNFID0gL1xccysvZztcbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsLCBuYW1lLCBzdGF0ZSkge1xuICBpZiAoZWwgJiYgbmFtZSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsLmNsYXNzTGlzdFtzdGF0ZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykucmVwbGFjZShSX1NQQUNFLCAnICcpLnJlcGxhY2UoJyAnICsgbmFtZSArICcgJywgJyAnKTtcbiAgICAgIGVsLmNsYXNzTmFtZSA9IChjbGFzc05hbWUgKyAoc3RhdGUgPyAnICcgKyBuYW1lIDogJycpKS5yZXBsYWNlKFJfU1BBQ0UsICcgJyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjc3MoZWwsIHByb3AsIHZhbCkge1xuICB2YXIgc3R5bGUgPSBlbCAmJiBlbC5zdHlsZTtcbiAgaWYgKHN0eWxlKSB7XG4gICAgaWYgKHZhbCA9PT0gdm9pZCAwKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuZGVmYXVsdFZpZXcgJiYgZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgICAgICB2YWwgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsLCAnJyk7XG4gICAgICB9IGVsc2UgaWYgKGVsLmN1cnJlbnRTdHlsZSkge1xuICAgICAgICB2YWwgPSBlbC5jdXJyZW50U3R5bGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvcCA9PT0gdm9pZCAwID8gdmFsIDogdmFsW3Byb3BdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIShwcm9wIGluIHN0eWxlKSAmJiBwcm9wLmluZGV4T2YoJ3dlYmtpdCcpID09PSAtMSkge1xuICAgICAgICBwcm9wID0gJy13ZWJraXQtJyArIHByb3A7XG4gICAgICB9XG4gICAgICBzdHlsZVtwcm9wXSA9IHZhbCArICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/ICcnIDogJ3B4Jyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBtYXRyaXgoZWwsIHNlbGZPbmx5KSB7XG4gIHZhciBhcHBsaWVkVHJhbnNmb3JtcyA9ICcnO1xuICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgIGFwcGxpZWRUcmFuc2Zvcm1zID0gZWw7XG4gIH0gZWxzZSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRyYW5zZm9ybSA9IGNzcyhlbCwgJ3RyYW5zZm9ybScpO1xuICAgICAgaWYgKHRyYW5zZm9ybSAmJiB0cmFuc2Zvcm0gIT09ICdub25lJykge1xuICAgICAgICBhcHBsaWVkVHJhbnNmb3JtcyA9IHRyYW5zZm9ybSArICcgJyArIGFwcGxpZWRUcmFuc2Zvcm1zO1xuICAgICAgfVxuICAgICAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuICAgIH0gd2hpbGUgKCFzZWxmT25seSAmJiAoZWwgPSBlbC5wYXJlbnROb2RlKSk7XG4gIH1cbiAgdmFyIG1hdHJpeEZuID0gd2luZG93LkRPTU1hdHJpeCB8fCB3aW5kb3cuV2ViS2l0Q1NTTWF0cml4IHx8IHdpbmRvdy5DU1NNYXRyaXggfHwgd2luZG93Lk1TQ1NTTWF0cml4O1xuICAvKmpzaGludCAtVzA1NiAqL1xuICByZXR1cm4gbWF0cml4Rm4gJiYgbmV3IG1hdHJpeEZuKGFwcGxpZWRUcmFuc2Zvcm1zKTtcbn1cbmZ1bmN0aW9uIGZpbmQoY3R4LCB0YWdOYW1lLCBpdGVyYXRvcikge1xuICBpZiAoY3R4KSB7XG4gICAgdmFyIGxpc3QgPSBjdHguZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSksXG4gICAgICBpID0gMCxcbiAgICAgIG4gPSBsaXN0Lmxlbmd0aDtcbiAgICBpZiAoaXRlcmF0b3IpIHtcbiAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGl0ZXJhdG9yKGxpc3RbaV0sIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuICByZXR1cm4gW107XG59XG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkge1xuICB2YXIgc2Nyb2xsaW5nRWxlbWVudCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQ7XG4gIGlmIChzY3JvbGxpbmdFbGVtZW50KSB7XG4gICAgcmV0dXJuIHNjcm9sbGluZ0VsZW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxufVxuXG4vKipcclxuICogUmV0dXJucyB0aGUgXCJib3VuZGluZyBjbGllbnQgcmVjdFwiIG9mIGdpdmVuIGVsZW1lbnRcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgICAgICAgICAgICAgICAgICAgICBUaGUgZWxlbWVudCB3aG9zZSBib3VuZGluZ0NsaWVudFJlY3QgaXMgd2FudGVkXHJcbiAqIEBwYXJhbSAge1tCb29sZWFuXX0gcmVsYXRpdmVUb0NvbnRhaW5pbmdCbG9jayAgV2hldGhlciB0aGUgcmVjdCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGNvbnRhaW5pbmcgYmxvY2sgb2YgKGluY2x1ZGluZykgdGhlIGNvbnRhaW5lclxyXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IHJlbGF0aXZlVG9Ob25TdGF0aWNQYXJlbnQgIFdoZXRoZXIgdGhlIHJlY3Qgc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSByZWxhdGl2ZSBwYXJlbnQgb2YgKGluY2x1ZGluZykgdGhlIGNvbnRhaWVuclxyXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IHVuZG9TY2FsZSAgICAgICAgICAgICAgICAgIFdoZXRoZXIgdGhlIGNvbnRhaW5lcidzIHNjYWxlKCkgc2hvdWxkIGJlIHVuZG9uZVxyXG4gKiBAcGFyYW0gIHtbSFRNTEVsZW1lbnRdfSBjb250YWluZXIgICAgICAgICAgICAgIFRoZSBwYXJlbnQgdGhlIGVsZW1lbnQgd2lsbCBiZSBwbGFjZWQgaW5cclxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgYm91bmRpbmdDbGllbnRSZWN0IG9mIGVsLCB3aXRoIHNwZWNpZmllZCBhZGp1c3RtZW50c1xyXG4gKi9cbmZ1bmN0aW9uIGdldFJlY3QoZWwsIHJlbGF0aXZlVG9Db250YWluaW5nQmxvY2ssIHJlbGF0aXZlVG9Ob25TdGF0aWNQYXJlbnQsIHVuZG9TY2FsZSwgY29udGFpbmVyKSB7XG4gIGlmICghZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICYmIGVsICE9PSB3aW5kb3cpIHJldHVybjtcbiAgdmFyIGVsUmVjdCwgdG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0LCBoZWlnaHQsIHdpZHRoO1xuICBpZiAoZWwgIT09IHdpbmRvdyAmJiBlbC5wYXJlbnROb2RlICYmIGVsICE9PSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkpIHtcbiAgICBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0b3AgPSBlbFJlY3QudG9wO1xuICAgIGxlZnQgPSBlbFJlY3QubGVmdDtcbiAgICBib3R0b20gPSBlbFJlY3QuYm90dG9tO1xuICAgIHJpZ2h0ID0gZWxSZWN0LnJpZ2h0O1xuICAgIGhlaWdodCA9IGVsUmVjdC5oZWlnaHQ7XG4gICAgd2lkdGggPSBlbFJlY3Qud2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgdG9wID0gMDtcbiAgICBsZWZ0ID0gMDtcbiAgICBib3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgcmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuICBpZiAoKHJlbGF0aXZlVG9Db250YWluaW5nQmxvY2sgfHwgcmVsYXRpdmVUb05vblN0YXRpY1BhcmVudCkgJiYgZWwgIT09IHdpbmRvdykge1xuICAgIC8vIEFkanVzdCBmb3IgdHJhbnNsYXRlKClcbiAgICBjb250YWluZXIgPSBjb250YWluZXIgfHwgZWwucGFyZW50Tm9kZTtcblxuICAgIC8vIHNvbHZlcyAjMTEyMyAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzc5NTM4MDYvNjA4ODMxMilcbiAgICAvLyBOb3QgbmVlZGVkIG9uIDw9IElFMTFcbiAgICBpZiAoIUlFMTFPckxlc3MpIHtcbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICYmIChjc3MoY29udGFpbmVyLCAndHJhbnNmb3JtJykgIT09ICdub25lJyB8fCByZWxhdGl2ZVRvTm9uU3RhdGljUGFyZW50ICYmIGNzcyhjb250YWluZXIsICdwb3NpdGlvbicpICE9PSAnc3RhdGljJykpIHtcbiAgICAgICAgICB2YXIgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgIC8vIFNldCByZWxhdGl2ZSB0byBlZGdlcyBvZiBwYWRkaW5nIGJveCBvZiBjb250YWluZXJcbiAgICAgICAgICB0b3AgLT0gY29udGFpbmVyUmVjdC50b3AgKyBwYXJzZUludChjc3MoY29udGFpbmVyLCAnYm9yZGVyLXRvcC13aWR0aCcpKTtcbiAgICAgICAgICBsZWZ0IC09IGNvbnRhaW5lclJlY3QubGVmdCArIHBhcnNlSW50KGNzcyhjb250YWluZXIsICdib3JkZXItbGVmdC13aWR0aCcpKTtcbiAgICAgICAgICBib3R0b20gPSB0b3AgKyBlbFJlY3QuaGVpZ2h0O1xuICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIGVsUmVjdC53aWR0aDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gICAgICB9IHdoaWxlIChjb250YWluZXIgPSBjb250YWluZXIucGFyZW50Tm9kZSk7XG4gICAgfVxuICB9XG4gIGlmICh1bmRvU2NhbGUgJiYgZWwgIT09IHdpbmRvdykge1xuICAgIC8vIEFkanVzdCBmb3Igc2NhbGUoKVxuICAgIHZhciBlbE1hdHJpeCA9IG1hdHJpeChjb250YWluZXIgfHwgZWwpLFxuICAgICAgc2NhbGVYID0gZWxNYXRyaXggJiYgZWxNYXRyaXguYSxcbiAgICAgIHNjYWxlWSA9IGVsTWF0cml4ICYmIGVsTWF0cml4LmQ7XG4gICAgaWYgKGVsTWF0cml4KSB7XG4gICAgICB0b3AgLz0gc2NhbGVZO1xuICAgICAgbGVmdCAvPSBzY2FsZVg7XG4gICAgICB3aWR0aCAvPSBzY2FsZVg7XG4gICAgICBoZWlnaHQgLz0gc2NhbGVZO1xuICAgICAgYm90dG9tID0gdG9wICsgaGVpZ2h0O1xuICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGg7XG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgdG9wOiB0b3AsXG4gICAgbGVmdDogbGVmdCxcbiAgICBib3R0b206IGJvdHRvbSxcbiAgICByaWdodDogcmlnaHQsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59XG5cbi8qKlxyXG4gKiBDaGVja3MgaWYgYSBzaWRlIG9mIGFuIGVsZW1lbnQgaXMgc2Nyb2xsZWQgcGFzdCBhIHNpZGUgb2YgaXRzIHBhcmVudHNcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9ICBlbCAgICAgICAgICAgVGhlIGVsZW1lbnQgd2hvJ3Mgc2lkZSBiZWluZyBzY3JvbGxlZCBvdXQgb2YgdmlldyBpcyBpbiBxdWVzdGlvblxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgICAgIGVsU2lkZSAgICAgICBTaWRlIG9mIHRoZSBlbGVtZW50IGluIHF1ZXN0aW9uICgndG9wJywgJ2xlZnQnLCAncmlnaHQnLCAnYm90dG9tJylcclxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgICBwYXJlbnRTaWRlICAgU2lkZSBvZiB0aGUgcGFyZW50IGluIHF1ZXN0aW9uICgndG9wJywgJ2xlZnQnLCAncmlnaHQnLCAnYm90dG9tJylcclxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9ICAgICAgICAgICAgICAgVGhlIHBhcmVudCBzY3JvbGwgZWxlbWVudCB0aGF0IHRoZSBlbCdzIHNpZGUgaXMgc2Nyb2xsZWQgcGFzdCwgb3IgbnVsbCBpZiB0aGVyZSBpcyBubyBzdWNoIGVsZW1lbnRcclxuICovXG5mdW5jdGlvbiBpc1Njcm9sbGVkUGFzdChlbCwgZWxTaWRlLCBwYXJlbnRTaWRlKSB7XG4gIHZhciBwYXJlbnQgPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbCwgdHJ1ZSksXG4gICAgZWxTaWRlVmFsID0gZ2V0UmVjdChlbClbZWxTaWRlXTtcblxuICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gIHdoaWxlIChwYXJlbnQpIHtcbiAgICB2YXIgcGFyZW50U2lkZVZhbCA9IGdldFJlY3QocGFyZW50KVtwYXJlbnRTaWRlXSxcbiAgICAgIHZpc2libGUgPSB2b2lkIDA7XG4gICAgaWYgKHBhcmVudFNpZGUgPT09ICd0b3AnIHx8IHBhcmVudFNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgdmlzaWJsZSA9IGVsU2lkZVZhbCA+PSBwYXJlbnRTaWRlVmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aXNpYmxlID0gZWxTaWRlVmFsIDw9IHBhcmVudFNpZGVWYWw7XG4gICAgfVxuICAgIGlmICghdmlzaWJsZSkgcmV0dXJuIHBhcmVudDtcbiAgICBpZiAocGFyZW50ID09PSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkpIGJyZWFrO1xuICAgIHBhcmVudCA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KHBhcmVudCwgZmFsc2UpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXHJcbiAqIEdldHMgbnRoIGNoaWxkIG9mIGVsLCBpZ25vcmluZyBoaWRkZW4gY2hpbGRyZW4sIHNvcnRhYmxlJ3MgZWxlbWVudHMgKGRvZXMgbm90IGlnbm9yZSBjbG9uZSBpZiBpdCdzIHZpc2libGUpXHJcbiAqIGFuZCBub24tZHJhZ2dhYmxlIGVsZW1lbnRzXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICAgICBUaGUgcGFyZW50IGVsZW1lbnRcclxuICogQHBhcmFtICB7TnVtYmVyfSBjaGlsZE51bSAgICAgIFRoZSBpbmRleCBvZiB0aGUgY2hpbGRcclxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zICAgICAgIFBhcmVudCBTb3J0YWJsZSdzIG9wdGlvbnNcclxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9ICAgICAgICAgIFRoZSBjaGlsZCBhdCBpbmRleCBjaGlsZE51bSwgb3IgbnVsbCBpZiBub3QgZm91bmRcclxuICovXG5mdW5jdGlvbiBnZXRDaGlsZChlbCwgY2hpbGROdW0sIG9wdGlvbnMsIGluY2x1ZGVEcmFnRWwpIHtcbiAgdmFyIGN1cnJlbnRDaGlsZCA9IDAsXG4gICAgaSA9IDAsXG4gICAgY2hpbGRyZW4gPSBlbC5jaGlsZHJlbjtcbiAgd2hpbGUgKGkgPCBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICBpZiAoY2hpbGRyZW5baV0uc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmIGNoaWxkcmVuW2ldICE9PSBTb3J0YWJsZS5naG9zdCAmJiAoaW5jbHVkZURyYWdFbCB8fCBjaGlsZHJlbltpXSAhPT0gU29ydGFibGUuZHJhZ2dlZCkgJiYgY2xvc2VzdChjaGlsZHJlbltpXSwgb3B0aW9ucy5kcmFnZ2FibGUsIGVsLCBmYWxzZSkpIHtcbiAgICAgIGlmIChjdXJyZW50Q2hpbGQgPT09IGNoaWxkTnVtKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbltpXTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRDaGlsZCsrO1xuICAgIH1cbiAgICBpKys7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxyXG4gKiBHZXRzIHRoZSBsYXN0IGNoaWxkIGluIHRoZSBlbCwgaWdub3JpbmcgZ2hvc3RFbCBvciBpbnZpc2libGUgZWxlbWVudHMgKGNsb25lcylcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgICAgIFBhcmVudCBlbGVtZW50XHJcbiAqIEBwYXJhbSAge3NlbGVjdG9yfSBzZWxlY3RvciAgICBBbnkgb3RoZXIgZWxlbWVudHMgdGhhdCBzaG91bGQgYmUgaWdub3JlZFxyXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICAgICAgICAgVGhlIGxhc3QgY2hpbGQsIGlnbm9yaW5nIGdob3N0RWxcclxuICovXG5mdW5jdGlvbiBsYXN0Q2hpbGQoZWwsIHNlbGVjdG9yKSB7XG4gIHZhciBsYXN0ID0gZWwubGFzdEVsZW1lbnRDaGlsZDtcbiAgd2hpbGUgKGxhc3QgJiYgKGxhc3QgPT09IFNvcnRhYmxlLmdob3N0IHx8IGNzcyhsYXN0LCAnZGlzcGxheScpID09PSAnbm9uZScgfHwgc2VsZWN0b3IgJiYgIW1hdGNoZXMobGFzdCwgc2VsZWN0b3IpKSkge1xuICAgIGxhc3QgPSBsYXN0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gIH1cbiAgcmV0dXJuIGxhc3QgfHwgbnVsbDtcbn1cblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGluZGV4IG9mIGFuIGVsZW1lbnQgd2l0aGluIGl0cyBwYXJlbnQgZm9yIGEgc2VsZWN0ZWQgc2V0IG9mXHJcbiAqIGVsZW1lbnRzXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbFxyXG4gKiBAcGFyYW0gIHtzZWxlY3Rvcn0gc2VsZWN0b3JcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cbmZ1bmN0aW9uIGluZGV4KGVsLCBzZWxlY3Rvcikge1xuICB2YXIgaW5kZXggPSAwO1xuICBpZiAoIWVsIHx8ICFlbC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuICB3aGlsZSAoZWwgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgaWYgKGVsLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdURU1QTEFURScgJiYgZWwgIT09IFNvcnRhYmxlLmNsb25lICYmICghc2VsZWN0b3IgfHwgbWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSkge1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZGV4O1xufVxuXG4vKipcclxuICogUmV0dXJucyB0aGUgc2Nyb2xsIG9mZnNldCBvZiB0aGUgZ2l2ZW4gZWxlbWVudCwgYWRkZWQgd2l0aCBhbGwgdGhlIHNjcm9sbCBvZmZzZXRzIG9mIHBhcmVudCBlbGVtZW50cy5cclxuICogVGhlIHZhbHVlIGlzIHJldHVybmVkIGluIHJlYWwgcGl4ZWxzLlxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxcclxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgIE9mZnNldHMgaW4gdGhlIGZvcm1hdCBvZiBbbGVmdCwgdG9wXVxyXG4gKi9cbmZ1bmN0aW9uIGdldFJlbGF0aXZlU2Nyb2xsT2Zmc2V0KGVsKSB7XG4gIHZhciBvZmZzZXRMZWZ0ID0gMCxcbiAgICBvZmZzZXRUb3AgPSAwLFxuICAgIHdpblNjcm9sbGVyID0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICBpZiAoZWwpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgZWxNYXRyaXggPSBtYXRyaXgoZWwpLFxuICAgICAgICBzY2FsZVggPSBlbE1hdHJpeC5hLFxuICAgICAgICBzY2FsZVkgPSBlbE1hdHJpeC5kO1xuICAgICAgb2Zmc2V0TGVmdCArPSBlbC5zY3JvbGxMZWZ0ICogc2NhbGVYO1xuICAgICAgb2Zmc2V0VG9wICs9IGVsLnNjcm9sbFRvcCAqIHNjYWxlWTtcbiAgICB9IHdoaWxlIChlbCAhPT0gd2luU2Nyb2xsZXIgJiYgKGVsID0gZWwucGFyZW50Tm9kZSkpO1xuICB9XG4gIHJldHVybiBbb2Zmc2V0TGVmdCwgb2Zmc2V0VG9wXTtcbn1cblxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBvYmplY3Qgd2l0aGluIHRoZSBnaXZlbiBhcnJheVxyXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyICAgQXJyYXkgdGhhdCBtYXkgb3IgbWF5IG5vdCBob2xkIHRoZSBvYmplY3RcclxuICogQHBhcmFtICB7T2JqZWN0fSBvYmogIEFuIG9iamVjdCB0aGF0IGhhcyBhIGtleS12YWx1ZSBwYWlyIHVuaXF1ZSB0byBhbmQgaWRlbnRpY2FsIHRvIGEga2V5LXZhbHVlIHBhaXIgaW4gdGhlIG9iamVjdCB5b3Ugd2FudCB0byBmaW5kXHJcbiAqIEByZXR1cm4ge051bWJlcn0gICAgICBUaGUgaW5kZXggb2YgdGhlIG9iamVjdCBpbiB0aGUgYXJyYXksIG9yIC0xXHJcbiAqL1xuZnVuY3Rpb24gaW5kZXhPZk9iamVjdChhcnIsIG9iaikge1xuICBmb3IgKHZhciBpIGluIGFycikge1xuICAgIGlmICghYXJyLmhhc093blByb3BlcnR5KGkpKSBjb250aW51ZTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkgJiYgb2JqW2tleV0gPT09IGFycltpXVtrZXldKSByZXR1cm4gTnVtYmVyKGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5mdW5jdGlvbiBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbCwgaW5jbHVkZVNlbGYpIHtcbiAgLy8gc2tpcCB0byB3aW5kb3dcbiAgaWYgKCFlbCB8fCAhZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSByZXR1cm4gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICB2YXIgZWxlbSA9IGVsO1xuICB2YXIgZ290U2VsZiA9IGZhbHNlO1xuICBkbyB7XG4gICAgLy8gd2UgZG9uJ3QgbmVlZCB0byBnZXQgZWxlbSBjc3MgaWYgaXQgaXNuJ3QgZXZlbiBvdmVyZmxvd2luZyBpbiB0aGUgZmlyc3QgcGxhY2UgKHBlcmZvcm1hbmNlKVxuICAgIGlmIChlbGVtLmNsaWVudFdpZHRoIDwgZWxlbS5zY3JvbGxXaWR0aCB8fCBlbGVtLmNsaWVudEhlaWdodCA8IGVsZW0uc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICB2YXIgZWxlbUNTUyA9IGNzcyhlbGVtKTtcbiAgICAgIGlmIChlbGVtLmNsaWVudFdpZHRoIDwgZWxlbS5zY3JvbGxXaWR0aCAmJiAoZWxlbUNTUy5vdmVyZmxvd1ggPT0gJ2F1dG8nIHx8IGVsZW1DU1Mub3ZlcmZsb3dYID09ICdzY3JvbGwnKSB8fCBlbGVtLmNsaWVudEhlaWdodCA8IGVsZW0uc2Nyb2xsSGVpZ2h0ICYmIChlbGVtQ1NTLm92ZXJmbG93WSA9PSAnYXV0bycgfHwgZWxlbUNTUy5vdmVyZmxvd1kgPT0gJ3Njcm9sbCcpKSB7XG4gICAgICAgIGlmICghZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgfHwgZWxlbSA9PT0gZG9jdW1lbnQuYm9keSkgcmV0dXJuIGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbiAgICAgICAgaWYgKGdvdFNlbGYgfHwgaW5jbHVkZVNlbGYpIHJldHVybiBlbGVtO1xuICAgICAgICBnb3RTZWxmID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuICB9IHdoaWxlIChlbGVtID0gZWxlbS5wYXJlbnROb2RlKTtcbiAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbn1cbmZ1bmN0aW9uIGV4dGVuZChkc3QsIHNyYykge1xuICBpZiAoZHN0ICYmIHNyYykge1xuICAgIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBkc3Rba2V5XSA9IHNyY1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZHN0O1xufVxuZnVuY3Rpb24gaXNSZWN0RXF1YWwocmVjdDEsIHJlY3QyKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHJlY3QxLnRvcCkgPT09IE1hdGgucm91bmQocmVjdDIudG9wKSAmJiBNYXRoLnJvdW5kKHJlY3QxLmxlZnQpID09PSBNYXRoLnJvdW5kKHJlY3QyLmxlZnQpICYmIE1hdGgucm91bmQocmVjdDEuaGVpZ2h0KSA9PT0gTWF0aC5yb3VuZChyZWN0Mi5oZWlnaHQpICYmIE1hdGgucm91bmQocmVjdDEud2lkdGgpID09PSBNYXRoLnJvdW5kKHJlY3QyLndpZHRoKTtcbn1cbnZhciBfdGhyb3R0bGVUaW1lb3V0O1xuZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2ssIG1zKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFfdGhyb3R0bGVUaW1lb3V0KSB7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgX3RoaXMgPSB0aGlzO1xuICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwoX3RoaXMsIGFyZ3NbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2suYXBwbHkoX3RoaXMsIGFyZ3MpO1xuICAgICAgfVxuICAgICAgX3Rocm90dGxlVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhyb3R0bGVUaW1lb3V0ID0gdm9pZCAwO1xuICAgICAgfSwgbXMpO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGNhbmNlbFRocm90dGxlKCkge1xuICBjbGVhclRpbWVvdXQoX3Rocm90dGxlVGltZW91dCk7XG4gIF90aHJvdHRsZVRpbWVvdXQgPSB2b2lkIDA7XG59XG5mdW5jdGlvbiBzY3JvbGxCeShlbCwgeCwgeSkge1xuICBlbC5zY3JvbGxMZWZ0ICs9IHg7XG4gIGVsLnNjcm9sbFRvcCArPSB5O1xufVxuZnVuY3Rpb24gY2xvbmUoZWwpIHtcbiAgdmFyIFBvbHltZXIgPSB3aW5kb3cuUG9seW1lcjtcbiAgdmFyICQgPSB3aW5kb3cualF1ZXJ5IHx8IHdpbmRvdy5aZXB0bztcbiAgaWYgKFBvbHltZXIgJiYgUG9seW1lci5kb20pIHtcbiAgICByZXR1cm4gUG9seW1lci5kb20oZWwpLmNsb25lTm9kZSh0cnVlKTtcbiAgfSBlbHNlIGlmICgkKSB7XG4gICAgcmV0dXJuICQoZWwpLmNsb25lKHRydWUpWzBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlbC5jbG9uZU5vZGUodHJ1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldFJlY3QoZWwsIHJlY3QpIHtcbiAgY3NzKGVsLCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgY3NzKGVsLCAndG9wJywgcmVjdC50b3ApO1xuICBjc3MoZWwsICdsZWZ0JywgcmVjdC5sZWZ0KTtcbiAgY3NzKGVsLCAnd2lkdGgnLCByZWN0LndpZHRoKTtcbiAgY3NzKGVsLCAnaGVpZ2h0JywgcmVjdC5oZWlnaHQpO1xufVxuZnVuY3Rpb24gdW5zZXRSZWN0KGVsKSB7XG4gIGNzcyhlbCwgJ3Bvc2l0aW9uJywgJycpO1xuICBjc3MoZWwsICd0b3AnLCAnJyk7XG4gIGNzcyhlbCwgJ2xlZnQnLCAnJyk7XG4gIGNzcyhlbCwgJ3dpZHRoJywgJycpO1xuICBjc3MoZWwsICdoZWlnaHQnLCAnJyk7XG59XG5mdW5jdGlvbiBnZXRDaGlsZENvbnRhaW5pbmdSZWN0RnJvbUVsZW1lbnQoY29udGFpbmVyLCBvcHRpb25zLCBnaG9zdEVsKSB7XG4gIHZhciByZWN0ID0ge307XG4gIEFycmF5LmZyb20oY29udGFpbmVyLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHZhciBfcmVjdCRsZWZ0LCBfcmVjdCR0b3AsIF9yZWN0JHJpZ2h0LCBfcmVjdCRib3R0b207XG4gICAgaWYgKCFjbG9zZXN0KGNoaWxkLCBvcHRpb25zLmRyYWdnYWJsZSwgY29udGFpbmVyLCBmYWxzZSkgfHwgY2hpbGQuYW5pbWF0ZWQgfHwgY2hpbGQgPT09IGdob3N0RWwpIHJldHVybjtcbiAgICB2YXIgY2hpbGRSZWN0ID0gZ2V0UmVjdChjaGlsZCk7XG4gICAgcmVjdC5sZWZ0ID0gTWF0aC5taW4oKF9yZWN0JGxlZnQgPSByZWN0LmxlZnQpICE9PSBudWxsICYmIF9yZWN0JGxlZnQgIT09IHZvaWQgMCA/IF9yZWN0JGxlZnQgOiBJbmZpbml0eSwgY2hpbGRSZWN0LmxlZnQpO1xuICAgIHJlY3QudG9wID0gTWF0aC5taW4oKF9yZWN0JHRvcCA9IHJlY3QudG9wKSAhPT0gbnVsbCAmJiBfcmVjdCR0b3AgIT09IHZvaWQgMCA/IF9yZWN0JHRvcCA6IEluZmluaXR5LCBjaGlsZFJlY3QudG9wKTtcbiAgICByZWN0LnJpZ2h0ID0gTWF0aC5tYXgoKF9yZWN0JHJpZ2h0ID0gcmVjdC5yaWdodCkgIT09IG51bGwgJiYgX3JlY3QkcmlnaHQgIT09IHZvaWQgMCA/IF9yZWN0JHJpZ2h0IDogLUluZmluaXR5LCBjaGlsZFJlY3QucmlnaHQpO1xuICAgIHJlY3QuYm90dG9tID0gTWF0aC5tYXgoKF9yZWN0JGJvdHRvbSA9IHJlY3QuYm90dG9tKSAhPT0gbnVsbCAmJiBfcmVjdCRib3R0b20gIT09IHZvaWQgMCA/IF9yZWN0JGJvdHRvbSA6IC1JbmZpbml0eSwgY2hpbGRSZWN0LmJvdHRvbSk7XG4gIH0pO1xuICByZWN0LndpZHRoID0gcmVjdC5yaWdodCAtIHJlY3QubGVmdDtcbiAgcmVjdC5oZWlnaHQgPSByZWN0LmJvdHRvbSAtIHJlY3QudG9wO1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cbnZhciBleHBhbmRvID0gJ1NvcnRhYmxlJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG5mdW5jdGlvbiBBbmltYXRpb25TdGF0ZU1hbmFnZXIoKSB7XG4gIHZhciBhbmltYXRpb25TdGF0ZXMgPSBbXSxcbiAgICBhbmltYXRpb25DYWxsYmFja0lkO1xuICByZXR1cm4ge1xuICAgIGNhcHR1cmVBbmltYXRpb25TdGF0ZTogZnVuY3Rpb24gY2FwdHVyZUFuaW1hdGlvblN0YXRlKCkge1xuICAgICAgYW5pbWF0aW9uU3RhdGVzID0gW107XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5hbmltYXRpb24pIHJldHVybjtcbiAgICAgIHZhciBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwodGhpcy5lbC5jaGlsZHJlbik7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY3NzKGNoaWxkLCAnZGlzcGxheScpID09PSAnbm9uZScgfHwgY2hpbGQgPT09IFNvcnRhYmxlLmdob3N0KSByZXR1cm47XG4gICAgICAgIGFuaW1hdGlvblN0YXRlcy5wdXNoKHtcbiAgICAgICAgICB0YXJnZXQ6IGNoaWxkLFxuICAgICAgICAgIHJlY3Q6IGdldFJlY3QoY2hpbGQpXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZnJvbVJlY3QgPSBfb2JqZWN0U3ByZWFkMih7fSwgYW5pbWF0aW9uU3RhdGVzW2FuaW1hdGlvblN0YXRlcy5sZW5ndGggLSAxXS5yZWN0KTtcblxuICAgICAgICAvLyBJZiBhbmltYXRpbmc6IGNvbXBlbnNhdGUgZm9yIGN1cnJlbnQgYW5pbWF0aW9uXG4gICAgICAgIGlmIChjaGlsZC50aGlzQW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgICB2YXIgY2hpbGRNYXRyaXggPSBtYXRyaXgoY2hpbGQsIHRydWUpO1xuICAgICAgICAgIGlmIChjaGlsZE1hdHJpeCkge1xuICAgICAgICAgICAgZnJvbVJlY3QudG9wIC09IGNoaWxkTWF0cml4LmY7XG4gICAgICAgICAgICBmcm9tUmVjdC5sZWZ0IC09IGNoaWxkTWF0cml4LmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNoaWxkLmZyb21SZWN0ID0gZnJvbVJlY3Q7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFkZEFuaW1hdGlvblN0YXRlOiBmdW5jdGlvbiBhZGRBbmltYXRpb25TdGF0ZShzdGF0ZSkge1xuICAgICAgYW5pbWF0aW9uU3RhdGVzLnB1c2goc3RhdGUpO1xuICAgIH0sXG4gICAgcmVtb3ZlQW5pbWF0aW9uU3RhdGU6IGZ1bmN0aW9uIHJlbW92ZUFuaW1hdGlvblN0YXRlKHRhcmdldCkge1xuICAgICAgYW5pbWF0aW9uU3RhdGVzLnNwbGljZShpbmRleE9mT2JqZWN0KGFuaW1hdGlvblN0YXRlcywge1xuICAgICAgICB0YXJnZXQ6IHRhcmdldFxuICAgICAgfSksIDEpO1xuICAgIH0sXG4gICAgYW5pbWF0ZUFsbDogZnVuY3Rpb24gYW5pbWF0ZUFsbChjYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLmFuaW1hdGlvbikge1xuICAgICAgICBjbGVhclRpbWVvdXQoYW5pbWF0aW9uQ2FsbGJhY2tJZCk7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBhbmltYXRpbmcgPSBmYWxzZSxcbiAgICAgICAgYW5pbWF0aW9uVGltZSA9IDA7XG4gICAgICBhbmltYXRpb25TdGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIHRpbWUgPSAwLFxuICAgICAgICAgIHRhcmdldCA9IHN0YXRlLnRhcmdldCxcbiAgICAgICAgICBmcm9tUmVjdCA9IHRhcmdldC5mcm9tUmVjdCxcbiAgICAgICAgICB0b1JlY3QgPSBnZXRSZWN0KHRhcmdldCksXG4gICAgICAgICAgcHJldkZyb21SZWN0ID0gdGFyZ2V0LnByZXZGcm9tUmVjdCxcbiAgICAgICAgICBwcmV2VG9SZWN0ID0gdGFyZ2V0LnByZXZUb1JlY3QsXG4gICAgICAgICAgYW5pbWF0aW5nUmVjdCA9IHN0YXRlLnJlY3QsXG4gICAgICAgICAgdGFyZ2V0TWF0cml4ID0gbWF0cml4KHRhcmdldCwgdHJ1ZSk7XG4gICAgICAgIGlmICh0YXJnZXRNYXRyaXgpIHtcbiAgICAgICAgICAvLyBDb21wZW5zYXRlIGZvciBjdXJyZW50IGFuaW1hdGlvblxuICAgICAgICAgIHRvUmVjdC50b3AgLT0gdGFyZ2V0TWF0cml4LmY7XG4gICAgICAgICAgdG9SZWN0LmxlZnQgLT0gdGFyZ2V0TWF0cml4LmU7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0LnRvUmVjdCA9IHRvUmVjdDtcbiAgICAgICAgaWYgKHRhcmdldC50aGlzQW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICAgICAgICAvLyBDb3VsZCBhbHNvIGNoZWNrIGlmIGFuaW1hdGluZ1JlY3QgaXMgYmV0d2VlbiBmcm9tUmVjdCBhbmQgdG9SZWN0XG4gICAgICAgICAgaWYgKGlzUmVjdEVxdWFsKHByZXZGcm9tUmVjdCwgdG9SZWN0KSAmJiAhaXNSZWN0RXF1YWwoZnJvbVJlY3QsIHRvUmVjdCkgJiZcbiAgICAgICAgICAvLyBNYWtlIHN1cmUgYW5pbWF0aW5nUmVjdCBpcyBvbiBsaW5lIGJldHdlZW4gdG9SZWN0ICYgZnJvbVJlY3RcbiAgICAgICAgICAoYW5pbWF0aW5nUmVjdC50b3AgLSB0b1JlY3QudG9wKSAvIChhbmltYXRpbmdSZWN0LmxlZnQgLSB0b1JlY3QubGVmdCkgPT09IChmcm9tUmVjdC50b3AgLSB0b1JlY3QudG9wKSAvIChmcm9tUmVjdC5sZWZ0IC0gdG9SZWN0LmxlZnQpKSB7XG4gICAgICAgICAgICAvLyBJZiByZXR1cm5pbmcgdG8gc2FtZSBwbGFjZSBhcyBzdGFydGVkIGZyb20gYW5pbWF0aW9uIGFuZCBvbiBzYW1lIGF4aXNcbiAgICAgICAgICAgIHRpbWUgPSBjYWxjdWxhdGVSZWFsVGltZShhbmltYXRpbmdSZWN0LCBwcmV2RnJvbVJlY3QsIHByZXZUb1JlY3QsIF90aGlzLm9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGZyb21SZWN0ICE9IHRvUmVjdDogYW5pbWF0ZVxuICAgICAgICBpZiAoIWlzUmVjdEVxdWFsKHRvUmVjdCwgZnJvbVJlY3QpKSB7XG4gICAgICAgICAgdGFyZ2V0LnByZXZGcm9tUmVjdCA9IGZyb21SZWN0O1xuICAgICAgICAgIHRhcmdldC5wcmV2VG9SZWN0ID0gdG9SZWN0O1xuICAgICAgICAgIGlmICghdGltZSkge1xuICAgICAgICAgICAgdGltZSA9IF90aGlzLm9wdGlvbnMuYW5pbWF0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfdGhpcy5hbmltYXRlKHRhcmdldCwgYW5pbWF0aW5nUmVjdCwgdG9SZWN0LCB0aW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZSkge1xuICAgICAgICAgIGFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgYW5pbWF0aW9uVGltZSA9IE1hdGgubWF4KGFuaW1hdGlvblRpbWUsIHRpbWUpO1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0YXJnZXQuYW5pbWF0aW9uUmVzZXRUaW1lcik7XG4gICAgICAgICAgdGFyZ2V0LmFuaW1hdGlvblJlc2V0VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRhcmdldC5hbmltYXRpb25UaW1lID0gMDtcbiAgICAgICAgICAgIHRhcmdldC5wcmV2RnJvbVJlY3QgPSBudWxsO1xuICAgICAgICAgICAgdGFyZ2V0LmZyb21SZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIHRhcmdldC5wcmV2VG9SZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIHRhcmdldC50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICAgIH0sIHRpbWUpO1xuICAgICAgICAgIHRhcmdldC50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSB0aW1lO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNsZWFyVGltZW91dChhbmltYXRpb25DYWxsYmFja0lkKTtcbiAgICAgIGlmICghYW5pbWF0aW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRpb25DYWxsYmFja0lkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgYW5pbWF0aW9uVGltZSk7XG4gICAgICB9XG4gICAgICBhbmltYXRpb25TdGF0ZXMgPSBbXTtcbiAgICB9LFxuICAgIGFuaW1hdGU6IGZ1bmN0aW9uIGFuaW1hdGUodGFyZ2V0LCBjdXJyZW50UmVjdCwgdG9SZWN0LCBkdXJhdGlvbikge1xuICAgICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2l0aW9uJywgJycpO1xuICAgICAgICBjc3ModGFyZ2V0LCAndHJhbnNmb3JtJywgJycpO1xuICAgICAgICB2YXIgZWxNYXRyaXggPSBtYXRyaXgodGhpcy5lbCksXG4gICAgICAgICAgc2NhbGVYID0gZWxNYXRyaXggJiYgZWxNYXRyaXguYSxcbiAgICAgICAgICBzY2FsZVkgPSBlbE1hdHJpeCAmJiBlbE1hdHJpeC5kLFxuICAgICAgICAgIHRyYW5zbGF0ZVggPSAoY3VycmVudFJlY3QubGVmdCAtIHRvUmVjdC5sZWZ0KSAvIChzY2FsZVggfHwgMSksXG4gICAgICAgICAgdHJhbnNsYXRlWSA9IChjdXJyZW50UmVjdC50b3AgLSB0b1JlY3QudG9wKSAvIChzY2FsZVkgfHwgMSk7XG4gICAgICAgIHRhcmdldC5hbmltYXRpbmdYID0gISF0cmFuc2xhdGVYO1xuICAgICAgICB0YXJnZXQuYW5pbWF0aW5nWSA9ICEhdHJhbnNsYXRlWTtcbiAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgnICsgdHJhbnNsYXRlWCArICdweCwnICsgdHJhbnNsYXRlWSArICdweCwwKScpO1xuICAgICAgICB0aGlzLmZvclJlcGFpbnREdW1teSA9IHJlcGFpbnQodGFyZ2V0KTsgLy8gcmVwYWludFxuXG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2l0aW9uJywgJ3RyYW5zZm9ybSAnICsgZHVyYXRpb24gKyAnbXMnICsgKHRoaXMub3B0aW9ucy5lYXNpbmcgPyAnICcgKyB0aGlzLm9wdGlvbnMuZWFzaW5nIDogJycpKTtcbiAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgwLDAsMCknKTtcbiAgICAgICAgdHlwZW9mIHRhcmdldC5hbmltYXRlZCA9PT0gJ251bWJlcicgJiYgY2xlYXJUaW1lb3V0KHRhcmdldC5hbmltYXRlZCk7XG4gICAgICAgIHRhcmdldC5hbmltYXRlZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2l0aW9uJywgJycpO1xuICAgICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAnJyk7XG4gICAgICAgICAgdGFyZ2V0LmFuaW1hdGVkID0gZmFsc2U7XG4gICAgICAgICAgdGFyZ2V0LmFuaW1hdGluZ1ggPSBmYWxzZTtcbiAgICAgICAgICB0YXJnZXQuYW5pbWF0aW5nWSA9IGZhbHNlO1xuICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gcmVwYWludCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldC5vZmZzZXRXaWR0aDtcbn1cbmZ1bmN0aW9uIGNhbGN1bGF0ZVJlYWxUaW1lKGFuaW1hdGluZ1JlY3QsIGZyb21SZWN0LCB0b1JlY3QsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhmcm9tUmVjdC50b3AgLSBhbmltYXRpbmdSZWN0LnRvcCwgMikgKyBNYXRoLnBvdyhmcm9tUmVjdC5sZWZ0IC0gYW5pbWF0aW5nUmVjdC5sZWZ0LCAyKSkgLyBNYXRoLnNxcnQoTWF0aC5wb3coZnJvbVJlY3QudG9wIC0gdG9SZWN0LnRvcCwgMikgKyBNYXRoLnBvdyhmcm9tUmVjdC5sZWZ0IC0gdG9SZWN0LmxlZnQsIDIpKSAqIG9wdGlvbnMuYW5pbWF0aW9uO1xufVxuXG52YXIgcGx1Z2lucyA9IFtdO1xudmFyIGRlZmF1bHRzID0ge1xuICBpbml0aWFsaXplQnlEZWZhdWx0OiB0cnVlXG59O1xudmFyIFBsdWdpbk1hbmFnZXIgPSB7XG4gIG1vdW50OiBmdW5jdGlvbiBtb3VudChwbHVnaW4pIHtcbiAgICAvLyBTZXQgZGVmYXVsdCBzdGF0aWMgcHJvcGVydGllc1xuICAgIGZvciAodmFyIG9wdGlvbiBpbiBkZWZhdWx0cykge1xuICAgICAgaWYgKGRlZmF1bHRzLmhhc093blByb3BlcnR5KG9wdGlvbikgJiYgIShvcHRpb24gaW4gcGx1Z2luKSkge1xuICAgICAgICBwbHVnaW5bb3B0aW9uXSA9IGRlZmF1bHRzW29wdGlvbl07XG4gICAgICB9XG4gICAgfVxuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgaWYgKHAucGx1Z2luTmFtZSA9PT0gcGx1Z2luLnBsdWdpbk5hbWUpIHtcbiAgICAgICAgdGhyb3cgXCJTb3J0YWJsZTogQ2Fubm90IG1vdW50IHBsdWdpbiBcIi5jb25jYXQocGx1Z2luLnBsdWdpbk5hbWUsIFwiIG1vcmUgdGhhbiBvbmNlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHBsdWdpbnMucHVzaChwbHVnaW4pO1xuICB9LFxuICBwbHVnaW5FdmVudDogZnVuY3Rpb24gcGx1Z2luRXZlbnQoZXZlbnROYW1lLCBzb3J0YWJsZSwgZXZ0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzLmV2ZW50Q2FuY2VsZWQgPSBmYWxzZTtcbiAgICBldnQuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZXZlbnRDYW5jZWxlZCA9IHRydWU7XG4gICAgfTtcbiAgICB2YXIgZXZlbnROYW1lR2xvYmFsID0gZXZlbnROYW1lICsgJ0dsb2JhbCc7XG4gICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIGlmICghc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdKSByZXR1cm47XG4gICAgICAvLyBGaXJlIGdsb2JhbCBldmVudHMgaWYgaXQgZXhpc3RzIGluIHRoaXMgc29ydGFibGVcbiAgICAgIGlmIChzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV1bZXZlbnROYW1lR2xvYmFsXSkge1xuICAgICAgICBzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV1bZXZlbnROYW1lR2xvYmFsXShfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlXG4gICAgICAgIH0sIGV2dCkpO1xuICAgICAgfVxuXG4gICAgICAvLyBPbmx5IGZpcmUgcGx1Z2luIGV2ZW50IGlmIHBsdWdpbiBpcyBlbmFibGVkIGluIHRoaXMgc29ydGFibGUsXG4gICAgICAvLyBhbmQgcGx1Z2luIGhhcyBldmVudCBkZWZpbmVkXG4gICAgICBpZiAoc29ydGFibGUub3B0aW9uc1twbHVnaW4ucGx1Z2luTmFtZV0gJiYgc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdW2V2ZW50TmFtZV0oX29iamVjdFNwcmVhZDIoe1xuICAgICAgICAgIHNvcnRhYmxlOiBzb3J0YWJsZVxuICAgICAgICB9LCBldnQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgaW5pdGlhbGl6ZVBsdWdpbnM6IGZ1bmN0aW9uIGluaXRpYWxpemVQbHVnaW5zKHNvcnRhYmxlLCBlbCwgZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgdmFyIHBsdWdpbk5hbWUgPSBwbHVnaW4ucGx1Z2luTmFtZTtcbiAgICAgIGlmICghc29ydGFibGUub3B0aW9uc1twbHVnaW5OYW1lXSAmJiAhcGx1Z2luLmluaXRpYWxpemVCeURlZmF1bHQpIHJldHVybjtcbiAgICAgIHZhciBpbml0aWFsaXplZCA9IG5ldyBwbHVnaW4oc29ydGFibGUsIGVsLCBzb3J0YWJsZS5vcHRpb25zKTtcbiAgICAgIGluaXRpYWxpemVkLnNvcnRhYmxlID0gc29ydGFibGU7XG4gICAgICBpbml0aWFsaXplZC5vcHRpb25zID0gc29ydGFibGUub3B0aW9ucztcbiAgICAgIHNvcnRhYmxlW3BsdWdpbk5hbWVdID0gaW5pdGlhbGl6ZWQ7XG5cbiAgICAgIC8vIEFkZCBkZWZhdWx0IG9wdGlvbnMgZnJvbSBwbHVnaW5cbiAgICAgIF9leHRlbmRzKGRlZmF1bHRzLCBpbml0aWFsaXplZC5kZWZhdWx0cyk7XG4gICAgfSk7XG4gICAgZm9yICh2YXIgb3B0aW9uIGluIHNvcnRhYmxlLm9wdGlvbnMpIHtcbiAgICAgIGlmICghc29ydGFibGUub3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShvcHRpb24pKSBjb250aW51ZTtcbiAgICAgIHZhciBtb2RpZmllZCA9IHRoaXMubW9kaWZ5T3B0aW9uKHNvcnRhYmxlLCBvcHRpb24sIHNvcnRhYmxlLm9wdGlvbnNbb3B0aW9uXSk7XG4gICAgICBpZiAodHlwZW9mIG1vZGlmaWVkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzb3J0YWJsZS5vcHRpb25zW29wdGlvbl0gPSBtb2RpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldEV2ZW50UHJvcGVydGllczogZnVuY3Rpb24gZ2V0RXZlbnRQcm9wZXJ0aWVzKG5hbWUsIHNvcnRhYmxlKSB7XG4gICAgdmFyIGV2ZW50UHJvcGVydGllcyA9IHt9O1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICBpZiAodHlwZW9mIHBsdWdpbi5ldmVudFByb3BlcnRpZXMgIT09ICdmdW5jdGlvbicpIHJldHVybjtcbiAgICAgIF9leHRlbmRzKGV2ZW50UHJvcGVydGllcywgcGx1Z2luLmV2ZW50UHJvcGVydGllcy5jYWxsKHNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXSwgbmFtZSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBldmVudFByb3BlcnRpZXM7XG4gIH0sXG4gIG1vZGlmeU9wdGlvbjogZnVuY3Rpb24gbW9kaWZ5T3B0aW9uKHNvcnRhYmxlLCBuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBtb2RpZmllZFZhbHVlO1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICAvLyBQbHVnaW4gbXVzdCBleGlzdCBvbiB0aGUgU29ydGFibGVcbiAgICAgIGlmICghc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdKSByZXR1cm47XG5cbiAgICAgIC8vIElmIHN0YXRpYyBvcHRpb24gbGlzdGVuZXIgZXhpc3RzIGZvciB0aGlzIG9wdGlvbiwgY2FsbCBpbiB0aGUgY29udGV4dCBvZiB0aGUgU29ydGFibGUncyBpbnN0YW5jZSBvZiB0aGlzIHBsdWdpblxuICAgICAgaWYgKHBsdWdpbi5vcHRpb25MaXN0ZW5lcnMgJiYgdHlwZW9mIHBsdWdpbi5vcHRpb25MaXN0ZW5lcnNbbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbW9kaWZpZWRWYWx1ZSA9IHBsdWdpbi5vcHRpb25MaXN0ZW5lcnNbbmFtZV0uY2FsbChzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV0sIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbW9kaWZpZWRWYWx1ZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChfcmVmKSB7XG4gIHZhciBzb3J0YWJsZSA9IF9yZWYuc29ydGFibGUsXG4gICAgcm9vdEVsID0gX3JlZi5yb290RWwsXG4gICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICB0YXJnZXRFbCA9IF9yZWYudGFyZ2V0RWwsXG4gICAgY2xvbmVFbCA9IF9yZWYuY2xvbmVFbCxcbiAgICB0b0VsID0gX3JlZi50b0VsLFxuICAgIGZyb21FbCA9IF9yZWYuZnJvbUVsLFxuICAgIG9sZEluZGV4ID0gX3JlZi5vbGRJbmRleCxcbiAgICBuZXdJbmRleCA9IF9yZWYubmV3SW5kZXgsXG4gICAgb2xkRHJhZ2dhYmxlSW5kZXggPSBfcmVmLm9sZERyYWdnYWJsZUluZGV4LFxuICAgIG5ld0RyYWdnYWJsZUluZGV4ID0gX3JlZi5uZXdEcmFnZ2FibGVJbmRleCxcbiAgICBvcmlnaW5hbEV2ZW50ID0gX3JlZi5vcmlnaW5hbEV2ZW50LFxuICAgIHB1dFNvcnRhYmxlID0gX3JlZi5wdXRTb3J0YWJsZSxcbiAgICBleHRyYUV2ZW50UHJvcGVydGllcyA9IF9yZWYuZXh0cmFFdmVudFByb3BlcnRpZXM7XG4gIHNvcnRhYmxlID0gc29ydGFibGUgfHwgcm9vdEVsICYmIHJvb3RFbFtleHBhbmRvXTtcbiAgaWYgKCFzb3J0YWJsZSkgcmV0dXJuO1xuICB2YXIgZXZ0LFxuICAgIG9wdGlvbnMgPSBzb3J0YWJsZS5vcHRpb25zLFxuICAgIG9uTmFtZSA9ICdvbicgKyBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHIoMSk7XG4gIC8vIFN1cHBvcnQgZm9yIG5ldyBDdXN0b21FdmVudCBmZWF0dXJlXG4gIGlmICh3aW5kb3cuQ3VzdG9tRXZlbnQgJiYgIUlFMTFPckxlc3MgJiYgIUVkZ2UpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xuICB9XG4gIGV2dC50byA9IHRvRWwgfHwgcm9vdEVsO1xuICBldnQuZnJvbSA9IGZyb21FbCB8fCByb290RWw7XG4gIGV2dC5pdGVtID0gdGFyZ2V0RWwgfHwgcm9vdEVsO1xuICBldnQuY2xvbmUgPSBjbG9uZUVsO1xuICBldnQub2xkSW5kZXggPSBvbGRJbmRleDtcbiAgZXZ0Lm5ld0luZGV4ID0gbmV3SW5kZXg7XG4gIGV2dC5vbGREcmFnZ2FibGVJbmRleCA9IG9sZERyYWdnYWJsZUluZGV4O1xuICBldnQubmV3RHJhZ2dhYmxlSW5kZXggPSBuZXdEcmFnZ2FibGVJbmRleDtcbiAgZXZ0Lm9yaWdpbmFsRXZlbnQgPSBvcmlnaW5hbEV2ZW50O1xuICBldnQucHVsbE1vZGUgPSBwdXRTb3J0YWJsZSA/IHB1dFNvcnRhYmxlLmxhc3RQdXRNb2RlIDogdW5kZWZpbmVkO1xuICB2YXIgYWxsRXZlbnRQcm9wZXJ0aWVzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGV4dHJhRXZlbnRQcm9wZXJ0aWVzKSwgUGx1Z2luTWFuYWdlci5nZXRFdmVudFByb3BlcnRpZXMobmFtZSwgc29ydGFibGUpKTtcbiAgZm9yICh2YXIgb3B0aW9uIGluIGFsbEV2ZW50UHJvcGVydGllcykge1xuICAgIGV2dFtvcHRpb25dID0gYWxsRXZlbnRQcm9wZXJ0aWVzW29wdGlvbl07XG4gIH1cbiAgaWYgKHJvb3RFbCkge1xuICAgIHJvb3RFbC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH1cbiAgaWYgKG9wdGlvbnNbb25OYW1lXSkge1xuICAgIG9wdGlvbnNbb25OYW1lXS5jYWxsKHNvcnRhYmxlLCBldnQpO1xuICB9XG59XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJldnRcIl07XG52YXIgcGx1Z2luRXZlbnQgPSBmdW5jdGlvbiBwbHVnaW5FdmVudChldmVudE5hbWUsIHNvcnRhYmxlKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fSxcbiAgICBvcmlnaW5hbEV2ZW50ID0gX3JlZi5ldnQsXG4gICAgZGF0YSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQpO1xuICBQbHVnaW5NYW5hZ2VyLnBsdWdpbkV2ZW50LmJpbmQoU29ydGFibGUpKGV2ZW50TmFtZSwgc29ydGFibGUsIF9vYmplY3RTcHJlYWQyKHtcbiAgICBkcmFnRWw6IGRyYWdFbCxcbiAgICBwYXJlbnRFbDogcGFyZW50RWwsXG4gICAgZ2hvc3RFbDogZ2hvc3RFbCxcbiAgICByb290RWw6IHJvb3RFbCxcbiAgICBuZXh0RWw6IG5leHRFbCxcbiAgICBsYXN0RG93bkVsOiBsYXN0RG93bkVsLFxuICAgIGNsb25lRWw6IGNsb25lRWwsXG4gICAgY2xvbmVIaWRkZW46IGNsb25lSGlkZGVuLFxuICAgIGRyYWdTdGFydGVkOiBtb3ZlZCxcbiAgICBwdXRTb3J0YWJsZTogcHV0U29ydGFibGUsXG4gICAgYWN0aXZlU29ydGFibGU6IFNvcnRhYmxlLmFjdGl2ZSxcbiAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50LFxuICAgIG9sZEluZGV4OiBvbGRJbmRleCxcbiAgICBvbGREcmFnZ2FibGVJbmRleDogb2xkRHJhZ2dhYmxlSW5kZXgsXG4gICAgbmV3SW5kZXg6IG5ld0luZGV4LFxuICAgIG5ld0RyYWdnYWJsZUluZGV4OiBuZXdEcmFnZ2FibGVJbmRleCxcbiAgICBoaWRlR2hvc3RGb3JUYXJnZXQ6IF9oaWRlR2hvc3RGb3JUYXJnZXQsXG4gICAgdW5oaWRlR2hvc3RGb3JUYXJnZXQ6IF91bmhpZGVHaG9zdEZvclRhcmdldCxcbiAgICBjbG9uZU5vd0hpZGRlbjogZnVuY3Rpb24gY2xvbmVOb3dIaWRkZW4oKSB7XG4gICAgICBjbG9uZUhpZGRlbiA9IHRydWU7XG4gICAgfSxcbiAgICBjbG9uZU5vd1Nob3duOiBmdW5jdGlvbiBjbG9uZU5vd1Nob3duKCkge1xuICAgICAgY2xvbmVIaWRkZW4gPSBmYWxzZTtcbiAgICB9LFxuICAgIGRpc3BhdGNoU29ydGFibGVFdmVudDogZnVuY3Rpb24gZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KG5hbWUpIHtcbiAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIGRhdGEpKTtcbn07XG5mdW5jdGlvbiBfZGlzcGF0Y2hFdmVudChpbmZvKSB7XG4gIGRpc3BhdGNoRXZlbnQoX29iamVjdFNwcmVhZDIoe1xuICAgIHB1dFNvcnRhYmxlOiBwdXRTb3J0YWJsZSxcbiAgICBjbG9uZUVsOiBjbG9uZUVsLFxuICAgIHRhcmdldEVsOiBkcmFnRWwsXG4gICAgcm9vdEVsOiByb290RWwsXG4gICAgb2xkSW5kZXg6IG9sZEluZGV4LFxuICAgIG9sZERyYWdnYWJsZUluZGV4OiBvbGREcmFnZ2FibGVJbmRleCxcbiAgICBuZXdJbmRleDogbmV3SW5kZXgsXG4gICAgbmV3RHJhZ2dhYmxlSW5kZXg6IG5ld0RyYWdnYWJsZUluZGV4XG4gIH0sIGluZm8pKTtcbn1cbnZhciBkcmFnRWwsXG4gIHBhcmVudEVsLFxuICBnaG9zdEVsLFxuICByb290RWwsXG4gIG5leHRFbCxcbiAgbGFzdERvd25FbCxcbiAgY2xvbmVFbCxcbiAgY2xvbmVIaWRkZW4sXG4gIG9sZEluZGV4LFxuICBuZXdJbmRleCxcbiAgb2xkRHJhZ2dhYmxlSW5kZXgsXG4gIG5ld0RyYWdnYWJsZUluZGV4LFxuICBhY3RpdmVHcm91cCxcbiAgcHV0U29ydGFibGUsXG4gIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSBmYWxzZSxcbiAgaWdub3JlTmV4dENsaWNrID0gZmFsc2UsXG4gIHNvcnRhYmxlcyA9IFtdLFxuICB0YXBFdnQsXG4gIHRvdWNoRXZ0LFxuICBsYXN0RHgsXG4gIGxhc3REeSxcbiAgdGFwRGlzdGFuY2VMZWZ0LFxuICB0YXBEaXN0YW5jZVRvcCxcbiAgbW92ZWQsXG4gIGxhc3RUYXJnZXQsXG4gIGxhc3REaXJlY3Rpb24sXG4gIHBhc3RGaXJzdEludmVydFRocmVzaCA9IGZhbHNlLFxuICBpc0NpcmN1bXN0YW50aWFsSW52ZXJ0ID0gZmFsc2UsXG4gIHRhcmdldE1vdmVEaXN0YW5jZSxcbiAgLy8gRm9yIHBvc2l0aW9uaW5nIGdob3N0IGFic29sdXRlbHlcbiAgZ2hvc3RSZWxhdGl2ZVBhcmVudCxcbiAgZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGwgPSBbXSxcbiAgLy8gKGxlZnQsIHRvcClcblxuICBfc2lsZW50ID0gZmFsc2UsXG4gIHNhdmVkSW5wdXRDaGVja2VkID0gW107XG5cbi8qKiBAY29uc3QgKi9cbnZhciBkb2N1bWVudEV4aXN0cyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcsXG4gIFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5ID0gSU9TLFxuICBDU1NGbG9hdFByb3BlcnR5ID0gRWRnZSB8fCBJRTExT3JMZXNzID8gJ2Nzc0Zsb2F0JyA6ICdmbG9hdCcsXG4gIC8vIFRoaXMgd2lsbCBub3QgcGFzcyBmb3IgSUU5LCBiZWNhdXNlIElFOSBEbkQgb25seSB3b3JrcyBvbiBhbmNob3JzXG4gIHN1cHBvcnREcmFnZ2FibGUgPSBkb2N1bWVudEV4aXN0cyAmJiAhQ2hyb21lRm9yQW5kcm9pZCAmJiAhSU9TICYmICdkcmFnZ2FibGUnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICBzdXBwb3J0Q3NzUG9pbnRlckV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWRvY3VtZW50RXhpc3RzKSByZXR1cm47XG4gICAgLy8gZmFsc2Ugd2hlbiA8PSBJRTExXG4gICAgaWYgKElFMTFPckxlc3MpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgneCcpO1xuICAgIGVsLnN0eWxlLmNzc1RleHQgPSAncG9pbnRlci1ldmVudHM6YXV0byc7XG4gICAgcmV0dXJuIGVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPT09ICdhdXRvJztcbiAgfSgpLFxuICBfZGV0ZWN0RGlyZWN0aW9uID0gZnVuY3Rpb24gX2RldGVjdERpcmVjdGlvbihlbCwgb3B0aW9ucykge1xuICAgIHZhciBlbENTUyA9IGNzcyhlbCksXG4gICAgICBlbFdpZHRoID0gcGFyc2VJbnQoZWxDU1Mud2lkdGgpIC0gcGFyc2VJbnQoZWxDU1MucGFkZGluZ0xlZnQpIC0gcGFyc2VJbnQoZWxDU1MucGFkZGluZ1JpZ2h0KSAtIHBhcnNlSW50KGVsQ1NTLmJvcmRlckxlZnRXaWR0aCkgLSBwYXJzZUludChlbENTUy5ib3JkZXJSaWdodFdpZHRoKSxcbiAgICAgIGNoaWxkMSA9IGdldENoaWxkKGVsLCAwLCBvcHRpb25zKSxcbiAgICAgIGNoaWxkMiA9IGdldENoaWxkKGVsLCAxLCBvcHRpb25zKSxcbiAgICAgIGZpcnN0Q2hpbGRDU1MgPSBjaGlsZDEgJiYgY3NzKGNoaWxkMSksXG4gICAgICBzZWNvbmRDaGlsZENTUyA9IGNoaWxkMiAmJiBjc3MoY2hpbGQyKSxcbiAgICAgIGZpcnN0Q2hpbGRXaWR0aCA9IGZpcnN0Q2hpbGRDU1MgJiYgcGFyc2VJbnQoZmlyc3RDaGlsZENTUy5tYXJnaW5MZWZ0KSArIHBhcnNlSW50KGZpcnN0Q2hpbGRDU1MubWFyZ2luUmlnaHQpICsgZ2V0UmVjdChjaGlsZDEpLndpZHRoLFxuICAgICAgc2Vjb25kQ2hpbGRXaWR0aCA9IHNlY29uZENoaWxkQ1NTICYmIHBhcnNlSW50KHNlY29uZENoaWxkQ1NTLm1hcmdpbkxlZnQpICsgcGFyc2VJbnQoc2Vjb25kQ2hpbGRDU1MubWFyZ2luUmlnaHQpICsgZ2V0UmVjdChjaGlsZDIpLndpZHRoO1xuICAgIGlmIChlbENTUy5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgIHJldHVybiBlbENTUy5mbGV4RGlyZWN0aW9uID09PSAnY29sdW1uJyB8fCBlbENTUy5mbGV4RGlyZWN0aW9uID09PSAnY29sdW1uLXJldmVyc2UnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICB9XG4gICAgaWYgKGVsQ1NTLmRpc3BsYXkgPT09ICdncmlkJykge1xuICAgICAgcmV0dXJuIGVsQ1NTLmdyaWRUZW1wbGF0ZUNvbHVtbnMuc3BsaXQoJyAnKS5sZW5ndGggPD0gMSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIGlmIChjaGlsZDEgJiYgZmlyc3RDaGlsZENTU1tcImZsb2F0XCJdICYmIGZpcnN0Q2hpbGRDU1NbXCJmbG9hdFwiXSAhPT0gJ25vbmUnKSB7XG4gICAgICB2YXIgdG91Y2hpbmdTaWRlQ2hpbGQyID0gZmlyc3RDaGlsZENTU1tcImZsb2F0XCJdID09PSAnbGVmdCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgcmV0dXJuIGNoaWxkMiAmJiAoc2Vjb25kQ2hpbGRDU1MuY2xlYXIgPT09ICdib3RoJyB8fCBzZWNvbmRDaGlsZENTUy5jbGVhciA9PT0gdG91Y2hpbmdTaWRlQ2hpbGQyKSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZDEgJiYgKGZpcnN0Q2hpbGRDU1MuZGlzcGxheSA9PT0gJ2Jsb2NrJyB8fCBmaXJzdENoaWxkQ1NTLmRpc3BsYXkgPT09ICdmbGV4JyB8fCBmaXJzdENoaWxkQ1NTLmRpc3BsYXkgPT09ICd0YWJsZScgfHwgZmlyc3RDaGlsZENTUy5kaXNwbGF5ID09PSAnZ3JpZCcgfHwgZmlyc3RDaGlsZFdpZHRoID49IGVsV2lkdGggJiYgZWxDU1NbQ1NTRmxvYXRQcm9wZXJ0eV0gPT09ICdub25lJyB8fCBjaGlsZDIgJiYgZWxDU1NbQ1NTRmxvYXRQcm9wZXJ0eV0gPT09ICdub25lJyAmJiBmaXJzdENoaWxkV2lkdGggKyBzZWNvbmRDaGlsZFdpZHRoID4gZWxXaWR0aCkgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xuICB9LFxuICBfZHJhZ0VsSW5Sb3dDb2x1bW4gPSBmdW5jdGlvbiBfZHJhZ0VsSW5Sb3dDb2x1bW4oZHJhZ1JlY3QsIHRhcmdldFJlY3QsIHZlcnRpY2FsKSB7XG4gICAgdmFyIGRyYWdFbFMxT3BwID0gdmVydGljYWwgPyBkcmFnUmVjdC5sZWZ0IDogZHJhZ1JlY3QudG9wLFxuICAgICAgZHJhZ0VsUzJPcHAgPSB2ZXJ0aWNhbCA/IGRyYWdSZWN0LnJpZ2h0IDogZHJhZ1JlY3QuYm90dG9tLFxuICAgICAgZHJhZ0VsT3BwTGVuZ3RoID0gdmVydGljYWwgPyBkcmFnUmVjdC53aWR0aCA6IGRyYWdSZWN0LmhlaWdodCxcbiAgICAgIHRhcmdldFMxT3BwID0gdmVydGljYWwgPyB0YXJnZXRSZWN0LmxlZnQgOiB0YXJnZXRSZWN0LnRvcCxcbiAgICAgIHRhcmdldFMyT3BwID0gdmVydGljYWwgPyB0YXJnZXRSZWN0LnJpZ2h0IDogdGFyZ2V0UmVjdC5ib3R0b20sXG4gICAgICB0YXJnZXRPcHBMZW5ndGggPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3Qud2lkdGggOiB0YXJnZXRSZWN0LmhlaWdodDtcbiAgICByZXR1cm4gZHJhZ0VsUzFPcHAgPT09IHRhcmdldFMxT3BwIHx8IGRyYWdFbFMyT3BwID09PSB0YXJnZXRTMk9wcCB8fCBkcmFnRWxTMU9wcCArIGRyYWdFbE9wcExlbmd0aCAvIDIgPT09IHRhcmdldFMxT3BwICsgdGFyZ2V0T3BwTGVuZ3RoIC8gMjtcbiAgfSxcbiAgLyoqXHJcbiAgICogRGV0ZWN0cyBmaXJzdCBuZWFyZXN0IGVtcHR5IHNvcnRhYmxlIHRvIFggYW5kIFkgcG9zaXRpb24gdXNpbmcgZW1wdHlJbnNlcnRUaHJlc2hvbGQuXHJcbiAgICogQHBhcmFtICB7TnVtYmVyfSB4ICAgICAgWCBwb3NpdGlvblxyXG4gICAqIEBwYXJhbSAge051bWJlcn0geSAgICAgIFkgcG9zaXRpb25cclxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICBFbGVtZW50IG9mIHRoZSBmaXJzdCBmb3VuZCBuZWFyZXN0IFNvcnRhYmxlXHJcbiAgICovXG4gIF9kZXRlY3ROZWFyZXN0RW1wdHlTb3J0YWJsZSA9IGZ1bmN0aW9uIF9kZXRlY3ROZWFyZXN0RW1wdHlTb3J0YWJsZSh4LCB5KSB7XG4gICAgdmFyIHJldDtcbiAgICBzb3J0YWJsZXMuc29tZShmdW5jdGlvbiAoc29ydGFibGUpIHtcbiAgICAgIHZhciB0aHJlc2hvbGQgPSBzb3J0YWJsZVtleHBhbmRvXS5vcHRpb25zLmVtcHR5SW5zZXJ0VGhyZXNob2xkO1xuICAgICAgaWYgKCF0aHJlc2hvbGQgfHwgbGFzdENoaWxkKHNvcnRhYmxlKSkgcmV0dXJuO1xuICAgICAgdmFyIHJlY3QgPSBnZXRSZWN0KHNvcnRhYmxlKSxcbiAgICAgICAgaW5zaWRlSG9yaXpvbnRhbGx5ID0geCA+PSByZWN0LmxlZnQgLSB0aHJlc2hvbGQgJiYgeCA8PSByZWN0LnJpZ2h0ICsgdGhyZXNob2xkLFxuICAgICAgICBpbnNpZGVWZXJ0aWNhbGx5ID0geSA+PSByZWN0LnRvcCAtIHRocmVzaG9sZCAmJiB5IDw9IHJlY3QuYm90dG9tICsgdGhyZXNob2xkO1xuICAgICAgaWYgKGluc2lkZUhvcml6b250YWxseSAmJiBpbnNpZGVWZXJ0aWNhbGx5KSB7XG4gICAgICAgIHJldHVybiByZXQgPSBzb3J0YWJsZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9LFxuICBfcHJlcGFyZUdyb3VwID0gZnVuY3Rpb24gX3ByZXBhcmVHcm91cChvcHRpb25zKSB7XG4gICAgZnVuY3Rpb24gdG9Gbih2YWx1ZSwgcHVsbCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0bywgZnJvbSwgZHJhZ0VsLCBldnQpIHtcbiAgICAgICAgdmFyIHNhbWVHcm91cCA9IHRvLm9wdGlvbnMuZ3JvdXAubmFtZSAmJiBmcm9tLm9wdGlvbnMuZ3JvdXAubmFtZSAmJiB0by5vcHRpb25zLmdyb3VwLm5hbWUgPT09IGZyb20ub3B0aW9ucy5ncm91cC5uYW1lO1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCAmJiAocHVsbCB8fCBzYW1lR3JvdXApKSB7XG4gICAgICAgICAgLy8gRGVmYXVsdCBwdWxsIHZhbHVlXG4gICAgICAgICAgLy8gRGVmYXVsdCBwdWxsIGFuZCBwdXQgdmFsdWUgaWYgc2FtZSBncm91cFxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHB1bGwgJiYgdmFsdWUgPT09ICdjbG9uZScpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHRvRm4odmFsdWUodG8sIGZyb20sIGRyYWdFbCwgZXZ0KSwgcHVsbCkodG8sIGZyb20sIGRyYWdFbCwgZXZ0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgb3RoZXJHcm91cCA9IChwdWxsID8gdG8gOiBmcm9tKS5vcHRpb25zLmdyb3VwLm5hbWU7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB0cnVlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgPT09IG90aGVyR3JvdXAgfHwgdmFsdWUuam9pbiAmJiB2YWx1ZS5pbmRleE9mKG90aGVyR3JvdXApID4gLTE7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIHZhciBncm91cCA9IHt9O1xuICAgIHZhciBvcmlnaW5hbEdyb3VwID0gb3B0aW9ucy5ncm91cDtcbiAgICBpZiAoIW9yaWdpbmFsR3JvdXAgfHwgX3R5cGVvZihvcmlnaW5hbEdyb3VwKSAhPSAnb2JqZWN0Jykge1xuICAgICAgb3JpZ2luYWxHcm91cCA9IHtcbiAgICAgICAgbmFtZTogb3JpZ2luYWxHcm91cFxuICAgICAgfTtcbiAgICB9XG4gICAgZ3JvdXAubmFtZSA9IG9yaWdpbmFsR3JvdXAubmFtZTtcbiAgICBncm91cC5jaGVja1B1bGwgPSB0b0ZuKG9yaWdpbmFsR3JvdXAucHVsbCwgdHJ1ZSk7XG4gICAgZ3JvdXAuY2hlY2tQdXQgPSB0b0ZuKG9yaWdpbmFsR3JvdXAucHV0KTtcbiAgICBncm91cC5yZXZlcnRDbG9uZSA9IG9yaWdpbmFsR3JvdXAucmV2ZXJ0Q2xvbmU7XG4gICAgb3B0aW9ucy5ncm91cCA9IGdyb3VwO1xuICB9LFxuICBfaGlkZUdob3N0Rm9yVGFyZ2V0ID0gZnVuY3Rpb24gX2hpZGVHaG9zdEZvclRhcmdldCgpIHtcbiAgICBpZiAoIXN1cHBvcnRDc3NQb2ludGVyRXZlbnRzICYmIGdob3N0RWwpIHtcbiAgICAgIGNzcyhnaG9zdEVsLCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfVxuICB9LFxuICBfdW5oaWRlR2hvc3RGb3JUYXJnZXQgPSBmdW5jdGlvbiBfdW5oaWRlR2hvc3RGb3JUYXJnZXQoKSB7XG4gICAgaWYgKCFzdXBwb3J0Q3NzUG9pbnRlckV2ZW50cyAmJiBnaG9zdEVsKSB7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ2Rpc3BsYXknLCAnJyk7XG4gICAgfVxuICB9O1xuXG4vLyAjMTE4NCBmaXggLSBQcmV2ZW50IGNsaWNrIGV2ZW50IG9uIGZhbGxiYWNrIGlmIGRyYWdnZWQgYnV0IGl0ZW0gbm90IGNoYW5nZWQgcG9zaXRpb25cbmlmIChkb2N1bWVudEV4aXN0cyAmJiAhQ2hyb21lRm9yQW5kcm9pZCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoaWdub3JlTmV4dENsaWNrKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24gJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZ0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiAmJiBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICBpZ25vcmVOZXh0Q2xpY2sgPSBmYWxzZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIHRydWUpO1xufVxudmFyIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50ID0gZnVuY3Rpb24gbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQoZXZ0KSB7XG4gIGlmIChkcmFnRWwpIHtcbiAgICBldnQgPSBldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0O1xuICAgIHZhciBuZWFyZXN0ID0gX2RldGVjdE5lYXJlc3RFbXB0eVNvcnRhYmxlKGV2dC5jbGllbnRYLCBldnQuY2xpZW50WSk7XG4gICAgaWYgKG5lYXJlc3QpIHtcbiAgICAgIC8vIENyZWF0ZSBpbWl0YXRpb24gZXZlbnRcbiAgICAgIHZhciBldmVudCA9IHt9O1xuICAgICAgZm9yICh2YXIgaSBpbiBldnQpIHtcbiAgICAgICAgaWYgKGV2dC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIGV2ZW50W2ldID0gZXZ0W2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBldmVudC50YXJnZXQgPSBldmVudC5yb290RWwgPSBuZWFyZXN0O1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPSB2b2lkIDA7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24gPSB2b2lkIDA7XG4gICAgICBuZWFyZXN0W2V4cGFuZG9dLl9vbkRyYWdPdmVyKGV2ZW50KTtcbiAgICB9XG4gIH1cbn07XG52YXIgX2NoZWNrT3V0c2lkZVRhcmdldEVsID0gZnVuY3Rpb24gX2NoZWNrT3V0c2lkZVRhcmdldEVsKGV2dCkge1xuICBpZiAoZHJhZ0VsKSB7XG4gICAgZHJhZ0VsLnBhcmVudE5vZGVbZXhwYW5kb10uX2lzT3V0c2lkZVRoaXNFbChldnQudGFyZ2V0KTtcbiAgfVxufTtcblxuLyoqXHJcbiAqIEBjbGFzcyAgU29ydGFibGVcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9ICBlbFxyXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgIFtvcHRpb25zXVxyXG4gKi9cbmZ1bmN0aW9uIFNvcnRhYmxlKGVsLCBvcHRpb25zKSB7XG4gIGlmICghKGVsICYmIGVsLm5vZGVUeXBlICYmIGVsLm5vZGVUeXBlID09PSAxKSkge1xuICAgIHRocm93IFwiU29ydGFibGU6IGBlbGAgbXVzdCBiZSBhbiBIVE1MRWxlbWVudCwgbm90IFwiLmNvbmNhdCh7fS50b1N0cmluZy5jYWxsKGVsKSk7XG4gIH1cbiAgdGhpcy5lbCA9IGVsOyAvLyByb290IGVsZW1lbnRcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyA9IF9leHRlbmRzKHt9LCBvcHRpb25zKTtcblxuICAvLyBFeHBvcnQgaW5zdGFuY2VcbiAgZWxbZXhwYW5kb10gPSB0aGlzO1xuICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgZ3JvdXA6IG51bGwsXG4gICAgc29ydDogdHJ1ZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgc3RvcmU6IG51bGwsXG4gICAgaGFuZGxlOiBudWxsLFxuICAgIGRyYWdnYWJsZTogL15bdW9dbCQvaS50ZXN0KGVsLm5vZGVOYW1lKSA/ICc+bGknIDogJz4qJyxcbiAgICBzd2FwVGhyZXNob2xkOiAxLFxuICAgIC8vIHBlcmNlbnRhZ2U7IDAgPD0geCA8PSAxXG4gICAgaW52ZXJ0U3dhcDogZmFsc2UsXG4gICAgLy8gaW52ZXJ0IGFsd2F5c1xuICAgIGludmVydGVkU3dhcFRocmVzaG9sZDogbnVsbCxcbiAgICAvLyB3aWxsIGJlIHNldCB0byBzYW1lIGFzIHN3YXBUaHJlc2hvbGQgaWYgZGVmYXVsdFxuICAgIHJlbW92ZUNsb25lT25IaWRlOiB0cnVlLFxuICAgIGRpcmVjdGlvbjogZnVuY3Rpb24gZGlyZWN0aW9uKCkge1xuICAgICAgcmV0dXJuIF9kZXRlY3REaXJlY3Rpb24oZWwsIHRoaXMub3B0aW9ucyk7XG4gICAgfSxcbiAgICBnaG9zdENsYXNzOiAnc29ydGFibGUtZ2hvc3QnLFxuICAgIGNob3NlbkNsYXNzOiAnc29ydGFibGUtY2hvc2VuJyxcbiAgICBkcmFnQ2xhc3M6ICdzb3J0YWJsZS1kcmFnJyxcbiAgICBpZ25vcmU6ICdhLCBpbWcnLFxuICAgIGZpbHRlcjogbnVsbCxcbiAgICBwcmV2ZW50T25GaWx0ZXI6IHRydWUsXG4gICAgYW5pbWF0aW9uOiAwLFxuICAgIGVhc2luZzogbnVsbCxcbiAgICBzZXREYXRhOiBmdW5jdGlvbiBzZXREYXRhKGRhdGFUcmFuc2ZlciwgZHJhZ0VsKSB7XG4gICAgICBkYXRhVHJhbnNmZXIuc2V0RGF0YSgnVGV4dCcsIGRyYWdFbC50ZXh0Q29udGVudCk7XG4gICAgfSxcbiAgICBkcm9wQnViYmxlOiBmYWxzZSxcbiAgICBkcmFnb3ZlckJ1YmJsZTogZmFsc2UsXG4gICAgZGF0YUlkQXR0cjogJ2RhdGEtaWQnLFxuICAgIGRlbGF5OiAwLFxuICAgIGRlbGF5T25Ub3VjaE9ubHk6IGZhbHNlLFxuICAgIHRvdWNoU3RhcnRUaHJlc2hvbGQ6IChOdW1iZXIucGFyc2VJbnQgPyBOdW1iZXIgOiB3aW5kb3cpLnBhcnNlSW50KHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCAxMCkgfHwgMSxcbiAgICBmb3JjZUZhbGxiYWNrOiBmYWxzZSxcbiAgICBmYWxsYmFja0NsYXNzOiAnc29ydGFibGUtZmFsbGJhY2snLFxuICAgIGZhbGxiYWNrT25Cb2R5OiBmYWxzZSxcbiAgICBmYWxsYmFja1RvbGVyYW5jZTogMCxcbiAgICBmYWxsYmFja09mZnNldDoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9LFxuICAgIHN1cHBvcnRQb2ludGVyOiBTb3J0YWJsZS5zdXBwb3J0UG9pbnRlciAhPT0gZmFsc2UgJiYgJ1BvaW50ZXJFdmVudCcgaW4gd2luZG93ICYmICFTYWZhcmksXG4gICAgZW1wdHlJbnNlcnRUaHJlc2hvbGQ6IDVcbiAgfTtcbiAgUGx1Z2luTWFuYWdlci5pbml0aWFsaXplUGx1Z2lucyh0aGlzLCBlbCwgZGVmYXVsdHMpO1xuXG4gIC8vIFNldCBkZWZhdWx0IG9wdGlvbnNcbiAgZm9yICh2YXIgbmFtZSBpbiBkZWZhdWx0cykge1xuICAgICEobmFtZSBpbiBvcHRpb25zKSAmJiAob3B0aW9uc1tuYW1lXSA9IGRlZmF1bHRzW25hbWVdKTtcbiAgfVxuICBfcHJlcGFyZUdyb3VwKG9wdGlvbnMpO1xuXG4gIC8vIEJpbmQgYWxsIHByaXZhdGUgbWV0aG9kc1xuICBmb3IgKHZhciBmbiBpbiB0aGlzKSB7XG4gICAgaWYgKGZuLmNoYXJBdCgwKSA9PT0gJ18nICYmIHR5cGVvZiB0aGlzW2ZuXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1tmbl0gPSB0aGlzW2ZuXS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldHVwIGRyYWcgbW9kZVxuICB0aGlzLm5hdGl2ZURyYWdnYWJsZSA9IG9wdGlvbnMuZm9yY2VGYWxsYmFjayA/IGZhbHNlIDogc3VwcG9ydERyYWdnYWJsZTtcbiAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgLy8gVG91Y2ggc3RhcnQgdGhyZXNob2xkIGNhbm5vdCBiZSBncmVhdGVyIHRoYW4gdGhlIG5hdGl2ZSBkcmFnc3RhcnQgdGhyZXNob2xkXG4gICAgdGhpcy5vcHRpb25zLnRvdWNoU3RhcnRUaHJlc2hvbGQgPSAxO1xuICB9XG5cbiAgLy8gQmluZCBldmVudHNcbiAgaWYgKG9wdGlvbnMuc3VwcG9ydFBvaW50ZXIpIHtcbiAgICBvbihlbCwgJ3BvaW50ZXJkb3duJywgdGhpcy5fb25UYXBTdGFydCk7XG4gIH0gZWxzZSB7XG4gICAgb24oZWwsICdtb3VzZWRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgICBvbihlbCwgJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgfVxuICBpZiAodGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICBvbihlbCwgJ2RyYWdvdmVyJywgdGhpcyk7XG4gICAgb24oZWwsICdkcmFnZW50ZXInLCB0aGlzKTtcbiAgfVxuICBzb3J0YWJsZXMucHVzaCh0aGlzLmVsKTtcblxuICAvLyBSZXN0b3JlIHNvcnRpbmdcbiAgb3B0aW9ucy5zdG9yZSAmJiBvcHRpb25zLnN0b3JlLmdldCAmJiB0aGlzLnNvcnQob3B0aW9ucy5zdG9yZS5nZXQodGhpcykgfHwgW10pO1xuXG4gIC8vIEFkZCBhbmltYXRpb24gc3RhdGUgbWFuYWdlclxuICBfZXh0ZW5kcyh0aGlzLCBBbmltYXRpb25TdGF0ZU1hbmFnZXIoKSk7XG59XG5Tb3J0YWJsZS5wcm90b3R5cGUgPSAvKiogQGxlbmRzIFNvcnRhYmxlLnByb3RvdHlwZSAqL3tcbiAgY29uc3RydWN0b3I6IFNvcnRhYmxlLFxuICBfaXNPdXRzaWRlVGhpc0VsOiBmdW5jdGlvbiBfaXNPdXRzaWRlVGhpc0VsKHRhcmdldCkge1xuICAgIGlmICghdGhpcy5lbC5jb250YWlucyh0YXJnZXQpICYmIHRhcmdldCAhPT0gdGhpcy5lbCkge1xuICAgICAgbGFzdFRhcmdldCA9IG51bGw7XG4gICAgfVxuICB9LFxuICBfZ2V0RGlyZWN0aW9uOiBmdW5jdGlvbiBfZ2V0RGlyZWN0aW9uKGV2dCwgdGFyZ2V0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09PSAnZnVuY3Rpb24nID8gdGhpcy5vcHRpb25zLmRpcmVjdGlvbi5jYWxsKHRoaXMsIGV2dCwgdGFyZ2V0LCBkcmFnRWwpIDogdGhpcy5vcHRpb25zLmRpcmVjdGlvbjtcbiAgfSxcbiAgX29uVGFwU3RhcnQ6IGZ1bmN0aW9uIF9vblRhcFN0YXJ0KCAvKiogRXZlbnR8VG91Y2hFdmVudCAqL2V2dCkge1xuICAgIGlmICghZXZ0LmNhbmNlbGFibGUpIHJldHVybjtcbiAgICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgZWwgPSB0aGlzLmVsLFxuICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgIHByZXZlbnRPbkZpbHRlciA9IG9wdGlvbnMucHJldmVudE9uRmlsdGVyLFxuICAgICAgdHlwZSA9IGV2dC50eXBlLFxuICAgICAgdG91Y2ggPSBldnQudG91Y2hlcyAmJiBldnQudG91Y2hlc1swXSB8fCBldnQucG9pbnRlclR5cGUgJiYgZXZ0LnBvaW50ZXJUeXBlID09PSAndG91Y2gnICYmIGV2dCxcbiAgICAgIHRhcmdldCA9ICh0b3VjaCB8fCBldnQpLnRhcmdldCxcbiAgICAgIG9yaWdpbmFsVGFyZ2V0ID0gZXZ0LnRhcmdldC5zaGFkb3dSb290ICYmIChldnQucGF0aCAmJiBldnQucGF0aFswXSB8fCBldnQuY29tcG9zZWRQYXRoICYmIGV2dC5jb21wb3NlZFBhdGgoKVswXSkgfHwgdGFyZ2V0LFxuICAgICAgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgX3NhdmVJbnB1dENoZWNrZWRTdGF0ZShlbCk7XG5cbiAgICAvLyBEb24ndCB0cmlnZ2VyIHN0YXJ0IGV2ZW50IHdoZW4gYW4gZWxlbWVudCBpcyBiZWVuIGRyYWdnZWQsIG90aGVyd2lzZSB0aGUgZXZ0Lm9sZGluZGV4IGFsd2F5cyB3cm9uZyB3aGVuIHNldCBvcHRpb24uZ3JvdXAuXG4gICAgaWYgKGRyYWdFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoL21vdXNlZG93bnxwb2ludGVyZG93bi8udGVzdCh0eXBlKSAmJiBldnQuYnV0dG9uICE9PSAwIHx8IG9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjsgLy8gb25seSBsZWZ0IGJ1dHRvbiBhbmQgZW5hYmxlZFxuICAgIH1cblxuICAgIC8vIGNhbmNlbCBkbmQgaWYgb3JpZ2luYWwgdGFyZ2V0IGlzIGNvbnRlbnQgZWRpdGFibGVcbiAgICBpZiAob3JpZ2luYWxUYXJnZXQuaXNDb250ZW50RWRpdGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTYWZhcmkgaWdub3JlcyBmdXJ0aGVyIGV2ZW50IGhhbmRsaW5nIGFmdGVyIG1vdXNlZG93blxuICAgIGlmICghdGhpcy5uYXRpdmVEcmFnZ2FibGUgJiYgU2FmYXJpICYmIHRhcmdldCAmJiB0YXJnZXQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0VMRUNUJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0YXJnZXQgPSBjbG9zZXN0KHRhcmdldCwgb3B0aW9ucy5kcmFnZ2FibGUsIGVsLCBmYWxzZSk7XG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuYW5pbWF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGxhc3REb3duRWwgPT09IHRhcmdldCkge1xuICAgICAgLy8gSWdub3JpbmcgZHVwbGljYXRlIGBkb3duYFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgaW5kZXggb2YgdGhlIGRyYWdnZWQgZWxlbWVudCB3aXRoaW4gaXRzIHBhcmVudFxuICAgIG9sZEluZGV4ID0gaW5kZXgodGFyZ2V0KTtcbiAgICBvbGREcmFnZ2FibGVJbmRleCA9IGluZGV4KHRhcmdldCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xuXG4gICAgLy8gQ2hlY2sgZmlsdGVyXG4gICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChmaWx0ZXIuY2FsbCh0aGlzLCBldnQsIHRhcmdldCwgdGhpcykpIHtcbiAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHNvcnRhYmxlOiBfdGhpcyxcbiAgICAgICAgICByb290RWw6IG9yaWdpbmFsVGFyZ2V0LFxuICAgICAgICAgIG5hbWU6ICdmaWx0ZXInLFxuICAgICAgICAgIHRhcmdldEVsOiB0YXJnZXQsXG4gICAgICAgICAgdG9FbDogZWwsXG4gICAgICAgICAgZnJvbUVsOiBlbFxuICAgICAgICB9KTtcbiAgICAgICAgcGx1Z2luRXZlbnQoJ2ZpbHRlcicsIF90aGlzLCB7XG4gICAgICAgICAgZXZ0OiBldnRcbiAgICAgICAgfSk7XG4gICAgICAgIHByZXZlbnRPbkZpbHRlciAmJiBldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuOyAvLyBjYW5jZWwgZG5kXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmaWx0ZXIpIHtcbiAgICAgIGZpbHRlciA9IGZpbHRlci5zcGxpdCgnLCcpLnNvbWUoZnVuY3Rpb24gKGNyaXRlcmlhKSB7XG4gICAgICAgIGNyaXRlcmlhID0gY2xvc2VzdChvcmlnaW5hbFRhcmdldCwgY3JpdGVyaWEudHJpbSgpLCBlbCwgZmFsc2UpO1xuICAgICAgICBpZiAoY3JpdGVyaWEpIHtcbiAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICBzb3J0YWJsZTogX3RoaXMsXG4gICAgICAgICAgICByb290RWw6IGNyaXRlcmlhLFxuICAgICAgICAgICAgbmFtZTogJ2ZpbHRlcicsXG4gICAgICAgICAgICB0YXJnZXRFbDogdGFyZ2V0LFxuICAgICAgICAgICAgZnJvbUVsOiBlbCxcbiAgICAgICAgICAgIHRvRWw6IGVsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcGx1Z2luRXZlbnQoJ2ZpbHRlcicsIF90aGlzLCB7XG4gICAgICAgICAgICBldnQ6IGV2dFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgcHJldmVudE9uRmlsdGVyICYmIGV2dC5jYW5jZWxhYmxlICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47IC8vIGNhbmNlbCBkbmRcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuaGFuZGxlICYmICFjbG9zZXN0KG9yaWdpbmFsVGFyZ2V0LCBvcHRpb25zLmhhbmRsZSwgZWwsIGZhbHNlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFByZXBhcmUgYGRyYWdzdGFydGBcbiAgICB0aGlzLl9wcmVwYXJlRHJhZ1N0YXJ0KGV2dCwgdG91Y2gsIHRhcmdldCk7XG4gIH0sXG4gIF9wcmVwYXJlRHJhZ1N0YXJ0OiBmdW5jdGlvbiBfcHJlcGFyZURyYWdTdGFydCggLyoqIEV2ZW50ICovZXZ0LCAvKiogVG91Y2ggKi90b3VjaCwgLyoqIEhUTUxFbGVtZW50ICovdGFyZ2V0KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgIGVsID0gX3RoaXMuZWwsXG4gICAgICBvcHRpb25zID0gX3RoaXMub3B0aW9ucyxcbiAgICAgIG93bmVyRG9jdW1lbnQgPSBlbC5vd25lckRvY3VtZW50LFxuICAgICAgZHJhZ1N0YXJ0Rm47XG4gICAgaWYgKHRhcmdldCAmJiAhZHJhZ0VsICYmIHRhcmdldC5wYXJlbnROb2RlID09PSBlbCkge1xuICAgICAgdmFyIGRyYWdSZWN0ID0gZ2V0UmVjdCh0YXJnZXQpO1xuICAgICAgcm9vdEVsID0gZWw7XG4gICAgICBkcmFnRWwgPSB0YXJnZXQ7XG4gICAgICBwYXJlbnRFbCA9IGRyYWdFbC5wYXJlbnROb2RlO1xuICAgICAgbmV4dEVsID0gZHJhZ0VsLm5leHRTaWJsaW5nO1xuICAgICAgbGFzdERvd25FbCA9IHRhcmdldDtcbiAgICAgIGFjdGl2ZUdyb3VwID0gb3B0aW9ucy5ncm91cDtcbiAgICAgIFNvcnRhYmxlLmRyYWdnZWQgPSBkcmFnRWw7XG4gICAgICB0YXBFdnQgPSB7XG4gICAgICAgIHRhcmdldDogZHJhZ0VsLFxuICAgICAgICBjbGllbnRYOiAodG91Y2ggfHwgZXZ0KS5jbGllbnRYLFxuICAgICAgICBjbGllbnRZOiAodG91Y2ggfHwgZXZ0KS5jbGllbnRZXG4gICAgICB9O1xuICAgICAgdGFwRGlzdGFuY2VMZWZ0ID0gdGFwRXZ0LmNsaWVudFggLSBkcmFnUmVjdC5sZWZ0O1xuICAgICAgdGFwRGlzdGFuY2VUb3AgPSB0YXBFdnQuY2xpZW50WSAtIGRyYWdSZWN0LnRvcDtcbiAgICAgIHRoaXMuX2xhc3RYID0gKHRvdWNoIHx8IGV2dCkuY2xpZW50WDtcbiAgICAgIHRoaXMuX2xhc3RZID0gKHRvdWNoIHx8IGV2dCkuY2xpZW50WTtcbiAgICAgIGRyYWdFbC5zdHlsZVsnd2lsbC1jaGFuZ2UnXSA9ICdhbGwnO1xuICAgICAgZHJhZ1N0YXJ0Rm4gPSBmdW5jdGlvbiBkcmFnU3RhcnRGbigpIHtcbiAgICAgICAgcGx1Z2luRXZlbnQoJ2RlbGF5RW5kZWQnLCBfdGhpcywge1xuICAgICAgICAgIGV2dDogZXZ0XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkge1xuICAgICAgICAgIF90aGlzLl9vbkRyb3AoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGVsYXllZCBkcmFnIGhhcyBiZWVuIHRyaWdnZXJlZFxuICAgICAgICAvLyB3ZSBjYW4gcmUtZW5hYmxlIHRoZSBldmVudHM6IHRvdWNobW92ZS9tb3VzZW1vdmVcbiAgICAgICAgX3RoaXMuX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50cygpO1xuICAgICAgICBpZiAoIUZpcmVGb3ggJiYgX3RoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgZHJhZ0VsLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCaW5kIHRoZSBldmVudHM6IGRyYWdzdGFydC9kcmFnZW5kXG4gICAgICAgIF90aGlzLl90cmlnZ2VyRHJhZ1N0YXJ0KGV2dCwgdG91Y2gpO1xuXG4gICAgICAgIC8vIERyYWcgc3RhcnQgZXZlbnRcbiAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHNvcnRhYmxlOiBfdGhpcyxcbiAgICAgICAgICBuYW1lOiAnY2hvb3NlJyxcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2hvc2VuIGl0ZW1cbiAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBvcHRpb25zLmNob3NlbkNsYXNzLCB0cnVlKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIERpc2FibGUgXCJkcmFnZ2FibGVcIlxuICAgICAgb3B0aW9ucy5pZ25vcmUuc3BsaXQoJywnKS5mb3JFYWNoKGZ1bmN0aW9uIChjcml0ZXJpYSkge1xuICAgICAgICBmaW5kKGRyYWdFbCwgY3JpdGVyaWEudHJpbSgpLCBfZGlzYWJsZURyYWdnYWJsZSk7XG4gICAgICB9KTtcbiAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdkcmFnb3ZlcicsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gICAgICBvbihvd25lckRvY3VtZW50LCAndG91Y2htb3ZlJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICAgICAgb24ob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaGVuZCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgX3RoaXMuX29uRHJvcCk7XG5cbiAgICAgIC8vIE1ha2UgZHJhZ0VsIGRyYWdnYWJsZSAobXVzdCBiZSBiZWZvcmUgZGVsYXkgZm9yIEZpcmVGb3gpXG4gICAgICBpZiAoRmlyZUZveCAmJiB0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMudG91Y2hTdGFydFRocmVzaG9sZCA9IDQ7XG4gICAgICAgIGRyYWdFbC5kcmFnZ2FibGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcGx1Z2luRXZlbnQoJ2RlbGF5U3RhcnQnLCB0aGlzLCB7XG4gICAgICAgIGV2dDogZXZ0XG4gICAgICB9KTtcblxuICAgICAgLy8gRGVsYXkgaXMgaW1wb3NzaWJsZSBmb3IgbmF0aXZlIERuRCBpbiBFZGdlIG9yIElFXG4gICAgICBpZiAob3B0aW9ucy5kZWxheSAmJiAoIW9wdGlvbnMuZGVsYXlPblRvdWNoT25seSB8fCB0b3VjaCkgJiYgKCF0aGlzLm5hdGl2ZURyYWdnYWJsZSB8fCAhKEVkZ2UgfHwgSUUxMU9yTGVzcykpKSB7XG4gICAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICAgICAgdGhpcy5fb25Ecm9wKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1c2VyIG1vdmVzIHRoZSBwb2ludGVyIG9yIGxldCBnbyB0aGUgY2xpY2sgb3IgdG91Y2hcbiAgICAgICAgLy8gYmVmb3JlIHRoZSBkZWxheSBoYXMgYmVlbiByZWFjaGVkOlxuICAgICAgICAvLyBkaXNhYmxlIHRoZSBkZWxheWVkIGRyYWdcbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBfdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgX3RoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgICAgICBvbihvd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgX3RoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaG1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICAgICAgb3B0aW9ucy5zdXBwb3J0UG9pbnRlciAmJiBvbihvd25lckRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICAgICAgX3RoaXMuX2RyYWdTdGFydFRpbWVyID0gc2V0VGltZW91dChkcmFnU3RhcnRGbiwgb3B0aW9ucy5kZWxheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnU3RhcnRGbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcjogZnVuY3Rpb24gX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlciggLyoqIFRvdWNoRXZlbnR8UG9pbnRlckV2ZW50ICoqL2UpIHtcbiAgICB2YXIgdG91Y2ggPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlO1xuICAgIGlmIChNYXRoLm1heChNYXRoLmFicyh0b3VjaC5jbGllbnRYIC0gdGhpcy5fbGFzdFgpLCBNYXRoLmFicyh0b3VjaC5jbGllbnRZIC0gdGhpcy5fbGFzdFkpKSA+PSBNYXRoLmZsb29yKHRoaXMub3B0aW9ucy50b3VjaFN0YXJ0VGhyZXNob2xkIC8gKHRoaXMubmF0aXZlRHJhZ2dhYmxlICYmIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpKSkge1xuICAgICAgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKCk7XG4gICAgfVxuICB9LFxuICBfZGlzYWJsZURlbGF5ZWREcmFnOiBmdW5jdGlvbiBfZGlzYWJsZURlbGF5ZWREcmFnKCkge1xuICAgIGRyYWdFbCAmJiBfZGlzYWJsZURyYWdnYWJsZShkcmFnRWwpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9kcmFnU3RhcnRUaW1lcik7XG4gICAgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnRXZlbnRzKCk7XG4gIH0sXG4gIF9kaXNhYmxlRGVsYXllZERyYWdFdmVudHM6IGZ1bmN0aW9uIF9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSB0aGlzLmVsLm93bmVyRG9jdW1lbnQ7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpO1xuICB9LFxuICBfdHJpZ2dlckRyYWdTdGFydDogZnVuY3Rpb24gX3RyaWdnZXJEcmFnU3RhcnQoIC8qKiBFdmVudCAqL2V2dCwgLyoqIFRvdWNoICovdG91Y2gpIHtcbiAgICB0b3VjaCA9IHRvdWNoIHx8IGV2dC5wb2ludGVyVHlwZSA9PSAndG91Y2gnICYmIGV2dDtcbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ2dhYmxlIHx8IHRvdWNoKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRvdWNoKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uKGRyYWdFbCwgJ2RyYWdlbmQnLCB0aGlzKTtcbiAgICAgIG9uKHJvb3RFbCwgJ2RyYWdzdGFydCcsIHRoaXMuX29uRHJhZ1N0YXJ0KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGlmIChkb2N1bWVudC5zZWxlY3Rpb24pIHtcbiAgICAgICAgLy8gVGltZW91dCBuZWNjZXNzYXJ5IGZvciBJRTlcbiAgICAgICAgX25leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkb2N1bWVudC5zZWxlY3Rpb24uZW1wdHkoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuICB9LFxuICBfZHJhZ1N0YXJ0ZWQ6IGZ1bmN0aW9uIF9kcmFnU3RhcnRlZChmYWxsYmFjaywgZXZ0KSB7XG4gICAgYXdhaXRpbmdEcmFnU3RhcnRlZCA9IGZhbHNlO1xuICAgIGlmIChyb290RWwgJiYgZHJhZ0VsKSB7XG4gICAgICBwbHVnaW5FdmVudCgnZHJhZ1N0YXJ0ZWQnLCB0aGlzLCB7XG4gICAgICAgIGV2dDogZXZ0XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgICBvbihkb2N1bWVudCwgJ2RyYWdvdmVyJywgX2NoZWNrT3V0c2lkZVRhcmdldEVsKTtcbiAgICAgIH1cbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAvLyBBcHBseSBlZmZlY3RcbiAgICAgICFmYWxsYmFjayAmJiB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZHJhZ0NsYXNzLCBmYWxzZSk7XG4gICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZ2hvc3RDbGFzcywgdHJ1ZSk7XG4gICAgICBTb3J0YWJsZS5hY3RpdmUgPSB0aGlzO1xuICAgICAgZmFsbGJhY2sgJiYgdGhpcy5fYXBwZW5kR2hvc3QoKTtcblxuICAgICAgLy8gRHJhZyBzdGFydCBldmVudFxuICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgbmFtZTogJ3N0YXJ0JyxcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbnVsbGluZygpO1xuICAgIH1cbiAgfSxcbiAgX2VtdWxhdGVEcmFnT3ZlcjogZnVuY3Rpb24gX2VtdWxhdGVEcmFnT3ZlcigpIHtcbiAgICBpZiAodG91Y2hFdnQpIHtcbiAgICAgIHRoaXMuX2xhc3RYID0gdG91Y2hFdnQuY2xpZW50WDtcbiAgICAgIHRoaXMuX2xhc3RZID0gdG91Y2hFdnQuY2xpZW50WTtcbiAgICAgIF9oaWRlR2hvc3RGb3JUYXJnZXQoKTtcbiAgICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoRXZ0LmNsaWVudFgsIHRvdWNoRXZ0LmNsaWVudFkpO1xuICAgICAgdmFyIHBhcmVudCA9IHRhcmdldDtcbiAgICAgIHdoaWxlICh0YXJnZXQgJiYgdGFyZ2V0LnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnNoYWRvd1Jvb3QuZWxlbWVudEZyb21Qb2ludCh0b3VjaEV2dC5jbGllbnRYLCB0b3VjaEV2dC5jbGllbnRZKTtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gcGFyZW50KSBicmVhaztcbiAgICAgICAgcGFyZW50ID0gdGFyZ2V0O1xuICAgICAgfVxuICAgICAgZHJhZ0VsLnBhcmVudE5vZGVbZXhwYW5kb10uX2lzT3V0c2lkZVRoaXNFbCh0YXJnZXQpO1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgaWYgKHBhcmVudFtleHBhbmRvXSkge1xuICAgICAgICAgICAgdmFyIGluc2VydGVkID0gdm9pZCAwO1xuICAgICAgICAgICAgaW5zZXJ0ZWQgPSBwYXJlbnRbZXhwYW5kb10uX29uRHJhZ092ZXIoe1xuICAgICAgICAgICAgICBjbGllbnRYOiB0b3VjaEV2dC5jbGllbnRYLFxuICAgICAgICAgICAgICBjbGllbnRZOiB0b3VjaEV2dC5jbGllbnRZLFxuICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgcm9vdEVsOiBwYXJlbnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGluc2VydGVkICYmICF0aGlzLm9wdGlvbnMuZHJhZ292ZXJCdWJibGUpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldCA9IHBhcmVudDsgLy8gc3RvcmUgbGFzdCBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgLyoganNoaW50IGJvc3M6dHJ1ZSAqLyB3aGlsZSAocGFyZW50ID0gZ2V0UGFyZW50T3JIb3N0KHBhcmVudCkpO1xuICAgICAgfVxuICAgICAgX3VuaGlkZUdob3N0Rm9yVGFyZ2V0KCk7XG4gICAgfVxuICB9LFxuICBfb25Ub3VjaE1vdmU6IGZ1bmN0aW9uIF9vblRvdWNoTW92ZSggLyoqVG91Y2hFdmVudCovZXZ0KSB7XG4gICAgaWYgKHRhcEV2dCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGZhbGxiYWNrVG9sZXJhbmNlID0gb3B0aW9ucy5mYWxsYmFja1RvbGVyYW5jZSxcbiAgICAgICAgZmFsbGJhY2tPZmZzZXQgPSBvcHRpb25zLmZhbGxiYWNrT2Zmc2V0LFxuICAgICAgICB0b3VjaCA9IGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQsXG4gICAgICAgIGdob3N0TWF0cml4ID0gZ2hvc3RFbCAmJiBtYXRyaXgoZ2hvc3RFbCwgdHJ1ZSksXG4gICAgICAgIHNjYWxlWCA9IGdob3N0RWwgJiYgZ2hvc3RNYXRyaXggJiYgZ2hvc3RNYXRyaXguYSxcbiAgICAgICAgc2NhbGVZID0gZ2hvc3RFbCAmJiBnaG9zdE1hdHJpeCAmJiBnaG9zdE1hdHJpeC5kLFxuICAgICAgICByZWxhdGl2ZVNjcm9sbE9mZnNldCA9IFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5ICYmIGdob3N0UmVsYXRpdmVQYXJlbnQgJiYgZ2V0UmVsYXRpdmVTY3JvbGxPZmZzZXQoZ2hvc3RSZWxhdGl2ZVBhcmVudCksXG4gICAgICAgIGR4ID0gKHRvdWNoLmNsaWVudFggLSB0YXBFdnQuY2xpZW50WCArIGZhbGxiYWNrT2Zmc2V0LngpIC8gKHNjYWxlWCB8fCAxKSArIChyZWxhdGl2ZVNjcm9sbE9mZnNldCA/IHJlbGF0aXZlU2Nyb2xsT2Zmc2V0WzBdIC0gZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGxbMF0gOiAwKSAvIChzY2FsZVggfHwgMSksXG4gICAgICAgIGR5ID0gKHRvdWNoLmNsaWVudFkgLSB0YXBFdnQuY2xpZW50WSArIGZhbGxiYWNrT2Zmc2V0LnkpIC8gKHNjYWxlWSB8fCAxKSArIChyZWxhdGl2ZVNjcm9sbE9mZnNldCA/IHJlbGF0aXZlU2Nyb2xsT2Zmc2V0WzFdIC0gZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGxbMV0gOiAwKSAvIChzY2FsZVkgfHwgMSk7XG5cbiAgICAgIC8vIG9ubHkgc2V0IHRoZSBzdGF0dXMgdG8gZHJhZ2dpbmcsIHdoZW4gd2UgYXJlIGFjdHVhbGx5IGRyYWdnaW5nXG4gICAgICBpZiAoIVNvcnRhYmxlLmFjdGl2ZSAmJiAhYXdhaXRpbmdEcmFnU3RhcnRlZCkge1xuICAgICAgICBpZiAoZmFsbGJhY2tUb2xlcmFuY2UgJiYgTWF0aC5tYXgoTWF0aC5hYnModG91Y2guY2xpZW50WCAtIHRoaXMuX2xhc3RYKSwgTWF0aC5hYnModG91Y2guY2xpZW50WSAtIHRoaXMuX2xhc3RZKSkgPCBmYWxsYmFja1RvbGVyYW5jZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vbkRyYWdTdGFydChldnQsIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKGdob3N0RWwpIHtcbiAgICAgICAgaWYgKGdob3N0TWF0cml4KSB7XG4gICAgICAgICAgZ2hvc3RNYXRyaXguZSArPSBkeCAtIChsYXN0RHggfHwgMCk7XG4gICAgICAgICAgZ2hvc3RNYXRyaXguZiArPSBkeSAtIChsYXN0RHkgfHwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2hvc3RNYXRyaXggPSB7XG4gICAgICAgICAgICBhOiAxLFxuICAgICAgICAgICAgYjogMCxcbiAgICAgICAgICAgIGM6IDAsXG4gICAgICAgICAgICBkOiAxLFxuICAgICAgICAgICAgZTogZHgsXG4gICAgICAgICAgICBmOiBkeVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNzc01hdHJpeCA9IFwibWF0cml4KFwiLmNvbmNhdChnaG9zdE1hdHJpeC5hLCBcIixcIikuY29uY2F0KGdob3N0TWF0cml4LmIsIFwiLFwiKS5jb25jYXQoZ2hvc3RNYXRyaXguYywgXCIsXCIpLmNvbmNhdChnaG9zdE1hdHJpeC5kLCBcIixcIikuY29uY2F0KGdob3N0TWF0cml4LmUsIFwiLFwiKS5jb25jYXQoZ2hvc3RNYXRyaXguZiwgXCIpXCIpO1xuICAgICAgICBjc3MoZ2hvc3RFbCwgJ3dlYmtpdFRyYW5zZm9ybScsIGNzc01hdHJpeCk7XG4gICAgICAgIGNzcyhnaG9zdEVsLCAnbW96VHJhbnNmb3JtJywgY3NzTWF0cml4KTtcbiAgICAgICAgY3NzKGdob3N0RWwsICdtc1RyYW5zZm9ybScsIGNzc01hdHJpeCk7XG4gICAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNmb3JtJywgY3NzTWF0cml4KTtcbiAgICAgICAgbGFzdER4ID0gZHg7XG4gICAgICAgIGxhc3REeSA9IGR5O1xuICAgICAgICB0b3VjaEV2dCA9IHRvdWNoO1xuICAgICAgfVxuICAgICAgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9LFxuICBfYXBwZW5kR2hvc3Q6IGZ1bmN0aW9uIF9hcHBlbmRHaG9zdCgpIHtcbiAgICAvLyBCdWcgaWYgdXNpbmcgc2NhbGUoKTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjYzNzA1OFxuICAgIC8vIE5vdCBiZWluZyBhZGp1c3RlZCBmb3JcbiAgICBpZiAoIWdob3N0RWwpIHtcbiAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLm9wdGlvbnMuZmFsbGJhY2tPbkJvZHkgPyBkb2N1bWVudC5ib2R5IDogcm9vdEVsLFxuICAgICAgICByZWN0ID0gZ2V0UmVjdChkcmFnRWwsIHRydWUsIFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5LCB0cnVlLCBjb250YWluZXIpLFxuICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAvLyBQb3NpdGlvbiBhYnNvbHV0ZWx5XG4gICAgICBpZiAoUG9zaXRpb25HaG9zdEFic29sdXRlbHkpIHtcbiAgICAgICAgLy8gR2V0IHJlbGF0aXZlbHkgcG9zaXRpb25lZCBwYXJlbnRcbiAgICAgICAgZ2hvc3RSZWxhdGl2ZVBhcmVudCA9IGNvbnRhaW5lcjtcbiAgICAgICAgd2hpbGUgKGNzcyhnaG9zdFJlbGF0aXZlUGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycgJiYgY3NzKGdob3N0UmVsYXRpdmVQYXJlbnQsICd0cmFuc2Zvcm0nKSA9PT0gJ25vbmUnICYmIGdob3N0UmVsYXRpdmVQYXJlbnQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgZ2hvc3RSZWxhdGl2ZVBhcmVudCA9IGdob3N0UmVsYXRpdmVQYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2hvc3RSZWxhdGl2ZVBhcmVudCAhPT0gZG9jdW1lbnQuYm9keSAmJiBnaG9zdFJlbGF0aXZlUGFyZW50ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAoZ2hvc3RSZWxhdGl2ZVBhcmVudCA9PT0gZG9jdW1lbnQpIGdob3N0UmVsYXRpdmVQYXJlbnQgPSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCk7XG4gICAgICAgICAgcmVjdC50b3AgKz0gZ2hvc3RSZWxhdGl2ZVBhcmVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgcmVjdC5sZWZ0ICs9IGdob3N0UmVsYXRpdmVQYXJlbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnaG9zdFJlbGF0aXZlUGFyZW50ID0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGdob3N0UmVsYXRpdmVQYXJlbnRJbml0aWFsU2Nyb2xsID0gZ2V0UmVsYXRpdmVTY3JvbGxPZmZzZXQoZ2hvc3RSZWxhdGl2ZVBhcmVudCk7XG4gICAgICB9XG4gICAgICBnaG9zdEVsID0gZHJhZ0VsLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGdob3N0RWwsIG9wdGlvbnMuZ2hvc3RDbGFzcywgZmFsc2UpO1xuICAgICAgdG9nZ2xlQ2xhc3MoZ2hvc3RFbCwgb3B0aW9ucy5mYWxsYmFja0NsYXNzLCB0cnVlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGdob3N0RWwsIG9wdGlvbnMuZHJhZ0NsYXNzLCB0cnVlKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNpdGlvbicsICcnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNmb3JtJywgJycpO1xuICAgICAgY3NzKGdob3N0RWwsICdib3gtc2l6aW5nJywgJ2JvcmRlci1ib3gnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnbWFyZ2luJywgMCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3RvcCcsIHJlY3QudG9wKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnbGVmdCcsIHJlY3QubGVmdCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3dpZHRoJywgcmVjdC53aWR0aCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ2hlaWdodCcsIHJlY3QuaGVpZ2h0KTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnb3BhY2l0eScsICcwLjgnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAncG9zaXRpb24nLCBQb3NpdGlvbkdob3N0QWJzb2x1dGVseSA/ICdhYnNvbHV0ZScgOiAnZml4ZWQnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnekluZGV4JywgJzEwMDAwMCcpO1xuICAgICAgY3NzKGdob3N0RWwsICdwb2ludGVyRXZlbnRzJywgJ25vbmUnKTtcbiAgICAgIFNvcnRhYmxlLmdob3N0ID0gZ2hvc3RFbDtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnaG9zdEVsKTtcblxuICAgICAgLy8gU2V0IHRyYW5zZm9ybS1vcmlnaW5cbiAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNmb3JtLW9yaWdpbicsIHRhcERpc3RhbmNlTGVmdCAvIHBhcnNlSW50KGdob3N0RWwuc3R5bGUud2lkdGgpICogMTAwICsgJyUgJyArIHRhcERpc3RhbmNlVG9wIC8gcGFyc2VJbnQoZ2hvc3RFbC5zdHlsZS5oZWlnaHQpICogMTAwICsgJyUnKTtcbiAgICB9XG4gIH0sXG4gIF9vbkRyYWdTdGFydDogZnVuY3Rpb24gX29uRHJhZ1N0YXJ0KCAvKipFdmVudCovZXZ0LCAvKipib29sZWFuKi9mYWxsYmFjaykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIGRhdGFUcmFuc2ZlciA9IGV2dC5kYXRhVHJhbnNmZXI7XG4gICAgdmFyIG9wdGlvbnMgPSBfdGhpcy5vcHRpb25zO1xuICAgIHBsdWdpbkV2ZW50KCdkcmFnU3RhcnQnLCB0aGlzLCB7XG4gICAgICBldnQ6IGV2dFxuICAgIH0pO1xuICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICB0aGlzLl9vbkRyb3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcGx1Z2luRXZlbnQoJ3NldHVwQ2xvbmUnLCB0aGlzKTtcbiAgICBpZiAoIVNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgIGNsb25lRWwgPSBjbG9uZShkcmFnRWwpO1xuICAgICAgY2xvbmVFbC5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgIGNsb25lRWwuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICBjbG9uZUVsLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJyc7XG4gICAgICB0aGlzLl9oaWRlQ2xvbmUoKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGNsb25lRWwsIHRoaXMub3B0aW9ucy5jaG9zZW5DbGFzcywgZmFsc2UpO1xuICAgICAgU29ydGFibGUuY2xvbmUgPSBjbG9uZUVsO1xuICAgIH1cblxuICAgIC8vICMxMTQzOiBJRnJhbWUgc3VwcG9ydCB3b3JrYXJvdW5kXG4gICAgX3RoaXMuY2xvbmVJZCA9IF9uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBwbHVnaW5FdmVudCgnY2xvbmUnLCBfdGhpcyk7XG4gICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkgcmV0dXJuO1xuICAgICAgaWYgKCFfdGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlKSB7XG4gICAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUoY2xvbmVFbCwgZHJhZ0VsKTtcbiAgICAgIH1cbiAgICAgIF90aGlzLl9oaWRlQ2xvbmUoKTtcbiAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgc29ydGFibGU6IF90aGlzLFxuICAgICAgICBuYW1lOiAnY2xvbmUnXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAhZmFsbGJhY2sgJiYgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBvcHRpb25zLmRyYWdDbGFzcywgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgcHJvcGVyIGRyb3AgZXZlbnRzXG4gICAgaWYgKGZhbGxiYWNrKSB7XG4gICAgICBpZ25vcmVOZXh0Q2xpY2sgPSB0cnVlO1xuICAgICAgX3RoaXMuX2xvb3BJZCA9IHNldEludGVydmFsKF90aGlzLl9lbXVsYXRlRHJhZ092ZXIsIDUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVW5kbyB3aGF0IHdhcyBzZXQgaW4gX3ByZXBhcmVEcmFnU3RhcnQgYmVmb3JlIGRyYWcgc3RhcnRlZFxuICAgICAgb2ZmKGRvY3VtZW50LCAnbW91c2V1cCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgb2ZmKGRvY3VtZW50LCAndG91Y2hlbmQnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgX3RoaXMuX29uRHJvcCk7XG4gICAgICBpZiAoZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgIGRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xuICAgICAgICBvcHRpb25zLnNldERhdGEgJiYgb3B0aW9ucy5zZXREYXRhLmNhbGwoX3RoaXMsIGRhdGFUcmFuc2ZlciwgZHJhZ0VsKTtcbiAgICAgIH1cbiAgICAgIG9uKGRvY3VtZW50LCAnZHJvcCcsIF90aGlzKTtcblxuICAgICAgLy8gIzEyNzYgZml4OlxuICAgICAgY3NzKGRyYWdFbCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVaKDApJyk7XG4gICAgfVxuICAgIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSB0cnVlO1xuICAgIF90aGlzLl9kcmFnU3RhcnRJZCA9IF9uZXh0VGljayhfdGhpcy5fZHJhZ1N0YXJ0ZWQuYmluZChfdGhpcywgZmFsbGJhY2ssIGV2dCkpO1xuICAgIG9uKGRvY3VtZW50LCAnc2VsZWN0c3RhcnQnLCBfdGhpcyk7XG4gICAgbW92ZWQgPSB0cnVlO1xuICAgIGlmIChTYWZhcmkpIHtcbiAgICAgIGNzcyhkb2N1bWVudC5ib2R5LCAndXNlci1zZWxlY3QnLCAnbm9uZScpO1xuICAgIH1cbiAgfSxcbiAgLy8gUmV0dXJucyB0cnVlIC0gaWYgbm8gZnVydGhlciBhY3Rpb24gaXMgbmVlZGVkIChlaXRoZXIgaW5zZXJ0ZWQgb3IgYW5vdGhlciBjb25kaXRpb24pXG4gIF9vbkRyYWdPdmVyOiBmdW5jdGlvbiBfb25EcmFnT3ZlciggLyoqRXZlbnQqL2V2dCkge1xuICAgIHZhciBlbCA9IHRoaXMuZWwsXG4gICAgICB0YXJnZXQgPSBldnQudGFyZ2V0LFxuICAgICAgZHJhZ1JlY3QsXG4gICAgICB0YXJnZXRSZWN0LFxuICAgICAgcmV2ZXJ0LFxuICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgIGdyb3VwID0gb3B0aW9ucy5ncm91cCxcbiAgICAgIGFjdGl2ZVNvcnRhYmxlID0gU29ydGFibGUuYWN0aXZlLFxuICAgICAgaXNPd25lciA9IGFjdGl2ZUdyb3VwID09PSBncm91cCxcbiAgICAgIGNhblNvcnQgPSBvcHRpb25zLnNvcnQsXG4gICAgICBmcm9tU29ydGFibGUgPSBwdXRTb3J0YWJsZSB8fCBhY3RpdmVTb3J0YWJsZSxcbiAgICAgIHZlcnRpY2FsLFxuICAgICAgX3RoaXMgPSB0aGlzLFxuICAgICAgY29tcGxldGVkRmlyZWQgPSBmYWxzZTtcbiAgICBpZiAoX3NpbGVudCkgcmV0dXJuO1xuICAgIGZ1bmN0aW9uIGRyYWdPdmVyRXZlbnQobmFtZSwgZXh0cmEpIHtcbiAgICAgIHBsdWdpbkV2ZW50KG5hbWUsIF90aGlzLCBfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgIGV2dDogZXZ0LFxuICAgICAgICBpc093bmVyOiBpc093bmVyLFxuICAgICAgICBheGlzOiB2ZXJ0aWNhbCA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgIHJldmVydDogcmV2ZXJ0LFxuICAgICAgICBkcmFnUmVjdDogZHJhZ1JlY3QsXG4gICAgICAgIHRhcmdldFJlY3Q6IHRhcmdldFJlY3QsXG4gICAgICAgIGNhblNvcnQ6IGNhblNvcnQsXG4gICAgICAgIGZyb21Tb3J0YWJsZTogZnJvbVNvcnRhYmxlLFxuICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgY29tcGxldGVkOiBjb21wbGV0ZWQsXG4gICAgICAgIG9uTW92ZTogZnVuY3Rpb24gb25Nb3ZlKHRhcmdldCwgYWZ0ZXIpIHtcbiAgICAgICAgICByZXR1cm4gX29uTW92ZShyb290RWwsIGVsLCBkcmFnRWwsIGRyYWdSZWN0LCB0YXJnZXQsIGdldFJlY3QodGFyZ2V0KSwgZXZ0LCBhZnRlcik7XG4gICAgICAgIH0sXG4gICAgICAgIGNoYW5nZWQ6IGNoYW5nZWRcbiAgICAgIH0sIGV4dHJhKSk7XG4gICAgfVxuXG4gICAgLy8gQ2FwdHVyZSBhbmltYXRpb24gc3RhdGVcbiAgICBmdW5jdGlvbiBjYXB0dXJlKCkge1xuICAgICAgZHJhZ092ZXJFdmVudCgnZHJhZ092ZXJBbmltYXRpb25DYXB0dXJlJyk7XG4gICAgICBfdGhpcy5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICAgIGlmIChfdGhpcyAhPT0gZnJvbVNvcnRhYmxlKSB7XG4gICAgICAgIGZyb21Tb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gaW52b2NhdGlvbiB3aGVuIGRyYWdFbCBpcyBpbnNlcnRlZCAob3IgY29tcGxldGVkKVxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlZChpbnNlcnRpb24pIHtcbiAgICAgIGRyYWdPdmVyRXZlbnQoJ2RyYWdPdmVyQ29tcGxldGVkJywge1xuICAgICAgICBpbnNlcnRpb246IGluc2VydGlvblxuICAgICAgfSk7XG4gICAgICBpZiAoaW5zZXJ0aW9uKSB7XG4gICAgICAgIC8vIENsb25lcyBtdXN0IGJlIGhpZGRlbiBiZWZvcmUgZm9sZGluZyBhbmltYXRpb24gdG8gY2FwdHVyZSBkcmFnUmVjdEFic29sdXRlIHByb3Blcmx5XG4gICAgICAgIGlmIChpc093bmVyKSB7XG4gICAgICAgICAgYWN0aXZlU29ydGFibGUuX2hpZGVDbG9uZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlLl9zaG93Q2xvbmUoX3RoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfdGhpcyAhPT0gZnJvbVNvcnRhYmxlKSB7XG4gICAgICAgICAgLy8gU2V0IGdob3N0IGNsYXNzIHRvIG5ldyBzb3J0YWJsZSdzIGdob3N0IGNsYXNzXG4gICAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBwdXRTb3J0YWJsZSA/IHB1dFNvcnRhYmxlLm9wdGlvbnMuZ2hvc3RDbGFzcyA6IGFjdGl2ZVNvcnRhYmxlLm9wdGlvbnMuZ2hvc3RDbGFzcywgZmFsc2UpO1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgb3B0aW9ucy5naG9zdENsYXNzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHV0U29ydGFibGUgIT09IF90aGlzICYmIF90aGlzICE9PSBTb3J0YWJsZS5hY3RpdmUpIHtcbiAgICAgICAgICBwdXRTb3J0YWJsZSA9IF90aGlzO1xuICAgICAgICB9IGVsc2UgaWYgKF90aGlzID09PSBTb3J0YWJsZS5hY3RpdmUgJiYgcHV0U29ydGFibGUpIHtcbiAgICAgICAgICBwdXRTb3J0YWJsZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbmltYXRpb25cbiAgICAgICAgaWYgKGZyb21Tb3J0YWJsZSA9PT0gX3RoaXMpIHtcbiAgICAgICAgICBfdGhpcy5faWdub3JlV2hpbGVBbmltYXRpbmcgPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuYW5pbWF0ZUFsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZHJhZ092ZXJFdmVudCgnZHJhZ092ZXJBbmltYXRpb25Db21wbGV0ZScpO1xuICAgICAgICAgIF90aGlzLl9pZ25vcmVXaGlsZUFuaW1hdGluZyA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoX3RoaXMgIT09IGZyb21Tb3J0YWJsZSkge1xuICAgICAgICAgIGZyb21Tb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgICAgICAgZnJvbVNvcnRhYmxlLl9pZ25vcmVXaGlsZUFuaW1hdGluZyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTnVsbCBsYXN0VGFyZ2V0IGlmIGl0IGlzIG5vdCBpbnNpZGUgYSBwcmV2aW91c2x5IHN3YXBwZWQgZWxlbWVudFxuICAgICAgaWYgKHRhcmdldCA9PT0gZHJhZ0VsICYmICFkcmFnRWwuYW5pbWF0ZWQgfHwgdGFyZ2V0ID09PSBlbCAmJiAhdGFyZ2V0LmFuaW1hdGVkKSB7XG4gICAgICAgIGxhc3RUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBubyBidWJibGluZyBhbmQgbm90IGZhbGxiYWNrXG4gICAgICBpZiAoIW9wdGlvbnMuZHJhZ292ZXJCdWJibGUgJiYgIWV2dC5yb290RWwgJiYgdGFyZ2V0ICE9PSBkb2N1bWVudCkge1xuICAgICAgICBkcmFnRWwucGFyZW50Tm9kZVtleHBhbmRvXS5faXNPdXRzaWRlVGhpc0VsKGV2dC50YXJnZXQpO1xuXG4gICAgICAgIC8vIERvIG5vdCBkZXRlY3QgZm9yIGVtcHR5IGluc2VydCBpZiBhbHJlYWR5IGluc2VydGVkXG4gICAgICAgICFpbnNlcnRpb24gJiYgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQoZXZ0KTtcbiAgICAgIH1cbiAgICAgICFvcHRpb25zLmRyYWdvdmVyQnViYmxlICYmIGV2dC5zdG9wUHJvcGFnYXRpb24gJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuIGNvbXBsZXRlZEZpcmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDYWxsIHdoZW4gZHJhZ0VsIGhhcyBiZWVuIGluc2VydGVkXG4gICAgZnVuY3Rpb24gY2hhbmdlZCgpIHtcbiAgICAgIG5ld0luZGV4ID0gaW5kZXgoZHJhZ0VsKTtcbiAgICAgIG5ld0RyYWdnYWJsZUluZGV4ID0gaW5kZXgoZHJhZ0VsLCBvcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgIHNvcnRhYmxlOiBfdGhpcyxcbiAgICAgICAgbmFtZTogJ2NoYW5nZScsXG4gICAgICAgIHRvRWw6IGVsLFxuICAgICAgICBuZXdJbmRleDogbmV3SW5kZXgsXG4gICAgICAgIG5ld0RyYWdnYWJsZUluZGV4OiBuZXdEcmFnZ2FibGVJbmRleCxcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGV2dC5wcmV2ZW50RGVmYXVsdCAhPT0gdm9pZCAwKSB7XG4gICAgICBldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdGFyZ2V0ID0gY2xvc2VzdCh0YXJnZXQsIG9wdGlvbnMuZHJhZ2dhYmxlLCBlbCwgdHJ1ZSk7XG4gICAgZHJhZ092ZXJFdmVudCgnZHJhZ092ZXInKTtcbiAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkgcmV0dXJuIGNvbXBsZXRlZEZpcmVkO1xuICAgIGlmIChkcmFnRWwuY29udGFpbnMoZXZ0LnRhcmdldCkgfHwgdGFyZ2V0LmFuaW1hdGVkICYmIHRhcmdldC5hbmltYXRpbmdYICYmIHRhcmdldC5hbmltYXRpbmdZIHx8IF90aGlzLl9pZ25vcmVXaGlsZUFuaW1hdGluZyA9PT0gdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcbiAgICB9XG4gICAgaWdub3JlTmV4dENsaWNrID0gZmFsc2U7XG4gICAgaWYgKGFjdGl2ZVNvcnRhYmxlICYmICFvcHRpb25zLmRpc2FibGVkICYmIChpc093bmVyID8gY2FuU29ydCB8fCAocmV2ZXJ0ID0gcGFyZW50RWwgIT09IHJvb3RFbCkgLy8gUmV2ZXJ0aW5nIGl0ZW0gaW50byB0aGUgb3JpZ2luYWwgbGlzdFxuICAgIDogcHV0U29ydGFibGUgPT09IHRoaXMgfHwgKHRoaXMubGFzdFB1dE1vZGUgPSBhY3RpdmVHcm91cC5jaGVja1B1bGwodGhpcywgYWN0aXZlU29ydGFibGUsIGRyYWdFbCwgZXZ0KSkgJiYgZ3JvdXAuY2hlY2tQdXQodGhpcywgYWN0aXZlU29ydGFibGUsIGRyYWdFbCwgZXZ0KSkpIHtcbiAgICAgIHZlcnRpY2FsID0gdGhpcy5fZ2V0RGlyZWN0aW9uKGV2dCwgdGFyZ2V0KSA9PT0gJ3ZlcnRpY2FsJztcbiAgICAgIGRyYWdSZWN0ID0gZ2V0UmVjdChkcmFnRWwpO1xuICAgICAgZHJhZ092ZXJFdmVudCgnZHJhZ092ZXJWYWxpZCcpO1xuICAgICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHJldHVybiBjb21wbGV0ZWRGaXJlZDtcbiAgICAgIGlmIChyZXZlcnQpIHtcbiAgICAgICAgcGFyZW50RWwgPSByb290RWw7IC8vIGFjdHVhbGl6YXRpb25cbiAgICAgICAgY2FwdHVyZSgpO1xuICAgICAgICB0aGlzLl9oaWRlQ2xvbmUoKTtcbiAgICAgICAgZHJhZ092ZXJFdmVudCgncmV2ZXJ0Jyk7XG4gICAgICAgIGlmICghU29ydGFibGUuZXZlbnRDYW5jZWxlZCkge1xuICAgICAgICAgIGlmIChuZXh0RWwpIHtcbiAgICAgICAgICAgIHJvb3RFbC5pbnNlcnRCZWZvcmUoZHJhZ0VsLCBuZXh0RWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb290RWwuYXBwZW5kQ2hpbGQoZHJhZ0VsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZCh0cnVlKTtcbiAgICAgIH1cbiAgICAgIHZhciBlbExhc3RDaGlsZCA9IGxhc3RDaGlsZChlbCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgICAgaWYgKCFlbExhc3RDaGlsZCB8fCBfZ2hvc3RJc0xhc3QoZXZ0LCB2ZXJ0aWNhbCwgdGhpcykgJiYgIWVsTGFzdENoaWxkLmFuaW1hdGVkKSB7XG4gICAgICAgIC8vIEluc2VydCB0byBlbmQgb2YgbGlzdFxuXG4gICAgICAgIC8vIElmIGFscmVhZHkgYXQgZW5kIG9mIGxpc3Q6IERvIG5vdCBpbnNlcnRcbiAgICAgICAgaWYgKGVsTGFzdENoaWxkID09PSBkcmFnRWwpIHtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgbGFzdCBlbGVtZW50LCBpdCBpcyB0aGUgdGFyZ2V0XG4gICAgICAgIGlmIChlbExhc3RDaGlsZCAmJiBlbCA9PT0gZXZ0LnRhcmdldCkge1xuICAgICAgICAgIHRhcmdldCA9IGVsTGFzdENoaWxkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXRSZWN0ID0gZ2V0UmVjdCh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfb25Nb3ZlKHJvb3RFbCwgZWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldCwgdGFyZ2V0UmVjdCwgZXZ0LCAhIXRhcmdldCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgY2FwdHVyZSgpO1xuICAgICAgICAgIGlmIChlbExhc3RDaGlsZCAmJiBlbExhc3RDaGlsZC5uZXh0U2libGluZykge1xuICAgICAgICAgICAgLy8gdGhlIGxhc3QgZHJhZ2dhYmxlIGVsZW1lbnQgaXMgbm90IHRoZSBsYXN0IG5vZGVcbiAgICAgICAgICAgIGVsLmluc2VydEJlZm9yZShkcmFnRWwsIGVsTGFzdENoaWxkLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZHJhZ0VsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyZW50RWwgPSBlbDsgLy8gYWN0dWFsaXphdGlvblxuXG4gICAgICAgICAgY2hhbmdlZCgpO1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZWxMYXN0Q2hpbGQgJiYgX2dob3N0SXNGaXJzdChldnQsIHZlcnRpY2FsLCB0aGlzKSkge1xuICAgICAgICAvLyBJbnNlcnQgdG8gc3RhcnQgb2YgbGlzdFxuICAgICAgICB2YXIgZmlyc3RDaGlsZCA9IGdldENoaWxkKGVsLCAwLCBvcHRpb25zLCB0cnVlKTtcbiAgICAgICAgaWYgKGZpcnN0Q2hpbGQgPT09IGRyYWdFbCkge1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldCA9IGZpcnN0Q2hpbGQ7XG4gICAgICAgIHRhcmdldFJlY3QgPSBnZXRSZWN0KHRhcmdldCk7XG4gICAgICAgIGlmIChfb25Nb3ZlKHJvb3RFbCwgZWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldCwgdGFyZ2V0UmVjdCwgZXZ0LCBmYWxzZSkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgY2FwdHVyZSgpO1xuICAgICAgICAgIGVsLmluc2VydEJlZm9yZShkcmFnRWwsIGZpcnN0Q2hpbGQpO1xuICAgICAgICAgIHBhcmVudEVsID0gZWw7IC8vIGFjdHVhbGl6YXRpb25cblxuICAgICAgICAgIGNoYW5nZWQoKTtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldC5wYXJlbnROb2RlID09PSBlbCkge1xuICAgICAgICB0YXJnZXRSZWN0ID0gZ2V0UmVjdCh0YXJnZXQpO1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gMCxcbiAgICAgICAgICB0YXJnZXRCZWZvcmVGaXJzdFN3YXAsXG4gICAgICAgICAgZGlmZmVyZW50TGV2ZWwgPSBkcmFnRWwucGFyZW50Tm9kZSAhPT0gZWwsXG4gICAgICAgICAgZGlmZmVyZW50Um93Q29sID0gIV9kcmFnRWxJblJvd0NvbHVtbihkcmFnRWwuYW5pbWF0ZWQgJiYgZHJhZ0VsLnRvUmVjdCB8fCBkcmFnUmVjdCwgdGFyZ2V0LmFuaW1hdGVkICYmIHRhcmdldC50b1JlY3QgfHwgdGFyZ2V0UmVjdCwgdmVydGljYWwpLFxuICAgICAgICAgIHNpZGUxID0gdmVydGljYWwgPyAndG9wJyA6ICdsZWZ0JyxcbiAgICAgICAgICBzY3JvbGxlZFBhc3RUb3AgPSBpc1Njcm9sbGVkUGFzdCh0YXJnZXQsICd0b3AnLCAndG9wJykgfHwgaXNTY3JvbGxlZFBhc3QoZHJhZ0VsLCAndG9wJywgJ3RvcCcpLFxuICAgICAgICAgIHNjcm9sbEJlZm9yZSA9IHNjcm9sbGVkUGFzdFRvcCA/IHNjcm9sbGVkUGFzdFRvcC5zY3JvbGxUb3AgOiB2b2lkIDA7XG4gICAgICAgIGlmIChsYXN0VGFyZ2V0ICE9PSB0YXJnZXQpIHtcbiAgICAgICAgICB0YXJnZXRCZWZvcmVGaXJzdFN3YXAgPSB0YXJnZXRSZWN0W3NpZGUxXTtcbiAgICAgICAgICBwYXN0Rmlyc3RJbnZlcnRUaHJlc2ggPSBmYWxzZTtcbiAgICAgICAgICBpc0NpcmN1bXN0YW50aWFsSW52ZXJ0ID0gIWRpZmZlcmVudFJvd0NvbCAmJiBvcHRpb25zLmludmVydFN3YXAgfHwgZGlmZmVyZW50TGV2ZWw7XG4gICAgICAgIH1cbiAgICAgICAgZGlyZWN0aW9uID0gX2dldFN3YXBEaXJlY3Rpb24oZXZ0LCB0YXJnZXQsIHRhcmdldFJlY3QsIHZlcnRpY2FsLCBkaWZmZXJlbnRSb3dDb2wgPyAxIDogb3B0aW9ucy5zd2FwVGhyZXNob2xkLCBvcHRpb25zLmludmVydGVkU3dhcFRocmVzaG9sZCA9PSBudWxsID8gb3B0aW9ucy5zd2FwVGhyZXNob2xkIDogb3B0aW9ucy5pbnZlcnRlZFN3YXBUaHJlc2hvbGQsIGlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQsIGxhc3RUYXJnZXQgPT09IHRhcmdldCk7XG4gICAgICAgIHZhciBzaWJsaW5nO1xuICAgICAgICBpZiAoZGlyZWN0aW9uICE9PSAwKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGFyZ2V0IGlzIGJlc2lkZSBkcmFnRWwgaW4gcmVzcGVjdGl2ZSBkaXJlY3Rpb24gKGlnbm9yaW5nIGhpZGRlbiBlbGVtZW50cylcbiAgICAgICAgICB2YXIgZHJhZ0luZGV4ID0gaW5kZXgoZHJhZ0VsKTtcbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBkcmFnSW5kZXggLT0gZGlyZWN0aW9uO1xuICAgICAgICAgICAgc2libGluZyA9IHBhcmVudEVsLmNoaWxkcmVuW2RyYWdJbmRleF07XG4gICAgICAgICAgfSB3aGlsZSAoc2libGluZyAmJiAoY3NzKHNpYmxpbmcsICdkaXNwbGF5JykgPT09ICdub25lJyB8fCBzaWJsaW5nID09PSBnaG9zdEVsKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgZHJhZ0VsIGlzIGFscmVhZHkgYmVzaWRlIHRhcmdldDogRG8gbm90IGluc2VydFxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAwIHx8IHNpYmxpbmcgPT09IHRhcmdldCkge1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIGxhc3REaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHZhciBuZXh0U2libGluZyA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcsXG4gICAgICAgICAgYWZ0ZXIgPSBmYWxzZTtcbiAgICAgICAgYWZ0ZXIgPSBkaXJlY3Rpb24gPT09IDE7XG4gICAgICAgIHZhciBtb3ZlVmVjdG9yID0gX29uTW92ZShyb290RWwsIGVsLCBkcmFnRWwsIGRyYWdSZWN0LCB0YXJnZXQsIHRhcmdldFJlY3QsIGV2dCwgYWZ0ZXIpO1xuICAgICAgICBpZiAobW92ZVZlY3RvciAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBpZiAobW92ZVZlY3RvciA9PT0gMSB8fCBtb3ZlVmVjdG9yID09PSAtMSkge1xuICAgICAgICAgICAgYWZ0ZXIgPSBtb3ZlVmVjdG9yID09PSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfc2lsZW50ID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KF91bnNpbGVudCwgMzApO1xuICAgICAgICAgIGNhcHR1cmUoKTtcbiAgICAgICAgICBpZiAoYWZ0ZXIgJiYgIW5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChkcmFnRWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZHJhZ0VsLCBhZnRlciA/IG5leHRTaWJsaW5nIDogdGFyZ2V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBVbmRvIGNocm9tZSdzIHNjcm9sbCBhZGp1c3RtZW50IChoYXMgbm8gZWZmZWN0IG9uIG90aGVyIGJyb3dzZXJzKVxuICAgICAgICAgIGlmIChzY3JvbGxlZFBhc3RUb3ApIHtcbiAgICAgICAgICAgIHNjcm9sbEJ5KHNjcm9sbGVkUGFzdFRvcCwgMCwgc2Nyb2xsQmVmb3JlIC0gc2Nyb2xsZWRQYXN0VG9wLnNjcm9sbFRvcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudEVsID0gZHJhZ0VsLnBhcmVudE5vZGU7IC8vIGFjdHVhbGl6YXRpb25cblxuICAgICAgICAgIC8vIG11c3QgYmUgZG9uZSBiZWZvcmUgYW5pbWF0aW9uXG4gICAgICAgICAgaWYgKHRhcmdldEJlZm9yZUZpcnN0U3dhcCAhPT0gdW5kZWZpbmVkICYmICFpc0NpcmN1bXN0YW50aWFsSW52ZXJ0KSB7XG4gICAgICAgICAgICB0YXJnZXRNb3ZlRGlzdGFuY2UgPSBNYXRoLmFicyh0YXJnZXRCZWZvcmVGaXJzdFN3YXAgLSBnZXRSZWN0KHRhcmdldClbc2lkZTFdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hhbmdlZCgpO1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChlbC5jb250YWlucyhkcmFnRWwpKSB7XG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIF9pZ25vcmVXaGlsZUFuaW1hdGluZzogbnVsbCxcbiAgX29mZk1vdmVFdmVudHM6IGZ1bmN0aW9uIF9vZmZNb3ZlRXZlbnRzKCkge1xuICAgIG9mZihkb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICBvZmYoZG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgb2ZmKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgb2ZmKGRvY3VtZW50LCAnZHJhZ292ZXInLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gICAgb2ZmKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICAgIG9mZihkb2N1bWVudCwgJ3RvdWNobW92ZScsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgfSxcbiAgX29mZlVwRXZlbnRzOiBmdW5jdGlvbiBfb2ZmVXBFdmVudHMoKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSB0aGlzLmVsLm93bmVyRG9jdW1lbnQ7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5fb25Ecm9wKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgdGhpcy5fb25Ecm9wKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3BvaW50ZXJ1cCcsIHRoaXMuX29uRHJvcCk7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIHRoaXMuX29uRHJvcCk7XG4gICAgb2ZmKGRvY3VtZW50LCAnc2VsZWN0c3RhcnQnLCB0aGlzKTtcbiAgfSxcbiAgX29uRHJvcDogZnVuY3Rpb24gX29uRHJvcCggLyoqRXZlbnQqL2V2dCkge1xuICAgIHZhciBlbCA9IHRoaXMuZWwsXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgLy8gR2V0IHRoZSBpbmRleCBvZiB0aGUgZHJhZ2dlZCBlbGVtZW50IHdpdGhpbiBpdHMgcGFyZW50XG4gICAgbmV3SW5kZXggPSBpbmRleChkcmFnRWwpO1xuICAgIG5ld0RyYWdnYWJsZUluZGV4ID0gaW5kZXgoZHJhZ0VsLCBvcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgcGx1Z2luRXZlbnQoJ2Ryb3AnLCB0aGlzLCB7XG4gICAgICBldnQ6IGV2dFxuICAgIH0pO1xuICAgIHBhcmVudEVsID0gZHJhZ0VsICYmIGRyYWdFbC5wYXJlbnROb2RlO1xuXG4gICAgLy8gR2V0IGFnYWluIGFmdGVyIHBsdWdpbiBldmVudFxuICAgIG5ld0luZGV4ID0gaW5kZXgoZHJhZ0VsKTtcbiAgICBuZXdEcmFnZ2FibGVJbmRleCA9IGluZGV4KGRyYWdFbCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xuICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICB0aGlzLl9udWxsaW5nKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICBpc0NpcmN1bXN0YW50aWFsSW52ZXJ0ID0gZmFsc2U7XG4gICAgcGFzdEZpcnN0SW52ZXJ0VGhyZXNoID0gZmFsc2U7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9sb29wSWQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9kcmFnU3RhcnRUaW1lcik7XG4gICAgX2NhbmNlbE5leHRUaWNrKHRoaXMuY2xvbmVJZCk7XG4gICAgX2NhbmNlbE5leHRUaWNrKHRoaXMuX2RyYWdTdGFydElkKTtcblxuICAgIC8vIFVuYmluZCBldmVudHNcbiAgICBpZiAodGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgIG9mZihkb2N1bWVudCwgJ2Ryb3AnLCB0aGlzKTtcbiAgICAgIG9mZihlbCwgJ2RyYWdzdGFydCcsIHRoaXMuX29uRHJhZ1N0YXJ0KTtcbiAgICB9XG4gICAgdGhpcy5fb2ZmTW92ZUV2ZW50cygpO1xuICAgIHRoaXMuX29mZlVwRXZlbnRzKCk7XG4gICAgaWYgKFNhZmFyaSkge1xuICAgICAgY3NzKGRvY3VtZW50LmJvZHksICd1c2VyLXNlbGVjdCcsICcnKTtcbiAgICB9XG4gICAgY3NzKGRyYWdFbCwgJ3RyYW5zZm9ybScsICcnKTtcbiAgICBpZiAoZXZ0KSB7XG4gICAgICBpZiAobW92ZWQpIHtcbiAgICAgICAgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICFvcHRpb25zLmRyb3BCdWJibGUgJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgICAgZ2hvc3RFbCAmJiBnaG9zdEVsLnBhcmVudE5vZGUgJiYgZ2hvc3RFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdob3N0RWwpO1xuICAgICAgaWYgKHJvb3RFbCA9PT0gcGFyZW50RWwgfHwgcHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUubGFzdFB1dE1vZGUgIT09ICdjbG9uZScpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGNsb25lKHMpXG4gICAgICAgIGNsb25lRWwgJiYgY2xvbmVFbC5wYXJlbnROb2RlICYmIGNsb25lRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZUVsKTtcbiAgICAgIH1cbiAgICAgIGlmIChkcmFnRWwpIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgb2ZmKGRyYWdFbCwgJ2RyYWdlbmQnLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBfZGlzYWJsZURyYWdnYWJsZShkcmFnRWwpO1xuICAgICAgICBkcmFnRWwuc3R5bGVbJ3dpbGwtY2hhbmdlJ10gPSAnJztcblxuICAgICAgICAvLyBSZW1vdmUgY2xhc3Nlc1xuICAgICAgICAvLyBnaG9zdENsYXNzIGlzIGFkZGVkIGluIGRyYWdTdGFydGVkXG4gICAgICAgIGlmIChtb3ZlZCAmJiAhYXdhaXRpbmdEcmFnU3RhcnRlZCkge1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgcHV0U29ydGFibGUgPyBwdXRTb3J0YWJsZS5vcHRpb25zLmdob3N0Q2xhc3MgOiB0aGlzLm9wdGlvbnMuZ2hvc3RDbGFzcywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgdGhpcy5vcHRpb25zLmNob3NlbkNsYXNzLCBmYWxzZSk7XG5cbiAgICAgICAgLy8gRHJhZyBzdG9wIGV2ZW50XG4gICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICBuYW1lOiAndW5jaG9vc2UnLFxuICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgIG5ld0luZGV4OiBudWxsLFxuICAgICAgICAgIG5ld0RyYWdnYWJsZUluZGV4OiBudWxsLFxuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJvb3RFbCAhPT0gcGFyZW50RWwpIHtcbiAgICAgICAgICBpZiAobmV3SW5kZXggPj0gMCkge1xuICAgICAgICAgICAgLy8gQWRkIGV2ZW50XG4gICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgIHJvb3RFbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIG5hbWU6ICdhZGQnLFxuICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgZnJvbUVsOiByb290RWwsXG4gICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBldmVudFxuICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZScsXG4gICAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBkcmFnIGZyb20gb25lIGxpc3QgYW5kIGRyb3AgaW50byBhbm90aGVyXG4gICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgIHJvb3RFbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIG5hbWU6ICdzb3J0JyxcbiAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgIGZyb21FbDogcm9vdEVsLFxuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgbmFtZTogJ3NvcnQnLFxuICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUuc2F2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChuZXdJbmRleCAhPT0gb2xkSW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgIC8vIGRyYWcgJiBkcm9wIHdpdGhpbiB0aGUgc2FtZSBsaXN0XG4gICAgICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgICBuYW1lOiAndXBkYXRlJyxcbiAgICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnc29ydCcsXG4gICAgICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoU29ydGFibGUuYWN0aXZlKSB7XG4gICAgICAgICAgLyoganNoaW50IGVxbnVsbDp0cnVlICovXG4gICAgICAgICAgaWYgKG5ld0luZGV4ID09IG51bGwgfHwgbmV3SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBuZXdJbmRleCA9IG9sZEluZGV4O1xuICAgICAgICAgICAgbmV3RHJhZ2dhYmxlSW5kZXggPSBvbGREcmFnZ2FibGVJbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgc29ydGFibGU6IHRoaXMsXG4gICAgICAgICAgICBuYW1lOiAnZW5kJyxcbiAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBTYXZlIHNvcnRpbmdcbiAgICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9udWxsaW5nKCk7XG4gIH0sXG4gIF9udWxsaW5nOiBmdW5jdGlvbiBfbnVsbGluZygpIHtcbiAgICBwbHVnaW5FdmVudCgnbnVsbGluZycsIHRoaXMpO1xuICAgIHJvb3RFbCA9IGRyYWdFbCA9IHBhcmVudEVsID0gZ2hvc3RFbCA9IG5leHRFbCA9IGNsb25lRWwgPSBsYXN0RG93bkVsID0gY2xvbmVIaWRkZW4gPSB0YXBFdnQgPSB0b3VjaEV2dCA9IG1vdmVkID0gbmV3SW5kZXggPSBuZXdEcmFnZ2FibGVJbmRleCA9IG9sZEluZGV4ID0gb2xkRHJhZ2dhYmxlSW5kZXggPSBsYXN0VGFyZ2V0ID0gbGFzdERpcmVjdGlvbiA9IHB1dFNvcnRhYmxlID0gYWN0aXZlR3JvdXAgPSBTb3J0YWJsZS5kcmFnZ2VkID0gU29ydGFibGUuZ2hvc3QgPSBTb3J0YWJsZS5jbG9uZSA9IFNvcnRhYmxlLmFjdGl2ZSA9IG51bGw7XG4gICAgc2F2ZWRJbnB1dENoZWNrZWQuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGVsLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIHNhdmVkSW5wdXRDaGVja2VkLmxlbmd0aCA9IGxhc3REeCA9IGxhc3REeSA9IDA7XG4gIH0sXG4gIGhhbmRsZUV2ZW50OiBmdW5jdGlvbiBoYW5kbGVFdmVudCggLyoqRXZlbnQqL2V2dCkge1xuICAgIHN3aXRjaCAoZXZ0LnR5cGUpIHtcbiAgICAgIGNhc2UgJ2Ryb3AnOlxuICAgICAgY2FzZSAnZHJhZ2VuZCc6XG4gICAgICAgIHRoaXMuX29uRHJvcChldnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RyYWdlbnRlcic6XG4gICAgICBjYXNlICdkcmFnb3Zlcic6XG4gICAgICAgIGlmIChkcmFnRWwpIHtcbiAgICAgICAgICB0aGlzLl9vbkRyYWdPdmVyKGV2dCk7XG4gICAgICAgICAgX2dsb2JhbERyYWdPdmVyKGV2dCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWxlY3RzdGFydCc6XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG4gIC8qKlxyXG4gICAqIFNlcmlhbGl6ZXMgdGhlIGl0ZW0gaW50byBhbiBhcnJheSBvZiBzdHJpbmcuXHJcbiAgICogQHJldHVybnMge1N0cmluZ1tdfVxyXG4gICAqL1xuICB0b0FycmF5OiBmdW5jdGlvbiB0b0FycmF5KCkge1xuICAgIHZhciBvcmRlciA9IFtdLFxuICAgICAgZWwsXG4gICAgICBjaGlsZHJlbiA9IHRoaXMuZWwuY2hpbGRyZW4sXG4gICAgICBpID0gMCxcbiAgICAgIG4gPSBjaGlsZHJlbi5sZW5ndGgsXG4gICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBlbCA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNsb3Nlc3QoZWwsIG9wdGlvbnMuZHJhZ2dhYmxlLCB0aGlzLmVsLCBmYWxzZSkpIHtcbiAgICAgICAgb3JkZXIucHVzaChlbC5nZXRBdHRyaWJ1dGUob3B0aW9ucy5kYXRhSWRBdHRyKSB8fCBfZ2VuZXJhdGVJZChlbCkpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3JkZXI7XG4gIH0sXG4gIC8qKlxyXG4gICAqIFNvcnRzIHRoZSBlbGVtZW50cyBhY2NvcmRpbmcgdG8gdGhlIGFycmF5LlxyXG4gICAqIEBwYXJhbSAge1N0cmluZ1tdfSAgb3JkZXIgIG9yZGVyIG9mIHRoZSBpdGVtc1xyXG4gICAqL1xuICBzb3J0OiBmdW5jdGlvbiBzb3J0KG9yZGVyLCB1c2VBbmltYXRpb24pIHtcbiAgICB2YXIgaXRlbXMgPSB7fSxcbiAgICAgIHJvb3RFbCA9IHRoaXMuZWw7XG4gICAgdGhpcy50b0FycmF5KCkuZm9yRWFjaChmdW5jdGlvbiAoaWQsIGkpIHtcbiAgICAgIHZhciBlbCA9IHJvb3RFbC5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChjbG9zZXN0KGVsLCB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlLCByb290RWwsIGZhbHNlKSkge1xuICAgICAgICBpdGVtc1tpZF0gPSBlbDtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICB1c2VBbmltYXRpb24gJiYgdGhpcy5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICBvcmRlci5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgaWYgKGl0ZW1zW2lkXSkge1xuICAgICAgICByb290RWwucmVtb3ZlQ2hpbGQoaXRlbXNbaWRdKTtcbiAgICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKGl0ZW1zW2lkXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdXNlQW5pbWF0aW9uICYmIHRoaXMuYW5pbWF0ZUFsbCgpO1xuICB9LFxuICAvKipcclxuICAgKiBTYXZlIHRoZSBjdXJyZW50IHNvcnRpbmdcclxuICAgKi9cbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZSgpIHtcbiAgICB2YXIgc3RvcmUgPSB0aGlzLm9wdGlvbnMuc3RvcmU7XG4gICAgc3RvcmUgJiYgc3RvcmUuc2V0ICYmIHN0b3JlLnNldCh0aGlzKTtcbiAgfSxcbiAgLyoqXHJcbiAgICogRm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgc2V0LCBnZXQgdGhlIGZpcnN0IGVsZW1lbnQgdGhhdCBtYXRjaGVzIHRoZSBzZWxlY3RvciBieSB0ZXN0aW5nIHRoZSBlbGVtZW50IGl0c2VsZiBhbmQgdHJhdmVyc2luZyB1cCB0aHJvdWdoIGl0cyBhbmNlc3RvcnMgaW4gdGhlIERPTSB0cmVlLlxyXG4gICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gIGVsXHJcbiAgICogQHBhcmFtICAge1N0cmluZ30gICAgICAgW3NlbGVjdG9yXSAgZGVmYXVsdDogYG9wdGlvbnMuZHJhZ2dhYmxlYFxyXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudHxudWxsfVxyXG4gICAqL1xuICBjbG9zZXN0OiBmdW5jdGlvbiBjbG9zZXN0JDEoZWwsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGNsb3Nlc3QoZWwsIHNlbGVjdG9yIHx8IHRoaXMub3B0aW9ucy5kcmFnZ2FibGUsIHRoaXMuZWwsIGZhbHNlKTtcbiAgfSxcbiAgLyoqXHJcbiAgICogU2V0L2dldCBvcHRpb25cclxuICAgKiBAcGFyYW0gICB7c3RyaW5nfSBuYW1lXHJcbiAgICogQHBhcmFtICAgeyp9ICAgICAgW3ZhbHVlXVxyXG4gICAqIEByZXR1cm5zIHsqfVxyXG4gICAqL1xuICBvcHRpb246IGZ1bmN0aW9uIG9wdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gb3B0aW9uc1tuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG1vZGlmaWVkVmFsdWUgPSBQbHVnaW5NYW5hZ2VyLm1vZGlmeU9wdGlvbih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICBpZiAodHlwZW9mIG1vZGlmaWVkVmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnNbbmFtZV0gPSBtb2RpZmllZFZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9uc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKG5hbWUgPT09ICdncm91cCcpIHtcbiAgICAgICAgX3ByZXBhcmVHcm91cChvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIC8qKlxyXG4gICAqIERlc3Ryb3lcclxuICAgKi9cbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBwbHVnaW5FdmVudCgnZGVzdHJveScsIHRoaXMpO1xuICAgIHZhciBlbCA9IHRoaXMuZWw7XG4gICAgZWxbZXhwYW5kb10gPSBudWxsO1xuICAgIG9mZihlbCwgJ21vdXNlZG93bicsIHRoaXMuX29uVGFwU3RhcnQpO1xuICAgIG9mZihlbCwgJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgICBvZmYoZWwsICdwb2ludGVyZG93bicsIHRoaXMuX29uVGFwU3RhcnQpO1xuICAgIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgb2ZmKGVsLCAnZHJhZ292ZXInLCB0aGlzKTtcbiAgICAgIG9mZihlbCwgJ2RyYWdlbnRlcicsIHRoaXMpO1xuICAgIH1cbiAgICAvLyBSZW1vdmUgZHJhZ2dhYmxlIGF0dHJpYnV0ZXNcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkcmFnZ2FibGVdJyksIGZ1bmN0aW9uIChlbCkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkcmFnZ2FibGUnKTtcbiAgICB9KTtcbiAgICB0aGlzLl9vbkRyb3AoKTtcbiAgICB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKTtcbiAgICBzb3J0YWJsZXMuc3BsaWNlKHNvcnRhYmxlcy5pbmRleE9mKHRoaXMuZWwpLCAxKTtcbiAgICB0aGlzLmVsID0gZWwgPSBudWxsO1xuICB9LFxuICBfaGlkZUNsb25lOiBmdW5jdGlvbiBfaGlkZUNsb25lKCkge1xuICAgIGlmICghY2xvbmVIaWRkZW4pIHtcbiAgICAgIHBsdWdpbkV2ZW50KCdoaWRlQ2xvbmUnLCB0aGlzKTtcbiAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSByZXR1cm47XG4gICAgICBjc3MoY2xvbmVFbCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW1vdmVDbG9uZU9uSGlkZSAmJiBjbG9uZUVsLnBhcmVudE5vZGUpIHtcbiAgICAgICAgY2xvbmVFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNsb25lRWwpO1xuICAgICAgfVxuICAgICAgY2xvbmVIaWRkZW4gPSB0cnVlO1xuICAgIH1cbiAgfSxcbiAgX3Nob3dDbG9uZTogZnVuY3Rpb24gX3Nob3dDbG9uZShwdXRTb3J0YWJsZSkge1xuICAgIGlmIChwdXRTb3J0YWJsZS5sYXN0UHV0TW9kZSAhPT0gJ2Nsb25lJykge1xuICAgICAgdGhpcy5faGlkZUNsb25lKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjbG9uZUhpZGRlbikge1xuICAgICAgcGx1Z2luRXZlbnQoJ3Nob3dDbG9uZScsIHRoaXMpO1xuICAgICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHJldHVybjtcblxuICAgICAgLy8gc2hvdyBjbG9uZSBhdCBkcmFnRWwgb3Igb3JpZ2luYWwgcG9zaXRpb25cbiAgICAgIGlmIChkcmFnRWwucGFyZW50Tm9kZSA9PSByb290RWwgJiYgIXRoaXMub3B0aW9ucy5ncm91cC5yZXZlcnRDbG9uZSkge1xuICAgICAgICByb290RWwuaW5zZXJ0QmVmb3JlKGNsb25lRWwsIGRyYWdFbCk7XG4gICAgICB9IGVsc2UgaWYgKG5leHRFbCkge1xuICAgICAgICByb290RWwuaW5zZXJ0QmVmb3JlKGNsb25lRWwsIG5leHRFbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb290RWwuYXBwZW5kQ2hpbGQoY2xvbmVFbCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmdyb3VwLnJldmVydENsb25lKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZShkcmFnRWwsIGNsb25lRWwpO1xuICAgICAgfVxuICAgICAgY3NzKGNsb25lRWwsICdkaXNwbGF5JywgJycpO1xuICAgICAgY2xvbmVIaWRkZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cbn07XG5mdW5jdGlvbiBfZ2xvYmFsRHJhZ092ZXIoIC8qKkV2ZW50Ki9ldnQpIHtcbiAgaWYgKGV2dC5kYXRhVHJhbnNmZXIpIHtcbiAgICBldnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG4gIH1cbiAgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG59XG5mdW5jdGlvbiBfb25Nb3ZlKGZyb21FbCwgdG9FbCwgZHJhZ0VsLCBkcmFnUmVjdCwgdGFyZ2V0RWwsIHRhcmdldFJlY3QsIG9yaWdpbmFsRXZlbnQsIHdpbGxJbnNlcnRBZnRlcikge1xuICB2YXIgZXZ0LFxuICAgIHNvcnRhYmxlID0gZnJvbUVsW2V4cGFuZG9dLFxuICAgIG9uTW92ZUZuID0gc29ydGFibGUub3B0aW9ucy5vbk1vdmUsXG4gICAgcmV0VmFsO1xuICAvLyBTdXBwb3J0IGZvciBuZXcgQ3VzdG9tRXZlbnQgZmVhdHVyZVxuICBpZiAod2luZG93LkN1c3RvbUV2ZW50ICYmICFJRTExT3JMZXNzICYmICFFZGdlKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KCdtb3ZlJywge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldnQuaW5pdEV2ZW50KCdtb3ZlJywgdHJ1ZSwgdHJ1ZSk7XG4gIH1cbiAgZXZ0LnRvID0gdG9FbDtcbiAgZXZ0LmZyb20gPSBmcm9tRWw7XG4gIGV2dC5kcmFnZ2VkID0gZHJhZ0VsO1xuICBldnQuZHJhZ2dlZFJlY3QgPSBkcmFnUmVjdDtcbiAgZXZ0LnJlbGF0ZWQgPSB0YXJnZXRFbCB8fCB0b0VsO1xuICBldnQucmVsYXRlZFJlY3QgPSB0YXJnZXRSZWN0IHx8IGdldFJlY3QodG9FbCk7XG4gIGV2dC53aWxsSW5zZXJ0QWZ0ZXIgPSB3aWxsSW5zZXJ0QWZ0ZXI7XG4gIGV2dC5vcmlnaW5hbEV2ZW50ID0gb3JpZ2luYWxFdmVudDtcbiAgZnJvbUVsLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgaWYgKG9uTW92ZUZuKSB7XG4gICAgcmV0VmFsID0gb25Nb3ZlRm4uY2FsbChzb3J0YWJsZSwgZXZ0LCBvcmlnaW5hbEV2ZW50KTtcbiAgfVxuICByZXR1cm4gcmV0VmFsO1xufVxuZnVuY3Rpb24gX2Rpc2FibGVEcmFnZ2FibGUoZWwpIHtcbiAgZWwuZHJhZ2dhYmxlID0gZmFsc2U7XG59XG5mdW5jdGlvbiBfdW5zaWxlbnQoKSB7XG4gIF9zaWxlbnQgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIF9naG9zdElzRmlyc3QoZXZ0LCB2ZXJ0aWNhbCwgc29ydGFibGUpIHtcbiAgdmFyIGZpcnN0RWxSZWN0ID0gZ2V0UmVjdChnZXRDaGlsZChzb3J0YWJsZS5lbCwgMCwgc29ydGFibGUub3B0aW9ucywgdHJ1ZSkpO1xuICB2YXIgY2hpbGRDb250YWluaW5nUmVjdCA9IGdldENoaWxkQ29udGFpbmluZ1JlY3RGcm9tRWxlbWVudChzb3J0YWJsZS5lbCwgc29ydGFibGUub3B0aW9ucywgZ2hvc3RFbCk7XG4gIHZhciBzcGFjZXIgPSAxMDtcbiAgcmV0dXJuIHZlcnRpY2FsID8gZXZ0LmNsaWVudFggPCBjaGlsZENvbnRhaW5pbmdSZWN0LmxlZnQgLSBzcGFjZXIgfHwgZXZ0LmNsaWVudFkgPCBmaXJzdEVsUmVjdC50b3AgJiYgZXZ0LmNsaWVudFggPCBmaXJzdEVsUmVjdC5yaWdodCA6IGV2dC5jbGllbnRZIDwgY2hpbGRDb250YWluaW5nUmVjdC50b3AgLSBzcGFjZXIgfHwgZXZ0LmNsaWVudFkgPCBmaXJzdEVsUmVjdC5ib3R0b20gJiYgZXZ0LmNsaWVudFggPCBmaXJzdEVsUmVjdC5sZWZ0O1xufVxuZnVuY3Rpb24gX2dob3N0SXNMYXN0KGV2dCwgdmVydGljYWwsIHNvcnRhYmxlKSB7XG4gIHZhciBsYXN0RWxSZWN0ID0gZ2V0UmVjdChsYXN0Q2hpbGQoc29ydGFibGUuZWwsIHNvcnRhYmxlLm9wdGlvbnMuZHJhZ2dhYmxlKSk7XG4gIHZhciBjaGlsZENvbnRhaW5pbmdSZWN0ID0gZ2V0Q2hpbGRDb250YWluaW5nUmVjdEZyb21FbGVtZW50KHNvcnRhYmxlLmVsLCBzb3J0YWJsZS5vcHRpb25zLCBnaG9zdEVsKTtcbiAgdmFyIHNwYWNlciA9IDEwO1xuICByZXR1cm4gdmVydGljYWwgPyBldnQuY2xpZW50WCA+IGNoaWxkQ29udGFpbmluZ1JlY3QucmlnaHQgKyBzcGFjZXIgfHwgZXZ0LmNsaWVudFkgPiBsYXN0RWxSZWN0LmJvdHRvbSAmJiBldnQuY2xpZW50WCA+IGxhc3RFbFJlY3QubGVmdCA6IGV2dC5jbGllbnRZID4gY2hpbGRDb250YWluaW5nUmVjdC5ib3R0b20gKyBzcGFjZXIgfHwgZXZ0LmNsaWVudFggPiBsYXN0RWxSZWN0LnJpZ2h0ICYmIGV2dC5jbGllbnRZID4gbGFzdEVsUmVjdC50b3A7XG59XG5mdW5jdGlvbiBfZ2V0U3dhcERpcmVjdGlvbihldnQsIHRhcmdldCwgdGFyZ2V0UmVjdCwgdmVydGljYWwsIHN3YXBUaHJlc2hvbGQsIGludmVydGVkU3dhcFRocmVzaG9sZCwgaW52ZXJ0U3dhcCwgaXNMYXN0VGFyZ2V0KSB7XG4gIHZhciBtb3VzZU9uQXhpcyA9IHZlcnRpY2FsID8gZXZ0LmNsaWVudFkgOiBldnQuY2xpZW50WCxcbiAgICB0YXJnZXRMZW5ndGggPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QuaGVpZ2h0IDogdGFyZ2V0UmVjdC53aWR0aCxcbiAgICB0YXJnZXRTMSA9IHZlcnRpY2FsID8gdGFyZ2V0UmVjdC50b3AgOiB0YXJnZXRSZWN0LmxlZnQsXG4gICAgdGFyZ2V0UzIgPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QuYm90dG9tIDogdGFyZ2V0UmVjdC5yaWdodCxcbiAgICBpbnZlcnQgPSBmYWxzZTtcbiAgaWYgKCFpbnZlcnRTd2FwKSB7XG4gICAgLy8gTmV2ZXIgaW52ZXJ0IG9yIGNyZWF0ZSBkcmFnRWwgc2hhZG93IHdoZW4gdGFyZ2V0IG1vdmVtZW5ldCBjYXVzZXMgbW91c2UgdG8gbW92ZSBwYXN0IHRoZSBlbmQgb2YgcmVndWxhciBzd2FwVGhyZXNob2xkXG4gICAgaWYgKGlzTGFzdFRhcmdldCAmJiB0YXJnZXRNb3ZlRGlzdGFuY2UgPCB0YXJnZXRMZW5ndGggKiBzd2FwVGhyZXNob2xkKSB7XG4gICAgICAvLyBtdWx0aXBsaWVkIG9ubHkgYnkgc3dhcFRocmVzaG9sZCBiZWNhdXNlIG1vdXNlIHdpbGwgYWxyZWFkeSBiZSBpbnNpZGUgdGFyZ2V0IGJ5ICgxIC0gdGhyZXNob2xkKSAqIHRhcmdldExlbmd0aCAvIDJcbiAgICAgIC8vIGNoZWNrIGlmIHBhc3QgZmlyc3QgaW52ZXJ0IHRocmVzaG9sZCBvbiBzaWRlIG9wcG9zaXRlIG9mIGxhc3REaXJlY3Rpb25cbiAgICAgIGlmICghcGFzdEZpcnN0SW52ZXJ0VGhyZXNoICYmIChsYXN0RGlyZWN0aW9uID09PSAxID8gbW91c2VPbkF4aXMgPiB0YXJnZXRTMSArIHRhcmdldExlbmd0aCAqIGludmVydGVkU3dhcFRocmVzaG9sZCAvIDIgOiBtb3VzZU9uQXhpcyA8IHRhcmdldFMyIC0gdGFyZ2V0TGVuZ3RoICogaW52ZXJ0ZWRTd2FwVGhyZXNob2xkIC8gMikpIHtcbiAgICAgICAgLy8gcGFzdCBmaXJzdCBpbnZlcnQgdGhyZXNob2xkLCBkbyBub3QgcmVzdHJpY3QgaW52ZXJ0ZWQgdGhyZXNob2xkIHRvIGRyYWdFbCBzaGFkb3dcbiAgICAgICAgcGFzdEZpcnN0SW52ZXJ0VGhyZXNoID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICghcGFzdEZpcnN0SW52ZXJ0VGhyZXNoKSB7XG4gICAgICAgIC8vIGRyYWdFbCBzaGFkb3cgKHRhcmdldCBtb3ZlIGRpc3RhbmNlIHNoYWRvdylcbiAgICAgICAgaWYgKGxhc3REaXJlY3Rpb24gPT09IDEgPyBtb3VzZU9uQXhpcyA8IHRhcmdldFMxICsgdGFyZ2V0TW92ZURpc3RhbmNlIC8vIG92ZXIgZHJhZ0VsIHNoYWRvd1xuICAgICAgICA6IG1vdXNlT25BeGlzID4gdGFyZ2V0UzIgLSB0YXJnZXRNb3ZlRGlzdGFuY2UpIHtcbiAgICAgICAgICByZXR1cm4gLWxhc3REaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludmVydCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlZ3VsYXJcbiAgICAgIGlmIChtb3VzZU9uQXhpcyA+IHRhcmdldFMxICsgdGFyZ2V0TGVuZ3RoICogKDEgLSBzd2FwVGhyZXNob2xkKSAvIDIgJiYgbW91c2VPbkF4aXMgPCB0YXJnZXRTMiAtIHRhcmdldExlbmd0aCAqICgxIC0gc3dhcFRocmVzaG9sZCkgLyAyKSB7XG4gICAgICAgIHJldHVybiBfZ2V0SW5zZXJ0RGlyZWN0aW9uKHRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGludmVydCA9IGludmVydCB8fCBpbnZlcnRTd2FwO1xuICBpZiAoaW52ZXJ0KSB7XG4gICAgLy8gSW52ZXJ0IG9mIHJlZ3VsYXJcbiAgICBpZiAobW91c2VPbkF4aXMgPCB0YXJnZXRTMSArIHRhcmdldExlbmd0aCAqIGludmVydGVkU3dhcFRocmVzaG9sZCAvIDIgfHwgbW91c2VPbkF4aXMgPiB0YXJnZXRTMiAtIHRhcmdldExlbmd0aCAqIGludmVydGVkU3dhcFRocmVzaG9sZCAvIDIpIHtcbiAgICAgIHJldHVybiBtb3VzZU9uQXhpcyA+IHRhcmdldFMxICsgdGFyZ2V0TGVuZ3RoIC8gMiA/IDEgOiAtMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIDA7XG59XG5cbi8qKlxyXG4gKiBHZXRzIHRoZSBkaXJlY3Rpb24gZHJhZ0VsIG11c3QgYmUgc3dhcHBlZCByZWxhdGl2ZSB0byB0YXJnZXQgaW4gb3JkZXIgdG8gbWFrZSBpdFxyXG4gKiBzZWVtIHRoYXQgZHJhZ0VsIGhhcyBiZWVuIFwiaW5zZXJ0ZWRcIiBpbnRvIHRoYXQgZWxlbWVudCdzIHBvc2l0aW9uXHJcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSB0YXJnZXQgICAgICAgVGhlIHRhcmdldCB3aG9zZSBwb3NpdGlvbiBkcmFnRWwgaXMgYmVpbmcgaW5zZXJ0ZWQgYXRcclxuICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgICAgICAgICAgICBEaXJlY3Rpb24gZHJhZ0VsIG11c3QgYmUgc3dhcHBlZFxyXG4gKi9cbmZ1bmN0aW9uIF9nZXRJbnNlcnREaXJlY3Rpb24odGFyZ2V0KSB7XG4gIGlmIChpbmRleChkcmFnRWwpIDwgaW5kZXgodGFyZ2V0KSkge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAtMTtcbiAgfVxufVxuXG4vKipcclxuICogR2VuZXJhdGUgaWRcclxuICogQHBhcmFtICAge0hUTUxFbGVtZW50fSBlbFxyXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cbmZ1bmN0aW9uIF9nZW5lcmF0ZUlkKGVsKSB7XG4gIHZhciBzdHIgPSBlbC50YWdOYW1lICsgZWwuY2xhc3NOYW1lICsgZWwuc3JjICsgZWwuaHJlZiArIGVsLnRleHRDb250ZW50LFxuICAgIGkgPSBzdHIubGVuZ3RoLFxuICAgIHN1bSA9IDA7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBzdW0gKz0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gIH1cbiAgcmV0dXJuIHN1bS50b1N0cmluZygzNik7XG59XG5mdW5jdGlvbiBfc2F2ZUlucHV0Q2hlY2tlZFN0YXRlKHJvb3QpIHtcbiAgc2F2ZWRJbnB1dENoZWNrZWQubGVuZ3RoID0gMDtcbiAgdmFyIGlucHV0cyA9IHJvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XG4gIHZhciBpZHggPSBpbnB1dHMubGVuZ3RoO1xuICB3aGlsZSAoaWR4LS0pIHtcbiAgICB2YXIgZWwgPSBpbnB1dHNbaWR4XTtcbiAgICBlbC5jaGVja2VkICYmIHNhdmVkSW5wdXRDaGVja2VkLnB1c2goZWwpO1xuICB9XG59XG5mdW5jdGlvbiBfbmV4dFRpY2soZm4pIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDApO1xufVxuZnVuY3Rpb24gX2NhbmNlbE5leHRUaWNrKGlkKSB7XG4gIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufVxuXG4vLyBGaXhlZCAjOTczOlxuaWYgKGRvY3VtZW50RXhpc3RzKSB7XG4gIG9uKGRvY3VtZW50LCAndG91Y2htb3ZlJywgZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmICgoU29ydGFibGUuYWN0aXZlIHx8IGF3YWl0aW5nRHJhZ1N0YXJ0ZWQpICYmIGV2dC5jYW5jZWxhYmxlKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBFeHBvcnQgdXRpbHNcblNvcnRhYmxlLnV0aWxzID0ge1xuICBvbjogb24sXG4gIG9mZjogb2ZmLFxuICBjc3M6IGNzcyxcbiAgZmluZDogZmluZCxcbiAgaXM6IGZ1bmN0aW9uIGlzKGVsLCBzZWxlY3Rvcikge1xuICAgIHJldHVybiAhIWNsb3Nlc3QoZWwsIHNlbGVjdG9yLCBlbCwgZmFsc2UpO1xuICB9LFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdGhyb3R0bGU6IHRocm90dGxlLFxuICBjbG9zZXN0OiBjbG9zZXN0LFxuICB0b2dnbGVDbGFzczogdG9nZ2xlQ2xhc3MsXG4gIGNsb25lOiBjbG9uZSxcbiAgaW5kZXg6IGluZGV4LFxuICBuZXh0VGljazogX25leHRUaWNrLFxuICBjYW5jZWxOZXh0VGljazogX2NhbmNlbE5leHRUaWNrLFxuICBkZXRlY3REaXJlY3Rpb246IF9kZXRlY3REaXJlY3Rpb24sXG4gIGdldENoaWxkOiBnZXRDaGlsZCxcbiAgZXhwYW5kbzogZXhwYW5kb1xufTtcblxuLyoqXHJcbiAqIEdldCB0aGUgU29ydGFibGUgaW5zdGFuY2Ugb2YgYW4gZWxlbWVudFxyXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudFxyXG4gKiBAcmV0dXJuIHtTb3J0YWJsZXx1bmRlZmluZWR9ICAgICAgICAgVGhlIGluc3RhbmNlIG9mIFNvcnRhYmxlXHJcbiAqL1xuU29ydGFibGUuZ2V0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnRbZXhwYW5kb107XG59O1xuXG4vKipcclxuICogTW91bnQgYSBwbHVnaW4gdG8gU29ydGFibGVcclxuICogQHBhcmFtICB7Li4uU29ydGFibGVQbHVnaW58U29ydGFibGVQbHVnaW5bXX0gcGx1Z2lucyAgICAgICBQbHVnaW5zIGJlaW5nIG1vdW50ZWRcclxuICovXG5Tb3J0YWJsZS5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBsdWdpbnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGx1Z2luc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuICBpZiAocGx1Z2luc1swXS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHBsdWdpbnMgPSBwbHVnaW5zWzBdO1xuICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgIGlmICghcGx1Z2luLnByb3RvdHlwZSB8fCAhcGx1Z2luLnByb3RvdHlwZS5jb25zdHJ1Y3Rvcikge1xuICAgICAgdGhyb3cgXCJTb3J0YWJsZTogTW91bnRlZCBwbHVnaW4gbXVzdCBiZSBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLCBub3QgXCIuY29uY2F0KHt9LnRvU3RyaW5nLmNhbGwocGx1Z2luKSk7XG4gICAgfVxuICAgIGlmIChwbHVnaW4udXRpbHMpIFNvcnRhYmxlLnV0aWxzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIFNvcnRhYmxlLnV0aWxzKSwgcGx1Z2luLnV0aWxzKTtcbiAgICBQbHVnaW5NYW5hZ2VyLm1vdW50KHBsdWdpbik7XG4gIH0pO1xufTtcblxuLyoqXHJcbiAqIENyZWF0ZSBzb3J0YWJsZSBpbnN0YW5jZVxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSAgZWxcclxuICogQHBhcmFtIHtPYmplY3R9ICAgICAgW29wdGlvbnNdXHJcbiAqL1xuU29ydGFibGUuY3JlYXRlID0gZnVuY3Rpb24gKGVsLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgU29ydGFibGUoZWwsIG9wdGlvbnMpO1xufTtcblxuLy8gRXhwb3J0XG5Tb3J0YWJsZS52ZXJzaW9uID0gdmVyc2lvbjtcblxudmFyIGF1dG9TY3JvbGxzID0gW10sXG4gIHNjcm9sbEVsLFxuICBzY3JvbGxSb290RWwsXG4gIHNjcm9sbGluZyA9IGZhbHNlLFxuICBsYXN0QXV0b1Njcm9sbFgsXG4gIGxhc3RBdXRvU2Nyb2xsWSxcbiAgdG91Y2hFdnQkMSxcbiAgcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWw7XG5mdW5jdGlvbiBBdXRvU2Nyb2xsUGx1Z2luKCkge1xuICBmdW5jdGlvbiBBdXRvU2Nyb2xsKCkge1xuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBmb3JjZUF1dG9TY3JvbGxGYWxsYmFjazogZmFsc2UsXG4gICAgICBzY3JvbGxTZW5zaXRpdml0eTogMzAsXG4gICAgICBzY3JvbGxTcGVlZDogMTAsXG4gICAgICBidWJibGVTY3JvbGw6IHRydWVcbiAgICB9O1xuXG4gICAgLy8gQmluZCBhbGwgcHJpdmF0ZSBtZXRob2RzXG4gICAgZm9yICh2YXIgZm4gaW4gdGhpcykge1xuICAgICAgaWYgKGZuLmNoYXJBdCgwKSA9PT0gJ18nICYmIHR5cGVvZiB0aGlzW2ZuXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzW2ZuXSA9IHRoaXNbZm5dLmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEF1dG9TY3JvbGwucHJvdG90eXBlID0ge1xuICAgIGRyYWdTdGFydGVkOiBmdW5jdGlvbiBkcmFnU3RhcnRlZChfcmVmKSB7XG4gICAgICB2YXIgb3JpZ2luYWxFdmVudCA9IF9yZWYub3JpZ2luYWxFdmVudDtcbiAgICAgIGlmICh0aGlzLnNvcnRhYmxlLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgICBvbihkb2N1bWVudCwgJ2RyYWdvdmVyJywgdGhpcy5faGFuZGxlQXV0b1Njcm9sbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgICAgICAgb24oZG9jdW1lbnQsICdwb2ludGVybW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIH0gZWxzZSBpZiAob3JpZ2luYWxFdmVudC50b3VjaGVzKSB7XG4gICAgICAgICAgb24oZG9jdW1lbnQsICd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgdGhpcy5faGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZHJhZ092ZXJDb21wbGV0ZWQ6IGZ1bmN0aW9uIGRyYWdPdmVyQ29tcGxldGVkKF9yZWYyKSB7XG4gICAgICB2YXIgb3JpZ2luYWxFdmVudCA9IF9yZWYyLm9yaWdpbmFsRXZlbnQ7XG4gICAgICAvLyBGb3Igd2hlbiBidWJibGluZyBpcyBjYW5jZWxlZCBhbmQgdXNpbmcgZmFsbGJhY2sgKGZhbGxiYWNrICd0b3VjaG1vdmUnIGFsd2F5cyByZWFjaGVkKVxuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZHJhZ092ZXJCdWJibGUgJiYgIW9yaWdpbmFsRXZlbnQucm9vdEVsKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwob3JpZ2luYWxFdmVudCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkcm9wOiBmdW5jdGlvbiBkcm9wKCkge1xuICAgICAgaWYgKHRoaXMuc29ydGFibGUubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgIG9mZihkb2N1bWVudCwgJ2RyYWdvdmVyJywgdGhpcy5faGFuZGxlQXV0b1Njcm9sbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmYoZG9jdW1lbnQsICdwb2ludGVybW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIG9mZihkb2N1bWVudCwgJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIG9mZihkb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICB9XG4gICAgICBjbGVhclBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsKCk7XG4gICAgICBjbGVhckF1dG9TY3JvbGxzKCk7XG4gICAgICBjYW5jZWxUaHJvdHRsZSgpO1xuICAgIH0sXG4gICAgbnVsbGluZzogZnVuY3Rpb24gbnVsbGluZygpIHtcbiAgICAgIHRvdWNoRXZ0JDEgPSBzY3JvbGxSb290RWwgPSBzY3JvbGxFbCA9IHNjcm9sbGluZyA9IHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsID0gbGFzdEF1dG9TY3JvbGxYID0gbGFzdEF1dG9TY3JvbGxZID0gbnVsbDtcbiAgICAgIGF1dG9TY3JvbGxzLmxlbmd0aCA9IDA7XG4gICAgfSxcbiAgICBfaGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsOiBmdW5jdGlvbiBfaGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsKGV2dCkge1xuICAgICAgdGhpcy5faGFuZGxlQXV0b1Njcm9sbChldnQsIHRydWUpO1xuICAgIH0sXG4gICAgX2hhbmRsZUF1dG9TY3JvbGw6IGZ1bmN0aW9uIF9oYW5kbGVBdXRvU2Nyb2xsKGV2dCwgZmFsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB2YXIgeCA9IChldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0KS5jbGllbnRYLFxuICAgICAgICB5ID0gKGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQpLmNsaWVudFksXG4gICAgICAgIGVsZW0gPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpO1xuICAgICAgdG91Y2hFdnQkMSA9IGV2dDtcblxuICAgICAgLy8gSUUgZG9lcyBub3Qgc2VlbSB0byBoYXZlIG5hdGl2ZSBhdXRvc2Nyb2xsLFxuICAgICAgLy8gRWRnZSdzIGF1dG9zY3JvbGwgc2VlbXMgdG9vIGNvbmRpdGlvbmFsLFxuICAgICAgLy8gTUFDT1MgU2FmYXJpIGRvZXMgbm90IGhhdmUgYXV0b3Njcm9sbCxcbiAgICAgIC8vIEZpcmVmb3ggYW5kIENocm9tZSBhcmUgZ29vZFxuICAgICAgaWYgKGZhbGxiYWNrIHx8IHRoaXMub3B0aW9ucy5mb3JjZUF1dG9TY3JvbGxGYWxsYmFjayB8fCBFZGdlIHx8IElFMTFPckxlc3MgfHwgU2FmYXJpKSB7XG4gICAgICAgIGF1dG9TY3JvbGwoZXZ0LCB0aGlzLm9wdGlvbnMsIGVsZW0sIGZhbGxiYWNrKTtcblxuICAgICAgICAvLyBMaXN0ZW5lciBmb3IgcG9pbnRlciBlbGVtZW50IGNoYW5nZVxuICAgICAgICB2YXIgb2dFbGVtU2Nyb2xsZXIgPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbGVtLCB0cnVlKTtcbiAgICAgICAgaWYgKHNjcm9sbGluZyAmJiAoIXBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsIHx8IHggIT09IGxhc3RBdXRvU2Nyb2xsWCB8fCB5ICE9PSBsYXN0QXV0b1Njcm9sbFkpKSB7XG4gICAgICAgICAgcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwgJiYgY2xlYXJQb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCgpO1xuICAgICAgICAgIC8vIERldGVjdCBmb3IgcG9pbnRlciBlbGVtIGNoYW5nZSwgZW11bGF0aW5nIG5hdGl2ZSBEbkQgYmVoYXZpb3VyXG4gICAgICAgICAgcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbmV3RWxlbSA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSksIHRydWUpO1xuICAgICAgICAgICAgaWYgKG5ld0VsZW0gIT09IG9nRWxlbVNjcm9sbGVyKSB7XG4gICAgICAgICAgICAgIG9nRWxlbVNjcm9sbGVyID0gbmV3RWxlbTtcbiAgICAgICAgICAgICAgY2xlYXJBdXRvU2Nyb2xscygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXV0b1Njcm9sbChldnQsIF90aGlzLm9wdGlvbnMsIG5ld0VsZW0sIGZhbGxiYWNrKTtcbiAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgbGFzdEF1dG9TY3JvbGxYID0geDtcbiAgICAgICAgICBsYXN0QXV0b1Njcm9sbFkgPSB5O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiBEbkQgaXMgZW5hYmxlZCAoYW5kIGJyb3dzZXIgaGFzIGdvb2QgYXV0b3Njcm9sbGluZyksIGZpcnN0IGF1dG9zY3JvbGwgd2lsbCBhbHJlYWR5IHNjcm9sbCwgc28gZ2V0IHBhcmVudCBhdXRvc2Nyb2xsIG9mIGZpcnN0IGF1dG9zY3JvbGxcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuYnViYmxlU2Nyb2xsIHx8IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGVsZW0sIHRydWUpID09PSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkpIHtcbiAgICAgICAgICBjbGVhckF1dG9TY3JvbGxzKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF1dG9TY3JvbGwoZXZ0LCB0aGlzLm9wdGlvbnMsIGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGVsZW0sIGZhbHNlKSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzKEF1dG9TY3JvbGwsIHtcbiAgICBwbHVnaW5OYW1lOiAnc2Nyb2xsJyxcbiAgICBpbml0aWFsaXplQnlEZWZhdWx0OiB0cnVlXG4gIH0pO1xufVxuZnVuY3Rpb24gY2xlYXJBdXRvU2Nyb2xscygpIHtcbiAgYXV0b1Njcm9sbHMuZm9yRWFjaChmdW5jdGlvbiAoYXV0b1Njcm9sbCkge1xuICAgIGNsZWFySW50ZXJ2YWwoYXV0b1Njcm9sbC5waWQpO1xuICB9KTtcbiAgYXV0b1Njcm9sbHMgPSBbXTtcbn1cbmZ1bmN0aW9uIGNsZWFyUG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwoKSB7XG4gIGNsZWFySW50ZXJ2YWwocG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwpO1xufVxudmFyIGF1dG9TY3JvbGwgPSB0aHJvdHRsZShmdW5jdGlvbiAoZXZ0LCBvcHRpb25zLCByb290RWwsIGlzRmFsbGJhY2spIHtcbiAgLy8gQnVnOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01MDU1MjFcbiAgaWYgKCFvcHRpb25zLnNjcm9sbCkgcmV0dXJuO1xuICB2YXIgeCA9IChldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0KS5jbGllbnRYLFxuICAgIHkgPSAoZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXSA6IGV2dCkuY2xpZW50WSxcbiAgICBzZW5zID0gb3B0aW9ucy5zY3JvbGxTZW5zaXRpdml0eSxcbiAgICBzcGVlZCA9IG9wdGlvbnMuc2Nyb2xsU3BlZWQsXG4gICAgd2luU2Nyb2xsZXIgPSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCk7XG4gIHZhciBzY3JvbGxUaGlzSW5zdGFuY2UgPSBmYWxzZSxcbiAgICBzY3JvbGxDdXN0b21GbjtcblxuICAvLyBOZXcgc2Nyb2xsIHJvb3QsIHNldCBzY3JvbGxFbFxuICBpZiAoc2Nyb2xsUm9vdEVsICE9PSByb290RWwpIHtcbiAgICBzY3JvbGxSb290RWwgPSByb290RWw7XG4gICAgY2xlYXJBdXRvU2Nyb2xscygpO1xuICAgIHNjcm9sbEVsID0gb3B0aW9ucy5zY3JvbGw7XG4gICAgc2Nyb2xsQ3VzdG9tRm4gPSBvcHRpb25zLnNjcm9sbEZuO1xuICAgIGlmIChzY3JvbGxFbCA9PT0gdHJ1ZSkge1xuICAgICAgc2Nyb2xsRWwgPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChyb290RWwsIHRydWUpO1xuICAgIH1cbiAgfVxuICB2YXIgbGF5ZXJzT3V0ID0gMDtcbiAgdmFyIGN1cnJlbnRQYXJlbnQgPSBzY3JvbGxFbDtcbiAgZG8ge1xuICAgIHZhciBlbCA9IGN1cnJlbnRQYXJlbnQsXG4gICAgICByZWN0ID0gZ2V0UmVjdChlbCksXG4gICAgICB0b3AgPSByZWN0LnRvcCxcbiAgICAgIGJvdHRvbSA9IHJlY3QuYm90dG9tLFxuICAgICAgbGVmdCA9IHJlY3QubGVmdCxcbiAgICAgIHJpZ2h0ID0gcmVjdC5yaWdodCxcbiAgICAgIHdpZHRoID0gcmVjdC53aWR0aCxcbiAgICAgIGhlaWdodCA9IHJlY3QuaGVpZ2h0LFxuICAgICAgY2FuU2Nyb2xsWCA9IHZvaWQgMCxcbiAgICAgIGNhblNjcm9sbFkgPSB2b2lkIDAsXG4gICAgICBzY3JvbGxXaWR0aCA9IGVsLnNjcm9sbFdpZHRoLFxuICAgICAgc2Nyb2xsSGVpZ2h0ID0gZWwuc2Nyb2xsSGVpZ2h0LFxuICAgICAgZWxDU1MgPSBjc3MoZWwpLFxuICAgICAgc2Nyb2xsUG9zWCA9IGVsLnNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxQb3NZID0gZWwuc2Nyb2xsVG9wO1xuICAgIGlmIChlbCA9PT0gd2luU2Nyb2xsZXIpIHtcbiAgICAgIGNhblNjcm9sbFggPSB3aWR0aCA8IHNjcm9sbFdpZHRoICYmIChlbENTUy5vdmVyZmxvd1ggPT09ICdhdXRvJyB8fCBlbENTUy5vdmVyZmxvd1ggPT09ICdzY3JvbGwnIHx8IGVsQ1NTLm92ZXJmbG93WCA9PT0gJ3Zpc2libGUnKTtcbiAgICAgIGNhblNjcm9sbFkgPSBoZWlnaHQgPCBzY3JvbGxIZWlnaHQgJiYgKGVsQ1NTLm92ZXJmbG93WSA9PT0gJ2F1dG8nIHx8IGVsQ1NTLm92ZXJmbG93WSA9PT0gJ3Njcm9sbCcgfHwgZWxDU1Mub3ZlcmZsb3dZID09PSAndmlzaWJsZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYW5TY3JvbGxYID0gd2lkdGggPCBzY3JvbGxXaWR0aCAmJiAoZWxDU1Mub3ZlcmZsb3dYID09PSAnYXV0bycgfHwgZWxDU1Mub3ZlcmZsb3dYID09PSAnc2Nyb2xsJyk7XG4gICAgICBjYW5TY3JvbGxZID0gaGVpZ2h0IDwgc2Nyb2xsSGVpZ2h0ICYmIChlbENTUy5vdmVyZmxvd1kgPT09ICdhdXRvJyB8fCBlbENTUy5vdmVyZmxvd1kgPT09ICdzY3JvbGwnKTtcbiAgICB9XG4gICAgdmFyIHZ4ID0gY2FuU2Nyb2xsWCAmJiAoTWF0aC5hYnMocmlnaHQgLSB4KSA8PSBzZW5zICYmIHNjcm9sbFBvc1ggKyB3aWR0aCA8IHNjcm9sbFdpZHRoKSAtIChNYXRoLmFicyhsZWZ0IC0geCkgPD0gc2VucyAmJiAhIXNjcm9sbFBvc1gpO1xuICAgIHZhciB2eSA9IGNhblNjcm9sbFkgJiYgKE1hdGguYWJzKGJvdHRvbSAtIHkpIDw9IHNlbnMgJiYgc2Nyb2xsUG9zWSArIGhlaWdodCA8IHNjcm9sbEhlaWdodCkgLSAoTWF0aC5hYnModG9wIC0geSkgPD0gc2VucyAmJiAhIXNjcm9sbFBvc1kpO1xuICAgIGlmICghYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gbGF5ZXJzT3V0OyBpKyspIHtcbiAgICAgICAgaWYgKCFhdXRvU2Nyb2xsc1tpXSkge1xuICAgICAgICAgIGF1dG9TY3JvbGxzW2ldID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGF1dG9TY3JvbGxzW2xheWVyc091dF0udnggIT0gdnggfHwgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS52eSAhPSB2eSB8fCBhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLmVsICE9PSBlbCkge1xuICAgICAgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS5lbCA9IGVsO1xuICAgICAgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS52eCA9IHZ4O1xuICAgICAgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS52eSA9IHZ5O1xuICAgICAgY2xlYXJJbnRlcnZhbChhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLnBpZCk7XG4gICAgICBpZiAodnggIT0gMCB8fCB2eSAhPSAwKSB7XG4gICAgICAgIHNjcm9sbFRoaXNJbnN0YW5jZSA9IHRydWU7XG4gICAgICAgIC8qIGpzaGludCBsb29wZnVuYzp0cnVlICovXG4gICAgICAgIGF1dG9TY3JvbGxzW2xheWVyc091dF0ucGlkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIGVtdWxhdGUgZHJhZyBvdmVyIGR1cmluZyBhdXRvc2Nyb2xsIChmYWxsYmFjayksIGVtdWxhdGluZyBuYXRpdmUgRG5EIGJlaGF2aW91clxuICAgICAgICAgIGlmIChpc0ZhbGxiYWNrICYmIHRoaXMubGF5ZXIgPT09IDApIHtcbiAgICAgICAgICAgIFNvcnRhYmxlLmFjdGl2ZS5fb25Ub3VjaE1vdmUodG91Y2hFdnQkMSk7IC8vIFRvIG1vdmUgZ2hvc3QgaWYgaXQgaXMgcG9zaXRpb25lZCBhYnNvbHV0ZWx5XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBzY3JvbGxPZmZzZXRZID0gYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0udnkgPyBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS52eSAqIHNwZWVkIDogMDtcbiAgICAgICAgICB2YXIgc2Nyb2xsT2Zmc2V0WCA9IGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLnZ4ID8gYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0udnggKiBzcGVlZCA6IDA7XG4gICAgICAgICAgaWYgKHR5cGVvZiBzY3JvbGxDdXN0b21GbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHNjcm9sbEN1c3RvbUZuLmNhbGwoU29ydGFibGUuZHJhZ2dlZC5wYXJlbnROb2RlW2V4cGFuZG9dLCBzY3JvbGxPZmZzZXRYLCBzY3JvbGxPZmZzZXRZLCBldnQsIHRvdWNoRXZ0JDEsIGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLmVsKSAhPT0gJ2NvbnRpbnVlJykge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNjcm9sbEJ5KGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLmVsLCBzY3JvbGxPZmZzZXRYLCBzY3JvbGxPZmZzZXRZKTtcbiAgICAgICAgfS5iaW5kKHtcbiAgICAgICAgICBsYXllcjogbGF5ZXJzT3V0XG4gICAgICAgIH0pLCAyNCk7XG4gICAgICB9XG4gICAgfVxuICAgIGxheWVyc091dCsrO1xuICB9IHdoaWxlIChvcHRpb25zLmJ1YmJsZVNjcm9sbCAmJiBjdXJyZW50UGFyZW50ICE9PSB3aW5TY3JvbGxlciAmJiAoY3VycmVudFBhcmVudCA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGN1cnJlbnRQYXJlbnQsIGZhbHNlKSkpO1xuICBzY3JvbGxpbmcgPSBzY3JvbGxUaGlzSW5zdGFuY2U7IC8vIGluIGNhc2UgYW5vdGhlciBmdW5jdGlvbiBjYXRjaGVzIHNjcm9sbGluZyBhcyBmYWxzZSBpbiBiZXR3ZWVuIHdoZW4gaXQgaXMgbm90XG59LCAzMCk7XG5cbnZhciBkcm9wID0gZnVuY3Rpb24gZHJvcChfcmVmKSB7XG4gIHZhciBvcmlnaW5hbEV2ZW50ID0gX3JlZi5vcmlnaW5hbEV2ZW50LFxuICAgIHB1dFNvcnRhYmxlID0gX3JlZi5wdXRTb3J0YWJsZSxcbiAgICBkcmFnRWwgPSBfcmVmLmRyYWdFbCxcbiAgICBhY3RpdmVTb3J0YWJsZSA9IF9yZWYuYWN0aXZlU29ydGFibGUsXG4gICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50ID0gX3JlZi5kaXNwYXRjaFNvcnRhYmxlRXZlbnQsXG4gICAgaGlkZUdob3N0Rm9yVGFyZ2V0ID0gX3JlZi5oaWRlR2hvc3RGb3JUYXJnZXQsXG4gICAgdW5oaWRlR2hvc3RGb3JUYXJnZXQgPSBfcmVmLnVuaGlkZUdob3N0Rm9yVGFyZ2V0O1xuICBpZiAoIW9yaWdpbmFsRXZlbnQpIHJldHVybjtcbiAgdmFyIHRvU29ydGFibGUgPSBwdXRTb3J0YWJsZSB8fCBhY3RpdmVTb3J0YWJsZTtcbiAgaGlkZUdob3N0Rm9yVGFyZ2V0KCk7XG4gIHZhciB0b3VjaCA9IG9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgb3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPyBvcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogb3JpZ2luYWxFdmVudDtcbiAgdmFyIHRhcmdldCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQodG91Y2guY2xpZW50WCwgdG91Y2guY2xpZW50WSk7XG4gIHVuaGlkZUdob3N0Rm9yVGFyZ2V0KCk7XG4gIGlmICh0b1NvcnRhYmxlICYmICF0b1NvcnRhYmxlLmVsLmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQoJ3NwaWxsJyk7XG4gICAgdGhpcy5vblNwaWxsKHtcbiAgICAgIGRyYWdFbDogZHJhZ0VsLFxuICAgICAgcHV0U29ydGFibGU6IHB1dFNvcnRhYmxlXG4gICAgfSk7XG4gIH1cbn07XG5mdW5jdGlvbiBSZXZlcnQoKSB7fVxuUmV2ZXJ0LnByb3RvdHlwZSA9IHtcbiAgc3RhcnRJbmRleDogbnVsbCxcbiAgZHJhZ1N0YXJ0OiBmdW5jdGlvbiBkcmFnU3RhcnQoX3JlZjIpIHtcbiAgICB2YXIgb2xkRHJhZ2dhYmxlSW5kZXggPSBfcmVmMi5vbGREcmFnZ2FibGVJbmRleDtcbiAgICB0aGlzLnN0YXJ0SW5kZXggPSBvbGREcmFnZ2FibGVJbmRleDtcbiAgfSxcbiAgb25TcGlsbDogZnVuY3Rpb24gb25TcGlsbChfcmVmMykge1xuICAgIHZhciBkcmFnRWwgPSBfcmVmMy5kcmFnRWwsXG4gICAgICBwdXRTb3J0YWJsZSA9IF9yZWYzLnB1dFNvcnRhYmxlO1xuICAgIHRoaXMuc29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgaWYgKHB1dFNvcnRhYmxlKSB7XG4gICAgICBwdXRTb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICB9XG4gICAgdmFyIG5leHRTaWJsaW5nID0gZ2V0Q2hpbGQodGhpcy5zb3J0YWJsZS5lbCwgdGhpcy5zdGFydEluZGV4LCB0aGlzLm9wdGlvbnMpO1xuICAgIGlmIChuZXh0U2libGluZykge1xuICAgICAgdGhpcy5zb3J0YWJsZS5lbC5pbnNlcnRCZWZvcmUoZHJhZ0VsLCBuZXh0U2libGluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc29ydGFibGUuZWwuYXBwZW5kQ2hpbGQoZHJhZ0VsKTtcbiAgICB9XG4gICAgdGhpcy5zb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgaWYgKHB1dFNvcnRhYmxlKSB7XG4gICAgICBwdXRTb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgfVxuICB9LFxuICBkcm9wOiBkcm9wXG59O1xuX2V4dGVuZHMoUmV2ZXJ0LCB7XG4gIHBsdWdpbk5hbWU6ICdyZXZlcnRPblNwaWxsJ1xufSk7XG5mdW5jdGlvbiBSZW1vdmUoKSB7fVxuUmVtb3ZlLnByb3RvdHlwZSA9IHtcbiAgb25TcGlsbDogZnVuY3Rpb24gb25TcGlsbChfcmVmNCkge1xuICAgIHZhciBkcmFnRWwgPSBfcmVmNC5kcmFnRWwsXG4gICAgICBwdXRTb3J0YWJsZSA9IF9yZWY0LnB1dFNvcnRhYmxlO1xuICAgIHZhciBwYXJlbnRTb3J0YWJsZSA9IHB1dFNvcnRhYmxlIHx8IHRoaXMuc29ydGFibGU7XG4gICAgcGFyZW50U29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgZHJhZ0VsLnBhcmVudE5vZGUgJiYgZHJhZ0VsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZHJhZ0VsKTtcbiAgICBwYXJlbnRTb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gIH0sXG4gIGRyb3A6IGRyb3Bcbn07XG5fZXh0ZW5kcyhSZW1vdmUsIHtcbiAgcGx1Z2luTmFtZTogJ3JlbW92ZU9uU3BpbGwnXG59KTtcblxudmFyIGxhc3RTd2FwRWw7XG5mdW5jdGlvbiBTd2FwUGx1Z2luKCkge1xuICBmdW5jdGlvbiBTd2FwKCkge1xuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzd2FwQ2xhc3M6ICdzb3J0YWJsZS1zd2FwLWhpZ2hsaWdodCdcbiAgICB9O1xuICB9XG4gIFN3YXAucHJvdG90eXBlID0ge1xuICAgIGRyYWdTdGFydDogZnVuY3Rpb24gZHJhZ1N0YXJ0KF9yZWYpIHtcbiAgICAgIHZhciBkcmFnRWwgPSBfcmVmLmRyYWdFbDtcbiAgICAgIGxhc3RTd2FwRWwgPSBkcmFnRWw7XG4gICAgfSxcbiAgICBkcmFnT3ZlclZhbGlkOiBmdW5jdGlvbiBkcmFnT3ZlclZhbGlkKF9yZWYyKSB7XG4gICAgICB2YXIgY29tcGxldGVkID0gX3JlZjIuY29tcGxldGVkLFxuICAgICAgICB0YXJnZXQgPSBfcmVmMi50YXJnZXQsXG4gICAgICAgIG9uTW92ZSA9IF9yZWYyLm9uTW92ZSxcbiAgICAgICAgYWN0aXZlU29ydGFibGUgPSBfcmVmMi5hY3RpdmVTb3J0YWJsZSxcbiAgICAgICAgY2hhbmdlZCA9IF9yZWYyLmNoYW5nZWQsXG4gICAgICAgIGNhbmNlbCA9IF9yZWYyLmNhbmNlbDtcbiAgICAgIGlmICghYWN0aXZlU29ydGFibGUub3B0aW9ucy5zd2FwKSByZXR1cm47XG4gICAgICB2YXIgZWwgPSB0aGlzLnNvcnRhYmxlLmVsLFxuICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgIT09IGVsKSB7XG4gICAgICAgIHZhciBwcmV2U3dhcEVsID0gbGFzdFN3YXBFbDtcbiAgICAgICAgaWYgKG9uTW92ZSh0YXJnZXQpICE9PSBmYWxzZSkge1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKHRhcmdldCwgb3B0aW9ucy5zd2FwQ2xhc3MsIHRydWUpO1xuICAgICAgICAgIGxhc3RTd2FwRWwgPSB0YXJnZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFzdFN3YXBFbCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXZTd2FwRWwgJiYgcHJldlN3YXBFbCAhPT0gbGFzdFN3YXBFbCkge1xuICAgICAgICAgIHRvZ2dsZUNsYXNzKHByZXZTd2FwRWwsIG9wdGlvbnMuc3dhcENsYXNzLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoYW5nZWQoKTtcbiAgICAgIGNvbXBsZXRlZCh0cnVlKTtcbiAgICAgIGNhbmNlbCgpO1xuICAgIH0sXG4gICAgZHJvcDogZnVuY3Rpb24gZHJvcChfcmVmMykge1xuICAgICAgdmFyIGFjdGl2ZVNvcnRhYmxlID0gX3JlZjMuYWN0aXZlU29ydGFibGUsXG4gICAgICAgIHB1dFNvcnRhYmxlID0gX3JlZjMucHV0U29ydGFibGUsXG4gICAgICAgIGRyYWdFbCA9IF9yZWYzLmRyYWdFbDtcbiAgICAgIHZhciB0b1NvcnRhYmxlID0gcHV0U29ydGFibGUgfHwgdGhpcy5zb3J0YWJsZTtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgICAgbGFzdFN3YXBFbCAmJiB0b2dnbGVDbGFzcyhsYXN0U3dhcEVsLCBvcHRpb25zLnN3YXBDbGFzcywgZmFsc2UpO1xuICAgICAgaWYgKGxhc3RTd2FwRWwgJiYgKG9wdGlvbnMuc3dhcCB8fCBwdXRTb3J0YWJsZSAmJiBwdXRTb3J0YWJsZS5vcHRpb25zLnN3YXApKSB7XG4gICAgICAgIGlmIChkcmFnRWwgIT09IGxhc3RTd2FwRWwpIHtcbiAgICAgICAgICB0b1NvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgICAgICAgIGlmICh0b1NvcnRhYmxlICE9PSBhY3RpdmVTb3J0YWJsZSkgYWN0aXZlU29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICAgICAgc3dhcE5vZGVzKGRyYWdFbCwgbGFzdFN3YXBFbCk7XG4gICAgICAgICAgdG9Tb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgICAgICAgaWYgKHRvU29ydGFibGUgIT09IGFjdGl2ZVNvcnRhYmxlKSBhY3RpdmVTb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG51bGxpbmc6IGZ1bmN0aW9uIG51bGxpbmcoKSB7XG4gICAgICBsYXN0U3dhcEVsID0gbnVsbDtcbiAgICB9XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcyhTd2FwLCB7XG4gICAgcGx1Z2luTmFtZTogJ3N3YXAnLFxuICAgIGV2ZW50UHJvcGVydGllczogZnVuY3Rpb24gZXZlbnRQcm9wZXJ0aWVzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3dhcEl0ZW06IGxhc3RTd2FwRWxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIHN3YXBOb2RlcyhuMSwgbjIpIHtcbiAgdmFyIHAxID0gbjEucGFyZW50Tm9kZSxcbiAgICBwMiA9IG4yLnBhcmVudE5vZGUsXG4gICAgaTEsXG4gICAgaTI7XG4gIGlmICghcDEgfHwgIXAyIHx8IHAxLmlzRXF1YWxOb2RlKG4yKSB8fCBwMi5pc0VxdWFsTm9kZShuMSkpIHJldHVybjtcbiAgaTEgPSBpbmRleChuMSk7XG4gIGkyID0gaW5kZXgobjIpO1xuICBpZiAocDEuaXNFcXVhbE5vZGUocDIpICYmIGkxIDwgaTIpIHtcbiAgICBpMisrO1xuICB9XG4gIHAxLmluc2VydEJlZm9yZShuMiwgcDEuY2hpbGRyZW5baTFdKTtcbiAgcDIuaW5zZXJ0QmVmb3JlKG4xLCBwMi5jaGlsZHJlbltpMl0pO1xufVxuXG52YXIgbXVsdGlEcmFnRWxlbWVudHMgPSBbXSxcbiAgbXVsdGlEcmFnQ2xvbmVzID0gW10sXG4gIGxhc3RNdWx0aURyYWdTZWxlY3QsXG4gIC8vIGZvciBzZWxlY3Rpb24gd2l0aCBtb2RpZmllciBrZXkgZG93biAoU0hJRlQpXG4gIG11bHRpRHJhZ1NvcnRhYmxlLFxuICBpbml0aWFsRm9sZGluZyA9IGZhbHNlLFxuICAvLyBJbml0aWFsIG11bHRpLWRyYWcgZm9sZCB3aGVuIGRyYWcgc3RhcnRlZFxuICBmb2xkaW5nID0gZmFsc2UsXG4gIC8vIEZvbGRpbmcgYW55IG90aGVyIHRpbWVcbiAgZHJhZ1N0YXJ0ZWQgPSBmYWxzZSxcbiAgZHJhZ0VsJDEsXG4gIGNsb25lc0Zyb21SZWN0LFxuICBjbG9uZXNIaWRkZW47XG5mdW5jdGlvbiBNdWx0aURyYWdQbHVnaW4oKSB7XG4gIGZ1bmN0aW9uIE11bHRpRHJhZyhzb3J0YWJsZSkge1xuICAgIC8vIEJpbmQgYWxsIHByaXZhdGUgbWV0aG9kc1xuICAgIGZvciAodmFyIGZuIGluIHRoaXMpIHtcbiAgICAgIGlmIChmbi5jaGFyQXQoMCkgPT09ICdfJyAmJiB0eXBlb2YgdGhpc1tmbl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpc1tmbl0gPSB0aGlzW2ZuXS5iaW5kKHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXNvcnRhYmxlLm9wdGlvbnMuYXZvaWRJbXBsaWNpdERlc2VsZWN0KSB7XG4gICAgICBpZiAoc29ydGFibGUub3B0aW9ucy5zdXBwb3J0UG9pbnRlcikge1xuICAgICAgICBvbihkb2N1bWVudCwgJ3BvaW50ZXJ1cCcsIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKTtcbiAgICAgICAgb24oZG9jdW1lbnQsICd0b3VjaGVuZCcsIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgb24oZG9jdW1lbnQsICdrZXlkb3duJywgdGhpcy5fY2hlY2tLZXlEb3duKTtcbiAgICBvbihkb2N1bWVudCwgJ2tleXVwJywgdGhpcy5fY2hlY2tLZXlVcCk7XG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHNlbGVjdGVkQ2xhc3M6ICdzb3J0YWJsZS1zZWxlY3RlZCcsXG4gICAgICBtdWx0aURyYWdLZXk6IG51bGwsXG4gICAgICBhdm9pZEltcGxpY2l0RGVzZWxlY3Q6IGZhbHNlLFxuICAgICAgc2V0RGF0YTogZnVuY3Rpb24gc2V0RGF0YShkYXRhVHJhbnNmZXIsIGRyYWdFbCkge1xuICAgICAgICB2YXIgZGF0YSA9ICcnO1xuICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoICYmIG11bHRpRHJhZ1NvcnRhYmxlID09PSBzb3J0YWJsZSkge1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQsIGkpIHtcbiAgICAgICAgICAgIGRhdGEgKz0gKCFpID8gJycgOiAnLCAnKSArIG11bHRpRHJhZ0VsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YSA9IGRyYWdFbC50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBkYXRhVHJhbnNmZXIuc2V0RGF0YSgnVGV4dCcsIGRhdGEpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgTXVsdGlEcmFnLnByb3RvdHlwZSA9IHtcbiAgICBtdWx0aURyYWdLZXlEb3duOiBmYWxzZSxcbiAgICBpc011bHRpRHJhZzogZmFsc2UsXG4gICAgZGVsYXlTdGFydEdsb2JhbDogZnVuY3Rpb24gZGVsYXlTdGFydEdsb2JhbChfcmVmKSB7XG4gICAgICB2YXIgZHJhZ2dlZCA9IF9yZWYuZHJhZ0VsO1xuICAgICAgZHJhZ0VsJDEgPSBkcmFnZ2VkO1xuICAgIH0sXG4gICAgZGVsYXlFbmRlZDogZnVuY3Rpb24gZGVsYXlFbmRlZCgpIHtcbiAgICAgIHRoaXMuaXNNdWx0aURyYWcgPSB+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihkcmFnRWwkMSk7XG4gICAgfSxcbiAgICBzZXR1cENsb25lOiBmdW5jdGlvbiBzZXR1cENsb25lKF9yZWYyKSB7XG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmMi5zb3J0YWJsZSxcbiAgICAgICAgY2FuY2VsID0gX3JlZjIuY2FuY2VsO1xuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlEcmFnKSByZXR1cm47XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG11bHRpRHJhZ0Nsb25lcy5wdXNoKGNsb25lKG11bHRpRHJhZ0VsZW1lbnRzW2ldKSk7XG4gICAgICAgIG11bHRpRHJhZ0Nsb25lc1tpXS5zb3J0YWJsZUluZGV4ID0gbXVsdGlEcmFnRWxlbWVudHNbaV0uc29ydGFibGVJbmRleDtcbiAgICAgICAgbXVsdGlEcmFnQ2xvbmVzW2ldLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICBtdWx0aURyYWdDbG9uZXNbaV0uc3R5bGVbJ3dpbGwtY2hhbmdlJ10gPSAnJztcbiAgICAgICAgdG9nZ2xlQ2xhc3MobXVsdGlEcmFnQ2xvbmVzW2ldLCB0aGlzLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcywgZmFsc2UpO1xuICAgICAgICBtdWx0aURyYWdFbGVtZW50c1tpXSA9PT0gZHJhZ0VsJDEgJiYgdG9nZ2xlQ2xhc3MobXVsdGlEcmFnQ2xvbmVzW2ldLCB0aGlzLm9wdGlvbnMuY2hvc2VuQ2xhc3MsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHNvcnRhYmxlLl9oaWRlQ2xvbmUoKTtcbiAgICAgIGNhbmNlbCgpO1xuICAgIH0sXG4gICAgY2xvbmU6IGZ1bmN0aW9uIGNsb25lKF9yZWYzKSB7XG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmMy5zb3J0YWJsZSxcbiAgICAgICAgcm9vdEVsID0gX3JlZjMucm9vdEVsLFxuICAgICAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQgPSBfcmVmMy5kaXNwYXRjaFNvcnRhYmxlRXZlbnQsXG4gICAgICAgIGNhbmNlbCA9IF9yZWYzLmNhbmNlbDtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZykgcmV0dXJuO1xuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGUpIHtcbiAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCAmJiBtdWx0aURyYWdTb3J0YWJsZSA9PT0gc29ydGFibGUpIHtcbiAgICAgICAgICBpbnNlcnRNdWx0aURyYWdDbG9uZXModHJ1ZSwgcm9vdEVsKTtcbiAgICAgICAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQoJ2Nsb25lJyk7XG4gICAgICAgICAgY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNob3dDbG9uZTogZnVuY3Rpb24gc2hvd0Nsb25lKF9yZWY0KSB7XG4gICAgICB2YXIgY2xvbmVOb3dTaG93biA9IF9yZWY0LmNsb25lTm93U2hvd24sXG4gICAgICAgIHJvb3RFbCA9IF9yZWY0LnJvb3RFbCxcbiAgICAgICAgY2FuY2VsID0gX3JlZjQuY2FuY2VsO1xuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlEcmFnKSByZXR1cm47XG4gICAgICBpbnNlcnRNdWx0aURyYWdDbG9uZXMoZmFsc2UsIHJvb3RFbCk7XG4gICAgICBtdWx0aURyYWdDbG9uZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xvbmUpIHtcbiAgICAgICAgY3NzKGNsb25lLCAnZGlzcGxheScsICcnKTtcbiAgICAgIH0pO1xuICAgICAgY2xvbmVOb3dTaG93bigpO1xuICAgICAgY2xvbmVzSGlkZGVuID0gZmFsc2U7XG4gICAgICBjYW5jZWwoKTtcbiAgICB9LFxuICAgIGhpZGVDbG9uZTogZnVuY3Rpb24gaGlkZUNsb25lKF9yZWY1KSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjUuc29ydGFibGUsXG4gICAgICAgIGNsb25lTm93SGlkZGVuID0gX3JlZjUuY2xvbmVOb3dIaWRkZW4sXG4gICAgICAgIGNhbmNlbCA9IF9yZWY1LmNhbmNlbDtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZykgcmV0dXJuO1xuICAgICAgbXVsdGlEcmFnQ2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lKSB7XG4gICAgICAgIGNzcyhjbG9uZSwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICBpZiAoX3RoaXMub3B0aW9ucy5yZW1vdmVDbG9uZU9uSGlkZSAmJiBjbG9uZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgY2xvbmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY2xvbmVOb3dIaWRkZW4oKTtcbiAgICAgIGNsb25lc0hpZGRlbiA9IHRydWU7XG4gICAgICBjYW5jZWwoKTtcbiAgICB9LFxuICAgIGRyYWdTdGFydEdsb2JhbDogZnVuY3Rpb24gZHJhZ1N0YXJ0R2xvYmFsKF9yZWY2KSB7XG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmNi5zb3J0YWJsZTtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZyAmJiBtdWx0aURyYWdTb3J0YWJsZSkge1xuICAgICAgICBtdWx0aURyYWdTb3J0YWJsZS5tdWx0aURyYWcuX2Rlc2VsZWN0TXVsdGlEcmFnKCk7XG4gICAgICB9XG4gICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnQuc29ydGFibGVJbmRleCA9IGluZGV4KG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFNvcnQgbXVsdGktZHJhZyBlbGVtZW50c1xuICAgICAgbXVsdGlEcmFnRWxlbWVudHMgPSBtdWx0aURyYWdFbGVtZW50cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLnNvcnRhYmxlSW5kZXggLSBiLnNvcnRhYmxlSW5kZXg7XG4gICAgICB9KTtcbiAgICAgIGRyYWdTdGFydGVkID0gdHJ1ZTtcbiAgICB9LFxuICAgIGRyYWdTdGFydGVkOiBmdW5jdGlvbiBkcmFnU3RhcnRlZChfcmVmNykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmNy5zb3J0YWJsZTtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZykgcmV0dXJuO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0KSB7XG4gICAgICAgIC8vIENhcHR1cmUgcmVjdHMsXG4gICAgICAgIC8vIGhpZGUgbXVsdGkgZHJhZyBlbGVtZW50cyAoYnkgcG9zaXRpb25pbmcgdGhlbSBhYnNvbHV0ZSksXG4gICAgICAgIC8vIHNldCBtdWx0aSBkcmFnIGVsZW1lbnRzIHJlY3RzIHRvIGRyYWdSZWN0LFxuICAgICAgICAvLyBzaG93IG11bHRpIGRyYWcgZWxlbWVudHMsXG4gICAgICAgIC8vIGFuaW1hdGUgdG8gcmVjdHMsXG4gICAgICAgIC8vIHVuc2V0IHJlY3RzICYgcmVtb3ZlIGZyb20gRE9NXG5cbiAgICAgICAgc29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQgPT09IGRyYWdFbCQxKSByZXR1cm47XG4gICAgICAgICAgICBjc3MobXVsdGlEcmFnRWxlbWVudCwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdmFyIGRyYWdSZWN0ID0gZ2V0UmVjdChkcmFnRWwkMSwgZmFsc2UsIHRydWUsIHRydWUpO1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50ID09PSBkcmFnRWwkMSkgcmV0dXJuO1xuICAgICAgICAgICAgc2V0UmVjdChtdWx0aURyYWdFbGVtZW50LCBkcmFnUmVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZm9sZGluZyA9IHRydWU7XG4gICAgICAgICAgaW5pdGlhbEZvbGRpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzb3J0YWJsZS5hbmltYXRlQWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9sZGluZyA9IGZhbHNlO1xuICAgICAgICBpbml0aWFsRm9sZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoX3RoaXMyLm9wdGlvbnMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgdW5zZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBhdXhpbGlhcnkgbXVsdGlkcmFnIGl0ZW1zIGZyb20gZWwsIGlmIHNvcnRpbmcgZW5hYmxlZFxuICAgICAgICBpZiAoX3RoaXMyLm9wdGlvbnMuc29ydCkge1xuICAgICAgICAgIHJlbW92ZU11bHRpRHJhZ0VsZW1lbnRzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZHJhZ092ZXI6IGZ1bmN0aW9uIGRyYWdPdmVyKF9yZWY4KSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gX3JlZjgudGFyZ2V0LFxuICAgICAgICBjb21wbGV0ZWQgPSBfcmVmOC5jb21wbGV0ZWQsXG4gICAgICAgIGNhbmNlbCA9IF9yZWY4LmNhbmNlbDtcbiAgICAgIGlmIChmb2xkaW5nICYmIH5tdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKHRhcmdldCkpIHtcbiAgICAgICAgY29tcGxldGVkKGZhbHNlKTtcbiAgICAgICAgY2FuY2VsKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZXZlcnQ6IGZ1bmN0aW9uIHJldmVydChfcmVmOSkge1xuICAgICAgdmFyIGZyb21Tb3J0YWJsZSA9IF9yZWY5LmZyb21Tb3J0YWJsZSxcbiAgICAgICAgcm9vdEVsID0gX3JlZjkucm9vdEVsLFxuICAgICAgICBzb3J0YWJsZSA9IF9yZWY5LnNvcnRhYmxlLFxuICAgICAgICBkcmFnUmVjdCA9IF9yZWY5LmRyYWdSZWN0O1xuICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gU2V0dXAgdW5mb2xkIGFuaW1hdGlvblxuICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgc29ydGFibGUuYWRkQW5pbWF0aW9uU3RhdGUoe1xuICAgICAgICAgICAgdGFyZ2V0OiBtdWx0aURyYWdFbGVtZW50LFxuICAgICAgICAgICAgcmVjdDogZm9sZGluZyA/IGdldFJlY3QobXVsdGlEcmFnRWxlbWVudCkgOiBkcmFnUmVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHVuc2V0UmVjdChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50LmZyb21SZWN0ID0gZHJhZ1JlY3Q7XG4gICAgICAgICAgZnJvbVNvcnRhYmxlLnJlbW92ZUFuaW1hdGlvblN0YXRlKG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9sZGluZyA9IGZhbHNlO1xuICAgICAgICBpbnNlcnRNdWx0aURyYWdFbGVtZW50cyghdGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlLCByb290RWwpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZHJhZ092ZXJDb21wbGV0ZWQ6IGZ1bmN0aW9uIGRyYWdPdmVyQ29tcGxldGVkKF9yZWYxMCkge1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjEwLnNvcnRhYmxlLFxuICAgICAgICBpc093bmVyID0gX3JlZjEwLmlzT3duZXIsXG4gICAgICAgIGluc2VydGlvbiA9IF9yZWYxMC5pbnNlcnRpb24sXG4gICAgICAgIGFjdGl2ZVNvcnRhYmxlID0gX3JlZjEwLmFjdGl2ZVNvcnRhYmxlLFxuICAgICAgICBwYXJlbnRFbCA9IF9yZWYxMC5wYXJlbnRFbCxcbiAgICAgICAgcHV0U29ydGFibGUgPSBfcmVmMTAucHV0U29ydGFibGU7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIGlmIChpbnNlcnRpb24pIHtcbiAgICAgICAgLy8gQ2xvbmVzIG11c3QgYmUgaGlkZGVuIGJlZm9yZSBmb2xkaW5nIGFuaW1hdGlvbiB0byBjYXB0dXJlIGRyYWdSZWN0QWJzb2x1dGUgcHJvcGVybHlcbiAgICAgICAgaWYgKGlzT3duZXIpIHtcbiAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5faGlkZUNsb25lKCk7XG4gICAgICAgIH1cbiAgICAgICAgaW5pdGlhbEZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gSWYgbGVhdmluZyBzb3J0OmZhbHNlIHJvb3QsIG9yIGFscmVhZHkgZm9sZGluZyAtIEZvbGQgdG8gbmV3IGxvY2F0aW9uXG4gICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGlvbiAmJiBtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggPiAxICYmIChmb2xkaW5nIHx8ICFpc093bmVyICYmICFhY3RpdmVTb3J0YWJsZS5vcHRpb25zLnNvcnQgJiYgIXB1dFNvcnRhYmxlKSkge1xuICAgICAgICAgIC8vIEZvbGQ6IFNldCBhbGwgbXVsdGkgZHJhZyBlbGVtZW50cydzIHJlY3RzIHRvIGRyYWdFbCdzIHJlY3Qgd2hlbiBtdWx0aS1kcmFnIGVsZW1lbnRzIGFyZSBpbnZpc2libGVcbiAgICAgICAgICB2YXIgZHJhZ1JlY3RBYnNvbHV0ZSA9IGdldFJlY3QoZHJhZ0VsJDEsIGZhbHNlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudCA9PT0gZHJhZ0VsJDEpIHJldHVybjtcbiAgICAgICAgICAgIHNldFJlY3QobXVsdGlEcmFnRWxlbWVudCwgZHJhZ1JlY3RBYnNvbHV0ZSk7XG5cbiAgICAgICAgICAgIC8vIE1vdmUgZWxlbWVudChzKSB0byBlbmQgb2YgcGFyZW50RWwgc28gdGhhdCBpdCBkb2VzIG5vdCBpbnRlcmZlcmUgd2l0aCBtdWx0aS1kcmFnIGNsb25lcyBpbnNlcnRpb24gaWYgdGhleSBhcmUgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIHdoaWxlIGZvbGRpbmcsIGFuZCBzbyB0aGF0IHdlIGNhbiBjYXB0dXJlIHRoZW0gYWdhaW4gYmVjYXVzZSBvbGQgc29ydGFibGUgd2lsbCBubyBsb25nZXIgYmUgZnJvbVNvcnRhYmxlXG4gICAgICAgICAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZChtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmb2xkaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENsb25lcyBtdXN0IGJlIHNob3duIChhbmQgY2hlY2sgdG8gcmVtb3ZlIG11bHRpIGRyYWdzKSBhZnRlciBmb2xkaW5nIHdoZW4gaW50ZXJmZXJpbmcgbXVsdGlEcmFnRWxlbWVudHMgYXJlIG1vdmVkIG91dFxuICAgICAgICBpZiAoIWlzT3duZXIpIHtcbiAgICAgICAgICAvLyBPbmx5IHJlbW92ZSBpZiBub3QgZm9sZGluZyAoZm9sZGluZyB3aWxsIHJlbW92ZSB0aGVtIGFueXdheXMpXG4gICAgICAgICAgaWYgKCFmb2xkaW5nKSB7XG4gICAgICAgICAgICByZW1vdmVNdWx0aURyYWdFbGVtZW50cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdmFyIGNsb25lc0hpZGRlbkJlZm9yZSA9IGNsb25lc0hpZGRlbjtcbiAgICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlLl9zaG93Q2xvbmUoc29ydGFibGUpO1xuXG4gICAgICAgICAgICAvLyBVbmZvbGQgYW5pbWF0aW9uIGZvciBjbG9uZXMgaWYgc2hvd2luZyBmcm9tIGhpZGRlblxuICAgICAgICAgICAgaWYgKGFjdGl2ZVNvcnRhYmxlLm9wdGlvbnMuYW5pbWF0aW9uICYmICFjbG9uZXNIaWRkZW4gJiYgY2xvbmVzSGlkZGVuQmVmb3JlKSB7XG4gICAgICAgICAgICAgIG11bHRpRHJhZ0Nsb25lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbG9uZSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlLmFkZEFuaW1hdGlvblN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldDogY2xvbmUsXG4gICAgICAgICAgICAgICAgICByZWN0OiBjbG9uZXNGcm9tUmVjdFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNsb25lLmZyb21SZWN0ID0gY2xvbmVzRnJvbVJlY3Q7XG4gICAgICAgICAgICAgICAgY2xvbmUudGhpc0FuaW1hdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlLl9zaG93Q2xvbmUoc29ydGFibGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgZHJhZ092ZXJBbmltYXRpb25DYXB0dXJlOiBmdW5jdGlvbiBkcmFnT3ZlckFuaW1hdGlvbkNhcHR1cmUoX3JlZjExKSB7XG4gICAgICB2YXIgZHJhZ1JlY3QgPSBfcmVmMTEuZHJhZ1JlY3QsXG4gICAgICAgIGlzT3duZXIgPSBfcmVmMTEuaXNPd25lcixcbiAgICAgICAgYWN0aXZlU29ydGFibGUgPSBfcmVmMTEuYWN0aXZlU29ydGFibGU7XG4gICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnQudGhpc0FuaW1hdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgIH0pO1xuICAgICAgaWYgKGFjdGl2ZVNvcnRhYmxlLm9wdGlvbnMuYW5pbWF0aW9uICYmICFpc093bmVyICYmIGFjdGl2ZVNvcnRhYmxlLm11bHRpRHJhZy5pc011bHRpRHJhZykge1xuICAgICAgICBjbG9uZXNGcm9tUmVjdCA9IF9leHRlbmRzKHt9LCBkcmFnUmVjdCk7XG4gICAgICAgIHZhciBkcmFnTWF0cml4ID0gbWF0cml4KGRyYWdFbCQxLCB0cnVlKTtcbiAgICAgICAgY2xvbmVzRnJvbVJlY3QudG9wIC09IGRyYWdNYXRyaXguZjtcbiAgICAgICAgY2xvbmVzRnJvbVJlY3QubGVmdCAtPSBkcmFnTWF0cml4LmU7XG4gICAgICB9XG4gICAgfSxcbiAgICBkcmFnT3ZlckFuaW1hdGlvbkNvbXBsZXRlOiBmdW5jdGlvbiBkcmFnT3ZlckFuaW1hdGlvbkNvbXBsZXRlKCkge1xuICAgICAgaWYgKGZvbGRpbmcpIHtcbiAgICAgICAgZm9sZGluZyA9IGZhbHNlO1xuICAgICAgICByZW1vdmVNdWx0aURyYWdFbGVtZW50cygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZHJvcDogZnVuY3Rpb24gZHJvcChfcmVmMTIpIHtcbiAgICAgIHZhciBldnQgPSBfcmVmMTIub3JpZ2luYWxFdmVudCxcbiAgICAgICAgcm9vdEVsID0gX3JlZjEyLnJvb3RFbCxcbiAgICAgICAgcGFyZW50RWwgPSBfcmVmMTIucGFyZW50RWwsXG4gICAgICAgIHNvcnRhYmxlID0gX3JlZjEyLnNvcnRhYmxlLFxuICAgICAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQgPSBfcmVmMTIuZGlzcGF0Y2hTb3J0YWJsZUV2ZW50LFxuICAgICAgICBvbGRJbmRleCA9IF9yZWYxMi5vbGRJbmRleCxcbiAgICAgICAgcHV0U29ydGFibGUgPSBfcmVmMTIucHV0U29ydGFibGU7XG4gICAgICB2YXIgdG9Tb3J0YWJsZSA9IHB1dFNvcnRhYmxlIHx8IHRoaXMuc29ydGFibGU7XG4gICAgICBpZiAoIWV2dCkgcmV0dXJuO1xuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGNoaWxkcmVuID0gcGFyZW50RWwuY2hpbGRyZW47XG5cbiAgICAgIC8vIE11bHRpLWRyYWcgc2VsZWN0aW9uXG4gICAgICBpZiAoIWRyYWdTdGFydGVkKSB7XG4gICAgICAgIGlmIChvcHRpb25zLm11bHRpRHJhZ0tleSAmJiAhdGhpcy5tdWx0aURyYWdLZXlEb3duKSB7XG4gICAgICAgICAgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcoKTtcbiAgICAgICAgfVxuICAgICAgICB0b2dnbGVDbGFzcyhkcmFnRWwkMSwgb3B0aW9ucy5zZWxlY3RlZENsYXNzLCAhfm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZHJhZ0VsJDEpKTtcbiAgICAgICAgaWYgKCF+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihkcmFnRWwkMSkpIHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5wdXNoKGRyYWdFbCQxKTtcbiAgICAgICAgICBkaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgIHNvcnRhYmxlOiBzb3J0YWJsZSxcbiAgICAgICAgICAgIHJvb3RFbDogcm9vdEVsLFxuICAgICAgICAgICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgICAgICAgICB0YXJnZXRFbDogZHJhZ0VsJDEsXG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIE1vZGlmaWVyIGFjdGl2YXRlZCwgc2VsZWN0IGZyb20gbGFzdCB0byBkcmFnRWxcbiAgICAgICAgICBpZiAoZXZ0LnNoaWZ0S2V5ICYmIGxhc3RNdWx0aURyYWdTZWxlY3QgJiYgc29ydGFibGUuZWwuY29udGFpbnMobGFzdE11bHRpRHJhZ1NlbGVjdCkpIHtcbiAgICAgICAgICAgIHZhciBsYXN0SW5kZXggPSBpbmRleChsYXN0TXVsdGlEcmFnU2VsZWN0KSxcbiAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gaW5kZXgoZHJhZ0VsJDEpO1xuICAgICAgICAgICAgaWYgKH5sYXN0SW5kZXggJiYgfmN1cnJlbnRJbmRleCAmJiBsYXN0SW5kZXggIT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgICAgICAgICAvLyBNdXN0IGluY2x1ZGUgbGFzdE11bHRpRHJhZ1NlbGVjdCAoc2VsZWN0IGl0KSwgaW4gY2FzZSBtb2RpZmllZCBzZWxlY3Rpb24gZnJvbSBubyBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgLy8gKGJ1dCBwcmV2aW91cyBzZWxlY3Rpb24gZXhpc3RlZClcbiAgICAgICAgICAgICAgdmFyIG4sIGk7XG4gICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpID0gbGFzdEluZGV4O1xuICAgICAgICAgICAgICAgIG4gPSBjdXJyZW50SW5kZXg7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaSA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgICAgICBuID0gbGFzdEluZGV4ICsgMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihjaGlsZHJlbltpXSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKGNoaWxkcmVuW2ldLCBvcHRpb25zLnNlbGVjdGVkQ2xhc3MsIHRydWUpO1xuICAgICAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnB1c2goY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlLFxuICAgICAgICAgICAgICAgICAgcm9vdEVsOiByb290RWwsXG4gICAgICAgICAgICAgICAgICBuYW1lOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgIHRhcmdldEVsOiBjaGlsZHJlbltpXSxcbiAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhc3RNdWx0aURyYWdTZWxlY3QgPSBkcmFnRWwkMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbXVsdGlEcmFnU29ydGFibGUgPSB0b1NvcnRhYmxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnNwbGljZShtdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGRyYWdFbCQxKSwgMSk7XG4gICAgICAgICAgbGFzdE11bHRpRHJhZ1NlbGVjdCA9IG51bGw7XG4gICAgICAgICAgZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICBzb3J0YWJsZTogc29ydGFibGUsXG4gICAgICAgICAgICByb290RWw6IHJvb3RFbCxcbiAgICAgICAgICAgIG5hbWU6ICdkZXNlbGVjdCcsXG4gICAgICAgICAgICB0YXJnZXRFbDogZHJhZ0VsJDEsXG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBNdWx0aS1kcmFnIGRyb3BcbiAgICAgIGlmIChkcmFnU3RhcnRlZCAmJiB0aGlzLmlzTXVsdGlEcmFnKSB7XG4gICAgICAgIGZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gRG8gbm90IFwidW5mb2xkXCIgYWZ0ZXIgYXJvdW5kIGRyYWdFbCBpZiByZXZlcnRlZFxuICAgICAgICBpZiAoKHBhcmVudEVsW2V4cGFuZG9dLm9wdGlvbnMuc29ydCB8fCBwYXJlbnRFbCAhPT0gcm9vdEVsKSAmJiBtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdmFyIGRyYWdSZWN0ID0gZ2V0UmVjdChkcmFnRWwkMSksXG4gICAgICAgICAgICBtdWx0aURyYWdJbmRleCA9IGluZGV4KGRyYWdFbCQxLCAnOm5vdCguJyArIHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzICsgJyknKTtcbiAgICAgICAgICBpZiAoIWluaXRpYWxGb2xkaW5nICYmIG9wdGlvbnMuYW5pbWF0aW9uKSBkcmFnRWwkMS50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICAgIHRvU29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICAgICAgaWYgKCFpbml0aWFsRm9sZGluZykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgIGRyYWdFbCQxLmZyb21SZWN0ID0gZHJhZ1JlY3Q7XG4gICAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50LnRoaXNBbmltYXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQgIT09IGRyYWdFbCQxKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgcmVjdCA9IGZvbGRpbmcgPyBnZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpIDogZHJhZ1JlY3Q7XG4gICAgICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50LmZyb21SZWN0ID0gcmVjdDtcblxuICAgICAgICAgICAgICAgICAgLy8gUHJlcGFyZSB1bmZvbGQgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICB0b1NvcnRhYmxlLmFkZEFuaW1hdGlvblN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBtdWx0aURyYWdFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICByZWN0OiByZWN0XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBNdWx0aSBkcmFnIGVsZW1lbnRzIGFyZSBub3QgbmVjZXNzYXJpbHkgcmVtb3ZlZCBmcm9tIHRoZSBET00gb24gZHJvcCwgc28gdG8gcmVpbnNlcnRcbiAgICAgICAgICAgIC8vIHByb3Blcmx5IHRoZXkgbXVzdCBhbGwgYmUgcmVtb3ZlZFxuICAgICAgICAgICAgcmVtb3ZlTXVsdGlEcmFnRWxlbWVudHMoKTtcbiAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuW211bHRpRHJhZ0luZGV4XSkge1xuICAgICAgICAgICAgICAgIHBhcmVudEVsLmluc2VydEJlZm9yZShtdWx0aURyYWdFbGVtZW50LCBjaGlsZHJlblttdWx0aURyYWdJbmRleF0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG11bHRpRHJhZ0luZGV4Kys7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gSWYgaW5pdGlhbCBmb2xkaW5nIGlzIGRvbmUsIHRoZSBlbGVtZW50cyBtYXkgaGF2ZSBjaGFuZ2VkIHBvc2l0aW9uIGJlY2F1c2UgdGhleSBhcmUgbm93XG4gICAgICAgICAgICAvLyB1bmZvbGRpbmcgYXJvdW5kIGRyYWdFbCwgZXZlbiB0aG91Z2ggZHJhZ0VsIG1heSBub3QgaGF2ZSBoaXMgaW5kZXggY2hhbmdlZCwgc28gdXBkYXRlIGV2ZW50XG4gICAgICAgICAgICAvLyBtdXN0IGJlIGZpcmVkIGhlcmUgYXMgU29ydGFibGUgd2lsbCBub3QuXG4gICAgICAgICAgICBpZiAob2xkSW5kZXggPT09IGluZGV4KGRyYWdFbCQxKSkge1xuICAgICAgICAgICAgICB2YXIgdXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudC5zb3J0YWJsZUluZGV4ICE9PSBpbmRleChtdWx0aURyYWdFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KCd1cGRhdGUnKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQoJ3NvcnQnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIE11c3QgYmUgZG9uZSBhZnRlciBjYXB0dXJpbmcgaW5kaXZpZHVhbCByZWN0cyAoc2Nyb2xsIGJhcilcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICB1bnNldFJlY3QobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdG9Tb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgbXVsdGlEcmFnU29ydGFibGUgPSB0b1NvcnRhYmxlO1xuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgY2xvbmVzIGlmIG5lY2Vzc2FyeVxuICAgICAgaWYgKHJvb3RFbCA9PT0gcGFyZW50RWwgfHwgcHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUubGFzdFB1dE1vZGUgIT09ICdjbG9uZScpIHtcbiAgICAgICAgbXVsdGlEcmFnQ2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lKSB7XG4gICAgICAgICAgY2xvbmUucGFyZW50Tm9kZSAmJiBjbG9uZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBudWxsaW5nR2xvYmFsOiBmdW5jdGlvbiBudWxsaW5nR2xvYmFsKCkge1xuICAgICAgdGhpcy5pc011bHRpRHJhZyA9IGRyYWdTdGFydGVkID0gZmFsc2U7XG4gICAgICBtdWx0aURyYWdDbG9uZXMubGVuZ3RoID0gMDtcbiAgICB9LFxuICAgIGRlc3Ryb3lHbG9iYWw6IGZ1bmN0aW9uIGRlc3Ryb3lHbG9iYWwoKSB7XG4gICAgICB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZygpO1xuICAgICAgb2ZmKGRvY3VtZW50LCAncG9pbnRlcnVwJywgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpO1xuICAgICAgb2ZmKGRvY3VtZW50LCAnbW91c2V1cCcsIHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ3RvdWNoZW5kJywgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpO1xuICAgICAgb2ZmKGRvY3VtZW50LCAna2V5ZG93bicsIHRoaXMuX2NoZWNrS2V5RG93bik7XG4gICAgICBvZmYoZG9jdW1lbnQsICdrZXl1cCcsIHRoaXMuX2NoZWNrS2V5VXApO1xuICAgIH0sXG4gICAgX2Rlc2VsZWN0TXVsdGlEcmFnOiBmdW5jdGlvbiBfZGVzZWxlY3RNdWx0aURyYWcoZXZ0KSB7XG4gICAgICBpZiAodHlwZW9mIGRyYWdTdGFydGVkICE9PSBcInVuZGVmaW5lZFwiICYmIGRyYWdTdGFydGVkKSByZXR1cm47XG5cbiAgICAgIC8vIE9ubHkgZGVzZWxlY3QgaWYgc2VsZWN0aW9uIGlzIGluIHRoaXMgc29ydGFibGVcbiAgICAgIGlmIChtdWx0aURyYWdTb3J0YWJsZSAhPT0gdGhpcy5zb3J0YWJsZSkgcmV0dXJuO1xuXG4gICAgICAvLyBPbmx5IGRlc2VsZWN0IGlmIHRhcmdldCBpcyBub3QgaXRlbSBpbiB0aGlzIHNvcnRhYmxlXG4gICAgICBpZiAoZXZ0ICYmIGNsb3Nlc3QoZXZ0LnRhcmdldCwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSwgdGhpcy5zb3J0YWJsZS5lbCwgZmFsc2UpKSByZXR1cm47XG5cbiAgICAgIC8vIE9ubHkgZGVzZWxlY3QgaWYgbGVmdCBjbGlja1xuICAgICAgaWYgKGV2dCAmJiBldnQuYnV0dG9uICE9PSAwKSByZXR1cm47XG4gICAgICB3aGlsZSAobXVsdGlEcmFnRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBlbCA9IG11bHRpRHJhZ0VsZW1lbnRzWzBdO1xuICAgICAgICB0b2dnbGVDbGFzcyhlbCwgdGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MsIGZhbHNlKTtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuc2hpZnQoKTtcbiAgICAgICAgZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgc29ydGFibGU6IHRoaXMuc29ydGFibGUsXG4gICAgICAgICAgcm9vdEVsOiB0aGlzLnNvcnRhYmxlLmVsLFxuICAgICAgICAgIG5hbWU6ICdkZXNlbGVjdCcsXG4gICAgICAgICAgdGFyZ2V0RWw6IGVsLFxuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF9jaGVja0tleURvd246IGZ1bmN0aW9uIF9jaGVja0tleURvd24oZXZ0KSB7XG4gICAgICBpZiAoZXZ0LmtleSA9PT0gdGhpcy5vcHRpb25zLm11bHRpRHJhZ0tleSkge1xuICAgICAgICB0aGlzLm11bHRpRHJhZ0tleURvd24gPSB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgX2NoZWNrS2V5VXA6IGZ1bmN0aW9uIF9jaGVja0tleVVwKGV2dCkge1xuICAgICAgaWYgKGV2dC5rZXkgPT09IHRoaXMub3B0aW9ucy5tdWx0aURyYWdLZXkpIHtcbiAgICAgICAgdGhpcy5tdWx0aURyYWdLZXlEb3duID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZXR1cm4gX2V4dGVuZHMoTXVsdGlEcmFnLCB7XG4gICAgLy8gU3RhdGljIG1ldGhvZHMgJiBwcm9wZXJ0aWVzXG4gICAgcGx1Z2luTmFtZTogJ211bHRpRHJhZycsXG4gICAgdXRpbHM6IHtcbiAgICAgIC8qKlxyXG4gICAgICAgKiBTZWxlY3RzIHRoZSBwcm92aWRlZCBtdWx0aS1kcmFnIGl0ZW1cclxuICAgICAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgIFRoZSBlbGVtZW50IHRvIGJlIHNlbGVjdGVkXHJcbiAgICAgICAqL1xuICAgICAgc2VsZWN0OiBmdW5jdGlvbiBzZWxlY3QoZWwpIHtcbiAgICAgICAgdmFyIHNvcnRhYmxlID0gZWwucGFyZW50Tm9kZVtleHBhbmRvXTtcbiAgICAgICAgaWYgKCFzb3J0YWJsZSB8fCAhc29ydGFibGUub3B0aW9ucy5tdWx0aURyYWcgfHwgfm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZWwpKSByZXR1cm47XG4gICAgICAgIGlmIChtdWx0aURyYWdTb3J0YWJsZSAmJiBtdWx0aURyYWdTb3J0YWJsZSAhPT0gc29ydGFibGUpIHtcbiAgICAgICAgICBtdWx0aURyYWdTb3J0YWJsZS5tdWx0aURyYWcuX2Rlc2VsZWN0TXVsdGlEcmFnKCk7XG4gICAgICAgICAgbXVsdGlEcmFnU29ydGFibGUgPSBzb3J0YWJsZTtcbiAgICAgICAgfVxuICAgICAgICB0b2dnbGVDbGFzcyhlbCwgc29ydGFibGUub3B0aW9ucy5zZWxlY3RlZENsYXNzLCB0cnVlKTtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMucHVzaChlbCk7XG4gICAgICB9LFxuICAgICAgLyoqXHJcbiAgICAgICAqIERlc2VsZWN0cyB0aGUgcHJvdmlkZWQgbXVsdGktZHJhZyBpdGVtXHJcbiAgICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICBUaGUgZWxlbWVudCB0byBiZSBkZXNlbGVjdGVkXHJcbiAgICAgICAqL1xuICAgICAgZGVzZWxlY3Q6IGZ1bmN0aW9uIGRlc2VsZWN0KGVsKSB7XG4gICAgICAgIHZhciBzb3J0YWJsZSA9IGVsLnBhcmVudE5vZGVbZXhwYW5kb10sXG4gICAgICAgICAgaW5kZXggPSBtdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGVsKTtcbiAgICAgICAgaWYgKCFzb3J0YWJsZSB8fCAhc29ydGFibGUub3B0aW9ucy5tdWx0aURyYWcgfHwgIX5pbmRleCkgcmV0dXJuO1xuICAgICAgICB0b2dnbGVDbGFzcyhlbCwgc29ydGFibGUub3B0aW9ucy5zZWxlY3RlZENsYXNzLCBmYWxzZSk7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBldmVudFByb3BlcnRpZXM6IGZ1bmN0aW9uIGV2ZW50UHJvcGVydGllcygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuICAgICAgdmFyIG9sZEluZGljaWVzID0gW10sXG4gICAgICAgIG5ld0luZGljaWVzID0gW107XG4gICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgIG9sZEluZGljaWVzLnB1c2goe1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnQ6IG11bHRpRHJhZ0VsZW1lbnQsXG4gICAgICAgICAgaW5kZXg6IG11bHRpRHJhZ0VsZW1lbnQuc29ydGFibGVJbmRleFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBtdWx0aURyYWdFbGVtZW50cyB3aWxsIGFscmVhZHkgYmUgc29ydGVkIGlmIGZvbGRpbmdcbiAgICAgICAgdmFyIG5ld0luZGV4O1xuICAgICAgICBpZiAoZm9sZGluZyAmJiBtdWx0aURyYWdFbGVtZW50ICE9PSBkcmFnRWwkMSkge1xuICAgICAgICAgIG5ld0luZGV4ID0gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9sZGluZykge1xuICAgICAgICAgIG5ld0luZGV4ID0gaW5kZXgobXVsdGlEcmFnRWxlbWVudCwgJzpub3QoLicgKyBfdGhpczMub3B0aW9ucy5zZWxlY3RlZENsYXNzICsgJyknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdJbmRleCA9IGluZGV4KG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIG5ld0luZGljaWVzLnB1c2goe1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnQ6IG11bHRpRHJhZ0VsZW1lbnQsXG4gICAgICAgICAgaW5kZXg6IG5ld0luZGV4XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpdGVtczogX3RvQ29uc3VtYWJsZUFycmF5KG11bHRpRHJhZ0VsZW1lbnRzKSxcbiAgICAgICAgY2xvbmVzOiBbXS5jb25jYXQobXVsdGlEcmFnQ2xvbmVzKSxcbiAgICAgICAgb2xkSW5kaWNpZXM6IG9sZEluZGljaWVzLFxuICAgICAgICBuZXdJbmRpY2llczogbmV3SW5kaWNpZXNcbiAgICAgIH07XG4gICAgfSxcbiAgICBvcHRpb25MaXN0ZW5lcnM6IHtcbiAgICAgIG11bHRpRHJhZ0tleTogZnVuY3Rpb24gbXVsdGlEcmFnS2V5KGtleSkge1xuICAgICAgICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGtleSA9PT0gJ2N0cmwnKSB7XG4gICAgICAgICAga2V5ID0gJ0NvbnRyb2wnO1xuICAgICAgICB9IGVsc2UgaWYgKGtleS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAga2V5ID0ga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5mdW5jdGlvbiBpbnNlcnRNdWx0aURyYWdFbGVtZW50cyhjbG9uZXNJbnNlcnRlZCwgcm9vdEVsKSB7XG4gIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQsIGkpIHtcbiAgICB2YXIgdGFyZ2V0ID0gcm9vdEVsLmNoaWxkcmVuW211bHRpRHJhZ0VsZW1lbnQuc29ydGFibGVJbmRleCArIChjbG9uZXNJbnNlcnRlZCA/IE51bWJlcihpKSA6IDApXTtcbiAgICBpZiAodGFyZ2V0KSB7XG4gICAgICByb290RWwuaW5zZXJ0QmVmb3JlKG11bHRpRHJhZ0VsZW1lbnQsIHRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChtdWx0aURyYWdFbGVtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcclxuICogSW5zZXJ0IG11bHRpLWRyYWcgY2xvbmVzXHJcbiAqIEBwYXJhbSAge1tCb29sZWFuXX0gZWxlbWVudHNJbnNlcnRlZCAgV2hldGhlciB0aGUgbXVsdGktZHJhZyBlbGVtZW50cyBhcmUgaW5zZXJ0ZWRcclxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IHJvb3RFbFxyXG4gKi9cbmZ1bmN0aW9uIGluc2VydE11bHRpRHJhZ0Nsb25lcyhlbGVtZW50c0luc2VydGVkLCByb290RWwpIHtcbiAgbXVsdGlEcmFnQ2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lLCBpKSB7XG4gICAgdmFyIHRhcmdldCA9IHJvb3RFbC5jaGlsZHJlbltjbG9uZS5zb3J0YWJsZUluZGV4ICsgKGVsZW1lbnRzSW5zZXJ0ZWQgPyBOdW1iZXIoaSkgOiAwKV07XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShjbG9uZSwgdGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gcmVtb3ZlTXVsdGlEcmFnRWxlbWVudHMoKSB7XG4gIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICBpZiAobXVsdGlEcmFnRWxlbWVudCA9PT0gZHJhZ0VsJDEpIHJldHVybjtcbiAgICBtdWx0aURyYWdFbGVtZW50LnBhcmVudE5vZGUgJiYgbXVsdGlEcmFnRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG11bHRpRHJhZ0VsZW1lbnQpO1xuICB9KTtcbn1cblxuU29ydGFibGUubW91bnQobmV3IEF1dG9TY3JvbGxQbHVnaW4oKSk7XG5Tb3J0YWJsZS5tb3VudChSZW1vdmUsIFJldmVydCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNvcnRhYmxlO1xuZXhwb3J0IHsgTXVsdGlEcmFnUGx1Z2luIGFzIE11bHRpRHJhZywgU29ydGFibGUsIFN3YXBQbHVnaW4gYXMgU3dhcCB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zdGFydC1tZXNzYWdpbmcge1xuICBmb250LWZhbWlseTogc3lzdGVtLCAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBcIktvaGlub29yIERldmFuYWdhcmlcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktdGl0bGUpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxua2JkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggN3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZTllZGVmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyZjMyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2IzZTQyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAycHggMCAjMWUyMTI0O1xufVxuXG4ucmVtaW5kZXJDaGF0SXRlbSAucmVtaW5kZXJCdG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLnJlbWluZGVyQnRuLFxuLmRvbmVCdG4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmVtaW5kZXJCdG46aG92ZXIsXG4uZG9uZUJ0bjpob3ZlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1wcmltYXJ5LWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLXByaW1hcnkpO1xufVxuLnJlbWluZGVyQnRuOmhvdmVyIC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkLFxuLmRvbmVCdG46aG92ZXIgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5cbi54MTBsNnRxay54aDh5ZWozLngxZzQyZmN2OmhvdmVyIC5kb25lQnRuLFxuLngxMGw2dHFrLnhoOHllajMueDFnNDJmY3Y6aG92ZXIgLnJlbWluZGVyQnRuLCAueDEwbDZ0cWsueGg4eWVqMy54MWc0MmZjdjpoYXMoLl9hazcyLl9hazczLl9hazdwKSAuZG9uZUJ0bixcbi54MTBsNnRxay54aDh5ZWozLngxZzQyZmN2OmhhcyguX2FrNzIuX2FrNzMuX2FrN3ApIC5yZW1pbmRlckJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG59XG4ueDEwbDZ0cWsueGg4eWVqMy54MWc0MmZjdjpob3ZlciAuZG9uZUJ0biAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCxcbi54MTBsNnRxay54aDh5ZWozLngxZzQyZmN2OmhvdmVyIC5yZW1pbmRlckJ0biAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCwgLngxMGw2dHFrLnhoOHllajMueDFnNDJmY3Y6aGFzKC5fYWs3Mi5fYWs3My5fYWs3cCkgLmRvbmVCdG4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQsXG4ueDEwbDZ0cWsueGg4eWVqMy54MWc0MmZjdjpoYXMoLl9hazcyLl9hazczLl9hazdwKSAucmVtaW5kZXJCdG4gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xuICBmb250LXNpemU6IDIycHg7XG59XG4ueDEwbDZ0cWsueGg4eWVqMy54MWc0MmZjdjpob3ZlciBkaXZbcm9sZT1ncmlkY2VsbF0uX2FrOGkgPiBzcGFuOm50aC1jaGlsZCgtbisyKSwgLngxMGw2dHFrLnhoOHllajMueDFnNDJmY3Y6aGFzKC5fYWs3Mi5fYWs3My5fYWs3cCkgZGl2W3JvbGU9Z3JpZGNlbGxdLl9hazhpID4gc3BhbjpudGgtY2hpbGQoLW4rMikge1xuICBkaXNwbGF5OiBub25lO1xufVxuLngxMGw2dHFrLnhoOHllajMueDFnNDJmY3Y6aG92ZXIgZGl2W3JvbGU9Z3JpZGNlbGxdLl9hazhpID4gc3BhbjpsYXN0LWNoaWxkIGJ1dHRvbiwgLngxMGw2dHFrLnhoOHllajMueDFnNDJmY3Y6aGFzKC5fYWs3Mi5fYWs3My5fYWs3cCkgZGl2W3JvbGU9Z3JpZGNlbGxdLl9hazhpID4gc3BhbjpsYXN0LWNoaWxkIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuLngxMGw2dHFrLnhoOHllajMueDFnNDJmY3Y6aG92ZXIgZGl2W3JvbGU9Z3JpZGNlbGxdLl9hazhpID4gc3BhbjpsYXN0LWNoaWxkIGJ1dHRvbjpsYXN0LWNoaWxkLCAueDEwbDZ0cWsueGg4eWVqMy54MWc0MmZjdjpoYXMoLl9hazcyLl9hazczLl9hazdwKSBkaXZbcm9sZT1ncmlkY2VsbF0uX2FrOGkgPiBzcGFuOmxhc3QtY2hpbGQgYnV0dG9uOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ueDEwbDZ0cWsueGg4eWVqMy54MWc0MmZjdjpob3ZlciBkaXZbcm9sZT1ncmlkY2VsbF0uX2FrOGkgPiBzcGFuOmxhc3QtY2hpbGQgYnV0dG9uOmZpcnN0LWNoaWxkLCAueDEwbDZ0cWsueGg4eWVqMy54MWc0MmZjdjpoYXMoLl9hazcyLl9hazczLl9hazdwKSBkaXZbcm9sZT1ncmlkY2VsbF0uX2FrOGkgPiBzcGFuOmxhc3QtY2hpbGQgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4ueDEwbDZ0cWsueGg4eWVqMy54MWc0MmZjdjpoYXMoLngxbjJvbnI2KTpob3Zlcjo6YWZ0ZXIsIC54MTBsNnRxay54aDh5ZWozLngxZzQyZmN2OmhhcyguX2FrNzIuX2FrNzMuX2FrN3ApOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVucmVhZC1tYXJrZXItYmFja2dyb3VuZCk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLm1vZGFsIC5tb2RhbC1tZCAueHhiYjFycS54eGJiMXJxIHtcbiAgICB3aWR0aDogNDQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgLm1vZGFsIC5tb2RhbC1tZCAueGM1MzB1MC54YzUzMHUwIHtcbiAgICB3aWR0aDogNDQwcHg7XG4gIH1cbn1cbi5tb2RhbCAubW9kYWwtdGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tb2RhbCAubW9kYWwtdGl0bGUgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5tb2RhbCAubW9kYWwtaGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDM2cHg7XG4gIG1hcmdpbi1yaWdodDogMzZweDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWRlZmF1bHQtaG92ZXIpO1xufVxuLm1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG59XG5cbi5zbm9vemUtb3B0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbi5zbm9vemUtb3B0aW9ucyA+IC5vcHRpb246bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLm9wdGlvbiB7XG4gIHBhZGRpbmc6IDE1cHggMzZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG59XG4ub3B0aW9uIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5vcHRpb246aGFzKGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQpOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVucmVhZC1tYXJrZXItYmFja2dyb3VuZCk7XG59XG4ub3B0aW9uOm5vdCg6aGFzKGlucHV0W3R5cGU9ZGF0ZV0pKTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1kZWZhdWx0LWhvdmVyKTtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wcmltYXJ5LXJnYiksIDAuMTIpO1xufVxuLm9wdGlvbiBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbiAgYWNjZW50LWNvbG9yOiAjMDA5Njg4O1xufVxuLm9wdGlvbiBpbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3IsXG4ub3B0aW9uIGlucHV0W3R5cGU9dGltZV06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ub3B0aW9uIGlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG4ub3B0aW9uIGlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtY2xlYXItYnV0dG9uLFxuLm9wdGlvbiBpbnB1dFt0eXBlPXRpbWVdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuLm9wdGlvbiBpbnB1dFt0eXBlPXRpbWVdOjotd2Via2l0LWNsZWFyLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ub3B0aW9uIGlucHV0W3R5cGU9ZGF0ZV0sXG4ub3B0aW9uIGlucHV0W3R5cGU9dGltZV0ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udDogaW5oZXJpdDtcbn1cbi5vcHRpb24gaW5wdXRbdHlwZT1kYXRlXTpmb2N1cyxcbi5vcHRpb24gaW5wdXRbdHlwZT10aW1lXTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zbm9vemVDb25kaXRpb25TZWxlY3Qge1xuICB3aWR0aDogYXV0bztcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBtZW51bGlzdDtcbiAgLW1vei1hcHBlYXJhbmNlOiBtZW51bGlzdDtcbiAgYXBwZWFyYW5jZTogbWVudWxpc3Q7XG59XG5cbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkLmZpbGwge1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJGSUxMXCIgMSwgXCJ3Z2h0XCIgNDAwLCBcIkdSQURcIiAwLCBcIm9wc3pcIiAyNDtcbn1cblxuLmN1c3RvbU5hdkJhckl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuLmN1c3RvbU5hdkJhckl0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1iYXItaXRlbS1iYWNrZ3JvdW5kLWFjdGl2ZSk7XG59XG4uY3VzdG9tTmF2QmFySXRlbS5hY3RpdmUgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJGSUxMXCIgMSwgXCJ3Z2h0XCIgNDAwLCBcIkdSQURcIiAwLCBcIm9wc3pcIiAyNDtcbn1cblxuW2RhdGEtanMtbmF2YmFyPXRydWVdOmhhcyguX2FqdjcuX2FqdjguX2FqdmIpIC5jdXN0b21OYXZCYXJJdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cbltkYXRhLWpzLW5hdmJhcj10cnVlXTpoYXMoLl9hanY3Ll9hanY4Ll9hanZiKSAuY3VzdG9tTmF2QmFySXRlbS5hY3RpdmUgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJGSUxMXCIgMCwgXCJ3Z2h0XCIgNDAwLCBcIkdSQURcIiAwLCBcIm9wc3pcIiAyNDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBwYWRkaW5nOiAxNXB4IDM2cHg7XG59XG4uZm9ybS1ncm91cCAuZm9ybS1pbnB1dCBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZvcm0tZ3JvdXAgLmZvcm0taW5wdXQgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW5wdXQtYm9yZGVyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBtaW4taGVpZ2h0OiAxLjQ3ZW07XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIGZvbnQtc2l6ZTogMS4wNjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS40N2VtO1xufVxuLmZvcm0tZ3JvdXAgLmZvcm0taW5wdXQgaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pbnB1dC1ib3JkZXItYWN0aXZlKTtcbn1cblxuLmZvbGRlcnMtbGlzdCB7XG4gIHBhZGRpbmc6IDAgMzZweDtcbn1cbi5mb2xkZXJzLWxpc3QgLmZvbGRlci1pdGVtIHtcbiAgcGFkZGluZzogMTVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmZvbGRlcnMtbGlzdCAuZm9sZGVyLWl0ZW0gLmZvbGRlci1uYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGN1cnNvcjogZ3JhYjtcbn1cbi5mb2xkZXJzLWxpc3QgLmZvbGRlci1pdGVtIC5mb2xkZXItbmFtZSAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XG4gIGNvbG9yOiB2YXIoLS1pY29uLWZpeGVkKTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uZm9sZGVycy1saXN0IC5mb2xkZXItaXRlbSAuZm9sZGVyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiA4cHg7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDUwJTtcbiAgcmlnaHQ6IDEyNSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluLW91dDtcbiAgei1pbmRleDogMTAwMDA7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICB0ZXh0LXNoYWRvdzogMCAwIDFweCByZ2JhKHZhcigtLXNoYWRvdy1yZ2IpLCAwLjM2KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcm9wZG93bi1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWFwcCk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEodmFyKC0tc2hhZG93LXJnYiksIDAuMjYpLCAwIDJweCAxMHB4IDAgcmdiYSh2YXIoLS1zaGFkb3ctcmdiKSwgMC4xNik7XG59XG5cbmJ1dHRvbjpob3ZlciAudG9vbHRpcCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi50b29sdGlwIGtiZCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNkpBQUE7RUFHQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFERjs7QUFNRTtFQUNFLGdDQUFBO0FBSEo7O0FBT0E7O0VBRUUsYUFBQTtBQUpGOztBQU9BOztFQUVF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Q0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrREFBQTtFQUNBLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQ0FBQTtFQUNBLGlHQUFBO0FBeEVGOztBQTRFQTtFQUNFLFVBQUE7QUF6RUY7O0FBNEVBO0VBQ0UsZ0JBQUE7QUF6RUZcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gY2hhdEFjdGlvbkJ1dHRvbihcbiAgaWNvbixcbiAgb25DbGljayA9IHt9LFxuICBjbGFzc0xpc3QgPSBcIlwiLFxuICBhY3Rpb25OYW1lID0gXCJcIixcbiAgc2hvcnRjdXRIaW50ID0gXCJcIlxuKSB7XG4gIC8vIENyZWF0ZSBidXR0b24gZWxlbWVudFxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NOYW1lID0gYHhuNnh5MnMgeDFxeDVjdDIgeHNnajZvNiB4cTIybng1IHgxNmRzYzM3ICR7Y2xhc3NMaXN0fWA7XG4gIGJ1dHRvbi5zdHlsZS53aWR0aCA9IFwiMjBweFwiO1xuICBidXR0b24uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICBidXR0b24uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7IC8vIEVuc3VyZSB0aGUgYnV0dG9uIGlzIHBvc2l0aW9uZWRcblxuICAvLyBDcmVhdGUgc3BhbiBlbGVtZW50IGZvciBpY29uXG4gIGNvbnN0IGljb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGljb25TcGFuLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiO1xuICBpY29uU3Bhbi50ZXh0Q29udGVudCA9IGljb247XG5cbiAgLy8gQXBwZW5kIHRoZSBzcGFuIHRvIHRoZSBidXR0b25cbiAgYnV0dG9uLmFwcGVuZENoaWxkKGljb25TcGFuKTtcblxuICAvLyBTZXQgdGhlIGRhdGEtdG9vbHRpcCBhdHRyaWJ1dGUgaWYgYWN0aW9uTmFtZSBvciBzaG9ydGN1dEhpbnQgaXMgcHJvdmlkZWRcbiAgaWYgKGFjdGlvbk5hbWUgfHwgc2hvcnRjdXRIaW50KSB7XG4gICAgY29uc3QgdG9vbHRpcENvbnRlbnQgPSBgJHthY3Rpb25OYW1lfSR7XG4gICAgICBzaG9ydGN1dEhpbnQgPyBgIDxrYmQ+JHtzaG9ydGN1dEhpbnR9PC9rYmQ+YCA6IFwiXCJcbiAgICB9YDtcbiAgICBjb25zdCB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b29sdGlwLmNsYXNzTmFtZSA9IFwidG9vbHRpcFwiO1xuICAgIHRvb2x0aXAuaW5uZXJIVE1MID0gdG9vbHRpcENvbnRlbnQ7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHRvb2x0aXApO1xuICB9XG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xuICBpZiAodHlwZW9mIG9uQ2xpY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBvbkNsaWNrKCk7XG4gICAgICB9LFxuICAgICAgdHJ1ZVxuICAgICk7XG4gIH1cblxuICAvLyBBZGQgbW91c2Vkb3duIGFuZCBtb3VzZXVwIGxpc3RlbmVycyB0byBzdG9wIHByb3BhZ2F0aW9uXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwibW91c2Vkb3duXCIsXG4gICAgKGV2ZW50KSA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKSxcbiAgICB0cnVlXG4gICk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZXZlbnQpID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpLCB0cnVlKTtcblxuICAvLyBSZXR1cm4gdGhlIGJ1dHRvbiBlbGVtZW50XG4gIHJldHVybiBidXR0b247XG59XG4iLCJpbXBvcnQgeyBzaW11bGF0ZUtleVByZXNzIH0gZnJvbSBcIi4uL3V0aWxzL2V2ZW50SGVscGVyc1wiO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gPGxpPiBlbGVtZW50IHdpdGggYSBnaXZlbiB0ZXh0IGFuZCBjbGljayBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRoZSB0ZXh0IGNvbnRlbnQgdG8gYmUgYWRkZWQgdG8gdGhlIDxsaT4gZWxlbWVudC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ2xpY2tDYWxsYmFjayAtIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCB3aGVuIHRoZSA8bGk+IGVsZW1lbnQgaXMgY2xpY2tlZC5cbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gVGhlIGNyZWF0ZWQgPGxpPiBlbGVtZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhdE1lbnVJdGVtKFxuICB0ZXh0LFxuICBzaG9ydGN1dCA9IFwiXCIsXG4gIGNhbGxiYWNrID0ge30sXG4gIGFjdGl2ZSA9IGZhbHNlXG4pIHtcbiAgLy8gQ3JlYXRlIHRoZSA8bGk+IGVsZW1lbnRcbiAgY29uc3QgbGlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaUVsZW1lbnQudGFiSW5kZXggPSAwO1xuICBsaUVsZW1lbnQuY2xhc3NOYW1lID0gXCJfYWotciBfYWotcSBfYWotX1wiO1xuICBsaUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1hbmltYXRlLWRyb3Bkb3duLWl0ZW1cIiwgXCJ0cnVlXCIpO1xuICBsaUVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuXG4gIC8vIEhhbmRsZSBob3ZlciBzdGF0ZVxuICBsaUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgbGlFbGVtZW50LmNsYXNzTmFtZSA9IFwiX2FqLXMgX2FqLXIgX2FqLXEgX2FqLV9cIjtcbiAgfSk7XG4gIGxpRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgIGxpRWxlbWVudC5jbGFzc05hbWUgPSBcIl9hai1yIF9hai1xIF9hai1fXCI7XG4gIH0pO1xuXG4gIC8vIENyZWF0ZSB0aGUgPGRpdj4gZWxlbWVudCBpbnNpZGUgPGxpPlxuICBjb25zdCBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2RWxlbWVudC5jbGFzc05hbWUgPSBcIl9hai16IF9hai10IF9hbHhvXCI7XG4gIGRpdkVsZW1lbnQuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImJ1dHRvblwiKTtcbiAgZGl2RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGRpdkVsZW1lbnQuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gIGRpdkVsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIyNHB4XCI7XG5cbiAgLy8gQ3JlYXRlIGEgc3BhbiBmb3IgdGhlIGNoYXQgbmFtZVxuICBjb25zdCBjaGF0TmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY2hhdE5hbWVTcGFuLnRleHRDb250ZW50ID0gdGV4dDtcbiAgY2hhdE5hbWVTcGFuLnN0eWxlLmZsZXggPSBcIjFcIjtcblxuICAvLyBBZGQgdGhlIGNoYXQgbmFtZSBzcGFuIHRvIHRoZSA8ZGl2PlxuICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGNoYXROYW1lU3Bhbik7XG5cbiAgLy8gQ3JlYXRlIGFuZCBhZGQgdGhlIGNoZWNrIGljb24gaWYgYWN0aXZlXG4gIGlmIChhY3RpdmUpIHtcbiAgICBjb25zdCBjaGVja0ljb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY2hlY2tJY29uU3Bhbi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIjtcbiAgICBjaGVja0ljb25TcGFuLnRleHRDb250ZW50ID0gXCJjaGVja1wiOyAvLyBNYXRlcmlhbCBJY29ucyBjaGVjayBtYXJrXG4gICAgY2hlY2tJY29uU3Bhbi5zdHlsZS5jb2xvciA9IFwidmFyKC0tdW5yZWFkLW1hcmtlci1iYWNrZ3JvdW5kKVwiO1xuICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hlY2tJY29uU3Bhbik7XG4gIH1cblxuICBpZiAoc2hvcnRjdXQpIHtcbiAgICBjb25zdCBzaG9ydGN1dEljb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImtiZFwiKTtcbiAgICBzaG9ydGN1dEljb25TcGFuLnRleHRDb250ZW50ID0gc2hvcnRjdXQ7XG4gICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChzaG9ydGN1dEljb25TcGFuKTtcbiAgfVxuXG4gIC8vIEFwcGVuZCB0aGUgPGRpdj4gdG8gdGhlIDxsaT5cbiAgbGlFbGVtZW50LmFwcGVuZENoaWxkKGRpdkVsZW1lbnQpO1xuXG4gIC8vIEF0dGFjaCB0aGUgY2xpY2sgZXZlbnQgbGlzdGVuZXJcbiAgbGlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2FsbGJhY2soKTtcbiAgICBzaW11bGF0ZUtleVByZXNzKGRvY3VtZW50LmJvZHksIDI3KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGxpRWxlbWVudDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkcmF3ZXIodGl0bGUsIGNvbnRlbnQpIHtcbiAgcmV0dXJuIGBcbiAgICA8c3BhbiBjbGFzcz1cIng1eXIyMWQgeDE3cW9waGUgeDZpa204ciB4MTB3bHQ2MiB4MTBsNnRxayB4MTN2aWZ2eSB4aDh5ZWozXCI+XG4gICAgICA8ZGl2IHRhYmluZGV4PVwiLTFcIiBhcmlhLWxhYmVsPVwiU25vb3plIHRhYiBkcmF3ZXJcIiBpZD1cInNub296ZWRDaGF0c0RyYXdlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwieDc4enVtNSB4ZHQ1eXRmIHg1eXIyMWQgeDE3cW9waGUgeDZpa204ciB4MTB3bHQ2MiB4NjdiYjd3IHgxMGw2dHFrIHgxM3ZpZnZ5IHhoOHllajMgeDE1MHdhNm0geG5wdXhlcyBjb3B5YWJsZS1hcmVhXCI+XG4gICAgICAgICAgPGhlYWRlciBjbGFzcz1cIng5ZjYxOSB4Nzh6dW01IHgxb2t3MGJrIHg2czBkbjQgeDdqNjUzMiB4YzczdTNjIHg5bWZhNHIgeHp3aWZ5bSB4MTUwd2E2bVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIng3OHp1bTUgeDFva3cwYmsgeDZzMGRuNCB4aDh5ZWozIHgxNHdpNHh3IHhleHg4eXUgeDR1YXA1IHgxOGQ5aTY5IHhraGQ2c2RcIj5cbiAgICAgICAgICAgICAgPGRpdiB0aXRsZT1cIlNub296ZWRcIiBjbGFzcz1cIngxMDRraWJiIHgxaXlqcW8yIHg0b3N5eGcgeDZpa204ciB4MTB3bHQ2MiB4MW16dDNwayB4bzQ0MmwxIHgxdWE1dHViIHgxeTMzMmk1IHgxMTducXY0IHgxYXVlYW1yIHgxd20zNWcgeGo4bDlyMlwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIngxcWxxeWw4IHgxcGQzZWd6IHhjZ2s0a2lcIiBhcmlhLWxhYmVsPVwiXCI+XG4gICAgICAgICAgICAgICAgICAke3RpdGxlfVxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIngxb2t3MGJrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIl9hanYyIF9hanYxXCI+PHNwYW4gY2xhc3M9XCJcIj48L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ4NXlyMjFkIHg3OHp1bTUgeGR0NXl0ZiB4NmlrbThyIHgxMHdsdDYyXCIgc3R5bGU9XCJvdmVyZmxvdy15OiBhdXRvO1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIngxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeGV1dWdsaSB4Mmx3bjFqIHgxbmh2Y3cxIHhkdDV5dGYgeDZzMGRuNFwiIHN0eWxlPVwiZmxleC1zaHJpbms6IDA7XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ4aDh5ZWozXCI+XG4gICAgICAgICAgICAgICAgJHtjb250ZW50fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGZvbGRlckJ1dHRvbihcbiAgaWQgPSAwLFxuICBpc0FjdGl2ZSA9IGZhbHNlLFxuICB0ZXh0ID0gXCJcIixcbiAgb25DbGljayA9IHt9LFxuICBvbkRvdWJsZUNsaWNrID0ge30sXG4gIHVucmVhZENvdW50ID0gMFxuKSB7XG4gIC8vIENyZWF0ZSBidXR0b24gZWxlbWVudFxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NOYW1lID0gaXNBY3RpdmVcbiAgICA/IFwieGpiMnAwaSB4MXlwZG9oayB4OTcyZmJmIHhjZnV4NmwgeDFxaGg5ODUgeG0wbTM5biB4enF5eDhpIHhxYTk2eWsgeHZ3b2JhYyB4MWgyeTMxMCB4NnByeHhmIHhvMWw4Ym0geDFidHVwYnAgeGR4bjhyIHhtdXU5bG0geDE2OTBzcTkgeDF5cnN5eW4geDEwYjZhcXEgeDF5ZTNnb3UgeG42NzA4ZFwiXG4gICAgOiBcInhqYjJwMGkgeDF5cGRvaGsgeDk3MmZiZiB4Y2Z1eDZsIHgxcWhoOTg1IHhtMG0zOW4geHpxeXg4aSB4cWE5NnlrIHh2d29iYWMgeDFoMnkzMTAgeDFtdmdqMzkgeDF5a3k2eHcgeDZwcnh4ZiB4bzFsOGJtIHgxYnR1cGJwIHhmNTczdW4geDF5cnN5eW4geDEwYjZhcXEgeDF5ZTNnb3UgeG42NzA4ZFwiO1xuXG4gIGJ1dHRvbi50YWJJbmRleCA9IDA7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBidXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGZvbGRlci0ke2lkfWApOyAvLyBTZXQgSUQgZm9yIHJlZmVyZW5jZVxuXG4gIC8vIENyZWF0ZSBpbm5lciBkaXZcbiAgY29uc3QgaW5uZXJEaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5uZXJEaXYxLmNsYXNzTmFtZSA9XG4gICAgXCJ4MWM0dno0ZiB4czgzbTBrIHhkbDcyajkgeDFnNzdzYzcgeDc4enVtNSB4b3pxaXczIHgxb2EzcW9oIHgxMmZrNHA4IHhldXVnbGkgeDJsd24xaiB4MW5odmN3MSB4MXEwZzNucCB4NnMwZG40IGFsaWduLWl0ZW1zLWNlbnRlclwiOyAvLyBBZGQgYWxpZ24taXRlbXMtY2VudGVyIGNsYXNzXG5cbiAgLy8gQ3JlYXRlIGlubmVyIGRpdiB0ZXh0XG4gIGNvbnN0IGlubmVyRGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlubmVyRGl2Mi50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgaWYgKHVucmVhZENvdW50KSB7XG4gICAgaW5uZXJEaXYyLmlubmVySFRNTCArPSBgPHNwYW5cbiAgICAgIGNsYXNzPVwieDFyZzVvaHUgeDF4YWFkZDcgeDFwZzVna2UgeG81djAxNCB4MXUyOGVvNCB4MmI4dWlkIHgxNmRzYzM3IHgxOGJhNWY5IHgxc2JsMmwgeHk5Y285dyB4NXIxNzRzIHg3aDNzaHYgeDF0c2VsbGogeDY4MmR0byB4MWUwMWtxZCB4cHF0MzdkIHg5YnBhYWkgeGs1MHlzblwiXG4gICAgICBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA4cHg7XCJcbiAgICA+XG4gICAgICAke3VucmVhZENvdW50fVxuICAgIDwvc3Bhbj5gO1xuICB9XG5cbiAgLy8gQXBwZW5kIGlubmVyIGRpdnMgdG8gYnV0dG9uXG4gIGlubmVyRGl2MS5hcHBlbmRDaGlsZChpbm5lckRpdjIpO1xuICBidXR0b24uYXBwZW5kQ2hpbGQoaW5uZXJEaXYxKTtcblxuICBpZiAodHlwZW9mIG9uQ2xpY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgb25DbGljaygpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvbkRvdWJsZUNsaWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsICgpID0+IHtcbiAgICAgIG9uRG91YmxlQ2xpY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgYnV0dG9uIGVsZW1lbnRcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMubW9kYWxDb250ZW50ID0gb3B0aW9ucy5tb2RhbENvbnRlbnQgfHwgXCJcIjtcbiAgICB0aGlzLmZvcm1IYW5kbGVyID0gb3B0aW9ucy5mb3JtSGFuZGxlciB8fCBudWxsO1xuICAgIHRoaXMuc2hvcnRjdXRIYW5kbGVyID0gb3B0aW9ucy5zaG9ydGN1dEhhbmRsZXIgfHwgbnVsbDsgLy8gQ3VzdG9tIHNob3J0Y3V0IGhhbmRsZXJcblxuICAgIHRoaXMubW9kYWxFbGVtZW50ID0gdGhpcy5jcmVhdGVNb2RhbEVsZW1lbnQoKTtcblxuICAgIHRoaXMuaGFuZGxlRXNjS2V5ID0gdGhpcy5oYW5kbGVFc2NLZXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU91dHNpZGVDbGljayA9IHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVLZXlEb3duID0gdGhpcy5oYW5kbGVLZXlEb3duLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIGNyZWF0ZU1vZGFsRWxlbWVudCgpIHtcbiAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWxEaXYuY2xhc3NMaXN0LmFkZChcbiAgICAgIFwieDEwbDZ0cWtcIixcbiAgICAgIFwieDEzdmlmdnlcIixcbiAgICAgIFwieGRzNjg3Y1wiLFxuICAgICAgXCJ4MWV5Mm0xY1wiLFxuICAgICAgXCJ4MTdxb3BoZVwiXG4gICAgKTtcbiAgICBtb2RhbERpdi5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xuICAgIG1vZGFsRGl2LmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgdGFiaW5kZXg9XCItMVwiIGNsYXNzPVwibW9kYWxcIj5cbiAgICAgICAgPGRpdiBkYXRhLWFuaW1hdGUtbW9kYWwtYmFja2Ryb3A9XCJ0cnVlXCJcbiAgICAgICAgICBjbGFzcz1cInhpeHhpaTQgeDEzdmlmdnkgeDE3cW9waGUgeDlmNjE5IHhoOHllajMgeDV5cjIxZCB4MWJwdDlwbSB4dzJjc3hjIHgxb2RqdzBmIHhhMDNzem0geG5wdXhlcyBjb3B5YWJsZS1hcmVhXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIng5ZjYxOSB4Nzh6dW01IHhkdDV5dGYgeDZzMGRuNCB4bDU2ajdrIHhoOHllajMgeHBiNDhnNyB4MWpuMGhqbSB4MXVzMTl0cVwiXG4gICAgICAgICAgICByb2xlPVwiZGlhbG9nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwieDlmNjE5IHg3OHp1bTUgeDFjNHZ6NGYgeDJsYWgwcyB4ZGw3Mmo5IHhkdDV5dGYgeGt3ZmhxeSB4MTdlNmZ6ZyB4MTVkaDI1NiB4MXQ3dTN4eSB4MXNodzR1ciB4NmlrbThyIHgxMHdsdDYyIHgxNGF0a2ZjIHhleHg4eXUgeDR1YXA1IHgxOGQ5aTY5IHhraGQ2c2QgeDFpZWs5N2FcIlxuICAgICAgICAgICAgICBkYXRhLWFuaW1hdGUtbW9kYWwtcG9wdXA9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ4MW4yb25yNiB4MWl5anFvMiB4czgzbTBrIHgxbDdrbGhnIHgxbXp0M3BrIHhlYWY0aThcIiBkYXRhLWFuaW1hdGUtbW9kYWwtYm9keT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMubW9kYWxDb250ZW50fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgcmV0dXJuIG1vZGFsRGl2O1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBmb3JtRWxlbWVudCA9IHRoaXMubW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGlmIChmb3JtRWxlbWVudCAmJiB0aGlzLmZvcm1IYW5kbGVyKSB7XG4gICAgICBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBGaW5kIHRoZSBzdWJtaXQgYnV0dG9uIHRoYXQgd2FzIGNsaWNrZWRcbiAgICAgICAgY29uc3Qgc3VibWl0dGVyID1cbiAgICAgICAgICBlLnN1Ym1pdHRlciB8fCBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBGb3JtRGF0YSBmcm9tIHRoZSBmb3JtXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1FbGVtZW50KTtcblxuICAgICAgICAvLyBNYW51YWxseSBhZGQgdGhlIGFjdGlvbiBmcm9tIHRoZSBjbGlja2VkIGJ1dHRvbiwgaWYgYXZhaWxhYmxlXG4gICAgICAgIGlmIChzdWJtaXR0ZXIgJiYgc3VibWl0dGVyLmdldEF0dHJpYnV0ZShcImRhdGEtYWN0aW9uXCIpKSB7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiZm9ybUFjdGlvblwiLCBzdWJtaXR0ZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3Rpb25cIikpO1xuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm9iamVjdElkXCIsIHN1Ym1pdHRlci5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9iamVjdC1pZFwiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdWNjZXNzID0gYXdhaXQgdGhpcy5mb3JtSGFuZGxlcihmb3JtRGF0YSk7XG4gICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlRXNjS2V5KTtcbiAgICBjb25zdCBiYWNrZHJvcCA9IHRoaXMubW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIltkYXRhLWFuaW1hdGUtbW9kYWwtYmFja2Ryb3BdXCJcbiAgICApO1xuXG4gICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2spO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUVzY0tleShlKSB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVPdXRzaWRlQ2xpY2soZSkge1xuICAgIGNvbnN0IHBvcHVwID0gdGhpcy5tb2RhbEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWFuaW1hdGUtbW9kYWwtcG9wdXBdXCIpO1xuICAgIGlmICghcG9wdXAuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICB9XG4gIH1cblxuICBvcGVuTW9kYWwoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsRWxlbWVudCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlEb3duLCB0cnVlKTsgLy8gQ2FwdHVyZSBrZXlkb3duIGV2ZW50c1xuICB9XG5cbiAgY2xvc2VNb2RhbCgpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubW9kYWxFbGVtZW50KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZUtleURvd24sIHRydWUpOyAvLyBSZW1vdmUga2V5ZG93biBldmVudCBsaXN0ZW5lclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlRXNjS2V5KTtcbiAgICBjb25zdCBiYWNrZHJvcCA9IHRoaXMubW9kYWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIltkYXRhLWFuaW1hdGUtbW9kYWwtYmFja2Ryb3BdXCJcbiAgICApO1xuICAgIGlmIChiYWNrZHJvcCkge1xuICAgICAgYmFja2Ryb3AucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zaG9ydGN1dEhhbmRsZXIpIHtcbiAgICAgIHRoaXMuc2hvcnRjdXRIYW5kbGVyKGUpOyAvLyBDYWxsIGN1c3RvbSBzaG9ydGN1dCBoYW5kbGVyXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBhY3Rpb24gZm9yIGFsbCBvdGhlciBrZXlzXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIG5hdkJhckl0ZW0oZHJhd2VySWQsIHRpdGxlLCBpY29uLCBvbkNsaWNrID0ge30pIHtcbiAgLy8gQ3JlYXRlIHRoZSBtYWluIGRpdiBmb3IgdGhlIG5hdiBpdGVtXG4gIGNvbnN0IG5hdkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdkRpdi5jbGFzc05hbWUgPSBcIl9hanY3IF9hanZiIGN1c3RvbU5hdkJhckl0ZW1cIjtcbiAgbmF2RGl2LmRhdGFzZXQuZHJhd2VySWQgPSBkcmF3ZXJJZDtcblxuICAvLyBDcmVhdGUgdGhlIGJ1dHRvbiBkaXZcbiAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9uRGl2LnNldEF0dHJpYnV0ZShcImFyaWEtZGlzYWJsZWRcIiwgXCJmYWxzZVwiKTtcbiAgYnV0dG9uRGl2LnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJidXR0b25cIik7XG4gIGJ1dHRvbkRpdi5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gIGJ1dHRvbkRpdi5jbGFzc05hbWUgPSBcIl9hanY2IHgxeTFhdzFrIHgxc3h5aDAgeHdpYjh5MiB4dXJiMGhhXCI7XG4gIGJ1dHRvbkRpdi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIHRpdGxlKTtcbiAgYnV0dG9uRGl2LnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIHRpdGxlKTtcbiAgYnV0dG9uRGl2LnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJmYWxzZVwiKTtcblxuICAvLyBDcmVhdGUgdGhlIGljb24gc3BhblxuICBjb25zdCBpY29uU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBpY29uU3Bhbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWljb25cIiwgaWNvbik7XG5cbiAgLy8gVXNlIE1hdGVyaWFsIEljb25zIGZvbnQgZm9yIHRoZSBpY29uXG4gIGNvbnN0IGljb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGljb25FbGVtZW50LmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiO1xuICBpY29uRWxlbWVudC50ZXh0Q29udGVudCA9IGljb247XG5cbiAgaWNvblNwYW4uYXBwZW5kQ2hpbGQoaWNvbkVsZW1lbnQpO1xuXG4gIC8vIEFwcGVuZCB0aGUgaWNvbiBzcGFuIHRvIHRoZSBidXR0b24gZGl2XG4gIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChpY29uU3Bhbik7XG5cbiAgLy8gQ3JlYXRlIGlubmVyIGRpdiBhbmQgYXBwZW5kIHRvIGJ1dHRvbiBkaXZcbiAgY29uc3QgaW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbm5lckRpdi5jbGFzc05hbWUgPSBcIngxbjJvbnI2XCI7XG4gIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChpbm5lckRpdik7XG5cbiAgLy8gQXBwZW5kIGJ1dHRvbiBkaXYgdG8gbWFpbiBuYXYgaXRlbSBkaXZcbiAgbmF2RGl2LmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XG5cbiAgaWYgKHR5cGVvZiBvbkNsaWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBidXR0b25EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxldCBwcmV2aW91c2x5QWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXN0b21OYXZCYXJJdGVtLmFjdGl2ZVwiKTtcbiAgICAgIGlmIChwcmV2aW91c2x5QWN0aXZlKSB7XG4gICAgICAgIHByZXZpb3VzbHlBY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cblxuICAgICAgbmF2RGl2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICAgIG9uQ2xpY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBuYXZEaXY7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcmVtaW5kZXJDaGF0SXRlbShjaGF0SWQsIHVzZXJOYW1lLCB0aW1lc3RhbXApIHtcbiAgcmV0dXJuIGBcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cIngxMGw2dHFrIHhoOHllajMgeDFnNDJmY3YgdW5sb2FkZWRDaGF0IHJlbWluZGVyQ2hhdEl0ZW1cIlxuICAgICAgcm9sZT1cImxpc3RpdGVtXCJcbiAgICAgIHN0eWxlPVwiXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBcIlxuICAgICAgZGF0YS1jaGF0LWlkPSR7Y2hhdElkfVxuICAgICAgZGF0YS1jaGF0LXVzZXJuYW1lPVwiJHt1c2VyTmFtZX1cIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3M9XCJ4MW4yb25yNlwiPlxuICAgICAgICA8ZGl2IHRhYmluZGV4PVwiLTFcIiBjbGFzcz1cIlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJfYWs3MiBfYWs3M1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIl9hazhuXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJfYWs4aFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwieDFuMm9ucjYgeDE0eWpsOWggeHVkaGo5MSB4MThueWt0OSB4d3cyZ3h1IHByb2ZpbGVQaWNcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogNDlweDsgd2lkdGg6IDQ5cHhcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieDEwbDZ0cWsgeDEzdmlmdnkgeDE3cW9waGUgeDc4enVtNSB4NnMwZG40IHhsNTZqN2sgeGg4eWVqMyB4NXlyMjFkIHg3MDVxaW4geHNwOGZzelwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGRhdGEtaWNvbj1cImRlZmF1bHQtdXNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDIxMiAyMTJcIiBoZWlnaHQ9XCIyMTJcIiB3aWR0aD1cIjIxMlwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCIgY2xhc3M9XCJ4aDh5ZWozIHg1eXIyMWRcIiB2ZXJzaW9uPVwiMS4xXCIgeD1cIjBweFwiIHk9XCIwcHhcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgMjEyIDIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGl0bGU+ZGVmYXVsdC11c2VyPC90aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiNERkU1RTdcIiBjbGFzcz1cImJhY2tncm91bmRcIiBkPVwiTTEwNi4yNTEsMC41QzE2NC42NTMsMC41LDIxMiw0Ny44NDYsMjEyLDEwNi4yNVMxNjQuNjUzLDIxMiwxMDYuMjUsMjEyQzQ3Ljg0NiwyMTIsMC41LDE2NC42NTQsMC41LDEwNi4yNSBTNDcuODQ2LDAuNSwxMDYuMjUxLDAuNXpcIj48L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjRkZGRkZGXCIgY2xhc3M9XCJwcmltYXJ5XCIgZD1cIk0xNzMuNTYxLDE3MS42MTVjLTAuNjAxLTAuOTE1LTEuMjg3LTEuOTA3LTIuMDY1LTIuOTU1Yy0wLjc3Ny0xLjA0OS0xLjY0NS0yLjE1NS0yLjYwOC0zLjI5OSBjLTAuOTY0LTEuMTQ0LTIuMDI0LTIuMzI2LTMuMTg0LTMuNTI3Yy0xLjc0MS0xLjgwMi0zLjcxLTMuNjQ2LTUuOTI0LTUuNDdjLTIuOTUyLTIuNDMxLTYuMzM5LTQuODI0LTEwLjIwNC03LjAyNiBjLTEuODc3LTEuMDctMy44NzMtMi4wOTItNS45OC0zLjA1NWMtMC4wNjItMC4wMjgtMC4xMTgtMC4wNTktMC4xOC0wLjA4N2MtOS43OTItNC40NC0yMi4xMDYtNy41MjktMzcuNDE2LTcuNTI5IHMtMjcuNjI0LDMuMDg5LTM3LjQxNiw3LjUyOWMtMC4zMzgsMC4xNTMtMC42NTMsMC4zMTgtMC45ODUsMC40NzRjLTEuNDMxLDAuNjc0LTIuODA2LDEuMzc2LTQuMTI4LDIuMTAxIGMtMC43MTYsMC4zOTMtMS40MTcsMC43OTItMi4xMDEsMS4xOTdjLTMuNDIxLDIuMDI3LTYuNDc1LDQuMTkxLTkuMTUsNi4zOTVjLTIuMjEzLDEuODIzLTQuMTgyLDMuNjY4LTUuOTI0LDUuNDcgYy0xLjE2MSwxLjIwMS0yLjIyLDIuMzg0LTMuMTg0LDMuNTI3Yy0wLjk2NCwxLjE0NC0xLjgzMiwyLjI1LTIuNjA5LDMuMjk5Yy0wLjc3OCwxLjA0OS0xLjQ2NCwyLjA0LTIuMDY1LDIuOTU1IGMtMC41NTcsMC44NDgtMS4wMzMsMS42MjItMS40NDcsMi4zMjRjLTAuMDMzLDAuMDU2LTAuMDczLDAuMTE5LTAuMTA0LDAuMTc0Yy0wLjQzNSwwLjc0NC0wLjc5LDEuMzkyLTEuMDcsMS45MjYgYy0wLjU1OSwxLjA2OC0wLjgxOCwxLjY3OC0wLjgxOCwxLjY3OHYwLjM5OGMxOC4yODUsMTcuOTI3LDQzLjMyMiwyOC45ODUsNzAuOTQ1LDI4Ljk4NWMyNy42NzgsMCw1Mi43NjEtMTEuMTAzLDcxLjA1NS0yOS4wOTUgdi0wLjI4OWMwLDAtMC42MTktMS40NS0xLjk5Mi0zLjc3OEMxNzQuNTk0LDE3My4yMzgsMTc0LjExNywxNzIuNDYzLDE3My41NjEsMTcxLjYxNXpcIj48L3BhdGg+PHBhdGggZmlsbD1cIiNGRkZGRkZcIiBjbGFzcz1cInByaW1hcnlcIiBkPVwiTTEwNi4wMDIsMTI1LjVjMi42NDUsMCw1LjIxMi0wLjI1Myw3LjY4LTAuNzM3YzEuMjM0LTAuMjQyLDIuNDQzLTAuNTQyLDMuNjI0LTAuODk2IGMxLjc3Mi0wLjUzMiwzLjQ4Mi0xLjE4OCw1LjEyLTEuOTU4YzIuMTg0LTEuMDI3LDQuMjQyLTIuMjU4LDYuMTUtMy42N2MyLjg2My0yLjExOSw1LjM5LTQuNjQ2LDcuNTA5LTcuNTA5IGMwLjcwNi0wLjk1NCwxLjM2Ny0xLjk0NSwxLjk4LTIuOTcxYzAuOTE5LTEuNTM5LDEuNzI5LTMuMTU1LDIuNDIyLTQuODRjMC40NjItMS4xMjMsMC44NzItMi4yNzcsMS4yMjYtMy40NTggYzAuMTc3LTAuNTkxLDAuMzQxLTEuMTg4LDAuNDktMS43OTJjMC4yOTktMS4yMDgsMC41NDItMi40NDMsMC43MjUtMy43MDFjMC4yNzUtMS44ODcsMC40MTctMy44MjcsMC40MTctNS44MTEgYzAtMS45ODQtMC4xNDItMy45MjUtMC40MTctNS44MTFjLTAuMTg0LTEuMjU4LTAuNDI2LTIuNDkzLTAuNzI1LTMuNzAxYy0wLjE1LTAuNjA0LTAuMzEzLTEuMjAyLTAuNDktMS43OTMgYy0wLjM1NC0xLjE4MS0wLjc2NC0yLjMzNS0xLjIyNi0zLjQ1OGMtMC42OTMtMS42ODUtMS41MDQtMy4zMDEtMi40MjItNC44NGMtMC42MTMtMS4wMjYtMS4yNzQtMi4wMTctMS45OC0yLjk3MSBjLTIuMTE5LTIuODYzLTQuNjQ2LTUuMzktNy41MDktNy41MDljLTEuOTA5LTEuNDEyLTMuOTY2LTIuNjQzLTYuMTUtMy42N2MtMS42MzgtMC43Ny0zLjM0OC0xLjQyNi01LjEyLTEuOTU4IGMtMS4xODEtMC4zNTUtMi4zOS0wLjY1NS0zLjYyNC0wLjg5NmMtMi40NjgtMC40ODQtNS4wMzUtMC43MzctNy42OC0wLjczN2MtMjEuMTYyLDAtMzcuMzQ1LDE2LjE4My0zNy4zNDUsMzcuMzQ1IEM2OC42NTcsMTA5LjMxNyw4NC44NCwxMjUuNSwxMDYuMDAyLDEyNS41elwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIl9hazhsXCI+XG4gICAgICAgICAgICAgIDxkaXYgcm9sZT1cImdyaWRjZWxsXCIgYXJpYS1jb2xpbmRleD1cIjJcIiBjbGFzcz1cIl9hazhvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIl9hazhxXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiX2FvdTggX2FqX2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBkaXI9XCJhdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIngxaXlqcW8yIHg2aWttOHIgeDEwd2x0NjIgeDFuMm9ucjYgeGx5aXB5diB4dXh3MWZ0IHgxcmc1b2h1IF9hbzNlIHVzZXJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIm1pbi1oZWlnaHQ6IDBweFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAke3VzZXJOYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiX2FrOGlcIj5cbiAgICAgICAgICAgICAgICAgICR7dGltZXN0YW1wfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIl9hazhqXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIl9hazhrXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIng3OHp1bTUgeDFjeTh6aGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBkaXI9XCJsdHJcIlxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwieDFpeWpxbzIgeDZpa204ciB4MTB3bHQ2MiB4MW4yb25yNiB4bHlpcHl2IHh1eHcxZnQgeDFyZzVvaHUgX2FvM2UgbGFzdE1zZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtaW4taGVpZ2h0OiAwcHhcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJncmlkY2VsbFwiIGFyaWEtY29saW5kZXg9XCIxXCIgY2xhc3M9XCJfYWs4aVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIlwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInhuNnh5MnMgeDFxeDVjdDIgeHNnajZvNiB4cTIybng1IHgxNmRzYzM3IHJlbWluZGVyQnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiAyMHB4OyBvcGFjaXR5OiAxOyBwb3NpdGlvbjogcmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIGZpbGxcIj5zY2hlZHVsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVtaW5kIE1lXG4gICAgICAgICAgICAgICAgICAgICAgICA8a2JkPkg8L2tiZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG59XG4iLCJpbXBvcnQgeyBjaGF0QWN0aW9uQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2hhdEFjdGlvbkJ1dHRvblwiO1xuLy8gaW1wb3J0IHsgbmF2QmFySXRlbSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL25hdkJhckl0ZW1cIjtcbi8vIGltcG9ydCB7IGdldEVsZW1lbnRCeVhwYXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IG1hcmtDaGF0RG9uZSB9IGZyb20gXCIuLi8uLi93aGF0c2FwcFN0b3JlL21hcmtDaGF0RG9uZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZURvbmUoKSB7XG4gIC8vIFdhaXQgdW50aWwgV2hhdHNBcHAgYnVpbGRzIHVwIHRoZSBpbnRlcmZhY2VcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIndoYXRzYXBwSW5pdGlhbGl6ZWRcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGF0T25Ib3ZlclwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgY2hhdCwgY2hhdEVsZW1lbnQgfSA9IGV2ZW50LmRldGFpbDtcblxuICAgICAgLy8gU2V0dXAgYSBNdXRhdGlvbk9ic2VydmVyIHRoYXQgYWRkcyBDaGF0IGFjdGlvbiBidXR0b25zIHdoaWxlIGhvdmVyaW5nLlxuICAgICAgY29uc3QgY2hhdEJ1dHRvbnMgPSBjaGF0RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIltyb2xlPSdncmlkY2VsbCddLl9hazhpID4gc3BhbjpudGgtY2hpbGQoMylcIlxuICAgICAgKTtcbiAgICAgIGlmIChjaGF0QnV0dG9ucykge1xuICAgICAgICBjb25zdCBleGlzdGluZ0RvbmVCdG4gPSBjaGF0QnV0dG9ucy5xdWVyeVNlbGVjdG9yKFwiLmRvbmVCdG5cIik7XG4gICAgICAgIGNvbnN0IG5ld0RvbmVCdG4gPSBjaGF0QWN0aW9uQnV0dG9uKFxuICAgICAgICAgIFwiY2hlY2tcIixcbiAgICAgICAgICAoKSA9PiBtYXJrQ2hhdERvbmUoY2hhdC5jaGF0SWQpLFxuICAgICAgICAgIFwiZG9uZUJ0blwiLFxuICAgICAgICAgIFwiTWFyayBhcyBEb25lXCIsXG4gICAgICAgICAgXCJFXCJcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdEb25lQnRuKSB7XG4gICAgICAgICAgY2hhdEJ1dHRvbnMucmVwbGFjZUNoaWxkKG5ld0RvbmVCdG4sIGV4aXN0aW5nRG9uZUJ0bik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hhdEJ1dHRvbnMuaW5zZXJ0Q2hpbGRBdEluZGV4KG5ld0RvbmVCdG4sIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyAvLyBBZGQgdGhlIFNub296ZWQgaWNvbiBhdCBXaGF0c0FwcCBzaWRlbmF2IG5hdmlnYXRpb24uXG4gICAgLy8gY29uc3Qgc2lkZW5hdiA9IGdldEVsZW1lbnRCeVhwYXRoKFxuICAgIC8vICAgYC8vKltAaWQ9XCJhcHBcIl0vZGl2L2RpdlsyXS9oZWFkZXIvZGl2L2Rpdi9kaXYvZGl2L3NwYW4vZGl2L2RpdlsxXWBcbiAgICAvLyApO1xuXG4gICAgLy8gc2lkZW5hdi5pbnNlcnRDaGlsZEF0SW5kZXgoXG4gICAgLy8gICBuYXZCYXJJdGVtKFwiYXJjaGl2ZWRDaGF0c1wiLCBcIkFyY2hpdmVkXCIsIFwiaW52ZW50b3J5XzJcIiwgKCkgPT5cbiAgICAvLyAgICAgb3BlbkRyYXdlckxlZnQoKVxuICAgIC8vICAgKSxcbiAgICAvLyAgIDJcbiAgICAvLyApO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IHJlbW92ZUZvbGRlckZyb21VSSwgdXBkYXRlVUlXaXRoVXBkYXRlZEZvbGRlck5hbWUgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHtcbiAgY3VycmVudEFjdGl2ZUZvbGRlcixcbiAgZm9sZGVycyxcbiAgc2F2ZUZvbGRlcnNUb1N0b3JhZ2UsXG4gIHNldEZvbGRlcnMsXG4gIHNldEN1cnJlbnRBY3RpdmVGb2xkZXIsXG59IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IGZpbHRlckNoYXRzIH0gZnJvbSBcIi4uLy4uL3doYXRzYXBwU3RvcmUvZmlsdGVyQ2hhdHNcIjtcbmltcG9ydCB7IGluaXRpYWxpemVVSSB9IGZyb20gXCIuL3VpXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDb250YWN0c0luRm9sZGVyKGZvbGRlcklkLCBjb250YWN0SWQsIGFyY2hpdmVkKSB7XG4gIGNvbnN0IHRhcmdldEZvbGRlciA9IGZvbGRlcnMuZmluZCgoZikgPT4gZi5pZCA9PT0gZm9sZGVySWQpO1xuICBpZiAoIXRhcmdldEZvbGRlcikge1xuICAgIGNvbnNvbGUubG9nKGBGb2xkZXIgd2l0aCBJRCAke2ZvbGRlcklkfSBub3QgZm91bmQuYCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGNvbnRhY3QgZnJvbSBhbGwgb3RoZXIgZm9sZGVyc1xuICBmb2xkZXJzLmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgIGlmIChmb2xkZXIuaWQgIT09IGZvbGRlcklkKSB7XG4gICAgICBjb25zdCBjb250YWN0SW5kZXggPSBmb2xkZXIuY29udGFjdHMuZmluZEluZGV4KChjKSA9PiBjLmlkID09PSBjb250YWN0SWQpO1xuICAgICAgaWYgKGNvbnRhY3RJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgZm9sZGVyLmNvbnRhY3RzLnNwbGljZShjb250YWN0SW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gQWRkIGNvbnRhY3QgdG8gdGFyZ2V0IGZvbGRlclxuICBjb25zdCBleGlzdGluZ0NvbnRhY3QgPSB0YXJnZXRGb2xkZXIuY29udGFjdHMuZmluZCgoYykgPT4gYy5pZCA9PT0gY29udGFjdElkKTtcbiAgaWYgKCFleGlzdGluZ0NvbnRhY3QpIHtcbiAgICB0YXJnZXRGb2xkZXIuY29udGFjdHMucHVzaCh7XG4gICAgICBpZDogY29udGFjdElkLFxuICAgICAgdW5yZWFkQ291bnQ6IDAsXG4gICAgICBhcmNoaXZlZDogYXJjaGl2ZWQsXG4gICAgfSk7XG4gIH1cblxuICBzYXZlRm9sZGVyc1RvU3RvcmFnZShmb2xkZXJzKTtcblxuICAvLyBVcGRhdGUgVUlcbiAgZm9sZGVycy5mb3JFYWNoKChmb2xkZXIpID0+IHtcbiAgICBpZiAoZm9sZGVyLmlkID09PSBjdXJyZW50QWN0aXZlRm9sZGVyKSB7XG4gICAgICBjb25zdCB1cGRhdGVkQ2hhdHMgPSBmb2xkZXIuY29udGFjdHMubWFwKChjKSA9PiBjLmlkKTtcbiAgICAgIGZpbHRlckNoYXRzKHVwZGF0ZWRDaGF0cyk7XG4gICAgfVxuXG4gICAgY29uc3QgdG90YWxDaGF0c0NvdW50ID0gZm9sZGVyLmNvbnRhY3RzLnJlZHVjZShcbiAgICAgIChzdW0sIGNvbnRhY3QpID0+IHN1bSArICghY29udGFjdC5hcmNoaXZlZCA/IDEgOiAwKSxcbiAgICAgIDBcbiAgICApO1xuICAgIHVwZGF0ZVVJV2l0aFVwZGF0ZWRGb2xkZXJOYW1lKGZvbGRlci5pZCwgZm9sZGVyLm5hbWUsIHRvdGFsQ2hhdHNDb3VudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoRm9sZGVyKGZvbGRlcklkKSB7XG4gIGNvbnN0IGZvbGRlciA9IGZvbGRlcnMuZmluZCgoZikgPT4gZi5pZCA9PT0gZm9sZGVySWQpO1xuICBjb25zdCBjaGF0cyA9IGZvbGRlci5jb250YWN0cy5tYXAoKGMpID0+IGMuaWQpO1xuXG4gIC8vIERlYWN0aXZhdGUgcHJldmlvdXMgZm9sZGVyXG4gIGlmIChjdXJyZW50QWN0aXZlRm9sZGVyKSB7XG4gICAgY29uc3QgcHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIGBmb2xkZXItJHtjdXJyZW50QWN0aXZlRm9sZGVyfWBcbiAgICApO1xuICAgIGlmIChwcmV2aW91c0J1dHRvbikge1xuICAgICAgcHJldmlvdXNCdXR0b24uY2xhc3NOYW1lID1cbiAgICAgICAgXCJ4amIycDBpIHgxeXBkb2hrIHg5NzJmYmYgeGNmdXg2bCB4MXFoaDk4NSB4bTBtMzluIHh6cXl4OGkgeHFhOTZ5ayB4dndvYmFjIHgxaDJ5MzEwIHgxbXZnajM5IHgxeWt5Nnh3IHg2cHJ4eGYgeG8xbDhibSB4MWJ0dXBicCB4ZjU3M3VuIHgxeXJzeXluIHgxMGI2YXFxIHgxeWUzZ291IHhuNjcwOGRcIjtcbiAgICAgIHByZXZpb3VzQnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtcHJlc3NlZFwiLCBcImZhbHNlXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFjdGl2YXRlIHNlbGVjdGVkIGZvbGRlclxuICBjb25zdCBhY3RpdmVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZm9sZGVyLSR7Zm9sZGVySWR9YCk7XG4gIGlmIChhY3RpdmVCdXR0b24pIHtcbiAgICBhY3RpdmVCdXR0b24uY2xhc3NOYW1lID1cbiAgICAgIFwieGpiMnAwaSB4MXlwZG9oayB4OTcyZmJmIHhjZnV4NmwgeDFxaGg5ODUgeG0wbTM5biB4enF5eDhpIHhxYTk2eWsgeHZ3b2JhYyB4MWgyeTMxMCB4NnByeHhmIHhvMWw4Ym0geDFidHVwYnAgeGR4bjhyIHhtdXU5bG0geDE2OTBzcTkgeDF5cnN5eW4geDEwYjZhcXEgeDF5ZTNnb3UgeG42NzA4ZFwiO1xuICAgIGFjdGl2ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLXByZXNzZWRcIiwgXCJ0cnVlXCIpO1xuICB9XG5cbiAgc2V0Q3VycmVudEFjdGl2ZUZvbGRlcihmb2xkZXJJZCk7XG4gIGZpbHRlckNoYXRzKGNoYXRzKTtcbn1cblxuLy8gQWRkIHRoaXMgbmV3IGZ1bmN0aW9uIHRvIHVwZGF0ZSB1bnJlYWQgY291bnRcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVVbnJlYWRDb3VudChjaGF0SWQsIHVucmVhZENvdW50KSB7XG4gIGZvbGRlcnMuZm9yRWFjaCgoZm9sZGVyKSA9PiB7XG4gICAgY29uc3QgY29udGFjdCA9IGZvbGRlci5jb250YWN0cy5maW5kKChjKSA9PiBjLmlkID09PSBjaGF0SWQpO1xuICAgIGlmIChjb250YWN0KSB7XG4gICAgICBjb250YWN0LnVucmVhZENvdW50ID0gdW5yZWFkQ291bnQ7XG4gICAgfVxuICB9KTtcbiAgc2F2ZUZvbGRlcnNUb1N0b3JhZ2UoZm9sZGVycyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGb2xkZXIoZm9sZGVySWQpIHtcbiAgaWYgKGZvbGRlcnMuZmluZCgoZikgPT4gZi5pZCA9PT0gZm9sZGVySWQpLmluYm94KSByZXR1cm47XG4gIGNvbnN0IGluZGV4ID0gZm9sZGVycy5maW5kSW5kZXgoKGYpID0+IGYuaWQgPT09IGZvbGRlcklkKTtcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIGNvbnN0IGluYm94Rm9sZGVyID0gZm9sZGVycy5maW5kKChmKSA9PiBmLmluYm94ID09PSB0cnVlKTtcblxuICAgIGlmIChpbmJveEZvbGRlcikge1xuICAgICAgLy8gQWRkIGNvbnRhY3RzIG9mIHRoZSBmb2xkZXIgdG8gYmUgcmVtb3ZlZCB0byB0aGUgaW5ib3ggZm9sZGVyXG4gICAgICBpbmJveEZvbGRlci5jb250YWN0cy5wdXNoKC4uLmZvbGRlcnNbaW5kZXhdLmNvbnRhY3RzKTtcbiAgICB9XG5cbiAgICBmb2xkZXJzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICBzYXZlRm9sZGVyc1RvU3RvcmFnZShmb2xkZXJzKTtcbiAgICByZW1vdmVGb2xkZXJGcm9tVUkoZm9sZGVySWQpO1xuXG4gICAgY29uc3QgdG90YWxDaGF0c0NvdW50ID0gaW5ib3hGb2xkZXIuY29udGFjdHMucmVkdWNlKFxuICAgICAgKHN1bSwgY29udGFjdCkgPT4gc3VtICsgKCFjb250YWN0LmFyY2hpdmVkID8gMSA6IDApLFxuICAgICAgMFxuICAgICk7XG4gICAgdXBkYXRlVUlXaXRoVXBkYXRlZEZvbGRlck5hbWUoXG4gICAgICBpbmJveEZvbGRlci5pZCxcbiAgICAgIGluYm94Rm9sZGVyLm5hbWUsXG4gICAgICB0b3RhbENoYXRzQ291bnRcbiAgICApO1xuXG4gICAgc3dpdGNoRm9sZGVyKDEpO1xuICB9XG59XG5cbi8vIFNldCB1cCBsaXN0ZW5lciBmb3IgVU5SRUFEX0NPVU5UX0NIQU5HRVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoXG4gICAgZXZlbnQuc291cmNlID09PSB3aW5kb3cgJiZcbiAgICBldmVudC5kYXRhICYmXG4gICAgZXZlbnQuZGF0YS50eXBlID09PSBcIlVOUkVBRF9DT1VOVF9DSEFOR0VcIlxuICApIHtcbiAgICBjb25zdCB7IGNoYXRJZCwgdW5yZWFkQ291bnQgfSA9IGV2ZW50LmRhdGE7XG4gICAgdXBkYXRlVW5yZWFkQ291bnQoY2hhdElkLCB1bnJlYWRDb3VudCk7XG4gIH1cbn0pO1xuXG4vLyBBZGQgdGhpcyBuZXcgZnVuY3Rpb24gdG8gdXBkYXRlIGFyY2hpdmUgc3RhdHVzXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQXJjaGl2ZVN0YXR1cyhjaGF0SWQsIGFyY2hpdmVkKSB7XG4gIGxldCB1cGRhdGVkRm9sZGVyID0gbnVsbDtcbiAgZm9sZGVycy5mb3JFYWNoKChmb2xkZXIpID0+IHtcbiAgICBjb25zdCBjb250YWN0ID0gZm9sZGVyLmNvbnRhY3RzLmZpbmQoKGMpID0+IGMuaWQgPT09IGNoYXRJZCk7XG4gICAgaWYgKGNvbnRhY3QpIHtcbiAgICAgIGNvbnRhY3QuYXJjaGl2ZWQgPSBhcmNoaXZlZDtcbiAgICAgIHVwZGF0ZWRGb2xkZXIgPSBmb2xkZXI7XG4gICAgfVxuICB9KTtcbiAgc2F2ZUZvbGRlcnNUb1N0b3JhZ2UoZm9sZGVycyk7XG5cbiAgaWYgKHVwZGF0ZWRGb2xkZXIgIT09IG51bGwpIHtcbiAgICBjb25zdCB0b3RhbENoYXRzQ291bnQgPSB1cGRhdGVkRm9sZGVyLmNvbnRhY3RzLnJlZHVjZShcbiAgICAgIChzdW0sIGNvbnRhY3QpID0+IHN1bSArICghY29udGFjdC5hcmNoaXZlZCA/IDEgOiAwKSxcbiAgICAgIDBcbiAgICApO1xuICAgIHVwZGF0ZVVJV2l0aFVwZGF0ZWRGb2xkZXJOYW1lKFxuICAgICAgdXBkYXRlZEZvbGRlci5pZCxcbiAgICAgIHVwZGF0ZWRGb2xkZXIubmFtZSxcbiAgICAgIHRvdGFsQ2hhdHNDb3VudFxuICAgICk7XG4gIH1cbn1cblxuLy8gU2V0IHVwIGxpc3RlbmVyIGZvciBBUkNISVZFX0NIQVRfRVZFTlRcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKFxuICAgIGV2ZW50LnNvdXJjZSA9PT0gd2luZG93ICYmXG4gICAgZXZlbnQuZGF0YSAmJlxuICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gXCJBUkNISVZFX0NIQVRfRVZFTlRcIlxuICApIHtcbiAgICBjb25zdCB7IGNoYXRJZCwgYXJjaGl2ZWQgfSA9IGV2ZW50LmRhdGE7XG4gICAgdXBkYXRlQXJjaGl2ZVN0YXR1cyhjaGF0SWQsIGFyY2hpdmVkKTtcbiAgfVxufSk7XG5cbi8vIFNldCB1cCBsaXN0ZW5lciBmb3IgQ0hBVFNfU1lOQ1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoXG4gICAgZXZlbnQuc291cmNlID09PSB3aW5kb3cgJiZcbiAgICBldmVudC5kYXRhICYmXG4gICAgZXZlbnQuZGF0YS50eXBlID09PSBcIkNIQVRTX1NZTkNcIlxuICApIHtcbiAgICBjb25zdCBjaGF0cyA9IGV2ZW50LmRhdGEuY2hhdHM7XG5cbiAgICBmb2xkZXJzLmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgICAgZm9sZGVyLmNvbnRhY3RzID0gZm9sZGVyLmNvbnRhY3RzLm1hcCgoY29udGFjdCkgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVkQ29udGFjdCA9IGNoYXRzLmZpbmQoKGNoYXQpID0+IGNoYXQuaWQgPT09IGNvbnRhY3QuaWQpO1xuICAgICAgICByZXR1cm4gdXBkYXRlZENvbnRhY3QgPyB1cGRhdGVkQ29udGFjdCA6IGNvbnRhY3Q7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIEhhbmRsZSBpbmJveCBmb2xkZXIgc2VwYXJhdGVseVxuICAgIGNvbnN0IGluYm94Rm9sZGVyID0gZm9sZGVycy5maW5kKChmb2xkZXIpID0+IGZvbGRlci5pbmJveCk7XG4gICAgaWYgKGluYm94Rm9sZGVyKSB7XG4gICAgICBjb25zdCBhbGxDb250YWN0cyA9IGZvbGRlcnMuZmxhdE1hcCgoZm9sZGVyKSA9PlxuICAgICAgICBmb2xkZXIuY29udGFjdHMubWFwKChjKSA9PiBjLmlkKVxuICAgICAgKTtcbiAgICAgIGNvbnN0IG5ld0NvbnRhY3RzID0gY2hhdHMuZmlsdGVyKFxuICAgICAgICAoY2hhdCkgPT4gIWFsbENvbnRhY3RzLmluY2x1ZGVzKGNoYXQuaWQpXG4gICAgICApO1xuICAgICAgaW5ib3hGb2xkZXIuY29udGFjdHMucHVzaCguLi5uZXdDb250YWN0cyk7XG4gICAgfVxuXG4gICAgc2F2ZUZvbGRlcnNUb1N0b3JhZ2UoZm9sZGVycyk7XG4gICAgaW5pdGlhbGl6ZVVJKCk7XG4gICAgc3dpdGNoRm9sZGVyKDEpO1xuICB9XG59KTtcblxuLy8gU2V0IHVwIGxpc3RlbmVyIGZvciBDSEFUX0FEREVEXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChcbiAgICBldmVudC5zb3VyY2UgPT09IHdpbmRvdyAmJlxuICAgIGV2ZW50LmRhdGEgJiZcbiAgICBldmVudC5kYXRhLnR5cGUgPT09IFwiQ0hBVF9BRERFRFwiXG4gICkge1xuICAgIGNvbnN0IGNoYXRJZCA9IGV2ZW50LmRhdGEuY2hhdElkO1xuICAgIGNvbnN0IGluYm94Rm9sZGVyID0gZm9sZGVycy5maW5kKChmb2xkZXIpID0+IGZvbGRlci5pbmJveCk7XG4gICAgaWYgKGluYm94Rm9sZGVyKSB7XG4gICAgICBpbmJveEZvbGRlci5jb250YWN0cy5wdXNoKHtcbiAgICAgICAgaWQ6IGNoYXRJZCxcbiAgICAgICAgYXJjaGl2ZWQ6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICBzYXZlRm9sZGVyc1RvU3RvcmFnZShmb2xkZXJzKTtcblxuICAgICAgY29uc3QgdG90YWxDaGF0c0NvdW50ID0gaW5ib3hGb2xkZXIuY29udGFjdHMucmVkdWNlKFxuICAgICAgICAoc3VtLCBjb250YWN0KSA9PiBzdW0gKyAoIWNvbnRhY3QuYXJjaGl2ZWQgPyAxIDogMCksXG4gICAgICAgIDBcbiAgICAgICk7XG4gICAgICB1cGRhdGVVSVdpdGhVcGRhdGVkRm9sZGVyTmFtZShcbiAgICAgICAgaW5ib3hGb2xkZXIuaWQsXG4gICAgICAgIGluYm94Rm9sZGVyLm5hbWUsXG4gICAgICAgIHRvdGFsQ2hhdHNDb3VudFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBTZXQgdXAgbGlzdGVuZXIgZm9yIENIQVRfUkVNT1ZFRFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoXG4gICAgZXZlbnQuc291cmNlID09PSB3aW5kb3cgJiZcbiAgICBldmVudC5kYXRhICYmXG4gICAgZXZlbnQuZGF0YS50eXBlID09PSBcIkNIQVRfUkVNT1ZFRFwiXG4gICkge1xuICAgIGNvbnN0IGNoYXRJZCA9IGV2ZW50LmRhdGEuY2hhdElkO1xuICAgIGxldCB0YXJnZXRGb2xkZXIgPSBudWxsO1xuXG4gICAgLy8gRmluZCB0aGUgZm9sZGVyIGNvbnRhaW5pbmcgdGhlIGNvbnRhY3RcbiAgICBmb2xkZXJzLmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBmb2xkZXIuY29udGFjdHMuZmluZEluZGV4KChjKSA9PiBjLmlkID09PSBjaGF0SWQpO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB0YXJnZXRGb2xkZXIgPSBmb2xkZXI7XG4gICAgICAgIGZvbGRlci5jb250YWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRhcmdldEZvbGRlcikge1xuICAgICAgc2F2ZUZvbGRlcnNUb1N0b3JhZ2UoZm9sZGVycyk7XG5cbiAgICAgIGNvbnN0IHRvdGFsQ2hhdHNDb3VudCA9IHRhcmdldEZvbGRlci5jb250YWN0cy5yZWR1Y2UoXG4gICAgICAgIChzdW0sIGNvbnRhY3QpID0+IHN1bSArICghY29udGFjdC5hcmNoaXZlZCA/IDEgOiAwKSxcbiAgICAgICAgMFxuICAgICAgKTtcbiAgICAgIHVwZGF0ZVVJV2l0aFVwZGF0ZWRGb2xkZXJOYW1lKFxuICAgICAgICB0YXJnZXRGb2xkZXIuaWQsXG4gICAgICAgIHRhcmdldEZvbGRlci5uYW1lLFxuICAgICAgICB0b3RhbENoYXRzQ291bnRcbiAgICAgICk7XG4gICAgfVxuICB9XG59KTtcblxuLy8gU2V0IHVwIGxpc3RlbmVyIGZvciBGSUxURVJfQ0hBVFNfQllfQUNUSVZFX0ZPTERFUlxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoXG4gICAgZXZlbnQuc291cmNlID09PSB3aW5kb3cgJiZcbiAgICBldmVudC5kYXRhICYmXG4gICAgZXZlbnQuZGF0YS50eXBlID09PSBcIkZJTFRFUl9DSEFUU19CWV9BQ1RJVkVfRk9MREVSXCJcbiAgKSB7XG4gICAgY29uc3QgYWN0aXZlRm9sZGVyID0gZm9sZGVycy5maW5kKFxuICAgICAgKGZvbGRlcikgPT4gZm9sZGVyLmlkID09PSBjdXJyZW50QWN0aXZlRm9sZGVyXG4gICAgKTtcbiAgICBmaWx0ZXJDaGF0cyhhY3RpdmVGb2xkZXIuY29udGFjdHMubWFwKChjKSA9PiBjLmlkKSk7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21vZGFsXCI7XG5pbXBvcnQgeyBmb2xkZXJzLCBzYXZlRm9sZGVyc1RvU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IHVwZGF0ZVVJV2l0aE5ld0ZvbGRlciwgdXBkYXRlVUlXaXRoVXBkYXRlZEZvbGRlck5hbWUgfSBmcm9tIFwiLi91dGlsc1wiO1xuaW1wb3J0IHsgcmVtb3ZlRm9sZGVyLCBzd2l0Y2hGb2xkZXIgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb2xkZXJGb3JtKGZvbGRlcklkID0gbnVsbCkge1xuICBjb25zdCBpc0VkaXRNb2RlID0gZm9sZGVySWQgIT09IG51bGw7XG4gIGNvbnN0IGZvbGRlciA9IGlzRWRpdE1vZGUgPyBmb2xkZXJzLmZpbmQoKGYpID0+IGYuaWQgPT09IGZvbGRlcklkKSA6IG51bGw7XG5cbiAgY29uc3QgZm9sZGVyRm9ybUNvbnRlbnQgPSBgXG4gICAgPGZvcm0gaWQ9XCJmb2xkZXJGb3JtXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwieDEybHF1cDkgeDFvMWt4MDhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLW1kIHg5ZjYxOSB4MXA1b3E4alwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibW9kYWwtdGl0bGUgeDF3N3NkanEgeDFmY3R5MHVcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+JHtcbiAgICAgICAgICAgICAgICBpc0VkaXRNb2RlID8gXCJmb2xkZXJcIiA6IFwiY3JlYXRlX25ld19mb2xkZXJcIlxuICAgICAgICAgICAgICB9PC9zcGFuPlxuICAgICAgICAgICAgICAke2lzRWRpdE1vZGUgPyBcIkVkaXQgZm9sZGVyXCIgOiBcIk5ldyBmb2xkZXJcIn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSB4ZHQ1eXRmIHh1Ym51eXEgeHcyY3N4YyB4MW9kancwZiB4bzZ3bTM2IHgxaWVna2E1IHhjNTMwdTAgeDh6eDRxdiB4MWdjbXdseSB4MTdzeTZ5dSB4d3Nha2p3IHgxdnoxc3NpIHh4YmIxcnEgeHd4YzQxa1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ4MWY2a250biB4MXU3azc0IHgxbjY4bXo5IHgxZmN0eTB1XCI+Rm9sZGVyIG5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmb2xkZXJOYW1lXCIgdmFsdWU9XCIke1xuICAgICAgICAgICAgICAgICAgaXNFZGl0TW9kZSA/IGZvbGRlci5uYW1lIDogXCJcIlxuICAgICAgICAgICAgICAgIH1cIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIvCfpJEgTGVhZHNcIiBjbGFzcz1cInNlbGVjdGFibGUtdGV4dCBjb3B5YWJsZS10ZXh0XCI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwieDc4enVtNSB4OGhobDV0IHhwNDA1NHIgeHV4dzFmdCB4MTIzajNjdyB4MWd0ZnJrMSB4MTU2Z28xNyB4MXNxazhnZVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJmbGV4OiAxO1wiPjwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJ4MTNhNmJ2bCB4MWM0dno0ZiB4czgzbTBrIHhkbDcyajkgeDFnNzdzYzcgeDc4enVtNSB4b3pxaXczIHgxb2EzcW9oIHgxMmZrNHA4IHhldXVnbGkgeDJsd24xaiB4MW5odmN3MSB4MXEwZzNucCB4dWszMDc3IHg0MGhoM2VcIlxuICAgICAgICA+XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIGlzRWRpdE1vZGUgJiYgIWZvbGRlci5pbmJveFxuICAgICAgICAgICAgICA/IGBcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkYXRhLWFjdGlvbj1cInJlbW92ZVwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzPVwieDFzcjg4NTMgeDg4OWtubyB4MWE4bHNqYyB4MW4yb25yNiB4azUweXNuIHgxZjZrbnRuIHh5ZXNuNW0geDF6MTFubzUgeGp5NW0xZyB4MW1ud2JwNiB4NHBiNXY2IHgxNzh4dDh6IHhtODF2czQgeHNvMDMxbCB4eTgwY2x2IHgxM2Z1djIwIHh1M2o1YjMgeDFxMHE4bTUgeDI2dTdxaSB4MXY4cDkzZiB4b2diMDBpIHgxNnN0cXJqIHgxZnRyM2ttIHgxaGw4aWtyIHhmYWdnaHcgeDlkeXIxOSB4OWxjdm1uIHhjamw1bmEgeDFrM3gzZGIgeHV4dzFmdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cIngxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeGV1dWdsaSB4Mmx3bjFqIHhsNTZqN2sgeDFxMGczbnAgeDZzMGRuNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cIngxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeDNwbmJrOCB4ZmV4MDZmIHhldXVnbGkgeDJsd24xaiB4bDU2ajdrIHgxcTBnM25wIHg2czBkbjRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZmxleC1ncm93OiAxXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFJlbW92ZVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPiBgXG4gICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkYXRhLWFjdGlvbj1cInN1Ym1pdFwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzPVwieDg4OWtubyB4MWE4bHNqYyB4YmJ4bjFuIHh4YnI2cGwgeDFuMm9ucjYgeDFyZzVvaHUgeGs1MHlzbiB4MWY2a250biB4eWVzbjVtIHgxejExbm81IHhqeTVtMWcgeDFtbndicDYgeDRwYjV2NiB4MTc4eHQ4eiB4bTgxdnM0IHhzbzAzMWwgeHk4MGNsdiB4MTNmdXYyMCB4dTNqNWIzIHgxcTBxOG01IHgyNnU3cWkgeDF2OHA5M2YgeG9nYjAwaSB4MTZzdHFyaiB4MWZ0cjNrbSB4MWhsOGlrciB4ZmFnZ2h3IHg5ZHlyMTkgeDlsY3ZtbiB4YnRjZThwIHgxNHYwc21wIHhvOHVmc28geGNqbDVuYSB4MWszeDNkYiB4dXh3MWZ0IHh2NTJhemlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJ4MWM0dno0ZiB4czgzbTBrIHhkbDcyajkgeDFnNzdzYzcgeDc4enVtNSB4b3pxaXczIHgxb2EzcW9oIHgxMmZrNHA4IHhldXVnbGkgeDJsd24xaiB4bDU2ajdrIHgxcTBnM25wIHg2czBkbjRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ4MWM0dno0ZiB4czgzbTBrIHhkbDcyajkgeDFnNzdzYzcgeDc4enVtNSB4b3pxaXczIHgxb2EzcW9oIHgxMmZrNHA4IHgzcG5iazggeGZleDA2ZiB4ZXV1Z2xpIHgybHduMWogeGw1Nmo3ayB4MXEwZzNucCB4NnMwZG40XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImZsZXgtZ3JvdzogMVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBPS1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgYDtcblxuICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCh7XG4gICAgbW9kYWxDb250ZW50OiBmb2xkZXJGb3JtQ29udGVudCxcbiAgICBmb3JtSGFuZGxlcjogYXN5bmMgKGZvcm1EYXRhKSA9PiB7XG4gICAgICBjb25zdCBmb2xkZXJOYW1lID0gZm9ybURhdGEuZ2V0KFwiZm9sZGVyTmFtZVwiKTtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IGZvcm1EYXRhLmdldChcImZvcm1BY3Rpb25cIik7XG5cbiAgICAgIGlmIChhY3Rpb24gPT09IFwic3VibWl0XCIpIHtcbiAgICAgICAgaWYgKGlzRWRpdE1vZGUpIHtcbiAgICAgICAgICBmb2xkZXIubmFtZSA9IGZvbGRlck5hbWU7XG4gICAgICAgICAgc2F2ZUZvbGRlcnNUb1N0b3JhZ2UoZm9sZGVycyk7XG4gICAgICAgICAgdXBkYXRlVUlXaXRoVXBkYXRlZEZvbGRlck5hbWUoZm9sZGVySWQsIGZvbGRlck5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGhpZ2hlc3RJZCA9IGZvbGRlcnMucmVkdWNlKFxuICAgICAgICAgICAgKG1heCwgZm9sZGVyKSA9PiBNYXRoLm1heChtYXgsIGZvbGRlci5pZCksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBuZXdJZCA9IGhpZ2hlc3RJZCArIDE7XG4gICAgICAgICAgY29uc3QgbmV3Rm9sZGVyID0geyBpZDogbmV3SWQsIG5hbWU6IGZvbGRlck5hbWUsIGNvbnRhY3RzOiBbXSB9O1xuICAgICAgICAgIGZvbGRlcnMucHVzaChuZXdGb2xkZXIpO1xuICAgICAgICAgIHNhdmVGb2xkZXJzVG9TdG9yYWdlKGZvbGRlcnMpO1xuICAgICAgICAgIHVwZGF0ZVVJV2l0aE5ld0ZvbGRlcihuZXdJZCwgZm9sZGVyTmFtZSk7XG4gICAgICAgICAgc3dpdGNoRm9sZGVyKG5ld0lkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSBcInJlbW92ZVwiICYmIGlzRWRpdE1vZGUpIHtcbiAgICAgICAgcmVtb3ZlRm9sZGVyKGZvbGRlcklkKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgfSk7XG5cbiAgbW9kYWwub3Blbk1vZGFsKCk7XG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgRW50ZXIga2V5XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9sZGVyRm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnYnV0dG9uW2RhdGEtYWN0aW9uPVwic3VibWl0XCJdJ1xuICAgICAgKTtcbiAgICAgIHN1Ym1pdEJ1dHRvbi5jbGljaygpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9kYWxcIjtcbmltcG9ydCB7IHJlbW92ZUZvbGRlciB9IGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCB7IGZvbGRlckZvcm0gfSBmcm9tIFwiLi9mb2xkZXJGb3JtXCI7XG5pbXBvcnQgeyBmb2xkZXJzLCBzYXZlRm9sZGVyc1RvU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCBTb3J0YWJsZSBmcm9tIFwic29ydGFibGVqc1wiO1xuaW1wb3J0IHsgdXBkYXRlRm9sZGVyc1VJIH0gZnJvbSBcIi4vdWlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvbGRlcnNGb3JtKCkge1xuICBjb25zdCBmb2xkZXJzTGlzdCA9IGZvbGRlcnNcbiAgICAubWFwKFxuICAgICAgKGZvbGRlcikgPT4gYFxuICAgIDxkaXYgY2xhc3M9XCJmb2xkZXItaXRlbVwiIGRhdGEtZm9sZGVyLWlkPVwiJHtmb2xkZXIuaWR9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9sZGVyLW5hbWVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+ZHJhZ19pbmRpY2F0b3I8L3NwYW4+XG4gICAgICAgICR7Zm9sZGVyLm5hbWV9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb2xkZXItYWN0aW9uc1wiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInhqYjJwMGkgeGszOTBwdSB4MWhlb3I5ZyB4MXlwZG9oayB4amJxYjh3IHg5NzJmYmYgeGNmdXg2bCB4MXFoaDk4NSB4bTBtMzluIHhleHg4eXUgeDR1YXA1IHgxOGQ5aTY5IHhraGQ2c2QgX2FsZDZcIiBkYXRhLWFjdGlvbj1cImVkaXRcIiBkYXRhLW9iamVjdC1pZD1cIiR7XG4gICAgICAgICAgZm9sZGVyLmlkXG4gICAgICAgIH1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQgX2FsZDdcIj5lZGl0PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgJHtcbiAgICAgICAgICBmb2xkZXIuaW5ib3hcbiAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgOiBgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJ4amIycDBpIHhrMzkwcHUgeDFoZW9yOWcgeDF5cGRvaGsgeGpicWI4dyB4OTcyZmJmIHhjZnV4NmwgeDFxaGg5ODUgeG0wbTM5biB4ZXh4OHl1IHg0dWFwNSB4MThkOWk2OSB4a2hkNnNkIF9hbGQ2XCIgZGF0YS1hY3Rpb249XCJyZW1vdmVcIiBkYXRhLW9iamVjdC1pZD1cIiR7Zm9sZGVyLmlkfVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCBfYWxkN1wiPmRlbGV0ZTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+YFxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxuICAgIClcbiAgICAuam9pbihcIlwiKTtcblxuICBjb25zdCBmb2xkZXJzRm9ybUNvbnRlbnQgPSBgXG4gICAgPGZvcm0gaWQ9XCJmb2xkZXJzRm9ybVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIngxMmxxdXA5IHgxbzFreDA4XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1tZCB4OWY2MTkgeDFwNW9xOGpcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cIm1vZGFsLXRpdGxlIHgxdzdzZGpxIHgxZmN0eTB1XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmZvbGRlcl9tYW5hZ2VkPC9zcGFuPlxuICAgICAgICAgICAgICBZb3VyIGZvbGRlcnNcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSB4ZHQ1eXRmIHh1Ym51eXEgeHcyY3N4YyB4MW9kancwZiB4bzZ3bTM2IHgxaWVna2E1IHhjNTMwdTAgeDh6eDRxdiB4MWdjbXdseSB4MTdzeTZ5dSB4d3Nha2p3IHgxdnoxc3NpIHh4YmIxcnEgeHd4YzQxa1wiPlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvbGRlcnMtbGlzdFwiIGNsYXNzPVwiZm9sZGVycy1saXN0XCI+XG4gICAgICAgICAgICAgICR7Zm9sZGVyc0xpc3R9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJ4Nzh6dW01IHg4aGhsNXQgeHA0MDU0ciB4dXh3MWZ0IHgxMjNqM2N3IHgxZ3RmcmsxIHgxNTZnbzE3IHgxc3FrOGdlXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cIngxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeGV1dWdsaSB4Mmx3bjFqIHgxbmh2Y3cxIHgxcTBnM25wIHh1azMwNzcgeDQwaGgzZVwiIHN0eWxlPVwiZmxleDogMTtcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkYXRhLWFjdGlvbj1cImNyZWF0ZVwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzPVwieDFuNjhtejkgeDg4OWtubyB4MWE4bHNqYyB4MW4yb25yNiB4azUweXNuIHgxZjZrbnRuIHh5ZXNuNW0geDF6MTFubzUgeGp5NW0xZyB4MW1ud2JwNiB4NHBiNXY2IHgxNzh4dDh6IHhtODF2czQgeHNvMDMxbCB4eTgwY2x2IHgxM2Z1djIwIHh1M2o1YjMgeDFxMHE4bTUgeDI2dTdxaSB4MXY4cDkzZiB4b2diMDBpIHgxNnN0cXJqIHgxZnRyM2ttIHgxaGw4aWtyIHhmYWdnaHcgeDlkeXIxOSB4OWxjdm1uIHhjamw1bmEgeDFrM3gzZGIgeHV4dzFmdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cIngxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeGV1dWdsaSB4Mmx3bjFqIHhsNTZqN2sgeDFxMGczbnAgeDZzMGRuNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cIngxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeDNwbmJrOCB4ZmV4MDZmIHhldXVnbGkgeDJsd24xaiB4bDU2ajdrIHgxcTBnM25wIHg2czBkbjRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZmxleC1ncm93OiAxXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENyZWF0ZSBmb2xkZXJcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cIngxM2E2YnZsIHgxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeGV1dWdsaSB4Mmx3bjFqIHgxbmh2Y3cxIHgxcTBnM25wIHh1azMwNzcgeDQwaGgzZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBkYXRhLWFjdGlvbj1cInN1Ym1pdFwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzPVwieDg4OWtubyB4MWE4bHNqYyB4YmJ4bjFuIHh4YnI2cGwgeDFuMm9ucjYgeDFyZzVvaHUgeGs1MHlzbiB4MWY2a250biB4eWVzbjVtIHgxejExbm81IHhqeTVtMWcgeDFtbndicDYgeDRwYjV2NiB4MTc4eHQ4eiB4bTgxdnM0IHhzbzAzMWwgeHk4MGNsdiB4MTNmdXYyMCB4dTNqNWIzIHgxcTBxOG01IHgyNnU3cWkgeDF2OHA5M2YgeG9nYjAwaSB4MTZzdHFyaiB4MWZ0cjNrbSB4MWhsOGlrciB4ZmFnZ2h3IHg5ZHlyMTkgeDlsY3ZtbiB4YnRjZThwIHgxNHYwc21wIHhvOHVmc28geGNqbDVuYSB4MWszeDNkYiB4dXh3MWZ0IHh2NTJhemlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJ4MWM0dno0ZiB4czgzbTBrIHhkbDcyajkgeDFnNzdzYzcgeDc4enVtNSB4b3pxaXczIHgxb2EzcW9oIHgxMmZrNHA4IHhldXVnbGkgeDJsd24xaiB4bDU2ajdrIHgxcTBnM25wIHg2czBkbjRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ4MWM0dno0ZiB4czgzbTBrIHhkbDcyajkgeDFnNzdzYzcgeDc4enVtNSB4b3pxaXczIHgxb2EzcW9oIHgxMmZrNHA4IHgzcG5iazggeGZleDA2ZiB4ZXV1Z2xpIHgybHduMWogeGw1Nmo3ayB4MXEwZzNucCB4NnMwZG40XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImZsZXgtZ3JvdzogMVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBPS1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgYDtcblxuICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCh7XG4gICAgbW9kYWxDb250ZW50OiBmb2xkZXJzRm9ybUNvbnRlbnQsXG4gICAgZm9ybUhhbmRsZXI6IGFzeW5jIChmb3JtRGF0YSkgPT4ge1xuICAgICAgY29uc3QgYWN0aW9uID0gZm9ybURhdGEuZ2V0KFwiZm9ybUFjdGlvblwiKTtcbiAgICAgIGNvbnN0IG9iamVjdElkID0gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwib2JqZWN0SWRcIikpO1xuXG4gICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICBjYXNlIFwiZWRpdFwiOlxuICAgICAgICAgIGZvbGRlckZvcm0ob2JqZWN0SWQpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlIFwicmVtb3ZlXCI6XG4gICAgICAgICAgcmVtb3ZlRm9sZGVyKG9iamVjdElkKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY2FzZSBcImNyZWF0ZVwiOlxuICAgICAgICAgIGZvbGRlckZvcm0oKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY2FzZSBcInN1Ym1pdFwiOlxuICAgICAgICAgIHVwZGF0ZUZvbGRlclBvc2l0aW9ucygpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuXG4gIG1vZGFsLm9wZW5Nb2RhbCgpO1xuXG4gIGluaXRpYWxpemVEcmFnQW5kRHJvcCgpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplRHJhZ0FuZERyb3AoKSB7XG4gIGNvbnN0IGZvbGRlcnNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb2xkZXJzLWxpc3RcIik7XG5cbiAgbmV3IFNvcnRhYmxlKGZvbGRlcnNMaXN0LCB7XG4gICAgYW5pbWF0aW9uOiAxNTAsXG4gICAgaGFuZGxlOiBcIi5mb2xkZXItaXRlbVwiLFxuICAgIG9uRW5kOiAoZXZ0KSA9PiB7XG4gICAgICAvLyBUaGlzIGV2ZW50IGlzIHRyaWdnZXJlZCB3aGVuIGEgZHJhZyBvcGVyYXRpb24gZW5kc1xuICAgICAgLy8gWW91IGNhbiB1c2UgaXQgZm9yIGltbWVkaWF0ZSB1cGRhdGVzIGlmIG5lZWRlZFxuICAgIH0sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVGb2xkZXJQb3NpdGlvbnMoKSB7XG4gIGNvbnN0IGZvbGRlckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb2xkZXItaXRlbVwiKTtcbiAgY29uc3QgdXBkYXRlZEZvbGRlcnMgPSBBcnJheS5mcm9tKGZvbGRlckl0ZW1zKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZm9sZGVySWQgPSBwYXJzZUludChpdGVtLmRhdGFzZXQuZm9sZGVySWQpO1xuICAgIGNvbnN0IGZvbGRlciA9IGZvbGRlcnMuZmluZCgoZikgPT4gZi5pZCA9PT0gZm9sZGVySWQpO1xuICAgIHJldHVybiB7IC4uLmZvbGRlciwgcG9zaXRpb246IGluZGV4IH07XG4gIH0pO1xuICAvLyBVcGRhdGUgdGhlIGZvbGRlcnMgYXJyYXkgd2l0aCBuZXcgcG9zaXRpb25zXG4gIGZvbGRlcnMubGVuZ3RoID0gMDtcbiAgZm9sZGVycy5wdXNoKC4uLnVwZGF0ZWRGb2xkZXJzKTtcbiAgLy8gU2F2ZSB0aGUgdXBkYXRlZCBmb2xkZXJzIHRvIHN0b3JhZ2VcbiAgc2F2ZUZvbGRlcnNUb1N0b3JhZ2UoZm9sZGVycyk7XG5cbiAgLy8gVXBkYXRlIHRoZSBVSSB0byByZWZsZWN0IHRoZSBuZXcgb3JkZXJcbiAgdXBkYXRlRm9sZGVyc1VJKCk7XG59XG4iLCJpbXBvcnQgeyBsb2FkRm9sZGVyc0Zyb21TdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgc2V0dXBLZXlib2FyZExpc3RlbmVycyB9IGZyb20gXCIuL3Nob3J0Y3V0c1wiO1xuaW1wb3J0IHsgZmlsdGVyQ2hhdHNMaXN0ZW5lciB9IGZyb20gXCIuLi8uLi93aGF0c2FwcFN0b3JlL2ZpbHRlckNoYXRzXCI7XG5pbXBvcnQgeyBtZXNzYWdlc0xpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL3doYXRzYXBwU3RvcmUvbWVzc2FnZXNMaXN0ZW5lclwiO1xuaW1wb3J0IHsgYXJjaGl2ZUNoYXRFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL3doYXRzYXBwU3RvcmUvYXJjaGl2ZUNoYXRFdmVudExpc3RlbmVyXCI7XG5pbXBvcnQgeyByZXF1ZXN0TW92ZVRvRm9ybUxpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL3doYXRzYXBwU3RvcmUvcmVxdWVzdE1vdmVUb0Zvcm1cIjtcbmltcG9ydCB7IGNoYXRzU3luYyB9IGZyb20gXCIuLi8uLi93aGF0c2FwcFN0b3JlL2NoYXRzU3luY1wiO1xuaW1wb3J0IHsgbW92ZVRvRm9ybSB9IGZyb20gXCIuL21vdmVUb0Zvcm1cIjtcbmltcG9ydCB7IGZvcndhcmRGaWx0ZXJIYW5kbGVyTGlzdGVuZXIgfSBmcm9tIFwiLi4vLi4vd2hhdHNhcHBTdG9yZS9mb3J3YXJkRmlsdGVySGFuZGxlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUZvbGRlcnMoKSB7XG4gIGxvYWRGb2xkZXJzRnJvbVN0b3JhZ2UoKGxvYWRlZEZvbGRlcnMpID0+IHt9KTtcblxuICAvLyBMaXN0ZW4gZm9yIGN1c3RvbSBldmVudCBhbmQgaW5pdGlhbGl6ZSBmZWF0dXJlc1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwid2hhdHNhcHBJbml0aWFsaXplZFwiLCAoKSA9PiB7XG4gICAgY2hhdHNTeW5jKCk7XG5cbiAgICBzZXR1cEtleWJvYXJkTGlzdGVuZXJzKCk7XG4gICAgcmVxdWVzdE1vdmVUb0Zvcm1MaXN0ZW5lcigpO1xuXG4gICAgZmlsdGVyQ2hhdHNMaXN0ZW5lcigpO1xuICAgIG1lc3NhZ2VzTGlzdGVuZXIoKTtcbiAgICBhcmNoaXZlQ2hhdEV2ZW50TGlzdGVuZXIoKTtcbiAgICBmb3J3YXJkRmlsdGVySGFuZGxlckxpc3RlbmVyKCk7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHRoZSByZXNwb25zZSBmcm9tIHRoZSBpbmplY3RlZCBzY3JpcHRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50LmRhdGEgJiZcbiAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSBcIk9QRU5fTU9WRV9UT19GT1JNXCIgJiZcbiAgICAgICAgZXZlbnQuZGF0YS5jaGF0SWRcbiAgICAgICkge1xuICAgICAgICBjb25zdCBjaGF0SWQgPSBldmVudC5kYXRhLmNoYXRJZDtcbiAgICAgICAgbW92ZVRvRm9ybShjaGF0SWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2RhbFwiO1xuaW1wb3J0IHsgZm9sZGVycywgY3VycmVudEFjdGl2ZUZvbGRlciB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IHVwZGF0ZUNvbnRhY3RzSW5Gb2xkZXIgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlVG9Gb3JtKGNoYXRJZCwgYXJjaGl2ZWQpIHtcbiAgY29uc3QgZm9sZGVyc09wdGlvbnMgPSBmb2xkZXJzXG4gICAgLm1hcCgoZm9sZGVyLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGZvbGRlci5pZCA9PT0gY3VycmVudEFjdGl2ZUZvbGRlcjtcbiAgICAgIHJldHVybiBgXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cIm9wdGlvblwiPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZmxleDogMTtcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZm9sZGVyXCIgdmFsdWU9XCIke2ZvbGRlci5pZH1cIiAke1xuICAgICAgICBpc1NlbGVjdGVkID8gXCJjaGVja2VkXCIgOiBcIlwiXG4gICAgICB9PlxuICAgICAgICAgICAgJHtmb2xkZXIubmFtZX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAke2luZGV4IDwgOSA/IGA8a2JkPiR7aW5kZXggKyAxfTwva2JkPmAgOiBcIlwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIGA7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKTtcblxuICBjb25zdCBtb3ZlVG9Gb3JtQ29udGVudCA9IGBcbiAgICA8Zm9ybSBpZD1cIm1vdmVUb0Zvcm1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ4MTJscXVwOSB4MW8xa3gwOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtbWQgeDlmNjE5IHgxcDVvcThqXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJtb2RhbC10aXRsZSB4MXc3c2RqcSB4MWZjdHkwdVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5mb2xkZXI8L3NwYW4+XG4gICAgICAgICAgICAgIE1vdmUgdG9cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSB4ZHQ1eXRmIHh1Ym51eXEgeHcyY3N4YyB4MW9kancwZiB4bzZ3bTM2IHgxaWVna2E1IHhjNTMwdTAgeDh6eDRxdiB4MWdjbXdseSB4MTdzeTZ5dSB4d3Nha2p3IHgxdnoxc3NpIHh4YmIxcnEgeHd4YzQxa1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNub296ZS1vcHRpb25zXCI+XG4gICAgICAgICAgICAgICR7Zm9sZGVyc09wdGlvbnN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIGA7XG5cbiAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoe1xuICAgIG1vZGFsQ29udGVudDogbW92ZVRvRm9ybUNvbnRlbnQsXG4gICAgZm9ybUhhbmRsZXI6IGFzeW5jIChmb3JtRGF0YSkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRGb2xkZXJJZCA9IHBhcnNlSW50KGZvcm1EYXRhLmdldChcImZvbGRlclwiKSk7XG4gICAgICBpZiAoc2VsZWN0ZWRGb2xkZXJJZCkge1xuICAgICAgICB1cGRhdGVDb250YWN0c0luRm9sZGVyKHNlbGVjdGVkRm9sZGVySWQsIGNoYXRJZCwgYXJjaGl2ZWQpO1xuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gSW5kaWNhdGVzIHN1Y2Nlc3NmdWwgaGFuZGxpbmdcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTsgLy8gSW5kaWNhdGVzIHVuc3VjY2Vzc2Z1bCBoYW5kbGluZ1xuICAgIH0sXG4gICAgc2hvcnRjdXRIYW5kbGVyOiAoZSkgPT4ge1xuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW92ZVRvRm9ybVwiKTtcbiAgICAgIGNvbnN0IGtleSA9IGUua2V5O1xuICAgICAgaWYgKC9eWzEtOV0kLy50ZXN0KGtleSkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGtleSkgLSAxO1xuICAgICAgICBjb25zdCByYWRpb0lucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG4gICAgICAgIGlmIChpbmRleCA8IHJhZGlvSW5wdXRzLmxlbmd0aCkge1xuICAgICAgICAgIHJhZGlvSW5wdXRzW2luZGV4XS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICByYWRpb0lucHV0c1tpbmRleF0uZm9jdXMoKTtcbiAgICAgICAgICBmb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwic3VibWl0XCIpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJzdWJtaXRcIikpO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuXG4gIG1vZGFsLm9wZW5Nb2RhbCgpO1xuXG4gIC8vIEFkZCBldmVudCBsaXN0ZW5lcnNcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW92ZVRvRm9ybVwiKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KFwibGFiZWwub3B0aW9uXCIpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCByYWRpbyA9IGUudGFyZ2V0XG4gICAgICAgIC5jbG9zZXN0KFwibGFiZWwub3B0aW9uXCIpXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcbiAgICAgIHJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgZm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInN1Ym1pdFwiKSk7XG4gICAgfVxuICB9KTtcblxuICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpLmZvY3VzKCk7XG59XG4iLCJpbXBvcnQgeyBzd2l0Y2hGb2xkZXIgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQgeyBpc1VzZXJUeXBpbmcgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuaW1wb3J0IHsgY3VycmVudEFjdGl2ZUZvbGRlciwgZm9sZGVycyB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwS2V5Ym9hcmRMaXN0ZW5lcnMoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJrZXlkb3duXCIsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoaXNVc2VyVHlwaW5nKCkpIHJldHVybjtcblxuICAgICAgY29uc3QgY3VycmVudEluZGV4ID0gZm9sZGVycy5maW5kSW5kZXgoXG4gICAgICAgIChmb2xkZXIpID0+IGZvbGRlci5pZCA9PT0gY3VycmVudEFjdGl2ZUZvbGRlclxuICAgICAgKTtcbiAgICAgIGNvbnN0IHRvdGFsRm9sZGVycyA9IGZvbGRlcnMubGVuZ3RoO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50LmtleSA9PT0gXCJUYWJcIiAmJlxuICAgICAgICAhZXZlbnQubWV0YUtleSAmJlxuICAgICAgICAhZXZlbnQuY3RybEtleSAmJlxuICAgICAgICAhZXZlbnQuYWx0S2V5ICYmXG4gICAgICAgICFldmVudC5zaGlmdEtleVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSAoY3VycmVudEluZGV4ICsgMSkgJSB0b3RhbEZvbGRlcnM7XG4gICAgICAgIHN3aXRjaEZvbGRlcihmb2xkZXJzW25leHRJbmRleF0uaWQpO1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChgZm9sZGVyLSR7Zm9sZGVyc1tuZXh0SW5kZXhdLmlkfWApXG4gICAgICAgICAgLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGlubGluZTogXCJjZW50ZXJcIiB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBldmVudC5rZXkgPT09IFwiVGFiXCIgJiZcbiAgICAgICAgZXZlbnQuc2hpZnRLZXkgJiZcbiAgICAgICAgIWV2ZW50Lm1ldGFLZXkgJiZcbiAgICAgICAgIWV2ZW50LmN0cmxLZXkgJiZcbiAgICAgICAgIWV2ZW50LmFsdEtleVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zdCBwcmV2SW5kZXggPSAoY3VycmVudEluZGV4IC0gMSArIHRvdGFsRm9sZGVycykgJSB0b3RhbEZvbGRlcnM7XG4gICAgICAgIHN3aXRjaEZvbGRlcihmb2xkZXJzW3ByZXZJbmRleF0uaWQpO1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChgZm9sZGVyLSR7Zm9sZGVyc1twcmV2SW5kZXhdLmlkfWApXG4gICAgICAgICAgLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGlubGluZTogXCJjZW50ZXJcIiB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRydWVcbiAgKTtcbn1cbiIsImNvbnN0IGluaXRpYWxGb2xkZXJzID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCJJbXBvcnRhbnRcIixcbiAgICBjb250YWN0czogW10sXG4gICAgaW5ib3g6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiBcIk90aGVyc1wiLFxuICAgIGNvbnRhY3RzOiBbXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBsZXQgZm9sZGVycyA9IFtdO1xuZXhwb3J0IGZ1bmN0aW9uIHNldEZvbGRlcnModmFsKSB7XG4gIGZvbGRlcnMgPSB2YWw7XG59XG5cbmV4cG9ydCBsZXQgY3VycmVudEFjdGl2ZUZvbGRlciA9IDE7XG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudEFjdGl2ZUZvbGRlcih2YWwpIHtcbiAgY3VycmVudEFjdGl2ZUZvbGRlciA9IHZhbDtcbn1cblxuLy8gTG9hZCBmb2xkZXJzIGZyb20gc3RvcmFnZSBhbmQgZXhlY3V0ZSBjYWxsYmFja1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGb2xkZXJzRnJvbVN0b3JhZ2UoY2FsbGJhY2spIHtcbiAgbG9hZFNldHRpbmdzRnJvbVN0b3JhZ2UoKGxvYWRlZEZvbGRlcnMsIF8pID0+IHtcbiAgICBzZXRGb2xkZXJzKGxvYWRlZEZvbGRlcnMpO1xuICAgIGNhbGxiYWNrKGxvYWRlZEZvbGRlcnMpO1xuICB9KTtcbn1cblxuLy8gU2F2ZSBmb2xkZXJzIHRvIHN0b3JhZ2VcbmV4cG9ydCBmdW5jdGlvbiBzYXZlRm9sZGVyc1RvU3RvcmFnZShmb2xkZXJzKSB7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IGZvbGRlcnM6IGZvbGRlcnMgfSk7XG59XG5cbi8vIExvYWQgZm9sZGVycyBmcm9tIHN0b3JhZ2VcbmV4cG9ydCBmdW5jdGlvbiBsb2FkU2V0dGluZ3NGcm9tU3RvcmFnZShjYWxsYmFjaykge1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1wiZm9sZGVyc1wiXSwgKHJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IGxvYWRlZEZvbGRlcnMgPSByZXN1bHQuZm9sZGVycyB8fCBpbml0aWFsRm9sZGVyczsgLy8gVXNlIGluaXRpYWwgZm9sZGVycyBpZiBubyBmb2xkZXJzIGFyZSBmb3VuZFxuICAgIGNhbGxiYWNrKGxvYWRlZEZvbGRlcnMpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Rm9sZGVycygpIHtcbiAgZm9sZGVycyA9IGluaXRpYWxGb2xkZXJzO1xuICBzYXZlRm9sZGVyc1RvU3RvcmFnZShmb2xkZXJzKTtcbn1cbiIsImltcG9ydCB7IGdldEVsZW1lbnRCeVhwYXRoLCBoaWRlQWxsQ2hpbGRyZW4gfSBmcm9tIFwiLi4vLi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuaW1wb3J0IHsgZm9sZGVyQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9sZGVyQnV0dG9uXCI7XG5pbXBvcnQgeyBzd2l0Y2hGb2xkZXIgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQgeyBjdXJyZW50QWN0aXZlRm9sZGVyLCBmb2xkZXJzIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgY2hhdE1lbnVJdGVtIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2hhdE1lbnVJdGVtXCI7XG5pbXBvcnQgeyBtb3ZlVG9Gb3JtIH0gZnJvbSBcIi4vbW92ZVRvRm9ybVwiO1xuaW1wb3J0IHsgZm9sZGVyRm9ybSB9IGZyb20gXCIuL2ZvbGRlckZvcm1cIjtcbmltcG9ydCB7IGZvbGRlcnNGb3JtIH0gZnJvbSBcIi4vZm9sZGVyc0Zvcm1cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVVSSgpIHtcbiAgbGV0IGZvbGRlcnNTZWN0aW9uID0gZ2V0RWxlbWVudEJ5WHBhdGgoYC8vKltAaWQ9XCJzaWRlXCJdL2RpdlsyXWApO1xuXG4gIGlmIChmb2xkZXJzU2VjdGlvbi5pZCAhPT0gXCJwYW5lLXNpZGVcIikge1xuICAgIGZvbGRlcnNTZWN0aW9uLnN0eWxlLm92ZXJmbG93WCA9IFwiYXV0b1wiO1xuICAgIGZvbGRlcnNTZWN0aW9uLnN0eWxlLmZsZXhXcmFwID0gXCJub3dyYXBcIjtcbiAgICBmb2xkZXJzU2VjdGlvbi5zdHlsZS53aGl0ZVNwYWNlID0gXCJub3dyYXBcIjtcbiAgICBmb2xkZXJzU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgaGlkZUFsbENoaWxkcmVuKGZvbGRlcnNTZWN0aW9uKTsgLy8gdGhpcyBoaWRlcyBVbnJlYWQgYW5kIEdyb3VwcyB0YWJzXG4gIH0gZWxzZSB7XG4gICAgZm9sZGVyc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvbGRlcnNTZWN0aW9uLmNsYXNzTmFtZSA9XG4gICAgICBcIngxa3k4b2piIHg3OHp1bTUgeDFxMGczbnAgeDFhMDJkYWsgeDJsYWgwcyB4M3BuYms4IHhmZXgwNmYgeGV1dWdsaSB4Mmx3bjFqIHgxbm4zdjBqIHgxeWtwYXR1IHgxc3d2dDEzIHgxcGkzMHppIFwiO1xuICAgIGZvbGRlcnNTZWN0aW9uLnN0eWxlID1cbiAgICAgIFwib3ZlcmZsb3cteDogYXV0bzsgZmxleC13cmFwOiBub3dyYXA7IHdoaXRlLXNwYWNlOiBub3dyYXA7IGRpc3BsYXk6IGZsZXg7XCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlXCIpLmluc2VydENoaWxkQXRJbmRleChmb2xkZXJzU2VjdGlvbiwgMik7XG4gIH1cblxuICAvLyBDcmVhdGUgYSBjb250YWluZXIgZm9yIGZvbGRlcnNcbiAgY29uc3QgZm9sZGVyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZvbGRlcnNDb250YWluZXIuaWQgPSBcImZvbGRlcnMtY29udGFpbmVyXCI7XG4gIGZvbGRlcnNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBmb2xkZXJzQ29udGFpbmVyLnN0eWxlLmZsZXggPSBcIjFcIjtcbiAgZm9sZGVyc0NvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1ggPSBcImF1dG9cIjtcbiAgZm9sZGVyc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcInhmZXgwNmYgeDNwbmJrOFwiO1xuXG4gIC8vIFNvcnQgZm9sZGVycyBiYXNlZCBvbiB0aGVpciBwb3NpdGlvbiBhdHRyaWJ1dGVcbiAgY29uc3Qgc29ydGVkRm9sZGVycyA9IFsuLi5mb2xkZXJzXS5zb3J0KChhLCBiKSA9PiBhLnBvc2l0aW9uIC0gYi5wb3NpdGlvbik7XG5cbiAgZm9yIChjb25zdCBmb2xkZXIgb2Ygc29ydGVkRm9sZGVycykge1xuICAgIGNvbnN0IHRvdGFsQ2hhdHNDb3VudCA9IGZvbGRlci5jb250YWN0cy5yZWR1Y2UoXG4gICAgICAoc3VtLCBjb250YWN0KSA9PiBzdW0gKyAoIWNvbnRhY3QuYXJjaGl2ZWQgPyAxIDogMCksXG4gICAgICAwXG4gICAgKTtcblxuICAgIGZvbGRlcnNDb250YWluZXIuYXBwZW5kKFxuICAgICAgZm9sZGVyQnV0dG9uKFxuICAgICAgICBmb2xkZXIuaWQsXG4gICAgICAgIGZvbGRlci5pZCA9PT0gY3VycmVudEFjdGl2ZUZvbGRlcixcbiAgICAgICAgZm9sZGVyLm5hbWUsXG4gICAgICAgICgpID0+IHN3aXRjaEZvbGRlcihmb2xkZXIuaWQpLFxuICAgICAgICAoKSA9PiBmb2xkZXJGb3JtKGZvbGRlci5pZCksXG4gICAgICAgIHRvdGFsQ2hhdHNDb3VudFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvLyBBZGQgdGhlIGZvbGRlcnMgY29udGFpbmVyIHRvIHRoZSBtYWluIHNlY3Rpb25cbiAgZm9sZGVyc1NlY3Rpb24uYXBwZW5kQ2hpbGQoZm9sZGVyc0NvbnRhaW5lcik7XG5cbiAgLy8gQWRkIHNldHRpbmdzIGJ1dHRvbiBhZnRlciBmb2xkZXJzXG4gIGNvbnN0IHNldHRpbmdzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2V0dGluZ3NCdXR0b24uY2xhc3NOYW1lID1cbiAgICBcInhqYjJwMGkgeDF5cGRvaGsgeDk3MmZiZiB4Y2Z1eDZsIHgxcWhoOTg1IHhtMG0zOW4geDFtdmdqMzkgeDZwcnh4ZiB4bzFsOGJtIHgxYnR1cGJwIHgxeXJzeXluIHgxMGI2YXFxXCI7XG4gIHNldHRpbmdzQnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSBcImluaGVyaXRcIjtcbiAgc2V0dGluZ3NCdXR0b24uc3R5bGUucGFkZGluZ0xlZnQgPSBcIjhweFwiO1xuICBzZXR0aW5nc0J1dHRvbi5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cIngxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeGV1dWdsaSB4Mmx3bjFqIHgxbmh2Y3cxIHgxcTBnM25wIHg2czBkbjQgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5cbiAgICAgICAgZm9sZGVyX21hbmFnZWRcbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgYDtcbiAgc2V0dGluZ3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGZvbGRlcnNGb3JtKCkpO1xuICBmb2xkZXJzU2VjdGlvbi5hcHBlbmRDaGlsZChzZXR0aW5nc0J1dHRvbik7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChcbiAgICAgIGV2ZW50LnNvdXJjZSA9PT0gd2luZG93ICYmXG4gICAgICBldmVudC5kYXRhICYmXG4gICAgICBldmVudC5kYXRhLnR5cGUgPT09IFwiT1BFTl9DT05URVhUX01FTlVcIlxuICAgICkge1xuICAgICAgY29uc3QgeyBjaGF0SWQsIGFyY2hpdmVkIH0gPSBldmVudC5kYXRhO1xuXG4gICAgICBjb25zdCBjaGF0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAjYXBwID4gZGl2ID4gc3BhbjpudGgtY2hpbGQoNikgPiBkaXYgPiB1bCA+IGRpdmBcbiAgICAgICk7XG5cbiAgICAgIGNoYXRNZW51LmNoaWxkcmVuWzBdLnJlbW92ZSgpOyAvLyBSZW1vdmUgYXJjaGl2ZSBidXR0b24gc2luY2Ugd2UgaGF2ZSBjdXN0b20gYWN0aW9ucyBhbmQgd2UgbmVlZCBzcGFjZSBoZXJlXG5cbiAgICAgIGNoYXRNZW51Lmluc2VydENoaWxkQXRJbmRleChcbiAgICAgICAgY2hhdE1lbnVJdGVtKFwiTW92ZSB0b1wiLCBcInZcIiwgKCkgPT4gbW92ZVRvRm9ybShjaGF0SWQsIGFyY2hpdmVkKSksXG4gICAgICAgIDBcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUZvbGRlcnNVSSgpIHtcbiAgY29uc3QgZm9sZGVyc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9sZGVycy1jb250YWluZXJcIik7XG4gIGlmICghZm9sZGVyc0NvbnRhaW5lcikgcmV0dXJuO1xuXG4gIC8vIFNvcnQgZm9sZGVycyBiYXNlZCBvbiB0aGVpciBwb3NpdGlvbiBhdHRyaWJ1dGVcbiAgY29uc3Qgc29ydGVkRm9sZGVycyA9IFsuLi5mb2xkZXJzXS5zb3J0KChhLCBiKSA9PiBhLnBvc2l0aW9uIC0gYi5wb3NpdGlvbik7XG5cbiAgLy8gUmVtb3ZlIGFsbCBleGlzdGluZyBmb2xkZXIgYnV0dG9uc1xuICBmb2xkZXJzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgLy8gUmUtYWRkIGZvbGRlciBidXR0b25zIGluIHRoZSBuZXcgb3JkZXJcbiAgZm9yIChjb25zdCBmb2xkZXIgb2Ygc29ydGVkRm9sZGVycykge1xuICAgIGNvbnN0IHRvdGFsQ2hhdHNDb3VudCA9IGZvbGRlci5jb250YWN0cy5yZWR1Y2UoXG4gICAgICAoc3VtLCBjb250YWN0KSA9PiBzdW0gKyAoIWNvbnRhY3QuYXJjaGl2ZWQgPyAxIDogMCksXG4gICAgICAwXG4gICAgKTtcblxuICAgIGZvbGRlcnNDb250YWluZXIuYXBwZW5kQ2hpbGQoXG4gICAgICBmb2xkZXJCdXR0b24oXG4gICAgICAgIGZvbGRlci5pZCxcbiAgICAgICAgZm9sZGVyLmlkID09PSBjdXJyZW50QWN0aXZlRm9sZGVyLFxuICAgICAgICBmb2xkZXIubmFtZSxcbiAgICAgICAgKCkgPT4gc3dpdGNoRm9sZGVyKGZvbGRlci5pZCksXG4gICAgICAgICgpID0+IGZvbGRlckZvcm0oZm9sZGVyLmlkKSxcbiAgICAgICAgdG90YWxDaGF0c0NvdW50XG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZm9sZGVyQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9sZGVyQnV0dG9uXCI7XG5pbXBvcnQgeyBjdXJyZW50QWN0aXZlRm9sZGVyIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgc3dpdGNoRm9sZGVyIH0gZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0IHsgZm9sZGVyRm9ybSB9IGZyb20gXCIuL2ZvbGRlckZvcm1cIjtcblxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBVSSB3aXRoIHRoZSBuZXcgZm9sZGVyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVUlXaXRoTmV3Rm9sZGVyKGZvbGRlcklkLCBmb2xkZXJOYW1lKSB7XG4gIGNvbnN0IGZvbGRlcnNTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb2xkZXJzLWNvbnRhaW5lclwiKTtcblxuICBmb2xkZXJzU2VjdGlvbi5pbnNlcnRDaGlsZEF0SW5kZXgoXG4gICAgZm9sZGVyQnV0dG9uKFxuICAgICAgZm9sZGVySWQsXG4gICAgICBmb2xkZXJJZCA9PT0gY3VycmVudEFjdGl2ZUZvbGRlcixcbiAgICAgIGZvbGRlck5hbWUsXG4gICAgICAoKSA9PiBzd2l0Y2hGb2xkZXIoZm9sZGVySWQpLFxuICAgICAgKCkgPT4gZm9sZGVyRm9ybShmb2xkZXJJZClcbiAgICApLFxuICAgIGZvbGRlcnNTZWN0aW9uLmNoaWxkTm9kZXMubGVuZ3RoXG4gICk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgVUkgd2hlbiBhIGZvbGRlciBuYW1lIGlzIGNoYW5nZWRcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVVSVdpdGhVcGRhdGVkRm9sZGVyTmFtZShcbiAgZm9sZGVySWQsXG4gIG5ld0ZvbGRlck5hbWUsXG4gIHVucmVhZENvdW50ID0gMFxuKSB7XG4gIGNvbnN0IGZvbGRlcnNTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb2xkZXJzLWNvbnRhaW5lclwiKTtcbiAgY29uc3Qgb2xkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYnV0dG9uW2lkPSdmb2xkZXItJHtmb2xkZXJJZH0nXWApO1xuXG4gIGlmIChvbGRCdXR0b24pIHtcbiAgICBjb25zdCBpbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwoXG4gICAgICBmb2xkZXJzU2VjdGlvbi5jaGlsZHJlbixcbiAgICAgIG9sZEJ1dHRvblxuICAgICk7XG5cbiAgICAvLyBSZW1vdmUgdGhlIG9sZCBidXR0b25cbiAgICBmb2xkZXJzU2VjdGlvbi5yZW1vdmVDaGlsZChvbGRCdXR0b24pO1xuXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGJ1dHRvblxuICAgIGNvbnN0IG5ld0J1dHRvbiA9IGZvbGRlckJ1dHRvbihcbiAgICAgIGZvbGRlcklkLFxuICAgICAgZm9sZGVySWQgPT09IGN1cnJlbnRBY3RpdmVGb2xkZXIsXG4gICAgICBuZXdGb2xkZXJOYW1lLFxuICAgICAgKCkgPT4gc3dpdGNoRm9sZGVyKGZvbGRlcklkKSxcbiAgICAgICgpID0+IGZvbGRlckZvcm0oZm9sZGVySWQpLFxuICAgICAgdW5yZWFkQ291bnRcbiAgICApO1xuXG4gICAgLy8gSW5zZXJ0IHRoZSBuZXcgYnV0dG9uIGF0IHRoZSBzYW1lIGluZGV4XG4gICAgZm9sZGVyc1NlY3Rpb24uaW5zZXJ0QmVmb3JlKG5ld0J1dHRvbiwgZm9sZGVyc1NlY3Rpb24uY2hpbGRyZW5baW5kZXhdKTtcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byByZW1vdmUgdGhlIGZvbGRlciBmcm9tIHRoZSBVSVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZvbGRlckZyb21VSShmb2xkZXJJZCkge1xuICBjb25zdCBmb2xkZXJzU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9sZGVycy1jb250YWluZXJcIik7XG4gIGNvbnN0IG9sZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJ1dHRvbltpZD0nZm9sZGVyLSR7Zm9sZGVySWR9J11gKTtcblxuICBpZiAob2xkQnV0dG9uKSB7XG4gICAgZm9sZGVyc1NlY3Rpb24ucmVtb3ZlQ2hpbGQob2xkQnV0dG9uKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhdEl0ZW1VbmRlck1lbnUobWVudUVsZW1lbnQpIHtcbiAgLy8gR2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgbWVudSBlbGVtZW50XG4gIGNvbnN0IHJlY3QgPSBtZW51RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAvLyBGaW5kIHRoZSBlbGVtZW50IGF0IHRoZSBjZW50ZXIgb2YgdGhlIG1lbnVcbiAgY29uc3QgY2hhdEl0ZW0gPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KFxuICAgIHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyLFxuICAgIHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLyAyXG4gICk7XG5cbiAgLy8gRGVmaW5lIHRoZSByZXF1aXJlZCBjbGFzc2VzIGZvciB0aGUgY2hhdCBpdGVtXG4gIGNvbnN0IHJlcXVpcmVkQ2xhc3NlcyA9IFtcIngxMGw2dHFrXCIsIFwieGg4eWVqM1wiLCBcIngxZzQyZmN2XCJdO1xuXG4gIC8vIEZ1bmN0aW9uIHRvIGZpbmQgdGhlIHBhcmVudCB3aXRoIGFsbCB0aGUgcmVxdWlyZWQgY2xhc3Nlc1xuICBmdW5jdGlvbiBmaW5kUGFyZW50V2l0aENsYXNzZXMoZWxlbWVudCwgY2xhc3Nlcykge1xuICAgIGxldCBjdXJyZW50RWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgd2hpbGUgKGN1cnJlbnRFbGVtZW50KSB7XG4gICAgICBpZiAoY2xhc3Nlcy5ldmVyeSgoY2xzKSA9PiBjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xzKSkpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRFbGVtZW50O1xuICAgICAgfVxuICAgICAgY3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50OyAvLyBNb3ZlIHVwIHRoZSBET00gdHJlZVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDsgLy8gTm8gcGFyZW50IHdpdGggYWxsIHRoZSBzcGVjaWZpZWQgY2xhc3NlcyB3YXMgZm91bmRcbiAgfVxuXG4gIC8vIEZpbmQgdGhlIHBhcmVudCB3aXRoIHRoZSByZXF1aXJlZCBjbGFzc2VzXG4gIGNvbnN0IGNoYXRJdGVtUGFyZW50ID0gZmluZFBhcmVudFdpdGhDbGFzc2VzKGNoYXRJdGVtLCByZXF1aXJlZENsYXNzZXMpO1xuXG4gIHJldHVybiBbY2hhdEl0ZW1QYXJlbnQsIGNoYXRJdGVtXTtcbn1cbiIsImltcG9ydCB7IGdldEVsZW1lbnRCeVhwYXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IG5hdkJhckl0ZW0gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9uYXZCYXJJdGVtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplU2NoZWR1bGVkKCkge1xuICAvLyBMaXN0ZW4gZm9yIGN1c3RvbSBldmVudCBhbmQgaW5pdGlhbGl6ZSBmZWF0dXJlc1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwid2hhdHNhcHBJbml0aWFsaXplZFwiLCAoKSA9PiB7XG4gICAgLy8gU21hcnQgc3R1ZmYgaGVyZVxuICB9KTtcbn1cbiIsImltcG9ydCB7IHNldHVwS2V5Ym9hcmRMaXN0ZW5lcnMgfSBmcm9tIFwiLi9rZXlib2FyZExpc3RlbmVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVNob3J0Y3V0cygpIHtcbiAgLy8gV2FpdCB1dGlsIFdoYXRzQXBwIGJ1aWxkIHVwIHRoZSBpbnRlcmZhY2VcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIndoYXRzYXBwSW5pdGlhbGl6ZWRcIiwgKCkgPT4ge1xuICAgIHNldHVwS2V5Ym9hcmRMaXN0ZW5lcnMoKTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyBpc1VzZXJUeXBpbmcsIGdldEVsZW1lbnRCeVhwYXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7XG4gIHRyaWdnZXJOYXRpdmVTaG9ydGN1dCxcbiAgc2ltdWxhdGVLZXlQcmVzcyxcbn0gZnJvbSBcIi4uLy4uL3V0aWxzL2V2ZW50SGVscGVyc1wiO1xuaW1wb3J0IHsgcmVxdWVzdFNub296ZUZvcm0gfSBmcm9tIFwiLi4vLi4vd2hhdHNhcHBTdG9yZS9yZXF1ZXN0U25vb3plRm9ybVwiO1xuaW1wb3J0IHsgcmVxdWVzdE1vdmVUb0Zvcm0gfSBmcm9tIFwiLi4vLi4vd2hhdHNhcHBTdG9yZS9yZXF1ZXN0TW92ZVRvRm9ybVwiO1xuaW1wb3J0IHtcbiAgZm9jdXNOZXh0Q2hhdCxcbiAgZm9jdXNOZXh0Q2hhdExpc3RlbmVyLFxufSBmcm9tIFwiLi4vLi4vd2hhdHNhcHBTdG9yZS9mb2N1c05leHRDaGF0XCI7XG5pbXBvcnQge1xuICBmb2N1c1ByZXZpb3VzQ2hhdCxcbiAgZm9jdXNQcmV2aW91c0NoYXRMaXN0ZW5lcixcbn0gZnJvbSBcIi4uLy4uL3doYXRzYXBwU3RvcmUvZm9jdXNQcmV2aW91c0NoYXRcIjtcbmltcG9ydCB7IGNvbXBvc2VGb2N1c0xpc3RlbmVyIH0gZnJvbSBcIi4uLy4uL3doYXRzYXBwU3RvcmUvY29tcG9zZUZvY3VzXCI7XG5pbXBvcnQge1xuICBmb2N1c0xhc3RNZXNzYWdlTGlzdGVuZXIsXG4gIGZvY3VzTGFzdE1lc3NhZ2UsXG59IGZyb20gXCIuLi8uLi93aGF0c2FwcFN0b3JlL2ZvY3VzTGFzdE1lc3NhZ2VcIjtcblxuY29uc3QgaXNNYWMgPSBuYXZpZ2F0b3IucGxhdGZvcm0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhcIm1hY1wiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwS2V5Ym9hcmRMaXN0ZW5lcnMoKSB7XG4gIGZvY3VzTmV4dENoYXRMaXN0ZW5lcigpO1xuICBmb2N1c1ByZXZpb3VzQ2hhdExpc3RlbmVyKCk7XG4gIGNvbXBvc2VGb2N1c0xpc3RlbmVyKCk7XG4gIGZvY3VzTGFzdE1lc3NhZ2VMaXN0ZW5lcigpO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJrZXlkb3duXCIsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoaXNVc2VyVHlwaW5nKCkpIHJldHVybjtcblxuICAgICAgaWYgKFxuICAgICAgICAoZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiIHx8IGV2ZW50LmtleSA9PT0gXCJqXCIpICYmXG4gICAgICAgICFldmVudC5tZXRhS2V5ICYmXG4gICAgICAgICFldmVudC5jdHJsS2V5ICYmXG4gICAgICAgICFldmVudC5hbHRLZXkgJiZcbiAgICAgICAgIWV2ZW50LnNoaWZ0S2V5XG4gICAgICApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGZvY3VzTmV4dENoYXQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAoZXZlbnQua2V5ID09PSBcIkFycm93VXBcIiB8fCBldmVudC5rZXkgPT09IFwia1wiKSAmJlxuICAgICAgICAhZXZlbnQubWV0YUtleSAmJlxuICAgICAgICAhZXZlbnQuY3RybEtleSAmJlxuICAgICAgICAhZXZlbnQuYWx0S2V5ICYmXG4gICAgICAgICFldmVudC5zaGlmdEtleVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBmb2N1c1ByZXZpb3VzQ2hhdCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdHJ1ZVxuICApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJrZXlkb3duXCIsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIiAmJlxuICAgICAgICAhZXZlbnQubWV0YUtleSAmJlxuICAgICAgICAhZXZlbnQuY3RybEtleSAmJlxuICAgICAgICAhZXZlbnQuYWx0S2V5ICYmXG4gICAgICAgICFldmVudC5zaGlmdEtleVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgYWN0aXZlRWxlbWVudCAmJlxuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gXCJESVZcIiAmJlxuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpID09PSBcInRydWVcIlxuICAgICAgICApIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGZvY3VzTGFzdE1lc3NhZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdHJ1ZVxuICApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJrZXlkb3duXCIsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoaXNVc2VyVHlwaW5nKCkpIHJldHVybjtcbiAgICAgIGlmIChcbiAgICAgICAgZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiZcbiAgICAgICAgIWV2ZW50Lm1ldGFLZXkgJiZcbiAgICAgICAgIWV2ZW50LmN0cmxLZXkgJiZcbiAgICAgICAgIWV2ZW50LmFsdEtleSAmJlxuICAgICAgICAhZXZlbnQuc2hpZnRLZXlcbiAgICAgICkge1xuICAgICAgICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICdkaXZbY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiXS54MWh4MGVncC54NmlrbThyLngxb2RqdzBmLngxazZyY3E3Lng2cHJ4eGY6bm90KC54MXdoajV2KSdcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKG1lc3NhZ2VJbnB1dCkge1xuICAgICAgICAgIG1lc3NhZ2VJbnB1dC5mb2N1cygpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRydWVcbiAgKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwia2V5ZG93blwiLFxuICAgIChldmVudCkgPT4ge1xuICAgICAgaWYgKGlzVXNlclR5cGluZygpKSByZXR1cm47XG5cbiAgICAgIGlmIChcbiAgICAgICAgZXZlbnQua2V5ID09PSBcImNcIiAmJlxuICAgICAgICAhZXZlbnQubWV0YUtleSAmJlxuICAgICAgICAhZXZlbnQuY3RybEtleSAmJlxuICAgICAgICAhZXZlbnQuYWx0S2V5ICYmXG4gICAgICAgICFldmVudC5zaGlmdEtleVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0cmlnZ2VyTmF0aXZlU2hvcnRjdXQoe1xuICAgICAgICAgIGtleTogXCJuXCIsXG4gICAgICAgICAgY29kZTogXCJLZXlOXCIsXG4gICAgICAgICAgY3RybEtleTogdHJ1ZSxcbiAgICAgICAgICBhbHRLZXk6ICFpc01hYyxcbiAgICAgICAgICBzaGlmdEtleTogZmFsc2UsXG4gICAgICAgICAgbWV0YUtleTogaXNNYWMsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgdHJ1ZVxuICApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJrZXlkb3duXCIsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoaXNVc2VyVHlwaW5nKCkpIHJldHVybjtcblxuICAgICAgaWYgKFxuICAgICAgICBldmVudC5rZXkgPT09IFwiL1wiICYmXG4gICAgICAgICFldmVudC5tZXRhS2V5ICYmXG4gICAgICAgICFldmVudC5jdHJsS2V5ICYmXG4gICAgICAgICFldmVudC5hbHRLZXkgJiZcbiAgICAgICAgIWV2ZW50LnNoaWZ0S2V5XG4gICAgICApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRyaWdnZXJOYXRpdmVTaG9ydGN1dCh7XG4gICAgICAgICAga2V5OiBcImtcIixcbiAgICAgICAgICBjb2RlOiBcIktleUtcIixcbiAgICAgICAgICBjdHJsS2V5OiBmYWxzZSxcbiAgICAgICAgICBhbHRLZXk6ICFpc01hYyxcbiAgICAgICAgICBzaGlmdEtleTogZmFsc2UsXG4gICAgICAgICAgbWV0YUtleTogaXNNYWMsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgdHJ1ZVxuICApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJrZXlkb3duXCIsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoaXNVc2VyVHlwaW5nKCkpIHJldHVybjtcblxuICAgICAgaWYgKFxuICAgICAgICBldmVudC5rZXkgPT09IFwiZVwiICYmXG4gICAgICAgICFldmVudC5tZXRhS2V5ICYmXG4gICAgICAgICFldmVudC5jdHJsS2V5ICYmXG4gICAgICAgICFldmVudC5hbHRLZXkgJiZcbiAgICAgICAgIWV2ZW50LnNoaWZ0S2V5XG4gICAgICApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRyaWdnZXJOYXRpdmVTaG9ydGN1dCh7XG4gICAgICAgICAga2V5OiBcImVcIixcbiAgICAgICAgICBjb2RlOiBcIktleUVcIixcbiAgICAgICAgICBjdHJsS2V5OiB0cnVlLFxuICAgICAgICAgIGFsdEtleTogIWlzTWFjLFxuICAgICAgICAgIHNoaWZ0S2V5OiB0cnVlLFxuICAgICAgICAgIG1ldGFLZXk6IGlzTWFjLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRydWVcbiAgKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwia2V5ZG93blwiLFxuICAgIChldmVudCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBldmVudC5rZXkgPT09IFwiRW50ZXJcIiAmJlxuICAgICAgICBldmVudC5tZXRhS2V5ICYmXG4gICAgICAgICFldmVudC5jdHJsS2V5ICYmXG4gICAgICAgICFldmVudC5hbHRLZXkgJiZcbiAgICAgICAgZXZlbnQuc2hpZnRLZXlcbiAgICAgICkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBHZXQgdGhlIG1lc3NhZ2UgaW5wdXQgZWxlbWVudFxuICAgICAgICBjb25zdCBtZXNzYWdlSW5wdXQgPSBnZXRFbGVtZW50QnlYcGF0aChcbiAgICAgICAgICBgLy8qW0BpZD1cIm1haW5cIl0vZm9vdGVyL2RpdlsxXS9kaXYvc3BhblsyXS9kaXYvZGl2WzJdL2RpdlsxXS9kaXYvZGl2YFxuICAgICAgICApO1xuICAgICAgICBpZiAobWVzc2FnZUlucHV0KSB7XG4gICAgICAgICAgLy8gU2ltdWxhdGUgRW50ZXIga2V5IHByZXNzIHRvIHNlbmQgdGhlIG1lc3NhZ2VcbiAgICAgICAgICBzaW11bGF0ZUtleVByZXNzKG1lc3NhZ2VJbnB1dCwgXCJFbnRlclwiKTtcblxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gQXJjaGl2ZSB0aGUgY2hhdFxuICAgICAgICAgICAgdHJpZ2dlck5hdGl2ZVNob3J0Y3V0KHtcbiAgICAgICAgICAgICAga2V5OiBcImVcIixcbiAgICAgICAgICAgICAgY29kZTogXCJLZXlFXCIsXG4gICAgICAgICAgICAgIGN0cmxLZXk6IHRydWUsXG4gICAgICAgICAgICAgIGFsdEtleTogIWlzTWFjLFxuICAgICAgICAgICAgICBzaGlmdEtleTogdHJ1ZSxcbiAgICAgICAgICAgICAgbWV0YUtleTogaXNNYWMsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdHJpZ2dlck5hdGl2ZVNob3J0Y3V0KHtcbiAgICAgICAgICAgICAga2V5OiBcIkVzY2FwZVwiLFxuICAgICAgICAgICAgICBjb2RlOiBcIktleUVzY2FwZVwiLFxuICAgICAgICAgICAgICBjdHJsS2V5OiBmYWxzZSxcbiAgICAgICAgICAgICAgYWx0S2V5OiBmYWxzZSxcbiAgICAgICAgICAgICAgc2hpZnRLZXk6IGZhbHNlLFxuICAgICAgICAgICAgICBtZXRhS2V5OiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRydWVcbiAgKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwia2V5ZG93blwiLFxuICAgIChldmVudCkgPT4ge1xuICAgICAgaWYgKGlzVXNlclR5cGluZygpKSByZXR1cm47XG5cbiAgICAgIGlmIChcbiAgICAgICAgZXZlbnQua2V5ID09PSBcInVcIiAmJlxuICAgICAgICAhZXZlbnQubWV0YUtleSAmJlxuICAgICAgICAhZXZlbnQuY3RybEtleSAmJlxuICAgICAgICAhZXZlbnQuYWx0S2V5ICYmXG4gICAgICAgICFldmVudC5zaGlmdEtleVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIC8vIE1hcmsgcmVhZC91bnJlYWRcbiAgICAgICAgdHJpZ2dlck5hdGl2ZVNob3J0Y3V0KHtcbiAgICAgICAgICBrZXk6IFwidVwiLFxuICAgICAgICAgIGNvZGU6IFwiS2V5VVwiLFxuICAgICAgICAgIGN0cmxLZXk6IHRydWUsXG4gICAgICAgICAgYWx0S2V5OiAhaXNNYWMsXG4gICAgICAgICAgc2hpZnRLZXk6IHRydWUsXG4gICAgICAgICAgbWV0YUtleTogaXNNYWMsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgdHJ1ZVxuICApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJrZXlkb3duXCIsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoaXNVc2VyVHlwaW5nKCkpIHJldHVybjtcblxuICAgICAgaWYgKFxuICAgICAgICBldmVudC5rZXkgPT09IFwiaFwiICYmXG4gICAgICAgICFldmVudC5tZXRhS2V5ICYmXG4gICAgICAgICFldmVudC5jdHJsS2V5ICYmXG4gICAgICAgICFldmVudC5hbHRLZXkgJiZcbiAgICAgICAgIWV2ZW50LnNoaWZ0S2V5XG4gICAgICApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHJlcXVlc3RTbm9vemVGb3JtKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB0cnVlXG4gICk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImtleWRvd25cIixcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChpc1VzZXJUeXBpbmcoKSkgcmV0dXJuO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50LmtleSA9PT0gXCJ2XCIgJiZcbiAgICAgICAgIWV2ZW50Lm1ldGFLZXkgJiZcbiAgICAgICAgIWV2ZW50LmN0cmxLZXkgJiZcbiAgICAgICAgIWV2ZW50LmFsdEtleSAmJlxuICAgICAgICAhZXZlbnQuc2hpZnRLZXlcbiAgICAgICkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmVxdWVzdE1vdmVUb0Zvcm0oKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRydWVcbiAgKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVNub296ZWRDaGF0c0NTUyhzbm9vemVkQ2hhdHMpIHtcbiAgbGV0IGNzcyA9IFwiXCI7XG5cbiAgaWYgKHNub296ZWRDaGF0cykge1xuICAgIHNub296ZWRDaGF0cy5mb3JFYWNoKChzbm9vemVkQ2hhdCkgPT4ge1xuICAgICAgY3NzICs9IGBcbiAgICAgIC54MTBsNnRxay54aDh5ZWozLngxZzQyZmN2OmhhcyhzcGFuW3RpdGxlKj1cIiR7c25vb3plZENoYXQuY2hhdFVzZXJuYW1lfVwiXSkgZGl2Ll9hazhsIGRpdi5fYWs4aiBkaXYuX2FrOGkgc3BhbjpudGgtY2hpbGQoMyk6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJ3NjaGVkdWxlJztcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBTeW1ib2xzIE91dGxpbmVkJztcbiAgICAgICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XG4gICAgICAgICAgXCJGSUxMXCIgMSxcbiAgICAgICAgICBcIndnaHRcIiA0MDAsXG4gICAgICAgICAgXCJHUkFEXCIgMCxcbiAgICAgICAgICBcIm9wc3pcIiAyNDtcbiAgICAgICAgY29sb3I6IHZhcigtLWljb24tbGlnaHRlcik7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICB9XG5cbiAgICAgIC54MTBsNnRxay54aDh5ZWozLngxZzQyZmN2OmhhcyhzcGFuW3RpdGxlKj1cIiR7c25vb3plZENoYXQuY2hhdFVzZXJuYW1lfVwiXSk6aG92ZXIgZGl2Ll9hazhsIGRpdi5fYWs4aiBkaXYuX2FrOGkgc3BhbjpudGgtY2hpbGQoMyk6OmFmdGVyLFxuICAgICAgLngxMGw2dHFrLnhoOHllajMueDFnNDJmY3Y6aGFzKHNwYW5bdGl0bGUqPVwiJHtzbm9vemVkQ2hhdC5jaGF0VXNlcm5hbWV9XCJdKTpoYXMoLl9hazcyLl9hazczLl9hazdwKSBkaXYuX2FrOGwgZGl2Ll9hazhqIGRpdi5fYWs4aSBzcGFuOm50aC1jaGlsZCgzKTo6YWZ0ZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRlcyB0aGUgcHNldWRvLWVsZW1lbnQgd2hlbiB0aGUgcGFyZW50IGlzIGhvdmVyZWQgb3IgaGFzIHNwZWNpZmllZCBjbGFzc2VzICovXG4gICAgICB9XG5cbiAgICAgIC54MTBsNnRxay54aDh5ZWozLngxZzQyZmN2OmhhcyhzcGFuW3RpdGxlKj1cIiR7c25vb3plZENoYXQuY2hhdFVzZXJuYW1lfVwiXSkgZGl2Ll9hazhsIGRpdi5fYWs4aiBkaXYuX2FrOGkgc3BhbjpudGgtY2hpbGQoMykgPiAucmVtaW5kZXJCdG4gPiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XG4gICAgICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxuICAgICAgICAgIFwiRklMTFwiIDEsXG4gICAgICAgICAgXCJ3Z2h0XCIgNDAwLFxuICAgICAgICAgIFwiR1JBRFwiIDAsXG4gICAgICAgICAgXCJvcHN6XCIgMjQ7XG4gICAgICB9XG4gICAgYDtcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBzdHlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic25vb3plZENoYXRzQ2x1ZXNcIik7XG4gIGlmICghc3R5bGUpIHtcbiAgICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICBzdHlsZS5pZCA9IFwic25vb3plZENoYXRzQ2x1ZXNcIjtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHN0eWxlLmlubmVySFRNTCA9IGNzcztcbn1cbiIsImltcG9ydCB7IGdldEVsZW1lbnRCeVhwYXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IG5hdkJhckl0ZW0gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9uYXZCYXJJdGVtXCI7XG5pbXBvcnQgeyBjaGF0QWN0aW9uQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2hhdEFjdGlvbkJ1dHRvblwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVVuc25vb3plZCB9IGZyb20gXCIuL3Vuc25vb3plQ2hhdFwiO1xuaW1wb3J0IHsgc25vb3plRm9ybSB9IGZyb20gXCIuL3Nub296ZUZvcm1cIjtcbmltcG9ydCB7IGxvYWRTbm9vemVkQ2hhdHNGcm9tU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IHNub296ZWRDaGF0c0RyYXdlciB9IGZyb20gXCIuL3Nub296ZWRDaGF0c0RyYXdlclwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVTbm9vemVkQ2hhdHNDU1MgfSBmcm9tIFwiLi9jbHVlc1wiO1xuaW1wb3J0IHsgcmVxdWVzdFNub296ZUZvcm1MaXN0ZW5lciB9IGZyb20gXCIuLi8uLi93aGF0c2FwcFN0b3JlL3JlcXVlc3RTbm9vemVGb3JtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplU25vb3plZCgpIHtcbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgIGFjdGlvbjogXCJjaGVja0R1ZUFsYXJtc1wiLFxuICB9KTtcbiAgbG9hZFNub296ZWRDaGF0c0Zyb21TdG9yYWdlKChsb2FkZWRTbm9vemVkQ2hhdHMpID0+IHtcbiAgICBnZW5lcmF0ZVNub296ZWRDaGF0c0NTUyhsb2FkZWRTbm9vemVkQ2hhdHMpO1xuICB9KTtcblxuICAvLyBXYWl0IHVudGlsIFdoYXRzQXBwIGJ1aWxkcyB1cCB0aGUgaW50ZXJmYWNlXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGF0c2FwcEluaXRpYWxpemVkXCIsICgpID0+IHtcbiAgICBpbml0aWFsaXplVW5zbm9vemVkKCk7XG5cbiAgICAvLyBBZGQgdGhlIFNub296ZWQgaWNvbiBhdCBXaGF0c0FwcCBzaWRlbmF2IG5hdmlnYXRpb24uXG4gICAgY29uc3Qgc2lkZW5hdiA9IGdldEVsZW1lbnRCeVhwYXRoKFxuICAgICAgYC8vKltAaWQ9XCJhcHBcIl0vZGl2L2RpdlsyXS9oZWFkZXIvZGl2L2Rpdi9kaXYvZGl2L3NwYW4vZGl2L2RpdlsxXWBcbiAgICApO1xuXG4gICAgc2lkZW5hdi5pbnNlcnRDaGlsZEF0SW5kZXgoXG4gICAgICBuYXZCYXJJdGVtKFwic25vb3plZENoYXRzXCIsIFwiU25vb3plZFwiLCBcInNjaGVkdWxlXCIsICgpID0+XG4gICAgICAgIHNub296ZWRDaGF0c0RyYXdlcigpXG4gICAgICApLFxuICAgICAgMVxuICAgICk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhdE9uSG92ZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IGNoYXQsIGNoYXRFbGVtZW50IH0gPSBldmVudC5kZXRhaWw7XG5cbiAgICAgIC8vIFNldHVwIGEgTXV0YXRpb25PYnNlcnZlciB0aGF0IGFkZHMgQ2hhdCBhY3Rpb24gYnV0dG9ucyB3aGlsZSBob3ZlcmluZy5cbiAgICAgIGNvbnN0IGNoYXRCdXR0b25zID0gY2hhdEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCJbcm9sZT0nZ3JpZGNlbGwnXS5fYWs4aSA+IHNwYW46bnRoLWNoaWxkKDMpXCJcbiAgICAgICk7XG4gICAgICBpZiAoY2hhdEJ1dHRvbnMpIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdSZW1pbmRlckJ0biA9IGNoYXRCdXR0b25zLnF1ZXJ5U2VsZWN0b3IoXCIucmVtaW5kZXJCdG5cIik7XG4gICAgICAgIGNvbnN0IG5ld1JlbWluZGVyQnRuID0gY2hhdEFjdGlvbkJ1dHRvbihcbiAgICAgICAgICBcInNjaGVkdWxlXCIsXG4gICAgICAgICAgKCkgPT4gc25vb3plRm9ybShjaGF0KSxcbiAgICAgICAgICBcInJlbWluZGVyQnRuXCIsXG4gICAgICAgICAgXCJSZW1pbmQgTWVcIixcbiAgICAgICAgICBcIkhcIlxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1JlbWluZGVyQnRuKSB7XG4gICAgICAgICAgY2hhdEJ1dHRvbnMucmVwbGFjZUNoaWxkKG5ld1JlbWluZGVyQnRuLCBleGlzdGluZ1JlbWluZGVyQnRuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGF0QnV0dG9ucy5pbnNlcnRDaGlsZEF0SW5kZXgobmV3UmVtaW5kZXJCdG4sIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXF1ZXN0U25vb3plRm9ybUxpc3RlbmVyKCk7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHRoZSByZXNwb25zZSBmcm9tIHRoZSBpbmplY3RlZCBzY3JpcHRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50LmRhdGEgJiZcbiAgICAgICAgZXZlbnQuZGF0YS50eXBlID09PSBcIk9QRU5fU05PT1pFX0ZPUk1cIiAmJlxuICAgICAgICBldmVudC5kYXRhLmNoYXRJZFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGNoYXRJZCA9IGV2ZW50LmRhdGEuY2hhdElkO1xuICAgICAgICBjb25zdCB1c2VyTmFtZSA9IGV2ZW50LmRhdGEudXNlck5hbWU7XG4gICAgICAgIHNub296ZUZvcm0oeyBjaGF0SWQ6IGNoYXRJZCwgY2hhdFVzZXJuYW1lOiB1c2VyTmFtZSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgeyByZW1pbmRlckNoYXRJdGVtIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmVtaW5kZXJDaGF0SXRlbVwiO1xuaW1wb3J0IHsgZm9ybWF0VGltZXN0YW1wIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcbmltcG9ydCB7IGFyY2hpdmVDaGF0IH0gZnJvbSBcIi4uLy4uL3doYXRzYXBwU3RvcmUvYXJjaGl2ZUNoYXRcIjtcbmltcG9ydCB7IGdldENoYXREZXRhaWxzIH0gZnJvbSBcIi4uLy4uL3doYXRzYXBwU3RvcmUvZ2V0Q2hhdERldGFpbHNcIjtcbmltcG9ydCB7IGdlbmVyYXRlU25vb3plZENoYXRzQ1NTIH0gZnJvbSBcIi4vY2x1ZXNcIjtcbmltcG9ydCB7IGxvYWRTbm9vemVkQ2hhdHNGcm9tU3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuLy8gRnVuY3Rpb24gdG8gc2VuZCB0aGUgc25vb3plIHJlcXVlc3QgdG8gdGhlIGJhY2tncm91bmQgc2NyaXB0XG4vLyBUaGUgYmFja2dyb3VuZCBzY3JpcHQgaW4gaW4gY2hhcmdlIG9mIHNldHRpbmcgdXAgdGhlIGNocm9tZSBhbGFybSB0aGF0IGZpcmVzIGV2ZW50c1xuLy8gc28gY29udGVudC1zY3JpcHQgZ2V0cyBub3RpY2VkIGFuZCBkbyBzdHVmZiB0aGVuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdFNub296ZShjaGF0LCBzbm9vemVUaW1lLCBzbm9vemVDb25kaXRpb24pIHtcbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoXG4gICAge1xuICAgICAgYWN0aW9uOiBcInNub296ZUNoYXRcIixcbiAgICAgIGNoYXRJZDogY2hhdC5jaGF0SWQsXG4gICAgICBjaGF0VXNlcm5hbWU6IGNoYXQuY2hhdFVzZXJuYW1lLFxuICAgICAgc25vb3plVGltZTogc25vb3plVGltZSxcbiAgICAgIHNub296ZUNvbmRpdGlvbjogc25vb3plQ29uZGl0aW9uLFxuICAgIH0sXG4gICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICBhcmNoaXZlQ2hhdChjaGF0LmNoYXRJZCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHZpc3VhbCBjbHVlIG9mIGFjdGl2ZSByZW1pbmRlclxuICAgICAgICBsb2FkU25vb3plZENoYXRzRnJvbVN0b3JhZ2UoKGxvYWRlZFNub296ZWRDaGF0cykgPT4ge1xuICAgICAgICAgIGdlbmVyYXRlU25vb3plZENoYXRzQ1NTKGxvYWRlZFNub296ZWRDaGF0cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNub296ZWRDaGF0c0RyYXdlckZvY3VzZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuY3VzdG9tTmF2QmFySXRlbS5hY3RpdmVbZGF0YS1kcmF3ZXItaWQ9XCJzbm9vemVkQ2hhdHNcIl1gXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHNub296ZWRDaGF0c0RyYXdlckZvY3VzZWQpIHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZ1JlbWluZGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLnJlbWluZGVyQ2hhdEl0ZW1bZGF0YS1jaGF0LWlkPVwiJHtjaGF0LmNoYXRJZH1cIl1gXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChleGlzdGluZ1JlbWluZGVyRWxlbWVudCkge1xuICAgICAgICAgICAgLy8gQXNzdW1pbmcgcmVtaW5kZXJDaGF0SXRlbSBpcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBIVE1MIHN0cmluZ1xuICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudEhUTUwgPSByZW1pbmRlckNoYXRJdGVtKFxuICAgICAgICAgICAgICBjaGF0LmNoYXRJZCxcbiAgICAgICAgICAgICAgY2hhdC5jaGF0VXNlcm5hbWUsXG4gICAgICAgICAgICAgIGBSZW1pbmQgbWU6ICR7Zm9ybWF0VGltZXN0YW1wKHNub296ZVRpbWUpfWBcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIHRlbXBvcmFyeSBjb250YWluZXIgdG8gcGFyc2UgdGhlIEhUTUwgc3RyaW5nXG4gICAgICAgICAgICBjb25zdCB0ZW1wQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRlbXBDb250YWluZXIuaW5uZXJIVE1MID0gbmV3RWxlbWVudEhUTUw7XG5cbiAgICAgICAgICAgIC8vIFJlcGxhY2UgdGhlIGV4aXN0aW5nIGVsZW1lbnQgd2l0aCB0aGUgbmV3IG9uZVxuICAgICAgICAgICAgZXhpc3RpbmdSZW1pbmRlckVsZW1lbnQucmVwbGFjZVdpdGgoXG4gICAgICAgICAgICAgIHRlbXBDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGRcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGdldENoYXREZXRhaWxzKGNoYXQuY2hhdElkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc25vb3plIGNoYXQuXCIpO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn1cbiIsImltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2RhbFwiO1xuaW1wb3J0IHsgcmVxdWVzdFNub296ZSB9IGZyb20gXCIuL3Nub296ZUNoYXRcIjtcbmltcG9ydCB7IHNub296ZWRDaGF0cyB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IHJlcXVlc3RVbnNub296ZSB9IGZyb20gXCIuL3Vuc25vb3plQ2hhdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc25vb3plRm9ybShjaGF0KSB7XG4gIC8vIEZpbmQgZXhpc3RpbmcgcmVtaW5kZXIgZm9yIHRoZSBjaGF0XG4gIGNvbnN0IGV4aXN0aW5nUmVtaW5kZXIgPVxuICAgIHNub296ZWRDaGF0cyAmJlxuICAgIHNub296ZWRDaGF0cy5maW5kKChyZW1pbmRlcikgPT4gcmVtaW5kZXIuY2hhdElkID09PSBjaGF0LmNoYXRJZCk7XG5cbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICBsZXQgaW5pdGlhbEN1c3RvbURhdGUgPSBcIlwiO1xuICBsZXQgaW5pdGlhbEN1c3RvbVRpbWUgPSBcIlwiO1xuICBsZXQgc25vb3plQ29uZGl0aW9uID0gXCJyZWdhcmRsZXNzXCI7IC8vIERlZmF1bHQgY29uZGl0aW9uXG5cbiAgaWYgKGV4aXN0aW5nUmVtaW5kZXIgJiYgZXhpc3RpbmdSZW1pbmRlci51bnRpbCkge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IE51bWJlcihleGlzdGluZ1JlbWluZGVyLnVudGlsKTtcbiAgICBjb25zdCByZW1pbmRlckRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xuXG4gICAgLy8gRXh0cmFjdCBsb2NhbCBkYXRlIGFuZCB0aW1lIGNvbXBvbmVudHNcbiAgICBjb25zdCBsb2NhbFllYXIgPSByZW1pbmRlckRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBsb2NhbE1vbnRoID0gcmVtaW5kZXJEYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgbG9jYWxEYXkgPSByZW1pbmRlckRhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IGxvY2FsSG91cnMgPSByZW1pbmRlckRhdGUuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBsb2NhbE1pbnV0ZXMgPSByZW1pbmRlckRhdGUuZ2V0TWludXRlcygpO1xuXG4gICAgLy8gRm9ybWF0IGFzIFlZWVktTU0tREQgYW5kIEhIOk1NXG4gICAgaW5pdGlhbEN1c3RvbURhdGUgPSBgJHtsb2NhbFllYXJ9LSR7U3RyaW5nKGxvY2FsTW9udGggKyAxKS5wYWRTdGFydChcbiAgICAgIDIsXG4gICAgICBcIjBcIlxuICAgICl9LSR7U3RyaW5nKGxvY2FsRGF5KS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgICBpbml0aWFsQ3VzdG9tVGltZSA9IGAke1N0cmluZyhsb2NhbEhvdXJzKS5wYWRTdGFydCgyLCBcIjBcIil9OiR7U3RyaW5nKFxuICAgICAgbG9jYWxNaW51dGVzXG4gICAgKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcblxuICAgIHNub296ZUNvbmRpdGlvbiA9IGV4aXN0aW5nUmVtaW5kZXIuc25vb3plQ29uZGl0aW9uO1xuICB9XG5cbiAgbGV0IGxhdGVyVG9kYXlUaW1lO1xuICBsZXQgaGFzTGF0ZXJUb2RheU9wdGlvbiA9IHRydWU7XG5cbiAgLy8gRGV0ZXJtaW5lIFwiTGF0ZXIgdG9kYXlcIiB0aW1lLCByb3VuZGluZyB0byB0aGUgbmV4dCBob3VyXG4gIGlmIChub3cuZ2V0SG91cnMoKSA8IDE4KSB7XG4gICAgbGF0ZXJUb2RheVRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIGxhdGVyVG9kYXlUaW1lLnNldEhvdXJzKG5vdy5nZXRIb3VycygpICsgMiwgMCwgMCwgMCk7IC8vIFJvdW5kIHRvIHRoZSBuZXh0IGhvdXJcbiAgfSBlbHNlIHtcbiAgICBoYXNMYXRlclRvZGF5T3B0aW9uID0gZmFsc2U7XG4gIH1cblxuICAvLyBGdW5jdGlvbiB0byBmb3JtYXQgdGltZSBhcyBcIjY6MDAgUE1cIlxuICBmdW5jdGlvbiBmb3JtYXRUaW1lKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHsgaG91cjogXCJudW1lcmljXCIsIG1pbnV0ZTogXCIyLWRpZ2l0XCIgfSk7XG4gIH1cblxuICAvLyBGdW5jdGlvbiB0byBmb3JtYXQgdG9tb3Jyb3cncyBkYXRlIGFzIFwiVEhVLCA4OjAwIEFNXCJcbiAgZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkVG9tb3Jyb3coKSB7XG4gICAgY29uc3QgZGF5cyA9IFtcIlNVTlwiLCBcIk1PTlwiLCBcIlRVRVwiLCBcIldFRFwiLCBcIlRIVVwiLCBcIkZSSVwiLCBcIlNBVFwiXTtcbiAgICBjb25zdCB0b21vcnJvdyA9IG5ldyBEYXRlKFxuICAgICAgbm93LmdldEZ1bGxZZWFyKCksXG4gICAgICBub3cuZ2V0TW9udGgoKSxcbiAgICAgIG5vdy5nZXREYXRlKCkgKyAxLFxuICAgICAgOCxcbiAgICAgIDAsXG4gICAgICAwXG4gICAgKTtcbiAgICByZXR1cm4gYCR7ZGF5c1t0b21vcnJvdy5nZXREYXkoKV19LCA4OjAwIEFNYDtcbiAgfVxuXG4gIGNvbnN0IGxhdGVyVG9kYXlPcHRpb25IVE1MID0gbGF0ZXJUb2RheVRpbWVcbiAgICA/IGBcbiAgICA8bGFiZWwgY2xhc3M9XCJvcHRpb25cIj5cbiAgICAgIDxzcGFuIHN0eWxlPVwiZmxleDogMTtcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzbm9vemVPcHRpb25cIiB2YWx1ZT1cImxhdGVyVG9kYXlcIj5cbiAgICAgICAgTGF0ZXIgdG9kYXlcbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuPlxuICAgICAgICAke2Zvcm1hdFRpbWUobGF0ZXJUb2RheVRpbWUpfVxuICAgICAgPC9zcGFuPlxuICAgIDwvbGFiZWw+XG4gIGBcbiAgICA6IFwiXCI7XG5cbiAgY29uc3Qgc25vb3plRm9ybUNvbnRlbnQgPSBgXG4gICAgPGZvcm0+XG4gICAgICA8ZGl2IGNsYXNzPVwieDEybHF1cDkgeDFvMWt4MDhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLW1kIHg5ZjYxOSB4MXA1b3E4alwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibW9kYWwtdGl0bGUgeDF3N3NkanEgeDFmY3R5MHVcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+XG4gICAgICAgICAgICAgICAgc2NoZWR1bGVcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICBSZW1pbmQgbWVcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSB4ZHQ1eXRmIHh1Ym51eXEgeHcyY3N4YyB4MW9kancwZiB4bzZ3bTM2IHgxaWVna2E1IHhjNTMwdTAgeDh6eDRxdiB4MWdjbXdseSB4MTdzeTZ5dSB4d3Nha2p3IHgxdnoxc3NpIHh4YmIxcnEgeHd4YzQxa1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNub296ZS1vcHRpb25zXCI+XG4gICAgICAgICAgICAgICR7bGF0ZXJUb2RheU9wdGlvbkhUTUx9XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm9wdGlvblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZmxleDogMTtcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic25vb3plT3B0aW9uXCIgdmFsdWU9XCJ0b21vcnJvd01vcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAgIFRvbW9ycm93XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgJHtnZXRGb3JtYXR0ZWRUb21vcnJvdygpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwib3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJmbGV4OiAxO1wiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzbm9vemVPcHRpb25cIiB2YWx1ZT1cImN1c3RvbVwiIGlkPVwiY3VzdG9tUmFkaW9cIiAke1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsQ3VzdG9tRGF0ZSA/IFwiY2hlY2tlZFwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgIEN1c3RvbVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImN1c3RvbURhdGVcIiBpZD1cImN1c3RvbURhdGVcIiB2YWx1ZT1cIiR7aW5pdGlhbEN1c3RvbURhdGV9XCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRpbWVcIiBuYW1lPVwiY3VzdG9tVGltZVwiIGlkPVwiY3VzdG9tVGltZVwiIHZhbHVlPVwiJHtpbml0aWFsQ3VzdG9tVGltZX1cIj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJ4Nzh6dW01IHg4aGhsNXQgeHA0MDU0ciB4dXh3MWZ0IHgxMjNqM2N3IHgxZ3RmcmsxIHgxNTZnbzE3IHgxc3FrOGdlXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cIngxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeGV1dWdsaSB4Mmx3bjFqIHgxbmh2Y3cxIHgxcTBnM25wIHh1azMwNzcgeDQwaGgzZVwiIHN0eWxlPVwiZmxleDogMTtcIj5cbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cIngxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyBzbm9vemVDb25kaXRpb25TZWxlY3RcIiBuYW1lPVwic25vb3plQ29uZGl0aW9uXCI+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJlZ2FyZGxlc3NcIiAke1xuICAgICAgICAgICAgc25vb3plQ29uZGl0aW9uID09PSBcInJlZ2FyZGxlc3NcIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcbiAgICAgICAgICB9PlJlZ2FyZGxlc3M8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaWZOb1JlcGx5XCIgJHtcbiAgICAgICAgICAgIHNub296ZUNvbmRpdGlvbiA9PT0gXCJpZk5vUmVwbHlcIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcbiAgICAgICAgICB9PklmIG5vIHJlcGx5PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwieDEzYTZidmwgeDFjNHZ6NGYgeHM4M20wayB4ZGw3Mmo5IHgxZzc3c2M3IHg3OHp1bTUgeG96cWl3MyB4MW9hM3FvaCB4MTJmazRwOCB4ZXV1Z2xpIHgybHduMWogeDFuaHZjdzEgeDFxMGczbnAgeHVrMzA3NyB4NDBoaDNlXCJcbiAgICAgICAgPlxuICAgICAgICAgICR7XG4gICAgICAgICAgICBleGlzdGluZ1JlbWluZGVyXG4gICAgICAgICAgICAgID8gYFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwicmVtb3ZlXCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgY2xhc3M9XCJ4MXNyODg1MyB4ODg5a25vIHgxYThsc2pjIHgxbjJvbnI2IHhrNTB5c24geDFmNmtudG4geHllc241bSB4MXoxMW5vNSB4ank1bTFnIHgxbW53YnA2IHg0cGI1djYgeDE3OHh0OHogeG04MXZzNCB4c28wMzFsIHh5ODBjbHYgeDEzZnV2MjAgeHUzajViMyB4MXEwcThtNSB4MjZ1N3FpIHgxdjhwOTNmIHhvZ2IwMGkgeDE2c3RxcmogeDFmdHIza20geDFobDhpa3IgeGZhZ2dodyB4OWR5cjE5IHg5bGN2bW4geGNqbDVuYSB4MWszeDNkYiB4dXh3MWZ0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwieDFjNHZ6NGYgeHM4M20wayB4ZGw3Mmo5IHgxZzc3c2M3IHg3OHp1bTUgeG96cWl3MyB4MW9hM3FvaCB4MTJmazRwOCB4ZXV1Z2xpIHgybHduMWogeGw1Nmo3ayB4MXEwZzNucCB4NnMwZG40XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwieDFjNHZ6NGYgeHM4M20wayB4ZGw3Mmo5IHgxZzc3c2M3IHg3OHp1bTUgeG96cWl3MyB4MW9hM3FvaCB4MTJmazRwOCB4M3BuYms4IHhmZXgwNmYgeGV1dWdsaSB4Mmx3bjFqIHhsNTZqN2sgeDFxMGczbnAgeDZzMGRuNFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJmbGV4LWdyb3c6IDFcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUmVtb3ZlXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9idXR0b24+IGBcbiAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGRhdGEtYWN0aW9uPVwic3VibWl0XCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgY2xhc3M9XCJ4ODg5a25vIHgxYThsc2pjIHhiYnhuMW4geHhicjZwbCB4MW4yb25yNiB4MXJnNW9odSB4azUweXNuIHgxZjZrbnRuIHh5ZXNuNW0geDF6MTFubzUgeGp5NW0xZyB4MW1ud2JwNiB4NHBiNXY2IHgxNzh4dDh6IHhtODF2czQgeHNvMDMxbCB4eTgwY2x2IHgxM2Z1djIwIHh1M2o1YjMgeDFxMHE4bTUgeDI2dTdxaSB4MXY4cDkzZiB4b2diMDBpIHgxNnN0cXJqIHgxZnRyM2ttIHgxaGw4aWtyIHhmYWdnaHcgeDlkeXIxOSB4OWxjdm1uIHhidGNlOHAgeDE0djBzbXAgeG84dWZzbyB4Y2psNW5hIHgxazN4M2RiIHh1eHcxZnQgeHY1MmF6aVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cIngxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeGV1dWdsaSB4Mmx3bjFqIHhsNTZqN2sgeDFxMGczbnAgeDZzMGRuNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cIngxYzR2ejRmIHhzODNtMGsgeGRsNzJqOSB4MWc3N3NjNyB4Nzh6dW01IHhvenFpdzMgeDFvYTNxb2ggeDEyZms0cDggeDNwbmJrOCB4ZmV4MDZmIHhldXVnbGkgeDJsd24xaiB4bDU2ajdrIHgxcTBnM25wIHg2czBkbjRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiZmxleC1ncm93OiAxXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE9LXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICBgO1xuXG4gIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKHtcbiAgICBtb2RhbENvbnRlbnQ6IHNub296ZUZvcm1Db250ZW50LFxuICAgIGZvcm1IYW5kbGVyOiBhc3luYyAoZm9ybURhdGEpID0+IHtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IGZvcm1EYXRhLmdldChcImZvcm1BY3Rpb25cIik7XG5cbiAgICAgIGlmIChhY3Rpb24gPT0gXCJzdWJtaXRcIikge1xuICAgICAgICBjb25zdCBzbm9vemVPcHRpb24gPSBmb3JtRGF0YS5nZXQoXCJzbm9vemVPcHRpb25cIik7XG4gICAgICAgIHNub296ZUNvbmRpdGlvbiA9IGZvcm1EYXRhLmdldChcInNub296ZUNvbmRpdGlvblwiKTtcbiAgICAgICAgbGV0IHNub296ZVRpbWU7XG5cbiAgICAgICAgaWYgKHNub296ZU9wdGlvbiA9PT0gXCJsYXRlclRvZGF5XCIgJiYgaGFzTGF0ZXJUb2RheU9wdGlvbikge1xuICAgICAgICAgIHNub296ZVRpbWUgPSBsYXRlclRvZGF5VGltZS5nZXRUaW1lKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc25vb3plT3B0aW9uID09PSBcInRvbW9ycm93TW9ybmluZ1wiKSB7XG4gICAgICAgICAgY29uc3QgdG9tb3Jyb3dNb3JuaW5nID0gbmV3IERhdGUoXG4gICAgICAgICAgICBub3cuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIG5vdy5nZXRNb250aCgpLFxuICAgICAgICAgICAgbm93LmdldERhdGUoKSArIDEsXG4gICAgICAgICAgICA4LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzbm9vemVUaW1lID0gdG9tb3Jyb3dNb3JuaW5nLmdldFRpbWUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChzbm9vemVPcHRpb24gPT09IFwiY3VzdG9tXCIpIHtcbiAgICAgICAgICBjb25zdCBjdXN0b21EYXRlID0gZm9ybURhdGEuZ2V0KFwiY3VzdG9tRGF0ZVwiKTtcbiAgICAgICAgICBjb25zdCBjdXN0b21UaW1lID0gZm9ybURhdGEuZ2V0KFwiY3VzdG9tVGltZVwiKTtcbiAgICAgICAgICBpZiAoY3VzdG9tRGF0ZSAmJiBjdXN0b21UaW1lKSB7XG4gICAgICAgICAgICBzbm9vemVUaW1lID0gbmV3IERhdGUoYCR7Y3VzdG9tRGF0ZX1UJHtjdXN0b21UaW1lfWApLmdldFRpbWUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgcHJvdmlkZSBib3RoIGRhdGUgYW5kIHRpbWUgZm9yIGN1c3RvbSBzbm9vemUuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIkludmFsaWQgc2VsZWN0aW9uLiBTbm9vemUgY2FuY2VsZWQuXCIpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB2YWxpZGF0aW9uIHRvIGNoZWNrIGlmIHNub296ZVRpbWUgaXMgaW4gdGhlIHBhc3RcbiAgICAgICAgaWYgKHNub296ZVRpbWUgPD0gRGF0ZS5ub3coKSkge1xuICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgXCJDYW5ub3Qgc2V0IGEgcmVtaW5kZXIgaW4gdGhlIHBhc3QuIFBsZWFzZSBjaG9vc2UgYSBmdXR1cmUgdGltZS5cIlxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJvY2VlZCB0byByZXF1ZXN0IHNub296ZSB3aXRoIHRoZSBjaG9zZW4gdGltZXN0YW1wXG4gICAgICAgIHJlcXVlc3RTbm9vemUoY2hhdCwgc25vb3plVGltZSwgc25vb3plQ29uZGl0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09IFwicmVtb3ZlXCIpIHtcbiAgICAgICAgcmVxdWVzdFVuc25vb3plKGNoYXQuY2hhdElkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7IC8vIEluZGljYXRlcyBzdWNjZXNzZnVsIGhhbmRsaW5nXG4gICAgfSxcbiAgfSk7XG5cbiAgbW9kYWwub3Blbk1vZGFsKCk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXN0b21EYXRlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VzdG9tUmFkaW9cIikuY2hlY2tlZCA9IHRydWU7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VzdG9tVGltZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1c3RvbVJhZGlvXCIpLmNoZWNrZWQgPSB0cnVlO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGZvcm1hdFRpbWVzdGFtcCB9IGZyb20gXCIuLi8uLi91dGlscy9kb21IZWxwZXJzXCI7XG5pbXBvcnQgeyBvcGVuRHJhd2VyTGVmdCB9IGZyb20gXCIuLi8uLi93aGF0c2FwcFN0b3JlL29wZW5EcmF3ZXJMZWZ0XCI7XG5pbXBvcnQgeyBsb2FkU25vb3plZENoYXRzRnJvbVN0b3JhZ2UsIHNub296ZWRDaGF0cyB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IGdldENoYXREZXRhaWxzIH0gZnJvbSBcIi4uLy4uL3doYXRzYXBwU3RvcmUvZ2V0Q2hhdERldGFpbHNcIjtcbmltcG9ydCB7IGRyYXdlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2RyYXdlclwiO1xuaW1wb3J0IHsgcmVtaW5kZXJDaGF0SXRlbSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JlbWluZGVyQ2hhdEl0ZW1cIjtcbmltcG9ydCB7IGdlbmVyYXRlU25vb3plZENoYXRzQ1NTIH0gZnJvbSBcIi4vY2x1ZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNub296ZWRDaGF0c0RyYXdlcigpIHtcbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgIGFjdGlvbjogXCJjaGVja0R1ZUFsYXJtc1wiLFxuICB9KTtcbiAgbG9hZFNub296ZWRDaGF0c0Zyb21TdG9yYWdlKChsb2FkZWRTbm9vemVkQ2hhdHMpID0+IHtcbiAgICBnZW5lcmF0ZVNub296ZWRDaGF0c0NTUyhsb2FkZWRTbm9vemVkQ2hhdHMpO1xuICB9KTtcblxuICBjb25zdCBjaGF0RWxlbWVudHMgPSBzbm9vemVkQ2hhdHNcbiAgICA/IHNub296ZWRDaGF0c1xuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS51bnRpbCAtIGIudW50aWwpXG4gICAgICAgIC5tYXAoKGNoYXQpID0+XG4gICAgICAgICAgcmVtaW5kZXJDaGF0SXRlbShcbiAgICAgICAgICAgIGNoYXQuY2hhdElkLFxuICAgICAgICAgICAgY2hhdC5jaGF0VXNlcm5hbWUsXG4gICAgICAgICAgICBgUmVtaW5kIG1lOiAke2Zvcm1hdFRpbWVzdGFtcChjaGF0LnVudGlsKX1gXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC5qb2luKFwiXCIpXG4gICAgOiBcIlwiO1xuXG4gIG9wZW5EcmF3ZXJMZWZ0KFxuICAgIGRyYXdlcihcIlJlbWluZGVyc1wiLCBjaGF0RWxlbWVudHMpLFxuICAgIGBzbm9vemVkQ2hhdHMgJHtzbm9vemVkQ2hhdHMubGVuZ3RofWBcbiAgKTtcblxuICAvLyBUaGlzIG1ha2UgYSByZXF1ZXN0IHRvIFdoYXRzQXBwIHRocm91Z2ggaW5qZWN0ZWQgc2NyaXB0c1xuICAvLyBhc2tzIGZvciBjaGF0IGRldGFpbHMgYW5kIHByaW50cyB0byB0aGUgdW5sb2FkZWQgY2hhdCBlbGVtZW50LlxuICBpZiAoc25vb3plZENoYXRzKSB7XG4gICAgc25vb3plZENoYXRzLmZvckVhY2goKGNoYXQpID0+IGdldENoYXREZXRhaWxzKGNoYXQuY2hhdElkKSk7XG4gIH1cbn1cbiIsImV4cG9ydCBsZXQgc25vb3plZENoYXRzID0gW107XG5leHBvcnQgZnVuY3Rpb24gc2V0U25vb3plZENoYXRzKHZhbCkge1xuICBzbm9vemVkQ2hhdHMgPSB2YWw7XG59XG5cbi8vIFNhdmUgc25vb3plZENoYXRzIHRvIHN0b3JhZ2VcbmV4cG9ydCBmdW5jdGlvbiBzYXZlU25vb3plZENoYXRzVG9TdG9yYWdlKHNub296ZWRDaGF0cykge1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBzbm9vemVkQ2hhdHM6IHNub296ZWRDaGF0cyB9KTtcbn1cblxuLy8gTG9hZCBzbm9vemVkQ2hhdHMgZnJvbSBzdG9yYWdlXG5leHBvcnQgZnVuY3Rpb24gbG9hZFNub296ZWRDaGF0c0Zyb21TdG9yYWdlKGNhbGxiYWNrKSB7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJzbm9vemVkQ2hhdHNcIl0sIChyZXN1bHQpID0+IHtcbiAgICBjb25zdCBsb2FkZWRTbm9vemVkQ2hhdHMgPSByZXN1bHQuc25vb3plZENoYXRzO1xuICAgIHNldFNub296ZWRDaGF0cyhsb2FkZWRTbm9vemVkQ2hhdHMpO1xuICAgIGNhbGxiYWNrKGxvYWRlZFNub296ZWRDaGF0cyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRTbm9vemVkQ2hhdHNGcm9tU3RvcmFnZSgpIHtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc25vb3plZENoYXRzOiBbXSB9KTtcbn1cbiIsImltcG9ydCB7IHVuYXJjaGl2ZUNoYXQgfSBmcm9tIFwiLi4vLi4vd2hhdHNhcHBTdG9yZS91bmFyY2hpdmVDaGF0XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVNub296ZWRDaGF0c0NTUyB9IGZyb20gXCIuL2NsdWVzXCI7XG5pbXBvcnQgeyBsb2FkU25vb3plZENoYXRzRnJvbVN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbi8vIEZ1bmN0aW9uIHRvIGNoZWNrIGFuZCBoYW5kbGUgZHVlIHNub296ZWQgY2hhdHNcbmZ1bmN0aW9uIGNoZWNrRHVlU25vb3plZENoYXRzKCkge1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoXCJzbm9vemVkQ2hhdHNcIiwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgIGNvbnN0IG5vdyA9IE51bWJlcihEYXRlLm5vdygpKTsgLy8gR2V0IHRoZSBjdXJyZW50IHRpbWUgaW4gbWlsbGlzZWNvbmRzXG4gICAgY29uc3Qgc25vb3plZENoYXRzID0gcmVzdWx0LnNub296ZWRDaGF0cyB8fCBbXTtcblxuICAgIHNub296ZWRDaGF0cy5mb3JFYWNoKGZ1bmN0aW9uIChjaGF0KSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgY2hhdCdzIHNub296ZSB0aW1lIGhhcyBwYXNzZWRcbiAgICAgIGlmIChjaGF0LnVudGlsIDw9IG5vdykge1xuICAgICAgICByZXF1ZXN0VW5zbm9vemUoY2hhdC5jaGF0SWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVVbnNub296ZWQoKSB7XG4gIC8vIENoZWNrIGFuZCBoYW5kbGUgc25vb3plZCBjaGF0cyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgY2hlY2tEdWVTbm9vemVkQ2hhdHMoKTtcblxuICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSBcImNoYXRVbnNub296ZWRcIikge1xuICAgICAgY29uc3QgY2hhdElkID0gbWVzc2FnZS5jaGF0SWQ7XG4gICAgICB1bmFyY2hpdmVDaGF0KGNoYXRJZCk7XG5cbiAgICAgIC8vIFJlbW92ZSB2aXN1YWwgY2x1ZSBvZiBhY3RpdmUgcmVtaW5kZXJcbiAgICAgIGxvYWRTbm9vemVkQ2hhdHNGcm9tU3RvcmFnZSgobG9hZGVkU25vb3plZENoYXRzKSA9PiB7XG4gICAgICAgIGdlbmVyYXRlU25vb3plZENoYXRzQ1NTKGxvYWRlZFNub296ZWRDaGF0cyk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc25vb3plZENoYXRzRHJhd2VyRm9jdXNlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAuY3VzdG9tTmF2QmFySXRlbS5hY3RpdmVbZGF0YS1kcmF3ZXItaWQ9XCJzbm9vemVkQ2hhdHNcIl1gXG4gICAgICApO1xuXG4gICAgICBpZiAoc25vb3plZENoYXRzRHJhd2VyRm9jdXNlZCkge1xuICAgICAgICBjb25zdCBleGlzdGluZ1JlbWluZGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5yZW1pbmRlckNoYXRJdGVtW2RhdGEtY2hhdC1pZD1cIiR7Y2hhdElkfVwiXWBcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdSZW1pbmRlckVsZW1lbnQpIHtcbiAgICAgICAgICBleGlzdGluZ1JlbWluZGVyRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gU2V0IHVwIGxpc3RlbmVyIGZvciBVTlJFQURfQ09VTlRfQ0hBTkdFXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoXG4gICAgICBldmVudC5zb3VyY2UgPT09IHdpbmRvdyAmJlxuICAgICAgZXZlbnQuZGF0YSAmJlxuICAgICAgZXZlbnQuZGF0YS50eXBlID09PSBcIlVOUkVBRF9DT1VOVF9DSEFOR0VcIlxuICAgICkge1xuICAgICAgY29uc3QgeyBjaGF0SWQsIHVucmVhZENvdW50IH0gPSBldmVudC5kYXRhO1xuXG4gICAgICBpZiAodW5yZWFkQ291bnQpIHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwic25vb3plZENoYXRzXCIsIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBjb25zdCBzbm9vemVkQ2hhdHMgPSByZXN1bHQuc25vb3plZENoYXRzIHx8IFtdO1xuICAgICAgICAgIGlmIChzbm9vemVkQ2hhdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXQgPSBzbm9vemVkQ2hhdHMuZmluZChcbiAgICAgICAgICAgICAgKHJlbWluZGVyKSA9PlxuICAgICAgICAgICAgICAgIHJlbWluZGVyLmNoYXRJZCA9PT0gY2hhdElkICYmXG4gICAgICAgICAgICAgICAgcmVtaW5kZXIuc25vb3plQ29uZGl0aW9uID09PSBcImlmTm9SZXBseVwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGNoYXQpIHtcbiAgICAgICAgICAgICAgcmVxdWVzdFVuc25vb3plKGNoYXRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdFVuc25vb3plKGNoYXRJZCkge1xuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGFjdGlvbjogXCJ1bnNub296ZUNoYXRcIiwgY2hhdElkOiBjaGF0SWQgfSk7XG59XG4iLCJpbXBvcnQgeyBnZXRFbGVtZW50QnlYcGF0aCwgZ2V0VW5pcXVlU2VsZWN0b3IgfSBmcm9tIFwiLi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuaW1wb3J0IHsgZ2V0Q2hhdEZpYmVyRnJvbURPTSB9IGZyb20gXCIuLi93aGF0c2FwcFN0b3JlL2dldENoYXRGaWJlckZyb21ET01cIjtcblxuZnVuY3Rpb24gY2hhdE9uSG92ZXJFdmVudChjaGF0LCBjaGF0RWxlbWVudCkge1xuICAvLyBEaXNwYXRjaCBhIGN1c3RvbSBldmVudCB0byBzaWduYWwgdGhhdCBhIGNoYXQgaXMgYmVpbmcgaG92ZXJlZFxuICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChcImNoYXRPbkhvdmVyXCIsIHtcbiAgICBkZXRhaWw6IHsgY2hhdDogY2hhdCwgY2hhdEVsZW1lbnQ6IGNoYXRFbGVtZW50IH0sXG4gIH0pO1xuICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2hhdEhvdmVyKGV2ZW50KSB7XG4gIGNvbnN0IGNoYXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXG4gICAgXCIueDEwbDZ0cWsueGg4eWVqMy54MWc0MmZjdjpub3QoLnJlbWluZGVyQ2hhdEl0ZW0pXCJcbiAgKTtcblxuICBpZiAoY2hhdEVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGdldFVuaXF1ZVNlbGVjdG9yKGNoYXRFbGVtZW50KTtcbiAgICBnZXRDaGF0RmliZXJGcm9tRE9NKHNlbGVjdG9yKTtcbiAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5kYXRhLnR5cGUgPT09IFwiQ0hBVF9GSUJFUl9SRVNVTFRcIikge1xuICAgIGNvbnN0IGNoYXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihldmVudC5kYXRhLnNlbGVjdG9yKTtcbiAgICBjb25zdCBjaGF0ID0gZXZlbnQuZGF0YS5jaGF0O1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGRhdGEgYXR0cmlidXRlcyBhcmUgYWxyZWFkeSBzZXQgYW5kIG1hdGNoIHRoZSBjdXJyZW50IGNoYXRcbiAgICBpZiAoXG4gICAgICBjaGF0RWxlbWVudCAmJlxuICAgICAgKGNoYXRFbGVtZW50LmRhdGFzZXQuY2hhdElkICE9PSBjaGF0LmNoYXRJZCB8fFxuICAgICAgICBjaGF0RWxlbWVudC5kYXRhc2V0LmNoYXRVc2VybmFtZSAhPT0gY2hhdC5jaGF0VXNlcm5hbWUgfHxcbiAgICAgICAgY2hhdEVsZW1lbnQuZGF0YXNldC5jaGF0UGhvbmUgIT09IGNoYXQuY2hhdFBob25lKVxuICAgICkge1xuICAgICAgY2hhdEVsZW1lbnQuZGF0YXNldC5jaGF0SWQgPSBjaGF0LmNoYXRJZDtcbiAgICAgIGNoYXRFbGVtZW50LmRhdGFzZXQuY2hhdFVzZXJuYW1lID0gY2hhdC5jaGF0VXNlcm5hbWU7XG4gICAgICBjaGF0RWxlbWVudC5kYXRhc2V0LmNoYXRQaG9uZSA9IGNoYXQuY2hhdFBob25lO1xuXG4gICAgICBjaGF0T25Ib3ZlckV2ZW50KGNoYXQsIGNoYXRFbGVtZW50KTtcbiAgICB9XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBoYW5kbGVBY3RpdmVDaGF0Q2hhbmdlKGNoYXRFbGVtZW50KSB7XG4gIGlmIChjaGF0RWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0VW5pcXVlU2VsZWN0b3IoY2hhdEVsZW1lbnQpO1xuICAgIGdldENoYXRGaWJlckZyb21ET00oc2VsZWN0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGF0T25Ib3Zlck9ic2VydmVyKCkge1xuICBjb25zdCBjaGF0c0NvbnRhaW5lciA9IGdldEVsZW1lbnRCeVhwYXRoKCcvLypbQGlkPVwiYXBwXCJdJyk7XG5cbiAgLy8gQWRkIG1vdXNlZW50ZXIgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGNoYXRzIGNvbnRhaW5lclxuICBjaGF0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBoYW5kbGVDaGF0SG92ZXIsIHRydWUpO1xuXG4gIC8vIE9ic2VydmUgY2hhbmdlcyB0byBpZGVudGlmeSBhY3RpdmUgY2hhdHNcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgbXV0YXRpb25zLmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIG11dGF0aW9uLnR5cGUgPT09IFwiYXR0cmlidXRlc1wiICYmXG4gICAgICAgIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09IFwiY2xhc3NcIlxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUNoYXQgPSBjaGF0c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwiLngxMGw2dHFrLnhoOHllajMueDFnNDJmY3Y6aGFzKC5fYWs3Mi5fYWs3My5fYWs3cCk6bm90KC5yZW1pbmRlckNoYXRJdGVtKVwiXG4gICAgICAgICk7XG4gICAgICAgIGlmIChhY3RpdmVDaGF0KSB7XG4gICAgICAgICAgaGFuZGxlQWN0aXZlQ2hhdENoYW5nZShhY3RpdmVDaGF0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBvYnNlcnZlci5vYnNlcnZlKGNoYXRzQ29udGFpbmVyLCB7XG4gICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICBzdWJ0cmVlOiB0cnVlLFxuICAgIGF0dHJpYnV0ZUZpbHRlcjogW1wiY2xhc3NcIl0sXG4gIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRCeVhwYXRoKHBhdGgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmV2YWx1YXRlKFxuICAgIHBhdGgsXG4gICAgZG9jdW1lbnQsXG4gICAgbnVsbCxcbiAgICBYUGF0aFJlc3VsdC5GSVJTVF9PUkRFUkVEX05PREVfVFlQRSxcbiAgICBudWxsXG4gICkuc2luZ2xlTm9kZVZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudENvb3JkaW5hdGVzKGVsZW1lbnQpIHtcbiAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IHggPSByZWN0LmxlZnQgKyByZWN0LndpZHRoIC8gMjtcbiAgY29uc3QgeSA9IHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLyAyO1xuICByZXR1cm4geyB4LCB5IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VzZXJUeXBpbmcoKSB7XG4gIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICByZXR1cm4gKFxuICAgIGFjdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gXCJJTlBVVFwiIHx8XG4gICAgYWN0aXZlRWxlbWVudC50YWdOYW1lID09PSBcIlRFWFRBUkVBXCIgfHxcbiAgICBhY3RpdmVFbGVtZW50LmlzQ29udGVudEVkaXRhYmxlXG4gICk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGhpZGUgYWxsIGNoaWxkcmVuIG9mIGEgZ2l2ZW4gZWxlbWVudFxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVBbGxDaGlsZHJlbihlbGVtZW50KSB7XG4gIC8vIExvb3AgdGhyb3VnaCBlYWNoIGNoaWxkIG9mIHRoZSBlbGVtZW50XG4gIEFycmF5LmZyb20oZWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICBjaGlsZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xufVxuXG4vLyBVdGlsaXR5IGZ1bmN0aW9uIHRvIHJlbW92ZSBhbiBlbGVtZW50IGlmIGl0IGV4aXN0c1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUlmRXhpc3RzKHhwYXRoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50QnlYcGF0aCh4cGF0aCk7XG4gIGlmIChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byBvYnNlcnZlIHRoZSBET00gYW5kIHBlcmZvcm0gYW4gYWN0aW9uIGJhc2VkIG9uIFhQYXRoIHdoZW4gaXQgYXBwZWFyc1xuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVBbmRBY3QoeHBhdGgsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgIG11dGF0aW9ucy5mb3JFYWNoKCgpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBnZXRFbGVtZW50QnlYcGF0aCh4cGF0aCk7XG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gU3RhcnQgb2JzZXJ2aW5nIHRoZSBlbnRpcmUgZG9jdW1lbnQgZm9yIGNoYW5nZXNcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XG4gICAgY2hpbGRMaXN0OiB0cnVlLCAvLyBPYnNlcnZlIGRpcmVjdCBjaGlsZHJlblxuICAgIHN1YnRyZWU6IHRydWUsIC8vIE9ic2VydmUgYWxsIGRlc2NlbmRhbnRzXG4gIH0pO1xuXG4gIC8vIE9wdGlvbmFsbHksIGRpc2Nvbm5lY3Qgb2JzZXJ2ZXIgb25jZSB0aGUgZWxlbWVudCBpcyByZW1vdmVkIChmb3IgcGVyZm9ybWFuY2UpXG4gIC8vIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluamVjdFNjcmlwdChmaWxlLCBjYWxsYmFjaykge1xuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICBzY3JpcHQuc3JjID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKGZpbGUpO1xuICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfTtcbiAgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VGltZXN0YW1wKHRpbWVzdGFtcCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTtcbiAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IGZvcm1hdE9wdGlvbnMgPSB7XG4gICAgbW9udGg6IFwic2hvcnRcIiwgLy8gXCJBdWdcIlxuICAgIGRheTogXCJudW1lcmljXCIsIC8vIFwiMzBcIlxuICAgIGhvdXI6IFwibnVtZXJpY1wiLCAvLyBcIjEwXCJcbiAgICBtaW51dGU6IFwiMi1kaWdpdFwiLCAvLyBcIjAwXCJcbiAgICBob3VyMTI6IHRydWUsIC8vIGZvciBBTS9QTSBmb3JtYXRcbiAgfTtcblxuICAvLyBBZGQgeWVhciBvbmx5IGlmIGl0J3MgZGlmZmVyZW50IGZyb20gdGhlIGN1cnJlbnQgeWVhclxuICBpZiAoZGF0ZS5nZXRGdWxsWWVhcigpICE9PSBjdXJyZW50WWVhcikge1xuICAgIGZvcm1hdE9wdGlvbnMueWVhciA9IFwibnVtZXJpY1wiOyAvLyBcIjIwMjRcIlxuICB9XG5cbiAgcmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCBmb3JtYXRPcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXF1ZVNlbGVjdG9yKGVsZW1lbnQpIHtcbiAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpKSByZXR1cm47XG4gIGNvbnN0IHBhdGggPSBbXTtcbiAgd2hpbGUgKGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChlbGVtZW50LmlkKSB7XG4gICAgICBzZWxlY3RvciArPSBcIiNcIiArIGVsZW1lbnQuaWQ7XG4gICAgICBwYXRoLnVuc2hpZnQoc2VsZWN0b3IpO1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzaWJsaW5nID0gZWxlbWVudDtcbiAgICAgIGxldCBudGggPSAxO1xuICAgICAgd2hpbGUgKChzaWJsaW5nID0gc2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSkge1xuICAgICAgICBpZiAoc2libGluZy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBzZWxlY3RvcikgbnRoKys7XG4gICAgICB9XG4gICAgICBpZiAobnRoICE9PSAxKSBzZWxlY3RvciArPSBcIjpudGgtb2YtdHlwZShcIiArIG50aCArIFwiKVwiO1xuICAgIH1cbiAgICBwYXRoLnVuc2hpZnQoc2VsZWN0b3IpO1xuICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIHBhdGguam9pbihcIiA+IFwiKTtcbn1cbiIsImltcG9ydCB7IGdldEVsZW1lbnRCeVhwYXRoLCBvYnNlcnZlQW5kQWN0IH0gZnJvbSBcIi4vZG9tSGVscGVyc1wiO1xuXG4vLyBSZW1vdmUgV2hhdHNBcHAgc3BhbVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVdoYXRzQXBwU3BhbSgpIHtcbiAgb2JzZXJ2ZUFuZEFjdChgLy8qW0BpZD1cInNpZGVcIl0vZGl2WzRdYCwgKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnJlbW92ZSgpO1xuICB9KTtcbiAgb2JzZXJ2ZUFuZEFjdChcbiAgICBgLy8qW0BpZD1cImFwcFwiXS9kaXYvZGl2WzJdL2RpdlszXS9oZWFkZXIvaGVhZGVyL2Rpdi9zcGFuL2Rpdi9zcGFuL2RpdlszXS9zcGFuL2Rpdi91bC9saVs3XWAsXG4gICAgKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICApO1xuICBvYnNlcnZlQW5kQWN0KFxuICAgIGAvLypbQGlkPVwiYXBwXCJdL2Rpdi9kaXZbMl0vZGl2WzNdL2hlYWRlci9oZWFkZXIvZGl2L3NwYW4vZGl2L3NwYW4vZGl2WzNdL3NwYW4vZGl2L3VsL2hyYCxcbiAgICAoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTdGFydHVwTWVzc2FnZSgpIHtcbiAgb2JzZXJ2ZUFuZEFjdCgnLy8qW0BpZD1cImFwcFwiXS9kaXYvZGl2WzJdL2Rpdls0XS9kaXYvZGl2JywgKGVsZW1lbnQpID0+IHtcbiAgICAvLyBDaGVjayBpZiB0aGUgbWVzc2FnZSBhbHJlYWR5IGV4aXN0c1xuICAgIGlmICghZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LW1lc3NhZ2luZ1wiKSkge1xuICAgICAgZ2V0RWxlbWVudEJ5WHBhdGgoYC8vKltAaWQ9XCJhcHBcIl0vZGl2L2RpdlsyXS9kaXZbNF0vZGl2L2RpdmApLmlubmVySFRNTCA9XG4gICAgICAgIFwiXCI7XG4gICAgICAvLyBDcmVhdGUgYSBtZXNzYWdlIGVsZW1lbnRcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbWVzc2FnZS5pbm5lckhUTUwgPSBgPHA+8J+RiyBVc2UgPGtiZD7ihpE8L2tiZD4gYW5kIDxrYmQ+4oaTPC9rYmQ+IHRvIG1vdmUgYmV0d2VlbiBjaGF0cy48L3A+YDtcbiAgICAgIG1lc3NhZ2UuY2xhc3NOYW1lID0gXCJzdGFydC1tZXNzYWdpbmdcIjtcblxuICAgICAgLy8gQXBwZW5kIHRoZSBtZXNzYWdlIHRvIHRoZSB0YXJnZXQgZWxlbWVudFxuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNpbXVsYXRlS2V5UHJlc3MoZWxlbWVudCwga2V5KSB7XG4gIGNvbnN0IGtleWJvYXJkRXZlbnQgPSBuZXcgS2V5Ym9hcmRFdmVudChcImtleWRvd25cIiwge1xuICAgIGtleToga2V5LFxuICAgIGNvZGU6IGtleSxcbiAgICBrZXlDb2RlOiBrZXksXG4gICAgd2hpY2g6IGtleSxcbiAgICBidWJibGVzOiB0cnVlLFxuICAgIGNhbmNlbGFibGU6IHRydWUsXG4gIH0pO1xuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoa2V5Ym9hcmRFdmVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmlnZ2VyTmF0aXZlU2hvcnRjdXQoa2V5cykge1xuICBjb25zdCBldmVudCA9IG5ldyBLZXlib2FyZEV2ZW50KFwia2V5ZG93blwiLCB7XG4gICAgYnViYmxlczogdHJ1ZSxcbiAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgIGtleToga2V5cy5rZXksXG4gICAgY29kZToga2V5cy5jb2RlLFxuICAgIGxvY2F0aW9uOiBLZXlib2FyZEV2ZW50LkRPTV9LRVlfTE9DQVRJT05fU1RBTkRBUkQsXG4gICAgY3RybEtleToga2V5cy5jdHJsS2V5LFxuICAgIGFsdEtleToga2V5cy5hbHRLZXksXG4gICAgc2hpZnRLZXk6IGtleXMuc2hpZnRLZXksXG4gICAgbWV0YUtleToga2V5cy5tZXRhS2V5LFxuICB9KTtcbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG4iLCJpbXBvcnQgeyBpbmplY3RTY3JpcHQgfSBmcm9tIFwiLi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXJjaGl2ZUNoYXRMaXN0ZW5lcigpIHtcbiAgaW5qZWN0U2NyaXB0KFwic3JjL3doYXRzYXBwU3RvcmUvc2NyaXB0cy9hcmNoaXZlQ2hhdC5qc1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyY2hpdmVDaGF0KGNoYXRJZCkge1xuICAvLyBBZnRlciBpbmplY3RpbmcgdGhlIHNjcmlwdCwgc2VuZCB0aGUgY2hhdCBJRCB1c2luZyBwb3N0TWVzc2FnZVxuICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiBcIkFSQ0hJVkVfQ0hBVFwiLCBjaGF0SWQ6IGNoYXRJZCB9LCBcIipcIik7XG59XG4iLCJpbXBvcnQgeyBpbmplY3RTY3JpcHQgfSBmcm9tIFwiLi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXJjaGl2ZUNoYXRFdmVudExpc3RlbmVyKCkge1xuICBpbmplY3RTY3JpcHQoXCJzcmMvd2hhdHNhcHBTdG9yZS9zY3JpcHRzL2FyY2hpdmVDaGF0RXZlbnRMaXN0ZW5lci5qc1wiKTtcbn1cbiIsImltcG9ydCB7IGluamVjdFNjcmlwdCB9IGZyb20gXCIuLi91dGlscy9kb21IZWxwZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGF0c1N5bmMoKSB7XG4gIGluamVjdFNjcmlwdChcInNyYy93aGF0c2FwcFN0b3JlL3NjcmlwdHMvY2hhdHNTeW5jLmpzXCIpO1xufVxuIiwiaW1wb3J0IHsgaW5qZWN0U2NyaXB0IH0gZnJvbSBcIi4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2VGb2N1c0xpc3RlbmVyKCkge1xuICBpbmplY3RTY3JpcHQoXCJzcmMvd2hhdHNhcHBTdG9yZS9zY3JpcHRzL2NvbXBvc2VGb2N1cy5qc1wiKTtcbn1cbiIsImltcG9ydCB7IGluamVjdFNjcmlwdCB9IGZyb20gXCIuLi91dGlscy9kb21IZWxwZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDaGF0c0xpc3RlbmVyKCkge1xuICBpbmplY3RTY3JpcHQoXCJzcmMvd2hhdHNhcHBTdG9yZS9zY3JpcHRzL2ZpbHRlckNoYXRzLmpzXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ2hhdHMoY2hhdHMpIHtcbiAgLy8gQWZ0ZXIgaW5qZWN0aW5nIHRoZSBzY3JpcHQsIHNlbmQgdGhlIGNoYXQgSUQgdXNpbmcgcG9zdE1lc3NhZ2VcbiAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogXCJGSUxURVJfQ0hBVFNcIiwgY2hhdHM6IGNoYXRzIH0sIFwiKlwiKTtcbn1cbiIsImltcG9ydCB7IGluamVjdFNjcmlwdCB9IGZyb20gXCIuLi91dGlscy9kb21IZWxwZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb2N1c0xhc3RNZXNzYWdlTGlzdGVuZXIoKSB7XG4gIGluamVjdFNjcmlwdChcInNyYy93aGF0c2FwcFN0b3JlL3NjcmlwdHMvZm9jdXNMYXN0TWVzc2FnZS5qc1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvY3VzTGFzdE1lc3NhZ2UoKSB7XG4gIC8vIEFmdGVyIGluamVjdGluZyB0aGUgc2NyaXB0LCBzZW5kIHRoZSBjaGF0IElEIHVzaW5nIHBvc3RNZXNzYWdlXG4gIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6IFwiRk9DVVNfTEFTVF9NRVNTQUdFXCIgfSwgXCIqXCIpO1xufVxuIiwiaW1wb3J0IHsgaW5qZWN0U2NyaXB0IH0gZnJvbSBcIi4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvY3VzTmV4dENoYXRMaXN0ZW5lcigpIHtcbiAgaW5qZWN0U2NyaXB0KFwic3JjL3doYXRzYXBwU3RvcmUvc2NyaXB0cy9mb2N1c05leHRDaGF0LmpzXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9jdXNOZXh0Q2hhdCgpIHtcbiAgLy8gQWZ0ZXIgaW5qZWN0aW5nIHRoZSBzY3JpcHQsIHNlbmQgdGhlIGNoYXQgSUQgdXNpbmcgcG9zdE1lc3NhZ2VcbiAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogXCJGT0NVU19ORVhUX0NIQVRcIiB9LCBcIipcIik7XG59XG4iLCJpbXBvcnQgeyBpbmplY3RTY3JpcHQgfSBmcm9tIFwiLi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9jdXNQcmV2aW91c0NoYXRMaXN0ZW5lcigpIHtcbiAgaW5qZWN0U2NyaXB0KFwic3JjL3doYXRzYXBwU3RvcmUvc2NyaXB0cy9mb2N1c1ByZXZpb3VzQ2hhdC5qc1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvY3VzUHJldmlvdXNDaGF0KCkge1xuICAvLyBBZnRlciBpbmplY3RpbmcgdGhlIHNjcmlwdCwgc2VuZCB0aGUgY2hhdCBJRCB1c2luZyBwb3N0TWVzc2FnZVxuICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiBcIkZPQ1VTX1BSRVZJT1VTX0NIQVRcIiB9LCBcIipcIik7XG59XG4iLCJpbXBvcnQgeyBpbmplY3RTY3JpcHQgfSBmcm9tIFwiLi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZEZpbHRlckhhbmRsZXJMaXN0ZW5lcigpIHtcbiAgaW5qZWN0U2NyaXB0KFwic3JjL3doYXRzYXBwU3RvcmUvc2NyaXB0cy9mb3J3YXJkRmlsdGVySGFuZGxlci5qc1wiKTtcbn1cbiIsImltcG9ydCB7IHNub296ZUZvcm0gfSBmcm9tIFwiLi4vZmVhdHVyZXMvc25vb3plZC9zbm9vemVGb3JtXCI7XG5pbXBvcnQgeyBpbmplY3RTY3JpcHQgfSBmcm9tIFwiLi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhdERldGFpbHNMaXN0ZW5lcigpIHtcbiAgaW5qZWN0U2NyaXB0KFwic3JjL3doYXRzYXBwU3RvcmUvc2NyaXB0cy9nZXRDaGF0RGV0YWlscy5qc1wiKTtcblxuICAvLyBMaXN0ZW4gZm9yIHRoZSByZXNwb25zZSBmcm9tIHRoZSBpbmplY3RlZCBzY3JpcHRcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChcbiAgICAgIGV2ZW50LmRhdGEgJiZcbiAgICAgIGV2ZW50LmRhdGEudHlwZSA9PT0gXCJDSEFUX0RFVEFJTFNfUkVTUE9OU0VcIiAmJlxuICAgICAgZXZlbnQuZGF0YS5jaGF0XG4gICAgKSB7XG4gICAgICBjb25zdCB7IGNoYXRJZCwgdXNlck5hbWUsIGxhc3RNc2csIHByb2ZpbGVQaWMgfSA9IGV2ZW50LmRhdGEuY2hhdDtcbiAgICAgIGNvbnN0IGNoYXRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgLnVubG9hZGVkQ2hhdFtkYXRhLWNoYXQtaWQ9XCIke2NoYXRJZH1cIl1gXG4gICAgICApO1xuXG4gICAgICBpZiAocHJvZmlsZVBpYykge1xuICAgICAgICBjaGF0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZVBpY1wiKS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIGRyYWdnYWJsZT1cImZhbHNlXCJcbiAgICAgICAgICAgIGNsYXNzPVwieDFuMm9ucjYgeDFsbGlpaHEgeGg4eWVqMyB4NXlyMjFkIHg2aWttOHIgeDEwd2x0NjIgeDE0eWpsOWggeHVkaGo5MSB4MThueWt0OSB4d3cyZ3h1IHhsMXh2MXIgeDExNWRodTcgeDE3dnR5MjMgeDFoYzFmenIgX2FvM2VcIlxuICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICBzcmM9JHtwcm9maWxlUGljfVxuICAgICAgICAgICAgc3R5bGU9XCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCJcbiAgICAgICAgICAvPlxuICAgICAgICBgO1xuICAgICAgfVxuXG4gICAgICBpZiAodXNlck5hbWUpIHtcbiAgICAgICAgY2hhdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnVzZXJOYW1lXCIpLmlubmVySFRNTCA9IHVzZXJOYW1lO1xuICAgICAgfVxuXG4gICAgICBpZiAobGFzdE1zZykge1xuICAgICAgICBjaGF0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIubGFzdE1zZ1wiKS5pbm5lckhUTUwgPSBsYXN0TXNnO1xuICAgICAgfVxuXG4gICAgICAvLyBBdHRhY2ggZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSByZW1pbmRlciBidXR0b25zXG4gICAgICBjaGF0Q29udGFpbmVyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnJlbWluZGVyQnRuXCIpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIHNub296ZUZvcm0oeyBjaGF0SWQ6IGNoYXRJZCwgY2hhdFVzZXJuYW1lOiB1c2VyTmFtZSB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoYXREZXRhaWxzKGNoYXRJZCkge1xuICAvLyBBZnRlciBpbmplY3RpbmcgdGhlIHNjcmlwdCwgc2VuZCB0aGUgY2hhdCBJRCB1c2luZyBwb3N0TWVzc2FnZVxuICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiBcIkdFVF9DSEFUX0RFVEFJTFNcIiwgY2hhdElkOiBjaGF0SWQgfSwgXCIqXCIpO1xufVxuIiwiaW1wb3J0IHsgaW5qZWN0U2NyaXB0IH0gZnJvbSBcIi4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoYXRGaWJlckZyb21ET01MaXN0ZW5lcigpIHtcbiAgaW5qZWN0U2NyaXB0KFwic3JjL3doYXRzYXBwU3RvcmUvc2NyaXB0cy9nZXRDaGF0RmliZXJGcm9tRE9NLmpzXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhdEZpYmVyRnJvbURPTShzZWxlY3Rvcikge1xuICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiBcIkdFVF9DSEFUX0ZJQkVSXCIsIHNlbGVjdG9yIH0sIFwiKlwiKTtcbn1cbiIsImltcG9ydCB7IGluamVjdFNjcmlwdCB9IGZyb20gXCIuLi91dGlscy9kb21IZWxwZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQ2hhdERvbmVMaXN0ZW5lcigpIHtcbiAgaW5qZWN0U2NyaXB0KFwic3JjL3doYXRzYXBwU3RvcmUvc2NyaXB0cy9tYXJrQ2hhdERvbmUuanNcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrQ2hhdERvbmUoY2hhdElkKSB7XG4gIC8vIEFmdGVyIGluamVjdGluZyB0aGUgc2NyaXB0LCBzZW5kIHRoZSBjaGF0IElEIHVzaW5nIHBvc3RNZXNzYWdlXG4gIHdpbmRvdy5wb3N0TWVzc2FnZSh7IHR5cGU6IFwiTUFSS19DSEFUX0RPTkVcIiwgY2hhdElkOiBjaGF0SWQgfSwgXCIqXCIpO1xufVxuIiwiaW1wb3J0IHsgaW5qZWN0U2NyaXB0IH0gZnJvbSBcIi4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lc3NhZ2VzTGlzdGVuZXIoKSB7XG4gIGluamVjdFNjcmlwdChcInNyYy93aGF0c2FwcFN0b3JlL3NjcmlwdHMvbWVzc2FnZXNMaXN0ZW5lci5qc1wiKTtcbn0iLCJpbXBvcnQgeyBpbmplY3RTY3JpcHQgfSBmcm9tIFwiLi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gb3BlbkNvbnRleHRNZW51TGlzdGVuZXIoKSB7XG4gIGluamVjdFNjcmlwdChcInNyYy93aGF0c2FwcFN0b3JlL3NjcmlwdHMvb3BlbkNvbnRleHRNZW51LmpzXCIpO1xufVxuIiwiaW1wb3J0IHsgaW5qZWN0U2NyaXB0IH0gZnJvbSBcIi4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5EcmF3ZXJMZWZ0TGlzdGVuZXIoKSB7XG4gIGluamVjdFNjcmlwdChcInNyYy93aGF0c2FwcFN0b3JlL3NjcmlwdHMvb3BlbkRyYXdlckxlZnQuanNcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuRHJhd2VyTGVmdChkcmF3ZXIsIGRyYXdlcklkKSB7XG4gIC8vIEFmdGVyIGluamVjdGluZyB0aGUgc2NyaXB0LCBzZW5kIHRoZSBjaGF0IElEIHVzaW5nIHBvc3RNZXNzYWdlXG4gIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICB7IHR5cGU6IFwiT1BFTl9EUkFXRVJfTEVGVFwiLCBkcmF3ZXI6IGRyYXdlciwgZHJhd2VySWQ6IGRyYXdlcklkIH0sXG4gICAgXCIqXCIsXG4gICk7XG59XG4iLCJpbXBvcnQgeyBpbmplY3RTY3JpcHQgfSBmcm9tIFwiLi4vdXRpbHMvZG9tSGVscGVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdE1vdmVUb0Zvcm1MaXN0ZW5lcigpIHtcbiAgaW5qZWN0U2NyaXB0KFwic3JjL3doYXRzYXBwU3RvcmUvc2NyaXB0cy9yZXF1ZXN0TW92ZVRvRm9ybS5qc1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RNb3ZlVG9Gb3JtKCkge1xuICAvLyBBZnRlciBpbmplY3RpbmcgdGhlIHNjcmlwdCwgc2VuZCB0aGUgY2hhdCBJRCB1c2luZyBwb3N0TWVzc2FnZVxuICB3aW5kb3cucG9zdE1lc3NhZ2UoeyB0eXBlOiBcIlJFUVVFU1RfTU9WRV9UT19GT1JNXCIgfSwgXCIqXCIpO1xufVxuIiwiaW1wb3J0IHsgaW5qZWN0U2NyaXB0IH0gZnJvbSBcIi4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RTbm9vemVGb3JtTGlzdGVuZXIoKSB7XG4gIGluamVjdFNjcmlwdChcInNyYy93aGF0c2FwcFN0b3JlL3NjcmlwdHMvcmVxdWVzdFNub296ZUZvcm0uanNcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0U25vb3plRm9ybSgpIHtcbiAgLy8gQWZ0ZXIgaW5qZWN0aW5nIHRoZSBzY3JpcHQsIHNlbmQgdGhlIGNoYXQgSUQgdXNpbmcgcG9zdE1lc3NhZ2VcbiAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogXCJSRVFVRVNUX1NOT09aRV9GT1JNXCIgfSwgXCIqXCIpO1xufVxuIiwiaW1wb3J0IHsgaW5qZWN0U2NyaXB0IH0gZnJvbSBcIi4uL3V0aWxzL2RvbUhlbHBlcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVuYXJjaGl2ZUNoYXRMaXN0ZW5lcigpIHtcbiAgaW5qZWN0U2NyaXB0KFwic3JjL3doYXRzYXBwU3RvcmUvc2NyaXB0cy91bmFyY2hpdmVDaGF0LmpzXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5hcmNoaXZlQ2hhdChjaGF0SWQpIHtcbiAgLy8gQWZ0ZXIgaW5qZWN0aW5nIHRoZSBzY3JpcHQsIHNlbmQgdGhlIGNoYXQgSUQgdXNpbmcgcG9zdE1lc3NhZ2VcbiAgd2luZG93LnBvc3RNZXNzYWdlKHsgdHlwZTogXCJVTkFSQ0hJVkVfQ0hBVFwiLCBjaGF0SWQ6IGNoYXRJZCB9LCBcIipcIik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL21haW4uc2Nzc1wiO1xuaW1wb3J0IHsgZ2V0RWxlbWVudEJ5WHBhdGggfSBmcm9tIFwiLi91dGlscy9kb21IZWxwZXJzXCI7XG5pbXBvcnQgeyByZW1vdmVXaGF0c0FwcFNwYW0sIGFkZFN0YXJ0dXBNZXNzYWdlIH0gZnJvbSBcIi4vdXRpbHMvZW5oYW5jZVVpXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplU2hvcnRjdXRzIH0gZnJvbSBcIi4vZmVhdHVyZXMvc2hvcnRjdXRzXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplRm9sZGVycyB9IGZyb20gXCIuL2ZlYXR1cmVzL2ZvbGRlcnNcIjtcbmltcG9ydCB7IGluaXRpYWxpemVTbm9vemVkIH0gZnJvbSBcIi4vZmVhdHVyZXMvc25vb3plZFwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZVNjaGVkdWxlZCB9IGZyb20gXCIuL2ZlYXR1cmVzL3NjaGVkdWxlZFwiO1xuaW1wb3J0IHsgY2hhdE9uSG92ZXJPYnNlcnZlciB9IGZyb20gXCIuL29ic2VydmVycy9jaGF0T25Ib3Zlck9ic2VydmVyXCI7XG5pbXBvcnQgeyBhcmNoaXZlQ2hhdExpc3RlbmVyIH0gZnJvbSBcIi4vd2hhdHNhcHBTdG9yZS9hcmNoaXZlQ2hhdFwiO1xuaW1wb3J0IHsgdW5hcmNoaXZlQ2hhdExpc3RlbmVyIH0gZnJvbSBcIi4vd2hhdHNhcHBTdG9yZS91bmFyY2hpdmVDaGF0XCI7XG5pbXBvcnQgeyBtYXJrQ2hhdERvbmVMaXN0ZW5lciB9IGZyb20gXCIuL3doYXRzYXBwU3RvcmUvbWFya0NoYXREb25lXCI7XG5pbXBvcnQgeyBvcGVuRHJhd2VyTGVmdExpc3RlbmVyIH0gZnJvbSBcIi4vd2hhdHNhcHBTdG9yZS9vcGVuRHJhd2VyTGVmdFwiO1xuaW1wb3J0IHsgZ2V0Q2hhdERldGFpbHNMaXN0ZW5lciB9IGZyb20gXCIuL3doYXRzYXBwU3RvcmUvZ2V0Q2hhdERldGFpbHNcIjtcbmltcG9ydCB7IG9wZW5Db250ZXh0TWVudUxpc3RlbmVyIH0gZnJvbSBcIi4vd2hhdHNhcHBTdG9yZS9vcGVuQ29udGV4dE1lbnVcIjtcbmltcG9ydCB7IGdldENoYXRGaWJlckZyb21ET01MaXN0ZW5lciB9IGZyb20gXCIuL3doYXRzYXBwU3RvcmUvZ2V0Q2hhdEZpYmVyRnJvbURPTVwiO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZURvbmUgfSBmcm9tIFwiLi9mZWF0dXJlcy9kb25lXCI7XG5cbi8vIEluamVjdCBmb250IHN0eWxlcyBpbnRvIHRoZSBwYWdlXG5jb25zdCBsaW5rMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xubGluazEucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5saW5rMS5ocmVmID1cbiAgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyMC4uNDgsMTAwLi43MDAsMC4uMSwtNTAuLjIwMFwiO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmsxKTtcblxuRWxlbWVudC5wcm90b3R5cGUuaW5zZXJ0Q2hpbGRBdEluZGV4ID0gZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICBpZiAoIWluZGV4KSBpbmRleCA9IDA7XG4gIGlmIChpbmRleCA+PSB0aGlzLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgIHRoaXMuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuaW5zZXJ0QmVmb3JlKGNoaWxkLCB0aGlzLmNoaWxkcmVuW2luZGV4XSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVXaGF0c0FwcCgpIHtcbiAgLy8gRGlzcGF0Y2ggYSBjdXN0b20gZXZlbnQgdG8gc2lnbmFsIHRoYXQgV2hhdHNBcHAgaXMgaW5pdGlhbGl6ZWRcbiAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJ3aGF0c2FwcEluaXRpYWxpemVkXCIsIHtcbiAgICBkZXRhaWw6IHsgbWVzc2FnZTogXCJXaGF0c0FwcCBpcyBub3cgaW5pdGlhbGl6ZWRcIiB9LFxuICB9KTtcbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbmluaXRpYWxpemVTaG9ydGN1dHMoKTtcbmluaXRpYWxpemVGb2xkZXJzKCk7XG5pbml0aWFsaXplU2NoZWR1bGVkKCk7XG5pbml0aWFsaXplU25vb3plZCgpO1xuaW5pdGlhbGl6ZURvbmUoKTtcblxuLy8gVGFyZ2V0IG5vZGUgdG8gb2JzZXJ2ZVxuY29uc3QgdGFyZ2V0Tm9kZSA9IGRvY3VtZW50LmJvZHk7XG5cbi8vIE9wdGlvbnMgZm9yIHRoZSBvYnNlcnZlciAod2hpY2ggbXV0YXRpb25zIHRvIG9ic2VydmUpXG5jb25zdCBjb25maWcgPSB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xuXG4vLyBDYWxsYmFjayBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gbXV0YXRpb25zIGFyZSBvYnNlcnZlZFxuY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiAobXV0YXRpb25zTGlzdCwgb2JzZXJ2ZXIpIHtcbiAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XG4gICAgaWYgKG11dGF0aW9uLnR5cGUgPT09IFwiY2hpbGRMaXN0XCIpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZ2V0RWxlbWVudEJ5WHBhdGgoXG4gICAgICAgICAgYC8vKltAaWQ9XCJhcHBcIl0vZGl2L2RpdlsyXS9kaXZbM10vaGVhZGVyL2hlYWRlci9kaXYvZGl2L2gxYFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICBpbml0aWFsaXplV2hhdHNBcHAoKTsgLy8gRGlzcGF0Y2ggZXZlbnQgd2hlbiBXaGF0c0FwcCBpcyBsb2FkZWRcblxuICAgICAgICBjaGF0T25Ib3Zlck9ic2VydmVyKCk7XG4gICAgICAgIGFyY2hpdmVDaGF0TGlzdGVuZXIoKTtcbiAgICAgICAgdW5hcmNoaXZlQ2hhdExpc3RlbmVyKCk7XG4gICAgICAgIG9wZW5EcmF3ZXJMZWZ0TGlzdGVuZXIoKTtcbiAgICAgICAgZ2V0Q2hhdERldGFpbHNMaXN0ZW5lcigpO1xuICAgICAgICBtYXJrQ2hhdERvbmVMaXN0ZW5lcigpO1xuICAgICAgICBvcGVuQ29udGV4dE1lbnVMaXN0ZW5lcigpO1xuICAgICAgICBnZXRDaGF0RmliZXJGcm9tRE9NTGlzdGVuZXIoKTtcblxuICAgICAgICByZW1vdmVXaGF0c0FwcFNwYW0oKTtcbiAgICAgICAgYWRkU3RhcnR1cE1lc3NhZ2UoKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8vIENyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBsaW5rZWQgdG8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXG5jb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcblxuLy8gU3RhcnQgb2JzZXJ2aW5nIHRoZSB0YXJnZXQgbm9kZSBmb3IgY29uZmlndXJlZCBtdXRhdGlvbnNcbm9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgY29uZmlnKTtcbiJdLCJuYW1lcyI6WyJvd25LZXlzIiwib2JqZWN0IiwiZW51bWVyYWJsZU9ubHkiLCJrZXlzIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic3ltYm9scyIsImZpbHRlciIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkMiIsInRhcmdldCIsImkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzb3VyY2UiLCJmb3JFYWNoIiwia2V5IiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJkZWZpbmVQcm9wZXJ0eSIsIl90eXBlb2YiLCJvYmoiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwidmFsdWUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9leHRlbmRzIiwiYXNzaWduIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJleGNsdWRlZCIsInNvdXJjZUtleXMiLCJpbmRleE9mIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwic291cmNlU3ltYm9sS2V5cyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyIiwiX2FycmF5V2l0aG91dEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVNwcmVhZCIsIkFycmF5IiwiaXNBcnJheSIsIl9hcnJheUxpa2VUb0FycmF5IiwiaXRlciIsImZyb20iLCJvIiwibWluTGVuIiwibiIsInRvU3RyaW5nIiwic2xpY2UiLCJuYW1lIiwidGVzdCIsImxlbiIsImFycjIiLCJUeXBlRXJyb3IiLCJ2ZXJzaW9uIiwidXNlckFnZW50IiwicGF0dGVybiIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1hdGNoIiwiSUUxMU9yTGVzcyIsIkVkZ2UiLCJGaXJlRm94IiwiU2FmYXJpIiwiSU9TIiwiQ2hyb21lRm9yQW5kcm9pZCIsImNhcHR1cmVNb2RlIiwiY2FwdHVyZSIsInBhc3NpdmUiLCJvbiIsImVsIiwiZXZlbnQiLCJmbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWF0Y2hlcyIsInNlbGVjdG9yIiwic3Vic3RyaW5nIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJfIiwiZ2V0UGFyZW50T3JIb3N0IiwiaG9zdCIsImRvY3VtZW50Iiwibm9kZVR5cGUiLCJwYXJlbnROb2RlIiwiY2xvc2VzdCIsImN0eCIsImluY2x1ZGVDVFgiLCJSX1NQQUNFIiwidG9nZ2xlQ2xhc3MiLCJzdGF0ZSIsImNsYXNzTGlzdCIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJjc3MiLCJwcm9wIiwidmFsIiwic3R5bGUiLCJkZWZhdWx0VmlldyIsImdldENvbXB1dGVkU3R5bGUiLCJjdXJyZW50U3R5bGUiLCJtYXRyaXgiLCJzZWxmT25seSIsImFwcGxpZWRUcmFuc2Zvcm1zIiwidHJhbnNmb3JtIiwibWF0cml4Rm4iLCJET01NYXRyaXgiLCJXZWJLaXRDU1NNYXRyaXgiLCJDU1NNYXRyaXgiLCJNU0NTU01hdHJpeCIsImZpbmQiLCJ0YWdOYW1lIiwibGlzdCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbGluZ0VsZW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRSZWN0IiwicmVsYXRpdmVUb0NvbnRhaW5pbmdCbG9jayIsInJlbGF0aXZlVG9Ob25TdGF0aWNQYXJlbnQiLCJ1bmRvU2NhbGUiLCJjb250YWluZXIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbFJlY3QiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJoZWlnaHQiLCJ3aWR0aCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsImNvbnRhaW5lclJlY3QiLCJwYXJzZUludCIsImVsTWF0cml4Iiwic2NhbGVYIiwiYSIsInNjYWxlWSIsImQiLCJpc1Njcm9sbGVkUGFzdCIsImVsU2lkZSIsInBhcmVudFNpZGUiLCJwYXJlbnQiLCJnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudCIsImVsU2lkZVZhbCIsInBhcmVudFNpZGVWYWwiLCJ2aXNpYmxlIiwiZ2V0Q2hpbGQiLCJjaGlsZE51bSIsIm9wdGlvbnMiLCJpbmNsdWRlRHJhZ0VsIiwiY3VycmVudENoaWxkIiwiY2hpbGRyZW4iLCJkaXNwbGF5IiwiU29ydGFibGUiLCJnaG9zdCIsImRyYWdnZWQiLCJkcmFnZ2FibGUiLCJsYXN0Q2hpbGQiLCJsYXN0IiwibGFzdEVsZW1lbnRDaGlsZCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJpbmRleCIsIm5vZGVOYW1lIiwidG9VcHBlckNhc2UiLCJjbG9uZSIsImdldFJlbGF0aXZlU2Nyb2xsT2Zmc2V0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsIndpblNjcm9sbGVyIiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsImluZGV4T2ZPYmplY3QiLCJOdW1iZXIiLCJpbmNsdWRlU2VsZiIsImVsZW0iLCJnb3RTZWxmIiwiY2xpZW50V2lkdGgiLCJzY3JvbGxXaWR0aCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImVsZW1DU1MiLCJvdmVyZmxvd1giLCJvdmVyZmxvd1kiLCJib2R5IiwiZXh0ZW5kIiwiZHN0Iiwic3JjIiwiaXNSZWN0RXF1YWwiLCJyZWN0MSIsInJlY3QyIiwiTWF0aCIsInJvdW5kIiwiX3Rocm90dGxlVGltZW91dCIsInRocm90dGxlIiwiY2FsbGJhY2siLCJtcyIsImFyZ3MiLCJfdGhpcyIsInNldFRpbWVvdXQiLCJjYW5jZWxUaHJvdHRsZSIsImNsZWFyVGltZW91dCIsInNjcm9sbEJ5IiwieCIsInkiLCJQb2x5bWVyIiwiJCIsImpRdWVyeSIsIlplcHRvIiwiZG9tIiwiY2xvbmVOb2RlIiwic2V0UmVjdCIsInJlY3QiLCJ1bnNldFJlY3QiLCJnZXRDaGlsZENvbnRhaW5pbmdSZWN0RnJvbUVsZW1lbnQiLCJnaG9zdEVsIiwiY2hpbGQiLCJfcmVjdCRsZWZ0IiwiX3JlY3QkdG9wIiwiX3JlY3QkcmlnaHQiLCJfcmVjdCRib3R0b20iLCJhbmltYXRlZCIsImNoaWxkUmVjdCIsIm1pbiIsIkluZmluaXR5IiwibWF4IiwiZXhwYW5kbyIsIkRhdGUiLCJnZXRUaW1lIiwiQW5pbWF0aW9uU3RhdGVNYW5hZ2VyIiwiYW5pbWF0aW9uU3RhdGVzIiwiYW5pbWF0aW9uQ2FsbGJhY2tJZCIsImNhcHR1cmVBbmltYXRpb25TdGF0ZSIsImFuaW1hdGlvbiIsImZyb21SZWN0IiwidGhpc0FuaW1hdGlvbkR1cmF0aW9uIiwiY2hpbGRNYXRyaXgiLCJmIiwiZSIsImFkZEFuaW1hdGlvblN0YXRlIiwicmVtb3ZlQW5pbWF0aW9uU3RhdGUiLCJzcGxpY2UiLCJhbmltYXRlQWxsIiwiYW5pbWF0aW5nIiwiYW5pbWF0aW9uVGltZSIsInRpbWUiLCJ0b1JlY3QiLCJwcmV2RnJvbVJlY3QiLCJwcmV2VG9SZWN0IiwiYW5pbWF0aW5nUmVjdCIsInRhcmdldE1hdHJpeCIsImNhbGN1bGF0ZVJlYWxUaW1lIiwiYW5pbWF0ZSIsImFuaW1hdGlvblJlc2V0VGltZXIiLCJjdXJyZW50UmVjdCIsImR1cmF0aW9uIiwidHJhbnNsYXRlWCIsInRyYW5zbGF0ZVkiLCJhbmltYXRpbmdYIiwiYW5pbWF0aW5nWSIsImZvclJlcGFpbnREdW1teSIsInJlcGFpbnQiLCJlYXNpbmciLCJvZmZzZXRXaWR0aCIsInNxcnQiLCJwb3ciLCJwbHVnaW5zIiwiZGVmYXVsdHMiLCJpbml0aWFsaXplQnlEZWZhdWx0IiwiUGx1Z2luTWFuYWdlciIsIm1vdW50IiwicGx1Z2luIiwib3B0aW9uIiwicCIsInBsdWdpbk5hbWUiLCJjb25jYXQiLCJwbHVnaW5FdmVudCIsImV2ZW50TmFtZSIsInNvcnRhYmxlIiwiZXZ0IiwiZXZlbnRDYW5jZWxlZCIsImNhbmNlbCIsImV2ZW50TmFtZUdsb2JhbCIsImluaXRpYWxpemVQbHVnaW5zIiwiaW5pdGlhbGl6ZWQiLCJtb2RpZmllZCIsIm1vZGlmeU9wdGlvbiIsImdldEV2ZW50UHJvcGVydGllcyIsImV2ZW50UHJvcGVydGllcyIsIm1vZGlmaWVkVmFsdWUiLCJvcHRpb25MaXN0ZW5lcnMiLCJkaXNwYXRjaEV2ZW50IiwiX3JlZiIsInJvb3RFbCIsInRhcmdldEVsIiwiY2xvbmVFbCIsInRvRWwiLCJmcm9tRWwiLCJvbGRJbmRleCIsIm5ld0luZGV4Iiwib2xkRHJhZ2dhYmxlSW5kZXgiLCJuZXdEcmFnZ2FibGVJbmRleCIsIm9yaWdpbmFsRXZlbnQiLCJwdXRTb3J0YWJsZSIsImV4dHJhRXZlbnRQcm9wZXJ0aWVzIiwib25OYW1lIiwiY2hhckF0Iiwic3Vic3RyIiwiQ3VzdG9tRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwidG8iLCJpdGVtIiwicHVsbE1vZGUiLCJsYXN0UHV0TW9kZSIsInVuZGVmaW5lZCIsImFsbEV2ZW50UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImRhdGEiLCJiaW5kIiwiZHJhZ0VsIiwicGFyZW50RWwiLCJuZXh0RWwiLCJsYXN0RG93bkVsIiwiY2xvbmVIaWRkZW4iLCJkcmFnU3RhcnRlZCIsIm1vdmVkIiwiYWN0aXZlU29ydGFibGUiLCJhY3RpdmUiLCJoaWRlR2hvc3RGb3JUYXJnZXQiLCJfaGlkZUdob3N0Rm9yVGFyZ2V0IiwidW5oaWRlR2hvc3RGb3JUYXJnZXQiLCJfdW5oaWRlR2hvc3RGb3JUYXJnZXQiLCJjbG9uZU5vd0hpZGRlbiIsImNsb25lTm93U2hvd24iLCJkaXNwYXRjaFNvcnRhYmxlRXZlbnQiLCJfZGlzcGF0Y2hFdmVudCIsImluZm8iLCJhY3RpdmVHcm91cCIsImF3YWl0aW5nRHJhZ1N0YXJ0ZWQiLCJpZ25vcmVOZXh0Q2xpY2siLCJzb3J0YWJsZXMiLCJ0YXBFdnQiLCJ0b3VjaEV2dCIsImxhc3REeCIsImxhc3REeSIsInRhcERpc3RhbmNlTGVmdCIsInRhcERpc3RhbmNlVG9wIiwibGFzdFRhcmdldCIsImxhc3REaXJlY3Rpb24iLCJwYXN0Rmlyc3RJbnZlcnRUaHJlc2giLCJpc0NpcmN1bXN0YW50aWFsSW52ZXJ0IiwidGFyZ2V0TW92ZURpc3RhbmNlIiwiZ2hvc3RSZWxhdGl2ZVBhcmVudCIsImdob3N0UmVsYXRpdmVQYXJlbnRJbml0aWFsU2Nyb2xsIiwiX3NpbGVudCIsInNhdmVkSW5wdXRDaGVja2VkIiwiZG9jdW1lbnRFeGlzdHMiLCJQb3NpdGlvbkdob3N0QWJzb2x1dGVseSIsIkNTU0Zsb2F0UHJvcGVydHkiLCJzdXBwb3J0RHJhZ2dhYmxlIiwiY3JlYXRlRWxlbWVudCIsInN1cHBvcnRDc3NQb2ludGVyRXZlbnRzIiwiY3NzVGV4dCIsInBvaW50ZXJFdmVudHMiLCJfZGV0ZWN0RGlyZWN0aW9uIiwiZWxDU1MiLCJlbFdpZHRoIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJib3JkZXJMZWZ0V2lkdGgiLCJib3JkZXJSaWdodFdpZHRoIiwiY2hpbGQxIiwiY2hpbGQyIiwiZmlyc3RDaGlsZENTUyIsInNlY29uZENoaWxkQ1NTIiwiZmlyc3RDaGlsZFdpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0Iiwic2Vjb25kQ2hpbGRXaWR0aCIsImZsZXhEaXJlY3Rpb24iLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwic3BsaXQiLCJ0b3VjaGluZ1NpZGVDaGlsZDIiLCJjbGVhciIsIl9kcmFnRWxJblJvd0NvbHVtbiIsImRyYWdSZWN0IiwidGFyZ2V0UmVjdCIsInZlcnRpY2FsIiwiZHJhZ0VsUzFPcHAiLCJkcmFnRWxTMk9wcCIsImRyYWdFbE9wcExlbmd0aCIsInRhcmdldFMxT3BwIiwidGFyZ2V0UzJPcHAiLCJ0YXJnZXRPcHBMZW5ndGgiLCJfZGV0ZWN0TmVhcmVzdEVtcHR5U29ydGFibGUiLCJyZXQiLCJzb21lIiwidGhyZXNob2xkIiwiZW1wdHlJbnNlcnRUaHJlc2hvbGQiLCJpbnNpZGVIb3Jpem9udGFsbHkiLCJpbnNpZGVWZXJ0aWNhbGx5IiwiX3ByZXBhcmVHcm91cCIsInRvRm4iLCJwdWxsIiwic2FtZUdyb3VwIiwiZ3JvdXAiLCJvdGhlckdyb3VwIiwiam9pbiIsIm9yaWdpbmFsR3JvdXAiLCJjaGVja1B1bGwiLCJjaGVja1B1dCIsInB1dCIsInJldmVydENsb25lIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCIsInRvdWNoZXMiLCJuZWFyZXN0IiwiY2xpZW50WCIsImNsaWVudFkiLCJfb25EcmFnT3ZlciIsIl9jaGVja091dHNpZGVUYXJnZXRFbCIsIl9pc091dHNpZGVUaGlzRWwiLCJzb3J0IiwiZGlzYWJsZWQiLCJzdG9yZSIsImhhbmRsZSIsInN3YXBUaHJlc2hvbGQiLCJpbnZlcnRTd2FwIiwiaW52ZXJ0ZWRTd2FwVGhyZXNob2xkIiwicmVtb3ZlQ2xvbmVPbkhpZGUiLCJkaXJlY3Rpb24iLCJnaG9zdENsYXNzIiwiY2hvc2VuQ2xhc3MiLCJkcmFnQ2xhc3MiLCJpZ25vcmUiLCJwcmV2ZW50T25GaWx0ZXIiLCJzZXREYXRhIiwiZGF0YVRyYW5zZmVyIiwidGV4dENvbnRlbnQiLCJkcm9wQnViYmxlIiwiZHJhZ292ZXJCdWJibGUiLCJkYXRhSWRBdHRyIiwiZGVsYXkiLCJkZWxheU9uVG91Y2hPbmx5IiwidG91Y2hTdGFydFRocmVzaG9sZCIsImRldmljZVBpeGVsUmF0aW8iLCJmb3JjZUZhbGxiYWNrIiwiZmFsbGJhY2tDbGFzcyIsImZhbGxiYWNrT25Cb2R5IiwiZmFsbGJhY2tUb2xlcmFuY2UiLCJmYWxsYmFja09mZnNldCIsInN1cHBvcnRQb2ludGVyIiwibmF0aXZlRHJhZ2dhYmxlIiwiX29uVGFwU3RhcnQiLCJnZXQiLCJjb250YWlucyIsIl9nZXREaXJlY3Rpb24iLCJ0eXBlIiwidG91Y2giLCJwb2ludGVyVHlwZSIsIm9yaWdpbmFsVGFyZ2V0Iiwic2hhZG93Um9vdCIsInBhdGgiLCJjb21wb3NlZFBhdGgiLCJfc2F2ZUlucHV0Q2hlY2tlZFN0YXRlIiwiYnV0dG9uIiwiaXNDb250ZW50RWRpdGFibGUiLCJjcml0ZXJpYSIsInRyaW0iLCJfcHJlcGFyZURyYWdTdGFydCIsIm93bmVyRG9jdW1lbnQiLCJkcmFnU3RhcnRGbiIsIm5leHRTaWJsaW5nIiwiX2xhc3RYIiwiX2xhc3RZIiwiX29uRHJvcCIsIl9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMiLCJfdHJpZ2dlckRyYWdTdGFydCIsIl9kaXNhYmxlRHJhZ2dhYmxlIiwiX2Rpc2FibGVEZWxheWVkRHJhZyIsIl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIiLCJfZHJhZ1N0YXJ0VGltZXIiLCJhYnMiLCJmbG9vciIsIl9vblRvdWNoTW92ZSIsIl9vbkRyYWdTdGFydCIsInNlbGVjdGlvbiIsIl9uZXh0VGljayIsImVtcHR5IiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiZXJyIiwiX2RyYWdTdGFydGVkIiwiZmFsbGJhY2siLCJfYXBwZW5kR2hvc3QiLCJfbnVsbGluZyIsIl9lbXVsYXRlRHJhZ092ZXIiLCJlbGVtZW50RnJvbVBvaW50IiwiaW5zZXJ0ZWQiLCJnaG9zdE1hdHJpeCIsInJlbGF0aXZlU2Nyb2xsT2Zmc2V0IiwiZHgiLCJkeSIsImIiLCJjIiwiY3NzTWF0cml4IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJfaGlkZUNsb25lIiwiY2xvbmVJZCIsImluc2VydEJlZm9yZSIsIl9sb29wSWQiLCJzZXRJbnRlcnZhbCIsImVmZmVjdEFsbG93ZWQiLCJfZHJhZ1N0YXJ0SWQiLCJyZXZlcnQiLCJpc093bmVyIiwiY2FuU29ydCIsImZyb21Tb3J0YWJsZSIsImNvbXBsZXRlZEZpcmVkIiwiZHJhZ092ZXJFdmVudCIsImV4dHJhIiwiYXhpcyIsImNvbXBsZXRlZCIsIm9uTW92ZSIsImFmdGVyIiwiX29uTW92ZSIsImNoYW5nZWQiLCJpbnNlcnRpb24iLCJfc2hvd0Nsb25lIiwiX2lnbm9yZVdoaWxlQW5pbWF0aW5nIiwiZWxMYXN0Q2hpbGQiLCJfZ2hvc3RJc0xhc3QiLCJfZ2hvc3RJc0ZpcnN0IiwiZmlyc3RDaGlsZCIsInRhcmdldEJlZm9yZUZpcnN0U3dhcCIsImRpZmZlcmVudExldmVsIiwiZGlmZmVyZW50Um93Q29sIiwic2lkZTEiLCJzY3JvbGxlZFBhc3RUb3AiLCJzY3JvbGxCZWZvcmUiLCJfZ2V0U3dhcERpcmVjdGlvbiIsInNpYmxpbmciLCJkcmFnSW5kZXgiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJtb3ZlVmVjdG9yIiwiX3Vuc2lsZW50IiwiX29mZk1vdmVFdmVudHMiLCJfb2ZmVXBFdmVudHMiLCJjbGVhckludGVydmFsIiwiX2NhbmNlbE5leHRUaWNrIiwicmVtb3ZlQ2hpbGQiLCJzYXZlIiwiY2hlY2tlZCIsImhhbmRsZUV2ZW50IiwiX2dsb2JhbERyYWdPdmVyIiwidG9BcnJheSIsIm9yZGVyIiwiZ2V0QXR0cmlidXRlIiwiX2dlbmVyYXRlSWQiLCJ1c2VBbmltYXRpb24iLCJpdGVtcyIsImlkIiwic2V0IiwiY2xvc2VzdCQxIiwiZGVzdHJveSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkcm9wRWZmZWN0Iiwid2lsbEluc2VydEFmdGVyIiwib25Nb3ZlRm4iLCJyZXRWYWwiLCJkcmFnZ2VkUmVjdCIsInJlbGF0ZWQiLCJyZWxhdGVkUmVjdCIsImZpcnN0RWxSZWN0IiwiY2hpbGRDb250YWluaW5nUmVjdCIsInNwYWNlciIsImxhc3RFbFJlY3QiLCJpc0xhc3RUYXJnZXQiLCJtb3VzZU9uQXhpcyIsInRhcmdldExlbmd0aCIsInRhcmdldFMxIiwidGFyZ2V0UzIiLCJpbnZlcnQiLCJfZ2V0SW5zZXJ0RGlyZWN0aW9uIiwic3RyIiwiaHJlZiIsInN1bSIsImNoYXJDb2RlQXQiLCJyb290IiwiaW5wdXRzIiwiaWR4IiwidXRpbHMiLCJpcyIsIm5leHRUaWNrIiwiY2FuY2VsTmV4dFRpY2siLCJkZXRlY3REaXJlY3Rpb24iLCJlbGVtZW50IiwiX2xlbiIsIl9rZXkiLCJjcmVhdGUiLCJhdXRvU2Nyb2xscyIsInNjcm9sbEVsIiwic2Nyb2xsUm9vdEVsIiwic2Nyb2xsaW5nIiwibGFzdEF1dG9TY3JvbGxYIiwibGFzdEF1dG9TY3JvbGxZIiwidG91Y2hFdnQkMSIsInBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsIiwiQXV0b1Njcm9sbFBsdWdpbiIsIkF1dG9TY3JvbGwiLCJzY3JvbGwiLCJmb3JjZUF1dG9TY3JvbGxGYWxsYmFjayIsInNjcm9sbFNlbnNpdGl2aXR5Iiwic2Nyb2xsU3BlZWQiLCJidWJibGVTY3JvbGwiLCJfaGFuZGxlQXV0b1Njcm9sbCIsIl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwiLCJkcmFnT3ZlckNvbXBsZXRlZCIsIl9yZWYyIiwiZHJhZ092ZXJCdWJibGUiLCJkcm9wIiwiY2xlYXJQb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCIsImNsZWFyQXV0b1Njcm9sbHMiLCJudWxsaW5nIiwiYXV0b1Njcm9sbCIsIm9nRWxlbVNjcm9sbGVyIiwibmV3RWxlbSIsInBpZCIsImlzRmFsbGJhY2siLCJzZW5zIiwic3BlZWQiLCJzY3JvbGxUaGlzSW5zdGFuY2UiLCJzY3JvbGxDdXN0b21GbiIsInNjcm9sbEZuIiwibGF5ZXJzT3V0IiwiY3VycmVudFBhcmVudCIsImNhblNjcm9sbFgiLCJjYW5TY3JvbGxZIiwic2Nyb2xsUG9zWCIsInNjcm9sbFBvc1kiLCJ2eCIsInZ5IiwibGF5ZXIiLCJzY3JvbGxPZmZzZXRZIiwic2Nyb2xsT2Zmc2V0WCIsInRvU29ydGFibGUiLCJjaGFuZ2VkVG91Y2hlcyIsIm9uU3BpbGwiLCJSZXZlcnQiLCJzdGFydEluZGV4IiwiZHJhZ1N0YXJ0IiwiX3JlZjMiLCJSZW1vdmUiLCJfcmVmNCIsInBhcmVudFNvcnRhYmxlIiwibGFzdFN3YXBFbCIsIlN3YXBQbHVnaW4iLCJTd2FwIiwic3dhcENsYXNzIiwiZHJhZ092ZXJWYWxpZCIsInN3YXAiLCJwcmV2U3dhcEVsIiwic3dhcE5vZGVzIiwic3dhcEl0ZW0iLCJuMSIsIm4yIiwicDEiLCJwMiIsImkxIiwiaTIiLCJpc0VxdWFsTm9kZSIsIm11bHRpRHJhZ0VsZW1lbnRzIiwibXVsdGlEcmFnQ2xvbmVzIiwibGFzdE11bHRpRHJhZ1NlbGVjdCIsIm11bHRpRHJhZ1NvcnRhYmxlIiwiaW5pdGlhbEZvbGRpbmciLCJmb2xkaW5nIiwiZHJhZ0VsJDEiLCJjbG9uZXNGcm9tUmVjdCIsImNsb25lc0hpZGRlbiIsIk11bHRpRHJhZ1BsdWdpbiIsIk11bHRpRHJhZyIsImF2b2lkSW1wbGljaXREZXNlbGVjdCIsIl9kZXNlbGVjdE11bHRpRHJhZyIsIl9jaGVja0tleURvd24iLCJfY2hlY2tLZXlVcCIsInNlbGVjdGVkQ2xhc3MiLCJtdWx0aURyYWdLZXkiLCJtdWx0aURyYWdFbGVtZW50IiwibXVsdGlEcmFnS2V5RG93biIsImlzTXVsdGlEcmFnIiwiZGVsYXlTdGFydEdsb2JhbCIsImRlbGF5RW5kZWQiLCJzZXR1cENsb25lIiwic29ydGFibGVJbmRleCIsImluc2VydE11bHRpRHJhZ0Nsb25lcyIsInNob3dDbG9uZSIsImhpZGVDbG9uZSIsIl9yZWY1IiwiZHJhZ1N0YXJ0R2xvYmFsIiwiX3JlZjYiLCJtdWx0aURyYWciLCJfcmVmNyIsIl90aGlzMiIsInJlbW92ZU11bHRpRHJhZ0VsZW1lbnRzIiwiZHJhZ092ZXIiLCJfcmVmOCIsIl9yZWY5IiwiaW5zZXJ0TXVsdGlEcmFnRWxlbWVudHMiLCJfcmVmMTAiLCJkcmFnUmVjdEFic29sdXRlIiwiY2xvbmVzSGlkZGVuQmVmb3JlIiwiZHJhZ092ZXJBbmltYXRpb25DYXB0dXJlIiwiX3JlZjExIiwiZHJhZ01hdHJpeCIsImRyYWdPdmVyQW5pbWF0aW9uQ29tcGxldGUiLCJfcmVmMTIiLCJzaGlmdEtleSIsImxhc3RJbmRleCIsImN1cnJlbnRJbmRleCIsIm11bHRpRHJhZ0luZGV4IiwidXBkYXRlIiwibnVsbGluZ0dsb2JhbCIsImRlc3Ryb3lHbG9iYWwiLCJzaGlmdCIsInNlbGVjdCIsImRlc2VsZWN0IiwiX3RoaXMzIiwib2xkSW5kaWNpZXMiLCJuZXdJbmRpY2llcyIsImNsb25lcyIsInRvTG93ZXJDYXNlIiwiY2xvbmVzSW5zZXJ0ZWQiLCJlbGVtZW50c0luc2VydGVkIl0sInNvdXJjZVJvb3QiOiIifQ==