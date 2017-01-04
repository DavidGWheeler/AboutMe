'use strict';


//variable of my age
var age = 42;

// get the user's name and log to console
var userName = prompt('Hello there! What is your name?');
  if userName == '' {
    var userName = prompt('Please type your name here:')
  } else {
    console.log('Hello ' + userName);
  };
//make a variable array
var answer1 = age;
var answer2 = [];
var answer3 = 'blue';
var answer4 = '';
var answer5 = '';

var question1 = prompt('What is David\'s favorite color?');
  if question1 === answer3 {
    console.log('Right!', + userName + ' guessed my favorite color is', + answer3 + '!');
  } else {
    console.log('Sorry, but that is not my favorite color!');
  };
}
