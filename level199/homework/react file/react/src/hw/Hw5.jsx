import { useState } from "react";

function Hw5() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [cardName, setCardName] = useState("");
  const [cardPrice, setCardPrice] = useState("");
  const [cardDescription, setCardDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardName(productName);
    setCardPrice(price);
    setCardDescription(description);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">დამატება</button>
      </form>

      {cardName && (
        <div>
          <p>{cardName}</p>
          <p>ფასი: {cardPrice} ₾</p>
          <p>აღწერა: {cardDescription}</p>
        </div>
      )}
    </div>
  );
}

export default Hw5;
