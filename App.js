import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/common/components/Header/HeaderPageView';
import { ProductList } from './src/components/ProductList/ProductListPageView';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductDetails } from './src/components/ProductDetails/ProductDetailsPageView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={ProductList} />
        <Stack.Screen name="Details" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
