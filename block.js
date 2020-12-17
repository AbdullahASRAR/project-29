class Block {
    constructor(x,y,width,height){

        var bodyOpt={
            restitution:0
          }
          this.width=width;
          this.height=height;
          
          this.body=Bodies.rectangle(x,y,width,height,bodyOpt);
          World.add(world,this.body);

    }

    // function

    display(){
        var pos= this.body.position
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height);
    }
}