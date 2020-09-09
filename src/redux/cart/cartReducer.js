import { BUY_ITEM } from "./cartTypes";
import { addItem } from "./cartUtils";

const initialItems = {
  index: 0,
  cart: [],
  uniqCart: [],
}

const cartReducer = (state = initialItems, action) => {
  switch (action.type) {
    case BUY_ITEM:
      return {
        ...state,
        index: state.index + 1,
        cart: [...state.cart, addItem(action.name, action.image, action.price, action.items)],
        uniqCart: Array.from(state.cart.reduce((m, t)=> m.set(t.place, t), new Map()).values())
      };
    default:
      return state;
  }
}

export default cartReducer