var Ye=Object.defineProperty;var Je=(t,e,s)=>e in t?Ye(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var c=(t,e,s)=>Je(t,typeof e!="symbol"?e+"":e,s);import{f as Ke,B as Ze,E as J,x as $}from"./iframe-DI727_QK.js";import"./preload-helper-C1FmrZbK.js";let I,He=0;function ae(t){I=t}function le(){I=null,He=0}function et(){return He++}const W=Symbol("haunted.phase"),V=Symbol("haunted.hook"),ce=Symbol("haunted.update"),de=Symbol("haunted.commit"),C=Symbol("haunted.effects"),M=Symbol("haunted.layoutEffects"),K="haunted.context";var ge,ye,we;we=V,ye=C,ge=M;class tt{constructor(e,s){c(this,"update");c(this,"host");c(this,"virtual");c(this,we);c(this,ye);c(this,ge);this.update=e,this.host=s,this[V]=new Map,this[C]=[],this[M]=[]}run(e){ae(this);let s=e();return le(),s}_runEffects(e){let s=this[e];ae(this);for(let i of s)i.call(this);le()}runEffects(){this._runEffects(C)}runLayoutEffects(){this._runEffects(M)}teardown(){this[V].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class st extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const it=100,nt=Promise.resolve().then.bind(Promise.resolve());function Oe(){let t=[],e;function s(){e=null;let i=t;t=[];for(var n=0,r=i.length;n<r;n++)i[n]()}return function(i){t.push(i),e==null&&(e=nt(s))}}const rt=Oe(),ue=Oe();var xe;xe=W;const j=class j{constructor(e,s){c(this,"renderer");c(this,"host");c(this,"state");c(this,xe);c(this,"_updateQueued");c(this,"_active");c(this,"_updateCount");c(this,"_processing");this.renderer=e,this.host=s,this.state=new tt(this.update.bind(this),s),this[W]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>j.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new st(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,rt(()=>{let e=this.handlePhase(ce);ue(()=>{this.handlePhase(de,e),ue(()=>{this.handlePhase(C),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[W]=e,e){case de:this.commit(s),this.runEffects(M);return;case ce:return this.render();case C:return this.runEffects(C)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};c(j,"maxUpdates",it);let Z=j;const ot=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},at=t=>t==null?void 0:t.map(e=>typeof e=="string"?ot(e):e),lt=(t,...e)=>t.flatMap((s,i)=>[s,e[i]||""]).join(""),Ve=lt,ct=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function dt(t){class e extends Z{constructor(r,o,a){super(r,a||o);c(this,"frag");c(this,"renderResult");this.frag=o}commit(r){this.renderResult=t(r,this.frag)}}function s(i,n,r){const o=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:d={},styleSheets:p}=r||n||{},u=at(i.styleSheets||p);class g extends o{constructor(){super();c(this,"_scheduler");if(l===!1)this._scheduler=new e(i,this);else{const h=this.attachShadow({mode:"open",...d});u&&(h.adoptedStyleSheets=u),this._scheduler=new e(i,h,this)}}static get observedAttributes(){return i.observedAttributes||a||[]}connectedCallback(){var h;this._scheduler.resume(),this._scheduler.update(),(h=this._scheduler.renderResult)==null||h.setConnected(!0)}disconnectedCallback(){var h;this._scheduler.pause(),this._scheduler.teardown(),(h=this._scheduler.renderResult)==null||h.setConnected(!1)}attributeChangedCallback(h,w,b){if(w===b)return;let U=b===""?!0:b;Reflect.set(this,ct(h),U)}}function E(m){let f=m,h=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return f},set(w){h&&f===w||(h=!0,f=w,this._scheduler&&this._scheduler.update())}})}const _=new Proxy(o.prototype,{getPrototypeOf(m){return m},set(m,f,h,w){let b;return f in m?(b=Object.getOwnPropertyDescriptor(m,f),b&&b.set?(b.set.call(w,h),!0):(Reflect.set(m,f,h,w),!0)):(typeof f=="symbol"||f[0]==="_"?b={enumerable:!0,configurable:!0,writable:!0,value:h}:b=E(h),Object.defineProperty(w,f,b),b.set&&b.set.call(w,h),!0)}});return Object.setPrototypeOf(g.prototype,_),g}return s}class R{constructor(e,s){c(this,"id");c(this,"state");this.id=e,this.state=s}}function ut(t,...e){let s=et(),i=I[V],n=i.get(s);return n||(n=new t(s,I,...e),i.set(s,n)),n.update(...e)}function B(t){return ut.bind(null,t)}function Ie(t){return B(class extends R{constructor(s,i,n,r){super(s,i);c(this,"callback");c(this,"lastValues");c(this,"values");c(this,"_teardown");t(i,this)}update(s,i){this.callback=s,this.values=i}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,i)=>this.lastValues[i]!==s)}})}function Ge(t,e){t[C].push(e)}const L=Ie(Ge),ht=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,pt=B(class extends R{constructor(e,s,i){super(e,s);c(this,"Context");c(this,"value");c(this,"_ranEffect");c(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Ge(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};ht(this.state.host).dispatchEvent(new CustomEvent(K,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:r}=s;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function vt(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();c(this,"listeners");c(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(K,this)}disconnectedCallback(){this.removeEventListener(K,this)}handleEvent(n){const{detail:r}=n;r.Context===s&&(r.value=this.value,r.unsubscribe=this.unsubscribe.bind(this,r.callback),this.listeners.add(r.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let r of this.listeners)r(n)}get value(){return this._value}},Consumer:t(function({render:i}){const n=pt(s);return i(n)},{useShadowDOM:!1}),defaultValue:e};return s}}const ee=B(class extends R{constructor(e,s,i,n){super(e,s);c(this,"value");c(this,"values");this.value=i(),this.values=n}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,i)=>this.values[i]!==s)}}),he=(t,e)=>ee(()=>t,e);function mt(t,e){t[M].push(e)}Ie(mt);const ft=B(class extends R{constructor(e,s,i){super(e,s);c(this,"args");this.updater=this.updater.bind(this),typeof i=="function"&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});B(class extends R{constructor(e,s,i,n,r){super(e,s);c(this,"reducer");c(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=r!==void 0?r(n):n}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const bt=/([A-Z])/gu;B(class extends R{constructor(e,s,i,n){super(e,s);c(this,"property");c(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=i,this.eventName=i.replace(bt,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updater(n,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],i=typeof e=="function"?e:void 0,n=i?i(s):e;return[s,n,i]}notify(e,s){const i=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(i),i}updater(e,s=!1){const[i,n,r]=this.resolve(e),o=this.notify(n,r);!s&&o.defaultPrevented||Object.is(i,n)||(this.state.host[this.property]=n)}});function gt(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function z(t){return ee(()=>gt(t),[])}const je=B(class extends R{update(){return this.state.host}});function yt({render:t}){const e=dt(t),s=vt(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt={CHILD:2},xt=t=>(...e)=>({_$litDirective$:t,values:e});class zt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,i){this._$Ct=e,this._$AM=s,this._$Ci=i}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=(t,e)=>{var i;const s=t._$AN;if(s===void 0)return!1;for(const n of s)(i=n._$AO)==null||i.call(n,e,!1),T(n,e);return!0},G=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},Ue=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),St(e)}};function Et(t){this._$AN!==void 0?(G(this),this._$AM=t,Ue(this)):this._$AM=t}function _t(t,e=!1,s=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let r=s;r<i.length;r++)T(i[r],!1),G(i[r]);else i!=null&&(T(i,!1),G(i));else T(this,t)}const St=t=>{t.type==wt.CHILD&&(t._$AP??(t._$AP=_t),t._$AQ??(t._$AQ=Et))};class Ct extends zt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,i){super._$AT(e,s,i),Ue(this),this.isConnected=e._$AU}_$AO(e,s=!0){var i,n;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),s&&(T(this,e),G(this))}setValue(e){if(Ke(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:We}=yt({render:Ze}),Q=new WeakMap,A=xt(class extends Ct{render(t){return J}update(t,[e]){var i;const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),J}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=Q.get(e);s===void 0&&(s=new WeakMap,Q.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=Q.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),$t=t=>{if(typeof t!="object"||t==null)return!1;const e=t;return typeof e.px=="number"&&e.px>=0&&!Number.isNaN(e.px)},pe=t=>{try{const e=JSON.parse(t);if($t(e))return e}catch{}},Rt=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const i=new Map,n=()=>{s=void 0;for(const[a,l]of i)try{localStorage.setItem(t+a,JSON.stringify(l))}catch{}i.clear()},r=(a,l)=>{i.set(a,l),s==null&&(s=setTimeout(n,100))},o=a=>{if(a.key==null||!a.key.startsWith(t)||a.newValue==null)return;const l=a.key.slice(t.length),d=pe(a.newValue);if(d==null)return;const p=e.get(l);if(p)for(const u of p)u(d)};return typeof window<"u"&&window.addEventListener("storage",o),{get(a){let l;try{l=localStorage.getItem(t+a)}catch{return}if(l!=null)return pe(l)},set(a,l){r(a,l)},subscribe(a,l){let d=e.get(a);return d||(d=new Set,e.set(a,d)),d.add(l),()=>{const p=e.get(a);p&&(p.delete(l),p.size===0&&e.delete(a))}},destroy(){typeof window<"u"&&window.removeEventListener("storage",o),s!=null&&(clearTimeout(s),n())}}},Bt=(t,e,s)=>{const i=z(s);if(i.current=s,L(()=>{var o,a;if(!t||!e)return;const n=t.get(e);(o=i.current)==null||o.call(i,n);const r=(a=t.subscribe)==null?void 0:a.call(t,e,l=>{var d;return(d=i.current)==null?void 0:d.call(i,l)});return()=>{var l;r==null||r(),(l=t.destroy)==null||l.call(t)}},[t,e]),!(!t||!e))return n=>t.set(e,n)},ve=t=>{const e=t.trim();if(e==="")return e;const s=Number(e);return Number.isNaN(s)?e:`${s}px`},Pt=t=>{if(t==null||t.trim()==="")return{};const e=t.includes(",")?t.split(/,\s*/u):t.match(/(?:[^\s()]+\([^)]*\)|\([^)]*\)|[^\s]+)/gu)??[t];return{previous:ve(e[0]),next:e.length>1?ve(e[1]):void 0}},At=Ve`
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
		flex: 1 1 0 !important;
	}

	cosmoz-resize-handle {
		flex: 0 0 auto;
	}

	:host([data-single-panel]) cosmoz-resize-handle {
		display: none;
	}
`,X=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},Lt=(t,e,s,i)=>s==="horizontal"?i?e.right-t.x:t.x-e.left:i?e.bottom-t.y:t.y-e.top,N=t=>{const e=parseFloat(t);return Number.isNaN(e)?void 0:e},Mt=(t,e)=>{const s=getComputedStyle(t),i=e==="horizontal"?N(s.minWidth)??0:N(s.minHeight)??0,n=e==="horizontal"?N(s.maxWidth)??1/0:N(s.maxHeight)??1/0;return{min:i,max:n}},me=t=>({rect:t.container.getBoundingClientRect(),bounds:Mt(t.previous,t.direction)}),Tt=(t,e,s,i,n)=>{const r=Lt(t,e,s,n);return Math.max(Math.min(r,i.max),i.min)},Nt=t=>{let e;return s=>{var o,a;const{phase:i,mousePosition:n}=s.detail;if(i==="start"){e=me(t);return}if(i!=="move"&&i!=="end")return;e||(e=me(t));const r=Tt(n,e.rect,t.direction,e.bounds,t.reversed);i==="move"?(o=t.onResize)==null||o.call(t,r):((a=t.onResizeEnd)==null||a.call(t),e=void 0)}},qt=(t="horizontal")=>{const e=je();return L(()=>{e.setAttribute("data-direction",t)},[t]),L(()=>{const s=(u,g)=>{e.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:u,mousePosition:g},bubbles:!0}))};let i=0,n;const r=()=>{i=0,n&&(s("move",n),n=void 0)},o=u=>{n=X(u),i||(i=requestAnimationFrame(r))},a=u=>{i&&(cancelAnimationFrame(i),r()),e.removeAttribute("data-dragging"),s("end",X(u)),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",o),document.removeEventListener("touchend",a)},l=u=>{e.setAttribute("data-dragging","true"),s("start",X(u)),document.addEventListener("mousemove",o),document.addEventListener("mouseup",a),document.addEventListener("touchmove",o,{passive:!1}),document.addEventListener("touchend",a)},d=u=>{u.preventDefault(),l(u)},p=u=>{u.preventDefault(),l(u)};return e.addEventListener("mousedown",d),e.addEventListener("touchstart",p,{passive:!1}),()=>{i&&cancelAnimationFrame(i),e.removeEventListener("mousedown",d),e.removeEventListener("touchstart",p),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",o),document.removeEventListener("touchend",a)}},[e]),null},kt=Ve`
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

	:host([reversed][data-direction='vertical']:hover)::before,
	:host([reversed][data-direction='vertical'][data-dragging])::before {
		box-shadow: 0 1px 0 1px var(--cz-accent-color);
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
`,Dt=({direction:t="horizontal"})=>(qt(t),J);customElements.define("cosmoz-resize-handle",We(Dt,{styleSheets:[kt],observedAttributes:["direction","reversed"]}));const Ft=t=>getComputedStyle(t).display!=="none",fe=t=>t==null?void 0:t.assignedElements()[0],be=t=>(t==null?void 0:t.assignedElements().some(e=>Ft(e)))??!1,Ht=(t,e,s,i,n)=>{const r=()=>{const l=be(s),d=be(n);e.toggleAttribute("data-hidden",!l),i.toggleAttribute("data-hidden",!d),t.toggleAttribute("data-single-panel",!(l&&d))},o=new ResizeObserver(()=>queueMicrotask(r)),a=l=>{l==null||l.assignedElements().forEach(d=>o.observe(d))};return a(s),a(n),r(),o},Ot=(t,e)=>{if(e==null){t.style.flexBasis="";return}t.style.flexBasis=`${e.px}px`},Y=(t,e,s,i,n)=>{const r=(o,a)=>{const{previous:l,next:d}=Pt(a??null),p=`--resizable-previous-${e}${o}`,u=`--resizable-next-${e}${o}`;l!=null?t.style.setProperty(p,l):t.style.removeProperty(p),d!=null?t.style.setProperty(u,d):t.style.removeProperty(u)};r("",s),r("-horizontal",i),r("-vertical",n)},Vt=({host:t,handle:e,direction:s,reversed:i,persistRef:n,prevPanelRef:r,nextPanelRef:o,prevSlotRef:a,nextSlotRef:l})=>{const d=r.current,p=o.current,u=fe(a.current),g=fe(l.current);if(!d||!p||!u||!g||!e)return;const E=Nt({container:t,previous:d,direction:s,reversed:i,onResize:m=>{d.style.flexBasis=`${m}px`},onResizeEnd:()=>{requestAnimationFrame(()=>{var h;const m=d.getBoundingClientRect(),f=s==="horizontal"?m.width:m.height;(h=n.current)==null||h.call(n,{px:f})})}});e.addEventListener("resize-handle",E);const _=Ht(t,d,a.current,p,l.current);return()=>{e.removeEventListener("resize-handle",E),_.disconnect()}},It=({direction:t="horizontal",reversed:e,persist:s,initialSize:i,initialSizeHorizontal:n,initialSizeVertical:r,minSize:o,minSizeHorizontal:a,minSizeVertical:l,maxSize:d,maxSizeHorizontal:p,maxSizeVertical:u})=>{const g=je(),E=z(),_=z(),m=z(),f=z(),h=z(),w=z(),[b,U]=ft(!1),Qe=s?`${s}:${t}`:void 0,te=ee(()=>s?Rt():void 0,[s]),se=Bt(te,Qe,S=>{const P=h.current;P&&Ot(P,S)}),ie=z(se);ie.current=se;const ne=he(()=>{var re,oe;const S=(re=_.current)==null?void 0:re.assignedElements()[0],P=(oe=m.current)==null?void 0:oe.assignedElements()[0];S&&P&&U(!0)},[]),Xe=he(()=>{var S;(S=f.current)==null||S.assignedElements().forEach(P=>P.setAttribute("slot","previous"))},[]);return L(()=>{g.setAttribute("data-direction",t)},[t]),L(()=>{Y(g,"basis",i,n,r),Y(g,"min",o,a,l),Y(g,"max",d,p,u)},[g,i,n,r,o,a,l,d,p,u]),L(()=>b?Vt({host:g,handle:E.current,direction:t,reversed:e===!0,persistRef:ie,prevPanelRef:h,nextPanelRef:w,prevSlotRef:_,nextSlotRef:m}):void 0,[t,e,te,s,g,b]),$`<slot
			${A(f)}
			@slotchange=${Xe}
		></slot>
		<div
			class="panel"
			data-panel="previous"
			${A(h)}
			part="panel-previous"
		>
			<slot
				name="previous"
				${A(_)}
				@slotchange=${ne}
			></slot>
		</div>
		<cosmoz-resize-handle
			direction=${t}
			?reversed=${e===!0}
			${A(E)}
		></cosmoz-resize-handle>
		<div class="panel" data-panel="next" ${A(w)} part="panel-next">
			<slot name="next" ${A(m)} @slotchange=${ne}></slot>
		</div>`};customElements.define("cosmoz-resizable-view",We(It,{styleSheets:[At],observedAttributes:["direction","reversed","persist","initial-size","initial-size-horizontal","initial-size-vertical","min-size","min-size-horizontal","min-size-vertical","max-size","max-size-horizontal","max-size-vertical"]}));const{expect:v,waitFor:x}=__STORYBOOK_MODULE_TEST__,Wt={title:"Components/ResizableView",tags:["autodocs"]},y=t=>`background:${t}; display:flex; align-items:center; justify-content:center; color:white;`,q={render:()=>$`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            initial-size="50%"
        >
            <div slot="previous" id="prev" style="${y("#ff6b6b")}">
                <h3>Left Panel</h3>
            </div>
            <div slot="next" id="next" style="${y("#4ecdc4")}">
                <h3>Right Panel</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await x(()=>{const s=t.querySelector("#prev");v(s).not.toBeNull()}),v(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered in shadow DOM between panel wrappers",async()=>{await x(()=>{var i;const s=(i=t.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle");v(s).not.toBeNull()})})}},k={render:()=>$`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{const s=t.querySelector("cosmoz-resizable-view");await x(()=>{v(s.getAttribute("data-direction")).toBe("vertical")}),await x(()=>{var n;const i=(n=s.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");v(i==null?void 0:i.getAttribute("data-direction")).toBe("vertical")})})}},D={render:()=>$`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await x(()=>{var n,r;const s=(n=t.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");v(s).not.toBeNull();const i=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");v(i).not.toBeNull(),v((r=i==null?void 0:i.shadowRoot)==null?void 0:r.querySelector("cosmoz-resize-handle")).not.toBeNull()})})}},F={render:()=>$`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Previous panel respects min-size",async()=>{await x(()=>{const i=t.querySelector("cosmoz-resizable-view").shadowRoot.querySelector(".panel[data-panel='previous']");v(i.offsetWidth).toBeGreaterThanOrEqual(300)})})}},H={render:()=>$`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){const s=()=>t.querySelector("cosmoz-resizable-view"),i=()=>s().shadowRoot.querySelector(".panel[data-panel='previous']"),n=()=>s().shadowRoot.querySelector("cosmoz-resize-handle"),r=async(o,a)=>{const l=s().getBoundingClientRect();await x(()=>{n().dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:"start",mousePosition:{x:o,y:l.top}},bubbles:!0})),n().dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:"move",mousePosition:{x:o,y:l.top}},bubbles:!0})),v(i().getBoundingClientRect().width).toBe(a)})};await e("Renders with reversed visual order",async()=>{await x(()=>{const o=s();v(o.hasAttribute("reversed")).toBe(!0),v(o.reversed).toBe(!0);const a=i();v(a.getBoundingClientRect().right).toBe(o.getBoundingClientRect().right)})}),await e("Dragging resizes the previous panel from the right edge",async()=>{await r(s().getBoundingClientRect().left+150,450)}),await e("Removing reversed restores left-edge dragging",async()=>{const o=s();o.removeAttribute("reversed"),await x(()=>{v(getComputedStyle(o).flexDirection).toBe("row"),v(o.reversed).toBeFalsy(),v(i().getBoundingClientRect().left).toBe(o.getBoundingClientRect().left)}),await r(s().getBoundingClientRect().left+200,200)}),await e("Re-adding reversed resumes right-edge dragging",async()=>{const o=s();o.setAttribute("reversed",""),await x(()=>{v(getComputedStyle(o).flexDirection).toBe("row-reverse"),v(o.reversed).toBe(!0),v(i().getBoundingClientRect().right).toBe(o.getBoundingClientRect().right)}),await r(s().getBoundingClientRect().left+100,500)})}},O={render:()=>$`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Previous panel capped at 360px",async()=>{const s=t.querySelector("cosmoz-resizable-view"),i=s.shadowRoot.querySelector("cosmoz-resize-handle"),n=i.getBoundingClientRect(),r=(o,a,l)=>i.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:o,mousePosition:{x:a,y:l}},bubbles:!0}));r("start",n.left,n.top),r("move",900,n.top),await x(()=>{const o=s.shadowRoot.querySelector(".panel[data-panel='previous']");v(o.offsetWidth).toBeLessThanOrEqual(360)})})}};var ze,Ee,_e;q.parameters={...q.parameters,docs:{...(ze=q.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(_e=(Ee=q.parameters)==null?void 0:Ee.docs)==null?void 0:_e.source}}};var Se,Ce,$e;k.parameters={...k.parameters,docs:{...(Se=k.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...($e=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:$e.source}}};var Re,Be,Pe;D.parameters={...D.parameters,docs:{...(Re=D.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Pe=(Be=D.parameters)==null?void 0:Be.docs)==null?void 0:Pe.source}}};var Ae,Le,Me;F.parameters={...F.parameters,docs:{...(Ae=F.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Me=(Le=F.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};var Te,Ne,qe;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(qe=(Ne=H.parameters)==null?void 0:Ne.docs)==null?void 0:qe.source}}};var ke,De,Fe;O.parameters={...O.parameters,docs:{...(ke=O.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Fe=(De=O.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};const Qt=["BasicDemo","VerticalDemo","MultiplePanels","ListDetailsSplit","ReversedDemo","CappedInitialSize"];export{q as BasicDemo,O as CappedInitialSize,F as ListDetailsSplit,D as MultiplePanels,H as ReversedDemo,k as VerticalDemo,Qt as __namedExportsOrder,Wt as default};
