/*
=================
Select Elements of Input section
=================
*/

// main-page
const mainPage = document.getElementById("main-page");

// result-page
const resultPage = document.getElementById("result-page");

// Google Map
const gmap = document.getElementById("map");

// Select Button
const searchBtn = document.querySelector(".search-btnn");

//Select image
const searchSection = document.querySelector(".search-section");

// Select Input
var input = document.getElementById("searchInput");

// Select a value of search input
var theValue;
var res;

// Create a destiny element
let destiny;

// Create a destiny country
let country;

// Loading Page Element
const loading = document.querySelector(".loading");

// grid element in Unsplash API
const list = document.querySelector(".grid");

/*
=============
Background Media Queries
=============
*/
const mediaQuery = window.matchMedia("(min-width: 789px)");

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log("Media Query Matched!");
    searchSection.style.background = `url('./images/summer/${randomNumber}.jpeg') center/cover no-repeat`;
  } else {
    searchSection.style.background = `#02122C`;
  }
}

// Random number from 1 - 10 for Random Background Image
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);

/*
=============
Gooogle Map Implement
=============
*/

var _0x11f9 = [
  "\x41\x49\x7A\x61\x53\x79\x42\x6E\x42\x4A\x5A\x44\x68\x46\x5A\x6E\x76\x72\x57\x50\x4F\x4F\x38\x4D\x51\x56\x57\x5F\x6D\x72\x39\x33\x6C\x72\x49\x6A\x42\x35\x41",
  "\x73\x63\x72\x69\x70\x74",
  "\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74",
  "\x73\x72\x63",
  "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x61\x70\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x61\x70\x69\x73\x2E\x63\x6F\x6D\x2F\x6D\x61\x70\x73\x2F\x61\x70\x69\x2F\x6A\x73\x3F\x6B\x65\x79\x3D",
  "\x26\x6C\x69\x62\x72\x61\x72\x69\x65\x73\x3D\x70\x6C\x61\x63\x65\x73\x26\x63\x61\x6C\x6C\x62\x61\x63\x6B\x3D\x69\x6E\x69\x74\x4D\x61\x70",
  "\x61\x73\x79\x6E\x63",
];

let gmapKey = _0x11f9[0];
var script = document[_0x11f9[2]](_0x11f9[1]);
script[_0x11f9[3]] = `${_0x11f9[4]}${gmapKey}${_0x11f9[5]}`;
script[_0x11f9[6]] = true;

// Attach your callback function to the `window` object
window.initMap = function () {
  // The location of NYC
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.78343, lng: -73.96625 },
    zoom: 13,
  });

  // Input field where you search a city
  // var input = document.getElementById("searchInput");
  //   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Autocomplete
  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo("bounds", map);

  // The Marker
  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29),
  });

  //autocomplete eventListener
  autocomplete.addListener("place_changed", function () {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    theValue = input.value;
    res = theValue.split(",");
    /*
    console.log(res);
    console.log(res[0]);
    console.log(theValue);
    console.log(input.value);
    */

    // If the place doesn't have a geometry, alert a message
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
      map.setZoom(10);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    // Marker icon, size and location
    marker.setIcon({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35),
    });
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    //   Join marker window names
    var address = "";
    if (place.address_components) {
      address = [
        (place.address_components[0] &&
          place.address_components[0].short_name) ||
          "",
        (place.address_components[1] &&
          place.address_components[1].short_name) ||
          "",
        (place.address_components[2] &&
          place.address_components[2].short_name) ||
          "",
      ].join(" ");
    }

    //   styling marker window
    infowindow.setContent(
      "<div><strong>" + place.name + "</strong><br>" + address
    );
    infowindow.open(map, marker);
  });
};

// Append the 'script' element to 'head'
document.head.appendChild(script);

/*
=============
preload mediawiki to prevent latency
=============
*/

function startMediaWiki() {
  const url = `https://ancient-refuge-79913.herokuapp.com/https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exlimit=max&explaintext&exintro&titles=seoul&redirects=`;
  fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      let page = data.query.pages;
      let pageId = Object.keys(data.query.pages);
      let aboutPage = page[pageId];
      // console.log(aboutPage);

      // City Information in String
      let aboutCity = aboutPage.extract;
    });
}

startMediaWiki();

/*
============
Search Button Click Event
============
*/

