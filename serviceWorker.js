const staticEasymerch = "dev-easy-merch"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/products/fanta-laranja.jpg",
  "/images/products/fanta-uva.jpg",
  "/images/products/coca-cola.jpg",
  "/components/ItemTileProduct.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticEasymerch).then(cache => {
      cache.addAll(assets)
    })
  )
})