import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contacts/addRequest");
const addContactSuccess = createAction("contacts/addSuccess");
const addContactError = createAction("contacts/addError");

const fetchContactsRequest = createAction("contacts/fetchRequest");
const fetchContactsSuccess = createAction("contacts/fetchSuccess");
const fetchContactsError = createAction("contacts/fetchError");

const deleteContactRequest = createAction("contacts/deleteRequest");
const deleteContactSuccess = createAction("contacts/deleteSuccess");
const deleteContactError = createAction("contacts/deleteError");

const changeFilter = createAction("contacts/change");
const changeFlag = createAction("contacts/change_flag");

const contactsActions = {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
  changeFlag,
};

export default contactsActions;
