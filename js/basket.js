class Basket{

constructor(){
var options = {
    isStatic:true
}
this.Image1 = loadImage("pole.png")
this.Image2 = loadImage("basket.png")
this.body = Bodies.rectangle(800,200,250,230);
World.add(world,this.body);
}

display(){
imageMode(CENTER)
    image(this.Image1,800,400,100,400)
    image(this.Image2,775,225,250,230)
}





}