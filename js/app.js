const container = document.querySelector(".container")
const products = [
  { name: "Laranja", image: "images/products/fanta-laranja.jpg" },
  { name: "Uva", image: "images/products/fanta-uva.jpg" },
  { name: "Cola", image: "images/products/coca-cola.jpg" },
]

const showProducts = () => {
  let output = ""
  products.forEach(
    ({ name, image }) =>
      (output += `
              <item-product-tile
                src=${image}
                title=${name}
              ></item-product-tile>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showProducts)