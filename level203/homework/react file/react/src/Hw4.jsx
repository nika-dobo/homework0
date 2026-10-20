import React, { useState } from "react";

function Hw4() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    isStudent: false,
    description: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    const checked = e.target.checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      age: "",
      gender: "",
      isStudent: false,
      description: "",
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
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <input
            type="checkbox"
            name="isStudent"
            checked={formData.isStudent}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          გასუფთავება
        </button>
      </form>

      {submittedData && (
        <div>
          <p>Name: {submittedData.name}</p>
          <p>Age: {submittedData.age}</p>
          <p>Gender: {submittedData.gender}</p>
          <p>Is Student: {submittedData.isStudent ? "Yes" : "No"}</p>
          <p>Description: {submittedData.description}</p>
        </div>
      )}
    </div>
  );
}

export default Hw4;
