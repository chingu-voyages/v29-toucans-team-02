const recommendedDestinations = [
    {
        city:'Capri',
        country:'Italy',
        image:'images/recommendations/capri2.jpg'
    },
    {
        city:'Lisbon',
        country:'Portugal',
        image:'images/recommendations/lison.jpg'
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
        country:'UK',
        image:'images/recommendations/london.jpg'
    },
]
/* number of cards available on the homepage for recommended destinations*/
const destinationCards = 6;

/* length of the list of recommended destinations*/
const destinationLength = recommendedDestinations.length;

/* Function to create a set of random numbers within the range of current travel destinations available*/
function myRandomInts(quantity, max){
    let set = new Set()
    while(set.size < quantity) {
      set.add(Math.floor(Math.random() * max) + 1)
    }
    return set
  }

console.log(myRandomInts(destinationCards, destinationLength))