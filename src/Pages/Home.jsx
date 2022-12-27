import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center pt-10 lg:py-36 container mx-auto px-4 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="flex items-center">
          <img
            src="https://i.ibb.co/WGk7Bw1/undraw-To-do-list-re-9nt7.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold">Omnifocus To do</h1>
          <p className="text-2xl my-10">
            To do gives you focus, from work to play.
          </p>
          <Link to="/register">
            <button className="text-white text-xl bg-[#f9bb18] hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full px-5 mr-2 mb-2 py-2">
              Get Started
            </button>
          </Link>
        </div>
        <div className="lg:flex items-center hidden ">
          <img
            src="https://i.ibb.co/WFH1XNZ/undraw-Accept-request-re-d81h.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

// https://i.ibb.co/WFH1XNZ/undraw-Accept-request-re-d81h.png
// https://i.ibb.co/WGk7Bw1/undraw-To-do-list-re-9nt7.png
