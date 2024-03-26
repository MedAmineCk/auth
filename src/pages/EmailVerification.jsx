import { FaAt, FaEnvelope } from "react-icons/fa6";
import { ActionButton } from "../components/ActionButton";
import { InputField } from "../components/InputField";
import { Card } from "../layouts/Card";
import { useNavigate } from "react-router-dom";
import { LinkOutline } from "../components/LinkOutline";
import { useAuth } from "../context/AuthContext";

export const EmailVerification = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const handleEmailVerification = () => {
    // stock the email in context
    navigate("pin-verification/");
  };

  return (
    <Card label="Email Verification">
      <InputField
        type="email"
        label="Email"
        icon={FaAt}
        placeholder="Enter your email"
        tips="please check your email for verification code"
        value={auth.email}
        onChange={(e) => setAuth({ ...auth, email: e.target.value })}
      />
      <ActionButton onClick={handleEmailVerification}>
        Send code <FaEnvelope />
      </ActionButton>
      <div className="flex justify-end">
        <LinkOutline link=".." text="Back" />
      </div>
    </Card>
  );
};
