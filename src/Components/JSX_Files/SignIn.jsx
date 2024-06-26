import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../userContext";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const { setUserData } = useUser();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      setUserData(data.user);
      navigate("/userProfile");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="SignUpPage">
        <div className="form-container">
          <h1 className="signup_h1">Sign In</h1>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />

            <label htmlFor="Sign In" className="signin">
              Not have an account. <Link to="/SignUp">Sign Up</Link>
            </label>

            <input type="submit" className="submit" value="Sign In" />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
