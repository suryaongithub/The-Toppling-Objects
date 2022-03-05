class Circle
{
constructor(x,y,r,c)
{
    this.R=r
    this.color=c
    this.body=Bodies.circle(x,y,r,{friction:0.001,restitution:0.8});
    World.add(world,this.body);
    this.pos = this.body.position;
    
}
display()
{
    push();
    ellipseMode(RADIUS)
    fill(this.color);
    ellipse(this.pos.x,this.pos.y,this.R);
    pop();
}
}