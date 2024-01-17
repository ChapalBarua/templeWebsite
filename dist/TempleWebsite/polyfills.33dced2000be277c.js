"use strict";(self.webpackChunkTempleWebsite=self.webpackChunkTempleWebsite||[]).push([[429],{782:()=>{!function(e){const t=e.performance;function n(x){t&&t.mark&&t.mark(x)}function r(x,y){t&&t.measure&&t.measure(x,y)}n("Zone");const s=e.__Zone_symbol_prefix||"__zone_symbol__";function l(x){return s+x}const f=!0===e[l("forceDuplicateZoneCheck")];if(e.Zone){if(f||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let u=(()=>{class x{constructor(o,c){this._parent=o,this._name=c?c.name||"unnamed":"<root>",this._properties=c&&c.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,c)}static assertZonePatched(){if(e.Promise!==de.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let o=x.current;for(;o.parent;)o=o.parent;return o}static get current(){return W.zone}static get currentTask(){return ue}static __load_patch(o,c,b=!1){if(de.hasOwnProperty(o)){if(!b&&f)throw Error("Already loaded patch: "+o)}else if(!e["__Zone_disable_"+o]){const I="Zone:"+o;n(I),de[o]=c(e,x,K),r(I,I)}}get parent(){return this._parent}get name(){return this._name}get(o){const c=this.getZoneWith(o);if(c)return c._properties[o]}getZoneWith(o){let c=this;for(;c;){if(c._properties.hasOwnProperty(o))return c;c=c._parent}return null}fork(o){if(!o)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,o)}wrap(o,c){if("function"!=typeof o)throw new Error("Expecting function got: "+o);const b=this._zoneDelegate.intercept(this,o,c),I=this;return function(){return I.runGuarded(b,this,arguments,c)}}run(o,c,b,I){W={parent:W,zone:this};try{return this._zoneDelegate.invoke(this,o,c,b,I)}finally{W=W.parent}}runGuarded(o,c=null,b,I){W={parent:W,zone:this};try{try{return this._zoneDelegate.invoke(this,o,c,b,I)}catch(J){if(this._zoneDelegate.handleError(this,J))throw J}}finally{W=W.parent}}runTask(o,c,b){if(o.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(o.zone||Q).name+"; Execution: "+this.name+")");if(o.state===B&&(o.type===ne||o.type===R))return;const I=o.state!=k;I&&o._transitionTo(k,$),o.runCount++;const J=ue;ue=o,W={parent:W,zone:this};try{o.type==R&&o.data&&!o.data.isPeriodic&&(o.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,o,c,b)}catch(h){if(this._zoneDelegate.handleError(this,h))throw h}}finally{o.state!==B&&o.state!==T&&(o.type==ne||o.data&&o.data.isPeriodic?I&&o._transitionTo($,k):(o.runCount=0,this._updateTaskCount(o,-1),I&&o._transitionTo(B,k,B))),W=W.parent,ue=J}}scheduleTask(o){if(o.zone&&o.zone!==this){let b=this;for(;b;){if(b===o.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${o.zone.name}`);b=b.parent}}o._transitionTo(Y,B);const c=[];o._zoneDelegates=c,o._zone=this;try{o=this._zoneDelegate.scheduleTask(this,o)}catch(b){throw o._transitionTo(T,Y,B),this._zoneDelegate.handleError(this,b),b}return o._zoneDelegates===c&&this._updateTaskCount(o,1),o.state==Y&&o._transitionTo($,Y),o}scheduleMicroTask(o,c,b,I){return this.scheduleTask(new E(L,o,c,b,I,void 0))}scheduleMacroTask(o,c,b,I,J){return this.scheduleTask(new E(R,o,c,b,I,J))}scheduleEventTask(o,c,b,I,J){return this.scheduleTask(new E(ne,o,c,b,I,J))}cancelTask(o){if(o.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(o.zone||Q).name+"; Execution: "+this.name+")");o._transitionTo(U,$,k);try{this._zoneDelegate.cancelTask(this,o)}catch(c){throw o._transitionTo(T,U),this._zoneDelegate.handleError(this,c),c}return this._updateTaskCount(o,-1),o._transitionTo(B,U),o.runCount=0,o}_updateTaskCount(o,c){const b=o._zoneDelegates;-1==c&&(o._zoneDelegates=null);for(let I=0;I<b.length;I++)b[I]._updateTaskCount(o.type,c)}}return x.__symbol__=l,x})();const g={name:"",onHasTask:(x,y,o,c)=>x.hasTask(o,c),onScheduleTask:(x,y,o,c)=>x.scheduleTask(o,c),onInvokeTask:(x,y,o,c,b,I)=>x.invokeTask(o,c,b,I),onCancelTask:(x,y,o,c)=>x.cancelTask(o,c)};class v{constructor(y,o,c){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=y,this._parentDelegate=o,this._forkZS=c&&(c&&c.onFork?c:o._forkZS),this._forkDlgt=c&&(c.onFork?o:o._forkDlgt),this._forkCurrZone=c&&(c.onFork?this.zone:o._forkCurrZone),this._interceptZS=c&&(c.onIntercept?c:o._interceptZS),this._interceptDlgt=c&&(c.onIntercept?o:o._interceptDlgt),this._interceptCurrZone=c&&(c.onIntercept?this.zone:o._interceptCurrZone),this._invokeZS=c&&(c.onInvoke?c:o._invokeZS),this._invokeDlgt=c&&(c.onInvoke?o:o._invokeDlgt),this._invokeCurrZone=c&&(c.onInvoke?this.zone:o._invokeCurrZone),this._handleErrorZS=c&&(c.onHandleError?c:o._handleErrorZS),this._handleErrorDlgt=c&&(c.onHandleError?o:o._handleErrorDlgt),this._handleErrorCurrZone=c&&(c.onHandleError?this.zone:o._handleErrorCurrZone),this._scheduleTaskZS=c&&(c.onScheduleTask?c:o._scheduleTaskZS),this._scheduleTaskDlgt=c&&(c.onScheduleTask?o:o._scheduleTaskDlgt),this._scheduleTaskCurrZone=c&&(c.onScheduleTask?this.zone:o._scheduleTaskCurrZone),this._invokeTaskZS=c&&(c.onInvokeTask?c:o._invokeTaskZS),this._invokeTaskDlgt=c&&(c.onInvokeTask?o:o._invokeTaskDlgt),this._invokeTaskCurrZone=c&&(c.onInvokeTask?this.zone:o._invokeTaskCurrZone),this._cancelTaskZS=c&&(c.onCancelTask?c:o._cancelTaskZS),this._cancelTaskDlgt=c&&(c.onCancelTask?o:o._cancelTaskDlgt),this._cancelTaskCurrZone=c&&(c.onCancelTask?this.zone:o._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const b=c&&c.onHasTask;(b||o&&o._hasTaskZS)&&(this._hasTaskZS=b?c:g,this._hasTaskDlgt=o,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=y,c.onScheduleTask||(this._scheduleTaskZS=g,this._scheduleTaskDlgt=o,this._scheduleTaskCurrZone=this.zone),c.onInvokeTask||(this._invokeTaskZS=g,this._invokeTaskDlgt=o,this._invokeTaskCurrZone=this.zone),c.onCancelTask||(this._cancelTaskZS=g,this._cancelTaskDlgt=o,this._cancelTaskCurrZone=this.zone))}fork(y,o){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,y,o):new u(y,o)}intercept(y,o,c){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,y,o,c):o}invoke(y,o,c,b,I){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,y,o,c,b,I):o.apply(c,b)}handleError(y,o){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,y,o)}scheduleTask(y,o){let c=o;if(this._scheduleTaskZS)this._hasTaskZS&&c._zoneDelegates.push(this._hasTaskDlgtOwner),c=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,y,o),c||(c=o);else if(o.scheduleFn)o.scheduleFn(o);else{if(o.type!=L)throw new Error("Task is missing scheduleFn.");C(o)}return c}invokeTask(y,o,c,b){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,y,o,c,b):o.callback.apply(c,b)}cancelTask(y,o){let c;if(this._cancelTaskZS)c=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,y,o);else{if(!o.cancelFn)throw Error("Task is not cancelable");c=o.cancelFn(o)}return c}hasTask(y,o){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,y,o)}catch(c){this.handleError(y,c)}}_updateTaskCount(y,o){const c=this._taskCounts,b=c[y],I=c[y]=b+o;if(I<0)throw new Error("More tasks executed then were scheduled.");0!=b&&0!=I||this.hasTask(this.zone,{microTask:c.microTask>0,macroTask:c.macroTask>0,eventTask:c.eventTask>0,change:y})}}class E{constructor(y,o,c,b,I,J){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=y,this.source=o,this.data=b,this.scheduleFn=I,this.cancelFn=J,!c)throw new Error("callback is not defined");this.callback=c;const h=this;this.invoke=y===ne&&b&&b.useG?E.invokeTask:function(){return E.invokeTask.call(e,h,this,arguments)}}static invokeTask(y,o,c){y||(y=this),re++;try{return y.runCount++,y.zone.runTask(y,o,c)}finally{1==re&&p(),re--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(B,Y)}_transitionTo(y,o,c){if(this._state!==o&&this._state!==c)throw new Error(`${this.type} '${this.source}': can not transition to '${y}', expecting state '${o}'${c?" or '"+c+"'":""}, was '${this._state}'.`);this._state=y,y==B&&(this._zoneDelegates=null)}toString(){return this.data&&void 0!==this.data.handleId?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const A=l("setTimeout"),N=l("Promise"),P=l("then");let F,H=[],S=!1;function z(x){if(F||e[N]&&(F=e[N].resolve(0)),F){let y=F[P];y||(y=F.then),y.call(F,x)}else e[A](x,0)}function C(x){0===re&&0===H.length&&z(p),x&&H.push(x)}function p(){if(!S){for(S=!0;H.length;){const x=H;H=[];for(let y=0;y<x.length;y++){const o=x[y];try{o.zone.runTask(o,null,null)}catch(c){K.onUnhandledError(c)}}}K.microtaskDrainDone(),S=!1}}const Q={name:"NO ZONE"},B="notScheduled",Y="scheduling",$="scheduled",k="running",U="canceling",T="unknown",L="microTask",R="macroTask",ne="eventTask",de={},K={symbol:l,currentZoneFrame:()=>W,onUnhandledError:q,microtaskDrainDone:q,scheduleMicroTask:C,showUncaughtError:()=>!u[l("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:q,patchMethod:()=>q,bindArguments:()=>[],patchThen:()=>q,patchMacroTask:()=>q,patchEventPrototype:()=>q,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>q,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>q,wrapWithCurrentZone:()=>q,filterProperties:()=>[],attachOriginToPatched:()=>q,_redefineProperty:()=>q,patchCallbacks:()=>q,nativeScheduleMicroTask:z};let W={parent:null,zone:new u(null,null)},ue=null,re=0;function q(){}r("Zone","Zone"),e.Zone=u}("undefined"!=typeof window&&window||"undefined"!=typeof self&&self||global);const Te=Object.getOwnPropertyDescriptor,Pe=Object.defineProperty,Se=Object.getPrototypeOf,Ge=Object.create,Ze=Array.prototype.slice,Me="addEventListener",Oe="removeEventListener",Ae=Zone.__symbol__(Me),fe=Zone.__symbol__(Oe),se="true",ce="false",ee=Zone.__symbol__("");function ze(e,t){return Zone.current.wrap(e,t)}function Le(e,t,n,r,s){return Zone.current.scheduleMacroTask(e,t,n,r,s)}const j=Zone.__symbol__,Re="undefined"!=typeof window,Ee=Re?window:void 0,X=Re&&Ee||"object"==typeof self&&self||global;function xe(e,t){for(let n=e.length-1;n>=0;n--)"function"==typeof e[n]&&(e[n]=ze(e[n],t+"_"+n));return e}function pe(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&void 0===e.set)}const Fe="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,ve=!("nw"in X)&&void 0!==X.process&&"[object process]"==={}.toString.call(X.process),Ce=!ve&&!Fe&&!(!Re||!Ee.HTMLElement),je=void 0!==X.process&&"[object process]"==={}.toString.call(X.process)&&!Fe&&!(!Re||!Ee.HTMLElement),we={},$e=function(e){if(!(e=e||X.event))return;let t=we[e.type];t||(t=we[e.type]=j("ON_PROPERTY"+e.type));const n=this||e.target||X,r=n[t];let s;if(Ce&&n===Ee&&"error"===e.type){const l=e;s=r&&r.call(this,l.message,l.filename,l.lineno,l.colno,l.error),!0===s&&e.preventDefault()}else s=r&&r.apply(this,arguments),null!=s&&!s&&e.preventDefault();return s};function ae(e,t,n){let r=Te(e,t);if(!r&&n&&Te(n,t)&&(r={enumerable:!0,configurable:!0}),!r||!r.configurable)return;const s=j("on"+t+"patched");if(e.hasOwnProperty(s)&&e[s])return;delete r.writable,delete r.value;const l=r.get,f=r.set,u=t.slice(2);let g=we[u];g||(g=we[u]=j("ON_PROPERTY"+u)),r.set=function(v){let E=this;!E&&e===X&&(E=X),E&&("function"==typeof E[g]&&E.removeEventListener(u,$e),f&&f.call(E,null),E[g]=v,"function"==typeof v&&E.addEventListener(u,$e,!1))},r.get=function(){let v=this;if(!v&&e===X&&(v=X),!v)return null;const E=v[g];if(E)return E;if(l){let A=l.call(this);if(A)return r.set.call(this,A),"function"==typeof v.removeAttribute&&v.removeAttribute(t),A}return null},Pe(e,t,r),e[s]=!0}function He(e,t,n){if(t)for(let r=0;r<t.length;r++)ae(e,"on"+t[r],n);else{const r=[];for(const s in e)"on"==s.slice(0,2)&&r.push(s);for(let s=0;s<r.length;s++)ae(e,r[s],n)}}const oe=j("originalInstance");function ge(e){const t=X[e];if(!t)return;X[j(e)]=t,X[e]=function(){const s=xe(arguments,e);switch(s.length){case 0:this[oe]=new t;break;case 1:this[oe]=new t(s[0]);break;case 2:this[oe]=new t(s[0],s[1]);break;case 3:this[oe]=new t(s[0],s[1],s[2]);break;case 4:this[oe]=new t(s[0],s[1],s[2],s[3]);break;default:throw new Error("Arg list too long.")}},ie(X[e],t);const n=new t(function(){});let r;for(r in n)"XMLHttpRequest"===e&&"responseBlob"===r||function(s){"function"==typeof n[s]?X[e].prototype[s]=function(){return this[oe][s].apply(this[oe],arguments)}:Pe(X[e].prototype,s,{set:function(l){"function"==typeof l?(this[oe][s]=ze(l,e+"."+s),ie(this[oe][s],l)):this[oe][s]=l},get:function(){return this[oe][s]}})}(r);for(r in t)"prototype"!==r&&t.hasOwnProperty(r)&&(X[e][r]=t[r])}function le(e,t,n){let r=e;for(;r&&!r.hasOwnProperty(t);)r=Se(r);!r&&e[t]&&(r=e);const s=j(t);let l=null;if(r&&(!(l=r[s])||!r.hasOwnProperty(s))&&(l=r[s]=r[t],pe(r&&Te(r,t)))){const u=n(l,s,t);r[t]=function(){return u(this,arguments)},ie(r[t],l)}return l}function rt(e,t,n){let r=null;function s(l){const f=l.data;return f.args[f.cbIdx]=function(){l.invoke.apply(this,arguments)},r.apply(f.target,f.args),l}r=le(e,t,l=>function(f,u){const g=n(f,u);return g.cbIdx>=0&&"function"==typeof u[g.cbIdx]?Le(g.name,u[g.cbIdx],g,s):l.apply(f,u)})}function ie(e,t){e[j("OriginalDelegate")]=t}let We=!1,Ne=!1;function st(){if(We)return Ne;We=!0;try{const e=Ee.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(Ne=!0)}catch(e){}return Ne}Zone.__load_patch("ZoneAwarePromise",(e,t,n)=>{const r=Object.getOwnPropertyDescriptor,s=Object.defineProperty,f=n.symbol,u=[],g=!0===e[f("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],v=f("Promise"),E=f("then");n.onUnhandledError=h=>{if(n.showUncaughtError()){const d=h&&h.rejection;d?console.error("Unhandled Promise rejection:",d instanceof Error?d.message:d,"; Zone:",h.zone.name,"; Task:",h.task&&h.task.source,"; Value:",d,d instanceof Error?d.stack:void 0):console.error(h)}},n.microtaskDrainDone=()=>{for(;u.length;){const h=u.shift();try{h.zone.runGuarded(()=>{throw h.throwOriginal?h.rejection:h})}catch(d){P(d)}}};const N=f("unhandledPromiseRejectionHandler");function P(h){n.onUnhandledError(h);try{const d=t[N];"function"==typeof d&&d.call(this,h)}catch(d){}}function H(h){return h&&h.then}function S(h){return h}function F(h){return o.reject(h)}const z=f("state"),C=f("value"),p=f("finally"),Q=f("parentPromiseValue"),B=f("parentPromiseState"),$=null,k=!0,U=!1;function L(h,d){return a=>{try{K(h,d,a)}catch(_){K(h,!1,_)}}}const R=function(){let h=!1;return function(a){return function(){h||(h=!0,a.apply(null,arguments))}}},de=f("currentTaskTrace");function K(h,d,a){const _=R();if(h===a)throw new TypeError("Promise resolved with itself");if(h[z]===$){let w=null;try{("object"==typeof a||"function"==typeof a)&&(w=a&&a.then)}catch(O){return _(()=>{K(h,!1,O)})(),h}if(d!==U&&a instanceof o&&a.hasOwnProperty(z)&&a.hasOwnProperty(C)&&a[z]!==$)ue(a),K(h,a[z],a[C]);else if(d!==U&&"function"==typeof w)try{w.call(a,_(L(h,d)),_(L(h,!1)))}catch(O){_(()=>{K(h,!1,O)})()}else{h[z]=d;const O=h[C];if(h[C]=a,h[p]===p&&d===k&&(h[z]=h[B],h[C]=h[Q]),d===U&&a instanceof Error){const m=t.currentTask&&t.currentTask.data&&t.currentTask.data.__creationTrace__;m&&s(a,de,{configurable:!0,enumerable:!1,writable:!0,value:m})}for(let m=0;m<O.length;)re(h,O[m++],O[m++],O[m++],O[m++]);if(0==O.length&&d==U){h[z]=0;let m=a;try{throw new Error("Uncaught (in promise): "+function(h){return h&&h.toString===Object.prototype.toString?(h.constructor&&h.constructor.name||"")+": "+JSON.stringify(h):h?h.toString():Object.prototype.toString.call(h)}(a)+(a&&a.stack?"\n"+a.stack:""))}catch(D){m=D}g&&(m.throwOriginal=!0),m.rejection=a,m.promise=h,m.zone=t.current,m.task=t.currentTask,u.push(m),n.scheduleMicroTask()}}}return h}const W=f("rejectionHandledHandler");function ue(h){if(0===h[z]){try{const d=t[W];d&&"function"==typeof d&&d.call(this,{rejection:h[C],promise:h})}catch(d){}h[z]=U;for(let d=0;d<u.length;d++)h===u[d].promise&&u.splice(d,1)}}function re(h,d,a,_,w){ue(h);const O=h[z],m=O?"function"==typeof _?_:S:"function"==typeof w?w:F;d.scheduleMicroTask("Promise.then",()=>{try{const D=h[C],Z=!!a&&p===a[p];Z&&(a[Q]=D,a[B]=O);const M=d.run(m,void 0,Z&&m!==F&&m!==S?[]:[D]);K(a,!0,M)}catch(D){K(a,!1,D)}},a)}const x=function(){},y=e.AggregateError;class o{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(d){return K(new this(null),k,d)}static reject(d){return K(new this(null),U,d)}static any(d){if(!d||"function"!=typeof d[Symbol.iterator])return Promise.reject(new y([],"All promises were rejected"));const a=[];let _=0;try{for(let m of d)_++,a.push(o.resolve(m))}catch(m){return Promise.reject(new y([],"All promises were rejected"))}if(0===_)return Promise.reject(new y([],"All promises were rejected"));let w=!1;const O=[];return new o((m,D)=>{for(let Z=0;Z<a.length;Z++)a[Z].then(M=>{w||(w=!0,m(M))},M=>{O.push(M),_--,0===_&&(w=!0,D(new y(O,"All promises were rejected")))})})}static race(d){let a,_,w=new this((D,Z)=>{a=D,_=Z});function O(D){a(D)}function m(D){_(D)}for(let D of d)H(D)||(D=this.resolve(D)),D.then(O,m);return w}static all(d){return o.allWithCallback(d)}static allSettled(d){return(this&&this.prototype instanceof o?this:o).allWithCallback(d,{thenCallback:_=>({status:"fulfilled",value:_}),errorCallback:_=>({status:"rejected",reason:_})})}static allWithCallback(d,a){let _,w,O=new this((M,V)=>{_=M,w=V}),m=2,D=0;const Z=[];for(let M of d){H(M)||(M=this.resolve(M));const V=D;try{M.then(G=>{Z[V]=a?a.thenCallback(G):G,m--,0===m&&_(Z)},G=>{a?(Z[V]=a.errorCallback(G),m--,0===m&&_(Z)):w(G)})}catch(G){w(G)}m++,D++}return m-=2,0===m&&_(Z),O}constructor(d){const a=this;if(!(a instanceof o))throw new Error("Must be an instanceof Promise.");a[z]=$,a[C]=[];try{const _=R();d&&d(_(L(a,k)),_(L(a,U)))}catch(_){K(a,!1,_)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return o}then(d,a){var _;let w=null===(_=this.constructor)||void 0===_?void 0:_[Symbol.species];(!w||"function"!=typeof w)&&(w=this.constructor||o);const O=new w(x),m=t.current;return this[z]==$?this[C].push(m,O,d,a):re(this,m,O,d,a),O}catch(d){return this.then(null,d)}finally(d){var a;let _=null===(a=this.constructor)||void 0===a?void 0:a[Symbol.species];(!_||"function"!=typeof _)&&(_=o);const w=new _(x);w[p]=p;const O=t.current;return this[z]==$?this[C].push(O,w,d,d):re(this,O,w,d,d),w}}o.resolve=o.resolve,o.reject=o.reject,o.race=o.race,o.all=o.all;const c=e[v]=e.Promise;e.Promise=o;const b=f("thenPatched");function I(h){const d=h.prototype,a=r(d,"then");if(a&&(!1===a.writable||!a.configurable))return;const _=d.then;d[E]=_,h.prototype.then=function(w,O){return new o((D,Z)=>{_.call(this,D,Z)}).then(w,O)},h[b]=!0}return n.patchThen=I,c&&(I(c),le(e,"fetch",h=>function(h){return function(d,a){let _=h.apply(d,a);if(_ instanceof o)return _;let w=_.constructor;return w[b]||I(w),_}}(h))),Promise[t.__symbol__("uncaughtPromiseErrors")]=u,o}),Zone.__load_patch("toString",e=>{const t=Function.prototype.toString,n=j("OriginalDelegate"),r=j("Promise"),s=j("Error"),l=function(){if("function"==typeof this){const v=this[n];if(v)return"function"==typeof v?t.call(v):Object.prototype.toString.call(v);if(this===Promise){const E=e[r];if(E)return t.call(E)}if(this===Error){const E=e[s];if(E)return t.call(E)}}return t.call(this)};l[n]=t,Function.prototype.toString=l;const f=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":f.call(this)}});let ye=!1;if("undefined"!=typeof window)try{const e=Object.defineProperty({},"passive",{get:function(){ye=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){ye=!1}const it={useG:!0},te={},qe={},Be=new RegExp("^"+ee+"(\\w+)(true|false)$"),Xe=j("propagationStopped");function ct(e,t){const n=(t?t(e):e)+ce,r=(t?t(e):e)+se,s=ee+n,l=ee+r;te[e]={},te[e][ce]=s,te[e][se]=l}function at(e,t,n,r){const s=r&&r.add||Me,l=r&&r.rm||Oe,f=r&&r.listeners||"eventListeners",u=r&&r.rmAll||"removeAllListeners",g=j(s),v="."+s+":",N=function(C,p,Q){if(C.isRemoved)return;const B=C.callback;let Y;"object"==typeof B&&B.handleEvent&&(C.callback=k=>B.handleEvent(k),C.originalDelegate=B);try{C.invoke(C,p,[Q])}catch(k){Y=k}const $=C.options;return $&&"object"==typeof $&&$.once&&p[l].call(p,Q.type,C.originalDelegate?C.originalDelegate:C.callback,$),Y};function P(C,p,Q){if(!(p=p||e.event))return;const B=C||p.target||e,Y=B[te[p.type][Q?se:ce]];if(Y){const $=[];if(1===Y.length){const k=N(Y[0],B,p);k&&$.push(k)}else{const k=Y.slice();for(let U=0;U<k.length&&(!p||!0!==p[Xe]);U++){const T=N(k[U],B,p);T&&$.push(T)}}if(1===$.length)throw $[0];for(let k=0;k<$.length;k++){const U=$[k];t.nativeScheduleMicroTask(()=>{throw U})}}}const H=function(C){return P(this,C,!1)},S=function(C){return P(this,C,!0)};function F(C,p){if(!C)return!1;let Q=!0;p&&void 0!==p.useG&&(Q=p.useG);const B=p&&p.vh;let Y=!0;p&&void 0!==p.chkDup&&(Y=p.chkDup);let $=!1;p&&void 0!==p.rt&&($=p.rt);let k=C;for(;k&&!k.hasOwnProperty(s);)k=Se(k);if(!k&&C[s]&&(k=C),!k||k[g])return!1;const U=p&&p.eventNameToString,T={},L=k[g]=k[s],R=k[j(l)]=k[l],ne=k[j(f)]=k[f],de=k[j(u)]=k[u];let K;function W(a,_){return!ye&&"object"==typeof a&&a?!!a.capture:ye&&_?"boolean"==typeof a?{capture:a,passive:!0}:a?"object"==typeof a&&!1!==a.passive?Object.assign(Object.assign({},a),{passive:!0}):a:{passive:!0}:a}p&&p.prepend&&(K=k[j(p.prepend)]=k[p.prepend]);const o=Q?function(a){if(!T.isExisting)return L.call(T.target,T.eventName,T.capture?S:H,T.options)}:function(a){return L.call(T.target,T.eventName,a.invoke,T.options)},c=Q?function(a){if(!a.isRemoved){const _=te[a.eventName];let w;_&&(w=_[a.capture?se:ce]);const O=w&&a.target[w];if(O)for(let m=0;m<O.length;m++)if(O[m]===a){O.splice(m,1),a.isRemoved=!0,0===O.length&&(a.allRemoved=!0,a.target[w]=null);break}}if(a.allRemoved)return R.call(a.target,a.eventName,a.capture?S:H,a.options)}:function(a){return R.call(a.target,a.eventName,a.invoke,a.options)},I=p&&p.diff?p.diff:function(a,_){const w=typeof _;return"function"===w&&a.callback===_||"object"===w&&a.originalDelegate===_},J=Zone[j("UNPATCHED_EVENTS")],h=e[j("PASSIVE_EVENTS")],d=function(a,_,w,O,m=!1,D=!1){return function(){const Z=this||e;let M=arguments[0];p&&p.transferEventName&&(M=p.transferEventName(M));let V=arguments[1];if(!V)return a.apply(this,arguments);if(ve&&"uncaughtException"===M)return a.apply(this,arguments);let G=!1;if("function"!=typeof V){if(!V.handleEvent)return a.apply(this,arguments);G=!0}if(B&&!B(a,V,Z,arguments))return;const me=ye&&!!h&&-1!==h.indexOf(M),_e=W(arguments[2],me);if(J)for(let be=0;be<J.length;be++)if(M===J[be])return me?a.call(Z,M,V,_e):a.apply(this,arguments);const ht=!!_e&&("boolean"==typeof _e||_e.capture),Tt=!(!_e||"object"!=typeof _e)&&_e.once,mt=Zone.current;let dt=te[M];dt||(ct(M,U),dt=te[M]);const gt=dt[ht?se:ce];let et,De=Z[gt],Et=!1;if(De){if(Et=!0,Y)for(let be=0;be<De.length;be++)if(I(De[be],V))return}else De=Z[gt]=[];const pt=Z.constructor.name,yt=qe[pt];yt&&(et=yt[M]),et||(et=pt+_+(U?U(M):M)),T.options=_e,Tt&&(T.options.once=!1),T.target=Z,T.capture=ht,T.eventName=M,T.isExisting=Et;const Ve=Q?it:void 0;Ve&&(Ve.taskData=T);const ke=mt.scheduleEventTask(et,V,Ve,w,O);return T.target=null,Ve&&(Ve.taskData=null),Tt&&(_e.once=!0),!ye&&"boolean"==typeof ke.options||(ke.options=_e),ke.target=Z,ke.capture=ht,ke.eventName=M,G&&(ke.originalDelegate=V),D?De.unshift(ke):De.push(ke),m?Z:void 0}};return k[s]=d(L,v,o,c,$),K&&(k.prependListener=d(K,".prependListener:",function(a){return K.call(T.target,T.eventName,a.invoke,T.options)},c,$,!0)),k[l]=function(){const a=this||e;let _=arguments[0];p&&p.transferEventName&&(_=p.transferEventName(_));const w=arguments[2],O=!!w&&("boolean"==typeof w||w.capture),m=arguments[1];if(!m)return R.apply(this,arguments);if(B&&!B(R,m,a,arguments))return;const D=te[_];let Z;D&&(Z=D[O?se:ce]);const M=Z&&a[Z];if(M)for(let V=0;V<M.length;V++){const G=M[V];if(I(G,m))return M.splice(V,1),G.isRemoved=!0,0===M.length&&(G.allRemoved=!0,a[Z]=null,"string"==typeof _)&&(a[ee+"ON_PROPERTY"+_]=null),G.zone.cancelTask(G),$?a:void 0}return R.apply(this,arguments)},k[f]=function(){const a=this||e;let _=arguments[0];p&&p.transferEventName&&(_=p.transferEventName(_));const w=[],O=Ye(a,U?U(_):_);for(let m=0;m<O.length;m++){const D=O[m];w.push(D.originalDelegate?D.originalDelegate:D.callback)}return w},k[u]=function(){const a=this||e;let _=arguments[0];if(_){p&&p.transferEventName&&(_=p.transferEventName(_));const w=te[_];if(w){const D=a[w[ce]],Z=a[w[se]];if(D){const M=D.slice();for(let V=0;V<M.length;V++){const G=M[V];this[l].call(this,_,G.originalDelegate?G.originalDelegate:G.callback,G.options)}}if(Z){const M=Z.slice();for(let V=0;V<M.length;V++){const G=M[V];this[l].call(this,_,G.originalDelegate?G.originalDelegate:G.callback,G.options)}}}}else{const w=Object.keys(a);for(let O=0;O<w.length;O++){const D=Be.exec(w[O]);let Z=D&&D[1];Z&&"removeListener"!==Z&&this[u].call(this,Z)}this[u].call(this,"removeListener")}if($)return this},ie(k[s],L),ie(k[l],R),de&&ie(k[u],de),ne&&ie(k[f],ne),!0}let z=[];for(let C=0;C<n.length;C++)z[C]=F(n[C],r);return z}function Ye(e,t){if(!t){const l=[];for(let f in e){const u=Be.exec(f);let g=u&&u[1];if(g&&(!t||g===t)){const v=e[f];if(v)for(let E=0;E<v.length;E++)l.push(v[E])}}return l}let n=te[t];n||(ct(t),n=te[t]);const r=e[n[ce]],s=e[n[se]];return r?s?r.concat(s):r.slice():s?s.slice():[]}function _t(e,t){const n=e.Event;n&&n.prototype&&t.patchMethod(n.prototype,"stopImmediatePropagation",r=>function(s,l){s[Xe]=!0,r&&r.apply(s,l)})}function Ke(e,t,n,r,s){const l=Zone.__symbol__(r);if(t[l])return;const f=t[l]=t[r];t[r]=function(u,g,v){return g&&g.prototype&&s.forEach(function(E){const A=`${n}.${r}::`+E,N=g.prototype;try{if(N.hasOwnProperty(E)){const P=e.ObjectGetOwnPropertyDescriptor(N,E);P&&P.value?(P.value=e.wrapWithCurrentZone(P.value,A),e._redefineProperty(g.prototype,E,P)):N[E]&&(N[E]=e.wrapWithCurrentZone(N[E],A))}else N[E]&&(N[E]=e.wrapWithCurrentZone(N[E],A))}catch(P){}}),f.call(t,u,g,v)},e.attachOriginToPatched(t[r],f)}function Ue(e,t,n){if(!n||0===n.length)return t;const r=n.filter(l=>l.target===e);if(!r||0===r.length)return t;const s=r[0].ignoreProperties;return t.filter(l=>-1===s.indexOf(l))}function lt(e,t,n,r){e&&He(e,Ue(e,t,n),r)}function Je(e){return Object.getOwnPropertyNames(e).filter(t=>t.startsWith("on")&&t.length>2).map(t=>t.substring(2))}Zone.__load_patch("util",(e,t,n)=>{const r=Je(e);n.patchOnProperties=He,n.patchMethod=le,n.bindArguments=xe,n.patchMacroTask=rt;const s=t.__symbol__("BLACK_LISTED_EVENTS"),l=t.__symbol__("UNPATCHED_EVENTS");e[l]&&(e[s]=e[l]),e[s]&&(t[s]=t[l]=e[s]),n.patchEventPrototype=_t,n.patchEventTarget=at,n.isIEOrEdge=st,n.ObjectDefineProperty=Pe,n.ObjectGetOwnPropertyDescriptor=Te,n.ObjectCreate=Ge,n.ArraySlice=Ze,n.patchClass=ge,n.wrapWithCurrentZone=ze,n.filterProperties=Ue,n.attachOriginToPatched=ie,n._redefineProperty=Object.defineProperty,n.patchCallbacks=Ke,n.getGlobalObjects=()=>({globalSources:qe,zoneSymbolEventNames:te,eventNames:r,isBrowser:Ce,isMix:je,isNode:ve,TRUE_STR:se,FALSE_STR:ce,ZONE_SYMBOL_PREFIX:ee,ADD_EVENT_LISTENER_STR:Me,REMOVE_EVENT_LISTENER_STR:Oe})});const Ie=j("zoneTask");function he(e,t,n,r){let s=null,l=null;n+=r;const f={};function u(v){const E=v.data;return E.args[0]=function(){return v.invoke.apply(this,arguments)},E.handleId=s.apply(e,E.args),v}function g(v){return l.call(e,v.data.handleId)}s=le(e,t+=r,v=>function(E,A){if("function"==typeof A[0]){const N={isPeriodic:"Interval"===r,delay:"Timeout"===r||"Interval"===r?A[1]||0:void 0,args:A},P=A[0];A[0]=function(){try{return P.apply(this,arguments)}finally{N.isPeriodic||("number"==typeof N.handleId?delete f[N.handleId]:N.handleId&&(N.handleId[Ie]=null))}};const H=Le(t,A[0],N,u,g);if(!H)return H;const S=H.data.handleId;return"number"==typeof S?f[S]=H:S&&(S[Ie]=H),S&&S.ref&&S.unref&&"function"==typeof S.ref&&"function"==typeof S.unref&&(H.ref=S.ref.bind(S),H.unref=S.unref.bind(S)),"number"==typeof S||S?S:H}return v.apply(e,A)}),l=le(e,n,v=>function(E,A){const N=A[0];let P;"number"==typeof N?P=f[N]:(P=N&&N[Ie],P||(P=N)),P&&"string"==typeof P.type?"notScheduled"!==P.state&&(P.cancelFn&&P.data.isPeriodic||0===P.runCount)&&("number"==typeof N?delete f[N]:N&&(N[Ie]=null),P.zone.cancelTask(P)):v.apply(e,A)})}Zone.__load_patch("legacy",e=>{const t=e[Zone.__symbol__("legacyPatch")];t&&t()}),Zone.__load_patch("queueMicrotask",(e,t,n)=>{n.patchMethod(e,"queueMicrotask",r=>function(s,l){t.current.scheduleMicroTask("queueMicrotask",l[0])})}),Zone.__load_patch("timers",e=>{const t="set",n="clear";he(e,t,n,"Timeout"),he(e,t,n,"Interval"),he(e,t,n,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{he(e,"request","cancel","AnimationFrame"),he(e,"mozRequest","mozCancel","AnimationFrame"),he(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,t)=>{const n=["alert","prompt","confirm"];for(let r=0;r<n.length;r++)le(e,n[r],(l,f,u)=>function(g,v){return t.current.run(l,e,v,u)})}),Zone.__load_patch("EventTarget",(e,t,n)=>{(function(e,t){t.patchEventPrototype(e,t)})(e,n),function(e,t){if(Zone[t.symbol("patchEventTarget")])return;const{eventNames:n,zoneSymbolEventNames:r,TRUE_STR:s,FALSE_STR:l,ZONE_SYMBOL_PREFIX:f}=t.getGlobalObjects();for(let g=0;g<n.length;g++){const v=n[g],N=f+(v+l),P=f+(v+s);r[v]={},r[v][l]=N,r[v][s]=P}const u=e.EventTarget;u&&u.prototype&&t.patchEventTarget(e,t,[u&&u.prototype])}(e,n);const r=e.XMLHttpRequestEventTarget;r&&r.prototype&&n.patchEventTarget(e,n,[r.prototype])}),Zone.__load_patch("MutationObserver",(e,t,n)=>{ge("MutationObserver"),ge("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,t,n)=>{ge("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,t,n)=>{ge("FileReader")}),Zone.__load_patch("on_property",(e,t,n)=>{!function(e,t){if(ve&&!je||Zone[e.symbol("patchEvents")])return;const n=t.__Zone_ignore_on_properties;let r=[];if(Ce){const s=window;r=r.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const l=function(){try{const e=Ee.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch(e){}return!1}()?[{target:s,ignoreProperties:["error"]}]:[];lt(s,Je(s),n&&n.concat(l),Se(s))}r=r.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let s=0;s<r.length;s++){const l=t[r[s]];l&&l.prototype&&lt(l.prototype,Je(l.prototype),n)}}(n,e)}),Zone.__load_patch("customElements",(e,t,n)=>{!function(e,t){const{isBrowser:n,isMix:r}=t.getGlobalObjects();(n||r)&&e.customElements&&"customElements"in e&&t.patchCallbacks(t,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,n)}),Zone.__load_patch("XHR",(e,t)=>{!function(v){const E=v.XMLHttpRequest;if(!E)return;const A=E.prototype;let P=A[Ae],H=A[fe];if(!P){const T=v.XMLHttpRequestEventTarget;if(T){const L=T.prototype;P=L[Ae],H=L[fe]}}const S="readystatechange",F="scheduled";function z(T){const L=T.data,R=L.target;R[l]=!1,R[u]=!1;const ne=R[s];P||(P=R[Ae],H=R[fe]),ne&&H.call(R,S,ne);const de=R[s]=()=>{if(R.readyState===R.DONE)if(!L.aborted&&R[l]&&T.state===F){const W=R[t.__symbol__("loadfalse")];if(0!==R.status&&W&&W.length>0){const ue=T.invoke;T.invoke=function(){const re=R[t.__symbol__("loadfalse")];for(let q=0;q<re.length;q++)re[q]===T&&re.splice(q,1);!L.aborted&&T.state===F&&ue.call(T)},W.push(T)}else T.invoke()}else!L.aborted&&!1===R[l]&&(R[u]=!0)};return P.call(R,S,de),R[n]||(R[n]=T),k.apply(R,L.args),R[l]=!0,T}function C(){}function p(T){const L=T.data;return L.aborted=!0,U.apply(L.target,L.args)}const Q=le(A,"open",()=>function(T,L){return T[r]=0==L[2],T[f]=L[1],Q.apply(T,L)}),Y=j("fetchTaskAborting"),$=j("fetchTaskScheduling"),k=le(A,"send",()=>function(T,L){if(!0===t.current[$]||T[r])return k.apply(T,L);{const R={target:T,url:T[f],isPeriodic:!1,args:L,aborted:!1},ne=Le("XMLHttpRequest.send",C,R,z,p);T&&!0===T[u]&&!R.aborted&&ne.state===F&&ne.invoke()}}),U=le(A,"abort",()=>function(T,L){const R=function(T){return T[n]}(T);if(R&&"string"==typeof R.type){if(null==R.cancelFn||R.data&&R.data.aborted)return;R.zone.cancelTask(R)}else if(!0===t.current[Y])return U.apply(T,L)})}(e);const n=j("xhrTask"),r=j("xhrSync"),s=j("xhrListener"),l=j("xhrScheduled"),f=j("xhrURL"),u=j("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function(e,t){const n=e.constructor.name;for(let r=0;r<t.length;r++){const s=t[r],l=e[s];if(l){if(!pe(Te(e,s)))continue;e[s]=(u=>{const g=function(){return u.apply(this,xe(arguments,n+"."+s))};return ie(g,u),g})(l)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,t)=>{function n(r){return function(s){Ye(e,r).forEach(f=>{const u=e.PromiseRejectionEvent;if(u){const g=new u(r,{promise:s.promise,reason:s.rejection});f.invoke(g)}})}}e.PromiseRejectionEvent&&(t[j("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),t[j("rejectionHandledHandler")]=n("rejectionhandled"))})},973:(Te,Pe,Se)=>{Se(782),Error;const he=function(i,...e){if(he.translate){const n=he.translate(i,e);i=n[0],e=n[1]}let t=Qe(i[0],i.raw[0]);for(let n=1;n<i.length;n++)t+=e[n-1]+Qe(i[n],i.raw[n]);return t};function Qe(i,e){return":"===e.charAt(0)?i.substring(function(i,e){for(let t=1,n=1;t<i.length;t++,n++)if("\\"===e[n])n++;else if(":"===i[t])return t;throw new Error(`Unterminated $localize metadata block in "${e}".`)}(i,e)+1):i}(()=>"undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof global&&global||"undefined"!=typeof window&&window||"undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self)().$localize=he}},Te=>{Te(Te.s=973)}]);