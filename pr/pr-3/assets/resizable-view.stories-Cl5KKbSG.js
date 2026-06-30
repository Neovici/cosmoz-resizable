var ke=Object.defineProperty;var Ce=(t,e,s)=>e in t?ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var l=(t,e,s)=>Ce(t,typeof e!="symbol"?e+"":e,s);import{B as Ae,E as Re,x as z}from"./lit-html-BT2NYBOn.js";let V,ge=0;function K(t){V=t}function Z(){V=null,ge=0}function Le(){return ge++}const T=Symbol("haunted.phase"),j=Symbol("haunted.hook"),G=Symbol("haunted.update"),J=Symbol("haunted.commit"),w=Symbol("haunted.effects"),C=Symbol("haunted.layoutEffects"),U="haunted.context";var ie,oe,ae;ae=j,oe=w,ie=C;class $e{constructor(e,s){l(this,"update");l(this,"host");l(this,"virtual");l(this,ae);l(this,oe);l(this,ie);this.update=e,this.host=s,this[j]=new Map,this[w]=[],this[C]=[]}run(e){K(this);let s=e();return Z(),s}_runEffects(e){let s=this[e];K(this);for(let n of s)n.call(this);Z()}runEffects(){this._runEffects(w)}runLayoutEffects(){this._runEffects(C)}teardown(){this[j].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}const De=Promise.resolve().then.bind(Promise.resolve());function xe(){let t=[],e;function s(){e=null;let n=t;t=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(n){t.push(n),e==null&&(e=De(s))}}const Oe=xe(),ee=xe();var ue;ue=T;class Be{constructor(e,s){l(this,"renderer");l(this,"host");l(this,"state");l(this,ue);l(this,"_updateQueued");l(this,"_active");this.renderer=e,this.host=s,this.state=new $e(this.update.bind(this),s),this[T]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(Oe(()=>{let e=this.handlePhase(G);ee(()=>{this.handlePhase(J,e),ee(()=>{this.handlePhase(w)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[T]=e,e){case J:this.commit(s),this.runEffects(C);return;case G:return this.render();case w:return this.runEffects(w)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const Ne=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},je=t=>t==null?void 0:t.map(e=>typeof e=="string"?Ne(e):e),Ve=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),ye=Ve,He=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function Te(t){class e extends Be{constructor(i,d,u){super(i,u||d);l(this,"frag");l(this,"renderResult");this.frag=d}commit(i){this.renderResult=t(i,this.frag)}}function s(n,r,i){const d=(i||r||{}).baseElement||HTMLElement,{observedAttributes:u=[],useShadowDOM:o=!0,shadowRootInit:p={},styleSheets:m}=i||r||{},b=je(n.styleSheets||m);class $ extends d{constructor(){super();l(this,"_scheduler");if(o===!1)this._scheduler=new e(n,this);else{const a=this.attachShadow({mode:"open",...p});b&&(a.adoptedStyleSheets=b),this._scheduler=new e(n,a,this)}}static get observedAttributes(){return n.observedAttributes||u||[]}connectedCallback(){var a;this._scheduler.resume(),this._scheduler.update(),(a=this._scheduler.renderResult)==null||a.setConnected(!0)}disconnectedCallback(){var a;this._scheduler.pause(),this._scheduler.teardown(),(a=this._scheduler.renderResult)==null||a.setConnected(!1)}attributeChangedCallback(a,f,h){if(f===h)return;let v=h===""?!0:h;Reflect.set(this,He(a),v)}}function D(g){let c=g,a=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return c},set(f){a&&c===f||(a=!0,c=f,this._scheduler&&this._scheduler.update())}})}const M=new Proxy(d.prototype,{getPrototypeOf(g){return g},set(g,c,a,f){let h;return c in g?(h=Object.getOwnPropertyDescriptor(g,c),h&&h.set?(h.set.call(f,a),!0):(Reflect.set(g,c,a,f),!0)):(typeof c=="symbol"||c[0]==="_"?h={enumerable:!0,configurable:!0,writable:!0,value:a}:h=D(a),Object.defineProperty(f,c,h),h.set&&h.set.call(f,a),!0)}});return Object.setPrototypeOf($.prototype,M),$}return s}class x{constructor(e,s){l(this,"id");l(this,"state");this.id=e,this.state=s}}function Ie(t,...e){let s=Le(),n=V[j],r=n.get(s);return r||(r=new t(s,V,...e),n.set(s,r)),r.update(...e)}function y(t){return Ie.bind(null,t)}function we(t){return y(class extends x{constructor(s,n,r,i){super(s,n);l(this,"callback");l(this,"lastValues");l(this,"values");l(this,"_teardown");t(n,this)}update(s,n){this.callback=s,this.values=n}call(){const s=!this.values||this.hasChanged();this.lastValues=this.values,s&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(s){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),s&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((s,n)=>this.lastValues[n]!==s)}})}function ze(t,e){t[w].push(e)}const A=we(ze),Fe=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,Qe=y(class extends x{constructor(e,s,n){super(e,s);l(this,"Context");l(this,"value");l(this,"_ranEffect");l(this,"_unsubscribe");this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,ze(s,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const s={Context:e,callback:this._updater};Fe(this.state.host).dispatchEvent(new CustomEvent(U,{detail:s,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:r=null,value:i}=s;this.value=r?i:e.defaultValue,this._unsubscribe=r}teardown(){this._unsubscribe&&this._unsubscribe()}});function Ue(t){return e=>{const s={Provider:class extends HTMLElement{constructor(){super();l(this,"listeners");l(this,"_value");this.style.display="contents",this.listeners=new Set,this.addEventListener(U,this)}disconnectedCallback(){this.removeEventListener(U,this)}handleEvent(r){const{detail:i}=r;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),r.stopPropagation())}unsubscribe(r){this.listeners.delete(r)}set value(r){this._value=r;for(let i of this.listeners)i(r)}get value(){return this._value}},Consumer:t(function({render:n}){const r=Qe(s);return n(r)},{useShadowDOM:!1}),defaultValue:e};return s}}const W=y(class extends x{constructor(e,s,n,r){super(e,s);l(this,"value");l(this,"values");this.value=n(),this.values=r}update(e,s){return this.hasChanged(s)&&(this.values=s,this.value=e()),this.value}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}});function We(t,e){t[C].push(e)}we(We);const H=y(class extends x{constructor(e,s,n){super(e,s);l(this,"args");this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[s]=this.args;typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});y(class extends x{constructor(e,s,n,r,i){super(e,s);l(this,"reducer");l(this,"currentState");this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(r):r}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const Xe=/([A-Z])/gu;y(class extends x{constructor(e,s,n,r){super(e,s);l(this,"property");l(this,"eventName");if(this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Xe,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof r=="function"&&(r=r()),r!=null&&this.updateProp(r))}update(e,s){return[this.state.host[this.property],this.updater]}updater(e){const s=this.state.host[this.property];typeof e=="function"&&(e=e(s)),!Object.is(s,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const s=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(s),s}});function I(t){return W(()=>({current:t}),[])}function Ye({render:t}){const e=Te(t),s=Ue(e);return{component:e,createContext:s}}const{component:L}=Ye({render:Ae}),Ee=y(class extends x{update(){return this.state.host}}),qe=y(class extends x{constructor(e,s,n,r){super(e,s);l(this,"values");Object.assign(s.host,n),this.values=r}update(e,s){this.hasChanged(s)&&(this.values=s,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((s,n)=>this.values[n]!==s)}}),Ke=ye` <style>
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
</style>`,Ze=(t,e,s)=>s==="horizontal"?t.x-e.left:t.y-e.top,Me=(t,e)=>e==="horizontal"?t.width:t.height,Ge=(t,e,s)=>{let n=t;return e!==void 0&&(n=Math.max(n,e)),s!==void 0&&(n=Math.min(n,s)),Math.max(0,n)},Je=(t,e)=>{const s=e>0?e:1,n=t/s;return[n,1-n]},et=(t,e,s)=>(t.rect||(t.rect=e.container.getBoundingClientRect(),t.size=Me(t.rect,s)),t.rect),tt=t=>{const e={rect:void 0,size:0},s=(n,r,i)=>{var p,m;const d=et(e,i.elements,i.direction),u=Ge(Ze(r,d,i.direction),i.minSize,i.maxSize),o=Je(u,e.size);n==="move"?(p=i.onResize)==null||p.call(i,{ratios:o,px:u}):((m=i.onResizeEnd)==null||m.call(i,{ratios:o}),e.rect=void 0)};return n=>{var d;const{phase:r,mousePosition:i}=n.detail;if(r==="start"){e.rect=t.elements.container.getBoundingClientRect(),e.size=Me(e.rect,t.direction),(d=t.onResizeStart)==null||d.call(t);return}(r==="move"||r==="end")&&s(r,i,t)}},st=t=>t instanceof MouseEvent?{x:t.clientX,y:t.clientY}:t.touches&&t.touches.length>0?{x:t.touches[0].clientX,y:t.touches[0].clientY}:{x:0,y:0},R=/^(\d+(?:\.\d+)?)%$/u,_e=/^(\d+(?:\.\d+)?)px$/u,Se=/^(\d+(?:\.\d+)?)vw$/u,Pe=/^(\d+(?:\.\d+)?)vh$/u,X=t=>{const e=t.match(Se);if(e)return Number(e[1])/100*window.innerWidth;const s=t.match(Pe);if(s)return Number(s[1])/100*window.innerHeight;const n=t.match(_e);if(n)return Number(n[1])},te=t=>{if(typeof t=="number")return t;const e=t.match(R);return e?Number(e[1])/100:void 0},nt=t=>typeof t=="number"?t:X(t),rt=(t,e=!1)=>{if(Array.isArray(t))return{ratio:te(t[0]),absolute:nt(t[1])};if(typeof t=="number")return e?{ratio:t}:{absolute:t};const s=te(t);return s!==void 0?{ratio:s}:{absolute:X(t)}},it=(t,e,s)=>{const{ratio:n,absolute:r}=t,i=n!==void 0?n*e:void 0;return i!==void 0&&r!==void 0?s?Math.max(i,r):Math.min(i,r):i??r},F=(t,e,s,n=!1)=>{if(t===void 0)return;const r=rt(t,n);return it(r,e,s)},ot=(t,e)=>typeof t=="string"?_e.test(t)||Se.test(t)||Pe.test(t):typeof t=="number"&&(e?t>1:!0),at=t=>typeof t=="number"&&t>=0&&t<=1||typeof t=="string"&&R.test(t),ut=(t,e=!1)=>{if(!Array.isArray(t))return!1;const[s,n]=t;return Array.isArray(s)||Array.isArray(n)?!0:!(at(s)&&ot(n,e))},se=(t,e,s,n=!1)=>{if(t===void 0)return[void 0,void 0];if(ut(t,n)){const[r,i]=t;return[F(r,e,s,n),F(i,e,s,n)]}return[F(t,e,s,n),void 0]},Q=(t,e,s)=>{const[n,r]=se(t,s,!0),[i,d]=se(e,s,!1);return{prevMin:n,prevMax:i,nextMin:r,nextMax:d}},O=(t,e,s,n)=>{const r=n>0?s/n:0,i=1-r;return t.style.flexBasis=`${r*100}%`,e.style.flexBasis=`${i*100}%`,{ratios:[r,i]}},ct=t=>{var s;if(Array.isArray(t)){const n=t[0];return typeof n=="number"?n:Number(((s=n.match(R))==null?void 0:s[1])??50)/100}if(typeof t=="number")return t;const e=t.match(R);return e?Number(e[1])/100:.5},lt=t=>typeof t=="number"?t:X(t)??0,dt=(t,e,s)=>{var u;const n=t[0];let r;if(Array.isArray(n)){const[o,p]=n,m=typeof o=="number"?o:Number(((u=o.match(R))==null?void 0:u[1])??50)/100;r=Math.min(m*s,lt(p))}else r=ct(n)*s;let i=0,d=s;return e.prevMin!==void 0&&(i=Math.max(i,e.prevMin)),e.prevMax!==void 0&&(d=Math.min(d,e.prevMax)),e.nextMax!==void 0&&(i=Math.max(i,s-e.nextMax)),e.nextMin!==void 0&&(d=Math.min(d,s-e.nextMin)),d<i?e.prevMax??d:Math.max(i,Math.min(r,d))},ne=(t,e)=>{let s=t;return e.prevMin!==void 0&&(s=Math.max(s,e.prevMin)),e.prevMax!==void 0&&(s=Math.min(s,e.prevMax)),Math.max(0,s)},re=t=>typeof t=="number"&&!Number.isNaN(t)&&t>=0&&t<=1?t:void 0,ht=(t="cosmoz-resizable-view:")=>{const e=new Map;let s;const n=new Map,r=()=>{s=void 0;for(const[u,o]of n)try{localStorage.setItem(t+u,String(o))}catch{}n.clear()},i=(u,o)=>{n.set(u,o),s===void 0&&(s=setTimeout(r,100))},d=u=>{if(u.key===null||!u.key.startsWith(t)||u.newValue===null)return;const o=u.key.slice(t.length),p=re(Number(u.newValue));if(p===void 0)return;const m=e.get(o);if(m)for(const b of m)b(p)};return typeof window<"u"&&window.addEventListener("storage",d),{get(u){let o;try{o=localStorage.getItem(t+u)}catch{return}if(o!==null)return re(Number(o))},set(u,o){i(u,o)},subscribe(u,o){let p=e.get(u);return p||(p=new Set,e.set(u,p)),p.add(o),()=>{const m=e.get(u);m&&(m.delete(o),m.size===0&&e.delete(u))}}}},ft=(t,e,s)=>{if(A(()=>{var i;if(!t||!e)return;const n=t.get(e);return n!==void 0&&s(n),(i=t.subscribe)==null?void 0:i.call(t,e,s)},[t,e,s]),!(!t||!e))return n=>t.set(e,n)},pt=ye` <style>
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
</style>`,mt=(t="horizontal")=>{const e=Ee();return A(()=>{e.setAttribute("data-direction",t)},[t]),A(()=>{const s=(o,p)=>{const m=st(p);e.dispatchEvent(new CustomEvent("resize",{detail:{phase:o,mousePosition:m},bubbles:!0}))},n=o=>s("move",o),r=o=>{e.removeAttribute("data-dragging"),s("end",o),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",r)},i=o=>{e.setAttribute("data-dragging","true"),s("start",o),document.addEventListener("mousemove",n),document.addEventListener("mouseup",r),document.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchend",r)},d=o=>{o.preventDefault(),i(o)},u=o=>{o.preventDefault(),i(o)};return e.addEventListener("mousedown",d),e.addEventListener("touchstart",u,{passive:!1}),()=>{e.removeEventListener("mousedown",d),e.removeEventListener("touchstart",u),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",r),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",r)}},[e]),null},bt=({direction:t="horizontal"})=>(mt(t),Re);customElements.define("cosmoz-resize-handle",L(bt,{styleSheets:[pt],observedAttributes:["direction"]}));const B=(t,e)=>t.dispatchEvent(new CustomEvent("split-resize",{detail:{ratios:e},bubbles:!0})),N=(t,e)=>{const s=t.getBoundingClientRect();return e==="horizontal"?s.width:s.height},vt=({direction:t="horizontal",initialSizes:e=[.5,.5],minSize:s,maxSize:n,persist:r})=>{const i=Ee(),d=I(void 0),u=I(.5),o=I(void 0),p=W(()=>{if(typeof r=="string")return ht();if(r&&typeof r=="object")return r},[r]),m=W(()=>{if(typeof r=="string")return r;if(r&&typeof r=="object")return"default"},[r]),b=ft(p,m,c=>{u.current=c;const a=d.current;if(!a)return;const f=N(i,t),{ratios:h}=O(a.previous,a.next,c*f,f);B(i,h)}),$=(c,a,f)=>{var q;const h=N(f,t),v=Q(s,n,h),E=(q=p==null?void 0:p.get)==null?void 0:q.call(p,m??""),_=E!==void 0?ne(E*h,v):dt(e,v,h),{ratios:Y}=O(c,a,_,h);u.current=Y[0],B(i,Y)},D=()=>{const c=d.current;if(!c)return;const a=N(i,t),f=Q(s,n,a),h=tt({elements:{previous:c.previous,next:c.next,container:i},direction:t,minSize:f.prevMin,maxSize:f.prevMax,onResize:({ratios:v,px:E})=>{O(c.previous,c.next,E,a),u.current=v[0],B(i,v)},onResizeEnd:({ratios:v})=>{b==null||b(v[0])}});o.current=h,c.handle.addEventListener("resize",h)},M=()=>{const c=d.current,a=o.current;c&&a&&c.handle.removeEventListener("resize",a),o.current=void 0},g=()=>{const c=Array.from(i.children).filter(v=>v.tagName.toLowerCase()!=="cosmoz-resize-handle");if(c.length<2)return;const[a,f]=c;let h=i.querySelector("cosmoz-resize-handle");h?h!==a.nextElementSibling&&i.insertBefore(h,f):(h=document.createElement("cosmoz-resize-handle"),i.insertBefore(h,f)),h.setAttribute("data-direction",t),d.current={previous:a,next:f,handle:h},$(a,f,i),M(),D()};return A(()=>{i.setAttribute("data-direction",t);const c=d.current;c&&c.handle.setAttribute("data-direction",t)},[t]),A(()=>{if(d.current)return M(),D(),M},[s,n,b,t]),qe({expandTo:c=>{const a=d.current;if(!a)return;const f=N(i,t);if(f-(u.current??.5)*f>=c)return;const v=Q(s,n,f),E=ne(f-c,v),{ratios:_}=O(a.previous,a.next,E,f);u.current=_[0],b==null||b(_[0]),B(i,_)}},[t,s,n,b]),z`<slot @slotchange=${()=>g()}></slot>`};customElements.define("cosmoz-resizable-view",L(vt,{styleSheets:[Ke],observedAttributes:["direction"]}));const gt=()=>{const[t,e]=H([.5,.5]);return z`
		<style>
			.container {
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

		<h1>ResizableView Demo - Horizontal Split</h1>

		<div class="stats">
			<p>Left Panel: ${Math.round(t[0]*100)}%</p>
			<p>Right Panel: ${Math.round(t[1]*100)}%</p>
		</div>

		<cosmoz-resizable-view
			class="container"
			.initialSizes=${[.5,.5]}
			@split-resize=${s=>e(s.detail.ratios)}
		>
			<div class="panel left-panel">
				<h3>Left Panel</h3>
			</div>
			<div class="panel right-panel">
				<h3>Right Panel</h3>
			</div>
		</cosmoz-resizable-view>
	`};customElements.define("basic-demo",L(gt,{useShadowDOM:!0}));const xt=()=>{const[t,e]=H([.5,.5]);return z`
		<style>
			.container {
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
			}

			.top-panel {
				background: linear-gradient(45deg, #ff6b6b, #ffa726);
				color: white;
			}

			.bottom-panel {
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

		<h1>ResizableView Demo - Vertical Split</h1>

		<div class="stats">
			<p>Top Panel: ${Math.round(t[0]*100)}%</p>
			<p>Bottom Panel: ${Math.round(t[1]*100)}%</p>
		</div>

		<cosmoz-resizable-view
			class="container"
			direction="vertical"
			.initialSizes=${[.5,.5]}
			@split-resize=${s=>e(s.detail.ratios)}
		>
			<div class="panel top-panel">
				<h3>Top Panel</h3>
			</div>
			<div class="panel bottom-panel">
				<h3>Bottom Panel</h3>
			</div>
		</cosmoz-resizable-view>
	`};customElements.define("vertical-demo",L(xt,{useShadowDOM:!0}));const yt=()=>{const[t,e]=H([.5,.5]),[s,n]=H([.5,.5]);return z`
		<style>
			.container {
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
			}

			.left-panel {
				background: linear-gradient(45deg, #ff6b6b, #ffa726);
				color: white;
			}

			.right-panel {
				background: linear-gradient(45deg, #4ecdc4, #45b7d1);
				color: white;
			}

			.top-panel {
				background: linear-gradient(45deg, #ff6b6b, #ffa726);
				color: white;
				padding: 10px 0;
			}

			.bottom-panel {
				background: linear-gradient(45deg, #4ecdc4, #45b7d1);
				color: white;
				padding: 10px 0;
			}

			h1 {
				margin: 20px;
				font-family: Arial, sans-serif;
			}
		</style>

		<h1>ResizableView Demo - Multiple Splits</h1>

		<cosmoz-resizable-view
			class="container"
			.initialSizes=${[.5,.5]}
			@split-resize=${r=>e(r.detail.ratios)}
		>
			<div class="panel left-panel">
				<h3>Left Panel</h3>
			</div>
			<cosmoz-resizable-view
				direction="vertical"
				.initialSizes=${[.5,.5]}
				@split-resize=${r=>n(r.detail.ratios)}
			>
				<div class="panel top-panel">
					<h3>Top Panel</h3>
				</div>
				<div class="panel bottom-panel">
					<h3>Bottom Panel</h3>
				</div>
			</cosmoz-resizable-view>
		</cosmoz-resizable-view>

		<div class="stats" style="margin: 20px; font-family: monospace;">
			<p>Outer: ${Math.round(t[0]*100)}% / ${Math.round(t[1]*100)}%</p>
			<p>Inner: ${Math.round(s[0]*100)}% / ${Math.round(s[1]*100)}%</p>
		</div>
	`};customElements.define("multiple-panels",L(yt,{useShadowDOM:!0}));const Et={title:"Components/ResizableView",tags:["autodocs"]},S=()=>z`<basic-demo></basic-demo>`;S.parameters={docs:{description:{story:"Basic horizontal split demo using <cosmoz-resizable-view>."}}};const P=()=>z`<vertical-demo></vertical-demo>`;P.parameters={docs:{description:{story:"Vertical split demo using <cosmoz-resizable-view>."}}};const k=()=>z`<multiple-panels></multiple-panels>`;k.parameters={docs:{description:{story:"Demo with nested split views using <cosmoz-resizable-view>."}}};var ce,le,de;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:"() => html`<basic-demo></basic-demo>`",...(de=(le=S.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var he,fe,pe;P.parameters={...P.parameters,docs:{...(he=P.parameters)==null?void 0:he.docs,source:{originalSource:"() => html`<vertical-demo></vertical-demo>`",...(pe=(fe=P.parameters)==null?void 0:fe.docs)==null?void 0:pe.source}}};var me,be,ve;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:"() => html`<multiple-panels></multiple-panels>`",...(ve=(be=k.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};const Mt=["BasicDemo","VerticalDemo","MultiplePanels"];export{S as BasicDemo,k as MultiplePanels,P as VerticalDemo,Mt as __namedExportsOrder,Et as default};
