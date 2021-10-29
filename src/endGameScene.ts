import "phaser";
import { ScreenSize } from "./utils/screensize";

const ss = new ScreenSize();

export class EndGameScene extends Phaser.Scene {
    data: any;
    score: number;
    result: Phaser.GameObjects.Text;
    hint: Phaser.GameObjects.Text;
    constructor() {
        super({
            key: "EndGameScene"
        });
    }
    init(params: any): void {
        this.score = params.starsCaught;
    }
    create(): void {
        var resultText: string = 'Gameover!\nClick here to try again!';

        this.result = this.add.text(
            ss.getGameWidth()-(ss.getGameWidth()*90/100), 
            ss.getGameHeight()/3, 
            resultText,
            { 
                font: '30px Arial Bold', 
                color: '#FBFBAC',
                align: 'center'
            })
            .setInteractive({ cursor: 'pointer' })
            .on('pointerdown', function (/*pointer*/) {
                //Go to Welcome Scene
                this.scene.start("WelcomeScene", { data: this.data });
            }, this);
    }
};