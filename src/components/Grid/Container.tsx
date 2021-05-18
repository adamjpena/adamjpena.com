import React, { FC } from "react";
import cx from "classnames";
import styles from "./Container.module.scss";

interface Props {
  children: React.ReactNode;
  classes?: string;
  full?: boolean;
}

const Container: FC<Props> = ({ children, classes = "", full = false }) => {
  return (
    <div className={cx(classes, styles.container, { [styles.full]: full })}>
      {children}
    </div>
  );
};

export default Container;
