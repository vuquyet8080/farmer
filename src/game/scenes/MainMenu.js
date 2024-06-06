import { Scene } from "phaser";

// const scale = 0.6;
const scale = 0.8;

const widthBg = 2300 * scale;
const heightBg = 1270 * scale;

export class MainMenu extends Scene {
    logoTween;

    constructor() {
        super("MainMenu");
    }

    create() {
        this.background = this.add.image(0, 0, "background").setOrigin(0, 0);
        this.background.setDisplaySize(widthBg, heightBg);

        this.input.keyboard.on("keydown-UP", this.moveCameraUp, this);
        this.input.keyboard.on("keydown-DOWN", this.moveCameraDown, this);
        this.input.keyboard.on("keydown-LEFT", this.moveCameraLeft, this);
        this.input.keyboard.on("keydown-RIGHT", this.moveCameraRight, this);
    }

    moveCameraUp() {
        if (this.cameras.main.scrollY > 0) {
            this.cameras.main.scrollY -= 5;
        }
    }

    moveCameraDown() {
        const maxY = this.background.displayHeight - this.cameras.main.height;
        if (this.cameras.main.scrollY < maxY) {
            this.cameras.main.scrollY += 5;
        }
    }

    moveCameraLeft() {
        if (this.cameras.main.scrollX > 0) {
            this.cameras.main.scrollX -= 5;
        }
    }

    moveCameraRight() {
        const maxX = this.background.displayWidth - this.cameras.main.width;
        if (this.cameras.main.scrollX < maxX) {
            this.cameras.main.scrollX += 5;
        }
    }
}
