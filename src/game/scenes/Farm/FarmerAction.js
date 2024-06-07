import { GameObjects } from "phaser";
import { heightBg, widthBg } from "./Farm";

export class FarmerAction extends GameObjects.Sprite {
	constructor(scene, farmerSprite) {
		super(scene, farmerSprite.x, farmerSprite.y, farmerSprite.texture.key);
		this.scene = scene;
		this.farmer = farmerSprite;
		this.setupCamera();
		this.handleInput();
		this.currentDirection = "right"; // Initial direction
	}

	setupCamera() {
		this.scene.cameras.main.setBounds(0, 0, widthBg, heightBg);
		this.scene.cameras.main.centerOn(this.farmer.x, this.farmer.y);
		this.scene.cameras.main.startFollow(this.farmer);
	}

	moveUp() {
		if (this.farmer.y > 520) {
			this.farmer.y -= 20; // Adjust the value as needed
		}
	}

	moveDown() {
		if (this.farmer.y < heightBg - this.farmer.height + 40) {
			this.farmer.y += 20; // Adjust the value as needed
		}
	}
	moveLeft() {
		if (this.farmer.x > 20) {
			this.farmer.x -= 20; // Adjust the value as needed
			this.farmer.flipX = true; // Flip sprite horizontally when moving left
			this.currentDirection = "left"; // Update current direction
		}
	}

	moveRight() {
		if (this.farmer.x < widthBg - this.farmer.width + 40) {
			this.farmer.x += 20; // Adjust the value as needed
			this.farmer.flipX = false; // Do not flip sprite when moving right
			this.currentDirection = "right"; // Update current direction
		}
	}
	handleInput() {
		this.scene.input.keyboard.on("keydown", (event) => {
			switch (event.code) {
				case "Enter": {
					this.farmer.play("farm");
					setTimeout(() => {
						this.farmer.play("wall");
					}, 900);
					return;
				}
				case "ArrowUp":
					this.moveUp();
					break;
				case "ArrowDown":
					this.moveDown();
					break;
				case "ArrowLeft":
					this.moveLeft();
					break;
				case "ArrowRight":
					this.moveRight();
					break;
			}
		});
	}
}
