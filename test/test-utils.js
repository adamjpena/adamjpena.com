import React from "react";
import PropTypes from "prop-types";
import { render as rtlRender } from "@testing-library/react";

function defaultRender(ui, { ...options } = {}) {
  function DefaultWrapper({ children }) {
    return <>{children}</>;
  }
  DefaultWrapper.propTypes = {
    children: PropTypes.node,
  };
  return rtlRender(ui, { wrapper: DefaultWrapper, ...options });
}

export * from "@testing-library/react";
export { defaultRender as render };
