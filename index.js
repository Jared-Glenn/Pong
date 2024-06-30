

class Game {
    constructor() {
        this.isRunning = true;
        this.ballX = 300;
        this.ballY = 300;
        this.ballXDir = Math.random() < 0.5 ? 1 : -1;
        this.ballYDir = Math.random() < 0.5 ? 1 : -1;;
        this.ballSpeed = 2;

        this.ballElement = document.getElementById('ball');
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
        if (this.ballX <= 0 || this.ballX >= 500) {
            this.ballXDir *= -1;
        }
        if (this.ballY <= 0 || this.ballY >= 400) {
            this.ballYDir *= -1;
        }
        this.ballX = this.ballX + this.ballXDir * this.ballSpeed;
        this.ballY = this.ballY + this.ballYDir * this.ballSpeed;

        console.log(`Ball position: ${this.ballX}, ${this.ballY}`);
        this.ballElement.style.left = `${this.ballX}px`;
        this.ballElement.style.top = `${this.ballY}px`;
    };
}


const newGame = new Game();

newGame.run();