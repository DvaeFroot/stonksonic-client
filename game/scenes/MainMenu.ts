import { EventBus } from '../EventBus'
import { Scene } from 'phaser';

export class MainMenu extends Scene {
  logoTween: any;
  logo: any;
  constructor() {
    super('MainMenu');
  }

  create() {
    this.add.image(512, 304, 'background')
    this.logo = this.add.image(512, 300, 'logo').setDepth(100);
    this.add.text(512, 460, 'Main Menu', {
      fontFamily: 'Arial Black', fontSize: 30, color: '#ffffff',
      stroke: '#000000', strokeThickness: 8,
      align: 'center'
    })
    console.log("Loaded Main Menu")
    EventBus.emit('current-scene-ready', this);
  }

  changeScene() {
    if (this.logoTween) {
      this.logoTween.stop();
      this.logoTween = null;
    }
    this.scene.start('Game');
    console.log("Starting Game")
  }

  moveLogo(vueCallback: any) {
    if (this.logoTween) {
      if (this.logoTween.isPlaying()) {
        this.logoTween.pause();
      } else {
        this.logoTween.play()
      }
    } else {
      this.logoTween = this.tweens.add({
        targets: this.logo,
        x: { value: 750, duration: 3000, ease: 'Back.easeInOut' },
        y: { value: 80, duration: 1500, ease: 'Size.easeOut' },
        yoyo: true,
        repeat: -1,
        onUpdate: () => {
          vueCallback({
            x: Math.floor(this.logo.x),
            y: Math.floor(this.logo.y),
          })
        }
      })
    }
  }
}
