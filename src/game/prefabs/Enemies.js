import Enemy from '@/game/prefabs/Enemy'

export default class Enemies extends Phaser.Physics.Arcade.Group {
    constructor(scene) {
        super();
        this.scene = scene
    }

    createEnemy() {
        //let group = this.add.group()
        let enemy = Enemy.generate(this.scene)
        this.add(enemy)
        enemy.move()
        //this.setVelocityX(this.enemy1.velocity)
    }
}
