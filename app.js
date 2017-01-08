'use strict';

//variable of my age
var age = '42';
console.log(age);

//get the user's name and log to console
var userName = prompt('Hello there! What is your name?');

//make a variable array. todo: get my answers into a single array?
var answer2 = ['Aphrodite ', 'Minerva ', 'Stupid '];
var answer3 = 'blue';
var answer4 = '17 years';
var answer5 = 'To Learn More, Faster!';

if (userName === '') {
  userName = prompt('Please type a name here!');
  console.log(userName);
} else if (userName === null) {
  userName = prompt('Please type a name here!');
  console.log(userName);
} else if (userName === NaN){
  userName = prompt('Please type a name here!');
  console.log(userName);
} else {
  console.log('Hello ' + userName + '!');
  alert('Hello ' + userName + '!');
};

//ask the first question
var question1 = prompt('Is David\'s favorite color ' + answer3 + '? Y or N: ');
console.log(question1);

if (question1 === '' || question1 === NaN || question1 === null) {
  console.log('User canceled:' + question1);
  var question1conf = prompt('Are you sure you don\'t want to give an answer?');
  console.log('confirmed: ' + question1conf);
} else if (question1conf === 'y' || question1conf === null || question1conf === NaN || question1conf === '') {
  console.log('confirmed' + question1conf);
  alert(userName + 'Did not want to answer this one!');
  //todo: document.write()
} else if (question1.toLowerCase === 'y') {
  console.log('Right! ' + userName + ' guessed my favorite color is ' + answer3 + '!');
  console.log(question1);
  alert('Right! ' + userName + ' guessed my favorite color is ' + answer3 + '!');
} else if (question1.toLowerCase === 'n'){
  console.log(question1);
  alert('Sorry, ' + userName + ' but that\'s wrong. ' + answer3 + ' really is my favorite color!');
} else {
  alert('Wat?!');
};

//ask the second question

var question2 = prompt('Is David\'s age ' + age + '? Y or N: ');
console.log(question2);

if (question2 === '' || question2 === NaN || question2 === null) {
  console.log('User canceled:' + question2);
  var question2Conf = prompt('Are you sure you don\'t want to give an answer?');
  console.log('confirmed: ' + question2Conf);
} else if (question2Conf.toLowerCase === 'y' || question2Conf === null || question2Conf === NaN || question2Conf === '') {
  console.log('confirmed' + question2Conf);
  alert(userName + 'Did not want to answer this one!');
} else if (question2.toLowerCase === 'y') {
  console.log('Yup, I am ' + age + '.');
  alert('Yup, I am ' + age + '.');
} else if (question2.toLowerCase === 'n'){
  console.log('Wrong, I am ' + age + '.');
  alert('Wrong, I am ' + age + '.');
} else {
  alert('Wat?!');
};

//ask question 3
var question3 = prompt('My pets are named:' + answer2[0] + ', ' + answer2[1] + 'and ' + answer2[0] + '\n' + 'Is the name of David\'s favorite pet ' + answer2[0] + '? Y or N: ');
console.log(answer2[0,1,2]);
console.log(question3);

if (question3 === '' || question3 === NaN || question3 === null) {
  console.log('User canceled ' + question3);
  var question3Conf = prompt('Are you sure you don\'t want to give an answer?');
  console.log('confirmed: ' + question3Conf);
} else if (question3Conf.toLowerCase === 'y' || question3Conf === null || question3Conf === NaN || question3Conf === '') {
  console.log('confirmed' + question3Conf);
  alert(userName + 'Did not want to answer this one!');
} else if (question3.toLowerCase === 'y') {
  console.log(answer2[0] + ' is the most gentle, sweet little pitbull ever!\n She is my favorite, but don\'t tell the cats!');
  alert(answer2[0] + ' is the most gentle, sweet little pitbull ever!\n She is my favorite, but don\'t tell the cats!');
} else if (question3 === 'n') {
  console.log('Wrong. ' + answer2[1] + ' is so adorable!  She just isn\'t my favorite.\n' + answer2[2] + ', ' + ' is an old man of a cat at 16 years of age!\n Kinda smelly too...');
  alert('Wrong, sorry. But ' + answer2[1] + ' is so adorable!  She just isn\'t my favorite.\n' + '"' + answer2[2] + '"' + ', ' + ' is an old man of a cat at 16 years of age!\n Kinda smelly too...\n The correct answer was ' + answer2[0] + '.');
} else {
  console.log('Well, their names are actually ' + answer2[0] + ' ' + answer2[1] + ' and ' + answer2[2] + '.');
  alert('Well, their names are actually ' + answer2[0] + ', ' + answer2[1] + ' and ' + answer2[2] + '.');
};

