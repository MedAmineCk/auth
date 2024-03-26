import PropTypes from "prop-types";
export const Card = ({ label, children }) => {
  return (
    <div className="container mx-auto mt-10 max-w-md rounded-2xl bg-white p-4">
      <h1 className="mb-4 text-2xl font-bold">{label}</h1>
      <div className="mb-4 h-0.5 w-full bg-gray-100"></div>
      {children}
    </div>
  );
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
