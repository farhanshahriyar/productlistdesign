import React, { createContext, useReducer } from 'react'
import './cart.css' //css file
import MainCart from './MainCart'; 
import Product from './Products'
import { reducer } from './reducer';

export const CartContext = createContext();

const initialState = {
  item: Product,
  totalAmount: 0,
  totalItem:0,
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // delete the item cart
  const removeItem = (id) => {
    console.log(typeof id)
    return dispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    })
  };

  return (
    <CartContext.Provider value={{...state, removeItem}}>
        <MainCart/>
    </CartContext.Provider>
  )
}

export default Cart