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

	update() {}
}
