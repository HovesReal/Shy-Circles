function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    let d = dist(mouseX, mouseY, 100, 100);
  
    if (d < 25) {
    } else {
      ellipse(100, 100, 50);
    }
    
    let d2 = dist(mouseX, mouseY, 300, 300);
  
    if (d2 < 25) {
    } else {
      ellipse(300, 300, 50);
    }
  
    let d3 = dist(mouseX, mouseY, 100, 300);
  
    if (d3 < 25) {
    } else {
      ellipse(100, 300, 50);
    }
  
    let d4 = dist(mouseX, mouseY, 300, 100);
  
    if (d4 < 25) {
    } else {
      ellipse(300, 100, 50);
    }
  }
  