import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_FROM_LOCALSTORAGE } from './cartTypes';

const initialItems = {
  totalPrice: 0,
  index: 0,
  items: [
    {
      id: 0,
      name: 'Coffee Mug',
      image:
        'https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
      price: 20.51,
      count: 0,
    },
    {
      id: 1,
      name: 'Camera Lens',
      image:
        'https://images.unsplash.com/photo-1508423134147-addf71308178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
      price: 100,
      count: 0,
    },
    {
      id: 2,
      name: 'Office Desk And Table',
      image:
        'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
      price: 10000,
      count: 0,
    },
    {
      id: 3,
      name: 'Typewriter',
      image:
        'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
      price: 3000,
      count: 0,
    },
    {
      id: 4,
      name: 'Metallic Cup',
      image:
        'https://images.unsplash.com/photo-1467949576168-6ce8e2df4e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
      price: 1200,
      count: 0,
    },
    {
      id: 5,
      name: 'Coffe Mug - Small',
      image:
        'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
      price: 5,
      count: 0,
    },
    {
      id: 6,
      name: 'Spinner',
      image:
        'https://images.unsplash.com/photo-1550837368-6594235de85c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80',
      price: 10,
      count: 0,
    },
    {
      id: 7,
      name: 'Red Dice',
      image:
        'https://images.unsplash.com/photo-1551431009-a802eeec77b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
      price: 20,
      count: 0,
    },
  ],
  cart: [],
};

const cartReducer = (state = initialItems, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        index: action.payload.length,
        cart: action.payload,
      };
    case REMOVE_FROM_CART: 
      return {
        ...state,
        index: action.payload.length,
        cart: action.payload,
      }
    case FETCH_FROM_LOCALSTORAGE: 
      return {
        ...state,
        index: action.index,
        cart: action.payload
      }
    default:
      return state;
  }
};

export default cartReducer;
