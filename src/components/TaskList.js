import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteHandle}) {

  const items = tasks.map((task, i) => {
    return <Task key={i} text={task.text} category={task.category} idTask={i} onDeleteHandle={onDeleteHandle}/>;
  });

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {items}
    </div>
  );
}

export default TaskList;