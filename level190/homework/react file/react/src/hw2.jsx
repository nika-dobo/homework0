import React from "react";

function hw2() {
  const productName = "Wireless Headphones";
  const price = 120;
  const discount = 25;
  const inStock = true;
  const isPremium = false;
  const rating = 4.7;
  const reviews = 128;
  const image =
    "https://s3.zoommer.ge/site/19b14b37-25df-44be-93de-d5fe0da6e46f_Thumb.jpeg";
  const userAge = 20;

  let discountMessage = "No discount";
  if (discount > 0) {
    discountMessage = `${discount}% OFF 🔥`;
  }

  let ageMessage = "You must be 18 or older to purchase this product.";
  if (userAge > 18) {
    ageMessage = "You can purchase this product.";
  }

  return (
    <>
      <h1>{productName}</h1>
      <p>price: {price}</p>
      <p>rating:{rating}</p>
      <p>reviews: {reviews} </p>
      <img src={image} alt="" />
      <p>{discountMessage}</p>
      <p>{inStock === true ? "In Stock ✅" : "Out of Stock ❌"}</p>
      <p>{isPremium && "⭐ Premium Product"}</p>
      <p>{ageMessage}</p>
      <p>
        {rating >= 4.5
          ? "Great Product ⭐⭐⭐⭐⭐"
          : rating >= 4
            ? "Good Product ⭐⭐⭐"
            : "Low Rated Product ⭐"}
      </p>
      <p>Final Price: {(price * (100 - discount)) / 100}</p>
    </>
  );
}

export default hw2;
