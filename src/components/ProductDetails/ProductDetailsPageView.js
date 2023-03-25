import { StyleSheet, View } from 'react-native';
import { useCookies } from 'react-cookie';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Header } from '../../common/components/Header/HeaderPageView';
import { getProductDetails } from '../../common/apis/ShopApi';
import { useEffect, useState, useRef } from 'react';
import { Image } from 'react-native-elements';
import { ProductDescription } from './ProductDescription/ProductDescriptionPageView';
import { ProductActions } from './ProductActions/ProductActionsPageView';
export function ProductDetails() {
  const [addToCartResponse, setAddToCartResponse] = useState();
  const [, setCookie] = useCookies(['items']);
  const route = useRoute();
  const navigation = useNavigation();
  const [productDetails, setProductDetails] = useState({});
  const detailsToShow = [
    { Marca: 'brand' },
    { Modelo: 'model' },
    { Precio: 'price' },
    { CPU: 'cpu' },
    { RAM: 'ram' },
    { 'Sistema operativo': 'os' },
    { 'Resolución de pantalla': 'displayResolution' },
    { Batería: 'battery' },
    { 'Cámara principal': 'primaryCamera' },
    { 'Cámara secundaria': 'secondaryCmera' },
    { Dimensiones: 'dimentions' },
    { Peso: 'weight' },
  ];
  const refColors = useRef({});
  const refStorages = useRef({});
  const [colors, setColors] = useState();
  const [storages, setStorages] = useState();
  const [selectedOptions, setSelectedOptions] = useState({
    id: route.params.id,
    colorCode: undefined,
    storageCode: undefined,
  });

  useEffect(() => {
    getProductDetails({ id: route.params.id, setResponse: setProductDetails });
  }, []);

  useEffect(() => {
    if (addToCartResponse && addToCartResponse.count) {
      setCookie('items', addToCartResponse.count, { maxAge: 3600 });
    }
  }, [addToCartResponse]);
  return (
    <>
      <Header page={'details'} navigation={navigation} />
      <View style={styles.container}>
        <Image source={{ uri: productDetails.imgUrl }} style={styles.img} />
        <View style={styles.infoContainer}>
          <ProductDescription detailsToShow={detailsToShow} product={productDetails} />
          <ProductActions
            refColors={refColors}
            refStorages={refStorages}
            colors={colors}
            setColors={setColors}
            storages={storages}
            setStorages={setStorages}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            setAddToCartResponse={setAddToCartResponse}
            product={productDetails}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'aliceblue',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  container2: {
    backgroundColor: 'aliceblue',
  },
  infoContainer: {
    marginBottom: 5,
    backgroundColor: 'aliceblue',
    alignSelf: 'flex-start',
  },
  img: {
    height: 350,
    width: 350,
  },
});
