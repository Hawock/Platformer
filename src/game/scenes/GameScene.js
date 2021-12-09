import {Scene, Utils} from 'phaser'
import config from '@/game/config'
import Player from '@/game/prefabs/Player'
import Enemies from '@/game/prefabs/Enemies'

export default class GameScene extends Scene {
    constructor() {
        super({key: 'GameScene'});
    }

    init(){
        this.cursors = this.input.keyboard.createCursorKeys()
    }

    create() {
        this.createBackground()
        this.player = new Player(this)
        this.enemies = new Enemies(this)
        this.createCompleteEvents()
        this.addOverlap()
    }

    addOverlap(){
        this.physics.add.overlap(this.player.fires, this.enemies, this.onOverlap, undefined, this)
        this.physics.add.overlap(this.enemies.fires, this.player, this.onOverlap, undefined, this)
        this.physics.add.overlap(this.player, this.enemies, this.onOverlap, undefined, this)
    }

    onOverlap(source, target){
        source.setAlive(false)
        target.setAlive(false)
    }

    createCompleteEvents(){
        this.player.once('died', this.onComplete, this)
        this.events.once('enemies-killed', this.onComplete, this)
    }

    onComplete(){
        this.scene.start('StartScene')
    }

    update(){
        this.player.move()
        this.bg.tilePositionX += 0.5
    }

    createBackground(){
        this.bg = this.add.tileSprite(0,0, config.width, config.height, 'background').setOrigin(0)
    }

}
