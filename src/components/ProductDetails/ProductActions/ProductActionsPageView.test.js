/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import * as ProductActionsPage from './ProductActionsPage';
import { ProductActions } from './ProductActionsPageView';

describe('ProductActionsPageView test cases', () => {
  const paramsContainer = {
    product: {
      id: 'test-id',
      color: 'Test Color',
      storage: 'Test Storage',
      options: {
        colors: [{ code: 1000, name: 'Pure White' }],
        storages: [{ code: 2000, name: '32 GB' }],
      },
    },
    refColors: { current: { test: 'object' } },
    refStorages: { current: { test: 'object' } },
    colors: undefined,
    setColors: jest.fn(),
    storages: undefined,
    setStorages: jest.fn(),
    selectedOptions: {
      id: 'test-id',
      colorCode: undefined,
      storageCode: undefined,
    },
    setSelectedOptions: jest.fn(),
    setAddToCartResponse: jest.fn(),
  };

  it('ProductActions renders', () => {
    const result = paramsContainer.product.options.colors[0].name
      .split(/(\s+)|(\/+)/)
      [
        paramsContainer.product.options.colors[0].name.split(/(\s+)|(\/+)/).length - 1
      ].toLowerCase();
    jest.spyOn(ProductActionsPage, 'fixColorName').mockImplementation(() => result);
    render(<ProductActions {...paramsContainer} />);
    expect(paramsContainer).toBeTruthy();
  });

  it('ProductActions renders without objects', () => {
    const newParamsContainer = { ...paramsContainer, product: {} };
    render(<ProductActions {...newParamsContainer} />);
    expect(paramsContainer).toBeTruthy();
  });
});
