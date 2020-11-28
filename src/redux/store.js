import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsReducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
