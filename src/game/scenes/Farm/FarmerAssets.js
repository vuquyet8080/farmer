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

		// Create a Matter sprite
		this.farmerSprite = this.scene.matter.add.sprite(x, y, "farmerAtlas");
		this.farmerSprite.setBody({
			type: "rectangle",
			width: 70,
			height: 90,
			isStatic: true, // Ensure the farmer sprite doesn't move
			// Add any other physics properties you need, like mass, density, friction, etc.
		});

		// Optionally set the scale
		this.farmerSprite.setScale(0.7);

		// Play animation
		this.farmerSprite.play("wall");

		// Optionally set depth
		this.farmerSprite.setDepth(100);

		// Return the created sprite
		return this.farmerSprite;
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
