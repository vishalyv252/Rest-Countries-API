
const CardLoader = () =>{
    return(
        <li className={"shadow-md rounded-lg overflow-hidden dark:bg-darkmode-light h-min text-md cursor-pointer"}>
            <div className="animate-pulse flex flex-col space-x-4">
                <div className="w-full lg:h-vw-10 md:h-vw-15 self-center bg-slate-700 h-28"></div>
                <div className="flex-1 space-y-6 p-4 py-5 mt-4">
                    <div className="h-2 w-1/2 bg-slate-700 rounded"></div>
                    <div className="space-y-5">
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="h-2 w-1/2 bg-slate-700 rounded"></div>
                        <div className="h-2 w-5/6 bg-slate-700 rounded"></div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default  CardLoader;