import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";

const Register = () => {
  const { user, createUser, googleSignIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
    });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success(`Welcome ${user.displayName}`)
      })
      .catch((err) => {});
  };
  return (
    <div className="mt-16 lg:mt-24">
      <h1 className="text-5xl font-bold mb-10">Register</h1>
      <div className="flex justify-center">
        <div className="w-96 p-10 lg:shadow-lg lg:rounded-xl">
          <form onSubmit={handleSubmit} className="">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white"
              >
                Your name
              </label>
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@email.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm  text-left font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex flex-col justify-around gap-4">
              <button
                type="submit"
                className="text-white text-xl bg-[#f9bb18] hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
              <button
                onClick={handleGoogle}
                className="text-white text-xl bg-[#f9bb18] hover:bg-yellow-400 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Continue with <FcGoogle className="inline ml-2" />
              </button>
            </div>
          </form>

          <div className="mt-6">
            <label className="block mb-2 text-sm  text-center font-medium text-gray-900 ">
              Already have an account ?{"  "}
              <Link to="/login" className="font-bold hover:underline">
                Login now!
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
