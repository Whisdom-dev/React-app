import React from 'react';

function ProductDetails({ product }) {
  return (
    <section className="product-details">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </section>
  );
}

export default ProductDetails;

