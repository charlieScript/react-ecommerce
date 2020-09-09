import store from './../store';
export function addItem(name, image, price, id, count, countItems) {
  let alreadyInCart = false;
  let cart = [];
  // const { cart } = store.getState()
  cart.forEach((item) => {
    if (item.id === id) {
      item.count++;
      alreadyInCart = true;
    }
  });
  if (!alreadyInCart) {
    cart.push(name, image, price, id , count, countItems);
    count++;
    countItems++;
  }
  return {
    ...cart,
  };
}

export function incrementCart(name, image, price, id, count, countItems) {
  countItems++;
  return {
    name,
    image,
    price,
    id,
    count,
    countItems,
  };
}
