(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,n){e.exports={container:"_3ItQVxqYYfA0lVDGGc-Ekf",description:"_3XQnFGlzg2pvmiwKrcyeJd"}},,,,,function(e,t,n){e.exports={github:"_3srZdwbWD8YgpJAC0gu0lp"}},function(e,t,n){e.exports={container:"_2HUbqD6IBfs2LsK7eC5QAO"}},function(e,t,n){e.exports=n(16)},,,,,,,function(e,t,n){e.exports={"sample-rule":"_2h5xmQ-2D8zKZ0ThDU5V-3",sampleRule:"_2h5xmQ-2D8zKZ0ThDU5V-3"}},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(5),c=(n(4),n(1)),a=n.n(c);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?p(e):t}(this,s(t).call(this,e))).state={more:!1},n.handleClick=n.handleClick.bind(p(p(n))),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o["Component"]),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(t,[{key:"handleClick",value:function(){this.setState(function(e){return{more:!e.more}})}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.description;return r.a.createElement("div",{className:a.a.container,onClick:this.handleClick},r.a.createElement("h2",null,t),this.state.more&&r.a.createElement("div",{className:a.a.description},n))}}]),t}();m.propTypes={};var d=m,h=r.a.memo(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{title:"Entrypoints",description:"Starting points to create the dependency graphs"}),r.a.createElement(d,{title:"Mode",description:"New property to reduce the required configuration for an useful build"}),r.a.createElement(d,{title:"Loaders",description:"Preprocessing files..."}),r.a.createElement(d,{title:"Plugins",description:"Does anything else that a loader cannot do"}))}),y=n(6),b=n.n(y),E=r.a.memo(function(){return r.a.createElement("a",{className:b.a.github,href:"https://github.com/carloluis/webpack-demo"})}),v=n(7),g=n.n(v),w=function(e){var t=e.title;return r.a.createElement("div",{className:g.a.container},r.a.createElement(E,null),r.a.createElement("h1",null,t),r.a.createElement(h,null))};w.propTypes={};var O=w,_=(n(15),n(2)),k=n.n(_);var D=function(){console.info("hello from foo!")};console.info("nodeEnv:","production"),console.info("VERSION:","1.2.0"),console.info("PRODUCTION:",!0),console.info("DEBUG:",!1),console.info("Production code",k()("75900.56")),console.info(k()("1123581321")),D(),Object(i.render)(r.a.createElement(O,{title:"Webpack 4 Demo"}),document.querySelector("#app"))}],[[8,1,2]]]);