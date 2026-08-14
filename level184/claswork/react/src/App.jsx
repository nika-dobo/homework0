import "./style.css";

function App() {
  let userAge = prompt("Enter your age");

  return (
    <>
      <p>{userAge >= 18 ? "You are an big boy" : "You are a litel boy"}</p>
    </>
  );
}

export default App;
