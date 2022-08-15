class Box{
    constructor(x,y,width,height,color){

     this.option=
    {
    restitution:1,
    label:"A BOX",
    timeScale:1,
    friction:1.0
    }

   
    this.width=width;
    this.height=height;
    this.color=color;
    this.body=Bodies.rectangle(x,y,width,height,this.option);
    World.add(world,this.body);

    
    }
    
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(this.color);
    rect(0,0,this.width,this.height);
    pop();

    
    }
    }
