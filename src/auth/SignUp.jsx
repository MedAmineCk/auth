import { useState } from "react";
import googleIcon from "../assets/google.svg";
import facebookIcon from "../assets/facebook.svg";
import { InputField } from "../components/InputField";
import { SignUpWith } from "../components/SignUpWith";
import { SwitchTab } from "../components/SwitchTab";
import { ActionButton } from "../components/ActionButton";
import { Card } from "../layouts/Card";
import { PasswordField } from "../components/PasswordField";
import { FaAt, FaLock, FaUser } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [error, setError] = useState(null);
  const { setAlert } = useAuth();

  const handleSignUp = () => {
    // Handle SignUp functionality here
    if (password === repeatedPassword) {
      setError("");
    } else {
      setError("Both passwords must match");
      setAlert({
        visibility: true,
        type: "error",
        message: "Both passwords must match",
      });
    }
  };

  return (
    <Card label="Sign Up">
      <InputField
        type="text"
        label="Full Name"
        icon={FaUser}
        placeholder="Enter your full name"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
      />
      <InputField
        type="email"
        label="Email"
        icon={FaAt}
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordField
        type="password"
        label="Password"
        icon={FaLock}
        placeholder="Enter your password"
        tips="Password must be at least 8 characters"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <InputField
        type="password"
        label="Repeat password"
        icon={FaLock}
        placeholder="Repeat your password"
        tips="Both passwords must match"
        value={repeatedPassword}
        error={error}
        onChange={(e) => setRepeatedPassword(e.target.value)}
      />

      <ActionButton onClick={handleSignUp}>Sign up</ActionButton>

      <SwitchTab link=".." />
      <div className="mb-4 h-0.5 w-full bg-gray-100"></div>
      <div className="flex gap-2">
        <SignUpWith icon={googleIcon} text="Sign up with Google" />
        <SignUpWith icon={facebookIcon} text="Sign up with facebook" />
      </div>
    </Card>
  );
};

export default SignUp;
