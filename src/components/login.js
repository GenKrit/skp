import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "tw-elements-react/dist/css/tw-elements-react.min.css"; // Keeping your original import
import { Data } from './Context/Index';

function Login() {
  const history = useNavigate();
  const { login } = useContext(Data);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // --- LOGIC (UNCHANGED) ---
  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(process.env.REACT_APP_API, {
        email,
        password,
      });

      if (response.data.status === "success") {
        const da = response.data;
        login(da);
        history("/home");
      } else if (response.data.message === "Incorrect password") {
        alert("Password wrong");
      } else if (response.data.message === "User does not exist") {
        alert("User does not exist");
      }
    } catch (error) {
      alert("Wrong details");
      console.error(error);
    }
  }

  // --- STYLES FOR ANIMATIONS (NO LIBRARIES NEEDED) ---
  const customStyles = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
      100% { transform: translateY(0px); }
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-float {
      animation: float 4s ease-in-out infinite;
    }
    .animate-fade-in {
      animation: fadeIn 0.8s ease-out forwards;
    }
  `;

  return (
    <section className="h-screen w-full relative overflow-hidden flex items-center justify-center bg-gray-100">
      <style>{customStyles}</style>
      
      {/* 1. Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 opacity-90"></div>
      
      {/* Decorative Circles (Pure CSS Effects) */}
      <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-30 animate-float"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-60 h-60 bg-pink-400 rounded-full mix-blend-overlay filter blur-xl opacity-30 animate-float" style={{animationDelay: "2s"}}></div>

      {/* 2. Main Card Container */}
      <div className="container px-4 mx-auto relative z-10 animate-fade-in">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-4xl bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden flex flex-wrap lg:flex-nowrap">
            
            {/* Left Side: Image with Floating Animation */}
            <div className="w-full lg:w-6/12 p-10 hidden lg:flex items-center justify-center bg-indigo-50 relative">
              <div className="animate-float">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full drop-shadow-xl"
                  alt="Login illustration"
                />
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full lg:w-6/12 p-8 md:p-12">
              <form>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
                  <p className="text-gray-500 mt-2">Please login to your account</p>
                </div>

                {/* Email Input */}
                <div className="relative mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password Input */}
                <div className="relative mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Remember Me & Checkbox */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
                    />
                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900 cursor-pointer">
                      Remember me
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center lg:text-left">
                  <button
                    type="button"
                    onClick={submit}
                    className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform transition-all duration-200 active:scale-95"
                  >
                    Login
                  </button>

                  <p className="mb-0 mt-4 text-center text-sm font-semibold text-gray-600">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-indigo-600 hover:text-indigo-800 transition duration-200"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
