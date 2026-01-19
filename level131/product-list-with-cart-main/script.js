const addCart = document.getElementsByClassName("add-to-cart");
const mainImg = document.getElementsByClassName("main-img");
const countP = document.getElementsByClassName("count");

for (let i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener("click", function () {
    mainImg[i].style.border = "2px solid #a65c43";
    addCart[i].style.background = "#c83b0e";
    document.getElementsByClassName("add")[i].style.display = "none";
    document.getElementsByClassName("added")[i].style.display = "flex";
    countP[i].textContent = 1;
    countP[i].style.color = "white";
  });

  const plus = document.getElementsByClassName("plus");
  const minus = document.getElementsByClassName("minus");
  
  plus[i].addEventListener("click", function () {
    let count = Number(countP[i].textContent);
    count++;
    countP[i].textContent = count;
  });

  minus[i].addEventListener("click", function () {
    let count = Number(countP[i].textContent);

    if (count > 0) {
      count--;
      countP[i].textContent = count;
    }
  });
}
