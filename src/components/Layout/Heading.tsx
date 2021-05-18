import React, { FC } from "react";
import cx from "classnames";

import styles from "./Heading.module.scss";

interface Props {
  children: React.ReactNode;
  classes?: string;
  level?: number;
  strong?: boolean;
  stronger?: boolean;
}

const Heading: FC<Props> = ({
  children = null,
  classes = "",
  level = 1,
  strong = false,
  stronger = false,
  ...restProps
}) => {
  const HeadingTag = `h${level}`;
  return (
    <HeadingTag
      className={cx(classes, styles[HeadingTag], {
        [styles.strong]: strong,
        [styles.stronger]: stronger,
      })}
      {...restProps}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;
