<template>
  <div class="flex flex-col justify-center items-center m-10">
    <div class="mb-5"><AddTask /></div>
    <p
      class="font-bold text-xl px-10 py-4 bg-yellow-300 rounded-lg mb-5 shadow-md shadow-slate-300"
    >
      ToDo List
    </p>
    <div class="self-end">
      <div class="flex justify-end items-center mb-4">
        Filter:
        <button class="bg-slate-400 p-2 m-2 rounded-md" @click="allState">
          All
        </button>
        |
        <button class="bg-slate-400 p-2 m-2 rounded-md" @click="completedState">
          Completed
        </button>
        |
        <button class="bg-slate-400 p-2 m-2 rounded-md" @click="backlogState">
          Not Done
        </button>
      </div>
    </div>
    <div>
      <ul>
        <li
          class="flex justify-between bg-slate-200 border-2 border-black mb-2 p-4 rounded-md min-w-600"
          v-for="todo in todos"
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
    <div><todos :state="state" /></div>
  </div>
</template>

<script>
import AddTask from "./AddTask.vue";
import todos from "./Todos.vue";

export default {
  name: "Home",
  data() {
    return {
      state: localStorage.getItem("state"),
    };
  },
  components: {
    todos,
    AddTask,
  },
  computed: {
    todos() {
      if (this.state === "All") {
        return this.$store.state.todos.reverse();
      } else if (this.state === "Completed") {
        return this.$store.state.todos.filter((todo) => todo.completed);
      } else if (this.state === "NotDone") {
        return this.$store.state.todos.filter((todo) => !todo.completed);
      }
    },
  },
  methods: {
    donePost(id, completed) {
      this.$store.commit("completedTask", { id, completed });
    },
    allState() {
      localStorage.setItem("state", "All");
      this.state = localStorage.getItem("state");
      console.log(this.state);
    },
    completedState() {
      localStorage.setItem("state", "Completed");
      this.state = localStorage.getItem("state");
      console.log(this.state);
    },
    backlogState() {
      localStorage.setItem("state", "NotDone");
      this.state = localStorage.getItem("state");
      console.log(this.state);
    },
  },
};
</script>

<style>
input::placeholder {
  color: #ff0000;
}
</style>
