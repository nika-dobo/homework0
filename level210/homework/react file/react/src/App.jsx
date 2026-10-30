import AddProduct from "./components/AddProduct";
import Box from "./components/Box";
import Header from "./components/Header";
import products from "./components/script";
import { useEffect, useState } from "react";

function App() {
  let [choosedProducts, setChoosedProducts] = useState([]);
  let [mainProduts, setMainProduts] = useState(products);
  let [page, setPage] = useState([]);
  let [pageNumber, setPageNumber] = useState(0);
  let [buttonSort, setButtonSort] = useState("sort");

  let [bool, setBool] = useState(false);

  function pageGenarate(products) {
    let mainArr = [];

    let elems = 0;
    for (let i = 0; i <= products.length / 12; i++) {
      let newArr = [];
      for (let j = 0; j < 12; j++) {
        let index = j + elems;
        if (index < products.length) {
          newArr.push(products[index]);
        }
      }
      mainArr.push(newArr);
      elems += 12;
    }

    return mainArr;
  }

  useEffect(() => {
    let mainArr = pageGenarate(mainProduts);
    setPage(mainArr);
  }, [mainProduts]);

  function sort() {
    if (buttonSort === "sort") {
      let newArr = [];
      for (let i = 0; i < page.length; i++) {
        newArr.push(page[i].sort((a, b) => Number(a.price) - Number(b.price)));
      }
      setPage(newArr);
      setButtonSort("reversed sort");
      console.log(newArr);
    } else {
      let newArr = [];
      for (let i = 0; i < page.length; i++) {
        newArr.push(
          page[i].sort((a, b) => Number(a.price) - Number(b.price)).reverse(),
        );
      }
      setPage(newArr);
      setButtonSort("sort");
      setPageNumber(0);
      console.log(newArr);
    }
  }

  function all() {
    setPage(pageGenarate(mainProduts));
    setPageNumber(0);
  }

  function five() {
    let newArr = [];
    for (let i = 0; i < pageGenarate(mainProduts).length; i++) {
      newArr.push(
        pageGenarate(mainProduts)[i].filter((obj) => Number(obj.price) <= 5),
      );
    }
    console.log(newArr);

    let finalArr = [];
    for (let i of newArr) {
      for (let j of i) {
        finalArr.push(j);
      }
    }

    setPageNumber(0);
    setPage(pageGenarate(finalArr));
  }

  function fiveToFiveteen() {
    let newArr = [];
    for (let i = 0; i < pageGenarate(mainProduts).length; i++) {
      newArr.push(
        pageGenarate(mainProduts)[i].filter(
          (obj) => Number(obj.price) > 5 && Number(obj.price) <= 15,
        ),
      );
    }
    console.log(newArr);
    let finalArr = [];
    for (let i of newArr) {
      for (let j of i) {
        finalArr.push(j);
      }
    }

    setPageNumber(0);
    setPage(pageGenarate(finalArr));
  }

  function FiveteenPluss() {
    let newArr = [];
    for (let i = 0; i < pageGenarate(mainProduts).length; i++) {
      newArr.push(
        pageGenarate(mainProduts)[i].filter((obj) => Number(obj.price) > 15),
      );
    }
    console.log(newArr);
    let finalArr = [];
    for (let i of newArr) {
      for (let j of i) {
        finalArr.push(j);
      }
    }

    setPageNumber(0);
    setPage(pageGenarate(finalArr));
  }

  function serch(e) {
    let product = [];

    for (let i of mainProduts) {
      if (i.title.includes(e.target.value)) {
        product.push(i);
      }
    }
    setPage(pageGenarate(mainProduts));

    if (e.target.value !== "") {
      setPage(pageGenarate(product));
    }
  }

  return (
    <>
      <Header
        choosedProducts={choosedProducts}
        setChoosedProducts={setChoosedProducts}
        setBool={setBool}
        bool={bool}
      />
      <AddProduct
        bool={bool}
        setMainProduts={setMainProduts}
        mainProduts={mainProduts}
      />
      <div className="min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center gap-10">
        <div className="max-w-7xl mx-auto mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            სუპერმარკეტის პროდუქტები
          </h1>
        </div>
        <div className="flex justify-between w-250">
          <button
            onClick={sort}
            className="bg-blue-600 p-2.5 rounded-sm text-white cursor-pointer w-20"
          >
            {buttonSort}
          </button>
          <input
            type="text"
            className="bg-blue-600 w-100 rounded-md p-2.5 placeholder:text-white text-white"
            placeholder="პროდუქტის სახელი"
            onChange={serch}
          />
          <div className="flex gap-2.5">
            <button
              onClick={all}
              className="bg-blue-600 p-2.5 rounded-sm text-white cursor-pointer w-15"
            >
              ALL
            </button>
            <button
              onClick={five}
              className="bg-blue-600 p-2.5 rounded-sm text-white cursor-pointer w-15"
            >
              -5
            </button>
            <button
              onClick={fiveToFiveteen}
              className="bg-blue-600 p-2.5 rounded-sm text-white cursor-pointer w-15"
            >
              5-15
            </button>
            <button
              onClick={FiveteenPluss}
              className="bg-blue-600 p-2.5 rounded-sm text-white cursor-pointer w-15"
            >
              15+
            </button>
          </div>
        </div>
        <div className="flex w-full justify-center items-stretch gap-6 flex-wrap max-w-7xl mx-auto">
          {page[pageNumber]?.map((obj) => {
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
                mainProduts={mainProduts}
                setMainProduts={setMainProduts}
              />
            );
          })}
        </div>
        <div className="flex gap-5">
          {page.map((_, index) => (
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
