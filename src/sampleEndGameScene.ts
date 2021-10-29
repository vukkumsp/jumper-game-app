import "phaser";
export class SampleEndGameScene extends Phaser.Scene {
    score: number;
    result: Phaser.GameObjects.Text;
    hint: Phaser.GameObjects.Text;
    constructor() {
        super({
            key: "SampleEndGameScene"
        });
    }
    init(params: any): void {
        this.score = params.starsCaught;
    }
    create(): void {
        var resultText: string = 'Your score is ' + this.score + '!';

        this.result = this.add.text(200, 250, resultText,
            { font: '48px Arial Bold', color: '#FBFBAC' });
        var hintText: string = "Click to restart";

        this.hint = this.add.text(300, 350, hintText,
            { font: '24px Arial Bold', color: '#FBFBAC' });

        //Going back to SampleWelcomeScene
        this.input.on('pointerdown', function (/*pointer*/) {
            this.scene.start("SampleWelcomeScene");
        }, this);
    }
};