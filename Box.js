class Box extends BaseClass {
  constructor(x, y){
    super(x,y,70,70);
    this.Visiblity = 255;
  }
  display(){
    if(this.body.speed < 3){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       pop();
     }
  }
}
