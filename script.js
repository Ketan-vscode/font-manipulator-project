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
    }
}