import { useState, useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';
import { getXFilesDetails, getXFilesMain } from '../../servases/XfilesApi';

export const useApiCall = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams('');


  if(!name === '') {
    useEffect(() => {
      setLoading(true);
      getXFilesDetails(name)
        .then(results => setCharacters(results[0]))
        .finally(() => setLoading(false));
    }, []);
  } else {
    useEffect(() => {
      setLoading(true);
      getXFilesMain()
        .then(({ results }) => {
          setCharacters(results);
        })
        .finally(() => setLoading(false));
      
    }, []);
  }
  console.log(characters);

  return {
    characters,
    loading
  };
};

