export class StoreAction {
	constructor(scene) {
		this.scene = scene;
		this.playerCurrency = 500; // Example player currency
		this.playerInventory = []; // Example player inventory
	}

	preload() {
		this.scene.load.image("storeBackground", "bg.png");
		this.scene.load.image("closeButton", "bg.png");
		this.scene.load.image("itemIcon", "bg.png");
	}

	create() {
		// Example items available for purchase
		this.items = [
			{ name: "Item 1", icon: "itemIcon", price: 100 },
			{ name: "Item 2", icon: "itemIcon", price: 200 },
		];

		// Create the modal background
		this.storeModal = this.scene.add
			.image(200, 200, "storeBackground")
			.setVisible(false);
		this.storeModal.setDisplaySize(200, 200);

		// Create close button
		// this.closeButton = this.scene.add
		// 	.image(750, 150, "closeButton")
		// 	.setInteractive()
		// 	.setVisible(false);
		// this.closeButton.on("pointerdown", () => this.toggleStore(false));

		// Create item icons and purchase buttons
		this.itemIcons = [];
		this.purchaseButtons = [];

		this.items.forEach((item, index) => {
			const itemIcon = this.scene.add
				.image(400, 200 + index * 100, item.icon)
				.setVisible(false);
			const purchaseButton = this.scene.add
				.text(450, 200 + index * 100, `Buy for ${item.price}`, {
					fontSize: "20px",
					fill: "#fff",
				})
				.setInteractive()
				.setVisible(false);

			purchaseButton.on("pointerdown", () => this.purchaseItem(item));

			this.itemIcons.push(itemIcon);
			this.purchaseButtons.push(purchaseButton);
		});
	}

	toggleStore(visible) {
		this.storeModal.setVisible(visible);
		this.closeButton.setVisible(visible);
		this.itemIcons.forEach((icon) => icon.setVisible(visible));
		this.purchaseButtons.forEach((button) => button.setVisible(visible));
	}

	purchaseItem(item) {
		if (this.playerCurrency >= item.price) {
			this.playerCurrency -= item.price;
			this.playerInventory.push(item);
			console.log(`Purchased ${item.name}`);
			// Update UI, inventory, etc.
		} else {
			console.log("Not enough currency to purchase this item");
		}
	}
}
