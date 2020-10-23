class Box extends BaseClass {
  constructor(x, y){
    super(x,y,30,30);
    this.image = loadImage("Capture.jpg");
    this.visiblity = 255
  }
  display(){
    
    console.log(this.body.speed)
    if (this.body.speed < 3) {
      super.display();
    } else {
        World.remove(world,this.body);
        push();
        this.visiblity = this.visiblity - 5;
        tint(255,this.visiblity);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,30,30);
        pop();
      }
  }
}