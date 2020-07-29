import { useState, useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';
import { getXFilesDetails } from '../../servases/XfilesApi';

export const useApiSCall = () => {
  const [character, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams('');

  useEffect(() => {
    setLoading(true);
    getXFilesDetails(name)
      .then(results => setCharacters(results[0]))
      .finally(() => setLoading(false));
  }, []);


  return {
    character,
    loading
  };
};
