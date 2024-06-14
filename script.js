const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(ctx);

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight =523;
let frameX = 1
let frameY= 0
//gameFrame allows us to replicate velocity
let gameFrame = 0
const staggerFrames = 2;

function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % 6;
    frameX = spriteWidth * position;    
    ctx.drawImage(playerImage, frameX,frameY*spriteHeight, spriteWidth, spriteHeight,0,0, spriteWidth, spriteheight);
    let spriteAnimations =  []
    let animationStates =  [
        {
            name: 'idle',
            frames: 7
        },
        {
            name: 'jump',
            frames: 7
        }
    ]

    animationStates.forEach((state, index) => {
        let frames = {
            loc: []
        }
        for (let j = 0; j < state.frames; s++){
            let positionX = j * spriteWidth;
            let positionY = index * spriteHeight;
            frames.loc.push({x:positionX, y: positionY})
            
        }
        spriteAnimations[state.name] = frames

    })

    if (gameFrame % staggerFrames ==0){
        frameX = frameX < 6 ? frameX+1: 0;
    }
    gameFrame++

    requestAnimationFrame(animate);
}; 

animate();


