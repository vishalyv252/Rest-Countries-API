import {useFetch} from "../hooks/useFetch";
import {Link, useParams} from "react-router-dom";
import * as codes from "../resources/countries.json"

const Country = () =>{
    let {id} = useParams()
    const {data:country,loading,error}= useFetch(`https://restcountries.com/v3.1/name/${id}?fullText=true`)


    const convertCountryCode = (ctryCodes,codes) =>{
        return ctryCodes.map(cntry=>{
             const foundCntry = codes.default.find((code)=>{
                return cntry == code["alpha-3"]})

            return (<li key={foundCntry.name} className={"list-none mr-3 mb-7"}><Link className={"dark:bg-darkmode-light text-sm rounded-sm shadow-lg py-2 px-10 cursor-pointer"} to={`/country/${foundCntry.name}`}>{foundCntry.name}</Link></li>);
        })
    }

    return(
        <>
            <div style={{minHeight:"calc(100vh - 65px)"}} className={"dark:bg-darkmode-dark dark:text-white px-5 sm:px-10"}>
                <div className={"sm:max-w-screen-2xl  m-auto"}>
                    <Link className={"shadow-xl rounded-md inline-block mt-16 text-xs px-8 py-3"} to={"/"}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back
                    </Link>

                    {country &&
                        <div className={"mt-16 flex flex-col md:flex-row items-center md:items-start md:gap-14"}>
                            <div className={"w-full float-left"}>
                                <img loading='lazy' src={country.flags.svg} alt=""/>
                            </div>

                            <div className={"w-full text-sm mt-10"}>
                                <h2 className={"text-2xl font-bold mb-5"}>{country.name.common}</h2>
                                <div className={"flex flex-col md:flex-row gap-x-5"}>
                                    <div className={"flex flex-col gap-3"}>
                                        <p><span
                                            className={"font-bold "}>Native Name:</span> {country.name.nativeName ? Object.values(country.name.nativeName)[0].common : "/"}
                                        </p>
                                        <p><span className={"font-bold "}>Population:</span> {
                                            country.population ?
                                                country.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') :
                                                0}
                                        </p>
                                        <p><span className={"font-bold "}>Region:</span> {country.region ? country.region : "/"}</p>
                                        <p><span
                                            className={"font-bold "}>Sub Region:</span> {country.subregion ? country.subregion : "/"}
                                        </p>
                                        <p><span
                                            className={"font-bold "}>Capital:</span> {country.capital ? country.capital : "/"}
                                        </p>
                                    </div>
                                    <div className={"flex flex-col gap-3 mt-14 md:mt-0"}>
                                        <p className={""}><span
                                            className={"font-bold"}>Top Level Domain:</span> {country.tld ? country.tld[0] : "/"}
                                        </p>
                                        <p><span
                                            className={"font-bold "}>Currencies:</span> {country.currenies ? Object.values(country.currencies)[0].name : "/"}
                                        </p>
                                        <p className={"break-words"}><span
                                            className={"font-bold"}>Languages:</span> {
                                            country.languages ?
                                                Object.values(country.languages).join(', ')
                                                : "/"}
                                        </p>
                                    </div>

                                </div>
                                <ul className={"flex flex-wrap flex-row mt-14 pb-10"}>
                                    <li className={"font-bold text-lg  mr-4 -mt-1 whitespace-nowrap sm:float-left block w-full md:w-fit mb-10 md:mb-0"}>
                                        <p>
                                            Border Countries:
                                        </p>
                                    </li>
                                        {
                                            country.borders ? convertCountryCode(country.borders,codes) : "/"
                                        }

                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Country;