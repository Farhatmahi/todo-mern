import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

const AddTask = () => {
  const [value, onChange] = useState(new Date());
  console.log(value);
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-10 lg:py-36">
        <div className="text-center lg:text-left flex flex-col justify-center">
          <h1 className="text-4xl lg:text-5xl">Organise your life by</h1>
          <h2 className="text-xl lg:text-3xl">Doing your task on time</h2>
          <div className="lg:hidden mt-4 items-center justify-center">
          <img
            src="https://i.ibb.co/D58LKPX/undraw-Add-tasks-re-s5yj.png"
            alt=""
          />
        </div>
          <form className="mt-10">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white"
              >
                Task
              </label>
              <input
                type="text"
                className="bg-gray-50 border w-full lg:w-1/2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                required
                placeholder="Do the chores"
              />
            </div>

            <div className="mb-6">
              <DateTimePicker
                className="bg-gray-50 border border-gray-300 text-left text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-1/2 p-2.5"
                onChange={onChange}
                value={value}
              />
            </div>
            <button
              type="submit"
              className="text-white text-xl bg-[#f9bb18] hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full px-5 mr-2 mb-2 py-2"
            >
              Add
            </button>
          </form>
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <img
            src="https://i.ibb.co/D58LKPX/undraw-Add-tasks-re-s5yj.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AddTask;
