import{r as k,i as $e,a as U,e as E,b as K,f as Ce,n as ee,h as q,g as F,l as ve,j as ge,k as Q,m as ne,p as s,w as b,q as Ke,s as Xe,u as Se,v as Be,x as Oe,y as Ge,z as Je,A as Ye,B as Ze,C as de,D as J,E as et,F as tt,G as j,H as te,I as $,J as Z,K as L,L as be,Q as at,M as nt,N,O as ae,P as lt,R as qe,S as ot,T as ke,U as it,V as rt,W as ut,X as st}from"./index.8d6e7562.js";import{b as Y,Q as ct,a as ze,c as me,d as dt,e as ft}from"./QItem.560be5ab.js";import{T as fe,Q as vt}from"./TouchPan.3d6cc657.js";import{u as mt,a as ht,b as gt,c as bt,d as yt,e as wt,f as pt,g as xt}from"./selection.fd31deac.js";import{t as St}from"./gtmAddEvent.223c0622.js";import"./touch.3df10340.js";import"./index.71eb4ff9.js";function qt(){const e=k(!$e.value);return e.value===!1&&U(()=>{e.value=!0}),{isHydrated:e}}const Pe=typeof ResizeObserver!="undefined",Te=Pe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var he=E({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:y}){let o=null,l,n={width:-1,height:-1};function u(f){f===!0||e.debounce===0||e.debounce==="0"?g():o===null&&(o=setTimeout(g,e.debounce))}function g(){if(o!==null&&(clearTimeout(o),o=null),l){const{offsetWidth:f,offsetHeight:r}=l;(f!==n.width||r!==n.height)&&(n={width:f,height:r},y("resize",n))}}const{proxy:w}=F();if(w.trigger=u,Pe===!0){let f;const r=a=>{l=w.$el.parentNode,l?(f=new ResizeObserver(u),f.observe(l),g()):a!==!0&&ee(()=>{r(!0)})};return U(()=>{r()}),K(()=>{o!==null&&clearTimeout(o),f!==void 0&&(f.disconnect!==void 0?f.disconnect():l&&f.unobserve(l))}),Ce}else{let a=function(){o!==null&&(clearTimeout(o),o=null),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",u,ve.passive),r=void 0)},z=function(){a(),l&&l.contentDocument&&(r=l.contentDocument.defaultView,r.addEventListener("resize",u,ve.passive),g())};const{isHydrated:f}=qt();let r;return U(()=>{ee(()=>{l=w.$el,l&&z()})}),K(a),()=>{if(f.value===!0)return q("object",{class:"q--avoid-card-border",style:Te.style,tabindex:-1,type:"text/html",data:Te.url,"aria-hidden":"true",onLoad:z})}}}}),kt=E({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:y,emit:o}){const{proxy:{$q:l}}=F(),n=ge(ne,Q);if(n===Q)return console.error("QHeader needs to be child of QLayout"),Q;const u=k(parseInt(e.heightHint,10)),g=k(!0),w=s(()=>e.reveal===!0||n.view.value.indexOf("H")!==-1||l.platform.is.ios&&n.isContainer.value===!0),f=s(()=>{if(e.modelValue!==!0)return 0;if(w.value===!0)return g.value===!0?u.value:0;const i=u.value-n.scroll.value.position;return i>0?i:0}),r=s(()=>e.modelValue!==!0||w.value===!0&&g.value!==!0),a=s(()=>e.modelValue===!0&&r.value===!0&&e.reveal===!0),z=s(()=>"q-header q-layout__section--marginal "+(w.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=s(()=>{const i=n.rows.value.top,T={};return i[0]==="l"&&n.left.space===!0&&(T[l.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),i[2]==="r"&&n.right.space===!0&&(T[l.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),T});function v(i,T){n.update("header",i,T)}function m(i,T){i.value!==T&&(i.value=T)}function O({height:i}){m(u,i),v("size",i)}function S(i){a.value===!0&&m(g,!0),o("focusin",i)}b(()=>e.modelValue,i=>{v("space",i),m(g,!0),n.animate()}),b(f,i=>{v("offset",i)}),b(()=>e.reveal,i=>{i===!1&&m(g,e.modelValue)}),b(g,i=>{n.animate(),o("reveal",i)}),b(n.scroll,i=>{e.reveal===!0&&m(g,i.direction==="up"||i.position<=e.revealOffset||i.position-i.inflectionPoint<100)});const h={};return n.instances.header=h,e.modelValue===!0&&v("size",u.value),v("space",e.modelValue),v("offset",f.value),K(()=>{n.instances.header===h&&(n.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const i=Ke(y.default,[]);return e.elevated===!0&&i.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(q(he,{debounce:0,onResize:O})),q("header",{class:z.value,style:x.value,onFocusin:S},i)}}});const _e=150;var zt=E({name:"QDrawer",inheritAttrs:!1,props:{...mt,...ht,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...gt,"onLayout","miniState"],setup(e,{slots:y,emit:o,attrs:l}){const n=F(),{proxy:{$q:u}}=n,g=bt(e,u),{preventBodyScroll:w}=xt(),{registerTimeout:f,removeTimeout:r}=yt(),a=ge(ne,Q);if(a===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let z,x=null,v;const m=k(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),O=s(()=>e.mini===!0&&m.value!==!0),S=s(()=>O.value===!0?e.miniWidth:e.width),h=k(e.showIfAbove===!0&&m.value===!1?!0:e.modelValue===!0),i=s(()=>e.persistent!==!0&&(m.value===!0||Qe.value===!0));function T(t,c){if(D(),t!==!1&&a.animate(),B(0),m.value===!0){const _=a.instances[X.value];_!==void 0&&_.belowBreakpoint===!0&&_.hide(!1),V(1),a.isContainer.value!==!0&&w(!0)}else V(0),t!==!1&&ue(!1);f(()=>{t!==!1&&ue(!0),c!==!0&&o("show",t)},_e)}function d(t,c){A(),t!==!1&&a.animate(),V(0),B(R.value*S.value),se(),c!==!0?f(()=>{o("hide",t)},_e):r()}const{show:p,hide:C}=wt({showing:h,hideOnRouteChange:i,handleShow:T,handleHide:d}),{addToHistory:D,removeFromHistory:A}=pt(h,C,i),M={belowBreakpoint:m,hide:C},P=s(()=>e.side==="right"),R=s(()=>(u.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),ye=k(0),W=k(!1),le=k(!1),we=k(S.value*R.value),X=s(()=>P.value===!0?"left":"right"),oe=s(()=>h.value===!0&&m.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:S.value:0),ie=s(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(P.value?"R":"L")!==-1||u.platform.is.ios===!0&&a.isContainer.value===!0),I=s(()=>e.overlay===!1&&h.value===!0&&m.value===!1),Qe=s(()=>e.overlay===!0&&h.value===!0&&m.value===!1),Ve=s(()=>"fullscreen q-drawer__backdrop"+(h.value===!1&&W.value===!1?" hidden":"")),He=s(()=>({backgroundColor:`rgba(0,0,0,${ye.value*.4})`})),pe=s(()=>P.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),De=s(()=>P.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),Me=s(()=>{const t={};return a.header.space===!0&&pe.value===!1&&(ie.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&De.value===!1&&(ie.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),Re=s(()=>{const t={width:`${S.value}px`,transform:`translateX(${we.value}px)`};return m.value===!0?t:Object.assign(t,Me.value)}),We=s(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Ne=s(()=>`q-drawer q-drawer--${e.side}`+(le.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(g.value===!0?" q-drawer--dark q-dark":"")+(W.value===!0?" no-transition":h.value===!0?"":" q-layout--prevent-focus")+(m.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${O.value===!0?"mini":"standard"}`+(ie.value===!0||I.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(pe.value===!0?" q-drawer--top-padding":""))),Ee=s(()=>{const t=u.lang.rtl===!0?e.side:X.value;return[[fe,je,void 0,{[t]:!0,mouse:!0}]]}),Fe=s(()=>{const t=u.lang.rtl===!0?X.value:e.side;return[[fe,xe,void 0,{[t]:!0,mouse:!0}]]}),Ae=s(()=>{const t=u.lang.rtl===!0?X.value:e.side;return[[fe,xe,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function re(){Ue(m,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}b(m,t=>{t===!0?(z=h.value,h.value===!0&&C(!1)):e.overlay===!1&&e.behavior!=="mobile"&&z!==!1&&(h.value===!0?(B(0),V(0),se()):p(!1))}),b(()=>e.side,(t,c)=>{a.instances[c]===M&&(a.instances[c]=void 0,a[c].space=!1,a[c].offset=0),a.instances[t]=M,a[t].size=S.value,a[t].space=I.value,a[t].offset=oe.value}),b(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&re()}),b(()=>e.behavior+e.breakpoint,re),b(a.isContainer,t=>{h.value===!0&&w(t!==!0),t===!0&&re()}),b(a.scrollbarWidth,()=>{B(h.value===!0?0:void 0)}),b(oe,t=>{H("offset",t)}),b(I,t=>{o("onLayout",t),H("space",t)}),b(P,()=>{B()}),b(S,t=>{B(),ce(e.miniToOverlay,t)}),b(()=>e.miniToOverlay,t=>{ce(t,S.value)}),b(()=>u.lang.rtl,()=>{B()}),b(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Ie(),a.animate())}),b(O,t=>{o("miniState",t)});function B(t){t===void 0?ee(()=>{t=h.value===!0?0:S.value,B(R.value*t)}):(a.isContainer.value===!0&&P.value===!0&&(m.value===!0||Math.abs(t)===S.value)&&(t+=R.value*a.scrollbarWidth.value),we.value=t)}function V(t){ye.value=t}function ue(t){const c=t===!0?"remove":a.isContainer.value!==!0?"add":"";c!==""&&document.body.classList[c]("q-body--drawer-toggle")}function Ie(){x!==null&&clearTimeout(x),n.proxy&&n.proxy.$el&&n.proxy.$el.classList.add("q-drawer--mini-animate"),le.value=!0,x=setTimeout(()=>{x=null,le.value=!1,n&&n.proxy&&n.proxy.$el&&n.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function je(t){if(h.value!==!1)return;const c=S.value,_=Y(t.distance.x,0,c);if(t.isFinal===!0){_>=Math.min(75,c)===!0?p():(a.animate(),V(0),B(R.value*c)),W.value=!1;return}B((u.lang.rtl===!0?P.value!==!0:P.value)?Math.max(c-_,0):Math.min(0,_-c)),V(Y(_/c,0,1)),t.isFirst===!0&&(W.value=!0)}function xe(t){if(h.value!==!0)return;const c=S.value,_=t.direction===e.side,G=(u.lang.rtl===!0?_!==!0:_)?Y(t.distance.x,0,c):0;if(t.isFinal===!0){Math.abs(G)<Math.min(75,c)===!0?(a.animate(),V(1),B(0)):C(),W.value=!1;return}B(R.value*G),V(Y(1-G/c,0,1)),t.isFirst===!0&&(W.value=!0)}function se(){w(!1),ue(!0)}function H(t,c){a.update(e.side,t,c)}function Ue(t,c){t.value!==c&&(t.value=c)}function ce(t,c){H("size",t===!0?e.miniWidth:c)}return a.instances[e.side]=M,ce(e.miniToOverlay,S.value),H("space",I.value),H("offset",oe.value),e.showIfAbove===!0&&e.modelValue!==!0&&h.value===!0&&e["onUpdate:modelValue"]!==void 0&&o("update:modelValue",!0),U(()=>{o("onLayout",I.value),o("miniState",O.value),z=e.showIfAbove===!0;const t=()=>{(h.value===!0?T:d)(!1,!0)};if(a.totalWidth.value!==0){ee(t);return}v=b(a.totalWidth,()=>{v(),v=void 0,h.value===!1&&e.showIfAbove===!0&&m.value===!1?p(!1):t()})}),K(()=>{v!==void 0&&v(),x!==null&&(clearTimeout(x),x=null),h.value===!0&&se(),a.instances[e.side]===M&&(a.instances[e.side]=void 0,H("size",0),H("offset",0),H("space",!1))}),()=>{const t=[];m.value===!0&&(e.noSwipeOpen===!1&&t.push(Xe(q("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Ee.value)),t.push(Se("div",{ref:"backdrop",class:Ve.value,style:He.value,"aria-hidden":"true",onClick:C},void 0,"backdrop",e.noSwipeBackdrop!==!0&&h.value===!0,()=>Ae.value)));const c=O.value===!0&&y.mini!==void 0,_=[q("div",{...l,key:""+c,class:[We.value,l.class]},c===!0?y.mini():Be(y.default))];return e.elevated===!0&&h.value===!0&&_.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(Se("aside",{ref:"content",class:Ne.value,style:Re.value},_,"contentclose",e.noSwipeClose!==!0&&m.value===!0,()=>Fe.value)),q("div",{class:"q-drawer-container"},t)}}}),Tt=E({name:"QPageContainer",setup(e,{slots:y}){const{proxy:{$q:o}}=F(),l=ge(ne,Q);if(l===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;Oe(Ge,!0);const n=s(()=>{const u={};return l.header.space===!0&&(u.paddingTop=`${l.header.size}px`),l.right.space===!0&&(u[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(u.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(u[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),u});return()=>q("div",{class:"q-page-container",style:n.value},Be(y.default))}});const{passive:Le}=ve,_t=["both","horizontal","vertical"];var Lt=E({name:"QScrollObserver",props:{axis:{type:String,validator:e=>_t.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:y}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,n,u;b(()=>e.scrollTarget,()=>{f(),w()});function g(){l!==null&&l();const z=Math.max(0,Ye(n)),x=Ze(n),v={top:z-o.position.top,left:x-o.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const m=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";o.position={top:z,left:x},o.directionChanged=o.direction!==m,o.delta=v,o.directionChanged===!0&&(o.direction=m,o.inflectionPoint=o.position),y("scroll",{...o})}function w(){n=Je(u,e.scrollTarget),n.addEventListener("scroll",r,Le),r(!0)}function f(){n!==void 0&&(n.removeEventListener("scroll",r,Le),n=void 0)}function r(z){if(z===!0||e.debounce===0||e.debounce==="0")g();else if(l===null){const[x,v]=e.debounce?[setTimeout(g,e.debounce),clearTimeout]:[requestAnimationFrame(g),cancelAnimationFrame];l=()=>{v(x),l=null}}}const{proxy:a}=F();return b(()=>a.$q.lang.rtl,g),U(()=>{u=a.$el.parentNode,w()}),K(()=>{l!==null&&l(),f()}),Object.assign(a,{trigger:r,getPosition:()=>o}),Ce}}),$t=E({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:y,emit:o}){const{proxy:{$q:l}}=F(),n=k(null),u=k(l.screen.height),g=k(e.container===!0?0:l.screen.width),w=k({position:0,direction:"down",inflectionPoint:0}),f=k(0),r=k($e.value===!0?0:de()),a=s(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),z=s(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),x=s(()=>r.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),v=s(()=>r.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function m(d){if(e.container===!0||document.qScrollPrevented!==!0){const p={position:d.position.top,direction:d.direction,directionChanged:d.directionChanged,inflectionPoint:d.inflectionPoint.top,delta:d.delta.top};w.value=p,e.onScroll!==void 0&&o("scroll",p)}}function O(d){const{height:p,width:C}=d;let D=!1;u.value!==p&&(D=!0,u.value=p,e.onScrollHeight!==void 0&&o("scrollHeight",p),h()),g.value!==C&&(D=!0,g.value=C),D===!0&&e.onResize!==void 0&&o("resize",d)}function S({height:d}){f.value!==d&&(f.value=d,h())}function h(){if(e.container===!0){const d=u.value>f.value?de():0;r.value!==d&&(r.value=d)}}let i=null;const T={instances:{},view:s(()=>e.view),isContainer:s(()=>e.container),rootRef:n,height:u,containerHeight:f,scrollbarWidth:r,totalWidth:s(()=>g.value+r.value),rows:s(()=>{const d=e.view.toLowerCase().split(" ");return{top:d[0].split(""),middle:d[1].split(""),bottom:d[2].split("")}}),header:J({size:0,offset:0,space:!1}),right:J({size:300,offset:0,space:!1}),footer:J({size:0,offset:0,space:!1}),left:J({size:300,offset:0,space:!1}),scroll:w,animate(){i!==null?clearTimeout(i):document.body.classList.add("q-body--layout-animate"),i=setTimeout(()=>{i=null,document.body.classList.remove("q-body--layout-animate")},155)},update(d,p,C){T[d][p]=C}};if(Oe(ne,T),de()>0){let C=function(){d=null,p.classList.remove("hide-scrollbar")},D=function(){if(d===null){if(p.scrollHeight>l.screen.height)return;p.classList.add("hide-scrollbar")}else clearTimeout(d);d=setTimeout(C,300)},A=function(M){d!==null&&M==="remove"&&(clearTimeout(d),C()),window[`${M}EventListener`]("resize",D)},d=null;const p=document.body;b(()=>e.container!==!0?"add":"remove",A),e.container!==!0&&A("add"),et(()=>{A("remove")})}return()=>{const d=tt(y.default,[q(Lt,{onScroll:m}),q(he,{onResize:O})]),p=q("div",{class:a.value,style:z.value,ref:e.container===!0?void 0:n,tabindex:-1},d);return e.container===!0?q("div",{class:"q-layout-container overflow-hidden",ref:n},[q(he,{onResize:S}),q("div",{class:"absolute-full",style:x.value},[q("div",{class:"scroll",style:v.value},[p])])]):p}}});const Ct=["src"],Bt=Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{name:{type:String,default:"\uD3EC\uC2AC\uB9BD \uACC4\uC0B0\uAE30 \uD5C8\uBE0C"},meta:{title:{type:String,required:!0},caption:{type:String,default:""},icon:{type:String,default:""}}},setup(e){const y=e,o={name:y.name};return(l,n)=>(j(),te(ct,{clickable:"",to:o,onClick:n[0]||(n[0]=u=>Z(St)("enter_calc_from_menu"))},{default:$(()=>[y.meta.icon?(j(),te(ze,{key:0,avatar:""},{default:$(()=>[L(at,null,{default:$(()=>[be("img",{src:y.meta.icon},null,8,Ct)]),_:1})]),_:1})):nt("",!0),L(ze,null,{default:$(()=>[L(me,null,{default:$(()=>[N(ae(y.meta.title),1)]),_:1}),L(me,{caption:""},{default:$(()=>[N(ae(y.meta.caption),1)]),_:1})]),_:1})]),_:1}))}}),Ot="pkmsleepcalc",Pt="1.2.0",Qt="\uB2F9\uC2E0\uC758 \uD3EC\uCF13\uBAAC\uC744 \uC644\uBCBD \uBD84\uC11D\uD574\uB4DC\uB9BD\uB2C8\uB2E4",Vt="\uD3EC\uC2AC\uB9BD \uACC4\uC0B0\uAE30 by \uB450\uBC88\uC9F8\uC720\uB9AC\uBCD1",Ht="extraBottle",Dt={lint:"eslint --ext .js,.vue ./",format:'prettier --write "**/*.{js,vue,scss,html,md,json}" --ignore-path .gitignore',test:'echo "No test specified" && exit 0',dev:"quasar dev",build:"quasar build"},Mt={"@gtm-support/vue-gtm":"^2.2.0","@quasar/extras":"^1.16.4",pinia:"^2.1.7",quasar:"^2.8.0",vue:"^3.4.18","vue-router":"^4.0.12","vue3-apexcharts":"^1.5.2"},Rt={"@quasar/app-vite":"^1.8.0",autoprefixer:"^10.4.2",eslint:"^8.11.0","eslint-config-prettier":"^8.1.0","eslint-plugin-vue":"^9.0.0",postcss:"^8.4.14",prettier:"^2.5.1","vite-plugin-checker":"^0.6.4"},Wt={node:"^20 || ^18 || ^16",npm:">= 6.13.4",yarn:">= 1.21.1"};var Nt={name:Ot,version:Pt,description:Qt,productName:Vt,author:Ht,private:!0,scripts:Dt,dependencies:Mt,devDependencies:Rt,engines:Wt};const Et=be("br",null,null,-1),Jt=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(e){const y=lt(),o=Nt.version,l=qe.slice(1,qe.length-1),n=k(!1);function u(){n.value=!n.value}return(g,w)=>{const f=ot("router-view");return j(),te($t,{view:"lHh Lpr lFf"},{default:$(()=>[L(kt,{elevated:""},{default:$(()=>[L(dt,null,{default:$(()=>[L(ke,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:u}),L(ft,null,{default:$(()=>[N(ae(Z(y).name),1)]),_:1}),be("div",null,[N("v"+ae(Z(o)),1),Et,N("@\uB450\uBC88\uC9F8\uC720\uB9AC\uBCD1")])]),_:1})]),_:1}),L(zt,{modelValue:n.value,"onUpdate:modelValue":w[0]||(w[0]=r=>n.value=r),"show-if-above":"",bordered:"",style:{"background-color":"bisque"}},{default:$(()=>[L(vt,null,{default:$(()=>[L(me,{header:"",class:"q-py-sm row justify-between items-center",style:{"background-color":"antiquewhite"}},{default:$(()=>[N(" \uC774\uB7F0 \uAC83\uB3C4 \uC788\uC5B4\uC694 "),L(ke,{icon:"home",flat:"",round:"",to:"/",dense:""})]),_:1}),(j(!0),it(ut,null,rt(Z(l),r=>(j(),te(Bt,st({key:r.children[0].meta.title},r.children[0],{style:{"border-bottom":"dotted"}}),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),L(Tt,null,{default:$(()=>[L(f)]),_:1})]),_:1})}}});export{Jt as default};
