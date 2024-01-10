let beams = [];
let clusterColor;

function setup() {
  createCanvas(800, 600);
  background(0);
  clusterColor = getRandomColor(); // Initialize the first cluster color
  for (let i = 0; i < 100; i++) {
    beams.push(new LaserBeam());
  }
}

function draw() {
  background(0);
  for (let beam of beams) {
    beam.move();
    beam.display();
  }
}

function mousePressed() {
  clusterColor = getRandomColor(); // Change the cluster color on mouse click
}

function getRandomColor() {
  // Function to get a random color
  return color(random(255), random(255), random(255));
}

class LaserBeam {
  constructor() {
    // Random direction
    this.direction = p5.Vector.random2D();
    this.speed = random(0.5, 1.5); // Slower speed
  }

  move() {
    this.direction.rotate(random(-0.02, 0.02)); // Smaller change in direction for smoother movement
  }

  display() {
    stroke(clusterColor); // Use the cluster color for all beams
    line(width / 2, height / 2, width / 2 + this.direction.x * 1000, height / 2 + this.direction.y * 1000);
  }
}
