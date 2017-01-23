'use strict';

//make a variable array. todo: get my answers into a single array?
//variables of my questions and answers
var answer1 = 'blue';
var answer2 = '42';
var answer3 = ['Aphrodite ', 'Minerva ', 'Stupid '];
var answer4 = '17 years';
var answer5 = 'To Learn More, Faster!';
var correctAnswers = 0;
var totalQuestions = 7;
var custMessGlob = '';
var userNameGlob;
//get the user's name and log to console
meetGreet();
questionOne();


function meetGreet() {
  userNameGlob = prompt('Hello there! What is your name?');
  if (userNameGlob === '') {
    userNameGlob = prompt('Please type a name here!');
    console.log(userNameGlob);
  } else if (userNameGlob === null) {
    userNameGlob = prompt('Please type a name here!');
    console.log(userNameGlob);
  } else if (userNameGlob === isNaN){
    userNameGlob = prompt('Please type a name here!');
    console.log(userNameGlob);
  } else {
    console.log('Hello ' + userNameGlob + '!');
    alert('Hello ' + userNameGlob + '!');
    document.write('<section class="answers">\n<h4>' + userNameGlob + '\'s answers were: </h4>\n');
  }
};

//write to document a conditionally praising or try again message
function messageCust() {
//decide whether to praise or suggest try again message
  if (correctAnswers < 4) {
    custMessGlob = 'Try again! You\'ll do better next time.';
  } else if (correctAnswers === parseInt.totalQuestions - 1 || correctAnswers === parseInt.totalQuestions - 2) {
    custMessGlob = 'That was pretty good! Try again if you want to get all of them right.';
  } else {
    custMessGlob = '100% correct! Great guessing ' + userNameGlob + '!';
  }
};

function questionOne() {
  var question1 = prompt('Is David\'s favorite color ' + answer1 + '? Y or N: ');
  console.log(question1);
  if (question1.toLowerCase() === 'y') {
    console.log('Right! ' + userNameGlob + ' guessed my favorite color is ' + answer1 + '!');
    correctAnswers++;
    alert('Right! ' + userNameGlob + ' guessed my favorite color is ' + answer1 + '!');
    document.write('<ul>\n<li>' + userNameGlob + ' correctly guess that my favorite color is ' + answer1 + '.</li>\n');
  } else {
    console.log('Sorry, ' + userNameGlob + ' but ' + question1 + ' is not my favorite color!');
    alert('Sorry, ' + userNameGlob + ' but ' + answer1 + ' really is my favorite color!');
    document.write('<ul>\n<li>' + userNameGlob + ' didn\'t correctly guess that my favorite color is ' + answer1 + '.</li>\n');
  }
  questionTwo();
};

//ask the second question
function questionTwo() {
  var question2 = prompt('Is David\'s age ' + answer2 + '? Y or N: ');
  console.log(question2);
  if (question2.toLowerCase() === 'y') {
    console.log('Yup, I am ' + answer2);
    correctAnswers++;
    alert('Yup, I am ' + answer2);
    document.write('<li>' + userNameGlob + ' correctly guessed that I\'m ' + answer2 + '.</li>\n');
  } else {
    console.log('Wrong, I am ' + answer2 + '.');
    alert('Wrong, I am ' + answer2 + '.');
    document.write('<li>' + userNameGlob + ' didn\'t correctly guess that I\'m ' + answer2 + '.</li>\n');
  }
  questionThree();
};

function questionThree() {
//ask question 3
  var question3 = prompt('My pets are named:' + answer3[0] + ', ' + answer3[1] + ' and ' + answer3[2] + '.\n ' + 'Is the name of David\'s favorite pet ' + answer3[0] + '? Y or N: ').toLowerCase();
  console.log(question3);
  if (question3 === 'y') {
    console.log(answer3[0] + ' is the most gentle, sweet little pitbull ever!  She is my favorite, but don\'t tell the cats!');
    correctAnswers++;
    alert(answer3[0] + ' is the most gentle, sweet little pitbull ever!  She is my favorite, but don\'t tell the cats!');
    document.write('<li>' + userNameGlob + ' correctly guessed that ' + answer3[0] + ' is my favorite.</li>\n');
  } else if (question3 === 'n') {
    console.log('Wrong. ' + answer3[1] + ' is so adorable!  She just isn\'t my favorite.' + answer3[2] + ' ' + ' is an old man of a cat at 16 years of age! He\'s kinda smelly too...');
    alert('Wrong. ' + answer3[1] + ' is so adorable! She just isn\'t my favorite.' + answer3[2] + ' ' + ' is an old man of a cat at 16 years of age! Kinda smelly too...');
    document.write('<li>' + userNameGlob + ' didn\'t correctly guess that ' + answer3[0] + ' is my favorite.</li>\n');
  } else if (question3 === answer3[2]) {
    console.log(answer3[2] + ' is an old man of a cat at 16 years of answer3!');
    alert(answer3[2] + ' is an old man of a cat at 16 years of answer3!');
    document.write('<li>' + userNameGlob + ' didn\'t correctly guess that ' + answer3[0] + ' is my favorite.</li>\n');
  } else {
    console.log('Well, their names are actually ' + answer3[0] + ' ' + answer3[1] + ' and ' + answer3[2] + '.');
    alert('Well, their names are actually ' + answer3[0] + ' ' + answer3[1] + ' and ' + answer3[2] + '.');
    document.write('<li>' + userNameGlob + ' didn\'t correctly guess that ' + answer3[0] + ' is my favorite.</li>\n');
  }
  questionFour();
};

