class Crystal_log  {
        constructor(x,y,height,angle){ 
          var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
           
        }
        
        this.body = Bodies.rectangle(x, y, 70, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/crystal log.png");
        World.add(world, this.body);
        
        angleMode(DEGREES);
        Matter.Body.setAngle(this.body, angle);
       }
      
      display(){
        push();
        var log_angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(log_angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 70, this.height);
        pop();
      } } 