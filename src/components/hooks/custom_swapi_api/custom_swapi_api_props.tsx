import React from 'react';
import { swapiPeopleData } from './custom_swapi_hook';

interface SwapiAPICallProps{
    data: Array<swapiPeopleData>;
}

const SwapiAPICall : React.FC<SwapiAPICallProps> = ({data}) => {
    return(
        <>
        <h2>Swapi API Call</h2>
        {data && data.length > 0 ? (
            data.map((person, index) => (
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