import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/input";
import { Logo, SigninBackground } from "../assets";
import Button from "../components/button";
import "./styles.scss";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data", formData);
    navigate("/");
  };
  return (
    <div className="container">
      <div
        className="sign-in-bg"
        // style={{ backgroundImage: `url(${SigninBackground})` }}
      >
        <div style={{margin: "4rem 4rem"}}>
          <img src={Logo} alt="logo" />
        </div>
          <img src={SigninBackground} alt="background" className="bg_img" />
      </div>
      <div className="form_div">
        <h1 className="welcome_text">Welcome!</h1>
        <h2>Enter details to login.</h2>
        <form className="form" onSubmit={handleLogin}>
          <Input
            placeholder={"Email"}
            type={"text"}
            name={"email"}
            value={formData.email}
            required
            onChange={handleInputChange}
          />
          <Input
            placeholder={"Password"}
            type={"password"}
            name={"password"}
            value={formData.password}
            required
            onChange={handleInputChange}
            togglePassword={togglePasswordVisibility}
          />
          <div className="flex justify-between">
            <a
              href="#"
              className="forgot-password"
            >
              FORGOT PASSWORD?
            </a>
          </div>
          <Button
            title={`${loading ? "Loading..." : "LOGIN"}`}
            text={"white"}
            bg={"#39CDCC"}
            type={"submit"}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
