import { useState } from 'react';
import PropTypes from 'prop-types';
import { Mail, Lock, User } from 'lucide-react';
import axios from "axios"

// SignUp Component
const SignUpForm = ({ onSignInClick }) => {

  const url="http://localhost:4000/api/user/signup";
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(url, data);
      if (response.data.success) {
        setSuccessMessage("SignUp Successful! You can now login."); // Set success message
        localStorage.setItem('token', response.data.token);
        setTimeout(() => setSuccessMessage(""), 5000); // Clear message after 5 seconds
      } else {
        setSuccessMessage(response.data.message); // Handle failure message
      }
    } catch (error) {
      console.error("SignUp failed:", error.response ? error.response.data : error.message);
      setSuccessMessage("SignUp Failed. Please try again.");
    }
  };

  const [namePlaceholder, setNamePlaceholder] = useState('John Doe');
  const [emailPlaceholder, setEmailPlaceholder] = useState('you@example.com');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('••••••••');

  return (
    <>
      <div className="pt-8 px-8">
        <div className="flex items-center justify-center mb-4">
          <span className="ml-2 text-xl font-bold">Fresh & Fit</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">SignUp for free!</h2>
        <p className="text-center text-gray-600 text-sm mb-6">
          Already registered?{' '}
          <button
            onClick={onSignInClick}
            className="text-emerald-600 hover:text-emerald-500 font-medium"
          >
            Sign In Now
          </button>
        </p>
      </div>

      {/* Display success or error message */}
      {successMessage && (
        <div className="text-center text-blue-600 bg-blue-100 p-2 rounded-md mb-4">
          {successMessage}
        </div>
      )}

      <div className="px-8 pb-8">
        <form onSubmit={onSignUp} className="space-y-4">
          {/* Name input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                onChange={onChangeHandler}
                value={data.name}
                className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm py-2 pr-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder={namePlaceholder}
                onFocus={() => setNamePlaceholder('')}
                onBlur={() => setNamePlaceholder(' John Doe')}
              />
            </div>
          </div>

          {/* Email input */}
          <div>
            <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="signup-email"
                name="email"
                onChange={onChangeHandler}
                value={data.email}
                className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm py-2 pr-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder={emailPlaceholder}
                onFocus={() => setEmailPlaceholder('')}
                onBlur={() => setEmailPlaceholder('you@example.com')}
              />
            </div>
          </div>

          {/* Password input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                onChange={onChangeHandler}
                value={data.password}
                className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm py-2 pr-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder={passwordPlaceholder}
                onFocus={() => setPasswordPlaceholder('')}
                onBlur={() => setPasswordPlaceholder('••••••••')}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="privacy-policy"
              type="checkbox"
              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
            />
            <label htmlFor="privacy-policy" className="ml-2 block text-sm text-gray-700">
              I agree to the{' '}
              <a href="#" className="text-emerald-600 hover:text-emerald-500">
                Privacy and policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Register
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
            Google
          </button>
        </form>
      </div>
    </>
  );
};

SignUpForm.propTypes = {
  onSignInClick: PropTypes.func.isRequired,
};

export default SignUpForm;
