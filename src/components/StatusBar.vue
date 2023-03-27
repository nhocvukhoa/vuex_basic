<template>
	<div class="status-bar">
		<p>Done</p>
		<ul>
			<li v-for="todo in filteredTodos" :key="todo.id">{{ todo.title }}</li>
		</ul>
	</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
	setup() {
		const store = useStore();

		const filteredTodos = computed(() => {
			return store.state.todos.filter(todo => todo.completed);
		});

		return {
			filteredTodos,
		}
	}
}
</script>
