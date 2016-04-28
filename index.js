// noprotect
alert('think of a number between 1 and 63');

var min = 0;

var max = 64;

var guess = (min + max) / 2;

var guesses = 6;

var comguess = prompt('max is ' + max + ' min is ' + min + ' i guessed ' + guess + ' is it too High(H) too low (L) correct (C)');


console.log(comguess);
comguess = comguess.toUpperCase();

while (guesses !== 0) {

    if (comguess === 'L') {

        min = guess;
        guess = (guess + max) / 2;
        //var guess = max;

        comguess = prompt('max is ' + max + ' min is ' + min + ' I guessed ' + guess + ' is it too High(H) too low (L) correct (C)');
        comguess = comguess.toUpperCase();

        if (max - guess == 1) {
            alert("you've cheated! low ");
            break;
        }

    }
    else if (comguess === 'H') {
        max = guess;
        guess = (min + guess) / 2;
        //var guess = min;

        comguess = prompt('max is ' + max + ' min is ' + min + ' i guessed ' + guess + ' is it too High(H) too low (L) correct (C)');
        comguess = comguess.toUpperCase();

        if (guess - min == 1) {
            alert("you've cheated! high");
            break;

        }
    }


    else if (comguess === 'C') {

        alert("i've won!");
        break;
    }

    else {
        comguess = prompt("could you please enter H C or L");
        comguess = comguess.toUpperCase();
        console.log(comguess);

    }

    //to stop guessing 
    guesses--;
    //no crazy amount of guesses











}