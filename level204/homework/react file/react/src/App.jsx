import Box from "./components/Box";
import Header from "./components/header";
import mainArr from "./components/script";
import { useState } from "react";

function App() {
  let [choosedProducts, setChoosedProducts] = useState([]);
  let [page, setPage] = useState([]);
  console.log(mainArr);

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
        </div>
        <div className="flex w-full justify-center items-stretch gap-6 flex-wrap max-w-7xl mx-auto">
          {mainArr.map((page) =>
            page.map((obj) => {
              return (
                <Box
                  key={obj.id}
                  title={obj.title}
                  description={obj.description}
                  price={obj.price}
                  imgUrl={obj.imgUrl}
                  setChoosedProducts={setChoosedProducts}
                  product={obj}
                  choosedProducts={choosedProducts}
                />
              );
            }),
          )}
        </div>
      </div>
    </>
  );
}

export default App;
