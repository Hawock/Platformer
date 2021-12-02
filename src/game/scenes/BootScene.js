import {Scene, Utils} from 'phaser'
import background from '@/game/assets/sprites/background.png'

export default class BootScene extends Scene {
    constructor() {
        super({key: 'BootScene'});
    }

    preload() {
        console.log('BootScene.preload')
        this.load.image('background', background)
    }

    create() {
        console.log('BootScene.create')
        this.scene.start('PreloadScene')
    }

}
