import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFromLocalStorage } from '../redux/cart/cartActions';


const Header = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.index)
  useEffect(() => {
    dispatch(fetchFromLocalStorage());
  }, [dispatch]);
  return (
    <div className="px-32 bg-indigo-600 py-3 flex justify-between items-center">
      <Link to="/">
        <h1 className="text-xl">
          ECONNEXT{' '}
          <i className="fa fa-rocket"></i>
        </h1>
      </Link>
      <Link to='/cart'>Cart 
        <i className="fa fa-shopping-cart"></i>
        {'  '}
        <span className="py-1 px-2 bg-red-300 rounded-lg text-black">{items}</span>
      </Link>
    </div>
  );
};

export default Header;