import PropTypes from "prop-types";

export const SignUpWith = ({ icon, text }) => {
  return (
    <button className="flex w-full items-center justify-center rounded border border-gray-300 bg-white px-4 py-2 font-bold text-gray-600 focus:outline-none">
      <img src={icon} alt={`${text} Logo`} className="h-8 w-8 object-contain" />
      <span>{text}</span>
    </button>
  );
};

SignUpWith.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
