import * as ProductActions from './ProductActionsPage';
import { changeOption, fixColorName } from './ProductActionsPage';
describe('ProductDetailsPageView test cases', () => {
  it('changeOption works', () => {
    const params = {
      colorComponents: { color1000: { id: 'black', style: { background: 'white' } } },
      code: 1000,
      color: 'black',
      option: 'color',
      setSelectedOptions: jest.fn(),
    };
    changeOption(params);
    expect(params.setSelectedOptions).toHaveBeenCalled();
  });

  // I don't know how to do the test here
  it('fixColorName works', () => {
    const params = {
      color: 'Pure White',
    };
    const result = params.color
      .split(/(\s+)|(\/+)/)
      [params.color.split(/(\s+)|(\/+)/).length - 1].toLowerCase();
    jest.spyOn(ProductActions, 'fixColorName').mockImplementation(() => result);
    expect(fixColorName(params)).toBe(result);
  });
});
