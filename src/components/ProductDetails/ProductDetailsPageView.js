import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Header } from '../../common/components/Header/HeaderPageView';
import { getProductDetails } from '../../common/apis/ShopApi';
import { useEffect, useState } from 'react';
export function ProductDetails() {
  const route = useRoute();
  const [productDetails, setProductDetails] = useState({});
  useEffect(() => {
    getProductDetails({ id: route.params.id, setResponse: setProductDetails });
  }, []);
  useEffect(() => {
    if (productDetails) {
      console.log(productDetails);
    }
  }, [productDetails]);
  return (
    <>
      <Header items={'0'} page={'details'} navigation={navigation} />
      <Text>El id elegido es {route.params.id}</Text>
    </>
  );
}
