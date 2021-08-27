// import functions

// reference needed DOM elements
const nounOneInput = document.getElementById('noun-1-input');
const pluralNounInput = document.getElementById('plural-noun-1-input');
const nounTwoInput = document.getElementById('noun-2-input');
const verbOneInput = document.getElementById('verb-1-input');
const verbTwoInput = document.getElementById('verb-2-input');
const verbThreeInput = document.getElementById('verb-3-input');
const greetingInput = document.getElementById('greeting-input');

const nounOneSpan = document.getElementById('noun-1');
const pluralNounSpan = document.getElementById('plural-noun-1');
const nounTwoSpan = document.getElementById('noun-2');
const verbOneSpan = document.getElementById('verb-1');
const verbTwoSpan = document.getElementById('verb-2');
const verbThreeSpan = document.getElementById('verb-3');
const greetingSpan = document.getElementById('greeting');

const buttonRoll = document.getElementById('button');

const songGoAway = document.getElementById('song');

const lyricsAppear = document.getElementById('lyrics');

const rickAppear = document.getElementById('rick');

const audioPlay = document.getElementById('audio');

// set event listeners 
buttonRoll.addEventListener('click', () => {
    nounOneSpan.textContent = nounOneInput.value;
    pluralNounSpan.textContent = pluralNounInput.value;
    nounTwoSpan.textContent = nounTwoInput.value;
    verbOneSpan.textContent = verbOneInput.value;
    verbTwoSpan.textContent = verbTwoInput.value;
    verbThreeSpan.textContent = verbThreeInput.value;
    greetingSpan.textContent = greetingInput.value;


    lyricsAppear.style.visibility = 'visible';

    songGoAway.style.visibility = 'hidden';

    rickAppear.style.visibility = 'visible';

    audioPlay.play('audio');


});

    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
