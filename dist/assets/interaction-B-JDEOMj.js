import{_ as i}from"./index-5BBBmUKm.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-EMzjVlwL.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-EMzjVlwL.js","assets/Ranges-wbEJOoHv.js","assets/index-5BBBmUKm.js","assets/index-DM9RkO-p.css","assets/index-Ck81X1RE.js","assets/OptionsColor-BP3VItej.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
