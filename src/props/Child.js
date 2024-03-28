import React from "react";

function Child(props) {
    // Props stands for properties
    // Props are used to transfer data from one component to another
    // Props are read only
    // Here we can use the props value
    return <h1>Hello, {props.name}</h1>
}

export default Child;