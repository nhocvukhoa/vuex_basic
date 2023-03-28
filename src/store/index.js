import { createStore } from 'vuex'

const store = createStore({
  // Tất cả dữ liệu mà store nắm giữ
  state: {
    todos: [
      {
        id: 1,
        title: 'Công việc 1',
        completed: false
      },
      {
        id: 2,
        title: 'Công việc 2',
        completed: true
      },
      {
        id: 3,
        title: 'Công việc 3',
        completed: false
      }
    ],
    auth: {
      isAuthenticated: true
    }
  },
  // Tạo ra những chiếc xe
  getters: {
    totalTodo: (state) => state.todos,
    doneTodos: (state) => state.todos.filter((todo) => todo.completed),
    progress: (state, getters) => {
      const doneTodos = getters.doneTodos

      return Math.round((doneTodos.length / state.todos.length) * 100)
    }
  },
  actions: {},
  mutations: {}
})

export default store
