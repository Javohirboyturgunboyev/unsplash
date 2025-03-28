import { useState } from "react";
import axios from "axios";

const Login = ({ setIsRegister }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", formData);
      console.log("Login response:", response.data); 

      if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);
        alert("Login successful!");
      } else {
        alert("Error: Invalid login response!");
      }
    } catch (error) {
      console.error("Login error:", error.response || error);
      alert("Error: " + (error.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Don’t have an account?
          <button
            onClick={() => setIsRegister && setIsRegister(true)}
            className="text-blue-500 ml-1"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
