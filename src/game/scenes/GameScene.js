import {Scene, Utils} from 'phaser'
import config from '@/game/config'
import Player from '@/game/prefabs/Player'
import Enemies from '@/game/prefabs/Enemies'
import Boom from '@/game/prefabs/Boom'

export default class GameScene extends Scene {
    constructor() {
        super({key: 'GameScene'});
    }

    init(){
        this.cursors = {
            left: this.input.keyboard.addKey('LEFT'),
            right: this.input.keyboard.addKey('RIGHT'),
            up: this.input.keyboard.addKey('UP'),
            down: this.input.keyboard.addKey('DOWN'),
            fire:  this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        }
        this.score = 0
    }

    createScoreText(){
        this.scoreText = this.add.text(50, 50, `Score: 0`, {
            font: '40px Arial',
            fill: '#ffffff'
        })
    }

    create() {
        this.createBackground()
        if(!this.sounds){
            this.createSounds()
        }
        this.player = new Player(this)
        this.enemies = new Enemies(this)
        this.createCompleteEvents()
        this.addOverlap()
        this.createScoreText()
    }

    createSounds() {
        this.sounds = {
            theme: this.sound.add('theme'),
            boom: this.sound.add('boom')
        }
        this.sounds.theme.play({volume: 0.05, loop: true})
    }

    addOverlap(){
        this.physics.add.overlap(this.player.fires, this.enemies, this.onOverlap, undefined, this)
        this.physics.add.overlap(this.enemies.fires, this.player, this.onOverlap, undefined, this)
        this.physics.add.overlap(this.player, this.enemies, this.onOverlap, undefined, this)
      }

    onOverlap(source, target){
        const enemy = [source, target].find(item => item.texture.key === 'enemy')
        if(enemy){
            ++this.score
            this.scoreText.setText(`Score: ${this.score}`)
            this.sound.play('boom', {volume: 0.05})
            Boom.generate({scene: this, x: enemy.x, y: enemy.y})
        }
        source.setAlive(false)
        target.setAlive(false)
    }

    createCompleteEvents(){
        this.player.once('died', this.onComplete, this)
        this.events.once('enemies-killed', this.onComplete, this)
    }

    onComplete(){
        this.scene.start('StartScene', {
            score: this.score,
            completed: this.player.active
        })
    }

    update(){
        this.player.move()
        this.bg.tilePositionX += 0.5
    }

    createBackground(){
        this.bg = this.add.tileSprite(0,0, config.width, config.height, 'background').setOrigin(0)
    }

}
