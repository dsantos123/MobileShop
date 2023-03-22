import { StyleSheet, View, Text, FlatList } from 'react-native';
import { printDetail } from './ProductDescriptionPage';
export function ProductDescription({ product, detailsToShow }) {
  return (
    <>
      <Text style={styles.text}>Las características del dispositivo son las siguientes:</Text>
      <FlatList
        data={detailsToShow}
        renderItem={({ item }) => {
          item = Object.entries(item)[0];
          return (
            <View style={styles.list}>
              <Text style={styles.text}>{`\u2022 ${item[0]}: ${printDetail({
                detail: item[1],
                product,
              })}`}</Text>
            </View>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
  list: {
    marginBottom: 5,
    marginTop: 5,
  },
});
