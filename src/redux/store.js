import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cakeReducer from './cart/cartReducer'

const store = createStore(cakeReducer, composeWithDevTools())


export default store