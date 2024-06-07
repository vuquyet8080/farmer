import { LAND_TYPE } from "../../../constants/lands";
import { LandsAssets } from "../../components/land/LandAssets";
const START_POSITION_LAND = {
	left: 180,
	top: 600,
};
const LAND_SIZE = 60;
export class FarmLands {
	constructor(scene) {
		this.scene = scene;
		this.landsAssets = new LandsAssets(scene);
	}

	preload() {
		console.log("preload1");
		this.landsAssets.preload(); // Delegate preload to LandsAssets
	}

	createLands(_landData) {
		const landData = generatePositionLand(3, 6);
		landData.map((land) => {
			this.landsAssets.createLand(
				land.x,
				land.y,
				LAND_SIZE,
				LAND_SIZE,
				LAND_TYPE.VACANT_LAND
			);
		});
	}
}

const generatePositionLand = (row, column) => {
	const position = [];

	for (let r = 0; r < row; r++) {
		for (let c = 0; c < column; c++) {
			position.push({
				x: START_POSITION_LAND.left + LAND_SIZE * c,
				y: START_POSITION_LAND.top + LAND_SIZE * r,
			});
		}
	}
	return position;
};
