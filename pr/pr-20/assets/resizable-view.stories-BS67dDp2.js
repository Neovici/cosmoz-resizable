var Ie=Object.defineProperty;var Ge=(t,e,s)=>e in t?Ie(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var l=(t,e,s)=>Ge(t,typeof e!="symbol"?e+"":e,s);import{f as je,B as Ve,E as Q,x as M}from"./iframe-CifKpmR-.js";import"./preload-helper-C1FmrZbK.js";let I,Ne=0;function te(t){I=t}function se(){I=null,Ne=0}function Ue(){return Ne++}const V=Symbol("haunted.phase"),H=Symbol("haunted.hook"),ne=Symbol("haunted.update"),ie=Symbol("haunted.commit"),S=Symbol("haunted.effects"),N=Symbol("haunted.layoutEffects"),X="haunted.context";var ve,fe,me;me=H,fe=S,ve=N;class We{constructor(e,s){l(this,"update");l(this,"host");l(this,"virtual");l(this,me);l(this,fe);l(this,ve);this.update=e,this.host=s,this[H]=new Map,this[S]=[],this[N]=[]}run(e){te(this);let s=e();return se(),s}_runEffects(e){let s=this[e];te(this);for(let n of s)n.call(this);se()}runEffects(){this._runEffects(S)}runLayoutEffects(){this._runEffects(N)}teardown(){this[H].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class Qe extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const Xe=100,Ye=Promise.resolve().then.bind(Promise.resolve());function ke(){let t=[],e;function s(){e=null;let n=t;t=[];for(var i=0,o=n.length;i<o;i++)n[i]()}return function(n){t.push(n),e==null&&(e=Ye(s))}}const Je=ke(),oe=ke();var be;be=V;const j=class j{constructor(e,s){l(this,"renderer");l(this,"host");l(this,"state");l(this,be);l(this,"_updateQueued");l(this,"_active");l(this,"_updateCount");l(this,"_processing");this.renderer=e,this.host=s,this.state=new We(this.update.bind(this),s),this[V]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>j.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new Qe(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,Je(()=>{let e=this.handlePhase(ne);oe(()=>{this.handlePhase(ie,e),oe(()=>{this.handlePhase(S),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[V]=e,e){case ie:this.commit(s),this.runEffects(N);return;case ne:return this.render();case S:return this.runEffects(S)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};l(j,"maxUpdates",Xe);let Y=j;const Ke=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Ze=t=>t==null?void 0:t.map(e=>typeof e=="string"?Ke(e):e),et=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),qe=et,tt=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function st(t){class e extends Y{constructor(o,c,a){super(o,a||c);l(this,"frag");l(this,"renderResult");this.frag=c}commit(o){this.renderResult=t(o,this.frag)}}function s(n,i,o){const c=(o||i||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:r=!0,shadowRootInit:u={},styleSheets:p}=o||i||{},d=Ze(n.styleSheets||p);class x extends c{constructor(){super();l(this,"_scheduler");if(r===!1)this._scheduler=new e(n,this);else{const h=this.attachShadow({mode:"open",...u});d&&(h.adoptedStyleSheets=d),this._scheduler=new e(n,h,this)}}static get observedAttributes(){return n.observedAttributes||a||[]}connectedCallback(){var h;this._scheduler.resume(),this._scheduler.update(),(h=this._scheduler.renderResult)==null||h.setConnected(!0)}disconnectedCallback(){var h;this._scheduler.pause(),this._scheduler.teardown(),(h=this._scheduler.renderResult)==null||h.setConnected(!1)}attributeChangedCallback(h,b,f){if(b===f)return;let q=f===""?!0:f;Reflect.set(this,tt(h),q)}}function _(m){let v=m,h=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return v},set(b){h&&v===b||(h=!0,v=b,this._scheduler&&this._scheduler.update())}})}const z=new Proxy(c.prototype,{getPrototypeOf(m){return m},set(m,v,h,b){let f;return v in m?(f=Object.getOwnPropertyDescriptor(m,v),f&&f.set?(f.set.call(b,h),!0):(Reflect.set(m,v,h,b),!0)):(typeof v=="symbol"||v[0]==="_"?f={enumerable:!0,configurable:!0,writable:!0,value:h}:f=_(h),Object.defineProperty(b,v,f),f.set&&f.set.call(b,h),!0)}});return Object.setPrototypeOf(x.prototype,z),x}return s}class C{constructor(e,s){l(this,"id");l(this,"state");this.id=e,this.state=s}}function nt(t,...e){let s=Ue(),n=I[H],i=n.get(s);return i||(i=new t(s,I,...e),n.set(s,i)),i.update(...e)}function P(t){return nt.bind(null,t)}function Be(t){return P(class extends C{constructor(s,n,i,o){super(s,n);l(this,"callback");l(this,"lastValues");l(this,"values");l(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function Te(t,e){t[S].push(e)}const R=Be(Te),it=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,ot=P(class extends C{constructor(e,s,n){super(e,s);l(this,"Context");l(this,"value");l(this,"_ranEffect");l(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Te(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};it(this.state.host).dispatchEvent(new CustomEvent(X,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:o}=s;this.value=i?o:e.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function rt(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();l(this,"listeners");l(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(X,this)}disconnectedCallback(){this.removeEventListener(X,this)}handleEvent(i){const{detail:o}=i;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let o of this.listeners)o(i)}get value(){return this._value}},Consumer:t(function({render:n}){const i=ot(s);return n(i)},{useShadowDOM:!1}),defaultValue:e};return s}}const J=P(class extends C{constructor(e,s,n,i){super(e,s);l(this,"value");l(this,"values");this.value=n(),this.values=i}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}}),re=(t,e)=>J(()=>t,e);function at(t,e){t[N].push(e)}Be(at);const lt=P(class extends C{constructor(e,s,n){super(e,s);l(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});P(class extends C{constructor(e,s,n,i,o){super(e,s);l(this,"reducer");l(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=o!==void 0?o(i):i}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const ct=/([A-Z])/gu;P(class extends C{constructor(e,s,n,i){super(e,s);l(this,"property");l(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(ct,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof i=="function"&&(i=i()),i!=null&&this.updater(i,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],n=typeof e=="function"?e:void 0,i=n?n(s):e;return[s,i,n]}notify(e,s){const n=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,s=!1){const[n,i,o]=this.resolve(e),c=this.notify(i,o);!s&&c.defaultPrevented||Object.is(n,i)||(this.state.host[this.property]=i)}});function ut(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function g(t){return J(()=>ut(t),[])}const De=P(class extends C{update(){return this.state.host}});function dt({render:t}){const e=st(t),s=rt(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht={CHILD:2},pt=t=>(...e)=>({_$litDirective$:t,values:e});class vt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=(t,e)=>{var n;const s=t._$AN;if(s===void 0)return!1;for(const i of s)(n=i._$AO)==null||n.call(i,e,!1),k(i,e);return!0},G=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},Oe=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),bt(e)}};function ft(t){this._$AN!==void 0?(G(this),this._$AM=t,Oe(this)):this._$AM=t}function mt(t,e=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let o=s;o<n.length;o++)k(n[o],!1),G(n[o]);else n!=null&&(k(n,!1),G(n));else k(this,t)}const bt=t=>{t.type==ht.CHILD&&(t._$AP??(t._$AP=mt),t._$AQ??(t._$AQ=ft))};class yt extends vt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),Oe(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,i;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),s&&(k(this,e),G(this))}setValue(e){if(je(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:Fe}=dt({render:Ve}),U=new WeakMap,L=pt(class extends yt{render(t){return Q}update(t,[e]){var n;const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=(n=t.options)==null?void 0:n.host,this.rt(this.ct=t.element)),Q}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=U.get(e);s===void 0&&(s=new WeakMap,U.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=U.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),xt=t=>{if(typeof t!="object"||t==null)return!1;const e=t;return typeof e.px=="number"&&e.px>=0&&!Number.isNaN(e.px)},ae=t=>{try{const e=JSON.parse(t);if(xt(e))return e}catch{}},wt=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const n=new Map,i=()=>{s=void 0;for(const[a,r]of n)try{localStorage.setItem(t+a,JSON.stringify(r))}catch{}n.clear()},o=(a,r)=>{n.set(a,r),s==null&&(s=setTimeout(i,100))},c=a=>{if(a.key==null||!a.key.startsWith(t)||a.newValue==null)return;const r=a.key.slice(t.length),u=ae(a.newValue);if(u==null)return;const p=e.get(r);if(p)for(const d of p)d(u)};return typeof window<"u"&&window.addEventListener("storage",c),{get(a){let r;try{r=localStorage.getItem(t+a)}catch{return}if(r!=null)return ae(r)},set(a,r){o(a,r)},subscribe(a,r){let u=e.get(a);return u||(u=new Set,e.set(a,u)),u.add(r),()=>{const p=e.get(a);p&&(p.delete(r),p.size===0&&e.delete(a))}},destroy(){typeof window<"u"&&window.removeEventListener("storage",c),s!=null&&(clearTimeout(s),i())}}},zt=(t,e,s)=>{const n=g(s);if(n.current=s,R(()=>{var c,a;if(!t||!e)return;const i=t.get(e);(c=n.current)==null||c.call(n,i);const o=(a=t.subscribe)==null?void 0:a.call(t,e,r=>{var u;return(u=n.current)==null?void 0:u.call(n,r)});return()=>{var r;o==null||o(),(r=t.destroy)==null||r.call(t)}},[t,e]),!(!t||!e))return i=>t.set(e,i)},le=t=>{const e=t.trim();if(e==="")return e;const s=Number(e);return Number.isNaN(s)?e:`${s}px`},gt=t=>{if(t==null||t.trim()==="")return{};const e=t.includes(",")?t.split(/,\s*/u):t.match(/(?:[^\s()]+\([^)]*\)|\([^)]*\)|[^\s]+)/gu)??[t];return{previous:le(e[0]),next:e.length>1?le(e[1]):void 0}},_t=qe`
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
`,W=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},Et=(t,e,s)=>s==="horizontal"?t.x-e.left:t.y-e.top,ce=t=>{const e=parseFloat(t);return Number.isNaN(e)?void 0:e},St=(t,e)=>{const s=getComputedStyle(t);return{min:e==="horizontal"?ce(s.minWidth)??0:ce(s.minHeight)??0}},ue=t=>({rect:t.container.getBoundingClientRect(),bounds:St(t.previous,t.direction)}),$t=(t,e,s,n)=>Math.max(n.min,Et(t,e,s)),Ct=t=>{let e;return s=>{var c,a;const{phase:n,mousePosition:i}=s.detail;if(n==="start"){e=ue(t);return}if(n!=="move"&&n!=="end")return;e||(e=ue(t));const o=$t(i,e.rect,t.direction,e.bounds);n==="move"?(c=t.onResize)==null||c.call(t,o):((a=t.onResizeEnd)==null||a.call(t),e=void 0)}},Pt=(t="horizontal")=>{const e=De();return R(()=>{e.setAttribute("data-direction",t)},[t]),R(()=>{const s=(d,x)=>{e.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:d,mousePosition:x},bubbles:!0}))};let n=0,i;const o=()=>{n=0,i&&(s("move",i),i=void 0)},c=d=>{i=W(d),n||(n=requestAnimationFrame(o))},a=d=>{n&&(cancelAnimationFrame(n),o()),e.removeAttribute("data-dragging"),s("end",W(d)),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",a)},r=d=>{e.setAttribute("data-dragging","true"),s("start",W(d)),document.addEventListener("mousemove",c),document.addEventListener("mouseup",a),document.addEventListener("touchmove",c,{passive:!1}),document.addEventListener("touchend",a)},u=d=>{d.preventDefault(),r(d)},p=d=>{d.preventDefault(),r(d)};return e.addEventListener("mousedown",u),e.addEventListener("touchstart",p,{passive:!1}),()=>{n&&cancelAnimationFrame(n),e.removeEventListener("mousedown",u),e.removeEventListener("touchstart",p),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",a)}},[e]),null},At=qe`
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
`,Lt=({direction:t="horizontal"})=>(Pt(t),Q);customElements.define("cosmoz-resize-handle",Fe(Lt,{styleSheets:[At],observedAttributes:["direction"]}));const Rt=t=>getComputedStyle(t).display!=="none",de=t=>t==null?void 0:t.assignedElements()[0],he=t=>(t==null?void 0:t.assignedElements().some(e=>Rt(e)))??!1,Mt=(t,e,s,n,i)=>{const o=()=>{const r=he(s),u=he(i);e.toggleAttribute("data-hidden",!r),n.toggleAttribute("data-hidden",!u),t.toggleAttribute("data-single-panel",!(r&&u))},c=new ResizeObserver(()=>queueMicrotask(o)),a=r=>{r==null||r.assignedElements().forEach(u=>c.observe(u))};return a(s),a(i),o(),c},Nt=(t,e)=>{if(e==null){t.style.flexBasis="";return}t.style.flexBasis=`${e.px}px`},pe=(t,e,s,n,i)=>{const o=(c,a)=>{const{previous:r,next:u}=gt(a??null),p=`--resizable-previous-${e}${c}`,d=`--resizable-next-${e}${c}`;r!=null?t.style.setProperty(p,r):t.style.removeProperty(p),u!=null?t.style.setProperty(d,u):t.style.removeProperty(d)};o("",s),o("-horizontal",n),o("-vertical",i)},kt=({host:t,handle:e,direction:s,persistRef:n,prevPanelRef:i,nextPanelRef:o,prevSlotRef:c,nextSlotRef:a})=>{const r=i.current,u=o.current,p=de(c.current),d=de(a.current);if(!r||!u||!p||!d||!e)return;const x=Ct({container:t,previous:r,direction:s,onResize:z=>{r.style.flexBasis=`${z}px`},onResizeEnd:()=>{requestAnimationFrame(()=>{var v;const z=r.getBoundingClientRect(),m=s==="horizontal"?z.width:z.height;(v=n.current)==null||v.call(n,{px:m})})}});e.addEventListener("resize-handle",x);const _=Mt(t,r,c.current,u,a.current);return()=>{e.removeEventListener("resize-handle",x),_.disconnect()}},qt=({direction:t="horizontal",persist:e,initialSize:s,initialSizeHorizontal:n,initialSizeVertical:i,minSize:o,minSizeHorizontal:c,minSizeVertical:a})=>{const r=De(),u=g(),p=g(),d=g(),x=g(),_=g(),z=g(),[m,v]=lt(!1),h=e?`${e}:${t}`:void 0,b=J(()=>e?wt():void 0,[e]),f=zt(b,h,E=>{const A=_.current;A&&Nt(A,E)}),q=g(f);q.current=f;const K=re(()=>{var Z,ee;const E=(Z=p.current)==null?void 0:Z.assignedElements()[0],A=(ee=d.current)==null?void 0:ee.assignedElements()[0];E&&A&&v(!0)},[]),He=re(()=>{var E;(E=x.current)==null||E.assignedElements().forEach(A=>A.setAttribute("slot","previous"))},[]);return R(()=>{r.setAttribute("data-direction",t)},[t]),R(()=>{pe(r,"basis",s,n,i),pe(r,"min",o,c,a)},[r,s,n,i,o,c,a]),R(()=>m?kt({host:r,handle:u.current,direction:t,persistRef:q,prevPanelRef:_,nextPanelRef:z,prevSlotRef:p,nextSlotRef:d}):void 0,[t,b,e,r,m]),M`<slot
			${L(x)}
			@slotchange=${He}
		></slot>
		<div
			class="panel"
			data-panel="previous"
			${L(_)}
			part="panel-previous"
		>
			<slot
				name="previous"
				${L(p)}
				@slotchange=${K}
			></slot>
		</div>
		<cosmoz-resize-handle
			direction=${t}
			${L(u)}
		></cosmoz-resize-handle>
		<div class="panel" data-panel="next" ${L(z)} part="panel-next">
			<slot name="next" ${L(d)} @slotchange=${K}></slot>
		</div>`};customElements.define("cosmoz-resizable-view",Fe(qt,{styleSheets:[_t],observedAttributes:["direction","persist","initial-size","initial-size-horizontal","initial-size-vertical","min-size","min-size-horizontal","min-size-vertical"]}));const{expect:w,waitFor:$}=__STORYBOOK_MODULE_TEST__,Ot={title:"Components/ResizableView",tags:["autodocs"]},y=t=>`background:${t}; display:flex; align-items:center; justify-content:center; color:white;`,B={render:()=>M`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            initial-size="50%"
        >
            <div slot="previous" id="prev" style="${y("#ff6b6b")}">
                <h3>Left Panel</h3>
            </div>
            <div slot="next" id="next" style="${y("#4ecdc4")}">
                <h3>Right Panel</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await $(()=>{const s=t.querySelector("#prev");w(s).not.toBeNull()}),w(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered in shadow DOM between panel wrappers",async()=>{await $(()=>{var n;const s=(n=t.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");w(s).not.toBeNull()})})}},T={render:()=>M`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{const s=t.querySelector("cosmoz-resizable-view");await $(()=>{w(s.getAttribute("data-direction")).toBe("vertical")}),await $(()=>{var i;const n=(i=s.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle");w(n==null?void 0:n.getAttribute("data-direction")).toBe("vertical")})})}},D={render:()=>M`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await $(()=>{var i,o;const s=(i=t.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle");w(s).not.toBeNull();const n=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");w(n).not.toBeNull(),w((o=n==null?void 0:n.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle")).not.toBeNull()})})}},O={render:()=>M`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Previous panel respects min-size",async()=>{await $(()=>{const n=t.querySelector("cosmoz-resizable-view").shadowRoot.querySelector(".panel[data-panel='previous']");w(n.offsetWidth).toBeGreaterThanOrEqual(300)})})}},F={render:()=>M`<cosmoz-resizable-view
            style="display:flex; width:1000px; height:300px; border:1px solid #ccc;"
            initial-size="360px"
        >
            <div id="list" slot="previous" style="${y("#ff6b6b")}">
                <h3>List (capped at 360px)</h3>
            </div>
            <div id="details" slot="next" style="${y("#4ecdc4")}">
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Previous panel capped at 360px",async()=>{await $(()=>{const n=t.querySelector("cosmoz-resizable-view").shadowRoot.querySelector(".panel[data-panel='previous']");w(n.offsetWidth).toBeLessThanOrEqual(360)})})}};var ye,xe,we;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(we=(xe=B.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var ze,ge,_e;T.parameters={...T.parameters,docs:{...(ze=T.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(_e=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:_e.source}}};var Ee,Se,$e;D.parameters={...D.parameters,docs:{...(Ee=D.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...($e=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:$e.source}}};var Ce,Pe,Ae;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ae=(Pe=O.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.source}}};var Le,Re,Me;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; width:1000px; height:300px; border:1px solid #ccc;"
            initial-size="360px"
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
      await waitFor(() => {
        const el = canvasElement.querySelector('cosmoz-resizable-view') as HTMLElement;
        const panel = el.shadowRoot!.querySelector('.panel[data-panel=\\'previous\\']') as HTMLElement;
        expect(panel.offsetWidth).toBeLessThanOrEqual(360);
      });
    });
  }
}`,...(Me=(Re=F.parameters)==null?void 0:Re.docs)==null?void 0:Me.source}}};const Ft=["BasicDemo","VerticalDemo","MultiplePanels","ListDetailsSplit","CappedInitialSize"];export{B as BasicDemo,F as CappedInitialSize,O as ListDetailsSplit,D as MultiplePanels,T as VerticalDemo,Ft as __namedExportsOrder,Ot as default};
