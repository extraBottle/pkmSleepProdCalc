import{a8 as r,b as i,a9 as s,g as a}from"./index.e34ef3bd.js";function l(){let e=null;const n=a();function t(){e!==null&&(clearTimeout(e),e=null)}return r(t),i(t),{removeTimeout:t,registerTimeout(o,u){t(),s(n)===!1&&(e=setTimeout(()=>{e=null,o()},u))}}}export{l as u};