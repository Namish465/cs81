canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

color="blue";

ctx.beginPath();

ctx.strokeStyle=color;

ctx.lineWeidth=5;

ctx.arc(250,300,40,0,2*Math.PI);

ctx.stroke();

color="yellow";

ctx.beginPath();

ctx.strokeStyle=color;

ctx.lineWeidth=5;

ctx.arc(300,330,40,0,2*Math.PI);

ctx.stroke();

color="black";

ctx.beginPath();

ctx.strokeStyle=color;

ctx.lineWeidth=5;

ctx.arc(350,300,40,0,2*Math.PI);

ctx.stroke();

color="green";

ctx.beginPath();

ctx.strokeStyle=color;

ctx.lineWeidth=5;

ctx.arc(400,325,40,0,2*Math.PI);

ctx.stroke();

ctx.stroke();

color="red";

ctx.beginPath();

ctx.strokeStyle=color;

ctx.lineWeidth=50;

ctx.arc(450,300,40,0,2*Math.PI);

ctx.stroke();

ctx.stroke();

color="red";

ctx.beginPath();

ctx.strokeStyle=color;

ctx.lineWeidth=50;

ctx.rect(150,143,403,100*Math.PI);

ctx.stroke();