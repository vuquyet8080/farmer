import { ACCESS_RESOURCE } from "../../../constants/house";
import { ButtonAssets } from "../button/ButtonAssets";
import { factoryAssets } from "../factoryAssets/factoryAssets";

export class StoreAssets {
	constructor(scene) {
		this.scene = scene;
		this.factoryAccess = new factoryAssets(scene);
		this.playerCurrency = 500; // Example player currency
		this.playerInventory = []; // Example player inventory
		this.buttonAssets = new ButtonAssets(scene);
		this.items = [
			{ name: "Item 1", icon: "itemIcon", price: 100 },
			{ name: "Item 2", icon: "itemIcon", price: 200 },
		];
		// element
		this.wareHouse = null;
		this.storeModal = null;
		this.closeButton = null;

		// this.storeElements = {
		// 	storeModal: null,
		// 	closeButton: null,
		// 	itemIcons: null,
		// 	purchaseButtons: null,
		// };
	}

	createWareHouse() {
		this.wareHouse = this.factoryAccess.createObj(
			1160,
			580,
			ACCESS_RESOURCE.WARE_HOUSE
		);
		this.factoryAccess.setIndex(this.wareHouse, 100);
		this.factoryAccess.setSize(this.wareHouse, 200, 200);
		this.factoryAccess.setBoundBox(this.wareHouse, 180, 180);

		this.factoryAccess.setStatic(this.wareHouse);

		// create modal store
		this.createModalStore();
		this.addInteractionToStore(this.wareHouse);
	}

	addInteractionToStore(wareHouse) {
		wareHouse.setInteractive();
		wareHouse.on("pointerdown", () => {
			wareHouse.setTint(15853009);
			this.toggleStore(true);
		});

		wareHouse.on("pointerout", () => {
			wareHouse.clearTint(); // Remove the tint when the pointer is no longer hovering
		});
	}

	createCloseButton() {
		this.closeButton = this.buttonAssets.create(
			1335,
			475,
			ACCESS_RESOURCE.CLOSE_BUTTON
		);
		this.buttonAssets.setSize(this.closeButton, 30, 30);
		this.buttonAssets.show(this.closeButton, false);
		this.buttonAssets.setAction(this.closeButton, () => {
			console.log("11");
			this.toggleStore(false);
		});
	}
	createListItem() {
		this.items.forEach((item, index) => {
			const itemIcon = this.factoryAccess
				.createObj(1100, 500 + index * 100, item.icon)
				.setVisible(false);
			this.factoryAccess.setSize(itemIcon, 50, 50);

			const purchaseButton = this.scene.add
				.text(1250, 500 + index * 100, `Buy for ${item.price}`, {
					fontSize: "24px",
					fill: "#fff",
				})
				.setInteractive()
				.setVisible(false);

			purchaseButton.on("pointerdown", () => {
				this.purchaseItem(item);
			});

			this.itemIcons.push(itemIcon);
			this.purchaseButtons.push(purchaseButton);
		});
	}

	createModalStore() {
		this.storeModal = this.factoryAccess
			.createObj(1160, 650, ACCESS_RESOURCE.STORE_BG)
			.setVisible(false);

		this.factoryAccess.setSize(this.storeModal, 400, 400);
		this.factoryAccess.setIndex(this.storeModal, 101);
		this.factoryAccess.setBoundBox(this.storeModal, 1, 1);
		this.factoryAccess.setStatic(this.storeModal);

		const newLocal = this;
		newLocal.itemIcons = [];
		this.purchaseButtons = [];

		this.createCloseButton();
	}
	toggleStore(visible) {
		this.scene.time.delayedCall(250, () => {
			this.storeModal.setVisible(visible);
			this.closeButton.setVisible(visible);
		});
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
