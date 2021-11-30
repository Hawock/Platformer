import Phaser from 'phaser'

function launch(containerId, config) {
    return new Phaser.Game(config)
}

export default launch
export { launch }
