import { Dimensions, Platform} from 'react-native';


export const DEVICE_WIDTH=Dimensions.get('window').width;
export const DEVICE_HEIGHT=Dimensions.get('window').height;


const {width, height} = Dimensions.get('window'); 

export const COLORS = {
    primary:'#B2D465',
    //'#1d5516', // Green
    primary2: '#80AF46',
    primary3: '#', 
    secondary: '#', // black
    gray10: '#ECECEC',
    gray20: '#6F6F6F',
    gray30: '#A1A1A1',
    gray40: '#999999',
    gray50: '#7F7F7F',
    gray60: '#666666',
    gray70: '#4C4C4C',
    gray80: '#333333',
    additionalColor4: '#C3C3C3',
    additionalColor9: '#F3F3F3',
    additionalColor11: '#F0FFFB',
    additionalColor13: '#EBF3EF',
    error:'#EB5757', //'#EE3031',
    white: '#ffffff',
    black: '#000000',
  
    transparent: 'transparent',
    transparentWhite1: 'rgba(255, 255, 255, 0.1)',
    transparentBlack1: 'rgba(0, 0, 0, 0.1)',
    transparentBlack7: 'rgba(0, 0, 0, 0.7)',
  };
 

  export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 18,
  
    // font sizes
    largeTitle: 40,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,
  
    // app dimensions
    width,
    height,
  };
  
  export const FONTS = {
  /*  largeTitle: {fontFamily:"Gotham-Medium", fontSize: SIZES.largeTitle},
    h1: {fontFamily:"Gotham-Medium", fontSize: SIZES.h1, lineHeight: 36},
    h2: {fontFamily:"Gotham-Medium", fontSize: SIZES.h2, lineHeight: 30},
    h3: {fontFamily:"Gotham-Medium", fontSize: SIZES.h3, lineHeight: 22},
    h4: {fontFamily:"Gotham-Medium", fontSize: SIZES.h4, lineHeight: 22},
    h5: {fontFamily:"Gotham-Medium", fontSize: SIZES.h5, lineHeight: 22},
    body1: {
      fontFamily: "RedHatText-Regular",
      fontSize: SIZES.body1,
      lineHeight: 36,
    },
    body2: {
      fontFamily:"RedHatText-Regular",
      fontSize: SIZES.body2,
      lineHeight: 30,
    },
    body3: {
      fontFamily:"RedHatText-Regular",
      fontSize: SIZES.body3,
      lineHeight: 22,
    },
    body4: {
      fontFamily:"RedHatText-Regular",
      fontSize: SIZES.body4,
      lineHeight: 22,
    },
    body5: {
      fontFamily:"RedHatText-Regular",
      fontSize: SIZES.body5,
      lineHeight: 22,
    },*/
  };






export const black="#000000"
export const white="#ffffff"
export const gray="gray"
export const red="#EE3031"
export const grayButton="#ECECEC"
export const gray2="#6F6F6F"
export const gray3="#737373"

export const bold = "bold"

export const dividerColor="#EEEEEE"

export const APIRegion='SIT';
export const ImageLink=''


