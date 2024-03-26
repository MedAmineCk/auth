import PropTypes from "prop-types";
import { FaCircleInfo } from "react-icons/fa6";

export const InputField = ({
  type,
  label,
  icon: Icon,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  tips,
  error,
  children,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={label} className="block font-medium text-gray-500">
        {label}
      </label>
      <div className="relative">
        <div
          className={`flex items-center mt-1 overflow-hidden w-full rounded-lg ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:shadow-lg ${
            error && "ring-red-500"
          }`}
        >
          <div className="min-w-10 flex-center text-gray-400 text-xl">
            {Icon && <Icon />}
          </div>
          <input
            type={type}
            id={label}
            className="w-full h-full py-4 pl-0 pr-4 outline-none"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>

        {children}
      </div>
      {tips && <InfoMessage text={tips} error={error} />}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  tips: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node,
};

const InfoMessage = ({ text, error }) => {
  return (
    <div
      className={`flex items-center gap-2 text-textLighter text-xs mt-1 ${
        error && "text-red-500"
      }`}
    >
      <FaCircleInfo />
      <p>{text}</p>
    </div>
  );
};

InfoMessage.propTypes = {
  text: PropTypes.string.isRequired,
  error: PropTypes.string,
};
