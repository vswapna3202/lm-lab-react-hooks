import { useState, useEffect } from "react";
import SwapiAPICall from "./custom_swapi_api_props";

export interface swapiPeopleData{
    name: string;
    birthYear: string;
    gender: string;
    height: string;
    mass: string;
    starships: Array<string>;
}

const SwapiAPICallContainer = () => {
    const[swapiResults,setSwapiResults] = useState<Array<swapiPeopleData>>([]);
    useEffect(() => {
        const url = "https://swapi.dev/api/people/";
        const getSwapiJSON = async(apiEndPoint: RequestInfo | URL) => {
            try{
                const apiResponse = await fetch(apiEndPoint);
                const jsonResults = await apiResponse.json();
                setSwapiResults(jsonResults.results);
            }catch(error){
                console.error("Error in async function swapiAPICall");
            }   
        }
        getSwapiJSON(url);
    },[]);
    return <SwapiAPICall data={swapiResults} />    
}

export default SwapiAPICallContainer;