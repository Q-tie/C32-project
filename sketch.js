const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundImg)
    background(backgroundImg)


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch("http://worldclockapi.com/api/json/est/now")
    var responseJSON = await response.json()
    console.log(responseJSON)
    var currentDateTime = responseJSON.currentDateTime;
    var hour = currentDateTime.slice(11 ,13);
    console.log(hour)
    if(hour >= 5 && hour <= 6){
        bg = "sunrise1.png";
    }
    else if (hour >= 6 && hour <= 7){
        bg = "sunrise2.png";
    }
    else {
        bg = "sunset7.png";
    }
    backgroundImg = loadImage(bg);

    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}