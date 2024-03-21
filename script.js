// RGB COLORS

//variables to store HTML elements
let previewBtnE1 = document.getElementById("preview-btn");
let redInE1 = document.getElementById("redIn");
let greenInE1 = document.getElementById("greenIn");
let blueInE1 = document.getElementById("blueIn");
let rgbStringOutE1 = document.getElementById("rgbStrOut");
let display1 = document.getElementById("display");

//EVENT LISTENER
document.getElementById("preview-btn").addEventListener("click", rgbPreview);

function rgbPreview() {
  //input to get r, g , b, values
  let r = +redInE1.value;
  let g = +greenInE1.value;
  let b = +blueInE1.value;

  // validate colors (constrain colors between 0 - 225)

  // IF R LESS THAN 0 LET IT EQUAL TO ONLY 0
  if (r < 0) {
    r = 0;
    redInE1.value = 0;
  } //if r greater than 255 equal 255
  else if (r > 255) {
    r = 255;
    redInE1.value = 255;
  }

  //IF G GREATER THAN 255 LET IT EQUAL TO ONLY 255
  if (g > 255) {
    g = 255;
    greenInE1.value = 255;
  } //if g less than 0 equal 0
  else if (g < 0) {
    g = 0;
    greenInE1.value = 0;
  }

  //IF B GREATER THAN 255 LET IT EQUAL TO ONLY 255
  if (b > 255) {
    b = 255;
    blueInE1.value = 255;
  } //if b less than 0 equal 0
  else if (b < 0) {
    b = 0;
    blueInE1.value = 0;
  }
  //process= build the rgb string
  let rgbString = "rgb(" + r + "," + g + "," + b + ")";

  rgbStringOutE1.innerHTML = rgbString;
  display1.style.background = rgbString;
}
