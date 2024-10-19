import{u as c,j as i,h as s,E as m,a7 as R,v as I,x as Q,r as q,g as A,l as T,s as j,G as K}from"./index.ab1018b7.js";import{c as M,e as F}from"./use-prevent-scroll.04788a6c.js";var N=c({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const a=i(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>s("div",{class:a.value},m(t.default))}}),U=c({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const a=i(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>s("div",{class:a.value,role:"toolbar"},m(t.default))}});let b,f=0;const l=new Array(256);for(let e=0;e<256;e++)l[e]=(e+256).toString(16).substring(1);const O=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const a=new Uint8Array(t);return e.getRandomValues(a),a}}return t=>{const a=[];for(let o=t;o>0;o--)a.push(Math.floor(Math.random()*256));return a}})(),p=4096;function z(){(b===void 0||f+16>p)&&(f=0,b=O(p));const e=Array.prototype.slice.call(b,f,f+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,l[e[0]]+l[e[1]]+l[e[2]]+l[e[3]]+"-"+l[e[4]]+l[e[5]]+"-"+l[e[6]]+l[e[7]]+"-"+l[e[8]]+l[e[9]]+"-"+l[e[10]]+l[e[11]]+l[e[12]]+l[e[13]]+l[e[14]]+l[e[15]]}let P=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,P=e.scrollLeft>=0,e.remove()}var V=c({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const a=i(()=>parseInt(e.lines,10)),o=i(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),r=i(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>s("div",{style:r.value,class:o.value},m(t.default))}});function W(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),R.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function G(e,t,a){return a<=t?t:Math.min(a,Math.max(t,e))}function H(e,t,a){if(a<=t)return t;const o=a-t+1;let r=t+(e-t)%o;return r<t&&(r=o+r),r===0?0:r}function Z(e,t=2,a="0"){if(e==null)return e;const o=""+e;return o.length>=t?o:new Array(t-o.length+1).join(a)+o}var J=c({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const a=i(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>s("div",{class:a.value},m(t.default))}}),X=c({name:"QItem",props:{...M,...I,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:a}){const{proxy:{$q:o}}=A(),r=F(e,o),{hasLink:y,linkAttrs:k,linkClass:w,linkTag:x,navigateOnClick:_}=Q(),d=q(null),v=q(null),h=i(()=>e.clickable===!0||y.value===!0||e.tag==="label"),u=i(()=>e.disable!==!0&&h.value===!0),B=i(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(r.value===!0?" q-item--dark":"")+(y.value===!0&&e.active===null?w.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(u.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),C=i(()=>{if(e.insetLevel===void 0)return null;const n=o.lang.rtl===!0?"Right":"Left";return{["padding"+n]:16+e.insetLevel*56+"px"}});function S(n){u.value===!0&&(v.value!==null&&(n.qKeyEvent!==!0&&document.activeElement===d.value?v.value.focus():document.activeElement===v.value&&d.value.focus()),_(n))}function E(n){if(u.value===!0&&T(n,[13,32])===!0){j(n),n.qKeyEvent=!0;const g=new MouseEvent("click",n);g.qKeyEvent=!0,d.value.dispatchEvent(g)}a("keyup",n)}function L(){const n=K(t.default,[]);return u.value===!0&&n.unshift(s("div",{class:"q-focus-helper",tabindex:-1,ref:v})),n}return()=>{const n={ref:d,class:B.value,style:C.value,role:"listitem",onClick:S,onKeyup:E};return u.value===!0?(n.tabindex=e.tabindex||"0",Object.assign(n,k.value)):h.value===!0&&(n["aria-disabled"]="true"),s(x.value,n,L())}}});export{X as Q,J as a,G as b,V as c,U as d,N as e,W as f,H as n,Z as p,P as r,z as u};