searchBtn.addEventListener("click", function (e) {
  function searchBtnEvent() {
    e.preventDefault();
    // Hide Main Page
    mainPage.classList.add("hide");

    // Show Loading page and then Result page
    loading.classList.remove("hide");
    setTimeout(function () {
      resultPage.classList.remove("hide");
      loading.classList.add("hide");
    }, 2500);

    destiny = res[0];
    country = res[res.length - 1];
    let newCountry = country.slice(1, country.length);
    let state = res[1];

    // Add destinationname into result-page.
    destinationName.textContent = `${destiny}, ${newCountry}`;

    // Call mediawiki API
    fetchMediaWiki();

    // Call weather API functions
    fecthCoords(destiny, newCountry, state);

    // Call unplash API
    unsplash();
  }

  if (input.value === "") {
    input.placeholder = "Find a city ";
    alert("Find a city first");
    // input.classList.add("warning");
  } else {
    searchBtnEvent();
  }
});

/*
=============
Fetch Mediawiki API
=============
*/

function fetchMediaWiki() {
  const url = `https://ancient-refuge-79913.herokuapp.com/https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exlimit=max&explaintext&exintro&titles=${destiny}&redirects=`;
  fetch(url)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      let page = data.query.pages;
      let pageId = Object.keys(data.query.pages);
      let aboutPage = page[pageId];

      // City Information in String
      let aboutCity = aboutPage.extract;

      // Split the the city information
      let string = aboutCity.split(" (");

      // Get the City name
      let theCity = string[0];

      // Get the Rest city name
      let restCity = string.slice(1, string.length);
      let restCity2 = [];

      for (let i = 0; i < string.length - 1; i++) {
        let pushh = [restCity[i]];
        pushh.unshift("(");

        let makeStr = pushh.join(" ");
        restCity2.push(makeStr);
      }
      let theRest = restCity2.toString();

      // Put the city name and description into HTML
      destinationCity.textContent = theCity;
      destinationCity.classList.add("bold");
      destinationCityRest.textContent = theRest;
    });
}

/*
=============
Fetch unsplash API
=============
*/

function unsplash() {
  var _0x5886 = [
    "\x31\x61\x66\x4E\x6A\x43\x62\x36\x55\x37\x5A\x48\x45\x32\x39\x42\x32\x4A\x64\x33\x75\x37\x65\x35\x57\x74\x6E\x6A\x34\x41\x49\x52\x49\x78\x6A\x2D\x65\x76\x33\x36\x77\x69\x4D",
    "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x75\x6E\x73\x70\x6C\x61\x73\x68\x2E\x63\x6F\x6D\x2F\x73\x65\x61\x72\x63\x68\x2F\x70\x68\x6F\x74\x6F\x73\x2F\x3F\x63\x6C\x69\x65\x6E\x74\x5F\x69\x64\x3D",
    "\x26\x71\x75\x65\x72\x79\x3D",
    "",
    "\x6C\x6F\x67",
  ];
  const yes = _0x5886[0];
  const url = `${_0x5886[1]}${yes}${_0x5886[2]}${destiny}${_0x5886[3]}`;

  //   Make a request to API
  fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
      else alert("Wrong url");
    })
    .then((data) => {
      createImagesArray(data);
    });
}

function createImagesArray(data) {
  const imageNodes = [];
  for (let i = 3; i < 9; i++) {
    imageNodes[i] = document.createElement("div");
    imageNodes[i].className = "imgg";
    imageNodes[i].style.backgroundImage =
      "url(" + data.results[i].urls.regular + ")";
    imageNodes[i].addEventListener("dblclick", function () {
      window.open(data.results[i].links.download, "_blank");
    });
    list.appendChild(imageNodes[i]);
  }
}

/*
=============
Recommendation 
=============
*/

