// List of garbage images and the correct bin as objects
let garbage = [
  {
    name: 'Green Bottle',
    path: 'img/garbage/green_bottle.png',
    bin: 'recycle',
    err: false
  },
  {
    name: 'Battery',
    path: 'img/garbage/battery.png',
    bin: 'special',
    err: false
  },
  {
    name: 'Batt 1',
    path: 'img/garbage/battery.png',
    bin: 'special',
    err: false
  },
  {
    name: 'Batt 2',
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
let time = 0;

// Start the game
// Show the first garbage image, 
let handleStart = () => {
  $('.timer-min').html(time);
  time = setInterval(timer, 1000);
  $('.header').fadeOut(300);
  $('.main-game').fadeIn(1500);
  showNextImg();
}

let endGame = () => {
  clearInterval(time);
  $('.main-game').fadeOut(300);
  $('.score').fadeIn(1500);

  let finalScore = time + wrongAnswers;
  $('.final-score').html(finalScore);
}

// For each garbage image, display the image
// Wait for use to click a button
let showNextImg = () => {
  if (counter == numItems) {
    endGame();
    return;
  }
  $('.garbage-title').html(garbage[counter].name)
  $('.garbage-img').attr('src', garbage[counter].path);
}

// On button click
// Show a new piece of garbage
let handleBinClick = (e) => {
  // If the bin DOES NOT match the bin of the item,
  // do add time to the score
  if (e.target.name != garbage[counter].bin) {
    wrongAnswers++;
  }
  counter++;
  showNextImg();
}

let timer = () => {
  console.log(time);
  time++;
  $('.timer-min').html(time);
}
