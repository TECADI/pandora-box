function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},c.apply(this,arguments)}function l(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,n){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},u(e,n)}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},i(e)}function p(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(f=function(){return!!e})()}function s(e,n,r){if(f())return Reflect.construct.apply(null,arguments);var t=[null];t.push.apply(t,n);var o=new(e.bind.apply(e,t));return r&&u(o,r.prototype),o}function a(e){var n=typeof Map=="function"?new Map:void 0;return a=function(t){if(t===null||!p(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(typeof n<"u"){if(n.has(t))return n.get(t);n.set(t,o)}function o(){return s(t,arguments,i(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),u(o,t)},a(e)}export{c as _,u as a,l as b,a as c,f as d,i as e};