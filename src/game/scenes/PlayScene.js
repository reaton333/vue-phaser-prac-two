import { Scene } from 'phaser'

export default class PlayScene extends Scene {
  constructor () {
    super({ key: 'PlayScene' })

    // var bomb;
    var car;
    var speed;
    //  Input Events
    var cursors;
  }

  create () {
    this.add.image(400, 300, 'sky')
    this.cursors = this.input.keyboard.createCursorKeys();

    // const bomb = this.physics.add.image(400, 200, 'bomb')
    // bomb.setCollideWorldBounds(true)
    // bomb.body.onWorldBounds = true // enable worldbounds collision event
    // bomb.setBounce(1)
    // bomb.setVelocity(200, 20)

    // this.sound.add('thud')
    // this.physics.world.on('worldbounds', () => {
    //   this.sound.play('thud', { volume: 0.75 })
    // })

    // this.bomb = this.add.image(64, 376, 'bomb').setOrigin(0);
    this.car = this.add.image(64, 376, 'car').setOrigin(0);
    this.speed = Phaser.Math.GetSpeed(1000, 3);
    this.add.text(64, 350, '600px / 3 secs', { fill: '#000' });
  }

  update (time, delta) {

    if (this.cursors.space.isDown)
    {
      this.car.x += this.speed * delta;

      if (this.car.x > 864)
      {
          this.car.x = 64;
      }
    }
  }
}
