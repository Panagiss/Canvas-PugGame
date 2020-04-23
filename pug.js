function Pug(){

	//create snake
	this.x=9 * box;
	this.y=10 * box;
	
	this.speedX=0;
	this.speedY=0;

	this.d='';

	//control snake
	this.changeDirection=function(direction){
        switch(direction){
            case 'left':
            	//if(this.d!=="left"){
            		this.speedX= -box;
            		this.speedY=0;
            		this.d="left";
	           		left.play();
            	//}
                break;

            case 'up':
            	//if(this.d!=="up"){
            		this.speedY= -box;
            		this.speedX=0;
            		this.d='up';
	           		right.play();
            	//}
                break;

            case 'right':
            	//if(this.d!=='right'){
            		this.speedX= box;
            		this.speedY=0;
            		this.d='right';
	           		up.play();
            	//}
				break;

            case 'down':
            	//if(this.d!=='down'){
            		this.speedY= box;
            		this.speedX=0;
            		this.d='down';
	           		down.play();
            	//}
            	break; 
        }
    }

    this.draw=function(){
    	ctx.drawImage(pugImg,this.x,this.y);
		//ctx.fillRect(this.x,this.y,box,box);
    }

    this.eat=function(food){
    	//if snake eats food
		if(this.x==food.pie.x && this.y==food.pie.y){
			score++;
			clearInterval(game);
			ms-=3;
			game=setInterval(draw,ms);
			eat.play();
			food.pie = {
				x:Math.floor(Math.random()*17+1)*box,
				y:Math.floor(Math.random()*15+3)*box,
			}
		}
    }

    this.updateDirection=function(){
    	this.x+=this.speedX;
    	this.y+=this.speedY;
    }

}