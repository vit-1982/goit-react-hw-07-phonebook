import React from "react";
import { connect } from "react-redux";
import contactsActions from "../../redux/contactsActions";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";
import contactsSelectors from "../../redux/contactsSelectors";

const Filter = ({ value, onChangeFilter }) => (
  <div className={styles.box}>
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
        className={styles.input}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func,
};

const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
