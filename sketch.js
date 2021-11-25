var cat, rat;
var StopCat,EndCat,WalkCat;
var StopRat,EndRat,FunRat;
var garden,gardenImg;


function preload() {
    StopCat = loadImage("images/cat1.png");
    WalkCat = loadAnimation("images/cat2.png","images/cat3.png");
    EndCat = loadImage("images/cat4.png");
    StopRat = loadImage("images/mouse2.png");
    EndRat = loadImage("images/mouse1.png");
    FunRat = loadImage("images/mouse3.png");
    gardenImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    
    garden = createSprite(500,400,10,10);
    garden.addImage(gardenImg);
    garden.scale = 1.1;

    cat = createSprite(900,700,50,50);
    cat.addImage(StopCat);
    cat.scale = 0.1;

    rat = createSprite(100,700,50,50);
    rat.addImage(StopRat);
    rat.scale = 0.08;

   

}

function draw() {
    background(rgb(0,100,5));
    

 if(cat.x - rat.x > (cat.width - rat.width)/2+50){
       
        
    
    if(keyDown(LEFT_ARROW)){
        cat.x = cat.x -3
        cat.addAnimation("andando",WalkCat);
        cat.changeAnimation("andando");
        cat.scale = 0.15;
    }
    else{
        cat.addImage("parado",StopCat);
        cat.changeImage("parado");
        cat.scale = 0.1;
    }

    if(keyDown(RIGHT_ARROW)){
        rat.addImage(FunRat);
    }
    else{
        rat.addImage(StopRat);
    }

 }

    if(cat.x - rat.x < (cat.width - rat.width)/2+50){
        cat.addImage("fimG",EndCat);
        cat.changeImage("fimG");
        cat.scale = 0.15;

        rat.addImage("fimR",EndRat);
        rat.changeImage("fimR");

    }


    drawSprites();
}



