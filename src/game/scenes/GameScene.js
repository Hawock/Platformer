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
        console.log(this.cursors)
        this.createPlayer()
    }

    update(){
        this.player.move()
    }

    createBackground(){
        this.add.sprite(0,0, 'background').setOrigin(0)
    }

    createPlayer(){
        this.player = new Player(this)
    }
}
