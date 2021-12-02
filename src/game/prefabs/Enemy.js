import {GameObjects} from 'phaser'
import config from '@/game/config'

export default class Enemy extends GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        this.init()
    }

    static generate(scene) {
       const data = Enemy.generateAttributes()
        return new Enemy(scene, data.x, data.y, 'enemy', `enemy${data.id}`)
    }

    static generateAttributes(){
        const x = config.width + 200
        const y = Phaser.Math.Between(100, config.height - 100)
        const id = Phaser.Math.Between(1, 4)
        return {x, y, id}
    }

    init() {
        this.scene.add.existing(this)
        this.scene.physics.add.existing(this)
        this.body.enable = true
        this.velocity = -200
        this.scene.events.on('update', this.update, this)
    }

    update() {
        if(this.active && this.x < -this.width){
            this.setAlive(false)
            console.log('Enemy is out')
        }
    }

    setAlive(live){
        this.body.enable = live
        this.setVisible(live)
        this.setActive(live)
    }

    move() {
        this.body.setVelocityX(this.velocity)
    }

    reset() {
        const data = Enemy.generateAttributes()
        this.x = data.x
        this.y = data.y
        this.setFrame(`enemy${data.id}`)
        this.setAlive(true)
    }
}
