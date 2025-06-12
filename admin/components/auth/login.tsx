"use client";

import useAdmin from "@/hooks/use-admin";
import { useState } from "react";

const Login = () => {
  const admin = useAdmin()
  const [key, setKey] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(process.env.NEXT_PUBLIC_SECRET_KEY === key){
      admin.changeKey(key)
      admin.loginHandler()
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl w-[90%] max-w-md">
        <h2 className="text-xl font-bold text-center mb-4 text-slate-900 dark:text-white">
          Maxsus kalit so&apos;tzni kiriting
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Maxsus key..."
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Tasdiqlash
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
