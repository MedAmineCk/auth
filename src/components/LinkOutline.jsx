import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const LinkOutline = ({ link, text }) => {
  return (
    <Link
      to={link}
      className="flex items-center gap-2 text-blue-700 border-2 border-blue-700 rounded-md px-4 py-2 font-bold hover:bg-blue-700 hover:text-white"
    >
      {text}
      <FaArrowRightLong />
    </Link>
  );
};

LinkOutline.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
