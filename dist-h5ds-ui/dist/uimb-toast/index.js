/*! For license information please see index.js.LICENSE.txt */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("react"),require("react-dom"));else if("function"==typeof define&&define.amd)define(["react","react-dom"],e);else{var n="object"==typeof exports?e(require("react"),require("react-dom")):e(t.React,t.ReactDOM);for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(window,(function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=253)}({0:function(e,n){e.exports=t},10:function(t,e){function n(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,u,"next",t)}function u(t){n(i,o,a,c,u,"throw",t)}c(void 0)}))}}},15:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},16:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},18:function(t,e,n){var r=n(16);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},231:function(t,e,n){},253:function(t,e,n){"use strict";n.r(e);var r=n(15),o=n.n(r),a=(n(288),n(0)),i=n.n(a),c=n(86),u=new function t(){o()(this,t),this.loading=function(t){return c.default.confirm({content:i.a.createElement("div",null,i.a.createElement("div",{className:"uimb-toast-icon"},i.a.createElement("svg",{className:"uimb-toast-loading-icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40"},i.a.createElement("path",{d:"M115.8318125 298.41875A448.03125 448.03125 0 0 0 62.0005625 512c0 248.540625 201.459375 450 450 450s450-201.459375 450-450S760.5411875 62 512.0005625 62a12.684375 12.684375 0 0 0 0 25.36875c234.534375 0 424.659375 190.125 424.659375 424.659375S746.5349375 936.6875 512.0005625 936.6875 87.3411875 746.5625 87.3411875 512.028125c0-71.353125 17.60625-140.146875 50.765625-201.54375a12.684375 12.684375 0 0 0-22.303125-12.065625z",fill:"#ffffff"}))),i.a.createElement("div",null,t||"加载中")),title:null,className:"uimb-toast",noTransformAnimate:!0,noModalMaskEvent:!0})},this.success=function(t){return c.default.confirm({content:i.a.createElement("div",null,i.a.createElement("div",{className:"uimb-toast-icon"},i.a.createElement("svg",{t:"1597923102983",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40"},i.a.createElement("path",{d:"M391.161 865.561c-16 0-32-6.2-44-18.6l-329.7-338.5c-23.7-24.3-23.2-63.2 1.1-86.9 24.4-23.6 63.2-23.1 86.9 1.1l329.7 338.5c23.7 24.3 23.2 63.2-1.1 86.9-12 11.7-27.4 17.5-42.9 17.5z",fill:"#ffffff"}),i.a.createElement("path",{d:"M391.161 865.561c-15.5 0-31-5.8-43-17.5-24.2-23.8-24.7-62.6-1-86.9l571.4-584.2c23.7-24.3 62.7-24.6 86.9-1 24.2 23.7 24.7 62.6 1 86.9l-571.4 584.2c-12 12.3-27.9 18.5-43.9 18.5z",fill:"#ffffff"}))),i.a.createElement("div",null,t||"已完成")),title:null,className:"uimb-toast",noTransformAnimate:!0,noModalMaskEvent:!0})},this.error=function(t){return c.default.confirm({content:i.a.createElement("div",null,i.a.createElement("div",{className:"uimb-toast-icon"},i.a.createElement("svg",{t:"1597923133741",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40"},i.a.createElement("path",{d:"M582.4 512l224-224c19.2-19.2 19.2-51.2 0-70.4s-51.2-19.2-70.4 0l-224 224L288 224c-19.2-19.2-51.2-19.2-70.4 0s-19.2 51.2 0 70.4l224 217.6-224 224c-19.2 19.2-19.2 51.2 0 70.4 6.4 6.4 19.2 12.8 32 12.8s25.6-6.4 32-12.8l230.4-224 224 224c6.4 6.4 19.2 12.8 32 12.8s25.6-6.4 32-12.8c19.2-19.2 19.2-51.2 0-70.4L582.4 512z",fill:"#ffffff"}))),i.a.createElement("div",null,t||"失败了")),title:null,className:"uimb-toast",noTransformAnimate:!0,noModalMaskEvent:!0})}};e.default=u},28:function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},288:function(t,e,n){},29:function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}},30:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},4:function(t,e,n){t.exports=n(78)},41:function(t,n){t.exports=e},5:function(t,e,n){var r=n(28),o=n(29),a=n(18),i=n(30);t.exports=function(t,e){return r(t)||o(t,e)||a(t,e)||i()}},69:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},7:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&t.push(i)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},78:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return N()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function f(){}function m(){}function d(){}var p={};p[o]=function(){return this};var v=Object.getPrototypeOf,h=v&&v(v(j([])));h&&h!==e&&n.call(h,o)&&(p=h);var y=d.prototype=f.prototype=Object.create(p);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){var r;this._invoke=function(o,a){function i(){return new e((function(r,i){!function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}(o,a,r,i)}))}return r=r?r.then(i,i):i()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return m.prototype=y.constructor=d,d.constructor=m,m.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(g.prototype),g.prototype[a]=function(){return this},t.AsyncIterator=g,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new g(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),c(y,i,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},86:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r),a=n(10),i=n.n(a),c=n(69),u=n.n(c),l=n(5),s=n.n(l),f=(n(231),n(0)),m=n.n(f),d=n(41),p=n.n(d),v=n(7),h=n.n(v);function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){u()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t){var e=t.visible,n=t.onCancel,r=t.className,o=t.children,a=t.zIndex,i=void 0===a?1e3:a,c=t.style,u=void 0===c?{}:c,l=t.container,d=t.footer,v=void 0!==d&&d,y=t.title,g=void 0===y?"":y,w=t.onOk,x=t.noModalMaskEvent,E=void 0!==x&&x,O=t.noTransformAnimate,j=void 0!==O&&O,N=Object(f.useState)(e),k=s()(N,2),L=k[0],S=k[1],P=Object(f.useRef)();Object(f.useEffect)((function(){return S(e),function(){P.current&&clearTimeout(P.current)}}),[e]);var _=function(){S(!1),P.current=setTimeout((function(){n()}),500)};return e?$("body").addClass("uimb-noscroll"):$("body").removeClass("uimb-noscroll"),p.a.createPortal(m.a.createElement("div",{className:h()("uimb-modal",r,{"uimb-modal-visible":e}),style:b({zIndex:i},u)},m.a.createElement("div",{className:"uimb-modal-mask",style:{pointerEvents:E?"none":"initial",opacity:L?1:0},onClick:_}),e&&m.a.createElement("div",{className:"uimb-modal-content",style:{transform:j?"none":"translateY(".concat(L?0:"100%",")"),opacity:L?1:0}},g&&m.a.createElement("div",{className:"uimb-modal-title"},g),m.a.createElement("div",{className:"uimb-modal-body"},o),v&&m.a.createElement("div",{className:"uimb-modal-footer"},n&&m.a.createElement("a",{className:"uimb-modal-btn uimb-modal-btn-cancel",onClick:_},"取消"),m.a.createElement("a",{className:"uimb-modal-btn",onClick:w},"确定")))),l||document.body)}function w(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;return Number(Math.random().toString().substr(3,t)+Date.now()).toString(36)}g.confirm=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="id_".concat(w());$(t.container||document.body).addClass("uimb-noscroll").append('<div id="'.concat(e,'"></div>'));var n=$("#".concat(e)),r=function(e){e?(n.find(".uimb-modal-mask").css({opacity:1}),n.find(".uimb-modal-content").css({opacity:1,transform:t.noTransformAnimate?"none":"translateY(0)"})):(n.find(".uimb-modal-mask").css({opacity:0}),n.find(".uimb-modal-content").css({opacity:0,transform:t.noTransformAnimate?"none":"translateY(100%)"}))},a=function(){r(!1),setTimeout((function(){$("body").removeClass("uimb-noscroll"),n.remove(),p.a.unmountComponentAtNode(n[0])}),500)},c=function(){var e=i()(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.onCancel){e.next=3;break}return e.next=3,t.onCancel();case 3:a();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=i()(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.onOk){e.next=3;break}return e.next=3,t.onOk();case 3:a();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();setTimeout((function(){r(!0)}));var l=t.content,s=t.zIndex,f=void 0===s?1e3:s,v=t.title,y=void 0===v?"":v,b=t.className,g=t.noModalMaskEvent,x=t.noTransformAnimate,E=t.onCancel;return Object(d.render)(m.a.createElement("div",{className:h()("uimb-modal uimb-modal-confirm uimb-modal-visible",b),style:{zIndex:f}},m.a.createElement("div",{className:"uimb-modal-mask",onClick:c,style:{opacity:0,pointerEvents:g?"none":"initial"}}),m.a.createElement("div",{className:"uimb-modal-content",style:{opacity:0,transform:x?"none":"translateY(100%)"}},y&&m.a.createElement("div",{className:"uimb-modal-title"},y),m.a.createElement("div",{className:"uimb-modal-body"},l),m.a.createElement("div",{className:"uimb-modal-footer"},E&&m.a.createElement("a",{className:"uimb-modal-btn uimb-modal-btn-cancel",onClick:c},"取消"),m.a.createElement("a",{className:"uimb-modal-btn",onClick:u},"确定")))),n[0]),a};var x=g;e.default=x}})}));