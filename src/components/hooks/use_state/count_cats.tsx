import { useState } from "react";

export function CountCats() {  
  const [cats, setCats] = useState(['🐈']);
  
  const incrementCats = () => {
    setCats([...cats, '🐈']);
  }
  
  return (
    <>
    <h2>useState</h2>
    <p>Cat Count: {cats.length}</p>
    <p>{cats}</p>

    <button onClick={incrementCats}>
      add cats
    </button>
    </>
  );
}