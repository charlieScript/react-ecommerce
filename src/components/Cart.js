import React, { useState, useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cart/cartActions';

function Cart() {
  const dispatch = useDispatch()
  const [total, setTotal ] = useState(0)
  const cart = useSelector((state) => state.cart);
  function deleteItem() {
    dispatch(removeFromCart(cart.id))
  }
  useEffect(() => {
    const total = cart.length !== 0 ? cart.reduce((prev, curr) => prev.total + curr.total): null;
    setTotal(total)
  }, [cart, total])
  return (
    <div className="px-32 my-6">
      {cart.length !== 0 ? (
        cart.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt="" className="w-64" />
            <p>
              {item.count} X {item.price}
            </p>
            <button className="bg-red-700 m-1 py-1 px-2 text-sm rounded-sm hover:bg-red-900 outline-none shadow-sm" onClick={deleteItem}>
              Remove from Cart
            </button>
            
          </div>
        ))
      ): 'No item added'}
      {/* <p>Total: {total}</p> */}
    </div>
  );
}

export default Cart;
