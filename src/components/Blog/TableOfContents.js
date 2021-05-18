import React, { useRef, useEffect, useState } from 'react';
import { throttle } from 'lodash';
import cx from 'classnames';
import { Heading } from 'components/Layout';
import { Link } from 'components/helpers';
import { scroller } from 'react-scroll';

import { breakpoints } from 'lib/constants';

import styles from './TableOfContents.module.scss';

const marginHeight = 16;
const navHeight = 88;
const stickyHeight = 48;
const liHeight = 54;

const tocLinkOffset = ({ isSticky, headingsCount, isMobile }) => {
  const desktopOffset = -navHeight - marginHeight;
  const stickyOffset = desktopOffset - stickyHeight;
  const mobileStaticOffset =
    stickyOffset - stickyHeight - liHeight * headingsCount - marginHeight;
  if (!isMobile) {
    return desktopOffset;
  }
  if (isSticky) {
    return stickyOffset;
  }
  return mobileStaticOffset;
};

const TableOfContents = ({ headings }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [recentActiveLink, setRecentActiveLink] = useState(
    headings[0]?.props.id,
  );
  const [offset, setOffset] = useState(0);

  const container = useRef(null);
  const toggleRef = useRef(null);

  const toggleTableOfContents = ({ id }) => {
    if (id) {
      setRecentActiveLink(id);
    }

    setIsOpen(!isOpen);
    handleWindowEvents();
  };

  const handleWindowEvents = () => {
    const isMobile = window.innerWidth < breakpoints.xl;
    const { top } = container.current?.getBoundingClientRect();
    setOffset(
      tocLinkOffset({ isSticky, headingsCount: headings.length, isMobile }),
    );

    if (isMobile) {
      setIsSticky(window.scrollY >= 300);
    } else {
      setIsSticky(top <= navHeight * 2 + marginHeight);
    }
    const activeLink = scroller.getActiveLink();
    if (activeLink) {
      setRecentActiveLink(activeLink);
    }
  };

  useEffect(() => {
    handleWindowEvents();

    const throttleEvent = throttle(() => {
      handleWindowEvents();
    }, 33);
    window.addEventListener('scroll', throttleEvent);

    return () => {
      window.removeEventListener('scroll', throttleEvent);
    };
  });

  return (
    <div ref={container}>
      <input
        className={styles.toggle}
        hidden
        id='toc'
        name='toc'
        ref={toggleRef}
        type='checkbox'
        checked={isOpen}
        onChange={toggleTableOfContents}
      />
      <div
        className={cx(styles.tableOfContents, {
          [styles.tableOfContentsSticky]: isSticky,
        })}
      >
        <label className={styles.label} htmlFor='toc'>
          <Heading level={3} className={styles.labelText}>
            <span>TABLE OF CONTENTS</span>
            <i className={cx(styles.arrow, 'fa', 'fa-chevron-right')} />
          </Heading>
        </label>
        <hr className={styles.hr} />
        <ul className={styles.ul}>
          {headings.map(({ props }, i) => {
            return (
              <li
                className={cx(styles.li, {
                  [styles.liActive]: props.id === recentActiveLink,
                })}
                key={`toc-item-${i}`}
              >
                <Link
                  classes={styles.link}
                  scroll
                  {...{ offset }}
                  to={props.id}
                  href={`#${props.id}`}
                  onClick={() => toggleTableOfContents({ id: props.id })}
                >
                  {props.children[0]}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContents;
