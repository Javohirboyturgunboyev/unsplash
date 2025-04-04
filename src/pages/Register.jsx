import { useState } from "react";
import axios from "axios";

const Register = ({ setIsRegister }) => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://api.escuelajs.co/api/v1/users/", {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        avatar: "https://i.pravatar.cc/150",
      });

      console.log("Registration response:", response.data);

      alert("Registration successful! Please login.");
      setIsRegister && setIsRegister(false); 
    } catch (error) {
      console.error("Registration error:", error.response || error);
      alert("Error: " + (error.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-semibold text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
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
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-green-500">
            Register
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Already have an account?
          <button
            onClick={() => setIsRegister && setIsRegister(false)}
            className="text-blue-500 ml-1"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;