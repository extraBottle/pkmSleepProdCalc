import{d as St,e as _t,f as pt,k as Ct,n as xt,i as Le,j as $e,g as bt,t as wt,Q as Mt,s as ut,l as Pt,o as Nt,p as vt,q as It}from"./tooltip.ee8be281.js";import{c as Ht,k as ve,h as Bt,g as Tt,aH as Rt,r as _,a as $t,F as ye,R as je,J as n,H as M,K as A,T as ht,M as Ee,ai as qt,am as Vt,I as Ae,N as Qe,Q as Ge,L as Oe,O as Ft,G as Ue,P as We,aM as mt,aN as Lt,ac as ft,o as Qt,b as At,aO as Et}from"./index.8cfbd384.js";import{a as Ot,Q as zt}from"./QPage.ea7533b8.js";import{a as Dt,c as jt,j as gt,k as kt}from"./QItem.be3ebcdc.js";import"./use-timeout.29c5ea39.js";const Gt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},ot={xs:2,sm:4,md:8,lg:16,xl:24};var De=Ht({name:"QSeparator",props:{...Dt,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(d){const k=Tt(),e=jt(d,k.proxy.$q),P=ve(()=>d.vertical===!0?"vertical":"horizontal"),C=ve(()=>` q-separator--${P.value}`),E=ve(()=>d.inset!==!1?`${C.value}-${Gt[d.inset]}`:""),p=ve(()=>`q-separator${C.value}${E.value}`+(d.color!==void 0?` bg-${d.color}`:"")+(e.value===!0?" q-separator--dark":"")),l=ve(()=>{const h={};if(d.size!==void 0&&(h[d.vertical===!0?"width":"height"]=d.size),d.spaced!==!1){const r=d.spaced===!0?`${ot.md}px`:d.spaced in ot?`${ot[d.spaced]}px`:d.spaced,y=d.vertical===!0?["Left","Right"]:["Top","Bottom"];h[`margin${y[0]}`]=h[`margin${y[1]}`]=r}return h});return()=>Bt("hr",{class:p.value,style:l.value,"aria-orientation":P.value})}});const nt=Rt("production-calc",()=>{const d=_(0),k=_(0),e=_([]),P=_(0),C=_(0),E=_(0),p=_(0),l=_(0),h=_(!1),r=_(!1),y=_(!1),c=_({}),F=_({}),X=_(!0),s=2,U=1/30,we=1/(60*30),ne=1e4;function se(x={},B,i,f,o,a=[]){const u=x.ingredientPercentage;let t=1;B==="\uC2DD\uC7AC\uB8CC \uB3C4\uC6B0\uBBF8 \uD655\uB960 \u25B2\u25B2"?t=f:i==="\uC2DD\uC7AC\uB8CC \uB3C4\uC6B0\uBBF8 \uD655\uB960 \u25BD\u25BD"&&(t=o);let v=1;for(let m=0;m<a.length;m++)(a[m].label==="\uC2DD\uC7AC\uB8CC \uD655\uB960 \uC5C5 M"||a[m].label==="\uC2DD\uC7AC\uB8CC \uD655\uB960 \uC5C5 s")&&(v+=a[m].mult);return u*t*v/100}function Me(x={},B,i,f,o,a=[]){const u=x.skillPercentage,t=B==="\uBA54\uC778 \uC2A4\uD0AC \uBC1C\uB3D9\uB960 \u25B2\u25B2"?f:i==="\uBA54\uC778 \uC2A4\uD0AC \uBC1C\uB3D9\uB960 \u25BD\u25BD"?o:1;let v=1;for(let m=0;m<a.length;m++)(a[m].label==="\uC2A4\uD0AC \uD655\uB960 \uC5C5 M"||a[m].label==="\uC2A4\uD0AC \uD655\uB960 \uC5C5 s")&&(v+=a[m].mult);return u*t*v/100}function Se(x,B,i,f,o,a,u,t=[],v={},m,N){const q=B==="\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC \u25B2\u25B2"?f:i==="\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC \u25BD\u25BD"?o:1,I=a*u;let V=0;for(let S=0;S<t.length;S++)(t[S].label==="\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC M"||t[S].label==="\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC s")&&(V+=t[S].mult);V=V+I>=m?m:V+I;const O=(501-x)/500*q*(1-V),g=N?.8:1;return v.frequency*O*we*g}function _e(x,B,i,f,o,a,u,t,v,m,N,q,I="",V,O,g,S,z,T,H,W,D,L,J,de,le=0,Pe=[],pe=0,Ce="",Ne="",Y="",Ie=""){e.value=[];let Z=de.skill.amount[q-1],b=t.skill.amount[u-1],ee=I.split(":");const me=parseInt(ee[0],10),he=parseInt(ee[1],10),He=24*s-me*s-he*U,Je=He-1,Ye=Je-Math.floor((He-7*s)/2),st=Ye-6*s;function Ze(te){for(const ue of v)if(te>=ue.e)return ue.m}let et=1;S==="\uAE30\uB825 \uD68C\uBCF5\uB7C9 \u25B2\u25B2"?(et=T,Z=Math.floor(Z*T),b=Math.floor(b*T)):z==="\uAE30\uB825 \uD68C\uBCF5\uB7C9 \u25BD\u25BD"&&(et=H,Z=Math.floor(Z*H),b=Math.floor(b*H));const ct=W*D+1;let ae=100/(g/s)*(me*s+he*U)*et*ct;ae=ae>100?100:Math.floor(ae);let Be=!1,Ve=1;t.skill.name.includes("Charge Energy")?(Be=!0,Ve=1):t.skill.name.includes("Energizing Cheer")?(Be=!0,Ve=5):t.skill.name.includes("Metronome")&&(Be=!0,Ve=(x-1)/(6/5));function xe(te){return te>N?N:te}if(V!=="proVer"){let w=function(R,oe=1,fe=Z){let $=0;switch(V!=="lightVer"&&(fe=0),R===0?$=ae+fe:e.value[e.value.length-1].y<=0?$=fe*oe:$=e.value[e.value.length-1].y+fe*oe-Math.floor(L/s),$){case $>N:return N;case $<0:return 0;default:return $}};e.value.push({x:0,y:ae});const te=Math.floor(He/O);let ue=1;Be&&(ue=Math.round(O*(t.skillPercentage/de.skillPercentage)*(de.frequency/t.frequency)/Ve));const be=Math.floor(He/ue);let Fe=O;for(let R=0;R<He+1;R++){let oe=w(R,0);if(e.value.push({x:R,y:oe}),R===0&&(Fe-=1),(R===st||R===Ye||R===Je)&&e.value.push({x:R,y:xe(oe+Ze(oe))}),V==="lightVer"&&R>0){if(Be&&R%be===0&&ue>0){let fe=w(R,1,b);e.value.push({x:R,y:xe(fe)}),ue-=1}if(R%te===0&&Fe>0){let fe=w(R);e.value.push({x:R,y:xe(fe)}),Fe-=1}}}}else if(V==="proVer"){let oe=function($,j,ge){let Q=ge>N?N:ge;$>0?e.value[j].y=(e.value[j].y*$+Q)/($+1):e.value.push({x:j,y:Q})},fe=function($){let j=0;return w>0&&(w=w-1*(L/s),w>N&&(w=N)),w<=0&&(w=0),e.value[$-1].y>0&&(j=e.value[$-1].y-1*(L/s),j>N&&(j=N)),j<0?0:j},te=de.skill.amount[q-1],ue=1;Y==="\uAE30\uB825 \uD68C\uBCF5\uB7C9 \u25B2\u25B2"?(ue=T,te=Math.floor(te*T)):Ie==="\uAE30\uB825 \uD68C\uBCF5\uB7C9 \u25BD\u25BD"&&(ue=H,te=Math.floor(te*H));let be=100/(g/s)*(me*s+he*U)*ue*ct;be=be>100?100:be;let w=be,Fe=.8,R=.4;for(let $=0;$<ne;$++){Math.random()<Fe?(w+=te,Math.random()<R?oe($,0,xe(ae+b+Z)):oe($,0,xe(ae+Z))):Math.random()<R?oe($,0,xe(ae+b)):oe($,0,xe(ae));let j=k.value,ge=d.value;for(let Q=1;Q<He+1;Q++){let Ke=function(G){for(let K=0;K<J.length;K++)if(G>J[K].e)return tt=J[K].e,J[K].m;return J[J.length-1].m},it=function(G,K,Re){return(K-Re)/(L/s)+G};const rt=w;let ke=fe(Q),tt=0;const lt=Ke(w),Te=Ke(rt);let ze=0;if(lt!==Te){let G=it(Q-1,rt,tt)-(Q-1);j=j-(G/Te+(1-G)/lt)%k.value,ze=Math.floor((G/Te+(1-G)/lt)/k.value)}else j=j-1/Te%k.value,ze=Math.floor(1/Te/k.value);if(j<=0&&(ze+=1,j+=k.value),Be){let G=0;const K=Ke(ke),Re=Ke(e.value[Q-1].y);if(K!==Re){let Xe=it(Q-1,e.value[Q-1].y,tt)-(Q-1);ge=ge-(Xe/Re+(1-Xe)/K)%d.value,G=Math.floor((Xe/Re+(1-Xe)/K)/d.value)}else ge=ge-1/Te%k.value,G=Math.floor(1/Te/k.value);ge<=0&&(G+=1,ge+=d.value);const at=1-Math.pow(1-E.value/Ve,G);G>0&&Math.random()<at&&(ke+=b)}const yt=1-Math.pow(1-p.value,ze);if((Q===st||Q===Ye||Q===Je)&&(ke+=Ze(ke),w+=Ze(w)),ze>0&&Math.random()<yt&&(ke+=Z,w+=te),oe($,Q,xe(ke)),Q===He){let G=w,K=0;if(ke-Math.ceil(L/s*(me*s+he*U))<0?K=0:K=ke-Math.ceil(L/s*(me*s+he*U)),w-Math.ceil(L/s*(me*s+he*U))<0?w=0:w=w-Math.ceil(L/s*(me*s+he*U)),ae=K+ae>100?100:K+ae,w=w+be>100?100:w+be,Be){const at=ie(I,ke,J,t,i,f,B,o,a,L,m);R=1-Math.pow(1-E.value/Ve,at)}const Re=ie(I,G,J,de,le,Pe,pe,Ce,Ne,L,"healer",m);Fe=1-Math.pow(1-p.value,Re)}}}}}function ce(x=[],B="target",i){F.value={},x.forEach(t=>{F.value[t.m]=0});let f=0;function o(t){for(let v=0;v<x.length;v++)if(t>x[v].e)return f=x[v].e,x[v].m;return f=x[x.length-1].e,x[x.length-1].m}function a(t,v,m){return(m-e.value[t].y)/((e.value[t].y-e.value[v].y)/(e.value[t].x-e.value[v].x))+e.value[t].x}for(let t=0;t<e.value.length-1;t++)if(e.value[t].x!==e.value[t+1].x){let v=o(e.value[t+1].y),m=e.value[t].x,N=!0,q=e.value[t+1].x;B==="proVer"&&e.value[t].y<=e.value[t+1].y&&(v=o(e.value[t].y-i/s*(e.value[t+1].x-e.value[t].x)));let I=o(e.value[t].y);for(;N;)I===v?(F.value[I]+=e.value[t+1].x-m,N=!1):(q=a(t,t+1,f),F.value[I]+=q-m,I=o(f),m=q)}let u=0;for(let t in F.value)u+=F.value[t]/parseFloat(t);l.value=Math.floor(u/d.value),X.value=!1}function re(x,B=!1,i={},f,o,a,u,t,v,m,N,q,I,V){const O=ie(t,e.value[e.value.length-1].y,m,i,N,q,f,a,u,v,I);function g(S,z){let T=0;return z<30?T=i[`ingredient${z}`].amount:T=i[`ingredient${z}`].find(H=>H.ingredient.longName===S).amount,B?O*P.value*T:(l.value+O)*P.value*T}c.value[o]=g(o,0),f>=30&&(a===o?(c.value[o]=(c.value[o]+g(a,30))/2,h.value=!1):(c.value[o]=c.value[o]/2,c.value[a]=g(a,30)/2,h.value=!0),f>=60&&(c.value[o]=c.value[o]*2/3,o===a?u!==a?(c.value[u]=g(u,60)/3,r.value=!0):(c.value[o]=c.value[o]+g(u,60)/3,r.value=!1):(c.value[a]=c.value[a]*2/3,u===o?(c.value[o]=c.value[o]+g(u,60)/3,r.value=!1):u===a?(c.value[a]=c.value[a]+g(u,60)/3,r.value=!1):(c.value[u]=g(u,60)/3,r.value=!0)))),(i.skill.unit==="ingredients"||i.skill.name==="Metronome")&&(async()=>{try{const z=await(await fetch("https://api.sleepapi.net/api/ingredient")).json(),T=i.skill.name==="Metronome"?x-1:1,H=Math.ceil(i.skill.amount[V-1]/3),W=1-(1-1/z.length)*(1-1/(z.length-1))*(1-1/(z.length-2)),D=(l.value+O)*E.value*H*W/T;y.value=!0,c.value[o]+=D,c.value.hasOwnProperty(a)&&(c.value[a]+=D),c.value.hasOwnProperty(u)&&(c.value[u]+=D),c.value.all=D}catch(S){console.log("ing Fetch problem: "+S.message)}})()}function ie(x,B,i,f,o,a,u,t,v,m,N="target",q){let I=x.split(":");const V=parseInt(I[0],10),O=parseInt(I[1],10);let g={};i.forEach(b=>{g[b.m]=0});let S=0;function z(b){for(let ee=0;ee<i.length;ee++)if(b>i[ee].e)return S=i[ee].e,i[ee].m;return S=0,i[i.length-1].m}let T=z(B),H=0,W=(B-S)/(m/s);for(;T!==i[i.length-1].m;)g[T]+=W-H,T=z(S),H=W,W=(B-S)/(m/s);W=V*s+O*U,g[T]+=W-H;let D=0;for(let b in g)D+=g[b]/parseFloat(b);let L=0;N==="target"?L=Math.floor(D/d.value):L=Math.floor(D/k.value);let J=!1;const de=q?1.2:1;let le=(f.carrySize+o*5)*de;for(let b=0;b<a.length;b++)a[b].label==="\uCD5C\uB300 \uC18C\uC9C0 \uC218 \uC5C5 L"||a[b].label==="\uCD5C\uB300 \uC18C\uC9C0 \uC218 \uC5C5 M"||a[b].label==="\uCD5C\uB300 \uC18C\uC9C0 \uC218 \uC5C5 s"?le+=a[b].mult:a[b].label==="\uB098\uBB34\uC5F4\uB9E4 \uC218 s"&&(J=!0);function Pe(b,ee){return f[`ingredient${ee}`].find(he=>he.ingredient.longName===b).amount}let pe=0,Ce=0,Ne=0,Y=1;switch(!0){case u>=60:Y=3,pe=f.ingredient0.amount*P.value/Y,Ce=Pe(t,30)*P.value/Y,Ne=Pe(v,60)*P.value/Y;break;case u>=30:Y=2,pe=f.ingredient0.amount*P.value/Y,Ce=Pe(t,30)*P.value/Y;break;default:Y=1,pe=f.ingredient0.amount*P.value/Y}let Ie=1;f.specialty==="berry"&&(Ie+=1),J&&(Ie+=1);const Z=Ie*(1-P.value);return Math.ceil(le/(Z+pe+Ce+Ne))>L?L:Math.ceil(le/(Z+pe+Ce+Ne))}function qe(){d.value=0,k.value=0,e.value=[],l.value=0,P.value=0,C.value=0,E.value=0,p.value=0,h.value=!1,r.value=!1,y.value=!1,X.value=!0,c.value={},F.value={}}return{onlyBaseSpeed:d,onlyBaseSpeedH:k,energyAxis:e,finalSpeedCount:l,finalIngProc:P,finalIngProcH:C,finalSkillProc:E,finalSkillProcH:p,checkSecondDisplay:h,checkThirdDisplay:r,checkIngSkillDisplay:y,totalIngCalc:c,timeStaying:F,calcLoading:X,convertH:s,convertM:U,convertS:we,simulationCount:ne,calcIngProc:se,calcBaseSpeed:Se,calcEnergyCurve:_e,calcSpeedWithEner:ce,clearCalc:qe,calcSleepSpeedCount:ie,calcLeveLIng:re,calcSkillProc:Me}}),Kt={class:"column items-center q-gutter-y-md relative-position"},Xt={class:"full-width row justify-between"},Ut={class:"text-h5 text-center text-weight-bold clean-wrap"},Wt=A("span",{class:"text-subtitle2"},"(\uAE30\uB313\uAC12)",-1),Jt={class:"col"},Yt={class:"text-h5 q-py-sm"},Zt={key:0,class:"col"},el={class:"text-h5 q-py-sm"},tl={key:1,class:"col"},ll={class:"text-h5 q-py-sm"},al={key:2,class:"col"},ol={class:"row q-py-sm"},nl={class:"text-h5 no-wrap"},sl=A("div",{class:"text-subtitle1 no-wrap"},"(\uB098\uBA38\uC9C0 \uBAA8\uB4E0 \uC2DD\uC7AC\uB8CC)",-1),cl=Object.assign({name:"IngResult"},{__name:"ResultProdComponent",props:{isLoading:{type:Boolean}},setup(d,{expose:k}){const e=St(),P=_t(),C=pt(),E=Ct(),p=xt(),l=nt(),h=_(P.fetchImage("pkm",C.selectedPkmDex)),r=_(C.pkmName),y=C.pkmLevel,c=C.upNature,F=C.downNature,X=e.upMult[c],s=e.downMult[F],U=C.hbCount,we=e.hbMult,ne=C.subSkills,se=e.searchPkmData("name",e.convertKorEn(r.value)),Me=e.maxHS,Se=C.evoCount,_e=C.firstIng,ce=C.secondIng,re=C.thirdIng,ie=C.mainSkillLevel,qe=e.mealRecovery,x=e.maxE,B=e.totalMainSkill,i=p.mainSkillLevel,f=E.sleepTime,o=p.calcVer,a=p.healSkillCount,u=e.timeForFull,t=p.upNature,v=p.downNature,m=p.pkmName,N=p.pkmLevel,q=p.subSkills,I=e.searchPkmData("name",e.convertKorEn(m)),V=C.erbCount,O=e.erbMult,g=e.enerPerHour,S=e.speedEnerMultList,z=p.evoCount,T=["\uD55C\uB07C","1\uC77C"],H=_(T[0]),W=_(P.fetchIcon("ing",_e.replace(/\s/g,"").toLowerCase())),D=_(P.fetchIcon("ing",ce.replace(/\s/g,"").toLowerCase())),L=_(P.fetchIcon("ing",re.replace(/\s/g,"").toLowerCase())),J=p.secondIng,de=p.thirdIng,le=_(C.useGoodCamp),Pe=ve(()=>le.value?"":"invisible"),pe=_(!0),Ce=ve(()=>r.value+"\uC758 "+(H.value==="\uD55C\uB07C"?"\uD55C\uB07C\uB2F9":"\uD558\uB8E8")+" \uC0DD\uC0B0\uB7C9");$t(()=>{C.hasEssential()&&l.onlyBaseSpeed===0&&setTimeout(function(){l.onlyBaseSpeed=l.calcBaseSpeed(y,c,F,X,s,U,we,ne,se,Me,le.value),l.finalSkillProc=l.calcSkillProc(se,c,F,X,s,ne),l.finalIngProc=l.calcIngProc(se,c,F,X,s,ne),o==="proVer"?(l.onlyBaseSpeedH=l.calcBaseSpeed(N,t,v,X,s,U,we,q,I,Me,le.value),l.finalSkillProcH=l.calcSkillProc(I,t,v,X,s,q),l.finalIngProcH=l.calcIngProc(I,t,v,X,s,q),l.calcEnergyCurve(B,y,Se,ne,ce,re,ie,se,qe,le.value,x,i,f,o,a,u,c,F,X,s,V,O,g,S,I,z,q,N,J,de,t,v)):l.calcEnergyCurve(B,y,Se,ne,ce,re,ie,se,qe,le.value,x,i,f,o,a,u,c,F,X,s,V,O,g,S,I),l.calcSpeedWithEner(S,o,g),l.calcLeveLIng(B,!1,se,y,_e,ce,re,f,g,S,Se,ne,le.value,ie)},30)});const Ne=ve(()=>H.value==="\uD55C\uB07C"?Math.round(l.totalIngCalc[_e]/3):Math.round(l.totalIngCalc[_e])),Y=ve(()=>H.value==="\uD55C\uB07C"?Math.round(l.totalIngCalc[ce]/3):Math.round(l.totalIngCalc[ce])),Ie=ve(()=>H.value==="\uD55C\uB07C"?Math.round(l.totalIngCalc[re]/3):Math.round(l.totalIngCalc[re])),Z=ve(()=>H.value==="\uD55C\uB07C"?(l.totalIngCalc.all/3).toFixed(2):l.totalIngCalc.all.toFixed(2));return k({calcLoading:pe}),(b,ee)=>(ye(),je(ht,null,[n(gt,{class:"bg-primary text-white text-center"},{default:M(()=>[n(kt,null,{default:M(()=>[Ee("\uC0DD\uC0B0\uB7C9 \uBCF4\uACE0\uC11C")]),_:1})]),_:1}),A("div",Kt,[n(Ot,{alt:"Pokemon image",src:h.value,fit:"scale-down",style:{"max-width":"300px"},"no-spinner":""},null,8,["src"]),n(Le,{bordered:"",class:"full-width bg-googleBack"},{default:M(()=>[n($e,null,{default:M(()=>[A("div",Xt,[n(qt,{class:Vt(Pe.value),size:"xl",name:"img:images/goodcampticket.png"},{default:M(()=>[n(bt,{"hide-delay":Ae(wt)()},{default:M(()=>[Ee(" \uC88B\uC740 \uCEA0\uD504 \uC801\uC6A9 \uC911! ")]),_:1},8,["hide-delay"])]),_:1},8,["class"]),n(Mt,{outlined:"",dense:"",modelValue:H.value,"onUpdate:modelValue":ee[0]||(ee[0]=me=>H.value=me),options:T},null,8,["modelValue"])]),A("div",Ut,[Ee(Qe(Ce.value)+" ",1),Wt])]),_:1}),n(De,{inset:""}),n($e,{class:"column q-gutter-y-md"},{default:M(()=>[A("div",Jt,[n(Le,null,{default:M(()=>[n($e,{class:"row bg-sSkill"},{default:M(()=>[n(Ge,{class:"shadow-1",color:"ingCircle",icon:W.value},null,8,["icon"]),n(De,{vertical:"",class:"q-mx-md"}),A("div",Yt,Qe(Ne.value)+" \uAC1C",1)]),_:1})]),_:1})]),Ae(l).checkSecondDisplay?(ye(),je("div",Zt,[n(Le,null,{default:M(()=>[n($e,{class:"row bg-sSkill"},{default:M(()=>[n(Ge,{class:"shadow-1",color:"ingCircle",icon:D.value},null,8,["icon"]),n(De,{vertical:"",class:"q-mx-md"}),A("span",el,Qe(Y.value)+" \uAC1C",1)]),_:1})]),_:1})])):Oe("",!0),Ae(l).checkThirdDisplay?(ye(),je("div",tl,[n(Le,null,{default:M(()=>[n($e,{class:"row bg-sSkill"},{default:M(()=>[n(Ge,{class:"shadow-1",color:"ingCircle",icon:L.value},null,8,["icon"]),n(De,{vertical:"",class:"q-mx-md"}),A("span",ll,Qe(Ie.value)+" \uAC1C",1)]),_:1})]),_:1})])):Oe("",!0),Ae(l).checkIngSkillDisplay?(ye(),je("div",al,[n(Le,null,{default:M(()=>[n($e,{class:"row bg-sSkill no-wrap"},{default:M(()=>[n(Ge,{class:"shadow-1",color:"ingCircle",icon:"img:images/ingall.png"}),n(De,{vertical:"",class:"q-mx-md"}),A("div",ol,[A("div",nl,Qe(Z.value)+" \uAC1C\xA0",1),sl])]),_:1})]),_:1})])):Oe("",!0)]),_:1})]),_:1})])],64))}}),rl={class:"column items-center q-gutter-y-md relative-position"},il={class:"row"},ul=A("div",{class:"q-mx-sm"},null,-1),vl={class:"text-caption q-py-sm"},ml=A("br",null,null,-1),fl=Object.assign({name:"EnerResult"},{__name:"ResultEnergyComponent",setup(d){const k=nt(),e=_();function P(){e.value.updateSeries([]),k.calcLoading=!0,setTimeout(async()=>{const p=await mt(()=>import("./tooltip.ee8be281.js").then(function(D){return D.r}),["assets/tooltip.ee8be281.js","assets/index.8cfbd384.js","assets/index.1a9317ba.css","assets/QItem.be3ebcdc.js","assets/use-timeout.29c5ea39.js"]),l=await mt(()=>import("./tooltip.ee8be281.js").then(function(D){return D.v}),["assets/tooltip.ee8be281.js","assets/index.8cfbd384.js","assets/index.1a9317ba.css","assets/QItem.be3ebcdc.js","assets/use-timeout.29c5ea39.js"]),h=p.usePkmDBStore(),r=l.useInputStore(),y=l.useHealerInputStore(),c=l.useSleepTimeInputStore(),F=_(r.pkmName),X=r.pkmLevel,s=r.upNature,U=r.downNature,we=h.upMult[s],ne=h.downMult[U],se=r.subSkills,Me=h.searchPkmData("name",h.convertKorEn(F.value)),Se=r.evoCount,_e=r.firstIng,ce=r.secondIng,re=r.thirdIng,ie=r.mainSkillLevel,qe=h.mealRecovery,x=h.maxE,B=h.totalMainSkill,i=y.mainSkillLevel,f=c.sleepTime,o=y.calcVer,a=y.healSkillCount,u=h.timeForFull,t=y.upNature,v=y.downNature,m=y.pkmName,N=y.pkmLevel,q=y.subSkills,I=h.searchPkmData("name",h.convertKorEn(m)),V=r.erbCount,O=h.erbMult,g=h.enerPerHour,S=h.speedEnerMultList,z=y.evoCount,T=y.secondIng,H=y.thirdIng,W=_(r.useGoodCamp);k.calcEnergyCurve(B,X,Se,se,ce,re,ie,Me,qe,W.value,x,i,f,o,a,u,s,U,we,ne,V,O,g,S,I,z,q,N,T,H,t,v),k.calcSpeedWithEner(S,o,g),k.calcLeveLIng(B,!1,Me,X,_e,ce,re,f,g,S,Se,se,W.value,ie),e.value.updateSeries([{name:"\uB0A8\uC740 \uAE30\uB825\uB7C9",data:k.energyAxis}])},30)}const C={chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},noData:{text:"\uAE30\uB825 \uACC4\uC0B0 \uC911..."},stroke:{curve:"straight"},xaxis:{title:{text:"\uC2DC\uAC04 \uACBD\uACFC (h)"},type:"numeric",labels:{formatter:function(p){return(p/2).toFixed(1)}}},yaxis:{title:{text:"\uB0A8\uC740 \uAE30\uB825\uB7C9 (%)"},labels:{formatter:function(p){return Math.floor(p)}},min:0,max:150},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#FDD835"],opacityFrom:1,opacityTo:.01,stops:[0,100,100,100]}}},E=[{name:"\uB0A8\uC740 \uAE30\uB825\uB7C9",data:k.energyAxis}];return(p,l)=>{const h=Ft("apexchart");return ye(),je(ht,null,[n(gt,{class:"bg-primary text-white text-center"},{default:M(()=>[n(kt,null,{default:M(()=>[Ee("\uAE30\uB825 \uBCC0\uD654 \uADF8\uB798\uD504")]),_:1})]),_:1}),A("div",rl,[n(h,{ref_key:"energyChartRef",ref:e,class:"apexchart_width",type:"area",options:C,series:E},null,512),Ae(k).finalSkillProcH>0?(ye(),Ue(Le,{key:0},{default:M(()=>[n($e,{class:"bg-sSkill"},{default:M(()=>[A("div",il,[n(Ge,{size:"md",class:"shadow-1",color:"secondary","text-color":"white",icon:"priority_high"}),ul,A("span",vl,[Ee("\uC704 \uADF8\uB798\uD504\uB294 "+Qe(Ae(k).simulationCount)+"\uD68C \uBAA8\uC758\uC2DC\uD589\uC758 \uAE30\uB313\uAC12\uC785\uB2C8\uB2E4.",1),ml,Ee("\uB9E4 \uC2DC\uD589\uB9C8\uB2E4 \uACB0\uACFC\uAC00 \uB2EC\uB77C\uC9C8 \uC218 \uC788\uC2B5\uB2C8\uB2E4.")])]),n(We,{class:"full-width",rounded:"",label:"\uAE30\uB825 \uB2E4\uC2DC \uACC4\uC0B0\uD558\uAE30",icon:"restart_alt",color:"positive",onClick:P})]),_:1})]),_:1})):Oe("",!0)])],64)}}});function dt(d){Lt.create({color:"red-4",textColor:"white",icon:"block",message:d})}const yl=Object.assign({name:"ResultPage"},{__name:"ResultPage",setup(d){const k=pt(),e=nt(),P=ft();Qt(()=>{k.hasEssential()||(ft().push("/prodcalc"),dt("\uD3EC\uCF13\uBAAC \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"))}),At(()=>{e.clearCalc()});let C=null;Et(()=>{k.hasEssential()&&(e.calcLoading?(Pt("\uACC4\uC0B0 \uC911..."),C=setTimeout(()=>{e.calcLoading&&(ut(),P.push("prodCalc"),dt("\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694"))},12e4)):(clearTimeout(C),ut()))});const E=_(1),p=_();function l(){P.push("/prodcalc"),e.clearCalc()}return(h,r)=>(ye(),Ue(zt,{class:"row justify-center bg-googleDark relative-position"},{default:M(()=>[n(It,{modelValue:E.value,"onUpdate:modelValue":r[2]||(r[2]=y=>E.value=y),ref_key:"stepper",ref:p,contracted:"",color:"primary","active-icon":"none",class:"col-xs-12 col-sm-9 col-md-8 col-lg-6 col-xl-4 bg-googleBack",animated:""},{navigation:M(()=>[n(Nt,{class:"row justify-between"},{default:M(()=>[n(We,{push:"",icon:"refresh",color:"primary",onClick:l,label:"\uB2E4\uC2DC\uD558\uAE30","text-color":"white"}),A("div",null,[E.value>1?(ye(),Ue(We,{key:0,flat:"",color:"primary",onClick:r[0]||(r[0]=y=>p.value.previous()),label:"\uB4A4\uB85C",class:"q-ml-sm"})):Oe("",!0),E.value<2?(ye(),Ue(We,{key:1,onClick:r[1]||(r[1]=y=>p.value.next()),color:"primary",label:"\uB2E4\uC74C"})):Oe("",!0)])]),_:1})]),default:M(()=>[n(vt,{name:1,title:"\uC0DD\uC0B0\uB7C9 \uBCF4\uACE0\uC11C",icon:"assignment"},{default:M(()=>[n(cl)]),_:1}),n(vt,{name:2,title:"\uAE30\uB825 \uADF8\uB798\uD504",icon:"favorite"},{default:M(()=>[n(fl)]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{yl as default};
