import { ADD_TO_CART, REMOVE_FROM_CART } from './cartTypes';
import { addItem, incrementCart } from './cartUtils';

const initialItems = {
  totalPrice: 0,
  index: 0,
  items: [
    {
      id: 0,
      name: 'book',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 5000,
      count: 0,
      total: 0
    },
    {
      id: 1,
      name: 'iphone',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 7000,
      count: 0,
      total: 0
    },
    {
      id: 2,
      name: 'earphone',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 500,
      count: 0,
      total: 0
    },
    {
      id: 3,
      name: 'beans',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 3000,
      count: 0,
      total: 0
    },
    {
      id: 4,
      name: 'shoes',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 1200,
      count: 0,
      total: 0
    },
    {
      id: 5,
      name: 'egg',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 500,
      count: 0,
      total: 0
    },
    {
      id: 6,
      name: 'pizza',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 30,
      count: 0,
      total: 0
    },
    {
      id: 7,
      name: 'spag',
      image: 'https://dummyimage.com/150X100/d3d4e3/000000',
      price: 200,
      count: 0,
      total: 0
    },
  ],
  cart: [],
};

const cartReducer = (state = initialItems, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        index: state.index + 1,
        cart: action.payload,
      };
    case REMOVE_FROM_CART: 
      return {
        ...state,
        index: action.payload.length,
        cart: action.payload,
      }
    default:
      return state;
  }
};

export default cartReducer;
