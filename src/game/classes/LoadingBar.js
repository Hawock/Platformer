import config from '@/game/config'

export default class loadingBar {
    constructor(scene) {
        this.scene = scene
        this.style = {
            boxColor: 0xD3D3D3,
            x: config.width / 2 - 450,
            y: config.height / 2 + 250,
            width: 900,
            height: 25
        }
        this.progressBox = this.scene.add.graphics()
        this.progressBar = this.scene.add.graphics()

        this.showProgressBox()
    }

    showProgressBox(){
        this.progressBox.fillStyle(this.style.boxColor)
        this.progressBox.fillRect(this.style.x, this.style.y, this.style.width, this.style.height)
    }
}
