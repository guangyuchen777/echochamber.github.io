/* set variables */
let FilterNumber;
let ButtonColor1;
let ButtonColor2;
let ButtonColor3;
let scaleFactor = 1;
let translateX = 0;
let translateY = 0;
let bubbleSizeLayer0 = [500,180,130,130,80,80,  80,100,90,100,140,130,100,120, 80,100,140, 20]; /* topic layer bubbles, topic layer ouside bubbles, source layer bubbles, source filter legend */
let bubbleSizeLayer1 = [20];
let scaleFactor2 = 1;
let translateX2 = 0;
let translateY2 = 0;
let scaleFactor3 = 1;
let translateX3 = 0;
let translateY3 = 0;
var leftBuffer;
var rightBuffer;

let imgDefinition;
let imgMansion;

let imgTurningpoint;
let imgWall;

let imgStandardnews;
let imgDolphin;
let imgp2;
let imgDutchres;
let img7news;
let imgAlchole;

let imgGuardian;
let imgTucker;
let imgpWoody;
let img5g;
let imgAP;
let imgIndia;

let imgTrumplose;/* AP News */
let imgTrumpban; /* Guardian */
let imgTransgender;/* AP Nes */
let imgRon;
let imgMilitary;

/* pictures for opposite bubbles */
let imgVox;
let imgImmigration;
let imgBarrons; /* use biden picture */
let imgMNT;
let imgalchole2;
let imgReuters;
let imgDutchlockdown;
let imgPlastic;
let imgChinabriefing;
let img5g2;
let imgCNBC;
let imgIndiavaccine;
let imgCleveland;
let imgMask;
let imgTrumpmedia;
let imgBBC;
let imgTrumpsuccess;
let imgYahoo;
let imgBloomberg;
let imgTrumpeconomy;

