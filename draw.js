const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");

//create unit to split canvas as a table of square
const box = 32;

//create score
let score=0; 
let bestScore;

//load images
const backroundImg = new Image();
backroundImg.src = "img/ground.png";
const foodImg = new Image();
foodImg.src = "img/food.png";

//load audio files
const dead= new Audio();
const eat= new Audio();
const up= new Audio();
const down= new Audio();
const left= new Audio();
const right= new Audio();
dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";
right.src = "audio/right.mp3";

//create snake obj
var pug = new Pug();
//create food obj
var pie = new Food();


//control snake
var d=0;
document.addEventListener("keydown",function(event){
    switch(event.keyCode){
        case 37:
        	if(d!=39){
        		d=37;
        		pug.changeDirection('left');
        	}
            break;

        case 38:
        	if(d!=40){
        		d=38;
        		pug.changeDirection('up');
        	}
            break;
            
        case 39:
        	if(d!=37){
        		d=39;
        		pug.changeDirection('right');
        	}
            break;

        case 40:
        	if(d!=38){
        		d=40;
  				pug.changeDirection('down');        	
  			}
            break;
    }
});

function saveCookie(newBest){
	var cookieString="";
	expireDate = new Date();
 	expireDate.setMonth(expireDate.getMonth() + 12);
	document.cookie = "Score=" +newBest+ ";expires="+ expireDate.toGMTString() + ";";
}

function loadCookie(){
	var cookie=[];
	var loadedCookies=document.cookie.split(";");
	cookie = loadedCookies[0].split("=");
	if(typeof cookie[1] === 'undefined'){
		return null;
	}
	return cookie[1].trim();
}


//check for cookies
var cookie=loadCookie();
if(cookie !== null && cookie !== ""){
	bestScore=parseInt(cookie);
}else{
	bestScore=0;
}

//draw functiom
function draw(){
	ctx.drawImage(backroundImg,0,0);

	pug.draw();
	pie.draw();
	
	//which direction
	pug.updateDirection(d);
	//if snake eats pie
	pug.eat(pie);
	

	//gave over
	if(pug.x<box || pug.x>17*box || pug.y<3*box ||pug.y >17*box ){
		clearInterval(game);
		dead.play();
		if(score>bestScore){
			if(!window.alert("Game Over\nNew Best Score:"+score)){
				saveCookie(score);
				location.reload(true);
			}
		}else{
			if(!window.alert("Game Over\nScore:"+score)){
				location.reload(true);
			}
		}
		
	}

	//pug.x=pug.newX;
	//pug.y=pug.newY;


	ctx.fillStyle="White";
	ctx.font="45px Changa one";
	ctx.fillText(score,2*box,1.6*box);
	if(bestScore<score){
		ctx.fillStyle="White";
		ctx.font="45px Changa one";
		ctx.fillText("New Best: "+score,10*box,1.6*box);
	}

}

//call draw function every 100 ms
let game=setInterval(draw,150);
