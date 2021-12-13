import Enemy from '@/game/prefabs/Enemy'
import Fires from '@/game/prefabs/Fires'

export default class Enemies extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super(scene.physics.world, scene);
        this.scene = scene
        this.fires = new Fires(this.scene)
        this.countMax =  30
        this.countCreated = 0
        this.countKilled =  0
        this.timer = this.scene.time.addEvent({
            delay: 500,
            loop: true,
            callback: this.tick,
            callbackScope: this
        })
    }

    tick() {
        if(this.countCreated < this.countMax){
            this.createEnemy()
        }else{
            this.timer.remove()

        }
    }

    onEnemyKilled(){
        ++this.countKilled
        console.log(this.countKilled, '/', this.countMax)
        if(this.countKilled == this.countMax){
            this.scene.events.emit('enemies-killed')
        }
    }

    createEnemy() {
        let enemy = this.getFirstDead()
        if(!enemy){
            enemy = Enemy.generate(this.scene, this.fires)
            enemy.on('died', this.onEnemyKilled, this)
            this.add(enemy)
        }else{
            enemy.reset()
        }
        this.countCreated++
        enemy.move()
    }
}
