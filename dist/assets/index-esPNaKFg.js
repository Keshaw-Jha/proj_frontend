import{_ as e}from"./index-5BBBmUKm.js";async function i(r,o=!0){await r.addParticleUpdater("strokeColor",async t=>{const{StrokeColorUpdater:a}=await e(()=>import("./StrokeColorUpdater-VEBrkCsd.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadStrokeColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StrokeColorUpdater-VEBrkCsd.js","assets/index-5BBBmUKm.js","assets/index-DM9RkO-p.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
