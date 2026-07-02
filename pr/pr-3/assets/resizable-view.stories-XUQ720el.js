var Ae=Object.defineProperty;var Be=(t,e,s)=>e in t?Ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var a=(t,e,s)=>Be(t,typeof e!="symbol"?e+"":e,s);import{B as Ne,E as qe,x as O}from"./iframe-xXMYR30I.js";import"./preload-helper-C1FmrZbK.js";let $,we=0;function K(t){$=t}function Z(){$=null,we=0}function je(){return we++}const D=Symbol("haunted.phase"),j=Symbol("haunted.hook"),G=Symbol("haunted.update"),J=Symbol("haunted.commit"),E=Symbol("haunted.effects"),P=Symbol("haunted.layoutEffects"),V="haunted.context";var ie,ae,ce;ce=j,ae=E,ie=P;class $e{constructor(e,s){a(this,"update");a(this,"host");a(this,"virtual");a(this,ce);a(this,ae);a(this,ie);this.update=e,this.host=s,this[j]=new Map,this[E]=[],this[P]=[]}run(e){K(this);let s=e();return Z(),s}_runEffects(e){let s=this[e];K(this);for(let n of s)n.call(this);Z()}runEffects(){this._runEffects(E)}runLayoutEffects(){this._runEffects(P)}teardown(){this[j].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class Te extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const Oe=100,De=Promise.resolve().then.bind(Promise.resolve());function ge(){let t=[],e;function s(){e=null;let n=t;t=[];for(var r=0,o=n.length;r<o;r++)n[r]()}return function(n){t.push(n),e==null&&(e=De(s))}}const Fe=ge(),ee=ge();var le;le=D;const T=class T{constructor(e,s){a(this,"renderer");a(this,"host");a(this,"state");a(this,le);a(this,"_updateQueued");a(this,"_active");a(this,"_updateCount");a(this,"_processing");this.renderer=e,this.host=s,this.state=new $e(this.update.bind(this),s),this[D]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>T.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new Te(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,Fe(()=>{let e=this.handlePhase(G);ee(()=>{this.handlePhase(J,e),ee(()=>{this.handlePhase(E),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[D]=e,e){case J:this.commit(s),this.runEffects(P);return;case G:return this.render();case E:return this.runEffects(E)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};a(T,"maxUpdates",Oe);let Q=T;const He=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},Ie=t=>t==null?void 0:t.map(e=>typeof e=="string"?He(e):e),Ve=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),xe=Ve,Qe=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function Ue(t){class e extends Q{constructor(o,l,c){super(o,c||l);a(this,"frag");a(this,"renderResult");this.frag=l}commit(o){this.renderResult=t(o,this.frag)}}function s(n,r,o){const l=(o||r||{}).baseElement||HTMLElement,{observedAttributes:c=[],useShadowDOM:i=!0,shadowRootInit:v={},styleSheets:f}=o||r||{},z=Ie(n.styleSheets||f);class p extends l{constructor(){super();a(this,"_scheduler");if(i===!1)this._scheduler=new e(n,this);else{const u=this.attachShadow({mode:"open",...v});z&&(u.adoptedStyleSheets=z),this._scheduler=new e(n,u,this)}}static get observedAttributes(){return n.observedAttributes||c||[]}connectedCallback(){var u;this._scheduler.resume(),this._scheduler.update(),(u=this._scheduler.renderResult)==null||u.setConnected(!0)}disconnectedCallback(){var u;this._scheduler.pause(),this._scheduler.teardown(),(u=this._scheduler.renderResult)==null||u.setConnected(!1)}attributeChangedCallback(u,m,h){if(m===h)return;let g=h===""?!0:h;Reflect.set(this,Qe(u),g)}}function y(b){let d=b,u=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return d},set(m){u&&d===m||(u=!0,d=m,this._scheduler&&this._scheduler.update())}})}const w=new Proxy(l.prototype,{getPrototypeOf(b){return b},set(b,d,u,m){let h;return d in b?(h=Object.getOwnPropertyDescriptor(b,d),h&&h.set?(h.set.call(m,u),!0):(Reflect.set(b,d,u,m),!0)):(typeof d=="symbol"||d[0]==="_"?h={enumerable:!0,configurable:!0,writable:!0,value:u}:h=y(u),Object.defineProperty(m,d,h),h.set&&h.set.call(m,u),!0)}});return Object.setPrototypeOf(p.prototype,w),p}return s}class S{constructor(e,s){a(this,"id");a(this,"state");this.id=e,this.state=s}}function Xe(t,...e){let s=je(),n=$[j],r=n.get(s);return r||(r=new t(s,$,...e),n.set(s,r)),r.update(...e)}function _(t){return Xe.bind(null,t)}function ze(t){return _(class extends S{constructor(s,n,r,o){super(s,n);a(this,"callback");a(this,"lastValues");a(this,"values");a(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function Ee(t,e){t[E].push(e)}const R=ze(Ee),We=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Ye=_(class extends S{constructor(e,s,n){super(e,s);a(this,"Context");a(this,"value");a(this,"_ranEffect");a(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Ee(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};We(this.state.host).dispatchEvent(new CustomEvent(V,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:o}=s;this.value=r?o:e.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function Ke(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();a(this,"listeners");a(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(V,this)}disconnectedCallback(){this.removeEventListener(V,this)}handleEvent(r){const{detail:o}=r;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let o of this.listeners)o(r)}get value(){return this._value}},Consumer:t(function({render:n}){const r=Ye(s);return n(r)},{useShadowDOM:!1}),defaultValue:e};return s}}const U=_(class extends S{constructor(e,s,n,r){super(e,s);a(this,"value");a(this,"values");this.value=n(),this.values=r}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}});function Ze(t,e){t[P].push(e)}ze(Ze);_(class extends S{constructor(e,s,n){super(e,s);a(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});_(class extends S{constructor(e,s,n,r,o){super(e,s);a(this,"reducer");a(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=o!==void 0?o(r):r}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const Ge=/([A-Z])/gu;_(class extends S{constructor(e,s,n,r){super(e,s);a(this,"property");a(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Ge,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updater(r,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],n=typeof e=="function"?e:void 0,r=n?n(s):e;return[s,r,n]}notify(e,s){const n=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,s=!1){const[n,r,o]=this.resolve(e),l=this.notify(r,o);!s&&l.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}});function Je(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function te(t){return U(()=>Je(t),[])}const Se=_(class extends S{update(){return this.state.host}});function et({render:t}){const e=Ue(t),s=Ke(e);return{component:e,createContext:s}}const{component:_e}=et({render:Ne}),tt=xe`
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
`,st=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},k=/^(\d+(?:\.\d+)?)%$/u,Me=/^(\d+(?:\.\d+)?)px$/u,Pe=/^(\d+(?:\.\d+)?)vw$/u,Re=/^(\d+(?:\.\d+)?)vh$/u,X=t=>{const e=t.match(Pe);if(e)return Number(e[1])/100*window.innerWidth;const s=t.match(Re);if(s)return Number(s[1])/100*window.innerHeight;const n=t.match(Me);if(n)return Number(n[1])},se=t=>{if(typeof t=="number")return t;const e=t.match(k);return e?Number(e[1])/100:void 0},nt=t=>typeof t=="number"?t:X(t),rt=(t,e=!1)=>{if(Array.isArray(t))return{ratio:se(t[0]),absolute:nt(t[1])};if(typeof t=="number")return e?{ratio:t}:{absolute:t};const s=se(t);return s!==void 0?{ratio:s}:{absolute:X(t)}},ot=(t,e,s)=>{const{ratio:n,absolute:r}=t,o=n!==void 0?n*e:void 0;return o!==void 0&&r!==void 0?s?Math.max(o,r):Math.min(o,r):o??r},F=(t,e,s,n=!1)=>{if(t===void 0)return;const r=rt(t,n);return ot(r,e,s)},it=(t,e)=>typeof t=="string"?Me.test(t)||Pe.test(t)||Re.test(t):typeof t=="number"&&(e?t>1:!0),at=t=>typeof t=="number"&&t>=0&&t<=1||typeof t=="string"&&k.test(t),ct=(t,e=!1)=>{if(!Array.isArray(t))return!1;const[s,n]=t;return Array.isArray(s)||Array.isArray(n)?!0:!(at(s)&&it(n,e))},ne=(t,e,s,n=!1)=>{if(t===void 0)return[void 0,void 0];if(ct(t,n)){const[r,o]=t;return[F(r,e,s,n),F(o,e,s,n)]}return[F(t,e,s,n),void 0]},re=(t,e,s)=>{const[n,r]=ne(t,s,!0),[o,l]=ne(e,s,!1);return{prevMin:n,prevMax:o,nextMin:r,nextMax:l}},H=(t,e,s,n)=>{const r=n>0?s/n:0,o=1-r;return t.style.flexBasis=`${r*100}%`,e.style.flexBasis=`${o*100}%`,{ratios:[r,o]}},lt=t=>{var s;if(Array.isArray(t)){const n=t[0];return typeof n=="number"?n:Number(((s=n.match(k))==null?void 0:s[1])??50)/100}if(typeof t=="number")return t;const e=t.match(k);return e?Number(e[1])/100:.5},ut=t=>typeof t=="number"?t:X(t)??0,dt=(t,e,s)=>{var c;const n=t[0];let r;if(Array.isArray(n)){const[i,v]=n,f=typeof i=="number"?i:Number(((c=i.match(k))==null?void 0:c[1])??50)/100;r=Math.min(f*s,ut(v))}else r=lt(n)*s;let o=0,l=s;return e.prevMin!==void 0&&(o=Math.max(o,e.prevMin)),e.prevMax!==void 0&&(l=Math.min(l,e.prevMax)),e.nextMax!==void 0&&(o=Math.max(o,s-e.nextMax)),e.nextMin!==void 0&&(l=Math.min(l,s-e.nextMin)),l<o?e.prevMax??l:Math.max(o,Math.min(r,l))},ht=(t,e)=>{let s=t;return e.prevMin!==void 0&&(s=Math.max(s,e.prevMin)),e.prevMax!==void 0&&(s=Math.min(s,e.prevMax)),Math.max(0,s)},ft=(t="horizontal")=>{const e=Se();return R(()=>{e.setAttribute("data-direction",t)},[t]),R(()=>{const s=(i,v)=>{const f=st(v);e.dispatchEvent(new CustomEvent("resize",{detail:{phase:i,mousePosition:f},bubbles:!0}))},n=i=>s("move",i),r=i=>{e.removeAttribute("data-dragging"),s("end",i),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",r)},o=i=>{e.setAttribute("data-dragging","true"),s("start",i),document.addEventListener("mousemove",n),document.addEventListener("mouseup",r),document.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchend",r)},l=i=>{i.preventDefault(),o(i)},c=i=>{i.preventDefault(),o(i)};return e.addEventListener("mousedown",l),e.addEventListener("touchstart",c,{passive:!1}),()=>{e.removeEventListener("mousedown",l),e.removeEventListener("touchstart",c),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",r)}},[e]),null},pt=({direction:t="horizontal"})=>(ft(t),qe);customElements.define("cosmoz-resize-handle",_e(pt,{styleSheets:[tt],observedAttributes:["direction"]}));const oe=t=>typeof t=="number"&&!Number.isNaN(t)&&t>=0&&t<=1?t:void 0,mt=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const n=new Map,r=()=>{s=void 0;for(const[c,i]of n)try{localStorage.setItem(t+c,String(i))}catch{}n.clear()},o=(c,i)=>{n.set(c,i),s===void 0&&(s=setTimeout(r,100))},l=c=>{if(c.key===null||!c.key.startsWith(t)||c.newValue===null)return;const i=c.key.slice(t.length),v=oe(Number(c.newValue));if(v===void 0)return;const f=e.get(i);if(f)for(const z of f)z(v)};return typeof window<"u"&&window.addEventListener("storage",l),{get(c){let i;try{i=localStorage.getItem(t+c)}catch{return}if(i!==null)return oe(Number(i))},set(c,i){o(c,i)},subscribe(c,i){let v=e.get(c);return v||(v=new Set,e.set(c,v)),v.add(i),()=>{const f=e.get(c);f&&(f.delete(i),f.size===0&&e.delete(c))}}}},vt=(t,e,s)=>{if(R(()=>{var o;if(!t||!e)return;const n=t.get(e);return n!==void 0&&s(n),(o=t.subscribe)==null?void 0:o.call(t,e,s)},[t,e,s]),!(!t||!e))return n=>t.set(e,n)},bt=xe`
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
`,yt=(t,e,s)=>s==="horizontal"?t.x-e.left:t.y-e.top,ke=(t,e)=>e==="horizontal"?t.width:t.height,wt=(t,e,s)=>{let n=t;return e!==void 0&&(n=Math.max(n,e)),s!==void 0&&(n=Math.min(n,s)),Math.max(0,n)},gt=(t,e)=>{const s=e>0?e:1,n=t/s;return[n,1-n]},xt=(t,e,s)=>(t.rect||(t.rect=e.container.getBoundingClientRect(),t.size=ke(t.rect,s)),t.rect),zt=t=>{const e={rect:void 0,size:0},s=(n,r,o)=>{var v,f;const l=xt(e,o.elements,o.direction),c=wt(yt(r,l,o.direction),o.minSize,o.maxSize),i=gt(c,e.size);n==="move"?(v=o.onResize)==null||v.call(o,{ratios:i,px:c}):((f=o.onResizeEnd)==null||f.call(o,{ratios:i}),e.rect=void 0)};return n=>{var l;const{phase:r,mousePosition:o}=n.detail;if(r==="start"){e.rect=t.elements.container.getBoundingClientRect(),e.size=ke(e.rect,t.direction),(l=t.onResizeStart)==null||l.call(t);return}(r==="move"||r==="end")&&s(r,o,t)}},I=(t,e)=>t.dispatchEvent(new CustomEvent("split-resize",{detail:{ratios:e},bubbles:!0})),A=(t,e)=>{const s=t.getBoundingClientRect();return e==="horizontal"?s.width:s.height},Et=({direction:t="horizontal",initialSizes:e=[.5,.5],minSize:s,maxSize:n,persist:r})=>{const o=Se(),l=te(.5),c=te(void 0),i=U(()=>{if(typeof r=="string")return mt();if(r&&typeof r=="object")return r},[r]),v=U(()=>{if(typeof r=="string")return r;if(r&&typeof r=="object")return"default"},[r]),f=vt(i,v,p=>{var m,h;l.current=p;const y=o.shadowRoot;if(!y)return;const w=(m=y.querySelector('slot[name="previous"]'))==null?void 0:m.assignedElements()[0],b=(h=y.querySelector('slot[name="next"]'))==null?void 0:h.assignedElements()[0];if(!w||!b)return;const d=A(o,t),{ratios:u}=H(w,b,p*d,d);I(o,u)}),z=()=>{var Y;const p=o.shadowRoot;if(!p)return;const y=p.querySelector('slot[name="previous"]'),w=p.querySelector('slot[name="next"]'),b=p.querySelector("slot:not([name])");if(!y||!w||!b)return;let d=y.assignedElements()[0],u=w.assignedElements()[0];const m=b.assignedElements().filter(Le=>!Le.hasAttribute("slot"));!d&&m.length>0&&(d=m.shift(),d.setAttribute("slot","previous")),!u&&m.length>0&&(u=m.shift(),u.setAttribute("slot","next"));const h=p.querySelector("cosmoz-resize-handle");if(!d||!u||!h)return;const g=A(o,t),C=re(s,n,g),L=(Y=i==null?void 0:i.get)==null?void 0:Y.call(i,v??""),Ce=L!==void 0?ht(L*g,C):dt(e,C,g),{ratios:W}=H(d,u,Ce,g);l.current=W[0],I(o,W)};return R(()=>{o.setAttribute("data-direction",t);const p=o.shadowRoot,y=p==null?void 0:p.querySelector("cosmoz-resize-handle");y&&y.setAttribute("data-direction",t)},[t]),R(()=>{var m,h;const p=o.shadowRoot;if(!p)return;const y=(m=p.querySelector('slot[name="previous"]'))==null?void 0:m.assignedElements()[0],w=(h=p.querySelector('slot[name="next"]'))==null?void 0:h.assignedElements()[0],b=p.querySelector("cosmoz-resize-handle");if(!y||!w||!b)return;const d=re(s,n,A(o,t)),u=zt({elements:{previous:y,next:w,container:o},direction:t,minSize:d.prevMin,maxSize:d.prevMax,onResize:({ratios:g,px:C})=>{const L=A(o,t);H(y,w,C,L),l.current=g[0],I(o,g)},onResizeEnd:({ratios:g})=>{f==null||f(g[0])}});return c.current=u,b.addEventListener("resize",u),()=>{b.removeEventListener("resize",u),c.current=void 0}},[s,n,f,t]),O`<slot hidden @slotchange=${z}></slot
		><slot name="previous" @slotchange=${z}></slot
		><cosmoz-resize-handle direction=${t}></cosmoz-resize-handle
		><slot name="next" @slotchange=${z}></slot>`};customElements.define("cosmoz-resizable-view",_e(Et,{styleSheets:[bt],observedAttributes:["direction"]}));const{expect:x,waitFor:M}=__STORYBOOK_MODULE_TEST__,Pt={title:"Components/ResizableView",tags:["autodocs"]},B={render:()=>O`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await M(()=>{const s=t.querySelector("#prev");x(s).not.toBeNull()}),x(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered in shadow DOM between named slots",async()=>{await M(()=>{var n;const s=(n=t.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");x(s).not.toBeNull()})}),await e("Panels get initial flex-basis from initialSizes",async()=>{await M(()=>{const s=t.querySelector("#prev");x(s.style.flexBasis).toBe("50%")})})}},N={render:()=>O`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{const s=t.querySelector("cosmoz-resizable-view");await M(()=>{x(s.getAttribute("data-direction")).toBe("vertical")}),await M(()=>{var r;const n=(r=s.shadowRoot)==null?void 0:r.querySelector("cosmoz-resize-handle");x(n==null?void 0:n.getAttribute("data-direction")).toBe("vertical")})})}},q={render:()=>O`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await M(()=>{var r,o;const s=(r=t.shadowRoot)==null?void 0:r.querySelector("cosmoz-resize-handle");x(s).not.toBeNull();const n=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");x(n).not.toBeNull(),x((o=n==null?void 0:n.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle")).not.toBeNull()})})}};var ue,de,he;B.parameters={...B.parameters,docs:{...(ue=B.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(he=(de=B.parameters)==null?void 0:de.docs)==null?void 0:he.source}}};var fe,pe,me;N.parameters={...N.parameters,docs:{...(fe=N.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(me=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ve,be,ye;q.parameters={...q.parameters,docs:{...(ve=q.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ye=(be=q.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};const Rt=["BasicDemo","VerticalDemo","MultiplePanels"];export{B as BasicDemo,q as MultiplePanels,N as VerticalDemo,Rt as __namedExportsOrder,Pt as default};
