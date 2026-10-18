import { useState } from "react";

function Hw10() {
  const [numbers, setNumbers] = useState([]);
  const [number, setNumber] = useState("");

  const handleAddNumber = () => {
    setNumbers([...numbers, Number(number)]);
    setNumber("");
  };

  const handleClear = () => {
    setNumbers([]);
  };

  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleAddNumber}>Add Number</button>
      <button onClick={handleClear}>Clear</button>

      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>

      <p>რაოდენობა: {numbers.length}</p>
      <p>ჯამი: {sum}</p>
    </div>
  );
}

export default Hw10;
