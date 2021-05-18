/* eslint-env jest */
import React from 'react';
import { render } from 'test/test-utils';
import Index from 'pages/index';

it('renders without crashing', () => {
  render(<Index />);
});
