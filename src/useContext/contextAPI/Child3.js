import React from "react";
import { data3, data4 } from "../App";

function Child3() {
    return (
        <div>

            {/* Consumer accept only one function  */}
            {/* Use of Context API , It is also not good solution  */}
            {/* Suppose we have multiple cunsumer then we have to write multiple nested function is called callback hell  */}
            {/* So best solution is useContext hooks */}
            <data3.Consumer>
                {
                    (ContextAPIValue1) => {
                        return (
                            <data4.Consumer>
                                {
                                    (ContextAPIValue2) => {
                                        return(
                                        <>
                                            <h2>Child 3 is rendering {ContextAPIValue1}</h2>
                                            <h2>Child 3 is rendering {ContextAPIValue2}</h2>
                                        </>
                                        )
                                    }
                                }
                            </data4.Consumer>
                        )
                    }
                }
            </data3.Consumer>
        </div>
    )
}

export default Child3;