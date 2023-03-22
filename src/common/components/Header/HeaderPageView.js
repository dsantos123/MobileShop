import { StyleSheet, View, Text } from 'react-native';
import { useCookies } from 'react-cookie';

export function Header({ page, navigation }) {
  const [{ items }] = useCookies(['items']);
  const breadcrumb = { home: 'Home', details: 'Home > Details' };
  return (
    <View style={styles.container}>
      <Row>
        <Col numRows={2}>
          <View style={styles.title}>
            <Text style={styles.title} onPress={() => navigation.navigate('Home')}>
              Mobile Shop
            </Text>
          </View>
        </Col>
        <Col numRows={2}>
          <View style={styles.cartItems}>
            <Text>Added in cart: {items || 0}</Text>
          </View>
        </Col>
      </Row>
      <Row>
        <Col numRows={1}>
          <Text>{breadcrumb[page]}</Text>
        </Col>
      </Row>
    </View>
  );
}

const Row = ({ children }) => <View style={styles.row}>{children}</View>;

const Col = ({ numRows, children }) => {
  return <View style={styles[`${numRows}col`]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    maxHeight: 120,
    maxWidth: '100%',
    backgroundColor: '#D4FFF5',
  },
  row: {
    marginLeft: '2%',
    marginRight: '2%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  '1col': {
    flex: 1,
  },
  '2col': {
    flex: 2,
  },
  cartItems: {
    textAlign: 'right',
  },
  title: {
    fontSize: 60,
  },
});
