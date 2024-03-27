import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ email: "", password: "" });
  const [alert, setAlert] = useState({
    visibility: false,
    type: "",
    message: "",
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth, alert, setAlert }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
