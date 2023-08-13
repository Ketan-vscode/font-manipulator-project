function setup(){
    camera = createCapture(VIDEO);
    camera.size(550,500);

    canvas = createCanvas(550 ,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(camera , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log("poseNet is intialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        textSize(difference);
        
    }
}

function draw(){
    background("#6C91C2");
    textSize(difference);
    fill("#FFE78")
    text("Ketan" ,50,400);

}

// Complete JS code in main.js file by adding:
// Define a draw() function of p5.js, and inside it write code to add background color to the canvas using background() function of p5.js
// Set a textSize for the text by using the textSize() function of p5.js
// Set the color for the text by using fill() function of p5.js
// Create text on canvas by using the text() function of p5.js.
// Syntax of text() function:
// text(‘text to be displayed’, x coordinate, y coordinate)
// So put your name in the first parameter
// And in x coordinate put any value like ,10,20,30,40,50, and so on
// And in y coordinate put any value like ,10,100,200,300, and so on
// Write code for fetching x coordinate of leftWrist and x coordinate of rightWrist from the result array coming from the posenet model, inside gotPoses() function, and store it inside variables.
// Find the difference by doing a subtraction between x coordinate of leftWrist and x coordinate of rightWrist
// Remove the decimals from the calculated difference by using floor() function and store it in a variable.
// Update textSize() with the variable which holds the calculated difference. The result of the text size will be dynamic as it depends on the movement of leftWrist and rightWrist.
