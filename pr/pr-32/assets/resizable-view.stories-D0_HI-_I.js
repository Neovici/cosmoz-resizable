var nt=Object.defineProperty;var ot=(t,e,s)=>e in t?nt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var d=(t,e,s)=>ot(t,typeof e!="symbol"?e+"":e,s);import{f as it,B as rt,E as W,x as _}from"./iframe-7sHHRx8p.js";import"./preload-helper-C1FmrZbK.js";let U,Ue=0;function de(t){U=t}function ue(){U=null,Ue=0}function at(){return Ue++}const X=Symbol("haunted.phase"),j=Symbol("haunted.hook"),he=Symbol("haunted.update"),pe=Symbol("haunted.commit"),$=Symbol("haunted.effects"),M=Symbol("haunted.layoutEffects"),ee="haunted.context";var xe,Ee,_e;_e=j,Ee=$,xe=M;class lt{constructor(e,s){d(this,"update");d(this,"host");d(this,"virtual");d(this,_e);d(this,Ee);d(this,xe);this.update=e,this.host=s,this[j]=new Map,this[$]=[],this[M]=[]}run(e){de(this);let s=e();return ue(),s}_runEffects(e){let s=this[e];de(this);for(let n of s)n.call(this);ue()}runEffects(){this._runEffects($)}runLayoutEffects(){this._runEffects(M)}teardown(){this[j].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class ct extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const dt=100,ut=Promise.resolve().then.bind(Promise.resolve());function Qe(){let t=[],e;function s(){e=null;let n=t;t=[];for(var o=0,i=n.length;o<i;o++)n[o]()}return function(n){t.push(n),e==null&&(e=ut(s))}}const ht=Qe(),ve=Qe();var Se;Se=X;const Y=class Y{constructor(e,s){d(this,"renderer");d(this,"host");d(this,"state");d(this,Se);d(this,"_updateQueued");d(this,"_active");d(this,"_updateCount");d(this,"_processing");this.renderer=e,this.host=s,this.state=new lt(this.update.bind(this),s),this[X]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>Y.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new ct(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,ht(()=>{let e=this.handlePhase(he);ve(()=>{this.handlePhase(pe,e),ve(()=>{this.handlePhase($),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[X]=e,e){case pe:this.commit(s),this.runEffects(M);return;case he:return this.render();case $:return this.runEffects($)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};d(Y,"maxUpdates",dt);let te=Y;const pt=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},vt=t=>t==null?void 0:t.map(e=>typeof e=="string"?pt(e):e),mt=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),Ye=mt,ft=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function bt(t){class e extends te{constructor(i,r,a){super(i,a||r);d(this,"frag");d(this,"renderResult");this.frag=r}commit(i){this.renderResult=t(i,this.frag)}}function s(n,o,i){const r=(i||o||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:h}=i||o||{},u=vt(n.styleSheets||h);class x extends r{constructor(){super();d(this,"_scheduler");if(l===!1)this._scheduler=new e(n,this);else{const p=this.attachShadow({mode:"open",...c});u&&(p.adoptedStyleSheets=u),this._scheduler=new e(n,p,this)}}static get observedAttributes(){return n.observedAttributes||a||[]}connectedCallback(){var p;this._scheduler.resume(),this._scheduler.update(),(p=this._scheduler.renderResult)==null||p.setConnected(!0)}disconnectedCallback(){var p;this._scheduler.pause(),this._scheduler.teardown(),(p=this._scheduler.renderResult)==null||p.setConnected(!1)}attributeChangedCallback(p,g,b){if(g===b)return;let k=b===""?!0:b;Reflect.set(this,ft(p),k)}}function w(m){let f=m,p=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return f},set(g){p&&f===g||(p=!0,f=g,this._scheduler&&this._scheduler.update())}})}const A=new Proxy(r.prototype,{getPrototypeOf(m){return m},set(m,f,p,g){let b;return f in m?(b=Object.getOwnPropertyDescriptor(m,f),b&&b.set?(b.set.call(g,p),!0):(Reflect.set(m,f,p,g),!0)):(typeof f=="symbol"||f[0]==="_"?b={enumerable:!0,configurable:!0,writable:!0,value:p}:b=w(p),Object.defineProperty(g,f,b),b.set&&b.set.call(g,p),!0)}});return Object.setPrototypeOf(x.prototype,A),x}return s}class R{constructor(e,s){d(this,"id");d(this,"state");this.id=e,this.state=s}}function gt(t,...e){let s=at(),n=U[j],o=n.get(s);return o||(o=new t(s,U,...e),n.set(s,o)),o.update(...e)}function P(t){return gt.bind(null,t)}function Xe(t){return P(class extends R{constructor(s,n,o,i){super(s,n);d(this,"callback");d(this,"lastValues");d(this,"values");d(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function Je(t,e){t[$].push(e)}const B=Xe(Je),yt=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,wt=P(class extends R{constructor(e,s,n){super(e,s);d(this,"Context");d(this,"value");d(this,"_ranEffect");d(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Je(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};yt(this.state.host).dispatchEvent(new CustomEvent(ee,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:o=null,value:i}=s;this.value=o?i:e.defaultValue,this._unsubscribe=o}teardown(){this._unsubscribe&&this._unsubscribe()}});function zt(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();d(this,"listeners");d(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(ee,this)}disconnectedCallback(){this.removeEventListener(ee,this)}handleEvent(o){const{detail:i}=o;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),o.stopPropagation())}unsubscribe(o){this.listeners.delete(o)}set value(o){this._value=o;for(let i of this.listeners)i(o)}get value(){return this._value}},Consumer:t(function({render:n}){const o=wt(s);return n(o)},{useShadowDOM:!1}),defaultValue:e};return s}}const se=P(class extends R{constructor(e,s,n,o){super(e,s);d(this,"value");d(this,"values");this.value=n(),this.values=o}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}}),me=(t,e)=>se(()=>t,e);function xt(t,e){t[M].push(e)}Xe(xt);const Et=P(class extends R{constructor(e,s,n){super(e,s);d(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});P(class extends R{constructor(e,s,n,o,i){super(e,s);d(this,"reducer");d(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(o):o}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const _t=/([A-Z])/gu;P(class extends R{constructor(e,s,n,o){super(e,s);d(this,"property");d(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(_t,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof o=="function"&&(o=o()),o!=null&&this.updater(o,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],n=typeof e=="function"?e:void 0,o=n?n(s):e;return[s,o,n]}notify(e,s){const n=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,s=!1){const[n,o,i]=this.resolve(e),r=this.notify(o,i);!s&&r.defaultPrevented||Object.is(n,o)||(this.state.host[this.property]=o)}});function St(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function E(t){return se(()=>St(t),[])}const ne=P(class extends R{update(){return this.state.host}});function Ct({render:t}){const e=bt(t),s=zt(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t={CHILD:2},Bt=t=>(...e)=>({_$litDirective$:t,values:e});class Rt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=(t,e)=>{var n;const s=t._$AN;if(s===void 0)return!1;for(const o of s)(n=o._$AO)==null||n.call(o,e,!1),T(o,e);return!0},Q=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},Ke=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),Lt(e)}};function Pt(t){this._$AN!==void 0?(Q(this),this._$AM=t,Ke(this)):this._$AM=t}function At(t,e=!1,s=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let i=s;i<n.length;i++)T(n[i],!1),Q(n[i]);else n!=null&&(T(n,!1),Q(n));else T(this,t)}const Lt=t=>{t.type==$t.CHILD&&(t._$AP??(t._$AP=At),t._$AQ??(t._$AQ=Pt))};class Mt extends Rt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),Ke(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,o;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),s&&(T(this,e),Q(this))}setValue(e){if(it(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:Ze}=Ct({render:rt});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=t=>t??W,J=new WeakMap,C=Bt(class extends Mt{render(t){return W}update(t,[e]){var n;const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=(n=t.options)==null?void 0:n.host,this.rt(this.ct=t.element)),W}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=J.get(e);s===void 0&&(s=new WeakMap,J.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=J.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),kt=t=>{if(typeof t!="object"||t==null)return!1;const e=t;return typeof e.px=="number"&&e.px>=0&&!Number.isNaN(e.px)},fe=t=>{try{const e=JSON.parse(t);if(kt(e))return e}catch{}},qt=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const n=new Map,o=()=>{s=void 0;for(const[a,l]of n)try{localStorage.setItem(t+a,JSON.stringify(l))}catch{}n.clear()},i=(a,l)=>{n.set(a,l),s==null&&(s=setTimeout(o,100))},r=a=>{if(a.key==null||!a.key.startsWith(t)||a.newValue==null)return;const l=a.key.slice(t.length),c=fe(a.newValue);if(c==null)return;const h=e.get(l);if(h)for(const u of h)u(c)};return typeof window<"u"&&window.addEventListener("storage",r),{get(a){let l;try{l=localStorage.getItem(t+a)}catch{return}if(l!=null)return fe(l)},set(a,l){i(a,l)},subscribe(a,l){let c=e.get(a);return c||(c=new Set,e.set(a,c)),c.add(l),()=>{const h=e.get(a);h&&(h.delete(l),h.size===0&&e.delete(a))}},destroy(){typeof window<"u"&&window.removeEventListener("storage",r),s!=null&&(clearTimeout(s),o())}}},Nt=(t,e,s)=>{const n=E(s);if(n.current=s,B(()=>{var r,a;if(!t||!e)return;const o=t.get(e);(r=n.current)==null||r.call(n,o);const i=(a=t.subscribe)==null?void 0:a.call(t,e,l=>{var c;return(c=n.current)==null?void 0:c.call(n,l)});return()=>{var l;i==null||i(),(l=t.destroy)==null||l.call(t)}},[t,e]),!(!t||!e))return o=>t.set(e,o)},be=t=>{const e=t.trim();if(e==="")return e;const s=Number(e);return Number.isNaN(s)?e:`${s}px`},Dt=t=>{if(t==null||t.trim()==="")return{};const e=t.includes(",")?t.split(/,\s*/u):t.match(/(?:[^\s()]+\([^)]*\)|\([^)]*\)|[^\s]+)/gu)??[t];return{previous:be(e[0]),next:e.length>1?be(e[1]):void 0}},Ft=Ye`
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
`,Ht=600,q=8,ge=(t,e,s,{x:n,y:o})=>{const i=e.getBoundingClientRect(),r=t.getBoundingClientRect();if(s==="horizontal"){const c=i.right+q,h=c+r.width>innerWidth?i.left-q-r.width:c;t.style.left=`${h}px`,t.style.top=`${o-r.height/2}px`;return}const a=i.bottom+q,l=a+r.height>innerHeight?i.top-q-r.height:a;t.style.top=`${l}px`,t.style.left=`${n-r.width/2}px`},Ot=(t,e)=>{const s=ne(),n=E();return B(()=>{const o=n.current;if(!t||!o)return;let i,r={x:0,y:0};const a=()=>{clearTimeout(i),i=void 0,o.matches(":popover-open")&&o.hidePopover()},l=()=>{i=void 0,!(s.hasAttribute("data-dragging")||!s.isConnected)&&(o.showPopover(),ge(o,s,e,r))},c=u=>{u.pointerType!=="touch"&&(r={x:u.clientX,y:u.clientY},clearTimeout(i),i=setTimeout(l,Ht))},h=u=>{r={x:u.clientX,y:u.clientY},o.matches(":popover-open")&&ge(o,s,e,r)};return s.addEventListener("pointerenter",c),s.addEventListener("pointermove",h),s.addEventListener("pointerleave",a),s.addEventListener("pointerdown",a),()=>{a(),s.removeEventListener("pointerenter",c),s.removeEventListener("pointermove",h),s.removeEventListener("pointerleave",a),s.removeEventListener("pointerdown",a)}},[s,t,e]),n},K=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},Vt=(t,e,s,n)=>s==="horizontal"?n?e.right-t.x:t.x-e.left:n?e.bottom-t.y:t.y-e.top,N=t=>{const e=parseFloat(t);return Number.isNaN(e)?void 0:e},It=(t,e)=>{const s=getComputedStyle(t),n=e==="horizontal"?N(s.minWidth)??0:N(s.minHeight)??0,o=e==="horizontal"?N(s.maxWidth)??1/0:N(s.maxHeight)??1/0;return{min:n,max:o}},ye=t=>({rect:t.container.getBoundingClientRect(),bounds:It(t.previous,t.direction)}),Gt=(t,e,s,n,o)=>{const i=Vt(t,e,s,o);return Math.max(Math.min(i,n.max),n.min)},jt=t=>{let e;return s=>{var r,a;const{phase:n,mousePosition:o}=s.detail;if(n==="start"){e=ye(t);return}if(n!=="move"&&n!=="end")return;e||(e=ye(t));const i=Gt(o,e.rect,t.direction,e.bounds,t.reversed);n==="move"?(r=t.onResize)==null||r.call(t,i):((a=t.onResizeEnd)==null||a.call(t),e=void 0)}},Wt=(t="horizontal")=>{const e=ne();return B(()=>{e.setAttribute("data-direction",t)},[t]),B(()=>{const s=(u,x)=>{e.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:u,mousePosition:x},bubbles:!0}))};let n=0,o;const i=()=>{n=0,o&&(s("move",o),o=void 0)},r=u=>{o=K(u),n||(n=requestAnimationFrame(i))},a=u=>{n&&(cancelAnimationFrame(n),i()),e.removeAttribute("data-dragging"),s("end",K(u)),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",a)},l=u=>{e.setAttribute("data-dragging","true"),s("start",K(u)),document.addEventListener("mousemove",r),document.addEventListener("mouseup",a),document.addEventListener("touchmove",r,{passive:!1}),document.addEventListener("touchend",a)},c=u=>{u.preventDefault(),l(u)},h=u=>{u.preventDefault(),l(u)};return e.addEventListener("mousedown",c),e.addEventListener("touchstart",h,{passive:!1}),()=>{n&&cancelAnimationFrame(n),e.removeEventListener("mousedown",c),e.removeEventListener("touchstart",h),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",a)}},[e]),null},Ut=Ye`
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
		transition: background 150ms ease;
	}

	:host::after {
		content: '';
		position: absolute;
		inset: 0;
	}

	:host([data-direction='horizontal']) {
		flex-direction: column;
		align-items: center;
		min-height: 100%;
		width: var(--cosmoz-resize-handle-size, 1px);
		cursor: col-resize;
	}

	:host([data-direction='horizontal'])::before {
		width: 1px;
		flex: 1;
	}

	:host([data-direction='horizontal'])::after {
		inset-inline: calc(var(--cosmoz-resize-handle-hit-area, 4px) * -1);
	}

	:host([data-direction='vertical']) {
		flex-direction: row;
		align-items: center;
		height: var(--cosmoz-resize-handle-size, 1px);
		width: 100%;
		cursor: row-resize;
	}

	:host([data-direction='vertical'])::before {
		height: 1px;
		flex: 1;
	}

	:host([data-direction='vertical'])::after {
		inset-block: calc(var(--cosmoz-resize-handle-hit-area, 4px) * -1);
	}

	:host(:hover)::before {
		background: var(
			--cosmoz-resize-handle-hover-color,
			var(--cz-color-border-primary, var(--cz-accent-color))
		);
		transition-delay: 150ms;
	}

	:host([data-dragging])::before {
		background: var(
			--cosmoz-resize-handle-active-color,
			var(--cz-color-border-brand, var(--cz-accent-color))
		);
		transition-delay: 0s;
	}

	[popover] {
		position: fixed;
		inset: unset;
		margin: 0;
		border: none;
		pointer-events: none;
		white-space: nowrap;
		padding: var(--cosmoz-tooltip-padding, 4px 8px);
		border-radius: var(
			--cosmoz-tooltip-border-radius,
			var(--cz-radius-sm, 6px)
		);
		box-shadow: var(--cosmoz-tooltip-box-shadow, var(--cz-shadow-lg));
		background: var(
			--cosmoz-tooltip-bg-color,
			var(--cz-color-gray-900, #18181b)
		);
		color: var(--cosmoz-tooltip-text-color, var(--cz-color-white, #fff));
		font-size: var(--cosmoz-tooltip-font-size, var(--cz-text-xs, 12px));
		line-height: var(
			--cosmoz-tooltip-line-height,
			var(--cz-text-xs-line-height, 16px)
		);
	}
`,Qt=({direction:t="horizontal",label:e})=>{Wt(t);const s=Ot(e,t);return e?_`<div popover="manual" part="tooltip" ${C(s)}>${e}</div>`:W};customElements.define("cosmoz-resize-handle",Ze(Qt,{styleSheets:[Ut],observedAttributes:["direction","reversed","label"]}));const Yt=t=>getComputedStyle(t).display!=="none",we=t=>t==null?void 0:t.assignedElements()[0],ze=t=>(t==null?void 0:t.assignedElements().some(e=>Yt(e)))??!1,Xt=(t,e,s,n,o)=>{const i=()=>{const l=ze(s),c=ze(o);e.toggleAttribute("data-hidden",!l),n.toggleAttribute("data-hidden",!c),t.toggleAttribute("data-single-panel",!(l&&c))},r=new ResizeObserver(()=>queueMicrotask(i)),a=l=>{l==null||l.assignedElements().forEach(c=>r.observe(c))};return a(s),a(o),i(),r},Jt=(t,e)=>{if(e==null){t.style.flexBasis="";return}t.style.flexBasis=`${e.px}px`},Z=(t,e,s,n,o)=>{const i=(r,a)=>{const{previous:l,next:c}=Dt(a??null),h=`--resizable-previous-${e}${r}`,u=`--resizable-next-${e}${r}`;l!=null?t.style.setProperty(h,l):t.style.removeProperty(h),c!=null?t.style.setProperty(u,c):t.style.removeProperty(u)};i("",s),i("-horizontal",n),i("-vertical",o)},Kt=({host:t,handle:e,direction:s,reversed:n,persistRef:o,prevPanelRef:i,nextPanelRef:r,prevSlotRef:a,nextSlotRef:l})=>{const c=i.current,h=r.current,u=we(a.current),x=we(l.current);if(!c||!h||!u||!x||!e)return;const w=jt({container:t,previous:c,direction:s,reversed:n,onResize:m=>{c.style.flexBasis=`${m}px`},onResizeEnd:()=>{requestAnimationFrame(()=>{var p;const m=c.getBoundingClientRect(),f=s==="horizontal"?m.width:m.height;(p=o.current)==null||p.call(o,{px:f})})}});e.addEventListener("resize-handle",w);const A=Xt(t,c,a.current,h,l.current);return()=>{e.removeEventListener("resize-handle",w),A.disconnect()}},Zt=({direction:t="horizontal",reversed:e,persist:s,handleLabel:n,initialSize:o,initialSizeHorizontal:i,initialSizeVertical:r,minSize:a,minSizeHorizontal:l,minSizeVertical:c,maxSize:h,maxSizeHorizontal:u,maxSizeVertical:x})=>{const w=ne(),A=E(),m=E(),f=E(),p=E(),g=E(),b=E(),[k,et]=Et(!1),tt=s?`${s}:${t}`:void 0,oe=se(()=>s?qt():void 0,[s]),ie=Nt(oe,tt,S=>{const L=g.current;L&&Jt(L,S)}),re=E(ie);re.current=ie;const ae=me(()=>{var le,ce;const S=(le=m.current)==null?void 0:le.assignedElements()[0],L=(ce=f.current)==null?void 0:ce.assignedElements()[0];S&&L&&et(!0)},[]),st=me(()=>{var S;(S=p.current)==null||S.assignedElements().forEach(L=>L.setAttribute("slot","previous"))},[]);return B(()=>{w.setAttribute("data-direction",t)},[t]),B(()=>{Z(w,"basis",o,i,r),Z(w,"min",a,l,c),Z(w,"max",h,u,x)},[w,o,i,r,a,l,c,h,u,x]),B(()=>k?Kt({host:w,handle:A.current,direction:t,reversed:e===!0,persistRef:re,prevPanelRef:g,nextPanelRef:b,prevSlotRef:m,nextSlotRef:f}):void 0,[t,e,oe,s,w,k]),_`<slot
			${C(p)}
			@slotchange=${st}
		></slot>
		<div
			class="panel"
			data-panel="previous"
			${C(g)}
			part="panel-previous"
		>
			<slot
				name="previous"
				${C(m)}
				@slotchange=${ae}
			></slot>
		</div>
		<cosmoz-resize-handle
			direction=${t}
			?reversed=${e===!0}
			label=${Tt(n)}
			${C(A)}
		></cosmoz-resize-handle>
		<div class="panel" data-panel="next" ${C(b)} part="panel-next">
			<slot name="next" ${C(f)} @slotchange=${ae}></slot>
		</div>`};customElements.define("cosmoz-resizable-view",Ze(Zt,{styleSheets:[Ft],observedAttributes:["direction","reversed","persist","handle-label","initial-size","initial-size-horizontal","initial-size-vertical","min-size","min-size-horizontal","min-size-vertical","max-size","max-size-horizontal","max-size-vertical"]}));const{expect:v,waitFor:z}=__STORYBOOK_MODULE_TEST__,ns={title:"Components/ResizableView",tags:["autodocs"]},y=t=>`background:${t}; display:flex; align-items:center; justify-content:center; color:white;`,D={render:()=>_`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            initial-size="50%"
            handle-label="Drag to resize"
        >
            <div slot="previous" id="prev" style="${y("#ff6b6b")}">
                <h3>Left Panel</h3>
            </div>
            <div slot="next" id="next" style="${y("#4ecdc4")}">
                <h3>Right Panel</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await z(()=>{const s=t.querySelector("#prev");v(s).not.toBeNull()}),v(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered in shadow DOM between panel wrappers",async()=>{await z(()=>{var n;const s=(n=t.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");v(s).not.toBeNull()})})}},F={render:()=>_`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{const s=t.querySelector("cosmoz-resizable-view");await z(()=>{v(s.getAttribute("data-direction")).toBe("vertical")}),await z(()=>{var o;const n=(o=s.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle");v(n==null?void 0:n.getAttribute("data-direction")).toBe("vertical")})})}},H={render:()=>_`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await z(()=>{var o,i;const s=(o=t.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle");v(s).not.toBeNull();const n=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");v(n).not.toBeNull(),v((i=n==null?void 0:n.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle")).not.toBeNull()})})}},O={render:()=>_`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Previous panel respects min-size",async()=>{await z(()=>{const n=t.querySelector("cosmoz-resizable-view").shadowRoot.querySelector(".panel[data-panel='previous']");v(n.offsetWidth).toBeGreaterThanOrEqual(300)})})}},V={render:()=>_`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){const s=()=>t.querySelector("cosmoz-resizable-view"),n=()=>s().shadowRoot.querySelector(".panel[data-panel='previous']"),o=()=>s().shadowRoot.querySelector("cosmoz-resize-handle"),i=async(r,a)=>{const l=s().getBoundingClientRect();await z(()=>{o().dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:"start",mousePosition:{x:r,y:l.top}},bubbles:!0})),o().dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:"move",mousePosition:{x:r,y:l.top}},bubbles:!0})),v(n().getBoundingClientRect().width).toBe(a)})};await e("Renders with reversed visual order",async()=>{await z(()=>{const r=s();v(r.hasAttribute("reversed")).toBe(!0),v(r.reversed).toBe(!0);const a=n();v(a.getBoundingClientRect().right).toBe(r.getBoundingClientRect().right)})}),await e("Dragging resizes the previous panel from the right edge",async()=>{await i(s().getBoundingClientRect().left+150,450)}),await e("Removing reversed restores left-edge dragging",async()=>{const r=s();r.removeAttribute("reversed"),await z(()=>{v(getComputedStyle(r).flexDirection).toBe("row"),v(r.reversed).toBeFalsy(),v(n().getBoundingClientRect().left).toBe(r.getBoundingClientRect().left)}),await i(s().getBoundingClientRect().left+200,200)}),await e("Re-adding reversed resumes right-edge dragging",async()=>{const r=s();r.setAttribute("reversed",""),await z(()=>{v(getComputedStyle(r).flexDirection).toBe("row-reverse"),v(r.reversed).toBe(!0),v(n().getBoundingClientRect().right).toBe(r.getBoundingClientRect().right)}),await i(s().getBoundingClientRect().left+100,500)})}},I={render:()=>_`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Previous panel capped at 360px",async()=>{const s=t.querySelector("cosmoz-resizable-view"),n=s.shadowRoot.querySelector("cosmoz-resize-handle"),o=n.getBoundingClientRect(),i=(r,a,l)=>n.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:r,mousePosition:{x:a,y:l}},bubbles:!0}));i("start",o.left,o.top),i("move",900,o.top),await z(()=>{const r=s.shadowRoot.querySelector(".panel[data-panel='previous']");v(r.offsetWidth).toBeLessThanOrEqual(360)})})}},G={render:()=>_`<cosmoz-resize-handle
            style="height: 160px; min-height: 160px;
            --cz-color-border-primary: rgb(120 125 135);
            --cz-color-border-brand: rgb(115 94 177);
            --cz-accent-color: rgb(200 0 255);"
        ></cosmoz-resize-handle>`,async play({canvasElement:t}){const e=t.querySelector("cosmoz-resize-handle");await z(()=>v(e.hasAttribute("data-direction")).toBe(!0)),e.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})),v(getComputedStyle(e,"::before").backgroundColor).toBe("rgb(115, 94, 177)"),v(getComputedStyle(e,"::before").boxShadow).toBe("none"),v(e.getBoundingClientRect().width).toBe(1),document.dispatchEvent(new MouseEvent("mouseup")),v(e.hasAttribute("data-dragging")).toBe(!1)}};var Ce,$e,Be;D.parameters={...D.parameters,docs:{...(Ce=D.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            initial-size="50%"
            handle-label="Drag to resize"
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
}`,...(Be=($e=D.parameters)==null?void 0:$e.docs)==null?void 0:Be.source}}};var Re,Pe,Ae;F.parameters={...F.parameters,docs:{...(Re=F.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ae=(Pe=F.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.source}}};var Le,Me,Te;H.parameters={...H.parameters,docs:{...(Le=H.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Te=(Me=H.parameters)==null?void 0:Me.docs)==null?void 0:Te.source}}};var ke,qe,Ne;O.parameters={...O.parameters,docs:{...(ke=O.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ne=(qe=O.parameters)==null?void 0:qe.docs)==null?void 0:Ne.source}}};var De,Fe,He;V.parameters={...V.parameters,docs:{...(De=V.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(He=(Fe=V.parameters)==null?void 0:Fe.docs)==null?void 0:He.source}}};var Oe,Ve,Ie;I.parameters={...I.parameters,docs:{...(Oe=I.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ie=(Ve=I.parameters)==null?void 0:Ve.docs)==null?void 0:Ie.source}}};var Ge,je,We;G.parameters={...G.parameters,docs:{...(Ge=G.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
    expect(handle.getBoundingClientRect().width).toBe(1);
    document.dispatchEvent(new MouseEvent('mouseup'));
    expect(handle.hasAttribute('data-dragging')).toBe(false);
  }
}`,...(We=(je=G.parameters)==null?void 0:je.docs)==null?void 0:We.source}}};const os=["BasicDemo","VerticalDemo","MultiplePanels","ListDetailsSplit","ReversedDemo","CappedInitialSize","ThinDragFeedback"];export{D as BasicDemo,I as CappedInitialSize,O as ListDetailsSplit,H as MultiplePanels,V as ReversedDemo,G as ThinDragFeedback,F as VerticalDemo,os as __namedExportsOrder,ns as default};
