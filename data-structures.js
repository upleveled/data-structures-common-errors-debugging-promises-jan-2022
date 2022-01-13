// Numbers
const number = 1;
const floatingPointNumber = 1.1;
const stringAsNumber = Number('1.1');
const notANumber = 123 / 'asdf'; // NaN - but it's a number!

// Strings
const userName = 'Karl';
const singleLetter = 'a'; // Characters
const usersObject = "Karl's mug";
// template strings can have:
// - newlines
// - values used within them (interpolation)
const templateString = `${userName}
has
a
${usersObject}`;
const numberAsAString = number.toString();
const numberAsAString2 = String(number);

// Booleans
const userHasDog = true;
const stringAsBoolean = Boolean(userName);
const stringAsBooleanMaybeNotAsNice = !!userName;

// Undefined
let y;
const yy = undefined;
const obj = {};
console.log(obj.x); // undefined

// Arrays
const animals = ['cat'];
const animalsNew = [...animals, 'dog']; // Immutable (good!): Add to the end
animals.push('dog'); // Mutable (can be problematic): Add to the end
animals[animals.length] = 'octocat'; // Mutable (can be problematic): Add to the end
const animalsNew = ['fish', ...animals]; // Immutable (good!): Add to the end
animals.unshift('fish'); // Mutable (can be problematic): Add to the beginning

// Objects
const user = {
  name: 'karl', // property with a key and a value
  job: 'teacher',
  animals: [],
};
console.log(user.job); // accessing a property
console.log(user['job']); // accessing a property
user.veggies = []; // creating a new property on an object

const dynamicPropertyName = 'name';
console.log(user[dynamicPropertyName]); // accessing a dynamic property

// Functions
// - name after function keyword and a space
// - parameters are in parentheses (parameters are values the function needs)
function addAnimalToUser(userToModify, animalName) {
  userToModify.animals.push(animalName);
  // also the same:
  // user['animals'].push(animalName)
  console.log(userToModify);
}

addAnimalToUser(user, 'rabbit');
addAnimalToUser(user, 'alligator');

function sum(a, b) {
  const result = a + b;
  return result;
}

const sumArrow = (a, b) => {
  const result = a + b;
  return result;
};

// With the concise body, you can leave out the curly brackets and the return keyword
const sumArrowConciseBody = (a, b) => a + b;

const theNumberThree = sum(1, 2);
console.log(`this is the number three: ${theNumberThree}`);

// Classes
class User {
  name = 'Stefan';
}
const user2 = new User();

// Symbols - not super useful a lot of the time
let newSymbol = Symbol();
