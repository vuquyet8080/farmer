import { Scene } from "phaser";

export class Preloader extends Scene {
    constructor() {
        super("Preloader");
    }

    init() {
        const bar = this.add.rectangle(
            window.innerWidth / 2 - 110,
            384,
            1,
            10,
            0xffffff
        );

        this.load.on("progress", (progress) => {
            bar.width = 4 + 220 * progress;
        });
    }

    preload() {
        this.load.setPath("assets");
        this.load.image("logo", "logo.png");
        this.load.image("star", "star.png");
    }

    create() {
        setTimeout(() => {
            this.scene.start("Farm");
        }, 250);
    }
}
