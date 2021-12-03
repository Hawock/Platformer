import config from '@/game/config'
import MovableObject from '@/game/prefabs/MovableObject'

export default class Fire extends MovableObject {

    static generate(scene, source) {
        const data = {
            scene,
            x: source.x + source.x / 2,
            y: source.y,
            texture: 'fire',
            velocity: 700
        }
        return new Fire(data)
    }

    isDead(){
        return this.x > config.width + this.width || this.x < -this.width
    }
}
