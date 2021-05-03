/* set variables */
let FilterNumber;
let ButtonColor1;
let ButtonColor2;
let ButtonColor3;
let scaleFactor = 1;
let translateX = 0;
let translateY = 0;
let bubbleSizeLayer0 = [500,180,130,130,80,80,  80,100,90,100,140,130,100,120];
let scaleFactor2 = 1;
let translateX2 = 0;
let translateY2 = 0;
let scaleFactor3 = 1;
let translateX3 = 0;
let translateY3 = 0;
var leftBuffer;
var rightBuffer;


function preload() {
  f = loadFont(    "https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf"
  );
}


function setup() {
	createCanvas(windowWidth, windowHeight);
    leftBuffer = createGraphics(width/2, height);
    rightBuffer = createGraphics(width/2, height);
	background(240, 242, 245);
	noStroke();
	FilterNumber = 1; 
	ButtonColor1 = color('#9bc1bc');
	ButtonColor2 = color('#969696');
	ButtonColor3 = color('#969696');
}

function draw() {
	/* change cursor */
	if((mouseX >= 15 && mouseX <= 115 && mouseY >= 50 && mouseY <= 85) || (mouseX >= 15 && mouseX <= 115 && mouseY >= 95 && mouseY <= 130) || (mouseX >= 15 && mouseX <= 115 && mouseY >= 140 && mouseY <= 175))
	{cursor(HAND);
	}else {cursor(ARROW);
	}

	if (FilterNumber == 1) {
		background(240, 242, 245);    
        push();
        translate(translateX,translateY);
        scale(scaleFactor);
        /* Your big bubble */
        translate(400, 400);
        YourBigBubbleStyle(0);
        textFont(f, 40);
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowBlur = 0;
		text("YOUR BUBBLE",-140,-320);
        
      /* Your bubbe 1 */
        translate(80, 100);
        YourBubbleStyle(1);
        textFont(f, 10);
		text("Your bubble 1",-25,0);
		/* Your bubble 2 */
	    translate(-200, -40);
        YourBubbleStyle(2);
        textFont(f, 10);
		text("Your bubble 2",-25,0);
		
      /* Your bubble 3 */
	    translate(20, -170);
        YourBubbleStyle(3);
        textFont(f, 10);
		text("Your bubble 3",-25,0);
		
      /* Your bubble 4 */
	    translate(200, -50);
        YourBubbleStyle(4);
        textFont(f, 10);
		text("Your bubble 4",-25,0);
		
      /* Your bubble 5 */
	    translate(-50, 100);
        YourBubbleStyle(5);
        textFont(f, 10);
		text("Your bubble 5",-25,0);
		
      /* Outside bubble */
		translate(500, 100);
		OutsideBubbleStyle(6);
		textFont(f, 10);
		text("Outside bubble 1",-25,0);

		translate(-100, 100);
		OutsideBubbleStyle(7);
		textFont(f, 10);
		text("Outside bubble 2",-25,0);

		translate(-50, -200);
		OutsideBubbleStyle(8);
		textFont(f, 10);
		text("Outside bubble 3",-25,0);

		translate(100, -100);
		OutsideBubbleStyle(9);
		textFont(f, 10);
		text("Outside bubble 4",-25,0);

		translate(200, -50);
		OutsideBubbleStyle(10);
		textFont(f, 10);
		text("Outside bubble 5",-25,0);

		translate(20, 180);
		OutsideBubbleStyle(11);
		textFont(f, 10);
		text("Outside bubble 6",-25,0);

		translate(100, 200);
		OutsideBubbleStyle(12);
		textFont(f, 10);
		text("Outside bubble 7",-25,0);

		translate(100, -270);
		OutsideBubbleStyle(13);
		textFont(f, 10);
		text("Outside bubble 8",-25,0);
		pop();

		/* button */
        push();
        // translate(-width / 2, -height / 2, 0);
		fill(ButtonColor1);
		rect(15,50,100,35, 5,5);
		fill(ButtonColor2);
		rect(15,95,100,35, 5,5);
		fill(ButtonColor3);
		rect(15,140,100,35, 5,5);
		/* text on the button */
        fill(255);
        textFont(f, 10);
		text("Topic filter",30,73);
		text("Opinion filter",24,118);
		text("Source filter",24,163);
        pop();		
	}

	if (FilterNumber == 2) {
		background(240, 242, 245);
        // Draw on your buffers however you like
        drawLeftBuffer();
        drawRightBuffer();
        // Paint the off-screen buffers onto the main canvas
        image(leftBuffer, 0, 0);
        image(rightBuffer, width/2, 0);

		/* button */
        push();
        // translate(-width / 2, -height / 2, 0);
		fill(ButtonColor1);
		rect(15,50,100,35, 5,5);
		fill(ButtonColor2);
		rect(15,95,100,35, 5,5);
		fill(ButtonColor3);
		rect(15,140,100,35, 5,5);
		/* text on the button */
		fill(255);
        textFont(f, 10);
		text("Topic filter",30,73);
		text("Opinion filter",24,118);
		text("Source filter",24,163);
        pop();

		
	}

	if (FilterNumber == 3) {
		background(240, 242, 245);    
        push();
        translate(translateX3,translateY3);
        scale(scaleFactor3);
        /* Your big bubble */
        translate(400, 400);
        YourBigBubbleStyle(0);
        textFont(f, 40);
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowBlur = 0;
		text("YOUR BUBBLE",-140,-320);
        
      /* Your bubbe 1 */
        translate(80, 100);
        YourBubbleStyle(1);
        textFont(f, 10);
		text("Your bubble 1",-25,0);
		/* Your bubble 2 */
	    translate(-200, -40);
        YourBubbleStyle(2);
        textFont(f, 10);
		text("Your bubble 2",-25,0);
		
      /* Your bubble 3 */
	    translate(20, -170);
        YourBubbleStyle(3);
        textFont(f, 10);
		text("Your bubble 3",-25,0);
		
      /* Your bubble 4 */
	    translate(200, -50);
        YourBubbleStyle(4);
        textFont(f, 10);
		text("Your bubble 4",-25,0);
		
      /* Your bubble 5 */
	    translate(-50, 100);
        YourBubbleStyle(5);
        textFont(f, 10);
		text("Your bubble 5",-25,0);
		
      /* Outside bubble */
		translate(500, 100);
		OutsideBubbleStyle(6);
		textFont(f, 10);
		text("Outside bubble 1",-25,0);

		translate(-100, 100);
		OutsideBubbleStyle(7);
		textFont(f, 10);
		text("Outside bubble 2",-25,0);

		translate(-50, -200);
		OutsideBubbleStyle(8);
		textFont(f, 10);
		text("Outside bubble 3",-25,0);

		translate(100, -100);
		OutsideBubbleStyle(9);
		textFont(f, 10);
		text("Outside bubble 4",-25,0);

		translate(200, -50);
		OutsideBubbleStyle(10);
		textFont(f, 10);
		text("Outside bubble 5",-25,0);

		translate(20, 180);
		OutsideBubbleStyle(11);
		textFont(f, 10);
		text("Outside bubble 6",-25,0);

		translate(100, 200);
		OutsideBubbleStyle(12);
		textFont(f, 10);
		text("Outside bubble 7",-25,0);

		translate(100, -270);
		OutsideBubbleStyle(13);
		textFont(f, 10);
		text("Outside bubble 8",-25,0);
		
		pop();

			/* button */
        push();
        // translate(-width / 2, -height / 2, 0);
		fill(ButtonColor1);
		rect(15,50,100,35, 5,5);
		fill(ButtonColor2);
		rect(15,95,100,35, 5,5);
		fill(ButtonColor3);
		rect(15,140,100,35, 5,5);
		/* text on the button */
		fill(255);
        textFont(f, 10);
		text("Topic filter",30,73);
		text("Opinion filter",24,118);
		text("Source filter",24,163);
        pop();
		
	}
}    


