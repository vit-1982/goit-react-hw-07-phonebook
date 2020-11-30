import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
import contactsActions from "./contactsActions";

const createId = () => Date.now();

axios.defaults.baseURL =
  "https://my-json-server.typicode.com/vit-1982/goit-react-hw-07-phonebook";

const addContact = ({ name, number }) => (dispatch, getState) => {
  const contacts = getState().contacts.items;
  const contactNameExist = contacts.find((contact) => contact.name === name);
  // const id = uuidv4();
  const id = createId();

  dispatch(contactsActions.addContactRequest());

  if (contactNameExist) {
    dispatch(contactsActions.changeFlag());
    dispatch(contactsActions.addContactError());
    return;
  }
  axios
    .post("/contacts", { name, number, id })
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

  // dispatch(contactsActions.deleteContactSuccess(id));
  // dispatch(contactsActions.deleteContactError());
  console.log(id);
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
