import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [categoryName, setCategoryName] = useState("All");
  const [taskName, setTaskName] = useState("");

  function handleTask(event) {
    setTaskName(event.target.value);
  }

  function handleCategory(event) {
    setCategoryName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit(newTask);
  }

  const newTask = {
    text: taskName,
    category: categoryName
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTask}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory}>
          {categories.map((category, i) => {
            return <option key={i} value={category}>{category}</option>;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
