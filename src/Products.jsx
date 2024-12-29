import React, { useState } from 'react';
import Cart from './Cart';
import { Link } from 'react-router-dom';

function Products() {
  const [category, setCategory] = useState('all');
  const products = [
    { id: 1, name: 'Orange', price: 10.99, category: 'fruits' },
    { id: 2, name: 'Lettuce', price: 5.99, category: 'vegetables' },
    { id: 3, name: 'Apple', price: 7.99, category: 'fruits', image: '/assets/Red-Apple.jpg' },
    { id: 4, name: 'Cabbage', price: 6.24, category: 'vegetables' },
  ];

  const filteredProducts = products.filter((product) => {
    if (category === 'all') return true;
    return product.category === category;
  });

  const handleAddToCart = (product) => {
    console.log(`Product added to cart: ${product.name}`);
    // Add your cart logic here
  };

  return (
    <section className="bg-gray-100 p-4 border border-gray-300 rounded shadow-sm">
      <h2 className="text-xl font-bold mb-4">Featured Products</h2>
      <select
        className="mb-4 p-2 border rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
      </select>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.image || '/assets/default-product.jpg'}
              alt={product.name}
              className="rounded mb-2"
            />
            <h3 className="font-medium text-lg">{product.name}</h3>
            <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
            >
              Add to Cart
            </button>
            <Link
              to={`/products/${product.id}`}
              className="text-blue-500 underline text-sm"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
      <Cart />
    </section>
  );
}

export default Products;
