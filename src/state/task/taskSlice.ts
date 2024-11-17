import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./../store"
/*
export enum TaskStauts{
    ToDo="ToDo",
    InProgress="InProgress",
    Complete="Complete"

};
export enum TaskType{
    UrgenAndImportant="UrgenAndImportant",
    UrgentAndNotImportant="UrgentAndNotImportant",
    NotUrgentAndImportant="NotUrgentAndImportant",
    NotUrgentAndNotImportant="NotUrgentAndNotImportant"

}
*/
export type TaskStauts="ToDo" | "InProgress" | "Complete"
export type TaskType="UrgenAndImportant" | "UrgentAndNotImportant" | "NotUrgentAndImportant" | "NotUrgentAndNotImportant";
export interface TaskState {
    id:string,
    title:string;
    description:string;
    status:TaskStauts;
    progressing:number;
    taskType:TaskType;
    startingDate:Date;
}
/*
const initialState:TaskState ={
    title:"",
    description:"",
    status:TaskStauts.ToDo,
    progressing:0,
    taskType:TaskType.NotUrgentAndNotImportant,
    startingDate:new Date()
};
*/
interface InitialTaskState {
    tasks: TaskState[];
  }

  const initialState: InitialTaskState = {
    tasks: []
  };

const taskSlice=createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTask:(state,action)=>{
           state.tasks.push(action.payload)
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);   
        
          },
    }
});
export const selectAllTasks=(state:RootState)=>state.tasks;
export const {addTask}=taskSlice.actions;
export default taskSlice.reducer;