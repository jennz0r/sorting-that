// List of garbage images and the correct bin as objects
let garbage = [
  {
    name: 'Ball Chain',
    path: 'img/garbage/ball_chain.png',
    bin: 'landfill',
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
    name: 'Coffee Grounds',
    path: 'img/garbage/coffee_grounds.png',
    bin: 'compost',
    err: false
  }, {
    name: 'Paper Cup & Sleeve',
    path: 'img/garbage/cup_and_sleeve.png',
    bin: 'recycle',
    err: false
  }, {
    name: 'Deodorant',
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
    name: 'Used Paper Plate',
    path: 'img/garbage/paper_plate.png',
    bin: 'compost',
    err: false
  }, {
    name: 'Paper Towel Roll',
    path: 'img/garbage/paper_towel_roll.png',
    bin: 'recycle',
    err: false
  }, {
    name: 'Plastic Utensils',
    path: 'img/garbage/plastic_utensils.png',
    bin: 'recycle',
    err: false
  }, {
    name: 'Plastic? Lid',
    path: 'img/garbage/plastic_coffee_lid.png',
    bin: 'recycle',
    err: false
  }, {
    name: 'Plastic? Cup',
    path: 'img/garbage/plastic_cup.png',
    bin: 'compost',
    err: false
  }, {
    name: 'Soup Can',
    path: 'img/garbage/soup_can.png',
    bin: 'recycle',
    err: false
  }, {
    name: 'Tic Tac Container',
    path: 'img/garbage/tictac_container.png',
    bin: 'recycle',
    err: false
  }, {
    name: 'Toilet Paper Roll',
    path: 'img/garbage/toilet_paper_roll.png',
    bin: 'recycle',
    err: false
  }, {
    name: 'Wrapper',
    path: 'img/garbage/wrapper.png',
    bin: 'landfill',
    err: false
  }
];

let sounds = ['leviosa', 'coucou', 'no'];

// Number of images to sort
// This may change to be selectable in the future.
let numItems = 18;
let counter = 0;
let wrongAnswers = 0;
let time = 0;
let timeID = null;

// Start the game
// Show the first garbage image, 
let handleStart = () => {
  document.getElementById("theme").play();
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
  document.getElementById("theme").play();
  displayErrors();
}

let displayErrors = () => {
  garbage.forEach((piece) => {
    if (piece.err) {
      let $item = $('<div class="err-container" />');
      let $name = $('<h2 class="err-name" />').text(piece.name);
      let $img = $('<img class="err-img">').attr('src', piece.path);
      let $bin = $('<p class="err-bin" />').text(piece.bin);
      $item.append($name);
      $item.append($img);
      $item.append($bin);
      $('.errors').append($item);
    }
  });
}

let handleInfo = () => {
  $('.score').fadeOut(300);
  $('.scoring').fadeIn(1500);
}

let handleBack = () => {
  $('.scoring').fadeOut(200);
  $('.score').fadeIn(1500);
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
    // document.getElementById(sounds[Math.floor(Math.random()*sounds.length)]).play();
    document.getElementById("leviosa").play();
    garbage[counter].err = true;
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
