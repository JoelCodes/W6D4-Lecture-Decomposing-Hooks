import React, {useState} from 'react';

export function NewTodoForm({ addTask}) {
  const [taskName, setTaskName] = useState("");
  function submit(){
    if(!taskName) return;
    addTask(taskName);
    setTaskName("");
  }
  return (
    <React.Fragment>
      <input name="taskName" type="text" placeholder="Write Task Name" value={taskName} onChange={({target:{value}}) => {setTaskName(value);}}/>&nbsp;
      <button disabled={!taskName} onClick={submit} type="submit">Add</button>
    </React.Fragment>
  );
}
