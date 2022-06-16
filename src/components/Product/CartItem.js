import React, {  useEffect,  useState } from 'react'
import {  Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Text,useTheme,Checkbox,Button} from 'react-native-paper'
//import {Checkbox} from 'srn-components-lib';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import {  COLORS, DEVICE_WIDTH, FontMedium } from '../../utils/utils';
import Quantity from '../Product/Quantity';
import { getCurrency } from '../../helper/currency';
import * as types from '../../redux/types';

const CartItem=({
        index,
        item,
        isLoading,
        isSelect,
        disableCheckbox,
        onSelect,
        onChangeQuantity,
        onRemove,
        contentStyle,
        module='',
        ...props
        })=>{

    let quantity=item?.quantity;
    const theme=useTheme(); 
    const dispatch=useDispatch();
    const [isChecked,setIsChecked]=useState(false);
    const {cart}=useSelector(state=>state);   


        useEffect(()=>{
        if(isSelect==true){
            setIsChecked(true)
        }else{
            setIsChecked(false)
        }
        
         },[isSelect])
      
         const handleDecreasePress=(selected)=>{
           let Index=0;
             if(quantity>1){
                let newArr= cart.cartItems.map((selected,index)=>{
                    if(selected.cart_id===item.cart_id){
                  Index=index;
                  return {...selected,quantity:quantity-=1,quantity_price:parseFloat(selected.original_price)*quantity}
                }
              })    
              dispatch({ type: types.UPDATE_CART,payload:{...newArr[Index]}});

             }
        }
        const handleIncreasePress=()=>{
               let Index=0;
               let newArr= cart.cartItems.map((selected,index)=>{
                if(selected.cart_id===item.cart_id){
                Index=index;
                  return {...selected,index:index,quantity:quantity+=1,quantity_price:parseFloat(selected.original_price)*quantity}
                }
              })
              
         dispatch({ type: types.UPDATE_CART,payload:{...newArr[Index]}});

        }

    return(
        <View 
         { ...props}
         style={[cartItemStyle.wrapper,contentStyle]}>
            <View style={[cartItemStyle.leftWrapper]}>
            
                               
                                           <View>
                                              <View style={{
                                                width:'70%',
                                                height:100,
                                                alignItems:'center',
                                                justifyContent:'flex-start',
                                                flexDirection:'row'}}> 
                                               
                                               <SkeletonContent 
                                                isLoading={isLoading}
                                                layout={[{ key: 'icon', width: 180, height: 20}]}
                                                containerStyle={{flex:1}}>

<Checkbox.Android
color={theme.colors.primary}
      status={isChecked ? 'checked' : 'unchecked'}
      onPress={() => {
        setIsChecked(!isChecked);
        onSelect(item)
      }}
    />
                                          
                                       

                                                </SkeletonContent>

                                                  <SkeletonContent 
                                                  isLoading={isLoading}
                                                  layout={[{ key: 'icon', width: 100, height: 70, marginBottom: 6  }]}
                                                  containerStyle={{flex:1}}>
                                                  <Image
                                                  source={item.uri}
                                                  style={[cartItemStyle.itemImg]}
                                                  resizeMode="contain"
                                                  />
                                                 </SkeletonContent>


                                                 <SkeletonContent 
                                                isLoading={isLoading}
                                                layout={[{ key: 'icon',  width: 180, height: 20,marginTop:5}]}
                                                containerStyle={{flex:1}}>
                                                <Text 
                                                numberOfLines={4}
                                                style={[cartItemStyle.description,{
                                                width:100,  
                                                marginLeft:40}]}>{item?.productName}
                                                
                                                </Text>    

                                                <Text style={[cartItemStyle.description,{width:100,marginLeft:40}]}>{`${getCurrency(item?.original_price)} / pc`}</Text>


                                                </SkeletonContent>


                                                 </View>
                                                <View>

                                              


                                      
                                              </View>
                                        </View>
                         
      

                </View>

                <View style={[cartItemStyle.rightWrapper]}>
                           <SkeletonContent 
                            isLoading={isLoading}
                            layout={[{ key: 'icon', width:100, height: 20, marginBottom: 6 }]}
                            containerStyle={{flex:1}}>
                            <Text style={cartItemStyle.price}>{getCurrency(item.quantity_price)}</Text>
                            </SkeletonContent>

                                 <SkeletonContent 
                                                isLoading={isLoading}
                                                layout={[{ key: 'icon', width:'100%', height: 20,marginTop:5}]}
                                                containerStyle={{flex:1}}>
                                
                                            <View style={cartItemStyle.controlStyle}>
                                           
                                                <View style={{marginLeft:5}}>
                                                  <Quantity 
                                                    isInput={false}
                                                    iconColor={theme.colors.primary}
                                                    value={item?.quantity}
                                                    handleDecreasePress={handleDecreasePress}
                                                    handleIncreasePress={handleIncreasePress}
                                                    isLoading={isLoading}
                                                    
                                                    />
                                                    </View>
                                                      <View>
                                            
                                                    </View>
                            
                                      </View>
                                </SkeletonContent>

                                <SkeletonContent 
                                isLoading={isLoading}
                                layout={[{ key: 'icon', width:100, height: 20, marginTop: 6 }]}
                                containerStyle={{flex:1}}>
                              <TouchableOpacity 
                               onPress={()=>onRemove(item)}
                              style={{marginTop:5,width:80,alignItems:'flex-end'}}>
                              <Text style={{color:theme.colors.primary}}>REMOVE</Text>
                              </TouchableOpacity>
                           
                            </SkeletonContent>
                      
            </View>

        </View>

    )

}

const cartItemStyle=StyleSheet.create({
    wrapper:{
       
        margin:10,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:COLORS.gray10,
        borderRadius:10,
       
    },
    leftWrapper:{
       width:DEVICE_WIDTH/2,
       paddingTop:'4%',
     
    },
    rightWrapper:{
        paddingTop:'7%',
        width:DEVICE_WIDTH/1.6,
        alignItems:'center',
        justifyContent:'center'

    },
    description:{
    fontSize:12
    },
    controlStyle:{    
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'flex-start',
 
    },
    price:{
        fontFamily:FontMedium,
        fontSize:12,
        textAlign:'center',
        marginBottom:5

    },
    itemImg:{ 
       // marginTop:5,
        width: 80, 
        height: 80
       }

})

export default CartItem


