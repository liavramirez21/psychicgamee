var letters = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var used = 1;
var guesses = 10;


// var psychicChoice = letters[Math.floor(Math.random() * letters.length)];
// user(document.getElementById("userGuess").value);

document.getElementById("myButton").addEventListener("click", function() {
    /* function that when clicked */
    var userGuess = document.getElementById("userGuess").value;
    user(userGuess);
});

function reset(){
    wins = 0;
    losses = 0;
    used = 1;
    guesses = 10;
    document.getElementById('wins').innerHTML = 0;
    document.getElementById('losses').innerHTML = 0;
    document.getElementById('guessesRemaining').innerHTML = 0;
    document.getElementById('guessesUsed').innerHTML = 0;
    document.getElementById('userGuess').focus();
    document.getElementById('userGuess').value = '';
    document.getElementById('msg').innerHTML = 'Start by entering a letter';
    psychicChoice();
};

function psychicChoice(){
    psychicChoice = letters[Math.floor(Math.random() * letters.length)];
};

function user(l) {
    document.getElementById("userGuess").value=l;
    if(l==psychicChoice){
        wins++;
        document.getElementById('msg').innerHTML='Correct! Make a new guess.';
    }
    else{
        losses++;
        document.getElementById('msg').innerHTML='Wrong! Make a new guess.';
    }
    guesses--;
    displayResult();
};

function displayResult(){
    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guessesRemaining').innerHTML = guesses;
    document.getElementById('guessesUsed').innerHTML = used++;
    document.getElementById('userGuess').focus();
    document.getElementById('userGuess').value = '';
    if(guesses==0){
        document.getElementById('msg').innerHTML='<p>You are out of guesses! Play Again!';
        reset();
    }
};