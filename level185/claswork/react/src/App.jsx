import "./style.css";
import Card from "./card.jsx";

function App() {
  function car1() {
    document.getElementById("card1").style.gridColumn = "2/3";
    document.getElementById("card2").style.gridColumn = "1/2";
    document.getElementById("card3").style.gridColumn = "3/4";
  }
  function car2() {
    document.getElementById("card2").style.gridColumn = "2/3";
    document.getElementById("card1").style.gridColumn = "3/4";
    document.getElementById("card3").style.gridColumn = "1/2";
  }
  function car3() {
    document.getElementById("card3").style.gridColumn = "2/3";
    document.getElementById("card1").style.gridColumn = "1/2";
    document.getElementById("card2").style.gridColumn = "3/4";
  }

  return (
    <>
      <Card
        onclick={car1}
        id="card1"
        name="lamborghini veneno 2026"
        description="355 km/h - engine: v12 6.5 L - Price: $4.500.000"
        img="https://i.ytimg.com/vi/bvfbdZKO4sw/sddefault.jpg"
      />

      <Card
        onclick={car2}
        id="card2"
        name="lamborghini fenomeno"
        description="385 km/h - engine: v12 6.5 L - Price: $11.000.000"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/2025_Lamborghini_Fenomeno_USG26.jpg/1280px-2025_Lamborghini_Fenomeno_USG26.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
      />

      <Card
        onclick={car3}
        id="card3"
        name="lamborghini revuelto"
        description="355 km/h - engine: v12 6.5 L - Price: $6.100.000"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfq80P5Vc2qOJpspGfU4-hJyGw-s9zCsmxt2lQW1if9QX5n8kdCoMaTDo&s=10"
      />
    </>
  );
}

export default App;
