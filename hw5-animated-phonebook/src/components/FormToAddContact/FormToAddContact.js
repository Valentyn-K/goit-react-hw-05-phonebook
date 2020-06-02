import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./FormToAddContact.module.css";
import TelInput from "../TelInput/TelInput";
import { Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import Notification from "../Notification/Notification";
import { CSSTransition } from "react-transition-group";
import transitionToBottom from "../../styles/transitionToBottom.module.css";

export default class FormToAddContact extends Component {
  static defaultProps = {
    initialValue: "",
  };

  static propTypes = {
    initialValue: PropTypes.string,
  };

  state = {
    name: this.props.initialValue,
    number: this.props.initialValue,
  };

  handleInput = (e) => this.setState({ [e.target.name]: e.target.value });

  resetState = () =>
    this.setState({
      name: "",
      number: "",
    });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddContact({ ...this.state });
    if (!this.props.isNameNotifShow || !this.props.isNumNotifShow) {
      this.resetState();
    }
  };

  handleCloseForm = (e) => {
    this.props.onCloseForm();
  };

  render() {
    const { name, number } = this.state;
    return (
      <section className={styles.formWrapper}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <ClearIcon
            className={styles.closeFormButton}
            onClick={this.handleCloseForm}
          />

          <label className={styles.inputLabel}>Name</label>
          <div className={styles.nameInputWrapper}>
            <input
              className={styles.input}
              name="name"
              type="text"
              value={name}
              onChange={this.handleInput}
              required
            />
            <CSSTransition
              in={this.props.isNameNotifShow}
              timeout={1000}
              unmountOnExit
              classNames={transitionToBottom}
            >
              <Notification
                text={`Contact with this name has been already saved in your phonebook!!!`}
              />
            </CSSTransition>
          </div>
          <label className={styles.inputLabel}>Number</label>

          <div className={styles.numInputWrapper}>
            <TelInput
              onChange={this.handleInput}
              name="number"
              value={number}
              mask="+99(999)-999-99-99"
              isRequired={true}
              placeholder="+XX(XXX)-XXX-XX-XX"
            />

            <CSSTransition
              in={this.props.isNumNotifShow}
              timeout={1000}
              unmountOnExit
              classNames={transitionToBottom}
            >
              {/* {this.props.isNumNotifShow && ( */}
              <Notification
                text={`This number has been already saved earlier !!!`}
              />
              {/* )} */}
            </CSSTransition>
          </div>
          <br />

          <Button
            variant="outlined"
            color="secondary"
            className={styles.submitButton}
            type="submit"
          >
            Add contact
          </Button>
        </form>
      </section>
    );
  }
}
