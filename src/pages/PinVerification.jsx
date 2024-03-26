import { useNavigate } from "react-router-dom";
import { Card } from "../layouts/Card";
import { useState } from "react";
import { ActionButton } from "../components/ActionButton";
import { LinkOutline } from "../components/LinkOutline";
import PropTypes from "prop-types";
import { useAuth } from "../context/AuthContext";

export const PinVerification = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [pin, setPin] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
  });
  const handlePinVerification = () => {
    // Handle Pin verification functionality here
    navigate("reset-password");
  };
  return (
    <Card label="Pin Verification">
      <p className="mb-4 text-gray-500 ">
        Type the 4 digit code sent to your email {auth.email}
      </p>
      <div className="flex gap-8 my-8 justify-center">
        <InputDigit
          value={pin["1"]}
          onChange={(e) => setPin({ ...pin, 1: e.target.value })}
        />
        <InputDigit
          value={pin["2"]}
          onChange={(e) => setPin({ ...pin, 2: e.target.value })}
        />
        <InputDigit
          value={pin["3"]}
          onChange={(e) => setPin({ ...pin, 3: e.target.value })}
        />
        <InputDigit
          value={pin["4"]}
          onChange={(e) => setPin({ ...pin, 4: e.target.value })}
        />
      </div>
      <ActionButton onClick={handlePinVerification}>Verify</ActionButton>
      <div className="flex justify-end">
        <LinkOutline link=".." text="Back" />
      </div>
    </Card>
  );
};

const InputDigit = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="size-12 rounded-lg ring-2 ring-gray-300 outline-none text-center focus:ring-4 focus:ring-blue-600"
      value={value}
      onChange={onChange}
    />
  );
};

InputDigit.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
