/*! For license information please see index.js.LICENSE.txt */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("antd"));else if("function"==typeof define&&define.amd)define(["react","antd"],t);else{var r="object"==typeof exports?t(require("react"),require("antd")):t(e.React,e.antd);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(e,t){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=232)}({0:function(t,r){t.exports=e},232:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),u=r(3),i=[12,14,16,18,20,22,24,26,28,30,32,34,36,38,42,48,60,72,84,96,108,120,132,144,156,168,180,192,204,216,228,240,252,264,276,288,300],a=u.Select.Option;var f=function(e){var t=e.value,r=e.onChange,n=e.width,f=void 0===n?120:n;return o.a.createElement(u.Select,{size:"small",className:"ui-select",defaultValue:parseInt(t,10),style:{width:f},onChange:r},i.map((function(e){return o.a.createElement(a,{value:e,key:e},e,"px")})))};t.default=f},3:function(e,r){e.exports=t}})}));