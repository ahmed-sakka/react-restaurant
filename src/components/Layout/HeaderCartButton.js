import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  // number of meals != number of items
  // an item could have one or multiple meals
  const cartMealsCount = cartCtx.items.reduce((accumulator, item) => {
    return (accumulator += item.amount);
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartMealsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
