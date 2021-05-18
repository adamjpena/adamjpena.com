import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { Provider } from 'components/helpers';

import 'scss/main.scss';
import 'font-awesome/css/font-awesome.min.css';

const BaseTemplate: FC = ({ metaTitle, metaDescription, children }) => {
  return (
    <Provider>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDescription} />
      </Helmet>
      <main>{children}</main>
    </Provider>
  );
};

export default BaseTemplate;
