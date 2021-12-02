import config from '@/game/config'
import Enemy from '@/game/prefabs/Enemy'

export default class Player extends Enemy {
    constructor(scene) {
        super(scene, 150, config.height / 2, 'dragon', 'dragon1')
        this.init()
    }

    init(){
        super.init()
        this.velocity = 500
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
