import { useEffect, useState } from "react";
import googleIcon from "../assets/google.svg";
import facebookIcon from "../assets/facebook.svg";
import { InputField } from "../components/InputField";
import { SignUpWith } from "../components/SignUpWith";
import { SwitchTab } from "../components/SwitchTab";
import { Checkbox } from "../components/Checkbox";
import { ActionButton } from "../components/ActionButton";
import { Link } from "react-router-dom";
import { Card } from "../layouts/Card";
import { useAuth } from "../context/AuthContext";
import { PasswordField } from "../components/PasswordField";
import { FaAt, FaLock } from "react-icons/fa6";

const Login = () => {
  const { auth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  useEffect(() => {
    auth.email && setEmail(auth.email);
    auth.password && setPassword(auth.password);
  }, [auth]);

  const handleLogin = () => {
    // Handle login functionality here
  };

  return (
    <Card label="Login">
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex h-8 items-center justify-between mb-4">
        <div className="flex items-center">
          <Checkbox
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <p className="text-gray-700 text-sm">Remember me</p>
        </div>
        <Link to="forgot-password" className="text-gray-400 underline text-sm">
          Forgot password?
        </Link>
      </div>

      <ActionButton onClick={handleLogin}>Login</ActionButton>

      <SwitchTab type="sign-up" link="sign-up" />

      <div className="mb-4 h-0.5 w-full bg-gray-100"></div>
      <div className="flex gap-2">
        <SignUpWith icon={googleIcon} text="Login with Google" />
        <SignUpWith icon={facebookIcon} text="Login with facebook" />
      </div>
    </Card>
  );
};

export default Login;
