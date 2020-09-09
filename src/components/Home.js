import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  const items = [
    {
      id: 0,
      name: 'book',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 5000,
      count: 0,
    },
    {
      id: 1,
      name: 'iphone',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 7000,
      count: 0,
    },
    {
      id: 2,
      name: 'earphone',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 500,
      count: 0,
    },
    {
      id: 3,
      name: 'beans',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 3000,
      count: 0,
    },
    {
      id: 4,
      name: 'shoes',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 1200,
      count: 0,
    },
    {
      id: 5,
      name: 'egg',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 500,
      count: 0,
    },
    {
      id: 6,
      name: 'pizza',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 30,
      count: 0,
    },
    {
      id: 7,
      name: 'spag',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 200,
      count: 0,
    },
  ];

  

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
          <Link to={{
            pathname: `/cart/${item.name}`,
            state: item
          }}
            className="bg-red-700 py-1 px-2 text-sm rounded-sm hover:bg-red-900 outline-none shadow-sm"
          >
            view Details
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="mx-16 mt-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 row-gap-16">{products}</div>
  );
}

export default Home;
