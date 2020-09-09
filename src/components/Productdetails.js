import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cart/cartActions';
import { useState } from 'react';
import { useEffect } from 'react';

function Productdetails({ location }) {
  const cart = useSelector(state => state.cart)
  const { state } = location;
  const dispatch = useDispatch();
  const [num, setNum ] = useState('0')

  function add(name, image, price, items) {
    dispatch(addToCart(name, image, price, items));
  }

  useEffect(() => {
    setNum(cart[state.id])
    console.log(state, cart[state.id])
  }, [])

  function submitToCart(e) {
    e.preventDefault()
    add(state.name, state.image, state.price, num)
  }
  return (
    <div className="px-32 py-8 grid grid-cols-2 col-gap-8">
      <img src={state.image} alt="" className="w-full" />
      <div>
        <h1 className="text-3xl text-gray-300">{state.name.toUpperCase()}</h1>
        <p>${state.price}</p>
        <form onSubmit={submitToCart}>
          <div className="flex flex-col">
            <label htmlFor="num" className="text-xl">
              Add to Cart
            </label>
            <div>
              <input type="number" name="num" id="num" className="mr-2 outline-none text-black" onChange={(e) => setNum(e.target.value)} defaultValue={num} />
              <input
                type="submit"
                value="Add to cart"
                className="bg-red-700 m-1 py-1 px-2 text-sm rounded-sm hover:bg-red-900 outline-none shadow-sm"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Productdetails;
