import { GameObjects, Math, Geom } from "phaser";
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
		this.disableMove = false;

		// this.scene.matter.add.gameObject(this.farmer, { shape: "rectangle" });
	}

	setupCamera() {
		this.scene.cameras.main.setBounds(0, 0, widthBg, heightBg);
		this.scene.cameras.main.centerOn(this.farmer.x, this.farmer.y);
		this.scene.cameras.main.startFollow(this.farmer);
	}

	setMoveDisable(status) {
		console.log("setMoveAction", status);
		this.disableMove = status;
	}

	moveFarmer(pointerX, pointerY) {
		if (this.disableMove) return;
		const deltaX = pointerX - this.farmer.x;

		// Set the direction and flip the sprite accordingly
		if (deltaX < 0) {
			this.farmer.flipX = true; // Flip sprite horizontally when moving left
			this.currentDirection = "left";
		} else {
			this.farmer.flipX = false; // Do not flip sprite when moving right
			this.currentDirection = "right";
		}
		const targetPosition = { x: pointerX, y: pointerY >= 520 ? pointerY : 520 };

		this.scene.tweens.add({
			targets: this.farmer,
			x: pointerX,
			y: pointerY >= 520 ? pointerY : 520,
			duration:
				Math.Distance.Between(
					this.farmer.x,
					this.farmer.y,
					targetPosition.x,
					targetPosition.y
				) * 3,

			ease: "Linear",

			// onComplete: () => {
			// 	// Ensure the farmer stops at the correct position
			// 	this.farmer.setPosition(targetPosition.x, targetPosition.y);
			// },
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
			if (this.scene.store.storeModal._visible) return;
			this.moveFarmer(pointer.worldX, pointer.worldY);
		});
	}
}
