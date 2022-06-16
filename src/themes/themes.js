import { DefaultTheme,configureFonts} from 'react-native-paper';
import { COLORS} from '../utils/utils';


const fontConfig = {
  web: {
    regular: {
      fontFamily: 'RedHatText-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'RedHatText-Medium',
      fontWeight: 'normal',
    },
  
    light: {
      fontFamily: 'RedHatText-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'RedHatText-Thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'RedHatText-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'RedHatText-Medium',
      fontWeight: 'normal',
    },
  
    light: {
      fontFamily: 'RedHatText-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'RedHatText-Thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'RedHatText-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'RedHatText-Medium',
      fontWeight: 'normal',
    },
  
    light: {
      fontFamily: 'RedHatText-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'RedHatText-Thin',
      fontWeight: 'normal',
    },
  }
};


export const theme = {
    ...DefaultTheme,
    roundness: 5,
    
    colors: {
      ...DefaultTheme.colors,
      primary:COLORS.primary,
      accent:COLORS.primary2,
      text:COLORS.black,
      background:COLORS.white,
      disabled: "#989898",
      error: COLORS.error,
      card:COLORS.white,
      dividerColor:COLORS.gray10,
    
    },
    fonts: configureFonts(fontConfig),
  };
  