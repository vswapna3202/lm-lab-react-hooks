import {useEffect, useState} from 'react';

interface Todo {
    userId: string,
    id: number,
    title: string,
    completed: boolean
}

export const APICall = () => {
    const[json,setJson] = useState<Todo | null>(null);

    // Your code here!
    useEffect(() => {
        
        // make an api call using useEffect
        const jsonTypiCode = "https://jsonplaceholder.typicode.com/todos/1";
            
        const fetchTodo  = async(apiEndPoint: RequestInfo | URL) => {
            
            try{
                const response = await fetch(apiEndPoint);
                const json = await response.json();
                setJson(json);
                console.log(`${json}`);
            }catch(error){
                console.log(`${error}`);
            }       
        }
        fetchTodo(jsonTypiCode);
    },[]);        
      
        
    return (
        <>
            <h2>useEffect</h2>
                <p>{json ? JSON.stringify(json) : 'Loading...'}</p>
            </>
    );
}   

     
