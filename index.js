//Stores the states of the game
let state = {

};

//Canvas Element and drawing context
const canvas = document .getElementById("game");
canvas.width = window.innerWidth;
canvas.heigth = window.innerHeight;

const context = canvas.getContext("2d");

newGame();

function newGame() {
    //reset state
    state = {
        phase : "celebrating",      // aiming | in flight | celebrating
        currentPlayer: 1,
        bomb : {
            x: undefined,
            y: undefined,
            rotation: 0,
            velocity: {
                x: 0,
                y: 0
            }
        },

        //buildings
        backgroundBuildings: [],
        building: [],
        blastHoles: [],
    };

    //generate backgroud buildings
    for (let i = 0; i < 11; i++) {
        generateBackgroundBuildings(i);
    }

    //generate main buildings
    for (let j = 0; j < 8; j++) {
        generateMainBuildings(j)
    }

    initializeBombPosition();

    draw();
};

function draw() {

}

function throwBomb() {

}

function animate(timestamp) {

}

function generateBackgroundBuildings(index) {

}

function generateMainBuildings(index) {

}

function initializeBombPosition() {
    
}
