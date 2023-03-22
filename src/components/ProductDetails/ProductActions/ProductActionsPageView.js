import { useEffect } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Text, Button } from 'react-native';
import { postAddToCart } from '../../../common/apis/ShopApi';
import { changeOption, fixColorName } from './ProductActionsPage';
export function ProductActions({
  product,
  refColors,
  refStorages,
  colors,
  setColors,
  storages,
  setStorages,
  selectedOptions,
  setSelectedOptions,
  setAddToCartResponse,
}) {
  useEffect(() => {
    if (product && Object.keys(product).length > 0) {
      setColors(
        fillOption({
          option: 'color',
          selectedRefs: refColors,
          product,
          setSelectedOptions,
        })
      );
      setStorages(
        fillOption({
          option: 'storage',
          selectedRefs: refStorages,
          product,
          setSelectedOptions,
        })
      );
    }
  }, [product]);

  useEffect(() => {
    if (colors && product.options.colors.length === 1) {
      changeOption({
        colorComponents: refColors.current,
        code: product.options.colors[0].code,
        color: fixColorName({ color: product.options.colors[0].name }),
        option: 'color',
        setSelectedOptions,
      });
    }
  }, [colors]);

  useEffect(() => {
    if (storages && product.options.storages.length === 1) {
      changeOption({
        colorComponents: refStorages.current,
        code: product.options.storages[0].code,
        color: 'white',
        option: 'storage',
        setSelectedOptions,
      });
    }
  }, [storages]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Selecciona un color y un almacenamiento</Text>
      </View>
      <View style={styles.content}>{colors}</View>
      <View style={styles.content}>{storages}</View>
      <View style={styles.button}>
        <Button
          title="Añadir al carrito"
          disabled={Object.values(selectedOptions).some((code) => !code)}
          onPress={() =>
            postAddToCart({
              body: selectedOptions,
              setResponse: setAddToCartResponse,
            })
          }></Button>
      </View>
    </View>
  );
}

const fillOption = ({ option, selectedRefs, product, setSelectedOptions }) => {
  let optionList = [];
  for (let { code, name } of product.options[`${option}s`]) {
    let selectedColor = option === 'color' ? fixColorName({ color: name }) : 'white';
    optionList = [
      ...optionList,
      <TouchableWithoutFeedback
        key={`touchable${name}`}
        onPress={() => {
          changeOption({
            colorComponents: selectedRefs.current,
            code,
            option,
            color: selectedColor,
            setSelectedOptions,
          });
        }}>
        <View
          nativeID={selectedColor}
          ref={(ref) => (selectedRefs.current[`${option}${code}`] = ref)}
          style={[styles.box, { background: selectedColor }]}>
          {option === 'storage' ? <Text>{name}</Text> : null}
        </View>
      </TouchableWithoutFeedback>,
    ];
  }
  return optionList;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  box: {
    borderStyle: 'dotted',
    borderWidth: 1,
    margin: 5,
    width: 50,
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 30,
  },
});
