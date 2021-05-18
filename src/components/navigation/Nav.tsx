import React, { useEffect } from 'react';
import { throttle } from 'lodash';
import cx from 'classnames';
import gridStyles from 'scss/grid.module.scss';
import styles from './Nav.module.scss';
import { Grid, Cell } from 'components/Grid';
import Image from 'components/Layout/Image';
import { Link } from 'gatsby';
import { ContactButton } from 'components/Buttons';
import { gatingData } from 'store/gating';

import nLogo from 'assets/images/n-logo.png';

const Nav = ({
  showNavbar = (x) => undefined,
  isDark = false,
  isActive = false,
  isHidden = false,
  isSticky = false,
  revealAfterSplash = false,
  setShouldShowEmailCta,
  shouldShowEmailCta = false,
}) => {
  const handleScroll = throttle(() => {
    const revealHeight = revealAfterSplash ? window.innerHeight + 88 : 300;
    showNavbar(window.scrollY >= revealHeight);
  }, 33);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <nav
      className={cx(styles.nav, gridStyles.hidePrint, {
        [styles.active]: isActive,
        [styles.dark]: isDark,
        [styles.hidden]: isHidden,
        [styles.sticky]: isSticky,
      })}
    >
      <div className={styles.body}>
        <Grid columns={12}>
          <Cell width={12}>
            <div className={styles.navLinks}>
              <div className={cx(styles.navItem, styles.navLogoLink)}>
                <Link to='/'>
                  <Image src={nLogo} alt='Adam J Peña Logo' />
                </Link>
              </div>
              {gatingData.shouldShowBlog && (
                <Link className={styles.navLink} to='/blog/'>
                  Blog
                </Link>
              )}
              <Link className={styles.navLink} to='/resume/'>
                Resume
              </Link>
              <div className={cx(styles.navItem, styles.navItemEnd)}>
                <ContactButton
                  {...{ setShouldShowEmailCta, shouldShowEmailCta }}
                >
                  Contact
                </ContactButton>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    </nav>
  );
};

export default Nav;
