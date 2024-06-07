import { Boot } from "./scenes/Boot";
import { Game } from "./scenes/Game";
import { GameOver } from "./scenes/GameOver";
import { Farm } from "./scenes/Farm";
import Phaser from "phaser";
import { Preloader } from "./scenes/Preloader";

// Find out more information about the Game Config at:
// https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    // width: 1280,
    // height: 760,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: "game-container",
    backgroundColor: "#26355D",
    scene: [Boot, Preloader, Farm, Game, GameOver],
};

const StartGame = (parent) => {
    return new Phaser.Game({ ...config, parent });
};

export default StartGame;
