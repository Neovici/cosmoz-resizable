var je=Object.defineProperty;var Ue=(t,e,s)=>e in t?je(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var a=(t,e,s)=>Ue(t,typeof e!="symbol"?e+"":e,s);import{f as We,B as Qe,E as K,x as P}from"./iframe-BtxZbNCA.js";import"./preload-helper-C1FmrZbK.js";let G,ke=0;function ne(t){G=t}function oe(){G=null,ke=0}function Ve(){return ke++}const V=Symbol("haunted.phase"),I=Symbol("haunted.hook"),ie=Symbol("haunted.update"),re=Symbol("haunted.commit"),_=Symbol("haunted.effects"),M=Symbol("haunted.layoutEffects"),Z="haunted.context";var ve,me,be;be=I,me=_,ve=M;class Xe{constructor(e,s){a(this,"update");a(this,"host");a(this,"virtual");a(this,be);a(this,me);a(this,ve);this.update=e,this.host=s,this[I]=new Map,this[_]=[],this[M]=[]}run(e){ne(this);let s=e();return oe(),s}_runEffects(e){let s=this[e];ne(this);for(let n of s)n.call(this);oe()}runEffects(){this._runEffects(_)}runLayoutEffects(){this._runEffects(M)}teardown(){this[I].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class Ye extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const Je=100,Ke=Promise.resolve().then.bind(Promise.resolve());function Be(){let t=[],e;function s(){e=null;let n=t;t=[];for(var o=0,i=n.length;o<i;o++)n[o]()}return function(n){t.push(n),e==null&&(e=Ke(s))}}const Ze=Be(),ae=Be();var ye;ye=V;const U=class U{constructor(e,s){a(this,"renderer");a(this,"host");a(this,"state");a(this,ye);a(this,"_updateQueued");a(this,"_active");a(this,"_updateCount");a(this,"_processing");this.renderer=e,this.host=s,this.state=new Xe(this.update.bind(this),s),this[V]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>U.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new Ye(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,Ze(()=>{let e=this.handlePhase(ie);ae(()=>{this.handlePhase(re,e),ae(()=>{this.handlePhase(_),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[V]=e,e){case re:this.commit(s),this.runEffects(M);return;case ie:return this.render();case _:return this.runEffects(_)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};a(U,"maxUpdates",Je);let ee=U;const et=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},tt=t=>t==null?void 0:t.map(e=>typeof e=="string"?et(e):e),st=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),Te=st,nt=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function ot(t){class e extends ee{constructor(i,c,r){super(i,r||c);a(this,"frag");a(this,"renderResult");this.frag=c}commit(i){this.renderResult=t(i,this.frag)}}function s(n,o,i){const c=(i||o||{}).baseElement||HTMLElement,{observedAttributes:r=[],useShadowDOM:l=!0,shadowRootInit:h={},styleSheets:p}=i||o||{},u=tt(n.styleSheets||p);class g extends c{constructor(){super();a(this,"_scheduler");if(l===!1)this._scheduler=new e(n,this);else{const d=this.attachShadow({mode:"open",...h});u&&(d.adoptedStyleSheets=u),this._scheduler=new e(n,d,this)}}static get observedAttributes(){return n.observedAttributes||r||[]}connectedCallback(){var d;this._scheduler.resume(),this._scheduler.update(),(d=this._scheduler.renderResult)==null||d.setConnected(!0)}disconnectedCallback(){var d;this._scheduler.pause(),this._scheduler.teardown(),(d=this._scheduler.renderResult)==null||d.setConnected(!1)}attributeChangedCallback(d,m,f){if(m===f)return;let Q=f===""?!0:f;Reflect.set(this,nt(d),Q)}}function k(x){let v=x,d=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return v},set(m){d&&v===m||(d=!0,v=m,this._scheduler&&this._scheduler.update())}})}const W=new Proxy(c.prototype,{getPrototypeOf(x){return x},set(x,v,d,m){let f;return v in x?(f=Object.getOwnPropertyDescriptor(x,v),f&&f.set?(f.set.call(m,d),!0):(Reflect.set(x,v,d,m),!0)):(typeof v=="symbol"||v[0]==="_"?f={enumerable:!0,configurable:!0,writable:!0,value:d}:f=k(d),Object.defineProperty(m,v,f),f.set&&f.set.call(m,d),!0)}});return Object.setPrototypeOf(g.prototype,W),g}return s}class E{constructor(e,s){a(this,"id");a(this,"state");this.id=e,this.state=s}}function it(t,...e){let s=Ve(),n=G[I],o=n.get(s);return o||(o=new t(s,G,...e),n.set(s,o)),o.update(...e)}function $(t){return it.bind(null,t)}function qe(t){return $(class extends E{constructor(s,n,o,i){super(s,n);a(this,"callback");a(this,"lastValues");a(this,"values");a(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function De(t,e){t[_].push(e)}const L=qe(De),rt=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,at=$(class extends E{constructor(e,s,n){super(e,s);a(this,"Context");a(this,"value");a(this,"_ranEffect");a(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,De(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};rt(this.state.host).dispatchEvent(new CustomEvent(Z,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:o=null,value:i}=s;this.value=o?i:e.defaultValue,this._unsubscribe=o}teardown(){this._unsubscribe&&this._unsubscribe()}});function lt(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();a(this,"listeners");a(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(Z,this)}disconnectedCallback(){this.removeEventListener(Z,this)}handleEvent(o){const{detail:i}=o;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),o.stopPropagation())}unsubscribe(o){this.listeners.delete(o)}set value(o){this._value=o;for(let i of this.listeners)i(o)}get value(){return this._value}},Consumer:t(function({render:n}){const o=at(s);return n(o)},{useShadowDOM:!1}),defaultValue:e};return s}}const te=$(class extends E{constructor(e,s,n,o){super(e,s);a(this,"value");a(this,"values");this.value=n(),this.values=o}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}}),le=(t,e)=>te(()=>t,e);function ct(t,e){t[M].push(e)}qe(ct);const ut=$(class extends E{constructor(e,s,n){super(e,s);a(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});$(class extends E{constructor(e,s,n,o,i){super(e,s);a(this,"reducer");a(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(o):o}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const dt=/([A-Z])/gu;$(class extends E{constructor(e,s,n,o){super(e,s);a(this,"property");a(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(dt,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof o=="function"&&(o=o()),o!=null&&this.updater(o,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],n=typeof e=="function"?e:void 0,o=n?n(s):e;return[s,o,n]}notify(e,s){const n=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,s=!1){const[n,o,i]=this.resolve(e),c=this.notify(o,i);!s&&c.defaultPrevented||Object.is(n,o)||(this.state.host[this.property]=o)}});function ht(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function A(t){return te(()=>ht(t),[])}const Oe=$(class extends E{update(){return this.state.host}});function pt({render:t}){const e=ot(t),s=lt(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft={CHILD:2},vt=t=>(...e)=>({_$litDirective$:t,values:e});class mt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=(t,e)=>{var n;const s=t._$AN;if(s===void 0)return!1;for(const o of s)(n=o._$AO)==null||n.call(o,e,!1),R(o,e);return!0},j=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},Fe=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),xt(e)}};function bt(t){this._$AN!==void 0?(j(this),this._$AM=t,Fe(this)):this._$AM=t}function yt(t,e=!1,s=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let i=s;i<n.length;i++)R(n[i],!1),j(n[i]);else n!=null&&(R(n,!1),j(n));else R(this,t)}const xt=t=>{t.type==ft.CHILD&&(t._$AP??(t._$AP=yt),t._$AQ??(t._$AQ=bt))};class wt extends mt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),Fe(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,o;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),s&&(R(this,e),j(this))}setValue(e){if(We(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:He}=pt({render:Qe}),X=new WeakMap,T=vt(class extends wt{render(t){return K}update(t,[e]){var n;const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=(n=t.options)==null?void 0:n.host,this.rt(this.ct=t.element)),K}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=X.get(e);s===void 0&&(s=new WeakMap,X.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=X.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),zt=t=>{if(typeof t!="object"||t==null)return!1;const e=t;return typeof e.px=="number"&&e.px>=0&&!Number.isNaN(e.px)},ce=t=>{try{const e=JSON.parse(t);if(zt(e))return e}catch{}},gt=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const n=new Map,o=()=>{s=void 0;for(const[r,l]of n)try{localStorage.setItem(t+r,JSON.stringify(l))}catch{}n.clear()},i=(r,l)=>{n.set(r,l),s==null&&(s=setTimeout(o,100))},c=r=>{if(r.key==null||!r.key.startsWith(t)||r.newValue==null)return;const l=r.key.slice(t.length),h=ce(r.newValue);if(h==null)return;const p=e.get(l);if(p)for(const u of p)u(h)};return typeof window<"u"&&window.addEventListener("storage",c),{get(r){let l;try{l=localStorage.getItem(t+r)}catch{return}if(l!=null)return ce(l)},set(r,l){i(r,l)},subscribe(r,l){let h=e.get(r);return h||(h=new Set,e.set(r,h)),h.add(l),()=>{const p=e.get(r);p&&(p.delete(l),p.size===0&&e.delete(r))}},destroy(){typeof window<"u"&&window.removeEventListener("storage",c),s!=null&&(clearTimeout(s),o())}}},_t=(t,e,s)=>{const n=A(s);if(n.current=s,L(()=>{var c,r;if(!t||!e)return;const o=t.get(e);(c=n.current)==null||c.call(n,o);const i=(r=t.subscribe)==null?void 0:r.call(t,e,l=>{var h;return(h=n.current)==null?void 0:h.call(n,l)});return()=>{var l;i==null||i(),(l=t.destroy)==null||l.call(t)}},[t,e]),!(!t||!e))return o=>t.set(e,o)},ue=t=>{const e=t.trim();if(e==="")return e;const s=Number(e);return Number.isNaN(s)?e:`${s}px`},St=t=>{if(t==null||t.trim()==="")return{};const e=t.includes(",")?t.split(/,\s*/u):t.split(/\s+/u);return{previous:ue(e[0]),next:e.length>1?ue(e[1]):void 0}},Et=Te`
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

	::slotted([slot='previous']) {
		flex-grow: 0;
		flex-shrink: 1;
		flex-basis: var(--resizable-previous-basis, auto);
		min-width: 0;
		min-height: 0;
		overflow: auto;
	}

	::slotted([slot='next']) {
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: var(--resizable-next-basis, 0);
		min-width: 0;
		min-height: 0;
		overflow: auto;
	}

	:host([data-direction='horizontal']) ::slotted([slot='previous']) {
		min-width: var(
			--resizable-previous-min-horizontal,
			var(--resizable-previous-min, 0)
		);
	}
	:host([data-direction='horizontal']) ::slotted([slot='next']) {
		min-width: var(
			--resizable-next-min-horizontal,
			var(--resizable-next-min, 0)
		);
	}
	:host([data-direction='vertical']) ::slotted([slot='previous']) {
		min-height: var(
			--resizable-previous-min-vertical,
			var(--resizable-previous-min, 0)
		);
	}
	:host([data-direction='vertical']) ::slotted([slot='next']) {
		min-height: var(
			--resizable-next-min-vertical,
			var(--resizable-next-min, 0)
		);
	}

	cosmoz-resize-handle {
		flex: 0 0 auto;
	}

	:host([data-single-panel]) cosmoz-resize-handle {
		display: none;
	}

	:host([data-single-panel]) ::slotted(*) {
		flex-grow: 1 !important;
		flex-shrink: 1 !important;
		flex-basis: 0;
	}
`,Y=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},$t=(t,e,s)=>s==="horizontal"?t.x-e.left:t.y-e.top,de=t=>{const e=parseFloat(t);return Number.isNaN(e)?void 0:e},Ct=(t,e)=>{const s=getComputedStyle(t);return{min:e==="horizontal"?de(s.minWidth)??0:de(s.minHeight)??0}},he=t=>({rect:t.container.getBoundingClientRect(),bounds:Ct(t.previous,t.direction)}),At=(t,e,s,n)=>Math.max(n.min,$t(t,e,s)),Lt=t=>{let e;return s=>{var c,r;const{phase:n,mousePosition:o}=s.detail;if(n==="start"){e=he(t);return}if(n!=="move"&&n!=="end")return;e||(e=he(t));const i=At(o,e.rect,t.direction,e.bounds);n==="move"?(c=t.onResize)==null||c.call(t,i):((r=t.onResizeEnd)==null||r.call(t),e=void 0)}},Pt=(t="horizontal")=>{const e=Oe();return L(()=>{e.setAttribute("data-direction",t)},[t]),L(()=>{const s=(u,g)=>{e.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:u,mousePosition:g},bubbles:!0}))};let n=0,o;const i=()=>{n=0,o&&(s("move",o),o=void 0)},c=u=>{o=Y(u),n||(n=requestAnimationFrame(i))},r=u=>{n&&(cancelAnimationFrame(n),i()),e.removeAttribute("data-dragging"),s("end",Y(u)),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",r)},l=u=>{e.setAttribute("data-dragging","true"),s("start",Y(u)),document.addEventListener("mousemove",c),document.addEventListener("mouseup",r),document.addEventListener("touchmove",c,{passive:!1}),document.addEventListener("touchend",r)},h=u=>{u.preventDefault(),l(u)},p=u=>{u.preventDefault(),l(u)};return e.addEventListener("mousedown",h),e.addEventListener("touchstart",p,{passive:!1}),()=>{n&&cancelAnimationFrame(n),e.removeEventListener("mousedown",h),e.removeEventListener("touchstart",p),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",r)}},[e]),null},Nt=Te`
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
`,Mt=({direction:t="horizontal"})=>(Pt(t),K);customElements.define("cosmoz-resize-handle",He(Mt,{styleSheets:[Nt],observedAttributes:["direction"]}));const pe=t=>getComputedStyle(t).display!=="none",J=t=>t==null?void 0:t.assignedElements()[0],Rt=(t,e,s)=>{const n=()=>{const i=pe(e)&&pe(s);t.toggleAttribute("data-single-panel",!i)},o=new ResizeObserver(()=>queueMicrotask(n));return o.observe(e),o.observe(s),n(),o},kt=(t,e)=>{if(e==null){t.style.flexBasis="";return}t.style.flexBasis=`${e.px}px`},fe=(t,e,s,n,o)=>{const i=(c,r)=>{const{previous:l,next:h}=St(r??null),p=`--resizable-previous-${e}${c}`,u=`--resizable-next-${e}${c}`;l!=null?t.style.setProperty(p,l):t.style.removeProperty(p),h!=null?t.style.setProperty(u,h):t.style.removeProperty(u)};i("",s),i("-horizontal",n),i("-vertical",o)},Bt=({direction:t="horizontal",persist:e,initialSize:s,initialSizeHorizontal:n,initialSizeVertical:o,minSize:i,minSizeHorizontal:c,minSizeVertical:r})=>{const l=Oe(),h=A(),p=A(),u=A(),g=A(),[k,W]=ut(!1),x=e?`${e}:${t}`:void 0,v=te(()=>e?gt():void 0,[e]),d=_t(v,x,b=>{const z=J(p.current);z&&kt(z,b)}),m=A(d);m.current=d;const f=le(()=>{var C,N;const b=(C=p.current)==null?void 0:C.assignedElements()[0],z=(N=u.current)==null?void 0:N.assignedElements()[0];b&&z&&W(!0)},[]),Q=le(()=>{var b;(b=g.current)==null||b.assignedElements().forEach(z=>z.setAttribute("slot","previous"))},[]);return L(()=>{l.setAttribute("data-direction",t)},[t]),L(()=>{fe(l,"basis",s,n,o),fe(l,"min",i,c,r)},[l,s,n,o,i,c,r]),L(()=>{if(!k)return;const b=J(p.current),z=J(u.current),C=h.current;if(!b||!z||!C)return;const N=Lt({container:l,previous:b,direction:t,onResize:B=>{b.style.flexBasis=`${B}px`},onResizeEnd:()=>{requestAnimationFrame(()=>{var se;const B=b.getBoundingClientRect(),Ge=t==="horizontal"?B.width:B.height;(se=m.current)==null||se.call(m,{px:Ge})})}});C.addEventListener("resize-handle",N);const Ie=Rt(l,b,z);return()=>{C.removeEventListener("resize-handle",N),Ie.disconnect()}},[t,v,e,l,k]),P`<slot
			${T(g)}
			@slotchange=${Q}
		></slot
		><slot
			name="previous"
			${T(p)}
			@slotchange=${f}
		></slot
		><cosmoz-resize-handle
			direction=${t}
			${T(h)}
		></cosmoz-resize-handle
		><slot name="next" ${T(u)} @slotchange=${f}></slot>`};customElements.define("cosmoz-resizable-view",He(Bt,{styleSheets:[Et],observedAttributes:["direction","persist","initial-size","initial-size-horizontal","initial-size-vertical","min-size","min-size-horizontal","min-size-vertical"]}));const{expect:w,waitFor:S}=__STORYBOOK_MODULE_TEST__,Ot={title:"Components/ResizableView",tags:["autodocs"]},y=t=>`background:${t}; display:flex; align-items:center; justify-content:center; color:white; overflow:auto;`,q={render:()=>P`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
        >
            <div
                slot="previous"
                id="prev"
                style="${y("#ff6b6b")} flex-basis: 50%;"
            >
                <h3>Left Panel</h3>
            </div>
            <div slot="next" id="next" style="${y("#4ecdc4")}">
                <h3>Right Panel</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await S(()=>{const s=t.querySelector("#prev");w(s).not.toBeNull()}),w(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered in shadow DOM between named slots",async()=>{await S(()=>{var n;const s=(n=t.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");w(s).not.toBeNull()})})}},D={render:()=>P`<cosmoz-resizable-view
            style="display:flex; flex-direction:column; width:600px; height:400px; border:1px solid #ccc;"
            direction="vertical"
        >
            <div
                slot="previous"
                style="${y("#ff6b6b")} padding:20px; flex-basis: 50%;"
            >
                <h3>Top Panel</h3>
            </div>
            <div slot="next" style="${y("#4ecdc4")} padding:20px;">
                <h3>Bottom Panel</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{const s=t.querySelector("cosmoz-resizable-view");await S(()=>{w(s.getAttribute("data-direction")).toBe("vertical")}),await S(()=>{var o;const n=(o=s.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle");w(n==null?void 0:n.getAttribute("data-direction")).toBe("vertical")})})}},O={render:()=>P`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
        >
            <div slot="previous" style="${y("#ff6b6b")} flex-basis: 50%;">
                <h3>Left Panel</h3>
            </div>
            <cosmoz-resizable-view
                slot="next"
                direction="vertical"
                style="display:flex;"
            >
                <div
                    slot="previous"
                    style="${y("#ffa726")} padding:10px; flex-basis: 50%;"
                >
                    <h3>Top Panel</h3>
                </div>
                <div slot="next" style="${y("#45b7d1")} padding:10px;">
                    <h3>Bottom Panel</h3>
                </div>
            </cosmoz-resizable-view>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await S(()=>{var o,i;const s=(o=t.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle");w(s).not.toBeNull();const n=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");w(n).not.toBeNull(),w((i=n==null?void 0:n.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle")).not.toBeNull()})})}},F={render:()=>P`<cosmoz-resizable-view
            style="display:flex; width:800px; height:300px; border:1px solid #ccc;"
        >
            <div
                id="list"
                slot="previous"
                style="${y("#ff6b6b")} flex-basis: 25%; min-width: 300px;"
            >
                <h3>List (25% or 300px min)</h3>
            </div>
            <div id="details" slot="next" style="${y("#4ecdc4")}">
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Left panel respects CSS min-width",async()=>{await S(()=>{const s=t.querySelector("#list");w(s.offsetWidth).toBeGreaterThanOrEqual(300)})})}},H={render:()=>P`<cosmoz-resizable-view
            style="display:flex; width:1000px; height:300px; border:1px solid #ccc;"
        >
            <div
                id="list"
                slot="previous"
                style="${y("#ff6b6b")} flex-basis: 40%; max-width: 360px;"
            >
                <h3>List (40% or 360px max)</h3>
            </div>
            <div id="details" slot="next" style="${y("#4ecdc4")}">
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Left panel capped at 360px by CSS max-width",async()=>{await S(()=>{const s=t.querySelector("#list");w(s.offsetWidth).toBeLessThanOrEqual(360)})})}};var xe,we,ze;q.parameters={...q.parameters,docs:{...(xe=q.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
        >
            <div
                slot="previous"
                id="prev"
                style="\${panelStyle('#ff6b6b')} flex-basis: 50%;"
            >
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
    await step('Handle is rendered in shadow DOM between named slots', async () => {
      await waitFor(() => {
        const handle = canvasElement.shadowRoot?.querySelector('cosmoz-resize-handle');
        expect(handle).not.toBeNull();
      });
    });
  }
}`,...(ze=(we=q.parameters)==null?void 0:we.docs)==null?void 0:ze.source}}};var ge,_e,Se;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; flex-direction:column; width:600px; height:400px; border:1px solid #ccc;"
            direction="vertical"
        >
            <div
                slot="previous"
                style="\${panelStyle('#ff6b6b')} padding:20px; flex-basis: 50%;"
            >
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
}`,...(Se=(_e=D.parameters)==null?void 0:_e.docs)==null?void 0:Se.source}}};var Ee,$e,Ce;O.parameters={...O.parameters,docs:{...(Ee=O.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
        >
            <div slot="previous" style="\${panelStyle('#ff6b6b')} flex-basis: 50%;">
                <h3>Left Panel</h3>
            </div>
            <cosmoz-resizable-view
                slot="next"
                direction="vertical"
                style="display:flex;"
            >
                <div
                    slot="previous"
                    style="\${panelStyle('#ffa726')} padding:10px; flex-basis: 50%;"
                >
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
}`,...(Ce=($e=O.parameters)==null?void 0:$e.docs)==null?void 0:Ce.source}}};var Ae,Le,Pe;F.parameters={...F.parameters,docs:{...(Ae=F.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; width:800px; height:300px; border:1px solid #ccc;"
        >
            <div
                id="list"
                slot="previous"
                style="\${panelStyle('#ff6b6b')} flex-basis: 25%; min-width: 300px;"
            >
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
    await step('Left panel respects CSS min-width', async () => {
      await waitFor(() => {
        const list = canvasElement.querySelector('#list') as HTMLElement;
        expect(list.offsetWidth).toBeGreaterThanOrEqual(300);
      });
    });
  }
}`,...(Pe=(Le=F.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source}}};var Ne,Me,Re;H.parameters={...H.parameters,docs:{...(Ne=H.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; width:1000px; height:300px; border:1px solid #ccc;"
        >
            <div
                id="list"
                slot="previous"
                style="\${panelStyle('#ff6b6b')} flex-basis: 40%; max-width: 360px;"
            >
                <h3>List (40% or 360px max)</h3>
            </div>
            <div id="details" slot="next" style="\${panelStyle('#4ecdc4')}">
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>\`,
  async play({
    canvasElement,
    step
  }) {
    await step('Left panel capped at 360px by CSS max-width', async () => {
      await waitFor(() => {
        const list = canvasElement.querySelector('#list') as HTMLElement;
        expect(list.offsetWidth).toBeLessThanOrEqual(360);
      });
    });
  }
}`,...(Re=(Me=H.parameters)==null?void 0:Me.docs)==null?void 0:Re.source}}};const Ft=["BasicDemo","VerticalDemo","MultiplePanels","ListDetailsSplit","CappedInitialSize"];export{q as BasicDemo,H as CappedInitialSize,F as ListDetailsSplit,O as MultiplePanels,D as VerticalDemo,Ft as __namedExportsOrder,Ot as default};
