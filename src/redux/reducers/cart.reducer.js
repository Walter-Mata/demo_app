import * as types from '../types';
import initialState from './initialState';




export const CART=(state = initialState.cart, action)=>{
 
  switch (action.type){
      case types.ADD_TO_CART:
        return {...state,
          cartItems: [...state.cartItems,action.payload],
        }

        case types.UPDATE_CART:
          const updatedData = state.cartItems.map(x => (x.cart_id === action.payload.cart_id ? { ...x, ...action.payload } : x));
          const itemsInCart=  updatedData.filter(cartItem => cartItem.checkout === true);
          var total_qty = itemsInCart.reduce((accumulator, current) => accumulator + parseInt(current.quantity), 0);
          var sub_total =itemsInCart.reduce((accumulator, current) => accumulator + parseFloat(current.quantity_price), 0);
          
          return {...state,
            cartItems: updatedData,
            total_quantity:total_qty,
            sub_total:sub_total
          }

          case types.UPDATE_CART_WITH_CHECKOUT:
            const remainingitemsInCart= state.cartItems.filter(cartItem => cartItem.checkout === true);
            const updatedCheckoutData = state.cartItems.map(x => (x.cart_id === action.payload.cart_id ? { ...x, ...action.payload } : x));
            const selectedItem=state.cartItems.filter(cartItem => cartItem.cart_id === action.payload.cart_id);
            if(!selectedItem[0].checkout){
                //increase
                return {...state,
                    cartItems: updatedCheckoutData,
                    total_quantity:remainingitemsInCart.reduce((accumulator, current) => accumulator + parseInt(current.quantity), 0)+parseInt(selectedItem[0].quantity),
                    sub_total:remainingitemsInCart.reduce((accumulator, current) => accumulator + parseFloat(current.quantity_price), 0) + parseFloat(selectedItem[0].quantity_price)
                  
                  }
              }
              else{
               //decrease
              sub_total = remainingitemsInCart.reduce((accumulator, current) => accumulator + parseFloat(current.quantity_price), 0) - parseFloat(selectedItem[0].quantity_price);
              return {...state,
                  total_quantity:remainingitemsInCart.reduce((accumulator, current) => accumulator + parseInt(current.quantity), 0)-parseInt(selectedItem[0].quantity),
                  cartItems: updatedCheckoutData,
                  sub_total:sub_total
                }
           
           
            }
  

          case types.REMOVE_TO_CART:
            const remainingItems=state.cartItems.filter(cartItem => cartItem.cart_id !== action.payload.cart_id);
            var total_qty = remainingItems.reduce((accumulator, current) => accumulator + parseInt(current.quantity), 0);
            var sum = remainingItems.reduce((accumulator, current) => accumulator + parseFloat(current.original_price)*parseFloat(current.quantity), 0);
            return {...state,
                cartItems: remainingItems,
                total_quantity:total_qty,
                sub_total:sum
              }

         case types.REMOVE_ALL_TO_CART:
                const remainingItem = state.cartItems.filter(cartItem => action.payload.indexOf(cartItem.cart_id) === -1)
                var total_qty = remainingItem.reduce((accumulator, current) => accumulator + parseInt(current.quantity), 0);
                var sum = remainingItem.reduce((accumulator, current) => accumulator + parseFloat(current.original_price), 0);
                return {...state,
                    cartItems:remainingItem,
                    total_quantity:total_qty,
                    sub_total:sum
                  }

        default:
          return state;
  }
 
}
