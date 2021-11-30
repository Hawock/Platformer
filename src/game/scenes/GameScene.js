import {Scene, Utils} from 'phaser'
import background from '@/game/assets/sprites/background.png'

export default class GameScene extends Scene {
    constructor() {
        super({key: 'GameScene'});
    }

    preload() {
        this.load.image('background', background)
    }

    create() {
        this.createBackground()
    }

    createBackground(){
        this.add.sprite(0,0, 'background').setOrigin(0,0)
    }
}
