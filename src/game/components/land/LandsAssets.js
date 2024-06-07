import { LAND_TYPE } from "../../../constants/lands";
import { LIST_PLANT_1 } from "../../../constants/plant";
import { PlantAssets } from "../plant/PlantAssets";
import { BUTTON_SIZE, horizontalSpace } from "./LandAssets";

export class LandsAssets {
	constructor(scene) {
		this.scene = scene;
		this.landSprite = null;
		this.currentDetailView = null; // Track the current detail view
		this.plantAccess = new PlantAssets(scene);
		this.currentPositionSelect = null;
		this.currentTimer = null;
	}

	preload() {
		this.scene.load.image(LAND_TYPE.VACANT_LAND, "lands/vacant_land.png");
		this.plantAccess.preload();
	}

	createLand(x, y, width, height, type) {
		this.landSprite = this.scene.add.image(x, y, type);
		this.landSprite.displayWidth = width;
		this.landSprite.displayHeight = height;
		this.landSprite.setDepth(1);
		this.addInteractionToLand(this.landSprite);

		return this.landSprite;
	}

	addInteractionToLand(landSprite) {
		landSprite.setInteractive();
		landSprite.on("pointerdown", () => {
			landSprite.setTint(15853009);
			this.showDetailView(landSprite.x, landSprite.y, landSprite.texture.key);
		});

		landSprite.on("pointerout", () => {
			landSprite.clearTint(); // Remove the tint when the pointer is no longer hovering
		});
	}

	buttonAction({ icon = "star", onclick, x, y, scale = 0.5, count = 10 }) {
		const container = this.scene.add.container(x, y);

		// Create button
		const button = this.plantAccess.createIcon(0, 0, icon).setInteractive();
		button.setDisplaySize(BUTTON_SIZE, BUTTON_SIZE);
		button.setScale(scale);

		button.on("pointerdown", onclick);
		button.setOrigin(0.4, 0.4); // Center the text

		button.on("pointerover", () => {
			button.setAlpha(0.8); // Set opacity to 70% when hovering
		});
		button.on("pointerout", () => {
			button.setAlpha(1); // Restore opacity when the pointer leaves
		});

		// Create label
		const label = this.scene.add.text(0, 0, count, {
			font: "12px",
			fill: "#ffffff",
		});

		// Position the label
		label.setOrigin(1, 2.7); // Center the text
		label.setPosition(BUTTON_SIZE / 2, BUTTON_SIZE / 2); // Adjust position as needed

		container.add(button);
		container.add(label);

		return container;
	}

	generateListButton() {
		const buttons = [];
		const middle = LIST_PLANT_1.length / 2;
		LIST_PLANT_1.map((plan, index) => {
			const x = (index - middle) * (BUTTON_SIZE + horizontalSpace);
			const plantSelect = plan.state[0].state;
			buttons.push(
				this.buttonAction({
					icon: plantSelect,
					x,
					y: 0,
					onclick: () => {
						const { currentPositionSelect } = this;
						this.plantAccess.createPlant(
							currentPositionSelect?.x,
							currentPositionSelect?.y - 5,
							50,
							50,
							plantSelect
						);
						this.hideDetailView();
					},
					scale: 0.7,
				})
			);
		});
		return buttons;
	}

	showDetailView(x, y) {
		if (this.currentDetailView) {
			this.currentDetailView.destroy();
		}
		this.currentPositionSelect = {
			x,
			y,
		};

		this.currentDetailView = this.scene.add.container(x, y - 10);

		const bgWidth =
			LIST_PLANT_1.length * BUTTON_SIZE +
			horizontalSpace * LIST_PLANT_1.length +
			15;

		const bgHeight = 50;
		const bg = this.scene.add.rectangle(-15, 0, bgWidth, bgHeight, 0, 0.7);
		bg.setOrigin(0.5, 0.5);

		const listButton = this.generateListButton();

		this.currentDetailView.add([bg, ...listButton]);
		this.currentDetailView.setDepth(2);
	}
	hideDetailView() {
		if (this.currentDetailView) {
			this.currentDetailView.destroy();
			this.currentDetailView = null;
			this.currentPositionSelect = null;
		}
	}
}
