import React from "react";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contactsOperations";
import styles from "./ContactItem.module.css";
import contactsSelectors from "../../redux/contactsSelectors";

const ContactItem = ({ name, number, onItemDelete, value }) => {
  return (
    <li className={styles.listItem}>
      <p className={styles.p}>
        {name}
        <span>{number}</span>
      </p>
      {value === "" ? (
        <button
          type="button"
          className={styles.button}
          onClick={onItemDelete}
        ></button>
      ) : (
        <button type="button" className={styles.button} disabled></button>
      )}
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getFindItemById(state, ownProps.id);

  return {
    ...contact,
    value: contactsSelectors.getFilter(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onItemDelete: () => dispatch(contactsOperations.deleteContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
