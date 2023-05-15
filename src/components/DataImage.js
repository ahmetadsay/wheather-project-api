const ACCESS_KEY = 'Z_rJIJTxoSTURYbUKtDmDYY4VyCNfWG-6QiDsaqOVhI';

const API_URL = `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}`;

export const getImages = async (query) => {
  const response = await fetch(`${API_URL}&query=${query}`);
  const json = await response.json();

  console.log(json);
};

export default getImages