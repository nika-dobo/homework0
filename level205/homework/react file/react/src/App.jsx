import Box from "./components/Box";
import Header from "./components/header";
import mainArr from "./components/script";
import { useState } from "react";

function App() {
  let [choosedProducts, setChoosedProducts] = useState([]);
  let [page, setPage] = useState([]);
  let [pageNumber, setPageNumber] = useState(0);

  return (
    <>
      <Header
        choosedProducts={choosedProducts}
        setChoosedProducts={setChoosedProducts}
      />

      <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center gap-10">
        <div className="max-w-7xl mx-auto mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            სუპერმარკეტის პროდუქტები
          </h1>
        </div>
        <div className="flex w-full justify-center items-stretch gap-6 flex-wrap max-w-7xl mx-auto">
          {/* {mainArr.map((page) =>
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
          )} */}
          {mainArr[pageNumber].map((obj) => {
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
          })}
        </div>
        <div className="flex gap-5">
          {mainArr.map((page, index) => (
            <button
              className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
              key={index}
              onClick={() => setPageNumber(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
