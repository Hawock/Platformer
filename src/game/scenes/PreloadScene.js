import {Scene, Utils} from 'phaser'
import background from '@/game/assets/sprites/background.png'
import dragonAtlas from '@/game/assets/sprites/dragon.png'
import dragonAtlasJSON from '@/game/assets/sprites/dragon.json'

export default class PreloadScene extends Scene {
    constructor() {
        super({key: 'PreloadScene'});
    }

    preload() {
        this.createBackground()
        this.load.atlas('dragon', dragonAtlas, dragonAtlasJSON)
        console.log('PreloadScene.preload')
    }

    create() {
        console.log('PreloadScene.create')
        this.scene.start('StartScene')
    }

    createBackground(){
        this.add.sprite(0,0, 'background').setOrigin(0)
    }

}
