'use strict';

//variable of my age
var age = '42';
console.log(age);

//get the user's name and log to console
var userName = prompt('Hello there! What\'s your name?');

//make a variable array. todo: get my answers into a single array?
var answer2 = ['Aphrodite ', 'Minerva ', 'Stupid '];
var answer3 = 'blue';
var answer4 = '17 years';
var answer5 = 'To Learn More, Faster!';
// var result = outcome + 0;
// console.log(result);

if (userName === '' || userName === NaN || userName === null) {
  var userNameCon = prompt('Are you sure you don\'t want to share your name with me?');
  console.log(userNameCon);
} else {
  console.log('Hello ' + userName + '!');
  alert('Hello ' + userName + '!');
  document.write('<h5>' + 'Hey ' + userName + '! Here are the answers you gave: ' + '</h5>\n' + '<ol>\n');
};

//ask the first question
var question1 = prompt('Is David\'s favorite color ' + answer3 + '? Y or N: ');
console.log(question1);

if (question1.toLowerCase === 'y') {
  console.log('Right! ' + userName + ' guessed my favorite color is ' + answer3 + '!');
  alert('Right! ' + userName + ' guessed my favorite color is ' + answer3 + '!');
  document.write('<li>' + userName + 'correctly guessed that ' + answer3 + ' is my favorite color!' + '</li>\n');
} else if (question1.toLowerCase !== 'y' || question1.toLowerCase !== 'n') {
  console.log('User canceled');
  var question1Conf = prompt('Are you sure you don\'t want to give an answer?').toLowerCase();
} if (question1Conf === null || question1Conf === NaN) {
  console.log('User confirmed cancel.');
  alert(userName + 'Did not want to answer this one!');
  document.write('<li>' + userName + 'You decided to not answer this one but ' + answer3 + ' was correct.' + '</li>\n');
} else {
  console.log('Sorry, ' + userName + ' but that is not my favorite color!');
  alert('Sorry, ' + userName + ' but ' + answer3 + ' really is my favorite color!');
  document.write('<li>' + 'Sorry, ' + userName + ' but you did not answer this one correctly; ' + answer3 + ' really was correct.' + '</li>\n');
};

//ask the second question
var question2 = prompt('Is David\'s age ' + age + '? Y or N: ');
console.log(question2);
if (question2.toLowerCase() === 'y') {
  console.log('Yup, I am ' + age);
  alert('Yup, I am ' + age);
  document.write('<li>' + userName + ' correctly guessed that I am ' + age + '</li>\n');
} else if (question2 === null || question2 === NaN) {
  console.log('user skipped');
  alert('You didn\'t answer! But I am ' + age + '!');
  age = NaN;
} else {
  console.log('Wrong, I am ' + age + '.');
  alert('Wrong, I am ' + age + '.');
  document.write('<li>' + userName + ' guessed ' + age + '</li>\n');
};

//ask question 3
var question3 = prompt('My pets are named:' + answer2[0] + ', ' + answer2[1] + 'and ' + answer2[0] + ' ' + 'Is the name of David\'s favorite pet ' + answer2[0] + '? Y or N: ').toLowerCase();
console.log(answer2[0, 1, 2]);
console.log(question3);
if (question3 === 'y') {
  console.log(answer2[0] + ' is the most gentle, sweet little pitbull ever!  She is my favorite, but don\'t tell the cats!');
  alert(answer2[0] + ' is the most gentle, sweet little pitbull ever!  She is my favorite, but don\'t tell the cats!');
  document.write('<li>' + userName + ' correctly guessed that my favorite pet\'s name is ' + answer2[0] + '.' + '</li>\n');
} else if (question3 === 'n') {
  console.log('Wrong. ' + answer2[1] + ' is so adorable!  She just isn\'t my favorite.\n' + answer2[2] + ' ' + ' is an old man of a cat at 16 years of age! Kinda smelly too...');
  alert('Wrong. ' + answer2[1] + ' is so adorable!  She just isn\'t my favorite.\n' + answer2[2] + ' is an old man of a cat, at 16 years of age! Kinda smelly too, so not my favorite.');
  document.write('<li>' + userName + ' incorrectly guessed that my favorite pet\'s name is ' + answer2[1] + '.' + '</li>\n');
} else if (question3 === answer2[2]) {
  console.log(answer2[2] + ' is an old man of a cat at 16 years of age!');
  alert(answer2[2] + ' is an old man of a cat at 16 years of age!');
  document.write('<li>' + userName + ' incorrectly guessed that my favorite pet\'s name is ' + answer2[2] + '.' + '</li>\n');
} else {
  console.log('Well, their names are actually ' + answer2[0] + ' ' + answer2[1] + ' and ' + answer2[2] + '.');
  alert('Well, their names are actually ' + answer2[0] + ', ' + answer2[1] + ' and ' + answer2[2] + '.');
  document.write('<li>' + userName + ' decided to not answer this one.' + '</li>\n');
};

