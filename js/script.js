
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

<<<<<<< HEAD
=======
const API_TOKEN = 'f8y1ib32vbgtx6u0mewmmn4lcu1ecv6p'
const API_USERID = 'EIT7ZL9V'

fetch('https://www.triposo.com/api/20210317/poi.json?location_id=Tenerife&tag_labels=sightseeing&count=15&fields=id,name,score,intro,tag_labels,location_id,location_ids&order_by=-score&account=EIT7ZL9V&token=f8y1ib32vbgtx6u0mewmmn4lcu1ecv6p')
    .then(response => response.json())
    .then(data => console.log(data)) 

>>>>>>> a372fa56212090c20704212d93d14a6f2ca0384c
// Weather area starts here

const API_KEY = "d433654d6df58b84a62ed36684155d0e";

var isoCountries = {
    'Afghanistan': 'AF',
    'Aland Islands': 'AX',
    'Albania' : 'AL',
    'Algeria' : 'DZ',
    'American Samoa' : 'AS',
    'Andorra' : 'AD',
    'Angola' : 'AO',
    'Anguilla' : 'AI',
    'Antarctica' : 'AQ',
    'Antigua And Barbuda' : 'AG',
    'Argentina' : 'AR',
    'Armenia' : 'AM',
    'Aruba' : 'AW',
    'Australia' : 'AU',
    'Austria' : 'AT',
    'Azerbaijan' : 'AZ',
    'Bahamas' : 'BS',
    'Bahrain' : 'BH',
    'Bangladesh' : 'BD',
    'Barbados' : 'BB',
    'Belarus' : 'BY',
    'Belgium' : 'BE',
    'Belize' : 'BZ',
    'Benin' : 'BJ',
    'Bermuda' : 'BM',
    'Bhutan' : 'BT',
    'Bolivia' : 'BO',
    'Bosnia And Herzegovina' : 'BA',
    'Botswana' : 'BW',
    'Bouvet Island' : 'BV',
    'Brazil' : 'BR',
    'British Indian Ocean Territory' : 'IO',
    'Brunei Darussalam' : 'BN',
    'Bulgaria' : 'BG',
    'Burkina Faso' : 'BF',
    'Burundi' : 'BI',
    'Cambodia' : 'KH',
    'Cameroon' : 'CM',
    'Canada' : 'CA',
    'Cape Verde' : 'CV',
    'Cayman Islands' : 'KY',
    'Central African Republic' : 'CF',
    'Chad' : 'TD',
    'Chile' : 'CL',
    'China' : 'CN',
    'Christmas Island' : 'CX',
    'Cocos (Keeling) Islands' : 'CC',
    'Colombia' : 'CO',
    'Comoros' : 'KM',
    'Congo' : 'CG',
    'Congo Democratic Republic' : 'CD',
    'Cook Islands' : 'CK',
    'Costa Rica' : 'CR',
    'Cote D\'Ivoire' : 'CI',
    'Croatia' : 'HR',
    'Cuba' : 'CU',
    'Cyprus' : 'CY',
    'Czech Republic' : 'CZ',
    'Denmark' : 'DK',
    'Djibouti' : 'DJ',
    'Dominica' : 'DM',
    'Dominican Republic' : 'DO',
    'Ecuador' : 'EC',
    'Egypt' : 'EG',
    'El Salvador' : 'SV',
    'Equatorial Guinea' : 'GQ',
    'Eritrea' : 'ER',
    'Estonia' : 'EE',
    'Ethiopia' : 'ET',
    'Falkland Islands (Malvinas)' : 'FK',
    'Faroe Islands' : 'FO',
    'Fiji' : 'FJ',
    'Finland' : 'FI',
    'France' : 'FR',
    'French Guiana' : 'GF',
    'French Polynesia' : 'PF',
    'French Southern Territories' : 'TF',
    'Gabon' : 'GA',
    'Gambia' : 'GM',
    'Georgia' : 'GE',
    'Germany' : 'DE',
    'Ghana' : 'GH',
    'Gibraltar' : 'GI',
    'Greece' : 'GR',
    'Greenland' : 'GL',
    'Grenada' : 'GD',
    'Guadeloupe' : 'GP',
    'Guam' : 'GU',
    'Guatemala' : 'GT',
    'Guernsey' : 'GG',
    'Guinea' : 'GN',
    'Guinea-Bissau' : 'GW',
    'Guyana' : 'GY',
    'Haiti' : 'HT',
    'Heard Island & Mcdonald Islands' : 'HM',
    'Holy See (Vatican City State)' : 'VA',
    'Honduras' : 'HN',
    'Hong Kong' : 'HK',
    'Hungary' : 'HU',
    'Iceland' : 'IS',
    'India' : 'IN',
    'Indonesia' : 'ID',
    'Iran Islamic Republic Of' : 'IR',
    'Iraq' : 'IQ',
    'Ireland' : 'IE',
    'Isle Of Man' : 'IM',
    'Israel' : 'IL',
    'Italy' : 'IT',
    'Jamaica' : 'JM',
    'Japan' : 'JP',
    'Jersey' : 'JE',
    'Jordan' : 'JO',
    'Kazakhstan' : 'KZ',
    'Kenya' : 'KE',
    'Kiribati' : 'KI',
    'Korea' : 'KR',
    'Kuwait' : 'KW',
    'Kyrgyzstan' : 'KG',
    'Lao People\'s Democratic Republic' : 'LA',
    'Latvia' : 'LV',
    'Lebanon' : 'LB',
    'Lesotho' : 'LS',
    'Liberia' : 'LR',
    'Libyan Arab Jamahiriya' : 'LY',
    'Liechtenstein' : 'LI',
    'Lithuania' : 'LT',
    'Luxembourg' : 'LU',
    'Macao' : 'MO',
    'Macedonia' : 'MK',
    'Madagascar' : 'MG',
    'Malawi' : 'MW',
    'Malaysia' : 'MY',
    'Maldives' : 'MV',
    'Mali' : 'ML',
    'Malta' : 'MT',
    'Marshall Islands' : 'MH',
    'Martinique' : 'MQ',
    'Mauritania' : 'MR',
    'Mauritius' : 'MU',
    'Mayotte' : 'YT',
    'Mexico' : 'MX',
    'Micronesia Federated States Of' : 'FM',
    'Moldova' : 'MD',
    'Monaco' : 'MC',
    'Mongolia' : 'MN',
    'Montenegro' : 'ME',
    'Montserrat' : 'MS',
    'Morocco' : 'MA',
    'Mozambique' : 'MZ',
    'Myanmar' : 'MM',
    'Namibia' : 'NA',
    'Nauru' : 'NR',
    'Nepal' : 'NP',
    'Netherlands' : 'NL',
    'Netherlands Antilles' : 'AN',
    'New Caledonia' : 'NC',
    'New Zealand' : 'NZ',
    'Nicaragua' : 'NI',
    'Niger' : 'NE',
    'Nigeria' : 'NG',
    'Niue' : 'NU',
    'Norfolk Island' : 'NF',
    'Northern Mariana Islands' : 'MP',
    'Norway' : 'NO',
    'Oman' : 'OM',
    'Pakistan' : 'PK',
    'Palau' : 'PW',
    'Palestinian Territory Occupied' : 'PS',
    'Panama' : 'PA',
    'Papua New Guinea' : 'PG',
    'Paraguay' : 'PY',
    'Peru' : 'PE',
    'Philippines' : 'PH',
    'Pitcairn' : 'PN',
    'Poland' : 'PL',
    'Portugal' : 'PT',
    'Puerto Rico' : 'PR',
    'Qatar' : 'QA',
    'Reunion' : 'RE',
    'Romania' : 'RO',
    'Russian Federation' : 'RU',
    'Rwanda' : 'RW',
    'Saint Barthelemy' : 'BL',
    'Saint Helena' : 'SH',
    'Saint Kitts And Nevis' : 'KN',
    'Saint Lucia' : 'LC',
    'Saint Martin' : 'MF',
    'Saint Pierre And Miquelon' : 'PM',
    'Saint Vincent And Grenadines' : 'VC',
    'Samoa' : 'WS',
    'San Marino' : 'SM',
    'Sao Tome And Principe' : 'ST',
    'Saudi Arabia' : 'SA',
    'Senegal' : 'SN',
    'Serbia' : 'RS',
    'Seychelles' : 'SC',
    'Sierra Leone' : 'SL',
    'Singapore' : 'SG',
    'Slovakia' : 'SK',
    'Slovenia' : 'SI',
    'Solomon Islands' : 'SB',
    'Somalia' : 'SO',
    'South Africa' : 'ZA',
    'South Georgia And Sandwich Isl.' : 'GS',
    'Spain' : 'ES',
    'Sri Lanka' : 'LK',
    'Sudan' : 'SD',
    'Suriname' : 'SR',
    'Svalbard And Jan Mayen' : 'SJ',
    'Swaziland' : 'SZ',
    'Sweden' : 'SE',
    'Switzerland' : 'CH',
    'Syrian Arab Republic' : 'SY',
    'Taiwan' : 'TW',
    'Tajikistan' : 'TJ',
    'Tanzania' : 'TZ',
    'Thailand' : 'TH',
    'Timor-Leste' : 'TL',
    'Togo' : 'TG',
    'Tokelau' : 'TK',
    'Tonga' : 'TO',
    'Trinidad And Tobago' : 'TT',
    'Tunisia' : 'TN',
    'Turkey' : 'TR',
    'Turkmenistan' : 'TM',
    'Turks And Caicos Islands' : 'TC',
    'Tuvalu' : 'TV',
    'Uganda':'UG',
    'Ukraine':'UA',
    'United Arab Emirates': 'AE',
    'United Kingdom': 'GB',
    'USA': 'US',
    'United States Outlying Islands': 'UM',
    'Uruguay': 'UY',
    'Uzbekistan': 'UZ',
    'Vanuatu': 'VU',
    'Venezuela': 'VE',
    'Viet Nam': 'VN',
    'Virgin Islands British': 'VG',
    'Virgin Islands U.S.': 'VI',
    'Wallis And Futuna': 'WF',
    'Western Sahara': 'EH',
    'Yemen': 'YE',
    'Zambia': 'ZM',
    'Zimbabwe': 'ZW',
};