//ask question 4
var question4 = prompt('Has David really been working in software without knowing how to code for ' + answer4 + '? Y or N: ');
console.log(question4);

if (question4 === 'y') {
  console.log('True! I have been at this for ' + answer4 + ' which is a long time to work in the dark!');
  alert('True! I have been at this for ' + answer4 + ' which is a long time to work in the dark!');
} else {
  console.log(question4 + ' is not correct.');
  alert('That is not correct.');
};

//ask question 5
var question5 = prompt('Is David here, at Code Fellows to ' + answer5 + '?');
console.log(question5);

if (question5 === 'y') {
  console.log('Right!  I\'m here to ' + answer5 + ' And to rock the party!');
  alert('Right!  I\'m here to ' + answer5 + ' And to rock the party!');
} else {
  console.log('I\'m actually here to ' + answer5 + ' And to rock the party!');
  alert('I\'m actually here to ' + answer5 + ' And to rock the party!');
};

//ask question 6
var ranNum = Math.floor((Math.random() * 9) + 1);
console.log(ranNum);

for (var i = 0; i < 4; i++) {
  var question6 = parseInt(prompt('Please guess a number between 1 and 10:'));
  console.log(question6);
  if (question6 === ranNum) {
    console.log(ranNum + 'guessed');
    alert('Great guess! You got it right.');
    break;
  } else if (question6 > ranNum) {
    console.log('Sorry, your guess is too high. You have ' + (3 - i) + ' tries left.');
    alert('Sorry, your guess is too high. You have ' + (3 - i) + ' tries left.');
  } else if (question6 < ranNum) {
    console.log('Sorry, your guess is too low. You have ' + (3 - i) + ' tries left.');
    alert('Sorry, your guess is too low. You have ' + (3 - i) + ' tries left.');
  } else {
    console.log('I\'m actually here to ' + answer5 + ' And to rock the party!');
    alert('I\'m actually here to ' + answer5 + ' And to rock the party!');
  };
};

//question 7
var workedAt = ['Nintendo ', 'Microsoft ', 'Amazon '];
console.log(workedAt);
for (var h = 0; h < 6; h++) {
  var question7 = (prompt('Can you guess a company David has worked for?'));
  console.log(question7);
  for (var j = 0; j < workedAt.length; j++) {
    if (question7.toLowerCase() === workedAt[j].toLowerCase().trim()) {
      console.log('Correct');
      var workFeedback = 'Correct! David has worked at: ' + workedAt[0] + ' and ' + workedAt[1] + ' and ' + workedAt[2] + '.';
      i = 6;
      console.log(i);
      break;
    } else if (i === 5) {
      workFeedback = 'That doesn\'t match any of the companies I have worked at: ' + workedAt[0] + ' and ' + workedAt[1] + ' and ' + workedAt[2] + '.';
      console.log(i);
      console.log('That doesn\'t match ' + workedAt);
    } else {
      console.log(i);
      workFeedback = 'That doesn\'t match any of the companies I have worked at. You have ' + (5 - i) + ' tries left.';
    }
  }
  alert(workFeedback);
  break;
};
console.log('Done guessing.');
