import React,{useLayoutEffect,Fragment} from 'react';
import { SafeAreaView,View, FlatList } from 'react-native';
import {useTheme,IconButton,Badge} from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../components/Product/';
import {  productList_FlowerStore
 } from '../../repository/config.data/dummyData';


const ProductList=({route,navigation})=>{
  
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
    },[navigation])
    
    const gotoCartItems=()=>{
        navigation.navigate('Cart')
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

    return(<SafeAreaView style={{flex:1}}>
                                          <FlatList
                                          data={productList_FlowerStore
}
                                          renderItem={({ item,index }) => 
                                          <Product.Generic
                                          item={item}
                                          isLoading={false}
                                          isHideImage={false}
                                          onPress={()=>goToProductDisplay(item)}
                                          />
                                          }
                                          initialNumToRender={10}
                                          ItemSeparatorComponent={() => (<View style={{ width:10, backgroundColor: theme.colors.background }} /> )}
                                          keyExtractor={(item) => `${item.id.toString()}`}
                                          showsHorizontalScrollIndicator={false}
                                          showsVerticalScrollIndicator={false}
                                          ListEmptyComponent={() =>null}/>
    </SafeAreaView>)
}


export default ProductList;