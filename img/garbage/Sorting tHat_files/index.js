// List of garbage images and the correct bin as objects
let garbage = [
  {
    path: 'img/garbage/green_bottle.png',
    bin: 'recycle',
    err: false
  },
  {
    path: 'img/garbage/battery.png',
    bin: 'special',
    err: false
  },
  {
    path: 'img/garbage/battery.png',
    bin: 'special',
    err: false
  },
  {
    path: 'img/garbage/battery.png',
    bin: 'special',
    err: false
  }
]

// Number of images to sort
// This may change to be selectable in the future.
let numItems = 2;
let counter = 0;
let wrongAnswers = 0;
let timer = 0;

// Start the game
// Show the first garbage image, 
let handleStart = () => {
  console.log('start the game and the timer');
  $('.header').fadeOut(300);
  $('.main-game').fadeIn(1500);
  showNextImg();
}

let endGame = () => {
  $('.main-game').fadeOut(300);
  $('.score').fadeIn(1500);

  let finalScore = timer + wrongAnswers;
  $('.final-score').html(finalScore);
}

// For each garbage image, display the image
// Wait for use to click a button
let showNextImg = () => {
  if (counter == numItems) {
    console.log('end the game');
    endGame();
    return;
  }

  $('.garbage-img').attr('src', garbage[counter].path);
  counter++;
}

// On button click
// Show a new piece of garbage
let handleBinClick = (e) => {
  // If the bin DOES NOT match the bin of the item,
  // do add time to the score
  if (e.target.name != garbage[counter].bin) {
    console.log('wrong bin');
    wrongAnswers++;
  }
  showNextImg();
}
