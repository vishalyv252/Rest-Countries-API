import {Link} from "react-router-dom";


function Nav ({toggle,darkMode}){
    return (
        <nav className={"dark:bg-darkmode-light shadow-md"}>
            <div className={"sm:max-w-screen-lg sm:max-w-screen-2xl m-auto flex justify-between px-5 sm:px-10"}>
                <Link to={"/"}>
                    <h1 className={"py-5 dark:text-white text-md sm:text-lg font-bold"}>Where in the world?</h1>
                </Link>
                <button className={"py-5"} onClick={toggle}>
                    {darkMode ?
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2 dark:text-white"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                            </svg>
                            <p className={"dark:text-white text-sm inline-block align-middle"}>Dark Mode</p>
                        </>
                        :
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2 dark:text-white" viewBox="0 0 24 24"
                                 stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                            </svg>
                            <p className={"dark:text-white text-md inline-block align-middle"}>Light Mode</p>
                        </>

                    }
                </button>
            </div>
        </nav>
    )
}

export default Nav;