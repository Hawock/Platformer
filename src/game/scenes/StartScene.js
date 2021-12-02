import {Scene, Utils} from 'phaser'
import config from '@/game/config'

export default class StartScene extends Scene {
    constructor() {
        super({key: 'StartScene'});
    }

    create() {
        console.log('StartScene.create')
        this.createBackground()
        this.createStartText()
        this.listenTap()
    }

    createBackground(){
        this.add.sprite(0,0, 'background').setOrigin(0)
    }

    createStartText(){
        this.startText = this.add.text(config.width / 2, 500, `Tap to start`, {
            font: '42px Arial',
            fill: '#ffffff'
        }).setOrigin(0.5)
    }

    listenTap(){
        this.input.on('pointerdown', this.startGame, this);
    }

    startGame(){
        this.scene.start('GameScene')
    }

}
