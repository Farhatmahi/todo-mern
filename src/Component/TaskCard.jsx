import React from "react";
import { toast } from "react-hot-toast";

const TaskCard = ({ taskItem, index, refetch }) => {
  const { _id, task, time } = taskItem;

  const completedData = {
    completed: true,
  };

  const handleCompleteStatus = (id) => {
    fetch(`http://localhost:1000/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(completedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Marked as completed");
        refetch();
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:1000/task/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => {
      console.log(data);
      toast.success("Task deleted");
      refetch();
    });
  };

  return (
    <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-10">
      <div className="flex flex-col lg:flex-row gap-2 justify-between items-center">
        <div className="">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {index}. {task}
          </h5>
        </div>
        <div className="flex justify-around">
          <h1 className="mr-4">{time.split(" ")[0]}</h1>
          <h1>
            {time.split(" ")[1]} {time.split(" ")[2]}
          </h1>
        </div>
        <div className="">
          <button className="text-white text-md bg-[#f9bb18] hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full px-5 mr-2 mb-2 py-2">
            Update
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="text-white text-md bg-[#f9bb18] hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full px-5 mr-2 mb-2 py-2"
          >
            Delete
          </button>
          <button
            onClick={() => handleCompleteStatus(_id)}
            className="text-white text-md bg-[#f9bb18] hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full px-5 mr-2 mb-2 py-2"
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
