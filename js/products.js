fetch('data/products.json')
  .then(res => res.json())
  .then(products => {
    const list = document.getElementById('product-list');
    products.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="images/products/${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <a href="product.html?id=${p.id}">View</a>
      `;
      list.appendChild(div);
    });
  });
