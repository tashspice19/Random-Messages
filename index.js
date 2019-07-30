


var message = $('h2');
console.log(message);
 /// var message = messageT;
// var message = $('h2');


console.log(message);
var tea = $('.tea');
// console.log(tea);

var popcorn = $('.popcorn');
// console.log(popcorn);

tea.on('click', doSomething1);
popcorn.on('click', doSomething2);

function doSomething1() {
  event.preventDefault();
  var randomDecimal = Math.random();
  var random = randomDecimal *8;
  var number = Math.floor(random);
 var messageT = ["It's complicated", "I flipped their contact name for two weeks and now I've been texting the wrong guy", "I told my mom the transmission light was on for a day but idrk", "Sip Sip cause this tea is HOT", "Get away from me Weirdos", "That's the tea sis", "FOODIEEEE", "I need some fushia orange"];
 message.text(` ${messageT[number]}`);


}

function doSomething2() {
  event.preventDefault();
  var randomDecimal = Math.random();
  var random = randomDecimal *8;
  var number = Math.floor(random);
 var messageP = ["Let me grab some popcorn cause its about to go down", "oh no they broke up (Me 5 seconds later) Yay their back together","I see a snakey snake in the distance", "Sorry, but I can't be in the drama. I'm at camp.", "Lolsyyyysss" , "Get your hands off of me. 'Or What'. Ackward silence", "This is not it hon-Layla", "Does anyone hear some pop pop pop POP QUIZZZZ"];
 message.text(` ${messageP[number]}`);


}
