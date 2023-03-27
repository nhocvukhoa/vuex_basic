import { createStore } from 'vuex'

const store = createStore({
  // Tất cả dữ liệu mà store nắm giữ
  state: {
    todos: [
      {
        id: 1,
        title: 'Công việc 1',
        completed: true
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
    ],
    auth: {
      isAuthenticated: true,
    }
  },
  // Tạo ra những chiếc xe
  getters: {},
  actions: {},
  mutations: {}
})

export default store
