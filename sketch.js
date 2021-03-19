var canvas;
var music;
var edges, box, obs;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    obs = createSprite(690,570,160,30);
    obs2 = createSprite(470,570,160,30);
    obs3 = createSprite(280,570,160,30);
    obs4 = createSprite(90,570,160,30);

    obs3.shapeColor = 'blue';
    obs2.shapeColor = 'red';
    obs4.shapeColor =  'orange'
    


    //create box sprite and give velocity
    r = Math.round(random(1,800));
    box = createSprite(r,100,50,50)


    box.velocityY=10;
    box.velocityX = 5;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();

    box.bounceOff(edges);
    box.bounceOff(obs);
    box.collide(obs2);
    box.bounceOff(obs3);
    box.bounceOff(obs4);

    //add condition to check if box touching surface and make it box
    drawSprites();
}
