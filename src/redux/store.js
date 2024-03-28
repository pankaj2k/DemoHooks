import { createStore } from "redux"; // import the createStore API from Redux
import counterReducer from "./reducers/counterReducer"; //create the store in their instance

const store = createStore(counterReducer);


export default store;