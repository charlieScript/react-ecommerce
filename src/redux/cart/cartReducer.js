import { BUY_ITEM } from './cartTypes';
import { addItem, incrementCart } from './cartUtils';

const initialItems = {
  index: 0,
  cart: [],
};

const cartReducer = (state = initialItems, action) => {
  switch (action.type) {
    case BUY_ITEM:
      return {
        ...state,
        cart: {cart:  action.payload.cartItems}
      }
    default:
      return state;
  }
};

export default cartReducer;
