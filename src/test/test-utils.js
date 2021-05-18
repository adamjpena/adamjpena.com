import React from 'react';
import PropTypes from 'prop-types';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from '../components/helpers';

function defaultRender(ui, { ...options } = {}) {
  function DefaultWrapper({ children }) {
    return <Provider>{children}</Provider>;
  }
  DefaultWrapper.propTypes = {
    children: PropTypes.node,
  };
  return rtlRender(ui, { wrapper: DefaultWrapper, ...options });
}

export * from '@testing-library/react';
export { defaultRender as render };
