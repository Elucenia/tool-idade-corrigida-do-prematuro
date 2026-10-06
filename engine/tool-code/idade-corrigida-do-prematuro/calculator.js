/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"idade-corrigida-do-prematuro","title":"Idade corrigida do prematuro","fields":[["ig_sem","Idade gestacional ao nascer: semanas","num",{"min":22,"max":36,"step":1,"unit":"semanas","ph":"30"}],["ig_dias","Idade gestacional ao nascer: dias","num",{"min":0,"max":6,"step":1,"unit":"dias","ph":"0"}],["nasc_d","Nascimento: dia","num",{"min":1,"max":31,"step":1,"ph":"1"}],["nasc_m","Nascimento: mês","num",{"min":1,"max":12,"step":1,"ph":"3"}],["nasc_a","Nascimento: ano","num",{"min":2015,"max":2040,"step":1,"ph":"2026"}],["ref_d","Data da avaliação: dia <small>(vazio = hoje)</small>","num",{"min":1,"max":31,"step":1,"ph":"25","opt":true}],["ref_m","Data da avaliação: mês","num",{"min":1,"max":12,"step":1,"ph":"9","opt":true}],["ref_a","Data da avaliação: ano","num",{"min":2015,"max":2040,"step":1,"ph":"2026","opt":true}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var r=(e.band,864e5);
function i(a,e,o){if(null==a||null==e||null==o)return null;a=Math.round(a),e=Math.round(e),o=Math.round(o);var r=new Date(Date.UTC(o,e-1,a));return r.getUTCFullYear()===o&&r.getUTCMonth()===e-1&&r.getUTCDate()===a&&r}
function n(a,e,o){return null==a&&null==e&&null==o?(r=new Date,new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate()))):i(a,e,o)||!1;var r}
function t(a,e){return new Date(a.getTime()+e*r)}
function d(a,e){return Math.round((e.getTime()-a.getTime())/r)}
function s(a,e){var o=a.getUTCFullYear(),r=a.getUTCMonth()+e,i=a.getUTCDate(),n=new Date(Date.UTC(o,r+1,0)).getUTCDate();return new Date(Date.UTC(o,r,Math.min(i,n)))}
function l(a){var e=function(a){return(a<10?"0":"")+a};return e(a.getUTCDate())+"/"+e(a.getUTCMonth()+1)+"/"+a.getUTCFullYear()}
function c(a){return Math.floor(a/7)+"s "+a%7+"d"}
function m(a,e){var o=12*(e.getUTCFullYear()-a.getUTCFullYear())+(e.getUTCMonth()-a.getUTCMonth());return s(a,o)>e&&o--,{m:o,d:d(s(a,o),e)}}
function u(a){var e=Math.floor(a.m/12),o=a.m%12,r=[];return e&&r.push(e+(1===e?" ano":" anos")),o&&r.push(o+(1===o?" mês":" meses")),!a.d&&r.length||r.push(a.d+(1===a.d?" dia":" dias")),r.length>1?r.slice(0,-1).join(", ")+" e "+r[r.length-1]:r[0]}
a.def("idade-corrigida-do-prematuro",function(a){var e=i(a.nasc_d,a.nasc_m,a.nasc_a),o=n(a.ref_d,a.ref_m,a.ref_a);if(!e)return{error:"Data de nascimento inválida: confira dia, mês e ano."};if(!o)return{error:"Data da avaliação inválida: preencha dia, mês e ano (ou deixe os três em branco para usar a data de hoje)."};var r=d(e,o);if(r<0)return{error:"A data da avaliação é anterior ao nascimento."};var s=7*a.ig_sem+(a.ig_dias||0),p=280-s,g=s+r,f=t(e,p),v=[["Idade cronológica",u(m(e,o))+" ("+r+" dias)"],["Idade pós-menstrual",c(g)],["Prematuridade a descontar",c(p)+" ("+p+" dias)"],["Data em que completou 40 semanas",l(f)]];if(g<280)return{main:[c(g),"de idade pós-menstrual"],label:"Idade pós-menstrual",level:"info",verdict:"Ainda não completou 40 semanas: use a idade pós-menstrual (a idade corrigida só existe após o termo)",rows:v,raw:{cron:r,pma:g,corr:null}};var h=m(f,o),w=r/365.25;return{main:[u(h),""],label:"Idade corrigida",level:"info",verdict:"Use a idade corrigida nas curvas de crescimento e na avaliação do desenvolvimento",rows:v,note:w>=2?"O cálculo da idade corrigida permanece disponível. A página da AAP consultada descreve seu uso nos primeiros 2 anos para acompanhar marcos do desenvolvimento; a escolha da idade e do horizonte de acompanhamento depende da finalidade e do contexto clínico. O resultado isolado não diagnostica atraso do desenvolvimento.":"",raw:{cron:r,pma:g,corr:d(f,o),corr_m:h.m,corr_d:h.d}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},...(typeof r.level==='string'?{level:r.level}:{}),...(typeof r.verdict==='string'?{verdict:r.verdict}:{}),...(Array.isArray(r.rows)?{rows:r.rows}:{}),...(typeof r.note==='string'&&r.note?{note:r.note}:{}),clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
