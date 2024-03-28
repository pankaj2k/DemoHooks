import React from "react";

// We are receiveing the data from parent component to childC, we have to pass data each and every nested component 
// Suppose we have 50 component then we can not do like that, so we should choose the Context API and useContext Hooks for beter solution
function ChildC({name}) {
    return (
        <div>
            <h3>Child C is rendering the {name}</h3>
        </div>
    )
}

export default ChildC;