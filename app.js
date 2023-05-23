// Object Destructuring 1

// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // ?
// console.log(yearNeptuneDiscovered); // ?

// numPlanets = 8;

yearNeptuneDiscovered = 1846;

// Object Destructuring 2

// let planetFacts = {
//     numPlanets: 8,
//     yearNeptuneDiscovered: 1846,
//     yearMarsDiscovered: 1659
//   };
  
//   let {numPlanets, ...discoveryYears} = planetFacts;
  
//   console.log(discoveryYears); // ?

//   answer
  // {
  // yearNeptuneDiscovered: 1846,
  // yearMarsDiscovered : 1659
  // };

//   Object Destructuring 3

function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  };
  
//   getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
//   getUserData({firstName: "Melissa"}) // ?
//   getUserData({}) // ?

//   answer
'Your name is Alejandro and you like purple!'
'your name is Melissa and you like green!'
'your name is undefined and you like green!'


// Array Destructuring 1

// answer 
First = 'Maya';
Second = 'Marisa';
Third = 'Chi';

// Array Destructuring 2

// answers
raindrops = 'raindrops on Roses';
whiskers = 'whiskers on kittens';

aFewOfMyFavoriteThings = ['bright copper kettles', 'warm woolen mittens', 'brown paper packages tied up with string']

// Array Deconstructuring 3

// answer
numbers = [10,30,20];

// ES2015 Refactoring
var obj = {
  numbers: {
    a: 25,
    b: 22
  }
};

const {numbers: {a, b}} = obj;

// ES5 ArraySwap

var first = 1;
var second = 2;

[second, first] = [first, second];

/* Write an ES2015 Version */

function raceResults([first,second, third, ...rest]){
  return {
    first,
    second,
    third,
    rest,
  }
};