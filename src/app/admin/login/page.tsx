"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Lock } from "lucide-react";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const DEFAULT_USERNAME = "admin";
    const DEFAULT_PASSWORD = "password123";

    if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
      localStorage.setItem("isAuthenticated", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white/20">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-[350px] border border-white/20">
        <h2 className="text-2xl font-semibold text-center  mb-6">
          Admin Login
        </h2>
        {error && (
          <p className="text-red-400 text-sm mb-2 text-center">{error}</p>
        )}
        <form onSubmit={handleLogin} className="space-y-8">
          <div className="relative" style={{ padding: "10px" }}>
            <User
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70"
              size={20}
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ padding: "10px" }}
              className="w-full p-3 pl-10 bg-white/20  rounded-xl border border-white/30 outline-none"
              required
            />
          </div>
          <div className="relative" style={{ padding: "10px" }}>
            <Lock
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70"
              size={20}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              style={{ padding: "10px" }}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pl-10 bg-white/20  rounded-xl border border-white/30 outline-none"
              required
            />
          </div>
          <button
            type="submit"
            style={{ padding: "10px", marginTop: "10px" }}
            className="w-full bg-white text-indigo-600 font-semibold p-3 rounded-xl hover:bg-indigo-100 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
