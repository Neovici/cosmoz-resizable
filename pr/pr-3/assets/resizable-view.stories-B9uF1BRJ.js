var He=Object.defineProperty;var Ie=(t,e,s)=>e in t?He(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var c=(t,e,s)=>Ie(t,typeof e!="symbol"?e+"":e,s);import{f as Fe,B as Ge,E as J,x as V}from"./iframe-DwqPcvp8.js";import"./preload-helper-C1FmrZbK.js";let H,Ae=0;function oe(t){H=t}function ae(){H=null,Ae=0}function Ve(){return Ae++}const U=Symbol("haunted.phase"),D=Symbol("haunted.hook"),ce=Symbol("haunted.update"),le=Symbol("haunted.commit"),z=Symbol("haunted.effects"),C=Symbol("haunted.layoutEffects"),ee="haunted.context";var pe,me,ve;ve=D,me=z,pe=C;class Ue{constructor(e,s){c(this,"update");c(this,"host");c(this,"virtual");c(this,ve);c(this,me);c(this,pe);this.update=e,this.host=s,this[D]=new Map,this[z]=[],this[C]=[]}run(e){oe(this);let s=e();return ae(),s}_runEffects(e){let s=this[e];oe(this);for(let n of s)n.call(this);ae()}runEffects(){this._runEffects(z)}runLayoutEffects(){this._runEffects(C)}teardown(){this[D].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class Qe extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const We=100,Xe=Promise.resolve().then.bind(Promise.resolve());function $e(){let t=[],e;function s(){e=null;let n=t;t=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(n){t.push(n),e==null&&(e=Xe(s))}}const Ye=$e(),ue=$e();var be;be=U;const G=class G{constructor(e,s){c(this,"renderer");c(this,"host");c(this,"state");c(this,be);c(this,"_updateQueued");c(this,"_active");c(this,"_updateCount");c(this,"_processing");this.renderer=e,this.host=s,this.state=new Ue(this.update.bind(this),s),this[U]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>G.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new Qe(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,Ye(()=>{let e=this.handlePhase(ce);ue(()=>{this.handlePhase(le,e),ue(()=>{this.handlePhase(z),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[U]=e,e){case le:this.commit(s),this.runEffects(C);return;case ce:return this.render();case z:return this.runEffects(z)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};c(G,"maxUpdates",We);let te=G;const Ke=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Ze=t=>t==null?void 0:t.map(e=>typeof e=="string"?Ke(e):e),Je=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),Ce=Je,et=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function tt(t){class e extends te{constructor(i,l,a){super(i,a||l);c(this,"frag");c(this,"renderResult");this.frag=l}commit(i){this.renderResult=t(i,this.frag)}}function s(n,r,i){const l=(i||r||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:d={},styleSheets:m}=i||r||{},S=Ze(n.styleSheets||m);class w extends l{constructor(){super();c(this,"_scheduler");if(o===!1)this._scheduler=new e(n,this);else{const u=this.attachShadow({mode:"open",...d});S&&(u.adoptedStyleSheets=S),this._scheduler=new e(n,u,this)}}static get observedAttributes(){return n.observedAttributes||a||[]}connectedCallback(){var u;this._scheduler.resume(),this._scheduler.update(),(u=this._scheduler.renderResult)==null||u.setConnected(!0)}disconnectedCallback(){var u;this._scheduler.pause(),this._scheduler.teardown(),(u=this._scheduler.renderResult)==null||u.setConnected(!1)}attributeChangedCallback(u,p,f){if(p===f)return;let v=f===""?!0:f;Reflect.set(this,et(u),v)}}function L(b){let h=b,u=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return h},set(p){u&&h===p||(u=!0,h=p,this._scheduler&&this._scheduler.update())}})}const M=new Proxy(l.prototype,{getPrototypeOf(b){return b},set(b,h,u,p){let f;return h in b?(f=Object.getOwnPropertyDescriptor(b,h),f&&f.set?(f.set.call(p,u),!0):(Reflect.set(b,h,u,p),!0)):(typeof h=="symbol"||h[0]==="_"?f={enumerable:!0,configurable:!0,writable:!0,value:u}:f=L(u),Object.defineProperty(p,h,f),f.set&&f.set.call(p,u),!0)}});return Object.setPrototypeOf(w.prototype,M),w}return s}class _{constructor(e,s){c(this,"id");c(this,"state");this.id=e,this.state=s}}function st(t,...e){let s=Ve(),n=H[D],r=n.get(s);return r||(r=new t(s,H,...e),n.set(s,r)),r.update(...e)}function E(t){return st.bind(null,t)}function Pe(t){return E(class extends _{constructor(s,n,r,i){super(s,n);c(this,"callback");c(this,"lastValues");c(this,"values");c(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function ke(t,e){t[z].push(e)}const k=Pe(ke),nt=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,rt=E(class extends _{constructor(e,s,n){super(e,s);c(this,"Context");c(this,"value");c(this,"_ranEffect");c(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,ke(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};nt(this.state.host).dispatchEvent(new CustomEvent(ee,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:i}=s;this.value=r?i:e.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function it(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();c(this,"listeners");c(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(ee,this)}disconnectedCallback(){this.removeEventListener(ee,this)}handleEvent(r){const{detail:i}=r;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let i of this.listeners)i(r)}get value(){return this._value}},Consumer:t(function({render:n}){const r=rt(s);return n(r)},{useShadowDOM:!1}),defaultValue:e};return s}}const I=E(class extends _{constructor(e,s,n,r){super(e,s);c(this,"value");c(this,"values");this.value=n(),this.values=r}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}}),ot=(t,e)=>I(()=>t,e);function at(t,e){t[C].push(e)}Pe(at);const ct=E(class extends _{constructor(e,s,n){super(e,s);c(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});E(class extends _{constructor(e,s,n,r,i){super(e,s);c(this,"reducer");c(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(r):r}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const lt=/([A-Z])/gu;E(class extends _{constructor(e,s,n,r){super(e,s);c(this,"property");c(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(lt,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updater(r,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],n=typeof e=="function"?e:void 0,r=n?n(s):e;return[s,r,n]}notify(e,s){const n=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,s=!1){const[n,r,i]=this.resolve(e),l=this.notify(r,i);!s&&l.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}});function ut(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function $(t){return I(()=>ut(t),[])}const Re=E(class extends _{update(){return this.state.host}});function dt({render:t}){const e=tt(t),s=it(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht={CHILD:2},ft=t=>(...e)=>({_$litDirective$:t,values:e});class pt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=(t,e)=>{var n;const s=t._$AN;if(s===void 0)return!1;for(const r of s)(n=r._$AO)==null||n.call(r,e,!1),P(r,e);return!0},F=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},Le=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),bt(e)}};function mt(t){this._$AN!==void 0?(F(this),this._$AM=t,Le(this)):this._$AM=t}function vt(t,e=!1,s=0){const n=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(n))for(let i=s;i<n.length;i++)P(n[i],!1),F(n[i]);else n!=null&&(P(n,!1),F(n));else P(this,t)}const bt=t=>{t.type==ht.CHILD&&(t._$AP??(t._$AP=vt),t._$AQ??(t._$AQ=mt))};class yt extends pt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),Le(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,r;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(r=this.disconnected)==null||r.call(this)),s&&(P(this,e),F(this))}setValue(e){if(Fe(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:Ne}=dt({render:Ge}),Q=new WeakMap,W=ft(class extends yt{render(t){return J}update(t,[e]){var n;const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=(n=t.options)==null?void 0:n.host,this.rt(this.ct=t.element)),J}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=Q.get(e);s===void 0&&(s=new WeakMap,Q.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=Q.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),de=t=>typeof t=="number"&&!Number.isNaN(t)&&t>=0&&t<=1?t:void 0,wt=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const n=new Map,r=()=>{s=void 0;for(const[a,o]of n)try{localStorage.setItem(t+a,String(o))}catch{}n.clear()},i=(a,o)=>{n.set(a,o),s===void 0&&(s=setTimeout(r,100))},l=a=>{if(a.key===null||!a.key.startsWith(t)||a.newValue===null)return;const o=a.key.slice(t.length),d=de(Number(a.newValue));if(d===void 0)return;const m=e.get(o);if(m)for(const S of m)S(d)};return typeof window<"u"&&window.addEventListener("storage",l),{get(a){let o;try{o=localStorage.getItem(t+a)}catch{return}if(o!==null)return de(Number(o))},set(a,o){i(a,o)},subscribe(a,o){let d=e.get(a);return d||(d=new Set,e.set(a,d)),d.add(o),()=>{const m=e.get(a);m&&(m.delete(o),m.size===0&&e.delete(a))}},destroy(){typeof window<"u"&&window.removeEventListener("storage",l),s!==void 0&&(clearTimeout(s),r())}}},gt=(t,e,s)=>{const n=$(s);if(n.current=s,k(()=>{var l,a;if(!t||!e)return;const r=t.get(e);r!==void 0&&((l=n.current)==null||l.call(n,r));const i=(a=t.subscribe)==null?void 0:a.call(t,e,o=>{var d;return(d=n.current)==null?void 0:d.call(n,o)});return()=>{var o;i==null||i(),(o=t.destroy)==null||o.call(t)}},[t,e]),!(!t||!e))return r=>t.set(e,r)},xt=Ce`
	:host {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	:host([data-direction='vertical']) {
		flex-direction: column;
	}

	::slotted(*) {
		flex: 1 1 0;
		min-width: 0;
		min-height: 0;
		overflow: auto;
	}

	:host([data-direction='vertical']) ::slotted(*) {
		min-width: auto;
	}

	cosmoz-resize-handle {
		flex: 0 0 auto;
	}
`,zt=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},R=/^(\d+(?:\.\d+)?)%$/u,Be=/^(\d+(?:\.\d+)?)px$/u,Te=/^(\d+(?:\.\d+)?)vw$/u,je=/^(\d+(?:\.\d+)?)vh$/u,se=t=>{const e=t.match(Te);if(e)return Number(e[1])/100*window.innerWidth;const s=t.match(je);if(s)return Number(s[1])/100*window.innerHeight;const n=t.match(Be);if(n)return Number(n[1])},he=t=>{if(typeof t=="number")return t;const e=t.match(R);return e?Number(e[1])/100:void 0},_t=t=>typeof t=="number"?t:se(t),Et=(t,e=!1)=>{if(Array.isArray(t))return{ratio:he(t[0]),absolute:_t(t[1])};if(typeof t=="number")return e?{ratio:t}:{absolute:t};const s=he(t);return s!==void 0?{ratio:s}:{absolute:se(t)}},St=(t,e,s)=>{const{ratio:n,absolute:r}=t,i=n!==void 0?n*e:void 0;return i!==void 0&&r!==void 0?s?Math.max(i,r):Math.min(i,r):i??r},X=(t,e,s,n=!1)=>{if(t===void 0)return;const r=Et(t,n);return St(r,e,s)},Mt=(t,e)=>typeof t=="string"?Be.test(t)||Te.test(t)||je.test(t):typeof t=="number"&&(e?t>1:!0),At=t=>typeof t=="number"&&t>=0&&t<=1||typeof t=="string"&&R.test(t),$t=(t,e=!1)=>{if(!Array.isArray(t))return!1;const[s,n]=t;return Array.isArray(s)||Array.isArray(n)?!0:!(At(s)&&Mt(n,e))},fe=(t,e,s,n=!1)=>{if(t===void 0)return[void 0,void 0];if($t(t,n)){const[r,i]=t;return[X(r,e,s,n),X(i,e,s,n)]}return[X(t,e,s,n),void 0]},Ct=(t,e,s)=>{const[n,r]=fe(t,s,!0),[i,l]=fe(e,s,!1);return{prevMin:n,prevMax:i,nextMin:r,nextMax:l}},Y=(t,e,s,n)=>{const r=n>0?s/n:0,i=1-r;return t.style.flexBasis=`${r*100}%`,e.style.flexBasis=`${i*100}%`,{ratios:[r,i]}},Pt=t=>{var s;if(Array.isArray(t)){const n=t[0];return typeof n=="number"?n:Number(((s=n.match(R))==null?void 0:s[1])??50)/100}if(typeof t=="number")return t;const e=t.match(R);return e?Number(e[1])/100:.5},kt=t=>typeof t=="number"?t:se(t)??0,Rt=(t,e,s)=>{var a;const n=t[0];let r;if(Array.isArray(n)){const[o,d]=n,m=typeof o=="number"?o:Number(((a=o.match(R))==null?void 0:a[1])??50)/100;r=Math.min(m*s,kt(d))}else r=Pt(n)*s;let i=0,l=s;return e.prevMin!==void 0&&(i=Math.max(i,e.prevMin)),e.prevMax!==void 0&&(l=Math.min(l,e.prevMax)),e.nextMax!==void 0&&(i=Math.max(i,s-e.nextMax)),e.nextMin!==void 0&&(l=Math.min(l,s-e.nextMin)),l<i?e.prevMax??l:Math.max(i,Math.min(r,l))},Lt=(t,e)=>{let s=t;return e.prevMin!==void 0&&(s=Math.max(s,e.prevMin)),e.prevMax!==void 0&&(s=Math.min(s,e.prevMax)),Math.max(0,s)},Nt=(t="horizontal")=>{const e=Re();return k(()=>{e.setAttribute("data-direction",t)},[t]),k(()=>{const s=(o,d)=>{const m=zt(d);e.dispatchEvent(new CustomEvent("resize",{detail:{phase:o,mousePosition:m},bubbles:!0}))},n=o=>s("move",o),r=o=>{e.removeAttribute("data-dragging"),s("end",o),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",r)},i=o=>{e.setAttribute("data-dragging","true"),s("start",o),document.addEventListener("mousemove",n),document.addEventListener("mouseup",r),document.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchend",r)},l=o=>{o.preventDefault(),i(o)},a=o=>{o.preventDefault(),i(o)};return e.addEventListener("mousedown",l),e.addEventListener("touchstart",a,{passive:!1}),()=>{e.removeEventListener("mousedown",l),e.removeEventListener("touchstart",a),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",r)}},[e]),null},Bt=Ce`
	:host {
		display: block;
		background: var(--cosmoz-resize-handle-background, #e0e0e0);
		user-select: none;
		position: relative;
		z-index: 1;
		touch-action: none;
	}

	:host([data-direction='horizontal']) {
		min-height: 100%;
		width: var(--cosmoz-resize-handle-size, 4px);
		cursor: col-resize;
	}

	:host([data-direction='vertical']) {
		height: var(--cosmoz-resize-handle-size, 4px);
		width: 100%;
		cursor: row-resize;
	}

	:host(:hover) {
		background: var(--cosmoz-resize-handle-hover-background, #ccc);
	}

	:host([data-dragging]) {
		background: var(--cosmoz-resize-handle-dragging-background, #007acc);
		cursor: grabbing;
	}
`,Tt=({direction:t="horizontal"})=>(Nt(t),J);customElements.define("cosmoz-resize-handle",Ne(Tt,{styleSheets:[Bt],observedAttributes:["direction"]}));const jt=(t,e,s)=>s==="horizontal"?t.x-e.left:t.y-e.top,qe=(t,e)=>e==="horizontal"?t.width:t.height,qt=(t,e,s)=>{let n=t;return e!==void 0&&(n=Math.max(n,e)),s!==void 0&&(n=Math.min(n,s)),Math.max(0,n)},Ot=(t,e)=>{const s=e>0?e:1,n=t/s;return[n,1-n]},Dt=(t,e,s)=>(t.rect||(t.rect=e.container.getBoundingClientRect(),t.size=qe(t.rect,s)),t.rect),Ht=t=>{const e={rect:void 0,size:0},s=(n,r,i)=>{var d,m;const l=Dt(e,i.elements,i.direction),a=qt(jt(r,l,i.direction),i.minSize,i.maxSize),o=Ot(a,e.size);n==="move"?(d=i.onResize)==null||d.call(i,{ratios:o,px:a}):((m=i.onResizeEnd)==null||m.call(i,{ratios:o}),e.rect=void 0)};return n=>{var l;const{phase:r,mousePosition:i}=n.detail;if(r==="start"){e.rect=t.elements.container.getBoundingClientRect(),e.size=qe(e.rect,t.direction),(l=t.onResizeStart)==null||l.call(t);return}(r==="move"||r==="end")&&s(r,i,t)}},K=(t,e)=>t.dispatchEvent(new CustomEvent("split-resize",{detail:{ratios:e},bubbles:!0})),Z=(t,e)=>{const s=t.getBoundingClientRect();return e==="horizontal"?s.width:s.height},It=({direction:t="horizontal",initialSizes:e=[.5,.5],minSize:s,maxSize:n,persist:r})=>{const i=Re(),l=$(.5),a=$(),o=$(),d=$(),[m,S]=ct(!1),w=I(()=>{if(typeof r=="string")return wt();if(r&&typeof r=="object")return r},[r]),L=I(()=>{if(typeof r=="string")return r;if(r&&typeof r=="object")return"default"},[r]),M=gt(w,L,h=>{var y,g;l.current=h;const u=(y=o.current)==null?void 0:y.assignedElements()[0],p=(g=d.current)==null?void 0:g.assignedElements()[0];if(!u||!p)return;const f=Z(i,t),{ratios:v}=Y(u,p,h*f,f);K(i,v)}),b=ot(()=>{const h=i.shadowRoot;if(!h)return;const u=o.current,p=d.current,f=h.querySelector("slot:not([name])");if(!u||!p||!f)return;let v=u.assignedElements()[0],y=p.assignedElements()[0];const g=f.assignedElements().filter(B=>!B.hasAttribute("slot"));!v&&g.length>0&&(v=g.shift(),v.setAttribute("slot","previous")),!y&&g.length>0&&(y=g.shift(),y.setAttribute("slot","next"));const N=a.current;v&&y&&N&&S(!0)},[]);return k(()=>{var h;i.setAttribute("data-direction",t),(h=a.current)==null||h.setAttribute("data-direction",t)},[t]),k(()=>{var ne,re,ie;if(!m)return;const h=a.current,u=(ne=o.current)==null?void 0:ne.assignedElements()[0],p=(re=d.current)==null?void 0:re.assignedElements()[0];if(!u||!p||!h)return;const f=Z(i,t),v=Ct(s,n,f),y=(ie=w==null?void 0:w.get)==null?void 0:ie.call(w,L??""),g=y!==void 0?Lt(y*f,v):Rt(e,v,f),{ratios:N}=Y(u,p,g,f);l.current=N[0],K(i,N);const B=Ht({elements:{previous:u,next:p,container:i},direction:t,minSize:v.prevMin,maxSize:v.prevMax,onResize:({ratios:T,px:Oe})=>{const De=Z(i,t);Y(u,p,Oe,De),l.current=T[0],K(i,T)},onResizeEnd:({ratios:T})=>{M==null||M(T[0])}});return h.addEventListener("resize",B),()=>{h.removeEventListener("resize",B)}},[s,n,M,t,m]),V`<slot hidden @slotchange=${b}></slot
		><slot
			name="previous"
			${W(o)}
			@slotchange=${b}
		></slot
		><cosmoz-resize-handle
			direction=${t}
			${W(a)}
		></cosmoz-resize-handle
		><slot name="next" ${W(d)} @slotchange=${b}></slot>`};customElements.define("cosmoz-resizable-view",Ne(It,{styleSheets:[xt],observedAttributes:["direction"]}));const{expect:x,waitFor:A}=__STORYBOOK_MODULE_TEST__,Ut={title:"Components/ResizableView",tags:["autodocs"]},j={render:()=>V`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            .initialSizes=${[.5,.5]}
        >
            <div
                id="prev"
                style="background:#ff6b6b; display:flex; align-items:center; justify-content:center; color:white;"
            >
                <h3>Left Panel</h3>
            </div>
            <div
                id="next"
                style="background:#4ecdc4; display:flex; align-items:center; justify-content:center; color:white;"
            >
                <h3>Right Panel</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await A(()=>{const s=t.querySelector("#prev");x(s).not.toBeNull()}),x(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered in shadow DOM between named slots",async()=>{await A(()=>{var n;const s=(n=t.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");x(s).not.toBeNull()})}),await e("Panels get initial flex-basis from initialSizes",async()=>{await A(()=>{const s=t.querySelector("#prev");x(s.style.flexBasis).toBe("50%")})})}},q={render:()=>V`<cosmoz-resizable-view
            style="display:flex; flex-direction:column; width:600px; height:400px; border:1px solid #ccc;"
            direction="vertical"
            .initialSizes=${[.5,.5]}
        >
            <div
                style="background:#ff6b6b; display:flex; align-items:center; justify-content:center; color:white; padding:20px;"
            >
                <h3>Top Panel</h3>
            </div>
            <div
                style="background:#4ecdc4; display:flex; align-items:center; justify-content:center; color:white; padding:20px;"
            >
                <h3>Bottom Panel</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{const s=t.querySelector("cosmoz-resizable-view");await A(()=>{x(s.getAttribute("data-direction")).toBe("vertical")}),await A(()=>{var r;const n=(r=s.shadowRoot)==null?void 0:r.querySelector("cosmoz-resize-handle");x(n==null?void 0:n.getAttribute("data-direction")).toBe("vertical")})})}},O={render:()=>V`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            .initialSizes=${[.5,.5]}
        >
            <div
                style="background:#ff6b6b; display:flex; align-items:center; justify-content:center; color:white;"
            >
                <h3>Left Panel</h3>
            </div>
            <cosmoz-resizable-view direction="vertical" .initialSizes=${[.5,.5]}>
                <div
                    style="background:#ffa726; display:flex; align-items:center; justify-content:center; color:white; padding:10px;"
                >
                    <h3>Top Panel</h3>
                </div>
                <div
                    style="background:#45b7d1; display:flex; align-items:center; justify-content:center; color:white; padding:10px;"
                >
                    <h3>Bottom Panel</h3>
                </div>
            </cosmoz-resizable-view>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await A(()=>{var r,i;const s=(r=t.shadowRoot)==null?void 0:r.querySelector("cosmoz-resize-handle");x(s).not.toBeNull();const n=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");x(n).not.toBeNull(),x((i=n==null?void 0:n.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle")).not.toBeNull()})})}};var ye,we,ge;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            .initialSizes=\${[0.5, 0.5]}
        >
            <div
                id="prev"
                style="background:#ff6b6b; display:flex; align-items:center; justify-content:center; color:white;"
            >
                <h3>Left Panel</h3>
            </div>
            <div
                id="next"
                style="background:#4ecdc4; display:flex; align-items:center; justify-content:center; color:white;"
            >
                <h3>Right Panel</h3>
            </div>
        </cosmoz-resizable-view>\`,
  async play({
    canvasElement,
    step
  }) {
    await step('Renders both panels', async () => {
      await waitFor(() => {
        const prev = canvasElement.querySelector('#prev');
        expect(prev).not.toBeNull();
      });
      expect(canvasElement.querySelector('#next')).not.toBeNull();
    });
    await step('Handle is rendered in shadow DOM between named slots', async () => {
      await waitFor(() => {
        const handle = canvasElement.shadowRoot?.querySelector('cosmoz-resize-handle');
        expect(handle).not.toBeNull();
      });
    });
    await step('Panels get initial flex-basis from initialSizes', async () => {
      await waitFor(() => {
        const prev = canvasElement.querySelector('#prev') as HTMLElement;
        expect(prev.style.flexBasis).toBe('50%');
      });
    });
  }
}`,...(ge=(we=j.parameters)==null?void 0:we.docs)==null?void 0:ge.source}}};var xe,ze,_e;q.parameters={...q.parameters,docs:{...(xe=q.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; flex-direction:column; width:600px; height:400px; border:1px solid #ccc;"
            direction="vertical"
            .initialSizes=\${[0.5, 0.5]}
        >
            <div
                style="background:#ff6b6b; display:flex; align-items:center; justify-content:center; color:white; padding:20px;"
            >
                <h3>Top Panel</h3>
            </div>
            <div
                style="background:#4ecdc4; display:flex; align-items:center; justify-content:center; color:white; padding:20px;"
            >
                <h3>Bottom Panel</h3>
            </div>
        </cosmoz-resizable-view>\`,
  async play({
    canvasElement,
    step
  }) {
    await step('Renders with vertical direction', async () => {
      const el = canvasElement.querySelector('cosmoz-resizable-view') as HTMLElement;
      await waitFor(() => {
        expect(el.getAttribute('data-direction')).toBe('vertical');
      });
      await waitFor(() => {
        const handle = el.shadowRoot?.querySelector('cosmoz-resize-handle');
        expect(handle?.getAttribute('data-direction')).toBe('vertical');
      });
    });
  }
}`,...(_e=(ze=q.parameters)==null?void 0:ze.docs)==null?void 0:_e.source}}};var Ee,Se,Me;O.parameters={...O.parameters,docs:{...(Ee=O.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            .initialSizes=\${[0.5, 0.5]}
        >
            <div
                style="background:#ff6b6b; display:flex; align-items:center; justify-content:center; color:white;"
            >
                <h3>Left Panel</h3>
            </div>
            <cosmoz-resizable-view direction="vertical" .initialSizes=\${[0.5, 0.5]}>
                <div
                    style="background:#ffa726; display:flex; align-items:center; justify-content:center; color:white; padding:10px;"
                >
                    <h3>Top Panel</h3>
                </div>
                <div
                    style="background:#45b7d1; display:flex; align-items:center; justify-content:center; color:white; padding:10px;"
                >
                    <h3>Bottom Panel</h3>
                </div>
            </cosmoz-resizable-view>
        </cosmoz-resizable-view>\`,
  async play({
    canvasElement,
    step
  }) {
    await step('Renders nested resizable views', async () => {
      await waitFor(() => {
        const outer = canvasElement.shadowRoot?.querySelector('cosmoz-resize-handle');
        expect(outer).not.toBeNull();
        const inner = canvasElement.querySelector('cosmoz-resizable-view cosmoz-resizable-view') as HTMLElement | null;
        expect(inner).not.toBeNull();
        expect(inner?.shadowRoot?.querySelector('cosmoz-resize-handle')).not.toBeNull();
      });
    });
  }
}`,...(Me=(Se=O.parameters)==null?void 0:Se.docs)==null?void 0:Me.source}}};const Qt=["BasicDemo","VerticalDemo","MultiplePanels"];export{j as BasicDemo,O as MultiplePanels,q as VerticalDemo,Qt as __namedExportsOrder,Ut as default};
