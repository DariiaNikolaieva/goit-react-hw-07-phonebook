import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchContacts,
  deleteContact,
} from "../../redux/contacts/contacts-operations";
import {
  getIsLoading,
  getFilteredContacts,
} from "../../redux/contacts/contacts-selectors";

import styles from "./ContactList.module.css";

const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {contactList.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <p>{name}: </p>
          <p>{number}</p>
          <button
            type="button"
            className={styles.button}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func.isRequired,
};

// const filterContacts = (contacts, filter) => {
//   const nonormalizedFilter = filter.toLowerCase();
//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(nonormalizedFilter)
//   );
// };

const mapStateToProps = (state) => ({
  isLaodingContacts: getIsLoading(state),
  contactList: getFilteredContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
