var Re=Object.defineProperty;var Le=(t,e,s)=>e in t?Re(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var a=(t,e,s)=>Le(t,typeof e!="symbol"?e+"":e,s);import{B as Ae,E as Be,x as T}from"./iframe-D9UuqIcA.js";import"./preload-helper-C1FmrZbK.js";let j,ye=0;function K(t){j=t}function Z(){j=null,ye=0}function Ne(){return ye++}const q=Symbol("haunted.phase"),N=Symbol("haunted.hook"),G=Symbol("haunted.update"),J=Symbol("haunted.commit"),g=Symbol("haunted.effects"),_=Symbol("haunted.layoutEffects"),V="haunted.context";var ie,oe,ae;ae=N,oe=g,ie=_;class je{constructor(e,s){a(this,"update");a(this,"host");a(this,"virtual");a(this,ae);a(this,oe);a(this,ie);this.update=e,this.host=s,this[N]=new Map,this[g]=[],this[_]=[]}run(e){K(this);let s=e();return Z(),s}_runEffects(e){let s=this[e];K(this);for(let n of s)n.call(this);Z()}runEffects(){this._runEffects(g)}runLayoutEffects(){this._runEffects(_)}teardown(){this[N].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class $e extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const Te=100,qe=Promise.resolve().then.bind(Promise.resolve());function we(){let t=[],e;function s(){e=null;let n=t;t=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(n){t.push(n),e==null&&(e=qe(s))}}const Oe=we(),ee=we();var ce;ce=q;const $=class ${constructor(e,s){a(this,"renderer");a(this,"host");a(this,"state");a(this,ce);a(this,"_updateQueued");a(this,"_active");a(this,"_updateCount");a(this,"_processing");this.renderer=e,this.host=s,this.state=new je(this.update.bind(this),s),this[q]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>$.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new $e(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,Oe(()=>{let e=this.handlePhase(G);ee(()=>{this.handlePhase(J,e),ee(()=>{this.handlePhase(g),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[q]=e,e){case J:this.commit(s),this.runEffects(_);return;case G:return this.render();case g:return this.runEffects(g)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};a($,"maxUpdates",Te);let Q=$;const He=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},De=t=>t==null?void 0:t.map(e=>typeof e=="string"?He(e):e),Fe=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),ge=Fe,Ie=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function Ve(t){class e extends Q{constructor(i,l,c){super(i,c||l);a(this,"frag");a(this,"renderResult");this.frag=l}commit(i){this.renderResult=t(i,this.frag)}}function s(n,r,i){const l=(i||r||{}).baseElement||HTMLElement,{observedAttributes:c=[],useShadowDOM:o=!0,shadowRootInit:f={},styleSheets:m}=i||r||{},y=De(n.styleSheets||m);class k extends l{constructor(){super();a(this,"_scheduler");if(o===!1)this._scheduler=new e(n,this);else{const u=this.attachShadow({mode:"open",...f});y&&(u.adoptedStyleSheets=y),this._scheduler=new e(n,u,this)}}static get observedAttributes(){return n.observedAttributes||c||[]}connectedCallback(){var u;this._scheduler.resume(),this._scheduler.update(),(u=this._scheduler.renderResult)==null||u.setConnected(!0)}disconnectedCallback(){var u;this._scheduler.pause(),this._scheduler.teardown(),(u=this._scheduler.renderResult)==null||u.setConnected(!1)}attributeChangedCallback(u,p,h){if(p===h)return;let v=h===""?!0:h;Reflect.set(this,Ie(u),v)}}function C(b){let d=b,u=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return d},set(p){u&&d===p||(u=!0,d=p,this._scheduler&&this._scheduler.update())}})}const E=new Proxy(l.prototype,{getPrototypeOf(b){return b},set(b,d,u,p){let h;return d in b?(h=Object.getOwnPropertyDescriptor(b,d),h&&h.set?(h.set.call(p,u),!0):(Reflect.set(b,d,u,p),!0)):(typeof d=="symbol"||d[0]==="_"?h={enumerable:!0,configurable:!0,writable:!0,value:u}:h=C(u),Object.defineProperty(p,d,h),h.set&&h.set.call(p,u),!0)}});return Object.setPrototypeOf(k.prototype,E),k}return s}class x{constructor(e,s){a(this,"id");a(this,"state");this.id=e,this.state=s}}function Qe(t,...e){let s=Ne(),n=j[N],r=n.get(s);return r||(r=new t(s,j,...e),n.set(s,r)),r.update(...e)}function z(t){return Qe.bind(null,t)}function xe(t){return z(class extends x{constructor(s,n,r,i){super(s,n);a(this,"callback");a(this,"lastValues");a(this,"values");a(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function ze(t,e){t[g].push(e)}const M=xe(ze),Ue=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Xe=z(class extends x{constructor(e,s,n){super(e,s);a(this,"Context");a(this,"value");a(this,"_ranEffect");a(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,ze(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};Ue(this.state.host).dispatchEvent(new CustomEvent(V,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:i}=s;this.value=r?i:e.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function We(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();a(this,"listeners");a(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(V,this)}disconnectedCallback(){this.removeEventListener(V,this)}handleEvent(r){const{detail:i}=r;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let i of this.listeners)i(r)}get value(){return this._value}},Consumer:t(function({render:n}){const r=Xe(s);return n(r)},{useShadowDOM:!1}),defaultValue:e};return s}}const U=z(class extends x{constructor(e,s,n,r){super(e,s);a(this,"value");a(this,"values");this.value=n(),this.values=r}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}});function Ye(t,e){t[_].push(e)}xe(Ye);z(class extends x{constructor(e,s,n){super(e,s);a(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});z(class extends x{constructor(e,s,n,r,i){super(e,s);a(this,"reducer");a(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(r):r}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const Ke=/([A-Z])/gu;z(class extends x{constructor(e,s,n,r){super(e,s);a(this,"property");a(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Ke,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updater(r,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],n=typeof e=="function"?e:void 0,r=n?n(s):e;return[s,r,n]}notify(e,s){const n=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,s=!1){const[n,r,i]=this.resolve(e),l=this.notify(r,i);!s&&l.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}});function Ze(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function O(t){return U(()=>Ze(t),[])}const Ee=z(class extends x{update(){return this.state.host}});function Ge({render:t}){const e=Ve(t),s=We(e);return{component:e,createContext:s}}const{component:_e}=Ge({render:Ae}),Je=ge`
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
`,et=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},P=/^(\d+(?:\.\d+)?)%$/u,Se=/^(\d+(?:\.\d+)?)px$/u,Me=/^(\d+(?:\.\d+)?)vw$/u,Pe=/^(\d+(?:\.\d+)?)vh$/u,X=t=>{const e=t.match(Me);if(e)return Number(e[1])/100*window.innerWidth;const s=t.match(Pe);if(s)return Number(s[1])/100*window.innerHeight;const n=t.match(Se);if(n)return Number(n[1])},te=t=>{if(typeof t=="number")return t;const e=t.match(P);return e?Number(e[1])/100:void 0},tt=t=>typeof t=="number"?t:X(t),st=(t,e=!1)=>{if(Array.isArray(t))return{ratio:te(t[0]),absolute:tt(t[1])};if(typeof t=="number")return e?{ratio:t}:{absolute:t};const s=te(t);return s!==void 0?{ratio:s}:{absolute:X(t)}},nt=(t,e,s)=>{const{ratio:n,absolute:r}=t,i=n!==void 0?n*e:void 0;return i!==void 0&&r!==void 0?s?Math.max(i,r):Math.min(i,r):i??r},H=(t,e,s,n=!1)=>{if(t===void 0)return;const r=st(t,n);return nt(r,e,s)},rt=(t,e)=>typeof t=="string"?Se.test(t)||Me.test(t)||Pe.test(t):typeof t=="number"&&(e?t>1:!0),it=t=>typeof t=="number"&&t>=0&&t<=1||typeof t=="string"&&P.test(t),ot=(t,e=!1)=>{if(!Array.isArray(t))return!1;const[s,n]=t;return Array.isArray(s)||Array.isArray(n)?!0:!(it(s)&&rt(n,e))},se=(t,e,s,n=!1)=>{if(t===void 0)return[void 0,void 0];if(ot(t,n)){const[r,i]=t;return[H(r,e,s,n),H(i,e,s,n)]}return[H(t,e,s,n),void 0]},ne=(t,e,s)=>{const[n,r]=se(t,s,!0),[i,l]=se(e,s,!1);return{prevMin:n,prevMax:i,nextMin:r,nextMax:l}},D=(t,e,s,n)=>{const r=n>0?s/n:0,i=1-r;return t.style.flexBasis=`${r*100}%`,e.style.flexBasis=`${i*100}%`,{ratios:[r,i]}},at=t=>{var s;if(Array.isArray(t)){const n=t[0];return typeof n=="number"?n:Number(((s=n.match(P))==null?void 0:s[1])??50)/100}if(typeof t=="number")return t;const e=t.match(P);return e?Number(e[1])/100:.5},ct=t=>typeof t=="number"?t:X(t)??0,ut=(t,e,s)=>{var c;const n=t[0];let r;if(Array.isArray(n)){const[o,f]=n,m=typeof o=="number"?o:Number(((c=o.match(P))==null?void 0:c[1])??50)/100;r=Math.min(m*s,ct(f))}else r=at(n)*s;let i=0,l=s;return e.prevMin!==void 0&&(i=Math.max(i,e.prevMin)),e.prevMax!==void 0&&(l=Math.min(l,e.prevMax)),e.nextMax!==void 0&&(i=Math.max(i,s-e.nextMax)),e.nextMin!==void 0&&(l=Math.min(l,s-e.nextMin)),l<i?e.prevMax??l:Math.max(i,Math.min(r,l))},lt=(t,e)=>{let s=t;return e.prevMin!==void 0&&(s=Math.max(s,e.prevMin)),e.prevMax!==void 0&&(s=Math.min(s,e.prevMax)),Math.max(0,s)},dt=(t="horizontal")=>{const e=Ee();return M(()=>{e.setAttribute("data-direction",t)},[t]),M(()=>{const s=(o,f)=>{const m=et(f);e.dispatchEvent(new CustomEvent("resize",{detail:{phase:o,mousePosition:m},bubbles:!0}))},n=o=>s("move",o),r=o=>{e.removeAttribute("data-dragging"),s("end",o),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",r)},i=o=>{e.setAttribute("data-dragging","true"),s("start",o),document.addEventListener("mousemove",n),document.addEventListener("mouseup",r),document.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchend",r)},l=o=>{o.preventDefault(),i(o)},c=o=>{o.preventDefault(),i(o)};return e.addEventListener("mousedown",l),e.addEventListener("touchstart",c,{passive:!1}),()=>{e.removeEventListener("mousedown",l),e.removeEventListener("touchstart",c),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",r)}},[e]),null},ht=({direction:t="horizontal"})=>(dt(t),Be);customElements.define("cosmoz-resize-handle",_e(ht,{styleSheets:[Je],observedAttributes:["direction"]}));const re=t=>typeof t=="number"&&!Number.isNaN(t)&&t>=0&&t<=1?t:void 0,ft=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const n=new Map,r=()=>{s=void 0;for(const[c,o]of n)try{localStorage.setItem(t+c,String(o))}catch{}n.clear()},i=(c,o)=>{n.set(c,o),s===void 0&&(s=setTimeout(r,100))},l=c=>{if(c.key===null||!c.key.startsWith(t)||c.newValue===null)return;const o=c.key.slice(t.length),f=re(Number(c.newValue));if(f===void 0)return;const m=e.get(o);if(m)for(const y of m)y(f)};return typeof window<"u"&&window.addEventListener("storage",l),{get(c){let o;try{o=localStorage.getItem(t+c)}catch{return}if(o!==null)return re(Number(o))},set(c,o){i(c,o)},subscribe(c,o){let f=e.get(c);return f||(f=new Set,e.set(c,f)),f.add(o),()=>{const m=e.get(c);m&&(m.delete(o),m.size===0&&e.delete(c))}}}},pt=(t,e,s)=>{if(M(()=>{var i;if(!t||!e)return;const n=t.get(e);return n!==void 0&&s(n),(i=t.subscribe)==null?void 0:i.call(t,e,s)},[t,e,s]),!(!t||!e))return n=>t.set(e,n)},mt=ge`
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
`,vt=(t,e,s)=>s==="horizontal"?t.x-e.left:t.y-e.top,ke=(t,e)=>e==="horizontal"?t.width:t.height,bt=(t,e,s)=>{let n=t;return e!==void 0&&(n=Math.max(n,e)),s!==void 0&&(n=Math.min(n,s)),Math.max(0,n)},yt=(t,e)=>{const s=e>0?e:1,n=t/s;return[n,1-n]},wt=(t,e,s)=>(t.rect||(t.rect=e.container.getBoundingClientRect(),t.size=ke(t.rect,s)),t.rect),gt=t=>{const e={rect:void 0,size:0},s=(n,r,i)=>{var f,m;const l=wt(e,i.elements,i.direction),c=bt(vt(r,l,i.direction),i.minSize,i.maxSize),o=yt(c,e.size);n==="move"?(f=i.onResize)==null||f.call(i,{ratios:o,px:c}):((m=i.onResizeEnd)==null||m.call(i,{ratios:o}),e.rect=void 0)};return n=>{var l;const{phase:r,mousePosition:i}=n.detail;if(r==="start"){e.rect=t.elements.container.getBoundingClientRect(),e.size=ke(e.rect,t.direction),(l=t.onResizeStart)==null||l.call(t);return}(r==="move"||r==="end")&&s(r,i,t)}},F=(t,e)=>t.dispatchEvent(new CustomEvent("split-resize",{detail:{ratios:e},bubbles:!0})),I=(t,e)=>{const s=t.getBoundingClientRect();return e==="horizontal"?s.width:s.height},xt=({direction:t="horizontal",initialSizes:e=[.5,.5],minSize:s,maxSize:n,persist:r})=>{const i=Ee(),l=O(void 0),c=O(.5),o=O(void 0),f=U(()=>{if(typeof r=="string")return ft();if(r&&typeof r=="object")return r},[r]),m=U(()=>{if(typeof r=="string")return r;if(r&&typeof r=="object")return"default"},[r]),y=pt(f,m,d=>{c.current=d;const u=l.current;if(!u)return;const p=I(i,t),{ratios:h}=D(u.previous,u.next,d*p,p);F(i,h)}),k=(d,u,p)=>{var Y;const h=I(p,t),v=ne(s,n,h),R=(Y=f==null?void 0:f.get)==null?void 0:Y.call(f,m??""),Ce=R!==void 0?lt(R*h,v):ut(e,v,h),{ratios:W}=D(d,u,Ce,h);c.current=W[0],F(i,W)},C=()=>{const d=l.current;if(!d)return;const u=I(i,t),p=ne(s,n,u),h=gt({elements:{previous:d.previous,next:d.next,container:i},direction:t,minSize:p.prevMin,maxSize:p.prevMax,onResize:({ratios:v,px:R})=>{D(d.previous,d.next,R,u),c.current=v[0],F(i,v)},onResizeEnd:({ratios:v})=>{y==null||y(v[0])}});o.current=h,d.handle.addEventListener("resize",h)},E=()=>{const d=l.current,u=o.current;d&&u&&d.handle.removeEventListener("resize",u),o.current=void 0},b=()=>{const d=Array.from(i.children).filter(v=>v.tagName.toLowerCase()!=="cosmoz-resize-handle");if(d.length<2)return;const[u,p]=d;let h=i.querySelector("cosmoz-resize-handle");h?h!==u.nextElementSibling&&i.insertBefore(h,p):(h=document.createElement("cosmoz-resize-handle"),i.insertBefore(h,p)),h.setAttribute("data-direction",t),l.current={previous:u,next:p,handle:h},k(u,p,i),E(),C()};return M(()=>{i.setAttribute("data-direction",t);const d=l.current;d&&d.handle.setAttribute("data-direction",t)},[t]),M(()=>{if(l.current)return E(),C(),E},[s,n,y,t]),T`<slot @slotchange=${()=>b()}></slot>`};customElements.define("cosmoz-resizable-view",_e(xt,{styleSheets:[mt],observedAttributes:["direction"]}));const{expect:w,waitFor:S}=__STORYBOOK_MODULE_TEST__,St={title:"Components/ResizableView",tags:["autodocs"]},L={render:()=>T`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await S(()=>{const s=t.querySelector("#prev");w(s).not.toBeNull()}),w(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered between panels",async()=>{await S(()=>{const s=t.querySelector("cosmoz-resize-handle");w(s).not.toBeNull()})}),await e("Panels get initial flex-basis from initialSizes",async()=>{await S(()=>{const s=t.querySelector("#prev");w(s.style.flexBasis).toBe("50%")})})}},A={render:()=>T`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{await S(()=>{const s=t.querySelector("cosmoz-resize-handle");w(s==null?void 0:s.getAttribute("data-direction")).toBe("vertical")})})}},B={render:()=>T`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await S(()=>{const s=t.querySelector("cosmoz-resizable-view");w(s).not.toBeNull();const n=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");w(n).not.toBeNull()})})}};var ue,le,de;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
    await step('Handle is rendered between panels', async () => {
      await waitFor(() => {
        const handle = canvasElement.querySelector('cosmoz-resize-handle');
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
}`,...(de=(le=L.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var he,fe,pe;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
      await waitFor(() => {
        const handle = canvasElement.querySelector('cosmoz-resize-handle');
        expect(handle?.getAttribute('data-direction')).toBe('vertical');
      });
    });
  }
}`,...(pe=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:pe.source}}};var me,ve,be;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
        const outer = canvasElement.querySelector('cosmoz-resizable-view');
        expect(outer).not.toBeNull();
        const inner = canvasElement.querySelector('cosmoz-resizable-view cosmoz-resizable-view');
        expect(inner).not.toBeNull();
      });
    });
  }
}`,...(be=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};const Mt=["BasicDemo","VerticalDemo","MultiplePanels"];export{L as BasicDemo,B as MultiplePanels,A as VerticalDemo,Mt as __namedExportsOrder,St as default};
