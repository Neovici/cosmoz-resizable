var De=Object.defineProperty;var He=(t,e,s)=>e in t?De(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var c=(t,e,s)=>He(t,typeof e!="symbol"?e+"":e,s);import{f as Ie,B as Fe,E as Y,x as F}from"./iframe-hhIpzGlt.js";import"./preload-helper-C1FmrZbK.js";let D,Me=0;function re(t){D=t}function ie(){D=null,Me=0}function Ge(){return Me++}const G=Symbol("haunted.phase"),O=Symbol("haunted.hook"),oe=Symbol("haunted.update"),ae=Symbol("haunted.commit"),z=Symbol("haunted.effects"),P=Symbol("haunted.layoutEffects"),K="haunted.context";var fe,pe,me;me=O,pe=z,fe=P;class Ve{constructor(e,s){c(this,"update");c(this,"host");c(this,"virtual");c(this,me);c(this,pe);c(this,fe);this.update=e,this.host=s,this[O]=new Map,this[z]=[],this[P]=[]}run(e){re(this);let s=e();return ie(),s}_runEffects(e){let s=this[e];re(this);for(let n of s)n.call(this);ie()}runEffects(){this._runEffects(z)}runLayoutEffects(){this._runEffects(P)}teardown(){this[O].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class Ue extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const Qe=100,We=Promise.resolve().then.bind(Promise.resolve());function Ae(){let t=[],e;function s(){e=null;let n=t;t=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(n){t.push(n),e==null&&(e=We(s))}}const Xe=Ae(),ce=Ae();var ve;ve=G;const I=class I{constructor(e,s){c(this,"renderer");c(this,"host");c(this,"state");c(this,ve);c(this,"_updateQueued");c(this,"_active");c(this,"_updateCount");c(this,"_processing");this.renderer=e,this.host=s,this.state=new Ve(this.update.bind(this),s),this[G]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>I.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new Ue(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,Xe(()=>{let e=this.handlePhase(oe);ce(()=>{this.handlePhase(ae,e),ce(()=>{this.handlePhase(z),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[G]=e,e){case ae:this.commit(s),this.runEffects(P);return;case oe:return this.render();case z:return this.runEffects(z)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};c(I,"maxUpdates",Qe);let Z=I;const Ye=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Ke=t=>t==null?void 0:t.map(e=>typeof e=="string"?Ye(e):e),Ze=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),$e=Ze,Je=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function et(t){class e extends Z{constructor(i,l,a){super(i,a||l);c(this,"frag");c(this,"renderResult");this.frag=l}commit(i){this.renderResult=t(i,this.frag)}}function s(n,r,i){const l=(i||r||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:h={},styleSheets:f}=i||r||{},g=Ke(n.styleSheets||f);class x extends l{constructor(){super();c(this,"_scheduler");if(o===!1)this._scheduler=new e(n,this);else{const u=this.attachShadow({mode:"open",...h});g&&(u.adoptedStyleSheets=g),this._scheduler=new e(n,u,this)}}static get observedAttributes(){return n.observedAttributes||a||[]}connectedCallback(){var u;this._scheduler.resume(),this._scheduler.update(),(u=this._scheduler.renderResult)==null||u.setConnected(!0)}disconnectedCallback(){var u;this._scheduler.pause(),this._scheduler.teardown(),(u=this._scheduler.renderResult)==null||u.setConnected(!1)}attributeChangedCallback(u,m,d){if(m===d)return;let y=d===""?!0:d;Reflect.set(this,Je(u),y)}}function $(v){let p=v,u=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return p},set(m){u&&p===m||(u=!0,p=m,this._scheduler&&this._scheduler.update())}})}const b=new Proxy(l.prototype,{getPrototypeOf(v){return v},set(v,p,u,m){let d;return p in v?(d=Object.getOwnPropertyDescriptor(v,p),d&&d.set?(d.set.call(m,u),!0):(Reflect.set(v,p,u,m),!0)):(typeof p=="symbol"||p[0]==="_"?d={enumerable:!0,configurable:!0,writable:!0,value:u}:d=$(u),Object.defineProperty(m,p,d),d.set&&d.set.call(m,u),!0)}});return Object.setPrototypeOf(x.prototype,b),x}return s}class _{constructor(e,s){c(this,"id");c(this,"state");this.id=e,this.state=s}}function tt(t,...e){let s=Ge(),n=D[O],r=n.get(s);return r||(r=new t(s,D,...e),n.set(s,r)),r.update(...e)}function E(t){return tt.bind(null,t)}function Ce(t){return E(class extends _{constructor(s,n,r,i){super(s,n);c(this,"callback");c(this,"lastValues");c(this,"values");c(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function Pe(t,e){t[z].push(e)}const R=Ce(Pe),st=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,nt=E(class extends _{constructor(e,s,n){super(e,s);c(this,"Context");c(this,"value");c(this,"_ranEffect");c(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Pe(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};st(this.state.host).dispatchEvent(new CustomEvent(K,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:i}=s;this.value=r?i:e.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function rt(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();c(this,"listeners");c(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(K,this)}disconnectedCallback(){this.removeEventListener(K,this)}handleEvent(r){const{detail:i}=r;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let i of this.listeners)i(r)}get value(){return this._value}},Consumer:t(function({render:n}){const r=nt(s);return n(r)},{useShadowDOM:!1}),defaultValue:e};return s}}const J=E(class extends _{constructor(e,s,n,r){super(e,s);c(this,"value");c(this,"values");this.value=n(),this.values=r}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}});function it(t,e){t[P].push(e)}Ce(it);E(class extends _{constructor(e,s,n){super(e,s);c(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});E(class extends _{constructor(e,s,n,r,i){super(e,s);c(this,"reducer");c(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(r):r}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const ot=/([A-Z])/gu;E(class extends _{constructor(e,s,n,r){super(e,s);c(this,"property");c(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(ot,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updater(r,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],n=typeof e=="function"?e:void 0,r=n?n(s):e;return[s,r,n]}notify(e,s){const n=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,s=!1){const[n,r,i]=this.resolve(e),l=this.notify(r,i);!s&&l.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}});function at(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function C(t){return J(()=>at(t),[])}const ke=E(class extends _{update(){return this.state.host}});function ct({render:t}){const e=et(t),s=rt(e);return{component:e,createContext:s}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt={CHILD:2},ut=t=>(...e)=>({_$litDirective$:t,values:e});class dt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=(t,e)=>{var n;const s=t._$AN;if(s===void 0)return!1;for(const r of s)(n=r._$AO)==null||n.call(r,e,!1),k(r,e);return!0},H=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while((s==null?void 0:s.size)===0)},Re=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),pt(e)}};function ht(t){this._$AN!==void 0?(H(this),this._$AM=t,Re(this)):this._$AM=t}function ft(t,e=!1,s=0){const n=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(n))for(let i=s;i<n.length;i++)k(n[i],!1),H(n[i]);else n!=null&&(k(n,!1),H(n));else k(this,t)}const pt=t=>{t.type==lt.CHILD&&(t._$AP??(t._$AP=ft),t._$AQ??(t._$AQ=ht))};class mt extends dt{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),Re(this),this.isConnected=e._$AU}_$AO(e,s=!0){var n,r;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(r=this.disconnected)==null||r.call(this)),s&&(k(this,e),H(this))}setValue(e){if(Ie(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:Le}=ct({render:Fe}),V=new WeakMap,U=ut(class extends mt{render(t){return Y}update(t,[e]){var n;const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=(n=t.options)==null?void 0:n.host,this.rt(this.ct=t.element)),Y}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=V.get(e);s===void 0&&(s=new WeakMap,V.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=V.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),le=t=>typeof t=="number"&&!Number.isNaN(t)&&t>=0&&t<=1?t:void 0,vt=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const n=new Map,r=()=>{s=void 0;for(const[a,o]of n)try{localStorage.setItem(t+a,String(o))}catch{}n.clear()},i=(a,o)=>{n.set(a,o),s===void 0&&(s=setTimeout(r,100))},l=a=>{if(a.key===null||!a.key.startsWith(t)||a.newValue===null)return;const o=a.key.slice(t.length),h=le(Number(a.newValue));if(h===void 0)return;const f=e.get(o);if(f)for(const g of f)g(h)};return typeof window<"u"&&window.addEventListener("storage",l),{get(a){let o;try{o=localStorage.getItem(t+a)}catch{return}if(o!==null)return le(Number(o))},set(a,o){i(a,o)},subscribe(a,o){let h=e.get(a);return h||(h=new Set,e.set(a,h)),h.add(o),()=>{const f=e.get(a);f&&(f.delete(o),f.size===0&&e.delete(a))}},destroy(){typeof window<"u"&&window.removeEventListener("storage",l),s!==void 0&&(clearTimeout(s),r())}}},bt=(t,e,s)=>{const n=C(s);if(n.current=s,R(()=>{var l,a;if(!t||!e)return;const r=t.get(e);r!==void 0&&((l=n.current)==null||l.call(n,r));const i=(a=t.subscribe)==null?void 0:a.call(t,e,o=>{var h;return(h=n.current)==null?void 0:h.call(n,o)});return()=>{var o;i==null||i(),(o=t.destroy)==null||o.call(t)}},[t,e]),!(!t||!e))return r=>t.set(e,r)},yt=$e`
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
`,wt=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},L=/^(\d+(?:\.\d+)?)%$/u,Ne=/^(\d+(?:\.\d+)?)px$/u,Be=/^(\d+(?:\.\d+)?)vw$/u,Te=/^(\d+(?:\.\d+)?)vh$/u,ee=t=>{const e=t.match(Be);if(e)return Number(e[1])/100*window.innerWidth;const s=t.match(Te);if(s)return Number(s[1])/100*window.innerHeight;const n=t.match(Ne);if(n)return Number(n[1])},ue=t=>{if(typeof t=="number")return t;const e=t.match(L);return e?Number(e[1])/100:void 0},gt=t=>typeof t=="number"?t:ee(t),xt=(t,e=!1)=>{if(Array.isArray(t))return{ratio:ue(t[0]),absolute:gt(t[1])};if(typeof t=="number")return e?{ratio:t}:{absolute:t};const s=ue(t);return s!==void 0?{ratio:s}:{absolute:ee(t)}},zt=(t,e,s)=>{const{ratio:n,absolute:r}=t,i=n!==void 0?n*e:void 0;return i!==void 0&&r!==void 0?s?Math.max(i,r):Math.min(i,r):i??r},Q=(t,e,s,n=!1)=>{if(t===void 0)return;const r=xt(t,n);return zt(r,e,s)},_t=(t,e)=>typeof t=="string"?Ne.test(t)||Be.test(t)||Te.test(t):typeof t=="number"&&(e?t>1:!0),Et=t=>typeof t=="number"&&t>=0&&t<=1||typeof t=="string"&&L.test(t),St=(t,e=!1)=>{if(!Array.isArray(t))return!1;const[s,n]=t;return Array.isArray(s)||Array.isArray(n)?!0:!(Et(s)&&_t(n,e))},de=(t,e,s,n=!1)=>{if(t===void 0)return[void 0,void 0];if(St(t,n)){const[r,i]=t;return[Q(r,e,s,n),Q(i,e,s,n)]}return[Q(t,e,s,n),void 0]},he=(t,e,s)=>{const[n,r]=de(t,s,!0),[i,l]=de(e,s,!1);return{prevMin:n,prevMax:i,nextMin:r,nextMax:l}},W=(t,e,s,n)=>{const r=n>0?s/n:0,i=1-r;return t.style.flexBasis=`${r*100}%`,e.style.flexBasis=`${i*100}%`,{ratios:[r,i]}},Mt=t=>{var s;if(Array.isArray(t)){const n=t[0];return typeof n=="number"?n:Number(((s=n.match(L))==null?void 0:s[1])??50)/100}if(typeof t=="number")return t;const e=t.match(L);return e?Number(e[1])/100:.5},At=t=>typeof t=="number"?t:ee(t)??0,$t=(t,e,s)=>{var a;const n=t[0];let r;if(Array.isArray(n)){const[o,h]=n,f=typeof o=="number"?o:Number(((a=o.match(L))==null?void 0:a[1])??50)/100;r=Math.min(f*s,At(h))}else r=Mt(n)*s;let i=0,l=s;return e.prevMin!==void 0&&(i=Math.max(i,e.prevMin)),e.prevMax!==void 0&&(l=Math.min(l,e.prevMax)),e.nextMax!==void 0&&(i=Math.max(i,s-e.nextMax)),e.nextMin!==void 0&&(l=Math.min(l,s-e.nextMin)),l<i?e.prevMax??l:Math.max(i,Math.min(r,l))},Ct=(t,e)=>{let s=t;return e.prevMin!==void 0&&(s=Math.max(s,e.prevMin)),e.prevMax!==void 0&&(s=Math.min(s,e.prevMax)),Math.max(0,s)},Pt=(t="horizontal")=>{const e=ke();return R(()=>{e.setAttribute("data-direction",t)},[t]),R(()=>{const s=(o,h)=>{const f=wt(h);e.dispatchEvent(new CustomEvent("resize",{detail:{phase:o,mousePosition:f},bubbles:!0}))},n=o=>s("move",o),r=o=>{e.removeAttribute("data-dragging"),s("end",o),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",r)},i=o=>{e.setAttribute("data-dragging","true"),s("start",o),document.addEventListener("mousemove",n),document.addEventListener("mouseup",r),document.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchend",r)},l=o=>{o.preventDefault(),i(o)},a=o=>{o.preventDefault(),i(o)};return e.addEventListener("mousedown",l),e.addEventListener("touchstart",a,{passive:!1}),()=>{e.removeEventListener("mousedown",l),e.removeEventListener("touchstart",a),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",r)}},[e]),null},kt=$e`
	:host {
		display: block;
		background: var(--cosmoz-resize-handle-background, #e0e0e0);
		user-select: none;
		position: relative;
		z-index: 1;
		touch-action: none;
	}

	:host([data-direction='horizontal']) {
		min-height: 100%;
		width: var(--cosmoz-resize-handle-size, 4px);
		cursor: col-resize;
	}

	:host([data-direction='vertical']) {
		height: var(--cosmoz-resize-handle-size, 4px);
		width: 100%;
		cursor: row-resize;
	}

	:host(:hover) {
		background: var(--cosmoz-resize-handle-hover-background, #ccc);
	}

	:host([data-dragging]) {
		background: var(--cosmoz-resize-handle-dragging-background, #007acc);
		cursor: grabbing;
	}
`,Rt=({direction:t="horizontal"})=>(Pt(t),Y);customElements.define("cosmoz-resize-handle",Le(Rt,{styleSheets:[kt],observedAttributes:["direction"]}));const Lt=(t,e,s)=>s==="horizontal"?t.x-e.left:t.y-e.top,je=(t,e)=>e==="horizontal"?t.width:t.height,Nt=(t,e,s)=>{let n=t;return e!==void 0&&(n=Math.max(n,e)),s!==void 0&&(n=Math.min(n,s)),Math.max(0,n)},Bt=(t,e)=>{const s=e>0?e:1,n=t/s;return[n,1-n]},Tt=(t,e,s)=>(t.rect||(t.rect=e.container.getBoundingClientRect(),t.size=je(t.rect,s)),t.rect),jt=t=>{const e={rect:void 0,size:0},s=(n,r,i)=>{var h,f;const l=Tt(e,i.elements,i.direction),a=Nt(Lt(r,l,i.direction),i.minSize,i.maxSize),o=Bt(a,e.size);n==="move"?(h=i.onResize)==null||h.call(i,{ratios:o,px:a}):((f=i.onResizeEnd)==null||f.call(i,{ratios:o}),e.rect=void 0)};return n=>{var l;const{phase:r,mousePosition:i}=n.detail;if(r==="start"){e.rect=t.elements.container.getBoundingClientRect(),e.size=je(e.rect,t.direction),(l=t.onResizeStart)==null||l.call(t);return}(r==="move"||r==="end")&&s(r,i,t)}},X=(t,e)=>t.dispatchEvent(new CustomEvent("split-resize",{detail:{ratios:e},bubbles:!0})),B=(t,e)=>{const s=t.getBoundingClientRect();return e==="horizontal"?s.width:s.height},qt=({direction:t="horizontal",initialSizes:e=[.5,.5],minSize:s,maxSize:n,persist:r})=>{const i=ke(),l=C(.5),a=C(),o=C(),h=C(),f=J(()=>{if(typeof r=="string")return vt();if(r&&typeof r=="object")return r},[r]),g=J(()=>{if(typeof r=="string")return r;if(r&&typeof r=="object")return"default"},[r]),x=bt(f,g,b=>{var d,y;l.current=b;const v=(d=o.current)==null?void 0:d.assignedElements()[0],p=(y=h.current)==null?void 0:y.assignedElements()[0];if(!v||!p)return;const u=B(i,t),{ratios:m}=W(v,p,b*u,u);X(i,m)}),$=()=>{var ne;const b=i.shadowRoot;if(!b)return;const v=o.current,p=h.current,u=b.querySelector("slot:not([name])");if(!v||!p||!u)return;let m=v.assignedElements()[0],d=p.assignedElements()[0];const y=u.assignedElements().filter(Oe=>!Oe.hasAttribute("slot"));!m&&y.length>0&&(m=y.shift(),m.setAttribute("slot","previous")),!d&&y.length>0&&(d=y.shift(),d.setAttribute("slot","next"));const S=a.current;if(!m||!d||!S)return;const M=B(i,t),N=he(s,n,M),te=(ne=f==null?void 0:f.get)==null?void 0:ne.call(f,g??""),qe=te!==void 0?Ct(te*M,N):$t(e,N,M),{ratios:se}=W(m,d,qe,M);l.current=se[0],X(i,se)};return R(()=>{var b;i.setAttribute("data-direction",t),(b=a.current)==null||b.setAttribute("data-direction",t)},[t]),R(()=>{var d,y;const b=a.current,v=(d=o.current)==null?void 0:d.assignedElements()[0],p=(y=h.current)==null?void 0:y.assignedElements()[0];if(!v||!p||!b)return;const u=he(s,n,B(i,t)),m=jt({elements:{previous:v,next:p,container:i},direction:t,minSize:u.prevMin,maxSize:u.prevMax,onResize:({ratios:S,px:M})=>{const N=B(i,t);W(v,p,M,N),l.current=S[0],X(i,S)},onResizeEnd:({ratios:S})=>{x==null||x(S[0])}});return b.addEventListener("resize",m),()=>{b.removeEventListener("resize",m)}},[s,n,x,t]),F`<slot hidden @slotchange=${$}></slot
		><slot
			name="previous"
			${U(o)}
			@slotchange=${$}
		></slot
		><cosmoz-resize-handle
			direction=${t}
			${U(a)}
		></cosmoz-resize-handle
		><slot name="next" ${U(h)} @slotchange=${$}></slot>`};customElements.define("cosmoz-resizable-view",Le(qt,{styleSheets:[yt],observedAttributes:["direction"]}));const{expect:w,waitFor:A}=__STORYBOOK_MODULE_TEST__,It={title:"Components/ResizableView",tags:["autodocs"]},T={render:()=>F`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await A(()=>{const s=t.querySelector("#prev");w(s).not.toBeNull()}),w(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered in shadow DOM between named slots",async()=>{await A(()=>{var n;const s=(n=t.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");w(s).not.toBeNull()})}),await e("Panels get initial flex-basis from initialSizes",async()=>{await A(()=>{const s=t.querySelector("#prev");w(s.style.flexBasis).toBe("50%")})})}},j={render:()=>F`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{const s=t.querySelector("cosmoz-resizable-view");await A(()=>{w(s.getAttribute("data-direction")).toBe("vertical")}),await A(()=>{var r;const n=(r=s.shadowRoot)==null?void 0:r.querySelector("cosmoz-resize-handle");w(n==null?void 0:n.getAttribute("data-direction")).toBe("vertical")})})}},q={render:()=>F`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await A(()=>{var r,i;const s=(r=t.shadowRoot)==null?void 0:r.querySelector("cosmoz-resize-handle");w(s).not.toBeNull();const n=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");w(n).not.toBeNull(),w((i=n==null?void 0:n.shadowRoot)==null?void 0:i.querySelector("cosmoz-resize-handle")).not.toBeNull()})})}};var be,ye,we;T.parameters={...T.parameters,docs:{...(be=T.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(we=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var ge,xe,ze;j.parameters={...j.parameters,docs:{...(ge=j.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ze=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:ze.source}}};var _e,Ee,Se;q.parameters={...q.parameters,docs:{...(_e=q.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Se=(Ee=q.parameters)==null?void 0:Ee.docs)==null?void 0:Se.source}}};const Ft=["BasicDemo","VerticalDemo","MultiplePanels"];export{T as BasicDemo,q as MultiplePanels,j as VerticalDemo,Ft as __namedExportsOrder,It as default};
