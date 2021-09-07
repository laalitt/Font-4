function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
canvas.position(560,150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet Is Initialized!');
}
function draw() {
    background( '#8B0000' );
    document.getElementById("font_size").innerHTML = "Width And Height Of The Name Will Be = " + difference + "px";
    textSize(difference);
    fill('white');
    text('Lalit', 50, 400);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;

        console.log("leftWristX = " + leftWristX + "rightWristX = "+ rightWristX + "difference = " + difference);
    }
}