// author: Dave Davies
// 15/07/23
// love you Bob <3

console.log("main");

//hi, this is a canvas file
canvas = document.querySelector('canvas');
var context = document.querySelector("canvas").getContext("2d");

// sets the size of the canvas
// I find having it the full height makes it make a scroll bar
// which like, ew
canvas.width = window.innerWidth;
canvas.height = window.innerHeight*0.99;

// if it resizes it won't shit itself
window.addEventListener('resize',function(event){
    canvas.width = window.innerWidth-5;
    canvas.height = window.innerHeight-5;
})

// locations of the mouse initially
var mouse = {
    x: undefined,
    y: undefined
}

// pays attention to the location of the mouse
window.addEventListener('mousemove',function(event){
    mouse.x = event.x;
    mouse.y = event.y;

    // if the mouse goes off the screen it won't cry
    if (mouse.x <= 10 || mouse.y <= 10
        || mouse.x >= canvas.width-10 || mouse.y >= canvas.height-10){
        mouse.x = undefined;
        mouse.y = undefined;
    }
})

// sometimes this is helpful
// not yet
// but
// Idk, rendomisation is very sexy to me and I like having this function around just in case
function randInt(x, y){
    return(Math.floor((Math.random()*(y-x))));
}


// this was me failing to make gradients work
// var gradient = context.createRadialGradient(1000, this.y, 100, 100, 100, 100);
// gradient.addColorStop(0, 'rgba(255,123,255,1)');
// gradient.addColorStop(1, 'rgba(0,0,0,1)');

function animate(){
    // god knows what this line does
    // don't touch it tho
    requestAnimationFrame(animate);

    // draw the background
    // if you don't draw the background we have nothing to cover the previous circles with
    // make sure the fillstyle is the same colour as the background in the CSS
    // I would recommend commenting this out temporarily to see what it does 'cause it looks cool
    // put it back tho
    context.beginPath();
    context.fillStyle = "#301934";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fill();

    // arbitrary, change as you see fit
    // size of circle around mouse
    var size = canvas.height/8;

    // the loop of hell
    for(i = size; i > 0; i--){
        context.beginPath();
        context.arc(mouse.x, mouse.y, i, 0, 2 * Math.PI);
        // this line is a mathematical aneurysm
        // edit at your own risk
        context.strokeStyle = "rgba(255,123,255,"+(size-i)/size/3+")";
        //context.fillStyle = gradient;

        // I feel like I'm having a
        context.stroke();
    }

}

// actually makes it update
animate();
