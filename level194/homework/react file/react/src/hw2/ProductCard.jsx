import React from 'react'

function ProductCard({ name, price, category, inStock }) {
  return (
    <div>
      <h2>
        Product Details
      </h2>
      <div>
        <p>Product: {name}</p>
        <p>Price: {price}</p>
        <p>Category: {category}</p>
        <p>In stock: {inStock ? 'Yes' : 'No'}</p>
      </div>
    </div>
  )
}

export default ProductCard
