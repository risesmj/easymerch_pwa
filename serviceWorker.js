const staticEasymerch = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/products/fanta-laranja.jpg",
  "/images/products/fanta-uva.jpg",
  "/images/products/coca-cola.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticEasymerch).then(cache => {
      cache.addAll(assets)
    })
  )
})