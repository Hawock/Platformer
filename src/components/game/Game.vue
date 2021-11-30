<template>
  <div :id="containerId" v-if="downloaded">

  </div>
  <div class="placeholder" v-else>
    Downloading ...
  </div>
</template>

<script>
import GameScene from '@/game/scenes/GameScene'
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
      const gameScene = new GameScene()
      return {
        type: Phaser.AUTO,
        width: 1280,
        height: 720,
        scene: [gameScene],
      }
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
