function preload(){
}
function setup(){
canvas=createCanvas(800,700);
canvas.position(100,250);
video=createCapture(VIDEO);
video.hide();

}

function draw(){
image(video, 100,100,600,500);
fill(255, 0, 0);
stroke(255, 0, 0);
circle(50, 50, 80);
rect(90, 40, 700, 20);
circle(750,50,80);
rect(750,40,20,600);
circle(750,650,80);
rect(85,650,680,20);
circle(50,650,80);
rect(50,40,20,600);
}

function Take_Snapshot(){
    save("Ahmad.png");
}