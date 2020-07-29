import React from 'react';
import List from '../List/List';
import { useApiCallAll } from '../hooks/hooksAll.jsx';
import { usePagination } from '../hooks/hookPagination.jsx';


const ApiPageAll = () => {

  const {
    next,
    prev,
    page
  } = usePagination();

  const {
    characters,
    loading
  } = useApiCallAll(page);
  if(loading) return <h1>loading</h1>;
  
 


  return (
    <div>
      <ul>
        < List characters={characters}/>
      </ul>

      <button id="next" onClick={() => next()} >next</button>
      <button id="previous" onClick={() => prev()} > previous</button>
    </div>
  );
};




export default ApiPageAll;
