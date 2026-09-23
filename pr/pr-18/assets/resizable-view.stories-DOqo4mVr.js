var Je=Object.defineProperty;var Ke=(t,e,s)=>e in t?Je(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var l=(t,e,s)=>Ke(t,typeof e!="symbol"?e+"":e,s);import{f as Ze,B as et,E as ee,x as $}from"./iframe-Bu3YdkDv.js";import"./preload-helper-C1FmrZbK.js";let U,Ie=0;function re(t){U=t}function ae(){U=null,Ie=0}function tt(){return Ie++}const Y=Symbol("haunted.phase"),j=Symbol("haunted.hook"),le=Symbol("haunted.update"),ce=Symbol("haunted.commit"),E=Symbol("haunted.effects"),N=Symbol("haunted.layoutEffects"),te="haunted.context";var we,ge,ze;ze=j,ge=E,we=N;class st{constructor(e,s){l(this,"update");l(this,"host");l(this,"virtual");l(this,ze);l(this,ge);l(this,we);this.update=e,this.host=s,this[j]=new Map,this[E]=[],this[N]=[]}run(e){re(this);let s=e();return ae(),s}_runEffects(e){let s=this[e];re(this);for(let n of s)n.call(this);ae()}runEffects(){this._runEffects(E)}runLayoutEffects(){this._runEffects(N)}teardown(){this[j].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class nt extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const it=100,ot=Promise.resolve().then.bind(Promise.resolve());function Ge(){let t=[],e;function s(){e=null;let n=t;t=[];for(var i=0,o=n.length;i<o;i++)n[i]()}return function(n){t.push(n),e==null&&(e=ot(s))}}const rt=Ge(),de=Ge();var _e;_e=Y;const Q=class Q{constructor(e,s){l(this,"renderer");l(this,"host");l(this,"state");l(this,_e);l(this,"_updateQueued");l(this,"_active");l(this,"_updateCount");l(this,"_processing");this.renderer=e,this.host=s,this.state=new st(this.update.bind(this),s),this[Y]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>Q.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new nt(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,rt(()=>{let e=this.handlePhase(le);de(()=>{this.handlePhase(ce,e),de(()=>{this.handlePhase(E),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[Y]=e,e){case ce:this.commit(s),this.runEffects(N);return;case le:return this.render();case E:return this.runEffects(E)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};l(Q,"maxUpdates",it);let se=Q;const at=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},lt=t=>t==null?void 0:t.map(e=>typeof e=="string"?at(e):e),ct=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),je=ct,dt=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function ut(t){class e extends se{constructor(o,c,a){super(o,a||c);l(this,"frag");l(this,"renderResult");this.frag=c}commit(o){this.renderResult=t(o,this.frag)}}function s(n,i,o){const c=(o||i||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:r=!0,shadowRootInit:u={},styleSheets:h}=o||i||{},d=lt(n.styleSheets||h);class S extends c{constructor(){super();l(this,"_scheduler");if(r===!1)this._scheduler=new e(n,this);else{const p=this.attachShadow({mode:"open",...u});d&&(p.adoptedStyleSheets=d),this._scheduler=new e(n,p,this)}}static get observedAttributes(){return n.observedAttributes||a||[]}connectedCallback(){var p;this._scheduler.resume(),this._scheduler.update(),(p=this._scheduler.renderResult)==null||p.setConnected(!0)}disconnectedCallback(){var p;this._scheduler.pause(),this._scheduler.teardown(),(p=this._scheduler.renderResult)==null||p.setConnected(!1)}attributeChangedCallback(p,b,v){if(b===v)return;let X=v===""?!0:v;Reflect.set(this,dt(p),X)}}function L(w){let f=w,p=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return f},set(b){p&&f===b||(p=!0,f=b,this._scheduler&&this._scheduler.update())}})}const V=new Proxy(c.prototype,{getPrototypeOf(w){return w},set(w,f,p,b){let v;return f in w?(v=Object.getOwnPropertyDescriptor(w,f),v&&v.set?(v.set.call(b,p),!0):(Reflect.set(w,f,p,b),!0)):(typeof f=="symbol"||f[0]==="_"?v={enumerable:!0,configurable:!0,writable:!0,value:p}:v=L(p),Object.defineProperty(b,f,v),v.set&&v.set.call(b,p),!0)}});return Object.setPrototypeOf(S.prototype,V),S}return s}class C{constructor(e,s){l(this,"id");l(this,"state");this.id=e,this.state=s}}function ht(t,...e){let s=tt(),n=U[j],i=n.get(s);return i||(i=new t(s,U,...e),n.set(s,i)),i.update(...e)}function A(t){return ht.bind(null,t)}function Ue(t){return A(class extends C{constructor(s,n,i,o){super(s,n);l(this,"callback");l(this,"lastValues");l(this,"values");l(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function We(t,e){t[E].push(e)}const M=Ue(We),pt=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,ft=A(class extends C{constructor(e,s,n){super(e,s);l(this,"Context");l(this,"value");l(this,"_ranEffect");l(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,We(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};pt(this.state.host).dispatchEvent(new CustomEvent(te,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:o}=s;this.value=i?o:e.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function vt(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();l(this,"listeners");l(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(te,this)}disconnectedCallback(){this.removeEventListener(te,this)}handleEvent(i){const{detail:o}=i;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let o of this.listeners)o(i)}get value(){return this._value}},Consumer:t(function({render:n}){const i=ft(s);return n(i)},{useShadowDOM:!1}),defaultValue:e};return s}}const ne=A(class extends C{constructor(e,s,n,i){super(e,s);l(this,"value");l(this,"values");this.value=n(),this.values=i}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}}),ue=(t,e)=>ne(()=>t,e);function mt(t,e){t[N].push(e)}Ue(mt);const bt=A(class extends C{constructor(e,s,n){super(e,s);l(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});A(class extends C{constructor(e,s,n,i,o){super(e,s);l(this,"reducer");l(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=o!==void 0?o(i):i}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const yt=/([A-Z])/gu;A(class extends C{constructor(e,s,n,i){super(e,s);l(this,"property");l(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(yt,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof i=="function"&&(i=i()),i!=null&&this.updater(i,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],n=typeof e=="function"?e:void 0,i=n?n(s):e;return[s,i,n]}notify(e,s){const n=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,s=!1){const[n,i,o]=this.resolve(e),c=this.notify(i,o);!s&&c.defaultPrevented||Object.is(n,i)||(this.state.host[this.property]=i)}});function xt(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function B(t){return ne(()=>xt(t),[])}const Qe=A(class extends C{update(){return this.state.host}});function wt({render:t}){const e=ut(t),s=vt(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt={CHILD:2},zt=t=>(...e)=>({_$litDirective$:t,values:e});class _t{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=(t,e)=>{var n;const s=t._$AN;if(s===void 0)return!1;for(const i of s)(n=i._$AO)==null||n.call(i,e,!1),k(i,e);return!0},W=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},Ve=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),$t(e)}};function St(t){this._$AN!==void 0?(W(this),this._$AM=t,Ve(this)):this._$AM=t}function Et(t,e=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let o=s;o<n.length;o++)k(n[o],!1),W(n[o]);else n!=null&&(k(n,!1),W(n));else k(this,t)}const $t=t=>{t.type==gt.CHILD&&(t._$AP??(t._$AP=Et),t._$AQ??(t._$AQ=St))};class Ct extends _t{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),Ve(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,i;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),s&&(k(this,e),W(this))}setValue(e){if(Ze(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:Xe}=wt({render:et}),J=new WeakMap,T=zt(class extends Ct{render(t){return ee}update(t,[e]){var n;const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=(n=t.options)==null?void 0:n.host,this.rt(this.ct=t.element)),ee}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=J.get(e);s===void 0&&(s=new WeakMap,J.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=J.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),At=t=>{if(typeof t!="object"||t==null)return!1;const e=t;return typeof e.px=="number"&&e.px>=0&&!Number.isNaN(e.px)},he=t=>{try{const e=JSON.parse(t);if(At(e))return e}catch{}},Lt=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const n=new Map,i=()=>{s=void 0;for(const[a,r]of n)try{localStorage.setItem(t+a,JSON.stringify(r))}catch{}n.clear()},o=(a,r)=>{n.set(a,r),s==null&&(s=setTimeout(i,100))},c=a=>{if(a.key==null||!a.key.startsWith(t)||a.newValue==null)return;const r=a.key.slice(t.length),u=he(a.newValue);if(u==null)return;const h=e.get(r);if(h)for(const d of h)d(u)};return typeof window<"u"&&window.addEventListener("storage",c),{get(a){let r;try{r=localStorage.getItem(t+a)}catch{return}if(r!=null)return he(r)},set(a,r){o(a,r)},subscribe(a,r){let u=e.get(a);return u||(u=new Set,e.set(a,u)),u.add(r),()=>{const h=e.get(a);h&&(h.delete(r),h.size===0&&e.delete(a))}},destroy(){typeof window<"u"&&window.removeEventListener("storage",c),s!=null&&(clearTimeout(s),i())}}},Pt=(t,e,s)=>{const n=B(s);if(n.current=s,M(()=>{var c,a;if(!t||!e)return;const i=t.get(e);(c=n.current)==null||c.call(n,i);const o=(a=t.subscribe)==null?void 0:a.call(t,e,r=>{var u;return(u=n.current)==null?void 0:u.call(n,r)});return()=>{var r;o==null||o(),(r=t.destroy)==null||r.call(t)}},[t,e]),!(!t||!e))return i=>t.set(e,i)},pe=t=>{const e=t.trim();if(e==="")return e;const s=Number(e);return Number.isNaN(s)?e:`${s}px`},Bt=t=>{if(t==null||t.trim()==="")return{};const e=t.includes(",")?t.split(/,\s*/u):t.match(/(?:[^\s()]+\([^)]*\)|\([^)]*\)|[^\s]+)/gu)??[t];return{previous:pe(e[0]),next:e.length>1?pe(e[1]):void 0}},Mt=je`
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
`,K=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},Rt=(t,e,s)=>s==="horizontal"?t.x-e.left:t.y-e.top,fe=t=>{const e=parseFloat(t);return Number.isNaN(e)?void 0:e},Nt=(t,e)=>{const s=getComputedStyle(t);return{min:e==="horizontal"?fe(s.minWidth)??0:fe(s.minHeight)??0}},ve=t=>({rect:t.container.getBoundingClientRect(),bounds:Nt(t.previous,t.direction)}),kt=(t,e,s,n)=>Math.max(n.min,Rt(t,e,s)),qt=t=>{let e;return s=>{var c,a;const{phase:n,mousePosition:i}=s.detail;if(n==="start"){e=ve(t);return}if(n!=="move"&&n!=="end")return;e||(e=ve(t));const o=kt(i,e.rect,t.direction,e.bounds);n==="move"?(c=t.onResize)==null||c.call(t,o):((a=t.onResizeEnd)==null||a.call(t),e=void 0)}},Tt=(t="horizontal")=>{const e=Qe();return M(()=>{e.setAttribute("data-direction",t)},[t]),M(()=>{const s=(d,S)=>{e.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:d,mousePosition:S},bubbles:!0}))};let n=0,i;const o=()=>{n=0,i&&(s("move",i),i=void 0)},c=d=>{i=K(d),n||(n=requestAnimationFrame(o))},a=d=>{n&&(cancelAnimationFrame(n),o()),e.removeAttribute("data-dragging"),s("end",K(d)),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",a)},r=d=>{e.setAttribute("data-dragging","true"),s("start",K(d)),document.addEventListener("mousemove",c),document.addEventListener("mouseup",a),document.addEventListener("touchmove",c,{passive:!1}),document.addEventListener("touchend",a)},u=d=>{d.preventDefault(),r(d)},h=d=>{d.preventDefault(),r(d)};return e.addEventListener("mousedown",u),e.addEventListener("touchstart",h,{passive:!1}),()=>{n&&cancelAnimationFrame(n),e.removeEventListener("mousedown",u),e.removeEventListener("touchstart",h),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",a)}},[e]),null},Dt=je`
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
`,Ft=({direction:t="horizontal"})=>(Tt(t),ee);customElements.define("cosmoz-resize-handle",Xe(Ft,{styleSheets:[Dt],observedAttributes:["direction"]}));const me=t=>getComputedStyle(t).display!=="none",Z=t=>t==null?void 0:t.assignedElements()[0],Ht=(t,e,s)=>{const n=()=>{const o=me(e)&&me(s);t.toggleAttribute("data-single-panel",!o)},i=new ResizeObserver(()=>queueMicrotask(n));return i.observe(e),i.observe(s),n(),i},be=(t,e)=>{if(e==null){t.style.flexBasis="";return}t.style.flexBasis=`${e.px}px`},ye=(t,e,s,n,i)=>{const o=(c,a)=>{const{previous:r,next:u}=Bt(a??null),h=`--resizable-previous-${e}${c}`,d=`--resizable-next-${e}${c}`;r!=null?t.style.setProperty(h,r):t.style.removeProperty(h),u!=null?t.style.setProperty(d,u):t.style.removeProperty(d)};o("",s),o("-horizontal",n),o("-vertical",i)},Ot=({direction:t="horizontal",persist:e,initialSize:s,initialSizeHorizontal:n,initialSizeVertical:i,minSize:o,minSizeHorizontal:c,minSizeVertical:a})=>{const r=Qe(),u=B(),h=B(),d=B(),S=B(),[L,V]=bt({prev:void 0,next:void 0}),w=e?`${e}:${t}`:void 0,f=ne(()=>e?Lt():void 0,[e]),p=Pt(f,w,m=>{const g=Z(h.current);g&&be(g,m)}),b=B(p);b.current=p;const v=ue(()=>{var P,_;const m=(P=h.current)==null?void 0:P.assignedElements()[0],g=(_=d.current)==null?void 0:_.assignedElements()[0];V(R=>R.prev===m&&R.next===g?R:{prev:m,next:g})},[]),X=ue(()=>{var m;(m=S.current)==null||m.assignedElements().forEach(g=>g.setAttribute("slot","previous"))},[]);return M(()=>{r.setAttribute("data-direction",t)},[t]),M(()=>{ye(r,"basis",s,n,i),ye(r,"min",o,c,a)},[r,s,n,i,o,c,a]),M(()=>{if(!L.prev&&!L.next)return;const m=Z(h.current),g=Z(d.current),P=u.current,_=m&&g?Ht(r,m,g):(r.toggleAttribute("data-single-panel",!0),null);if(!m||!g||!P)return()=>_==null?void 0:_.disconnect();m.style.flexBasis="",g.style.flexBasis="";const R=w?f==null?void 0:f.get(w):void 0;be(m,R);const ie=qt({container:r,previous:m,direction:t,onResize:q=>{m.style.flexBasis=`${q}px`},onResizeEnd:()=>{requestAnimationFrame(()=>{var oe;const q=m.getBoundingClientRect(),Ye=t==="horizontal"?q.width:q.height;(oe=b.current)==null||oe.call(b,{px:Ye})})}});return P.addEventListener("resize-handle",ie),()=>{P.removeEventListener("resize-handle",ie),_==null||_.disconnect()}},[t,f,e,r,L.prev,L.next]),$`<slot
			${T(S)}
			@slotchange=${X}
		></slot
		><slot
			name="previous"
			${T(h)}
			@slotchange=${v}
		></slot
		><cosmoz-resize-handle
			direction=${t}
			${T(u)}
		></cosmoz-resize-handle
		><slot name="next" ${T(d)} @slotchange=${v}></slot>`};customElements.define("cosmoz-resizable-view",Xe(Ot,{styleSheets:[Mt],observedAttributes:["direction","persist","initial-size","initial-size-horizontal","initial-size-vertical","min-size","min-size-horizontal","min-size-vertical"]}));const{expect:y,waitFor:z}=__STORYBOOK_MODULE_TEST__,Ut={title:"Components/ResizableView",tags:["autodocs"]},x=t=>`background:${t}; display:flex; align-items:center; justify-content:center; color:white; overflow:auto;`,D={render:()=>$`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
        >
            <div
                slot="previous"
                id="prev"
                style="${x("#ff6b6b")} flex-basis: 50%;"
            >
                <h3>Left Panel</h3>
            </div>
            <div slot="next" id="next" style="${x("#4ecdc4")}">
                <h3>Right Panel</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await z(()=>{const s=t.querySelector("#prev");y(s).not.toBeNull()}),y(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered in shadow DOM between named slots",async()=>{await z(()=>{var n;const s=(n=t.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");y(s).not.toBeNull()})})}},F={render:()=>$`<cosmoz-resizable-view
            style="display:flex; flex-direction:column; width:600px; height:400px; border:1px solid #ccc;"
            direction="vertical"
        >
            <div
                slot="previous"
                style="${x("#ff6b6b")} padding:20px; flex-basis: 50%;"
            >
                <h3>Top Panel</h3>
            </div>
            <div slot="next" style="${x("#4ecdc4")} padding:20px;">
                <h3>Bottom Panel</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{const s=t.querySelector("cosmoz-resizable-view");await z(()=>{y(s.getAttribute("data-direction")).toBe("vertical")}),await z(()=>{var i;const n=(i=s.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle");y(n==null?void 0:n.getAttribute("data-direction")).toBe("vertical")})})}},H={render:()=>$`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
        >
            <div slot="previous" style="${x("#ff6b6b")} flex-basis: 50%;">
                <h3>Left Panel</h3>
            </div>
            <cosmoz-resizable-view
                slot="next"
                direction="vertical"
                style="display:flex;"
            >
                <div
                    slot="previous"
                    style="${x("#ffa726")} padding:10px; flex-basis: 50%;"
                >
                    <h3>Top Panel</h3>
                </div>
                <div slot="next" style="${x("#45b7d1")} padding:10px;">
                    <h3>Bottom Panel</h3>
                </div>
            </cosmoz-resizable-view>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await z(()=>{var i,o;const s=(i=t.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle");y(s).not.toBeNull();const n=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");y(n).not.toBeNull(),y((o=n==null?void 0:n.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle")).not.toBeNull()})})}},O={render:()=>$`<cosmoz-resizable-view
            style="display:flex; width:800px; height:300px; border:1px solid #ccc;"
        >
            <div
                id="list"
                slot="previous"
                style="${x("#ff6b6b")} flex-basis: 25%; min-width: 300px;"
            >
                <h3>List (25% or 300px min)</h3>
            </div>
            <div id="details" slot="next" style="${x("#4ecdc4")}">
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Left panel respects CSS min-width",async()=>{await z(()=>{const s=t.querySelector("#list");y(s.offsetWidth).toBeGreaterThanOrEqual(300)})})}},I={render:()=>$`<cosmoz-resizable-view
            style="display:flex; width:1000px; height:300px; border:1px solid #ccc;"
        >
            <div
                id="list"
                slot="previous"
                style="${x("#ff6b6b")} flex-basis: 40%; max-width: 360px;"
            >
                <h3>List (40% or 360px max)</h3>
            </div>
            <div id="details" slot="next" style="${x("#4ecdc4")}">
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Left panel capped at 360px by CSS max-width",async()=>{await z(()=>{const s=t.querySelector("#list");y(s.offsetWidth).toBeLessThanOrEqual(360)})})}},xe=(t,e)=>{const s=t.shadowRoot.querySelector("cosmoz-resize-handle"),n={bubbles:!0,detail:{mousePosition:{x:e,y:100}}};s.dispatchEvent(new CustomEvent("resize-handle",{...n,detail:{...n.detail,phase:"start"}})),s.dispatchEvent(new CustomEvent("resize-handle",{...n,detail:{...n.detail,phase:"move"}})),s.dispatchEvent(new CustomEvent("resize-handle",{...n,detail:{...n.detail,phase:"end"}}))},G={render:()=>$`<cosmoz-resizable-view
            id="resizable"
            style="display:flex; width:800px; height:300px; border:1px solid #ccc;"
        >
            <div
                id="a"
                slot="previous"
                style="${x("#ff6b6b")} min-width:50px;"
            >
                <h3>Panel A</h3>
            </div>
            <div id="b" slot="next" style="${x("#4ecdc4")} min-width:50px;">
                <h3>Panel B</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){const s=t.querySelector("#resizable"),n=()=>s.getBoundingClientRect().left,i=t.querySelector("#a"),o=t.querySelector("#b"),c=r=>Math.round(r.getBoundingClientRect().width),a=()=>{for(const r of[i,o])r.setAttribute("slot",r.getAttribute("slot")==="previous"?"next":"previous")};await e("Drag sets the previous panel width",async()=>{xe(s,n()+400),await z(()=>{y(c(i)).toBe(400)})}),await e("Swap slots: panel B becomes previous",async()=>{a(),await z(()=>{var u,h,d;const r=(d=(h=(u=s.shadowRoot)==null?void 0:u.querySelector('slot[name="previous"]'))==null?void 0:h.assignedElements()[0])==null?void 0:d.id;y(r).toBe("b")})}),await e("Drag after reassignment tracks the cursor (stale bases cleared)",async()=>{xe(s,n()+300),await z(()=>{y(c(o)).toBe(300)}),y(i.style.flexBasis).toBe("")})}};var Se,Ee,$e;D.parameters={...D.parameters,docs:{...(Se=D.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...($e=(Ee=D.parameters)==null?void 0:Ee.docs)==null?void 0:$e.source}}};var Ce,Ae,Le;F.parameters={...F.parameters,docs:{...(Ce=F.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Le=(Ae=F.parameters)==null?void 0:Ae.docs)==null?void 0:Le.source}}};var Pe,Be,Me;H.parameters={...H.parameters,docs:{...(Pe=H.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Me=(Be=H.parameters)==null?void 0:Be.docs)==null?void 0:Me.source}}};var Re,Ne,ke;O.parameters={...O.parameters,docs:{...(Re=O.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(ke=(Ne=O.parameters)==null?void 0:Ne.docs)==null?void 0:ke.source}}};var qe,Te,De;I.parameters={...I.parameters,docs:{...(qe=I.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(De=(Te=I.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var Fe,He,Oe;G.parameters={...G.parameters,docs:{...(Fe=G.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Oe=(He=G.parameters)==null?void 0:He.docs)==null?void 0:Oe.source}}};const Wt=["BasicDemo","VerticalDemo","MultiplePanels","ListDetailsSplit","CappedInitialSize","SlotReassignmentDemo"];export{D as BasicDemo,I as CappedInitialSize,O as ListDetailsSplit,H as MultiplePanels,G as SlotReassignmentDemo,F as VerticalDemo,Wt as __namedExportsOrder,Ut as default};
