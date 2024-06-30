 class PongGame {
    constructor() {
        this.isRunning = true;

        this.ballX = 50;
        this.ballY = 50;
        this.ballXDir = Math.random() < 0.5 ? -1 : 1;
        this.ballYDir = Math.random() < 0.5 ? -1 : 1;
        this.ballSpeed = 0.6;
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
        if (this.ballX <= 0 || this.ballX >= 100) {
            this.ballXDir *= -1;
        }
        if (this.ballY <= 0 || this.ballY > 100) {
            this.ballYDir *= -1;
        }

        this.ballX += this.ballXDir * this.ballSpeed;
        this.ballY += this.ballYDir * this.ballSpeed * 0.8;

        this.ballElement.style.top = `${this.ballY}vh`;
        this.ballElement.style.left = `${this.ballX}vw`;
        console.log(`Ball position: ${this.ballX}, ${this.ballY}`)
    }

}

const newGame = new PongGame();

newGame.run();