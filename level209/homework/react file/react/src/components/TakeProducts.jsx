import React from "react";
import { useState, useEffect } from "react";

function ProductItem({ product, onIncrease, onDecrease, onDelete }) {
  const count = product.count || 1;

  return (
    <div className="flex gap-5 max-w-full w-full justify-start items-end p-5 relative">
      <img src={product.imgUrl} alt="" className="w-15 h-15 rounded-md" />
      <div className="flex flex-col justify-start gap-2">
        <p className="text-lg text-start text-white">
          {product.title.length > 10
            ? product.title.slice(0, 15) + "..."
            : product.title}
        </p>
        <div className="flex justify-start items-end gap-2 w-full">
          <div className="flex">
            <button
              className="w-7 h-7 text-white border border-solid border-white text-center cursor-pointer"
              onClick={onDecrease}
            >
              -
            </button>
            <span className="text-sm text-center text-white w-7 h-7 border border-solid border-white">
              {count}
            </span>
            <button
              className="w-7 h-7 text-white border border-solid border-white text-center cursor-pointer"
              onClick={onIncrease}
            >
              +
            </button>
          </div>
          <p className="text-sm text-center text-white">
            {Number(count * product.price).toFixed(2)} ₾
          </p>
        </div>
      </div>
      <button
        className="w-10 h-10 text-xl cursor-pointer absolute right-5"
        onClick={onDelete}
      >
        🗑️
      </button>
    </div>
  );
}

function TakeProducts({ products, setProducts }) {
  function increaseCount(productId) {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, count: (p.count || 1) + 1 } : p
      )
    );
  }

  function decreaseCount(product) {
    const currentCount = product.count || 1;
    if (currentCount <= 1) {
      deleteProduct(product);
    } else {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === product.id ? { ...p, count: currentCount - 1 } : p
        )
      );
    }
  }

  function deleteProduct(product) {
    setProducts((prev) => prev.filter((p) => p.id !== product.id));
  }

  const totalSum = products.reduce(
    (acc, product) => acc + Number(product.price) * (product.count || 1),
    0
  );

  return (
    <div className="fixed top-0 left-0 w-100 h-screen bg-gray-900 flex justify-start items-center pr-3 flex-col pt-10 gap-2.5 overflow-y-auto">
      <h2 className="font-bold text-2xl text-center text-white mb-5">
        პროდუქტების სია:
      </h2>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onIncrease={() => increaseCount(product.id)}
          onDecrease={() => decreaseCount(product)}
          onDelete={() => deleteProduct(product)}
        />
      ))}
      <p className="text-center text-white font-bold text-lg mt-4">
        სულ თანხა: {Number(totalSum).toFixed(2)} ₾
      </p>
    </div>
  );
}

export default TakeProducts;
