import Pagination from "./Pagination";
import CardLoader from "./CardLoader";
import React from "react";

const AllApiLoad = () =>{
    return(
        <>
            <Pagination/>
            <ul className={"grid mx-10 text-sm gap-[2rem] md:gap-[2.5rem] lg:gap-[3rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white relative h-full"}>
                {[...Array(12).keys()].map((el)=> {
                    return(
                        <CardLoader key={el}/>

                    )
                })}
            </ul>
            <Pagination/>
        </>
    )
}

export default AllApiLoad;