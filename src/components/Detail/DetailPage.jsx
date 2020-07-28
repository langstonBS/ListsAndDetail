import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  useParams
} from 'react-router-dom';
import { getXFilesDetails } from '../../servases/XfilesApi';


function DetailPage() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams('');

  useEffect(() => {
    setLoading(true);
    getXFilesDetails(name)
      .then(results => setCharacter(results[0]));
    setLoading(false);
  }, []);
  if(loading) return <h1>loading</h1>;
  console.log(character);

  return (
    <>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <h3>rank: {character.rank}</h3>
      <h3>Affiliations: {character.affiliations}</h3>
      <h3>Status: {character.status}</h3>
      <h3>Portrayed by: {character.portrayedby}</h3>
      <h3>Gender: {character.gender}</h3>
      <p>description: {character.description}</p>
    </>
    
    

  );
}

export default DetailPage;

