import React from 'react';
import { useRoute } from '@react-navigation/native';
jest.mock('@react-navigation/native');
import renderer from 'react-test-renderer';

import { ProductDetails } from './ProductDetailsPageView';

describe('ProductDetailsPageView test cases', () => {
  it('ProductDetails renders', () => {
    useRoute.mockReturnValue({
      params: { id: 'test-id' },
    });
    let testRenderer = render();
    expect(testRenderer).toBeTruthy();
  });
  it('Got response to set cookie', () => {
    useRoute.mockReturnValue({
      params: { id: 'test-id' },
    });
    const initialStateForFirstUseStateCall = { count: 1 };
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => [initialStateForFirstUseStateCall, () => {}]);
    let testRenderer = render();
    expect(testRenderer).toBeTruthy();
  });
});

const render = () => {
  let testRenderer;
  renderer.act(() => {
    testRenderer = renderer.create(<ProductDetails />);
  });
  return testRenderer;
};
