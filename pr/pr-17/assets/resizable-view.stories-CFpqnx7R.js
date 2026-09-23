var Ze=Object.defineProperty;var et=(t,e,s)=>e in t?Ze(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var l=(t,e,s)=>et(t,typeof e!="symbol"?e+"":e,s);import{f as tt,B as st,E as ee,x as E}from"./iframe-D99UGVwU.js";import"./preload-helper-C1FmrZbK.js";let U,je=0;function oe(t){U=t}function re(){U=null,je=0}function nt(){return je++}const Y=Symbol("haunted.phase"),G=Symbol("haunted.hook"),ae=Symbol("haunted.update"),le=Symbol("haunted.commit"),S=Symbol("haunted.effects"),R=Symbol("haunted.layoutEffects"),te="haunted.context";var ge,ze,_e;_e=G,ze=S,ge=R;class it{constructor(e,s){l(this,"update");l(this,"host");l(this,"virtual");l(this,_e);l(this,ze);l(this,ge);this.update=e,this.host=s,this[G]=new Map,this[S]=[],this[R]=[]}run(e){oe(this);let s=e();return re(),s}_runEffects(e){let s=this[e];oe(this);for(let n of s)n.call(this);re()}runEffects(){this._runEffects(S)}runLayoutEffects(){this._runEffects(R)}teardown(){this[G].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class ot extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const rt=100,at=Promise.resolve().then.bind(Promise.resolve());function Ge(){let t=[],e;function s(){e=null;let n=t;t=[];for(var i=0,o=n.length;i<o;i++)n[i]()}return function(n){t.push(n),e==null&&(e=at(s))}}const lt=Ge(),ce=Ge();var Se;Se=Y;const Q=class Q{constructor(e,s){l(this,"renderer");l(this,"host");l(this,"state");l(this,Se);l(this,"_updateQueued");l(this,"_active");l(this,"_updateCount");l(this,"_processing");this.renderer=e,this.host=s,this.state=new it(this.update.bind(this),s),this[Y]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>Q.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new ot(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,lt(()=>{let e=this.handlePhase(ae);ce(()=>{this.handlePhase(le,e),ce(()=>{this.handlePhase(S),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[Y]=e,e){case le:this.commit(s),this.runEffects(R);return;case ae:return this.render();case S:return this.runEffects(S)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};l(Q,"maxUpdates",rt);let se=Q;const ct=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},dt=t=>t==null?void 0:t.map(e=>typeof e=="string"?ct(e):e),ut=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),Ue=ut,ht=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function pt(t){class e extends se{constructor(o,c,r){super(o,r||c);l(this,"frag");l(this,"renderResult");this.frag=c}commit(o){this.renderResult=t(o,this.frag)}}function s(n,i,o){const c=(o||i||{}).baseElement||HTMLElement,{observedAttributes:r=[],useShadowDOM:a=!0,shadowRootInit:h={},styleSheets:p}=o||i||{},d=dt(n.styleSheets||p);class _ extends c{constructor(){super();l(this,"_scheduler");if(a===!1)this._scheduler=new e(n,this);else{const u=this.attachShadow({mode:"open",...h});d&&(u.adoptedStyleSheets=d),this._scheduler=new e(n,u,this)}}static get observedAttributes(){return n.observedAttributes||r||[]}connectedCallback(){var u;this._scheduler.resume(),this._scheduler.update(),(u=this._scheduler.renderResult)==null||u.setConnected(!0)}disconnectedCallback(){var u;this._scheduler.pause(),this._scheduler.teardown(),(u=this._scheduler.renderResult)==null||u.setConnected(!1)}attributeChangedCallback(u,b,v){if(b===v)return;let X=v===""?!0:v;Reflect.set(this,ht(u),X)}}function A(x){let f=x,u=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return f},set(b){u&&f===b||(u=!0,f=b,this._scheduler&&this._scheduler.update())}})}const V=new Proxy(c.prototype,{getPrototypeOf(x){return x},set(x,f,u,b){let v;return f in x?(v=Object.getOwnPropertyDescriptor(x,f),v&&v.set?(v.set.call(b,u),!0):(Reflect.set(x,f,u,b),!0)):(typeof f=="symbol"||f[0]==="_"?v={enumerable:!0,configurable:!0,writable:!0,value:u}:v=A(u),Object.defineProperty(b,f,v),v.set&&v.set.call(b,u),!0)}});return Object.setPrototypeOf(_.prototype,V),_}return s}class ${constructor(e,s){l(this,"id");l(this,"state");this.id=e,this.state=s}}function ft(t,...e){let s=nt(),n=U[G],i=n.get(s);return i||(i=new t(s,U,...e),n.set(s,i)),i.update(...e)}function C(t){return ft.bind(null,t)}function We(t){return C(class extends ${constructor(s,n,i,o){super(s,n);l(this,"callback");l(this,"lastValues");l(this,"values");l(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function Qe(t,e){t[S].push(e)}const M=We(Qe),vt=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,mt=C(class extends ${constructor(e,s,n){super(e,s);l(this,"Context");l(this,"value");l(this,"_ranEffect");l(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Qe(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};vt(this.state.host).dispatchEvent(new CustomEvent(te,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:o}=s;this.value=i?o:e.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function bt(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();l(this,"listeners");l(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(te,this)}disconnectedCallback(){this.removeEventListener(te,this)}handleEvent(i){const{detail:o}=i;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let o of this.listeners)o(i)}get value(){return this._value}},Consumer:t(function({render:n}){const i=mt(s);return n(i)},{useShadowDOM:!1}),defaultValue:e};return s}}const ne=C(class extends ${constructor(e,s,n,i){super(e,s);l(this,"value");l(this,"values");this.value=n(),this.values=i}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}}),de=(t,e)=>ne(()=>t,e);function yt(t,e){t[R].push(e)}We(yt);const wt=C(class extends ${constructor(e,s,n){super(e,s);l(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});C(class extends ${constructor(e,s,n,i,o){super(e,s);l(this,"reducer");l(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=o!==void 0?o(i):i}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const xt=/([A-Z])/gu;C(class extends ${constructor(e,s,n,i){super(e,s);l(this,"property");l(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(xt,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof i=="function"&&(i=i()),i!=null&&this.updater(i,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],n=typeof e=="function"?e:void 0,i=n?n(s):e;return[s,i,n]}notify(e,s){const n=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,s=!1){const[n,i,o]=this.resolve(e),c=this.notify(i,o);!s&&c.defaultPrevented||Object.is(n,i)||(this.state.host[this.property]=i)}});function gt(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function P(t){return ne(()=>gt(t),[])}const Ve=C(class extends ${update(){return this.state.host}});function zt({render:t}){const e=pt(t),s=bt(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t={CHILD:2},St=t=>(...e)=>({_$litDirective$:t,values:e});class Et{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=(t,e)=>{var n;const s=t._$AN;if(s===void 0)return!1;for(const i of s)(n=i._$AO)==null||n.call(i,e,!1),k(i,e);return!0},W=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},Xe=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),At(e)}};function $t(t){this._$AN!==void 0?(W(this),this._$AM=t,Xe(this)):this._$AM=t}function Ct(t,e=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let o=s;o<n.length;o++)k(n[o],!1),W(n[o]);else n!=null&&(k(n,!1),W(n));else k(this,t)}const At=t=>{t.type==_t.CHILD&&(t._$AP??(t._$AP=Ct),t._$AQ??(t._$AQ=$t))};class Lt extends Et{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),Xe(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,i;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),s&&(k(this,e),W(this))}setValue(e){if(tt(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:Ye}=zt({render:st}),J=new WeakMap,T=St(class extends Lt{render(t){return ee}update(t,[e]){var n;const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=(n=t.options)==null?void 0:n.host,this.rt(this.ct=t.element)),ee}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=J.get(e);s===void 0&&(s=new WeakMap,J.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=J.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Bt=t=>{if(typeof t!="object"||t==null)return!1;const e=t;return typeof e.px=="number"&&e.px>=0&&!Number.isNaN(e.px)},ue=t=>{try{const e=JSON.parse(t);if(Bt(e))return e}catch{}},Pt=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const n=new Map,i=()=>{s=void 0;for(const[r,a]of n)try{localStorage.setItem(t+r,JSON.stringify(a))}catch{}n.clear()},o=(r,a)=>{n.set(r,a),s==null&&(s=setTimeout(i,100))},c=r=>{if(r.key==null||!r.key.startsWith(t)||r.newValue==null)return;const a=r.key.slice(t.length),h=ue(r.newValue);if(h==null)return;const p=e.get(a);if(p)for(const d of p)d(h)};return typeof window<"u"&&window.addEventListener("storage",c),{get(r){let a;try{a=localStorage.getItem(t+r)}catch{return}if(a!=null)return ue(a)},set(r,a){o(r,a)},subscribe(r,a){let h=e.get(r);return h||(h=new Set,e.set(r,h)),h.add(a),()=>{const p=e.get(r);p&&(p.delete(a),p.size===0&&e.delete(r))}},destroy(){typeof window<"u"&&window.removeEventListener("storage",c),s!=null&&(clearTimeout(s),i())}}},Mt=(t,e,s)=>{const n=P(s);if(n.current=s,M(()=>{var c,r;if(!t||!e)return;const i=t.get(e);(c=n.current)==null||c.call(n,i);const o=(r=t.subscribe)==null?void 0:r.call(t,e,a=>{var h;return(h=n.current)==null?void 0:h.call(n,a)});return()=>{var a;o==null||o(),(a=t.destroy)==null||a.call(t)}},[t,e]),!(!t||!e))return i=>t.set(e,i)},he=t=>{const e=t.trim();if(e==="")return e;const s=Number(e);return Number.isNaN(s)?e:`${s}px`},Rt=t=>{if(t==null||t.trim()==="")return{};const e=t.includes(",")?t.split(/,\s*/u):t.match(/(?:[^\s()]+\([^)]*\)|\([^)]*\)|[^\s]+)/gu)??[t];return{previous:he(e[0]),next:e.length>1?he(e[1]):void 0}},kt=Ue`
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
`,K=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},qt=(t,e,s)=>s==="horizontal"?t.x-e.left:t.y-e.top,pe=t=>{const e=parseFloat(t);return Number.isNaN(e)?void 0:e},Nt=(t,e)=>{const s=getComputedStyle(t);return{min:e==="horizontal"?pe(s.minWidth)??0:pe(s.minHeight)??0}},fe=t=>({rect:t.container.getBoundingClientRect(),bounds:Nt(t.previous,t.direction)}),Tt=(t,e,s,n)=>Math.max(n.min,qt(t,e,s)),Dt=t=>{let e;return s=>{var c,r;const{phase:n,mousePosition:i}=s.detail;if(n==="start"){e=fe(t);return}if(n!=="move"&&n!=="end")return;e||(e=fe(t));const o=Tt(i,e.rect,t.direction,e.bounds);n==="move"?(c=t.onResize)==null||c.call(t,o):((r=t.onResizeEnd)==null||r.call(t),e=void 0)}},Ot=(t="horizontal")=>{const e=Ve();return M(()=>{e.setAttribute("data-direction",t)},[t]),M(()=>{const s=(d,_)=>{e.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:d,mousePosition:_},bubbles:!0}))};let n=0,i;const o=()=>{n=0,i&&(s("move",i),i=void 0)},c=d=>{i=K(d),n||(n=requestAnimationFrame(o))},r=d=>{n&&(cancelAnimationFrame(n),o()),e.removeAttribute("data-dragging"),s("end",K(d)),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",r)},a=d=>{e.setAttribute("data-dragging","true"),s("start",K(d)),document.addEventListener("mousemove",c),document.addEventListener("mouseup",r),document.addEventListener("touchmove",c,{passive:!1}),document.addEventListener("touchend",r)},h=d=>{d.preventDefault(),a(d)},p=d=>{d.preventDefault(),a(d)};return e.addEventListener("mousedown",h),e.addEventListener("touchstart",p,{passive:!1}),()=>{n&&cancelAnimationFrame(n),e.removeEventListener("mousedown",h),e.removeEventListener("touchstart",p),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",r)}},[e]),null},Ft=Ue`
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
`,Ht=({direction:t="horizontal"})=>(Ot(t),ee);customElements.define("cosmoz-resize-handle",Ye(Ht,{styleSheets:[Ft],observedAttributes:["direction"]}));const ve=t=>getComputedStyle(t).display!=="none",Z=t=>t==null?void 0:t.assignedElements()[0],It=(t,e,s)=>{const n=()=>{const o=ve(e)&&ve(s);t.toggleAttribute("data-single-panel",!o)},i=new ResizeObserver(()=>queueMicrotask(n));return i.observe(e),i.observe(s),n(),i},me=(t,e)=>{if(e==null){t.style.flexBasis="";return}t.style.flexBasis=`${e.px}px`},be=(t,e,s,n,i)=>{const o=(c,r)=>{const{previous:a,next:h}=Rt(r??null),p=`--resizable-previous-${e}${c}`,d=`--resizable-next-${e}${c}`;a!=null?t.style.setProperty(p,a):t.style.removeProperty(p),h!=null?t.style.setProperty(d,h):t.style.removeProperty(d)};o("",s),o("-horizontal",n),o("-vertical",i)},jt=({direction:t="horizontal",persist:e,initialSize:s,initialSizeHorizontal:n,initialSizeVertical:i,minSize:o,minSizeHorizontal:c,minSizeVertical:r})=>{const a=Ve(),h=P(),p=P(),d=P(),_=P(),[A,V]=wt({prev:void 0,next:void 0}),x=e?`${e}:${t}`:void 0,f=ne(()=>e?Pt():void 0,[e]),u=Mt(f,x,m=>{const g=Z(p.current);g&&me(g,m)}),b=P(u);b.current=u;const v=de(()=>{var L,q;const m=(L=p.current)==null?void 0:L.assignedElements()[0],g=(q=d.current)==null?void 0:q.assignedElements()[0];V(B=>B.prev===m&&B.next===g?B:{prev:m,next:g})},[]),X=de(()=>{var m;(m=_.current)==null||m.assignedElements().forEach(g=>g.setAttribute("slot","previous"))},[]);return M(()=>{a.setAttribute("data-direction",t)},[t]),M(()=>{be(a,"basis",s,n,i),be(a,"min",o,c,r)},[a,s,n,i,o,c,r]),M(()=>{if(!A.prev||!A.next)return;const m=Z(p.current),g=Z(d.current),L=h.current;if(!m||!g||!L)return;m.style.flexBasis="",g.style.flexBasis="";const q=x?f==null?void 0:f.get(x):void 0;me(m,q);const B=Dt({container:a,previous:m,direction:t,onResize:N=>{m.style.flexBasis=`${N}px`},onResizeEnd:()=>{requestAnimationFrame(()=>{var ie;const N=m.getBoundingClientRect(),Ke=t==="horizontal"?N.width:N.height;(ie=b.current)==null||ie.call(b,{px:Ke})})}});L.addEventListener("resize-handle",B);const Je=It(a,m,g);return()=>{L.removeEventListener("resize-handle",B),Je.disconnect()}},[t,f,e,a,A.prev,A.next]),E`<slot
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
			${T(h)}
		></cosmoz-resize-handle
		><slot name="next" ${T(d)} @slotchange=${v}></slot>`};customElements.define("cosmoz-resizable-view",Ye(jt,{styleSheets:[kt],observedAttributes:["direction","persist","initial-size","initial-size-horizontal","initial-size-vertical","min-size","min-size-horizontal","min-size-vertical"]}));var ye=Object.freeze,Gt=Object.defineProperty,Ut=(t,e)=>ye(Gt(t,"raw",{value:ye(t.slice())})),we;const{expect:y,waitFor:z}=__STORYBOOK_MODULE_TEST__,Xt={title:"Components/ResizableView",tags:["autodocs"]},w=t=>`background:${t}; display:flex; align-items:center; justify-content:center; color:white; overflow:auto;`,D={render:()=>E`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await z(()=>{const s=t.querySelector("#prev");y(s).not.toBeNull()}),y(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered in shadow DOM between named slots",async()=>{await z(()=>{var n;const s=(n=t.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");y(s).not.toBeNull()})})}},O={render:()=>E`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{const s=t.querySelector("cosmoz-resizable-view");await z(()=>{y(s.getAttribute("data-direction")).toBe("vertical")}),await z(()=>{var i;const n=(i=s.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle");y(n==null?void 0:n.getAttribute("data-direction")).toBe("vertical")})})}},F={render:()=>E`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await z(()=>{var i,o;const s=(i=t.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle");y(s).not.toBeNull();const n=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");y(n).not.toBeNull(),y((o=n==null?void 0:n.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle")).not.toBeNull()})})}},H={render:()=>E`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Left panel respects CSS min-width",async()=>{await z(()=>{const s=t.querySelector("#list");y(s.offsetWidth).toBeGreaterThanOrEqual(300)})})}},I={render:()=>E`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Left panel capped at 360px by CSS max-width",async()=>{await z(()=>{const s=t.querySelector("#list");y(s.offsetWidth).toBeLessThanOrEqual(360)})})}},xe=(t,e)=>{const s=t.shadowRoot.querySelector("cosmoz-resize-handle"),n={bubbles:!0,detail:{mousePosition:{x:e,y:100}}};s.dispatchEvent(new CustomEvent("resize-handle",{...n,detail:{...n.detail,phase:"start"}})),s.dispatchEvent(new CustomEvent("resize-handle",{...n,detail:{...n.detail,phase:"move"}})),s.dispatchEvent(new CustomEvent("resize-handle",{...n,detail:{...n.detail,phase:"end"}}))},j={render:()=>E(we||(we=Ut([`<cosmoz-resizable-view
                id="resizable"
                style="display:flex; width:800px; height:300px; border:1px solid #ccc;"
            >
                <div
                    id="a"
                    slot="previous"
                    style="`,` min-width:50px;"
                >
                    <h3>Panel A</h3>
                </div>
                <div
                    id="b"
                    slot="next"
                    style="`,` min-width:50px;"
                >
                    <h3>Panel B</h3>
                </div>
            </cosmoz-resizable-view>
            <button id="swap" style="margin-top:10px;">Swap slots</button>
            <script>
                document.getElementById('swap')?.addEventListener('click', () => {
                    for (const id of ['a', 'b']) {
                        const panel = document.getElementById(id);
                        panel.setAttribute(
                            'slot',
                            panel.getAttribute('slot') === 'previous' ? 'next' : 'previous',
                        );
                    }
                });
            <\/script>`])),w("#ff6b6b"),w("#4ecdc4")),async play({canvasElement:t,step:e}){const s=t.querySelector("#resizable"),n=()=>s.getBoundingClientRect().left,i=t.querySelector("#a"),o=t.querySelector("#b"),c=r=>Math.round(r.getBoundingClientRect().width);await e("Drag sets the previous panel width",async()=>{xe(s,n()+400),await z(()=>{y(c(i)).toBe(400)})}),await e("Swap slots: panel B becomes previous",async()=>{t.querySelector("#swap").click(),await z(()=>{var r,a;y((a=(r=s.shadowRoot)==null?void 0:r.querySelector('slot[name="previous"]').assignedElements()[0])==null?void 0:a.id).toBe("b")})}),await e("Drag after reassignment tracks the cursor (stale bases cleared)",async()=>{xe(s,n()+300),await z(()=>{y(c(o)).toBe(300)}),y(i.style.flexBasis).toBe("")})}};var Ee,$e,Ce;D.parameters={...D.parameters,docs:{...(Ee=D.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ce=($e=D.parameters)==null?void 0:$e.docs)==null?void 0:Ce.source}}};var Ae,Le,Be;O.parameters={...O.parameters,docs:{...(Ae=O.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Be=(Le=O.parameters)==null?void 0:Le.docs)==null?void 0:Be.source}}};var Pe,Me,Re;F.parameters={...F.parameters,docs:{...(Pe=F.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Re=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:Re.source}}};var ke,qe,Ne;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ne=(qe=H.parameters)==null?void 0:qe.docs)==null?void 0:Ne.source}}};var Te,De,Oe;I.parameters={...I.parameters,docs:{...(Te=I.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Oe=(De=I.parameters)==null?void 0:De.docs)==null?void 0:Oe.source}}};var Fe,He,Ie;j.parameters={...j.parameters,docs:{...(Fe=j.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
                <div
                    id="b"
                    slot="next"
                    style="\${panelStyle('#4ecdc4')} min-width:50px;"
                >
                    <h3>Panel B</h3>
                </div>
            </cosmoz-resizable-view>
            <button id="swap" style="margin-top:10px;">Swap slots</button>
            <script>
                document.getElementById('swap')?.addEventListener('click', () => {
                    for (const id of ['a', 'b']) {
                        const panel = document.getElementById(id);
                        panel.setAttribute(
                            'slot',
                            panel.getAttribute('slot') === 'previous' ? 'next' : 'previous',
                        );
                    }
                });
            <\/script>\`,
  async play({
    canvasElement,
    step
  }) {
    const el = canvasElement.querySelector('#resizable') as HTMLElement;
    const containerLeft = () => el.getBoundingClientRect().left;
    const panelA = canvasElement.querySelector('#a') as HTMLElement;
    const panelB = canvasElement.querySelector('#b') as HTMLElement;
    const width = (panel: HTMLElement) => Math.round(panel.getBoundingClientRect().width);
    await step('Drag sets the previous panel width', async () => {
      dragHandle(el, containerLeft() + 400);
      await waitFor(() => {
        expect(width(panelA)).toBe(400);
      });
    });
    await step('Swap slots: panel B becomes previous', async () => {
      (canvasElement.querySelector('#swap') as HTMLButtonElement).click();
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
}`,...(Ie=(He=j.parameters)==null?void 0:He.docs)==null?void 0:Ie.source}}};const Yt=["BasicDemo","VerticalDemo","MultiplePanels","ListDetailsSplit","CappedInitialSize","SlotReassignmentDemo"];export{D as BasicDemo,I as CappedInitialSize,H as ListDetailsSplit,F as MultiplePanels,j as SlotReassignmentDemo,O as VerticalDemo,Yt as __namedExportsOrder,Xt as default};
