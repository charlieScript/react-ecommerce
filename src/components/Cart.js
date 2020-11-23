import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  fetchFromLocalStorage,
} from '../redux/cart/cartActions';
import { Link } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const cart = useSelector((state) => state.auth.cart);
  function deleteItem(id) {
    dispatch(removeFromCart(id));
  }
  useEffect(() => {
    const total =
      cart.length !== 0 && cart.reduce((a, c) => a + c.price * c.count, 0);
    setTotal(total);
  }, [cart]);

  // useEffect(() => {
  //   dispatch(fetchFromLocalStorage());
  // }, [dispatch]);
  return (
    <div className="sm:px-32 mt-24 mb-10">
      <h1 className="text-2xl ml-6 text-black">Cart</h1>
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        {cart.length !== 0 ? (
          cart.map((item, index) => (
            <div
              className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
              key={index}
            >
              <div>
                <img
                  className="hover:grow hover:shadow-lg rounded-lg"
                  src={item.image}
                  alt={item.name}
                />
                <div className="pt-3 flex items-center justify-between">
                  <p className="">{item.name}</p>
                  <button
                    className="text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 float-right rounded-lg"
                    onClick={() => deleteItem(item.id)}
                  >
                    X
                  </button>
                </div>
                <p className="pt-1 text-gray-900">
                  Qty: {item.count} X ₦{item.price}: ₦{item.count * item.price}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="mt-32">
            <p className="text-center font-bold text-black">
              You Have Not Added Any Product To Your Cart
            </p>
          </div>
        )}
      </div>
      <div className="flex justify-between px-3">
        <Link to="/store">
          <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg">
            Back
          </button>
        </Link>
        <p className="font-bold text-black text-xl">Total: ₦{total}</p>
      </div>
    </div>
  );
}

export default Cart;
