var We=Object.defineProperty;var Qe=(t,e,s)=>e in t?We(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var a=(t,e,s)=>Qe(t,typeof e!="symbol"?e+"":e,s);import{f as Ve,B as Xe,E as Z,x as M}from"./iframe-Cw_qgY3P.js";import"./preload-helper-C1FmrZbK.js";let j,Te=0;function oe(t){j=t}function ie(){j=null,Te=0}function Ye(){return Te++}const X=Symbol("haunted.phase"),G=Symbol("haunted.hook"),re=Symbol("haunted.update"),ae=Symbol("haunted.commit"),_=Symbol("haunted.effects"),k=Symbol("haunted.layoutEffects"),ee="haunted.context";var be,xe,ye;ye=G,xe=_,be=k;class Je{constructor(e,s){a(this,"update");a(this,"host");a(this,"virtual");a(this,ye);a(this,xe);a(this,be);this.update=e,this.host=s,this[G]=new Map,this[_]=[],this[k]=[]}run(e){oe(this);let s=e();return ie(),s}_runEffects(e){let s=this[e];oe(this);for(let n of s)n.call(this);ie()}runEffects(){this._runEffects(_)}runLayoutEffects(){this._runEffects(k)}teardown(){this[G].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class Ke extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const Ze=100,et=Promise.resolve().then.bind(Promise.resolve());function qe(){let t=[],e;function s(){e=null;let n=t;t=[];for(var o=0,i=n.length;o<i;o++)n[o]()}return function(n){t.push(n),e==null&&(e=et(s))}}const tt=qe(),le=qe();var we;we=X;const W=class W{constructor(e,s){a(this,"renderer");a(this,"host");a(this,"state");a(this,we);a(this,"_updateQueued");a(this,"_active");a(this,"_updateCount");a(this,"_processing");this.renderer=e,this.host=s,this.state=new Je(this.update.bind(this),s),this[X]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>W.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new Ke(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,tt(()=>{let e=this.handlePhase(re);le(()=>{this.handlePhase(ae,e),le(()=>{this.handlePhase(_),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[X]=e,e){case ae:this.commit(s),this.runEffects(k);return;case re:return this.render();case _:return this.runEffects(_)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};a(W,"maxUpdates",Ze);let te=W;const st=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},nt=t=>t==null?void 0:t.map(e=>typeof e=="string"?st(e):e),ot=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),De=ot,it=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function rt(t){class e extends te{constructor(i,c,r){super(i,r||c);a(this,"frag");a(this,"renderResult");this.frag=c}commit(i){this.renderResult=t(i,this.frag)}}function s(n,o,i){const c=(i||o||{}).baseElement||HTMLElement,{observedAttributes:r=[],useShadowDOM:l=!0,shadowRootInit:h={},styleSheets:p}=i||o||{},u=nt(n.styleSheets||p);class g extends c{constructor(){super();a(this,"_scheduler");if(l===!1)this._scheduler=new e(n,this);else{const d=this.attachShadow({mode:"open",...h});u&&(d.adoptedStyleSheets=u),this._scheduler=new e(n,d,this)}}static get observedAttributes(){return n.observedAttributes||r||[]}connectedCallback(){var d;this._scheduler.resume(),this._scheduler.update(),(d=this._scheduler.renderResult)==null||d.setConnected(!0)}disconnectedCallback(){var d;this._scheduler.pause(),this._scheduler.teardown(),(d=this._scheduler.renderResult)==null||d.setConnected(!1)}attributeChangedCallback(d,b,v){if(b===v)return;let V=v===""?!0:v;Reflect.set(this,it(d),V)}}function C(x){let f=x,d=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return f},set(b){d&&f===b||(d=!0,f=b,this._scheduler&&this._scheduler.update())}})}const Q=new Proxy(c.prototype,{getPrototypeOf(x){return x},set(x,f,d,b){let v;return f in x?(v=Object.getOwnPropertyDescriptor(x,f),v&&v.set?(v.set.call(b,d),!0):(Reflect.set(x,f,d,b),!0)):(typeof f=="symbol"||f[0]==="_"?v={enumerable:!0,configurable:!0,writable:!0,value:d}:v=C(d),Object.defineProperty(b,f,v),v.set&&v.set.call(b,d),!0)}});return Object.setPrototypeOf(g.prototype,Q),g}return s}class E{constructor(e,s){a(this,"id");a(this,"state");this.id=e,this.state=s}}function at(t,...e){let s=Ye(),n=j[G],o=n.get(s);return o||(o=new t(s,j,...e),n.set(s,o)),o.update(...e)}function $(t){return at.bind(null,t)}function Oe(t){return $(class extends E{constructor(s,n,o,i){super(s,n);a(this,"callback");a(this,"lastValues");a(this,"values");a(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function Fe(t,e){t[_].push(e)}const N=Oe(Fe),lt=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,ct=$(class extends E{constructor(e,s,n){super(e,s);a(this,"Context");a(this,"value");a(this,"_ranEffect");a(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Fe(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};lt(this.state.host).dispatchEvent(new CustomEvent(ee,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:o=null,value:i}=s;this.value=o?i:e.defaultValue,this._unsubscribe=o}teardown(){this._unsubscribe&&this._unsubscribe()}});function ut(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();a(this,"listeners");a(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(ee,this)}disconnectedCallback(){this.removeEventListener(ee,this)}handleEvent(o){const{detail:i}=o;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),o.stopPropagation())}unsubscribe(o){this.listeners.delete(o)}set value(o){this._value=o;for(let i of this.listeners)i(o)}get value(){return this._value}},Consumer:t(function({render:n}){const o=ct(s);return n(o)},{useShadowDOM:!1}),defaultValue:e};return s}}const se=$(class extends E{constructor(e,s,n,o){super(e,s);a(this,"value");a(this,"values");this.value=n(),this.values=o}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}}),ce=(t,e)=>se(()=>t,e);function dt(t,e){t[k].push(e)}Oe(dt);const ht=$(class extends E{constructor(e,s,n){super(e,s);a(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});$(class extends E{constructor(e,s,n,o,i){super(e,s);a(this,"reducer");a(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(o):o}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const pt=/([A-Z])/gu;$(class extends E{constructor(e,s,n,o){super(e,s);a(this,"property");a(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(pt,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof o=="function"&&(o=o()),o!=null&&this.updater(o,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],n=typeof e=="function"?e:void 0,o=n?n(s):e;return[s,o,n]}notify(e,s){const n=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,s=!1){const[n,o,i]=this.resolve(e),c=this.notify(o,i);!s&&c.defaultPrevented||Object.is(n,o)||(this.state.host[this.property]=o)}});function ft(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function P(t){return se(()=>ft(t),[])}const He=$(class extends E{update(){return this.state.host}});function vt({render:t}){const e=rt(t),s=ut(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt={CHILD:2},bt=t=>(...e)=>({_$litDirective$:t,values:e});class xt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=(t,e)=>{var n;const s=t._$AN;if(s===void 0)return!1;for(const o of s)(n=o._$AO)==null||n.call(o,e,!1),R(o,e);return!0},U=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},Ie=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),zt(e)}};function yt(t){this._$AN!==void 0?(U(this),this._$AM=t,Ie(this)):this._$AM=t}function wt(t,e=!1,s=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let i=s;i<n.length;i++)R(n[i],!1),U(n[i]);else n!=null&&(R(n,!1),U(n));else R(this,t)}const zt=t=>{t.type==mt.CHILD&&(t._$AP??(t._$AP=wt),t._$AQ??(t._$AQ=yt))};class gt extends xt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),Ie(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,o;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),s&&(R(this,e),U(this))}setValue(e){if(Ve(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:Ge}=vt({render:Xe}),Y=new WeakMap,q=bt(class extends gt{render(t){return Z}update(t,[e]){var n;const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=(n=t.options)==null?void 0:n.host,this.rt(this.ct=t.element)),Z}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=Y.get(e);s===void 0&&(s=new WeakMap,Y.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=Y.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),_t=t=>{if(typeof t!="object"||t==null)return!1;const e=t;return typeof e.px=="number"&&e.px>=0&&!Number.isNaN(e.px)},ue=t=>{try{const e=JSON.parse(t);if(_t(e))return e}catch{}},St=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const n=new Map,o=()=>{s=void 0;for(const[r,l]of n)try{localStorage.setItem(t+r,JSON.stringify(l))}catch{}n.clear()},i=(r,l)=>{n.set(r,l),s==null&&(s=setTimeout(o,100))},c=r=>{if(r.key==null||!r.key.startsWith(t)||r.newValue==null)return;const l=r.key.slice(t.length),h=ue(r.newValue);if(h==null)return;const p=e.get(l);if(p)for(const u of p)u(h)};return typeof window<"u"&&window.addEventListener("storage",c),{get(r){let l;try{l=localStorage.getItem(t+r)}catch{return}if(l!=null)return ue(l)},set(r,l){i(r,l)},subscribe(r,l){let h=e.get(r);return h||(h=new Set,e.set(r,h)),h.add(l),()=>{const p=e.get(r);p&&(p.delete(l),p.size===0&&e.delete(r))}},destroy(){typeof window<"u"&&window.removeEventListener("storage",c),s!=null&&(clearTimeout(s),o())}}},Et=(t,e,s)=>{const n=P(s);if(n.current=s,N(()=>{var c,r;if(!t||!e)return;const o=t.get(e);(c=n.current)==null||c.call(n,o);const i=(r=t.subscribe)==null?void 0:r.call(t,e,l=>{var h;return(h=n.current)==null?void 0:h.call(n,l)});return()=>{var l;i==null||i(),(l=t.destroy)==null||l.call(t)}},[t,e]),!(!t||!e))return o=>t.set(e,o)},de=t=>{const e=t.trim();if(e==="")return e;const s=Number(e);return Number.isNaN(s)?e:`${s}px`},$t=t=>{if(t==null||t.trim()==="")return{};const e=t.includes(",")?t.split(/,\s*/u):t.match(/(?:[^\s()]+\([^)]*\)|\([^)]*\)|[^\s]+)/gu)??[t];return{previous:de(e[0]),next:e.length>1?de(e[1]):void 0}},Ct=De`
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
`,J=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},At=(t,e,s)=>s==="horizontal"?t.x-e.left:t.y-e.top,he=t=>{const e=parseFloat(t);return Number.isNaN(e)?void 0:e},Lt=(t,e)=>{const s=getComputedStyle(t);return{min:e==="horizontal"?he(s.minWidth)??0:he(s.minHeight)??0}},pe=t=>({rect:t.container.getBoundingClientRect(),bounds:Lt(t.previous,t.direction)}),Pt=(t,e,s,n)=>Math.max(n.min,At(t,e,s)),Nt=t=>{let e;return s=>{var c,r;const{phase:n,mousePosition:o}=s.detail;if(n==="start"){e=pe(t);return}if(n!=="move"&&n!=="end")return;e||(e=pe(t));const i=Pt(o,e.rect,t.direction,e.bounds);n==="move"?(c=t.onResize)==null||c.call(t,i):((r=t.onResizeEnd)==null||r.call(t),e=void 0)}},Mt=(t="horizontal")=>{const e=He();return N(()=>{e.setAttribute("data-direction",t)},[t]),N(()=>{const s=(u,g)=>{e.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:u,mousePosition:g},bubbles:!0}))};let n=0,o;const i=()=>{n=0,o&&(s("move",o),o=void 0)},c=u=>{o=J(u),n||(n=requestAnimationFrame(i))},r=u=>{n&&(cancelAnimationFrame(n),i()),e.removeAttribute("data-dragging"),s("end",J(u)),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",r)},l=u=>{e.setAttribute("data-dragging","true"),s("start",J(u)),document.addEventListener("mousemove",c),document.addEventListener("mouseup",r),document.addEventListener("touchmove",c,{passive:!1}),document.addEventListener("touchend",r)},h=u=>{u.preventDefault(),l(u)},p=u=>{u.preventDefault(),l(u)};return e.addEventListener("mousedown",h),e.addEventListener("touchstart",p,{passive:!1}),()=>{n&&cancelAnimationFrame(n),e.removeEventListener("mousedown",h),e.removeEventListener("touchstart",p),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",r)}},[e]),null},kt=De`
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
`,Rt=({direction:t="horizontal"})=>(Mt(t),Z);customElements.define("cosmoz-resize-handle",Ge(Rt,{styleSheets:[kt],observedAttributes:["direction"]}));const fe=t=>getComputedStyle(t).display!=="none",K=t=>t==null?void 0:t.assignedElements()[0],Bt=(t,e,s)=>{const n=()=>{const i=fe(e)&&fe(s);t.toggleAttribute("data-single-panel",!i)},o=new ResizeObserver(()=>queueMicrotask(n));return o.observe(e),o.observe(s),n(),o},ve=(t,e)=>{if(e==null){t.style.flexBasis="";return}t.style.flexBasis=`${e.px}px`},me=(t,e,s,n,o)=>{const i=(c,r)=>{const{previous:l,next:h}=$t(r??null),p=`--resizable-previous-${e}${c}`,u=`--resizable-next-${e}${c}`;l!=null?t.style.setProperty(p,l):t.style.removeProperty(p),h!=null?t.style.setProperty(u,h):t.style.removeProperty(u)};i("",s),i("-horizontal",n),i("-vertical",o)},Tt=({direction:t="horizontal",persist:e,initialSize:s,initialSizeHorizontal:n,initialSizeVertical:o,minSize:i,minSizeHorizontal:c,minSizeVertical:r})=>{const l=He(),h=P(),p=P(),u=P(),g=P(),[C,Q]=ht({prev:void 0,next:void 0}),x=e?`${e}:${t}`:void 0,f=se(()=>e?St():void 0,[e]),d=Et(f,x,m=>{const y=K(p.current);y&&ve(y,m)}),b=P(d);b.current=d;const v=ce(()=>{var A,B;const m=(A=p.current)==null?void 0:A.assignedElements()[0],y=(B=u.current)==null?void 0:B.assignedElements()[0];Q(L=>L.prev===m&&L.next===y?L:{prev:m,next:y})},[]),V=ce(()=>{var m;(m=g.current)==null||m.assignedElements().forEach(y=>y.setAttribute("slot","previous"))},[]);return N(()=>{l.setAttribute("data-direction",t)},[t]),N(()=>{me(l,"basis",s,n,o),me(l,"min",i,c,r)},[l,s,n,o,i,c,r]),N(()=>{if(!C.prev||!C.next)return;const m=K(p.current),y=K(u.current),A=h.current;if(!m||!y||!A)return;m.style.flexBasis="",y.style.flexBasis="";const B=x?f==null?void 0:f.get(x):void 0;ve(m,B);const L=Nt({container:l,previous:m,direction:t,onResize:T=>{m.style.flexBasis=`${T}px`},onResizeEnd:()=>{requestAnimationFrame(()=>{var ne;const T=m.getBoundingClientRect(),Ue=t==="horizontal"?T.width:T.height;(ne=b.current)==null||ne.call(b,{px:Ue})})}});A.addEventListener("resize-handle",L);const je=Bt(l,m,y);return()=>{A.removeEventListener("resize-handle",L),je.disconnect()}},[t,f,e,l,C.prev,C.next]),M`<slot
			${q(g)}
			@slotchange=${V}
		></slot
		><slot
			name="previous"
			${q(p)}
			@slotchange=${v}
		></slot
		><cosmoz-resize-handle
			direction=${t}
			${q(h)}
		></cosmoz-resize-handle
		><slot name="next" ${q(u)} @slotchange=${v}></slot>`};customElements.define("cosmoz-resizable-view",Ge(Tt,{styleSheets:[Ct],observedAttributes:["direction","persist","initial-size","initial-size-horizontal","initial-size-vertical","min-size","min-size-horizontal","min-size-vertical"]}));const{expect:z,waitFor:S}=__STORYBOOK_MODULE_TEST__,Ft={title:"Components/ResizableView",tags:["autodocs"]},w=t=>`background:${t}; display:flex; align-items:center; justify-content:center; color:white; overflow:auto;`,D={render:()=>M`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
        >
            <div
                slot="previous"
                id="prev"
                style="${w("#ff6b6b")} flex-basis: 50%;"
            >
                <h3>Left Panel</h3>
            </div>
            <div slot="next" id="next" style="${w("#4ecdc4")}">
                <h3>Right Panel</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await S(()=>{const s=t.querySelector("#prev");z(s).not.toBeNull()}),z(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered in shadow DOM between named slots",async()=>{await S(()=>{var n;const s=(n=t.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");z(s).not.toBeNull()})})}},O={render:()=>M`<cosmoz-resizable-view
            style="display:flex; flex-direction:column; width:600px; height:400px; border:1px solid #ccc;"
            direction="vertical"
        >
            <div
                slot="previous"
                style="${w("#ff6b6b")} padding:20px; flex-basis: 50%;"
            >
                <h3>Top Panel</h3>
            </div>
            <div slot="next" style="${w("#4ecdc4")} padding:20px;">
                <h3>Bottom Panel</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{const s=t.querySelector("cosmoz-resizable-view");await S(()=>{z(s.getAttribute("data-direction")).toBe("vertical")}),await S(()=>{var o;const n=(o=s.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle");z(n==null?void 0:n.getAttribute("data-direction")).toBe("vertical")})})}},F={render:()=>M`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
        >
            <div slot="previous" style="${w("#ff6b6b")} flex-basis: 50%;">
                <h3>Left Panel</h3>
            </div>
            <cosmoz-resizable-view
                slot="next"
                direction="vertical"
                style="display:flex;"
            >
                <div
                    slot="previous"
                    style="${w("#ffa726")} padding:10px; flex-basis: 50%;"
                >
                    <h3>Top Panel</h3>
                </div>
                <div slot="next" style="${w("#45b7d1")} padding:10px;">
                    <h3>Bottom Panel</h3>
                </div>
            </cosmoz-resizable-view>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await S(()=>{var o,i;const s=(o=t.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle");z(s).not.toBeNull();const n=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");z(n).not.toBeNull(),z((i=n==null?void 0:n.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle")).not.toBeNull()})})}},H={render:()=>M`<cosmoz-resizable-view
            style="display:flex; width:800px; height:300px; border:1px solid #ccc;"
        >
            <div
                id="list"
                slot="previous"
                style="${w("#ff6b6b")} flex-basis: 25%; min-width: 300px;"
            >
                <h3>List (25% or 300px min)</h3>
            </div>
            <div id="details" slot="next" style="${w("#4ecdc4")}">
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Left panel respects CSS min-width",async()=>{await S(()=>{const s=t.querySelector("#list");z(s.offsetWidth).toBeGreaterThanOrEqual(300)})})}},I={render:()=>M`<cosmoz-resizable-view
            style="display:flex; width:1000px; height:300px; border:1px solid #ccc;"
        >
            <div
                id="list"
                slot="previous"
                style="${w("#ff6b6b")} flex-basis: 40%; max-width: 360px;"
            >
                <h3>List (40% or 360px max)</h3>
            </div>
            <div id="details" slot="next" style="${w("#4ecdc4")}">
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Left panel capped at 360px by CSS max-width",async()=>{await S(()=>{const s=t.querySelector("#list");z(s.offsetWidth).toBeLessThanOrEqual(360)})})}};var ze,ge,_e;D.parameters={...D.parameters,docs:{...(ze=D.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(_e=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:_e.source}}};var Se,Ee,$e;O.parameters={...O.parameters,docs:{...(Se=O.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...($e=(Ee=O.parameters)==null?void 0:Ee.docs)==null?void 0:$e.source}}};var Ce,Ae,Le;F.parameters={...F.parameters,docs:{...(Ce=F.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Le=(Ae=F.parameters)==null?void 0:Ae.docs)==null?void 0:Le.source}}};var Pe,Ne,Me;H.parameters={...H.parameters,docs:{...(Pe=H.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Me=(Ne=H.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source}}};var ke,Re,Be;I.parameters={...I.parameters,docs:{...(ke=I.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Be=(Re=I.parameters)==null?void 0:Re.docs)==null?void 0:Be.source}}};const Ht=["BasicDemo","VerticalDemo","MultiplePanels","ListDetailsSplit","CappedInitialSize"];export{D as BasicDemo,I as CappedInitialSize,H as ListDetailsSplit,F as MultiplePanels,O as VerticalDemo,Ht as __namedExportsOrder,Ft as default};
