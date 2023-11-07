import Home from "./pages/Home";
import React, {useState} from 'react'
import {Routes, Route} from "react-router-dom";
import Country from "./pages/Country";
import Nav from "./components/Nav";
import {useFetch} from "./hooks/useFetch";


function App() {


    const [darkMode,setDarkMode] = useState("false");
    const {data,loading,error} = useFetch("https://restcountries.com/v3.1/all")


    const darkModeToggle = () =>{
        setDarkMode(!darkMode);
    }

    return(
        <div className={`App ${!darkMode ? "dark" : "light"} `}>
            <Nav toggle={darkModeToggle} darkMode={darkMode}/>
            <Routes>
                <Route path="/" element={<Home darkMode={darkMode} data={data} loading={loading} err={error}/>}/>
                <Route path="/country/:id" element={<Country/>}/>
            </Routes>
        </div>
    )
}

export default App
