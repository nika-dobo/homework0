import React, { useState } from 'react';
import Task1_GuestCounter from './components/Task1';
import Task2_LikeApp from './components/Task2';
import Task3_Counter from './components/Task3';
import Task4_NameChanger from './components/Task4';
import Task5_SecretMessage from './components/Task5';
import Task6_Favorites from './components/Task6';
import Task7_AgeCounter from './components/Task7';
import Task8_AccountStatus from './components/Task8';
import User from './components/User';
import Product from './components/Product';
import Counter from './components/Counter';
import Greeting from './components/Greeting';

function App() {
  const [isOnline, setIsOnline] = useState(false);

  const [productCount, setProductCount] = useState(0);

  const [count11, setCount11] = useState(0);

  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <Task1_GuestCounter />
      <hr />

      <Task2_LikeApp />
      <hr />

      <Task3_Counter />
      <hr />

      <Task4_NameChanger />
      <hr />

      <Task5_SecretMessage />
      <hr />

      <Task6_Favorites />
      <hr />

      <Task7_AgeCounter />
      <hr />

      <Task8_AccountStatus />
      <hr />

      <User name="Goga" isOnline={isOnline} setIsOnline={setIsOnline} />
      <hr />

      <Product name="Laptop" price={1200} count={productCount} setCount={setProductCount} />
      <hr />

      <Counter count={count11} onIncrement={() => setCount11(count11 + 1)} />
      <hr />

      <Greeting name="Goga" showMessage={showMessage} setShowMessage={setShowMessage} />
    </div>
  );
}

export default App;
