import {useEffect, useState} from 'react';

interface swapiPeopleData {
    name: string;
    height: string;
    mass: string;
    gender: string;
    birthYear: string;
    starships: Array<string>;
}

const SwapiAPICall = () => {
    const[swapiResultsData, setSwapiResultsData] = useState<Array<swapiPeopleData>>([]);
    useEffect(() => {
        const url = "https://swapi.dev/api/people/";
        const getSwapiJSON = async(apiEndPoint: RequestInfo | URL) => {
            try{
                const apiResponse = await fetch(apiEndPoint);
                const jsonData = await apiResponse.json();
                setSwapiResultsData(jsonData.results);
            }catch(error){
                console.error("Error in async function swapAPICall");
            }    
        }
        getSwapiJSON(url);
    },[]);
    return(
        <>
        <h2>Swapi API Call</h2>
        {swapiResultsData && swapiResultsData.length > 0 ? (
            swapiResultsData.map((person, index) => (
                <div key={index} className="list__item">
                  <p className="label-container">Name: {person.name}</p>
                  <p className="label-container">Birth Year: {person.birthYear}</p>
                  <p className="label-container">Height: {person.height}</p>
                  <p  className="label-container">Mass: {person.mass}</p>
                  <p className="label-container">Gender: {person.gender}</p>
                  <p className="label-container">Star Ships:</p>
                  {person.starships && person.starships.length > 0 && (
                  <ul>
                    {person.starships.map((starship, idx) => (
                        <li key={idx} >
                            <a href={starship}>{starship}</a>
                        </li>
                    ))}
                  </ul>
                  )}
                </div>                
            ))
        ) : <div className='list__name'>Loading...</div>}
        </>
    );
}

export default SwapiAPICall;