import { Boot } from './scenes/Boot'
import { Game } from './scenes/Game'
import { GameOver } from './scenes/GameOver'
import { MainMenu } from './scenes/MainMenu'
import Phaser from 'phaser'
import { Preloader } from './scenes/Preloader'

const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 688,
  scene: [
    Boot,
    Preloader,
    MainMenu,
    Game,
    GameOver
  ]

}

const StartGame = (parent: string) => {
  return new Phaser.Game({ ...config, parent });
}

export default StartGame;
