var lt=Object.defineProperty;var ct=(t,e,s)=>e in t?lt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var h=(t,e,s)=>ct(t,typeof e!="symbol"?e+"":e,s);import{f as dt,B as Ye,E as N,x as z}from"./iframe-DzlJ9G37.js";import"./preload-helper-C1FmrZbK.js";let W,Ke=0;function pe(t){W=t}function ve(){W=null,Ke=0}function ut(){return Ke++}const J=Symbol("haunted.phase"),U=Symbol("haunted.hook"),me=Symbol("haunted.update"),fe=Symbol("haunted.commit"),B=Symbol("haunted.effects"),T=Symbol("haunted.layoutEffects"),se="haunted.context";var Se,_e,Ce;Ce=U,_e=B,Se=T;class ht{constructor(e,s){h(this,"update");h(this,"host");h(this,"virtual");h(this,Ce);h(this,_e);h(this,Se);this.update=e,this.host=s,this[U]=new Map,this[B]=[],this[T]=[]}run(e){pe(this);let s=e();return ve(),s}_runEffects(e){let s=this[e];pe(this);for(let o of s)o.call(this);ve()}runEffects(){this._runEffects(B)}runLayoutEffects(){this._runEffects(T)}teardown(){this[U].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class pt extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const vt=100,mt=Promise.resolve().then.bind(Promise.resolve());function Xe(){let t=[],e;function s(){e=null;let o=t;t=[];for(var n=0,i=o.length;n<i;n++)o[n]()}return function(o){t.push(o),e==null&&(e=mt(s))}}const ft=Xe(),ge=Xe();var $e;$e=J;const K=class K{constructor(e,s){h(this,"renderer");h(this,"host");h(this,"state");h(this,$e);h(this,"_updateQueued");h(this,"_active");h(this,"_updateCount");h(this,"_processing");this.renderer=e,this.host=s,this.state=new ht(this.update.bind(this),s),this[J]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>K.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new pt(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,ft(()=>{let e=this.handlePhase(me);ge(()=>{this.handlePhase(fe,e),ge(()=>{this.handlePhase(B),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[J]=e,e){case fe:this.commit(s),this.runEffects(T);return;case me:return this.render();case B:return this.runEffects(B)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};h(K,"maxUpdates",vt);let oe=K;const ie=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},gt=t=>t==null?void 0:t.map(e=>typeof e=="string"?ie(e):e),bt=(t,...e)=>t.flatMap((s,o)=>[s,e[o]||""]).join(""),k=bt,yt=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function zt(t){class e extends oe{constructor(i,r,a){super(i,a||r);h(this,"frag");h(this,"renderResult");this.frag=r}commit(i){this.renderResult=t(i,this.frag)}}function s(o,n,i){const r=(i||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:u={},styleSheets:v}=i||n||{},c=gt(o.styleSheets||v);class b extends r{constructor(){super();h(this,"_scheduler");if(l===!1)this._scheduler=new e(o,this);else{const d=this.attachShadow({mode:"open",...u});c&&(d.adoptedStyleSheets=c),this._scheduler=new e(o,d,this)}}static get observedAttributes(){return o.observedAttributes||a||[]}connectedCallback(){var d;this._scheduler.resume(),this._scheduler.update(),(d=this._scheduler.renderResult)==null||d.setConnected(!0)}disconnectedCallback(){var d;this._scheduler.pause(),this._scheduler.teardown(),(d=this._scheduler.renderResult)==null||d.setConnected(!1)}attributeChangedCallback(d,m,w){if(m===w)return;let q=w===""?!0:w;Reflect.set(this,yt(d),q)}}function y(g){let p=g,d=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return p},set(m){d&&p===m||(d=!0,p=m,this._scheduler&&this._scheduler.update())}})}const x=new Proxy(r.prototype,{getPrototypeOf(g){return g},set(g,p,d,m){let w;return p in g?(w=Object.getOwnPropertyDescriptor(g,p),w&&w.set?(w.set.call(m,d),!0):(Reflect.set(g,p,d,m),!0)):(typeof p=="symbol"||p[0]==="_"?w={enumerable:!0,configurable:!0,writable:!0,value:d}:w=y(d),Object.defineProperty(m,p,w),w.set&&w.set.call(m,d),!0)}});return Object.setPrototypeOf(b.prototype,x),b}return s}class P{constructor(e,s){h(this,"id");h(this,"state");this.id=e,this.state=s}}function wt(t,...e){let s=ut(),o=W[U],n=o.get(s);return n||(n=new t(s,W,...e),o.set(s,n)),n.update(...e)}function A(t){return wt.bind(null,t)}function Je(t){return A(class extends P{constructor(s,o,n,i){super(s,o);h(this,"callback");h(this,"lastValues");h(this,"values");h(this,"_teardown");t(o,this)}update(s,o){this.callback=s,this.values=o}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,o)=>this.lastValues[o]!==s)}})}function Ze(t,e){t[B].push(e)}const C=Je(Ze),xt=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Et=A(class extends P{constructor(e,s,o){super(e,s);h(this,"Context");h(this,"value");h(this,"_ranEffect");h(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Ze(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};xt(this.state.host).dispatchEvent(new CustomEvent(se,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:i}=s;this.value=n?i:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function St(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();h(this,"listeners");h(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(se,this)}disconnectedCallback(){this.removeEventListener(se,this)}handleEvent(n){const{detail:i}=n;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let i of this.listeners)i(n)}get value(){return this._value}},Consumer:t(function({render:o}){const n=Et(s);return o(n)},{useShadowDOM:!1}),defaultValue:e};return s}}const re=A(class extends P{constructor(e,s,o,n){super(e,s);h(this,"value");h(this,"values");this.value=o(),this.values=n}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,o)=>this.values[o]!==s)}}),be=(t,e)=>re(()=>t,e);function _t(t,e){t[T].push(e)}Je(_t);const et=A(class extends P{constructor(e,s,o){super(e,s);h(this,"args");this.updater=this.updater.bind(this),typeof o=="function"&&(o=o()),this.makeArgs(o)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});A(class extends P{constructor(e,s,o,n,i){super(e,s);h(this,"reducer");h(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(n):n}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const Ct=/([A-Z])/gu;A(class extends P{constructor(e,s,o,n){super(e,s);h(this,"property");h(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=o,this.eventName=o.replace(Ct,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updater(n,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],o=typeof e=="function"?e:void 0,n=o?o(s):e;return[s,n,o]}notify(e,s){const o=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(o),o}updater(e,s=!1){const[o,n,i]=this.resolve(e),r=this.notify(n,i);!s&&r.defaultPrevented||Object.is(o,n)||(this.state.host[this.property]=n)}});function $t(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function _(t){return re(()=>$t(t),[])}const tt=A(class extends P{update(){return this.state.host}});function Rt({render:t}){const e=zt(t),s=St(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt={CHILD:2},Pt=t=>(...e)=>({_$litDirective$:t,values:e});class At{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,o){this._$Ct=e,this._$AM=s,this._$Ci=o}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=(t,e)=>{var o;const s=t._$AN;if(s===void 0)return!1;for(const n of s)(o=n._$AO)==null||o.call(n,e,!1),M(n,e);return!0},Q=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},st=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),Tt(e)}};function Lt(t){this._$AN!==void 0?(Q(this),this._$AM=t,st(this)):this._$AM=t}function kt(t,e=!1,s=0){const o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(o))for(let i=s;i<o.length;i++)M(o[i],!1),Q(o[i]);else o!=null&&(M(o,!1),Q(o));else M(this,t)}const Tt=t=>{t.type==Bt.CHILD&&(t._$AP??(t._$AP=kt),t._$AQ??(t._$AQ=Lt))};class Mt extends At{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,o){super._$AT(e,s,o),st(this),this.isConnected=e._$AU}_$AO(e,s=!0){var o,n;e!==this.isConnected&&(this.isConnected=e,e?(o=this.reconnected)==null||o.call(this):(n=this.disconnected)==null||n.call(this)),s&&(M(this,e),Q(this))}setValue(e){if(dt(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:X}=Rt({render:Ye}),ot=ie(k`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`),Z=new WeakMap,$=Pt(class extends Mt{render(t){return N}update(t,[e]){var o;const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=(o=t.options)==null?void 0:o.host,this.rt(this.ct=t.element)),N}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=Z.get(e);s===void 0&&(s=new WeakMap,Z.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=Z.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Y(t,e,s){return t?e(t):s==null?void 0:s(t)}const Nt=k`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-tooltip-gap, var(--cz-spacing));
		font-family: var(--cz-font-body);
	}

	::slotted([slot='heading']) {
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
	}
`;customElements.define("cosmoz-tooltip-content",X(()=>z`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[ot,Nt]}));const ne=ie(k`
	.cosmoz-tooltip-popover {
		position: fixed;
		inset: unset;
		pointer-events: none;
		text-align: left;
		margin: calc(var(--cz-spacing) * 2);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		/* Reset popover defaults */
		border: none;
		white-space: normal;
		padding: var(--cosmoz-tooltip-padding, calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3));
		border-radius: var(--cosmoz-tooltip-border-radius, var(--cz-radius-sm));
		max-width: var(--cosmoz-tooltip-max-width, 20rem);
		box-shadow: var(--cosmoz-tooltip-box-shadow, var(--cz-shadow-lg));
		background: var(--cosmoz-tooltip-bg-color, var(--cz-color-gray-900));
		font-size: var(--cosmoz-tooltip-font-size, var(--cz-text-xs));
		font-weight: var(--cosmoz-tooltip-font-weight, 400);
		line-height: var(--cosmoz-tooltip-line-height, var(--cz-text-xs-line-height));
		color: var(--cosmoz-tooltip-text-color, var(--cz-color-white));

		cosmoz-tooltip-content strong {
			font-weight: var(
	 			--cosmoz-tooltip-heading-font-weight,
	 			var(--cz-font-weight-semibold)
	 		);

			color: var(--cosmoz-tooltip-heading-color);
		}

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		.cosmoz-tooltip-popover:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	.cosmoz-tooltip-popover:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`),nt=({root:t,delay:e,matchTarget:s,show:o,hide:n})=>{let i,r=!1,a=!1;const l=()=>{clearTimeout(i),i=void 0},u=d=>{r||(l(),i=window.setTimeout(()=>{i=void 0,o(d)},e))},v=d=>{if(d.pointerType==="touch")return;a=!1;const m=s(d);m&&u(m)},c=d=>{s(d)&&(a=d.pointerType!=="mouse",r=!0,l(),n())},b=()=>{r=!1},y=d=>{const m=s(d);m&&(d.relatedTarget instanceof Node&&m.contains(d.relatedTarget)||(l(),n()))},x=()=>{a=!1},g=d=>{const m=s(d);if(m){if(a){a=!1;return}u(m)}},p=d=>{s(d)&&(l(),n())};return t.addEventListener("pointerover",v),t.addEventListener("pointerdown",c),t.addEventListener("pointerup",b),t.addEventListener("pointerout",y),t.addEventListener("keydown",x),t.addEventListener("focusin",g),t.addEventListener("focusout",p),{dispose(){l(),t.removeEventListener("pointerover",v),t.removeEventListener("pointerdown",c),t.removeEventListener("pointerup",b),t.removeEventListener("pointerout",y),t.removeEventListener("keydown",x),t.removeEventListener("focusin",g),t.removeEventListener("focusout",p)}}},qt=(t,e,s)=>Ye(z`<cosmoz-tooltip-content>
			${Y(e,()=>z`<strong slot="heading">${e}</strong>`)}
			${Y(s,()=>z`<p slot="description">${s}</p>`)}
		</cosmoz-tooltip-content>`,t),Dt=(t,e)=>{const{for:s,heading:o,description:n,placement:i="top",delay:r=300,disabled:a=!1}=e,l=!!(o||n)&&!a;C(()=>{if(!s||!l)return;const u=t.getRootNode(),v=u.adoptedStyleSheets??[];v.includes(ne)||(u.adoptedStyleSheets=[...v,ne]);const c=document.createElement("div");c.setAttribute("popover","manual"),c.setAttribute("role","tooltip"),c.classList.add("cosmoz-tooltip-popover"),c.setAttribute("data-for",s),t.after(c),qt(c,o,n);const b=`--tooltip-anchor-${s}`,g=nt({root:u,delay:r,matchTarget:p=>{var d,m;return((m=(d=p.target).closest)==null?void 0:m.call(d,`[name="${s}"]`))??void 0},show:p=>{p.style.anchorName=b,c.style.positionAnchor=b,c.style.positionArea=i,c.showPopover()},hide:()=>c.hidePopover()});return()=>{g.dispose(),c.hidePopover(),c.remove()}},[s,o,n,i,r,l])},Ft=t=>{const[e,s]=et(!1);return C(()=>{const o=t.current;if(!o)return;const n=()=>{s(o.assignedElements().length>0)};return n(),o.addEventListener("slotchange",n),()=>o.removeEventListener("slotchange",n)},[t.current]),e},Ht=k`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	.cosmoz-tooltip-popover {
		position-anchor: --tooltip-anchor;
	}
`,Ot=t=>{const{heading:e,description:s,for:o,placement:n="top",delay:i=300,disabled:r=!1}=t,a=_(),l=Ft(a),v=!!(e||s||l)&&!r;return C(()=>{var x;if(o||!v)return;const c=t.getRootNode(),b=(x=t.shadowRoot)==null?void 0:x.querySelector(".cosmoz-tooltip-popover");if(!b)return;const y=nt({root:c,delay:i,matchTarget:g=>{const p=g.target;return p===t||t.contains(p)?t:void 0},show:()=>b.showPopover(),hide:()=>b.hidePopover()});return()=>{y.dispose(),b.hidePopover()}},[o,v,i]),Dt(t,{for:o,heading:e,description:s,placement:n,delay:i,disabled:r}),o?N:v?z`
		<slot></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${n}"
		>
			<cosmoz-tooltip-content>
				${Y(e,()=>z`<strong slot="heading">${e}</strong>`)}
				${Y(s,()=>z`<p slot="description">${s}</p>`)}
				<slot name="content" ${$(a)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:z`
			<slot></slot>
			<slot name="content" ${$(a)} hidden></slot>
		`};customElements.define("cosmoz-tooltip",X(Ot,{styleSheets:[ot,ne,Ht],observedAttributes:["heading","description","for","placement","delay","disabled"]}));const Vt=t=>{if(typeof t!="object"||t==null)return!1;const e=t;return typeof e.px=="number"&&e.px>=0&&!Number.isNaN(e.px)},ye=t=>{try{const e=JSON.parse(t);if(Vt(e))return e}catch{}},It=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const o=new Map,n=()=>{s=void 0;for(const[a,l]of o)try{localStorage.setItem(t+a,JSON.stringify(l))}catch{}o.clear()},i=(a,l)=>{o.set(a,l),s==null&&(s=setTimeout(n,100))},r=a=>{if(a.key==null||!a.key.startsWith(t)||a.newValue==null)return;const l=a.key.slice(t.length),u=ye(a.newValue);if(u==null)return;const v=e.get(l);if(v)for(const c of v)c(u)};return typeof window<"u"&&window.addEventListener("storage",r),{get(a){let l;try{l=localStorage.getItem(t+a)}catch{return}if(l!=null)return ye(l)},set(a,l){i(a,l)},subscribe(a,l){let u=e.get(a);return u||(u=new Set,e.set(a,u)),u.add(l),()=>{const v=e.get(a);v&&(v.delete(l),v.size===0&&e.delete(a))}},destroy(){typeof window<"u"&&window.removeEventListener("storage",r),s!=null&&(clearTimeout(s),n())}}},jt=(t,e,s)=>{const o=_(s);if(o.current=s,C(()=>{var r,a;if(!t||!e)return;const n=t.get(e);(r=o.current)==null||r.call(o,n);const i=(a=t.subscribe)==null?void 0:a.call(t,e,l=>{var u;return(u=o.current)==null?void 0:u.call(o,l)});return()=>{var l;i==null||i(),(l=t.destroy)==null||l.call(t)}},[t,e]),!(!t||!e))return n=>t.set(e,n)},ze=t=>{const e=t.trim();if(e==="")return e;const s=Number(e);return Number.isNaN(s)?e:`${s}px`},Gt=t=>{if(t==null||t.trim()==="")return{};const e=t.includes(",")?t.split(/,\s*/u):t.match(/(?:[^\s()]+\([^)]*\)|\([^)]*\)|[^\s]+)/gu)??[t];return{previous:ze(e[0]),next:e.length>1?ze(e[1]):void 0}},Ut=k`
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

	:host([data-resizing]) {
		cursor: col-resize;
	}
	:host([data-resizing][data-direction='vertical']) {
		cursor: row-resize;
	}
	:host([data-resizing]) .panel {
		pointer-events: none;
	}

	:host([data-single-panel]) cosmoz-resize-handle {
		display: none;
	}
`,ee=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},Wt=(t,e,s,o)=>s==="horizontal"?o?e.right-t.x:t.x-e.left:o?e.bottom-t.y:t.y-e.top,D=t=>{const e=parseFloat(t);return Number.isNaN(e)?void 0:e},Qt=(t,e)=>{const s=getComputedStyle(t),o=e==="horizontal"?D(s.minWidth)??0:D(s.minHeight)??0,n=e==="horizontal"?D(s.maxWidth)??1/0:D(s.maxHeight)??1/0;return{min:o,max:n}},we=t=>({rect:t.container.getBoundingClientRect(),bounds:Qt(t.previous,t.direction)}),Yt=(t,e,s,o,n)=>{const i=Wt(t,e,s,n);return Math.max(Math.min(i,o.max),o.min)},Kt=t=>{let e;return s=>{var r,a;const{phase:o,mousePosition:n}=s.detail;if(o==="start"){e=we(t);return}if(o!=="move"&&o!=="end")return;e||(e=we(t));const i=Yt(n,e.rect,t.direction,e.bounds,t.reversed);o==="move"?(r=t.onResize)==null||r.call(t,i):((a=t.onResizeEnd)==null||a.call(t),e=void 0)}},Xt=(t="horizontal")=>{const e=tt();return C(()=>{e.setAttribute("data-direction",t)},[t]),C(()=>{const s=(c,b)=>{e.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:c,mousePosition:b},bubbles:!0}))};let o=0,n;const i=()=>{o=0,n&&(s("move",n),n=void 0)},r=c=>{n=ee(c),o||(o=requestAnimationFrame(i))},a=c=>{o&&(cancelAnimationFrame(o),i()),e.removeAttribute("data-dragging"),s("end",ee(c)),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",a)},l=c=>{e.setAttribute("data-dragging","true"),s("start",ee(c)),document.addEventListener("mousemove",r),document.addEventListener("mouseup",a),document.addEventListener("touchmove",r,{passive:!1}),document.addEventListener("touchend",a)},u=c=>{c.preventDefault(),l(c)},v=c=>{c.preventDefault(),l(c)};return e.addEventListener("mousedown",u),e.addEventListener("touchstart",v,{passive:!1}),()=>{o&&cancelAnimationFrame(o),e.removeEventListener("mousedown",u),e.removeEventListener("touchstart",v),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",a),document.removeEventListener("touchmove",r),document.removeEventListener("touchend",a)}},[e]),null},Jt=k`
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
`,Zt=({direction:t="horizontal"})=>(Xt(t),N);customElements.define("cosmoz-resize-handle",X(Zt,{styleSheets:[Jt],observedAttributes:["direction","reversed"]}));const es=t=>getComputedStyle(t).display!=="none",xe=t=>t==null?void 0:t.assignedElements()[0],Ee=t=>(t==null?void 0:t.assignedElements().some(e=>es(e)))??!1,ts=(t,e,s,o,n)=>{const i=()=>{const l=Ee(s),u=Ee(n);e.toggleAttribute("data-hidden",!l),o.toggleAttribute("data-hidden",!u),t.toggleAttribute("data-single-panel",!(l&&u))},r=new ResizeObserver(()=>queueMicrotask(i)),a=l=>{l==null||l.assignedElements().forEach(u=>r.observe(u))};return a(s),a(n),i(),r},ss=(t,e)=>{if(e==null){t.style.flexBasis="";return}t.style.flexBasis=`${e.px}px`},te=(t,e,s,o,n)=>{const i=(r,a)=>{const{previous:l,next:u}=Gt(a??null),v=`--resizable-previous-${e}${r}`,c=`--resizable-next-${e}${r}`;l!=null?t.style.setProperty(v,l):t.style.removeProperty(v),u!=null?t.style.setProperty(c,u):t.style.removeProperty(c)};i("",s),i("-horizontal",o),i("-vertical",n)},os=({host:t,handle:e,direction:s,reversed:o,persistRef:n,prevPanelRef:i,nextPanelRef:r,prevSlotRef:a,nextSlotRef:l})=>{const u=i.current,v=r.current,c=xe(a.current),b=xe(l.current);if(!u||!v||!c||!b||!e)return;const y=Kt({container:t,previous:u,direction:s,reversed:o,onResize:p=>{u.style.flexBasis=`${p}px`},onResizeEnd:()=>{requestAnimationFrame(()=>{var m;const p=u.getBoundingClientRect(),d=s==="horizontal"?p.width:p.height;(m=n.current)==null||m.call(n,{px:d})})}}),x=p=>t.toggleAttribute("data-resizing",p.detail.phase!=="end");e.addEventListener("resize-handle",y),e.addEventListener("resize-handle",x);const g=ts(t,u,a.current,v,l.current);return()=>{e.removeEventListener("resize-handle",y),e.removeEventListener("resize-handle",x),t.removeAttribute("data-resizing"),g.disconnect()}},ns=({direction:t="horizontal",reversed:e,persist:s,handleLabel:o,initialSize:n,initialSizeHorizontal:i,initialSizeVertical:r,minSize:a,minSizeHorizontal:l,minSizeVertical:u,maxSize:v,maxSizeHorizontal:c,maxSizeVertical:b})=>{const y=tt(),x=_(),g=_(),p=_(),d=_(),m=_(),w=_(),[q,it]=et(!1),rt=s?`${s}:${t}`:void 0,ae=re(()=>s?It():void 0,[s]),le=jt(ae,rt,R=>{const L=m.current;L&&ss(L,R)}),ce=_(le);ce.current=le;const de=be(()=>{var ue,he;const R=(ue=g.current)==null?void 0:ue.assignedElements()[0],L=(he=p.current)==null?void 0:he.assignedElements()[0];R&&L&&it(!0)},[]),at=be(()=>{var R;(R=d.current)==null||R.assignedElements().forEach(L=>L.setAttribute("slot","previous"))},[]);return C(()=>{y.setAttribute("data-direction",t)},[t]),C(()=>{te(y,"basis",n,i,r),te(y,"min",a,l,u),te(y,"max",v,c,b)},[y,n,i,r,a,l,u,v,c,b]),C(()=>q?os({host:y,handle:x.current,direction:t,reversed:e===!0,persistRef:ce,prevPanelRef:m,nextPanelRef:w,prevSlotRef:g,nextSlotRef:p}):void 0,[t,e,ae,s,y,q]),z`<slot
			${$(d)}
			@slotchange=${at}
		></slot>
		<div
			class="panel"
			data-panel="previous"
			${$(m)}
			part="panel-previous"
		>
			<slot
				name="previous"
				${$(g)}
				@slotchange=${de}
			></slot>
		</div>
		${o?z`<cosmoz-tooltip
					for="resize-handle"
					delay="600"
					placement=${t==="horizontal"?"right":"bottom"}
					description=${o}
				></cosmoz-tooltip>`:N}
		<cosmoz-resize-handle
			name="resize-handle"
			direction=${t}
			?reversed=${e===!0}
			${$(x)}
		></cosmoz-resize-handle>
		<div class="panel" data-panel="next" ${$(w)} part="panel-next">
			<slot name="next" ${$(p)} @slotchange=${de}></slot>
		</div>`};customElements.define("cosmoz-resizable-view",X(ns,{styleSheets:[Ut],observedAttributes:["direction","reversed","persist","handle-label","initial-size","initial-size-horizontal","initial-size-vertical","min-size","min-size-horizontal","min-size-vertical","max-size","max-size-horizontal","max-size-vertical"]}));const{expect:f,waitFor:S}=__STORYBOOK_MODULE_TEST__,ls={title:"Components/ResizableView",tags:["autodocs"]},E=t=>`background:${t}; display:flex; align-items:center; justify-content:center; color:white;`,F={render:()=>z`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            initial-size="50%"
            handle-label="Drag to resize"
        >
            <div slot="previous" id="prev" style="${E("#ff6b6b")}">
                <h3>Left Panel</h3>
            </div>
            <div slot="next" id="next" style="${E("#4ecdc4")}">
                <h3>Right Panel</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await S(()=>{const s=t.querySelector("#prev");f(s).not.toBeNull()}),f(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered in shadow DOM between panel wrappers",async()=>{await S(()=>{var o;const s=(o=t.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle");f(s).not.toBeNull()})})}},H={render:()=>z`<cosmoz-resizable-view
            style="display:flex; flex-direction:column; width:600px; height:400px; border:1px solid #ccc;"
            direction="vertical"
            initial-size="50%"
        >
            <div slot="previous" style="${E("#ff6b6b")} padding:20px;">
                <h3>Top Panel</h3>
            </div>
            <div slot="next" style="${E("#4ecdc4")} padding:20px;">
                <h3>Bottom Panel</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{const s=t.querySelector("cosmoz-resizable-view");await S(()=>{f(s.getAttribute("data-direction")).toBe("vertical")}),await S(()=>{var n;const o=(n=s.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");f(o==null?void 0:o.getAttribute("data-direction")).toBe("vertical")})})}},O={render:()=>z`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            initial-size="50%"
        >
            <div slot="previous" style="${E("#ff6b6b")}">
                <h3>Left Panel</h3>
            </div>
            <cosmoz-resizable-view
                slot="next"
                direction="vertical"
                style="display:flex;"
                initial-size="50%"
            >
                <div slot="previous" style="${E("#ffa726")} padding:10px;">
                    <h3>Top Panel</h3>
                </div>
                <div slot="next" style="${E("#45b7d1")} padding:10px;">
                    <h3>Bottom Panel</h3>
                </div>
            </cosmoz-resizable-view>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await S(()=>{var n,i;const s=(n=t.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");f(s).not.toBeNull();const o=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");f(o).not.toBeNull(),f((i=o==null?void 0:o.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle")).not.toBeNull()})})}},V={render:()=>z`<cosmoz-resizable-view
            style="display:flex; width:800px; height:300px; border:1px solid #ccc;"
            initial-size="25%"
            min-size="300"
        >
            <div id="list" slot="previous" style="${E("#ff6b6b")}">
                <h3>List (25% or 300px min)</h3>
            </div>
            <div id="details" slot="next" style="${E("#4ecdc4")}">
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Previous panel respects min-size",async()=>{await S(()=>{const o=t.querySelector("cosmoz-resizable-view").shadowRoot.querySelector(".panel[data-panel='previous']");f(o.offsetWidth).toBeGreaterThanOrEqual(300)})})}},I={render:()=>z`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px;"
            reversed
            initial-size="50%"
        >
            <div slot="previous" id="prev" style="${E("#ff6b6b")}">
                <h3>Previous (visually right)</h3>
            </div>
            <div slot="next" id="next" style="${E("#4ecdc4")}">
                <h3>Next (visually left)</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){const s=()=>t.querySelector("cosmoz-resizable-view"),o=()=>s().shadowRoot.querySelector(".panel[data-panel='previous']"),n=()=>s().shadowRoot.querySelector("cosmoz-resize-handle"),i=async(r,a)=>{const l=s().getBoundingClientRect();await S(()=>{n().dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:"start",mousePosition:{x:r,y:l.top}},bubbles:!0})),n().dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:"move",mousePosition:{x:r,y:l.top}},bubbles:!0})),f(o().getBoundingClientRect().width).toBe(a)})};await e("Renders with reversed visual order",async()=>{await S(()=>{const r=s();f(r.hasAttribute("reversed")).toBe(!0),f(r.reversed).toBe(!0);const a=o();f(a.getBoundingClientRect().right).toBe(r.getBoundingClientRect().right)})}),await e("Dragging resizes the previous panel from the right edge",async()=>{await i(s().getBoundingClientRect().left+150,450)}),await e("Removing reversed restores left-edge dragging",async()=>{const r=s();r.removeAttribute("reversed"),await S(()=>{f(getComputedStyle(r).flexDirection).toBe("row"),f(r.reversed).toBeFalsy(),f(o().getBoundingClientRect().left).toBe(r.getBoundingClientRect().left)}),await i(s().getBoundingClientRect().left+200,200)}),await e("Re-adding reversed resumes right-edge dragging",async()=>{const r=s();r.setAttribute("reversed",""),await S(()=>{f(getComputedStyle(r).flexDirection).toBe("row-reverse"),f(r.reversed).toBe(!0),f(o().getBoundingClientRect().right).toBe(r.getBoundingClientRect().right)}),await i(s().getBoundingClientRect().left+100,500)})}},j={render:()=>z`<cosmoz-resizable-view
            style="display:flex; width:1000px; height:300px; border:1px solid #ccc;"
            initial-size="360px"
            max-size="360"
        >
            <div id="list" slot="previous" style="${E("#ff6b6b")}">
                <h3>List (capped at 360px)</h3>
            </div>
            <div id="details" slot="next" style="${E("#4ecdc4")}">
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Previous panel capped at 360px",async()=>{const s=t.querySelector("cosmoz-resizable-view"),o=s.shadowRoot.querySelector("cosmoz-resize-handle"),n=o.getBoundingClientRect(),i=(r,a,l)=>o.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:r,mousePosition:{x:a,y:l}},bubbles:!0}));i("start",n.left,n.top),i("move",900,n.top),await S(()=>{const r=s.shadowRoot.querySelector(".panel[data-panel='previous']");f(r.offsetWidth).toBeLessThanOrEqual(360)})})}},G={render:()=>z`<cosmoz-resize-handle
            style="height: 160px; min-height: 160px;
            --cz-color-border-primary: rgb(120 125 135);
            --cz-color-border-brand: rgb(115 94 177);
            --cz-accent-color: rgb(200 0 255);"
        ></cosmoz-resize-handle>`,async play({canvasElement:t}){const e=t.querySelector("cosmoz-resize-handle");await S(()=>f(e.hasAttribute("data-direction")).toBe(!0)),e.dispatchEvent(new MouseEvent("mousedown",{bubbles:!0})),f(getComputedStyle(e,"::before").backgroundColor).toBe("rgb(115, 94, 177)"),f(getComputedStyle(e,"::before").boxShadow).toBe("none"),f(e.getBoundingClientRect().width).toBe(1),document.dispatchEvent(new MouseEvent("mouseup")),f(e.hasAttribute("data-dragging")).toBe(!1)}};var Re,Be,Pe;F.parameters={...F.parameters,docs:{...(Re=F.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Pe=(Be=F.parameters)==null?void 0:Be.docs)==null?void 0:Pe.source}}};var Ae,Le,ke;H.parameters={...H.parameters,docs:{...(Ae=H.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(ke=(Le=H.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var Te,Me,Ne;O.parameters={...O.parameters,docs:{...(Te=O.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ne=(Me=O.parameters)==null?void 0:Me.docs)==null?void 0:Ne.source}}};var qe,De,Fe;V.parameters={...V.parameters,docs:{...(qe=V.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Fe=(De=V.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};var He,Oe,Ve;I.parameters={...I.parameters,docs:{...(He=I.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ve=(Oe=I.parameters)==null?void 0:Oe.docs)==null?void 0:Ve.source}}};var Ie,je,Ge;j.parameters={...j.parameters,docs:{...(Ie=j.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ge=(je=j.parameters)==null?void 0:je.docs)==null?void 0:Ge.source}}};var Ue,We,Qe;G.parameters={...G.parameters,docs:{...(Ue=G.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Qe=(We=G.parameters)==null?void 0:We.docs)==null?void 0:Qe.source}}};const cs=["BasicDemo","VerticalDemo","MultiplePanels","ListDetailsSplit","ReversedDemo","CappedInitialSize","ThinDragFeedback"];export{F as BasicDemo,j as CappedInitialSize,V as ListDetailsSplit,O as MultiplePanels,I as ReversedDemo,G as ThinDragFeedback,H as VerticalDemo,cs as __namedExportsOrder,ls as default};
