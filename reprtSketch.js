let FeedsNumber = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(240, 242, 245);
  }
  
  function preload() {
    f = loadFont("https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf"
    );
  }
  
  function draw() {
    if((mouseX >= 1180 && mouseX <= 1200 && mouseY >= 120 && mouseY <= 170) || (mouseX >= 1140 && mouseX <= 1200 && mouseY >= 200 && mouseY <= 250) || (mouseX >= 1180 && mouseX <= 1200 && mouseY >= 280 && mouseY <= 330) || (mouseX >= 1180 && mouseX <= 1200 && mouseY >= 360 && mouseY <= 410) || (mouseX >= 1180 && mouseX <= 1200 && mouseY >= 440 && mouseY <= 490)
    || (mouseX >= 110 && mouseX <= 160 && mouseY >= 490 && mouseY <= 500) || (mouseX >= 190 && mouseX <= 240 && mouseY >= 480 && mouseY <= 500) || (mouseX >= 270 && mouseX <= 320 && mouseY >= 490 && mouseY <= 500) || (mouseX >= 350 && mouseX <= 400 && mouseY >= 490 && mouseY <= 500) || (mouseX >= 510 && mouseX <= 560 && mouseY >= 470 && mouseY <= 500))
	{cursor(HAND);
	}else {cursor(ARROW);
	}
if (FeedsNumber == 0) {
  RedrawCanvas();
}

  if (FeedsNumber ==1) {
    RedrawCanvas();
    fill('white');
    rect(1160, 100, -330, 150, 10, 10, 10, 10);

    fill(255,100,100);
    circle(870, 160, 40);
    fill(255);
    text("FALSE",855,164);
    textFont('Helvetica', 12);
    fill(100);
    text("Under former U.S. President Donald Trump,",910,140);
    text("Congress passed a law that gives outgoing",910,160);
    text("presidential administrations control of",910,180);
    text("American armed forces after Inauguration",910,200);
    text("Day, for up to 60 days.",910,220);
    textFont('Helvetica', 10);
    fill(0);
    text("See more >",1080,240);
  }

  if (FeedsNumber ==2) {
    RedrawCanvas();
    fill('white');
    rect(1120, 180, -330, 300, 10, 10, 10, 10);
    
    fill(255,100,100);
    circle(830, 230, 40);
    fill(255);
    textFont('Helvetica', 10);
    text("FALSE",815,234);
    textFont('Helvetica', 12);
    fill(100);
    text("German health expert claims drinking alcohol",870,220);
    text("can protect against coronavirus.",870,240);

    fill(200,100,100);
    circle(830, 300, 40);
    fill(255);
    textFont('Helvetica', 7);
    text("NOT",825,298);
    text("ACCURATE",811,306);
    textFont('Helvetica', 12);
    fill(100);
    text("Dolphins and Swans Appear in Venice Canals ",870,290);
    text("a Week After City Locks Down to Prevent ",870,310);
    text("Coronavirus Spread.",870,330);

    fill(200,100,100);
    circle(830, 390, 40);
    fill(255);
    textFont('Helvetica', 7);
    text("NOT",825,388);
    text("ACCURATE",811,396);
    textFont('Helvetica', 12);
    fill(100);
    text("Dutch restaurants solved the problem of ",870,380);
    text("dining out during the COVID-19 coronavirus",870,400);
    text("disease pandemicby installing personal ",870,420);
    text("greenhouse booths.",870,440);
    textFont('Helvetica', 10);
    fill(0);
    text("See more >",1040,460);
  }

  if (FeedsNumber ==3) {
    RedrawCanvas();
    fill('white');
    rect(1160, 260, -330, 110, 10, 10, 10, 10);
   
    fill(255,100,100);
    circle(870, 320, 40);
    fill(255);
    textFont('Helvetica', 10);
    text("FALSE",855,324);
    textFont('Helvetica', 12);
    fill(100);
    text("people in China tearing down a 5G tower ",910,300);
    text("in an attempt to stop the spread of ",910,320);
    text("COVID-19 coronavirus disease.",910,340);
    textFont('Helvetica', 10);
    fill(0);
    text("See more >",1080,360);

  }

  if (FeedsNumber ==4) {
    RedrawCanvas();
    fill('white');
    rect(1160, 340, -330, 90, 10, 10, 10, 10); 

    fill(200,100,100);
    circle(870, 390, 40);
    fill(255);
    textFont('Helvetica', 7);
    text("NOT",865,388);
    text("ACCURATE",851,396);
    textFont('Helvetica', 12);
    fill(100);
    text("Biden Admin Consider Restarting Border",910,380);
    text("Wall Construction to 'plug gaps'.",910,400);
    textFont('Helvetica', 10);
    fill(0);
    text("See more >",1080,420);
  }

  if (FeedsNumber ==5) {
    RedrawCanvas();
    fill('white');
    rect(1160, 420, -330, 110, 10, 10, 10, 10);

    fill(255,100,100);
    circle(870, 480, 40);
    fill(255);
    textFont('Helvetica', 10);
    text("FALSE",855,484);
    textFont('Helvetica', 12);
    fill(100);
    text("The abandoned Bennett School for Girls ",910,460);
    text("was also once a mega-mansion for the ",910,480);
    text("Crich and famous.",910,500);
    textFont('Helvetica', 10);
    fill(0);
    text("See more >",1080,520);
  }

  if (FeedsNumber ==6) {
    RedrawCanvas();
    fill('white');
    rect(135, 480, 330, -110, 10, 10, 10, 10);

    fill(255,100,100);
    circle(175, 430, 40);
    fill(255);
    textFont('Helvetica', 10);
    text("FALSE",160,434);
    textFont('Helvetica', 12);
    fill(100);
    text("The abandoned Bennett School for Girls ",215,410);
    text("was also once a mega-mansion for the ",215,430);
    text("Crich and famous.",215,450);
    textFont('Helvetica', 10);
    fill(0);
    text("See more >",385,470);
  }

  if (FeedsNumber ==7) {
    RedrawCanvas();
    fill('white');
    rect(215, 480, 330, -150, 10, 10, 10, 10);

    fill(255,100,100);
    circle(255, 390, 40);
    fill(255);
    text("FALSE",240,394);
    textFont('Helvetica', 12);
    fill(100);
    text("Under former U.S. President Donald Trump,",295,370);
    text("Congress passed a law that gives outgoing",295,390);
    text("presidential administrations control of",295,410);
    text("American armed forces after Inauguration",295,430);
    text("Day, for up to 60 days.",295,450);
    textFont('Helvetica', 10);
    fill(0);
    text("See more >",465,470);
  }

  if (FeedsNumber ==8) {
    RedrawCanvas();
    fill('white');
    rect(295, 480, 330, -90, 10, 10, 10, 10);

    fill(200,100,100);
    circle(335, 440, 40);
    fill(255);
    textFont('Helvetica', 7);
    text("NOT",330,438);
    text("ACCURATE",316,446);
    textFont('Helvetica', 12);
    fill(100);
    text("Biden Admin Consider Restarting Border",375,430);
    text("Wall Construction to 'plug gaps'.",375,450);
    textFont('Helvetica', 10);
    fill(0);
    text("See more >",530,470);
  }

  if (FeedsNumber ==9) {
    RedrawCanvas();
    fill('white');
    rect(375, 480, 330, -110, 10, 10, 10, 10);

    fill(255,100,100);
    circle(415, 430, 40);
    fill(255);
    textFont('Helvetica', 10);
    text("FALSE",400,434);
    textFont('Helvetica', 12);
    fill(100);
    text("people in China tearing down a 5G tower ",455,410);
    text("in an attempt to stop the spread of ",455,430);
    text("COVID-19 coronavirus disease.",455,450);
    textFont('Helvetica', 10);
    fill(0);
    text("See more >",625,470);
  }

  if (FeedsNumber ==10) {
    RedrawCanvas();
    fill('white');
    rect(535, 460, 330, -300, 10, 10, 10, 10);

    fill(255,100,100);
    circle(575, 210, 40);
    fill(255);
    textFont('Helvetica', 10);
    text("FALSE",560,214);
    textFont('Helvetica', 12);
    fill(100);
    text("German health expert claims drinking alcohol",615,200);
    text("can protect against coronavirus.",615,220);

    fill(200,100,100);
    circle(575, 280, 40);
    fill(255);
    textFont('Helvetica', 7);
    text("NOT",570,278);
    text("ACCURATE",556,286);
    textFont('Helvetica', 12);
    fill(100);
    text("Dolphins and Swans Appear in Venice Canals ",615,270);
    text("a Week After City Locks Down to Prevent ",615,290);
    text("Coronavirus Spread.",615,310);

    fill(200,100,100);
    circle(575, 370, 40);
    fill(255);
    textFont('Helvetica', 7);
    text("NOT",570,368);
    text("ACCURATE",556,376);
    textFont('Helvetica', 12);
    fill(100);
    text("Dutch restaurants solved the problem of ",615,360);
    text("dining out during the COVID-19 coronavirus",615,380);
    text("disease pandemicby installing personal ",615,400);
    text("greenhouse booths.",615,420);
    textFont('Helvetica', 10);
    fill(0);
    text("See more >",785,440);
  }
  
  }


  function mouseClicked () {
    if(mouseX >= 1180 && mouseX <= 1200 && mouseY >= 120 && mouseY <= 170)
    {
      FeedsNumber = 1;
    }else if (mouseX >= 1140 && mouseX <= 1200 && mouseY >= 200 && mouseY <= 250)
    {
      FeedsNumber = 2;
    }else if (mouseX >= 1180 && mouseX <= 1200 && mouseY >= 280 && mouseY <= 330)
    {
      FeedsNumber = 3;
    }else if (mouseX >= 1180 && mouseX <= 1200 && mouseY >= 360 && mouseY <= 410)
    {
      FeedsNumber = 4;
    }else if (mouseX >= 1180 && mouseX <= 1200 && mouseY >= 440 && mouseY <= 490)
    {
      FeedsNumber = 5;
    }else if (mouseX >= 110 && mouseX <= 160 && mouseY >= 490 && mouseY <= 500)
    {
      FeedsNumber = 6;
    }else if (mouseX >= 190 && mouseX <= 240 && mouseY >= 480 && mouseY <= 500)
    {
      FeedsNumber = 7;
    }else if (mouseX >= 270 && mouseX <= 320 && mouseY >= 490 && mouseY <= 500)
    {
      FeedsNumber = 8;
    }else if (mouseX >= 350 && mouseX <= 400 && mouseY >= 490 && mouseY <= 500)
    {
      FeedsNumber = 9;
    }else if (mouseX >= 510 && mouseX <= 560 && mouseY >= 470 && mouseY <= 500)
      {
        FeedsNumber = 10;
      }else {FeedsNumber = 0;}
  }


  function RedrawCanvas () {
    background(240, 242, 245);
    fill(70);
    noStroke();
    textFont(f, 20);
    text("TRACKING THE ACCURARY OF THE POSTS YOU CONSUMED",15,50);
    fill(120);
    textFont(f, 15);
    text("These data visualization are for keeping track of your consumed",15,80);
    text("posts and inform you the ones that verified to be inaccurate.",15,100);
    text("The total inaccurate/false posts you consumed last week:",15,140);
    fill(color('#ed6a5a'));
    text("7",530,140);
    
    
    strokeWeight(2);
    stroke(100);
    line(1200, 80, 1200, 700);
    line(20,500, 600,500);
    noStroke();
    /* week graph */
    fill(color('#9bc1bc'));
    rect(30, 500, 50, -100, 0, 0, 10, 10);
    rect(110, 500, 50, -140, 0, 0, 10, 10);
    rect(190, 500, 50, -200, 0, 0, 10, 10);
    rect(270, 500, 50, -180, 0, 0, 10, 10);
    rect(350, 500, 50, -130, 0, 0, 10, 10);
    rect(430, 500, 50, -240, 0, 0, 10, 10);
    rect(510, 500, 50, -280, 0, 0, 10, 10);
    fill(color('#5d576b'));
    rect(110, 500, 50, -10, 0, 0, 10, 10);
    rect(190, 500, 50, -10, 0, 0, 10, 10);
    rect(270, 500, 50, -10, 0, 0, 10, 10);
    rect(350, 500, 50, -10, 0, 0, 10, 10);
    rect(510, 500, 50, -30, 0, 0, 10, 10);
    
    fill(color('#5d576b'));
    rect(30, 560, 30, 20, 5, 5, 5, 5);
    fill(color('#9bc1bc'));
    rect(30, 590, 30, 20, 5, 5, 5, 5);
    fill(120);
    textFont(f, 10);
    text("Inaccurate/false posts",72,572);
    text("Total consumed posts",72,602);

    textFont(f, 15);
    fill(120);
    text("Mon",35,530);
    text("Tue",115,530);
    text("Wed",195,530);
    text("Thur",275,530);
    text("Fri",355,530);
    text("Sat",435,530);
    text("Sun",515,530);
    
    /* topic graph */
    fill(color('#f4a261'));
    rect(1200, 120, -400, 50, 0, 10, 10, 0);
    rect(1200, 200, -300, 50, 0, 10, 10, 0);
    rect(1200, 280, -300, 50, 0, 10, 10, 0);
    rect(1200, 360, -100, 50, 0, 10, 10, 0);
    rect(1200, 440, -100, 50, 0, 10, 10, 0);
    rect(1200, 520, -450, 50, 0, 10, 10, 0);
    rect(1200, 600, -400, 50, 0, 10, 10, 0);
    fill(color('#ed6a5a'));
    rect(1200, 120, -20, 50, 0, 10, 10, 0);
    rect(1200, 200, -60, 50, 0, 10, 10, 0);
    rect(1200, 280, -20, 50, 0, 10, 10, 0);
    rect(1200, 360, -20, 50, 0, 10, 10, 0);
    rect(1200, 440, -20, 50, 0, 10, 10, 0);
 

    fill(120);
    text("Donald Trump",1230,145);
    text("Corona in Europe",1230,225);
    text("Corona outside Europe",1230,305);
    text("Immigration",1230,385);
    text("Market",1230,465);
    text("Football",1230,545);
    text("Holidays",1230,625);

    fill(color('#ed6a5a'));
    rect(800, 30, 30, 20, 5, 5, 5, 5);
    fill(color('#f4a261'));
    rect(800, 60, 30, 20, 5, 5, 5, 5);
    fill(120);
    textFont(f, 10);
    text("Inaccurate/false posts",842,42);
    text("Total consumed posts",842,72);
  }
