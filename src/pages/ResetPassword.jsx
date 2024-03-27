import { useNavigate } from "react-router-dom";
import { ActionButton } from "../components/ActionButton";
import { InputField } from "../components/InputField";
import { LinkOutline } from "../components/LinkOutline";
import { Card } from "../layouts/Card";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { PasswordField } from "../components/PasswordField";
import { FaLock } from "react-icons/fa6";

export const ResetPassword = () => {
  const { auth, setAuth, setAlert } = useAuth();
  const [password, setPassword] = useState("");
  const [reTypedPassword, setReTypedPassword] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = () => {
    //check if password is valid and reTypedPassword is the same
    if (password !== reTypedPassword) {
      setAlert({
        visibility: true,
        type: "error",
        message: "Both passwords should match",
      });
      return;
    }
    // Handle password reset functionality here
    setAuth({ ...auth, password: password });
    // For example, you can redirect the user to the login page
    navigate("/");
    setAlert({
      visibility: true,
      type: "success",
      message: "Password reset successfully",
    });
  };

  return (
    <Card label="Reset Password">
      <p className="mb-4 text-gray-500">
        Enter new Password and reType it to continue
      </p>
      <PasswordField
        type="password"
        label="Password"
        icon={FaLock}
        placeholder="Enter new Password"
        tips="Password must be at least 8 characters"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <InputField
        type="password"
        label="Confirm Password"
        icon={FaLock}
        placeholder="Type the password again"
        tips="Both passwords should match"
        onChange={(e) => setReTypedPassword(e.target.value)}
        value={reTypedPassword}
      />
      <ActionButton onClick={handleResetPassword}>Reset Password</ActionButton>
      <div className="flex justify-end">
        <LinkOutline link=".." text="Cancel" />
      </div>
    </Card>
  );
};
