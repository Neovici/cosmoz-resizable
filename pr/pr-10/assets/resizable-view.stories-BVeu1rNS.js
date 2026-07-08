var ke=Object.defineProperty;var Ne=(t,e,s)=>e in t?ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var r=(t,e,s)=>Ne(t,typeof e!="symbol"?e+"":e,s);import{f as Be,B as Te,E as V,x as C}from"./iframe-9M-Y91vA.js";import"./preload-helper-C1FmrZbK.js";let O,Se=0;function J(t){O=t}function K(){O=null,Se=0}function qe(){return Se++}const I=Symbol("haunted.phase"),D=Symbol("haunted.hook"),Z=Symbol("haunted.update"),ee=Symbol("haunted.commit"),_=Symbol("haunted.effects"),A=Symbol("haunted.layoutEffects"),Q="haunted.context";var ie,re,ae;ae=D,re=_,ie=A;class De{constructor(e,s){r(this,"update");r(this,"host");r(this,"virtual");r(this,ae);r(this,re);r(this,ie);this.update=e,this.host=s,this[D]=new Map,this[_]=[],this[A]=[]}run(e){J(this);let s=e();return K(),s}_runEffects(e){let s=this[e];J(this);for(let n of s)n.call(this);K()}runEffects(){this._runEffects(_)}runLayoutEffects(){this._runEffects(A)}teardown(){this[D].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class Oe extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const Fe=100,He=Promise.resolve().then.bind(Promise.resolve());function Ee(){let t=[],e;function s(){e=null;let n=t;t=[];for(var o=0,i=n.length;o<i;o++)n[o]()}return function(n){t.push(n),e==null&&(e=He(s))}}const Ie=Ee(),te=Ee();var ce;ce=I;const H=class H{constructor(e,s){r(this,"renderer");r(this,"host");r(this,"state");r(this,ce);r(this,"_updateQueued");r(this,"_active");r(this,"_updateCount");r(this,"_processing");this.renderer=e,this.host=s,this.state=new De(this.update.bind(this),s),this[I]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>H.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new Oe(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,Ie(()=>{let e=this.handlePhase(Z);te(()=>{this.handlePhase(ee,e),te(()=>{this.handlePhase(_),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[I]=e,e){case ee:this.commit(s),this.runEffects(A);return;case Z:return this.render();case _:return this.runEffects(_)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};r(H,"maxUpdates",Fe);let X=H;const Ge=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},je=t=>t==null?void 0:t.map(e=>typeof e=="string"?Ge(e):e),We=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),$e=We,Ue=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function Ve(t){class e extends X{constructor(i,l,a){super(i,a||l);r(this,"frag");r(this,"renderResult");this.frag=l}commit(i){this.renderResult=t(i,this.frag)}}function s(n,o,i){const l=(i||o||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:c=!0,shadowRootInit:h={},styleSheets:p}=i||o||{},d=je(n.styleSheets||p);class v extends l{constructor(){super();r(this,"_scheduler");if(c===!1)this._scheduler=new e(n,this);else{const u=this.attachShadow({mode:"open",...h});d&&(u.adoptedStyleSheets=d),this._scheduler=new e(n,u,this)}}static get observedAttributes(){return n.observedAttributes||a||[]}connectedCallback(){var u;this._scheduler.resume(),this._scheduler.update(),(u=this._scheduler.renderResult)==null||u.setConnected(!0)}disconnectedCallback(){var u;this._scheduler.pause(),this._scheduler.teardown(),(u=this._scheduler.renderResult)==null||u.setConnected(!1)}attributeChangedCallback(u,x,b){if(x===b)return;let Re=b===""?!0:b;Reflect.set(this,Ue(u),Re)}}function g(f){let m=f,u=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(x){u&&m===x||(u=!0,m=x,this._scheduler&&this._scheduler.update())}})}const z=new Proxy(l.prototype,{getPrototypeOf(f){return f},set(f,m,u,x){let b;return m in f?(b=Object.getOwnPropertyDescriptor(f,m),b&&b.set?(b.set.call(x,u),!0):(Reflect.set(f,m,u,x),!0)):(typeof m=="symbol"||m[0]==="_"?b={enumerable:!0,configurable:!0,writable:!0,value:u}:b=g(u),Object.defineProperty(x,m,b),b.set&&b.set.call(x,u),!0)}});return Object.setPrototypeOf(v.prototype,z),v}return s}class E{constructor(e,s){r(this,"id");r(this,"state");this.id=e,this.state=s}}function Qe(t,...e){let s=qe(),n=O[D],o=n.get(s);return o||(o=new t(s,O,...e),n.set(s,o)),o.update(...e)}function $(t){return Qe.bind(null,t)}function Ce(t){return $(class extends E{constructor(s,n,o,i){super(s,n);r(this,"callback");r(this,"lastValues");r(this,"values");r(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function Le(t,e){t[_].push(e)}const M=Ce(Le),Xe=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Ye=$(class extends E{constructor(e,s,n){super(e,s);r(this,"Context");r(this,"value");r(this,"_ranEffect");r(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Le(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};Xe(this.state.host).dispatchEvent(new CustomEvent(Q,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:o=null,value:i}=s;this.value=o?i:e.defaultValue,this._unsubscribe=o}teardown(){this._unsubscribe&&this._unsubscribe()}});function Je(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();r(this,"listeners");r(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(Q,this)}disconnectedCallback(){this.removeEventListener(Q,this)}handleEvent(o){const{detail:i}=o;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),o.stopPropagation())}unsubscribe(o){this.listeners.delete(o)}set value(o){this._value=o;for(let i of this.listeners)i(o)}get value(){return this._value}},Consumer:t(function({render:n}){const o=Ye(s);return n(o)},{useShadowDOM:!1}),defaultValue:e};return s}}const Y=$(class extends E{constructor(e,s,n,o){super(e,s);r(this,"value");r(this,"values");this.value=n(),this.values=o}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}}),Ke=(t,e)=>Y(()=>t,e);function Ze(t,e){t[A].push(e)}Ce(Ze);const et=$(class extends E{constructor(e,s,n){super(e,s);r(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});$(class extends E{constructor(e,s,n,o,i){super(e,s);r(this,"reducer");r(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(o):o}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const tt=/([A-Z])/gu;$(class extends E{constructor(e,s,n,o){super(e,s);r(this,"property");r(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(tt,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof o=="function"&&(o=o()),o!=null&&this.updater(o,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],n=typeof e=="function"?e:void 0,o=n?n(s):e;return[s,o,n]}notify(e,s){const n=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,s=!1){const[n,o,i]=this.resolve(e),l=this.notify(o,i);!s&&l.defaultPrevented||Object.is(n,o)||(this.state.host[this.property]=o)}});function st(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function L(t){return Y(()=>st(t),[])}const Ae=$(class extends E{update(){return this.state.host}});function nt({render:t}){const e=Ve(t),s=Je(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot={CHILD:2},it=t=>(...e)=>({_$litDirective$:t,values:e});class rt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=(t,e)=>{var n;const s=t._$AN;if(s===void 0)return!1;for(const o of s)(n=o._$AO)==null||n.call(o,e,!1),P(o,e);return!0},F=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},Pe=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),lt(e)}};function at(t){this._$AN!==void 0?(F(this),this._$AM=t,Pe(this)):this._$AM=t}function ct(t,e=!1,s=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let i=s;i<n.length;i++)P(n[i],!1),F(n[i]);else n!=null&&(P(n,!1),F(n));else P(this,t)}const lt=t=>{t.type==ot.CHILD&&(t._$AP??(t._$AP=ct),t._$AQ??(t._$AQ=at))};class ut extends rt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),Pe(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,o;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),s&&(P(this,e),F(this))}setValue(e){if(Be(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:Me}=nt({render:Te}),G=new WeakMap,j=it(class extends ut{render(t){return V}update(t,[e]){var n;const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=(n=t.options)==null?void 0:n.host,this.rt(this.ct=t.element)),V}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=G.get(e);s===void 0&&(s=new WeakMap,G.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=G.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),dt=t=>{if(typeof t!="object"||t==null)return!1;const e=t;return typeof e.px=="number"&&e.px>=0&&!Number.isNaN(e.px)},se=t=>{try{const e=JSON.parse(t);if(dt(e))return e}catch{}},ht=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const n=new Map,o=()=>{s=void 0;for(const[a,c]of n)try{localStorage.setItem(t+a,JSON.stringify(c))}catch{}n.clear()},i=(a,c)=>{n.set(a,c),s==null&&(s=setTimeout(o,100))},l=a=>{if(a.key==null||!a.key.startsWith(t)||a.newValue==null)return;const c=a.key.slice(t.length),h=se(a.newValue);if(h==null)return;const p=e.get(c);if(p)for(const d of p)d(h)};return typeof window<"u"&&window.addEventListener("storage",l),{get(a){let c;try{c=localStorage.getItem(t+a)}catch{return}if(c!=null)return se(c)},set(a,c){i(a,c)},subscribe(a,c){let h=e.get(a);return h||(h=new Set,e.set(a,h)),h.add(c),()=>{const p=e.get(a);p&&(p.delete(c),p.size===0&&e.delete(a))}},destroy(){typeof window<"u"&&window.removeEventListener("storage",l),s!=null&&(clearTimeout(s),o())}}},pt=(t,e,s)=>{const n=L(s);if(n.current=s,M(()=>{var l,a;if(!t||!e)return;const o=t.get(e);o!=null&&((l=n.current)==null||l.call(n,o));const i=(a=t.subscribe)==null?void 0:a.call(t,e,c=>{var h;return(h=n.current)==null?void 0:h.call(n,c)});return()=>{var c;i==null||i(),(c=t.destroy)==null||c.call(t)}},[t,e]),!(!t||!e))return o=>t.set(e,o)},ft=$e`
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
		min-width: 0;
		min-height: 0;
		overflow: auto;
	}

	::slotted([slot='next']) {
		flex-grow: 1;
		flex-shrink: 1;
		flex-basis: 0;
		min-width: 0;
		min-height: 0;
		overflow: auto;
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
`,W=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},vt=(t,e,s)=>s==="horizontal"?t.x-e.left:t.y-e.top,R=t=>{const e=parseFloat(t);return Number.isNaN(e)?void 0:e},mt=(t,e)=>{const s=getComputedStyle(t);return e==="horizontal"?{min:R(s.minWidth)??0,max:R(s.maxWidth)??1/0}:{min:R(s.minHeight)??0,max:R(s.maxHeight)??1/0}},ne=t=>({rect:t.container.getBoundingClientRect(),bounds:mt(t.previous,t.direction)}),bt=(t,e,s,n)=>Math.max(n.min,Math.min(vt(t,e,s),n.max)),xt=t=>{let e;return s=>{var l,a;const{phase:n,mousePosition:o}=s.detail;if(n==="start"){e=ne(t);return}if(n!=="move"&&n!=="end")return;e||(e=ne(t));const i=bt(o,e.rect,t.direction,e.bounds);n==="move"?(l=t.onResize)==null||l.call(t,i):((a=t.onResizeEnd)==null||a.call(t,i),e=void 0)}},yt=(t="horizontal")=>{const e=Ae();return M(()=>{e.setAttribute("data-direction",t)},[t]),M(()=>{const s=(d,v)=>{e.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:d,mousePosition:v},bubbles:!0}))};let n=0,o;const i=()=>{n=0,o&&(s("move",o),o=void 0)},l=d=>{o=W(d),n||(n=requestAnimationFrame(i))},a=d=>{n&&(cancelAnimationFrame(n),i()),e.removeAttribute("data-dragging"),s("end",W(d)),document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",l),document.removeEventListener("touchend",a)},c=d=>{e.setAttribute("data-dragging","true"),s("start",W(d)),document.addEventListener("mousemove",l),document.addEventListener("mouseup",a),document.addEventListener("touchmove",l,{passive:!1}),document.addEventListener("touchend",a)},h=d=>{d.preventDefault(),c(d)},p=d=>{d.preventDefault(),c(d)};return e.addEventListener("mousedown",h),e.addEventListener("touchstart",p,{passive:!1}),()=>{n&&cancelAnimationFrame(n),e.removeEventListener("mousedown",h),e.removeEventListener("touchstart",p),document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",l),document.removeEventListener("touchend",a)}},[e]),null},wt=$e`
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
`,gt=({direction:t="horizontal"})=>(yt(t),V);customElements.define("cosmoz-resize-handle",Me(gt,{styleSheets:[wt],observedAttributes:["direction"]}));const oe=t=>{const{width:e,height:s}=t.getBoundingClientRect();return e>0&&s>0},U=t=>t==null?void 0:t.assignedElements()[0],zt=(t,e,s)=>{const n=()=>{const i=oe(e)&&oe(s);t.toggleAttribute("data-single-panel",!i)},o=new ResizeObserver(()=>queueMicrotask(n));return o.observe(e),o.observe(s),n(),o},_t=(t,e)=>{e!=null&&(t.style.flexBasis=`${e.px}px`)},St=({direction:t="horizontal",persist:e})=>{const s=Ae(),n=L(),o=L(),i=L(),[l,a]=et(!1),c=Y(()=>e?ht():void 0,[e]),h=pt(c,e,v=>{const g=U(o.current);g&&_t(g,v)}),p=L(h);p.current=h;const d=Ke(()=>{var z,f;const v=(z=o.current)==null?void 0:z.assignedElements()[0],g=(f=i.current)==null?void 0:f.assignedElements()[0];v&&g&&a(!0)},[]);return M(()=>{s.setAttribute("data-direction",t)},[t]),M(()=>{if(!l)return;const v=U(o.current),g=U(i.current),z=n.current;if(!v||!g||!z)return;const f=xt({container:s,previous:v,direction:t,onResize:u=>{v.style.flexBasis=`${u}px`},onResizeEnd:u=>{var x;(x=p.current)==null||x.call(p,{px:u})}});z.addEventListener("resize-handle",f);const m=zt(s,v,g);return()=>{z.removeEventListener("resize-handle",f),m.disconnect()}},[t,c,e,s,l]),C`<slot
			name="previous"
			${j(o)}
			@slotchange=${d}
		></slot
		><cosmoz-resize-handle
			direction=${t}
			${j(n)}
		></cosmoz-resize-handle
		><slot name="next" ${j(i)} @slotchange=${d}></slot>`};customElements.define("cosmoz-resizable-view",Me(St,{styleSheets:[ft],observedAttributes:["direction","persist"]}));const{expect:w,waitFor:S}=__STORYBOOK_MODULE_TEST__,Lt={title:"Components/ResizableView",tags:["autodocs"]},y=t=>`background:${t}; display:flex; align-items:center; justify-content:center; color:white; overflow:auto;`,k={render:()=>C`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await S(()=>{const s=t.querySelector("#prev");w(s).not.toBeNull()}),w(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered in shadow DOM between named slots",async()=>{await S(()=>{var n;const s=(n=t.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");w(s).not.toBeNull()})})}},N={render:()=>C`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{const s=t.querySelector("cosmoz-resizable-view");await S(()=>{w(s.getAttribute("data-direction")).toBe("vertical")}),await S(()=>{var o;const n=(o=s.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle");w(n==null?void 0:n.getAttribute("data-direction")).toBe("vertical")})})}},B={render:()=>C`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await S(()=>{var o,i;const s=(o=t.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle");w(s).not.toBeNull();const n=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");w(n).not.toBeNull(),w((i=n==null?void 0:n.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle")).not.toBeNull()})})}},T={render:()=>C`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Left panel respects CSS min-width",async()=>{await S(()=>{const s=t.querySelector("#list");w(s.offsetWidth).toBeGreaterThanOrEqual(300)})})}},q={render:()=>C`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Left panel capped at 360px by CSS max-width",async()=>{await S(()=>{const s=t.querySelector("#list");w(s.offsetWidth).toBeLessThanOrEqual(360)})})}};var le,ue,de;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var he,pe,fe;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(fe=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var ve,me,be;B.parameters={...B.parameters,docs:{...(ve=B.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(be=(me=B.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var xe,ye,we;T.parameters={...T.parameters,docs:{...(xe=T.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(we=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var ge,ze,_e;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(_e=(ze=q.parameters)==null?void 0:ze.docs)==null?void 0:_e.source}}};const At=["BasicDemo","VerticalDemo","MultiplePanels","ListDetailsSplit","CappedInitialSize"];export{k as BasicDemo,q as CappedInitialSize,T as ListDetailsSplit,B as MultiplePanels,N as VerticalDemo,At as __namedExportsOrder,Lt as default};
