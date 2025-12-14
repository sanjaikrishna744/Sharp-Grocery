// import React from 'react'

// const Login = () => {
//   return (
//     <div>
//       Loginadvad
//     </div>
//   )
// }

// export default Login

import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      // Store email
    localStorage.setItem("userEmail", email);
      toast.success("Login Success")
      navigate("/");
    } catch (err) {
      toast.success("Login Failed. Check credentials.");
    }
  };

  const handleLogout = async (e) => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("userEmail");
      toast.success("Logged out succesfully");
      navigate("/");
    } catch (error) {
      toast.error("Login first")
    }
  }


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <label className="block mb-3 font-semibold">Email</label>
        <input
          type="email"
          className="w-full p-3 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mt-4 mb-3 font-semibold">Password</label>
        <input
          type="password"
          className="w-full p-3 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Login
        </button>


        <button
          onClick={handleLogout}
          className="w-full mt-6 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>



        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}

