import axios from "axios";
import contactsActions from "./contactsActions";

axios.defaults.baseURL = "http://localhost:2000";

const addContact = ({ name, number }) => (dispatch, getState) => {
  const contacts = getState().contacts.items;
  const contactNameExist = contacts.find((contact) => contact.name === name);

  dispatch(contactsActions.addContactRequest());

  if (contactNameExist) {
    dispatch(contactsActions.changeFlag());
    dispatch(contactsActions.addContactError());
    return;
  }
  axios
    .post("/contacts", { name, number })
    .then(({ data }) => {
      dispatch(contactsActions.addContactSuccess(data));
    })
    .catch((error) => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(contactsActions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
    .catch((error) => dispatch(contactsActions.deleteContactError(error)));
};

const contactsOperations = {
  addContact,
  fetchContacts,
  deleteContact,
};

export default contactsOperations;
