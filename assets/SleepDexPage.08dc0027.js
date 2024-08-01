import{e as le,d as oe}from"./QItem.560be5ab.js";import{Q as ae,a as ne}from"./QPage.7f1c990d.js";import{Q as se}from"./QSelect.86e9545d.js";import{Q as ie}from"./QSpace.197d0be8.js";import{Q as f}from"./QDialog.16ac1fe4.js";import{Q as D}from"./QBadge.872725f8.js";import{r as o,o as re,G as g,H as k,I as a,aC as H,L as i,K as t,N as m,J as U,aB as G,U as ue,O as B,M as _,T as J,az as ce,aA as de}from"./index.8d6e7562.js";import{a as me,u as ve,t as R,Q as W}from"./tooltip.0c68f388.js";import{a as I,Q as X}from"./QFabAction.b9fadf7b.js";import{Q as M}from"./QInput.e0c1601a.js";import"./selection.fd31deac.js";const fe={class:"column items-center q-gutter-y-md"},ge={key:0,class:"column items-center"},pe={class:"q-gutter-y-md full-width",style:{"max-width":"300px"}},he={class:"row items-center"},xe=i("span",{class:"full-width row justify-center text-bold"},"\uB098\uBB34\uC5F4\uB9E4",-1),be={class:"row items-center full-width"},ye=i("span",{class:"full-width row justify-center text-bold"},"\uC2DD\uC7AC\uB8CC",-1),we={class:"row"},ke={class:"q-mx-md relative-position"},_e={class:"relative-position"},Ie=i("span",{class:"full-width row justify-center text-bold"}," \uAE30\uBCF8 \uC18C\uC9C0 \uC218",-1),Ce=i("span",{class:"full-width row justify-center text-bold"}," \uAE30\uBCF8 \uB3C4\uC6B0\uBBF8 \uC18D\uB3C4",-1),Ne=i("span",{class:"full-width row justify-center text-bold"}," \uC2DD\uC7AC\uB8CC \uD655\uB960",-1),Qe=i("span",{class:"full-width row justify-center text-bold"}," \uC2A4\uD0AC \uBC1C\uB3D9 \uD655\uB960",-1),Ue=Object.assign({name:"ChoosePkmComponent"},{__name:"SleepDexPage",setup(Ve){const s=me();s.loadKorPkmName();const p=ve(),L=o(s.korPkmName),h=o(!1),r=o(""),K=o(""),x=o(""),C=o(""),N=o(""),A=o(""),F=o(""),O=o(""),Q=o(""),V=o(""),b=o(C.value),P=o(N.value),y=o([]),S=o(1),j=o(),Y=o("\uC785\uB825\uD558\uACE0 \uC5D4\uD130\uB97C \uB20C\uB7EC\uC11C \uAC80\uC0C9"),$=o(1),q=o(1),d=o([0,0]),T=o(0),v=o(""),z=o(0),E=o(0);function w(n,e){let l,u;switch(e){case 1:l=x.value,u=A.value;break;case 2:l=b.value,u=Q.value;break;case 3:l=P.value,u=V.value;break;default:return 0}n===2?(C.value=l,F.value=u):n===3&&(N.value=l,O.value=u),y.value[n-2].forEach(c=>{c.ingredient.longName===u&&(d.value[n-2]=c.amount)})}async function Z(){de("\uBD88\uB7EC\uC624\uB294 \uC911..."),await s.fetchPkmData(s.convertKorEn(r.value));const n=s.searchPkmData("name",s.convertKorEn(r.value));K.value=p.fetchIcon("berry",n.berry.name),x.value=p.fetchIcon("ing",s.bringIng(r.value,0)),b.value=p.fetchIcon("ing",s.bringIng(r.value,1)),P.value=p.fetchIcon("ing",s.bringIng(r.value,2)),C.value=b.value,N.value=P.value,A.value=s.bringIng(r.value,0,"store"),Q.value=s.bringIng(r.value,1,"store"),V.value=s.bringIng(r.value,2,"store"),F.value=Q.value,O.value=V.value,T.value=n.carrySize,v.value="";let e=n.frequency;Math.floor(e/Math.pow(60,2))>0&&(v.value+=`${Math.floor(e/Math.pow(60,2))}\uC2DC\uAC04`,e=e%Math.pow(60,2)),Math.floor(e/60)>0&&(v.value+=` ${Math.floor(e/60)}\uBD84`,e=e%60),v.value+=` ${e}\uCD08`,z.value=n.ingredientPercentage+" %",E.value=n.skillPercentage+" %",y.value=[];const l=["ingredient30","ingredient60"];for(let c in l)y.value.push(n[l[c]]);q.value=n.ingredient0.amount,$.value=n.specialty==="berry"?2:1,y.value[0].forEach(c=>{c.ingredient.longName===Q.value&&(d.value[0]=c.amount)}),y.value[1].forEach(c=>{c.ingredient.longName===V.value&&(d.value[1]=c.amount)});const u=S.value;S.value=s.findDexNum(r.value),u===S.value&&G(),j.value=p.fetchImage("pkm",S.value),h.value=!0}function ee(n,e,l){e(()=>{L.value=s.korPkmName.filter(u=>u.indexOf(n)>-1)})}function te(n){n.length>0&&(r.value="")}return re(()=>{j.value="images/pikachuStanding.png"}),(n,e)=>(g(),k(ae,{class:H(h.value?"row justify-center bg-googleDark":"flex flex-center bg-googleDark")},{default:a(()=>[i("div",{class:"col-xs-12 col-sm-9 col-md-8 col-lg-6 col-xl-4 bg-googleBack q-px-md",style:ce(h.value?"":"border: 2mm solid #b46856")},[t(oe,{class:"bg-primary text-white text-center"},{default:a(()=>[t(le,null,{default:a(()=>[m("\uD3EC\uCF13\uBAAC\uC744 \uAC80\uC0C9\uD558\uC138\uC694")]),_:1})]),_:1}),i("div",fe,[t(ne,{alt:"Pokemon image",src:j.value,fit:"scale-down",style:{width:"300px"},"no-spinner":"",onLoad:e[0]||(e[0]=l=>U(G)())},null,8,["src"]),t(se,{class:H(h.value?"full-width q-mt-none":"q-mt-none"),filled:"",color:"secondary",modelValue:r.value,"onUpdate:modelValue":[e[1]||(e[1]=l=>r.value=l),Z],options:L.value,label:"\uD3EC\uCF13\uBAAC \uC774\uB984",onFilter:ee,onInputValue:te,"use-input":"","hide-selected":"","fill-input":"","input-debounce":"0",hint:Y.value,"hide-bottom-space":""},null,8,["class","modelValue","options","hint"]),t(ie)]),h.value?(g(),ue("div",ge,[i("div",pe,[i("div",he,[t(f,{color:"secondary","text-color":"white",style:{width:"84px"}},{default:a(()=>[xe]),_:1}),t(J,{fab:"",color:"ingCircle",icon:K.value},{default:a(()=>[$.value>1?(g(),k(D,{key:0,color:"orange",floating:"",class:"text-bold"},{default:a(()=>[m("* "+B($.value),1)]),_:1})):_("",!0)]),_:1},8,["icon"])]),i("div",be,[t(f,{color:"secondary","text-color":"white",style:{width:"84px"}},{default:a(()=>[ye]),_:1}),i("div",we,[t(J,{fab:"",color:"ingCircle",icon:x.value},{default:a(()=>[q.value>1?(g(),k(D,{key:0,color:"orange",floating:"",class:"text-bold"},{default:a(()=>[m("* "+B(q.value),1)]),_:1})):_("",!0)]),_:1},8,["icon"]),i("div",ke,[d.value[0]>1?(g(),k(D,{key:0,color:"orange",floating:"",class:"text-bold",style:{"z-index":"1000 !important"}},{default:a(()=>[m("* "+B(d.value[0]),1)]),_:1})):_("",!0),t(W,{"hide-delay":U(R)()},{default:a(()=>[m(" \uB808\uBCA8 30 ")]),_:1},8,["hide-delay"]),t(X,{color:"ingCircle",icon:C.value,direction:"up"},{default:a(()=>[t(I,{color:"ingCircle",onClick:e[2]||(e[2]=l=>w(2,1)),icon:x.value},null,8,["icon"]),t(I,{color:"ingCircle",onClick:e[3]||(e[3]=l=>w(2,2)),icon:b.value},null,8,["icon"])]),_:1},8,["icon"])]),i("div",_e,[d.value[1]>1?(g(),k(D,{key:0,color:"orange",floating:"",class:"text-bold",style:{"z-index":"1000 !important"}},{default:a(()=>[m("* "+B(d.value[1]),1)]),_:1})):_("",!0),t(W,{"hide-delay":U(R)()},{default:a(()=>[m(" \uB808\uBCA8 60 ")]),_:1},8,["hide-delay"]),t(X,{color:"ingCircle",icon:N.value,direction:"up"},{default:a(()=>[t(I,{color:"ingCircle",onClick:e[4]||(e[4]=l=>w(3,1)),icon:x.value},null,8,["icon"]),t(I,{color:"ingCircle",onClick:e[5]||(e[5]=l=>w(3,2)),icon:b.value},null,8,["icon"]),t(I,{color:"ingCircle",onClick:e[6]||(e[6]=l=>w(3,3)),icon:P.value},null,8,["icon"])]),_:1},8,["icon"])])])]),t(M,{modelValue:T.value,"onUpdate:modelValue":e[7]||(e[7]=l=>T.value=l),class:"full-width",readonly:"","input-class":"text-center text-bold text-subtitle1"},{before:a(()=>[t(f,{color:"primary","text-color":"white"},{default:a(()=>[Ie]),_:1})]),_:1},8,["modelValue"]),t(M,{modelValue:v.value,"onUpdate:modelValue":e[8]||(e[8]=l=>v.value=l),readonly:"","input-class":"text-center text-bold text-subtitle1"},{before:a(()=>[t(f,{color:"primary","text-color":"white"},{default:a(()=>[Ce]),_:1})]),_:1},8,["modelValue"]),t(M,{modelValue:z.value,"onUpdate:modelValue":e[9]||(e[9]=l=>z.value=l),readonly:"","input-class":"text-center text-bold text-subtitle1"},{before:a(()=>[t(f,{color:"primary","text-color":"white"},{default:a(()=>[Ne]),_:1})]),_:1},8,["modelValue"]),t(M,{modelValue:E.value,"onUpdate:modelValue":e[10]||(e[10]=l=>E.value=l),readonly:"",class:"q-pb-md","input-class":"text-center text-bold text-subtitle1"},{before:a(()=>[t(f,{color:"primary","text-color":"white"},{default:a(()=>[Qe]),_:1})]),_:1},8,["modelValue"])])])):_("",!0)],4)]),_:1},8,["class"]))}});export{Ue as default};
