import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_FROM_LOCALSTORAGE,
  FETCH_FROM_DATABASE,
} from './cartTypes';

const initialItems = {
  totalPrice: 0,
  index: 0,
  items: [],
  cart: [],
};

const newState = {
  products: {},
};

const cartReducer = (state = newState, action) => {
  switch (action.type) {
    case FETCH_FROM_DATABASE:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        index: action.payload.length,
        cart: action.payload,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        index: action.payload.length,
        cart: action.payload,
      };
    case FETCH_FROM_LOCALSTORAGE:
      return {
        ...state,
        index: action.index,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
