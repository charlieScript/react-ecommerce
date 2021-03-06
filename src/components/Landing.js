import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

function Landing() {
  const [products, setProducts] = useState([]);
  const items = useSelector((state) => state.items);
  useEffect(() => {
    setProducts(items.slice(0, 4));
  }, [items]);
  const productList =
    products.length &&
    products.map((i, index) => (
      <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col" key={index}>
        <Link
          to={{
            pathname: `/product/${i.id}`,
            state: i,
          }}
        >
          <img
            className="hover:grow hover:shadow-lg"
            src={i.image}
            alt={i.name}
          />
          <div className="pt-3 flex items-center justify-between">
            <p className="">{i.name}</p>
            <svg
              className="h-6 w-6 fill-current text-gray-500 hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
            </svg>
          </div>
          <p className="pt-1 text-gray-900">₦{i.price}</p>
        </Link>
      </div>
    ));
  return (
    <div>
      <section
        className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right h-mobile items-center justify-center"
        style={{
          maxWidth: '1600px',
          backgroundImage:
            "url('https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80)",
        }}
      >
        <div className="container mx-auto">
          <div className="flex w-full px-6 tracking-wide text-center flex-col justify-center items-center">
            <h1
              className="text-gray-900 text-2xl sm:text-5xl my-4 text-center"
              id="call_to_action"
            >
              Welcome To Nocturnal Online Store
            </h1>
            <Link to='/store' className='text-center'>
              <button className="flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* products  */}
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {/* nav */}
          <nav id="store" className="w-full top-0 px-6 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <p className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
                Featured
              </p>

              <div className="flex items-center" id="store-nav-content">
                <p
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                  </svg>
                </p>

                <p
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                  </svg>
                </p>
              </div>
            </div>
          </nav>

          {productList}
        </div>
      </section>
    </div>
  );
}

export default Landing;
