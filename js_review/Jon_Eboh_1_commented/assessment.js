// 4/6 specs passed
// Hey Jon, find my comments marked with `-AZ`
//
// Nice work on your first assessment!
//
// We require students to upload an 100% mocha passing assessment before moving on.
// I have uploaded solution videos to your assessment_1 folder.
// Use these to complete these corrections.
// You will find some simpler ways to solve these problems in the videos, so be
// sure to check them out before moving on!
// Find my comments below.
//
/******************************************************************************
** Write a function range(start, end) that returns an array that contains all
** numbers between 'start' and 'end' in sequential order.
** Examples:
** range(1,4) => [1,2,3,4]
** range(4,2) => []
*/


//My apologies I am new to mocha and only remembered half way through about checking our answers through it
//None of the mocha test read as passed but running the program in atom with the plug in script as well as running the program via node repl produce identical outputs and all the examples , save for one of the questions.


function range(start, end){
  // your code here...
  let sequentialArr = []; // nice use of let, we won't be using it in bootcamp prep,
                          // but you are free to use it in your code. However,
                          // perhaps be consistent, you use `let` some places and `var` other places -AZ
  if (start > end) {  // this condition is not needed -AZ
      return sequentialArr;
  }else {
    // missing indentation below
  for (var i = start; i <= end; i++) {
      sequentialArr.push(i) // missing semicolon -AZ
    }
  }
  return sequentialArr;
}

// Let's say we have the case where start > end, then how many times will the for loop
// iterate? 0 times! So your function will return a still empty array.
//
// Here is how to correctly indent the function:
// function range(start, end){
//   // your code here...
//   let sequentialArr = [];
//   if (start > end) {
//     return sequentialArr;
//   } else {
//     for (var i = start; i <= end; i++) {
//       sequentialArr.push(i)
//     }
//   }
//   return sequentialArr;
// }
// -AZ

console.log(range(1,4));
console.log(range(4,2));

/******************************************************************************
** Write a function unique(array) that returns an array where all the duplicates
** of the input array have been removed; in other words, every element remaining
** is unique.
** Example:
** unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*/

function unique(array){
  // your code here...
  //walk through array
  //check and see if it is in a new array
  //if no
  //push into a  new array
  //if yes
  //do nothing
  //return new array

  let uniqueArr =[];
  for (var i = 0; i < array.length - 1; i++) {  // this for loop does not iterate through the last element -AZ
    // use a single tab to add indentation -AZ
      if (!(uniqueArr.includes(array[i]))) {
          uniqueArr.push(array[i]);
      }
  }
  return uniqueArr;
}

// Correct, small detail is missing, see above.
// Be consistent with indentation, use a single tab to add a level of indent -AZ


console.log(unique([1, 1, 2, 3, 3]));
console.log(unique([2, 2, 3, 3, 4, 4]));
console.log(unique(["a", "a", "b", "b", "c", "c"]));
/******************************************************************************
** Write a function elementCount(array) that returns an object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array.
** Example:
** elementCount(["a", "a", "a", "b"]) => { "a" : 3, "b" : 1 }
*/

function elementCount(array){ //two dimensional array?
    let countObj ={}
  // your code here...
  //walk through array
  //make a new array that contains only contains the unique elements of the first one
  //use a nested for loop to walk through the unique array and iterate a counter by one for every..
  //time it shows up in the previous array
  //then then push that value and the counter variable for it into an obj

 function uniqueCount(array){

    let uniqueArr =[];
    for (var i = 0; i < array.length - 1; i++) {
        if (!(uniqueArr.includes(array[i]))) {
            uniqueArr.push(array[i]);
        }
    }
    return uniqueArr;
  }

elementCountArr = uniqueCount(array); //our array only containing the unique values

for (var i = 0; i < elementCountArr.length; i++) {
    let counter = 0;
    for (var j = 0; j < array.length; j++) {
        if (elementCountArr[i] = array[j]) {
            counter += 1
        }
    }
    // countObj {
    //     elementCountArr[i] : counter
    // }
    countObj[elementCountArr[i]] = counter; //almost this is only saving the last one is it the placing in the loop?
}
    return countObj;
  /*array[i] */ /*:*/ /* How many times array[i] shows up*/
}


// I see what you are trying to do here, however we can solve this simpler if we
// use a characteristic of objects.
// A strategy you can use is initialize an empty object, and iterate through the array.
// As you iterate through even element of the array, we will have 2 distinct cases:
// - if the element is NOT yet a key in the object, so we should INITIALIZE it's count to 1
// - if the element is already a key in the object, so we should INCREMENT it's count by 1
//
// How can we use `undefined` to easily check if a key exists in an object?
// Check out our solution vid -AZ

console.log(elementCount(["a", "a", "a", "b"])); //=> { "a" : 3, "b" : 1 }
/******************************************************************************
** Write a function reverseSentence(sentence) that returns a string where all the
** words in the input sentence are reversed. Don't use Array#reverse.
** Examples:
** reverseSentence("Go to the store") => "store the to Go"
** reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*/
function reverseSentence(sentence){
  // your code here...
  //split the string over the space delimiter
  //then walk through that array backwards and push every elements into a new array
  //the run .join on that new array and save then overwrite the value of  sentence with that new string
  //return that new string

  // Use the var (or let) keyword to declare variables, otherwise something particular
  // will happen in your code that can lead to bugs. More on this later! -AZ
  sentenceArr = sentence.split(" ")
  newSentence = [];
  for (var i = sentenceArr.length - 1; i >= 0 ; i--) {
      newSentence.push(sentenceArr[i]);
  }
  reversedSentence = newSentence.join(" ");
  return reversedSentence;

}

// Nice! Good indentation and style here, remember to use var when declaring variables -AZ

console.log(reverseSentence("Go to the store"));
console.log(reverseSentence("Jump, jump for joy"));

/******************************************************************************
** Write a function fizzBuzz(max) that returns an array of numbers under
** the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.
** Example:
** fizzBuzz(20) => [3, 5, 6, 9, 10, 12, 18]
*/
function fizzBuzz(max){
  // your code here...
  maxArr = []; // var maxArr = ... -AZ
  for (var i = 0; i < max; i++) {
    // extra indentation below -AZ
      if (i === 0) {
          continue; // no need to explicitly handle this case, 0 is divisible
                    // by both 3 and 5 according to the condition in the next condition,
                    // so you will automatically skip it. -AZ
      }else if (i % 3 === 0 && i % 5 === 0) {
          continue;
      }else if (i % 3 === 0) {
          maxArr.push(i);
      }else if (i % 5 === 0) {
          maxArr.push(i);
      }

  }
  return maxArr;
}

// Nice! See my comment above on how to clean up some extra code. -AZ


console.log(fizzBuzz(20)); //=> [3, 5, 6, 9, 10, 12, 18]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
  range : range,
  unique : unique,
  elementCount : elementCount,
  reverseSentence : reverseSentence,
  fizzBuzz : fizzBuzz
};
