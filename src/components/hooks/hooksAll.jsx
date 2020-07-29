import { useState, useEffect } from 'react';
import { getXFilesAll } from '../../servases/XfilesApi';


export const useApiCallAll = (page) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    setLoading(true);
    getXFilesAll(page)
      .then(({ results }) => {
        setCharacters(results);
      })
      .finally(() => setLoading(false));
      
  }, [page]);

  return {
    characters,
    loading
  };
};
