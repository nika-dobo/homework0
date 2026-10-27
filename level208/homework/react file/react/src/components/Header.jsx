import React from "react";
import TakeProducts from "./takeProducts";
import { useState } from "react";

function Header({ choosedProducts, setChoosedProducts }) {
  const [showTakeProducts, setShowTakeProducts] = useState(false);

  function show() {
    setShowTakeProducts(!showTakeProducts);
  }

  return (
    <>
      <div>
        <div className="w-full h-20 bg-gray-900 flex justify-end items-center pr-3 ">
          <button
            onClick={show}
            className="font-bold text-white text-2xl cursor-pointer"
          >
            🛒
          </button>
        </div>
      </div>

      {showTakeProducts && (
        <TakeProducts
          products={choosedProducts}
          setProducts={setChoosedProducts}
        />
      )}
    </>
  );
}

export default Header;
