import React from "react";
import cx from "classnames";
import styles from "./Link.module.scss";
import { Link as GatsbyLink } from "gatsby";
import { Link as RSLink } from "react-scroll";

const Link = ({ classes = "", scroll = false, ...restProps }) => {
  const className = cx(styles.link, classes);
  if (scroll) {
    return (
      <RSLink
        spy={true}
        smooth={true}
        duration={300}
        offset={-136}
        {...{ className }}
        {...restProps}
      />
    );
  }
  if (
    restProps.to ||
    (restProps.href?.indexOf("//") === -1 &&
      restProps.href?.indexOf("mailto:") === -1)
  ) {
    const to = restProps.to || restProps.href;
    return <GatsbyLink {...{ className, to }} {...restProps} />;
  }
  if (restProps.href) {
    return (
      <a {...{ className }} {...restProps}>
        {restProps.children || " "}
      </a>
    );
  }
  return <button type="button" {...{ className }} {...restProps} />;
};

export default Link;
