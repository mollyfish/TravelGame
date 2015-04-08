(function() {
  //in this version we can pass the handleNoteFormSubmit to the event listener - this is what the book shows
  var playRound1 = document.getElementById('play-now');//the listener will go on this
  var beginRoundOne = function(event) {
    event.preventDefault();
    var roundOne = document.getElementById('round1');
    roundOne.setAttribute('class', 'showthis');
    playRound1.setAttribute('class', 'hidethis');
  };
  playRound1.addEventListener('click', beginRoundOne);

  var playRound2 = document.getElementById('play-now-2');//the listener will go on this
  var beginRoundTwo = function(event) {
    event.preventDefault();
    var roundTwo = document.getElementById('whereTo');
    roundTwo.setAttribute('class', 'showthis');
    playRound2.setAttribute('class', 'hidethis');
    var roundOne = document.getElementById('round1');
    roundOne.setAttribute('class', 'hidethis');
  };
  playRound2.addEventListener('click', beginRoundTwo);

  var round1Guess = document.getElementById('round1-guess');//the listener will go on this  
  var passGuess = function(event) {
    event.preventDefault();
    var answer1 = 32;
    var guessRnd1 = Number.parseInt(document.getElementById('guessVisited').value);
    event.target.guessVisited.value = '';

    var clearClues = function() {
      var elParent = document.getElementById('round1');
      var clues = elParent.getElementsByTagName('p');
        for (var i = 0; i < clues.length; i++) {
          var para = clues[i];
          para.setAttribute('class', 'hidethis')
        }
    };
    while (true) {
      if (answer1 === guessRnd1) {
        clearClues();
        var el = document.getElementById('wonRound1');
        el.setAttribute('class', 'showthis');
        var elForm = document.getElementById('round1-guess');
        elForm.setAttribute('class', 'hidethis');
        break;
      } else if (guessRnd1 >= 51) {
        clearClues();
        var el = document.getElementById('51+');
        el.setAttribute('class', 'showthis');
        break;
      } else if (guessRnd1 >= 37) { 
        clearClues();
        var el = document.getElementById('>37');
        el.setAttribute('class', 'showthis');
        break;
      } else if (guessRnd1 > answer1) {
        clearClues();
        var el = document.getElementById('>32');
        el.setAttribute('class', 'showthis');
        break;
      } else if (guessRnd1 >= 27) {  
        clearClues();
        var el = document.getElementById('<32');
        el.setAttribute('class', 'showthis');
        break;
      } else if (guessRnd1 < 27) {
        clearClues();
        var el = document.getElementById('<28');
        el.setAttribute('class', 'showthis');
        break;
      } else {
        clearClues();
        var el = document.getElementById('invalid');
        el.setAttribute('class', 'showthis');
        break;
      };
    };
  };
  round1Guess.addEventListener('submit', passGuess);

  var round2Guess = document.getElementById('round2-guess');//the listener will go on this
  var guesses = 0;
  var passStateGuess = function(event) {
    event.preventDefault();
    var answer2 = 'tennessee';
    var guessRnd2 = (document.getElementById('guessNext').value).toLowerCase();
    console.log(guessRnd2);
    event.target.guessNext.value = '';

    if (guessRnd2 === answer2) {
      console.log('You win!');
      var elForm = document.getElementById('map')
      elForm.setAttribute('class', 'hidethis')
      var elList = document.getElementById('possibilities')
      elList.setAttribute('class', 'hidethis')
      var el = document.getElementById('hints')
      el.setAttribute('class', 'hidethis')
      var wonRound2 = document.getElementById('congrats2')
      wonRound2.setAttribute('class', 'showthis')
    } else {
      console.log('Guess again!');
      var el = document.getElementById('hints')
      el.setAttribute('class', 'showthis')
        if (guesses === 0) {
          var el = document.getElementById('hint1')
          el.setAttribute('class', 'showthis')
          guesses++;
          console.log(guesses);
          event.target.guessNext.value = '';
        } else if (guesses === 1) {
          var el = document.getElementById('hint2')
          el.setAttribute('class', 'showthis')
          guesses++;
          console.log(guesses);
          event.target.guessNext.value = '';
        } else if (guesses === 2) {
          var el = document.getElementById('hint3')
          el.setAttribute('class', 'showthis')
          guesses++;
          console.log(guesses);
          event.target.guessNext.value = '';
        } else if (guesses === 3) {
          var el = document.getElementById('hint4')
          el.setAttribute('class', 'showthis')
          guesses++;
          console.log(guesses);
          event.target.guessNext.value = '';
        } else if (guesses === 4) {
          var el = document.getElementById('hint5')
          el.setAttribute('class', 'showthis')
          guesses++;
          console.log(guesses);
          event.target.guessNext.value = '';
        } else {
          var guessForm = document.getElementById('next-state')
          guessForm.setAttribute('class', 'hidethis')
          var hideHints = document.getElementById('hints')
          hideHints.setAttribute('class', 'hidethis')
          var lostRound2 = document.getElementById('fail-msg')
          lostRound2.setAttribute('class', 'showthis')
        }
      } 
    };
  round2Guess.addEventListener('submit', passStateGuess);


})();