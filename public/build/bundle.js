var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function f(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function s(){return a(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let p;function m(t){p=t}const h=[],g=[],$=[],y=[],b=Promise.resolve();let x=!1;function v(t){$.push(t)}const _=new Set;function w(){do{for(;h.length;){const t=h.shift();m(t),E(t.$$)}for(;g.length;)g.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];_.has(n)||(_.add(n),n())}$.length=0}while(h.length);for(;y.length;)y.pop()();x=!1,_.clear()}function E(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const A=new Set;function L(t,n){t&&t.i&&(A.delete(t),t.i(n))}function N(t,n,e,r){if(t&&t.o){if(A.has(t))return;A.add(t),(void 0).c.push(()=>{A.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function S(t){t&&t.c()}function k(t,e,u){const{fragment:c,on_mount:l,on_destroy:f,after_update:i}=t.$$;c&&c.m(e,u),v(()=>{const e=l.map(n).filter(o);f?f.push(...e):r(e),t.$$.on_mount=[]}),i.forEach(v)}function C(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function H(t,n){-1===t.$$.dirty[0]&&(h.push(t),x||(x=!0,b.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function M(n,o,u,c,l,f,i=[-1]){const a=p;m(n);const s=o.props||{},d=n.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:e(),dirty:i};let h=!1;d.ctx=u?u(n,s,(t,e,...r)=>{const o=r.length?r[0]:e;return d.ctx&&l(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),h&&H(n,t)),e}):[],d.update(),h=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),o.target&&(o.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(o.target)):d.fragment&&d.fragment.c(),o.intro&&L(n.$$.fragment),k(n,o.target,o.anchor),w()),m(a)}class T{$destroy(){C(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function j(n){let e,r;return{c(){e=i("form"),e.innerHTML='<input type="text" placeholder="User name..."> \n  <button type="submit">Add</button>'},m(t,n){var o;l(t,e,n),r=function(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}(e,"submit",(o=O,function(t){return t.preventDefault(),o.call(this,t)}))},p:t,i:t,o:t,d(t){t&&f(e),r()}}}async function O(t){}class q extends T{constructor(t){super(),M(this,t,null,j,u,{})}}function B(t,n,e){const r=t.slice();return r[1]=n[e],r}function D(n){let e;return{c(){e=i("p"),e.textContent="No users found"},m(t,n){l(t,e,n)},p:t,d(t){t&&f(e)}}}function P(t){let n,e=t[0],r=[];for(let n=0;n<e.length;n+=1)r[n]=U(B(t,e,n));return{c(){n=i("ul");for(let t=0;t<r.length;t+=1)r[t].c()},m(t,e){l(t,n,e);for(let t=0;t<r.length;t+=1)r[t].m(n,null)},p(t,o){if(1&o){let u;for(e=t[0],u=0;u<e.length;u+=1){const c=B(t,e,u);r[u]?r[u].p(c,o):(r[u]=U(c),r[u].c(),r[u].m(n,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=e.length}},d(t){t&&f(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(r,t)}}}function U(n){let e,r,o=n[1]+"";return{c(){e=i("li"),r=a(o)},m(t,n){l(t,e,n),c(e,r)},p:t,d(t){t&&f(e)}}}function V(n){let e;let r=function(t,n){return t[0].length>0?P:D}(n)(n);return{c(){e=i("div"),r.c()},m(t,n){l(t,e,n),r.m(e,null)},p(t,[n]){r.p(t,n)},i:t,o:t,d(t){t&&f(e),r.d()}}}function z(t){return[[]]}class F extends T{constructor(t){super(),M(this,t,z,V,u,{})}}function G(t){let n,e,r,o,u,p,m,h,g,$;const y=new q({}),b=new F({});return{c(){n=i("main"),e=i("h1"),r=a("Hello "),o=a(t[0]),u=a("!"),p=s(),m=i("p"),m.innerHTML='Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.',h=s(),S(y.$$.fragment),g=s(),S(b.$$.fragment),d(e,"class","svelte-19xyxbs"),d(n,"class","svelte-19xyxbs")},m(t,f){l(t,n,f),c(n,e),c(e,r),c(e,o),c(e,u),c(n,p),c(n,m),c(n,h),k(y,n,null),c(n,g),k(b,n,null),$=!0},p(t,[n]){(!$||1&n)&&function(t,n){n=""+n,t.data!==n&&(t.data=n)}(o,t[0])},i(t){$||(L(y.$$.fragment,t),L(b.$$.fragment,t),$=!0)},o(t){N(y.$$.fragment,t),N(b.$$.fragment,t),$=!1},d(t){t&&f(n),C(y),C(b)}}}function I(t,n,e){let{name:r}=n;return t.$set=t=>{"name"in t&&e(0,r=t.name)},[r]}return new class extends T{constructor(t){super(),M(this,t,I,G,u,{name:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