let img;


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
  
	imgDefinition = loadImage("images/definitionorg.png");
	imgMansion = loadImage('images/mansion.PNG'); 

	imgTurningpoint = loadImage('images/turningpointusa.jfif'); 
	imgWall = loadImage('images/wall.PNG'); 

	imgStandardnews = loadImage('images/eveningstandard.jpg'); 
	imgDolphin = loadImage('images/post1.png'); 
	imgp2 = loadImage('images/2.jpg');
	imgDutchres = loadImage('images/dutch_restaurant.jpg');
	img7news = loadImage('images/7news.jpeg'); 
	imgAlchole = loadImage('images/alchole.PNG'); 

	imgGuardian = loadImage('images/guardian.png'); 
	imgTucker = loadImage('images/TuckerCarlson.PNG'); 
	imgpWoody = loadImage('images/WoodyHarrelson.jpg'); 
	img5g = loadImage('images/5g.jpg'); 
	imgAP = loadImage('images/APnews.png'); 
	imgIndia = loadImage('images/india.PNG'); 

	imgTrumplose= loadImage('images/trumplose.jpeg'); /* AP News */
	imgTrumpban= loadImage('images/trumpban.PNG');  /* Guardian */
	imgTransgender= loadImage('images/transgender.PNG'); /* AP Nes */
	imgRon= loadImage('images/ron.jfif'); 
	imgMilitary= loadImage('images/military.PNG'); 

	/* pictures for opposite bubbles */
	imgVox= loadImage('images/vox.PNG'); 
	imgImmigration= loadImage('images/immigrate.PNG'); 
	imgBarrons= loadImage('images/barrons.jpg');  /* use biden picture */
	
	imgMNT= loadImage('images/MNT.PNG'); 
	imgalchole2= loadImage('images/alchole2.PNG'); 
	imgReuters= loadImage('images/Reuters.jpg'); 
    imgDutchlockdown= loadImage('images/dutch_lockdown.jpg'); 
	imgPlastic= loadImage('images/plastic.PNG'); 
	
	imgChinabriefing= loadImage('images/chinabriefing.jpg'); 
    img5g2= loadImage('images/5g2.PNG'); 
	imgCNBC= loadImage('images/CNBC.PNG'); 
    imgIndiavaccine= loadImage('images/indiavaccine.jpeg'); 
	imgCleveland= loadImage('images/cleveland.png'); 
    imgMask= loadImage('images/mask.jpg'); 

	imgTrumpmedia= loadImage('images/trumpmedia.jpg'); 
    imgBBC= loadImage('images/bbc.jpg'); 
	imgTrumpsuccess= loadImage('images/trumpsuccess.PNG'); 
	imgYahoo= loadImage('images/yahoofinance.png'); 
	imgBloomberg= loadImage('images/bloomberg.png'); 
    imgTrumpeconomy= loadImage('images/trumpechonomy.jpg'); 

	

	img = loadImage('https://happycoding.io/images/stanley-1.jpg');
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
		textFont(f, 12);
		text("IT PRESENTS WHAT KIND OF INFORMATION YOU ARE EXPOSED TO.",-180,-295);
		textFont(f, 40);
		text("OUTSIDE YOUR BUBBLE",520,-320);
		textFont(f, 12);
		text("IT PRESENTS WHAT KIND OF INFORMATION YOU ARE NOT EXPOSED TO.",540,-295);
        
      /* Your bubbe 1 */
        translate(80, 100);
        YourBubbleStyle(1);
        textFont(f, 10);
		text("Donald Trump",-25,0);
		/* small bubbles 1 Donald Trump*/
		push();
		translate(0,-30);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("AP News",-2,-6);
		image(imgAP, -3.7,-7.2, imgAP.width/1000, imgAP.height/1000);
		textFont('Helvetica', 0.9);
		text("President Donald Trump worked to",-7.9,-4.2);
		text("takeback an apparent acknowledgement",-7.9,-3.2);
		text("that Joe Biden won the White House",-7.9,-2.2);
		text("and was making clear he would keep",-7.9,-1.2);
		text("trying to overturn the election result.",-7.9,-0.2);
		image(imgTrumplose, -5.7,1, imgTrumplose.width/90, imgTrumplose.height/90);

		translate(-40,50);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("The Guardian",-3.7,-6);
		image(imgGuardian, -5.7,-7.2, imgGuardian.width/300, imgGuardian.height/300);
		textFont('Helvetica', 1);
		text("Twitter says Trump ban is permanent",-7.9,-4.2);
		text("– even if he runs for office again.",-7.9,-3.2);
		image(imgTrumpban, -6.0,-2, imgTrumpban.width/68, imgTrumpban.height/68);

		translate(40,30);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("AP News",-2,-6);
		image(imgAP, -3.7,-7.2, imgAP.width/1000, imgAP.height/1000);
		textFont('Helvetica', 1);
		text("President Joe Biden has signed an",-8,-4.2);
		text("order reversing a Trump-era Pentagon",-8,-3.2);
		text("policy that largely barred transgender",-8,-2.2);
		text("individuals from serving in the military.",-8,-1.2);
		image(imgTransgender, -6.5,0, imgTransgender.width/70, imgTransgender.height/70);

		translate(50,-20);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("Ron Johnson",-3,-6.8);
		text("(Lawyer)",-1.5,-5.3);
		image(imgRon, -4.5,-8, imgRon.width/170, imgRon.height/170);
		textFont('Helvetica', 0.9);
		text("Under former U.S. President Donald",-8,-3.8);
		text("Trump, Congress passed a law that gives",-8,-2.8);
		text("outgoing presidential administrations",-8,-1.8);
		text("control of American armed forces after",-8,-0.8);
		text("Inauguration Day, for up to 60 days.",-8,0.2);
		image(imgMilitary, -6,0.9, imgMilitary.width/77, imgMilitary.height/77);
		pop();
		
	  /* Your bubble 2 */
	    translate(-200, -40);
        YourBubbleStyle(2);
        textFont(f, 10);
		text("Corona outside Europe",-60,0);
		/* small bubbles 2 Corona outside Europe */
		push();
		translate(0,-30);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("The Guardian",-3.7,-6);
		image(imgGuardian, -5.7,-7.2, imgGuardian.width/300, imgGuardian.height/300);
		textFont('Helvetica', 1);
		text("Fox News host Tucker Carlson claims",-7.8,-4.2);
		text("making children wear masks is ‘abuse’.",-7.8,-3.2);
		image(imgTucker, -6.5,-2, imgTucker.width/68, imgTucker.height/68);

		translate(-30,50);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("Woody Harrelson",-4.8,-6);
		text("(actor)",-2,-4.5);
		image(imgpWoody, -6.5,-7.2, imgpWoody.width/400, imgpWoody.height/400);
		textFont('Helvetica', 1);
		text("People in China tearing down a 5G",-8.2,-3);
		text("tower in an attempt to stop the spread",-8.2,-2);
		text("of COVID-19 coronavirus disease.",-8.2,-1);
		image(img5g, -6.3,-0.5, img5g.width/100, img5g.height/100);

		translate(40,10);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("AP News",-2,-6);
		image(imgAP, -3.7,-7.2, imgAP.width/1000, imgAP.height/1000);
		textFont('Helvetica', 1);
		text("India Virus Patients Suffocate",-7.5,-4.2);
		text("Amid Oxygen Shortage in Surge.",-7.5,-3.2);
		image(imgIndia, -7,-2, imgIndia.width/67, imgIndia.height/67);
		pop();
		
      /* Your bubble 3 */
	    translate(20, -170);
        YourBubbleStyle(3);
        textFont(f, 10);
		text("Corona in Europe",-40,0);
		/* small bubbles 3 Corona in Europe */
		push();
		translate(0,-30);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("Evening Standard",-4.7,-6);
		image(imgStandardnews, -6.7,-7.2, imgStandardnews.width/1300, imgStandardnews.height/1300);
		textFont('Helvetica', 1);
		text("Dolphins and swans appear in",-7.5,-4.2);
		text("Venice canals a week after city locks",-7.5,-3.2);
		text("down to prevent Coronavirus spread.",-7.5,-2.2);
		image(imgDolphin, -6.5,-1, imgDolphin.width/70, imgDolphin.height/70);

		translate(-30,50);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("Paul Frank (friend)",-4.8,-6);
		image(imgp2, -6.5,-7.2, imgp2.width/400, imgp2.height/400);
		textFont('Helvetica', 1);
		text("Dutch restaurants solved the problem",-7.9,-4.2);
		text("of dining out during the COVID-19",-7.9,-3.2);
		text("coronavirus disease pandemic by",-7.9,-2.2);
		text("installingpersonal greenhouse booths.",-7.9,-1.2);
		image(imgDutchres, -6.0,-0.5, imgDutchres.width/55, imgDutchres.height/55);

		translate(40,10);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("7News",-1.5,-6);
		image(img7news, -4,-7.2, img7news.width/170, img7news.height/170);
		textFont('Helvetica', 1);
		text("German health expert claims drink-",-7.5,-4.2);
		text("ing alcohol can protect against ",-7.5,-3.2);
		text("coronavirus.",-7.5,-2.2);
		image(imgAlchole, -6.5,-1, imgAlchole.width/70, imgAlchole.height/70);
		pop();
		
      /* Your bubble 4 */
	    translate(200, -50);
        YourBubbleStyle(4);
        textFont(f, 10);
		text("Immigration",-25,0);
		/* for bubble 4 Immigration */
		push();
		translate(0,20);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("TurningPoint USA",-4.7,-6);
		image(imgTurningpoint, -6.5,-7.2, imgTurningpoint.width/170, imgTurningpoint.height/170);
		textFont('Helvetica', 1);
		text("Biden Admin Consider Restarting ",-7.5,-4.2);
		text("Border Wall Construction to 'plug ",-7.5,-3.2);
		text("gaps'.",-7.5,-2.2);
		image(imgWall, -6.5,-1, imgWall.width/70, imgWall.height/70);
		pop();
		
		
      /* Your bubble 5 */
	    translate(-50, 100);
        YourBubbleStyle(5);
        textFont(f, 10);
		text("Market",-15,0);
		/* for bubble 5 Market */
		push();
	    translate(0,20);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("Definition.org",-3,-6);
		image(imgDefinition, -5,-7.2, imgDefinition.width/170, imgDefinition.height/170);
		textFont('Helvetica', 1);
		text("The abandoned Bennett School for",-7.5,-4.2);
		text("Girls was also once a mega-mansion",-7.5,-3.2);
		text("for the rich and famous.",-7.5,-2.2);
		image(imgMansion, -6.5,-1, imgMansion.width/70, imgMansion.height/70);
		pop();
		
      /* Outside bubble */
		translate(500, 150);
		OutsideBubbleStyle(6);
		textFont(f, 10);
		text("Food",-10,0);

		translate(-100, 100);
		OutsideBubbleStyle(7);
		textFont(f, 10);
		text("Business",-25,0);

		translate(-50, -200);
		OutsideBubbleStyle(8);
		textFont(f, 10);
		text("Crime",-25,0);

		translate(100, -100);
		OutsideBubbleStyle(9);
		textFont(f, 10);
		text("Disney",-25,0);

		translate(200, -50);
		OutsideBubbleStyle(10);
		textFont(f, 10);
		text("Computers",-25,0);

		translate(20, 180);
		OutsideBubbleStyle(11);
		textFont(f, 10);
		text("Automobiles",-25,0);

		translate(100, 200);
		OutsideBubbleStyle(12);
		textFont(f, 10);
		text("History",-25,0);

		translate(100, -270);
		OutsideBubbleStyle(13);
		textFont(f, 10);
		text("Language",-25,0);

		translate(0,2000);
		image(img, 0,0);
		textFont(f, 60);
		text("there's no more...",-25,40);
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
		// fill(0);
		// textFont(f, 30);
		// text("<",55,208);
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
        
		push();
		for (let i = 0; i < 10; i++) {
			fill(25.5*i, 0);
			strokeWeight(2);
			stroke(25.5*i);
			ellipse(width/2+50, height-100+5*i, 40,40);
		  }
		noStroke();
		fill(0);
		textFont(f, 10);
		text("Negative",width/2+80,height-100);
		fill(255);
		text("Positive",width/2+80,height-45);
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
		textFont(f, 12);
		text("IT PRESENTS WHAT KIND OF SOURCES YOU ARE EXPOSED TO.",-180,-295);
		textFont(f, 40);
		text("OUTSIDE YOUR BUBBLE",520,-320);
		textFont(f, 12);
		text("IT PRESENTS WHAT KIND OF SOURCES YOU ARE NOT EXPOSED TO.",540,-295);
        
      /* Your bubbe 1 */
        translate(80, 100);
        YourBubbleStyle31(16);
        textFont(f, 15);
		text("AP News",-25,0);
		push();
		translate(0,-30);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("AP News",-2,-6);
		image(imgAP, -3.7,-7.2, imgAP.width/1000, imgAP.height/1000);
		textFont('Helvetica', 0.9);
		text("President Donald Trump worked to",-7.9,-4.2);
		text("takeback an apparent acknowledgement",-7.9,-3.2);
		text("that Joe Biden won the White House",-7.9,-2.2);
		text("and was making clear he would keep",-7.9,-1.2);
		text("trying to overturn the election result.",-7.9,-0.2);
		image(imgTrumplose, -5.7,1, imgTrumplose.width/90, imgTrumplose.height/90);

		translate(-40,50);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("AP News",-2,-6);
		image(imgAP, -3.7,-7.2, imgAP.width/1000, imgAP.height/1000);
		textFont('Helvetica', 1);
		text("President Joe Biden has signed an",-8,-4.2);
		text("order reversing a Trump-era Pentagon",-8,-3.2);
		text("policy that largely barred transgender",-8,-2.2);
		text("individuals from serving in the military.",-8,-1.2);
		image(imgTransgender, -6.5,0, imgTransgender.width/70, imgTransgender.height/70);

		translate(40,10);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("AP News",-2,-6);
		image(imgAP, -3.7,-7.2, imgAP.width/1000, imgAP.height/1000);
		textFont('Helvetica', 1);
		text("India Virus Patients Suffocate",-7.5,-4.2);
		text("Amid Oxygen Shortage in Surge.",-7.5,-3.2);
		image(imgIndia, -7,-2, imgIndia.width/67, imgIndia.height/67);
		pop();

	  /* Your bubble 2 */
	    translate(-150, 40);
        YourBubbleStyle32(14);
        textFont(f, 9);
		text("Ron Johnson",-25,-10);
		text("(lawyer)",-25,0);
		push();
		translate(0,20);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("Ron Johnson",-3,-6.8);
		text("(Lawyer)",-1.5,-5.3);
		image(imgRon, -4.5,-8, imgRon.width/170, imgRon.height/170);
		textFont('Helvetica', 0.9);
		text("Under former U.S. President Donald",-8,-3.8);
		text("Trump, Congress passed a law that gives",-8,-2.8);
		text("outgoing presidential administrations",-8,-1.8);
		text("control of American armed forces after",-8,-0.8);
		text("Inauguration Day, for up to 60 days.",-8,0.2);
		image(imgMilitary, -6,0.9, imgMilitary.width/77, imgMilitary.height/77);
		pop();
		
      /* Your bubble 3 */
	    translate(-100, -100);
        YourBubbleStyle31(14);
        textFont(f, 10);
		text("7News",-15,0);
		push();
		translate(0,20);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("7News",-1.5,-6);
		image(img7news, -4,-7.2, img7news.width/170, img7news.height/170);
		textFont('Helvetica', 1);
		text("German health expert claims drink-",-7.5,-4.2);
		text("ing alcohol can protect against ",-7.5,-3.2);
		text("coronavirus.",-7.5,-2.2);
		image(imgAlchole, -6.5,-1, imgAlchole.width/70, imgAlchole.height/70);
		pop();
		
      /* Your bubble 4 */
	    translate(50, -80);
        YourBubbleStyle31(14);
        textFont(f, 8);
		text("Definition.org",-32,0);
		push();
	    translate(0,20);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("Definition.org",-3,-6);
		image(imgDefinition, -5,-7.2, imgDefinition.width/170, imgDefinition.height/170);
		textFont('Helvetica', 1);
		text("The abandoned Bennett School for",-7.5,-4.2);
		text("Girls was also once a mega-mansion",-7.5,-3.2);
		text("for the rich and famous.",-7.5,-2.2);
		image(imgMansion, -6.5,-1, imgMansion.width/70, imgMansion.height/70);
		pop();
		
      /* Your bubble 5 */
	    translate(-10, -100);
        YourBubbleStyle33(14);
        textFont(f, 9);
		text("Paul Frank",-25,-10);
		text("(friend)",-25,0);
		push();
		translate(0,20);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("Paul Frank (friend)",-4.8,-6);
		image(imgp2, -6.5,-7.2, imgp2.width/400, imgp2.height/400);
		textFont('Helvetica', 1);
		text("Dutch restaurants solved the problem",-7.9,-4.2);
		text("of dining out during the COVID-19",-7.9,-3.2);
		text("coronavirus disease pandemic by",-7.9,-2.2);
		text("installingpersonal greenhouse booths.",-7.9,-1.2);
		image(imgDutchres, -6.0,-0.5, imgDutchres.width/55, imgDutchres.height/55);
		pop();

	  /* Your bubble 6 */
	    translate(200, -40);
        YourBubbleStyle31(15);
        textFont(f, 10);
		text("The Guardian",-30,0);
		push();
		translate(0,20);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("The Guardian",-3.7,-6);
		image(imgGuardian, -5.7,-7.2, imgGuardian.width/300, imgGuardian.height/300);
		textFont('Helvetica', 1);
		text("Fox News host Tucker Carlson claims",-7.8,-4.2);
		text("making children wear masks is ‘abuse’.",-7.8,-3.2);
		image(imgTucker, -6.5,-2, imgTucker.width/68, imgTucker.height/68);

		translate(10,-50);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("The Guardian",-3.7,-6);
		image(imgGuardian, -5.7,-7.2, imgGuardian.width/300, imgGuardian.height/300);
		textFont('Helvetica', 1);
		text("Twitter says Trump ban is permanent",-7.9,-4.2);
		text("– even if he runs for office again.",-7.9,-3.2);
		image(imgTrumpban, -6.0,-2, imgTrumpban.width/68, imgTrumpban.height/68);
		pop();

	  /* Your bubble 7 */
	    translate(-50, 100);
        YourBubbleStyle31(14);
        textFont(f, 8);
		text("Evening Standard",-35,-10);
		text("News",-10,0);
		push();
		translate(0,20);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("Evening Standard",-4.7,-6);
		image(imgStandardnews, -6.7,-7.2, imgStandardnews.width/1300, imgStandardnews.height/1300);
		textFont('Helvetica', 1);
		text("Dolphins and swans appear in",-7.5,-4.2);
		text("Venice canals a week after city locks",-7.5,-3.2);
		text("down to prevent Coronavirus spread.",-7.5,-2.2);
		image(imgDolphin, -6.5,-1, imgDolphin.width/70, imgDolphin.height/70);
		pop();

	  /* Your bubble 8 */
	    translate(-50, 100);
        YourBubbleStyle32(14);
        textFont(f, 8);
		text("Woody Harrelson",-35,-10);
		text("(actor)",-20,0);
		push();
		translate(0,20);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("Woody Harrelson",-4.8,-6);
		text("(actor)",-2,-4.5);
		image(imgpWoody, -6.5,-7.2, imgpWoody.width/400, imgpWoody.height/400);
		textFont('Helvetica', 1);
		text("People in China tearing down a 5G",-8.2,-3);
		text("tower in an attempt to stop the spread",-8.2,-2);
		text("of COVID-19 coronavirus disease.",-8.2,-1);
		image(img5g, -6.3,-0.5, img5g.width/100, img5g.height/100);
		pop();

	  /* Your bubble 9 */
	    translate(170, -40);
        YourBubbleStyle31(14);
        textFont(f, 8);
		text("Turning Point USA",-40,0);
		push();
		translate(0,20);
		YourSmallBubbleStyle(0);
		textFont('Helvetica', 1.5);
		text("TurningPoint USA",-4.7,-6);
		image(imgTurningpoint, -6.5,-7.2, imgTurningpoint.width/170, imgTurningpoint.height/170);
		textFont('Helvetica', 1);
		text("Biden Admin Consider Restarting ",-7.5,-4.2);
		text("Border Wall Construction to 'plug ",-7.5,-3.2);
		text("gaps'.",-7.5,-2.2);
		image(imgWall, -6.5,-1, imgWall.width/70, imgWall.height/70);
		pop();
		
      /* Outside bubble */
		translate(500, 100);
		YourBubbleStyle33(6);
		textFont(f, 9);
		text("Tim Happiness",-30,0);
		text("(friend))",-30,10);

		translate(-100, 100);
		YourBubbleStyle33(7);
		textFont(f, 10);
		text("John Sadness",-25,0);
		text("(friend))",-25,10);

		translate(-50, -200);
		YourBubbleStyle33(8);
		textFont(f, 9);
		text("Funky Dolphen",-30,0);
		text("(friend))",-30,10);

		translate(100, -100);
		YourBubbleStyle32(9);
		textFont(f, 10);
		text("Outside bubble 4",-25,0);

		translate(200, -50);
		YourBubbleStyle33(10);
		textFont(f, 12);
		text("Frank Blessing",-40,0);
		text("(friend))",-40,13);

		translate(20, 180);
		YourBubbleStyle31(11);
		textFont(f, 12);
		text("CNN News",-25,0);

		translate(100, 200);
		YourBubbleStyle32(12);
		textFont(f, 10);
		text("Outside bubble 7",-25,0);

		translate(100, -270);
		YourBubbleStyle31(13);
		textFont(f, 12);
		text("BBC News",-25,0);
		
		pop();

			/* button */
        push();
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

		fill(0);
		text("Friends",50,height-135);
		text("Organizations",50,height-105);
		text("Influencers",50,height-75);
        pop();
		
		push();
		translate(30,height-140);
		YourBubbleStyle33(17);
		pop();
		push();
		translate(30,height-110);
		YourBubbleStyle31(17);
		pop();
		push();
		translate(30,height-80);
		YourBubbleStyle32(17);
		pop();
	}
}    

