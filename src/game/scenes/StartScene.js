import {Scene, Utils} from 'phaser'
import config from '@/game/config'

export default class StartScene extends Scene {
    constructor() {
        super({key: 'StartScene'});
    }

    create(data) {
        this.createBackground()
        if(data.score !== undefined){
            this.createStats(data)
        }
        this.createStartText()
        this.listenTap()
    }

    createStats(data){
        this.add.graphics()
            .fillStyle(0x000000, 0.5)
            .fillRoundedRect(config.width / 2 - 200, config.height / 2 - 200, 400, 400, 15)
        const textTitle = data.completed ? 'Уровень пройден!' : 'Game Over'
        const textScore = `Score: ${data.score}`
        const textStyle = {fill: '#FFFFFF', font: '40px'}
        this.add.text(config.width / 2, 250, textTitle, textStyle).setOrigin(0.5)
        this.add.text(config.width / 2, 350, textScore, textStyle).setOrigin(0.5)

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
