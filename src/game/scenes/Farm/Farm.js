import { Scene } from "phaser";
import { ACCESS_RESOURCE } from "../../../constants/house";
import { factoryAssets } from "../../components/factoryAssets/factoryAssets";
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
		this.factoryAccess = new factoryAssets(this);
	}

	preload() {
		this.load.setPath("assets");

		// LAND
		this.lands.preload();

		// HOUSE
		this.factoryAccess.preload();

		//FARMER ASSETS
		this.farmerAssets.preload();

		// BACKGROUND
		this.setBackground();
	}

	setBackground() {
		this.background = this.add.image(0, 0, "background").setOrigin(0, 0);
		this.background.setDisplaySize(widthBg, heightBg);
	}

	createWareHouse() {
		const wareHouse = this.factoryAccess.createHouse(
			1160,
			580,
			ACCESS_RESOURCE.WARE_HOUSE
		);
		this.factoryAccess.setIndex(wareHouse, 100);
		this.factoryAccess.setSize(wareHouse, 200, 200);
		this.factoryAccess.setBoundBox(wareHouse, 180, 180);

		this.factoryAccess.setStatic(wareHouse);
	}
	createPool() {
		const pool = this.factoryAccess.createHouse(815, 620, ACCESS_RESOURCE.POOL);
		this.factoryAccess.setIndex(pool, 1);
		this.factoryAccess.setSize(pool, 270, 120);
		this.factoryAccess.setStatic(pool);

		//
	}
	create() {
		const farmerSprite = this.farmerAssets.create(500, 800);
		this.farmer = new FarmerAction(this, farmerSprite);
		this.lands.createLands();
		///
		this.createWareHouse();
		this.createPool();

		// // Set the ob
	}

	update() {}
}
