import React, {useEffect, useState} from "react";

function Event() {
    const [count, setCounter] = useState(0);
    const [data, setData] = useState('testing');

    // useEffect accept two parameter (1.Function 2. Put state inside array(Optional))
    // useEffect hooks run every time, when our web page load(render)
    // In side the component, if any state will be change, useEffect hooks does execute(run)
    // If we want to run useEffect as per our requirement, we have to use secound parameter like empty array

    useEffect(() => {
        console.log("Component Mounted")
    }, [data])

    function changeCount() {
        setCounter(count + 1);
    }

    function changeData() {
        setData('Testing Completed !!!')
    }

    return(
        <div>
            <h1>Button Clicked {count} times</h1>
            <button onClick={changeCount}>Counter Button</button><br></br>
            <button onClick={changeData}>Test Button</button>
        </div>
    )
}

export default Event;