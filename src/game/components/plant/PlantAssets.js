import { PlantBehavior } from "./PlantBehavior";

export class PlantAssets {
	constructor(scene) {
		this.scene = scene;
		this.plantSprite = null;
		this.currentTimer = null;
		// this.plantBehavior = null;
	}

	preload() {
		this.scene.load.atlas({
			key: "plantAtlas",
			textureURL: "plant/plants.png",
			atlasURL: "plant/plants.json",
		});
	}

	createPlant(x, y, width, height, frameName) {
		this.plantSprite = this.scene.add.image(x, y, "plantAtlas", frameName);
		this.plantSprite.displayWidth = width;
		this.plantSprite.displayHeight = height;
		this.plantSprite.setDepth(1);

		this.plantBehavior = new PlantBehavior(this.scene, this.plantSprite);
		this.plantBehavior.startCountdown(100);
		return this.plantSprite;
	}
	createIcon(x, y, frameName) {
		return this.scene.add.image(x, y, "plantAtlas", frameName);
	}
}
