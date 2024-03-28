import React, { useContext } from "react";
import { data1, data2 } from "../App";

function ComponentC() {
    const userName = useContext(data1);
    const gender = useContext(data2);
    return(
        <div>
            <h1>My name is {userName} and my gender is {gender}</h1>
        </div>
    )
}

export default ComponentC;