/* eslint-env jest */
import React from 'react';
import { render } from 'test/test-utils';
import Nav from './Nav';

it('renders without crashing', () => {
  render(<Nav />);
});
