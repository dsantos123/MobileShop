import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { useEffect, useState } from 'react';
import { Header } from '../../common/components/Header/HeaderPageView';
import { useNavigation } from '@react-navigation/native';
import { Button, SearchBar } from 'react-native-elements';
import { FlatGrid } from 'react-native-super-grid';
import { getProducts } from '../../common/apis/ShopApi';
export function ProductList() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [productsOrdered, setProductsOrdered] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    getProducts({ setResponse: setProducts });
  }, []);
  useEffect(() => {
    if (products) {
      setProductsOrdered(products);
    }
  }, [products]);
  useEffect(() => {
    if (search) {
      const filteredProduct = search.toLowerCase().trim();
      setProductsOrdered(
        products.filter(
          (product) =>
            product.brand.toLowerCase().includes(filteredProduct) ||
            product.model.toLowerCase().includes(filteredProduct)
        )
      );
    } else {
      setProductsOrdered(products);
    }
  }, [search]);
  return (
    <>
      <Header items={'0'} page={'home'} navigation={navigation} />
      <View style={styles.container}>
        <SearchBar
          placeholder="Filter item..."
          lightTheme={true}
          value={search}
          onChangeText={(search) => {
            setSearch(search);
          }}
        />
        <FlatGrid
          itemDimension={130}
          data={productsOrdered}
          style={styles.gridView}
          spacing={20}
          renderItem={({ item }) => {
            if (item) {
              return (
                <View style={[styles.itemContainer]}>
                  <ImageBackground
                    source={{ uri: item.imgUrl }}
                    resizeMode="cover"
                    style={styles.img}>
                    <Text style={styles.itemPrimary}>{item.brand}</Text>
                    <Text style={styles.itemPrimary}>{item.model}</Text>
                    <Text style={styles.itemSecondary}>
                      {item.price ? `${item.price} €` : 'Precio no disponible'}
                    </Text>
                    <Button
                      onPress={() => navigation.navigate('Details', { id: item.id })}
                      title={'Ver más'}
                      style={styles.button}
                    />
                  </ImageBackground>
                </View>
              );
            }
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E1E1E1',
    maxHeight: '80%',
    textAlign: 'center',
    backgroundColor: 'cian',
  },
  gridView: {
    marginRight: 10,
    marginBottom: -20,
    marginTop: 10,
    flex: 1,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowRadius: 10,
  },
  itemContainer: {
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemPrimary: {
    fontSize: 16,
    color: '#fff',
  },
  itemSecondary: { fontSize: 20, color: '#fff' },
  img: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 5,
  },
});
