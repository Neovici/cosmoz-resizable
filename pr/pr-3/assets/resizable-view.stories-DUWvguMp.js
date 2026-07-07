var Xe=Object.defineProperty;var Ye=(t,e,s)=>e in t?Xe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var c=(t,e,s)=>Ye(t,typeof e!="symbol"?e+"":e,s);import{f as Ke,B as Ze,E as te,x as A}from"./iframe-skzMEBam.js";import"./preload-helper-C1FmrZbK.js";let G,Ne=0;function ce(t){G=t}function le(){G=null,Ne=0}function Je(){return Ne++}const W=Symbol("haunted.phase"),I=Symbol("haunted.hook"),ue=Symbol("haunted.update"),de=Symbol("haunted.commit"),_=Symbol("haunted.effects"),L=Symbol("haunted.layoutEffects"),se="haunted.context";var ve,be,ye;ye=I,be=_,ve=L;class et{constructor(e,s){c(this,"update");c(this,"host");c(this,"virtual");c(this,ye);c(this,be);c(this,ve);this.update=e,this.host=s,this[I]=new Map,this[_]=[],this[L]=[]}run(e){ce(this);let s=e();return le(),s}_runEffects(e){let s=this[e];ce(this);for(let n of s)n.call(this);le()}runEffects(){this._runEffects(_)}runLayoutEffects(){this._runEffects(L)}teardown(){this[I].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class tt extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const st=100,nt=Promise.resolve().then.bind(Promise.resolve());function je(){let t=[],e;function s(){e=null;let n=t;t=[];for(var i=0,r=n.length;i<r;i++)n[i]()}return function(n){t.push(n),e==null&&(e=nt(s))}}const it=je(),he=je();var xe;xe=W;const Q=class Q{constructor(e,s){c(this,"renderer");c(this,"host");c(this,"state");c(this,xe);c(this,"_updateQueued");c(this,"_active");c(this,"_updateCount");c(this,"_processing");this.renderer=e,this.host=s,this.state=new et(this.update.bind(this),s),this[W]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>Q.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new tt(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,it(()=>{let e=this.handlePhase(ue);he(()=>{this.handlePhase(de,e),he(()=>{this.handlePhase(_),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[W]=e,e){case de:this.commit(s),this.runEffects(L);return;case ue:return this.render();case _:return this.runEffects(_)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};c(Q,"maxUpdates",st);let ne=Q;const rt=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},ot=t=>t==null?void 0:t.map(e=>typeof e=="string"?rt(e):e),at=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),Te=at,ct=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function lt(t){class e extends ne{constructor(r,l,a){super(r,a||l);c(this,"frag");c(this,"renderResult");this.frag=l}commit(r){this.renderResult=t(r,this.frag)}}function s(n,i,r){const l=(r||i||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:d={},styleSheets:m}=r||i||{},M=ot(n.styleSheets||m);class w extends l{constructor(){super();c(this,"_scheduler");if(o===!1)this._scheduler=new e(n,this);else{const u=this.attachShadow({mode:"open",...d});M&&(u.adoptedStyleSheets=M),this._scheduler=new e(n,u,this)}}static get observedAttributes(){return n.observedAttributes||a||[]}connectedCallback(){var u;this._scheduler.resume(),this._scheduler.update(),(u=this._scheduler.renderResult)==null||u.setConnected(!0)}disconnectedCallback(){var u;this._scheduler.pause(),this._scheduler.teardown(),(u=this._scheduler.renderResult)==null||u.setConnected(!1)}attributeChangedCallback(u,p,f){if(p===f)return;let v=f===""?!0:f;Reflect.set(this,ct(u),v)}}function B(b){let h=b,u=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return h},set(p){u&&h===p||(u=!0,h=p,this._scheduler&&this._scheduler.update())}})}const $=new Proxy(l.prototype,{getPrototypeOf(b){return b},set(b,h,u,p){let f;return h in b?(f=Object.getOwnPropertyDescriptor(b,h),f&&f.set?(f.set.call(p,u),!0):(Reflect.set(b,h,u,p),!0)):(typeof h=="symbol"||h[0]==="_"?f={enumerable:!0,configurable:!0,writable:!0,value:u}:f=B(u),Object.defineProperty(p,h,f),f.set&&f.set.call(p,u),!0)}});return Object.setPrototypeOf(w.prototype,$),w}return s}class E{constructor(e,s){c(this,"id");c(this,"state");this.id=e,this.state=s}}function ut(t,...e){let s=Je(),n=G[I],i=n.get(s);return i||(i=new t(s,G,...e),n.set(s,i)),i.update(...e)}function S(t){return ut.bind(null,t)}function qe(t){return S(class extends E{constructor(s,n,i,r){super(s,n);c(this,"callback");c(this,"lastValues");c(this,"values");c(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function De(t,e){t[_].push(e)}const k=qe(De),dt=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,ht=S(class extends E{constructor(e,s,n){super(e,s);c(this,"Context");c(this,"value");c(this,"_ranEffect");c(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,De(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};dt(this.state.host).dispatchEvent(new CustomEvent(se,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:r}=s;this.value=i?r:e.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function ft(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();c(this,"listeners");c(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(se,this)}disconnectedCallback(){this.removeEventListener(se,this)}handleEvent(i){const{detail:r}=i;r.Context===s&&(r.value=this.value,r.unsubscribe=this.unsubscribe.bind(this,r.callback),this.listeners.add(r.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let r of this.listeners)r(i)}get value(){return this._value}},Consumer:t(function({render:n}){const i=ht(s);return n(i)},{useShadowDOM:!1}),defaultValue:e};return s}}const V=S(class extends E{constructor(e,s,n,i){super(e,s);c(this,"value");c(this,"values");this.value=n(),this.values=i}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}}),pt=(t,e)=>V(()=>t,e);function mt(t,e){t[L].push(e)}qe(mt);const vt=S(class extends E{constructor(e,s,n){super(e,s);c(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});S(class extends E{constructor(e,s,n,i,r){super(e,s);c(this,"reducer");c(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=r!==void 0?r(i):i}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const bt=/([A-Z])/gu;S(class extends E{constructor(e,s,n,i){super(e,s);c(this,"property");c(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(bt,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof i=="function"&&(i=i()),i!=null&&this.updater(i,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],n=typeof e=="function"?e:void 0,i=n?n(s):e;return[s,i,n]}notify(e,s){const n=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,s=!1){const[n,i,r]=this.resolve(e),l=this.notify(i,r);!s&&l.defaultPrevented||Object.is(n,i)||(this.state.host[this.property]=i)}});function yt(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function C(t){return V(()=>yt(t),[])}const Fe=S(class extends E{update(){return this.state.host}});function xt({render:t}){const e=lt(t),s=ft(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wt={CHILD:2},gt=t=>(...e)=>({_$litDirective$:t,values:e});class zt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=(t,e)=>{var n;const s=t._$AN;if(s===void 0)return!1;for(const i of s)(n=i._$AO)==null||n.call(i,e,!1),P(i,e);return!0},U=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},He=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),St(e)}};function _t(t){this._$AN!==void 0?(U(this),this._$AM=t,He(this)):this._$AM=t}function Et(t,e=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let r=s;r<n.length;r++)P(n[r],!1),U(n[r]);else n!=null&&(P(n,!1),U(n));else P(this,t)}const St=t=>{t.type==wt.CHILD&&(t._$AP??(t._$AP=Et),t._$AQ??(t._$AQ=_t))};class Mt extends zt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),He(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,i;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),s&&(P(this,e),U(this))}setValue(e){if(Ke(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:Oe}=xt({render:Ze}),X=new WeakMap,Y=gt(class extends Mt{render(t){return te}update(t,[e]){var n;const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=(n=t.options)==null?void 0:n.host,this.rt(this.ct=t.element)),te}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=X.get(e);s===void 0&&(s=new WeakMap,X.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=X.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),fe=t=>typeof t=="number"&&!Number.isNaN(t)&&t>=0&&t<=1?t:void 0,$t=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const n=new Map,i=()=>{s=void 0;for(const[a,o]of n)try{localStorage.setItem(t+a,String(o))}catch{}n.clear()},r=(a,o)=>{n.set(a,o),s===void 0&&(s=setTimeout(i,100))},l=a=>{if(a.key===null||!a.key.startsWith(t)||a.newValue===null)return;const o=a.key.slice(t.length),d=fe(Number(a.newValue));if(d===void 0)return;const m=e.get(o);if(m)for(const M of m)M(d)};return typeof window<"u"&&window.addEventListener("storage",l),{get(a){let o;try{o=localStorage.getItem(t+a)}catch{return}if(o!==null)return fe(Number(o))},set(a,o){r(a,o)},subscribe(a,o){let d=e.get(a);return d||(d=new Set,e.set(a,d)),d.add(o),()=>{const m=e.get(a);m&&(m.delete(o),m.size===0&&e.delete(a))}},destroy(){typeof window<"u"&&window.removeEventListener("storage",l),s!==void 0&&(clearTimeout(s),i())}}},At=(t,e,s)=>{const n=C(s);if(n.current=s,k(()=>{var l,a;if(!t||!e)return;const i=t.get(e);i!==void 0&&((l=n.current)==null||l.call(n,i));const r=(a=t.subscribe)==null?void 0:a.call(t,e,o=>{var d;return(d=n.current)==null?void 0:d.call(n,o)});return()=>{var o;r==null||r(),(o=t.destroy)==null||o.call(t)}},[t,e]),!(!t||!e))return i=>t.set(e,i)},Ct=Te`
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

	::slotted(*) {
		flex: 1 1 0;
		min-width: 0;
		min-height: 0;
		overflow: auto;
	}

	:host([data-direction='vertical']) ::slotted(*) {
		min-width: auto;
	}

	cosmoz-resize-handle {
		flex: 0 0 auto;
	}
`,Lt=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},R=/^(\d+(?:\.\d+)?)%$/u,Ie=/^(\d+(?:\.\d+)?)px$/u,Ge=/^(\d+(?:\.\d+)?)vw$/u,Ve=/^(\d+(?:\.\d+)?)vh$/u,ie=t=>{const e=t.match(Ge);if(e)return Number(e[1])/100*window.innerWidth;const s=t.match(Ve);if(s)return Number(s[1])/100*window.innerHeight;const n=t.match(Ie);if(n)return Number(n[1])},pe=t=>{if(typeof t=="number")return t;const e=t.match(R);return e?Number(e[1])/100:void 0},Pt=t=>typeof t=="number"?t:ie(t),kt=(t,e=!1)=>{if(Array.isArray(t))return{ratio:pe(t[0]),absolute:Pt(t[1])};if(typeof t=="number")return e?{ratio:t}:{absolute:t};const s=pe(t);return s!==void 0?{ratio:s}:{absolute:ie(t)}},Rt=(t,e,s)=>{const{ratio:n,absolute:i}=t,r=n!==void 0?n*e:void 0;return r!==void 0&&i!==void 0?s?Math.max(r,i):Math.min(r,i):r??i},K=(t,e,s,n=!1)=>{if(t===void 0)return;const i=kt(t,n);return Rt(i,e,s)},Bt=(t,e)=>typeof t=="string"?Ie.test(t)||Ge.test(t)||Ve.test(t):typeof t=="number"&&(e?t>1:!0),Nt=t=>typeof t=="number"&&t>=0&&t<=1||typeof t=="string"&&R.test(t),jt=(t,e=!1)=>{if(!Array.isArray(t))return!1;const[s,n]=t;return Array.isArray(s)||Array.isArray(n)?!0:!(Nt(s)&&Bt(n,e))},me=(t,e,s,n=!1)=>{if(t===void 0)return[void 0,void 0];if(jt(t,n)){const[i,r]=t;return[K(i,e,s,n),K(r,e,s,n)]}return[K(t,e,s,n),void 0]},Tt=(t,e,s)=>{const[n,i]=me(t,s,!0),[r,l]=me(e,s,!1);return{prevMin:n,prevMax:r,nextMin:i,nextMax:l}},Z=(t,e,s,n)=>{const i=n>0?s/n:0,r=1-i;return t.style.flexBasis=`${i*100}%`,e.style.flexBasis=`${r*100}%`,{ratios:[i,r]}},qt=t=>{var s;if(Array.isArray(t)){const n=t[0];return typeof n=="number"?n:Number(((s=n.match(R))==null?void 0:s[1])??50)/100}if(typeof t=="number")return t;const e=t.match(R);return e?Number(e[1])/100:.5},Dt=t=>typeof t=="number"?t:ie(t)??0,Ft=(t,e,s)=>{var a;const n=t[0];let i;if(Array.isArray(n)){const[o,d]=n,m=typeof o=="number"?o:Number(((a=o.match(R))==null?void 0:a[1])??50)/100;i=Math.min(m*s,Dt(d))}else i=qt(n)*s;let r=0,l=s;return e.prevMin!==void 0&&(r=Math.max(r,e.prevMin)),e.prevMax!==void 0&&(l=Math.min(l,e.prevMax)),e.nextMax!==void 0&&(r=Math.max(r,s-e.nextMax)),e.nextMin!==void 0&&(l=Math.min(l,s-e.nextMin)),l<r?e.prevMax??l:Math.max(r,Math.min(i,l))},Ht=(t,e)=>{let s=t;return e.prevMin!==void 0&&(s=Math.max(s,e.prevMin)),e.prevMax!==void 0&&(s=Math.min(s,e.prevMax)),Math.max(0,s)},Ot=(t="horizontal")=>{const e=Fe();return k(()=>{e.setAttribute("data-direction",t)},[t]),k(()=>{const s=(o,d)=>{const m=Lt(d);e.dispatchEvent(new CustomEvent("resize-handle",{detail:{phase:o,mousePosition:m},bubbles:!0}))},n=o=>s("move",o),i=o=>{e.removeAttribute("data-dragging"),s("end",o),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",i),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",i)},r=o=>{e.setAttribute("data-dragging","true"),s("start",o),document.addEventListener("mousemove",n),document.addEventListener("mouseup",i),document.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchend",i)},l=o=>{o.preventDefault(),r(o)},a=o=>{o.preventDefault(),r(o)};return e.addEventListener("mousedown",l),e.addEventListener("touchstart",a,{passive:!1}),()=>{e.removeEventListener("mousedown",l),e.removeEventListener("touchstart",a),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",i),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",i)}},[e]),null},It=Te`
	:host {
		display: flex;
		position: relative;
		z-index: 1;
		user-select: none;
		touch-action: none;
		background: var(--cz-queue-gutter-bg, transparent);
	}

	:host::before {
		content: '';
		display: block;
		flex: none;
		background: var(--cz-queue-gutter-divider-bg, #bbb);
		pointer-events: none;
	}

	:host::after {
		content: '';
		position: absolute;
		inset: -3px;
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
		background: var(
			--cz-queue-gutter-divider-hover-color,
			var(--cz-accent-color, #007acc)
		);
		box-shadow: 0 0 0 1px
			var(
				--cz-queue-gutter-divider-hover-color,
				var(--cz-accent-color, #007acc)
			);
	}
`,Gt=({direction:t="horizontal"})=>(Ot(t),te);customElements.define("cosmoz-resize-handle",Oe(Gt,{styleSheets:[It],observedAttributes:["direction"]}));const Vt=(t,e,s)=>s==="horizontal"?t.x-e.left:t.y-e.top,Ue=(t,e)=>e==="horizontal"?t.width:t.height,Ut=(t,e,s)=>{let n=t;return e!==void 0&&(n=Math.max(n,e)),s!==void 0&&(n=Math.min(n,s)),Math.max(0,n)},Qt=(t,e)=>{const s=e>0?e:1,n=t/s;return[n,1-n]},Wt=(t,e,s)=>(t.rect||(t.rect=e.container.getBoundingClientRect(),t.size=Ue(t.rect,s)),t.rect),Xt=t=>{const e={rect:void 0,size:0},s=(n,i,r)=>{var d,m;const l=Wt(e,r.elements,r.direction),a=Ut(Vt(i,l,r.direction),r.minSize,r.maxSize),o=Qt(a,e.size);n==="move"?(d=r.onResize)==null||d.call(r,{ratios:o,px:a}):((m=r.onResizeEnd)==null||m.call(r,{ratios:o}),e.rect=void 0)};return n=>{var l;const{phase:i,mousePosition:r}=n.detail;if(i==="start"){e.rect=t.elements.container.getBoundingClientRect(),e.size=Ue(e.rect,t.direction),(l=t.onResizeStart)==null||l.call(t);return}(i==="move"||i==="end")&&s(i,r,t)}},J=(t,e)=>t.dispatchEvent(new CustomEvent("resize-panels",{detail:{ratios:e},bubbles:!0})),ee=(t,e)=>{const s=t.getBoundingClientRect();return e==="horizontal"?s.width:s.height},Yt=({direction:t="horizontal",initialSizes:e=[.5,.5],minSize:s,maxSize:n,persist:i})=>{const r=Fe(),l=C(.5),a=C(),o=C(),d=C(),[m,M]=vt(!1),w=V(()=>{if(typeof i=="string")return $t();if(i&&typeof i=="object")return i},[i]),B=V(()=>{if(typeof i=="string")return i;if(i&&typeof i=="object")return"default"},[i]),$=At(w,B,h=>{var x,g;l.current=h;const u=(x=o.current)==null?void 0:x.assignedElements()[0],p=(g=d.current)==null?void 0:g.assignedElements()[0];if(!u||!p)return;const f=ee(r,t),{ratios:v}=Z(u,p,h*f,f);J(r,v)}),b=pt(()=>{const h=r.shadowRoot;if(!h)return;const u=o.current,p=d.current,f=h.querySelector("slot:not([name])");if(!u||!p||!f)return;let v=u.assignedElements()[0],x=p.assignedElements()[0];const g=f.assignedElements().filter(j=>!j.hasAttribute("slot"));!v&&g.length>0&&(v=g.shift(),v.setAttribute("slot","previous")),!x&&g.length>0&&(x=g.shift(),x.setAttribute("slot","next"));const N=a.current;v&&x&&N&&M(!0)},[]);return k(()=>{var h;r.setAttribute("data-direction",t),(h=a.current)==null||h.setAttribute("data-direction",t)},[t]),k(()=>{var re,oe,ae;if(!m)return;const h=a.current,u=(re=o.current)==null?void 0:re.assignedElements()[0],p=(oe=d.current)==null?void 0:oe.assignedElements()[0];if(!u||!p||!h)return;const f=ee(r,t),v=Tt(s,n,f),x=(ae=w==null?void 0:w.get)==null?void 0:ae.call(w,B??""),g=x!==void 0?Ht(x*f,v):Ft(e,v,f),{ratios:N}=Z(u,p,g,f);l.current=N[0],J(r,N);const j=Xt({elements:{previous:u,next:p,container:r},direction:t,minSize:v.prevMin,maxSize:v.prevMax,onResize:({ratios:T,px:Qe})=>{const We=ee(r,t);Z(u,p,Qe,We),l.current=T[0],J(r,T)},onResizeEnd:({ratios:T})=>{$==null||$(T[0])}});return h.addEventListener("resize-handle",j),()=>{h.removeEventListener("resize-handle",j)}},[s,n,$,t,m]),A`<slot hidden @slotchange=${b}></slot
		><slot
			name="previous"
			${Y(o)}
			@slotchange=${b}
		></slot
		><cosmoz-resize-handle
			direction=${t}
			${Y(a)}
		></cosmoz-resize-handle
		><slot name="next" ${Y(d)} @slotchange=${b}></slot>`};customElements.define("cosmoz-resizable-view",Oe(Yt,{styleSheets:[Ct],observedAttributes:["direction"]}));const{expect:y,waitFor:z}=__STORYBOOK_MODULE_TEST__,es={title:"Components/ResizableView",tags:["autodocs"]},q={render:()=>A`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            .initialSizes=${[.5,.5]}
        >
            <div
                id="prev"
                style="background:#ff6b6b; display:flex; align-items:center; justify-content:center; color:white;"
            >
                <h3>Left Panel</h3>
            </div>
            <div
                id="next"
                style="background:#4ecdc4; display:flex; align-items:center; justify-content:center; color:white;"
            >
                <h3>Right Panel</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await z(()=>{const s=t.querySelector("#prev");y(s).not.toBeNull()}),y(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered in shadow DOM between named slots",async()=>{await z(()=>{var n;const s=(n=t.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");y(s).not.toBeNull()})}),await e("Panels get initial flex-basis from initialSizes",async()=>{await z(()=>{const s=t.querySelector("#prev");y(s.style.flexBasis).toBe("50%")})})}},D={render:()=>A`<cosmoz-resizable-view
            style="display:flex; flex-direction:column; width:600px; height:400px; border:1px solid #ccc;"
            direction="vertical"
            .initialSizes=${[.5,.5]}
        >
            <div
                style="background:#ff6b6b; display:flex; align-items:center; justify-content:center; color:white; padding:20px;"
            >
                <h3>Top Panel</h3>
            </div>
            <div
                style="background:#4ecdc4; display:flex; align-items:center; justify-content:center; color:white; padding:20px;"
            >
                <h3>Bottom Panel</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{const s=t.querySelector("cosmoz-resizable-view");await z(()=>{y(s.getAttribute("data-direction")).toBe("vertical")}),await z(()=>{var i;const n=(i=s.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle");y(n==null?void 0:n.getAttribute("data-direction")).toBe("vertical")})})}},F={render:()=>A`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            .initialSizes=${[.5,.5]}
        >
            <div
                style="background:#ff6b6b; display:flex; align-items:center; justify-content:center; color:white;"
            >
                <h3>Left Panel</h3>
            </div>
            <cosmoz-resizable-view direction="vertical" .initialSizes=${[.5,.5]}>
                <div
                    style="background:#ffa726; display:flex; align-items:center; justify-content:center; color:white; padding:10px;"
                >
                    <h3>Top Panel</h3>
                </div>
                <div
                    style="background:#45b7d1; display:flex; align-items:center; justify-content:center; color:white; padding:10px;"
                >
                    <h3>Bottom Panel</h3>
                </div>
            </cosmoz-resizable-view>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await z(()=>{var i,r;const s=(i=t.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle");y(s).not.toBeNull();const n=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");y(n).not.toBeNull(),y((r=n==null?void 0:n.shadowRoot)==null?void 0:r.querySelector("cosmoz-resize-handle")).not.toBeNull()})})}},H={render:()=>A`<cosmoz-resizable-view
            style="display:flex; width:800px; height:300px; border:1px solid #ccc;"
            .initialSizes=${[.25,.75]}
            .minSize=${[300,void 0]}
        >
            <div
                id="list"
                style="background:#ff6b6b; display:flex; align-items:center; justify-content:center; color:white;"
            >
                <h3>List (25% or 300px min)</h3>
            </div>
            <div
                id="details"
                style="background:#4ecdc4; display:flex; align-items:center; justify-content:center; color:white;"
            >
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Left panel floored at 300px (25% would be 200px)",async()=>{await z(()=>{const s=t.querySelector("#list");y(parseFloat(s.style.flexBasis)).toBeCloseTo(37.5,0)})})}},O={render:()=>A`<cosmoz-resizable-view
            style="display:flex; width:1000px; height:300px; border:1px solid #ccc;"
            .initialSizes=${[[.4,"360px"],.6]}
        >
            <div
                id="list"
                style="background:#ff6b6b; display:flex; align-items:center; justify-content:center; color:white;"
            >
                <h3>List (40% or 360px max)</h3>
            </div>
            <div
                id="details"
                style="background:#4ecdc4; display:flex; align-items:center; justify-content:center; color:white;"
            >
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Left panel capped at 360px (40% would be 400px)",async()=>{await z(()=>{const s=t.querySelector("#list");y(parseFloat(s.style.flexBasis)).toBeCloseTo(36,0)})})}};var we,ge,ze;q.parameters={...q.parameters,docs:{...(we=q.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            .initialSizes=\${[0.5, 0.5]}
        >
            <div
                id="prev"
                style="background:#ff6b6b; display:flex; align-items:center; justify-content:center; color:white;"
            >
                <h3>Left Panel</h3>
            </div>
            <div
                id="next"
                style="background:#4ecdc4; display:flex; align-items:center; justify-content:center; color:white;"
            >
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
    await step('Panels get initial flex-basis from initialSizes', async () => {
      await waitFor(() => {
        const prev = canvasElement.querySelector('#prev') as HTMLElement;
        expect(prev.style.flexBasis).toBe('50%');
      });
    });
  }
}`,...(ze=(ge=q.parameters)==null?void 0:ge.docs)==null?void 0:ze.source}}};var _e,Ee,Se;D.parameters={...D.parameters,docs:{...(_e=D.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; flex-direction:column; width:600px; height:400px; border:1px solid #ccc;"
            direction="vertical"
            .initialSizes=\${[0.5, 0.5]}
        >
            <div
                style="background:#ff6b6b; display:flex; align-items:center; justify-content:center; color:white; padding:20px;"
            >
                <h3>Top Panel</h3>
            </div>
            <div
                style="background:#4ecdc4; display:flex; align-items:center; justify-content:center; color:white; padding:20px;"
            >
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
}`,...(Se=(Ee=D.parameters)==null?void 0:Ee.docs)==null?void 0:Se.source}}};var Me,$e,Ae;F.parameters={...F.parameters,docs:{...(Me=F.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; width:600px; height:300px; border:1px solid #ccc;"
            .initialSizes=\${[0.5, 0.5]}
        >
            <div
                style="background:#ff6b6b; display:flex; align-items:center; justify-content:center; color:white;"
            >
                <h3>Left Panel</h3>
            </div>
            <cosmoz-resizable-view direction="vertical" .initialSizes=\${[0.5, 0.5]}>
                <div
                    style="background:#ffa726; display:flex; align-items:center; justify-content:center; color:white; padding:10px;"
                >
                    <h3>Top Panel</h3>
                </div>
                <div
                    style="background:#45b7d1; display:flex; align-items:center; justify-content:center; color:white; padding:10px;"
                >
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
}`,...(Ae=($e=F.parameters)==null?void 0:$e.docs)==null?void 0:Ae.source}}};var Ce,Le,Pe;H.parameters={...H.parameters,docs:{...(Ce=H.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; width:800px; height:300px; border:1px solid #ccc;"
            .initialSizes=\${[0.25, 0.75]}
            .minSize=\${[300, undefined]}
        >
            <div
                id="list"
                style="background:#ff6b6b; display:flex; align-items:center; justify-content:center; color:white;"
            >
                <h3>List (25% or 300px min)</h3>
            </div>
            <div
                id="details"
                style="background:#4ecdc4; display:flex; align-items:center; justify-content:center; color:white;"
            >
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>\`,
  async play({
    canvasElement,
    step
  }) {
    await step('Left panel floored at 300px (25% would be 200px)', async () => {
      await waitFor(() => {
        const list = canvasElement.querySelector('#list') as HTMLElement;
        // 800px * 0.25 = 200px, but minSize=300 floors it
        // 300px / 800px ≈ 37.5%
        expect(parseFloat(list.style.flexBasis)).toBeCloseTo(37.5, 0);
      });
    });
  }
}`,...(Pe=(Le=H.parameters)==null?void 0:Le.docs)==null?void 0:Pe.source}}};var ke,Re,Be;O.parameters={...O.parameters,docs:{...(ke=O.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-resizable-view
            style="display:flex; width:1000px; height:300px; border:1px solid #ccc;"
            .initialSizes=\${[[0.4, '360px'], 0.6]}
        >
            <div
                id="list"
                style="background:#ff6b6b; display:flex; align-items:center; justify-content:center; color:white;"
            >
                <h3>List (40% or 360px max)</h3>
            </div>
            <div
                id="details"
                style="background:#4ecdc4; display:flex; align-items:center; justify-content:center; color:white;"
            >
                <h3>Details</h3>
            </div>
        </cosmoz-resizable-view>\`,
  async play({
    canvasElement,
    step
  }) {
    await step('Left panel capped at 360px (40% would be 400px)', async () => {
      await waitFor(() => {
        const list = canvasElement.querySelector('#list') as HTMLElement;
        // 1000px * 0.4 = 400px, but cap is 360px
        // 360px / 1000px ≈ 36%
        expect(parseFloat(list.style.flexBasis)).toBeCloseTo(36, 0);
      });
    });
  }
}`,...(Be=(Re=O.parameters)==null?void 0:Re.docs)==null?void 0:Be.source}}};const ts=["BasicDemo","VerticalDemo","MultiplePanels","ListDetailsSplit","CappedInitialSize"];export{q as BasicDemo,O as CappedInitialSize,H as ListDetailsSplit,F as MultiplePanels,D as VerticalDemo,ts as __namedExportsOrder,es as default};
