import * as codes from "../../resources/countries.json";

const CountryLoader = () =>{
    return(
        <div className={"animate-pulse mt-16 flex flex-col md:flex-row items-center md:items-start md:gap-14 mb-5"}>
            <div className={"w-full h-vw-30 float-left bg-darkmode-light"}>
            </div>

            <div className={"w-full text-sm mt-10"}>
                <h2 className={"text-2xl font-bold mb-5"}></h2>
                <div className={"flex flex-col md:flex-row gap-x-5"}>
                    <div className={"flex flex-col gap-3"}>
                        <p><span
                            className={"font-bold "}>Native Name:</span>
                        </p>
                        <p><span className={"font-bold "}>Population:</span>
                        </p>
                        <p><span className={"font-bold "}>Region:</span></p>
                        <p><span
                            className={"font-bold "}>Sub Region:</span>
                        </p>
                        <p><span
                            className={"font-bold "}>Capital:</span>
                        </p>
                    </div>
                    <div className={"flex flex-col gap-3 mt-14 md:mt-0"}>
                        <p className={""}><span
                            className={"font-bold"}>Top Level Domain:</span>
                        </p>
                        <p><span
                            className={"font-bold "}>Currencies:</span>
                        </p>
                        <p className={"break-words"}><span
                            className={"font-bold"}>Languages:</span>
                        </p>
                    </div>

                </div>
                <div className={"flex flex-wrap flex-col md:flex-row mt-14 pb-10"}>
                    <p className={"font-bold text-lg  mr-4 -mt-1 whitespace-nowrap float-left"}>

                        Border Countries:

                    </p>
                    <ul className={"flex flex-wrap"}>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CountryLoader;