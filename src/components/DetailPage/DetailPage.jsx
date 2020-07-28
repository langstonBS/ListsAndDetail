import React from 'react';
import PropTypes from 'prop-types';


function DetialPage({ characters }) {
  const charactersElements = characters.map(character => (
    <li key={character.name}>
      {character.name}
      <img src={character.image} alt={character.name} />
    </li>
  ));
  return (
    <div>
      <ul>
        {charactersElements}
      </ul>
      
    </div>
  );
}

DetialPage.propTypes = {
  characters: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default DetialPage;
