import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import cakeReducer from './cart/cartReducer'

const store = createStore(cakeReducer, composeWithDevTools(applyMiddleware(thunk)))


export default store