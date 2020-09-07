import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Cart() {
  const cart = useSelector((state) => state);
  const [form, setForm] = useState({
    productName: '',
    items: 0,
  });

  function submit(e) {
    e.preventDefault();
  }

  console.log(cart);

  function inputChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div>
      <form>
        Product Name
        <input
          type="text"
          onChange={inputChange}
          name="product"
          value={form.productName}
        />
        items needed
        <input
          type="number"
          onChange={inputChange}
          name="item"
          value={form.items}
        />
      </form>
    </div>
  );
}

export default Cart
