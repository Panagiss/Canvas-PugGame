function Food(){

	this.pie={
		x:Math.floor(Math.random()*17+1)*box,
		y:Math.floor(Math.random()*15+3)*box,
	}

	this.draw=function(){
		ctx.drawImage(foodImg,this.pie.x,this.pie.y);
	}
}