import Box from "./components/Box";
import Header from "./components/header";
import products from "./components/script";
import { useState } from "react";

function App() {
  let [choosedProducts, setChoosedProducts] = useState([]);
  

  return (
    <>
      <Header
        choosedProducts={choosedProducts}
        setChoosedProducts={setChoosedProducts}
      />

      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-7xl mx-auto mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            სუპერმარკეტის პროდუქტები
          </h1>
          <p className="text-gray-500 mt-2">სულ: {products.length} პროდუქტი</p>
        </div>
        <div className="flex w-full justify-center items-stretch gap-6 flex-wrap max-w-7xl mx-auto">
          {products.map((product) => (
            <Box
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              imgUrl={product.imgUrl}
              setChoosedProducts={setChoosedProducts}
              product={product}
              choosedProducts={choosedProducts}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
