import { GameObjects }  from 'phaser'
import config from '@/game/config'

export default class Enemy extends GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        this.init()
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
