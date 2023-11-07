import React from "react";

const Pagination = () =>{
    return(
        <div className={"animate-pulse h-[30px] w-[270px] my-[50px] mx-auto flex justify-between font-bold"}>
            <p>{"<"}</p>
            <p>{"..."}</p>
            <p>{"..."}</p>
            <p>{"..."}</p>
            <p>{"..."}</p>
            <p>{"..."}</p>
            <p>{">"}</p>
        </div>
    )
}

export default Pagination;