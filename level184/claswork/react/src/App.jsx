import "./style.css";
import Header from "./header";
import Footer from "./footer";
import Home from "./home";
import Card from "./card";

function App() {
  return (
    <>
      <Header />
      <Home />
      
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </>
  );
}

export default App;
