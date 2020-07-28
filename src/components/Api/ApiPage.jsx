import React, { useEffect } from 'react';
import { useState } from 'react';
import { getXFilesMain } from '../../servases/XfilesApi.jsx';
import List from '../List/List';


const ApiPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getXFilesMain()
      .then(({ results }) => {
        setCharacters(results);
      })
      .finally(() => setLoading(false));
    
  }, []);
  if(loading) return <h1>loading</h1>;
  console.log(characters);


  return (
    <div>
      <ul>
        < List characters={characters}/>
      </ul>
      
    </div>
  );
};




export default ApiPage;

