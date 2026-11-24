// GRAPHX lama telah berpindah ke /mathmotion/graphx/. Buang simpanan lama dan nyahdaftar.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n.startsWith('graphx-')).map(n=>caches.delete(n)))).then(()=>self.registration.unregister()).then(()=>self.clients.matchAll()).then(cs=>cs.forEach(c=>c.navigate('/mathmotion/graphx/'))))});
self.addEventListener('fetch',()=>{});
