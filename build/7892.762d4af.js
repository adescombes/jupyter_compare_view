"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[7892,1385],{21385:(t,e,s)=>{s.r(e),s.d(e,{ISettings:()=>l,Settings:()=>o});var a=s(79615),r=s(60850),i=s(26169);const n="JupyterLite Storage";class o{constructor(t){this._storageName=n,this._storageDrivers=null,this._localforage=t.localforage,this._storageName=t.storageName||n,this._storageDrivers=t.storageDrivers||null,this._ready=new i.PromiseDelegate}get ready(){return this._ready.promise}get storage(){return this.ready.then((()=>this._storage))}async initialize(){await this.initStorage(),this._ready.resolve(void 0)}async initStorage(){this._storage=this.defaultSettingsStorage()}get defaultStorageOptions(){var t;const e=(null===(t=this._storageDrivers)||void 0===t?void 0:t.length)?this._storageDrivers:null;return{version:1,name:this._storageName,...e?{driver:e}:{}}}defaultSettingsStorage(){return this._localforage.createInstance({description:"Offline Storage for Settings",storeName:"settings",...this.defaultStorageOptions})}async get(t){let e=(await this.getAll()).settings.find((e=>e.id===t));return e||(e=await this._getFederated(t)),e}async getAll(){var t;const e=null!==(t=a.PageConfig.getOption("settingsUrl"))&&void 0!==t?t:"/",s=await this.storage,i=await(await fetch(a.URLExt.join(e,"all.json"))).json(),n=await Promise.all(i.map((async t=>{var e;const{id:a}=t,i=null!==(e=await s.getItem(a))&&void 0!==e?e:t.raw;return{...g.override(t),raw:i,settings:r.parse(i)}})));return{settings:n}}async save(t,e){await(await this.storage).setItem(t,e)}async _getFederated(t){var e;const[s,i]=t.split(":");if(!g.isFederated(s))return;const n=a.PageConfig.getOption("fullLabextensionsUrl"),o=a.URLExt.join(n,s,"schemas",s,`${i}.json`),l=a.URLExt.join(n,s,"package.json"),c=await(await fetch(o)).json(),d=await(await fetch(l)).json(),h=null!==(e=await(await this.storage).getItem(t))&&void 0!==e?e:"{}",u=r.parse(h)||{};return g.override({id:t,raw:h,schema:c,settings:u,version:d.version||"3.0.8"})}}var g;!function(t){const e=JSON.parse(a.PageConfig.getOption("settingsOverrides")||"{}");t.isFederated=function(t){let e;try{e=JSON.parse(a.PageConfig.getOption("federated_extensions"))}catch{return!1}for(const{name:s}of e)if(s===t)return!0;return!1},t.override=function(t){if(e[t.id]){t.schema.properties||(t.schema.properties={});for(const[s,a]of Object.entries(e[t.id]||{}))t.schema.properties[s].default=a}return t}}(g||(g={}));const l=new i.Token("@jupyterlite/settings:ISettings")}}]);
//# sourceMappingURL=7892.762d4af.js.map