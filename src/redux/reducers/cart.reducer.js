import * as types from '../types';
import initialState from './initialState';




export const CART=(state = initialState.cart, action)=>{
  switch (action.type){
      case types.ADD_TO_CART:
        return {...state,
          cartItems: [...state.cartItems,action.payload.cartItems],
        }


        default:
          return state;
  }
  /*switch (action.type) {
      case types.POPULATE_CART:
        return {...state,
          Scan_And_Go: {
            ...state.Scan_And_Go,
            item_for_voucher:[...action.payload.item_for_voucher],
            cartItems:[...action.payload.cartItems],
            voucher_discount:action.payload.voucher_discount,
            total_quantity:action.payload.total_quantity,
            sub_total:action.payload.sub_total,
            total:parseFloat(action.payload.sub_total)-parseFloat(action.payload.voucher_discount)
          }
      }

      case types.DROP_CART:
        return {
          Scan_And_Go: {
            cart_id:'',
            cartItems:[],
            item_for_voucher:[],
            total_quantity: 0,
            voucher_discount: 0,
            sub_total:0,
            total: 0,
            },
            Eats: {
              cart_id:'',
              cartItems:[],
              total_quantity: 0,
              voucher_discount: 0,
              sub_total:0,
              total: 0,
    
            },
            Markets: {
              cart_id:'',
            cartItems:[],
            total_quantity: 0,
            voucher_discount: 0,
            sub_total:0,
            total: 0,
             
           },
           Fedrel_Barbers: {
            cart_id:'',
            cartItems:[],
            total_quantity: 0,
            voucher_discount: 0,
            sub_total:0,
            total: 0,
             
           },
           Capital_Care: {
            cart_id:'',
            cartItems:[],
            total_quantity: 0,
            voucher_discount: 0,
            sub_total:0,
            total: 0,
           },
           total_quantity: 0,
           voucher_discount: 0,
           sub_total:0,
           total: 0,
      
      };

      default:
      return state;
  }*/
}
