const startBoxParent = document.getElementById("startBoxParent");
const easyButton = document.getElementById("easyButton");
const mediumButton = document.getElementById("mediumButton");
const hardButton = document.getElementById("hardButton");
const impossibleButton = document.getElementById("impossibleButton");
const randomButton = document.getElementById("randomButton");

const canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 30;
canvas.style.display = "none";

let ballRadius = 10;
let dx = 2;
let dy = 2;

let paddleHeight = 10;
let paddleWidth = 200;
let paddleX = (canvas.width - paddleWidth) / 2;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

let rightPressed = false;
let leftPressed = false;

let brickRowCount = Math.floor((Math.random() * 10) + 3);
let brickColumnCount = 6;
let totalC = undefined;

let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

let bricks = [];
let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;


let interval;

for (var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1};
    }
}


easyButton.addEventListener("click", drawEasy);
mediumButton.addEventListener("click", drawMedium);
hardButton.addEventListener("click", drawHard);
impossibleButton.addEventListener("click", drawImpossible);
randomButton.addEventListener("click", drawRandom);


function drawRandom() {
    
    startBoxParent.style.display = "none";
    canvas.style.display = "block";

    if (totalC == undefined) {

        totalC = brickColumnCount * brickRowCount;

    }

    let alertCount = 0;
    interval = setInterval(drawRandom, 10);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawBricks();
    drawPaddle();
    collisionDetection();
    winner();
        
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        
        dx = -dx;
    
    }
    if (y + dy < ballRadius) {
        
        dy = -dy;

    } else if (y + dy > canvas.height - ballRadius) {
        
        if (x > paddleX && x < paddleX + paddleWidth) {
            
            dy = -dy;
        
        } else {
            
            canvas.style.display = "none";
            startBoxParent.style.display = "block";
            clearInterval(interval); // Necessary for the game to end in chrome. //
            if (alertCount == 0 ) { 
                
                alert("Game Over!");
                alert++;

            }
            document.location.reload();
            
        }
    }
    
    x += dx * .20;
    y += dy * .20;
    
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        
        paddleX += 1;

    } else if (leftPressed && paddleX > 0) {
        
        paddleX -= 1;

    }
}

function drawEasy() {
    
    startBoxParent.style.display = "none";
    canvas.style.display = "block";

    brickRowCount = 3;
    if (totalC == undefined) {

        totalC = brickColumnCount * brickRowCount;

    }

    let alertCount = 0;
    interval = setInterval(drawEasy, 10);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawBricks();
    drawPaddle();
    collisionDetection();
    winner();
        
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        
        dx = -dx;
    
    }
    if (y + dy < ballRadius) {
        
        dy = -dy;

    } else if (y + dy > canvas.height - ballRadius) {
        
        if (x > paddleX && x < paddleX + paddleWidth) {
            
            dy = -dy;
        
        } else {
            
            canvas.style.display = "none";
            startBoxParent.style.display = "block";
            clearInterval(interval); // Necessary for the game to end in chrome. //
            if (alertCount == 0 ) { 
                
                alert("Game Over!");
                alert++;

            }

            document.location.reload();
            
        }
    }
    
    x += dx * .20;
    y += dy * .20;
    
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        
        paddleX += 1;

    } else if (leftPressed && paddleX > 0) {
        
        paddleX -= 1;

    }
}

function drawMedium() {
    
    startBoxParent.style.display = "none";
    canvas.style.display = "block";

    brickRowCount = 6;

    if (totalC == undefined) {

        totalC = brickColumnCount * brickRowCount;

    }

    let alertCount = 0;
    interval = setInterval(drawMedium, 10);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawBricks();
    drawPaddle();
    collisionDetection();
    winner();
        
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        
        dx = -dx;
    
    }
    if (y + dy < ballRadius) {
        
        dy = -dy;

    } else if (y + dy > canvas.height - ballRadius) {
        
        if (x > paddleX && x < paddleX + paddleWidth) {
            
            dy = -dy;
        
        } else {
            
            canvas.style.display = "none";
            startBoxParent.style.display = "block";
            clearInterval(interval); // Necessary for the game to end in chrome. //
            if (alertCount == 0 ) { 
                
                alert("Game Over!");
                alert++;

            }
            document.location.reload();
            
        }
    }
    
    x += dx * .20;
    y += dy * .20;
    
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        
        paddleX += 1;

    } else if (leftPressed && paddleX > 0) {
        
        paddleX -= 1;

    }
}

