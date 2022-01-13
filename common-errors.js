console.log(asdf); // ReferenceError: asdf is not defined
// Option 1: Log out a string instead
// console.log('asdf');

// Option 2: Create a variable
// const asdf = 1;

// Option 3: Import the library
// import asdf from 'asdf';

const obj = { name: 'k' };
obj(); // TypeError: Object is not a function
obj.name('j'); // TypeError: obj2.name is not a function

// obj.name = 'j'
