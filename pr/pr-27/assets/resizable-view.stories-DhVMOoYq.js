var et=Object.defineProperty;var tt=(t,e,s)=>e in t?et(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var c=(t,e,s)=>tt(t,typeof e!="symbol"?e+"":e,s);import{f as st,B as nt,E as K,x as E}from"./iframe-BlZ_6MXo.js";import"./preload-helper-C1FmrZbK.js";let G,Ge=0;function le(t){G=t}function ce(){G=null,Ge=0}function it(){return Ge++}const Q=Symbol("haunted.phase"),I=Symbol("haunted.hook"),de=Symbol("haunted.update"),ue=Symbol("haunted.commit"),$=Symbol("haunted.effects"),M=Symbol("haunted.layoutEffects"),Z="haunted.context";var ye,we,xe;xe=I,we=$,ye=M;class rt{constructor(e,s){c(this,"update");c(this,"host");c(this,"virtual");c(this,xe);c(this,we);c(this,ye);this.update=e,this.host=s,this[I]=new Map,this[$]=[],this[M]=[]}run(e){le(this);let s=e();return ce(),s}_runEffects(e){let s=this[e];le(this);for(let n of s)n.call(this);ce()}runEffects(){this._runEffects($)}runLayoutEffects(){this._runEffects(M)}teardown(){this[I].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class ot extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const at=100,lt=Promise.resolve().then.bind(Promise.resolve());function je(){let t=[],e;function s(){e=null;let n=t;t=[];for(var i=0,r=n.length;i<r;i++)n[i]()}return function(n){t.push(n),e==null&&(e=lt(s))}}const ct=je(),he=je();var ze;ze=Q;const U=class U{constructor(e,s){c(this,"renderer");c(this,"host");c(this,"state");c(this,ze);c(this,"_updateQueued");c(this,"_active");c(this,"_updateCount");c(this,"_processing");this.renderer=e,this.host=s,this.state=new rt(this.update.bind(this),s),this[Q]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>U.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new ot(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,ct(()=>{let e=this.handlePhase(de);he(()=>{this.handlePhase(ue,e),he(()=>{this.handlePhase($),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[Q]=e,e){case ue:this.commit(s),this.runEffects(M);return;case de:return this.render();case $:return this.runEffects($)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};c(U,"maxUpdates",at);let ee=U;const dt=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},ut=t=>t==null?void 0:t.map(e=>typeof e=="string"?dt(e):e),ht=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),Ue=ht,pt=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function vt(t){class e extends ee{constructor(r,o,a){super(r,a||o);c(this,"frag");c(this,"renderResult");this.frag=o}commit(r){this.renderResult=t(r,this.frag)}}function s(n,i,r){const o=(r||i||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:d={},styleSheets:v}=r||i||{},u=ut(n.styleSheets||v);class g extends o{constructor(){super();c(this,"_scheduler");if(l===!1)this._scheduler=new e(n,this);else{const h=this.attachShadow({mode:"open",...d});u&&(h.adoptedStyleSheets=u),this._scheduler=new e(n,h,this)}}static get observedAttributes(){return n.observedAttributes||a||[]}connectedCallback(){var h;this._scheduler.resume(),this._scheduler.update(),(h=this._scheduler.renderResult)==null||h.setConnected(!0)}disconnectedCallback(){var h;this._scheduler.pause(),this._scheduler.teardown(),(h=this._scheduler.renderResult)==null||h.setConnected(!1)}attributeChangedCallback(h,w,b){if(w===b)return;let W=b===""?!0:b;Reflect.set(this,pt(h),W)}}function _(m){let f=m,h=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return f},set(w){h&&f===w||(h=!0,f=w,this._scheduler&&this._scheduler.update())}})}const S=new Proxy(o.prototype,{getPrototypeOf(m){return m},set(m,f,h,w){let b;return f in m?(b=Object.getOwnPropertyDescriptor(m,f),b&&b.set?(b.set.call(w,h),!0):(Reflect.set(m,f,h,w),!0)):(typeof f=="symbol"||f[0]==="_"?b={enumerable:!0,configurable:!0,writable:!0,value:h}:b=_(h),Object.defineProperty(w,f,b),b.set&&b.set.call(w,h),!0)}});return Object.setPrototypeOf(g.prototype,S),g}return s}class B{constructor(e,s){c(this,"id");c(this,"state");this.id=e,this.state=s}}function mt(t,...e){let s=it(),n=G[I],i=n.get(s);return i||(i=new t(s,G,...e),n.set(s,i)),i.update(...e)}function R(t){return mt.bind(null,t)}function We(t){return R(class extends B{constructor(s,n,i,r){super(s,n);c(this,"callback");c(this,"lastValues");c(this,"values");c(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function Qe(t,e){t[$].push(e)}const L=We(Qe),ft=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,bt=R(class extends B{constructor(e,s,n){super(e,s);c(this,"Context");c(this,"value");c(this,"_ranEffect");c(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Qe(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};ft(this.state.host).dispatchEvent(new CustomEvent(Z,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:r}=s;this.value=i?r:e.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function gt(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();c(this,"listeners");c(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(Z,this)}disconnectedCallback(){this.removeEventListener(Z,this)}handleEvent(i){const{detail:r}=i;r.Context===s&&(r.value=this.value,r.unsubscribe=this.unsubscribe.bind(this,r.callback),this.listeners.add(r.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let r of this.listeners)r(i)}get value(){return this._value}},Consumer:t(function({render:n}){const i=bt(s);return n(i)},{useShadowDOM:!1}),defaultValue:e};return s}}const te=R(class extends B{constructor(e,s,n,i){super(e,s);c(this,"value");c(this,"values");this.value=n(),this.values=i}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}}),pe=(t,e)=>te(()=>t,e);function yt(t,e){t[M].push(e)}We(yt);const wt=R(class extends B{constructor(e,s,n){super(e,s);c(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});R(class extends B{constructor(e,s,n,i,r){super(e,s);c(this,"reducer");c(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=r!==void 0?r(i):i}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const xt=/([A-Z])/gu;R(class extends B{constructor(e,s,n,i){super(e,s);c(this,"property");c(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(xt,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof i=="function"&&(i=i()),i!=null&&this.updater(i,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],n=typeof e=="function"?e:void 0,i=n?n(s):e;return[s,i,n]}notify(e,s){const n=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,s=!1){const[n,i,r]=this.resolve(e),o=this.notify(i,r);!s&&o.defaultPrevented||Object.is(n,i)||(this.state.host[this.property]=i)}});function zt(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function z(t){return te(()=>zt(t),[])}const Xe=R(class extends B{update(){return this.state.host}});function Et({render:t}){const e=vt(t),s=gt(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t={CHILD:2},St=t=>(...e)=>({_$litDirective$:t,values:e});class Ct{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=(t,e)=>{var n;const s=t._$AN;if(s===void 0)return!1;for(const i of s)(n=i._$AO)==null||n.call(i,e,!1),T(i,e);return!0},j=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},Ye=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),Rt(e)}};function $t(t){this._$AN!==void 0?(j(this),this._$AM=t,Ye(this)):this._$AM=t}function Bt(t,e=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let r=s;r<n.length;r++)T(n[r],!1),j(n[r]);else n!=null&&(T(n,!1),j(n));else T(this,t)}const Rt=t=>{t.type==_t.CHILD&&(t._$AP??(t._$AP=Bt),t._$AQ??(t._$AQ=$t))};class Pt extends Ct{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),Ye(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,i;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),s&&(T(this,e),j(this))}setValue(e){if(st(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:Je}=Et({render:nt}),X=new WeakMap,A=St(class extends Pt{render(t){return K}update(t,[e]){var n;const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=(n=t.options)==null?void 0:n.host,this.rt(this.ct=t.element)),K}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=X.get(e);s===void 0&&(s=new WeakMap,X.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=X.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),At=t=>{if(typeof t!="object"||t==null)return!1;const e=t;return typeof e.px=="number"&&e.px>=0&&!Number.isNaN(e.px)},ve=t=>{try{const e=JSON.parse(t);if(At(e))return e}catch{}},Lt=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const n=new Map,i=()=>{s=void 0;for(const[a,l]of n)try{localStorage.setItem(t+a,JSON.stringify(l))}catch{}n.clear()},r=(a,l)=>{n.set(a,l),s==null&&(s=setTimeout(i,100))},o=a=>{if(a.key==null||!a.key.startsWith(t)||a.newValue==null)return;const l=a.key.slice(t.length),d=ve(a.newValue);if(d==null)return;const v=e.get(l);if(v)for(const u of v)u(d)};return typeof window<"u"&&window.addEventListener("storage",o),{get(a){let l;try{l=localStorage.getItem(t+a)}catch{return}if(l!=null)return ve(l)},set(a,l){r(a,l)},subscribe(a,l){let d=e.get(a);return d||(d=new Set,e.set(a,d)),d.add(l),()=>{const v=e.get(a);v&&(v.delete(l),v.size===0&&e.delete(a))}},destroy(){typeof window<"u"&&window.removeEventListener("storage",o),s!=null&&(clearTimeout(s),i())}}},Mt=(t,e,s)=>{const n=z(s);if(n.current=s,L(()=>{var o,a;if(!t||!e)return;const i=t.get(e);(o=n.current)==null||o.call(n,i);const r=(a=t.subscribe)==null?void 0:a.call(t,e,l=>{var d;return(d=n.current)==null?void 0:d.call(n,l)});return()=>{var l;r==null||r(),(l=t.destroy)==null||l.call(t)}},[t,e]),!(!t||!e))return i=>t.set(e,i)},me=t=>{const e=t.trim();if(e==="")return e;const s=Number(e);return Number.isNaN(s)?e:`${s}px`},Tt=t=>{if(t==null||t.trim()==="")return{};const e=t.includes(",")?t.split(/,\s*/u):t.match(/(?:[^\s()]+\([^)]*\)|\([^)]*\)|[^\s]+)/gu)??[t];return{previous:me(e[0]),next:e.length>1?me(e[1]):void 0}},qt=Ue`
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

	:host([reversed][data-direction='horizontal']) {
		flex-direction: row-reverse;
	}

	:host([reversed][data-direction='vertical']) {
		flex-direction: column-reverse;
	}

	.panel {
		display: flex;
		flex-direction: row;
		min-width: 0;
		min-height: 0;
		overflow: auto;
		contain: layout style;
	}

	:host([data-direction='vertical']) .panel {
		flex-direction: column;
	}

	.panel[data-panel='previous'] {
		flex-grow: 0;
		flex-shrink: 1;
		flex-basis: var(--resizable-previous-basis, auto);
	}

	.panel[data-panel='next'] {
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: var(--resizable-next-basis, 0);
	}

	.panel[data-hidden] {
		/* Collapsed, but still rendered: keeps a box so the ResizeObserver
		   on slotted content fires again when it becomes visible. */
		flex: 0 0 0px !important;
		min-width: 0 !important;
		min-height: 0 !important;
		overflow: hidden;
	}

	:host([data-direction='horizontal']) .panel[data-panel='previous'] {
		min-width: var(
			--resizable-previous-min-horizontal,
			var(--resizable-previous-min, 0)
		);
	}
	:host([data-direction='horizontal']) .panel[data-panel='next'] {
		min-width: var(
			--resizable-next-min-horizontal,
			var(--resizable-next-min, 0)
		);
	}
	:host([data-direction='vertical']) .panel[data-panel='previous'] {
		min-height: var(
			--resizable-previous-min-vertical,
			var(--resizable-previous-min, 0)
		);
	}
	:host([data-direction='vertical']) .panel[data-panel='next'] {
		min-height: var(
			--resizable-next-min-vertical,
			var(--resizable-next-min, 0)
		);
	}

	:host([data-direction='horizontal']) .panel[data-panel='previous'] {
		max-width: var(
			--resizable-previous-max-horizontal,
			var(--resizable-previous-max, none)
		);
	}
	:host([data-direction='horizontal']) .panel[data-panel='next'] {
		max-width: var(
			--resizable-next-max-horizontal,
			var(--resizable-next-max, none)
		);
	}
	:host([data-direction='vertical']) .panel[data-panel='previous'] {
		max-height: var(
			--resizable-previous-max-vertical,
			var(--resizable-previous-max, none)
		);
	}
	:host([data-direction='vertical']) .panel[data-panel='next'] {
		max-height: var(
			--resizable-next-max-vertical,
			var(--resizable-next-max, none)
		);
	}

	.panel ::slotted(*) {
		flex: 1 1 100% !important;
		min-width: 0 !important;
		min-height: 0 !important;
	}

	:host([data-single-panel]) .panel:not([data-hidden]) {
		min-width: 0;
		min-height: 0;
		flex: 1 1 0 !important;
	}

	cosmoz-resize-handle {
		flex: 0 0 auto;
	}

	:host([data-single-panel]) cosmoz-resize-handle {
		display: none;
	}
`,Y=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},Nt=(t,e,s,n)=>s==="horizontal"?n?e.right-t.x:t.x-e.left:n?e.bottom-t.y:t.y-e.top,q=t=>{const e=parseFloat(t);return Number.isNaN(e)?void 0:e},kt=(t,e)=>{const s=getComputedStyle(t),n=e==="horizontal"?q(s.minWidth)??0:q(s.minHeight)??0,i=e==="horizontal"?q(s.maxWidth)??1/0:q(s.maxHeight)??1/0;return{min:n,max:i}},fe=t=>({rect:t.container.getBoundingClientRect(),bounds:kt(t.previous,t.direction)}),Dt=(t,e,s,n,i)=>{const r=Nt(t,e,s,i);return Math.max(Math.min(r,n.max),n.min)},Ft=t=>{let e;return s=>{var o,a;const{phase:n,mousePosition:i}=s.detail;if(n==="start"){e=fe(t);return}if(n!=="move"&&n!=="end")return;e||(e=fe(t));const r=Dt(i,e.rect,t.direction,e.bounds,t.reversed);n==="move"?(o=t.onResize)==null||o.call(t,r):((a=t.onResizeEnd)==null||a.call(t),e=void 0)}},Ht=(t="horizontal")=>{const e=Xe();return L(()=>{e.setAttribute("data-direction",t)},[t]),L(()=>{const s=(u,g)=>{e.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:u,mousePosition:g},bubbles:!0}))};let n=0,i;const r=()=>{n=0,i&&(s("move",i),i=void 0)},o=u=>{i=Y(u),n||(n=requestAnimationFrame(r))},a=u=>{n&&(cancelAnimationFrame(n),r()),e.removeAttribute("data-dragging"),s("end",Y(u)),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",o),document.removeEventListener("touchend",a)},l=u=>{e.setAttribute("data-dragging","true"),s("start",Y(u)),document.addEventListener("mousemove",o),document.addEventListener("mouseup",a),document.addEventListener("touchmove",o,{passive:!1}),document.addEventListener("touchend",a)},d=u=>{u.preventDefault(),l(u)},v=u=>{u.preventDefault(),l(u)};return e.addEventListener("mousedown",d),e.addEventListener("touchstart",v,{passive:!1}),()=>{n&&cancelAnimationFrame(n),e.removeEventListener("mousedown",d),e.removeEventListener("touchstart",v),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",o),document.removeEventListener("touchend",a)}},[e]),null},Ot=Ue`
	:host {
		display: flex;
		position: relative;
		z-index: 1;
		user-select: none;
		touch-action: none;
		background: var(--cz-queue-gutter-bg, var(--cz-header-bg-color, #fff));
	}

	:host::before {
		content: '';
		display: block;
		flex: none;
		background: var(--cz-queue-gutter-bg, var(--cz-header-bg-color, #bbb));
		pointer-events: none;
	}

	:host::after {
		content: '';
		position: absolute;
		top: 0;
		left: -2px;
		right: -2px;
		bottom: 0;
	}

	:host([data-direction='horizontal']) {
		flex-direction: column;
		align-items: center;
		min-height: 100%;
		width: var(--cosmoz-resize-handle-size, 2px);
		cursor: col-resize;
	}

	:host([data-direction='horizontal'])::before {
		width: 1px;
		flex: 1;
	}

	:host([data-direction='vertical']) {
		flex-direction: row;
		align-items: center;
		height: var(--cosmoz-resize-handle-size, 2px);
		width: 100%;
		cursor: row-resize;
	}

	:host([data-direction='vertical'])::before {
		height: 1px;
		flex: 1;
	}

	:host([reversed][data-direction='horizontal'])::after {
		left: 2px;
		right: -2px;
	}

	:host([reversed][data-direction='vertical'])::after {
		top: 2px;
		bottom: -2px;
	}

	:host(:hover)::before {
		background: var(--cz-color-border-primary, var(--cz-accent-color));
	}

	:host([data-dragging])::before {
		background: var(--cz-color-border-brand, var(--cz-accent-color));
	}
`,Vt=({direction:t="horizontal"})=>(Ht(t),K);customElements.define("cosmoz-resize-handle",Je(Vt,{styleSheets:[Ot],observedAttributes:["direction","reversed"]}));const It=t=>getComputedStyle(t).display!=="none",be=t=>t==null?void 0:t.assignedElements()[0],ge=t=>(t==null?void 0:t.assignedElements().some(e=>It(e)))??!1,Gt=(t,e,s,n,i)=>{const r=()=>{const l=ge(s),d=ge(i);e.toggleAttribute("data-hidden",!l),n.toggleAttribute("data-hidden",!d),t.toggleAttribute("data-single-panel",!(l&&d))},o=new ResizeObserver(()=>queueMicrotask(r)),a=l=>{l==null||l.assignedElements().forEach(d=>o.observe(d))};return a(s),a(i),r(),o},jt=(t,e)=>{if(e==null){t.style.flexBasis="";return}t.style.flexBasis=`${e.px}px`},J=(t,e,s,n,i)=>{const r=(o,a)=>{const{previous:l,next:d}=Tt(a??null),v=`--resizable-previous-${e}${o}`,u=`--resizable-next-${e}${o}`;l!=null?t.style.setProperty(v,l):t.style.removeProperty(v),d!=null?t.style.setProperty(u,d):t.style.removeProperty(u)};r("",s),r("-horizontal",n),r("-vertical",i)},Ut=({host:t,handle:e,direction:s,reversed:n,persistRef:i,prevPanelRef:r,nextPanelRef:o,prevSlotRef:a,nextSlotRef:l})=>{const d=r.current,v=o.current,u=be(a.current),g=be(l.current);if(!d||!v||!u||!g||!e)return;const _=Ft({container:t,previous:d,direction:s,reversed:n,onResize:m=>{d.style.flexBasis=`${m}px`},onResizeEnd:()=>{requestAnimationFrame(()=>{var h;const m=d.getBoundingClientRect(),f=s==="horizontal"?m.width:m.height;(h=i.current)==null||h.call(i,{px:f})})}});e.addEventListener("resize-handle",_);const S=Gt(t,d,a.current,v,l.current);return()=>{e.removeEventListener("resize-handle",_),S.disconnect()}},Wt=({direction:t="horizontal",reversed:e,persist:s,initialSize:n,initialSizeHorizontal:i,initialSizeVertical:r,minSize:o,minSizeHorizontal:a,minSizeVertical:l,maxSize:d,maxSizeHorizontal:v,maxSizeVertical:u})=>{const g=Xe(),_=z(),S=z(),m=z(),f=z(),h=z(),w=z(),[b,W]=wt(!1),Ke=s?`${s}:${t}`:void 0,se=te(()=>s?Lt():void 0,[s]),ne=Mt(se,Ke,C=>{const P=h.current;P&&jt(P,C)}),ie=z(ne);ie.current=ne;const re=pe(()=>{var oe,ae;const C=(oe=S.current)==null?void 0:oe.assignedElements()[0],P=(ae=m.current)==null?void 0:ae.assignedElements()[0];C&&P&&W(!0)},[]),Ze=pe(()=>{var C;(C=f.current)==null||C.assignedElements().forEach(P=>P.setAttribute("slot","previous"))},[]);return L(()=>{g.setAttribute("data-direction",t)},[t]),L(()=>{J(g,"basis",n,i,r),J(g,"min",o,a,l),J(g,"max",d,v,u)},[g,n,i,r,o,a,l,d,v,u]),L(()=>b?Ut({host:g,handle:_.current,direction:t,reversed:e===!0,persistRef:ie,prevPanelRef:h,nextPanelRef:w,prevSlotRef:S,nextSlotRef:m}):void 0,[t,e,se,s,g,b]),E`<slot
			${A(f)}
			@slotchange=${Ze}
		></slot>
		<div
			class="panel"
			data-panel="previous"
			${A(h)}
			part="panel-previous"
		>
			<slot
				name="previous"
				${A(S)}
				@slotchange=${re}
			></slot>
		</div>
		<cosmoz-resize-handle
			direction=${t}
			?reversed=${e===!0}
			${A(_)}
		></cosmoz-resize-handle>
		<div class="panel" data-panel="next" ${A(w)} part="panel-next">
			<slot name="next" ${A(m)} @slotchange=${re}></slot>
		</div>`};customElements.define("cosmoz-resizable-view",Je(Wt,{styleSheets:[qt],observedAttributes:["direction","reversed","persist","initial-size","initial-size-horizontal","initial-size-vertical","min-size","min-size-horizontal","min-size-vertical","max-size","max-size-horizontal","max-size-vertical"]}));const{expect:p,waitFor:x}=__STORYBOOK_MODULE_TEST__,Jt={title:"Components/ResizableView",tags:["autodocs"]},y=t=>`background:${t}; display:flex; align-items:center; justify-content:center; color:white;`,N={render:()=>E`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            initial-size="50%"
        >
            <div slot="previous" id="prev" style="${y("#ff6b6b")}">
                <h3>Left Panel</h3>
            </div>
            <div slot="next" id="next" style="${y("#4ecdc4")}">
                <h3>Right Panel</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await x(()=>{const s=t.querySelector("#prev");p(s).not.toBeNull()}),p(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered in shadow DOM between panel wrappers",async()=>{await x(()=>{var n;const s=(n=t.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");p(s).not.toBeNull()})})}},k={render:()=>E`<cosmoz-resizable-view
            style="display:flex; flex-direction:column; width:600px; height:400px; border:1px solid #ccc;"
            direction="vertical"
            initial-size="50%"
        >
            <div slot="previous" style="${y("#ff6b6b")} padding:20px;">
                <h3>Top Panel</h3>
            </div>
            <div slot="next" style="${y("#4ecdc4")} padding:20px;">
                <h3>Bottom Panel</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{const s=t.querySelector("cosmoz-resizable-view");await x(()=>{p(s.getAttribute("data-direction")).toBe("vertical")}),await x(()=>{var i;const n=(i=s.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle");p(n==null?void 0:n.getAttribute("data-direction")).toBe("vertical")})})}},D={render:()=>E`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            initial-size="50%"
        >
            <div slot="previous" style="${y("#ff6b6b")}">
                <h3>Left Panel</h3>
            </div>
            <cosmoz-resizable-view
                slot="next"
                direction="vertical"
                style="display:flex;"
                initial-size="50%"
            >
                <div slot="previous" style="${y("#ffa726")} padding:10px;">
                    <h3>Top Panel</h3>
                </div>
                <div slot="next" style="${y("#45b7d1")} padding:10px;">
                    <h3>Bottom Panel</h3>
                </div>
            </cosmoz-resizable-view>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await x(()=>{var i,r;const s=(i=t.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle");p(s).not.toBeNull();const n=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");p(n).not.toBeNull(),p((r=n==null?void 0:n.shadowRoot)==null?void 0:r.querySelector("cosmoz-resize-handle")).not.toBeNull()})})}},F={render:()=>E`<cosmoz-resizable-view
            style="display:flex; width:800px; height:300px; border:1px solid #ccc;"
            initial-size="25%"
            min-size="300"
        >
            <div id="list" slot="previous" style="${y("#ff6b6b")}">
                <h3>List (25% or 300px min)</h3>
            </div>
            <div id="details" slot="next" style="${y("#4ecdc4")}">
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Previous panel respects min-size",async()=>{await x(()=>{const n=t.querySelector("cosmoz-resizable-view").shadowRoot.querySelector(".panel[data-panel='previous']");p(n.offsetWidth).toBeGreaterThanOrEqual(300)})})}},H={render:()=>E`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px;"
            reversed
            initial-size="50%"
        >
            <div slot="previous" id="prev" style="${y("#ff6b6b")}">
                <h3>Previous (visually right)</h3>
            </div>
            <div slot="next" id="next" style="${y("#4ecdc4")}">
                <h3>Next (visually left)</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){const s=()=>t.querySelector("cosmoz-resizable-view"),n=()=>s().shadowRoot.querySelector(".panel[data-panel='previous']"),i=()=>s().shadowRoot.querySelector("cosmoz-resize-handle"),r=async(o,a)=>{const l=s().getBoundingClientRect();await x(()=>{i().dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:"start",mousePosition:{x:o,y:l.top}},bubbles:!0})),i().dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:"move",mousePosition:{x:o,y:l.top}},bubbles:!0})),p(n().getBoundingClientRect().width).toBe(a)})};await e("Renders with reversed visual order",async()=>{await x(()=>{const o=s();p(o.hasAttribute("reversed")).toBe(!0),p(o.reversed).toBe(!0);const a=n();p(a.getBoundingClientRect().right).toBe(o.getBoundingClientRect().right)})}),await e("Dragging resizes the previous panel from the right edge",async()=>{await r(s().getBoundingClientRect().left+150,450)}),await e("Removing reversed restores left-edge dragging",async()=>{const o=s();o.removeAttribute("reversed"),await x(()=>{p(getComputedStyle(o).flexDirection).toBe("row"),p(o.reversed).toBeFalsy(),p(n().getBoundingClientRect().left).toBe(o.getBoundingClientRect().left)}),await r(s().getBoundingClientRect().left+200,200)}),await e("Re-adding reversed resumes right-edge dragging",async()=>{const o=s();o.setAttribute("reversed",""),await x(()=>{p(getComputedStyle(o).flexDirection).toBe("row-reverse"),p(o.reversed).toBe(!0),p(n().getBoundingClientRect().right).toBe(o.getBoundingClientRect().right)}),await r(s().getBoundingClientRect().left+100,500)})}},O={render:()=>E`<cosmoz-resizable-view
            style="display:flex; width:1000px; height:300px; border:1px solid #ccc;"
            initial-size="360px"
            max-size="360"
        >
            <div id="list" slot="previous" style="${y("#ff6b6b")}">
                <h3>List (capped at 360px)</h3>
            </div>
            <div id="details" slot="next" style="${y("#4ecdc4")}">
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Previous panel capped at 360px",async()=>{const s=t.querySelector("cosmoz-resizable-view"),n=s.shadowRoot.querySelector("cosmoz-resize-handle"),i=n.getBoundingClientRect(),r=(o,a,l)=>n.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:o,mousePosition:{x:a,y:l}},bubbles:!0}));r("start",i.left,i.top),r("move",900,i.top),await x(()=>{const o=s.shadowRoot.querySelector(".panel[data-panel='previous']");p(o.offsetWidth).toBeLessThanOrEqual(360)})})}},V={render:()=>E`<cosmoz-resize-handle
            style="height: 160px; min-height: 160px;
            --cz-color-border-primary: rgb(120 125 135);
            --cz-color-border-brand: rgb(115 94 177);
            --cz-accent-color: rgb(200 0 255);"
        ></cosmoz-resize-handle>`,async play({canvasElement:t}){const e=t.querySelector("cosmoz-resize-handle");await x(()=>p(e.hasAttribute("data-direction")).toBe(!0)),e.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})),p(getComputedStyle(e,"::before").backgroundColor).toBe("rgb(115, 94, 177)"),p(getComputedStyle(e,"::before").boxShadow).toBe("none"),document.dispatchEvent(new MouseEvent("mouseup")),p(e.hasAttribute("data-dragging")).toBe(!1)}};var Ee,_e,Se;N.parameters={...N.parameters,docs:{...(Ee=N.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            initial-size="50%"
        >
            <div slot="previous" id="prev" style="\${panelStyle('#ff6b6b')}">
                <h3>Left Panel</h3>
            </div>
            <div slot="next" id="next" style="\${panelStyle('#4ecdc4')}">
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
    await step('Handle is rendered in shadow DOM between panel wrappers', async () => {
      await waitFor(() => {
        const handle = canvasElement.shadowRoot?.querySelector('cosmoz-resize-handle');
        expect(handle).not.toBeNull();
      });
    });
  }
}`,...(Se=(_e=N.parameters)==null?void 0:_e.docs)==null?void 0:Se.source}}};var Ce,$e,Be;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; flex-direction:column; width:600px; height:400px; border:1px solid #ccc;"
            direction="vertical"
            initial-size="50%"
        >
            <div slot="previous" style="\${panelStyle('#ff6b6b')} padding:20px;">
                <h3>Top Panel</h3>
            </div>
            <div slot="next" style="\${panelStyle('#4ecdc4')} padding:20px;">
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
}`,...(Be=($e=k.parameters)==null?void 0:$e.docs)==null?void 0:Be.source}}};var Re,Pe,Ae;D.parameters={...D.parameters,docs:{...(Re=D.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            initial-size="50%"
        >
            <div slot="previous" style="\${panelStyle('#ff6b6b')}">
                <h3>Left Panel</h3>
            </div>
            <cosmoz-resizable-view
                slot="next"
                direction="vertical"
                style="display:flex;"
                initial-size="50%"
            >
                <div slot="previous" style="\${panelStyle('#ffa726')} padding:10px;">
                    <h3>Top Panel</h3>
                </div>
                <div slot="next" style="\${panelStyle('#45b7d1')} padding:10px;">
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
}`,...(Ae=(Pe=D.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.source}}};var Le,Me,Te;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; width:800px; height:300px; border:1px solid #ccc;"
            initial-size="25%"
            min-size="300"
        >
            <div id="list" slot="previous" style="\${panelStyle('#ff6b6b')}">
                <h3>List (25% or 300px min)</h3>
            </div>
            <div id="details" slot="next" style="\${panelStyle('#4ecdc4')}">
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>\`,
  async play({
    canvasElement,
    step
  }) {
    await step('Previous panel respects min-size', async () => {
      await waitFor(() => {
        const el = canvasElement.querySelector('cosmoz-resizable-view') as HTMLElement;
        const panel = el.shadowRoot!.querySelector('.panel[data-panel=\\'previous\\']') as HTMLElement;
        expect(panel.offsetWidth).toBeGreaterThanOrEqual(300);
      });
    });
  }
}`,...(Te=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:Te.source}}};var qe,Ne,ke;H.parameters={...H.parameters,docs:{...(qe=H.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px;"
            reversed
            initial-size="50%"
        >
            <div slot="previous" id="prev" style="\${panelStyle('#ff6b6b')}">
                <h3>Previous (visually right)</h3>
            </div>
            <div slot="next" id="next" style="\${panelStyle('#4ecdc4')}">
                <h3>Next (visually left)</h3>
            </div>
        </cosmoz-resizable-view>\`,
  async play({
    canvasElement,
    step
  }) {
    // Typed via the HTMLElementTagNameMap augmentation.
    const getView = () => canvasElement.querySelector('cosmoz-resizable-view')!;
    const getPanel = () => getView().shadowRoot!.querySelector('.panel[data-panel=\\'previous\\']') as HTMLElement;
    const getHandle = () => getView().shadowRoot!.querySelector('cosmoz-resize-handle') as HTMLElement;
    // Retry-friendly drag: firing inside waitFor tolerates the async
    // handler swap after toggling \`reversed\`.
    const dragTo = async (x: number, width: number) => {
      const rect = getView().getBoundingClientRect();
      await waitFor(() => {
        getHandle().dispatchEvent(new CustomEvent('resize-handle', {
          detail: {
            phase: 'start',
            mousePosition: {
              x,
              y: rect.top
            }
          },
          bubbles: true
        }));
        getHandle().dispatchEvent(new CustomEvent('resize-handle', {
          detail: {
            phase: 'move',
            mousePosition: {
              x,
              y: rect.top
            }
          },
          bubbles: true
        }));
        expect(getPanel().getBoundingClientRect().width).toBe(width);
      });
    };
    await step('Renders with reversed visual order', async () => {
      await waitFor(() => {
        const el = getView();
        expect(el.hasAttribute('reversed')).toBe(true);
        expect(el.reversed).toBe(true);
        const prev = getPanel();
        expect(prev.getBoundingClientRect().right).toBe(el.getBoundingClientRect().right);
      });
    });
    await step('Dragging resizes the previous panel from the right edge', async () => {
      await dragTo(getView().getBoundingClientRect().left + 150, 450);
    });
    await step('Removing reversed restores left-edge dragging', async () => {
      const el = getView();
      el.removeAttribute('reversed');
      await waitFor(() => {
        expect(getComputedStyle(el).flexDirection).toBe('row');
        expect(el.reversed).toBeFalsy();
        expect(getPanel().getBoundingClientRect().left).toBe(el.getBoundingClientRect().left);
      });
      await dragTo(getView().getBoundingClientRect().left + 200, 200);
    });
    await step('Re-adding reversed resumes right-edge dragging', async () => {
      const el = getView();
      el.setAttribute('reversed', '');
      await waitFor(() => {
        expect(getComputedStyle(el).flexDirection).toBe('row-reverse');
        expect(el.reversed).toBe(true);
        expect(getPanel().getBoundingClientRect().right).toBe(el.getBoundingClientRect().right);
      });
      await dragTo(getView().getBoundingClientRect().left + 100, 500);
    });
  }
}`,...(ke=(Ne=H.parameters)==null?void 0:Ne.docs)==null?void 0:ke.source}}};var De,Fe,He;O.parameters={...O.parameters,docs:{...(De=O.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; width:1000px; height:300px; border:1px solid #ccc;"
            initial-size="360px"
            max-size="360"
        >
            <div id="list" slot="previous" style="\${panelStyle('#ff6b6b')}">
                <h3>List (capped at 360px)</h3>
            </div>
            <div id="details" slot="next" style="\${panelStyle('#4ecdc4')}">
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>\`,
  async play({
    canvasElement,
    step
  }) {
    await step('Previous panel capped at 360px', async () => {
      const el = canvasElement.querySelector('cosmoz-resizable-view') as HTMLElement;
      const handle = el.shadowRoot!.querySelector('cosmoz-resize-handle') as HTMLElement;
      const rect = handle.getBoundingClientRect();
      const fire = (phase: string, x: number, y: number) => handle.dispatchEvent(new CustomEvent('resize-handle', {
        detail: {
          phase,
          mousePosition: {
            x,
            y
          }
        },
        bubbles: true
      }));
      fire('start', rect.left, rect.top);
      fire('move', 900, rect.top);
      await waitFor(() => {
        const panel = el.shadowRoot!.querySelector('.panel[data-panel=\\'previous\\']') as HTMLElement;
        expect(panel.offsetWidth).toBeLessThanOrEqual(360);
      });
    });
  }
}`,...(He=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:He.source}}};var Oe,Ve,Ie;V.parameters={...V.parameters,docs:{...(Oe=V.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resize-handle
            style="height: 160px; min-height: 160px;
            --cz-color-border-primary: rgb(120 125 135);
            --cz-color-border-brand: rgb(115 94 177);
            --cz-accent-color: rgb(200 0 255);"
        ></cosmoz-resize-handle>\`,
  async play({
    canvasElement
  }) {
    const handle = canvasElement.querySelector('cosmoz-resize-handle')!;
    await waitFor(() => expect(handle.hasAttribute('data-direction')).toBe(true));
    handle.dispatchEvent(new MouseEvent('mousedown', {
      bubbles: true
    }));
    expect(getComputedStyle(handle, '::before').backgroundColor).toBe('rgb(115, 94, 177)');
    expect(getComputedStyle(handle, '::before').boxShadow).toBe('none');
    document.dispatchEvent(new MouseEvent('mouseup'));
    expect(handle.hasAttribute('data-dragging')).toBe(false);
  }
}`,...(Ie=(Ve=V.parameters)==null?void 0:Ve.docs)==null?void 0:Ie.source}}};const Kt=["BasicDemo","VerticalDemo","MultiplePanels","ListDetailsSplit","ReversedDemo","CappedInitialSize","ThinDragFeedback"];export{N as BasicDemo,O as CappedInitialSize,F as ListDetailsSplit,D as MultiplePanels,H as ReversedDemo,V as ThinDragFeedback,k as VerticalDemo,Kt as __namedExportsOrder,Jt as default};