function questionFour() {
//ask question 4
  var question4 = prompt('Has David really been working in software without knowing how to code for ' + answer4 + '? Y or N: ');
  console.log(question4);

  if (question4 === 'y') {
    console.log('True! I have been at this for ' + answer4 + ' I have really stuck with it!');
    alert('True! I have been at this for ' + answer4 + ' I have really stuck with it!');
    correctAnswers++;
    document.write('<li>' + userNameGlob + ' correctly guessed that I have been at this for ' + answer4 + '.</li>\n');
  } else {
    console.log(question4 + ' is not correct.');
    alert('That is not correct.');
    document.write('<li>' + userNameGlob + ' didn\'t correctly guess that I have been at this for ' + answer4 + '.</li>\n');
  }
  questionFive();
};

function questionFive() {
//ask question 5
  var question5 = prompt('Is David here, at Code Fellows to ' + answer5 + '?');
  console.log(question5);

  if (question5 === 'y') {
    console.log('Right!  I\'m here to ' + answer5 + ' And to rock the party!');
    alert('Right!  I\'m here to ' + answer5 + ' And to rock the party!');
    correctAnswers++;
    document.write('<li>' + userNameGlob + ' correctly guessed that I am here to ' + answer5 + '. And to rock the party!</li>\n');
  } else {
    console.log('I\'m actually here to ' + answer5 + ' And to rock the party!');
    alert('I <emp>am</emp> actually here to ' + answer5 + ' And to rock the party!');
    document.write('<li>' + userNameGlob + ' didn\'t correctly guess that I am here to ' + answer5 + '. And to rock the party!</li>\n');
  }
  questionSix();
};

function questionSix() {
//ask question 6 - 7
  var ranNum = Math.floor((Math.random() * 9) + 1);
  console.log(ranNum);

  for (var i = 0; i < 4; i++) {
    var question6 = parseInt(prompt('Please guess a number between 1 and 10:'));
    console.log(question6);
    if (question6 === ranNum) {
      console.log(ranNum + 'guessed');
      alert('Great guess! You got it right.');
      correctAnswers++;
      document.write('<li>' + userNameGlob + ' correctly guessed the number: ' + ranNum + ' In: ' + (i + 1) + ' try(s).</li>\n');
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
      document.write('<li>Sorry, ' + userNameGlob + ' you ran out of guesses without guessing that ' + ranNum + ' was the number.</li>');
      break;
    }
  }
  questionSeven();
};

function questionSeven() {
  //question 7
  var workedAt = ['Nintendo ', 'Microsoft ', 'Amazon '];
  console.log(workedAt);
  for (var i = 0; i < 6; i++) {
    var question7 = (prompt('Can you guess a company David has worked for?'));
    console.log(question7);
    for (var j = 0; j < workedAt.length; j++) {
      if (question7.toLowerCase() === workedAt[j].toLowerCase().trim()) {
        console.log('Correct');
        var workFeedback = 'Correct! David has worked at: ' + workedAt[0] + ' and ' + workedAt[1] + ' and ' + workedAt[2] + '.';
        i = 6;
        correctAnswers++;
        console.log(i);
        break;
      } else if (i === 5) {
        workFeedback = 'Incorrect. That doesn\'t match any of the companies I have worked at: ' + workedAt[0] + ' and ' + workedAt[1] + ' and ' + workedAt[2] + '.';
        console.log(i);
        console.log('Incorrect. That doesn\'t match ' + workedAt);

      } else {
        console.log(i);
        workFeedback = 'Incorrect. That doesn\'t match any of the companies I have worked at. You have ' + (5 - i) + ' tries left.';
      }
    }
    alert(workFeedback);
    document.write('<li>' + userNameGlob + '\'s guess was: ' + workFeedback + '</li></ul>');
    break;
  }
  messageCust();
  document.write('<h5>' + userNameGlob + ' got: ' + correctAnswers + ' out of ' + totalQuestions + ' correct. ' + custMessGlob);
  console.log('Done guessing.');
};
