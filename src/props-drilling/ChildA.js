import React from "react";
import ChildB from "./ChildB";

function ChildA({name}){
    return(
        <div>
            <ChildB name={name}></ChildB>
        </div>
    )
}

export default ChildA;