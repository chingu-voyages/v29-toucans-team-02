/* Recommendation area starts here*/

const recommendedDestinations = [
    {
        city:'Capri',
        country:'Italy',
        image:'images/recommendations/capri2.jpg'
    },
    {
        city:'Lisbon',
        country:'Portugal',
        image:'images/recommendations/lisbon.jpg'
    },
    {
        city:'Tahiti',
        country:'French Polynesia',
        image:'images/recommendations/tahiti.jpg'
    },
    {
        city:'Vienna',
        country:'Austria',
        image: 'images/recommendations/vienna.jpg'
    },
    {
        city:'Chiapas',
        country:'Mexico',
        image:'images/recommendations/chiapas.jpg'
    },
    {
        city:'Queenstown',
        country:'New Zealand',
        image:'images/recommendations/queenstown.jpg'
    },
    {
        city:'Tampa, FL',
        country:'USA',
        image:'images/recommendations/tampa.jpg'
    },
    {
        city:'Tasmania',
        country:'Australia',
        image:'images/recommendations/tasmania.jpg'
    },
    {
        city:'Siargao Island',
        country:'Phillipines',
        image:'images/recommendations/island.jpg'
    },
    {
        city:'Havana',
        country:'Cuba',
        image:'images/recommendations/havana.jpg'
    },
    {
        city:'Cusco',
        country:'Peru',
        image:'images/recommendations/cusco.jpg'
    },
    {
        city:'Hanoi',
        country:'Vietnam',
        image:'images/recommendations/hanoi.jpg'
    },
    {
        city:'Bali',
        country:'Indonesia',
        image:'images/recommendations/bali.jpg'
    },
    {
        city:'Banff',
        country:'Canada',
        image:'images/recommendations/banff.jpg'
    },
    {
        city:'Bangkok',
        country:'Thailand',
        image:'images/recommendations/bangkok.jpg'
    },
    {
        city:'Kathmandu',
        country:'Nepal',
        image:'images/recommendations/kathmandu.jpg'
    },
    {
        city:'London',
        country:'United Kingdom',
        image:'images/recommendations/london.jpg'
    },
]
/* number of cards available on the homepage for recommended destinations*/
const destinationCards = 6;

/* length of the list of recommended destinations*/
const destinationLength = recommendedDestinations.length;

let numberArray = []
/* Function to create a set of random numbers within the range of current travel destinations available*/
function myRandomInts(quantity, max){
    let set = new Set()
    while(set.size < quantity) {
      set.add(Math.floor(Math.random() * max))
    }
    return set
  }

  /* variable holding the set of numbers */
let setOfRandomNumbers = myRandomInts(destinationCards, destinationLength)

/* function that iterates over each value in the set created by myRandomInts and assigns each value to a card*/
function getDestinationFromList(setOfRandomNumbers) {
    const setIter = setOfRandomNumbers[Symbol.iterator]();
        let ObjForCard1 = setIter.next().value
        document.getElementById("image1").src = recommendedDestinations[ObjForCard1].image;
        document.getElementById("cityName1").innerText = recommendedDestinations[ObjForCard1].city;
        document.getElementById("countryName1").innerText = recommendedDestinations[ObjForCard1].country;
        let ObjForCard2 = setIter.next().value
        document.getElementById("image2").src = recommendedDestinations[ObjForCard2].image;
        document.getElementById("cityName2").innerText = recommendedDestinations[ObjForCard2].city;
        document.getElementById("countryName2").innerText = recommendedDestinations[ObjForCard2].country;
        let ObjForCard3 = setIter.next().value
        document.getElementById("image3").src = recommendedDestinations[ObjForCard3].image;
        document.getElementById("cityName3").innerText = recommendedDestinations[ObjForCard3].city;
        document.getElementById("countryName3").innerText = recommendedDestinations[ObjForCard3].country;
        let ObjForCard4 = setIter.next().value
        document.getElementById("image4").src = recommendedDestinations[ObjForCard4].image;
        document.getElementById("cityName4").innerText = recommendedDestinations[ObjForCard4].city;
        document.getElementById("countryName4").innerText = recommendedDestinations[ObjForCard4].country;
        let ObjForCard5 = setIter.next().value
        document.getElementById("image5").src = recommendedDestinations[ObjForCard5].image;
        document.getElementById("cityName5").innerText = recommendedDestinations[ObjForCard5].city;
        document.getElementById("countryName5").innerText = recommendedDestinations[ObjForCard5].country;
        let ObjForCard6 = setIter.next().value
        document.getElementById("image6").src = recommendedDestinations[ObjForCard6].image;
        document.getElementById("cityName6").innerText = recommendedDestinations[ObjForCard6].city;
        document.getElementById("countryName6").innerText = recommendedDestinations[ObjForCard6].country;
    
}
/* calling function to update destinations*/
getDestinationFromList(setOfRandomNumbers);

const API_TOKEN = 'f8y1ib32vbgtx6u0mewmmn4lcu1ecv6p'
const API_USERID = 'EIT7ZL9V'

fetch('https://www.triposo.com/api/20210317/poi.json?location_id=Tenerife&tag_labels=sightseeing&count=10&fields=id,name,score,intro,tag_labels,location_id,location_ids&order_by=-score&account=EIT7ZL9V&token=f8y1ib32vbgtx6u0mewmmn4lcu1ecv6p')
    .then(response => response.json())
    .then(data => console.log(data)) 

/* Weather area starts here */

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
