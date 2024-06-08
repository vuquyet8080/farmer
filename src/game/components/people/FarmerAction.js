import { GameObjects, Math } from "phaser";
import { heightBg, widthBg } from "../../scenes/Farm/Farm";
// import { heightBg, widthBg } from "../../scenes/Farm";

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

	moveFarmer(pointerX, pointerY) {
		const deltaX = pointerX - this.farmer.x;

		// Set the direction and flip the sprite accordingly
		if (deltaX < 0) {
			this.farmer.flipX = true; // Flip sprite horizontally when moving left
			this.currentDirection = "left";
		} else {
			this.farmer.flipX = false; // Do not flip sprite when moving right
			this.currentDirection = "right";
		}

		this.scene.tweens.add({
			targets: this.farmer,
			x: pointerX,
			y: pointerY >= 520 ? pointerY : 520,
			duration:
				Math.Distance.Between(
					this.farmer.x,
					this.farmer.y,
					pointerX,
					pointerX
				) * 3,
			ease: "Linear",
		});
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
			}
		});

		this.scene.input.on("pointerdown", (pointer) => {
			this.moveFarmer(pointer.worldX, pointer.worldY);
		});
	}
}
