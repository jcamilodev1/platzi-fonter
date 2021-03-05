self.addEventListener('install', event =>{
  event.waitUntil(precache())
})
self.addEventListener('fetch', event => {
  const request = event.request
  // solo nos interesan los get
  if(request.method !== "GET"){
    return
  }
  //Buscar en cache
  event.respondWith(cacheResponse(request))

  //actulizar cache
  event.waitUntil(updateCahe(request))
})
const precache = async ()=>{
  const cache = await caches.open('v1')
  return cache.addAll([  
/*   '/',
  '/index.html',
  '/js/index.js',
  '/js/MediaPlayer.js',
  '/js/AutoPlay.js',
  '/js/AutoPause.js',
  '/styles/index.css',
  '/assets/prueba.mp4', */
  ])
}
const cacheResponse = async request =>{
  const cache = await caches.open("v1")
  const response = await cache.match(request)
  return response || fetch(request)
}
const updateCahe = async request =>{
  const cache = await caches.open("v1")
  const response = await fetch(request)
  return cache.put(request,response)
}