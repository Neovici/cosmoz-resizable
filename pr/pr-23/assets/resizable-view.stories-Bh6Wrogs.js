var Ue=Object.defineProperty;var Ve=(t,e,s)=>e in t?Ue(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var c=(t,e,s)=>Ve(t,typeof e!="symbol"?e+"":e,s);import{f as We,B as Qe,E as Y,x as M}from"./iframe-BDCaF1WR.js";import"./preload-helper-C1FmrZbK.js";let I,Be=0;function re(t){I=t}function ae(){I=null,Be=0}function Xe(){return Be++}const V=Symbol("haunted.phase"),H=Symbol("haunted.hook"),le=Symbol("haunted.update"),ce=Symbol("haunted.commit"),S=Symbol("haunted.effects"),N=Symbol("haunted.layoutEffects"),J="haunted.context";var be,xe,ye;ye=H,xe=S,be=N;class Ye{constructor(e,s){c(this,"update");c(this,"host");c(this,"virtual");c(this,ye);c(this,xe);c(this,be);this.update=e,this.host=s,this[H]=new Map,this[S]=[],this[N]=[]}run(e){re(this);let s=e();return ae(),s}_runEffects(e){let s=this[e];re(this);for(let n of s)n.call(this);ae()}runEffects(){this._runEffects(S)}runLayoutEffects(){this._runEffects(N)}teardown(){this[H].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class Je extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const Ke=100,Ze=Promise.resolve().then.bind(Promise.resolve());function Te(){let t=[],e;function s(){e=null;let n=t;t=[];for(var i=0,o=n.length;i<o;i++)n[i]()}return function(n){t.push(n),e==null&&(e=Ze(s))}}const et=Te(),de=Te();var ze;ze=V;const j=class j{constructor(e,s){c(this,"renderer");c(this,"host");c(this,"state");c(this,ze);c(this,"_updateQueued");c(this,"_active");c(this,"_updateCount");c(this,"_processing");this.renderer=e,this.host=s,this.state=new Ye(this.update.bind(this),s),this[V]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>j.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new Je(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,et(()=>{let e=this.handlePhase(le);de(()=>{this.handlePhase(ce,e),de(()=>{this.handlePhase(S),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[V]=e,e){case ce:this.commit(s),this.runEffects(N);return;case le:return this.render();case S:return this.runEffects(S)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};c(j,"maxUpdates",Ke);let K=j;const tt=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},st=t=>t==null?void 0:t.map(e=>typeof e=="string"?tt(e):e),nt=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),De=nt,it=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function ot(t){class e extends K{constructor(o,l,r){super(o,r||l);c(this,"frag");c(this,"renderResult");this.frag=l}commit(o){this.renderResult=t(o,this.frag)}}function s(n,i,o){const l=(o||i||{}).baseElement||HTMLElement,{observedAttributes:r=[],useShadowDOM:a=!0,shadowRootInit:u={},styleSheets:p}=o||i||{},d=st(n.styleSheets||p);class y extends l{constructor(){super();c(this,"_scheduler");if(a===!1)this._scheduler=new e(n,this);else{const h=this.attachShadow({mode:"open",...u});d&&(h.adoptedStyleSheets=d),this._scheduler=new e(n,h,this)}}static get observedAttributes(){return n.observedAttributes||r||[]}connectedCallback(){var h;this._scheduler.resume(),this._scheduler.update(),(h=this._scheduler.renderResult)==null||h.setConnected(!0)}disconnectedCallback(){var h;this._scheduler.pause(),this._scheduler.teardown(),(h=this._scheduler.renderResult)==null||h.setConnected(!1)}attributeChangedCallback(h,b,f){if(b===f)return;let U=f===""?!0:f;Reflect.set(this,it(h),U)}}function _(m){let v=m,h=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return v},set(b){h&&v===b||(h=!0,v=b,this._scheduler&&this._scheduler.update())}})}const z=new Proxy(l.prototype,{getPrototypeOf(m){return m},set(m,v,h,b){let f;return v in m?(f=Object.getOwnPropertyDescriptor(m,v),f&&f.set?(f.set.call(b,h),!0):(Reflect.set(m,v,h,b),!0)):(typeof v=="symbol"||v[0]==="_"?f={enumerable:!0,configurable:!0,writable:!0,value:h}:f=_(h),Object.defineProperty(b,v,f),f.set&&f.set.call(b,h),!0)}});return Object.setPrototypeOf(y.prototype,z),y}return s}class C{constructor(e,s){c(this,"id");c(this,"state");this.id=e,this.state=s}}function rt(t,...e){let s=Xe(),n=I[H],i=n.get(s);return i||(i=new t(s,I,...e),n.set(s,i)),i.update(...e)}function P(t){return rt.bind(null,t)}function Oe(t){return P(class extends C{constructor(s,n,i,o){super(s,n);c(this,"callback");c(this,"lastValues");c(this,"values");c(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function Fe(t,e){t[S].push(e)}const R=Oe(Fe),at=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,lt=P(class extends C{constructor(e,s,n){super(e,s);c(this,"Context");c(this,"value");c(this,"_ranEffect");c(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Fe(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};at(this.state.host).dispatchEvent(new CustomEvent(J,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:o}=s;this.value=i?o:e.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function ct(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();c(this,"listeners");c(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(J,this)}disconnectedCallback(){this.removeEventListener(J,this)}handleEvent(i){const{detail:o}=i;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let o of this.listeners)o(i)}get value(){return this._value}},Consumer:t(function({render:n}){const i=lt(s);return n(i)},{useShadowDOM:!1}),defaultValue:e};return s}}const Z=P(class extends C{constructor(e,s,n,i){super(e,s);c(this,"value");c(this,"values");this.value=n(),this.values=i}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}}),ue=(t,e)=>Z(()=>t,e);function dt(t,e){t[N].push(e)}Oe(dt);const ut=P(class extends C{constructor(e,s,n){super(e,s);c(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});P(class extends C{constructor(e,s,n,i,o){super(e,s);c(this,"reducer");c(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=o!==void 0?o(i):i}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const ht=/([A-Z])/gu;P(class extends C{constructor(e,s,n,i){super(e,s);c(this,"property");c(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(ht,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof i=="function"&&(i=i()),i!=null&&this.updater(i,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],n=typeof e=="function"?e:void 0,i=n?n(s):e;return[s,i,n]}notify(e,s){const n=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,s=!1){const[n,i,o]=this.resolve(e),l=this.notify(i,o);!s&&l.defaultPrevented||Object.is(n,i)||(this.state.host[this.property]=i)}});function pt(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function g(t){return Z(()=>pt(t),[])}const He=P(class extends C{update(){return this.state.host}});function vt({render:t}){const e=ot(t),s=ct(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft={CHILD:2},mt=t=>(...e)=>({_$litDirective$:t,values:e});class bt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=(t,e)=>{var n;const s=t._$AN;if(s===void 0)return!1;for(const i of s)(n=i._$AO)==null||n.call(i,e,!1),k(i,e);return!0},G=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},Ie=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),zt(e)}};function xt(t){this._$AN!==void 0?(G(this),this._$AM=t,Ie(this)):this._$AM=t}function yt(t,e=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let o=s;o<n.length;o++)k(n[o],!1),G(n[o]);else n!=null&&(k(n,!1),G(n));else k(this,t)}const zt=t=>{t.type==ft.CHILD&&(t._$AP??(t._$AP=yt),t._$AQ??(t._$AQ=xt))};class wt extends bt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),Ie(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,i;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),s&&(k(this,e),G(this))}setValue(e){if(We(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:Ge}=vt({render:Qe}),W=new WeakMap,L=mt(class extends wt{render(t){return Y}update(t,[e]){var n;const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=(n=t.options)==null?void 0:n.host,this.rt(this.ct=t.element)),Y}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=W.get(e);s===void 0&&(s=new WeakMap,W.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=W.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),gt=t=>{if(typeof t!="object"||t==null)return!1;const e=t;return typeof e.px=="number"&&e.px>=0&&!Number.isNaN(e.px)},he=t=>{try{const e=JSON.parse(t);if(gt(e))return e}catch{}},_t=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const n=new Map,i=()=>{s=void 0;for(const[r,a]of n)try{localStorage.setItem(t+r,JSON.stringify(a))}catch{}n.clear()},o=(r,a)=>{n.set(r,a),s==null&&(s=setTimeout(i,100))},l=r=>{if(r.key==null||!r.key.startsWith(t)||r.newValue==null)return;const a=r.key.slice(t.length),u=he(r.newValue);if(u==null)return;const p=e.get(a);if(p)for(const d of p)d(u)};return typeof window<"u"&&window.addEventListener("storage",l),{get(r){let a;try{a=localStorage.getItem(t+r)}catch{return}if(a!=null)return he(a)},set(r,a){o(r,a)},subscribe(r,a){let u=e.get(r);return u||(u=new Set,e.set(r,u)),u.add(a),()=>{const p=e.get(r);p&&(p.delete(a),p.size===0&&e.delete(r))}},destroy(){typeof window<"u"&&window.removeEventListener("storage",l),s!=null&&(clearTimeout(s),i())}}},Et=(t,e,s)=>{const n=g(s);if(n.current=s,R(()=>{var l,r;if(!t||!e)return;const i=t.get(e);(l=n.current)==null||l.call(n,i);const o=(r=t.subscribe)==null?void 0:r.call(t,e,a=>{var u;return(u=n.current)==null?void 0:u.call(n,a)});return()=>{var a;o==null||o(),(a=t.destroy)==null||a.call(t)}},[t,e]),!(!t||!e))return i=>t.set(e,i)},pe=t=>{const e=t.trim();if(e==="")return e;const s=Number(e);return Number.isNaN(s)?e:`${s}px`},St=t=>{if(t==null||t.trim()==="")return{};const e=t.includes(",")?t.split(/,\s*/u):t.match(/(?:[^\s()]+\([^)]*\)|\([^)]*\)|[^\s]+)/gu)??[t];return{previous:pe(e[0]),next:e.length>1?pe(e[1]):void 0}},$t=De`
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
		flex: 1 1 0 !important;
	}

	cosmoz-resize-handle {
		flex: 0 0 auto;
	}

	:host([data-single-panel]) cosmoz-resize-handle {
		display: none;
	}
`,Q=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},Ct=(t,e,s)=>s==="horizontal"?t.x-e.left:t.y-e.top,q=t=>{const e=parseFloat(t);return Number.isNaN(e)?void 0:e},Pt=(t,e)=>{const s=getComputedStyle(t),n=e==="horizontal"?q(s.minWidth)??0:q(s.minHeight)??0,i=e==="horizontal"?q(s.maxWidth)??1/0:q(s.maxHeight)??1/0;return{min:n,max:i}},ve=t=>({rect:t.container.getBoundingClientRect(),bounds:Pt(t.previous,t.direction)}),At=(t,e,s,n)=>{const i=Ct(t,e,s);return Math.max(Math.min(i,n.max),n.min)},Lt=t=>{let e;return s=>{var l,r;const{phase:n,mousePosition:i}=s.detail;if(n==="start"){e=ve(t);return}if(n!=="move"&&n!=="end")return;e||(e=ve(t));const o=At(i,e.rect,t.direction,e.bounds);n==="move"?(l=t.onResize)==null||l.call(t,o):((r=t.onResizeEnd)==null||r.call(t),e=void 0)}},Rt=(t="horizontal")=>{const e=He();return R(()=>{e.setAttribute("data-direction",t)},[t]),R(()=>{const s=(d,y)=>{e.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:d,mousePosition:y},bubbles:!0}))};let n=0,i;const o=()=>{n=0,i&&(s("move",i),i=void 0)},l=d=>{i=Q(d),n||(n=requestAnimationFrame(o))},r=d=>{n&&(cancelAnimationFrame(n),o()),e.removeAttribute("data-dragging"),s("end",Q(d)),document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",l),document.removeEventListener("touchend",r)},a=d=>{e.setAttribute("data-dragging","true"),s("start",Q(d)),document.addEventListener("mousemove",l),document.addEventListener("mouseup",r),document.addEventListener("touchmove",l,{passive:!1}),document.addEventListener("touchend",r)},u=d=>{d.preventDefault(),a(d)},p=d=>{d.preventDefault(),a(d)};return e.addEventListener("mousedown",u),e.addEventListener("touchstart",p,{passive:!1}),()=>{n&&cancelAnimationFrame(n),e.removeEventListener("mousedown",u),e.removeEventListener("touchstart",p),document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",l),document.removeEventListener("touchend",r)}},[e]),null},Mt=De`
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

	:host(:hover)::before,
	:host([data-dragging])::before {
		background: var(--cz-accent-color);
		box-shadow: -1px 0 0 1px var(--cz-accent-color);
	}

	:host([data-direction='vertical']:hover)::before,
	:host([data-direction='vertical'][data-dragging])::before {
		box-shadow: 0 -1px 0 1px var(--cz-accent-color);
	}
`,Nt=({direction:t="horizontal"})=>(Rt(t),Y);customElements.define("cosmoz-resize-handle",Ge(Nt,{styleSheets:[Mt],observedAttributes:["direction"]}));const kt=t=>getComputedStyle(t).display!=="none",fe=t=>t==null?void 0:t.assignedElements()[0],me=t=>(t==null?void 0:t.assignedElements().some(e=>kt(e)))??!1,qt=(t,e,s,n,i)=>{const o=()=>{const a=me(s),u=me(i);e.toggleAttribute("data-hidden",!a),n.toggleAttribute("data-hidden",!u),t.toggleAttribute("data-single-panel",!(a&&u))},l=new ResizeObserver(()=>queueMicrotask(o)),r=a=>{a==null||a.assignedElements().forEach(u=>l.observe(u))};return r(s),r(i),o(),l},Bt=(t,e)=>{if(e==null){t.style.flexBasis="";return}t.style.flexBasis=`${e.px}px`},X=(t,e,s,n,i)=>{const o=(l,r)=>{const{previous:a,next:u}=St(r??null),p=`--resizable-previous-${e}${l}`,d=`--resizable-next-${e}${l}`;a!=null?t.style.setProperty(p,a):t.style.removeProperty(p),u!=null?t.style.setProperty(d,u):t.style.removeProperty(d)};o("",s),o("-horizontal",n),o("-vertical",i)},Tt=({host:t,handle:e,direction:s,persistRef:n,prevPanelRef:i,nextPanelRef:o,prevSlotRef:l,nextSlotRef:r})=>{const a=i.current,u=o.current,p=fe(l.current),d=fe(r.current);if(!a||!u||!p||!d||!e)return;const y=Lt({container:t,previous:a,direction:s,onResize:z=>{a.style.flexBasis=`${z}px`},onResizeEnd:()=>{requestAnimationFrame(()=>{var v;const z=a.getBoundingClientRect(),m=s==="horizontal"?z.width:z.height;(v=n.current)==null||v.call(n,{px:m})})}});e.addEventListener("resize-handle",y);const _=qt(t,a,l.current,u,r.current);return()=>{e.removeEventListener("resize-handle",y),_.disconnect()}},Dt=({direction:t="horizontal",persist:e,initialSize:s,initialSizeHorizontal:n,initialSizeVertical:i,minSize:o,minSizeHorizontal:l,minSizeVertical:r,maxSize:a,maxSizeHorizontal:u,maxSizeVertical:p})=>{const d=He(),y=g(),_=g(),z=g(),m=g(),v=g(),h=g(),[b,f]=ut(!1),U=e?`${e}:${t}`:void 0,ee=Z(()=>e?_t():void 0,[e]),te=Et(ee,U,E=>{const A=v.current;A&&Bt(A,E)}),se=g(te);se.current=te;const ne=ue(()=>{var ie,oe;const E=(ie=_.current)==null?void 0:ie.assignedElements()[0],A=(oe=z.current)==null?void 0:oe.assignedElements()[0];E&&A&&f(!0)},[]),je=ue(()=>{var E;(E=m.current)==null||E.assignedElements().forEach(A=>A.setAttribute("slot","previous"))},[]);return R(()=>{d.setAttribute("data-direction",t)},[t]),R(()=>{X(d,"basis",s,n,i),X(d,"min",o,l,r),X(d,"max",a,u,p)},[d,s,n,i,o,l,r,a,u,p]),R(()=>b?Tt({host:d,handle:y.current,direction:t,persistRef:se,prevPanelRef:v,nextPanelRef:h,prevSlotRef:_,nextSlotRef:z}):void 0,[t,ee,e,d,b]),M`<slot
			${L(m)}
			@slotchange=${je}
		></slot>
		<div
			class="panel"
			data-panel="previous"
			${L(v)}
			part="panel-previous"
		>
			<slot
				name="previous"
				${L(_)}
				@slotchange=${ne}
			></slot>
		</div>
		<cosmoz-resize-handle
			direction=${t}
			${L(y)}
		></cosmoz-resize-handle>
		<div class="panel" data-panel="next" ${L(h)} part="panel-next">
			<slot name="next" ${L(z)} @slotchange=${ne}></slot>
		</div>`};customElements.define("cosmoz-resizable-view",Ge(Dt,{styleSheets:[$t],observedAttributes:["direction","persist","initial-size","initial-size-horizontal","initial-size-vertical","min-size","min-size-horizontal","min-size-vertical","max-size","max-size-horizontal","max-size-vertical"]}));const{expect:w,waitFor:$}=__STORYBOOK_MODULE_TEST__,It={title:"Components/ResizableView",tags:["autodocs"]},x=t=>`background:${t}; display:flex; align-items:center; justify-content:center; color:white;`,B={render:()=>M`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            initial-size="50%"
        >
            <div slot="previous" id="prev" style="${x("#ff6b6b")}">
                <h3>Left Panel</h3>
            </div>
            <div slot="next" id="next" style="${x("#4ecdc4")}">
                <h3>Right Panel</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await $(()=>{const s=t.querySelector("#prev");w(s).not.toBeNull()}),w(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered in shadow DOM between panel wrappers",async()=>{await $(()=>{var n;const s=(n=t.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");w(s).not.toBeNull()})})}},T={render:()=>M`<cosmoz-resizable-view
            style="display:flex; flex-direction:column; width:600px; height:400px; border:1px solid #ccc;"
            direction="vertical"
            initial-size="50%"
        >
            <div slot="previous" style="${x("#ff6b6b")} padding:20px;">
                <h3>Top Panel</h3>
            </div>
            <div slot="next" style="${x("#4ecdc4")} padding:20px;">
                <h3>Bottom Panel</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{const s=t.querySelector("cosmoz-resizable-view");await $(()=>{w(s.getAttribute("data-direction")).toBe("vertical")}),await $(()=>{var i;const n=(i=s.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle");w(n==null?void 0:n.getAttribute("data-direction")).toBe("vertical")})})}},D={render:()=>M`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            initial-size="50%"
        >
            <div slot="previous" style="${x("#ff6b6b")}">
                <h3>Left Panel</h3>
            </div>
            <cosmoz-resizable-view
                slot="next"
                direction="vertical"
                style="display:flex;"
                initial-size="50%"
            >
                <div slot="previous" style="${x("#ffa726")} padding:10px;">
                    <h3>Top Panel</h3>
                </div>
                <div slot="next" style="${x("#45b7d1")} padding:10px;">
                    <h3>Bottom Panel</h3>
                </div>
            </cosmoz-resizable-view>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await $(()=>{var i,o;const s=(i=t.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle");w(s).not.toBeNull();const n=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");w(n).not.toBeNull(),w((o=n==null?void 0:n.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle")).not.toBeNull()})})}},O={render:()=>M`<cosmoz-resizable-view
            style="display:flex; width:800px; height:300px; border:1px solid #ccc;"
            initial-size="25%"
            min-size="300"
        >
            <div id="list" slot="previous" style="${x("#ff6b6b")}">
                <h3>List (25% or 300px min)</h3>
            </div>
            <div id="details" slot="next" style="${x("#4ecdc4")}">
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Previous panel respects min-size",async()=>{await $(()=>{const n=t.querySelector("cosmoz-resizable-view").shadowRoot.querySelector(".panel[data-panel='previous']");w(n.offsetWidth).toBeGreaterThanOrEqual(300)})})}},F={render:()=>M`<cosmoz-resizable-view
            style="display:flex; width:1000px; height:300px; border:1px solid #ccc;"
            initial-size="360px"
            max-size="360"
        >
            <div id="list" slot="previous" style="${x("#ff6b6b")}">
                <h3>List (capped at 360px)</h3>
            </div>
            <div id="details" slot="next" style="${x("#4ecdc4")}">
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Previous panel capped at 360px",async()=>{const s=t.querySelector("cosmoz-resizable-view"),n=s.shadowRoot.querySelector("cosmoz-resize-handle"),i=n.getBoundingClientRect(),o=(l,r,a)=>n.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:l,mousePosition:{x:r,y:a}},bubbles:!0}));o("start",i.left,i.top),o("move",900,i.top),await $(()=>{const l=s.shadowRoot.querySelector(".panel[data-panel='previous']");w(l.offsetWidth).toBeLessThanOrEqual(360)})})}};var we,ge,_e;B.parameters={...B.parameters,docs:{...(we=B.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(_e=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:_e.source}}};var Ee,Se,$e;T.parameters={...T.parameters,docs:{...(Ee=T.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...($e=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:$e.source}}};var Ce,Pe,Ae;D.parameters={...D.parameters,docs:{...(Ce=D.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ae=(Pe=D.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.source}}};var Le,Re,Me;O.parameters={...O.parameters,docs:{...(Le=O.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Me=(Re=O.parameters)==null?void 0:Re.docs)==null?void 0:Me.source}}};var Ne,ke,qe;F.parameters={...F.parameters,docs:{...(Ne=F.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(qe=(ke=F.parameters)==null?void 0:ke.docs)==null?void 0:qe.source}}};const Gt=["BasicDemo","VerticalDemo","MultiplePanels","ListDetailsSplit","CappedInitialSize"];export{B as BasicDemo,F as CappedInitialSize,O as ListDetailsSplit,D as MultiplePanels,T as VerticalDemo,Gt as __namedExportsOrder,It as default};
