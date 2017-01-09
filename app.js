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
  document.write('<section class="answers">\n<h4>' + userName + '\'s answers were: </h4>\n');
};

//ask the first question
var question1 = prompt('Is David\'s favorite color ' + answer3 + '? Y or N: ');
console.log(question1);
if (question1.toLowerCase() === 'y') {
  console.log('Right! ' + userName + ' guessed my favorite color is ' + answer3 + '!');
  alert('Right! ' + userName + ' guessed my favorite color is ' + answer3 + '!');
  document.write('<ul>\n<li>' + userName + ' correctly guess that my favorite color is ' + answer3 + '.</li>\n');
} else {
  console.log('Sorry, ' + userName + ' but ' + question1 + ' is not my favorite color!');
  alert('Sorry, ' + userName + ' but ' + answer3 + ' really is my favorite color!');
  document.write('<ul>\n<li>' + userName + ' didn\'t correctly guess that my favorite color is ' + answer3 + '.</li>\n');
};


//ask the second question
var question2 = prompt('Is David\'s age ' + age + '? Y or N: ');
console.log(question2);
if (question2.toLowerCase() === 'y') {
  console.log('Yup, I am ' + age);
  alert('Yup, I am ' + age);
  document.write('<li>' + userName + ' correctly guessed that I\'m ' + age + '.</li>\n');
} else {
  console.log('Wrong, I am ' + age + '.');
  alert('Wrong, I am ' + age + '.');
  document.write('<li>' + userName + ' didn\'t correctly guess that I\'m ' + age + '.</li>\n');
};

//ask question 3
var question3 = prompt('My pets are named:' + answer2[0] + ', ' + answer2[1] + ' and ' + answer2[2] + '.\n ' + 'Is the name of David\'s favorite pet ' + answer2[0] + '? Y or N: ').toLowerCase();
console.log(answer2[0, 1, 2]);
console.log(question3);
if (question3 === 'y') {
  console.log(answer2[0] + ' is the most gentle, sweet little pitbull ever!  She is my favorite, but don\'t tell the cats!');
  alert(answer2[0] + ' is the most gentle, sweet little pitbull ever!  She is my favorite, but don\'t tell the cats!');
  document.write('<li>' + userName + ' correctly guessed that ' + answer2[0] + ' is my favorite.</li>\n');
} else if (question3 === 'n') {
  console.log('Wrong. ' + answer2[1] + ' is so adorable!  She just isn\'t my favorite.' + answer2[2] + ' ' + ' is an old man of a cat at 16 years of age! Kinda smelly too...');
  alert('Wrong. ' + answer2[1] + ' is so adorable!  She just isn\'t my favorite.' + answer2[2] + ' ' + ' is an old man of a cat at 16 years of age! Kinda smelly too...');
  document.write('<li>' + userName + ' didn\'t correctly guess that ' + answer2[0] + ' is my favorite.</li>\n');
} else if (question3 === answer2[2]) {
  console.log(answer2[2] + ' is an old man of a cat at 16 years of age!');
  alert(answer2[2] + ' is an old man of a cat at 16 years of age!');
  document.write('<li>' + userName + ' didn\'t correctly guess that ' + answer2[0] + ' is my favorite.</li>\n');
} else {
  console.log('Well, their names are actually ' + answer2[0] + ' ' + answer2[1] + ' and ' + answer2[2] + '.');
  alert('Well, their names are actually ' + answer2[0] + ' ' + answer2[1] + ' and ' + answer2[2] + '.');
  document.write('<li>' + userName + ' didn\'t correctly guess that ' + answer2[0] + ' is my favorite.</li>\n');
};

//ask question 4
var question4 = prompt('Has David really been working in software without knowing how to code for ' + answer4 + '? Y or N: ');
console.log(question4);

if (question4 === 'y') {
  console.log('True! I have been at this for ' + answer4 + ' which is a long time to work in the dark!');
  alert('True! I have been at this for ' + answer4 + ' which is a long time to work in the dark!');
  document.write('<li>' + userName + ' correctly guessed that I have been at this for ' + answer4 + '.</li>\n');
} else {
  console.log(question4 + ' is not correct.');
  alert('That is not correct.');
  document.write('<li>' + userName + ' didn\'t correctly guess that I have been at this for ' + answer4 + '.</li>\n');
};

//ask question 5
var question5 = prompt('Is David here, at Code Fellows to ' + answer5 + '?');
console.log(question5);

if (question5 === 'y') {
  console.log('Right!  I\'m here to ' + answer5 + ' And to rock the party!');
  alert('Right!  I\'m here to ' + answer5 + ' And to rock the party!');
  document.write('<li>' + userName + ' correctly guessed that I am here to ' + answer5 + '. And to rock the party!</li>\n');
} else {
  console.log('I\'m actually here to ' + answer5 + ' And to rock the party!');
  alert('I\'m actually here to ' + answer5 + ' And to rock the party!');
  document.write('<li>' + userName + ' didn\'t correctly guess that I am here to ' + answer5 + '. And to rock the party!</li>\n');
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
    document.write('<li>' + userName + ' correctly guessed: ' + ranNum + '. In: ' + (i + 1) + ' try(s).</li>\n');
    break;
  } else if (question6 > ranNum) {
    console.log('Sorry, your guess is too high. You have ' + (3 - i) + ' tries left.');
    alert('Sorry, your guess is too high. You have ' + (3 - i) + ' tries left.');
  } else if (question6 < ranNum) {
    console.log('Sorry, your guess is too low. You have ' + (3 - i) + ' tries left.');
    alert('Sorry, your guess is too low. You have ' + (3 - i) + ' tries left.');
  } else {
    console.log('Sorry, you ran out of guesses without guessing that ' + ranNum + ' was the number.');
    alert('Sorry, you ran out of guesses without guessing that ' + ranNum + ' was the number.');
    document.write('<li>Sorry, ' + userName + ' you ran out of guesses without guessing that ' + ranNum + ' was the number.</li>');
    break;
  };
};

//question 7
var workedAt = ['Nintendo ', 'Microsoft ', 'Amazon '];
console.log(workedAt);
for (var z = 0; z < 6; z++) {
  var question7 = (prompt('Can you guess a company David has worked for?'));
  console.log(question7);
  for (var j = 0; j < workedAt.length; j++) {
    if (question7.toLowerCase() === workedAt[j].toLowerCase().trim()) {
      console.log('Correct');
      var workFeedback = 'Correct! David has worked at: ' + workedAt[0] + ' and ' + workedAt[1] + ' and ' + workedAt[2] + '.';
      z = 6;
      console.log(z);
      break;
    } else if (z === 5) {
      workFeedback = 'Incorrect. That doesn\'t match any of the companies I have worked at: ' + workedAt[0] + ' and ' + workedAt[1] + ' and ' + workedAt[2] + '.';
      console.log(z);
      console.log('Incorrect. That doesn\'t match ' + workedAt);

    } else {
      console.log(z);
      workFeedback = 'Incorrect. That doesn\'t match any of the companies I have worked at. You have ' + (5 - i) + ' tries left.';
    }
  }
  alert(workFeedback);
};
console.log('Done guessing.');
