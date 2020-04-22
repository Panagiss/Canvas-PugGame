function Pug(){

	//create snake
	this.x=9 * box;
	this.y=10 * box;
	
	this.newX=this.x;
	this.newY=this.y;

	//control snake
	this.changeDirection=function(direction){
        switch(direction){
            case 'left':
	    		this.x-=box;
	           	left.play();
                break;

            case 'up':
	    		this.y-=box;
	           	right.play();
                break;

            case 'right':
	    		this.x+=box;
	           	up.play();
				break;

            case 'down':
	    		this.y+=box;
	           	down.play();
            	break; 
        }
    }

    this.draw=function(){
		ctx.fillRect(this.x,this.y,box,box);
    }

    this.eat=function(food){
    	//if snake eats food
		if(this.x==food.pie.x && this.y==food.pie.y){
			score++;
			eat.play();
			food.pie = {
				x:Math.floor(Math.random()*17+1)*box,
				y:Math.floor(Math.random()*15+3)*box,
			}
		}
    }

    this.updateDirection=function(d){
    	if(d==37) this.x -=box;
		if(d==38) this.y -=box;
		if(d==39) this.x +=box;
		if(d==40) this.y +=box;
    }

}