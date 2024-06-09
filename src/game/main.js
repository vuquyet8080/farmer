import { Boot } from "./scenes/Boot";
import { Game } from "./scenes/Game";
import { GameOver } from "./scenes/GameOver";
import { Farm } from "./scenes/Farm/Farm";
import Phaser from "phaser";
import { Preloader } from "./scenes/Preloader";

const config = {
	type: Phaser.AUTO,
	width: window.innerWidth,
	height: window.innerHeight,
	parent: "game-container",
	backgroundColor: "#26355D",
	scene: [Boot, Preloader, Farm, Game, GameOver],
	physics: {
		default: "matter",
		matter: {
			gravity: { x: 0, y: 0, scale: 0 },
			debug: false, // Set to true for debugging physics
		},
		// fps: {
		// 	forceSetTimeOut: true,
		// 	panicMax: 0,
		// 	smoothStep: false,
		// 	target: 120,
		// },
		enableDebug: false,
		render: {
			clearBeforeRender: false, // Set clearBeforeRender to false for optimization
		},
	},
};

const StartGame = (parent) => {
	return new Phaser.Game({ ...config, parent });
};

export default StartGame;
