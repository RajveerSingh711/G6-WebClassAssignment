fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('products-container');
    data.products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product-card';
      div.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}" />
        <h3 class="product-title">${product.title}</h3>
        <p class="product-description">${product.description}</p>
        <p class="product-price">$${product.price}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error("Fetch error:", err));
