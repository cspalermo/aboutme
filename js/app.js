'use strict';

var correctResponses = 0;

function question1() {

var userNamePrompt = prompt('Hello, what is your name?');
alert('Nice to meet you, ' + userNamePrompt);
//console.log('Nice to meet you, ' + initialAsk);
return userNamePrompt;
}
var userName = question1();

function question2(initialAsk) {

var askRead = prompt('Did you read my About Me website ' + initialAsk);
//console.log('Did you read my About Me website ' + initialAsk);

if ((askRead.toLowerCase() === 'yes') || (askRead === 'y')) {
    alert(initialAsk + ' I hope you found it interesting!');
} else if ((askRead === 'no') || (askRead === 'n')) {
    alert(initialAsk + ' Please look it over.');
} else {
    alert(initialAsk + ' lower and UPPER case letters matter.');
    // console.log(initialAsk + ' well, I worked hard on this!');
}}
question2(userName);

function question3() {

var askFrom = prompt('Am I from the Seattle?');

if ((askFrom.toLowerCase() === 'yes') || (askFrom === 'y')) {
    alert('I came here when I was 4 years old.');
} else if ((askFrom === 'no') || (askFrom === 'no')) {
    alert('Me neither!');
} else {
    alert('I am from the East Coast');
    // console.log('home sweet home' + askFrom);
}}
question3();

function question4() {

var askFamily = prompt('Do I have any siblings?');

if ((askFamily.toLowerCase() === 'yes') || (askFamily === 'y')) {
    alert('I have one brother and one sister');
} else if ((askFamily === 'no') || (askFamily === 'n')) {
    alert('Got it!');
} else {
    alert('Families come in all shapes and sizes!');
    //  console.log('Families come in all shapes and sizes' + askFamily);
}}
question4();

function question5() {

var askPets = prompt('Do I have any pets?');

if ((askPets.toLowerCase() === 'yes') || (askPets === 'y')) {
    alert('I would love to see pictures!');
} else if ((askPets === 'no') || (askPets === 'n')) {
    alert('My cat passed away in 2017.');
} else {
    alert('Gotta love them.');
    //  console.log('Gotta love them' + askPets);
}}
question5();

function question6(initialAsk) {

var askCoffee = prompt('Do I drink coffee?');

if ((askCoffee.toLowerCase() === 'yes') || (askCoffee === 'y')) {
    alert('Sure do, ' + initialAsk + ', we can go grab some.');
} else if ((askCoffee === 'no') || (askCoffee === 'n')) {
    alert('Tea is good, too, ' + initialAsk);
} else {
    alert('Good to meet you, ' + initialAsk);
    // console.log('Good to meet you' + initialAsk);
}}
question6(userName);

// Lab 03 - 6th question takes numeric input, prompt user to guess a number//
var guesses = 4;
var answerSix = 5;
while (guesses > 0 && response !== answerSix) {

    var response = parseInt(prompt('How many nieces and nephews do I have?'));
    //console.log(response);
    var tooLow = 'too low';
    var tooHigh = "too high";
    guesses--;

    if (response === answerSix) {
        alert('That is correct!');
        correctResponses++;
        //console.log('That is correct!');
        break; //do I need a break here?
        // how do I track the right answers? out of 7.  var correctResponses at top of page

    }
    else if (response < answerSix) {
         alert('That is ' + tooLow + ', enter a number and try again');
        //console.log(msgUnder);
    }

    else if (response > answerSix) {
        alert('That is ' + tooHigh + ', enter a number and try again');
        //console.log(msgOver);           
    }
    if (guesses === 0) {
        alert('You are out of guesses, the correct answer is 5');
    }
}

// Question 7 Multiple correct answers stored in an array, 6 attempts
// huge thanks to Ryan Geddes for the help and explanations

var martialartsArr = [  //values in an array tracked with index.  indexOf to refer to specific one
    'Kali',
    'Panatukan',
    'Brazilian Jiu Jitsu',
    'Muay Thai',
    'Combat Submission Wrestling',
    'Boxing',
    'Jeet Kun Do'];

var styleGuess = prompt('Of the martial arts styles I train, which are my favorite?  You have 6 guesses.');
    // user input prompt

for (var i = 0; i < 6; i++) {
    if (martialartsArr.indexOf(styleGuess) > 3 && i < 5){
        styleGuess = prompt('That is great, but not my favorite, try again.');
}

else if (martialartsArr.indexOf(styleGuess) === -1 && i < 5){
    styleGuess = prompt('I do not train that style, try again.');
}
    // answer outside of the array, not reached max guesses -1

    else if (martialartsArr.indexOf(styleGuess) <= 3){
        alert('You got it!  Also '
        + martialartsArr[0] + ', '
        + martialartsArr[1] + ', and '
        + martialartsArr[2] + '. Great stuff.');
        correctResponses++;
        break;       
}
    else if (martialartsArr.indexOf(styleGuess) > 3 && i >=5){
        alert('Out of guesses. The correct answers are: '
        + martialartsArr[0] + ', '
        + martialartsArr[1] + ', or '
        + martialartsArr[2]);
    }
    else {
        alert('Blue screen of death!')
        break;
    }   
}
    // correctResponses variable++ to total answers to 7 questions

if(correctResponses === 7) {
    alert(initialAsk + ' , you got ' + correctResponses + ' out of 7 right.');
}
else if(correctResponses <= 6 && correctResponses > 0){
    alert(initialAsk + ' good job, you got ' + correctResponses + ' out of 7.');
}
else if(correctResponses === 0) {
    alert(initialAsk + ' none correct, bummer!');
}
else {
    alert('Blue screen of death!');
}




