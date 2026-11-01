import amazon from "./assets/img/Amazon-logo.png";
import black from "./assets/img/black.png";
import blue from "./assets/img/blue.png";
import pink from "./assets/img/pink.png";
import purple from "./assets/img/purple.png";
import red from "./assets/img/red.png";
import heart from "./assets/img/heart.png";

function App() {
  return (
    <>
      <div className="bg-blue-950 p-5 flex justify-center">
        <img src={amazon} alt="" className="w-40" />
      </div>
      <div className="flex w-full justify-center items-center">
        <div>
          <img src={black} alt="" className="w-150" />
        </div>
        <div className="flex flex-col gap-5">
          <h1>FitBit 19 - The Smartest Watch</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            laudantium distinctio
          </p>
          <h2>Select color</h2>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <h2>Features</h2>
          <div>
            <div>Time</div>
            <div>Heart Rate</div>
          </div>
          <button>BUY NOW</button>
        </div>
      </div>
    </>
  );
}

export default App;
