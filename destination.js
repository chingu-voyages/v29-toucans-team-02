const API_KEY = "d433654d6df58b84a62ed36684155d0e";

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=42.3584&lon=-71.0598&exclude=current,minutely,hourly&appid=d433654d6df58b84a62ed36684155d0e')
    .then(response => response.json())
    .then(data => console.log(data)) 

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

