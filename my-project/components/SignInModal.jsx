// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import { X, Mail, Lock } from 'lucide-react';
// import SignUpForm from './SignUpForm'; // Import the SignUpForm component
// import axios from "axios"

// const SignInModal = ({ isOpen, onClose }) => {
//   const url = "http://localhost:4000/api/user/login";
//   const [data, setData] = useState({
//     email: "",
//     password: ""
//   });

//   const onChangeHandler = (event) => {
//     const { name, value } = event.target;
//     setData(prevData => ({ ...prevData, [name]: value }));
//   };
//   const [googleErrorMessage, setGoogleErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState(""); // New state for errors
//   const [isSignIn, setIsSignIn] = useState(true);
//   const [emailPlaceholder, setEmailPlaceholder] = useState('you@example.com');
//   const [passwordPlaceholder, setPasswordPlaceholder] = useState('••••••••');

//   const onGoogleLogin = () => {
//     setGoogleErrorMessage("This service is not available.");
//     setTimeout(() => setGoogleErrorMessage(""), 10000); // Hide message after 5 sec
//   };
  

//   if (!isOpen) return null;

//   const handleOutsideClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(url, data);
//       if (response.data.success) {
//         setSuccessMessage("Login Successful! Redirecting...");
//         localStorage.setItem('token', response.data.token);
//         setTimeout(() => {
//           setSuccessMessage("");
//           onClose(false);
//         }, 3000);
//       } else {
//         setErrorMessage(response.data.message);
//         setTimeout(() => setErrorMessage(""), 5000);
//       }
//     } catch (error) {
//       console.error("Login failed:", error.response ? error.response.data : error.message);
//       setErrorMessage("Invalid credentials! Please try again.");
//       setTimeout(() => setErrorMessage(""),10000);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
//       onClick={handleOutsideClick}>
//       <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
//         <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
//           <X className="h-5 w-5" />
//         </button>

//         {isSignIn ? (
//           <>
//             <div className="pt-8 px-8">
//               <div className="flex items-center justify-center mb-4">
//                 <span className="ml-2 text-xl font-bold">Fresh & Fit</span>
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign In</h2>
//             </div>

//             <div className="px-8 pb-8">
//               {successMessage && <p className="text-center text-blue-600 bg-blue-100 p-2 rounded-md mb-4">{successMessage}</p>}
//               {errorMessage && <p className="text-center text-red-600 bg-blue-100 p-2 rounded-md mb-4">{errorMessage}</p>}

//               <form onSubmit={onLogin} className="space-y-4">
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                     Email address
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Mail className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       onChange={onChangeHandler}
//                       value={data.email}
//                       className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm py-2 pr-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                       placeholder={emailPlaceholder}
//                       onFocus={() => setEmailPlaceholder('')}
//                       onBlur={() => setEmailPlaceholder('you@example.com')}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Lock className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                       type="password"
//                       id="password"
//                       name="password"
//                       onChange={onChangeHandler}
//                       value={data.password}
//                       className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm py-2 pr-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                       placeholder={passwordPlaceholder}
//                       onFocus={() => setPasswordPlaceholder('')}
//                       onBlur={() => setPasswordPlaceholder('••••••••')}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
//                 >
//                   Sign In
//                 </button>

//                 <p className="text-center text-gray-600 text-sm mt-4">
//                   Don't have an account?{' '}
//                   <button
//                     type="button"
//                     onClick={() => setIsSignIn(false)}
//                     className="text-emerald-600 hover:text-emerald-500 font-medium"
//                   >
//                     Sign Up
//                   </button>
//                 </p>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-2 bg-white text-gray-500">Or continue with</span>
//                 </div>

//                 <button
                  
//                   type="button"
//                   onClick={onGoogleLogin}
//                   className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
//                 >
//                   <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
//                   Google
//                 </button>

//                 {googleErrorMessage && (
//                     <div className="bg-blue-500 text-white text-sm text-center py-2 rounded-md mt-2">
//                         {googleErrorMessage}
//                           </div>
//                       )}

//               </form>
//             </div>
//           </>
//         ) : (
//           <SignUpForm onSignInClick={() => setIsSignIn(true)} />
//         )}
//       </div>
//     </div>
//   );
// };

// SignInModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

// export default SignInModal;

//extra code for checking
// import { useState } from 'react';
// import { X, Mail, Lock } from 'lucide-react';
// import axios from 'axios';
// import toast from 'react-hot-toast';

// const SignInModal = ({ isOpen, onClose, onLoginSuccess }) => {
//   const [emailPlaceholder, setEmailPlaceholder] = useState('you@example.com');
//   const [passwordPlaceholder, setPasswordPlaceholder] = useState('••••••••');
//   const [isLoading, setIsLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   if (!isOpen) return null;

//   const handleOutsideClick = (e) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };
//   const API_BACK="http://localhost:4000/api/user/login";
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await axios.post(API_BACK, formData);
      
