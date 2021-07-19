var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(1350,650); 
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    textFont("Times New Roman");
    textSize(100);
    noStroke();
    fill("white");
    text(" SUPER MAN CLOCK", 350,130);

    textSize(55);
    noStroke();
    fill(0,255,0);
    text("GREEN stands for HOUR HAND", 430,230);

    textSize(55);
    noStroke();
    fill("red");
    text("RED stands for MINUTES HAND", 430,300);

    textSize(55);
    noStroke();
    fill("yellow");
    text("YELLOW stands for SECONDS HAND", 430,370);

    textSize(18);
    noStroke();
    fill("white");
    text("12", 195,90);

    noStroke();
    fill("white");
    text("11", 135,110);

    noStroke();
    fill("white");
    text("10", 90,150);

    noStroke();
    fill("white");
    text("9", 80,205);

    noStroke();
    fill("white");
    text("8", 90,255);

    noStroke();
    fill("white");
    text("7", 135,295);

    noStroke();
    fill("white");
    text("6", 200,310);

    noStroke();
    fill("white");
    text("5", 260,300);

    noStroke();
    fill("white");
    text("4", 295,255);

    noStroke();
    fill("white");
    text("3", 310,205);

    noStroke();
    fill("white");
    text("2", 295,150);

    noStroke();
    fill("white");
    text("1", 255,115);


    //Translation and rotation 
    translate(200,200)
    rotate(-90)

    //Calculating time using predefined func from p5.js
    hr = hour();
    mn = minute();
    sc = second();

    //To create ab iterative rotation
    strokeWeight(8);
    stroke(255, 150, 235);
    noFill();
    scAngle = map(sc, 0, 60, 0, 360);
    strokeWeight(8);
    stroke(154, 234, 101);
    mnAngle = map(mn,0,60,0,360);
    strokeWeight(8);
    stroke(137, 96, 253);
    hrAngle = map(hr % 12,0,12,0,360);

    //drawing seconds hand
    push();
    rotate(scAngle); //rotate the hand based on angle calculated
    stroke("yellow");
    strokeWeight(2);
    line(0,0,95,0);
    pop()

    //drawing minutes hand
    push();
    rotate(mnAngle);
    stroke("red");
    strokeWeight(5);
    line(0,0,75,0);
    pop()

    //drawing hour hand
    push();
    rotate(hrAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,45,0);
    pop()

    stroke("white");
    strokeWeight(10);
    point(0,0)

    //drawing the arcs
    strokeWeight(4);
    noFill();
    //Seconds
    stroke("yellow");
    arc(0,0,300,300,0,scAngle);
    //Minutes
    strokeWeight(6);
    stroke("red");
    arc(0,0,280,280,0,mnAngle);
    //Hour
    strokeWeight(7);
    stroke(0,255,0);
    arc(0,0,260,260,0,hrAngle);

    push();
    fill(255);
    noStroke();
    rotate(90);
    textSize(150);
    textAlign(CENTER);
    text(hr + ':' + mn + ':' + sc,80,320);
    pop();

    drawSprites();
  // strokeWeight(5);
   //stroke(0,255,0);
  
}
