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
  localStorage.setItem('cart', JSON.stringify(cart))
  dispatch({
    type: ADD_TO_CART,
    payload: cart,
  });
};

export const removeFromCart = (id) => (dispatch, getState) => {
  const cart = getState().cart.slice();
  const newCart = cart.filter((i) => i.id !== id);
  localStorage.setItem('cart', JSON.stringify(newCart));
  dispatch({
      type: REMOVE_FROM_CART,
      payload: newCart
    })
};

export const fetchFromLocalStorage = () => {
  const fetch = JSON.parse(localStorage.getItem('cart'))
  console.log(fetch)
}


function calculateCart(cart) {
  const total =
    cart.length !== 0
      ? cart.reduce((prev, curr) => prev.total + curr.total)
      : null;
}
