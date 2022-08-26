var PC;
var bg; //background

var PCI;
var bgI;






function preload(){
PCI = loadAnimation('./gifs/personagem principal....gif');
bgI = loadImage('./imagens/cenarioOriginal.png');
//plantaI = loadImage('planta.png');

}

function setup(){
    createCanvas(1000, 500);

    PC = createSprite(200, 200, 30, 30);
    PC.addAnimation('PCi', PCI);
    PC.scale = 0.4;

 
}

function draw(){
    background(bgI);

    camera.on();
    camera.x = PC;
    camera.y = PC;
    movimento();
    
    drawSprites();
}

function movimento(){
    if(keyIsDown('RIGHT_ARROW')){
        PC.positionX += 5;
       }
}

