import React from "react";
import "./styles.scss";

interface Props {
  placeholder: string;
  type: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  text?: string;
  togglePassword?: () => void;
}

function Input(props: Props) {
  return (
    <div className="inputBox">
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        disabled={props.disabled}
        className="input_div"
      />
      <label>{props.placeholder}</label>
      {props.togglePassword && (
        <span className="toggle-password" onClick={props.togglePassword}>
          {props.type === "password" ? "SHOW" : "HIDE"}
        </span>
      )}
    </div>
  );
}

export default Input;
