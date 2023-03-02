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
    case 'ADD_ITEM':
      // unlike `push`, `concat` returns a new array
      // so the old state will not be altered
      const updatedItems = state.items.concat(payload);
      const updatedTotalAmount =
        state.totalAmount + payload.price * payload.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case 'REMOVE_ITEM':
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
