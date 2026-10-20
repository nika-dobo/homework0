import React, { useState } from "react";

function Hw5() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
    grade: "",
  });

  const [message, setMessage] = useState("");
  const [student, setStudent] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.age ||
      !formData.course ||
      !formData.grade
    ) {
      return;
    }

    const ageNum = Number(formData.age);

    if (ageNum < 18) {
      setMessage("ასაკი 18-ზე ნაკლებია!");
      setStudent(null);
      return;
    }

    setMessage("სტუდენტი წარმატებით დაემატა!");
    setStudent({
      name: formData.name,
      age: ageNum,
      course: formData.course,
      grade: formData.grade,
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
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
          />
        </div>
        <button type="submit">დამატება</button>
      </form>

      {message && <p>{message}</p>}

      {student && (
        <div>
          <h3>სტუდენტის ინფორმაცია:</h3>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <p>Course: {student.course}</p>
          <p>Grade: {student.grade}</p>
        </div>
      )}
    </div>
  );
}

export default Hw5;
