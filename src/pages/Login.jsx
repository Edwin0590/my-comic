import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate("/");
    } else {
      setError("Username atau password salah");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-2xl mb-2">K</div>
          <h2 className="text-2xl font-bold text-gray-800">Login Admin</h2>
          <p className="text-gray-500 text-sm">Masuk untuk mengelola komik</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase mb-1 ml-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase mb-1 ml-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 text-xs p-3 rounded-lg border border-red-100 animate-pulse">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all active:scale-95"
          >
            Masuk Sekarang
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            Login demo: <span className="font-mono font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">admin / admin</span>
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 text-xs text-gray-400 hover:text-blue-500 transition-colors"
          >
            ← Kembali ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
}
