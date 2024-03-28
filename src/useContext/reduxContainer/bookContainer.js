import React from "react";
import { useDispatch, useSelector } from "react-redux";
import purchase_book from './bookAction';

function BookContainer() {

    const noOfBooks = useSelector(state => state.numberOfBooks);
    // const dispatch = useDispatch();

    return (
        <>
            <div>Book Container</div>
            <h2>No of Books - {noOfBooks}</h2>
            {/* <button onClick={()=>{dispatch(purchase_book())}}>Buy Book</button> */}
        </>
    )
}

export default BookContainer;