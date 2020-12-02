class Box extends BaseClass {
    constructor(x, y, width, height){
        var options = {
            restitution:0,
            friction:10,
            density:0
        }
      super(x,y,width,height,options);
    }
  display(){
    if(this.body.speed < 3){
      fill("blue");
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
      super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      pop();
  }
}
  };
  