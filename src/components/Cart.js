import React from 'react'
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector(state => state.cart)
  const newCart = Array.from(new Set(cart.map(JSON.stringify))).map(JSON.parse)

  console.log(newCart)
  return (
    <div>
      
    </div>
  )
}

export default Cart
