fetch('data/products.json')
  .then(res => res.json())
  .then(products => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    let total = 0;

    cart.forEach(id => {
      const product = products.find(p => p.id == id);
      total += product.price;

      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `${product.name} - $${product.price}`;
      cartItems.appendChild(div);
    });

    document.getElementById('total-price').innerText = `Total: $${total}`;
  });
