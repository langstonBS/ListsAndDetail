export const getXFilesMain = () => {
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters?category=Main_characters', {
    headers: {
      Origin: null
    }
  })
    .then(res => res.json());
};
