import React from "react";
import ChildC from "./ChildC";

function ChildB({name}) {
    return (
        <div>
            <ChildC name={name}></ChildC>
        </div>
    )
}

export default ChildB;