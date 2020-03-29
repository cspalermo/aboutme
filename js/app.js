'use strict';

var correctResponses = 0;

var initialAsk = prompt('Hello, what is your name?');
alert('Nice to meet you, ' + initialAsk);
//console.log('Nice to meet you, ' + initialAsk);

var askRead = prompt('Did you read my About Me website ' + initialAsk);
//console.log('Did you read my About Me website ' + initialAsk);

if ((askRead.toLowerCase() === 'yes') || (askRead === 'y')) {
    alert(initialAsk + ' I hope you found it interesting!');
} else if ((askRead === 'no') || (askRead === 'n')) {
    alert(initialAsk + ' Please look it over.');
} else {
    alert(initialAsk + ' lower and UPPER case letters matter.');
    // console.log(initialAsk + ' well, I worked hard on this!');
}

var askFrom = prompt('Am I from the Seattle?');

if ((askFrom.toLowerCase() === 'yes') || (askFrom === 'y')) {
    alert('I came here when I was 4 years old.');
} else if ((askFrom === 'no') || (askFrom === 'no')) {
    alert('Me neither!');
} else {
    alert('I am from the East Coast');
    // console.log('home sweet home' + askFrom);
}

var askFamily = prompt('Do I have any siblings?');

if ((askFamily.toLowerCase() === 'yes') || (askFamily === 'y')) {
    alert('I have one brother and one sister');
} else if ((askFamily === 'no') || (askFamily === 'n')) {
    alert('Got it!');
} else {
    alert('Families come in all shapes and sizes!');
    //  console.log('Families come in all shapes and sizes' + askFamily);
}

var askPets = prompt('Do I have any pets?');

if ((askPets.toLowerCase() === 'yes') || (askPets === 'y')) {
    alert('I would love to see pictures!');
} else if ((askPets === 'no') || (askPets === 'n')) {
    alert('My cat passed away in 2017.');
} else {
    alert('Gotta love them.');
    //  console.log('Gotta love them' + askPets);
}

var askCoffee = prompt('Do I drink coffee?');

if ((askCoffee.toLowerCase() === 'yes') || (askCoffee === 'y')) {
    alert('Sure do, ' + initialAsk + ', we can go grab some.');
} else if ((askCoffee === 'no') || (askCoffee === 'n')) {
    alert('Tea is good, too, ' + initialAsk);
} else {
    alert('Good to meet you, ' + initialAsk);
    // console.log('Good to meet you' + initialAsk);
}

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
        // how do I track the right answers? out of 7

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

var martialartsArr = [
    'Kali',
    'Panatukan',
    'Brazilian jiu jitsu',
    'Muay Thai',
    'Combat Submission Wrestling',
    'Boxing',
    'Jeet Kun Do'];

var styleGuess = prompt('Of the martial arts styles I train, which are my favorite?  You have 6 guesses.');

for (var i = 0; i < 6; i++) {
    if (martialartsArr.indexOf(styleGuess) > 4 && i < 5){
        styleGuess = prompt('Those are great, not my favorite');
}

else if (martialartsArr.indexOf(styleGuess) === -1 && i < 5){
    styleGuess = prompt('I don\t train that style.');
}
    alert('')
}









