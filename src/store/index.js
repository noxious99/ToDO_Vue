import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    counter: 3,
    todos: JSON.parse(localStorage.getItem('tasks')) || [], // Load initial tasks from localStorage
  },
  mutations: {
    increaseCounter(state, payload) {
      state.counter += payload;
      console.log(payload);
    },
    decreaseCounter(state, payload) {
      state.counter -= payload;
      console.log(payload);
    },
    setTodos(state, payload) {
      state.todos = payload;
    },
    addTodo(state, newTask) {
      state.todos.push(newTask);
    },
    completedTask(state, {id, completed}) {
        let tasks = JSON.stringify(state.todos)
        tasks = JSON.parse(tasks)
        tasks = tasks.map((task) => task.id === id? {...task, completed: true} : task)
        state.todos = tasks
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  },
  actions: {
    async increaseCounter({ commit }) {
      const res = await axios.get(
        'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
      );
      commit('increaseCounter', res.data);
    },
    async decreaseCounter({ commit }) {
      const res = await axios.get(
        'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
      );
      commit('decreaseCounter', res.data);
    },
    loadTodos({ commit }) {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      commit('setTodos', tasks);
    },
    addTodo({ commit }, newTask) {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      commit('addTodo', newTask);
    },
  },
  modules: {},
});
