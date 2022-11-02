diffrence=0;
leftWristX=0;
rightWristX=0;
function setup(){
   video= createCapture(VIDEO);
   video.size(550,500);
   canvas=createCanvas(550,500);
   canvas.position(560,100);
   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('POSE NET IS INITIALISED!!');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x; 
        rightWristX=results[0].pose.rightWrist.x;
        diffrence=floor(leftWristX-rightWristX);

        console.log("leftWristX ="+leftWrist+"rightWristX ="+rightWristX+"difference="+diffrence);
    }
}
function draw(){
    background('#FFD700');
    textSize(diffrence);
    fill('#964B00');
    stroke('#964B00');
    text('Aikanshi',30,300)
}