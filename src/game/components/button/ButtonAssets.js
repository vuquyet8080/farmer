import { factoryAssets } from "../factoryAssets/factoryAssets";

export class ButtonAssets {
	constructor(scene) {
		this.scene = scene;
		this.factoryAccess = new factoryAssets(scene);
	}
	create(x, y, frameName) {
		const button = this.factoryAccess.createIcon(x, y, frameName);
		this.factoryAccess.setIndex(button, 1001);
		return button;
	}
	setSize(button, width, height) {
		this.factoryAccess.setSize(button, width, height);
	}
	show(button, status) {
		this.factoryAccess.setVisible(button, status);
	}
	setAction(button, onclick) {
		button.setInteractive();
		button.on("pointerdown", onclick);

		button.on("pointerover", () => {
			button.setAlpha(0.8); // Set opacity to 70% when hovering
		});
		button.on("pointerout", () => {
			button.setAlpha(1); // Restore opacity when the pointer leaves
		});
	}
}
