// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs');

const sumLines = (inFile) => {
  fs.readFile(inFile, 'utf8', (error, data) =>{
    let sum;
    let placeHolder;
    if (error) {
      console.error(error.stack);
      return;
    }
    placeHolder = data.split('\n');
    for (let i = 0; i < placeHolder.length; i++) {
      if (typeof i === 'number' || i === "") {
        sum += i;
      }else {
        console.error('line not a number');
      }
    }
  });
};

sumLines("../data/blanks.txt");
// const sumLines = (filename) => {
//   // if (error) throw error;
//   callback(filename);
// };

// sumLines('../data/integers.txt');


module.exports = {
  sumLines,
  // callback
};
