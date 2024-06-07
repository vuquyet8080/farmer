export class PlantAssets {
	constructor(scene) {
		this.scene = scene;
		this.plantSprite = null;
	}

	preload() {
		console.log("preload PlantAssets");

		this.scene.load.atlas({
			key: "plantAtlas",
			textureURL: "plant/plants.png",
			atlasURL: "plant/plants.json",
		});
	}

	createPlant(x, y, width, height, frameName) {
		console.log("createPlant");
		this.plantSprite = this.scene.add.image(x, y, "plantAtlas", frameName);
		this.plantSprite.displayWidth = width;
		this.plantSprite.displayHeight = height;
		this.plantSprite.setDepth(1);

		return this.plantSprite;
	}
	createIcon(x, y, frameName) {
		return this.scene.add.image(x, y, "plantAtlas", frameName);
	}
}
