import "./App.css";
import LoginPage from "./components/Auth/LoginPage";
import SignupPage from "./components/Auth/SignupPage";
import Dashboard from "./components/Dashboard/Dashboard";
import HomePage from "./components/Home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ForgotPassword from "./components/Auth/ForgotPassword";
import UserProfile from "./components/Auth/UserProfile";

import ResetPassword from "./components/Auth/ResetPassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Authentication Routes  */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/reset-password/:id" element={<ResetPassword />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userprofile" element={<UserProfile />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
