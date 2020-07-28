import React from 'react';
import List from '../List/List';
import { useApiCall } from '../hooks/hooks.jsx';


const ApiPage = () => {


  const {
    characters,
    loading
  
    
  } = useApiCall();
  if(loading) return <h1>loading</h1>;


  return (
    <div>
      <ul>
        < List characters={characters}/>
      </ul>
      
    </div>
  );
};




export default ApiPage;

