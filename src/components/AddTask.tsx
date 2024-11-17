import React from 'react'
import { useState } from "react"
import { TaskState, TaskStauts, TaskType } from "./../state/task/taskSlice";
import Select from 'react-select';
import { SingleValue } from 'react-select';
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "./../state/task/taskSlice";
import { RootState, useAppDispatch, useAppSelector } from "./../state/store";
import { useDispatch, useSelector } from "react-redux";


interface ChildComponentProps {
    isVisible: boolean;
    onButtonClick: () => void;
  }
interface Status{
    value: TaskStauts, label: string
  };
interface TASKTYPE{
    value: TaskType, label: string
  };  
   
export default function AddTask({ isVisible,onButtonClick}:ChildComponentProps) {


const tasks = useSelector<RootState>((state) => state.tasks); 

 //  console.log("task",tasks)
const dispatch=useDispatch();  
const Status: Status[] = [
     { value: 'ToDo', label: 'ToDo' },
     { value: 'InProgress', label: 'InProgress' },
     { value: 'Complete', label: 'Complete' },
   ]; 

const TASKTYPE:TASKTYPE[]=[
    { value:'UrgenAndImportant',label:'UrgenAndImportant'},
    {value:'UrgentAndNotImportant',label:'UrgentAndNotImportant'},
    {value:'NotUrgentAndImportant',label:'NotUrgentAndImportant'},
     {value:'NotUrgentAndNotImportant',label:'NotUrgentAndNotImportant'},
   ]
const [taskform,Settaskform]=useState<TaskState>({
     id:"1",
     title:"",
     description:"",
     status:"ToDo",
     progressing:0,
     taskType:"NotUrgentAndNotImportant",
     startingDate:new Date()
   });
const handleStatus=(selectedOption: SingleValue<Status> | null)=>{
     console.log("selectedOption",selectedOption?.value)
     Settaskform({...taskform,status:selectedOption?.value || "ToDo"})
     };
const handleTaskType=(selectedOption:SingleValue<TASKTYPE> | null)=>{
     Settaskform({...taskform,taskType:selectedOption?.value || "NotUrgentAndNotImportant"})
     };  
     
const handleAddTask=(event: React.MouseEvent)=>{
       console.log("taskfrmdispatch",taskform)
     event.preventDefault()
      
     dispatch(
       addTask({
         id:nanoid(),
         title:taskform.title,
         description:taskform.description,
         status:taskform.status,
         progressing:taskform.progressing,
         taskType:taskform.taskType,
         startingDate:(new Date())
       })
     )
  
       
     }

     const handleCombinedClick = (event: React.MouseEvent) => {
        handleAddTask(event);
        onButtonClick();
      };     

  return (
    <div>
   { isVisible ===false ? (
        null
      ) : (
 <div className='fixed inset-0 flex w-full h-screen justify-center bg-black bg-opacity-10 backdrop-blur-sm'>      
<section className="bg-white border border-red-500 my-7  ">
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Task</h2>
      <form action="#"
      
      >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Title</label>
                  <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Task Title" 
                  onChange={(e)=>{
                 Settaskform({
                    ...taskform,
                    title:e.target.value 
                 })
                  }}
                  />
              </div>
              <div className="w-full">
                  <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Status</label>
                
                  <Select
            value={Status.find((status) => status.value === taskform.status)}
            onChange={handleStatus}
            options={Status}
        />
              
               </div>
              <div className="w-full">
                  <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Type</label>
                  <Select
            value={TASKTYPE.find((type)=>type.value===taskform.taskType)}
            onChange={handleTaskType}
            options={TASKTYPE}
        />
              
              </div>
              <div>
                  <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Progressing in  (%)</label>
                  <input type="number" name="item-weight" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="0" 
                    onChange={(e)=>{
                        Settaskform({
                           ...taskform,
                           progressing:e.target.valueAsNumber
                        })
                         }}
                  />
              </div> 
              <div className="sm:col-span-2">
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"
                     onChange={(e)=>{
                        Settaskform({
                           ...taskform,
                           description:e.target.value 
                        })
                         }}
                  ></textarea>
              </div>
           
          </div>
          <button 
          onClick={handleCombinedClick}
          className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
              Add Task
          </button>
      
      </form>
  </div>
</section>
</div>

      )}
 

    </div>
  )
}
