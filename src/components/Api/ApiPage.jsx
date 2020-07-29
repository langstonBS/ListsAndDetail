import React from 'react';
import List from '../List/List';
import { useApiCallAll } from '../hooks/hooksAll.jsx';

const ApiPage = () => {


  const {
    characters,
    loading
  } = useApiCallAll();
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

