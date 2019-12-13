// List of garbage images and the correct bin as objects
let garbage = [
  {
    name: 'Ball Chain',
    path: 'img/garbage/ball_chain.png',
    bin: 'recycle',
    err: false
  }, {
    name: 'Battery',
    path: 'img/garbage/battery.png',
    bin: 'special',
    err: false
  }, {
    name: 'Beer Bottle',
    path: 'img/garbage/beer_bottle.png',
    bin: 'recycle',
    err: false
  }, {
    name: 'Cat Food Can',
    path: 'img/garbage/cat_food_can.png',
    bin: 'recycle',
    err: false
  }, {
    name: 'Deodorant Container',
    path: 'img/garbage/deodorant_container.png',
    bin: 'recycle',
    err: false
  }, {
    name: 'Dirty Paper Plate',
    path: 'img/garbage/dirty_paper_plate.png',
    bin: 'compost',
    err: false
  }, {
    name: 'Milk Jug',
    path: 'img/garbage/milk_jug.png',
    bin: 'recycle',
    err: false
  }, {
    name: 'Pamphlet',
    path: 'img/garbage/pamphlet.png',
    bin: 'recycle',
    err: false
  }, {
    name: 'Plastic Utensils',
    path: 'img/garbage/plastic_utensils.png',
    bin: 'recycle',
    err: false
  }, {
    name: 'Tic Tac Container',
    path: 'img/garbage/tictac_container.png',
    bin: 'recycle',
    err: false
  }
]

// Number of images to sort
// This may change to be selectable in the future.
let numItems = 10;
let counter = 0;
let wrongAnswers = 0;
let time = 0;
let timeID = null;

// Start the game
// Show the first garbage image, 
let handleStart = () => {
  timeID = setInterval(timer, 1000);
  $('.header').fadeOut(300);
  $('.main-game').fadeIn(1500);
  showNextImg();
}

let endGame = () => {
  clearInterval(timeID);
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
  time++;
  $('.timer-min').html(Math.floor(time/60));
  $('.timer-sec2').html(((time%60) - (time%60)%10)/10);
  $('.timer-sec1').html((time%60)%10);
}
