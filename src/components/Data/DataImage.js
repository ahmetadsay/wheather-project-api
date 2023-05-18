const ACCESS_KEY = 'Z_rJIJTxoSTURYbUKtDmDYY4VyCNfWG-6QiDsaqOVhI';

const API_URL = `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}`;

export const getImages = async (query) => {
  const response = await fetch(`${API_URL}&query=${query}`);
  const json = await response.json();

  
  const dataResult = json.results 
  console.log(dataResult);

  return dataResult
};

getImages()

export default getImages