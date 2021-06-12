class Plartform {
    constructor(){
        
        var options = {
            isStatic : true
            
        }
        
        this.body = Bodies.trapezoid(500,1280,935,230,0.2,options);
        this.image = loadImage("images/plartform.png")
        this.practice = loadImage("images/launcher-1.png");
        
        World.add(world, this.body);
    }
    display(){
        imageMode(CENTER);
        //shape(15,945,780,945,600,750,200,750);
        image(this.image,500,1280,935,230);  
        
        
    }

}