import { BUY_ITEM } from "./cartTypes";

const initialItems = {
  prductName: '',
  itemsAdded: ''
}

export default cartReducer = (state = initialItems, action) => {
  switch (action.type) {
    case BUY_ITEM:
      return {
        ...state,
        productName: state.prductName,
        itemsAdded: state.itemsAdded + action.payload
      }
    default:
      return state;
  }
}