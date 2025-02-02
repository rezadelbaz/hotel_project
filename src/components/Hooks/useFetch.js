import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


export default function useFetch(url,query=""){

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading ] = useState(false);

    useEffect(()=>{
        async function fetchData() {
            try {
                setIsLoading(true);
                const response = await axios.get(`${url}?${query}`);
                setData(response.data)
            } catch (error) {
                setData([]);
                toast.error(error?.message)
                
            }finally{
                setIsLoading(false)
            }
            
        }

    fetchData()
    },[query,url])

    return({data, isLoading})

}