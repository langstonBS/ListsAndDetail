import React from 'react';

import { useApiSCall } from '../hooks/hooksDetail.jsx';


function DetailPage() {

  const {
    character,
    loading
    
  } = useApiSCall();
  if(loading) return <h1>loading</h1>;

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

