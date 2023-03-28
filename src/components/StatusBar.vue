<template>
  <div class="status-bar">
    <p>Done</p>
    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const doneTodos = computed(() => {
      return store.getters.doneTodos
    })

    return {
      doneTodos
    }
  }
}
</script>
