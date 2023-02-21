<template>
  <div class="container-fluid">
  <div class="row">
  .col-12
  
  </div>
  </div>
</template>

<script>
import Pop from '../utils/Pop';
import { giftsService } from '../services/GiftsService'
import { onMounted } from 'vue';

export default {
  setup() {
    async function getGifts() {
      try {
        await giftsService.getGifts()
      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => {
      getGifts()
    })
    return {}
  }
}
</script>

<style scoped lang="scss">
</style>
