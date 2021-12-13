import config from '@/game/config'
import Boom from '@/game/prefabs/Boom'

export default class MovableObject extends Phaser.GameObjects.Sprite {
    constructor(data) {
        super(data.scene, data.x, data.y, data.texture, data.frame)
        this.init(data)
    }

    init(data) {
        this.scene.add.existing(this)
        this.scene.physics.add.existing(this)
        this.body.enable = true
        this.velocity = data.velocity
        this.scene.events.on('update', this.update, this)
    }

    reset(x, y) {
        this.x = x
        this.y = y
        this.setAlive(true)
    }

    isDead() {
        return false
    }

    update() {
        if (this.active && this.isDead()) {
            this.setAlive(false)
        }
    }

    setAlive(live) {
        this.body.enable = live
        this.setVisible(live)
        this.setActive(live)
        if (this.timer) {
            this.timer.paused = !live
        }
        if(!status){
            this.emit('died')

        }
    }

    move() {
        this.body.setVelocityX(this.velocity)
    }
}
/*
constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame)
    this.init()
}*/

/*
update() {
    if(this.active &&){
        this.setAlive(false)
    }
}
*/
