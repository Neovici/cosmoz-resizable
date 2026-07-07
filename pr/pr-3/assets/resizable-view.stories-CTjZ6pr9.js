var Le=Object.defineProperty;var Ae=(t,e,s)=>e in t?Le(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var c=(t,e,s)=>Ae(t,typeof e!="symbol"?e+"":e,s);import{B as Be,E as Ne,x as T}from"./iframe-DaTAZja4.js";import"./preload-helper-C1FmrZbK.js";let j,be=0;function Y(t){j=t}function K(){j=null,be=0}function qe(){return be++}const O=Symbol("haunted.phase"),q=Symbol("haunted.hook"),Z=Symbol("haunted.update"),G=Symbol("haunted.commit"),z=Symbol("haunted.effects"),P=Symbol("haunted.layoutEffects"),I="haunted.context";var re,oe,ie;ie=q,oe=z,re=P;class je{constructor(e,s){c(this,"update");c(this,"host");c(this,"virtual");c(this,ie);c(this,oe);c(this,re);this.update=e,this.host=s,this[q]=new Map,this[z]=[],this[P]=[]}run(e){Y(this);let s=e();return K(),s}_runEffects(e){let s=this[e];Y(this);for(let n of s)n.call(this);K()}runEffects(){this._runEffects(z)}runLayoutEffects(){this._runEffects(P)}teardown(){this[q].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}class $e extends Error{constructor(e){const s=e?` <${e}>`:"";super(`Infinite update loop detected in component${s}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name="InfiniteLoopError"}}const Te=100,Oe=Promise.resolve().then.bind(Promise.resolve());function ye(){let t=[],e;function s(){e=null;let n=t;t=[];for(var r=0,o=n.length;r<o;r++)n[r]()}return function(n){t.push(n),e==null&&(e=Oe(s))}}const De=ye(),J=ye();var ae;ae=O;const $=class ${constructor(e,s){c(this,"renderer");c(this,"host");c(this,"state");c(this,ae);c(this,"_updateQueued");c(this,"_active");c(this,"_updateCount");c(this,"_processing");this.renderer=e,this.host=s,this.state=new je(this.update.bind(this),s),this[O]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>$.maxUpdates){const e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new $e(e)}}update(){this._active&&(this._updateQueued||(this._checkForInfiniteLoop(),this._processing=!0,De(()=>{let e=this.handlePhase(Z);J(()=>{this.handlePhase(G,e),J(()=>{this.handlePhase(z),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[O]=e,e){case G:this.commit(s),this.runEffects(P);return;case Z:return this.render();case z:return this.runEffects(z)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}};c($,"maxUpdates",Te);let V=$;const Fe=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},He=t=>t==null?void 0:t.map(e=>typeof e=="string"?Fe(e):e),Ie=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),we=Ie,Ve=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function Qe(t){class e extends V{constructor(o,l,a){super(o,a||l);c(this,"frag");c(this,"renderResult");this.frag=l}commit(o){this.renderResult=t(o,this.frag)}}function s(n,r,o){const l=(o||r||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:i=!0,shadowRootInit:d={},styleSheets:v}=o||r||{},f=He(n.styleSheets||v);class y extends l{constructor(){super();c(this,"_scheduler");if(i===!1)this._scheduler=new e(n,this);else{const u=this.attachShadow({mode:"open",...d});f&&(u.adoptedStyleSheets=f),this._scheduler=new e(n,u,this)}}static get observedAttributes(){return n.observedAttributes||a||[]}connectedCallback(){var u;this._scheduler.resume(),this._scheduler.update(),(u=this._scheduler.renderResult)==null||u.setConnected(!0)}disconnectedCallback(){var u;this._scheduler.pause(),this._scheduler.teardown(),(u=this._scheduler.renderResult)==null||u.setConnected(!1)}attributeChangedCallback(u,b,h){if(b===h)return;let _=h===""?!0:h;Reflect.set(this,Ve(u),_)}}function w(m){let p=m,u=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return p},set(b){u&&p===b||(u=!0,p=b,this._scheduler&&this._scheduler.update())}})}const g=new Proxy(l.prototype,{getPrototypeOf(m){return m},set(m,p,u,b){let h;return p in m?(h=Object.getOwnPropertyDescriptor(m,p),h&&h.set?(h.set.call(b,u),!0):(Reflect.set(m,p,u,b),!0)):(typeof p=="symbol"||p[0]==="_"?h={enumerable:!0,configurable:!0,writable:!0,value:u}:h=w(u),Object.defineProperty(b,p,h),h.set&&h.set.call(b,u),!0)}});return Object.setPrototypeOf(y.prototype,g),y}return s}class E{constructor(e,s){c(this,"id");c(this,"state");this.id=e,this.state=s}}function Ue(t,...e){let s=qe(),n=j[q],r=n.get(s);return r||(r=new t(s,j,...e),n.set(s,r)),r.update(...e)}function S(t){return Ue.bind(null,t)}function ge(t){return S(class extends E{constructor(s,n,r,o){super(s,n);c(this,"callback");c(this,"lastValues");c(this,"values");c(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function xe(t,e){t[z].push(e)}const R=ge(xe),Xe=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,We=S(class extends E{constructor(e,s,n){super(e,s);c(this,"Context");c(this,"value");c(this,"_ranEffect");c(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,xe(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};Xe(this.state.host).dispatchEvent(new CustomEvent(I,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:o}=s;this.value=r?o:e.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function Ye(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();c(this,"listeners");c(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(I,this)}disconnectedCallback(){this.removeEventListener(I,this)}handleEvent(r){const{detail:o}=r;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let o of this.listeners)o(r)}get value(){return this._value}},Consumer:t(function({render:n}){const r=We(s);return n(r)},{useShadowDOM:!1}),defaultValue:e};return s}}const Q=S(class extends E{constructor(e,s,n,r){super(e,s);c(this,"value");c(this,"values");this.value=n(),this.values=r}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}});function Ke(t,e){t[P].push(e)}ge(Ke);S(class extends E{constructor(e,s,n){super(e,s);c(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});S(class extends E{constructor(e,s,n,r,o){super(e,s);c(this,"reducer");c(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=o!==void 0?o(r):r}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const Ze=/([A-Z])/gu;S(class extends E{constructor(e,s,n,r){super(e,s);c(this,"property");c(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Ze,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updater(r,!0))}update(e,s){return[this.state.host[this.property],this.updater]}resolve(e){const s=this.state.host[this.property],n=typeof e=="function"?e:void 0,r=n?n(s):e;return[s,r,n]}notify(e,s){const n=new CustomEvent(this.eventName,{detail:{value:e,updater:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,s=!1){const[n,r,o]=this.resolve(e),l=this.notify(r,o);!s&&l.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}});function Ge(t){let e=t;return{get current(){return e},set current(s){e=s},get value(){return e},set value(s){e=s}}}function ze(t){return Q(()=>Ge(t),[])}const Ee=S(class extends E{update(){return this.state.host}});function Je({render:t}){const e=Qe(t),s=Ye(e);return{component:e,createContext:s}}const{component:Se}=Je({render:Be}),et=we`
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
`,tt=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},k=/^(\d+(?:\.\d+)?)%$/u,_e=/^(\d+(?:\.\d+)?)px$/u,Me=/^(\d+(?:\.\d+)?)vw$/u,Pe=/^(\d+(?:\.\d+)?)vh$/u,U=t=>{const e=t.match(Me);if(e)return Number(e[1])/100*window.innerWidth;const s=t.match(Pe);if(s)return Number(s[1])/100*window.innerHeight;const n=t.match(_e);if(n)return Number(n[1])},ee=t=>{if(typeof t=="number")return t;const e=t.match(k);return e?Number(e[1])/100:void 0},st=t=>typeof t=="number"?t:U(t),nt=(t,e=!1)=>{if(Array.isArray(t))return{ratio:ee(t[0]),absolute:st(t[1])};if(typeof t=="number")return e?{ratio:t}:{absolute:t};const s=ee(t);return s!==void 0?{ratio:s}:{absolute:U(t)}},rt=(t,e,s)=>{const{ratio:n,absolute:r}=t,o=n!==void 0?n*e:void 0;return o!==void 0&&r!==void 0?s?Math.max(o,r):Math.min(o,r):o??r},D=(t,e,s,n=!1)=>{if(t===void 0)return;const r=nt(t,n);return rt(r,e,s)},ot=(t,e)=>typeof t=="string"?_e.test(t)||Me.test(t)||Pe.test(t):typeof t=="number"&&(e?t>1:!0),it=t=>typeof t=="number"&&t>=0&&t<=1||typeof t=="string"&&k.test(t),at=(t,e=!1)=>{if(!Array.isArray(t))return!1;const[s,n]=t;return Array.isArray(s)||Array.isArray(n)?!0:!(it(s)&&ot(n,e))},te=(t,e,s,n=!1)=>{if(t===void 0)return[void 0,void 0];if(at(t,n)){const[r,o]=t;return[D(r,e,s,n),D(o,e,s,n)]}return[D(t,e,s,n),void 0]},se=(t,e,s)=>{const[n,r]=te(t,s,!0),[o,l]=te(e,s,!1);return{prevMin:n,prevMax:o,nextMin:r,nextMax:l}},F=(t,e,s,n)=>{const r=n>0?s/n:0,o=1-r;return t.style.flexBasis=`${r*100}%`,e.style.flexBasis=`${o*100}%`,{ratios:[r,o]}},ct=t=>{var s;if(Array.isArray(t)){const n=t[0];return typeof n=="number"?n:Number(((s=n.match(k))==null?void 0:s[1])??50)/100}if(typeof t=="number")return t;const e=t.match(k);return e?Number(e[1])/100:.5},lt=t=>typeof t=="number"?t:U(t)??0,ut=(t,e,s)=>{var a;const n=t[0];let r;if(Array.isArray(n)){const[i,d]=n,v=typeof i=="number"?i:Number(((a=i.match(k))==null?void 0:a[1])??50)/100;r=Math.min(v*s,lt(d))}else r=ct(n)*s;let o=0,l=s;return e.prevMin!==void 0&&(o=Math.max(o,e.prevMin)),e.prevMax!==void 0&&(l=Math.min(l,e.prevMax)),e.nextMax!==void 0&&(o=Math.max(o,s-e.nextMax)),e.nextMin!==void 0&&(l=Math.min(l,s-e.nextMin)),l<o?e.prevMax??l:Math.max(o,Math.min(r,l))},dt=(t,e)=>{let s=t;return e.prevMin!==void 0&&(s=Math.max(s,e.prevMin)),e.prevMax!==void 0&&(s=Math.min(s,e.prevMax)),Math.max(0,s)},ht=(t="horizontal")=>{const e=Ee();return R(()=>{e.setAttribute("data-direction",t)},[t]),R(()=>{const s=(i,d)=>{const v=tt(d);e.dispatchEvent(new CustomEvent("resize",{detail:{phase:i,mousePosition:v},bubbles:!0}))},n=i=>s("move",i),r=i=>{e.removeAttribute("data-dragging"),s("end",i),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",r)},o=i=>{e.setAttribute("data-dragging","true"),s("start",i),document.addEventListener("mousemove",n),document.addEventListener("mouseup",r),document.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchend",r)},l=i=>{i.preventDefault(),o(i)},a=i=>{i.preventDefault(),o(i)};return e.addEventListener("mousedown",l),e.addEventListener("touchstart",a,{passive:!1}),()=>{e.removeEventListener("mousedown",l),e.removeEventListener("touchstart",a),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",r)}},[e]),null},ft=({direction:t="horizontal"})=>(ht(t),Ne);customElements.define("cosmoz-resize-handle",Se(ft,{styleSheets:[et],observedAttributes:["direction"]}));const ne=t=>typeof t=="number"&&!Number.isNaN(t)&&t>=0&&t<=1?t:void 0,pt=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const n=new Map,r=()=>{s=void 0;for(const[a,i]of n)try{localStorage.setItem(t+a,String(i))}catch{}n.clear()},o=(a,i)=>{n.set(a,i),s===void 0&&(s=setTimeout(r,100))},l=a=>{if(a.key===null||!a.key.startsWith(t)||a.newValue===null)return;const i=a.key.slice(t.length),d=ne(Number(a.newValue));if(d===void 0)return;const v=e.get(i);if(v)for(const f of v)f(d)};return typeof window<"u"&&window.addEventListener("storage",l),{get(a){let i;try{i=localStorage.getItem(t+a)}catch{return}if(i!==null)return ne(Number(i))},set(a,i){o(a,i)},subscribe(a,i){let d=e.get(a);return d||(d=new Set,e.set(a,d)),d.add(i),()=>{const v=e.get(a);v&&(v.delete(i),v.size===0&&e.delete(a))}},destroy(){typeof window<"u"&&window.removeEventListener("storage",l),s!==void 0&&(clearTimeout(s),r())}}},mt=(t,e,s)=>{const n=ze(s);if(n.current=s,R(()=>{var l,a;if(!t||!e)return;const r=t.get(e);r!==void 0&&((l=n.current)==null||l.call(n,r));const o=(a=t.subscribe)==null?void 0:a.call(t,e,i=>{var d;return(d=n.current)==null?void 0:d.call(n,i)});return()=>{var i;o==null||o(),(i=t.destroy)==null||i.call(t)}},[t,e]),!(!t||!e))return r=>t.set(e,r)},vt=we`
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
`,bt=(t,e,s)=>s==="horizontal"?t.x-e.left:t.y-e.top,Re=(t,e)=>e==="horizontal"?t.width:t.height,yt=(t,e,s)=>{let n=t;return e!==void 0&&(n=Math.max(n,e)),s!==void 0&&(n=Math.min(n,s)),Math.max(0,n)},wt=(t,e)=>{const s=e>0?e:1,n=t/s;return[n,1-n]},gt=(t,e,s)=>(t.rect||(t.rect=e.container.getBoundingClientRect(),t.size=Re(t.rect,s)),t.rect),xt=t=>{const e={rect:void 0,size:0},s=(n,r,o)=>{var d,v;const l=gt(e,o.elements,o.direction),a=yt(bt(r,l,o.direction),o.minSize,o.maxSize),i=wt(a,e.size);n==="move"?(d=o.onResize)==null||d.call(o,{ratios:i,px:a}):((v=o.onResizeEnd)==null||v.call(o,{ratios:i}),e.rect=void 0)};return n=>{var l;const{phase:r,mousePosition:o}=n.detail;if(r==="start"){e.rect=t.elements.container.getBoundingClientRect(),e.size=Re(e.rect,t.direction),(l=t.onResizeStart)==null||l.call(t);return}(r==="move"||r==="end")&&s(r,o,t)}},H=(t,e)=>t.dispatchEvent(new CustomEvent("split-resize",{detail:{ratios:e},bubbles:!0})),L=(t,e)=>{const s=t.getBoundingClientRect();return e==="horizontal"?s.width:s.height},zt=({direction:t="horizontal",initialSizes:e=[.5,.5],minSize:s,maxSize:n,persist:r})=>{const o=Ee(),l=ze(.5),a=Q(()=>{if(typeof r=="string")return pt();if(r&&typeof r=="object")return r},[r]),i=Q(()=>{if(typeof r=="string")return r;if(r&&typeof r=="object")return"default"},[r]),d=mt(a,i,f=>{var u,b;l.current=f;const y=o.shadowRoot;if(!y)return;const w=(u=y.querySelector('slot[name="previous"]'))==null?void 0:u.assignedElements()[0],g=(b=y.querySelector('slot[name="next"]'))==null?void 0:b.assignedElements()[0];if(!w||!g)return;const m=L(o,t),{ratios:p}=F(w,g,f*m,m);H(o,p)}),v=()=>{var W;const f=o.shadowRoot;if(!f)return;const y=f.querySelector('slot[name="previous"]'),w=f.querySelector('slot[name="next"]'),g=f.querySelector("slot:not([name])");if(!y||!w||!g)return;let m=y.assignedElements()[0],p=w.assignedElements()[0];const u=g.assignedElements().filter(Ce=>!Ce.hasAttribute("slot"));!m&&u.length>0&&(m=u.shift(),m.setAttribute("slot","previous")),!p&&u.length>0&&(p=u.shift(),p.setAttribute("slot","next"));const b=f.querySelector("cosmoz-resize-handle");if(!m||!p||!b)return;const h=L(o,t),_=se(s,n,h),C=(W=a==null?void 0:a.get)==null?void 0:W.call(a,i??""),ke=C!==void 0?dt(C*h,_):ut(e,_,h),{ratios:X}=F(m,p,ke,h);l.current=X[0],H(o,X)};return R(()=>{o.setAttribute("data-direction",t);const f=o.shadowRoot,y=f==null?void 0:f.querySelector("cosmoz-resize-handle");y&&y.setAttribute("data-direction",t)},[t]),R(()=>{var u,b;const f=o.shadowRoot;if(!f)return;const y=(u=f.querySelector('slot[name="previous"]'))==null?void 0:u.assignedElements()[0],w=(b=f.querySelector('slot[name="next"]'))==null?void 0:b.assignedElements()[0],g=f.querySelector("cosmoz-resize-handle");if(!y||!w||!g)return;const m=se(s,n,L(o,t)),p=xt({elements:{previous:y,next:w,container:o},direction:t,minSize:m.prevMin,maxSize:m.prevMax,onResize:({ratios:h,px:_})=>{const C=L(o,t);F(y,w,_,C),l.current=h[0],H(o,h)},onResizeEnd:({ratios:h})=>{d==null||d(h[0])}});return g.addEventListener("resize",p),()=>{g.removeEventListener("resize",p)}},[s,n,d,t]),T`<slot hidden @slotchange=${v}></slot
		><slot name="previous" @slotchange=${v}></slot
		><cosmoz-resize-handle direction=${t}></cosmoz-resize-handle
		><slot name="next" @slotchange=${v}></slot>`};customElements.define("cosmoz-resizable-view",Se(zt,{styleSheets:[vt],observedAttributes:["direction"]}));const{expect:x,waitFor:M}=__STORYBOOK_MODULE_TEST__,Mt={title:"Components/ResizableView",tags:["autodocs"]},A={render:()=>T`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders both panels",async()=>{await M(()=>{const s=t.querySelector("#prev");x(s).not.toBeNull()}),x(t.querySelector("#next")).not.toBeNull()}),await e("Handle is rendered in shadow DOM between named slots",async()=>{await M(()=>{var n;const s=(n=t.shadowRoot)==null?void 0:n.querySelector("cosmoz-resize-handle");x(s).not.toBeNull()})}),await e("Panels get initial flex-basis from initialSizes",async()=>{await M(()=>{const s=t.querySelector("#prev");x(s.style.flexBasis).toBe("50%")})})}},B={render:()=>T`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders with vertical direction",async()=>{const s=t.querySelector("cosmoz-resizable-view");await M(()=>{x(s.getAttribute("data-direction")).toBe("vertical")}),await M(()=>{var r;const n=(r=s.shadowRoot)==null?void 0:r.querySelector("cosmoz-resize-handle");x(n==null?void 0:n.getAttribute("data-direction")).toBe("vertical")})})}},N={render:()=>T`<cosmoz-resizable-view
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
        </cosmoz-resizable-view>`,async play({canvasElement:t,step:e}){await e("Renders nested resizable views",async()=>{await M(()=>{var r,o;const s=(r=t.shadowRoot)==null?void 0:r.querySelector("cosmoz-resize-handle");x(s).not.toBeNull();const n=t.querySelector("cosmoz-resizable-view cosmoz-resizable-view");x(n).not.toBeNull(),x((o=n==null?void 0:n.shadowRoot)==null?void 0:o.querySelector("cosmoz-resize-handle")).not.toBeNull()})})}};var ce,le,ue;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(le=A.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var de,he,fe;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(fe=(he=B.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var pe,me,ve;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ve=(me=N.parameters)==null?void 0:me.docs)==null?void 0:ve.source}}};const Pt=["BasicDemo","VerticalDemo","MultiplePanels"];export{A as BasicDemo,N as MultiplePanels,B as VerticalDemo,Pt as __namedExportsOrder,Mt as default};
