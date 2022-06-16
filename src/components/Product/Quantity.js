import React, { useMemo, useState } from 'react'
import { View,TouchableOpacity, Text,StyleSheet } from 'react-native';
import {useTheme} from 'react-native-paper'
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
//import {TapButton,SkeletalContainer,NumberField } from 'srn-components-lib';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const Quantity=({
                    style={},
                    buttonStyle={},
                    inputStyle={},
                    isInput=true,
                    iconSize=20,
                    iconColor='red',
                    leftIcon=<MaterialIcons name="remove" size={iconSize} color={iconColor}/>,
                    rightIcon=<MaterialIcons name="add" size={iconSize} color={iconColor}/>,
                    value,
                    handleDecreasePress,
                    handleIncreasePress,
                    loading=false,
                })=>{
   
    const theme=useTheme();


  
    return (

         <SkeletonContent 
         isLoading={loading}
         layout={[{ key: 'icon' , width:'100%',height: 30 }]}
         containerStyle={{flex:1}}>
       
         <View style={[quantityStyles.wrapper,{borderWidth:1,borderColor:theme.colors.primary},style]}>
                <TouchableOpacity 
              onPress={handleDecreasePress}  
                style={{width:'auto'}}>
                    {leftIcon}
</TouchableOpacity>  
              {isInput? (
                <NumberField 
                    value={value} 
                   // onChangeText={(text)=>onChangeText(text)}
                    style={[quantityStyles.input, inputStyle]}
                    maxLength={3}
                    />
            )   :(
                <View style={[quantityStyles.input, inputStyle]}>
                    <Text>{value}</Text>
                </View>
            ) }
            
            <TouchableOpacity 
              onPress={handleIncreasePress}  
                style={{width:'auto'}}>
                    {rightIcon}
</TouchableOpacity>  
        </View>
        </SkeletonContent>
    );
}

export const quantityStyles = StyleSheet.create({
    wrapper:{
  
        flexDirection:"row",
        height:40,
        justifyContent:'center',
        alignItems:'center',
        width:110,
        borderRadius:30,
        marginRight:20
    },
    button:{
        justifyContent:"center",
        alignItems:"center",
        width:30,
        height:30,
        color:"#000",
      
    },
    input:{
    
        width:20,
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        marginRight:10,
        marginLeft:10,
        color:"#000",
    }
})
export default Quantity


