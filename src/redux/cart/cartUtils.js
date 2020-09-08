import store from './../store'
export function addItem(name, image, price) {
  return {
    name,
    image,
    price,
  };
}