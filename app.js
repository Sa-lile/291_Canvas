
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',function(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})

// canvas.setAttribute('width', '500');
// canvas.setAttribute('height', '200');
// aspect ratio

ctx.font = '40px serif';
// ctx.strokeText('Hello World', 40, 50);
ctx.fillStyle = 'red';
ctx.fillText('Hello World', 40, 50);


// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.arc(75,75,50,0,2 * Math.PI);
// ctx.moveTo(75,75);
// ctx.lineTo(125,75);
// ctx.fillStyle = "red";
// ctx.fill()




// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.moveTo(75,50);
// ctx.lineTo(100,75);
// ctx.lineTo(100,25);
// ctx.closePath()
// // ctx.lineTo(75,50);
// ctx.stroke();
// // ctx.fill();

