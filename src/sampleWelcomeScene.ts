import "phaser";
export class SampleWelcomeScene extends Phaser.Scene {
    title: Phaser.GameObjects.Text;
    hint: Phaser.GameObjects.Text;
    constructor() {
        super({
            key: "SampleWelcomeScene"
        });
    }
    create(): void {

        var titleText: string = "Game Title";
        this.title = this.add.text(150, 200, titleText,
            { font: '128px Arial Bold', color: '#FBFBAC' });

        var hintText: string = "Click anywhere to start";
        this.hint = this.add.text(300, 350, hintText,
            { font: '24px Arial Bold', color: 'Yellow' })
            .setInteractive({ cursor: 'pointer' });

        //Starting SampleGameScene
        this.input.on('pointerdown', function (/*pointer*/) {
            this.scene.start("SampleGameScene");
        }, this);
    }
};