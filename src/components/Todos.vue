<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <ul v-else>
      <li
        class="flex justify-between bg-slate-200 border-2 border-black mb-2 p-4 rounded-md min-w-600"
        v-for="todo in todoList"
        :key="todo.id"
      >
        <p class="font-semibold mr-3">Task</p>
        <p
          :class="
            todo.completed ? 'line-through' : 'text-red-700 font-semibold'
          "
        >
          {{ todo.title }}
        </p>
        <div class="flex items-center ml-3">
          <input
            type="checkbox"
            v-model="todo.completed"
            @change="donePost(todo.id, todo.completed)"
          />
          <div
            :class="todo.completed ? 'bg-green-500' : 'bg-red-500'"
            class="mx-2 w-4 h-4 rounded-full"
            :aria-label="todo.completed ? 'Completed' : 'Not completed'"
          ></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isLoading: false,
      todos: [],
      value: "",
    };
  },
  props: {
    state: {
      type: String,
    },
  },
  computed: {
    todoList() {
      if (this.todos) {
        if (this.state === "Completed") {
          return this.todos.filter((todo) => todo.completed);
        } else if (this.state === "NotDone") {
          return this.todos.filter((todo) => !todo.completed);
        } else {
          return this.todos;
        }
      }
    },
  },
  methods: {
    async fetchData() {
      try {
        this.isLoading = true;
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10"
        );
        this.todos = res.data;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.isLoading = false;
      }
    },
    donePost(id, completed) {
      console.log(`Task ${id} completed status: ${completed}`);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
