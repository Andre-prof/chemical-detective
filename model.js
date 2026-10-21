/* Bounded teaching scenarios; these ranges are not legal drinking-water limits. */
(()=>{
 const round=(v,n=3)=>Number(v.toFixed(n));
 const between=(rng,a,b,n=3)=>round(a+(b-a)*rng(),n);
 function samples(rng=Math.random){
  const supply={ph:between(rng,7.15,7.8,2),chloride:between(rng,40,160,1),sulfate:between(rng,15,100,1),lead:between(rng,0,.0006,5),hardness:between(rng,80,220,1),iron2:between(rng,.001,.008),iron3:between(rng,.008,.045),chlorine:between(rng,.5,1.4,2)};
  const A={...supply};
  const B={...supply,ph:round(supply.ph-between(rng,.1,.35,2),2),chloride:round(supply.chloride+between(rng,-2,2,1),1),sulfate:round(supply.sulfate+between(rng,-2,2,1),1),lead:between(rng,.03,.12),hardness:round(supply.hardness+between(rng,0,8,1),1),iron2:between(rng,.12,.45),iron3:between(rng,.15,.65),chlorine:between(rng,0,.01,3)};
  const C={...supply,ph:round(supply.ph+between(rng,-.05,.05,2),2),chloride:round(supply.chloride+between(rng,-1,1,1),1),sulfate:round(supply.sulfate+between(rng,-1,1,1),1),lead:between(rng,0,.0006,5),hardness:round(supply.hardness+between(rng,-2,2,1),1),iron2:between(rng,.001,.004),iron3:between(rng,.005,.025),chlorine:round(supply.chlorine-between(rng,.05,.2,2),2)};
  return {A,B,C};
 }
 function createState(previous,rng=Math.random){
  let baseline=samples(rng);if(previous&&JSON.stringify(previous)===JSON.stringify(baseline))baseline=samples();
  return {schema:2,scenarioId:globalThis.crypto?.randomUUID?.()||Date.now()+'-'+Math.random().toString(36).slice(2),sample:'A',baseline,data:structuredClone(baseline),records:[],hypothesis:'',conclusion:'',treatments:[]};
 }
 function restore(old,legacy){
  if(!old||!old.data||!Array.isArray(old.records))return createState();
  if(old.schema===2&&old.baseline&&['A','B','C'].every(s=>old.data[s]&&['iron2','iron3','chlorine'].every(k=>Number.isFinite(old.data[s][k]))))return old;
  const fresh=createState();for(const s of ['A','B','C']){fresh.baseline[s]={...fresh.baseline[s],...legacy[s],...(old.baseline?.[s]||{})};fresh.data[s]={...fresh.baseline[s],...(old.data[s]||{})};}
  // Keep every recorded result. A treated legacy case needs a new initial campaign.
  Object.assign(fresh,{sample:old.sample||'A',records:old.records,hypothesis:old.hypothesis||'',conclusion:old.conclusion||'',treatments:old.treatments||[],legacyTreated:!!old.treatments?.length});
  return fresh;
 }
 globalThis.ChemicalModel={samples,createState,restore};
})();
