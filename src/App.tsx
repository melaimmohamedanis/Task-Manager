import { useState } from "react"
import AddTask from "./components/AddTask"
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import { TaskState } from "./state/task/taskSlice";
function App() {
  const [showAddTask,SetShowAddTask]=useState(false)
  const handleButtonClick = () => {
    SetShowAddTask(!showAddTask);
  };
  
  const {tasks}:{ tasks: TaskState[] }= useSelector<RootState>((state) => state.tasks) as { tasks: TaskState[] }; 
 console.log(tasks)
  return (
 <div>
  <button onClick={()=>{
    SetShowAddTask(true)
  }}
  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
  >Add Task</button>
 
 <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      
      {tasks.length > 0 ?( 
       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
               <tr>
                   <th scope="col" className="px-6 py-3">
                       Task name
                   </th>
                   <th scope="col" className="px-6 py-3">
                      Task description
                   </th>
                   <th scope="col" className="px-6 py-3">
                   Task type
                   </th>
                   <th scope="col" className="px-6 py-3">
                   Task  status
                   </th>
                   <th scope="col" className="px-6 py-3">
                   Task progressing
                   </th>
                   <th scope="col" className="px-6 py-3">
                   Task starting date
                   </th>
                   <th scope="col" className="px-6 py-3">
                       Action
                   </th>
               </tr>
           </thead>
           <tbody>
           {tasks.map((task) => (
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {task.title}
                </th>
                <td className="px-6 py-4">
                {task.description}
                </td>
                <td className="px-6 py-4">
                {task.taskType}
                </td>
                <td className="px-6 py-4">
                {task.status}
                </td>
                <td className="px-6 py-4">
                {task.progressing}
                </td>
                <td className="px-6 py-4">
                {task.startingDate.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>  ))}
            </tbody>
       </table>):( <p> no task found</p>)   }
       </div>
          
      
       
      
          
            
            <AddTask isVisible={showAddTask} onButtonClick={handleButtonClick}/>

 </div> )
}

export default App

/*

//////

 <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option >Select category</option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="GA">Gaming/Console</option>
                      <option value="PH">Phones</option>
                  </select>
              


///////
  <div className=' w-full h-screen flex justify-center items-center text-red-900 ' >
   
   
      

<form className="w-96">
  <div className="mb-5 ">
    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add task Title</label>
    <input type="email" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="task title" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add task Description</label>
    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
   </div>
  <div className="mb-5 flex justify-between flex-row">
  <div className="flex justify-between flex-col">
  <label htmlFor="tasktype" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select TaskType</label>
  
  <select id="tasktype" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

  <option>United States</option>
    <option>Canada</option>
    <option>France</option>
    <option>Germany</option>
   </select>
   </div>
   <div className="flex justify-between flex-col ">  
    <label htmlFor="tasktype" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select TaskType</label>
  
   <select id="tasktype" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

<option>United States</option>
  <option>Canada</option>
  <option>France</option>
  <option>Germany</option>
 </select>
 </div>
 
   </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</div>
   


 

*/