import {Scene, Utils} from 'phaser'
import config from '@/game/config'
import Player from '@/game/prefabs/Player'

export default class GameScene extends Scene {
    constructor() {
        super({key: 'GameScene'});
    }

    create() {
        console.log('GameScene.created')
        this.createBackground()
        this.cursors = this.input.keyboard.createCursorKeys()
        this.createPlayer()
    }

    update(){
        this.player.move()
        this.bg.tilePositionX += 0.5
    }

    createBackground(){
        this.bg = this.add.tileSprite(0,0, config.width, config.height, 'background').setOrigin(0)
    }

    createPlayer(){
        this.player = new Player(this)
    }
}
