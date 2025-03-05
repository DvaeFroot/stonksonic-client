import { Scene } from 'phaser'

export class Preloader extends Scene {
  constructor() {
    super('Preloader')
  }

  init() {
    this.add.image(512, 304, 'background');
    this.add.rectangle(512, 304, 468, 32).setStrokeStyle(1, 0xffffff);
    const bar = this.add.rectangle(512 - 230, 304, 4, 28, 0xffffff);
    this.load.on('progress', (progress: any) => {
      bar.width = 4 + (460 * progress)
    })
    console.log("Initialized Preloader")
  }

  preload() {
    this.load.setPath('assets');
    this.load.image('logo', 'logo.png')
    this.load.image('star', 'star.png')
    console.log("Loaded Preloader")
  }

  create() {
    console.log("Setting scene to main menu")
    this.scene.start('MainMenu')
  }
}
