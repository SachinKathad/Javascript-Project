const searchInput = document.querySelector(".search-input")
const currentWeatherDiv = document.querySelector(".current-weather")

const API_KEY = "a9928781a0bd4e20a72221431241609"

const getWeatherDetails = async (cityName) => {
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}`;

    try{
        const response = await fetch(API_URL);
        const data = await response.json();


        const temperature = Math.floor(data.current.temp_c);
        const description = data.current.condition.text;

        currentWeatherDiv.querySelector('.temperature').innerHTML = `${temperature}<span>°C</span>`
        currentWeatherDiv.querySelector('.description').innerText = description

        console.log(data);
        
    } catch(error){
        console.log(error);
        
    }
}

searchInput.addEventListener("keyup",(e) =>{
    const cityName = searchInput.value.trim();

    if(e.key == "Enter" && cityName){
        getWeatherDetails(cityName)
    }
})