function mouseClicked () {
  if(mouseX >= 15 && mouseX <= 115 && mouseY >= 50 && mouseY <= 85)
	{
		FilterNumber = 1;
		ButtonColor1 = color('#9bc1bc');
        ButtonColor2 = color('#969696');
        ButtonColor3 = color('#969696');
	}
	
	if(mouseX >= 15 && mouseX <= 115 && mouseY >= 95 && mouseY <= 130)
	{
		FilterNumber = 2;
		ButtonColor2 = color('#9bc1bc');
        ButtonColor1 = color('#969696');
        ButtonColor3 = color('#969696');
	}
	
	if(mouseX >= 15 && mouseX <= 115 && mouseY >= 140 && mouseY <= 175)
	{
		FilterNumber = 3;
		ButtonColor3 = color('#9bc1bc');
        ButtonColor1 = color('#969696');
        ButtonColor2 = color('#969696');
	}
}


function mouseDragged(event) {
	if (FilterNumber == 1) {
		translateX += mouseX - pmouseX;
    	translateY += mouseY - pmouseY;
	}
    
    if (FilterNumber == 2) {
		translateX2 += mouseX - pmouseX;
    	translateY2 += mouseY - pmouseY;
	}

	if (FilterNumber == 3) {
		translateX3 += mouseX - pmouseX;
    	translateY3 += mouseY - pmouseY;
	}
}

