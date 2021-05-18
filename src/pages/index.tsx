import React, { FC, useState } from 'react';
import Helmet from 'react-helmet';
import Splash from 'components/Splash';
import About from 'components/About';
import { Nav } from 'components/navigation';
import styles from 'scss/index.module.scss';
import { BaseTemplate } from 'templates';

const Index: FC = () => {
  const [isActive, setIsActive] = useState(false);

  const showNavbar = (shouldShowNavBar) => {
    setIsActive(shouldShowNavBar);
  };
  console.log(process.env.NODE_ENV);
  const [shouldShowEmailCta, setShouldShowEmailCta] = useState(false);

  return (
    <BaseTemplate
      metaTitle={'Adam J Peña - Innovating Front-End Development & UX/UI'}
      metaDescription={
        "I'm a Software Engineer from Chicago. I enjoy the beauty in simplicity. I take pleasure in streamlining a process to increase productivity and ensure a quality output."
      }
    >
      <div className={styles.index}>
        <Splash>
          <Nav
            isSticky={isActive}
            isDark={!isActive}
            revealAfterSplash
            {...{ setShouldShowEmailCta, shouldShowEmailCta, showNavbar }}
          />
        </Splash>
        <About />
      </div>
    </BaseTemplate>
  );
};

export default Index;
