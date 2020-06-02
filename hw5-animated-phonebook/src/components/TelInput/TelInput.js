import React from "react";
import InputMask from "react-input-mask";
import styles from "./TelInput.module.css";

const TelInput = ({ isRequired, name, value, onChange, mask, placeholder }) => (
  <InputMask
    className={styles.inputMask}
    mask={mask}
    name={name}
    value={value}
    onChange={onChange}
    required={isRequired}
    placeholder={placeholder}
  ></InputMask>
);

export default TelInput;
