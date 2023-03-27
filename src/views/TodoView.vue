<template>
  <NavBar />
  <div class="todo-list">
    <ul v-if="checkAuthenticated">
      <li v-for="todo in todos" :key="todo.id" @click="test">{{ todo.title }}</li>
    </ul>
    <p v-else class="auth-error">Not auth</p>
  </div>
  <StatusBar />
  <ProgressBar />
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import NavBar from '../components/NavBar.vue'
import StatusBar from '../components/StatusBar.vue'
import ProgressBar from '../components/ProgressBar.vue'

export default {
  components: {
    NavBar,
    StatusBar,
    ProgressBar,
  },
  setup() {
    const store = useStore();

    const todos = computed(() => {
      return store.state.todos
    });

    const checkAuthenticated = computed(() => {
      return store.state.auth.authenticated;
    });

    return {
      todos,
      checkAuthenticated
    }
  }
}
</script>

<style>
.todo-list ul {
  padding: 0 10px 10px 10px;
  list-style-type: none;
}

.todo-list li {
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 4px;
  background: rgb(240, 240, 240);
  color: black;
}

.auth-error {
  text-align: center;
}
</style>