//ask question 4
var question4 = prompt('Has David really been working in software without knowing how to code for ' + answer4 + '? Y or N: ');
console.log(question4);
if (question4 === 'y') {
  console.log('True! I have been at this for ' + answer4 + ' which is a long time to work in the dark!');
  alert('True! I have been at this for ' + answer4 + ' which is a long time to work in the dark!');
  document.write('<li>' + userName + ' correctly guessed that I have been working in software for ' + answer4 + '.' + '</li>\n');
} else {
  console.log(question4 + ' is not correct.');
  alert('That is not correct.');
  document.write('<li>' + userName + ' did not believe that I have been working in software for ' + answer4 + '.' + '</li>\n');
};

//ask question 5
var question5 = prompt('Is David here, at Code Fellows to ' + answer5 + '?');
console.log(question5);

if (question5 === 'y') {
  console.log('Right!  I\'m here to ' + answer5 + ' And to rock the party!');
  alert('Right!  I\'m here to ' + answer5 + ' And to rock the party!');
  document.write('<li>' + userName + ' correctly guessed that I\'m here to ' + answer5 + ' and to rock the party!' + '</li>\n');
} else {
  console.log('I\'m actually here to ' + answer5 + ' And to rock the party!');
  alert('I\'m actually here to ' + answer5 + ' And to rock the party!');
  document.write('<li>' + userName + ' doesn\'t believe that I\'m here to ' + answer5 + ' and to rock the party, but I am!' + '</li>\n');
};

//ask question 6
var ranNum = Math.floor((Math.random() * 9) + 1);
console.log(ranNum);
//ask question 6 up to 4 times
for (var i = 0; i < 4; i++) {
  var question6 = parseInt(prompt('Please guess a number between 1 and 10:'));
  console.log(question6);
  if (question6 === ranNum) {
    alert('Great guess! You got it right.');
    document.write('<li>' + userName + ' correctly guessed that the number was ' + ranNum + '</li>\n');
    break;
  } else if (question6 > ranNum) {
    console.log('Sorry, your guess is too high. You have ' + (3 - i) + ' tries left.');
    alert('Sorry, your guess is too high. You have ' + (3 - i) + ' tries left.');
  } else if (question6 < ranNum) {
    console.log('Sorry, your guess is too low. You have ' + (3 - i) + ' tries left.');
    alert('Sorry, your guess is too low. You have ' + (3 - i) + ' tries left.');
  } if (i === 4 && question6 != ranNum) {
    console.log('user out of answer and still wrong');
    document.write('<li>' + userName + ' ran out of tries before correctly guessing that the number was ' + ranNum + '.' + '</li>\n');
  } else {
    console.log('Are you sure you entered a number? You only have ' + (3 - i) + ' tries left.');
    alert('Are you sure you entered a number? You only have ' + (3 - i) + ' tries left.');
  }
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
      h = 6;
      console.log(h);
      break;
    } else if (h === 5) {
      workFeedback = 'That doesn\'t match any of the companies I have worked at: ' + workedAt[0] + ' and ' + workedAt[1] + ' and ' + workedAt[2] + '.';
      console.log(h);
      console.log('That doesn\'t match ' + workedAt);
    } else {
      console.log(h);
      workFeedback = 'That doesn\'t match any of the companies I have worked at. You have ' + (5 - h) + ' tries left.';
    }
  }
  alert(workFeedback);
  break;
};
console.log('Done guessing.');
document.write('\n</ul>');
