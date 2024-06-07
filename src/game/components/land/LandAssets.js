import { LAND_TYPE } from "../../../constants/lands";

export class LandsAssets {
	constructor(scene) {
		this.scene = scene;
		this.landSprite = null;
		this.currentDetailView = null; // Track the current detail view
	}

	preload() {
		this.scene.load.image(LAND_TYPE.VACANT_LAND, "lands/vacant_land.png");
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
			landSprite.setTint(0xf1e5d1);
			this.showDetailView(landSprite.x, landSprite.y, landSprite.texture.key);
		});

		landSprite.on("pointerout", () => {
			landSprite.clearTint(); // Remove the tint when the pointer is no longer hovering
		});
	}

	buttonAction({ icon = "star", onclick, x, y }) {
		const button = this.scene.add.image(x, y, icon).setInteractive();
		const buttonWidth = 24; // Desired button width
		const buttonHeight = 24; // Desired button height
		button.setDisplaySize(buttonWidth, buttonHeight);
		button.on("pointerdown", onclick);

		button.on("pointerover", () => {
			button.setAlpha(0.8); // Set opacity to 70% when hovering
		});
		button.on("pointerout", () => {
			button.setAlpha(1); // Restore opacity when the pointer leaves
		});
		return button;
	}

	generateListButton() {
		const button1 = this.buttonAction({
			icon: "star",
			x: -40,
			y: 0,
			onclick: () => {
				console.log("Button 1 clicked");
				this.hideDetailView();
			},
		});
		const button2 = this.buttonAction({
			icon: "star",
			x: 0,
			y: 0,
			onclick: () => {
				console.log("Button 1 clicked");
				this.hideDetailView();
			},
		});
		const button3 = this.buttonAction({
			icon: "star",
			x: 40,
			y: 0,
			onclick: () => {
				console.log("Button 1 clicked");
				this.hideDetailView();
			},
		});

		return [button1, button2, button3];
	}

	showDetailView(x, y) {
		if (this.currentDetailView) {
			this.currentDetailView.destroy();
		}

		this.currentDetailView = this.scene.add.container(x, y - 10);

		const bgWidth = 120;
		const bgHeight = 40;
		const bg = this.scene.add.rectangle(0, 0, bgWidth, bgHeight, 0x000000, 0.7);
		bg.setOrigin(0.5, 0.5);

		const listButton = this.generateListButton();

		this.currentDetailView.add([bg, ...listButton]);
		this.currentDetailView.setDepth(2);
	}
	hideDetailView() {
		if (this.currentDetailView) {
			this.currentDetailView.destroy();
			this.currentDetailView = null;
		}
	}
}
