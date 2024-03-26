import { useState } from "react";
import { InputField } from "./InputField";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { renderStrengthIndicators } from "../utils/IsValidPassword";

export const PasswordField = ({ type, value, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showStrengthIndicator, setShowStrengthIndicator] = useState(false);
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <InputField
        {...props}
        value={value}
        type={inputType}
        onFocus={() => setShowStrengthIndicator(true)}
        onBlur={() => setShowStrengthIndicator(false)}
      >
        <TogglePasswordVisibility
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      </InputField>
      {showStrengthIndicator && renderStrengthIndicators({ password: value })}
    </>
  );
};

PasswordField.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const TogglePasswordVisibility = ({
  showPassword,
  togglePasswordVisibility,
}) => {
  return (
    <button
      className="absolute right-2 top-1/2 -translate-y-1/2 text-xl text-textLighter"
      onClick={togglePasswordVisibility}
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  );
};

TogglePasswordVisibility.propTypes = {
  showPassword: PropTypes.bool.isRequired,
  togglePasswordVisibility: PropTypes.func.isRequired,
};
