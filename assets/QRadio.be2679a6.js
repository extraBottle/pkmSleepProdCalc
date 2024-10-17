import{e as T,c as j}from"./use-prevent-scroll.6acd0d0f.js";import{r as B,j as n,h as o,ar as E,aQ as d,p as R,E as A,aq as Q,g as z,s as _,u as H,Q as J}from"./index.0c03ffec.js";import{u as F,a as P}from"./QSelect.9900ae75.js";function D(a,b){const e=B(null),v=n(()=>a.disable===!0?null:o("span",{ref:e,class:"no-outline",tabindex:-1}));function k(s){const r=b.value;s!==void 0&&s.type.indexOf("key")===0?r!==null&&document.activeElement!==r&&r.contains(document.activeElement)===!0&&r.focus():e.value!==null&&(s===void 0||r!==null&&r.contains(s.target)===!0)&&e.value.focus()}return{refocusTargetEl:v,refocusTarget:k}}var K={xs:30,sm:35,md:40,lg:50,xl:60};const Z={...j,...Q,...F,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:a=>a==="tf"||a==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},ee=["update:modelValue"];function ae(a,b){const{props:e,slots:v,emit:k,proxy:s}=z(),{$q:r}=s,x=T(e,r),V=B(null),{refocusTargetEl:i,refocusTarget:C}=D(e,V),I=E(e,K),c=n(()=>e.val!==void 0&&Array.isArray(e.modelValue)),h=n(()=>{const t=d(e.val);return c.value===!0?e.modelValue.findIndex(f=>d(f)===t):-1}),u=n(()=>c.value===!0?h.value!==-1:d(e.modelValue)===d(e.trueValue)),m=n(()=>c.value===!0?h.value===-1:d(e.modelValue)===d(e.falseValue)),g=n(()=>u.value===!1&&m.value===!1),S=n(()=>e.disable===!0?-1:e.tabindex||0),$=n(()=>`q-${a} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(x.value===!0?` q-${a}--dark`:"")+(e.dense===!0?` q-${a}--dense`:"")+(e.leftLabel===!0?" reverse":"")),l=n(()=>{const t=u.value===!0?"truthy":m.value===!0?"falsy":"indet",f=e.color!==void 0&&(e.keepColor===!0||(a==="toggle"?u.value===!0:m.value!==!0))?` text-${e.color}`:"";return`q-${a}__inner relative-position non-selectable q-${a}__inner--${t}${f}`}),q=n(()=>{const t={type:"checkbox"};return e.name!==void 0&&Object.assign(t,{".checked":u.value,"^checked":u.value===!0?"checked":void 0,name:e.name,value:c.value===!0?e.val:e.trueValue}),t}),y=P(q),L=n(()=>{const t={tabindex:S.value,role:a==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":g.value===!0?"mixed":u.value===!0?"true":"false"};return e.disable===!0&&(t["aria-disabled"]="true"),t});function w(t){t!==void 0&&(_(t),C(t)),e.disable!==!0&&k("update:modelValue",p(),t)}function p(){if(c.value===!0){if(u.value===!0){const t=e.modelValue.slice();return t.splice(h.value,1),t}return e.modelValue.concat([e.val])}if(u.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(m.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function M(t){(t.keyCode===13||t.keyCode===32)&&_(t)}function N(t){(t.keyCode===13||t.keyCode===32)&&w(t)}const G=b(u,g);return Object.assign(s,{toggle:w}),()=>{const t=G();e.disable!==!0&&y(t,"unshift",` q-${a}__native absolute q-ma-none q-pa-none`);const f=[o("div",{class:l.value,style:I.value,"aria-hidden":"true"},t)];i.value!==null&&f.push(i.value);const O=e.label!==void 0?R(v.default,[e.label]):A(v.default);return O!==void 0&&f.push(o("div",{class:`q-${a}__label q-anchor--skip`},O)),o("div",{ref:V,class:$.value,...L.value,onClick:w,onKeydown:M,onKeyup:N},f)}}const U=o("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[o("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),o("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var te=H({name:"QRadio",props:{...j,...Q,...F,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(a,{slots:b,emit:e}){const{proxy:v}=z(),k=T(a,v.$q),s=E(a,K),r=B(null),{refocusTargetEl:x,refocusTarget:V}=D(a,r),i=n(()=>d(a.modelValue)===d(a.val)),C=n(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(a.disable===!0?" disabled":"")+(k.value===!0?" q-radio--dark":"")+(a.dense===!0?" q-radio--dense":"")+(a.leftLabel===!0?" reverse":"")),I=n(()=>{const l=a.color!==void 0&&(a.keepColor===!0||i.value===!0)?` text-${a.color}`:"";return`q-radio__inner relative-position q-radio__inner--${i.value===!0?"truthy":"falsy"}${l}`}),c=n(()=>(i.value===!0?a.checkedIcon:a.uncheckedIcon)||null),h=n(()=>a.disable===!0?-1:a.tabindex||0),u=n(()=>{const l={type:"radio"};return a.name!==void 0&&Object.assign(l,{".checked":i.value===!0,"^checked":i.value===!0?"checked":void 0,name:a.name,value:a.val}),l}),m=P(u);function g(l){l!==void 0&&(_(l),V(l)),a.disable!==!0&&i.value!==!0&&e("update:modelValue",a.val,l)}function S(l){(l.keyCode===13||l.keyCode===32)&&_(l)}function $(l){(l.keyCode===13||l.keyCode===32)&&g(l)}return Object.assign(v,{set:g}),()=>{const l=c.value!==null?[o("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[o(J,{class:"q-radio__icon",name:c.value})])]:[U];a.disable!==!0&&m(l,"unshift"," q-radio__native q-ma-none q-pa-none");const q=[o("div",{class:I.value,style:s.value,"aria-hidden":"true"},l)];x.value!==null&&q.push(x.value);const y=a.label!==void 0?R(b.default,[a.label]):A(b.default);return y!==void 0&&q.push(o("div",{class:"q-radio__label q-anchor--skip"},y)),o("div",{ref:r,class:C.value,tabindex:h.value,role:"radio","aria-label":a.label,"aria-checked":i.value===!0?"true":"false","aria-disabled":a.disable===!0?"true":void 0,onClick:g,onKeydown:S,onKeyup:$},q)}}});export{te as Q,ee as a,ae as b,Z as u};
