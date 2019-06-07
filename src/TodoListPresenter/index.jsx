import React from "react";
import { TodoListTable } from "./TodoListTable";
import { NewTodoForm } from "./NewTodoForm";
export default function TodoListPresenter({
  tasks,
  loading,
  addingCount,
  addTask,
  toggleTask,
  taskName,
  setTaskName,
  toggledIds
}) {
  return (
    <div className="container">
      <h1>
        Get It Done! <br />
        <small>For the truly industrious</small>
      </h1>
      <TodoListTable tasks={tasks} addingCount={addingCount} toggleTask={toggleTask} loading={loading} toggledIds={toggledIds}/>
      <hr />
      <NewTodoForm addTask={addTask} taskName={taskName} setTaskName={setTaskName}/>
    </div>
  );
}
