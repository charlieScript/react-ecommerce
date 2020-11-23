import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/cart/authActions';

function Login(props) {
  const dispatch = useDispatch();
  const [ err, setErr ] = useState(false)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const error = useSelector((state) => state.error.msg);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const inputChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     props.history.push('/');
  //   }
  //   if () {

  //   }
  // }, [isAuthenticated])

  const formSubmit = (e) => {
    dispatch(login(form));
    e.preventDefault();
    if ((error.msg === 'User not found')) {
      setErr(true)
    }
    console.log(error.msg)
  };
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto items-center ">
        <form
          className="bg-gray-200 p-8 flex flex-col w-full"
          onClick={formSubmit}
        >
          <h2 className="text-gray-900 text-xl font-medium title-font mb-5 ml-4">
            Login
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              email
            </label>
            <input
              onChange={inputChange}
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              onChange={inputChange}
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer"
          />
        </form>
        {err ? (
          <p className="text-xs text-gray-500 mt-3 text-center">
            User Not found Register
          </p>
        ) : null}
      </div>
    </section>
  );
}

export default Login;
