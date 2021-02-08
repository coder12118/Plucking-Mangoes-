class Slingshot{
    constructor(body1, point2){
        var options = { //JSON, key: value
            bodyA: body1,
            pointB: point2,
            stiffness: 0.2,
            length: 10
        }
        this.pointB = point2;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot)
    }

    fly(){
        this.slingshot.bodyA = null;
    }

    attach(body){
        this.slingshot.bodyA = body;
    }

    display(){
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}