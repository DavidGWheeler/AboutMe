'use strict';

//variable of my age
var age = '42';
console.log(age);
var answer2 = ['Aphrodite ', 'Minerva ', 'Stupid '];
var answer3 = 'blue';
var answer4 = '17 years';
var answer5 = 'To Learn More, Faster!';

//get the user's name and log to console
var userName = prompt('Hello there! What is your name?');
if (userName == '') {
  userName = prompt('Please type a name here!');
  console.log(userName);
} else {
  console.log('Hello ' + userName + '!');
  alert('Hello ' + userName + '!');
  document.write('<ul>\n<li>' + 'Hey ' + userName + '! Here are the answers you gave: ' + '</li>\n</ul>');
};

//ask the first question
var question1 = prompt('Is David\'s favorite color ' + answer3 + '? Y or N: ').toLowerCase();
console.log(question1);
if (question1 === 'y') {
  console.log('Right! ' + userName + ' guessed my favorite color is ' + answer3 + '!');
  alert('Right! ' + userName + ' guessed my favorite color is ' + answer3 + '!');
} else {
  console.log('Sorry, ' + userName + ' but ' + question1 + ' is not my favorite color!');
  alert('Sorry, ' + userName + ' but ' + answer3 + ' really is my favorite color!');
};

//ask the second question
var question2 = prompt('Is David\'s age ' + age + '? Y or N: ').toLowerCase();
console.log(question2);
if (question2 === 'y') {
  console.log('Yup, I am ' + age);
  alert('Yup, I am ' + age);
} else {
  console.log('Wrong, I am ' + age + '.');
  alert('Wrong, I am ' + age + '.');
};

//ask question 3
var question3 = prompt('My pets are named:' + answer2[0] + ' ' + answer2[1] + 'and' + answer2[0] + ' ' + 'Is the name of David\'s favorite pet ' + answer2[0] + '? Y or N: ').toLowerCase();
console.log(answer2[0, 1, 2]);
console.log(question3);
if (question3 === 'y') {
  console.log(answer2[0] + ' is the most gentle, sweet little pitbull ever!  She is my favorite, but don\'t tell the cats!');
  alert(answer2[0] + ' is the most gentle, sweet little pitbull ever!  She is my favorite, but don\'t tell the cats!');
} else if (question3 === 'n') {
  console.log('Wrong. ' + answer2[1] + ' is so adorable!  She just isn\'t my favorite.' + answer2[2] + ' ' + ' is an old man of a cat at 16 years of age! Kinda smelly too...');
  alert('Wrong. ' + answer2[1] + ' is so adorable!  She just isn\'t my favorite.' + answer2[2] + ' ' + ' is an old man of a cat at 16 years of age! Kinda smelly too...');
} else if (question3 === answer2[2]) {
  console.log(answer2[2] + ' is an old man of a cat at 16 years of age!');
  alert(answer2[2] + ' is an old man of a cat at 16 years of age!');
} else {
  console.log('Well, their names are actually ' + answer2[0] + ' ' + answer2[1] + ' and ' + answer2[2] + '.');
  alert('Well, their names are actually ' + answer2[0] + ' ' + answer2[1] + ' and ' + answer2[2] + '.');
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

//generate random number for question 6
var ranNum = Math.floor((Math.random() * 9) + 1);
console.log(ranNum);
//ask question 6 up to 4 times
for (var i = 0; i < 4; i++) {
  var question6 = parseInt(prompt('Please guess a number between 1 and 10:'));
  console.log(question6);
  if (question6 === ranNum) {
    alert('Great guess! You got it right.');
    break;
  } else if (question6 > ranNum) {
    console.log('Sorry, your guess is too high. You have ' + (3 - i) + ' tries left.');
    alert('Sorry, your guess is too high. You have ' + (3 - i) + ' tries left.');
  } else if (question6 < ranNum) {
    console.log('Sorry, your guess is too low. You have ' + (3 - i) + ' tries left.');
    alert('Sorry, your guess is too low. You have ' + (3 - i) + ' tries left.');
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
