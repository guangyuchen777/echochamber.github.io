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
    if((mouseX >= 1180 && mouseX <= 1200 && mouseY >= 120 && mouseY <= 170) || (mouseX >= 1140 && mouseX <= 1200 && mouseY >= 200 && mouseY <= 250) || (mouseX >= 1180 && mouseX <= 1200 && mouseY >= 280 && mouseY <= 330) || (mouseX >= 1180 && mouseX <= 1200 && mouseY >= 360 && mouseY <= 410) || (mouseX >= 1180 && mouseX <= 1200 && mouseY >= 440 && mouseY <= 490))
	{cursor(HAND);
	}else {cursor(ARROW);
	}
if (FeedsNumber == 0) {
    fill(70);
    noStroke();
    textFont(f, 20);
    text("TRACKING THE ACCURARY OF THE FEEDS YOU CONSUMED",15,50);
    fill(120);
    textFont(f, 15);
    text("These data visualization are for keeping track of your consumed",15,80);
    text("feeds and inform you the feeds that verified to be fake.",15,100);
    text("The total inaccurate news you consumed last week:",15,140);
    fill(color('#ed6a5a'));
    text("8",470,140);
    
    
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
    rect(30, 500, 50, 0, 0, 0, 10, 10);
    rect(110, 500, 50, -10, 0, 0, 10, 10);
    rect(190, 500, 50, -20, 0, 0, 10, 10);
    rect(270, 500, 50, -10, 0, 0, 10, 10);
    rect(350, 500, 50, -10, 0, 0, 10, 10);
    rect(430, 500, 50, 0, 0, 0, 10, 10);
    rect(510, 500, 50, -30, 0, 0, 10, 10);
    
    fill(color('#5d576b'));
    rect(30, 560, 30, 20, 5, 5, 5, 5);
    fill(color('#9bc1bc'));
    rect(30, 590, 30, 20, 5, 5, 5, 5);
    fill(120);
    textFont(f, 10);
    text("Inaccurate feeds",72,572);
    text("Total consumed feeds",72,602);

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
    text("Inaccurate feeds",842,42);
    text("Total consumed feeds",842,72);
  }

  if (FeedsNumber ==1) {
    fill('white');
    rect(1160, 100, -300, 200, 10, 10, 10, 10);
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
    }else {FeedsNumber = 0;}
  }