import { ACCESS_RESOURCE } from "../../../constants/house";

export class factoryAssets {
	constructor(scene) {
		this.scene = scene;
	}

	preload() {
		this.scene.load.image(ACCESS_RESOURCE.WARE_HOUSE, "houses/farm_house.png"); // Adjust the pat
		this.scene.load.image(ACCESS_RESOURCE.POOL, "pool.png"); // Adjust the path
	}

	createHouse(x = 500, y = 600, frameName) {
		const obj = this.scene.matter.add.image(x, y, frameName);

		return obj;
	}

	setIndex(obj, index) {
		obj.setDepth(index);
	}

	setSize(obj, width, height) {
		obj.setDisplaySize(width, height);
	}

	setStatic(obj) {
		obj.setStatic(true);
	}

	setBoundBox(obj, width, height) {
		obj.setRectangle(width, height);
	}
}