//Testing Canvas API
function draw() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        
        //Creates 2 intersecting rectangles
        /*
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
        */

        //Creates 3 rectangles, one filled, one that clears the middle, 
        //and one that is only an outline
        /*
        ctx.fillRect(25, 25, 100, 100);//Creates a filled rectangle
        ctx.clearRect(45, 45, 60, 60);//Clears a rectangular space
        ctx.strokeRect(50, 50, 50, 50);//Creates a rectangular outline
        */

        //Creating a path in the shape of a triangle
        /*
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
        */

        //Creates a path in the shape of a smiley face
        /*
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
        ctx.stroke();
        */

        //Small Triangle
        /*
        ctx.beginPath();
        ctx.moveTo(500, 500);
        ctx.lineTo(500, 250);
        ctx.lineTo(375, 375);
        ctx.fill();
        */

        //Creating some test Tangram shapes
        //Small Triangle 1
        let smallTriangle1 = new Path2D();
        smallTriangle1.moveTo(125, 125);
        smallTriangle1.lineTo(250, 250);
        smallTriangle1.lineTo(375, 125);

        //Small Triangle 2
        let smallTriangle2 = new Path2D();
        smallTriangle2.moveTo(500, 500);
        smallTriangle2.lineTo(500, 250);
        smallTriangle2.lineTo(375, 375);

        //Square
        let square = new Path2D();
        square.moveTo(250, 250);
        square.lineTo(375, 375);
        square.lineTo(500, 250);
        square.lineTo(375, 125);

        //Medium Triangle
        let mediumTriangle = new Path2D();
        mediumTriangle.moveTo(250, 0);
        mediumTriangle.lineTo(500, 250);
        mediumTriangle.lineTo(500, 0);

        //Parallelogram
        let parallelogram = new Path2D();
        parallelogram.moveTo(0, 0);
        parallelogram.lineTo(125, 125);
        parallelogram.lineTo(375, 125);
        parallelogram.lineTo(250, 0);

        //Large Triangle 1
        let largeTriangle1 = new Path2D();
        largeTriangle1.moveTo(0, 0);
        largeTriangle1.lineTo(0, 500);
        largeTriangle1.lineTo(250, 250);

        //Large Triangle 2
        let largeTriangle2 = new Path2D();
        largeTriangle2.moveTo(0, 500);
        largeTriangle2.lineTo(500, 500);
        largeTriangle2.lineTo(250, 250);

        //ctx.fillStyle = 'white'; //Changes the filling of objects to white
        //ctx.strokeStyle = 'black'; //Chanes the outline of objects to black
        //ctx.save(); //Saves current canvas state to the stack
        //ctx.restore(); //Restores the most recent save by popping it off the stack

        //Filling all of the shapes
        ctx.fillStyle = 'red';
        ctx.fill(smallTriangle1);
        ctx.save();
        ctx.fillStyle = 'blue';
        ctx.fill(smallTriangle2);
        ctx.save();
        ctx.fillStyle = 'yellow';
        ctx.fill(square);
        ctx.fillStyle = 'purple';
        ctx.fill(mediumTriangle);
        ctx.fillStyle = 'green';
        ctx.fill(parallelogram);
        ctx.restore();
        ctx.fill(largeTriangle1);
        ctx.restore();
        ctx.fill(largeTriangle2);
        ctx.save();
    }
}