import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../store/useAuth";

export default function Login() {
  const { login, error, setError } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    login(email, password);
  };

  return (
    <div className="border dark:border-gray-700 rounded-lg w-full md:w-1/2 lg:w-2/5">
      <div className="p-4">
        <div className="text-center py-4 mb-4">
          <h3 className="text-xl font-semibold dark:text-gray-100 uppercase">
            Log in
          </h3>
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <form className="space-y-6 px-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm text-gray-700 dark:text-gray-400">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
              className="block w-full rounded px-3 py-2 dark:text-gray-100 dark:bg-gray-800 outline-none border border-gray-300 dark:border-gray-700 shadow-sm ring-2 ring-transparent focus:ring-indigo-500 focus:border-indigo-500"
              value={form.email}
              onChange={handleChange}
              required
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
              className="block w-full rounded px-3 py-2 dark:text-gray-100 dark:bg-gray-800 outline-none border border-gray-300 dark:border-gray-700 shadow-sm ring-2 ring-transparent focus:ring-indigo-500 focus:border-indigo-500"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 dark:text-gray-400 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-400">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="flex items-center justify-end mt-4">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm uppercase font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
          </div>
          <p className="text-sm text-center text-gray-700 dark:text-gray-400">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

