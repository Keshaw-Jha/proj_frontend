import{_ as i}from"./index-5BBBmUKm.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-jxf1S4_b.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-jxf1S4_b.js","assets/ValueWithRandom-rEMqy0Hr.js","assets/index-5BBBmUKm.js","assets/index-DM9RkO-p.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
