import Filter from "../components/Home/Filter";
import Search from "../components/Search/Search";
import React, {useState} from "react";
import AllApiLoad from "../components/Animations/Home/AllApiLoad";


const Home = ({data:countries,loading,darkMode}) =>{
    const [filter,setFilter] = useState();
    const [search,setSearch] = useState();
    const [page,setPage] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    return (
        <section  className={"dark:bg-darkmode-dark"}>
            <div className={"max-w-screen-2xl  m-auto "}>
                <Search setFilter={setFilter} setSearch={setSearch} setPage={setPage} setItemOffset={setItemOffset}></Search>
                <section style={{minHeight:"calc(100vh - 68px)"}} className={"h-full"} >
                    {countries &&
                        <Filter countries={countries} filter={filter} search={search} page={page} setPage={setPage} setItemOffset={setItemOffset} itemOffset={itemOffset}/>
                    }
                    {loading &&
                        <AllApiLoad/>
                    }
                </section>
            </div>
        </section>



    )
}

export default Home;