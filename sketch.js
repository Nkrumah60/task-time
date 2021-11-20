
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let backgroundImg;
let Bg;

let inputBox;
let submitButton;
let showButton;
let index = 0
let para
let showTask =[]

function preload(){

backgroundImg = loadImage("sunrise.png");

}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  database = firebase.database();

  para = createElement('textarea','')
  para.position(550,400);
  //para.hide();

  inputBox = createInput("");
  inputBox.position(550,300);
  //inputBox.hide();

  submitButton = createButton("Submit");
  submitButton.position(600,350);
  //submitButton.hide()

  showButton = createButton("show")
  showButton.position(50,10);
  //showButton.hide();
 

  
  
}


function draw() 
{


  if(backgroundImg){
    background(backgroundImg);
  }

 

  showButton.mouseClicked(()=>{

  inputBox.show();
  submitButton.show();
  para.show()
  readTask();
 
  })

  submitButton.mouseClicked(()=>{
    inputBox.hide();
    index += 1
    addtask();
    readTask();

 
   // text("Heyyyy",500,250);
    //let date = new Date();
   // let hour = date.getHours();
    /*
    if(hour>=06 && hour<=11){
      bg = "morning.jpg"
  
      console.log("goodMorning");
    }
    else if(hour>=12 && hour<=15){
  
      bg = "afternoon.jpg"
      console.log("noon");
    }
    else if(hour>=16 && hour<=17){
  
      console.log("goodEvening");
      bg = "evening.png"
  
    }
    else{
    //console.log("goodNight")
    
    bg = "night.jpg"
    backgroundImg = loadImage(bg);
    //console.log(inputBox.value());
    }
  
    text("Good Night "+inputBox.value(),500,250);
  */
    //text("Good Night "+inputBox.value(),500,250);
  }) 
  Engine.update(engine);
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let seconds = date.getSeconds();
  textSize(30);
  text("Time: "+hour+": "+min+": "+seconds,500,25);
  //window.reload();
 //getTime();//API 

 if(hour>17){

  text("Good Night "+inputBox.value(),500,250);

 }
}
/*
async function getTime(){

  let response = await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles");
  let responseJSON = await response.json();
  let dateTime = responseJSON.datetime;
  let hour = dateTime.slice(11,13);
  //console.log(hour);

  if(hour>=06 && hour<=11){
    bg = "morning.jpg"

    console.log("goodMorning");
  }
  if(hour>=12 && hour<=15){

    bg = "afternoon.jpg"
    console.log("noon");
  }
  if(hour>=16 && hour<=17){

    console.log("goodREvening");
    bg = "evening.png"

  }
  else{
  //console.log("goodNight");
  bg = "night.jpg"
  text("Good Night "+inputBox.value(),500,250);
  console.log(inputBox.value());
  }
  backgroundImg = loadImage(bg);

}
*/

function addtask(){
  let taskIndex = "tasks/task" +index;

 

  database.ref(taskIndex).set({
    task:para.value()
    
    
  });

  /* database.ref(taskIndex).update({
    task:task = para.value()
    
    
  });
  */
}

function readTask(){
let readtaskRef = database.ref("tasks/task" +index);
readtaskRef.on("value",(data)=>{


showTask = data.val();
console.log(showTask);


})





}




