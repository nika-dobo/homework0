import React from "react";
import TakeProducts from "./takeProducts";
import AddProduct from "./AddProduct";
import { useState } from "react";

function Header({ choosedProducts, setChoosedProducts, setBool, bool }) {
  const [showTakeProducts, setShowTakeProducts] = useState(false);

  function show() {
    setShowTakeProducts(!showTakeProducts);
  }

  return (
    <>
      <div>
        <div className="w-full h-20 bg-gray-900 flex justify-between items-center p-3 ">
          <button
            onClick={() => setBool(bool ? false : true)}
            className="text-2xl cursor-pointer text-white flex items-center gap-1.5"
          >
            ➕ <span className="text-[16px]">პროდუქტის დამატება</span>
          </button>
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
