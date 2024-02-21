import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
  const [formdata, setFormdata] = useState({
    fname: " ",
    email: "",
    password: "",
    cpassword: ""
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    let isvalid = true;
    let validationErrors = {};

    if (formdata.fname.trim() === "") {
      isvalid = false;
      validationErrors.fname = "Name required";
    }
    if (formdata.email.trim() === "") {
      isvalid = false;
      validationErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
      isvalid = false;
      validationErrors.email = "Invalid email address";
    }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
  if (!passwordRegex.test(formdata.password)) {
    isvalid = false;
    validationErrors.password =
      "Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long";
  }

    if (formdata.cpassword !== formdata.password) {
      isvalid = false;
      validationErrors.cpassword = "Passwords do not match";
    }

    setErrors(validationErrors);
    setValid(isvalid);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post('http://localhost:3000/users', formdata)
        .then((result) => {
          alert("Registration successful");
          navigate('/login');
        })
        .catch((err) => console.log(err));
    }
  };
// Registration.js
return (
    <div className="flex h-screen bg-cyan-600">
      {/* Left Side (Registration Form) */}
      <div className="w-full flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Create a new account</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="fname"
                className={`mt-1 p-2 w-full border rounded-md ${errors.fname ? 'border-red-500' : ''}`}
                onChange={(event) => setFormdata({ ...formdata, fname: event.target.value })}
              />
              {errors.fname && <span className="text-sm text-red-600 block mt-1">{errors.fname}</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : ''}`}
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
                className={`mt-1 p-2 w-full border rounded-md ${errors.password ? 'border-red-500' : ''}`}
                onChange={(event) => setFormdata({ ...formdata, password: event.target.value })}
              />
              {errors.password && <span className="text-sm text-red-600 block mt-1">{errors.password}</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={`mt-1 p-2 w-full border rounded-md ${errors.cpassword ? 'border-red-500' : ''}`}
                onChange={(event) => setFormdata({ ...formdata, cpassword: event.target.value })}
              />
              {errors.cpassword && <span className="text-sm text-red-600 block mt-1">{errors.cpassword}</span>}
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    {/* Right Side */}
    <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('bg2.JPG')" }}>
      <div className="h-full flex flex-col items-center justify-center text-white">
        <h2 className="text-4xl font-bold mb-4 text-black">Already registered?</h2>
        <p className="text-lg text-center mb-8 text-black">Login to get started</p>
        <Link to="/login" className="bg-cyan-600 text-white px-6 py-3 rounded-full hover:bg-blue-600">
          Login
        </Link>
      </div>
    </div>
  </div>
);
        }
        export default SignupPage