import { BUY_ITEM } from './cartTypes';

export const addToCart = (product) => (dispatch, getState) => {
  const cartItems = getState().cart.slice()
  let alreadyExists = false;
  cartItems.forEach((x) => {
    if (x._id === product._id) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: BUY_ITEM,
    payload: { cartItems },
  })
};
