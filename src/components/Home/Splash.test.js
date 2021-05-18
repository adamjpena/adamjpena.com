/* eslint-env jest */
import React from 'react';
import { render } from 'test/test-utils';
import Splash from './Splash';

it('renders without crashing', () => {
  render(
    <Splash>
      <></>
    </Splash>,
  );
});
