(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[322],{6099:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search/[id]",function(){return e(5635)}])},7539:function(n,t,e){"use strict";e.d(t,{Ip:function(){return w},OG:function(){return p},Pf:function(){return l},QA:function(){return h},al:function(){return d},jX:function(){return m},kY:function(){return x},rC:function(){return v},xl:function(){return f}});var r=e(4051),c=e.n(r),o=e(9669),s=e.n(o);function u(n,t,e,r,c,o,s){try{var u=n[o](s),a=u.value}catch(i){return void e(i)}u.done?t(a):Promise.resolve(a).then(r,c)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(r,c){var o=n.apply(t,e);function s(n){u(o,r,c,s,a,"next",n)}function a(n){u(o,r,c,s,a,"throw",n)}s(void 0)}))}}var i="".concat("http://www.smart-gardening.kro.kr:8000/api/v1");function l(n){return n?fetch("".concat(i,"/flowers/?word=").concat(n)).then((function(n){return n.json()})):fetch("".concat(i,"/flowers")).then((function(n){return n.json()}))}function f(n){return fetch("".concat(i,"/flowers/").concat(n)).then((function(n){return n.json()}))}function h(){return fetch("".concat(i,"/core/1")).then((function(n){return n.json()}))}function d(){return fetch("".concat(i,"/gardens")).then((function(n){return n.json()}))}function x(n){return fetch("".concat(i,"/gardens/").concat(n)).then((function(n){return n.json()}))}function m(n){return fetch("".concat(i,"/gardens/").concat(n,"/diary")).then((function(n){return n.json()}))}function p(n,t){s().postForm("".concat(i,"/gardens/").concat(n,"/diary/create"),t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(n){return n}))}function w(n,t){return j.apply(this,arguments)}function j(){return(j=a(c().mark((function n(t,e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().post("".concat(i,"/core/1/command/"),e,{headers:{"Content-Type":"application/json"}});case 2:n.sent;case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return y.apply(this,arguments)}function y(){return(y=a(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().post("".concat(i,"/core/1/command/"),t,{headers:{"Content-Type":"application/json"}});case 2:n.sent;case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},5635:function(n,t,e){"use strict";e.r(t);var r=e(5893),c=e(5675),o=e.n(c),s=(e(7294),e(1163)),u=e(8767),a=e(7539);t.default=function(){var n=(0,s.useRouter)(),t=(0,u.useQuery)(["flower",n.query.id],(function(){return(0,a.xl)(n.query.id)})),e=t.data;t.isLoading;return(0,r.jsx)("div",{className:"w-full h-full py-5",children:(0,r.jsx)("div",{className:"w-4/5 h-5/6 m-auto overflow-y-scroll bg-white rounded-xl shadow-2xl scrollbar-hide",children:e&&(0,r.jsxs)("div",{className:"w-full h-full flex flex-col",children:[(0,r.jsx)("div",{onClick:n.back,className:"flex items-center h-10 ml-3 select-none cursor-pointer",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 hover:scale-125",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"})})}),(0,r.jsx)("div",{className:"flex justify-center rounded-2xl",children:(0,r.jsx)(o(),{src:e.main_image,width:180,height:180})}),(0,r.jsx)("h2",{className:"text-xl font-normal flex justify-center items-center",children:e.name}),(0,r.jsx)("h3",{className:"text-lg text-blue-300 font-normal flex justify-center items-center",children:e.flower_language}),(0,r.jsx)("span",{className:"my-1 text-md font-bold flex justify-center",children:"\ub0b4\uc6a9"}),(0,r.jsx)("p",{className:"text-xs mx-3",children:e.content}),(0,r.jsx)("span",{className:"my-1 text-md font-bold flex justify-center",children:"\uae30\ub974\ub294 \ubc29\ubc95"}),(0,r.jsx)("p",{className:"text-xs mx-3",children:e.growth}),(0,r.jsx)("span",{className:"my-1 text-md font-bold flex justify-center",children:"\uc0ac\uc6a9\ubc95"}),(0,r.jsx)("p",{className:"text-xs mx-3 mb-3",children:e.usage})]})})})}}},function(n){n.O(0,[669,675,774,888,179],(function(){return t=6099,n(n.s=t);var t}));var t=n.O();_N_E=t}]);