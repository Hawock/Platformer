import { GameObjects }  from 'phaser'
import config from '@/game/config'

export default class Player extends GameObjects.Sprite {
    constructor(scene) {
        super(scene, 0, 0, 'dragon', 'dragon1')
        this.init()
    }

    init(){
        this.scene.add.existing(this)
        this.scene.physics.add.existing(this)
        this.body.enable =  true
        this.velocity = 500
        this.setPosition(150,config.height / 2)
    }

    move() {
        this.body.setVelocity(0)
        if(this.scene.cursors.left.isDown){
            this.body.setVelocityX(-this.velocity)
        }else if(this.scene.cursors.right.isDown){
            this.body.setVelocityX(this.velocity)
        }
        if(this.scene.cursors.up.isDown){
            this.body.setVelocityY(-this.velocity)
        }else if(this.scene.cursors.down.isDown){
            this.body.setVelocityY(this.velocity)
        }
    }

}
