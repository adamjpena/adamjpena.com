import React, { createElement, useEffect } from 'react';
import marksy from 'marksy';
import { Heading } from 'components/Layout';
import { Link } from 'components/helpers';
import { TableOfContents } from 'components/Blog';
import { scrollSpy } from 'react-scroll';

import styles from './Body.module.scss';

// Markdown helper function
const getMarkup = ({ body }) => {
  if (!body) return null;
  const compile = marksy({
    createElement,
    elements: {
      a({ children, href }) {
        return <Link {...{ href }}>{children}</Link>;
      },
      h1({ id, children }) {
        return <Heading {...{ id }}>{children}</Heading>;
      },
      h2({ id, children }) {
        return (
          <Heading {...{ id }} level={2}>
            {children}
          </Heading>
        );
      },
      h4({ id, children }) {
        return (
          <Heading {...{ id }} level={4}>
            {children}
          </Heading>
        );
      },
    },
  });
  return compile(body).tree;
};

const Body = ({ body }) => {
  const content = getMarkup({ body }) || [];
  const headings = content.filter(({ props }) => props.id);

  useEffect(() => {
    scrollSpy.update();
  });

  return (
    <div className={styles.bodyGrid}>
      {headings.length > 0 && <TableOfContents {...{ headings }} />}
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default Body;
