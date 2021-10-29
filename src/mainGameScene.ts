import "phaser";

export class MainGameScene extends Phaser.Scene {
  data: any;

  tiles_green: Phaser.Physics.Arcade.StaticGroup;

  constructor() {
    super({
      key: "MainGameScene"
    });
  }
  init(params): void {
    // TODO
  }
  preload(): void {
    // TODO
    this.load.setBaseURL("./src/assets/images");
    //Platforms
    this.loadPlatformsAssets();
    //Characters
    this.loadDummyCharacterAssets();
  }

  create(): void {
    // TODO
    //Place Platform
    this.placePlatformsAssets();
    //Place character
    this.placeDummyCharacterAssets();
    this.function();
  }
  update(time): void {
    // TODO

    //Some Condition to End the Game
    // this.scene.start("EndGameScene", { data: this.data });
  }

  private loadPlatformsAssets(): void{
    //Platforms
    this.load.image("steel", "/platforms/steel.png");
    this.load.image("tiles_brown", "/platforms/tiles_brown.png");
    this.load.image("tiles_green", "/platforms/tiles_green.png");
  }

  private loadDummyCharacterAssets(): void{
    let characterStatesPath = "/characters/dummy/";
    // Character Spritesheet
    this.load.spritesheet(
      'dummy', 
      characterStatesPath + 'dummyCharacterSpriteSheet.png', 
      { 
        frameWidth: 100, 
        frameHeight: 100, 
        endFrame: 1000 
      });
    // Character States
    
    // this.load.image("jumping", characterStatesPath + "jumping.png");
    // this.load.image("stand", characterStatesPath + "stand.png");
    // // Character Walk Cycle
    // let characterWalkCyclesPath = "/characters/dummy/walking/";
    // this.load.image(characterWalkCyclesPath + "walk0", "walk0.png");
    // this.load.image(characterWalkCyclesPath + "walk1", "walk1.png");
    // this.load.image(characterWalkCyclesPath + "walk2", "walk2.png");
    // this.load.image(characterWalkCyclesPath + "walk3", "walk3.png");
    // this.load.image(characterWalkCyclesPath + "walk4", "walk4.png");
    // this.load.image(characterWalkCyclesPath + "walk5", "walk5.png");
    // this.load.image(characterWalkCyclesPath + "walk6", "walk6.png");
    // this.load.image(characterWalkCyclesPath + "walk7", "walk7.png");
  }

  placePlatformsAssets(): void {
    //Place Platforms
    this.tiles_green = this.physics.add.staticGroup({
      key: 'tiles_green',
      frameQuantity: 4
    });
    Phaser.Actions.PlaceOnLine(this.tiles_green.getChildren(),
      new Phaser.Geom.Line(20, 580, 820, 580));
    this.tiles_green.refresh();
  }

  placeDummyCharacterAssets(): void {
    //Place Dummy Character
    // this.tiles_green = this.physics.add.staticGroup({
    //   key: 'dummy',
    //   frameQuantity: 4
    // });
    // Phaser.Actions.PlaceOnLine(this.tiles_green.getChildren(),
    //   new Phaser.Geom.Line(20, 580, 820, 580));
    // this.tiles_green.refresh();
  }

  function(): void{
    var player = this.physics.add.sprite(100, 450, 'dummy');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dummy', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dummy', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dummy', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });
  }
};