<template>
	<TheNavbar />
  <div class="todo-list">
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheNavbar from '../components/TheNavbar.vue'

const todos = ref([
  {
    id: 1,
    title: 'Công việc 1',
    completed: false
  },
  {
    id: 2,
    title: 'Công việc 2',
    completed: false
  },
  {
    id: 3,
    title: 'Công việc 3',
    completed: false
  }
])
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
</style>
