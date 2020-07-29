import { useState, useEffect } from 'react';
import { getXFilesMain } from '../../servases/XfilesApi';


export const useApiCall = () => {
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

  

  return {
    characters,
    loading
  };
};

