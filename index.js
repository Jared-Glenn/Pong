

class Game {
    constructor() {
        this.isRunning = true;
        this.ballX = 50;
        this.ballY = 50;
        this.ballXDir = Math.random() < 0.5 ? 1 : -1;
        this.ballYDir = Math.random() < 0.5 ? 1 : -1;;

        this.ballElement = document.getElementsById("ball");
    }

    run() {
        const animate = () => {
            if (!this.isRunning) return;

            this.moveBall();

            requestAnimationFrame(animate);
        }

        animate();
    }

    moveBall() {
        if (this.ballX <= 0 || this.ballX >= 100) {
            this.ballXDir *= -1;
        }
        if (this.ballY <= 0 || this.ballY >= 100) {
            this.ballYDir *= -1;
        }
        this.ballX = this.ballX + this.ballXDir;
        this.ballY = this.ballY + this.ballYDir;

        console.log(`Ball position: ${this.ballX}, ${this.ballY}`);
    };
}


const newGame = new Game();

newGame.run();