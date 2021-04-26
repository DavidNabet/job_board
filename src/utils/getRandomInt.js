const getRandomInt = (tab = {}) => {
  let min = Math.ceil(0); //On commence par zéro
  let max = Math.floor(Object.values(tab).length); //On parcourt le tableau (de type number)
  return Math.floor(Math.random() * (max - min)) + min;
};

export default getRandomInt;
