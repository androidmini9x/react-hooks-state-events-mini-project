import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [selectedFilterCategory, setFilterCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  function changeCategory(category) {
    setFilterCategory(category);
  }

  function addNewTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function delNewTask(newTask) {
    let newTasks = tasks.filter((task, id) => id !== newTask);
    setTasks(newTasks);
  }

  const tasksItem = tasks.filter((task) => {
    if (selectedFilterCategory === "All") {
      return true;
    } else {
      return task.category === selectedFilterCategory;
    }
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={selectedFilterCategory} categories={CATEGORIES} onChangeCategory={changeCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addNewTask}/>
      <TaskList tasks={tasksItem} onDeleteHandle={delNewTask}/>
    </div>
  );
}

export default App;