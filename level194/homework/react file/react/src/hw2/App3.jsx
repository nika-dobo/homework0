import React from 'react'
import ProductCard from './ProductCard'

function App3() {
  const product = {
    name: "Laptop",
    price: 1200,
    category: "Electronics",
    inStock: true
  }

  return (
    <>
      <ProductCard 
        name={product.name} 
        price={product.price} 
        category={product.category} 
        inStock={product.inStock} 
      />
    </>
  )
}

export default App3
