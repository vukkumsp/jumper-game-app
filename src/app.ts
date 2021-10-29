import "phaser";
import { EndGameScene } from "./endGameScene";
import { MainGameScene } from "./mainGameScene";
import { WelcomeScene } from "./welcomeScene";

import { ScreenSize } from "./utils/screensize";

const ss = new ScreenSize();

//Use Phaser.Types.Core.GameConfig inplace of GameConfig
const config: Phaser.Types.Core.GameConfig = {
    title: "Game Title", //You Game Title
    width: ss.getGameWidth(),
    height: ss.getGameHeight(),
    parent: "game",
    //All Scenes are mentioned here
    scene: [
        WelcomeScene, 
        MainGameScene,
        EndGameScene
    ],
    physics: {
        default: "arcade", //Physics Type
        arcade: {
            debug: false
        }
    },  //this will be the id of html element from index.html
    backgroundColor: "#ff8b33"
};

//Extend Phaser.Game
export class CustomGame extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }
}
window.onload = () => {
    //Load game on Startup of Window
    var game = new CustomGame(config);
};