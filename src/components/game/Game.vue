<template>
  <div  class="main-game">
    <div :id="containerId">

    </div>
  </div>

</template>

<script>
import GameScene from '@/game/scenes/GameScene'
import BootScene from '@/game/scenes/BootScene'
import PreloadScene from '@/game/scenes/PreloadScene'
import StartScene from '@/game/scenes/StartScene'
import gameConfig from '@/game/config'
import Phaser from "phaser"

export default {
  name: 'Game',
  data() {
    return {
      downloaded: false,
      gameInstance: null,
      containerId: 'game-container',
      game: null,
    }
  },
  async mounted() {
    this.game = await import('@/game/main')
    this.downloaded = true
    this.$nextTick(() => {
      this.gameInstance = this.game.launch(this.containerId, this.config)
    })
  },
  unmounted() {
    this.gameInstance.destroy(false)
  },
  methods: {

  },
  computed: {
    config() {
      const config = gameConfig
      const gameScene = new GameScene()
      const bootScene = new BootScene()
      const preloadScene = new PreloadScene()
      const startScene = new StartScene()
      config.scene = [bootScene, preloadScene, startScene, gameScene]
      return config
    }
  }
}
</script>

<style lang="scss" scoped>
.placeholder {
  font-size: 2rem;
  font-family: 'Courier New', Courier, monospace;
}

</style>
