import { createStore } from "redux";
import todoReducers from "./todoReducers";

export const store = createStore(todoReducers);