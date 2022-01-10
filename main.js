rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 450);
    video.position(200, 150)

    canvas = createCanvas(550, 450);
    canvas.position(900, 180);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    background("black");
    textSize(difference); 
    fill("yellow");
    text("Ash", 50, 400);
    document.getElementById("font").innerHTML = `The font size is ${difference}px`;
}

function modelLoaded(){
    console.log("PoseNet is Initialized")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}