import{e as C,b as X,h as p,ah as Z,r as n,p as b,al as ee,s as te,an as ne,g as W,j as ae,k as V,aw as M,av as re,v as I,x as oe,F as le,u as se,ax as O}from"./index.8d6e7562.js";import{u as ie,d as ue,a as ce,b as ve,c as de}from"./use-panel.091a55ea.js";import{a as pe,c as fe}from"./selection.fd31deac.js";var ge=C({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:l,emit:f}){let i=!1,o,v,u=null,s=null,c,m;function g(){o&&o(),o=null,i=!1,u!==null&&(clearTimeout(u),u=null),s!==null&&(clearTimeout(s),s=null),v!==void 0&&v.removeEventListener("transitionend",c),c=null}function d(a,t,r){t!==void 0&&(a.style.height=`${t}px`),a.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,i=!0,o=r}function S(a,t){a.style.overflowY=null,a.style.height=null,a.style.transition=null,g(),t!==m&&f(t)}function _(a,t){let r=0;v=a,i===!0?(g(),r=a.offsetHeight===a.scrollHeight?0:void 0):(m="hide",a.style.overflowY="hidden"),d(a,r,t),u=setTimeout(()=>{u=null,a.style.height=`${a.scrollHeight}px`,c=h=>{s=null,(Object(h)!==h||h.target===a)&&S(a,"show")},a.addEventListener("transitionend",c),s=setTimeout(c,e.duration*1.1)},100)}function q(a,t){let r;v=a,i===!0?g():(m="show",a.style.overflowY="hidden",r=a.scrollHeight),d(a,r,t),u=setTimeout(()=>{u=null,a.style.height=0,c=h=>{s=null,(Object(h)!==h||h.target===a)&&S(a,"hide")},a.addEventListener("transitionend",c),s=setTimeout(c,e.duration*1.1)},100)}return X(()=>{i===!0&&g()}),()=>p(Z,{css:!1,appear:e.appear,onEnter:_,onLeave:q},l.default)}}),U=C({name:"StepHeader",props:{stepper:{},step:{},goToPanel:Function},setup(e,{attrs:l}){const{proxy:{$q:f}}=W(),i=n(null),o=b(()=>e.stepper.modelValue===e.step.name),v=b(()=>{const t=e.step.disable;return t===!0||t===""}),u=b(()=>{const t=e.step.error;return t===!0||t===""}),s=b(()=>{const t=e.step.done;return v.value===!1&&(t===!0||t==="")}),c=b(()=>{const t=e.step.headerNav,r=t===!0||t===""||t===void 0;return v.value===!1&&e.stepper.headerNav&&r}),m=b(()=>e.step.prefix&&(o.value===!1||e.stepper.activeIcon==="none")&&(u.value===!1||e.stepper.errorIcon==="none")&&(s.value===!1||e.stepper.doneIcon==="none")),g=b(()=>{const t=e.step.icon||e.stepper.inactiveIcon;if(o.value===!0){const r=e.step.activeIcon||e.stepper.activeIcon;return r==="none"?t:r||f.iconSet.stepper.active}if(u.value===!0){const r=e.step.errorIcon||e.stepper.errorIcon;return r==="none"?t:r||f.iconSet.stepper.error}if(v.value===!1&&s.value===!0){const r=e.step.doneIcon||e.stepper.doneIcon;return r==="none"?t:r||f.iconSet.stepper.done}return t}),d=b(()=>{const t=u.value===!0?e.step.errorColor||e.stepper.errorColor:void 0;if(o.value===!0){const r=e.step.activeColor||e.stepper.activeColor||e.step.color;return r!==void 0?r:t}return t!==void 0?t:v.value===!1&&s.value===!0?e.step.doneColor||e.stepper.doneColor||e.step.color||e.stepper.inactiveColor:e.step.color||e.stepper.inactiveColor}),S=b(()=>"q-stepper__tab col-grow flex items-center no-wrap relative-position"+(d.value!==void 0?` text-${d.value}`:"")+(u.value===!0?" q-stepper__tab--error q-stepper__tab--error-with-"+(m.value===!0?"prefix":"icon"):"")+(o.value===!0?" q-stepper__tab--active":"")+(s.value===!0?" q-stepper__tab--done":"")+(c.value===!0?" q-stepper__tab--navigation q-focusable q-hoverable":"")+(v.value===!0?" q-stepper__tab--disabled":"")),_=b(()=>e.stepper.headerNav!==!0?!1:c.value);function q(){i.value!==null&&i.value.focus(),o.value===!1&&e.goToPanel(e.step.name)}function a(t){t.keyCode===13&&o.value===!1&&e.goToPanel(e.step.name)}return()=>{const t={class:S.value};c.value===!0&&(t.onClick=q,t.onKeyup=a,Object.assign(t,v.value===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:l.tabindex||0}));const r=[p("div",{class:"q-focus-helper",tabindex:-1,ref:i}),p("div",{class:"q-stepper__dot row flex-center q-stepper__line relative-position"},[p("span",{class:"row flex-center"},[m.value===!0?e.step.prefix:p(ee,{name:g.value})])])];if(e.step.title!==void 0&&e.step.title!==null){const h=[p("div",{class:"q-stepper__title"},e.step.title)];e.step.caption!==void 0&&e.step.caption!==null&&h.push(p("div",{class:"q-stepper__caption"},e.step.caption)),r.push(p("div",{class:"q-stepper__label q-stepper__line relative-position"},h))}return te(p("div",t,r),[[ne,_.value]])}}});function G(e){return p("div",{class:"q-stepper__step-content"},[p("div",{class:"q-stepper__step-inner"},I(e.default))])}const z={setup(e,{slots:l}){return()=>G(l)}};var ye=C({name:"QStep",props:{...ie,icon:String,color:String,title:{type:String,required:!0},caption:String,prefix:[String,Number],doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String,headerNav:{type:Boolean,default:!0},done:Boolean,error:Boolean,onScroll:[Function,Array]},setup(e,{slots:l,emit:f}){const{proxy:{$q:i}}=W(),o=ae(M,V);if(o===V)return console.error("QStep needs to be a child of QStepper"),V;const{getCache:v}=ue(),u=n(null),s=b(()=>o.value.modelValue===e.name),c=b(()=>i.platform.is.ios!==!0&&i.platform.is.chrome===!0||s.value!==!0||o.value.vertical!==!0?{}:{onScroll(d){const{target:S}=d;S.scrollTop>0&&(S.scrollTop=0),e.onScroll!==void 0&&f("scroll",d)}}),m=b(()=>typeof e.name=="string"||typeof e.name=="number"?e.name:String(e.name));function g(){const d=o.value.vertical;return d===!0&&o.value.keepAlive===!0?p(re,o.value.keepAliveProps.value,s.value===!0?[p(o.value.needsUniqueKeepAliveWrapper.value===!0?v(m.value,()=>({...z,name:m.value})):z,{key:m.value},l.default)]:void 0):d!==!0||s.value===!0?G(l):void 0}return()=>p("div",{ref:u,class:"q-stepper__step",role:"tabpanel",...c.value},o.value.vertical===!0?[p(U,{stepper:o.value,step:e,goToPanel:o.value.goToPanel}),o.value.animated===!0?p(ge,g):g()]:[g()])}}),xe=C({name:"QStepperNavigation",setup(e,{slots:l}){return()=>p("div",{class:"q-stepper__nav"},I(l.default))}});const me=/(-\w)/g;function he(e){const l={};for(const f in e){const i=f.replace(me,o=>o[1].toUpperCase());l[i]=e[f]}return l}var ke=C({name:"QStepper",props:{...pe,...ce,flat:Boolean,bordered:Boolean,alternativeLabels:Boolean,headerNav:Boolean,contracted:Boolean,headerClass:String,inactiveColor:String,inactiveIcon:String,doneIcon:String,doneColor:String,activeIcon:String,activeColor:String,errorIcon:String,errorColor:String},emits:ve,setup(e,{slots:l}){const f=W(),i=fe(e,f.proxy.$q),{updatePanelsList:o,isValidPanelName:v,updatePanelIndex:u,getPanelContent:s,getPanels:c,panelDirectives:m,goToPanel:g,keepAliveProps:d,needsUniqueKeepAliveWrapper:S}=de();oe(M,b(()=>({goToPanel:g,keepAliveProps:d,needsUniqueKeepAliveWrapper:S,...e})));const _=b(()=>`q-stepper q-stepper--${e.vertical===!0?"vertical":"horizontal"}`+(e.flat===!0?" q-stepper--flat":"")+(e.bordered===!0?" q-stepper--bordered":"")+(i.value===!0?" q-stepper--dark q-dark":"")),q=b(()=>`q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels===!0?"alternative":"standard"}-labels`+(e.flat===!1||e.bordered===!0?" q-stepper__header--border":"")+(e.contracted===!0?" q-stepper__header--contracted":"")+(e.headerClass!==void 0?` ${e.headerClass}`:""));function a(){const t=I(l.message,[]);if(e.vertical===!0){v(e.modelValue)&&u();const r=p("div",{class:"q-stepper__content"},I(l.default));return t===void 0?[r]:t.concat(r)}return[p("div",{class:q.value},c().map(r=>{const h=he(r.props);return p(U,{key:h.name,stepper:e,step:h,goToPanel:g})})),t,se("div",{class:"q-stepper__content q-panel-parent"},s(),"cont",e.swipeable,()=>m.value)]}return()=>(o(l),p("div",{class:_.value},le(l.navigation,a())))}});const Se=O("manage-input",()=>{const e=n(0),l=n(0),f=n(""),i=n(30),o=n(0),v=n([]),u=n("Fancy Apple"),s=n("Warming Ginger"),c=n("Fancy Egg"),m=n("Warming Ginger"),g=n("Fancy Egg"),d=n(""),S=n(""),_=n("25"),q=n(1),a=n(!1),t=n(!1),r=n("0"),h=n(1);function y(k,P,T,w,E,N,L,B,Q,A,$,D,F,j,H,K,R,Y,J){e.value=k,l.value=P,f.value=T,i.value=w,o.value=E,v.value=N,u.value=L,s.value=B,c.value=Q,m.value=A,g.value=$,d.value=D,S.value=F,_.value=j,q.value=H,a.value=K,t.value=R,r.value=Y,h.value=J}function x(){return f.value!==""&&d.value!==""&&S.value!==""}return{hbCount:e,erbCount:l,pkmName:f,pkmLevel:i,evoCount:o,subSkills:v,firstIng:u,secondIng:s,thirdIng:c,fixedSecondIng:m,fixedThirdIng:g,upNature:d,downNature:S,selectedPkmDex:_,mainSkillLevel:q,useGoodCamp:a,useRibbon:t,ribbonLev:r,leftEvo:h,storeEverything:y,hasEssential:x}}),be=O("sleepTime-input",()=>({sleepTime:n("08:30")})),_e=O("healer-input",()=>{const e=n("lightVer"),l=n(3),f=n("\uB2D8\uD53C\uC544"),i=n(30),o=n(0),v=n([]),u=n("Moomoo Milk"),s=n("Soothing Cacao"),c=n("Bean Sausage"),m=n("Soothing Cacao"),g=n("Bean Sausage"),d=n(""),S=n(""),_=n("700"),q=n(6),a=n(!0),t=n("3"),r=n(0);function h(x,k,P,T,w,E,N,L,B,Q,A,$,D,F,j,H,K,R){e.value=x,l.value=k,f.value=P,i.value=T,o.value=w,v.value=E,u.value=N,s.value=L,c.value=B,m.value=Q,g.value=A,d.value=$,S.value=D,_.value=F,q.value=j,a.value=H,t.value=K,r.value=R}function y(){return f.value!==""&&d.value!==""&&S.value!==""}return{calcVer:e,healSkillCount:l,pkmName:f,pkmLevel:i,evoCount:o,subSkills:v,firstIng:u,secondIng:s,thirdIng:c,fixedSecondIng:m,fixedThirdIng:g,upNature:d,downNature:S,selectedPkmDex:_,mainSkillLevel:q,useRibbon:a,ribbonLev:t,leftEvo:r,storeEverything:h,hasEssential:y}});var Pe=Object.freeze(Object.defineProperty({__proto__:null,useInputStore:Se,useSleepTimeInputStore:be,useHealerInputStore:_e},Symbol.toStringTag,{value:"Module"}));export{xe as Q,ye as a,ke as b,_e as c,be as d,Pe as i,Se as u};