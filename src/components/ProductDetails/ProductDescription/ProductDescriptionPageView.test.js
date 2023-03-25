/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { ProductDescription } from './ProductDescriptionPageView';

describe('ProductDescriptionPageView test cases', () => {
  const paramsContainer = {
    product: {
      id: 'test-id',
      color: 'Test Color',
      storage: 'Test Storage',
      brand: 'Test Brand',
      model: 'Test Model',
      price: 'Test Price',
      cpu: 'Test CPU',
      ram: 'Test RAM',
      os: 'Test OS',
      displayResolution: 'Test Display Resolution',
      battery: 'Test Battery',
      primaryCamera: 'Test Primary Camera',
      secondaryCmera: 'Test Secondary Camera',
      dimentions: 'Test Dimentions',
      weight: 'Test Weight',
      options: {
        colors: [{ code: 1000, name: 'Pure White' }],
        storages: [{ code: 2000, name: '32 GB' }],
      },
    },
    detailsToShow: [
      { Marca: 'brand' },
      { Modelo: 'model' },
      { Precio: 'price' },
      { CPU: 'cpu' },
      { RAM: 'ram' },
      { 'Sistema operativo': 'os' },
      { 'Resolución de pantalla': 'displayResolution' },
      { Batería: 'battery' },
      { 'Cámara principal': 'primaryCamera' },
      { 'Cámara secundaria': 'secondaryCmera' },
      { Dimensiones: 'dimentions' },
      { Peso: 'weight' },
    ],
  };

  it('ProductDescription renders', () => {
    const prodDescRender = render(<ProductDescription {...paramsContainer} />);
    expect(prodDescRender).toBeTruthy();
  });
});
