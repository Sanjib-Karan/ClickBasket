fetch('data/products.json')
  .then(res => res.json())
  .then(products => {
    const featured = document.getElementById('featured-list');
    // Show only first 3 products
    products.slice(0, 3).forEach(p => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="images/products/${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <a href="product.html?id=${p.id}" class="btn">View</a>
      `;
      featured.appendChild(div);
    });
  });
