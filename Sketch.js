let carImg1; // Establish a variable globally for the instance of the oject.
let bgImg;
let winner = "";

function preload() {
  carImg1 = loadImage("images/ghost.png");  // file name must match EXACTLY
  bgImg= loadImage ("images/forest.jpg")
}

let rCar1;
let rCar2;



let finishLineX = 350;   // where the race ends
let gameRunning = true;  // used to stop the race


function setup() {
  createCanvas(400, 200);
  rCar1 = new RaceCar(96, 50, 2, carImg1); // Create the instance of the object.
  rCar2 = new RaceCar(60, 50, 3.02, carImg1);
}

function draw() {
    image(bgImg, 0, 0, width, height); // fills the whole canvas 


    
  if (gameRunning) {
    rCar1.move();
    rCar2.move();
  }

  rCar1.display(); // Call the the method within the object to display the car.
  rCar2.display();
 
   checkFinish(rCar2, "Top Ghost");
  checkFinish(rCar1, "Bottom Ghost");


if (!gameRunning && winner !== "") {
  textSize(50);
  fill("orange");
  textAlign(CENTER, CENTER);
  text(winner + " wins!", width/2, height/2);
}
}

function RaceCar(tempY, tempSize, tempSpeed, tempImage) { // Define temporary variables for the object inputs.

  this.speed = tempSpeed; // Assign the temporary variables coming in to instanced this. varibales.
  this.image = tempImage;
  this.size = tempSize;
  this.yPos = tempY;
  this.xPos = 10;

  this.display = function() { // A method for displaying the race car.
  
    image(this.image, this.xPos, this.yPos, this.size, this.size);
  }

  this.move = function() {
      this.xPos = this.xPos + this.speed;
  }
}

  function checkFinish(car, name) {
  if (car.xPos + car.size >= finishLineX && gameRunning) {
    gameRunning = false;  // stops the race
     winner = name;         // store the winner
    console.log(name + " wins!");
  }
}


