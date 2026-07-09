var He=Object.defineProperty;var Ie=(t,e,s)=>e in t?He(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var a=(t,e,s)=>Ie(t,typeof e!="symbol"?e+"":e,s);import{f as Ge,B as je,E as Y,x as A}from"./iframe-ByFr4Sdq.js";import"./preload-helper-C1FmrZbK.js";let F,Ne=0;function te(t){F=t}function se(){F=null,Ne=0}function Ue(){return Ne++}const U=Symbol("haunted.phase"),O=Symbol("haunted.hook"),ne=Symbol("haunted.update"),ie=Symbol("haunted.commit"),g=Symbol("haunted.effects"),N=Symbol("haunted.layoutEffects"),J="haunted.context";var he,pe,fe;fe=O,pe=g,he=N;class We{constructor(e,s){a(this,"update");a(this,"host");a(this,"virtual");a(this,fe);a(this,pe);a(this,he);this.update=e,this.host=s,this[O]=new Map,this[g]=[],this[N]=[]}run(e){te(this);let s=e();return se(),s}_runEffects(e){let s=this[e];te(this);for(let n of s)n.call(this);se()}runEffects(){this._runEffects(g)}runLayoutEffects(){this._runEffects(N)}teardown(){this[O].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class Qe extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const Ve=100,Xe=Promise.resolve().then.bind(Promise.resolve());function Me(){let t=[],e;function s(){e=null;let n=t;t=[];for(var i=0,o=n.length;i<o;i++)n[i]()}return function(n){t.push(n),e==null&&(e=Xe(s))}}const Ye=Me(),oe=Me();var ve;ve=U;const I=class I{constructor(e,s){a(this,"renderer");a(this,"host");a(this,"state");a(this,ve);a(this,"_updateQueued");a(this,"_active");a(this,"_updateCount");a(this,"_processing");this.renderer=e,this.host=s,this.state=new We(this.update.bind(this),s),this[U]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>I.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new Qe(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,Ye(()=>{let e=this.handlePhase(ne);oe(()=>{this.handlePhase(ie,e),oe(()=>{this.handlePhase(g),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[U]=e,e){case ie:this.commit(s),this.runEffects(N);return;case ne:return this.render();case g:return this.runEffects(g)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};a(I,"maxUpdates",Ve);let K=I;const Je=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Ke=t=>t==null?void 0:t.map(e=>typeof e=="string"?Je(e):e),Ze=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),Re=Ze,et=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function tt(t){class e extends K{constructor(o,c,r){super(o,r||c);a(this,"frag");a(this,"renderResult");this.frag=c}commit(o){this.renderResult=t(o,this.frag)}}function s(n,i,o){const c=(o||i||{}).baseElement||HTMLElement,{observedAttributes:r=[],useShadowDOM:l=!0,shadowRootInit:p={},styleSheets:f}=o||i||{},u=Ke(n.styleSheets||f);class z extends c{constructor(){super();a(this,"_scheduler");if(l===!1)this._scheduler=new e(n,this);else{const d=this.attachShadow({mode:"open",...p});u&&(d.adoptedStyleSheets=u),this._scheduler=new e(n,d,this)}}static get observedAttributes(){return n.observedAttributes||r||[]}connectedCallback(){var d;this._scheduler.resume(),this._scheduler.update(),(d=this._scheduler.renderResult)==null||d.setConnected(!0)}disconnectedCallback(){var d;this._scheduler.pause(),this._scheduler.teardown(),(d=this._scheduler.renderResult)==null||d.setConnected(!1)}attributeChangedCallback(d,m,h){if(m===h)return;let w=h===""?!0:h;Reflect.set(this,et(d),w)}}function G(b){let v=b,d=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return v},set(m){d&&v===m||(d=!0,v=m,this._scheduler&&this._scheduler.update())}})}const j=new Proxy(c.prototype,{getPrototypeOf(b){return b},set(b,v,d,m){let h;return v in b?(h=Object.getOwnPropertyDescriptor(b,v),h&&h.set?(h.set.call(m,d),!0):(Reflect.set(b,v,d,m),!0)):(typeof v=="symbol"||v[0]==="_"?h={enumerable:!0,configurable:!0,writable:!0,value:d}:h=G(d),Object.defineProperty(m,v,h),h.set&&h.set.call(m,d),!0)}});return Object.setPrototypeOf(z.prototype,j),z}return s}class S{constructor(e,s){a(this,"id");a(this,"state");this.id=e,this.state=s}}function st(t,...e){let s=Ue(),n=F[O],i=n.get(s);return i||(i=new t(s,F,...e),n.set(s,i)),i.update(...e)}function E(t){return st.bind(null,t)}function ke(t){return E(class extends S{constructor(s,n,i,o){super(s,n);a(this,"callback");a(this,"lastValues");a(this,"values");a(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function Be(t,e){t[g].push(e)}const C=ke(Be),nt=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,it=E(class extends S{constructor(e,s,n){super(e,s);a(this,"Context");a(this,"value");a(this,"_ranEffect");a(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Be(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};nt(this.state.host).dispatchEvent(new CustomEvent(J,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:o}=s;this.value=i?o:e.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function ot(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();a(this,"listeners");a(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(J,this)}disconnectedCallback(){this.removeEventListener(J,this)}handleEvent(i){const{detail:o}=i;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let o of this.listeners)o(i)}get value(){return this._value}},Consumer:t(function({render:n}){const i=it(s);return n(i)},{useShadowDOM:!1}),defaultValue:e};return s}}const Z=E(class extends S{constructor(e,s,n,i){super(e,s);a(this,"value");a(this,"values");this.value=n(),this.values=i}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}}),rt=(t,e)=>Z(()=>t,e);function at(t,e){t[N].push(e)}ke(at);const lt=E(class extends S{constructor(e,s,n){super(e,s);a(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});E(class extends S{constructor(e,s,n,i,o){super(e,s);a(this,"reducer");a(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=o!==void 0?o(i):i}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const ct=/([A-Z])/gu;E(class extends S{constructor(e,s,n,i){super(e,s);a(this,"property");a(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(ct,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof i=="function"&&(i=i()),i!=null&&this.updater(i,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],n=typeof e=="function"?e:void 0,i=n?n(s):e;return[s,i,n]}notify(e,s){const n=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,s=!1){const[n,i,o]=this.resolve(e),c=this.notify(i,o);!s&&c.defaultPrevented||Object.is(n,i)||(this.state.host[this.property]=i)}});function ut(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function P(t){return Z(()=>ut(t),[])}const Te=E(class extends S{update(){return this.state.host}});function dt({render:t}){const e=tt(t),s=ot(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht={CHILD:2},pt=t=>(...e)=>({_$litDirective$:t,values:e});class ft{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=(t,e)=>{var n;const s=t._$AN;if(s===void 0)return!1;for(const i of s)(n=i._$AO)==null||n.call(i,e,!1),M(i,e);return!0},H=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},qe=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),bt(e)}};function vt(t){this._$AN!==void 0?(H(this),this._$AM=t,qe(this)):this._$AM=t}function mt(t,e=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let o=s;o<n.length;o++)M(n[o],!1),H(n[o]);else n!=null&&(M(n,!1),H(n));else M(this,t)}const bt=t=>{t.type==ht.CHILD&&(t._$AP??(t._$AP=mt),t._$AQ??(t._$AQ=vt))};class yt extends ft{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),qe(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,i;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),s&&(M(this,e),H(this))}setValue(e){if(Ge(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:De}=dt({render:je}),W=new WeakMap,Q=pt(class extends yt{render(t){return Y}update(t,[e]){var n;const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=(n=t.options)==null?void 0:n.host,this.rt(this.ct=t.element)),Y}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=W.get(e);s===void 0&&(s=new WeakMap,W.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=W.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),xt=t=>{if(typeof t!="object"||t==null)return!1;const e=t;return typeof e.px=="number"&&e.px>=0&&!Number.isNaN(e.px)},re=t=>{try{const e=JSON.parse(t);if(xt(e))return e}catch{}},wt=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const n=new Map,i=()=>{s=void 0;for(const[r,l]of n)try{localStorage.setItem(t+r,JSON.stringify(l))}catch{}n.clear()},o=(r,l)=>{n.set(r,l),s==null&&(s=setTimeout(i,100))},c=r=>{if(r.key==null||!r.key.startsWith(t)||r.newValue==null)return;const l=r.key.slice(t.length),p=re(r.newValue);if(p==null)return;const f=e.get(l);if(f)for(const u of f)u(p)};return typeof window<"u"&&window.addEventListener("storage",c),{get(r){let l;try{l=localStorage.getItem(t+r)}catch{return}if(l!=null)return re(l)},set(r,l){o(r,l)},subscribe(r,l){let p=e.get(r);return p||(p=new Set,e.set(r,p)),p.add(l),()=>{const f=e.get(r);f&&(f.delete(l),f.size===0&&e.delete(r))}},destroy(){typeof window<"u"&&window.removeEventListener("storage",c),s!=null&&(clearTimeout(s),i())}}},zt=(t,e,s)=>{const n=P(s);if(n.current=s,C(()=>{var c,r;if(!t||!e)return;const i=t.get(e);(c=n.current)==null||c.call(n,i);const o=(r=t.subscribe)==null?void 0:r.call(t,e,l=>{var p;return(p=n.current)==null?void 0:p.call(n,l)});return()=>{var l;o==null||o(),(l=t.destroy)==null||l.call(t)}},[t,e]),!(!t||!e))return i=>t.set(e,i)},ae=t=>{const e=t.trim();if(e==="")return e;const s=Number(e);return Number.isNaN(s)?e:`${s}px`},gt=t=>{if(t==null||t.trim()==="")return{};const e=t.includes(",")?t.split(/,\s*/u):t.split(/\s+/u);return{previous:ae(e[0]),next:e.length>1?ae(e[1]):void 0}},_t=Re`
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
`,V=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},St=(t,e,s)=>s==="horizontal"?t.x-e.left:t.y-e.top,le=t=>{const e=parseFloat(t);return Number.isNaN(e)?void 0:e},Et=(t,e)=>{const s=getComputedStyle(t);return{min:e==="horizontal"?le(s.minWidth)??0:le(s.minHeight)??0}},ce=t=>({rect:t.container.getBoundingClientRect(),bounds:Et(t.previous,t.direction)}),$t=(t,e,s,n)=>Math.max(n.min,St(t,e,s)),Ct=t=>{let e;return s=>{var c,r;const{phase:n,mousePosition:i}=s.detail;if(n==="start"){e=ce(t);return}if(n!=="move"&&n!=="end")return;e||(e=ce(t));const o=$t(i,e.rect,t.direction,e.bounds);n==="move"?(c=t.onResize)==null||c.call(t,o):((r=t.onResizeEnd)==null||r.call(t),e=void 0)}},At=(t="horizontal")=>{const e=Te();return C(()=>{e.setAttribute("data-direction",t)},[t]),C(()=>{const s=(u,z)=>{e.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:u,mousePosition:z},bubbles:!0}))};let n=0,i;const o=()=>{n=0,i&&(s("move",i),i=void 0)},c=u=>{i=V(u),n||(n=requestAnimationFrame(o))},r=u=>{n&&(cancelAnimationFrame(n),o()),e.removeAttribute("data-dragging"),s("end",V(u)),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",r)},l=u=>{e.setAttribute("data-dragging","true"),s("start",V(u)),document.addEventListener("mousemove",c),document.addEventListener("mouseup",r),document.addEventListener("touchmove",c,{passive:!1}),document.addEventListener("touchend",r)},p=u=>{u.preventDefault(),l(u)},f=u=>{u.preventDefault(),l(u)};return e.addEventListener("mousedown",p),e.addEventListener("touchstart",f,{passive:!1}),()=>{n&&cancelAnimationFrame(n),e.removeEventListener("mousedown",p),e.removeEventListener("touchstart",f),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",r)}},[e]),null},Lt=Re`
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
`,Pt=({direction:t="horizontal"})=>(At(t),Y);customElements.define("cosmoz-resize-handle",De(Pt,{styleSheets:[Lt],observedAttributes:["direction"]}));const ue=t=>getComputedStyle(t).display!=="none",X=t=>t==null?void 0:t.assignedElements()[0],Nt=(t,e,s)=>{const n=()=>{const o=ue(e)&&ue(s);t.toggleAttribute("data-single-panel",!o)},i=new ResizeObserver(()=>queueMicrotask(n));return i.observe(e),i.observe(s),n(),i},Mt=(t,e)=>{if(e==null){t.style.flexBasis="";return}t.style.flexBasis=`${e.px}px`},de=(t,e,s,n,i)=>{const o=(c,r)=>{const{previous:l,next:p}=gt(r??null),f=`--resizable-previous-${e}${c}`,u=`--resizable-next-${e}${c}`;l!=null?t.style.setProperty(f,l):t.style.removeProperty(f),p!=null?t.style.setProperty(u,p):t.style.removeProperty(u)};o("",s),o("-horizontal",n),o("-vertical",i)},Rt=({direction:t="horizontal",persist:e,initialSize:s,initialSizeHorizontal:n,initialSizeVertical:i,minSize:o,minSizeHorizontal:c,minSizeVertical:r})=>{const l=Te(),p=P(),f=P(),u=P(),[z,G]=lt(!1),j=e?`${e}:${t}`:void 0,b=Z(()=>e?wt():void 0,[e]),v=zt(b,j,h=>{const w=X(f.current);w&&Mt(w,h)}),d=P(v);d.current=v;const m=rt(()=>{var $,L;const h=($=f.current)==null?void 0:$.assignedElements()[0],w=(L=u.current)==null?void 0:L.assignedElements()[0];h&&w&&G(!0)},[]);return C(()=>{l.setAttribute("data-direction",t)},[t]),C(()=>{de(l,"basis",s,n,i),de(l,"min",o,c,r)},[l,s,n,i,o,c,r]),C(()=>{if(!z)return;const h=X(f.current),w=X(u.current),$=p.current;if(!h||!w||!$)return;const L=Ct({container:l,previous:h,direction:t,onResize:R=>{h.style.flexBasis=`${R}px`},onResizeEnd:()=>{requestAnimationFrame(()=>{var ee;const R=h.getBoundingClientRect(),Fe=t==="horizontal"?R.width:R.height;(ee=d.current)==null||ee.call(d,{px:Fe})})}});$.addEventListener("resize-handle",L);const Oe=Nt(l,h,w);return()=>{$.removeEventListener("resize-handle",L),Oe.disconnect()}},[t,b,e,l,z]),A`<slot
			name="previous"
			${Q(f)}
			@slotchange=${m}
		></slot
		><cosmoz-resize-handle
			direction=${t}
			${Q(p)}
		></cosmoz-resize-handle
		><slot name="next" ${Q(u)} @slotchange=${m}></slot>`};customElements.define("cosmoz-resizable-view",De(Rt,{styleSheets:[_t],observedAttributes:["direction","persist","initial-size","initial-size-horizontal","initial-size-vertical","min-size","min-size-horizontal","min-size-vertical"]}));const{expect:x,waitFor:_}=__STORYBOOK_MODULE_TEST__,qt={title:"Components/ResizableView",tags:["autodocs"]},y=t=>`background:${t}; display:flex; align-items:center; justify-content:center; color:white; overflow:auto;`,k={render:()=>A`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await _(()=>{const s=t.querySelector("#prev");x(s).not.toBeNull()}),x(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered in shadow DOM between named slots",async()=>{await _(()=>{var n;const s=(n=t.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");x(s).not.toBeNull()})})}},B={render:()=>A`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{const s=t.querySelector("cosmoz-resizable-view");await _(()=>{x(s.getAttribute("data-direction")).toBe("vertical")}),await _(()=>{var i;const n=(i=s.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle");x(n==null?void 0:n.getAttribute("data-direction")).toBe("vertical")})})}},T={render:()=>A`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await _(()=>{var i,o;const s=(i=t.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle");x(s).not.toBeNull();const n=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");x(n).not.toBeNull(),x((o=n==null?void 0:n.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle")).not.toBeNull()})})}},q={render:()=>A`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Left panel respects CSS min-width",async()=>{await _(()=>{const s=t.querySelector("#list");x(s.offsetWidth).toBeGreaterThanOrEqual(300)})})}},D={render:()=>A`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Left panel capped at 360px by CSS max-width",async()=>{await _(()=>{const s=t.querySelector("#list");x(s.offsetWidth).toBeLessThanOrEqual(360)})})}};var me,be,ye;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ye=(be=k.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var xe,we,ze;B.parameters={...B.parameters,docs:{...(xe=B.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(ze=(we=B.parameters)==null?void 0:we.docs)==null?void 0:ze.source}}};var ge,_e,Se;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Se=(_e=T.parameters)==null?void 0:_e.docs)==null?void 0:Se.source}}};var Ee,$e,Ce;q.parameters={...q.parameters,docs:{...(Ee=q.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ce=($e=q.parameters)==null?void 0:$e.docs)==null?void 0:Ce.source}}};var Ae,Le,Pe;D.parameters={...D.parameters,docs:{...(Ae=D.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Pe=(Le=D.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source}}};const Dt=["BasicDemo","VerticalDemo","MultiplePanels","ListDetailsSplit","CappedInitialSize"];export{k as BasicDemo,D as CappedInitialSize,q as ListDetailsSplit,T as MultiplePanels,B as VerticalDemo,Dt as __namedExportsOrder,qt as default};
