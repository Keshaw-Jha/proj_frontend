import{_ as o}from"./index-5BBBmUKm.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-CCF6DGCQ.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-CCF6DGCQ.js","assets/index-5BBBmUKm.js","assets/index-DM9RkO-p.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
