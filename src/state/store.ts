import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task/taskSlice"
import { useDispatch, useSelector } from "react-redux";
export const store=configureStore({
    reducer:{
        tasks:taskReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()