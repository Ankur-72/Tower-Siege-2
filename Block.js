class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.Visibility = 255;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    attach(body){
      this.sling.bodyA = body;
  }

    display(color){
      this.body.visible = true;

      /*if(this.body.speed < 3){
        super.display();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }*/

      fill(color);
      var pos = this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);

      if(this.body.speed < 4){
      // this.body.display();
       }
       else{
         this.body.visible = false;
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         pop();
         
       }
    }
  }