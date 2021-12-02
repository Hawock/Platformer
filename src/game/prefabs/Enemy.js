import { GameObjects }  from 'phaser'
import config from '@/game/config'

export default class Enemy extends GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        this.init()
    }

    static generate(scene) {
        const x = config.width + 200
        const y = Phaser.Math.Between(100, config.height -100)
        return new Enemy(scene, x, y, 'enemy', `enemy${Phaser.Math.Between(1, 4)}`)
    }

    init(){
        this.scene.add.existing(this)
        this.scene.physics.add.existing(this)
        this.body.enable =  true
        this.velocity =  -200
    }

    move() {
        this.body.setVelocityX(this.velocity)
    }
}
