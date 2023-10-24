import { useState, useEffect } from "react";

interface swapiPeopleData{
    name: string;
    birthYear: string;
    gender: string;
    height: string;
    mass: string;
    starships: Array<string>;
}

const SwapiAPICall = () => {
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
    return(
        <>
        <h2>Swapi API Call</h2>
        {swapiResults && swapiResults.length > 0 ? (
            swapiResults.map((person, index) => (
                <div key={index} className='list__item'>
                    <p className='label-container'>Name: {person.name}</p>
                    <p className='label-container'>Birth Year: {person.birthYear}</p>
                    <p className='label-container'>Gender: {person.gender}</p>
                    <p className='label-container'>Height: {person.height}</p>
                    <p className='label-container'>Mass: {person.mass}</p>
                    {person.starships && person.starships.length > 0 && (
                        <ul>
                            {person.starships.map((starship,idx) => (
                                <li key={idx} >
                                    <a href={starship}>{starship}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))
        ) : <div className='list__item'>Loading...</div>
            }
        </>
    );
}

export default SwapiAPICall;