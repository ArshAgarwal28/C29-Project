class Target {
    constructor(x, y, width, height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        

        this.body = Bodies.rectangle(x, y, 25, 50, options);
        this.w = 25;
        this.h = 50;

        this.randColor = ["rgb(255,99,71)", "rgb(4, 150, 255", "rgb(0, 107, 166)", "rgb(255, 188, 66)", "rgb(216, 17, 89)", "rgb(255,140,0)"];
        this.randomNum = Math.round(random(0, 5))

        World.add(world, this.body);
    }
  
    display() {
        var angle = this.body.angle;
        push();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);

        fill(this.randColor[this.randomNum]);
        stroke(this.randColor[this.randomNum])
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);

        pop();
    }
}

    /*constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x, y, 25, 50, options);
        this.w = 25;
        this.h = 50;
        
        
        World.add(world, this.body);

        //this.randColor = ["red", "yellow", "orange", "blue", "green"];
        //this.randomNum = Math.round(random(0, 4))
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle);

        fill("red");
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);

        pop();
    }
}*/

//this.randColor[this.randomNum]