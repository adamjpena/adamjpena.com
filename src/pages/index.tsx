import React, { FC, useState } from 'react';
import Helmet from 'react-helmet';
import Splash from 'components/Splash';
import About from 'components/About';
import { Nav } from 'components/navigation';
import styles from 'scss/index.module.scss';
import { BaseTemplate } from 'templates';

const Index: FC = () => {
  const [isActiveNav, setIsActiveNav] = useState(false);

  const showNavbar = (shouldShowNavBar) => {
    setIsActiveNav(shouldShowNavBar);
  };
  const [shouldShowEmailCta, setShouldShowEmailCta] = useState(false);

  return (
    <BaseTemplate
      metaTitle={'Adam J Peña - Innovating Front-End Development & UX/UI'}
      metaDescription={
        "I'm a Software Engineer from Chicago. I enjoy the beauty in simplicity. I take pleasure in streamlining a process to increase productivity and ensure a quality output."
      }
    >
      <div className={styles.index}>
        <Splash {...{ isActiveNav }}>
          <Nav
            isSticky={isActiveNav}
            isDark={!isActiveNav}
            revealAfterSplash
            {...{ setShouldShowEmailCta, shouldShowEmailCta, showNavbar }}
          />
        </Splash>
        <div className={styles.indexMain}>
          <About />
        </div>
      </div>
    </BaseTemplate>
  );
};

export default Index;
