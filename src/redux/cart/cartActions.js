import { BUY_ITEM } from "./cartTypes";

export const buyItem = (num, productName) => {
  return {
    type: BUY_ITEM,
    payload: num,
    productName
  }
}