//       if (response.data.verified) {
//         toast.success('Successfully logged in!');
//         onLoginSuccess(response.data.username);
//         onClose(); // Close the modal after successful login
//       } else {
//         toast.error('User not verified. Please verify your email.');
//       }
//     } catch (error) {
//       console.error('Login error:', error); // Add this for debugging
//       if (error.response?.data?.message) {
//         toast.error(error.response.data.message);
//       } else if (error.message === 'Network Error') {
//         toast.error('Unable to connect to the server. Please check if the server is running.');
//       } else {
//         toast.error('Failed to sign in. Please try again.');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
//       onClick={handleOutsideClick}
//     >
//       <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative" onClick={(e) => e.stopPropagation()}>
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
//         >
//           <X className="h-5 w-5" />
//         </button>

//         <div className="pt-8 px-8">
//           <div className="flex items-center justify-center mb-4">
//             <span className="ml-2 text-xl font-bold">Fresh & Fit</span>
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign In</h2>
//         </div>
//         <div className="px-8 pb-8">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                 Email address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm py-2 pr-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                   placeholder={emailPlaceholder}
//                   onFocus={() => setEmailPlaceholder('')}
//                   onBlur={() => setEmailPlaceholder('you@example.com')}
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm py-2 pr-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
//                   placeholder={passwordPlaceholder}
//                   onFocus={() => setPasswordPlaceholder('')}
//                   onBlur={() => setPasswordPlaceholder('••••••••')}
//                   required
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isLoading ? 'Signing in...' : 'Sign In'}
//             </button>

//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">Or continue with</span>
//             </div>

//             <button
//               type="button"
//               className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
//             >
//               <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
//               Google
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInModal;


//code given by bolt.new for account
import { useState } from 'react';
import PropTypes from 'prop-types';
import { X, Mail, Lock } from 'lucide-react';
import SignUpForm from './SignUpForm';
import axios from "axios"

const SignInModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const url = "http://localhost:4000/api/user/login";
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };
  const [googleErrorMessage, setGoogleErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  const [emailPlaceholder, setEmailPlaceholder] = useState('you@example.com');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('••••••••');

  const onGoogleLogin = () => {
    setGoogleErrorMessage("This service is not available.");
    setTimeout(() => setGoogleErrorMessage(""), 10000);
  };

  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const onLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(url, data);
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        setSuccessMessage("Login Successfull!");
        setTimeout(()=> setSuccessMessage(""),10000);
        onLoginSuccess(); // Call the success callback
        setTimeout(() => {
          setSuccessMessage("");
          onClose();
        }, 1500);
      } else {
        setErrorMessage(response.data.message);
        setTimeout(() => setErrorMessage(""), 5000);
      }
    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data : error.message);
      setErrorMessage("Invalid credentials! Please try again.");
      setTimeout(() => setErrorMessage(""), 10000);
    }
  };

  return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={handleOutsideClick}>
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
            <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
              <X className="h-5 w-5" />
            </button>
    
            {isSignIn ? (
              <>
                <div className="pt-8 px-8">
                  <div className="flex items-center justify-center mb-4">
                    <span className="ml-2 text-xl font-bold">Fresh & Fit</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign In</h2>
                </div>
    
                <div className="px-8 pb-8">
                  {successMessage && <p className="text-center text-blue-600 bg-blue-100 p-2 rounded-md mb-4">{successMessage}</p>}
                  {errorMessage && <p className="text-center text-red-600 bg-blue-100 p-2 rounded-md mb-4">{errorMessage}</p>}
    
                  <form onSubmit={onLogin} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          onChange={onChangeHandler}
                          value={data.email}
                          className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm py-2 pr-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder={emailPlaceholder}
                          onFocus={() => setEmailPlaceholder('')}
                          onBlur={() => setEmailPlaceholder('you@example.com')}
                          required
                        />
                      </div>
                    </div>
    
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
                          required
                        />
                      </div>
                    </div>
    
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    >
                      Sign In
                    </button>
    
                    <p className="text-center text-gray-600 text-sm mt-4">
                      Donot have an account?{' '}
                      <button
                        type="button"
                        onClick={() => setIsSignIn(false)}
                        className="text-emerald-600 hover:text-emerald-500 font-medium"
                      >
                        Sign Up
                      </button>
                    </p>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
    
                    <button
                      
                      type="button"
                      onClick={onGoogleLogin}
                      className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                    >
                      <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
                      Google
                    </button>
    
                    {googleErrorMessage && (
                        <div className="bg-blue-500 text-white text-sm text-center py-2 rounded-md mt-2">
                            {googleErrorMessage}
                              </div>
                          )}
    
                  </form>
                </div>
              </>
            ) : (
              <SignUpForm onSignInClick={() => setIsSignIn(true)} />
            )}
          </div>
        </div>
      );
    };
    
    SignInModal.propTypes = {
      isOpen: PropTypes.bool.isRequired,
      onClose: PropTypes.func.isRequired,
    };
  // Rest of the component remains the same...
  // (Keep all the existing JSX and other code)


export default SignInModal