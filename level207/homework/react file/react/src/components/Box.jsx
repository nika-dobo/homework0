const Box = ({
  title,
  description,
  price,
  imgUrl,
  setChoosedProducts,
  choosedProducts,
  product,
}) => {
  function addProduct() {
    if (choosedProducts.some((p) => p.id === product.id)) {
      return;
    } else {
      setChoosedProducts((prev) => [...prev, { ...product, count: 1 }]);
    }
  }

  return (
    <div className="w-80 flex flex-col justify-between bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div>
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-52 object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
            {title}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {description}
          </p>
        </div>
      </div>
      <div className="px-4 pb-4">
        <div className="flex justify-between items-center w-full pt-3 border-t border-gray-100">
          <span className="text-lg font-bold text-emerald-600">{price} ₾</span>
          <button
            onClick={addProduct}
            className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center rounded-full transition w-10 h-10 shadow cursor-pointer"
          >
            🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default Box;
