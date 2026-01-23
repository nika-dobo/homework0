const addCart = document.getElementsByClassName("add-to-cart");
const mainImg = document.getElementsByClassName("main-img");
const countP = document.getElementsByClassName("count");
const plus = document.getElementsByClassName("plus");
const minus = document.getElementsByClassName("minus");
const addBtn = document.getElementsByClassName("add");
const addedBtn = document.getElementsByClassName("added");
const cart = document.getElementById("your-cart");
const cartImg = document.getElementById("empty");
const cartTxt = document.getElementById("empty-txt");
const priceParams = document.getElementsByClassName("price");

let cartItemsContainer = document.getElementById("cart-items");
if (!cartItemsContainer) {
  cartItemsContainer = document.createElement("div");
  cartItemsContainer.id = "cart-items";
  cart.parentNode.insertBefore(cartItemsContainer, cart.nextSibling);
}

let food = {
  "Waffle with Berries": 0,
  "Vanilla Bean Crème Brûlée": 0,
  "Macaron Mix of Five": 0,
  "Classic Tiramisu": 0,
  "Pistachio Baklava": 0,
  "Lemon Meringue Pie": 0,
  "Red Velvet Cake": 0,
  "Salted Caramel Brownie": 0,
  "Vanilla Panna Cotta": 0,
};

const keys = Object.keys(food);

function updateCartDisplay() {
  let sum = 0;
  let currentValues = Object.values(food);

  for (let val of currentValues) {
    sum += val;
  }

  cartItemsContainer.innerHTML = "";

  if (sum !== 0) {
    cart.textContent = `Your Cart (${sum})`;
    cartImg.style.display = "none";
    cartTxt.style.display = "none";

    let totalCartPrice = 0;

    for (let i = 0; i < keys.length; i++) {
      let foodNameStr = keys[i];
      let quantity = food[foodNameStr];

      if (quantity > 0) {
        let rawPrice = priceParams[i].textContent.replace("$", "");
        let singlePrice = parseFloat(rawPrice);
        let totalItemPrice = singlePrice * quantity;

        totalCartPrice += totalItemPrice;

        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
              <div class="cart-item-info">
                 <h4>${foodNameStr}</h4>
                 <p class="cart-item-meta">
                    <span class="qty">${quantity}x</span>
                    <span class="unit-price">@ $${singlePrice.toFixed(2)}</span>
                    <span class="total-price">$${totalItemPrice.toFixed(2)}</span>
                 </p>
              </div>
            `;

        let closeButton = document.createElement("button");
        closeButton.classList.add("remove-item");
        closeButton.innerHTML = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.375 1.625L1.625 8.375M1.625 1.625L8.375 8.375" stroke="#AD8A85" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

        closeButton.addEventListener("click", function () {
          food[foodNameStr] = 0;
          countP[i].textContent = 0;
          mainImg[i].style.border = "none";
          addCart[i].style.background = "white";
          addBtn[i].style.display = "flex";
          addedBtn[i].style.display = "none";
          updateCartDisplay();
        });

        cartItem.appendChild(closeButton);
        cartItemsContainer.appendChild(cartItem);
      }
    }

    let divider = document.createElement("hr");
    divider.style.margin = "20px 0";
    divider.style.border = "none";
    divider.style.borderTop = "1px solid #f4f4f4";
    cartItemsContainer.appendChild(divider);

    let orderPriceDiv = document.createElement("div");
    orderPriceDiv.classList.add("order-total");

    orderPriceDiv.innerHTML = `
        <p>Order Total</p>
        <h3>$${totalCartPrice.toFixed(2)}</h3>
    `;
    cartItemsContainer.appendChild(orderPriceDiv);

    let carbonNeutral = document.createElement("div");
    carbonNeutral.classList.add("carbon-neutral");
    carbonNeutral.innerHTML = `<img src="assets/images/icon-carbon-neutral.svg" alt="tree"> <p>This is a <span>carbon-neutral</span> delivery</p>`;
    cartItemsContainer.appendChild(carbonNeutral);

    let confirmBtn = document.createElement("button");
    confirmBtn.classList.add("confirm-btn");
    confirmBtn.textContent = "Confirm Order";
    cartItemsContainer.appendChild(confirmBtn);
  } else {
    cart.textContent = "Your Cart (0)";
    cartImg.style.display = "flex";
    cartTxt.style.display = "flex";
  }
}

for (let i = 0; i < addCart.length; i++) {
  let foodName = keys[i];

  let currentCount = 1;

  addCart[i].addEventListener("click", function () {
    mainImg[i].style.border = "2px solid #a65c43";
    addCart[i].style.background = "#c83b0e";
    addBtn[i].style.display = "none";
    addedBtn[i].style.display = "flex";

    currentCount = 1;
    countP[i].style.color = "white";
    countP[i].textContent = currentCount;

    food[foodName] = currentCount;
    updateCartDisplay();
  });

  plus[i].addEventListener("click", function (e) {
    e.stopPropagation();
    currentCount++;
    countP[i].textContent = currentCount;
    food[foodName] = currentCount;
    updateCartDisplay();
  });

  minus[i].addEventListener("click", function (e) {
    e.stopPropagation();
    if (currentCount > 1) {
      currentCount--;
      countP[i].textContent = currentCount;
      food[foodName] = currentCount;
    } else if (currentCount === 1) {
      currentCount = 0;
      countP[i].textContent = 0;
      food[foodName] = 0;

      mainImg[i].style.border = "none";
      addCart[i].style.background = "white";
      addBtn[i].style.display = "flex";
      addedBtn[i].style.display = "none";
    }
    updateCartDisplay();
  });
}
