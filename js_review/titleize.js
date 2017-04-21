"use strict"

let punctuation = [";", "!", ".", "?", ",", "-"];

let stopWords = ['the', 'of', 'and', 'but', 'love'];




function containsPunctuation(word) {
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < punctuation.length; j++) {
            if (punctuation.includes(word[i])) {
                return true;
            }
        }
    }
    return false;
}

function isStopWord(word, stopWords) {
  for (var i = 0; i < stopWords.length; i += 1) {
    var stopWord = stopWords[i];

    if ((containsPunctuation2(word)) && (word.indexOf(stopWord) === 0) && (word.length === stopWord.length + 1)) {
      return true;
    } else if (word === stopWord) {
      return true;
    }
  }

  return false;
}


function containsPunctuation2(word) {
    for (let i = 0; i < punctuation.length; i++) {
        if (word.includes(punctuation[i])) {
            return true;
        }
    }
    return false;
}


// console.log(containsPunctuation("Word."));
// console.log(containsPunctuation("Word"));
//-------
// console.log(containsPunctuation2("Word."));
// console.log(containsPunctuation2("Word"));
// console.log(containsPunctuation2("Word-"));
// console.log(containsPunctuation2("qwertyuio-"));
// console.log(containsPunctuation2("-"));
//-------
// console.log(isStopWord('the', stopWords));
// console.log(isStopWord('of', stopWords));
// console.log(isStopWord('and', stopWords));
// console.log(isStopWord('but', stopWords));
console.log(isStopWord('love', stopWords));
console.log(isStopWord('love;', stopWords));


function titleize(title, stopWords) {
    let goodTitle = [];
    let words = title.split(' ');

    for (var i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();

        if(!isStopWord(word, stopWords)){
            word = word[0].toUpperCase() + word.slice(1)
            };
            goodTitle.push(word);
    }

    return  goodTitle.join(' ');
}

console.log(titleize("forest gump, the runner", ["the"]));
