function draw() {
    let canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        let raf;
        let running = false;
        //Angles are in radians, not degrees
        //To convert: radians = (Math.PI/180)*degrees
        
        //Creating some test Tangram shapes
        /*
        let smallTriangle = {
            x: 0,
            y: 0,
            color: 'blue',
            draw: function() {

            }
        }
        */

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