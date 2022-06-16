import React,{useLayoutEffect,Fragment, useState} from 'react';
import { SafeAreaView,View,Image,FlatList, ScrollView, TouchableOpacity } from 'react-native';
import {useTheme,Title,Subheading,Text,IconButton,Badge, Button} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrency } from '../../helper/currency';
import * as types from '../../redux/types';
import uuid from 'react-native-uuid';

const ProductDisplay=({route,navigation})=>{
    let quantity=1;
    const { 
        productName,
        description,
        uri,
        original_price

    } = route.params!=undefined?route.params:'';
    const theme=useTheme();
    const {cart}=useSelector(state=>state)
    const dispatch=useDispatch();

 
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => (
                <Fragment> 
                <View style={{width:40,alignItems:'flex-end'}}>
                     
                        <Badge 
                        visible={cart.cartItems.length>0?true:false}
                        style={{position:'absolute'}}>{
                        cart.cartItems.length}</Badge>
                    <IconButton
                        icon='cart-outline'
                        iconButtonStyle={{
                         alignSelf:'flex-end',
                        borderRadius:5}}
                        onPress={gotoCartItems}/>

                    </View>
                    </Fragment>

),
        })
    },[navigation,cart])

    const gotoCartItems=()=>{
        navigation.navigate('Cart')
    }
    

const addToCart=()=>{
   dispatch({
    type:types.ADD_TO_CART,
    payload:{
        cart_id:uuid.v4(),
        productName:productName,
        description:description,
        checkout:false,
        uri:uri,
        quantity:1,
        original_price:original_price,
        quantity_price:original_price
    }
   })
}

    return(<SafeAreaView style={{flex:1}}>
                          <ScrollView style={{padding:10}}>
                                        <View style={{
                                            padding:20,
                                            flexDirection:'column',justifyContent:'flex-start'}}>
                                            <Image
                                            source={uri}
                                            style={{alignSelf:'center', width:200,height:200}}
                                            />
                                            <View style={{marginTop:20}}>
                                            <Title>{productName}</Title>
                                        <Subheading>{description}</Subheading>
                                        <Title>{getCurrency(original_price)}</Title>   
                                            </View>
                                       
                                      </View>

                                        
                                           
                                         
                                     


                         </ScrollView>



                      
                                              <View style={{
                                               marginLeft:20,marginRight:20,
                                               height:40,
                                                alignSelf:'space-between',
                                               
                                                flexDirection:'row'                                                
                                                }}>

                                       
                                                    <Button
                                                    onPress={addToCart}
                                                    style={{ width:'100%',
                                                         backgroundColor:theme.colors.primary}}>
                                                <Text
                                                style={{color:theme.colors.background}}
                                                >ADD TO CART</Text>
                                                </Button>
                                            </View>
        
                             
         </SafeAreaView>)
}


export default ProductDisplay;