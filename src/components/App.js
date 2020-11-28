import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import contactsOperations from "../redux/contactsOperations";
import Layout from "./Layout/Layout";
import Spinner from "./Spinner/Spinner";
import MainTitle from "./MainTitle/MainTitle";
import Phonebook from "./Phonebook/Phonebook";
import Note from "./Note/Note";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";
import scaleStyles from "./Transitions/scale.module.css";
import noteAppearStyles from "./Transitions/noteAppear.module.css";
import contactsActions from "../redux/contactsActions";
import contactsSelectors from "../redux/contactsSelectors";

class App extends React.Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const {
      contacts,
      contactInList,
      isLoadingContacts,
      changeFlag,
    } = this.props;

    if (contactInList) {
      setTimeout(() => changeFlag(), 2000);
    }
    return (
      <Layout>
        {isLoadingContacts && <Spinner />}

        <MainTitle message="Phonebook">
          <CSSTransition
            in={contactInList}
            appear
            timeout={250}
            classNames={noteAppearStyles}
            unmountOnExit
          >
            <Note message="Contact already exist!" />
          </CSSTransition>
        </MainTitle>

        <Phonebook />

        <CSSTransition
          in={contacts.length > 1}
          classNames={scaleStyles}
          timeout={250}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        <Contacts />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
  contactInList: contactsSelectors.getContactInList(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  changeFlag: contactsActions.changeFlag,
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
