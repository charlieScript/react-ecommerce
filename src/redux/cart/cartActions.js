import { BUY_ITEM } from "./cartTypes";

export const addToCart = (name, image, price) => {
  return {
    type: BUY_ITEM,
    name,
    image,
    price,
  }
}