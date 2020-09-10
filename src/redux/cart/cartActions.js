import { ADD_TO_CART, REMOVE_FROM_CART } from './cartTypes';

export const addToCart = (product) => (dispatch, getState) => {
  const cart = getState().cart.slice();
  let alreadyExists = false;
  cart.forEach((x) => {
    if (x.id === product.id) {
      alreadyExists = true;
      x.count++;
      x.total = x.count * x.price;
    }
  });
  if (!alreadyExists) {
    cart.push({ ...product, count: 1});
  }
  dispatch({
    type: ADD_TO_CART,
    payload: cart,
  });
  calculateCart(cart)
};

export const removeFromCart = (id) => (dispatch, getState) => {
  let cart = getState().cart.slice();
  cart = cart.filter(item => item.id === id)
  dispatch({
      type: REMOVE_FROM_CART,
      payload: cart
    })
};

function calculateCart(cart) {
  const total =
    cart.length !== 0
      ? cart.reduce((prev, curr) => prev.total + curr.total)
      : null;
  console.log(total)
}
