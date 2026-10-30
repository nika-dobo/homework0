import React from "react";

function Edit({ bool, setBool, product, setMainProduts }) {
  function handleEdit(e) {
    e.preventDefault();

    setMainProduts((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? {
              ...item,
              title: e.target.title.value,
              description: e.target.desc.value,
              price: e.target.price.value,
              imgUrl: e.target.imgUrl.value,
            }
          : item
      )
    );

    setBool(false);
  }

  return (
    <>
      <form
        onSubmit={handleEdit}
        className={`fixed w-150 h-110 z-10 left-[30%] top-25 ${bool ? "flex" : "hidden"} bg-blue-600 gap-2.5 justify-around flex-col items-center rounded-md`}
      >
        <button
          type="button"
          className="absolute top-2 right-2 text-lg cursor-pointer"
          onClick={() => setBool(false)}
        >
          ❌
        </button>
        <h2 className="text-white text-xl">პროდუქტის შეცვლა</h2>
        <input
          type="text"
          placeholder="ჩაწერე პროდუქტის სურათის ლინკი"
          name="imgUrl"
          defaultValue={product?.imgUrl}
          className="w-3/4 p-2 z-11 bg-blue-900 rounded-md text-white text-[14px]"
        />
        <input
          type="text"
          placeholder="ჩაწერე პროდუქტის სახელი"
          name="title"
          defaultValue={product?.title}
          className="w-3/4 p-1.5 z-11 bg-blue-900 rounded-md text-white text-[14px]"
        />
        <input
          type="text"
          placeholder="ჩაწერე პროდუქტის აღწერა"
          name="desc"
          defaultValue={product?.description}
          className="w-3/4 p-1.5 z-11 bg-blue-900 rounded-md text-white text-[14px]"
        />
        <input
          type="text"
          placeholder="ჩაწერე პროდუქტის ფასი"
          name="price"
          defaultValue={product?.price}
          className="w-3/4 p-1.5 z-11 bg-blue-900 rounded-md text-white text-[14px]"
        />
        <input
          type="submit"
          value="შეცვლა"
          className="bg-green-400 p-2 w-50 rounded-md text-white cursor-pointer hover:bg-green-600"
        />
      </form>
    </>
  );
}

export default Edit;
