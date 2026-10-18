import { useState } from "react";

function Hw4() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const [submittedName, setSubmittedName] = useState("");
  const [submittedAge, setSubmittedAge] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
    setSubmittedAge(age);
    setSubmittedCity(city);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {submittedName && (
        <div>
          <p>{submittedName}</p>
          <p>{submittedAge}</p>
          <p>{submittedCity}</p>
        </div>
      )}
    </div>
  );
}

export default Hw4;
