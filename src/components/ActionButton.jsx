import PropTypes from "prop-types";

export const ActionButton = ({ onClick, children }) => {
  return (
    <button
      className="mb-4 w-full rounded-xl bg-blue-700 px-4 py-4 text-white focus:bg-blue-600 focus:outline-none flex justify-center items-center gap-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

ActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