function mouseWheel(event) {
	if (FilterNumber == 1) {
		translateX -= mouseX;
		translateY -= mouseY;
		const delta = event.delta < 0 ? 1.05 : event.delta > 0 ? 1.0/1.05 : 1.0;
		scaleFactor *= delta;
		translateX *= delta;
		translateY *= delta;
		translateX += mouseX;
		translateY += mouseY;
	}
  
    if (FilterNumber == 2) {
		translateX2 -= mouseX;
		translateY2 -= mouseY;
		const delta2 = event.delta < 0 ? 1.05 : event.delta > 0 ? 1.0/1.05 : 1.0;
		scaleFactor2 *= delta2;
		translateX2 *= delta2;
		translateY2 *= delta2;
		translateX2 += mouseX;
		translateY2 += mouseY;
	}
    
    if (FilterNumber == 3) {
		translateX3 -= mouseX;
		translateY3 -= mouseY;
		const delta3 = event.delta < 0 ? 1.05 : event.delta > 0 ? 1.0/1.05 : 1.0;
		scaleFactor3 *= delta3;
		translateX3 *= delta3;
		translateY3 *= delta3;
		translateX3 += mouseX;
		translateY3 += mouseY;
	}
}

function drawLeftBuffer() {
    leftBuffer.background(240, 242, 245);
    
    leftBuffer.push();
    leftBuffer.translate(translateX2,translateY2);
    leftBuffer.scale(scaleFactor2);
    /* Your big bubble */
    leftBuffer.translate(400,400);
    YourBigBubbleStyle21(0);
    leftBuffer.fill(0);
    leftBuffer.textFont(f, 40);
    leftBuffer.drawingContext.shadowOffsetX = 0;
    leftBuffer.drawingContext.shadowOffsetY = 0;
    leftBuffer.drawingContext.shadowBlur = 0;
    leftBuffer.text("YOUR BUBBLE",-140,-320);

    /* Your bubbe 1 */
	leftBuffer.translate(80, 100);
	YourBubbleStyle21(1);
	leftBuffer.textFont(f, 10);
	leftBuffer.text("Your bubble 1",-25,0);

	/* Your bubble 2 */
	leftBuffer.translate(-200, -40);
	YourBubbleStyle21(2);
	leftBuffer.textFont(f, 10);
	leftBuffer.text("Your bubble 2",-25,0);
	
  /* Your bubble 3 */
	leftBuffer.translate(20, -170);
	YourBubbleStyle21(3);
	leftBuffer.textFont(f, 10);
	leftBuffer.text("Your bubble 3",-25,0);
	
  /* Your bubble 4 */
    leftBuffer.translate(200, -50);
	YourBubbleStyle21(4);
	leftBuffer.textFont(f, 10);
	leftBuffer.text("Your bubble 4",-25,0);
	
  /* Your bubble 5 */
    leftBuffer.translate(-50, 100);
	YourBubbleStyle21(5);
	leftBuffer.textFont(f, 10);
	leftBuffer.text("Your bubble 5",-25,0);	
    leftBuffer.pop();
}

function drawRightBuffer() {
    rightBuffer.background(color('#969696'));

	rightBuffer.push();
    rightBuffer.translate(translateX2,translateY2);
    rightBuffer.scale(scaleFactor2, scaleFactor2);
    /* Your big bubble */
    rightBuffer.translate(400,400);
    YourBigBubbleStyle22(0);
    rightBuffer.fill(0);
    rightBuffer.textFont(f, 40);
    rightBuffer.drawingContext.shadowOffsetX = 0;
    rightBuffer.drawingContext.shadowOffsetY = 0;
    rightBuffer.drawingContext.shadowBlur = 0;
    rightBuffer.text("OPPESITE BUBBLE",-140,-320);

	/* Your bubbe 1 */
	rightBuffer.translate(80, 100);
	YourBubbleStyle22(1);
	rightBuffer.textFont(f, 10);
	rightBuffer.text("Your bubble 1",-25,0);

	/* Your bubble 2 */
	rightBuffer.translate(-200, -40);
	YourBubbleStyle22(2);
	rightBuffer.textFont(f, 10);
	rightBuffer.text("Your bubble 2",-25,0);
	
  /* Your bubble 3 */
  	rightBuffer.translate(20, -170);
	YourBubbleStyle22(3);
	rightBuffer.textFont(f, 10);
	rightBuffer.text("Your bubble 3",-25,0);
	
  /* Your bubble 4 */
  	rightBuffer.translate(200, -50);
	YourBubbleStyle22(4);
	rightBuffer.textFont(f, 10);
	rightBuffer.text("Your bubble 4",-25,0);
	
  /* Your bubble 5 */
  	rightBuffer.translate(-50, 100);
	YourBubbleStyle22(5);
	rightBuffer.textFont(f, 10);
	rightBuffer.text("Your bubble 5",-25,0);	
    rightBuffer.pop();
    
}


