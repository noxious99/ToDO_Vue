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

    <!-- //// pagination-starts //// -->
    <button
      @click="prevPage"
      class="inline-block py-3 px-4 font-medium text-white bg-slate-600 rounded-lg shadow-md mx-2"
    >
      Prev
    </button>
    <div v-for="currentPage in currentPage + 5" class="flex flex-row">
      <button
        @click="pagination(currentPage - 1)"
        class="py-3 px-5 font-medium text-white bg-slate-600 rounded-xl shadow-md mx-2"
      >
        {{ currentPage }}
      </button>
    </div>
    <button
      @click="nextPage"
      class="inline-block py-3 px-4 font-medium text-white bg-slate-600 rounded-lg shadow-md mx-2"
    >
      Next
    </button>
    <!-- //// pagination-ends //// -->
  </div>
</template>

<script>
import axios from "axios";
import { computed } from "vue";

export default {
  data() {
    return {
      isLoading: false,
      todos: this.$store.state.todos,
      value: "",
      page: 0,
      limit: 10,
      totalItem: 0,
      totalPage: 0,
      currentPage: 0,
      endIdx: 0,
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
    pagination(idx) {
      this.page = idx;
      console.log(`thisPage ${this.page}`);
      this.fetchData(this.page * this.limit, this.limit);
    },
    nextPage() {
      this.currentPage++;
      this.endIdx++;
      console.log(this.currentPage);
    },
    prevPage() {
      this.currentPage--;
      this.endIdx--;
      console.log(this.currentPage);
    },
    async totalPageCount() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      this.totalItem = res.data.length;
      this.totalPage = this.totalItem / 10;
      console.log(this.totalPage);
    },
    async fetchData(page, limit) {
      try {
        this.isLoading = true;
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/todos?_start=${page}&_limit=${limit}`
        );
        (this.todos = []),
          (this.todos = this.$store.state.todos),
          (this.todos = [...res.data]);
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
    this.totalPageCount();
    this.pagination();
  },
};
</script>