function keyTyped() {
	if (key === 'r' || 'R') {
		scaleFactor = 1;
		translateX = 0;
		translateY = 0;
		scaleFactor2 = 1;
		translateX2 = 0;
		translateY2 = 0;
		scaleFactor3 = 1;
		translateX3 = 0;
		translateY3 = 0;
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
	leftBuffer.textFont(f, 12);
	leftBuffer.text("IT PRESENTS OPINIONS YOU ARE EXPOSED TO.",-150,-295);

    /* Your bubbe 1 */
	leftBuffer.translate(80, 100);
	leftBuffer.strokeWeight(3);
	leftBuffer.stroke(100);
	YourBubbleStyle21(1);
	leftBuffer.noStroke();
	leftBuffer.fill(0);
	leftBuffer.textFont(f, 10);
	leftBuffer.text("Donald Trump",-25,0);
	/* small bubbles 1 Donald Trump*/
	leftBuffer.push();
	leftBuffer.translate(0,-30);
	YourSmallBubbleStyle21(0);
	leftBuffer.fill(0);
	leftBuffer.textFont('Helvetica', 1.5);
	leftBuffer.text("AP News",-2,-6);
	leftBuffer.image(imgAP, -3.7,-7.2, imgAP.width/1000, imgAP.height/1000);
	leftBuffer.textFont('Helvetica', 0.9);
	leftBuffer.text("President Donald Trump worked to",-7.9,-4.2);
	leftBuffer.text("takeback an apparent acknowledgement",-7.9,-3.2);
	leftBuffer.text("that Joe Biden won the White House",-7.9,-2.2);
	leftBuffer.text("and was making clear he would keep",-7.9,-1.2);
	leftBuffer.text("trying to overturn the election result.",-7.9,-0.2);
	leftBuffer.image(imgTrumplose, -5.7,1, imgTrumplose.width/90, imgTrumplose.height/90);

	leftBuffer.translate(-40,50);
	YourSmallBubbleStyle21(0);
	leftBuffer.fill(0);
	leftBuffer.textFont('Helvetica', 1.5);
	leftBuffer.text("The Guardian",-3.7,-6);
	leftBuffer.image(imgGuardian, -5.7,-7.2, imgGuardian.width/300, imgGuardian.height/300);
	leftBuffer.textFont('Helvetica', 1);
	leftBuffer.text("Twitter says Trump ban is permanent",-7.9,-4.2);
	leftBuffer.text("– even if he runs for office again.",-7.9,-3.2);
	leftBuffer.image(imgTrumpban, -6.0,-2, imgTrumpban.width/68, imgTrumpban.height/68);

	leftBuffer.translate(40,30);
	YourSmallBubbleStyle21(0);
	leftBuffer.fill(0);
	leftBuffer.textFont('Helvetica', 1.5);
	leftBuffer.text("AP News",-2,-6);
	leftBuffer.image(imgAP, -3.7,-7.2, imgAP.width/1000, imgAP.height/1000);
	leftBuffer.textFont('Helvetica', 1);
	leftBuffer.text("President Joe Biden has signed an",-8,-4.2);
	leftBuffer.text("order reversing a Trump-era Pentagon",-8,-3.2);
	leftBuffer.text("policy that largely barred transgender",-8,-2.2);
	leftBuffer.text("individuals from serving in the military.",-8,-1.2);
	leftBuffer.image(imgTransgender, -6.5,0, imgTransgender.width/70, imgTransgender.height/70);

	leftBuffer.translate(50,-20);
	YourSmallBubbleStyle21(0);
	leftBuffer.fill(0);
	leftBuffer.textFont('Helvetica', 1.5);
	leftBuffer.text("Ron Johnson",-3,-6.8);
	leftBuffer.text("(Lawyer)",-1.5,-5.3);
	leftBuffer.image(imgRon, -4.5,-8, imgRon.width/170, imgRon.height/170);
	leftBuffer.textFont('Helvetica', 0.9);
	leftBuffer.text("Under former U.S. President Donald",-8,-3.8);
	leftBuffer.text("Trump, Congress passed a law that gives",-8,-2.8);
	leftBuffer.text("outgoing presidential administrations",-8,-1.8);
	leftBuffer.text("control of American armed forces after",-8,-0.8);
	leftBuffer.text("Inauguration Day, for up to 60 days.",-8,0.2);
	leftBuffer.image(imgMilitary, -6,0.9, imgMilitary.width/77, imgMilitary.height/77);
	leftBuffer.pop();

	/* Your bubble 2 */
	leftBuffer.translate(-200, -40);
	leftBuffer.strokeWeight(2);
	leftBuffer.stroke(100);
	YourBubbleStyle21(2);
	leftBuffer.noStroke();
	leftBuffer.fill(0);
	leftBuffer.textFont(f, 10);
	leftBuffer.text("Corona outside Europe",-60,0);
	/* small bubbles 2 Corona outside Europe */
	leftBuffer.push();
	leftBuffer.translate(0,-30);
	YourSmallBubbleStyle21(0);
	leftBuffer.fill(0);
	leftBuffer.textFont('Helvetica', 1.5);
	leftBuffer.text("The Guardian",-3.7,-6);
	leftBuffer.image(imgGuardian, -5.7,-7.2, imgGuardian.width/300, imgGuardian.height/300);
	leftBuffer.textFont('Helvetica', 1);
	leftBuffer.text("Fox News host Tucker Carlson claims",-7.8,-4.2);
	leftBuffer.text("making children wear masks is ‘abuse’.",-7.8,-3.2);
	leftBuffer.image(imgTucker, -6.5,-2, imgTucker.width/68, imgTucker.height/68);

	leftBuffer.translate(-30,50);
	YourSmallBubbleStyle21(0);
	leftBuffer.fill(0);
	leftBuffer.textFont('Helvetica', 1.5);
	leftBuffer.text("Woody Harrelson",-4.8,-6);
	leftBuffer.text("(actor)",-2,-4.5);
	leftBuffer.image(imgpWoody, -6.5,-7.2, imgpWoody.width/400, imgpWoody.height/400);
	leftBuffer.textFont('Helvetica', 1);
	leftBuffer.text("People in China tearing down a 5G",-8.2,-3);
	leftBuffer.text("tower in an attempt to stop the spread",-8.2,-2);
	leftBuffer.text("of COVID-19 coronavirus disease.",-8.2,-1);
	leftBuffer.image(img5g, -6.3,-0.5, img5g.width/100, img5g.height/100);

	leftBuffer.translate(40,10);
	YourSmallBubbleStyle21(0);
	leftBuffer.fill(0);
	leftBuffer.textFont('Helvetica', 1.5);
	leftBuffer.text("AP News",-2,-6);
	leftBuffer.image(imgAP, -3.7,-7.2, imgAP.width/1000, imgAP.height/1000);
	leftBuffer.textFont('Helvetica', 1);
	leftBuffer.text("India Virus Patients Suffocate",-7.5,-4.2);
	leftBuffer.text("Amid Oxygen Shortage in Surge.",-7.5,-3.2);
	leftBuffer.image(imgIndia, -7,-2, imgIndia.width/67, imgIndia.height/67);
	leftBuffer.pop();

	
  /* Your bubble 3 */
	leftBuffer.translate(20, -170);
	leftBuffer.strokeWeight(1.5);
	leftBuffer.stroke(255);
	YourBubbleStyle21(3);
	leftBuffer.noStroke();
	leftBuffer.fill(255);
	leftBuffer.textFont(f, 10);
	leftBuffer.text("Corona in Europe",-40,0);
	/* small bubbles 3 Corona in Europe */
	leftBuffer.push();
	leftBuffer.translate(0,-30);
	YourSmallBubbleStyle21(0);
	leftBuffer.fill(0);
	leftBuffer.textFont('Helvetica', 1.5);
	leftBuffer.text("Evening Standard",-4.7,-6);
	leftBuffer.image(imgStandardnews, -6.7,-7.2, imgStandardnews.width/1300, imgStandardnews.height/1300);
	leftBuffer.textFont('Helvetica', 1);
	leftBuffer.text("Dolphins and swans appear in",-7.5,-4.2);
	leftBuffer.text("Venice canals a week after city locks",-7.5,-3.2);
	leftBuffer.text("down to prevent Coronavirus spread.",-7.5,-2.2);
	leftBuffer.image(imgDolphin, -6.5,-1, imgDolphin.width/70, imgDolphin.height/70);

	leftBuffer.translate(-30,50);
	YourSmallBubbleStyle21(0);
	leftBuffer.fill(0);
	leftBuffer.textFont('Helvetica', 1.5);
	leftBuffer.text("Paul Frank (friend)",-4.8,-6);
	leftBuffer.image(imgp2, -6.5,-7.2, imgp2.width/400, imgp2.height/400);
	leftBuffer.textFont('Helvetica', 1);
	leftBuffer.text("Dutch restaurants solved the problem",-7.9,-4.2);
	leftBuffer.text("of dining out during the COVID-19",-7.9,-3.2);
	leftBuffer.text("coronavirus disease pandemic by",-7.9,-2.2);
	leftBuffer.text("installingpersonal greenhouse booths.",-7.9,-1.2);
	leftBuffer.image(imgDutchres, -6.0,-0.5, imgDutchres.width/55, imgDutchres.height/55);

	leftBuffer.translate(40,10);
	YourSmallBubbleStyle21(0);
	leftBuffer.fill(0);
	leftBuffer.textFont('Helvetica', 1.5);
	leftBuffer.text("7News",-1.5,-6);
	leftBuffer.image(img7news, -4,-7.2, img7news.width/170, img7news.height/170);
	leftBuffer.textFont('Helvetica', 1);
	leftBuffer.text("German health expert claims drink-",-7.5,-4.2);
	leftBuffer.text("ing alcohol can protect against ",-7.5,-3.2);
	leftBuffer.text("coronavirus.",-7.5,-2.2);
	leftBuffer.image(imgAlchole, -6.5,-1, imgAlchole.width/70, imgAlchole.height/70);
	leftBuffer.pop();
	
  /* Your bubble 4 */
    leftBuffer.translate(200, -50);
	leftBuffer.strokeWeight(1.5);
	leftBuffer.stroke(100);
	YourBubbleStyle21(4);
	leftBuffer.noStroke();
	leftBuffer.fill(0);
	leftBuffer.textFont(f, 10);
	leftBuffer.text("Immigration",-30,0);
	/* for bubble 4 Immigration */
	leftBuffer.push();
	leftBuffer.translate(0,20);
	YourSmallBubbleStyle21(0);
	leftBuffer.fill(0);
	leftBuffer.textFont('Helvetica', 1.5);
	leftBuffer.text("TurningPoint USA",-4.7,-6);
	leftBuffer.image(imgTurningpoint, -6.5,-7.2, imgTurningpoint.width/170, imgTurningpoint.height/170);
	leftBuffer.textFont('Helvetica', 1);
	leftBuffer.text("Biden Admin Consider Restarting ",-7.5,-4.2);
	leftBuffer.text("Border Wall Construction to 'plug ",-7.5,-3.2);
	leftBuffer.text("gaps'.",-7.5,-2.2);
	leftBuffer.image(imgWall, -6.5,-1, imgWall.width/70, imgWall.height/70);
	leftBuffer.pop();
	
  /* Your bubble 5 */
    leftBuffer.translate(-50, 100);
	leftBuffer.strokeWeight(1.5);
	leftBuffer.stroke(100);
	YourBubbleStyle21(5);
	leftBuffer.noStroke();
	leftBuffer.fill(0);
	leftBuffer.textFont(f, 10);
	leftBuffer.text("Market",-15,0);	
	/* for bubble 5 Market */
	leftBuffer.push();
	leftBuffer.translate(0,20);
	YourSmallBubbleStyle21(0);
	leftBuffer.fill(0);
	leftBuffer.textFont('Helvetica', 1.5);
	leftBuffer.text("Definition.org",-3,-6);
	leftBuffer.image(imgDefinition, -5,-7.2, imgDefinition.width/170, imgDefinition.height/170);
	leftBuffer.textFont('Helvetica', 1);
	leftBuffer.text("The abandoned Bennett School for",-7.5,-4.2);
	leftBuffer.text("Girls was also once a mega-mansion",-7.5,-3.2);
	leftBuffer.text("for the rich and famous.",-7.5,-2.2);
	leftBuffer.image(imgMansion, -6.5,-1, imgMansion.width/70, imgMansion.height/70);
	leftBuffer.pop();

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
    rightBuffer.text("OPPOSITE BUBBLE",-180,-320);
	rightBuffer.textFont(f, 12);
	rightBuffer.text("IT PRESENTS OPINIONS YOU ARE NOT EXPOSED TO.",-150,-295);

	/* Your bubbe 1 */
	rightBuffer.translate(80, 100);
	rightBuffer.strokeWeight(3);
	rightBuffer.stroke(255);
	YourBubbleStyle22(1);
	rightBuffer.noStroke();
	rightBuffer.fill(0);
	rightBuffer.textFont(f, 10);
	rightBuffer.text("Donald Trump",-25,0);
	/* small bubbles 1 Donald Trump*/
	rightBuffer.push();
	rightBuffer.translate(0,-30);
	YourSmallBubbleStyle22(0);
	rightBuffer.fill(0);
	rightBuffer.textFont('Helvetica', 1.5);
	rightBuffer.text("BBC",-2,-6);
	rightBuffer.image(imgBBC, -3.7,-7.2, imgBBC.width/200, imgBBC.height/200);
	rightBuffer.textFont('Helvetica', 0.9);
	rightBuffer.text("Donald Trump's life story: From hotel",-7.9,-4.2);
	rightBuffer.text("developer to president.",-7.9,-3.2);
	rightBuffer.image(imgTrumpsuccess, -5.7,-2, imgTrumpsuccess.width/80, imgTrumpsuccess.height/80);

	rightBuffer.translate(-40,50);
	YourSmallBubbleStyle22(0);
	rightBuffer.fill(0);
	rightBuffer.textFont('Helvetica', 1.5);
	rightBuffer.text("The Guardian",-3.7,-6);
	rightBuffer.image(imgGuardian, -5.7,-7.2, imgGuardian.width/300, imgGuardian.height/300);
	rightBuffer.textFont('Helvetica', 1);
	rightBuffer.text("Donald Trump returns to social",-7,-4.2);
	rightBuffer.text("media with glorified blog.",-7,-3.2);
	rightBuffer.image(imgTrumpmedia, -6.0,-2, imgTrumpmedia.width/68, imgTrumpmedia.height/68);

	rightBuffer.translate(40,30);
	YourSmallBubbleStyle22(0);
	rightBuffer.fill(0);
	rightBuffer.textFont('Helvetica', 1.5);
	rightBuffer.text("Yahoo Finance",-3.5,-6);
	rightBuffer.image(imgYahoo, -7.5,-7.5, imgYahoo.width/300, imgYahoo.height/300);
	rightBuffer.textFont('Helvetica', 1);
	rightBuffer.text("Biden Team Likely to Proceed With",-8,-4.2);
	rightBuffer.text("Trump China Investment Ban.",-8,-3.2);
	rightBuffer.image(imgTransgender, -6.5,-2, imgTransgender.width/70, imgTransgender.height/70);

	rightBuffer.translate(50,-20);
	YourSmallBubbleStyle22(0);
	rightBuffer.fill(0);
	rightBuffer.textFont('Helvetica', 1.5);
	rightBuffer.text("Bloomberg",-3,-5.3);
	rightBuffer.image(imgBloomberg, -4.5,-6.5, imgBloomberg.width/170, imgBloomberg.height/170);
	rightBuffer.textFont('Helvetica', 0.9);
	rightBuffer.text("At least until the pandemic, Trump’s",-8,-3.8);
	rightBuffer.text("Economy Really Was Better Than Obama’s.",-8,-2.8);
	rightBuffer.image(imgTrumpeconomy, -7.5,-2, imgTrumpeconomy.width/85, imgTrumpeconomy.height/85);
	rightBuffer.pop();

	/* Your bubble 2 */
	rightBuffer.translate(-200, -40);
	rightBuffer.strokeWeight(2);
	rightBuffer.stroke(255);
	YourBubbleStyle22(2);
	rightBuffer.noStroke();
	rightBuffer.fill(255);
	rightBuffer.textFont(f, 10);
	rightBuffer.text("Corona outside Europe",-60,0);
	/* small bubbles 2 Corona outside Europe */
	rightBuffer.push();
	rightBuffer.translate(0,-30);
	YourSmallBubbleStyle22(0);
	rightBuffer.fill(0);
	rightBuffer.textFont('Helvetica', 1.5);
	rightBuffer.text("Cleveland Clinic",-3.7,-6);
	rightBuffer.image(imgCleveland, -5.7,-7.2, imgCleveland.width/300, imgCleveland.height/300);
	rightBuffer.textFont('Helvetica', 1);
	rightBuffer.text("Already Vaccinated? Here’s Why You",-7.8,-4.2);
	rightBuffer.text("Shouldn’t Stop Wearing Face Mask Yet.",-7.8,-3.2);
	rightBuffer.image(imgMask, -6.5,-2, imgMask.width/55, imgMask.height/55);

	rightBuffer.translate(-30,50);
	YourSmallBubbleStyle22(0);
	rightBuffer.fill(0);
	rightBuffer.textFont('Helvetica', 1.5);
	rightBuffer.text("China Briefing",-2.8,-6);
	rightBuffer.image(imgChinabriefing, -6,-7.2, imgChinabriefing.width/800, imgChinabriefing.height/800);
	rightBuffer.textFont('Helvetica', 1);
	rightBuffer.text("COVID-19 Catalyzes Commercial ",-8.2,-3.5);
	rightBuffer.text("Use of 5G in China.",-8.2,-2.5);
	rightBuffer.image(img5g2, -5.3,-1.5, img5g2.width/80, img5g2.height/80);

	rightBuffer.translate(40,10);
	YourSmallBubbleStyle22(0);
	rightBuffer.fill(0);
	rightBuffer.textFont('Helvetica', 1.5);
	rightBuffer.text("CNBC",-1.6,-6);
	rightBuffer.image(imgCNBC, -3.7,-7.2, imgCNBC.width/400, imgCNBC.height/400);
	rightBuffer.textFont('Helvetica', 1);
	rightBuffer.text("U.S. to discuss wider Covid vaccine",-7.5,-4.2);
	rightBuffer.text("licensing as India calls to waive ",-7.5,-3.2);
	rightBuffer.text("patent protections.",-7.5,-2.2);
	rightBuffer.image(imgIndiavaccine, -7,-1, imgIndiavaccine.width/54, imgIndiavaccine.height/54);
	rightBuffer.pop();
	
  /* Your bubble 3 */
  	rightBuffer.translate(20, -170);
	rightBuffer.strokeWeight(1.5);
	rightBuffer.stroke(100);
	YourBubbleStyle22(3);
	rightBuffer.noStroke();
	rightBuffer.fill(0);
	rightBuffer.textFont(f, 10);
	rightBuffer.text("Corona in Europe",-40,0);
	/* small bubbles 3 Corona in Europe */
	rightBuffer.push();
	rightBuffer.translate(0,-30);
	YourSmallBubbleStyle22(0);
	rightBuffer.fill(0);
	rightBuffer.textFont('Helvetica', 1.5);
	rightBuffer.text("Reuters",-1.8,-6);
	rightBuffer.image(imgReuters, -3.5,-7.2, imgReuters.width/400, imgReuters.height/400);
	rightBuffer.textFont('Helvetica', 1);
	rightBuffer.text("The Plastic Pandemic: COVID-19",-7.5,-4.2);
	rightBuffer.text("trashed the recycling dream.",-7.5,-3.2);
	rightBuffer.image(imgPlastic, -7,-2, imgPlastic.width/90, imgPlastic.height/90);

	rightBuffer.translate(-30,50);
	YourSmallBubbleStyle22(0);
	rightBuffer.fill(0);
	rightBuffer.textFont('Helvetica', 1.5);
	rightBuffer.text("Reuters",-1.8,-6);
	rightBuffer.image(imgReuters, -3.5,-7.2, imgReuters.width/400, imgReuters.height/400);
	rightBuffer.textFont('Helvetica', 1);
	rightBuffer.text("Dutch lockdown measures remain",-7.9,-4.2);
	rightBuffer.text("until at least April 28, ANP says.",-7.9,-3.2);
	rightBuffer.image(imgDutchlockdown, -7.5,-2, imgDutchlockdown.width/83, imgDutchlockdown.height/83);

	rightBuffer.translate(40,10);
	YourSmallBubbleStyle22(0);
	rightBuffer.fill(0);
	rightBuffer.textFont('Helvetica', 1.5);
	rightBuffer.text("Medical News Today",-5,-6);
	rightBuffer.image(imgMNT, -7,-7.2, imgMNT.width/120, imgMNT.height/120);
	rightBuffer.textFont('Helvetica', 1);
	rightBuffer.text("Drinking alcohol does not reduce the",-8,-4.2);
	rightBuffer.text("chance of acquiring SARS-CoV-2 or",-8,-3.2);
	rightBuffer.text("developing severe illness from COVID-19.",-8,-2.2);
	rightBuffer.image(imgalchole2, -6.5,-1, imgalchole2.width/70, imgalchole2.height/70);
	rightBuffer.pop();
	
  /* Your bubble 4 */
  	rightBuffer.translate(200, -50);
	rightBuffer.strokeWeight(1.5);
	rightBuffer.stroke(255);
	YourBubbleStyle22(4);
	rightBuffer.noStroke();
	rightBuffer.fill(255);
	rightBuffer.textFont(f, 10);
	rightBuffer.text("Immigration",-30,0);
	/* for bubble 4 Immigration */
	rightBuffer.push();
	rightBuffer.translate(0,20);
	YourSmallBubbleStyle22(0);
	rightBuffer.fill(0);
	rightBuffer.textFont('Helvetica', 1.5);
	rightBuffer.text("Vox",-1,-6);
	rightBuffer.image(imgVox, -3,-7.2, imgVox.width/170, imgVox.height/170);
	rightBuffer.textFont('Helvetica', 1);
	rightBuffer.text("The 2020 census shows that",-6.5,-4.2);
	rightBuffer.text("America isn’t full and that it",-6.5,-3.2);
	rightBuffer.text("needs immigrants — by a lot.",-6.5,-2.2);
	rightBuffer.image(imgImmigration, -6.5,-1, imgImmigration.width/73, imgImmigration.height/73);
	rightBuffer.pop();
	
  /* Your bubble 5 */
  	rightBuffer.translate(-50, 100);
	rightBuffer.strokeWeight(1.5);
	rightBuffer.stroke(255);
	YourBubbleStyle22(5);
	rightBuffer.noStroke();
	rightBuffer.fill(255);
	rightBuffer.textFont(f, 10);
	rightBuffer.text("Market",-15,0);
	/* for bubble 5 Market */
	rightBuffer.push();
	rightBuffer.translate(0,20);
	YourSmallBubbleStyle22(0);
	rightBuffer.fill(0);
	rightBuffer.textFont('Helvetica', 1.5);
	rightBuffer.text("Barron's",-2,-6);
	rightBuffer.image(imgBarrons, -4,-7.2, imgBarrons.width/1300, imgBarrons.height/1300);
	rightBuffer.textFont('Helvetica', 1);
	rightBuffer.text("Biden’s First 100 Days Were Historic",-7.5,-4.2);
	rightBuffer.text("for the Stock Market. What History",-7.5,-3.2);
	rightBuffer.text("Says Happens Next.",-7.5,-2.2);
	rightBuffer.image(imgTransgender, -6.5,-1, imgTransgender.width/70, imgTransgender.height/70);
	rightBuffer.pop();	

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
	gradientFillh.addColorStop(1, '#f4a261');
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
    gradientFill.addColorStop(0, '#f4f1bb');
    gradientFill.addColorStop(0.5, '#ed6a5a');
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
	gradientFillh.addColorStop(0, '#f4f1bb');
	gradientFillh.addColorStop(0.5, '#f4a261');
	gradientFillh.addColorStop(1, '#f4f1bb');
	rightBuffer.drawingContext.fillStyle = gradientFillh;
	rightBuffer.drawingContext.shadowOffsetX = 0;
	rightBuffer.drawingContext.shadowOffsetY = 5;
	rightBuffer.drawingContext.shadowBlur = 15;
	rightBuffer.drawingContext.shadowColor = 'grey';
	rightBuffer.ellipse(0, 0, bubbleSizeLayer0[i]);
}


function YourSmallBubbleStyle (i) {
	let gradientFillh = drawingContext.createRadialGradient(
		0, -bubbleSizeLayer1[i]/2, bubbleSizeLayer1[i]*0.1, 0, -bubbleSizeLayer1[i]/2, bubbleSizeLayer1[i]*0.9
	);
	gradientFillh.addColorStop(0, '#e6ebe0');
	gradientFillh.addColorStop(0.5, '#9bc1bc');
	gradientFillh.addColorStop(1, '#e6ebe0');
	drawingContext.fillStyle = gradientFillh;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = 5;
	drawingContext.shadowBlur = 15;
	drawingContext.shadowColor = 'grey';
	ellipse(0, 0, bubbleSizeLayer1[i]);
}

function YourSmallBubbleStyle21 (i) {
	let gradientFillh = drawingContext.createRadialGradient(
		0, -bubbleSizeLayer1[i]/2, bubbleSizeLayer1[i]*0.1, 0, -bubbleSizeLayer1[i]/2, bubbleSizeLayer1[i]*0.9
	);
	gradientFillh.addColorStop(0, '#e6ebe0');
	gradientFillh.addColorStop(0.5, '#9bc1bc');
	gradientFillh.addColorStop(1, '#e6ebe0');
	leftBuffer.drawingContext.fillStyle = gradientFillh;
	leftBuffer.drawingContext.shadowOffsetX = 0;
	leftBuffer.drawingContext.shadowOffsetY = 5;
	leftBuffer.drawingContext.shadowBlur = 15;
	leftBuffer.drawingContext.shadowColor = 'grey';
	leftBuffer.ellipse(0, 0, bubbleSizeLayer1[i]);
}

function YourSmallBubbleStyle22 (i) {
	let gradientFillh = drawingContext.createRadialGradient(
		0, -bubbleSizeLayer1[i]/2, bubbleSizeLayer1[i]*0.1, 0, -bubbleSizeLayer1[i]/2, bubbleSizeLayer1[i]*0.9
	);
	gradientFillh.addColorStop(0, '#f4f1bb');
	gradientFillh.addColorStop(0.5, '#f4a261');
	gradientFillh.addColorStop(1, '#f4f1bb');
	rightBuffer.drawingContext.fillStyle = gradientFillh;
	rightBuffer.drawingContext.shadowOffsetX = 0;
	rightBuffer.drawingContext.shadowOffsetY = 5;
	rightBuffer.drawingContext.shadowBlur = 15;
	rightBuffer.drawingContext.shadowColor = 'grey';
	rightBuffer.ellipse(0, 0, bubbleSizeLayer1[i]);
}

function YourBigBubbleStyle3 (i) {
	let gradientFillh = drawingContext.createRadialGradient(
		0, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.1, 0, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.9
	);
	gradientFillh.addColorStop(0, '#e6ebe0');
	gradientFillh.addColorStop(0.5, '#f4f1bb');
	gradientFillh.addColorStop(1, '#9bc1bc');
	drawingContext.fillStyle = gradientFillh;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = 5;
	drawingContext.shadowBlur = 15;
	drawingContext.shadowColor = 'grey';
	ellipse(0, 0, bubbleSizeLayer0[i]);
}


function YourBubbleStyle31 (i) {
	let gradientFillh = drawingContext.createRadialGradient(
		0, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.1, 0, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.9
	);
	gradientFillh.addColorStop(0, '#e6ebe0');
	gradientFillh.addColorStop(0.5, '#9bc1bc');
	gradientFillh.addColorStop(1, '#f4a261');
	drawingContext.fillStyle = gradientFillh;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = 5;
	drawingContext.shadowBlur = 15;
	drawingContext.shadowColor = 'grey';
	ellipse(0, 0, bubbleSizeLayer0[i]);
}

function YourBubbleStyle32 (i) {
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


function YourBubbleStyle33 (i) {
	let gradientFillh = drawingContext.createRadialGradient(
		0, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.1, 0, -bubbleSizeLayer0[i]/2, bubbleSizeLayer0[i]*0.9
	);
	gradientFillh.addColorStop(0, '#e6ebe0');
	gradientFillh.addColorStop(0.5, '#9bc1bc');
	gradientFillh.addColorStop(1, '#f4f1bb');
	drawingContext.fillStyle = gradientFillh;
	drawingContext.shadowOffsetX = 0;
	drawingContext.shadowOffsetY = 5;
	drawingContext.shadowBlur = 15;
	drawingContext.shadowColor = 'grey';
	ellipse(0, 0, bubbleSizeLayer0[i]);
}


