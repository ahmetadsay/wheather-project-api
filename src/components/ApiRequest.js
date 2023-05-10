const API_KEY = '86f1fca1b3ff752518a48a66a2c8dfc1';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}`;

const GetWeatherData = async () => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log('Error:', error);
  }
};

GetWeatherData();

export default GetWeatherData
