import { Scene } from 'phaser'
import sky from '@/game/assets/sky.png'
// import bomb from '@/game/assets/bomb.png'
import car from '@/game/assets/randomCar.png'
// import thudMp3 from '@/game/assets/thud.mp3'
// import thudOgg from '@/game/assets/thud.ogg'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('sky', sky)
    // this.load.image('bomb', bomb)
    this.load.image('car', car)
    // this.load.audio('thud', [thudMp3, thudOgg])
  }

  create () {
    this.scene.start('PlayScene')
  }
}
