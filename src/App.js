import { useState } from 'react';

import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const toggleShowCartHandler = () => {
    setCartIsShown((prevState) => {
      return !prevState;
    });
  };
  return (
    <>
      {cartIsShown && <Cart onToggleShowCart={toggleShowCartHandler} />}
      <Header onToggleShowCart={toggleShowCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
