const API_KEY = "d433654d6df58b84a62ed36684155d0e";

fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=current,minutely,hourly,alerts&units=metric&appid=d433654d6df58b84a62ed36684155d0e")
    .then(response => response.json())
    .then(data => console.log(data));

function fetchWeather(api_url) {
    fetch(api_url)
    .then((response) => response.json())
    .then((data) => this.displayWeather(data)); 
}

function weekday(unixDate) {
    let milliseconds = unixDate * 1000
    let dateObject = new Date(milliseconds)
    let humanDateFormat = dateObject.toLocaleString()
    return dateObject.toLocaleString("en-US", {weekday: "short"}).toUpperCase()
}

function date(unixDate) {
    let milliseconds = unixDate * 1000
    let dateObject = new Date(milliseconds)
    let humanDateFormat = dateObject.toLocaleString()
    return dateObject.toLocaleString("en-US", {day: "numeric"})
}

function displayWeather(data) {
    document.querySelector("#day0").innerText = weekday(data.daily[0].dt)
    document.querySelector("#date0").innerText = date(data.daily[0].dt)
    document.querySelector("#weather-icon0").src = "http://openweathermap.org/img/wn/" + data.daily[0].weather[0].icon + "@2x.png";
    document.querySelector("#high0").innerText = Math.round(data.daily[0].temp.max) + "°";
    document.querySelector("#low0").innerText = Math.round(data.daily[0].temp.min) + "°";

    document.querySelector("#day1").innerText = weekday(data.daily[1].dt)
    document.querySelector("#date1").innerText = date(data.daily[1].dt)
    document.querySelector("#weather-icon1").src = "http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + "@2x.png";
    document.querySelector("#high1").innerText = Math.round(data.daily[1].temp.max) + "°";
    document.querySelector("#low1").innerText = Math.round(data.daily[1].temp.min) + "°";

    document.querySelector("#day2").innerText = weekday(data.daily[2].dt)
    document.querySelector("#date2").innerText = date(data.daily[2].dt)
    document.querySelector("#weather-icon2").src = "http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + "@2x.png";
    document.querySelector("#high2").innerText = Math.round(data.daily[2].temp.max) + "°";
    document.querySelector("#low2").innerText = Math.round(data.daily[2].temp.min) + "°";

    document.querySelector("#day3").innerText = weekday(data.daily[3].dt)
    document.querySelector("#date3").innerText = date(data.daily[3].dt)
    document.querySelector("#weather-icon3").src = "http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + "@2x.png";
    document.querySelector("#high3").innerText = Math.round(data.daily[3].temp.max) + "°";
    document.querySelector("#low3").innerText = Math.round(data.daily[3].temp.min) + "°";

    document.querySelector("#day4").innerText = weekday(data.daily[4].dt)
    document.querySelector("#date4").innerText = date(data.daily[4].dt)
    document.querySelector("#weather-icon4").src = "http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + "@2x.png";
    document.querySelector("#high4").innerText = Math.round(data.daily[4].temp.max) + "°";
    document.querySelector("#low4").innerText = Math.round(data.daily[4].temp.min) + "°";

    document.querySelector("#day5").innerText = weekday(data.daily[5].dt)
    document.querySelector("#date5").innerText = date(data.daily[5].dt)
    document.querySelector("#weather-icon5").src = "http://openweathermap.org/img/wn/" + data.daily[5].weather[0].icon + "@2x.png";
    document.querySelector("#high5").innerText = Math.round(data.daily[5].temp.max) + "°";
    document.querySelector("#low5").innerText = Math.round(data.daily[4].temp.min) + "°";
}

console.log(weekday(1619546400));
console.log(date(1619546400));

console.log(fetchWeather("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=current,minutely,hourly,alerts&units=metric&appid=d433654d6df58b84a62ed36684155d0e"))
/*let weather = {
    fetchWeather: function (api_url) {
        fetch(api_url)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const {icon, description} = data.weather[0];
        const {temp} = data.main;
        const {country} = data.sys;
        console.log(icon, description, temp);
        document.querySelector("#icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector("#conditions").innerText = description;
        document.querySelector("#temp").innerText = Math.round(temp) + " °C";
    },
    searchWeather: function () {
        this.fetchWeather("http://api.openweathermap.org/data/2.5/weather?q=" + document.querySelector("#sbox").value + "&units=metric&appid=" + API_KEY);
    },
};*/

