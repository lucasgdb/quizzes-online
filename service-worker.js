const CACHE_VERSION=3;let CURRENT_CACHES={offline:"offline-v3"};const OFFLINE_URL="/offline/index.html";function createCacheBustedRequest(a){let b=new Request(a,{cache:"reload"});if("cache"in b)return b;let c=new URL(a,self.location.href);return c.search+=(c.search?"&":"")+"cachebust="+Date.now(),new Request(c)}self.addEventListener("install",a=>{a.waitUntil(fetch(createCacheBustedRequest(OFFLINE_URL)).then(async a=>{const b=await caches.open(CURRENT_CACHES.offline);return b.put(OFFLINE_URL,a)}))}),self.addEventListener("activate",a=>{let b=Object.keys(CURRENT_CACHES).map(a=>CURRENT_CACHES[a]);a.waitUntil(caches.keys().then(a=>Promise.all(a.map(a=>{if(-1===b.indexOf(a))return caches.delete(a)}))))}),self.addEventListener("fetch",a=>{("navigate"===a.request.mode||"GET"===a.request.method&&a.request.headers.get("accept").includes("text/html"))&&a.respondWith(fetch(a.request).catch(()=>caches.match(OFFLINE_URL)))})