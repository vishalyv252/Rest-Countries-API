import Filter from "./Filter";
import {useRef} from "react";

function Search ({setFilter,setSearch,setPage,setItemOffset}){
    const input = useRef();

    function searchHandler() {
        setSearch(input.current.value)
        setPage(0)
        setItemOffset(0)
    }

    return(
        <div className={"mx-5 sm:mx-10 sm:block md:flex items-center py-10 justify-between"}>
            <label className="relative flex w-full max-w-[35rem] shadow-md md:mr-5 mb-10 md:mb-0">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-5 flex items-center pl-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-400 dark:stroke-white" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
                <input
                    className=" placeholder:dark:text-white text-slate-400 inline-block dark:bg-darkmode-light dark:text-white w-full border-slate-300
                    rounded-md py-5 pl-20 pr-3  focus:outline-none"
                    placeholder="Search for a country..." ref={input} type="text" name="search" onChange={searchHandler}/>
            </label>
            <Filter setFilter={setFilter} setPage={setPage} setItemOffset={setItemOffset}></Filter>
        </div>
    )
}

export default Search;