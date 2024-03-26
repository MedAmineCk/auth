import { useState } from "react";
import PropTypes from "prop-types";
import { FaCircleInfo, FaEye, FaEyeSlash } from "react-icons/fa6";

export const InputField = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  tips,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <label htmlFor={label} className="block font-medium text-gray-500">
        {label}
      </label>
      <div className="relative">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          id={label}
          className="mt-1 block w-full rounded-lg ring-1 ring-gray-300 p-4 outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-lg"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {type === "password" && (
          <TogglePasswordVisibility
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
          />
        )}
      </div>
      {tips && <InfoMessage text={tips} />}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  tips: PropTypes.string,
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

const InfoMessage = ({ text }) => {
  return (
    <div className="flex items-center gap-2 text-textLighter text-xs mt-1">
      <FaCircleInfo />
      <p>{text}</p>
    </div>
  );
};

InfoMessage.propTypes = {
  text: PropTypes.string.isRequired,
};
