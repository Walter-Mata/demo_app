import React, { Fragment } from 'react'
import { View,TouchableOpacity,StyleSheet,Image} from 'react-native'
import { Text,useTheme } from 'react-native-paper'
import { getCurrency } from '../../helper/currency'
import { DEVICE_WIDTH, gray } from '../../utils/utils'
import SkeletonContent from 'react-native-skeleton-content-nonexpo';


const Generic=({
                item,
                hideImage,
                isLoading=false,
                onPress,
                productStyle,
                })=>{
   
    const theme=useTheme();

    const skeletalLayout = [
        { key: 'product', width: (DEVICE_WIDTH/100)*65, height: 20 },
    ]
    const skeletalLayout_2 = [
     
        { key: 'description',width: (DEVICE_WIDTH/100)*65, height: 20 }
    ]
    
   // item.description && skeletalLayout.push({ key: 'description', width: 130, height: 20, marginBottom: 6 })

    const skeletalLayout_3 = [
        { key: 'original_price',width: (DEVICE_WIDTH/100)*65, height: 20}
    ]
    //item.original_price && skeletalLayout2.push({ key: 'original_price', width: 80, height: 20, marginBottom: 6 })
   // greaterThan1 && skeletalLayout2.push({ key: 'quantity', width: 20, height: 20, marginBottom: 6 })

    return(
        <TouchableOpacity 
        onPress={onPress}
        style={[styles.wrapper, productStyle]}>

                {/* Left */}
                    {hideImage? null : (
                        <View style={[styles.leftWrapper,{width:'auto', opacity:item.isOutOfStock? 0.5 : 1 } ]}>
                            <SkeletonContent
                                layout={[{ key: 'image', ...styles.image, marginRight: 6 }]}
                                isLoading={isLoading}>
                                    <Image 
                                    source={item.uri}
                                    style={[styles.image,{borderRadius:5, 
                                        paddingRight:16}]}
                                     />
                            </SkeletonContent>

                        </View>
                    )}


                {/* Main */}
                <View style={[styles.descriptionWrapper,{padding:isLoading?0:10}]}>
                    
                    <SkeletonContent layout={skeletalLayout} isLoading={isLoading}>
                    <View >
                        <Text style={[styles.productName, {color: item.isOutOfStock? theme.colors.disabled : theme.colors.text}]}>{item?.productName}</Text>
                        </View >
                    </SkeletonContent>


                    
                    <SkeletonContent layout={skeletalLayout_3} isLoading={isLoading}>
                                <View style={{width:'100%', flexDirection:"row", justifyContent:"space-between"}}>
                                    <Text style={[{color:item.isOutOfStock? theme.colors.disabled : theme.colors.text}]}>{item.original_price?getCurrency(item.original_price):''}</Text>
                                </View>
                    </SkeletonContent>

                </View>
        </TouchableOpacity>
    )

}



const styles=StyleSheet.create({
     descriptionWrapper:{
        flex:1,
        alignItems:'flex-start',
        flexDirection:'column',
    },
    wrapper:{
        padding:15,
        flexDirection:"row", 
        height:"auto", 
    
    },
 productName:{
        fontSize: 13,
        //fontFamily:FontMedium
       
    },
   leftWrapper:{
        width:40, 
        justifyContent:"space-between", 
    },
   description:{
        color:gray, 
        fontSize:12, 
    },
    
     price:{
        fontWeight:"bold", 
        fontSize:12
    },
    image:{
        resizeMode:'contain',
        width: 80,
        height: 80,
    }
})

export default Generic;
