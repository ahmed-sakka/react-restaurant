import { useState } from 'react';

import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import { CartContextProvider } from './store/cart-context';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const toggleShowCartHandler = () => {
    setCartIsShown((prevState) => {
      return !prevState;
    });
  };
  return (
    <CartContextProvider>
      {cartIsShown && <Cart onToggleShowCart={toggleShowCartHandler} />}
      <Header onToggleShowCart={toggleShowCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
