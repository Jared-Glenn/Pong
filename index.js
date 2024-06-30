

class Game {
    constructor() {
        isRunning: true;
        ballX: 50;
        ballY: 50;
        ballXDir: Math.random;
        ballYDir: 1;
    }

    run() {
        while(this.isRunning) {
            this.moveBall();
        }
    }

    moveBall() {
        
    };
}


const newGame = Game();

newGame.run();