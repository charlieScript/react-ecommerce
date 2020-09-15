import React, { useState, useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, fetchFromLocalStorage } from '../redux/cart/cartActions';

function Cart() {
  const dispatch = useDispatch()
  const [total, setTotal ] = useState(0)
  const cart = useSelector((state) => state.cart);
  function deleteItem(id) {
    dispatch(removeFromCart(id))
  }
  useEffect(() => {
    const total = cart.length !== 0 && cart.reduce((a, c) => a + c.price * c.count, 0)
    setTotal(total)
  }, [cart])

  useEffect(() => {
    dispatch(fetchFromLocalStorage())
  }, [dispatch])
  return (
    <div className="px-32 my-6">
      {cart.length !== 0 ? (
        cart.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt="" className="w-64" />
            <p>
              {item.count} X {item.price}: {item.count * item.price}
            </p>
            <button className="bg-red-700 m-1 py-1 px-2 text-sm rounded-sm hover:bg-red-900 outline-none shadow-sm" onClick={() => deleteItem(item.id)}>
              Remove from Cart
            </button>
            
          </div>
        ))
      ): 'No item added'}
      <p>Total: {total}</p>
    </div>
  );
}

export default Cart;
