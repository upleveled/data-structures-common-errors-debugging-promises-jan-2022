// Asynchronous Operations:
// Actions that you want to perform that will
// take some time to resolve

let result1 = false;
let result2 = false;
let amazingResult1;
let amazingResult2;

setTimeout(
  () => {
    amazingResult1 = 'abc'; // we only get this here
    // console.log(`The first result is ${amazingResult1}`);
    result1 = true;
    if (result1 && result2) {
      console.log(
        `The first result is ${amazingResult1} and the second result is ${amazingResult2}`,
      );
      console.log('Done');
    }
  },
  // We don't know what the timeout is, and cannot create a variable for it
  300,
);

setTimeout(
  () => {
    amazingResult2 = 'def'; // we only get this here
    // console.log(`The second result is ${amazingResult2}`);
    result2 = true;
    if (result1 && result2) {
      console.log(
        `The first result is ${amazingResult1} and the second result is ${amazingResult2}`,
      );
      console.log('Done');
    }
  },
  // We don't know what the timeout is, and cannot create a variable for it
  200,
);

// This could have also been done with a while
