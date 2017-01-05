'use strict';


//variable of my age
var age = '42';
console.log(age);

//get the user's name and log to console
var userName = prompt('Hello there! What is your name?');
  if (userName == '') {
    var userName = prompt('Please type a name here!');
    console.log(userName);
  } else {
    console.log('Hello ' + userName + '!');
    alert('Hello ' + userName + '!');
  };

//make a variable array
// var answer1 = age;
var answer2 = ['Aphrodite ', 'Minerva ', 'Stupid '];
var answer3 = 'blue';
var answer4 = '17 years';
var answer5 = 'To Learn More, Faster!';

//ask the first question
/*this isn't Y/N
var question1 = prompt('What is David\'s favorite color?');
*/
var question1 = prompt('Is David\'s favorite color ' + answer3 + '? Y or N: ').toLowerCase();
  console.log(question1);
//  if (question1 === answer3) {
    if (question1 === 'y') {
    console.log('Right! ' + userName + ' guessed my favorite color is ' + answer3 + '!');
    alert('Right! ' + userName + ' guessed my favorite color is ' + answer3 + '!');
  } else {
    console.log('Sorry, ' + userName + ' but ' + question1 + ' is not my favorite color!');
    alert('Sorry, ' + userName + ' but ' + question1 + ' is not my favorite color!');
  };

//ask the second question
//var question2 = prompt('What is David\'s age?');
  var question2 = prompt('Is David\'s age ' + age + '? Y or N: ').toLowerCase();
    console.log(question2);
  //if (question2 === age) {
    if (question2 === 'y') {
    console.log('Yup, I am ' + age);
    alert('Yup, I am ' + age);
  } else if (question2 > age) {
    console.log('Hey!  I\'m not that old!');
    alert('Hey!  I\'m not that old!');
  } else {
    console.log('Flattery will get you somewhere.  Just maybe not where you expected! ' + question2 + ' is not correct.');
    alert('Flattery will get you somewhere.  Just maybe not where you expected! ' + question2 + ' is not correct.');
  };

//ask question 3
//var question3 = prompt('What is the name of David\'s favorite pet?');
  var question3 = prompt('My pets are named:' + answer2[0, 1, 2] + 'Is the name of David\'s favorite pet?' + answer2[0] + '? Y or N: ').toLowerCase();
    console.log(answer2[0, 1, 2]);
    console.log(question3);
  //if (question3 === answer2[0]) {
    if (question3 === 'y') {
    console.log(answer2[0] + ' is the most gentle, sweet little pitbull ever!  She is my favorite, but don\'t tell the cats!');
    alert(answer2[0] + ' is the most gentle, sweet little pitbull ever!  She is my favorite, but don\'t tell the cats!');
//} else if (question3 === answer2[1]) {
  } else if (question3 === 'n') {
  //console.log(answer2[1] + ' is so adorable!  She just isn\'t my favorite.');
    console.log(answer2[1] + ' is so adorable!  She just isn\'t my favorite.' + answer2[2] + ' is an old man of a cat at 16 years of age! Kinda smelly too...');
  //alert(answer2[1] + ' is so adorable!  She just isn\'t my favorite.');
    alert(answer2[1] + ' is so adorable!  She just isn\'t my favorite.' + answer2[2] + ' is an old man of a cat at 16 years of age! Kinda smelly too...');
  } else if (question3 === answer2[2]) {
    console.log(answer2[2] + ' is an old man of a cat at 16 years of age!');
    alert(answer2[2] + ' is an old man of a cat at 16 years of age!');
  } else {
    console.log('Well, their names are actually ' + answer2[0] + ' ' + answer2[1] + ' and ' + answer2[2] + '.');
    alert('Well, their names are actually ' + answer2[0] + ' ' + answer2[1] + ' and ' + answer2[2] + '.');
  };

//ask question 4
//var question4 = prompt('How long has David been working in software without knowing how to code?');
  var question4 = prompt('Has David really been working in software without knowing how to code for ' + answer4 + '? Y or N: ');
    console.log(question4);
  //if (question4 === answer4 || question4 === '17') {
    if (question4 === 'y') {
    console.log('True! I have been at this for ' + answer4 + ' which is a long time to work in the dark!');
    alert('True! I have been at this for ' + answer4 + ' which is a long time to work in the dark!');
  } else {
    console.log(question4 + ' is not correct.');
    alert(question4 + ' is not correct.');
  };

//ask question 5
//var question5 = prompt('Why is David here, at Code Fellows?');
  var question5 = prompt('Is David here, at Code Fellows to ' + answer5 + '?');
    console.log(question5);
  //if (question5 === answer5) {
    if (question5 === 'y') {
    console.log('Right!  I\'m here to ' + question5 + ' And to rock the party!');
    alert('Right!  I\'m here to ' + question5 + ' And to rock the party!');
  } else {
    console.log('I\'m actually here to ' + answer5 + ' And to rock the party!');
    alert('I\'m actually here to ' + answer5 + ' And to rock the party!');
  };