function drawHard() {
    
    startBoxParent.style.display = "none";
    canvas.style.display = "block";

    brickRowCount = 9;

    if (totalC == undefined) {

        totalC = brickColumnCount * brickRowCount;

    }

    let alertCount = 0;
    interval = setInterval(drawHard, 10);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawBricks();
    drawPaddle();
    collisionDetection();
    winner();
        
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        
        dx = -dx;
    
    }
    if (y + dy < ballRadius) {
        
        dy = -dy;

    } else if (y + dy > canvas.height - ballRadius) {
        
        if (x > paddleX && x < paddleX + paddleWidth) {
            
            dy = -dy;
        
        } else {
            
            canvas.style.display = "none";
            startBoxParent.style.display = "block";
            clearInterval(interval); // Necessary for the game to end in chrome. //
            if (alertCount == 0 ) { 
                
                alert("Game Over!");
                alert++;

            }
            document.location.reload();
            
        }
    }
    
    x += dx * .20;
    y += dy * .20;
    
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        
        paddleX += 1;

    } else if (leftPressed && paddleX > 0) {
        
        paddleX -= 1;

    }
}

function drawImpossible() {
    
    startBoxParent.style.display = "none";
    canvas.style.display = "block";

    brickRowCount = 12;

    if (totalC == undefined) {

        totalC = brickColumnCount * brickRowCount;

    }

    let alertCount = 0;
    interval = setInterval(drawImpossible, 10);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawBricks();
    drawPaddle();
    collisionDetection();
    winner();
        
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        
        dx = -dx;
    
    }
    if (y + dy < ballRadius) {
        
        dy = -dy;

    } else if (y + dy > canvas.height - ballRadius) {
        
        if (x > paddleX && x < paddleX + paddleWidth) {
            
            dy = -dy;
        
        } else {
            
            canvas.style.display = "none";
            startBoxParent.style.display = "block";
            clearInterval(interval); // Necessary for the game to end in chrome. //
            if (alertCount == 0 ) { 
                
                alert("Game Over!");
                alert++;

            }
            document.location.reload();
            
        }
    }
    
    x += dx * .20;
    y += dy * .20;
    
    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        
        paddleX += 1;

    } else if (leftPressed && paddleX > 0) {
        
        paddleX -= 1;

    }
}

function drawBall() {

    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();

}

function drawPaddle() {

    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = " #000000";
    ctx.fill();
    ctx.closePath();

}

function keyDownHandler(e) {
    
    if (e.key == "Right" || e.key == "ArrowRight") {
        
        rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    
    if (e.key == "Right" || e.key == "ArrowRight") {
        
        rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        
        leftPressed = false;
    }
}

function collisionDetection() {
    
    for (var c = 0; c < brickColumnCount; c++) {
        
        for (var r = 0; r < brickRowCount; r++) {
            
            var b = bricks[c][r];
            
            if (b.status === 1) {
                
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    
                    dy = -dy;
                    b.status = 0;
                    totalC -= 1;

                }
            }
        }
    }
}

function drawBricks() {
    
    for (var c = 0; c < brickColumnCount; c++) {
        
        for (var r = 0; r < brickRowCount; r++) {

            if (bricks[c][r] == undefined) {

                bricks[c][r] = { x: 0, y: 0, status: 1};
            }

            if (bricks[c][r].status === 1) {
                
                var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = " #000000";
                ctx.fill();
                ctx.closePath();

            }  
        }
    }
}

function winner() {
    
    if (totalC === 0){
        
        let alertCount = 0;
        ctx.closePath();
        if (alertCount == 0 ) { 
                
                alert("Congratulations! You have completed this stage!");
                alert++;

        }
        
        document.location.reload();
        clearInterval(interval);
    } 
                
            // for (var i = 0; i < brickColumnCount; i++) {
            //     for (var j = 0; j < brickRowCount; j++) {
            //         if (bricks[i][j].status !== 0) {
            //             counterbool = false;
            //         }
            //     }
            // }
            // if (counterbool === true) {
            //     // ctx.closePath();
            //     alert("Congratulations! You have completed the first level!");
            //     document.location.reload();
//     clearInterval(interval);
}

