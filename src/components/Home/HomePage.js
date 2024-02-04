import React, { useEffect } from "react";
import "./home.css";
import Wave from "react-wavify";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import HeaderPage from "../NavBar/Header";

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <>
      <HeaderPage />
      <div className="home">
        <div className="content">
          <h1>Welcome</h1>
          
          <div className="container mt-5" >
          <h1>User Authentication Best Practices</h1>

          <section className="mt-5">
            <h2>1. Login: The Gateway to Personalized Experiences</h2>

            <h3>a. Secure Authentication</h3>
            <p>
              When designing a login system, security should be a top priority.
              Implement secure authentication mechanisms, such as password
              hashing and salting, to protect user credentials. Additionally,
              consider incorporating multi-factor authentication (MFA) for an
              extra layer of security.
            </p>

            <h3>b. User-Friendly Interface</h3>
            <p>
              Create an intuitive and user-friendly login interface. Utilize
              clear and concise form designs, and implement error handling to
              guide users in case of login failures. Providing social login
              options can also enhance the user experience, allowing individuals
              to sign in using their existing accounts on platforms like Google
              or Facebook.
            </p>

            <h3>c. Remember Me and Session Management</h3>
            <p>
              Include a "Remember Me" option to allow users the convenience of
              staying logged in across sessions. However, prioritize secure
              session management to prevent unauthorized access. Implement
              session timeout features and regularly update authentication
              tokens for added security.
            </p>
          </section>

          <section className="mt-5">
            <h2>2. Signup: Onboarding Users with a Positive Experience</h2>

            <h3>a. Simplified Registration Forms</h3>
            <p>
              Design registration forms with simplicity in mind. Request only
              essential information during the signup process to reduce friction
              and increase conversion rates. Consider utilizing progressive
              disclosure techniques to gather additional details after the
              initial signup.
            </p>

            <h3>b. Email Verification</h3>
            <p>
              Incorporate email verification as a part of the signup process to
              ensure the validity of user accounts. This step not only confirms
              the user's identity but also helps in building a clean and
              reliable user database.
            </p>

            <h3>c. Password Strength Indicators</h3>
            <p>
              Guide users in creating strong and secure passwords by including
              password strength indicators. Displaying the strength of the
              entered password encourages users to adopt better security
              practices, contributing to a safer authentication environment.
            </p>
          </section>

          <section className="mt-5">
            <h2>3. Forget Password: Recovering Access with Ease</h2>

            <h3>a. Password Recovery Methods</h3>
            <p>
              Provide multiple options for password recovery, such as email
              verification, security questions, or SMS authentication. Ensure
              that the chosen methods are secure and align with users'
              preferences. Allow users to set up these recovery options during
              the initial signup or later through their account settings.
            </p>

            <h3>b. User-Friendly Recovery Process</h3>
            <p>
              Design a straightforward and user-friendly forget password flow.
              Clearly guide users through the steps of recovering their account,
              and use simple language in communication to avoid confusion.
              Incorporate CAPTCHA or other anti-bot measures to enhance
              security.
            </p>

            <h3>c. Account Lockout Policies</h3>
            <p>
              Implement account lockout policies to prevent brute-force attacks
              on user accounts. Temporary account lockouts or additional
              security measures after multiple failed login attempts help
              safeguard user accounts from unauthorized access.
            </p>
          </section>
        </div>
          <Button className="btn" onClick={() => navigate("/login")}>
            Start Here
          </Button>
        </div>
        
      </div>
    </>
  );
};

export default HomePage;
