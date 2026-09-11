function App() {
  let persons = [
    { name: "nika", surename: "dobo", age: 18 },
    { name: "goga", surename: "chalauri", age: 21 },
    { name: "toko", surename: "zubiashvili", age: 2 },
    { name: "giorgi", surename: "gugaga", age: 18 },
  ];

  let newPersons = persons.map((obj) => (
    <li>
      {obj.name} {obj.surename} {obj.age}
    </li>
  ));

  return (
    <>
      <ul>{newPersons}</ul>
    </>
  );
}

export default App;
