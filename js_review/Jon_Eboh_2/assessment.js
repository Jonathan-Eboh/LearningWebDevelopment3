/******************************************************************************
** Write a function royalWe(sentence) that returns an string where every word
**'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
** word 'my' is replaced with 'our', and every word 'me' is replaced with "us"
** Examples:
** royalWe("I want to go to the store") => "we want to go to the store"
** royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
** royalWe("This is mine") => "This is ours"
** royalWe("Jump for my love") => "Jump for our love"
*/

"use strict"

function royalWe(sentence){
    // your code here...
    //use split and join
    //replace "I" with "we"
    //replace "mine" with "ours"
    //replace "my" with "our"
    //replace "me" with "us"

    let royalI= "I";
    let royalMine = "mine";
    let royalMy= "my";
    let royalMe= "me";

    let royalArr = sentence.split(" ");//array w/ each ele is a word


    //transforms our string
    for (let i = 0; i < royalArr.length; i++) {
        if (royalArr[i] === royalI) {
            royalArr[i] = "we";
        }else if (royalArr[i] === royalMine) {
            royalArr[i] = "ours";
        }else if (royalArr[i] === royalMy) {
            royalArr[i] = "our";
        }else if (royalArr[i] === royalMe) {
            royalArr[i] = "us";
        }
    }
    let royalString = royalArr.join(" ");
    return royalString;
}



console.log(royalWe("This is mine")); //=> "This is ours"
console.log(royalWe("Jump for my love")); //=> "Jump for our love"

/******************************************************************************
** Write a function elementCount(array) that returns a object. Each key
** corresponds to an element in the array and the value corresponds to how many
** times that element appears in the array
** Example:
** elementCount(["a", "a", "b", "b"]) => { "a" : 2, "b" : 2 }
*/

function elementCount(array){
    // your code here...
    let countObj = {};
    for (let i = 0; i < array.length; i++) {
        if (countObj[array[i]] ===  undefined) { //if true this means it is not currently there
            countObj[array[i]] = 1; //So we initialize it to 1
        }else{
            countObj[array[i]] += 1;//otherwise its already there and we add one to its count
        }
    }
    return  countObj;
}

console.log(elementCount(["a", "a", "b", "b"])); //=> { "a" : 2, "b" : 2 }

/******************************************************************************
** Write a function reverseRange(start, end) that returns an array that contains all
** numbers between 'start' and 'end' (exclusive) in reverse-sequential order.
** Don't use Array#reverse.
** Examples:
** range(2,7) => [6, 5, 4, 3]
** range(4,2) => []
*/

function reverseRange(start, end){
    // your code here...
    let reverseArr = [];
    for (let i = end - 1; i > start; i--){

        reverseArr.push(i)
    }
    return reverseArr;
}


console.log(reverseRange(2,7)); //=> [6, 5, 4, 3]
console.log(reverseRange(4,2)); //=> []

/******************************************************************************
** Write a function reverseSentence(sentence) that returns a string where all the
** words in the input sentence are reversed. Don't use Array#reverse.
** Examples:
** reverseSentence("Go to the store") => "store the to Go"
** reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*/
function reverseSentence(sentence){
    // your code here...

    let sentenceArr = sentence.split(" ")
    let newSentence = [];
    for (let i = sentenceArr.length - 1; i >= 0 ; i--) {
        newSentence.push(sentenceArr[i]);
    }
    let reversedSentence = newSentence.join(" ");
    return reversedSentence;

}

console.log(reverseSentence("Go to the store")); //=> "store the to Go"
console.log(reverseSentence("Jump, jump for joy")); //=> "joy for jump Jump,"

/******************************************************************************
** Write a function magicNumbers(max) that returns an array of numbers up to
** the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.
** Example:
** magicNumbers(20) => [4, 6, 8, 16, 18]
*/
function magicNumbers(max){
    // your code here...
    let maxArr = [];
    for (let i = 0; i < max; i++) {
        if (i % 4 === 0 && i % 6 === 0) {
            continue;
        }else if (i % 4 === 0 ) {
            maxArr.push(i);
        }else if( i % 6 === 0 ){
            maxArr.push(i);
        }
    }
    return maxArr;
}

console.log(magicNumbers(20)); //=> [4, 6, 8, 16, 18]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = {
    reverseRange : reverseRange,
    royalWe : royalWe,
    elementCount : elementCount,
    reverseSentence : reverseSentence,
    magicNumbers : magicNumbers
};
