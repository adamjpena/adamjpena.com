import React from "react";
import cx from "classnames";
import styles from "./Heading.module.scss";

const Heading = ({ level = 1, classes = "", children }) => {
  const HeadingTag = `h${level}`;
  return (
    <HeadingTag className={cx(classes, styles[HeadingTag])}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
