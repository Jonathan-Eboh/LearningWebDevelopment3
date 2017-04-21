"use strict"

function laligatSequence(base, n) {
    let sequence = [base]; //because we know we need to return an array and base will always be the first element in the array
    while (sequence.length < n) { //because we only want to do this n times
        //add laligat sum of the last number to the sequence
        let lastNum = sequence[sequence.length - 1];//since we need the last number in the sequence this is how we dynamically aquire that
        let laligat = laligatSum(lastNum);//---first abstraction
        sequence.push(laligat);
    }
    return sequence;
}

function laligatSum(num) {
    let sum = 0;
    for (let possiblePrime = 2; possiblePrime <= num; possiblePrime++) {// because of our login in isPrime we need to start possiblePrime at 2
        //need to check to see if i is prime
        if (isPrime(possiblePrime)) { //---is prime is our second abstraction
            sum += possiblePrime;
        }
    }
    return sum;
}

function isPrime(num) {
    for (let i = 2; i < num; i++) { //start at two because 0 and 1 are not prime numbers the first prime number is 2
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(laligatSequence(10, 4));
console.log(laligatSequence(5, 2));
