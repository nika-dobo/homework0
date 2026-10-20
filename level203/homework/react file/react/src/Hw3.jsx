import React, { useState } from "react";

function Hw3() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
  });

  const [submittedProduct, setSubmittedProduct] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.price ||
      !formData.category ||
      !formData.quantity
    ) {
      return;
    }

    const priceNum = Number(formData.price);
    const quantityNum = Number(formData.quantity);

    setSubmittedProduct({
      name: formData.name,
      price: priceNum,
      category: formData.category,
      quantity: quantityNum,
    });

    setFormData({
      name: "",
      price: "",
      category: "",
      quantity: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <button type="submit">დამატება</button>
      </form>

      {submittedProduct && (
        <div>
          <p>Name: {submittedProduct.name}</p>
          <p>Price: {submittedProduct.price}</p>
          <p>Category: {submittedProduct.category}</p>
          <p>Quantity: {submittedProduct.quantity}</p>
        </div>
      )}
    </div>
  );
}

export default Hw3;