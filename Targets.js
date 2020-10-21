class Target extends BaseClass{
    constructor(x,y,width,height){
      
        super(x,y);
       this.body =  Bodies.rectangle(x,y,width,height);
       this.width = width;
       this.height = height;
        this.Visibility = 255;
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed < 3){
            super.display();
        }else{
             World.remove(world, this.body);
             push();
             this.Visibility = this.Visibility - 5;
             tint(255,this.Visibility);
             rectMode(CENTER);
                rect(this.body, this.body.position.x, this.body.position.y, 50, 50)
                pop();
            }
        }
        score(){
            if(this.Visibility < 0 && this.Visibility > -105){
                score++;
            }
        }
    }
    
