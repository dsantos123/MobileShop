/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import { Header } from './HeaderPageView';

import React from 'react';

describe('HeaderPageView test cases', () => {
  const paramsContainer = { page: 'Details', navigation: { navigator: jest.fn() } };

  it('Header renders', () => {
    render(<Header {...paramsContainer} />);
    expect(paramsContainer.navigation.navigator).toBeTruthy();
  });
});
