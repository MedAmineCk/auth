import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./auth/SignUp.jsx";
import Login from "./auth/Login.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import { EmailVerification } from "./pages/EmailVerification.jsx";
import { PinVerification } from "./pages/PinVerification.jsx";
import { ResetPassword } from "./pages/ResetPassword.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forgot-password">
            <Route index element={<EmailVerification />} />
            <Route path="pin-verification">
              <Route index element={<PinVerification />} />
              <Route path="reset-password" element={<ResetPassword />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
