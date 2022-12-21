var ufoImg, ufo;
var rockImg, rock, rockGroup;
var spaceImg, space;




function preload(){
ufoimg=loadImage("ufo_infrunnergame");
atmosphereimg=loadImage("atmosphere_infrunnergame");
rockimg=loadImage("space_rock_infrunnergame");
}

function setup() {
 createCanvas (600, 600)
 ufo=createSprite(100, 120, 50, 50);
 ufo.addImage("ufo_infrunnergame",ufoImg);
 ufo.scale = 0.5
 
 rock=createSprite(50, 60, 50, 50);
 rock.addImage("space_rock_infrunnergame",ufoImg);
 rock.scale = 0.8

 space=createSprite(0, 0, 600, 600);
 space.addImage("space_rock_infrunnergame",ufoImg);

 rockG=createGroup()
}

function draw() {
 background (180);
 
 if (frameCount%400===0){
    rock=createSprite(random(100, 500), -50)
    rock.addImage(rockImg);
    rock.velocityY = 1 
 }

 if (keyDown("SPACE")) {
    ghost.velocityY = -6
  }
  
  ghost.velocityY = ghost.velocityY + 0.3
   
  ghost.velocityX = 0
  if (keyDown("left")) {
    ghost.velocityY = -3
  }
 
  if (keyDown("right")) {
    ghost.velocityY = 3
  }

  ghost.collide(edges[2]);
  ghost.collide(edges[0]);
  ghost.collide(edges[1]);
  
drawSprites();
}
