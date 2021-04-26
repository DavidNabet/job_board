const getRandomTab = (tab) => {
  return tab[Math.floor(Math.random() * tab.length)];
};

export default getRandomTab;
