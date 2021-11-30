<template>
  <div :id="containerId" v-if="downloaded">

  </div>
  <div class="placeholder" v-else>
    Downloading ...
  </div>
</template>

<script>
import config from '@/game/config'

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
      this.gameInstance = this.game.launch(this.containerId, config)
    })
  },
  unmounted() {
    this.gameInstance.destroy(false)
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.placeholder {
  font-size: 2rem;
  font-family: 'Courier New', Courier, monospace;
}
</style>
