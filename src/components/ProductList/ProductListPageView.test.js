/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
jest.mock('@react-navigation/native');
import { ProductList } from './ProductListPageView';

describe('ProductListPageView test cases', () => {
  it('ProductList renders', () => {
    const prodListRender = render(<ProductList />);
    expect(prodListRender).toBeTruthy();
  });
});
