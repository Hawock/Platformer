import config from '@/game/config'
import Enemy from '@/game/prefabs/Enemy'
import Fires from '@/game/prefabs/Fires'

export default class Player extends Enemy {
    constructor(scene) {
        super({
            scene,
            x:150,
            y:config.height / 2,
            texture:'dragon',
            frame:'dragon1',
            velocity: 500,
            bullet: {
                delay: 500,
                texture: 'fire',
                velocity: 750
            },
            origin: {x: 1, y: 0.5}
        })
        const flyFrames = this.scene.anims.generateFrameNames('dragon', {
            prefix: 'dragon',
            start: 1,
            end: 6
        })
        this.scene.anims.create({
            key: 'fly',
            frames: flyFrames,
            frameRate: 8,
            repeat: -1
        })
        this.play('fly')
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

        if(Phaser.Input.Keyboard.JustDown(this.scene.cursors.fire)){
            this.fire()
        }
    }

}
