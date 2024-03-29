var canvas = document.getElementById('canvas');

canvas.setAttribute("width", window.innerWidth);
canvas.setAttribute("height", window.innerHeight);

var ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false; // 이미지 부드럽게 처리하지 않음

var mouseX = 0;
var mouseY = 0;

var clientX = 0;
var clientY = 0;
var rectLeft = 0;
var rectTop = 0;

let lastTime = 0;
const targetFPS = 60;
const frameDuration = 1000 / targetFPS;

var tileSize = 16;
var objectScale = 6 * canvas.height * 0.001;

var onOverlay = false;


var cam = new Camera(canvas);
var bg = new Background();
var map = new Map();

// var button_prev = new Button(imgBtnPrev,prevSection, 2, 2, 0, 9);
// var button_next = new Button(imgBtnNext,nextSection, 2, 2, 2, 9);
// var button_select = new Button(imgBtnSelect,selectSection, 3, 2, 4, 9);

var listButtons = [
    // button_prev,
    // button_next,
    // button_select,
];


// 캐릭터 =================================
var charactor = new Charactor(6, 7);
// var info = new Info(charactor, currentSection);

cam.followObj = charactor;

var drawInfo = false;

// RUN FUNCTIONS ============;
keyInput();
mouseInput();

run();
// charactor.move("stop");  // 캐릭터 급발진 방지

// DECLARE FUNCTIONS=========


function mouseInput() {
    canvas.addEventListener('mousemove', (event) => {
        const rect = canvas.getBoundingClientRect();

        clientX = event.clientX;
        clientY = event.clientY;
        rectLeft = rect.left;
        rectTop = rect.top;
        
        mouseX = event.clientX - rect.left;
        mouseY = event.clientY - rect.top;
    });

    canvas.addEventListener('mousedown', (event) => {
        listButtons.forEach((button) => {
            button.press();
        });
    });

    canvas.addEventListener('mouseup', (event) => {
        listButtons.forEach((button) => {
            button.up();
        });
    });
}

function keyInput() {
    document.addEventListener('keydown', function (e) {
        console.log(e);
        if (e.code === 'Enter') {
            
        }
        if (e.code === 'Space') {
            
        }
        if (e.code === 'ArrowLeft') {
            
        }
        if (e.code === 'ArrowRight') {
            
        }
        if (e.code === 'ArrowUp') {
            
        }
        if (e.code === 'ArrowDown') {

        }
    });

    document.addEventListener('keyup', function (e) {
        if (e.code === 'ArrowLeft') {
        }
        if (e.code === 'ArrowRight') {
        }
        if (e.code === 'ArrowUp') {
        }
        if (e.code === 'ArrowDown') {
        }
    });
}


function run() {

    animation = requestAnimationFrame(run);
    const currentTime = performance.now();
    const elapsedTime = currentTime - lastTime;

    if (elapsedTime >= frameDuration) {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        charactor.update(elapsedTime);
        cam.update(elapsedTime);
        listButtons.forEach((button) => {
            button.update();
        });
        
        if (!onOverlay) {
            bg.draw();
            map.draw();
            listButtons.forEach((button) => {
                button.draw();
            });
        }
        charactor.draw(hitbox = false);

        if (drawInfo) {
            // info.draw();
        }


        // if (lastTime % cactusSpawnTime <= frameDuration) {
        //     var cactus = new Cactus();
        //     cactusArr.push(cactus);
        // }


        //===================================================
        lastTime = currentTime - (elapsedTime % frameDuration);
    }
}



function collisionCheck(obj1, obj2) {
    var diffX = Math.abs(obj1.x - obj2.x);
    var diffY = Math.abs(obj1.y - obj2.y);

    if ((diffX < (obj1.widthHalf + obj2.widthHalf))
        && (diffY < (obj1.heightHalf + obj2.heightHalf))) {
        return true;
    }
    return false;
}



