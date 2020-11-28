import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.items;

const getContactInList = (state) => state.contacts.contactInList;

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((listItem) =>
      listItem.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const getFindItemById = createSelector(
  [(state, contactId) => contactId, getContacts],
  (contactId, contacts) => contacts.find((item) => item.id === contactId)
);

const contactsSelectors = {
  getContacts,
  getContactInList,
  getLoading,
  getFilteredContacts,
  getFindItemById,
  getFilter,
};

export default contactsSelectors;
