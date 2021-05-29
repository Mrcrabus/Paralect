<<<<<<< HEAD
import {combineReducers, createStore} from "redux";
import profile from "./reducers/profile";

let reducers = combineReducers({
    profile,
});

let store = createStore(reducers);
=======
import { combineReducers, createStore } from "redux";
import profile from "./reducers/profile";
import repositories from "./reducers/repositories";

let reducers = combineReducers({
    profile,
    repositories
});

let store = createStore(reducers);

>>>>>>> 3eeb1394a8f69b6da595ca078ac82a2c8964bbd5
window.store = store;

export default store;