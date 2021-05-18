/* eslint-env jest */
import React from 'react';
import { render } from 'test/test-utils';
import About from './About';

it('renders without crashing', () => {
  render(<About />);
});
