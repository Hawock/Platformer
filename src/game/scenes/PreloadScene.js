import {Scene, Utils} from 'phaser'
import background from '@/game/assets/sprites/background.png'
import dragonAtlas from '@/game/assets/sprites/dragon.png'
import dragonAtlasJSON from '@/game/assets/sprites/dragon.json'
import enemyAtlas from '@/game/assets/sprites/enemy.png'
import enemyAtlasJSON from '@/game/assets/sprites/enemy.json'
import boomAtlas from '@/game/assets/sprites/boom.png'
import boomAtlasJSON from '@/game/assets/sprites/boom.json'
import LoadingBar from '@/game/classes/LoadingBar'

export default class PreloadScene extends Scene {
    constructor() {
        super({key: 'PreloadScene'});
    }

    preload(){
        const loadingBar = new LoadingBar(this)
        this.preloadAssets()
    }

    preloadAssets() {
        this.load.image('fire', require('@/game/assets/sprites/fire.png'))
        this.load.image('bullet', require('@/game/assets/sprites/bullet.png'))
        this.load.atlas('dragon', dragonAtlas, dragonAtlasJSON)
        this.load.atlas('enemy', enemyAtlas, enemyAtlasJSON)
        this.load.atlas('boom', boomAtlas, boomAtlasJSON)
        this.load.audio('theme', require('@/game/assets/sound/theme.mp3'))
        this.load.audio('boom', require('@/game/assets/sound/boom.mp3'))
    }

    create() {
       this.scene.start('StartScene')
    }

    createBackground(){
        this.add.sprite(0,0, 'background').setOrigin(0)
    }

}
