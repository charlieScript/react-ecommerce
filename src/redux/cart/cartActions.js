import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_FROM_LOCALSTORAGE,
} from './cartTypes';

export const addToCart = (product, newCount) => (dispatch, getState) => {
  const cart = getState().cart.slice();
  let alreadyExists = false;
  cart.forEach((x) => {
    if (x.id === product.id) {
      alreadyExists = true;
      x.count = newCount
      // x.total = x.count * x.price;
    }
  });
  if (!alreadyExists) {
    cart.push({ ...product, count: newCount });
  }
  // add to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
  dispatch({
    type: ADD_TO_CART,
    payload: cart,
  });
  const index = getState().index;
  localStorage.setItem('index', JSON.stringify(index));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  const cart = getState().cart.slice();
  const newCart = cart.filter((i) => i.id !== id);
  localStorage.setItem('cart', JSON.stringify(newCart));
  localStorage.setItem('index', JSON.stringify(newCart.length));
  dispatch({
    type: REMOVE_FROM_CART,
    payload: newCart,
  });
};

export const fetchFromLocalStorage = () => (dispatch) => {
  const fetch = JSON.parse(localStorage.getItem('cart'));
  const index = JSON.parse(localStorage.getItem('index'));
  if (fetch === null && index === null) {
    return;
  } else {
    dispatch({
      type: FETCH_FROM_LOCALSTORAGE,
      payload: fetch,
      index: index,
    });
  }
};