// Converts the country name to the country code
function getCountryCode (countryName) {
    if (isoCountries.hasOwnProperty(countryName)) {
        return isoCountries[countryName];
    }
}

// Call the API to convert the city and country code to coordinates
function fecthCoords(city, country, state) {
    let countryCode = getCountryCode(country)
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${countryCode}&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => displayCoords(data));
}


// Pulls the coordinates from the above API response and calls the next weather forecast API 
function displayCoords(data) {
    const {lon} = data[0]
    const {lat} = data[0]
    let TOP_TRIP_API_COORDS = `https://www.triposo.com/api/20210317/poi.json?annotate=distance:${lat},${lon}&tag_labels=topattractions|do&distance=<10000&fields=id,name,score,intro,tag_labels&order_by=-score&account=EIT7ZL9V&token=f8y1ib32vbgtx6u0mewmmn4lcu1ecv6p`
    let RESTAURANT_API_COORDS = `https://www.triposo.com/api/20210317/poi.json?annotate=distance:${lat},${lon}&tag_labels=eatingout&count=10&distance=<1000&fields=id,name,score,intro,tag_labels,best_for&order_by=-score&account=EIT7ZL9V&token=f8y1ib32vbgtx6u0mewmmn4lcu1ecv6p`
    let HOTEL_API_COORDS = `https://www.triposo.com/api/20210317/poi.json?annotate=distance:${lat},${lon}&tag_labels=hotels&count=10&distance=<1000&fields=id,name,score,intro,tag_labels,best_for&order_by=-score&account=EIT7ZL9V&token=f8y1ib32vbgtx6u0mewmmn4lcu1ecv6p`
    //let CULTURAL_TRIP_API_COORDS = `https://www.triposo.com/api/20210317/poi.json?annotate=distance:${lat},${lon}&tag_labels=architecture|architectural_style|character-World_heritage|culture|forts|markets|museums|person_architect&distance=<10000&fields=id,name,score,intro,tag_labels&order_by=-score&account=EIT7ZL9V&token=f8y1ib32vbgtx6u0mewmmn4lcu1ecv6p`
    //let NATURE_TRIP_API_COORDS = `https://www.triposo.com/api/20210317/poi.json?annotate=distance:${lat},${lon}&tag_labels=national_park|island|relaxinapark|zoos|exploringnature|beaches|camping|poitype-Park|hiking|poitype-Lake|wildlife&distance=<10000&fields=id,name,score,intro,tag_labels&order_by=-score&account=EIT7ZL9V&token=f8y1ib32vbgtx6u0mewmmn4lcu1ecv6p`
    let WEATHER_API_COORDS = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`
    fetchWeather(WEATHER_API_COORDS);
    fetchTopAttractions(TOP_TRIP_API_COORDS);
    fetchFood(RESTAURANT_API_COORDS);
    fetchHotels(HOTEL_API_COORDS);
}

// Weather forecast api
function fetchWeather(api_url) {
    fetch(api_url)
    .then((response) => response.json())
    .then((data) => displayWeather(data)); 
}
 // this gets the weekday for us from the API response
function weekday(unixDate) {
    let milliseconds = unixDate * 1000
    let dateObject = new Date(milliseconds)
    let humanDateFormat = dateObject.toLocaleString()
    return dateObject.toLocaleString("en-US", {weekday: "short"}).toUpperCase()
}
 // this gets the date for the week forcasted from the API response
function date(unixDate) {
    let milliseconds = unixDate * 1000
    let dateObject = new Date(milliseconds)
    let humanDateFormat = dateObject.toLocaleString()
    return dateObject.toLocaleString("en-US", {day: "numeric"})
}

// Displays each days weather 
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

const API_TOKEN = 'f8y1ib32vbgtx6u0mewmmn4lcu1ecv6p'
const API_USERID = 'EIT7ZL9V'


// provides the top attractions
function fetchTopAttractions(api_url) {
    fetch(api_url)
    .then((response) => response.json())
    .then((data) => displayAttractions(data))
}

function fetchFood(api_url) {
    fetch(api_url)
    .then((response) => response.json())
    .then((data) => displayRestaurants(data))
}

function fetchHotels(api_url) {
    fetch(api_url)
    .then((response) => response.json())
    .then((data) => displayHotels(data))
}

//topAttBtn.addEventListener("click", displayAttractions(pleaseWork));
//culturalBtn.addEventListener("click", showAttr);
//natureBtn.addEventListener("click", showAttr);


// provides the outdoor attractions
// function fetchNatureAttractions(api_url) {
//     fetch(api_url)
//     .then((response) => response.json())
//     .then((data) => console.log(data)); 
// }
// // provides the cultural attractions
// function fetchCulturalAttractions(api_url) {
//     fetch(api_url)
//     .then((response) => response.json())
//     .then((data) => console.log(data)); 
// }

// Displays attractions from the API
function displayAttractions(data) {
    console.log(data)
    document.querySelector("#title0").innerText = data.results[0].name;
    document.querySelector("#info0").innerText = data.results[0].intro;

    document.querySelector("#title1").innerText = data.results[1].name;
    document.querySelector("#info1").innerText = data.results[1].intro; 

    document.querySelector("#title2").innerText = data.results[2].name; 
    document.querySelector("#info2").innerText = data.results[2].intro; 

    document.querySelector("#title3").innerText = data.results[3].name; 
    document.querySelector("#info3").innerText = data.results[3].intro; 

    document.querySelector("#title4").innerText = data.results[4].name; 
    document.querySelector("#info4").innerText = data.results[4].intro; 

    document.querySelector("#title5").innerText = data.results[5].name; 
    document.querySelector("#info5").innerText = data.results[5].intro; 

    document.querySelector("#title6").innerText = data.results[6].name; 
    document.querySelector("#info6").innerText = data.results[6].intro;
}

function displayRestaurants(data) {
    console.log(data)
    document.querySelector("#foodTitle0").innerText = data.results[0].name;
    document.querySelector("#foodInfo0").innerText = data.results[0].intro;

    document.querySelector("#foodTitle1").innerText = data.results[1].name;
    document.querySelector("#foodInfo1").innerText = data.results[1].intro; 

    document.querySelector("#foodTitle2").innerText = data.results[2].name; 
    document.querySelector("#foodInfo2").innerText = data.results[2].intro; 

    document.querySelector("#foodTitle3").innerText = data.results[3].name; 
    document.querySelector("#foodInfo3").innerText = data.results[3].intro; 

    document.querySelector("#foodTitle4").innerText = data.results[4].name; 
    document.querySelector("#foodInfo4").innerText = data.results[4].intro; 

    document.querySelector("#foodTitle5").innerText = data.results[5].name; 
    document.querySelector("#foodInfo5").innerText = data.results[5].intro; 

    document.querySelector("#foodTitle6").innerText = data.results[6].name; 
    document.querySelector("#foodInfo6").innerText = data.results[6].intro;
}

function displayHotels(data) {
    console.log(data)
    document.querySelector("#hotelTitle0").innerText = data.results[0].name;
    document.querySelector("#hotelInfo0").innerText = data.results[0].intro;

    document.querySelector("#hotelTitle1").innerText = data.results[1].name;
    document.querySelector("#hotelInfo1").innerText = data.results[1].intro; 

    document.querySelector("#hotelTitle2").innerText = data.results[2].name; 
    document.querySelector("#hotelInfo2").innerText = data.results[2].intro; 

    document.querySelector("#hotelTitle3").innerText = data.results[3].name; 
    document.querySelector("#hotelInfo3").innerText = data.results[3].intro; 

    document.querySelector("#hotelTitle4").innerText = data.results[4].name; 
    document.querySelector("#hotelInfo4").innerText = data.results[4].intro; 

    document.querySelector("#hotelTitle5").innerText = data.results[5].name; 
    document.querySelector("#hotelInfo5").innerText = data.results[5].intro; 

    document.querySelector("#hotelTitle6").innerText = data.results[6].name; 
    document.querySelector("#hotelInfo6").innerText = data.results[6].intro;
}


  
