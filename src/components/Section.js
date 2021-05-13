import React, { forwardRef } from "react";
import cx from "classnames";
import { Element } from "react-scroll";
import gridStyles from "../scss/grid.module.scss";
import styles from "./Section.module.scss";

const Section = forwardRef(({ name, children, classes = "" }, ref) => (
  <Element name={name}>
    <section
      id={name}
      className={cx(styles.section, gridStyles.flex, classes)}
      {...{ ref }}
    >
      {children}
    </section>
  </Element>
));

export default Section;