function YourBigBubbleStyle (i) {
    let gradientFill = drawingContext.createRadialGradient(
			0, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.05, 50, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.95
		);
    gradientFill.addColorStop(0, '#e6ebe0');
    gradientFill.addColorStop(0.5, '#9bc1bc');
    gradientFill.addColorStop(1, '#5d576b');
    drawingContext.fillStyle = gradientFill;
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 5;
    drawingContext.shadowBlur = 15;
    drawingContext.shadowColor = 'grey';
    ellipse(0, 0, bubbleSizeLayer0[i]);
}

function YourBubbleStyle (i) {
	let gradientFillh = drawingContext.createRadialGradient(
		0, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.1, 0, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.9
	);
	gradientFillh.addColorStop(0, '#e6ebe0');
	gradientFillh.addColorStop(0.5, '#9bc1bc');
	gradientFillh.addColorStop(1, '#e6ebe0');
	drawingContext.fillStyle = gradientFillh;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = 5;
	drawingContext.shadowBlur = 15;
	drawingContext.shadowColor = 'grey';
	ellipse(0, 0, bubbleSizeLayer0[i]);
}


function OutsideBubbleStyle (i) {
	let gradientFillh = drawingContext.createRadialGradient(
		0, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.1, 0, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.9
	);
	gradientFillh.addColorStop(0, '#e6ebe0');
	gradientFillh.addColorStop(0.5, '#9bc1bc');
	gradientFillh.addColorStop(1, '#ed6a5a');
	drawingContext.fillStyle = gradientFillh;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = 5;
	drawingContext.shadowBlur = 15;
	drawingContext.shadowColor = 'grey';
	ellipse(0, 0, bubbleSizeLayer0[i]);
}

function YourBigBubbleStyle21(i) {
    let gradientFill = drawingContext.createRadialGradient(
			0, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.05, 50, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.95
		);
    gradientFill.addColorStop(0, '#e6ebe0');
    gradientFill.addColorStop(0.5, '#9bc1bc');
    gradientFill.addColorStop(1, '#5d576b');
    leftBuffer.drawingContext.fillStyle = gradientFill;
    leftBuffer.drawingContext.shadowOffsetX = 0;
    leftBuffer.drawingContext.shadowOffsetY = 5;
    leftBuffer.drawingContext.shadowBlur = 15;
    leftBuffer.drawingContext.shadowColor = 'grey';
	leftBuffer.noStroke();
    leftBuffer.ellipse(0, 0, bubbleSizeLayer0[i]);
}

function YourBigBubbleStyle22(i) {
    let gradientFill = drawingContext.createRadialGradient(
			0, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.05, 50, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.95
		);
    gradientFill.addColorStop(0, '#e6ebe0');
    gradientFill.addColorStop(0.5, '#9bc1bc');
    gradientFill.addColorStop(1, '#5d576b');
    rightBuffer.drawingContext.fillStyle = gradientFill;
    rightBuffer.drawingContext.shadowOffsetX = 0;
    rightBuffer.drawingContext.shadowOffsetY = 5;
    rightBuffer.drawingContext.shadowBlur = 15;
    rightBuffer.drawingContext.shadowColor = 'grey';
	rightBuffer.noStroke();
    rightBuffer.ellipse(0, 0, bubbleSizeLayer0[i]);
}

function YourBubbleStyle21 (i) {
	let gradientFillh = drawingContext.createRadialGradient(
		0, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.1, 0, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.9
	);
	gradientFillh.addColorStop(0, '#e6ebe0');
	gradientFillh.addColorStop(0.5, '#9bc1bc');
	gradientFillh.addColorStop(1, '#e6ebe0');
	leftBuffer.drawingContext.fillStyle = gradientFillh;
	leftBuffer.drawingContext.shadowOffsetX = 0;
	leftBuffer.drawingContext.shadowOffsetY = 5;
	leftBuffer.drawingContext.shadowBlur = 15;
	leftBuffer.drawingContext.shadowColor = 'grey';
	leftBuffer.ellipse(0, 0, bubbleSizeLayer0[i]);
}

function YourBubbleStyle22 (i) {
	let gradientFillh = drawingContext.createRadialGradient(
		0, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.1, 0, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.9
	);
	gradientFillh.addColorStop(0, '#e6ebe0');
	gradientFillh.addColorStop(0.5, '#9bc1bc');
	gradientFillh.addColorStop(1, '#e6ebe0');
	rightBuffer.drawingContext.fillStyle = gradientFillh;
	rightBuffer.drawingContext.shadowOffsetX = 0;
	rightBuffer.drawingContext.shadowOffsetY = 5;
	rightBuffer.drawingContext.shadowBlur = 15;
	rightBuffer.drawingContext.shadowColor = 'grey';
	rightBuffer.ellipse(0, 0, bubbleSizeLayer0[i]);
}


