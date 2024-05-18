import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../store/useAuth";

export default function Register() {

  const {register, error} = useAuth();
  const [form,setForm] = useState({
    username:"",
    email:"",
    password:"",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();

    const {email,password,username} = form;

    if (!email || !password || !username) {
      setError("Please fill in all fields");
      return;
    }

    register(username, email, password);
  };

  return (
      <div className="border dark:border-gray-700 rounded-lg w-full h-fit  md:w-1/2 lg:w-2/5">
      <div className="p-4">
        <div className="text-center py-2 mb-2">
          <h3 className="text-xl font-semibold dark:text-gray-100">Register</h3>
        </div>
        <form className="space-y-6 px-4" onSubmit={handleSubmit}>
        {error && <div className="text-red-500 text-center">{error}</div>}

          <div className="space-y-2">

            <label htmlFor="username" className="block text-sm text-gray-700 dark:text-gray-400">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              id="username"
              className="block w-full rounded px-3 py-2 dark:text-gray-100 dark:bg-slate-800 outline-none border border-gray-300 dark:border-gray-700 shadow-sm ring-2 ring-transparent focus:ring-indigo-500 focus:border-indigo-500"
              value={form.username}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm text-gray-700 dark:text-gray-400">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
              className="block w-full rounded px-3 py-2 dark:text-gray-100 dark:bg-slate-800 outline-none border border-gray-300 dark:border-gray-700 shadow-sm ring-2 ring-transparent focus:ring-indigo-500 focus:border-indigo-500"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm text-gray-700 dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              className="block w-full rounded px-3 py-2 dark:text-gray-100 dark:bg-slate-800 outline-none border border-gray-300 dark:border-gray-700 shadow-sm ring-2 ring-transparent focus:ring-indigo-500 focus:border-indigo-500"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm uppercase font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
        
        <p className="text-sm text-center py-4 text-gray-700 dark:text-gray-400">
            Already have an account?{" "}
            <Link to={"/login"} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300">
              Login
            </Link>
          </p>
      </div>
    </div>
    
  );
}

