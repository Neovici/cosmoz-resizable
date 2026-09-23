var tt=Object.defineProperty;var st=(t,e,s)=>e in t?tt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var l=(t,e,s)=>st(t,typeof e!="symbol"?e+"":e,s);import{f as nt,B as ot,E as te,x as E}from"./iframe-CUAAF2Y3.js";import"./preload-helper-C1FmrZbK.js";let W,We=0;function ae(t){W=t}function le(){W=null,We=0}function it(){return We++}const J=Symbol("haunted.phase"),U=Symbol("haunted.hook"),ce=Symbol("haunted.update"),de=Symbol("haunted.commit"),$=Symbol("haunted.effects"),q=Symbol("haunted.layoutEffects"),se="haunted.context";var ge,ze,Se;Se=U,ze=$,ge=q;class rt{constructor(e,s){l(this,"update");l(this,"host");l(this,"virtual");l(this,Se);l(this,ze);l(this,ge);this.update=e,this.host=s,this[U]=new Map,this[$]=[],this[q]=[]}run(e){ae(this);let s=e();return le(),s}_runEffects(e){let s=this[e];ae(this);for(let n of s)n.call(this);le()}runEffects(){this._runEffects($)}runLayoutEffects(){this._runEffects(q)}teardown(){this[U].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class at extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const lt=100,ct=Promise.resolve().then.bind(Promise.resolve());function Qe(){let t=[],e;function s(){e=null;let n=t;t=[];for(var o=0,i=n.length;o<i;o++)n[o]()}return function(n){t.push(n),e==null&&(e=ct(s))}}const dt=Qe(),ue=Qe();var Ee;Ee=J;const V=class V{constructor(e,s){l(this,"renderer");l(this,"host");l(this,"state");l(this,Ee);l(this,"_updateQueued");l(this,"_active");l(this,"_updateCount");l(this,"_processing");this.renderer=e,this.host=s,this.state=new rt(this.update.bind(this),s),this[J]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>V.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new at(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,dt(()=>{let e=this.handlePhase(ce);ue(()=>{this.handlePhase(de,e),ue(()=>{this.handlePhase($),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[J]=e,e){case de:this.commit(s),this.runEffects(q);return;case ce:return this.render();case $:return this.runEffects($)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};l(V,"maxUpdates",lt);let ne=V;const ut=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},ht=t=>t==null?void 0:t.map(e=>typeof e=="string"?ut(e):e),pt=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),Ve=pt,ft=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function vt(t){class e extends ne{constructor(i,c,a){super(i,a||c);l(this,"frag");l(this,"renderResult");this.frag=c}commit(i){this.renderResult=t(i,this.frag)}}function s(n,o,i){const c=(i||o||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:r=!0,shadowRootInit:u={},styleSheets:h}=i||o||{},d=ht(n.styleSheets||h);class _ extends c{constructor(){super();l(this,"_scheduler");if(r===!1)this._scheduler=new e(n,this);else{const p=this.attachShadow({mode:"open",...u});d&&(p.adoptedStyleSheets=d),this._scheduler=new e(n,p,this)}}static get observedAttributes(){return n.observedAttributes||a||[]}connectedCallback(){var p;this._scheduler.resume(),this._scheduler.update(),(p=this._scheduler.renderResult)==null||p.setConnected(!0)}disconnectedCallback(){var p;this._scheduler.pause(),this._scheduler.teardown(),(p=this._scheduler.renderResult)==null||p.setConnected(!1)}attributeChangedCallback(p,w,m){if(w===m)return;let Y=m===""?!0:m;Reflect.set(this,ft(p),Y)}}function B(g){let v=g,p=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return v},set(w){p&&v===w||(p=!0,v=w,this._scheduler&&this._scheduler.update())}})}const X=new Proxy(c.prototype,{getPrototypeOf(g){return g},set(g,v,p,w){let m;return v in g?(m=Object.getOwnPropertyDescriptor(g,v),m&&m.set?(m.set.call(w,p),!0):(Reflect.set(g,v,p,w),!0)):(typeof v=="symbol"||v[0]==="_"?m={enumerable:!0,configurable:!0,writable:!0,value:p}:m=B(p),Object.defineProperty(w,v,m),m.set&&m.set.call(w,p),!0)}});return Object.setPrototypeOf(_.prototype,X),_}return s}class A{constructor(e,s){l(this,"id");l(this,"state");this.id=e,this.state=s}}function mt(t,...e){let s=it(),n=W[U],o=n.get(s);return o||(o=new t(s,W,...e),n.set(s,o)),o.update(...e)}function C(t){return mt.bind(null,t)}function Xe(t){return C(class extends A{constructor(s,n,o,i){super(s,n);l(this,"callback");l(this,"lastValues");l(this,"values");l(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function Ye(t,e){t[$].push(e)}const M=Xe(Ye),bt=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,yt=C(class extends A{constructor(e,s,n){super(e,s);l(this,"Context");l(this,"value");l(this,"_ranEffect");l(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Ye(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};bt(this.state.host).dispatchEvent(new CustomEvent(se,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:o=null,value:i}=s;this.value=o?i:e.defaultValue,this._unsubscribe=o}teardown(){this._unsubscribe&&this._unsubscribe()}});function wt(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();l(this,"listeners");l(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(se,this)}disconnectedCallback(){this.removeEventListener(se,this)}handleEvent(o){const{detail:i}=o;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),o.stopPropagation())}unsubscribe(o){this.listeners.delete(o)}set value(o){this._value=o;for(let i of this.listeners)i(o)}get value(){return this._value}},Consumer:t(function({render:n}){const o=yt(s);return n(o)},{useShadowDOM:!1}),defaultValue:e};return s}}const oe=C(class extends A{constructor(e,s,n,o){super(e,s);l(this,"value");l(this,"values");this.value=n(),this.values=o}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}}),he=(t,e)=>oe(()=>t,e);function xt(t,e){t[q].push(e)}Xe(xt);const gt=C(class extends A{constructor(e,s,n){super(e,s);l(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});C(class extends A{constructor(e,s,n,o,i){super(e,s);l(this,"reducer");l(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(o):o}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const zt=/([A-Z])/gu;C(class extends A{constructor(e,s,n,o){super(e,s);l(this,"property");l(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(zt,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof o=="function"&&(o=o()),o!=null&&this.updater(o,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],n=typeof e=="function"?e:void 0,o=n?n(s):e;return[s,o,n]}notify(e,s){const n=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,s=!1){const[n,o,i]=this.resolve(e),c=this.notify(o,i);!s&&c.defaultPrevented||Object.is(n,o)||(this.state.host[this.property]=o)}});function St(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function L(t){return oe(()=>St(t),[])}const Je=C(class extends A{update(){return this.state.host}});function Et({render:t}){const e=vt(t),s=wt(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t={CHILD:2},$t=t=>(...e)=>({_$litDirective$:t,values:e});class At{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=(t,e)=>{var n;const s=t._$AN;if(s===void 0)return!1;for(const o of s)(n=o._$AO)==null||n.call(o,e,!1),T(o,e);return!0},Q=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},Ke=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),Pt(e)}};function Ct(t){this._$AN!==void 0?(Q(this),this._$AM=t,Ke(this)):this._$AM=t}function Bt(t,e=!1,s=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let i=s;i<n.length;i++)T(n[i],!1),Q(n[i]);else n!=null&&(T(n,!1),Q(n));else T(this,t)}const Pt=t=>{t.type==_t.CHILD&&(t._$AP??(t._$AP=Bt),t._$AQ??(t._$AQ=Ct))};class Lt extends At{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),Ke(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,o;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),s&&(T(this,e),Q(this))}setValue(e){if(nt(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:Ze}=Et({render:ot}),K=new WeakMap,k=$t(class extends Lt{render(t){return te}update(t,[e]){var n;const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=(n=t.options)==null?void 0:n.host,this.rt(this.ct=t.element)),te}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=K.get(e);s===void 0&&(s=new WeakMap,K.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=K.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Mt=t=>{if(typeof t!="object"||t==null)return!1;const e=t;return typeof e.px=="number"&&e.px>=0&&!Number.isNaN(e.px)},pe=t=>{try{const e=JSON.parse(t);if(Mt(e))return e}catch{}},Rt=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const n=new Map,o=()=>{s=void 0;for(const[a,r]of n)try{localStorage.setItem(t+a,JSON.stringify(r))}catch{}n.clear()},i=(a,r)=>{n.set(a,r),s==null&&(s=setTimeout(o,100))},c=a=>{if(a.key==null||!a.key.startsWith(t)||a.newValue==null)return;const r=a.key.slice(t.length),u=pe(a.newValue);if(u==null)return;const h=e.get(r);if(h)for(const d of h)d(u)};return typeof window<"u"&&window.addEventListener("storage",c),{get(a){let r;try{r=localStorage.getItem(t+a)}catch{return}if(r!=null)return pe(r)},set(a,r){i(a,r)},subscribe(a,r){let u=e.get(a);return u||(u=new Set,e.set(a,u)),u.add(r),()=>{const h=e.get(a);h&&(h.delete(r),h.size===0&&e.delete(a))}},destroy(){typeof window<"u"&&window.removeEventListener("storage",c),s!=null&&(clearTimeout(s),o())}}},qt=(t,e,s)=>{const n=L(s);if(n.current=s,M(()=>{var c,a;if(!t||!e)return;const o=t.get(e);(c=n.current)==null||c.call(n,o);const i=(a=t.subscribe)==null?void 0:a.call(t,e,r=>{var u;return(u=n.current)==null?void 0:u.call(n,r)});return()=>{var r;i==null||i(),(r=t.destroy)==null||r.call(t)}},[t,e]),!(!t||!e))return o=>t.set(e,o)},fe=t=>{const e=t.trim();if(e==="")return e;const s=Number(e);return Number.isNaN(s)?e:`${s}px`},Tt=t=>{if(t==null||t.trim()==="")return{};const e=t.includes(",")?t.split(/,\s*/u):t.match(/(?:[^\s()]+\([^)]*\)|\([^)]*\)|[^\s]+)/gu)??[t];return{previous:fe(e[0]),next:e.length>1?fe(e[1]):void 0}},Nt=Ve`
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
`,Z=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},kt=(t,e,s)=>s==="horizontal"?t.x-e.left:t.y-e.top,ve=t=>{const e=parseFloat(t);return Number.isNaN(e)?void 0:e},Dt=(t,e)=>{const s=getComputedStyle(t);return{min:e==="horizontal"?ve(s.minWidth)??0:ve(s.minHeight)??0}},me=t=>({rect:t.container.getBoundingClientRect(),bounds:Dt(t.previous,t.direction)}),Ot=(t,e,s,n)=>Math.max(n.min,kt(t,e,s)),Ft=t=>{let e;return s=>{var c,a;const{phase:n,mousePosition:o}=s.detail;if(n==="start"){e=me(t);return}if(n!=="move"&&n!=="end")return;e||(e=me(t));const i=Ot(o,e.rect,t.direction,e.bounds);n==="move"?(c=t.onResize)==null||c.call(t,i):((a=t.onResizeEnd)==null||a.call(t),e=void 0)}},Ht=(t="horizontal")=>{const e=Je();return M(()=>{e.setAttribute("data-direction",t)},[t]),M(()=>{const s=(d,_)=>{e.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:d,mousePosition:_},bubbles:!0}))};let n=0,o;const i=()=>{n=0,o&&(s("move",o),o=void 0)},c=d=>{o=Z(d),n||(n=requestAnimationFrame(i))},a=d=>{n&&(cancelAnimationFrame(n),i()),e.removeAttribute("data-dragging"),s("end",Z(d)),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",a)},r=d=>{e.setAttribute("data-dragging","true"),s("start",Z(d)),document.addEventListener("mousemove",c),document.addEventListener("mouseup",a),document.addEventListener("touchmove",c,{passive:!1}),document.addEventListener("touchend",a)},u=d=>{d.preventDefault(),r(d)},h=d=>{d.preventDefault(),r(d)};return e.addEventListener("mousedown",u),e.addEventListener("touchstart",h,{passive:!1}),()=>{n&&cancelAnimationFrame(n),e.removeEventListener("mousedown",u),e.removeEventListener("touchstart",h),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",a)}},[e]),null},Gt=Ve`
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
`,It=({direction:t="horizontal"})=>(Ht(t),te);customElements.define("cosmoz-resize-handle",Ze(It,{styleSheets:[Gt],observedAttributes:["direction"]}));const be=t=>getComputedStyle(t).display!=="none",ee=t=>t==null?void 0:t.assignedElements()[0],jt=(t,e,s)=>{const n=()=>{const i=be(e)&&be(s);t.toggleAttribute("data-single-panel",!i)},o=new ResizeObserver(()=>queueMicrotask(n));return o.observe(e),o.observe(s),n(),o},ye=(t,e)=>{if(e==null){t.style.flexBasis="";return}t.style.flexBasis=`${e.px}px`},we=(t,e,s,n,o)=>{const i=(c,a)=>{const{previous:r,next:u}=Tt(a??null),h=`--resizable-previous-${e}${c}`,d=`--resizable-next-${e}${c}`;r!=null?t.style.setProperty(h,r):t.style.removeProperty(h),u!=null?t.style.setProperty(d,u):t.style.removeProperty(d)};i("",s),i("-horizontal",n),i("-vertical",o)},Ut=({direction:t="horizontal",persist:e,initialSize:s,initialSizeHorizontal:n,initialSizeVertical:o,minSize:i,minSizeHorizontal:c,minSizeVertical:a})=>{const r=Je(),u=L(),h=L(),d=L(),_=L(),[B,X]=gt({prev:void 0,next:void 0}),g=e?`${e}:${t}`:void 0,v=oe(()=>e?Rt():void 0,[e]),p=qt(v,g,b=>{const z=ee(h.current);z&&ye(z,b)}),w=L(p);w.current=p;const m=he(()=>{var P,S;const b=(P=h.current)==null?void 0:P.assignedElements()[0],z=(S=d.current)==null?void 0:S.assignedElements()[0];X(R=>R.prev===b&&R.next===z?R:{prev:b,next:z})},[]),Y=he(()=>{var b;(b=_.current)==null||b.assignedElements().forEach(z=>z.setAttribute("slot","previous"))},[]);return M(()=>{r.setAttribute("data-direction",t)},[t]),M(()=>{we(r,"basis",s,n,o),we(r,"min",i,c,a)},[r,s,n,o,i,c,a]),M(()=>{if(!B.prev&&!B.next)return;const b=ee(h.current),z=ee(d.current),P=u.current,S=b&&z?jt(r,b,z):(r.toggleAttribute("data-single-panel",!0),null);if(!b||!z||!P)return()=>S==null?void 0:S.disconnect();b.style.flexBasis="",z.style.flexBasis="";const R=g?v==null?void 0:v.get(g):void 0;ye(b,R);const ie=Ft({container:r,previous:b,direction:t,onResize:N=>{b.style.flexBasis=`${N}px`},onResizeEnd:()=>{requestAnimationFrame(()=>{var re;const N=b.getBoundingClientRect(),et=t==="horizontal"?N.width:N.height;(re=w.current)==null||re.call(w,{px:et})})}});return P.addEventListener("resize-handle",ie),()=>{P.removeEventListener("resize-handle",ie),S==null||S.disconnect()}},[t,v,e,r,B.prev,B.next]),E`<slot
			${k(_)}
			@slotchange=${Y}
		></slot
		><slot
			name="previous"
			${k(h)}
			@slotchange=${m}
		></slot
		><cosmoz-resize-handle
			direction=${t}
			${k(u)}
		></cosmoz-resize-handle
		><slot name="next" ${k(d)} @slotchange=${m}></slot>`};customElements.define("cosmoz-resizable-view",Ze(Ut,{styleSheets:[Nt],observedAttributes:["direction","persist","initial-size","initial-size-horizontal","initial-size-vertical","min-size","min-size-horizontal","min-size-vertical"]}));const{expect:f,waitFor:x}=__STORYBOOK_MODULE_TEST__,Xt={title:"Components/ResizableView",tags:["autodocs"]},y=t=>`background:${t}; display:flex; align-items:center; justify-content:center; color:white; overflow:auto;`,D={render:()=>E`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await x(()=>{const s=t.querySelector("#prev");f(s).not.toBeNull()}),f(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered in shadow DOM between named slots",async()=>{await x(()=>{var n;const s=(n=t.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");f(s).not.toBeNull()})})}},O={render:()=>E`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{const s=t.querySelector("cosmoz-resizable-view");await x(()=>{f(s.getAttribute("data-direction")).toBe("vertical")}),await x(()=>{var o;const n=(o=s.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle");f(n==null?void 0:n.getAttribute("data-direction")).toBe("vertical")})})}},F={render:()=>E`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await x(()=>{var o,i;const s=(o=t.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle");f(s).not.toBeNull();const n=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");f(n).not.toBeNull(),f((i=n==null?void 0:n.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle")).not.toBeNull()})})}},H={render:()=>E`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Left panel respects CSS min-width",async()=>{await x(()=>{const s=t.querySelector("#list");f(s.offsetWidth).toBeGreaterThanOrEqual(300)})})}},G={render:()=>E`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Left panel capped at 360px by CSS max-width",async()=>{await x(()=>{const s=t.querySelector("#list");f(s.offsetWidth).toBeLessThanOrEqual(360)})})}},xe=(t,e)=>{const s=t.shadowRoot.querySelector("cosmoz-resize-handle"),n={bubbles:!0,detail:{mousePosition:{x:e,y:100}}};s.dispatchEvent(new CustomEvent("resize-handle",{...n,detail:{...n.detail,phase:"start"}})),s.dispatchEvent(new CustomEvent("resize-handle",{...n,detail:{...n.detail,phase:"move"}})),s.dispatchEvent(new CustomEvent("resize-handle",{...n,detail:{...n.detail,phase:"end"}}))},I={render:()=>E`<cosmoz-resizable-view
            id="resizable"
            style="display:flex; width:800px; height:300px; border:1px solid #ccc;"
        >
            <div
                id="a"
                slot="previous"
                style="${y("#ff6b6b")} min-width:50px;"
            >
                <h3>Panel A</h3>
            </div>
            <div id="b" slot="next" style="${y("#4ecdc4")} min-width:50px;">
                <h3>Panel B</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){const s=t.querySelector("#resizable"),n=()=>s.getBoundingClientRect().left,o=t.querySelector("#a"),i=t.querySelector("#b"),c=r=>Math.round(r.getBoundingClientRect().width),a=()=>{for(const r of[o,i])r.setAttribute("slot",r.getAttribute("slot")==="previous"?"next":"previous")};await e("Drag sets the previous panel width",async()=>{xe(s,n()+400),await x(()=>{f(c(o)).toBe(400)})}),await e("Swap slots: panel B becomes previous",async()=>{a(),await x(()=>{var u,h,d;const r=(d=(h=(u=s.shadowRoot)==null?void 0:u.querySelector('slot[name="previous"]'))==null?void 0:h.assignedElements()[0])==null?void 0:d.id;f(r).toBe("b")})}),await e("Drag after reassignment tracks the cursor (stale bases cleared)",async()=>{xe(s,n()+300),await x(()=>{f(c(i)).toBe(300)}),f(o.style.flexBasis).toBe("")})}},j={render:()=>E`<cosmoz-resizable-view
                id="resizable"
                style="display:flex; width:800px; height:300px; border:1px solid #ccc;"
            >
                <div id="only" slot="previous" style="${y("#ff6b6b")}">
                    <h3>Only panel</h3>
                </div>
            </cosmoz-resizable-view>
            <button id="toggleSecond" style="margin-top:10px;">
                Add / remove second panel
            </button>`,async play({canvasElement:t,step:e}){const s=t.querySelector("#resizable"),n=t.querySelector("#only"),o=c=>Math.round(c.getBoundingClientRect().width);await e("Single panel fills the container (data-single-panel set)",async()=>{await x(()=>{f(s.hasAttribute("data-single-panel")).toBe(!0)}),f(o(n)).toBeGreaterThanOrEqual(Math.round(s.getBoundingClientRect().width)-2)});let i;await e("Adding a second panel restores the split",async()=>{i=document.createElement("div"),i.id="second",i.setAttribute("slot","next"),i.setAttribute("style",y("#4ecdc4")),s.appendChild(i),await x(()=>{f(s.hasAttribute("data-single-panel")).toBe(!1)}),f(o(n)+o(i)).toBeLessThanOrEqual(Math.round(s.getBoundingClientRect().width))}),await e("Removing the second panel returns to single-panel state",async()=>{i.remove(),await x(()=>{f(s.hasAttribute("data-single-panel")).toBe(!0)}),f(o(n)).toBeGreaterThanOrEqual(Math.round(s.getBoundingClientRect().width)-2)})}};var _e,$e,Ae;D.parameters={...D.parameters,docs:{...(_e=D.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Ae=($e=D.parameters)==null?void 0:$e.docs)==null?void 0:Ae.source}}};var Ce,Be,Pe;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Pe=(Be=O.parameters)==null?void 0:Be.docs)==null?void 0:Pe.source}}};var Le,Me,Re;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Re=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:Re.source}}};var qe,Te,Ne;H.parameters={...H.parameters,docs:{...(qe=H.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ne=(Te=H.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source}}};var ke,De,Oe;G.parameters={...G.parameters,docs:{...(ke=G.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Oe=(De=G.parameters)==null?void 0:De.docs)==null?void 0:Oe.source}}};var Fe,He,Ge;I.parameters={...I.parameters,docs:{...(Fe=I.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            id="resizable"
            style="display:flex; width:800px; height:300px; border:1px solid #ccc;"
        >
            <div
                id="a"
                slot="previous"
                style="\${panelStyle('#ff6b6b')} min-width:50px;"
            >
                <h3>Panel A</h3>
            </div>
            <div id="b" slot="next" style="\${panelStyle('#4ecdc4')} min-width:50px;">
                <h3>Panel B</h3>
            </div>
        </cosmoz-resizable-view>\`,
  async play({
    canvasElement,
    step
  }) {
    const el = canvasElement.querySelector('#resizable') as HTMLElement;
    const containerLeft = () => el.getBoundingClientRect().left;
    const panelA = canvasElement.querySelector('#a') as HTMLElement;
    const panelB = canvasElement.querySelector('#b') as HTMLElement;
    const width = (panel: HTMLElement) => Math.round(panel.getBoundingClientRect().width);
    const swap = () => {
      for (const panel of [panelA, panelB]) {
        panel.setAttribute('slot', panel.getAttribute('slot') === 'previous' ? 'next' : 'previous');
      }
    };
    await step('Drag sets the previous panel width', async () => {
      dragHandle(el, containerLeft() + 400);
      await waitFor(() => {
        expect(width(panelA)).toBe(400);
      });
    });
    await step('Swap slots: panel B becomes previous', async () => {
      swap();
      await waitFor(() => {
        const assigned = el.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="previous"]')?.assignedElements()[0]?.id;
        expect(assigned).toBe('b');
      });
    });
    await step('Drag after reassignment tracks the cursor (stale bases cleared)', async () => {
      dragHandle(el, containerLeft() + 300);
      await waitFor(() => {
        expect(width(panelB)).toBe(300);
      });
      // stale basis on panel A (now in next) must be cleared
      expect(panelA.style.flexBasis).toBe('');
    });
  }
}`,...(Ge=(He=I.parameters)==null?void 0:He.docs)==null?void 0:Ge.source}}};var Ie,je,Ue;j.parameters={...j.parameters,docs:{...(Ie=j.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
                id="resizable"
                style="display:flex; width:800px; height:300px; border:1px solid #ccc;"
            >
                <div id="only" slot="previous" style="\${panelStyle('#ff6b6b')}">
                    <h3>Only panel</h3>
                </div>
            </cosmoz-resizable-view>
            <button id="toggleSecond" style="margin-top:10px;">
                Add / remove second panel
            </button>\`,
  async play({
    canvasElement,
    step
  }) {
    const el = canvasElement.querySelector('#resizable') as HTMLElement;
    const onlyPanel = canvasElement.querySelector('#only') as HTMLElement;
    const width = (panel: HTMLElement) => Math.round(panel.getBoundingClientRect().width);
    await step('Single panel fills the container (data-single-panel set)', async () => {
      await waitFor(() => {
        expect(el.hasAttribute('data-single-panel')).toBe(true);
      });
      // 2px tolerance for the container border
      expect(width(onlyPanel)).toBeGreaterThanOrEqual(Math.round(el.getBoundingClientRect().width) - 2);
    });
    let secondPanel: HTMLElement;
    await step('Adding a second panel restores the split', async () => {
      secondPanel = document.createElement('div');
      secondPanel.id = 'second';
      secondPanel.setAttribute('slot', 'next');
      secondPanel.setAttribute('style', panelStyle('#4ecdc4'));
      el.appendChild(secondPanel);
      await waitFor(() => {
        expect(el.hasAttribute('data-single-panel')).toBe(false);
      });
      expect(width(onlyPanel) + width(secondPanel)).toBeLessThanOrEqual(Math.round(el.getBoundingClientRect().width));
    });
    await step('Removing the second panel returns to single-panel state', async () => {
      secondPanel.remove();
      await waitFor(() => {
        expect(el.hasAttribute('data-single-panel')).toBe(true);
      });
      // 2px tolerance for the container border
      expect(width(onlyPanel)).toBeGreaterThanOrEqual(Math.round(el.getBoundingClientRect().width) - 2);
    });
  }
}`,...(Ue=(je=j.parameters)==null?void 0:je.docs)==null?void 0:Ue.source}}};const Yt=["BasicDemo","VerticalDemo","MultiplePanels","ListDetailsSplit","CappedInitialSize","SlotReassignmentDemo","SinglePanelDemo"];export{D as BasicDemo,G as CappedInitialSize,H as ListDetailsSplit,F as MultiplePanels,j as SinglePanelDemo,I as SlotReassignmentDemo,O as VerticalDemo,Yt as __namedExportsOrder,Xt as default};
