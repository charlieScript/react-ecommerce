import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const items = useSelector(state => state.index)
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

// const mapStateToProps = (state) => ({

// })

// export default connect(mapStateToProps, mapDispatchToProps)(Header)
