const API_KEY = "396f6d3ebc3fed4ec09e14e6c5f2149b";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const res = await fetch(apiURL + city + `&appid=${API_KEY}`);

  if (res.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await res.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "./images/snow.png";
    }
    console.log(data);
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
  searchBox.value = "";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
