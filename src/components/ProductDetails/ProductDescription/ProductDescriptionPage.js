export const printDetail = ({ detail, product }) => {
  let description = 'No hay información disponible';
  if (product[detail] && product[detail] !== '-') {
    description = product[detail];
    if (detail === 'price') {
      description += ' €';
    }
    if (detail === 'weight') {
      description += ' kg';
    }
    if (description instanceof Array) {
      description = description.join(' - ');
    }
  }
  return description;
};
