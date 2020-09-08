import React, { useRef } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart/cartActions';

function Home() {
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(false)
  const [items, setItems] = useState([
    {
      name: 'book',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 5000,
      btn: false
    },
    {
      name: 'iphone',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 7000,
      btn: false
    },
    {
      name: 'earphone',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 500,
      btn: false
    },
    {
      name: 'beans',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 3000,
      btn: false
    },
    {
      name: 'shoes',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 1200,
      btn: false
    },
    {
      name: 'egg',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 500,
      btn: false
    },
    {
      name: 'pizza',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 30,
      btn: false
    },
    {
      name: 'spag',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 200,
      btn: false
    },
  ]);

  function add(name, image, price) {
    dispatch(addToCart(name, image, price))
  }

  const products = items.map((item, index) => (
    <div key={index} className="bg-gray-500 w-full md:w-64 h-50 rounded-sm shadow-sm">
      <img
        src={item.image}
        alt=""
        width="100%"
      />
      <div className="p-3">
        <p className="text-black">{item.name}</p>
        <div className="flex justify-between items-center">
          <p>${item.price}</p>
          <button
            className="bg-red-700 py-1 px-2 text-sm rounded-sm hover:bg-red-900 outline-none shadow-sm"
            onClick={() => add(item.name, item.image, item.price)}
            disabled={item.btn}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="mx-16 mt-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 row-gap-16">{products}</div>
  );
}

export default Home;
