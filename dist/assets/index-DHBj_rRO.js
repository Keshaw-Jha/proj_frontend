import{_ as o}from"./index-5BBBmUKm.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-C2hY04X3.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-C2hY04X3.js","assets/index-5BBBmUKm.js","assets/index-DM9RkO-p.css","assets/ValueWithRandom-rEMqy0Hr.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
