var ae=Object.defineProperty;var ce=(t,e,s)=>e in t?ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var o=(t,e,s)=>ce(t,typeof e!="symbol"?e+"":e,s);import{B as le,E as de,x}from"./lit-html-BT2NYBOn.js";let R,te=0;function O(t){R=t}function j(){R=null,te=0}function ue(){return te++}const A=Symbol("haunted.phase"),C=Symbol("haunted.hook"),B=Symbol("haunted.update"),F=Symbol("haunted.commit"),v=Symbol("haunted.effects"),E=Symbol("haunted.layoutEffects"),$="haunted.context";var Q,V,U;U=C,V=v,Q=E;class he{constructor(e,s){o(this,"update");o(this,"host");o(this,"virtual");o(this,U);o(this,V);o(this,Q);this.update=e,this.host=s,this[C]=new Map,this[v]=[],this[E]=[]}run(e){O(this);let s=e();return j(),s}_runEffects(e){let s=this[e];O(this);for(let n of s)n.call(this);j()}runEffects(){this._runEffects(v)}runLayoutEffects(){this._runEffects(E)}teardown(){this[C].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}const pe=Promise.resolve().then.bind(Promise.resolve());function se(){let t=[],e;function s(){e=null;let n=t;t=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(n){t.push(n),e==null&&(e=pe(s))}}const fe=se(),T=se();var I;I=A;class me{constructor(e,s){o(this,"renderer");o(this,"host");o(this,"state");o(this,I);o(this,"_updateQueued");o(this,"_active");this.renderer=e,this.host=s,this.state=new he(this.update.bind(this),s),this[A]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(fe(()=>{let e=this.handlePhase(B);T(()=>{this.handlePhase(F,e),T(()=>{this.handlePhase(v)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[A]=e,e){case F:this.commit(s),this.runEffects(E);return;case B:return this.render();case v:return this.runEffects(v)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const be=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},ve=t=>t==null?void 0:t.map(e=>typeof e=="string"?be(e):e),ge=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),ze=ge,ye=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function xe(t){class e extends me{constructor(i,c,a){super(i,a||c);o(this,"frag");o(this,"renderResult");this.frag=c}commit(i){this.renderResult=t(i,this.frag)}}function s(n,r,i){const c=(i||r||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:u=!0,shadowRootInit:h={},styleSheets:b}=i||r||{},P=ve(n.styleSheets||b);class y extends c{constructor(){super();o(this,"_scheduler");if(u===!1)this._scheduler=new e(n,this);else{const l=this.attachShadow({mode:"open",...h});P&&(l.adoptedStyleSheets=P),this._scheduler=new e(n,l,this)}}static get observedAttributes(){return n.observedAttributes||a||[]}connectedCallback(){var l;this._scheduler.resume(),this._scheduler.update(),(l=this._scheduler.renderResult)==null||l.setConnected(!0)}disconnectedCallback(){var l;this._scheduler.pause(),this._scheduler.teardown(),(l=this._scheduler.renderResult)==null||l.setConnected(!1)}attributeChangedCallback(l,f,d){if(f===d)return;let oe=d===""?!0:d;Reflect.set(this,ye(l),oe)}}function k(m){let p=m,l=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return p},set(f){l&&p===f||(l=!0,p=f,this._scheduler&&this._scheduler.update())}})}const ie=new Proxy(c.prototype,{getPrototypeOf(m){return m},set(m,p,l,f){let d;return p in m?(d=Object.getOwnPropertyDescriptor(m,p),d&&d.set?(d.set.call(f,l),!0):(Reflect.set(m,p,l,f),!0)):(typeof p=="symbol"||p[0]==="_"?d={enumerable:!0,configurable:!0,writable:!0,value:l}:d=k(l),Object.defineProperty(f,p,d),d.set&&d.set.call(f,l),!0)}});return Object.setPrototypeOf(y.prototype,ie),y}return s}class g{constructor(e,s){o(this,"id");o(this,"state");this.id=e,this.state=s}}function we(t,...e){let s=ue(),n=R[C],r=n.get(s);return r||(r=new t(s,R,...e),n.set(s,r)),r.update(...e)}function z(t){return we.bind(null,t)}function ne(t){return z(class extends g{constructor(s,n,r,i){super(s,n);o(this,"callback");o(this,"lastValues");o(this,"values");o(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function re(t,e){t[v].push(e)}const N=ne(re),Se=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,_e=z(class extends g{constructor(e,s,n){super(e,s);o(this,"Context");o(this,"value");o(this,"_ranEffect");o(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,re(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};Se(this.state.host).dispatchEvent(new CustomEvent($,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:i}=s;this.value=r?i:e.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function Ee(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();o(this,"listeners");o(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener($,this)}disconnectedCallback(){this.removeEventListener($,this)}handleEvent(r){const{detail:i}=r;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let i of this.listeners)i(r)}get value(){return this._value}},Consumer:t(function({render:n}){const r=_e(s);return n(r)},{useShadowDOM:!1}),defaultValue:e};return s}}z(class extends g{constructor(e,s,n,r){super(e,s);o(this,"value");o(this,"values");this.value=n(),this.values=r}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}});function Pe(t,e){t[E].push(e)}ne(Pe);const D=z(class extends g{constructor(e,s,n){super(e,s);o(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});z(class extends g{constructor(e,s,n,r,i){super(e,s);o(this,"reducer");o(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(r):r}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const ke=/([A-Z])/gu;z(class extends g{constructor(e,s,n,r){super(e,s);o(this,"property");o(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(ke,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updateProp(r))}update(e,s){return[this.state.host[this.property],this.updater]}updater(e){const s=this.state.host[this.property];typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const s=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(s),s}});function Ce({render:t}){const e=xe(t),s=Ee(e);return{component:e,createContext:s}}const{component:L}=Ce({render:le}),Re=ze` <style>
      :host {
        display: block;
        background: var(--cz-resize-handle-background, #e0e0e0);
        user-select: none;
        position: relative;
        z-index: 1;
      }

      :host([data-direction='horizontal']) {
        min-height: 100%;
        width: var(--cz-resize-handle-size, 4px);
        cursor: col-resize;
      }

      :host([data-direction='vertical']) {
        height: var(--cz-resize-handle-size, 4px);
        width: 100%;
        cursor: row-resize;
      }

      :host(:hover) {
        background: var(--cz-resize-handle-hover-background, #ccc);
      }

      :host([data-dragging]) {
        background: var(--cz-resize-handle-dragging-background, #007acc);
        cursor: grabbing;
      }
    </style>`,De=z(class extends g{update(){return this.state.host}}),H=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},Me=()=>{const t=De(),e=()=>t.resizer&&"direction"in t.resizer?t.resizer.direction:"horizontal",s=()=>{const i=t.parentElement;if(!i)return null;const c=Array.from(i.children),a=c.indexOf(t),u=c[a-1],h=c[a+1];return!u||!h?null:{previous:u,next:h,container:i}},n=i=>{const c=s();if(!c||!t.resizer)return;const a=t.resizer(i,c);a&&t.dispatchEvent(new CustomEvent("resize",{detail:{mousePosition:i,previousSize:a.previousSize,nextSize:a.nextSize},bubbles:!0}))},r=i=>{i.preventDefault();const c=H(i);t.setAttribute("data-dragging","true"),t.dispatchEvent(new CustomEvent("resize-start",{detail:{mousePosition:c},bubbles:!0}));const a=h=>{const b=H(h);n(b)},u=()=>{t.removeAttribute("data-dragging"),t.dispatchEvent(new CustomEvent("resize-end",{detail:{},bubbles:!0})),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",u)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",u)};return N(()=>{const i=e();t.setAttribute("data-direction",i)},[t.resizer]),N(()=>(t.addEventListener("mousedown",r),()=>{t.removeEventListener("mousedown",r)}),[]),null},Le=()=>(Me(),de);customElements.define("cosmoz-resizable",L(Le,{styleSheets:[Re]}));const M=t=>{const e=(r,i,c)=>{let a;return c==="horizontal"?a=(r.x-i.left)/i.width*100:a=(r.y-i.top)/i.height*100,Math.max(0,Math.min(100,a))},s=(r,i,c,a)=>{const u=`${a}%`,h=`${100-a}%`;c==="horizontal"?(r.style.width=u,i.style.width=h):(r.style.height=u,i.style.height=h)},n=(r,i)=>{const{previous:c,next:a,container:u}=i,{direction:h,onResize:b}=t,P=u.getBoundingClientRect(),y=e(r,P,h);s(c,a,h,y);const k={previousSize:`${y}%`,nextSize:`${100-y}%`};return b==null||b(k),k};return n.direction=t.direction,n.onResize=t.onResize,n},Ae=()=>{const[t,e]=D(),[s,n]=D(),i=M({direction:"horizontal",onResize:({previousSize:c,nextSize:a})=>{e(c),n(a)}});return x`
    <style>
      .container {
        display: flex;
        height: 400px;
        width: 600px;
        border: 1px solid #ccc;
        margin: 20px;
      }

      .panel {
        background: #f5f5f5;
        border: 1px solid #ddd;
        padding: 20px;
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
        width: 50%;
      }

      .left-panel {
        background: linear-gradient(45deg, #ff6b6b, #ffa726);
        color: white;
      }

      .right-panel {
        background: linear-gradient(45deg, #4ecdc4, #45b7d1);
        color: white;
      }

      .stats {
        margin: 20px;
        padding: 10px;
        background: #f9f9f9;
        border-radius: 4px;
        font-family: monospace;
      }

      h1 {
        margin: 20px;
        font-family: Arial, sans-serif;
      }
    </style>

    <h1>Pion Split Demo - Horizontal Split</h1>

    <div class="stats">
      <p>Left Panel Size: ${t||"50%"}</p>
      <p>Right Panel Size: ${s||"50%"}</p>
    </div>

    <div class="container">
      <div class="panel left-panel">
        <div>
          <h3>Left Panel</h3>
        </div>
      </div>

      <cosmoz-resizable .resizer=${i}></cosmoz-resizable>

      <div class="panel right-panel">
        <div>
          <h3>Right Panel</h3>
        </div>
      </div>
    </div>
  `};customElements.define("basic-demo",L(Ae,{useShadowDOM:!0}));const $e=()=>{const[t,e]=D(),[s,n]=D(),i=M({direction:"vertical",onResize:({previousSize:c,nextSize:a})=>{e(c),n(a)}});return x`
    <style>
      .container {
        display: flex;
        flex-direction: column;
        height: 600px;
        width: 600px;
        border: 1px solid #ccc;
      }

      .panel {
        background: #f5f5f5;
        padding: 20px;
        border: 1px solid #ddd;
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
        width: 100%;
        height: 100%;
      }

      .stats {
        margin: 20px;
        padding: 10px;
        background: #f9f9f9;
        border-radius: 4px;
        font-family: monospace;
      }

      .top-panel {
        background: linear-gradient(45deg, #ff6b6b, #ffa726);
        color: white;
      }

      .bottom-panel {
        background: linear-gradient(45deg, #4ecdc4, #45b7d1);
        color: white;
      }

      h1 {
        margin: 20px;
        font-family: Arial, sans-serif;
      }
    </style>

    <h1>Pion Split Demo - Vertical Split</h1>

    <div class="stats">
      <p>Top Panel Size: ${t||"50%"}</p>
      <p>Bottom Panel Size: ${s||"50%"}</p>
    </div>

    <div class="container">
      <div class="panel top-panel">
        <div>
          <h3>Top Panel</h3>
        </div>
      </div>

      <cosmoz-resizable .resizer=${i}></cosmoz-resizable>

      <div class="panel bottom-panel">
        <div>
          <h3>Bottom Panel</h3>
        </div>
      </div>
    </div>
  `};customElements.define("vertical-demo",L($e,{useShadowDOM:!0}));const Oe=()=>{const t=M({direction:"horizontal"}),e=M({direction:"vertical"});return x`
    <style>
      .container {
        display: flex;
        height: 400px;
        width: 600px;
        border: 1px solid #ccc;
        margin: 0 20px;
      }

      .panel {
        background: #f5f5f5;
        border: 1px solid #ddd;
        padding: 20px;
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
        width: 50%;
      }

      .left-panel {
        background: linear-gradient(45deg, #ff6b6b, #ffa726);
        color: white;
      }

      .right-panel {
        background: linear-gradient(45deg, #4ecdc4, #45b7d1);
        color: white;
      }

      .container-vertical {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
      }

      .vertical-panel {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        border: 1px solid #ccc;
        overflow: auto;
      }

      .vertical-panel.vertical-top-panel {
        background: linear-gradient(45deg, #ff6b6b, #ffa726);
        color: white;
        padding: 10px 0;
      }

      .vertical-panel.vertical-bottom-panel {
        background: linear-gradient(45deg, #4ecdc4, #45b7d1);
        color: white;
        padding: 10px 0;
      }

      h1 {
        margin: 20px;
        font-family: Arial, sans-serif;
      }
    </style>

    <h1>Pion Split Demo - Multiple Splits</h1>

    <div class="container">
      <div class="panel left-panel">
        <div>
          <h3>Left Panel</h3>
        </div>
      </div>

      <cosmoz-resizable .resizer=${t}></cosmoz-resizable>

      <div class="panel right-panel">
        <div>
          <h3>Right Panel</h3>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="panel left-panel">
        <div>
          <h3>Left Panel</h3>
        </div>
      </div>

      <cosmoz-resizable .resizer=${t}></cosmoz-resizable>

      <div class="panel right-panel">
        <div class="container-vertical">
          <h3>Vertical Panel</h3>

          <div class="vertical-panel vertical-top-panel">
            <div>
              <h3>Top Panel</h3>
            </div>
          </div>

          <cosmoz-resizable .resizer=${e}></cosmoz-resizable>

          <div class="vertical-panel vertical-top-panel">
            <div>
              <h3>Bottom Panel</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  `};customElements.define("multiple-panels",L(Oe,{useShadowDOM:!0}));const Fe={title:"Components/PionSplit",tags:["autodocs"]},w=()=>x`<basic-demo></basic-demo>`;w.parameters={docs:{description:{story:"Basic demo for the cosmoz-resizable component."}}};const S=()=>x`<vertical-demo></vertical-demo>`;S.parameters={docs:{description:{story:"Vertical split demo for the cosmoz-resizable component."}}};const _=()=>x`<multiple-panels></multiple-panels>`;_.parameters={docs:{description:{story:"Demo with multiple panels using the cosmoz-resizable component."}}};var X,Y,Z;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:"() => {\n  return html`<basic-demo></basic-demo>`;\n}",...(Z=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var q,G,J;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:"() => {\n  return html`<vertical-demo></vertical-demo>`;\n}",...(J=(G=S.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,W,ee;_.parameters={..._.parameters,docs:{...(K=_.parameters)==null?void 0:K.docs,source:{originalSource:"() => {\n  return html`<multiple-panels></multiple-panels>`;\n}",...(ee=(W=_.parameters)==null?void 0:W.docs)==null?void 0:ee.source}}};const Te=["BasicDemo","VerticalDemo","MultiplePanels"];export{w as BasicDemo,_ as MultiplePanels,S as VerticalDemo,Te as __namedExportsOrder,Fe as default};
