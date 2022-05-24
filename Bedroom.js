function backbed(){
    window.location.replace('index.html')
}
Bed = "";
status = "";
function preload(){
  img = loadImage('bedroom.jpg');
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector =ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML ="Status:Detecting Objects";
}
function modelLoaded(){
  status = true;
  console.log("Model is loaded");
  objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
  if(error){
    console.log(error);
  }
  console.log(results);
}
function draw(){
    image(img,0,0,640,420);
    fill('red');
    text("Bed",65,75);
    noFill();
    stroke('red');
    rect(45,60,420,340);

    fill('red');
    text("Armchair",410,80);
    noFill();
    stroke('red');
    rect(400,50,200,330);
    
}