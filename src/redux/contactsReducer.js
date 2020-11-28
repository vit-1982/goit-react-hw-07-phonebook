import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const onAddContact = (state, action) => [action.payload, ...state];

const onDeleteContact = (state, action) =>
  state.filter(({ id }) => id !== action.payload);

const onChangeFlag = (state, action) => !state;

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
  [contactsActions.addContactSuccess]: onAddContact,
  [contactsActions.deleteContactSuccess]: onDeleteContact,
});

const contactInList = createReducer(false, {
  [contactsActions.changeFlag]: onChangeFlag,
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, action) => action.payload,
});

const loading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactError]: () => false,
  [contactsActions.addContactRequest]: () => true,
  [contactsActions.addContactSuccess]: () => false,
  [contactsActions.addContactError]: () => false,
  [contactsActions.deleteContactRequest]: () => true,
  [contactsActions.deleteContactSuccess]: () => false,
  [contactsActions.deleteContactError]: () => false,
});

export default combineReducers({
  items,
  contactInList,
  loading,
  filter,
});
