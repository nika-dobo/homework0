import "./style.css";

import User1 from "./User1.jsx";
import Person from "./Person.jsx";
import Button from "./Button.jsx";
import Box from "./Box.jsx";
import Product from "./Product.jsx";
import Student from "./Student.jsx";
import Card from "./card.jsx";
import User2 from "./User2.jsx";
import Product2 from "./Product2.jsx";
import UserCard from "./UserCard.jsx";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "25px", color: "red" }}>
        Task 1
      </h1>
      <User1 name="giorgi" />

      <br />
      <br />
      <br />
      <br />

      <h1 style={{ textAlign: "center", fontSize: "25px", color: "red" }}>
        Task 2
      </h1>
      <Person name="giorgi" age="17" />

      <br />
      <br />
      <br />

      <h1 style={{ textAlign: "center", fontSize: "25px", color: "red" }}>
        Task 3
      </h1>
      <Button txt="Login" />
      <Button txt="Register" />
      <Button txt="Click Me" />

      <br />
      <br />
      <br />

      <h1 style={{ textAlign: "center", fontSize: "25px", color: "red" }}>
        Task 4
      </h1>
      <Box color="red" />
      <Box color="yellow" />
      <Box color="green" />

      <br />
      <br />
      <br />

      <h1 style={{ textAlign: "center", fontSize: "25px", color: "red" }}>
        Task 5
      </h1>
      <Product name="" img="" price="" />
      <Product name="" img="" price="" />
      <Product name="" img="" price="" />

      <br />
      <br />
      <br />

      <h1 style={{ textAlign: "center", fontSize: "25px", color: "red" }}>
        Task 6
      </h1>
      <Student name="giorgi" age="17" course="math" />
      <Student name="nika" age="18" course="physics" />
      <Student name="vaxo" age="19" course="chemistry" />

      <br />
      <br />
      <br />

      <h1 style={{ textAlign: "center", fontSize: "25px", color: "red" }}>
        Task 7
      </h1>
      <Card title="batman" description="hero" buttonTxt="click me" />
      <Card title="spiderman" description="hero" buttonTxt="click me" />
      <Card title="ironman" description="hero" buttonTxt="click me" />

      <br />
      <br />
      <br />

      <h1 style={{ textAlign: "center", fontSize: "25px", color: "red" }}>
        Task 8
      </h1>
      <User2 name="giorgi" isOnline={true} />
      <User2 name="nika" isOnline={false} />

      <br />
      <br />
      <br />

      <h1 style={{ textAlign: "center", fontSize: "25px", color: "red" }}>
        Task 9
      </h1>
      <Product2 name="iphone" price="999" category="phone" />
      <Product2 name="samsung" price="799" category="phone" />
      <Product2 name="xiaomi" price="399" category="phone" />

      <br />
      <br />
      <br />

      <h1 style={{ textAlign: "center", fontSize: "25px", color: "red" }}>
        Task 10
      </h1>
      <UserCard
        name="giorgi"
        age="17"
        job="programmer"
        city="tbilisi"
        isOnline={true}
      />
    </>
  );
}

export default App;
