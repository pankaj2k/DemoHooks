import React, { useState } from "react";

function Comment() {
    // Here title are called state and changeTitle are called function 
    const [title, changeTitle] = useState('Good Morning!!!');

    function onChangeTitle() {
        changeTitle('Good Afternoon !!!');
    }

    return(
        <div>
            <h1>{title}</h1>
            <button onClick={onChangeTitle}>Change text</button>
        </div>
    )
}

export default Comment;