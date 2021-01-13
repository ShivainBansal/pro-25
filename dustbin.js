class Dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.leftbody = Bodies.rectangle(x-100,y,20,100,options);
      this.rightbody = Bodies.rectangle(x+100,y,20,100,options);
      this.basebody = Bodies.rectangle(x,y+25,220,20,options);
      
      World.add(world, this.leftbody);
      World.add(world, this.rightbody);
      World.add(world, this.basebody);

      this.image = loadImage("dustbingreen.png");
    }
    display(){
      var leftpos =this.leftbody.position;
      var rightpos =this.rightbody.position;
      var basepos =this.basebody.position;
      rectMode(CENTER);
      fill("red");
      rect(leftpos.x, leftpos.y, 20, 100);
      rect(rightpos.x, rightpos.y, 20, 100);
      rect(basepos.x, basepos.y+25, 160, 20);
     push();
      imageMode(CENTER);
        image(this.image,600,430,250,280);
      pop();
    }
  };