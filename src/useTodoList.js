import {useState, useEffect} from 'react';

export default function makeTodoListHook(apiCalls) {

  // ,--.      |             |   |          |    
  // |   |,---.|--- ,---.    |---|,---.,---.|__/ 
  // |   |,---||    ,---|    |   ||   ||   ||  \ 
  // `--' `---^`---'`---^    `   '`---'`---'`   `

   function useTodoData(){
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      apiCalls.getTasks()
        .then(setTasks)
        .then(() => setLoading(false));
    }, []);

    async function addTask(taskName){
      const newTask = await apiCalls.addTask(taskName);
      setTasks(tasks => [...tasks, newTask]);
      return newTask;
  }

    async function toggleTask(taskId){
      const toggledTask = await apiCalls.toggleTask(taskId);
      setTasks(tasks => tasks.map(task => task.id === taskId ? toggledTask : task));
      return toggledTask;
    }

    return {
      tasks, loading, addTask, toggleTask
    };
  }

  // ,---.     |    |              |         
  // `---..   .|---.|---.,---.,---.|__/ ,---.
  //     ||   ||   ||   ||   ||   ||  \ `---.
  // `---'`---'`---'`   '`---'`---'`   ``---'


  //                     ___         
  //   /\  _| _|. _  _    | _  _| _  
  //  /--\(_|(_||| )(_)   |(_)(_|(_) 
  //                _/                
  function useAdding({dhAddTask}){
    const [addingCount, setAddingCount] = useState(0);
    async function addTask(taskName) {
      setAddingCount(addingCount => addingCount + 1);
      await dhAddTask(taskName)
      setAddingCount(addingCount => addingCount - 1);
    }
    return {
      addingCount, addTask
    }
  }

  // ___                  ___         
  //  | _  _  _ |. _  _    | _  _| _  
  //  |(_)(_)(_)||| )(_)   |(_)(_|(_) 
  //      _/ _/      _/               
  function useToggle({dhToggleTask}){
    const [toggledIds, setToggledIds] = useState([]);

    async function toggleTask(taskId){
      if(toggledIds.includes(taskId)) return;

      setToggledIds(ti => [...ti, taskId]);
      await dhToggleTask(taskId)
      setToggledIds(toggledIds => toggledIds.filter(ti => ti !== taskId));
    }
    return {
      toggledIds, toggleTask
    }
  }

            
  // ,---.o         ,---.              |   |          |    
  // |---..,---.    |---|,---.,---.    |---|,---.,---.|__/ 
  // |   |||   |    |   ||   ||   |    |   ||   ||   ||  \ 
  // `---'``---|    `   '|---'|---'    `   '`---'`---'`   `
  //       `---'         |    |                            
  
  function useTodoList() {
    const {
      tasks, loading, 
      addTask: dhAddTask, 
      toggleTask: dhToggleTask
    } = useTodoData();

    return { 
      tasks, 
      loading,
      ...useToggle({dhToggleTask}),
      ...useAdding({dhAddTask})
    };
  }
  return useTodoList;
}
