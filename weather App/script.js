const apiKey = "cc82a453d3e039069d3161b54da3ff63";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector("#weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);    

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
         var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.className = "weather-icon fas fa-cloud fa-10x";
    }
    else if(data.weather[0].main == "Clear") {
        weatherIcon.className = "weather-icon fas fa-sun fa-10x";
    }
    else if(data.weather[0].main == "Rain") {
        weatherIcon.className = "weather-icon fas fa-cloud-rain fa-10x";
    }
    else if(data.weather[0].main == "Mist") {
        weatherIcon.className = "weather-icon fas fa-smog fa-10x";
    }
    else if(data.weather[0].main == "Snow") {
        weatherIcon.className = "weather-icon fas fa-snowflake fa-10x";
    }
    else if(data.weather[0].main == "Thunderstorm") {
        weatherIcon.className = "weather-icon fas fa-bolt fa-10x";
    }
    else {
        weatherIcon.className = "weather-icon fas fa-smog fa-10x";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
    }
   


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

