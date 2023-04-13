import "./App.css";
import { useCallback } from "react";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import { StytchProvider } from "@stytch/react";
import { StytchHeadlessClient } from "@stytch/vanilla-js/headless";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ResetPassword } from "./Pages/ResetPassword";

function App() {
  const stytchClient = new StytchHeadlessClient(
    "public-token-test-ba0e72a3-5df1-4d32-97b0-ff1321c0d934"
  );

  const logout = useCallback(() => {
    stytchClient.session.revoke();
  }, [stytchClient]);

  return (
    <div className="App">
      <Router>
        <Link to="/signup"> SignUp</Link>
        <Link to="/auth"> Login</Link>
        <StytchProvider stytch={stytchClient}>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/resetpassword/*" element={<ResetPassword />} />
          </Routes>
          <button onClick={logout}>Logout</button>
        </StytchProvider>
      </Router>
    </div>
  );
}

export default App;

// "public-token-test-ba0e72a3-5df1-4d32-97b0-ff1321c0d934"