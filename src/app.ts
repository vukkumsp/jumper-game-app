import "phaser";
import { SampleEndGameScene } from "./sampleEndGameScene";
import { SampleGameScene } from "./sampleGameScene";
import { SampleWelcomeScene } from "./sampleWelcomeScene";

//Use Phaser.Types.Core.GameConfig inplace of GameConfig
const config: Phaser.Types.Core.GameConfig = {
    title: "Game Title", //You Game Title
    width: 800,
    height: 600,
    parent: "game",
    //All Scenes are mentioned here
    scene: [
        SampleWelcomeScene, 
        SampleGameScene,
        SampleEndGameScene
    ],
    physics: {
        default: "arcade", //Physics Type
        arcade: {
            debug: false
        }
    },  //this will be the id of html element from index.html
    backgroundColor: "#18216D"
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