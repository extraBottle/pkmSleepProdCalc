import{Q as fe,a as X,b as ce}from"./inputStore.e97bb85b.js";import{r as c,P as S,a3 as N,V as s,T as r,Z as C,W as v,_ as E,k as ve,a2 as V,a5 as le,a4 as me,S as T,U as I,Y as R}from"./index.90fbc5fb.js";import{a as A,Q as pe}from"./QPage.58da9199.js";import{u as be,_ as xe}from"./ChoosePkmComponent.84398979.js";import{e as oe,d as ne}from"./QItem.c417bd71.js";import{b as P,Q as q,a as he,C as ye}from"./ClosePopup.4e4d0bd8.js";import{Q as te}from"./QSpace.a57a0050.js";import{a as ge}from"./QDialog.c82e72ac.js";import{u as _e,a as Oe}from"./tooltip.e36bb1e7.js";import{t as ke}from"./gtmAddEvent.0e913640.js";import"./use-panel.9e87959c.js";import"./touch.3df10340.js";import"./selection.1617fba2.js";import"./QSelect.b9d368c1.js";import"./TouchPan.037c4b1d.js";import"./QFabAction.99d11560.js";import"./QRadio.79c348ed.js";import"./use-quasar.ba030090.js";import"./index.6d604d12.js";const Se={tier1:["\uC2A4\uD0AC \uD655\uB960 \uC5C5 M","\uC2A4\uD0AC \uD655\uB960 \uC5C5 s"],tier2:["\uB3C4\uC6B0\uBBF8 \uBCF4\uB108\uC2A4","gold","\uB098\uBB34\uC5F4\uB9E4 \uC218 s","\uC2A4\uD0AC \uB808\uBCA8 \uC5C5 M","\uC2A4\uD0AC \uB808\uBCA8 \uC5C5 s","\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC M","\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC s"],tier3:["\uC2DD\uC7AC\uB8CC \uD655\uB960 \uC5C5 M","\uC2DD\uC7AC\uB8CC \uD655\uB960 \uC5C5 s"],tier4:["\uCD5C\uB300 \uC18C\uC9C0 \uC218 \uC5C5 L","\uCD5C\uB300 \uC18C\uC9C0 \uC218 \uC5C5 M","\uCD5C\uB300 \uC18C\uC9C0 \uC218 \uC5C5 s"],performance:"good",subScore:{blank:0}},Me={tier1:["\uC2A4\uD0AC \uD655\uB960 \uC5C5 M","\uC2A4\uD0AC \uD655\uB960 \uC5C5 s"],tier2:["\uB098\uBB34\uC5F4\uB9E4 \uC218 s","\uC2A4\uD0AC \uB808\uBCA8 \uC5C5 M","\uB3C4\uC6B0\uBBF8 \uBCF4\uB108\uC2A4","\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC M","\uC2A4\uD0AC \uB808\uBCA8 \uC5C5 s","gold","\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC s"],tier3:["\uC2DD\uC7AC\uB8CC \uD655\uB960 \uC5C5 M","\uC2DD\uC7AC\uB8CC \uD655\uB960 \uC5C5 s"],tier4:["\uCD5C\uB300 \uC18C\uC9C0 \uC218 \uC5C5 L","\uCD5C\uB300 \uC18C\uC9C0 \uC218 \uC5C5 M","\uCD5C\uB300 \uC18C\uC9C0 \uC218 \uC5C5 s"],performance:"good",subScore:{blank:0}},we={tier1:["\uC2A4\uD0AC \uD655\uB960 \uC5C5 M","\uB098\uBB34\uC5F4\uB9E4 \uC218 s"],tier2:["\uB3C4\uC6B0\uBBF8 \uBCF4\uB108\uC2A4","\uC2A4\uD0AC \uB808\uBCA8 \uC5C5 M","\uC2A4\uD0AC \uD655\uB960 \uC5C5 s","gold","\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC M","\uC2A4\uD0AC \uB808\uBCA8 \uC5C5 s","\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC s"],tier3:["\uC2DD\uC7AC\uB8CC \uD655\uB960 \uC5C5 M","\uC2DD\uC7AC\uB8CC \uD655\uB960 \uC5C5 s"],tier4:["\uCD5C\uB300 \uC18C\uC9C0 \uC218 \uC5C5 L","\uCD5C\uB300 \uC18C\uC9C0 \uC218 \uC5C5 M","\uCD5C\uB300 \uC18C\uC9C0 \uC218 \uC5C5 s"],performance:"mid",subScore:{blank:0}},je={tier1:["\uC2A4\uD0AC \uD655\uB960 \uC5C5 M","\uB098\uBB34\uC5F4\uB9E4 \uC218 s"],tier2:["\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC M","\uC2A4\uD0AC \uB808\uBCA8 \uC5C5 M","\uC2A4\uD0AC \uD655\uB960 \uC5C5 s","\uB3C4\uC6B0\uBBF8 \uBCF4\uB108\uC2A4","\uC2A4\uD0AC \uB808\uBCA8 \uC5C5 s","\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC s","gold"],tier3:["\uC2DD\uC7AC\uB8CC \uD655\uB960 \uC5C5 M","\uC2DD\uC7AC\uB8CC \uD655\uB960 \uC5C5 s"],tier4:["\uCD5C\uB300 \uC18C\uC9C0 \uC218 \uC5C5 L","\uCD5C\uB300 \uC18C\uC9C0 \uC218 \uC5C5 M","\uCD5C\uB300 \uC18C\uC9C0 \uC218 \uC5C5 s"],performance:"mid",subScore:{blank:0}},Ce={tier1:["\uB098\uBB34\uC5F4\uB9E4 \uC218 s","\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC M"],tier2:["\uB3C4\uC6B0\uBBF8 \uBCF4\uB108\uC2A4","gold","\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC s","\uC2A4\uD0AC \uD655\uB960 \uC5C5 M"],tier3:["\uC2A4\uD0AC \uB808\uBCA8 \uC5C5 M","\uC2A4\uD0AC \uD655\uB960 \uC5C5 s","\uC2A4\uD0AC \uB808\uBCA8 \uC5C5 s","\uC2DD\uC7AC\uB8CC \uD655\uB960 \uC5C5 M","\uC2DD\uC7AC\uB8CC \uD655\uB960 \uC5C5 s"],tier4:["\uCD5C\uB300 \uC18C\uC9C0 \uC218 \uC5C5 L","\uCD5C\uB300 \uC18C\uC9C0 \uC218 \uC5C5 M","\uCD5C\uB300 \uC18C\uC9C0 \uC218 \uC5C5 s"],performance:"mid",subScore:{blank:0}};var u={sylveon:Se,espeon:Me,jolteon:we,vaporeon:je,umbreon:Ce};const Ee={class:"column items-center q-px-md"},Pe={class:"relative-position full-width row justify-center"},Qe={class:"q-mb-md"},Te={class:"text-h4 text-weight-bold"},Le={key:0},qe=v("div",{class:"text-subtitle1 text-bold"},"\uC801\uD569\uB3C4:",-1),Ne={class:"text-h4 text-weight-bold"},Ve=v("div",{class:"text-subtitle1 text-bold"},"\uC18C\uAC1C:",-1),De=v("div",{class:"text-subtitle1 text-bold"},"\uD3C9\uAC00 \uC911\uC810\uC0AC\uD56D:",-1),$e={key:1},Be=v("br",null,null,-1),Ie=v("div",null,"\uB2E4\uB978 \uCD94\uCC9C \uD6C4\uBCF4\uAD70(\uC704\uB85C \uAC08\uC218\uB85D \uB354 \uCD94\uCC9C)",-1),Re={class:"full-width row flex-center"},Ge={class:"text-h6 text-bold"},ze={class:"text-h6"},Fe={class:"text-bold"},Ue={__name:"EeveelutionResultComponent",setup(W){const x=_e(),w=Oe(),y=be(),M=c(),m=["\uB2D8\uD53C\uC544","\uC5D0\uBE0C\uC774","\uC0E4\uBBF8\uB4DC","\uC96C\uD53C\uC36C\uB354","\uBE14\uB798\uD0A4","\uAE00\uB808\uC774\uC2DC\uC544","\uBD80\uC2A4\uD130","\uB9AC\uD53C\uC544"],e=["sylveon","espeon","vaporeon","jolteon","umbreon","glaceon","flareon","leafeon"],G=["\uAE00\uB808\uC774\uC2DC\uC544","\uBD80\uC2A4\uD130","\uB9AC\uD53C\uC544"],D=w.teamSubSkillList.slice();D.shift();const k=c(y.subSkills),p=c(y.upNature),f=c(y.downNature),_=c(y.preferEevee),$=c(y.fullSleep),Y=c(),Z=c(),H=c(),J=c(),B=c(),z=c(),F=c();let l=[{sylveon:0},{espeon:0},{vaporeon:0},{jolteon:0},{umbreon:0}];function h(o){for(let i=0;i<l.length;i++)l[i][e[i]]+=o}function K(o){for(let i=0;i<y.eeveelutionList.length;i++)if(y.eeveelutionList[i].label===o)return y.eeveelutionList[i].dex}f.value==="\uBA54\uC778 \uC2A4\uD0AC \uBC1C\uB3D9\uB960 \u25BD\u25BD"&&h(-1),p.value==="\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC \u25B2\u25B2"?f.value==="\uAE30\uB825 \uD68C\uBCF5\uB7C9 \u25BD\u25BD"?(l[e.indexOf("umbreon")].umbreon+=.5,l[e.indexOf("sylveon")].sylveon+=.1):f.value==="\uC2DD\uC7AC\uB8CC \uB3C4\uC6B0\uBBF8 \uD655\uB960 \u25BD\u25BD"?(l[e.indexOf("sylveon")].sylveon+=.2,l[e.indexOf("espeon")].espeon+=.2,l[e.indexOf("umbreon")].umbreon+=1,l[e.indexOf("jolteon")].jolteon+=1,l[e.indexOf("vaporeon")].vaporeon+=1):f.value==="EXP \uD68D\uB4DD\uB7C9 \u25BD\u25BD"?(h(1),l[e.indexOf("sylveon")].sylveon-=.8,l[e.indexOf("espeon")].espeon-=.8):f.value==="\uBA54\uC778 \uC2A4\uD0AC \uBC1C\uB3D9\uB960 \u25BD\u25BD"&&(h(.5),l[e.indexOf("umbreon")].umbreon-=.5,l[e.indexOf("sylveon")].sylveon-=.5):p.value==="\uAE30\uB825 \uD68C\uBCF5\uB7C9 \u25B2\u25B2"?f.value==="\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC \u25BD\u25BD"?$.value?(h(-.5),l[e.indexOf("sylveon")].sylveon+=.3,l[e.indexOf("espeon")].espeon+=.2,l[e.indexOf("jolteon")].jolteon+=.1):(h(-.2),l[e.indexOf("sylveon")].sylveon+=.2,l[e.indexOf("espeon")].espeon+=.2,l[e.indexOf("jolteon")].jolteon+=.1):f.value==="\uC2DD\uC7AC\uB8CC \uB3C4\uC6B0\uBBF8 \uD655\uB960 \u25BD\u25BD"?$.value?(h(-.5),l[e.indexOf("sylveon")].sylveon+=.5,l[e.indexOf("espeon")].espeon+=.3):(l[e.indexOf("sylveon")].sylveon+=.2,l[e.indexOf("espeon")].espeon+=.2,l[e.indexOf("umbreon")].umbreon+=.5,l[e.indexOf("jolteon")].jolteon+=.5,l[e.indexOf("vaporeon")].vaporeon+=.5):f.value==="EXP \uD68D\uB4DD\uB7C9 \u25BD\u25BD"&&($.value?(h(-.5),l[e.indexOf("sylveon")].sylveon+=.5,l[e.indexOf("espeon")].espeon+=.3):(h(.5),l[e.indexOf("sylveon")].sylveon-=.3,l[e.indexOf("espeon")].espeon-=.3)):p.value==="\uC2DD\uC7AC\uB8CC \uB3C4\uC6B0\uBBF8 \uD655\uB960 \u25B2\u25B2"?f.value==="\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC \u25BD\u25BD"?(h(-.5),l[e.indexOf("sylveon")].sylveon+=.2,l[e.indexOf("espeon")].espeon+=.2,l[e.indexOf("jolteon")].jolteon+=.1):f.value==="\uAE30\uB825 \uD68C\uBCF5\uB7C9 \u25BD\u25BD"&&(h(-.5),l[e.indexOf("sylveon")].sylveon+=.3,l[e.indexOf("espeon")].espeon+=.2):p.value==="\uBA54\uC778 \uC2A4\uD0AC \uBC1C\uB3D9\uB960 \u25B2\u25B2"?f.value==="\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC \u25BD\u25BD"?(h(.5),l[e.indexOf("sylveon")].sylveon+=.5,l[e.indexOf("espeon")].espeon+=.5,l[e.indexOf("jolteon")].jolteon+=.1,l[e.indexOf("umbreon")].umbreon-=1):f.value==="\uAE30\uB825 \uD68C\uBCF5\uB7C9 \u25BD\u25BD"?(h(1),l[e.indexOf("sylveon")].sylveon+=.5,l[e.indexOf("umbreon")].umbreon-=1):(f.value==="\uC2DD\uC7AC\uB8CC \uB3C4\uC6B0\uBBF8 \uD655\uB960 \u25BD\u25BD"||f.value==="EXP \uD68D\uB4DD\uB7C9 \u25BD\u25BD")&&(l[e.indexOf("sylveon")].sylveon+=1.5,l[e.indexOf("espeon")].espeon+=1.5,l[e.indexOf("umbreon")].umbreon+=.5,l[e.indexOf("jolteon")].jolteon+=1,l[e.indexOf("vaporeon")].vaporeon+=1):p.value==="EXP \uD68D\uB4DD\uB7C9 \u25B2\u25B2"&&(f.value==="\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC \u25BD\u25BD"?(h(-.5),l[e.indexOf("sylveon")].sylveon+=.2,l[e.indexOf("espeon")].espeon+=.2,l[e.indexOf("jolteon")].jolteon+=.1):f.value==="\uAE30\uB825 \uD68C\uBCF5\uB7C9 \u25BD\u25BD"?(h(-.5),l[e.indexOf("sylveon")].sylveon+=.3,l[e.indexOf("espeon")].espeon+=.2,l[e.indexOf("umbreon")].umbreon+=.3):f.value==="\uC2DD\uC7AC\uB8CC \uB3C4\uC6B0\uBBF8 \uD655\uB960 \u25BD\u25BD"&&(h(.3),l[e.indexOf("sylveon")].sylveon-=.2,l[e.indexOf("espeon")].espeon-=.2));const ee={goodTier:[1,.3,.1,0],midTier:[1,.5,.3,0]},se={goodTier1:.5,midTier1:.2,allTier:.01};for(const o of e.slice(0,l.length)){let i=u[o].performance==="good"?"goodTier":"midTier";for(let d=0;d<4;d++){let b="tier"+(d+1);for(let t=0;t<u[o][b].length;t++){let O=b==="tier1"?i+"1":"allTier";b==="tier4"?u[o].subScore[u[o][b][t]]=ee[i][d]:u[o].subScore[u[o][b][t]]=ee[i][d]-t*se[O]}}D.forEach(d=>{u[o].subScore[d]=u[o].subScore.gold}),$.value&&(u[o].subScore["\uAE30\uB825 \uD68C\uBCF5 \uBCF4\uB108\uC2A4"]=0)}function j(o,i){let d=0;return i.forEach(b=>{d+=u[o].subScore[b.label]}),d}for(const o of e.slice(0,l.length)){for(let i=0;i<k.value.length;i++)if(k.value[i].label==="\uB098\uBB34\uC5F4\uB9E4 \uC218 s"&&f.value==="\uC2DD\uC7AC\uB8CC \uB3C4\uC6B0\uBBF8 \uD655\uB960 \u25BD\u25BD"){l[e.indexOf(o)][o]+=.5;break}l[e.indexOf(o)][o]+=j(o,k.value)}const ae=j("sylveon",[{label:"\uC2A4\uD0AC \uD655\uB960 \uC5C5 M"},{label:"\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC M"}]),ie=1+j("espeon",[{label:"\uC2A4\uD0AC \uD655\uB960 \uC5C5 M"},{label:"\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC M"}]),ue=.5+j("umbreon",[{label:"\uB098\uBB34\uC5F4\uB9E4 \uC218 s"},{label:"\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC M"}]),re=.5+j("jolteon",[{label:"\uB3C4\uC6B0\uBBF8 \uBCF4\uB108\uC2A4"},{label:"\uC2A4\uD0AC \uB808\uBCA8 \uC5C5 s"}]),de=.5+j("vaporeon",[{label:"\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC M"},{label:"\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC s"}]);let n={sylveon:{cut:ae},espeon:{cut:ie},umbreon:{cut:ue},jolteon:{cut:re},vaporeon:{cut:de}};for(const o of e.slice(0,l.length)){let i,d,b,t,O;i=u[o].tier1[0],d=u[o].tier1[1],b=u[o].tier2[0],t=u[o].tier2[1],O=u[o].tier2[2];let g=[];switch(k.value.length){case 5:g.push({label:O});case 4:g.push({label:t});case 3:g.push({label:b});case 2:g.push({label:d});case 1:g.push({label:i})}if(n[o].max=j(o,g),u[o].tier4.length!==0){switch(i=u[o].tier4[0],d=u[o].tier4[1],b=u[o].tier4[2],t=u[o].tier3[u[o].tier3.length-1],O=u[o].tier3[u[o].tier3.length-2],g=[],k.value.length){case 5:g.push({label:O});case 4:g.push({label:t});case 3:g.push({label:b});case 2:g.push({label:d});case 1:g.push({label:i})}n[o].min=j(o,g)}else{let Q=[];for(let L=0;L<5;L++)u[o].tier3.length>L?Q.push(u[o].tier3[u[o].tier3.length-1-L]):Q.push(u[o].tier3[u[o].tier2.length-1-L]);n[o].min=j(o,[{label:Q[0]},{label:Q[1]},{label:Q[2]},{label:Q[3]},{label:Q[4]}])}}n.sylveon.max+=2,n.espeon.max+=2,n.jolteon.max+=1.5,n.vaporeon.max+=1.5,n.umbreon.max+=1.5,n.sylveon.min-=1,n.espeon.min-=1,n.jolteon.min-=1,n.vaporeon.min-=1,n.umbreon.min-=1;const a=c([]);let U=[];for(const o of e.slice(0,l.length))n[o].cut<=l[e.indexOf(o)][o]&&a.value.push(o);if(a.value.length!==0){if(a.value.includes(e[0])||a.value.includes(e[1]))if(a.value.includes(e[0])&&a.value.includes(e[1])){if(l[1][e[1]]>l[0][e[0]]){const t=a.value[1];a.value[1]=a.value[0],a.value[0]=t}U=a.value.slice(0,2),a.value=a.value.slice(2)}else U.push(a.value.shift());a.value.sort((t,O)=>l[e.indexOf(O)][O]-l[e.indexOf(t)][t]),a.value=U.concat(a.value),a.value[0]===void 0&&a.value.shift();for(const t of a.value)l[t]>=n[t].max?n[t].percent=100:(n[t].percent=100*(l[e.indexOf(t)][t]-n[t].min)/(n[t].max-n[t].min),n[t].cutPercent=100*(n[t].cut-n[t].min)/(n[t].max-n[t].min));if(_.value.label!==void 0&&_.value.label!=="\uC5C6\uC74C")if(G.indexOf(_.value.label)===-1)a.value.indexOf(e[m.indexOf(_.value.label)])!==-1&&(a.value.splice(a.value.indexOf(e[m.indexOf(_.value.label)]),1),a.value.unshift(e[m.indexOf(_.value.label)]));else if(_.value.label==="\uB9AC\uD53C\uC544")a.value.indexOf("sylveon")!==-1&&(a.value.unshift(e[m.indexOf(_.value.label)]),n[e[m.indexOf(_.value.label)]]=n.sylveon);else{let t=e.slice(2,4);for(const O of t)if(a.value.indexOf(O)!==-1){a.value.unshift(e[m.indexOf(_.value.label)]),n[e[m.indexOf(_.value.label)]]=n[O],console.log(e[m.indexOf(_.value.label)]);break}}const o=a.value.shift();B.value=m[e.indexOf(o)];const i={sylveon:"\uD3EC\uCF13\uBAAC \uC2AC\uB9BD \uB0B4\uC5D0\uC11C \uBA87 \uC548\uB418\uB294 \uAE30\uB825 \uC11C\uD3EC\uD130 \uD3EC\uCF13\uBAAC\uC785\uB2C8\uB2E4. \uAE30\uB825\uC740 \uD3EC\uCF13\uBAAC\uB4E4\uC758 \uB3C4\uC6B0\uBBF8 \uD6A8\uC728\uACFC \uC9C1\uACB0\uB418\uBBC0\uB85C \uADF8 \uC911\uC694\uC131\uC740 \uC774\uB8E8 \uB2E4 \uB9D0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uC11C\uD3EC\uD130 \uD3EC\uCF13\uBAAC \uD2B9\uC131 \uC0C1 \uC5B4\uB5A0\uD55C \uD30C\uD2F0\uC5D0\uB3C4 \uC27D\uAC8C \uC5B4\uC6B0\uB7EC\uC9D1\uB2C8\uB2E4. \uCD5C\uC18C\uD55C\uC758 \uC870\uAC74\uB9CC \uAC16\uCD94\uBA74 \uBC14\uB85C \uD6CC\uB96D\uD55C \uC131\uB2A5\uC744 \uBC1C\uD718\uD558\uAE30\uC5D0 \uAC1C\uCCB4 \uC120\uBCC4\uB3C4 \uC26C\uC6B4 \uD3B8\uC785\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uBCF5\uD569\uC801\uC778 \uC774\uC720\uB85C \uC774\uBE0C\uC774 \uC9C4\uD654\uCCB4 \uC911\uC5D0\uC11C\uB3C4 \uCD5C\uC0C1\uC704\uAD8C\uC73C\uB85C \uD3C9\uAC00 \uBC1B\uACE0 \uC788\uC2B5\uB2C8\uB2E4.",espeon:"\uD3EC\uCF13\uBAAC \uC2AC\uB9BD \uB0B4\uC5D0\uC11C \uCD5C\uACE0\uC758 \uC2A4\uD0AC \uC911 \uD558\uB098\uB85C \uD3C9\uAC00 \uBC1B\uB294 '\uC5D0\uB108\uC9C0 \uCC28\uC9C0 M' \uC2A4\uD0AC\uC744 \uBCF4\uC720\uD55C \uD3EC\uCF13\uBAAC\uC785\uB2C8\uB2E4. \uC2A4\uD0AC \uB808\uBCA8\uC5D0 \uB530\uB978 \uC5D0\uB108\uC9C0 \uC99D\uAC00\uB7C9\uC774 \uAE30\uD558\uAE09\uC218\uC801\uC73C\uB85C \uB298\uC5B4\uB098\uB294 \uAC83\uC774 \uD2B9\uC9D5\uC785\uB2C8\uB2E4. \uBA54\uC778 \uC2A4\uD0AC 6\uB819 \uAE30\uC900 \uC7A0\uB9CC\uBCF4\uC5D0\uAC8C 4546\uC758 \uC5D0\uB108\uC9C0\uB97C \uC8FC\uBA70, \uC774\uB294 \uC801\uB2F9\uD55C \uC694\uB9AC 1\uAC1C \uBD84\uB7C9\uC758 \uC5D0\uB108\uC9C0\uC785\uB2C8\uB2E4.",vaporeon:"\uBB34\uC791\uC704 \uC885\uB958\uC758 \uC2DD\uC7AC\uB8CC\uB97C \uCD5C\uB300 21\uAC1C\uAE4C\uC9C0 \uC8FC\uB294 '\uC2DD\uC7AC\uB8CC \uD68D\uB4DD S'\uC2A4\uD0AC\uC744 \uBCF4\uC720\uD55C \uD3EC\uCF13\uBAAC\uC785\uB2C8\uB2E4. \uC2A4\uD0AC \uC790\uCCB4\uC758 \uC131\uB2A5\uC740 \uB9E4\uC6B0 \uC6B0\uC218\uD558\uAE30\uC5D0 \uB3D9\uC77C\uD55C \uC2A4\uD0AC\uC744 \uBCF4\uC720\uD55C \uBE44\uC2A4\uD0AC\uD615 \uD3EC\uCF13\uBAAC\uB4E4\uB3C4 \uC6EC\uB9CC\uD558\uBA74 \uBA54\uC778 \uC2A4\uD0AC \uBC1C\uB3D9\uB960 \uAC10\uC18C\uB294 \uD53C\uD558\uB294 \uD3B8\uC785\uB2C8\uB2E4. \uB290\uB9B0 \uB3C4\uC6B0\uBBF8 \uC18D\uB3C4\uC758 \uBC18\uB300\uAE09\uBD80\uB85C \uB192\uC740 \uC2A4\uD0AC \uBC1C\uB3D9 \uD655\uB960\uC744 \uBCF4\uC720\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.",jolteon:"\uD3EC\uCF13\uBAAC \uC2AC\uB9BD \uB0B4\uC5D0\uC11C \uB77C\uC774\uCE04, \uD32C\uD140\uACFC \uB354\uBD88\uC5B4 \uC81C\uC77C \uBE60\uB978 \uB3C4\uC6B0\uBBF8 \uC18D\uB3C4\uB97C \uBCF4\uC720\uD55C \uD3EC\uCF13\uBAAC\uC785\uB2C8\uB2E4. \uADF8\uB807\uAE30\uC5D0 \uC2A4\uD0AC\uC744 \uBC30\uC81C\uD574\uB3C4 \uC790\uCCB4 \uC2A4\uD399\uC774 \uB9E4\uC6B0 \uB6F0\uC5B4\uB0A9\uB2C8\uB2E4. \uC96C\uD53C\uC36C\uB354\uB294 \uB3D9\uB8CC \uD3EC\uCF13\uBAAC\uC774 \uC77C\uC815 \uD69F\uC218 \uC989\uC2DC \uB3C4\uC6C0\uC744 \uBC1C\uB3D9\uD558\uB294 \uC2A4\uD0AC\uC744 \uBCF4\uC720\uD588\uB294\uB370, \uC774\uB294 \uB3D9\uB8CC \uD3EC\uCF13\uBAAC\uC758 \uC131\uB2A5\uC5D0 \uB530\uB77C \uD3B8\uCC28\uAC00 \uD07D\uB2C8\uB2E4. \uB530\uB77C\uC11C \uB2E8\uB3C5\uC73C\uB85C\uB3C4 \uACE0\uC131\uB2A5\uC744 \uB0B4\uB294 \uC5D0\uBE0C\uC774\uC5D0 \uBC00\uB9AC\uB294 \uAC83\uC774 \uC0AC\uC2E4\uC785\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uAC8C\uC784 \uD6C4\uBC18\uC73C\uB85C \uAC08\uC218\uB85D, \uD300 \uD3EC\uCF13\uBAAC\uC758 \uC131\uB2A5\uC774 \uC88B\uC544\uC9C8\uC218\uB85D \uC7A0\uC7AC\uB2A5\uB825\uC740 \uCDA9\uBD84\uD55C \uD3EC\uCF13\uBAAC\uC785\uB2C8\uB2E4.",umbreon:"\uC0C1\uB2F9\uD788 \uD765\uBBF8\uB85C\uC6B4 \uAD6C\uC870\uB97C \uC9C0\uB2CC \uD3EC\uCF13\uBAAC\uC785\uB2C8\uB2E4. \uB192\uC740 \uC2A4\uD0AC \uBC1C\uB3D9 \uD655\uB960\uB85C \uC790\uCCB4 \uAE30\uB825 \uC720\uC9C0\uC5D0 \uC6A9\uC774\uD569\uB2C8\uB2E4\uB9CC, \uADF8\uAC83 \uBFD0\uC774\uB77C\uB294 \uC810\uC774 \uC544\uC27D\uC2B5\uB2C8\uB2E4.",glaceon:"\uC694\uB9AC\uC5D0 \uD544\uC694\uD55C \uB0C4\uBE44 \uC6A9\uB7C9\uC744 \uB298\uB9AC\uB294 \uB3C5\uD2B9\uD55C \uC2A4\uD0AC\uC744 \uBCF4\uC720\uD55C \uD3EC\uCF13\uBAAC\uC785\uB2C8\uB2E4. \uC0AC\uC2E4 \uC790\uCCB4\uC801\uC73C\uB85C \uC7A0\uB9CC\uBCF4 \uC5D0\uB108\uC9C0\uC5D0 \uAE30\uC5EC\uD558\uB294 \uB2A5\uB825\uC774 \uC5C6\uACE0, \uB3D9\uB8CC \uD3EC\uCF13\uBAAC\uC774 \uBAA8\uC740 \uC2DD\uC7AC\uB8CC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uD574\uC8FC\uB294 \uB2A5\uB825\uC774\uB77C \uC0AC\uC6A9\uCC98\uAC00 \uD55C\uC815\uB41C \uD3EC\uCF13\uBAAC\uC785\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uBC18\uB300\uB85C \uC2DD\uC7AC\uB8CC \uC911\uC2EC \uD30C\uD2F0\uB77C\uBA74 \uBC18\uB4DC\uC2DC \uD544\uC694\uD55C \uB140\uC11D\uC785\uB2C8\uB2E4.",flareon:"\uC694\uB9AC\uC5D0 \uD544\uC694\uD55C \uB0C4\uBE44 \uC6A9\uB7C9\uC744 \uB298\uB9AC\uB294 \uB3C5\uD2B9\uD55C \uC2A4\uD0AC\uC744 \uBCF4\uC720\uD55C \uD3EC\uCF13\uBAAC\uC785\uB2C8\uB2E4. \uC0AC\uC2E4 \uC790\uCCB4\uC801\uC73C\uB85C \uC7A0\uB9CC\uBCF4 \uC5D0\uB108\uC9C0\uC5D0 \uAE30\uC5EC\uD558\uB294 \uB2A5\uB825\uC774 \uC5C6\uACE0, \uB3D9\uB8CC \uD3EC\uCF13\uBAAC\uC774 \uBAA8\uC740 \uC2DD\uC7AC\uB8CC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uD574\uC8FC\uB294 \uB2A5\uB825\uC774\uB77C \uC0AC\uC6A9\uCC98\uAC00 \uD55C\uC815\uB41C \uD3EC\uCF13\uBAAC\uC785\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uBC18\uB300\uB85C \uC2DD\uC7AC\uB8CC \uC911\uC2EC \uD30C\uD2F0\uB77C\uBA74 \uBC18\uB4DC\uC2DC \uD544\uC694\uD55C \uB140\uC11D\uC785\uB2C8\uB2E4.",leafeon:"\uD3EC\uCF13\uBAAC \uC2AC\uB9BD \uB0B4\uC5D0\uC11C \uBA87 \uC548\uB418\uB294 \uAE30\uB825 \uC11C\uD3EC\uD130 \uD3EC\uCF13\uBAAC\uC785\uB2C8\uB2E4. \uAE30\uB825\uC740 \uD3EC\uCF13\uBAAC\uB4E4\uC758 \uB3C4\uC6B0\uBBF8 \uD6A8\uC728\uACFC \uC9C1\uACB0\uB418\uBBC0\uB85C \uADF8 \uC911\uC694\uC131\uC740 \uC774\uB8E8 \uB2E4 \uB9D0\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uC11C\uD3EC\uD130 \uD3EC\uCF13\uBAAC \uD2B9\uC131 \uC0C1 \uC5B4\uB5A0\uD55C \uD30C\uD2F0\uC5D0\uB3C4 \uC27D\uAC8C \uC5B4\uC6B0\uB7EC\uC9D1\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uBB34\uC791\uC704\uC758 \uD3EC\uCF13\uBAAC\uC5D0\uAC8C \uAE30\uB825\uC744 \uD68C\uBCF5\uC2DC\uCF1C\uC900\uB2E4\uB294 \uC810\uC740 \uC544\uC27D\uC2B5\uB2C8\uB2E4."},d={sylveon:"\uBCC4\uB2E4\uB978 \uC900\uBE44 \uC5C6\uC774\uB3C4 \uD6CC\uB96D\uD55C \uC11C\uD3EC\uD305 \uB2A5\uB825\uC744 \uBCF4\uC785\uB2C8\uB2E4. \uADF8\uB807\uAE30\uC5D0 \uC6EC\uB9CC\uD558\uBA74 \uC801\uD569 \uD310\uC815\uC744 \uC8FC\uB824\uACE0 \uD588\uC2B5\uB2C8\uB2E4. '\uC2A4\uD0AC \uD655\uB960\uC5C5 M', '\uC2A4\uD0AC \uD655\uB960\uC5C5 S', \uADF8\uB9AC\uACE0 '\uBA54\uC778 \uC2A4\uD0AC \uBC1C\uB3D9\uB960 \uC99D\uAC00' \uC131\uACA9\uC774 \uACE0\uD3C9\uAC00\uB97C \uBC1B\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uC11C\uD3EC\uD130\uC758 \uD2B9\uC131\uC744 \uACE0\uB824\uD574, \uD300 \uC804\uCCB4\uB97C \uC11C\uD3EC\uD305\uD558\uB294 \uC11C\uBE0C \uC2A4\uD0AC\uC5D0 \uAC00\uC0B0\uC810\uC744 \uC8FC\uC5C8\uC2B5\uB2C8\uB2E4.",espeon:"\uBA54\uC778 \uC2A4\uD0AC\uC758 \uC131\uB2A5\uC774 \uC555\uB3C4\uC801\uC774\uAE30\uC5D0 \uC2A4\uD0AC \uAD00\uB828 \uB2A5\uB825\uCE58\uC5D0 \uB192\uC740 \uBE44\uC911\uC744 \uB450\uC5C8\uC2B5\uB2C8\uB2E4. '\uC2A4\uD0AC \uD655\uB960\uC5C5 M', '\uC2A4\uD0AC \uD655\uB960\uC5C5 S', \uADF8\uB9AC\uACE0 '\uBA54\uC778 \uC2A4\uD0AC \uBC1C\uB3D9\uB960 \uC99D\uAC00' \uC131\uACA9\uC774 \uACE0\uD3C9\uAC00\uB97C \uBC1B\uC2B5\uB2C8\uB2E4. \uB2D8\uD53C\uC544\uC640 \uC720\uC0AC\uD55C \uC870\uAC74\uC744 \uAC16\uCDC4\uC9C0\uB9CC, \uD300 \uC5D0\uC774\uC2A4\uC758 \uC5ED\uD560\uC774\uAE30\uC5D0 \uBCF4\uB2E4 \uC5C4\uACA9\uD55C \uAE30\uC900\uC744 \uC801\uC6A9\uD588\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC5D0\uBE0C\uC774\uAC00 \uCD94\uCC9C\uC73C\uB85C \uB098\uC654\uC73C\uBA74 \uC6EC\uB9CC\uD558\uBA74 \uB2D8\uD53C\uC544\uB85C\uB3C4 \uD6CC\uB96D\uD55C \uCE5C\uAD6C\uC785\uB2C8\uB2E4.",vaporeon:"\uB290\uB9B0 \uB3C4\uC6B0\uBBF8 \uC18D\uB3C4\uB97C \uBCF4\uC644\uD558\uB294 \uB370 \uC911\uC810\uC744 \uB450\uC5C8\uC2B5\uB2C8\uB2E4. \uBE44\uC2B7\uD55C \uACBD\uC7C1 \uC0C1\uB300\uC778 \uC96C\uD53C\uC36C\uB354\uC640 \uC870\uAC74\uC774 \uBE44\uC2B7\uD558\uC9C0\uB9CC, \uB3D9\uB8CC \uC11C\uD3EC\uD305\uC5D0 \uBB34\uAC8C\uB97C \uB454 \uC96C\uD53C\uC36C\uB354\uC5D0 \uBE44\uD574 '\uB3C4\uC6B0\uBBF8 \uC2A4\uD53C\uB4DC M'\uB4F1 \uC790\uCCB4 \uC2A4\uD399\uC744 \uBCF4\uC644\uD558\uB294 \uB2A5\uB825\uC5D0 \uC911\uC810\uC744 \uB450\uC5C8\uC2B5\uB2C8\uB2E4. '\uC2A4\uD0AC \uD655\uB960\uC5C5 M'\uC740 \uB2F9\uC5F0\uD788 \uC88B\uC2B5\uB2C8\uB2E4.",jolteon:"\uC790\uCCB4 \uC2A4\uD399\uC774 \uD6CC\uB96D\uD558\uAE30\uC5D0 '\uB098\uBB34\uC5F4\uB9E4 \uC218 S'\uC758 \uD6A8\uC728\uC774 \uB9E4\uC6B0 \uC88B\uC2B5\uB2C8\uB2E4. '\uC2A4\uD0AC \uD655\uB960\uC5C5 M'\uC740 \uB2F9\uC5F0\uD788 \uC88B\uC2B5\uB2C8\uB2E4. \uC774\uBBF8 \uD6CC\uB96D\uD55C \uC2A4\uD399 \uB355\uBD84\uC5D0 \uC790\uC2E0\uC758 \uAC15\uD654 \uB300\uC2E0 \uD300\uC6D0 \uC11C\uD3EC\uD305\uC5D0 \uD22C\uC790\uD560 \uC5EC\uC720\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uADF8\uB798\uC11C '\uB3C4\uC6B0\uBBF8 \uBCF4\uB108\uC2A4'\uB97C \uD544\uB450\uB85C \uB2E4\uC591\uD55C \uD300 \uC11C\uD3EC\uD305 \uB2A5\uB825\uC5D0 \uAC00\uC0B0\uC810\uC744 \uC8FC\uC5C8\uC2B5\uB2C8\uB2E4.",umbreon:"\uC2A4\uD0AC\uD615\uC774\uC9C0\uB9CC \uC2A4\uD0AC\uC774 \uC911\uC694\uD558\uC9C0 \uC54A\uB2E4\uB294 \uD2B9\uC9D5\uC774 \uD575\uC2EC\uC785\uB2C8\uB2E4. \uB530\uB77C\uC11C \uBA54\uC778 \uC2A4\uD0AC \uAD00\uB828 \uC131\uACA9 \uBC0F \uC11C\uBE0C \uC2A4\uD0AC\uC758 \uC911\uC694\uB3C4\uAC00 \uB5A8\uC5B4\uC9C0\uACE0 \uADF8 \uC678\uC5D0 \uB3C4\uC6C0\uC774 \uB418\uB294 \uB9CE\uC740 \uB2A5\uB825\uC5D0\uC11C \uAC00\uC810\uC744 \uC5BB\uC2B5\uB2C8\uB2E4. \uC5B4\uB5BB\uAC8C \uD0A4\uC6CC\uB3C4 \uBC25\uAC12\uC744 \uD558\uAE30\uC5D0 \uC721\uC131 \uBC29\uD5A5\uC774 \uC790\uC720\uB86D\uC2B5\uB2C8\uB2E4.",glaceon:"\uC801\uB2F9\uD55C \uC2A4\uD655\uACFC \uC801\uB2F9\uD55C \uB3C4\uC6B0\uBBF8 \uB2A5\uB825\uC774 \uADE0\uD615\uC788\uAC8C \uD544\uC694\uD558\uB2E4\uACE0 \uC0DD\uAC01\uD569\uB2C8\uB2E4. '\uC2A4\uD0AC \uD655\uB960 \uC5C5 M', '\uB098\uBB34\uC5F4\uB9E4 \uC218 S'\uB4F1 \uBC38\uB7F0\uC2A4 \uC788\uAC8C \uC88B\uC740 \uC11C\uBE0C \uC2A4\uD0AC\uB4E4\uC5D0 \uAC00\uC0B0\uC810\uC744 \uC8FC\uC5C8\uC2B5\uB2C8\uB2E4.",flareon:"\uC801\uB2F9\uD55C \uC2A4\uD655\uACFC \uC801\uB2F9\uD55C \uB3C4\uC6B0\uBBF8 \uB2A5\uB825\uC774 \uADE0\uD615\uC788\uAC8C \uD544\uC694\uD558\uB2E4\uACE0 \uC0DD\uAC01\uD569\uB2C8\uB2E4. '\uC2A4\uD0AC \uD655\uB960 \uC5C5 M', '\uB098\uBB34\uC5F4\uB9E4 \uC218 S'\uB4F1 \uBC38\uB7F0\uC2A4 \uC788\uAC8C \uC88B\uC740 \uC11C\uBE0C \uC2A4\uD0AC\uB4E4\uC5D0 \uAC00\uC0B0\uC810\uC744 \uC8FC\uC5C8\uC2B5\uB2C8\uB2E4.",leafeon:"\uC2A4\uD0AC \uD655\uB960\uC5C5 M, \uC2A4\uD0AC \uD655\uB960\uC5C5 S, \uADF8\uB9AC\uACE0 \uBA54\uC778 \uC2A4\uD0AC \uBC1C\uB3D9\uB960 \uC99D\uAC00 \uC131\uACA9\uC774 \uACE0\uD3C9\uAC00\uB97C \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB610\uD55C \uC11C\uD3EC\uD130\uC758 \uD2B9\uC131\uC744 \uACE0\uB824\uD574, \uD300 \uC804\uCCB4\uB97C \uC11C\uD3EC\uD305\uD558\uB294 \uC11C\uBE0C \uC2A4\uD0AC\uC5D0 \uAC00\uC0B0\uC810\uC744 \uC8FC\uC5C8\uC2B5\uB2C8\uB2E4."};let b=o;M.value=x.fetchImage("pkm",K(B.value)),Y.value=Math.floor(n[o].percent),J.value=Math.floor(n[o].cutPercent),Z.value=i[o],H.value=d[b],z.value=!0}else B.value="\uC774\uBE0C\uC774",M.value=x.fetchImage("sleep",133),z.value=!1;return(o,i)=>(S(),N(le,null,[s(ne,{class:"bg-primary text-white text-center"},{default:r(()=>[s(oe,null,{default:r(()=>[C("\uCD94\uCC9C\uD558\uB294 \uC9C4\uD654\uB294...")]),_:1})]),_:1}),v("div",Ee,[v("div",Pe,[s(A,{alt:"Pokemon image",src:M.value,fit:"scale-down",style:{width:"300px"}},null,8,["src"])]),v("div",Qe,[v("span",Te,E(B.value),1),C(" \uC785\uB2C8\uB2E4.")]),z.value?(S(),N("div",Le,[s(q,{class:"q-mb-md column items-center",style:{"background-color":"#ffe4b5",border:"solid #f6c267",width:"250px"}},{default:r(()=>[s(P,{class:"full-width q-pt-sm"},{default:r(()=>[qe]),_:1}),v("div",Ne,E(Y.value)+"%",1),s(P,null,{default:r(()=>[C(" (\uCD94\uCC9C\uD558\uB294 \uCD5C\uC18C \uC801\uD569\uB3C4: "+E(J.value)+"%) ",1)]),_:1})]),_:1}),s(q,{class:"q-mb-md column items-center",style:{"background-color":"#fbe4f2",border:"solid #f6c267"}},{default:r(()=>[s(P,{class:"full-width q-pt-sm"},{default:r(()=>[Ve]),_:1}),s(P,null,{default:r(()=>[C(E(Z.value),1)]),_:1})]),_:1}),s(q,{class:"q-mb-md column items-center",style:{"background-color":"rgb(240, 219, 246)",border:"solid #f6c267"}},{default:r(()=>[s(P,{class:"full-width q-pt-sm"},{default:r(()=>[De]),_:1}),s(P,null,{default:r(()=>[C(E(H.value),1)]),_:1})]),_:1})])):(S(),N("div",$e,[s(q,{class:"q-mb-md column items-center",style:{border:"solid #f6c267"}},{default:r(()=>[s(P,null,{default:r(()=>[C(" \uC801\uD569\uD55C \uC9C4\uD654\uCCB4\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."),Be,C("\uC774 \uC774\uBE0C\uC774\uB294 \uC9C0\uAE08 \uC0C1\uD0DC \uADF8\uB300\uB85C\uB97C \uC81C\uC77C \uB9C8\uC74C\uC5D0 \uB4E4\uC5B4\uD558\uB294 \uAC83 \uAC19\uB124\uC694. ")]),_:1})]),_:1})])),s(ge,{modelValue:F.value,"onUpdate:modelValue":i[0]||(i[0]=d=>F.value=d)},{default:r(()=>[s(q,null,{default:r(()=>[s(he,null,{default:r(()=>[Ie,s(te),ve(s(V,{dense:"",flat:"",icon:"close"},null,512),[[ye]])]),_:1}),v("div",null,[(S(!0),N(le,null,me(a.value,(d,b)=>(S(),T(P,{key:b},{default:r(()=>[v("div",Re,[s(A,{alt:"Pokemon image",src:I(x).fetchImage("pkm",K(m[e.indexOf(d)])),fit:"scale-down",style:{width:"100px"},"no-spinner":""},null,8,["src"]),v("div",null,[v("div",Ge,E(m[e.indexOf(d)]),1),v("div",ze,[C("\uC801\uD569\uB3C4: "),v("span",Fe,E(Math.floor(I(n)[d].percent))+"%",1)]),v("div",null,"(\uCD94\uCC9C\uD558\uB294 \uCD5C\uC18C \uC801\uD569\uB3C4: "+E(Math.floor(I(n)[d].cutPercent))+"%)",1)])])]),_:2},1024))),128))])]),_:1})]),_:1},8,["modelValue"]),a.value.length>0?(S(),T(V,{key:2,onClick:i[1]||(i[1]=d=>F.value=!0),color:"primary",label:"\uB2E4\uB978 \uC9C4\uD654 \uCD94\uCC9C\uD574\uC8FC\uC138\uC694",icon:"add"})):R("",!0)])],64))}},Xe={class:"column items-center relative-position",style:{height:"67vh"}},Ae=v("div",{class:"q-mt-md text-h6 text-weight-bolder row justify-center"}," \uB180\uB78D\uB3C4\uB85D \uAC15\uD654\uB41C \uB2E4\uC591\uD55C \uACC4\uC0B0\uAE30\uB97C \uB9CC\uB098\uBCF4\uC138\uC694 ",-1),We=v("div",null,"(100% \uC7AC\uBC0C\uC74C)",-1),Ye={__name:"RecommendCalcComponent",setup(W){return(x,w)=>(S(),N("div",null,[s(ne,{class:"bg-primary text-white text-center"},{default:r(()=>[s(oe,null,{default:r(()=>[C("\uC54C\uCC28\uAC8C \uC900\uBE44\uD588\uC2B5\uB2C8\uB2E4")]),_:1})]),_:1}),s(te),v("div",Xe,[Ae,We,s(A,{class:"absolute-bottom",style:{"max-height":"60%"},fit:"scale-down",src:"images/drPika.png"}),s(V,{push:"",class:"text-h6 shadow-4 q-mt-md",color:"primary",label:"\uC2DC\uC791\uD558\uAE30",to:"/",onClick:w[0]||(w[0]=y=>I(ke)("click_recommend")),padding:"md lg"})])]))}},pl=Object.assign({name:"RatePage"},{__name:"EeveelutionPage",setup(W){const x=c(1),w=c(),y=c(),M=c(!1),m=c(!1),e=c(!1);function G(){w.value.previous()}function D(){switch(x.value){case 1:const k=y.value.upNature,p=y.value.downNature;e.value=!y.value.didSelectAllSub,k.substring(0,3)===p.substring(0,3)?k!=="\uC601\uD5A5 \uC5C6\uC74C --"?(M.value=!0,m.value=!0):(M.value=!1,m.value=!1):k==="\uC601\uD5A5 \uC5C6\uC74C --"||p==="\uC601\uD5A5 \uC5C6\uC74C --"||k.length==0||p.length==0?(M.value=!0,m.value=!0):(M.value=!1,m.value=!1),!M.value&&!m.value&&!e.value&&w.value.next();break;default:w.value.next()}}return(k,p)=>(S(),T(pe,{class:"row justify-center bg-googleDark"},{default:r(()=>[s(ce,{modelValue:x.value,"onUpdate:modelValue":p[2]||(p[2]=f=>x.value=f),ref_key:"stepper",ref:w,contracted:"",color:"primary","active-icon":"none",class:"col-xs-12 col-sm-9 col-md-8 col-lg-6 col-xl-4 bg-googleBack",animated:""},{navigation:r(()=>[x.value<3?(S(),T(fe,{key:0,class:"row justify-end"},{default:r(()=>[x.value>1?(S(),T(V,{key:0,flat:"",color:"primary",onClick:p[0]||(p[0]=f=>G()),label:"\uB4A4\uB85C",class:"q-ml-sm"})):R("",!0),x.value<3?(S(),T(V,{key:1,onClick:p[1]||(p[1]=f=>D()),color:"primary",label:x.value===1?"\uACB0\uACFC\uBCF4\uAE30":"\uB2E4\uC74C"},null,8,["label"])):R("",!0)]),_:1})):R("",!0)]),default:r(()=>[s(X,{name:1,title:"\uC774\uBE0C\uC774 \uC815\uBCF4 \uC785\uB825",icon:"edit",done:x.value>1},{default:r(()=>[s(xe,{ref_key:"validateFirst",ref:y,"sub-valid":e.value,"down-valid":M.value,"up-valid":m.value},null,8,["sub-valid","down-valid","up-valid"])]),_:1},8,["done"]),s(X,{name:2,title:"\uC774\uBE0C\uC774 \uC9C4\uD654 \uCD94\uCC9C",icon:"favorite",done:x.value>2},{default:r(()=>[s(Ue)]),_:1},8,["done"]),s(X,{name:3,title:"\uB458\uB7EC\uBCF4\uAE30",icon:"search",done:x.value>3},{default:r(()=>[s(Ye)]),_:1},8,["done"])]),_:1},8,["modelValue"])]),_:1}))}});export{pl as default};
