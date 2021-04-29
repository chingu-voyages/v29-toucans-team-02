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
        console.log(ObjForCard1);
        document.getElementById("image1").src = recommendedDestinations[ObjForCard1].image;
        document.getElementById("cityName1").innerText = recommendedDestinations[ObjForCard1].city;
        document.getElementById("countryName1").innerText = recommendedDestinations[ObjForCard1].country;
        let ObjForCard2 = setIter.next().value
        console.log(ObjForCard2);
        document.getElementById("image2").src = recommendedDestinations[ObjForCard2].image;
        document.getElementById("cityName2").innerText = recommendedDestinations[ObjForCard2].city;
        document.getElementById("countryName2").innerText = recommendedDestinations[ObjForCard2].country;
        let ObjForCard3 = setIter.next().value
        console.log(ObjForCard3);
        document.getElementById("image3").src = recommendedDestinations[ObjForCard3].image;
        document.getElementById("cityName3").innerText = recommendedDestinations[ObjForCard3].city;
        document.getElementById("countryName3").innerText = recommendedDestinations[ObjForCard3].country;
        let ObjForCard4 = setIter.next().value
        console.log(ObjForCard4);
        document.getElementById("image4").src = recommendedDestinations[ObjForCard4].image;
        document.getElementById("cityName4").innerText = recommendedDestinations[ObjForCard4].city;
        document.getElementById("countryName4").innerText = recommendedDestinations[ObjForCard4].country;
        let ObjForCard5 = setIter.next().value
        console.log(ObjForCard5);
        document.getElementById("image5").src = recommendedDestinations[ObjForCard5].image;
        document.getElementById("cityName5").innerText = recommendedDestinations[ObjForCard5].city;
        document.getElementById("countryName5").innerText = recommendedDestinations[ObjForCard5].country;
        let ObjForCard6 = setIter.next().value
        console.log(ObjForCard6);
        document.getElementById("image6").src = recommendedDestinations[ObjForCard6].image;
        document.getElementById("cityName6").innerText = recommendedDestinations[ObjForCard6].city;
        document.getElementById("countryName6").innerText = recommendedDestinations[ObjForCard6].country;
    
}
/* calling function to update destinations*/
getDestinationFromList(setOfRandomNumbers);

