const getXFilesMain = () => {
  return fetch('https://xfiles-api.herokuapp.com/api/v1/characters?category=Main_characters', {
  })
    .then(res => res.json());
};

const getXFilesAll = (page) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters?perPage=20&page=${page}`, {
  })
    .then(res => res.json());
};

const getXFilesDetails = (name) => {
  return fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`, {
  })
    .then(res => res.json());

};

export { getXFilesMain, getXFilesDetails, getXFilesAll };
