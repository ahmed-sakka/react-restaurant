import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  // number of meals != number of items
  // an item could have one or multiple meals
  const cartMealsCount = items.reduce((accumulator, item) => {
    return (accumulator += item.amount);
  }, 0);
  // handle button animation; bump when the cart changes
  const [btnIsBumping, setBtnIsBumping] = useState(false);
  useEffect(() => {
    // executes only if there's at least one item in the cart
    if (items.length === 0) {
      return;
    }
    setBtnIsBumping(true);
    // remove button bump class after 300 milliseconds so the button
    // will bump again if the cart changes
    const timer = setTimeout(() => {
      setBtnIsBumping(false);
    }, 300);
    // cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const btnClasses = `${classes.button} ${btnIsBumping ? classes.bump : ''}`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.badge}>{cartMealsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
