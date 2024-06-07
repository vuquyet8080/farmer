import { Scene } from "phaser";
import { FarmLands } from "./FarmLands";
import { FarmerAction } from "./FarmerAction";
import { FarmerAssets } from "./FarmerAssets";

// const scale = 0.6;
const scale = 0.8;

export const widthBg = 2300 * scale;
export const heightBg = 1270 * scale;

export class Farm extends Scene {
	logoTween;

	constructor() {
		super("Farm");
		this.lands = new FarmLands(this);
		this.farmerAssets = new FarmerAssets(this);
	}

	preload() {
		this.load.setPath("assets");

		//FARMER ASSETS
		this.farmerAssets.preload();

		// LAND
		this.lands.preload();

		// BACKGROUND
		this.setBackground();
	}

	setBackground() {
		this.background = this.add.image(0, 0, "background").setOrigin(0, 0);
		this.background.setDisplaySize(widthBg, heightBg);
	}

	create() {
		const farmerSprite = this.farmerAssets.create(500, 800);
		this.farmer = new FarmerAction(this, farmerSprite);

		this.lands.createLands();
	}

	// moveCameraUp() {
	// 	if (this.cameras.main.scrollY > 0) {
	// 		this.cameras.main.scrollY -= 5;
	// 	}
	// }

	// moveCameraDown() {
	// 	const maxY = this.background.displayHeight - this.cameras.main.height;
	// 	if (this.cameras.main.scrollY < maxY) {
	// 		this.cameras.main.scrollY += 5;
	// 	}
	// }

	// moveCameraLeft() {
	// 	if (this.cameras.main.scrollX > 0) {
	// 		this.cameras.main.scrollX -= 5;
	// 	}
	// }

	// moveCameraRight() {
	// 	const maxX = this.background.displayWidth - this.cameras.main.width;
	// 	if (this.cameras.main.scrollX < maxX) {
	// 		this.cameras.main.scrollX += 5;
	// 	}
	// }
	update() {
		// Update farmer
		// console.log("xxx");
		// this.farmer.update();
	}
}
