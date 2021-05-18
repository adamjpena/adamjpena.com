import React, { FC, useState } from 'react';
import { BaseTemplate } from './';
import { Nav } from 'components/navigation';

import 'scss/main.scss';
import 'font-awesome/css/font-awesome.min.css';

const DefaultTemplate: FC = ({ pageTitle, metaDescription, children }) => {
  const [isActive, setIsActive] = useState(false);

  const showNavbar = (shouldShowNavBar) => {
    setIsActive(shouldShowNavBar);
  };

  const [shouldShowEmailCta, setShouldShowEmailCta] = useState(false);

  return (
    <BaseTemplate
      metaTitle={`${pageTitle} | Adam J Peña`}
      {...{ metaDescription }}
    >
      <Nav
        isSticky
        isHidden={!isActive}
        {...{ isActive, setShouldShowEmailCta, shouldShowEmailCta }}
      />
      <Nav
        isHidden={isActive}
        {...{ setShouldShowEmailCta, shouldShowEmailCta, showNavbar }}
      />
      {children}
    </BaseTemplate>
  );
};

export default DefaultTemplate;
