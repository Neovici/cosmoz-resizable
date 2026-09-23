var Je=Object.defineProperty;var Ke=(t,e,s)=>e in t?Je(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var l=(t,e,s)=>Ke(t,typeof e!="symbol"?e+"":e,s);import{f as Ze,B as et,E as ee,x as E}from"./iframe-CmGVwH9l.js";import"./preload-helper-C1FmrZbK.js";let U,He=0;function ie(t){U=t}function re(){U=null,He=0}function tt(){return He++}const Y=Symbol("haunted.phase"),j=Symbol("haunted.hook"),ae=Symbol("haunted.update"),le=Symbol("haunted.commit"),S=Symbol("haunted.effects"),M=Symbol("haunted.layoutEffects"),te="haunted.context";var xe,we,ge;ge=j,we=S,xe=M;class st{constructor(e,s){l(this,"update");l(this,"host");l(this,"virtual");l(this,ge);l(this,we);l(this,xe);this.update=e,this.host=s,this[j]=new Map,this[S]=[],this[M]=[]}run(e){ie(this);let s=e();return re(),s}_runEffects(e){let s=this[e];ie(this);for(let n of s)n.call(this);re()}runEffects(){this._runEffects(S)}runLayoutEffects(){this._runEffects(M)}teardown(){this[j].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class nt extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const ot=100,it=Promise.resolve().then.bind(Promise.resolve());function Ie(){let t=[],e;function s(){e=null;let n=t;t=[];for(var o=0,i=n.length;o<i;o++)n[o]()}return function(n){t.push(n),e==null&&(e=it(s))}}const rt=Ie(),ce=Ie();var ze;ze=Y;const Q=class Q{constructor(e,s){l(this,"renderer");l(this,"host");l(this,"state");l(this,ze);l(this,"_updateQueued");l(this,"_active");l(this,"_updateCount");l(this,"_processing");this.renderer=e,this.host=s,this.state=new st(this.update.bind(this),s),this[Y]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>Q.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new nt(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,rt(()=>{let e=this.handlePhase(ae);ce(()=>{this.handlePhase(le,e),ce(()=>{this.handlePhase(S),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[Y]=e,e){case le:this.commit(s),this.runEffects(M);return;case ae:return this.render();case S:return this.runEffects(S)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};l(Q,"maxUpdates",ot);let se=Q;const at=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},lt=t=>t==null?void 0:t.map(e=>typeof e=="string"?at(e):e),ct=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),Ge=ct,dt=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function ut(t){class e extends se{constructor(i,c,a){super(i,a||c);l(this,"frag");l(this,"renderResult");this.frag=c}commit(i){this.renderResult=t(i,this.frag)}}function s(n,o,i){const c=(i||o||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:r=!0,shadowRootInit:u={},styleSheets:p}=i||o||{},d=lt(n.styleSheets||p);class _ extends c{constructor(){super();l(this,"_scheduler");if(r===!1)this._scheduler=new e(n,this);else{const h=this.attachShadow({mode:"open",...u});d&&(h.adoptedStyleSheets=d),this._scheduler=new e(n,h,this)}}static get observedAttributes(){return n.observedAttributes||a||[]}connectedCallback(){var h;this._scheduler.resume(),this._scheduler.update(),(h=this._scheduler.renderResult)==null||h.setConnected(!0)}disconnectedCallback(){var h;this._scheduler.pause(),this._scheduler.teardown(),(h=this._scheduler.renderResult)==null||h.setConnected(!1)}attributeChangedCallback(h,b,v){if(b===v)return;let X=v===""?!0:v;Reflect.set(this,dt(h),X)}}function A(w){let f=w,h=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return f},set(b){h&&f===b||(h=!0,f=b,this._scheduler&&this._scheduler.update())}})}const V=new Proxy(c.prototype,{getPrototypeOf(w){return w},set(w,f,h,b){let v;return f in w?(v=Object.getOwnPropertyDescriptor(w,f),v&&v.set?(v.set.call(b,h),!0):(Reflect.set(w,f,h,b),!0)):(typeof f=="symbol"||f[0]==="_"?v={enumerable:!0,configurable:!0,writable:!0,value:h}:v=A(h),Object.defineProperty(b,f,v),v.set&&v.set.call(b,h),!0)}});return Object.setPrototypeOf(_.prototype,V),_}return s}class ${constructor(e,s){l(this,"id");l(this,"state");this.id=e,this.state=s}}function ht(t,...e){let s=tt(),n=U[j],o=n.get(s);return o||(o=new t(s,U,...e),n.set(s,o)),o.update(...e)}function C(t){return ht.bind(null,t)}function je(t){return C(class extends ${constructor(s,n,o,i){super(s,n);l(this,"callback");l(this,"lastValues");l(this,"values");l(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function Ue(t,e){t[S].push(e)}const R=je(Ue),pt=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,ft=C(class extends ${constructor(e,s,n){super(e,s);l(this,"Context");l(this,"value");l(this,"_ranEffect");l(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Ue(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};pt(this.state.host).dispatchEvent(new CustomEvent(te,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:o=null,value:i}=s;this.value=o?i:e.defaultValue,this._unsubscribe=o}teardown(){this._unsubscribe&&this._unsubscribe()}});function vt(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();l(this,"listeners");l(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(te,this)}disconnectedCallback(){this.removeEventListener(te,this)}handleEvent(o){const{detail:i}=o;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),o.stopPropagation())}unsubscribe(o){this.listeners.delete(o)}set value(o){this._value=o;for(let i of this.listeners)i(o)}get value(){return this._value}},Consumer:t(function({render:n}){const o=ft(s);return n(o)},{useShadowDOM:!1}),defaultValue:e};return s}}const ne=C(class extends ${constructor(e,s,n,o){super(e,s);l(this,"value");l(this,"values");this.value=n(),this.values=o}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}}),de=(t,e)=>ne(()=>t,e);function mt(t,e){t[M].push(e)}je(mt);const bt=C(class extends ${constructor(e,s,n){super(e,s);l(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});C(class extends ${constructor(e,s,n,o,i){super(e,s);l(this,"reducer");l(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(o):o}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const yt=/([A-Z])/gu;C(class extends ${constructor(e,s,n,o){super(e,s);l(this,"property");l(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(yt,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof o=="function"&&(o=o()),o!=null&&this.updater(o,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],n=typeof e=="function"?e:void 0,o=n?n(s):e;return[s,o,n]}notify(e,s){const n=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,s=!1){const[n,o,i]=this.resolve(e),c=this.notify(o,i);!s&&c.defaultPrevented||Object.is(n,o)||(this.state.host[this.property]=o)}});function xt(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function B(t){return ne(()=>xt(t),[])}const We=C(class extends ${update(){return this.state.host}});function wt({render:t}){const e=ut(t),s=vt(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt={CHILD:2},zt=t=>(...e)=>({_$litDirective$:t,values:e});class _t{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=(t,e)=>{var n;const s=t._$AN;if(s===void 0)return!1;for(const o of s)(n=o._$AO)==null||n.call(o,e,!1),N(o,e);return!0},W=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},Qe=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),$t(e)}};function St(t){this._$AN!==void 0?(W(this),this._$AM=t,Qe(this)):this._$AM=t}function Et(t,e=!1,s=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let i=s;i<n.length;i++)N(n[i],!1),W(n[i]);else n!=null&&(N(n,!1),W(n));else N(this,t)}const $t=t=>{t.type==gt.CHILD&&(t._$AP??(t._$AP=Et),t._$AQ??(t._$AQ=St))};class Ct extends _t{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),Qe(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,o;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),s&&(N(this,e),W(this))}setValue(e){if(Ze(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:Ve}=wt({render:et}),J=new WeakMap,T=zt(class extends Ct{render(t){return ee}update(t,[e]){var n;const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=(n=t.options)==null?void 0:n.host,this.rt(this.ct=t.element)),ee}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=J.get(e);s===void 0&&(s=new WeakMap,J.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=J.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),At=t=>{if(typeof t!="object"||t==null)return!1;const e=t;return typeof e.px=="number"&&e.px>=0&&!Number.isNaN(e.px)},ue=t=>{try{const e=JSON.parse(t);if(At(e))return e}catch{}},Lt=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const n=new Map,o=()=>{s=void 0;for(const[a,r]of n)try{localStorage.setItem(t+a,JSON.stringify(r))}catch{}n.clear()},i=(a,r)=>{n.set(a,r),s==null&&(s=setTimeout(o,100))},c=a=>{if(a.key==null||!a.key.startsWith(t)||a.newValue==null)return;const r=a.key.slice(t.length),u=ue(a.newValue);if(u==null)return;const p=e.get(r);if(p)for(const d of p)d(u)};return typeof window<"u"&&window.addEventListener("storage",c),{get(a){let r;try{r=localStorage.getItem(t+a)}catch{return}if(r!=null)return ue(r)},set(a,r){i(a,r)},subscribe(a,r){let u=e.get(a);return u||(u=new Set,e.set(a,u)),u.add(r),()=>{const p=e.get(a);p&&(p.delete(r),p.size===0&&e.delete(a))}},destroy(){typeof window<"u"&&window.removeEventListener("storage",c),s!=null&&(clearTimeout(s),o())}}},Pt=(t,e,s)=>{const n=B(s);if(n.current=s,R(()=>{var c,a;if(!t||!e)return;const o=t.get(e);(c=n.current)==null||c.call(n,o);const i=(a=t.subscribe)==null?void 0:a.call(t,e,r=>{var u;return(u=n.current)==null?void 0:u.call(n,r)});return()=>{var r;i==null||i(),(r=t.destroy)==null||r.call(t)}},[t,e]),!(!t||!e))return o=>t.set(e,o)},he=t=>{const e=t.trim();if(e==="")return e;const s=Number(e);return Number.isNaN(s)?e:`${s}px`},Bt=t=>{if(t==null||t.trim()==="")return{};const e=t.includes(",")?t.split(/,\s*/u):t.match(/(?:[^\s()]+\([^)]*\)|\([^)]*\)|[^\s]+)/gu)??[t];return{previous:he(e[0]),next:e.length>1?he(e[1]):void 0}},Rt=Ge`
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
`,K=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},Mt=(t,e,s)=>s==="horizontal"?t.x-e.left:t.y-e.top,pe=t=>{const e=parseFloat(t);return Number.isNaN(e)?void 0:e},Nt=(t,e)=>{const s=getComputedStyle(t);return{min:e==="horizontal"?pe(s.minWidth)??0:pe(s.minHeight)??0}},fe=t=>({rect:t.container.getBoundingClientRect(),bounds:Nt(t.previous,t.direction)}),kt=(t,e,s,n)=>Math.max(n.min,Mt(t,e,s)),qt=t=>{let e;return s=>{var c,a;const{phase:n,mousePosition:o}=s.detail;if(n==="start"){e=fe(t);return}if(n!=="move"&&n!=="end")return;e||(e=fe(t));const i=kt(o,e.rect,t.direction,e.bounds);n==="move"?(c=t.onResize)==null||c.call(t,i):((a=t.onResizeEnd)==null||a.call(t),e=void 0)}},Tt=(t="horizontal")=>{const e=We();return R(()=>{e.setAttribute("data-direction",t)},[t]),R(()=>{const s=(d,_)=>{e.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:d,mousePosition:_},bubbles:!0}))};let n=0,o;const i=()=>{n=0,o&&(s("move",o),o=void 0)},c=d=>{o=K(d),n||(n=requestAnimationFrame(i))},a=d=>{n&&(cancelAnimationFrame(n),i()),e.removeAttribute("data-dragging"),s("end",K(d)),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",a)},r=d=>{e.setAttribute("data-dragging","true"),s("start",K(d)),document.addEventListener("mousemove",c),document.addEventListener("mouseup",a),document.addEventListener("touchmove",c,{passive:!1}),document.addEventListener("touchend",a)},u=d=>{d.preventDefault(),r(d)},p=d=>{d.preventDefault(),r(d)};return e.addEventListener("mousedown",u),e.addEventListener("touchstart",p,{passive:!1}),()=>{n&&cancelAnimationFrame(n),e.removeEventListener("mousedown",u),e.removeEventListener("touchstart",p),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",a)}},[e]),null},Dt=Ge`
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
`,Ft=({direction:t="horizontal"})=>(Tt(t),ee);customElements.define("cosmoz-resize-handle",Ve(Ft,{styleSheets:[Dt],observedAttributes:["direction"]}));const ve=t=>getComputedStyle(t).display!=="none",Z=t=>t==null?void 0:t.assignedElements()[0],Ot=(t,e,s)=>{const n=()=>{const i=ve(e)&&ve(s);t.toggleAttribute("data-single-panel",!i)},o=new ResizeObserver(()=>queueMicrotask(n));return o.observe(e),o.observe(s),n(),o},me=(t,e)=>{if(e==null){t.style.flexBasis="";return}t.style.flexBasis=`${e.px}px`},be=(t,e,s,n,o)=>{const i=(c,a)=>{const{previous:r,next:u}=Bt(a??null),p=`--resizable-previous-${e}${c}`,d=`--resizable-next-${e}${c}`;r!=null?t.style.setProperty(p,r):t.style.removeProperty(p),u!=null?t.style.setProperty(d,u):t.style.removeProperty(d)};i("",s),i("-horizontal",n),i("-vertical",o)},Ht=({direction:t="horizontal",persist:e,initialSize:s,initialSizeHorizontal:n,initialSizeVertical:o,minSize:i,minSizeHorizontal:c,minSizeVertical:a})=>{const r=We(),u=B(),p=B(),d=B(),_=B(),[A,V]=bt({prev:void 0,next:void 0}),w=e?`${e}:${t}`:void 0,f=ne(()=>e?Lt():void 0,[e]),h=Pt(f,w,m=>{const g=Z(p.current);g&&me(g,m)}),b=B(h);b.current=h;const v=de(()=>{var L,k;const m=(L=p.current)==null?void 0:L.assignedElements()[0],g=(k=d.current)==null?void 0:k.assignedElements()[0];V(P=>P.prev===m&&P.next===g?P:{prev:m,next:g})},[]),X=de(()=>{var m;(m=_.current)==null||m.assignedElements().forEach(g=>g.setAttribute("slot","previous"))},[]);return R(()=>{r.setAttribute("data-direction",t)},[t]),R(()=>{be(r,"basis",s,n,o),be(r,"min",i,c,a)},[r,s,n,o,i,c,a]),R(()=>{if(!A.prev||!A.next)return;const m=Z(p.current),g=Z(d.current),L=u.current;if(!m||!g||!L)return;m.style.flexBasis="",g.style.flexBasis="";const k=w?f==null?void 0:f.get(w):void 0;me(m,k);const P=qt({container:r,previous:m,direction:t,onResize:q=>{m.style.flexBasis=`${q}px`},onResizeEnd:()=>{requestAnimationFrame(()=>{var oe;const q=m.getBoundingClientRect(),Ye=t==="horizontal"?q.width:q.height;(oe=b.current)==null||oe.call(b,{px:Ye})})}});L.addEventListener("resize-handle",P);const Xe=Ot(r,m,g);return()=>{L.removeEventListener("resize-handle",P),Xe.disconnect()}},[t,f,e,r,A.prev,A.next]),E`<slot
			${T(_)}
			@slotchange=${X}
		></slot
		><slot
			name="previous"
			${T(p)}
			@slotchange=${v}
		></slot
		><cosmoz-resize-handle
			direction=${t}
			${T(u)}
		></cosmoz-resize-handle
		><slot name="next" ${T(d)} @slotchange=${v}></slot>`};customElements.define("cosmoz-resizable-view",Ve(Ht,{styleSheets:[Rt],observedAttributes:["direction","persist","initial-size","initial-size-horizontal","initial-size-vertical","min-size","min-size-horizontal","min-size-vertical"]}));const{expect:y,waitFor:z}=__STORYBOOK_MODULE_TEST__,Ut={title:"Components/ResizableView",tags:["autodocs"]},x=t=>`background:${t}; display:flex; align-items:center; justify-content:center; color:white; overflow:auto;`,D={render:()=>E`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await z(()=>{const s=t.querySelector("#prev");y(s).not.toBeNull()}),y(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered in shadow DOM between named slots",async()=>{await z(()=>{var n;const s=(n=t.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");y(s).not.toBeNull()})})}},F={render:()=>E`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{const s=t.querySelector("cosmoz-resizable-view");await z(()=>{y(s.getAttribute("data-direction")).toBe("vertical")}),await z(()=>{var o;const n=(o=s.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle");y(n==null?void 0:n.getAttribute("data-direction")).toBe("vertical")})})}},O={render:()=>E`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await z(()=>{var o,i;const s=(o=t.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle");y(s).not.toBeNull();const n=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");y(n).not.toBeNull(),y((i=n==null?void 0:n.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle")).not.toBeNull()})})}},H={render:()=>E`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Left panel respects CSS min-width",async()=>{await z(()=>{const s=t.querySelector("#list");y(s.offsetWidth).toBeGreaterThanOrEqual(300)})})}},I={render:()=>E`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Left panel capped at 360px by CSS max-width",async()=>{await z(()=>{const s=t.querySelector("#list");y(s.offsetWidth).toBeLessThanOrEqual(360)})})}},ye=(t,e)=>{const s=t.shadowRoot.querySelector("cosmoz-resize-handle"),n={bubbles:!0,detail:{mousePosition:{x:e,y:100}}};s.dispatchEvent(new CustomEvent("resize-handle",{...n,detail:{...n.detail,phase:"start"}})),s.dispatchEvent(new CustomEvent("resize-handle",{...n,detail:{...n.detail,phase:"move"}})),s.dispatchEvent(new CustomEvent("resize-handle",{...n,detail:{...n.detail,phase:"end"}}))},G={render:()=>E`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){const s=t.querySelector("#resizable"),n=()=>s.getBoundingClientRect().left,o=t.querySelector("#a"),i=t.querySelector("#b"),c=r=>Math.round(r.getBoundingClientRect().width),a=()=>{for(const r of[o,i])r.setAttribute("slot",r.getAttribute("slot")==="previous"?"next":"previous")};await e("Drag sets the previous panel width",async()=>{ye(s,n()+400),await z(()=>{y(c(o)).toBe(400)})}),await e("Swap slots: panel B becomes previous",async()=>{a(),await z(()=>{var r,u;y((u=(r=s.shadowRoot)==null?void 0:r.querySelector('slot[name="previous"]').assignedElements()[0])==null?void 0:u.id).toBe("b")})}),await e("Drag after reassignment tracks the cursor (stale bases cleared)",async()=>{ye(s,n()+300),await z(()=>{y(c(i)).toBe(300)}),y(o.style.flexBasis).toBe("")})}};var _e,Se,Ee;D.parameters={...D.parameters,docs:{...(_e=D.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Ee=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source}}};var $e,Ce,Ae;F.parameters={...F.parameters,docs:{...($e=F.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ae=(Ce=F.parameters)==null?void 0:Ce.docs)==null?void 0:Ae.source}}};var Le,Pe,Be;O.parameters={...O.parameters,docs:{...(Le=O.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Be=(Pe=O.parameters)==null?void 0:Pe.docs)==null?void 0:Be.source}}};var Re,Me,Ne;H.parameters={...H.parameters,docs:{...(Re=H.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ne=(Me=H.parameters)==null?void 0:Me.docs)==null?void 0:Ne.source}}};var ke,qe,Te;I.parameters={...I.parameters,docs:{...(ke=I.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Te=(qe=I.parameters)==null?void 0:qe.docs)==null?void 0:Te.source}}};var De,Fe,Oe;G.parameters={...G.parameters,docs:{...(De=G.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
        expect(el.shadowRoot?.querySelector('slot[name="previous"]').assignedElements()[0]?.id).toBe('b');
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
}`,...(Oe=(Fe=G.parameters)==null?void 0:Fe.docs)==null?void 0:Oe.source}}};const Wt=["BasicDemo","VerticalDemo","MultiplePanels","ListDetailsSplit","CappedInitialSize","SlotReassignmentDemo"];export{D as BasicDemo,I as CappedInitialSize,H as ListDetailsSplit,O as MultiplePanels,G as SlotReassignmentDemo,F as VerticalDemo,Wt as __namedExportsOrder,Ut as default};
