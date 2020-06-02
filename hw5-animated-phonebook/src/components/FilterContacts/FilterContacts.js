import React from "react";
import PropTypes from "prop-types";
import styles from "./FilterContacts.module.css";

const FilterContact = ({
  contacts = [],
  value = "",
  onSetFilter = function () {
    alert("Sorry, the filter is updating now. Try to use it later");
  },
}) => (
  <>
    <input
      className={styles.filterInput}
      type="text"
      value={value}
      onChange={onSetFilter}
      placeholder="Enter the name or the number to find contact"
    />
  </>
);

export default FilterContact;

FilterContact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onSetFilter: PropTypes.func.isRequired,
};
