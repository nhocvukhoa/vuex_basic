<template>
  <div class="navbar">
    <h1>My Vuex App Todos</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li v-if="checkAuthenticated">Total todos: {{ totalTodo.length }}
        <button @click="toggleAuth">Logout</button>
      </li>
      <button v-else @click="toggleAuth">Login</button>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    const totalTodo = computed(() => {
      return store.getters.totalTodo
    })

    const checkAuthenticated = computed(() => {
      return store.getters.checkAuthenticated
    })

    const toggleAuth = () => {
      return store.commit('toggleAuth')
    }

    return {
      totalTodo,
      checkAuthenticated,
      toggleAuth
    }
  }
}
</script>

<style>
.navbar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}

.navbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
</style>
