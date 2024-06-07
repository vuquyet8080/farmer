export class FarmerAssets {
	constructor(scene) {
		this.scene = scene;
	}

	preload() {
		// this.scene.load.setPath("assets");

		this.scene.load.atlas({
			key: "farmerAtlas",
			textureURL: "farmer/farmer.png",
			atlasURL: "farmer/farmer.json",
		});
	}

	create(x, y) {
		this.createAnimations();
		const farmerSprite = this.scene.add.sprite(x, y, "farmerAtlas");
		farmerSprite.setScale(0.7);
		farmerSprite.play("wall");
		farmerSprite.setDepth(100);

		return farmerSprite;
	}
	createAnimations() {
		this.scene.anims.create({
			key: "wall",
			frames: this.scene.anims.generateFrameNames("farmerAtlas", {
				start: 1,
				end: 3,
				prefix: "farmer1/wall/wall",
				suffix: ".png",
			}),
			frameRate: 7,
			repeat: -1,
		});

		this.scene.anims.create({
			key: "farm",
			frames: this.scene.anims.generateFrameNames("farmerAtlas", {
				prefix: "farmer1/farm/farm",
				start: 1,
				end: 3,
				suffix: ".png",
			}),
			frameRate: 7,
			repeat: -1,
		});
	}
	stopAnimation() {
		this.farmerSprite.anims.stop(); // Stop the animation for the farmer sprite
	}
}
