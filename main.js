canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mars_image_array=["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg","mars5.jpg"];
random_number=Math.floor(Math.random()*5);
rover_width=100;
rover_height=90;
background_image=mars_image_array[random_number];
rover_image="rover.png";
rover_x=90;
rover_y=20;

function add(){
 backgroundT=new Image();
 backgroundT.onload=uploadBackground;
 backgroundT.src=background_image;

roverT=new Image();
roverT.onload=uploadRover;
roverT.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(backgroundT,0,0,canvas.width,canvas.height);
}

 function uploadRover(){
     ctx.drawImage(roverT,rover_x,rover_y,rover_width,rover_height);
 }
 
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=='38'){
        up();
        console.log("up");
    }
    if(keypressed=='40'){
        down();
        console.log("down");
    }
    if(keypressed=='37'){
        left();
        console.log("left");
    }
    if(keypressed=='39'){
        rigth();
        console.log("right");
    }
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log(rover_x,rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log(rover_x,rover_y);
        uploaBackground();
        uploadRover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log(rover_x,rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log(rover_x,rover_y);
        uploadBackground();
        uploadRover();
    }
}