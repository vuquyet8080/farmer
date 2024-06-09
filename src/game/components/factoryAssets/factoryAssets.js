import { ACCESS_RESOURCE } from "../../../constants/house";

export class factoryAssets {
	constructor(scene) {
		this.scene = scene;
	}

	preload() {
		this.scene.load.image(ACCESS_RESOURCE.WARE_HOUSE, "houses/farm_house.png"); // Adjust the pat
		this.scene.load.image(ACCESS_RESOURCE.POOL, "pool.png"); // Adjust the path
		//plants
		this.scene.load.image(ACCESS_RESOURCE.COCONUT_1, "plant/coconut_1.png"); // Adjust the path
		this.scene.load.image(ACCESS_RESOURCE.COCONUT_2, "plant/coconut_2.png"); // Adjust the path
		this.scene.load.image(ACCESS_RESOURCE.TX, "plant/tx_plant.png"); // Adjust the path
		this.scene.load.image(ACCESS_RESOURCE.NEWS, "news.png");
		this.scene.load.image(ACCESS_RESOURCE.COW_BOX, "cow_box.png");
		this.scene.load.image(ACCESS_RESOURCE.STORE_BG, "bg.png");
		this.scene.load.image(ACCESS_RESOURCE.CLOSE_BUTTON, "icons/close.png");
	}

	createObj(x = 500, y = 600, frameName) {
		const obj = this.scene.matter.add.image(x, y, frameName);

		return obj;
	}
	createIcon(x, y, frameName) {
		return this.scene.add.image(x, y, frameName);
	}

	createIconPlant(x, y, frameName) {
		return this.scene.add.image(x, y, "plantAtlas", frameName);
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

	createTrapezium(x = 500, y = 600, frameName, point) {
		// Create a Matter body with the trapezium shape
		const trapezium = this.scene.matter.add.image(x, y, frameName, null, {
			shape: {
				type: "fromVertices",
				verts: point,
			},
			isStatic: true, // Change to false if you want the object to be dynamic
		});

		return trapezium;
	}
	setVisible(obj, status) {
		obj.setVisible(status);
	}
}
