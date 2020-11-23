import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import authReducer from './authReducer'
import errorRedcer from './erroReducer'

const reducers = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  error: errorRedcer
})

export default reducers