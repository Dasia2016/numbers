// noprotect
alert('think of a number between 1 and 63');

  var min = 0;

  var max = 64;

  var guess = (min+max)/2;

  var guesses = 6;

var comguess = prompt ('i guessed hi liann '+guess+' is it too High(H) too low (L) correct (C)');
  comguess=comguess.toUpperCase(); 

while (guesses!==0){
  
   if (comguess === 'L'){ 
 
      max = guess;
    var guess = (guess+max)/2; 
    //var guess = max;
    
    var comguess = prompt ('I guessed '+ guess+' is it too High(H) too low (L) correct (C)');
  comguess=comguess.toUpperCase(); 
  
  }
  else if (comguess === 'H'){
         min = guess;
      var  guess = (min+guess)/2;
   //var guess = min;
     
      var comguess = prompt ('i guessed '+ guess+' is it too High(H) too low (L) correct (C)');
  comguess=comguess.toUpperCase(); 
  }
  else if (comguess === ''){
  
  var comguess = prompt ("could you please enter H C or L");
   }

  else if (comguess === 'C'){
  
   alert("i've won!");
   break;
   }
  
  else   {
    alert("you've cheated!");
  break;
    
 }

//to stop guessing 
  guesses--;
  //no crazy amount of guesses











}
  