import{_ as i}from"./index-5BBBmUKm.js";class s{constructor(){this.id="links"}async getPlugin(n){const{LinkInstance:t}=await i(()=>import("./LinkInstance-B1DHKrJd.js"),__vite__mapDeps([0,1,2,3]));return new t(n)}loadOptions(){}needsPlugin(){return!0}}export{s as LinksPlugin};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinkInstance-B1DHKrJd.js","assets/index-5BBBmUKm.js","assets/index-DM9RkO-p.css","assets/CanvasUtils-Dtgv7tCZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
