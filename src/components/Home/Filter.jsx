import PaginatedItems from "../PaginatedItems";
import React from "react";

const Filter = ({countries,filter,search,page,setPage,itemOffset,setItemOffset}) => {

    let filteredCountries =
        countries.filter(
            (country) => {
                if (filter && filter !== "All") {
                    return country.region === filter;
                } else {
                    return country;
                }
            }
        )
            .filter((country) => {
                    if (!search) {
                        return country
                    } else if (country.name.common.toLowerCase().includes(search.toLowerCase())) {
                        return country
                    }

                }
            )
    if (filteredCountries.length == 0) {
        return <h2 className={"absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:text-white"}>Sorry, no results
            were found</h2>
    }

    return (
        <PaginatedItems itemsPerPage={12} items={filteredCountries} setPage={setPage} page={page} setItemOffset={setItemOffset} itemOffset={itemOffset}/>
    )

}

export default Filter;