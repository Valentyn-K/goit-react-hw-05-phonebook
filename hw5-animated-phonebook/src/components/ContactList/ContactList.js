import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import translate from "../../styles/translate.module.css";

const ContactList = ({ contacts = [], onDeleteContact }) =>
  contacts.length > 0 && (
    <TransitionGroup component="ul" className={styles.contactList}>
      {contacts.map((contact) => (
        <CSSTransition
          key={contact.id}
          timeout={250}
          unmountOnExit
          classNames={translate}
        >
          <li className={styles.contactListItem}>
            <Contact
              {...contact}
              onDeleteContact={() => onDeleteContact(contact.id)}
            />
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
