
function rectRosa(){
    var c = document.getElementById("lienzo");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.rect(20, 20, 120, 100);
    ctx.fillStyle = "pink";
    ctx.fill();
}
function triangulo(){
    var c = document.getElementById("lienzo");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(275,50);
    ctx.lineTo(100,75);
    ctx.lineTo(100,25);
    ctx.fillStyle = "yellow";
    ctx.closePath();
    ctx.fill();
}

function rectVerde(){
    var c = document.getElementById("lienzo");
    if (c.getContext){ 
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.rect(40,100, 150, 10);
        ctx.fillStyle = "green";
        ctx.fill();
    }
}

function circulo(){
    var c = document.getElementById("lienzo");
    if (c.getContext){ 
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(150, 75, 50, 0, 2 * Math.PI);
        ctx.stroke(); 
    }

}




