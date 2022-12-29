import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ColorRing } from "react-loader-spinner";
import TaskCard from "../Component/TaskCard";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const MyTasks = () => {
  const { user } = useContext(AuthContext);
  const [allTasks, setAllTasks] = useState([]);
  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await fetch("http://localhost:1000/task");
      const data = await res.json();
      return data;
    },
  });

  useEffect(() => {
    const taskFilteredByUser = tasks.filter(
      (task) => task.email === user?.email
    );
    setAllTasks(taskFilteredByUser);
    refetch();
  }, [tasks, user.email, refetch]);

  if (isLoading) {
    <div className="flex justify-center items-center py-20">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>;
  }

  return (
    <div className="py-20 container mx-auto px-4 lg:px-0">
      <h1 className="text-5xl mb-10">Here's all of your tasks</h1>
      <div className="grid grid-cols-1">
        {allTasks.map((taskItem, index) => (
          <TaskCard key={taskItem._id} taskItem={taskItem} index={index + 1} refetch={refetch}  />
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
