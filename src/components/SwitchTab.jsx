import PropTypes from "prop-types";
import { LinkOutline } from "./LinkOutline";

export const SwitchTab = ({ type = "login", link }) => {
  const text =
    type === "login" ? "Already have an account?" : "Don't have an account?";
  return (
    <p className="mb-4 space-x-2 flex justify-end items-center">
      <span className="text-center text-sm text-gray-400">{text}</span>
      <LinkOutline link={link} text={type} />
    </p>
  );
};

SwitchTab.propTypes = {
  type: PropTypes.string,
  link: PropTypes.string.isRequired,
};
