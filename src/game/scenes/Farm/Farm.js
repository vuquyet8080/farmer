import { Scene } from "phaser";
import { ACCESS_RESOURCE, VERTICES_TX } from "../../../constants/house";
import { factoryAssets } from "../../components/factoryAssets/factoryAssets";
import { FarmerAction } from "../../components/people/FarmerAction";
import { FarmerAssets } from "../../components/people/FarmerAssets";
import { StoreAssets } from "../../components/store/StoreAssets";
import { FarmLands } from "./FarmLands";

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
		this.store = new StoreAssets(this);
		// this.storeAction = new StoreAction(this);
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

		//STORE
		// this.store.preload();
	}

	setBackground() {
		this.background = this.add.image(0, 0, "background").setOrigin(0, 0);
		this.background.setDisplaySize(widthBg, heightBg);
	}

	// createWareHouse() {
	// 	const wareHouse = this.factoryAccess.createObj(
	// 		1160,
	// 		580,
	// 		ACCESS_RESOURCE.WARE_HOUSE
	// 	);
	// 	this.factoryAccess.setIndex(wareHouse, 100);
	// 	this.factoryAccess.setSize(wareHouse, 200, 200);
	// 	this.factoryAccess.setBoundBox(wareHouse, 180, 180);

	// 	this.factoryAccess.setStatic(wareHouse);
	// }
	createPool() {
		const pool = this.factoryAccess.createObj(815, 620, ACCESS_RESOURCE.POOL);
		this.factoryAccess.setIndex(pool, 1);
		this.factoryAccess.setSize(pool, 270, 120);
		this.factoryAccess.setStatic(pool);
		//
	}
	createPlants() {
		const coconut_1 = this.factoryAccess.createObj(
			680,
			600,
			ACCESS_RESOURCE.COCONUT_1
		);
		this.factoryAccess.setIndex(coconut_1, 100);
		this.factoryAccess.setSize(coconut_1, 90, 110);
		this.factoryAccess.setStatic(coconut_1);

		const coconut_2 = this.factoryAccess.createObj(
			970,
			600,
			ACCESS_RESOURCE.COCONUT_2
		);
		this.factoryAccess.setIndex(coconut_2, 100);
		this.factoryAccess.setSize(coconut_2, 110, 170);
		this.factoryAccess.setStatic(coconut_2);

		//TX

		const tx1 = this.factoryAccess.createTrapezium(
			1300,
			925,
			ACCESS_RESOURCE.TX,
			VERTICES_TX
		);
		this.factoryAccess.setIndex(tx1, 100);
		this.factoryAccess.setSize(tx1, 100, 160);
		this.factoryAccess.setStatic(tx1);

		const tx2 = this.factoryAccess.createTrapezium(
			1490,
			925,
			ACCESS_RESOURCE.TX,
			VERTICES_TX
		);
		this.factoryAccess.setIndex(tx2, 100);
		this.factoryAccess.setSize(tx2, 100, 160);
		this.factoryAccess.setStatic(tx2);

		const news = this.factoryAccess.createObj(1120, 900, ACCESS_RESOURCE.NEWS);
		this.factoryAccess.setIndex(news, 100);
		this.factoryAccess.setSize(news, 80, 74);
		this.factoryAccess.setStatic(news);

		const cowBox = this.factoryAccess.createObj(
			1400,
			600,
			ACCESS_RESOURCE.COW_BOX
		);
		this.factoryAccess.setIndex(cowBox, 1);
		this.factoryAccess.setSize(cowBox, 190, 90);
		this.factoryAccess.setStatic(cowBox);
	}

	create() {
		const farmerSprite = this.farmerAssets.create(500, 800);
		this.farmerAction = new FarmerAction(this, farmerSprite);
		// console.log("this.farmerAction", farmerSprite);
		// this.farmerAction.setMoveDisable(false);
		// console.log("this.farmerAction", this.farmerAction.setMoveDisable);
		this.lands.createLands();

		this.createPool();
		this.createPlants();
		this.store.createWareHouse();
		// this.store.toggleStore(true);
		// console.log("this.storeAction", this.storeAction);

		// this.store.create();
	}

	update() {}
}
