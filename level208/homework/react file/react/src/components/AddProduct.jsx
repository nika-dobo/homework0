import React from "react";

function AddProduct({ bool, setMainProduts, mainProduts }) {
  function add(e) {
    e.preventDefault();
    let index = mainProduts.length + 1;

    setMainProduts((prev) => {
      return [
        ...prev,
        {
          id: index,
          title: e.target.title.value,
          description: e.target.desc.value,
          price: e.target.price.value,
          imgUrl: e.target.imgUrl.value,
        },
      ];
    });
  }

  console.log(bool);

  return (
    <>
      <form
        onSubmit={add}
        className={`fixed w-150 h-110 z-10 left-[30%] top-25 ${bool ? "flex" : "hidden"} bg-blue-600 gap-2.5 justify-around flex-col items-center rounded-md`}
      >
        <h2 className="text-white text-xl">დაამატე პროდუქტი</h2>
        <input
          type="text"
          placeholder="ჩაწერე პროდუქტის სურათის ლინკი"
          name="imgUrl"
          className="w-3/4 p-2 z-11 bg-blue-900 rounded-md text-white placeholder:text-white text-[14px]"
        />
        <input
          type="text"
          placeholder="ჩაწერე პროდუქტის სახელი"
          name="title"
          className="w-3/4 p-1.5 z-11 bg-blue-900 rounded-md text-white placeholder:text-white text-[14px]"
        />
        <input
          type="text"
          placeholder="ჩაწერე პროდუქტის აღწერა"
          name="desc"
          className="w-3/4 p-1.5 z-11 bg-blue-900 rounded-md text-white placeholder:text-white text-[14px]"
        />
        <input
          type="text"
          placeholder="ჩაწერე პროდუქტის ფასი"
          name="price"
          className="w-3/4 p-1.5 z-11 bg-blue-900 rounded-md text-white placeholder:text-white text-[14px]"
        />
        <input
          type="submit"
          className="bg-green-400 p-2 w-50 rounded-md text-white cursor-pointer hover:bg-green-600"
        />
      </form>
    </>
  );
}

export default AddProduct;
