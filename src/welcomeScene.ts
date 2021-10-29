import "phaser";
import { ScreenSize } from "./utils/screensize";

const ss = new ScreenSize();

export class WelcomeScene extends Phaser.Scene {
    data: any;
    title: Phaser.GameObjects.Text;
    hint: Phaser.GameObjects.Text;
    constructor() {
        super({
            key: "WelcomeScene"
        });
    }
    create(): void {
        var titleText: string = "Jumper";
        this.title = this.add.text(
            ss.getGameWidth()-(ss.getGameWidth()*90/100), 
            ss.getGameHeight()/3, 
            titleText,
            { 
                font: '80px Arial Bold', 
                color: 'white' 
            });

        var hintText: string = "Click anywhere to start";
        this.hint = this.add.text(
            ss.getGameWidth()-(ss.getGameWidth()*90/100), 
            ss.getGameHeight()/2,
            hintText,
            { 
                font: '24px Arial Bold', 
                color: 'Yellow' 
            })
            .setInteractive({ cursor: 'pointer' })
            .on('pointerdown', function (/*pointer*/) {
                //Go to Next Scene
                this.scene.start("MainGameScene", { data: this.data });
            }, this);
    }
};