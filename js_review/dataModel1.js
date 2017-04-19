
"use strict"
// ~~~~~~ 1
let students1 = [
  { name : "Anthony" },
  { name : "Winnie" },
  { name : "Pawandeep" }
];

//Write a function that will print the name of all the students
//Example
// printNames(students1)
// Anthony
// Winnie
// Pawandeep

function printNames(students) {
    //your code here...
    for (let i = 0; i < students.length; i++) {
        console.log(students[i]["name"]);
        // console.log(students[i].name);
    }
}

printNames(students1); // uncomment when ready to test

// ~~~~~~ 2
let students2 = [
  {
    name : "Anthony",
    id : 0
  }, {
    name : "Winnie",
    id : 1
  }, {
    name : "Pawandeep",
    id : 2
  }
];

//Write a function that will print the name and id of all the stuents
//Example
// printStudents(students2)
// Anthony is student #0
// Winnie is student #1
// Pawandeep is student #2

function printStudents(students) {
    //your code here...
    for (let i = 0; i < students.length; i++) {
        console.log(students[i]["name"]+ " is student #" + students[i]["id"]);
        // console.log(students[i].name);
    }
}

printStudents(students2); // uncomment when ready to test

//~~~~~3
let students3 = [
  {
    name : "Anthony",
    id : 0,
    grades : [{ id : 0, score : 84},{ id : 1, score : 20},{ id : 2, score : 80}]
  }, {
    name : "Winnie",
    id : 1,
    grades : [{ id : 0, score : 62},{ id : 1, score : 56},{ id : 2, score : 100}]
  }, {
    name : "Pawandeep",
    id : 2,
    grades : [{ id : 0, score : 79},{ id : 1, score : 92},{ id : 2, score : 49}]
  }
];

//Write a function that will print the name of the student and their highest test score
//Example
// printBestGrade(students3)
// Anthony 84
// Winnie 100
// Pawandeep 92

function printBestGrade(students) {
    //your code here...
    for (let i = 0; i < students.length; i++) { //iterates through students
        // console.log(students[i]["name"],students[i]["grades"] );
        let student = students[i];
        let grades = student.grades;
        let bestGrade = grades[0].score;
        // console.log(bestGrade); //This is how we index down to one specific grade, in this case it ill be the first one
        //so we then need to compare all the grades in that array

        for (let j = 0; j < grades.length; j++) { //iterates through grades
            let score =  grades[j].score;
            //now check and see if bestGrade < score
            //if yes then bestGrade = score
            if (bestGrade < score) {
                bestGrade = score;
            }

        }
        console.log(student.name, bestGrade);
    }
}

printBestGrade(students3); // uncomment when ready to test


//Write a function that will print the name of the student and their average test score
//Example
// printAverageGrade(students3)
// Anthony 61.333333333333336
// Winnie 72.66666666666667
// Pawandeep 73.33333333333333


function printAverageGrade(students) {
  //your code here...
}

// printAverageGrade(students3); // uncomment when ready to test

//~~~~BONUS

//Write a function that will print the id of each test and the name of the student
//who got the highest scores
//Example
// printBestStudent(students3)
// Test 0: Anthony
// Test 1: Pawandeep
// Test 2: Winnie

function printBestStudent(students) {
  //your code here...
}

// printBestStudent(students3); // uncomment when ready to test