function recommendations() {
  const recommendedDestinations = [
    {
      city: "Capri",
      country: "Italy",
      image: "images/recommendations/capri2.jpg",
    },
    {
      city: "Lisbon",
      country: "Portugal",
      image: "images/recommendations/lisbon.jpg",
    },
    {
      city: "Tahiti",
      country: "French Polynesia",
      image: "images/recommendations/tahiti.jpg",
    },
    {
      city: "Vienna",
      country: "Austria",
      image: "images/recommendations/vienna.jpg",
    },
    {
      city: "Chiapas",
      country: "Mexico",
      image: "images/recommendations/chiapas.jpg",
    },
    {
      city: "Queenstown",
      country: "New Zealand",
      image: "images/recommendations/queenstown.jpg",
    },
    {
      city: "Tampa, FL",
      country: "USA",
      image: "images/recommendations/tampa.jpg",
    },
    {
      city: "Tasmania",
      country: "Australia",
      image: "images/recommendations/tasmania.jpg",
    },
    {
      city: "Siargao Island",
      country: "Phillipines",
      image: "images/recommendations/island.jpg",
    },
    {
      city: "Havana",
      country: "Cuba",
      image: "images/recommendations/havana.jpg",
    },
    {
      city: "Cusco",
      country: "Peru",
      image: "images/recommendations/cusco.jpg",
    },
    {
      city: "Hanoi",
      country: "Vietnam",
      image: "images/recommendations/hanoi.jpg",
    },
    {
      city: "Bali",
      country: "Indonesia",
      image: "images/recommendations/bali.jpg",
    },
    {
      city: "Banff",
      country: "Canada",
      image: "images/recommendations/banff.jpg",
    },
    {
      city: "Bangkok",
      country: "Thailand",
      image: "images/recommendations/bangkok.jpg",
    },
    {
      city: "Kathmandu",
      country: "Nepal",
      image: "images/recommendations/kathmandu.jpg",
    },
    {
      city: "London",
      country: "United Kingdom",
      image: "images/recommendations/london.jpg",
    },
  ];
  /* number of cards available on the homepage for recommended destinations*/
  const destinationCards = 6;

  /* length of the list of recommended destinations*/
  const destinationLength = recommendedDestinations.length;

  let numberArray = [];
  /* Function to create a set of random numbers within the range of current travel destinations available*/
  function myRandomInts(quantity, max) {
    let set = new Set();
    while (set.size < quantity) {
      set.add(Math.floor(Math.random() * max));
    }
    return set;
  }

  /* variable holding the set of numbers */
  let setOfRandomNumbers = myRandomInts(destinationCards, destinationLength);

  /* function that iterates over each value in the set created by myRandomInts and assigns each value to a card*/
  function getDestinationFromList(setOfRandomNumbers) {
    const setIter = setOfRandomNumbers[Symbol.iterator]();
    let ObjForCard1 = setIter.next().value;
    // console.log(ObjForCard1);
    document.getElementById("image1").src =
      recommendedDestinations[ObjForCard1].image;
    document.getElementById("cityName1").innerText =
      recommendedDestinations[ObjForCard1].city;
    document.getElementById("countryName1").innerText =
      recommendedDestinations[ObjForCard1].country;
    let ObjForCard2 = setIter.next().value;
    // console.log(ObjForCard2);
    document.getElementById("image2").src =
      recommendedDestinations[ObjForCard2].image;
    document.getElementById("cityName2").innerText =
      recommendedDestinations[ObjForCard2].city;
    document.getElementById("countryName2").innerText =
      recommendedDestinations[ObjForCard2].country;
    let ObjForCard3 = setIter.next().value;
    // console.log(ObjForCard3);
    document.getElementById("image3").src =
      recommendedDestinations[ObjForCard3].image;
    document.getElementById("cityName3").innerText =
      recommendedDestinations[ObjForCard3].city;
    document.getElementById("countryName3").innerText =
      recommendedDestinations[ObjForCard3].country;
    let ObjForCard4 = setIter.next().value;
    // console.log(ObjForCard4);
    document.getElementById("image4").src =
      recommendedDestinations[ObjForCard4].image;
    document.getElementById("cityName4").innerText =
      recommendedDestinations[ObjForCard4].city;
    document.getElementById("countryName4").innerText =
      recommendedDestinations[ObjForCard4].country;
    let ObjForCard5 = setIter.next().value;
    // console.log(ObjForCard5);
    document.getElementById("image5").src =
      recommendedDestinations[ObjForCard5].image;
    document.getElementById("cityName5").innerText =
      recommendedDestinations[ObjForCard5].city;
    document.getElementById("countryName5").innerText =
      recommendedDestinations[ObjForCard5].country;
    let ObjForCard6 = setIter.next().value;
    // console.log(ObjForCard6);
    document.getElementById("image6").src =
      recommendedDestinations[ObjForCard6].image;
    document.getElementById("cityName6").innerText =
      recommendedDestinations[ObjForCard6].city;
    document.getElementById("countryName6").innerText =
      recommendedDestinations[ObjForCard6].country;
  }
  /* calling function to update destinations*/
  getDestinationFromList(setOfRandomNumbers);
}
recommendations();

/*
==================
Result page
==================
*/

// select the city-name elements
const destinationName = document.querySelector(".destination-name");

// select the city-name element in the attractions section
const cityName = document.querySelector(".cityName");
// select mediawiki destination
const destinationInfo = document.querySelector(".mediawiki-destination");
const destinationCity = document.querySelector(".mediawiki-city");
const destinationCityRest = document.querySelector(".mediawiki-city-rest");
