

class Game {
    constructor() {
        this.isRunning = true;
        this.ballX = 50;
        this.ballY = 50;
        this.ballXDir = Math.random() < 0.5 ? 1 : -1;
        this.ballYDir = Math.random() < 0.5 ? 1 : -1;;
        this.ballSpeed = 0.8;

        this.ballElement = document.getElementById('ball');

        this.paddleY = 45;
        this.paddleSpeed = 3;
        this.paddleElement = document.getElementById('left-paddle');

        document.addEventListener('keydown', (e) => this.handleKeydown(e));
    }

    run() {
        const animate = () => {
            if (!this.isRunning) return;

            this.moveBall();
            this.movePaddle();

            requestAnimationFrame(animate);
        }

        animate();
    }

    moveBall() {
        if (this.ballX <= 0 || this.ballX >= 100) {
            this.ballXDir *= -1;
        }
        if (this.ballY <= 5 || this.ballY >= 95) {
            this.ballYDir *= -1;
        }
        if (this.ballXDir === -1 && this.ballX <= 11 && this.ballX >= 6 && this.ballY <= (this.paddleY + 10) 
            && this.ballY >= this.paddleY - 10) {
                this.ballXDir *= -1;
        }
        this.ballX = this.ballX + this.ballXDir * this.ballSpeed;
        this.ballY = this.ballY + this.ballYDir * this.ballSpeed * 0.6;

        this.ballElement.style.left = `${this.ballX}vw`;
        this.ballElement.style.top = `${this.ballY}vh`;
        console.log(`Ball position: ${this.ballX}, ${this.ballY}`)
    };

    movePaddle() {
        this.paddleElement.style.top = `${this.paddleY}vh`
    }

    handleKeydown(e) {
        if (e.key === 'w' && this.paddleY >= 0) {
            console.log("Up");
            this.paddleY -= this.paddleSpeed;
        }
        if (e.key === 's' && this.paddleY <= 90) {
            console.log("Down");
            this.paddleY += this.paddleSpeed;
        }
        console.log(`Paddle position: ${this.paddleY}`);
    }
}


const newGame = new Game();

newGame.run();