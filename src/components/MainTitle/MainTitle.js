import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./MainTitle.module.css";
import appearStyles from "../Transitions/appear.module.css";
import PropTypes from "prop-types";

const MainTitle = ({ message, children }) => (
  <CSSTransition in={true} appear timeout={500} classNames={appearStyles}>
    <h1 className={styles.title}>
      {message}
      <span>{children}</span>
    </h1>
  </CSSTransition>
);

MainTitle.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MainTitle;
