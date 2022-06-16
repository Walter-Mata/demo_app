import React,{useMemo,Fragment, useState} from 'react';
import { SafeAreaView,View,Alert, FlatList, TouchableOpacity } from 'react-native';
import {useTheme,IconButton,Badge, Title} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../components/Product/';
import * as types from '../../redux/types';
import { getCurrency } from '../../helper/currency';


const Cart=({route,navigation})=>{
  
    const theme=useTheme();
    const [checkOutItems, setCheckOutItems] = useState([]);
    const {cart}=useSelector(state=>state)
    const dispatch=useDispatch();

  
    useMemo(() => {
        getCheckout();
      }, [cart]);
    
      function getCheckout() {
        if (cart.cartItems.length > 0) {
          var data = cart.cartItems.filter((checkedItem) => {
            return checkedItem?.checkout === true;
          });
          setCheckOutItems(data);
        }
      }


    const goToProductDisplay=(item)=>{
        //navigation.navigate('ProductDisplay');
       navigation.navigate('ProductDisplay',{
        productName:item.productName,
        description:item.description,
        uri:item.uri,
        original_price:item.original_price,
        })
    }

    const removeItem=(item)=>{
        dispatch({type:types.REMOVE_TO_CART,payload:{
            cart_id:item.cart_id
        }})
    }

    const selectItem=(item)=>{
               var data = cart.cartItems.filter((checkedItem) => {
              return checkedItem.cart_id === item.cart_id;
            });
            if (data[0].checkout == false) {
              dispatch({
                type: types.UPDATE_CART_WITH_CHECKOUT,
                payload: { cart_id: item.cart_id, checkout: true },
              });
            } else {
              dispatch({
                type: types.UPDATE_CART_WITH_CHECKOUT,
                payload: { cart_id: item.cart_id, checkout: false },
              });
            }
  
    }

    const checkOUt=()=>{
        Alert.alert('Checkout Successful!!!')

        var itemToRemove = cart.cartItems.map((item) =>
       
        item.checkout == true ? item.cart_id : null
      );
        dispatch({type:types.REMOVE_ALL_TO_CART ,payload:itemToRemove})
    }

    return(
    <Fragment>
    <SafeAreaView style={{flex:1,backgroundColor:theme.colors.background}}>
                                         <FlatList
                                          data={cart.cartItems
}
                                          renderItem={({ item,index }) => 
                                          <Product.CartItem
                                          item={item}
                                          isLoading={false}
                                          isHideImage={false}
                                          isSelect={item.checkout}
                                          onPress={()=>goToProductDisplay(item)}
                                          onRemove={removeItem}
                                          onSelect={selectItem}
                                          />
                                          }
                                          initialNumToRender={10}
                                          ItemSeparatorComponent={() => (<View style={{ width:10, backgroundColor: theme.colors.background }} /> )}
                                          keyExtractor={(item,index) => `${index.toString()}`}
                                          showsHorizontalScrollIndicator={false}
                                          showsVerticalScrollIndicator={false}
                                          ListEmptyComponent={() =>null}/>
    </SafeAreaView>
    <View style={{borderWidth:1,
        borderColor:theme.colors.disabled,height:150,padding:20,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
        }}>
                                          <View>
                                          <Title>{getCurrency(cart.sub_total)}</Title>
                                          <Title>TOTAL</Title>

                                          </View>

                                          <View>
                                         <TouchableOpacity
                                         onPress={checkOUt}
                                         style={{
                                            height:70,
                                            width:150,
                                            borderRadius:20,
                                            justifyContent:'center',
                                            alignItems:'center',
                                            backgroundColor:checkOutItems.length>0?theme.colors.primary:theme.colors.disabled 
                                         }}>
                                         <Title style={{color:checkOutItems.length>0?theme.colors.background:theme.colors.disabled}}>CHECKOUT</Title>
                                         </TouchableOpacity>

                                          </View>
    </View>

    </Fragment>
    
    )
}


export default Cart;