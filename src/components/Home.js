import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Home() {
  const items = useSelector(state => state.items)
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
