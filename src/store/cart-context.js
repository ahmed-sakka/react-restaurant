import React, { useReducer } from 'react';

const initialState = {
  items: [],
  totalAmount: 0,
};

const CartContext = React.createContext({
  ...initialState,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_ITEM': {
      const updatedTotalAmount =
        state.totalAmount + payload.price * payload.amount;
      // find item's index in cart if exists
      const itemCartIndex = state.items.findIndex(
        (item) => item.id === payload.id
      );
      // get item from cart if exists
      const cartItem = state.items[itemCartIndex];
      let updatedItems;
      // if the item already exists in the cart
      if (cartItem) {
        const updatedItem = {
          ...cartItem,
          amount: cartItem.amount + payload.amount,
        };
        // copy old cart items
        updatedItems = [...state.items];
        // overwrite item
        updatedItems[itemCartIndex] = updatedItem;
      } else {
        // unlike `push`, `concat` returns a new array
        // so the old state will not be altered
        updatedItems = state.items.concat(payload);
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case 'REMOVE_ITEM':
      // find item's index in cart if exists
      const itemCartIndex = state.items.findIndex(
        (item) => item.id === payload
      );
      // get item from cart if exists
      const cartItem = state.items[itemCartIndex];
      // update total
      const updatedTotalAmount = state.totalAmount - cartItem.price;
      let updatedItems;
      // if the item already exists in the cart
      if (cartItem) {
        // if item amount is 1 remove item from cart
        if (cartItem.amount === 1) {
          updatedItems = state.items.filter((item) => item.id !== payload);
        } else {
          // copy old cart items
          updatedItems = [...state.items];
          const updatedItem = {
            ...cartItem,
            amount: cartItem.amount - 1,
          };
          // overwrite item
          updatedItems[itemCartIndex] = updatedItem;
        }
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    default:
      return initialState;
  }
};

export const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);
  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', payload: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', payload: id });
  };
  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
