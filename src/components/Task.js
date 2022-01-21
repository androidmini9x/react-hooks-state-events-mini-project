import React from "react";

function Task({text, category, idTask, onDeleteHandle}) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onDeleteHandle(idTask)}>X</button>
    </div>
  );
}

export default Task;