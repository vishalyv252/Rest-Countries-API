import {useEffect, useState} from "react";
import axios from "axios";

export function useFetch(url){

    const [data,setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        (
            async function(){
                try{
                    setLoading(true);
                    const response = await axios.get(url)
                    if(response.data.length > 1){
                        setData(response.data)
                        return;
                    }
                    setData(response.data[0])
                }catch (err){
                    setError(err);
                }finally {
                    setLoading(false);
                }
            }
        )()
    },[url])

    return{ data,error,loading};
}