import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true;
    let validationErrors = {};

    if (formdata.email.trim() === "") {
      isvalid = false;
      validationErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      isvalid = false;
      validationErrors.email = "Invalid email address";
    }
    if (formdata.password.trim() === "") {
      isvalid = false;
      validationErrors.password = "Password required";
    } else if (formdata.password.length < 8) {
      isvalid = false;
      validationErrors.password = "Password length should be at least 8 characters";
    }

    axios
      .get('http://localhost:3000/users', formdata)
      .then((result) => {
        result.data.map((user) => {
          if (user.email === formdata.email) {
            if (user.password === formdata.password) {
              alert("Login successful");
              
              navigate('/');
            } else {
              isvalid = false;
              validationErrors.password = "Wrong Password";
            }
          }
        });
        setErrors(validationErrors);
        setValid(isvalid);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex h-screen bg-cyan-600">
      {/* Left Side */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('bg1.JPG')" }}>
        <div className="h-full flex flex-col items-center justify-center text-white">
          <h2 className="text-4xl font-bold mb-4 text-black">New here?</h2>
          <p className="text-lg text-center mb-[5px] text-black">Sign up with us to get started</p>
          <Link to="/registration" className="bg-cyan-600 text-white px-6 py-3 rounded-full hover:bg-blue-600">Sign Up</Link>
        </div>
      </div>

       {/* Right Side (Login Form) */}
       <div className="w-1/2 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                onChange={(event) => setFormdata({ ...formdata, email: event.target.value })}
              />
              {errors.email && <span className="text-sm text-red-600 block mt-1">{errors.email}</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
                onChange={(event) => setFormdata({ ...formdata, password: event.target.value })}
              />
              {errors.password && <span className="text-sm text-red-600 block mt-1">{errors.password}</span>}
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
