import "phaser";

export class SampleGameScene extends Phaser.Scene {
  data: any;
  constructor() {
    super({
      key: "SampleGameScene"
    });
  }
  init(params): void {
    // TODO
  }
  preload(): void {
    // TODO
  }

  create(): void {
    // TODO
  }
  update(time): void {
    // TODO

    //Some Condition to End the Game
    this.scene.start("SampleEndGameScene", { data: this.data });
  }
};