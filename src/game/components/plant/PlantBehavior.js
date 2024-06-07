import { GameObjects } from "phaser";

export class PlantBehavior extends GameObjects.Sprite {
	constructor(scene, plantSprite) {
		super(scene, plantSprite.x, plantSprite.y, plantSprite.texture.key);
		this.scene = scene;
		this.currentTimer = null;
		this.plantSprite = plantSprite;
	}

	startCountdown(growTime) {
		if (this.currentTimer) {
			this.currentTimer.destroy();
		}
		let remainingTime = growTime; // Time in seconds
		const timerText = this.scene.add.text(
			this.plantSprite.x,
			this.plantSprite.y - 20,
			this.formatTime(remainingTime),
			{
				font: "12px",
				fill: "#ffffff",
				backgroundColor: "#000000",
				padding: {
					left: 5,
					right: 5,
					top: 2,
					bottom: 2,
				},
			}
		);

		timerText.setOrigin(0.5, 1); // Center the text horizontally and align the bottom of the text with the y position
		timerText.setDepth(1);

		this.currentTimer = this.scene.time.addEvent({
			delay: 1000,
			callback: () => {
				remainingTime--;
				timerText.setText(this.formatTime(remainingTime));

				if (remainingTime <= 0) {
					this.currentTimer.remove(false);
					timerText.setText("⚡");
				}
			},
			loop: true,
		});
	}

	formatTime(seconds) {
		const minutes = Math.floor(seconds / 60);
		const secondsRemaining = seconds % 60;
		return `${minutes}:${secondsRemaining.toString().padStart(2, "0")}`;
	}
}
