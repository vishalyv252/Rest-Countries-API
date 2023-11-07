import {useEffect, useState,useRef} from "react";


function menuHandler(ref,ref2,setIsOpen,arrow) {
    useEffect(() => {

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) &&
                ref2.current && !ref2.current.contains(event.target) ) {
                setIsOpen(false)
                arrow.current.style.rotate = "0deg"
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default function Filter({setFilter,setPage,setItemOffset}){

    const [isOpen, setIsOpen] = useState();
    const [selectedOption,setSelectedOption] = useState();

    const dropdown = useRef(null);
    const dropdownMenu = useRef(null);
    const arrow = useRef(null);

    menuHandler(dropdownMenu,dropdown,setIsOpen,arrow);

    const toggle = () =>{
        if(!isOpen){
            setIsOpen(!isOpen);
        }else{
            setIsOpen(false)
        }
        arrow.current.style.rotate = "-90deg"
    }

    const onOptionClicked = (value) => () =>{
        setSelectedOption(value);
        setIsOpen(false);
        setFilter(value);
        arrow.current.style.rotate = "0deg"
        setPage(0)
        setItemOffset(0)
    }

    const options = ["All","Africa","Americas","Asia","Antarctic","Europe","Oceania"];

    return(
      <>
        <div className={"relative md:min-w-[200px] w-2/3 md:w-[200px]"}>
            <div ref={dropdown} onClick={toggle} className={"cursor-pointer tracking-wider bg-white rounded-md dark:bg-darkmode-light dark:text-white p-5 pr-12 drop-shadow-lg relative"}>
                {selectedOption || "Filter by Region"}
                <svg ref={arrow} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 origin-top-left absolute ease-in duration-300 right-0 top-1/2 transform -translate-x-[50%] -translate-y-[50%]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>
            {isOpen &&
                <div ref={dropdownMenu}>
                    <ul className={"mt-2 bg-white p-4 pr-12 drop-shadow-lg dark:bg-darkmode-light dark:text-white absolute w-full rounded-md z-40"}>
                        {options.map((option,index)=>{
                            return <li className={"py-1.5 cursor-pointer"} key={index} onClick={onOptionClicked(option)}>{option}</li>;
                        })}
                    </ul>
                </div>
            }
        </div>
      </>
    );
}