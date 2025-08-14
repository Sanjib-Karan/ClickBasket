const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch('data/products.json')
  .then(res => res.json())
  .then(products => {
    const product = products.find(p => p.id == id);
    const container = document.getElementById('product-details');
    container.innerHTML = `
      <img src="images/products/${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>$${product.price}</p>
      <p>${product.description}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
  });

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Added to cart!');
}
