<template>
  <p class="progress-bar">Progress: {{ progress }}%</p>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const progress = computed(() => {
      return store.getters.progress
    })

    return {
      progress
    }
  }
}
</script>

<style>
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}
</style>
