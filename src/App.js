import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import ProductList from './screens/product_list/ProductList';
import ProductDisplay from './screens/product_display/ProductDisplay';
import Cart from './screens/cart/Cart';
import { Provider as PaperProvider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import redux from './redux';
const Stack = createNativeStackNavigator();
const App = ({}) => {
    return (
   <PaperProvider
   settings={{
    icon: props => <Ionicons {...props} />,
  }}
   > 
   <Provider store={redux.store}> 
        <NavigationContainer>
        <Stack.Navigator initialRouteName='ProductList'>
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDisplay" component={ProductDisplay} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>

        </NavigationContainer>
        </Provider>
        </PaperProvider>
    );
}

/*<Provider></Provider>*/

export default App;