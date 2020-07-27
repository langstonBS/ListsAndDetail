const getXFilesMain = () => {
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters?category=Main_characters', {
  })
    .then(res => res.json());
};

export { getXFilesMain };
