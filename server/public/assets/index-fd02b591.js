(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function qe(){const e=localStorage.getItem("theme");return e===null||e===""?(localStorage.setItem("theme","dark"),document.body.classList.add("dark"),"dark"):(localStorage.setItem("theme",""),document.body.classList.remove("dark"),"")}function Ze(){const e=localStorage.getItem("theme");e&&(document.body.className=e)}function $e(){const e=document.createElement("div");e.classList.add("container-dark-mode");const t=document.createElement("button");return t.classList.add("btn-dark-mode"),t.classList.add("btn-primary"),t.innerHTML="Dark Mode",t.addEventListener("click",()=>{if(qe()==="dark"){t.innerHTML="Light Mode";return}t.innerHTML="Dark Mode"}),e.appendChild(t),e}function ze(){return`
    <div
      class="flex h-32 w-full py-4 gap-6 items-center flex-col justify-center"
    >
      <div class="flex px-24 w-full h-full justify-between items-center">
        <div id="logo" class="w-28 h-14 bg-gray-200">Logo</div>
        <div class="h-14 w-[45rem]">
          <nav
            class="list-none text-4xl font-light flex h-full w-full justify-between items-center shrink-0"
          >
            <li><a href="#" class="text-[#5BFAC0]">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Help</a></li>
          </nav>
        </div>
        <div
          id="nav-login-btn"
          class="text-4xl font-light justify-center shrink-0 items-center flex w-48 h-14"
        >
          Login
        </div>
      </div>
      <hr class="border-0 bg-gray-200 h-px w-full" />
    </div>
    `}function Je(){return`
    <div
      class="flex h-32 w-full py-4 gap-6 items-center flex-col justify-center"
    >
      <div class="flex px-24 w-full h-full justify-between items-center">
        <div id="logo" class="w-28 h-14 bg-gray-200">Logo</div>
        <div class="h-14 w-[45rem]">
          <nav
            class="list-none text-4xl font-light flex h-full w-full justify-between items-center shrink-0"
          >
            <li><a href="#" class="text-[#5BFAC0]">Trackers</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Help</a></li>
          </nav>
        </div>
        <div
          id="nav-login-btn"
          class="text-4xl font-light justify-center shrink-0 items-center flex w-48 h-14"
        >
          Log out
        </div>
      </div>
      <hr class="border-0 bg-gray-200 h-px w-full" />
    </div>
    `}async function We(){}function Ke(){return`
        <p>landing pagse</p>
    `}function ye(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ge}=Object.prototype,{getPrototypeOf:ee}=Object,V=(e=>t=>{const n=Ge.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),E=e=>(e=e.toLowerCase(),t=>V(t)===e),U=e=>t=>typeof t===e,{isArray:O}=Array,F=U("undefined");function Xe(e){return e!==null&&!F(e)&&e.constructor!==null&&!F(e.constructor)&&v(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ve=E("ArrayBuffer");function Qe(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ve(e.buffer),t}const Ye=U("string"),v=U("function"),be=U("number"),_=e=>e!==null&&typeof e=="object",et=e=>e===!0||e===!1,H=e=>{if(V(e)!=="object")return!1;const t=ee(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},tt=E("Date"),nt=E("File"),rt=E("Blob"),st=E("FileList"),it=e=>_(e)&&v(e.pipe),ot=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||v(e.append)&&((t=V(e))==="formdata"||t==="object"&&v(e.toString)&&e.toString()==="[object FormData]"))},at=E("URLSearchParams"),lt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function P(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),O(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let l;for(r=0;r<o;r++)l=i[r],t.call(null,e[l],l,e)}}function Ee(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Le=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Se=e=>!F(e)&&e!==Le;function K(){const{caseless:e}=Se(this)&&this||{},t={},n=(r,s)=>{const i=e&&Ee(t,s)||s;H(t[i])&&H(r)?t[i]=K(t[i],r):H(r)?t[i]=K({},r):O(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&P(arguments[r],n);return t}const ct=(e,t,n,{allOwnKeys:r}={})=>(P(t,(s,i)=>{n&&v(s)?e[i]=ye(s,n):e[i]=s},{allOwnKeys:r}),e),dt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ut=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ft=(e,t,n,r)=>{let s,i,o;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&ee(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ht=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},pt=e=>{if(!e)return null;if(O(e))return e;let t=e.length;if(!be(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},mt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ee(Uint8Array)),gt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Ct=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},wt=E("HTMLFormElement"),xt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ae=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),yt=E("RegExp"),ke=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};P(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},vt=e=>{ke(e,(t,n)=>{if(v(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(v(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},bt=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return O(e)?r(e):r(String(e).split(t)),n},Et=()=>{},Lt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Z="abcdefghijklmnopqrstuvwxyz",le="0123456789",Te={DIGIT:le,ALPHA:Z,ALPHA_DIGIT:Z+Z.toUpperCase()+le},St=(e=16,t=Te.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function kt(e){return!!(e&&v(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Tt=e=>{const t=new Array(10),n=(r,s)=>{if(_(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=O(r)?[]:{};return P(r,(o,l)=>{const h=n(o,s+1);!F(h)&&(i[l]=h)}),t[s]=void 0,i}}return r};return n(e,0)},Rt=E("AsyncFunction"),Ot=e=>e&&(_(e)||v(e))&&v(e.then)&&v(e.catch),a={isArray:O,isArrayBuffer:ve,isBuffer:Xe,isFormData:ot,isArrayBufferView:Qe,isString:Ye,isNumber:be,isBoolean:et,isObject:_,isPlainObject:H,isUndefined:F,isDate:tt,isFile:nt,isBlob:rt,isRegExp:yt,isFunction:v,isStream:it,isURLSearchParams:at,isTypedArray:mt,isFileList:st,forEach:P,merge:K,extend:ct,trim:lt,stripBOM:dt,inherits:ut,toFlatObject:ft,kindOf:V,kindOfTest:E,endsWith:ht,toArray:pt,forEachEntry:gt,matchAll:Ct,isHTMLForm:wt,hasOwnProperty:ae,hasOwnProp:ae,reduceDescriptors:ke,freezeMethods:vt,toObjectSet:bt,toCamelCase:xt,noop:Et,toFiniteNumber:Lt,findKey:Ee,global:Le,isContextDefined:Se,ALPHABET:Te,generateString:St,isSpecCompliantForm:kt,toJSONObject:Tt,isAsyncFn:Rt,isThenable:Ot};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Re=m.prototype,Oe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Oe[e]={value:e}});Object.defineProperties(m,Oe);Object.defineProperty(Re,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,i)=>{const o=Object.create(Re);return a.toFlatObject(e,o,function(h){return h!==Error.prototype},l=>l!=="isAxiosError"),m.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const At=null;function G(e){return a.isPlainObject(e)||a.isArray(e)}function Ae(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ce(e,t,n){return e?e.concat(t).map(function(s,i){return s=Ae(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function Ft(e){return a.isArray(e)&&!e.some(G)}const Pt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function I(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,w){return!a.isUndefined(w[f])});const r=n.metaTokens,s=n.visitor||d,i=n.dots,o=n.indexes,h=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function p(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(!h&&a.isBlob(u))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?h&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function d(u,f,w){let x=u;if(u&&!w&&typeof u=="object"){if(a.endsWith(f,"{}"))f=r?f:f.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&Ft(u)||(a.isFileList(u)||a.endsWith(f,"[]"))&&(x=a.toArray(u)))return f=Ae(f),x.forEach(function(k,Ie){!(a.isUndefined(k)||k===null)&&t.append(o===!0?ce([f],Ie,i):o===null?f:f+"[]",p(k))}),!1}return G(u)?!0:(t.append(ce(w,f,i),p(u)),!1)}const c=[],C=Object.assign(Pt,{defaultVisitor:d,convertValue:p,isVisitable:G});function y(u,f){if(!a.isUndefined(u)){if(c.indexOf(u)!==-1)throw Error("Circular reference detected in "+f.join("."));c.push(u),a.forEach(u,function(x,S){(!(a.isUndefined(x)||x===null)&&s.call(t,x,a.isString(S)?S.trim():S,f,C))===!0&&y(x,f?f.concat(S):[S])}),c.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function de(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function te(e,t){this._pairs=[],e&&I(e,this,t)}const Fe=te.prototype;Fe.append=function(t,n){this._pairs.push([t,n])};Fe.toString=function(t){const n=t?function(r){return t.call(this,r,de)}:de;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Mt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Pe(e,t,n){if(!t)return e;const r=n&&n.encode||Mt,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new te(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Bt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ue=Bt,Me={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ht=typeof URLSearchParams<"u"?URLSearchParams:te,Nt=typeof FormData<"u"?FormData:null,jt=typeof Blob<"u"?Blob:null,Dt={isBrowser:!0,classes:{URLSearchParams:Ht,FormData:Nt,Blob:jt},protocols:["http","https","file","blob","url","data"]},Be=typeof window<"u"&&typeof document<"u",Vt=(e=>Be&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Ut=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),_t=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Be,hasStandardBrowserEnv:Vt,hasStandardBrowserWebWorkerEnv:Ut},Symbol.toStringTag,{value:"Module"})),b={..._t,...Dt};function It(e,t){return I(e,new b.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return b.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function qt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Zt(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function He(e){function t(n,r,s,i){let o=n[i++];const l=Number.isFinite(+o),h=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,h?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!l):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=Zt(s[o])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(qt(r),s,n,0)}),n}return null}function $t(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ne={transitional:Me,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(He(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return It(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return I(l?{"files[]":t}:t,h&&new h,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),$t(t)):t}],transformResponse:[function(t){const n=this.transitional||ne.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:b.classes.FormData,Blob:b.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ne.headers[e]={}});const re=ne,zt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Jt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&zt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},fe=Symbol("internals");function A(e){return e&&String(e).trim().toLowerCase()}function N(e){return e===!1||e==null?e:a.isArray(e)?e.map(N):String(e)}function Wt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Kt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function $(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Gt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Xt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class q{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(l,h,p){const d=A(h);if(!d)throw new Error("header name must be a non-empty string");const c=a.findKey(s,d);(!c||s[c]===void 0||p===!0||p===void 0&&s[c]!==!1)&&(s[c||h]=N(l))}const o=(l,h)=>a.forEach(l,(p,d)=>i(p,d,h));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!Kt(t)?o(Jt(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=A(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Wt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=A(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||$(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=A(o),o){const l=a.findKey(r,o);l&&(!n||$(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||$(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=N(s),delete n[i];return}const l=t?Gt(i):String(i).trim();l!==i&&delete n[i],n[l]=N(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[fe]=this[fe]={accessors:{}}).accessors,s=this.prototype;function i(o){const l=A(o);r[l]||(Xt(s,o),r[l]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}q.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(q.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(q);const L=q;function z(e,t){const n=this||re,r=t||n,s=L.from(r.headers);let i=r.data;return a.forEach(e,function(l){i=l.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Ne(e){return!!(e&&e.__CANCEL__)}function M(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(M,m,{__CANCEL__:!0});function Qt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Yt=b.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),a.isString(r)&&o.push("path="+r),a.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function en(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function tn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function je(e,t){return e&&!en(t)?tn(e,t):t}const nn=b.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const l=a.isString(o)?s(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function rn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function sn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(h){const p=Date.now(),d=r[i];o||(o=p),n[s]=h,r[s]=p;let c=i,C=0;for(;c!==s;)C+=n[c++],c=c%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),p-o<t)return;const y=d&&p-d;return y?Math.round(C*1e3/y):void 0}}function he(e,t){let n=0;const r=sn(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,l=i-n,h=r(l),p=i<=o;n=i;const d={loaded:i,total:o,progress:o?i/o:void 0,bytes:l,rate:h||void 0,estimated:h&&o&&p?(o-i)/h:void 0,event:s};d[t?"download":"upload"]=!0,e(d)}}const on=typeof XMLHttpRequest<"u",an=on&&function(e){return new Promise(function(n,r){let s=e.data;const i=L.from(e.headers).normalize();let{responseType:o,withXSRFToken:l}=e,h;function p(){e.cancelToken&&e.cancelToken.unsubscribe(h),e.signal&&e.signal.removeEventListener("abort",h)}let d;if(a.isFormData(s)){if(b.hasStandardBrowserEnv||b.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((d=i.getContentType())!==!1){const[f,...w]=d?d.split(";").map(x=>x.trim()).filter(Boolean):[];i.setContentType([f||"multipart/form-data",...w].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const f=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(f+":"+w))}const C=je(e.baseURL,e.url);c.open(e.method.toUpperCase(),Pe(C,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function y(){if(!c)return;const f=L.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),x={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:f,config:e,request:c};Qt(function(k){n(k),p()},function(k){r(k),p()},x),c=null}if("onloadend"in c?c.onloadend=y:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(y)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const x=e.transitional||Me;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),r(new m(w,x.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},b.hasStandardBrowserEnv&&(l&&a.isFunction(l)&&(l=l(e)),l||l!==!1&&nn(C))){const f=e.xsrfHeaderName&&e.xsrfCookieName&&Yt.read(e.xsrfCookieName);f&&i.set(e.xsrfHeaderName,f)}s===void 0&&i.setContentType(null),"setRequestHeader"in c&&a.forEach(i.toJSON(),function(w,x){c.setRequestHeader(x,w)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",he(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",he(e.onUploadProgress)),(e.cancelToken||e.signal)&&(h=f=>{c&&(r(!f||f.type?new M(null,e,c):f),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(h),e.signal&&(e.signal.aborted?h():e.signal.addEventListener("abort",h)));const u=rn(C);if(u&&b.protocols.indexOf(u)===-1){r(new m("Unsupported protocol "+u+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},X={http:At,xhr:an};a.forEach(X,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const pe=e=>`- ${e}`,ln=e=>a.isFunction(e)||e===null||e===!1,De={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!ln(n)&&(r=X[(o=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([l,h])=>`adapter ${l} `+(h===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(pe).join(`
`):" "+pe(i[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:X};function J(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new M(null,e)}function me(e){return J(e),e.headers=L.from(e.headers),e.data=z.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),De.getAdapter(e.adapter||re.adapter)(e).then(function(r){return J(e),r.data=z.call(e,e.transformResponse,r),r.headers=L.from(r.headers),r},function(r){return Ne(r)||(J(e),r&&r.response&&(r.response.data=z.call(e,e.transformResponse,r.response),r.response.headers=L.from(r.response.headers))),Promise.reject(r)})}const ge=e=>e instanceof L?e.toJSON():e;function R(e,t){t=t||{};const n={};function r(p,d,c){return a.isPlainObject(p)&&a.isPlainObject(d)?a.merge.call({caseless:c},p,d):a.isPlainObject(d)?a.merge({},d):a.isArray(d)?d.slice():d}function s(p,d,c){if(a.isUndefined(d)){if(!a.isUndefined(p))return r(void 0,p,c)}else return r(p,d,c)}function i(p,d){if(!a.isUndefined(d))return r(void 0,d)}function o(p,d){if(a.isUndefined(d)){if(!a.isUndefined(p))return r(void 0,p)}else return r(void 0,d)}function l(p,d,c){if(c in t)return r(p,d);if(c in e)return r(void 0,p)}const h={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(p,d)=>s(ge(p),ge(d),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(d){const c=h[d]||s,C=c(e[d],t[d],d);a.isUndefined(C)&&c!==l||(n[d]=C)}),n}const Ve="1.6.2",se={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{se[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ce={};se.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Ve+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,l)=>{if(t===!1)throw new m(s(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Ce[o]&&(Ce[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,l):!0}};function cn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const l=e[i],h=l===void 0||o(l,i,e);if(h!==!0)throw new m("option "+i+" must be "+h,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}}const Q={assertOptions:cn,validators:se},T=Q.validators;class D{constructor(t){this.defaults=t,this.interceptors={request:new ue,response:new ue}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=R(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Q.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:Q.assertOptions(s,{encode:T.function,serialize:T.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&a.merge(i.common,i[n.method]);i&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete i[u]}),n.headers=L.concat(o,i);const l=[];let h=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(n)===!1||(h=h&&f.synchronous,l.unshift(f.fulfilled,f.rejected))});const p=[];this.interceptors.response.forEach(function(f){p.push(f.fulfilled,f.rejected)});let d,c=0,C;if(!h){const u=[me.bind(this),void 0];for(u.unshift.apply(u,l),u.push.apply(u,p),C=u.length,d=Promise.resolve(n);c<C;)d=d.then(u[c++],u[c++]);return d}C=l.length;let y=n;for(c=0;c<C;){const u=l[c++],f=l[c++];try{y=u(y)}catch(w){f.call(this,w);break}}try{d=me.call(this,y)}catch(u){return Promise.reject(u)}for(c=0,C=p.length;c<C;)d=d.then(p[c++],p[c++]);return d}getUri(t){t=R(this.defaults,t);const n=je(t.baseURL,t.url);return Pe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){D.prototype[t]=function(n,r){return this.request(R(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,l){return this.request(R(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}D.prototype[t]=n(),D.prototype[t+"Form"]=n(!0)});const j=D;class ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(l=>{r.subscribe(l),i=l}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,l){r.reason||(r.reason=new M(i,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ie(function(s){t=s}),cancel:t}}}const dn=ie;function un(e){return function(n){return e.apply(null,n)}}function fn(e){return a.isObject(e)&&e.isAxiosError===!0}const Y={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Y).forEach(([e,t])=>{Y[t]=e});const hn=Y;function Ue(e){const t=new j(e),n=ye(j.prototype.request,t);return a.extend(n,j.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ue(R(e,s))},n}const g=Ue(re);g.Axios=j;g.CanceledError=M;g.CancelToken=dn;g.isCancel=Ne;g.VERSION=Ve;g.toFormData=I;g.AxiosError=m;g.Cancel=g.CanceledError;g.all=function(t){return Promise.all(t)};g.spread=un;g.isAxiosError=fn;g.mergeConfig=R;g.AxiosHeaders=L;g.formToJSON=e=>He(a.isHTMLForm(e)?new FormData(e):e);g.getAdapter=De.getAdapter;g.HttpStatusCode=hn;g.default=g;const pn=g,oe=()=>{const e=sessionStorage.getItem("token");return e??""},B=pn.create({baseURL:"http://localhost:3000",timeout:2e3});async function mn(e){const{data:t,status:n}=await B({method:"POST",url:"/account",data:e});if(n===200||n===201)return t;throw new Error("Error registering user")}async function gn(e){const{data:t,status:n}=await B({method:"POST",url:"/auth/login",data:e});if(n===200||n===201)return t.token;throw new Error("Error registering user")}async function Cn(){const{data:e}=await B({method:"GET",url:"/tracker",headers:{"Content-Type":"application/json","x-auth-token":oe()}});return e}async function we(e){const{data:t}=await B({method:"POST",url:"/tracker",data:e,headers:{"Content-Type":"application/json","x-auth-token":oe()}});return t}async function wn(e,t){const{data:n}=await B({method:"PUT",url:`/tracker/${e}`,data:t,headers:{"Content-Type":"application/json","x-auth-token":oe()}});return n}function xn(){var e;(e=document.getElementById("btn-login"))==null||e.addEventListener("click",async()=>{const t=document.getElementById("email-login").value,n=document.getElementById("password-login").value;if(!t||!n){alert("Please fill all the fields");return}let r=null;try{r=await gn({email:t,password:n})}catch{alert("Something went wrong")}r?(alert(`User ${t} logged in successfully`),sessionStorage.setItem("token",r),window.location.hash="#dashboard"):alert(`User ${t} not found`)})}function yn(){return`
        <div
      class="flex w-full h-screen shrink-0 align-center justify-center gap-11"
    >
      <div
        style="background-image: url('https://source.unsplash.com/random')"
        class="w-[50%] h-screen bg-cover bg-center bg-no-repeat"
      ></div>
      <div
        class="flex w-[50%] h-screen flex-col justify-center items-center gap-3 shrink-0"
      >
        <div class="w-[16rem] h-[8rem] bg-red-200">Logo</div>
        <div
          class="shrink-0 rounded-sm flex w-[31.5rem] h-72 justify-center align-center gap-12 flex-col"
        >
          <input id="email-login" class="bg-red-200 h-16" type="email" />
          <input id="password-login" class="bg-red-200 h-16" type="password" />
        </div>

        <button
        id="btn-login"
          class="bg-[#5BFAC0] rounded-sm flex w-[31.5rem] h-[4rem] justify-center items-center shrink-0 text-white text-3xl font-bold font-sans"
        >
          Login
        </button>
      </div>
    </div>
    `}function vn(){var e,t;(e=document.getElementById("btn-register"))==null||e.addEventListener("click",async()=>{const n=document.getElementById("email-input").value,r=document.getElementById("password-input").value,s=document.getElementById("password-confirm-input").value,i=document.getElementById("register-terms").checked;if(!n||!r||!s){alert("Please fill all the fields");return}if(!i){alert("Please accept the terms and conditions");return}if(r!==s){alert("Passwords do not match");return}let o=null;try{o=await mn({email:n,password:r})}catch{alert("Something went wrong")}o&&(alert(`User ${o.email} created successfully`),window.location.hash="#login")}),(t=document.getElementById("btn-cancel-register"))==null||t.addEventListener("click",()=>{window.location.hash="#"})}function bn(){return`
    <div
      style="background-image: url('https://source.unsplash.com/random')"
      class="bg-cover flex w-full h-screen shrink-0 align-center items-center justify-center gap-11"
    >
      <div
        class="py-20 px-14 justify-center items-center flex-col shrink-0 gap-11 inline-flex bg-white h-[50rem] rounded-[1.125rem] shadow-md"
      >
        <h1 class="font-sans font-light text-5xl">Register</h1>
        <div class="w-full flex flex-col items-start gap-11">
          <input id="email-input" placeholder="SilverFlin" class="w-full h-16 bg-red-200" type="email" />
          <input id="password-input"  class="w-full h-16 bg-red-200" type="password" />
          <input id="password-confirm-input" class="w-full h-16 bg-red-200" type="password" />
        </div>
        <div>
          <input type="checkbox" id="register-terms" name="my-checkbox" id="my-checkbox" />
          <label for="my-checkbox">I Agree the terms and conditions</label>
        </div>
        <div class="flex items-start gap-28">
          <button
            id="btn-cancel-register"
            class="font-light text-3xl justify-center flex w-[11rem] h-[4rem] items-center px-[2.8rem] bg-red-200"
          >
            Cancel
          </button>
          <button
            id="btn-register"
            class="font-light text-3xl justify-center flex w-[11rem] h-[4rem] items-center px-[2.8rem] bg-red-200"
          >
            Register
          </button>
        </div>
      </div>
    </div>
    `}function En(e,t){const n=document.createElement("div");n.classList.add("select-type"),n.id=t.idHTMLElement,n.role="select",e.appendChild(n),n.innerHTML=`
    <div class="option-type-selected">
        <div class="option-type" value="none">
            <div class="option-icon"><svg height="25" viewBox="0 0 19 30" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.51873 0C6.33123 0 3.96873 0.975 2.46873 2.475C0.968725 3.975 0.443726 5.85 0.256226 7.275L4.00623 7.7625C4.15623 6.825 4.45623 5.8875 5.16873 5.175C5.88123 4.4625 7.00623 3.75 9.51873 3.75C11.9937 3.75 13.3437 4.35 14.0937 5.025C14.8437 5.7 15.1437 6.525 15.1437 7.5C15.1437 10.6125 13.8687 11.475 11.9937 13.125C10.1187 14.775 7.64373 17.175 7.64373 21.5625V22.5H11.3937V21.5625C11.3937 18.45 12.5562 17.5875 14.4312 15.9375C16.3062 14.2875 18.8937 11.8875 18.8937 7.5C18.8937 5.7 18.2562 3.675 16.6812 2.2125C15.0687 0.75 12.6687 0 9.51873 0ZM7.64373 26.25V30H11.3937V26.25H7.64373Z" />
                </svg>
            </div>
            <div class="option-text"> <span>Chart?</span></div>

        </div>
    </div>
    <div class="arrow"><svg width="35" height="23" viewBox="0 0 35 23" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.2757 1.84614C0.458397 2.67257 0 3.78798 0 4.95029C0 6.11261 0.458397 7.22802 1.2757 8.05445L14.1342 21.0267C15.088 21.9674 16.3218 22.4355 17.5424 22.4355C18.7631 22.4355 19.975 21.9674 20.9069 21.0267L33.7261 8.09821C34.5423 7.27122 35 6.15601 35 4.99405C35 3.83208 34.5423 2.71687 33.7261 1.88989C33.3243 1.4822 32.8455 1.15845 32.3175 0.937468C31.7894 0.716488 31.2227 0.602691 30.6503 0.602691C30.078 0.602691 29.5113 0.716488 28.9832 0.937468C28.4552 1.15845 27.9764 1.4822 27.5746 1.88989L17.5206 12.0271L7.42714 1.84614C7.02447 1.44003 6.54536 1.11769 6.01746 0.897717C5.48956 0.67774 4.92332 0.564484 4.35142 0.564484C3.77952 0.564484 3.21329 0.67774 2.68539 0.897717C2.15749 1.11769 1.67838 1.44003 1.2757 1.84614Z" />
        </svg>
    </div>
    <ul class="select-menu">
        <li class="select-item" value="barChart">
            <div class="option-icon"><svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0V21H24V18H3V0H0ZM15 0V15H21V0H15ZM6 6V15H12V6H6Z" />
            </svg>
            
            </div>
            <div class="option-text"> <span>Bar Chart</span></div>

        </li>
        <li class="select-item" value="lineChart">
            <div class="option-icon"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3995 9.75556L20.0635 1.61111L21.9665 2.72222L16.2135 12.7778L9.05251 8.61111L3.80551 17.7778H21.9995V20H-0.000488281V0H2.19951V16.1556L8.24951 5.55556L15.3995 9.75556Z" />
            </svg>
            </div>
            <div class="option-text"> <span>Line Chart</span></div>

        </li>
    </ul>  
`,_e(n)}function Ln(e,t){const n=document.createElement("div");return n.classList.add("tracker"),e.appendChild(n),t&&t.forEach(r=>{const s=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),l=document.createElement("div");o.classList.add("tracker-item-footer"),s.classList.add("tracker-item"),i.classList.add("tracker-item-header"),l.classList.add("tracker-item-body"),n.appendChild(s),s.appendChild(i),s.appendChild(l),Sn(i,r),l.innerHTML+=`
                        <div class="tracker-chart">
                        component to chart js
                        </div>
                    `,o.innerHTML='<button class="btn-primary">Capture entry</button>',En(o,{idHTMLElement:"select-type-graphic"}),s.appendChild(o);const h=s.querySelector(".edit-tracker"),p=s.querySelector("input"),d=i.querySelector("button"),c=o.querySelector("button");d.addEventListener("click",()=>{console.log("fetch... detelete")}),c.addEventListener("click",()=>{console.log("Capture entry.....")}),s.querySelector(".edit-item").addEventListener("click",()=>{h.classList.add("active"),p.focus()}),kn(p,h)}),n}function Sn(e,t){const n=document.createElement("div");return n.classList.add("edit-item"),n.innerHTML=`
            <h4>${t.name} 
                <svg width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                    <path  d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z" >
                    </path>
                </svg>
            </h4>
            <div class='edit-tracker'>
                <input class='text-input' type='text' value="${t.name}" aria-value="${t._id}">
            </div>
    `,e.appendChild(n),e.innerHTML+=`
    <button>
    <svg  width="25px" heigth="25px" background="none" viewBox="-3 0 32 32" version="1.1">
        <g>
        <g  transform="translate(-261.000000, -205.000000)" >
            <path d="M268,220 C268,219.448 268.448,219 269,219 C269.552,219 270,219.448 270,220 L270,232 C270,232.553 269.552,233 269,233 C268.448,233 268,232.553 268,232 L268,220 L268,220 Z M273,220 C273,219.448 273.448,219 274,219 C274.552,219 275,219.448 275,220 L275,232 C275,232.553 274.552,233 274,233 C273.448,233 273,232.553 273,232 L273,220 L273,220 Z M278,220 C278,219.448 278.448,219 279,219 C279.552,219 280,219.448 280,220 L280,232 C280,232.553 279.552,233 279,233 C278.448,233 278,232.553 278,232 L278,220 L278,220 Z M263,233 C263,235.209 264.791,237 267,237 L281,237 C283.209,237 285,235.209 285,233 L285,217 L263,217 L263,233 L263,233 Z M277,209 L271,209 L271,208 C271,207.447 271.448,207 272,207 L276,207 C276.552,207 277,207.447 277,208 L277,209 L277,209 Z M285,209 L279,209 L279,207 C279,205.896 278.104,205 277,205 L271,205 C269.896,205 269,205.896 269,207 L269,209 L263,209 C261.896,209 261,209.896 261,211 L261,213 C261,214.104 261.895,214.999 262.999,215 L285.002,215 C286.105,214.999 287,214.104 287,213 L287,211 C287,209.896 286.104,209 285,209 L285,209 Z" id="trash" >
            </path>
        </g>
        </g>
    </svg>
    </button>`,n}function kn(e,t){function n(r){setTimeout(()=>{r.classList.remove("active")},150)}e.addEventListener("focus",function(){const r=this.value.length;this.setSelectionRange(r,r)}),e.addEventListener("change",()=>{n(t)}),e.addEventListener("keypress",r=>{r.key==="Enter"&&(n(t),wn(e.getAttribute("aria-value"),{name:e.value}).then(s=>e.value=s.name))}),e.addEventListener("focusout",()=>{n(t)})}function Tn(e,t){const n=document.createElement("div"),r=document.createElement("div"),s=document.createElement("div");n.classList.add("my-trackers"),r.classList.add("my-trackers-header"),s.classList.add("my-trackers-body"),r.innerHTML="<h1>My Trackers</h1>",n.appendChild(r),n.appendChild(s),e.appendChild(n),Ln(s,t)}function Rn(){const e=document.getElementById("mytrackers");e.innerHTML=`
    <form  id="createTracker">
    <div class="form-tracker"  tabindex="0">
    
    <div class="select-type" id="select-type-tracker" role="select">
        <div class="option-type-selected">
            <div class="option-type" value="none">
                <div class="option-icon"><svg height="25" viewBox="0 0 19 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.51873 0C6.33123 0 3.96873 0.975 2.46873 2.475C0.968725 3.975 0.443726 5.85 0.256226 7.275L4.00623 7.7625C4.15623 6.825 4.45623 5.8875 5.16873 5.175C5.88123 4.4625 7.00623 3.75 9.51873 3.75C11.9937 3.75 13.3437 4.35 14.0937 5.025C14.8437 5.7 15.1437 6.525 15.1437 7.5C15.1437 10.6125 13.8687 11.475 11.9937 13.125C10.1187 14.775 7.64373 17.175 7.64373 21.5625V22.5H11.3937V21.5625C11.3937 18.45 12.5562 17.5875 14.4312 15.9375C16.3062 14.2875 18.8937 11.8875 18.8937 7.5C18.8937 5.7 18.2562 3.675 16.6812 2.2125C15.0687 0.75 12.6687 0 9.51873 0ZM7.64373 26.25V30H11.3937V26.25H7.64373Z" />
                    </svg>
                </div>
                <div class="option-text"> <span>Tracker</span></div>
    
            </div>
        </div>
        <div class="arrow"><svg width="35" height="23" viewBox="0 0 35 23" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M1.2757 1.84614C0.458397 2.67257 0 3.78798 0 4.95029C0 6.11261 0.458397 7.22802 1.2757 8.05445L14.1342 21.0267C15.088 21.9674 16.3218 22.4355 17.5424 22.4355C18.7631 22.4355 19.975 21.9674 20.9069 21.0267L33.7261 8.09821C34.5423 7.27122 35 6.15601 35 4.99405C35 3.83208 34.5423 2.71687 33.7261 1.88989C33.3243 1.4822 32.8455 1.15845 32.3175 0.937468C31.7894 0.716488 31.2227 0.602691 30.6503 0.602691C30.078 0.602691 29.5113 0.716488 28.9832 0.937468C28.4552 1.15845 27.9764 1.4822 27.5746 1.88989L17.5206 12.0271L7.42714 1.84614C7.02447 1.44003 6.54536 1.11769 6.01746 0.897717C5.48956 0.67774 4.92332 0.564484 4.35142 0.564484C3.77952 0.564484 3.21329 0.67774 2.68539 0.897717C2.15749 1.11769 1.67838 1.44003 1.2757 1.84614Z" />
            </svg>
        </div>
        <ul class="select-menu">
            <li class="select-item" value="timer">
                <div class="option-icon"><svg width="27" height="30" viewBox="0 0 27 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.5 0V3.75H11.25V3.8625C4.875 4.7625 0 10.275 0 16.875C0 24.1125 5.8875 30 13.125 30C20.3625 30 26.25 24.1125 26.25 16.875C26.25 15.1875 25.875 13.6125 25.3125 12.1875L21.9 13.6125C22.3125 14.7 22.5 15.75 22.5 16.9125C22.5 22.125 18.3375 26.2875 13.125 26.2875C7.9125 26.2875 3.75 22.125 3.75 16.9125C3.75 11.7 7.9125 7.5375 13.125 7.5375C14.25 7.5375 15.3375 7.725 16.425 8.1375L17.7 4.6125C16.8375 4.3125 15.9375 4.1625 15 4.0125V3.7875H18.75V0.0375H7.5V0ZM26.25 4.35C26.25 4.35 12.5625 14.8875 11.85 15.6C11.1375 16.35 11.1375 17.4375 11.85 18.1875C12.5625 18.9375 13.6875 18.9375 14.4375 18.1875C15.1875 17.4375 26.2875 4.35 26.2875 4.35H26.25Z" />
                    </svg>
                </div>
                <div class="option-text"> <span>Timer</span></div>
    
            </li>
            <li class="select-item" value="habit">
                <div class="option-icon"><svg width="19" height="30" viewBox="0 0 19 30" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M6.0963 0.771033C3.97916 2.43667 4.60443 5.9173 7.17307 6.76513C10.7254 7.93723 13.3826 3.73187 10.752 1.10131C9.41555 -0.234802 7.54425 -0.367662 6.0963 0.771033ZM8.28962 7.79048C6.36314 7.90871 5.76227 8.14103 4.06736 9.42046C1.80649 11.1274 1.71754 11.5687 2.78455 15.7674C3.38842 18.1438 3.43609 18.2069 4.62432 18.2031C6.06477 18.199 6.07791 18.2744 5.05556 20.6509C4.46294 22.0291 3.77011 22.8258 2.26286 23.864C1.16057 24.6232 0.162996 25.4936 0.0462738 25.7976C-0.198805 26.4363 0.580342 28.2209 1.19097 28.4191C1.41804 28.493 2.76053 27.6606 4.17357 26.5692C6.03925 25.1284 7.12803 23.9191 8.14887 22.154C9.06013 20.5777 9.62535 19.9183 9.75671 20.2786C9.8678 20.5841 10.5633 22.523 11.3026 24.5872C12.0416 26.6514 12.8932 28.7205 13.1946 29.1847C14.0765 30.5434 16.3528 30.1091 16.3528 28.5824C16.3528 28.2817 15.5084 25.724 14.4763 22.8983C13.4441 20.0726 12.5997 17.2251 12.5997 16.5709V15.3812L14.8302 16.5071C16.849 17.5264 17.1162 17.5779 17.645 17.0487C18.6816 16.0121 18.3735 15.5553 15.5654 13.9651C13.5417 12.8189 13.4404 12.686 12.8102 10.3572C12.2319 8.22172 11.5976 7.35174 10.7862 7.58144C10.6484 7.62047 9.52477 7.71467 8.28962 7.79048ZM5.02741 12.4143C4.89943 12.7378 5.01652 13.9201 5.2875 15.0415C5.76865 17.0333 5.77991 17.046 5.7679 15.5797C5.75026 13.4746 5.32616 11.6611 5.02741 12.4143Z" />
                    </svg>
                </div>
                <div class="option-text"> <span>Habbit</span></div>
    
            </li>
        </ul>
    </div>
    <textarea class="text-input" rows="1" placeholder="What is your tracker?"></textarea>
    <button class="btn-primary" id="btn-create-tracker">create</button>
    </div>
    </form>`,_e(e.querySelector("#select-type-tracker")),On(e.querySelector("#createTracker")),Cn().then(t=>{Tn(e,t)})}function _e(e){const t=e.querySelector(".option-type"),n=e.querySelectorAll(".select-item");e.addEventListener("click",()=>{e.classList.toggle("active")}),n.forEach(r=>{r.addEventListener("click",()=>{t.innerHTML=`<input class="select-value" type="radio" value="${r.getAttribute("value")}" checked>`+r.innerHTML})})}function On(e){const t=e.querySelector(".text-input");e.querySelector("#btn-create-tracker").addEventListener("click",()=>{const r=e.querySelector(".select-value"),s={name:t.value,typeTracker:r.value};we(s),t.value=""}),t.addEventListener("keypress",r=>{const s=e.querySelector(".select-value");if(r.key==="Enter"){r.preventDefault();const i={name:t.value,typeTracker:s.value};we(i),t.value=""}})}function An(){Rn()}function Fn(){return'<div class="my-trackers" id="mytrackers"></div>'}function Pn(){return`
        <div
      class="flex h-screen w-full px-[5rem] py-[3rem] gap-8 items-start justify-center"
    >
      <div class="flex flex-col items-start gap-[1.6rem]">
        <div
          class="shadow-xl bg-gray-100 rounded-tl-[2.2rem] flex w-[27.5rem] h-[25rem] flex-col justify-center gap-7 items-center"
        >
          <div class="flex w-[23rem] justify-center items-start gap-[5.125rem]">
            <div
              class="bg-cover rounded-full w-[8.5rem] h-[8.5rem]"
              style="
                background-image: url('https://source.unsplash.com/random');
              "
            ></div>
            <div
              class="flex flex-col justify-between items-end flex-1 self-stretch"
            >
              <p class="text-[2rem] font-extralight">toledorusso</p>
              <p class="text-[2rem] font-extralight">31 days old</p>
            </div>
          </div>
          <div
            class="shadow-xl bg-gray-100 rounded-[1.06rem] flex w-[15.75rem] py-[1.5rem] justify-center align-center gap-[0.625]"
          >
            <p
              class="text-center text-[2rem] tracking-widest font-extralight italic"
            >
              «Rookie»
            </p>
          </div>
        </div>

        <div
          class="bg-cover shadow-xl flex w-[27.5rem] h-[25rem] flex-col justify-center items-center rounded-bl-[2.2rem] bg-white"
          style="background-image: url('https://source.unsplash.com/random')"
        ></div>
      </div>

      <div
        class="shadow-xl flex h-[51.6rem] w-[67rem] bg-gray-100 rounded-r-[2.2rem] gap-[1.5rem] items-center flex-col py-[2.5rem]"
      >
        <h1 class="uppercase text-center text-4xl font-light">
          Trackers Summary
        </h1>
        <!-- Scrolleable -->
        <div class="flex w-[61.3rem] bg-white">
          <div
            class="overflow-y-scroll flex h-[40rem] py-[3rem] justify-center items-start content-start flex-1 flex-wrap gap-[3.8rem]"
          >
            <!-- Badges -->
            <div
              class="rounded-[0.6rem] bg-gray-200 flex w-[13rem] h-[8.5rem] px[0.3rem] pb-[1.5rem] flex-col justify-end items-center gap-[0.6rem]"
            >
              <div
                class="w-[6.25rem] h-[6.25rem] shrink-0 bg-white rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="101"
                  height="100"
                  viewBox="0 0 101 100"
                  fill="none"
                >
                  <rect x="0.5" width="100" height="100" rx="50" fill="white" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.0648 21.5164C40.8749 24.7921 42.1124 31.6374 47.1958 33.3048C54.226 35.6099 59.4847 27.3393 54.2787 22.1659C51.6337 19.5382 47.9304 19.2769 45.0648 21.5164ZM49.4055 35.3213C45.5929 35.5538 44.4038 36.0107 41.0495 38.5269C36.5751 41.8838 36.3991 42.7519 38.5107 51.0091C39.7058 55.6829 39.8002 55.8069 42.1517 55.7995C45.0024 55.7914 45.0284 55.9397 43.0051 60.6135C41.8323 63.3238 40.4612 64.8908 37.4783 66.9324C35.2968 68.4256 33.3226 70.1373 33.0916 70.7352C32.6066 71.9915 34.1485 75.5012 35.357 75.8909C35.8064 76.0363 38.4632 74.3992 41.2597 72.2528C44.9519 69.4191 47.1066 67.0409 49.1269 63.5696C50.9304 60.4695 52.0489 59.1727 52.3089 59.8812C52.5288 60.4821 53.9051 64.2952 55.3683 68.3548C56.8308 72.4144 58.5161 76.4836 59.1126 77.3967C60.858 80.0686 65.3629 79.2146 65.3629 76.212C65.3629 75.6208 63.6916 70.5905 61.6491 65.0333C59.6065 59.476 57.9353 53.876 57.9353 52.5894V50.2496L62.3495 52.464C66.3448 54.4687 66.8736 54.5698 67.9202 53.529C69.9717 51.4904 69.3619 50.5921 63.8045 47.4647C59.7996 45.2105 59.5991 44.9492 58.352 40.3692C57.2074 36.1694 55.9521 34.4584 54.3463 34.9102C54.0737 34.9869 51.8499 35.1722 49.4055 35.3213ZM42.9494 44.4148C42.6962 45.0511 42.9279 47.3761 43.4642 49.5816C44.4164 53.4988 44.4387 53.5239 44.4149 50.6401C44.38 46.5 43.5407 42.9334 42.9494 44.4148Z"
                    fill="#5C5C5C"
                  />
                </svg>
              </div>
              <h1
                class="font-extralight text-center text-xl h-[1.25rem] w-[8.3rem]"
              >
                Daily Exercise
              </h1>
              <p
                class="w-[8.3rem] h-[1.25rem] text-xs text-center font-semibold lowercase"
              >
                <span class="text-[#FF5F5F] inline">10</span> consecutive days
              </p>
            </div>

            <div
              class="rounded-[0.6rem] bg-gray-200 flex w-[13rem] h-[8.5rem] px[0.3rem] pb-[1.5rem] flex-col justify-end items-center gap-[0.6rem]"
            >
              <div
                class="w-[6.25rem] h-[6.25rem] shrink-0 bg-white rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="101"
                  height="100"
                  viewBox="0 0 101 100"
                  fill="none"
                >
                  <rect x="0.5" width="100" height="100" rx="50" fill="white" />
                  <path
                    d="M40.0506 21V28.2753H47.326V28.4936C34.9579 30.2397 25.5 40.9344 25.5 53.7389C25.5 67.7803 36.9223 79.2026 50.9636 79.2026C65.005 79.2026 76.4272 67.7803 76.4272 53.7389C76.4272 50.465 75.6997 47.4094 74.6084 44.6448L67.9879 47.4094C68.7882 49.5193 69.1519 51.5563 69.1519 53.8117C69.1519 63.9244 61.0763 72 50.9636 72C40.8509 72 32.7753 63.9244 32.7753 53.8117C32.7753 43.699 40.8509 35.6234 50.9636 35.6234C53.1462 35.6234 55.2561 35.9872 57.3659 36.7874L59.8395 29.9486C58.1662 29.3666 56.4201 29.0756 54.6013 28.7846V28.3481H61.8766V21.0728H40.0506V21ZM76.4272 29.4394C76.4272 29.4394 49.8723 49.883 48.49 51.2653C47.1077 52.7204 47.1077 54.8302 48.49 56.2853C49.8723 57.7404 52.0549 57.7404 53.51 56.2853C54.965 54.8302 76.5 29.4394 76.5 29.4394H76.4272Z"
                    fill="#5C5C5C"
                  />
                </svg>
              </div>
              <h1
                class="font-extralight text-center text-xl h-[1.25rem] w-[8.3rem]"
              >
                5km run
              </h1>
              <p
                class="w-[8.3rem] h-[1.25rem] text-xs text-center font-semibold lowercase"
              >
                avarage of <span class="inline text-[#FF5F5F]">8.8 min</span>
              </p>
            </div>
            <div
              class="rounded-[0.6rem] bg-gray-200 flex w-[13rem] h-[8.5rem] px[0.3rem] pb-[1.5rem] flex-col justify-end items-center gap-[0.6rem]"
            >
              <div
                class="w-[6.25rem] h-[6.25rem] shrink-0 bg-white rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="101"
                  height="100"
                  viewBox="0 0 101 100"
                  fill="none"
                >
                  <rect x="0.5" width="100" height="100" rx="50" fill="white" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.0648 21.5164C40.8749 24.7921 42.1124 31.6374 47.1958 33.3048C54.226 35.6099 59.4847 27.3393 54.2787 22.1659C51.6337 19.5382 47.9304 19.2769 45.0648 21.5164ZM49.4055 35.3213C45.5929 35.5538 44.4038 36.0107 41.0495 38.5269C36.5751 41.8838 36.3991 42.7519 38.5107 51.0091C39.7058 55.6829 39.8002 55.8069 42.1517 55.7995C45.0024 55.7914 45.0284 55.9397 43.0051 60.6135C41.8323 63.3238 40.4612 64.8908 37.4783 66.9324C35.2968 68.4256 33.3226 70.1373 33.0916 70.7352C32.6066 71.9915 34.1485 75.5012 35.357 75.8909C35.8064 76.0363 38.4632 74.3992 41.2597 72.2528C44.9519 69.4191 47.1066 67.0409 49.1269 63.5696C50.9304 60.4695 52.0489 59.1727 52.3089 59.8812C52.5288 60.4821 53.9051 64.2952 55.3683 68.3548C56.8308 72.4144 58.5161 76.4836 59.1126 77.3967C60.858 80.0686 65.3629 79.2146 65.3629 76.212C65.3629 75.6208 63.6916 70.5905 61.6491 65.0333C59.6065 59.476 57.9353 53.876 57.9353 52.5894V50.2496L62.3495 52.464C66.3448 54.4687 66.8736 54.5698 67.9202 53.529C69.9717 51.4904 69.3619 50.5921 63.8045 47.4647C59.7996 45.2105 59.5991 44.9492 58.352 40.3692C57.2074 36.1694 55.9521 34.4584 54.3463 34.9102C54.0737 34.9869 51.8499 35.1722 49.4055 35.3213ZM42.9494 44.4148C42.6962 45.0511 42.9279 47.3761 43.4642 49.5816C44.4164 53.4988 44.4387 53.5239 44.4149 50.6401C44.38 46.5 43.5407 42.9334 42.9494 44.4148Z"
                    fill="#5C5C5C"
                  />
                </svg>
              </div>
              <h1
                class="font-extralight text-center text-xl h-[1.25rem] w-[8.3rem]"
              >
                Daily Exercise
              </h1>
              <p
                class="w-[8.3rem] h-[1.25rem] text-xs text-center font-semibold lowercase"
              >
                <span class="inline text-[#FF5F5F]">10</span> consecutive days
              </p>
            </div>

            <div
              class="rounded-[0.6rem] bg-gray-200 flex w-[13rem] h-[8.5rem] px[0.3rem] pb-[1.5rem] flex-col justify-end items-center gap-[0.6rem]"
            >
              <div
                class="w-[6.25rem] h-[6.25rem] shrink-0 bg-white rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="101"
                  height="100"
                  viewBox="0 0 101 100"
                  fill="none"
                >
                  <rect x="0.5" width="100" height="100" rx="50" fill="white" />
                  <path
                    d="M40.0506 21V28.2753H47.326V28.4936C34.9579 30.2397 25.5 40.9344 25.5 53.7389C25.5 67.7803 36.9223 79.2026 50.9636 79.2026C65.005 79.2026 76.4272 67.7803 76.4272 53.7389C76.4272 50.465 75.6997 47.4094 74.6084 44.6448L67.9879 47.4094C68.7882 49.5193 69.1519 51.5563 69.1519 53.8117C69.1519 63.9244 61.0763 72 50.9636 72C40.8509 72 32.7753 63.9244 32.7753 53.8117C32.7753 43.699 40.8509 35.6234 50.9636 35.6234C53.1462 35.6234 55.2561 35.9872 57.3659 36.7874L59.8395 29.9486C58.1662 29.3666 56.4201 29.0756 54.6013 28.7846V28.3481H61.8766V21.0728H40.0506V21ZM76.4272 29.4394C76.4272 29.4394 49.8723 49.883 48.49 51.2653C47.1077 52.7204 47.1077 54.8302 48.49 56.2853C49.8723 57.7404 52.0549 57.7404 53.51 56.2853C54.965 54.8302 76.5 29.4394 76.5 29.4394H76.4272Z"
                    fill="#5C5C5C"
                  />
                </svg>
              </div>
              <h1
                class="font-extralight text-center text-xl h-[1.25rem] w-[8.3rem]"
              >
                5km run
              </h1>
              <p
                class="w-[8.3rem] h-[1.25rem] text-xs text-center font-semibold lowercase"
              >
                avarage of <span class="inline text-[#FF5F5F]">8.8 min</span>
              </p>
            </div>
            <div
              class="rounded-[0.6rem] bg-gray-200 flex w-[13rem] h-[8.5rem] px[0.3rem] pb-[1.5rem] flex-col justify-end items-center gap-[0.6rem]"
            >
              <div
                class="w-[6.25rem] h-[6.25rem] shrink-0 bg-white rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="101"
                  height="100"
                  viewBox="0 0 101 100"
                  fill="none"
                >
                  <rect x="0.5" width="100" height="100" rx="50" fill="white" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.0648 21.5164C40.8749 24.7921 42.1124 31.6374 47.1958 33.3048C54.226 35.6099 59.4847 27.3393 54.2787 22.1659C51.6337 19.5382 47.9304 19.2769 45.0648 21.5164ZM49.4055 35.3213C45.5929 35.5538 44.4038 36.0107 41.0495 38.5269C36.5751 41.8838 36.3991 42.7519 38.5107 51.0091C39.7058 55.6829 39.8002 55.8069 42.1517 55.7995C45.0024 55.7914 45.0284 55.9397 43.0051 60.6135C41.8323 63.3238 40.4612 64.8908 37.4783 66.9324C35.2968 68.4256 33.3226 70.1373 33.0916 70.7352C32.6066 71.9915 34.1485 75.5012 35.357 75.8909C35.8064 76.0363 38.4632 74.3992 41.2597 72.2528C44.9519 69.4191 47.1066 67.0409 49.1269 63.5696C50.9304 60.4695 52.0489 59.1727 52.3089 59.8812C52.5288 60.4821 53.9051 64.2952 55.3683 68.3548C56.8308 72.4144 58.5161 76.4836 59.1126 77.3967C60.858 80.0686 65.3629 79.2146 65.3629 76.212C65.3629 75.6208 63.6916 70.5905 61.6491 65.0333C59.6065 59.476 57.9353 53.876 57.9353 52.5894V50.2496L62.3495 52.464C66.3448 54.4687 66.8736 54.5698 67.9202 53.529C69.9717 51.4904 69.3619 50.5921 63.8045 47.4647C59.7996 45.2105 59.5991 44.9492 58.352 40.3692C57.2074 36.1694 55.9521 34.4584 54.3463 34.9102C54.0737 34.9869 51.8499 35.1722 49.4055 35.3213ZM42.9494 44.4148C42.6962 45.0511 42.9279 47.3761 43.4642 49.5816C44.4164 53.4988 44.4387 53.5239 44.4149 50.6401C44.38 46.5 43.5407 42.9334 42.9494 44.4148Z"
                    fill="#5C5C5C"
                  />
                </svg>
              </div>
              <h1
                class="font-extralight text-center text-xl h-[1.25rem] w-[8.3rem]"
              >
                Daily Exercise
              </h1>
              <p
                class="w-[8.3rem] h-[1.25rem] text-xs text-center font-semibold lowercase"
              >
                <span class="inline text-[#FF5F5F]">10</span> consecutive days
              </p>
            </div>

            <div
              class="rounded-[0.6rem] bg-gray-200 flex w-[13rem] h-[8.5rem] px[0.3rem] pb-[1.5rem] flex-col justify-end items-center gap-[0.6rem]"
            >
              <div
                class="w-[6.25rem] h-[6.25rem] shrink-0 bg-white rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="101"
                  height="100"
                  viewBox="0 0 101 100"
                  fill="none"
                >
                  <rect x="0.5" width="100" height="100" rx="50" fill="white" />
                  <path
                    d="M40.0506 21V28.2753H47.326V28.4936C34.9579 30.2397 25.5 40.9344 25.5 53.7389C25.5 67.7803 36.9223 79.2026 50.9636 79.2026C65.005 79.2026 76.4272 67.7803 76.4272 53.7389C76.4272 50.465 75.6997 47.4094 74.6084 44.6448L67.9879 47.4094C68.7882 49.5193 69.1519 51.5563 69.1519 53.8117C69.1519 63.9244 61.0763 72 50.9636 72C40.8509 72 32.7753 63.9244 32.7753 53.8117C32.7753 43.699 40.8509 35.6234 50.9636 35.6234C53.1462 35.6234 55.2561 35.9872 57.3659 36.7874L59.8395 29.9486C58.1662 29.3666 56.4201 29.0756 54.6013 28.7846V28.3481H61.8766V21.0728H40.0506V21ZM76.4272 29.4394C76.4272 29.4394 49.8723 49.883 48.49 51.2653C47.1077 52.7204 47.1077 54.8302 48.49 56.2853C49.8723 57.7404 52.0549 57.7404 53.51 56.2853C54.965 54.8302 76.5 29.4394 76.5 29.4394H76.4272Z"
                    fill="#5C5C5C"
                  />
                </svg>
              </div>
              <h1
                class="font-extralight text-center text-xl h-[1.25rem] w-[8.3rem]"
              >
                5km run
              </h1>
              <p
                class="w-[8.3rem] h-[1.25rem] text-xs text-center font-semibold lowercase"
              >
                avarage of <span class="inline text-[#FF5F5F]">8.8 min</span>
              </p>
            </div>
            <div
              class="rounded-[0.6rem] bg-gray-200 flex w-[13rem] h-[8.5rem] px[0.3rem] pb-[1.5rem] flex-col justify-end items-center gap-[0.6rem]"
            >
              <div
                class="w-[6.25rem] h-[6.25rem] shrink-0 bg-white rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="101"
                  height="100"
                  viewBox="0 0 101 100"
                  fill="none"
                >
                  <rect x="0.5" width="100" height="100" rx="50" fill="white" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.0648 21.5164C40.8749 24.7921 42.1124 31.6374 47.1958 33.3048C54.226 35.6099 59.4847 27.3393 54.2787 22.1659C51.6337 19.5382 47.9304 19.2769 45.0648 21.5164ZM49.4055 35.3213C45.5929 35.5538 44.4038 36.0107 41.0495 38.5269C36.5751 41.8838 36.3991 42.7519 38.5107 51.0091C39.7058 55.6829 39.8002 55.8069 42.1517 55.7995C45.0024 55.7914 45.0284 55.9397 43.0051 60.6135C41.8323 63.3238 40.4612 64.8908 37.4783 66.9324C35.2968 68.4256 33.3226 70.1373 33.0916 70.7352C32.6066 71.9915 34.1485 75.5012 35.357 75.8909C35.8064 76.0363 38.4632 74.3992 41.2597 72.2528C44.9519 69.4191 47.1066 67.0409 49.1269 63.5696C50.9304 60.4695 52.0489 59.1727 52.3089 59.8812C52.5288 60.4821 53.9051 64.2952 55.3683 68.3548C56.8308 72.4144 58.5161 76.4836 59.1126 77.3967C60.858 80.0686 65.3629 79.2146 65.3629 76.212C65.3629 75.6208 63.6916 70.5905 61.6491 65.0333C59.6065 59.476 57.9353 53.876 57.9353 52.5894V50.2496L62.3495 52.464C66.3448 54.4687 66.8736 54.5698 67.9202 53.529C69.9717 51.4904 69.3619 50.5921 63.8045 47.4647C59.7996 45.2105 59.5991 44.9492 58.352 40.3692C57.2074 36.1694 55.9521 34.4584 54.3463 34.9102C54.0737 34.9869 51.8499 35.1722 49.4055 35.3213ZM42.9494 44.4148C42.6962 45.0511 42.9279 47.3761 43.4642 49.5816C44.4164 53.4988 44.4387 53.5239 44.4149 50.6401C44.38 46.5 43.5407 42.9334 42.9494 44.4148Z"
                    fill="#5C5C5C"
                  />
                </svg>
              </div>
              <h1
                class="font-extralight text-center text-xl h-[1.25rem] w-[8.3rem]"
              >
                Daily Exercise
              </h1>
              <p
                class="w-[8.3rem] h-[1.25rem] text-xs text-center font-semibold lowercase"
              >
                <span class="inline text-[#FF5F5F]">10</span> consecutive days
              </p>
            </div>

            <div
              class="rounded-[0.6rem] bg-gray-200 flex w-[13rem] h-[8.5rem] px[0.3rem] pb-[1.5rem] flex-col justify-end items-center gap-[0.6rem]"
            >
              <div
                class="w-[6.25rem] h-[6.25rem] shrink-0 bg-white rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="101"
                  height="100"
                  viewBox="0 0 101 100"
                  fill="none"
                >
                  <rect x="0.5" width="100" height="100" rx="50" fill="white" />
                  <path
                    d="M40.0506 21V28.2753H47.326V28.4936C34.9579 30.2397 25.5 40.9344 25.5 53.7389C25.5 67.7803 36.9223 79.2026 50.9636 79.2026C65.005 79.2026 76.4272 67.7803 76.4272 53.7389C76.4272 50.465 75.6997 47.4094 74.6084 44.6448L67.9879 47.4094C68.7882 49.5193 69.1519 51.5563 69.1519 53.8117C69.1519 63.9244 61.0763 72 50.9636 72C40.8509 72 32.7753 63.9244 32.7753 53.8117C32.7753 43.699 40.8509 35.6234 50.9636 35.6234C53.1462 35.6234 55.2561 35.9872 57.3659 36.7874L59.8395 29.9486C58.1662 29.3666 56.4201 29.0756 54.6013 28.7846V28.3481H61.8766V21.0728H40.0506V21ZM76.4272 29.4394C76.4272 29.4394 49.8723 49.883 48.49 51.2653C47.1077 52.7204 47.1077 54.8302 48.49 56.2853C49.8723 57.7404 52.0549 57.7404 53.51 56.2853C54.965 54.8302 76.5 29.4394 76.5 29.4394H76.4272Z"
                    fill="#5C5C5C"
                  />
                </svg>
              </div>
              <h1
                class="font-extralight text-center text-xl h-[1.25rem] w-[8.3rem]"
              >
                5km run
              </h1>
              <p
                class="w-[8.3rem] h-[1.25rem] text-xs text-center font-semibold lowercase"
              >
                avarage of <span class="inline text-[#FF5F5F]">8.8 min</span>
              </p>
            </div>
            <div
              class="rounded-[0.6rem] bg-gray-200 flex w-[13rem] h-[8.5rem] px[0.3rem] pb-[1.5rem] flex-col justify-end items-center gap-[0.6rem]"
            >
              <div
                class="w-[6.25rem] h-[6.25rem] shrink-0 bg-white rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="101"
                  height="100"
                  viewBox="0 0 101 100"
                  fill="none"
                >
                  <rect x="0.5" width="100" height="100" rx="50" fill="white" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.0648 21.5164C40.8749 24.7921 42.1124 31.6374 47.1958 33.3048C54.226 35.6099 59.4847 27.3393 54.2787 22.1659C51.6337 19.5382 47.9304 19.2769 45.0648 21.5164ZM49.4055 35.3213C45.5929 35.5538 44.4038 36.0107 41.0495 38.5269C36.5751 41.8838 36.3991 42.7519 38.5107 51.0091C39.7058 55.6829 39.8002 55.8069 42.1517 55.7995C45.0024 55.7914 45.0284 55.9397 43.0051 60.6135C41.8323 63.3238 40.4612 64.8908 37.4783 66.9324C35.2968 68.4256 33.3226 70.1373 33.0916 70.7352C32.6066 71.9915 34.1485 75.5012 35.357 75.8909C35.8064 76.0363 38.4632 74.3992 41.2597 72.2528C44.9519 69.4191 47.1066 67.0409 49.1269 63.5696C50.9304 60.4695 52.0489 59.1727 52.3089 59.8812C52.5288 60.4821 53.9051 64.2952 55.3683 68.3548C56.8308 72.4144 58.5161 76.4836 59.1126 77.3967C60.858 80.0686 65.3629 79.2146 65.3629 76.212C65.3629 75.6208 63.6916 70.5905 61.6491 65.0333C59.6065 59.476 57.9353 53.876 57.9353 52.5894V50.2496L62.3495 52.464C66.3448 54.4687 66.8736 54.5698 67.9202 53.529C69.9717 51.4904 69.3619 50.5921 63.8045 47.4647C59.7996 45.2105 59.5991 44.9492 58.352 40.3692C57.2074 36.1694 55.9521 34.4584 54.3463 34.9102C54.0737 34.9869 51.8499 35.1722 49.4055 35.3213ZM42.9494 44.4148C42.6962 45.0511 42.9279 47.3761 43.4642 49.5816C44.4164 53.4988 44.4387 53.5239 44.4149 50.6401C44.38 46.5 43.5407 42.9334 42.9494 44.4148Z"
                    fill="#5C5C5C"
                  />
                </svg>
              </div>
              <h1
                class="font-extralight text-center text-xl h-[1.25rem] w-[8.3rem]"
              >
                Daily Exercise
              </h1>
              <p
                class="w-[8.3rem] h-[1.25rem] text-xs text-center font-semibold lowercase"
              >
                <span class="inline text-[#FF5F5F]">10</span> consecutive days
              </p>
            </div>

            <div
              class="rounded-[0.6rem] bg-gray-200 flex w-[13rem] h-[8.5rem] px[0.3rem] pb-[1.5rem] flex-col justify-end items-center gap-[0.6rem]"
            >
              <div
                class="w-[6.25rem] h-[6.25rem] shrink-0 bg-white rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="101"
                  height="100"
                  viewBox="0 0 101 100"
                  fill="none"
                >
                  <rect x="0.5" width="100" height="100" rx="50" fill="white" />
                  <path
                    d="M40.0506 21V28.2753H47.326V28.4936C34.9579 30.2397 25.5 40.9344 25.5 53.7389C25.5 67.7803 36.9223 79.2026 50.9636 79.2026C65.005 79.2026 76.4272 67.7803 76.4272 53.7389C76.4272 50.465 75.6997 47.4094 74.6084 44.6448L67.9879 47.4094C68.7882 49.5193 69.1519 51.5563 69.1519 53.8117C69.1519 63.9244 61.0763 72 50.9636 72C40.8509 72 32.7753 63.9244 32.7753 53.8117C32.7753 43.699 40.8509 35.6234 50.9636 35.6234C53.1462 35.6234 55.2561 35.9872 57.3659 36.7874L59.8395 29.9486C58.1662 29.3666 56.4201 29.0756 54.6013 28.7846V28.3481H61.8766V21.0728H40.0506V21ZM76.4272 29.4394C76.4272 29.4394 49.8723 49.883 48.49 51.2653C47.1077 52.7204 47.1077 54.8302 48.49 56.2853C49.8723 57.7404 52.0549 57.7404 53.51 56.2853C54.965 54.8302 76.5 29.4394 76.5 29.4394H76.4272Z"
                    fill="#5C5C5C"
                  />
                </svg>
              </div>
              <h1
                class="font-extralight text-center text-xl h-[1.25rem] w-[8.3rem]"
              >
                5km run
              </h1>
              <p
                class="w-[8.3rem] h-[1.25rem] text-xs text-center font-semibold lowercase"
              >
                avarage of <span class="inline text-[#FF5F5F]">8.8 min</span>
              </p>
            </div>
            <div
              class="rounded-[0.6rem] bg-gray-200 flex w-[13rem] h-[8.5rem] px[0.3rem] pb-[1.5rem] flex-col justify-end items-center gap-[0.6rem]"
            >
              <div
                class="w-[6.25rem] h-[6.25rem] shrink-0 bg-white rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="101"
                  height="100"
                  viewBox="0 0 101 100"
                  fill="none"
                >
                  <rect x="0.5" width="100" height="100" rx="50" fill="white" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.0648 21.5164C40.8749 24.7921 42.1124 31.6374 47.1958 33.3048C54.226 35.6099 59.4847 27.3393 54.2787 22.1659C51.6337 19.5382 47.9304 19.2769 45.0648 21.5164ZM49.4055 35.3213C45.5929 35.5538 44.4038 36.0107 41.0495 38.5269C36.5751 41.8838 36.3991 42.7519 38.5107 51.0091C39.7058 55.6829 39.8002 55.8069 42.1517 55.7995C45.0024 55.7914 45.0284 55.9397 43.0051 60.6135C41.8323 63.3238 40.4612 64.8908 37.4783 66.9324C35.2968 68.4256 33.3226 70.1373 33.0916 70.7352C32.6066 71.9915 34.1485 75.5012 35.357 75.8909C35.8064 76.0363 38.4632 74.3992 41.2597 72.2528C44.9519 69.4191 47.1066 67.0409 49.1269 63.5696C50.9304 60.4695 52.0489 59.1727 52.3089 59.8812C52.5288 60.4821 53.9051 64.2952 55.3683 68.3548C56.8308 72.4144 58.5161 76.4836 59.1126 77.3967C60.858 80.0686 65.3629 79.2146 65.3629 76.212C65.3629 75.6208 63.6916 70.5905 61.6491 65.0333C59.6065 59.476 57.9353 53.876 57.9353 52.5894V50.2496L62.3495 52.464C66.3448 54.4687 66.8736 54.5698 67.9202 53.529C69.9717 51.4904 69.3619 50.5921 63.8045 47.4647C59.7996 45.2105 59.5991 44.9492 58.352 40.3692C57.2074 36.1694 55.9521 34.4584 54.3463 34.9102C54.0737 34.9869 51.8499 35.1722 49.4055 35.3213ZM42.9494 44.4148C42.6962 45.0511 42.9279 47.3761 43.4642 49.5816C44.4164 53.4988 44.4387 53.5239 44.4149 50.6401C44.38 46.5 43.5407 42.9334 42.9494 44.4148Z"
                    fill="#5C5C5C"
                  />
                </svg>
              </div>
              <h1
                class="font-extralight text-center text-xl h-[1.25rem] w-[8.3rem]"
              >
                Daily Exercise
              </h1>
              <p
                class="w-[8.3rem] h-[1.25rem] text-xs text-center font-semibold lowercase"
              >
                <span class="inline text-[#FF5F5F]">10</span> consecutive days
              </p>
            </div>
            <!-- End of Badges -->
          </div>
        </div>
      </div>
    </div>`}function Mn(){return`
    ${Ke()}
    `}function Bn(){return`
   ${yn()}
   `}function Hn(){return`
    ${bn()}
    `}function Nn(){return`
    <p>dashboard page</p>`}function jn(){return`
    ${Pn()}
    `}function Dn(){return`
    ${Fn()}
    `}const xe={404:{title:"404",description:"Page not found",template:"<p>404</p>"},"/":{title:"Landing",description:"Landing page",template:Mn(),bindElements:We},login:{title:"Login",description:"Login page",template:Bn(),bindElements:xn},register:{title:"Register",description:"Register page",template:Hn(),bindElements:vn},dashboard:{title:"Dashboard",description:"Dashboard page",template:Nn(),isProtected:!0},profile:{title:"Profile",description:"Profile page",template:jn(),isProtected:!0},trackers:{title:"Trackers",description:"Trackers page",template:Dn(),bindElements:An}},W=async()=>{var s;let e=window.location.hash.replace("#","");e.length==0&&(e="/"),xe[e]||(e="404");const t=xe[e];if(t.isProtected&&!sessionStorage.getItem("token")){alert("You must be logged in to access this page"),window.location.hash="#login";return}const n=t.template,r=document.getElementById("app");t.title!="Login"&&t.title!="Register"?(r.innerHTML=ze(),r.innerHTML+=n):(r.innerHTML=Je(),r.innerHTML=n),await((s=t.bindElements)==null?void 0:s.call(t)),document.title=t.title};function Vn(){window.addEventListener("hashchange",W),window.addEventListener("DOMContentLoaded",W),W()}document.body.appendChild($e());Vn();Ze();
