import { printDetail } from './ProductDescriptionPage';

describe('ProductDescriptionPage test cases', () => {
  const params = {
    product: {
      brand: 'Test Brand',
      weight: 30,
      price: 30,
      storage: ['30 GB', 'Plane'],
      mark: '-',
    },
    detail: 'brand',
  };
  it('printDetail works', () => {
    const result = printDetail(params);
    expect(result).toEqual('Test Brand');
  });

  it('printDetail works (price case)', () => {
    const newParams = { ...params, detail: 'price' };
    const result = printDetail(newParams);
    expect(result).toEqual('30 €');
  });

  it('printDetail works (weight case)', () => {
    const newParams = { ...params, detail: 'weight' };
    const result = printDetail(newParams);
    expect(result).toEqual('30 kg');
  });

  it('printDetail works (array case)', () => {
    const newParams = { ...params, detail: 'storage' };
    const result = printDetail(newParams);
    expect(result).toEqual('30 GB - Plane');
  });

  it('printDetail works (no data case)', () => {
    const newParams = { ...params, detail: 'mark' };
    const result = printDetail(newParams);
    expect(result).toEqual('No hay información disponible');
  });
});
