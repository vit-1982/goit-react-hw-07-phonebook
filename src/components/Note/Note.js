import React from "react";
import PropTypes from "prop-types";
import styles from "./Note.module.css";

const Note = ({ message }) => <div className={styles.box}>{message}</div>;

Note.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Note;
