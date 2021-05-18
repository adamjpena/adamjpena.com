import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'lib/constants';

interface Props {
  children: React.ReactNode;
}

const Provider: FC<Props> = ({ children }) => (
  <ThemeProvider {...{ theme }}>{children}</ThemeProvider>
);

export default Provider;
