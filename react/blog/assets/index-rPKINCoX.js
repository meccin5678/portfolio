(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function rT(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var mm={exports:{}},Ul={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function YS(){if(B_)return Ul;B_=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:i,type:a,key:h,ref:o!==void 0?o:null,props:u}}return Ul.Fragment=t,Ul.jsx=n,Ul.jsxs=n,Ul}var j_;function QS(){return j_||(j_=1,mm.exports=YS()),mm.exports}var Tt=QS(),pm={exports:{}},It={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function $S(){if(H_)return It;H_=1;var i=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.iterator;function w(N){return N===null||typeof N!="object"?null:(N=A&&N[A]||N["@@iterator"],typeof N=="function"?N:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,K={};function z(N,et,ht){this.props=N,this.context=et,this.refs=K,this.updater=ht||D}z.prototype.isReactComponent={},z.prototype.setState=function(N,et){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,et,"setState")},z.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function q(){}q.prototype=z.prototype;function Z(N,et,ht){this.props=N,this.context=et,this.refs=K,this.updater=ht||D}var W=Z.prototype=new q;W.constructor=Z,V(W,z.prototype),W.isPureReactComponent=!0;var ct=Array.isArray,at={H:null,A:null,T:null,S:null},At=Object.prototype.hasOwnProperty;function x(N,et,ht,st,ot,Ot){return ht=Ot.ref,{$$typeof:i,type:N,key:et,ref:ht!==void 0?ht:null,props:Ot}}function R(N,et){return x(N.type,et,void 0,void 0,void 0,N.props)}function S(N){return typeof N=="object"&&N!==null&&N.$$typeof===i}function I(N){var et={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ht){return et[ht]})}var P=/\/+/g;function B(N,et){return typeof N=="object"&&N!==null&&N.key!=null?I(""+N.key):et.toString(36)}function O(){}function be(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(O,O):(N.status="pending",N.then(function(et){N.status==="pending"&&(N.status="fulfilled",N.value=et)},function(et){N.status==="pending"&&(N.status="rejected",N.reason=et)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ge(N,et,ht,st,ot){var Ot=typeof N;(Ot==="undefined"||Ot==="boolean")&&(N=null);var Ct=!1;if(N===null)Ct=!0;else switch(Ot){case"bigint":case"string":case"number":Ct=!0;break;case"object":switch(N.$$typeof){case i:case t:Ct=!0;break;case E:return Ct=N._init,ge(Ct(N._payload),et,ht,st,ot)}}if(Ct)return ot=ot(N),Ct=st===""?"."+B(N,0):st,ct(ot)?(ht="",Ct!=null&&(ht=Ct.replace(P,"$&/")+"/"),ge(ot,et,ht,"",function(le){return le})):ot!=null&&(S(ot)&&(ot=R(ot,ht+(ot.key==null||N&&N.key===ot.key?"":(""+ot.key).replace(P,"$&/")+"/")+Ct)),et.push(ot)),1;Ct=0;var ye=st===""?".":st+":";if(ct(N))for(var Ht=0;Ht<N.length;Ht++)st=N[Ht],Ot=ye+B(st,Ht),Ct+=ge(st,et,ht,Ot,ot);else if(Ht=w(N),typeof Ht=="function")for(N=Ht.call(N),Ht=0;!(st=N.next()).done;)st=st.value,Ot=ye+B(st,Ht++),Ct+=ge(st,et,ht,Ot,ot);else if(Ot==="object"){if(typeof N.then=="function")return ge(be(N),et,ht,st,ot);throw et=String(N),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return Ct}function rt(N,et,ht){if(N==null)return N;var st=[],ot=0;return ge(N,st,"","",function(Ot){return et.call(ht,Ot,ot++)}),st}function _t(N){if(N._status===-1){var et=N._result;et=et(),et.then(function(ht){(N._status===0||N._status===-1)&&(N._status=1,N._result=ht)},function(ht){(N._status===0||N._status===-1)&&(N._status=2,N._result=ht)}),N._status===-1&&(N._status=0,N._result=et)}if(N._status===1)return N._result.default;throw N._result}var pt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Kt(){}return It.Children={map:rt,forEach:function(N,et,ht){rt(N,function(){et.apply(this,arguments)},ht)},count:function(N){var et=0;return rt(N,function(){et++}),et},toArray:function(N){return rt(N,function(et){return et})||[]},only:function(N){if(!S(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},It.Component=z,It.Fragment=n,It.Profiler=o,It.PureComponent=Z,It.StrictMode=a,It.Suspense=p,It.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=at,It.act=function(){throw Error("act(...) is not supported in production builds of React.")},It.cache=function(N){return function(){return N.apply(null,arguments)}},It.cloneElement=function(N,et,ht){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var st=V({},N.props),ot=N.key,Ot=void 0;if(et!=null)for(Ct in et.ref!==void 0&&(Ot=void 0),et.key!==void 0&&(ot=""+et.key),et)!At.call(et,Ct)||Ct==="key"||Ct==="__self"||Ct==="__source"||Ct==="ref"&&et.ref===void 0||(st[Ct]=et[Ct]);var Ct=arguments.length-2;if(Ct===1)st.children=ht;else if(1<Ct){for(var ye=Array(Ct),Ht=0;Ht<Ct;Ht++)ye[Ht]=arguments[Ht+2];st.children=ye}return x(N.type,ot,void 0,void 0,Ot,st)},It.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},It.createElement=function(N,et,ht){var st,ot={},Ot=null;if(et!=null)for(st in et.key!==void 0&&(Ot=""+et.key),et)At.call(et,st)&&st!=="key"&&st!=="__self"&&st!=="__source"&&(ot[st]=et[st]);var Ct=arguments.length-2;if(Ct===1)ot.children=ht;else if(1<Ct){for(var ye=Array(Ct),Ht=0;Ht<Ct;Ht++)ye[Ht]=arguments[Ht+2];ot.children=ye}if(N&&N.defaultProps)for(st in Ct=N.defaultProps,Ct)ot[st]===void 0&&(ot[st]=Ct[st]);return x(N,Ot,void 0,void 0,null,ot)},It.createRef=function(){return{current:null}},It.forwardRef=function(N){return{$$typeof:m,render:N}},It.isValidElement=S,It.lazy=function(N){return{$$typeof:E,_payload:{_status:-1,_result:N},_init:_t}},It.memo=function(N,et){return{$$typeof:y,type:N,compare:et===void 0?null:et}},It.startTransition=function(N){var et=at.T,ht={};at.T=ht;try{var st=N(),ot=at.S;ot!==null&&ot(ht,st),typeof st=="object"&&st!==null&&typeof st.then=="function"&&st.then(Kt,pt)}catch(Ot){pt(Ot)}finally{at.T=et}},It.unstable_useCacheRefresh=function(){return at.H.useCacheRefresh()},It.use=function(N){return at.H.use(N)},It.useActionState=function(N,et,ht){return at.H.useActionState(N,et,ht)},It.useCallback=function(N,et){return at.H.useCallback(N,et)},It.useContext=function(N){return at.H.useContext(N)},It.useDebugValue=function(){},It.useDeferredValue=function(N,et){return at.H.useDeferredValue(N,et)},It.useEffect=function(N,et){return at.H.useEffect(N,et)},It.useId=function(){return at.H.useId()},It.useImperativeHandle=function(N,et,ht){return at.H.useImperativeHandle(N,et,ht)},It.useInsertionEffect=function(N,et){return at.H.useInsertionEffect(N,et)},It.useLayoutEffect=function(N,et){return at.H.useLayoutEffect(N,et)},It.useMemo=function(N,et){return at.H.useMemo(N,et)},It.useOptimistic=function(N,et){return at.H.useOptimistic(N,et)},It.useReducer=function(N,et,ht){return at.H.useReducer(N,et,ht)},It.useRef=function(N){return at.H.useRef(N)},It.useState=function(N){return at.H.useState(N)},It.useSyncExternalStore=function(N,et,ht){return at.H.useSyncExternalStore(N,et,ht)},It.useTransition=function(){return at.H.useTransition()},It.version="19.0.0",It}var F_;function Mp(){return F_||(F_=1,pm.exports=$S()),pm.exports}var Q=Mp();const aT=rT(Q);var gm={exports:{}},zl={},ym={exports:{}},vm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function XS(){return q_||(q_=1,function(i){function t(rt,_t){var pt=rt.length;rt.push(_t);t:for(;0<pt;){var Kt=pt-1>>>1,N=rt[Kt];if(0<o(N,_t))rt[Kt]=_t,rt[pt]=N,pt=Kt;else break t}}function n(rt){return rt.length===0?null:rt[0]}function a(rt){if(rt.length===0)return null;var _t=rt[0],pt=rt.pop();if(pt!==_t){rt[0]=pt;t:for(var Kt=0,N=rt.length,et=N>>>1;Kt<et;){var ht=2*(Kt+1)-1,st=rt[ht],ot=ht+1,Ot=rt[ot];if(0>o(st,pt))ot<N&&0>o(Ot,st)?(rt[Kt]=Ot,rt[ot]=pt,Kt=ot):(rt[Kt]=st,rt[ht]=pt,Kt=ht);else if(ot<N&&0>o(Ot,pt))rt[Kt]=Ot,rt[ot]=pt,Kt=ot;else break t}}return _t}function o(rt,_t){var pt=rt.sortIndex-_t.sortIndex;return pt!==0?pt:rt.id-_t.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var p=[],y=[],E=1,A=null,w=3,D=!1,V=!1,K=!1,z=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function W(rt){for(var _t=n(y);_t!==null;){if(_t.callback===null)a(y);else if(_t.startTime<=rt)a(y),_t.sortIndex=_t.expirationTime,t(p,_t);else break;_t=n(y)}}function ct(rt){if(K=!1,W(rt),!V)if(n(p)!==null)V=!0,be();else{var _t=n(y);_t!==null&&ge(ct,_t.startTime-rt)}}var at=!1,At=-1,x=5,R=-1;function S(){return!(i.unstable_now()-R<x)}function I(){if(at){var rt=i.unstable_now();R=rt;var _t=!0;try{t:{V=!1,K&&(K=!1,q(At),At=-1),D=!0;var pt=w;try{e:{for(W(rt),A=n(p);A!==null&&!(A.expirationTime>rt&&S());){var Kt=A.callback;if(typeof Kt=="function"){A.callback=null,w=A.priorityLevel;var N=Kt(A.expirationTime<=rt);if(rt=i.unstable_now(),typeof N=="function"){A.callback=N,W(rt),_t=!0;break e}A===n(p)&&a(p),W(rt)}else a(p);A=n(p)}if(A!==null)_t=!0;else{var et=n(y);et!==null&&ge(ct,et.startTime-rt),_t=!1}}break t}finally{A=null,w=pt,D=!1}_t=void 0}}finally{_t?P():at=!1}}}var P;if(typeof Z=="function")P=function(){Z(I)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,O=B.port2;B.port1.onmessage=I,P=function(){O.postMessage(null)}}else P=function(){z(I,0)};function be(){at||(at=!0,P())}function ge(rt,_t){At=z(function(){rt(i.unstable_now())},_t)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(rt){rt.callback=null},i.unstable_continueExecution=function(){V||D||(V=!0,be())},i.unstable_forceFrameRate=function(rt){0>rt||125<rt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<rt?Math.floor(1e3/rt):5},i.unstable_getCurrentPriorityLevel=function(){return w},i.unstable_getFirstCallbackNode=function(){return n(p)},i.unstable_next=function(rt){switch(w){case 1:case 2:case 3:var _t=3;break;default:_t=w}var pt=w;w=_t;try{return rt()}finally{w=pt}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(rt,_t){switch(rt){case 1:case 2:case 3:case 4:case 5:break;default:rt=3}var pt=w;w=rt;try{return _t()}finally{w=pt}},i.unstable_scheduleCallback=function(rt,_t,pt){var Kt=i.unstable_now();switch(typeof pt=="object"&&pt!==null?(pt=pt.delay,pt=typeof pt=="number"&&0<pt?Kt+pt:Kt):pt=Kt,rt){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=pt+N,rt={id:E++,callback:_t,priorityLevel:rt,startTime:pt,expirationTime:N,sortIndex:-1},pt>Kt?(rt.sortIndex=pt,t(y,rt),n(p)===null&&rt===n(y)&&(K?(q(At),At=-1):K=!0,ge(ct,pt-Kt))):(rt.sortIndex=N,t(p,rt),V||D||(V=!0,be())),rt},i.unstable_shouldYield=S,i.unstable_wrapCallback=function(rt){var _t=w;return function(){var pt=w;w=_t;try{return rt.apply(this,arguments)}finally{w=pt}}}}(vm)),vm}var G_;function WS(){return G_||(G_=1,ym.exports=XS()),ym.exports}var _m={exports:{}},$e={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_;function ZS(){if(K_)return $e;K_=1;var i=Mp();function t(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,E){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:A==null?null:""+A,children:p,containerInfo:y,implementation:E}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,$e.createPortal=function(p,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return u(p,y,null,E)},$e.flushSync=function(p){var y=h.T,E=a.p;try{if(h.T=null,a.p=2,p)return p()}finally{h.T=y,a.p=E,a.d.f()}},$e.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,a.d.C(p,y))},$e.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},$e.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var E=y.as,A=m(E,y.crossOrigin),w=typeof y.integrity=="string"?y.integrity:void 0,D=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?a.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:A,integrity:w,fetchPriority:D}):E==="script"&&a.d.X(p,{crossOrigin:A,integrity:w,fetchPriority:D,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},$e.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=m(y.as,y.crossOrigin);a.d.M(p,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&a.d.M(p)},$e.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,A=m(E,y.crossOrigin);a.d.L(p,E,{crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},$e.preloadModule=function(p,y){if(typeof p=="string")if(y){var E=m(y.as,y.crossOrigin);a.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else a.d.m(p)},$e.requestFormReset=function(p){a.d.r(p)},$e.unstable_batchedUpdates=function(p,y){return p(y)},$e.useFormState=function(p,y,E){return h.H.useFormState(p,y,E)},$e.useFormStatus=function(){return h.H.useHostTransitionStatus()},$e.version="19.0.0",$e}var Y_;function JS(){if(Y_)return _m.exports;Y_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),_m.exports=ZS(),_m.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function tw(){if(Q_)return zl;Q_=1;var i=WS(),t=Mp(),n=JS();function a(e){var r="https://react.dev/errors/"+e;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),D=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),ct=Symbol.for("react.memo_cache_sentinel"),at=Symbol.iterator;function At(e){return e===null||typeof e!="object"?null:(e=at&&e[at]||e["@@iterator"],typeof e=="function"?e:null)}var x=Symbol.for("react.client.reference");function R(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===x?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case m:return"Portal";case E:return"Profiler";case y:return"StrictMode";case K:return"Suspense";case z:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case D:return(e.displayName||"Context")+".Provider";case w:return(e._context.displayName||"Context")+".Consumer";case V:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return r=e.displayName||null,r!==null?r:R(e.type)||"Memo";case Z:r=e._payload,e=e._init;try{return R(e(r))}catch{}}return null}var S=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=Object.assign,P,B;function O(e){if(P===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);P=r&&r[1]||"",B=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+P+e+B}var be=!1;function ge(e,r){if(!e||be)return"";be=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(G){var H=G}Reflect.construct(e,[],J)}else{try{J.call()}catch(G){H=G}e.call(J.prototype)}}else{try{throw Error()}catch(G){H=G}(J=e())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(G){if(G&&H&&typeof G.stack=="string")return[G.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),_=d[0],T=d[1];if(_&&T){var C=_.split(`
`),k=T.split(`
`);for(f=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;f<k.length&&!k[f].includes("DetermineComponentFrameRoot");)f++;if(l===C.length||f===k.length)for(l=C.length-1,f=k.length-1;1<=l&&0<=f&&C[l]!==k[f];)f--;for(;1<=l&&0<=f;l--,f--)if(C[l]!==k[f]){if(l!==1||f!==1)do if(l--,f--,0>f||C[l]!==k[f]){var Y=`
`+C[l].replace(" at new "," at ");return e.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",e.displayName)),Y}while(1<=l&&0<=f);break}}}finally{be=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?O(s):""}function rt(e){switch(e.tag){case 26:case 27:case 5:return O(e.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 15:return e=ge(e.type,!1),e;case 11:return e=ge(e.type.render,!1),e;case 1:return e=ge(e.type,!0),e;default:return""}}function _t(e){try{var r="";do r+=rt(e),e=e.return;while(e);return r}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function pt(e){var r=e,s=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(s=r.return),e=r.return;while(e)}return r.tag===3?s:null}function Kt(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function N(e){if(pt(e)!==e)throw Error(a(188))}function et(e){var r=e.alternate;if(!r){if(r=pt(e),r===null)throw Error(a(188));return r!==e?null:e}for(var s=e,l=r;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return N(f),e;if(d===l)return N(f),r;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=d;else{for(var _=!1,T=f.child;T;){if(T===s){_=!0,s=f,l=d;break}if(T===l){_=!0,l=f,s=d;break}T=T.sibling}if(!_){for(T=d.child;T;){if(T===s){_=!0,s=d,l=f;break}if(T===l){_=!0,l=d,s=f;break}T=T.sibling}if(!_)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:r}function ht(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e;for(e=e.child;e!==null;){if(r=ht(e),r!==null)return r;e=e.sibling}return null}var st=Array.isArray,ot=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ot={pending:!1,data:null,method:null,action:null},Ct=[],ye=-1;function Ht(e){return{current:e}}function le(e){0>ye||(e.current=Ct[ye],Ct[ye]=null,ye--)}function $t(e,r){ye++,Ct[ye]=e.current,e.current=r}var en=Ht(null),Si=Ht(null),En=Ht(null),fr=Ht(null);function hr(e,r){switch($t(En,r),$t(Si,e),$t(en,null),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)&&(r=r.namespaceURI)?p_(r):0;break;default:if(e=e===8?r.parentNode:r,r=e.tagName,e=e.namespaceURI)e=p_(e),r=g_(e,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}le(en),$t(en,r)}function wi(){le(en),le(Si),le(En)}function Mo(e){e.memoizedState!==null&&$t(fr,e);var r=en.current,s=g_(r,e.type);r!==s&&($t(Si,e),$t(en,s))}function cs(e){Si.current===e&&(le(en),le(Si)),fr.current===e&&(le(fr),Ml._currentValue=Ot)}var fs=Object.prototype.hasOwnProperty,ga=i.unstable_scheduleCallback,hs=i.unstable_cancelCallback,gh=i.unstable_shouldYield,Po=i.unstable_requestPaint,ln=i.unstable_now,Cu=i.unstable_getCurrentPriorityLevel,Ae=i.unstable_ImmediatePriority,xe=i.unstable_UserBlockingPriority,Ri=i.unstable_NormalPriority,Iu=i.unstable_LowPriority,ko=i.unstable_IdlePriority,yh=i.log,ya=i.unstable_setDisableYieldValue,dr=null,Ye=null;function Vo(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(dr,e,void 0,(e.current.flags&128)===128)}catch{}}function $n(e){if(typeof yh=="function"&&ya(e),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(dr,e)}catch{}}var nn=Math.clz32?Math.clz32:Du,Lo=Math.log,Ou=Math.LN2;function Du(e){return e>>>=0,e===0?32:31-(Lo(e)/Ou|0)|0}var Xn=128,mr=4194304;function zn(e){var r=e&42;if(r!==0)return r;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Tn(e,r){var s=e.pendingLanes;if(s===0)return 0;var l=0,f=e.suspendedLanes,d=e.pingedLanes,_=e.warmLanes;e=e.finishedLanes!==0;var T=s&134217727;return T!==0?(s=T&~f,s!==0?l=zn(s):(d&=T,d!==0?l=zn(d):e||(_=T&~_,_!==0&&(l=zn(_))))):(T=s&~f,T!==0?l=zn(T):d!==0?l=zn(d):e||(_=s&~_,_!==0&&(l=zn(_)))),l===0?0:r!==0&&r!==l&&!(r&f)&&(f=l&-l,_=r&-r,f>=_||f===32&&(_&4194176)!==0)?r:l}function pr(e,r){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&r)===0}function ds(e,r){switch(e){case 1:case 2:case 4:case 8:return r+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uo(){var e=Xn;return Xn<<=1,!(Xn&4194176)&&(Xn=128),e}function gr(){var e=mr;return mr<<=1,!(mr&62914560)&&(mr=4194304),e}function ms(e){for(var r=[],s=0;31>s;s++)r.push(e);return r}function de(e,r){e.pendingLanes|=r,r!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Nu(e,r,s,l,f,d){var _=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var T=e.entanglements,C=e.expirationTimes,k=e.hiddenUpdates;for(s=_&~s;0<s;){var Y=31-nn(s),J=1<<Y;T[Y]=0,C[Y]=-1;var H=k[Y];if(H!==null)for(k[Y]=null,Y=0;Y<H.length;Y++){var G=H[Y];G!==null&&(G.lane&=-536870913)}s&=~J}l!==0&&yr(e,l,0),d!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=d&~(_&~r))}function yr(e,r,s){e.pendingLanes|=r,e.suspendedLanes&=~r;var l=31-nn(r);e.entangledLanes|=r,e.entanglements[l]=e.entanglements[l]|1073741824|s&4194218}function vr(e,r){var s=e.entangledLanes|=r;for(e=e.entanglements;s;){var l=31-nn(s),f=1<<l;f&r|e[l]&r&&(e[l]|=r),s&=~f}}function xu(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Mu(){var e=ot.p;return e!==0?e:(e=window.event,e===void 0?32:P_(e.type))}function _r(e,r){var s=ot.p;try{return ot.p=e,r()}finally{ot.p=s}}var Wn=Math.random().toString(36).slice(2),Me="__reactFiber$"+Wn,Se="__reactProps$"+Wn,Ci="__reactContainer$"+Wn,va="__reactEvents$"+Wn,ps="__reactListeners$"+Wn,Zn="__reactHandles$"+Wn,zo="__reactResources$"+Wn,Er="__reactMarker$"+Wn;function _a(e){delete e[Me],delete e[Se],delete e[va],delete e[ps],delete e[Zn]}function Bn(e){var r=e[Me];if(r)return r;for(var s=e.parentNode;s;){if(r=s[Ci]||s[Me]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(e=__(e);e!==null;){if(s=e[Me])return s;e=__(e)}return r}e=s,s=e.parentNode}return null}function Ii(e){if(e=e[Me]||e[Ci]){var r=e.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return e}return null}function Tr(e){var r=e.tag;if(r===5||r===26||r===27||r===6)return e.stateNode;throw Error(a(33))}function br(e){var r=e[zo];return r||(r=e[zo]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function ie(e){e[Er]=!0}var Bo=new Set,gs={};function hn(e,r){un(e,r),un(e+"Capture",r)}function un(e,r){for(gs[e]=r,e=0;e<r.length;e++)Bo.add(r[e])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jo={},Ho={};function Pu(e){return fs.call(Ho,e)?!0:fs.call(jo,e)?!1:vh.test(e)?Ho[e]=!0:(jo[e]=!0,!1)}function Ar(e,r,s){if(Pu(r))if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(r);return}}e.setAttribute(r,""+s)}}function Sr(e,r,s){if(s===null)e.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttribute(r,""+s)}}function bn(e,r,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(r,s,""+l)}}function rn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ku(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function _h(e){var r=ku(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),l=""+e[r];if(!e.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,d=s.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return f.call(this)},set:function(_){l=""+_,d.call(this,_)}}),Object.defineProperty(e,r,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function Ea(e){e._valueTracker||(e._valueTracker=_h(e))}function Fo(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var s=r.getValue(),l="";return e&&(l=ku(e)?e.checked?"true":"false":e.value),e=l,e!==s?(r.setValue(e),!0):!1}function ys(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Oi=/[\n"\\]/g;function ue(e){return e.replace(Oi,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function wr(e,r,s,l,f,d,_,T){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),r!=null?_==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+rn(r)):e.value!==""+rn(r)&&(e.value=""+rn(r)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),r!=null?vs(e,_,rn(r)):s!=null?vs(e,_,rn(s)):l!=null&&e.removeAttribute("value"),f==null&&d!=null&&(e.defaultChecked=!!d),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+rn(T):e.removeAttribute("name")}function Ta(e,r,s,l,f,d,_,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),r!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||r!=null))return;s=s!=null?""+rn(s):"",r=r!=null?""+rn(r):s,T||r===e.value||(e.value=r),e.defaultValue=r}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_)}function vs(e,r,s){r==="number"&&ys(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Ft(e,r,s,l){if(e=e.options,r){r={};for(var f=0;f<s.length;f++)r["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=r.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+rn(s),r=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}r!==null||e[f].disabled||(r=e[f])}r!==null&&(r.selected=!0)}}function ba(e,r,s){if(r!=null&&(r=""+rn(r),r!==e.value&&(e.value=r),s==null)){e.defaultValue!==r&&(e.defaultValue=r);return}e.defaultValue=s!=null?""+rn(s):""}function Rr(e,r,s,l){if(r==null){if(l!=null){if(s!=null)throw Error(a(92));if(st(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),r=s}s=rn(r),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l)}function An(e,r){if(r){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=r;return}}e.textContent=r}var Eh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qo(e,r,s){var l=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="":l?e.setProperty(r,s):typeof s!="number"||s===0||Eh.has(r)?r==="float"?e.cssFloat=s:e[r]=(""+s).trim():e[r]=s+"px"}function Vu(e,r,s){if(r!=null&&typeof r!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in r)l=r[f],r.hasOwnProperty(f)&&s[f]!==l&&qo(e,f,l)}else for(var d in r)r.hasOwnProperty(d)&&qo(e,d,r[d])}function Go(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Th=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jn(e){return bh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Sn=null;function _s(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Di=null,Ni=null;function xi(e){var r=Ii(e);if(r&&(e=r.stateNode)){var s=e[Se]||null;t:switch(e=r.stateNode,r.type){case"input":if(wr(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ue(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var l=s[r];if(l!==e&&l.form===e.form){var f=l[Se]||null;if(!f)throw Error(a(90));wr(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<s.length;r++)l=s[r],l.form===e.form&&Fo(l)}break t;case"textarea":ba(e,s.value,s.defaultValue);break t;case"select":r=s.value,r!=null&&Ft(e,!!s.multiple,r,!1)}}}var Ko=!1;function Lu(e,r,s){if(Ko)return e(r,s);Ko=!0;try{var l=e(r);return l}finally{if(Ko=!1,(Di!==null||Ni!==null)&&(Ic(),Di&&(r=Di,e=Ni,Ni=Di=null,xi(r),e)))for(r=0;r<e.length;r++)xi(e[r])}}function Aa(e,r){var s=e.stateNode;if(s===null)return null;var l=s[Se]||null;if(l===null)return null;s=l[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,r,typeof s));return s}var wn=!1;if(dn)try{var Sa={};Object.defineProperty(Sa,"passive",{get:function(){wn=!0}}),window.addEventListener("test",Sa,Sa),window.removeEventListener("test",Sa,Sa)}catch{wn=!1}var ti=null,Cr=null,Mi=null;function Yo(){if(Mi)return Mi;var e,r=Cr,s=r.length,l,f="value"in ti?ti.value:ti.textContent,d=f.length;for(e=0;e<s&&r[e]===f[e];e++);var _=s-e;for(l=1;l<=_&&r[s-l]===f[d-l];l++);return Mi=f.slice(e,1<l?1-l:void 0)}function ei(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function ni(){return!0}function Qo(){return!1}function Pe(e){function r(s,l,f,d,_){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(s=e[T],this[T]=s?s(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ni:Qo,this.isPropagationStopped=Qo,this}return I(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ni)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ni)},persist:function(){},isPersistent:ni}),r}var Yt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Es=Pe(Yt),wa=I({},Yt,{view:0,detail:0}),Uu=Pe(wa),Ts,bs,ii,Ra=I({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ii&&(ii&&e.type==="mousemove"?(Ts=e.screenX-ii.screenX,bs=e.screenY-ii.screenY):bs=Ts=0,ii=e),Ts)},movementY:function(e){return"movementY"in e?e.movementY:bs}}),Rn=Pe(Ra),zu=I({},Ra,{dataTransfer:0}),Ah=Pe(zu),Ca=I({},wa,{relatedTarget:0}),As=Pe(Ca),$o=I({},Yt,{animationName:0,elapsedTime:0,pseudoElement:0}),Ss=Pe($o),Bu=I({},Yt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ws=Pe(Bu),Sh=I({},Yt,{data:0}),Xo=Pe(Sh),Ia={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ju={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wo(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Hu[e])?!!r[e]:!1}function Oa(){return Wo}var Fu=I({},wa,{key:function(e){if(e.key){var r=Ia[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ju[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oa,charCode:function(e){return e.type==="keypress"?ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rs=Pe(Fu),qu=I({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zo=Pe(qu),Pi=I({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oa}),Gu=Pe(Pi),Ku=I({},Yt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yu=Pe(Ku),Qu=I({},Ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cs=Pe(Qu),an=I({},Yt,{newState:0,oldState:0}),$u=Pe(an),Xu=[9,13,27,32],ri=dn&&"CompositionEvent"in window,c=null;dn&&"documentMode"in document&&(c=document.documentMode);var g=dn&&"TextEvent"in window&&!c,v=dn&&(!ri||c&&8<c&&11>=c),b=" ",U=!1;function F(e,r){switch(e){case"keyup":return Xu.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function it(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function we(e,r){switch(e){case"compositionend":return it(r);case"keypress":return r.which!==32?null:(U=!0,b);case"textInput":return e=r.data,e===b&&U?null:e;default:return null}}function zt(e,r){if(Ut)return e==="compositionend"||!ri&&F(e,r)?(e=Yo(),Mi=Cr=ti=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var ke={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Re(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!ke[e.type]:r==="textarea"}function ki(e,r,s,l){Di?Ni?Ni.push(l):Ni=[l]:Di=l,r=Mc(r,"onChange"),0<r.length&&(s=new Es("onChange","change",null,s,l),e.push({event:s,listeners:r}))}var Be=null,ai=null;function Jo(e){c_(e,0)}function Wu(e){var r=Tr(e);if(Fo(r))return e}function zg(e,r){if(e==="change")return r}var Bg=!1;if(dn){var wh;if(dn){var Rh="oninput"in document;if(!Rh){var jg=document.createElement("div");jg.setAttribute("oninput","return;"),Rh=typeof jg.oninput=="function"}wh=Rh}else wh=!1;Bg=wh&&(!document.documentMode||9<document.documentMode)}function Hg(){Be&&(Be.detachEvent("onpropertychange",Fg),ai=Be=null)}function Fg(e){if(e.propertyName==="value"&&Wu(ai)){var r=[];ki(r,ai,e,_s(e)),Lu(Jo,r)}}function A1(e,r,s){e==="focusin"?(Hg(),Be=r,ai=s,Be.attachEvent("onpropertychange",Fg)):e==="focusout"&&Hg()}function S1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wu(ai)}function w1(e,r){if(e==="click")return Wu(r)}function R1(e,r){if(e==="input"||e==="change")return Wu(r)}function C1(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var mn=typeof Object.is=="function"?Object.is:C1;function tl(e,r){if(mn(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var s=Object.keys(e),l=Object.keys(r);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!fs.call(r,f)||!mn(e[f],r[f]))return!1}return!0}function qg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gg(e,r){var s=qg(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=r&&l>=r)return{node:s,offset:r-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=qg(s)}}function Kg(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Kg(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Yg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var r=ys(e.document);r instanceof e.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)e=r.contentWindow;else break;r=ys(e.document)}return r}function Ch(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function I1(e,r){var s=Yg(r);r=e.focusedElem;var l=e.selectionRange;if(s!==r&&r&&r.ownerDocument&&Kg(r.ownerDocument.documentElement,r)){if(l!==null&&Ch(r)){if(e=l.start,s=l.end,s===void 0&&(s=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(s,r.value.length);else if(s=(e=r.ownerDocument||document)&&e.defaultView||window,s.getSelection){s=s.getSelection();var f=r.textContent.length,d=Math.min(l.start,f);l=l.end===void 0?d:Math.min(l.end,f),!s.extend&&d>l&&(f=l,l=d,d=f),f=Gg(r,d);var _=Gg(r,l);f&&_&&(s.rangeCount!==1||s.anchorNode!==f.node||s.anchorOffset!==f.offset||s.focusNode!==_.node||s.focusOffset!==_.offset)&&(e=e.createRange(),e.setStart(f.node,f.offset),s.removeAllRanges(),d>l?(s.addRange(e),s.extend(_.node,_.offset)):(e.setEnd(_.node,_.offset),s.addRange(e)))}}for(e=[],s=r;s=s.parentNode;)s.nodeType===1&&e.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)s=e[r],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var O1=dn&&"documentMode"in document&&11>=document.documentMode,Is=null,Ih=null,el=null,Oh=!1;function Qg(e,r,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Oh||Is==null||Is!==ys(l)||(l=Is,"selectionStart"in l&&Ch(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),el&&tl(el,l)||(el=l,l=Mc(Ih,"onSelect"),0<l.length&&(r=new Es("onSelect","select",null,r,s),e.push({event:r,listeners:l}),r.target=Is)))}function Da(e,r){var s={};return s[e.toLowerCase()]=r.toLowerCase(),s["Webkit"+e]="webkit"+r,s["Moz"+e]="moz"+r,s}var Os={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},Dh={},$g={};dn&&($g=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Na(e){if(Dh[e])return Dh[e];if(!Os[e])return e;var r=Os[e],s;for(s in r)if(r.hasOwnProperty(s)&&s in $g)return Dh[e]=r[s];return e}var Xg=Na("animationend"),Wg=Na("animationiteration"),Zg=Na("animationstart"),D1=Na("transitionrun"),N1=Na("transitionstart"),x1=Na("transitioncancel"),Jg=Na("transitionend"),ty=new Map,ey="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function jn(e,r){ty.set(e,r),hn(r,[e])}var Cn=[],Ds=0,Nh=0;function Zu(){for(var e=Ds,r=Nh=Ds=0;r<e;){var s=Cn[r];Cn[r++]=null;var l=Cn[r];Cn[r++]=null;var f=Cn[r];Cn[r++]=null;var d=Cn[r];if(Cn[r++]=null,l!==null&&f!==null){var _=l.pending;_===null?f.next=f:(f.next=_.next,_.next=f),l.pending=f}d!==0&&ny(s,f,d)}}function Ju(e,r,s,l){Cn[Ds++]=e,Cn[Ds++]=r,Cn[Ds++]=s,Cn[Ds++]=l,Nh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function xh(e,r,s,l){return Ju(e,r,s,l),tc(e)}function Ir(e,r){return Ju(e,null,null,r),tc(e)}function ny(e,r,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=e.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(f=!0)),e=d,d=d.return;f&&r!==null&&e.tag===3&&(d=e.stateNode,f=31-nn(s),d=d.hiddenUpdates,e=d[f],e===null?d[f]=[r]:e.push(r),r.lane=s|536870912)}function tc(e){if(50<Rl)throw Rl=0,Ud=null,Error(a(185));for(var r=e.return;r!==null;)e=r,r=e.return;return e.tag===3?e.stateNode:null}var Ns={},iy=new WeakMap;function In(e,r){if(typeof e=="object"&&e!==null){var s=iy.get(e);return s!==void 0?s:(r={value:e,source:r,stack:_t(r)},iy.set(e,r),r)}return{value:e,source:r,stack:_t(r)}}var xs=[],Ms=0,ec=null,nc=0,On=[],Dn=0,xa=null,Vi=1,Li="";function Ma(e,r){xs[Ms++]=nc,xs[Ms++]=ec,ec=e,nc=r}function ry(e,r,s){On[Dn++]=Vi,On[Dn++]=Li,On[Dn++]=xa,xa=e;var l=Vi;e=Li;var f=32-nn(l)-1;l&=~(1<<f),s+=1;var d=32-nn(r)+f;if(30<d){var _=f-f%5;d=(l&(1<<_)-1).toString(32),l>>=_,f-=_,Vi=1<<32-nn(r)+f|s<<f|l,Li=d+e}else Vi=1<<d|s<<f|l,Li=e}function Mh(e){e.return!==null&&(Ma(e,1),ry(e,1,0))}function Ph(e){for(;e===ec;)ec=xs[--Ms],xs[Ms]=null,nc=xs[--Ms],xs[Ms]=null;for(;e===xa;)xa=On[--Dn],On[Dn]=null,Li=On[--Dn],On[Dn]=null,Vi=On[--Dn],On[Dn]=null}var sn=null,je=null,qt=!1,Hn=null,si=!1,kh=Error(a(519));function Pa(e){var r=Error(a(418,""));throw rl(In(r,e)),kh}function ay(e){var r=e.stateNode,s=e.type,l=e.memoizedProps;switch(r[Me]=e,r[Se]=l,s){case"dialog":Vt("cancel",r),Vt("close",r);break;case"iframe":case"object":case"embed":Vt("load",r);break;case"video":case"audio":for(s=0;s<Il.length;s++)Vt(Il[s],r);break;case"source":Vt("error",r);break;case"img":case"image":case"link":Vt("error",r),Vt("load",r);break;case"details":Vt("toggle",r);break;case"input":Vt("invalid",r),Ta(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Ea(r);break;case"select":Vt("invalid",r);break;case"textarea":Vt("invalid",r),Rr(r,l.value,l.defaultValue,l.children),Ea(r)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||l.suppressHydrationWarning===!0||m_(r.textContent,s)?(l.popover!=null&&(Vt("beforetoggle",r),Vt("toggle",r)),l.onScroll!=null&&Vt("scroll",r),l.onScrollEnd!=null&&Vt("scrollend",r),l.onClick!=null&&(r.onclick=Pc),r=!0):r=!1,r||Pa(e)}function sy(e){for(sn=e.return;sn;)switch(sn.tag){case 3:case 27:si=!0;return;case 5:case 13:si=!1;return;default:sn=sn.return}}function nl(e){if(e!==sn)return!1;if(!qt)return sy(e),qt=!0,!1;var r=!1,s;if((s=e.tag!==3&&e.tag!==27)&&((s=e.tag===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||em(e.type,e.memoizedProps)),s=!s),s&&(r=!0),r&&je&&Pa(e),sy(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));t:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8)if(s=e.data,s==="/$"){if(r===0){je=qn(e.nextSibling);break t}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++;e=e.nextSibling}je=null}}else je=sn?qn(e.stateNode.nextSibling):null;return!0}function il(){je=sn=null,qt=!1}function rl(e){Hn===null?Hn=[e]:Hn.push(e)}var al=Error(a(460)),oy=Error(a(474)),Vh={then:function(){}};function ly(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ic(){}function uy(e,r,s){switch(s=e[s],s===void 0?e.push(r):s!==r&&(r.then(ic,ic),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,e===al?Error(a(483)):e;default:if(typeof r.status=="string")r.then(ic,ic);else{if(e=Jt,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=r,e.status="pending",e.then(function(l){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=l}},function(l){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw e=r.reason,e===al?Error(a(483)):e}throw sl=r,al}}var sl=null;function cy(){if(sl===null)throw Error(a(459));var e=sl;return sl=null,e}var Ps=null,ol=0;function rc(e){var r=ol;return ol+=1,Ps===null&&(Ps=[]),uy(Ps,e,r)}function ll(e,r){r=r.props.ref,e.ref=r!==void 0?r:null}function ac(e,r){throw r.$$typeof===u?Error(a(525)):(e=Object.prototype.toString.call(r),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e)))}function fy(e){var r=e._init;return r(e._payload)}function hy(e){function r(L,M){if(e){var j=L.deletions;j===null?(L.deletions=[M],L.flags|=16):j.push(M)}}function s(L,M){if(!e)return null;for(;M!==null;)r(L,M),M=M.sibling;return null}function l(L){for(var M=new Map;L!==null;)L.key!==null?M.set(L.key,L):M.set(L.index,L),L=L.sibling;return M}function f(L,M){return L=Br(L,M),L.index=0,L.sibling=null,L}function d(L,M,j){return L.index=j,e?(j=L.alternate,j!==null?(j=j.index,j<M?(L.flags|=33554434,M):j):(L.flags|=33554434,M)):(L.flags|=1048576,M)}function _(L){return e&&L.alternate===null&&(L.flags|=33554434),L}function T(L,M,j,$){return M===null||M.tag!==6?(M=Dd(j,L.mode,$),M.return=L,M):(M=f(M,j),M.return=L,M)}function C(L,M,j,$){var ut=j.type;return ut===p?Y(L,M,j.props.children,$,j.key):M!==null&&(M.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===Z&&fy(ut)===M.type)?(M=f(M,j.props),ll(M,j),M.return=L,M):(M=Ac(j.type,j.key,j.props,null,L.mode,$),ll(M,j),M.return=L,M)}function k(L,M,j,$){return M===null||M.tag!==4||M.stateNode.containerInfo!==j.containerInfo||M.stateNode.implementation!==j.implementation?(M=Nd(j,L.mode,$),M.return=L,M):(M=f(M,j.children||[]),M.return=L,M)}function Y(L,M,j,$,ut){return M===null||M.tag!==7?(M=qa(j,L.mode,$,ut),M.return=L,M):(M=f(M,j),M.return=L,M)}function J(L,M,j){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Dd(""+M,L.mode,j),M.return=L,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case h:return j=Ac(M.type,M.key,M.props,null,L.mode,j),ll(j,M),j.return=L,j;case m:return M=Nd(M,L.mode,j),M.return=L,M;case Z:var $=M._init;return M=$(M._payload),J(L,M,j)}if(st(M)||At(M))return M=qa(M,L.mode,j,null),M.return=L,M;if(typeof M.then=="function")return J(L,rc(M),j);if(M.$$typeof===D)return J(L,Ec(L,M),j);ac(L,M)}return null}function H(L,M,j,$){var ut=M!==null?M.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return ut!==null?null:T(L,M,""+j,$);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case h:return j.key===ut?C(L,M,j,$):null;case m:return j.key===ut?k(L,M,j,$):null;case Z:return ut=j._init,j=ut(j._payload),H(L,M,j,$)}if(st(j)||At(j))return ut!==null?null:Y(L,M,j,$,null);if(typeof j.then=="function")return H(L,M,rc(j),$);if(j.$$typeof===D)return H(L,M,Ec(L,j),$);ac(L,j)}return null}function G(L,M,j,$,ut){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return L=L.get(j)||null,T(M,L,""+$,ut);if(typeof $=="object"&&$!==null){switch($.$$typeof){case h:return L=L.get($.key===null?j:$.key)||null,C(M,L,$,ut);case m:return L=L.get($.key===null?j:$.key)||null,k(M,L,$,ut);case Z:var Nt=$._init;return $=Nt($._payload),G(L,M,j,$,ut)}if(st($)||At($))return L=L.get(j)||null,Y(M,L,$,ut,null);if(typeof $.then=="function")return G(L,M,j,rc($),ut);if($.$$typeof===D)return G(L,M,j,Ec(M,$),ut);ac(M,$)}return null}function ft(L,M,j,$){for(var ut=null,Nt=null,mt=M,vt=M=0,Ue=null;mt!==null&&vt<j.length;vt++){mt.index>vt?(Ue=mt,mt=null):Ue=mt.sibling;var Gt=H(L,mt,j[vt],$);if(Gt===null){mt===null&&(mt=Ue);break}e&&mt&&Gt.alternate===null&&r(L,mt),M=d(Gt,M,vt),Nt===null?ut=Gt:Nt.sibling=Gt,Nt=Gt,mt=Ue}if(vt===j.length)return s(L,mt),qt&&Ma(L,vt),ut;if(mt===null){for(;vt<j.length;vt++)mt=J(L,j[vt],$),mt!==null&&(M=d(mt,M,vt),Nt===null?ut=mt:Nt.sibling=mt,Nt=mt);return qt&&Ma(L,vt),ut}for(mt=l(mt);vt<j.length;vt++)Ue=G(mt,L,vt,j[vt],$),Ue!==null&&(e&&Ue.alternate!==null&&mt.delete(Ue.key===null?vt:Ue.key),M=d(Ue,M,vt),Nt===null?ut=Ue:Nt.sibling=Ue,Nt=Ue);return e&&mt.forEach(function(Yr){return r(L,Yr)}),qt&&Ma(L,vt),ut}function wt(L,M,j,$){if(j==null)throw Error(a(151));for(var ut=null,Nt=null,mt=M,vt=M=0,Ue=null,Gt=j.next();mt!==null&&!Gt.done;vt++,Gt=j.next()){mt.index>vt?(Ue=mt,mt=null):Ue=mt.sibling;var Yr=H(L,mt,Gt.value,$);if(Yr===null){mt===null&&(mt=Ue);break}e&&mt&&Yr.alternate===null&&r(L,mt),M=d(Yr,M,vt),Nt===null?ut=Yr:Nt.sibling=Yr,Nt=Yr,mt=Ue}if(Gt.done)return s(L,mt),qt&&Ma(L,vt),ut;if(mt===null){for(;!Gt.done;vt++,Gt=j.next())Gt=J(L,Gt.value,$),Gt!==null&&(M=d(Gt,M,vt),Nt===null?ut=Gt:Nt.sibling=Gt,Nt=Gt);return qt&&Ma(L,vt),ut}for(mt=l(mt);!Gt.done;vt++,Gt=j.next())Gt=G(mt,L,vt,Gt.value,$),Gt!==null&&(e&&Gt.alternate!==null&&mt.delete(Gt.key===null?vt:Gt.key),M=d(Gt,M,vt),Nt===null?ut=Gt:Nt.sibling=Gt,Nt=Gt);return e&&mt.forEach(function(KS){return r(L,KS)}),qt&&Ma(L,vt),ut}function he(L,M,j,$){if(typeof j=="object"&&j!==null&&j.type===p&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case h:t:{for(var ut=j.key;M!==null;){if(M.key===ut){if(ut=j.type,ut===p){if(M.tag===7){s(L,M.sibling),$=f(M,j.props.children),$.return=L,L=$;break t}}else if(M.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===Z&&fy(ut)===M.type){s(L,M.sibling),$=f(M,j.props),ll($,j),$.return=L,L=$;break t}s(L,M);break}else r(L,M);M=M.sibling}j.type===p?($=qa(j.props.children,L.mode,$,j.key),$.return=L,L=$):($=Ac(j.type,j.key,j.props,null,L.mode,$),ll($,j),$.return=L,L=$)}return _(L);case m:t:{for(ut=j.key;M!==null;){if(M.key===ut)if(M.tag===4&&M.stateNode.containerInfo===j.containerInfo&&M.stateNode.implementation===j.implementation){s(L,M.sibling),$=f(M,j.children||[]),$.return=L,L=$;break t}else{s(L,M);break}else r(L,M);M=M.sibling}$=Nd(j,L.mode,$),$.return=L,L=$}return _(L);case Z:return ut=j._init,j=ut(j._payload),he(L,M,j,$)}if(st(j))return ft(L,M,j,$);if(At(j)){if(ut=At(j),typeof ut!="function")throw Error(a(150));return j=ut.call(j),wt(L,M,j,$)}if(typeof j.then=="function")return he(L,M,rc(j),$);if(j.$$typeof===D)return he(L,M,Ec(L,j),$);ac(L,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,M!==null&&M.tag===6?(s(L,M.sibling),$=f(M,j),$.return=L,L=$):(s(L,M),$=Dd(j,L.mode,$),$.return=L,L=$),_(L)):s(L,M)}return function(L,M,j,$){try{ol=0;var ut=he(L,M,j,$);return Ps=null,ut}catch(mt){if(mt===al)throw mt;var Nt=Pn(29,mt,null,L.mode);return Nt.lanes=$,Nt.return=L,Nt}finally{}}}var ka=hy(!0),dy=hy(!1),ks=Ht(null),sc=Ht(0);function my(e,r){e=Qi,$t(sc,e),$t(ks,r),Qi=e|r.baseLanes}function Lh(){$t(sc,Qi),$t(ks,ks.current)}function Uh(){Qi=sc.current,le(ks),le(sc)}var Nn=Ht(null),oi=null;function Or(e){var r=e.alternate;$t(Ce,Ce.current&1),$t(Nn,e),oi===null&&(r===null||ks.current!==null||r.memoizedState!==null)&&(oi=e)}function py(e){if(e.tag===22){if($t(Ce,Ce.current),$t(Nn,e),oi===null){var r=e.alternate;r!==null&&r.memoizedState!==null&&(oi=e)}}else Dr()}function Dr(){$t(Ce,Ce.current),$t(Nn,Nn.current)}function Ui(e){le(Nn),oi===e&&(oi=null),le(Ce)}var Ce=Ht(0);function oc(e){for(var r=e;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var M1=typeof AbortController<"u"?AbortController:function(){var e=[],r=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){r.aborted=!0,e.forEach(function(s){return s()})}},P1=i.unstable_scheduleCallback,k1=i.unstable_NormalPriority,Ie={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zh(){return{controller:new M1,data:new Map,refCount:0}}function ul(e){e.refCount--,e.refCount===0&&P1(k1,function(){e.controller.abort()})}var cl=null,Bh=0,Vs=0,Ls=null;function V1(e,r){if(cl===null){var s=cl=[];Bh=0,Vs=Kd(),Ls={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Bh++,r.then(gy,gy),r}function gy(){if(--Bh===0&&cl!==null){Ls!==null&&(Ls.status="fulfilled");var e=cl;cl=null,Vs=0,Ls=null;for(var r=0;r<e.length;r++)(0,e[r])()}}function L1(e,r){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=r;for(var f=0;f<s.length;f++)(0,s[f])(r)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var yy=S.S;S.S=function(e,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&V1(e,r),yy!==null&&yy(e,r)};var Va=Ht(null);function jh(){var e=Va.current;return e!==null?e:Jt.pooledCache}function lc(e,r){r===null?$t(Va,Va.current):$t(Va,r.pool)}function vy(){var e=jh();return e===null?null:{parent:Ie._currentValue,pool:e}}var Nr=0,Dt=null,Xt=null,ve=null,uc=!1,Us=!1,La=!1,cc=0,fl=0,zs=null,U1=0;function me(){throw Error(a(321))}function Hh(e,r){if(r===null)return!1;for(var s=0;s<r.length&&s<e.length;s++)if(!mn(e[s],r[s]))return!1;return!0}function Fh(e,r,s,l,f,d){return Nr=d,Dt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,S.H=e===null||e.memoizedState===null?Ua:xr,La=!1,d=s(l,f),La=!1,Us&&(d=Ey(r,s,l,f)),_y(e),d}function _y(e){S.H=li;var r=Xt!==null&&Xt.next!==null;if(Nr=0,ve=Xt=Dt=null,uc=!1,fl=0,zs=null,r)throw Error(a(300));e===null||Ve||(e=e.dependencies,e!==null&&_c(e)&&(Ve=!0))}function Ey(e,r,s,l){Dt=e;var f=0;do{if(Us&&(zs=null),fl=0,Us=!1,25<=f)throw Error(a(301));if(f+=1,ve=Xt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}S.H=za,d=r(s,l)}while(Us);return d}function z1(){var e=S.H,r=e.useState()[0];return r=typeof r.then=="function"?hl(r):r,e=e.useState()[0],(Xt!==null?Xt.memoizedState:null)!==e&&(Dt.flags|=1024),r}function qh(){var e=cc!==0;return cc=0,e}function Gh(e,r,s){r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~s}function Kh(e){if(uc){for(e=e.memoizedState;e!==null;){var r=e.queue;r!==null&&(r.pending=null),e=e.next}uc=!1}Nr=0,ve=Xt=Dt=null,Us=!1,fl=cc=0,zs=null}function cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?Dt.memoizedState=ve=e:ve=ve.next=e,ve}function _e(){if(Xt===null){var e=Dt.alternate;e=e!==null?e.memoizedState:null}else e=Xt.next;var r=ve===null?Dt.memoizedState:ve.next;if(r!==null)ve=r,Xt=e;else{if(e===null)throw Dt.alternate===null?Error(a(467)):Error(a(310));Xt=e,e={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},ve===null?Dt.memoizedState=ve=e:ve=ve.next=e}return ve}var fc;fc=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function hl(e){var r=fl;return fl+=1,zs===null&&(zs=[]),e=uy(zs,e,r),r=Dt,(ve===null?r.memoizedState:ve.next)===null&&(r=r.alternate,S.H=r===null||r.memoizedState===null?Ua:xr),e}function hc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hl(e);if(e.$$typeof===D)return Qe(e)}throw Error(a(438,String(e)))}function Yh(e){var r=null,s=Dt.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var l=Dt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=fc(),Dt.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(e),l=0;l<e;l++)s[l]=ct;return r.index++,s}function zi(e,r){return typeof r=="function"?r(e):r}function dc(e){var r=_e();return Qh(r,Xt,e)}function Qh(e,r,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=e.baseQueue,d=l.pending;if(d!==null){if(f!==null){var _=f.next;f.next=d.next,d.next=_}r.baseQueue=f=d,l.pending=null}if(d=e.baseState,f===null)e.memoizedState=d;else{r=f.next;var T=_=null,C=null,k=r,Y=!1;do{var J=k.lane&-536870913;if(J!==k.lane?(Bt&J)===J:(Nr&J)===J){var H=k.revertLane;if(H===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),J===Vs&&(Y=!0);else if((Nr&H)===H){k=k.next,H===Vs&&(Y=!0);continue}else J={lane:0,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},C===null?(T=C=J,_=d):C=C.next=J,Dt.lanes|=H,jr|=H;J=k.action,La&&s(d,J),d=k.hasEagerState?k.eagerState:s(d,J)}else H={lane:J,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},C===null?(T=C=H,_=d):C=C.next=H,Dt.lanes|=J,jr|=J;k=k.next}while(k!==null&&k!==r);if(C===null?_=d:C.next=T,!mn(d,e.memoizedState)&&(Ve=!0,Y&&(s=Ls,s!==null)))throw s;e.memoizedState=d,e.baseState=_,e.baseQueue=C,l.lastRenderedState=d}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function $h(e){var r=_e(),s=r.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,d=r.memoizedState;if(f!==null){s.pending=null;var _=f=f.next;do d=e(d,_.action),_=_.next;while(_!==f);mn(d,r.memoizedState)||(Ve=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),s.lastRenderedState=d}return[d,l]}function Ty(e,r,s){var l=Dt,f=_e(),d=qt;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=r();var _=!mn((Xt||f).memoizedState,s);if(_&&(f.memoizedState=s,Ve=!0),f=f.queue,Zh(Sy.bind(null,l,f,e),[e]),f.getSnapshot!==r||_||ve!==null&&ve.memoizedState.tag&1){if(l.flags|=2048,Bs(9,Ay.bind(null,l,f,s,r),{destroy:void 0},null),Jt===null)throw Error(a(349));d||Nr&60||by(l,r,s)}return s}function by(e,r,s){e.flags|=16384,e={getSnapshot:r,value:s},r=Dt.updateQueue,r===null?(r=fc(),Dt.updateQueue=r,r.stores=[e]):(s=r.stores,s===null?r.stores=[e]:s.push(e))}function Ay(e,r,s,l){r.value=s,r.getSnapshot=l,wy(r)&&Ry(e)}function Sy(e,r,s){return s(function(){wy(r)&&Ry(e)})}function wy(e){var r=e.getSnapshot;e=e.value;try{var s=r();return!mn(e,s)}catch{return!0}}function Ry(e){var r=Ir(e,2);r!==null&&on(r,e,2)}function Xh(e){var r=cn();if(typeof e=="function"){var s=e;if(e=s(),La){$n(!0);try{s()}finally{$n(!1)}}}return r.memoizedState=r.baseState=e,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:e},r}function Cy(e,r,s,l){return e.baseState=s,Qh(e,Xt,typeof l=="function"?l:zi)}function B1(e,r,s,l,f){if(gc(e))throw Error(a(485));if(e=r.action,e!==null){var d={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};S.T!==null?s(!0):d.isTransition=!1,l(d),s=r.pending,s===null?(d.next=r.pending=d,Iy(r,d)):(d.next=s.next,r.pending=s.next=d)}}function Iy(e,r){var s=r.action,l=r.payload,f=e.state;if(r.isTransition){var d=S.T,_={};S.T=_;try{var T=s(f,l),C=S.S;C!==null&&C(_,T),Oy(e,r,T)}catch(k){Wh(e,r,k)}finally{S.T=d}}else try{d=s(f,l),Oy(e,r,d)}catch(k){Wh(e,r,k)}}function Oy(e,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Dy(e,r,l)},function(l){return Wh(e,r,l)}):Dy(e,r,s)}function Dy(e,r,s){r.status="fulfilled",r.value=s,Ny(r),e.state=s,r=e.pending,r!==null&&(s=r.next,s===r?e.pending=null:(s=s.next,r.next=s,Iy(e,s)))}function Wh(e,r,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=s,Ny(r),r=r.next;while(r!==l)}e.action=null}function Ny(e){e=e.listeners;for(var r=0;r<e.length;r++)(0,e[r])()}function xy(e,r){return r}function My(e,r){if(qt){var s=Jt.formState;if(s!==null){t:{var l=Dt;if(qt){if(je){e:{for(var f=je,d=si;f.nodeType!==8;){if(!d){f=null;break e}if(f=qn(f.nextSibling),f===null){f=null;break e}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){je=qn(f.nextSibling),l=f.data==="F!";break t}}Pa(l)}l=!1}l&&(r=s[0])}}return s=cn(),s.memoizedState=s.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xy,lastRenderedState:r},s.queue=l,s=Wy.bind(null,Dt,l),l.dispatch=s,l=Xh(!1),d=id.bind(null,Dt,!1,l.queue),l=cn(),f={state:r,dispatch:null,action:e,pending:null},l.queue=f,s=B1.bind(null,Dt,f,d,s),f.dispatch=s,l.memoizedState=e,[r,s,!1]}function Py(e){var r=_e();return ky(r,Xt,e)}function ky(e,r,s){r=Qh(e,r,xy)[0],e=dc(zi)[0],r=typeof r=="object"&&r!==null&&typeof r.then=="function"?hl(r):r;var l=_e(),f=l.queue,d=f.dispatch;return s!==l.memoizedState&&(Dt.flags|=2048,Bs(9,j1.bind(null,f,s),{destroy:void 0},null)),[r,d,e]}function j1(e,r){e.action=r}function Vy(e){var r=_e(),s=Xt;if(s!==null)return ky(r,s,e);_e(),r=r.memoizedState,s=_e();var l=s.queue.dispatch;return s.memoizedState=e,[r,l,!1]}function Bs(e,r,s,l){return e={tag:e,create:r,inst:s,deps:l,next:null},r=Dt.updateQueue,r===null&&(r=fc(),Dt.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,r.lastEffect=e),e}function Ly(){return _e().memoizedState}function mc(e,r,s,l){var f=cn();Dt.flags|=e,f.memoizedState=Bs(1|r,s,{destroy:void 0},l===void 0?null:l)}function pc(e,r,s,l){var f=_e();l=l===void 0?null:l;var d=f.memoizedState.inst;Xt!==null&&l!==null&&Hh(l,Xt.memoizedState.deps)?f.memoizedState=Bs(r,s,d,l):(Dt.flags|=e,f.memoizedState=Bs(1|r,s,d,l))}function Uy(e,r){mc(8390656,8,e,r)}function Zh(e,r){pc(2048,8,e,r)}function zy(e,r){return pc(4,2,e,r)}function By(e,r){return pc(4,4,e,r)}function jy(e,r){if(typeof r=="function"){e=e();var s=r(e);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Hy(e,r,s){s=s!=null?s.concat([e]):null,pc(4,4,jy.bind(null,r,e),s)}function Jh(){}function Fy(e,r){var s=_e();r=r===void 0?null:r;var l=s.memoizedState;return r!==null&&Hh(r,l[1])?l[0]:(s.memoizedState=[e,r],e)}function qy(e,r){var s=_e();r=r===void 0?null:r;var l=s.memoizedState;if(r!==null&&Hh(r,l[1]))return l[0];if(l=e(),La){$n(!0);try{e()}finally{$n(!1)}}return s.memoizedState=[l,r],l}function td(e,r,s){return s===void 0||Nr&1073741824?e.memoizedState=r:(e.memoizedState=s,e=Kv(),Dt.lanes|=e,jr|=e,s)}function Gy(e,r,s,l){return mn(s,r)?s:ks.current!==null?(e=td(e,s,l),mn(e,r)||(Ve=!0),e):Nr&42?(e=Kv(),Dt.lanes|=e,jr|=e,r):(Ve=!0,e.memoizedState=s)}function Ky(e,r,s,l,f){var d=ot.p;ot.p=d!==0&&8>d?d:8;var _=S.T,T={};S.T=T,id(e,!1,r,s);try{var C=f(),k=S.S;if(k!==null&&k(T,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var Y=L1(C,l);dl(e,r,Y,vn(e))}else dl(e,r,l,vn(e))}catch(J){dl(e,r,{then:function(){},status:"rejected",reason:J},vn())}finally{ot.p=d,S.T=_}}function H1(){}function ed(e,r,s,l){if(e.tag!==5)throw Error(a(476));var f=Yy(e).queue;Ky(e,f,r,Ot,s===null?H1:function(){return Qy(e),s(l)})}function Yy(e){var r=e.memoizedState;if(r!==null)return r;r={memoizedState:Ot,baseState:Ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:Ot},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:s},next:null},e.memoizedState=r,e=e.alternate,e!==null&&(e.memoizedState=r),r}function Qy(e){var r=Yy(e).next.queue;dl(e,r,{},vn())}function nd(){return Qe(Ml)}function $y(){return _e().memoizedState}function Xy(){return _e().memoizedState}function F1(e){for(var r=e.return;r!==null;){switch(r.tag){case 24:case 3:var s=vn();e=kr(s);var l=Vr(r,e,s);l!==null&&(on(l,r,s),gl(l,r,s)),r={cache:zh()},e.payload=r;return}r=r.return}}function q1(e,r,s){var l=vn();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},gc(e)?Zy(r,s):(s=xh(e,r,s,l),s!==null&&(on(s,e,l),Jy(s,r,l)))}function Wy(e,r,s){var l=vn();dl(e,r,s,l)}function dl(e,r,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(gc(e))Zy(r,f);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var _=r.lastRenderedState,T=d(_,s);if(f.hasEagerState=!0,f.eagerState=T,mn(T,_))return Ju(e,r,f,0),Jt===null&&Zu(),!1}catch{}finally{}if(s=xh(e,r,f,l),s!==null)return on(s,e,l),Jy(s,r,l),!0}return!1}function id(e,r,s,l){if(l={lane:2,revertLane:Kd(),action:l,hasEagerState:!1,eagerState:null,next:null},gc(e)){if(r)throw Error(a(479))}else r=xh(e,s,l,2),r!==null&&on(r,e,2)}function gc(e){var r=e.alternate;return e===Dt||r!==null&&r===Dt}function Zy(e,r){Us=uc=!0;var s=e.pending;s===null?r.next=r:(r.next=s.next,s.next=r),e.pending=r}function Jy(e,r,s){if(s&4194176){var l=r.lanes;l&=e.pendingLanes,s|=l,r.lanes=s,vr(e,s)}}var li={readContext:Qe,use:hc,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useLayoutEffect:me,useInsertionEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useSyncExternalStore:me,useId:me};li.useCacheRefresh=me,li.useMemoCache=me,li.useHostTransitionStatus=me,li.useFormState=me,li.useActionState=me,li.useOptimistic=me;var Ua={readContext:Qe,use:hc,useCallback:function(e,r){return cn().memoizedState=[e,r===void 0?null:r],e},useContext:Qe,useEffect:Uy,useImperativeHandle:function(e,r,s){s=s!=null?s.concat([e]):null,mc(4194308,4,jy.bind(null,r,e),s)},useLayoutEffect:function(e,r){return mc(4194308,4,e,r)},useInsertionEffect:function(e,r){mc(4,2,e,r)},useMemo:function(e,r){var s=cn();r=r===void 0?null:r;var l=e();if(La){$n(!0);try{e()}finally{$n(!1)}}return s.memoizedState=[l,r],l},useReducer:function(e,r,s){var l=cn();if(s!==void 0){var f=s(r);if(La){$n(!0);try{s(r)}finally{$n(!1)}}}else f=r;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=q1.bind(null,Dt,e),[l.memoizedState,e]},useRef:function(e){var r=cn();return e={current:e},r.memoizedState=e},useState:function(e){e=Xh(e);var r=e.queue,s=Wy.bind(null,Dt,r);return r.dispatch=s,[e.memoizedState,s]},useDebugValue:Jh,useDeferredValue:function(e,r){var s=cn();return td(s,e,r)},useTransition:function(){var e=Xh(!1);return e=Ky.bind(null,Dt,e.queue,!0,!1),cn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,r,s){var l=Dt,f=cn();if(qt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=r(),Jt===null)throw Error(a(349));Bt&60||by(l,r,s)}f.memoizedState=s;var d={value:s,getSnapshot:r};return f.queue=d,Uy(Sy.bind(null,l,d,e),[e]),l.flags|=2048,Bs(9,Ay.bind(null,l,d,s,r),{destroy:void 0},null),s},useId:function(){var e=cn(),r=Jt.identifierPrefix;if(qt){var s=Li,l=Vi;s=(l&~(1<<32-nn(l)-1)).toString(32)+s,r=":"+r+"R"+s,s=cc++,0<s&&(r+="H"+s.toString(32)),r+=":"}else s=U1++,r=":"+r+"r"+s.toString(32)+":";return e.memoizedState=r},useCacheRefresh:function(){return cn().memoizedState=F1.bind(null,Dt)}};Ua.useMemoCache=Yh,Ua.useHostTransitionStatus=nd,Ua.useFormState=My,Ua.useActionState=My,Ua.useOptimistic=function(e){var r=cn();r.memoizedState=r.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=id.bind(null,Dt,!0,s),s.dispatch=r,[e,r]};var xr={readContext:Qe,use:hc,useCallback:Fy,useContext:Qe,useEffect:Zh,useImperativeHandle:Hy,useInsertionEffect:zy,useLayoutEffect:By,useMemo:qy,useReducer:dc,useRef:Ly,useState:function(){return dc(zi)},useDebugValue:Jh,useDeferredValue:function(e,r){var s=_e();return Gy(s,Xt.memoizedState,e,r)},useTransition:function(){var e=dc(zi)[0],r=_e().memoizedState;return[typeof e=="boolean"?e:hl(e),r]},useSyncExternalStore:Ty,useId:$y};xr.useCacheRefresh=Xy,xr.useMemoCache=Yh,xr.useHostTransitionStatus=nd,xr.useFormState=Py,xr.useActionState=Py,xr.useOptimistic=function(e,r){var s=_e();return Cy(s,Xt,e,r)};var za={readContext:Qe,use:hc,useCallback:Fy,useContext:Qe,useEffect:Zh,useImperativeHandle:Hy,useInsertionEffect:zy,useLayoutEffect:By,useMemo:qy,useReducer:$h,useRef:Ly,useState:function(){return $h(zi)},useDebugValue:Jh,useDeferredValue:function(e,r){var s=_e();return Xt===null?td(s,e,r):Gy(s,Xt.memoizedState,e,r)},useTransition:function(){var e=$h(zi)[0],r=_e().memoizedState;return[typeof e=="boolean"?e:hl(e),r]},useSyncExternalStore:Ty,useId:$y};za.useCacheRefresh=Xy,za.useMemoCache=Yh,za.useHostTransitionStatus=nd,za.useFormState=Vy,za.useActionState=Vy,za.useOptimistic=function(e,r){var s=_e();return Xt!==null?Cy(s,Xt,e,r):(s.baseState=e,[e,s.queue.dispatch])};function rd(e,r,s,l){r=e.memoizedState,s=s(l,r),s=s==null?r:I({},r,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var ad={isMounted:function(e){return(e=e._reactInternals)?pt(e)===e:!1},enqueueSetState:function(e,r,s){e=e._reactInternals;var l=vn(),f=kr(l);f.payload=r,s!=null&&(f.callback=s),r=Vr(e,f,l),r!==null&&(on(r,e,l),gl(r,e,l))},enqueueReplaceState:function(e,r,s){e=e._reactInternals;var l=vn(),f=kr(l);f.tag=1,f.payload=r,s!=null&&(f.callback=s),r=Vr(e,f,l),r!==null&&(on(r,e,l),gl(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var s=vn(),l=kr(s);l.tag=2,r!=null&&(l.callback=r),r=Vr(e,l,s),r!==null&&(on(r,e,s),gl(r,e,s))}};function tv(e,r,s,l,f,d,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,_):r.prototype&&r.prototype.isPureReactComponent?!tl(s,l)||!tl(f,d):!0}function ev(e,r,s,l){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,l),r.state!==e&&ad.enqueueReplaceState(r,r.state,null)}function Ba(e,r){var s=r;if("ref"in r){s={};for(var l in r)l!=="ref"&&(s[l]=r[l])}if(e=e.defaultProps){s===r&&(s=I({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}var yc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function nv(e){yc(e)}function iv(e){console.error(e)}function rv(e){yc(e)}function vc(e,r){try{var s=e.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function av(e,r,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function sd(e,r,s){return s=kr(s),s.tag=3,s.payload={element:null},s.callback=function(){vc(e,r)},s}function sv(e){return e=kr(e),e.tag=3,e}function ov(e,r,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;e.payload=function(){return f(d)},e.callback=function(){av(r,s,l)}}var _=s.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){av(r,s,l),typeof f!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function G1(e,r,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=s.alternate,r!==null&&pl(r,s,f,!0),s=Nn.current,s!==null){switch(s.tag){case 13:return oi===null?jd():s.alternate===null&&fe===0&&(fe=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Vh?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([l]):r.add(l),Fd(e,l,f)),!1;case 22:return s.flags|=65536,l===Vh?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([l]):s.add(l)),Fd(e,l,f)),!1}throw Error(a(435,s.tag))}return Fd(e,l,f),jd(),!1}if(qt)return r=Nn.current,r!==null?(!(r.flags&65536)&&(r.flags|=256),r.flags|=65536,r.lanes=f,l!==kh&&(e=Error(a(422),{cause:l}),rl(In(e,s)))):(l!==kh&&(r=Error(a(423),{cause:l}),rl(In(r,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=In(l,s),f=sd(e.stateNode,l,f),Td(e,f),fe!==4&&(fe=2)),!1;var d=Error(a(520),{cause:l});if(d=In(d,s),Sl===null?Sl=[d]:Sl.push(d),fe!==4&&(fe=2),r===null)return!0;l=In(l,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=sd(s.stateNode,l,e),Td(s,e),!1;case 1:if(r=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Hr===null||!Hr.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=sv(f),ov(f,e,s,l),Td(s,f),!1}s=s.return}while(s!==null);return!1}var lv=Error(a(461)),Ve=!1;function He(e,r,s,l){r.child=e===null?dy(r,null,s,l):ka(r,e.child,s,l)}function uv(e,r,s,l,f){s=s.render;var d=r.ref;if("ref"in l){var _={};for(var T in l)T!=="ref"&&(_[T]=l[T])}else _=l;return Ha(r),l=Fh(e,r,s,_,d,f),T=qh(),e!==null&&!Ve?(Gh(e,r,f),Bi(e,r,f)):(qt&&T&&Mh(r),r.flags|=1,He(e,r,l,f),r.child)}function cv(e,r,s,l,f){if(e===null){var d=s.type;return typeof d=="function"&&!Od(d)&&d.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=d,fv(e,r,d,l,f)):(e=Ac(s.type,null,l,r,r.mode,f),e.ref=r.ref,e.return=r,r.child=e)}if(d=e.child,!pd(e,f)){var _=d.memoizedProps;if(s=s.compare,s=s!==null?s:tl,s(_,l)&&e.ref===r.ref)return Bi(e,r,f)}return r.flags|=1,e=Br(d,l),e.ref=r.ref,e.return=r,r.child=e}function fv(e,r,s,l,f){if(e!==null){var d=e.memoizedProps;if(tl(d,l)&&e.ref===r.ref)if(Ve=!1,r.pendingProps=l=d,pd(e,f))e.flags&131072&&(Ve=!0);else return r.lanes=e.lanes,Bi(e,r,f)}return od(e,r,s,l,f)}function hv(e,r,s){var l=r.pendingProps,f=l.children,d=(r.stateNode._pendingVisibility&2)!==0,_=e!==null?e.memoizedState:null;if(ml(e,r),l.mode==="hidden"||d){if(r.flags&128){if(l=_!==null?_.baseLanes|s:s,e!==null){for(f=r.child=e.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;r.childLanes=d&~l}else r.childLanes=0,r.child=null;return dv(e,r,l,s)}if(s&536870912)r.memoizedState={baseLanes:0,cachePool:null},e!==null&&lc(r,_!==null?_.cachePool:null),_!==null?my(r,_):Lh(),py(r);else return r.lanes=r.childLanes=536870912,dv(e,r,_!==null?_.baseLanes|s:s,s)}else _!==null?(lc(r,_.cachePool),my(r,_),Dr(),r.memoizedState=null):(e!==null&&lc(r,null),Lh(),Dr());return He(e,r,f,s),r.child}function dv(e,r,s,l){var f=jh();return f=f===null?null:{parent:Ie._currentValue,pool:f},r.memoizedState={baseLanes:s,cachePool:f},e!==null&&lc(r,null),Lh(),py(r),e!==null&&pl(e,r,l,!0),null}function ml(e,r){var s=r.ref;if(s===null)e!==null&&e.ref!==null&&(r.flags|=2097664);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(r.flags|=2097664)}}function od(e,r,s,l,f){return Ha(r),s=Fh(e,r,s,l,void 0,f),l=qh(),e!==null&&!Ve?(Gh(e,r,f),Bi(e,r,f)):(qt&&l&&Mh(r),r.flags|=1,He(e,r,s,f),r.child)}function mv(e,r,s,l,f,d){return Ha(r),r.updateQueue=null,s=Ey(r,l,s,f),_y(e),l=qh(),e!==null&&!Ve?(Gh(e,r,d),Bi(e,r,d)):(qt&&l&&Mh(r),r.flags|=1,He(e,r,s,d),r.child)}function pv(e,r,s,l,f){if(Ha(r),r.stateNode===null){var d=Ns,_=s.contextType;typeof _=="object"&&_!==null&&(d=Qe(_)),d=new s(l,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ad,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=l,d.state=r.memoizedState,d.refs={},_d(r),_=s.contextType,d.context=typeof _=="object"&&_!==null?Qe(_):Ns,d.state=r.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(rd(r,s,_,l),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&ad.enqueueReplaceState(d,d.state,null),vl(r,l,d,f),yl(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(e===null){d=r.stateNode;var T=r.memoizedProps,C=Ba(s,T);d.props=C;var k=d.context,Y=s.contextType;_=Ns,typeof Y=="object"&&Y!==null&&(_=Qe(Y));var J=s.getDerivedStateFromProps;Y=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,Y||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||k!==_)&&ev(r,d,l,_),Pr=!1;var H=r.memoizedState;d.state=H,vl(r,l,d,f),yl(),k=r.memoizedState,T||H!==k||Pr?(typeof J=="function"&&(rd(r,s,J,l),k=r.memoizedState),(C=Pr||tv(r,s,C,l,H,k,_))?(Y||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=k),d.props=l,d.state=k,d.context=_,l=C):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{d=r.stateNode,Ed(e,r),_=r.memoizedProps,Y=Ba(s,_),d.props=Y,J=r.pendingProps,H=d.context,k=s.contextType,C=Ns,typeof k=="object"&&k!==null&&(C=Qe(k)),T=s.getDerivedStateFromProps,(k=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==J||H!==C)&&ev(r,d,l,C),Pr=!1,H=r.memoizedState,d.state=H,vl(r,l,d,f),yl();var G=r.memoizedState;_!==J||H!==G||Pr||e!==null&&e.dependencies!==null&&_c(e.dependencies)?(typeof T=="function"&&(rd(r,s,T,l),G=r.memoizedState),(Y=Pr||tv(r,s,Y,l,H,G,C)||e!==null&&e.dependencies!==null&&_c(e.dependencies))?(k||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,G,C),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,G,C)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&H===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&H===e.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=G),d.props=l,d.state=G,d.context=C,l=Y):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&H===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&H===e.memoizedState||(r.flags|=1024),l=!1)}return d=l,ml(e,r),l=(r.flags&128)!==0,d||l?(d=r.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,e!==null&&l?(r.child=ka(r,e.child,null,f),r.child=ka(r,null,s,f)):He(e,r,s,f),r.memoizedState=d.state,e=r.child):e=Bi(e,r,f),e}function gv(e,r,s,l){return il(),r.flags|=256,He(e,r,s,l),r.child}var ld={dehydrated:null,treeContext:null,retryLane:0};function ud(e){return{baseLanes:e,cachePool:vy()}}function cd(e,r,s){return e=e!==null?e.childLanes&~s:0,r&&(e|=kn),e}function yv(e,r,s){var l=r.pendingProps,f=!1,d=(r.flags&128)!==0,_;if((_=d)||(_=e!==null&&e.memoizedState===null?!1:(Ce.current&2)!==0),_&&(f=!0,r.flags&=-129),_=(r.flags&32)!==0,r.flags&=-33,e===null){if(qt){if(f?Or(r):Dr(),qt){var T=je,C;if(C=T){t:{for(C=T,T=si;C.nodeType!==8;){if(!T){T=null;break t}if(C=qn(C.nextSibling),C===null){T=null;break t}}T=C}T!==null?(r.memoizedState={dehydrated:T,treeContext:xa!==null?{id:Vi,overflow:Li}:null,retryLane:536870912},C=Pn(18,null,null,0),C.stateNode=T,C.return=r,r.child=C,sn=r,je=null,C=!0):C=!1}C||Pa(r)}if(T=r.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?r.lanes=16:r.lanes=536870912,null;Ui(r)}return T=l.children,l=l.fallback,f?(Dr(),f=r.mode,T=hd({mode:"hidden",children:T},f),l=qa(l,f,s,null),T.return=r,l.return=r,T.sibling=l,r.child=T,f=r.child,f.memoizedState=ud(s),f.childLanes=cd(e,_,s),r.memoizedState=ld,l):(Or(r),fd(r,T))}if(C=e.memoizedState,C!==null&&(T=C.dehydrated,T!==null)){if(d)r.flags&256?(Or(r),r.flags&=-257,r=dd(e,r,s)):r.memoizedState!==null?(Dr(),r.child=e.child,r.flags|=128,r=null):(Dr(),f=l.fallback,T=r.mode,l=hd({mode:"visible",children:l.children},T),f=qa(f,T,s,null),f.flags|=2,l.return=r,f.return=r,l.sibling=f,r.child=l,ka(r,e.child,null,s),l=r.child,l.memoizedState=ud(s),l.childLanes=cd(e,_,s),r.memoizedState=ld,r=f);else if(Or(r),T.data==="$!"){if(_=T.nextSibling&&T.nextSibling.dataset,_)var k=_.dgst;_=k,l=Error(a(419)),l.stack="",l.digest=_,rl({value:l,source:null,stack:null}),r=dd(e,r,s)}else if(Ve||pl(e,r,s,!1),_=(s&e.childLanes)!==0,Ve||_){if(_=Jt,_!==null){if(l=s&-s,l&42)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=l&(_.suspendedLanes|s)?0:l,l!==0&&l!==C.retryLane)throw C.retryLane=l,Ir(e,l),on(_,e,l),lv}T.data==="$?"||jd(),r=dd(e,r,s)}else T.data==="$?"?(r.flags|=128,r.child=e.child,r=sS.bind(null,e),T._reactRetry=r,r=null):(e=C.treeContext,je=qn(T.nextSibling),sn=r,qt=!0,Hn=null,si=!1,e!==null&&(On[Dn++]=Vi,On[Dn++]=Li,On[Dn++]=xa,Vi=e.id,Li=e.overflow,xa=r),r=fd(r,l.children),r.flags|=4096);return r}return f?(Dr(),f=l.fallback,T=r.mode,C=e.child,k=C.sibling,l=Br(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&31457280,k!==null?f=Br(k,f):(f=qa(f,T,s,null),f.flags|=2),f.return=r,l.return=r,l.sibling=f,r.child=l,l=f,f=r.child,T=e.child.memoizedState,T===null?T=ud(s):(C=T.cachePool,C!==null?(k=Ie._currentValue,C=C.parent!==k?{parent:k,pool:k}:C):C=vy(),T={baseLanes:T.baseLanes|s,cachePool:C}),f.memoizedState=T,f.childLanes=cd(e,_,s),r.memoizedState=ld,l):(Or(r),s=e.child,e=s.sibling,s=Br(s,{mode:"visible",children:l.children}),s.return=r,s.sibling=null,e!==null&&(_=r.deletions,_===null?(r.deletions=[e],r.flags|=16):_.push(e)),r.child=s,r.memoizedState=null,s)}function fd(e,r){return r=hd({mode:"visible",children:r},e.mode),r.return=e,e.child=r}function hd(e,r){return Fv(e,r,0,null)}function dd(e,r,s){return ka(r,e.child,null,s),e=fd(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function vv(e,r,s){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r),yd(e.return,r,s)}function md(e,r,s,l,f){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=s,d.tailMode=f)}function _v(e,r,s){var l=r.pendingProps,f=l.revealOrder,d=l.tail;if(He(e,r,l.children,s),l=Ce.current,l&2)l=l&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vv(e,s,r);else if(e.tag===19)vv(e,s,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break t;for(;e.sibling===null;){if(e.return===null||e.return===r)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch($t(Ce,l),f){case"forwards":for(s=r.child,f=null;s!==null;)e=s.alternate,e!==null&&oc(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=r.child,r.child=null):(f=s.sibling,s.sibling=null),md(r,!1,f,s,d);break;case"backwards":for(s=null,f=r.child,r.child=null;f!==null;){if(e=f.alternate,e!==null&&oc(e)===null){r.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}md(r,!0,s,null,d);break;case"together":md(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Bi(e,r,s){if(e!==null&&(r.dependencies=e.dependencies),jr|=r.lanes,!(s&r.childLanes))if(e!==null){if(pl(e,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(e!==null&&r.child!==e.child)throw Error(a(153));if(r.child!==null){for(e=r.child,s=Br(e,e.pendingProps),r.child=s,s.return=r;e.sibling!==null;)e=e.sibling,s=s.sibling=Br(e,e.pendingProps),s.return=r;s.sibling=null}return r.child}function pd(e,r){return e.lanes&r?!0:(e=e.dependencies,!!(e!==null&&_c(e)))}function K1(e,r,s){switch(r.tag){case 3:hr(r,r.stateNode.containerInfo),Mr(r,Ie,e.memoizedState.cache),il();break;case 27:case 5:Mo(r);break;case 4:hr(r,r.stateNode.containerInfo);break;case 10:Mr(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Or(r),r.flags|=128,null):s&r.child.childLanes?yv(e,r,s):(Or(r),e=Bi(e,r,s),e!==null?e.sibling:null);Or(r);break;case 19:var f=(e.flags&128)!==0;if(l=(s&r.childLanes)!==0,l||(pl(e,r,s,!1),l=(s&r.childLanes)!==0),f){if(l)return _v(e,r,s);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),$t(Ce,Ce.current),l)break;return null;case 22:case 23:return r.lanes=0,hv(e,r,s);case 24:Mr(r,Ie,e.memoizedState.cache)}return Bi(e,r,s)}function Ev(e,r,s){if(e!==null)if(e.memoizedProps!==r.pendingProps)Ve=!0;else{if(!pd(e,s)&&!(r.flags&128))return Ve=!1,K1(e,r,s);Ve=!!(e.flags&131072)}else Ve=!1,qt&&r.flags&1048576&&ry(r,nc,r.index);switch(r.lanes=0,r.tag){case 16:t:{e=r.pendingProps;var l=r.elementType,f=l._init;if(l=f(l._payload),r.type=l,typeof l=="function")Od(l)?(e=Ba(l,e),r.tag=1,r=pv(null,r,l,e,s)):(r.tag=0,r=od(null,r,l,e,s));else{if(l!=null){if(f=l.$$typeof,f===V){r.tag=11,r=uv(null,r,l,e,s);break t}else if(f===q){r.tag=14,r=cv(null,r,l,e,s);break t}}throw r=R(l)||l,Error(a(306,r,""))}}return r;case 0:return od(e,r,r.type,r.pendingProps,s);case 1:return l=r.type,f=Ba(l,r.pendingProps),pv(e,r,l,f,s);case 3:t:{if(hr(r,r.stateNode.containerInfo),e===null)throw Error(a(387));var d=r.pendingProps;f=r.memoizedState,l=f.element,Ed(e,r),vl(r,d,null,s);var _=r.memoizedState;if(d=_.cache,Mr(r,Ie,d),d!==f.cache&&vd(r,[Ie],s,!0),yl(),d=_.element,f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:_.cache},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){r=gv(e,r,d,s);break t}else if(d!==l){l=In(Error(a(424)),r),rl(l),r=gv(e,r,d,s);break t}else for(je=qn(r.stateNode.containerInfo.firstChild),sn=r,qt=!0,Hn=null,si=!0,s=dy(r,null,d,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(il(),d===l){r=Bi(e,r,s);break t}He(e,r,d,s)}r=r.child}return r;case 26:return ml(e,r),e===null?(s=A_(r.type,null,r.pendingProps,null))?r.memoizedState=s:qt||(s=r.type,e=r.pendingProps,l=kc(En.current).createElement(s),l[Me]=r,l[Se]=e,Fe(l,s,e),ie(l),r.stateNode=l):r.memoizedState=A_(r.type,e.memoizedProps,r.pendingProps,e.memoizedState),null;case 27:return Mo(r),e===null&&qt&&(l=r.stateNode=E_(r.type,r.pendingProps,En.current),sn=r,si=!0,je=qn(l.firstChild)),l=r.pendingProps.children,e!==null||qt?He(e,r,l,s):r.child=ka(r,null,l,s),ml(e,r),r.child;case 5:return e===null&&qt&&((f=l=je)&&(l=bS(l,r.type,r.pendingProps,si),l!==null?(r.stateNode=l,sn=r,je=qn(l.firstChild),si=!1,f=!0):f=!1),f||Pa(r)),Mo(r),f=r.type,d=r.pendingProps,_=e!==null?e.memoizedProps:null,l=d.children,em(f,d)?l=null:_!==null&&em(f,_)&&(r.flags|=32),r.memoizedState!==null&&(f=Fh(e,r,z1,null,null,s),Ml._currentValue=f),ml(e,r),He(e,r,l,s),r.child;case 6:return e===null&&qt&&((e=s=je)&&(s=AS(s,r.pendingProps,si),s!==null?(r.stateNode=s,sn=r,je=null,e=!0):e=!1),e||Pa(r)),null;case 13:return yv(e,r,s);case 4:return hr(r,r.stateNode.containerInfo),l=r.pendingProps,e===null?r.child=ka(r,null,l,s):He(e,r,l,s),r.child;case 11:return uv(e,r,r.type,r.pendingProps,s);case 7:return He(e,r,r.pendingProps,s),r.child;case 8:return He(e,r,r.pendingProps.children,s),r.child;case 12:return He(e,r,r.pendingProps.children,s),r.child;case 10:return l=r.pendingProps,Mr(r,r.type,l.value),He(e,r,l.children,s),r.child;case 9:return f=r.type._context,l=r.pendingProps.children,Ha(r),f=Qe(f),l=l(f),r.flags|=1,He(e,r,l,s),r.child;case 14:return cv(e,r,r.type,r.pendingProps,s);case 15:return fv(e,r,r.type,r.pendingProps,s);case 19:return _v(e,r,s);case 22:return hv(e,r,s);case 24:return Ha(r),l=Qe(Ie),e===null?(f=jh(),f===null&&(f=Jt,d=zh(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),r.memoizedState={parent:l,cache:f},_d(r),Mr(r,Ie,f)):(e.lanes&s&&(Ed(e,r),vl(r,null,null,s),yl()),f=e.memoizedState,d=r.memoizedState,f.parent!==l?(f={parent:l,cache:l},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Mr(r,Ie,l)):(l=d.cache,Mr(r,Ie,l),l!==f.cache&&vd(r,[Ie],s,!0))),He(e,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}var gd=Ht(null),ja=null,ji=null;function Mr(e,r,s){$t(gd,r._currentValue),r._currentValue=s}function Hi(e){e._currentValue=gd.current,le(gd)}function yd(e,r,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),e===s)break;e=e.return}}function vd(e,r,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var d=f.dependencies;if(d!==null){var _=f.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=f;for(var C=0;C<r.length;C++)if(T.context===r[C]){d.lanes|=s,T=d.alternate,T!==null&&(T.lanes|=s),yd(d.return,s,e),l||(_=null);break t}d=T.next}}else if(f.tag===18){if(_=f.return,_===null)throw Error(a(341));_.lanes|=s,d=_.alternate,d!==null&&(d.lanes|=s),yd(_,s,e),_=null}else _=f.child;if(_!==null)_.return=f;else for(_=f;_!==null;){if(_===e){_=null;break}if(f=_.sibling,f!==null){f.return=_.return,_=f;break}_=_.return}f=_}}function pl(e,r,s,l){e=null;for(var f=r,d=!1;f!==null;){if(!d){if(f.flags&524288)d=!0;else if(f.flags&262144)break}if(f.tag===10){var _=f.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var T=f.type;mn(f.pendingProps.value,_.value)||(e!==null?e.push(T):e=[T])}}else if(f===fr.current){if(_=f.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Ml):e=[Ml])}f=f.return}e!==null&&vd(r,e,s,l),r.flags|=262144}function _c(e){for(e=e.firstContext;e!==null;){if(!mn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){ja=e,ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qe(e){return Tv(ja,e)}function Ec(e,r){return ja===null&&Ha(e),Tv(e,r)}function Tv(e,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},ji===null){if(e===null)throw Error(a(308));ji=r,e.dependencies={lanes:0,firstContext:r},e.flags|=524288}else ji=ji.next=r;return s}var Pr=!1;function _d(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ed(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function kr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vr(e,r,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,ae&2){var f=l.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),l.pending=r,r=tc(e),ny(e,null,s),r}return Ju(e,l,r,s),tc(e)}function gl(e,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194176)!==0)){var l=r.lanes;l&=e.pendingLanes,s|=l,r.lanes=s,vr(e,s)}}function Td(e,r){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var _={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=_:d=d.next=_,s=s.next}while(s!==null);d===null?f=d=r:d=d.next=r}else f=d=r;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=r:e.next=r,s.lastBaseUpdate=r}var bd=!1;function yl(){if(bd){var e=Ls;if(e!==null)throw e}}function vl(e,r,s,l){bd=!1;var f=e.updateQueue;Pr=!1;var d=f.firstBaseUpdate,_=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var C=T,k=C.next;C.next=null,_===null?d=k:_.next=k,_=C;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,T=Y.lastBaseUpdate,T!==_&&(T===null?Y.firstBaseUpdate=k:T.next=k,Y.lastBaseUpdate=C))}if(d!==null){var J=f.baseState;_=0,Y=k=C=null,T=d;do{var H=T.lane&-536870913,G=H!==T.lane;if(G?(Bt&H)===H:(l&H)===H){H!==0&&H===Vs&&(bd=!0),Y!==null&&(Y=Y.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ft=e,wt=T;H=r;var he=s;switch(wt.tag){case 1:if(ft=wt.payload,typeof ft=="function"){J=ft.call(he,J,H);break t}J=ft;break t;case 3:ft.flags=ft.flags&-65537|128;case 0:if(ft=wt.payload,H=typeof ft=="function"?ft.call(he,J,H):ft,H==null)break t;J=I({},J,H);break t;case 2:Pr=!0}}H=T.callback,H!==null&&(e.flags|=64,G&&(e.flags|=8192),G=f.callbacks,G===null?f.callbacks=[H]:G.push(H))}else G={lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Y===null?(k=Y=G,C=J):Y=Y.next=G,_|=H;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;G=T,T=G.next,G.next=null,f.lastBaseUpdate=G,f.shared.pending=null}}while(!0);Y===null&&(C=J),f.baseState=C,f.firstBaseUpdate=k,f.lastBaseUpdate=Y,d===null&&(f.shared.lanes=0),jr|=_,e.lanes=_,e.memoizedState=J}}function bv(e,r){if(typeof e!="function")throw Error(a(191,e));e.call(r)}function Av(e,r){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)bv(s[e],r)}function _l(e,r){try{var s=r.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var d=s.create,_=s.inst;l=d(),_.destroy=l}s=s.next}while(s!==f)}}catch(T){Zt(r,r.return,T)}}function Lr(e,r,s){try{var l=r.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&e)===e){var _=l.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,f=r;var C=s;try{T()}catch(k){Zt(f,C,k)}}}l=l.next}while(l!==d)}}catch(k){Zt(r,r.return,k)}}function Sv(e){var r=e.updateQueue;if(r!==null){var s=e.stateNode;try{Av(r,s)}catch(l){Zt(e,e.return,l)}}}function wv(e,r,s){s.props=Ba(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Zt(e,r,l)}}function Fa(e,r){try{var s=e.ref;if(s!==null){var l=e.stateNode;switch(e.tag){case 26:case 27:case 5:var f=l;break;default:f=l}typeof s=="function"?e.refCleanup=s(f):s.current=f}}catch(d){Zt(e,r,d)}}function pn(e,r){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Zt(e,r,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Zt(e,r,f)}else s.current=null}function Rv(e){var r=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Zt(e,e.return,f)}}function Cv(e,r,s){try{var l=e.stateNode;yS(l,e.type,s,r),l[Se]=r}catch(f){Zt(e,e.return,f)}}function Iv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Ad(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Iv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sd(e,r,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?s.nodeType===8?s.parentNode.insertBefore(e,r):s.insertBefore(e,r):(s.nodeType===8?(r=s.parentNode,r.insertBefore(e,s)):(r=s,r.appendChild(e)),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=Pc));else if(l!==4&&l!==27&&(e=e.child,e!==null))for(Sd(e,r,s),e=e.sibling;e!==null;)Sd(e,r,s),e=e.sibling}function Tc(e,r,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,r?s.insertBefore(e,r):s.appendChild(e);else if(l!==4&&l!==27&&(e=e.child,e!==null))for(Tc(e,r,s),e=e.sibling;e!==null;)Tc(e,r,s),e=e.sibling}var Fi=!1,ce=!1,wd=!1,Ov=typeof WeakSet=="function"?WeakSet:Set,Le=null,Dv=!1;function Y1(e,r){if(e=e.containerInfo,Jd=jc,e=Yg(e),Ch(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var _=0,T=-1,C=-1,k=0,Y=0,J=e,H=null;e:for(;;){for(var G;J!==s||f!==0&&J.nodeType!==3||(T=_+f),J!==d||l!==0&&J.nodeType!==3||(C=_+l),J.nodeType===3&&(_+=J.nodeValue.length),(G=J.firstChild)!==null;)H=J,J=G;for(;;){if(J===e)break e;if(H===s&&++k===f&&(T=_),H===d&&++Y===l&&(C=_),(G=J.nextSibling)!==null)break;J=H,H=J.parentNode}J=G}s=T===-1||C===-1?null:{start:T,end:C}}else s=null}s=s||{start:0,end:0}}else s=null;for(tm={focusedElem:e,selectionRange:s},jc=!1,Le=r;Le!==null;)if(r=Le,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,Le=e;else for(;Le!==null;){switch(r=Le,d=r.alternate,e=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&d!==null){e=void 0,s=r,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var ft=Ba(s.type,f,s.elementType===s.type);e=l.getSnapshotBeforeUpdate(ft,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(wt){Zt(s,s.return,wt)}}break;case 3:if(e&1024){if(e=r.stateNode.containerInfo,s=e.nodeType,s===9)rm(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rm(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(a(163))}if(e=r.sibling,e!==null){e.return=r.return,Le=e;break}Le=r.return}return ft=Dv,Dv=!1,ft}function Nv(e,r,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Gi(e,s),l&4&&_l(5,s);break;case 1:if(Gi(e,s),l&4)if(e=s.stateNode,r===null)try{e.componentDidMount()}catch(T){Zt(s,s.return,T)}else{var f=Ba(s.type,r.memoizedProps);r=r.memoizedState;try{e.componentDidUpdate(f,r,e.__reactInternalSnapshotBeforeUpdate)}catch(T){Zt(s,s.return,T)}}l&64&&Sv(s),l&512&&Fa(s,s.return);break;case 3:if(Gi(e,s),l&64&&(l=s.updateQueue,l!==null)){if(e=null,s.child!==null)switch(s.child.tag){case 27:case 5:e=s.child.stateNode;break;case 1:e=s.child.stateNode}try{Av(l,e)}catch(T){Zt(s,s.return,T)}}break;case 26:Gi(e,s),l&512&&Fa(s,s.return);break;case 27:case 5:Gi(e,s),r===null&&l&4&&Rv(s),l&512&&Fa(s,s.return);break;case 12:Gi(e,s);break;case 13:Gi(e,s),l&4&&Pv(e,s);break;case 22:if(f=s.memoizedState!==null||Fi,!f){r=r!==null&&r.memoizedState!==null||ce;var d=Fi,_=ce;Fi=f,(ce=r)&&!_?Ur(e,s,(s.subtreeFlags&8772)!==0):Gi(e,s),Fi=d,ce=_}l&512&&(s.memoizedProps.mode==="manual"?Fa(s,s.return):pn(s,s.return));break;default:Gi(e,s)}}function xv(e){var r=e.alternate;r!==null&&(e.alternate=null,xv(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&_a(r)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ee=null,gn=!1;function qi(e,r,s){for(s=s.child;s!==null;)Mv(e,r,s),s=s.sibling}function Mv(e,r,s){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(dr,s)}catch{}switch(s.tag){case 26:ce||pn(s,r),qi(e,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:ce||pn(s,r);var l=Ee,f=gn;for(Ee=s.stateNode,qi(e,r,s),s=s.stateNode,r=s.attributes;r.length;)s.removeAttributeNode(r[0]);_a(s),Ee=l,gn=f;break;case 5:ce||pn(s,r);case 6:f=Ee;var d=gn;if(Ee=null,qi(e,r,s),Ee=f,gn=d,Ee!==null)if(gn)try{e=Ee,l=s.stateNode,e.nodeType===8?e.parentNode.removeChild(l):e.removeChild(l)}catch(_){Zt(s,r,_)}else try{Ee.removeChild(s.stateNode)}catch(_){Zt(s,r,_)}break;case 18:Ee!==null&&(gn?(r=Ee,s=s.stateNode,r.nodeType===8?im(r.parentNode,s):r.nodeType===1&&im(r,s),Ll(r)):im(Ee,s.stateNode));break;case 4:l=Ee,f=gn,Ee=s.stateNode.containerInfo,gn=!0,qi(e,r,s),Ee=l,gn=f;break;case 0:case 11:case 14:case 15:ce||Lr(2,s,r),ce||Lr(4,s,r),qi(e,r,s);break;case 1:ce||(pn(s,r),l=s.stateNode,typeof l.componentWillUnmount=="function"&&wv(s,r,l)),qi(e,r,s);break;case 21:qi(e,r,s);break;case 22:ce||pn(s,r),ce=(l=ce)||s.memoizedState!==null,qi(e,r,s),ce=l;break;default:qi(e,r,s)}}function Pv(e,r){if(r.memoizedState===null&&(e=r.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ll(e)}catch(s){Zt(r,r.return,s)}}function Q1(e){switch(e.tag){case 13:case 19:var r=e.stateNode;return r===null&&(r=e.stateNode=new Ov),r;case 22:return e=e.stateNode,r=e._retryCache,r===null&&(r=e._retryCache=new Ov),r;default:throw Error(a(435,e.tag))}}function Rd(e,r){var s=Q1(e);r.forEach(function(l){var f=oS.bind(null,e,l);s.has(l)||(s.add(l),l.then(f,f))})}function xn(e,r){var s=r.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=e,_=r,T=_;t:for(;T!==null;){switch(T.tag){case 27:case 5:Ee=T.stateNode,gn=!1;break t;case 3:Ee=T.stateNode.containerInfo,gn=!0;break t;case 4:Ee=T.stateNode.containerInfo,gn=!0;break t}T=T.return}if(Ee===null)throw Error(a(160));Mv(d,_,f),Ee=null,gn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)kv(r,e),r=r.sibling}var Fn=null;function kv(e,r){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xn(r,e),Mn(e),l&4&&(Lr(3,e,e.return),_l(3,e),Lr(5,e,e.return));break;case 1:xn(r,e),Mn(e),l&512&&(ce||s===null||pn(s,s.return)),l&64&&Fi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Fn;if(xn(r,e),Mn(e),l&512&&(ce||s===null||pn(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Er]||d[Me]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Fe(d,l,s),d[Me]=e,ie(d),l=d;break t;case"link":var _=R_("link","href",f).get(l+(s.href||""));if(_){for(var T=0;T<_.length;T++)if(d=_[T],d.getAttribute("href")===(s.href==null?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){_.splice(T,1);break e}}d=f.createElement(l),Fe(d,l,s),f.head.appendChild(d);break;case"meta":if(_=R_("meta","content",f).get(l+(s.content||""))){for(T=0;T<_.length;T++)if(d=_[T],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){_.splice(T,1);break e}}d=f.createElement(l),Fe(d,l,s),f.head.appendChild(d);break;default:throw Error(a(468,l))}d[Me]=e,ie(d),l=d}e.stateNode=l}else C_(f,e.type,e.stateNode);else e.stateNode=w_(f,l,e.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?C_(f,e.type,e.stateNode):w_(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Cv(e,e.memoizedProps,s.memoizedProps)}break;case 27:if(l&4&&e.alternate===null){f=e.stateNode,d=e.memoizedProps;try{for(var C=f.firstChild;C;){var k=C.nextSibling,Y=C.nodeName;C[Er]||Y==="HEAD"||Y==="BODY"||Y==="SCRIPT"||Y==="STYLE"||Y==="LINK"&&C.rel.toLowerCase()==="stylesheet"||f.removeChild(C),C=k}for(var J=e.type,H=f.attributes;H.length;)f.removeAttributeNode(H[0]);Fe(f,J,d),f[Me]=e,f[Se]=d}catch(ft){Zt(e,e.return,ft)}}case 5:if(xn(r,e),Mn(e),l&512&&(ce||s===null||pn(s,s.return)),e.flags&32){f=e.stateNode;try{An(f,"")}catch(ft){Zt(e,e.return,ft)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Cv(e,f,s!==null?s.memoizedProps:f)),l&1024&&(wd=!0);break;case 6:if(xn(r,e),Mn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(ft){Zt(e,e.return,ft)}}break;case 3:if(Uc=null,f=Fn,Fn=Vc(r.containerInfo),xn(r,e),Fn=f,Mn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Ll(r.containerInfo)}catch(ft){Zt(e,e.return,ft)}wd&&(wd=!1,Vv(e));break;case 4:l=Fn,Fn=Vc(e.stateNode.containerInfo),xn(r,e),Mn(e),Fn=l;break;case 12:xn(r,e),Mn(e);break;case 13:xn(r,e),Mn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(kd=ln()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Rd(e,l)));break;case 22:if(l&512&&(ce||s===null||pn(s,s.return)),C=e.memoizedState!==null,k=s!==null&&s.memoizedState!==null,Y=Fi,J=ce,Fi=Y||C,ce=J||k,xn(r,e),ce=J,Fi=Y,Mn(e),r=e.stateNode,r._current=e,r._visibility&=-3,r._visibility|=r._pendingVisibility&2,l&8192&&(r._visibility=C?r._visibility&-2:r._visibility|1,C&&(r=Fi||ce,s===null||k||r||js(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(s=null,r=e;;){if(r.tag===5||r.tag===26||r.tag===27){if(s===null){k=s=r;try{if(f=k.stateNode,C)d=f.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{_=k.stateNode,T=k.memoizedProps.style;var G=T!=null&&T.hasOwnProperty("display")?T.display:null;_.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(ft){Zt(k,k.return,ft)}}}else if(r.tag===6){if(s===null){k=r;try{k.stateNode.nodeValue=C?"":k.memoizedProps}catch(ft){Zt(k,k.return,ft)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===e)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break t;for(;r.sibling===null;){if(r.return===null||r.return===e)break t;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Rd(e,s))));break;case 19:xn(r,e),Mn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Rd(e,l)));break;case 21:break;default:xn(r,e),Mn(e)}}function Mn(e){var r=e.flags;if(r&2){try{if(e.tag!==27){t:{for(var s=e.return;s!==null;){if(Iv(s)){var l=s;break t}s=s.return}throw Error(a(160))}switch(l.tag){case 27:var f=l.stateNode,d=Ad(e);Tc(e,d,f);break;case 5:var _=l.stateNode;l.flags&32&&(An(_,""),l.flags&=-33);var T=Ad(e);Tc(e,T,_);break;case 3:case 4:var C=l.stateNode.containerInfo,k=Ad(e);Sd(e,k,C);break;default:throw Error(a(161))}}}catch(Y){Zt(e,e.return,Y)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function Vv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var r=e;Vv(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),e=e.sibling}}function Gi(e,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Nv(e,r.alternate,r),r=r.sibling}function js(e){for(e=e.child;e!==null;){var r=e;switch(r.tag){case 0:case 11:case 14:case 15:Lr(4,r,r.return),js(r);break;case 1:pn(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&wv(r,r.return,s),js(r);break;case 26:case 27:case 5:pn(r,r.return),js(r);break;case 22:pn(r,r.return),r.memoizedState===null&&js(r);break;default:js(r)}e=e.sibling}}function Ur(e,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,f=e,d=r,_=d.flags;switch(d.tag){case 0:case 11:case 15:Ur(f,d,s),_l(4,d);break;case 1:if(Ur(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(k){Zt(l,l.return,k)}if(l=d,f=l.updateQueue,f!==null){var T=l.stateNode;try{var C=f.shared.hiddenCallbacks;if(C!==null)for(f.shared.hiddenCallbacks=null,f=0;f<C.length;f++)bv(C[f],T)}catch(k){Zt(l,l.return,k)}}s&&_&64&&Sv(d),Fa(d,d.return);break;case 26:case 27:case 5:Ur(f,d,s),s&&l===null&&_&4&&Rv(d),Fa(d,d.return);break;case 12:Ur(f,d,s);break;case 13:Ur(f,d,s),s&&_&4&&Pv(f,d);break;case 22:d.memoizedState===null&&Ur(f,d,s),Fa(d,d.return);break;default:Ur(f,d,s)}r=r.sibling}}function Cd(e,r){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(e=r.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&ul(s))}function Id(e,r){e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&ul(e))}function zr(e,r,s,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Lv(e,r,s,l),r=r.sibling}function Lv(e,r,s,l){var f=r.flags;switch(r.tag){case 0:case 11:case 15:zr(e,r,s,l),f&2048&&_l(9,r);break;case 3:zr(e,r,s,l),f&2048&&(e=null,r.alternate!==null&&(e=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==e&&(r.refCount++,e!=null&&ul(e)));break;case 12:if(f&2048){zr(e,r,s,l),e=r.stateNode;try{var d=r.memoizedProps,_=d.id,T=d.onPostCommit;typeof T=="function"&&T(_,r.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){Zt(r,r.return,C)}}else zr(e,r,s,l);break;case 23:break;case 22:d=r.stateNode,r.memoizedState!==null?d._visibility&4?zr(e,r,s,l):El(e,r):d._visibility&4?zr(e,r,s,l):(d._visibility|=4,Hs(e,r,s,l,(r.subtreeFlags&10256)!==0)),f&2048&&Cd(r.alternate,r);break;case 24:zr(e,r,s,l),f&2048&&Id(r.alternate,r);break;default:zr(e,r,s,l)}}function Hs(e,r,s,l,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var d=e,_=r,T=s,C=l,k=_.flags;switch(_.tag){case 0:case 11:case 15:Hs(d,_,T,C,f),_l(8,_);break;case 23:break;case 22:var Y=_.stateNode;_.memoizedState!==null?Y._visibility&4?Hs(d,_,T,C,f):El(d,_):(Y._visibility|=4,Hs(d,_,T,C,f)),f&&k&2048&&Cd(_.alternate,_);break;case 24:Hs(d,_,T,C,f),f&&k&2048&&Id(_.alternate,_);break;default:Hs(d,_,T,C,f)}r=r.sibling}}function El(e,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=e,l=r,f=l.flags;switch(l.tag){case 22:El(s,l),f&2048&&Cd(l.alternate,l);break;case 24:El(s,l),f&2048&&Id(l.alternate,l);break;default:El(s,l)}r=r.sibling}}var Tl=8192;function Fs(e){if(e.subtreeFlags&Tl)for(e=e.child;e!==null;)Uv(e),e=e.sibling}function Uv(e){switch(e.tag){case 26:Fs(e),e.flags&Tl&&e.memoizedState!==null&&VS(Fn,e.memoizedState,e.memoizedProps);break;case 5:Fs(e);break;case 3:case 4:var r=Fn;Fn=Vc(e.stateNode.containerInfo),Fs(e),Fn=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Tl,Tl=16777216,Fs(e),Tl=r):Fs(e));break;default:Fs(e)}}function zv(e){var r=e.alternate;if(r!==null&&(e=r.child,e!==null)){r.child=null;do r=e.sibling,e.sibling=null,e=r;while(e!==null)}}function bl(e){var r=e.deletions;if(e.flags&16){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];Le=l,jv(l,e)}zv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bv(e),e=e.sibling}function Bv(e){switch(e.tag){case 0:case 11:case 15:bl(e),e.flags&2048&&Lr(9,e,e.return);break;case 3:bl(e);break;case 12:bl(e);break;case 22:var r=e.stateNode;e.memoizedState!==null&&r._visibility&4&&(e.return===null||e.return.tag!==13)?(r._visibility&=-5,bc(e)):bl(e);break;default:bl(e)}}function bc(e){var r=e.deletions;if(e.flags&16){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];Le=l,jv(l,e)}zv(e)}for(e=e.child;e!==null;){switch(r=e,r.tag){case 0:case 11:case 15:Lr(8,r,r.return),bc(r);break;case 22:s=r.stateNode,s._visibility&4&&(s._visibility&=-5,bc(r));break;default:bc(r)}e=e.sibling}}function jv(e,r){for(;Le!==null;){var s=Le;switch(s.tag){case 0:case 11:case 15:Lr(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ul(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Le=l;else t:for(s=e;Le!==null;){l=Le;var f=l.sibling,d=l.return;if(xv(l),l===s){Le=null;break t}if(f!==null){f.return=d,Le=f;break t}Le=d}}}function $1(e,r,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(e,r,s,l){return new $1(e,r,s,l)}function Od(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Br(e,r){var s=e.alternate;return s===null?(s=Pn(e.tag,r,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=r,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&31457280,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,r=e.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Hv(e,r){e.flags&=31457282;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=r,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,r=s.dependencies,e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),e}function Ac(e,r,s,l,f,d){var _=0;if(l=e,typeof e=="function")Od(e)&&(_=1);else if(typeof e=="string")_=PS(e,s,en.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return qa(s.children,f,d,r);case y:_=8,f|=24;break;case E:return e=Pn(12,s,r,f|2),e.elementType=E,e.lanes=d,e;case K:return e=Pn(13,s,r,f),e.elementType=K,e.lanes=d,e;case z:return e=Pn(19,s,r,f),e.elementType=z,e.lanes=d,e;case W:return Fv(s,f,d,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:case D:_=10;break t;case w:_=9;break t;case V:_=11;break t;case q:_=14;break t;case Z:_=16,l=null;break t}_=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return r=Pn(_,s,r,f),r.elementType=e,r.type=l,r.lanes=d,r}function qa(e,r,s,l){return e=Pn(7,e,l,r),e.lanes=s,e}function Fv(e,r,s,l){e=Pn(22,e,l,r),e.elementType=W,e.lanes=s;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=f._current;if(d===null)throw Error(a(456));if(!(f._pendingVisibility&2)){var _=Ir(d,2);_!==null&&(f._pendingVisibility|=2,on(_,d,2))}},attach:function(){var d=f._current;if(d===null)throw Error(a(456));if(f._pendingVisibility&2){var _=Ir(d,2);_!==null&&(f._pendingVisibility&=-3,on(_,d,2))}}};return e.stateNode=f,e}function Dd(e,r,s){return e=Pn(6,e,null,r),e.lanes=s,e}function Nd(e,r,s){return r=Pn(4,e.children!==null?e.children:[],e.key,r),r.lanes=s,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Ki(e){e.flags|=4}function qv(e,r){if(r.type!=="stylesheet"||r.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!I_(r)){if(r=Nn.current,r!==null&&((Bt&4194176)===Bt?oi!==null:(Bt&62914560)!==Bt&&!(Bt&536870912)||r!==oi))throw sl=Vh,oy;e.flags|=8192}}function Sc(e,r){r!==null&&(e.flags|=4),e.flags&16384&&(r=e.tag!==22?gr():536870912,e.lanes|=r,Gs|=r)}function Al(e,r){if(!qt)switch(e.tailMode){case"hidden":r=e.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function re(e){var r=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(r)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&31457280,l|=f.flags&31457280,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,r}function X1(e,r,s){var l=r.pendingProps;switch(Ph(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(r),null;case 1:return re(r),null;case 3:return s=r.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Hi(Ie),wi(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(nl(r)?Ki(r):e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Hn!==null&&(zd(Hn),Hn=null))),re(r),null;case 26:return s=r.memoizedState,e===null?(Ki(r),s!==null?(re(r),qv(r,s)):(re(r),r.flags&=-16777217)):s?s!==e.memoizedState?(Ki(r),re(r),qv(r,s)):(re(r),r.flags&=-16777217):(e.memoizedProps!==l&&Ki(r),re(r),r.flags&=-16777217),null;case 27:cs(r),s=En.current;var f=r.type;if(e!==null&&r.stateNode!=null)e.memoizedProps!==l&&Ki(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return re(r),null}e=en.current,nl(r)?ay(r):(e=E_(f,l,s),r.stateNode=e,Ki(r))}return re(r),null;case 5:if(cs(r),s=r.type,e!==null&&r.stateNode!=null)e.memoizedProps!==l&&Ki(r);else{if(!l){if(r.stateNode===null)throw Error(a(166));return re(r),null}if(e=en.current,nl(r))ay(r);else{switch(f=kc(En.current),e){case 1:e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":e=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":e=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}e[Me]=r,e[Se]=l;t:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)e.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break t;for(;f.sibling===null;){if(f.return===null||f.return===r)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=e;t:switch(Fe(e,s,l),s){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ki(r)}}return re(r),r.flags&=-16777217,null;case 6:if(e&&r.stateNode!=null)e.memoizedProps!==l&&Ki(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(a(166));if(e=En.current,nl(r)){if(e=r.stateNode,s=r.memoizedProps,l=null,f=sn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[Me]=r,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||m_(e.nodeValue,s)),e||Pa(r)}else e=kc(e).createTextNode(l),e[Me]=r,r.stateNode=e}return re(r),null;case 13:if(l=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=nl(r),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Me]=r}else il(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;re(r),f=!1}else Hn!==null&&(zd(Hn),Hn=null),f=!0;if(!f)return r.flags&256?(Ui(r),r):(Ui(r),null)}if(Ui(r),r.flags&128)return r.lanes=s,r;if(s=l!==null,e=e!==null&&e.memoizedState!==null,s){l=r.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)}return s!==e&&s&&(r.child.flags|=8192),Sc(r,r.updateQueue),re(r),null;case 4:return wi(),e===null&&Xd(r.stateNode.containerInfo),re(r),null;case 10:return Hi(r.type),re(r),null;case 19:if(le(Ce),f=r.memoizedState,f===null)return re(r),null;if(l=(r.flags&128)!==0,d=f.rendering,d===null)if(l)Al(f,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(d=oc(e),d!==null){for(r.flags|=128,Al(f,!1),e=d.updateQueue,r.updateQueue=e,Sc(r,e),r.subtreeFlags=0,e=s,s=r.child;s!==null;)Hv(s,e),s=s.sibling;return $t(Ce,Ce.current&1|2),r.child}e=e.sibling}f.tail!==null&&ln()>wc&&(r.flags|=128,l=!0,Al(f,!1),r.lanes=4194304)}else{if(!l)if(e=oc(d),e!==null){if(r.flags|=128,l=!0,e=e.updateQueue,r.updateQueue=e,Sc(r,e),Al(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!qt)return re(r),null}else 2*ln()-f.renderingStartTime>wc&&s!==536870912&&(r.flags|=128,l=!0,Al(f,!1),r.lanes=4194304);f.isBackwards?(d.sibling=r.child,r.child=d):(e=f.last,e!==null?e.sibling=d:r.child=d,f.last=d)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=ln(),r.sibling=null,e=Ce.current,$t(Ce,l?e&1|2:e&1),r):(re(r),null);case 22:case 23:return Ui(r),Uh(),l=r.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?s&536870912&&!(r.flags&128)&&(re(r),r.subtreeFlags&6&&(r.flags|=8192)):re(r),s=r.updateQueue,s!==null&&Sc(r,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==s&&(r.flags|=2048),e!==null&&le(Va),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Hi(Ie),re(r),null;case 25:return null}throw Error(a(156,r.tag))}function W1(e,r){switch(Ph(r),r.tag){case 1:return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Hi(Ie),wi(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 26:case 27:case 5:return cs(r),null;case 13:if(Ui(r),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(a(340));il()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return le(Ce),null;case 4:return wi(),null;case 10:return Hi(r.type),null;case 22:case 23:return Ui(r),Uh(),e!==null&&le(Va),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 24:return Hi(Ie),null;case 25:return null;default:return null}}function Gv(e,r){switch(Ph(r),r.tag){case 3:Hi(Ie),wi();break;case 26:case 27:case 5:cs(r);break;case 4:wi();break;case 13:Ui(r);break;case 19:le(Ce);break;case 10:Hi(r.type);break;case 22:case 23:Ui(r),Uh(),e!==null&&le(Va);break;case 24:Hi(Ie)}}var Z1={getCacheForType:function(e){var r=Qe(Ie),s=r.data.get(e);return s===void 0&&(s=e(),r.data.set(e,s)),s}},J1=typeof WeakMap=="function"?WeakMap:Map,ae=0,Jt=null,xt=null,Bt=0,te=0,yn=null,Yi=!1,qs=!1,xd=!1,Qi=0,fe=0,jr=0,Ga=0,Md=0,kn=0,Gs=0,Sl=null,ui=null,Pd=!1,kd=0,wc=1/0,Rc=null,Hr=null,Cc=!1,Ka=null,wl=0,Vd=0,Ld=null,Rl=0,Ud=null;function vn(){if(ae&2&&Bt!==0)return Bt&-Bt;if(S.T!==null){var e=Vs;return e!==0?e:Kd()}return Mu()}function Kv(){kn===0&&(kn=!(Bt&536870912)||qt?Uo():536870912);var e=Nn.current;return e!==null&&(e.flags|=32),kn}function on(e,r,s){(e===Jt&&te===2||e.cancelPendingCommit!==null)&&(Ks(e,0),$i(e,Bt,kn,!1)),de(e,s),(!(ae&2)||e!==Jt)&&(e===Jt&&(!(ae&2)&&(Ga|=s),fe===4&&$i(e,Bt,kn,!1)),ci(e))}function Yv(e,r,s){if(ae&6)throw Error(a(327));var l=!s&&(r&60)===0&&(r&e.expiredLanes)===0||pr(e,r),f=l?nS(e,r):Hd(e,r,!0),d=l;do{if(f===0){qs&&!l&&$i(e,r,0,!1);break}else if(f===6)$i(e,r,0,!Yi);else{if(s=e.current.alternate,d&&!tS(s)){f=Hd(e,r,!1),d=!1;continue}if(f===2){if(d=r,e.errorRecoveryDisabledLanes&d)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){r=_;t:{var T=e;f=Sl;var C=T.current.memoizedState.isDehydrated;if(C&&(Ks(T,_).flags|=256),_=Hd(T,_,!1),_!==2){if(xd&&!C){T.errorRecoveryDisabledLanes|=d,Ga|=d,f=4;break t}d=ui,ui=f,d!==null&&zd(d)}f=_}if(d=!1,f!==2)continue}}if(f===1){Ks(e,0),$i(e,r,0,!0);break}t:{switch(l=e,f){case 0:case 1:throw Error(a(345));case 4:if((r&4194176)===r){$i(l,r,kn,!Yi);break t}break;case 2:ui=null;break;case 3:case 5:break;default:throw Error(a(329))}if(l.finishedWork=s,l.finishedLanes=r,(r&62914560)===r&&(d=kd+300-ln(),10<d)){if($i(l,r,kn,!Yi),Tn(l,0)!==0)break t;l.timeoutHandle=y_(Qv.bind(null,l,s,ui,Rc,Pd,r,kn,Ga,Gs,Yi,2,-0,0),d);break t}Qv(l,s,ui,Rc,Pd,r,kn,Ga,Gs,Yi,0,-0,0)}}break}while(!0);ci(e)}function zd(e){ui===null?ui=e:ui.push.apply(ui,e)}function Qv(e,r,s,l,f,d,_,T,C,k,Y,J,H){var G=r.subtreeFlags;if((G&8192||(G&16785408)===16785408)&&(xl={stylesheets:null,count:0,unsuspend:kS},Uv(r),r=LS(),r!==null)){e.cancelPendingCommit=r(e_.bind(null,e,s,l,f,_,T,C,1,J,H)),$i(e,d,_,!k);return}e_(e,s,l,f,_,T,C,Y,J,H)}function tS(e){for(var r=e;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!mn(d(),f))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function $i(e,r,s,l){r&=~Md,r&=~Ga,e.suspendedLanes|=r,e.pingedLanes&=~r,l&&(e.warmLanes|=r),l=e.expirationTimes;for(var f=r;0<f;){var d=31-nn(f),_=1<<d;l[d]=-1,f&=~_}s!==0&&yr(e,s,r)}function Ic(){return ae&6?!0:(Cl(0),!1)}function Bd(){if(xt!==null){if(te===0)var e=xt.return;else e=xt,ji=ja=null,Kh(e),Ps=null,ol=0,e=xt;for(;e!==null;)Gv(e.alternate,e),e=e.return;xt=null}}function Ks(e,r){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,_S(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Bd(),Jt=e,xt=s=Br(e.current,null),Bt=r,te=0,yn=null,Yi=!1,qs=pr(e,r),xd=!1,Gs=kn=Md=Ga=jr=fe=0,ui=Sl=null,Pd=!1,r&8&&(r|=r&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=r;0<l;){var f=31-nn(l),d=1<<f;r|=e[f],l&=~d}return Qi=r,Zu(),s}function $v(e,r){Dt=null,S.H=li,r===al?(r=cy(),te=3):r===oy?(r=cy(),te=4):te=r===lv?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,yn=r,xt===null&&(fe=1,vc(e,In(r,e.current)))}function Xv(){var e=S.H;return S.H=li,e===null?li:e}function Wv(){var e=S.A;return S.A=Z1,e}function jd(){fe=4,Yi||(Bt&4194176)!==Bt&&Nn.current!==null||(qs=!0),!(jr&134217727)&&!(Ga&134217727)||Jt===null||$i(Jt,Bt,kn,!1)}function Hd(e,r,s){var l=ae;ae|=2;var f=Xv(),d=Wv();(Jt!==e||Bt!==r)&&(Rc=null,Ks(e,r)),r=!1;var _=fe;t:do try{if(te!==0&&xt!==null){var T=xt,C=yn;switch(te){case 8:Bd(),_=6;break t;case 3:case 2:case 6:Nn.current===null&&(r=!0);var k=te;if(te=0,yn=null,Ys(e,T,C,k),s&&qs){_=0;break t}break;default:k=te,te=0,yn=null,Ys(e,T,C,k)}}eS(),_=fe;break}catch(Y){$v(e,Y)}while(!0);return r&&e.shellSuspendCounter++,ji=ja=null,ae=l,S.H=f,S.A=d,xt===null&&(Jt=null,Bt=0,Zu()),_}function eS(){for(;xt!==null;)Zv(xt)}function nS(e,r){var s=ae;ae|=2;var l=Xv(),f=Wv();Jt!==e||Bt!==r?(Rc=null,wc=ln()+500,Ks(e,r)):qs=pr(e,r);t:do try{if(te!==0&&xt!==null){r=xt;var d=yn;e:switch(te){case 1:te=0,yn=null,Ys(e,r,d,1);break;case 2:if(ly(d)){te=0,yn=null,Jv(r);break}r=function(){te===2&&Jt===e&&(te=7),ci(e)},d.then(r,r);break t;case 3:te=7;break t;case 4:te=5;break t;case 7:ly(d)?(te=0,yn=null,Jv(r)):(te=0,yn=null,Ys(e,r,d,7));break;case 5:var _=null;switch(xt.tag){case 26:_=xt.memoizedState;case 5:case 27:var T=xt;if(!_||I_(_)){te=0,yn=null;var C=T.sibling;if(C!==null)xt=C;else{var k=T.return;k!==null?(xt=k,Oc(k)):xt=null}break e}}te=0,yn=null,Ys(e,r,d,5);break;case 6:te=0,yn=null,Ys(e,r,d,6);break;case 8:Bd(),fe=6;break t;default:throw Error(a(462))}}iS();break}catch(Y){$v(e,Y)}while(!0);return ji=ja=null,S.H=l,S.A=f,ae=s,xt!==null?0:(Jt=null,Bt=0,Zu(),fe)}function iS(){for(;xt!==null&&!gh();)Zv(xt)}function Zv(e){var r=Ev(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,r===null?Oc(e):xt=r}function Jv(e){var r=e,s=r.alternate;switch(r.tag){case 15:case 0:r=mv(s,r,r.pendingProps,r.type,void 0,Bt);break;case 11:r=mv(s,r,r.pendingProps,r.type.render,r.ref,Bt);break;case 5:Kh(r);default:Gv(s,r),r=xt=Hv(r,Qi),r=Ev(s,r,Qi)}e.memoizedProps=e.pendingProps,r===null?Oc(e):xt=r}function Ys(e,r,s,l){ji=ja=null,Kh(r),Ps=null,ol=0;var f=r.return;try{if(G1(e,f,r,s,Bt)){fe=1,vc(e,In(s,e.current)),xt=null;return}}catch(d){if(f!==null)throw xt=f,d;fe=1,vc(e,In(s,e.current)),xt=null;return}r.flags&32768?(qt||l===1?e=!0:qs||Bt&536870912?e=!1:(Yi=e=!0,(l===2||l===3||l===6)&&(l=Nn.current,l!==null&&l.tag===13&&(l.flags|=16384))),t_(r,e)):Oc(r)}function Oc(e){var r=e;do{if(r.flags&32768){t_(r,Yi);return}e=r.return;var s=X1(r.alternate,r,Qi);if(s!==null){xt=s;return}if(r=r.sibling,r!==null){xt=r;return}xt=r=e}while(r!==null);fe===0&&(fe=5)}function t_(e,r){do{var s=W1(e.alternate,e);if(s!==null){s.flags&=32767,xt=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(e=e.sibling,e!==null)){xt=e;return}xt=e=s}while(e!==null);fe=6,xt=null}function e_(e,r,s,l,f,d,_,T,C,k){var Y=S.T,J=ot.p;try{ot.p=2,S.T=null,rS(e,r,s,l,J,f,d,_,T,C,k)}finally{S.T=Y,ot.p=J}}function rS(e,r,s,l,f,d,_,T){do Qs();while(Ka!==null);if(ae&6)throw Error(a(327));var C=e.finishedWork;if(l=e.finishedLanes,C===null)return null;if(e.finishedWork=null,e.finishedLanes=0,C===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var k=C.lanes|C.childLanes;if(k|=Nh,Nu(e,l,k,d,_,T),e===Jt&&(xt=Jt=null,Bt=0),!(C.subtreeFlags&10256)&&!(C.flags&10256)||Cc||(Cc=!0,Vd=k,Ld=s,lS(Ri,function(){return Qs(),null})),s=(C.flags&15990)!==0,C.subtreeFlags&15990||s?(s=S.T,S.T=null,d=ot.p,ot.p=2,_=ae,ae|=4,Y1(e,C),kv(C,e),I1(tm,e.containerInfo),jc=!!Jd,tm=Jd=null,e.current=C,Nv(e,C.alternate,C),Po(),ae=_,ot.p=d,S.T=s):e.current=C,Cc?(Cc=!1,Ka=e,wl=l):n_(e,k),k=e.pendingLanes,k===0&&(Hr=null),Vo(C.stateNode),ci(e),r!==null)for(f=e.onRecoverableError,C=0;C<r.length;C++)k=r[C],f(k.value,{componentStack:k.stack});return wl&3&&Qs(),k=e.pendingLanes,l&4194218&&k&42?e===Ud?Rl++:(Rl=0,Ud=e):Rl=0,Cl(0),null}function n_(e,r){(e.pooledCacheLanes&=r)===0&&(r=e.pooledCache,r!=null&&(e.pooledCache=null,ul(r)))}function Qs(){if(Ka!==null){var e=Ka,r=Vd;Vd=0;var s=xu(wl),l=S.T,f=ot.p;try{if(ot.p=32>s?32:s,S.T=null,Ka===null)var d=!1;else{s=Ld,Ld=null;var _=Ka,T=wl;if(Ka=null,wl=0,ae&6)throw Error(a(331));var C=ae;if(ae|=4,Bv(_.current),Lv(_,_.current,T,s),ae=C,Cl(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(dr,_)}catch{}d=!0}return d}finally{ot.p=f,S.T=l,n_(e,r)}}return!1}function i_(e,r,s){r=In(s,r),r=sd(e.stateNode,r,2),e=Vr(e,r,2),e!==null&&(de(e,2),ci(e))}function Zt(e,r,s){if(e.tag===3)i_(e,e,s);else for(;r!==null;){if(r.tag===3){i_(r,e,s);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Hr===null||!Hr.has(l))){e=In(s,e),s=sv(2),l=Vr(r,s,2),l!==null&&(ov(s,l,r,e),de(l,2),ci(l));break}}r=r.return}}function Fd(e,r,s){var l=e.pingCache;if(l===null){l=e.pingCache=new J1;var f=new Set;l.set(r,f)}else f=l.get(r),f===void 0&&(f=new Set,l.set(r,f));f.has(s)||(xd=!0,f.add(s),e=aS.bind(null,e,r,s),r.then(e,e))}function aS(e,r,s){var l=e.pingCache;l!==null&&l.delete(r),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Jt===e&&(Bt&s)===s&&(fe===4||fe===3&&(Bt&62914560)===Bt&&300>ln()-kd?!(ae&2)&&Ks(e,0):Md|=s,Gs===Bt&&(Gs=0)),ci(e)}function r_(e,r){r===0&&(r=gr()),e=Ir(e,r),e!==null&&(de(e,r),ci(e))}function sS(e){var r=e.memoizedState,s=0;r!==null&&(s=r.retryLane),r_(e,s)}function oS(e,r){var s=0;switch(e.tag){case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(r),r_(e,s)}function lS(e,r){return ga(e,r)}var Dc=null,$s=null,qd=!1,Nc=!1,Gd=!1,Ya=0;function ci(e){e!==$s&&e.next===null&&($s===null?Dc=$s=e:$s=$s.next=e),Nc=!0,qd||(qd=!0,cS(uS))}function Cl(e,r){if(!Gd&&Nc){Gd=!0;do for(var s=!1,l=Dc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var _=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-nn(42|e)+1)-1,d&=f&~(_&~T),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(s=!0,o_(l,d))}else d=Bt,d=Tn(l,l===Jt?d:0),!(d&3)||pr(l,d)||(s=!0,o_(l,d));l=l.next}while(s);Gd=!1}}function uS(){Nc=qd=!1;var e=0;Ya!==0&&(vS()&&(e=Ya),Ya=0);for(var r=ln(),s=null,l=Dc;l!==null;){var f=l.next,d=a_(l,r);d===0?(l.next=null,s===null?Dc=f:s.next=f,f===null&&($s=s)):(s=l,(e!==0||d&3)&&(Nc=!0)),l=f}Cl(e)}function a_(e,r){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var _=31-nn(d),T=1<<_,C=f[_];C===-1?(!(T&s)||T&l)&&(f[_]=ds(T,r)):C<=r&&(e.expiredLanes|=T),d&=~T}if(r=Jt,s=Bt,s=Tn(e,e===r?s:0),l=e.callbackNode,s===0||e===r&&te===2||e.cancelPendingCommit!==null)return l!==null&&l!==null&&hs(l),e.callbackNode=null,e.callbackPriority=0;if(!(s&3)||pr(e,s)){if(r=s&-s,r===e.callbackPriority)return r;switch(l!==null&&hs(l),xu(s)){case 2:case 8:s=xe;break;case 32:s=Ri;break;case 268435456:s=ko;break;default:s=Ri}return l=s_.bind(null,e),s=ga(s,l),e.callbackPriority=r,e.callbackNode=s,r}return l!==null&&l!==null&&hs(l),e.callbackPriority=2,e.callbackNode=null,2}function s_(e,r){var s=e.callbackNode;if(Qs()&&e.callbackNode!==s)return null;var l=Bt;return l=Tn(e,e===Jt?l:0),l===0?null:(Yv(e,l,r),a_(e,ln()),e.callbackNode!=null&&e.callbackNode===s?s_.bind(null,e):null)}function o_(e,r){if(Qs())return null;Yv(e,r,!0)}function cS(e){ES(function(){ae&6?ga(Ae,e):e()})}function Kd(){return Ya===0&&(Ya=Uo()),Ya}function l_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Jn(""+e)}function u_(e,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,e.id&&s.setAttribute("form",e.id),r.parentNode.insertBefore(s,r),e=new FormData(e),s.parentNode.removeChild(s),e}function fS(e,r,s,l,f){if(r==="submit"&&s&&s.stateNode===f){var d=l_((f[Se]||null).action),_=l.submitter;_&&(r=(r=_[Se]||null)?l_(r.formAction):_.getAttribute("formAction"),r!==null&&(d=r,_=null));var T=new Es("action","action",null,l,f);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ya!==0){var C=_?u_(f,_):new FormData(f);ed(s,{pending:!0,data:C,method:f.method,action:d},null,C)}}else typeof d=="function"&&(T.preventDefault(),C=_?u_(f,_):new FormData(f),ed(s,{pending:!0,data:C,method:f.method,action:d},d,C))},currentTarget:f}]})}}for(var Yd=0;Yd<ey.length;Yd++){var Qd=ey[Yd],hS=Qd.toLowerCase(),dS=Qd[0].toUpperCase()+Qd.slice(1);jn(hS,"on"+dS)}jn(Xg,"onAnimationEnd"),jn(Wg,"onAnimationIteration"),jn(Zg,"onAnimationStart"),jn("dblclick","onDoubleClick"),jn("focusin","onFocus"),jn("focusout","onBlur"),jn(D1,"onTransitionRun"),jn(N1,"onTransitionStart"),jn(x1,"onTransitionCancel"),jn(Jg,"onTransitionEnd"),un("onMouseEnter",["mouseout","mouseover"]),un("onMouseLeave",["mouseout","mouseover"]),un("onPointerEnter",["pointerout","pointerover"]),un("onPointerLeave",["pointerout","pointerover"]),hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Il));function c_(e,r){r=(r&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var d=void 0;if(r)for(var _=l.length-1;0<=_;_--){var T=l[_],C=T.instance,k=T.currentTarget;if(T=T.listener,C!==d&&f.isPropagationStopped())break t;d=T,f.currentTarget=k;try{d(f)}catch(Y){yc(Y)}f.currentTarget=null,d=C}else for(_=0;_<l.length;_++){if(T=l[_],C=T.instance,k=T.currentTarget,T=T.listener,C!==d&&f.isPropagationStopped())break t;d=T,f.currentTarget=k;try{d(f)}catch(Y){yc(Y)}f.currentTarget=null,d=C}}}}function Vt(e,r){var s=r[va];s===void 0&&(s=r[va]=new Set);var l=e+"__bubble";s.has(l)||(f_(r,e,2,!1),s.add(l))}function $d(e,r,s){var l=0;r&&(l|=4),f_(s,e,l,r)}var xc="_reactListening"+Math.random().toString(36).slice(2);function Xd(e){if(!e[xc]){e[xc]=!0,Bo.forEach(function(s){s!=="selectionchange"&&(mS.has(s)||$d(s,!1,e),$d(s,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[xc]||(r[xc]=!0,$d("selectionchange",!1,r))}}function f_(e,r,s,l){switch(P_(r)){case 2:var f=BS;break;case 8:f=jS;break;default:f=um}s=f.bind(null,r,s,e),f=void 0,!wn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(r,s,{capture:!0,passive:f}):e.addEventListener(r,s,!0):f!==void 0?e.addEventListener(r,s,{passive:f}):e.addEventListener(r,s,!1)}function Wd(e,r,s,l,f){var d=l;if(!(r&1)&&!(r&2)&&l!==null)t:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var T=l.stateNode.containerInfo;if(T===f||T.nodeType===8&&T.parentNode===f)break;if(_===4)for(_=l.return;_!==null;){var C=_.tag;if((C===3||C===4)&&(C=_.stateNode.containerInfo,C===f||C.nodeType===8&&C.parentNode===f))return;_=_.return}for(;T!==null;){if(_=Bn(T),_===null)return;if(C=_.tag,C===5||C===6||C===26||C===27){l=d=_;continue t}T=T.parentNode}}l=l.return}Lu(function(){var k=d,Y=_s(s),J=[];t:{var H=ty.get(e);if(H!==void 0){var G=Es,ft=e;switch(e){case"keypress":if(ei(s)===0)break t;case"keydown":case"keyup":G=Rs;break;case"focusin":ft="focus",G=As;break;case"focusout":ft="blur",G=As;break;case"beforeblur":case"afterblur":G=As;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=Rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=Ah;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=Gu;break;case Xg:case Wg:case Zg:G=Ss;break;case Jg:G=Yu;break;case"scroll":case"scrollend":G=Uu;break;case"wheel":G=Cs;break;case"copy":case"cut":case"paste":G=ws;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=Zo;break;case"toggle":case"beforetoggle":G=$u}var wt=(r&4)!==0,he=!wt&&(e==="scroll"||e==="scrollend"),L=wt?H!==null?H+"Capture":null:H;wt=[];for(var M=k,j;M!==null;){var $=M;if(j=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||j===null||L===null||($=Aa(M,L),$!=null&&wt.push(Ol(M,$,j))),he)break;M=M.return}0<wt.length&&(H=new G(H,ft,null,s,Y),J.push({event:H,listeners:wt}))}}if(!(r&7)){t:{if(H=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",H&&s!==Sn&&(ft=s.relatedTarget||s.fromElement)&&(Bn(ft)||ft[Ci]))break t;if((G||H)&&(H=Y.window===Y?Y:(H=Y.ownerDocument)?H.defaultView||H.parentWindow:window,G?(ft=s.relatedTarget||s.toElement,G=k,ft=ft?Bn(ft):null,ft!==null&&(he=pt(ft),wt=ft.tag,ft!==he||wt!==5&&wt!==27&&wt!==6)&&(ft=null)):(G=null,ft=k),G!==ft)){if(wt=Rn,$="onMouseLeave",L="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(wt=Zo,$="onPointerLeave",L="onPointerEnter",M="pointer"),he=G==null?H:Tr(G),j=ft==null?H:Tr(ft),H=new wt($,M+"leave",G,s,Y),H.target=he,H.relatedTarget=j,$=null,Bn(Y)===k&&(wt=new wt(L,M+"enter",ft,s,Y),wt.target=j,wt.relatedTarget=he,$=wt),he=$,G&&ft)e:{for(wt=G,L=ft,M=0,j=wt;j;j=Xs(j))M++;for(j=0,$=L;$;$=Xs($))j++;for(;0<M-j;)wt=Xs(wt),M--;for(;0<j-M;)L=Xs(L),j--;for(;M--;){if(wt===L||L!==null&&wt===L.alternate)break e;wt=Xs(wt),L=Xs(L)}wt=null}else wt=null;G!==null&&h_(J,H,G,wt,!1),ft!==null&&he!==null&&h_(J,he,ft,wt,!0)}}t:{if(H=k?Tr(k):window,G=H.nodeName&&H.nodeName.toLowerCase(),G==="select"||G==="input"&&H.type==="file")var ut=zg;else if(Re(H))if(Bg)ut=R1;else{ut=S1;var Nt=A1}else G=H.nodeName,!G||G.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?k&&Go(k.elementType)&&(ut=zg):ut=w1;if(ut&&(ut=ut(e,k))){ki(J,ut,s,Y);break t}Nt&&Nt(e,H,k),e==="focusout"&&k&&H.type==="number"&&k.memoizedProps.value!=null&&vs(H,"number",H.value)}switch(Nt=k?Tr(k):window,e){case"focusin":(Re(Nt)||Nt.contentEditable==="true")&&(Is=Nt,Ih=k,el=null);break;case"focusout":el=Ih=Is=null;break;case"mousedown":Oh=!0;break;case"contextmenu":case"mouseup":case"dragend":Oh=!1,Qg(J,s,Y);break;case"selectionchange":if(O1)break;case"keydown":case"keyup":Qg(J,s,Y)}var mt;if(ri)t:{switch(e){case"compositionstart":var vt="onCompositionStart";break t;case"compositionend":vt="onCompositionEnd";break t;case"compositionupdate":vt="onCompositionUpdate";break t}vt=void 0}else Ut?F(e,s)&&(vt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(vt="onCompositionStart");vt&&(v&&s.locale!=="ko"&&(Ut||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Ut&&(mt=Yo()):(ti=Y,Cr="value"in ti?ti.value:ti.textContent,Ut=!0)),Nt=Mc(k,vt),0<Nt.length&&(vt=new Xo(vt,e,null,s,Y),J.push({event:vt,listeners:Nt}),mt?vt.data=mt:(mt=it(s),mt!==null&&(vt.data=mt)))),(mt=g?we(e,s):zt(e,s))&&(vt=Mc(k,"onBeforeInput"),0<vt.length&&(Nt=new Xo("onBeforeInput","beforeinput",null,s,Y),J.push({event:Nt,listeners:vt}),Nt.data=mt)),fS(J,e,k,s,Y)}c_(J,r)})}function Ol(e,r,s){return{instance:e,listener:r,currentTarget:s}}function Mc(e,r){for(var s=r+"Capture",l=[];e!==null;){var f=e,d=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=Aa(e,s),f!=null&&l.unshift(Ol(e,f,d)),f=Aa(e,r),f!=null&&l.push(Ol(e,f,d))),e=e.return}return l}function Xs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function h_(e,r,s,l,f){for(var d=r._reactName,_=[];s!==null&&s!==l;){var T=s,C=T.alternate,k=T.stateNode;if(T=T.tag,C!==null&&C===l)break;T!==5&&T!==26&&T!==27||k===null||(C=k,f?(k=Aa(s,d),k!=null&&_.unshift(Ol(s,k,C))):f||(k=Aa(s,d),k!=null&&_.push(Ol(s,k,C)))),s=s.return}_.length!==0&&e.push({event:r,listeners:_})}var pS=/\r\n?/g,gS=/\u0000|\uFFFD/g;function d_(e){return(typeof e=="string"?e:""+e).replace(pS,`
`).replace(gS,"")}function m_(e,r){return r=d_(r),d_(e)===r}function Pc(){}function Wt(e,r,s,l,f,d){switch(s){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||An(e,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&An(e,""+l);break;case"className":Sr(e,"class",l);break;case"tabIndex":Sr(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Sr(e,s,l);break;case"style":Vu(e,l,d);break;case"data":if(r!=="object"){Sr(e,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Jn(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(r!=="input"&&Wt(e,r,"name",f.name,f,null),Wt(e,r,"formEncType",f.formEncType,f,null),Wt(e,r,"formMethod",f.formMethod,f,null),Wt(e,r,"formTarget",f.formTarget,f,null)):(Wt(e,r,"encType",f.encType,f,null),Wt(e,r,"method",f.method,f,null),Wt(e,r,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=Jn(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=Pc);break;case"onScroll":l!=null&&Vt("scroll",e);break;case"onScrollEnd":l!=null&&Vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=Jn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Vt("beforetoggle",e),Vt("toggle",e),Ar(e,"popover",l);break;case"xlinkActuate":bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":bn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":bn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":bn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":bn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ar(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Th.get(s)||s,Ar(e,s,l))}}function Zd(e,r,s,l,f,d){switch(s){case"style":Vu(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?An(e,l):(typeof l=="number"||typeof l=="bigint")&&An(e,""+l);break;case"onScroll":l!=null&&Vt("scroll",e);break;case"onScrollEnd":l!=null&&Vt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Pc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!gs.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),r=s.slice(2,f?s.length-7:void 0),d=e[Se]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(r,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(r,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Ar(e,s,l)}}}function Fe(e,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Vt("error",e),Vt("load",e);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var _=s[d];if(_!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Wt(e,r,d,_,s,null)}}f&&Wt(e,r,"srcSet",s.srcSet,s,null),l&&Wt(e,r,"src",s.src,s,null);return;case"input":Vt("invalid",e);var T=d=_=f=null,C=null,k=null;for(l in s)if(s.hasOwnProperty(l)){var Y=s[l];if(Y!=null)switch(l){case"name":f=Y;break;case"type":_=Y;break;case"checked":C=Y;break;case"defaultChecked":k=Y;break;case"value":d=Y;break;case"defaultValue":T=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(a(137,r));break;default:Wt(e,r,l,Y,s,null)}}Ta(e,d,T,C,k,_,f,!1),Ea(e);return;case"select":Vt("invalid",e),l=_=d=null;for(f in s)if(s.hasOwnProperty(f)&&(T=s[f],T!=null))switch(f){case"value":d=T;break;case"defaultValue":_=T;break;case"multiple":l=T;default:Wt(e,r,f,T,s,null)}r=d,s=_,e.multiple=!!l,r!=null?Ft(e,!!l,r,!1):s!=null&&Ft(e,!!l,s,!0);return;case"textarea":Vt("invalid",e),d=f=l=null;for(_ in s)if(s.hasOwnProperty(_)&&(T=s[_],T!=null))switch(_){case"value":l=T;break;case"defaultValue":f=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Wt(e,r,_,T,s,null)}Rr(e,l,f,d),Ea(e);return;case"option":for(C in s)if(s.hasOwnProperty(C)&&(l=s[C],l!=null))switch(C){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Wt(e,r,C,l,s,null)}return;case"dialog":Vt("cancel",e),Vt("close",e);break;case"iframe":case"object":Vt("load",e);break;case"video":case"audio":for(l=0;l<Il.length;l++)Vt(Il[l],e);break;case"image":Vt("error",e),Vt("load",e);break;case"details":Vt("toggle",e);break;case"embed":case"source":case"link":Vt("error",e),Vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in s)if(s.hasOwnProperty(k)&&(l=s[k],l!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Wt(e,r,k,l,s,null)}return;default:if(Go(r)){for(Y in s)s.hasOwnProperty(Y)&&(l=s[Y],l!==void 0&&Zd(e,r,Y,l,s,void 0));return}}for(T in s)s.hasOwnProperty(T)&&(l=s[T],l!=null&&Wt(e,r,T,l,s,null))}function yS(e,r,s,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,_=null,T=null,C=null,k=null,Y=null;for(G in s){var J=s[G];if(s.hasOwnProperty(G)&&J!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":C=J;default:l.hasOwnProperty(G)||Wt(e,r,G,null,l,J)}}for(var H in l){var G=l[H];if(J=s[H],l.hasOwnProperty(H)&&(G!=null||J!=null))switch(H){case"type":d=G;break;case"name":f=G;break;case"checked":k=G;break;case"defaultChecked":Y=G;break;case"value":_=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,r));break;default:G!==J&&Wt(e,r,H,G,l,J)}}wr(e,_,T,C,k,Y,d,f);return;case"select":G=_=T=H=null;for(d in s)if(C=s[d],s.hasOwnProperty(d)&&C!=null)switch(d){case"value":break;case"multiple":G=C;default:l.hasOwnProperty(d)||Wt(e,r,d,null,l,C)}for(f in l)if(d=l[f],C=s[f],l.hasOwnProperty(f)&&(d!=null||C!=null))switch(f){case"value":H=d;break;case"defaultValue":T=d;break;case"multiple":_=d;default:d!==C&&Wt(e,r,f,d,l,C)}r=T,s=_,l=G,H!=null?Ft(e,!!s,H,!1):!!l!=!!s&&(r!=null?Ft(e,!!s,r,!0):Ft(e,!!s,s?[]:"",!1));return;case"textarea":G=H=null;for(T in s)if(f=s[T],s.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Wt(e,r,T,null,l,f)}for(_ in l)if(f=l[_],d=s[_],l.hasOwnProperty(_)&&(f!=null||d!=null))switch(_){case"value":H=f;break;case"defaultValue":G=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&Wt(e,r,_,f,l,d)}ba(e,H,G);return;case"option":for(var ft in s)if(H=s[ft],s.hasOwnProperty(ft)&&H!=null&&!l.hasOwnProperty(ft))switch(ft){case"selected":e.selected=!1;break;default:Wt(e,r,ft,null,l,H)}for(C in l)if(H=l[C],G=s[C],l.hasOwnProperty(C)&&H!==G&&(H!=null||G!=null))switch(C){case"selected":e.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Wt(e,r,C,H,l,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var wt in s)H=s[wt],s.hasOwnProperty(wt)&&H!=null&&!l.hasOwnProperty(wt)&&Wt(e,r,wt,null,l,H);for(k in l)if(H=l[k],G=s[k],l.hasOwnProperty(k)&&H!==G&&(H!=null||G!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,r));break;default:Wt(e,r,k,H,l,G)}return;default:if(Go(r)){for(var he in s)H=s[he],s.hasOwnProperty(he)&&H!==void 0&&!l.hasOwnProperty(he)&&Zd(e,r,he,void 0,l,H);for(Y in l)H=l[Y],G=s[Y],!l.hasOwnProperty(Y)||H===G||H===void 0&&G===void 0||Zd(e,r,Y,H,l,G);return}}for(var L in s)H=s[L],s.hasOwnProperty(L)&&H!=null&&!l.hasOwnProperty(L)&&Wt(e,r,L,null,l,H);for(J in l)H=l[J],G=s[J],!l.hasOwnProperty(J)||H===G||H==null&&G==null||Wt(e,r,J,H,l,G)}var Jd=null,tm=null;function kc(e){return e.nodeType===9?e:e.ownerDocument}function p_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function g_(e,r){if(e===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&r==="foreignObject"?0:e}function em(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var nm=null;function vS(){var e=window.event;return e&&e.type==="popstate"?e===nm?!1:(nm=e,!0):(nm=null,!1)}var y_=typeof setTimeout=="function"?setTimeout:void 0,_S=typeof clearTimeout=="function"?clearTimeout:void 0,v_=typeof Promise=="function"?Promise:void 0,ES=typeof queueMicrotask=="function"?queueMicrotask:typeof v_<"u"?function(e){return v_.resolve(null).then(e).catch(TS)}:y_;function TS(e){setTimeout(function(){throw e})}function im(e,r){var s=r,l=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(l===0){e.removeChild(f),Ll(r);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=f}while(s);Ll(r)}function rm(e){var r=e.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":rm(s),_a(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function bS(e,r,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Er])switch(r){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==f.rel||e.getAttribute("href")!==(f.href==null?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(r==="input"&&e.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=qn(e.nextSibling),e===null)break}return null}function AS(e,r,s){if(r==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=qn(e.nextSibling),e===null))return null;return e}function qn(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return e}function __(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return e;r--}else s==="/$"&&r++}e=e.previousSibling}return null}function E_(e,r,s){switch(r=kc(s),e){case"html":if(e=r.documentElement,!e)throw Error(a(452));return e;case"head":if(e=r.head,!e)throw Error(a(453));return e;case"body":if(e=r.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}var Vn=new Map,T_=new Set;function Vc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Xi=ot.d;ot.d={f:SS,r:wS,D:RS,C:CS,L:IS,m:OS,X:NS,S:DS,M:xS};function SS(){var e=Xi.f(),r=Ic();return e||r}function wS(e){var r=Ii(e);r!==null&&r.tag===5&&r.type==="form"?Qy(r):Xi.r(e)}var Ws=typeof document>"u"?null:document;function b_(e,r,s){var l=Ws;if(l&&typeof r=="string"&&r){var f=ue(r);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),T_.has(f)||(T_.add(f),e={rel:e,crossOrigin:s,href:r},l.querySelector(f)===null&&(r=l.createElement("link"),Fe(r,"link",e),ie(r),l.head.appendChild(r)))}}function RS(e){Xi.D(e),b_("dns-prefetch",e,null)}function CS(e,r){Xi.C(e,r),b_("preconnect",e,r)}function IS(e,r,s){Xi.L(e,r,s);var l=Ws;if(l&&e&&r){var f='link[rel="preload"][as="'+ue(r)+'"]';r==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+ue(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+ue(s.imageSizes)+'"]')):f+='[href="'+ue(e)+'"]';var d=f;switch(r){case"style":d=Zs(e);break;case"script":d=Js(e)}Vn.has(d)||(e=I({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:e,as:r},s),Vn.set(d,e),l.querySelector(f)!==null||r==="style"&&l.querySelector(Dl(d))||r==="script"&&l.querySelector(Nl(d))||(r=l.createElement("link"),Fe(r,"link",e),ie(r),l.head.appendChild(r)))}}function OS(e,r){Xi.m(e,r);var s=Ws;if(s&&e){var l=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+ue(l)+'"][href="'+ue(e)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Js(e)}if(!Vn.has(d)&&(e=I({rel:"modulepreload",href:e},r),Vn.set(d,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Nl(d)))return}l=s.createElement("link"),Fe(l,"link",e),ie(l),s.head.appendChild(l)}}}function DS(e,r,s){Xi.S(e,r,s);var l=Ws;if(l&&e){var f=br(l).hoistableStyles,d=Zs(e);r=r||"default";var _=f.get(d);if(!_){var T={loading:0,preload:null};if(_=l.querySelector(Dl(d)))T.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":r},s),(s=Vn.get(d))&&am(e,s);var C=_=l.createElement("link");ie(C),Fe(C,"link",e),C._p=new Promise(function(k,Y){C.onload=k,C.onerror=Y}),C.addEventListener("load",function(){T.loading|=1}),C.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Lc(_,r,l)}_={type:"stylesheet",instance:_,count:1,state:T},f.set(d,_)}}}function NS(e,r){Xi.X(e,r);var s=Ws;if(s&&e){var l=br(s).hoistableScripts,f=Js(e),d=l.get(f);d||(d=s.querySelector(Nl(f)),d||(e=I({src:e,async:!0},r),(r=Vn.get(f))&&sm(e,r),d=s.createElement("script"),ie(d),Fe(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function xS(e,r){Xi.M(e,r);var s=Ws;if(s&&e){var l=br(s).hoistableScripts,f=Js(e),d=l.get(f);d||(d=s.querySelector(Nl(f)),d||(e=I({src:e,async:!0,type:"module"},r),(r=Vn.get(f))&&sm(e,r),d=s.createElement("script"),ie(d),Fe(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function A_(e,r,s,l){var f=(f=En.current)?Vc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=Zs(s.href),s=br(f).hoistableStyles,l=s.get(r),l||(l={type:"style",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Zs(s.href);var d=br(f).hoistableStyles,_=d.get(e);if(_||(f=f.ownerDocument||f,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,_),(d=f.querySelector(Dl(e)))&&!d._p&&(_.instance=d,_.state.loading=5),Vn.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Vn.set(e,s),d||MS(f,e,s,_.state))),r&&l===null)throw Error(a(528,""));return _}if(r&&l!==null)throw Error(a(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Js(s),s=br(f).hoistableScripts,l=s.get(r),l||(l={type:"script",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Zs(e){return'href="'+ue(e)+'"'}function Dl(e){return'link[rel="stylesheet"]['+e+"]"}function S_(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function MS(e,r,s,l){e.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=e.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),Fe(r,"link",s),ie(r),e.head.appendChild(r))}function Js(e){return'[src="'+ue(e)+'"]'}function Nl(e){return"script[async]"+e}function w_(e,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var l=e.querySelector('style[data-href~="'+ue(s.href)+'"]');if(l)return r.instance=l,ie(l),l;var f=I({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ie(l),Fe(l,"style",f),Lc(l,s.precedence,e),r.instance=l;case"stylesheet":f=Zs(s.href);var d=e.querySelector(Dl(f));if(d)return r.state.loading|=4,r.instance=d,ie(d),d;l=S_(s),(f=Vn.get(f))&&am(l,f),d=(e.ownerDocument||e).createElement("link"),ie(d);var _=d;return _._p=new Promise(function(T,C){_.onload=T,_.onerror=C}),Fe(d,"link",l),r.state.loading|=4,Lc(d,s.precedence,e),r.instance=d;case"script":return d=Js(s.src),(f=e.querySelector(Nl(d)))?(r.instance=f,ie(f),f):(l=s,(f=Vn.get(d))&&(l=I({},s),sm(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),ie(f),Fe(f,"link",l),e.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&!(r.state.loading&4)&&(l=r.instance,r.state.loading|=4,Lc(l,s.precedence,e));return r.instance}function Lc(e,r,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,_=0;_<l.length;_++){var T=l[_];if(T.dataset.precedence===r)d=T;else if(d!==f)break}d?d.parentNode.insertBefore(e,d.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(e,r.firstChild))}function am(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.title==null&&(e.title=r.title)}function sm(e,r){e.crossOrigin==null&&(e.crossOrigin=r.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=r.referrerPolicy),e.integrity==null&&(e.integrity=r.integrity)}var Uc=null;function R_(e,r,s){if(Uc===null){var l=new Map,f=Uc=new Map;f.set(s,l)}else f=Uc,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var d=s[f];if(!(d[Er]||d[Me]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(r)||"";_=e+_;var T=l.get(_);T?T.push(d):l.set(_,[d])}}return l}function C_(e,r,s){e=e.ownerDocument||e,e.head.insertBefore(s,r==="title"?e.querySelector("head > title"):null)}function PS(e,r,s){if(s===1||r.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return e=r.disabled,typeof r.precedence=="string"&&e==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function I_(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var xl=null;function kS(){}function VS(e,r,s){if(xl===null)throw Error(a(475));var l=xl;if(r.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&!(r.state.loading&4)){if(r.instance===null){var f=Zs(s.href),d=e.querySelector(Dl(f));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=zc.bind(l),e.then(l,l)),r.state.loading|=4,r.instance=d,ie(d);return}d=e.ownerDocument||e,s=S_(s),(f=Vn.get(f))&&am(s,f),d=d.createElement("link"),ie(d);var _=d;_._p=new Promise(function(T,C){_.onload=T,_.onerror=C}),Fe(d,"link",s),r.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,e),(e=r.state.preload)&&!(r.state.loading&3)&&(l.count++,r=zc.bind(l),e.addEventListener("load",r),e.addEventListener("error",r))}}function LS(){if(xl===null)throw Error(a(475));var e=xl;return e.stylesheets&&e.count===0&&om(e,e.stylesheets),0<e.count?function(r){var s=setTimeout(function(){if(e.stylesheets&&om(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(s)}}:null}function zc(){if(this.count--,this.count===0){if(this.stylesheets)om(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bc=null;function om(e,r){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bc=new Map,r.forEach(US,e),Bc=null,zc.call(e))}function US(e,r){if(!(r.state.loading&4)){var s=Bc.get(e);if(s)var l=s.get(null);else{s=new Map,Bc.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var _=f[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(s.set(_.dataset.precedence,_),l=_)}l&&s.set(null,l)}f=r.instance,_=f.getAttribute("data-precedence"),d=s.get(_)||l,d===l&&s.set(null,f),s.set(_,f),this.count++,l=zc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),r.state.loading|=4}}var Ml={$$typeof:D,Provider:null,Consumer:null,_currentValue:Ot,_currentValue2:Ot,_threadCount:0};function zS(e,r,s,l,f,d,_,T){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ms(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ms(0),this.hiddenUpdates=ms(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function O_(e,r,s,l,f,d,_,T,C,k,Y,J){return e=new zS(e,r,s,_,T,C,k,J),r=1,d===!0&&(r|=24),d=Pn(3,null,null,r),e.current=d,d.stateNode=e,r=zh(),r.refCount++,e.pooledCache=r,r.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:r},_d(d),e}function D_(e){return e?(e=Ns,e):Ns}function N_(e,r,s,l,f,d){f=D_(f),l.context===null?l.context=f:l.pendingContext=f,l=kr(r),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Vr(e,l,r),s!==null&&(on(s,e,r),gl(s,e,r))}function x_(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<r?s:r}}function lm(e,r){x_(e,r),(e=e.alternate)&&x_(e,r)}function M_(e){if(e.tag===13){var r=Ir(e,67108864);r!==null&&on(r,e,67108864),lm(e,67108864)}}var jc=!0;function BS(e,r,s,l){var f=S.T;S.T=null;var d=ot.p;try{ot.p=2,um(e,r,s,l)}finally{ot.p=d,S.T=f}}function jS(e,r,s,l){var f=S.T;S.T=null;var d=ot.p;try{ot.p=8,um(e,r,s,l)}finally{ot.p=d,S.T=f}}function um(e,r,s,l){if(jc){var f=cm(l);if(f===null)Wd(e,r,l,Hc,s),k_(e,l);else if(FS(f,e,r,s,l))l.stopPropagation();else if(k_(e,l),r&4&&-1<HS.indexOf(e)){for(;f!==null;){var d=Ii(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=zn(d.pendingLanes);if(_!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var C=1<<31-nn(_);T.entanglements[1]|=C,_&=~C}ci(d),!(ae&6)&&(wc=ln()+500,Cl(0))}}break;case 13:T=Ir(d,2),T!==null&&on(T,d,2),Ic(),lm(d,2)}if(d=cm(l),d===null&&Wd(e,r,l,Hc,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else Wd(e,r,l,null,s)}}function cm(e){return e=_s(e),fm(e)}var Hc=null;function fm(e){if(Hc=null,e=Bn(e),e!==null){var r=pt(e);if(r===null)e=null;else{var s=r.tag;if(s===13){if(e=Kt(r),e!==null)return e;e=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null)}}return Hc=e,null}function P_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cu()){case Ae:return 2;case xe:return 8;case Ri:case Iu:return 32;case ko:return 268435456;default:return 32}default:return 32}}var hm=!1,Fr=null,qr=null,Gr=null,Pl=new Map,kl=new Map,Kr=[],HS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function k_(e,r){switch(e){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Gr=null;break;case"pointerover":case"pointerout":Pl.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":kl.delete(r.pointerId)}}function Vl(e,r,s,l,f,d){return e===null||e.nativeEvent!==d?(e={blockedOn:r,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},r!==null&&(r=Ii(r),r!==null&&M_(r)),e):(e.eventSystemFlags|=l,r=e.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),e)}function FS(e,r,s,l,f){switch(r){case"focusin":return Fr=Vl(Fr,e,r,s,l,f),!0;case"dragenter":return qr=Vl(qr,e,r,s,l,f),!0;case"mouseover":return Gr=Vl(Gr,e,r,s,l,f),!0;case"pointerover":var d=f.pointerId;return Pl.set(d,Vl(Pl.get(d)||null,e,r,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,kl.set(d,Vl(kl.get(d)||null,e,r,s,l,f)),!0}return!1}function V_(e){var r=Bn(e.target);if(r!==null){var s=pt(r);if(s!==null){if(r=s.tag,r===13){if(r=Kt(s),r!==null){e.blockedOn=r,_r(e.priority,function(){if(s.tag===13){var l=vn(),f=Ir(s,l);f!==null&&on(f,s,l),lm(s,l)}});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fc(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var s=cm(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Sn=l,s.target.dispatchEvent(l),Sn=null}else return r=Ii(s),r!==null&&M_(r),e.blockedOn=s,!1;r.shift()}return!0}function L_(e,r,s){Fc(e)&&s.delete(r)}function qS(){hm=!1,Fr!==null&&Fc(Fr)&&(Fr=null),qr!==null&&Fc(qr)&&(qr=null),Gr!==null&&Fc(Gr)&&(Gr=null),Pl.forEach(L_),kl.forEach(L_)}function qc(e,r){e.blockedOn===r&&(e.blockedOn=null,hm||(hm=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,qS)))}var Gc=null;function U_(e){Gc!==e&&(Gc=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Gc===e&&(Gc=null);for(var r=0;r<e.length;r+=3){var s=e[r],l=e[r+1],f=e[r+2];if(typeof l!="function"){if(fm(l||s)===null)continue;break}var d=Ii(s);d!==null&&(e.splice(r,3),r-=3,ed(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Ll(e){function r(C){return qc(C,e)}Fr!==null&&qc(Fr,e),qr!==null&&qc(qr,e),Gr!==null&&qc(Gr,e),Pl.forEach(r),kl.forEach(r);for(var s=0;s<Kr.length;s++){var l=Kr[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Kr.length&&(s=Kr[0],s.blockedOn===null);)V_(s),s.blockedOn===null&&Kr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],_=f[Se]||null;if(typeof d=="function")_||U_(s);else if(_){var T=null;if(d&&d.hasAttribute("formAction")){if(f=d,_=d[Se]||null)T=_.formAction;else if(fm(f)!==null)continue}else T=_.action;typeof T=="function"?s[l+1]=T:(s.splice(l,3),l-=3),U_(s)}}}function dm(e){this._internalRoot=e}Kc.prototype.render=dm.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(a(409));var s=r.current,l=vn();N_(s,l,e,r,null,null)},Kc.prototype.unmount=dm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;e.tag===0&&Qs(),N_(e.current,2,null,e,null,null),Ic(),r[Ci]=null}};function Kc(e){this._internalRoot=e}Kc.prototype.unstable_scheduleHydration=function(e){if(e){var r=Mu();e={blockedOn:null,target:e,priority:r};for(var s=0;s<Kr.length&&r!==0&&r<Kr[s].priority;s++);Kr.splice(s,0,e),s===0&&V_(e)}};var z_=t.version;if(z_!=="19.0.0")throw Error(a(527,z_,"19.0.0"));ot.findDOMNode=function(e){var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=et(r),e=e!==null?ht(e):null,e=e===null?null:e.stateNode,e};var GS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:S,findFiberByHostInstance:Bn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yc.isDisabled&&Yc.supportsFiber)try{dr=Yc.inject(GS),Ye=Yc}catch{}}return zl.createRoot=function(e,r){if(!o(e))throw Error(a(299));var s=!1,l="",f=nv,d=iv,_=rv,T=null;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(_=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks)),r=O_(e,1,!1,null,null,s,l,f,d,_,T,null),e[Ci]=r.current,Xd(e.nodeType===8?e.parentNode:e),new dm(r)},zl.hydrateRoot=function(e,r,s){if(!o(e))throw Error(a(299));var l=!1,f="",d=nv,_=iv,T=rv,C=null,k=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(_=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(C=s.unstable_transitionCallbacks),s.formState!==void 0&&(k=s.formState)),r=O_(e,1,!0,r,s??null,l,f,d,_,T,C,k),r.context=D_(null),s=r.current,l=vn(),f=kr(l),f.callback=null,Vr(s,f,l),r.current.lanes=l,de(r,l),ci(r),e[Ci]=r.current,Xd(e),new Kc(r)},zl.version="19.0.0",zl}var $_;function ew(){if($_)return gm.exports;$_=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),gm.exports=tw(),gm.exports}var nw=ew(),Bl={},X_;function iw(){if(X_)return Bl;X_=1,Object.defineProperty(Bl,"__esModule",{value:!0}),Bl.parse=h,Bl.serialize=y;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function h(w,D){const V=new u,K=w.length;if(K<2)return V;const z=(D==null?void 0:D.decode)||E;let q=0;do{const Z=w.indexOf("=",q);if(Z===-1)break;const W=w.indexOf(";",q),ct=W===-1?K:W;if(Z>ct){q=w.lastIndexOf(";",Z-1)+1;continue}const at=m(w,q,Z),At=p(w,Z,at),x=w.slice(at,At);if(V[x]===void 0){let R=m(w,Z+1,ct),S=p(w,ct,R);const I=z(w.slice(R,S));V[x]=I}q=ct+1}while(q<K);return V}function m(w,D,V){do{const K=w.charCodeAt(D);if(K!==32&&K!==9)return D}while(++D<V);return V}function p(w,D,V){for(;D>V;){const K=w.charCodeAt(--D);if(K!==32&&K!==9)return D+1}return V}function y(w,D,V){const K=(V==null?void 0:V.encode)||encodeURIComponent;if(!i.test(w))throw new TypeError(`argument name is invalid: ${w}`);const z=K(D);if(!t.test(z))throw new TypeError(`argument val is invalid: ${D}`);let q=w+"="+z;if(!V)return q;if(V.maxAge!==void 0){if(!Number.isInteger(V.maxAge))throw new TypeError(`option maxAge is invalid: ${V.maxAge}`);q+="; Max-Age="+V.maxAge}if(V.domain){if(!n.test(V.domain))throw new TypeError(`option domain is invalid: ${V.domain}`);q+="; Domain="+V.domain}if(V.path){if(!a.test(V.path))throw new TypeError(`option path is invalid: ${V.path}`);q+="; Path="+V.path}if(V.expires){if(!A(V.expires)||!Number.isFinite(V.expires.valueOf()))throw new TypeError(`option expires is invalid: ${V.expires}`);q+="; Expires="+V.expires.toUTCString()}if(V.httpOnly&&(q+="; HttpOnly"),V.secure&&(q+="; Secure"),V.partitioned&&(q+="; Partitioned"),V.priority)switch(typeof V.priority=="string"?V.priority.toLowerCase():void 0){case"low":q+="; Priority=Low";break;case"medium":q+="; Priority=Medium";break;case"high":q+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${V.priority}`)}if(V.sameSite)switch(typeof V.sameSite=="string"?V.sameSite.toLowerCase():V.sameSite){case!0:case"strict":q+="; SameSite=Strict";break;case"lax":q+="; SameSite=Lax";break;case"none":q+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${V.sameSite}`)}return q}function E(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function A(w){return o.call(w)==="[object Date]"}return Bl}iw();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var W_="popstate";function rw(i={}){function t(a,o){let{pathname:u,search:h,hash:m}=a.location;return Hm("",{pathname:u,search:h,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){return typeof o=="string"?o:tu(o)}return sw(t,n,null,i)}function se(i,t){if(i===!1||i===null||typeof i>"u")throw new Error(t)}function _i(i,t){if(!i){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function aw(){return Math.random().toString(36).substring(2,10)}function Z_(i,t){return{usr:i.state,key:i.key,idx:t}}function Hm(i,t,n=null,a){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof t=="string"?So(t):t,state:n,key:t&&t.key||a||aw()}}function tu({pathname:i="/",search:t="",hash:n=""}){return t&&t!=="?"&&(i+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(i+=n.charAt(0)==="#"?n:"#"+n),i}function So(i){let t={};if(i){let n=i.indexOf("#");n>=0&&(t.hash=i.substring(n),i=i.substring(0,n));let a=i.indexOf("?");a>=0&&(t.search=i.substring(a),i=i.substring(0,a)),i&&(t.pathname=i)}return t}function sw(i,t,n,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,h=o.history,m="POP",p=null,y=E();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function E(){return(h.state||{idx:null}).idx}function A(){m="POP";let z=E(),q=z==null?null:z-y;y=z,p&&p({action:m,location:K.location,delta:q})}function w(z,q){m="PUSH";let Z=Hm(K.location,z,q);y=E()+1;let W=Z_(Z,y),ct=K.createHref(Z);try{h.pushState(W,"",ct)}catch(at){if(at instanceof DOMException&&at.name==="DataCloneError")throw at;o.location.assign(ct)}u&&p&&p({action:m,location:K.location,delta:1})}function D(z,q){m="REPLACE";let Z=Hm(K.location,z,q);y=E();let W=Z_(Z,y),ct=K.createHref(Z);h.replaceState(W,"",ct),u&&p&&p({action:m,location:K.location,delta:0})}function V(z){let q=o.location.origin!=="null"?o.location.origin:o.location.href,Z=typeof z=="string"?z:tu(z);return Z=Z.replace(/ $/,"%20"),se(q,`No window.location.(origin|href) available to create URL for href: ${Z}`),new URL(Z,q)}let K={get action(){return m},get location(){return i(o,h)},listen(z){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(W_,A),p=z,()=>{o.removeEventListener(W_,A),p=null}},createHref(z){return t(o,z)},createURL:V,encodeLocation(z){let q=V(z);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:w,replace:D,go(z){return h.go(z)}};return K}function sT(i,t,n="/"){return ow(i,t,n,!1)}function ow(i,t,n,a){let o=typeof t=="string"?So(t):t,u=sa(o.pathname||"/",n);if(u==null)return null;let h=oT(i);lw(h);let m=null;for(let p=0;m==null&&p<h.length;++p){let y=_w(u);m=yw(h[p],y,a)}return m}function oT(i,t=[],n=[],a=""){let o=(u,h,m)=>{let p={relativePath:m===void 0?u.path||"":m,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};p.relativePath.startsWith("/")&&(se(p.relativePath.startsWith(a),`Absolute route path "${p.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(a.length));let y=er([a,p.relativePath]),E=n.concat(p);u.children&&u.children.length>0&&(se(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),oT(u.children,t,E,y)),!(u.path==null&&!u.index)&&t.push({path:y,score:pw(y,u.index),routesMeta:E})};return i.forEach((u,h)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))o(u,h);else for(let p of lT(u.path))o(u,h,p)}),t}function lT(i){let t=i.split("/");if(t.length===0)return[];let[n,...a]=t,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let h=lT(a.join("/")),m=[];return m.push(...h.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...h),m.map(p=>i.startsWith("/")&&p===""?"/":p)}function lw(i){i.sort((t,n)=>t.score!==n.score?n.score-t.score:gw(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var uw=/^:[\w-]+$/,cw=3,fw=2,hw=1,dw=10,mw=-2,J_=i=>i==="*";function pw(i,t){let n=i.split("/"),a=n.length;return n.some(J_)&&(a+=mw),t&&(a+=fw),n.filter(o=>!J_(o)).reduce((o,u)=>o+(uw.test(u)?cw:u===""?hw:dw),a)}function gw(i,t){return i.length===t.length&&i.slice(0,-1).every((a,o)=>a===t[o])?i[i.length-1]-t[t.length-1]:0}function yw(i,t,n=!1){let{routesMeta:a}=i,o={},u="/",h=[];for(let m=0;m<a.length;++m){let p=a[m],y=m===a.length-1,E=u==="/"?t:t.slice(u.length)||"/",A=_f({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),w=p.route;if(!A&&y&&n&&!a[a.length-1].route.index&&(A=_f({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!A)return null;Object.assign(o,A.params),h.push({params:o,pathname:er([u,A.pathname]),pathnameBase:Aw(er([u,A.pathnameBase])),route:w}),A.pathnameBase!=="/"&&(u=er([u,A.pathnameBase]))}return h}function _f(i,t){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[n,a]=vw(i.path,i.caseSensitive,i.end),o=t.match(n);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:a.reduce((y,{paramName:E,isOptional:A},w)=>{if(E==="*"){let V=m[w]||"";h=u.slice(0,u.length-V.length).replace(/(.)\/+$/,"$1")}const D=m[w];return A&&!D?y[E]=void 0:y[E]=(D||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:h,pattern:i}}function vw(i,t=!1,n=!0){_i(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let a=[],o="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,m,p)=>(a.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(a.push({paramName:"*"}),o+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":i!==""&&i!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function _w(i){try{return i.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return _i(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),i}}function sa(i,t){if(t==="/")return i;if(!i.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=i.charAt(n);return a&&a!=="/"?null:i.slice(n)||"/"}function Ew(i,t="/"){let{pathname:n,search:a="",hash:o=""}=typeof i=="string"?So(i):i;return{pathname:n?n.startsWith("/")?n:Tw(n,t):t,search:Sw(a),hash:ww(o)}}function Tw(i,t){let n=t.replace(/\/+$/,"").split("/");return i.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Em(i,t,n,a){return`Cannot include a '${i}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bw(i){return i.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function uT(i){let t=bw(i);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function cT(i,t,n,a=!1){let o;typeof i=="string"?o=So(i):(o={...i},se(!o.pathname||!o.pathname.includes("?"),Em("?","pathname","search",o)),se(!o.pathname||!o.pathname.includes("#"),Em("#","pathname","hash",o)),se(!o.search||!o.search.includes("#"),Em("#","search","hash",o)));let u=i===""||o.pathname==="",h=u?"/":o.pathname,m;if(h==null)m=n;else{let A=t.length-1;if(!a&&h.startsWith("..")){let w=h.split("/");for(;w[0]==="..";)w.shift(),A-=1;o.pathname=w.join("/")}m=A>=0?t[A]:"/"}let p=Ew(o,m),y=h&&h!=="/"&&h.endsWith("/"),E=(u||h===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var er=i=>i.join("/").replace(/\/\/+/g,"/"),Aw=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Sw=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,ww=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Rw(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var fT=["POST","PUT","PATCH","DELETE"];new Set(fT);var Cw=["GET",...fT];new Set(Cw);var wo=Q.createContext(null);wo.displayName="DataRouter";var Ff=Q.createContext(null);Ff.displayName="DataRouterState";var hT=Q.createContext({isTransitioning:!1});hT.displayName="ViewTransition";var Iw=Q.createContext(new Map);Iw.displayName="Fetchers";var Ow=Q.createContext(null);Ow.displayName="Await";var Ai=Q.createContext(null);Ai.displayName="Navigation";var du=Q.createContext(null);du.displayName="Location";var lr=Q.createContext({outlet:null,matches:[],isDataRoute:!1});lr.displayName="Route";var Pp=Q.createContext(null);Pp.displayName="RouteError";function Dw(i,{relative:t}={}){se(mu(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=Q.useContext(Ai),{hash:o,pathname:u,search:h}=pu(i,{relative:t}),m=u;return n!=="/"&&(m=u==="/"?n:er([n,u])),a.createHref({pathname:m,search:h,hash:o})}function mu(){return Q.useContext(du)!=null}function as(){return se(mu(),"useLocation() may be used only in the context of a <Router> component."),Q.useContext(du).location}var dT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function mT(i){Q.useContext(Ai).static||Q.useLayoutEffect(i)}function qf(){let{isDataRoute:i}=Q.useContext(lr);return i?Fw():Nw()}function Nw(){se(mu(),"useNavigate() may be used only in the context of a <Router> component.");let i=Q.useContext(wo),{basename:t,navigator:n}=Q.useContext(Ai),{matches:a}=Q.useContext(lr),{pathname:o}=as(),u=JSON.stringify(uT(a)),h=Q.useRef(!1);return mT(()=>{h.current=!0}),Q.useCallback((p,y={})=>{if(_i(h.current,dT),!h.current)return;if(typeof p=="number"){n.go(p);return}let E=cT(p,JSON.parse(u),o,y.relative==="path");i==null&&t!=="/"&&(E.pathname=E.pathname==="/"?t:er([t,E.pathname])),(y.replace?n.replace:n.push)(E,y.state,y)},[t,n,u,o,i])}Q.createContext(null);function pu(i,{relative:t}={}){let{matches:n}=Q.useContext(lr),{pathname:a}=as(),o=JSON.stringify(uT(n));return Q.useMemo(()=>cT(i,JSON.parse(o),a,t==="path"),[i,o,a,t])}function xw(i,t){return pT(i,t)}function pT(i,t,n,a){var Z;se(mu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:u}=Q.useContext(Ai),{matches:h}=Q.useContext(lr),m=h[h.length-1],p=m?m.params:{},y=m?m.pathname:"/",E=m?m.pathnameBase:"/",A=m&&m.route;{let W=A&&A.path||"";gT(y,!A||W.endsWith("*")||W.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${W}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${W}"> to <Route path="${W==="/"?"*":`${W}/*`}">.`)}let w=as(),D;if(t){let W=typeof t=="string"?So(t):t;se(E==="/"||((Z=W.pathname)==null?void 0:Z.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${W.pathname}" was given in the \`location\` prop.`),D=W}else D=w;let V=D.pathname||"/",K=V;if(E!=="/"){let W=E.replace(/^\//,"").split("/");K="/"+V.replace(/^\//,"").split("/").slice(W.length).join("/")}let z=!u&&n&&n.matches&&n.matches.length>0?n.matches:sT(i,{pathname:K});_i(A||z!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),_i(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=Lw(z&&z.map(W=>Object.assign({},W,{params:Object.assign({},p,W.params),pathname:er([E,o.encodeLocation?o.encodeLocation(W.pathname).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?E:er([E,o.encodeLocation?o.encodeLocation(W.pathnameBase).pathname:W.pathnameBase])})),h,n,a);return t&&q?Q.createElement(du.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},q):q}function Mw(){let i=Hw(),t=Rw(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),n=i instanceof Error?i.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},h=null;return console.error("Error handled by React Router default ErrorBoundary:",i),h=Q.createElement(Q.Fragment,null,Q.createElement("p",null,"💿 Hey developer 👋"),Q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Q.createElement("code",{style:u},"ErrorBoundary")," or"," ",Q.createElement("code",{style:u},"errorElement")," prop on your route.")),Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},t),n?Q.createElement("pre",{style:o},n):null,h)}var Pw=Q.createElement(Mw,null),kw=class extends Q.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,t){return t.location!==i.location||t.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:t.error,location:t.location,revalidation:i.revalidation||t.revalidation}}componentDidCatch(i,t){console.error("React Router caught the following error during render",i,t)}render(){return this.state.error!==void 0?Q.createElement(lr.Provider,{value:this.props.routeContext},Q.createElement(Pp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Vw({routeContext:i,match:t,children:n}){let a=Q.useContext(wo);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),Q.createElement(lr.Provider,{value:i},n)}function Lw(i,t=[],n=null,a=null){if(i==null){if(!n)return null;if(n.errors)i=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)i=n.matches;else return null}let o=i,u=n==null?void 0:n.errors;if(u!=null){let p=o.findIndex(y=>y.route.id&&(u==null?void 0:u[y.route.id])!==void 0);se(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let h=!1,m=-1;if(n)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=p),y.route.id){let{loaderData:E,errors:A}=n,w=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!A||A[y.route.id]===void 0);if(y.route.lazy||w){h=!0,m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}return o.reduceRight((p,y,E)=>{let A,w=!1,D=null,V=null;n&&(A=u&&y.route.id?u[y.route.id]:void 0,D=y.route.errorElement||Pw,h&&(m<0&&E===0?(gT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,V=null):m===E&&(w=!0,V=y.route.hydrateFallbackElement||null)));let K=t.concat(o.slice(0,E+1)),z=()=>{let q;return A?q=D:w?q=V:y.route.Component?q=Q.createElement(y.route.Component,null):y.route.element?q=y.route.element:q=p,Q.createElement(Vw,{match:y,routeContext:{outlet:p,matches:K,isDataRoute:n!=null},children:q})};return n&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?Q.createElement(kw,{location:n.location,revalidation:n.revalidation,component:D,error:A,children:z(),routeContext:{outlet:null,matches:K,isDataRoute:!0}}):z()},null)}function kp(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Uw(i){let t=Q.useContext(wo);return se(t,kp(i)),t}function zw(i){let t=Q.useContext(Ff);return se(t,kp(i)),t}function Bw(i){let t=Q.useContext(lr);return se(t,kp(i)),t}function Vp(i){let t=Bw(i),n=t.matches[t.matches.length-1];return se(n.route.id,`${i} can only be used on routes that contain a unique "id"`),n.route.id}function jw(){return Vp("useRouteId")}function Hw(){var a;let i=Q.useContext(Pp),t=zw("useRouteError"),n=Vp("useRouteError");return i!==void 0?i:(a=t.errors)==null?void 0:a[n]}function Fw(){let{router:i}=Uw("useNavigate"),t=Vp("useNavigate"),n=Q.useRef(!1);return mT(()=>{n.current=!0}),Q.useCallback(async(o,u={})=>{_i(n.current,dT),n.current&&(typeof o=="number"?i.navigate(o):await i.navigate(o,{fromRouteId:t,...u}))},[i,t])}var t0={};function gT(i,t,n){!t&&!t0[i]&&(t0[i]=!0,_i(!1,n))}Q.memo(qw);function qw({routes:i,future:t,state:n}){return pT(i,void 0,n,t)}function Hl(i){se(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Gw({basename:i="/",children:t=null,location:n,navigationType:a="POP",navigator:o,static:u=!1}){se(!mu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=i.replace(/^\/*/,"/"),m=Q.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof n=="string"&&(n=So(n));let{pathname:p="/",search:y="",hash:E="",state:A=null,key:w="default"}=n,D=Q.useMemo(()=>{let V=sa(p,h);return V==null?null:{location:{pathname:V,search:y,hash:E,state:A,key:w},navigationType:a}},[h,p,y,E,A,w,a]);return _i(D!=null,`<Router basename="${h}"> is not able to match the URL "${p}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:Q.createElement(Ai.Provider,{value:m},Q.createElement(du.Provider,{children:t,value:D}))}function Kw({children:i,location:t}){return xw(Fm(i),t)}function Fm(i,t=[]){let n=[];return Q.Children.forEach(i,(a,o)=>{if(!Q.isValidElement(a))return;let u=[...t,o];if(a.type===Q.Fragment){n.push.apply(n,Fm(a.props.children,u));return}se(a.type===Hl,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),se(!a.props.index||!a.props.children,"An index route cannot have child routes.");let h={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(h.children=Fm(a.props.children,u)),n.push(h)}),n}var af="get",sf="application/x-www-form-urlencoded";function Gf(i){return i!=null&&typeof i.tagName=="string"}function Yw(i){return Gf(i)&&i.tagName.toLowerCase()==="button"}function Qw(i){return Gf(i)&&i.tagName.toLowerCase()==="form"}function $w(i){return Gf(i)&&i.tagName.toLowerCase()==="input"}function Xw(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Ww(i,t){return i.button===0&&(!t||t==="_self")&&!Xw(i)}var Qc=null;function Zw(){if(Qc===null)try{new FormData(document.createElement("form"),0),Qc=!1}catch{Qc=!0}return Qc}var Jw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Tm(i){return i!=null&&!Jw.has(i)?(_i(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sf}"`),null):i}function tR(i,t){let n,a,o,u,h;if(Qw(i)){let m=i.getAttribute("action");a=m?sa(m,t):null,n=i.getAttribute("method")||af,o=Tm(i.getAttribute("enctype"))||sf,u=new FormData(i)}else if(Yw(i)||$w(i)&&(i.type==="submit"||i.type==="image")){let m=i.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=i.getAttribute("formaction")||m.getAttribute("action");if(a=p?sa(p,t):null,n=i.getAttribute("formmethod")||m.getAttribute("method")||af,o=Tm(i.getAttribute("formenctype"))||Tm(m.getAttribute("enctype"))||sf,u=new FormData(m,i),!Zw()){let{name:y,type:E,value:A}=i;if(E==="image"){let w=y?`${y}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else y&&u.append(y,A)}}else{if(Gf(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=af,a=null,o=sf,h=i}return u&&o==="text/plain"&&(h=u,u=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:u,body:h}}function Lp(i,t){if(i===!1||i===null||typeof i>"u")throw new Error(t)}async function eR(i,t){if(i.id in t)return t[i.id];try{let n=await import(i.module);return t[i.id]=n,n}catch(n){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function nR(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function iR(i,t,n){let a=await Promise.all(i.map(async o=>{let u=t.routes[o.route.id];if(u){let h=await eR(u,n);return h.links?h.links():[]}return[]}));return oR(a.flat(1).filter(nR).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function e0(i,t,n,a,o,u){let h=(p,y)=>n[y]?p.route.id!==n[y].route.id:!0,m=(p,y)=>{var E;return n[y].pathname!==p.pathname||((E=n[y].route.path)==null?void 0:E.endsWith("*"))&&n[y].params["*"]!==p.params["*"]};return u==="assets"?t.filter((p,y)=>h(p,y)||m(p,y)):u==="data"?t.filter((p,y)=>{var A;let E=a.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(h(p,y)||m(p,y))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((A=n[0])==null?void 0:A.params)||{},nextUrl:new URL(i,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function rR(i,t,{includeHydrateFallback:n}={}){return aR(i.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function aR(i){return[...new Set(i)]}function sR(i){let t={},n=Object.keys(i).sort();for(let a of n)t[a]=i[a];return t}function oR(i,t){let n=new Set;return new Set(t),i.reduce((a,o)=>{let u=JSON.stringify(sR(o));return n.has(u)||(n.add(u),a.push({key:u,link:o})),a},[])}function lR(i){let t=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return t.pathname==="/"?t.pathname="_root.data":t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function uR(){let i=Q.useContext(wo);return Lp(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function cR(){let i=Q.useContext(Ff);return Lp(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Up=Q.createContext(void 0);Up.displayName="FrameworkContext";function yT(){let i=Q.useContext(Up);return Lp(i,"You must render this element inside a <HydratedRouter> element"),i}function fR(i,t){let n=Q.useContext(Up),[a,o]=Q.useState(!1),[u,h]=Q.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:A}=t,w=Q.useRef(null);Q.useEffect(()=>{if(i==="render"&&h(!0),i==="viewport"){let K=q=>{q.forEach(Z=>{h(Z.isIntersecting)})},z=new IntersectionObserver(K,{threshold:.5});return w.current&&z.observe(w.current),()=>{z.disconnect()}}},[i]),Q.useEffect(()=>{if(a){let K=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(K)}}},[a]);let D=()=>{o(!0)},V=()=>{o(!1),h(!1)};return n?i!=="intent"?[u,w,{}]:[u,w,{onFocus:jl(m,D),onBlur:jl(p,V),onMouseEnter:jl(y,D),onMouseLeave:jl(E,V),onTouchStart:jl(A,D)}]:[!1,w,{}]}function jl(i,t){return n=>{i&&i(n),n.defaultPrevented||t(n)}}function hR({page:i,...t}){let{router:n}=uR(),a=Q.useMemo(()=>sT(n.routes,i,n.basename),[n.routes,i,n.basename]);return a?Q.createElement(mR,{page:i,matches:a,...t}):null}function dR(i){let{manifest:t,routeModules:n}=yT(),[a,o]=Q.useState([]);return Q.useEffect(()=>{let u=!1;return iR(i,t,n).then(h=>{u||o(h)}),()=>{u=!0}},[i,t,n]),a}function mR({page:i,matches:t,...n}){let a=as(),{manifest:o,routeModules:u}=yT(),{loaderData:h,matches:m}=cR(),p=Q.useMemo(()=>e0(i,t,m,o,a,"data"),[i,t,m,o,a]),y=Q.useMemo(()=>e0(i,t,m,o,a,"assets"),[i,t,m,o,a]),E=Q.useMemo(()=>{if(i===a.pathname+a.search+a.hash)return[];let D=new Set,V=!1;if(t.forEach(z=>{var Z;let q=o.routes[z.route.id];!q||!q.hasLoader||(!p.some(W=>W.route.id===z.route.id)&&z.route.id in h&&((Z=u[z.route.id])!=null&&Z.shouldRevalidate)||q.hasClientLoader?V=!0:D.add(z.route.id))}),D.size===0)return[];let K=lR(i);return V&&D.size>0&&K.searchParams.set("_routes",t.filter(z=>D.has(z.route.id)).map(z=>z.route.id).join(",")),[K.pathname+K.search]},[h,a,o,p,t,i,u]),A=Q.useMemo(()=>rR(y,o),[y,o]),w=dR(y);return Q.createElement(Q.Fragment,null,E.map(D=>Q.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...n})),A.map(D=>Q.createElement("link",{key:D,rel:"modulepreload",href:D,...n})),w.map(({key:D,link:V})=>Q.createElement("link",{key:D,...V})))}function pR(...i){return t=>{i.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var vT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{vT&&(window.__reactRouterVersion="7.2.0")}catch{}function gR({basename:i,children:t,window:n}){let a=Q.useRef();a.current==null&&(a.current=rw({window:n,v5Compat:!0}));let o=a.current,[u,h]=Q.useState({action:o.action,location:o.location}),m=Q.useCallback(p=>{Q.startTransition(()=>h(p))},[h]);return Q.useLayoutEffect(()=>o.listen(m),[o,m]),Q.createElement(Gw,{basename:i,children:t,location:u.location,navigationType:u.action,navigator:o})}var _T=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ro=Q.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:o,reloadDocument:u,replace:h,state:m,target:p,to:y,preventScrollReset:E,viewTransition:A,...w},D){let{basename:V}=Q.useContext(Ai),K=typeof y=="string"&&_T.test(y),z,q=!1;if(typeof y=="string"&&K&&(z=y,vT))try{let S=new URL(window.location.href),I=y.startsWith("//")?new URL(S.protocol+y):new URL(y),P=sa(I.pathname,V);I.origin===S.origin&&P!=null?y=P+I.search+I.hash:q=!0}catch{_i(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Z=Dw(y,{relative:o}),[W,ct,at]=fR(a,w),At=ER(y,{replace:h,state:m,target:p,preventScrollReset:E,relative:o,viewTransition:A});function x(S){t&&t(S),S.defaultPrevented||At(S)}let R=Q.createElement("a",{...w,...at,href:z||Z,onClick:q||u?t:x,ref:pR(D,ct),target:p,"data-discover":!K&&n==="render"?"true":void 0});return W&&!K?Q.createElement(Q.Fragment,null,R,Q.createElement(hR,{page:Z})):R});ro.displayName="Link";var yR=Q.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:o=!1,style:u,to:h,viewTransition:m,children:p,...y},E){let A=pu(h,{relative:y.relative}),w=as(),D=Q.useContext(Ff),{navigator:V,basename:K}=Q.useContext(Ai),z=D!=null&&wR(A)&&m===!0,q=V.encodeLocation?V.encodeLocation(A).pathname:A.pathname,Z=w.pathname,W=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;n||(Z=Z.toLowerCase(),W=W?W.toLowerCase():null,q=q.toLowerCase()),W&&K&&(W=sa(W,K)||W);const ct=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let at=Z===q||!o&&Z.startsWith(q)&&Z.charAt(ct)==="/",At=W!=null&&(W===q||!o&&W.startsWith(q)&&W.charAt(q.length)==="/"),x={isActive:at,isPending:At,isTransitioning:z},R=at?t:void 0,S;typeof a=="function"?S=a(x):S=[a,at?"active":null,At?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let I=typeof u=="function"?u(x):u;return Q.createElement(ro,{...y,"aria-current":R,className:S,ref:E,style:I,to:h,viewTransition:m},typeof p=="function"?p(x):p)});yR.displayName="NavLink";var vR=Q.forwardRef(({discover:i="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:o,state:u,method:h=af,action:m,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:A,...w},D)=>{let V=AR(),K=SR(m,{relative:y}),z=h.toLowerCase()==="get"?"get":"post",q=typeof m=="string"&&_T.test(m),Z=W=>{if(p&&p(W),W.defaultPrevented)return;W.preventDefault();let ct=W.nativeEvent.submitter,at=(ct==null?void 0:ct.getAttribute("formmethod"))||h;V(ct||W.currentTarget,{fetcherKey:t,method:at,navigate:n,replace:o,state:u,relative:y,preventScrollReset:E,viewTransition:A})};return Q.createElement("form",{ref:D,method:z,action:K,onSubmit:a?p:Z,...w,"data-discover":!q&&i==="render"?"true":void 0})});vR.displayName="Form";function _R(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ET(i){let t=Q.useContext(wo);return se(t,_R(i)),t}function ER(i,{target:t,replace:n,state:a,preventScrollReset:o,relative:u,viewTransition:h}={}){let m=qf(),p=as(),y=pu(i,{relative:u});return Q.useCallback(E=>{if(Ww(E,t)){E.preventDefault();let A=n!==void 0?n:tu(p)===tu(y);m(i,{replace:A,state:a,preventScrollReset:o,relative:u,viewTransition:h})}},[p,m,y,n,a,t,i,o,u,h])}var TR=0,bR=()=>`__${String(++TR)}__`;function AR(){let{router:i}=ET("useSubmit"),{basename:t}=Q.useContext(Ai),n=jw();return Q.useCallback(async(a,o={})=>{let{action:u,method:h,encType:m,formData:p,body:y}=tR(a,t);if(o.navigate===!1){let E=o.fetcherKey||bR();await i.fetch(E,n,o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||m,flushSync:o.flushSync})}else await i.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[i,t,n])}function SR(i,{relative:t}={}){let{basename:n}=Q.useContext(Ai),a=Q.useContext(lr);se(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...pu(i||".",{relative:t})},h=as();if(i==null){u.search=h.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(E=>E==="")){m.delete("index"),p.filter(A=>A).forEach(A=>m.append("index",A));let E=m.toString();u.search=E?`?${E}`:""}}return(!i||i===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:er([n,u.pathname])),tu(u)}function wR(i,t={}){let n=Q.useContext(hT);se(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=ET("useViewTransitionState"),o=pu(i,{relative:t.relative});if(!n.isTransitioning)return!1;let u=sa(n.currentLocation.pathname,a)||n.currentLocation.pathname,h=sa(n.nextLocation.pathname,a)||n.nextLocation.pathname;return _f(o.pathname,h)!=null||_f(o.pathname,u)!=null}new TextEncoder;var n0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=function(i){const t=[];let n=0;for(let a=0;a<i.length;a++){let o=i.charCodeAt(a);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&a+1<i.length&&(i.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++a)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},RR=function(i){const t=[];let n=0,a=0;for(;n<i.length;){const o=i[n++];if(o<128)t[a++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[n++];t[a++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[n++],h=i[n++],m=i[n++],p=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;t[a++]=String.fromCharCode(55296+(p>>10)),t[a++]=String.fromCharCode(56320+(p&1023))}else{const u=i[n++],h=i[n++];t[a++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return t.join("")},bT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,p=o+2<i.length,y=p?i[o+2]:0,E=u>>2,A=(u&3)<<4|m>>4;let w=(m&15)<<2|y>>6,D=y&63;p||(D=64,h||(w=64)),a.push(n[E],n[A],n[w],n[D])}return a.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(TT(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):RR(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<i.length;){const u=n[i.charAt(o++)],m=o<i.length?n[i.charAt(o)]:0;++o;const y=o<i.length?n[i.charAt(o)]:64;++o;const A=o<i.length?n[i.charAt(o)]:64;if(++o,u==null||m==null||y==null||A==null)throw new CR;const w=u<<2|m>>4;if(a.push(w),y!==64){const D=m<<4&240|y>>2;if(a.push(D),A!==64){const V=y<<6&192|A;a.push(V)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class CR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const IR=function(i){const t=TT(i);return bT.encodeByteArray(t,!0)},Ef=function(i){return IR(i).replace(/\./g,"")},AT=function(i){try{return bT.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=()=>OR().__FIREBASE_DEFAULTS__,NR=()=>{if(typeof process>"u"||typeof n0>"u")return;const i=n0.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},xR=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&AT(i[1]);return t&&JSON.parse(t)},Kf=()=>{try{return DR()||NR()||xR()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},ST=i=>{var t,n;return(n=(t=Kf())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[i]},MR=i=>{const t=ST(i);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),a]:[t.substring(0,n),a]},wT=()=>{var i;return(i=Kf())===null||i===void 0?void 0:i.config},RT=i=>{var t;return(t=Kf())===null||t===void 0?void 0:t[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,a))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},a=t||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Ef(JSON.stringify(n)),Ef(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function LR(){var i;const t=(i=Kf())===null||i===void 0?void 0:i.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function UR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zR(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function BR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jR(){const i=Je();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function HR(){return!LR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function FR(){try{return typeof indexedDB=="object"}catch{return!1}}function qR(){return new Promise((i,t)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(a),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR="FirebaseError";class ur extends Error{constructor(t,n,a){super(n),this.code=t,this.customData=a,this.name=GR,Object.setPrototypeOf(this,ur.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gu.prototype.create)}}class gu{constructor(t,n,a){this.service=t,this.serviceName=n,this.errors=a}create(t,...n){const a=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],h=u?KR(u,a):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new ur(o,m,a)}}function KR(i,t){return i.replace(YR,(n,a)=>{const o=t[a];return o!=null?String(o):`<${a}?>`})}const YR=/\{\$([^}]+)}/g;function QR(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}function Tf(i,t){if(i===t)return!0;const n=Object.keys(i),a=Object.keys(t);for(const o of n){if(!a.includes(o))return!1;const u=i[o],h=t[o];if(i0(u)&&i0(h)){if(!Tf(u,h))return!1}else if(u!==h)return!1}for(const o of a)if(!n.includes(o))return!1;return!0}function i0(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(i){const t=[];for(const[n,a]of Object.entries(i))Array.isArray(a)?a.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function $R(i,t){const n=new XR(i,t);return n.subscribe.bind(n)}class XR{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,a){let o;if(t===void 0&&n===void 0&&a===void 0)throw new Error("Missing Observer.");WR(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:a},o.next===void 0&&(o.next=bm),o.error===void 0&&(o.error=bm),o.complete===void 0&&(o.complete=bm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WR(i,t){if(typeof i!="object"||i===null)return!1;for(const n of t)if(n in i&&typeof i[n]=="function")return!0;return!1}function bm(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(i){return i&&i._delegate?i._delegate:i}class Ja{constructor(t,n,a){this.name=t,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const a=new PR;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const a=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(t2(t))try{this.getOrInitializeService({instanceIdentifier:Qa})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});a.resolve(u)}catch{}}}}clearInstance(t=Qa){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qa){return this.instances.has(t)}getOptions(t=Qa){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);a===m&&h.resolve(o)}return o}onInit(t,n){var a;const o=this.normalizeInstanceIdentifier(n),u=(a=this.onInitCallbacks.get(o))!==null&&a!==void 0?a:new Set;u.add(t),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&t(h,o),()=>{u.delete(t)}}invokeOnInitCallbacks(t,n){const a=this.onInitCallbacks.get(n);if(a)for(const o of a)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:JR(t),options:n}),this.instances.set(t,a),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=Qa){return this.component?this.component.multipleInstances?t:Qa:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JR(i){return i===Qa?void 0:i}function t2(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ZR(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Pt||(Pt={}));const n2={debug:Pt.DEBUG,verbose:Pt.VERBOSE,info:Pt.INFO,warn:Pt.WARN,error:Pt.ERROR,silent:Pt.SILENT},i2=Pt.INFO,r2={[Pt.DEBUG]:"log",[Pt.VERBOSE]:"log",[Pt.INFO]:"info",[Pt.WARN]:"warn",[Pt.ERROR]:"error"},a2=(i,t,...n)=>{if(t<i.logLevel)return;const a=new Date().toISOString(),o=r2[t];if(o)console[o](`[${a}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class zp{constructor(t){this.name=t,this._logLevel=i2,this._logHandler=a2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Pt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?n2[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Pt.DEBUG,...t),this._logHandler(this,Pt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Pt.VERBOSE,...t),this._logHandler(this,Pt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Pt.INFO,...t),this._logHandler(this,Pt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Pt.WARN,...t),this._logHandler(this,Pt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Pt.ERROR,...t),this._logHandler(this,Pt.ERROR,...t)}}const s2=(i,t)=>t.some(n=>i instanceof n);let r0,a0;function o2(){return r0||(r0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l2(){return a0||(a0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const CT=new WeakMap,qm=new WeakMap,IT=new WeakMap,Am=new WeakMap,Bp=new WeakMap;function u2(i){const t=new Promise((n,a)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{n(ta(i.result)),o()},h=()=>{a(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return t.then(n=>{n instanceof IDBCursor&&CT.set(n,i)}).catch(()=>{}),Bp.set(t,i),t}function c2(i){if(qm.has(i))return;const t=new Promise((n,a)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{n(),o()},h=()=>{a(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});qm.set(i,t)}let Gm={get(i,t,n){if(i instanceof IDBTransaction){if(t==="done")return qm.get(i);if(t==="objectStoreNames")return i.objectStoreNames||IT.get(i);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ta(i[t])},set(i,t,n){return i[t]=n,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function f2(i){Gm=i(Gm)}function h2(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const a=i.call(Sm(this),t,...n);return IT.set(a,t.sort?t.sort():[t]),ta(a)}:l2().includes(i)?function(...t){return i.apply(Sm(this),t),ta(CT.get(this))}:function(...t){return ta(i.apply(Sm(this),t))}}function d2(i){return typeof i=="function"?h2(i):(i instanceof IDBTransaction&&c2(i),s2(i,o2())?new Proxy(i,Gm):i)}function ta(i){if(i instanceof IDBRequest)return u2(i);if(Am.has(i))return Am.get(i);const t=d2(i);return t!==i&&(Am.set(i,t),Bp.set(t,i)),t}const Sm=i=>Bp.get(i);function m2(i,t,{blocked:n,upgrade:a,blocking:o,terminated:u}={}){const h=indexedDB.open(i,t),m=ta(h);return a&&h.addEventListener("upgradeneeded",p=>{a(ta(h.result),p.oldVersion,p.newVersion,ta(h.transaction),p)}),n&&h.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const p2=["get","getKey","getAll","getAllKeys","count"],g2=["put","add","delete","clear"],wm=new Map;function s0(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(wm.get(t))return wm.get(t);const n=t.replace(/FromIndex$/,""),a=t!==n,o=g2.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(o||p2.includes(n)))return;const u=async function(h,...m){const p=this.transaction(h,o?"readwrite":"readonly");let y=p.store;return a&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&p.done]))[0]};return wm.set(t,u),u}f2(i=>({...i,get:(t,n,a)=>s0(t,n)||i.get(t,n,a),has:(t,n)=>!!s0(t,n)||i.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(v2(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function v2(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Km="@firebase/app",o0="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new zp("@firebase/app"),_2="@firebase/app-compat",E2="@firebase/analytics-compat",T2="@firebase/analytics",b2="@firebase/app-check-compat",A2="@firebase/app-check",S2="@firebase/auth",w2="@firebase/auth-compat",R2="@firebase/database",C2="@firebase/data-connect",I2="@firebase/database-compat",O2="@firebase/functions",D2="@firebase/functions-compat",N2="@firebase/installations",x2="@firebase/installations-compat",M2="@firebase/messaging",P2="@firebase/messaging-compat",k2="@firebase/performance",V2="@firebase/performance-compat",L2="@firebase/remote-config",U2="@firebase/remote-config-compat",z2="@firebase/storage",B2="@firebase/storage-compat",j2="@firebase/firestore",H2="@firebase/vertexai",F2="@firebase/firestore-compat",q2="firebase",G2="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="[DEFAULT]",K2={[Km]:"fire-core",[_2]:"fire-core-compat",[T2]:"fire-analytics",[E2]:"fire-analytics-compat",[A2]:"fire-app-check",[b2]:"fire-app-check-compat",[S2]:"fire-auth",[w2]:"fire-auth-compat",[R2]:"fire-rtdb",[C2]:"fire-data-connect",[I2]:"fire-rtdb-compat",[O2]:"fire-fn",[D2]:"fire-fn-compat",[N2]:"fire-iid",[x2]:"fire-iid-compat",[M2]:"fire-fcm",[P2]:"fire-fcm-compat",[k2]:"fire-perf",[V2]:"fire-perf-compat",[L2]:"fire-rc",[U2]:"fire-rc-compat",[z2]:"fire-gcs",[B2]:"fire-gcs-compat",[j2]:"fire-fst",[F2]:"fire-fst-compat",[H2]:"fire-vertex","fire-js":"fire-js",[q2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=new Map,Y2=new Map,Qm=new Map;function l0(i,t){try{i.container.addComponent(t)}catch(n){nr.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,n)}}function mo(i){const t=i.name;if(Qm.has(t))return nr.debug(`There were multiple attempts to register component ${t}.`),!1;Qm.set(t,i);for(const n of bf.values())l0(n,i);for(const n of Y2.values())l0(n,i);return!0}function jp(i,t){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(t)}function Gn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ea=new gu("app","Firebase",Q2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(t,n,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Ja("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ea.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=G2;function OT(i,t={}){let n=i;typeof t!="object"&&(t={name:t});const a=Object.assign({name:Ym,automaticDataCollectionEnabled:!1},t),o=a.name;if(typeof o!="string"||!o)throw ea.create("bad-app-name",{appName:String(o)});if(n||(n=wT()),!n)throw ea.create("no-options");const u=bf.get(o);if(u){if(Tf(n,u.options)&&Tf(a,u.config))return u;throw ea.create("duplicate-app",{appName:o})}const h=new e2(o);for(const p of Qm.values())h.addComponent(p);const m=new $2(n,a,h);return bf.set(o,m),m}function DT(i=Ym){const t=bf.get(i);if(!t&&i===Ym&&wT())return OT();if(!t)throw ea.create("no-app",{appName:i});return t}function na(i,t,n){var a;let o=(a=K2[i])!==null&&a!==void 0?a:i;n&&(o+=`-${n}`);const u=o.match(/\s|\//),h=t.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${t}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${t}" contains illegal characters (whitespace or "/")`),nr.warn(m.join(" "));return}mo(new Ja(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2="firebase-heartbeat-database",W2=1,eu="firebase-heartbeat-store";let Rm=null;function NT(){return Rm||(Rm=m2(X2,W2,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(eu)}catch(n){console.warn(n)}}}}).catch(i=>{throw ea.create("idb-open",{originalErrorMessage:i.message})})),Rm}async function Z2(i){try{const n=(await NT()).transaction(eu),a=await n.objectStore(eu).get(xT(i));return await n.done,a}catch(t){if(t instanceof ur)nr.warn(t.message);else{const n=ea.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});nr.warn(n.message)}}}async function u0(i,t){try{const a=(await NT()).transaction(eu,"readwrite");await a.objectStore(eu).put(t,xT(i)),await a.done}catch(n){if(n instanceof ur)nr.warn(n.message);else{const a=ea.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});nr.warn(a.message)}}}function xT(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=1024,tC=30;class eC{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iC(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=c0();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>tC){const h=rC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){nr.warn(a)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=c0(),{heartbeatsToSend:a,unsentEntries:o}=nC(this._heartbeatsCache.heartbeats),u=Ef(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return nr.warn(n),""}}}function c0(){return new Date().toISOString().substring(0,10)}function nC(i,t=J2){const n=[];let a=i.slice();for(const o of i){const u=n.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),f0(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),f0(n)>t){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class iC{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return FR()?qR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Z2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return u0(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return u0(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function f0(i){return Ef(JSON.stringify({version:2,heartbeats:i})).length}function rC(i){if(i.length===0)return-1;let t=0,n=i[0].date;for(let a=1;a<i.length;a++)i[a].date<n&&(n=i[a].date,t=a);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(i){mo(new Ja("platform-logger",t=>new y2(t),"PRIVATE")),mo(new Ja("heartbeat",t=>new eC(t),"PRIVATE")),na(Km,o0,i),na(Km,o0,"esm2017"),na("fire-js","")}aC("");var h0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ia,MT;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(x,R){function S(){}S.prototype=R.prototype,x.D=R.prototype,x.prototype=new S,x.prototype.constructor=x,x.C=function(I,P,B){for(var O=Array(arguments.length-2),be=2;be<arguments.length;be++)O[be-2]=arguments[be];return R.prototype[P].apply(I,O)}}function n(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(a,n),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,R,S){S||(S=0);var I=Array(16);if(typeof R=="string")for(var P=0;16>P;++P)I[P]=R.charCodeAt(S++)|R.charCodeAt(S++)<<8|R.charCodeAt(S++)<<16|R.charCodeAt(S++)<<24;else for(P=0;16>P;++P)I[P]=R[S++]|R[S++]<<8|R[S++]<<16|R[S++]<<24;R=x.g[0],S=x.g[1],P=x.g[2];var B=x.g[3],O=R+(B^S&(P^B))+I[0]+3614090360&4294967295;R=S+(O<<7&4294967295|O>>>25),O=B+(P^R&(S^P))+I[1]+3905402710&4294967295,B=R+(O<<12&4294967295|O>>>20),O=P+(S^B&(R^S))+I[2]+606105819&4294967295,P=B+(O<<17&4294967295|O>>>15),O=S+(R^P&(B^R))+I[3]+3250441966&4294967295,S=P+(O<<22&4294967295|O>>>10),O=R+(B^S&(P^B))+I[4]+4118548399&4294967295,R=S+(O<<7&4294967295|O>>>25),O=B+(P^R&(S^P))+I[5]+1200080426&4294967295,B=R+(O<<12&4294967295|O>>>20),O=P+(S^B&(R^S))+I[6]+2821735955&4294967295,P=B+(O<<17&4294967295|O>>>15),O=S+(R^P&(B^R))+I[7]+4249261313&4294967295,S=P+(O<<22&4294967295|O>>>10),O=R+(B^S&(P^B))+I[8]+1770035416&4294967295,R=S+(O<<7&4294967295|O>>>25),O=B+(P^R&(S^P))+I[9]+2336552879&4294967295,B=R+(O<<12&4294967295|O>>>20),O=P+(S^B&(R^S))+I[10]+4294925233&4294967295,P=B+(O<<17&4294967295|O>>>15),O=S+(R^P&(B^R))+I[11]+2304563134&4294967295,S=P+(O<<22&4294967295|O>>>10),O=R+(B^S&(P^B))+I[12]+1804603682&4294967295,R=S+(O<<7&4294967295|O>>>25),O=B+(P^R&(S^P))+I[13]+4254626195&4294967295,B=R+(O<<12&4294967295|O>>>20),O=P+(S^B&(R^S))+I[14]+2792965006&4294967295,P=B+(O<<17&4294967295|O>>>15),O=S+(R^P&(B^R))+I[15]+1236535329&4294967295,S=P+(O<<22&4294967295|O>>>10),O=R+(P^B&(S^P))+I[1]+4129170786&4294967295,R=S+(O<<5&4294967295|O>>>27),O=B+(S^P&(R^S))+I[6]+3225465664&4294967295,B=R+(O<<9&4294967295|O>>>23),O=P+(R^S&(B^R))+I[11]+643717713&4294967295,P=B+(O<<14&4294967295|O>>>18),O=S+(B^R&(P^B))+I[0]+3921069994&4294967295,S=P+(O<<20&4294967295|O>>>12),O=R+(P^B&(S^P))+I[5]+3593408605&4294967295,R=S+(O<<5&4294967295|O>>>27),O=B+(S^P&(R^S))+I[10]+38016083&4294967295,B=R+(O<<9&4294967295|O>>>23),O=P+(R^S&(B^R))+I[15]+3634488961&4294967295,P=B+(O<<14&4294967295|O>>>18),O=S+(B^R&(P^B))+I[4]+3889429448&4294967295,S=P+(O<<20&4294967295|O>>>12),O=R+(P^B&(S^P))+I[9]+568446438&4294967295,R=S+(O<<5&4294967295|O>>>27),O=B+(S^P&(R^S))+I[14]+3275163606&4294967295,B=R+(O<<9&4294967295|O>>>23),O=P+(R^S&(B^R))+I[3]+4107603335&4294967295,P=B+(O<<14&4294967295|O>>>18),O=S+(B^R&(P^B))+I[8]+1163531501&4294967295,S=P+(O<<20&4294967295|O>>>12),O=R+(P^B&(S^P))+I[13]+2850285829&4294967295,R=S+(O<<5&4294967295|O>>>27),O=B+(S^P&(R^S))+I[2]+4243563512&4294967295,B=R+(O<<9&4294967295|O>>>23),O=P+(R^S&(B^R))+I[7]+1735328473&4294967295,P=B+(O<<14&4294967295|O>>>18),O=S+(B^R&(P^B))+I[12]+2368359562&4294967295,S=P+(O<<20&4294967295|O>>>12),O=R+(S^P^B)+I[5]+4294588738&4294967295,R=S+(O<<4&4294967295|O>>>28),O=B+(R^S^P)+I[8]+2272392833&4294967295,B=R+(O<<11&4294967295|O>>>21),O=P+(B^R^S)+I[11]+1839030562&4294967295,P=B+(O<<16&4294967295|O>>>16),O=S+(P^B^R)+I[14]+4259657740&4294967295,S=P+(O<<23&4294967295|O>>>9),O=R+(S^P^B)+I[1]+2763975236&4294967295,R=S+(O<<4&4294967295|O>>>28),O=B+(R^S^P)+I[4]+1272893353&4294967295,B=R+(O<<11&4294967295|O>>>21),O=P+(B^R^S)+I[7]+4139469664&4294967295,P=B+(O<<16&4294967295|O>>>16),O=S+(P^B^R)+I[10]+3200236656&4294967295,S=P+(O<<23&4294967295|O>>>9),O=R+(S^P^B)+I[13]+681279174&4294967295,R=S+(O<<4&4294967295|O>>>28),O=B+(R^S^P)+I[0]+3936430074&4294967295,B=R+(O<<11&4294967295|O>>>21),O=P+(B^R^S)+I[3]+3572445317&4294967295,P=B+(O<<16&4294967295|O>>>16),O=S+(P^B^R)+I[6]+76029189&4294967295,S=P+(O<<23&4294967295|O>>>9),O=R+(S^P^B)+I[9]+3654602809&4294967295,R=S+(O<<4&4294967295|O>>>28),O=B+(R^S^P)+I[12]+3873151461&4294967295,B=R+(O<<11&4294967295|O>>>21),O=P+(B^R^S)+I[15]+530742520&4294967295,P=B+(O<<16&4294967295|O>>>16),O=S+(P^B^R)+I[2]+3299628645&4294967295,S=P+(O<<23&4294967295|O>>>9),O=R+(P^(S|~B))+I[0]+4096336452&4294967295,R=S+(O<<6&4294967295|O>>>26),O=B+(S^(R|~P))+I[7]+1126891415&4294967295,B=R+(O<<10&4294967295|O>>>22),O=P+(R^(B|~S))+I[14]+2878612391&4294967295,P=B+(O<<15&4294967295|O>>>17),O=S+(B^(P|~R))+I[5]+4237533241&4294967295,S=P+(O<<21&4294967295|O>>>11),O=R+(P^(S|~B))+I[12]+1700485571&4294967295,R=S+(O<<6&4294967295|O>>>26),O=B+(S^(R|~P))+I[3]+2399980690&4294967295,B=R+(O<<10&4294967295|O>>>22),O=P+(R^(B|~S))+I[10]+4293915773&4294967295,P=B+(O<<15&4294967295|O>>>17),O=S+(B^(P|~R))+I[1]+2240044497&4294967295,S=P+(O<<21&4294967295|O>>>11),O=R+(P^(S|~B))+I[8]+1873313359&4294967295,R=S+(O<<6&4294967295|O>>>26),O=B+(S^(R|~P))+I[15]+4264355552&4294967295,B=R+(O<<10&4294967295|O>>>22),O=P+(R^(B|~S))+I[6]+2734768916&4294967295,P=B+(O<<15&4294967295|O>>>17),O=S+(B^(P|~R))+I[13]+1309151649&4294967295,S=P+(O<<21&4294967295|O>>>11),O=R+(P^(S|~B))+I[4]+4149444226&4294967295,R=S+(O<<6&4294967295|O>>>26),O=B+(S^(R|~P))+I[11]+3174756917&4294967295,B=R+(O<<10&4294967295|O>>>22),O=P+(R^(B|~S))+I[2]+718787259&4294967295,P=B+(O<<15&4294967295|O>>>17),O=S+(B^(P|~R))+I[9]+3951481745&4294967295,x.g[0]=x.g[0]+R&4294967295,x.g[1]=x.g[1]+(P+(O<<21&4294967295|O>>>11))&4294967295,x.g[2]=x.g[2]+P&4294967295,x.g[3]=x.g[3]+B&4294967295}a.prototype.u=function(x,R){R===void 0&&(R=x.length);for(var S=R-this.blockSize,I=this.B,P=this.h,B=0;B<R;){if(P==0)for(;B<=S;)o(this,x,B),B+=this.blockSize;if(typeof x=="string"){for(;B<R;)if(I[P++]=x.charCodeAt(B++),P==this.blockSize){o(this,I),P=0;break}}else for(;B<R;)if(I[P++]=x[B++],P==this.blockSize){o(this,I),P=0;break}}this.h=P,this.o+=R},a.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var R=1;R<x.length-8;++R)x[R]=0;var S=8*this.o;for(R=x.length-8;R<x.length;++R)x[R]=S&255,S/=256;for(this.u(x),x=Array(16),R=S=0;4>R;++R)for(var I=0;32>I;I+=8)x[S++]=this.g[R]>>>I&255;return x};function u(x,R){var S=m;return Object.prototype.hasOwnProperty.call(S,x)?S[x]:S[x]=R(x)}function h(x,R){this.h=R;for(var S=[],I=!0,P=x.length-1;0<=P;P--){var B=x[P]|0;I&&B==R||(S[P]=B,I=!1)}this.g=S}var m={};function p(x){return-128<=x&&128>x?u(x,function(R){return new h([R|0],0>R?-1:0)}):new h([x|0],0>x?-1:0)}function y(x){if(isNaN(x)||!isFinite(x))return A;if(0>x)return z(y(-x));for(var R=[],S=1,I=0;x>=S;I++)R[I]=x/S|0,S*=4294967296;return new h(R,0)}function E(x,R){if(x.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(x.charAt(0)=="-")return z(E(x.substring(1),R));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=y(Math.pow(R,8)),I=A,P=0;P<x.length;P+=8){var B=Math.min(8,x.length-P),O=parseInt(x.substring(P,P+B),R);8>B?(B=y(Math.pow(R,B)),I=I.j(B).add(y(O))):(I=I.j(S),I=I.add(y(O)))}return I}var A=p(0),w=p(1),D=p(16777216);i=h.prototype,i.m=function(){if(K(this))return-z(this).m();for(var x=0,R=1,S=0;S<this.g.length;S++){var I=this.i(S);x+=(0<=I?I:4294967296+I)*R,R*=4294967296}return x},i.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(V(this))return"0";if(K(this))return"-"+z(this).toString(x);for(var R=y(Math.pow(x,6)),S=this,I="";;){var P=ct(S,R).g;S=q(S,P.j(R));var B=((0<S.g.length?S.g[0]:S.h)>>>0).toString(x);if(S=P,V(S))return B+I;for(;6>B.length;)B="0"+B;I=B+I}},i.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function V(x){if(x.h!=0)return!1;for(var R=0;R<x.g.length;R++)if(x.g[R]!=0)return!1;return!0}function K(x){return x.h==-1}i.l=function(x){return x=q(this,x),K(x)?-1:V(x)?0:1};function z(x){for(var R=x.g.length,S=[],I=0;I<R;I++)S[I]=~x.g[I];return new h(S,~x.h).add(w)}i.abs=function(){return K(this)?z(this):this},i.add=function(x){for(var R=Math.max(this.g.length,x.g.length),S=[],I=0,P=0;P<=R;P++){var B=I+(this.i(P)&65535)+(x.i(P)&65535),O=(B>>>16)+(this.i(P)>>>16)+(x.i(P)>>>16);I=O>>>16,B&=65535,O&=65535,S[P]=O<<16|B}return new h(S,S[S.length-1]&-2147483648?-1:0)};function q(x,R){return x.add(z(R))}i.j=function(x){if(V(this)||V(x))return A;if(K(this))return K(x)?z(this).j(z(x)):z(z(this).j(x));if(K(x))return z(this.j(z(x)));if(0>this.l(D)&&0>x.l(D))return y(this.m()*x.m());for(var R=this.g.length+x.g.length,S=[],I=0;I<2*R;I++)S[I]=0;for(I=0;I<this.g.length;I++)for(var P=0;P<x.g.length;P++){var B=this.i(I)>>>16,O=this.i(I)&65535,be=x.i(P)>>>16,ge=x.i(P)&65535;S[2*I+2*P]+=O*ge,Z(S,2*I+2*P),S[2*I+2*P+1]+=B*ge,Z(S,2*I+2*P+1),S[2*I+2*P+1]+=O*be,Z(S,2*I+2*P+1),S[2*I+2*P+2]+=B*be,Z(S,2*I+2*P+2)}for(I=0;I<R;I++)S[I]=S[2*I+1]<<16|S[2*I];for(I=R;I<2*R;I++)S[I]=0;return new h(S,0)};function Z(x,R){for(;(x[R]&65535)!=x[R];)x[R+1]+=x[R]>>>16,x[R]&=65535,R++}function W(x,R){this.g=x,this.h=R}function ct(x,R){if(V(R))throw Error("division by zero");if(V(x))return new W(A,A);if(K(x))return R=ct(z(x),R),new W(z(R.g),z(R.h));if(K(R))return R=ct(x,z(R)),new W(z(R.g),R.h);if(30<x.g.length){if(K(x)||K(R))throw Error("slowDivide_ only works with positive integers.");for(var S=w,I=R;0>=I.l(x);)S=at(S),I=at(I);var P=At(S,1),B=At(I,1);for(I=At(I,2),S=At(S,2);!V(I);){var O=B.add(I);0>=O.l(x)&&(P=P.add(S),B=O),I=At(I,1),S=At(S,1)}return R=q(x,P.j(R)),new W(P,R)}for(P=A;0<=x.l(R);){for(S=Math.max(1,Math.floor(x.m()/R.m())),I=Math.ceil(Math.log(S)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),B=y(S),O=B.j(R);K(O)||0<O.l(x);)S-=I,B=y(S),O=B.j(R);V(B)&&(B=w),P=P.add(B),x=q(x,O)}return new W(P,x)}i.A=function(x){return ct(this,x).h},i.and=function(x){for(var R=Math.max(this.g.length,x.g.length),S=[],I=0;I<R;I++)S[I]=this.i(I)&x.i(I);return new h(S,this.h&x.h)},i.or=function(x){for(var R=Math.max(this.g.length,x.g.length),S=[],I=0;I<R;I++)S[I]=this.i(I)|x.i(I);return new h(S,this.h|x.h)},i.xor=function(x){for(var R=Math.max(this.g.length,x.g.length),S=[],I=0;I<R;I++)S[I]=this.i(I)^x.i(I);return new h(S,this.h^x.h)};function at(x){for(var R=x.g.length+1,S=[],I=0;I<R;I++)S[I]=x.i(I)<<1|x.i(I-1)>>>31;return new h(S,x.h)}function At(x,R){var S=R>>5;R%=32;for(var I=x.g.length-S,P=[],B=0;B<I;B++)P[B]=0<R?x.i(B+S)>>>R|x.i(B+S+1)<<32-R:x.i(B+S);return new h(P,x.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,MT=a,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=E,ia=h}).apply(typeof h0<"u"?h0:typeof self<"u"?self:typeof window<"u"?window:{});var $c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var PT,Fl,kT,of,$m,VT,LT,UT;(function(){var i,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,v){return c==Array.prototype||c==Object.prototype||(c[g]=v.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof $c=="object"&&$c];for(var g=0;g<c.length;++g){var v=c[g];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var a=n(this);function o(c,g){if(g)t:{var v=a;c=c.split(".");for(var b=0;b<c.length-1;b++){var U=c[b];if(!(U in v))break t;v=v[U]}c=c[c.length-1],b=v[c],g=g(b),g!=b&&g!=null&&t(v,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var v=0,b=!1,U={next:function(){if(!b&&v<c.length){var F=v++;return{value:g(F,c[F]),done:!1}}return b=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function p(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function y(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function E(c,g,v){return c.call.apply(c.bind,arguments)}function A(c,g,v){if(!c)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,b),c.apply(g,U)}}return function(){return c.apply(g,arguments)}}function w(c,g,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:A,w.apply(null,arguments)}function D(c,g){var v=Array.prototype.slice.call(arguments,1);return function(){var b=v.slice();return b.push.apply(b,arguments),c.apply(this,b)}}function V(c,g){function v(){}v.prototype=g.prototype,c.aa=g.prototype,c.prototype=new v,c.prototype.constructor=c,c.Qb=function(b,U,F){for(var it=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)it[Ut-2]=arguments[Ut];return g.prototype[U].apply(b,it)}}function K(c){const g=c.length;if(0<g){const v=Array(g);for(let b=0;b<g;b++)v[b]=c[b];return v}return[]}function z(c,g){for(let v=1;v<arguments.length;v++){const b=arguments[v];if(p(b)){const U=c.length||0,F=b.length||0;c.length=U+F;for(let it=0;it<F;it++)c[U+it]=b[it]}else c.push(b)}}class q{constructor(g,v){this.i=g,this.j=v,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function Z(c){return/^[\s\xa0]*$/.test(c)}function W(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function ct(c){return ct[" "](c),c}ct[" "]=function(){};var at=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function At(c,g,v){for(const b in c)g.call(v,c[b],b,c)}function x(c,g){for(const v in c)g.call(void 0,c[v],v,c)}function R(c){const g={};for(const v in c)g[v]=c[v];return g}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(c,g){let v,b;for(let U=1;U<arguments.length;U++){b=arguments[U];for(v in b)c[v]=b[v];for(let F=0;F<S.length;F++)v=S[F],Object.prototype.hasOwnProperty.call(b,v)&&(c[v]=b[v])}}function P(c){var g=1;c=c.split(":");const v=[];for(;0<g&&c.length;)v.push(c.shift()),g--;return c.length&&v.push(c.join(":")),v}function B(c){m.setTimeout(()=>{throw c},0)}function O(){var c=Kt;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class be{constructor(){this.h=this.g=null}add(g,v){const b=ge.get();b.set(g,v),this.h?this.h.next=b:this.g=b,this.h=b}}var ge=new q(()=>new rt,c=>c.reset());class rt{constructor(){this.next=this.g=this.h=null}set(g,v){this.h=g,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let _t,pt=!1,Kt=new be,N=()=>{const c=m.Promise.resolve(void 0);_t=()=>{c.then(et)}};var et=()=>{for(var c;c=O();){try{c.h.call(c.g)}catch(v){B(v)}var g=ge;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}pt=!1};function ht(){this.s=this.s,this.C=this.C}ht.prototype.s=!1,ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function st(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var ot=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};m.addEventListener("test",v,g),m.removeEventListener("test",v,g)}catch{}return c}();function Ot(c,g){if(st.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var v=this.type=c.type,b=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(at){t:{try{ct(g.nodeName);var U=!0;break t}catch{}U=!1}U||(g=null)}}else v=="mouseover"?g=c.fromElement:v=="mouseout"&&(g=c.toElement);this.relatedTarget=g,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ct[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ot.aa.h.call(this)}}V(Ot,st);var Ct={2:"touch",3:"pen",4:"mouse"};Ot.prototype.h=function(){Ot.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ye="closure_listenable_"+(1e6*Math.random()|0),Ht=0;function le(c,g,v,b,U){this.listener=c,this.proxy=null,this.src=g,this.type=v,this.capture=!!b,this.ha=U,this.key=++Ht,this.da=this.fa=!1}function $t(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function en(c){this.src=c,this.g={},this.h=0}en.prototype.add=function(c,g,v,b,U){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var it=En(c,g,b,U);return-1<it?(g=c[it],v||(g.fa=!1)):(g=new le(g,this.src,F,!!b,U),g.fa=v,c.push(g)),g};function Si(c,g){var v=g.type;if(v in c.g){var b=c.g[v],U=Array.prototype.indexOf.call(b,g,void 0),F;(F=0<=U)&&Array.prototype.splice.call(b,U,1),F&&($t(g),c.g[v].length==0&&(delete c.g[v],c.h--))}}function En(c,g,v,b){for(var U=0;U<c.length;++U){var F=c[U];if(!F.da&&F.listener==g&&F.capture==!!v&&F.ha==b)return U}return-1}var fr="closure_lm_"+(1e6*Math.random()|0),hr={};function wi(c,g,v,b,U){if(Array.isArray(g)){for(var F=0;F<g.length;F++)wi(c,g[F],v,b,U);return null}return v=Cu(v),c&&c[ye]?c.K(g,v,y(b)?!!b.capture:!1,U):Mo(c,g,v,!1,b,U)}function Mo(c,g,v,b,U,F){if(!g)throw Error("Invalid event type");var it=y(U)?!!U.capture:!!U,Ut=Po(c);if(Ut||(c[fr]=Ut=new en(c)),v=Ut.add(g,v,b,it,F),v.proxy)return v;if(b=cs(),v.proxy=b,b.src=c,b.listener=v,c.addEventListener)ot||(U=it),U===void 0&&(U=!1),c.addEventListener(g.toString(),b,U);else if(c.attachEvent)c.attachEvent(hs(g.toString()),b);else if(c.addListener&&c.removeListener)c.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return v}function cs(){function c(v){return g.call(c.src,c.listener,v)}const g=gh;return c}function fs(c,g,v,b,U){if(Array.isArray(g))for(var F=0;F<g.length;F++)fs(c,g[F],v,b,U);else b=y(b)?!!b.capture:!!b,v=Cu(v),c&&c[ye]?(c=c.i,g=String(g).toString(),g in c.g&&(F=c.g[g],v=En(F,v,b,U),-1<v&&($t(F[v]),Array.prototype.splice.call(F,v,1),F.length==0&&(delete c.g[g],c.h--)))):c&&(c=Po(c))&&(g=c.g[g.toString()],c=-1,g&&(c=En(g,v,b,U)),(v=-1<c?g[c]:null)&&ga(v))}function ga(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[ye])Si(g.i,c);else{var v=c.type,b=c.proxy;g.removeEventListener?g.removeEventListener(v,b,c.capture):g.detachEvent?g.detachEvent(hs(v),b):g.addListener&&g.removeListener&&g.removeListener(b),(v=Po(g))?(Si(v,c),v.h==0&&(v.src=null,g[fr]=null)):$t(c)}}}function hs(c){return c in hr?hr[c]:hr[c]="on"+c}function gh(c,g){if(c.da)c=!0;else{g=new Ot(g,this);var v=c.listener,b=c.ha||c.src;c.fa&&ga(c),c=v.call(b,g)}return c}function Po(c){return c=c[fr],c instanceof en?c:null}var ln="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cu(c){return typeof c=="function"?c:(c[ln]||(c[ln]=function(g){return c.handleEvent(g)}),c[ln])}function Ae(){ht.call(this),this.i=new en(this),this.M=this,this.F=null}V(Ae,ht),Ae.prototype[ye]=!0,Ae.prototype.removeEventListener=function(c,g,v,b){fs(this,c,g,v,b)};function xe(c,g){var v,b=c.F;if(b)for(v=[];b;b=b.F)v.push(b);if(c=c.M,b=g.type||g,typeof g=="string")g=new st(g,c);else if(g instanceof st)g.target=g.target||c;else{var U=g;g=new st(b,c),I(g,U)}if(U=!0,v)for(var F=v.length-1;0<=F;F--){var it=g.g=v[F];U=Ri(it,b,!0,g)&&U}if(it=g.g=c,U=Ri(it,b,!0,g)&&U,U=Ri(it,b,!1,g)&&U,v)for(F=0;F<v.length;F++)it=g.g=v[F],U=Ri(it,b,!1,g)&&U}Ae.prototype.N=function(){if(Ae.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var v=c.g[g],b=0;b<v.length;b++)$t(v[b]);delete c.g[g],c.h--}}this.F=null},Ae.prototype.K=function(c,g,v,b){return this.i.add(String(c),g,!1,v,b)},Ae.prototype.L=function(c,g,v,b){return this.i.add(String(c),g,!0,v,b)};function Ri(c,g,v,b){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var U=!0,F=0;F<g.length;++F){var it=g[F];if(it&&!it.da&&it.capture==v){var Ut=it.listener,we=it.ha||it.src;it.fa&&Si(c.i,it),U=Ut.call(we,b)!==!1&&U}}return U&&!b.defaultPrevented}function Iu(c,g,v){if(typeof c=="function")v&&(c=w(c,v));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(c,g||0)}function ko(c){c.g=Iu(()=>{c.g=null,c.i&&(c.i=!1,ko(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class yh extends ht{constructor(g,v){super(),this.m=g,this.l=v,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:ko(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ya(c){ht.call(this),this.h=c,this.g={}}V(ya,ht);var dr=[];function Ye(c){At(c.g,function(g,v){this.g.hasOwnProperty(v)&&ga(g)},c),c.g={}}ya.prototype.N=function(){ya.aa.N.call(this),Ye(this)},ya.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vo=m.JSON.stringify,$n=m.JSON.parse,nn=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function Lo(){}Lo.prototype.h=null;function Ou(c){return c.h||(c.h=c.i())}function Du(){}var Xn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mr(){st.call(this,"d")}V(mr,st);function zn(){st.call(this,"c")}V(zn,st);var Tn={},pr=null;function ds(){return pr=pr||new Ae}Tn.La="serverreachability";function Uo(c){st.call(this,Tn.La,c)}V(Uo,st);function gr(c){const g=ds();xe(g,new Uo(g))}Tn.STAT_EVENT="statevent";function ms(c,g){st.call(this,Tn.STAT_EVENT,c),this.stat=g}V(ms,st);function de(c){const g=ds();xe(g,new ms(g,c))}Tn.Ma="timingevent";function Nu(c,g){st.call(this,Tn.Ma,c),this.size=g}V(Nu,st);function yr(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},g)}function vr(){this.g=!0}vr.prototype.xa=function(){this.g=!1};function xu(c,g,v,b,U,F){c.info(function(){if(c.g)if(F)for(var it="",Ut=F.split("&"),we=0;we<Ut.length;we++){var zt=Ut[we].split("=");if(1<zt.length){var ke=zt[0];zt=zt[1];var Re=ke.split("_");it=2<=Re.length&&Re[1]=="type"?it+(ke+"="+zt+"&"):it+(ke+"=redacted&")}}else it=null;else it=F;return"XMLHTTP REQ ("+b+") [attempt "+U+"]: "+g+`
`+v+`
`+it})}function Mu(c,g,v,b,U,F,it){c.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+U+"]: "+g+`
`+v+`
`+F+" "+it})}function _r(c,g,v,b){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Me(c,v)+(b?" "+b:"")})}function Wn(c,g){c.info(function(){return"TIMEOUT: "+g})}vr.prototype.info=function(){};function Me(c,g){if(!c.g)return g;if(!g)return null;try{var v=JSON.parse(g);if(v){for(c=0;c<v.length;c++)if(Array.isArray(v[c])){var b=v[c];if(!(2>b.length)){var U=b[1];if(Array.isArray(U)&&!(1>U.length)){var F=U[0];if(F!="noop"&&F!="stop"&&F!="close")for(var it=1;it<U.length;it++)U[it]=""}}}}return Vo(v)}catch{return g}}var Se={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ci={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},va;function ps(){}V(ps,Lo),ps.prototype.g=function(){return new XMLHttpRequest},ps.prototype.i=function(){return{}},va=new ps;function Zn(c,g,v,b){this.j=c,this.i=g,this.l=v,this.R=b||1,this.U=new ya(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zo}function zo(){this.i=null,this.g="",this.h=!1}var Er={},_a={};function Bn(c,g,v){c.L=1,c.v=ba(ue(g)),c.m=v,c.P=!0,Ii(c,null)}function Ii(c,g){c.F=Date.now(),ie(c),c.A=ue(c.v);var v=c.A,b=c.R;Array.isArray(b)||(b=[String(b)]),Ni(v.i,"t",b),c.C=0,v=c.j.J,c.h=new zo,c.g=Yu(c.j,v?g:null,!c.m),0<c.O&&(c.M=new yh(w(c.Y,c,c.g),c.O)),g=c.U,v=c.g,b=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(dr[0]=U.toString()),U=dr);for(var F=0;F<U.length;F++){var it=wi(v,U[F],b||g.handleEvent,!1,g.h||g);if(!it)break;g.g[it.key]=it}g=c.H?R(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),gr(),xu(c.i,c.u,c.A,c.l,c.R,c.m)}Zn.prototype.ca=function(c){c=c.target;const g=this.M;g&&Rn(c)==3?g.j():this.Y(c)},Zn.prototype.Y=function(c){try{if(c==this.g)t:{const Re=Rn(this.g);var g=this.g.Ba();const ki=this.g.Z();if(!(3>Re)&&(Re!=3||this.g&&(this.h.h||this.g.oa()||zu(this.g)))){this.J||Re!=4||g==7||(g==8||0>=ki?gr(3):gr(2)),gs(this);var v=this.g.Z();this.X=v;e:if(Tr(this)){var b=zu(this.g);c="";var U=b.length,F=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),hn(this);var it="";break e}this.h.i=new m.TextDecoder}for(g=0;g<U;g++)this.h.h=!0,c+=this.h.i.decode(b[g],{stream:!(F&&g==U-1)});b.length=0,this.h.g+=c,this.C=0,it=this.h.g}else it=this.g.oa();if(this.o=v==200,Mu(this.i,this.u,this.A,this.l,this.R,Re,v),this.o){if(this.T&&!this.K){e:{if(this.g){var Ut,we=this.g;if((Ut=we.g?we.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z(Ut)){var zt=Ut;break e}}zt=null}if(v=zt)_r(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dn(this,v);else{this.o=!1,this.s=3,de(12),un(this),hn(this);break t}}if(this.P){v=!0;let Be;for(;!this.J&&this.C<it.length;)if(Be=br(this,it),Be==_a){Re==4&&(this.s=4,de(14),v=!1),_r(this.i,this.l,null,"[Incomplete Response]");break}else if(Be==Er){this.s=4,de(15),_r(this.i,this.l,it,"[Invalid Chunk]"),v=!1;break}else _r(this.i,this.l,Be,null),dn(this,Be);if(Tr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||it.length!=0||this.h.h||(this.s=1,de(16),v=!1),this.o=this.o&&v,!v)_r(this.i,this.l,it,"[Invalid Chunked Response]"),un(this),hn(this);else if(0<it.length&&!this.W){this.W=!0;var ke=this.j;ke.g==this&&ke.ba&&!ke.M&&(ke.j.info("Great, no buffering proxy detected. Bytes received: "+it.length),Oa(ke),ke.M=!0,de(11))}}else _r(this.i,this.l,it,null),dn(this,it);Re==4&&un(this),this.o&&!this.J&&(Re==4?qu(this.j,this):(this.o=!1,ie(this)))}else Ah(this.g),v==400&&0<it.indexOf("Unknown SID")?(this.s=3,de(12)):(this.s=0,de(13)),un(this),hn(this)}}}catch{}finally{}};function Tr(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function br(c,g){var v=c.C,b=g.indexOf(`
`,v);return b==-1?_a:(v=Number(g.substring(v,b)),isNaN(v)?Er:(b+=1,b+v>g.length?_a:(g=g.slice(b,b+v),c.C=b+v,g)))}Zn.prototype.cancel=function(){this.J=!0,un(this)};function ie(c){c.S=Date.now()+c.I,Bo(c,c.I)}function Bo(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=yr(w(c.ba,c),g)}function gs(c){c.B&&(m.clearTimeout(c.B),c.B=null)}Zn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Wn(this.i,this.A),this.L!=2&&(gr(),de(17)),un(this),this.s=2,hn(this)):Bo(this,this.S-c)};function hn(c){c.j.G==0||c.J||qu(c.j,c)}function un(c){gs(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,Ye(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function dn(c,g){try{var v=c.j;if(v.G!=0&&(v.g==c||Ar(v.h,c))){if(!c.K&&Ar(v.h,c)&&v.G==3){try{var b=v.Da.g.parse(g)}catch{b=null}if(Array.isArray(b)&&b.length==3){var U=b;if(U[0]==0){t:if(!v.u){if(v.g)if(v.g.F+3e3<c.F)Rs(v),Ss(v);else break t;Wo(v),de(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=yr(w(v.Za,v),6e3));if(1>=Pu(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Pi(v,11)}else if((c.K||v.g==c)&&Rs(v),!Z(g))for(U=v.Da.g.parse(g),g=0;g<U.length;g++){let zt=U[g];if(v.T=zt[0],zt=zt[1],v.G==2)if(zt[0]=="c"){v.K=zt[1],v.ia=zt[2];const ke=zt[3];ke!=null&&(v.la=ke,v.j.info("VER="+v.la));const Re=zt[4];Re!=null&&(v.Aa=Re,v.j.info("SVER="+v.Aa));const ki=zt[5];ki!=null&&typeof ki=="number"&&0<ki&&(b=1.5*ki,v.L=b,v.j.info("backChannelRequestTimeoutMs_="+b)),b=v;const Be=c.g;if(Be){const ai=Be.g?Be.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ai){var F=b.h;F.g||ai.indexOf("spdy")==-1&&ai.indexOf("quic")==-1&&ai.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Sr(F,F.h),F.h=null))}if(b.D){const Jo=Be.g?Be.g.getResponseHeader("X-HTTP-Session-Id"):null;Jo&&(b.ya=Jo,Ft(b.I,b.D,Jo))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-c.F,v.j.info("Handshake RTT: "+v.R+"ms")),b=v;var it=c;if(b.qa=Ku(b,b.J?b.ia:null,b.W),it.K){bn(b.h,it);var Ut=it,we=b.L;we&&(Ut.I=we),Ut.B&&(gs(Ut),ie(Ut)),b.g=it}else Hu(b);0<v.i.length&&ws(v)}else zt[0]!="stop"&&zt[0]!="close"||Pi(v,7);else v.G==3&&(zt[0]=="stop"||zt[0]=="close"?zt[0]=="stop"?Pi(v,7):$o(v):zt[0]!="noop"&&v.l&&v.l.ta(zt),v.v=0)}}gr(4)}catch{}}var vh=class{constructor(c,g){this.g=c,this.map=g}};function jo(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ho(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Pu(c){return c.h?1:c.g?c.g.size:0}function Ar(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function Sr(c,g){c.g?c.g.add(g):c.h=g}function bn(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}jo.prototype.cancel=function(){if(this.i=rn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function rn(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const v of c.g.values())g=g.concat(v.D);return g}return K(c.i)}function ku(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var g=[],v=c.length,b=0;b<v;b++)g.push(c[b]);return g}g=[],v=0;for(b in c)g[v++]=c[b];return g}function _h(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var g=[];c=c.length;for(var v=0;v<c;v++)g.push(v);return g}g=[],v=0;for(const b in c)g[v++]=b;return g}}}function Ea(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var v=_h(c),b=ku(c),U=b.length,F=0;F<U;F++)g.call(void 0,b[F],v&&v[F],c)}var Fo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ys(c,g){if(c){c=c.split("&");for(var v=0;v<c.length;v++){var b=c[v].indexOf("="),U=null;if(0<=b){var F=c[v].substring(0,b);U=c[v].substring(b+1)}else F=c[v];g(F,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Oi(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Oi){this.h=c.h,wr(this,c.j),this.o=c.o,this.g=c.g,Ta(this,c.s),this.l=c.l;var g=c.i,v=new Jn;v.i=g.i,g.g&&(v.g=new Map(g.g),v.h=g.h),vs(this,v),this.m=c.m}else c&&(g=String(c).match(Fo))?(this.h=!1,wr(this,g[1]||"",!0),this.o=Rr(g[2]||""),this.g=Rr(g[3]||"",!0),Ta(this,g[4]),this.l=Rr(g[5]||"",!0),vs(this,g[6]||"",!0),this.m=Rr(g[7]||"")):(this.h=!1,this.i=new Jn(null,this.h))}Oi.prototype.toString=function(){var c=[],g=this.j;g&&c.push(An(g,qo,!0),":");var v=this.g;return(v||g=="file")&&(c.push("//"),(g=this.o)&&c.push(An(g,qo,!0),"@"),c.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&c.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(An(v,v.charAt(0)=="/"?Go:Vu,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",An(v,bh)),c.join("")};function ue(c){return new Oi(c)}function wr(c,g,v){c.j=v?Rr(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Ta(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function vs(c,g,v){g instanceof Jn?(c.i=g,Ko(c.i,c.h)):(v||(g=An(g,Th)),c.i=new Jn(g,c.h))}function Ft(c,g,v){c.i.set(g,v)}function ba(c){return Ft(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Rr(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function An(c,g,v){return typeof c=="string"?(c=encodeURI(c).replace(g,Eh),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Eh(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var qo=/[#\/\?@]/g,Vu=/[#\?:]/g,Go=/[#\?]/g,Th=/[#\?@]/g,bh=/#/g;function Jn(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Sn(c){c.g||(c.g=new Map,c.h=0,c.i&&ys(c.i,function(g,v){c.add(decodeURIComponent(g.replace(/\+/g," ")),v)}))}i=Jn.prototype,i.add=function(c,g){Sn(this),this.i=null,c=xi(this,c);var v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(g),this.h+=1,this};function _s(c,g){Sn(c),g=xi(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Di(c,g){return Sn(c),g=xi(c,g),c.g.has(g)}i.forEach=function(c,g){Sn(this),this.g.forEach(function(v,b){v.forEach(function(U){c.call(g,U,b,this)},this)},this)},i.na=function(){Sn(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),v=[];for(let b=0;b<g.length;b++){const U=c[b];for(let F=0;F<U.length;F++)v.push(g[b])}return v},i.V=function(c){Sn(this);let g=[];if(typeof c=="string")Di(this,c)&&(g=g.concat(this.g.get(xi(this,c))));else{c=Array.from(this.g.values());for(let v=0;v<c.length;v++)g=g.concat(c[v])}return g},i.set=function(c,g){return Sn(this),this.i=null,c=xi(this,c),Di(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},i.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Ni(c,g,v){_s(c,g),0<v.length&&(c.i=null,c.g.set(xi(c,g),K(v)),c.h+=v.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var v=0;v<g.length;v++){var b=g[v];const F=encodeURIComponent(String(b)),it=this.V(b);for(b=0;b<it.length;b++){var U=F;it[b]!==""&&(U+="="+encodeURIComponent(String(it[b]))),c.push(U)}}return this.i=c.join("&")};function xi(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function Ko(c,g){g&&!c.j&&(Sn(c),c.i=null,c.g.forEach(function(v,b){var U=b.toLowerCase();b!=U&&(_s(this,b),Ni(this,U,v))},c)),c.j=g}function Lu(c,g){const v=new vr;if(m.Image){const b=new Image;b.onload=D(wn,v,"TestLoadImage: loaded",!0,g,b),b.onerror=D(wn,v,"TestLoadImage: error",!1,g,b),b.onabort=D(wn,v,"TestLoadImage: abort",!1,g,b),b.ontimeout=D(wn,v,"TestLoadImage: timeout",!1,g,b),m.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=c}else g(!1)}function Aa(c,g){const v=new vr,b=new AbortController,U=setTimeout(()=>{b.abort(),wn(v,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:b.signal}).then(F=>{clearTimeout(U),F.ok?wn(v,"TestPingServer: ok",!0,g):wn(v,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(U),wn(v,"TestPingServer: error",!1,g)})}function wn(c,g,v,b,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),b(v)}catch{}}function Sa(){this.g=new nn}function ti(c,g,v){const b=v||"";try{Ea(c,function(U,F){let it=U;y(U)&&(it=Vo(U)),g.push(b+F+"="+encodeURIComponent(it))})}catch(U){throw g.push(b+"type="+encodeURIComponent("_badmap")),U}}function Cr(c){this.l=c.Ub||null,this.j=c.eb||!1}V(Cr,Lo),Cr.prototype.g=function(){return new Mi(this.l,this.j)},Cr.prototype.i=function(c){return function(){return c}}({});function Mi(c,g){Ae.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Mi,Ae),i=Mi.prototype,i.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,ni(this)},i.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ei(this)),this.readyState=0},i.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}i.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?ei(this):ni(this),this.readyState==3&&Yo(this)}},i.Ra=function(c){this.g&&(this.response=this.responseText=c,ei(this))},i.Qa=function(c){this.g&&(this.response=c,ei(this))},i.ga=function(){this.g&&ei(this)};function ei(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ni(c)}i.setRequestHeader=function(c,g){this.u.append(c,g)},i.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var v=g.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=g.next();return c.join(`\r
`)};function ni(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Qo(c){let g="";return At(c,function(v,b){g+=b,g+=":",g+=v,g+=`\r
`}),g}function Pe(c,g,v){t:{for(b in v){var b=!1;break t}b=!0}b||(v=Qo(v),typeof c=="string"?v!=null&&encodeURIComponent(String(v)):Ft(c,g,v))}function Yt(c){Ae.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Yt,Ae);var Es=/^https?$/i,wa=["POST","PUT"];i=Yt.prototype,i.Ha=function(c){this.J=c},i.ea=function(c,g,v,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():va.g(),this.v=this.o?Ou(this.o):Ou(va),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(F){Uu(this,F);return}if(c=v||"",v=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var U in b)v.set(U,b[U]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const F of b.keys())v.set(F,b.get(F));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(v.keys()).find(F=>F.toLowerCase()=="content-type"),U=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(wa,g,void 0))||b||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,it]of v)this.g.setRequestHeader(F,it);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ra(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){Uu(this,F)}};function Uu(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Ts(c),ii(c)}function Ts(c){c.A||(c.A=!0,xe(c,"complete"),xe(c,"error"))}i.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,xe(this,"complete"),xe(this,"abort"),ii(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ii(this,!0)),Yt.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?bs(this):this.bb())},i.bb=function(){bs(this)};function bs(c){if(c.h&&typeof h<"u"&&(!c.v[1]||Rn(c)!=4||c.Z()!=2)){if(c.u&&Rn(c)==4)Iu(c.Ea,0,c);else if(xe(c,"readystatechange"),Rn(c)==4){c.h=!1;try{const it=c.Z();t:switch(it){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break t;default:g=!1}var v;if(!(v=g)){var b;if(b=it===0){var U=String(c.D).match(Fo)[1]||null;!U&&m.self&&m.self.location&&(U=m.self.location.protocol.slice(0,-1)),b=!Es.test(U?U.toLowerCase():"")}v=b}if(v)xe(c,"complete"),xe(c,"success");else{c.m=6;try{var F=2<Rn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",Ts(c)}}finally{ii(c)}}}}function ii(c,g){if(c.g){Ra(c);const v=c.g,b=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||xe(c,"ready");try{v.onreadystatechange=b}catch{}}}function Ra(c){c.I&&(m.clearTimeout(c.I),c.I=null)}i.isActive=function(){return!!this.g};function Rn(c){return c.g?c.g.readyState:0}i.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),$n(g)}};function zu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ah(c){const g={};c=(c.g&&2<=Rn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<c.length;b++){if(Z(c[b]))continue;var v=P(c[b]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const F=g[U]||[];g[U]=F,F.push(v)}x(g,function(b){return b.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ca(c,g,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||g}function As(c){this.Aa=0,this.i=[],this.j=new vr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ca("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ca("baseRetryDelayMs",5e3,c),this.cb=Ca("retryDelaySeedMs",1e4,c),this.Wa=Ca("forwardChannelMaxRetries",2,c),this.wa=Ca("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new jo(c&&c.concurrentRequestLimit),this.Da=new Sa,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=As.prototype,i.la=8,i.G=1,i.connect=function(c,g,v,b){de(0),this.W=c,this.H=g||{},v&&b!==void 0&&(this.H.OSID=v,this.H.OAID=b),this.F=this.X,this.I=Ku(this,null,this.W),ws(this)};function $o(c){if(Bu(c),c.G==3){var g=c.U++,v=ue(c.I);if(Ft(v,"SID",c.K),Ft(v,"RID",g),Ft(v,"TYPE","terminate"),Ia(c,v),g=new Zn(c,c.j,g),g.L=2,g.v=ba(ue(v)),v=!1,m.navigator&&m.navigator.sendBeacon)try{v=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!v&&m.Image&&(new Image().src=g.v,v=!0),v||(g.g=Yu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),ie(g)}Gu(c)}function Ss(c){c.g&&(Oa(c),c.g.cancel(),c.g=null)}function Bu(c){Ss(c),c.u&&(m.clearTimeout(c.u),c.u=null),Rs(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function ws(c){if(!Ho(c.h)&&!c.s){c.s=!0;var g=c.Ga;_t||N(),pt||(_t(),pt=!0),Kt.add(g,c),c.B=0}}function Sh(c,g){return Pu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=yr(w(c.Ga,c,g),Zo(c,c.B)),c.B++,!0)}i.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new Zn(this,this.j,c);let F=this.o;if(this.S&&(F?(F=R(F),I(F,this.S)):F=this.S),this.m!==null||this.O||(U.H=F,F=null),this.P)t:{for(var g=0,v=0;v<this.i.length;v++){e:{var b=this.i[v];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break e}b=void 0}if(b===void 0)break;if(g+=b,4096<g){g=v;break t}if(g===4096||v===this.i.length-1){g=v+1;break t}}g=1e3}else g=1e3;g=ju(this,U,g),v=ue(this.I),Ft(v,"RID",c),Ft(v,"CVER",22),this.D&&Ft(v,"X-HTTP-Session-Id",this.D),Ia(this,v),F&&(this.O?g="headers="+encodeURIComponent(String(Qo(F)))+"&"+g:this.m&&Pe(v,this.m,F)),Sr(this.h,U),this.Ua&&Ft(v,"TYPE","init"),this.P?(Ft(v,"$req",g),Ft(v,"SID","null"),U.T=!0,Bn(U,v,null)):Bn(U,v,g),this.G=2}}else this.G==3&&(c?Xo(this,c):this.i.length==0||Ho(this.h)||Xo(this))};function Xo(c,g){var v;g?v=g.l:v=c.U++;const b=ue(c.I);Ft(b,"SID",c.K),Ft(b,"RID",v),Ft(b,"AID",c.T),Ia(c,b),c.m&&c.o&&Pe(b,c.m,c.o),v=new Zn(c,c.j,v,c.B+1),c.m===null&&(v.H=c.o),g&&(c.i=g.D.concat(c.i)),g=ju(c,v,1e3),v.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Sr(c.h,v),Bn(v,b,g)}function Ia(c,g){c.H&&At(c.H,function(v,b){Ft(g,b,v)}),c.l&&Ea({},function(v,b){Ft(g,b,v)})}function ju(c,g,v){v=Math.min(c.i.length,v);var b=c.l?w(c.l.Na,c.l,c):null;t:{var U=c.i;let F=-1;for(;;){const it=["count="+v];F==-1?0<v?(F=U[0].g,it.push("ofs="+F)):F=0:it.push("ofs="+F);let Ut=!0;for(let we=0;we<v;we++){let zt=U[we].g;const ke=U[we].map;if(zt-=F,0>zt)F=Math.max(0,U[we].g-100),Ut=!1;else try{ti(ke,it,"req"+zt+"_")}catch{b&&b(ke)}}if(Ut){b=it.join("&");break t}}}return c=c.i.splice(0,v),g.D=c,b}function Hu(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;_t||N(),pt||(_t(),pt=!0),Kt.add(g,c),c.v=0}}function Wo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=yr(w(c.Fa,c),Zo(c,c.v)),c.v++,!0)}i.Fa=function(){if(this.u=null,Fu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=yr(w(this.ab,this),c)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,de(10),Ss(this),Fu(this))};function Oa(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function Fu(c){c.g=new Zn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=ue(c.qa);Ft(g,"RID","rpc"),Ft(g,"SID",c.K),Ft(g,"AID",c.T),Ft(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ft(g,"TO",c.ja),Ft(g,"TYPE","xmlhttp"),Ia(c,g),c.m&&c.o&&Pe(g,c.m,c.o),c.L&&(c.g.I=c.L);var v=c.g;c=c.ia,v.L=1,v.v=ba(ue(g)),v.m=null,v.P=!0,Ii(v,c)}i.Za=function(){this.C!=null&&(this.C=null,Ss(this),Wo(this),de(19))};function Rs(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function qu(c,g){var v=null;if(c.g==g){Rs(c),Oa(c),c.g=null;var b=2}else if(Ar(c.h,g))v=g.D,bn(c.h,g),b=1;else return;if(c.G!=0){if(g.o)if(b==1){v=g.m?g.m.length:0,g=Date.now()-g.F;var U=c.B;b=ds(),xe(b,new Nu(b,v)),ws(c)}else Hu(c);else if(U=g.s,U==3||U==0&&0<g.X||!(b==1&&Sh(c,g)||b==2&&Wo(c)))switch(v&&0<v.length&&(g=c.h,g.i=g.i.concat(v)),U){case 1:Pi(c,5);break;case 4:Pi(c,10);break;case 3:Pi(c,6);break;default:Pi(c,2)}}}function Zo(c,g){let v=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(v*=2),v*g}function Pi(c,g){if(c.j.info("Error code "+g),g==2){var v=w(c.fb,c),b=c.Xa;const U=!b;b=new Oi(b||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||wr(b,"https"),ba(b),U?Lu(b.toString(),v):Aa(b.toString(),v)}else de(2);c.G=0,c.l&&c.l.sa(g),Gu(c),Bu(c)}i.fb=function(c){c?(this.j.info("Successfully pinged google.com"),de(2)):(this.j.info("Failed to ping google.com"),de(1))};function Gu(c){if(c.G=0,c.ka=[],c.l){const g=rn(c.h);(g.length!=0||c.i.length!=0)&&(z(c.ka,g),z(c.ka,c.i),c.h.i.length=0,K(c.i),c.i.length=0),c.l.ra()}}function Ku(c,g,v){var b=v instanceof Oi?ue(v):new Oi(v);if(b.g!="")g&&(b.g=g+"."+b.g),Ta(b,b.s);else{var U=m.location;b=U.protocol,g=g?g+"."+U.hostname:U.hostname,U=+U.port;var F=new Oi(null);b&&wr(F,b),g&&(F.g=g),U&&Ta(F,U),v&&(F.l=v),b=F}return v=c.D,g=c.ya,v&&g&&Ft(b,v,g),Ft(b,"VER",c.la),Ia(c,b),b}function Yu(c,g,v){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new Yt(new Cr({eb:v})):new Yt(c.pa),g.Ha(c.J),g}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qu(){}i=Qu.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Cs(){}Cs.prototype.g=function(c,g){return new an(c,g)};function an(c,g){Ae.call(this),this.g=new As(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!Z(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!Z(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new ri(this)}V(an,Ae),an.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},an.prototype.close=function(){$o(this.g)},an.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.u&&(v={},v.__data__=Vo(c),c=v);g.i.push(new vh(g.Ya++,c)),g.G==3&&ws(g)},an.prototype.N=function(){this.g.l=null,delete this.j,$o(this.g),delete this.g,an.aa.N.call(this)};function $u(c){mr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){t:{for(const v in g){c=v;break t}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}V($u,mr);function Xu(){zn.call(this),this.status=1}V(Xu,zn);function ri(c){this.g=c}V(ri,Qu),ri.prototype.ua=function(){xe(this.g,"a")},ri.prototype.ta=function(c){xe(this.g,new $u(c))},ri.prototype.sa=function(c){xe(this.g,new Xu)},ri.prototype.ra=function(){xe(this.g,"b")},Cs.prototype.createWebChannel=Cs.prototype.g,an.prototype.send=an.prototype.o,an.prototype.open=an.prototype.m,an.prototype.close=an.prototype.close,UT=function(){return new Cs},LT=function(){return ds()},VT=Tn,$m={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Se.NO_ERROR=0,Se.TIMEOUT=8,Se.HTTP_ERROR=6,of=Se,Ci.COMPLETE="complete",kT=Ci,Du.EventType=Xn,Xn.OPEN="a",Xn.CLOSE="b",Xn.ERROR="c",Xn.MESSAGE="d",Ae.prototype.listen=Ae.prototype.K,Fl=Du,Yt.prototype.listenOnce=Yt.prototype.L,Yt.prototype.getLastError=Yt.prototype.Ka,Yt.prototype.getLastErrorCode=Yt.prototype.Ba,Yt.prototype.getStatus=Yt.prototype.Z,Yt.prototype.getResponseJson=Yt.prototype.Oa,Yt.prototype.getResponseText=Yt.prototype.oa,Yt.prototype.send=Yt.prototype.ea,Yt.prototype.setWithCredentials=Yt.prototype.Ha,PT=Yt}).apply(typeof $c<"u"?$c:typeof self<"u"?self:typeof window<"u"?window:{});const d0="@firebase/firestore",m0="4.7.8";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co="11.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new zp("@firebase/firestore");function to(){return ts.logLevel}function lt(i,...t){if(ts.logLevel<=Pt.DEBUG){const n=t.map(Hp);ts.debug(`Firestore (${Co}): ${i}`,...n)}}function ir(i,...t){if(ts.logLevel<=Pt.ERROR){const n=t.map(Hp);ts.error(`Firestore (${Co}): ${i}`,...n)}}function po(i,...t){if(ts.logLevel<=Pt.WARN){const n=t.map(Hp);ts.warn(`Firestore (${Co}): ${i}`,...n)}}function Hp(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(i="Unexpected state"){const t=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: `+i;throw ir(t),new Error(t)}function Qt(i,t){i||Et()}function Rt(i,t){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class gt extends ur{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class sC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(We.UNAUTHENTICATED))}shutdown(){}}class oC{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lC{constructor(t){this.t=t,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Qt(this.o===void 0);let a=this.i;const o=p=>this.i!==a?(a=this.i,n(p)):Promise.resolve();let u=new ra;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ra,t.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=u;t.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},m=p=>{lt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(lt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ra)}},0),h()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(a=>this.i!==t?(lt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Qt(typeof a.accessToken=="string"),new zT(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Qt(t===null||typeof t=="string"),new We(t)}}class uC{constructor(t,n,a){this.l=t,this.h=n,this.P=a,this.type="FirstParty",this.user=We.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class cC{constructor(t,n,a){this.l=t,this.h=n,this.P=a}getToken(){return Promise.resolve(new uC(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class p0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fC{constructor(t,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Gn(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,n){Qt(this.o===void 0);const a=u=>{u.error!=null&&lt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,lt("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>a(u))};const o=u=>{lt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):lt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new p0(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Qt(typeof n.token=="string"),this.R=n.token,new p0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let a=0;a<i;a++)n[a]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const o=hC(40);for(let u=0;u<o.length;++u)a.length<20&&o[u]<n&&(a+=t.charAt(o[u]%62))}return a}}function Lt(i,t){return i<t?-1:i>t?1:0}function go(i,t,n){return i.length===t.length&&i.every((a,o)=>n(a,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=-62135596800,y0=1e6;class De{static now(){return De.fromMillis(Date.now())}static fromDate(t){return De.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),a=Math.floor((t-1e3*n)*y0);return new De(n,a)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new gt(tt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new gt(tt.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<g0)throw new gt(tt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new gt(tt.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/y0}_compareTo(t){return this.seconds===t.seconds?Lt(this.nanoseconds,t.nanoseconds):Lt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-g0;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{static fromTimestamp(t){return new St(t)}static min(){return new St(new De(0,0))}static max(){return new St(new De(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0="__name__";class fi{constructor(t,n,a){n===void 0?n=0:n>t.length&&Et(),a===void 0?a=t.length-n:a>t.length-n&&Et(),this.segments=t,this.offset=n,this.len=a}get length(){return this.len}isEqual(t){return fi.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof fi?t.forEach(a=>{n.push(a)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,a=this.limit();n<a;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const a=Math.min(t.length,n.length);for(let o=0;o<a;o++){const u=fi.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return Math.sign(t.length-n.length)}static compareSegments(t,n){const a=fi.isNumericId(t),o=fi.isNumericId(n);return a&&!o?-1:!a&&o?1:a&&o?fi.extractNumericId(t).compare(fi.extractNumericId(n)):t<n?-1:t>n?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ia.fromString(t.substring(4,t.length-2))}}class ne extends fi{construct(t,n,a){return new ne(t,n,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const a of t){if(a.indexOf("//")>=0)throw new gt(tt.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);n.push(...a.split("/").filter(o=>o.length>0))}return new ne(n)}static emptyPath(){return new ne([])}}const dC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends fi{construct(t,n,a){return new Ge(t,n,a)}static isValidIdentifier(t){return dC.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===v0}static keyField(){return new Ge([v0])}static fromServerFormat(t){const n=[];let a="",o=0;const u=()=>{if(a.length===0)throw new gt(tt.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(a),a=""};let h=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new gt(tt.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new gt(tt.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);a+=p,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(a+=m,o++):(u(),o++)}if(u(),h)throw new gt(tt.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.path=t}static fromPath(t){return new yt(ne.fromString(t))}static fromName(t){return new yt(ne.fromString(t).popFirst(5))}static empty(){return new yt(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ne.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ne.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new yt(new ne(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=-1;function mC(i,t){const n=i.toTimestamp().seconds,a=i.toTimestamp().nanoseconds+1,o=St.fromTimestamp(a===1e9?new De(n+1,0):new De(n,a));return new oa(o,yt.empty(),t)}function pC(i){return new oa(i.readTime,i.key,nu)}class oa{constructor(t,n,a){this.readTime=t,this.documentKey=n,this.largestBatchId=a}static min(){return new oa(St.min(),yt.empty(),nu)}static max(){return new oa(St.max(),yt.empty(),nu)}}function gC(i,t){let n=i.readTime.compareTo(t.readTime);return n!==0?n:(n=yt.comparator(i.documentKey,t.documentKey),n!==0?n:Lt(i.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(i){if(i.code!==tt.FAILED_PRECONDITION||i.message!==yC)throw i;lt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Et(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new X((a,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(a,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(a,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof X?n:X.resolve(n)}catch(n){return X.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):X.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):X.reject(n)}static resolve(t){return new X((n,a)=>{n(t)})}static reject(t){return new X((n,a)=>{a(t)})}static waitFor(t){return new X((n,a)=>{let o=0,u=0,h=!1;t.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&n()},p=>a(p))}),h=!0,u===o&&n()})}static or(t){let n=X.resolve(!1);for(const a of t)n=n.next(o=>o?X.resolve(o):a());return n}static forEach(t,n){const a=[];return t.forEach((o,u)=>{a.push(n.call(this,o,u))}),this.waitFor(a)}static mapArray(t,n){return new X((a,o)=>{const u=t.length,h=new Array(u);let m=0;for(let p=0;p<u;p++){const y=p;n(t[y]).next(E=>{h[y]=E,++m,m===u&&a(h)},E=>o(E))}})}static doWhile(t,n){return new X((a,o)=>{const u=()=>{t()===!0?n().next(()=>{u()},o):a()};u()})}}function _C(i){const t=i.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Oo(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=a=>this.oe(a),this._e=a=>n.writeSequenceNumber(a))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Yf.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=-1;function Qf(i){return i==null}function Af(i){return i===0&&1/i==-1/0}function EC(i){return typeof i=="number"&&Number.isInteger(i)&&!Af(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT="";function TC(i){let t="";for(let n=0;n<i.length;n++)t.length>0&&(t=_0(t)),t=bC(i.get(n),t);return _0(t)}function bC(i,t){let n=t;const a=i.length;for(let o=0;o<a;o++){const u=i.charAt(o);switch(u){case"\0":n+="";break;case jT:n+="";break;default:n+=u}}return n}function _0(i){return i+jT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(i){let t=0;for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&t++;return t}function ss(i,t){for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&t(n,i[n])}function HT(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,n){this.comparator=t,this.root=n||qe.EMPTY}insert(t,n){return new oe(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(t){return new oe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,qe.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const a=this.comparator(t,n.key);if(a===0)return n.value;a<0?n=n.left:a>0&&(n=n.right)}return null}indexOf(t){let n=0,a=this.root;for(;!a.isEmpty();){const o=this.comparator(t,a.key);if(o===0)return n+a.left.size;o<0?a=a.left:(n+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,a)=>(t(n,a),!1))}toString(){const t=[];return this.inorderTraversal((n,a)=>(t.push(`${n}:${a}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xc(this.root,t,this.comparator,!0)}}class Xc{constructor(t,n,a,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?a(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class qe{constructor(t,n,a,o,u){this.key=t,this.value=n,this.color=a??qe.RED,this.left=o??qe.EMPTY,this.right=u??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,a,o,u){return new qe(t??this.key,n??this.value,a??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,a){let o=this;const u=a(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,a),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,a)),o.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let a,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return qe.EMPTY;a=o.right.min(),o=o.copy(a.key,a.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Et();const t=this.left.check();if(t!==this.right.check())throw Et();return t+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Et()}get value(){throw Et()}get color(){throw Et()}get left(){throw Et()}get right(){throw Et()}copy(t,n,a,o,u){return this}insert(t,n,a){return new qe(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this.comparator=t,this.data=new oe(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,a)=>(t(n),!1))}forEachInRange(t,n){const a=this.data.getIteratorFrom(t[0]);for(;a.hasNext();){const o=a.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let a;for(a=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();a.hasNext();)if(!t(a.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new T0(this.data.getIterator())}getIteratorFrom(t){return new T0(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(a=>{n=n.add(a)}),n}isEqual(t){if(!(t instanceof Ne)||this.size!==t.size)return!1;const n=this.data.getIterator(),a=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=a.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Ne(this.comparator);return n.data=t,n}}class T0{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t){this.fields=t,t.sort(Ge.comparator)}static empty(){return new Kn([])}unionWith(t){let n=new Ne(Ge.comparator);for(const a of this.fields)n=n.add(a);for(const a of t)n=n.add(a);return new Kn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return go(this.fields,t.fields,(n,a)=>n.isEqual(a))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new FT("Invalid base64 string: "+u):u}}(t);return new Ke(n)}static fromUint8Array(t){const n=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(t);return new Ke(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const a=new Uint8Array(n.length);for(let o=0;o<n.length;o++)a[o]=n.charCodeAt(o);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Lt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const AC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function la(i){if(Qt(!!i),typeof i=="string"){let t=0;const n=AC.exec(i);if(Qt(!!n),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const a=new Date(i);return{seconds:Math.floor(a.getTime()/1e3),nanos:t}}return{seconds:pe(i.seconds),nanos:pe(i.nanos)}}function pe(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function ua(i){return typeof i=="string"?Ke.fromBase64String(i):Ke.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT="server_timestamp",GT="__type__",KT="__previous_value__",YT="__local_write_time__";function qp(i){var t,n;return((n=(((t=i==null?void 0:i.mapValue)===null||t===void 0?void 0:t.fields)||{})[GT])===null||n===void 0?void 0:n.stringValue)===qT}function $f(i){const t=i.mapValue.fields[KT];return qp(t)?$f(t):t}function iu(i){const t=la(i.mapValue.fields[YT].timestampValue);return new De(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(t,n,a,o,u,h,m,p,y){this.databaseId=t,this.appId=n,this.persistenceKey=a,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y}}const Sf="(default)";class ru{constructor(t,n){this.projectId=t,this.database=n||Sf}static empty(){return new ru("","")}get isDefaultDatabase(){return this.database===Sf}isEqual(t){return t instanceof ru&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="__type__",wC="__max__",Wc={mapValue:{}},$T="__vector__",wf="value";function ca(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?qp(i)?4:CC(i)?9007199254740991:RC(i)?10:11:Et()}function Ei(i,t){if(i===t)return!0;const n=ca(i);if(n!==ca(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return iu(i).isEqual(iu(t));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=la(o.timestampValue),m=la(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(o,u){return ua(o.bytesValue).isEqual(ua(u.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(o,u){return pe(o.geoPointValue.latitude)===pe(u.geoPointValue.latitude)&&pe(o.geoPointValue.longitude)===pe(u.geoPointValue.longitude)}(i,t);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return pe(o.integerValue)===pe(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=pe(o.doubleValue),m=pe(u.doubleValue);return h===m?Af(h)===Af(m):isNaN(h)&&isNaN(m)}return!1}(i,t);case 9:return go(i.arrayValue.values||[],t.arrayValue.values||[],Ei);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(E0(h)!==E0(m))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(m[p]===void 0||!Ei(h[p],m[p])))return!1;return!0}(i,t);default:return Et()}}function au(i,t){return(i.values||[]).find(n=>Ei(n,t))!==void 0}function yo(i,t){if(i===t)return 0;const n=ca(i),a=ca(t);if(n!==a)return Lt(n,a);switch(n){case 0:case 9007199254740991:return 0;case 1:return Lt(i.booleanValue,t.booleanValue);case 2:return function(u,h){const m=pe(u.integerValue||u.doubleValue),p=pe(h.integerValue||h.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(i,t);case 3:return b0(i.timestampValue,t.timestampValue);case 4:return b0(iu(i),iu(t));case 5:return Lt(i.stringValue,t.stringValue);case 6:return function(u,h){const m=ua(u),p=ua(h);return m.compareTo(p)}(i.bytesValue,t.bytesValue);case 7:return function(u,h){const m=u.split("/"),p=h.split("/");for(let y=0;y<m.length&&y<p.length;y++){const E=Lt(m[y],p[y]);if(E!==0)return E}return Lt(m.length,p.length)}(i.referenceValue,t.referenceValue);case 8:return function(u,h){const m=Lt(pe(u.latitude),pe(h.latitude));return m!==0?m:Lt(pe(u.longitude),pe(h.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return A0(i.arrayValue,t.arrayValue);case 10:return function(u,h){var m,p,y,E;const A=u.fields||{},w=h.fields||{},D=(m=A[wf])===null||m===void 0?void 0:m.arrayValue,V=(p=w[wf])===null||p===void 0?void 0:p.arrayValue,K=Lt(((y=D==null?void 0:D.values)===null||y===void 0?void 0:y.length)||0,((E=V==null?void 0:V.values)===null||E===void 0?void 0:E.length)||0);return K!==0?K:A0(D,V)}(i.mapValue,t.mapValue);case 11:return function(u,h){if(u===Wc.mapValue&&h===Wc.mapValue)return 0;if(u===Wc.mapValue)return 1;if(h===Wc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),y=h.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let A=0;A<p.length&&A<E.length;++A){const w=Lt(p[A],E[A]);if(w!==0)return w;const D=yo(m[p[A]],y[E[A]]);if(D!==0)return D}return Lt(p.length,E.length)}(i.mapValue,t.mapValue);default:throw Et()}}function b0(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return Lt(i,t);const n=la(i),a=la(t),o=Lt(n.seconds,a.seconds);return o!==0?o:Lt(n.nanos,a.nanos)}function A0(i,t){const n=i.values||[],a=t.values||[];for(let o=0;o<n.length&&o<a.length;++o){const u=yo(n[o],a[o]);if(u)return u}return Lt(n.length,a.length)}function vo(i){return Xm(i)}function Xm(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(n){const a=la(n);return`time(${a.seconds},${a.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(n){return ua(n).toBase64()}(i.bytesValue):"referenceValue"in i?function(n){return yt.fromName(n).toString()}(i.referenceValue):"geoPointValue"in i?function(n){return`geo(${n.latitude},${n.longitude})`}(i.geoPointValue):"arrayValue"in i?function(n){let a="[",o=!0;for(const u of n.values||[])o?o=!1:a+=",",a+=Xm(u);return a+"]"}(i.arrayValue):"mapValue"in i?function(n){const a=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const h of a)u?u=!1:o+=",",o+=`${h}:${Xm(n.fields[h])}`;return o+"}"}(i.mapValue):Et()}function lf(i){switch(ca(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=$f(i);return t?16+lf(t):16;case 5:return 2*i.stringValue.length;case 6:return ua(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(a){return(a.values||[]).reduce((o,u)=>o+lf(u),0)}(i.arrayValue);case 10:case 11:return function(a){let o=0;return ss(a.fields,(u,h)=>{o+=u.length+lf(h)}),o}(i.mapValue);default:throw Et()}}function Wm(i){return!!i&&"integerValue"in i}function Gp(i){return!!i&&"arrayValue"in i}function S0(i){return!!i&&"nullValue"in i}function w0(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function uf(i){return!!i&&"mapValue"in i}function RC(i){var t,n;return((n=(((t=i==null?void 0:i.mapValue)===null||t===void 0?void 0:t.fields)||{})[QT])===null||n===void 0?void 0:n.stringValue)===$T}function Yl(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const t={mapValue:{fields:{}}};return ss(i.mapValue.fields,(n,a)=>t.mapValue.fields[n]=Yl(a)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(i.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Yl(i.arrayValue.values[n]);return t}return Object.assign({},i)}function CC(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===wC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t){this.value=t}static empty(){return new Ln({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let a=0;a<t.length-1;++a)if(n=(n.mapValue.fields||{})[t.get(a)],!uf(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Yl(n)}setAll(t){let n=Ge.emptyPath(),a={},o=[];t.forEach((h,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,a,o),a={},o=[],n=m.popLast()}h?a[m.lastSegment()]=Yl(h):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,a,o)}delete(t){const n=this.field(t.popLast());uf(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Ei(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let a=0;a<t.length;++a){let o=n.mapValue.fields[t.get(a)];uf(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(a)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,a){ss(n,(o,u)=>t[o]=u);for(const o of a)delete t[o]}clone(){return new Ln(Yl(this.value))}}function XT(i){const t=[];return ss(i.fields,(n,a)=>{const o=new Ge([n]);if(uf(a)){const u=XT(a.mapValue).fields;if(u.length===0)t.push(o);else for(const h of u)t.push(o.child(h))}else t.push(o)}),new Kn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t,n,a,o,u,h,m){this.key=t,this.documentType=n,this.version=a,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(t){return new Ze(t,0,St.min(),St.min(),St.min(),Ln.empty(),0)}static newFoundDocument(t,n,a,o){return new Ze(t,1,n,St.min(),a,o,0)}static newNoDocument(t,n){return new Ze(t,2,n,St.min(),St.min(),Ln.empty(),0)}static newUnknownDocument(t,n){return new Ze(t,3,n,St.min(),St.min(),Ln.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(St.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ln.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=St.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ze&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(t,n){this.position=t,this.inclusive=n}}function R0(i,t,n){let a=0;for(let o=0;o<i.position.length;o++){const u=t[o],h=i.position[o];if(u.field.isKeyField()?a=yt.comparator(yt.fromName(h.referenceValue),n.key):a=yo(h,n.data.field(u.field)),u.dir==="desc"&&(a*=-1),a!==0)break}return a}function C0(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let n=0;n<i.position.length;n++)if(!Ei(i.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t,n="asc"){this.field=t,this.dir=n}}function IC(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{}class Oe extends WT{constructor(t,n,a){super(),this.field=t,this.op=n,this.value=a}static create(t,n,a){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,a):new DC(t,n,a):n==="array-contains"?new MC(t,a):n==="in"?new PC(t,a):n==="not-in"?new kC(t,a):n==="array-contains-any"?new VC(t,a):new Oe(t,n,a)}static createKeyFieldInFilter(t,n,a){return n==="in"?new NC(t,a):new xC(t,a)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(yo(n,this.value)):n!==null&&ca(this.value)===ca(n)&&this.matchesComparison(yo(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Et()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ti extends WT{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new Ti(t,n)}matches(t){return ZT(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function ZT(i){return i.op==="and"}function JT(i){return OC(i)&&ZT(i)}function OC(i){for(const t of i.filters)if(t instanceof Ti)return!1;return!0}function Zm(i){if(i instanceof Oe)return i.field.canonicalString()+i.op.toString()+vo(i.value);if(JT(i))return i.filters.map(t=>Zm(t)).join(",");{const t=i.filters.map(n=>Zm(n)).join(",");return`${i.op}(${t})`}}function tb(i,t){return i instanceof Oe?function(a,o){return o instanceof Oe&&a.op===o.op&&a.field.isEqual(o.field)&&Ei(a.value,o.value)}(i,t):i instanceof Ti?function(a,o){return o instanceof Ti&&a.op===o.op&&a.filters.length===o.filters.length?a.filters.reduce((u,h,m)=>u&&tb(h,o.filters[m]),!0):!1}(i,t):void Et()}function eb(i){return i instanceof Oe?function(n){return`${n.field.canonicalString()} ${n.op} ${vo(n.value)}`}(i):i instanceof Ti?function(n){return n.op.toString()+" {"+n.getFilters().map(eb).join(" ,")+"}"}(i):"Filter"}class DC extends Oe{constructor(t,n,a){super(t,n,a),this.key=yt.fromName(a.referenceValue)}matches(t){const n=yt.comparator(t.key,this.key);return this.matchesComparison(n)}}class NC extends Oe{constructor(t,n){super(t,"in",n),this.keys=nb("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class xC extends Oe{constructor(t,n){super(t,"not-in",n),this.keys=nb("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function nb(i,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(a=>yt.fromName(a.referenceValue))}class MC extends Oe{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Gp(n)&&au(n.arrayValue,this.value)}}class PC extends Oe{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&au(this.value.arrayValue,n)}}class kC extends Oe{constructor(t,n){super(t,"not-in",n)}matches(t){if(au(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!au(this.value.arrayValue,n)}}class VC extends Oe{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Gp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(a=>au(this.value.arrayValue,a))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(t,n=null,a=[],o=[],u=null,h=null,m=null){this.path=t,this.collectionGroup=n,this.orderBy=a,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.le=null}}function I0(i,t=null,n=[],a=[],o=null,u=null,h=null){return new LC(i,t,n,a,o,u,h)}function Kp(i){const t=Rt(i);if(t.le===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(a=>Zm(a)).join(","),n+="|ob:",n+=t.orderBy.map(a=>function(u){return u.field.canonicalString()+u.dir}(a)).join(","),Qf(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(a=>vo(a)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(a=>vo(a)).join(",")),t.le=n}return t.le}function Yp(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<i.orderBy.length;n++)if(!IC(i.orderBy[n],t.orderBy[n]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let n=0;n<i.filters.length;n++)if(!tb(i.filters[n],t.filters[n]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!C0(i.startAt,t.startAt)&&C0(i.endAt,t.endAt)}function Jm(i){return yt.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(t,n=null,a=[],o=[],u=null,h="F",m=null,p=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=a,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function UC(i,t,n,a,o,u,h,m){return new Xf(i,t,n,a,o,u,h,m)}function ib(i){return new Xf(i)}function O0(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function zC(i){return i.collectionGroup!==null}function Ql(i){const t=Rt(i);if(t.he===null){t.he=[];const n=new Set;for(const u of t.explicitOrderBy)t.he.push(u),n.add(u.field.canonicalString());const a=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new Ne(Ge.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(t).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||t.he.push(new Cf(u,a))}),n.has(Ge.keyField().canonicalString())||t.he.push(new Cf(Ge.keyField(),a))}return t.he}function pi(i){const t=Rt(i);return t.Pe||(t.Pe=BC(t,Ql(i))),t.Pe}function BC(i,t){if(i.limitType==="F")return I0(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Cf(o.field,u)});const n=i.endAt?new Rf(i.endAt.position,i.endAt.inclusive):null,a=i.startAt?new Rf(i.startAt.position,i.startAt.inclusive):null;return I0(i.path,i.collectionGroup,t,i.filters,i.limit,n,a)}}function tp(i,t,n){return new Xf(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,n,i.startAt,i.endAt)}function Wf(i,t){return Yp(pi(i),pi(t))&&i.limitType===t.limitType}function rb(i){return`${Kp(pi(i))}|lt:${i.limitType}`}function eo(i){return`Query(target=${function(n){let a=n.path.canonicalString();return n.collectionGroup!==null&&(a+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(a+=`, filters: [${n.filters.map(o=>eb(o)).join(", ")}]`),Qf(n.limit)||(a+=", limit: "+n.limit),n.orderBy.length>0&&(a+=`, orderBy: [${n.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),n.startAt&&(a+=", startAt: ",a+=n.startAt.inclusive?"b:":"a:",a+=n.startAt.position.map(o=>vo(o)).join(",")),n.endAt&&(a+=", endAt: ",a+=n.endAt.inclusive?"a:":"b:",a+=n.endAt.position.map(o=>vo(o)).join(",")),`Target(${a})`}(pi(i))}; limitType=${i.limitType})`}function Zf(i,t){return t.isFoundDocument()&&function(a,o){const u=o.key.path;return a.collectionGroup!==null?o.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(u):yt.isDocumentKey(a.path)?a.path.isEqual(u):a.path.isImmediateParentOf(u)}(i,t)&&function(a,o){for(const u of Ql(a))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,t)&&function(a,o){for(const u of a.filters)if(!u.matches(o))return!1;return!0}(i,t)&&function(a,o){return!(a.startAt&&!function(h,m,p){const y=R0(h,m,p);return h.inclusive?y<=0:y<0}(a.startAt,Ql(a),o)||a.endAt&&!function(h,m,p){const y=R0(h,m,p);return h.inclusive?y>=0:y>0}(a.endAt,Ql(a),o))}(i,t)}function jC(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function ab(i){return(t,n)=>{let a=!1;for(const o of Ql(i)){const u=HC(o,t,n);if(u!==0)return u;a=a||o.field.isKeyField()}return 0}}function HC(i,t,n){const a=i.field.isKeyField()?yt.comparator(t.key,n.key):function(u,h,m){const p=h.data.field(u),y=m.data.field(u);return p!==null&&y!==null?yo(p,y):Et()}(i.field,t,n);switch(i.dir){case"asc":return a;case"desc":return-1*a;default:return Et()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),a=this.inner[n];if(a!==void 0){for(const[o,u]of a)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const a=this.mapKeyFn(t),o=this.inner[a];if(o===void 0)return this.inner[a]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),a=this.inner[n];if(a===void 0)return!1;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],t))return a.length===1?delete this.inner[n]:a.splice(o,1),this.innerSize--,!0;return!1}forEach(t){ss(this.inner,(n,a)=>{for(const[o,u]of a)t(o,u)})}isEmpty(){return HT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=new oe(yt.comparator);function rr(){return FC}const sb=new oe(yt.comparator);function ql(...i){let t=sb;for(const n of i)t=t.insert(n.key,n);return t}function ob(i){let t=sb;return i.forEach((n,a)=>t=t.insert(n,a.overlayedDocument)),t}function $a(){return $l()}function lb(){return $l()}function $l(){return new os(i=>i.toString(),(i,t)=>i.isEqual(t))}const qC=new oe(yt.comparator),GC=new Ne(yt.comparator);function kt(...i){let t=GC;for(const n of i)t=t.add(n);return t}const KC=new Ne(Lt);function YC(){return KC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Af(t)?"-0":t}}function ub(i){return{integerValue:""+i}}function QC(i,t){return EC(t)?ub(t):Qp(i,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this._=void 0}}function $C(i,t,n){return i instanceof If?function(o,u){const h={fields:{[GT]:{stringValue:qT},[YT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&qp(u)&&(u=$f(u)),u&&(h.fields[KT]=u),{mapValue:h}}(n,t):i instanceof su?fb(i,t):i instanceof ou?hb(i,t):function(o,u){const h=cb(o,u),m=D0(h)+D0(o.Ie);return Wm(h)&&Wm(o.Ie)?ub(m):Qp(o.serializer,m)}(i,t)}function XC(i,t,n){return i instanceof su?fb(i,t):i instanceof ou?hb(i,t):n}function cb(i,t){return i instanceof Of?function(a){return Wm(a)||function(u){return!!u&&"doubleValue"in u}(a)}(t)?t:{integerValue:0}:null}class If extends Jf{}class su extends Jf{constructor(t){super(),this.elements=t}}function fb(i,t){const n=db(t);for(const a of i.elements)n.some(o=>Ei(o,a))||n.push(a);return{arrayValue:{values:n}}}class ou extends Jf{constructor(t){super(),this.elements=t}}function hb(i,t){let n=db(t);for(const a of i.elements)n=n.filter(o=>!Ei(o,a));return{arrayValue:{values:n}}}class Of extends Jf{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function D0(i){return pe(i.integerValue||i.doubleValue)}function db(i){return Gp(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function WC(i,t){return i.field.isEqual(t.field)&&function(a,o){return a instanceof su&&o instanceof su||a instanceof ou&&o instanceof ou?go(a.elements,o.elements,Ei):a instanceof Of&&o instanceof Of?Ei(a.Ie,o.Ie):a instanceof If&&o instanceof If}(i.transform,t.transform)}class ZC{constructor(t,n){this.version=t,this.transformResults=n}}class gi{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new gi}static exists(t){return new gi(void 0,t)}static updateTime(t){return new gi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function cf(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class th{}function mb(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new $p(i.key,gi.none()):new vu(i.key,i.data,gi.none());{const n=i.data,a=Ln.empty();let o=new Ne(Ge.comparator);for(let u of t.fields)if(!o.has(u)){let h=n.field(u);h===null&&u.length>1&&(u=u.popLast(),h=n.field(u)),h===null?a.delete(u):a.set(u,h),o=o.add(u)}return new ls(i.key,a,new Kn(o.toArray()),gi.none())}}function JC(i,t,n){i instanceof vu?function(o,u,h){const m=o.value.clone(),p=x0(o.fieldTransforms,u,h.transformResults);m.setAll(p),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,t,n):i instanceof ls?function(o,u,h){if(!cf(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=x0(o.fieldTransforms,u,h.transformResults),p=u.data;p.setAll(pb(o)),p.setAll(m),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(i,t,n):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,t,n)}function Xl(i,t,n,a){return i instanceof vu?function(u,h,m,p){if(!cf(u.precondition,h))return m;const y=u.value.clone(),E=M0(u.fieldTransforms,p,h);return y.setAll(E),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(i,t,n,a):i instanceof ls?function(u,h,m,p){if(!cf(u.precondition,h))return m;const y=M0(u.fieldTransforms,p,h),E=h.data;return E.setAll(pb(u)),E.setAll(y),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(A=>A.field))}(i,t,n,a):function(u,h,m){return cf(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,t,n)}function tI(i,t){let n=null;for(const a of i.fieldTransforms){const o=t.data.field(a.field),u=cb(a.transform,o||null);u!=null&&(n===null&&(n=Ln.empty()),n.set(a.field,u))}return n||null}function N0(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(a,o){return a===void 0&&o===void 0||!(!a||!o)&&go(a,o,(u,h)=>WC(u,h))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class vu extends th{constructor(t,n,a,o=[]){super(),this.key=t,this.value=n,this.precondition=a,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ls extends th{constructor(t,n,a,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=a,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function pb(i){const t=new Map;return i.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const a=i.data.field(n);t.set(n,a)}}),t}function x0(i,t,n){const a=new Map;Qt(i.length===n.length);for(let o=0;o<n.length;o++){const u=i[o],h=u.transform,m=t.data.field(u.field);a.set(u.field,XC(h,m,n[o]))}return a}function M0(i,t,n){const a=new Map;for(const o of i){const u=o.transform,h=n.data.field(o.field);a.set(o.field,$C(u,h,t))}return a}class $p extends th{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eI extends th{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(t,n,a,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=a,this.mutations=o}applyToRemoteDocument(t,n){const a=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&JC(u,t,a[o])}}applyToLocalView(t,n){for(const a of this.baseMutations)a.key.isEqual(t.key)&&(n=Xl(a,t,n,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(t.key)&&(n=Xl(a,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const a=lb();return this.mutations.forEach(o=>{const u=t.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=n.has(o.key)?null:m;const p=mb(h,m);p!==null&&a.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(St.min())}),a}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),kt())}isEqual(t){return this.batchId===t.batchId&&go(this.mutations,t.mutations,(n,a)=>N0(n,a))&&go(this.baseMutations,t.baseMutations,(n,a)=>N0(n,a))}}class Xp{constructor(t,n,a,o){this.batch=t,this.commitVersion=n,this.mutationResults=a,this.docVersions=o}static from(t,n,a){Qt(t.mutations.length===a.length);let o=function(){return qC}();const u=t.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,a[h].version);return new Xp(t,n,a,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,jt;function aI(i){switch(i){case tt.OK:return Et();case tt.CANCELLED:case tt.UNKNOWN:case tt.DEADLINE_EXCEEDED:case tt.RESOURCE_EXHAUSTED:case tt.INTERNAL:case tt.UNAVAILABLE:case tt.UNAUTHENTICATED:return!1;case tt.INVALID_ARGUMENT:case tt.NOT_FOUND:case tt.ALREADY_EXISTS:case tt.PERMISSION_DENIED:case tt.FAILED_PRECONDITION:case tt.ABORTED:case tt.OUT_OF_RANGE:case tt.UNIMPLEMENTED:case tt.DATA_LOSS:return!0;default:return Et()}}function gb(i){if(i===void 0)return ir("GRPC error has no .code"),tt.UNKNOWN;switch(i){case Te.OK:return tt.OK;case Te.CANCELLED:return tt.CANCELLED;case Te.UNKNOWN:return tt.UNKNOWN;case Te.DEADLINE_EXCEEDED:return tt.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return tt.RESOURCE_EXHAUSTED;case Te.INTERNAL:return tt.INTERNAL;case Te.UNAVAILABLE:return tt.UNAVAILABLE;case Te.UNAUTHENTICATED:return tt.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return tt.INVALID_ARGUMENT;case Te.NOT_FOUND:return tt.NOT_FOUND;case Te.ALREADY_EXISTS:return tt.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return tt.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return tt.FAILED_PRECONDITION;case Te.ABORTED:return tt.ABORTED;case Te.OUT_OF_RANGE:return tt.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return tt.UNIMPLEMENTED;case Te.DATA_LOSS:return tt.DATA_LOSS;default:return Et()}}(jt=Te||(Te={}))[jt.OK=0]="OK",jt[jt.CANCELLED=1]="CANCELLED",jt[jt.UNKNOWN=2]="UNKNOWN",jt[jt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",jt[jt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",jt[jt.NOT_FOUND=5]="NOT_FOUND",jt[jt.ALREADY_EXISTS=6]="ALREADY_EXISTS",jt[jt.PERMISSION_DENIED=7]="PERMISSION_DENIED",jt[jt.UNAUTHENTICATED=16]="UNAUTHENTICATED",jt[jt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",jt[jt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",jt[jt.ABORTED=10]="ABORTED",jt[jt.OUT_OF_RANGE=11]="OUT_OF_RANGE",jt[jt.UNIMPLEMENTED=12]="UNIMPLEMENTED",jt[jt.INTERNAL=13]="INTERNAL",jt[jt.UNAVAILABLE=14]="UNAVAILABLE",jt[jt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=new ia([4294967295,4294967295],0);function P0(i){const t=sI().encode(i),n=new MT;return n.update(t),new Uint8Array(n.digest())}function k0(i){const t=new DataView(i.buffer),n=t.getUint32(0,!0),a=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new ia([n,a],0),new ia([o,u],0)]}class Wp{constructor(t,n,a){if(this.bitmap=t,this.padding=n,this.hashCount=a,n<0||n>=8)throw new Gl(`Invalid padding: ${n}`);if(a<0)throw new Gl(`Invalid hash count: ${a}`);if(t.length>0&&this.hashCount===0)throw new Gl(`Invalid hash count: ${a}`);if(t.length===0&&n!==0)throw new Gl(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*t.length-n,this.de=ia.fromNumber(this.Ee)}Ae(t,n,a){let o=t.add(n.multiply(ia.fromNumber(a)));return o.compare(oI)===1&&(o=new ia([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const n=P0(t),[a,o]=k0(n);for(let u=0;u<this.hashCount;u++){const h=this.Ae(a,o,u);if(!this.Re(h))return!1}return!0}static create(t,n,a){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),h=new Wp(u,o,n);return a.forEach(m=>h.insert(m)),h}insert(t){if(this.Ee===0)return;const n=P0(t),[a,o]=k0(n);for(let u=0;u<this.hashCount;u++){const h=this.Ae(a,o,u);this.Ve(h)}}Ve(t){const n=Math.floor(t/8),a=t%8;this.bitmap[n]|=1<<a}}class Gl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,n,a,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=a,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,a){const o=new Map;return o.set(t,_u.createSynthesizedTargetChangeForCurrentChange(t,n,a)),new eh(St.min(),o,new oe(Lt),rr(),kt())}}class _u{constructor(t,n,a,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=a,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,a){return new _u(a,n,kt(),kt(),kt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t,n,a,o){this.me=t,this.removedTargetIds=n,this.key=a,this.fe=o}}class yb{constructor(t,n){this.targetId=t,this.ge=n}}class vb{constructor(t,n,a=Ke.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=a,this.cause=o}}class V0{constructor(){this.pe=0,this.ye=L0(),this.we=Ke.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=kt(),n=kt(),a=kt();return this.ye.forEach((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:a=a.add(o);break;default:Et()}}),new _u(this.we,this.Se,t,n,a)}Me(){this.be=!1,this.ye=L0()}xe(t,n){this.be=!0,this.ye=this.ye.insert(t,n)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,Qt(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class lI{constructor(t){this.ke=t,this.qe=new Map,this.Qe=rr(),this.$e=Zc(),this.Ke=Zc(),this.Ue=new oe(Lt)}We(t){for(const n of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(n,t.fe):this.ze(n,t.key,t.fe);for(const n of t.removedTargetIds)this.ze(n,t.key,t.fe)}je(t){this.forEachTarget(t,n=>{const a=this.He(n);switch(t.state){case 0:this.Je(n)&&a.Ce(t.resumeToken);break;case 1:a.Be(),a.De||a.Me(),a.Ce(t.resumeToken);break;case 2:a.Be(),a.De||this.removeTarget(n);break;case 3:this.Je(n)&&(a.Le(),a.Ce(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),a.Ce(t.resumeToken));break;default:Et()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qe.forEach((a,o)=>{this.Je(o)&&n(o)})}Ze(t){const n=t.targetId,a=t.ge.count,o=this.Xe(n);if(o){const u=o.target;if(Jm(u))if(a===0){const h=new yt(u.path);this.ze(n,h,Ze.newNoDocument(h,St.min()))}else Qt(a===1);else{const h=this.et(n);if(h!==a){const m=this.tt(t),p=m?this.nt(m,t,h):1;if(p!==0){this.Ye(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(n,y)}}}}}tt(t){const n=t.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:a="",padding:o=0},hashCount:u=0}=n;let h,m;try{h=ua(a).toUint8Array()}catch(p){if(p instanceof FT)return po("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new Wp(h,o,u)}catch(p){return po(p instanceof Gl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.Ee===0?null:m}nt(t,n,a){return n.ge.count===a-this.st(t,n.targetId)?0:2}st(t,n){const a=this.ke.getRemoteKeysForTarget(n);let o=0;return a.forEach(u=>{const h=this.ke.it(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.ze(n,u,null),o++)}),o}ot(t){const n=new Map;this.qe.forEach((u,h)=>{const m=this.Xe(h);if(m){if(u.current&&Jm(m.target)){const p=new yt(m.target.path);this._t(p).has(h)||this.ut(h,p)||this.ze(h,p,Ze.newNoDocument(p,t))}u.ve&&(n.set(h,u.Fe()),u.Me())}});let a=kt();this.Ke.forEach((u,h)=>{let m=!0;h.forEachWhile(p=>{const y=this.Xe(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(a=a.add(u))}),this.Qe.forEach((u,h)=>h.setReadTime(t));const o=new eh(t,n,this.Ue,this.Qe,a);return this.Qe=rr(),this.$e=Zc(),this.Ke=Zc(),this.Ue=new oe(Lt),o}Ge(t,n){if(!this.Je(t))return;const a=this.ut(t,n.key)?2:0;this.He(t).xe(n.key,a),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t)),this.Ke=this.Ke.insert(n.key,this.ct(n.key).add(t))}ze(t,n,a){if(!this.Je(t))return;const o=this.He(t);this.ut(t,n)?o.xe(n,1):o.Oe(n),this.Ke=this.Ke.insert(n,this.ct(n).delete(t)),this.Ke=this.Ke.insert(n,this.ct(n).add(t)),a&&(this.Qe=this.Qe.insert(n,a))}removeTarget(t){this.qe.delete(t)}et(t){const n=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let n=this.qe.get(t);return n||(n=new V0,this.qe.set(t,n)),n}ct(t){let n=this.Ke.get(t);return n||(n=new Ne(Lt),this.Ke=this.Ke.insert(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new Ne(Lt),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||lt("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.qe.get(t);return n&&n.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new V0),this.ke.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ut(t,n){return this.ke.getRemoteKeysForTarget(t).has(n)}}function Zc(){return new oe(yt.comparator)}function L0(){return new oe(yt.comparator)}const uI={asc:"ASCENDING",desc:"DESCENDING"},cI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fI={and:"AND",or:"OR"};class hI{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ep(i,t){return i.useProto3Json||Qf(t)?t:{value:t}}function Df(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function _b(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function dI(i,t){return Df(i,t.toTimestamp())}function yi(i){return Qt(!!i),St.fromTimestamp(function(n){const a=la(n);return new De(a.seconds,a.nanos)}(i))}function Zp(i,t){return np(i,t).canonicalString()}function np(i,t){const n=function(o){return new ne(["projects",o.projectId,"databases",o.database])}(i).child("documents");return t===void 0?n:n.child(t)}function Eb(i){const t=ne.fromString(i);return Qt(wb(t)),t}function ip(i,t){return Zp(i.databaseId,t.path)}function Cm(i,t){const n=Eb(t);if(n.get(1)!==i.databaseId.projectId)throw new gt(tt.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+i.databaseId.projectId);if(n.get(3)!==i.databaseId.database)throw new gt(tt.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+i.databaseId.database);return new yt(bb(n))}function Tb(i,t){return Zp(i.databaseId,t)}function mI(i){const t=Eb(i);return t.length===4?ne.emptyPath():bb(t)}function rp(i){return new ne(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function bb(i){return Qt(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function U0(i,t,n){return{name:ip(i,t),fields:n.value.mapValue.fields}}function pI(i,t){let n;if("targetChange"in t){t.targetChange;const a=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Et()}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=function(y,E){return y.useProto3Json?(Qt(E===void 0||typeof E=="string"),Ke.fromBase64String(E||"")):(Qt(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Ke.fromUint8Array(E||new Uint8Array))}(i,t.targetChange.resumeToken),h=t.targetChange.cause,m=h&&function(y){const E=y.code===void 0?tt.UNKNOWN:gb(y.code);return new gt(E,y.message||"")}(h);n=new vb(a,o,u,m||null)}else if("documentChange"in t){t.documentChange;const a=t.documentChange;a.document,a.document.name,a.document.updateTime;const o=Cm(i,a.document.name),u=yi(a.document.updateTime),h=a.document.createTime?yi(a.document.createTime):St.min(),m=new Ln({mapValue:{fields:a.document.fields}}),p=Ze.newFoundDocument(o,u,h,m),y=a.targetIds||[],E=a.removedTargetIds||[];n=new ff(y,E,p.key,p)}else if("documentDelete"in t){t.documentDelete;const a=t.documentDelete;a.document;const o=Cm(i,a.document),u=a.readTime?yi(a.readTime):St.min(),h=Ze.newNoDocument(o,u),m=a.removedTargetIds||[];n=new ff([],m,h.key,h)}else if("documentRemove"in t){t.documentRemove;const a=t.documentRemove;a.document;const o=Cm(i,a.document),u=a.removedTargetIds||[];n=new ff([],u,o,null)}else{if(!("filter"in t))return Et();{t.filter;const a=t.filter;a.targetId;const{count:o=0,unchangedNames:u}=a,h=new rI(o,u),m=a.targetId;n=new yb(m,h)}}return n}function gI(i,t){let n;if(t instanceof vu)n={update:U0(i,t.key,t.value)};else if(t instanceof $p)n={delete:ip(i,t.key)};else if(t instanceof ls)n={update:U0(i,t.key,t.data),updateMask:wI(t.fieldMask)};else{if(!(t instanceof eI))return Et();n={verify:ip(i,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(a=>function(u,h){const m=h.transform;if(m instanceof If)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof su)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof ou)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Of)return{fieldPath:h.field.canonicalString(),increment:m.Ie};throw Et()}(0,a))),t.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:dI(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Et()}(i,t.precondition)),n}function yI(i,t){return i&&i.length>0?(Qt(t!==void 0),i.map(n=>function(o,u){let h=o.updateTime?yi(o.updateTime):yi(u);return h.isEqual(St.min())&&(h=yi(u)),new ZC(h,o.transformResults||[])}(n,t))):[]}function vI(i,t){return{documents:[Tb(i,t.path)]}}function _I(i,t){const n={structuredQuery:{}},a=t.path;let o;t.collectionGroup!==null?(o=a,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=a.popLast(),n.structuredQuery.from=[{collectionId:a.lastSegment()}]),n.parent=Tb(i,o);const u=function(y){if(y.length!==0)return Sb(Ti.create(y,"and"))}(t.filters);u&&(n.structuredQuery.where=u);const h=function(y){if(y.length!==0)return y.map(E=>function(w){return{field:no(w.field),direction:bI(w.dir)}}(E))}(t.orderBy);h&&(n.structuredQuery.orderBy=h);const m=ep(i,t.limit);return m!==null&&(n.structuredQuery.limit=m),t.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{ht:n,parent:o}}function EI(i){let t=mI(i.parent);const n=i.structuredQuery,a=n.from?n.from.length:0;let o=null;if(a>0){Qt(a===1);const E=n.from[0];E.allDescendants?o=E.collectionId:t=t.child(E.collectionId)}let u=[];n.where&&(u=function(A){const w=Ab(A);return w instanceof Ti&&JT(w)?w.getFilters():[w]}(n.where));let h=[];n.orderBy&&(h=function(A){return A.map(w=>function(V){return new Cf(io(V.field),function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(w))}(n.orderBy));let m=null;n.limit&&(m=function(A){let w;return w=typeof A=="object"?A.value:A,Qf(w)?null:w}(n.limit));let p=null;n.startAt&&(p=function(A){const w=!!A.before,D=A.values||[];return new Rf(D,w)}(n.startAt));let y=null;return n.endAt&&(y=function(A){const w=!A.before,D=A.values||[];return new Rf(D,w)}(n.endAt)),UC(t,o,h,u,m,"F",p,y)}function TI(i,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Et()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Ab(i){return i.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const a=io(n.unaryFilter.field);return Oe.create(a,"==",{doubleValue:NaN});case"IS_NULL":const o=io(n.unaryFilter.field);return Oe.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=io(n.unaryFilter.field);return Oe.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=io(n.unaryFilter.field);return Oe.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Et()}}(i):i.fieldFilter!==void 0?function(n){return Oe.create(io(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Et()}}(n.fieldFilter.op),n.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(n){return Ti.create(n.compositeFilter.filters.map(a=>Ab(a)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Et()}}(n.compositeFilter.op))}(i):Et()}function bI(i){return uI[i]}function AI(i){return cI[i]}function SI(i){return fI[i]}function no(i){return{fieldPath:i.canonicalString()}}function io(i){return Ge.fromServerFormat(i.fieldPath)}function Sb(i){return i instanceof Oe?function(n){if(n.op==="=="){if(w0(n.value))return{unaryFilter:{field:no(n.field),op:"IS_NAN"}};if(S0(n.value))return{unaryFilter:{field:no(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(w0(n.value))return{unaryFilter:{field:no(n.field),op:"IS_NOT_NAN"}};if(S0(n.value))return{unaryFilter:{field:no(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:no(n.field),op:AI(n.op),value:n.value}}}(i):i instanceof Ti?function(n){const a=n.getFilters().map(o=>Sb(o));return a.length===1?a[0]:{compositeFilter:{op:SI(n.op),filters:a}}}(i):Et()}function wI(i){const t=[];return i.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function wb(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t,n,a,o,u=St.min(),h=St.min(),m=Ke.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=n,this.purpose=a,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(t){return new Jr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(t){this.Tt=t}}function CI(i){const t=EI({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?tp(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this.Tn=new OI}addToCollectionParentIndex(t,n){return this.Tn.add(n),X.resolve()}getCollectionParents(t,n){return X.resolve(this.Tn.getEntries(n))}addFieldIndex(t,n){return X.resolve()}deleteFieldIndex(t,n){return X.resolve()}deleteAllFieldIndexes(t){return X.resolve()}createTargetIndexes(t,n){return X.resolve()}getDocumentsMatchingTarget(t,n){return X.resolve(null)}getIndexType(t,n){return X.resolve(0)}getFieldIndexes(t,n){return X.resolve([])}getNextCollectionGroupToUpdate(t){return X.resolve(null)}getMinOffset(t,n){return X.resolve(oa.min())}getMinOffsetFromCollectionGroup(t,n){return X.resolve(oa.min())}updateCollectionGroup(t,n,a){return X.resolve()}updateIndexEntries(t,n){return X.resolve()}}class OI{constructor(){this.index={}}add(t){const n=t.lastSegment(),a=t.popLast(),o=this.index[n]||new Ne(ne.comparator),u=!o.has(a);return this.index[n]=o.add(a),u}has(t){const n=t.lastSegment(),a=t.popLast(),o=this.index[n];return o&&o.has(a)}getEntries(t){return(this.index[t]||new Ne(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rb=41943040;class fn{static withCacheSize(t){return new fn(t,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,a){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn.DEFAULT_COLLECTION_PERCENTILE=10,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,fn.DEFAULT=new fn(Rb,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),fn.DISABLED=new fn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Kn(){return new _o(0)}static Un(){return new _o(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="LruGarbageCollector",DI=1048576;function j0([i,t],[n,a]){const o=Lt(i,n);return o===0?Lt(t,a):o}class NI{constructor(t){this.Hn=t,this.buffer=new Ne(j0),this.Jn=0}Yn(){return++this.Jn}Zn(t){const n=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const a=this.buffer.last();j0(n,a)<0&&(this.buffer=this.buffer.delete(a).add(n))}}get maxValue(){return this.buffer.last()[0]}}class xI{constructor(t,n,a){this.garbageCollector=t,this.asyncQueue=n,this.localStore=a,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){lt(B0,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Oo(n)?lt(B0,"Ignoring IndexedDB error during garbage collection: ",n):await Io(n)}await this.er(3e5)})}}class MI{constructor(t,n){this.tr=t,this.params=n}calculateTargetCount(t,n){return this.tr.nr(t).next(a=>Math.floor(n/100*a))}nthSequenceNumber(t,n){if(n===0)return X.resolve(Yf.ae);const a=new NI(n);return this.tr.forEachTarget(t,o=>a.Zn(o.sequenceNumber)).next(()=>this.tr.rr(t,o=>a.Zn(o))).next(()=>a.maxValue)}removeTargets(t,n,a){return this.tr.removeTargets(t,n,a)}removeOrphanedDocuments(t,n){return this.tr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(lt("LruGarbageCollector","Garbage collection skipped; disabled"),X.resolve(z0)):this.getCacheSize(t).next(a=>a<this.params.cacheSizeCollectionThreshold?(lt("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),z0):this.ir(t,n))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,n){let a,o,u,h,m,p,y;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(lt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(t,o))).next(A=>(a=A,m=Date.now(),this.removeTargets(t,a,n))).next(A=>(u=A,p=Date.now(),this.removeOrphanedDocuments(t,a))).next(A=>(y=Date.now(),to()<=Pt.DEBUG&&lt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${A} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),X.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A})))}}function PI(i,t){return new MI(i,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.changes=new os(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ze.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const a=this.changes.get(n);return a!==void 0?X.resolve(a):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(t,n,a,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=a,this.indexManager=o}getDocument(t,n){let a=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(a=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(a!==null&&Xl(a.mutation,o,Kn.empty(),De.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(a=>this.getLocalViewOfDocuments(t,a,kt()).next(()=>a))}getLocalViewOfDocuments(t,n,a=kt()){const o=$a();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,a).next(u=>{let h=ql();return u.forEach((m,p)=>{h=h.insert(m,p.overlayedDocument)}),h}))}getOverlayedDocuments(t,n){const a=$a();return this.populateOverlays(t,a,n).next(()=>this.computeViews(t,n,a,kt()))}populateOverlays(t,n,a){const o=[];return a.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(t,o).next(u=>{u.forEach((h,m)=>{n.set(h,m)})})}computeViews(t,n,a,o){let u=rr();const h=$l(),m=function(){return $l()}();return n.forEach((p,y)=>{const E=a.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof ls)?u=u.insert(y.key,y):E!==void 0?(h.set(y.key,E.mutation.getFieldMask()),Xl(E.mutation,y,E.mutation.getFieldMask(),De.now())):h.set(y.key,Kn.empty())}),this.recalculateAndSaveOverlays(t,u).next(p=>(p.forEach((y,E)=>h.set(y,E)),n.forEach((y,E)=>{var A;return m.set(y,new VI(E,(A=h.get(y))!==null&&A!==void 0?A:null))}),m))}recalculateAndSaveOverlays(t,n){const a=$l();let o=new oe((h,m)=>h-m),u=kt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(h=>{for(const m of h)m.keys().forEach(p=>{const y=n.get(p);if(y===null)return;let E=a.get(p)||Kn.empty();E=m.applyToLocalView(y,E),a.set(p,E);const A=(o.get(m.batchId)||kt()).add(p);o=o.insert(m.batchId,A)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,E=p.value,A=lb();E.forEach(w=>{if(!u.has(w)){const D=mb(n.get(w),a.get(w));D!==null&&A.set(w,D),u=u.add(w)}}),h.push(this.documentOverlayCache.saveOverlays(t,y,A))}return X.waitFor(h)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(a=>this.recalculateAndSaveOverlays(t,a))}getDocumentsMatchingQuery(t,n,a,o){return function(h){return yt.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):zC(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,a,o):this.getDocumentsMatchingCollectionQuery(t,n,a,o)}getNextDocuments(t,n,a,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,a,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,a.largestBatchId,o-u.size):X.resolve($a());let m=nu,p=u;return h.next(y=>X.forEach(y,(E,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(E)?X.resolve():this.remoteDocumentCache.getEntry(t,E).next(w=>{p=p.insert(E,w)}))).next(()=>this.populateOverlays(t,y,u)).next(()=>this.computeViews(t,p,y,kt())).next(E=>({batchId:m,changes:ob(E)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new yt(n)).next(a=>{let o=ql();return a.isFoundDocument()&&(o=o.insert(a.key,a)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,a,o){const u=n.collectionGroup;let h=ql();return this.indexManager.getCollectionParents(t,u).next(m=>X.forEach(m,p=>{const y=function(A,w){return new Xf(w,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(t,y,a,o).next(E=>{E.forEach((A,w)=>{h=h.insert(A,w)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(t,n,a,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,a.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,a,u,o))).next(h=>{u.forEach((p,y)=>{const E=y.getKey();h.get(E)===null&&(h=h.insert(E,Ze.newInvalidDocument(E)))});let m=ql();return h.forEach((p,y)=>{const E=u.get(p);E!==void 0&&Xl(E.mutation,y,Kn.empty(),De.now()),Zf(n,y)&&(m=m.insert(p,y))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,n){return X.resolve(this.dr.get(n))}saveBundleMetadata(t,n){return this.dr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:yi(o.createTime)}}(n)),X.resolve()}getNamedQuery(t,n){return X.resolve(this.Ar.get(n))}saveNamedQuery(t,n){return this.Ar.set(n.name,function(o){return{name:o.name,query:CI(o.bundledQuery),readTime:yi(o.readTime)}}(n)),X.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(){this.overlays=new oe(yt.comparator),this.Rr=new Map}getOverlay(t,n){return X.resolve(this.overlays.get(n))}getOverlays(t,n){const a=$a();return X.forEach(n,o=>this.getOverlay(t,o).next(u=>{u!==null&&a.set(o,u)})).next(()=>a)}saveOverlays(t,n,a){return a.forEach((o,u)=>{this.Et(t,n,u)}),X.resolve()}removeOverlaysForBatchId(t,n,a){const o=this.Rr.get(a);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(a)),X.resolve()}getOverlaysForCollection(t,n,a){const o=$a(),u=n.length+1,h=new yt(n.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>a&&o.set(p.getKey(),p)}return X.resolve(o)}getOverlaysForCollectionGroup(t,n,a,o){let u=new oe((y,E)=>y-E);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>a){let E=u.get(y.largestBatchId);E===null&&(E=$a(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const m=$a(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>m.set(y,E)),!(m.size()>=o)););return X.resolve(m)}Et(t,n,a){const o=this.overlays.get(a.key);if(o!==null){const h=this.Rr.get(o.largestBatchId).delete(a.key);this.Rr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(a.key,new iI(n,a));let u=this.Rr.get(n);u===void 0&&(u=kt(),this.Rr.set(n,u)),this.Rr.set(n,u.add(a.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(t){return X.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,X.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(){this.Vr=new Ne(ze.mr),this.gr=new Ne(ze.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,n){const a=new ze(t,n);this.Vr=this.Vr.add(a),this.gr=this.gr.add(a)}yr(t,n){t.forEach(a=>this.addReference(a,n))}removeReference(t,n){this.wr(new ze(t,n))}Sr(t,n){t.forEach(a=>this.removeReference(a,n))}br(t){const n=new yt(new ne([])),a=new ze(n,t),o=new ze(n,t+1),u=[];return this.gr.forEachInRange([a,o],h=>{this.wr(h),u.push(h.key)}),u}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const n=new yt(new ne([])),a=new ze(n,t),o=new ze(n,t+1);let u=kt();return this.gr.forEachInRange([a,o],h=>{u=u.add(h.key)}),u}containsKey(t){const n=new ze(t,0),a=this.Vr.firstAfterOrEqual(n);return a!==null&&t.isEqual(a.key)}}class ze{constructor(t,n){this.key=t,this.Cr=n}static mr(t,n){return yt.comparator(t.key,n.key)||Lt(t.Cr,n.Cr)}static pr(t,n){return Lt(t.Cr,n.Cr)||yt.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Ne(ze.mr)}checkEmpty(t){return X.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,a,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new nI(u,n,a,o);this.mutationQueue.push(h);for(const m of o)this.Mr=this.Mr.add(new ze(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return X.resolve(h)}lookupMutationBatch(t,n){return X.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(t,n){const a=n+1,o=this.Nr(a),u=o<0?0:o;return X.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return X.resolve(this.mutationQueue.length===0?Fp:this.Fr-1)}getAllMutationBatches(t){return X.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const a=new ze(n,0),o=new ze(n,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([a,o],h=>{const m=this.Or(h.Cr);u.push(m)}),X.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let a=new Ne(Lt);return n.forEach(o=>{const u=new ze(o,0),h=new ze(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,h],m=>{a=a.add(m.Cr)})}),X.resolve(this.Br(a))}getAllMutationBatchesAffectingQuery(t,n){const a=n.path,o=a.length+1;let u=a;yt.isDocumentKey(u)||(u=u.child(""));const h=new ze(new yt(u),0);let m=new Ne(Lt);return this.Mr.forEachWhile(p=>{const y=p.key.path;return!!a.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Cr)),!0)},h),X.resolve(this.Br(m))}Br(t){const n=[];return t.forEach(a=>{const o=this.Or(a);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){Qt(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let a=this.Mr;return X.forEach(n.mutations,o=>{const u=new ze(o.key,n.batchId);return a=a.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Mr=a})}qn(t){}containsKey(t,n){const a=new ze(n,0),o=this.Mr.firstAfterOrEqual(a);return X.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,X.resolve()}Lr(t,n){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const n=this.Nr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(t){this.kr=t,this.docs=function(){return new oe(yt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const a=n.key,o=this.docs.get(a),u=o?o.size:0,h=this.kr(n);return this.docs=this.docs.insert(a,{document:n.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(t,a.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const a=this.docs.get(n);return X.resolve(a?a.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(t,n){let a=rr();return n.forEach(o=>{const u=this.docs.get(o);a=a.insert(o,u?u.document.mutableCopy():Ze.newInvalidDocument(o))}),X.resolve(a)}getDocumentsMatchingQuery(t,n,a,o){let u=rr();const h=n.path,m=new yt(h.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||gC(pC(E),a)<=0||(o.has(E.key)||Zf(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return X.resolve(u)}getAllFromCollectionGroup(t,n,a,o){Et()}qr(t,n){return X.forEach(this.docs,a=>n(a))}newChangeBuffer(t){return new FI(this)}getSize(t){return X.resolve(this.size)}}class FI extends kI{constructor(t){super(),this.Ir=t}applyChanges(t){const n=[];return this.changes.forEach((a,o)=>{o.isValidDocument()?n.push(this.Ir.addEntry(t,o)):this.Ir.removeEntry(a)}),X.waitFor(n)}getFromCache(t,n){return this.Ir.getEntry(t,n)}getAllFromCache(t,n){return this.Ir.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(t){this.persistence=t,this.Qr=new os(n=>Kp(n),Yp),this.lastRemoteSnapshotVersion=St.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Jp,this.targetCount=0,this.Ur=_o.Kn()}forEachTarget(t,n){return this.Qr.forEach((a,o)=>n(o)),X.resolve()}getLastRemoteSnapshotVersion(t){return X.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return X.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Ur.next(),X.resolve(this.highestTargetId)}setTargetsMetadata(t,n,a){return a&&(this.lastRemoteSnapshotVersion=a),n>this.$r&&(this.$r=n),X.resolve()}zn(t){this.Qr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ur=new _o(n),this.highestTargetId=n),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,n){return this.zn(n),this.targetCount+=1,X.resolve()}updateTargetData(t,n){return this.zn(n),X.resolve()}removeTargetData(t,n){return this.Qr.delete(n.target),this.Kr.br(n.targetId),this.targetCount-=1,X.resolve()}removeTargets(t,n,a){let o=0;const u=[];return this.Qr.forEach((h,m)=>{m.sequenceNumber<=n&&a.get(m.targetId)===null&&(this.Qr.delete(h),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)}),X.waitFor(u).next(()=>o)}getTargetCount(t){return X.resolve(this.targetCount)}getTargetData(t,n){const a=this.Qr.get(n)||null;return X.resolve(a)}addMatchingKeys(t,n,a){return this.Kr.yr(n,a),X.resolve()}removeMatchingKeys(t,n,a){this.Kr.Sr(n,a);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(h=>{u.push(o.markPotentiallyOrphaned(t,h))}),X.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.Kr.br(n),X.resolve()}getMatchingKeysForTargetId(t,n){const a=this.Kr.vr(n);return X.resolve(a)}containsKey(t,n){return X.resolve(this.Kr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(t,n){this.Wr={},this.overlays={},this.Gr=new Yf(0),this.zr=!1,this.zr=!0,this.jr=new BI,this.referenceDelegate=t(this),this.Hr=new qI(this),this.indexManager=new II,this.remoteDocumentCache=function(o){return new HI(o)}(a=>this.referenceDelegate.Jr(a)),this.serializer=new RI(n),this.Yr=new UI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new zI,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let a=this.Wr[t.toKey()];return a||(a=new jI(n,this.referenceDelegate),this.Wr[t.toKey()]=a),a}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,n,a){lt("MemoryPersistence","Starting transaction:",t);const o=new GI(this.Gr.next());return this.referenceDelegate.Zr(),a(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(t,n){return X.or(Object.values(this.Wr).map(a=>()=>a.containsKey(t,n)))}}class GI extends vC{constructor(t){super(),this.currentSequenceNumber=t}}class tg{constructor(t){this.persistence=t,this.ti=new Jp,this.ni=null}static ri(t){return new tg(t)}get ii(){if(this.ni)return this.ni;throw Et()}addReference(t,n,a){return this.ti.addReference(a,n),this.ii.delete(a.toString()),X.resolve()}removeReference(t,n,a){return this.ti.removeReference(a,n),this.ii.add(a.toString()),X.resolve()}markPotentiallyOrphaned(t,n){return this.ii.add(n.toString()),X.resolve()}removeTarget(t,n){this.ti.br(n.targetId).forEach(o=>this.ii.add(o.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>a.removeTargetData(t,n))}Zr(){this.ni=new Set}Xr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return X.forEach(this.ii,a=>{const o=yt.fromPath(a);return this.si(t,o).next(u=>{u||n.removeEntry(o,St.min())})}).next(()=>(this.ni=null,n.apply(t)))}updateLimboDocument(t,n){return this.si(t,n).next(a=>{a?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(t){return 0}si(t,n){return X.or([()=>X.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.ei(t,n)])}}class Nf{constructor(t,n){this.persistence=t,this.oi=new os(a=>TC(a.path),(a,o)=>a.isEqual(o)),this.garbageCollector=PI(this,n)}static ri(t,n){return new Nf(t,n)}Zr(){}Xr(t){return X.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}nr(t){const n=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(a=>n.next(o=>a+o))}sr(t){let n=0;return this.rr(t,a=>{n++}).next(()=>n)}rr(t,n){return X.forEach(this.oi,(a,o)=>this.ar(t,a,o).next(u=>u?X.resolve():n(o)))}removeTargets(t,n,a){return this.persistence.getTargetCache().removeTargets(t,n,a)}removeOrphanedDocuments(t,n){let a=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(t,h=>this.ar(t,h,n).next(m=>{m||(a++,u.removeEntry(h,St.min()))})).next(()=>u.apply(t)).next(()=>a)}markPotentiallyOrphaned(t,n){return this.oi.set(n,t.currentSequenceNumber),X.resolve()}removeTarget(t,n){const a=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,a)}addReference(t,n,a){return this.oi.set(a,t.currentSequenceNumber),X.resolve()}removeReference(t,n,a){return this.oi.set(a,t.currentSequenceNumber),X.resolve()}updateLimboDocument(t,n){return this.oi.set(n,t.currentSequenceNumber),X.resolve()}Jr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=lf(t.data.value)),n}ar(t,n,a){return X.or([()=>this.persistence.ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.oi.get(n);return X.resolve(o!==void 0&&o>a)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(t,n,a,o){this.targetId=t,this.fromCache=n,this.Hi=a,this.Ji=o}static Yi(t,n){let a=kt(),o=kt();for(const u of n.docChanges)switch(u.type){case 0:a=a.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new eg(t,n.fromCache,a,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return HR()?8:_C(Je())>0?6:4}()}initialize(t,n){this.ns=t,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(t,n,a,o){const u={result:null};return this.rs(t,n).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ss(t,n,o,a).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new KI;return this._s(t,n,h).next(m=>{if(u.result=m,this.Xi)return this.us(t,n,h,m.size)})}).next(()=>u.result)}us(t,n,a,o){return a.documentReadCount<this.es?(to()<=Pt.DEBUG&&lt("QueryEngine","SDK will not create cache indexes for query:",eo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),X.resolve()):(to()<=Pt.DEBUG&&lt("QueryEngine","Query:",eo(n),"scans",a.documentReadCount,"local documents and returns",o,"documents as results."),a.documentReadCount>this.ts*o?(to()<=Pt.DEBUG&&lt("QueryEngine","The SDK decides to create cache indexes for query:",eo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,pi(n))):X.resolve())}rs(t,n){if(O0(n))return X.resolve(null);let a=pi(n);return this.indexManager.getIndexType(t,a).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=tp(n,null,"F"),a=pi(n)),this.indexManager.getDocumentsMatchingTarget(t,a).next(u=>{const h=kt(...u);return this.ns.getDocuments(t,h).next(m=>this.indexManager.getMinOffset(t,a).next(p=>{const y=this.cs(n,m);return this.ls(n,y,h,p.readTime)?this.rs(t,tp(n,null,"F")):this.hs(t,y,n,p)}))})))}ss(t,n,a,o){return O0(n)||o.isEqual(St.min())?X.resolve(null):this.ns.getDocuments(t,a).next(u=>{const h=this.cs(n,u);return this.ls(n,h,a,o)?X.resolve(null):(to()<=Pt.DEBUG&&lt("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),eo(n)),this.hs(t,h,n,mC(o,nu)).next(m=>m))})}cs(t,n){let a=new Ne(ab(t));return n.forEach((o,u)=>{Zf(t,u)&&(a=a.add(u))}),a}ls(t,n,a,o){if(t.limit===null)return!1;if(a.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(t,n,a){return to()<=Pt.DEBUG&&lt("QueryEngine","Using full collection scan to execute query:",eo(n)),this.ns.getDocumentsMatchingQuery(t,n,oa.min(),a)}hs(t,n,a,o){return this.ns.getDocumentsMatchingQuery(t,a,o).next(u=>(n.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="LocalStore",QI=3e8;class $I{constructor(t,n,a,o){this.persistence=t,this.Ps=n,this.serializer=o,this.Ts=new oe(Lt),this.Is=new os(u=>Kp(u),Yp),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(a)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new LI(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ts))}}function XI(i,t,n,a){return new $I(i,t,n,a)}async function Ib(i,t){const n=Rt(i);return await n.persistence.runTransaction("Handle user change","readonly",a=>{let o;return n.mutationQueue.getAllMutationBatches(a).next(u=>(o=u,n.As(t),n.mutationQueue.getAllMutationBatches(a))).next(u=>{const h=[],m=[];let p=kt();for(const y of o){h.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of u){m.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(a,p).next(y=>({Rs:y,removedBatchIds:h,addedBatchIds:m}))})})}function WI(i,t){const n=Rt(i);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{const o=t.batch.keys(),u=n.ds.newChangeBuffer({trackRemovals:!0});return function(m,p,y,E){const A=y.batch,w=A.keys();let D=X.resolve();return w.forEach(V=>{D=D.next(()=>E.getEntry(p,V)).next(K=>{const z=y.docVersions.get(V);Qt(z!==null),K.version.compareTo(z)<0&&(A.applyToRemoteDocument(K,y),K.isValidDocument()&&(K.setReadTime(y.commitVersion),E.addEntry(K)))})}),D.next(()=>m.mutationQueue.removeMutationBatch(p,A))}(n,a,t,u).next(()=>u.apply(a)).next(()=>n.mutationQueue.performConsistencyCheck(a)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(a,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(m){let p=kt();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(p=p.add(m.batch.mutations[y].key));return p}(t))).next(()=>n.localDocuments.getDocuments(a,o))})}function Ob(i){const t=Rt(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Hr.getLastRemoteSnapshotVersion(n))}function ZI(i,t){const n=Rt(i),a=t.snapshotVersion;let o=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=n.ds.newChangeBuffer({trackRemovals:!0});o=n.Ts;const m=[];t.targetChanges.forEach((E,A)=>{const w=o.get(A);if(!w)return;m.push(n.Hr.removeMatchingKeys(u,E.removedDocuments,A).next(()=>n.Hr.addMatchingKeys(u,E.addedDocuments,A)));let D=w.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(A)!==null?D=D.withResumeToken(Ke.EMPTY_BYTE_STRING,St.min()).withLastLimboFreeSnapshotVersion(St.min()):E.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(E.resumeToken,a)),o=o.insert(A,D),function(K,z,q){return K.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-K.snapshotVersion.toMicroseconds()>=QI?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(w,D,E)&&m.push(n.Hr.updateTargetData(u,D))});let p=rr(),y=kt();if(t.documentUpdates.forEach(E=>{t.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(JI(u,h,t.documentUpdates).next(E=>{p=E.Vs,y=E.fs})),!a.isEqual(St.min())){const E=n.Hr.getLastRemoteSnapshotVersion(u).next(A=>n.Hr.setTargetsMetadata(u,u.currentSequenceNumber,a));m.push(E)}return X.waitFor(m).next(()=>h.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,p,y)).next(()=>p)}).then(u=>(n.Ts=o,u))}function JI(i,t,n){let a=kt(),o=kt();return n.forEach(u=>a=a.add(u)),t.getEntries(i,a).next(u=>{let h=rr();return n.forEach((m,p)=>{const y=u.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(St.min())?(t.removeEntry(m,p.readTime),h=h.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(p),h=h.insert(m,p)):lt(ng,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)}),{Vs:h,fs:o}})}function tO(i,t){const n=Rt(i);return n.persistence.runTransaction("Get next mutation batch","readonly",a=>(t===void 0&&(t=Fp),n.mutationQueue.getNextMutationBatchAfterBatchId(a,t)))}function eO(i,t){const n=Rt(i);return n.persistence.runTransaction("Allocate target","readwrite",a=>{let o;return n.Hr.getTargetData(a,t).next(u=>u?(o=u,X.resolve(o)):n.Hr.allocateTargetId(a).next(h=>(o=new Jr(t,h,"TargetPurposeListen",a.currentSequenceNumber),n.Hr.addTargetData(a,o).next(()=>o))))}).then(a=>{const o=n.Ts.get(a.targetId);return(o===null||a.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(a.targetId,a),n.Is.set(t,a.targetId)),a})}async function ap(i,t,n){const a=Rt(i),o=a.Ts.get(t),u=n?"readwrite":"readwrite-primary";try{n||await a.persistence.runTransaction("Release target",u,h=>a.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Oo(h))throw h;lt(ng,`Failed to update sequence numbers for target ${t}: ${h}`)}a.Ts=a.Ts.remove(t),a.Is.delete(o.target)}function H0(i,t,n){const a=Rt(i);let o=St.min(),u=kt();return a.persistence.runTransaction("Execute query","readwrite",h=>function(p,y,E){const A=Rt(p),w=A.Is.get(E);return w!==void 0?X.resolve(A.Ts.get(w)):A.Hr.getTargetData(y,E)}(a,h,pi(t)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,a.Hr.getMatchingKeysForTargetId(h,m.targetId).next(p=>{u=p})}).next(()=>a.Ps.getDocumentsMatchingQuery(h,t,n?o:St.min(),n?u:kt())).next(m=>(nO(a,jC(t),m),{documents:m,gs:u})))}function nO(i,t,n){let a=i.Es.get(t)||St.min();n.forEach((o,u)=>{u.readTime.compareTo(a)>0&&(a=u.readTime)}),i.Es.set(t,a)}class F0{constructor(){this.activeTargetIds=YC()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class iO{constructor(){this.ho=new F0,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,a){}addLocalQueryTarget(t,n=!0){return n&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,n,a){this.Po[t]=n}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new F0,Promise.resolve()}handleUserChange(t,n,a){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0="ConnectivityMonitor";class G0{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){lt(q0,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){lt(q0,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jc=null;function sp(){return Jc===null?Jc=function(){return 268435456+Math.round(2147483648*Math.random())}():Jc++,"0x"+Jc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="RestConnection",aO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sO{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=n+"://"+t.host,this.yo=`projects/${a}/databases/${o}`,this.wo=this.databaseId.database===Sf?`project_id=${a}`:`project_id=${a}&database_id=${o}`}So(t,n,a,o,u){const h=sp(),m=this.bo(t,n.toUriEncodedString());lt(Im,`Sending RPC '${t}' ${h}:`,m,a);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,o,u),this.vo(t,m,p,a).then(y=>(lt(Im,`Received RPC '${t}' ${h}: `,y),y),y=>{throw po(Im,`RPC '${t}' ${h} failed with error: `,y,"url: ",m,"request:",a),y})}Co(t,n,a,o,u,h){return this.So(t,n,a,o,u)}Do(t,n,a){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Co}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>t[u]=o),a&&a.headers.forEach((o,u)=>t[u]=o)}bo(t,n){const a=aO[t];return`${this.po}/v1/${n}:${a}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Ko(t){this.ko(t)}Uo(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection";class lO extends sO{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,a,o){const u=sp();return new Promise((h,m)=>{const p=new PT;p.setWithCredentials(!0),p.listenOnce(kT.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case of.NO_ERROR:const E=p.getResponseJson();lt(Xe,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(E)),h(E);break;case of.TIMEOUT:lt(Xe,`RPC '${t}' ${u} timed out`),m(new gt(tt.DEADLINE_EXCEEDED,"Request time out"));break;case of.HTTP_ERROR:const A=p.getStatus();if(lt(Xe,`RPC '${t}' ${u} failed with status:`,A,"response text:",p.getResponseText()),A>0){let w=p.getResponseJson();Array.isArray(w)&&(w=w[0]);const D=w==null?void 0:w.error;if(D&&D.status&&D.message){const V=function(z){const q=z.toLowerCase().replace(/_/g,"-");return Object.values(tt).indexOf(q)>=0?q:tt.UNKNOWN}(D.status);m(new gt(V,D.message))}else m(new gt(tt.UNKNOWN,"Server responded with status "+p.getStatus()))}else m(new gt(tt.UNAVAILABLE,"Connection failed."));break;default:Et()}}finally{lt(Xe,`RPC '${t}' ${u} completed.`)}});const y=JSON.stringify(o);lt(Xe,`RPC '${t}' ${u} sending request:`,o),p.send(n,"POST",y,a,15)})}Wo(t,n,a){const o=sp(),u=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],h=UT(),m=LT(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,n,a),p.encodeInitMessageHeaders=!0;const E=u.join("");lt(Xe,`Creating RPC '${t}' stream ${o}: ${E}`,p);const A=h.createWebChannel(E,p);let w=!1,D=!1;const V=new oO({Fo:z=>{D?lt(Xe,`Not sending because RPC '${t}' stream ${o} is closed:`,z):(w||(lt(Xe,`Opening RPC '${t}' stream ${o} transport.`),A.open(),w=!0),lt(Xe,`RPC '${t}' stream ${o} sending:`,z),A.send(z))},Mo:()=>A.close()}),K=(z,q,Z)=>{z.listen(q,W=>{try{Z(W)}catch(ct){setTimeout(()=>{throw ct},0)}})};return K(A,Fl.EventType.OPEN,()=>{D||(lt(Xe,`RPC '${t}' stream ${o} transport opened.`),V.Qo())}),K(A,Fl.EventType.CLOSE,()=>{D||(D=!0,lt(Xe,`RPC '${t}' stream ${o} transport closed`),V.Ko())}),K(A,Fl.EventType.ERROR,z=>{D||(D=!0,po(Xe,`RPC '${t}' stream ${o} transport errored:`,z),V.Ko(new gt(tt.UNAVAILABLE,"The operation could not be completed")))}),K(A,Fl.EventType.MESSAGE,z=>{var q;if(!D){const Z=z.data[0];Qt(!!Z);const W=Z,ct=(W==null?void 0:W.error)||((q=W[0])===null||q===void 0?void 0:q.error);if(ct){lt(Xe,`RPC '${t}' stream ${o} received error:`,ct);const at=ct.status;let At=function(S){const I=Te[S];if(I!==void 0)return gb(I)}(at),x=ct.message;At===void 0&&(At=tt.INTERNAL,x="Unknown error status: "+at+" with message "+ct.message),D=!0,V.Ko(new gt(At,x)),A.close()}else lt(Xe,`RPC '${t}' stream ${o} received:`,Z),V.Uo(Z)}}),K(m,VT.STAT_EVENT,z=>{z.stat===$m.PROXY?lt(Xe,`RPC '${t}' stream ${o} detected buffering proxy`):z.stat===$m.NOPROXY&&lt(Xe,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{V.$o()},0),V}}function Om(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(i){return new hI(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(t,n,a=1e3,o=1.5,u=6e4){this.Ti=t,this.timerId=n,this.Go=a,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const n=Math.floor(this.Ho+this.e_()),a=Math.max(0,Date.now()-this.Yo),o=Math.max(0,n-a);o>0&&lt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${a} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="PersistentStream";class Nb{constructor(t,n,a,o,u,h,m,p){this.Ti=t,this.n_=a,this.r_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Db(t,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():n&&n.code===tt.RESOURCE_EXHAUSTED?(ir(n.toString()),ir("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===tt.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,o])=>{this.i_===n&&this.V_(a,o)},a=>{t(()=>{const o=new gt(tt.UNKNOWN,"Fetching auth token failed: "+a.message);return this.m_(o)})})}V_(t,n){const a=this.R_(this.i_);this.stream=this.f_(t,n),this.stream.xo(()=>{a(()=>this.listener.xo())}),this.stream.No(()=>{a(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{a(()=>this.m_(o))}),this.stream.onMessage(o=>{a(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return lt(K0,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return n=>{this.Ti.enqueueAndForget(()=>this.i_===t?n():(lt(K0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uO extends Nb{constructor(t,n,a,o,u,h){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,a,o,h),this.serializer=u}f_(t,n){return this.connection.Wo("Listen",t,n)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const n=pI(this.serializer,t),a=function(u){if(!("targetChange"in u))return St.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?St.min():h.readTime?yi(h.readTime):St.min()}(t);return this.listener.p_(n,a)}y_(t){const n={};n.database=rp(this.serializer),n.addTarget=function(u,h){let m;const p=h.target;if(m=Jm(p)?{documents:vI(u,p)}:{query:_I(u,p).ht},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=_b(u,h.resumeToken);const y=ep(u,h.expectedCount);y!==null&&(m.expectedCount=y)}else if(h.snapshotVersion.compareTo(St.min())>0){m.readTime=Df(u,h.snapshotVersion.toTimestamp());const y=ep(u,h.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,t);const a=TI(this.serializer,t);a&&(n.labels=a),this.I_(n)}w_(t){const n={};n.database=rp(this.serializer),n.removeTarget=t,this.I_(n)}}class cO extends Nb{constructor(t,n,a,o,u,h){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,a,o,h),this.serializer=u}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,n){return this.connection.Wo("Write",t,n)}g_(t){return Qt(!!t.streamToken),this.lastStreamToken=t.streamToken,Qt(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){Qt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const n=yI(t.writeResults,t.commitTime),a=yi(t.commitTime);return this.listener.v_(a,n)}C_(){const t={};t.database=rp(this.serializer),this.I_(t)}b_(t){const n={streamToken:this.lastStreamToken,writes:t.map(a=>gI(this.serializer,a))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{}class hO extends fO{constructor(t,n,a,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=a,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new gt(tt.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,a,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.So(t,np(n,a),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===tt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new gt(tt.UNKNOWN,u.toString())})}Co(t,n,a,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Co(t,np(n,a),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===tt.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new gt(tt.UNKNOWN,h.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class dO{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(ir(n),this.N_=!1):lt("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="RemoteStore";class mO{constructor(t,n,a,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=a,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(h=>{a.enqueueAndForget(async()=>{us(this)&&(lt(es,"Restarting streams for network reachability change."),await async function(p){const y=Rt(p);y.W_.add(4),await Eu(y),y.j_.set("Unknown"),y.W_.delete(4),await ih(y)}(this))})}),this.j_=new dO(a,o)}}async function ih(i){if(us(i))for(const t of i.G_)await t(!0)}async function Eu(i){for(const t of i.G_)await t(!1)}function xb(i,t){const n=Rt(i);n.U_.has(t.targetId)||(n.U_.set(t.targetId,t),sg(n)?ag(n):Do(n).c_()&&rg(n,t))}function ig(i,t){const n=Rt(i),a=Do(n);n.U_.delete(t),a.c_()&&Mb(n,t),n.U_.size===0&&(a.c_()?a.P_():us(n)&&n.j_.set("Unknown"))}function rg(i,t){if(i.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(St.min())>0){const n=i.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Do(i).y_(t)}function Mb(i,t){i.H_.Ne(t),Do(i).w_(t)}function ag(i){i.H_=new lI({getRemoteKeysForTarget:t=>i.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>i.U_.get(t)||null,it:()=>i.datastore.serializer.databaseId}),Do(i).start(),i.j_.B_()}function sg(i){return us(i)&&!Do(i).u_()&&i.U_.size>0}function us(i){return Rt(i).W_.size===0}function Pb(i){i.H_=void 0}async function pO(i){i.j_.set("Online")}async function gO(i){i.U_.forEach((t,n)=>{rg(i,t)})}async function yO(i,t){Pb(i),sg(i)?(i.j_.q_(t),ag(i)):i.j_.set("Unknown")}async function vO(i,t,n){if(i.j_.set("Online"),t instanceof vb&&t.state===2&&t.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.U_.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.U_.delete(m),o.H_.removeTarget(m))}(i,t)}catch(a){lt(es,"Failed to remove targets %s: %s ",t.targetIds.join(","),a),await xf(i,a)}else if(t instanceof ff?i.H_.We(t):t instanceof yb?i.H_.Ze(t):i.H_.je(t),!n.isEqual(St.min()))try{const a=await Ob(i.localStore);n.compareTo(a)>=0&&await function(u,h){const m=u.H_.ot(h);return m.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=u.U_.get(y);E&&u.U_.set(y,E.withResumeToken(p.resumeToken,h))}}),m.targetMismatches.forEach((p,y)=>{const E=u.U_.get(p);if(!E)return;u.U_.set(p,E.withResumeToken(Ke.EMPTY_BYTE_STRING,E.snapshotVersion)),Mb(u,p);const A=new Jr(E.target,p,y,E.sequenceNumber);rg(u,A)}),u.remoteSyncer.applyRemoteEvent(m)}(i,n)}catch(a){lt(es,"Failed to raise snapshot:",a),await xf(i,a)}}async function xf(i,t,n){if(!Oo(t))throw t;i.W_.add(1),await Eu(i),i.j_.set("Offline"),n||(n=()=>Ob(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{lt(es,"Retrying IndexedDB access"),await n(),i.W_.delete(1),await ih(i)})}function kb(i,t){return t().catch(n=>xf(i,n,t))}async function rh(i){const t=Rt(i),n=fa(t);let a=t.K_.length>0?t.K_[t.K_.length-1].batchId:Fp;for(;_O(t);)try{const o=await tO(t.localStore,a);if(o===null){t.K_.length===0&&n.P_();break}a=o.batchId,EO(t,o)}catch(o){await xf(t,o)}Vb(t)&&Lb(t)}function _O(i){return us(i)&&i.K_.length<10}function EO(i,t){i.K_.push(t);const n=fa(i);n.c_()&&n.S_&&n.b_(t.mutations)}function Vb(i){return us(i)&&!fa(i).u_()&&i.K_.length>0}function Lb(i){fa(i).start()}async function TO(i){fa(i).C_()}async function bO(i){const t=fa(i);for(const n of i.K_)t.b_(n.mutations)}async function AO(i,t,n){const a=i.K_.shift(),o=Xp.from(a,t,n);await kb(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await rh(i)}async function SO(i,t){t&&fa(i).S_&&await async function(a,o){if(function(h){return aI(h)&&h!==tt.ABORTED}(o.code)){const u=a.K_.shift();fa(a).h_(),await kb(a,()=>a.remoteSyncer.rejectFailedWrite(u.batchId,o)),await rh(a)}}(i,t),Vb(i)&&Lb(i)}async function Y0(i,t){const n=Rt(i);n.asyncQueue.verifyOperationInProgress(),lt(es,"RemoteStore received new credentials");const a=us(n);n.W_.add(3),await Eu(n),a&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.W_.delete(3),await ih(n)}async function wO(i,t){const n=Rt(i);t?(n.W_.delete(2),await ih(n)):t||(n.W_.add(2),await Eu(n),n.j_.set("Unknown"))}function Do(i){return i.J_||(i.J_=function(n,a,o){const u=Rt(n);return u.M_(),new uO(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{xo:pO.bind(null,i),No:gO.bind(null,i),Lo:yO.bind(null,i),p_:vO.bind(null,i)}),i.G_.push(async t=>{t?(i.J_.h_(),sg(i)?ag(i):i.j_.set("Unknown")):(await i.J_.stop(),Pb(i))})),i.J_}function fa(i){return i.Y_||(i.Y_=function(n,a,o){const u=Rt(n);return u.M_(),new cO(a,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{xo:()=>Promise.resolve(),No:TO.bind(null,i),Lo:SO.bind(null,i),D_:bO.bind(null,i),v_:AO.bind(null,i)}),i.G_.push(async t=>{t?(i.Y_.h_(),await rh(i)):(await i.Y_.stop(),i.K_.length>0&&(lt(es,`Stopping write stream with ${i.K_.length} pending writes`),i.K_=[]))})),i.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(t,n,a,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=a,this.op=o,this.removalCallback=u,this.deferred=new ra,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,a,o,u){const h=Date.now()+a,m=new og(t,n,h,o,u);return m.start(a),m}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new gt(tt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lg(i,t){if(ir("AsyncQueue",`${t}: ${i}`),Oo(i))return new gt(tt.UNAVAILABLE,`${t}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{static emptySet(t){return new lo(t.comparator)}constructor(t){this.comparator=t?(n,a)=>t(n,a)||yt.comparator(n.key,a.key):(n,a)=>yt.comparator(n.key,a.key),this.keyedMap=ql(),this.sortedSet=new oe(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,a)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof lo)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),a=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=a.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const a=new lo;return a.comparator=this.comparator,a.keyedMap=t,a.sortedSet=n,a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(){this.Z_=new oe(yt.comparator)}track(t){const n=t.doc.key,a=this.Z_.get(n);a?t.type!==0&&a.type===3?this.Z_=this.Z_.insert(n,t):t.type===3&&a.type!==1?this.Z_=this.Z_.insert(n,{type:a.type,doc:t.doc}):t.type===2&&a.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):t.type===2&&a.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:t.doc}):t.type===1&&a.type===0?this.Z_=this.Z_.remove(n):t.type===1&&a.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:a.doc}):t.type===0&&a.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):Et():this.Z_=this.Z_.insert(n,t)}X_(){const t=[];return this.Z_.inorderTraversal((n,a)=>{t.push(a)}),t}}class Eo{constructor(t,n,a,o,u,h,m,p,y){this.query=t,this.docs=n,this.oldDocs=a,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(t,n,a,o,u){const h=[];return n.forEach(m=>{h.push({type:0,doc:m})}),new Eo(t,n,lo.emptySet(n),h,a,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Wf(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,a=t.docChanges;if(n.length!==a.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==a[o].type||!n[o].doc.isEqual(a[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class CO{constructor(){this.queries=$0(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,a){const o=Rt(n),u=o.queries;o.queries=$0(),u.forEach((h,m)=>{for(const p of m.ta)p.onError(a)})})(this,new gt(tt.ABORTED,"Firestore shutting down"))}}function $0(){return new os(i=>rb(i),Wf)}async function IO(i,t){const n=Rt(i);let a=3;const o=t.query;let u=n.queries.get(o);u?!u.na()&&t.ra()&&(a=2):(u=new RO,a=t.ra()?0:1);try{switch(a){case 0:u.ea=await n.onListen(o,!0);break;case 1:u.ea=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(h){const m=lg(h,`Initialization of query '${eo(t.query)}' failed`);return void t.onError(m)}n.queries.set(o,u),u.ta.push(t),t.sa(n.onlineState),u.ea&&t.oa(u.ea)&&ug(n)}async function OO(i,t){const n=Rt(i),a=t.query;let o=3;const u=n.queries.get(a);if(u){const h=u.ta.indexOf(t);h>=0&&(u.ta.splice(h,1),u.ta.length===0?o=t.ra()?0:1:!u.na()&&t.ra()&&(o=2))}switch(o){case 0:return n.queries.delete(a),n.onUnlisten(a,!0);case 1:return n.queries.delete(a),n.onUnlisten(a,!1);case 2:return n.onLastRemoteStoreUnlisten(a);default:return}}function DO(i,t){const n=Rt(i);let a=!1;for(const o of t){const u=o.query,h=n.queries.get(u);if(h){for(const m of h.ta)m.oa(o)&&(a=!0);h.ea=o}}a&&ug(n)}function NO(i,t,n){const a=Rt(i),o=a.queries.get(t);if(o)for(const u of o.ta)u.onError(n);a.queries.delete(t)}function ug(i){i.ia.forEach(t=>{t.next()})}var op,X0;(X0=op||(op={}))._a="default",X0.Cache="cache";class xO{constructor(t,n,a){this.query=t,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=a||{}}oa(t){if(!this.options.includeMetadataChanges){const a=[];for(const o of t.docChanges)o.type!==3&&a.push(o);t=new Eo(t.query,t.docs,t.oldDocs,a,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ua?this.la(t)&&(this.aa.next(t),n=!0):this.ha(t,this.onlineState)&&(this.Pa(t),n=!0),this.ca=t,n}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),n=!0),n}ha(t,n){if(!t.fromCache||!this.ra())return!0;const a=n!=="Offline";return(!this.options.Ta||!a)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}la(t){if(t.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(t){t=Eo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==op.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(t){this.key=t}}class zb{constructor(t){this.key=t}}class MO{constructor(t,n){this.query=t,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=kt(),this.mutatedKeys=kt(),this.ya=ab(t),this.wa=new lo(this.ya)}get Sa(){return this.fa}ba(t,n){const a=n?n.Da:new Q0,o=n?n.wa:this.wa;let u=n?n.mutatedKeys:this.mutatedKeys,h=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((E,A)=>{const w=o.get(E),D=Zf(this.query,A)?A:null,V=!!w&&this.mutatedKeys.has(w.key),K=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let z=!1;w&&D?w.data.isEqual(D.data)?V!==K&&(a.track({type:3,doc:D}),z=!0):this.va(w,D)||(a.track({type:2,doc:D}),z=!0,(p&&this.ya(D,p)>0||y&&this.ya(D,y)<0)&&(m=!0)):!w&&D?(a.track({type:0,doc:D}),z=!0):w&&!D&&(a.track({type:1,doc:w}),z=!0,(p||y)&&(m=!0)),z&&(D?(h=h.add(D),u=K?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),a.track({type:1,doc:E})}return{wa:h,Da:a,ls:m,mutatedKeys:u}}va(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,a,o){const u=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const h=t.Da.X_();h.sort((E,A)=>function(D,V){const K=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Et()}};return K(D)-K(V)}(E.type,A.type)||this.ya(E.doc,A.doc)),this.Ca(a),o=o!=null&&o;const m=n&&!o?this.Fa():[],p=this.pa.size===0&&this.current&&!o?1:0,y=p!==this.ga;return this.ga=p,h.length!==0||y?{snapshot:new Eo(this.query,t.wa,u,h,t.mutatedKeys,p===0,y,!1,!!a&&a.resumeToken.approximateByteSize()>0),Ma:m}:{Ma:m}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Q0,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=kt(),this.wa.forEach(a=>{this.xa(a.key)&&(this.pa=this.pa.add(a.key))});const n=[];return t.forEach(a=>{this.pa.has(a)||n.push(new zb(a))}),this.pa.forEach(a=>{t.has(a)||n.push(new Ub(a))}),n}Oa(t){this.fa=t.gs,this.pa=kt();const n=this.ba(t.documents);return this.applyChanges(n,!0)}Na(){return Eo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const cg="SyncEngine";class PO{constructor(t,n,a){this.query=t,this.targetId=n,this.view=a}}class kO{constructor(t){this.key=t,this.Ba=!1}}class VO{constructor(t,n,a,o,u,h){this.localStore=t,this.remoteStore=n,this.eventManager=a,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.La={},this.ka=new os(m=>rb(m),Wf),this.qa=new Map,this.Qa=new Set,this.$a=new oe(yt.comparator),this.Ka=new Map,this.Ua=new Jp,this.Wa={},this.Ga=new Map,this.za=_o.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function LO(i,t,n=!0){const a=Gb(i);let o;const u=a.ka.get(t);return u?(a.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Na()):o=await Bb(a,t,n,!0),o}async function UO(i,t){const n=Gb(i);await Bb(n,t,!0,!1)}async function Bb(i,t,n,a){const o=await eO(i.localStore,pi(t)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,n);let m;return a&&(m=await zO(i,t,u,h==="current",o.resumeToken)),i.isPrimaryClient&&n&&xb(i.remoteStore,o),m}async function zO(i,t,n,a,o){i.Ha=(A,w,D)=>async function(K,z,q,Z){let W=z.view.ba(q);W.ls&&(W=await H0(K.localStore,z.query,!1).then(({documents:x})=>z.view.ba(x,W)));const ct=Z&&Z.targetChanges.get(z.targetId),at=Z&&Z.targetMismatches.get(z.targetId)!=null,At=z.view.applyChanges(W,K.isPrimaryClient,ct,at);return Z0(K,z.targetId,At.Ma),At.snapshot}(i,A,w,D);const u=await H0(i.localStore,t,!0),h=new MO(t,u.gs),m=h.ba(u.documents),p=_u.createSynthesizedTargetChangeForCurrentChange(n,a&&i.onlineState!=="Offline",o),y=h.applyChanges(m,i.isPrimaryClient,p);Z0(i,n,y.Ma);const E=new PO(t,n,h);return i.ka.set(t,E),i.qa.has(n)?i.qa.get(n).push(t):i.qa.set(n,[t]),y.snapshot}async function BO(i,t,n){const a=Rt(i),o=a.ka.get(t),u=a.qa.get(o.targetId);if(u.length>1)return a.qa.set(o.targetId,u.filter(h=>!Wf(h,t))),void a.ka.delete(t);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(o.targetId),a.sharedClientState.isActiveQueryTarget(o.targetId)||await ap(a.localStore,o.targetId,!1).then(()=>{a.sharedClientState.clearQueryState(o.targetId),n&&ig(a.remoteStore,o.targetId),lp(a,o.targetId)}).catch(Io)):(lp(a,o.targetId),await ap(a.localStore,o.targetId,!0))}async function jO(i,t){const n=Rt(i),a=n.ka.get(t),o=n.qa.get(a.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(a.targetId),ig(n.remoteStore,a.targetId))}async function HO(i,t,n){const a=$O(i);try{const o=await function(h,m){const p=Rt(h),y=De.now(),E=m.reduce((D,V)=>D.add(V.key),kt());let A,w;return p.persistence.runTransaction("Locally write mutations","readwrite",D=>{let V=rr(),K=kt();return p.ds.getEntries(D,E).next(z=>{V=z,V.forEach((q,Z)=>{Z.isValidDocument()||(K=K.add(q))})}).next(()=>p.localDocuments.getOverlayedDocuments(D,V)).next(z=>{A=z;const q=[];for(const Z of m){const W=tI(Z,A.get(Z.key).overlayedDocument);W!=null&&q.push(new ls(Z.key,W,XT(W.value.mapValue),gi.exists(!0)))}return p.mutationQueue.addMutationBatch(D,y,q,m)}).next(z=>{w=z;const q=z.applyToLocalDocumentSet(A,K);return p.documentOverlayCache.saveOverlays(D,z.batchId,q)})}).then(()=>({batchId:w.batchId,changes:ob(A)}))}(a.localStore,t);a.sharedClientState.addPendingMutation(o.batchId),function(h,m,p){let y=h.Wa[h.currentUser.toKey()];y||(y=new oe(Lt)),y=y.insert(m,p),h.Wa[h.currentUser.toKey()]=y}(a,o.batchId,n),await Tu(a,o.changes),await rh(a.remoteStore)}catch(o){const u=lg(o,"Failed to persist write");n.reject(u)}}async function jb(i,t){const n=Rt(i);try{const a=await ZI(n.localStore,t);t.targetChanges.forEach((o,u)=>{const h=n.Ka.get(u);h&&(Qt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Ba=!0:o.modifiedDocuments.size>0?Qt(h.Ba):o.removedDocuments.size>0&&(Qt(h.Ba),h.Ba=!1))}),await Tu(n,a,t)}catch(a){await Io(a)}}function W0(i,t,n){const a=Rt(i);if(a.isPrimaryClient&&n===0||!a.isPrimaryClient&&n===1){const o=[];a.ka.forEach((u,h)=>{const m=h.view.sa(t);m.snapshot&&o.push(m.snapshot)}),function(h,m){const p=Rt(h);p.onlineState=m;let y=!1;p.queries.forEach((E,A)=>{for(const w of A.ta)w.sa(m)&&(y=!0)}),y&&ug(p)}(a.eventManager,t),o.length&&a.La.p_(o),a.onlineState=t,a.isPrimaryClient&&a.sharedClientState.setOnlineState(t)}}async function FO(i,t,n){const a=Rt(i);a.sharedClientState.updateQueryState(t,"rejected",n);const o=a.Ka.get(t),u=o&&o.key;if(u){let h=new oe(yt.comparator);h=h.insert(u,Ze.newNoDocument(u,St.min()));const m=kt().add(u),p=new eh(St.min(),new Map,new oe(Lt),h,m);await jb(a,p),a.$a=a.$a.remove(u),a.Ka.delete(t),fg(a)}else await ap(a.localStore,t,!1).then(()=>lp(a,t,n)).catch(Io)}async function qO(i,t){const n=Rt(i),a=t.batch.batchId;try{const o=await WI(n.localStore,t);Fb(n,a,null),Hb(n,a),n.sharedClientState.updateMutationState(a,"acknowledged"),await Tu(n,o)}catch(o){await Io(o)}}async function GO(i,t,n){const a=Rt(i);try{const o=await function(h,m){const p=Rt(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,m).next(A=>(Qt(A!==null),E=A.keys(),p.mutationQueue.removeMutationBatch(y,A))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(a.localStore,t);Fb(a,t,n),Hb(a,t),a.sharedClientState.updateMutationState(t,"rejected",n),await Tu(a,o)}catch(o){await Io(o)}}function Hb(i,t){(i.Ga.get(t)||[]).forEach(n=>{n.resolve()}),i.Ga.delete(t)}function Fb(i,t,n){const a=Rt(i);let o=a.Wa[a.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),a.Wa[a.currentUser.toKey()]=o}}function lp(i,t,n=null){i.sharedClientState.removeLocalQueryTarget(t);for(const a of i.qa.get(t))i.ka.delete(a),n&&i.La.Ja(a,n);i.qa.delete(t),i.isPrimaryClient&&i.Ua.br(t).forEach(a=>{i.Ua.containsKey(a)||qb(i,a)})}function qb(i,t){i.Qa.delete(t.path.canonicalString());const n=i.$a.get(t);n!==null&&(ig(i.remoteStore,n),i.$a=i.$a.remove(t),i.Ka.delete(n),fg(i))}function Z0(i,t,n){for(const a of n)a instanceof Ub?(i.Ua.addReference(a.key,t),KO(i,a)):a instanceof zb?(lt(cg,"Document no longer in limbo: "+a.key),i.Ua.removeReference(a.key,t),i.Ua.containsKey(a.key)||qb(i,a.key)):Et()}function KO(i,t){const n=t.key,a=n.path.canonicalString();i.$a.get(n)||i.Qa.has(a)||(lt(cg,"New document in limbo: "+n),i.Qa.add(a),fg(i))}function fg(i){for(;i.Qa.size>0&&i.$a.size<i.maxConcurrentLimboResolutions;){const t=i.Qa.values().next().value;i.Qa.delete(t);const n=new yt(ne.fromString(t)),a=i.za.next();i.Ka.set(a,new kO(n)),i.$a=i.$a.insert(n,a),xb(i.remoteStore,new Jr(pi(ib(n.path)),a,"TargetPurposeLimboResolution",Yf.ae))}}async function Tu(i,t,n){const a=Rt(i),o=[],u=[],h=[];a.ka.isEmpty()||(a.ka.forEach((m,p)=>{h.push(a.Ha(p,t,n).then(y=>{var E;if((y||n)&&a.isPrimaryClient){const A=y?!y.fromCache:(E=n==null?void 0:n.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;a.sharedClientState.updateQueryState(p.targetId,A?"current":"not-current")}if(y){o.push(y);const A=eg.Yi(p.targetId,y);u.push(A)}}))}),await Promise.all(h),a.La.p_(o),await async function(p,y){const E=Rt(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>X.forEach(y,w=>X.forEach(w.Hi,D=>E.persistence.referenceDelegate.addReference(A,w.targetId,D)).next(()=>X.forEach(w.Ji,D=>E.persistence.referenceDelegate.removeReference(A,w.targetId,D)))))}catch(A){if(!Oo(A))throw A;lt(ng,"Failed to update sequence numbers: "+A)}for(const A of y){const w=A.targetId;if(!A.fromCache){const D=E.Ts.get(w),V=D.snapshotVersion,K=D.withLastLimboFreeSnapshotVersion(V);E.Ts=E.Ts.insert(w,K)}}}(a.localStore,u))}async function YO(i,t){const n=Rt(i);if(!n.currentUser.isEqual(t)){lt(cg,"User change. New user:",t.toKey());const a=await Ib(n.localStore,t);n.currentUser=t,function(u,h){u.Ga.forEach(m=>{m.forEach(p=>{p.reject(new gt(tt.CANCELLED,h))})}),u.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await Tu(n,a.Rs)}}function QO(i,t){const n=Rt(i),a=n.Ka.get(t);if(a&&a.Ba)return kt().add(a.key);{let o=kt();const u=n.qa.get(t);if(!u)return o;for(const h of u){const m=n.ka.get(h);o=o.unionWith(m.view.Sa)}return o}}function Gb(i){const t=Rt(i);return t.remoteStore.remoteSyncer.applyRemoteEvent=jb.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=QO.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=FO.bind(null,t),t.La.p_=DO.bind(null,t.eventManager),t.La.Ja=NO.bind(null,t.eventManager),t}function $O(i){const t=Rt(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=qO.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=GO.bind(null,t),t}class Mf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=nh(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,n){return null}nu(t,n){return null}eu(t){return XI(this.persistence,new YI,t.initialUser,this.serializer)}Xa(t){return new Cb(tg.ri,this.serializer)}Za(t){return new iO}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Mf.provider={build:()=>new Mf};class XO extends Mf{constructor(t){super(),this.cacheSizeBytes=t}tu(t,n){Qt(this.persistence.referenceDelegate instanceof Nf);const a=this.persistence.referenceDelegate.garbageCollector;return new xI(a,t.asyncQueue,n)}Xa(t){const n=this.cacheSizeBytes!==void 0?fn.withCacheSize(this.cacheSizeBytes):fn.DEFAULT;return new Cb(a=>Nf.ri(a,n),this.serializer)}}class up{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>W0(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=YO.bind(null,this.syncEngine),await wO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new CO}()}createDatastore(t){const n=nh(t.databaseInfo.databaseId),a=function(u){return new lO(u)}(t.databaseInfo);return function(u,h,m,p){return new hO(u,h,m,p)}(t.authCredentials,t.appCheckCredentials,a,n)}createRemoteStore(t){return function(a,o,u,h,m){return new mO(a,o,u,h,m)}(this.localStore,this.datastore,t.asyncQueue,n=>W0(this.syncEngine,n,0),function(){return G0.D()?new G0:new rO}())}createSyncEngine(t,n){return function(o,u,h,m,p,y,E){const A=new VO(o,u,h,m,p,y);return E&&(A.ja=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const u=Rt(o);lt(es,"RemoteStore shutting down."),u.W_.add(5),await Eu(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}up.provider={build:()=>new up};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):ir("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="FirestoreClient";class ZO{constructor(t,n,a,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=a,this.databaseInfo=o,this.user=We.UNAUTHENTICATED,this.clientId=BT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(a,async h=>{lt(ha,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(a,h=>(lt(ha,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ra;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const a=lg(n,"Failed to shutdown persistence");t.reject(a)}}),t.promise}}async function Dm(i,t){i.asyncQueue.verifyOperationInProgress(),lt(ha,"Initializing OfflineComponentProvider");const n=i.configuration;await t.initialize(n);let a=n.initialUser;i.setCredentialChangeListener(async o=>{a.isEqual(o)||(await Ib(t.localStore,o),a=o)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function J0(i,t){i.asyncQueue.verifyOperationInProgress();const n=await JO(i);lt(ha,"Initializing OnlineComponentProvider"),await t.initialize(n,i.configuration),i.setCredentialChangeListener(a=>Y0(t.remoteStore,a)),i.setAppCheckTokenChangeListener((a,o)=>Y0(t.remoteStore,o)),i._onlineComponents=t}async function JO(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){lt(ha,"Using user provided OfflineComponentProvider");try{await Dm(i,i._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===tt.FAILED_PRECONDITION||o.code===tt.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;po("Error using user provided cache. Falling back to memory cache: "+n),await Dm(i,new Mf)}}else lt(ha,"Using default OfflineComponentProvider"),await Dm(i,new XO(void 0));return i._offlineComponents}async function Kb(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(lt(ha,"Using user provided OnlineComponentProvider"),await J0(i,i._uninitializedComponentsProvider._online)):(lt(ha,"Using default OnlineComponentProvider"),await J0(i,new up))),i._onlineComponents}function tD(i){return Kb(i).then(t=>t.syncEngine)}async function eD(i){const t=await Kb(i),n=t.eventManager;return n.onListen=LO.bind(null,t.syncEngine),n.onUnlisten=BO.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=UO.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=jO.bind(null,t.syncEngine),n}function nD(i,t,n={}){const a=new ra;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,p,y){const E=new WO({next:w=>{E.su(),h.enqueueAndForget(()=>OO(u,A)),w.fromCache&&p.source==="server"?y.reject(new gt(tt.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(w)},error:w=>y.reject(w)}),A=new xO(m,E,{includeMetadataChanges:!0,Ta:!0});return IO(u,A)}(await eD(i),i.asyncQueue,t,n,a)),a.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qb(i,t,n){if(!n)throw new gt(tt.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function iD(i,t,n,a){if(t===!0&&a===!0)throw new gt(tt.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function eE(i){if(!yt.isDocumentKey(i))throw new gt(tt.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function nE(i){if(yt.isDocumentKey(i))throw new gt(tt.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function hg(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(a){return a.constructor?a.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":Et()}function lu(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new gt(tt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hg(i);throw new gt(tt.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b="firestore.googleapis.com",iE=!0;class rE{constructor(t){var n,a;if(t.host===void 0){if(t.ssl!==void 0)throw new gt(tt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$b,this.ssl=iE}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:iE;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Rb;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<DI)throw new gt(tt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}iD("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yb((a=t.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new gt(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new gt(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new gt(tt.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(a,o){return a.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ah{constructor(t,n,a,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=a,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new gt(tt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new gt(tt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rE(t),t.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new sC;switch(a.type){case"firstParty":return new cC(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new gt(tt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const a=tE.get(n);a&&(lt("ComponentProvider","Removing Datastore"),tE.delete(n),a.terminate())}(this),Promise.resolve()}}function rD(i,t,n,a={}){var o;const u=(i=lu(i,ah))._getSettings(),h=`${t}:${n}`;if(u.host!==$b&&u.host!==h&&po("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),a.mockUserToken){let m,p;if(typeof a.mockUserToken=="string")m=a.mockUserToken,p=We.MOCK_USER;else{m=kR(a.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const y=a.mockUserToken.sub||a.mockUserToken.user_id;if(!y)throw new gt(tt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new We(y)}i._authCredentials=new oC(new zT(m,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,n,a){this.converter=n,this._query=a,this.type="query",this.firestore=t}withConverter(t){return new sh(this.firestore,t,this._query)}}class Yn{constructor(t,n,a){this.converter=n,this._key=a,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new aa(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Yn(this.firestore,t,this._key)}}class aa extends sh{constructor(t,n,a){super(t,n,ib(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Yn(this.firestore,null,new yt(t))}withConverter(t){return new aa(this.firestore,t,this._path)}}function Xb(i,t,...n){if(i=Un(i),Qb("collection","path",t),i instanceof ah){const a=ne.fromString(t,...n);return nE(a),new aa(i,null,a)}{if(!(i instanceof Yn||i instanceof aa))throw new gt(tt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=i._path.child(ne.fromString(t,...n));return nE(a),new aa(i.firestore,null,a)}}function Wb(i,t,...n){if(i=Un(i),arguments.length===1&&(t=BT.newId()),Qb("doc","path",t),i instanceof ah){const a=ne.fromString(t,...n);return eE(a),new Yn(i,null,new yt(a))}{if(!(i instanceof Yn||i instanceof aa))throw new gt(tt.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=i._path.child(ne.fromString(t,...n));return eE(a),new Yn(i.firestore,i instanceof aa?i.converter:null,new yt(a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="AsyncQueue";class sE{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Db(this,"async_queue_retry"),this.Su=()=>{const a=Om();a&&lt(aE,"Visibility state changed to "+a.visibilityState),this.a_.t_()},this.bu=t;const n=Om();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const n=Om();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const n=new ra;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Oo(t))throw t;lt(aE,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const n=this.bu.then(()=>(this.pu=!0,t().catch(a=>{this.gu=a,this.pu=!1;const o=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(a);throw ir("INTERNAL UNHANDLED ERROR: ",o),a}).then(a=>(this.pu=!1,a))));return this.bu=n,n}enqueueAfterDelay(t,n,a){this.Du(),this.wu.indexOf(t)>-1&&(n=0);const o=og.createAndSchedule(this,t,n,a,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&Et()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const n of this.fu)if(n.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((n,a)=>n.targetTimeMs-a.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const n=this.fu.indexOf(t);this.fu.splice(n,1)}}class oh extends ah{constructor(t,n,a,o){super(t,n,a,o),this.type="firestore",this._queue=new sE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new sE(t),this._firestoreClient=void 0,await t}}}function aD(i,t){const n=typeof i=="object"?i:DT(),a=typeof i=="string"?i:Sf,o=jp(n,"firestore").getImmediate({identifier:a});if(!o._initialized){const u=MR("firestore");u&&rD(o,...u)}return o}function Zb(i){if(i._terminated)throw new gt(tt.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||sD(i),i._firestoreClient}function sD(i){var t,n,a;const o=i._freezeSettings(),u=function(m,p,y,E){return new SC(m,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Yb(E.experimentalLongPollingOptions),E.useFetchStreams)}(i._databaseId,((t=i._app)===null||t===void 0?void 0:t.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((a=o.localCache)===null||a===void 0)&&a._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new ZO(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t){this._byteString=t}static fromBase64String(t){try{return new To(Ke.fromBase64String(t))}catch(n){throw new gt(tt.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new To(Ke.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new gt(tt.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new gt(tt.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new gt(tt.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Lt(this._lat,t._lat)||Lt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(a,o){if(a.length!==o.length)return!1;for(let u=0;u<a.length;++u)if(a[u]!==o[u])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD=/^__.*__$/;class lD{constructor(t,n,a){this.data=t,this.fieldMask=n,this.fieldTransforms=a}toMutation(t,n){return this.fieldMask!==null?new ls(t,this.data,this.fieldMask,n,this.fieldTransforms):new vu(t,this.data,n,this.fieldTransforms)}}function tA(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Et()}}class gg{constructor(t,n,a,o,u,h){this.settings=t,this.databaseId=n,this.serializer=a,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new gg(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var n;const a=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ku({path:a,Qu:!1});return o.$u(t),o}Ku(t){var n;const a=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ku({path:a,Qu:!1});return o.Bu(),o}Uu(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Pf(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(tA(this.Lu)&&oD.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class uD{constructor(t,n,a){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=a||nh(t)}ju(t,n,a,o=!1){return new gg({Lu:t,methodName:n,zu:a,path:Ge.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cD(i){const t=i._freezeSettings(),n=nh(i._databaseId);return new uD(i._databaseId,!!t.ignoreUndefinedProperties,n)}function fD(i,t,n,a,o,u={}){const h=i.ju(u.merge||u.mergeFields?2:0,t,n,o);rA("Data must be an object, but it was:",h,a);const m=nA(a,h);let p,y;if(u.merge)p=new Kn(h.fieldMask),y=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const A of u.mergeFields){const w=hD(t,A,n);if(!h.contains(w))throw new gt(tt.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);mD(E,w)||E.push(w)}p=new Kn(E),y=h.fieldTransforms.filter(A=>p.covers(A.field))}else p=null,y=h.fieldTransforms;return new lD(new Ln(m),p,y)}function eA(i,t){if(iA(i=Un(i)))return rA("Unsupported field value:",t,i),nA(i,t);if(i instanceof Jb)return function(a,o){if(!tA(o.Lu))throw o.Wu(`${a._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${a._methodName}() is not currently supported inside arrays`);const u=a._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(a,o){const u=[];let h=0;for(const m of a){let p=eA(m,o.Uu(h));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),h++}return{arrayValue:{values:u}}}(i,t)}return function(a,o){if((a=Un(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return QC(o.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const u=De.fromDate(a);return{timestampValue:Df(o.serializer,u)}}if(a instanceof De){const u=new De(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Df(o.serializer,u)}}if(a instanceof mg)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof To)return{bytesValue:_b(o.serializer,a._byteString)};if(a instanceof Yn){const u=o.databaseId,h=a.firestore._databaseId;if(!h.isEqual(u))throw o.Wu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Zp(a.firestore._databaseId||o.databaseId,a._key.path)}}if(a instanceof pg)return function(h,m){return{mapValue:{fields:{[QT]:{stringValue:$T},[wf]:{arrayValue:{values:h.toArray().map(y=>{if(typeof y!="number")throw m.Wu("VectorValues must only contain numeric values.");return Qp(m.serializer,y)})}}}}}}(a,o);throw o.Wu(`Unsupported field value: ${hg(a)}`)}(i,t)}function nA(i,t){const n={};return HT(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ss(i,(a,o)=>{const u=eA(o,t.qu(a));u!=null&&(n[a]=u)}),{mapValue:{fields:n}}}function iA(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof De||i instanceof mg||i instanceof To||i instanceof Yn||i instanceof Jb||i instanceof pg)}function rA(i,t,n){if(!iA(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const a=hg(n);throw a==="an object"?t.Wu(i+" a custom object"):t.Wu(i+" "+a)}}function hD(i,t,n){if((t=Un(t))instanceof dg)return t._internalPath;if(typeof t=="string")return aA(i,t);throw Pf("Field path arguments must be of type string or ",i,!1,void 0,n)}const dD=new RegExp("[~\\*/\\[\\]]");function aA(i,t,n){if(t.search(dD)>=0)throw Pf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,n);try{return new dg(...t.split("."))._internalPath}catch{throw Pf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,n)}}function Pf(i,t,n,a,o){const u=a&&!a.isEmpty(),h=o!==void 0;let m=`Function ${t}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||h)&&(p+=" (found",u&&(p+=` in field ${a}`),h&&(p+=` in document ${o}`),p+=")"),new gt(tt.INVALID_ARGUMENT,m+i+p)}function mD(i,t){return i.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(t,n,a,o,u){this._firestore=t,this._userDataWriter=n,this._key=a,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Yn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new pD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(oA("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class pD extends sA{data(){return super.data()}}function oA(i,t){return typeof t=="string"?aA(i,t):t instanceof dg?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new gt(tt.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yD{convertValue(t,n="none"){switch(ca(t)){case 0:return null;case 1:return t.booleanValue;case 2:return pe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ua(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw Et()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const a={};return ss(t,(o,u)=>{a[o]=this.convertValue(u,n)}),a}convertVectorValue(t){var n,a,o;const u=(o=(a=(n=t.fields)===null||n===void 0?void 0:n[wf].arrayValue)===null||a===void 0?void 0:a.values)===null||o===void 0?void 0:o.map(h=>pe(h.doubleValue));return new pg(u)}convertGeoPoint(t){return new mg(pe(t.latitude),pe(t.longitude))}convertArray(t,n){return(t.values||[]).map(a=>this.convertValue(a,n))}convertServerTimestamp(t,n){switch(n){case"previous":const a=$f(t);return a==null?null:this.convertValue(a,n);case"estimate":return this.convertTimestamp(iu(t));default:return null}}convertTimestamp(t){const n=la(t);return new De(n.seconds,n.nanos)}convertDocumentKey(t,n){const a=ne.fromString(t);Qt(wb(a));const o=new ru(a.get(1),a.get(3)),u=new yt(a.popFirst(5));return o.isEqual(n)||ir(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vD(i,t,n){let a;return a=i?i.toFirestore(t):t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class _D extends sA{constructor(t,n,a,o,u,h){super(t,n,a,o,h),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new hf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const a=this._document.data.field(oA("DocumentSnapshot.get",t));if(a!==null)return this._userDataWriter.convertValue(a,n.serverTimestamps)}}}class hf extends _D{data(t={}){return super.data(t)}}class ED{constructor(t,n,a,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new tf(o.hasPendingWrites,o.fromCache),this.query=a}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(a=>{t.call(n,new hf(this._firestore,this._userDataWriter,a.key,a,new tf(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new gt(tt.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const p=new hf(o._firestore,o._userDataWriter,m.doc.key,m.doc,new tf(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const p=new hf(o._firestore,o._userDataWriter,m.doc.key,m.doc,new tf(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return m.type!==0&&(y=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),E=h.indexOf(m.doc.key)),{type:TD(m.type),doc:p,oldIndex:y,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function TD(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Et()}}class bD extends yD{constructor(t){super(),this.firestore=t}convertBytes(t){return new To(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Yn(this.firestore,null,n)}}function AD(i){i=lu(i,sh);const t=lu(i.firestore,oh),n=Zb(t),a=new bD(t);return gD(i._query),nD(n,i._query).then(o=>new ED(t,a,i,o))}function SD(i){return lA(lu(i.firestore,oh),[new $p(i._key,gi.none())])}function wD(i,t){const n=lu(i.firestore,oh),a=Wb(i),o=vD(i.converter,t);return lA(n,[fD(cD(i.firestore),"addDoc",a._key,o,i.converter!==null,{}).toMutation(a._key,gi.exists(!1))]).then(()=>a)}function lA(i,t){return function(a,o){const u=new ra;return a.asyncQueue.enqueueAndForget(async()=>HO(await tD(a),o,u)),u.promise}(Zb(i),t)}(function(t,n=!0){(function(o){Co=o})(Ro),mo(new Ja("firestore",(a,{instanceIdentifier:o,options:u})=>{const h=a.getProvider("app").getImmediate(),m=new oh(new lC(a.getProvider("auth-internal")),new fC(h,a.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new gt(tt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ru(y.options.projectId,E)}(h,o),h);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),na(d0,m0,t),na(d0,m0,"esm2017")})();var RD="firebase",CD="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */na(RD,CD,"app");function yg(i,t){var n={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&t.indexOf(a)<0&&(n[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(i);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(i,a[o])&&(n[a[o]]=i[a[o]]);return n}function uA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ID=uA,cA=new gu("auth","Firebase",uA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=new zp("@firebase/auth");function OD(i,...t){kf.logLevel<=Pt.WARN&&kf.warn(`Auth (${Ro}): ${i}`,...t)}function df(i,...t){kf.logLevel<=Pt.ERROR&&kf.error(`Auth (${Ro}): ${i}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(i,...t){throw _g(i,...t)}function Qn(i,...t){return _g(i,...t)}function vg(i,t,n){const a=Object.assign(Object.assign({},ID()),{[t]:n});return new gu("auth","Firebase",a).create(t,{appName:i.name})}function Za(i){return vg(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function DD(i,t,n){const a=n;if(!(t instanceof a))throw a.name!==t.constructor.name&&bi(i,"argument-error"),vg(i,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _g(i,...t){if(typeof i!="string"){const n=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=i.name),i._errorFactory.create(n,...a)}return cA.create(i,...t)}function bt(i,t,...n){if(!i)throw _g(t,...n)}function Zi(i){const t="INTERNAL ASSERTION FAILED: "+i;throw df(t),new Error(t)}function ar(i,t){i||Zi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function ND(){return oE()==="http:"||oE()==="https:"}function oE(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ND()||zR()||"connection"in navigator)?navigator.onLine:!0}function MD(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(t,n){this.shortDelay=t,this.longDelay=n,ar(n>t,"Short delay should be less than long delay!"),this.isMobile=VR()||BR()}get(){return xD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(i,t){ar(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{static initialize(t,n,a){this.fetchImpl=t,n&&(this.headersImpl=n),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD=new bu(3e4,6e4);function Tg(i,t){return i.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:i.tenantId}):t}async function No(i,t,n,a,o={}){return hA(i,o,async()=>{let u={},h={};a&&(t==="GET"?h=a:u={body:JSON.stringify(a)});const m=yu(Object.assign({key:i.config.apiKey},h)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const y=Object.assign({method:t,headers:p},u);return UR()||(y.referrerPolicy="no-referrer"),fA.fetch()(dA(i,i.config.apiHost,n,m),y)})}async function hA(i,t,n){i._canInitEmulator=!1;const a=Object.assign(Object.assign({},PD),t);try{const o=new LD(i),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw ef(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw ef(i,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw ef(i,"email-already-in-use",h);if(p==="USER_DISABLED")throw ef(i,"user-disabled",h);const E=a[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw vg(i,E,y);bi(i,E)}}catch(o){if(o instanceof ur)throw o;bi(i,"network-request-failed",{message:String(o)})}}async function VD(i,t,n,a,o={}){const u=await No(i,t,n,a,o);return"mfaPendingCredential"in u&&bi(i,"multi-factor-auth-required",{_serverResponse:u}),u}function dA(i,t,n,a){const o=`${t}${n}?${a}`;return i.config.emulator?Eg(i.config,o):`${i.config.apiScheme}://${o}`}class LD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,a)=>{this.timer=setTimeout(()=>a(Qn(this.auth,"network-request-failed")),kD.get())})}}function ef(i,t,n){const a={appName:i.name};n.email&&(a.email=n.email),n.phoneNumber&&(a.phoneNumber=n.phoneNumber);const o=Qn(i,t,a);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UD(i,t){return No(i,"POST","/v1/accounts:delete",t)}async function mA(i,t){return No(i,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(i){if(i)try{const t=new Date(Number(i));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function zD(i,t=!1){const n=Un(i),a=await n.getIdToken(t),o=bg(a);bt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:a,authTime:Wl(Nm(o.auth_time)),issuedAtTime:Wl(Nm(o.iat)),expirationTime:Wl(Nm(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Nm(i){return Number(i)*1e3}function bg(i){const[t,n,a]=i.split(".");if(t===void 0||n===void 0||a===void 0)return df("JWT malformed, contained fewer than 3 sections"),null;try{const o=AT(n);return o?JSON.parse(o):(df("Failed to decode base64 JWT payload"),null)}catch(o){return df("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function lE(i){const t=bg(i);return bt(t,"internal-error"),bt(typeof t.exp<"u","internal-error"),bt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uu(i,t,n=!1){if(n)return t;try{return await t}catch(a){throw a instanceof ur&&BD(a)&&i.auth.currentUser===i&&await i.auth.signOut(),a}}function BD({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wl(this.lastLoginAt),this.creationTime=Wl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vf(i){var t;const n=i.auth,a=await i.getIdToken(),o=await uu(i,mA(n,{idToken:a}));bt(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?pA(u.providerUserInfo):[],m=FD(i.providerData,h),p=i.isAnonymous,y=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),E=p?y:!1,A={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new fp(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(i,A)}async function HD(i){const t=Un(i);await Vf(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function FD(i,t){return[...i.filter(a=>!t.some(o=>o.providerId===a.providerId)),...t]}function pA(i){return i.map(t=>{var{providerId:n}=t,a=yg(t,["providerId"]);return{providerId:n,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qD(i,t){const n=await hA(i,{},async()=>{const a=yu({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=dA(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",fA.fetch()(h,{method:"POST",headers:m,body:a})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GD(i,t){return No(i,"POST","/v2/accounts:revokeToken",Tg(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){bt(t.idToken,"internal-error"),bt(typeof t.idToken<"u","internal-error"),bt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):lE(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){bt(t.length!==0,"internal-error");const n=lE(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(bt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:a,refreshToken:o,expiresIn:u}=await qD(t,n);this.updateTokensAndExpiration(a,o,Number(u))}updateTokensAndExpiration(t,n,a){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(t,n){const{refreshToken:a,accessToken:o,expirationTime:u}=n,h=new uo;return a&&(bt(typeof a=="string","internal-error",{appName:t}),h.refreshToken=a),o&&(bt(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),u&&(bt(typeof u=="number","internal-error",{appName:t}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new uo,this.toJSON())}_performRefresh(){return Zi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(i,t){bt(typeof i=="string"||typeof i>"u","internal-error",{appName:t})}class Ji{constructor(t){var{uid:n,auth:a,stsTokenManager:o}=t,u=yg(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=a,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new fp(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const n=await uu(this,this.stsTokenManager.getToken(this.auth,t));return bt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return zD(this,t)}reload(){return HD(this)}_assign(t){this!==t&&(bt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Ji(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){bt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let a=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),a=!0),n&&await Vf(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gn(this.auth.app))return Promise.reject(Za(this.auth));const t=await this.getIdToken();return await uu(this,UD(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var a,o,u,h,m,p,y,E;const A=(a=n.displayName)!==null&&a!==void 0?a:void 0,w=(o=n.email)!==null&&o!==void 0?o:void 0,D=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,V=(h=n.photoURL)!==null&&h!==void 0?h:void 0,K=(m=n.tenantId)!==null&&m!==void 0?m:void 0,z=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,q=(y=n.createdAt)!==null&&y!==void 0?y:void 0,Z=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:W,emailVerified:ct,isAnonymous:at,providerData:At,stsTokenManager:x}=n;bt(W&&x,t,"internal-error");const R=uo.fromJSON(this.name,x);bt(typeof W=="string",t,"internal-error"),Qr(A,t.name),Qr(w,t.name),bt(typeof ct=="boolean",t,"internal-error"),bt(typeof at=="boolean",t,"internal-error"),Qr(D,t.name),Qr(V,t.name),Qr(K,t.name),Qr(z,t.name),Qr(q,t.name),Qr(Z,t.name);const S=new Ji({uid:W,auth:t,email:w,emailVerified:ct,displayName:A,isAnonymous:at,photoURL:V,phoneNumber:D,tenantId:K,stsTokenManager:R,createdAt:q,lastLoginAt:Z});return At&&Array.isArray(At)&&(S.providerData=At.map(I=>Object.assign({},I))),z&&(S._redirectEventId=z),S}static async _fromIdTokenResponse(t,n,a=!1){const o=new uo;o.updateFromServerResponse(n);const u=new Ji({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:a});return await Vf(u),u}static async _fromGetAccountInfoResponse(t,n,a){const o=n.users[0];bt(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?pA(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new uo;m.updateFromIdToken(a);const p=new Ji({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new fp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE=new Map;function tr(i){ar(i instanceof Function,"Expected a class definition");let t=uE.get(i);return t?(ar(t instanceof i,"Instance stored in cache mismatched with class"),t):(t=new i,uE.set(i,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}gA.type="NONE";const cE=gA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(i,t,n){return`firebase:${i}:${t}:${n}`}class co{constructor(t,n,a){this.persistence=t,this.auth=n,this.userKey=a;const{config:o,name:u}=this.auth;this.fullUserKey=mf(this.userKey,o.apiKey,u),this.fullPersistenceKey=mf("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ji._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,a="authUser"){if(!n.length)return new co(tr(cE),t,a);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||tr(cE);const h=mf(a,t.config.apiKey,t.name);let m=null;for(const y of n)try{const E=await y._get(h);if(E){const A=Ji._fromJSON(t,E);y!==u&&(m=A),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new co(u,t,a):(u=p[0],m&&await u._set(h,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(h)}catch{}})),new co(u,t,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(i){const t=i.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(EA(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(yA(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(bA(t))return"Blackberry";if(AA(t))return"Webos";if(vA(t))return"Safari";if((t.includes("chrome/")||_A(t))&&!t.includes("edge/"))return"Chrome";if(TA(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=i.match(n);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function yA(i=Je()){return/firefox\//i.test(i)}function vA(i=Je()){const t=i.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _A(i=Je()){return/crios\//i.test(i)}function EA(i=Je()){return/iemobile/i.test(i)}function TA(i=Je()){return/android/i.test(i)}function bA(i=Je()){return/blackberry/i.test(i)}function AA(i=Je()){return/webos/i.test(i)}function Ag(i=Je()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function KD(i=Je()){var t;return Ag(i)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function YD(){return jR()&&document.documentMode===10}function SA(i=Je()){return Ag(i)||TA(i)||AA(i)||bA(i)||/windows phone/i.test(i)||EA(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(i,t=[]){let n;switch(i){case"Browser":n=fE(Je());break;case"Worker":n=`${fE(Je())}-${i}`;break;default:n=i}const a=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ro}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const a=u=>new Promise((h,m)=>{try{const p=t(u);h(p)}catch(p){m(p)}});a.onAbort=n,this.queue.push(a);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const a of this.queue)await a(t),a.onAbort&&n.push(a.onAbort)}catch(a){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $D(i,t={}){return No(i,"GET","/v2/passwordPolicy",Tg(i,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=6;class WD{constructor(t){var n,a,o,u;const h=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=h.minPasswordLength)!==null&&n!==void 0?n:XD,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(a=t.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,a,o,u,h,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,p),this.validatePasswordCharacterOptions(t,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(a=p.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(t,n){const a=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;a&&(n.meetsMinPasswordLength=t.length>=a),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let a;for(let o=0;o<t.length;o++)a=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(t,n,a,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(t,n,a,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=a,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hE(this),this.idTokenSubscription=new hE(this),this.beforeStateQueue=new QD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=tr(n)),this._initializationPromise=this.queue(async()=>{var a,o;if(!this._deleted&&(this.persistenceManager=await co.create(this,t),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await mA(this,{idToken:t}),a=await Ji._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(a)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Gn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let o=a,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(t);(!h||h===m)&&(p!=null&&p.user)&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return bt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Vf(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=MD()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Gn(this.app))return Promise.reject(Za(this));const n=t?Un(t):null;return n&&bt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&bt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Gn(this.app)?Promise.reject(Za(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Gn(this.app)?Promise.reject(Za(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await $D(this),n=new WD(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new gu("auth","Firebase",t())}onAuthStateChanged(t,n,a){return this.registerStateListener(this.authStateSubscription,t,n,a)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,a){return this.registerStateListener(this.idTokenSubscription,t,n,a)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const a=this.onAuthStateChanged(()=>{a(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(a.tenantId=this.tenantId),await GD(this,a)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const a=await this.getOrInitRedirectPersistenceManager(n);return t===null?a.removeCurrentUser():a.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&tr(t)||this._popupRedirectResolver;bt(n,this,"argument-error"),this.redirectPersistenceManager=await co.create(this,[tr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,a;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,a,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(bt(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,a,o);return()=>{h=!0,p()}}else{const p=t.addObserver(n);return()=>{h=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return bt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=wA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const a=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());a&&(n["X-Firebase-Client"]=a);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(Gn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&OD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function lh(i){return Un(i)}class hE{constructor(t){this.auth=t,this.observer=null,this.addObserver=$R(n=>this.observer=n)}get next(){return bt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JD(i){Sg=i}function tN(i){return Sg.loadJS(i)}function eN(){return Sg.gapiScript}function nN(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(i,t){const n=jp(i,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Tf(u,t??{}))return o;bi(o,"already-initialized")}return n.initialize({options:t})}function rN(i,t){const n=(t==null?void 0:t.persistence)||[],a=(Array.isArray(n)?n:[n]).map(tr);t!=null&&t.errorMap&&i._updateErrorMap(t.errorMap),i._initializeWithPersistence(a,t==null?void 0:t.popupRedirectResolver)}function aN(i,t,n){const a=lh(i);bt(a._canInitEmulator,a,"emulator-config-failed"),bt(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const o=!1,u=RA(t),{host:h,port:m}=sN(t),p=m===null?"":`:${m}`;a.config.emulator={url:`${u}//${h}${p}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),oN()}function RA(i){const t=i.indexOf(":");return t<0?"":i.substr(0,t+1)}function sN(i){const t=RA(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(t.length));if(!n)return{host:"",port:null};const a=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(a);if(o){const u=o[1];return{host:u,port:dE(a.substr(u.length+1))}}else{const[u,h]=a.split(":");return{host:u,port:dE(h)}}}function dE(i){if(!i)return null;const t=Number(i);return isNaN(t)?null:t}function oN(){function i(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Zi("not implemented")}_getIdTokenResponse(t){return Zi("not implemented")}_linkToIdToken(t,n){return Zi("not implemented")}_getReauthenticationResolver(t){return Zi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(i,t){return VD(i,"POST","/v1/accounts:signInWithIdp",Tg(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN="http://localhost";class ns extends CA{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new ns(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):bi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:o}=n,u=yg(n,["providerId","signInMethod"]);if(!a||!o)return null;const h=new ns(a,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(t){const n=this.buildRequest();return fo(t,n)}_linkToIdToken(t,n){const a=this.buildRequest();return a.idToken=n,fo(t,a)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,fo(t,n)}buildRequest(){const t={requestUri:lN,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=yu(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au extends wg{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Au{constructor(){super("facebook.com")}static credential(t){return ns._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xr.credentialFromTaggedObject(t)}static credentialFromError(t){return Xr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Xr.credential(t.oauthAccessToken)}catch{return null}}}Xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends Au{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return ns._fromParams({providerId:Wi.PROVIDER_ID,signInMethod:Wi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Wi.credentialFromTaggedObject(t)}static credentialFromError(t){return Wi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:a}=t;if(!n&&!a)return null;try{return Wi.credential(n,a)}catch{return null}}}Wi.GOOGLE_SIGN_IN_METHOD="google.com";Wi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Au{constructor(){super("github.com")}static credential(t){return ns._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Wr.credentialFromTaggedObject(t)}static credentialFromError(t){return Wr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Wr.credential(t.oauthAccessToken)}catch{return null}}}Wr.GITHUB_SIGN_IN_METHOD="github.com";Wr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Au{constructor(){super("twitter.com")}static credential(t,n){return ns._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Zr.credentialFromTaggedObject(t)}static credentialFromError(t){return Zr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:a}=t;if(!n||!a)return null;try{return Zr.credential(n,a)}catch{return null}}}Zr.TWITTER_SIGN_IN_METHOD="twitter.com";Zr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,a,o=!1){const u=await Ji._fromIdTokenResponse(t,a,o),h=mE(a);return new bo({user:u,providerId:h,_tokenResponse:a,operationType:n})}static async _forOperation(t,n,a){await t._updateTokensIfNecessary(a,!0);const o=mE(a);return new bo({user:t,providerId:o,_tokenResponse:a,operationType:n})}}function mE(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf extends ur{constructor(t,n,a,o){var u;super(n.code,n.message),this.operationType=a,this.user=o,Object.setPrototypeOf(this,Lf.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(t,n,a,o){return new Lf(t,n,a,o)}}function IA(i,t,n,a){return(t==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Lf._fromErrorAndOperation(i,u,t,a):u})}async function uN(i,t,n=!1){const a=await uu(i,t._linkToIdToken(i.auth,await i.getIdToken()),n);return bo._forOperation(i,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cN(i,t,n=!1){const{auth:a}=i;if(Gn(a.app))return Promise.reject(Za(a));const o="reauthenticate";try{const u=await uu(i,IA(a,o,t,i),n);bt(u.idToken,a,"internal-error");const h=bg(u.idToken);bt(h,a,"internal-error");const{sub:m}=h;return bt(i.uid===m,a,"user-mismatch"),bo._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&bi(a,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fN(i,t,n=!1){if(Gn(i.app))return Promise.reject(Za(i));const a="signIn",o=await IA(i,a,t),u=await bo._fromIdTokenResponse(i,a,o);return n||await i._updateCurrentUser(u.user),u}function hN(i,t,n,a){return Un(i).onIdTokenChanged(t,n,a)}function dN(i,t,n){return Un(i).beforeAuthStateChanged(t,n)}function mN(i){return Un(i).signOut()}const Uf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uf,"1"),this.storage.removeItem(Uf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN=1e3,gN=10;class DA extends OA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=SA(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const a=this.storage.getItem(n),o=this.localCache[n];a!==o&&t(n,o,a)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((h,m,p)=>{this.notifyListeners(h,p)});return}const a=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(a);!n&&this.localCache[a]===h||this.notifyListeners(a,h)},u=this.storage.getItem(a);YD()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,gN):o()}notifyListeners(t,n){this.localCache[t]=n;const a=this.listeners[t];if(a)for(const o of Array.from(a))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:a}),!0)})},pN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}DA.type="LOCAL";const yN=DA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA extends OA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}NA.type="SESSION";const xA=NA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(i){return Promise.all(i.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const a=new uh(t);return this.receivers.push(a),a}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:a,eventType:o,data:u}=n.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;n.ports[0].postMessage({status:"ack",eventId:a,eventType:o});const m=Array.from(h).map(async y=>y(n.origin,u)),p=await vN(m);n.ports[0].postMessage({status:"done",eventId:a,eventType:o,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(i="",t=10){let n="";for(let a=0;a<t;a++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,a=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,p)=>{const y=Rg("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},a);h={messageChannel:o,onMessage(A){const w=A;if(w.data.eventId===y)switch(w.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(w.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(){return window}function EN(i){vi().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(){return typeof vi().WorkerGlobalScope<"u"&&typeof vi().importScripts=="function"}async function TN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bN(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function AN(){return MA()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="firebaseLocalStorageDb",SN=1,zf="firebaseLocalStorage",kA="fbase_key";class Su{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ch(i,t){return i.transaction([zf],t?"readwrite":"readonly").objectStore(zf)}function wN(){const i=indexedDB.deleteDatabase(PA);return new Su(i).toPromise()}function hp(){const i=indexedDB.open(PA,SN);return new Promise((t,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const a=i.result;try{a.createObjectStore(zf,{keyPath:kA})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const a=i.result;a.objectStoreNames.contains(zf)?t(a):(a.close(),await wN(),t(await hp()))})})}async function pE(i,t,n){const a=ch(i,!0).put({[kA]:t,value:n});return new Su(a).toPromise()}async function RN(i,t){const n=ch(i,!1).get(t),a=await new Su(n).toPromise();return a===void 0?null:a.value}function gE(i,t){const n=ch(i,!0).delete(t);return new Su(n).toPromise()}const CN=800,IN=3;class VA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hp(),this.db)}async _withRetries(t){let n=0;for(;;)try{const a=await this._openDb();return await t(a)}catch(a){if(n++>IN)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return MA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uh._getInstance(AN()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await TN(),!this.activeServiceWorker)return;this.sender=new _N(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((t=a[0])===null||t===void 0)&&t.fulfilled&&!((n=a[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||bN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await hp();return await pE(t,Uf,"1"),await gE(t,Uf),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(a=>pE(a,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(a=>RN(a,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>gE(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=ch(o,!1).getAll();return new Su(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],a=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)a.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!a.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const a=this.listeners[t];if(a)for(const o of Array.from(a))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}VA.type="LOCAL";const ON=VA;new bu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(i,t){return t?tr(t):(bt(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg extends CA{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return fo(t,this._buildIdpRequest())}_linkToIdToken(t,n){return fo(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return fo(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function DN(i){return fN(i.auth,new Cg(i),i.bypassAuthState)}function NN(i){const{auth:t,user:n}=i;return bt(n,t,"internal-error"),cN(n,new Cg(i),i.bypassAuthState)}async function xN(i){const{auth:t,user:n}=i;return bt(n,t,"internal-error"),uN(n,new Cg(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(t,n,a,o,u=!1){this.auth=t,this.resolver=a,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:a,postBody:o,tenantId:u,error:h,type:m}=t;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:n,sessionId:a,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return DN;case"linkViaPopup":case"linkViaRedirect":return xN;case"reauthViaPopup":case"reauthViaRedirect":return NN;default:bi(this.auth,"internal-error")}}resolve(t){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=new bu(2e3,1e4);async function PN(i,t,n){if(Gn(i.app))return Promise.reject(Qn(i,"operation-not-supported-in-this-environment"));const a=lh(i);DD(i,t,wg);const o=LA(a,n);return new Xa(a,"signInViaPopup",t,o).executeNotNull()}class Xa extends UA{constructor(t,n,a,o,u){super(t,n,o,u),this.provider=a,this.authWindow=null,this.pollId=null,Xa.currentPopupAction&&Xa.currentPopupAction.cancel(),Xa.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return bt(t,this.auth,"internal-error"),t}async onExecution(){ar(this.filter.length===1,"Popup operations only handle one event");const t=Rg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xa.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,a;if(!((a=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,MN.get())};t()}}Xa.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN="pendingRedirect",pf=new Map;class VN extends UA{constructor(t,n,a=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,a),this.eventId=null}async execute(){let t=pf.get(this.auth._key());if(!t){try{const a=await LN(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(a)}catch(n){t=()=>Promise.reject(n)}pf.set(this.auth._key(),t)}return this.bypassAuthState||pf.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LN(i,t){const n=BN(t),a=zN(i);if(!await a._isAvailable())return!1;const o=await a._get(n)==="true";return await a._remove(n),o}function UN(i,t){pf.set(i._key(),t)}function zN(i){return tr(i._redirectPersistence)}function BN(i){return mf(kN,i.config.apiKey,i.name)}async function jN(i,t,n=!1){if(Gn(i.app))return Promise.reject(Za(i));const a=lh(i),o=LA(a,t),h=await new VN(a,o,n).execute();return h&&!n&&(delete h.user._redirectEventId,await a._persistUserIfCurrent(h.user),await a._setRedirectUser(null,t)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=10*60*1e3;class FN{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(t,a)&&(n=!0,this.sendToConsumer(t,a),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!qN(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var a;if(t.error&&!zA(t)){const o=((a=t.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";n.onError(Qn(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const a=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&a}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=HN&&this.cachedEventUids.clear(),this.cachedEventUids.has(yE(t))}saveEventToCache(t){this.cachedEventUids.add(yE(t)),this.lastProcessedEventTime=Date.now()}}function yE(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(t=>t).join("-")}function zA({type:i,error:t}){return i==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function qN(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zA(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GN(i,t={}){return No(i,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YN=/^https?/;async function QN(i){if(i.config.emulator)return;const{authorizedDomains:t}=await GN(i);for(const n of t)try{if($N(n))return}catch{}bi(i,"unauthorized-domain")}function $N(i){const t=cp(),{protocol:n,hostname:a}=new URL(t);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&a===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&h.hostname===a}if(!YN.test(n))return!1;if(KN.test(i))return a===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=new bu(3e4,6e4);function vE(){const i=vi().___jsl;if(i!=null&&i.H){for(const t of Object.keys(i.H))if(i.H[t].r=i.H[t].r||[],i.H[t].L=i.H[t].L||[],i.H[t].r=[...i.H[t].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function WN(i){return new Promise((t,n)=>{var a,o,u;function h(){vE(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{vE(),n(Qn(i,"network-request-failed"))},timeout:XN.get()})}if(!((o=(a=vi().gapi)===null||a===void 0?void 0:a.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((u=vi().gapi)===null||u===void 0)&&u.load)h();else{const m=nN("iframefcb");return vi()[m]=()=>{gapi.load?h():n(Qn(i,"network-request-failed"))},tN(`${eN()}?onload=${m}`).catch(p=>n(p))}}).catch(t=>{throw gf=null,t})}let gf=null;function ZN(i){return gf=gf||WN(i),gf}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=new bu(5e3,15e3),tx="__/auth/iframe",ex="emulator/auth/iframe",nx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ix=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rx(i){const t=i.config;bt(t.authDomain,i,"auth-domain-config-required");const n=t.emulator?Eg(t,ex):`https://${i.config.authDomain}/${tx}`,a={apiKey:t.apiKey,appName:i.name,v:Ro},o=ix.get(i.config.apiHost);o&&(a.eid=o);const u=i._getFrameworks();return u.length&&(a.fw=u.join(",")),`${n}?${yu(a).slice(1)}`}async function ax(i){const t=await ZN(i),n=vi().gapi;return bt(n,i,"internal-error"),t.open({where:document.body,url:rx(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nx,dontclear:!0},a=>new Promise(async(o,u)=>{await a.restyle({setHideOnLeave:!1});const h=Qn(i,"network-request-failed"),m=vi().setTimeout(()=>{u(h)},JN.get());function p(){vi().clearTimeout(m),o(a)}a.ping(p).then(p,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ox=500,lx=600,ux="_blank",cx="http://localhost";class _E{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fx(i,t,n,a=ox,o=lx){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-a)/2,0).toString();let m="";const p=Object.assign(Object.assign({},sx),{width:a.toString(),height:o.toString(),top:u,left:h}),y=Je().toLowerCase();n&&(m=_A(y)?ux:n),yA(y)&&(t=t||cx,p.scrollbars="yes");const E=Object.entries(p).reduce((w,[D,V])=>`${w}${D}=${V},`,"");if(KD(y)&&m!=="_self")return hx(t||"",m),new _E(null);const A=window.open(t||"",m,E);bt(A,i,"popup-blocked");try{A.focus()}catch{}return new _E(A)}function hx(i,t){const n=document.createElement("a");n.href=i,n.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx="__/auth/handler",mx="emulator/auth/handler",px=encodeURIComponent("fac");async function EE(i,t,n,a,o,u){bt(i.config.authDomain,i,"auth-domain-config-required"),bt(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:a,v:Ro,eventId:o};if(t instanceof wg){t.setDefaultLanguage(i.languageCode),h.providerId=t.providerId||"",QR(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,A]of Object.entries({}))h[E]=A}if(t instanceof Au){const E=t.getScopes().filter(A=>A!=="");E.length>0&&(h.scopes=E.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await i._getAppCheckToken(),y=p?`#${px}=${encodeURIComponent(p)}`:"";return`${gx(i)}?${yu(m).slice(1)}${y}`}function gx({config:i}){return i.emulator?Eg(i,mx):`https://${i.authDomain}/${dx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="webStorageSupport";class yx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xA,this._completeRedirectFn=jN,this._overrideRedirectResult=UN}async _openPopup(t,n,a,o){var u;ar((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await EE(t,n,a,cp(),o);return fx(t,h,Rg())}async _openRedirect(t,n,a,o){await this._originValidation(t);const u=await EE(t,n,a,cp(),o);return EN(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(ar(u,"If manager is not set, promise should be"),u)}const a=this.initAndGetManager(t);return this.eventManagers[n]={promise:a},a.catch(()=>{delete this.eventManagers[n]}),a}async initAndGetManager(t){const n=await ax(t),a=new FN(t);return n.register("authEvent",o=>(bt(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:a.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:a},this.iframes[t._key()]=n,a}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(xm,{type:xm},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[xm];h!==void 0&&n(!!h),bi(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QN(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return SA()||vA()||Ag()}}const vx=yx;var TE="@firebase/auth",bE="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(a=>{t((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){bt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Tx(i){mo(new Ja("auth",(t,{options:n})=>{const a=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=a.options;bt(h&&!h.includes(":"),"invalid-api-key",{appName:a.name});const p={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wA(i)},y=new ZD(a,o,u,p);return rN(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,a)=>{t.getProvider("auth-internal").initialize()})),mo(new Ja("auth-internal",t=>{const n=lh(t.getProvider("auth").getImmediate());return(a=>new _x(a))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),na(TE,bE,Ex(i)),na(TE,bE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=5*60,Ax=RT("authIdTokenMaxAge")||bx;let AE=null;const Sx=i=>async t=>{const n=t&&await t.getIdTokenResult(),a=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(a&&a>Ax)return;const o=n==null?void 0:n.token;AE!==o&&(AE=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function wx(i=DT()){const t=jp(i,"auth");if(t.isInitialized())return t.getImmediate();const n=iN(i,{popupRedirectResolver:vx,persistence:[ON,yN,xA]}),a=RT("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(a,location.origin);if(location.origin===u.origin){const h=Sx(u.toString());dN(n,h,()=>h(n.currentUser)),hN(n,m=>h(m))}}const o=ST("auth");return o&&aN(n,`http://${o}`),n}function Rx(){var i,t;return(t=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&t!==void 0?t:document}JD({loadJS(i){return new Promise((t,n)=>{const a=document.createElement("script");a.setAttribute("src",i),a.onload=t,a.onerror=o=>{const u=Qn("internal-error");u.customData=o,n(u)},a.type="text/javascript",a.charset="UTF-8",Rx().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Tx("Browser");const Cx={apiKey:"AIzaSyCJwTH7g0F0Oyu9luNDaYlkFyifeqj9pfo",authDomain:"blog-bc0c7.firebaseapp.com",projectId:"blog-bc0c7",storageBucket:"blog-bc0c7.firebasestorage.app",messagingSenderId:"258704694550",appId:"1:258704694550:web:f5b39b89a4fcf91a4e8437",measurementId:"G-170T31RZP8"},BA=OT(Cx),cu=wx(BA),Ix=new Wi,dp=aD(BA),Ox=()=>{const[i,t]=Q.useState([]);Q.useEffect(()=>{(async()=>{const o=await AD(Xb(dp,"posts"));t(o.docs.map(u=>({...u.data(),id:u.id})))})()},[]);const n=async a=>{await SD(Wb(dp,"posts",a)),window.location.href="/"};return Tt.jsx("div",{className:"homePage",children:i.map(a=>{var o;return Tt.jsxs("div",{className:"postContents",children:[Tt.jsx("div",{className:"postHeader",children:Tt.jsx("h1",{children:a.title})}),Tt.jsx("div",{className:"postTextContainer",children:a.postText}),Tt.jsx("div",{className:"nameAndDeleteButton",children:a.author.id===((o=cu.currentUser)==null?void 0:o.uid)&&Tt.jsx("button",{onClick:()=>n(a.id),children:"削除"})})]},a.id)})})},Dx=({isAuth:i})=>{const[t,n]=Q.useState(),[a,o]=Q.useState(),u=qf(),h=async()=>{await wD(Xb(dp,"posts"),{title:t,postText:a,author:{username:cu.currentUser.displayName,id:cu.currentUser.uid}}),u("/")};return Q.useEffect(()=>{i||u("/login")},[]),Tt.jsx("div",{className:"createPostPage",children:Tt.jsxs("div",{className:"postContainer",children:[Tt.jsx("h1",{children:"記事を投稿する"}),Tt.jsxs("div",{className:"inputPost",children:[Tt.jsx("p",{children:"タイトル"}),Tt.jsx("input",{type:"text",placeholder:"タイトルを記入",onChange:m=>n(m.target.value)})]}),Tt.jsxs("div",{className:"inputPost",children:[Tt.jsx("p",{children:"本文"}),Tt.jsx("textarea",{placeholder:"本文を記入",onChange:m=>o(m.target.value)})]}),Tt.jsx("button",{className:"postButton",onClick:h,children:"投稿"})]})})},Nx=({setIsAuth:i})=>{const t=qf(),n=()=>{PN(cu,Ix).then(a=>{localStorage.setItem("isAuth",!0),i(!0),t("/")}).catch(a=>{console.log(a)})};return Tt.jsxs("div",{className:"logPage",children:[Tt.jsx("p",{children:"ログインして投稿する"}),Tt.jsx("button",{onClick:n,children:"Googleでログイン"})]})},xx=({setIsAuth:i})=>{const t=qf(),n=()=>{mN(cu).then(()=>{localStorage.clear(),i(!1),t("/login")}).catch(a=>{console.error("Error during sign out:",a)})};return Tt.jsxs("div",{className:"logPage",children:[Tt.jsx("p",{children:"ログアウトする"}),Tt.jsx("button",{onClick:n,children:"ログアウト"})]})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Mx(i,t,n){return(t=kx(t))in i?Object.defineProperty(i,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[t]=n,i}function SE(i,t){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),n.push.apply(n,a)}return n}function nt(i){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?SE(Object(n),!0).forEach(function(a){Mx(i,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):SE(Object(n)).forEach(function(a){Object.defineProperty(i,a,Object.getOwnPropertyDescriptor(n,a))})}return i}function Px(i,t){if(typeof i!="object"||!i)return i;var n=i[Symbol.toPrimitive];if(n!==void 0){var a=n.call(i,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(i)}function kx(i){var t=Px(i,"string");return typeof t=="symbol"?t:t+""}const wE=()=>{};let Ig={},jA={},HA=null,FA={mark:wE,measure:wE};try{typeof window<"u"&&(Ig=window),typeof document<"u"&&(jA=document),typeof MutationObserver<"u"&&(HA=MutationObserver),typeof performance<"u"&&(FA=performance)}catch{}const{userAgent:RE=""}=Ig.navigator||{},da=Ig,ee=jA,CE=HA,nf=FA;da.document;const cr=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",qA=~RE.indexOf("MSIE")||~RE.indexOf("Trident/");var Vx=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Lx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,GA={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Ux={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},KA=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],tn="classic",fh="duotone",zx="sharp",Bx="sharp-duotone",YA=[tn,fh,zx,Bx],jx={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Hx={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Fx=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),qx={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Gx=["fak","fa-kit","fakd","fa-kit-duotone"],IE={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Kx=["kit"],Yx={kit:{"fa-kit":"fak"}},Qx=["fak","fakd"],$x={kit:{fak:"fa-kit"}},OE={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},rf={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xx=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Wx=["fak","fa-kit","fakd","fa-kit-duotone"],Zx={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Jx={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},tM={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},mp={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},eM=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],pp=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Xx,...eM],nM=["solid","regular","light","thin","duotone","brands"],QA=[1,2,3,4,5,6,7,8,9,10],iM=QA.concat([11,12,13,14,15,16,17,18,19,20]),rM=[...Object.keys(tM),...nM,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rf.GROUP,rf.SWAP_OPACITY,rf.PRIMARY,rf.SECONDARY].concat(QA.map(i=>"".concat(i,"x"))).concat(iM.map(i=>"w-".concat(i))),aM={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const sr="___FONT_AWESOME___",gp=16,$A="fa",XA="svg-inline--fa",is="data-fa-i2svg",yp="data-fa-pseudo-element",sM="data-fa-pseudo-element-pending",Og="data-prefix",Dg="data-icon",DE="fontawesome-i2svg",oM="async",lM=["HTML","HEAD","STYLE","SCRIPT"],WA=(()=>{try{return!0}catch{return!1}})();function wu(i){return new Proxy(i,{get(t,n){return n in t?t[n]:t[tn]}})}const ZA=nt({},GA);ZA[tn]=nt(nt(nt(nt({},{"fa-duotone":"duotone"}),GA[tn]),IE.kit),IE["kit-duotone"]);const uM=wu(ZA),vp=nt({},qx);vp[tn]=nt(nt(nt(nt({},{duotone:"fad"}),vp[tn]),OE.kit),OE["kit-duotone"]);const NE=wu(vp),_p=nt({},mp);_p[tn]=nt(nt({},_p[tn]),$x.kit);const Ng=wu(_p),Ep=nt({},Jx);Ep[tn]=nt(nt({},Ep[tn]),Yx.kit);wu(Ep);const cM=Vx,JA="fa-layers-text",fM=Lx,hM=nt({},jx);wu(hM);const dM=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Mm=Ux,mM=[...Kx,...rM],Zl=da.FontAwesomeConfig||{};function pM(i){var t=ee.querySelector("script["+i+"]");if(t)return t.getAttribute(i)}function gM(i){return i===""?!0:i==="false"?!1:i==="true"?!0:i}ee&&typeof ee.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const o=gM(pM(n));o!=null&&(Zl[a]=o)});const t1={styleDefault:"solid",familyDefault:tn,cssPrefix:$A,replacementClass:XA,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Zl.familyPrefix&&(Zl.cssPrefix=Zl.familyPrefix);const Ao=nt(nt({},t1),Zl);Ao.autoReplaceSvg||(Ao.observeMutations=!1);const dt={};Object.keys(t1).forEach(i=>{Object.defineProperty(dt,i,{enumerable:!0,set:function(t){Ao[i]=t,Jl.forEach(n=>n(dt))},get:function(){return Ao[i]}})});Object.defineProperty(dt,"familyPrefix",{enumerable:!0,set:function(i){Ao.cssPrefix=i,Jl.forEach(t=>t(dt))},get:function(){return Ao.cssPrefix}});da.FontAwesomeConfig=dt;const Jl=[];function yM(i){return Jl.push(i),()=>{Jl.splice(Jl.indexOf(i),1)}}const $r=gp,di={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vM(i){if(!i||!cr)return;const t=ee.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=i;const n=ee.head.childNodes;let a=null;for(let o=n.length-1;o>-1;o--){const u=n[o],h=(u.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(h)>-1&&(a=u)}return ee.head.insertBefore(t,a),i}const _M="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fu(){let i=12,t="";for(;i-- >0;)t+=_M[Math.random()*62|0];return t}function xo(i){const t=[];for(let n=(i||[]).length>>>0;n--;)t[n]=i[n];return t}function xg(i){return i.classList?xo(i.classList):(i.getAttribute("class")||"").split(" ").filter(t=>t)}function e1(i){return"".concat(i).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function EM(i){return Object.keys(i||{}).reduce((t,n)=>t+"".concat(n,'="').concat(e1(i[n]),'" '),"").trim()}function hh(i){return Object.keys(i||{}).reduce((t,n)=>t+"".concat(n,": ").concat(i[n].trim(),";"),"")}function Mg(i){return i.size!==di.size||i.x!==di.x||i.y!==di.y||i.rotate!==di.rotate||i.flipX||i.flipY}function TM(i){let{transform:t,containerWidth:n,iconWidth:a}=i;const o={transform:"translate(".concat(n/2," 256)")},u="translate(".concat(t.x*32,", ").concat(t.y*32,") "),h="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),m="rotate(".concat(t.rotate," 0 0)"),p={transform:"".concat(u," ").concat(h," ").concat(m)},y={transform:"translate(".concat(a/2*-1," -256)")};return{outer:o,inner:p,path:y}}function bM(i){let{transform:t,width:n=gp,height:a=gp,startCentered:o=!1}=i,u="";return o&&qA?u+="translate(".concat(t.x/$r-n/2,"em, ").concat(t.y/$r-a/2,"em) "):o?u+="translate(calc(-50% + ".concat(t.x/$r,"em), calc(-50% + ").concat(t.y/$r,"em)) "):u+="translate(".concat(t.x/$r,"em, ").concat(t.y/$r,"em) "),u+="scale(".concat(t.size/$r*(t.flipX?-1:1),", ").concat(t.size/$r*(t.flipY?-1:1),") "),u+="rotate(".concat(t.rotate,"deg) "),u}var AM=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function n1(){const i=$A,t=XA,n=dt.cssPrefix,a=dt.replacementClass;let o=AM;if(n!==i||a!==t){const u=new RegExp("\\.".concat(i,"\\-"),"g"),h=new RegExp("\\--".concat(i,"\\-"),"g"),m=new RegExp("\\.".concat(t),"g");o=o.replace(u,".".concat(n,"-")).replace(h,"--".concat(n,"-")).replace(m,".".concat(a))}return o}let xE=!1;function Pm(){dt.autoAddCss&&!xE&&(vM(n1()),xE=!0)}var SM={mixout(){return{dom:{css:n1,insertCss:Pm}}},hooks(){return{beforeDOMElementCreation(){Pm()},beforeI2svg(){Pm()}}}};const or=da||{};or[sr]||(or[sr]={});or[sr].styles||(or[sr].styles={});or[sr].hooks||(or[sr].hooks={});or[sr].shims||(or[sr].shims=[]);var mi=or[sr];const i1=[],r1=function(){ee.removeEventListener("DOMContentLoaded",r1),Bf=1,i1.map(i=>i())};let Bf=!1;cr&&(Bf=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),Bf||ee.addEventListener("DOMContentLoaded",r1));function wM(i){cr&&(Bf?setTimeout(i,0):i1.push(i))}function Ru(i){const{tag:t,attributes:n={},children:a=[]}=i;return typeof i=="string"?e1(i):"<".concat(t," ").concat(EM(n),">").concat(a.map(Ru).join(""),"</").concat(t,">")}function ME(i,t,n){if(i&&i[t]&&i[t][n])return{prefix:t,iconName:n,icon:i[t][n]}}var km=function(t,n,a,o){var u=Object.keys(t),h=u.length,m=n,p,y,E;for(a===void 0?(p=1,E=t[u[0]]):(p=0,E=a);p<h;p++)y=u[p],E=m(E,t[y],y,t);return E};function RM(i){const t=[];let n=0;const a=i.length;for(;n<a;){const o=i.charCodeAt(n++);if(o>=55296&&o<=56319&&n<a){const u=i.charCodeAt(n++);(u&64512)==56320?t.push(((o&1023)<<10)+(u&1023)+65536):(t.push(o),n--)}else t.push(o)}return t}function Tp(i){const t=RM(i);return t.length===1?t[0].toString(16):null}function CM(i,t){const n=i.length;let a=i.charCodeAt(t),o;return a>=55296&&a<=56319&&n>t+1&&(o=i.charCodeAt(t+1),o>=56320&&o<=57343)?(a-55296)*1024+o-56320+65536:a}function PE(i){return Object.keys(i).reduce((t,n)=>{const a=i[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function bp(i,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,o=PE(t);typeof mi.hooks.addPack=="function"&&!a?mi.hooks.addPack(i,PE(t)):mi.styles[i]=nt(nt({},mi.styles[i]||{}),o),i==="fas"&&bp("fa",t)}const{styles:hu,shims:IM}=mi,a1=Object.keys(Ng),OM=a1.reduce((i,t)=>(i[t]=Object.keys(Ng[t]),i),{});let Pg=null,s1={},o1={},l1={},u1={},c1={};function DM(i){return~mM.indexOf(i)}function NM(i,t){const n=t.split("-"),a=n[0],o=n.slice(1).join("-");return a===i&&o!==""&&!DM(o)?o:null}const f1=()=>{const i=a=>km(hu,(o,u,h)=>(o[h]=km(u,a,{}),o),{});s1=i((a,o,u)=>(o[3]&&(a[o[3]]=u),o[2]&&o[2].filter(m=>typeof m=="number").forEach(m=>{a[m.toString(16)]=u}),a)),o1=i((a,o,u)=>(a[u]=u,o[2]&&o[2].filter(m=>typeof m=="string").forEach(m=>{a[m]=u}),a)),c1=i((a,o,u)=>{const h=o[2];return a[u]=u,h.forEach(m=>{a[m]=u}),a});const t="far"in hu||dt.autoFetchSvg,n=km(IM,(a,o)=>{const u=o[0];let h=o[1];const m=o[2];return h==="far"&&!t&&(h="fas"),typeof u=="string"&&(a.names[u]={prefix:h,iconName:m}),typeof u=="number"&&(a.unicodes[u.toString(16)]={prefix:h,iconName:m}),a},{names:{},unicodes:{}});l1=n.names,u1=n.unicodes,Pg=dh(dt.styleDefault,{family:dt.familyDefault})};yM(i=>{Pg=dh(i.styleDefault,{family:dt.familyDefault})});f1();function kg(i,t){return(s1[i]||{})[t]}function xM(i,t){return(o1[i]||{})[t]}function Wa(i,t){return(c1[i]||{})[t]}function h1(i){return l1[i]||{prefix:null,iconName:null}}function MM(i){const t=u1[i],n=kg("fas",i);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ma(){return Pg}const d1=()=>({prefix:null,iconName:null,rest:[]});function PM(i){let t=tn;const n=a1.reduce((a,o)=>(a[o]="".concat(dt.cssPrefix,"-").concat(o),a),{});return YA.forEach(a=>{(i.includes(n[a])||i.some(o=>OM[a].includes(o)))&&(t=a)}),t}function dh(i){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=tn}=t,a=uM[n][i];if(n===fh&&!i)return"fad";const o=NE[n][i]||NE[n][a],u=i in mi.styles?i:null;return o||u||null}function kM(i){let t=[],n=null;return i.forEach(a=>{const o=NM(dt.cssPrefix,a);o?n=o:a&&t.push(a)}),{iconName:n,rest:t}}function kE(i){return i.sort().filter((t,n,a)=>a.indexOf(t)===n)}function mh(i){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let a=null;const o=pp.concat(Wx),u=kE(i.filter(A=>o.includes(A))),h=kE(i.filter(A=>!pp.includes(A))),m=u.filter(A=>(a=A,!KA.includes(A))),[p=null]=m,y=PM(u),E=nt(nt({},kM(h)),{},{prefix:dh(p,{family:y})});return nt(nt(nt({},E),zM({values:i,family:y,styles:hu,config:dt,canonical:E,givenPrefix:a})),VM(n,a,E))}function VM(i,t,n){let{prefix:a,iconName:o}=n;if(i||!a||!o)return{prefix:a,iconName:o};const u=t==="fa"?h1(o):{},h=Wa(a,o);return o=u.iconName||h||o,a=u.prefix||a,a==="far"&&!hu.far&&hu.fas&&!dt.autoFetchSvg&&(a="fas"),{prefix:a,iconName:o}}const LM=YA.filter(i=>i!==tn||i!==fh),UM=Object.keys(mp).filter(i=>i!==tn).map(i=>Object.keys(mp[i])).flat();function zM(i){const{values:t,family:n,canonical:a,givenPrefix:o="",styles:u={},config:h={}}=i,m=n===fh,p=t.includes("fa-duotone")||t.includes("fad"),y=h.familyDefault==="duotone",E=a.prefix==="fad"||a.prefix==="fa-duotone";if(!m&&(p||y||E)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&LM.includes(n)&&(Object.keys(u).find(w=>UM.includes(w))||h.autoFetchSvg)){const w=Fx.get(n).defaultShortPrefixId;a.prefix=w,a.iconName=Wa(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||o==="fa")&&(a.prefix=ma()||"fas"),a}class BM{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(u=>{this.definitions[u]=nt(nt({},this.definitions[u]||{}),o[u]),bp(u,o[u]);const h=Ng[tn][u];h&&bp(h,o[u]),f1()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(o=>{const{prefix:u,iconName:h,icon:m}=a[o],p=m[2];t[u]||(t[u]={}),p.length>0&&p.forEach(y=>{typeof y=="string"&&(t[u][y]=m)}),t[u][h]=m}),t}}let VE=[],ao={};const ho={},jM=Object.keys(ho);function HM(i,t){let{mixoutsTo:n}=t;return VE=i,ao={},Object.keys(ho).forEach(a=>{jM.indexOf(a)===-1&&delete ho[a]}),VE.forEach(a=>{const o=a.mixout?a.mixout():{};if(Object.keys(o).forEach(u=>{typeof o[u]=="function"&&(n[u]=o[u]),typeof o[u]=="object"&&Object.keys(o[u]).forEach(h=>{n[u]||(n[u]={}),n[u][h]=o[u][h]})}),a.hooks){const u=a.hooks();Object.keys(u).forEach(h=>{ao[h]||(ao[h]=[]),ao[h].push(u[h])})}a.provides&&a.provides(ho)}),n}function Ap(i,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];return(ao[i]||[]).forEach(h=>{t=h.apply(null,[t,...a])}),t}function rs(i){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(ao[i]||[]).forEach(u=>{u.apply(null,n)})}function pa(){const i=arguments[0],t=Array.prototype.slice.call(arguments,1);return ho[i]?ho[i].apply(null,t):void 0}function Sp(i){i.prefix==="fa"&&(i.prefix="fas");let{iconName:t}=i;const n=i.prefix||ma();if(t)return t=Wa(n,t)||t,ME(m1.definitions,n,t)||ME(mi.styles,n,t)}const m1=new BM,FM=()=>{dt.autoReplaceSvg=!1,dt.observeMutations=!1,rs("noAuto")},qM={i2svg:function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return cr?(rs("beforeI2svg",i),pa("pseudoElements2svg",i),pa("i2svg",i)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=i;dt.autoReplaceSvg===!1&&(dt.autoReplaceSvg=!0),dt.observeMutations=!0,wM(()=>{KM({autoReplaceSvgRoot:t}),rs("watch",i)})}},GM={icon:i=>{if(i===null)return null;if(typeof i=="object"&&i.prefix&&i.iconName)return{prefix:i.prefix,iconName:Wa(i.prefix,i.iconName)||i.iconName};if(Array.isArray(i)&&i.length===2){const t=i[1].indexOf("fa-")===0?i[1].slice(3):i[1],n=dh(i[0]);return{prefix:n,iconName:Wa(n,t)||t}}if(typeof i=="string"&&(i.indexOf("".concat(dt.cssPrefix,"-"))>-1||i.match(cM))){const t=mh(i.split(" "),{skipLookups:!0});return{prefix:t.prefix||ma(),iconName:Wa(t.prefix,t.iconName)||t.iconName}}if(typeof i=="string"){const t=ma();return{prefix:t,iconName:Wa(t,i)||i}}}},_n={noAuto:FM,config:dt,dom:qM,parse:GM,library:m1,findIconDefinition:Sp,toHtml:Ru},KM=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=ee}=i;(Object.keys(mi.styles).length>0||dt.autoFetchSvg)&&cr&&dt.autoReplaceSvg&&_n.dom.i2svg({node:t})};function ph(i,t){return Object.defineProperty(i,"abstract",{get:t}),Object.defineProperty(i,"html",{get:function(){return i.abstract.map(n=>Ru(n))}}),Object.defineProperty(i,"node",{get:function(){if(!cr)return;const n=ee.createElement("div");return n.innerHTML=i.html,n.children}}),i}function YM(i){let{children:t,main:n,mask:a,attributes:o,styles:u,transform:h}=i;if(Mg(h)&&n.found&&!a.found){const{width:m,height:p}=n,y={x:m/p/2,y:.5};o.style=hh(nt(nt({},u),{},{"transform-origin":"".concat(y.x+h.x/16,"em ").concat(y.y+h.y/16,"em")}))}return[{tag:"svg",attributes:o,children:t}]}function QM(i){let{prefix:t,iconName:n,children:a,attributes:o,symbol:u}=i;const h=u===!0?"".concat(t,"-").concat(dt.cssPrefix,"-").concat(n):u;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:nt(nt({},o),{},{id:h}),children:a}]}]}function Vg(i){const{icons:{main:t,mask:n},prefix:a,iconName:o,transform:u,symbol:h,title:m,maskId:p,titleId:y,extra:E,watchable:A=!1}=i,{width:w,height:D}=n.found?n:t,V=Qx.includes(a),K=[dt.replacementClass,o?"".concat(dt.cssPrefix,"-").concat(o):""].filter(at=>E.classes.indexOf(at)===-1).filter(at=>at!==""||!!at).concat(E.classes).join(" ");let z={children:[],attributes:nt(nt({},E.attributes),{},{"data-prefix":a,"data-icon":o,class:K,role:E.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(D)})};const q=V&&!~E.classes.indexOf("fa-fw")?{width:"".concat(w/D*16*.0625,"em")}:{};A&&(z.attributes[is]=""),m&&(z.children.push({tag:"title",attributes:{id:z.attributes["aria-labelledby"]||"title-".concat(y||fu())},children:[m]}),delete z.attributes.title);const Z=nt(nt({},z),{},{prefix:a,iconName:o,main:t,mask:n,maskId:p,transform:u,symbol:h,styles:nt(nt({},q),E.styles)}),{children:W,attributes:ct}=n.found&&t.found?pa("generateAbstractMask",Z)||{children:[],attributes:{}}:pa("generateAbstractIcon",Z)||{children:[],attributes:{}};return Z.children=W,Z.attributes=ct,h?QM(Z):YM(Z)}function LE(i){const{content:t,width:n,height:a,transform:o,title:u,extra:h,watchable:m=!1}=i,p=nt(nt(nt({},h.attributes),u?{title:u}:{}),{},{class:h.classes.join(" ")});m&&(p[is]="");const y=nt({},h.styles);Mg(o)&&(y.transform=bM({transform:o,startCentered:!0,width:n,height:a}),y["-webkit-transform"]=y.transform);const E=hh(y);E.length>0&&(p.style=E);const A=[];return A.push({tag:"span",attributes:p,children:[t]}),u&&A.push({tag:"span",attributes:{class:"sr-only"},children:[u]}),A}function $M(i){const{content:t,title:n,extra:a}=i,o=nt(nt(nt({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),u=hh(a.styles);u.length>0&&(o.style=u);const h=[];return h.push({tag:"span",attributes:o,children:[t]}),n&&h.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),h}const{styles:Vm}=mi;function wp(i){const t=i[0],n=i[1],[a]=i.slice(4);let o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(dt.cssPrefix,"-").concat(Mm.GROUP)},children:[{tag:"path",attributes:{class:"".concat(dt.cssPrefix,"-").concat(Mm.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(dt.cssPrefix,"-").concat(Mm.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:o}}const XM={found:!1,width:512,height:512};function WM(i,t){!WA&&!dt.showMissingIcons&&i&&console.error('Icon with name "'.concat(i,'" and prefix "').concat(t,'" is missing.'))}function Rp(i,t){let n=t;return t==="fa"&&dt.styleDefault!==null&&(t=ma()),new Promise((a,o)=>{if(n==="fa"){const u=h1(i)||{};i=u.iconName||i,t=u.prefix||t}if(i&&t&&Vm[t]&&Vm[t][i]){const u=Vm[t][i];return a(wp(u))}WM(i,t),a(nt(nt({},XM),{},{icon:dt.showMissingIcons&&i?pa("missingIconAbstract")||{}:{}}))})}const UE=()=>{},Cp=dt.measurePerformance&&nf&&nf.mark&&nf.measure?nf:{mark:UE,measure:UE},Kl='FA "6.7.2"',ZM=i=>(Cp.mark("".concat(Kl," ").concat(i," begins")),()=>p1(i)),p1=i=>{Cp.mark("".concat(Kl," ").concat(i," ends")),Cp.measure("".concat(Kl," ").concat(i),"".concat(Kl," ").concat(i," begins"),"".concat(Kl," ").concat(i," ends"))};var Lg={begin:ZM,end:p1};const yf=()=>{};function zE(i){return typeof(i.getAttribute?i.getAttribute(is):null)=="string"}function JM(i){const t=i.getAttribute?i.getAttribute(Og):null,n=i.getAttribute?i.getAttribute(Dg):null;return t&&n}function t4(i){return i&&i.classList&&i.classList.contains&&i.classList.contains(dt.replacementClass)}function e4(){return dt.autoReplaceSvg===!0?vf.replace:vf[dt.autoReplaceSvg]||vf.replace}function n4(i){return ee.createElementNS("http://www.w3.org/2000/svg",i)}function i4(i){return ee.createElement(i)}function g1(i){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=i.tag==="svg"?n4:i4}=t;if(typeof i=="string")return ee.createTextNode(i);const a=n(i.tag);return Object.keys(i.attributes||[]).forEach(function(u){a.setAttribute(u,i.attributes[u])}),(i.children||[]).forEach(function(u){a.appendChild(g1(u,{ceFn:n}))}),a}function r4(i){let t=" ".concat(i.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const vf={replace:function(i){const t=i[0];if(t.parentNode)if(i[1].forEach(n=>{t.parentNode.insertBefore(g1(n),t)}),t.getAttribute(is)===null&&dt.keepOriginalSource){let n=ee.createComment(r4(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(i){const t=i[0],n=i[1];if(~xg(t).indexOf(dt.replacementClass))return vf.replace(i);const a=new RegExp("".concat(dt.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const u=n[0].attributes.class.split(" ").reduce((h,m)=>(m===dt.replacementClass||m.match(a)?h.toSvg.push(m):h.toNode.push(m),h),{toNode:[],toSvg:[]});n[0].attributes.class=u.toSvg.join(" "),u.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",u.toNode.join(" "))}const o=n.map(u=>Ru(u)).join(`
`);t.setAttribute(is,""),t.innerHTML=o}};function BE(i){i()}function y1(i,t){const n=typeof t=="function"?t:yf;if(i.length===0)n();else{let a=BE;dt.mutateApproach===oM&&(a=da.requestAnimationFrame||BE),a(()=>{const o=e4(),u=Lg.begin("mutate");i.map(o),u(),n()})}}let Ug=!1;function v1(){Ug=!0}function Ip(){Ug=!1}let jf=null;function jE(i){if(!CE||!dt.observeMutations)return;const{treeCallback:t=yf,nodeCallback:n=yf,pseudoElementsCallback:a=yf,observeMutationsRoot:o=ee}=i;jf=new CE(u=>{if(Ug)return;const h=ma();xo(u).forEach(m=>{if(m.type==="childList"&&m.addedNodes.length>0&&!zE(m.addedNodes[0])&&(dt.searchPseudoElements&&a(m.target),t(m.target)),m.type==="attributes"&&m.target.parentNode&&dt.searchPseudoElements&&a(m.target.parentNode),m.type==="attributes"&&zE(m.target)&&~dM.indexOf(m.attributeName))if(m.attributeName==="class"&&JM(m.target)){const{prefix:p,iconName:y}=mh(xg(m.target));m.target.setAttribute(Og,p||h),y&&m.target.setAttribute(Dg,y)}else t4(m.target)&&n(m.target)})}),cr&&jf.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function a4(){jf&&jf.disconnect()}function s4(i){const t=i.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,o)=>{const u=o.split(":"),h=u[0],m=u.slice(1);return h&&m.length>0&&(a[h]=m.join(":").trim()),a},{})),n}function o4(i){const t=i.getAttribute("data-prefix"),n=i.getAttribute("data-icon"),a=i.innerText!==void 0?i.innerText.trim():"";let o=mh(xg(i));return o.prefix||(o.prefix=ma()),t&&n&&(o.prefix=t,o.iconName=n),o.iconName&&o.prefix||(o.prefix&&a.length>0&&(o.iconName=xM(o.prefix,i.innerText)||kg(o.prefix,Tp(i.innerText))),!o.iconName&&dt.autoFetchSvg&&i.firstChild&&i.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=i.firstChild.data)),o}function l4(i){const t=xo(i.attributes).reduce((o,u)=>(o.name!=="class"&&o.name!=="style"&&(o[u.name]=u.value),o),{}),n=i.getAttribute("title"),a=i.getAttribute("data-fa-title-id");return dt.autoA11y&&(n?t["aria-labelledby"]="".concat(dt.replacementClass,"-title-").concat(a||fu()):(t["aria-hidden"]="true",t.focusable="false")),t}function u4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:di,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function HE(i){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:o}=o4(i),u=l4(i),h=Ap("parseNodeAttributes",{},i);let m=t.styleParser?s4(i):[];return nt({iconName:n,title:i.getAttribute("title"),titleId:i.getAttribute("data-fa-title-id"),prefix:a,transform:di,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:m,attributes:u}},h)}const{styles:c4}=mi;function _1(i){const t=dt.autoReplaceSvg==="nest"?HE(i,{styleParser:!1}):HE(i);return~t.extra.classes.indexOf(JA)?pa("generateLayersText",i,t):pa("generateSvgReplacementMutation",i,t)}function f4(){return[...Gx,...pp]}function FE(i){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!cr)return Promise.resolve();const n=ee.documentElement.classList,a=E=>n.add("".concat(DE,"-").concat(E)),o=E=>n.remove("".concat(DE,"-").concat(E)),u=dt.autoFetchSvg?f4():KA.concat(Object.keys(c4));u.includes("fa")||u.push("fa");const h=[".".concat(JA,":not([").concat(is,"])")].concat(u.map(E=>".".concat(E,":not([").concat(is,"])"))).join(", ");if(h.length===0)return Promise.resolve();let m=[];try{m=xo(i.querySelectorAll(h))}catch{}if(m.length>0)a("pending"),o("complete");else return Promise.resolve();const p=Lg.begin("onTree"),y=m.reduce((E,A)=>{try{const w=_1(A);w&&E.push(w)}catch(w){WA||w.name==="MissingIcon"&&console.error(w)}return E},[]);return new Promise((E,A)=>{Promise.all(y).then(w=>{y1(w,()=>{a("active"),a("complete"),o("pending"),typeof t=="function"&&t(),p(),E()})}).catch(w=>{p(),A(w)})})}function h4(i){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_1(i).then(n=>{n&&y1([n],t)})}function d4(i){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:Sp(t||{});let{mask:o}=n;return o&&(o=(o||{}).icon?o:Sp(o||{})),i(a,nt(nt({},n),{},{mask:o}))}}const m4=function(i){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=di,symbol:a=!1,mask:o=null,maskId:u=null,title:h=null,titleId:m=null,classes:p=[],attributes:y={},styles:E={}}=t;if(!i)return;const{prefix:A,iconName:w,icon:D}=i;return ph(nt({type:"icon"},i),()=>(rs("beforeDOMElementCreation",{iconDefinition:i,params:t}),dt.autoA11y&&(h?y["aria-labelledby"]="".concat(dt.replacementClass,"-title-").concat(m||fu()):(y["aria-hidden"]="true",y.focusable="false")),Vg({icons:{main:wp(D),mask:o?wp(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:w,transform:nt(nt({},di),n),symbol:a,title:h,maskId:u,titleId:m,extra:{attributes:y,styles:E,classes:p}})))};var p4={mixout(){return{icon:d4(m4)}},hooks(){return{mutationObserverCallbacks(i){return i.treeCallback=FE,i.nodeCallback=h4,i}}},provides(i){i.i2svg=function(t){const{node:n=ee,callback:a=()=>{}}=t;return FE(n,a)},i.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:o,titleId:u,prefix:h,transform:m,symbol:p,mask:y,maskId:E,extra:A}=n;return new Promise((w,D)=>{Promise.all([Rp(a,h),y.iconName?Rp(y.iconName,y.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(V=>{let[K,z]=V;w([t,Vg({icons:{main:K,mask:z},prefix:h,iconName:a,transform:m,symbol:p,maskId:E,title:o,titleId:u,extra:A,watchable:!0})])}).catch(D)})},i.generateAbstractIcon=function(t){let{children:n,attributes:a,main:o,transform:u,styles:h}=t;const m=hh(h);m.length>0&&(a.style=m);let p;return Mg(u)&&(p=pa("generateAbstractTransformGrouping",{main:o,transform:u,containerWidth:o.width,iconWidth:o.width})),n.push(p||o.icon),{children:n,attributes:a}}}},g4={mixout(){return{layer(i){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return ph({type:"layer"},()=>{rs("beforeDOMElementCreation",{assembler:i,params:t});let a=[];return i(o=>{Array.isArray(o)?o.map(u=>{a=a.concat(u.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(dt.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},y4={mixout(){return{counter(i){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:o={},styles:u={}}=t;return ph({type:"counter",content:i},()=>(rs("beforeDOMElementCreation",{content:i,params:t}),$M({content:i.toString(),title:n,extra:{attributes:o,styles:u,classes:["".concat(dt.cssPrefix,"-layers-counter"),...a]}})))}}}},v4={mixout(){return{text(i){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=di,title:a=null,classes:o=[],attributes:u={},styles:h={}}=t;return ph({type:"text",content:i},()=>(rs("beforeDOMElementCreation",{content:i,params:t}),LE({content:i,transform:nt(nt({},di),n),title:a,extra:{attributes:u,styles:h,classes:["".concat(dt.cssPrefix,"-layers-text"),...o]}})))}}},provides(i){i.generateLayersText=function(t,n){const{title:a,transform:o,extra:u}=n;let h=null,m=null;if(qA){const p=parseInt(getComputedStyle(t).fontSize,10),y=t.getBoundingClientRect();h=y.width/p,m=y.height/p}return dt.autoA11y&&!a&&(u.attributes["aria-hidden"]="true"),Promise.resolve([t,LE({content:t.innerHTML,width:h,height:m,transform:o,title:a,extra:u,watchable:!0})])}}};const _4=new RegExp('"',"ug"),qE=[1105920,1112319],GE=nt(nt(nt(nt({},{FontAwesome:{normal:"fas",400:"fas"}}),Hx),aM),Zx),Op=Object.keys(GE).reduce((i,t)=>(i[t.toLowerCase()]=GE[t],i),{}),E4=Object.keys(Op).reduce((i,t)=>{const n=Op[t];return i[t]=n[900]||[...Object.entries(n)][0][1],i},{});function T4(i){const t=i.replace(_4,""),n=CM(t,0),a=n>=qE[0]&&n<=qE[1],o=t.length===2?t[0]===t[1]:!1;return{value:Tp(o?t[0]:t),isSecondary:a||o}}function b4(i,t){const n=i.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),o=isNaN(a)?"normal":a;return(Op[n]||{})[o]||E4[n]}function KE(i,t){const n="".concat(sM).concat(t.replace(":","-"));return new Promise((a,o)=>{if(i.getAttribute(n)!==null)return a();const h=xo(i.children).filter(w=>w.getAttribute(yp)===t)[0],m=da.getComputedStyle(i,t),p=m.getPropertyValue("font-family"),y=p.match(fM),E=m.getPropertyValue("font-weight"),A=m.getPropertyValue("content");if(h&&!y)return i.removeChild(h),a();if(y&&A!=="none"&&A!==""){const w=m.getPropertyValue("content");let D=b4(p,E);const{value:V,isSecondary:K}=T4(w),z=y[0].startsWith("FontAwesome");let q=kg(D,V),Z=q;if(z){const W=MM(V);W.iconName&&W.prefix&&(q=W.iconName,D=W.prefix)}if(q&&!K&&(!h||h.getAttribute(Og)!==D||h.getAttribute(Dg)!==Z)){i.setAttribute(n,Z),h&&i.removeChild(h);const W=u4(),{extra:ct}=W;ct.attributes[yp]=t,Rp(q,D).then(at=>{const At=Vg(nt(nt({},W),{},{icons:{main:at,mask:d1()},prefix:D,iconName:Z,extra:ct,watchable:!0})),x=ee.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?i.insertBefore(x,i.firstChild):i.appendChild(x),x.outerHTML=At.map(R=>Ru(R)).join(`
`),i.removeAttribute(n),a()}).catch(o)}else a()}else a()})}function A4(i){return Promise.all([KE(i,"::before"),KE(i,"::after")])}function S4(i){return i.parentNode!==document.head&&!~lM.indexOf(i.tagName.toUpperCase())&&!i.getAttribute(yp)&&(!i.parentNode||i.parentNode.tagName!=="svg")}function YE(i){if(cr)return new Promise((t,n)=>{const a=xo(i.querySelectorAll("*")).filter(S4).map(A4),o=Lg.begin("searchPseudoElements");v1(),Promise.all(a).then(()=>{o(),Ip(),t()}).catch(()=>{o(),Ip(),n()})})}var w4={hooks(){return{mutationObserverCallbacks(i){return i.pseudoElementsCallback=YE,i}}},provides(i){i.pseudoElements2svg=function(t){const{node:n=ee}=t;dt.searchPseudoElements&&YE(n)}}};let QE=!1;var R4={mixout(){return{dom:{unwatch(){v1(),QE=!0}}}},hooks(){return{bootstrap(){jE(Ap("mutationObserverCallbacks",{}))},noAuto(){a4()},watch(i){const{observeMutationsRoot:t}=i;QE?Ip():jE(Ap("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const $E=i=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return i.toLowerCase().split(" ").reduce((n,a)=>{const o=a.toLowerCase().split("-"),u=o[0];let h=o.slice(1).join("-");if(u&&h==="h")return n.flipX=!0,n;if(u&&h==="v")return n.flipY=!0,n;if(h=parseFloat(h),isNaN(h))return n;switch(u){case"grow":n.size=n.size+h;break;case"shrink":n.size=n.size-h;break;case"left":n.x=n.x-h;break;case"right":n.x=n.x+h;break;case"up":n.y=n.y-h;break;case"down":n.y=n.y+h;break;case"rotate":n.rotate=n.rotate+h;break}return n},t)};var C4={mixout(){return{parse:{transform:i=>$E(i)}}},hooks(){return{parseNodeAttributes(i,t){const n=t.getAttribute("data-fa-transform");return n&&(i.transform=$E(n)),i}}},provides(i){i.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:o,iconWidth:u}=t;const h={transform:"translate(".concat(o/2," 256)")},m="translate(".concat(a.x*32,", ").concat(a.y*32,") "),p="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),y="rotate(".concat(a.rotate," 0 0)"),E={transform:"".concat(m," ").concat(p," ").concat(y)},A={transform:"translate(".concat(u/2*-1," -256)")},w={outer:h,inner:E,path:A};return{tag:"g",attributes:nt({},w.outer),children:[{tag:"g",attributes:nt({},w.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:nt(nt({},n.icon.attributes),w.path)}]}]}}}};const Lm={x:0,y:0,width:"100%",height:"100%"};function XE(i){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return i.attributes&&(i.attributes.fill||t)&&(i.attributes.fill="black"),i}function I4(i){return i.tag==="g"?i.children:[i]}var O4={hooks(){return{parseNodeAttributes(i,t){const n=t.getAttribute("data-fa-mask"),a=n?mh(n.split(" ").map(o=>o.trim())):d1();return a.prefix||(a.prefix=ma()),i.mask=a,i.maskId=t.getAttribute("data-fa-mask-id"),i}}},provides(i){i.generateAbstractMask=function(t){let{children:n,attributes:a,main:o,mask:u,maskId:h,transform:m}=t;const{width:p,icon:y}=o,{width:E,icon:A}=u,w=TM({transform:m,containerWidth:E,iconWidth:p}),D={tag:"rect",attributes:nt(nt({},Lm),{},{fill:"white"})},V=y.children?{children:y.children.map(XE)}:{},K={tag:"g",attributes:nt({},w.inner),children:[XE(nt({tag:y.tag,attributes:nt(nt({},y.attributes),w.path)},V))]},z={tag:"g",attributes:nt({},w.outer),children:[K]},q="mask-".concat(h||fu()),Z="clip-".concat(h||fu()),W={tag:"mask",attributes:nt(nt({},Lm),{},{id:q,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[D,z]},ct={tag:"defs",children:[{tag:"clipPath",attributes:{id:Z},children:I4(A)},W]};return n.push(ct,{tag:"rect",attributes:nt({fill:"currentColor","clip-path":"url(#".concat(Z,")"),mask:"url(#".concat(q,")")},Lm)}),{children:n,attributes:a}}}},D4={provides(i){let t=!1;da.matchMedia&&(t=da.matchMedia("(prefers-reduced-motion: reduce)").matches),i.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:nt(nt({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const u=nt(nt({},o),{},{attributeName:"opacity"}),h={tag:"circle",attributes:nt(nt({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||h.children.push({tag:"animate",attributes:nt(nt({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:nt(nt({},u),{},{values:"1;0;1;1;0;1;"})}),n.push(h),n.push({tag:"path",attributes:nt(nt({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:nt(nt({},u),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:nt(nt({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:nt(nt({},u),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},N4={hooks(){return{parseNodeAttributes(i,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return i.symbol=a,i}}}},x4=[SM,p4,g4,y4,v4,w4,R4,C4,O4,D4,N4];HM(x4,{mixoutsTo:_n});_n.noAuto;_n.config;_n.library;_n.dom;const Dp=_n.parse;_n.findIconDefinition;_n.toHtml;const M4=_n.icon;_n.layer;_n.text;_n.counter;var Um={exports:{}},zm,WE;function P4(){if(WE)return zm;WE=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return zm=i,zm}var Bm,ZE;function k4(){if(ZE)return Bm;ZE=1;var i=P4();function t(){}function n(){}return n.resetWarningCache=t,Bm=function(){function a(h,m,p,y,E,A){if(A!==i){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}a.isRequired=a;function o(){return a}var u={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:o,element:a,elementType:a,instanceOf:o,node:a,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return u.PropTypes=u,u},Bm}var JE;function V4(){return JE||(JE=1,Um.exports=k4()()),Um.exports}var L4=V4();const Mt=rT(L4);function tT(i,t){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(i,o).enumerable})),n.push.apply(n,a)}return n}function hi(i){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tT(Object(n),!0).forEach(function(a){so(i,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):tT(Object(n)).forEach(function(a){Object.defineProperty(i,a,Object.getOwnPropertyDescriptor(n,a))})}return i}function Hf(i){"@babel/helpers - typeof";return Hf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hf(i)}function so(i,t,n){return t in i?Object.defineProperty(i,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[t]=n,i}function U4(i,t){if(i==null)return{};var n={},a=Object.keys(i),o,u;for(u=0;u<a.length;u++)o=a[u],!(t.indexOf(o)>=0)&&(n[o]=i[o]);return n}function z4(i,t){if(i==null)return{};var n=U4(i,t),a,o;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);for(o=0;o<u.length;o++)a=u[o],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(i,a)&&(n[a]=i[a])}return n}function Np(i){return B4(i)||j4(i)||H4(i)||F4()}function B4(i){if(Array.isArray(i))return xp(i)}function j4(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function H4(i,t){if(i){if(typeof i=="string")return xp(i,t);var n=Object.prototype.toString.call(i).slice(8,-1);if(n==="Object"&&i.constructor&&(n=i.constructor.name),n==="Map"||n==="Set")return Array.from(i);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xp(i,t)}}function xp(i,t){(t==null||t>i.length)&&(t=i.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=i[n];return a}function F4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q4(i){var t,n=i.beat,a=i.fade,o=i.beatFade,u=i.bounce,h=i.shake,m=i.flash,p=i.spin,y=i.spinPulse,E=i.spinReverse,A=i.pulse,w=i.fixedWidth,D=i.inverse,V=i.border,K=i.listItem,z=i.flip,q=i.size,Z=i.rotation,W=i.pull,ct=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":o,"fa-bounce":u,"fa-shake":h,"fa-flash":m,"fa-spin":p,"fa-spin-reverse":E,"fa-spin-pulse":y,"fa-pulse":A,"fa-fw":w,"fa-inverse":D,"fa-border":V,"fa-li":K,"fa-flip":z===!0,"fa-flip-horizontal":z==="horizontal"||z==="both","fa-flip-vertical":z==="vertical"||z==="both"},so(t,"fa-".concat(q),typeof q<"u"&&q!==null),so(t,"fa-rotate-".concat(Z),typeof Z<"u"&&Z!==null&&Z!==0),so(t,"fa-pull-".concat(W),typeof W<"u"&&W!==null),so(t,"fa-swap-opacity",i.swapOpacity),t);return Object.keys(ct).map(function(at){return ct[at]?at:null}).filter(function(at){return at})}function G4(i){return i=i-0,i===i}function E1(i){return G4(i)?i:(i=i.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),i.substr(0,1).toLowerCase()+i.substr(1))}var K4=["style"];function Y4(i){return i.charAt(0).toUpperCase()+i.slice(1)}function Q4(i){return i.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),o=E1(n.slice(0,a)),u=n.slice(a+1).trim();return o.startsWith("webkit")?t[Y4(o)]=u:t[o]=u,t},{})}function T1(i,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(p){return T1(i,p)}),o=Object.keys(t.attributes||{}).reduce(function(p,y){var E=t.attributes[y];switch(y){case"class":p.attrs.className=E,delete t.attributes.class;break;case"style":p.attrs.style=Q4(E);break;default:y.indexOf("aria-")===0||y.indexOf("data-")===0?p.attrs[y.toLowerCase()]=E:p.attrs[E1(y)]=E}return p},{attrs:{}}),u=n.style,h=u===void 0?{}:u,m=z4(n,K4);return o.attrs.style=hi(hi({},o.attrs.style),h),i.apply(void 0,[t.tag,hi(hi({},o.attrs),m)].concat(Np(a)))}var b1=!1;try{b1=!0}catch{}function $4(){if(!b1&&console&&typeof console.error=="function"){var i;(i=console).error.apply(i,arguments)}}function eT(i){if(i&&Hf(i)==="object"&&i.prefix&&i.iconName&&i.icon)return i;if(Dp.icon)return Dp.icon(i);if(i===null)return null;if(i&&Hf(i)==="object"&&i.prefix&&i.iconName)return i;if(Array.isArray(i)&&i.length===2)return{prefix:i[0],iconName:i[1]};if(typeof i=="string")return{prefix:"fas",iconName:i}}function jm(i,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?so({},i,t):{}}var nT={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},oo=aT.forwardRef(function(i,t){var n=hi(hi({},nT),i),a=n.icon,o=n.mask,u=n.symbol,h=n.className,m=n.title,p=n.titleId,y=n.maskId,E=eT(a),A=jm("classes",[].concat(Np(q4(n)),Np((h||"").split(" ")))),w=jm("transform",typeof n.transform=="string"?Dp.transform(n.transform):n.transform),D=jm("mask",eT(o)),V=M4(E,hi(hi(hi(hi({},A),w),D),{},{symbol:u,title:m,titleId:p,maskId:y}));if(!V)return $4("Could not find icon",E),null;var K=V.abstract,z={ref:t};return Object.keys(n).forEach(function(q){nT.hasOwnProperty(q)||(z[q]=n[q])}),X4(K[0],z)});oo.displayName="FontAwesomeIcon";oo.propTypes={beat:Mt.bool,border:Mt.bool,beatFade:Mt.bool,bounce:Mt.bool,className:Mt.string,fade:Mt.bool,flash:Mt.bool,mask:Mt.oneOfType([Mt.object,Mt.array,Mt.string]),maskId:Mt.string,fixedWidth:Mt.bool,inverse:Mt.bool,flip:Mt.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Mt.oneOfType([Mt.object,Mt.array,Mt.string]),listItem:Mt.bool,pull:Mt.oneOf(["right","left"]),pulse:Mt.bool,rotation:Mt.oneOf([0,90,180,270]),shake:Mt.bool,size:Mt.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Mt.bool,spinPulse:Mt.bool,spinReverse:Mt.bool,symbol:Mt.oneOfType([Mt.bool,Mt.string]),title:Mt.string,titleId:Mt.string,transform:Mt.oneOfType([Mt.string,Mt.object]),swapOpacity:Mt.bool};var X4=T1.bind(null,aT.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const iT={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},W4={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},Z4={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},J4=({isAuth:i})=>Tt.jsxs("nav",{children:[Tt.jsxs(ro,{to:"/",children:[Tt.jsx(oo,{icon:Z4}),"ホーム"]}),i?Tt.jsxs(Tt.Fragment,{children:[Tt.jsxs(ro,{to:"/createpost",children:[Tt.jsx(oo,{icon:W4}),"記事投稿"]}),Tt.jsxs(ro,{to:"/logout",children:[Tt.jsx(oo,{icon:iT,transform:"rotate-180"}),"ログアウト"]})]}):Tt.jsxs(ro,{to:"/login",children:[Tt.jsx(oo,{icon:iT}),"ログイン"]})]});function tP(){const[i,t]=Q.useState(localStorage.getItem("isAuth"));return Tt.jsxs(gR,{children:[Tt.jsx(J4,{isAuth:i}),Tt.jsxs(Kw,{children:[Tt.jsx(Hl,{path:"/",element:Tt.jsx(Ox,{})}),Tt.jsx(Hl,{path:"/createpost",element:Tt.jsx(Dx,{isAuth:i})}),Tt.jsx(Hl,{path:"/login",element:Tt.jsx(Nx,{setIsAuth:t})}),Tt.jsx(Hl,{path:"/logout",element:Tt.jsx(xx,{setIsAuth:t})})]})]})}nw.createRoot(document.getElementById("root")).render(Tt.jsx(Q.StrictMode,{children:Tt.jsx(tP,{})}));
