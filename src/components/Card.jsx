import Tooltip from '@mui/material/Tooltip';
import {Link} from "react-router-dom";



const Card = ({country}) =>{
    return(
    <li className={"shadow-md rounded-lg overflow-hidden dark:bg-darkmode-light h-min text-md cursor-pointer"}>
        <Tooltip title={country.name.common} placement={"top"}>

        <Link to={{pathname:`/country/${country.name.common}`}}>
            <div className={"sm:h-vw-20 md:h-vw-15 lg:h-vw-10 h-vw-50 "}>
                <img loading='lazy' className={"w-full h-full object-cover"} src={`${country.flags.png.slice(0,-3)}webp`} alt=""/>
            </div>
            <div className={"p-5 mb-10"}>
                <h3 className={"font-black text-lg mb-5 line-clamp-1"}>{country.name.common}</h3>
                <p className={"py-0.5"}><b>population:</b> {country.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</p>
                <p className={"py-0.5"}><b>Region:</b> {country.region}</p>
                <p className={"py-0.5 line-clamp-1"}><b>Capital:</b> {country.capital}</p>
            </div>
        </Link>
        </Tooltip>
    </li>
    )
}

export default Card;