import React, { createElement, useEffect } from 'react';
import marksy from 'marksy';
import { Heading } from 'components/Layout';
import { Link } from 'components/helpers';
import { PostMeta, TableOfContents } from 'components/Blog';
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

const Body = ({ body, title, slug }) => {
  const wordCount = body.replace(/[^\w ]/g, '').split(/\s+/).length;
  const readingTime = Math.floor(wordCount / 228) + 1;
  const content = getMarkup({ body }) || [];
  const headings = content.filter(({ props }) => props.id);

  useEffect(() => {
    scrollSpy.update();
  });

  return (
    <div className={styles.bodyGrid}>
      {headings.length > 0 && <TableOfContents {...{ headings }} />}
      <div className={styles.content}>
        <PostMeta {...{ readingTime, slug, title }} />
        {content}
      </div>
    </div>
  );
};

export default Body;
