import Enemy from '@/game/prefabs/Enemy'

export default class Enemies extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super();
        this.scene = scene
        this.countMax = 10
        this.countCreated = 0
        this.timer = this.scene.time.addEvent({
            delay: 1000,
            loop: true,
            callback: this.tick,
            callbackScope: this
        })
    }

    tick() {
        console.log('current length', this.getLength())
        if(this.countCreated < this.countMax){
            this.createEnemy()
        }else{
            console.log('remove timer')
            this.timer.remove()
        }
    }

    createEnemy() {
        let enemy = this.getFirstDead()
        if(!enemy){
            console.log('Create new enemy')
            enemy = Enemy.generate(this.scene)
            this.add(enemy)
        }else{
            console.log('Reset existing enemy')
            enemy.reset()
        }
        this.countCreated++
        enemy.move()
    }
}
