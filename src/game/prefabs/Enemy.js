
import config from '@/game/config'
import MovableObject from '@/game/prefabs/MovableObject'
import Fires from '@/game/prefabs/Fires'

export default class Enemy extends MovableObject {
    static generateAttributes(){
        const x = config.width + 200
        const y = Phaser.Math.Between(100, config.height - 100)
        return {x, y, frame: `enemy${Phaser.Math.Between(1, 4)}`}
    }

    static generate(scene, fires) {
       const data = Enemy.generateAttributes()
        return new Enemy({
            scene,
            fires,
            x: data.x,
            y: data.y,
            texture: 'enemy',
            frame: data.frame,
            velocity: -(Phaser.Math.Between(20, 40)) * 10,
            bullet: {
                delay: 1000,
                texture: 'bullet',
                velocity: -700
            },
            origin: {x: 0, y: 0.5}
        })
    }

    init(data){
        super.init(data)
        this.fires = data.fires || new Fires(this.scene)
        this.setOrigin(data.origin.x, data.origin.y)
        if(data.fires){
            this.timer = this.scene.time.addEvent({
                delay: data.bullet.delay,
                loop: true,
                callback: this.fire,
                callbackScope: this
            })
        }
        this.bullet = data.bullet
    }

    fire(){
        this.fires.createFire(this)
    }

    isDead(){
        return  this.x < -this.width
    }

    reset(){
        const data = Enemy.generateAttributes()
        super.reset(data.x, data.y)
        this.setFrame(data.frame)
    }

}
