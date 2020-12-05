var fixedRect, movingRect;

function setup() 
{
 createCanvas(1400,800);

 fixedRect = createSprite(400,400,50,80);
 fixedRect.shapeColor = "cyan";

 movingRect = createSprite(900,400,80,30);
 movingRect.shapeColor = "cyan";

 fixedRect.velocityX = 5;
 movingRect.velocityX = -5;

}

function draw()
{
 background(0,0,0);
 if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2)
    {
      movingRect.velocityX = movingRect.velocityX * -1;
      fixedRect.velocityX = fixedRect.velocityX * -1;
    }

 if(movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
         fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
         {
           movingRect.velocityY = movingRect.velocityY * -1;
           fixedRect.velocityY = fixedRect.velocityY * -1;
         }

 if(movingRect.x === 1400)
 {
   movingRect.velocityX = -5;
 }

 if(fixedRect.x === 0)
 {
   fixedRect.velocityX = 5;
 }


 drawSprites();
}