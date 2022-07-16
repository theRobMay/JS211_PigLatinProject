'use strict';

// brings in the assert module for unit testing

// brings in the readline module to access the command line


// use the readline module to print out to the command line



const pigLatin = () => {
  let userInput = document.getElementById("user-input").value;
  console.log('*****',userInput)
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let cleanWord = userInput.trim().toLowerCase()
  let firstLetter = cleanWord.charAt(0)
  let complexSplit = cleanWord.slice(1,2)

  if (vowels.includes(firstLetter)) {
    let vowelFirst = cleanWord + 'yay'
    return document.querySelector("h2").append(vowelFirst + ", ")
  }
  else {
    if (vowels.includes(complexSplit)) {
      let vowelSecondFirst = cleanWord.slice(1)
      let vowelSecondSecond = cleanWord.slice(0,1)
      return document.querySelector("h2").append(vowelSecondFirst + vowelSecondSecond + 'ay' +', ')
    }
    else {
      let noVowelFirst = cleanWord.slice(2)
      let noVowelSecond = cleanWord.slice(0,2)
      return document.querySelector("h2").append(noVowelFirst + noVowelSecond + 'ay' + ', ')
    }
  }
}

//const multiplePigLatin = (answer) => {
  //array of single letter and 2-letter words to error handle
  //.split using space as separator
  //pipe words back into
//}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C


// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
