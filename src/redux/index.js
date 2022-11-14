import {createStore } from "redux";
import {reducerData} from "./reducers/reducersShuffleData"
export const Store = createStore(reducerData);