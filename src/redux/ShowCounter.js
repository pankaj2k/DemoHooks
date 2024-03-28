import React from "react";
import {
    decrement,
    increment,
    reset,
  } from "./actions/action";

// The next line of action is to extract the counterReducer by importing useSelector from react-redux so we can access the entire state in it
import { useSelector, useDispatch} from 'react-redux';

function ShowCounter() {
    const counter = useSelector(state => state) 
    // The useDispatch hook from react-redux, so we can dispatch any action we want.
    const dispatch = useDispatch()
    
    return (
        <div style={{ textAlign: 'center'}}>
        <h1>Counter App using Redux.</h1>
        <h1>{counter}</h1>
        {/* // We need to set up a click event handler to dispatch our action. */}
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    )
}

export default ShowCounter;