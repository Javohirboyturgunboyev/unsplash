import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaKey, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { auth, googleProvider, signInWithPopup, createUserWithEmailAndPassword } from "../firebase/firebaseConfig";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Parollar mos kelmadi!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login"); // Muvaffaqiyatli ro'yxatdan o'tsa, login sahifasiga o'tkazamiz
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/login"); // Google orqali kirsayam login sahifasiga yo'naltiramiz
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <form className="flex" onSubmit={handleRegister}>
        <div className="w-[40%] bg-[url('https://picsum.photos/800/1200')] bg-cover bg-center"></div>
        <div className="flex min-h-screen w-[60%] flex-col items-center gap-3 justify-center p-5">
          <h1 className="mb-5 text-center text-3xl font-medium">Register</h1>

          <label className="input-bordered input flex w-96 items-center gap-2">
            <input
              type="text"
              className="grow rounded-md border p-2"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className="h-5 w-5 text-gray-500" />
          </label>

          <label className="input-bordered input flex w-96 items-center gap-2">
            <input
              type="email"
              className="grow rounded-md border p-2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MdEmail className="h-5 w-5 text-gray-500" />
          </label>

          <label className="input-bordered input flex w-96 items-center gap-2">
            <input
              type="password"
              className="grow rounded-md border p-2"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaKey className="h-5 w-5 text-gray-500" />
          </label>

          <label className="input-bordered input flex w-96 items-center gap-2">
            <input
              type="password"
              className="grow rounded-md border p-2"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <FaKey className="h-5 w-5 text-gray-500" />
          </label>

          <div className="mx-auto my-4 flex w-96 flex-col gap-2">
            <button
              type="submit"
              className="btn btn-primary mx-auto w-64 rounded-md border-0 bg-blue-500 py-2 text-white hover:bg-blue-600"
            >
              Register
            </button>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn btn-secondary mx-auto flex w-64 items-center justify-center gap-2 rounded-md border-0 bg-gray-600 py-2 text-white hover:bg-gray-700"
            >
              Google <FcGoogle className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="btn btn-outline mx-auto w-64 rounded-md border border-blue-500 py-2 text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
