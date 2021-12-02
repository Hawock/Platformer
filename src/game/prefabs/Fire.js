import config from '@/game/config'
import Enemy from '@/game/prefabs/Enemy'

export default class Fire extends Phaser.GameObjects.Sprite {
    constructor(data) {
        super(data.scene, data.x, data.y, data.texture)
        this.init(data)
    }

    static generate(scene, source) {
        const data = {
            scene,
            x: source.x + source.x / 2,
            y: source.y,
            texture: 'fire',
            velocity: 600
        }
        return new Fire(data)
    }

    init(data) {
        this.scene.add.existing(this)
        this.velocity = data.velocity
    }

    move() {
        this.body.setVelocityX(this.velocity)
    }

    reset() {

    }

}
