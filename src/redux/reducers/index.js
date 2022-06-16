import { combineReducers } from 'redux';
import { CART as cart } from './cart.reducer';


const rootReducer = combineReducers({
    cart
  });

  export default rootReducer;